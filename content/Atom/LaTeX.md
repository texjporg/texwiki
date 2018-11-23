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

### パッケージのインストール {#i20a9a37}

1. Ctrl+Comma で Settings タブを開きます。
1. 左側の Install をクリックします。
1. Install Packages の Search packages と表示されている入力欄にパッケージ名を入力してパッケージをインストールします。
    1. 入力欄に latex を入力して [latex](https://atom.io/packages/latex) パッケージをインストールします。
    1. 入力欄に language-latex を入力して [language-latex](https://atom.io/packages/language-latex) パッケージをインストールします。
    1. 入力欄に latex-tree を入力して [latex-tree](https://atom.io/packages/latex-tree) パッケージをインストールします。
    1. 入力欄に pdf-view を入力して [pdf-view](https://atom.io/packages/pdf-view) パッケージをインストールします。

### 日本語文書向けの設定 {#ca64206f}

日本語をサポートしているエンジン（upLaTeX エンジンまたは LuaLaTeX エンジン）を使って日本語文書を作成する設定をします。
latex パッケージを使うには [Latexmk](/Latexmk/) か texify が必要です。
[DiCy](https://yitzchak.github.io/dicy/) を使うこともできます。
Latexmk がインストールされ、パスが通っている前提で進めます。

1. latex パッケージの Settings をクリックします。
1. Engine のリストから日本語をサポートしているエンジンを選択します。upLaTeX を使用する場合は uplatex、LuaLaTeX を使用する場合は lualatex を選択します。
1. Output Format が pdf に設定されていることを確認します。設定されていない場合はリストから pdf を選択します。
1. PDF Producer が dvipdfmx に設定されていることを確認します。設定されていない場合はリストから dvipdfmx を選択します。
1. ファイルを保存したときに自動的にビルドしたい場合は Build on Save を true にします。デフォルトでは false になっています。

### latex-tree パッケージ {#w9a117b7}

Ctrl+Alt+M で Document Tree の表示／非表示の切り替えができます。

ツリービューの項目をクリックすると LaTeX ファイルの該当する項目にジャンプします。

### latex パッケージと pdf-view パッケージとの連携 {#l8d4ce3a}

pdf-view パッケージを使用することで Atom 内で PDF プレビューができます。SyncTeX にも対応しています。

#### 設定 {#e1f3ae0a}

1. Enable SyncTeX が true に設定されていることを確認します。設定されていない場合は true にします。
1. Opener のリストから pdf-view を選択します。

#### 使い方 {#x26304ba}

Ctrl+Alt+B をタイプするとタイプセットしたあと pdf-view で PDF が表示されます。

Ctrl+Alt+S をタイプすると PDF ファイルの該当するページを表示します。

PDF の表示画面をクリックすると TeX ファイルの該当する行にジャンプします。

### latex パッケージと SumatraPDF との連携 (Windows) {#xd2a02e0}

Windows で LaTeX package をインストールすると SumatraPDF で forward and inverse search が実行できます。

#### 設定 {#wa284717}

1. Enable SyncTeX が true に設定されていることを確認します。設定されていない場合は true にします。
1. Opener のリストから sumatra を選択して SumatraPDF Path を設定します。

#### 使い方 {#f1b15dfc}

Ctrl+Alt+B をタイプするとタイプセットしたあと SumatraPDF で forward search が実行されます。

Ctrl+Alt+S をタイプすると SumatraPDF で forward search が実行されます。

SumatraPDF の画面をダブルクリックすると Atom の該当する TeX ファイルの行にジャンプします。
