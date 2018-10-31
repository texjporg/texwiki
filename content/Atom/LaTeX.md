---
title: "Atom/LaTeX"
url: "/Atom/LaTeX/"
date: 2018-10-31T02:21:33Z
pukiwiki: "Atom/LaTeX"
---

# Atom/LaTeX

## LaTeX 環境の整備 {#o1b2f62a}

latex, language-latex, pdf-view などのパッケージをインストールしましょう。

ここでは、(u)pTeX 系エンジンを使って文書を作成する設定を解説します。
latex パッケージを使うには [Latexmk](/Latexmk/) か texify が必要です。
[DiCy](https://yitzchak.github.io/dicy/) を使うこともできます。
Latexmk がインストールされ、パスが通っている前提で進めます。

### latex パッケージと pdf-view パッケージとの連携 {#l8d4ce3a}

[pdf-view](https://atom.io/packages/pdf-view) パッケージを使用することで Atom 内で PDF プレビューができます。SyncTeX にも対応しています。

#### 設定 {#e1f3ae0a}

Engine のリストから uplatex を選択します。

Enable SyncTeX を ON にします。

Output Format のリストから pdf を選択します。

PDF Producer のリストから dvipdfmx を選択します。

Opener のリストから pdf-view を選択します。

#### 使い方 {#x26304ba}

Ctrl+Alt+B をタイプするとタイプセットしたあと pdf-view で PDF が表示されます。

Ctrl+Alt+S をタイプすると PDF ファイルの該当するページを表示します。

PDF の表示画面をクリックすると TeX ファイルの該当する行にジャンプします。

### latex パッケージと SumatraPDF との連携 (Windows) {#xd2a02e0}

Windows で LaTeX package をインストールすると uplatex + dvipdfmx でタイプセットして SumatraPDF で forward and inverse search が実行できます。

#### 設定 {#wa284717}

Engine のリストから uplatex を選択します。

Enable SyncTeX を ON にします。

Output Format のリストから pdf を選択します。

PDF Producer のリストから dvipdfmx を選択します。

Opener のリストから sumatra を選択して SumatraPDF Path を設定します。

#### 使い方 {#f1b15dfc}

Ctrl+Alt+B をタイプするとタイプセットしたあと SumatraPDF で forward search が実行されます。

Ctrl+Alt+S をタイプすると SumatraPDF で forward search が実行されます。

SumatraPDF の画面をダブルクリックすると Atom の該当する TeX ファイルの行にジャンプします。

### latextools (LaTeXTools for Atom) パッケージと Skim との連携 (macOS) {#i645c95d}

latextools パッケージも使用可能なようです。

- [Macの設定の覚書](http://www-het.phys.sci.osaka-u.ac.jp/~yamaguch/j/mac_setting.html)
