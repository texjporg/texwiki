---
title: "VxEditor"
url: "/VxEditor/"
date: 2010-06-14T17:09:21Z
pukiwiki: "VxEditor"
---

# VxEditor

## [VxEditor](http://dr-x.jimdo.com/) {#v81da523}

## VxEditor とは {#ub092d33}

VxEditor は Windows 95, 98, Me, NT4, 2000, XP, Vista, 7 で軽快に動作する国産でフリーのテキストエディタです．

TeraPad と同様に，LaTeX 環境を簡単に作ることができます．

- [ホーム - DR-X Web Page!](http://dr-x.jimdo.com/)
    - [ニュース](http://dr-x.jimdo.com/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9/)
- [Vector - VxEditor](http://www.vector.co.jp/soft/win95/writing/se236058.html)

## VxEditor で LaTeX (TeX -> PDF) {#jef6ef8d}

<em>※注意</em>

> <em>欧文専用です．日本語は使えません．</em>

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;">\[オプション\]\[自動実行\]\[文書タイプ\]</span>

> 設定

> タイトル(T):<br><ins>TeX -> PDF</ins>

> 実行ファイル(P):<br><ins>cmd</ins>

> 作業フォルダ(F):<br><br>

> コマンドラインパラメータ(C):<br><ins>/k cd /d "$DIRPATH" &amp;&amp; pdflatex -interaction=nonstopmode "$FILENAME" &amp;&amp; "$NAMEONLY.pdf" &amp; exit</ins>

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

> ☐実行時にテキストを保存する(S)

> ショートカット(H):　<ins>Ctrl + Alt + H</ins>

***

次のうちのどれかを実行

- Ctrl + Alt + H を押す
- メニューの \[ツール(T)\] → \[TeX -> PDF\]
- エディタ画面を右クリック → \[TeX -> PDF\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

## VxEditor で LaTeX (TeX -> DVI) {#v2edf4e6}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;">\[オプション\]\[自動実行\]\[文書タイプ\]</span>

> 設定

> タイトル(T):<br><ins>TeX -> DVI</ins>

> 実行ファイル(P):<br><ins>cmd</ins>

> 作業フォルダ(F):<br><br>

> コマンドラインパラメータ(C):<br><ins>/k cd /d "$DIRPATH" &amp;&amp; eplatex -kanji=sjis -interaction=nonstopmode "$FILENAME" &amp;&amp; "$NAMEONLY.dvi" &amp; exit</ins>

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

> ☐実行時にテキストを保存する(S)

> ショートカット(H):　<ins>Ctrl + Alt + J</ins>

***

次のうちのどれかを実行

- Ctrl + Alt + J を押す
- メニューの \[ツール(T)\] → \[TeX -> DVI\]
- エディタ画面を右クリック → \[TeX -> DVI\]

TeX ファイルがコンパイルされ DVI ファイルが表示されます．

## VxEditor で LaTeX (TeX -> DVI -> PDF) {#fcfb987f}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;">\[オプション\]\[自動実行\]\[文書タイプ\]</span>

> 設定

> タイトル(T):<br><ins>TeX -> DVI -> PDF</ins>

> 実行ファイル(P):<br><ins>cmd</ins>

> 作業フォルダ(F):<br><br>

> コマンドラインパラメータ(C):<br><ins>/k cd /d "$DIRPATH" &amp;&amp; eplatex -kanji=sjis -interaction=nonstopmode "$FILENAME" &amp;&amp; dvipdfmx "$NAMEONLY.dvi" &amp;&amp; "$NAMEONLY.pdf" &amp; exit</ins>

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

> ☐実行時にテキストを保存する(S)

> ショートカット(H):　<ins>Ctrl + Alt + K</ins>

***

次のうちのどれかを実行

- Ctrl + Alt + K を押す
- メニューの \[ツール(T)\] → \[TeX -> DVI -> PDF\]
- エディタ画面を右クリック → \[TeX -> DVI -> PDF\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

## VxEditor で LaTeX (TeX -> DVI -> PS -> PDF) {#v9c2efca}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;">\[オプション\]\[自動実行\]\[文書タイプ\]</span>

> 設定

> タイトル(T):<br><ins>TeX -> DVI -> PS -> PDF</ins>

> 実行ファイル(P):<br><ins>cmd</ins>

> 作業フォルダ(F):<br><br>

> コマンドラインパラメータ(C):<br><ins>/k cd /d "$DIRPATH" &amp;&amp; eplatex -kanji=sjis -interaction=nonstopmode "$FILENAME" &amp;&amp; [dvips](/dvips/) -Ppdf -z -f "$NAMEONLY.dvi" &#x7c; bkmk2uni > "$NAMEONLY.ps" &amp;&amp; ps2pdf.bat "$NAMEONLY.ps" &amp;&amp; "$NAMEONLY.pdf" &amp; exit</ins>

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

> ☐実行時にテキストを保存する(S)

> ショートカット(H):　<ins>Ctrl + Alt + L</ins>

***

次のうちのどれかを実行

- Ctrl + Alt + L を押す
- メニューの \[ツール(T)\] → \[TeX -> DVI -> PS -> PDF\]
- エディタ画面を右クリック → \[TeX -> DVI -> PS -> PDF\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．
