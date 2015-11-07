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

Windows、Mac OS X、 Linux　をはじめとした、様々な環境で動作します。"A hackable text editor　for the 21st Century" として、拡張可能で柔軟な、新技術を積極的に応用したエディタを目指して開発が続けられています。内臓のパッケージマネージャを用いて、多種多様な拡張パッケージを導入・管理することができ、また、JavaScript や CSS などの Web 技術を使ってカスタマイズ可能です。2015 年 11 月現在、1.x 系列が最新です。

まだ不安定な部分が多々あることと、とにかく重いことが難点ですが、将来が期待されます。

***

***

## インストールと設定 {#n0fab191}

インストールは簡単です、様々な環境でインストーラやパッケージが提供されています。

## 拡張パッケージの導入 {#ga099443}

Atom の環境設定画面や、[https://atom.io/packages](https://atom.io/packages)　で検索して、パッケージを探しましょう。

### 日本語関連のパッケージ {#lfe144fd}

- [japanese-menu](https://atom.io/packages/japanese-menu) -- メニューバーとコンテキストメニュー、設定画面を日本語化します。
- [japanese-wrap](https://atom.io/packages/japanese-wrap)　あるいは [wrap-style](https://atom.io/packages/wrap-style) -- 文章の折り返し

### LaTeX 関連のパッケージ {#gb891a80}

LaTeX での文書作成を補助するパッケージも色々とあります。

- [latex](https://atom.io/packages/latex) -- Atom から LaTeX 文書をコンパイル
- [language-latex](https://atom.io/packages/language-latex) -- LaTeX の構文ハイライト
- [latexer](https://atom.io/packages/latexer) -- LaTeX 文書編集用の自動補完パッケージ
- [sumatra-forwardsearch](https://atom.io/packages/sumatra-forwardsearch) --
    [Atomでのforward searchとinverse search](http://ashiato45.hatenablog.jp/entry/2015/03/24/194511)

### エディタ乗り換えに役立つパッケージ {#v70fe827}

- [vim-mode](https://atom.io/packages/vim-mode)
- [emacs-plus](https://atom.io/packages/emacs-plus)
- [minimap](https://atom.io/packages/minimap) -- Sublime Text みたいにミニマップを表示させる

### その他あると便利なパッケージ {#b9051f32}

- [open-recent](https://atom.io/packages/open-recent)
- [save-session](https://atom.io/packages/save-session)
- [file-icons](https://atom.io/packages/file-icons)

## LaTeX 環境の整備 {#o1b2f62a}

latex, language-latex, latexer などのパッケージをとりあえず入れましょう。

### latex パッケージの設定 {#lf9c27a1}

ここでは、pLaTeX 系エンジンを使って文書を作成する設定を解説します。
環境設定の画面から、latex パッケージの設定をクリックします。（インストール直後で設定ボタンが出ていない場合は、latex パッケージの枠内をクリック）
ptex2pdf をインストールして使う場合は、Engine に ptex2pdf を指定します。例えば、普段 uplatex を使う場合は、

```
 ptex2pdf -u -l
```

を入力します。

メニューの

```
 パッケージ > LaTeX > Build
```

を選ぶか、Alt+Ctrl+B　で ptex2pdf を実行します。

### PDF の表示 {#l8d4ce3a}

PDF プレビューを行うには [pdf-view](https://atom.io/packages/pdf-view) パッケージをインストールする必要があります。日本語を表示させるには、

- [Atomでplatex->dvipdfmxチェーンを実装する話](http://blog.ishotihadus.com/?p=95)

を参考に、修正を行います。

latex パッケージで自動プレビューを設定してもなぜか DVI ファイルを開こうとする場合があるようです。プロジェクトフォルダを追加しておき、手動で結果の PDF ファイルを選択すると Atom で PDF を見ることができます。

## Markdown 環境の整備 {#he8ae1a3}

Markdown 関連の拡張パッケージも様々あります。Markdown での文書作成にはそれほど苦労しないと思われるので、入力補助ツールはあまり必要ないでしょう。必要に応じて探していくことになると思います。

Atom は標準で Markdown 文書のリアルタイムプレビュー機能を備えています。

Markdown プレビュー画面を開くには，メニューから

　　パッケージ > Markdown Preview > Toggle Preview

を選びます。

### スタイル付け {#l37fd88c}

出力文書のスタイル付けは CSS で行います。メニューの

　　ファイル > 環境設定…

で設定画面を開き、"設定フォルダを開く" ボタンを押して、設定フォルダを開きます。そこから　style.less を開き、編集します。例えば、Windows 10 向けのフォント設定を行い、両端揃えなどを行うには：

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

HTML へ変換するには、単にプレビュー画面で右クリックをして、"Save As MTML…"　を選ぶだけです。
markdown-pdf パッケージを導入することで、PDF への出力も可能です。

### 数式の表示 {#s3c9391f}

[markdown-preview-plus](http://atom.io/packages/markdown-preview-plus) パッケージにより、LaTeX 形式での数式入力と表示が可能となります。
MathJax による描画で、保存した HTML にも結果は反映されますが、markdown-pdf では対応していないようです。MathJax を用いる markdown-preview-plus 以外にも、KaTeX を用いる
[markdown-preview-katex](https://atom.io/packages/markdown-preview-katex) や [atom-markdown-katex](https://atom.io/packages/atom-markdown-katex)　があります。

## 文書管理と Git との連携 {#p26877b2}

- [git-control](https://atom.io/packages/git-control)
- [git-plus](https://atom.io/packages/git-plus)

## 参考 {#ue2446c0}

- [http://qiita.com/tags/atom](http://qiita.com/tags/atom)
- [React | A JavaScript library for building user interfaces](http://facebook.github.io/react/)
- [What is Use React Editor?](http://discuss.atom.io/t/what-is-use-react-editor/8865)
- [Atom入門 (全12回) - プログラミングならドットインストール](http://dotinstall.com/lessons/basic_atom)
