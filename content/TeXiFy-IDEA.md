---
title: "TeXiFy-IDEA"
url: "/TeXiFy-IDEA/"
date: 2025-05-25T11:34:04Z
pukiwiki: "TeXiFy-IDEA"
---

# TeXiFy-IDEA

## TeXiFy-IDEA {#gabac253}

TeXiFy-IDEA は [IntelliJ IDEA](</IntelliJ IDEA Community Edition/>) の LaTeX プラグインです。

- [GitHub - Hannah-Sten/TeXiFy-IDEA: LaTeX support for the IntelliJ platform by JetBrains.](https://github.com/Hannah-Sten/TeXiFy-IDEA)
- [「TeXiFy-IDEA」の検索結果 - Qiita](https://qiita.com/search?q=TeXiFy-IDEA)

### インストール {#vf59bea7}

メインメニュー（左上の4本線）&gt; ファイル &gt; 設定... &gt; プラグイン &gt; Marketplace タブ &gt; 「TeXiFy-IDEA」を検索 &gt; 検索結果の「TeXiFy-IDEA」のインストールボタンを押下

> サードパーティプラグインに関する通知<br>
>
> <br>
>
> 次のプラグインは JetBrains が提供しているものではありません:<br>
>
> <br>
>
> 　TeXiFy-IDEA (Thomas Schouten)<br>
>
> <br>
>
> プラグインのインストールはアプリケーションのインストールおよび実行と同様で<br>
> す。プラグインは IDE プロセス自体と同じ権限を取得します。プラグインを信<br>
> 頼できる場合にのみ続行してください。<br>
> ベンダーによる個人データの処理に関する詳細については、プラグインベン<br>
> ダーのドキュメントを確認することもお勧めします。<br>
>
> <br>
>
> JetBrains は個人データの処理など、サードパーティプラグインの動作とそれら<br>
> のベンダーの行動について一切の責任を負いません。<br>

同意するボタンを押下 &gt; IDE を再起動ボタンを押下

> IntelliJ IDEA およびプラグインのアップデート<br>
>
> <br>
>
> プラグインの変更を有効にするために IntelliJ IDEA を再起動<br>
> しますか？<br>

再起動ボタンを押下

組み込みの PDF Viewer が必要であれば PDF Viewer プラグインもインストール<br>
外部 PDF ビューアとして SumatraPDF を使用する場合は SumatraPDF をインストール<br>

### 使い方 {#o8d51420}

#### プロジェクトの作成 {#xdfb945b}

メインメニュー &gt; 新規 &gt; プロジェクト...

LaTeX を選択してプロジェクト SDK に TeX Live SDK を選択 &gt; 次へボタンを押下

プロジェクト名とプロジェクトの場所を設定 &gt; 作成ボタンを押下

> プロジェクトを開く<br>
>
> <br>
>
> プロジェクト 'プロジェクト名' をどこで開きますか？<br>

このウィンドウボタンまたは新規ウィンドウボタンを押下

プロジェクト名 &gt; src &gt; main.tex を編集

編集後に保存して'main.tex'の実行（上部の ▷ ）を押下すると pdfLaTeX でタイプセットされ PDF が表示される

LuaLaTeX でタイプセットする場合はその他のアクション（上部の縦三点リーダー）&gt; パラメーターで実行...

Compiler: のリストから LuaLaTeX を選択して実行ボタンを押下
