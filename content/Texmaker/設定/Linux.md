---
title: "Texmaker/設定/Linux"
url: "/Texmaker/設定/Linux/"
date: 2012-07-13T16:54:29Z
pukiwiki: "Texmaker/設定/Linux"
---

# Texmaker/設定/Linux

[Texmaker](/Texmaker/) > [設定](</Texmaker/設定/>) > [Linux](/Linux/)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## 設定 {#t1b1a7e1}

### コマンド {#cab65285}

\[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\]

PDFビューアは，組み込みビューアと外部ビューアを選択するようになっているので好きな方を選択してください．<br>
組み込みビューアで和文フォントを埋め込んでいない PDF ファイルを表示したい場合は [代替フォントの設定](/Evince/#substitute) や [KDE-Okular や Texmaker で和文フォント非埋め込みPDFを表示させるには](http://blogs.yahoo.co.jp/igproj_fusion/16383026.html)を参照してください．<br>
コマンドの LaTeX に設定されている latex を uplatex に変更してコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの LuaLaTeX に設定されているコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの Bib(la)tex に設定されている bibtex を biber --bblencoding=utf8 -u -U --output_safechars または upbibtex に変更します．<br>
コマンドの Dvipdfm に設定されている dvipdfm を dvipdfmx に変更します．<br>

***

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<br>

<br>

<br>

<br>

　　　<strong>クイックビルド</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<br>

<br>

<br>

<br>

　　　　　<strong>エディタ</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<br>

<br>

<br>

<br>

　　　<strong>ショートカット</strong><br>

***

コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)
: &nbsp;

LaTeX
: &nbsp;

: uplatex -synctex=1 -interaction=nonstopmode %.tex

PdfLaTeX
: &nbsp;

: pdflatex -synctex=1 -interaction=nonstopmode %.tex

: ☐ 出力ファイルを "build" サブフォルダーに出力する

XeLaTeX
: &nbsp;

: xelatex -synctex=1 -interaction=nonstopmode %.tex

LuaLaTeX
: &nbsp;

: lualatex -synctex=1 -interaction=nonstopmode %.tex

: luajitlatex -synctex=1 -interaction=nonstopmode %.tex

Latexmk
: &nbsp;

: ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/mendex '+0x25.chr+'O'+' -U -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"

Bib(la)tex
: &nbsp;

: biber --bblencoding=utf8 -u -U --output_safechars &#x25;

: upbibtex &#x25;

Makeindex
: &nbsp;

: mendex -U %.idx

dvips
: &nbsp;

: dvips -Ppdf -o %.ps %.dvi

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

PDF ビューア
: &nbsp;

: (●)　組み込みビューア

: ☑　埋め込み

: ◯　外部ビューア

: ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'evince -i '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"

: fwdevince %.pdf @ #.tex

: ruby -e "cmd='okular --unique '+0x22.chr+'file:'+'"%.pdf"'+0x23.chr+'src:'+'"@"'+' '+'"!/#.tex"'+0x22.chr;system(cmd)"

: ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'zathura -P '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"

: ruby -e "cmd='zathura -s -x '+0x22.chr+'texmaker '+0x22.chr++0x25.chr+'{input}'+0x22.chr+' -line '+0x25.chr+'{line}'+0x22.chr+' '+0x22.chr+'"%.pdf"'+0x22.chr;system(cmd)"

: ruby -e "cmd='qpdfview --unique '+0x22.chr+'"%.pdf"'+0x23.chr+'src:'+'"#.tex"'+':'+'"@"'+':0'+0x22.chr;system(cmd)"

: ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'texworks --position='+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"

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

### inverse search {#zb2ae21e}

Evince/fwdevince の invevince を使用します．<br>

ユーザーコマンドに invevince を作成して以下のようにコマンドを設定します．<br>

```
ruby -e "cmd='invevince'+' '+0x22.chr+'"%.pdf"'+0x22.chr+' '+0x22.chr+'texmaker '+0x27.chr++0x25.chr+'f'+0x27.chr+' -line '+0x25.chr+'l'+0x22.chr;system(cmd)"
```

PDFビューアに evince を設定して evince で PDF ファイルを表示してユーザーコマンドを実行します．<br>
Ctrl + 左クリックで inverse search ができます．<br>
ユーザーコマンドを実行するタイミングは evince で PDF ファイルを表示する前でも後でもどちらでも OK です．<br>
Texmaker の動作がおかしくなる場合は使用を中止してください．<br>

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

### forward search {#za381a9a}

ユーザーコマンドに fwdzathura を作成して以下のようにコマンドを設定します．<br>

```
ruby -e "cmd='zathura --synctex-forward '+0x22.chr+'"@"'+':0:'+'"#.tex"'+0x22.chr+' '+0x22.chr+'"%.pdf"'+0x22.chr;system(cmd)"
```

PDFビューアに zathura を設定して zathura で PDF ファイルを表示したあとでユーザーコマンドを実行します．

### inverse search {#s8c6284b}

PDFビューアに

```
ruby -e "cmd='zathura -s -x '+0x22.chr+'texmaker '+0x22.chr++0x25.chr+'{input}'+0x22.chr+' -line '+0x25.chr+'{line}'+0x22.chr+' '+0x22.chr+'"%.pdf"'+0x22.chr;system(cmd)"
```

を設定します．

クイックビルドの DVI/PS/PDF ファイルがすでに開いている場合は新たにビューアを起動しないを ON にします．<br>

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
