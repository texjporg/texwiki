---
title: "CTAN"
url: "/CTAN/"
date: 2004-09-09T02:28:46Z
pukiwiki: "CTAN"
---

# CTAN

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+- -- -8 -->

## CTAN {#CTAN}

### CTAN とは？ {#what}

CTAN (<strong>C</strong>omprehensive <strong>T</strong>eX <strong>A</strong>rchive <strong>N</strong>etwork) は
TeX 関連のファイルやソフトウェアを集めたウェブサイトです。

### Ring Server によるミラーリング {#RingServer}

アメリカのウェブサイトは [www.ctan.org](http://www.ctan.org/)
ですが，日本語で検索できるミラーサイト [Ring Server](http://www.ring.gr.jp/)
での CTAN のミラーリングの利用をお勧めします（Ring Server
のホームページが英語表記になるようでしたら，［日本語］というボタンを押してください）。この
Ring Server
のホームページを少し下にスクロールすると右に「検索」と書いた犬の絵が見えますので，ここをクリックすれば検索の画面になります。

上位のディレクトリから辿っていく場合には，[Ring Server の /pub/text/CTAN/](http://www.ring.gr.jp/pub/text/CTAN/)
から始めるのが良いでしょう。

- HTTP
    - [www.ring.gr.jp/pub/text/CTAN/](http://www.ring.gr.jp/pub/text/CTAN/)（代表
        URI……一般的な DNS ラウンドロビンを採用して負荷分散を図る）
        <!-- - -[[www.t.ring.gr.jp/pub/text/CTAN/:http://www.t.ring.gr.jp/pub/text/CTAN/]]（近いサーバ優先……[[TENBIN:http://www.tenbin.org/]] -->
        <!-- 及び [[RADIX:http://www.toyama.net/~ikuo/tools/radix.html]] -->
        <!-- の機能を利用して近傍のサーバへ誘導） -->
    - [www.dnsbalance.ring.gr.jp/pub/text/CTAN/](http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/)（空いているサーバ優先……[DNS Balance](http://openlab.jp/dns_balance/dns_balance.html)
        による動的な負荷分散を行う）
    - [core.ring.gr.jp/pub/text/CTAN/](http://core.ring.gr.jp/pub/text/CTAN/)
- Anonymous FTP
    - [ftp.ring.gr.jp/pub/text/CTAN/](ftp://ftp.ring.gr.jp/pub/text/CTAN/)（代表
        URI……一般的な DNS ラウンドロビンを採用して負荷分散を図る）
        <!-- - -[[ftp.t.ring.gr.jp/pub/text/CTAN/:ftp://ftp.t.ring.gr.jp/pub/text/CTAN/]]（近いサーバ優先……[[TENBIN:http://www.tenbin.org/]] -->
        <!-- 及び [[RADIX:http://www.toyama.net/~ikuo/tools/radix.html]] -->
        <!-- の機能を利用して近傍のサーバへ誘導） -->
    - [ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/)（空いているサーバ優先……[DNS Balance](http://openlab.jp/dns_balance/dns_balance.html)
        による動的な負荷分散を行う）
    - [ftp.core.ring.gr.jp/pub/text/CTAN/](ftp://ftp.core.ring.gr.jp/pub/text/CTAN/)

【注意】Ring Server
は複数のファイルサーバの集合体です。ホームページの中ほどにサーバの一覧がありますので，ご自分のところからネットワーク的に近いサーバを一つ選んでブックマーク（お気に入り）に入れておくと便利です。CTAN
以外にもたくさんのフリーウェアをミラーしています。以下のような
DNS による負荷分散も実験的に行われています（Ring Server
の「[利用者の皆様の声 &amp; FAQ](http://www.ring.gr.jp/ring/uvoice.html)」のページの「TENBIN，DNS
BALANCE って何ですか？ また、RingServer
での負荷分散はどのように行っているのですか？」の項目を参照）。

### mirror.ctan.org {#mirror-sites}

CTAN の世界的なミラーリングとして次の URI があります。

- [http://mirror.ctan.org/](http://mirror.ctan.org/)
- [http://www.ctan.org/get/](http://www.ctan.org/get/)

接続元の国の中の（もしくは接続元の国に最寄りの）ミラーサイトへ自動的にリダイレクトする仕組みです。

[CTAN:CTAN.sites](https://mirror.ctan.org/CTAN.sites) や [CTAN:README.mirrors](https://mirror.ctan.org/README.mirrors) に接続先ミラーサイトの URI 一覧が記載されています。この接続先候補に含まれる日本国内でのサイトには次のものがあります。

- [北陸先端科学技術大学院大学 \[JAIST\]](http://www.jaist.ac.jp/)
    - [ftp.jaist.ac.jp/pub/CTAN/](http://ftp.jaist.ac.jp/pub/CTAN/)
        (HTTP, anonymous FTP)

- [KDDI 研究所](http://www.kddilabs.jp/)
    - [ftp.kddilabs.jp/CTAN/](http://ftp.kddilabs.jp/CTAN/)
        (HTTP, anonymous FTP)
        <!-- - -[[ftp.ne.jp/CTAN/:http://ftp.ne.jp/CTAN/]] -->
        <!-- ftp.kddilabs.jp = ftp.kddlabs.co.jp = ftp.ne.jp -->

- [理化学研究所](http://www.riken.jp/)
    - [ftp.riken.jp/tex-archive/](http://ftp.riken.jp/tex-archive/)
        (HTTP, anonymous FTP)
        <!-- ftp.riken.jp = riksun.riken.go.jp = ftp.riken.go.jp -->

- [会津大学](http://www.u-aizu.ac.jp/)
    - [ftp.u-aizu.ac.jp/pub/tex/CTAN/](ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/)（FTP のみ）
        <!-- ftp.u-aizu.ac.jp = ftpsv1.u-aizu.ac.jp -->

- [山形大学](http://www.yamagata-u.ac.jp/) [工学部／大学院理工学研究科](http://www.yz.yamagata-u.ac.jp/)
    - [ftp.yz.yamagata-u.ac.jp/pub/CTAN/](http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/)
        (HTTP, anonymous FTP)
        <!-- ftp.yz.yamagata-u.ac.jp = ftp.slb.yz.yamagata-u.ac.jp = freebsd.yz.yamagata-u.ac.jp -->

### オリジナルの CTAN {#original}

オリジナルの CTAN サイトは次のとおりです。

- HTTP
    - U.S.A.（アメリカ）：[www.ctan.org](http://www.ctan.org/)
        <!-- tug.ctan.org = www.ctan.org -->
    - U.K.（イギリス）：[www.tex.ac.uk](http://www.tex.ac.uk/)
    - BRD（ドイツ）：[www.dante.de](http://www.dante.de/)
- Anonymous FTP
    - U.S.A.（アメリカ）：[tug.ctan.org/tex-archive/](ftp://tug.ctan.org/tex-archive/)
        <!-- www.ctan.org = tug.ctan.org -->
    - U.K.（イギリス）：[ftp.tex.ac.uk/tex-archive/](ftp://ftp.tex.ac.uk/tex-archive/)
    - BRD（ドイツ）：[ftp.dante.de/tex-archive/](ftp://ftp.dante.de/tex-archive/)
        <!-- www.dante.de = ftp.dante.de -->

また，[ftp.ctan.org](http://ftp.ctan.org/) は
[www.ctan.org](http://www.ctan.org/) (=
[tug.ctan.org](http://tug.ctan.org/))，[ftp.tex.ac.uk](ftp://ftp.tex.ac.uk/)（FTP
のみ），[www.dante.de](http://www.dante.de/) (=
[ftp.dante.de](http://ftp.dante.de/)) のいずれかに&#x7e6b;がります。

### その他の日本国内での CTAN のミラーサイト（一部） {#others}

#### HTTP, Anonymous FTP {#HTTP-FTP}

- [NAIST 奈良先端科学技術大学院大学](http://www.naist.jp/)
    - [ftp.naist.jp/pub/CTAN/](http://ftp.naist.jp/pub/CTAN/)
        <!-- ftp.naist.jp = amida.naist.jp = ftp.aist-nara.ac.jp -->
    - [ftp.nara.wide.ad.jp/pub/CTAN/](http://ftp.nara.wide.ad.jp/pub/CTAN/)

#### FTP のみ {#FTP-only}

- [名古屋大学](http://www.nagoya-u.ac.jp/) [工学部](http://www.engg.nagoya-u.ac.jp/) [電気電子・情報工学科（情報工学コース）](http://www.nuie.nagoya-u.ac.jp/)[ICE (Information &amp; Computer Engineering)](http://www.ice.nuie.nagoya-u.ac.jp/)
    - [ftp://ftp.nuie.nagoya-u.ac.jp/pub/CTAN/](ftp://ftp.nuie.nagoya-u.ac.jp/pub/CTAN/)
        <!-- ftp.ice.nuie.nagoya-u.ac.jp = ftp.nuie.nagoya-u.ac.jp -->

- [北海道大学](http://www.hokudai.ac.jp/) [理学部](http://www.sci.hokudai.ac.jp/) [地球科学科](http://www.sci.hokudai.ac.jp/grp/epub/ep-web/)
    [FTP (green)](http://www.ep.sci.hokudai.ac.jp/~epftp/)
    - [ftp://green.ep.sci.hokudai.ac.jp/pub/CTAN/](ftp://green.ep.sci.hokudai.ac.jp/pub/CTAN/)
        <!-- ftp.ep.sci.hokudai.ac.jp = green.ep.sci.hokudai.ac.jp -->

- [筑波大学](http://www.tsukuba.ac.jp/) [大学院システム情報工学研究科](http://www.sie.tsukuba.ac.jp/) [コンピュータネットワーク研究室](http://www.netlab.cs.tsukuba.ac.jp/)
    [FTP サービス](http://www.netlab.cs.tsukuba.ac.jp/ftp-site/information-JP.html)
    - [ftp://ftp.netlab.cs.tsukuba.ac.jp/pub/TeX/CTAN/](ftp://ftp.netlab.cs.tsukuba.ac.jp/pub/TeX/CTAN/)

***

## Comments {#comments}

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+- -- -8 -->
