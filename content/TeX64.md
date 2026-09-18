---
title: "TeX64"
url: "/TeX64/"
date: 2026-03-28T02:20:50Z
pukiwiki: "TeX64"
---

# TeX64

## TeX64 {#qe7c5e61}

TeX64 は、数式を見たまま編集できる Windows・Mac 向けの LaTeX エディタです。画像の数式も、取り込んでその場で修正できます。Monaco Editor（VS Code のエディタコア）をベースに、LaTeX 執筆に特化した機能を多数搭載しています。

- [TeX64 — Free LaTeX Editor for Windows and macOS](https://tex64.com/)
- [TeX64 — 無料のTeX・LaTeXエディタ｜Windows・Mac対応](https://tex64.com/ja)
- [TeX64 | ChatGPT Plugins](https://chatgpt.com/plugins/plugin_asdk_app_6a8abcc3f22c819196d21cf6e44e3a3b?locale=ja-JP&q=TeX64)
- [TeX64 - 検索 / X](https://x.com/search?q=TeX64&f=live)
- [TeX64さんの記事一覧 | Zenn](https://zenn.dev/tex64)
- [tex64のマイページ - Qiita](https://qiita.com/tex64)
- [KKTeX さん / X](https://x.com/KKTeX_LaTeX3)
- [KKTeXのマイページ - Qiita](https://qiita.com/KKTeX)

### エディタ {#editor}

Monaco Editor ベースの高機能エディタを搭載しています。

- LaTeX 構文ハイライト
- LaTeX 対応のコード補完・スニペット挿入
- マウスホバーで数式プレビュー（KaTeX レンダリング）
- マルチタブ編集
- 選択範囲・カーソル位置に応じた文脈表示

### ビルドシステム {#build}

latexmk を統合したビルド機能を備えています。

- ワンクリックでコンパイル実行
- ビルドプロファイル（複数のビルド設定を切り替え可能）
- コンパイルログの表示とエラー箇所へのジャンプ
- ビルド状態のリアルタイム UI 表示

### PDF プレビュー・SyncTeX {#pdf}

PDF.js による内蔵 PDF ビューアと SyncTeX 連携を実装しています。

- フォワードサーチ（ソース → PDF）
- インバースサーチ（PDF クリック → ソース）
- PDF のリアルタイム更新

### コード整形 {#format}

latexindent を統合し、LaTeX コードの自動整形に対応しています。

- YAML ベースのカスタマイズ可能な整形設定
- エディタ上でのフォーマット実行

### アウトライン・ナビゲーション {#outline}

- セクション・ラベル・TODO・引用キーの構造表示
- プロジェクト全体のアウトラインモード
- ファイルツリーによるプロジェクト内ナビゲーション
- ラベル・参照・引用キーのリネーム補助

### 数式入力 {#math}

3 種類の数式入力手段を提供しています。

#### MathLive WYSIWYG エディタ {#mathlive}

MathLive のカスタムフォーク版を搭載し、数式を視覚的に編集できます。スラッシュコマンドやキーボードショートカットにも対応しています。

#### 数式 OCR {#math-ocr}

ONNX Runtime による機械学習ベースの数式認識機能を内蔵しています。手書きやスキャン画像から LaTeX 数式コードを自動生成します。

#### KaTeX プレビュー {#katex}

エディタ上のホバーや AI 提案カード内で、KaTeX による数式のリアルタイムレンダリングを行います。

### AI 機能（Axiom） {#ai}

Axiom と呼ばれる AI チャットアシスタントを搭載しています。LangChain + OpenAI 互換 API をベースとしたエージェント型の実行基盤です。

#### AI チャット {#ai-chat}

- テキスト指示に加え、画像添付（最大 4 枚・計 8MB）にも対応
- 複数チャットの履歴管理・削除
- 実行中チャットの中断・再開
- バックグラウンド通知
- モデル切り替え UI

#### AI エージェントツール {#ai-tools}

7 つのツールによるエージェント実行が可能です。

- read_file / list_files — プロジェクト内ファイルの読解
- propose_patch / apply_patch — unified diff ベースの変更提案と適用
- get_compile_log — コンパイルログを参照した修正支援
- arxiv_search / arxiv_bibtex — arXiv 論文検索と BibTeX 生成

#### 差分提案・適用 {#ai-diff}

AI の変更提案をカード形式で表示し、差分プレビュー → 適用 → Undo の流れで安全に編集できます。複数ファイルにまたがる修正提案にも対応しています。変更後は自動ビルドが走ります。

#### AI に渡されるコンテキスト {#ai-context}

- アクティブファイルのパスと本文
- 現在の選択範囲
- 開いているファイル群のスナップショット
- 直近のビルド issue 要約
- @メンションで明示指定したファイル

### ブロック検出 {#block}

LaTeX ドキュメントの構造を自動解析し、数式環境やセクションなどのブロック単位を認識します。

### ワークスペース管理 {#workspace}

- プロジェクトルートの設定
- ファイルの作成・削除・リネーム
- ワークスペース単位の管理

### 設定 {#settings}

- エディタ設定（フォント・テーマ・補完）
- ビルド設定（環境変数・ツールパス）
- フォーマッタ設定
- UI ロケール設定

### 認証・プラン {#auth}

- Google OAuth ログイン
- tex64.com プラットフォーム連携
- 月次 AI 使用量メーター
- プラン・quota 状態に応じた利用制御

### 動作環境 {#requirements}

- Windows と macOS に対応（Electron 31 ベース）
- TeX Live などの LaTeX ディストリビューションが必要
