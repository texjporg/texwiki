---
title: "VxEditor"
url: "/VxEditor/"
date: 2010-06-14T17:09:21Z
pukiwiki: "VxEditor"
---

# VxEditor

## [VxEditor](http://dr-x.jimdo.com/) {#v81da523}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## VxEditor とは {#ub092d33}

VxEditor は Windows 7, Vista, XP, 2000, NT4, Me, 98, 95 で軽快に動作する国産でフリーのテキストエディタです．

- [ホーム - DR-X Web Page!](http://dr-x.jimdo.com/)
    - [ニュース](http://dr-x.jimdo.com/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9/)
    - [dr-x (vxeditor) on Twitter](http://twitter.com/vxeditor)
- [Vector - VxEditor](http://www.vector.co.jp/soft/win95/writing/se236058.html)

## ツールの設定 {#t542b96a}

ツールの設定をすると TeraPad, [Notepad++](/Notepad++/) と同様に，LaTeX 環境を簡単に作ることができます．

### pdfLaTeX {#jef6ef8d}

<em>※注意</em>

> <em>欧文専用です．日本語は使えません．</em>

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;">\[オプション\]\[自動実行\]\[文書タイプ\]</span>

> 設定

> タイトル(T):<br><ins>pdfLaTeX</ins>

> 実行ファイル(P):<br><ins>cmd</ins>

> 作業フォルダ(F):<br><br>

> コマンドラインパラメータ(C):<br><ins>/c cd /d "$DIRPATH" &amp;&amp; echo exit | pdfdde &amp; pdflatex "$FILENAME" &amp;&amp; pdfopen --file="$NAMEONLY.pdf"</ins>

> <span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br><span style="color:#441177;">　　それらを実行することができます．</span>
>
> ***
>
> <span style="color:Black;background-color:#EEEEEE;">\[ツール\]</span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;">\[自動実行\]\[文書タイプ\]</span>

> 表示

> ☑ツールを有効にする(E)<br>☑メインメニューに表示する(M)<br>☑ポップアップメニューに表示する(P)

> ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span>

> ☐ツールバーに表示する(T)

> アイコン(I):

> 起動

> ☑実行時にテキストを保存する(S)

> ショートカット(H):　<ins>Ctrl + Alt + H</ins>

***

次のうちのどれかを実行

- Ctrl + Alt + H を押す
- メニューの \[ツール(T)\] → \[pdfLaTeX\]
- エディタ画面を右クリック → \[pdfLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pdfepLaTeX {#v2edf4e6}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;">\[オプション\]\[自動実行\]\[文書タイプ\]</span>

> 設定

> タイトル(T):<br><ins>pdfepLaTeX</ins>

> 実行ファイル(P):<br><ins>cmd</ins>

> 作業フォルダ(F):<br><br>

> コマンドラインパラメータ(C):<br><ins>/c cd /d "$DIRPATH" &amp;&amp; echo exit | pdfdde &amp; eplatex -kanji=sjis "$FILENAME" &amp;&amp; dvipdfmx "$NAMEONLY.dvi" &amp;&amp; pdfopen --file="$NAMEONLY.pdf"</ins>

> <span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br><span style="color:#441177;">　　それらを実行することができます．</span>
>
> ***
>
> <span style="color:Black;background-color:#EEEEEE;">\[ツール\]</span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;">\[自動実行\]\[文書タイプ\]</span>

> 表示

> ☑ツールを有効にする(E)<br>☑メインメニューに表示する(M)<br>☑ポップアップメニューに表示する(P)

> ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span>

> ☐ツールバーに表示する(T)

> アイコン(I):

> 起動

> ☑実行時にテキストを保存する(S)

> ショートカット(H):　<ins>Ctrl + Alt + J</ins>

***

次のうちのどれかを実行

- Ctrl + Alt + J を押す
- メニューの \[ツール(T)\] → \[pdfepLaTeX\]
- エディタ画面を右クリック → \[pdfepLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pdfepLaTeX2 {#fcfb987f}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;">\[オプション\]\[自動実行\]\[文書タイプ\]</span>

> 設定

> タイトル(T):<br><ins>pdfepLaTeX2</ins>

> 実行ファイル(P):<br><ins>cmd</ins>

> 作業フォルダ(F):<br><br>

> コマンドラインパラメータ(C):<br><ins>/c cd /d "$DIRPATH" &amp;&amp; echo exit | pdfdde &amp; eplatex -kanji=sjis "$FILENAME" &amp;&amp; dvips -Ppdf -z -f "$NAMEONLY.dvi" | bkmk2uni > "$NAMEONLY.ps" &amp;&amp; ps2pdf.bat "$NAMEONLY.ps" &amp;&amp; pdfopen --file="$NAMEONLY.pdf"</ins>

> <span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br><span style="color:#441177;">　　それらを実行することができます．</span>
>
> ***
>
> <span style="color:Black;background-color:#EEEEEE;">\[ツール\]</span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;">\[自動実行\]\[文書タイプ\]</span>

> 表示

> ☑ツールを有効にする(E)<br>☑メインメニューに表示する(M)<br>☑ポップアップメニューに表示する(P)

> ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span>

> ☐ツールバーに表示する(T)

> アイコン(I):

> 起動

> ☑実行時にテキストを保存する(S)

> ショートカット(H):　<ins>Ctrl + Alt + K</ins>

***

次のうちのどれかを実行

- Ctrl + Alt + K を押す
- メニューの \[ツール(T)\] → \[pdfepLaTeX2\]
- エディタ画面を右クリック → \[pdfepLaTeX2\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pBibTeX {#v9c2efca}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;">\[オプション\]\[自動実行\]\[文書タイプ\]</span>

> 設定

> タイトル(T):<br><ins>pBibTeX</ins>

> 実行ファイル(P):<br><ins>cmd</ins>

> 作業フォルダ(F):<br><br>

> コマンドラインパラメータ(C):<br><ins>/c cd /d "$DIRPATH" &amp;&amp; pbibtex -kanji=sjis "$NAMEONLY"</ins>

> <span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br><span style="color:#441177;">　　それらを実行することができます．</span>
>
> ***
>
> <span style="color:Black;background-color:#EEEEEE;">\[ツール\]</span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;">\[自動実行\]\[文書タイプ\]</span>

> 表示

> ☑ツールを有効にする(E)<br>☑メインメニューに表示する(M)<br>☑ポップアップメニューに表示する(P)

> ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span>

> ☐ツールバーに表示する(T)

> アイコン(I):

> 起動

> ☑実行時にテキストを保存する(S)

> ショートカット(H):　<ins>Ctrl + Alt + L</ins>

***

次のうちのどれかを実行

- Ctrl + Alt + L を押す
- メニューの \[ツール(T)\] → \[pBibTeX\]
- エディタ画面を右クリック → \[pBibTeX\]

### Mendex {#sfdae9af}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;">\[オプション\]\[自動実行\]\[文書タイプ\]</span>

> 設定

> タイトル(T):<br><ins>Mendex</ins>

> 実行ファイル(P):<br><ins>cmd</ins>

> 作業フォルダ(F):<br><br>

> コマンドラインパラメータ(C):<br><ins>/c cd /d "$DIRPATH" &amp;&amp; mendex -S "$NAMEONLY"</ins>

> <span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br><span style="color:#441177;">　　それらを実行することができます．</span>
>
> ***
>
> <span style="color:Black;background-color:#EEEEEE;">\[ツール\]</span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;">\[自動実行\]\[文書タイプ\]</span>

> 表示

> ☑ツールを有効にする(E)<br>☑メインメニューに表示する(M)<br>☑ポップアップメニューに表示する(P)

> ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span>

> ☐ツールバーに表示する(T)

> アイコン(I):

> 起動

> ☑実行時にテキストを保存する(S)

> ショートカット(H):　<ins>Ctrl + Alt + M</ins>

***

次のうちのどれかを実行

- Ctrl + Alt + M を押す
- メニューの \[ツール(T)\] → \[Mendex\]
- エディタ画面を右クリック → \[Mendex\]
