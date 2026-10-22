---
title: "Texmaker/設定/Linux"
url: "/Texmaker/設定/Linux/"
date: 2012-07-13T16:54:29Z
pukiwiki: "Texmaker/設定/Linux"
---

# Texmaker/設定/Linux

[Texmaker](/Texmaker/) > [設定](</Texmaker/設定/>) > [Linux](/Linux/)

***

***

## 設定 {#t1b1a7e1}

### コマンド {#cab65285}

<ins>O</ins>ptions &gt; Configure Texmaker &gt; Commands

コマンドの LaTeX に設定されている latex を uplatex に変更してコマンドのオプションに -synctex=1 を追加します．

コマンドの LuaLaTeX に設定されているコマンドのオプションに -synctex=1 を追加します．

コマンドの Bib(la)tex に設定されている bibtex を biber --bblencoding=utf8 -u -U --output_safechars または bibtexu に変更します．

コマンドの Dvipdfm に設定されている dvipdfm を dvipdfmx に変更します．

***

コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)
: &nbsp;

LaTeX
: &nbsp;

: uplatex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex

PdfLaTeX
: &nbsp;

: pdflatex -synctex=1 -interaction=nonstopmode %.tex

: ☐ Use a "build" subdirectory for output files

XeLaTeX
: &nbsp;

: xelatex -synctex=1 -interaction=nonstopmode %.tex

LuaLaTeX
: &nbsp;

: lualatex -synctex=1 -interaction=nonstopmode %.tex

Latexmk
: &nbsp;

: ruby -e "cmd='latexmk -e '+0x22.chr+'$lualatex=q/lualatex '+0x25.chr+'O'+' -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/bibtexu '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/upmendex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+' -norc -gg -pdflua '+'%.tex';system(cmd)"

: ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/bibtexu '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/upmendex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"

Bib(la)tex
: &nbsp;

: biber --bblencoding=utf8 -u -U --output_safechars &#x25;

: bibtexu &#x25;

Makeindex
: &nbsp;

: upmendex %.idx

dvips
: &nbsp;

: ruby -e "cmd='dvips -Ppdf -z -f '+0x22.chr+ARGV\[0\]+'.dvi'+0x22.chr+' '+0x7c.chr+' '+'convbkmk -u'+' '+0x3e.chr+' '+0x22.chr+ARGV\[0\]+'.ps'+0x22.chr;system(cmd)" %

Dvipdfm
: &nbsp;

: dvipdfmx %.dvi

ps2pdf
: &nbsp;

: ps2pdf %.ps

metapost
: &nbsp;

: upmpost -interaction=nonstopmode &#x25;

Asymptote
: &nbsp;

: asy %.asy

ghostscript
: &nbsp;

: gs

R Sweave
: &nbsp;

: R CMD Sweave %.Rnw

Add to PATH
: &nbsp;

PDF Viewer
: &nbsp;

: 🔘 Built-in Viewer

: ☑ Embed

: ◯ External Viewer

: ruby -e "cmd='okular --unique '+0x22.chr+'file:'+'"%.pdf"'+0x23.chr+'src:'+'"@"'+' '+'"!/#.tex"'+0x22.chr;system(cmd)"

: ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'papers -i '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"

: ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'zathura -P '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"

: ruby -e "cmd='zathura -x '+0x22.chr+'texmaker '+0x22.chr++0x25.chr+'{input}'+0x22.chr+' -line '+0x25.chr+'{line}'+0x22.chr+' --synctex-forward '+0x22.chr+'"@"'+':0:'+'"#.tex"'+0x22.chr+' '+0x22.chr+'"%.pdf"'+0x22.chr;system(cmd)"

: ruby -e "cmd='qpdfview --unique '+0x22.chr+'"%.pdf"'+0x23.chr+'src:'+'"#.tex"'+':'+'"@"'+':0'+0x22.chr;system(cmd)"

: ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'texworks --position='+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"

***

## Okular との連携 {#e1d5124a}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#rb0da469}

forward search は PDFビューアに

```
ruby -e "cmd='okular --unique '+0x22.chr+'file:'+'"%.pdf"'+0x23.chr+'src:'+'"@"'+' '+'"!/#.tex"'+0x22.chr;system(cmd)"
```

です．

### inverse search {#r820bc14}

\[Settings\]-\[Configure Okular...\]-\[Editor\] の項目から Custom Text Editor を選択します．

Editor:
: Custom Text Editor

Command:
: texmaker "%f" -line %l

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## zathura との連携 {#k3c22c37}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward and inverse search {#s8c6284b}

forward and inverse search は PDFビューアに

```
ruby -e "cmd='zathura -x '+0x22.chr+'texmaker '+0x22.chr++0x25.chr+'{input}'+0x22.chr+' -line '+0x25.chr+'{line}'+0x22.chr+' --synctex-forward '+0x22.chr+'"@"'+':0:'+'"#.tex"'+0x22.chr+' '+0x22.chr+'"%.pdf"'+0x22.chr;system(cmd)"
```

です．

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## qpdfview との連携 {#t3c4682d}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#dca2869a}

forward search は PDFビューアに

```
ruby -e "cmd='qpdfview --unique '+0x22.chr+'"%.pdf"'+0x23.chr+'src:'+'"#.tex"'+':'+'"@"'+':0'+0x22.chr;system(cmd)"
```

です．

### inverse search {#pac65f46}

\[Edit\]-\[Settings...\]-\[Behaviour\]

Source editor:
: texmaker "%1" -line %2

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．
