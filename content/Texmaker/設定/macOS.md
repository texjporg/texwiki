---
title: "Texmaker/設定/macOS"
url: "/Texmaker/設定/macOS/"
date: 2017-07-21T03:45:30Z
pukiwiki: "Texmaker/設定/macOS"
---

# Texmaker/設定/macOS

[Texmaker](/Texmaker/) > [設定](</Texmaker/設定/>) > [macOS](/Mac/)

***

***

## 設定 {#ca365096}

### コマンド {#cab65285}

<ins>O</ins>ptions &gt; Configure Texmaker &gt; Commands

動作未確認です．

コマンドの LaTeX に設定されている latex を uplatex に変更してコマンドのオプションに -synctex=1 を追加します．

コマンドの LuaLaTeX に設定されているコマンドのオプションに -synctex=1 を追加します．

コマンドの Bib(la)tex に設定されている bibtex を biber --bblencoding=utf8 -u -U --output_safechars または bibtexu に変更します．

コマンドの Dvipdfm に設定されている dvipdfm を dvipdfmx に変更します．

BibTeX と dvipdfmx がうまく動作しない場合は以下を参照してください．

- [TeXmakerでbibTeXとdvipdfmxが動きません](https://okumuralab.org/tex/mod/forum/discuss.php?d=988)
- [TeXshopでbibTeXがうまく動かなくなりました](https://okumuralab.org/tex/mod/forum/discuss.php?d=991)

***

コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)
: &nbsp;

LaTeX
: &nbsp;

: "/Library/TeX/texbin/uplatex" -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex

PdfLaTeX
: &nbsp;

: "/Library/TeX/texbin/pdflatex" -synctex=1 -interaction=nonstopmode %.tex

: ☐ Use a "build" subdirectory for output files

XeLaTeX
: &nbsp;

: "/Library/TeX/texbin/xelatex" -synctex=1 -interaction=nonstopmode %.tex

LuaLaTeX
: &nbsp;

: "/Library/TeX/texbin/lualatex" -synctex=1 -interaction=nonstopmode %.tex

Latexmk
: &nbsp;

: ruby -e "cmd='latexmk -e '+0x22.chr+'$lualatex=q/lualatex '+0x25.chr+'O'+' -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/bibtexu '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/upmendex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+' -norc -gg -pdflua '+'%.tex';system(cmd)"

: ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/bibtexu '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/upmendex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"

Bib(la)tex
: &nbsp;

: "/Library/TeX/texbin/biber" --bblencoding=utf8 -u -U --output_safechars &#x25;

: "/Library/TeX/texbin/bibtexu" &#x25;

Makeindex
: &nbsp;

: "/Library/TeX/texbin/upmendex" %.idx

dvips
: &nbsp;

: ruby -e "cmd='/Library/TeX/texbin/dvips -Ppdf -z -f '+0x22.chr+ARGV\[0\]+'.dvi'+0x22.chr+' '+0x7c.chr+' '+'convbkmk -u'+' '+0x3e.chr+' '+0x22.chr+ARGV\[0\]+'.ps'+0x22.chr;system(cmd)" %

Dvipdfm
: &nbsp;

: "/Library/TeX/texbin/dvipdfmx" %.dvi

ps2pdf
: &nbsp;

: "/Applications/Ghostscript.app/bin/ps2pdf" %.ps

: "/usr/local/bin/ps2pdf" %.ps

metapost
: &nbsp;

: "/Library/TeX/texbin/upmpost" -interaction=nonstopmode &#x25;

Asymptote
: &nbsp;

: "/Library/TeX/texbin/asy" %.asy

ghostscript
: &nbsp;

: "/usr/local/bin/gs"

R Sweave
: &nbsp;

: R CMD Sweave %.Rnw

Add to PATH
: &nbsp;

PDF Viewer
: &nbsp;

: <span style="color:White;background-color:#0F7FFF;">🔘</span> Built-in Viewer

: ☑ Embed

: ◯ External Viewer

: "/Applications/Skim.app/Contents/SharedSupport/displayline" @ %.pdf #.tex

***

## Skim との連携 {#b05a1a86}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#jbc32d2d}

forward search は PDFビューアに

```
"/Applications/Skim.app/Contents/SharedSupport/displayline" @ %.pdf #.tex
```

です．

### inverse search {#q51f9015}

コマンド:
: /Applications/texmaker.app/Contents/MacOS/texmaker

引数:
: "%file" -line %line
