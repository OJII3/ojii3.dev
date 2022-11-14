# Next.js × GitHub Pages

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## OverView

1. 普通にNext.jsでプロジェクトを作る
2. ビルド
3. 静的HTMLとしてエクスポート
4. 2 ~ 3 の流れ + GitHub Pagesへ公開　をGitHub Actionsで自動化

## Environment

- Node.js: v16
- Next.js: v13
- React-Bootstrap: v2.5

Node環境の用意されており、ローカルリポジトリがGitHubのリポジトリとつながっている前提です。

## First Step: Create Next.js App

1. `npx create-next-app my-app --typescript`
2. `cd my-app`
3. `npm i react-bootstrap bootstrap`
4. Edit Pages (You should create `component` directory to reuse components such as navbar or footer)
5. pages/filename will become the path to the page when you build

Run `npm run dev` to see how app works on `localhost:3000`.

## Get Ready to export

1. `package.json` の `scripts` にエクスポート用のコマンド `export: npm run build && next export` を追加します。これで`npm run export` をターミナルで実行すると、`/out` ディレクトリに静的なHTMLが出力されるようになります。
2. Gitに残す必要はないので、`.gitignore` に `out` を追記します。
3. `.github/workflows/gh-pages.yml` (ファイル名は自由)を以下の内容で作成します。

  ```gh-pages.yml
  name: github pages

  # ref: https://qiita.com/manten120/items/87e9e822800403904dc8
  # masterブランチにプッシュしたときjobsに記述した操作を行う
  on:
    push:
      branches:
      - main

  jobs:
    build-deploy:
      # ubuntu OS を仮想マシン上に用意する
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v3

      # Node.js環境のセットアップを行う
      - name: setup node
        uses: actions/setup-node@v3
        with:
          node-version: '16.x'
      
      # npm install の際にキャッシュを使うよう設定
      - name: Cache dependencies
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      # package.jsonに基づき依存パッケージをインストールする
      - name: install
        run: npm install --frozen-lockfile

      # Next.jsアプリをビルドする
      # プロジェクトルート直下に.nextディレクトリができる
      # 静的なHTMLとしてNext.jsアプリを生成する
      # プロジェクトルート直下にoutディレクトリができる
      # そのなかに、HTMLファイル群と、それらが読み込むJSファイル群を収めた_nextディレクトリがある
      - name: export
        run: npm run export

      # しかしGitHub Pagesの仕様として_から始まるディレクトリが見えず404となる
      # つまりHTMLからJSを読み込めない
      # これを回避するために.nojekyllファイルをoutディレクトリに作る
      - name: add nojekyll
        run: touch ./out/.nojekyll

      # gh-pagesブランチにoutディレクトリの中身をプッシュする
      # gh-pagesブランチは自動的に作成される
      - name: deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
  ```

4. GitHubからSetting -> Pages にて `gh-pages` ブランチを公開するよう設定します。
5. これで、`master`ブランチにpushすると、GitHub Actionsが動き、自動でGitHub Pages側が更新されるようになります！

## In Addition

- You can introduce Google Analytics 4 with Google Tag Manager.
- You can introduce `next-static` from npm to automatically generate a sitemap.

## next export の注意点

`next export`で静的なHTMLとして出力することで、様々な静的サイトホスティングサービスで使えるのは、メリットですが、サーバー側の処理を必要とするNext.jsの一部機能が使えなくなります。

- `next.config.js` で `image optimizer` の設定を変える必要があります（確か）.
- `next.config.js`で`security headers`を設定できますがこれはサーバー側の処理（多分）なので、反映されません。
- `API routing` は使えません。

無料サーバーを借りたり、VercelでNext.jsとしてデプロイしたりすれば解決できます。GitHub Pagesでは無理です。少なくとも無料では。
