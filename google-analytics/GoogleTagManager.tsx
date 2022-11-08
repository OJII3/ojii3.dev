import Script from 'next/script'


declare global {
  // dataLayerをグローバル変数にする
  var dataLayer: Record<string, unknown>[]
}


export const GoogleTagManager: () => JSX.Element = () => {
  // クライアントサイドで環境変数を使うには、NEXT_PUBLIC_がいる。
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''
  return (
    <Script
      id='gtm'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
`
      }}
    />
  )
}

/* 
公式の説明では、<body>の後に<noscript>の記述を入れるようありますが、
このサイトはクライアント側のJavaScriptが有効である前提で作成しているため、
ここでは省略しています。
*/
