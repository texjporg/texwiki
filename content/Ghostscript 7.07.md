---
title: "Ghostscript 7.07"
url: "/Ghostscript 7.07/"
date: 2004-09-19T17:06:06Z
pukiwiki: "Ghostscript 7.07"
---

# Ghostscript 7.07

## GNU Ghostscript 7.07 (2003-05-17)（非推奨） {#u1488af6}

<strong> <em>この項目は編集途中です</em> </strong>：削除されていた項目をとりあえず復活させることを急ぎました。

全面的に2015年の環境で可能かどうか検証作業中です。
動く保証はまったくありませんので，<strong>よくわからない方はこのページは無視してください</strong>。 (2015-10-16)

Ghostscript 10.08.0 (2026-09-08) は、日本語の縦書き PostScript ファイルを画面に表示すると正しく表示できるのですが、ps2pdf で PDF に変換すると句読点（。、）などの表示がおかしくなりました。

かつて Ghostscript には GNU Ghostscript 7.07 (2003-05-17) というバージョンが存在し，日本の gs-cjk プロジェクトの寄与を含み，日本語の縦書き PostScript ファイルを正しく扱うことができました。
ここではその Ghostscript 7.07 について説明します。

なお，Ghostscript 7.07 には脆弱性が存在しますので，最新の Ghostscript を利用することをお勧めします。

<!-- 日本語 PS を正しく表示・印刷できる最後の Ghostscript である -->
<!-- 日本の開発者がコミットした gs-cjk プロジェクトの記録が消滅するのを防ぐ -->
<!-- という意図から復活させました。いまだ一定の需要があるはず。 -->
<!-- 古すぎると判断した記述をコメントアウトあるいは削除しています。 -->
<!-- いまだ有効であれば表に出してください。 - - 2015/10/14 アセトアミノフェン -->

<!-- なお，個人的な作業メモが -->
<!-- https://acetaminophen.hatenablog.com/search?q=Ghostscript+7.07 -->
<!-- に大量にあります。 -->

***

***

<!-- ここは古い記述の残りもの…残すか消すか？ -->
<!-- macOS (+ X11) でもまったく同様にインストールできます -->
<!-- （Mac OS X 10.4 では ./configure - -without-gimp-print -->
<!-- で Makefile の XLIBS=Xt Xext X11 は XLIBS=Xt SM ICE Xext X11 に直しました）。 -->
<!-- [[ESP Ghostscript:http://www.cups.org/ghostscript.php]] はまだ試していません。 -->

### ダウンロード {#k0bb1098}

Ghostscript で利用する欧文フォントは，Sourceforge ([gs-fonts](https://sourceforge.net/projects/gs-fonts/files/gs-fonts/)) やそのミラーから入手できます。
CJK フォントを扱うためには CMap Resource も必要で，これは [Adobe Type Tools - GitHub](https://github.com/adobe-type-tools/cmap-resources) からダウンロードできます。

ソースから make する場合は，これに加えて GNU Ghostscript 7.07 本体と依存ライブラリのソースも必要です。
本体のソースは ghostscript-7.07b.tar.gz の場合は [https://ftp.gnu.org/gnu/ghostscript/](https://ftp.gnu.org/gnu/ghostscript/) や [http://ftp.yz.yamagata-u.ac.jp/pub/GNU/ghostscript/](http://ftp.yz.yamagata-u.ac.jp/pub/GNU/ghostscript/) ，ghostscript-7.07.tar.bz2 または ghostscript-7.07.tar.gz の場合は [http://ftp2.de.freebsd.org/pub/misc/ghostscript/gnu/gs707/](http://ftp2.de.freebsd.org/pub/misc/ghostscript/gnu/gs707/) から，依存ライブラリのソースは，[ftp.gnu.org](https://ftp.gnu.org/gnu/ghostscript/) やそのミラーから入手できます。

- GNU Ghostscript 7.07 のソース
    - ghostscript-7.07b.tar.gz または ghostscript-7.07.tar.bz2 または ghostscript-7.07.tar.gz
- 依存ライブラリ (jpeg, libpng, zlib) ← zlib-1.2.0 以降は infblock.c がないため make でエラーが出る
    - jpegsrc.v6b.tar.gz
    - libpng-1.0.2.tar.gz
    - zlib-1.1.3.tar.gz
        <!-- 旧： [[CTAN:support/ghostscript/3rdparty/jpegsrc.v6b.tar.gz]] -->

- Ghostscript fonts 8.11 (base 35, GPL) と Ghostscript fonts 6.0 (misc, GPL)
    - ghostscript-fonts-std-8.11.tar.gz
        <!-- gnu-gs-fonts-std-6.0.tar.gz -->
        <!-- 旧： ftp://mirror.cs.wisc.edu/pub/mirrors/ghost/gnu/fonts/gnu-gs-fonts-std-6.0.tar.gz -->
    - gnu-gs-fonts-other-6.0.tar.gz
        <!-- gnu-gs-fonts-other-6.0.tar.gz -->
        <!-- 旧： ftp://mirror.cs.wisc.edu/pub/mirrors/ghost/gnu/fonts/gnu-gs-fonts-other-6.0.tar.gz -->

- CMap Resources (Adobe Type Tools)
    - cmapresources_identity-0.zip
    - cmapresources_cns1-7.zip
    - cmapresources_gb1-5.zip
    - cmapresources_japan1-7.zip
    - cmapresources_korea1-2.zip

<!-- 次のものは元々 gs-cjk に置かれていたものですが，ドメインが無くなっています。 -->
<!-- Unix 系 OS の場合は[[ここ:http://oku.edu.mie-u.ac.jp/mirror/gs-cjk/]]から入手できます。 -->
<!-- -adobe-cmaps-200204.tar.gz -->
<!-- ←[[otf パッケージ>OTF]]の使用などで文字欠けが発生する場合は adobe-cmaps-200406.tar.gz -->
<!-- -acro5-cmaps-2001.tar.gz -->

バージョンによってはライセンスが異なりますので，注意深くダウンロードしてください。

### インストール（バイナリを入手する方法） {#r6c67752}

#### Windows {#y7d058ad}

[Windows 用 Ghostscript 7.07 (gs-cjk) パッケージ一式](https://x.com/aminophen/status/1304059223580450820) [gs707w32full-20200910.zip](https://dl.dropboxusercontent.com/s/3y6jly3o6mlzl5z/gs707w32full-20200910.zip) または角藤さんが配布している [gs707w32full.zip](https://w32tex.org/gs/gs707w32full.zip) を展開し，中にある “setupgs.exe” を実行します。
デフォルトでは C:\gs に入ります（ご自分でドキュメントを読んでトラブルを解決するつもりの人以外は，安易に変えないでください）。
C:\gs\gs7.07\bin\gswin32.exe が実行ファイルです（コンソール版は gswin32c.exe）。
Ghostscript fonts も同時に C:\gs\fonts にインストールされます。

- 環境変数 TEMP に全角文字が含まれていると失敗するかもしれません（Windows のユーザ名に2バイト文字を使っている場合など）。この場合は，例えば C:\tmp というフォルダ（ディレクトリ）を作っておき，環境変数 TEMP を C:\tmp に設定してからインストールを行います。

- 環境変数 PATH に “;C:\gs\gs7.07\bin;C:\gs\gs7.07\lib” が追加されていれば，Ghostscript 7.07 を用いて PS を表示したり PDF に変換したりできます。

- 環境変数 GS_LIB については，2003年7月13日以降の Ghostscript 7.07 では一切不要です。むしろ不完全な GS_LIB を設定するとトラブルの元ですので，削除しておいてください。

動作チェックとして
［スタート］ → ［プログラム］ → ［Ghostscript］ → ［Ghostscript 7.07］
で Ghostscript を起動し，その窓に C:\gs\gs7.07\examples\tiger.ps をドラッグ &amp; ドロップして虎の絵が表示できれば OK です。

<!-- （ここは2015年現在，需要がない気がしたのでコメントアウト） -->
<!--  -->
<!-- [[dviout]] との連携をチェックするには，dviout をインストールしたフォルダ -->
<!-- （例えば C:\w32tex\dviout）の GRAPHIC\PS フォルダに上の tiger.ps と， -->
<!-- 同じフォルダにある golfer.ps とをコピーしておきます。 -->
<!-- これでその場所にある pssample.dvi をダブルクリックして絵入りの文書が表示できれば OK です。 -->

#### 参考：Ghostscript による PDF 作成 {#zce2e51d}

Ghostscript 7.07 単独で日本語の PDF を作る場合や，dvipdfmx 処理する EPS ファイルに日本語が含まれている場合など，CJK フォントを扱うためには作業が必要です。
EPS ファイルに日本語が含まれていない（あるいは日本語がアウトライン化されている）ならば，dvipdfmx で処理する本文にいくら日本語が使われていても，以下の作業は特に不要です。

リンクから CMap Resources の5つの zip アーカイブをダウンロードし，展開してでてくる CMap フォルダの中身をすべて C:\gs\gs7.07\Resource\CMap というフォルダ（なければ作成）の中に配置します。
もし C:\gs\gs7.07\Resource 以外のフォルダに展開するなら，C:\gs\gs7.07\lib\gs_res.ps の248&ndash;249行を編集する必要があります。

次は和文フォントを使えるようにします。
ここでは Microsoft Windows の「ＭＳ 明朝」，「ＭＳ ゴシック」を使ってみます。
C:\gs\gs7.07\lib\CIDFnmap の最後に次のように書き込みます。
<em>←Windows Vista 以降のＭＳ フォントでは失敗するっぽい…？</em>

```
/Ryumin-Light      /MS-Mincho        ;
/GothicBBB-Medium  /MS-Gothic        ;
/HeiseiMin-W3      /Ryumin-Light     ;
/HeiseiKakuGo-W5   /GothicBBB-Medium ;

/MS-Mincho         (msmincho.ttc) 1  ;
/MS-Gothic         (msgothic.ttc) 1  ;
```

これで日本語が表示できます。

C:\gs\gs7.07\lib も Path に含めておけば，ps2pdf コマンドで PostScript ファイルを PDF ファイルに変換できます。
ただし『無効なフォント「MS-Mincho」が文書から削除されました。』と出て，すべてゴシック体で表示されてしまいます。
これを防ぐには，MS-Mincho，MS-Gothic を文書から削除して Ryumin-Light，GothicBBB-Medium という名前に置き換えればいいわけです。
これを自動化するスクリプト [replacecjkfonts, cjkps2pdf](http://www.eaflux.com/replacecjkfonts/) を[中丸幸治さん](http://www.eaflux.com/)が作られています。
これを使えば PDF のサイズも小さくなりますし，[Adobe Acrobat Reader](</Adobe Acrobat Reader/>) が適当なフォントできれいに表示してくれます。

2003年9月5日以降の角藤さんが配布なさっている Ghostscript 7.07 なら，replacecjkfonts 無しでうまくいくと思います。
たとえば，[dvipdfmx](/dvipdfmx/) で PDF を作る際に和文フォントを埋め込まない設定は，dvipdfmx.cfg の “D” で始まる行を次のように書き直します（適当に改行してありますのでつなげてください；本当は1行です）：
<em>←この情報は古いが，アーカイブとして残しておく</em>

```
D "gswin32c -q -dSAFER -dNOPAUSE -dBATCH -sPAPERSIZE=a0
-sDEVICE=pdfwrite -dCompatibilityLevel=1.3
-dAutoFilterGrayImages=false -dAutoFilterColorImages=false
-dGrayImageFilter=/FlateEncode -dColorImageFilter=/FlateEncode
-dUseFlateCompression=true -sOutputFile=%o -c '.setpdfwrite <<
/NeverEmbed [/Courier /Courier-Bold /Courier-Oblique /Courier-BoldOblique
/Helvetica /Helvetica-Bold /Helvetica-Oblique /Helvetica-BoldOblique
/Times-Roman /Times-Bold /Times-Italic /Times-BoldItalic
/Symbol /ZapfDingbats
/Ryumin-Light /GothicBBB-Medium /MS-Mincho /MS-Gothic]
>> setdistillerparams' -f %i -c quit"
```

### インストール（ソースから make する方法） {#z76d056e}

#### Linux, macOS {#od0594e8}

以下は Linux や macOS でソースからインストールする方法です。
デフォルトでは /usr/local にインストールされますが，既に Ghostscript 9 系をインストールしている場合はそちらの /usr/local/bin/gs が存在しているはずですので，別の場所にインストールするとよいでしょう。
たとえば /usr/local/teTeX にインストールする場合は以下のようにします：

```
$ tar xvzf ghostscript-7.07.tar.gz
$ cd ghostscript-7.07
$ tar xvzf jpegsrc.v6b.tar.gz
$ mv jpeg-6b jpeg
$ tar xvzf libpng-1.0.2.tar.gz
$ mv libpng-1.0.2 libpng
$ tar xvzf zlib-1.1.3.tar.gz
$ mv zlib-1.1.3 zilb
$ ./configure --prefix=/usr/local/teTeX
```

この段階で[山田泰司さん](https://www.aihara.co.jp/~taiji/gyve/)のパッチを当てておくと，多くの TrueType フォントや OpenType フォントを扱えるようになります。
そして，トップレベルで make，make install します。

```
$ make
$ make install
```

すると，次のものが /usr/local/teTeX/bin/ に入ります。

> bdftops dvipdf eps2eps fixmswrd.pl font2c gs gsbj gsdj gsdj500 gslj
> gslp gsnd lprsetup.sh pdf2dsc pdf2ps pdfopt pf2afm pfbtopfa pj-gs.sh
> printafm ps2ascii ps2epsi ps2pdf ps2pdf12 ps2pdf13 ps2pdf14 ps2pdfwr
> ps2ps pv.sh sysvlp.sh unix-lpr.sh wftopfa

また，/usr/local/teTeX/share/ghostscript/7.07/ の下にたくさんのものが入ります。

<!-- ここにあった奥村先生のプリンタ LP-1900 に関する記述は古そうなので削除。 -->
<!-- 必要なら「関連リンク」に置いてある Wiki 移転前のページを参照。 -->

次に，仕上げです。
lib/gs_res.ps の249&ndash;250行

```
/FontResourceDir (/Resource/Font/) readonly .forcedef  % pssys'params is r-o
/GenericResourceDir (/Resource/) readonly .forcedef    % pssys'params is r-o
```

の /Resource/ （2箇所）を /usr/local/teTeX/share/ghostscript/Resource/ に書き直します（あるいは ln -s /usr/local/teTeX/share/ghostscript/Resource /Resource のようにシンボリックリンクしてもいいでしょう）。

ダウンロードした欧文フォントは /usr/local/teTeX/share/ghostscript/fonts に配置します。

```
$ cd /usr/local/teTeX/share/ghostscript
$ tar xvzf ghostscript-fonts-std-8.11.tar.gz
$ tar xvzf gnu-gs-fonts-other-6.0.tar.gz
```

さらに，CJK フォントを扱うためには作業が必要です。
リンクから CMap Resources の5つの zip アーカイブをダウンロードし，展開してでてくる CMap フォルダの中身をすべて /usr/local/teTeX/share/ghostscript/gs7.07/Resource/CMap というフォルダ（なければ作成）の中に配置します。

### 和文フォントの設定 {#l9833aef}

次は和文フォントを使えるようにします。
あらかじめ[山田泰司さん](https://www.aihara.co.jp/~taiji/gyve/)のページにあるパッチを当てておけば，TrueType フォントや OpenType フォントを扱うことができます（一部，非対応のためうまくいかないフォントもあります）。
GNU Ghostscript 当時は CID フォントが使われていましたが，今となっては少数派でしょう。

#### 和文フォントの設定（TrueType フォント，OpenType フォント） {#bc8f8373}

GNU Ghostscript 7.07 から和文フォント TrueType フォントや OpenType フォントを扱うためには

1. 使いたいフォントを /usr/local/teTeX/share/ghostscript/fonts/ に入れる
1. /usr/local/teTeX/share/ghostscript/7.07/lib/CIDFnmap に設定を書き加える

という作業が必要です[^1]。

狩野さんが開発している TrueType フォント「[さざなみフォント](http://wiki.fdiary.net/font/?sazanami)」を使う場合，[efont プロジェクト日本語トップページ - OSDN](https://ja.osdn.net/projects/efont/) から最新のものをダウンロードし，中にある ttf ファイルを /usr/local/teTeX/share/ghostscript/fonts/ に入れます。
CIDFnmap には以下のように記述すれば，表示も PDF 化も大丈夫のようです：

```
/Ryumin-Light              /Sazanami-Mincho-Regular ;
/GothicBBB-Medium          /Sazanami-Gothic-Regular ;

/Sazanami-Mincho-Regular   (sazanami-mincho.ttf) ;
/Sazanami-Gothic-Regular   (sazanami-gothic.ttf) ;
```

情報処理推進機構 (IPA) の TrueType フォント5書体「[IPA フォント](https://moji.or.jp/ipafont/)」を利用するには，以下のように記述します：

```
/Ryumin-Light              /IPAMincho ;
/GothicBBB-Medium          /IPAGothic ;

/IPAMincho                 (ipam.ttf) ;
/IPAGothic                 (ipag.ttf) ;
```

ほかの例もあげておきます（以下はダイナフォントの平成書体で，商品）：

```
/Ryumin-Light              (DFHsm3.ttc) ;
/GothicBBB-Medium          (DFHsg5.ttc) ;
/FutoMinA101-Bold          (DFHsm5.ttc) ;
/FutoGoB101-Bold           (DFHsg7.ttc) ;
/Jun101-Light              (DFHsr4.ttc) ;
```

フォントによっては TrueType Collection 番号を追加します：

```
/Ryumin-Light              (XXXXXX.ttc) 2 ;
```

なお他 OS 用フォントを Linux から使うことについては，[三田さんがまとめてくださったもの](https://web.archive.org/web/20040811230145/http://www.ee.t.u-tokyo.ac.jp/~mita/FreeBSD/Truetype-copyright.txt)があります。
この中では Microsoft だけ「Windows 以外での使用は認めません」と答えています。
<em>←この情報は古いかもしれません。要確認</em>

#### 和文フォントの設定（CID フォント） {#i37976e7}

GNU Ghostscript 7.07 がリリースされた当時は[東風明朝 CID/OpenType 化キット](https://web.archive.org/web/20101024195456/http://kappa.allnet.ne.jp/Kochi-CID/)がよく使われていましたが，いわゆる[東風問題](http://www2.kumagaku.ac.jp/teacher/herogw/gsfonts.html)で配布中止となっています。 <!-- 「東風明朝 CID/OpenType 化キット」旧リンク → http://khdd.net/Kochi-CID/ -->

和田研フォントを CID 化したサンプルフォントを使うには，以下のように設定します。
<em>←この情報は古いが，失われるべきでないので残す</em>

WadaMin-Regular，WadaGo-Bold をダウンロード ([FTP](ftp://ftp.oreilly.com/pub/examples/nutshell/ujip/adobe/samples/)) し，/usr/local/teTeX/share/ghostscript/Resource/CIDFont/ に入れておきます。
そして，/usr/local/teTeX/share/ghostscript/7.07/lib/CIDFnmap に次のように書き込みます。

```
/Ryumin-Light              /WadaMin-Regular  ;
/GothicBBB-Medium          /WadaGo-Bold      ;
```

```
/HeiseiMin-W3              /Ryumin-Light     ;
/HeiseiKakuGo-W5           /GothicBBB-Medium ;
```

こうしておけば，表示だけでなくコマンド ps2pdf で日本語 PDF が作れます。
ps2pdf は gs で PDF を作るシェルスクリプトです。
同様な仕組みで dvipdfmx もインクルードされた EPS ファイルを PDF 化しますので，ps2pdf が正しく働くことは重要です。

#### 埋め込まれたフォントを外す・フォントを埋め込まない {#pad966f7}

和田研フォントは，表示は何とか我慢できる程度ですが，標準の ps2pdf で PDF 化したものは文字の位置がおかしくなって使い物になりません。

対処法はいくつかあります。
<em>←この情報は古いかもしれません。要確認</em>

- 一つは，できた PDF からフォントを外す中丸さん作の [replacecjkfonts, cjkps2pdf](http://www.eaflux.com/replacecjkfonts/) を使うことです。
    このフィルタを通せば，埋め込まれた和田研フォントが外され，単に Ryumin-Light，GothicBBB-Medium への参照となるので，[Adobe Acrobat Reader](</Adobe Acrobat Reader/>) できれいに表示・印刷できます。
    TrueType フォントや OpenType フォントの場合に PDF 化がうまくいかない場合がありますが，エラーさえ出なければ，PDF 化した後で replacecjkfonts.pl で外せば大丈夫です。

- もう一つは，上の中丸さんのページにも書かれていますが，小川さんの[東風問題](http://www2.kumagaku.ac.jp/teacher/herogw/gsfonts.html)で解説されているように，Ghostscript に鈴木俊哉さんの[このパッチ](https://sourceforge.net/tracker/index.php?func=detail&aid=653140&group_id=1897&atid=301897)を当てる方法です。
    さらに TrueType を指定してもうまくいくパッチを[山田泰司さん](https://www.aihara.co.jp/~taiji/gyve/)が作ってくださいました。
    結局，山田さんのページに従ってすべてのパッチを当て，dvipdfmx.cfg を次のように直せば完璧です（適当に改行してありますのでつなげてください）。

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

    要するに，元の “%o” と “%i” の間に

    ```
    -c '.setpdfwrite << /NeverEmbed [ ... ] >> setdistillerparams' -f
    ```

    を入れればいいわけです。
    2003年9月5日以降の角藤さんの Ghostscript 7.07 配布でもこの設定をすれば和文フォントが埋め込まれません。

### 参考：Ghostscript のバージョンと歴史的経緯 {#y494a6b5}

<!-- 10年以上あとになって，記述したものです。 -->
<!-- 事実誤認があれば修正してください。 -->

Ghostscript にはかつて（2006年頃まで），ライセンス形態により複数の系統が存在していました。
ひとつは Ghostscript を開発・保守している Artifex Software Inc. が定める AFPL (Aladdin Free Public License) により保護される AFPL Ghostscript で，これは商用利用が制限されていました。
もうひとつは GPL (GNU General Public License) により保護される GPL Ghostscript です。
これらは

- 最新版は AFPL Ghostscript としてリリースする
- リリースから一定の期間が経つと，よりアドバンテージのある最新バージョンを AFPL とするかわりに，古いバージョンに若干の修正を施したものを GPL Ghostscript としてリリースする

という慣習でした[^2]。
しかし AFPL Ghostscript は廃れてしまい，2006年の gs8.54 以降は GPL Ghostscript が最新バージョンとして開発されています（[参考](https://web.archive.org/web/20170629021353/http://www.advogato.org/person/raph/diary.html?start=411)）。
ライセンスとバージョン番号の関係は [Ghostscript - pteTeX Wiki](http://tutimura.ath.cx/ptetex/?Ghostscript) で詳しく説明されています。

Ghostscript は長らく日本語に対応しておらず，日本語化・CJK 化がさまざまな有志によって取り組まれてきました。
特に，[gs-cjk プロジェクト](https://web.archive.org/web/20070808010517/http://www.gyve.org/gs-cjk/index.html) （[Japanese](https://web.archive.org/web/20071123213204/http://www.gyve.org/gs-cjk/index-j.html)）は2000年の AFPL Ghostscript 6.50 に対する gs-cjk パッチ公開をはじめとして，GNU Ghostscript への gs-cjk パッチをリリースして日本のユーザに広く使われてきました。
GNU Ghostscript へはその後めでたく gs-cjk パッチが統合され，gs7.07 は幅広いプラットフォームで利用されるようになりました。

しかし，残念ながら当時の最新版である AFPL Ghostscript に gs-cjk の成果物が取り込まれることはなく，GPL Ghostscript 8 以降は CJK への対応が不十分なままとなっています。
GPL Ghostscript 9 系となった現在でも，日本語の縦書き（括弧などが回転され，拗音・句読点などが適切にシフトされる）などを正しく扱うことができません。
このため，GNU Ghostscript 7.07 が「CJK に完全対応した最後の Ghostscript のバージョン」ということになっています。

- [Data storage for gs-cjk project](https://www.aihara.co.jp/~taiji/gyve/)，[Tips on PostScript](https://www.aihara.co.jp/~taiji/tops/index-j.html)（山田さん）
- [情報工学特別講義 II](http://www.hisenkei.net/~tohru/Lectures/2003/SLICS2/)（池口先生の講義サポートページ）
    <!-- 旧 URL は http://www.nls.ics.saitama-u.ac.jp/~tohru/Lectures/2003/SLICS2/ -->
    - [A Guide to gs-cjk Project](http://www.hisenkei.net/~tohru/Lectures/2003/SLICS2/PDFs/guide_to_gs-cjk.distil.pdf) guide_to_gs-cjk.distil.pdf (PDF)
    - [A Guide to gs-cjk Project](http://www.hisenkei.net/~tohru/Lectures/2003/SLICS2/PDFs/guide_to_gs-cjk.slide.distil.pdf) guide_to_gs-cjk.slide.distil.pdf (PDF)

### その他 {#ld9cdeca}

B列（B5判など）の出力については TeX の掲示板の [qa:17129](https://okumuralab.org/~okumura/texfaq/qa/17129.html) 以下に話題が出ています。
Ghostscript のB列は JIS ではなく ISO なのでサイズが微妙に違います。
たとえば JIS の B4 は “/jisb4” と定義されています (gs_statd.ps)。
LIPS のB列出力については [qa:19792](https://okumuralab.org/~okumura/texfaq/qa/19792.html) をご覧ください。
gdevlips-2.4.0 のパッチ等の情報が[竹野さんのページ](http://takeno.iee.niit.ac.jp/~shige/FreeBSD/LBP/lbp.html)にあります。

dvips のサイズ指定については [dvips](/dvips/) を参照してください。

Mac OS X 10.3 では API レベルで PS → PDF 変換ができます。
“pstopdf” というコマンドも用意されています。
しかし日本語はフォントが埋め込まれていないといけないようです。
pstopdf コマンドは macOS 14 で削除されました。
<em>←最新の状況はどうでしょうか</em>

### 関連リンク {#d80c1879}

GNU Ghostscript 7.07 そのものが古いので全体的に古いリンクですが，いまでも一部は参考になるかもしれません。 <!-- gs-cjk に関する記述も10年以上経過してほとんど残っていないようなので， --> <!-- 言及があるサイトは（たとえ内容が gs7.07 でなくても）リンクに加えた -->

- [Windows 用 Ghostscript 7.07 の環境設定](https://chirimenmonster.github.io/2021/08/22/gs7win.html)
- [Overview of Ghostscript](https://web.archive.org/web/20171203015058/https://ghostscript.com/doc/7.07/Readme.htm) ← 公式ドキュメント
- [ghostscript-7.07 のインストール](https://www.uconst.org/blog/archives/38)
- [GNU Ghostscript 7.07 on Linux](https://web.archive.org/web/20040807160606/http://oku.edu.mie-u.ac.jp/~okumura/linux/gs707.html)，[GNU Ghostscript 7.06 on Linux](https://web.archive.org/web/20120418134149/http://oku.edu.mie-u.ac.jp/~okumura/linux/gs706.html)，[GNU Ghostscript 7.05 on Linux](https://web.archive.org/web/20101128090721/http://oku.edu.mie-u.ac.jp/~okumura/linux/gs705.html)（奥村先生：Wiki 移転前のもの）
- [GNU Ghostscript 7.07 Windows 版のインストールと設定](http://www.trueroad.jp/pdf-make/gs-install.html)（細田さん）
- [Ghostscript 日中韓対応パッケージ (バイナリ・ソース)](https://web.archive.org/web/20160316030258/http://www.misojiro.t.u-tokyo.ac.jp/~kuroky/ghostscript/)（黒木さん：Cygwin 向けバイナリとソース）
- [Install GNU GhostScript 7.07 and dvipdfmx \[Wayback Machine\]](http://web.archive.org/web/20090925053250/http://pop-club.hp.infoseek.co.jp/tex/gs_dvipdfm.html)（安宅さん）
- [Ghostscript と Prosper のインストール](http://emoken.net/blog2/item_39.html)（Windows でのインストール事例）
- [GNU Ghostscript 7.06 for Windows の導入](http://www.fan.gr.jp/~ring/doc/gs7.06.html)（新堂さん）
- [Ghostscriptで日本語PDFファイルをつくる](https://web.archive.org/web/20161025040648/http://kony.no-ip.info/~kon/tips/gsjpn.html)
- [JIS X0212 for pTeX](http://www2.kumagaku.ac.jp/teacher/herogw/)（小川弘和さん）：かつて ESP Ghostscript の macOS 版を配布
- [Mac OS X でレーザープリンターを使うスレ（過去ログ）](http://pc5.2ch.net/test/read.cgi/mac/1037063324/)
- [TeX2img で Ghostscript Cannot Be Exexuted ではまる](https://tasuwo.github.io/blog/2016/05/14/tex-to-img/)
- [Ghostscript のバージョンが古すぎる場合への対処](https://github.com/doraTeX/TeX2img/issues/74) (doraTeXさん)

### TeX Forum / Q &amp; A より {#w096d520}

書いてある方法そのものを使うことはないでしょうが，Ghostscript のフォント取り扱いの仕組みが見えるので置いておきます。
CIDFnmap の設定でわからないことが起きた場合に参考になるかもしれません。

- ghostscript(gs)での日本語フォント設定がうまくいかない [qa:32612](https://okumuralab.org/~okumura/texfaq/qa/32612.html), [qa:32613](https://okumuralab.org/~okumura/texfaq/qa/32613.html), [qa:32614](https://okumuralab.org/~okumura/texfaq/qa/32614.html), [qa:32615](https://okumuralab.org/~okumura/texfaq/qa/32615.html)
- CIDfontを埋め込もうとするとType3になってしまう [qa:11562](https://okumuralab.org/~okumura/texfaq/qa/11562.html), [qa:11563](https://okumuralab.org/~okumura/texfaq/qa/11563.html), [qa:11568](https://okumuralab.org/~okumura/texfaq/qa/11568.html), [qa:11572](https://okumuralab.org/~okumura/texfaq/qa/11572.html), [qa:11577](https://okumuralab.org/~okumura/texfaq/qa/11577.html)

### ChatGPT に「かつて Ghostscript には GNU Ghostscript 7.07 (2003-05-17) というバージョンが存在し、日本の gs-cjk プロジェクトの寄与を含み、日本語の縦書き PostScript ファイルを正しく扱うことができるバージョンが存在しましたが、その後の Ghostscript のバージョンには取り込まれませんでした。なぜでしょうか。」と質問した結果 {#xbf0aabe}

質問：

かつて Ghostscript には GNU Ghostscript 7.07 (2003-05-17) というバージョンが存在し、日本の gs-cjk プロジェクトの寄与を含み、日本語の縦書き PostScript ファイルを正しく扱うことができるバージョンが存在しましたが、その後の Ghostscript のバージョンには取り込まれませんでした。なぜでしょうか。

回答：

はい。調べてみると、これは単純に「gs-cjk のコードが忘れられた」というより、Ghostscript 7 系と 8 系の開発・ライセンス上の分岐、および CJK 実装のメンテナンス方針の変化が重なった結果、と見るのが適切です。

まず重要な点
ご指摘の認識はほぼ正しいです。Ghostscript 7.07 には gs-cjk プロジェクトの成果がかなり深く取り込まれていました。

Ghostscript 自身の 7.x の変更履歴には、たとえば

- OCF の FMapType 4/5 の処理
- CIDFontType 2 の metrics 計算
- cshow
- 縦書き時の glyph cache
- 縦書き時の glyphshow

などについて、gs-cjk のメンバーによる修正が列挙されています。つまり、単に「日本語フォントを登録できる」という程度ではなく、CID フォントを Ghostscript の内部で扱う部分そのものにパッチが入っていたわけです。

また、7.07 の CJK ドキュメントには、横書き・縦書き双方の CJK サンプル gscjk\_\* が用意されていたことも確認できます。

なぜ 8 系にそのまま移植されなかったのか
大きな転機は Ghostscript 7 → 8 の開発ラインの変更です。

gs-cjk の当時の資料には、かなり明確に、

> 2003/05 GNU gs7.07<br>
> 2003/06 AFPL gs8 (cjk は統合されていない)<br>

という開発史が記録されています。

つまり 7.07 の直後、Ghostscript の開発主体が扱っていた AFPL Ghostscript 8.x の新しい系列には、7.x に統合されていた gs-cjk のパッチセットがそのまま継承されなかったのです。

これはかなり重要です。

7.07 は「gs-cjk が完成して、それが以後の Ghostscript の標準実装になった」という状態ではありませんでした。むしろ、

gs-cjk → GNU Ghostscript 6.53 → 7.05 → 7.06 → 7.07

という形で統合が進んだところで、Ghostscript 8 系への移行時にその流れが途切れています。

<strong>しかも「縦書きだけ」の問題ではなかった</strong><br>

ここが少しややこしいところです。

gs-cjk が追加していたのは、単に V の CMap を解釈して文字を90度回転させるような小さな機能ではありません。

CJK の PostScript は、

文字コード → CMap → CID → CIDFont → glyph

という仕組みになっており、さらに縦書きでは CMap による縦書き用のマッピングと、glyph の位置決めなどが絡みます。

7.07 のドキュメントには CJK TrueType を CIDFontType 2 として扱う機能まで説明されており、gs-cjk の修正はこの CID-font machinery のかなり深い部分に入っています。

したがって 8.x の内部構造が変わった際、

> 7.07 のパッチをそのまま当てればよい

というものではありませんでした。

実際、その後の Ghostscript 8.x では CJK 関連について別系統の修正が続いています。

たとえば Red Hat の 8.15 系の履歴を見ると、2006 年になってから CJKV patch が追加されたり、いったん revert されたり、再度適用されたりしています。最終的には 8.15.3 付近で cjkv パッチが不要になっています。

これは、

<strong>「7.07 の gs-cjk 実装を捨てて、CJK サポートを完全に放棄した」</strong>

という単純な話でもありません。

むしろ、

7.x の gs-cjk 実装 → 8.x の新しいフォント/CID 処理 → CJKV 関連の個別修正 → 後の Ghostscript で再整理

という流れだった、と考えるほうが実態に近いです。

<strong>そして非常に重要なのがライセンス／開発体制の問題</strong><br>

Ghostscript はこの時期にライセンス体系も大きく変わっています。

7.07 は GNU Ghostscript で、7.07 の CJK 関係のソースには GPL の著作権表示があります。たとえば CJKTTCID.htm には gs-cjk の著作権表示があり、GNU Ghostscript の GPL の下に置かれています。

一方、8.x の初期系列は AFPL Ghostscript としてリリースされています。8.14 のリリースノートも明確に「stable 8.1x series of AFPL Ghostscript」としています。

したがって、

- GNU Ghostscript 7.x
- AFPL Ghostscript 8.x

という開発・配布モデルそのものの切り替えが、7.07 のコードをそのまま継承するうえでの一つの障壁になっています。

ただし、ここは注意が必要で、「AFPL になったから gs-cjk を取り込めなかった」と断定するのは資料からは強すぎます。実際には gs-cjk の成果物の一部は後の Ghostscript にも残っていますし、後年の Ghostscript の著作権一覧にも 2001, gs-cjk project が残っています。

ですから、ライセンスだけを理由とするより、

Ghostscript 8 系への大規模な内部変更・開発ラインの変更の際に、gs-cjk の 7.x 向け実装をそのまま upstream の標準実装として維持する体制がなくなり、CJK 部分が別の形で再実装・修正されていった

と説明するのが安全です。

<strong>「だから 7.07 だけが妙に日本語に強い」という現象が生じた</strong><br>

これが現在でも 7.07 が日本語 TeX 環境などで特別扱いされる理由です。

実際、pTeX 関係の資料でも、Cygwin の通常の Ghostscript は特に日本語の縦書きが扱えなかったため、gs-cjk を使ってカスタマイズした Ghostscript を用意していたと記録されています。

さらに FreeBSD の ports の後年の記録には、かなり露骨に、

> Ghostscript 7.x is incompatible with 8.x and 9.x in terms of CJK character support and they are still in demand.

という説明があります。つまり 2013 年になっても、<strong>7.x と 8.x/9.x の CJK サポートには互換性の問題があり、7.07 を必要とする利用者が残っていた</strong>わけです。

これはまさにご質問の現象を裏付けています。

<strong>結論</strong><br>

したがって、「なぜ 7.07 の gs-cjk がそのまま後継版に取り込まれなかったのか？」への答えは、

1. gs-cjk は 6.53～7.07 の GNU Ghostscript 系列には実際に積極的に統合された。
1. 7.07 の直後、Ghostscript は AFPL Ghostscript 8.x という別の開発系列へ移行した。
1. その際、Ghostscript の内部、特に CID/CMap/フォント処理も変化し、7.07 の gs-cjk パッチをそのまま forward-port するのが容易ではなかった。
1. その後 CJK/CJKV 対応は別の修正として断続的に再構築され、8.15 前後では CJKV パッチなどが存在した。
1. その結果、7.07 の「gs-cjk が統合された状態」と、後の Ghostscript の CJK 実装は同じものではなくなった。
1. 特に日本の TeX 界隈が必要としていた 古い CMap/CIDFont + 縦書き PostScript の組み合わせについては、7.07 の挙動が後のバージョンより都合がよく、結果として 7.07 が長く使われることになった。

ということになります。

なお、資料をさらに掘ると、「gs-cjk 側がなぜ Ghostscript 8 に追従しなかったのか」について、当時のメーリングリストや開発者（鈴木俊哉氏・山田泰司氏ら）の発言まで追跡できます。ここまで調べると、「技術的理由だったのか、Artifex/gs-cjk 間の開発方針の問題だったのか、ライセンスだったのか」をさらに切り分けられます。

### ChatGPT に「gs-cjk 側がなぜ Ghostscript 8 に追従しなかったのか。技術的理由だったのか、Artifex/gs-cjk 間の開発方針の問題だったのか、ライセンスだったのか。」と質問した結果 {#k2eff4eb}

質問：

gs-cjk 側がなぜ Ghostscript 8 に追従しなかったのか。技術的理由だったのか、Artifex/gs-cjk 間の開発方針の問題だったのか、ライセンスだったのか。

回答：

調べ直すと、前回の回答は少し修正したほうがよいです。「ライセンスが原因で gs-cjk が Ghostscript 8 に入らなかった」という証拠は見つかりませんでした。むしろ資料から見えてくるのは、主因が開発系列の分岐と技術的な追従の断絶で、ライセンスはその背景を複雑にした要因という構図です。

<strong>1. gs-cjk は、もともと AFPL 系にも追従するつもりだった</strong><br>

ここがかなり重要です。

gs-cjk の開発者である山田泰司氏の資料には、プロジェクトの目的が、

> 「本家 gs への統合を念頭においた開発」

だったと明記されています。しかも gs-cjk の初期史を見ると、

- AFPL Ghostscript 6 への CJK パッチ
- GNU Ghostscript 6.50/6.51 へのパッチ
- GNU Ghostscript 6.53 への統合
- GNU Ghostscript 7.05 への統合

という流れです。つまり、gs-cjk は「AFPL版には絶対に協力しない」というプロジェクトではありませんでした。

実際、7.05 の公式リリース告知も、6.5x 系で開発された gs-cjk の成果を GNU 7.05 に移植したことを明記しています。

したがって、

> 「AFPL だから gs-cjk が拒否した」

という説明は、かなり考えにくいです。

<strong>2. では何が起きたのか</strong><br>

時系列を見ると、かなりはっきりします。

| <strong>時期</strong> | <strong>Ghostscript</strong> | <strong>CJK</strong> |
|---|---|---|
| 2000–01 | AFPL GS 6.x | gs-cjk がパッチ開発 |
| 2001 | GNU GS 6.50/6.51 | gs-cjk パッチ |
| 2002-02 | GNU GS 6.53 | gs-cjk 統合 |
| 2002-04 | GNU GS 7.05 | gs-cjk 統合 |
| 2003-04 | GNU GS 7.06 | 継続 |
| 2003-05-17 | GNU GS 7.07 | 7.x 最終世代 |
| 2003-06 | AFPL GS 8.x | gs-cjk は統合されず |

この最後の切り替わりは、gs-cjk 自身の資料にも明記されています。

一方、Ghostscript 8.00 は 2002 年11月21日にすでに AFPL Ghostscript の新しい開発系列として始まっていました。8.00 の公式履歴を見ると、7.x の CJK 統合とは別の開発ラインになっていることが分かります。

つまり「7.07 の次が普通に 8.00」というより、実際の開発史としては、

AFPL 8.x の新しい trunk

と

GNU 7.x の安定/free branch

が並行していた、と理解したほうが正確です。

<strong>3. 技術的な理由はかなり大きかったと思われる</strong><br>

ここには直接的な「8.x に移植しなかった理由」という開発者発言をまだ発見できていないので、以下はソース履歴からかなり強く推測できることとして区別します。

7.05 への gs-cjk 統合を見ると、変更は非常に大規模です。

たとえば、

- gs_cmap.ps
- zfcid0.c
- zchar.c
- zcfont.c
- zchar42.c
- zchar1.c
- zcharout.c
- gstext.c
- gstype42.c
- gxchar.c
- gs_ttf.ps
- gsfcmap.c
- gs_cidfn.ps
- pdf_font.ps

など、Ghostscript のフォント処理の広範囲に変更が入っています。

特にご質問の縦書きについては、

> CIDFontType 2 の縦書き

> glyph cache の縦書き処理

> glyphshow の縦書き処理

など、インタープリタのかなり低い層まで修正されています。

これは「CMap を追加すれば済む」ものではありません。

<strong>4. そして Ghostscript 8.x はフォント処理そのものを発展させていた</strong><br>

8.00 の変更履歴を見ると、特に pdfwrite のフォント処理が大幅に改善されています。

7.x で gs-cjk が手を入れた部分と、8.x で Ghostscript 本体が発展させた部分が重なっていたため、

7.07 の gs-cjk patch を 8.x に機械的に forward-port するのが難しかった

と考えるのが自然です。

しかも実際、8.x 系でも CJK 処理は消滅したわけではありません。

後に Red Hat/CUPS 側で、

- CJKV patch を適用
- revert
- 再適用
- 最終的に upstream の変更で patch 不要になる

という経緯をたどっています。

これはかなり重要な証拠です。

つまり、

「Artifex が CJK を捨てた」

というより、

「7.07 の gs-cjk 実装をそのまま維持するのではなく、8.x の新しいコードベースの中で CJK 対応を別途進める形になった」

と見るほうが資料に合っています。

<strong>5. 実は 8.15 世代にも「縦書き日本語」の修正がある</strong><br>

さらに興味深い資料があります。

CUPS の Ghostscript 8.15 系の変更履歴には、

> <strong>fix for vertical japanese text</strong>

という修正が明記されています。しかも Werner Fink のパッチとして入っています。

これは非常に示唆的です。

もし gs-cjk の縦書き実装が完全に 8.x に移植されていたなら、こういう別系統の「vertical japanese text」の修正が出てくる必要性は小さくなります。

逆に、

7.07 の gs-cjk が直していた問題を、8.x の別のコードベースに対して別の人々が再び直していた

という歴史とよく整合します。

<strong>6. ライセンスについては、むしろ「直接原因ではない」証拠がある</strong><br>

ここは前回より強く訂正できます。

7.07 の gs-cjk 関連ファイルには、

- gs-cjk project
- Taiji Yamada
- artofcode LLC

の著作権表示があり、GNU GPL の Ghostscript に含まれています。

ところが後年の Ghostscript の著作権情報にも、2001 gs-cjk project が明示的に残っています。

つまり、

> gs-cjk のコードはライセンス上 Ghostscript の後続版に絶対に使えなかった

とは言えません。

むしろ後の GPL/AGPL Ghostscript に gs-cjk の著作権表示が残っていることは、ライセンス面で完全に断絶したわけではないことを示します。

<strong>7. ただし「GPL vs AFPL」の問題は無視できない</strong><br>

ここは少し微妙です。

Ghostscript 8.x の初期は AFPL でした。たとえば 8.14 は公式に AFPL Ghostscript とされています。

そして Debian の資料を見ると、8.x 時代には実際に

- gs-afpl
- gs-gpl
- gs-esp

という複数の Ghostscript 系列が存在していました。

特に Debian の 8.01 に関する記録には、<strong>GPL 版 8.01 には gs-cjk support がなく、それが利用者にとって重要だった</strong>という非常に直接的な記述があります。

これは面白いです。

つまり 2004 年頃には、

<strong>AFPL/GPL のライセンス分岐が、実際の CJK 機能の分岐として利用者に見えていた</strong>

わけです。

ただしこれは、

> 「Artifex が gs-cjk をライセンス上拒否した」

ことの証拠ではありません。

むしろ Ghostscript 自体が AFPL の先端開発版と GPL の安定版に分かれていたため、機能の同期が遅れたという説明のほうがよく合います。

8. そして 2006 年に、この構造自体が終わる
非常に重要な転換点が 2006 年です。

Ghostscript 開発者は 8.54 から、

AFPL の先端開発系列と GPL 系列を統合する

ことを発表しました。

OpenPrinting の歴史資料によれば、その理由の一つは、開発ツリーで修正されたバグが Linux ディストリビューションのユーザーに届くまでの時間を短くすることでした。

つまり、

7.x → 8.x の時代に存在していた「AFPL の最新開発版 vs GPL の安定/free版」という構造そのものが、2006 年に解消された

のです。

そしてその後の GPL Ghostscript には gs-cjk project の著作権表示が残り、さらに CJKV 処理も本体側で整備されていきます。

<strong>9. したがって、3つを分けるとこうなる</strong><br>

私なら現在確認できる資料から、次のように整理します。

<strong>技術的理由</strong><br>

<strong>かなり大きい。</strong>

7.07 の gs-cjk は非常に深いフォント処理部分を変更しており、8.x のコードベースに単純移植できる規模ではありませんでした。

8.x でも CJK/縦書きの問題が個別に修正されていることから、実際に別系統の CJK 実装・修正が進められたことが確認できます。

<strong>Artifex / gs-cjk の開発方針</strong><br>

かなり重要だった可能性が高いが、直接的な「対立」を示す資料はまだ見つかっていない。

gs-cjk はそもそも「本家 Ghostscript への統合」を目標にしており、AFPL 6.x にもパッチを提供していました。

したがって「Artifex と gs-cjk が決裂した」というストーリーを裏付ける証拠は、今回確認した資料にはありません。

<strong>ライセンス</strong><br>

<strong>直接原因だったとは考えにくい。</strong>

AFPL/GPL の二系列化によって機能同期が難しくなった、という意味では間接的には非常に重要です。

しかし gs-cjk の著作権表示は後の Ghostscript にも残っているので、「ライセンス上 gs-cjk を取り込めなかった」という説明には証拠がありません。

<strong>私が一番可能性が高いと考える歴史像</strong><br>

かなり簡略化すると、

gs-cjk が CJK の難しい部分を実装する<br>
↓<br>
GNU Ghostscript 6.53 / 7.05 に大量に統合される<br>
↓<br>
7.07 が一つの完成度の高いスナップショットになる<br>
↓<br>
Ghostscript の開発は AFPL 8.x と GNU 7.x に分岐<br>
↓<br>
8.x は別の内部改変を進める<br>
↓<br>
gs-cjk 7.x のコードをそのまま forward-port する開発が続かなかった<br>
↓<br>
8.x の CJK 対応は別々のパッチ・修正として進む<br>
↓<br>
8.15 前後でも縦書き日本語/CJKV の修正が残る<br>
↓<br>
2006 年、AFPL/GPL の開発系列を統合<br>
↓<br>
その後は CJK 対応も Ghostscript 本体の開発に吸収されていく<br>

というものです。

そして、これは\*\*「7.07 の CJK 実装が技術的に優れていたから後継版が意図的に捨てられた」\*\*という話とも少し違います。むしろ 7.07 の gs-cjk は、当時の Ghostscript の開発ラインに非常に深く食い込んだ一種の大規模な CJK 拡張で、その後 Ghostscript 自体の内部構造と開発モデルが変わったため、同じ形では継承されなかった、というのが現時点では最も資料に忠実です。

<strong>さらに掘るなら、かなり面白いところがあります</strong><br>

次に調べる価値があるのは、2003～2006 年の gs-devel / gs-cjk のメールアーカイブで、「8.x への port」「CJK」「Suzuki Toshiya」「Taiji Yamada」「Raph Levien」などを追うことです。

そこまで掘れば、「単に誰も port しなかった」のか、それとも \*\*「8.x の新しいフォントモデルに対して gs-cjk 側が port を試みたが、Ghostscript 本体側との設計上の折り合いがつかなかった」\*\*のかを、かなり直接的に確認できる可能性があります。

[^1]: 上記の fonts ディレクトリには，実ファイルを入れる代わりにシンボリックリンクを置くことでも代用可能です。また，fonts ディレクトリ以外に存在するフォントの絶対パスを指定することもできますが，パスに非 ASCII 文字やスペースを含む場合はうまくいきません。
[^2]: ほかにも ESP Ghostscript という系統が，GPL Ghostscript に基づいて Easy Software Products によって配布されていました。これは ESP の Common Unix Printing System との互換性を改良するためにいくつかの修正を加えたもので，2007年3月14日にリリースされたバージョン 8.15.4 を最後に GPL Ghostscript に統合されています。
