---
title: "Texmaker/設定/Windows"
url: "/Texmaker/設定/Windows/"
date: 2012-07-13T16:49:15Z
pukiwiki: "Texmaker/設定/Windows"
---

# Texmaker/設定/Windows

[Texmaker](/Texmaker/) > [設定](</Texmaker/設定/>) > Windows

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### コマンド {#cab65285}

\[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\]

W32TeX と TeX Live の場合の設定を書きます．<br>
他の TeX ディストリビューションを使用される方は，ご自分の環境に合わせて設定してください．<br>
PDFビューアは，組み込みビューアと外部ビューアを選択するようになっているので好きな方を選択してください．<br>
PDFビューアに Adobe Reader ではなく，組み込みビューア，TeXworks，SumatraPDF を使用する場合は，LaTeX コマンド, PdfLaTeX コマンドのオプションに -synctex=1 を追加します．<br>
PDFビューアに TeXworks を使用する場合は [TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．<br>
[LuaTeX](/LuaTeX/) を使用したい場合は，コマンドの PdfLaTeX の pdflatex を lualatex に変更して使用してください．<br>
[XeTeX](/XeTeX/) を使用したい場合は，コマンドの PdfLaTeX の pdflatex を xelatex に変更して使用してください．<br>

#### [W32TeX](/W32TeX/) (自動判別の場合) {#cd578b1e}

W32TeX はデフォルトでは [ptexenc](</TeX Live/#r2b98f9b>) を用いて自動判別します．

***

<span style="color:Black;background-color:#9BC527;"><ins>　　<span style="color:White;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#8BB517;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>platex -guess-input-enc -synctex=1 -interaction=nonstopmode -jobname=% %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>pdflatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>lualatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>xelatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ Use a "build" subdirectory for output files</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>latexmk -e """$pdflatex=q/pdflatex"" ""-synctex=1"" ""-interaction=nonstopmode/""" -norc -gg -pdf %.tex</ins> または <ins>latexmk -e """$pdflatex=q/lualatex"" ""-synctex=1"" ""-interaction=nonstopmode/""" -norc -gg -pdf %.tex</ins> または <ins>latexmk -e """$pdflatex=q/xelatex"" ""-synctex=1"" ""-interaction=nonstopmode/""" -norc -gg -xelatex %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](</BibTeX関連ツール/>)　　 </span><ins>pbibtex &#x25;</ins> または <ins>biber &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>mendex %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>dvips -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>dvipdfmx -f dlbase14.map %.dvi</ins><br>

　　　<strong>クイックビルド</strong>　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>ps2pdf.bat %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>pmpost -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>asy %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>gswin32c.exe</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　　　<strong>エディタ</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<br>

<br>

<br>

<br>

　　　<strong>ショートカット</strong><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>DVI ビューア</strong></span><br>
<ins>"C:/w32tex/dviout/dviout.exe" -1 %.dvi</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PS ビューア</strong></span><br>
<ins>"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance %.ps</ins> または <ins>"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance %.ps</ins> または <ins>"C:/Program Files/Ghostgum/gsview/gsview32.exe" -e %.ps</ins> または <ins>"C:/Program Files (x86)/Ghostgum/gsview/gsview32.exe" -e %.ps</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;"><span style="color:#3333CC;">◎</span>　組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>"C:/w32tex/share/texworks/TeXworks.exe" %.pdf</ins> または <ins>"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @</ins> または <ins>"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @</ins> または <ins>"C:/Program Files/Adobe/Reader 10.0/Reader/AcroRd32.exe" %.pdf</ins> または <ins>"C:/Program Files (x86)/Adobe/Reader 10.0/Reader/AcroRd32.exe" %.pdf</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

#### [W32TeX](/W32TeX/) (UTF-8 の場合) {#q9c95374}

Texmaker のデフォルトの文字コードは UTF-8 です．<br>
OS X, Linux など Windows 以外の OS でファイルを編集したり [TeXworks](/TeXworks/) とファイルを共有したりする場合は UTF-8 がおすすめです．<br>

■ e-pTeX, pBibTeX, pMetaPost の場合

***

<span style="color:Black;background-color:#9BC527;"><ins>　　<span style="color:White;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#8BB517;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>platex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode -jobname=% %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>pdflatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>lualatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>xelatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ Use a "build" subdirectory for output files</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>latexmk -e """$pdflatex=q/pdflatex"" ""-synctex=1"" ""-interaction=nonstopmode/""" -norc -gg -pdf %.tex</ins> または <ins>latexmk -e """$pdflatex=q/lualatex"" ""-synctex=1"" ""-interaction=nonstopmode/""" -norc -gg -pdf %.tex</ins> または <ins>latexmk -e """$pdflatex=q/xelatex"" ""-synctex=1"" ""-interaction=nonstopmode/""" -norc -gg -xelatex %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](</BibTeX関連ツール/>)　　 </span><ins>pbibtex -kanji=utf8 &#x25;</ins> または <ins>biber &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>mendex -U %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>dvips -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>dvipdfmx -f dlbase14.map %.dvi</ins><br>

　　　<strong>クイックビルド</strong>　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>ps2pdf.bat %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>pmpost -kanji=utf8 -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>asy %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>gswin32c.exe</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　　　<strong>エディタ</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<br>

<br>

<br>

<br>

　　　<strong>ショートカット</strong><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>DVI ビューア</strong></span><br>
<ins>"C:/w32tex/dviout/dviout.exe" -1 %.dvi</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PS ビューア</strong></span><br>
<ins>"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance %.ps</ins> または <ins>"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance %.ps</ins> または <ins>"C:/Program Files/Ghostgum/gsview/gsview32.exe" -e %.ps</ins> または <ins>"C:/Program Files (x86)/Ghostgum/gsview/gsview32.exe" -e %.ps</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;"><span style="color:#3333CC;">◎</span>　組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>"C:/w32tex/share/texworks/TeXworks.exe" %.pdf</ins> または <ins>"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @</ins> または <ins>"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @</ins> または <ins>"C:/Program Files/Adobe/Reader 10.0/Reader/AcroRd32.exe" %.pdf</ins> または <ins>"C:/Program Files (x86)/Adobe/Reader 10.0/Reader/AcroRd32.exe" %.pdf</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

■ e-upTeX, upBibTeX, upMetaPost の場合

***

<span style="color:Black;background-color:#9BC527;"><ins>　　<span style="color:White;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#8BB517;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>uplatex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>pdflatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>lualatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>xelatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ Use a "build" subdirectory for output files</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>latexmk -e """$pdflatex=q/pdflatex"" ""-synctex=1"" ""-interaction=nonstopmode/""" -norc -gg -pdf %.tex</ins> または <ins>latexmk -e """$pdflatex=q/lualatex"" ""-synctex=1"" ""-interaction=nonstopmode/""" -norc -gg -pdf %.tex</ins> または <ins>latexmk -e """$pdflatex=q/xelatex"" ""-synctex=1"" ""-interaction=nonstopmode/""" -norc -gg -xelatex %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](</BibTeX関連ツール/>)　　 </span><ins>upbibtex &#x25;</ins> または <ins>biber &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>mendex -U %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>dvips -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>dvipdfmx -f dlbase14.map %.dvi</ins><br>

　　　<strong>クイックビルド</strong>　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>ps2pdf.bat %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>upmpost -kanji=utf8 -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>asy %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>gswin32c.exe</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　　　<strong>エディタ</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<br>

<br>

<br>

<br>

　　　<strong>ショートカット</strong><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>DVI ビューア</strong></span><br>
<ins>"C:/w32tex/dviout/dviout.exe" -1 %.dvi</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PS ビューア</strong></span><br>
<ins>"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance %.ps</ins> または <ins>"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance %.ps</ins> または <ins>"C:/Program Files/Ghostgum/gsview/gsview32.exe" -e %.ps</ins> または <ins>"C:/Program Files (x86)/Ghostgum/gsview/gsview32.exe" -e %.ps</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;"><span style="color:#3333CC;">◎</span>　組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>"C:/w32tex/share/texworks/TeXworks.exe" %.pdf</ins> または <ins>"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @</ins> または <ins>"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @</ins> または <ins>"C:/Program Files/Adobe/Reader 10.0/Reader/AcroRd32.exe" %.pdf</ins> または <ins>"C:/Program Files (x86)/Adobe/Reader 10.0/Reader/AcroRd32.exe" %.pdf</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

#### [TeX Live](</TeX Live/>) {#p3874cc2}

[TeX Live 2012 on Windows](http://blogs.yahoo.co.jp/igproj_fusion/15776344.html) を参照．

## [SumatraPDF](/SumatraPDF/) との連携 {#f10825ae}

LaTeX コマンド, PdfLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#y08c577b}

#### SumatraPDF を前面に表示したい場合 {#id9fc839}

forward search は PDFビューアに

■ 32bit Windows の場合

```
"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @
```

■ 64bit Windows の場合

```
"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @
```

です．

#### SumatraPDF を前面に表示したくない場合 {#j0fbd66f}

[SumatraPDF#fwdsumatrapdf.exe](/SumatraPDF/#n8da77e2) の fwdsumatrapdf.exe を使用します．<br>

forward search は PDFビューアに

```
"C:/w32tex/NDde/Binary/fwdsumatrapdf.exe" %.pdf #.tex @
```

です．

### inverse search {#p850b553}

inverse search は SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に

```
C:\texmakerwin32usb\texmaker.exe "%f" -line %l
```

です．

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## [Adobe Reader](</Adobe Reader/>) との連携 {#u27e1718}

### pdfpLaTeXA {#c1deb4e2}

pdfplatex1A-nonstopmode.bat を作成します．

***

- C:\w32tex\bin\pdfplatex1A-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
echo exit | ^
pdfdde & ^
platex -kanji=utf8 -guess-input-enc -interaction=nonstopmode -jobname="%~n1" %1 && ^
dvipdfmx "%~n1" && ^
pdfopen --file "%~n1.pdf"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdfplatex1A-nonstopmode.bat %
```

を入力します．

### pdfpLaTeX2A {#x150a7a4}

pdfplatex2A-nonstopmode.bat を作成します．

***

- C:\w32tex\bin\pdfplatex2A-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
echo exit | ^
pdfdde & ^
platex -kanji=utf8 -guess-input-enc -interaction=nonstopmode -jobname="%~n1" %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -g > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
pdfopen --file "%~n1.pdf"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdfplatex2A-nonstopmode.bat %
```

を入力します．

### pdfupLaTeXA {#v915ab85}

pdfuplatex1A-nonstopmode.bat を作成します．

***

- C:\w32tex\bin\pdfuplatex1A-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
echo exit | ^
pdfdde & ^
uplatex -kanji=utf8 -no-guess-input-enc -interaction=nonstopmode %1 && ^
dvipdfmx "%~n1" && ^
pdfopen --file "%~n1.pdf"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdfuplatex1A-nonstopmode.bat %
```

を入力します．

### pdfupLaTeX2A {#pf77769a}

pdfuplatex2A-nonstopmode.bat を作成します．

***

- C:\w32tex\bin\pdfuplatex2A-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
echo exit | ^
pdfdde & ^
uplatex -kanji=utf8 -no-guess-input-enc -interaction=nonstopmode %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
pdfopen --file "%~n1.pdf"
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

- C:\w32tex\bin\pdflatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
echo exit | ^
pdfdde & ^
pdflatex -interaction=nonstopmode %1 && ^
pdfopen --file "%~n1.pdf"
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

- C:\w32tex\bin\lualatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
echo exit | ^
pdfdde & ^
lualatex -interaction=nonstopmode %1 && ^
pdfopen --file "%~n1.pdf"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
lualatexA-nonstopmode.bat %
```

を入力します．

### XeLaTeXA {#md09c195}

xelatexA-nonstopmode.bat を作成します．

***

- C:\w32tex\bin\xelatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
echo exit | ^
pdfdde & ^
xelatex -interaction=nonstopmode %1 && ^
pdfopen --file "%~n1.pdf"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
xelatexA-nonstopmode.bat %
```

を入力します．

## [dviout](/dviout/) との連携 (非推奨) {#b567571b}

[dviout#forward and inverse search](/dviout/#ycc841a2) を参照．

LaTeX コマンドのオプションに -src-specials を追加します．

### forward search {#lac1b8f8}

dviout-forward-search.bat を作成します．

***

- C:\w32tex\bin\dviout-forward-search.bat

***

```
@echo off
setlocal
set DVIOUT=C:\w32tex\dviout\dviout.exe
echo "%DVIOUT%" -1 "%~n1.dvi" "# %2 '%~n3.tex'" | ^
cmd
endlocal
```

***

forward search は DVIビューアに <!--  --> <!-- "C:/w32tex/dviout/dviout.exe" -1 %.dvi "# @ "'#.tex'"" --> <!--  -->

```
dviout-forward-search.bat %.dvi @ #.tex
```

です．

### inverse search {#u5cef573}

inverse search は dviout の \[Option\]-\[Setup Parameters...\]-\[Common\]-\[src:\] に

```
C:\texmakerwin32usb\texmaker.exe^s "%s" -line %d
```

です．

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．
