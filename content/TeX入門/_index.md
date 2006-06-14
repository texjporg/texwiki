---
title: "TeX入門"
url: "/TeX入門/"
date: 2004-09-10T20:12:19Z
bookCollapseSection: true
pukiwiki: "TeX入門"
---

# TeX入門

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/intro/title.jpg" alt="&quot;TeX,LaTeX入門&quot;">

<div style="text-align:right"><strong>TeX</strong> /tek/ [名] 〔コンピュータ〕テフ，テック</div>

<div style="text-align:right">《テキストベースの組み版システム；</div>

<div style="text-align:right">数式の処理を得意とする》．</div>

<div style="text-align:right">―『ジーニアス英和大辞典』 </div>

## TeX，LaTeX とは？ {#nef9fd41}

TeX および LaTeX の正式なロゴはこのページのタイトルのようなデザインですが，テキストで書くときはそれぞれ TeX，LaTeX のように書くことになっています。 

TeX は「テック」または「テフ」と読みます。どちらかというと大学系の人は「テフ」派が多いようです。英語圏では「tek」「tekh」または誤読ですが「teks」，ドイツ語圏では「テヒ」とも読むようです。同様に LaTeX は「ラテック」「ラテフ」などと読みます。 

TeX は [Donald E. Knuth](http://www-cs-faculty.stanford.edu/~knuth/) が作った組版（くみはん）システムです。 LaTeX は [Leslie Lamport](http://lamport.org/) が TeX の上に構築した文書処理システムです。いずれもフリーソフトであり， Windows，Macintosh，UNIX（Linux や \*BSD，Mac OS X も含む）など，ほとんどのコンピュータで使えます。 

日本では TeX，LaTeX を [（株）アスキー](http://www.ascii.co.jp/) が日本語化した [pTeX，pLaTeX](http://www.ascii.co.jp/pb/ptex/) がよく使われています。 pTeX，pLaTeX の頭の p（ピー）は publishing（出版）の意味で，アスキーでは pTeX，pLaTeX およびこれらに基づく編集支援システム [EWB](http://www2.ascii.co.jp/EWB/) を（ソースコードの形で）無償配布し、自社の本の製作に利用しています。 

> ［参考］ TeX を日本語化したものには NTT JTeX やその多国語版 MuLTeX もあります。これらは現在は千葉大の櫻井貴文さんが [TeXfamily](ftp://ftp.math.s.chiba-u.ac.jp/tex/) としてメンテナンスしておられます。

1994年に LaTeX の新版 LaTeX2ε（ツー・イー）， 1995年にはアスキーから日本語版 pLaTeX2ε が出ました。 これにともなって、それ以前の古い LaTeX を特に LaTeX2.09 と呼ぶことになりました。以下では現行の LaTeX2ε と pLaTeX2ε に基づいて説明します。 LaTeX2ε は半角文字だけで書くときは LaTeX2e と書くことになっていますので，以下では LaTeX2e，pLaTeX2e と書きます。 

TeX，pTeX については，ここでは LaTeX2e，pLaTeX2e の「縁の下の力持ち」としてそれぞれ TeX，pTeX が働いていると言うにとどめておき，詳しい説明は省略します。 

## LaTeX2e，pLaTeX2e の入門書 {#l062c239}

とりあえず次の本を挙げておきます。 

- Lamport著，阿瀬はる美訳 『[文書処理システムLaTeX2e](http://www.pearsoned.co.jp/hed/search/onlinecatalog.html?id=87)』 （[ピアソン・エデュケーション](http://www.pearsoned.co.jp/)，1999年） ［LaTeX2e の原典です］
- 奥村晴彦 『[［改訂第3版］LaTeX2e美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun3/)』 （[技術評論社](http://www.gihyo.co.jp/)，2004年） ［Windows，Mac OS Xのバイナリ，UNIX系OS用のソースを収めたCD-ROMが付いています］

これ以外にもたくさん良書が出ています([TeXの本](</TeXの本/>))ので，書店でお選びください。 

### LaTeX のバージョンについて - 入門書を読む際に - {#h22f32a6}

LaTeX には大きく分けて二つの異なるバージョンがあります。
一昔前の LaTeX2.09 と、現行の LaTeX2e です。
（日本語化されたものでは pLaTeX2.09 と pLaTeX2e です。）
LaTeX2.09 と LaTeX2e は別物と考えてよいくらいです。

図書館や書店には今でも LaTeX2.09 時代の解説書が並んでいたり、LaTeX 形式で論文を受け付ける学会などの中には未だに LaTeX2.09 を採用しているところがあったりするので注意が必要です。

文書ソースを \documentstyle で始めるのが LaTeX2.09、\documentclass で始めるのが LaTeX2e です。
LaTeX2.09 用の古い原稿を LaTeX2e で処理すると自動的に LaTeX2.09 の互換モードで処理されるので、エラーなどが出ないことも多くあります。

## インストールのしかた {#i326adb5}

パソコン初心者にはこれが一番難しいところです。
このTeX WikiにOSごとのインストール法が詳しく書かれていますのでご参照ください。
特にWindows については インストール(Windows) をご覧ください。

インストール不要でTeXが使えるページ
[TeXを使ってみよう](http://oku.edu.mie-u.ac.jp/~okumura/tex/) （ お薦めです ）、または
[サーバーサイドpLaTeX2εビューアー](http://nowsmartsoft.or.tv/texview/mytex.cgi) （ アクセスすると IP アドレスが晒されるので注意すること ） もあります。

## 使い方 {#hf6bc116}

- [最初の例](</TeX入門/最初の例/>)
- [簡単な数式 (1)](</TeX入門/簡単な数式(1)/>)
- [簡単な数式 (2)](</TeX入門/簡単な数式(2)/>)
- [各種パッケージの利用](</TeX入門/各種パッケージの利用/>)
- [レポート](</TeX入門/レポート/>)
- [HTML と LaTeX の比較](</TeX入門/HTMLとLaTeXの比較/>)
- [複雑な数式](</TeX入門/複雑な数式/>)
- 図
- [文献引用](</文献引用/>)
    <!-- - [[宜しくない見本>awdea]] -->
    <!-- 間違えて書き込まれた可能性が大きいので…… -->

以下，工事中。
