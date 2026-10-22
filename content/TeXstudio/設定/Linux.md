---
title: "TeXstudio/設定/Linux"
url: "/TeXstudio/設定/Linux/"
date: 2013-08-19T11:44:08Z
pukiwiki: "TeXstudio/設定/Linux"
---

# TeXstudio/設定/Linux

[TeXstudio](/TeXstudio/) > [設定](</TeXstudio/設定/>) > Linux

***

***

### コマンド {#fdb50ca9}

- コマンドの LaTeX に設定されている latex を uplatex に変更して -src を -synctex=1 に変更します．
- コマンドの DviPdf に設定されている dvipdfm を dvipdfmx に変更します．
- コマンドの BibTeX に設定されている bibtex を bibtexu に変更します．
- コマンドの Biber に設定されている biber を biber --bblencoding=utf8 -u -U --output_safechars に変更します．
- 詳細な設定をする場合は高度なオプションの表示を ON にします．

***

LaTeX
: &nbsp;

: uplatex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex

PdfLaTeX
: &nbsp;

<!-- :|latexmk -e "$latex=q/uplatex &#x25;&#x25;O -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O - -bblencoding=utf8 -u -U - -output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent % -->

: pdflatex -synctex=1 -interaction=nonstopmode %.tex

XeLaTeX
: &nbsp;

: xelatex -synctex=1 -interaction=nonstopmode %.tex

LuaLaTeX
: &nbsp;

: lualatex -synctex=1 -interaction=nonstopmode %.tex

外部PDFビューア
: &nbsp;

: okular --unique "file:?am.pdf#src:@ ?c:am.tex"

: synctex view -i "@:0:?c:am.tex" -o "?am.pdf" -x "papers -i &#x25;&#x25;{page+1} '&#x25;&#x25;{output}'"

: zathura -x "texstudio '&#x25;&#x25;{input}' -line &#x25;&#x25;{line}" --synctex-forward "@:0:?c:am.tex" "?am.pdf"

: qpdfview --unique "?am.pdf#src:?c:am.tex:@:0"

: sioyek --reuse-window --execute-command "turn_on_synctex" --inverse-search 'texstudio "&#x25;&#x25;1" -line &#x25;&#x25;2' "?am.pdf" --forward-search-file "?c:am.tex" --forward-search-line @

: synctex view -i "@:0:?c:am.tex" -o "?am.pdf" -x "texworks --position=&#x25;&#x25;{page+1} '&#x25;&#x25;{output}'"

DviPs
: &nbsp;

: ruby -e "cmd='dvips -Ppdf -z -f '+0x22.chr+'?am.dvi'+0x22.chr+' '+0x7c.chr+' '+'convbkmk -u'+' '+0x3e.chr+' '+0x22.chr+'?am.ps'+0x22.chr;system(cmd)"

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

: bibtexu %

BibTex 8ビット
: &nbsp;

: bibtex8 %

Biber
: &nbsp;

: biber --bblencoding=utf8 -u -U --output_safechars %

Makeindex
: &nbsp;

: upmendex %.idx

Texindy
: &nbsp;

<!-- :|ptexindy %.idx -->

: texindy %.idx

Makeglossary
: &nbsp;

: makeglossaries

Metapost
: &nbsp;

: upmpost -interaction=nonstopmode %

Asymptote
: &nbsp;

: asy %.asy

Ghostscript
: &nbsp;

: gs

Latexmk
: &nbsp;

: latexmk -e "$lualatex=q/lualatex &#x25;&#x25;O -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdflua -silent %

: latexmk -e "$latex=q/uplatex &#x25;&#x25;O -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent %

<!-- :|latexmk -pdf -silent -latexoption="-synctex=1" % -->

SVN
: &nbsp;

: svn

SVNADMIN
: &nbsp;

: svnadmin

GIT
: &nbsp;

: git

***

## [Okular](/Okular/) との連携 {#c6d921dc}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#x57d864f}

forward search は外部PDFビューアに

```
okular --unique "file:?am.pdf#src:@ ?c:am.tex"
```

です．

### inverse search {#xd0f2973}

\[Settings\]-\[Configure Okular...\]-\[Editor\] の項目から Custom Text Editor を選択します．

Editor:
: Custom Text Editor

Command:
: texstudio "%f" -line %l

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## [zathura](/zathura/) との連携 {#i139e4bb}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward and inverse search {#hd7f6d9d}

forward and inverse search は外部PDFビューアに

```
zathura -x "texstudio '%%{input}' -line %%{line}" --synctex-forward "@:0:?c:am.tex" "?am.pdf"
```

です．

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## [qpdfview](/qpdfview/) との連携 {#j7ca7059}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#d9853641}

forward search は外部PDFビューアに

```
qpdfview --unique "?am.pdf#src:?c:am.tex:@:0"
```

です．

### inverse search {#f31d5e80}

\[Edit\]-\[Settings...\]-\[Behaviour\]

Source editor:
: texstudio "%1" -line %2

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．
