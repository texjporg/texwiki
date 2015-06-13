---
title: "LaTeX入門"
url: "/LaTeX入門/"
date: 2015-05-22T19:12:22Z
bookCollapseSection: true
pukiwiki: "LaTeX入門"
---

# LaTeX入門

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/intro/title.jpg" alt="&quot;TeX,LaTeX 入門&quot;">

<div style="text-align:right"><strong>TeX</strong> /t&eacute;k/［名］〔コンピュータ〕テフ，テック</div>

<div style="text-align:right">《テキストベースの組み版システム；数式の処理を得意とする》。</div>

<div style="text-align:right">—『ジーニアス英和大辞典』（大修館書店，2001年）</div>

<strong>目次</strong>

<br>

## TeX，LaTeX とは？ {#nef9fd41}

[TeX](/TeX/) は [Donald Ervin Knuth](http://www-cs-faculty.stanford.edu/~knuth/)
によって開発された，フリーの「<strong>組版システム</strong>」です。
すなわち，活版印刷のような「文字や図版などの要素を紙面に配置する」という作業をコンピュータで行います。

[LaTeX](/LaTeX/) は TeX の上に構築されたフリーの文書処理システムです。
[Leslie Lamport](http://lamport.org/) によって開発されました。
TeX は「組版のために開発された言語」でもあり，そのままでは使いにくい点もあるので，LaTeX では一般的な文書作成に便利な機能拡張がなされています。

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

- [Microsoft Windows](http://www.microsoft.com/japan/windows/)
- UNIX&reg;（[OS X](http://www.apple.com/jp/osx/) など）
- UNIX 互換
    OS（[Linux OS](http://kernel.org/)，[FreeBSD](http://www.freebsd.org/)
    など）

- Windows 上で UNIX ライクな環境を提供する [Cygwin](http://www.cygwin.com/)
- モバイルオペレーティングシステム（[Android OS](http://www.android.com/)，[iOS](http://www.apple.com/jp/ios/) など）

### 日本語化された TeX, LaTeX {#xb5d1a9c}

日本では TeX, LaTeX を日本語化した
[pTeX, pLaTeX](http://ascii.asciimw.jp/pb/ptex/)
が使用されています[^1]。
現在は pTeX, pLaTeX を内部 Unicode 化した
[upTeX, upLaTeX](/upTeX,upLaTeX/) が利用できます。

最近では，Unicode に完全対応した [LuaTeX](/LuaTeX/), LuaJITTeX, [XeTeX](/XeTeX/) というエンジンが開発されています。
これらのエンジンの上で動く LuaLaTeX, LuaJITLaTeX, XeLaTeX を使っても日本語を出力できます。

### LaTeX のバージョン {#q9d2d675}

1994年に LaTeX の新版 LaTeX 2ε（トゥー・イー），1995年にはアスキーから日本語版
pLaTeX 2ε が出ました。
これにともなって，それ以前の古い LaTeX を特に LaTeX 2.09 と呼ぶことになりました。
以下では現行の LaTeX 2ε と pLaTeX 2ε と upLaTeX 2ε に基づいて説明します。

組版処理による表記ができないプレーンテキストや電子メールなどで書くときには
LaTeX 2ε を “LaTeX2e” と書くことになっています。
以下では LaTeX 2ε, pLaTeX 2ε, upLaTeX 2ε をそれぞれ
“LaTeX2e”, “pLaTeX2e”, “upLaTeX2e” と書きます。

## LaTeX2e (pLaTeX2e, upLaTeX2e) の入門書 {#l062c239}

まずは次の本を挙げておきます。

- [奥村 晴彦](http://oku.edu.mie-u.ac.jp/~okumura/), [黒木 裕介](https://twitter.com/kuroky_plus)『[［改訂第6版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/)』（[技術評論社](http://gihyo.jp/)，2013年10月，定価 &yen;3,456 (本体 &yen;3,200)，[ISBN 978-4-7741-6045-0](http://ja.wikipedia.org/wiki/Special:Booksources/978-4-7741-6045-0)）
    - [TeX Live](</TeX Live/>) 2013 を収録した
        DVD-ROM 付。[電子版](https://gihyo.jp/dp/ebook/2013/978-4-7741-6107-5)もあります。

これ以外にも多くの[良書](</TeXの本/>)が出ています。書店でお選びください。

<strong> <em>注意</em> </strong>：

LaTeX には大きく分けて LaTeX2e と LaTeX 2.09 という二つの異なるバージョンがあります。
図書館には今でも LaTeX 2.09 時代の解説書が並んでいたりするかもしれません。
<strong>LaTeX2e と LaTeX 2.09 は別物</strong>と考えて良いくらい異なるものですので，注意してください。

文書ソースを \documentclass で始めるのが
LaTeX2e，\documentstyle で始めるのが LaTeX 2.09 です。
LaTeX 2.09 用の古い原稿を LaTeX2e で処理すると自動的に
LaTeX 2.09 の互換モードで処理されるので，エラーなどが出ないことも多くあります。

## LaTeX を使うためには {#i326adb5}

お使いのコンピュータに TeX ディストリビューション一式をインストールすることで，LaTeX を使える環境が整います。
最近ではインストール不要のクラウドサービスも充実しています。

### TeX をインストールする {#d4959206}

初心者には TeX のインストールが最も難しいところかもしれません。
TeX Wiki には OS ごとのインストール方法が詳しく書かれていますので，[TeX 入手法](</TeX入手法/>) をご参照ください。

### TeX を Web で {#j1241f24}

インストール不要で LaTeX が使えるウェブページもあります。
初めて LaTeX に触れるにあたり，とりあえず使ってみたい場合は

- 「[TeXを使ってみよう（upTeX版）](http://glc.l.u-tokyo.ac.jp/texonweb/)」
- 「[TeXを使ってみよう](http://oku.edu.mie-u.ac.jp/~okumura/texonweb/)」

が便利です。
このようなサービスの作り方については，[TeX を Web で](</TeXをWebで/>)を参照してください。

また，より進んだクラウドのサービスも提供されています。

- [Cloud LaTeX](https://cloudlatex.io/ja)
- [Overleaf](https://www.overleaf.com/)（旧称：writeLaTeX）

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
- [文献引用](</文献引用/>)
- [索引作成](</索引作成/>)
- [LaTeX マクロの作成](</LaTeX入門/LaTeXマクロの作成/>)
- [スライドの作り方（jsarticle 編）](</LaTeX入門/スライドの作り方（jsarticle編）/>)
- [応用的な使い方](</LaTeX入門/応用的な使い方/>)

[^1]: pTeX, pLaTeX は株式会社アスキー（現：[株式会社 KADOKAWA](http://www.kadokawa.co.jp/) のアスキー・メディアワークス　ブランドカンパニー）が日本語化したものです。pTeX, pLaTeX の頭文字の p（ピー）は strongp/strongublishing（出版）の意味です。アスキーでは pTeX, pLaTeX およびこれらに基づく編集支援システム [EWB](http://ascii.asciimw.jp/ascii/EWB/) を無償配布し，自社の本の製作に利用していました。
