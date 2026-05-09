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

## ページ構成

- **トップページ (`/`)**: 左側に将来の 3D キャラクター Canvas 領域を確保し、右側にプロフィールパネルを配置する
- **プロジェクト一覧 (`/projects`)**: Figma のモバイル版 Works 画面を基準に、64px の薄いヘッダー、角付き戻るリンク、2列カードグリッドを配置する。PC 版はヘッダーを厚くせず、カード幅を保ったまま最大 4 列で中央配置する。カードは画像の切り抜きや背景加工に依存せず、CSS の枠・グラデーション・テキスト情報だけでも成立する Project Data Card として扱う。
- **プロジェクト詳細モーダル**: Figma の横長 Data File パネル案を基準に、一覧カードから詳細を開く。画像がある場合は規格化されたメディア枠に入れ、画像がない場合もステータス、種別、説明、リンクで成立する構成にする。

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

## Git 戦略

- 一つの機能追加ごとに test を作成する
- 一つの機能追加ごとに commit する
- 一つの機能変更ごとに commit する
- commit はシンプルな conventional commit
- 一つの機能・領域に関する変更が完了するごとに PR を作成

## テスト戦略

- `nr test`, `nr lint` を使用してチェックを行なう
- デザインの指定がある場合、Codex in Chrome を用いて corner や border の形状が一致するか確認する

## スタイルトークン方針

- Tailwind v4 の `@theme` トークンは `src/styles.css` に集約する
- 色トークンは `canvas`, `surface-*`, `line-*`, `content-*`, `brand-*` の意味ベースで命名する
- コンポーネント固有の固定寸法は spacing / aspect トークンとして定義し、arbitrary value は可能なかぎり避ける
- ページ全体やモーダルの画面高計算は、モバイルブラウザの動的ツールバーを考慮して `vh` ではなく `dvh` を使う
- `clip-path` などの幾何形状は `@layer utilities` の `clip-*` utility に集約し、コンポーネント内の inline style に埋め込まない
- トップページの Canvas 予約領域など、複数トークンを組み合わせるレイアウトは `@layer utilities` の semantic utility に集約する

## その他ルール

- コンポーネントを shadcn/ui で作成する
- Tailwind では arbitrary value を可能なかぎり避けトークンを使用する
- Tailwind のトークンは可能な限り上書きせず、追加もしくは、shadcn/ui で吸収する
- `rm -rf` の代わりに `gomi -rf` を使う

## AGENTS.md メンテナンスルール

- **plan 完了後**: 設計変更・技術選定の結果を AGENTS.md に反映する
- **機能追加・削除後**: ページ構成、ディレクトリ構成、技術スタック、開発コマンドを更新する
- **依存関係変更後**: 技術スタックや開発コマンドに差分があれば更新する
- AGENTS.md は常にプロジェクトの現状と一致させること
