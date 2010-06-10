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

### TeraPad で LaTeX (TeX -> PDF) {#m56b7465}

<em>※注意</em>

> <em>欧文専用です。日本語は使えません。</em>

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして以下の値を入力し，\[OK\] を押す。

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☒

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

名前\["-"は区切り線\](N):

<table>
<tbody>
<tr><td>TeX -&gt; PDF　　　　　　　 　　　　　　　　　　　　　　　　　　　　　　　　　　</td></tr>
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
<tr><td>%n &amp; %b.pdf &amp; exit　　　　　　　　　　　　　　　　　　　　　　　　　　　 　　</td><td style="background-color:#EEE">　&gt;　</td></tr>
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

☐ 非選択時は使用不可(H)　　　 ☑ メインメニューに表示(M)

☐ 起動時に実行(T)　　　　　　　　☑ ポップアップメニューに表示(P)

☐ 終了まで待機する(L)

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

　　　　　　　　　　　　　　　　　　　　　　　\[　　　　OK　　　　\]　\[　　キャンセル　　\]

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

次のうちのどちらかを実行

- メニューの \[ツール(T)\] → \[TeX -> PDF\]
- エディタ画面を右クリック → \[ツール(S)\] → \[TeX -> PDF\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます。

### TeraPad で LaTeX (TeX -> DVI) {#m290fc57}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして以下の値を入力し，\[OK\] を押す。

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☒

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

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
<tr><td>cmd /K platex　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

コマンドラインパラメータ(C):

<table>
<tbody>
<tr><td>%n &amp; %b.dvi &amp; exit　　　　　　　　　　　　　　　　　　　　　　　　　　　 　　</td><td style="background-color:#EEE">　&gt;　</td></tr>
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

☐ 非選択時は使用不可(H)　　　 ☑ メインメニューに表示(M)

☐ 起動時に実行(T)　　　　　　　　☑ ポップアップメニューに表示(P)

☐ 終了まで待機する(L)

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

　　　　　　　　　　　　　　　　　　　　　　　\[　　　　OK　　　　\]　\[　　キャンセル　　\]

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

次のうちのどちらかを実行

- メニューの \[ツール(T)\] → \[TeX -> DVI\]
- エディタ画面を右クリック → \[ツール(S)\] → \[TeX -> DVI\]

TeX ファイルがコンパイルされ DVI ファイルが表示されます。

### TeraPad で LaTeX (TeX -> DVI -> PDF) {#g1f54992}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして以下の値を入力し，\[OK\] を押す。

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☒

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

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
<tr><td>cmd /K platex　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

コマンドラインパラメータ(C):

<table>
<tbody>
<tr><td>%n &amp; dvipdfmx %b.dvi &amp; %b.pdf &amp; exit　　　　　　　　　　　　　　　　 　　</td><td style="background-color:#EEE">　&gt;　</td></tr>
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

☐ 非選択時は使用不可(H)　　　 ☑ メインメニューに表示(M)

☐ 起動時に実行(T)　　　　　　　　☑ ポップアップメニューに表示(P)

☐ 終了まで待機する(L)

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

　　　　　　　　　　　　　　　　　　　　　　　\[　　　　OK　　　　\]　\[　　キャンセル　　\]

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

次のうちのどちらかを実行

- メニューの \[ツール(T)\] → \[TeX -> DVI -> PDF\]
- エディタ画面を右クリック → \[ツール(S)\] → \[TeX -> DVI -> PDF\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます。

### TeraPad で LaTeX (TeX -> DVI -> PS -> PDF) {#h42e3045}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリックして以下の値を入力し，\[OK\] を押す。

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☒

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

名前\["-"は区切り線\](N):

<table>
<tbody>
<tr><td>TeX -&gt; DVI -&gt; PS -&gt; PDF　 　　　　　　　　　　　　　　　　　　　　　　　</td></tr>
</tbody>
</table>

実行ファイル(E):

<table>
<tbody>
<tr><td>cmd /K platex　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 　　</td><td style="background-color:#EEE">　...　</td></tr>
</tbody>
</table>

コマンドラインパラメータ(C):

<table>
<tbody>
<tr><td>%n &amp; dvips -Ppdf -z -f %b.dvi &#x7c; bkmk2uni &gt; %b.ps &amp; ps2pdf.bat %b.ps &amp; %b.pdf &amp; exit</td><td style="background-color:#EEE">　&gt;　</td></tr>
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

☐ 非選択時は使用不可(H)　　　 ☑ メインメニューに表示(M)

☐ 起動時に実行(T)　　　　　　　　☑ ポップアップメニューに表示(P)

☐ 終了まで待機する(L)

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

　　　　　　　　　　　　　　　　　　　　　　　\[　　　　OK　　　　\]　\[　　キャンセル　　\]

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

次のうちのどちらかを実行

- メニューの \[ツール(T)\] → \[TeX -> DVI -> PS -> PDF\]
- エディタ画面を右クリック → \[ツール(S)\] → \[TeX -> DVI -> PS -> PDF\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます。

### TeraPad で LaTeX の環境を構築するのに参考にしたサイト {#n06fef85}

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
