---
title: "Atom"
url: "/Atom/"
date: 2014-05-07T00:48:47Z
bookCollapseSection: true
pukiwiki: "Atom"
---

# Atom

## [Atom](https://atom.io/) {#f28ffeb8}

[Atom](https://atom.io/) は GitHub が開発するオープンソースのテキストエディタです。

- [https://atom.io/](https://atom.io/)

Windows、macOS、 Linux をはじめとした、様々な環境で動作します。
"A hackable text editor for the 21st Century" として、拡張可能で柔軟な、新技術を積極的に応用したエディタを目指して開発が続けられています。
内蔵のパッケージマネージャを用いて、多種多様な拡張パッケージを導入・管理することができ、また、Node.js (JavaScript) や CSS などの Web 技術を使ってカスタマイズ可能です。

***

***

## インストールと設定 {#n0fab191}

インストールは簡単です、様々な環境でインストーラやパッケージが提供されています。

## 拡張パッケージの導入 {#ga099443}

Atom の環境設定画面や、[https://atom.io/packages](https://atom.io/packages) で検索して、パッケージを探しましょう。

### 日本語関連のパッケージ {#lfe144fd}

- [japanese-menu](https://atom.io/packages/japanese-menu) -- メニューバーとコンテキストメニュー、設定画面を日本語化します。

### LaTeX 関連のパッケージ {#gb891a80}

LaTeX での文書作成を補助するパッケージも色々とあります。

- [latex](https://atom.io/packages/latex) -- Atom から LaTeX 文書をコンパイル・プレビュー
- [latextools](https://atom.io/packages/latextools) -- Atom から LaTeX 文書をコンパイル・プレビュー
- [language-latex](https://atom.io/packages/language-latex) -- LaTeX の構文ハイライト
- [latexer](https://atom.io/packages/latexer) -- LaTeX 文書編集用の自動補完パッケージ
- [pdf-view](https://atom.io/packages/pdf-view) -- Atom 内で PDF プレビューをするためのパッケージ

### エディタ乗り換えに役立つパッケージ {#v70fe827}

- [vim-mode-plus](https://atom.io/packages/vim-mode-plus)
- [atomic-emacs](https://atom.io/packages/atomic-emacs)
- [minimap](https://atom.io/packages/minimap) -- Sublime Text みたいにミニマップを表示させる

### ターミナルエミュレータ {#v730a901}

[term2](https://atom.io/packages/term2) や [terminal-plus](https://atom.io/packages/terminal-plus) などのターミナルエミュレータを Atom 内で使うパッケージがあります。

### その他あると便利なパッケージ {#b9051f32}

- [open-recent](https://atom.io/packages/open-recent)
- [save-session](https://atom.io/packages/save-session)
- [file-icons](https://atom.io/packages/file-icons)

## LaTeX 環境の整備 {#o1b2f62a}

latex もしくは latextools, language-latex, latexer, pdf-view などのパッケージをとりあえず入れましょう。

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

- [Macの設定の覚書](http://www-het.phys.sci.osaka-u.ac.jp/~yamaguch/j/mac_setting.html)

## Markdown 環境の整備 {#he8ae1a3}

Markdown 関連の拡張パッケージも様々あります。Markdown での文書作成にはそれほど苦労しないと思われるので、入力補助ツールはあまり必要ないでしょう。必要に応じて探していくことになると思いますが、とりあえず、[markdown-writer](https://atom.io/packages/markdown-writer) などがあればよいでしょう。

Atom は標準で Markdown 文書のリアルタイムプレビュー機能を備えています。

Markdown プレビュー画面を開くには，メニューから

> パッケージ > Markdown Preview > Toggle Preview

を選びます。

### スタイル付け {#l37fd88c}

出力文書のスタイル付けは CSS で行います。メニューの

> ファイル > 環境設定…

で設定画面を開き、"設定フォルダを開く" ボタンを押して、設定フォルダを開きます。そこから style.less を開き、編集します。例えば、Windows 10 向けのフォント設定を行い、両端揃えなどを行うには：

```
 @font-family-min: "Yu Mincho", serif;
 @font-family-got: "Yu Gothic", sans-serif;
 .markdown-preview{
   font-family: @font-family-min;
   font-size: 10pt;
   line-height: 1.9em;
   text-align: justify;
```

```
   h1, h2, h3, h4, h5, h6{
     font-family: @font-family-got;
     font-weight: bold;
   }
```

```
   blockquote {
     border-left: 4px solid #ccc;
     font-style: italic;
     font-size: inherit;
     p { font-size: inherit; }
   }
 }
```

などのようにすると良いでしょう。Chromium ベースなので、今のところハイフネーションはサポートしていないようです。

### 文書の生成と保存 {#j459d751}

HTML へ変換するには、単にプレビュー画面で右クリックをして、"Save As MTML…" を選ぶだけです。
markdown-pdf パッケージを導入することで、PDF への出力も可能です。

### 数式の表示 {#s3c9391f}

[markdown-preview-plus](http://atom.io/packages/markdown-preview-plus) パッケージにより、LaTeX 形式での数式入力と表示が可能となります。
MathJax による描画で、保存した HTML にも結果は反映されますが、markdown-pdf では対応していないようです。MathJax を用いる markdown-preview-plus 以外にも、KaTeX を用いる
[markdown-preview-katex](https://atom.io/packages/markdown-preview-katex) や [atom-markdown-katex](https://atom.io/packages/atom-markdown-katex) があります。

数式を含んだ文書を PDF へ変換したい場合は、一旦 HTML で保存してから、
[wkhtmltopdf](http://wkhtmltopdf.org/) を利用するとなんとかできます。

```
 wkhtmltopdf --javascript-delay 10000 input.html output.pdf
```

のように、javascript-delay オプションをつける必要があるようです。数式の変換がうまくいかなかったら、delay の値を増やしてみます。

## 文書管理と Git との連携 {#p26877b2}

- [git-control](https://atom.io/packages/git-control) -- GUI インターフェイス
- [git-plus](https://atom.io/packages/git-plus) -- コマンドパレットで Git 操作

## 参考 {#ue2446c0}

- [Atom入門 (全12回) - プログラミングならドットインストール](http://dotinstall.com/lessons/basic_atom)
- [Atomでplatex->dvipdfmxチェーンを実装する話](http://blog.ishotihadus.com/?p=95)
- [Atom で LaTeX on Windows （+ 最近のビルド環境） - Ichiro Maruta Homepage](http://ichiro-maruta.blogspot.jp/2016/01/atom-latex-on-windows.html)
