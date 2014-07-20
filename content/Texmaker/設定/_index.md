---
title: "Texmaker/設定"
url: "/Texmaker/設定/"
date: 2012-07-12T19:53:47Z
bookCollapseSection: true
pukiwiki: "Texmaker/設定"
---

# Texmaker/設定

[Texmaker](/Texmaker/) > 設定

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## 設定 {#e3cd1932}

### 設定ファイル {#ke75945d}

> <table>
> <thead>
> <tr><th style="text-align:center">環境</th><th style="text-align:center">設定ファイルが保存されるフォルダー</th><th style="text-align:center">ファイル名</th></tr>
> </thead>
> <tbody>
> <tr><td>Portable バージョン</td><td>Texmaker の実行ファイルと同じフォルダー</td><td>texmaker.ini, texmakerapp.ini, texmakerpdfview.ini</td></tr>
> <tr><td>Windows</td><td>%APPDATA%\xm1\</td><td>texmaker.ini, texmakerapp.ini, texmakerpdfview.ini</td></tr>
> <tr><td>UNIX, Linux, OS X</td><td>$HOME/.config/xm1/</td><td>texmaker.ini, texmakerapp.ini, texmakerpdfview.ini</td></tr>
> </tbody>
> </table>
>

### 設定のリセット {#qc1461dd}

\[オプション(O)\]-\[設定ファイル\]-\[設定をリセット\]

### コマンド {#cab65285}

{{< children >}}

を参照．

### クイックビルド {#y84eb800}

\[オプション(O)\]-\[Texmaker の設定\]-\[クイックビルド\]

LaTeX + dvipdfm + PDF ファイルを表示 を選択します．<br>
ユーザー定義でコマンドを指定して実行することもできます．<br>

クイックビルドを実行して複数のビューアが起動してしまう場合は<br>

- DVI/PS/PDF ファイルがすでに開いている場合は新たにビューアを起動しないにチェックを入れる
- ユーザー定義でビューアを起動する手順を除いた処理を作成する

などの方法で対処してください．<br>

***

<span style="color:#9BC527;background-color:#9BC527;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#9BC527;background-color:#9BC527;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">クイックビルドで使用するコマンド</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ PdfLaTeX + PDF ファイルを表示</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;">◯ LaTeX + dvips + PS ファイルを表示</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ PdfLaTeX + Bib(la)tex + PdfLaTeX (x2) + PDF ファイルを表示</span>　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;">◯ LaTeX + DVI ファイルを表示</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ LaTeX + dvips + ps2pdf + PDF ファイルを表示</span>　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><span style="color:black;background-color:yellow;"><strong>(●) LaTeX + dvipdfm + PDF ファイルを表示 ← 選択する</strong></span></span><br>

　　　　　<strong>コマンド</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">◯ LaTeX + Bib(la)tex + LaTeX (x2) + dvips + ps2pdf + PDF ファイルを表示</span>　　　　<span style="color:Black;background-color:#F5F5F5;">◯ Sweave + PdfLaTeX + PDF ファイルを表示</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">◯ LaTeX + Asymptote + LaTeX + dvips + PS ファイルを表示</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ PdfLaTeX + Asymptote + PdfLaTeX + PDF ファイルを表示</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ Latexmk + PDF ファイルを表示</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ XeLaTeX + PDF ファイルを表示</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　<strong>クイックビルド</strong>　</span>　 <span style="color:Black;background-color:#F5F5F5;">◯ LuaLaTeX + PDF ファイルを表示</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">◯ ユーザー定義 : (% : 拡張子を除いたファイル名)</span><br>

<span style="color:#888888;background-color:#EEEEEE;"><ins>ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/mendex '+0x25.chr+'O'+' -U -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"&#x7c;rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance %.pdf -forward-search #.tex @</ins></span><br>

<span style="color:Black;background-color:#F5F5F5;">(コマンドは'&#x7c;'で分割する必要があります)</span><br>

<span style="color:Black;background-color:#F5F5F5;">For .asy files　</span><ins>asy -f pdf -noView %.asy&#x7c;pdfopen --rxi --file %.pdf</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">☐ DVI/PS/PDF ファイルがすでに開いている場合は新たにビューアを起動しない</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<br>

<br>

<br>

<br>

　　　<strong>ショートカット</strong><br>

<br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

### エディタ {#y67addbe}

\[オプション(O)\]-\[Texmaker の設定\]-\[エディタ\]

文字コードのリストからエディタで使用する文字コードを指定できます．<br>
デフォルトの文字コードは UTF-8 です．<br>
かな漢字変換をする際に，文字と背景が黒く表示され，読めなくなる場合は Dark theme を選択します．<br>
日本語の文書を作成する場合はスペルチェック辞書のインラインのチェックを外します．<br>
重要なファイルを作成する場合は 10 分ごとにバックアップをとる にチェックを入れます．<br>

***

<span style="color:#9BC527;background-color:#9BC527;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#9BC527;background-color:#9BC527;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">エディタ</span><br>

<span style="color:Black;background-color:#F5F5F5;">フォント名 　　　　　　　　　　　　　　　　　　　　</span><ins>メイリオ　　　　　　　　　　　<strong>ᐯ</strong></ins><span style="color:Black;background-color:#F5F5F5;">　☑ ワードラップ</span><br>

<span style="color:Black;background-color:#F5F5F5;">サイズ 　　　　　　　　　　　　　　　　　　　　　　</span><ins>12　　　　　　　　　　　　　 \[<strong>⇕</strong>\]</ins><span style="color:Black;background-color:#F5F5F5;">　☑ 補完</span><br>

<span style="color:Black;background-color:#F5F5F5;">文字コード　　　　　　　　　　　　　　　　　　　　</span><span style="color:Black;background-color:#EEEEEE;"><ins>\[UTF-8　　　　　　　　　　　▼\]</ins></span><span style="color:Black;background-color:#F5F5F5;">　☑ 行番号の表示</span><br>

　　　　　<strong>コマンド</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">☐ 外部からの変更をチェックする　　　　　　　　　　　　　　　　　　　　　　　　 ☑ 10 分ごとにバックアップをとる</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">スペルチェック辞書　</span><ins>C:/texmakerwin32usb/en_US.dic　　　　　　　　　　　　　　　　</ins><span style="color:Black;background-color:#F5F5F5;">　　　　<span style="color:black;background-color:yellow;"><strong>☐ インライン ← 日本語の文書を作成する場合はチェックをはずす</strong></span></span><br>

<span style="color:Black;background-color:#F5F5F5;">タブ幅 (スペースの数) </span><ins>4　　\[<strong>⇕</strong>\]</ins><span style="color:Black;background-color:#F5F5F5;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ タブをスペースで置き換える</span><br>

<span style="color:Black;background-color:#F5F5F5;">色</span><br>

<br>

　　　<strong>クイックビルド</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>エディタ</strong>　　　</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

>
> : &nbsp;
>

>
> : &nbsp;
>

> <table>
> <tbody>
> <tr><td style="color:#555">Background</td><td>#ffffff　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td></tr>
> <tr><td style="color:#555">Current line</td><td>#ececec</td></tr>
> <tr><td style="color:#555">Highlighted line</td><td>#ff0000</td></tr>
> <tr><td style="color:#555">Text</td><td>#000000</td></tr>
> <tr><td style="color:#555">Comment</td><td>#606060</td></tr>
> <tr><td style="color:#555">Math</td><td>#008000</td></tr>
> <tr><td style="color:#555">...</td><td>...</td></tr>
> </tbody>
> </table>
>

　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 　　　　　 ダークテーマ 　　　　　 \]</span><span style="color:black;background-color:yellow;"><strong>← かな漢字変換をする際に，文字と背景が黒く表示され，読めなくなる場合は Dark theme を選択する</strong></span><br>
　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　　　デフォルトのテーマ　　　　\]</span><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***
