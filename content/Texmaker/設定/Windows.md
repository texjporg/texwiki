---
title: "Texmaker/設定/Windows"
url: "/Texmaker/設定/Windows/"
date: 2012-07-13T16:49:15Z
pukiwiki: "Texmaker/設定/Windows"
---

# Texmaker/設定/Windows

[Texmaker](/Texmaker/) > [設定](</Texmaker/設定/>) > [Windows](</Microsoft Windows/>)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## 設定 {#ha179b3b}

### コマンド {#cab65285}

\[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\]

PDF ビューアは，組み込みビューアと外部ビューアを選択するようになっているので好きな方を選択してください．<br>
PDF ビューアに 組み込みビューア，SumatraPDF，TeXworks を使用する場合は，LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．<br>
コマンドの LaTeX に設定されている latex を uplatex に変更します．<br>
コマンドの Bib(la)tex に設定されている bibtex を upbibtex に変更します．<br>
コマンドの Dvipdfm に設定されている dvipdfm を dvipdfmx に変更します．<br>

#### [TeX Live](</TeX Live/>) の場合 {#cd578b1e}

Texmaker のデフォルトの文字コードは UTF-8 です．<br>
コンパイルエラーが発生する場合は[サクラエディタ](</サクラエディタ/>)で文字コードを UTF-8，改行コードを CR+LF にして保存するとコンパイルが通るそうです． → [やっと見つけたTeXエディタ](http://yaplog.jp/stdwave/archive/215)

***

<span style="color:#9BC527;background-color:#9BC527;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#9BC527;background-color:#9BC527;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>uplatex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>pdflatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ 出力ファイルを "build" サブフォルダーに出力する</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">XeLaTeX　　</span><ins>xelatex -synctex=1 -interaction=nonstopmode %.tex</ins>　　　　　<span style="color:Black;background-color:#F5F5F5;">LuaLaTeX　　</span><ins>lualatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>luajitlatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>powershell -Command "&amp; {$s = """%.tex"""; $latex = \[char\]0x24+'latex'; $bibtex = \[char\]0x24+'bibtex'; $makeindex = \[char\]0x24+'makeindex'; $dvipdf = \[char\]0x24+'dvipdf'; $opt = \[char\]0x25+'O'; $base = \[char\]0x25+'B'; $dst = \[char\]0x25+'D'; $src = \[char\]0x25+'S'; latexmk -e """$latex=q/uplatex $opt -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode $src/""" -e """$bibtex=q/upbibtex $opt $base/""" -e """$makeindex=q/mendex $opt -U -o $dst $src/""" -e """$dvipdf=q/dvipdfmx $opt -o $dst $src/""" -norc -gg -pdfdvi $s}"</ins><br>または <ins>powershell -Command "&amp; {$s = """%.tex"""; $pdflatex = \[char\]0x24+'pdflatex'; $bibtex = \[char\]0x24+'bibtex'; $makeindex = \[char\]0x24+'makeindex'; $opt = \[char\]0x25+'O'; $base = \[char\]0x25+'B'; $dst = \[char\]0x25+'D'; $src = \[char\]0x25+'S'; latexmk -e """$pdflatex=q/pdflatex $opt -synctex=1 -interaction=nonstopmode $src/""" -e """$bibtex=q/bibtex $opt $base/""" -e """$makeindex=q/makeindex $opt -o $dst $src/""" -norc -gg -pdf $s}"</ins><br>または <ins>powershell -Command "&amp; {$s = """%.tex"""; $pdflatex = \[char\]0x24+'pdflatex'; $bibtex = \[char\]0x24+'bibtex'; $makeindex = \[char\]0x24+'makeindex'; $opt = \[char\]0x25+'O'; $base = \[char\]0x25+'B'; $dst = \[char\]0x25+'D'; $src = \[char\]0x25+'S'; latexmk -e """$pdflatex=q/lualatex $opt -synctex=1 -interaction=nonstopmode $src/""" -e """$bibtex=q/bibtexu $opt $base/""" -e """$makeindex=q/texindy $opt -o $dst $src/""" -norc -gg -lualatex $s}"</ins><br>または <ins>powershell -Command "&amp; {$s = """%.tex"""; $pdflatex = \[char\]0x24+'pdflatex'; $bibtex = \[char\]0x24+'bibtex'; $makeindex = \[char\]0x24+'makeindex'; $opt = \[char\]0x25+'O'; $base = \[char\]0x25+'B'; $dst = \[char\]0x25+'D'; $src = \[char\]0x25+'S'; latexmk -e """$pdflatex=q/luajitlatex $opt -synctex=1 -interaction=nonstopmode $src/""" -e """$bibtex=q/bibtexu $opt $base/""" -e """$makeindex=q/texindy $opt -o $dst $src/""" -norc -gg -lualatex $s}"</ins><br>または <ins>powershell -Command "&amp; {$s = """%.tex"""; $pdflatex = \[char\]0x24+'pdflatex'; $bibtex = \[char\]0x24+'bibtex'; $makeindex = \[char\]0x24+'makeindex'; $opt = \[char\]0x25+'O'; $base = \[char\]0x25+'B'; $dst = \[char\]0x25+'D'; $src = \[char\]0x25+'S'; latexmk -e """$pdflatex=q/xelatex $opt -synctex=1 -interaction=nonstopmode $src/""" -e """$bibtex=q/bibtexu $opt $base/""" -e """$makeindex=q/texindy $opt -o $dst $src/""" -norc -gg -xelatex $s}"</ins><br>

　　　<strong>クイックビルド</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](</BibTeX関連ツール/>)　　 </span><ins>upbibtex &#x25;</ins> または <ins>bibtex &#x25;</ins> または <ins>bibtexu &#x25;</ins> または <ins>biber &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>mendex -U %.idx</ins> または <ins>makeindex %.idx</ins> または <ins>texindy %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>dvips -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>dvipdfmx %.dvi</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>ps2pdf.bat %.ps</ins> または <ins>ps2pdf.exe %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>upmpost -interaction=nonstopmode &#x25;</ins> または <ins>mpost -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>asy %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>gswin64c.exe</ins> または <ins>gswin32c.exe</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　<strong>ショートカット</strong>　　　<span style="color:Black;background-color:#F5F5F5;">Add to PATH　　　　</span><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;">(●) 組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>cmd /c start SumatraPDF -reuse-instance %.pdf -forward-search #.tex @</ins> または <ins>texworks %.pdf</ins> または <ins>cmd /c start firefox -new-window %.pdf</ins> または <ins>cmd /c start chrome --new-window !/%.pdf</ins> または <ins>pdfopen --rxi --file %.pdf</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

#### [W32TeX](/W32TeX/) の場合 {#q9c95374}

Texmaker のデフォルトの文字コードは UTF-8 です．<br>
コンパイルエラーが発生する場合は[サクラエディタ](</サクラエディタ/>)で文字コードを UTF-8，改行コードを CR+LF にして保存するとコンパイルが通るそうです． → [やっと見つけたTeXエディタ](http://yaplog.jp/stdwave/archive/215)<br>
W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>

***

<span style="color:#9BC527;background-color:#9BC527;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#9BC527;background-color:#9BC527;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>uplatex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>pdflatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ 出力ファイルを "build" サブフォルダーに出力する</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">XeLaTeX　　</span><ins>xelatex -synctex=1 -interaction=nonstopmode %.tex</ins>　　　　　<span style="color:Black;background-color:#F5F5F5;">LuaLaTeX　　</span><ins>lualatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>luajitlatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>powershell -Command "&amp; {$s = """%.tex"""; $latex = \[char\]0x24+'latex'; $bibtex = \[char\]0x24+'bibtex'; $makeindex = \[char\]0x24+'makeindex'; $dvipdf = \[char\]0x24+'dvipdf'; $opt = \[char\]0x25+'O'; $base = \[char\]0x25+'B'; $dst = \[char\]0x25+'D'; $src = \[char\]0x25+'S'; latexmk -e """$latex=q/uplatex $opt -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode $src/""" -e """$bibtex=q/upbibtex $opt $base/""" -e """$makeindex=q/mendex $opt -U -o $dst $src/""" -e """$dvipdf=q/dvipdfmx $opt -o $dst $src/""" -norc -gg -pdfdvi $s}"</ins><br>または <ins>powershell -Command "&amp; {$s = """%.tex"""; $pdflatex = \[char\]0x24+'pdflatex'; $bibtex = \[char\]0x24+'bibtex'; $makeindex = \[char\]0x24+'makeindex'; $opt = \[char\]0x25+'O'; $base = \[char\]0x25+'B'; $dst = \[char\]0x25+'D'; $src = \[char\]0x25+'S'; latexmk -e """$pdflatex=q/pdflatex $opt -synctex=1 -interaction=nonstopmode $src/""" -e """$bibtex=q/bibtex $opt $base/""" -e """$makeindex=q/makeindex $opt -o $dst $src/""" -norc -gg -pdf $s}"</ins><br>または <ins>powershell -Command "&amp; {$s = """%.tex"""; $pdflatex = \[char\]0x24+'pdflatex'; $bibtex = \[char\]0x24+'bibtex'; $makeindex = \[char\]0x24+'makeindex'; $opt = \[char\]0x25+'O'; $base = \[char\]0x25+'B'; $dst = \[char\]0x25+'D'; $src = \[char\]0x25+'S'; latexmk -e """$pdflatex=q/lualatex $opt -synctex=1 -interaction=nonstopmode $src/""" -e """$bibtex=q/bibtexu $opt $base/""" -e """$makeindex=q/texindy $opt -o $dst $src/""" -norc -gg -lualatex $s}"</ins><br>または <ins>powershell -Command "&amp; {$s = """%.tex"""; $pdflatex = \[char\]0x24+'pdflatex'; $bibtex = \[char\]0x24+'bibtex'; $makeindex = \[char\]0x24+'makeindex'; $opt = \[char\]0x25+'O'; $base = \[char\]0x25+'B'; $dst = \[char\]0x25+'D'; $src = \[char\]0x25+'S'; latexmk -e """$pdflatex=q/luajitlatex $opt -synctex=1 -interaction=nonstopmode $src/""" -e """$bibtex=q/bibtexu $opt $base/""" -e """$makeindex=q/texindy $opt -o $dst $src/""" -norc -gg -lualatex $s}"</ins><br>または <ins>powershell -Command "&amp; {$s = """%.tex"""; $pdflatex = \[char\]0x24+'pdflatex'; $bibtex = \[char\]0x24+'bibtex'; $makeindex = \[char\]0x24+'makeindex'; $opt = \[char\]0x25+'O'; $base = \[char\]0x25+'B'; $dst = \[char\]0x25+'D'; $src = \[char\]0x25+'S'; latexmk -e """$pdflatex=q/xelatex $opt -synctex=1 -interaction=nonstopmode $src/""" -e """$bibtex=q/bibtexu $opt $base/""" -e """$makeindex=q/texindy $opt -o $dst $src/""" -norc -gg -xelatex $s}"</ins><br>

　　　<strong>クイックビルド</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](</BibTeX関連ツール/>)　　 </span><ins>upbibtex &#x25;</ins> または <ins>bibtex &#x25;</ins> または <ins>bibtexu &#x25;</ins> または <ins>biber &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>mendex -U %.idx</ins> または <ins>makeindex %.idx</ins> または <ins>texindy %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>dvips -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>dvipdfmx -f dlbase14.map %.dvi</ins> または <ins>dvipdfmx %.dvi</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>ps2pdf.bat %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>upmpost -interaction=nonstopmode &#x25;</ins> または <ins>mpost -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>asy %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>gswin64c.exe</ins> または <ins>gswin32c.exe</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　<strong>ショートカット</strong>　　　<span style="color:Black;background-color:#F5F5F5;">Add to PATH　　　　</span><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;">(●) 組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>cmd /c start SumatraPDF -reuse-instance %.pdf -forward-search #.tex @</ins> または <ins>texworks %.pdf</ins> または <ins>cmd /c start firefox -new-window %.pdf</ins> または <ins>cmd /c start chrome --new-window !/%.pdf</ins> または <ins>pdfopen --rxi --file %.pdf</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

## [SumatraPDF](/SumatraPDF/) との連携 {#f10825ae}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#y08c577b}

#### SumatraPDF を前面に表示したい場合 {#id9fc839}

forward search は PDFビューアに

```
cmd /c start SumatraPDF -reuse-instance %.pdf -forward-search #.tex @
```

です．

#### SumatraPDF を前面に表示したくない場合 {#j0fbd66f}

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

forward search は PDFビューアに

```
fwdsumatrapdf.exe %.pdf #.tex @
```

です．

### inverse search {#p850b553}

inverse search は SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に以下のように設定します．<br>

■ 64-bit Windows の場合

```
"C:\Program Files (x86)\Texmaker\texmaker.exe" "%f" -line %l
```

■ 32-bit Windows の場合

```
"C:\Program Files\Texmaker\texmaker.exe" "%f" -line %l
```

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## [Adobe Reader](</Adobe Reader/>) との連携 {#u27e1718}

### pdfupLaTeXA {#v915ab85}

pdfuplatexA-nonstopmode.bat を作成します．

***

- pdfuplatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
uplatex -kanji=utf8 -no-guess-input-enc -interaction=nonstopmode %1 && ^
dvipdfmx "%~n1" && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdfuplatexA-nonstopmode.bat %
```

を入力します．

### pdfupLaTeX2A {#pf77769a}

pdfuplatex2A-nonstopmode.bat を作成します．

***

- pdfuplatex2A-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
uplatex -kanji=utf8 -no-guess-input-enc -interaction=nonstopmode %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdfuplatex2A-nonstopmode.bat %
```

を入力します．

### pdfLaTeXA {#j7c9b397}

pdflatexA-nonstopmode.bat を作成します．

***

- pdflatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
pdflatex -interaction=nonstopmode %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdflatexA-nonstopmode.bat %
```

を入力します．

### LuaLaTeXA {#b2053ddc}

lualatexA-nonstopmode.bat を作成します．

***

- lualatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
lualatex -interaction=nonstopmode %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
lualatexA-nonstopmode.bat %
```

を入力します．

### LuaJITLaTeXA {#z4aadf43}

luajitlatexA-nonstopmode.bat を作成します．

***

- luajitlatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
luajitlatex -interaction=nonstopmode %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
luajitlatexA-nonstopmode.bat %
```

を入力します．

### XeLaTeXA {#md09c195}

xelatexA-nonstopmode.bat を作成します．

***

- xelatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
xelatex -interaction=nonstopmode %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
xelatexA-nonstopmode.bat %
```

を入力します．
