---
title: "TeXstudio/設定/Windows"
url: "/TeXstudio/設定/Windows/"
date: 2012-12-01T03:36:30Z
pukiwiki: "TeXstudio/設定/Windows"
---

# TeXstudio/設定/Windows

[TeXstudio](/TeXstudio/) > [設定](</TeXstudio/設定/>) > Windows

***

***

### コマンド {#zdc6ab74}

- コマンドの LaTeX に設定されている latex.exe を uplatex.exe に変更して -src を -synctex=1 に変更します．
- コマンドの DviPdf に設定されている dvipdfm.exe を dvipdfmx.exe に変更します．
- コマンドの BibTeX に設定されている bibtex.exe を bibtexu.exe に変更します．
- コマンドの Biber に設定されている biber を biber --bblencoding=utf8 -u -U --output_safechars に変更します．
- 詳細な設定をする場合は高度なオプションの表示を ON にします．

***

LaTeX
: &nbsp;

: uplatex.exe -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex

PdfLaTeX
: &nbsp;

<!-- :|latexmk.exe -e "$latex=q/uplatex &#x25;&#x25;O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O - -bblencoding=utf8 -u -U - -output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent % -->

: pdflatex.exe -synctex=1 -interaction=nonstopmode %.tex

XeLaTeX
: &nbsp;

: xelatex.exe -synctex=1 -interaction=nonstopmode %.tex

LuaLaTeX
: &nbsp;

: lualatex.exe -synctex=1 -interaction=nonstopmode %.tex

外部PDFビューア
: &nbsp;

: "C:\Users\\%USERNAME%\AppData\Local\SumatraPDF\SumatraPDF.exe" -reuse-instance -inverse-search '"C:\Program Files\texstudio\texstudio.exe" "&#x25;&#x25;f" -line &#x25;&#x25;l' "?am.pdf" -forward-search "?c:am.tex" @

: dde:///"C:\Users\\%USERNAME%\AppData\Local\SumatraPDF\SumatraPDF.exe":SUMATRA/control/\[ForwardSearch("?am.pdf","?c:am.tex",@,0,0,1)\]

: dde:///"C:\Users\\%USERNAME%\AppData\Local\SumatraPDF\SumatraPDF.exe":SUMATRA/control/\[ForwardSearch("?am.pdf","?c:am.tex",@,0,0,0)\]

: synctex view -i "@:0:?c:am.tex" -o "?am.pdf" -x "texworks --position=&#x25;&#x25;{page+1} '&#x25;&#x25;{output}'"

DviPs
: &nbsp;

: ruby.exe -e "cmd='dvips -Ppdf -z -f '+0x22.chr+'?am.dvi'+0x22.chr+' '+0x7c.chr+' '+'convbkmk -u'+' '+0x3e.chr+' '+0x22.chr+'?am.ps'+0x22.chr;system(cmd)"

DviPng
: &nbsp;

: dvipng.exe -T tight -D 120 %.dvi

Ps2Pdf
: &nbsp;

: ps2pdf.exe %.ps

DviPdf
: &nbsp;

: dvipdfmx.exe %.dvi

BibTeX
: &nbsp;

: bibtexu.exe %

BibTex 8ビット
: &nbsp;

: bibtex8.exe %

Biber
: &nbsp;

: biber.exe --bblencoding=utf8 -u -U --output_safechars %

Makeindex
: &nbsp;

: upmendex.exe %.idx

Texindy
: &nbsp;

<!-- :|ptexindy.exe %.idx -->

: texindy.exe %.idx

Makeglossary
: &nbsp;

: makeglossaries.exe

Metapost
: &nbsp;

: upmpost.exe -interaction=nonstopmode ?me)

Asymptote
: &nbsp;

: asy.exe %m\*.asy

Ghostscript
: &nbsp;

: rungs.exe

Latexmk
: &nbsp;

: latexmk.exe -e "$lualatex=q/lualatex &#x25;&#x25;O -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdflua -silent %

: latexmk.exe -e "$latex=q/uplatex &#x25;&#x25;O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent %

<!-- :|latexmk -pdf -silent -latexoption="-synctex=1" % -->

SVN
: &nbsp;

: svn.exe

SVNADMIN
: &nbsp;

: svnadmin.exe

GIT
: &nbsp;

: git.exe

外部ターミナル
: &nbsp;

: C:\Windows\System32\cmd.exe

***

## [SumatraPDF](/SumatraPDF/) との連携 {#h75a4e4d}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward and inverse search {#m8df4b15}

#### SumatraPDF を前面に表示したい場合 {#ofb25574}

forward and inverse search は 外部PDFビューア に以下のように設定します．<br>

```
"C:\Users\%USERNAME%\AppData\Local\SumatraPDF\SumatraPDF.exe" -reuse-instance -inverse-search '"C:\Program Files\texstudio\texstudio.exe" "%%f" -line %%l' "?am.pdf" -forward-search "?c:am.tex" @
```

### forward search {#xd4d4cea}

#### SumatraPDF を前面に表示したい場合 {#fb37c098}

forward search は 外部PDFビューア に以下のように設定します．<br>

```
dde:///"C:\Users\%USERNAME%\AppData\Local\SumatraPDF\SumatraPDF.exe":SUMATRA/control/[ForwardSearch("?am.pdf","?c:am.tex",@,0,0,1)]
```

#### SumatraPDF を前面に表示したくない場合 {#pa03cf5d}

forward search は 外部PDFビューア に以下のように設定します．<br>

```
dde:///"C:\Users\%USERNAME%\AppData\Local\SumatraPDF\SumatraPDF.exe":SUMATRA/control/[ForwardSearch("?am.pdf","?c:am.tex",@,0,0,0)]
```

### inverse search {#bbb88480}

inverse search は SumatraPDF の \[☰\] &gt;\[設定(S)\] &gt; \[オプション(O)...\] の逆順検索コマンドラインの設定に以下のように設定します．<br>

```
"C:\Program Files\texstudio\texstudio.exe" "%f" -line %l
```

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## [TeXworks](/TeXworks/) との連携 {#nbf2fe80}

### forward search {#rd52a42f}

forward search は 外部PDFビューア に以下のように設定します．<br>

```
synctex view -i "@:0:?c:am.tex" -o "?am.pdf" -x "texworks --position=%%{page+1} '%%{output}'"
```

## Adobe Acrobat Reader との連携 {#b8db9f79}

### forward search {#qc0a4b5f}

#### pdfupLaTeXA {#v47e9095}

pdfuplatexA-nonstopmode.bat を作成します．

***

- pdfuplatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq Acrobat.exe" /nh | ^
findstr "Acrobat.exe" > nul && ^
pdfopen --file "%~n1.pdf" && ^
pdfclose --file "%~n1.pdf" & ^
ptex2pdf -u -l -ot "-kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode" %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --file '%%{output}' --page %%{page+1}"
```

***

ユーザーコマンドに

```
pdfuplatexA-nonstopmode.bat % "?c:am.tex" @
```

を入力します．

#### LuaLaTeXA {#q18a41f2}

lualatexA-nonstopmode.bat を作成します．

***

- lualatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq Acrobat.exe" /nh | ^
findstr "Acrobat.exe" > nul && ^
pdfopen --file "%~n1.pdf" && ^
pdfclose --file "%~n1.pdf" & ^
lualatex -synctex=1 -interaction=nonstopmode %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --file '%%{output}' --page %%{page+1}"
```

***

ユーザーコマンドに

```
lualatexA-nonstopmode.bat % "?c:am.tex" @
```

を入力します．
