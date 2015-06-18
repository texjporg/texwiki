---
title: "TeXとフォント"
url: "/TeXとフォント/"
date: 2015-06-07T00:25:59Z
pukiwiki: "TeXとフォント"
---

# TeXとフォント

## TeX とフォント {#se78b0cf}

TeX におけるフォントの基礎知識や、LaTeX でのフォントの利用等についての情報を提供します。

***

***

## はじめに {#r78a6606}

TeX あるいは LaTeX におけるフォントの利用については、なかなか思うようにいかなかったり、使いたいフォントがあってもどうしたらよいのか分からなかったりして、困った経験がある方も多いと思われます。

これは TeX におけるフォントの利用が、TeX が WYSIWYG でないために、直観的でなかったり、見通しの良いものではないことに起因します。TeX は一般に、組版処理を行う際には、ユーザが通常接する「フォント」そのものについては利用しません。そこから抽出した情報の一部を利用するのみです。TeX の仕事はページ上に文字を綺麗に並べることですが、その仕事には具体的な文字（グリフ）の形を知る必要はなく、文字の大きさなどを知るのみで十分だからです。実際のフォントを利用するのは、TeX の処理結果を表示したり、印刷用フォーマットに変換したりするデバイスドライバと呼ばれるプログラムです。

また、TeX の登場以降に広く普及することとなった、TrueType や PostScript フォントを直接、簡単に扱える枠組みを整えるといったことは、TeX そのものに対する拡張としては行われませんでした。

このことは、例えば LaTeX の出力で TrueType や PostScript などのフォントを利用可能にする際に、かなりの手間と不思議なファイル群の導入や各種設定の必要性をもたらします。LaTeX で TrueType フォントを利用して出力を得る際のおおまかな流れは、

1. フォントファイルから組版に必要な情報を抽出する。（TFM ファイルの生成）
1. 上記で抽出した情報に、ある一定の規則でアクセスする設定を行う。（.fd ファイルの作成）<br>
    フォントファミリとエンコーディングやフォント属性のセットを指定することでフォント情報にアクセスできるようにします。

1. フォント情報と実際のフォントファイルとの対応付けを行う。（.mapファイルの編集）

といった感じです。今ではこれらの作業を行う便利なツールがありますが、それでもなれない人にとっては未だ大変な作業で、うまくいかないこともあるでしょう。何か使ってみたいフォントがあったら、とにかく[CTAN](/CTAN/) をあたって既にパッケージが用意されていないか調べましょう。

この文書の目的は、LaTeX は十分使えるが、フォントについてはあまり意識したことがないという方のために、とりあえず他人が用意したパッケージにお任せでフォントを変え始め、自分で好きなフォントを一から利用可能にできるようになるまでの、情報を提供することです。

LaTeX の細かい知識に関心がなく、フォント設定の煩わしさを少しでも軽減したければ、この文書は読まずに [XeLaTeX](/XeTeX/) や [LuaLaTeX](/LuaTeX/) への移行を考えましょう。

## フォントを変えてみる（欧文フォント） {#wb9a55f8}

Computer Modern に飽きたら本文用フォントを変えてみましょう。ここでは、入手可能な LaTeX パッケージが存在し、本文用として使える本格的なフォントを利用する例をいくつかあげます。比較的広範な文字集合を含み、リガチャなどが充実したものを主に例示します。

### [Latin Modern](http://www.gust.org.pl/projects/e-foundry/latin-modern) {#h96ac87b}

ポーランドの TeX Users Group、[GUST](http://www.gust.org.pl/) で開発された、数式用を含む、広範な文字集合をサポートするフォントセットです。[Latin Modern](</Latin Modern/>) のページを参照してください。Bogusław “Jacko” Jackowski と Janusz M. Nowacki　による設計です。ラテン文字をサポートします。ベトナム語でも利用可能です。Computer Modern を元にしています。

### [EB Garamond](http://www.georgduffner.at/ebgaramond/) {#tdbd7142}

Georg Duffner　によるフォントです。デザインは Claude Garamond による有名な書体が元になっています。Garamond 系のフォントに関しては [Adobe](https://store1.adobe.com/cfusion/store/html/index.cfm?store=OLS-JP&event=displayFontPackage&code=1703) をはじめとして様々なフォントベンダで作成されています。いわゆるオールド・スタイル・セリフに分類されます。利用可能な文字集合として、ラテン文字・ギリシャ文字・キリル文字があります。標準的な各種リガチャに加え、st や ct などのリガチャもあり、スモールキャップ・オールドスタイル数字もサポートします。いくつかのオプティカルサイズが用意されています。

TeX Live では [tlmgr](/tlmgr/) からインストール可能ですのでそれを利用しましょう。
インストールしたら、ターミナルから　Map ファイルを有効にし、

```
   updmap-sys --enable Map=EBGaramond.map
```

あとは、LaTeX ソースで

```
   \usepackage{ebgaramond}
```

するだけです。イタリックも利用可能ですが、ボールドはありません。オプションとして、

```
   oldstyle,osf    old-style figures
   lining,nf,lf    lining figures
```

```
   proportional,p  varying-width figures
   tabular,t       fixed-width figures
```

があります。上付き・下付き数字（\textsu{}、\textinf{}）、スワッシュ・イタリック（\textsw{}）やいくつかの文字に関しては装飾付のものがあります（\textin{}）。数式用はありません。（TeXLive 2015 では ebgaramond-math というパッケージがあり、数式用の記号の一部を EB Garamond で置き換えます）

CTAN のページは

- [http://www.ctan.org/tex-archive/fonts/ebgaramond](http://www.ctan.org/tex-archive/fonts/ebgaramond)

Google Fonts のページ

- [http://www.google.com/fonts/specimen/EB+Garamond](http://www.google.com/fonts/specimen/EB+Garamond)

### Adobe Source ファミリ {#g85c2bee}

Adobe によるオープンソース書体です。Source Serif Pro、Source Sans Pro、Source Code Pro とあり、豊富なウェイトと機能を揃えています。Source Serif Proは、トランジショナルに分類されるセリフ書体です。Serif、Sans と Code はお互いによく調和するようにデザインされてあります。

tlmgr から入れましょう。

プロジェクトページへは

- GitHub の [Adobe Fonts](http://github.com/adobe-fonts) ページから

CTAN ページ

- [Source Serif Pro](http://www.ctan.org/tex-archive/fonts/sourceserifpro)、[Source Sans Pro](http://www.ctan.org/tex-archive/fonts/sourcesanspro)、[Source Code Pro](http://www.ctan.org/tex-archive/fonts/sourcecodepro/)

ソースコード表示用に使える Source Code Pro があります。

### TeX Gyre {#j1c0b3cd}

[TeX Gyre](</TeX Gyre/>) フォント群は，Times や Helvetica などの Adobe 基本 35 書体に対応する，高品質でオープンなフォントです。PostScript Type 1 形式と OpenType 形式で配布されています。

|  TeX Gyre 名  |  元となった Adobe フォント  |  使用法  |
|---|---|---|
|  Adventor  |  Avant Garde  |  \usepackage{adventor}  |
|  Bonum  |  Bookman  |  \usepackage{bonum}  |
|  Chorus  |  Zapf Chancery  |  \usepackage{chorus}  |
|  Cursor  |  Courier  |  \usepackage{cursor}  |
|  Heros  |  Helvetica  |  \usepackage{heros}  |
|  Pagella  |  Palatino  |  \usepackage{pagella}  |
|  Schola  |  Century Schoolbook  |  \usepackage{schola}  |
|  Termes  |  Times (new) Roman  |  \usepackage{termes}  |

TeX Gyre フォントを上記のパッケージを利用して設定すると，日本語の太字が効かなくなってしまいますので，プリアンブルに以下を追加します。

```
\renewcommand{\bfdefault}{bx}
```

## フォントを変えてみる（日本語フォント） {#q1b5e62f}

TeX (LaTeX) が登場した当時は，日本語フォントは「本文用明朝体」「見出し（強調）用ゴシック体」の2種類だけを利用するようになっていて，どの書体を使用するかは印刷時のソフトの設定次第でしたが，近年は PDF に書体を埋め込むことが推奨され，TeX 文書作成段階で書体を設定することが望ましくなりました。
なお，フォントの埋め込みの可否については，ライセンスも考慮する必要があります。
[フォントの埋め込みとライセンス](</フォントの埋め込みとライセンス/>)を参照してください。

最新の TeX Live / W32TeX では，TeX と共に配布されている IPAex/IPA フォントの他，ヒラギノ，MS，小塚，モリサワ，游明朝・游ゴシックが簡便に指定できるようになっています。[OTF](/OTF/) パッケージを利用すると，5書体以上の多書体化もできます。[和文の仕組み](</和文の仕組み/>)に日本語フォントを使う仕組みについての説明があります。

（ヒラギノは，Mac (OS X) では OS に付属していますが，Windows で利用する場合は別途購入する必要があります。）

### PDF 作成の都度，フォントを指定する方法 {#jcd55296}

dvipdfmx を使用して IPAex を埋め込んだ PDF を作成するには以下のようにします。

- TeX Live（MacTeX）では

    ```
    $ ptex2pdf -e -l -ot '-synctex=1' -od '-f ptex-ipaex.map' hoge.tex （pLaTeX 用）
    $ ptex2pdf -u -l -ot '-synctex=1' -od '-f uptex-ipaex.map' hoge.tex （upLaTeX 用）
    ```

- W32TeX では

    ```
    dvipdfmx -f ipaex.map dviname
    ```

### PDF に埋め込むフォントをあらかじめ設定する {#ge692ee0}

TeX Live (MacTeX) では，ターミナルから kanji-config-updmap-sys で設定できます。

```
$ sudo kanji-config-updmap-sys <fontname>  （otf-<fontname>.map にしたがってフォントを埋め込む）
$ sudo kanji-config-updmap-sys auto        （自動的に <fontname> のいずれかを埋め込む）
$ sudo kanji-config-updmap-sys nofont      （PDF にフォントを埋め込まない）
$ sudo kanji-config-updmap-sys status      （現在の埋め込み設定を確認する）
```

自動的に埋め込み設定できるフォント &lt;fontname> は次のものです．

```
hiragino, hiragino-pron, morisawa, morisawa-pr6n, kozuka, kozuka-pr6, kozuka-pr6n, ipaex, ipa, ms, yu-win, yu-osx
```

- Mac (OS X) の場合には事前準備が必要です。
    - [TeX Live/Mac](</TeX Live/Mac/#i9febc9b>) を参照してください。
- Windows でヒラギノを使いたい場合にも事前準備が必要です。
    - [Windows の TeX Live 2013 でヒラギノフォントを埋め込む方法](http://ichiro-maruta.blogspot.jp/2013/08/windows-tex-live-2013.html)
    - ヒラギノ基本6書体パック [forum:1467](https://okumuralab.org/tex/mod/forum/discuss.php?d=1467)
    - PDF へのフォントの埋め込みに失敗する [forum:1491](https://okumuralab.org/tex/mod/forum/discuss.php?d=1491)

### OTF の設定（TeX 文書のプリアンブルにて設定） {#xad9bd71}

```
\usepackage[オプション]{otf}
```

主なオプションの設定

jis2004
: ヒラギノのNシリーズ（JIS X 0213:2004に対応した字形）を利用

deluxe
: 明朝2ウェイト，ゴシック2ウェイト，丸ゴシックが使えます。（プロポーショナル仮名，ヒラギノ明朝W2，ヒラギノゴシックW8も使えます。）

expert
: 仮名が縦組専用，または横組専用のものに

uplatex
: 組版に upLaTeX を用いる場合は必須

### その他のフォントの利用 {#m12273b7}

[みかちゃんフォント](http://www001.upp.so-net.ne.jp/mikachan/)などのフリー書体（[フォント](</フォント/>)参照）や，その他の日本語書体を埋め込みたい場合は，そのためのスタイルファイルを利用するのが便利でしょう。
設定は，多少面倒です。
[PXシリーズ](http://zrbabbler.sp.land.to/index.html)，[MacTeX 2013とみかちゃんフォントの設定](http://appcar.jp/wp/casual/2013/06/19/mactex-2013-mikachan/)を参考にしてください。
自力で一から構築する場合は [MacPortsのpTeXにおける和文多書体環境の整えかた](http://miko.org/~tatyana/tech/OSX/pTeX/fonts.html) が参考になります。

## フォントを変えてみる（数式フォント） {#k266362f}

各種パッケージを用いて，数式部分に用いるフォントを変えることができます。（いくつかのフォントを比較したものが[こちら](http://perikanfan.web.fc2.com/tex.html)にあります。）

```
\usepackage{newtxmath}
```

などとするだけで数式フォントを変えられます。

### Times 系 {#a0f4fe96}

[STIX フォント](http://www.stixfonts.org/project.html)は
Scientific and Technical Information Exchange (STIX) フォントプロジェクトによるフォントセットです。LaTeX 用のパッケージもあります。Times フォントと良く調和し、互換なようにデザインされています。

[newtx](/newtx/) は Michael Sharpe によりメンテナンスされている Times 互換なフォントです。Young U. Ryu による txfonts がもとになっています。newtx, newtxtt, newpx, boondox, fontaxes があります。newpx は Palatino と調和するように設計されています。

<table><tbody>
<tr><td>newtx</td><td>Times を元にした txfonts の改良版</td><td><a href="http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/newtx.html">newtx の見本</a></td></tr>
<tr><td>newpx</td><td>Palatino を元にした pxfonts の改良版</td><td><a href="http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/newpx.html">newpx の見本</a></td></tr>
</tbody></table>

[Mathptmx](/Mathptmx/)：本文，数式をともに Times に変えます。

### AMS Euler {#db3b09f8}

AMS の委託により Hermann Zapf が作成し、Knuth が『コンピュータの数学』で用いた手書き風の数式フォントです。結城浩氏の『数学ガール』シリーズに用いられていることでも知られています。（[euler の見本](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/euler.html)）

2008年に大規模な改定が行われたようです。

- ["Reshaping Euler — a collaboration with Hermann Zapf"](http://www.tug.org/TUGboat/tb29-2/tb92hagen-euler.pdf) (PDF). TUGboat 29 (2): 283–7.

Computer Modern とはあまりよく調和なかったりと、あわせる本文用フォントを選ぶようです。前述の『コンピュータの数学』の原著では Concrete フォントが本文に使われています。

### その他 {#u91f5292}

その他には、

- [mathabx](/mathabx/)：Computer Modern の上位互換で，記号類が改変・拡張されています。（[mathabx の見本](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/mathabx.html)）
- [yhmath](/yhmath/)：通常より大きいものまで含まれた根号や括弧などのフォントです。
- ceo.sty：安田亨氏作。日本の高校教科書や大学受験で一般的な数式書体（CenturyOldStyle）や関連記号が含まれています。（[ceo.sty の見本](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/ceo.html)）

などがあります。商用フォントでは、

- Lucida フォントは Charles Bigelow と Kris Holmes よってデザインされたフォントで、[TUG によって配布されているもの](http://tug.org/store/lucida/)は数式のサポートも含みます。

- Adobe の Minion Pro は Adobe 製品によくバンドルされていることもあって、使う方も多いようです。[Minion Math](http://www.typoma.com/en/fonts.html) という Minion Pro とあうようにデザインされた数式用のフォントもあります。

- Times と合わせる数式用フォントとして [MathTime](/MathTime/) があります。

などもあります。

## フォント関連の基本的なファイル {#tf6d4ac5}

ここでは主に LaTeX で文書を作成する際に必要となってくるフォント関連ファイルについて、基礎的な事柄を解説します。

### TeX Font Metric (TFM) {#z2f7e015}

TFM は組版を行うのに必要な、フォントに関する情報が納められたファイルです。AFM や PFM と似たようなものです。

大雑把にいうと3つの部分から成り立ちます。

1. 各文字のサイズに関する情報
1. 特定の文字と文字の組み合わせが起きた時の動作の指定（リガチャとカーニング）
1. 単語間スペースやアクセントの配置に関するパラメータなど

TeX の役割はある決まった大きさの領域に、文字という「箱」を詰め込んでいくことですが、それを行う際に基礎となる情報が文字サイズに関する情報です。リガチャとカーニングは連続した2つの文字に関する微調整です。リガチャとカーニングに関する解説はここでは行いません。

TFM　についての（フォーマットに関する）詳しい解説については

- David Fuchs による解説 "[TeX Font Metric files](http://www.tug.org/TUGboat/Articles/tb02-1/tb02fuchstfm.pdf)", TUGboat 2 (1): 12–16.\]
- [tftopl.web](http://www.ctan.org/tex-archive/systems/knuth/dist/texware/tftopl.web) を WEAVE して得られるドキュメント

を参照してください。（上記リンク先の PDF は低画質のスキャン画像です）

### Font Definition (.fd) {#nf0707eb}

LaTeX でフォントを使う際は、通常、フォントは属性の組で指定されます。例えば、cmr というファミリのメディアムウェイト・イタリック体を 10 pt のサイズで、エンコーディングは OT1、など。LaTeX においては、フォントは

```
   <encoding, family, series, shape, size>
```

の組で完全に指定されます。Font definition ファイルの役割は、この属性の組で指定されたフォントを、TFM ファイルに結びつける事です。前述の例を cmti10 に結びつけるには、

```
   \DeclareFontShape{OT1}{cmr}{m}{it}{<10>cmti10}{}
```

のような宣言となります。

.fd ファイルはこのような宣言の集りです。通常、それぞれのエンコーディングとファミリの組ごとに用意されます。例えば、T1 エンコーディングの Latin Modern Roman ファミリでは、t1lmr.fd に様々な定義があります。

詳しくは

- [http://mirrors.ctan.org/macros/latex/doc/fntguide.pdf](http://mirrors.ctan.org/macros/latex/doc/fntguide.pdf)

を参照してください。

### フォントマップ {#tde4074f}

フォントマップ .map は、TFM ファイルと元のフォントファイルとの対応を記したファイルです。
PDF や PostScript などの最終的な出力を得る段階になって必要とされます。出力ドライバは、TeX が組版に用いた TFM が、実際にはどのフォントに対応しているのか知る必要があります。このファイルの書式はドライバごとに異なりますが、基本的な部分は同じです。

例えば、dvipdfmx のフォントマップの書式は

```
   tfm-name encoding font-file options
```

のような形をとります。DVIPS/PDFTeX 書式でも基本は、TFM をあるフォントに対応付ける、ということです。

## CTAN にないフォントを利用する（欧文フォント） {#z14d6053}

LaTeX におけるフォントの基礎をおさえたら、実際にフォントを LaTeX で使えるようにしてみましょう。
ここでは OpenType フォントに絞って話を進めます。実例として、Microsoft Windows に入っている [Constantia](http://www.microsoft.com/typography/fonts/family.aspx?FID=304) を使います。これは TrueType 系の OpenType フォントです。

```
   C:\Windows\Fonts\
```

にある

```
   constan.ttf constanb.ttf constani.ttf constanz.ttf
```

がそれです。作業用フォルダを作り、とりあえずコピーしてきましょう。（システムフォントのフォルダが利用可能なように設定されている場合はコピーの必要はありません。

```
   kpsewhich constan.ttf
```

でフォントが見つかるか試してみましょう。見つかればシステムフォントが利用可能です。）

### ツールのインストール {#qb371a3e}

フォントファイルから必要なものを生成するツールとして、LCDF Typetools を導入します。 [tlmgr](/tlmgr/) からインストール可能です。パッケージ名は lcdftypetools です。pltotf プログラムをあらかじめインストールしておく必要があります。これは fontware パッケージに含まれます。W32TeX には，LCDF Typetools も pltotf も入っています。

LCDF Typetools のインストールができたら、とりあえず付属の otfinfo でフォント情報を見てみましょう。

```
   otfinfo -i constan.ttf
```

でフォントの情報が表示されます。どのような OpenType 機能が利用可能か見てみましょう。

```
   otfinfo -f constan.ttf
```

"kern" や "liga" などの基本的なもの、"onum"（オールドスタイル数字）などや "smcp"（スモールキャップ）、その他様々な機能があることがわかります。

それでは実際に LaTeX で使えるようにしてみましょう。

### TFM ファイルの生成 {#r85aade4}

まずは OT1 エンコーディング(-e 7t オプションでこれを指定しています）で試してみましょう。リガチャ（liga）とカーニング（kern）を有効にします。

```
   otftotfm --no-type1 -e 7t -fkern -fliga constan.ttf -n constan > constan.map
```

ここで、

```

   warning: TrueType-flavored font support is experimental
```

という警告がでますが、とりあえず続けましょう。LCDF Typetools はもともと PostScript-flavored font のために開発されたソフトウェアなのです。オプションの詳細についてはヘルプ（-h）を参照してください。これで TFM ファイル constan.tfm　と .enc ファイルやマップファイル constan.map が生成されるはずです。[testfont](/testfont/) で実際使えることを確認しましょう。

```
   tex testfont
```

フォント名は　constan です。生成された DVI ファイルを処理するには

```
   dvipdfmx -f constan.map testfont
```

などとします。（いくらか警告が出て、いくつかの文字が欠落します。対処法については後述）

続けて イタリックも処理します。

```
   otftotfm --no-type1 -e 7t -fkern -fliga constani.ttf -n constani >> constan.map
```

そのほか、ボールドやボールドイタリックも処理します。スモールキャップ（sc shape）も使いたければ、

```
   otftotfm --no-type1 -e 7t -fkern -fliga -fsmcp constan.ttf -n constan-sc >> constan.map
```

のようにして、スモールキャップ用の TFM も生成します。（こちはも dvipdfmx で利用するには生成された .enc ファイルの修正が必要です）斜体（sl shape）は Constantia には含まれませんが、-S オプションでそれ用の TFM を生成することができます。

```
   otftotfm --no-type1 -e 7t -fkern -fliga -S .167 constan.ttf -n constan-sl >> constan.map

```

このようにすると、出力ドライバの機能を使って合成斜体を使うことになります。

### Font Definition (.fd) ファイル {#d5a8cb68}

Font Definition ファイル、ot1constan.fd を作ります。とりあえず、最低限のものとして、

```
   \ProvidesFile{ot1constan.fd}
       [2015/06/08 font definitions for Microsoft Constantia.]
```

```
   \DeclareFontFamily{OT1}{constan}{}
   \DeclareFontShape{OT1}{constan}{m}{n}{<->constan}{}
   \DeclareFontShape{OT1}{constan}{m}{it}{<->constani}{}
   \DeclareFontShape{OT1}{constan}{b}{n}{<->constanb}{}
   \DeclareFontShape{OT1}{constan}{b}{it}{<->constanz}{}
  
   \DeclareFontShape{OT1}{constan}{bx}{n}{<->ssub * constan/b/n}{}
   \DeclareFontShape{OT1}{constan}{bx}{it}{<->ssub * constan/b/it}{}
```

```
   \endinput
```

と書き込みましょう。メディアム（m）・ボールド（b）ウェイトでそれぞれノーマル（n）・イタリック（it）を定義します。bx（"bold extended"）についてはボールドで代替します。TFM の指定の前の &lt;-> の部分は「全てのサイズで」という意味となります。スモールキャップ（sc）や斜体（sl）も作ったら加えましょう。書式は同じで、シェイプのところ（n や it の部分）を sc や sl で置き換えます。

カレントディレクトリにこれまでに生成したファイルを置いた状態で、LaTeX ソースで

```
   \fontfamily{constan}\selectfont
```

とすることで Constantia が使えるようになっているはずです。

### マップファイル {#ja3c2d3b}

マップファイル constan.map がすでに生成されているはずです。PDFTeX 用のマップファイルですが、dvipdfmx でもそのまま使えます。

### パッケージ化とインストール {#x96ec2f0}

スタイルファイルを作っておくと、

```
   \usepackage{constantia}
```

のようにできます。とりあえず今のところは

```
   \ProvidesPackage{constantia}[2015/06/08]
   \renewcommand{\rmdefault}{constan}
   \endinput
   
```

として、constantia.sty　として保存しておきます。詳しい作り方については他のパッケージを参考にしてください。

できたファイル群をインストールする前に、TeX の標準的なディレクトリ構成にあうようにファイルを配置しましょう。フォント関連のファイルは主に fonts 以下に置きます。とりあえず、作業ディレクトリの下に仮のディレクトリツリーを作りましょう。

フォントファイルは

```
   fonts/truetype/microsoft/constantia/
```

以下に置きます。TFM ファイルは

```
   fonts/tfm/microsoft/constantia/
```

に配置しましょう。.enc ファイルは

```
   fonts/enc/dvips/constantia/
```

へ移動します。.map ファイルは

```
   fonts/map/dvips/constantia/
```

に置きます。.sty　と　.fd ファイルは別で

```
   tex/latex/constantia/
```

です。

それでは、

```
   zip -r constantia.zip fonts tex
```

でアーカイブしましょう。これでインストールはあなたの TEXMF　ツリーに展開するだけです。（必要であれば mktexlsr や updmap も忘れないでください）

これまでは本文用のセリフ書体である Constantia のみ準備しましたが、サンセリフ体とタイプライタ体もセットとして揃えておくとよいでしょう。[Corbel](http://www.microsoft.com/typography/fonts/family.aspx?FID=308) や [Calibri](http://www.microsoft.com/typography/fonts/family.aspx?FID=287) （サンセリフ）、[Consolas](http://www.microsoft.com/typography/fonts/family.aspx?FID=300)　（タイプライタ） などがおすすめです。Windows ユーザーは Microsoft の [ClearType Font Collection](http://www.microsoft.com/typography/fonts/cleartype.aspx) を一通り揃えてみるのもよいでしょう。（一部 ttc があり、otftotfm がそのまま使えませんが）

### よりすすんだ話題 {#jd4ad8d9}

Constantia は数字スタイルの切り替え（onum や lnum、pnum）などの OpenType 機能を備えています。これらを有効にするためのオプションを Constantia パッケージに加えましょう。

%　LaTeX パッケージの書き方という話題になるのでどなたか書いてください。

### LCDF Typetools と dvipdfmx {#dfd278a4}

otftotfm が自動生成する .enc ファイルは dvipdfmx でうまく使えない場合があります。これは otftotfm が index278 といった、フォントファイルで内部的に使用されるグリフ・インデックスを元にした文字名を使用してくるからです。これは特に OpenType のグリフ置換機能で得られる、Unicode にないグリフ（文字）などを使用する際に見られます。例えば、スモールキャピタルの "a" などです。dvipdfmx では、"a.smcp" （あるいは "a.sc"）といった、元の名前（"a"）と OpenType feature タグ（"smcp"）を組み合わせた名前に変えてやる必要が出てきます。

スモールキャピタル用の .enc ファイルでは以下のように修正します。

%10 の部分の2行目

```
   /uni00B8 /uni00DF /ae.sc /oe.sc /oslash.sc /uni00C6 /uni0152 /uni00D8
```

%60　の部分

```
   /uni2018 /a.sc /b.sc /c.sc /d.sc /e.sc /f.sc /g.sc
   /h.sc /i.sc /j.sc /k.sc /l.sc /m.sc /n.sc /o.sc
```

%70　の部分

```
   /p.sc /q.sc /r.sc /s.sc /t.sc /u.sc /v.sc /w.sc
   /x.sc /y.sc /z.sc /uni2013 /uni2014 /uni02DD /uni02DC /uni00A8
```

dvipdfmx で indexXXX がないといった警告がでたら、同様の処置を行う必要があります。

## フォント関連のその他のファイル {#lf8a8837}

### Virtual Font (VF) {#gf8d0e7b}

Virtual Font は小さなプログラムの集まりです。これは様々な目的で使われます。あるフォントのある文字を別のフォントの別の文字で置き換えたり、文字を合成したり、余白を入れたり削ったり、など。VF でできることはほとんど TeX のマクロでできますが、VF ではより低水準の層でこれが行われます。
例えば、\copyright とするかわりに、"c" を入力するとコピーライト記号になったり。

実際にどんなものか見てみましょう。ptmr7t.vf という Times　Roman フォント用の VF を例にとります。あなたの TeX システムにこれが含まれるかは、

```
   kpsewhich ptmr7t.vf
```

が、そのファイルの場所を返すかどうかでわかります。VF ファイルはバイナリファイルですが、vftovp というプログラムで、人間が読める形のテキストファイルに「戻す」ことができます。vftovp は TeXLive では　fontware パッケージに含まれます。W32TeX では最小インストールに含まれますので既に入っています。

```
   vftovp ptmr7t
```

とすると ptmr7t の内容が表示されます。ptmr7t は Adobe （p）の Times Roman （tmr）フォントを OT1（7t）エンコーディングで使うためのものですが、その内容には例えば、

```
   (CHARACTER O 0
      (CHARWD R 0.5)
      (CHARHT R 0.502997)
      (MAP
         (SETRULE R 0.5 R 0.5)
         (SPECIAL Warning: missing glyph `Gamma')
         )
      )
```

のようなものが含まれます。これは Virtual Font "ptmr7t" における文字コード \000 の文字の定義です。文字 \000 は文字幅 0.5 高さ 0.502997 で、その内容は幅と高さが 0.5、0.5 の罫線と

```
   Warning: missing glyph `Gamma'
```

（Gamma の文字がない）という警告文からなります。OT1 エンコーディングでは文字コード \000 は大文字のガンマですが、これが実際のフォントに存在しないため、このようなもので置き換えています。他の例として、

```
   (CHARACTER O 13
      (CHARWD R 0.640991)
      (CHARHT R 0.681989)
      (COMMENT
       ...略...
        )
      (MAP
         (SETCHAR C f)
         (MOVERIGHT R -0.025)
         (SETCHAR C f)
         )
```

は、文字コード \013 を "ff" の"リガチャ"として定義します。すなわち、"f" を描画した後、0.025 だけ詰めて、再び "f" を描画します。

Virtual Font が有用な局面は様々です。フォント関連で何か実現したい特別な機能があれば、VF の導入を検討するとよいでしょう。

以下の文献を参考にしてください

- Thomas A. Schmitz による ["Virtual Fonts -- a Tutorial"](http://mirrors.ctan.org/info/virtualfontshowto/virtualfontshowto.txt)

など。

### エンコーディング {#b9fac2f6}

フォント・エンコーディング関連の重要なファイルは2種類あります。LaTeX の fontenc　パッケージで利用される Encoding Definition ファイルと dvips などのデバイスドライバが利用する .enc ファイルです。

Encoding Definition ファイルについては、fontenc パッケージのドキュメント

- [http://mirrors.ctan.org/macros/latex/doc/fntguide.pdf](http://mirrors.ctan.org/macros/latex/doc/fntguide.pdf)

を参照してください。

.enc ファイルは元々 dvips で利用されていた PostScript Type 1 フォント用の、エンコーディングを記述するためのファイルです。これは、どのスロット（文字コード）にどのグリフ（文字）が入るかを宣言します。例えば、T1　エンコーディング用の ec.enc では、

```
   /ECEncoding [    % now 256 chars follow
   /grave           % 0x00 U+0060
   /acute           % 0x01 U+00B4
   /circumflex      % 0x02 U+02C6
   ...（中略）...
   /thorn           % 0xFE
   /germandbls      % 0xFF U+00DF
   ] def
```

のようになっています。0x00 に "grave"、0x01 に "acute"、… 0xff に "germandbls" が入ります。書式は

```
   /エンコーディング名 [ /グリフ名 ... ] def
```

のような PostScript の形式です。

### SFD (SubFont Definition) {#tc8ef284}

Subfont Definition (SFD) ファイルは、CJK-LaTeX パッケージを利用して、8-bit TeX エンジンで日中韓などの言語を処理する際に使用されるファイルです。従来の TeX では、ひとつのフォントあたりで利用できる文字数が、256 までと限られているため、CJK-LaTeX ではそれ以上の文字を含むフォントを、複数の 256 文字までのフォントの集まりに分解して利用します。例えば、

```
   文字コード 0x0000 - 0x00ff を　font01
   文字コード 0x0100 - 0x01ff を　font02
   …
```

という風に。Unicode.sfd がインストールされていれば、それを見てみましょう。

```
   00  0x0000_0x00FF
   01  0x0100_0x01FF
```

というような行がたくさん並んでいるはずです。意味はそのまま、フォント fnt00　（fnt は任意のフォント名）は文字コード 0x0000　から 0x00FF までをカバーします。SFD ファイルはこのように、フォントの分割のルールを記述します。PDFTeX や dvipdfmx でも利用されます。

## CTAN にないフォントを利用する（日本語フォント） {#x7933273}

使いたい日本語フォントを使うことは、簡単とも難しいとも言えます。これは日本語フォントのデザイン上の都合に起因します。全角などの固定幅とプロポーショナル幅の明確な区別の存在です。全角幅の文字のみで良いのであれば話は簡単ですが、プロポーショナル仮名や従属欧文などプロポーショナル幅の文字も使いたい場合は話は複雑になってきます。後者の場合、必要なファイル群を準備するには相応の知識と技術が必要になることがあります。

### 全角幅のみで良い場合 {#ob0802f3}

この場合、すべての文字幅はフォントによらず同じですので、フォントの違いは実質、（TeX　にとっては）名前の違いでしかありません。全角幅のみのフォントを使い分けるには、これまでは単純に、ドライバでの処理段階でフォントファイルの「すり替え」を行うことで対処していました。

### 従属欧文を使う（1） {#k2b08d18}

ここでは TrueType 系 OpenType フォントの場合を解説します。

TrueType 系のフォントで従属欧文を使うには、いくつかの手法があります。ひとつの簡単な方法は、単純にフォントを欧文フォントとみなし処理することです。TrueType 系 OpenType フォントの場合は、フォントファイルには欧文と和文の本質的な区別はありません。よって、欧文フォントの利用で用いた otftotfm などのツールと、同様の手法がそのまま使えます。例えば、Windows8.1 に付属している游明朝の従属欧文を使うには、

```
   otftotfm --no-type1 -e 7t -fkern -fliga yumin.ttf -n yuminp > yuminp.map
```

のようにして欧文用 TFM を生成し、それを通常の欧文フォントだと思って使えばいいだけです。

### 従属欧文を使う（2） {#wd7ba471}

（1）の手法で簡単に従属欧文を使うことができますが、PDF ファイルを開いてプロパティをみるとわかるように、欧文部分と和文部分が別フォントとして埋め込まれます。別にこれで問題があるわけではないのですが、ここではこれらを一つのフォントにまとめ上げる方法を紹介します。ここから先はやや高度で複雑な話題となります。

基本的な方針としては、VF を使って従属欧文フォントと和文フォントをひとつの　OFM （Omega Font Metric）にマップします。OFM は TFM の 16 bit 拡張版です。

% [全角半角メモ](</全角半角メモ/>)に、任意の和文フォント（プロポーショナル・半角部分含む）を使う試みのドキュメント（未完成；2006 年頃のもの）が見つかりました。「TeX とフォント」のほうに移植できるといいと思います。 -- アセトアミノフェン

## エラーへの対処 {#y1a465db}

ここではフォントを新たに導入する際に起こる問題への対処法について記述します。

フォント関連のエラーとしてありがちなのは、「フォントがない」や「フォントが見つからない」です。
単純なエラーですが、TeX やその関連プログラムは、フォントがない場合でもなんらかのフォールバックを試み、その結果、複雑なエラーメッセージを返すことがあるため、単純なものであることに気づかない場合があります。特にエラーメッセージに mktextfm や mktexpk などの文字列が含まれる場合は気を付けましょう。

mktextfm は TFM ファイルを生成するためのプログラムで、要求された TFM ファイルが存在しない場合に TeX により実行されます。

mktexpk　は PK フォントを生成するためのプログラムです。PK フォントは TeX で用いられるビットマップ形式のフォントで、出力ドライバはアウトラインフォントが存在しない場合はフォールバックとしてこれの生成を試みます。

上記ふたつのプログラムは、（[METAFONT](/METAFONT/) の時代ではない）現代では、たいがい失敗します。

どのようなプログラムでも、ないものはさすがにどうしようもありません。このようなエラーが出た場合にまず確認することは、本当にフォントが存在していないかです。とにかくまず kpsewhich プログラムでフォントの存在を確かめましょう。cmr10 （Computer　Modern Roman 10pt） の TFM がどこにあるか確かめるには、

```
   kpsewhich cmr10.tfm
```

あるいは

```
   kpsewhich -format tfm cmr10
```

とします。kpsewhich プログラムは Kpathsea ライブラリに含まれるプログラムです。

Kpathsea ライブラリは TeX とその関連プログラムが、要求されたファイルをシステムから検索する際に利用するライブラリです。TeX は膨大な量のリソースから成り立ち、[ディレクトリ構成](</TeX のディレクトリ構成/>)も複雑なものとなります。このため、様々な関連プログラムが、統一されたやり方でシステムからリソースを探し出す枠組みが必要なのです。

kpsewhich がそのファイルを見つけられないということは、ファイルが少なくとも TeX の検索パスの中には存在していないことを意味します。ファイルが確かにある場合は見つけられる場所に置きましょう。TFM ファイルの検索パスがどう設定されているのか知るには

```
   kpsewhich -show-path=tfm
```

のようにします。

参考文献

- [(La)TeX font errors cheat sheet](http://www.ctan.org/tex-archive/info/tex-font-errors-cheatsheet)
