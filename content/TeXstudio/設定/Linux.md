---
title: "TeXstudio/設定/Linux"
url: "/TeXstudio/設定/Linux/"
date: 2013-08-19T11:44:08Z
pukiwiki: "TeXstudio/設定/Linux"
---

# TeXstudio/設定/Linux

[TeXstudio](/TeXstudio/) > [設定](</TeXstudio/設定/>) > Linux

### コマンド {#fdb50ca9}

***

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">コマンド 　　　　　　　　　　　</span><br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

ビルド<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_latexmenus.png" alt="メニュー" width="37" height="37" style="float:left">

メニュー<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_toolbars.png" alt="ツールバー" width="37" height="37" style="float:left">

ツールバー<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

エディタ<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_advancededitor.png" alt="詳細なエディタ設定" width="37" height="37" style="float:left">

詳細なエディタ設定<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_highlighting.png" alt="カスタム強調表示" width="37" height="37" style="float:left">

カスタム強調表示<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

コマンドの補完<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー<br>

<img src="http://svn.code.sf.net/p/texstudio/code/trunk/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN<br>

<br>

<br>

<br>

<br>

<br>

　☑ 高度なオプションの表示

<br>

***

LaTeX
: &nbsp;

: platex -synctex=1 -interaction=nonstopmode %.tex

: uplatex -synctex=1 -interaction=nonstopmode %.tex

: latex -synctex=1 -interaction=nonstopmode %.tex

PdfLaTeX
: &nbsp;

: pdflatex -synctex=1 -interaction=nonstopmode %.tex

XeLaTeX
: &nbsp;

: xelatex -synctex=1 -interaction=nonstopmode %.tex

LuaLaTeX
: &nbsp;

: lualatex -synctex=1 -interaction=nonstopmode %.tex

: luajitlatex -synctex=1 -interaction=nonstopmode %.tex

外部PDFビューア
: &nbsp;

: evince %.pdf

: okular --unique %.pdf

: zathura %.pdf

: qpdfview --unique %.pdf

: pdfviewer %.pdf

DviPs
: &nbsp;

: dvips -Ppdf -o %.ps %.dvi

DviPng
: &nbsp;

: dvipng -T tight -D 120 %.dvi

Ps2Pdf
: &nbsp;

: ps2pdf %.ps

DviPdf
: &nbsp;

: dvipdfmx %.dvi

BibTeX
: &nbsp;

: pbibtex %

: upbibtex %

: bibtexu %

: bibtex %

BibTex 8ビット
: &nbsp;

: bibtex8 %

Biber
: &nbsp;

: biber %

Makeindex
: &nbsp;

: mendex %.idx

: makeindex %.idx

Texindy
: texindy

Makeglossary
: &nbsp;

: makeglossaries

Metapost
: &nbsp;

: pmpost -interaction=nonstopmode %

: upmpost -interaction=nonstopmode %

: mpost -interaction=nonstopmode %

Asymptote
: &nbsp;

: asy %.asy

Ghostscript
: &nbsp;

: gs

Latexmk
: &nbsp;

: latexmk -pdf -silent -pdflatex="pdflatex -synctex=1 &#x25;&#x25;O &#x25;&#x25;S" %

SVN
: &nbsp;

: svn

SVNADMIN
: &nbsp;

: svnadmin

***
