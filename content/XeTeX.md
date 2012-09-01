---
title: "XeTeX"
url: "/XeTeX/"
date: 2006-06-06T23:57:52Z
pukiwiki: "XeTeX"
---

# XeTeX

## [XeTeX](http://scripts.sil.org/xetex) {#a81f78a6}

<!-- RIGHT:&size(50){X};&size(30){Ǝ};&size(50){T};&size(30){E};&size(50){X};~ -->

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/XeTeX_Logo.svg/200px-XeTeX_Logo.svg.png" alt="XeTeX" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### XeTeX とは {#v9b12e60}

[The XeTeX typesetting system](http://scripts.sil.org/xetex)
は UTF-8 ベースの TeX。 <!-- 入力ファイルは UTF-8 ベースだが，内部動作は UTF-16 ベース。 -->
「ズィーTeX」と読む。

- [The XeTeX typesetting system](http://scripts.sil.org/xetex) （本家）
- [XeTeX - TeX Users Group](http://www.tug.org/xetex/) (TUG)
- [XeTeX Info Page](http://www.tug.org/mailman/listinfo/xetex) (TUG)
- [The XeTeX Archives](http://tug.org/pipermail/xetex/) (TUG)
- [XeTeX - Unicode-based TeX](http://xetex.sourceforge.net/) (SourceForge)
    - [http://xetex.git.sourceforge.net/git/gitweb.cgi?p=xetex/xetex](http://xetex.git.sourceforge.net/git/gitweb.cgi?p=xetex/xetex)

#### 概要 {#n5d8d950}

Mac OS X 上で開発され，システムが認識する OpenType フォントをそのまま使える。<br>
Linux 版もある。W32 版は Linux 版を移植したものである。 Linux と W32 では，
使えるフォントは OS が認識しているものと言うより，FontConfig が認識して
いるものと言ったほうが正確である。<br>
なお，バージョン 0.995 以降[^1]では，

```
[FontFileName:FaceIndex]:features
```

なるフォントの指定法も可能になり，FontConfig とは無関係に， Kpathsearch
が見つけることができるところにある “Uninstalled fonts” を native fonts
として使用することもできるようになっている。例えば

```
\font\x="[msmincho.ttc:1]:mapping=tex-text,color=0000FF" at 12pt
```

は

```
\font\x="MS PMincho:mapping=tex-text,color=0000FF" at 12pt
```

と同じように振舞う。FaceIndex は不要の場合は省略できる。
前者の方が FontConfig に関係しないので，
早く処理できるかもしれない。

デフォルトではタイプセット時に，パイプによって出力がドライバに送られ，
最終出力は PDF となる。
オプション “--no-pdf” によってこれを 2 段階に分けることもできる。
この場合は .xdv ファイル
（.dvi ファイルを拡張したもの）を出力する。.xdv ファイルをドライバによって
PDF に変換する。 xdv2pdf は Mac 専用のドライバであって，他では利用できない。
Linux と W32 では，汎用の xdvipdfmx というドライバを用いる。これは
dvipdfmx を XeTeX 用に拡張したものである。
xdv2pdf は OS X を有効利用するドライバだが，仮想フォントを読むことが
できないので，通常の tfm, vf 形式の TeX, LaTeX 用フォントも利用する場合には
OS X であっても xdvipdfmx を使うことになる。
また、上記の “Uninstalled fonts” を使う機能も，ドライバに xdvipdfmx を使う
場合だけ有効である。直接 PDF を出力する場合には

```
xelatex --output-driver='xdvipdfmx -q -E' foo
```

のようにすると，デフォルトのドライバを変更して xdvipdfmx
を使うようにできる。なお OS X 用の XeTeX には最新の 0.995 以降の
ものにしか xdvipdfmx は含まれていない。<br>
バージョン 0.997 以降[^2]では、 OS X 用のデフォルトのドライバも xdvipdfmx になった。<br>
パッケージに同梱されている graphics.cfg と color.cfg は xdv2pdf 用の設定が
なされている。従って Linux と W32 では，
graphics パッケージや color パッケージなどを使用するとき，必ず \[xetex\]
オプションを付加しておくのを忘れてはいけない。<br>
ただし，Jonathan Kew さんに
より，Mac と Linux-W32 とでインターフェイスを統一する仕事がなされており，
最新版の xdvipdfmx と XeTeX を W32 版でテストしてみると，
デフォルトのままで xetex.def を使えるようになっている。

しおり等の PDF 文字列に関しては，オリジナルの dvipdfmx では 適切な CMap
を指定することで Big Endian UTF-16 with BOM に変換するようになっていた。
xdvipdfmx でもこの機能はそのまま使えるが，UTF-8 で入力する XeTeX においては
単に UTF-8 を Big Endian UTF-16 with BOM に変換するだけでよいので，
より簡単な実装が可能である。
実際にこの機能が実装されていて，特別に何もしなくても日本語しおり等を作ることができる。

### OS X でのインストール {#x46670ed}

#### TeX Live {#r40835b3}

[MacTeX &amp; TeX Live](/Mac/#f5466652) をインストールすると XeTeX がインストールされます．

<!-- ***teTeX [#dacf7872] -->
<!-- [[ptetex:http://www.nn.iij4u.or.jp/~tutimura/tex/ptetex.html]] -->
<!-- をインストールした Mac OS X 10.4.x でインストールしてみた。 -->
<!-- 本家から XeTeX_0995.dmg をダウンロードし，ダブルクリックして現れる XeTeX.pkg -->
<!-- をダブルクリックして先に進んでいくとエラーになる。 -->
<!-- インチキだが -->
<!--  -->
<!-- cd /usr/local/teTeX/bin -->
<!-- ln -s . powerpc-apple-darwin-current -->
<!--  -->
<!-- とするとインストーラが動く。 -->
<!--  -->
<!-- cd /usr/local/teTeX/share -->
<!-- mv texmf.local texmf-local -->
<!-- cd texmf-local -->
<!-- ln -s ../texmf-var/fonts/map/dvips/updmap dvips -->
<!--  -->
<!-- /usr/local/teTeX/share/texmf/tex/generic/config/language.dat -->
<!-- の “The following languages are disabled by default.” と -->
<!-- 書いてあるところ以降にある magyar huhyphn.tex という行を “%! ” でコメントアウトし -->
<!--  -->
<!-- fmtutil - -byfmt xetex -->
<!-- fmtutil - -byfmt xelatex -->
<!--  -->
<!-- 最新の 0.995 (Web2C-7.5.5, Kpse-3.5.5) は TDS 1.1 なので， -->
<!-- もっとスムーズにインストールできるのではないかと思われる。 -->

### Windows でのインストール {#j287e7c2}

#### W32TeX {#qa9dfa1c}

<!-- XeTeX for W32 のインストール方法 -->

cf. [qa:43295](https://okumuralab.org/~okumura/texfaq/qa/43295.html)

最新の web2c-w32.tar.xz を入手して，TeX のインストール
トップディレクトリで展開して下さい。この中に xetex をサポートする
fmtutil.cnf と texmf.cnf が入っています。

xetex-w32.tar.xz を TeX のインストールトップディレクトリで展開して下さい。

TopDir/share/texmf/fonts/conf に移動し，（つまりカレントディレクトリとし）
そこにある fonts.conf というファイルを編集します。
編集するのは “Find fonts in these directories” というセクションだけです。
そこにはデフォルトで， Windows のシステムフォントディレクトリだけが

```
    <dir>c:/windows/fonts</dir>
```

として入れてありますから，このままで良い場合は編集する必要はありません。
ディレクトリの名前が違う場合には変更する必要があります。 <!-- Windows 2000 だと c:/winnt/fonts となりますが， --> <!-- Windows 2000 も最近はメジャーではなく Windows XP の方が一般的でしょうか。 -->
Windows のシステムフォントディレクトリの他に，購入したフォントのディレクトリがあれば，
以下の例のように追加することができます：

```
    <dir>c:/windows/fonts</dir>
    <dir>c:/w32tex/share/texmf-local/fonts/opentype</dir>
    <dir>c:/w32tex/share/texmf-local/fonts/truetype</dir>
```

コンソール上で

```
    fc-cache -v
```

なるコマンドを実行して下さい。これはフォントディレクトリにある各ファイルを
スキャンして，キャッシュファイルを作成するコマンドです。サブディレクトリ
は自動的にサーチされます。
キャッシュファイルは，TopDir/share/texmf/fonts/cache に作成されます。
大きいフォントファイルが大量にあると，このコマンドは終了までに数分かかる
ことがありますから，気長に他の仕事をしていて下さい。

以上でインストールが終了します。使用可能フォント名は，通常のものが使えます。
名前を見たい場合は，

```
   fc-list >namelist.txt
```

とすると， namelist.txt に記録されます。
ただし UTF-8 で記録されますから，もし Shift_JIS で見たかったら

```
   nkf -s namelist.txt >namelist.sj
```

とすれば良いでしょう。あるいは最初に

```
   fc-list | nkf -s >namelist.sj
```

とすると，直接 Shift_JIS のファイルになります。
ただし，nkf でコード変換した結果のフォント名をそのまま使うと，
エラーになることがあります。その理由は例えば 1 バイト仮名が
nkf によって 2 バイト仮名に変換されたりするからです。漢字フォント名を
使うときは，UTF-8 が読めるエディタで fc-list の生の出力を見る必要があります。
通常はアルファベットの名前のほうが入力も簡単でしょう。

#### TeX Live {#j68a945d}

TeX Live をインストールすると XeTeX がインストールされます．

### 入力用エンコーディング {#dd951bae}

XeTeX はデフォルトではファイルを UTF8 として読み込みますが、

```
\XeTeXinputencoding (エンコーディング名)
```

の指定により、ファイルのそれ以降の部分をそのエンコーディングで読み込みます。グルーピングの影響は受けません。特に重要なのは

```
\XeTeXinputencoding "bytes"
```

で、これにより、 XeTeX はファイルを 1 バイトずつ、文字コードの解釈を行わずに読み込むようになるので、 8 ビットのハイフネーションパターンや、 inputenc, CJK 等の 8 ビットの TeX を前提としたマクロも (原理的には) 使用できるようになります。

エンコーディングの解釈には、 ICU ライブラリが使われるので、 iconv の規則とは異なり、

```
\XeTeXinputencoding "SJIS"
```

と

```
\XeTeXinputencoding "CP932"
```

はどちらも 0x5c を円記号では無くバックスラッシュとして、解釈してくれるようです。

### TECKit {#k7b5869f}

XeTeX には単純だけれども結構強力な入力フィルタ TECKit が内蔵されており、ソースコード中のある文字列を別の文字列に変換してから、 TeX に処理させることができます。
使用するフィルタはフォント毎に指定します。

- 歴史的な事情から TeX では、ある種のキーボードでの直接入力が困難な文字、例えば、“は\`\`、”は''、—は---、と言った具合に tfm ファイルのリガチャーとして、 ASCII 転写で入力できるようになっています。このような表記を含む既存の tex ファイルのコンパイルを可能にするためには、フォントの指定に修飾詞 mapping=tex-text を付け加えます。(fontspec パッケージを使用するならば、オプション Mapping=tex-text を付け加えます。)
- arabxetex は TECKit のフィルタを用いて、 arabTeX 互換の ASCII 転写入力を可能にするパッケージです。これにより、例えば、単一のソースから、母音を表示せずにタイプセットした物と、表示してタイプセットした物、更にはローマ字転写の出力を得ることができます。

### スマート・フォント {#ne48456f}

和文や欧文などの『単純』な表記システムのタイプセットでは、グリフを組方向のメトリックに従い平行移動しながら配置することで、ほぼ、事が足ります。
しかし、もちろん、これだけでは、和文の縦組での約物、囲み文字や字間空き、欧文の詰め、合字やアクセント記号の位置調整など、処理しきれない事項もあります。
伝統的な TeX では、これらの処理の多くは tfm に実装されてきました。
しかしながら、世界には、それほど『単純』ではない表記システムもあります。

- アラビア文字やシリア文字など、続け書きをする文字では、単語内の位置によって、同じ文字でもまったく異なる形態をとります。セム系の表記システムでは母音は通常表示しませんが、もし、表示するならば、欧文のアクセントのように位置調整がかかせません。
- インド・東南アシア系の文字では、同一音節内の子音の発音順と表記順が必ずしも一致しません。タイ文字とラオス文字を除き、コンピュータで扱う文字列は発音順なので、タイプセットの際には並べ替えが必要になります。これらの子音が一次元的に並べられるのでは無いことも問題です。更に、これらの表記システムでは、従属母音は実際には子音がデフォルトに持っている母音の変音記号であり、欧文のアクセントのように位置調整がかかせません。ユニコードでは、インド・東南アシア系の文字の従属母音を独立した文字として扱うため、子音字との複雑な並べ替え (時には一つの母音が複数の要素に分裂して子音字を挟み込む) が必要になります。
    こう言った『複雑』な表記システムを取り扱う際には、伝統的な TeX では、外部プログラムをプリプロセッサとして使ったり、複雑なマクロで処理してきました。

TeX 以外のシステムでも、このような『単純』な平行移動しながらの配置では済まない文字組を行う必要は当然あります。それには処理に必要な情報をフォントに実装した、スマート・フォント技術が使われることが多くなってきています。

XeTeX は tfm には依らずにタイプセットを行うために、様々なスマート・フォント技術をサポートしています。スマート・フォント技術では、同じ文字でも使用されるコンテクストによって、異なる扱いが必要になるため、 XeTeX では従来の TeX とは異なり、一つ一つの文字を個別に処理するのでは無く、文字列ブロック毎にまとめて処理するアプローチがとられています。次のソースを XeLaTeX でコンパイルして見てください。

```
\documentclass{article}
\usepackage[cm-default]{fontspec}
\TeXXeTstate=1
\begin{document}
\beginR
A quick brown fox jumps over the lazy dog.
\end{document}
```

\beginR は [e-TeX](/e-TeX/) のプリミティブで文字を右から左方向に組んでいきます。結果は

```
.god yzal eht revo spmuj xof nworb kciuq A
```

となるはずです。この文書では tfm ベースの Computer Modern フォントが使用されています。ここで、

```
\usepackage[cm-default]{fontspec}
```

の行を

```
\usepackage{fontspec}
```

にすると、デフォルトのフォントが Latin Modern OpenType になります。それをコンパイルすると、結果は

```
dog. lazy the over jumps fox brown quick A
```

となるはずです。つまり、 XeTeX は空白文字で区切られた単語を一塊のブロックとしてタイプセットしているわけです。

#### AAT (Apple Advanced Typography) フォント {#gab9966e}

わしゃ知らん

#### OpenType フォント {#e81236d3}

OpenType フォントはフォントファイルの以下のテーブルにスマート・フォント機能を実装しています。

<table>
<tbody>
<tr><td>BASE</td><td>ベースラインの設定用データ。現在 XeTeX ではアクセスできない。</td></tr>
<tr><td>GDEF</td><td>以下のテーブルのスマート・フォント機能の実装を簡単にするためのグリフ分類用データ。ユーザーが明示的にアクセスする必要はない。</td></tr>
<tr><td>GPOS</td><td>組み版方向への単純なグリフメトリックだけでは実現できない、状況に応じた。位置調整用のデータ。</td></tr>
<tr><td>GSUB</td><td>状況に応じた。グリフ置換用のデータ。</td></tr>
<tr><td>JSTF</td><td>行頭、行末をそろえる際の(フォントのデザインに応じた)微調整用のデータ。現在 XeTeX ではアクセスできない。</td></tr>
</tbody>
</table>

OpenType フォントの各テーブルは文字種と言語ごとにアクセスできます。

スマート・フォント技術としての OpenType の特徴はユニコード規格で定められている、文字種に共通の表記上の規則、例えば、アラビア文字やシリア文字のコンテキストによる字形、インド・東南アジア系文字の並べ変え等は、レンダラが知識として持っていることを仮定し、フォントには、そのフォントのデザイン固有のデータのみを格納するとの立場がとられていることです。

- Adobe-Japan-1 のフィーチャ
    Adobe-Japan-1 は cyrl (キリル文字)、 grek (ギリシャ文字)、 hani (漢字)、 kana (かな)、 latn (ラテン文字) の 5 種類の文字種をサポートします。文字種の違いによる、振舞の違いは無いので、どの文字種を指定しても結果は同じです。言語はデフォルトの言語のみのサポートなので、指定しても無意味です。以下のフィーチャの中には同時に使用することを想定していない物もあります。
    詳しくは[Mac OS Xの文字コード問題に関するメモ](http://d.hatena.ne.jp/NAOI/)を御覧下さい。
    - GPOS フィーチャ
        - halt
            句読点が半角幅で組まれるようにします。
        - kern
            欧文のカーニングを有効にします。かな等も微妙に詰まります。
        - palt
            プロポーショナル幅の詰め組を実現します。
        - vhal
            縦組で halt と互換な機能を提供します。
        - vkrn
            縦組で kern と互換な機能を提供します。
        - vpal
            縦組で palt と互換な機能を提供します。
    - GSUB フィーチャ
        - aalt
            全ての字形切替えへのアクセスを提供します。
        - afrc
            スラッシュで区切られた数字を分数に変換します。
        - ccmp
            親字に変音記号を合成します。
        - dlig
            選択的に有効化される合字を使用します。
        - dnom
            数字を分母用のサイズに変換します。
        - expt
            公的な規格の例示字形には合致しないものの、伝統的に印刷字形として使われてきた漢字字形を選択します。
        - frac
            スラッシュで区切られた数字を分数に変換します。
        - fwid
            英数字を全角幅にします。
        - hkna
            横書に最適化されたデザインのかなを使用します。
        - hojo
            JISX-0213 (2000) または JISX-0213 (2004) の字形をJISX-0212 (1990) の字形に切替えます。
        - hwid
            半角幅の文字を選択します。
        - ital
            欧文用文字をイタリック体にします。
        - jp04
            国語審議会の常用漢字表外字印刷標準字形に関する答申に基づいて行われた JISX-0213 (2004) の例示字形変更を実現します。
        - jp78
            JISX-0208 (1990) の字形をJISX-0208 (1978) の字形に切替えます。
        - jp83
            JISX-0208 (1990) の字形をJISX-0208 (1983) の字形に切替えます。
        - liga
            デフォルトで使用することが望ましい合字を有効化します。多くの本来は ccmp にすべき合成処理が何故かここに置かれているようです。
        - nalt
            囲み文字に変換します。
        - nlck
            国語審議会の常用漢字表外字印刷標準字形に関する答申に基づく字形に変更します。
        - numr
            数字を分子用のサイズに変換します。
        - pkna
            未登録のタグですが、詰め組に最適化されたデザインのかなに切替えるようです。
        - pwid
            英数字を可変幅にします。
        - qwid
            四分角幅の數字を選択します。
        - ruby
            ルビ用に最適化されたデザインのかなを使用します。
        - sinf
            数字を主に科学技術で使われる下付き添字に変換します。
        - sups
            数字を主に合印に使われる上付き添字に変換します。
        - trad
            新字体の漢字を旧字体に変換します。
        - twid
            三分角幅の數字を選択します。
        - vert
            句読点や括弧類を縦書にふさわしいような字形に切替えます。
        - vkna
            縦書に最適化されたデザインのかなを使用します。
        - vrt2
            欧文用文字等を縦書にふさわしいように予め回転した字形に切替えます。
        - zero
            0 にスラッシュをつけて O, o と区別できるようにします。

いろいろ実験してみましょう。

```
\documentclass{article}
\usepackage{graphicx,geometry,fontspec}
\geometry{margin=1in}
\def\showfeature#1#2{\mbox{\XeTeXinterchartokenstate=0#2\hspace{0.5em}\rotatebox[origin=tl]{-90}{\addfontfeature{RawFeature=vertical:}#2}\hspace{0.5em}{\addfontfeature{RawFeature={#1}}\rotatebox[origin=br]{-90}{\addfontfeature{RawFeature=vertical:}#2}#2}}}
\parindent=0pt
\begin{document}
\fontspec[Script=Kana]{Kozuka Mincho Pro-VI}
\showfeature{+dlig,+afrc}{1dl=1/10リットル}\hfill
\showfeature{+afrc}{1/2=1/3+1/6}\hfill
\showfeature{+frac}{1/2=1/3+1/6}\hfill
\showfeature{+trad=0}{闘鶏}\hfill
\showfeature{+trad=1}{闘鶏}\hfill
%%横書/縦書用のフィーチャーを組み版方向と一致させずに適用するとおかしな事になる。
\showfeature{+palt}{一月一日}\hfill
\showfeature{+vpal}{一月一日}\\[20pt]
{\obeylines\XeTeXinterchartokenstate=0\addfontfeature{RawFeature=+ccmp}%
ピㇼカ　チカㇷ゚ポ！　 カムイ　チカㇷ゚ポ！
ケケ　ヘタㇰ,　アタㇱ　ワ　トアン　チカㇷ゚ポ
カムイ　チカㇷ゚ポ　ツ゚カン　ワ　アンクㇽ,　ホㇱキウㇰクㇽ
ソンノ　ラメトㇰ　シノ　チパパ　ネ　ルヱ　タパン}\\[20pt]
\count255=0
\loop\ifnum\count255<23{\addfontfeature{RawFeature={+aalt=\the\count255}}辺}\advance\count255by1\repeat\\[20pt]
\count255=0
\loop\ifnum\count255<7{\addfontfeature{RawFeature={+nalt=\the\count255}}イロハ }\advance\count255by1\repeat
\end{document}
```

#### Graphite フォント {#k7cb7575}

Graphite は [SIL](http://scripts.sil.org/) で開発された、極めて強力なスマート・フォント技術で、レンダラにユニコード規格などの事前の知識を要求すること無く、すべてをフォントに実装されたデータに基づき、処理されます。このような、スマート・フォント技術が新たに開発されたのは、ユニコードには収録されていない文字や、縦令収録されていても、少数言語のタイプセットにはユニコードの規格に採用されている公式言語の規則とは異なる処理を必要とする文字があるからです。

```
\font\d="Doulos SIL/GR:1041=0:" at 40pt
\d
Ştiaţi că…?
\hfill
\font\d="Doulos SIL/GR:1041=1:" at 40pt
\d
Ştiaţi că…?

%%同じ事を OpenType でやってみる
\vskip40pt
\font\d="Doulos SIL/ICU:script=latn:language=dflt:" at 40pt
\d
Ştiaţi că…?
\hfill
\font\d="Doulos SIL/ICU:script=latn:language=ROM :" at 40pt
\d
Ştiaţi că…?

%%次は OpenType では実装されていない例。
\vskip40pt
\font\d="Doulos SIL/GR:1027=0:" at 40pt
\d
Монгол хэл
\hfill
\font\d="Doulos SIL/GR:1027=1:" at 40pt
\d
Монгол хэл
\bye
```

Graphite フォントの中にはビルマ文字の[Padauk Font](http://scripts.sil.org/Padauk)のように、ビルマ語、カレン語、モン語の文字の並べ変えや位置調整のみならず、改行規則まで実装したフォントもあります。 <!-- -Graphite フォントの作り方 --> <!-- Graphite フォントは GDL 言語で書かれたソースコードを Graphite コンパイラでコンパイルして TrueType または OpenType フォントにテーブルとして、埋め込むことで作成します。フォントに予め搭載されていたデータはまったく変更されませんが、フォントファイルは改変されるので、商用フォントの場合、ライセンスを確認してから行ってください。 -->

### 改行アルゴリズムの比較 {#yeeccfb4}

<!-- どなたか、修正加筆して頂くと嬉しいです。 -->

そもそも TeX で改行が可能な位置は、(数式と kern を無視して)単純化すると、
glue, penalty, discretionary break です。ハイフンは日本語に関係しないので、無視します。
文章中のどのような箇所に glue と penalty が現れるかというと、

1. ユーザーが直に書き込んだ場所、
1. マクロの展開の結果書き込まれる場所、
1. それ以外、

がありますが、ここでは、3. が問題となります。

- 古典的な 8 bit 版の TeX では、空白文字の箇所に TFM から読みとられた量の glue が自動的に挿入されます。
- pTeX では、更に、和字と和字の間に TFM (JFM) から読みとられた量の glue、または、 \kanjiskip が、和字とそれ以外の間に \xkanjiskip が自動的に挿入されます。また、禁則文字の前後には penalty が自動的に挿入されます。
    このグルーの挿入はマクロ展開後に行われます。
    更に詳しいことや、カスタマイズの方法については、[pTeX でのJIS X4051 の実装](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/japanese/ptex.html)を御覧下さい。

- XeTeX では、空白文字の箇所に加え、 \XeTeXlinebreaklocale が有効なロケールになっていれば、ユニコードの改行規則に基づいた改行可能箇所を内蔵の ICU ライブラリが捜し出し、 \XeTeXlinebreakpenalty と \XeTeXlinebreakskip が自動的に挿入されます。
    例えば、

    ```
    \XeTeXlinebreaklocale "th"
    \XeTeXlinebreakpenalty 0
    ```

    とすれば、タイ語で書かれたテキストを ICU ライブラリに内蔵された辞書を用いて、単語に分割し、その区切り目に、 0 のペナルティを挿入します。一方、上にも紹介されている

    ```
    \XeTeXlinebreaklocale "ja"
    \XeTeXlinebreakskip=0em plus 0.1em minus 0.01em
    ```

    は、和字と和字の間や和字とそれ以外の間に、少量の伸び縮みを許した幅 0 の空白 (glue) を挿入することを指示します。この際、行頭禁則文字の直前と、行末禁則文字の直後は、ユニコードの改行規則では改行可能であると認識されないので、このような場所には何も挿入されません。

このようにして、各言語毎の規則で設定された改行可能箇所から、その段落の最も適切な改行箇所を見つけ出すのは、 TeX の役割です。
0.997 以降では、更に、 \XeTeXinterchartokenstate が正の値になっていれば、 \XeTeXcharclass の概念が有効になり、 \XeTeXcharclass が A の文字と \XeTeXcharclass が B の文字との間にはトークンレジスタ

```
\XeTeXinterchartoks A B
```

が自動的に挿入されます。このトークンレジスタに改行を可能にする glue や penalty に展開される内容が入っていれば、ここも改行可能箇所になります。
このグルーの挿入はマクロ展開前に行われます。
\XeTeXcharclass は 0 -- 255 の任意の整数ですが、 255 だけは特別な意味を持ち、文字列の境界を表します。例えば、行末。行頭、インラインの数式、 hbox などです。 FMT ファイルで、\XeTeXcharclass の値は

- 分かち書きされる通常の文字は 0
    - 漢字と仮名は 1
    - 開き括弧は 2
    - 閉じ括弧と句読点は 3
    - 結合文字は 256 (無効な値、 \XeTeXinterchartoks の挿入を不可能にするため。)
        に初期化されます。これらの文字の分類は、
        [Line Breaking Properties](http://www.unicode.org/reports/tr14/)
        に基づいて行われますが、 0 以外の値が設定されるのは、
        [East Asian Width](http://www.unicode.org/reports/tr11/)
        の定義で、 Full Width, Half Width, Wide のいずれかの属性を与えられた
        文字に限られます。更に、

        ```
        \gdef\xtxHanGlue{\hskip0pt plus 0.1em\relax} % between ideographs
        \gdef\xtxHanSpace{\hskip0.2em plus 0.2em minus 0.1em\relax} % before/after runs of CJK

        \global\XeTeXinterchartoks 0 1 = {\xtxHanSpace}
        \global\XeTeXinterchartoks 1 0 = {\xtxHanSpace}
        \global\XeTeXinterchartoks 1 1 = {\xtxHanGlue}
        \global\XeTeXinterchartoks 1 2 = {\xtxHanGlue}
        \global\XeTeXinterchartoks 1 3 = {\nobreak\xtxHanGlue}
        \global\XeTeXinterchartoks 2 1 = {\nobreak\xtxHanGlue}
        \global\XeTeXinterchartoks 3 1 = {\xtxHanGlue}
        ```

        等と、トークンレジスタも設定されていますが、これらは自由に再設定できます。
        pTeX に於ける \inhibitglue に相当する処理が必要ならば、 \relax を使えばよいでしょう。 (ただし、通常の文字とクラス 255 の文字との間に 0 ではないグルーが挿入されていない前提です。)

一例として、行末禁則文字の \XeTeXcharclass を 4 に設定するには、

```
\@for\Kinsoku:={`＃,`￥,`＄,`＆}\do{\XeTeXcharclass\Kinsoku=4}
```

とします。 \XeTeXinterchartoks 4 1 等を適切に定めれば、これらの文字の直後での改行を抑制できます。
\XeTeXinterchartoks にはフォントの切替え命令を設定することもできます。これにより、 dvi ドライバではなく、 TeX 側に於ける、バーチャルフォントが実現できます。
なお、このメカニズムにより、文字間にトークンを挿入すると、内蔵の ICU ライブラリによる解析の対象は個別の文字になってしまうので、 \XeTeXlinebreaklocale の設定は無意味になります。
同様に、 OpenType フォントの持つ、コンテクスト依存の文字置換や、リガチャーを使用する際にも、 \XeTeXinterchartokenstate=0 としなければなりません。

```
{\XeTeXinterchartokenstate=0\fontspec[Script=Kana,RawFeature=+dlig]{Kozuka Mincho Pro-VI}ミリバール}
```

### fontspec パッケージ {#z2a31516}

fontspec は NFSS のフォントファミリーの定義を容易に行うためのマクロパッケージです。

```
\fontspec[オプション]{フォント名}
```

は現在使用中のフォントファミリーを変更します。

```
\setmainfont[オプション]{フォント名}
```

は \rmdefault を変更します。

```
\newfontfamily\myfontfamily[オプション]{フォント名}
```

は新しいフォントファミリー \myfontfamily を定義します。

```
\documentclass{article}
\usepackage{graphicx,geometry,fontspec}
\geometry{margin=1in}
\parindent=0pt
\pagestyle{empty}
\begin{document}
\fontspec{Lido STF}
\textit{\textbf{A}} quick brown \textbf{fox} jumps over the lazy \textit{dog.}
\end{document}
```

をコンパイルして、埋め込まれたフォントを見てみると、

```
>pdffonts test.pdf
name                                 type         emb sub uni object ID
------------------------------------ ------------ --- --- --- ---------
ABHBIS+LidoSTF-BoldItalic-Identity-H CID Type 0C  yes yes yes      5  0
WGMDOS+LidoSTF-Identity-H            CID Type 0C  yes yes yes      7  0
XSCVIF+LidoSTF-Bold-Identity-H       CID Type 0C  yes yes yes      9  0
ZUDXAP+LidoSTF-Italic-Identity-H     CID Type 0C  yes yes yes     11  0
```

とファミリー内での、シリーズやシェイプの変更も正しく処理されていることが分かります。しかし、もし、

```
\fontspec{[LidoSTF.otf]}
```

とファイル名でフォントを指定したのでは、ファミリー内のすべてのフォントは LidoSTF.otf になってしまいます。このような場合はオプションで、

```
\fontspec[BoldFont={[LidoSTFBold.otf]},ItalicFont={[LidoSTFItalic.otf]},BoldItalicFont={[LidoSTFBoldItalic.otf]}]{[LidoSTF.otf]}
```

と自分でフォントを指定しなければなりません。

非欧文フォントでは、残念ながら、縦令フォント名を使用して font-config にフォントを探させても、誤ったフォントを選んでしまうことが多いので、自分でファミリーを構成するフォントを指定した方が安全です。

### 実行例 {#n6a9a656}

簡単なサンプル test.tex を UTF-8 で書く：

```
\documentclass{article}
\begin{document}
Hello, \TeX !
\font\foo="ヒラギノ丸ゴ Pro W4"
\foo 日本語
\end{document}
```

これで xelatex test とすると，test.pdf ができる。 <!-- 日本語 OpenType フォントを使用する場合，デフォルトで詰め組になってしまうので， --> <!-- ベタ組をするためには，Proportional Alternative (palt) フィーチャーを --> <!-- 無効にしている。 --> <!-- 0.996 以降では、詰め組はデフォルトではなくなりました。 -->
ただしこれでは

```
，「
```

のような約物の連続で間延びして，逆に使い物にならない。 <!-- 以下のコメントは 0.997 がリリースされた今では時代遅れ。 --> <!-- これはフォント自身がそのようにデザインされているのだから、XeTeXの責任ではない。 --> <!-- \font\foo="ヒラギノ丸ゴ Pro W4:-palt" --> <!-- \font\bar="ヒラギノ丸ゴ Pro W4:+palt" --> <!-- \catcode`「\active --> <!-- \catcode`」\active --> <!-- \ifcase0 --> <!-- %%% 詰め組 (これをやると、フォントが切替えられてしまうので、前後で改行できなくなる) --> <!-- \def「{{\bar\char`「}} --> <!-- \def」{{\bar\char`」}} --> <!-- \or --> <!-- %%% 半角文字に置換 --> <!-- \def「{｢} --> <!-- \def」{｣} --> <!-- \or --> <!-- %%% CID番号で指定 (これをやると、禁則対象文字かどうか判らないので前後で改行できなくなる) --> <!-- \def「{\XeTeXglyph12070} --> <!-- \def」{\XeTeXglyph12071} --> <!-- \fi --> <!-- いや，pTeXで必ず詰めているわけではなく，「，」の次に「「」が来るようなときに限って詰めているわけです。こういう2文字の連鎖を見ることのできない現状のXeTeXでは日本語をまともに組むことはできず，それならばむしろpTeXで難しいプロポーショナル組にXeTeXを使うほうがデモとしてはおもしろいわけです。 --> <!-- 了解致しました。真面目にマクロを組めば、連鎖を見ることができない訳ではないでしょうが。 --> <!-- それよりも、どなたか、多言語処理について、書いて頂いた方が良いのではないでしょうか？ --> <!-- 現状のXeTeXでも、アラビア文字や、ヘブル文字は勝手に右から左にタイプセットするし、 --> <!-- タイ語は(辞書が組み込まれていて)単語の切れ目を見付けて改行してくれるし、 --> <!-- インド系の、テキスト文字列の順序(発音順と同じ)と文字を書いていく順序の異なる文字は勝手に並び替えを行い、適切にリガチャーも処理してくれるし、なかなかおもしろいですよ。 --> <!-- ありがとうございます。まさにそうですね。 --> <!-- 通常の日本語、英文混合文書でも、指定フォントの1バイト欧文部分を --> <!-- 自然に利用できるので、ソースを若干気をつけて作る (行末が日本語の場合、 --> <!-- 継続文字 % をつける等) と、考えようによってはバランスのよいものに --> <!-- なると思います。 (fontspec package の例) : --> <!-- \setromanfont[Mapping=tex-text,BoldFont={Kozuka Mincho Pro B}]{Kozuka Mincho Pro R} -->

日本語のルールに則って行分割をするには次のようにする。

```
\XeTeXlinebreaklocale "ja_JP"
\XeTeXlinebreakskip=0em plus 0.1em minus 0.01em
\XeTeXlinebreakpenalty=0
```

元に戻すには次のようにする。

```
\XeTeXlinebreaklocale ""
```

ただし XeTeX は日本語の組版ルールをよく知っているわけではないので，
現状ではまともではない。
しかし筋が良いソフトだけに日本人が開発に協力すれば [pTeX 相当の処理](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/japanese/ptex.html)が加えられるのではないかと期待する。

### 参考サイト {#m6b448cf}

- \[[XeTeX\]記事一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=%2A%5BXeTeX%5D) (ZR (八登 崇之) さん)
- [「XeTeX」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=XeTeX)
- [En toi Pythmeni tes TeXnopoleos \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/)
- [「はじめてのLaTeX」サポート: MiKTeXでXeTeXで日本語を](http://supportdoc.net/support-latex/xetex.html)
- [インド学仏教学における UTF-8 による TeX 文書作成 (4)](http://skalldan.wordpress.com/2011/08/01/%E3%82%A4%E3%83%B3%E3%83%89%E5%AD%A6%E4%BB%8F%E6%95%99%E5%AD%A6%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B-utf-8-%E3%81%AB%E3%82%88%E3%82%8B-tex-%E6%96%87%E6%9B%B8%E4%BD%9C%E6%88%90-4/)
- [XeTeXに関するメモ](http://math.kyokyo-u.ac.jp/users/skiriki/) (桐木さん)
- [XeLaTeX &laquo; A blog about LaTeX, Linux and FreeBSD](http://alexkrispin.wordpress.com/category/latex/xelatex/) (Alex Krispin さん)
- [XeLaTeXでレポートかきたい。](http://pushl.hatenablog.com/entry/2012/05/27/000233)
- [Imported from http://ustunozgur.blogspot.com - Filed under 'XeLaTeX'](http://import-chki.posterous.com/tag/xelatex)
- [Ubuntu日本語フォーラム / xelatex で日本語をかく仕方](https://forums.ubuntulinux.jp/viewtopic.php?id=9469)
- [人工知能基礎論](http://cl.naist.jp/~shimbo/courses.ja.html)
- [Arch Linux: xelatex で UTF-8 日本語ソースの .tex → .pdf](http://usagi.hatenablog.jp/entry/2012/01/21/052328)
- [XeLaTeXでLinux Libertineのイタリックが太すぎる件](https://galaxy.astro.isas.jaxa.jp/~yuasa/2012/05/17/xelatex%E3%81%A7linux-libertine%E3%81%AE%E3%82%A4%E3%82%BF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%8C%E5%A4%AA%E3%81%99%E3%81%8E%E3%82%8B%E4%BB%B6/)
- [XeTeX を使ってみよう（事故で全部消してしまったのでサービス停止中）](http://jupiter.math.kyushu-u.ac.jp/~norio/XeTeX/)
- [texlive2012を入れたら（distributionで更新された）、zxjatype.styが使い物にならなくなった。](https://plus.google.com/u/0/105432768476902391894/posts/hQLEK9BuSrj)
- [texlive2012のxeCJK.styに対応するzxjatype.styをでっち上げる！](https://gist.github.com/3156146)
- [Writing Japanese with XeTeX](http://kuniyoshi.fastmail.fm/xetex/)
- [Including Japanese Text](http://www.lewis.soc.hit-u.ac.jp/latex/including-japanese-text)

### コメント {#d0504266}

- 使用環境は Windows2000(SP4) です。ヒラギノは持っていないので「小塚明朝 Pro Acro R:-palt」で試したのですが「! Font \foo="フォント名は文字化けPro Acro R:-palt" not loadable: installed font not found.」と言われて失敗しました。代わりに「Kozuka Mincho Pro Acro:-pait」で成功しました。「MS P明朝」「みかちゃん_o」では成功。fc-list での namelist.txt で得られるフォント名一覧でフォント名には二番目の要素を使えば良いのかもしれません。 -- tony 2006-07-17 (月) 15:32:30
- 最新のものでは、 \[フォントファイル名\] という指定も可能になっています: 例: \font\f="\[KozMinPro-Regular.otf\]:mapping=tex-text,color=FF0000" -- kakuto 2006-08-18 (金) 10:53:19
- revision 424以降では、BMP以外の、つまり、U+10000以降の文字にも個別に\catcodeや\mathcodeを設定できるようになりました。 -- sm 2007-01-26 (金) 22:35:05

[^1]: ただし 0.995 でも xetex は git [commit bc9cdc1b83c8de0ad695cb03b8af89eb8642d7bc](http://xetex.git.sourceforge.net/git/gitweb.cgi?p=xetex/xetex;a=commit;h=bc9cdc1b83c8de0ad695cb03b8af89eb8642d7bc) 以降，xdvipdfmx は git [commit 91c0d241d0d4563eb81dfa0a1b41cbf4a6ceb0f5](http://xetex.git.sourceforge.net/git/gitweb.cgi?p=xetex/xetex;a=commit;h=91c0d241d0d4563eb81dfa0a1b41cbf4a6ceb0f5) 以降
[^2]: git [commit 5310cd6080a8e4694522d17852b472886af7bcfd](http://xetex.git.sourceforge.net/git/gitweb.cgi?p=xetex/xetex;a=commit;h=5310cd6080a8e4694522d17852b472886af7bcfd) 以降
