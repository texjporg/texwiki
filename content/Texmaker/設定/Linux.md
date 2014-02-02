---
title: "Texmaker/設定/Linux"
url: "/Texmaker/設定/Linux/"
date: 2012-07-13T16:54:29Z
pukiwiki: "Texmaker/設定/Linux"
---

# Texmaker/設定/Linux

[Texmaker](/Texmaker/) > [設定](</Texmaker/設定/>) > [Linux](/Linux/)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## 設定 {#t1b1a7e1}

### コマンド {#cab65285}

\[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\]

PDFビューアは，組み込みビューアと外部ビューアを選択するようになっているので好きな方を選択してください．<br>
組み込みビューアで和文フォントを埋め込んでいない PDF ファイルを表示したい場合は [代替フォントの設定](/Evince/#substitute) や [KDE-Okular や Texmaker で和文フォント非埋め込みPDFを表示させるには](http://blogs.yahoo.co.jp/igproj_fusion/16383026.html)を参照してください．<br>
コマンドの LaTeX に設定されている latex を uplatex に変更してコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの LuaLaTeX に設定されているコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの Bib(la)tex に設定されている bibtex を upbibtex に変更します．<br>
コマンドの Dvipdfm に設定されている dvipdfm を dvipdfmx に変更します．<br>

***

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>uplatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>pdflatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ 出力ファイルを "build" サブフォルダーに出力する</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">XeLaTeX　　</span><ins>xelatex -synctex=1 -interaction=nonstopmode %.tex</ins>　　　　　<span style="color:Black;background-color:#F5F5F5;">LuaLaTeX　　</span><ins>lualatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>luajitlatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>latexmk -gg -pdfdvi %.tex</ins><br>または <ins>latexmk -e "$pdflatex=q/pdflatex -synctex=1 -interaction=nonstopmode/" -norc -gg -pdf %.tex</ins><br>または <ins>latexmk -e "$pdflatex=q/lualatex -synctex=1 -interaction=nonstopmode/" -norc -gg -pdf %.tex</ins><br>または <ins>latexmk -e "$pdflatex=q/luajitlatex -synctex=1 -interaction=nonstopmode/" -norc -gg -pdf %.tex</ins><br>

　　　<strong>クイックビルド</strong>　　 または <ins>latexmk -e "$pdflatex=q/xelatex -synctex=1 -interaction=nonstopmode/" -norc -gg -pdf %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](</BibTeX関連ツール/>)　　 </span><ins>upbibtex &#x25;</ins> または <ins>bibtex &#x25;</ins> または <ins>bibtexu &#x25;</ins> または <ins>biber --bblencoding=utf8 -u -U --output_safechars &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>mendex %.idx</ins> または <ins>makeindex %.idx</ins> または <ins>texindy %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>dvips -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>dvipdfmx %.dvi</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>ps2pdf %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>upmpost -interaction=nonstopmode &#x25;</ins> または <ins>mpost -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>asy %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>gs</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　<strong>ショートカット</strong>　　　<span style="color:Black;background-color:#F5F5F5;">Add to PATH　　　　</span><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>DVI ビューア</strong></span><br>
<ins>/usr/bin/env ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.dvi"'+0x27.chr+' -x '+0x27.chr+'evince -i '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<ins>/usr/bin/env ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.dvi"'+0x27.chr+' -x '+0x27.chr+'okular --unique --page '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<ins>/usr/bin/env ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.dvi"'+0x27.chr+' -x '+0x27.chr+'xdvi -nofork -unique -watchfile 1 +'+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<ins>/usr/bin/env ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.dvi"'+0x27.chr+' -x '+0x27.chr+'pxdvi -nofork -unique -watchfile 1 +'+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PS ビューア</strong></span><br>
<ins>/usr/bin/env ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.ps"'+0x27.chr+' -x '+0x27.chr+'evince -i '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<ins>/usr/bin/env ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.ps"'+0x27.chr+' -x '+0x27.chr+'okular --unique --page '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;">(●)　組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>/usr/bin/env ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'evince -i '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<ins>fwdevince %.pdf @ #.tex</ins><br>

<ins>/usr/bin/env ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'okular --unique --page '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<ins>texmaker2okular %.pdf @ !/#.tex</ins><br>

<ins>/usr/bin/env ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'zathura -P '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<ins>texmaker2zathura %.pdf</ins><br>

<ins>texmaker2qpdfview %.pdf #.tex @</ins><br>

<ins>/usr/bin/env ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'texworks --position='+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<ins>mupdf %.pdf</ins><br>

<ins>firefox -new-window %.pdf</ins><br>

<ins>chromium --new-window %.pdf</ins><br>

<ins>acroread %.pdf</ins><br>

<ins>pdfopen -viewer ar9-tab %.pdf</ins><br>

<ins>xdg-open %.pdf</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

## [Evince](/Evince/) との連携 {#xd595a5d}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#dc58c25f}

Evince/fwdevince の fwdevince を使用します．<br>

forward search は PDFビューアに

```
fwdevince %.pdf @ #.tex
```

です．

## Okular との連携 {#e1d5124a}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

***

- texmaker2okular

***

```
#!/bin/sh
okular --unique "file:$1#src:$2 $3"
```

***

```
$ chmod +x texmaker2okular
$ sudo cp -p texmaker2okular /usr/local/bin
```

### forward search {#rb0da469}

forward search は PDFビューアに

```
texmaker2okular %.pdf @ !/#.tex
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

### inverse search {#s8c6284b}

***

- texmaker2zathura

***

```
#!/bin/sh
zathura -s -x "texmaker "%{input}" -line %{line}" "$1"
```

***

```
$ chmod +x texmaker2zathura
$ sudo cp -p texmaker2zathura /usr/local/bin
```

PDFビューアに

```
texmaker2zathura %.pdf
```

を設定します．

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## qpdfview との連携 {#t3c4682d}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#dca2869a}

***

- texmaker2qpdfview

***

```
#!/bin/sh
qpdfview --unique "$1#src:$2:$3:0"
```

***

```
$ chmod +x texmaker2qpdfview
$ sudo cp -p texmaker2qpdfview /usr/local/bin
```

forward search は PDFビューアに

```
texmaker2qpdfview %.pdf #.tex @
```

です．

### inverse search {#pac65f46}

\[Edit\]-\[Settings...\]-\[Behaviour\]

Source editor:
: texmaker "%1" -line %2

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．
