---
title: "MTeX for Notepad++"
url: "/MTeX for Notepad++/"
date: 2013-01-21T00:11:44Z
pukiwiki: "MTeX for Notepad++"
---

# MTeX for Notepad++

[Notepad++](/Notepad++/) > MTeX for Notepad++

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## [MTeX for Notepad++](http://ich.sakura.ne.jp/manabu/jp/html/program.html#MTeXnpp) {#i94bcee5}

[MTeX for Notepad++](http://ich.sakura.ne.jp/manabu/jp/html/program.html#MTeXnpp) は，Notepad++ のプラグインで，TeX 文章の作成をサポートするツールです．

設定は \[プラグイン\]-\[MTeX for Notepad++\]-\[ツールバー\]-\[設定とヘルプ\]-\[設定...\] から行います．<br>
ボタンの追加・削除は \[プラグイン\]-\[MTeX for Notepad++\]-\[ツールバー\]-\[設定とヘルプ\]-\[ツールバーのカスタマイズ...\] から行います．<br>

ツールバーとタブの間隔が広すぎる場合は，編集しているファイル名が表示されているタブの上部にマウスのカーソルを移動させてからサイズを変更してください．

#### コマンド・パス設定 {#a0913685}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>MTeX for Notepad++の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　入力支援設定　\]\[　ショートカットキー設定　\]\[　特殊文字設定　\]\[　TeX処理設定　\]</ins></span><strong>\[　コマンド・パス設定　\]</strong><br>
　　　　実行ファイルの設定<br>

> <table>
> <tbody>
> <tr><td>設定</td><td>説明</td><td>実行ファイル</td><td>引数</td></tr>
> <tr><td>1</td><td>TeX処理</td><td>"uplatex"</td><td>-kanji=utf8 -no-guess-input-enc -synctex=1 -sjis-terminal "%MTeXnpp_CFName%.tex"</td></tr>
> <tr><td>1</td><td>BibTeX処理</td><td>"upbibtex"</td><td>-sjis-terminal "%MTeXnpp_CFName%"</td></tr>
> <tr><td>1</td><td>Index処理</td><td>"mendex"</td><td>-U -T "%MTeXnpp_CFName%.idx"</td></tr>
> <tr><td>1</td><td>DVIからPSへ変換</td><td>"dvips"</td><td>-Ppdf -z -f "%MTeXnpp_CFName%.dvi" &#x7c; convbkmk -u &gt; "%MTeXnpp_CFName%.ps"</td></tr>
> <tr><td>1</td><td>DVIからPDFへ変換</td><td>"dvipdfmx"</td><td>"%MTeXnpp_CFName%.dvi"</td></tr>
> <tr><td>1</td><td>PSからPDFへ変換</td><td>"cmd"</td><td>/c ps2pdf.bat "%MTeXnpp_CFName%.ps"</td></tr>
> <tr><td>1</td><td>PDFを表示</td><td>%MTeXnpp_start% "SumatraPDF.exe"</td><td>-reuse-instance "%MTeXnpp_CFPath%\%MTeXnpp_CFName%.pdf" -forward-search "%MTeXnpp_FName%.tex" %MTeXnpp_Line%</td></tr>
> <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
> </tbody>
> </table>
>

***

「PDFファイルの表示」のアイコンをクリックすると uplatex + dvipdfmx で PDF ファイルを作成して表示します．<br>

## SumatraPDF との連携 {#q214c924}

### forward search (SumatraPDF を前面に表示したい場合) {#rd95d13c}

> <table>
> <tbody>
> <tr><td>設定</td><td>説明</td><td>実行ファイル</td><td>引数</td></tr>
> <tr><td>1</td><td>PDFを表示</td><td>%MTeXnpp_start% "SumatraPDF.exe"</td><td>-reuse-instance "%MTeXnpp_CFPath%\%MTeXnpp_CFName%.pdf" -forward-search "%MTeXnpp_FName%.tex" %MTeXnpp_Line%</td></tr>
> </tbody>
> </table>
>

### forward search (SumatraPDF を前面に表示したくない場合) {#i482e2dc}

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

> <table>
> <tbody>
> <tr><td>設定</td><td>説明</td><td>実行ファイル</td><td>引数</td></tr>
> <tr><td>1</td><td>PDFを表示</td><td>%MTeXnpp_start% fwdsumatrapdf.exe</td><td>"%MTeXnpp_CFPath%\%MTeXnpp_CFName%.pdf" "%MTeXnpp_FName%.tex" %MTeXnpp_Line%</td></tr>
> </tbody>
> </table>
>

### inverse search {#l6db5687}

[Notepad++#SumatraPDF との連携](/Notepad++/#ted60cbe) を参照．
