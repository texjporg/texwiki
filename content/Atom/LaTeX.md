---
title: "Atom/LaTeX"
url: "/Atom/LaTeX/"
date: 2018-10-31T02:21:33Z
pukiwiki: "Atom/LaTeX"
---

# Atom/LaTeX

[Atom](/Atom/) &gt; LaTeX

***

***

## LaTeX 環境の整備 {#z8c19e98}

[latex](https://atom.io/packages/latex), [language-latex](https://atom.io/packages/language-latex), [pdf-view](https://atom.io/packages/pdf-view) などのパッケージをインストールしましょう。

ここでは、(u)pTeX 系エンジンを使って文書を作成する設定を解説します。
latex パッケージを使うには [Latexmk](/Latexmk/) か texify が必要です。
[DiCy](https://yitzchak.github.io/dicy/) を使うこともできます。
Latexmk がインストールされ、パスが通っている前提で進めます。

### 日本語文書向けの設定 {#ca64206f}

Engine のリストから uplatex を選択します。

Output Format のリストから pdf を選択します。

PDF Producer のリストから dvipdfmx を選択します。

### latex パッケージと pdf-view パッケージとの連携 {#l8d4ce3a}

[pdf-view](https://atom.io/packages/pdf-view) パッケージを使用することで Atom 内で PDF プレビューができます。SyncTeX にも対応しています。

#### 設定 {#e1f3ae0a}

Enable SyncTeX を ON にします。

Opener のリストから pdf-view を選択します。

#### 使い方 {#x26304ba}

Ctrl+Alt+B をタイプするとタイプセットしたあと pdf-view で PDF が表示されます。

Ctrl+Alt+S をタイプすると PDF ファイルの該当するページを表示します。

PDF の表示画面をクリックすると TeX ファイルの該当する行にジャンプします。

### latex パッケージと SumatraPDF との連携 (Windows) {#xd2a02e0}

Windows で LaTeX package をインストールすると uplatex + dvipdfmx でタイプセットして SumatraPDF で forward and inverse search が実行できます。

#### 設定 {#wa284717}

Enable SyncTeX を ON にします。

Opener のリストから sumatra を選択して SumatraPDF Path を設定します。

#### 使い方 {#f1b15dfc}

Ctrl+Alt+B をタイプするとタイプセットしたあと SumatraPDF で forward search が実行されます。

Ctrl+Alt+S をタイプすると SumatraPDF で forward search が実行されます。

SumatraPDF の画面をダブルクリックすると Atom の該当する TeX ファイルの行にジャンプします。
