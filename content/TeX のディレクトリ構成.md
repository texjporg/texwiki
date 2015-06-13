---
title: "TeX のディレクトリ構成"
url: "/TeX のディレクトリ構成/"
date: 2015-02-14T11:24:48Z
pukiwiki: "TeX のディレクトリ構成"
---

# TeX のディレクトリ構成

## TeX のディレクトリ構成 (TDS) {#u528ce3e}

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

### TEXMF ツリー・多重 TEXMF ツリーとは {#ae6fe566}

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

### TEXMF ツリーの中身 {#y056dcf8}

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

### TeX のマクロ，LaTeX のパッケージなど：texmf/tex {#edefb928}

LaTeX のパッケージなどのファイルは，「TeX のフォーマット→パッケージの名前」に従って配置します。

- <strong>texmf</strong>/tex/&lt;format&gt;/&lt;package&gt;/

まず，&lt;format&gt; とはフォーマットの名前です（例：latex, context, plain, amstex, texinfo）。
次のフォーマット名は TDS によって予約されています。

- generic：複数のフォーマットに渡って使われるファイル（plain TeX で記述されていて，他のフォーマットに依存しないもの）。
- local：ユーザがローカルに追加したファイル（多重 TEXMF ツリーに対応していない場合によく使われる方法です）。

次に，&lt;package&gt; は TeX のパッケージ名です（例：babel, hyperref）。
次のパッケージ名は TDS によって予約されています。

- base：それぞれのフォーマットの基本的なファイル（例えば .ltx や .ini など）。
- hyphen：ハイフネーション・パターンを記述したファイル。
- images：PostScript ファイルなどの画像ファイル。
- local：ユーザが「ローカル」に追加したファイル（多重 TEXMF ツリーを使う場合は使わない方がよい）。
- misc：単一のファイルからなるパッケージ（ただし，メンテナンス上，個別にディレクトリを作ることを推奨）。

例えば，[hyperref](/hyperref/) パッケージは <strong>texmf</strong>/tex/latex/hyperref/ 以下に置かれているはずです。
これは hyperref パッケージが LaTeX フォーマットを必要とすることに由来します。

### フォント：texmf/fonts {#o1f2354d}

フォントに関するファイルは，大きく分けて2種類あります。

#### フォントファイル本体の配置 {#y073dd9a}

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

#### フォント関連ファイルの配置 {#n5f4bd62}

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

### ドキュメント {#f44c25a3}

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

% 少しずつ作業を進めていきたいと思います．

[^1]: TEXMF とは，emTeX/em と emM/emETAemF/emONT という意味です。
