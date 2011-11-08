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

2011年3月19日に VxEditor Ver 1.0.1 が公開されました．

- [ホーム - DR-X Web Page!](http://dr-x.jimdo.com/)
    - [ニュース](http://dr-x.jimdo.com/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9/)
    - [dr-x (vxeditor) on Twitter](http://twitter.com/vxeditor)
- [Vector - VxEditor](http://www.vector.co.jp/soft/win95/writing/se236058.html)

## 文字コード {#t4c94e06}

メニューの \[表示(V)\] → \[共通の設定(O)...\] → \[文字コード\]

UTF-8N (BOM なし), UTF-8, 日本語 SJIS, 日本語 EUC, 日本語 JIS の中から作成する LaTeX 文書に合った文字コードを選択します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">共通の設定</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 　　表示　　 \]\[ 　　編集　　 \]\[ 　　入力　　 \]\[　ウィンドウ　\]\[ 　　検索　　 \]\[ 　　書式　　 \]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　　　履歴　　　\]\[ 　　ファイル　　 \]\[ 　　フィルタ　　 \]\[ 　ダイアログ　 \]</ins></span><strong>\[ 　文字コード　 \]</strong><br>
　　　　文字コードの設定<br>

<br>

　　　　　初期文字コード(C):　　<span style="color:Black;background-color:#EEEEEE;">\[UTF-8N　　　　　　 ▼\]</span><br>
　　　　　初期改行コード(R):　　<span style="color:Black;background-color:#EEEEEE;">\[CR+LF　　　　　　　▼\]</span><br>

***

## ツール {#t542b96a}

ツールの設定をすると TeraPad と同様に，LaTeX 環境を簡単に作ることができます．

### pdfpLaTeX {#v2edf4e6}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pdfpLaTeX</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; platex -synctex=1 -guess-input-enc -jobname="$NAMEONLY" "$NAMEONLY" &amp;&amp; dvipdfmx "$NAMEONLY"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Ctrl + Alt + J</ins><br>

***

次のうちのどれかを実行

- Ctrl + Alt + J を押す
- メニューの \[ツール(T)\] → \[pdfpLaTeX\]
- エディタ画面を右クリック → \[pdfpLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pdfpLaTeX2 {#fcfb987f}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pdfpLaTeX2</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; platex -synctex=1 -guess-input-enc -jobname="$NAMEONLY" "$NAMEONLY" &amp;&amp; dvips -Ppdf -t a4 -z -f "$NAMEONLY.dvi" | bkmk2uni > "$NAMEONLY.ps" &amp;&amp; ps2pdf.bat "$NAMEONLY.ps"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Ctrl + Alt + K</ins><br>

***

次のうちのどれかを実行

- Ctrl + Alt + K を押す
- メニューの \[ツール(T)\] → \[pdfpLaTeX2\]
- エディタ画面を右クリック → \[pdfpLaTeX2\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pdfupLaTeX {#z539757a}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pdfupLaTeX</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 "$NAMEONLY" &amp;&amp; dvipdfmx "$NAMEONLY"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Shift + Alt + J</ins><br>

***

次のうちのどれかを実行

- Shift + Alt + J を押す
- メニューの \[ツール(T)\] → \[pdfupLaTeX\]
- エディタ画面を右クリック → \[pdfupLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pdfupLaTeX2 {#h1563ac2}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pdfupLaTeX2</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 "$NAMEONLY" &amp;&amp; dvips -Ppdf -t a4 -z -f "$NAMEONLY.dvi" | convbkmk -u > "$NAMEONLY.ps" &amp;&amp; ps2pdf.bat "$NAMEONLY.ps"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Shift + Alt + K</ins><br>

***

次のうちのどれかを実行

- Shift + Alt + K を押す
- メニューの \[ツール(T)\] → \[pdfupLaTeX2\]
- エディタ画面を右クリック → \[pdfupLaTeX2\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pdfLaTeX {#jef6ef8d}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pdfLaTeX</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; pdflatex -synctex=1 "$NAMEONLY"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Shift + Alt + H</ins><br>

***

次のうちのどれかを実行

- Shift + Alt + H を押す
- メニューの \[ツール(T)\] → \[pdfLaTeX\]
- エディタ画面を右クリック → \[pdfLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### LuaLaTeX {#m4ea741f}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>LuaLaTeX</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; lualatex -synctex=1 "$NAMEONLY"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Shift + Alt + U</ins><br>

***

次のうちのどれかを実行

- Shift + Alt + U を押す
- メニューの \[ツール(T)\] → \[LuaLaTeX\]
- エディタ画面を右クリック → \[LuaLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### XeLaTeX {#o8a87f15}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>XeLaTeX</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; xelatex -synctex=1 "$NAMEONLY"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Shift + Alt + I</ins><br>

***

次のうちのどれかを実行

- Shift + Alt + I を押す
- メニューの \[ツール(T)\] → \[XeLaTeX\]
- エディタ画面を右クリック → \[XeLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pBibTeX {#v9c2efca}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pBibTeX</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; pbibtex "$NAMEONLY"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Ctrl + Alt + N</ins><br>

***

次のうちのどれかを実行

- Ctrl + Alt + N を押す
- メニューの \[ツール(T)\] → \[pBibTeX\]
- エディタ画面を右クリック → \[pBibTeX\]

### upBibTeX {#y2def110}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>upBibTeX</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; upbibtex -kanji=utf8 "$NAMEONLY"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Shift + Alt + N</ins><br>

***

次のうちのどれかを実行

- Shift + Alt + N を押す
- メニューの \[ツール(T)\] → \[upBibTeX\]
- エディタ画面を右クリック → \[upBibTeX\]

### Mendex {#sfdae9af}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>Mendex</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; mendex "$NAMEONLY"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Ctrl + Alt + M</ins><br>

***

次のうちのどれかを実行

- Ctrl + Alt + M を押す
- メニューの \[ツール(T)\] → \[Mendex\]
- エディタ画面を右クリック → \[Mendex\]

### TeXworks {#r0d38b75}

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します．

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>TeXworks</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; start C:\w32tex\share\texworks\TeXworks.exe "$NAMEONLY.pdf"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ツール\]</ins></span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[自動実行\]\[文書タイプ\]</ins></span>

　　　　表示

　　　　　 ☑ツールを有効にする(E)<br>
　　　　　 ☑メインメニューに表示する(M)<br>
　　　　　 ☑ポップアップメニューに表示する(P)<br>

　　　　　　 ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span><br>

　　　　　 ☐ツールバーに表示する(T)<br>

　　　　　　 アイコン(I):<br>

　　　　起動

　　　　　 ☑実行時にテキストを保存する(S)<br>

　　　　　 ショートカット(H):　<ins>Ctrl + Alt + O</ins><br>

***

次のうちのどれかを実行

- Ctrl + Alt + O を押す
- メニューの \[ツール(T)\] → \[TeXworks\]
- エディタ画面を右クリック → \[TeXworks\]

## スクリプト {#xc599345}

### Happy {#h82187a0}

- [Happy](http://www.u-gakugei.ac.jp/~takizawa/Happy/)
    - HappyInput (TeX 入力支援スクリプト)
    - HappyTeX (TeX タイプセット＆プレビュー支援スクリプト)

## Adobe Reader との連携 {#sc092542}

### pdfpLaTeXA {#p012d18c}

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pdfpLaTeXA</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; platex -guess-input-enc -jobname="$NAMEONLY" "$NAMEONLY" &amp;&amp; dvipdfmx "$NAMEONLY" &amp;&amp; pdfopen --file "$NAMEONLY.pdf"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

### pdfpLaTeX2A {#h36e49e9}

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pdfpLaTeX2A</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; platex -guess-input-enc -jobname="$NAMEONLY" "$NAMEONLY" &amp;&amp; dvips -Ppdf -t a4 -z -f "$NAMEONLY.dvi" | bkmk2uni > "$NAMEONLY.ps" &amp;&amp; ps2pdf.bat "$NAMEONLY.ps" &amp;&amp; pdfopen --file "$NAMEONLY.pdf"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

### pdfupLaTeXA {#x56aa2c5}

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pdfupLaTeXA</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; uplatex -no-guess-input-enc -kanji=utf8 "$NAMEONLY" &amp;&amp; dvipdfmx "$NAMEONLY" &amp;&amp; pdfopen --file "$NAMEONLY.pdf"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

### pdfupLaTeX2A {#fa6daa54}

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pdfupLaTeX2A</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; uplatex -no-guess-input-enc -kanji=utf8 "$NAMEONLY" &amp;&amp; dvips -Ppdf -t a4 -z -f "$NAMEONLY.dvi" | convbkmk -u > "$NAMEONLY.ps" &amp;&amp; ps2pdf.bat "$NAMEONLY.ps" &amp;&amp; pdfopen --file "$NAMEONLY.pdf"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

### pdfLaTeXA {#dbb7593c}

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>pdfLaTeXA</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; pdflatex "$NAMEONLY" &amp;&amp; pdfopen --file "$NAMEONLY.pdf"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

### LuaLaTeXA {#l425f0aa}

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>LuaLaTeXA</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; lualatex "$NAMEONLY" &amp;&amp; pdfopen --file "$NAMEONLY.pdf"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

### XeLaTeXA {#c6473a8d}

***

<span style="color:Black;background-color:#F51010;"><ins>　<span style="color:White;">ツールのプロパティ</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[オプション\]\[自動実行\]\[文書タイプ\]</ins></span>

　　　　設定

　　　　　タイトル(T):<br>
　　　　　<ins>XeLaTeXA</ins><br>

<br>

　　　　　実行ファイル(P):<br>
　　　　　<ins>cmd</ins><br>

<br>

　　　　　作業フォルダ(F):<br>

<br>

　　　　　コマンドラインパラメータ(C):<br>
　　　　　<ins>/c cd /d "$DIRPATH" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; xelatex "$NAMEONLY" &amp;&amp; pdfopen --file "$NAMEONLY.pdf"</ins><br>

<br>

　　　　　　<span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span><br>
　　　　　　<span style="color:#441177;">　　それらを実行することができます．</span><br>

***

## SumatraPDF との連携 (inverse search) {#a69fbb89}

```
C:\VxEditor\VxEditor.exe /j%l "%f"
```

## dviout との連携 (inverse search) {#ld52941a}

```
C:\VxEditor\VxEditor.exe^s /j%d "%s"
```
