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
<tr><td style="color:#FFF;background-color:#7C0"><strong>入力</strong></td><td style="color:#FFF;background-color:#7C0"><strong>インポート可能な形式</strong></td><td style="color:#FFF;background-color:#7C0"><strong>出力</strong></td></tr>
<tr><td>SVG, PDF</td><td>EPS, PS</td><td>SVG, PDF, EPS, PS, ODG</td></tr>
</tbody>
</table>

[PostScript や EPS をインポートするには、Ghostscript をインストールする必要があり、ps2pdf が環境変数 Path 上になければなりません。](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)#Inkscape.E3.81.A7.E3.82.A4.E3.83.B3.E3.83.9D.E3.83.BC.E3.83.88.2F.E3.82.A8.E3.82.AF.E3.82.B9.E3.83.9D.E3.83.BC.E3.83.88.E3.81.A7.E3.81.8D.E3.82.8B.E3.83.95.E3.82.A1.E3.82.A4.E3.83.AB.E5.BD.A2.E5.BC.8F.E3.81.AF.E3.81.AA.E3.82.93.E3.81.A7.E3.81.99.E3.81.8B.3F>)

- [Inkscape 公式サイト](https://inkscape.org/)
- [Inkscape 開発サイト](https://gitlab.com/inkscape/inkscape)
    - [コミットログ](https://gitlab.com/inkscape/inkscape/commits/master)
- [Inkscape Wiki](http://wiki.inkscape.org)
    - [LaTeX - Inkscape Wiki](http://wiki.inkscape.org/wiki/index.php/LaTeX)
    - [FAQ (Japanese) - Inkscape Wiki](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)>)
        - [数学記号や特殊記号を入力するには?](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)#.E6.95.B0.E5.AD.A6.E8.A8.98.E5.8F.B7.E3.82.84.E7.89.B9.E6.AE.8A.E8.A8.98.E5.8F.B7.E3.82.92.E5.85.A5.E5.8A.9B.E3.81.99.E3.82.8B.E3.81.AB.E3.81.AF.3F>)
        - [Inkscapeでインポート/エクスポートできるファイル形式はなんですか?](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)#Inkscape.E3.81.A7.E3.82.A4.E3.83.B3.E3.83.9D.E3.83.BC.E3.83.88.2F.E3.82.A8.E3.82.AF.E3.82.B9.E3.83.9D.E3.83.BC.E3.83.88.E3.81.A7.E3.81.8D.E3.82.8B.E3.83.95.E3.82.A1.E3.82.A4.E3.83.AB.E5.BD.A2.E5.BC.8F.E3.81.AF.E3.81.AA.E3.82.93.E3.81.A7.E3.81.99.E3.81.8B.3F>)
    - [Tools](http://wiki.inkscape.org/wiki/index.php/Tools)
    - [Extension repository](http://wiki.inkscape.org/wiki/index.php/ExtensionsRepository)

### 動作環境 {#a70b2acc}

Windows, macOS, Linux

### License {#ibc5e002}

[GPLv2 or later (GIMP からコピーしたファイルに関しては GPLv3 or later)](https://gitlab.com/inkscape/inkscape/blob/master/COPYING)

### リリース情報 {#d961699f}

[最新ニュース](https://inkscape.org/ja/news/)を参照．

### ChangeLog {#q8a7ad68}

[コミットログ](https://gitlab.com/inkscape/inkscape/commits/master)

## ダウンロード {#i5a8dfd7}

- [https://inkscape.org/ja/release/](https://inkscape.org/ja/release/)

## 不具合 {#caadafb3}

- [https://gitlab.com/inkscape/inkscape/issues](https://gitlab.com/inkscape/inkscape/issues)

## PDF/EPS/PS + LaTeX {#d6b72996}

- [Inkscape Wiki](http://wiki.inkscape.org)
    - [LaTeX - Inkscape Wiki](http://wiki.inkscape.org/wiki/index.php/LaTeX)
        - [Release notes/0.92 - Inkscape Wiki#Export PDF / EPS / PS](http://wiki.inkscape.org/wiki/index.php/Release_notes/0.92#Export_PDF_.2F_EPS_.2F_PS)
        - [Release notes/0.91 - Inkscape Wiki#PDF/EPS/PS + LaTeX](http://wiki.inkscape.org/wiki/index.php/Release_notes/0.91#PDF.2FEPS.2FPS_.2B_LaTeX)
        - [Release notes/0.48 - Inkscape Wiki#New LaTeX export for PDF/EPS/PS](http://wiki.inkscape.org/wiki/index.php/Release_notes/0.48#New_LaTeX_export_for_PDF.2FEPS.2FPS)

Inkscape は PDF, EPS, PS ファイルで保存する場合に PDF, EPS, PS のテキストを除外して LaTeX ファイルを生成できます．

> <span style="color:#72C304;background-color:#72C304;"><ins>        <span style="color:Black;"><strong>Portable Document Format</strong></span>       <span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
>  PDF バージョン制限 <ins> PDF 1.5               \[ <strong>ᐯ</strong> \]</ins><br>
>  テキスト出力オプション：  ◯ フォントを埋め込む<br>
>             ◯ テキストをパスに変換する<br>
>             🔘 PDF のテキストを除外して LaTeX ファイルを生成<br>
>   ☑ フィルターエフェクトをラスタライズする<br>
>  ラスタライズ解像度 (dpi)：　　　　　　　　　　　　　　　　　　　　　　<ins>90 \[<strong>⇕</strong>\]</ins><br>
>  出力ページサイズ：　　　　🔘 ドキュメントのページサイズを使用<br>
>             ◯ エクスポートオブジェクトのサイズを使用<br>
>  裁ち落し/マージン (mm)： 　　　　　　　　　　　　　　　  　<ins>0.0　　　　\[<strong>⇕</strong>\]</ins><br>
>  オブジェクトのエクスポートを ID で制限する： <ins>　　　　　　　　　　　　　　　</ins><br>

> <span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Encapsulated PostScript</strong></span>　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
>  PS レベル制限 <ins> PostScript level 3             \[ <strong>ᐯ</strong> \]</ins><br>
>  テキスト出力オプション：  ◯ フォントを埋め込む<br>
>             ◯ テキストをパスに変換する<br>
>             🔘 EPS のテキストを除外して LaTeX ファイルを生成<br>
>   ☑ フィルターエフェクトをラスタライズする<br>
>  ラスタライズ解像度 (dpi)：　　　　　　　　　　　　　　　　　　　　　　<ins>90 \[<strong>⇕</strong>\]</ins><br>
>  出力ページサイズ：　　　　🔘 ドキュメントのページサイズを使用<br>
>             ◯ エクスポートオブジェクトのサイズを使用<br>
>  裁ち落し/マージン (mm)： 　　　　　　　　　　　　　　　  　<ins>0.0　　　　\[<strong>⇕</strong>\]</ins><br>
>  オブジェクトのエクスポートを ID で制限する： <ins>　　　　　　　　　　　　　　　</ins><br>

> <span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　　 <span style="color:Black;"><strong>PostScript</strong></span> 　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
>  PS レベル制限 <ins> PostScript level 3             \[ <strong>ᐯ</strong> \]</ins><br>
>  テキスト出力オプション：  ◯ フォントを埋め込む<br>
>             ◯ テキストをパスに変換する<br>
>             🔘 PS のテキストを除外して LaTeX ファイルを生成<br>
>   ☑ フィルターエフェクトをラスタライズする<br>
>  ラスタライズ解像度 (dpi)：　　　　　　　　　　　　　　　　　　　　　　<ins>90 \[<strong>⇕</strong>\]</ins><br>
>  出力ページサイズ：　　　　🔘 ドキュメントのページサイズを使用<br>
>             ◯ エクスポートオブジェクトのサイズを使用<br>
>  裁ち落し/マージン (mm)： 　　　　　　　　　　　　　　　  　<ins>0.0　　　　\[<strong>⇕</strong>\]</ins><br>
>  オブジェクトのエクスポートを ID で制限する： <ins>　　　　　　　　　　　　　　　</ins><br>

コマンドラインから PDF, EPS, PS のテキストを除外して LaTeX ファイルを出力することも可能です．

<!-- -https://inkscape.modevia.com/inkscape-man.html -->

```
inkscape -D -z --file=image.svg --export-pdf=image.pdf --export-latex
inkscape -D -z --file=image.svg --export-eps=image.eps --export-latex
inkscape -D -z --file=image.svg --export-ps=image.ps --export-latex
```

## svg – Include and extract SVG pictures in LaTeX documents {#p2c351e1}

- [svg](https://ctan.org/pkg/svg)
    - \[[LaTeX\] svg --- LaTeX文書にSVG画像を含める方法](http://konoyonohana.blog.fc2.com/blog-entry-432.html)

## エクステンション {#s696e33c}

### LaTeX (pdflatex) {#w6edd3aa}

pdflatex を実行して数式を埋め込むエクステンション．
Inkscape に標準で収録されています．

- [https://gitlab.com/inkscape/extensions/blob/master/pdflatex.inx](https://gitlab.com/inkscape/extensions/blob/master/pdflatex.inx)
- [https://gitlab.com/inkscape/extensions/blob/master/pdflatex.py](https://gitlab.com/inkscape/extensions/blob/master/pdflatex.py)

#### 動作環境 {#z851d64f}

Windows 10 Pro バージョン 1909 x64、Inkscape 1.0 x64 with Python 3.8.2、TeX Live 2020 win32 版で動作することを確認しています。

macOS ではグレーアウトされて動作しないようですが、解決したようです。--&gt; [Inkscape ver.1.0では LaTeX (pdflatex)のレンダリングは 出来ない？](https://okumuralab.org/tex/mod/forum/discuss.php?d=2844)

Linux の AppImage 版ではグレーアウトはしませんが Debian GNU/Linux 10 (Buster) で動作に失敗するようです。--&gt; [Re: Inkscape ver.1.0では LaTeX (pdflatex)のレンダリングは 出来ない。](https://okumuralab.org/tex/mod/forum/discuss.php?d=2844%23p16693)

#### 使用方法 {#se15d9b2}

\[エクステンション(N)\] &gt; \[レンダリング\] &gt; \[Mathmatics\] &gt; \[LaTeX (pdflatex)...\] を選択．

> <span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LaTeX (pdflatex)</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
> 　LaTeX Input: <ins>\\(\displaystyle\frac{\pi^2}{6}=\lim\_{n \to \infty}\sum\_{k=1}^n \frac{1}{k^2}\\)</ins><br>
> 　Additional packages(comma-separated)：<br>
>
> <br>
>
> 　☑ ライブプレビュー<br>

### [TexText](https://github.com/textext/textext) {#l1a0873e}

Inkscape で LaTeX のグラフィックスを埋め込むエクステンション．再編集可能．

- [https://github.com/textext/textext](https://github.com/textext/textext)
- [https://textext.github.io/textext/](https://textext.github.io/textext/)

#### インストール {#j75ce7d3}

- [https://textext.github.io/textext/index.html#installation-toc](https://textext.github.io/textext/index.html#installation-toc)
- [FYI：Mac版TeXTextのインストール](https://okumuralab.org/tex/mod/forum/discuss.php?d=2842)

#### 使用方法 {#fce319ec}

- [https://textext.github.io/textext/index.html#usage-toc](https://textext.github.io/textext/index.html#usage-toc)

### SVG2TikZ, svg2tikz {#u5ee2f7d}

Inkscape 等で作成した SVG ファイルを TikZ のコードに変換するプログラムです．

- [SVG2TikZ](https://github.com/kjellmf/svg2tikz)
- [svg2tikz](https://github.com/paaguti/svg2tikz)
- [SVG を TikZ ソースに変換する Docker コンテナを作る](https://qiita.com/doraTeX/items/4d48e86cf3fc6f2ae132)

### svg2pdf {#g07406d0}

- [https://github.com/yambi/bin/blob/master/svg2pdf](https://github.com/yambi/bin/blob/master/svg2pdf)
- [続・Inkscape SVG の各レイヤを PDF にエクスポートする](http://empitsu.hatenablog.com/entry/2013/02/06/205135)
- [Inkscapeでプレゼンテーション（jessyinkなし）](http://yambi.hatenablog.com/entry/20140211/1392110852)

### [JessyInk](https://launchpad.net/jessyink) {#k0206a78}

- [Inkscapeでプレゼンテーション](http://d.hatena.ne.jp/yambi/20110405/1301974923)

## Inkscape で TeX 数式 {#f9da7d32}

[TeX2img](/TeX2img/) (Windows/Mac) を使用して，TeX ソースから数式画像を EPS/PDF 形式でアウトライン化して出力するのが簡単です．
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
- MacWiki:Inkscape
- [Inkscape - 窓の杜ライブラリ](http://www.forest.impress.co.jp/library/software/inkscape/)
- [Beamerscape](https://github.com/jbohren/beamerscape)
