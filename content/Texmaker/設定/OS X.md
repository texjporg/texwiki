---
title: "Texmaker/設定/OS X"
url: "/Texmaker/設定/OS X/"
date: 2012-07-13T16:53:28Z
pukiwiki: "Texmaker/設定/OS X"
---

# Texmaker/設定/OS X

[Texmaker](/Texmaker/) > [設定](</Texmaker/設定/>) > [OS X](/Mac/)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### コマンド {#cab65285}

\[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\]

MacTeX &amp; TeX Live の場合の設定を書きます．<br>
PDFビューアは，組み込みビューアと外部ビューアを選択するようになっているので好きな方を選択してください．<br>
[LuaTeX](/LuaTeX/) を使用したい場合は，コマンドの PdfLaTeX の pdflatex を lualatex に変更して使用してください．<br>
[XeTeX](/XeTeX/) を使用したい場合は，コマンドの PdfLaTeX の pdflatex を xelatex に変更して使用してください．<br>

#### [MacTeX &amp; TeX Live](/Mac/#f5466652) {#i89a162a}

動作未確認です．<br>
Texmaker 3.4.1 では動作するようです．<br>

- [TeXmaker3.4.1でも無事日本語が出力されました](http://www.geocities.jp/flutecore/Weblog/archives/2012/09/entry_133.html)
- [QA: TeXmakerの設定改善について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=874)

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#00DD00;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>Texmaker の設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>"/usr/texbin/platex" -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>"/usr/texbin/uplatex" -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>"/usr/texbin/pdflatex" -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>"/usr/texbin/lualatex" -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>"/usr/texbin/xelatex" -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ 出力ファイルを "build" サブフォルダーに出力する</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>"/usr/bin/latexmk" -gg -pdfdvi %.tex</ins> または <ins>"/usr/bin/latexmk" -gg -pdfps %.tex</ins> または <ins>"/usr/texbin/latexmk" -e "$pdflatex=q/pdflatex -synctex=1 -interaction=nonstopmode/" -norc -gg -pdf %.tex</ins> または <ins>"/usr/texbin/latexmk" -e "$pdflatex=q/lualatex -synctex=1 -interaction=nonstopmode/" -norc -gg -pdf %.tex</ins> または <ins>"/usr/texbin/latexmk" -e "$pdflatex=q/xelatex -synctex=1 -interaction=nonstopmode/" -norc -gg -xelatex %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](</BibTeX関連ツール/>)　　 </span><ins>"/usr/texbin/pbibtex" &#x25;</ins> または <ins>"/usr/texbin/upbibtex" &#x25;</ins> または <ins>"/usr/texbin/biber" &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>"/usr/texbin/mendex" %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>"/usr/texbin/dvips" -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>"/usr/texbin/dvipdfmx" -f ptex-ipaex.map %.dvi</ins><br>

　　　<strong>クイックビルド</strong>　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>"/usr/local/bin/ps2pdf" %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>"/usr/texbin/pmpost" -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>"/usr/texbin/asy" %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>"/usr/local/bin/gs"</ins><br>

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
<ins>open -a PictPrinter.app %.dvi</ins> または <ins>"/usr/texbin/pxdvi" -watchfile 1 %.dvi</ins> または <ins>open -a Skim.app %.dvi</ins> または <ins>open %.dvi</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PS ビューア</strong></span><br>
<ins>"/usr/local/bin/gv" --watch %.ps</ins> または <ins>open %.ps</ins><br>

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;"><span style="color:#3333CC;">◎</span>　組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>open -a Preview.app %.pdf</ins> または <ins>open -a TeXShop.app %.pdf</ins> または <ins>open -a TeXworks.app %.pdf</ins> または <ins>open -a Skim.app %.pdf</ins> または <ins>"/Applications/Skim.app/Contents/SharedSupport/displayline" @ %.pdf #.tex</ins> または <ins>open -a "Adobe Reader.app" %.pdf</ins> または <ins>open %.pdf</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

## Skim との連携 {#b05a1a86}

LaTeX コマンド, PdfLaTeX コマンドのオプションに -synctex=1 を追加します．

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
