---
title: "Texmaker/設定/Windows"
url: "/Texmaker/設定/Windows/"
date: 2012-07-13T16:49:15Z
pukiwiki: "Texmaker/設定/Windows"
---

# Texmaker/設定/Windows

[Texmaker](/Texmaker/) > [設定](</Texmaker/設定/>) > [Windows](</Microsoft Windows/>)

***

***

## 設定 {#ha179b3b}

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

: ruby -e "cmd='latexmk -e '+0x22.chr+'$lualatex=q/lualatex '+0x25.chr+'O'+' -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/bibtexu '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/upmendex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdflua '+'%.tex';system(cmd)"

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

: ps2pdf.exe %.ps

metapost
: &nbsp;

: upmpost -interaction=nonstopmode &#x25;

Asymptote
: &nbsp;

: asy %.asy

ghostscript
: &nbsp;

: rungs.exe

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

: powershell -Command "&amp; {$line=\[char\]0x22+@+\[char\]0x22;$tex=\[char\]0x22+'#.tex'+\[char\]0x22;$pdf=\[char\]0x22+'%.pdf'+\[char\]0x22;$texmaker='C:\Program Files\Texmaker\texmaker.exe';$f=\[char\]0x25+'f';$l=\[char\]0x25+'l';$inverse_search=\[char\]0x22+\[char\]0x5c+\[char\]0x22+$texmaker+\[char\]0x5c+\[char\]0x22+' '+\[char\]0x5c+\[char\]0x22+$f+\[char\]0x5c+\[char\]0x22+' -line '+$l+\[char\]0x22;$sumatrapdf=\[char\]0x22+'C:\Program Files\SumatraPDF\SumatraPDF.exe'+\[char\]0x22;Start-Process $sumatrapdf -ArgumentList ('-reuse-instance','-inverse-search',$inverse_search,$pdf,'-forward-search',$tex,$line)}"

: "C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @

: powershell -Command "&amp; {$param=\[char\]0x22+'@:0:#.tex'+\[char\]0x22; $pdf=\[char\]0x22+'%.pdf'+\[char\]0x22; $page=\[char\]0x25+'{page+1}'; $o=\[char\]0x27+\[char\]0x25+'{output}'+\[char\]0x27; synctex view -i $param -o $pdf -x """texworks --position=$page $o"""}"

<!-- :|texworks %.pdf -->
<!-- :|cmd /c start firefox -new-window %.pdf -->
<!-- :|cmd /c start chrome - -new-window !/%.pdf -->
<!-- :|pdfopen - -file %.pdf -->

***

## [SumatraPDF](/SumatraPDF/) との連携 {#f10825ae}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward and inverse search {#xf457e6c}

#### SumatraPDF を前面に表示したい場合 {#r4dc6964}

forward and inverse search は PDFビューアの外部ビューアに以下のように設定します．<br>

```
powershell -Command "& {$line=[char]0x22+@+[char]0x22;$tex=[char]0x22+'#.tex'+[char]0x22;$pdf=[char]0x22+'%.pdf'+[char]0x22;$texmaker='C:\Program Files\Texmaker\texmaker.exe';$f=[char]0x25+'f';$l=[char]0x25+'l';$inverse_search=[char]0x22+[char]0x5c+[char]0x22+$texmaker+[char]0x5c+[char]0x22+' '+[char]0x5c+[char]0x22+$f+[char]0x5c+[char]0x22+' -line '+$l+[char]0x22;$sumatrapdf=[char]0x22+'C:\Program Files\SumatraPDF\SumatraPDF.exe'+[char]0x22;Start-Process $sumatrapdf -ArgumentList ('-reuse-instance','-inverse-search',$inverse_search,$pdf,'-forward-search',$tex,$line)}"
```

### forward search {#y08c577b}

#### SumatraPDF を前面に表示したい場合 {#id9fc839}

forward search は PDFビューアの外部ビューアに以下のように設定します．<br>

```
"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @
```

#### SumatraPDF を前面に表示したくない場合 {#j0fbd66f}

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

forward search は PDFビューアの外部ビューアに以下のように設定します．<br>

```
fwdsumatrapdf.exe %.pdf #.tex @
```

### inverse search {#p850b553}

inverse search は SumatraPDF の \[☰\]-\[設定(S)\]-\[オプション(O)...\] の逆順検索コマンドラインの設定に以下のように設定します．<br>

```
"C:\Program Files\Texmaker\texmaker.exe" "%f" -line %l
```

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## [TeXworks](/TeXworks/) との連携 {#o9f4b99c}

### forward search {#a41fe59c}

forward search は PDFビューアの外部ビューアに以下のように設定します．<br>

```
powershell -Command "& {$param=[char]0x22+'@:0:#.tex'+[char]0x22; $pdf=[char]0x22+'%.pdf'+[char]0x22; $page=[char]0x25+'{page+1}'; $o=[char]0x27+[char]0x25+'{output}'+[char]0x27; synctex view -i $param -o $pdf -x """texworks --position=$page $o"""}"
```

## Adobe Acrobat Reader との連携 {#u27e1718}

### forward search {#l5bfe340}

#### pdfupLaTeXA {#v915ab85}

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

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdfuplatexA-nonstopmode.bat % #.tex @
```

を入力します．

#### LuaLaTeXA {#b2053ddc}

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

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
lualatexA-nonstopmode.bat % #.tex @
```

を入力します．
