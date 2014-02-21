---
title: "Texmaker/設定/OS X"
url: "/Texmaker/設定/OS X/"
date: 2012-07-13T16:53:28Z
pukiwiki: "Texmaker/設定/OS X"
---

# Texmaker/設定/OS X

[Texmaker](/Texmaker/) > [設定](</Texmaker/設定/>) > [OS X](/Mac/)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## 設定 {#ca365096}

### コマンド {#cab65285}

\[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\]

動作未確認です．<br>
PDFビューアは，組み込みビューアと外部ビューアを選択するようになっているので好きな方を選択してください．<br>
コマンドの LaTeX に設定されている latex を uplatex に変更してコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの LuaLaTeX に設定されているコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの Bib(la)tex に設定されている bibtex を biber --bblencoding=utf8 -u -U --output_safechars に変更します．<br>
コマンドの Dvipdfm に設定されている dvipdfm を dvipdfmx に変更します．<br>
BibTeX と dvipdfmx がうまく動作しない場合は以下を参照してください．<br>

- [TeXmakerでbibTeXとdvipdfmxが動きません](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=988)
- [TeXshopでbibTeXがうまく動かなくなりました](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=991)

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#00DD00;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>Texmaker の設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>"/usr/texbin/uplatex" -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>"/usr/texbin/pdflatex" -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ 出力ファイルを "build" サブフォルダーに出力する</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">XeLaTeX　　</span><ins>"/usr/texbin/xelatex" -synctex=1 -interaction=nonstopmode %.tex</ins>　　　　　<span style="color:Black;background-color:#F5F5F5;">LuaLaTeX　　</span><ins>"/usr/texbin/lualatex" -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>"/usr/texbin/luajitlatex" -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/makeindex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"</ins><br>

<br>

<br>

<br>

　　　<strong>クイックビルド</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](/Biblatex/)　　 </span><ins>"/usr/texbin/biber" --bblencoding=utf8 -u -U --output_safechars &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>"/usr/texbin/makeindex" %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>"/usr/texbin/dvips" -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>"/usr/texbin/dvipdfmx" %.dvi</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>"/Applications/Ghostscript.app/bin/ps2pdf" %.ps</ins> または <ins>"/usr/local/bin/ps2pdf" %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>"/usr/texbin/upmpost" -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>"/usr/texbin/asy" %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>"/usr/local/bin/gs"</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　<strong>ショートカット</strong>　　　<span style="color:Black;background-color:#F5F5F5;">Add to PATH　　　　</span><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;"><span style="color:Black;background-color:#9FCFFB;">(<span style="color:Black;">●</span>)</span>　組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>"/Applications/Skim.app/Contents/SharedSupport/displayline" @ %.pdf #.tex</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

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
