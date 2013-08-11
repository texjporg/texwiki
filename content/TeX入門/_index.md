---
title: "TeX入門"
url: "/TeX入門/"
date: 2004-09-10T20:12:19Z
bookCollapseSection: true
pukiwiki: "TeX入門"
---

# TeX入門

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/intro/title.jpg" alt="&quot;TeX,LaTeX 入門&quot;">

<div style="text-align:right"><strong>TeX</strong> /t&eacute;k/［名］〔コンピュータ〕テフ，テック</div>

<div style="text-align:right">《テキストベースの組み版システム；数式の処理を得意とする》。</div>

<div style="text-align:right">—『ジーニアス英和大辞典』（大修館書店，2001年）</div>

## TeX，LaTeX とは？ {#nef9fd41}

TeX および LaTeX
の正式なロゴはこのページのタイトルのようなデザインですが，組版《くみはん》処理による表記ができないプレーンテキストや電子メールなどで書くときにはそれぞれ “TeX”，“LaTeX” と書くことになっています。

TeX は「テック」または「テフ」(\[tex\])と読みます。<br>
どちらかというと大学系の人は「テフ」派が多いようです。<br>
英語圏では \[tek\]，\[tekh\]
または誤読ですが \[teks\]，ドイツ語圏では「テヒ」(\[t&#x25b;&ccedil;\])
とも読むようです。<br>
同様に LaTeX は「ラテック」「ラテフ」などと読みます。<br>

TeX は [Donald Ervin Knuth](http://www-cs-faculty.stanford.edu/~knuth/)
が作った組版システムです。<br>
現在のバージョン番号は 3.1415926 です。<br>
LaTeX
は [Leslie Lamport](http://lamport.org/) が TeX
の上に構築した文書処理システムです。<br>
TeX, LaTeX はフリーウェアです。<br>
[Microsoft Windows](http://www.microsoft.com/japan/windows/)，UNIX&reg;（[OS X](http://www.apple.com/jp/osx/) など），UNIX 互換
OS（[Linux OS](http://kernel.org/)，[FreeBSD](http://www.freebsd.org/)
など），モバイルオペレーティングシステム（[Android OS](http://www.android.com/)，[iOS](http://www.apple.com/jp/ios) など）など，ほとんどの OS（つまり，ほとんどのコンピュータ）で使えます。

日本では TeX，LaTeX
を株式会社アスキー（現：[株式会社アスキー・メディアワークス](http://asciimw.jp/)）が日本語化した
[pTeX，pLaTeX](http://ascii.asciimw.jp/pb/ptex/)
がよく使われています。<br>
pTeX，pLaTeX の頭文字の
p（ピー）は <strong>p</strong>ublishing（出版）の意味で，アスキーでは pTeX，pLaTeX
およびこれらに基づく編集支援システム
[EWB](http://ascii.asciimw.jp/ascii/EWB/)
を無償配布し，自社の本の製作に利用していました。

- 現在は pTeX, pLaTeX を内部 Unicode 化した [upTeX,upLaTeX](/upTeX,upLaTeX/) が利用できます。
- Unicode に完全対応したものには [LuaTeX, LuaLaTeX](/LuaTeX/), LuaJITTeX, LuaJITLaTeX, [XeTeX, XeLaTeX](/XeTeX/) があります。

1994年に LaTeX の新版 LaTeX 2ε（トゥー・イー），1995年にはアスキーから日本語版
pLaTeX 2ε が出ました。<br>
これにともなって，それ以前の古い LaTeX を特に LaTeX 2.09
と呼ぶことになりました。<br>
以下では現行の LaTeX 2ε と
pLaTeX 2ε に基づいて説明します。<br>
組版処理による表記ができないプレーンテキストや電子メールなどで書くときには
LaTeX 2ε を “LaTeX2e” と書くことになっていますので，以下では “LaTeX2e”，“pLaTeX2e” と書きます。

TeX，pTeX については，ここでは
LaTeX2e，pLaTeX2e の「縁の下の力持ち」としてそれぞれ
TeX，pTeX が働いていると言うに留めておき，詳しい説明は省略します。<br>

## LaTeX2e，pLaTeX2e の入門書 {#l062c239}

まずは次の本を挙げておきます。

- [奥村 晴彦](http://oku.edu.mie-u.ac.jp/~okumura/)『[［改訂第5版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun5/)』（[技術評論社](http://gihyo.jp/)，2010年7月，定価 &yen;3,339 (本体 &yen;3,180)，[ISBN 978-4-7741-4319-4](http://ja.wikipedia.org/wiki/Special:Booksources/978-4-7741-4319-4)）……角藤さんの
    [W32TeX](/W32TeX/) と
    [Ghostscript](/Ghostscript/)，OS X 用バイナリなどを収めた
    DVD-ROM が附いています。

これ以外にも多くの[良書](</TeXの本/>)が出ていますので，書店でお選びください。

### LaTeX のバージョンについて —入門書を読む際に— {#h22f32a6}

LaTeX には大きく分けて二つの異なるバージョンがあります。<br>
現行の LaTeX2e と，一昔前の
LaTeX 2.09 です（日本語化されたものでは pLaTeX2e と
pLaTeX 2.09 です）。<br>
LaTeX2e と LaTeX 2.09 は別物と考えて良いくらいです。

図書館には今でも LaTeX 2.09 時代の解説書が並んでいたりするかもしれません。<br>
LaTeX2e と LaTeX 2.09 は異なるものなので注意が必要です。<br>

文書ソースを \documentclass で始めるのが
LaTeX2e，\documentstyle で始めるのが LaTeX 2.09 です。<br>
LaTeX 2.09 用の古い原稿を LaTeX2e で処理すると自動的に
LaTeX 2.09 の互換モードで処理されるので，エラーなどが出ないことも多くあります。<br>

## インストール {#i326adb5}

<div style="text-align:center">初心者には TeX のインストールが最も難しいところです。<br></div>

<div style="text-align:center">TeX Wiki に OS ごとのインストール方法が詳しく書かれていますので，ご参照ください。<br></div>

### [Microsoft Windows](</Microsoft Windows/>) {#t3b1a89c}

<div style="text-align:center"><a href="/Microsoft Windows/">Microsoft Windows - TeX Wiki</a> をご覧ください。</div>

### [Mac](/Mac/) {#m050163b}

<div style="text-align:center"><a href="/Mac/">Mac - TeX Wiki</a> をご覧ください。</div>

### [Linux](/Linux/) {#z51c014e}

<div style="text-align:center"><a href="/Linux/">Linux - TeX Wiki</a> をご覧ください。</div>

### [Web](</TeXをWebで/>) {#j1241f24}

<div style="text-align:center">インストール不要で TeX が使えるウェブページ「<a href="http://oku.edu.mie-u.ac.jp/~okumura/texonweb/">TeXを使ってみよう</a>」もあります。</div>

## 使い方 {#hf6bc116}

- [最初の例](</TeX入門/最初の例/>)
- [簡単な数式 (1)](</TeX入門/簡単な数式(1)/>)
- [簡単な数式 (2)](</TeX入門/簡単な数式(2)/>)
- [各種パッケージの利用](</TeX入門/各種パッケージの利用/>)
- [レポート](</TeX入門/レポート/>)
- [LaTeX と HTML との比較](</TeX入門/HTMLとLaTeXの比較/>)
- [複雑な数式](</TeX入門/複雑な数式/>)
- [図表](</TeX入門/図表/>)
    <!-- - [[図>TeX入門/図]] → 表についての説明も追加して [[図表>TeX入門/図表]] としました。こちらへの移行を提案します。← どうぞ移行してください -->

- [文献引用](</文献引用/>)
- [マクロの作成](</TeX入門/マクロの作成/>)
- [スライドの作り方（jsarticle 編）](</TeX入門/スライドの作り方（jsarticle編）/>)

以下，工事中。
