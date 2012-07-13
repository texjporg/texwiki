---
title: "Texmaker/設定/Windows"
url: "/Texmaker/設定/Windows/"
date: 2012-07-13T16:49:15Z
pukiwiki: "Texmaker/設定/Windows"
---

# Texmaker/設定/Windows

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
