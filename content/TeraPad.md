---
title: "TeraPad"
url: "/TeraPad/"
date: 2010-06-06T09:08:18Z
pukiwiki: "TeraPad"
---

# TeraPad

## TeraPad {#g9e6153d}

### TeraPad とは {#wda2a461}

TeraPad は国産のシンプルなテキストエディタです。

公式サイトは [ToClip for Windows](http://www5f.biglobe.ne.jp/~t-susumu/) です。

### TeraPad で LaTeX {#g1f54992}

メニューの \[ツール(T)\] → \[ツールの設定(T)...\]

\[追加(I)...\] をクリック

***

ツールの編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☒

***

***

名前\["-"は区切り線\](N):

<table>
<tbody>
<tr><td>TeX -&gt; DVI -&gt; PDF -&gt; 表示　　　　　　　　　　　　　　　　　　　　　　　</td></tr>
</tbody>
</table>

実行ファイル(E):

<table>
<tbody>
<tr><td>cmd /K platex　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 　　</td><td>...</td></tr>
</tbody>
</table>

コマンドラインパラメータ(C):

<table>
<tbody>
<tr><td>%n &amp; dvipdfmx %b.dvi &amp; %b.pdf &amp; exit　　　　　　　　　　　　　　　　 　　</td><td>&gt;</td></tr>
</tbody>
</table>

作業フォルダ(D):

<table>
<tbody>
<tr><td>%D　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td><td>...</td></tr>
</tbody>
</table>

ファイルの上書き保存(S):　　　　　キー(K):

<table>
<tbody>
<tr><td>上書き保存しない　　　　　　　▼</td><td>Ctrl + D　　　　　　　　　　　　　　　</td></tr>
</tbody>
</table>

□ 非選択時は使用不可(H)　　　 ☑ メインメニューに表示(M)

□ 起動時に実行(T)　　　　　　　　☑ ポップアップメニューに表示(P)

□ 終了まで待機する(L)

***

　　　　　　　　　　　　　　　　　　　　　　　\[　　　　OK　　　　\]　\[　　キャンセル　　\]

***

メニューの \[ツール(T)\] → \[TeX -> DVI -> PDF -> 表示\]

TeX ファイルがコンパイルされ PDF ファイルが表示されます。

- 参考サイト
    - [TeraPad から LaTeX のコンパイルをする方法](http://d.hatena.ne.jp/hiratake55/20090710)
        (hiratake55 さん)
    - [Terapadで作るLaTeX統合環境](http://zatugakuou.hp.infoseek.co.jp/LaTeXIntegratedEnvironmentOnTerapad.html)
        (綾小路 龍之介 さん) ライセンスは GNU Free Documentation License。

### TeraPad で 表の作成 {#p12e5284}

- [USBメモリ活用講座【付録・Excel/Calcの表のtabular形式への変換法】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/tp2tbl.shtml)
- [簡単な表の作成方法　－TeraPadを用いて－](http://homepage2.nifty.com/nandemoarchive/latex/kowaza_01.htm)
