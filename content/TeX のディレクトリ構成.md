---
title: "TeX のディレクトリ構成"
url: "/TeX のディレクトリ構成/"
date: 2015-02-14T11:24:48Z
pukiwiki: "TeX のディレクトリ構成"
---

# TeX のディレクトリ構成

## TeX のディレクトリ構成 (TDS) {#tds}

<!-- こういう内容，美文書には（付録に）記載されていますが，Web ではほとんど解説されていないので -->
<!-- 有用そうです． -->

TDS (TeX Directory Structure) とは，TeX の標準的なディレクトリ構成です。
[TeX Live](</TeX Live/>) や [W32TeX](/W32TeX/) はこの TDS に従っています。

- [http://www.tug.org/texinfohtml/tds.html](http://www.tug.org/texinfohtml/tds.html)
- [http://www.ctan.org/tex-archive/tds](http://www.ctan.org/tex-archive/tds)

実際にどのように TeX に関するファイルやディレクトリを配置したらよいのか考えます。
[パッケージ](</パッケージ/>)や[フォント](</フォント/>)を追加する際，あるいは使用しているパッケージの置き場を探す際に参考になるはずです。

\[TODO\] TDS のバージョンによる違いはどの程度でしょうか？

***

***

### TEXMF ツリー・多重 TEXMF ツリーとは {#texmf}

現在の TeX ディストリビューションのほとんどは TEXMF ツリー[^1]を採用しています。
TEXMF ツリーには，パッケージやクラスファイル・フォント・スクリプト・説明文書などが規則に従って分類され，収録されています。

TeX Live や W32TeX では複数の TEXMF ツリーを使い分ける「多重 TEXMF ツリー」が採用されています。
これにより，ディストリビューションが用意したファイルとユーザが追加したローカルなファイルなどを明確に区別できます。

TeX Live では例えば（以下の YYYY には年が入ります）

- C:\texlive\YYYY\texmf-dist や C:\texlive\texmf-local（Windows での典型的な例）
- /usr/local/texlive/YYYY/texmf-dist や /usr/local/texlive/texmf-local（Unix 系での典型的な例）

W32TeX では

- C:\w32tex\share\texmf-dist や C:\w32tex\share\texmf-local（典型的な例）

などのディレクトリがそれにあたります。

<!--  -->
<!-- ほかに，以下のような例があるようです。 -->
<!-- - C:\w32tex\share\texmf（2013年4月7日以前の W32TeX の典型的な例） -->
<!-- - /usr/local/share/texlive/YYYY/texmf-dist -->
<!-- - /opt/local/share/texlive/YYYY/texmf-dist -->
<!-- - /usr/share/texmf -->
<!-- - /opt/share/texmf -->
<!-- - ~/Library/texmf -->
<!--  -->

以下では，これらのディレクトリを一般に <strong>texmf</strong> とします。

### TEXMF ツリーの中身 {#texmfdir}

<strong>texmf</strong> ルートディレクトリの下位には，主に次のようなディレクトリがあります：

- tex：TeX の動作に必要なテキストファイルが入ります。
- fonts：[フォント](</フォント/>)に関するファイルが入ります。
- metafont：[METAFONT](/METAFONT/) の動作に必要なテキストファイルが入ります。
- metapost：[MetaPost](/MetaPost/) の動作に必要なテキストファイルが入ります。
- dvipdfmx：[dvipdfmx](/dvipdfmx/) 用の設定ファイルが入ります。
- dvips：[dvips](/dvips/) 用の設定ファイルが入ります。
- bibtex：BibTeX に関するファイルが入ります。
- scripts：プラットフォームに依存しないスクリプト (Perl, Lua, etc.) が入ります。
- doc：説明文書が入ります。
- source：ソースファイル（LaTeX パッケージの元になる dtx や ins なども含む）が入ります。

TeX でファイル検索を行う kpathsea ライブラリは，このディレクトリ構成に従って必要なファイルを検索します。
kpathsea ライブラリは多重 TEXMF ツリーにも対応しています。

### TeX のマクロ，LaTeX のパッケージなど：texmf/tex {#tex}

LaTeX のパッケージなどのファイルは，「TeX のフォーマット→パッケージの名前」に従って配置します。

- <strong>texmf</strong>/tex/&lt;format&gt;/&lt;package&gt;/

まず，&lt;format&gt; とはフォーマットの名前です（例：latex, context, plain, amstex, texinfo）。
次のフォーマット名は TDS によって予約されています。

- generic：複数のフォーマットに渡って使われるファイル（plain TeX で記述されていて，他のフォーマットに依存しないもの）
- local：ユーザがローカルに追加したファイル（多重 TEXMF ツリーに対応していない場合によく使われる）

次に，&lt;package&gt; は TeX のパッケージ名です（例：babel, hyperref）。
次のパッケージ名は TDS によって予約されています。

- base：それぞれのフォーマットの基本的なファイル（例えば .ltx や .ini など）
- hyphen：ハイフネーション・パターンを記述したファイル
- images：PostScript ファイルなどの画像ファイル
- local：ユーザが「ローカル」に追加したファイル（多重 TEXMF ツリーを使う場合は使わない方がよい）
- misc：単一のファイルからなるパッケージ（ただし，メンテナンス上，個別にディレクトリを作ることを推奨）

例えば，[hyperref](/hyperref/) パッケージは <strong>texmf</strong>/tex/latex/hyperref/ 以下に置かれているはずです。
これは hyperref パッケージが LaTeX フォーマットを必要とすることに由来します。

### フォント：texmf/fonts {#fonts}

フォントに関するファイルは，大きく分けて2種類あります。

#### フォントファイル本体の配置 {#fonts1}

多くのファイルは「ファイルの種類→メーカー→書体名」の順で分類します。

- <strong>texmf</strong>/fonts/&lt;type&gt;/&lt;supplier&gt;/&lt;typeface&gt;/

一般ユーザが良く使う，または目にするファイルの種類 &lt;type&gt; は以下の6つでしょう。

- opentype：OpenType フォント
- truetype：TrueType フォント
- type1：PostScript Type 1 フォント（pfb, pfa など）
- source：METAFONT のソース（フォントのアウトラインを METAFONT 言語で記述したもの）
- tfm：TFM ファイル（TeX フォントメトリックといい，フォントの寸法を記したもの）
- vf：仮想フォントファイル

以上6つのほかに TDS によって予約されているものは5つです：

- afm：Adobe フォントメトリックファイル
- gf：Generic Font bitmap files
- pk：PacKed bitmap fonts
- type3：PostScript Type 3 フォント

次に，&lt;supplier&gt; はメーカーの名前，&lt;typeface&gt; は書体ファミリの名前です（例：cm, euler, times）。
次のメーカーは TDS によって予約されています。

- ams：American Mathematical Society の AMS-fonts collection 用
- local：「ローカル」のフォント（多重 TEXMF ツリーを使う場合は使わない方がよい）
- public：フリーとして配布されているもの（ただし，ams などの独自のディレクトリを要求していない，かつ adobe のように所有権を有するフォント (proprietary fonts) を作っていない）
- tmp：一時的に生成されるフォントを置くため

次の書体名は TDS によって予約されています。

- cm（public 内）：Computers and Typesetting, Volume E（Appendix D 参照）で定義されている75フォント
- latex（public 内）：LaTeX ディストリビューションと一緒に配布されているフォント
- local：「ローカル」

上を使い，例えば次のような配置にします。

- texmf/fonts/source/public/pandora/pnr10.mf
- texmf/fonts/tfm/public/cm/cmr10.tfm
- texmf/fonts/type1/adobe/utopia/putr.pfa

#### フォント関連ファイルの配置 {#fonts2}

以下の3つは他の種類のファイルとは性質が違います。
これらも TDS によって予約されています。

- enc：エンコーディング用のファイル
- lig：リガチャ用のファイル
- map：MAP ファイル（TFM の名称と実フォントとの対応関係を記述したファイル）

これらのファイルは「ファイルの種類→シンタックス→パッケージ」

- <strong>texmf</strong>/fonts/{enc,lig,map}/&lt;syntax&gt;/&lt;package&gt;

ここで，&lt;syntax&gt; には dvips, dvipdfm などのフォントを扱うプログラムの種類が入ります。
ただし，updmap(-sys) プログラムを使うようにすれば，ほとんどの場合 dvips のみを使えば済みます。
lig ファイルは afm2pl というプログラムによって使われます。

### ドキュメント：texmf/doc {#doc}

ほとんどのパッケージには，解説書や見本といったドキュメントが付属しています。
ドキュメントには，テキストファイル，TeX のソースファイル，PDF ファイル，PostScript ファイル，DVI ファイルなどが含まれます。
これらはファイルの種類によらず，以下のように分類されて収録されます。

- <strong>texmf</strong>/doc/&lt;category&gt;/...

ここで，&lt;category&gt; には次のようなものが入ります。

- TeX フォーマットの名前
    - latex
- プログラムの名前
    - bibtex
    - tex
- 言語
    - french
    - german
- ファイルのフォーマット
    - info
    - man
- 他のシステムに関わるもの
    - web
    - fonts

TDS は次の &lt;category&gt; を予約しています。

- general：特定のプログラムに限定されないドキュメント
- help：FAQ, TeX Catalogue などのファイル
- info：Texinfo ファイル
- local：「ローカル」なファイル（多重 TEXMF ツリーを使う場合は使わない方がよい）

それぞれの &lt;category&gt; の中では base というディレクトリが TDS によって予約されています。

### 一覧表の作成と更新 (mktexlsr) について {#mktexlsr}

LaTeX がファイルを読み込むときは TeX のディレクトリの中から目当てのファイルを探します。
しかし，ファイルが膨大になるにつれ，プログラムがいちいち「ファイルがどこにあるのか」を検索するのに時間がかかるようになってしまいました。
そのため，「どこにどのファイルがあるのか」を記述した一覧表をあらかじめ作っておき，それをもとにファイルを探すという仕組みが作られました。
この一覧表の実体は ls-R というファイルで，これは Unix 系の

```
ls -R /usr/share/texmf-dist >ls-R
```

という一覧表を作るコマンドに由来します。
ls-R の中身はまさに ls -R の結果が吐き出されたようなもので，すなわちファイルの一覧を再帰的に深くまで表示したものです。
この ls-R の中身がプラットフォームによって微妙に異なるという問題を防ぐため，TeX では mktexlsr という専用のプログラムが配布されるようになりました。
mktexlsr は TEXMFDIST, TEXMFLOCAL などをたどり，そこにあるファイルのリストを記録した ls-R ファイルを新規に生成あるいは更新します[^2]。

手元のシステムでこの一覧表を利用しているかどうかは，ls-R というファイルが存在するかどうかを調べるとわかります。

- [TeX Live](</TeX Live/>) では，この ls-R という一覧表でファイルを管理しています。したがって，TeX Live でパッケージを追加した場合は

    ```
    mktexlsr
    ```

    を実行して一覧表を更新する必要があります。
    Unix 系であれば管理者権限が必要ですので，

    ```
    sudo mktexlsr
    ```

    として実行します。

- [W32TeX](/W32TeX/) では，一覧表を使う運用と全く使わない運用の両方が可能です。一覧表を使用している場合は

    ```
    mktexlsr
    ```

    を実行して一覧表を更新します。一覧表を使用しない場合は，deltexlsr を実行することで ls-R ファイルを削除することができます。

近年はハードディスク等も高速になっていることから，必ずしも ls-R が必要でなくなったようです。

```
rm `kpsewhich --expand-path='$TEXMFMAIN'`/ls-R
```

として ls-R を削除してしまっても構わない場合もあるでしょう。
削除した方がファイルの追加を気がねなく行えるという意見もあります。

- mktexlsr に関する TeX Forum での話題（賛否両論）：[forum:454](https://okumuralab.org/tex/mod/forum/discuss.php?d=454), [forum:700](https://okumuralab.org/tex/mod/forum/discuss.php?d=700), [forum:1467](https://okumuralab.org/tex/mod/forum/discuss.php?d=1467)
- [mktexlsr は有害だ (mktexlsr Considered Harmful)](http://0xcc.net/misc/mktexlsr.html)
- [texmf の ls-R の必要性](http://d.hatena.ne.jp/lugia/20110923/1316736886)

% 少しずつ作業を進めていきたいと思います．

<!--  -->
<!-- [[W32TeX]] から持ってきました．記述は2015年1月以前のもの． -->
<!-- いまは [[forum:1596]] で書かれているとおり -->
<!-- ちょっと構成が変わっているので，書き変える必要があります． -->
<!--  -->
<!-- **$TEXMF, $TEXMFMAIN, $TEXMFLOCAL, $TEXMFPROJECTS [#s503cb80] -->
<!-- TeX についての解説を読んでいると，$TEXMF，$TEXMFMAIN，$TEXMFLOCAL，$TEXMFPROJECTS -->
<!-- という単語が出てくることがあります。 -->
<!-- ''$TEXMFMAIN'' とは -->
<!-- TeX をインストールしたフォルダー（ディレクトリ）の中にある -->
<!-- share/texmf-dist というフォルダーのことを指しています。 -->
<!-- ''$TEXMFDIST'' は　''$TEXMFMAIN'' と同じです。 -->
<!-- ''$TEXMFLOCAL'' とは -->
<!-- TeX をインストールしたフォルダーの中にある -->
<!-- share/texmf-local というフォルダーのことを指しています。 -->
<!-- ''$TEXMFPROJECTS'' とはTeX をインストールしたフォルダーの中にある -->
<!-- share/texmf-projetcs というフォルダーのことを指しています。 -->
<!-- 例えば TeX を C:/w32tex/ にインストールしたのなら， -->
<!--  -->
<!-- -$TEXMFMAIN = C:/w32tex/share/texmf-dist -->
<!-- -$TEXMFLOCAL = C:/w32tex/share/texmf-local -->
<!-- -$TEXMFPROJECTS = C:/w32tex/share/texmf-projects -->
<!--  -->
<!-- となります。 -->
<!-- そして ''$TEXMF'' は $TEXMFMAIN, $TEXMFLOCAL, $TEXMFPROJECTS のどれか， -->
<!-- もしくは全てのことを指しています。 -->
<!--  -->
<!-- **texmf.cnf の優先順位 [#a06d0a7b] -->
<!--   $SELFAUTOLOC -->
<!--   $SELFAUTOLOC/share/texmf-local/web2c -->
<!--   $SELFAUTOLOC/share/texmf-dist/web2c -->
<!--   $SELFAUTOLOC/share/texmf/web2c -->
<!--   $SELFAUTOLOC/texmf-local/web2c -->
<!--   $SELFAUTOLOC/texmf-dist/web2c -->
<!--   $SELFAUTOLOC/texmf/web2c -->
<!--   $SELFAUTODIR -->
<!--   $SELFAUTODIR/share/texmf-local/web2c -->
<!--   $SELFAUTODIR/share/texmf-dist/web2c -->
<!--   $SELFAUTODIR/share/texmf/web2c -->
<!--   $SELFAUTODIR/texmf-local/web2c -->
<!--   $SELFAUTODIR/texmf-dist/web2c -->
<!--   $SELFAUTODIR/texmf/web2c -->
<!--   $SELFAUTOGRANDPARENT/texmf-local/web2c -->
<!--   $SELFAUTOPARENT -->
<!--   $SELFAUTOPARENT/share/texmf-local/web2c -->
<!--   $SELFAUTOPARENT/share/texmf-dist/web2c -->
<!--   $SELFAUTOPARENT/share/texmf/web2c -->
<!--   $SELFAUTOPARENT/texmf-local/web2c -->
<!--   $SELFAUTOPARENT/texmf-dist/web2c -->
<!--   $SELFAUTOPARENT/texmf/web2c -->
<!--  -->
<!--   $SELFAUTOLOC:         バイナリディレクトリ -->
<!--   $SELFAUTODIR:         バイナリディレクトリより1段階上のディレクトリ -->
<!--   $SELFAUTOPARENT:      バイナリディレクトリより2段階上のディレクトリ -->
<!--   $SELFAUTOGRANDPARENT: バイナリディレクトリより3段階上のディレクトリ -->
<!--  -->
<!--   但し、ルートディレクトリに達すると、その上は無いので、 -->
<!--   "ルートディレクトリの上" は、ルートディレクトリに一致する。 -->
<!--  -->
<!--   環境変数 TEXMFCNF を定義していなければ、上の順番で存在する全ての -->
<!--   texmf.cnf が読まれる。同じ変数定義が複数存在する場合、先に読み込んだ -->
<!--   定義が有効となる。 -->
<!--  -->
<!--   W32TeX の場合、配布される texmf.cnf は -->
<!--   $SELFAUTODIR/share/texmf-dist/web2c -->
<!--   にある。自分専用の texmf.cnf はこれより優先される -->
<!--   $SELFAUTODIR/share/texmf-local/web2c -->
<!--   に置いておけばよい。そうすれば、上書きされて専用の設定が消去 -->
<!--   されるようなことは無い。自分専用の texmf.cnf には必要最小限度の -->
<!--   ことを書いておくこと。配布される texmf.cnf に記述してあることを -->
<!--   専用の texmf.cnf に記述する必要は無い。 -->
<!--  -->

[^1]: TEXMF とは，emTeX/em と emM/emETAemF/emONT という意味です。
[^2]: 環境によっては，コマンド名は mktexlsr ではなく texhash という名前になっているかもしれません。
