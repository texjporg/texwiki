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

TeX は「テフ」(\[tex\])
または「テック」と読みます。どちらかというと大学系の人は「テフ」派が多いようです。英語圏では \[tek\]，\[tekh\]
または誤読ですが \[teks\]，ドイツ語圏では「テヒ」(\[t&#x25b;&ccedil;\])
とも読むようです。同様に LaTeX は「ラテック」「ラテフ」などと読みます。

TeX は [Donald Ervin Knuth](http://www-cs-faculty.stanford.edu/~knuth/)
が作った組版システムです。現在のバージョン番号は 3.1415926 です。LaTeX
は [Leslie Lamport](http://lamport.org/) が TeX
の上に構築した文書処理システムです。いずれもフリーウェアであり，UNIX&reg;（[Mac OS X](http://www.apple.com/jp/macosx/)
や [Solaris](http://jp.sun.com/software/solaris/) など），UNIX 互換
OS（Linux OS，BSD 系 OS，[OpenSolaris](http://jp.opensolaris.org/)
など），[Microsoft Windows](http://www.microsoft.com/japan/windows/)，Mac OS
など，ほとんどの OS（つまり，ほとんどのコンピュータ）で使えます。

日本では TeX，LaTeX
を株式会社アスキー（現：[株式会社アスキー・メディアワークス](http://asciimw.jp/)）が日本語化した
[pTeX，pLaTeX](http://ascii.asciimw.jp/pb/ptex/)
がよく使われています。pTeX，pLaTeX の頭文字の
p（ピー）は <strong>p</strong>ublishing（出版）の意味で，アスキーでは pTeX，pLaTeX
およびこれらに基づく編集支援システム
[EWB](http://ascii.asciimw.jp/ascii/EWB/)
を（ソースコードの形で）無償配布し，自社の本の製作に利用しています。

- 【参考】TeX を日本語化したものには NTT JTeX やその多国語版 MuLTeX
    もあります。現在これらは千葉大学の[櫻井貴文さん](http://www.math.s.chiba-u.ac.jp/~sakurai/)が
    [TeXfamily](http://www.math.s.chiba-u.ac.jp/~sakurai/software.html)
    としてメンテナンスしていらっしゃいます。

1994年に LaTeX の新版 LaTeX 2ε（トゥー・イー），1995年にはアスキーから日本語版
pLaTeX 2ε が出ました。これにともなって，それ以前の古い LaTeX を特に LaTeX 2.09
と呼ぶことになりました。以下では現行の LaTeX 2ε と
pLaTeX 2ε に基づいて説明します。組版処理による表記ができないプレーンテキストや電子メールなどで書くときには
LaTeX 2ε を “LaTeX2e” と書くことになっていますので，以下では “LaTeX2e”，“pLaTeX2e” と書きます。

TeX，pTeX については，ここでは
LaTeX2e，pLaTeX2e の「縁の下の力持ち」としてそれぞれ
TeX，pTeX が働いていると言うに留めておき，詳しい説明は省略します。

## LaTeX2e，pLaTeX2e の入門書 {#l062c239}

まずは次の本を挙げておきます。

- [Leslie Lamport](http://lamport.org/) 著，[阿瀬はる美](http://www.harumi.jp/)
    訳『[文書処理システム LaTeX2e](http://www.pearsoned.co.jp/hed/search/onlinecatalog.html?id=87)』（[ピアソン・エデュケーション](http://www.pearsoned.co.jp/)，1999年，[ISBN 978-4-89471-139-6](http://ja.wikipedia.org/wiki/Special:Booksources/978-4-89471-139-6)）……LaTeX2e
    の原典です。

- [奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/)『[［改訂第4版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun4/)』（[技術評論社](http://www.gihyo.co.jp/)，2007年，[ISBN 978-4-7741-2984-6](http://ja.wikipedia.org/wiki/Special:Booksources/978-4-7741-2984-6)）……Microsoft
    Windows，Mac OS X 用のバイナリファイルや
    UNIX，UNIX 互換 OS 用のソースコードを収めた CD-ROM が附いています。

これ以外にも多くの[良書](</TeXの本/>)が出ていますので，書店でお選びください。

### LaTeX のバージョンについて —入門書を読む際に— {#h22f32a6}

LaTeX には大きく分けて二つの異なるバージョンがあります。一昔前の
LaTeX 2.09 と，現行の LaTeX2e です（日本語化されたものでは pLaTeX 2.09 と
pLaTeX2e です）。LaTeX 2.09 と LaTeX2e は別物と考えて良いくらいです。

図書館や書店には今でも LaTeX 2.09 時代の解説書が並んでいたり，LaTeX
形式で論文を受け付ける学会などの中には未だに
LaTeX 2.09 を採用しているところがあったりするので注意が必要です。

文書ソースを \documentstyle で始めるのが LaTeX 2.09，\documentclass で始めるのが
LaTeX2e です。LaTeX 2.09 用の古い原稿を LaTeX2e で処理すると自動的に
LaTeX 2.09 の互換モードで処理されるので，エラーなどが出ないことも多くあります。

## インストールの仕方 {#i326adb5}

PC 初心者にはこれが最も難しいところです。この TeX Wiki に
OS ごとのインストール法が詳しく書かれていますので，ご参照ください。特に
Microsoft Windows については
TeXWiki:インストール(Windows) をご覧ください。

インストール不要で TeX が使えるウェブページ「TeX
を使ってみよう（[EUC-JP 版](http://oku.edu.mie-u.ac.jp/~okumura/tex/)，[UTF-8 版](http://oku.edu.mie-u.ac.jp/~okumura/texonweb/)）」（お薦めです），または「[サーバーサイド pLaTeX 2ε ビューアー](http://nowsmartsoft.or.tv/texview/mytex.cgi)」（アクセスすると
IP アドレスが晒されるので注意すること）もあります。

## 使い方 {#hf6bc116}

- [最初の例](</TeX入門/最初の例/>)
- [簡単な数式 (1)](</TeX入門/簡単な数式(1)/>)
- [簡単な数式 (2)](</TeX入門/簡単な数式(2)/>)
- [各種パッケージの利用](</TeX入門/各種パッケージの利用/>)
- [レポート](</TeX入門/レポート/>)
- [LaTeX と (X)HTML との比較](</TeX入門/HTMLとLaTeXの比較/>)
- [複雑な数式](</TeX入門/複雑な数式/>)
- [図表](</TeX入門/図表/>)
    <!-- - [[図>TeX入門/図]] → 表についての説明も追加して [[図表>TeX入門/図表]] としました。こちらへの移行を提案します。← どうぞ移行してください -->

- [文献引用](</文献引用/>)
- [マクロの作成](</TeX入門/マクロの作成/>)
- [スライドの作り方（jsarticle 編）](</TeX入門/スライドの作り方（jsarticle編）/>)

以下，工事中。
