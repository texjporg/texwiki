---
title: "TeraPad"
url: "/TeraPad/"
date: 2010-06-06T09:08:18Z
pukiwiki: "TeraPad"
---

# TeraPad

## [TeraPad](http://www5f.biglobe.ne.jp/~t-susumu/library/tpad.html) {#g9e6153d}

<img src="http://profile.ak.fbcdn.net/hprofile-ak-snc4/hs1312.snc4/174760_127662703966894_2323052_n.jpg" alt="TeraPad" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## TeraPad とは {#wda2a461}

TeraPad は Windows 7, Vista, XP, 2000, NT4, Me, 98, 95 で動作する国産でフリーのシンプルなテキストエディタです．

テキストエディタとして必要十分な機能があり，バランスがよく，使いやすいエディタです．

2011年2月17日に TeraPad Ver.1.08 が公開されました．<br>
TeraPad Ver.0.93 およびそれ以前には [TeraPad における DLL 読み込みに関する脆弱性](http://jvn.jp/jp/JVN48097065/) が存在します．<br>
最新版へアップデートしてください．

- [公式サイト - ToClip for Windows](http://www5f.biglobe.ne.jp/~t-susumu/)
    - [TeraPad](http://www5f.biglobe.ne.jp/~t-susumu/library/tpad.html)
        - [更新履歴](http://www5f.biglobe.ne.jp/~t-susumu/dl/tpad/History.txt)
            <!-- - -[[TeraPad ベータ版:http://www5f.biglobe.ne.jp/~t-susumu/library/tpadbeta.html]] -->
    - [TeraPad (terapad) on Twitter](http://twitter.com/terapad)
    - [「TeraPad」公式ファンページ | Facebook](http://www.facebook.com/terapad)
- [窓の杜 - TeraPad](http://www.forest.impress.co.jp/lib/offc/document/txteditor/terapad.html)
- [Vector - TeraPad](http://www.vector.co.jp/soft/win95/writing/se104390.html)

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　</ins></span>[<img src="http://a0.twimg.com/profile_images/1147080548/tpad_bigger.gif" alt="TeraPad (terapad) on Twitter" width="28" height="28">](http://twitter.com/terapad)<span style="color:Black;background-color:#ACCEFE;"><ins>　terapad.tex - TeraPad　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#9CBEEE;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#9CBEEE;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル(F)　 編集(E)　 検索(S)　 表示(V)　 ウィンドウ(W)　 ツール(T)　 ヘルプ(H)　　　</ins></span><br>

```
\documentclass[12pt,papersize]{jsarticle}
%
\usepackage{atbegshi}
\ifnum 42146=\euc"A4A2
  \AtBeginShipoutFirst{\special{pdf:tounicode EUC-UCS2}}
\else
  \AtBeginShipoutFirst{\special{pdf:tounicode 90ms-RKSJ-UCS2}}
\fi
\usepackage[dvipdfmx]{hyperref}
\hypersetup{%
  bookmarksnumbered=true,%
  colorlinks=true,%
  setpagesize=false,%
  pdftitle={TeraPad について}}
\pagestyle{empty}
%
\begin{document}
%
\section{TeraPad について}
TeraPad はシンプルなテキストエディタです。主な機能は下記の通りです。
%
\begin{itemize}
  \item 行番号, 桁ルーラー表示
  \item 画面分割
  \item D \& D 編集
  \item IME の再変換に対応
  \item 元に戻す, やり直し (64 ～ 10000 回の範囲で設定可能)
  \item HTML, Perl, PHP, CSS, Ruby, C/C\verb-++-, VB, Delphi などの各種編集モード
  \item 引用行のカラー表示 (「\textgreater」「＞」など任意の引用符を設定可能)
  \item URL, メールアドレスのカラー表示と関連付けされたソフトの起動
  \item 外部プログラムの起動 (コマンドラインへファイルパスを渡せる)
  \item DDE 通信による WWW ブラウザでのプレビュー機能
  \item TAB, 全角空白, 改行, [EOF] マークの表示
  \item 矩形選択
  \item 禁則処理
  \item 標準入力の取り込み
  \item TAB, 空白インデント編集 (矩形選択時も可能)
  \item 文字コードの自動認識 (認識したコードで保存可能)
  \item 排他制御
  \item 検索, 置換機能
  \item オートインデント (Shift で切替可能)
  \item テキストの印刷 (コマンドラインパラメータ「/p」で印刷可能)
  \item 印刷プレビュー
\end{itemize}
%
\end{document}
```

***

## ツール {#w029960e}

ツールの設定をすると VxEditor と同様に，LaTeX 環境を簡単に作ることができます．

### pdfpLaTeX {#m290fc57}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#q70367f0}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfpLaTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; platex -synctex=1 -guess-input-enc -jobname="%b" "%b" &amp;&amp; dvipdfmx "%b"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Ctrl + Alt + J</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#v07dc464}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfpLaTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){platex -synctex=1 -guess-input-enc -jobname="%b" "%b"};if($?){dvipdfmx "%b"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Ctrl + Alt + J</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Ctrl + Alt + J を押す
- メニューの \[ツール(T)\] → \[pdfpLaTeX\]
- エディタ画面を右クリック → \[ツール(S)\] → \[pdfpLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

#### 簡単なテスト {#t51caf81}

1. 「TeraPad とは」 に書かれている手打ちスクリーンショットの文書をコピーして TeraPad に貼り付け， terapad.tex という名前で保存します．
1. Ctrl + Alt + J を押すと PDF ファイルが作成されます．
1. もう一度 Ctrl + Alt + J を押すと，今度はしおり付きの PDF ファイルが作成されます．[hyperref](/hyperref/) パッケージを使って，しおりを作成するためには2回コンパイルが必要です．

### pdfpLaTeX2 {#g1f54992}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#i301c321}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfpLaTeX2</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; platex -synctex=1 -guess-input-enc -jobname="%b" "%b" &amp;&amp; dvips -Ppdf -t a4 -z -f "%b.dvi" | bkmk2uni > "%b.ps" &amp;&amp; ps2pdf.bat "%b.ps"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Ctrl + Alt + K</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#l185cbd0}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfpLaTeX2</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){platex -synctex=1 -guess-input-enc -jobname="%b" "%b"};if($?){dvips -Ppdf -t a4 -z -f "%b.dvi" | bkmk2uni > "$b.ps"};if($?){ps2pdf.bat "%b.ps"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Ctrl + Alt + K</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Ctrl + Alt + K を押す
- メニューの \[ツール(T)\] → \[pdfpLaTeX2\]
- エディタ画面を右クリック → \[ツール(S)\] → \[pdfpLaTeX2\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pdfupLaTeX {#w969cf5c}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#z095ad6b}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfupLaTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 "%b" &amp;&amp; updvipdfmx "%b"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + J</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#p6a3e1f4}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfupLaTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 "%b"};if($?){updvipdfmx "%b"};if($?){pdfopen --file "%b.pdf"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + J</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Shift + Alt + J を押す
- メニューの \[ツール(T)\] → \[pdfupLaTeX\]
- エディタ画面を右クリック → \[ツール(S)\] → \[pdfupLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pdfupLaTeX2 {#b29609f2}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#k7839715}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfupLaTeX2</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 "%b" &amp;&amp; dvips -Ppdf -t a4 -z -f "%b.dvi" | convbkmk -u > "%b.ps" &amp;&amp; ps2pdf.bat "%b.ps"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + K</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#b555c069}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfupLaTeX2</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 "%b"};if($?){dvips -Ppdf -t a4 -z -f "%b.dvi" | convbkmk -u > "$b.ps"};if($?){ps2pdf.bat "%b.ps"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + K</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Shift + Alt + K を押す
- メニューの \[ツール(T)\] → \[pdfupLaTeX2\]
- エディタ画面を右クリック → \[ツール(S)\] → \[pdfupLaTeX2\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pdfLaTeX {#m56b7465}

<em>※注意</em>

> <em>欧文専用です．日本語は使えません．</em>

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#xf0ea728}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfLaTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; pdflatex -synctex=1 "%b"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + H</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#d4bff0d2}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfLaTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){pdflatex -synctex=1 "%b"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + H</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Shift + Alt + H を押す
- メニューの \[ツール(T)\] → \[pdfLaTeX\]
- エディタ画面を右クリック → \[ツール(S)\] → \[pdfLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### LuaLaTeX {#qf42e8ee}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#g9fbb354}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>LuaLaTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; lualatex -synctex=1 "%b"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + U</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#m064f668}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>LuaLaTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){lualatex -synctex=1 "%b"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + U</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Shift + Alt + U を押す
- メニューの \[ツール(T)\] → \[LuaLaTeX\]
- エディタ画面を右クリック → \[ツール(S)\] → \[LuaLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### XeLaTeX {#h71b9f3f}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#je4f0b18}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>XeLaTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; xelatex -synctex=1 "%b"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + I</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#nd955694}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>XeLaTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){xelatex -synctex=1 "%b"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + I</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Shift + Alt + I を押す
- メニューの \[ツール(T)\] → \[XeLaTeX\]
- エディタ画面を右クリック → \[ツール(S)\] → \[XeLaTeX\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます．

### pBibTeX {#h42e3045}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#t22fd540}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pBibTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; pbibtex "%b"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Ctrl + Alt + N</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#z401ef69}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pBibTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){pbibtex "%b"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Ctrl + Alt + N</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Ctrl + Alt + N を押す
- メニューの \[ツール(T)\] → \[pBibTeX\]
- エディタ画面を右クリック → \[ツール(S)\] → \[pBibTeX\]

### upBibTeX {#tc3ac5c3}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#xa63a06b}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>upBibTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; upbibtex -kanji=utf8 "%b"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + N</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#wda28ead}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>upBibTeX</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){upbibtex -kanji=utf8 "%b"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Shift + Alt + N</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Shift + Alt + N を押す
- メニューの \[ツール(T)\] → \[upBibTeX\]
- エディタ画面を右クリック → \[ツール(S)\] → \[upBibTeX\]

### Mendex {#z894a071}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#qcd58ada}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>Mendex</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; mendex "%b"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Ctrl + Alt + M</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#xb8cd138}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>Mendex</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){mendex "%b"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Ctrl + Alt + M</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Ctrl + Alt + M を押す
- メニューの \[ツール(T)\] → \[Mendex\]
- エディタ画面を右クリック → \[ツール(S)\] → \[Mendex\]

### TeXworks {#k4cd79b6}

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして，「ツールの編集」で以下の値を入力し，\[OK\] を押します．

#### cmd の場合 {#cf0e929e}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>TeXworks</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; start C:\w32tex\share\texworks\TeXworks.exe "%b.pdf"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Ctrl + Alt + O</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#ma45fff4}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>TeXworks</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){start C:\w32tex\share\texworks\TeXworks.exe "%b.pdf"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>　<ins>Ctrl + Alt + O</ins>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

次のうちのどれかを実行

- Ctrl + Alt + O を押す
- メニューの \[ツール(T)\] → \[TeXworks\]
- エディタ画面を右クリック → \[ツール(S)\] → \[TeXworks\]

## スクリプト {#d597deba}

### Happy {#mf4ce610}

- [Happy](http://www.u-gakugei.ac.jp/~takizawa/Happy/)
    - HappyInput (TeX 入力支援スクリプト)
    - HappyTeX (TeX タイプセット＆プレビュー支援スクリプト)

## Adobe Reader との連携 {#gd42a4e2}

### pdfpLaTeXA {#dbd7e90b}

#### cmd の場合 {#b2756725}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfpLaTeXA</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; platex -guess-input-enc -jobname="%b" "%b" &amp;&amp; dvipdfmx "%b" &amp;&amp; pdfopen --file "%b.pdf"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#pd27ea7d}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfpLaTeXA</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){Get-Process -Name AcroRd32 | Select-String AcroRd32 | Out-Null};if($?){echo exit | pdfdde} &amp; platex -guess-input-enc -jobname="%b" "%b";if($?){dvipdfmx "%b"};if($?){pdfopen --file "%b.pdf"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

### pdfpLaTeX2A {#m2f097ca}

#### cmd の場合 {#xc83d946}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfpLaTeX2A</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; platex -guess-input-enc -jobname="%b" "%b" &amp;&amp; dvips -Ppdf -t a4 -z -f "%b.dvi" | bkmk2uni > "%b.ps" &amp;&amp; ps2pdf.bat "%b.ps" &amp;&amp; pdfopen --file "%b.pdf"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#g11b580d}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfpLaTeX2A</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){Get-Process -Name AcroRd32 | Select-String AcroRd32 | Out-Null};if($?){echo exit | pdfdde} &amp; platex -guess-input-enc -jobname="%b" "%b";if($?){dvips -Ppdf -t a4 -z -f "%b.dvi" | bkmk2uni > "$b.ps"};if($?){ps2pdf.bat "%b.ps"};if($?){pdfopen --file "%b.pdf"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

### pdfupLaTeXA {#b3c1e6f0}

#### cmd の場合 {#d8d6005a}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfupLaTeXA</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; uplatex -no-guess-input-enc -kanji=utf8 "%b" &amp;&amp; updvipdfmx "%b" &amp;&amp; pdfopen --file "%b.pdf"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#ead7e722}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfupLaTeXA</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){Get-Process -Name AcroRd32 | Select-String AcroRd32 | Out-Null};if($?){echo exit | pdfdde} &amp; uplatex -no-guess-input-enc -kanji=utf8 "%b";if($?){updvipdfmx "%b"};if($?){pdfopen --file "%b.pdf"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

### pdfupLaTeX2A {#k1e6741b}

#### cmd の場合 {#p53490ba}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfupLaTeX2A</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; uplatex -no-guess-input-enc -kanji=utf8 "%b" &amp;&amp; dvips -Ppdf -t a4 -z -f "%b.dvi" | convbkmk -u > "%b.ps" &amp;&amp; ps2pdf.bat "%b.ps" &amp;&amp; pdfopen --file "%b.pdf"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#ua082538}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfupLaTeX2A</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){Get-Process -Name AcroRd32 | Select-String AcroRd32 | Out-Null};if($?){echo exit | pdfdde} &amp; uplatex -no-guess-input-enc -kanji=utf8 "%b";if($?){dvips -Ppdf -t a4 -z -f "%b.dvi" | convbkmk -u > "$b.ps"};if($?){ps2pdf.bat "%b.ps"};if($?){pdfopen --file "%b.pdf"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

### pdfLaTeXA {#c03ffc44}

#### cmd の場合 {#lb5f37ba}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfLaTeXA</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; pdflatex "%b" &amp;&amp; pdfopen --file "%b.pdf"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#l60b27e5}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>pdfLaTeXA</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){Get-Process -Name AcroRd32 | Select-String AcroRd32 | Out-Null};if($?){echo exit | pdfdde} &amp; pdflatex "%b";if($?){pdfopen --file "%b.pdf"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

### LuaLaTeXA {#v7f75ca1}

#### cmd の場合 {#ke666731}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>LuaLaTeXA</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; lualatex "%b" &amp;&amp; pdfopen --file "%b.pdf"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#u5c29a7e}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>LuaLaTeXA</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){Get-Process -Name AcroRd32 | Select-String AcroRd32 | Out-Null};if($?){echo exit | pdfdde} &amp; lualatex "%b";if($?){pdfopen --file "%b.pdf"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

### XeLaTeXA {#he3358fc}

#### cmd の場合 {#qd1c24d7}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>XeLaTeXA</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>cmd</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>/c cd /d "%d" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; echo exit | pdfdde &amp; xelatex "%b" &amp;&amp; pdfopen --file "%b.pdf"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

#### Windows PowerShell の場合 {#h4b222d3}

***

<span style="color:Black;background-color:#ACCEFE;"><ins>　ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]</span> </ins></span><br>

　　　 名前\["-"は区切り線\](N):<br>
　　　 <ins>XeLaTeXA</ins>

　　　 実行ファイル(E):<br>
　　　 <ins>PowerShell</ins>

　　　 コマンドラインパラメータ(C):<br>
　　　 <ins>-Command "&amp; {cd "%d";if($?){Get-Process -Name AcroRd32 | Select-String AcroRd32 | Out-Null};if($?){echo exit | pdfdde} &amp; xelatex "%b";if($?){pdfopen --file "%b.pdf"}}"</ins>

　　　 作業フォルダ(D):<br>

<br>

　　　 ファイルの上書き保存(S):　　　　 キー(K):<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[上書き保存する　　　　　　　▼\]</span>

　　　 ☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)<br>
　　　 ☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)<br>
　　　 ☐終了まで待機する(L)

***

## SumatraPDF との連携 (inverse search) {#kdd43a4c}

```
C:\tpad108\TeraPad.exe /jl=%l "%f"
```

## dviout との連携 (inverse search) {#u00a74a2}

```
C:\tpad108\TeraPad.exe^s /jl=%d "%s"
```

## 参考サイト {#n06fef85}

- [TeraPad ツールについて](http://www5f.biglobe.ne.jp/~t-susumu/library/tptoolmn.html)
- [コマンドプロンプトを使う](http://wiki.livedoor.jp/niloufar/d/%A5%B3%A5%DE%A5%F3%A5%C9%A5%D7%A5%ED%A5%F3%A5%D7%A5%C8%A4%F2%BB%C8%A4%A6)
- [TeraPad から LaTeX のコンパイルをする方法](http://d.hatena.ne.jp/hiratake55/20090710)
    (hiratake55 さん)

- [Terapadで作るLaTeX統合環境](http://za.toypark.in/html/2003/12-06.html)
    (綾小路 龍之介 さん) ライセンスは GNU Free Documentation License．

- [Eee PC 901 にも TeX 環境](http://ngc1952.net/archives/category/tex)
- [2011.3.8 - Maidsphere // メイドスフィア](http://www.maidsphere.jp/archive/20110308)

## TeraPad で 表の作成 {#p12e5284}

- [USBメモリ活用講座【付録・Excel/Calcの表のtabular形式への変換法】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/tp2tbl.shtml)
- [簡単な表の作成方法　－TeraPadを用いて－](http://homepage2.nifty.com/nandemoarchive/latex/kowaza_01.htm)

## TeraPad の背景の色を黒にして文字の色を白にする {#ve550d2a}

- [TeraPadを黒背景で使う。](http://njmkktkg.blogspot.com/2009/09/terapad.html)

## TeraPad のポータブル化 {#vcc9c530}

- [USBメモリ活用講座【基礎編・TeraPadのポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/misc/terapad.shtml)
- [C言語開発/TeX組版環境のポータブル化とUSBウィルス対策について (PDF)](http://info.numazu-ct.ac.jp/comm01/include/netcommons_file.php?path=/announcement/1/ipe2009p223takahashi.pdf)

## TeraPad 用ツール {#s85f97e6}

- [TeraPad Tools](http://www5f.biglobe.ne.jp/~t-susumu/library/tptools.html)
- [Vector：ダウンロード Windows &gt; 文書作成 &gt; テキストエディタ &gt; TeraPad](http://www.vector.co.jp/vpack/filearea/win/writing/edit/terapad/)
- [TpBkGen](http://sites.google.com/site/yosibe1003/terapadtool/tpbkgen)
    日付･時刻毎に別々のバックアップファイルを作成
