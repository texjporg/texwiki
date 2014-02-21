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
コマンドの LaTeX に設定されている latex を uplatex に変更してコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの LuaLaTeX に設定されているコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの Bib(la)tex に設定されている bibtex を biber --bblencoding=utf8 -u -U --output_safechars に変更します．<br>
コマンドの Dvipdfm に設定されている dvipdfm を dvipdfmx に変更します．<br>
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

<span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/makeindex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"</ins><br>

<br>

<br>

<br>

　　　<strong>クイックビルド</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](/Biblatex/)　　 </span><ins>biber --bblencoding=utf8 -u -U --output_safechars &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>makeindex %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>dvips -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>dvipdfmx %.dvi</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>ps2pdf.bat %.ps</ins> または <ins>ps2pdf.exe %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>upmpost -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>asy %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>rungs.exe</ins> または <ins>gswin64c.exe</ins> または <ins>gswin32c.exe</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　<strong>ショートカット</strong>　　　<span style="color:Black;background-color:#F5F5F5;">Add to PATH　　　　</span><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;">(●) 組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>powershell -Command "&amp; {$line=\[char\]0x22+@+\[char\]0x22;$tex=\[char\]0x22+'#.tex'+\[char\]0x22;$pdf=\[char\]0x22+'%.pdf'+\[char\]0x22;$texmaker='C:\Program Files (x86)\Texmaker\texmaker.exe';$f=\[char\]0x25+'f';$l=\[char\]0x25+'l';$inverse_search=\[char\]0x22+\[char\]0x5c+\[char\]0x22+$texmaker+\[char\]0x5c+\[char\]0x22+' '+\[char\]0x5c+\[char\]0x22+$f+\[char\]0x5c+\[char\]0x22+' -line '+$l+\[char\]0x22;$sumatrapdf=\[char\]0x22+'C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe'+\[char\]0x22;Start-Process $sumatrapdf -ArgumentList ('-reuse-instance','-inverse-search',$inverse_search,$pdf,'-forward-search',$tex,$line)}"</ins><br>

<ins>powershell -Command "&amp; {$line=\[char\]0x22+@+\[char\]0x22;$tex=\[char\]0x22+'#.tex'+\[char\]0x22;$pdf=\[char\]0x22+'%.pdf'+\[char\]0x22;$texmaker='C:\Program Files\Texmaker\texmaker.exe';$f=\[char\]0x25+'f';$l=\[char\]0x25+'l';$inverse_search=\[char\]0x22+\[char\]0x5c+\[char\]0x22+$texmaker+\[char\]0x5c+\[char\]0x22+' '+\[char\]0x5c+\[char\]0x22+$f+\[char\]0x5c+\[char\]0x22+' -line '+$l+\[char\]0x22;$sumatrapdf=\[char\]0x22+'C:\Program Files\SumatraPDF\SumatraPDF.exe'+\[char\]0x22;Start-Process $sumatrapdf -ArgumentList ('-reuse-instance','-inverse-search',$inverse_search,$pdf,'-forward-search',$tex,$line)}"</ins><br>

<ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @</ins><br>

<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @</ins><br>

<ins>powershell -Command "&amp; {$param=\[char\]0x22+'@:0:#.tex'+\[char\]0x22; $pdf=\[char\]0x22+'%.pdf'+\[char\]0x22; $page=\[char\]0x25+'{page+1}'; $o=\[char\]0x27+\[char\]0x25+'{output}'+\[char\]0x27; synctex view -i $param -o $pdf -x """texworks --position=$page $o"""}"</ins><br>
<!-- %%%texworks %.pdf%%%&br; -->
<!-- %%%cmd /c start firefox -new-window %.pdf%%%&br; -->
<!-- %%%cmd /c start chrome - -new-window !/%.pdf%%%&br; -->
<!-- %%%pdfopen - -rxi - -file %.pdf%%%&br; -->

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

## [SumatraPDF](/SumatraPDF/) との連携 {#f10825ae}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward and inverse search {#xf457e6c}

#### SumatraPDF を前面に表示したい場合 {#r4dc6964}

forward and inverse search は PDFビューアの外部ビューアに以下のように設定します．<br>

■ 64-bit Windows の場合<br>

```
powershell -Command "& {$line=[char]0x22+@+[char]0x22;$tex=[char]0x22+'#.tex'+[char]0x22;$pdf=[char]0x22+'%.pdf'+[char]0x22;$texmaker='C:\Program Files (x86)\Texmaker\texmaker.exe';$f=[char]0x25+'f';$l=[char]0x25+'l';$inverse_search=[char]0x22+[char]0x5c+[char]0x22+$texmaker+[char]0x5c+[char]0x22+' '+[char]0x5c+[char]0x22+$f+[char]0x5c+[char]0x22+' -line '+$l+[char]0x22;$sumatrapdf=[char]0x22+'C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe'+[char]0x22;Start-Process $sumatrapdf -ArgumentList ('-reuse-instance','-inverse-search',$inverse_search,$pdf,'-forward-search',$tex,$line)}"
```

■ 32-bit Windows の場合<br>

```
powershell -Command "& {$line=[char]0x22+@+[char]0x22;$tex=[char]0x22+'#.tex'+[char]0x22;$pdf=[char]0x22+'%.pdf'+[char]0x22;$texmaker='C:\Program Files\Texmaker\texmaker.exe';$f=[char]0x25+'f';$l=[char]0x25+'l';$inverse_search=[char]0x22+[char]0x5c+[char]0x22+$texmaker+[char]0x5c+[char]0x22+' '+[char]0x5c+[char]0x22+$f+[char]0x5c+[char]0x22+' -line '+$l+[char]0x22;$sumatrapdf=[char]0x22+'C:\Program Files\SumatraPDF\SumatraPDF.exe'+[char]0x22;Start-Process $sumatrapdf -ArgumentList ('-reuse-instance','-inverse-search',$inverse_search,$pdf,'-forward-search',$tex,$line)}"
```

### forward search {#y08c577b}

#### SumatraPDF を前面に表示したい場合 {#id9fc839}

forward search は PDFビューアの外部ビューアに以下のように設定します．<br>

■ 64-bit Windows の場合<br>

```
"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @
```

■ 32-bit Windows の場合<br>

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

## [TeXworks](/TeXworks/) との連携 {#o9f4b99c}

### forward search {#a41fe59c}

forward search は PDFビューアの外部ビューアに以下のように設定します．<br>

```
powershell -Command "& {$param=[char]0x22+'@:0:#.tex'+[char]0x22; $pdf=[char]0x22+'%.pdf'+[char]0x22; $page=[char]0x25+'{page+1}'; $o=[char]0x27+[char]0x25+'{output}'+[char]0x27; synctex view -i $param -o $pdf -x """texworks --position=$page $o"""}"
```

## [Adobe Reader](</Adobe Reader/>) との連携 {#u27e1718}

### forward search {#l5bfe340}

#### pdfupLaTeXA {#v915ab85}

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
ptex2pdf -u -l -ot "-kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode" %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdfuplatexA-nonstopmode.bat % #.tex @
```

を入力します．

#### pdfupLaTeX2A {#pf77769a}

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
uplatex -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdfuplatex2A-nonstopmode.bat % #.tex @
```

を入力します．

#### pdfLaTeXA {#j7c9b397}

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
pdflatex -synctex=1 -interaction=nonstopmode %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdflatexA-nonstopmode.bat % #.tex @
```

を入力します．

#### LuaLaTeXA {#b2053ddc}

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
lualatex -synctex=1 -interaction=nonstopmode %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
lualatexA-nonstopmode.bat % #.tex @
```

を入力します．

#### LuaJITLaTeXA {#z4aadf43}

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
luajitlatex -synctex=1 -interaction=nonstopmode %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
luajitlatexA-nonstopmode.bat % #.tex @
```

を入力します．

#### XeLaTeXA {#md09c195}

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
xelatex -synctex=1 -interaction=nonstopmode %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
xelatexA-nonstopmode.bat % #.tex @
```

を入力します．
