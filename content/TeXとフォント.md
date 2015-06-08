---
title: "TeXとフォント"
url: "/TeXとフォント/"
date: 2015-06-07T00:25:59Z
pukiwiki: "TeXとフォント"
---

# TeXとフォント

## TeX とフォント {#se78b0cf}

TeX におけるフォントの基礎知識や、LaTeX をはじめとしたシステム上でのフォントの利用等についての情報を提供します。

***

***

## はじめに {#r78a6606}

TeX あるいは LaTeX におけるフォントの利用については、なかなか思うようにいかなかったり、使いたいフォントがあってもどうしたらよいのか分からなかったりして、困った経験がある方も多いと思われます。

これは TeX におけるフォントの利用が、TeX が WYSIWYG でないために、直接的・直観的に把握するのが困難であったり、見通しの良いものではないことに起因します。TeX は一般に、ユーザが接する「フォント」そのものについては利用しません。そこから抽出した情報の一部を利用するのみです。TeX の仕事はページ上に文字を綺麗に並べることですが、その仕事には具体的な文字（グリフ）の形を知る必要はなく、文字のだいたいの大きさなどを知るのみで十分だからです。また、TeX の登場以降に広く普及することとなった、TrueType や PostScript フォントを直接、簡単に扱える枠組みを整えるといったことは、TeX のそのものに対する拡張としては行われませんでした。

このことは、例えば LaTeX で TrueType や PostScript などのフォントを利用する際に、かなりの手間と不思議なファイル群の導入や各種設定の必要性をもたらします。LaTeX で PostScript Type1 フォントを利用して出力を得る際のおおまかな流れは、

1. フォントファイルから組版に必要な情報を抽出する。（TFM ファイルの生成）
1. 上記で抽出した情報に、ある一定の規則でアクセスする設定を行う。（.fd ファイルの作成）<br>
    フォントファミリとエンコーディングやフォント属性のセットを指定することでフォント情報にアクセスできるようにします。

1. フォント情報と実際のフォントファイルとの対応付けを行う。（.mapファイルの編集）

といった感じです。

フォント設定の煩わしさを少しでも軽減したければ、[XeLaTeX](/XeTeX/) や [LuaLaTeX](/LuaTeX/) への移行を考えましょう。

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

があります。上付き・下付き数字（\textsu{}、\textinf{}）、スワッシュ・イタリック（\textsw{}）やいくつかの文字に関しては装飾付のものがあります（\textin{}）。数式用はありません。

CTAN のページは

- [http://www.ctan.org/tex-archive/fonts/ebgaramond](http://www.ctan.org/tex-archive/fonts/ebgaramond)

Google Fonts のページ

- [http://www.google.com/fonts/specimen/EB+Garamond](http://www.google.com/fonts/specimen/EB+Garamond)

### [Libre Baskerville](http://www.impallari.com/projects/overview/libre-baskerville) {#bd51fe97}

トラディショナルに分類されるフォントです。Libre Baskerville は Baskerville の活字をもとにしたフォントで、webfont としての利用を想定して設計されています。

CTAN および Google Fonts のページは

- [https://www.ctan.org/tex-archive/fonts/librebaskerville](https://www.ctan.org/tex-archive/fonts/librebaskerville)
- [https://www.google.com/fonts/specimen/Libre+Baskerville](https://www.google.com/fonts/specimen/Libre+Baskerville)

です。サポートする文字集合はラテン文字です。ボールドとイタリックも利用可能です。インストールしたのち、ターミナルから Map ファイルを有効にし

```
    updmap-sys --enable Map=LibreBaskerville.map
```

LaTeX ソースで

```
   \usepackage{librebaskerville}
```

しましょう。数式用はありません。

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

最新の TeX Live / W32TeX では，TeX と共に配布されている IPAex/IPA フォントの他，ヒラギノ，MS，小塚，モリサワ，游明朝・游ゴシックが簡便に指定できるようになっています。[OTF](/OTF/) パッケージを利用すると，5書体以上の多書体化もできます。

（ヒラギノは，Mac (OS X) では OS に付属していますが，Windows で利用する場合は別途購入する必要があります。）

### PDF 作成の都度，フォントを指定する方法 {#jcd55296}

dvipdfmx を使用して IPAex を埋め込んだ PDF を作成するには以下のようにします。

- W32TeX では

    ```
    dvipdfmx -f ipaex.map dviname
    ```

- TeX Live（MacTeX）では

    ```
    $ ptex2pdf -e -l -ot '-synctex=1' -od '-f ptex-ipaex.map' hoge.tex （pLaTeX 用）
    $ ptex2pdf -u -l -ot '-synctex=1' -od '-f uptex-ipaex.map' hoge.tex （upLaTeX 用）
    ```

### PDF に埋め込むフォントをあらかじめ設定する {#ge692ee0}

- TeX Live (MacTeX) では，ターミナルから kanji-config-updmap-sys で設定できます。

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

#### Mac (OS X) の場合に必要な事前準備 {#oabbd72a}

[TeX Live/Mac](</TeX Live/Mac/#i9febc9b>) を参照

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
\usepackage{newtx}
```

などとするだけで数式フォントを変えられます。

- [newtx](/newtx/)　newtx, newtxtt, newpx, boondox, fontaxes

<table><tbody>
<tr><td>newtx</td><td>Times を元にした txfonts の改良版</td><td><a href="http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/newtx.html">newtx の見本</a></td></tr>
<tr><td>newpx</td><td>Palatino を元にした pxfonts の改良版</td><td><a href="http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/newpx.html">newpx の見本</a></td></tr>
</tbody></table>

- [Mathptmx](/Mathptmx/)　本文，数式をともに Times に変えます。
- [mathabx](/mathabx/)　Computer Modern の上位互換で，記号類が改変・拡張されています。（[mathabx の見本](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/mathabx.html)）
- [yhmath](/yhmath/)　通常より大きいものまで含まれた根号や括弧などのフォントです。
- ceo.sty 　安田亨氏作。日本の高校教科書や大学受験で一般的な数式書体（CenturyOldStyle）や関連記号が含まれています。（[ceo.sty の見本](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/ceo.html)）
- euler　Zapf が作成し，Knuth が『コンピュータの数学』で用いた手書き風の数式フォントです。結城浩氏の『数学ガール』シリーズに用いられていることでも知られています。（[euler の見本](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/euler.html)）

## フォント関連ファイル {#tf6d4ac5}

ここでは主に LaTeX で文書を作成する際に必要となってくるフォント関連ファイルについて、基礎的な事柄を解説します。

### TeX Font Metric (TFM) {#z2f7e015}

TFM は組版を行うのに必要な、フォントに関する情報が納められたファイルです。AFM や PFM と似たようなものです。

大雑把にいうと3つの部分から成り立ちます。

1. 各文字のサイズに関する情報
1. 特定の文字と文字の組み合わせが起きた時の動作の指定（リガチャとカーニング）
1. 単語間スペースやアクセントの配置に関するパラメータなど

TeX の役割はある決まった大きさの領域に、文字という「箱」を詰め込んでいくことですが、それを行う際に基礎となる情報が文字サイズに関する情報です。リガチャとカーニングは連続した2つの文字に関する微調整です。

詳しい解説については

- David Fuchs　による解説 "[TeX Font Metric files](http://www.tug.org/TUGboat/Articles/tb02-1/tb02fuchstfm.pdf)", TUGboat 2 (1): 12–16.

を参照してください。（上記リンク先の PDF は低画質のスキャン画像です）

### Font Definition (.fd) {#nf0707eb}

LaTeX でフォントを使う際は、通常、フォントは属性の組で指定されます。例えば、cmr というファミリのメディアムウェイト・イタリック体を 10 pt のサイズで、エンコーディングは OT1、など。
Font definition ファイルの役割は、この属性の組で指定されたフォントを、TFM ファイルに結びつける事です。前述の例を cmti10 に結びつけるには、

```
   \DeclareFontShape{OT1}{cmr}{m}{it}{<10>cmti10}{}
```

のような宣言となります。

.fd ファイルはこのような宣言の集りです。通常、それぞれのエンコーディングとファミリの組ごとに用意されます。例えば、T1 エンコーディングの Latin Modern Roman ファミリでは、t1lmr.fd に様々な定義があります。

### フォントマップ {#tde4074f}

フォントマップ .map は、TFM ファイルと元のフォントファイルとの対応を記したファイルです。
PDF や PostScript などの最終的な出力を得る段階になって必要とされます。出力ドライバは、TeX が組版に用いた TFM が、実際にはどのフォントに対応しているのか知る必要があります。このファイルの書式はドライバごとに異なりますが、基本的な部分は同じです。

## CTAN にないフォントを利用する {#z14d6053}

LaTeX におけるフォントの基礎をおさえたら、実際にフォントを LaTeX で使えるようにしてみましょう。
ここでは OpenType フォントに絞って話を進めます。実例として、Microsoft Windows に入っている Constantia を使います。これは TrueType 系統の OpenType フォントです。

```
   C:\Windows\Fonts\
```

にある

```
   constan.ttf constanb.ttf constani.ttf constanz.ttf
```

がそれです。作業用フォルダを作り、とりあえずコピーしてきましょう。

### ツールのインストール {#qb371a3e}

LCDF Typetools を導入します。 [tlmgr](/tlmgr/) からインストール可能です。パッケージ名は lcdftypetools です。

LCDF Typetools のインストールができたら、とりあえず付属の otfinfo でフォント情報を見てみましょう。

```
   otfinfo -i constan.ttf
```

でフォントの情報が表示されます。どのような OpenType 機能が利用可能か見てみましょう。

```
   otfinfo -f constan.ttf
```

"kern" や "liga" などの基本的なもの、"onum"、"lnum"、"pnum"、"tnum"　など数字や "smcp"（スモールキャップ）、その他色々な機能があることがわかります。

それでは実際に LaTeX で使えるようにしてみましょう。

### TFM ファイルの生成 {#r85aade4}

まずは OT1 エンコーディング(-e 7t オプションでこれを指定しています）で試してみましょう。

```
   otftotfm --no-type1 -e 7t -fkern -fliga constan.ttf -n constan > constan.map
```

オプションの詳細についてはヘルプを参照してください。これで TFM ファイル constan.tfm　と .enc ファイルやマップファイル constan.map が生成されるはずです。[testfont](/testfont/) で実際使えることを確認しましょう。

```
   tex testfont
```

生成された DVI ファイルを処理するには

```
   dvipdfmx -f constan.map testfont
```

などとします。（いくらか警告が出て、いくつかの文字が欠落します。対処法については後述）

続けて イタリックも処理します。

```
   otftotfm --no-type1 -e 7t -fkern -fliga constani.ttf -n constani >> constan.map
```

そのほか、ボールドやボールドイタリックも処理します。スモールキャップも使いたければ、

```
   otftotfm --no-type1 -e 7t -fkern -fliga -fsmcp constan.ttf -n constan-sc >> constan.map
```

のようにします。

### Font Definition (.fd) ファイル {#d5a8cb68}

Font Definition ファイル、ot1constan.fd を作ります。とりあえず、最低限のものとして、

```
   \ProvidesFile{ot1constan.fd}
       [2015/06/08 font definitions for OT1/constan.]
   \DeclareFontFamily{OT1}{constan}{}
   \DeclareFontShape{OT1}{constan}{m}{n}{<->constan}{}
   \DeclareFontShape{OT1}{constan}{m}{it}{<->constani}{}
   \DeclareFontShape{OT1}{constan}{b}{n}{<->constanb}{}
   \DeclareFontShape{OT1}{constan}{b}{it}{<->constanz}{}
   \endinput
```

と書き込みましょう。LaTeX ソースで

```
   \fontfamily{constan}\selectfont
```

とすることで Constantia が使えるようになっているはずです。

### マップファイル {#ja3c2d3b}

マップファイル constan.map がすでに生成されているはずです。
