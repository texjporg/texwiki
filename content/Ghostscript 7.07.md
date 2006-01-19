---
title: "Ghostscript 7.07"
url: "/Ghostscript 7.07/"
date: 2004-09-19T17:06:06Z
pukiwiki: "Ghostscript 7.07"
---

# Ghostscript 7.07

## GNU Ghostscript 7.07 {#u1488af6}

特に UNIX 互換 OS でのインストール法をまとめましたが，バイナリで用意されている Windows
でも役に立つことがあるかもしれません。

### News {#qc5125cb}

- \[040723\] URWフォントのバグ

### はじめに {#he9c7727}

以下は [GNU Ghostscript 7.05 on Linux](http://oku.edu.mie-u.ac.jp/~okumura/linux/gs705.html)，
[GNU Ghostscript 7.06 on Linux](http://oku.edu.mie-u.ac.jp/~okumura/linux/gs706.html)
をとりあえず書き直したものです。
[GNU Ghostscript 7.06 on Linux](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/gs706.html)
ではエプソンコーワのドライバを使いましたが，バグがあるようなので，ここでは大森さんの gdevlips
ドライバに戻しました。
その後エプソンコーワのドライバも改訂されたように思いますが，未確認です。

Mac OS X（＋X11）でもまったく同様にインストールできます
（Mac OS X 10.4 では ./configure --without-gimp-print
で Makefile の XLIBS=Xt Xext X11 は XLIBS=Xt SM ICE Xext X11 に直しました）。

安宅さんの
[Install GNU GhostScript 7.07 and dvipdfmx](http://pop-club.hp.infoseek.co.jp/tex/gs_dvipdfm.html)
というページが役に立ちます。
LIPS のB列出力については \[[qa:19792\]](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/19792.html)
をご覧ください。

[ESP Ghostscript](http://www.cups.org/ghostscript.php)
はまだ試していません。
[小川弘和さん](http://www2.kumagaku.ac.jp/teacher/herogw/)
のページ，
[Mac OS X でレーザープリンターを使うスレ](http://pc.2ch.net/test/read.cgi/mac/1037063324/)
が参考になるようです。

### ダウンロード {#k0bb1098}

たとえば [CTAN:/support/ghostscript/](https://mirror.ctan.org//support/ghostscript/) や[sourceforge](http://sourceforge.net/project/showfiles.php?group_id=1897&release_id=160061)  から入手できます。

- ghostscript-7.07.tar.bz2 または ghostscript-7.07.tar.gz ([sourceforge](http://sourceforge.net/project/showfiles.php?group_id=1897&release_id=160061) をたどる)
- gnu-gs-fonts-std-6.0.tar.gz [ftp://mirror.cs.wisc.edu/pub/mirrors/ghost/gnu/fonts/gnu-gs-fonts-std-6.0.tar.gz](ftp://mirror.cs.wisc.edu/pub/mirrors/ghost/gnu/fonts/gnu-gs-fonts-std-6.0.tar.gz)
- gnu-gs-fonts-other-6.0.tar.gz [ftp://mirror.cs.wisc.edu/pub/mirrors/ghost/gnu/fonts/gnu-gs-fonts-other-6.0.tar.gz](ftp://mirror.cs.wisc.edu/pub/mirrors/ghost/gnu/fonts/gnu-gs-fonts-other-6.0.tar.gz)
- jpegsrc.v6b.tar.gz [CTAN:support/ghostscript/3rdparty/jpegsrc.v6b.tar.gz](https://mirror.ctan.org/support/ghostscript/3rdparty/jpegsrc.v6b.tar.gz)

次のものの Windows 版 (シンボリックリンクを含まないもの) は
[Ring Server](http://www.ring.gr.jp/)
の [/pub/text/TeX/ptex-win32/gs/](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/)
から入手できます。オリジナルは [gs-cjk](ftp://ftp.gyve.org/pub/gs-cjk/)
にあります。 Unix 系 OS の場合は
[ここ](http://oku.edu.mie-u.ac.jp/mirror/gs-cjk/)
から入手できます。

- adobe-cmaps-200204.tar.gz -> adobe-cmaps-200406.tar.gz でないと，otf パッケージの使用などで文字欠けが発生する．
- acro5-cmaps-2001.tar.gz

### インストール {#r6c67752}

以下では Vine Linux 2.6r1 や Mac OS X
でインストールを行いました。

```
cd /usr/local/src
tar xvjf ...../ghostscript-7.07.tar.bz2
cd ghostscript-7.07
tar xvzf ...../jpegsrc.v6b.tar.gz
mv jpeg-6b jpeg
./configure
```

tar xvjf でエラーになるなら

```
bzip2 -dc ...tar.bz2 | tar xvf -
```

のようにしてください。

> 以下の記述にある LP-1900 は旧職場に残してきて後継機種 LP-2500 を買い直しました。
> LP-1900 のほうがずっと良かった……。

私のプリンタが LP-1900 なので，大森さんの
[LIPS &amp; ESC/Page &amp; NPDL &amp; RPDL 対応 Ghostscript デバイスドライバ](http://www.ucatv.ne.jp/~taeko/software/gs/)
のページから gdevlips ドライバを入手し，展開します。

```
tar xvzf gdevlips-2.4.0.tar.gz
mv gdevlips-2.4.0/*.htm doc/
mv gdevlips-2.4.0/* src/
cat src/gdevlips.mak >>src/contrib.mak
```

Makefile のたとえば383～384行目に次のような変更を加えます。

```
DEVICE_DEVS17=$(DD)stcolor.dev
DEVICE_DEVS18=$(DD)lips3.dev $(DD)lips4.dev $(DD)escpage.dev
```

src/gdevespg.c の75行目が

```
if (xdpi  600)
```

となっていますが，LP-1900 のような True 1200dpi の ESC/Page
プリンタが安価で入手できるようになったので，

```
if (xdpi  1200)
```

のように変更してしまいました。

なお，make で次のような警告が出ます。

```
src/contrib.mak:896: 警告: ターゲット `obj/lips3.dev' へのコマンドを上書きします
src/contrib.mak:600: 警告: ターゲット `obj/lips3.dev' への古いコマンドは無視されます
```

lib/gs_res.ps の249-250行

```
/FontResourceDir (/Resource/Font/) readonly .forcedef  % pssys'params is r-o
/GenericResourceDir (/Resource/) readonly .forcedef    % pssys'params is r-o
```

の /Resource/（2箇所）を /usr/local/share/ghostscript/Resource/
に書き直します（あるいは ln -s /usr/local/share/ghostscript/Resource /Resource
のようにシンボリックリンクしてもいいでしょう）。

この段階で
[山田泰司さん](http://www.aihara.co.jp/~taiji/gyve/)
のパッチを当てることをお勧めします。
これについては下の方にも少し書きましたが，難しければ後に延ばしてもいいでしょう。

これでトップレベルで make，make install
すると，次のものが /usr/local/bin に入ります。

> bdftops dvipdf eps2eps fixmswrd.pl font2c gs gsbj gsdj gsdj500 gslj
> gslp gsnd lprsetup.sh pdf2dsc pdf2ps pdfopt pf2afm pfbtopfa pj-gs.sh
> printafm ps2ascii ps2epsi ps2pdf ps2pdf12 ps2pdf13 ps2pdf14 ps2pdfwr
> ps2ps pv.sh sysvlp.sh unix-lpr.sh wftopfa

また，/usr/local/share/ghostscript/7.07 の下にたくさんのものが入ります。

仕上げです。

```
make
make install
cd /usr/local/share/ghostscript
tar xvzf gnu-gs-fonts-std-8.11.tar.gz
tar xvzf gnu-gs-fonts-other-6.0.tar.gz
mkdir Resource
cd Resource
tar xvzf adobe-cmaps-200204.tar.gz
tar xvzf acro5-cmaps-2001.tar.gz
```

[New Ghostscript font release](http://www.ghostscript.com/article/44.html)，しかし
URWフォントのバグ

gdevlips-2.4.0 のパッチ等の情報が
[竹野さんのページ](http://takeno.iee.niit.ac.jp/~shige/FreeBSD/LBP/lbp.html)
にあります。

### 和文フォントの設定（和田研フォント編） {#i37976e7}

次は和文フォントを使えるようにします。
[東風明朝 CID/OpenType 化キット](http://khdd.net/Kochi-CID/)
が配布中止になっていますので，ここでは和田研フォントをCID化したサンプルフォントを使うことにします。

[ftp://ftp.oreilly.com/pub/examples/nutshell/ujip/adobe/samples](ftp://ftp.oreilly.com/pub/examples/nutshell/ujip/adobe/samples)
にある WadaMin-Regular，WadaGo-Bold
をダウンロードし，/usr/local/share/ghostscript/Resource/CIDFont/ に入れておきます。
そして，/usr/local/share/ghostscript/7.07/lib/CIDFnmap に次のように書き込みます。

```
/Ryumin-Light           /WadaMin-Regular  ;
/GothicBBB-Medium       /WadaGo-Bold      ;
/HeiseiMin-W3           /Ryumin-Light     ;
/HeiseiKakuGo-W5        /GothicBBB-Medium ;
```

こうしておけば，表示だけでなく，コマンド ps2pdf で日本語 PDF が作れます。
ps2pdf は gs で PDF を作るシェルスクリプトです。
同様な仕組みで dvipdfm，dvipdfmx もインクルードされた EPS ファイルを PDF 化しますので，ps2pdf
が正しく働くことは重要です。

和田研フォントは，表示は何とか我慢できる程度ですが，標準の ps2pdf で PDF
化したものは文字の位置がおかしくなって，使い物になりません。

対処法はいくつかあります。

一つは，できた PDF からフォントを外す中丸さん作の
[replacecjkfonts, cjkps2pdf](http://www.eaflux.com/replacecjkfonts/)
を使うことです。
このフィルタを通せば，埋め込まれた和田研フォントが外され，単に Ryumin-Light，GothicBBB-Medium
への参照となるので，Acrobat Reader できれいに表示・印刷できます。

もう一つは，上の中丸さんのページにも書かれていますが，小川さんの
[東風問題](http://www2.kumagaku.ac.jp/teacher/herogw/gsfonts.html)
で解説されているように，Ghostscript に鈴木俊哉さんの
[このパッチ](http://sourceforge.net/tracker/index.php?func=detail&aid=653140&group_id=1897&atid=301897)
を当てる方法です。
さらに TrueType を指定してもうまくいくパッチを
[山田泰司さん](http://www.aihara.co.jp/~taiji/gyve/)
が作ってくださいました。
結局，山田さんのページに従ってすべてのパッチを当て，dvipdfmx.cfg
を次のように直せば完璧です（適当に改行してありますのでつなげてください）。

```
D "gs -q -dNOPAUSE -dBATCH -sPAPERSIZE=a0 -sDEVICE=pdfwrite
-dCompatibilityLevel=1.3 -dAutoFilterGrayImages=false
-dAutoFilterColorImages=false -dGrayImageFilter=/FlateEncode
-dColorImageFilter=/FlateEncode -dUseFlateCompression=true
-sOutputFile=%o -c '.setpdfwrite << /NeverEmbed [/Courier
/Courier-Bold /Courier-Oblique /Courier-BoldOblique /Helvetica
/Helvetica-Bold /Helvetica-Oblique /Helvetica-BoldOblique /Times-Roman
/Times-Bold /Times-Italic /Times-BoldItalic /Symbol /ZapfDingbats
/Ryumin-Light /GothicBBB-Medium] >> setdistillerparams' -f %i -c quit"
```

要するに，元の %o と %iの間に

```
-c '.setpdfwrite << /NeverEmbed [ ... ] >> setdistillerparams' -f
```

を入れればいいわけです。

2003年9月5日以降の角藤さんの Ghostscript 7.07
配布でもこの設定をすれば和文フォントが埋め込まれません。

Mac OS X 10.3 では API レベルで PS→PDF 変換ができます。
pstopdf というコマンドも用意されています。
しかし日本語はフォントが埋め込まれていないといけないようです。

### 和文フォントの設定（sazanamiフォント編） {#l9833aef}

狩野さんが
[書体関係 Wiki](http://wiki.fdiary.net/font/)
で開発を進めておられる
[sazanami](http://wiki.fdiary.net/font/?sazanami)
TrueType フォントを使ってみます。

[SourceForge.jp](http://sourceforge.jp/projects/efont/files/)
から最新のものをダウンロードし，中にある ttf ファイルを /usr/local/share/ghostscript/fonts
に入れます。

Ghostscript には
[山田泰司さん](http://www.aihara.co.jp/~taiji/gyve/)
のページにあるパッチを当てておきます。

/usr/local/share/ghostscript/7.07/lib/CIDFnmap には次のように書き加えます。

```
/Ryumin-Light           (sazanami-mincho.ttf) ;
/GothicBBB-Medium       (sazanami-gothic.ttf) ;
```

これで表示も PDF 化も大丈夫だと思います。

### 和文フォントの設定（IPAフォント編） {#n1c45670}

[GRASS-Japan](http://www.grass-japan.org/FOSS4G/)
で開発された情報処理推進機構（IPA）のTrueTypeフォント5書体が
[公開](http://www.grass-japan.org/FOSS4G/readme-grass-i18n-ipafonts.eucjp.htm)
されました。
GRASSと独立に配布することはできませんが，Ghostscriptで流用することはできます：

```
/Ryumin-Light           (ipam.ttf)  ;
/GothicBBB-Medium       (ipag.ttf)  ;
```

### 和文フォントの設定（その他） {#k11d6c69}

これ以外にも，和文 TrueType フォントがあれば /usr/local/share/ghostscript/fonts
に入れて，/usr/local/share/ghostscript/7.07/lib/CIDFnmap
にたとえば次のように書き込みます（これらはダイナフォントの平成書体で，商品です）。

```
/Ryumin-Light           (DFHsm3.ttc)      ;
/GothicBBB-Medium       (DFHsg5.ttc)      ;
/FutoMinA101-Bold       (DFHsm5.ttc)      ;
/FutoGoB101-Bold        (DFHsg7.ttc)      ;
/Jun101-Light           (DFHsr4.ttc)      ;
```

フォントによっては TrueType Collection 番号を追加します：

```
/Ryumin-Light           (XXXXXX.ttc) 2    ;
```

TrueType フォントは PDF 化がうまくいかない場合が多いのですが，エラーさえ出なければ，PDF
化した後で replacejfont.pl で外せば大丈夫です。

なお，他OS用フォントをLinuxから使うことについては，
[三田さんがまとめてくださったもの](http://www.ee.t.u-tokyo.ac.jp/~mita/FreeBSD/Truetype-copyright.txt)
があります。
この中ではMicrosoftだけ「Windows以外での使用は認めません」と答えています。

### システム設定 {#r4365fa6}

/etc/printcap はたとえば次のようにしておきます。

```
lp:\
:sd=/var/spool/lpd/lp:\
:mx#0:\
:sh:\
:lp=/dev/lp0:\
:if=/usr/local/lib/gsf:
```

スプールディレクトリができていない場合は作っておきます。

```
checkpc -f
```

フィルタ /usr/local/lib/gsf は，LP-1900 の 600dpi モードなら，次のようにします。

```
#!/bin/sh
/usr/local/bin/gs -q -dNOPAUSE -dSAFER -dBATCH \
-sDEVICE=lp1900 -r600 -sPAPERSIZE=a4 -sOutputFile=- -
```

1200dpi モードなら，-r600 を -r1200 にします。
1200dpi モードにするとかなり遅くなりますし，文字部分はあまり変化がありませんが，
画像はハーフトーンの網点が細かくなるので一目瞭然の差があります。

これで lpr hoge.ps と打ち込めば hoge.ps が印刷できます。

### その他 {#ld9cdeca}

B列（B5判など）の出力については TeX の掲示板の
[17129](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/17129.html)
以下に話題が出ています。
GhostscriptのB列はJISではなくISOなのでサイズが微妙に違います。
たとえばJISのB4は /jisb4 と定義されています（gs_statd.ps）。
dvipsのサイズ指定については [ここ](/dvips/) 参照。
