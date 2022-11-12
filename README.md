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

1. Add this command `export: npm run build && next export` to `package.json` so you can export the next app as static HTML. If you run `npm run export`, you will see exported things in `/out` directory.
2. Add `out` to `.gitignore`
3. Create `.github/workflows/gh-pages.yml` (you can replace the filename as you like) and edit like this.

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

4. Go to your GitHub Project and set up for GitHub pages from Settings.
5. When you push your project to master, your GitHub Pages will be uploaded!

## In Addition

- You can introduce Google Analytics 4 with Google Tag Manager.
- You can introduce `next-static` from npm to automatically generate a sitemap.

## attentin

- You can set security headers at `next.config.js`, but it won't work if you export at GitHub Pages.
- Perhaps You need to change image optimizer setting at `next.config.js`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
