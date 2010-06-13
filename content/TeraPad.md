---
title: "TeraPad"
url: "/TeraPad/"
date: 2010-06-06T09:08:18Z
pukiwiki: "TeraPad"
---

# TeraPad

## TeraPad {#g9e6153d}

### TeraPad とは {#wda2a461}

TeraPad は国産でフリーのシンプルなテキストエディタです。

テキストエディタとして必要十分な機能があり，非常にバランスのよいエディタです。

LaTeX 環境も簡単に作ることができます。

- [公式サイト - ToClip for Windows](http://www5f.biglobe.ne.jp/~t-susumu/)
- [Vector - TeraPad](http://www.vector.co.jp/soft/win95/writing/se104390.html)
- [窓の杜 - TeraPad](http://www.forest.impress.co.jp/lib/offc/document/txteditor/terapad.html)

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

<img src="http://www5f.biglobe.ne.jp/~t-susumu/image/tpadicon.gif" alt="" width="20" height="20">

<span style="color:Black;background-color:#BBBBFF;">terapad.tex - TeraPad</span>

<div style="clear:both"></div>

<span style="color:Black;background-color:Silver;">ファイル(F)　 編集(E)　 検索(S)　 表示(V)　 ウィンドウ(W)　 ツール(T)　 ヘルプ(H)</span>

```
\documentclass[12pt]{jsarticle}
```

```
\usepackage{atbegshi}
\ifnum 42146=\euc"A4A2 \AtBeginShipoutFirst{\special{pdf:tounicode EUC-UCS2}}\else
\AtBeginShipoutFirst{\special{pdf:tounicode 90ms-RKSJ-UCS2}}\fi
\usepackage[dvipdfmx]{hyperref}
\hypersetup{pdftitle={TeraPad について}}
```

```
\begin{document}
\section{TeraPad について}
TeraPad はシンプルなテキストエディタです。主な機能は下記の通りです。
\begin{itemize}
\item
 行番号, 桁ルーラー表示
\item
 画面分割
\item
 D\&D 編集
\item
 IME の再変換に対応
\item
 元に戻す, やり直し (64～10000回の範囲で設定可能)
\item
 HTML, Perl, Ruby, C/C\verb-++-, VB, Delphi などの各種編集モード
\item
 引用行のカラー表示 (「\textgreater」「＞」など任意の引用符を設定可能)
\item
 URL, メールアドレスのカラー表示と関連付けされたソフトの起動
\item
 外部プログラムの起動 (コマンドラインへファイルパスを渡せる)
\item
 DDE 通信による WWW ブラウザでのプレビュー機能
\item
 TAB, 全角空白, 改行, [EOF] マークの表示
\item
 矩形選択
\item
 禁則処理
\item
 標準入力の取り込み
\item
 TAB, 空白インデント編集 (矩形選択時も可能)
\item
 文字コードの自動認識 (認識したコードで保存可能)
\item
 排他制御
\item
 検索, 置換機能
\item
 オートインデント (Shiftで切替可能)
\item
 テキストの印刷 (コマンドラインパラメータ「/p」で印刷可能)
\item
 印刷プレビュー
\end{itemize}
\end{document}
```

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

### TeraPad で LaTeX (TeX -> PDF) {#m56b7465}

<em>※注意</em>

> <em>欧文専用です。日本語は使えません。</em>

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして以下の値を入力し，\[OK\] を押す。

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

<span style="color:Black;background-color:Silver;">ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☒</span>

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

名前\["-"は区切り線\](N):

<table>
<tbody>
<tr><td>TeX -&gt; PDF　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td></tr>
</tbody>
</table>

実行ファイル(E):

<table>
<tbody>
<tr><td>cmd /K pdflatex　　　　　　　　　　　　　　　　　　　　　　　　　　　　 　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

コマンドラインパラメータ(C):

<table>
<tbody>
<tr><td>%n &amp;&amp; %b.pdf &amp; exit　 　　　　　　　　　　　　　　　　　　　　　　　　　　　</td><td style="background-color:#EEE">　&gt;　</td></tr>
</tbody>
</table>

作業フォルダ(D):

<table>
<tbody>
<tr><td>%d　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

ファイルの上書き保存(S):　　　　　キー(K):

<table>
<tbody>
<tr><td style="background-color:#EEE">上書き保存しない　　　　　　　▼</td><td>Ctrl + Alt + H　　　　　　　　　　　　</td></tr>
</tbody>
</table>

☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)

☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)

☐終了まで待機する(L)

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span>

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

次のうちのどれかを実行

- Ctrl + Alt + H を押す
- メニューの \[ツール(T)\] → \[TeX -> PDF\]
- エディタ画面を右クリック → \[ツール(S)\] → \[TeX -> PDF\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます。

### TeraPad で LaTeX (TeX -> DVI) {#m290fc57}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして以下の値を入力し，\[OK\] を押す。

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

<span style="color:Black;background-color:Silver;">ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☒</span>

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

名前\["-"は区切り線\](N):

<table>
<tbody>
<tr><td>TeX -&gt; DVI　　　　　　　 　　　　　　　　　　　　　　　　　　　　　　　　　　</td></tr>
</tbody>
</table>

実行ファイル(E):

<table>
<tbody>
<tr><td>cmd /K eplatex　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

コマンドラインパラメータ(C):

<table>
<tbody>
<tr><td>%n &amp;&amp; %b.dvi &amp; exit 　 　　　　　　　　　　　　　　　　　　　　　　　　　　　</td><td style="background-color:#EEE">　&gt;　</td></tr>
</tbody>
</table>

作業フォルダ(D):

<table>
<tbody>
<tr><td>%d　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

ファイルの上書き保存(S):　　　　　キー(K):

<table>
<tbody>
<tr><td style="background-color:#EEE">上書き保存しない　　　　　　　▼</td><td>Ctrl + Alt + J　　　　　　　　　　　　</td></tr>
</tbody>
</table>

☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)

☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)

☐終了まで待機する(L)

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span>

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

次のうちのどれかを実行

- Ctrl + Alt + J を押す
- メニューの \[ツール(T)\] → \[TeX -> DVI\]
- エディタ画面を右クリック → \[ツール(S)\] → \[TeX -> DVI\]

TeX ファイルがコンパイルされ DVI ファイルが表示されます。

### TeraPad で LaTeX (TeX -> DVI -> PDF) {#g1f54992}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして以下の値を入力し，\[OK\] を押す。

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

<span style="color:Black;background-color:Silver;">ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☒</span>

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

名前\["-"は区切り線\](N):

<table>
<tbody>
<tr><td>TeX -&gt; DVI -&gt; PDF　　　 　　　　　　　　　　　　　　　　　　　　　　　　　</td></tr>
</tbody>
</table>

実行ファイル(E):

<table>
<tbody>
<tr><td>cmd /K eplatex　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

コマンドラインパラメータ(C):

<table>
<tbody>
<tr><td>%n &amp;&amp; dvipdfmx %b.dvi &amp;&amp; %b.pdf &amp; exit　 　　　　　　　　　　　　　　　</td><td style="background-color:#EEE">　&gt;　</td></tr>
</tbody>
</table>

作業フォルダ(D):

<table>
<tbody>
<tr><td>%d　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

ファイルの上書き保存(S):　　　　　キー(K):

<table>
<tbody>
<tr><td style="background-color:#EEE">上書き保存しない　　　　　　　▼</td><td>Ctrl + Alt + K　　　　　　　　　　　　</td></tr>
</tbody>
</table>

☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)

☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)

☐終了まで待機する(L)

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span>

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

次のうちのどれかを実行

- Ctrl + Alt + K を押す
- メニューの \[ツール(T)\] → \[TeX -> DVI -> PDF\]
- エディタ画面を右クリック → \[ツール(S)\] → \[TeX -> DVI -> PDF\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます。

- 簡単なテスト

1. 「TeraPad とは」 に書かれている手書きスクリーンショットの文書をコピーして TeraPad に貼り付け， terapad.tex という名前で保存します。
1. Ctrl + Alt + K を押すと PDF ファイルが作成され，表示されます。
1. PDF ビューアを閉じて，もう一度 Ctrl + Alt + K を押すと，今度はしおり付きの PDF ファイルが作成され，表示されます。しおりを作成するためには2回コンパイルが必要です。

### TeraPad で LaTeX (TeX -> DVI -> PS -> PDF) {#h42e3045}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして以下の値を入力し，\[OK\] を押す。

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

<span style="color:Black;background-color:Silver;">ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☒</span>

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

名前\["-"は区切り線\](N):

<table>
<tbody>
<tr><td>TeX -&gt; DVI -&gt; PS -&gt; PDF　　　　　　　　　　　　　　　　　　　　　　　　</td></tr>
</tbody>
</table>

実行ファイル(E):

<table>
<tbody>
<tr><td>cmd /K eplatex　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

コマンドラインパラメータ(C):

<table>
<tbody>
<tr><td>%n &amp;&amp; dvips -Ppdf -z -f %b.dvi &#x7c; bkmk2uni &gt; %b.ps &amp;&amp; ps2pdf.bat %b.ps &amp;&amp; %b.pdf &amp; exit</td><td style="background-color:#EEE">　&gt;　</td></tr>
</tbody>
</table>

作業フォルダ(D):

<table>
<tbody>
<tr><td>%d　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

ファイルの上書き保存(S):　　　　　キー(K):

<table>
<tbody>
<tr><td style="background-color:#EEE">上書き保存しない　　　　　　　▼</td><td>Ctrl + Alt + L　　　　　　　　　　　　</td></tr>
</tbody>
</table>

☐非選択時は使用不可(H)　　　 ☑メインメニューに表示(M)

☐起動時に実行(T)　　　　　　　　☑ポップアップメニューに表示(P)

☐終了まで待機する(L)

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span>

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

次のうちのどれかを実行

- Ctrl + Alt + L を押す
- メニューの \[ツール(T)\] → \[TeX -> DVI -> PS -> PDF\]
- エディタ画面を右クリック → \[ツール(S)\] → \[TeX -> DVI -> PS -> PDF\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます。

### TeraPad で LaTeX の環境を構築するのに参考にしたサイト {#n06fef85}

- [TeraPad ツールについて](http://www5f.biglobe.ne.jp/~t-susumu/library/tptoolmn.html)
- [コマンドプロンプトを使う](http://wiki.livedoor.jp/niloufar/d/%A5%B3%A5%DE%A5%F3%A5%C9%A5%D7%A5%ED%A5%F3%A5%D7%A5%C8%A4%F2%BB%C8%A4%A6)
- [TeraPad から LaTeX のコンパイルをする方法](http://d.hatena.ne.jp/hiratake55/20090710)
    (hiratake55 さん)

- [Terapadで作るLaTeX統合環境](http://zatugakuou.hp.infoseek.co.jp/LaTeXIntegratedEnvironmentOnTerapad.html)
    (綾小路 龍之介 さん) ライセンスは GNU Free Documentation License。

- [Eee PC 901 にも TeX 環境](http://ngc1952.net/archives/category/tex)

### TeraPad で 表の作成 {#p12e5284}

- [USBメモリ活用講座【付録・Excel/Calcの表のtabular形式への変換法】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/tp2tbl.shtml)
- [簡単な表の作成方法　－TeraPadを用いて－](http://homepage2.nifty.com/nandemoarchive/latex/kowaza_01.htm)

### TeraPad の背景の色を黒にして文字の色を白にする {#ve550d2a}

- [TeraPadを黒背景で使う。](http://njmkktkg.blogspot.com/2009/09/terapad.html)

### TeraPad のポータブル化 {#vcc9c530}

- [USBメモリ活用講座【基礎編・TeraPadのポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/misc/terapad.shtml)
- [C言語開発/TeX組版環境のポータブル化とUSBウィルス対策について (PDF)](http://info.numazu-ct.ac.jp/comm01/include/netcommons_file.php?path=/announcement/1/ipe2009p223takahashi.pdf)

### TeraPad 用ツール {#s85f97e6}

- [TeraPad Tools](http://www5f.biglobe.ne.jp/~t-susumu/library/tptools.html)
- [TpBkGen](http://sites.google.com/site/yosibe1003/terapadtool/tpbkgen)
    日付･時刻毎に別々のバックアップファイルを作成
