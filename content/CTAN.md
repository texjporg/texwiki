---
title: "CTAN"
url: "/CTAN/"
date: 2004-09-09T02:28:46Z
pukiwiki: "CTAN"
---

# CTAN

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->

## CTAN {#f9e5c80c}

### CTAN とは？ {#c8b76129}

CTAN (<strong>C</strong>omprehensive <strong>T</strong>eX <strong>A</strong>rchive <strong>N</strong>etwork) は
TeX 関連のソフトやスタイルファイルを集めたサイトです。

米国のサイトは [http://www.ctan.org/](http://www.ctan.org/) ですが，
日本語で検索できるミラーサイト [Ring Server](https://mirror.ctan.org/../../../) をお勧めします
（Ring Server のトップページが英語表記になるようでしたら，
［日本語］というボタンを押してください）。

この Ring Server のページを少し下にスクロールすると右に「検索」と書いた
犬の絵が見えますので，ここをクリックすれば検索の画面になります。

上からたどっていくには [Ring Server の /pub/text/CTAN/](https://mirror.ctan.org/./) から
始めればいいでしょう。

【注意】 [Ring Server](https://mirror.ctan.org/../../../) は複数のファイルサーバの集合体です。
下の方に一覧がありますので，ご自分のところからネットワーク的に近いサーバを
一つ選んでブックマーク（お気に入り）に入れておくと便利です。CTAN 以外にも
たくさんのフリーソフトをミラーしています。
以下のような DNS による負荷分散も実験的に行われています
（[Ring Server](https://mirror.ctan.org/../../../) の
「[利用者の皆様の声 &amp; FAQ](https://mirror.ctan.org/../../../ring/uvoice.html)」の
ページの「TENBIN，DNS BALANCEって何ですか？
また、RingServerでの負荷分散はどのように行っているのですか？」の項目参照）。

- HTTP
    - [http://www.ring.gr.jp/pub/text/CTAN/](https://mirror.ctan.org/./)
        （代表 URI ……一般的な DNS ラウンドロビンを採用して負荷分散を図る）
    - [http://www.t.ring.gr.jp/pub/text/CTAN/](http://www.t.ring.gr.jp/pub/text/CTAN/)
        （近いサーバ優先…… [TENBIN](http://www.tenbin.org/)
        及び [RADIX](http://www.toyama.net/~ikuo/tools/radix.html) の機能を利用して
        近傍のサーバへ誘導）
    - [http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/](http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/)
        （空いているサーバ優先……
        [DNS Balance](http://openlab.jp/dns_balance/dns_balance.html)
        による動的な負荷分散を行う）

- FTP
    - [ftp://ftp.ring.gr.jp/pub/text/CTAN/](ftp://ftp.ring.gr.jp/pub/text/CTAN/)
        （代表 URI ……一般的な DNS ラウンドロビンを採用して負荷分散を図る）
    - [ftp://ftp.t.ring.gr.jp/pub/text/CTAN/](ftp://ftp.t.ring.gr.jp/pub/text/CTAN/)
        （近いサーバ優先…… [TENBIN](http://www.tenbin.org/)
        及び [RADIX](http://www.toyama.net/~ikuo/tools/radix.html) の機能を利用して
        近傍のサーバへ誘導）
    - [ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/)
        （空いているサーバ優先……
        [DNS Balance](http://openlab.jp/dns_balance/dns_balance.html)
        による動的な負荷分散を行う）

オリジナルの CTAN サイトは次の三つです。

- HTTP
    - U.S.A. （米国）： [http://www.ctan.org/](http://www.ctan.org/)
    - U.K. （イギリス）： [http://www.tex.ac.uk/](http://www.tex.ac.uk/)
    - BRD （ドイツ）： [http://www.dante.de/](http://www.dante.de/)

- FTP
    - U.S.A. （米国）： [ftp://ftp.ctan.org/tex-archive/](ftp://ftp.ctan.org/tex-archive/)
    - U.K. （イギリス）： [ftp://ftp.tex.ac.uk/tex-archive/](ftp://ftp.tex.ac.uk/tex-archive/)
    - BRD （ドイツ）： [ftp://ftp.dante.de/pub/tex/](ftp://ftp.dante.de/pub/tex/)

### Ring Server 以外の国内での CTAN のミラーサイト（一部） {#e36ace99}

#### HTTP/FTP {#f5f248f4}

- [理化学研究所](http://www.riken.jp/)
    - [http://ftp.riken.jp/tex-archive/](http://ftp.riken.jp/tex-archive/)

- [KDDI 研究所](http://www.kddilabs.jp/)
    - [http://ftp.ne.jp/pub/ctan/](http://ftp.ne.jp/pub/ctan/)
    - [http://ftp.ne.jp/CTAN/](http://ftp.ne.jp/CTAN/)
    - [http://ftp.ne.jp/ctan/](http://ftp.ne.jp/ctan/)

- [山形大学](http://www.yamagata-u.ac.jp/index-j.html)
    - [http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/](http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/)

- [奈良先端科学技術大学院大学](http://www.naist.jp/)
    - [http://ftp.naist.jp/pub/TeX/CTAN/](http://ftp.naist.jp/pub/TeX/CTAN/)
    - [http://ftp.aist-nara.ac.jp/pub/TeX/CTAN/](http://ftp.aist-nara.ac.jp/pub/TeX/CTAN/)
    - [http://ftp.nara.wide.ad.jp/pub/TeX/CTAN/](http://ftp.nara.wide.ad.jp/pub/TeX/CTAN/)

- [北陸先端科学技術大学院大学](http://www.jaist.ac.jp/)
    - [http://ftp.jaist.ac.jp/pub/CTAN/](http://ftp.jaist.ac.jp/pub/CTAN/)

#### FTP のみ {#x06154f1}

- [会津大学](http://www.u-aizu.ac.jp/)
    - [ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/](ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/)

- [名古屋大学 工学部 電気電子・情報工学科 情報工学コース ICE (Information &amp; Computer Engineering)](http://www.ice.nuie.nagoya-u.ac.jp/)
    - [ftp://ftp.ice.nuie.nagoya-u.ac.jp/pub/CTAN/](ftp://ftp.ice.nuie.nagoya-u.ac.jp/pub/CTAN/)
    - [ftp://ftp.nuie.nagoya-u.ac.jp/pub/CTAN/](ftp://ftp.nuie.nagoya-u.ac.jp/pub/CTAN/)

- [北海道大学 理学部 地球科学科 FTP (green)](http://www.ep.sci.hokudai.ac.jp/~epftp/)
    - [ftp://green.ep.sci.hokudai.ac.jp/pub/CTAN/](ftp://green.ep.sci.hokudai.ac.jp/pub/CTAN/)
    - [ftp://ftp.ep.sci.hokudai.ac.jp/pub/CTAN/](ftp://ftp.ep.sci.hokudai.ac.jp/pub/CTAN/)

- [筑波大学大学院 システム情報工学研究科 コンピュータネットワーク研究室 FTP サービス](http://www.netlab.cs.tsukuba.ac.jp/ftp-site/information-JP.html)
    - [ftp://ftp.netlab.cs.tsukuba.ac.jp/pub/TeX/CTAN/](ftp://ftp.netlab.cs.tsukuba.ac.jp/pub/TeX/CTAN/)

***

## Comments {#t2502d63}

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->
