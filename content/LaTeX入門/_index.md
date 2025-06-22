---
title: "LaTeX入門"
url: "/LaTeX入門/"
date: 2015-05-22T19:12:22Z
bookCollapseSection: true
pukiwiki: "LaTeX入門"
---

# LaTeX入門

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/320px-LaTeX_logo.svg.png" alt="&quot;LaTeX 入門&quot;" width="140" height="57">

<div style="text-align:left"><span style="font-size:36px">入門</span></div>

<div style="text-align:right"><strong>TeX</strong> /t&eacute;k/［名］〔コンピュータ〕テフ，テック</div>

<div style="text-align:right">《テキストベースの組み版システム；数式の処理を得意とする》。</div>

<div style="text-align:right">—『ジーニアス英和大辞典』（大修館書店，2001年）</div>

<strong>目次</strong>

<br>

## TeX，LaTeX とは？ {#nef9fd41}

[TeX](/TeX/) は [Donald Ervin Knuth](https://www-cs-faculty.stanford.edu/~knuth/)
によって開発された，フリーの「<strong>組版システム</strong>」です。
すなわち，活版印刷のような「文字や図版などの要素を紙面に配置する」という作業をコンピュータで行います。

[LaTeX](/LaTeX/) は TeX の上に構築されたフリーの文書処理システムです。
[Leslie Lamport](https://lamport.org/) によって開発されました。
TeX は「組版のために開発された言語」でもあり，そのままでは使いにくい点もあるので，LaTeX によって一般的な文書作成に便利な機能拡張がなされています。

現在では TeX で組版を行う場合には LaTeX を使うことが圧倒的に多いため，単に「TeX」と言った場合にそれが LaTeX のことを指している場合も多いのですが，本来 TeX と LaTeX は区別されるべきものです。
また，ワープロソフトと同じようなものだと思われがちですが，仕組みが全く異なります。
[はじめての方へ](</はじめての方へ/>)をお読みください。

### 読み方 {#gea7d22e}

TeX は「テック」または「テフ」(\[tex\])と読みます。
どちらかというと大学系の人は「テフ」派が多いようです。
英語圏では \[tek\]，\[tekh\] または誤読ですが \[teks\]，ドイツ語圏では「テヒ」(\[t&#x25b;&ccedil;\]) とも読むようです。
同様に LaTeX は「ラテック」「ラテフ」などと読みます。

### ロゴ {#k4f3130b}

TeX および LaTeX の正式なロゴはこのページのタイトルのようなデザインです。ただし，プレーンテキストや電子メールなどで書くときには組版《くみはん》処理による表記ができないので，それぞれ “TeX”，“LaTeX” と書くことになっています。

### 動作環境 {#u28a6dc4}

ほとんどの OS で動作します。つまり，ほとんどのコンピュータで使えます。

- [Windows](https://www.microsoft.com/ja-jp/windows)
- [macOS](https://www.apple.com/jp/macos/)
- [Linux](https://www.kernel.org/)
- [ChromeOS](https://chromeos.google/)
- UNIX 互換
    OS（[FreeBSD](https://www.freebsd.org/)
    など）

- Windows 上で Linux ライクな環境を提供する [Cygwin](https://www.cygwin.com/)，[MSYS2](https://www.msys2.org/)
- モバイルオペレーティングシステム（[Android](https://www.android.com/)，[iOS](https://www.apple.com/jp/ios/)，[iPadOS](https://www.apple.com/jp/ipados/) など）

### 日本語化された TeX, LaTeX {#xb5d1a9c}

日本では TeX, LaTeX を日本語化した
pTeX, pLaTeX
が使用されています[^1]。
現在は pTeX, pLaTeX を内部 Unicode 化した
[upTeX, upLaTeX](/upTeX,upLaTeX/) が利用できます。

### Unicode 化された TeX, LaTeX {#gdc33ce4}

Unicode に完全対応した [LuaTeX](/LuaTeX/), [XeTeX](/XeTeX/) というエンジンが利用できます。
これらのエンジンの上で動く LuaLaTeX, XeLaTeX を使っても日本語を出力できます。

### LaTeX のバージョン {#q9d2d675}

1994年に LaTeX の新版 LaTeX 2ε（トゥー・イー），1995年にはアスキーから日本語版
pLaTeX 2ε が出ました。
これにともなって，それ以前の古い LaTeX を特に LaTeX 2.09 と呼ぶことになりました。
以下では LaTeX 2ε と pLaTeX 2ε と upLaTeX と LuaLaTeX について説明します。

組版処理による表記ができないプレーンテキストや電子メールなどで書くときには
LaTeX 2ε を “LaTeX2e” と書くことになっています。
以下では LaTeX 2ε, pLaTeX 2ε をそれぞれ
“LaTeX2e”, “pLaTeX2e” と書きます。

<strong> <em>注意</em> </strong>：

LaTeX には大きく分けて LaTeX2e と LaTeX 2.09 という二つの異なるバージョンがあります。
<strong>LaTeX2e と LaTeX 2.09 は別物</strong>と考えて良いくらい異なるものですので，注意してください。

文書ソースを \documentclass で始めるのが
LaTeX2e，\documentstyle で始めるのが LaTeX 2.09 です。
LaTeX 2.09 用の古い原稿を LaTeX2e で処理すると以下のように自動的に
LaTeX 2.09 の互換モードで処理されるので，エラーなどが出ないことも多くあります。

&#160;         Entering LaTeX 2.09 COMPATIBILITY MODE<br>
&#160;\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*<br>
&#160;   !!WARNING!!    !!WARNING!!    !!WARNING!!    !!WARNING!!<br>

<br>

&#160;This mode attempts to provide an emulation of the LaTeX 2.09<br>
&#160;author environment so that OLD documents can be successfully<br>
&#160;processed. It should NOT be used for NEW documents!<br>

<br>

&#160;New documents should use Standard LaTeX conventions and start<br>
&#160;with the \documentclass command.<br>

<br>

&#160;Compatibility mode is UNLIKELY TO WORK with LaTeX 2.09 style<br>
&#160;files that change any internal macros, especially not with<br>
&#160;those that change the FONT SELECTION or OUTPUT ROUTINES.<br>

<br>

&#160;Therefore such style files MUST BE UPDATED to use<br>
&#160;         Current Standard LaTeX: LaTeX2e.<br>
&#160;If you suspect that you may be using such a style file, which<br>
&#160;is probably very, very old by now, then you should attempt to<br>
&#160;get it updated by sending a copy of this error message to the<br>
&#160;author of that file.<br>
&#160;\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*<br>

## LaTeX, pLaTeX, upLaTeX, LuaLaTeX の入門書 {#l062c239}

LaTeX, pLaTeX, upLaTeX, LuaLaTeX の入門書として次の本を挙げておきます。

- [奥村 晴彦](https://okumuralab.org/~okumura/), [黒木 裕介](https://x.com/kuroky_plus)『[［改訂第9版］LaTeX美文書作成入門](https://gihyo.jp/book/2023/978-4-297-13889-9)』紙版
    （[技術評論社](https://gihyo.jp/)，2023年12月09日発売，定価 &yen;3,630 (本体 &yen;3,300＋税10%)，[ISBN 978-4-297-13889-9](https://ja.wikipedia.org/wiki/Special:Booksources/978-4-297-13889-9)）

- [奥村 晴彦](https://okumuralab.org/~okumura/), [黒木 裕介](https://x.com/kuroky_plus)『[［改訂第9版］LaTeX美文書作成入門](https://gihyo.jp/dp/ebook/2023/978-4-297-13890-5)』電子版
    （[技術評論社](https://gihyo.jp/)，2023年12月09日発売，税込 &yen;3,300，[ISBN 978-4-297-13890-5](https://ja.wikipedia.org/wiki/Special:Booksources/978-4-297-13890-5)）

これ以外にも多くの[良書](</TeXの本/>)が出ています。書店でお選びください。

## LaTeXのオンラインチュートリアル {#y5a6f8a1}

LearnLaTeX.orgという、LaTeXの開発チームが作成した無料のオンラインチュートリアル（入門コンテンツ）もあります。Overleafや独自のオンラインTeXシステムと連携しており、環境構築不要ですぐにコード例を試すことができるのが特徴です。

- [Learn LaTeX.org（日本語版）](https://www.learnlatex.org/ja/)

## LaTeX を使うためには {#i326adb5}

お使いのコンピュータに TeX ディストリビューション一式をインストールすることで，LaTeX を使える環境が整います。
インストール不要のクラウドサービスも充実しています。

### TeX をインストールする {#d4959206}

初心者には TeX のインストールが最も難しいところかもしれません。
TeX Wiki には OS ごとのインストール方法が詳しく書かれていますので，[TeX 入手法](</TeX入手法/>) をご参照ください。

### TeX を Web で {#j1241f24}

インストール不要で LaTeX が使えるウェブページもあります。
初めて LaTeX に触れるにあたり，とりあえず使ってみたい場合は
[TeX を Web で](</TeXをWebで/>)を参照してください。

また，より進んだクラウドのサービスも提供されています。

- [Overleaf](https://www.overleaf.com/)
- [Cloud LaTeX](https://cloudlatex.io/ja)

## 使い方 {#hf6bc116}

LaTeX の使い方を簡単に解説しています。

- [最初の例](</LaTeX入門/最初の例/>)
- [簡単な数式 (1)](</LaTeX入門/簡単な数式(1)/>)
- [簡単な数式 (2)](</LaTeX入門/簡単な数式(2)/>)
- [各種パッケージの利用](</LaTeX入門/各種パッケージの利用/>)
- [レポート](</LaTeX入門/レポート/>)
- [HTML と LaTeX の比較](</LaTeX入門/HTMLとLaTeXの比較/>)
- [複雑な数式](</LaTeX入門/複雑な数式/>)
- [図表](</LaTeX入門/図表/>)
- [図表の配置](</LaTeX入門/図表の配置/>)
- [相互参照とリンク](</LaTeX入門/相互参照とリンク/>)
- [ヘッダーとフッター](</LaTeX入門/ヘッダーとフッター/>)
- [文献引用](</文献引用/>)
- [索引作成](</索引作成/>)
- [LaTeX マクロの作成](</LaTeX入門/LaTeXマクロの作成/>)
- [スライドの作り方（jsarticle 編）](</LaTeX入門/スライドの作り方（jsarticle編）/>)
- [応用的な使い方](</LaTeX入門/応用的な使い方/>)
- [発展編：最近の LaTeX の動向](</LaTeX入門/発展編/>)

[^1]: pTeX, pLaTeX は株式会社アスキー（現：[角川アスキー総合研究所](https://www.lab-kadokawa.com/)）が日本語化したものです。pTeX, pLaTeX の頭文字の p（ピー）は strongp/strongublishing（出版）の意味です。アスキーでは pTeX, pLaTeX を自社の本の製作に利用していました。
