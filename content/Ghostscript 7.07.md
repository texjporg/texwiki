---
title: "Ghostscript 7.07"
url: "/Ghostscript 7.07/"
date: 2004-09-19T17:06:06Z
pukiwiki: "Ghostscript 7.07"
---

# Ghostscript 7.07

## GNU Ghostscript 7.07 {#u1488af6}

<strong> <em>この項目は編集途中です</em> </strong>：削除されていた項目をとりあえず復活させることを急ぎました。

全面的に2015年の環境で可能かどうか検証作業中です。
動く保証はまったくありませんので，<strong>よくわからない方はこのページは無視してください</strong>。 (2015-10-16)

[Ghostscript](/Ghostscript/) には最新の GPL Ghostscript（ライセンスは AGPL）もありますが，日本語の縦書き等に難点が残っています。
GNU Ghostscript 7.07 は，日本の gs-cjk プロジェクトの寄与を含み，日本語の縦書き PostScript ファイルを正しく扱うことができました。
ここではその Ghostscript 7.07 について説明します。

なお，Ghostscript 7.07 には脆弱性が存在しますので，縦書きしない場合は最新の Ghostscript を利用することをお勧めします。

<!-- 日本語 PS を正しく表示・印刷できる最後の Ghostscript である -->
<!-- 日本の開発者がコミットした gs-cjk プロジェクトの記録が消滅するのを防ぐ -->
<!-- という意図から復活させました。いまだ一定の需要があるはず。 -->
<!-- 古すぎると判断した記述をコメントアウトあるいは削除しています。 -->
<!-- いまだ有効であれば表に出してください。 - - 2015/10/14 アセトアミノフェン -->

<!-- なお，個人的な作業メモが -->
<!-- http://d.hatena.ne.jp/acetaminophen/searchdiary?word=ghostscript+7.07 -->
<!-- に大量にあります。 -->

***

***

<!-- ここは古い記述の残りもの…残すか消すか？ -->
<!-- Mac OS X (+ X11) でもまったく同様にインストールできます -->
<!-- （Mac OS X 10.4 では ./configure - -without-gimp-print -->
<!-- で Makefile の XLIBS=Xt Xext X11 は XLIBS=Xt SM ICE Xext X11 に直しました）。 -->
<!-- [[ESP Ghostscript:http://www.cups.org/ghostscript.php]] はまだ試していません。 -->

### ダウンロード {#k0bb1098}

Ghostscript で利用する欧文フォントは，Sourceforge ([gs-fonts](http://sourceforge.net/projects/gs-fonts/files/gs-fonts/)) やそのミラーから入手できます。
CJK フォントを扱うためには CMap Resource も必要で，これは [Adobe Type Tools - GitHub](https://github.com/adobe-type-tools/cmap-resources) からダウンロードできます。

ソースから make する場合は，これに加えて GNU Ghostscript 7.07 本体と依存ライブラリのソースも必要です。
本体のソースは Sourceforge ([gnu-gs](http://sourceforge.net/projects/ghostscript/files/gnu-gs/7.07/)) やそのミラーから，依存ライブラリのソースは，[ftp.gnu.org](https://ftp.gnu.org/gnu/ghostscript/) やそのミラーから入手できます。

- GNU Ghostscript 7.07 のソース
    - ghostscript-7.07.tar.bz2 または ghostscript-7.07.tar.gz
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
    - cmapresources_cns1-6.zip
    - cmapresources_gb1-5.zip
    - cmapresources_japan1-6.zip
    - cmapresources_korea1-2.zip

<!-- 次のものは元々 gs-cjk に置かれていたものですが，ドメインが無くなっています。 -->
<!-- Unix 系 OS の場合は[[ここ:http://oku.edu.mie-u.ac.jp/mirror/gs-cjk/]]から入手できます。 -->
<!-- -adobe-cmaps-200204.tar.gz -->
<!-- ←[[otf パッケージ>OTF]]の使用などで文字欠けが発生する場合は adobe-cmaps-200406.tar.gz -->
<!-- -acro5-cmaps-2001.tar.gz -->

バージョンによってはライセンスが異なりますので，注意深くダウンロードしてください。

### インストール（バイナリを入手する方法） {#r6c67752}

#### Windows {#y7d058ad}

角藤さんが配布している [gs707w32full.zip](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/gs/gs707w32full.zip) を展開し，中にある “setupgs.exe” を実行します。
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

リンクから CMap Resources の5つの zip アーカイブをダウンロードし，解凍してでてくる CMap フォルダの中身をすべて C:\gs\gs7.07\Resource\CMap というフォルダ（なければ作成）の中に配置します。
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
これを使えば PDF のサイズも小さくなりますし，[Adobe Acrobat Reader DC](</Adobe Acrobat Reader DC/>) が適当なフォントできれいに表示してくれます。

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

#### Linux, OS X {#od0594e8}

以下は Linux や OS X でソースからインストールする方法です。
デフォルトでは /usr/local にインストールされますが，既に Ghostscript 9.xx 系や 8.xx 系をインストールしている場合はそちらの /usr/local/bin/gs が存在しているはずですので，別の場所にインストールするとよいでしょう。
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

この段階で[山田泰司さん](http://www.aihara.co.jp/~taiji/gyve/)のパッチを当てておくと，多くの TrueType フォントや OpenType フォントを扱えるようになります。
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
リンクから CMap Resources の5つの zip アーカイブをダウンロードし，解凍してでてくる CMap フォルダの中身をすべて /usr/local/teTeX/share/ghostscript/gs7.07/Resource/CMap というフォルダ（なければ作成）の中に配置します。

### 和文フォントの設定 {#l9833aef}

次は和文フォントを使えるようにします。
あらかじめ[山田泰司さん](http://www.aihara.co.jp/~taiji/gyve/)のページにあるパッチを当てておけば，TrueType フォントや OpenType フォントを扱うことができます（一部，非対応のためうまくいかないフォントもあります）。
GNU Ghostscript 当時は CID フォントが使われていましたが，今となっては少数派でしょう。

#### 和文フォントの設定（TrueType フォント，OpenType フォント） {#bc8f8373}

GNU Ghostscript 7.07 から和文フォント TrueType フォントや OpenType フォントを扱うためには

1. 使いたいフォントを /usr/local/teTeX/share/ghostscript/fonts/ に入れる
1. /usr/local/teTeX/share/ghostscript/7.07/lib/CIDFnmap に設定を書き加える

という作業が必要です[^1]。

狩野さんが開発している TrueType フォント「[さざなみフォント](http://wiki.fdiary.net/font/?sazanami)」を使う場合，[osdn.jp](https://osdn.jp/projects/efont/) から最新のものをダウンロードし，中にある ttf ファイルを /usr/local/teTeX/share/ghostscript/fonts/ に入れます。
CIDFnmap には以下のように記述すれば，表示も PDF 化も大丈夫のようです：

```
/Ryumin-Light              /Sazanami-Mincho-Regular ;
/GothicBBB-Medium          /Sazanami-Gothic-Regular ;

/Sazanami-Mincho-Regular   (sazanami-mincho.ttf) ;
/Sazanami-Gothic-Regular   (sazanami-gothic.ttf) ;
```

情報処理推進機構 (IPA) の TrueType フォント5書体「[IPA フォント](http://ipafont.ipa.go.jp)」を利用するには，以下のように記述します：

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

なお他 OS 用フォントを Linux から使うことについては，[三田さんがまとめてくださったもの](http://www.ee.t.u-tokyo.ac.jp/~mita/FreeBSD/Truetype-copyright.txt)があります。
この中では Microsoft だけ「Windows 以外での使用は認めません」と答えています。
<em>←この情報は古いかもしれません。要確認</em>

#### 和文フォントの設定（CID フォント） {#i37976e7}

GNU Ghostscript 7.07 がリリースされた当時は[東風明朝 CID/OpenType 化キット](http://khdd.net/Kochi-CID/)がよく使われていましたが，いわゆる[東風問題](http://www2.kumagaku.ac.jp/teacher/herogw/gsfonts.html)で配布中止となっています。

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
    このフィルタを通せば，埋め込まれた和田研フォントが外され，単に Ryumin-Light，GothicBBB-Medium への参照となるので，[Adobe Acrobat Reader DC](</Adobe Acrobat Reader DC/>) できれいに表示・印刷できます。
    TrueType フォントや OpenType フォントの場合に PDF 化がうまくいかない場合がありますが，エラーさえ出なければ，PDF 化した後で replacecjkfonts.pl で外せば大丈夫です。

- もう一つは，上の中丸さんのページにも書かれていますが，小川さんの[東風問題](http://www2.kumagaku.ac.jp/teacher/herogw/gsfonts.html)で解説されているように，Ghostscript に鈴木俊哉さんの[このパッチ](http://sourceforge.net/tracker/index.php?func=detail&aid=653140&group_id=1897&atid=301897)を当てる方法です。
    さらに TrueType を指定してもうまくいくパッチを[山田泰司さん](http://www.aihara.co.jp/~taiji/gyve/)が作ってくださいました。
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
しかし AFPL Ghostscript は廃れてしまい，2006年の gs8.54 以降は GPL Ghostscript が最新バージョンとして開発されています（[参考](http://www.advogato.org/person/raph/diary.html?start=411)）。
ライセンスとバージョン番号の関係は [Ghostscript - pteTeX Wiki](http://tutimura.ath.cx/ptetex/?Ghostscript) で詳しく説明されています。

Ghostscript は長らく日本語に対応しておらず，日本語化・CJK 化がさまざまな有志によって取り組まれてきました。
特に，[gs-cjk プロジェクト](https://web.archive.org/web/20030203233101/http://www.gyve.org/gs-cjk/index.html)は2000年の AFPL Ghostscript 6.50 に対する gs-cjk パッチ公開をはじめとして，GNU Ghostscript への gs-cjk パッチをリリースして日本のユーザに広く使われてきました。
GNU Ghostscript へはその後めでたく gs-cjk パッチが統合され，gs7.07 は幅広いプラットフォームで利用されるようになりました。

しかし，残念ながら当時の最新版である AFPL Ghostscript に gs-cjk の成果物が取り込まれることはなく，GPL Ghostscript 8 以降は CJK への対応が不十分なままとなっています。
GPL Ghostscript 9 系となった現在でも，日本語の縦書き（括弧などが回転され，拗音・句読点などが適切にシフトされる）などを正しく扱うことができません。
このため，GNU Ghostscript 7.07 が「CJK に完全対応した最後の Ghostscript のバージョン」ということになっています。

- [Data storage for gs-cjk project](http://www.aihara.co.jp/~taiji/gyve/)（山田さん）
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
<em>←最新の状況はどうでしょうか</em>

### 関連リンク {#d80c1879}

GNU Ghostscript 7.07 そのものが古いので全体的に古いリンクですが，いまでも一部は参考になるかもしれません。

- [Overview of Ghostscript](http://ghostscript.com/doc/7.07/Readme.htm) ← 公式ドキュメント
- [GNU Ghostscript 7.05 on Linux](http://oku.edu.mie-u.ac.jp/~okumura/linux/gs705.html)，[GNU Ghostscript 7.06 on Linux](http://oku.edu.mie-u.ac.jp/~okumura/linux/gs706.html)（奥村先生：Wiki 移転前のもの）
- [GNU Ghostscript 7.07 Windows 版のインストールと設定](http://www.trueroad.jp/pdf-make/gs-install.html)（細田さん）
- [Ghostscript 日中韓対応パッケージ (バイナリ・ソース)](http://www.misojiro.t.u-tokyo.ac.jp/~kuroky/ghostscript/)（黒木さん：Cygwin 向けバイナリとソース）
- [Install GNU GhostScript 7.07 and dvipdfmx \[Intetnet Archive\]](http://web.archive.org/web/20090130073812/http://pop-club.hp.infoseek.co.jp/tex/gs_dvipdfm.html)（安宅さん）
- [GNU Ghostscript 7.06 for Windows の導入](http://www.fan.gr.jp/~ring/doc/gs7.06.html)（新堂さん）
- [JIS X0212 for pTeX](http://www2.kumagaku.ac.jp/teacher/herogw/)（小川弘和さん）：かつて ESP Ghostscript の OS X 版を配布
- [Mac OS X でレーザープリンターを使うスレ（過去ログ）](http://mimizun.com/log/2ch/mac/1037063324)

[^1]: 上記の fonts ディレクトリには，実ファイルを入れる代わりにシンボリックリンクを置くことでも代用可能です。また，fonts ディレクトリ以外に存在するフォントの絶対パスを指定することもできますが，パスに非 ASCII 文字やスペースを含む場合はうまくいきません。
[^2]: ほかにも ESP Ghostscript という系統が，GPL Ghostscript に基づいて Easy Software Products によって配布されていました。これは ESP の Common Unix Printing System との互換性を改良するためにいくつかの修正を加えたもので，2007年3月14日にリリースされたバージョン 8.15.4 を最後に GPL Ghostscript に統合されています。
