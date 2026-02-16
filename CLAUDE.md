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

## ページ構成 (予定)

- **トップページ (`/`)**: ヒーローセクション、簡単な自己紹介、主要な作品のハイライト
- **プロジェクト一覧 (`/projects`)**: プロジェクト一覧 (GitHub 連携等)

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
- デザインの指定がある場合、Claude in Chrome を用いて corner や border の形状が一致するか確認する

## その他ルール

- コンポーネントを shadcn/ui で作成する
- Tailwind では arbitrary value を可能なかぎり避けトークンを使用する
- Tailwind のトークンは可能な限り上書きせず、追加もしくは、shadcn/ui で吸収する
- `rm -rf` の代わりに `gomi -rf` を使う

## CLAUDE.md メンテナンスルール

- **plan 完了後**: 設計変更・技術選定の結果を CLAUDE.md に反映する
- **機能追加・削除後**: ページ構成、ディレクトリ構成、技術スタック、開発コマンドを更新する
- **依存関係変更後**: 技術スタックや開発コマンドに差分があれば更新する
- CLAUDE.md は常にプロジェクトの現状と一致させること
