import Head from "next/head"

const ContentSecurityPolicy = () => {
  return (
    <meta http-httpEquiv="Content-Security-Policy" content={`
      default-src 'self';
      script-src 'self';
      child-src example.com;
      style-src 'self' example.com;
      font-src 'self';  
`
    } />
  )
}

export default ContentSecurityPolicy