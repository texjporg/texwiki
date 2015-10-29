---
title: "TeXstudio/設定/OS X"
url: "/TeXstudio/設定/OS X/"
date: 2013-09-18T17:13:52Z
pukiwiki: "TeXstudio/設定/OS X"
---

# TeXstudio/設定/OS X

[TeXstudio](/TeXstudio/) > [設定](</TeXstudio/設定/>) > OS X

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

### コマンド {#a32ff532}

TeXstudio で日本語 upLaTeX または pLaTeX を使用するためには，以下のように設定します． <!-- まだ pLaTeX しか利用できない環境が大学端末室などに大量に残っている --> <!-- 現状に配慮し，pLaTeX 用設定の記述も残します．削除しないでください． -->

- LaTeX のコマンドを latex から uplatex または platex に変更し，-src を -synctex=1 に変更します．
- DviPdf のコマンドを dvipdf から dvipdfmx に変更します．
- BibTeX のコマンドを bibtex から upbibtex または pbibtex に変更します．
- Biber のコマンドを biber から biber --bblencoding=utf8 -u -U --output_safechars に変更します．

設定例を以下に示します．

<img src="/attach/TeXstudio/%E8%A8%AD%E5%AE%9A/OS%20X/TeXstudio-osx-setting01.png" alt="">

詳細な設定をする場合は高度なオプションの表示を ON にします．

***

LaTeX
: &nbsp;

: "/Library/TeX/texbin/uplatex" -synctex=1 -interaction=nonstopmode %.tex

: "/Library/TeX/texbin/platex" -synctex=1 -interaction=nonstopmode %.tex

PdfLaTeX
: &nbsp;

: "/Library/TeX/texbin/pdflatex" -synctex=1 -interaction=nonstopmode %.tex

XeLaTeX
: &nbsp;

: "/Library/TeX/texbin/xelatex" -synctex=1 -interaction=nonstopmode %.tex

LuaLaTeX
: &nbsp;

: "/Library/TeX/texbin/lualatex" -synctex=1 -interaction=nonstopmode %.tex

: "/Library/TeX/texbin/luajitlatex" -synctex=1 -interaction=nonstopmode %.tex

外部PDFビューア
: &nbsp;

: "/Applications/Skim.app/Contents/SharedSupport/displayline" @ "?am.pdf" "?c:am.tex"

DviPs
: &nbsp;

: ruby -e "cmd='/Library/TeX/texbin/dvips -Ppdf -z -f '+0x22.chr+'?am.dvi'+0x22.chr+' '+0x7c.chr+' '+'convbkmk -u'+' '+0x3e.chr+' '+0x22.chr+'?am.ps'+0x22.chr;system(cmd)"

DviPng
: &nbsp;

: "/Library/TeX/texbin/dvipng" -T tight -D 120 %.dvi

Ps2Pdf
: &nbsp;

: "/usr/local/bin/ps2pdf" %.ps

DviPdf
: &nbsp;

: "/Library/TeX/texbin/dvipdfmx" %.dvi

BibTeX
: &nbsp;

: "/Library/TeX/texbin/upbibtex" %

BibTex 8ビット
: &nbsp;

: "/Library/TeX/texbin/bibtex8" %

Biber
: &nbsp;

: "/Library/TeX/texbin/biber" --bblencoding=utf8 -u -U --output_safechars %

Makeindex
: &nbsp;

: "/Library/TeX/texbin/upmendex" %.idx ← TeX Live に入っていないようなのだが…

: "/Library/TeX/texbin/mendex" -U %.idx

Texindy
: &nbsp;

: "/Library/TeX/texbin/ptexindy" %.idx ← TeX Live に入っていないようなのだが…

: "/Library/TeX/texbin/texindy" %.idx

Makeglossary
: &nbsp;

: makeglossaries

Metapost
: &nbsp;

: "/Library/TeX/texbin/upmpost" -interaction=nonstopmode %

: "/Library/TeX/texbin/pmpost" -interaction=nonstopmode %

Asymptote
: &nbsp;

: "/Library/TeX/texbin/asy" %.asy

Ghostscript
: &nbsp;

: "/usr/local/bin/gs"

Latexmk
: &nbsp;

: "/Library/TeX/texbin/latexmk" -e "$latex=q/uplatex &#x25;&#x25;O -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/upbibtex &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent %

SVN
: &nbsp;

: svn

SVNADMIN
: &nbsp;

: svnadmin

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
