---
title: "MTeX for Notepad++"
url: "/MTeX for Notepad++/"
date: 2013-01-21T00:11:44Z
pukiwiki: "MTeX for Notepad++"
---

# MTeX for Notepad++

[Notepad++](/Notepad++/) > MTeX for Notepad++

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## [MTeX for Notepad++](http://ich.sakura.ne.jp/manabu/jp/html/program.html#MTeXnpp) {#i94bcee5}

[MTeX for Notepad++](http://ich.sakura.ne.jp/manabu/jp/html/program.html#MTeXnpp) は，Notepad++ のプラグインで，TeX 文章の作成をサポートするツールです．

設定は \[プラグイン\]-\[MTeX for Notepad++\]-\[ツールバー\]-\[設定とヘルプ\]-\[設定...\] から行います．<br>
ボタンの追加・削除は \[プラグイン\]-\[MTeX for Notepad++\]-\[ツールバー\]-\[設定とヘルプ\]-\[ツールバーのカスタマイズ...\] から行います．<br>

ツールバーとタブの間隔が広すぎる場合は，編集しているファイル名が表示されているタブの上部にマウスのカーソルを移動させてからサイズを変更してください．

#### コマンド・パス設定 {#a0913685}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>MTeX for Notepad++の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　入力支援設定　\]\[　ショートカットキー設定　\]\[　特殊文字設定　\]\[　TeX処理設定　\]</ins></span><strong>\[　コマンド・パス設定　\]</strong><br>
　　　　実行ファイルの設定<br>

> <table>
> <tbody>
> <tr><td>設定</td><td>説明</td><td>実行ファイル</td><td>引数</td></tr>
> <tr><td>1</td><td>TeX処理 (platex, 自動判別の場合)</td><td>"platex"</td><td>-kanji=utf8 -guess-input-enc -synctex=1 -sjis-terminal -jobname="%MTeXnpp_CFName%" "%MTeXnpp_CFName%.tex"</td></tr>
> <tr><td>1</td><td>TeX処理 (platex, UTF-8 の場合)</td><td>"platex"</td><td>-kanji=utf8 -no-guess-input-enc -synctex=1 -sjis-terminal -jobname="%MTeXnpp_CFName%" "%MTeXnpp_CFName%.tex"</td></tr>
> <tr><td>1</td><td>TeX処理 (uplatex の場合)</td><td>"uplatex"</td><td>-kanji=utf8 -no-guess-input-enc -synctex=1 "%MTeXnpp_CFName%.tex"</td></tr>
> <tr><td>1</td><td>BibTeX処理 (pbibtex の場合)</td><td>"pbibtex"</td><td>-kanji=utf8 -sjis-terminal "%MTeXnpp_CFName%"</td></tr>
> <tr><td>1</td><td>BibTeX処理 (upbibtex の場合)</td><td>"upbibtex"</td><td>"%MTeXnpp_CFName%"</td></tr>
> <tr><td>1</td><td>Index処理</td><td>"mendex"</td><td>-U -T "%MTeXnpp_CFName%.idx"</td></tr>
> <tr><td>1</td><td>DVIからPSへ変換 (TeX処理で platex を使用する場合)</td><td>"dvips"</td><td>-Ppdf -z -f "%MTeXnpp_CFName%.dvi" &#x7c; convbkmk -g &gt; "%MTeXnpp_CFName%.ps"</td></tr>
> <tr><td>1</td><td>DVIからPSへ変換 (TeX処理で uplatex を使用する場合)</td><td>"dvips"</td><td>-Ppdf -z -f "%MTeXnpp_CFName%.dvi" &#x7c; convbkmk -u &gt; "%MTeXnpp_CFName%.ps"</td></tr>
> <tr><td>1</td><td>DVIからPDFへ変換</td><td>"dvipdfmx"</td><td>"%MTeXnpp_CFName%.dvi"</td></tr>
> <tr><td>1</td><td>PSからPDFへ変換</td><td>call "C:\gs\gs9.07\lib\ps2pdf.bat"</td><td>"%MTeXnpp_CFName%.ps" "%MTeXnpp_CFName%.pdf"</td></tr>
> <tr><td>1</td><td>DVIを表示(用紙サイズ指定)</td><td>%MTeXnpp_start% "C:\w32tex\dviout\dviout.exe"</td><td>-1 -y=%MTeXnpp_PSize% "%MTeXnpp_CFPath%\%MTeXnpp_CFName%.dvi"</td></tr>
> <tr><td>1</td><td>DVIを表示</td><td>%MTeXnpp_start% "C:\w32tex\dviout\dviout.exe"</td><td>-1 "%MTeXnpp_CFPath%\%MTeXnpp_CFName%.dvi"</td></tr>
> <tr><td>1</td><td>PSを表示 (SumatraPDF の場合)</td><td>%MTeXnpp_start% "SumatraPDF.exe"</td><td>-reuse-instance "%MTeXnpp_CFPath%\%MTeXnpp_CFName%.ps"</td></tr>
> <tr><td>1</td><td>PDFを表示 (TeXworks の場合)</td><td>%MTeXnpp_start% "C:\w32tex\share\texworks\TeXworks.exe"</td><td>"%MTeXnpp_CFPath%\%MTeXnpp_CFName%.pdf"</td></tr>
> <tr><td>1</td><td>PDFを表示 (SumatraPDF の場合)</td><td>%MTeXnpp_start% "SumatraPDF.exe"</td><td>-reuse-instance "%MTeXnpp_CFPath%\%MTeXnpp_CFName%.pdf" -forward-search "%MTeXnpp_FName%.tex" %MTeXnpp_Line%</td></tr>
> <tr><td>1</td><td>PDFを表示 (Adobe Reader の場合)</td><td>%MTeXnpp_start% "AcroRd32.exe"</td><td>"%MTeXnpp_CFPath%\%MTeXnpp_CFName%.pdf"</td></tr>
> <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
> </tbody>
> </table>
>

***

PDFを表示で TeXworks を使用する場合は [TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

## SumatraPDF との連携 {#q214c924}

### forward search (SumatraPDF を前面に表示したい場合) {#rd95d13c}

以下のように設定します．<br>

> <table>
> <tbody>
> <tr><td>設定</td><td>説明</td><td>実行ファイル</td><td>引数</td></tr>
> <tr><td>1</td><td>PDFを表示</td><td>%MTeXnpp_start% "SumatraPDF.exe"</td><td>-reuse-instance "%MTeXnpp_CFPath%\%MTeXnpp_CFName%.pdf" -forward-search "%MTeXnpp_FName%.tex" %MTeXnpp_Line%</td></tr>
> </tbody>
> </table>
>

### forward search (SumatraPDF を前面に表示したくない場合) {#i482e2dc}

[SumatraPDF#fwdsumatrapdf.exe](/SumatraPDF/#n8da77e2) の fwdsumatrapdf.exe を使用します．<br>
以下のように設定します．<br>

> <table>
> <tbody>
> <tr><td>設定</td><td>説明</td><td>実行ファイル</td><td>引数</td></tr>
> <tr><td>1</td><td>PDFを表示</td><td>%MTeXnpp_start% fwdsumatrapdf.exe</td><td>"%MTeXnpp_CFPath%\%MTeXnpp_CFName%.pdf" "%MTeXnpp_FName%.tex" %MTeXnpp_Line%</td></tr>
> </tbody>
> </table>
>

### inverse search {#l6db5687}

[Notepad++#SumatraPDF との連携](/Notepad++/#ted60cbe) を参照．
