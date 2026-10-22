---
title: "Inkscape"
url: "/Inkscape/"
date: 2011-04-27T18:53:11Z
pukiwiki: "Inkscape"
---

# Inkscape

## [Inkscape](https://inkscape.org/) {#ycda5b1e}

***

***

## Inkscape とは {#v6fd1815}

Inkscape はベクターグラフィックエディタ (SVG エディタ) です．

<table>
<tbody>
<tr><td style="color:#FFF;background-color:#7C0"><strong>入力</strong></td><td style="color:#FFF;background-color:#7C0"><strong>出力</strong></td></tr>
<tr><td>SVG, PDF</td><td>SVG, PDF</td></tr>
</tbody>
</table>

- [Inkscape 公式サイト](https://inkscape.org/)
- [Inkscape 開発サイト](https://gitlab.com/inkscape/inkscape)
    - [コミットログ](https://gitlab.com/inkscape/inkscape/commits/master)
    - [よくある質問 | Inkscape](https://inkscape.org/ja/learn/faq-ja/)
- [Inkscape Wiki](http://wiki.inkscape.org)
    - [Tools](http://wiki.inkscape.org/wiki/index.php/Tools)
    - [Extension repository](http://wiki.inkscape.org/wiki/index.php/ExtensionsRepository)

### 動作環境 {#a70b2acc}

Windows, macOS, Linux

### License {#ibc5e002}

[GPLv2 or later (GIMP からコピーしたファイルに関しては GPLv3 or later)](https://gitlab.com/inkscape/inkscape/blob/master/COPYING)

### リリース情報 {#d961699f}

[タグ · Inkscape / inkscape · GitLab](https://gitlab.com/inkscape/inkscape/-/tags)

### ChangeLog {#q8a7ad68}

[コミット · master · Inkscape / inkscape · GitLab](https://gitlab.com/inkscape/inkscape/-/commits/master?ref_type=heads)

## ダウンロード {#i5a8dfd7}

- [https://inkscape.org/ja/release/](https://inkscape.org/ja/release/)

## 不具合 {#caadafb3}

- [https://gitlab.com/inkscape/inkscape/issues](https://gitlab.com/inkscape/inkscape/issues)

## SVG/PowerPoint → PDF/EPS {#ha8334f6}

- [PowerPointの図からInkscapeで余白のないPDFとEPSファイルを作成する方法](https://note.com/assistdev/n/nbdce484a091f)
- [Inkscapeを使ってPowerPoint図をEPS画像に変換する](https://catdance124.hatenablog.jp/entry/2020/11/02/102253)

## PDF + LaTeX {#d6b72996}

- [Exporting a PDF File &mdash; Inkscape Beginners&#39; Guide 1.3 documentation](https://inkscape-manuals.readthedocs.io/en/latest/export-pdf.html)

Inkscape は PDF ファイルで保存する場合に PDF のテキストを除外して LaTeX ファイルを生成できます．

> <span style="color:#72C304;background-color:#72C304;"><ins>        <span style="color:Black;"><strong>Portable Document Format</strong></span>       <span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
>  PDF バージョン制限 <ins> PDF 1.5               \[ <strong>ᐯ</strong> \]</ins><br>
>  テキスト出力オプション： ◯ フォントを埋め込む<br>
>             　 ◯ テキストをパスに変換<br>
>             　 🔘 PDF のテキストを除外して LaTeX ファイルを生成<br>
>   ☑ フィルターエフェクトをラスタライズする<br>
>             　ラスタライズ解像度 (dpi)：　　　　　　　　　　　<ins>\[ 90 －＋ \]</ins><br>
>  丸め補正： 🔘 丸めを補正（推奨）<br>
>        ◯ 補正しない<br>
>
> <br>
>
>  「エクスポート」ダイアログからエクスポートする場合、エクスポートするオブジェクト<br>
>  を選択できます。「コピーを保存」/「名前を付けて保存」を選択すると、すべて<br>
>  のページがエクスポートされます。<br>
>
> <br>
>
>  ページブリードはページツールで設定可能です。<br>
> 　　　　　　　　　　　　　　　　　　\[　キャンセル(C)　\]　\[　OK(O)　\]<br>

コマンドラインから PDF のテキストを除外して LaTeX ファイルを出力することも可能です．

- [https://inkscape.org/nl/forums/questions/what-happened-to-save-as-pdf-tex/](https://inkscape.org/nl/forums/questions/what-happened-to-save-as-pdf-tex/)

Windows の場合

```
inkscape.com --export-type=pdf --export-latex file.svg
```

macOS, Linux の場合

```
inkscape --export-type=pdf --export-latex file.svg
```

## svg – Include and extract SVG pictures in LaTeX documents {#p2c351e1}

- [svg](https://ctan.org/pkg/svg)
    - \[[LaTeX\] svg --- LaTeX文書にSVG画像を含める方法](https://konoyonohana.blog.fc2.com/blog-entry-432.html)

## エクステンション {#s696e33c}

### 公式 (pdflatex) {#w6edd3aa}

pdflatex を実行して数式を埋め込むエクステンション．
Inkscape に標準で収録されています．

- [https://gitlab.com/inkscape/extensions/blob/master/pdflatex.inx](https://gitlab.com/inkscape/extensions/blob/master/pdflatex.inx)
- [https://gitlab.com/inkscape/extensions/blob/master/pdflatex.py](https://gitlab.com/inkscape/extensions/blob/master/pdflatex.py)

#### 動作環境 {#z851d64f}

Windows 10 Pro バージョン 22H2、Inkscape 1.4 with Python 3.11.10、TeX Live 2024 windows 版で動作することを確認しています。

macOS ではターミナルから inkscape &amp; と入力してリターンを押して Inkscape を実行すると動作するようです。--&gt; [LaTeXの導入#inkscape](http://www-het.phys.sci.osaka-u.ac.jp/~yamaguch/j/tex.html#inkscape)

#### 使用方法 {#se15d9b2}

\[エクステンション(N)\] &gt; \[テキスト\] &gt; \[公式 (pdflatex)...\] を選択．

> <span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>公式 (pdflatex)</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
> 　\[<ins>　基本設定　</ins>\]\[　高度な設定　\]<br>
> 　LaTeX 入力: <ins>\\(\displaystyle\frac{\pi^2}{6}=\lim\_{n \to \infty}\sum\_{k=1}^n \frac{1}{k^2}\\)</ins><br>
> 　　　　　　　フォントサイズ (px)　　　　　　\[ 10 　－＋\]<br>
> 　　　　　　　　　　　　　　\[　閉じる(C)　\]　\[　適用(A)　\]<br>

> <span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>公式 (pdflatex)</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
> 　\[　基本設定　\]\[<ins>　高度な設定　</ins>\]<br>
> 　☑ スタンドアロンのドキュメントクラスを使用<br>
> 　カスタムプリアンブルコード \usepackage{amsmath}\usepackage{amssymb}\usepackage{amsfonts}<br>
> 　　　　　　　　　　　　　　\[　閉じる(C)　\]　\[　適用(A)　\]<br>

### [TexText](https://github.com/textext/textext) {#l1a0873e}

Inkscape で LaTeX/Typst のグラフィックスを埋め込むエクステンション．再編集可能．

- [https://github.com/textext/textext](https://github.com/textext/textext)
- [https://textext.github.io/textext/](https://textext.github.io/textext/)

#### インストール {#j75ce7d3}

- [https://textext.github.io/textext/index.html#installation-toc](https://textext.github.io/textext/index.html#installation-toc)
- [FYI：Mac版TeXTextのインストール](https://okumuralab.org/tex/mod/forum/discuss.php?d=2842)
- [Inkscape/MacへのTexTextインストール](https://mutolabworks.blogspot.com/2025/01/install-textext-mac.html)
- [雑記 - inkscape](https://ult.riise.hiroshima-u.ac.jp/~nagato/?inkscape)

#### 使用方法 {#fce319ec}

- [https://textext.github.io/textext/index.html#usage-toc](https://textext.github.io/textext/index.html#usage-toc)

\[エクステンション(N)\] &gt; \[テキスト\] &gt; \[TexText...\] を選択．

<span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　<span style="color:Black;"><strong>Enter LaTeX Formula - TexText 1.11.0</strong></span>　　　　　　<span style="color:#72C304;background-color:#72C304;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#72C304;background-color:#72C304;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>

<ins>F</ins>ile　　<ins>V</ins>iew　　<ins>S</ins>ettings<br>

Command　　　　　　　　　　　　　　　Preamble File<br>
　\[　lualatex　　　　　　　　　　<strong>ᐯ</strong>\]　　　\[　default_packa...　\]　　　\[　Clear　\]<br>
Scale Factor　　　　　　　　　　　　　　　　　　　　　　　　　　　　Alignment<br>
　\[ 1,000　－　＋ \]　\[　　Reset　\]　\[　　As previous (1,000)　\]　　　\[　TeX　\]<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

\[　　キャンセル(<ins>C</ins>)　　\]　　　　　　\[　　Preview　　\]　　　　　　\[　　保存(<ins>S</ins>)　　\]<br>

### SVG2TikZ {#u5ee2f7d}

Inkscape 等で作成した SVG ファイルを TikZ のコードに変換するプログラムです．

- [SVG2TikZ](https://github.com/kjellmf/svg2tikz)
- [https://xyz2tex.github.io/svg2tikz/install.html#installing-for-use-with-inkscape](https://xyz2tex.github.io/svg2tikz/install.html#installing-for-use-with-inkscape)
    <!-- -[[svg2tikz:https://github.com/paaguti/svg2tikz]] -->

- [SVG を TikZ ソースに変換する Docker コンテナを作る](https://qiita.com/doraTeX/items/4d48e86cf3fc6f2ae132)

### svg2pdf {#g07406d0}

- [https://github.com/yambi/bin/blob/master/svg2pdf](https://github.com/yambi/bin/blob/master/svg2pdf)
- [続・Inkscape SVG の各レイヤを PDF にエクスポートする](http://empitsu.hatenablog.com/entry/2013/02/06/205135)
- [Inkscapeでプレゼンテーション（jessyinkなし）](http://yambi.hatenablog.com/entry/20140211/1392110852)

### [JessyInk](https://launchpad.net/jessyink) {#k0206a78}

- [Inkscapeでプレゼンテーション](https://yambi.hatenablog.com/entry/20110405/1301974923)

## Inkscape で TeX 数式 {#f9da7d32}

[TeX2img](/TeX2img/) (Windows/Mac) を使用して，TeX ソースから数式画像を PDF/EPS 形式でアウトライン化して出力するのが簡単です．
なお，TeX2img は数式以外の地の文や日本語も問題なく処理できます．

- [InkscapeでTeX数式](http://hooktail.org/computer/index.php?Inkscape%A4%C7TeX%BF%F4%BC%B0)
- [Inkscapeでtex数式を使う(数式はアウトラインに)](http://www.my-chicken-heart.com/2007/09/inkscapetex.html)
- [Latexの数式をsvgに](http://blog.livedoor.jp/les_paul_sp/archives/317234.html)
- [PDFのトリミングとベクター画像抽出](http://acetaminophen.hatenablog.com/entry/2014/09/15/075714)

## 関連リンク {#l46f1d34}

- [InkscapeでDesign](http://inkscapedesign.web.fc2.com/)
- [Inkscaper ～Inkscapeの使い方～](http://logo.dollsent.jp/)
- [Wikipedia.ja:Inkscape](https://ja.wikipedia.org/wiki/Inkscape)
- [Wikibooks.ja:Inkscape](https://ja.wikibooks.org/wiki/Inkscape)
- [Inkscape - 窓の杜ライブラリ](http://www.forest.impress.co.jp/library/software/inkscape/)
- [Beamerscape](https://github.com/jbohren/beamerscape)
