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
Adobe-Japan1-6 で追加された文字を使っています。コマンド処理は上と同様です。

コマンドが苦手な方は，TeXWiki:WinShell3 に
簡単な方法が書かれているのでご覧ください。

### フォントを埋め込むには {#hf05d89a}

上の方法で作った PDF ファイルは，和文フォントが埋め込まれていないので
軽いのですが，どんな環境でも文字化けせず読めるというわけではありません。
実際，上の pLaTeX ファイルに “\gtfamily” と書き込んで
全部をゴシック体にすると，Adobe Reader/Acrobat 9.3.0 で開いた場合に
「土口の吉」が明朝体になってしまうことがあります。

どのような環境でも読めるようにするには，フォントを埋め込まなければなりません。
そのためには OpenType フォントが必要です。

#### UNIX 互換 OS の場合 {#c2475144}

とりあえず Adobe Reader/Acrobat 9 の KozMinPr6N-Regular.otf のある
ディレクトリを $TEXMFLOCAL/fonts/opentype// ディレクトリ以下から
シンボリックリンクした状態で，cid-x.map を次のように書き直します。

```
hminr-h     H               KozMinPr6N-Regular.otf
hminr-v     V               KozMinPr6N-Regular.otf
otf-ujmr-h  UniJIS-UTF16-H  KozMinPr6N-Regular.otf
otf-ujmr-v  UniJIS-UTF16-V  KozMinPr6N-Regular.otf
otf-cjmr-h  Adobe-Japan1-6  KozMinPr6N-Regular.otf
otf-cjmr-v  Identity-V      KozMinPr6N-Regular.otf
```

これで明朝体については「小塚明朝 Pr6N R」が埋め込まれるので
Adobe-Japan1-6 の範囲なら誰でも読めるようになります。

#### Microsoft Windows NT 6.x系 (Vista・7) の場合 {#p413a15f}

とりあえず　$TEXMF/fonts/opentype/Adobe/ に Adobe Reader/Acrobat 9.3.2 の KozMinPr6N-Regular.otf ・ KozGoPr6N-Medium.otf のシンボリックリンク（管理者権限で「コマンド プロンプト」を開き， mklink を実行します。）を作成し，$TEXMF/fonts/map/dvipdfm/base/cid-x.map に次のように書きます（C:/Windows/Fonts/ にある KozMinPr6N-Regular.otf 等の otf ファイルを $TEXMF/fonts/opentype/Adobe/ に直接コピーすることはライセンス上できません）。

```
rml         H               KozMinPr6N-Regular.otf
rmlv        V               KozMinPr6N-Regular.otf

gbm         H               KozGoPr6N-Medium.otf
gbmv        V               KozGoPr6N-Medium.otf

hminr-h     H               KozMinPr6N-Regular.otf
hminr-v     V               KozMinPr6N-Regular.otf
otf-ujmr-h  UniJIS-UTF16-H  KozMinPr6N-Regular.otf
otf-ujmr-v  UniJIS-UTF16-V  KozMinPr6N-Regular.otf
otf-cjmr-h  Adobe-Japan1-6  KozMinPr6N-Regular.otf
otf-cjmr-v  Identity-V      KozMinPr6N-Regular.otf

hgothr-h    H               KozGoPr6N-Medium.otf
hgothr-v    V               KozGoPr6N-Medium.otf
otf-ujgr-h  UniJIS-UTF16-H  KozGoPr6N-Medium.otf
otf-ujgr-v  UniJIS-UTF16-V  KozGoPr6N-Medium.otf
otf-cjgr-h  Adobe-Japan1-6  KozGoPr6N-Medium.otf
otf-cjgr-v  Identity-V      KozGoPr6N-Medium.otf
```

これで明朝体については「小塚明朝 Pr6N R」が，ゴシック体については「小塚ゴシック Pr6N M」がそれぞれ埋め込まれるので，Adobe-Japan1-6 の範囲なら誰でも読めるようになります。

なお，Adobe に問い合わせたところ，[日本語フォントパック](http://www.adobe.com/jp/products/acrobat/acrrasianfontpack.html)内の
OpenType フォントの用途として，Adobe Reader/Acrobat での
プレビュー・印刷用途を想定しているようです。
上のような dvipdfmx を利用したフォントの埋め込みはライセンス違反となりますのでご注意下さい（[TeXWiki:フォント](</フォント/>) にある Adobe-Japan1-6 に完全対応した和文フォント（有償）を購入している場合には問題ありません）。

OpenType 100 （[ダイナコムウェア](http://www.dynacw.co.jp/)）の DFHSMinchoStd-W3.otf でもやってみましたが，通常の場合は
問題なかったのに，OTF パッケージで使う場合はエラーになってしまいました：

```
*** Unknown charstring operator: <02> ***

*** Parsing charstring failed ***
error: -1 (stack depth: 11)

Cannot continue ...
```

### Adobe-Japan1-x とは {#j54465d8}

2004年6月に出た，現時点で最新の Adobe-Japan1-6 は，JIS C 6226:1978，JIS X 0213:2000，JIS X 0212:1990の規格表示体，JIS X 0213:2004の印刷標準字体や
U-PRESS用の文字を含む23,058グリフの文字セットです。
Adobe Reader 9 そのもの（またはそれに用いる日本語フォントパック）に含まれている 
KozMinPr6N-Regular.otf  と KozGoPr6N-Medium.otf がこれに準拠していますので，Adobe Reader 9 が
対応している OS ならどれでも無償で豊富なフォントを利用できるようになりました
（ちなみに Linux/Solaris 版の Adobe Reader 9 に
対する[アジア言語フォントパック](ftp://ftp.adobe.com/pub/adobe/reader/unix/9.x/9.1/misc/)および
Microsoft Windows 版の Adobe Reader 9 に
対する[アジア言語フォントパック](ftp://ftp.adobe.com/pub/adobe/reader/win/9.x/9.0/misc/)には，いずれも

- KozMinPr6N-Regular.otf ［Adobe-Japan1-6 対応の日本語明朝体フォント］
- KozGoPr6N-Medium.otf ［Adobe-Japan1-6 対応の日本語ゴシック体フォント］
- AdobeSongStd-Light.otf ［Adobe-GB1-5 対応の簡化字中国語宋体フォント］
- AdobeHeitiStd-Regular.otf ［Adobe-GB1-5 対応の簡化字中国語黒体フォント］
- AdobeMingStd-Light.otf ［Adobe-CNS1-5 対応の繁體中国語明體フォント］
- AdobeMyungjoStd-Medium.otf ［Adobe-Korea1-2 対応の
    韓國語｛&#xd55c;&#xad6d;&#xc5b4;｝明朝體｛&#xba85;&#xc870;&#xccb4;｝フォント］

が附属しています）。

2002年9月に出た Adobe-Japan1-5 は，JIS X 0213:2000 （JIS 第3，第4水準）や
国語審議会報告に基づく印刷標準字体の文字を含む20,317グリフの文字セットです。
Mac OS X v10.2 のヒラギノ Pro がこれに準拠しています
（実は18文字だけ足りないそうです →
「[ZDNet Mac: デザイン &amp; パブリッシング分野で Mac OS X がすぐれている理由［Internet Archive のウェブアーカイブ］](http://web.archive.org/web/20031020083437/http://www.zdnet.co.jp/macwire/0211/07/nj00_dandp.html)」，Mac
OS X v10.2.4 以降のヒラギノ \[ver 7.11\] には
全部のグリフがあるそうです［Thanks: uchiyama さん］）。
[ダイナコムウェア](http://www.dynacw.co.jp/)の OpenType
平成書体パックは Adobe-Japan1-5 準拠だそうです ([qa:41849](https://okumuralab.org/~okumura/texfaq/qa/41849.html))。

Adobe-Japan1-4 は15,444グリフの文字セットです。
Adobe Acrobat (Reader) 5，Adobe Reader/Acrobat 6 の
KozMinPro-Regular-Acro.otf，KozGoPro-Medium-Acro.otf はこれのようです。

Adobe-Japan1-3 は9,354グリフの文字セットで，Std の附く名前の OpenType フォント，
例えばダイナコムウェアのOpenType 100 や，Adobe の古いバージョンの製品に附いている小塚フォントがこれにあたります。

### ヒラギノと Mac OS X {#l1d1369f}

ヒラギノを買ったら PowerBook がオマケに附いてきました（ウソ）。

cid-x.map の OTF パッケージ用の項目を全て消し，OTF パッケージに
附いていた “hiraginox.map(for dvipdfmx)” を “hiraginox.map” と改名して
$TEXMFLOCAL/fonts/map/dvipdfm// ディレクトリ以下に入れ，dvipdfmx.cfg の最後に

```
f hiraginox.map
```

と付け加えました。
これで2万グリフのヒラギノが使えるようになりました。めでたしめでたし。

!["ヒラギノ出力例"](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/hiragino.png)

\usepackage\[expert\]{otf} とすると，
ご覧のように，縦書きと横書きで一部の字形が変わります（拙著旧版
『[［改訂版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun2e.html)』も
ヒラギノですが変わらなかったのは OpenType 版ヒラギノではなかったから）。
ちなみに無指定の OTF パッケージでは
\bfseries で同じウェイトのゴシックになるだけですので，
上の図の例では “bold” オプションも加えて太いゴシックにしてあります。

### 新しいフォントメトリック {#y2c312cd}

OTF パッケージを（“noreplace” オプション以外で）使うと，\UTF{...} や
\CID{...} で指定した文字以外についても，新しい和文用メトリックが使われます。
これは JIS フォントメトリックとほぼ同じですが，JIS フォントメトリックが今までの
min10 などのしがらみを引きずって「高さ + 深さ &lt; 幅」であったのに対し，OTF
パッケージの新 JIS メトリックは正方形（高さ + 深さ = 幅）です。従って，1 zw
= 1 zh です（公称 10 pt のフォントで 1 zw = 1 zh = 9.62216 pt）。また，
一般的な PostScript の和文フォントにならって「高さ : 深さ = 88 : 12」です。

さらに，「？」と「！」（JIS の用語では「区切り約物」）の後に，
横書きの場合も 0.5 zw のグルー（スペース）が入るようになりました
（縦書きでは tmin10 などと同様 1 zw が入ります）。このグルーを禁止するには

```
あっ！\inhibitglue と驚く
```

または

```
あっ！\<と驚く
```

と書かなければなりません。

### UTF-8 入力での利用 {#u1eb9e1c}

[安田功さん](http://www.ceres.dti.ne.jp/~i-yasuda/)の
[Utf82TeX](http://www.ceres.dti.ne.jp/~i-yasuda/tex/utf82tex.html)
は，UTF-8 の入力ファイルを pLaTeX で処理可能な文字やコントロールシーケンスに
変換するプリプロセッサです。これを使えば，漢字・ハングル（&#xd55c;&#xae00;）等
CJK の文字は OTF パッケージのコントロールシーケンスに変換できるので，
文字コードを直接数値入力する手間が
省けます。[TeXWiki:pTeX と多言語処理 #多言語の Unicode 直接入力と pTeX](</pTeXと多言語処理/#cyraccpw>)
にも解説があります。

[大友さん](http://www.klavis.info/)の[機種依存文字変換テーブル](http://www.klavis.info/sjistbl.txt)を
併用すると丸附き数字（e.g. &#x2460; \[U+2460\]）なども変換できて便利そうです
（[qa:41425](https://okumuralab.org/~okumura/texfaq/qa/41425.html) 参照）。

一方，[角藤さん](http://www.fsci.fuk.kindai.ac.jp/kakuto/)の配布に
含まれる[utf8toutf](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/utils/utf8toutf.zip)
の方は Microsoft Windows 用の exe 実行ファイルも附いていますし，より簡単に
使えそうです。ソースはC言語で，UNIX 互換 OS でも make 一発で作れます。

### dviout for Windows での使用 {#z044b3e2}

[dviout for Windows](/dviout/) では \CID{...} などでの Adobe-Japan1 の
CID 直接参照の機能は無く，代わりに CID → Unicode の変換を経由した表示機能が
あります。dviout for Windows Ver. 3.18 で CID → Unicode の変換テーブルが
強化されました。\CID{...} を利用されている方はアップデートをお薦めします。
dviout for Windows Ver. 3.18 より expert オプションが簡易的ながら利用可能に
なりました。縦組み専用仮名・横組み専用仮名・ルビ用仮名が汎用仮名に置換されて
出力されます。expert ならではの機能にはなりませんが，プレヴューや下書きには
役に立つことでしょう。deluxe オプション（多ウェイト化）は制限なく利用可です。
最終出力には dviout ではなく，dvipdfmx や dvips など
CID に完全対応した DVIware を利用しましょう。

Adobe 製品に附いている小塚フォントを使う場合は，次のような
マップファイルを用意し，\[Option\] → \[Setup Parameters...\] → \[Font2\] → ftt:
にそのマップファイルのフルパスを記入し，\[Save\] → \[Ok\] します。

***

```
hminr-h      "小塚明朝 Pr6N R"
hminr-v     "@小塚明朝 Pr6N R"
otf-ujmr-h   "小塚明朝 Pr6N R"      Unicode
otf-ujmr-v  "@小塚明朝 Pr6N R"      Unicode
otf-cjmr-h   "小塚明朝 Pr6N R"      CID2Uni
otf-cjmr-v  "@小塚明朝 Pr6N R"      CID2Uni

hgothr-h     "小塚ゴシック Pr6N M"
hgothr-v    "@小塚ゴシック Pr6N M"
otf-ujgr-h   "小塚ゴシック Pr6N M"  Unicode
otf-ujgr-v  "@小塚ゴシック Pr6N M"  Unicode
otf-cjgr-h   "小塚ゴシック Pr6N M"  CID2Uni
otf-cjgr-v  "@小塚ゴシック Pr6N M"  CID2Uni

hminb-h      "小塚明朝 Pr6N B"
hminb-v     "@小塚明朝 Pr6N B"
otf-ujmb-h   "小塚明朝 Pr6N B"      Unicode
otf-ujmb-v  "@小塚明朝 Pr6N B"      Unicode
otf-cjmb-h   "小塚明朝 Pr6N B"      CID2Uni
otf-cjmb-v  "@小塚明朝 Pr6N B"      CID2Uni

hgothb-h     "小塚ゴシック Pr6N B"
hgothb-v    "@小塚ゴシック Pr6N B"
otf-ujgb-h   "小塚ゴシック Pr6N B"  Unicode
otf-ujgb-v  "@小塚ゴシック Pr6N B"  Unicode
otf-cjgb-h   "小塚ゴシック Pr6N B"  CID2Uni
otf-cjgb-v  "@小塚ゴシック Pr6N B"  CID2Uni

hmgothr-h     "小塚ゴシック Pr6N H"
hmgothr-v    "@小塚ゴシック Pr6N H"
otf-ujmgr-h   "小塚ゴシック Pr6N H"  Unicode
otf-ujmgr-v  "@小塚ゴシック Pr6N H"  Unicode
otf-cjmgr-h   "小塚ゴシック Pr6N H"  CID2Uni
otf-cjmgr-v  "@小塚ゴシック Pr6N H"  CID2Uni
```

***

モリサワフォントを使う場合は，次のような
マップファイルを用意し，\[Option\] → \[Setup Parameters...\] → \[Font2\] → ftt:
にそのマップファイルのフルパスを記入し，\[Save\] → \[Ok\] します。

***

```
otf-ujmr-h  "A-OTF リュウミン Pr6N L-KL" unicode
otf-ujmr-v  "@A-OTF リュウミン Pr6N L-KL" unicode
otf-cjmr-h  "A-OTF リュウミン Pr6N L-KL" cid2uni
otf-cjmr-v  "@A-OTF リュウミン Pr6N L-KL" cid2uni
hminr-h     "A-OTF リュウミン Pr6N L-KL"
hminr-v     "@A-OTF リュウミン Pr6N L-KL"
```

```
otf-ujgr-h  "A-OTF 中ゴシックBBB Pr6N Med" unicode
otf-ujgr-v  "@A-OTF 中ゴシックBBB Pr6N Med" unicode
otf-cjgr-h  "A-OTF 中ゴシックBBB Pr6N Med" cid2uni
otf-cjgr-v  "@A-OTF 中ゴシックBBB Pr6N Med" cid2uni
hgothr-h    "A-OTF 中ゴシックBBB Pr6N Med"
hgothr-v    "@A-OTF 中ゴシックBBB Pr6N Med"
```

```
otf-ujmb-h  "A-OTF 太ミンA101 Pr6N Bold" unicode
otf-ujmb-v  "@A-OTF 太ミンA101 Pr6N Bold" unicode
otf-cjmb-h  "A-OTF 太ミンA101 Pr6N Bold" cid2uni
otf-cjmb-v  "@A-OTF 太ミンA101 Pr6N Bold" cid2uni
hminb-h     "A-OTF 太ミンA101 Pr6N Bold"
hminb-v     "@A-OTF 太ミンA101 Pr6N Bold"
```

```
otf-ujgb-h  "A-OTF 太ゴB101 Pr6N Bold" unicode
otf-ujgb-v  "@A-OTF 太ゴB101 Pr6N Bold" unicode
otf-cjgb-h  "A-OTF 太ゴB101 Pr6N Bold" cid2uni
otf-cjgb-v  "@A-OTF 太ゴB101 Pr6N Bold" cid2uni
hgothb-h    "A-OTF 太ゴB101 Pr6N Bold"
hgothb-v    "@A-OTF 太ゴB101 Pr6N Bold"
```

```
otf-ujmgr-h "A-OTF 見出ゴMB31 Pr6N MB31" unicode
otf-ujmgr-v "@A-OTF 見出ゴMB31 Pr6N MB31" unicode
otf-cjmgr-h "A-OTF 見出ゴMB31 Pr6N MB31" cid2uni
otf-cjmgr-v "@A-OTF 見出ゴMB31 Pr6N MB31" cid2uni
hmgothr-h   "A-OTF 見出ゴMB31 Pr6N MB31"
hmgothr-v   "@A-OTF 見出ゴMB31 Pr6N MB31"
```

***

ただし dviout for Windows は Windows API で文字を描いているので，Unicode の
使える Microsoft Windows 7, Vista, XP x64 Edition, XP, 2000 などでしか使えないと思います。
また CID 番号を直接指定しても，Unicode に
変換できるもの以外は “The OS returns the error code 0” という警告を出して
化けてしまいます ([qa:17849](https://okumuralab.org/~okumura/texfaq/qa/17849.html))。

### 美文書第3版から第4版の CD-ROM インストールへの乗り換えに関するメモ {#c6411905}

/usr/local/share/texmf-local/ の下に /usr/local/share/texmf/ の下にあるものと
同じディレクトリ・ツリーを作成し，以下のファイルをコピーします。

- /usr/local/share/texmf/dvipdfm/config/dvipdfmx.cfg
- /usr/local/share/texmf/fonts/map/dvipdfm//\*.map （dvipdfmx 用の map ファイル）
- /usr/local/share/texmf/web2c/texmf.cnf

このとき，“texmf.cnf” を修正すると良いでしょう。変数 “TTFONTS” と同様に，
変数 “OPENTYPEFONTS” に “;$SYSTTF” を次のように付け加えます。

```
OPENTYPEFONTS = .;$SYSTTF;$TEXMF/fonts/opentype//
```

こうすると，TeX に使う OpenType フォントを $TEXMF/fonts/opentype// と
システム ($SYSTTF/) とに2重にインストールする必要がなくなります。

また OS が Microsoft Windows であれば，[dviout for Windows](/dviout/) 用の
map ファイルも今まで使っていたものを dviout\map\ にコピーする必要があります。
ファイル名としては “$user.map” が推奨されています。
（OTF パッケージとは無関係ですが，dviout 用の
[Susie](http://www.digitalpad.co.jp/~takechin/) プラグインも
コピーする必要があります。）

> ※ Microsoft Windows でフォントに関するトラブルが発生した場合は，
> “FNTCACHE.DAT” と “ICONCACHE.DB” を削除すると解決することがあります。
> 複数存在する場合があるので，ハードディスク全部を検索すると良いでしょう。

### CID 番号参照用のサンプルへのリンク {#ze53c84a}

- [Font and Type Technology Center&mdash;Font technical notes #CJK/CID-keyed fonts](http://www.adobe.com/devnet/font/#ckf)
    - [Adobe-Japan1-6 Character Collection for CID-Keyed Fonts #5078 (PDF,10.3 MiB)](http://www.adobe.com/devnet/font/pdfs/5078.Adobe-Japan1-6.pdf)
    - [Adobe-GB1-5 Character Collection for CID-Keyed Fonts #5079 (PDF,12.6 MiB)](http://www.adobe.com/devnet/font/pdfs/5079.Adobe-GB1-5.pdf)
    - [Adobe-CNS1-5 Character Collection for CID-Keyed Fonts #5080 (PDF,8.0 MiB)](http://www.adobe.com/devnet/font/pdfs/5080.Adobe-CNS1-5.pdf)
    - [Adobe-Korea1-2 Character Collection for CID-Keyed Fonts #5093 (PDF,6.0 MiB)](http://www.adobe.com/devnet/font/pdfs/5093.Adobe-Korea1-2.pdf)

- [ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/)<br>
    [ftp://ftp.oreilly.de/pub/examples/english_examples/nutshell/cjkv/adobe/](ftp://ftp.oreilly.de/pub/examples/english_examples/nutshell/cjkv/adobe/)<br>
    [http://examples.oreilly.de/english_examples/nutshell/cjkv/adobe/](http://examples.oreilly.de/english_examples/nutshell/cjkv/adobe/)
    - [aj16-radical-stroke.pdf](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/aj16-radical-stroke.pdf)
    - [aj16-utf32.pdf](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/aj16-utf32.pdf)
    - [ag15-utf32.pdf](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/ag15-utf32.pdf)
    - [ac15-utf32.pdf](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/ac15-utf32.pdf)
    - [ak12-utf32.pdf](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/ak12-utf32.pdf)

- [安岡孝一先生の website](http://kanji.zinbun.kyoto-u.ac.jp/~yasuoka/index-j.html)
    - [Adobe-Japan1 の漢字（部首画数順） (PDF)](http://kanji.zinbun.kyoto-u.ac.jp/~yasuoka/publications/Adobe-Japan1kanji.pdf)

## map Files for the OTF/UTF Package {#nc92c884}

ここからの話の対象は W32TeX，あるいは
UNIX，Unix-like OS では ptetex3 以外の場合であろうと思われます。

> ptetex3 をお使いの場合は，別の手段が用意されています。
> フォントヘのシンボリックリンクは “make font” で
> 自動的に作られます。map ファイルも準備されていますし，埋め込み制御は
>
> ```
> $ updmap --setoption kanjiEmbed noEmbed  （埋め込まない）
> $ updmap --setoption kanjiEmbed hiragino （ヒラギノ書体を埋め込む）
> $ updmap --setoption kanjiEmbed ipa      （IPAフォントを埋め込む）
> $ updmap --setoption kanjiEmbed kozuka   （小塚書体を埋め込む）
> $ updmap --setoption kanjiEmbed morisawa （モリサワフォントを埋め込む）
> ```
>
> などを実行すれば dvips/dvipdfmx/xdvi の設定がすべて切り替わります。

dvipdfmx の設定を一時的に変更したいだけなら，コマンドラインから

```
dvipdfmx -f ptex-hiragino.map -f utf-hiragino.map -f otf-hiragino.map hoge.dvi
```

などとオプション “-f” で直接指定する方法もあります。

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->
<!-- otf-cjmr-h は，前半では Identity-H と紹介されていますが， -->
<!-- 以下では Adobe-Japan1-6 にしてあるのはどういう意味があるのでしょうか。 -->
<!-- Adobe-Japan1-6 は「必要な４つの CMap」にも含まれてませんが，いいのかな。 -->

<!-- 日本語の OpenType フォント内には Adobe-Japan1 の情報が入っているので， -->
<!-- 日本語の OpenType フォントを使う場合には -->
<!-- Adobe-Japan1-6 は必要なく Identity-H でもかまいません。 -->
<!-- TrueType フォントには Adobe-Japan1 の情報が入っていないので， -->
<!-- TrueType フォントを使って CID 番号の命令 (\CID{}) から文字を出す場合には -->
<!-- CMap に Adobe-Japan1-6 を指定するか， -->
<!-- または Identity-H, Identity-V を指定した上で -->
<!-- TrueType フォント名の最後に “/AJ16” を付け加える必要があります。 -->
<!-- 中国語や韓國語についても同様のことが言えます。 -->
<!-- （下の記述にある Microsoft Windows の TrueType フォントを使う場合の -->
<!--   dvipdfmx 用の map ファイルや次のサイトをご参照ください。 -->
<!--   http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?LaTeX-CJK#odc3338f -->
<!--   http://cvs.ktug.or.kr/viewcvs/*checkout*/dvipdfmx/README?rev=1.24 -->
<!--   http://www.ring.gr.jp/pub/text/CTAN/dviware/dvipdfmx/README       ） -->
<!-- 実際に，Adobe-Japan1-6 や “/AJ16” を使わずに -->
<!-- Identity-H, Identity-V と TrueType フォントを使うように -->
<!--  -->
<!--  otf-cjmr-h     Identity-H       :0:msmincho.ttc -->
<!--  otf-cjmr-v     Identity-V       :0:msmincho.ttc -->
<!--  -->
<!-- などと map ファイルに書いた上で -->
<!--  -->
<!--  \documentclass{jsarticle} -->
<!--  %\documentclass{tarticle} -->
<!--  \usepackage[deluxe,multi]{otf} -->
<!--  \begin{document} -->
<!--  \noindent -->
<!--  日本語\\ -->
<!--  \UTF{65E5}\UTF{672C}\UTF{8A9E}\\ -->
<!--  \CID{3284}\CID{3722}\CID{1952} -->
<!--  \end{document} -->
<!--  -->
<!-- と書いて dvipdfmx で処理してみると -->
<!-- おそらく3行目の CID 番号による部分が文字化けするので， -->
<!-- Adobe-Japan1-6 の必要性がわかると思います。 -->
<!--  -->
<!-- OTF パッケージの機能をフルに活用しようとすれば， -->
<!-- H, UniJIS-UTF16-H, UniGB-UTF16-H, UniCNS-UTF16-H, UniKS-UTF16-H, -->
<!-- V, UniJIS-UTF16-V, UniGB-UTF16-V, UniCNS-UTF16-V, UniKS-UTF16-V, -->
<!-- Identity-H, Identity-V, Adobe-Japan1-6, Adobe-Korea1-2, -->
<!-- Adobe-GB1-5, Adobe-CNS1-5  -->
<!-- の計16個の CMap が必要になります。 -->
<!--  -->
<!-- 前半の記述は別の方がお書きになったもので， -->
<!-- 記述内容に差がある部分もあると思います。 -->
<!-- 時間が許せば，前半と後半とをひとまとめにしたいと思っております。 -->
<!--  -->
<!-- ptetex3 の updmap では CJK フォントも対象になっているのですか。 -->
<!-- W32TeX では updmap は CJK フォント以外のみに対応しています。 -->
<!-- ところで，ptetex3 では updmap での（特に Mac OS X での） -->
<!-- 中国語や韓國語のフォントの埋め込み制御はどのようになっているのでしょうか？ -->
<!-- 上の記述では日本語フォントの埋め込み制御しか無いようですが。 -->

<!-- 丁寧な解説ありがとうございます。TrueType フォントのことを忘れておりました。 -->
<!-- Adobe-Japan1-6 の意義がようやくわかりました。 -->
<!-- 個人的な感想を書かせていただきますと， -->
<!-- ご承知の通り Identity-{H,V} の二つはまったく同一ですから， -->
<!-- otf-cjmr-{h,v} のエンコードの表記は， -->
<!-- やはり揃えておいたほうが誤解が少ないように思います。 -->
<!-- （私は長い間 Identity-V は縦書きの文字に置き換えられると思っていました。） -->
<!-- ptetex3 の updmap については，以下が詳しいです。 -->
<!-- http://tutimura.ath.cx/ptetex/?%A5%D5%A5%A9%A5%F3%A5%C8%A4%CE%BD%B8%C3%E6%B4%C9%CD%FD -->
<!-- 中韓のフォントの埋め込み制御はできないようですが， -->
<!-- 埋め込み制御は dvipdfm に直接オプションで指定するのがよいと思います。 -->

<!-- Identity-H と Identity-V とは同じではありませんよ。例えば -->
<!--  -->
<!--  otf-cjmr-h     Identity-V          Ryumin-Light -->
<!--  -->
<!-- とすると，文字が横に寝てしまいます。 -->
<!--  -->
<!-- 私は CMap の部分にはできるだけ Identity-H を使わずに， -->
<!-- その CID 番号に対応した CMap 名を表記するべきだと考えます。例えば， -->
<!--  -->
<!--  otf-cjmr-h     Identity-H          MSung-Light -->
<!--  -->
<!-- のように map ファイルを書いても dvipdfmx は何のエラーも出さずに -->
<!-- 処理を完了させます。しかし実際に PDF を表示してみると， -->
<!-- 日本語用の CID 番号による部分が見事に文字化けしています。 -->
<!-- Identity-H と書いて実質 CMap を特定しなかったために -->
<!-- MSung-Light 内の CMap 情報である Adobe-CNS1 を使ってしまったのが原因です。 -->
<!-- 当然この virtual font “otf-cjmr-h” は -->
<!-- 日本語用の CID 番号の CMap である Adobe-Japan1 のみに対応しています。 -->
<!-- 従って “otf-cjmr-h” には Adobe-Japan1-6 を使うということを -->
<!-- はっきりと明示するために，map ファイルにはできるだけ -->
<!-- Identity-H ではなく Adobe-Japan1-6 と CMap 名を書くべきだと考えるのです。 -->
<!-- 一方，横組み用の CMap である Adobe-Japan1-6 などを縦組み用の Identity-V と -->
<!-- 置き換えることはできません。もし置き換えてしまうと文字が横に寝てしまいます -->
<!-- （一応 Adobe-Japan1-5-V なるものもありますが，使わないほうが良いとのこと）。 -->
<!-- そのため Identity-V を使わざるを得ません。 -->
<!-- そこで Identity-V と TrueType フォントとを一緒に使う場合には -->
<!-- “/AJ16” などのオプションを付け加えることによって CMap を特定しています。 -->
<!--  -->
<!-- 私も dvipdfmx のオプション “-f” を使って map ファイルを指定し， -->
<!-- 頻繁に埋め込み制御を行っています。ここのページで -->
<!-- map ファイルの代表的な例を挙げているのも，各個人がこの例を参考にして -->
<!-- 独自の map ファイルを作って使って頂ければ幸いと考えたからです。 -->
<!-- しかし，最もよく使う埋め込み制御をデフォルトの map ファイルとして updmap や -->
<!-- cid-x.mapなどの標準 map ファイルに設定しておくのが便利だとは考えます。 -->
<!-- （20th Sep., 2006 現在では W32TeX 附属の -->
<!--   $TEXMFMAIN/fonts/map/dvipdfm/base/cid-x.map に -->
<!--   中国語や韓國語用の virtual font に対する記述はありますが， -->
<!--   Microsoft Windows に標準ではインストールされていないフォントを指定してあるので， -->
<!--   中国語や韓國語に対しては実質使い物になりません。 -->
<!--   ptetex3 ではどうでしょうか？） -->
<!--  -->
<!-- この議論，このページの下の方か TeX Q & A の方へ移した方がよくありませんか？ -->

<!-- これで最後だと思うので，ここに書かせていただきます。 -->
<!-- Identity-{H,V} の文字のマッピングは同一だと思っていたのですが， -->
<!-- それはそうでも，文字の向きが変わってしまうのには気づきませんでした。 -->
<!-- Adobe-Japan1-6 と書かれている気持ちもわかりました。 -->
<!-- どうもありがとうございました。 -->
<!-- ptetex3 では，OpenType フォントが前提になってるようですし， -->
<!-- xdvi との連携もあるので Identity-{H,V} のほうが都合よさそうです。 -->
<!-- ちなみに，中韓は非埋め込みの設定だけが準備されています。 -->
<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->

### For dvipdfmx {#gb0b4cc5}

あらかじめ dvipdfmx で使いたいフォントを，拡張子が “.otf” の
OpenType フォントファイルなら $TEXMFLOCAL/fonts/opentype// 以下に，
拡張子が “.ttf”，“.ttc” の TrueType データ
（2次 B-スプライン曲線データ）フォントなら $TEXMFLOCAL/fonts/truetype// 以下に
コピーまたは移動しておくかシンボリックリンクを作っておきます。
（Microsoft Windows ならば，システムにフォントをインストールしておいても良いでしょう。）

$TEXMF/dvipdfm/config/dvipdfmx.cfg に OTF/UTF パッケージ用の map ファイル
（例えば $TEXMFLOCAL/fonts/map/dvipdfm/local/cid-x-local.map）のファイル名を

```
f cid-x-local.map
```

のように追記した上で，
次のような OTF/UTF パッケージ用の map ファイル
（ここでは $TEXMFLOCAL/fonts/map/dvipdfm/local/cid-x-local.map）を
$TEXMFLOCAL/fonts/map/dvipdfm// 以下に作成します。

（または {$TEXMFMAIN,$TEXMFDIST}/fonts/map/dvipdfm/base/cid-x.map を
$TEXMFLOCAL/fonts/map/dvipdfm/base/cid-x.map にコピーした上で，
$TEXMFLOCAL/fonts/map/dvipdfm/base/cid-x.map の最後に
次のような内容を直接追記しても良いでしょう。）

#### フォントを埋め込まない場合 {#t1a90b4f}

***

```
rml            H                   Ryumin-Light
rmlv           V                   Ryumin-Light

%gbm            H                   GothicBBB-Medium
%gbmv           V                   GothicBBB-Medium

%%% OTF package
hminr-h        H                   Ryumin-Light
hminr-v        V                   Ryumin-Light
otf-ujmr-h     UniJIS-UTF16-H      Ryumin-Light
otf-ujmr-v     UniJIS-UTF16-V      Ryumin-Light
```

<!-- %otf-cjmr-h     Identity-H          Ryumin-Light -->

```
otf-cjmr-h     Adobe-Japan1-6      Ryumin-Light
otf-cjmr-v     Identity-V          Ryumin-Light

hgothr-h       H                   GothicBBB-Medium
hgothr-v       V                   GothicBBB-Medium
otf-ujgr-h     UniJIS-UTF16-H      GothicBBB-Medium
otf-ujgr-v     UniJIS-UTF16-V      GothicBBB-Medium
```

<!-- %otf-cjgr-h     Identity-H          GothicBBB-Medium -->

```
otf-cjgr-h     Adobe-Japan1-6      GothicBBB-Medium
otf-cjgr-v     Identity-V          GothicBBB-Medium

hminb-h        H                   Ryumin-Light,Bold
hminb-v        V                   Ryumin-Light,Bold
otf-ujmb-h     UniJIS-UTF16-H      Ryumin-Light,Bold
otf-ujmb-v     UniJIS-UTF16-V      Ryumin-Light,Bold
```

<!-- %otf-cjmb-h     Identity-H          Ryumin-Light,Bold -->

```
otf-cjmb-h     Adobe-Japan1-6      Ryumin-Light,Bold
otf-cjmb-v     Identity-V          Ryumin-Light,Bold

hgothb-h       H                   GothicBBB-Medium,Bold
hgothb-v       V                   GothicBBB-Medium,Bold
otf-ujgb-h     UniJIS-UTF16-H      GothicBBB-Medium,Bold
otf-ujgb-v     UniJIS-UTF16-V      GothicBBB-Medium,Bold
```

<!-- %otf-cjgb-h     Identity-H          GothicBBB-Medium,Bold -->

```
otf-cjgb-h     Adobe-Japan1-6      GothicBBB-Medium,Bold
otf-cjgb-v     Identity-V          GothicBBB-Medium,Bold

otf-ucmr-h     UniGB-UTF16-H       STSong-Light
otf-ucmr-v     UniGB-UTF16-V       STSong-Light
```

<!-- %otf-ccmr-h     Identity-H          STSong-Light -->

```
otf-ccmr-h     Adobe-GB1-5         STSong-Light
otf-ccmr-v     Identity-V          STSong-Light

```

<!-- %otf-ucgr-h     UniGB-UTF16-H       STHeiti-Regular -->
<!-- %otf-ucgr-v     UniGB-UTF16-V       STHeiti-Regular -->
<!-- %otf-ccgr-h     Identity-H          STHeiti-Regular -->
<!-- %otf-ccgr-h     Adobe-GB1-5         STHeiti-Regular -->
<!-- %otf-ccgr-v     Identity-V          STHeiti-Regular -->
<!--  -->

```
%otf-ucgr-h     UniGB-UTF16-H      !AdobeHeitiStd-Regular.otf
%otf-ucgr-v     UniGB-UTF16-V      !AdobeHeitiStd-Regular.otf
```

<!-- %otf-ccgr-h     Identity-H         !AdobeHeitiStd-Regular.otf -->

```
%otf-ccgr-h     Adobe-GB1-5        !AdobeHeitiStd-Regular.otf
%otf-ccgr-v     Identity-V         !AdobeHeitiStd-Regular.otf

otf-utmr-h     UniCNS-UTF16-H      MSung-Light
otf-utmr-v     UniCNS-UTF16-V      MSung-Light
```

<!-- %otf-ctmr-h     Identity-H          MSung-Light -->

```
otf-ctmr-h     Adobe-CNS1-5        MSung-Light
otf-ctmr-v     Identity-V          MSung-Light

otf-utgr-h     UniCNS-UTF16-H      MHei-Medium
otf-utgr-v     UniCNS-UTF16-V      MHei-Medium
otf-ctgr-h     Adobe-CNS1-5        MHei-Medium
```

<!-- %otf-ctgr-h     Identity-H          MHei-Medium -->

```
otf-ctgr-v     Identity-V          MHei-Medium

otf-ukmr-h     UniKS-UTF16-H       HYSMyeongJo-Medium
otf-ukmr-v     UniKS-UTF16-V       HYSMyeongJo-Medium
```

<!-- %otf-ckmr-h     Identity-H          HYSMyeongJo-Medium -->

```
otf-ckmr-h     Adobe-Korea1-2      HYSMyeongJo-Medium
otf-ckmr-v     Identity-V          HYSMyeongJo-Medium

otf-ukgr-h     UniKS-UTF16-H       HYGoThic-Medium
otf-ukgr-v     UniKS-UTF16-V       HYGoThic-Medium
```

<!-- %otf-ckgr-h     Identity-H          HYGoThic-Medium -->

```
otf-ckgr-h     Adobe-Korea1-2      HYGoThic-Medium
otf-ckgr-v     Identity-V          HYGoThic-Medium

```

<!-- %hiramin-w3-h   Identity-H         !HiraMinProN-W3.otf -->

```
hiramin-w3-h   Adobe-Japan1-6     !HiraMinProN-W3.otf
hiramin-w3-v   Identity-V         !HiraMinProN-W3.otf
```

<!-- %hiramin-w6-h   Identity-H         !HiraMinProN-W6.otf -->

```
hiramin-w6-h   Adobe-Japan1-6     !HiraMinProN-W6.otf
hiramin-w6-v   Identity-V         !HiraMinProN-W6.otf
```

<!-- %hirakaku-w3-h  Identity-H         !HiraKakuProN-W3.otf -->

```
hirakaku-w3-h  Adobe-Japan1-6     !HiraKakuProN-W3.otf
hirakaku-w3-v  Identity-V         !HiraKakuProN-W3.otf
```

<!-- %hirakaku-w6-h  Identity-H         !HiraKakuProN-W6.otf -->

```
hirakaku-w6-h  Adobe-Japan1-6     !HiraKakuProN-W6.otf
hirakaku-w6-v  Identity-V         !HiraKakuProN-W6.otf
```

<!-- %hiramaru-w4-h  Identity-H         !HiraMaruProN-W4.otf -->

```
hiramaru-w4-h  Adobe-Japan1-6     !HiraMaruProN-W4.otf
hiramaru-w4-v  Identity-V         !HiraMaruProN-W4.otf

%%% UTF package
hmr            H                   Ryumin-Light
hmrv           V                   Ryumin-Light
unijmin-h      UniJIS-UTF16-H      Ryumin-Light
unijmin-v      UniJIS-UTF16-V      Ryumin-Light
```

<!-- %cidmin-h       Identity-H          Ryumin-Light -->

```
cidmin-h       Adobe-Japan1-6      Ryumin-Light
cidmin-v       Identity-V          Ryumin-Light

hkb            H                   GothicBBB-Medium
hkbv           V                   GothicBBB-Medium
unijgoth-h     UniJIS-UTF16-H      GothicBBB-Medium
unijgoth-v     UniJIS-UTF16-V      GothicBBB-Medium
```

<!-- %cidgoth-h      Identity-H          GothicBBB-Medium -->

```
cidgoth-h      Adobe-Japan1-6      GothicBBB-Medium
cidgoth-v      Identity-V          GothicBBB-Medium
```

***

#### フリーフォントを使う場合 {#xcbe9625}

***

```
%rml            H                   ipam.ttf
%rmlv           V                   ipam.ttf

rml            H                   sazanami-mincho.ttf
rmlv           V                   sazanami-mincho.ttf

%gbm            H                   ipag.ttf
%gbmv           V                   ipag.ttf

%gbm            H                   VL-Gothic-Regular.ttf
%gbmv           V                   VL-Gothic-Regular.ttf

gbm            H                   sazanami-gothic.ttf
gbmv           V                   sazanami-gothic.ttf

%%% OTF package
%hminr-h        H                   ipam.ttf
%hminr-v        V                   ipam.ttf
%otf-ujmr-h     UniJIS-UTF16-H      ipam.ttf
%otf-ujmr-v     UniJIS-UTF16-V      ipam.ttf
```

<!-- %otf-cjmr-h     Identity-H          ipam.ttf/AJ16 -->

```
%otf-cjmr-h     Adobe-Japan1-6      ipam.ttf
%otf-cjmr-v     Identity-V          ipam.ttf/AJ16

hminr-h        H                   sazanami-mincho.ttf
hminr-v        V                   sazanami-mincho.ttf
otf-ujmr-h     UniJIS-UTF16-H      sazanami-mincho.ttf
otf-ujmr-v     UniJIS-UTF16-V      sazanami-mincho.ttf
```

<!-- %otf-cjmr-h     Identity-H          sazanami-mincho.ttf/AJ16 -->

```
otf-cjmr-h     Adobe-Japan1-6      sazanami-mincho.ttf
otf-cjmr-v     Identity-V          sazanami-mincho.ttf/AJ16

%hgothr-h       H                   ipag.ttf
%hgothr-v       V                   ipag.ttf
%otf-ujgr-h     UniJIS-UTF16-H      ipag.ttf
%otf-ujgr-v     UniJIS-UTF16-V      ipag.ttf
```

<!-- %otf-cjgr-h     Identity-H          ipag.ttf/AJ16 -->

```
%otf-cjgr-h     Adobe-Japan1-6      ipag.ttf
%otf-cjgr-v     Identity-V          ipag.ttf/AJ16

%hgothr-h       H                   VL-Gothic-Regular.ttf
%hgothr-v       V                   VL-Gothic-Regular.ttf
%otf-ujgr-h     UniJIS-UTF16-H      VL-Gothic-Regular.ttf
%otf-ujgr-v     UniJIS-UTF16-V      VL-Gothic-Regular.ttf
```

<!-- %otf-cjgr-h     Identity-H          VL-Gothic-Regular.ttf/AJ16 -->

```
%otf-cjgr-h     Adobe-Japan1-6      VL-Gothic-Regular.ttf
%otf-cjgr-v     Identity-V          VL-Gothic-Regular.ttf/AJ16

hgothr-h       H                   sazanami-gothic.ttf
hgothr-v       V                   sazanami-gothic.ttf
otf-ujgr-h     UniJIS-UTF16-H      sazanami-gothic.ttf
otf-ujgr-v     UniJIS-UTF16-V      sazanami-gothic.ttf
```

<!-- %otf-cjgr-h     Identity-H          sazanami-gothic.ttf/AJ16 -->

```
otf-cjgr-h     Adobe-Japan1-6      sazanami-gothic.ttf
otf-cjgr-v     Identity-V          sazanami-gothic.ttf/AJ16

hmgothr-h      H                   wlmaru20044.ttf
hmgothr-v      V                   wlmaru20044.ttf
otf-ujmgr-h    UniJIS-UTF16-H      wlmaru20044.ttf
otf-ujmgr-v    UniJIS-UTF16-V      wlmaru20044.ttf
```

<!-- %otf-cjmgr-h    Identity-H          wlmaru20044.ttf/AJ16 -->

```
otf-cjmgr-h    Adobe-Japan1-6      wlmaru20044.ttf
otf-cjmgr-v    Identity-V          wlmaru20044.ttf/AJ16

otf-ucmr-h     UniGB-UTF16-H       gbsn00lp.ttf
otf-ucmr-v     UniGB-UTF16-V       gbsn00lp.ttf
```

<!-- %otf-ccmr-h     Identity-H          gbsn00lp.ttf/AG15 -->

```
otf-ccmr-h     Adobe-GB1-5         gbsn00lp.ttf
otf-ccmr-v     Identity-V          gbsn00lp.ttf/AG15

otf-ucgr-h     UniGB-UTF16-H       wqy-zenhei.ttf
otf-ucgr-v     UniGB-UTF16-V       wqy-zenhei.ttf
```

<!-- %otf-ccgr-h     Identity-H          wqy-zenhei.ttf/AG15 -->

```
otf-ccgr-h     Adobe-GB1-5         wqy-zenhei.ttf
otf-ccgr-v     Identity-V          wqy-zenhei.ttf/AG15

otf-utmr-h     UniCNS-UTF16-H      uming.ttf
otf-utmr-v     UniCNS-UTF16-V      uming.ttf
```

<!-- %otf-ctmr-h     Identity-H          uming.ttf/AC15 -->

```
otf-ctmr-h     Adobe-CNS1-5        uming.ttf
otf-ctmr-v     Identity-V          uming.ttf/AC15

%otf-utmr-h     UniCNS-UTF16-H      bsmi00lp.ttf
%otf-utmr-v     UniCNS-UTF16-V      bsmi00lp.ttf
```

<!-- %otf-ctmr-h     Identity-H          bsmi00lp.ttf/AC15 -->

```
%otf-ctmr-h     Adobe-CNS1-5        bsmi00lp.ttf
%otf-ctmr-v     Identity-V          bsmi00lp.ttf/AC15

otf-utgr-h     UniCNS-UTF16-H      cwheib.ttf
otf-utgr-v     UniCNS-UTF16-V      cwheib.ttf
```

<!-- %otf-ctgr-h     Identity-H          cwheib.ttf/AC15 -->

```
otf-ctgr-h     Adobe-CNS1-5        cwheib.ttf
otf-ctgr-v     Identity-V          cwheib.ttf/AC15

otf-ukmr-h     UniKS-UTF16-H       UnBatang.ttf
otf-ukmr-v     UniKS-UTF16-V       UnBatang.ttf
```

<!-- %otf-ckmr-h     Identity-H          UnBatang.ttf/AK12 -->

```
otf-ckmr-h     Adobe-Korea1-2      UnBatang.ttf
otf-ckmr-v     Identity-V          UnBatang.ttf/AK12

otf-ukgr-h     UniKS-UTF16-H       UnDotum.ttf
otf-ukgr-v     UniKS-UTF16-V       UnDotum.ttf
```

<!-- %otf-ckgr-h     Identity-H          UnDotum.ttf/AK12 -->

```
otf-ckgr-h     Adobe-Korea1-2      UnDotum.ttf
otf-ckgr-v     Identity-V          UnDotum.ttf/AK12

%%% UTF package
%hmr            H                   ipam.ttf
%hmrv           V                   ipam.ttf
%unijmin-h      UniJIS-UTF16-H      ipam.ttf
%unijmin-v      UniJIS-UTF16-V      ipam.ttf
```

<!-- %cidmin-h       Identity-H          ipam.ttf/AJ16 -->

```
%cidmin-h       Adobe-Japan1-6      ipam.ttf
%cidmin-v       Identity-V          ipam.ttf/AJ16

hmr            H                   sazanami-mincho.ttf
hmrv           V                   sazanami-mincho.ttf
unijmin-h      UniJIS-UTF16-H      sazanami-mincho.ttf
unijmin-v      UniJIS-UTF16-V      sazanami-mincho.ttf
```

<!-- %cidmin-h       Identity-H          sazanami-mincho.ttf/AJ16 -->

```
cidmin-h       Adobe-Japan1-6      sazanami-mincho.ttf
cidmin-v       Identity-V          sazanami-mincho.ttf/AJ16

%hkb            H                   ipag.ttf
%hkbv           V                   ipag.ttf
%unijgoth-h     UniJIS-UTF16-H      ipag.ttf
%unijgoth-v     UniJIS-UTF16-V      ipag.ttf
```

<!-- %cidgoth-h      Identity-H          ipag.ttf/AJ16 -->

```
%cidgoth-h      Adobe-Japan1-6      ipag.ttf
%cidgoth-v      Identity-V          ipag.ttf/AJ16

%hkb            H                   VL-Gothic-Regular.ttf
%hkbv           V                   VL-Gothic-Regular.ttf
%unijgoth-h     UniJIS-UTF16-H      VL-Gothic-Regular.ttf
%unijgoth-v     UniJIS-UTF16-V      VL-Gothic-Regular.ttf
```

<!-- %cidgoth-h      Identity-H          VL-Gothic-Regular.ttf/AJ16 -->

```
%cidgoth-h      Adobe-Japan1-6      VL-Gothic-Regular.ttf
%cidgoth-v      Identity-V          VL-Gothic-Regular.ttf/AJ16

hkb            H                   sazanami-gothic.ttf
hkbv           V                   sazanami-gothic.ttf
unijgoth-h     UniJIS-UTF16-H      sazanami-gothic.ttf
unijgoth-v     UniJIS-UTF16-V      sazanami-gothic.ttf
```

<!-- %cidgoth-h      Identity-H          sazanami-gothic.ttf/AJ16 -->

```
cidgoth-h      Adobe-Japan1-6      sazanami-gothic.ttf
cidgoth-v      Identity-V          sazanami-gothic.ttf/AJ16
```

***

各フリーフォントの入手先は次を参照してください。なお，入手先は以下から変更される場合があります。また，利用・再配布等にあたっては「使用許諾契約」をご自身で確認されることを強くおすすめいたします（フリーフォントの「使用許諾契約」は随時変更されるため）。

- IPAフォント（[独立行政法人 情報処理推進機構](http://www.ipa.go.jp/)のフォント） (ipam.ttf, ipag.ttf)
    - [情報処理推進機構：プレス発表 高品位日本語フォント「IPAフォント」の一般利用者向け無償配布を開始](http://www.ipa.go.jp/about/press/20071001-2.html)
        - [一般利用者向け IPAフォントのダウンロード || OSS iPedia](http://ossipedia.ipa.go.jp/ipafont/)
    - [独立行政法人 情報処理推進機構のフォント（IPAフォント）付き GRASS 国際化版 (i18n)](http://www.grass-japan.org/FOSS4G/readme-grass-i18n-ipafonts.eucjp.htm)
    - [SourceForge.jp: Project File List?opfc #ModuleHP 1.1.1](http://sourceforge.jp/projects/opfc/files/?release_id=13897#13897)
    - [M+ と IPAフォントの合成フォント](http://mix-mplus-ipa.sourceforge.jp/)

- VLゴシックフォントファミリ (VL-Gothic-Regular.ttf)
    - [VLゴシックフォントファミリ](http://dicey.org/vlgothic/)

- [さざなみフォント](http://wiki.fdiary.net/font/?sazanami)
    (sazanami-mincho.ttf, sazanami-gothic.ttf)
    - [SourceForge.jp: Project Info?efont](http://sourceforge.jp/projects/efont/)

- JIS X 0213 の文字を追加した TrueType outline
    の[和田研フォント](http://gps.tanaka.ecc.u-tokyo.ac.jp/wadalabfont/)細丸ゴシック体
    (wlmaru20044.ttf)
    - [シフト JIS2000 形式とシフト JIS2004 形式フォント](http://members11.tsukaeru.net/rare/font/)

- Chinese TrueType font
    by [Arphic （文鼎） Technology](http://www.arphic.net/jp/home.html)
    (bsmi00lp.ttf, gbsn00lp.ttf)
    - [ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/](ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/)
    - [http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/](http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/)

- CJK-Unifonts (uming.ttf)
    - [freedesktop.org&mdash;Software 2fCJKUnifonts](http://www.cjkunifonts.info/)
- WenQuanYi outline fonts (wqy-zenhei.ttf)
    - [Wen Quan Yi Wiki&mdash;OpenSource Chinese: Home](http://wqy.sourceforge.net/en/)

- cwTeX TrueType font (cwheib.ttf)
    - [http://cle.linux.org.tw/fonts/cwttf/](http://cle.linux.org.tw/fonts/cwttf/)

- Un-fonts (UnBatang.ttf, UnDotum.ttf)
    - [KLDP.net:Un Fonts: Project Info](http://kldp.net/projects/unfonts/)
        <!-- Un-fonts が石井明朝・石井ゴシックのデッドコピーと発覚 -->

<!-- フォント全体ではなく，追加された日本語漢字部分が石井フォントと酷似しているとのこと -->
<!-- http://www.sodan.org/~penny/fonts/ 参照 -->

<!-- http://wiki.fdiary.net/font/?freefont#l2 も参照 -->

#### Mac OS X 附属のフォント（[ヒラギノ書体](http://www.jiyu-kobo.co.jp/works/works.html#Anchor-001)など）を使う場合 {#l6a3d188}

***

```
rml            H                   HiraMinProN-W3.otf
rmlv           V                   HiraMinProN-W3.otf

gbm            H                   HiraKakuProN-W3.otf
gbmv           V                   HiraKakuProN-W3.otf

%%% OTF package
hminr-h        H                   HiraMinProN-W3.otf
hminr-v        V                   HiraMinProN-W3.otf
otf-ujmr-h     UniJIS-UTF16-H      HiraMinProN-W3.otf
otf-ujmr-v     UniJIS-UTF16-V      HiraMinProN-W3.otf
```

<!-- %otf-cjmr-h     Identity-H          HiraMinProN-W3.otf -->

```
otf-cjmr-h     Adobe-Japan1-6      HiraMinProN-W3.otf
otf-cjmr-v     Identity-V          HiraMinProN-W3.otf

hgothr-h       H                   HiraKakuProN-W3.otf
hgothr-v       V                   HiraKakuProN-W3.otf
otf-ujgr-h     UniJIS-UTF16-H      HiraKakuProN-W3.otf
otf-ujgr-v     UniJIS-UTF16-V      HiraKakuProN-W3.otf
```

<!-- %otf-cjgr-h     Identity-H          HiraKakuProN-W3.otf -->

```
otf-cjgr-h     Adobe-Japan1-6      HiraKakuProN-W3.otf
otf-cjgr-v     Identity-V          HiraKakuProN-W3.otf

hminb-h        H                   HiraMinProN-W6.otf
hminb-v        V                   HiraMinProN-W6.otf
otf-ujmb-h     UniJIS-UTF16-H      HiraMinProN-W6.otf
otf-ujmb-v     UniJIS-UTF16-V      HiraMinProN-W6.otf
```

<!-- %otf-cjmb-h     Identity-H          HiraMinProN-W6.otf -->

```
otf-cjmb-h     Adobe-Japan1-6      HiraMinProN-W6.otf
otf-cjmb-v     Identity-V          HiraMinProN-W6.otf

hgothb-h       H                   HiraKakuProN-W6.otf
hgothb-v       V                   HiraKakuProN-W6.otf
otf-ujgb-h     UniJIS-UTF16-H      HiraKakuProN-W6.otf
otf-ujgb-v     UniJIS-UTF16-V      HiraKakuProN-W6.otf
```

<!-- %otf-cjgb-h     Identity-H          HiraKakuProN-W6.otf -->

```
otf-cjgb-h     Adobe-Japan1-6      HiraKakuProN-W6.otf
otf-cjgb-v     Identity-V          HiraKakuProN-W6.otf

hmgothr-h      H                   HiraMaruProN-W4.otf
hmgothr-v      V                   HiraMaruProN-W4.otf
otf-ujmgr-h    UniJIS-UTF16-H      HiraMaruProN-W4.otf
otf-ujmgr-v    UniJIS-UTF16-V      HiraMaruProN-W4.otf
```

<!-- %otf-cjmgr-h    Identity-H          HiraMaruProN-W4.otf -->

```
otf-cjmgr-h    Adobe-Japan1-6      HiraMaruProN-W4.otf
otf-cjmgr-v    Identity-V          HiraMaruProN-W4.otf

hgotheb-h      H                   HiraKakuStdN-W8.otf
hgotheb-v      V                   HiraKakuStdN-W8.otf

%hminl-h        H                   HiraMinStdN-W2.otf
%hminl-v        V                   HiraMinStdN-W2.otf
%otf-ujml-h     UniJIS-UTF16-H      HiraMinStdN-W2.otf
%otf-ujml-v     UniJIS-UTF16-V      HiraMinStdN-W2.otf
```

<!-- %otf-cjml-h     Identity-H          HiraMinStdN-W2.otf -->

```
%otf-cjml-h     Adobe-Japan1-6      HiraMinStdN-W2.otf
%otf-cjml-v     Identity-V          HiraMinStdN-W2.otf

hminl-h        H                   MS-Mincho.ttf
hminl-v        V                   MS-Mincho.ttf
otf-ujml-h     UniJIS-UTF16-H      MS-Mincho.ttf
otf-ujml-v     UniJIS-UTF16-V      MS-Mincho.ttf
```

<!-- %otf-cjml-h     Identity-H          MS-Mincho.ttf/AJ16 -->

```
otf-cjml-h     Adobe-Japan1-6      MS-Mincho.ttf
otf-cjml-v     Identity-V          MS-Mincho.ttf/AJ16

otf-ucmr-h     UniGB-UTF16-H       STSong.ttf
otf-ucmr-v     UniGB-UTF16-V       STSong.ttf
```

<!-- %otf-ccmr-h     Identity-H          STSong.ttf/AG15 -->

```
otf-ccmr-h     Adobe-GB1-5         STSong.ttf
otf-ccmr-v     Identity-V          STSong.ttf/AG15

otf-ucgr-h     UniGB-UTF16-H       STHeiti.ttf
otf-ucgr-v     UniGB-UTF16-V       STHeiti.ttf
```

<!-- %otf-ccgr-h     Identity-H          STHeiti.ttf/AG15 -->

```
otf-ccgr-h     Adobe-GB1-5         STHeiti.ttf
otf-ccgr-v     Identity-V          STHeiti.ttf/AG15

otf-utmr-h     UniCNS-UTF16-H      LiSongPro.ttf
otf-utmr-v     UniCNS-UTF16-V      LiSongPro.ttf
```

<!-- %otf-ctmr-h     Identity-H          LiSongPro.ttf/AC15 -->

```
otf-ctmr-h     Adobe-CNS1-5        LiSongPro.ttf
otf-ctmr-v     Identity-V          LiSongPro.ttf/AC15

otf-utgr-h     UniCNS-UTF16-H      LiHeiPro.ttf
otf-utgr-v     UniCNS-UTF16-V      LiHeiPro.ttf
```

<!-- %otf-ctgr-h     Identity-H          LiHeiPro.ttf/AC15 -->

```
otf-ctgr-h     Adobe-CNS1-5        LiHeiPro.ttf
otf-ctgr-v     Identity-V          LiHeiPro.ttf/AC15

otf-ukmr-h     UniKS-UTF16-H       Batang.ttf
otf-ukmr-v     UniKS-UTF16-V       Batang.ttf
```

<!-- %otf-ckmr-h     Identity-H          Batang.ttf/AK12 -->

```
otf-ckmr-h     Adobe-Korea1-2      Batang.ttf
otf-ckmr-v     Identity-V          Batang.ttf/AK12

otf-ukgr-h     UniKS-UTF16-H       Gulim.ttf
otf-ukgr-v     UniKS-UTF16-V       Gulim.ttf
```

<!-- %otf-ckgr-h     Identity-H          Gulim.ttf/AK12 -->

```
otf-ckgr-h     Adobe-Korea1-2      Gulim.ttf
otf-ckgr-v     Identity-V          Gulim.ttf/AK12

```

<!-- %hiramin-w3-h   Identity-H          HiraMinProN-W3.otf -->

```
hiramin-w3-h   Adobe-Japan1-6      HiraMinProN-W3.otf
hiramin-w3-v   Identity-V          HiraMinProN-W3.otf
```

<!-- %hiramin-w6-h   Identity-H          HiraMinProN-W6.otf -->

```
hiramin-w6-h   Adobe-Japan1-6      HiraMinProN-W6.otf
hiramin-w6-v   Identity-V          HiraMinProN-W6.otf
```

<!-- %hirakaku-w3-h  Identity-H          HiraKakuProN-W3.otf -->

```
hirakaku-w3-h  Adobe-Japan1-6      HiraKakuProN-W3.otf
hirakaku-w3-v  Identity-V          HiraKakuProN-W3.otf
```

<!-- %hirakaku-w6-h  Identity-H          HiraKakuProN-W6.otf -->

```
hirakaku-w6-h  Adobe-Japan1-6      HiraKakuProN-W6.otf
hirakaku-w6-v  Identity-V          HiraKakuProN-W6.otf
```

<!-- %hiramaru-w4-h  Identity-H          HiraMaruProN-W4.otf -->

```
hiramaru-w4-h  Adobe-Japan1-6      HiraMaruProN-W4.otf
hiramaru-w4-v  Identity-V          HiraMaruProN-W4.otf

%%% UTF package
hmr            H                   HiraMinProN-W3.otf
hmrv           V                   HiraMinProN-W3.otf
unijmin-h      UniJIS-UTF16-H      HiraMinProN-W3.otf
unijmin-v      UniJIS-UTF16-V      HiraMinProN-W3.otf
```

<!-- %cidmin-h       Identity-H          HiraMinProN-W3.otf -->

```
cidmin-h       Adobe-Japan1-6      HiraMinProN-W3.otf
cidmin-v       Identity-V          HiraMinProN-W3.otf

hkb            H                   HiraKakuProN-W3.otf
hkbv           V                   HiraKakuProN-W3.otf
unijgoth-h     UniJIS-UTF16-H      HiraKakuProN-W3.otf
unijgoth-v     UniJIS-UTF16-V      HiraKakuProN-W3.otf
```

<!-- %cidgoth-h      Identity-H          HiraKakuProN-W3.otf -->

```
cidgoth-h      Adobe-Japan1-6      HiraKakuProN-W3.otf
cidgoth-v      Identity-V          HiraKakuProN-W3.otf
```

***

ただし，[HiraMinStdN-W2.otf](http://www.screen.co.jp/ga_product/sento/products/pr_CreativeV8.html#anchor_ot01V8)
は Mac OS X に附属していません。

$TEXMFLOCAL/fonts/truetype/MS-Mincho.ttf は
"/Applications/Microsoft Office 2004/Office/Fonts/MS Mincho.ttf" への
シンボリックリンクです。"MS Mincho.ttf"，Batang.ttf，Gulim.ttf は
Microsoft Office 2004 for Mac に
附属しているフォントです。"MS Mincho.ttf"，"MS Gothic.ttf" は
[Microsoft Office 2004 for Mac 体験版](http://www.microsoft.com/japan/mac/download/testdrive/office2004.mspx)から
入手して使うことができます（情報源は
「[Apple Support Discussions &mdash; MS フォントの合法的な入手が可能です](http://discussions.info.apple.co.jp/WebX?14@@.efd2797)」）。

#### Microsoft Windows 附属のフォントを使う場合 {#g54b5df7}

***

```
rml            H                :0:msmincho.ttc
rmlv           V                :0:msmincho.ttc

gbm            H                :0:msgothic.ttc
gbmv           V                :0:msgothic.ttc

%%% OTF package
hminr-h        H                :0:msmincho.ttc
hminr-v        V                :0:msmincho.ttc
otf-ujmr-h     UniJIS-UTF16-H   :0:msmincho.ttc
otf-ujmr-v     UniJIS-UTF16-V   :0:msmincho.ttc
```

<!-- %otf-cjmr-h     Identity-H       :0:msmincho.ttc/AJ16 -->

```
otf-cjmr-h     Adobe-Japan1-6   :0:msmincho.ttc
otf-cjmr-v     Identity-V       :0:msmincho.ttc/AJ16

hgothr-h       H                :0:msgothic.ttc
hgothr-v       V                :0:msgothic.ttc
otf-ujgr-h     UniJIS-UTF16-H   :0:msgothic.ttc
otf-ujgr-v     UniJIS-UTF16-V   :0:msgothic.ttc
```

<!-- %otf-cjgr-h     Identity-H       :0:msgothic.ttc/AJ16 -->

```
otf-cjgr-h     Adobe-Japan1-6   :0:msgothic.ttc
otf-cjgr-v     Identity-V       :0:msgothic.ttc/AJ16

hminb-h        H               :0:!msmincho.ttc,Bold
hminb-v        V               :0:!msmincho.ttc,Bold
otf-ujmb-h     UniJIS-UTF16-H  :0:!msmincho.ttc,Bold
otf-ujmb-v     UniJIS-UTF16-V  :0:!msmincho.ttc,Bold
otf-cjmb-h     Adobe-Japan1-6  :0:!msmincho.ttc,Bold
```

<!-- %otf-cjmb-h     Identity-H      :0:!msmincho.ttc/AJ16,Bold -->

```
otf-cjmb-v     Identity-V      :0:!msmincho.ttc/AJ16,Bold

hgothb-h       H               :0:!msgothic.ttc,Bold
hgothb-v       V               :0:!msgothic.ttc,Bold
otf-ujgb-h     UniJIS-UTF16-H  :0:!msgothic.ttc,Bold
otf-ujgb-v     UniJIS-UTF16-V  :0:!msgothic.ttc,Bold
```

<!-- %otf-cjgb-h     Identity-H      :0:!msgothic.ttc/AJ16,Bold -->

```
otf-cjgb-h     Adobe-Japan1-6  :0:!msgothic.ttc,Bold
otf-cjgb-v     Identity-V      :0:!msgothic.ttc/AJ16,Bold

%hminl-h        H                   HiraMinStdN-W2.otf
%hminl-v        V                   HiraMinStdN-W2.otf
%otf-ujml-h     UniJIS-UTF16-H      HiraMinStdN-W2.otf
%otf-ujml-v     UniJIS-UTF16-V      HiraMinStdN-W2.otf
```

<!-- %otf-cjml-h     Identity-H          HiraMinStdN-W2.otf -->

```
%otf-cjml-h     Adobe-Japan1-6      HiraMinStdN-W2.otf
%otf-cjml-v     Identity-V          HiraMinStdN-W2.otf

hminl-h        H                :0:msmincho.ttc
hminl-v        V                :0:msmincho.ttc
otf-ujml-h     UniJIS-UTF16-H   :0:msmincho.ttc
otf-ujml-v     UniJIS-UTF16-V   :0:msmincho.ttc
```

<!-- %otf-cjml-h     Identity-H       :0:msmincho.ttc/AJ16 -->

```
otf-cjml-h     Adobe-Japan1-6   :0:msmincho.ttc
otf-cjml-v     Identity-V       :0:msmincho.ttc/AJ16

otf-ucmr-h     UniGB-UTF16-H    :1:simsun.ttc
otf-ucmr-v     UniGB-UTF16-V    :1:simsun.ttc
```

<!-- %otf-ccmr-h     Identity-H       :1:simsun.ttc/AG15 -->

```
otf-ccmr-h     Adobe-GB1-5      :1:simsun.ttc
otf-ccmr-v     Identity-V       :1:simsun.ttc/AG15

otf-ucgr-h     UniGB-UTF16-H       simhei.ttf
otf-ucgr-v     UniGB-UTF16-V       simhei.ttf
```

<!-- %otf-ccgr-h     Identity-H          simhei.ttf/AG15 -->

```
otf-ccgr-h     Adobe-GB1-5         simhei.ttf
otf-ccgr-v     Identity-V          simhei.ttf/AG15

otf-utmr-h     UniCNS-UTF16-H   :0:mingliu.ttc
otf-utmr-v     UniCNS-UTF16-V   :0:mingliu.ttc
```

<!-- %otf-ctmr-h     Identity-H       :0:mingliu.ttc/AC15 -->

```
otf-ctmr-h     Adobe-CNS1-5     :0:mingliu.ttc
otf-ctmr-v     Identity-V       :0:mingliu.ttc/AC15

otf-utgr-h     UniCNS-UTF16-H      simhei.ttf
otf-utgr-v     UniCNS-UTF16-V      simhei.ttf
```

<!-- %otf-ctgr-h     Identity-H          simhei.ttf/AC15 -->

```
otf-ctgr-h     Adobe-CNS1-5        simhei.ttf
otf-ctgr-v     Identity-V          simhei.ttf/AC15

otf-ukmr-h     UniKS-UTF16-H    :1:batang.ttc
otf-ukmr-v     UniKS-UTF16-V    :1:batang.ttc
```

<!-- %otf-ckmr-h     Identity-H       :1:batang.ttc/AK12 -->

```
otf-ckmr-h     Adobe-Korea1-2   :1:batang.ttc
otf-ckmr-v     Identity-V       :1:batang.ttc/AK12

otf-ukgr-h     UniKS-UTF16-H    :3:gulim.ttc
otf-ukgr-v     UniKS-UTF16-V    :3:gulim.ttc
```

<!-- %otf-ckgr-h     Identity-H       :3:gulim.ttc/AK12 -->

```
otf-ckgr-h     Adobe-Korea1-2   :3:gulim.ttc
otf-ckgr-v     Identity-V       :3:gulim.ttc/AK12

%%% UTF package
hmr            H                :0:msmincho.ttc
hmrv           V                :0:msmincho.ttc
unijmin-h      UniJIS-UTF16-H   :0:msmincho.ttc
unijmin-v      UniJIS-UTF16-V   :0:msmincho.ttc
```

<!-- %cidmin-h       Identity-H       :0:msmincho.ttc/AJ16 -->

```
cidmin-h       Adobe-Japan1-6   :0:msmincho.ttc
cidmin-v       Identity-V       :0:msmincho.ttc/AJ16

hkb            H                :0:msgothic.ttc
hkbv           V                :0:msgothic.ttc
unijgoth-h     UniJIS-UTF16-H   :0:msgothic.ttc
unijgoth-v     UniJIS-UTF16-V   :0:msgothic.ttc
```

<!-- %cidgoth-h      Identity-H       :0:msgothic.ttc/AJ16 -->

```
cidgoth-h      Adobe-Japan1-6   :0:msgothic.ttc
cidgoth-v      Identity-V       :0:msgothic.ttc/AJ16
```

***

#### StarSuite 8 や Microsoft Office (for Windows) 附属のフォントを使う場合 {#pfe6625f}

***

```
rml            H                :0:HG-MinchoL-Sun.ttc
rmlv           V                :0:HG-MinchoL-Sun.ttc

%rml            H                :0:msmincho.ttc
%rmlv           V                :0:msmincho.ttc

gbm            H                :0:hgrgm.ttc
gbmv           V                :0:hgrgm.ttc

%%% OTF package
hminr-h        H                :0:HG-MinchoL-Sun.ttc
hminr-v        V                :0:HG-MinchoL-Sun.ttc
otf-ujmr-h     UniJIS-UTF16-H   :0:HG-MinchoL-Sun.ttc
otf-ujmr-v     UniJIS-UTF16-V   :0:HG-MinchoL-Sun.ttc
```

<!-- %otf-cjmr-h     Identity-H       :0:HG-MinchoL-Sun.ttc/AJ16 -->

```
otf-cjmr-h     Adobe-Japan1-6   :0:HG-MinchoL-Sun.ttc
otf-cjmr-v     Identity-V       :0:HG-MinchoL-Sun.ttc/AJ16

%hminr-h        H                :0:msmincho.ttc
%hminr-v        V                :0:msmincho.ttc
%otf-ujmr-h     UniJIS-UTF16-H   :0:msmincho.ttc
%otf-ujmr-v     UniJIS-UTF16-V   :0:msmincho.ttc
```

<!-- %otf-cjmr-h     Identity-H       :0:msmincho.ttc/AJ16 -->

```
%otf-cjmr-h     Adobe-Japan1-6   :0:msmincho.ttc
%otf-cjmr-v     Identity-V       :0:msmincho.ttc/AJ16

hgothr-h       H                :0:hgrgm.ttc
hgothr-v       V                :0:hgrgm.ttc
otf-ujgr-h     UniJIS-UTF16-H   :0:hgrgm.ttc
otf-ujgr-v     UniJIS-UTF16-V   :0:hgrgm.ttc
```

<!-- %otf-cjgr-h     Identity-H       :0:hgrgm.ttc/AJ16 -->

```
otf-cjgr-h     Adobe-Japan1-6   :0:hgrgm.ttc
otf-cjgr-v     Identity-V       :0:hgrgm.ttc/AJ16

hminb-h        H                :0:hgrmb.ttc
hminb-v        V                :0:hgrmb.ttc
otf-ujmb-h     UniJIS-UTF16-H   :0:hgrmb.ttc
otf-ujmb-v     UniJIS-UTF16-V   :0:hgrmb.ttc
```

<!-- %otf-cjmb-h     Identity-H       :0:hgrmb.ttc/AJ16 -->

```
otf-cjmb-h     Adobe-Japan1-6   :0:hgrmb.ttc
otf-cjmb-v     Identity-V       :0:hgrmb.ttc/AJ16

hgothb-h       H                :0:hgrge.ttc
hgothb-v       V                :0:hgrge.ttc
otf-ujgb-h     UniJIS-UTF16-H   :0:hgrge.ttc
otf-ujgb-v     UniJIS-UTF16-V   :0:hgrge.ttc
```

<!-- %otf-cjgb-h     Identity-H       :0:hgrge.ttc/AJ16 -->

```
otf-cjgb-h     Adobe-Japan1-6   :0:hgrge.ttc
otf-cjgb-v     Identity-V       :0:hgrge.ttc/AJ16

hmgothr-h      H                   hgrsmp.ttf
hmgothr-v      V                   hgrsmp.ttf
otf-ujmgr-h    UniJIS-UTF16-H      hgrsmp.ttf
otf-ujmgr-v    UniJIS-UTF16-V      hgrsmp.ttf
```

<!-- %otf-cjmgr-h    Identity-H          hgrsmp.ttf/AJ16 -->

```
otf-cjmgr-h    Adobe-Japan1-6      hgrsmp.ttf
otf-cjmgr-v    Identity-V          hgrsmp.ttf/AJ16

hgotheb-h      H                :0:hgrsgu.ttc
hgotheb-v      V                :0:hgrsgu.ttc

%hminl-h        H                   HiraMinStdN-W2.otf
%hminl-v        V                   HiraMinStdN-W2.otf
%otf-ujml-h     UniJIS-UTF16-H      HiraMinStdN-W2.otf
%otf-ujml-v     UniJIS-UTF16-V      HiraMinStdN-W2.otf
```

<!-- %otf-cjml-h     Identity-H          HiraMinStdN-W2.otf -->

```
%otf-cjml-h     Adobe-Japan1-6      HiraMinStdN-W2.otf
%otf-cjml-v     Identity-V          HiraMinStdN-W2.otf

hminl-h        H                :0:HG-MinchoL-Sun.ttc
hminl-v        V                :0:HG-MinchoL-Sun.ttc
otf-ujml-h     UniJIS-UTF16-H   :0:HG-MinchoL-Sun.ttc
otf-ujml-v     UniJIS-UTF16-V   :0:HG-MinchoL-Sun.ttc
```

<!-- %otf-cjml-h     Identity-H       :0:HG-MinchoL-Sun.ttc/AJ16 -->

```
otf-cjml-h     Adobe-Japan1-6   :0:HG-MinchoL-Sun.ttc
otf-cjml-v     Identity-V       :0:HG-MinchoL-Sun.ttc/AJ16

%hminl-h        H                :0:msmincho.ttc
%hminl-v        V                :0:msmincho.ttc
%otf-ujml-h     UniJIS-UTF16-H   :0:msmincho.ttc
%otf-ujml-v     UniJIS-UTF16-V   :0:msmincho.ttc
```

<!-- %otf-cjml-h     Identity-H       :0:msmincho.ttc/AJ16 -->

```
%otf-cjml-h     Adobe-Japan1-6   :0:msmincho.ttc
%otf-cjml-v     Identity-V       :0:msmincho.ttc/AJ16

%%% UTF package
hmr            H                :0:HG-MinchoL-Sun.ttc
hmrv           V                :0:HG-MinchoL-Sun.ttc
unijmin-h      UniJIS-UTF16-H   :0:HG-MinchoL-Sun.ttc
unijmin-v      UniJIS-UTF16-V   :0:HG-MinchoL-Sun.ttc
```

<!-- %cidmin-h       Identity-H       :0:HG-MinchoL-Sun.ttc/AJ16 -->

```
cidmin-h       Adobe-Japan1-6   :0:HG-MinchoL-Sun.ttc
cidmin-v       Identity-V       :0:HG-MinchoL-Sun.ttc/AJ16

%hmr            H                :0:msmincho.ttc
%hmrv           V                :0:msmincho.ttc
%unijmin-h      UniJIS-UTF16-H   :0:msmincho.ttc
%unijmin-v      UniJIS-UTF16-V   :0:msmincho.ttc
```

<!-- %cidmin-h       Identity-H       :0:msmincho.ttc/AJ16 -->

```
%cidmin-h       Adobe-Japan1-6   :0:msmincho.ttc
%cidmin-v       Identity-V       :0:msmincho.ttc/AJ16

hkb            H                :0:hgrgm.ttc
hkbv           V                :0:hgrgm.ttc
unijgoth-h     UniJIS-UTF16-H   :0:hgrgm.ttc
unijgoth-v     UniJIS-UTF16-V   :0:hgrgm.ttc
```

<!-- %cidgoth-h      Identity-H       :0:hgrgm.ttc/AJ16 -->

```
cidgoth-h      Adobe-Japan1-6   :0:hgrgm.ttc
cidgoth-v      Identity-V       :0:hgrgm.ttc/AJ16
```

***

OS が Windows XP / Vista / 7 の場合
には，[Google パック](http://pack.google.com/intl/ja/pack_installer.html?hl=ja&gl=jp&ci_apps=None&ci_so=on)を
通して無償で [StarSuite](http://jp.sun.com/products/software/starsuite/) を
ダウンロード，インストールして使うことができます。

なお，StarSuite 8，Microsoft Windows，Microsoft Office (for Windows) に
附属している日本語フォントのウェイトに関する分類は次のようになっています。

<table>
<thead>
<tr><th rowspan="2" style="text-align:center">weight</th><th style="text-align:center">serif</th><th colspan="2" style="text-align:center">sans serif</th></tr>
<tr><th style="text-align:center">明朝体</th><th style="text-align:center">角ゴシック体</th><th style="text-align:center">丸ゴシック体</th></tr>
</thead>
<tbody>
<tr><th style="text-align:center">Ultra bold</th><td style="text-align:center"></td><td style="text-align:center">HG創英角ｺﾞｼｯｸUB<br>(hgrsgu.ttc)</td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Heavy</th><td style="text-align:center"></td><td style="text-align:center">HG創英角ﾎﾟｯﾌﾟ体<br>(hgrpp1.ttc)</td><td style="text-align:center"></td></tr>
<tr><th rowspan="2" style="text-align:center">Extra bold</th><td style="text-align:center">HG創英ﾌﾟﾚｾﾞﾝｽEB<br>(hgrpre.ttc)</td><td rowspan="2" style="text-align:center">HGｺﾞｼｯｸE<br>(hgrge.ttc)</td><td rowspan="2" style="text-align:center"></td></tr>
<tr><td style="text-align:center">HG明朝E<br>(hgrme.ttc)</td></tr>
<tr><th rowspan="2" style="text-align:center">Bold</th><td rowspan="2" style="text-align:center">HG明朝B<br>(hgrmb.ttc)</td><td style="text-align:center">HG ゴシックB Sun<br>(HG-GothicB-Sun.ttc)</td><td style="text-align:center"></td></tr>
<tr><td style="text-align:center">ＭＳ ゴシック<br>(msgothic.ttc)</td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Semi bold</th><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Medium</th><td style="text-align:center"></td><td style="text-align:center">HGｺﾞｼｯｸM<br>(hgrgm.ttc)</td><td style="text-align:center">HG丸ｺﾞｼｯｸM-PRO<br>(hgrsmp.ttf)</td></tr>
<tr><th style="text-align:center">Regular</th><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Semi light</th><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><th rowspan="2" style="text-align:center">Light</th><td style="text-align:center">HG 明朝L Sun<br>(HG-MinchoL-Sun.ttc)</td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><td style="text-align:center">ＭＳ 明朝<br>(msmincho.ttc)</td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Extra light</th><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Ultra light</th><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
</tbody>
</table>

ここで「[ＭＳ 明朝](http://www.tg.rim.or.jp/~hexane/ach/hfw/hfw14.htm#MSMincho)」
「[ＭＳ ゴシック](http://www.tg.rim.or.jp/~hexane/ach/hfw/hfw12.htm#MSGothic)」は
それぞれ [RYOBI IMAGIX](http://www.ryobi-group.co.jp/projects/printing/font/) の
「[本明朝-L](http://www.ryobi-group.co.jp/projects/printing/font/products/f_mihon01.html#minti)」
「[ゴシック-B](http://www.ryobi-group.co.jp/projects/printing/font/products/f_mihon01.html#goshi)」の
字母を基に [RICOH](http://font.ricoh.co.jp/) が作成したものなので，
「ＭＳ 明朝」「ＭＳ ゴシック」を
それぞれ “Light”，“Bold” のウェイトに分類しています。

#### [Adobe のフォント](http://www.adobe.com/jp/type/)（[小塚書体など](http://www.adobe.com/type/browser/C/C_japanese.html?store=OLS-JP&language=JP)）を使う場合 {#v02c074b}

***

```
rml            H                   KozMinPr6N-Regular.otf
rmlv           V                   KozMinPr6N-Regular.otf

%rml            H                  !KozMinPr6N-Regular.otf
%rmlv           V                  !KozMinPr6N-Regular.otf

gbm            H                   KozGoPr6N-Medium.otf
gbmv           V                   KozGoPr6N-Medium.otf

%gbm            H                  !KozGoPr6N-Medium.otf
%gbmv           V                  !KozGoPr6N-Medium.otf

%%% OTF package
hminr-h        H                   KozMinPr6N-Regular.otf
hminr-v        V                   KozMinPr6N-Regular.otf
otf-ujmr-h     UniJIS-UTF16-H      KozMinPr6N-Regular.otf
otf-ujmr-v     UniJIS-UTF16-V      KozMinPr6N-Regular.otf
```

<!-- %otf-cjmr-h     Identity-H          KozMinPr6N-Regular.otf -->

```
otf-cjmr-h     Adobe-Japan1-6      KozMinPr6N-Regular.otf
otf-cjmr-v     Identity-V          KozMinPr6N-Regular.otf

%hminr-h        H                  !KozMinPr6N-Regular.otf
%hminr-v        V                  !KozMinPr6N-Regular.otf
%otf-ujmr-h     UniJIS-UTF16-H     !KozMinPr6N-Regular.otf
%otf-ujmr-v     UniJIS-UTF16-V     !KozMinPr6N-Regular.otf
```

<!-- %otf-cjmr-h     Identity-H         !KozMinPr6N-Regular.otf -->

```
%otf-cjmr-h     Adobe-Japan1-6     !KozMinPr6N-Regular.otf
%otf-cjmr-v     Identity-V         !KozMinPr6N-Regular.otf

hgothr-h       H                   KozGoPr6N-Medium.otf
hgothr-v       V                   KozGoPr6N-Medium.otf
otf-ujgr-h     UniJIS-UTF16-H      KozGoPr6N-Medium.otf
otf-ujgr-v     UniJIS-UTF16-V      KozGoPr6N-Medium.otf
```

<!-- %otf-cjgr-h     Identity-H          KozGoPr6N-Medium.otf -->

```
otf-cjgr-h     Adobe-Japan1-6      KozGoPr6N-Medium.otf
otf-cjgr-v     Identity-V          KozGoPr6N-Medium.otf

%hgothr-h       H                  !KozGoPr6N-Medium.otf
%hgothr-v       V                  !KozGoPr6N-Medium.otf
%otf-ujgr-h     UniJIS-UTF16-H     !KozGoPr6N-Medium.otf
%otf-ujgr-v     UniJIS-UTF16-V     !KozGoPr6N-Medium.otf
```

<!-- %otf-cjgr-h     Identity-H         !KozGoPr6N-Medium.otf -->

```
%otf-cjgr-h     Adobe-Japan1-6     !KozGoPr6N-Medium.otf
%otf-cjgr-v     Identity-V         !KozGoPr6N-Medium.otf

hminb-h        H                   KozMinPr6N-Bold.otf
hminb-v        V                   KozMinPr6N-Bold.otf
otf-ujmb-h     UniJIS-UTF16-H      KozMinPr6N-Bold.otf
otf-ujmb-v     UniJIS-UTF16-V      KozMinPr6N-Bold.otf
otf-cjmb-h     Adobe-Japan1-6      KozMinPr6N-Bold.otf
```

<!-- %otf-cjmb-h     Identity-H          KozMinPr6N-Bold.otf -->

```
otf-cjmb-v     Identity-V          KozMinPr6N-Bold.otf

hgothb-h       H                   KozGoPr6N-Bold.otf
hgothb-v       V                   KozGoPr6N-Bold.otf
otf-ujgb-h     UniJIS-UTF16-H      KozGoPr6N-Bold.otf
otf-ujgb-v     UniJIS-UTF16-V      KozGoPr6N-Bold.otf
```

<!-- %otf-cjgb-h     Identity-H          KozGoPr6N-Bold.otf -->

```
otf-cjgb-h     Adobe-Japan1-6      KozGoPr6N-Bold.otf
otf-cjgb-v     Identity-V          KozGoPr6N-Bold.otf

hmgothr-h      H                   KozGoPr6N-Heavy.otf
hmgothr-v      V                   KozGoPr6N-Heavy.otf
otf-ujmgr-h    UniJIS-UTF16-H      KozGoPr6N-Heavy.otf
otf-ujmgr-v    UniJIS-UTF16-V      KozGoPr6N-Heavy.otf
```

<!-- %otf-cjmgr-h    Identity-H          KozGoPr6N-Heavy.otf -->

```
otf-cjmgr-h    Adobe-Japan1-6      KozGoPr6N-Heavy.otf
otf-cjmgr-v    Identity-V          KozGoPr6N-Heavy.otf

hminl-h        H                   KozMinPr6N-Light.otf
hminl-v        V                   KozMinPr6N-Light.otf
otf-ujml-h     UniJIS-UTF16-H      KozMinPr6N-Light.otf
otf-ujml-v     UniJIS-UTF16-V      KozMinPr6N-Light.otf
```

<!-- %otf-cjml-h     Identity-H          KozMinPr6N-Light.otf -->

```
otf-cjml-h     Adobe-Japan1-6      KozMinPr6N-Light.otf
otf-cjml-v     Identity-V          KozMinPr6N-Light.otf

otf-ucmr-h     UniGB-UTF16-H       AdobeSongStd-Light.otf
otf-ucmr-v     UniGB-UTF16-V       AdobeSongStd-Light.otf
```

<!-- %otf-ccmr-h     Identity-H          AdobeSongStd-Light.otf -->

```
otf-ccmr-h     Adobe-GB1-5         AdobeSongStd-Light.otf
otf-ccmr-v     Identity-V          AdobeSongStd-Light.otf

otf-ucgr-h     UniGB-UTF16-H       AdobeHeitiStd-Regular.otf
otf-ucgr-v     UniGB-UTF16-V       AdobeHeitiStd-Regular.otf
```

<!-- %otf-ccgr-h     Identity-H          AdobeHeitiStd-Regular.otf -->

```
otf-ccgr-h     Adobe-GB1-5         AdobeHeitiStd-Regular.otf
otf-ccgr-v     Identity-V          AdobeHeitiStd-Regular.otf

otf-utmr-h     UniCNS-UTF16-H      AdobeMingStd-Light.otf
otf-utmr-v     UniCNS-UTF16-V      AdobeMingStd-Light.otf
```

<!-- %otf-ctmr-h     Identity-H          AdobeMingStd-Light.otf -->

```
otf-ctmr-h     Adobe-CNS1-5        AdobeMingStd-Light.otf
otf-ctmr-v     Identity-V          AdobeMingStd-Light.otf

otf-ukmr-h     UniKS-UTF16-H       AdobeMyungjoStd-Medium.otf
otf-ukmr-v     UniKS-UTF16-V       AdobeMyungjoStd-Medium.otf
```

<!-- %otf-ckmr-h     Identity-H          AdobeMyungjoStd-Medium.otf -->

```
otf-ckmr-h     Adobe-Korea1-2      AdobeMyungjoStd-Medium.otf
otf-ckmr-v     Identity-V          AdobeMyungjoStd-Medium.otf

%%% UTF package
hmr            H                   KozMinPr6N-Regular.otf
hmrv           V                   KozMinPr6N-Regular.otf
unijmin-h      UniJIS-UTF16-H      KozMinPr6N-Regular.otf
unijmin-v      UniJIS-UTF16-V      KozMinPr6N-Regular.otf
```

<!-- %cidmin-h       Identity-H          KozMinPr6N-Regular.otf -->

```
cidmin-h       Adobe-Japan1-6      KozMinPr6N-Regular.otf
cidmin-v       Identity-V          KozMinPr6N-Regular.otf

%hmr            H                  !KozMinPr6N-Regular.otf
%hmrv           V                  !KozMinPr6N-Regular.otf
%unijmin-h      UniJIS-UTF16-H     !KozMinPr6N-Regular.otf
%unijmin-v      UniJIS-UTF16-V     !KozMinPr6N-Regular.otf
```

<!-- %cidmin-h       Identity-H         !KozMinPr6N-Regular.otf -->

```
%cidmin-h       Adobe-Japan1-6     !KozMinPr6N-Regular.otf
%cidmin-v       Identity-V         !KozMinPr6N-Regular.otf

hkb            H                   KozGoPr6N-Medium.otf
hkbv           V                   KozGoPr6N-Medium.otf
unijgoth-h     UniJIS-UTF16-H      KozGoPr6N-Medium.otf
unijgoth-v     UniJIS-UTF16-V      KozGoPr6N-Medium.otf
```

<!-- %cidgoth-h      Identity-H          KozGoPr6N-Medium.otf -->

```
cidgoth-h      Adobe-Japan1-6      KozGoPr6N-Medium.otf
cidgoth-v      Identity-V          KozGoPr6N-Medium.otf

%hkb            H                  !KozGoPr6N-Medium.otf
%hkbv           V                  !KozGoPr6N-Medium.otf
%unijgoth-h     UniJIS-UTF16-H     !KozGoPr6N-Medium.otf
%unijgoth-v     UniJIS-UTF16-V     !KozGoPr6N-Medium.otf
```

<!-- %cidgoth-h      Identity-H         !KozGoPr6N-Medium.otf -->

```
%cidgoth-h      Adobe-Japan1-6     !KozGoPr6N-Medium.otf
%cidgoth-v      Identity-V         !KozGoPr6N-Medium.otf
```

***

Adobe の丸ゴシック体はないので，Adobe-Japan1-6 に対応する別のゴシック体（上の例ですと，「小塚ゴシック Pr6N H」です。）を充ててみました。Microsoft Windows NT6.x から利用する場合は $TEXMF/fonts/opentype/adobe/ に KozMinPr6N-Regular.otf 等のシンボリックリンク（管理者権限で「コマンド プロンプト」を開き， mklink を実行します。）を作成します（C:/Windows/Fonts/ にある KozMinPr6N-Regular.otf 等の otf ファイルを $TEXMF/fonts/opentype/Adobe/ に直接コピーすることはライセンス上できません）。

#### [モリサワフォント](http://www.morisawa.co.jp/font/)を使う場合 {#n4b1d474}

***

```
rml            H                   A-OTF-RyuminPr6N-Light.otf
rmlv           V                   A-OTF-RyuminPr6N-Light.otf
 
gbm            H                   A-OTF-GothicBBBPr6N-Medium.otf
gbmv           V                   A-OTF-GothicBBBPr6N-Medium.otf

%%% OTF package
hminr-h        H                   A-OTF-RyuminPr6N-Light.otf
hminr-v        V                   A-OTF-RyuminPr6N-Light.otf
otf-ujmr-h     UniJIS-UTF16-H      A-OTF-RyuminPr6N-Light.otf
otf-ujmr-v     UniJIS-UTF16-V      A-OTF-RyuminPr6N-Light.otf
```

<!-- %otf-cjmr-h     Identity-H          A-OTF-RyuminPr6N-Light.otf -->

```
otf-cjmr-h     Adobe-Japan1-6      A-OTF-RyuminPr6N-Light.otf
otf-cjmr-v     Identity-V          A-OTF-RyuminPr6N-Light.otf

hgothr-h       H                   A-OTF-GothicBBBPr6N-Medium.otf
hgothr-v       V                   A-OTF-GothicBBBPr6N-Medium.otf
otf-ujgr-h     UniJIS-UTF16-H      A-OTF-GothicBBBPr6N-Medium.otf
otf-ujgr-v     UniJIS-UTF16-V      A-OTF-GothicBBBPr6N-Medium.otf
```

<!-- %otf-cjgr-h     Identity-H          A-OTF-GothicBBBPr6N-Medium.otf -->

```
otf-cjgr-h     Adobe-Japan1-6      A-OTF-GothicBBBPr6N-Medium.otf
otf-cjgr-v     Identity-V          A-OTF-GothicBBBPr6N-Medium.otf

hminb-h        H                   A-OTF-FutoMinA101Pr6N-Bold.otf
hminb-v        V                   A-OTF-FutoMinA101Pr6N-Bold.otf
otf-ujmb-h     UniJIS-UTF16-H      A-OTF-FutoMinA101Pr6N-Bold.otf
otf-ujmb-v     UniJIS-UTF16-V      A-OTF-FutoMinA101Pr6N-Bold.otf
otf-cjmb-h     Adobe-Japan1-6      A-OTF-FutoMinA101Pr6N-Bold.otf
```

<!-- %otf-cjmb-h     Identity-H          A-OTF-FutoMinA101Pr6N-Bold.otf -->

```
otf-cjmb-v     Identity-V          A-OTF-FutoMinA101Pr6N-Bold.otf

hgothb-h       H                   A-OTF-FutoGoB101Pr6N-Bold.otf
hgothb-v       V                   A-OTF-FutoGoB101Pr6N-Bold.otf
otf-ujgb-h     UniJIS-UTF16-H      A-OTF-FutoGoB101Pr6N-Bold.otf
otf-ujgb-v     UniJIS-UTF16-V      A-OTF-FutoGoB101Pr6N-Bold.otf
```

<!-- %otf-cjgb-h     Identity-H          A-OTF-FutoGoB101Pr6N-Bold.otf -->

```
otf-cjgb-h     Adobe-Japan1-6      A-OTF-FutoGoB101Pr6N-Bold.otf
otf-cjgb-v     Identity-V          A-OTF-FutoGoB101Pr6N-Bold.otf

hmgothr-h      H                   A-OTF-MidashiGoPr6N-MB31.otf
hmgothr-v      V                   A-OTF-MidashiGoPr6N-MB31.otf
otf-ujmgr-h    UniJIS-UTF16-H      A-OTF-MidashiGoPr6N-MB31.otf
otf-ujmgr-v    UniJIS-UTF16-V      A-OTF-MidashiGoPr6N-MB31.otf
```

<!-- %otf-cjmgr-h    Identity-H          A-OTF-MidashiGoPr6N-MB31.otf -->

```
otf-cjmgr-h    Adobe-Japan1-6      A-OTF-MidashiGoPr6N-MB31.otf
otf-cjmgr-v    Identity-V          A-OTF-MidashiGoPr6N-MB31.otf

%%% UTF package
hmr            H                   A-OTF-RyuminPr6N-Light.otf
hmrv           V                   A-OTF-RyuminPr6N-Light.otf
unijmin-h      UniJIS-UTF16-H      A-OTF-RyuminPr6N-Light.otf
unijmin-v      UniJIS-UTF16-V      A-OTF-RyuminPr6N-Light.otf
```

<!-- %cidmin-h       Identity-H          A-OTF-RyuminPr6N-Light.otf -->

```
cidmin-h       Adobe-Japan1-6      A-OTF-RyuminPr6N-Light.otf
cidmin-v       Identity-V          A-OTF-RyuminPr6N-Light.otf

hkb            H                   A-OTF-GothicBBBPr6N-Medium.otf
hkbv           V                   A-OTF-GothicBBBPr6N-Medium.otf
unijgoth-h     UniJIS-UTF16-H      A-OTF-GothicBBBPr6N-Medium.otf
unijgoth-v     UniJIS-UTF16-V      A-OTF-GothicBBBPr6N-Medium.otf
```

<!-- %cidgoth-h      Identity-H          A-OTF-GothicBBBPr6N-Medium.otf -->

```
cidgoth-h      Adobe-Japan1-6      A-OTF-GothicBBBPr6N-Medium.otf
cidgoth-v      Identity-V          A-OTF-GothicBBBPr6N-Medium.otf
```

***

モリサワの丸ゴシック体は，Adobe-Japan1-6 に対応していますが，ここでは，Adobe-Japan1-6 に対応する別のゴシック体（上の例ですと，Adobe のゴシック体「小塚ゴシック Pr6N H」に相当する「見出ゴMB31 Pr6N MB31」です。）を充ててみました。Microsoft Windows NT6.x から利用する場合は $TEXMF/fonts/opentype/morisawa/ に C:/Windows/Fonts/ にある A-OTF-RyuminPr6N-Light.otf 等のシンボリックリンク（管理者権限で「コマンド プロンプト」を開き， mklink を実行します。）を作成します（C:/Windows/Fonts/ にある A-OTF-RyuminPr6N-Light.otf 等の otf ファイルを $TEXMF/fonts/opentype/morisawa/ に直接コピーすることはライセンス上はおろか，プロテクトがかかっているため技術的にもできません）。

<!-- ***[[Vine Linux 3.2 CR:http://vinelinux.org/whatsnew.html#news/20060123]] 附属のフォントを使う場合 [#kf9b6d7c] -->
<!--  -->
<!-- - --  -->
<!-- rml            H                :0:lxmincho.ttc -->
<!-- rmlv           V                :0:lxmincho.ttc -->
<!--  -->
<!-- gbm            H                :0:lxgothic.ttc -->
<!-- gbmv           V                :0:lxgothic.ttc -->
<!--  -->
<!-- %%% OTF package -->
<!-- hminr-h        H                :0:lxmincho.ttc -->
<!-- hminr-v        V                :0:lxmincho.ttc -->
<!-- otf-ujmr-h     UniJIS-UTF16-H   :0:lxmincho.ttc -->
<!-- otf-ujmr-v     UniJIS-UTF16-V   :0:lxmincho.ttc -->
<!-- // %otf-cjmr-h     Identity-H       :0:lxmincho.ttc/AJ16 -->
<!-- otf-cjmr-h     Adobe-Japan1-6   :0:lxmincho.ttc -->
<!-- otf-cjmr-v     Identity-V       :0:lxmincho.ttc/AJ16 -->
<!--  -->
<!-- hgothr-h       H                :0:lxgothic.ttc -->
<!-- hgothr-v       V                :0:lxgothic.ttc -->
<!-- otf-ujgr-h     UniJIS-UTF16-H   :0:lxgothic.ttc -->
<!-- otf-ujgr-v     UniJIS-UTF16-V   :0:lxgothic.ttc -->
<!-- // %otf-cjgr-h     Identity-H       :0:lxgothic.ttc/AJ16 -->
<!-- otf-cjgr-h     Adobe-Japan1-6   :0:lxgothic.ttc -->
<!-- otf-cjgr-v     Identity-V       :0:lxgothic.ttc/AJ16 -->
<!--  -->
<!-- hminb-h        H                :0:dfminc.ttc -->
<!-- hminb-v        V                :0:dfminc.ttc -->
<!-- otf-ujmb-h     UniJIS-UTF16-H   :0:dfminc.ttc -->
<!-- otf-ujmb-v     UniJIS-UTF16-V   :0:dfminc.ttc -->
<!-- // %otf-cjmb-h     Identity-H       :0:dfminc.ttc/AJ16 -->
<!-- otf-cjmb-h     Adobe-Japan1-6   :0:dfminc.ttc -->
<!-- otf-cjmb-v     Identity-V       :0:dfminc.ttc/AJ16 -->
<!--  -->
<!-- hgothb-h       H                :0:lxgothub.ttc -->
<!-- hgothb-v       V                :0:lxgothub.ttc -->
<!-- otf-ujgb-h     UniJIS-UTF16-H   :0:lxgothub.ttc -->
<!-- otf-ujgb-v     UniJIS-UTF16-V   :0:lxgothub.ttc -->
<!-- // %otf-cjgb-h     Identity-H       :0:lxgothub.ttc/AJ16 -->
<!-- otf-cjgb-h     Adobe-Japan1-6   :0:lxgothub.ttc -->
<!-- otf-cjgb-v     Identity-V       :0:lxgothub.ttc/AJ16 -->
<!--  -->
<!-- hmgothr-h      H                :0:lxmgoth.ttc -->
<!-- hmgothr-v      V                :0:lxmgoth.ttc -->
<!-- otf-ujmgr-h    UniJIS-UTF16-H   :0:lxmgoth.ttc -->
<!-- otf-ujmgr-v    UniJIS-UTF16-V   :0:lxmgoth.ttc -->
<!-- // %otf-cjmgr-h    Identity-H       :0:lxmgoth.ttc/AJ16 -->
<!-- otf-cjmgr-h    Adobe-Japan1-6   :0:lxmgoth.ttc -->
<!-- otf-cjmgr-v    Identity-V       :0:lxmgoth.ttc/AJ16 -->
<!--  -->
<!-- hgotheb-h      H                :0:lxpop.ttc -->
<!-- hgotheb-v      V                :0:lxpop.ttc -->
<!--  -->
<!-- hminl-h        H                :0:lxmincho.ttc -->
<!-- hminl-v        V                :0:lxmincho.ttc -->
<!-- otf-ujml-h     UniJIS-UTF16-H   :0:lxmincho.ttc -->
<!-- otf-ujml-v     UniJIS-UTF16-V   :0:lxmincho.ttc -->
<!-- // %otf-cjml-h     Identity-H       :0:lxmincho.ttc/AJ16 -->
<!-- otf-cjml-h     Adobe-Japan1-6   :0:lxmincho.ttc -->
<!-- otf-cjml-v     Identity-V       :0:lxmincho.ttc/AJ16 -->
<!--  -->
<!-- %%% UTF package -->
<!-- hmr            H                :0:lxmincho.ttc -->
<!-- hmrv           V                :0:lxmincho.ttc -->
<!-- unijmin-h      UniJIS-UTF16-H   :0:lxmincho.ttc -->
<!-- unijmin-v      UniJIS-UTF16-V   :0:lxmincho.ttc -->
<!-- // %cidmin-h       Identity-H       :0:lxmincho.ttc/AJ16 -->
<!-- cidmin-h       Adobe-Japan1-6   :0:lxmincho.ttc -->
<!-- cidmin-v       Identity-V       :0:lxmincho.ttc/AJ16 -->
<!--  -->
<!-- hkb            H                :0:lxgothic.ttc -->
<!-- hkbv           V                :0:lxgothic.ttc -->
<!-- unijgoth-h     UniJIS-UTF16-H   :0:lxgothic.ttc -->
<!-- unijgoth-v     UniJIS-UTF16-V   :0:lxgothic.ttc -->
<!-- // %cidgoth-h      Identity-H       :0:lxgothic.ttc/AJ16 -->
<!-- cidgoth-h      Adobe-Japan1-6   :0:lxgothic.ttc -->
<!-- cidgoth-v      Identity-V       :0:lxgothic.ttc/AJ16 -->
<!-- - --  -->

### <a id="map-dvips">For dvips(k)</a> {#k1eb9f9c}

$TEXMF/dvips/config/config.ps に OTF/UTF パッケージ用の map ファイル
（例えば $TEXMFLOCAL/fonts/map/dvips/local/psfonts-local.map）のファイル名を

```
p  +psfonts-local.map
```

のように追記した上で，
次のような OTF/UTF パッケージ用の map ファイル
（ここでは $TEXMFLOCAL/fonts/map/dvips/local/psfonts-local.map）を
$TEXMFLOCAL/fonts/map/dvips// 以下に作成します。

（または {$TEXMFMAIN,$TEXMFDIST}/fonts/map/dvips/base/psfonts.map を
$TEXMFLOCAL/fonts/map/dvips/base/psfonts.map にコピーした上で，
$TEXMFLOCAL/fonts/map/dvips/base/psfonts.map の最後に
次のような内容を直接追記しても良いでしょう。）

***

```
rml                  Ryumin-Light-H
rmlv                 Ryumin-Light-V

gbm              GothicBBB-Medium-H
gbmv             GothicBBB-Medium-V

%%% OTF package
hminr-h              Ryumin-Light-H
hminr-v              Ryumin-Light-V
otf-ujmr-h           Ryumin-Light-UniJIS-UTF16-H
otf-ujmr-v           Ryumin-Light-UniJIS-UTF16-V
otf-cjmr-h           Ryumin-Light-Identity-H
otf-cjmr-v           Ryumin-Light-Identity-V

hgothr-h         GothicBBB-Medium-H
hgothr-v         GothicBBB-Medium-V
otf-ujgr-h       GothicBBB-Medium-UniJIS-UTF16-H
otf-ujgr-v       GothicBBB-Medium-UniJIS-UTF16-V
otf-cjgr-h       GothicBBB-Medium-Identity-H
otf-cjgr-v       GothicBBB-Medium-Identity-V

hminb-h          FutoMinA101-Bold-H
hminb-v          FutoMinA101-Bold-V
otf-ujmb-h       FutoMinA101-Bold-UniJIS-UTF16-H
otf-ujmb-v       FutoMinA101-Bold-UniJIS-UTF16-V
otf-cjmb-h       FutoMinA101-Bold-Identity-H
otf-cjmb-v       FutoMinA101-Bold-Identity-V

hgothb-h          FutoGoB101-Bold-H
hgothb-v          FutoGoB101-Bold-V
otf-ujgb-h        FutoGoB101-Bold-UniJIS-UTF16-H
otf-ujgb-v        FutoGoB101-Bold-UniJIS-UTF16-V
otf-cjgb-h        FutoGoB101-Bold-Identity-H
otf-cjgb-v        FutoGoB101-Bold-Identity-V

hmgothr-h            MidashiGo-MB31-H
hmgothr-v            MidashiGo-MB31-V
otf-ujmgr-h          MidashiGo-MB31-UniJIS-UTF16-H
otf-ujmgr-v          MidashiGo-MB31-UniJIS-UTF16-V
otf-cjmgr-h          MidashiGo-MB31-Identity-H
otf-cjmgr-v          MidashiGo-MB31-Identity-V

hminl-h            HiraMinStdN-W2-H
hminl-v            HiraMinStdN-W2-V
otf-ujml-h         HiraMinStdN-W2-UniJIS-UTF16-H
otf-ujml-v         HiraMinStdN-W2-UniJIS-UTF16-V
otf-cjml-h         HiraMinStdN-W2-Identity-H
otf-cjml-v         HiraMinStdN-W2-Identity-V

otf-ucmr-h           STSong-Light-UniGB-UTF16-H
otf-ucmr-v           STSong-Light-UniGB-UTF16-V
otf-ccmr-h           STSong-Light-Identity-H
otf-ccmr-v           STSong-Light-Identity-V

otf-ucgr-h        STHeiti-Regular-UniGB-UTF16-H
otf-ucgr-v        STHeiti-Regular-UniGB-UTF16-V
otf-ccgr-h        STHeiti-Regular-Identity-H
otf-ccgr-v        STHeiti-Regular-Identity-V

otf-utmr-h            MSung-Light-UniCNS-UTF16-H
otf-utmr-v            MSung-Light-UniCNS-UTF16-V
otf-ctmr-h            MSung-Light-Identity-H
otf-ctmr-v            MSung-Light-Identity-V

otf-utgr-h            MHei-Medium-UniCNS-UTF16-H
otf-utgr-v            MHei-Medium-UniCNS-UTF16-V
otf-ctgr-h            MHei-Medium-Identity-H
otf-ctgr-v            MHei-Medium-Identity-V

otf-ukmr-h     HYSMyeongJo-Medium-UniKS-UTF16-H
otf-ukmr-v     HYSMyeongJo-Medium-UniKS-UTF16-V
otf-ckmr-h     HYSMyeongJo-Medium-Identity-H
otf-ckmr-v     HYSMyeongJo-Medium-Identity-V

otf-ukgr-h        HYGoThic-Medium-UniKS-UTF16-H
otf-ukgr-v        HYGoThic-Medium-UniKS-UTF16-V
otf-ckgr-h        HYGoThic-Medium-Identity-H
otf-ckgr-v        HYGoThic-Medium-Identity-V

hiramin-w3-h       HiraMinProN-W3-Identity-H
hiramin-w3-v       HiraMinProN-W3-Identity-V
hiramin-w6-h       HiraMinProN-W6-Identity-H
hiramin-w6-v       HiraMinProN-W6-Identity-V
hirakaku-w3-h     HiraKakuProN-W3-Identity-H
hirakaku-w3-v     HiraKakuProN-W3-Identity-V
hirakaku-w6-h     HiraKakuProN-W6-Identity-H
hirakaku-w6-v     HiraKakuProN-W6-Identity-V
hiramaru-w4-h     HiraMaruProN-W4-Identity-H
hiramaru-w4-v     HiraMaruProN-W4-Identity-V

%%% UTF package
hmr                  Ryumin-Light-H
hmrv                 Ryumin-Light-V
unijmin-h            Ryumin-Light-UniJIS-UTF16-H
unijmin-v            Ryumin-Light-UniJIS-UTF16-V
cidmin-h             Ryumin-Light-Identity-H
cidmin-v             Ryumin-Light-Identity-V

hkb              GothicBBB-Medium-H
hkbv             GothicBBB-Medium-V
unijgoth-h       GothicBBB-Medium-UniJIS-UTF16-H
unijgoth-v       GothicBBB-Medium-UniJIS-UTF16-V
cidgoth-h        GothicBBB-Medium-Identity-H
cidgoth-v        GothicBBB-Medium-Identity-V
```

***

TeXWiki:Ghostscript 8.54 の
「OTF パッケージ用の設定」や「lib/cidfmap の記述例
（UNIX or Unix-like OS 用・
Mac OS X 用・
Microsoft Windows 用）」も
参照のこと。

### For “dviout for Windows” {#t4c4b9ef}

次のようなユーザ用の map ファイル dviout\map\\$user.map を作成し，
Shift_JIS で保存します。

***

```
;;; -*- Coding: shift_jis; Encoding: Shift_JIS -*-
;;; -- dviout\map\$user.map ------+----4----+----5----+----6----+----7----+
;;; In this file one may define the font mappings or the files to be input.
;;; This file will not be overwritten by dviout (verion up).

min5            "ＭＳ 明朝"
min6            "ＭＳ 明朝"
min7            "ＭＳ 明朝"
min8            "ＭＳ 明朝"
min9            "ＭＳ 明朝"
min10           "ＭＳ 明朝"
tmin5          "@ＭＳ 明朝"
tmin6          "@ＭＳ 明朝"
tmin7          "@ＭＳ 明朝"
tmin8          "@ＭＳ 明朝"
tmin9          "@ＭＳ 明朝"
tmin10         "@ＭＳ 明朝"

goth5           "HGｺﾞｼｯｸM"
goth6           "HGｺﾞｼｯｸM"
goth7           "HGｺﾞｼｯｸM"
goth8           "HGｺﾞｼｯｸM"
goth9           "HGｺﾞｼｯｸM"
goth10          "HGｺﾞｼｯｸM"
tgoth5         "@HGｺﾞｼｯｸM"
tgoth6         "@HGｺﾞｼｯｸM"
tgoth7         "@HGｺﾞｼｯｸM"
tgoth8         "@HGｺﾞｼｯｸM"
tgoth9         "@HGｺﾞｼｯｸM"
tgoth10        "@HGｺﾞｼｯｸM"

;goth5           "ＭＳ ゴシック"
;goth6           "ＭＳ ゴシック"
;goth7           "ＭＳ ゴシック"
;goth8           "ＭＳ ゴシック"
;goth9           "ＭＳ ゴシック"
;goth10          "ＭＳ ゴシック"
;tgoth5         "@ＭＳ ゴシック"
;tgoth6         "@ＭＳ ゴシック"
;tgoth7         "@ＭＳ ゴシック"
;tgoth8         "@ＭＳ ゴシック"
;tgoth9         "@ＭＳ ゴシック"
;tgoth10        "@ＭＳ ゴシック"

jis             "ＭＳ 明朝"
jis-v          "@ＭＳ 明朝"

jisg            "HGｺﾞｼｯｸM"
jisg-v         "@HGｺﾞｼｯｸM"

;jisg            "ＭＳ ゴシック"
;jisg-v         "@ＭＳ ゴシック"

;;; OTF package
hminr-h         "ＭＳ 明朝"
hminr-v        "@ＭＳ 明朝"
otf-ujmr-h      "ＭＳ 明朝"                 Unicode
otf-ujmr-v     "@ＭＳ 明朝"                 Unicode
otf-cjmr-h      "ＭＳ 明朝"                 CID2Uni
otf-cjmr-v     "@ＭＳ 明朝"                 CID2Uni

hgothr-h        "HGｺﾞｼｯｸM"
hgothr-v       "@HGｺﾞｼｯｸM"
otf-ujgr-h      "HGｺﾞｼｯｸM"                  Unicode
otf-ujgr-v     "@HGｺﾞｼｯｸM"                  Unicode
otf-cjgr-h      "HGｺﾞｼｯｸM"                  CID2Uni
otf-cjgr-v     "@HGｺﾞｼｯｸM"                  CID2Uni

;hgothr-h        "ＭＳ ゴシック"
;hgothr-v       "@ＭＳ ゴシック"
;otf-ujgr-h      "ＭＳ ゴシック"             Unicode
;otf-ujgr-v     "@ＭＳ ゴシック"             Unicode
;otf-cjgr-h      "ＭＳ ゴシック"             CID2Uni
;otf-cjgr-v     "@ＭＳ ゴシック"             CID2Uni

hminb-h         "HG明朝B"
hminb-v        "@HG明朝B"
otf-ujmb-h      "HG明朝B"                   Unicode
otf-ujmb-v     "@HG明朝B"                   Unicode
otf-cjmb-h      "HG明朝B"                   CID2Uni
otf-cjmb-v     "@HG明朝B"                   CID2Uni

;hminb-h         "ＭＳ 明朝"            bold
;hminb-v        "@ＭＳ 明朝"            bold
;otf-ujmb-h      "ＭＳ 明朝"            bold,Unicode
;otf-ujmb-v     "@ＭＳ 明朝"            bold,Unicode
;otf-cjmb-h      "ＭＳ 明朝"            bold,CID2Uni
;otf-cjmb-v     "@ＭＳ 明朝"            bold,CID2Uni

hgothb-h        "HGｺﾞｼｯｸE"
hgothb-v       "@HGｺﾞｼｯｸE"
otf-ujgb-h      "HGｺﾞｼｯｸE"                  Unicode
otf-ujgb-v     "@HGｺﾞｼｯｸE"                  Unicode
otf-cjgb-h      "HGｺﾞｼｯｸE"                  CID2Uni
otf-cjgb-v     "@HGｺﾞｼｯｸE"                  CID2Uni

;hgothb-h        "ＭＳ ゴシック"        bold
;hgothb-v       "@ＭＳ ゴシック"        bold
;otf-ujgb-h      "ＭＳ ゴシック"        bold,Unicode
;otf-ujgb-v     "@ＭＳ ゴシック"        bold,Unicode
;otf-cjgb-h      "ＭＳ ゴシック"        bold,CID2Uni
;otf-cjgb-v     "@ＭＳ ゴシック"        bold,CID2Uni

hmgothr-h       "HG丸ｺﾞｼｯｸM-PRO"
hmgothr-v      "@HG丸ｺﾞｼｯｸM-PRO"
otf-ujmgr-h     "HG丸ｺﾞｼｯｸM-PRO"            Unicode
otf-ujmgr-v    "@HG丸ｺﾞｼｯｸM-PRO"            Unicode
otf-cjmgr-h     "HG丸ｺﾞｼｯｸM-PRO"            CID2Uni
otf-cjmgr-v    "@HG丸ｺﾞｼｯｸM-PRO"            CID2Uni

hgotheb-h       "HG創英角ｺﾞｼｯｸUB"
hgotheb-v      "@HG創英角ｺﾞｼｯｸUB"

;hminl-h         "ヒラギノ明朝 StdN W2"
;hminl-v        "@ヒラギノ明朝 StdN W2"
;otf-ujml-h      "ヒラギノ明朝 StdN W2"      Unicode
;otf-ujml-v     "@ヒラギノ明朝 StdN W2"      Unicode
;otf-cjml-h      "ヒラギノ明朝 StdN W2"      CID2Uni
;otf-cjml-v     "@ヒラギノ明朝 StdN W2"      CID2Uni

hminl-h         "ＭＳ 明朝"
hminl-v        "@ＭＳ 明朝"
otf-ujml-h      "ＭＳ 明朝"                 Unicode
otf-ujml-v     "@ＭＳ 明朝"                 Unicode
otf-cjml-h      "ＭＳ 明朝"                 CID2Uni
otf-cjml-v     "@ＭＳ 明朝"                 CID2Uni

otf-ucmr-h      "NSimSun"                   Unicode,GB2312
otf-ucmr-v     "@NSimSun"                   Unicode,GB2312
```

<!-- ;otf-ccmr-h      "NSimSun"                   CID2Uni,GB2312 -->
<!-- ;otf-ccmr-v     "@NSimSun"                   CID2Uni,GB2312 -->

```

otf-ucgr-h      "SimHei"                    Unicode,GB2312
otf-ucgr-v     "@SimHei"                    Unicode,GB2312
```

<!-- ;otf-ccgr-h      "SimHei"                    CID2Uni,GB2312 -->
<!-- ;otf-ccgr-v     "@SimHei"                    CID2Uni,GB2312 -->

```

otf-utmr-h      "MingLiU"                   Unicode,ChineseBig5
otf-utmr-v     "@MingLiU"                   Unicode,ChineseBig5
```

<!-- ;otf-ctmr-h      "MingLiU"                   CID2Uni,ChineseBig5 -->
<!-- ;otf-ctmr-v     "@MingLiU"                   CID2Uni,ChineseBig5 -->

```

otf-utgr-h      "SimHei"                    Unicode,ChineseBig5
otf-utgr-v     "@SimHei"                    Unicode,ChineseBig5
```

<!-- ;otf-ctgr-h      "SimHei"                    CID2Uni,ChineseBig5 -->
<!-- ;otf-ctgr-v     "@SimHei"                    CID2Uni,ChineseBig5 -->

```

otf-ukmr-h      "BatangChe"                 Unicode,hangeul
otf-ukmr-v     "@BatangChe"                 Unicode,hangeul
```

<!-- ;otf-ckmr-h      "BatangChe"                 CID2Uni,hangeul -->
<!-- ;otf-ckmr-v     "@BatangChe"                 CID2Uni,hangeul -->

```

otf-ukgr-h      "DotumChe"                  Unicode,hangeul
otf-ukgr-v     "@DotumChe"                  Unicode,hangeul
```

<!-- ;otf-ckgr-h      "DotumChe"                  CID2Uni,hangeul -->
<!-- ;otf-ckgr-v     "@DotumChe"                  CID2Uni,hangeul -->

```

hiramin-w3-h    "ヒラギノ明朝 ProN W3"      CID2Uni
hiramin-w3-v   "@ヒラギノ明朝 ProN W3"      CID2Uni
hiramin-w6-h    "ヒラギノ明朝 ProN W6"      CID2Uni
hiramin-w6-v   "@ヒラギノ明朝 ProN W6"      CID2Uni
hirakaku-w3-h   "ヒラギノ角ゴ ProN W3"      CID2Uni
hirakaku-w3-v  "@ヒラギノ角ゴ ProN W3"      CID2Uni
hirakaku-w6-h   "ヒラギノ角ゴ ProN W6"      CID2Uni
hirakaku-w6-v  "@ヒラギノ角ゴ ProN W6"      CID2Uni
hiramaru-w4-h   "ヒラギノ丸ゴ ProN W4"      CID2Uni
hiramaru-w4-v  "@ヒラギノ丸ゴ ProN W4"      CID2Uni

;;; UTF package
hmr             "ＭＳ 明朝"
hmrv           "@ＭＳ 明朝"
unijmin-h       "ＭＳ 明朝"                 Unicode
unijmin-v      "@ＭＳ 明朝"                 Unicode
cidmin-h        "ＭＳ 明朝"                 CID2Uni
cidmin-v       "@ＭＳ 明朝"                 CID2Uni

hkb             "HGｺﾞｼｯｸM"
hkbv           "@HGｺﾞｼｯｸM"
unijgoth-h      "HGｺﾞｼｯｸM"                  Unicode
unijgoth-v     "@HGｺﾞｼｯｸM"                  Unicode
cidgoth-h       "HGｺﾞｼｯｸM"                  CID2Uni
cidgoth-v      "@HGｺﾞｼｯｸM"                  CID2Uni

;hkb             "ＭＳ ゴシック"
;hkbv           "@ＭＳ ゴシック"
;unijgoth-h      "ＭＳ ゴシック"             Unicode
;unijgoth-v     "@ＭＳ ゴシック"             Unicode
;cidgoth-h       "ＭＳ ゴシック"             CID2Uni
;cidgoth-v      "@ＭＳ ゴシック"             CID2Uni

;;; -- end of file "$user.map" ---+----4----+----5----+----6----+----7----+
```

***

なお，dviout for Windows は Ver. 3.18 の時点では
Adobe-GB1，Adobe-CNS1，Adobe-Korea1 の CID 番号に対応していません。

<!-- ↑これの試作品を作ったことがあるのですが，需要はあるのでしょうか。 -->
<!-- もしあるようであれば，大島先生のところに投稿しますが。 -->

<!-- 需要はあると思います。ただ，とても少ないとは思いますが。 -->

## Comments {#ib3e810d}

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->

[^1]: 9.2.0以降は「Windows 7」に対応済みですが，これまでの過去のVer. には脆弱性がありますので，9.3.2の利用を推奨いたします。
