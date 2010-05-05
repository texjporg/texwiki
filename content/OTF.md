---
title: "OTF"
url: "/OTF/"
date: 2010-02-19T08:31:12Z
pukiwiki: "OTF"
---

# OTF

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->

## OTF パッケージ {#l22413ec}

### OTF パッケージとは {#h230c839}

[齋藤修三郎さん](http://psitau.at.infoseek.co.jp/)の
[Open Type Font 用 VF](http://psitau.at.infoseek.co.jp/otf.html) は Adobe-Japan1-6 相当のフォントあたり最大23,058文字（開発版を利用した場合）の
和文 OpenType フォントを使うためのパッケージです。

ここでは OTF パッケージを Microsoft Windows，UNIX （Mac OS X，Solaris
など），UNIX 互換 OS （Linux，BSD など）で使う方法を説明します。 <!-- Mac OS については↓ --> <!-- http://www.apple.com/jp/macosx/technology/unix.html --> <!-- 「LeopardはOpen Brand UNIX 03登録製品」 -->

- 安定版を利用した場合は Adobe-Japan1-5 相当のフォントあたり最大20,317文字となります。
- 以前の[UTF パッケージ](http://psitau.at.infoseek.co.jp/utf.html)は明朝体と
    ゴシック体だけでしたが，OTF パッケージは5書体以上を扱うことができます。

- また，和文フォントのメトリックが改訂されました。
    従来のものは min10.tfm のしがらみを引きずった長方形でしたが，OTF では
    正方形（高さ : 深さ = 88 : 12）に直されました。

- なお，OTF パッケージの扱えるグリフは Adobe-Japan1-6，Adobe-GB1-5，Adobe-CNS1-6，Adobe-Korea1-2 のプロポーショナルでない固定幅のもの（全角幅，半角幅，1/3 角幅など）です
    （CID 番号に完全対応している DVIware
    で[ヒラギノ](http://www.jiyu-kobo.co.jp/works/works.html#Anchor-001)を
    使用する場合には従属欧文およびプロポーショナル仮名を使用可）。

### Microsoft Windows でのインストール {#t967d888}

角藤さんの
[W32TeX](http://w32tex.org/index-ja.html) に
含まれている[otfbeta.tar.bz2](http://w32tex.org/current/otfbeta.tar.bz2) もしくは [otfdevel.tar.bz2](http://w32tex.org/current/otfdevel.tar.bz2) をダウンロードします（安定版なら [otf.tar.bz2](http://w32tex.org/current/otf.tar.bz2)
をダウンロードします）。これを例えば C:\temp\ に入れます。
コマンド プロンプト（MS-DOS プロンプト）で次のように打ち込みます。

```
>CD \usr\local
>tar xvjf C:/temp/otfbeta.tar.bz2
```

角藤さんの簡易インストーラー (texinst2010.zip) は <!-- 2009/10/18 Web2C-2009 ベースが最新 -->
OTF パッケージの展開にも対応していますので，次のようにしても良いでしょう。

```
>CD \usr\local
>texinst2010 C:/temp
```

dvipdfm(x) 用の map ファイルの置き場所は $TEXMF/fonts/map/dvipdfm// です。

とりあえずこれで大丈夫です。

### UNIX 互換 OS でのインストール {#aec1d55c}

Mac OS X，Solaris，Linux，BSD などの場合も，
上とまったく同じファイルを使ってインストールできます。

[pTeX](http://ascii.asciimw.jp/pb/ptex/)
そのものは[土村さん](http://www.nn.iij4u.or.jp/~tutimura/)の
[ptetex](http://www.nn.iij4u.or.jp/~tutimura/tex/ptetex.html)
でインストールされているものとします。
これにはすでに UTF パッケージが含まれています。これに
OTF パッケージを加えるには，インストール時に

```
$ make otf
```

とするだけです。

以下では手動で入れる方法を説明します。
ただし，/usr/local/teTeX/share/texmf/packages/utfsrc/sty/ajmacros.sty は
UTF パッケージの中にもあるので，古い方は消すか名前を変えておきます。

```
$ cd /usr/local/teTeX/share/texmf/packages
$ sudo unzip otfstable.zip
$ cd otfstable
$ sudo ./makeotf
$ cd /usr/local/teTeX/share/texmf/ptex/platex
$ sudo ln -s ../../packages/otfstable/sty otfstable
$ cd /usr/local/teTeX/share/texmf/fonts/tfm/public
$ sudo ln -s ../../../packages/otfstable/tfm otfstable
$ cd /usr/local/teTeX/share/texmf/fonts/vf/public
$ sudo ln -s ../../../packages/otfstable/vf otfstable
$ mktexlsr
```

CMap ファイルについても Microsoft Windows の場合と同じでかまいません。
Adobe 提供の CMap ファイルが2009年9月、オープンソースになりました。
[Adobe, CMap Resources](http://opensource.adobe.com/wiki/display/cmap/) から "Download" へ進み、
"CMap Resources" の中から
Adobe-Japan1-6, Adobe-GB1-5, Adobe-CNS1-6, Adobe-Korea1-2 を取得できます。 <!-- ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/ --> <!-- の&ref(ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/aj16.tar.Z);, --> <!-- &ref(ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/ag15.tar.Z);, --> <!-- &ref(ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/ac15.tar.Z);, --> <!-- &ref(ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/ak12.tar.Z); -->
これを /usr/local/share/ghostscript/?.??/Resource/ で展開し，
次のようにシンボリックリンクを張ればいいでしょう：

```
$ cd /usr/local/teTeX/share/texmf/dvipdfmx
$ sudo ln -s /usr/local/share/ghostscript/?.??/Resource .
```

土村さんが ptetex-cmap を用意してくださいました。これを使うのが便利でしょう。

> makeotf から呼び出される ovp2ovf は teTeX 標準のものを使うと失敗します。
> 土村さんの ptetex では tetex-src-3.0/texk/web2c/omegaware に含まれる
> OVP2OVF 1.11 (Web2C-7.5.4) がインストールされるので，うまくいきます。
> teTeX のデフォルトでは，このバージョンは make されません。

### フォントを埋め込まず使用する {#m049c993}

まず OpenType フォントを持っていなくても試せる方法です。Ryimun-Light と
GothicBBB-Meduim は，dvipdfmx では埋め込まれないフォントであることと，
埋め込まれてない Ryumin-Light と GothicBBB-Medium を Adobe
[Reader](http://www.adobe.com/jp/products/reader/)/[Acrobat](http://www.adobe.com/jp/products/acrobat/)
が適切なフォントに代替して表示・印刷することを利用する方法です。dvipdfmx
および Adobe Reader/Acrobat で
使える[日本語フォントパック](http://www.adobe.com/jp/products/acrobat/acrrasianfontpack.html)は
すでにインストールされているものとします。

$TEXMF/fonts/map/dvipdfm/base/cid-x.map に次のように書きます。

```
rml         H               Ryumin-Light
rmlv        V               Ryumin-Light

gbm         H               GothicBBB-Medium
gbmv        V               GothicBBB-Medium

hminr-h     H               Ryumin-Light
hminr-v     V               Ryumin-Light
otf-ujmr-h  UniJIS-UTF16-H  Ryumin-Light
otf-ujmr-v  UniJIS-UTF16-V  Ryumin-Light
otf-cjmr-h  Adobe-Japan1-6  Ryumin-Light
otf-cjmr-v  Identity-V      Ryumin-Light

hgothr-h    H               GothicBBB-Medium
hgothr-v    V               GothicBBB-Medium
otf-ujgr-h  UniJIS-UTF16-H  GothicBBB-Medium
otf-ujgr-v  UniJIS-UTF16-V  GothicBBB-Medium
otf-cjgr-h  Adobe-Japan1-6  GothicBBB-Medium
otf-cjgr-v  Identity-V      GothicBBB-Medium
```

これで次のものをテストしてみます。
\UTF{...} は十六進4桁の Unicode 番号，\CID{...} は十進の CID 番号を使います。

***

```
%%% -*- mode: yatex; Coding: iso-2022-jp; Encoding: ISO-2022-JP -*-
\documentclass{jsarticle}
\usepackage{otf}
\begin{document}

森\UTF{9DD7}外と内田百\UTF{9592}とが\UTF{9AD9}島屋に行くところを想像した。

\CID{7652}飾区の\CID{13706}野屋

\end{document}
```

***

これを “hoge.tex” という名前で保存し，
コマンド プロンプトで次のようにして処理します。

```
>platex hoge.tex
>dvipdfmx hoge.dvi
>START hoge.pdf
```

<!-- UNIX 互換 OS の場合は -->
<!--  $ open hoge.pdf -->

これで hoge.pdf が Adobe Reader/Acrobat で開き，
ちゃんと表示されたと思います。

Adobe Reader/Acrobat 9.3.2 [^1]をお使いの方が多くなりましたので，最新の
Adobe-Japan1-6 の文字を表示させて見ましょう。OTF パッケージは
開発版を使用します。

テスト用の pLaTeX ソースは，例えば次のものを用いてみます。

***

```
%%% -*- mode: yatex; Coding: iso-2022-jp; Encoding: ISO-2022-JP -*-
\documentclass{jarticle}
\usepackage{otf}
\begin{document}
Adobe-Japan1-5で追加された文字を使った例
\begin{itemize}
  \item 「\゜か」，「\゜き」，「\゜く」，「\゜け」，「\゜こ」，
        「\゜カ」，「\゜キ」，「\゜ク」，「\゜ケ」，「\゜コ」は鼻濁音を表す。
  \item Macintosh用キーボードの\UTF{2318}(Command key)を押す。
  \item \UTF{2672}を心がけよう。
\end{itemize}

Adobe-Japan1-6で追加された文字を使った例
\begin{itemize}
  \item ほげほげ番組\CID{20556}
  \item ほげほげフェスティバル\CID{20656}
  \item \CID{20939}(Bq: becquerel)は放射能の強さを表す単位である。
  \item フラーレン(fullerene) C$_{60}$は
        サッカーボール状（\CID{20957}）の構造をしている。
  \item \UTF{9B87}とは岩魚（イワナ）のことであり，嘉魚とも書く。
\end{itemize}
\end{document}
```

***

最初の3項目に Adobe-Japan1-5 で追加された文字を，次の5項目に
Adobe-Japan1-6 で追加された文字を使っています。コマンド処理は上と同様

[^1]: 9.2.0以降は「Windows 7」に対応済みですが，これまでの過去のVer. には脆弱性がありますので，9.3.2の利用を推奨いたします。
