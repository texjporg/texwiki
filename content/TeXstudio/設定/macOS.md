---
title: "TeXstudio/設定/macOS"
url: "/TeXstudio/設定/macOS/"
date: 2017-06-13T14:49:45Z
pukiwiki: "TeXstudio/設定/macOS"
---

# TeXstudio/設定/macOS

[TeXstudio](/TeXstudio/) > [設定](</TeXstudio/設定/>) > [macOS](/Mac/)

***

***

### コマンド {#a32ff532}

- LaTeX のコマンドを latex から uplatex に変更し，-src を -synctex=1 に変更します．
- DviPdf のコマンドを dvipdf から dvipdfmx に変更します．
- BibTeX のコマンドを bibtex から bibtexu に変更します．
- Biber のコマンドを biber から biber --bblencoding=utf8 -u -U --output_safechars に変更します．
    <!-- -Latexmk-upLaTeX を使用する場合は コマンドの PdfLaTeX に設定されている "/Library/TeX/texbin/pdflatex" -synctex=1 -interaction=nonstopmode %.tex を "/Library/TeX/texbin/latexmk" -e "$latex=q/uplatex &#x25;&#x25;O -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O - -bblencoding=utf8 -u -U - -output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent % に変更します．pdfLaTeX を実行したくなった場合は Latexmk の変数 $pdflatex が pdflatex コマンドに設定されていれば [ツール(T)] &gt; [コマンド(C)] &gt; [LaTeXmk] から Latexmk で pdfLaTeX を実行できます． -->

- 詳細な設定をする場合は高度なオプションの表示を ON にします．

***

LaTeX
: &nbsp;

: "/usr/local/bin/uplatex" -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex

: "/Library/TeX/texbin/uplatex" -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex

PdfLaTeX
: &nbsp;

<!-- :|"/Library/TeX/texbin/latexmk" -e "$latex=q/uplatex &#x25;&#x25;O -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O - -bblencoding=utf8 -u -U - -output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent % -->

: "/usr/local/bin/pdflatex" -synctex=1 -interaction=nonstopmode %.tex

: "/Library/TeX/texbin/pdflatex" -synctex=1 -interaction=nonstopmode %.tex

XeLaTeX
: &nbsp;

: "/usr/local/bin/xelatex" -synctex=1 -interaction=nonstopmode %.tex

: "/Library/TeX/texbin/xelatex" -synctex=1 -interaction=nonstopmode %.tex

LuaLaTeX
: &nbsp;

: "/usr/local/bin/lualatex" -synctex=1 -interaction=nonstopmode %.tex

: "/Library/TeX/texbin/lualatex" -synctex=1 -interaction=nonstopmode %.tex

外部PDFビューア
: &nbsp;

: "/Applications/Skim.app/Contents/SharedSupport/displayline" @ "?am.pdf" "?c:am.tex"

DviPs
: &nbsp;

: ruby -e "cmd='/usr/local/bin/dvips -Ppdf -z -f '+0x22.chr+'?am.dvi'+0x22.chr+' '+0x7c.chr+' '+'convbkmk -u'+' '+0x3e.chr+' '+0x22.chr+'?am.ps'+0x22.chr;system(cmd)"

: ruby -e "cmd='/Library/TeX/texbin/dvips -Ppdf -z -f '+0x22.chr+'?am.dvi'+0x22.chr+' '+0x7c.chr+' '+'convbkmk -u'+' '+0x3e.chr+' '+0x22.chr+'?am.ps'+0x22.chr;system(cmd)"

DviPng
: &nbsp;

: "/usr/local/bin/dvipng" -T tight -D 120 %.dvi

: "/Library/TeX/texbin/dvipng" -T tight -D 120 %.dvi

Ps2Pdf
: &nbsp;

: "/usr/local/bin/ps2pdf" %.ps

DviPdf
: &nbsp;

: "/usr/local/bin/dvipdfmx" %.dvi

: "/Library/TeX/texbin/dvipdfmx" %.dvi

BibTeX
: &nbsp;

: "/usr/local/bin/bibtexu" %

: "/Library/TeX/texbin/bibtexu" %

BibTex 8ビット
: &nbsp;

: "/usr/local/bin/bibtex8" %

: "/Library/TeX/texbin/bibtex8" %

Biber
: &nbsp;

: "/usr/local/bin/biber" --bblencoding=utf8 -u -U --output_safechars %

: "/Library/TeX/texbin/biber" --bblencoding=utf8 -u -U --output_safechars %

Makeindex
: &nbsp;

: "/usr/local/bin/upmendex" %.idx

: "/Library/TeX/texbin/upmendex" %.idx

Texindy
: &nbsp;

: "/usr/local/bin/texindy" %.idx

: "/Library/TeX/texbin/texindy" %.idx

Makeglossary
: &nbsp;

: makeglossaries

Metapost
: &nbsp;

: "/usr/local/bin/upmpost" -interaction=nonstopmode %

: "/Library/TeX/texbin/upmpost" -interaction=nonstopmode %

Asymptote
: &nbsp;

: "/usr/local/bin/asy" %.asy

: "/Library/TeX/texbin/asy" %.asy

Ghostscript
: &nbsp;

: "/usr/local/bin/gs"

Latexmk
: &nbsp;

: "/usr/local/bin/latexmk" -e "$lualatex=q/lualatex &#x25;&#x25;O -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdflua -silent %

: "/Library/TeX/texbin/latexmk" -e "$lualatex=q/lualatex &#x25;&#x25;O -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdflua -silent %

: "/usr/local/bin/latexmk" -e "$latex=q/uplatex &#x25;&#x25;O -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent %

: "/Library/TeX/texbin/latexmk" -e "$latex=q/uplatex &#x25;&#x25;O -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent %

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

## Skim との連携 {#p9518b78}

### forward search {#d42e3a79}

forward search は 外部PDFビューア に以下のように設定します．

```
"/Applications/Skim.app/Contents/SharedSupport/displayline" @ "?am.pdf" "?c:am.tex"
```

### inverse search {#ea54683f}

コマンド:
: /Applications/texstudio.app/Contents/MacOS/texstudio

引数:
: "%file" -line %line

<!-- *関連リンク [#r167bf94] -->
<!--  -->
<!-- -http://tex.stackexchange.com/questions/38627/commands-paths-in-texstudio-on-mac-os-x-with-could-not-start-the-command-err -->
