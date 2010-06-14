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

\[追加(A)...\] をクリックし，ツールのプロパティに以下の値を入力し，\[OK\] を押す。

***

<strong>\[ツール\]</strong>\[オプション\]\[自動実行\]\[文書タイプ\]

> 設定

> タイトル(T):

> TeX -> DVI -> PDF

> 実行ファイル(P):

> cmd

> 作業フォルダ(F):

> コマンドラインパラメータ(C):

> /k cd /d $DIRPATH &amp;&amp; eplatex $FILEPATH &amp;&amp; dvipdfmx $NAMEONLY.dvi &amp;&amp; $NAMEONLY.pdf &amp; exit

> ※ 実行ファイルにキーマクロファイルやスクリプトファイルを指定すると

> それらを実行することができます．

\[ツール\]<strong>\[オプション\]</strong>\[自動実行\]\[文書タイプ\]

> 表示

> ☑ツールを有効にする(E)

> ☑メインメニューに表示する(M)

> ☑ポップアップメニューに表示する(P)

> ツールのグループ番号(N):　　\[グループ１　　　　　　▼\]

> ☐ツールバーに表示する(T)

> アイコン(I):

> 起動

> ☐実行時にテキストを保存する(S)

> ショートカット(H):　Ctrl + Alt + K

***
