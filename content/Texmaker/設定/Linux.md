---
title: "Texmaker/設定/Linux"
url: "/Texmaker/設定/Linux/"
date: 2012-07-13T16:54:29Z
pukiwiki: "Texmaker/設定/Linux"
---

# Texmaker/設定/Linux

[Texmaker](/Texmaker/) > [設定](</Texmaker/設定/>) > [Linux](/Linux/)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### コマンド {#cab65285}

\[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\]

TeX Live の場合の設定を書きます．<br>
PDFビューアは，組み込みビューアと外部ビューアを選択するようになっているので好きな方を選択してください．<br>
コマンドの LaTeX の latex を platex または uplatex に変更します．<br>
コマンドの Dvipdfm の dvipdfm を dvipdfmx に変更します．<br>
[LuaLaTeX](/LuaTeX/) を使用したい場合は，コマンドの PdfLaTeX の pdflatex を lualatex に変更して使用してください．<br>

#### [TeX Live](</TeX Live/>) {#x932c6ec}

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>platex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>uplatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>pdflatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>lualatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ 出力ファイルを "build" サブフォルダーに出力する</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">XeLaTeX　　</span><ins>xelatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>latexmk -gg -pdfdvi %.tex</ins><br>または <ins>latexmk -gg -pdfps %.tex</ins><br>または <ins>latexmk -e "$pdflatex=q/pdflatex -synctex=1 -interaction=nonstopmode/" -norc -gg -pdf %.tex</ins><br>または <ins>latexmk -e "$pdflatex=q/lualatex -synctex=1 -interaction=nonstopmode/" -norc -gg -pdf %.tex</ins><br>

　　　<strong>クイックビルド</strong>　　 または <ins>latexmk -e "$pdflatex=q/xelatex -synctex=1 -interaction=nonstopmode/" -norc -gg -xelatex %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](</BibTeX関連ツール/>)　　 </span><ins>pbibtex &#x25;</ins> または <ins>upbibtex &#x25;</ins> または <ins>biber &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>mendex %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>dvips -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>dvipdfmx -f ptex-ipaex.map %.dvi</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>ps2pdf %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>pmpost -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>asy %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>gs</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　<strong>ショートカット</strong>　　　<span style="color:Black;background-color:#F5F5F5;">Add to PATH　　　　</span><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>DVI ビューア</strong></span><br>
<ins>pxdvi -watchfile 1 %.dvi</ins> または <ins>advi -watch-file 1 %.dvi</ins> または <ins>evince %.dvi</ins> または <ins>okular --unique %.dvi</ins> または <ins>emacs %.dvi</ins> または <ins>xdg-open %.dvi</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PS ビューア</strong></span><br>
<ins>gv --watch %.ps</ins> または <ins>evince %.ps</ins> または <ins>okular --unique %.ps</ins> または <ins>zathura %.ps</ins> または <ins>emacs %.ps</ins> または <ins>xdg-open %.ps</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;"><span style="color:#3333CC;">◎</span>　組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>texworks %.pdf</ins> または <ins>evince %.pdf</ins> または <ins>fwdevince %.pdf @ #.tex</ins> または <ins>okular --unique %.pdf</ins> または <ins>texmaker2o_k_u_l_a_r %.pdf @ !/#.tex</ins> または <ins>zathura %.pdf</ins> または <ins>texmaker2zathura %.pdf</ins> または <ins>qpdfview --unique %.pdf</ins> または <ins>texmaker2qpdfview %.pdf #.tex @</ins> または <ins>pdfviewer %.pdf</ins> または <ins>texmaker2pdfviewer %.pdf @ #.tex</ins> または <ins>gv --watch %.pdf</ins> または <ins>emacs %.pdf</ins> または <ins>acroread %.pdf</ins> または <ins>pdfopen -viewer ar9-tab %.pdf</ins> または <ins>xdg-open %.pdf</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

## [Evince](/Evince/) との連携 {#xd595a5d}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#dc58c25f}

[Evince#fwdevince](/Evince/#ie18c015) の fwdevince を使用します．<br>

forward search は PDFビューアに

```
fwdevince %.pdf @ #.tex
```

です．

## Okular との連携 {#e1d5124a}

■ PDF の場合

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンドのオプションに -synctex=1 を追加します．

■ DVI の場合 (非推奨)

LaTeX コマンドのオプションに -src-specials を追加します．

***

- texmaker2o_k_u_l_a_r

***

```
#!/bin/sh
okular --unique "file:$1#src:$2 $3"
```

***

```
$ chmod +x texmaker2o_k_u_l_a_r
$ sudo cp -p texmaker2o_k_u_l_a_r /usr/local/bin
```

### forward search {#rb0da469}

■ PDF の場合

forward search は PDFビューアに

```
texmaker2o_k_u_l_a_r %.pdf @ !/#.tex
```

です．

■ DVI の場合 (非推奨)

forward search は DVIビューアに

```
texmaker2o_k_u_l_a_r %.pdf @ #.tex
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

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンドのオプションに -synctex=1 を追加します．

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

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンドのオプションに -synctex=1 を追加します．

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

## PdfViewer との連携 {#d2a108e6}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#t982a3a5}

***

- texmaker2pdfviewer

***

```
#!/bin/sh
pdfviewer "file:$1#src:$2 $3"
```

***

```
$ chmod +x texmaker2pdfviewer
$ sudo cp -p texmaker2pdfviewer /usr/local/bin
```

forward search は PDFビューアに

```
texmaker2pdfviewer %.pdf @ #.tex
```

です．

### inverse search {#xc8511ae}

\[Tools\]-\[Settings\]-\[Configure PdfViewer...\]

Editor:
: texmaker "%f" -line %l

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## pxdvi との連携 (非推奨) {#v8bf4b70}

LaTeX コマンドのオプションに -src-specials を追加します．

### forward and inverse search {#gd5c34f7}

forward and inverse search は DVIビューアに

```
pxdvi -nofork -watchfile 1 -editor "texmaker %f -line" %.dvi -sourceposition "@ #.tex"
```

です．

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．
