---
description: ノッチ、コーナーカット、平行四辺形、台形、六角形バッジなどの幾何学的な形状を CSS clip-path で設計・実装するとき、または clip-path と SVG ボーダーを組み合わせたパネルデザインを作るときに使用する
---

# 幾何学的クリップパス・ノッチデザインスキル

切り欠き（ノッチ）、コーナーカット、平行四辺形などの幾何学的な形状を CSS `clip-path: polygon()` で設計・実装するためのスキル。

## トリガー条件

ユーザーが以下のいずれかを要求した場合にこのスキルを使用する:

- 要素にノッチ、切り欠き、コーナーカットを追加したい
- 平行四辺形、台形、六角形バッジなどの幾何学的形状を作りたい
- `clip-path` の設計・デバッグをしたい
- SVG ボーダーと clip-path を組み合わせたパネルデザインを作りたい

## 基本パターン集

### コーナーカット（右下）

```css
/* CUT = カットサイズ (px) */
clip-path: polygon(
  0 0, 100% 0,
  100% calc(100% - CUT),
  calc(100% - CUT) 100%,
  0 100%
);
```

### コーナーカット（右上）

```css
clip-path: polygon(
  0 0,
  calc(100% - CUT) 0,
  100% CUT,
  100% 100%,
  0 100%
);
```

### コーナーカット（複数コーナー）

```css
/* 右上 + 右下 */
clip-path: polygon(
  0 0,
  calc(100% - CUT) 0,
  100% CUT,
  100% calc(100% - CUT),
  calc(100% - CUT) 100%,
  0 100%
);
```

### 平行四辺形

```css
/* 左右の辺が同じ傾きで平行。OFFSET = height / 傾き */
clip-path: polygon(
  OFFSET 0,
  100% 0,
  calc(100% - OFFSET) 100%,
  0 100%
);
```

### 台形（下辺が広い）

```css
clip-path: polygon(
  INSET 0,
  calc(100% - INSET) 0,
  100% 100%,
  0 100%
);
```

### 六角形バッジ

```css
clip-path: polygon(
  INSET 0,
  calc(100% - INSET) 0,
  100% 50%,
  calc(100% - INSET) 100%,
  INSET 100%,
  0 50%
);
```

### 矢印（右向き）

```css
clip-path: polygon(
  0 0, 70% 0,
  100% 50%,
  70% 100%, 0 100%
);
```

### サイドノッチ付きパネル

```css
/* 右辺に上下ノッチ（凹み）を持つパネル */
clip-path: polygon(
  0 0,
  100% 0,
  100% TOP_NOTCH_START,
  calc(100% - NOTCH_DEPTH) TOP_NOTCH_END,
  calc(100% - NOTCH_DEPTH) BOTTOM_NOTCH_START,
  100% BOTTOM_NOTCH_END,
  100% 100%,
  0 100%
);
```

## ボーダーの実装方法

### 問題: `border` + `clip-path` の組み合わせ

CSS の `border` は `clip-path` で切られるため、カット部分のボーダーが途切れる。

### 解決策 1: レイヤー重ね（推奨・CSS のみ）

外側にボーダー色の背景、内側に本体の背景を重ねる。

```tsx
<div className="relative" style={{ clipPath: "polygon(...)" }}>
  {/* ボーダーレイヤー（背景色 = ボーダー色） */}
  <div className="absolute inset-0 bg-[BORDER_COLOR]" />
  {/* 背景レイヤー（B px 内側、カット値を調整） */}
  <div
    className="absolute inset-[Bpx] bg-[BG_COLOR]"
    style={{
      clipPath: "polygon(...)", /* 内側用に調整（後述） */
    }}
  />
  {/* コンテンツ */}
  <div className="relative z-10">...</div>
</div>
```

#### 斜め辺のボーダー幅を均一にする

`inset` で内側レイヤーを縮めるだけでは、斜め辺のボーダーが水平・垂直辺より太くなる。斜め辺に垂直な方向の距離は、水平・垂直の inset 値より小さくなるため。

均一にするには、内側 clip-path のカット値を斜め辺の角度から計算して調整する必要がある:

```
斜め辺の角度 θ = atan2(CUT_Y, CUT_X)

水平方向の内側オフセット = B / sin(θ)
垂直方向の内側オフセット = B / cos(θ)

ただし 45度カット（CUT_X == CUT_Y）の場合:
  内側カット値 ≈ CUT - B * (√2 - 1) ≈ CUT - B * 0.414
```

**実用的な近似:** 45度カットでボーダー幅 1px の場合、内側カット値を外側より 1px 小さくすれば視覚的にはほぼ問題ない。厳密な均一性が必要な場合のみ上記の計算を行う。

### 解決策 2: SVG ボーダーオーバーレイ（可変高さパネル向け）

パネル全体に SVG を `absolute inset-0` で重ねてボーダーを描画する。SVG の `stroke` は辺の角度に関係なく均一な太さで描画されるため、斜め辺の太さ調整が不要。

```tsx
<div className="relative w-full">
  <div className="relative" style={{ clipPath: "..." }}>
    {/* コンテンツ */}
  </div>
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 WIDTH HEIGHT"
    preserveAspectRatio="none"
    fill="none"
  >
    <path d="M0 0 L..." stroke="..." strokeWidth="2" vectorEffect="non-scaling-stroke" />
  </svg>
</div>
```

**注意:** `preserveAspectRatio="none"` は viewBox を引き伸ばすため、斜め辺の角度がアスペクト比で変わる。`vectorEffect="non-scaling-stroke"` でストローク幅は維持される。

### 使い分け

| 状況 | 推奨手法 |
|---|---|
| 固定サイズ or 高さが大きく変わらない要素 | レイヤー重ね |
| 斜め辺のボーダー幅の均一性が重要 | SVG オーバーレイ |
| 可変高さのパネル全体のボーダー | SVG オーバーレイ |
| ボーダー不要（背景のみ） | clip-path 単体で OK |

## 設計のコツ

### 傾きの統一

プロジェクト全体で斜め辺の傾きを統一すると一貫性が出る。基準を決めて揃えること。

例: **y = 2x**（高さに対して水平オフセットが半分）を基準にする場合:

```
高さ 24px → オフセット 12px
高さ 32px → オフセット 16px
高さ 42px → オフセット 21px
```

### 左右非対称な形状のパディング調整

コーナーカットや斜めカットで左右非対称な形状を作ると、中のコンテンツが視覚的に偏って見える場合がある。clip-path で切り取られた領域にコンテンツが被らないよう、カット側のパディングを追加する必要がある。

```tsx
{/* 右下カット: 右側・下側のパディングをカット分だけ増やす */}
<div style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)" }}>
  <div className="pl-4 pr-12 pt-4 pb-10">  {/* 右と下を多めに */}
    ...
  </div>
</div>

{/* 平行四辺形: 左右のパディングをオフセット分だけ増やす */}
<div style={{ clipPath: "polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%)" }}>
  <div className="px-8">  {/* 左右を多めに */}
    ...
  </div>
</div>
```

**原則:** カットされる三角形の底辺の半分程度を、その方向のパディングに加算すると自然に見える。

### px と % の使い分け

- **固定サイズ要素**: `px` を使う（角度が安定）
- **可変幅要素**: 水平方向に `calc(100% - Npx)` でカットサイズを `px` 固定
- **完全レスポンシブ**: `%` のみ（ただし角度がアスペクト比に依存）

### clip-path のデバッグ

1. 背景色を目立つ色に一時的に変更して形状を確認
2. ブラウザ DevTools で `clip-path` を直接編集して微調整
3. 複雑な形状は紙に座標を描いてから実装する
