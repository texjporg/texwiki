---
title: "VxEditor"
url: "/VxEditor/"
date: 2010-06-14T17:09:21Z
pukiwiki: "VxEditor"
---

# VxEditor

## VxEditor {#v81da523}

### VxEditor とは {#ub092d33}

VxEditor は軽快に動作する国産でフリーのテキストエディタです。

LaTeX 環境を簡単に作ることができます。

- [ホーム - DR-X Web Page!](http://dr-x.jimdo.com/)

### VxEditor で LaTeX (TeX -> DVI -> PDF) {#fcfb987f}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(A)...\] をクリックし，「ツールのプロパティ」ウィンドウで以下の値を入力し，\[OK\] を押します。

***

<strong>\[ツール\]</strong><span style="color:Black;background-color:#EEEEEE;">\[オプション\]\[自動実行\]\[文書タイプ\]</span>

> 設定

> タイトル(T):

> TeX -> DVI -> PDF

> 実行ファイル(P):

> cmd

> 作業フォルダ(F):

> コマンドラインパラメータ(C):

> /k cd /d "$DIRPATH" &amp;&amp; eplatex "$FILENAME" &amp;&amp; dvipdfmx "$NAMEONLY.dvi" &amp;&amp; "$NAMEONLY.pdf" &amp; exit

> <span style="color:#441177;">※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると</span>

> <span style="color:#441177;">　　それらを実行することができます．</span>

<span style="color:Black;background-color:#EEEEEE;">\[ツール\]</span><strong>\[オプション\]</strong><span style="color:Black;background-color:#EEEEEE;">\[自動実行\]\[文書タイプ\]</span>

> 表示

> ☑ツールを有効にする(E)

> ☑メインメニューに表示する(M)

> ☑ポップアップメニューに表示する(P)

> ツールのグループ番号(N):　　<span style="color:Black;background-color:#EEEEEE;">\[グループ１　　　　　　▼\]</span>

> ☐ツールバーに表示する(T)

> アイコン(I):

> 起動

> ☐実行時にテキストを保存する(S)

> ショートカット(H):　Ctrl + Alt + K

***

次のうちのどれかを実行

- Ctrl + Alt + K を押す
- メニューの \[ツール(T)\] → \[TeX -> DVI -> PDF\]
- エディタ画面を右クリック → \[TeX -> DVI -> PDF\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます。
