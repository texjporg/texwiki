---
title: "TeXstudio/設定/Windows"
url: "/TeXstudio/設定/Windows/"
date: 2012-12-01T03:36:30Z
pukiwiki: "TeXstudio/設定/Windows"
---

# TeXstudio/設定/Windows

[TeXstudio](/TeXstudio/) > [設定](</TeXstudio/設定/>) > Windows

### コマンド {#zdc6ab74}

***

<span style="color:Black;background-color:#3F43EF;"><ins>　　<span style="color:White;"><strong>TeXstudioの設定</strong></span>　　　　　　　　　　　　</ins></span><br>

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

<span style="color:Black;background-color:#3F43EF;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#2F33DF;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

LaTeX
: &nbsp;

: platex.exe -guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex

: uplatex.exe -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex

: latex.exe -synctex=1 -interaction=nonstopmode %.tex

PdfLaTeX
: &nbsp;

: pdflatex.exe -synctex=1 -interaction=nonstopmode %.tex

XeLaTeX
: &nbsp;

: xelatex.exe -synctex=1 -interaction=nonstopmode %.tex

LuaLaTeX
: &nbsp;

: lualatex.exe -synctex=1 -interaction=nonstopmode %.tex

: luajitlatex.exe -synctex=1 -interaction=nonstopmode %.tex

外部PDFビューア
: &nbsp;

: texworks.exe "?am.pdf"

: "C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance "?am.pdf" -forward-search "?c:am.tex" @

: "C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance "?am.pdf" -forward-search "?c:am.tex" @

: dde:///"C:\Program Files\SumatraPDF\SumatraPDF.exe":SUMATRA/control/\[ForwardSearch("?am.pdf","?c:am.tex",@,0,0,1)\]

: dde:///"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe":SUMATRA/control/\[ForwardSearch("?am.pdf","?c:am.tex",@,0,0,1)\]

: "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" "?am.pdf"

: "C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe" "?am.pdf"

DviPs
: &nbsp;

: dvips.exe -Ppdf -o %.ps %.dvi

DviPng
: &nbsp;

: dvipng.exe -T tight -D 120 %.dvi

Ps2Pdf
: &nbsp;

: ps2pdf.bat %.ps

DviPdf
: &nbsp;

: dvipdfmx.exe %.dvi

BibTeX
: &nbsp;

: pbibtex.exe -kanji=utf8 %

: upbibtex.exe %

: bibtexu.exe %

: bibtex.exe %

BibTex 8ビット
: &nbsp;

: bibtex8.exe %

Biber
: &nbsp;

: biber.exe %

Makeindex
: &nbsp;

: mendex.exe -U %.idx

: makeindex.exe %.idx

Texindy
: texindy.exe

Makeglossary
: &nbsp;

: makeglossaries.exe

Metapost
: &nbsp;

: pmpost.exe -kanji=utf8 -interaction=nonstopmode ?me)

: upmpost.exe -interaction=nonstopmode ?me)

: mpost.exe -interaction=nonstopmode ?me)

Asymptote
: &nbsp;

: asy.exe %m\*.asy

Ghostscript
: &nbsp;

: "C:\gs\gs9.09\bin\gswin32c.exe"

<!-- :|C:\texlive\2013\tlpkg\tlgs\bin\gswin32c.exe -->

Latexmk
: &nbsp;

: latexmk -pdf -silent -pdflatex="pdflatex -synctex=1 &#x25;&#x25;O &#x25;&#x25;S" %

SVN
: &nbsp;

: svn.exe

SVNADMIN
: &nbsp;

: svnadmin.exe

***

## [SumatraPDF](/SumatraPDF/) との連携 {#h75a4e4d}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#xd4d4cea}

#### SumatraPDF を前面に表示したい場合 {#fb37c098}

forward search は 外部PDFビューア に

■ 32bit Windows の場合

```
"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance "?am.pdf" -forward-search "?c:am.tex" @
```

または

```
dde:///"C:\Program Files\SumatraPDF\SumatraPDF.exe":SUMATRA/control/[ForwardSearch("?am.pdf","?c:am.tex",@,0,0,1)]
```

■ 64bit Windows の場合

```
"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance "?am.pdf" -forward-search "?c:am.tex" @
```

または

```
dde:///"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe":SUMATRA/control/[ForwardSearch("?am.pdf","?c:am.tex",@,0,0,1)]
```

です．

#### SumatraPDF を前面に表示したくない場合 {#pa03cf5d}

forward search は 外部PDFビューア に

■ 32bit Windows の場合

```
dde:///"C:\Program Files\SumatraPDF\SumatraPDF.exe":SUMATRA/control/[ForwardSearch("?am.pdf","?c:am.tex",@,0,0,0)]
```

■ 64bit Windows の場合

```
dde:///"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe":SUMATRA/control/[ForwardSearch("?am.pdf","?c:am.tex",@,0,0,0)]
```

です．

### inverse search {#bbb88480}

inverse search は SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に

```
C:\TeXstudio\texstudio.exe "%f" -line %l
```

です．

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．
