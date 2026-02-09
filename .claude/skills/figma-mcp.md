---
description: Figma の URL やノード ID からコードを生成するとき、Figma デザインをもとにコンポーネントを実装するとき、Figma MCP サーバーを使ってデザインの取得・スクリーンショット・コンポーネントマッピングを行うときに使用する
---

# Figma MCP スキル

Figma デザインからコードを生成する際に使用するスキル。Figma MCP サーバーを活用して、デザインの取得・コード生成・コンポーネントマッピングを行う。

## トリガー条件

ユーザーが以下のいずれかを要求した場合にこのスキルを使用する:
- Figma の URL やノード ID からコードを生成したい
- Figma デザインをもとにコンポーネントを実装したい
- Figma のデザインを確認・スクリーンショットを取得したい
- Figma のノードとコードベースのコンポーネントをマッピングしたい

## ワークフロー

### 1. Figma URL の解析

ユーザーから Figma URL を受け取ったら、以下を抽出する:
- `fileKey`: URL の `/design/:fileKey/` 部分
- `nodeId`: URL の `?node-id=:int1-:int2` 部分 (`-` を `:` に変換)
- ブランチ URL の場合: `/branch/:branchKey/` の `branchKey` を `fileKey` として使用

### 2. デザインコンテキストの取得

`mcp__figma__get_design_context` を使ってデザイン情報とコード生成用のコンテキストを取得する。これが最も優先されるツール。

### 3. コード生成

取得したデザインコンテキストをもとに、プロジェクトの技術スタックに合わせてコードを生成する:
- **フレームワーク**: React (関数コンポーネント + TypeScript)
- **スタイリング**: Tailwind CSS v4 のユーティリティクラス
- **UIコンポーネント**: shadcn/ui を積極活用
- **コンポーネント配置**: `src/components/` 配下

### 4. アセットのダウンロード

`get_design_context` が返すアセット URL から必要な画像等をダウンロードし、`public/` ディレクトリに配置する。

## 利用可能な Figma MCP ツール

| ツール | 用途 |
|---|---|
| `mcp__figma__get_design_context` | デザインからコード生成用コンテキストを取得 (最優先) |
| `mcp__figma__get_screenshot` | ノードのスクリーンショットを取得 |
| `mcp__figma__get_metadata` | ノードの構造・メタデータを XML で取得 |
| `mcp__figma__get_variable_defs` | デザイン変数 (色・サイズ等) の定義を取得 |
| `mcp__figma__get_code_connect_map` | ノードとコードコンポーネントのマッピングを取得 |
| `mcp__figma__add_code_connect_map` | ノードとコードコンポーネントのマッピングを追加 |
| `mcp__figma__get_code_connect_suggestions` | Code Connect マッピングの提案を取得 |
| `mcp__figma__generate_diagram` | FigJam でダイアグラムを生成 (Mermaid.js) |

## 注意事項

- `get_design_context` を `get_metadata` より優先して使用する
- `clientFrameworks` には `react` を指定する
- `clientLanguages` には `typescript,html,css` を指定する
- 生成されたコードは Biome で lint/format を通すこと (`nr lint`, `nr format`)
- shadcn/ui に該当するコンポーネントがある場合は、自前実装せず shadcn/ui を使う
