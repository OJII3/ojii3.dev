# ojii3.dev - ポートフォリオサイト

## プロジェクト概要

OJII3 の個人ポートフォリオサイト。

## 技術スタック

- **フレームワーク**: React + Vite
- **ルーティング**: TanStack Router (ファイルベースルーティング)
- **スタイリング**: Tailwind CSS v4
- **UIコンポーネント**: shadcn/ui
- **ランタイム/パッケージマネージャ**: Bun
- **デプロイ**: Cloudflare Workers
- **リンター/フォーマッター**: Biome

## ディレクトリ構成 (予定)

```
.
├── CLAUDE.md
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── biome.json
├── components.json          # shadcn/ui 設定
├── public/
│   └── favicon.ico
├── src/
│   ├── main.tsx             # エントリーポイント
│   ├── styles.css           # Tailwind のグローバルCSS
│   ├── routeTree.gen.ts     # TanStack Router 自動生成
│   ├── components/
│   │   └── ui/              # shadcn/ui コンポーネント
│   ├── lib/
│   │   └── utils.ts         # ユーティリティ (cn関数 等)
│   └── routes/
│       ├── __root.tsx        # ルートレイアウト
│       ├── index.tsx         # トップページ
│       ├── about.tsx         # 自己紹介
│       └── works.tsx         # 作品一覧
└── wrangler.toml             # Cloudflare Workers 設定
```

## ページ構成 (予定)

- **トップページ (`/`)**: ヒーローセクション、簡単な自己紹介、主要な作品のハイライト
- **自己紹介 (`/about`)**: スキル、経歴、興味分野
- **作品一覧 (`/works`)**: プロジェクト一覧 (GitHub 連携等)

## 開発コマンド

```sh
nr dev          # 開発サーバー起動
nr build        # プロダクションビルド
nr preview      # ビルド結果のプレビュー
nr lint         # Biome による lint
nr format       # Biome による format
nr deploy       # Cloudflare Workers へデプロイ
bun test        # テスト実行 (Bun 予約コマンド)
```

## 開発ルール

- コンポーネントは関数コンポーネント + TypeScript で書く
- shadcn/ui のコンポーネントを積極的に活用する
- Tailwind CSS のユーティリティクラスでスタイリングする
- ファイルベースルーティング (TanStack Router) に従う
- `nr` コマンドを使う (`npm run` / `pnpm run` の代替)
- `bun test`, `bun build` などの Bun 予約コマンドはそのまま実行する
- Biome で lint/format を統一する (ESLint/Prettier は使わない)
- `rm -rf` の代わりに `gomi -rf` を使う

## CLAUDE.md メンテナンスルール

- **plan 完了後**: 設計変更・技術選定の結果を CLAUDE.md に反映する
- **機能追加・削除後**: ページ構成、ディレクトリ構成、技術スタック、開発コマンドを更新する
- **依存関係変更後**: 技術スタックや開発コマンドに差分があれば更新する
- CLAUDE.md は常にプロジェクトの現状と一致させること
