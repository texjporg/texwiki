---
title: "pTeXと多言語処理"
url: "/pTeXと多言語処理/"
date: 2011-03-28T18:53:52Z
pukiwiki: "pTeXと多言語処理"
---

# pTeXと多言語処理

## 初めに {#pfirasfd}

pTeX 上で多言語混在文書を扱う方法を
まとめたものとして，[稲垣徹さん](http://www2.tba.t-com.ne.jp/ing/)による
「[pTeX 3.1.4 と Babel 3.8](http://www2.tba.t-com.ne.jp/ing/babel.html#babel)」や
「[日本語 LaTeX による多言語処理 &mdash; CTAN directory](http://www2.tba.t-com.ne.jp/ing/ctan/ctanindex.html)」
が知られています。ただ，一部の言語，例えば中国語（&#x6c49;&#x8bed;［漢語］，
中文）・韓國語（&#xd55c;&#xad6d;&#xc5b4;）・タイ語などについては
取り扱っていませんし，個々のパッケージのインストール方法についても一部の
パッケージについては割愛しています。そこで稲垣さんが取り上げてくださることを
期待しつつ，補足情報のようなものを Wiki 上でまとめていこうと考えています。

この文書では基本的に Microsoft Windows を想定して書いていますが，UNIX 互換
OS などでも似たような方法でインストールできるかもしれません。
また，[安田功さんの解説](http://yasuda.homeip.net/tex/texinst2.html)は
UNIX 互換 OS での多言語環境構築において非常に参考になると思います。

### 参考—pTeX を使わない方法 {#o00569f3}

ちなみに，pTeX でなくても良い場合は，

1. [CJK パッケージ](/LaTeX-CJK/)
1. [Unicode パッケージ](https://mirror.ctan.org/macros/latex/contrib/unicode/)
1. 前二者の併用によるアプローチ
1. [Omega](http://omega.enstb.org/)
1. [XeTeX](/XeTeX/)

によるアプローチなどが考えられます。3. については FreeBSD
上で[安田さんの試み](http://yasuda.homeip.net/tex/cjk.html)が，4. の
多言語化については
[Omega-CJK](http://hep-ph.konkuk.ac.kr/ChoF/)，[OmegaVN](http://forum.vnoss.org/viewtopic.php?id=870)
などがあります。[OmegaVN](http://forum.vnoss.org/viewtopic.php?id=870) に
ついてはグェンさん自身のご紹介 ([qa:34272](https://okumuralab.org/~okumura/texfaq/qa/34272.html)) と
最新版 dvipdfmx 上で使用する場合の注意事項 ([qa:37564](https://okumuralab.org/~okumura/texfaq/qa/37564.html)) も参照ください。

### 入力方法—ASCII 翻字入力 (transliteration) と直接入力 {#n744380c}

英語以外の言語の多くは，今までラテンアルファベットによる対応付け
（“transliteration” ［翻字，文字転写，字訳］ないし ASCII 翻字入力）による
方法が一般的でした。これは TeX ソースファイル入力時にアクセント記号，
あるいは文字全部を ASCII 文字の組み合わせで代替するもので，以下の記述も
基本的にはこの方法に基づいています。ASCII 翻字入力についての詳細は
[TeXWiki:アスキー文字を用いた転写表記](</アスキー文字を用いた転写表記/>) を
ご覧ください（入力サンプルは
[TeXWiki:新 pTeX と Babel #タイプセットのテスト](</新 pTeX とBabel/#mafcbf19>)）。
また Unicode を用いた直接入力については本ページ後半
[#多言語の Unicode 直接入力と pTeX](#cyraccpw) をご覧ください。

## 欧米（キリル文字含む）の諸言語 {#obaldssd}

### Babel を用いた方法 {#lsdjceet}

欧米の諸言語であれば，Babel というパッケージを用いることで非常に
美しい文書が作れます。これは各言語のハイフネーション・正書法のみならず，
「参考文献」などの見出しまで各国の言語で出力してくれるという
至れり尽くせりのパッケージです。インストールについては，基本的な言語のみで
あれば [TwXWiki:新 pTeX と Babel](</新 pTeX とBabel/>) あるいは
「[Babel を使った最新版 LaTeX2e、pLaTeX2e での多言語環境構築](http://www2.tba.t-com.ne.jp/ing/babel.html#gcinst)」や
「[pTeX 3.1.4 と Babel 3.8](http://www2.tba.t-com.ne.jp/ing/babel.html#babel)」
をご覧ください。

### 各パッケージによる方法 {#otpckgsd}

文字がラテンアルファベットやキリル文字でない場合，
各種パッケージを用いることになるかもしれません。欧米の諸言語であれば
「[pTeX 3.1.4 と Babel 3.8](http://www2.tba.t-com.ne.jp/ing/babel.html#babel)」
でも取り扱っていますが，ここでは例としてグルジア語について紹介します。

#### グルジア語 {#mxeldrul}

グルジア語の場合，TeX では
[mxedruli パッケージ](https://mirror.ctan.org/help/Catalogue/entries/mxedruli.html)を
用いることで，多数のグルジア文字を扱うことができます。mxedruli パッケージは
ASCII アルファベットでグルジア語を記述することになります。
入力ソフト (input method) がない場合は大変助かりますが，
持っている方にとってはこのままではちょっと不便かもしれません。
そんな方は後述する UTF82TeX を -x オプションつきで実行してみてください。

インストール方法について解説します。

グルジア語を扱う TeX パッケージである
[mxedruli パッケージ](https://mirror.ctan.org/fonts/georgian/mxedruli/)をダウンロードし，
展開（解凍）します。$TEXMFLOCAL/fonts/source/mxedruli/ に
mf/ ディレクトリの中身を，$TEXMFLOCAL/tex/latex/mxedruli/ に
inputs/ ディレクトリの中身をコピーします。（mxedruli/ ディレクトリは
新たに作ります。名前は別に “mxedruli” でなくても良いですが。）
必要な方は mktexlsr コマンドを実行しておきましょう。

グルジア語の場合，次のようにソースを書いていきます。\usepackage で
mxedruli を読み込みます。グルジア語は mxedr 環境内に
書きます。ASCII 文字ではなく，直接グルジア文字を入力している場合，
保存する際には文字コード（エンコーディング）を UTF-8 で保存します。

***

```
%%% -*- mode: yatex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage{mxedruli}
\begin{document}
日本語を使いつつ，グルジア語のアルファベットを記述していきます。

\begin{mxedr}
%%% （mxedr 環境にグルジア文字を直接記述します。
%%%   表記できない文字はマニュアルを参考に
%%%   ASCII アルファベットで直接書きます。）
\end{mxedr}

\end{document}
```

***

グルジア文字を直接入力している場合は，後述する UTF82TeX を用いて
グルジア文字を mxedruli パッケージ用の ASCII 文字転写規則に変換しましょう。

文書が出来ましたら，普通に pLaTeX で処理します。すなわち，

```
platex gtest-o.tex
```

を実行します。DVI ファイルをプレビューしてみて，
うまくいっているかどうかを確認してください。

## 中東の諸言語 {#arablowic}

アラビア語についてはArabTeX上で扱えますし，ヘブライ語はArabTeXによる方法とBabelから用いる方法の2種類があるようです。詳細は，
[TeX &amp; ArabTeX](http://www.osaka-gaidai.ac.jp/~mes/multi/multi_02.html)あるいは[ArabTeX User's Manualの日本語訳](http://www.kotoito.net/arabtex.html)などをご覧ください。

インストール方法については「[日本語 LaTeX による多言語処理 &mdash; CTAN directory](http://www2.tba.t-com.ne.jp/ing/ctan/ctanindex.html)」に説明がありますが，一応ここでもインストール解説をします。

まず，[ArabTeX](http://www.ctan.org/get?fn=/language/arabtex.zip)をダウンロードします。展開（解凍）後，次のようにコピーします。$TEXMFLOCAL は share/texmf-local などご自分の環境に置き換えてください。

- mfinput/ ディレクトリ内のファイルすべて → $TEXMFLOCAL/fonts/source/arabtex/
- tfm/ ディレクトリ内のファイルすべて → $TEXMFLOCAL/fonts/tfm/arabtex/
- psfonts/ ディレクトリ内の PFB ファイルすべて → $TEXMFLOCAL/fonts/type1/arabtex/
- psfonts/ ディレクトリ内の map ファイルすべて → $TEXMFLOCAL/fonts/map/dvips/arabtex/
- texinput/ ディレクトリ内のファイルすべて → $TEXMFLOCAL/tex/latex/arabtex/

さらに，安田さんが ArabTeX と Babel を共存させるためのパッチを作ってくださいました。パッチ適用済みのファイルは「[ダウンロード・サービス #ArabTeX 7 ビット化アーカイブ](http://yasuda.homeip.net/dl/dl.html#p)」からダウンロードします。これらは $TEXMFLOCAL/tex/latex/arabtex/ にコピーします。

必要な方はmktexlsrをコマンドプロンプトなどで実行します。

```
mktexlsr
```

その後，

```
updmap --add arabtex.map
```

を実行します。

### ヘブライ語 {#o6107e61}

ヘブライ語は Babel の hebrew オプションを用いる方法があります。
TeX--XeT 機能を用いるため従来の pTeX では処理できませんでしたが，
pTeX と [e-TeX](/e-TeX/) の統合版の登場により処理可能になりました。
参考： [qa:50566](https://okumuralab.org/~okumura/texfaq/qa/50566.html),  [qa:50568](https://okumuralab.org/~okumura/texfaq/qa/50568.html), [qa:50589](https://okumuralab.org/~okumura/texfaq/qa/50589.html), [qa:55967](https://okumuralab.org/~okumura/texfaq/qa/55967.html) <!-- , [[qa:55969]], [[qa:55970]] ← これらはドイツ語なので削っておきます。 -->

## 中央アジアの諸言語 {#arsktowi}

サンスクリット語は skt パッケージなどが知られています。また，ベンガル語・タミル語などの言語についても扱えます。これらについても「[pTeX 3.1.4 と Babel 3.8](http://www2.tba.t-com.ne.jp/ing/babel.html#babel)」や「[日本語 LaTeX による多言語処理 &mdash; CTAN directory](http://www2.tba.t-com.ne.jp/ing/ctan/ctanindex.html)」をご覧ください。後者にはインストール方法についての解説もあります。

## 東南アジアの諸言語 {#sethiecs}

### ヴェトナム語 {#vnwtexpi}

ヴェトナム語の場合は [VnTeX](http://sourceforge.net/projects/vntex/) を
用います。このリンク先から圧縮形式の違うだけのものは除いて
全種類（3種類だと思う）のファイルをダウンロードしてきます。
「[TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/ndex.html)」の [qa:33515](https://okumuralab.org/~okumura/texfaq/qa/33515.html) および [qa:27846](https://okumuralab.org/~okumura/texfaq/qa/27846.html) の投稿を参考に
インストールします。以下，$TEXMFLOCAL を例えば share/texmf-local などと
自分の環境に合わせて置き換えて考えてください。

vntex-20030303.zip を展開（解凍）し，次のディレクトリはそのまま上書きします。

- vntex-20030303/web2c/ → $TEXMFLOCAL/web2c/
- vntex-20030303/fonts/ → $TEXMFLOCAL/fonts/
- vntex-20030303/tex/ → $TEXMFLOCAL/tex/
- vntex-20030303/doc/ → $TEXMFLOCAL/doc/

次は，$TEXMF/fontname/special.map が存在しない場合のみコピーします。

- vntex-20030303/fontname/special.map → $TEXMFLOCAL/fontname/special.map

次のファイルを次のように適切な場所にコピーします。

- vntex-20030303/dvips/vntex/config.vnr → $TEXMFLOCAL/dvips/config/
- vntex-20030303/dvips/vntex/t5.enc → $TEXMFLOCAL/fonts/enc/dvips/base/
- vntex-20030303/dvips/vntex/vnr.map → $TEXMFLOCAL/fonts/map/dvips/misc/
- vntex-20030303/dvipdfm/config/vnr.map → $TEXMFLOCAL/fonts/map/dvipdfm/base/

dvipdfmx をお使いの場合，$TEXMF/dvipdfm/config/dvipdfmx.cfg に

```
f vnr.map
```

と書きます。

フォントは基本的に vnr-t1-20030303.zip と urwvn-tex-20030114.zip の
fonts/ や tex/ ディレクトリ (urwvn-tex-20030114.zipのみ) を
そのまま対応するディレクトリ（例えば share/texmf-local/）に上書きしますが
urwvn-tex-20030114/dvips/urwvn/urwvn.map だけは
$TEXMFLOCAL/fonts/map/dvips/misc/ に保存しておいてください。

今回は日本語と一緒に扱うことを前提に，VnTeX を Babel に組み込んでみます。

1. $TEXMFLOCAL/tex/generic/babel/ に
    VnTeX の tex/latex/vietnam/ に含まれている vietnam.ldf を置く。

1. babel.sty の \DeclareOption の並んでいる辺り
    （私は \DeclareOption{USenglish}{\input{english.ldf}} の下にした）に 

    ```
    \DeclareOption{vietnam}{\input{vietnam.ldf}}
    ```

    を追加する。

1. $TEXMF/tex/generic/hyphen/ukhyphen.tex をコピーし，vnhyphen.tex に
    リネームする。（とりあえず外来語に多い英語でやっています。
    古いベトナム書籍の組版ではフランス語やロシア語に倣ったものもあるそうです。）

1. $TEXMF/tex/generic/config/language.dat の末尾に

    ```
    vietnam vnhyphen.tex
    ```

    と追加します。

あとはコマンドプロンプトなどで次のように fmtutil で処理します。

```
fmtutil --byfmt latex
fmtutil --byfmt platex
```

入力は基本的に ASCII 文字で書いていきますが，
ヴェトナム語の入力ソフト (input method) を持っている方は
後述する UTF82TeX という変換スクリプトがありますので，
それで入力しても大丈夫です（-x オプションをつけて実行します）。

***

```
%%% -*- mode: yatex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage{inputenc}
\usepackage[T1]{fontenc}
\usepackage{dblaccnt}
\usepackage[vietnam,english]{babel}
%\usepackage{japanese}
\begin{document}

こんな感じです。

\begin{otherlanguage}{vietnam}
%%% この中にヴェトナム語を直接入力
\end{otherlanguage}
\end{document}
```

***

ソースをヴェトナム文字で直接入力した方は，
後述する UTF82TeX で変換してください。

出来上がったら platex および dvipdfmx で処理します。

```
platex vtest-o.tex
dvipdfmx vtest-o.dvi
```

PDF ファイルを見ると，ヴェトナム語が正常に表示されているはずです。

### タイ語 {#thiocpaq}

タイ語はthailatexを使って記述できます。
ただし，タイ文字を7ビット化するなど，一工夫必要です。

まず，タイ語をTIS-620という文字コードで記述できるエディタ，あるいはそれがない場合はタイ語をその他の文字コードで編集できるエディタと [libiconv + iconv.exe](http://www.kaoriya.net/#LIBICONV) の組み合わせが必要です。TIS-620を直接編集できるテキストエディタとして，Windowsの場合，[Emacs](/Emacs/) ([NTEmacs](http://gnupack.sourceforge.jp/docs/current/UsersGuide_download.html#_download_emacs)，[Meadow](http://www.meadowy.org/meadow/)) が確実に使えます。また，[タイ語メモ超](http://www.vector.co.jp/soft/win31/writing/se008691.html)というソフトでも少なくとも後述するSWATHで処理可能なタイ語文書を作成できます。

[libiconv + iconv.exe](http://www.kaoriya.net/#LIBICONV)をお使いの場合は，Libiconv DLL for Windowsをダウンロード後，展開（解凍）し，iconv.exeとiconv.dllをC:\w32tex\binなど，PATHの通ったところにコピーします。

タイ語メモ超をお使いの場合，[Visual Basic 3ランタイム](http://support.microsoft.com/default.aspx?scid=kb;ja;196285)と[Thai Pen Stroke YK](http://www.vector.co.jp/soft/dl/data/writing/se013518.html)などのタイ語TrueTypeフォントが必要です。
Visual Basic 3ランタイムは自己展開（解凍）形式になっています。ダウンロードしたファイルを
ダブルクリックして展開し，展開先のVBRun300.DLLを C:\WINNT\system\ （Windows 95, 98,
Meは C:\WINDOWS\system\ だと思う）にコピーします。

以下のスクリプトの実行には
[Strawberry Perl](http://strawberryperl.com/)，[ActivePerl](http://www.activestate.com/Products/ActivePerl/)
など，Perl が必要になりますので，忘れずにインストールしてください。[8bt2ptex.pl](http://www2.tba.t-com.ne.jp/ing/ctan/8bt2ptex.pl)をダウンロードし，エディタで開いて一番上の

```
#!perl
```

を

```
#!/Perl/bin/perl
```

など自分の環境に合わせて修正します。そして C:\w32tex\bin\ など platex.exe などのある場所にコピーし，同じ場所にある perlexec.exe を同じ場所にコピーして 8bt2ptex.exe と名前を変更します。（こうすることで，8bt2ptex を実行しやすくなります。）

thailatexのWindows用はMikTeXで用いられるものになっていますが，TDS 1.1に合わせて
適切にコピーすることで角藤さんのW32TeX(pTeX)でも使えるようになります。[thailatexの解説ページ（タイ語）](http://khombkk.tripod.com/mikfiles/miktle.htm)より，「miktl025.zip」と「SWATH」（下の\[local copy\]のリンク先からダウンロード可能）
の2つをダウンロードします。（直接リンクするとうまくダウンロードできませんでしたので，ご面倒でも上の解説ページより各自ダウンロードしてください。）

以下 $TEXMFLOCAL を share/texmf-local など自分の環境に置き換えて作業を進めてください。

miktl025.zip を展開（解凍）し，dvips/base/ にある拡張子 .enc のファイルを

- $TEXMFLOCAL/fonts/enc/dvips/thai/

に，fonts/tfm/public/thai/ にある拡張子 .tfm のファイルは

- $TEXMFLOCAL/fonts/tfm/public/thai/

に，fonts/type1/public/thai/ にある拡張子 .pfb のファイルは

- $TEXMFLOCAL/fonts/type1/public/thai/

に，同じ場所にある拡張子 .afm のファイルは

- $TEXMFLOCAL/fonts/afm/public/thai/

に，fonts/vf/public/thai/ にある拡張子 .vf のファイルは

- $TEXMFLOCAL/fonts/vf/public/thai/

に，tex/genericf/babel/ にある拡張子 .fd, .def, .ldf, .sty のファイルは thai.ldf を除いてすべて

- $TEXMFLOCAL/tex/generic/babel/

にコピーします。thai.ldfはthaiold.ldfなどと名前を変え，コマンドプロンプト（MS-DOSプロンプト）で

```
8bt2ptex thaiold.ldf >thai.ldf
```

で7ビット化したthai.ldfをコピーします。

その後，$TEXMF/fonts/map/dvipdfm/base/cid-x.map に

```
rdbtt dbtt dbtt.pfb
rdbttb dbtt dbttb.pfb
rdbtti dbtt dbtti.pfb
rdbttz dbtt dbttz.pfb
rnorasi TeXTIS norasi.pfb
rnorasib TeXTIS norasib.pfb
rnorasii TeXTIS norasii.pfb
rnorasiz TeXTIS norasiz.pfb
```

と，$TEXMF/fonts/map/dvips/base/psfonts.map に

```
rdbtt DBThaiText " dbttEncoding ReEncodeFont " <dbtt.enc <dbtt.pfb
rdbttb DBThaiTextBold " dbttEncoding ReEncodeFont " <dbtt.enc <dbttb.pfb
rdbtti DBThaiTextItalic " dbttEncoding ReEncodeFont " <dbtt.enc <dbtti.pfb
rdbttz DBThaiTextBoldItalic " dbttEncoding ReEncodeFont " <dbtt.enc <dbttz.pfb
rnorasi Norasi " TeXTISEncoding ReEncodeFont " <TeXTIS.enc <norasi.pfb
rnorasib Norasi-Bold " TeXTISEncoding ReEncodeFont " <TeXTIS.enc <norasib.pfb
rnorasii Norasi-Italic " TeXTISEncoding ReEncodeFont " <TeXTIS.enc <norasii.pfb
rnorasiz Norasi-BoldItalic " TeXTISEncoding ReEncodeFont " <TeXTIS.enc <norasiz.pfb
```

と記述します。もう一つダウンロードしてきた swathw32.zip は展開（解凍）して，
data/ ディレクトリと swath.exe を
C:\w32tex\bin\ など PATH の通ったところにコピーします
（data/ ディレクトリは別にどこにコピーしても同じだと思いますが）。

では，実際にタイ語文書を作りましょう。

Unicodeでタイ語文書を記述可能なエディタ ([Emacs](/Emacs/) ([NTEmacs](http://gnupack.sourceforge.jp/docs/current/UsersGuide_download.html#_download_emacs)，[Meadow](http://www.meadowy.org/meadow/)) など) をお使いの場合は，それを用いてタイ語を書き，UTF-8で保存します。これをthaiutf8.txtとします。コマンドプロンプトで次を実行し，TIS-620という文字コードに変換します。

```
iconv -c -f UTF-8 -t TIS620 <thaiutf8.txt >thaimemo.txt
```

タイ語メモ超を用いる場合は，フォントの設定などを行ってから適当なタイ語文書を作ります。（ソフトキーボードがありますので，input methodのインストールは必ずしも必要ではありません。）作ったら保存します。ここではthaimemo.txtとします。上のようなiconvでの変換作業は不要です。

これらの方法などで出来た thaimemo.txt をコマンドプロンプトにて SWATH で
処理し，単語の切れ目に \wbr という目印を付けます。
例えば data/ ディレクトリを C:\w32tex\bin\ にコピーしたなら，
次のようにコマンドプロンプトなどより実行します。

```
swath -d C:\w32tex\bin\data -f latex <thaimemo.txt >tout.tex
```

次に，8bt2ptexで処理し，タイ文字を7ビット化します。

```
8bt2ptex tout.tex >tout7b.tex
```

このtout7b.texの文字列を下のソースにコピーします。下の例では

```
\fontencoding{LTH}\fontfamily{norasi}\selectfont% 書体指定
```

の行の下にコピーしています。

***

```
%%% -*- mode: yatex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass[a4paper]{jsarticle}
%\documentclass[a4paper]{jarticle}
\usepackage[OT2,T1]{fontenc}
\usepackage[thai]{babel} % thai オプション
\usepackage{thswitch} % thswitch.sty を指定する

\begin{document}
\selectlanguage{thai}
\def\wbr{\hskip0pt plus0.6pt minus0.6pt\relax} % アトで
\fontencoding{LTH}\fontfamily{norasi}\selectfont % 書体指定
^^e0^^bb^^e7^^b9\wbr 
^^c1^^b9^^d8^^c9^^c2^^d4E^^d8^^b4^^bb^^c3^^d0^^e0^^ca^^c3^^d4^^b0\wbr 
^^e0^^c5^^d4^^c8\wbr ^^a4^^d8^^b3^^a4^^e8^^d2\wbr ^^a1^^c7^^e8^^d2\wbr 
^^ba^^c3^^c3^^b4^^d2\wbr ^^bd^^d9^^a7\wbr 
^^ca^^d1^^b5^^c7^^d4E^^b4^^c3^^d1^^a8^^a9^^d2^^b9\wbr ^^a8^^a7\wbr 
^^bd^^e8^^d2^^bf^^d1^^b9\wbr ^^be^^d1^^b2^^b9^^d2\wbr 
^^c7^^d4^^aa^^d2^^a1^^d2^^c3\wbr ^^cd^^c2^^e8^^d2\wbr ^^c5^^e9^^d2^^a7\wbr 
^^bc^^c5^^d2^^ad\wbr ^^c4^^e5\wbr ^^e0^^a2^^e8^^b9^^a6^^e8^^d2\wbr 
^^ba^^d5^^b1^^d2\wbr ^^e3^^a4^^c3\wbr ^^e4^^c1^^e8\wbr 
^^b6^^d7^^cd^^e2^^b7^^c9\wbr ^^e2^^a1^^c3^^b8\wbr ^^e1^^aa^^e8^^a7\wbr 
^^ab^^d1^^b4\wbr ^^ce^^d6^^b4^^ce^^d1^^b4\wbr ^^b4^^e8^^d2\wbr ^^cb^^d1^^b4\wbr 
^^cd^^c0^^d1^^c2\wbr ^^e0^^cb^^c1^^d7^^cd^^b9\wbr ^^a1^^d5^^cc^^d2\wbr 
^^cd^^d1^^aa^^ac^^d2^^ca^^d1^^c2\wbr ^^bb^^af^^d4^^ba^^d1^^b5^^d4\wbr 
^^bb^^c3^^d0^^be^^c4^^b5^^d4\wbr ^^a1^^ae\wbr ^^a1^^d3^^cb^^b9^^b4^^e3^^a8\wbr 
^^be^^d9^^b4^^a8^^d2\wbr ^^e3^^cb^^e9\wbr 
^^a8^^d4E^^d4E^^a8^^d4E^^d4E^^b9^^e8^^d2^^bf^^d1^^a7\wbr ^^e0^^cd^^c2^^cf 

和文。日本語OK

\end{document}
```

***

このTeXソースをfoo.texとします。

あとはいつもの通りに処理します。

```
platex foo.tex
dvipdfmx foo.dvi
```

foo.pdfを開くとタイ語と日本語が共存しているはずです。

なお Unicode でタイ語文書を記述できる方は，先に述べたような iconv → swath → 8bt2ptex の代わりに，最後の項で紹介する [UTF82TeX](</pTeXと多言語処理/#iutf82tx>) を用いたほうがさらに簡便です。

### その他の言語 {#osecjfhg}

その他の言語についてもパッケージがあると思います。
詳細は稲垣徹さんのウェブサイト
「[日本語 LaTeX による多言語処理](http://www2.tba.t-com.ne.jp/ing/)」を
ご覧ください。

## 東アジアの言語 {#easapflq}

### 中国語・韓國語 {#cjkinqd}

韓國語（&#xd55c;&#xad6d;&#xc5b4;）
は[福井玲さん](http://www.l.u-tokyo.ac.jp/~fkr/)の
KoreanTeX （pLaTeX2e に対応している
のは[kTeX 1.2.2 ［Internet Archive のウェブアーカイブ］](http://replay.waybackmachine.org/20001017012754/http://www.tooyoo.l.u-tokyo.ac.jp/TeX/KoreanTeX/ktex-122.zip)）
がありました（これはハングルを ASCII 文字転写したかたちで入力できますので，
後述する方法と異なり入力ソフト \[input method\] が不要です）。

多書体 TeX の
開発者である[堀田耕作さん](http://www.geocities.jp/koh_hotta/ghost/)の
[KoreanTeX への解説ページ 1](http://blogs.yahoo.co.jp/koh_hotta/44928272.html)
および
[KoreanTeX への解説ページ 2](http://blogs.yahoo.co.jp/koh_hotta/45883465.html)
もあります。

一方，中国語（&#x6c49;&#x8bed;［漢語］，中文）については扱う方法が
ありませんでした。しかし，[OTF パッケージ](/OTF/)と OTFCJK パッケージの登場に
より，ようやく pTeX でも中国語（簡化字・繁體字の両方）と韓國語をまとめて
扱えるようになりました。（後述するように，UTF82TeX を用いる方法もあります。
他に別の言語も直接入力して混在させている方に特に便利です。）

以下をインストールする前に OTF パッケージと Omega が必要です。
あらかじめ TeXインストーラ3 などでインストールしておきましょう。

Perl をインストールしていない方は
[Strawberry Perl](http://strawberryperl.com/)，
[ActivePerl](http://www.activestate.com/Products/ActivePerl/) も
インストールしておきましょう。

PDF 閲覧の際には
[Adobe Reader](http://www.adobe.com/jp/products/reader/) が必要です。

さて，中国語や韓國語
などは[utf8toutf](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/utils/utf8toutf.zip)
と [otfcjk](http://psitau.kitunebi.com/experiment.html) を併用すると
便利です。まずはそれぞれダウンロードしておきましょう。

utf8toutf.zip を展開（解凍）し，w32bin/ ディレクトリ内の utf8toutf.exe を
PATH の通ったディレクトリ（例えば TeX のインストールディレクトリ内にある
実行ファイルディレクトリ C:\w32tex\bin\ など）にコピーしておきます。

otfcjk.zip も展開後，mkttftrad.pl を開き，先頭の行にある

```
#!/usr/bin/perl
```

を

```
#!/Perl/bin/perl
```

に変更しておきます。（これは
[ActivePerl](http://www.activestate.com/Products/ActivePerl/) の
デフォルトのインストールフォルダです。違う場合は適切に編集します。）

mkchina というファイルを “mkchina.bat” に名前変更し，次のように修正します。

***

```
echo "making vf (wait a while)..."
perl mkchina.pl
perl mkttftrad.pl
pltotf basepl\s-base-h.pl tfm\s-chinese-h.tfm
pltotf basepl\s-base-v.pl tfm\s-chinese-v.tfm
pltotf basepl\s-base-h.pl tfm\s-chineseg-h.tfm
pltotf basepl\s-base-v.pl tfm\s-chineseg-v.tfm
pltotf basepl\t-base-h.pl tfm\t-chinese-h.tfm
pltotf basepl\t-base-v.pl tfm\t-chinese-v.tfm
pltotf basepl\t-base-h.pl tfm\t-chineseg-h.tfm
pltotf basepl\t-base-v.pl tfm\t-chineseg-v.tfm
pltotf basepl\t-base-h.pl tfm\tt-chinese-h.tfm
pltotf basepl\t-base-v.pl tfm\tt-chinese-v.tfm
pltotf basepl\t-base-h.pl tfm\tt-chineseg-h.tfm
pltotf basepl\t-base-v.pl tfm\tt-chineseg-v.tfm
del vf\*.ofm
rem copy mlotf.sty test\
rem copy tfm\* test\
rem copy vf\* test\
rem cd test
rem platex test1.tex
rem dvipdfmx test1.dvi
rem start test1.pdf
```

***

なお下のほうの rem を除いて適切に編集すれば，コンパイル・プレビューまで
全自動でやってくれるでしょうが，通常はその必要はありません。

今作った mkchina.bat をダブルクリックし，TFM と VF を
生成させます。tfm/ ディレクトリの中身を $TEXMFLOCAL/fonts/tfm/otfcjk/
に，vf/ ディレクトリの中身を $TEXMFLOCAL/fonts/vf/otfcjk/ にでも
すべてコピーします。mlotf.sty を $TEXMFLOCAL/tex/latex/otfcjk/ に
コピーします。あとは必要な方のみ

```
mktexlsr
```

を実行してください。

dvipdfmx で変換し，PDF の形で出力結果を見ることになります。
そこで "sample.map(for dvipdfmx)" を
参考に，$TEXMFLOCAL/fonts/map/dvipdfm/base/cid-x.map に
次のように追記しておきます。

***

```
%rml            H                   Ryumin-Light
%rmlv           V                   Ryumin-Light

rml            H                   ipam.ttf
rmlv           V                   ipam.ttf

gbm            H                   ipag.ttf
gbmv           V                   ipag.ttf

%%% OTF package
%hminr-h        H                   Ryumin-Light
%hminr-v        V                   Ryumin-Light
%otf-ujmr-h     UniJIS-UTF16-H      Ryumin-Light
%otf-ujmr-v     UniJIS-UTF16-V      Ryumin-Light
```

<!-- %otf-cjmr-h     Identity-H          Ryumin-Light -->

```
%otf-cjmr-h     Adobe-Japan1-6      Ryumin-Light
%otf-cjmr-v     Identity-V          Ryumin-Light

hminr-h        H                   ipam.ttf
hminr-v        V                   ipam.ttf
otf-ujmr-h     UniJIS-UTF16-H      ipam.ttf
otf-ujmr-v     UniJIS-UTF16-V      ipam.ttf
```

<!-- %otf-cjmr-h     Identity-H          ipam.ttf/AJ16 -->

```
otf-cjmr-h     Adobe-Japan1-6      ipam.ttf
otf-cjmr-v     Identity-V          ipam.ttf/AJ16

hgothr-h       H                   ipag.ttf
hgothr-v       V                   ipag.ttf
otf-ujgr-h     UniJIS-UTF16-H      ipag.ttf
otf-ujgr-v     UniJIS-UTF16-V      ipag.ttf
```

<!-- %otf-cjgr-h     Identity-H          ipag.ttf/AJ16 -->

```
otf-cjgr-h     Adobe-Japan1-6      ipag.ttf
otf-cjgr-v     Identity-V          ipag.ttf/AJ16

%hminb-h        H                   Ryumin-Light,Bold
%hminb-v        V                   Ryumin-Light,Bold
%otf-ujmb-h     UniJIS-UTF16-H      Ryumin-Light,Bold
%otf-ujmb-v     UniJIS-UTF16-V      Ryumin-Light,Bold
```

<!-- %otf-cjmb-h     Identity-H          Ryumin-Light,Bold -->

```
%otf-cjmb-h     Adobe-Japan1-6      Ryumin-Light,Bold
%otf-cjmb-v     Identity-V          Ryumin-Light,Bold

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

hmgothr-h      H                   wlmaru20044.ttf
hmgothr-v      V                   wlmaru20044.ttf
otf-ujmgr-h    UniJIS-UTF16-H      wlmaru20044.ttf
otf-ujmgr-v    UniJIS-UTF16-V      wlmaru20044.ttf
```

<!-- %otf-cjmgr-h    Identity-H          wlmaru20044.ttf/AJ16 -->

```
otf-cjmgr-h    Adobe-Japan1-6      wlmaru20044.ttf
otf-cjmgr-v    Identity-V          wlmaru20044.ttf/AJ16

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

hminl-h        H                :0:msmincho.ttc
hminl-v        V                :0:msmincho.ttc
otf-ujml-h     UniJIS-UTF16-H   :0:msmincho.ttc
otf-ujml-v     UniJIS-UTF16-V   :0:msmincho.ttc
```

<!-- %otf-cjml-h     Identity-H       :0:msmincho.ttc/AJ16 -->

```
otf-cjml-h     Adobe-Japan1-6   :0:msmincho.ttc
otf-cjml-v     Identity-V       :0:msmincho.ttc/AJ16

%otf-ucmr-h     UniGB-UTF16-H       STSong-Light
%otf-ucmr-v     UniGB-UTF16-V       STSong-Light
```

<!-- %otf-ccmr-h     Identity-H          STSong-Light -->

```
%otf-ccmr-h     Adobe-GB1-4         STSong-Light
%otf-ccmr-v     Identity-V          STSong-Light

otf-ucmr-h     UniGB-UTF16-H       gbsn00lp.ttf
otf-ucmr-v     UniGB-UTF16-V       gbsn00lp.ttf
```

<!-- %otf-ccmr-h     Identity-H          gbsn00lp.ttf/AG14 -->

```
otf-ccmr-h     Adobe-GB1-4         gbsn00lp.ttf
otf-ccmr-v     Identity-V          gbsn00lp.ttf/AG14

otf-ucgr-h     UniGB-UTF16-H       wqy-zenhei.ttf
otf-ucgr-v     UniGB-UTF16-V       wqy-zenhei.ttf
```

<!-- %otf-ccgr-h     Identity-H          wqy-zenhei.ttf/AG14 -->

```
otf-ccgr-h     Adobe-GB1-4         wqy-zenhei.ttf
otf-ccgr-v     Identity-V          wqy-zenhei.ttf/AG14

%otf-utmr-h     UniCNS-UTF16-H      MSung-Light
%otf-utmr-v     UniCNS-UTF16-V      MSung-Light
```

<!-- %otf-ctmr-h     Identity-H          MSung-Light -->

```
%otf-ctmr-h     Adobe-CNS1-4        MSung-Light
%otf-ctmr-v     Identity-V          MSung-Light

otf-utmr-h     UniCNS-UTF16-H      uming.ttf
otf-utmr-v     UniCNS-UTF16-V      uming.ttf
```

<!-- %otf-ctmr-h     Identity-H          uming.ttf/AC14 -->

```
otf-ctmr-h     Adobe-CNS1-4        uming.ttf
otf-ctmr-v     Identity-V          uming.ttf/AC14

otf-utgr-h     UniCNS-UTF16-H      cwheib.ttf
otf-utgr-v     UniCNS-UTF16-V      cwheib.ttf
```

<!-- %otf-ctgr-h     Identity-H          cwheib.ttf/AC14 -->

```
otf-ctgr-h     Adobe-CNS1-4        cwheib.ttf
otf-ctgr-v     Identity-V          cwheib.ttf/AC14

%otf-ukmr-h     UniKS-UTF16-H       HYSMyeongJo-Medium
%otf-ukmr-v     UniKS-UTF16-V       HYSMyeongJo-Medium
```

<!-- %otf-ckmr-h     Identity-H          HYSMyeongJo-Medium -->

```
%otf-ckmr-h     Adobe-Korea1-2      HYSMyeongJo-Medium
%otf-ckmr-v     Identity-V          HYSMyeongJo-Medium

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
%hmr            H                   Ryumin-Light
%hmrv           V                   Ryumin-Light
%unijmin-h      UniJIS-UTF16-H      Ryumin-Light
%unijmin-v      UniJIS-UTF16-V      Ryumin-Light
```

<!-- %cidmin-h       Identity-H          Ryumin-Light -->

```
%cidmin-h       Adobe-Japan1-6      Ryumin-Light
%cidmin-v       Identity-V          Ryumin-Light

hmr            H                   ipam.ttf
hmrv           V                   ipam.ttf
unijmin-h      UniJIS-UTF16-H      ipam.ttf
unijmin-v      UniJIS-UTF16-V      ipam.ttf
```

<!-- %cidmin-h       Identity-H          ipam.ttf/AJ16 -->

```
cidmin-h       Adobe-Japan1-6      ipam.ttf
cidmin-v       Identity-V          ipam.ttf/AJ16

hkb            H                   ipag.ttf
hkbv           V                   ipag.ttf
unijgoth-h     UniJIS-UTF16-H      ipag.ttf
unijgoth-v     UniJIS-UTF16-V      ipag.ttf
```

<!-- %cidgoth-h      Identity-H          ipag.ttf/AJ16 -->

```
cidgoth-h      Adobe-Japan1-6      ipag.ttf
cidgoth-v      Identity-V          ipag.ttf/AJ16
```

***

ここで日本語フォントに
[IPAフォント](http://www.ipa.go.jp/about/press/20071001-2.html)
(ipam.ttf, ipag.ttf) を，中国語簡化字フォントに
[Arphic （文鼎） Technology のフォント](https://mirror.ctan.org/../../GNU/non-gnu/chinese-fonts-truetype/)
(gbsn00lp.ttf) と [WenQuanYi outline fonts](http://wqy.sourceforge.net/en/)
(wqy-zenhei.ttf) を，中国語繁體字フォントに
[CJK-Unifonts](http://www.freedesktop.org/wiki/Software/CJKUnifonts) (uming.ttf) と
[cwTeX TrueType font](http://cle.linux.org.tw/fonts/cwttf/) (cwheib.ttf) を，
韓國語フォントに [Un-fonts](http://kldp.net/projects/unfonts/)
(UnBatang.ttf, UnDotum.ttf) を用いています。いずれも無償で入手できます。

Adobe Reader 附属の CMap
（どこにあるのか分からない場合には “UniGB-UTF16-H” で検索してみること）は
例えば "C:\Program Files\Adobe\Reader 8.0\Resource\CMap\\" にあるので，
全て $TEXMFLOCAL/fonts/cmap/ 内に上書きコピーしておきます。

DVI → PS → PDF の流れで作りたい方は，[Ghostscript](/Ghostscript/) が 8.54 以降で
あることを確認し，$TEXMF/fonts/map/dvips/base/psfonts.map に
次を追加します
（Ghostscript は 8.51 あたりでも大丈夫かもしれませんが，確認していません）。

***

```
rml                  RyuminPr6N-Light-H
rmlv                 RyuminPr6N-Light-V

gbm              GothicBBBPr6N-Medium-H
gbmv             GothicBBBPr6N-Medium-V

%%% OTF package
hminr-h              RyuminPr6N-Light-H
hminr-v              RyuminPr6N-Light-V
otf-ujmr-h           RyuminPr6N-Light-UniJIS-UTF16-H
otf-ujmr-v           RyuminPr6N-Light-UniJIS-UTF16-V
otf-cjmr-h           RyuminPr6N-Light-Identity-H
otf-cjmr-v           RyuminPr6N-Light-Identity-V

hgothr-h         GothicBBBPr6N-Medium-H
hgothr-v         GothicBBBPr6N-Medium-V
otf-ujgr-h       GothicBBBPr6N-Medium-UniJIS-UTF16-H
otf-ujgr-v       GothicBBBPr6N-Medium-UniJIS-UTF16-V
otf-cjgr-h       GothicBBBPr6N-Medium-Identity-H
otf-cjgr-v       GothicBBBPr6N-Medium-Identity-V

hminb-h          FutoMinA101Pr6N-Bold-H
hminb-v          FutoMinA101Pr6N-Bold-V
otf-ujmb-h       FutoMinA101Pr6N-Bold-UniJIS-UTF16-H
otf-ujmb-v       FutoMinA101Pr6N-Bold-UniJIS-UTF16-V
otf-cjmb-h       FutoMinA101Pr6N-Bold-Identity-H
otf-cjmb-v       FutoMinA101Pr6N-Bold-Identity-V

hgothb-h          FutoGoB101Pr6N-Bold-H
hgothb-v          FutoGoB101Pr6N-Bold-V
otf-ujgb-h        FutoGoB101Pr6N-Bold-UniJIS-UTF16-H
otf-ujgb-v        FutoGoB101Pr6N-Bold-UniJIS-UTF16-V
otf-cjgb-h        FutoGoB101Pr6N-Bold-Identity-H
otf-cjgb-v        FutoGoB101Pr6N-Bold-Identity-V

hmgothr-h            MidashiGoPr6N-MB31-H
hmgothr-v            MidashiGoPr6N-MB31-V
otf-ujmgr-h          MidashiGoPr6N-MB31-UniJIS-UTF16-H
otf-ujmgr-v          MidashiGoPr6N-MB31-UniJIS-UTF16-V
otf-cjmgr-h          MidashiGoPr6N-MB31-Identity-H
otf-cjmgr-v          MidashiGoPr6N-MB31-Identity-V

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
hmr                  RyuminPr6N-Light-H
hmrv                 RyuminPr6N-Light-V
unijmin-h            RyuminPr6N-Light-UniJIS-UTF16-H
unijmin-v            RyuminPr6N-Light-UniJIS-UTF16-V
cidmin-h             RyuminPr6N-Light-Identity-H
cidmin-v             RyuminPr6N-Light-Identity-V

hkb              GothicBBBPr6N-Medium-H
hkbv             GothicBBBPr6N-Medium-V
unijgoth-h       GothicBBBPr6N-Medium-UniJIS-UTF16-H
unijgoth-v       GothicBBBPr6N-Medium-UniJIS-UTF16-V
cidgoth-h        GothicBBBPr6N-Medium-Identity-H
cidgoth-v        GothicBBBPr6N-Medium-Identity-V
```

***

さらに，gs\gs8.??\lib\cidfmap の末尾に次を追記します。

***

```
%!
%%% aliases
/Ryumin-Light                 /IPAMincho                   ;
/Ryumin-Medium                /IPAMincho                   ;
/FutoMinA101-Bold             /WadaMin-Bold                ;
/MidashiMin-MA31              /HGMinchoE                   ;
/GothicBBB-Medium             /IPAGothic                   ;
/FutoGoB101-Bold              /HGGothicE                   ;
/MidashiGo-MB31               /HGSoeiKakugothicUB          ;
/Jun101-Light                 /WadaLabMaruGo20044          ;
/HeiseiMin-W3                 /Ryumin-Light                ;
/HeiseiKakuGo-W5              /GothicBBB-Medium            ;
/HiraMinStdN-W2               /MS-Mincho                   ;
/KozMinPr6N-Regular           /Ryumin-Light                ;
/KozMinPro-Regular            /KozMinPr6N-Regular          ;
/KozMinPro-Regular-Acro       /KozMinPro-Regular           ;
/HeiseiMin-W3-Acro            /KozMinPro-Regular-Acro      ;
/KozGoPr6N-Medium             /GothicBBB-Medium            ;
/KozGoPro-Medium              /KozGoPr6N-Medium            ;
/KozGoPro-Medium-Acro         /KozGoPro-Medium             ;
/HeiseiKakuGo-W5-Acro         /KozGoPro-Medium-Acro        ;
/STSong-Light                 /BousungEG-Light-GB          ;
/STSong-Regular               /BousungEG-Light-GB          ;
/STHeiti-Regular              /WenQuanYiZenHei             ;
/STHeiti-Light                /WenQuanYiZenHei             ;
/STKaiti-Regular              /GBZenKai-Medium             ;
/STFangsong-Regular           /FangSong                    ;
/STFangsong-Light             /FangSong                    ;
/AdobeSongStd-Light           /STSong-Light                ;
/AdobeSongStd-Light-Acro      /AdobeSongStd-Light          ;
/STSongStd-Light-Acro         /AdobeSongStd-Light-Acro     ;
/STSongStd-Light              /STSongStd-Light-Acro        ;
/STSong-Light-Acro            /STSongStd-Light-Acro        ;
/AdobeHeitiStd-Regular        /STHeiti-Regular             ;
/MSung-Light                  /ShanHeiSun-Uni              ;
/MSung-Medium                 /ShanHeiSun-Uni              ;
/MHei-Medium                  /cwTeXHeiBold                ;
/MKai-Medium                  /ZenKai-Uni                  ;
/AdobeMingStd-Light           /MSung-Light                 ;
/AdobeMingStd-Light-Acro      /AdobeMingStd-Light          ;
/MSungStd-Light-Acro          /AdobeMingStd-Light-Acro     ;
/MSungStd-Light               /MSungStd-Light-Acro         ;
/MSung-Light-Acro             /MSungStd-Light-Acro         ;
/MHei-Medium-Acro             /MHei-Medium                 ;
/HYSMyeongJo-Medium           /UnBatang                    ;
/HYGoThic-Medium              /UnDotum                     ;
/HYKHeadLine-Bold             /UnBatang-Bold               ;
/HYKHeadLine-Medium           /UnBatang-Bold               ;
/HYRGoThic-Medium             /GulimChe                    ;
/HYGungSo-Bold                /UnGungseo                   ;
/AdobeMyungjoStd-Medium       /HYSMyeongJo-Medium          ;
/AdobeMyungjoStd-Medium-Acro  /AdobeMyungjoStd-Medium      ;
/HYSMyeongJoStd-Medium-Acro   /AdobeMyungjoStd-Medium-Acro ;
/HYSMyeongJoStd-Medium        /HYSMyeongJoStd-Medium-Acro  ;
/HYSMyeongJo-Medium-Acro      /HYSMyeongJoStd-Medium-Acro  ;
/HYGoThic-Medium-Acro         /HYGoThic-Medium             ;

%%% IPA Fonts
%%% See http://www.ipa.go.jp/about/press/20071001-2.html
%%%     http://ossipedia.ipa.go.jp/ipafont/
/IPAMincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (ipam.ttf) >> ;
/IPAGothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (ipag.ttf) >> ;

%%% O'Reilly CID-keyed fonts including Wadalab Fonts
%%% See ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/samples/
%%%     ftp://ftp.oreilly.de/pub/examples/english_examples/nutshell/cjkv/adobe/samples/
%%%     http://examples.oreilly.de/english_examples/nutshell/cjkv/adobe/samples/
%/Ryumin-Light                 /WadaMin-Regular                ;
%/FutoMinA101-Bold             /WadaMin-Bold                   ;
%/GothicBBB-Medium             /WadaGo-Bold                    ;
%/Jun101-Light                 /WadaMaruGo-Regular             ;
%/MSung-Light                  /MOESung-Regular                ;
%/MKai-Medium                  /MOEKai-Regular                 ;
%/HYSMyeongJo-Medium           /MunhwaMyungjoStd-Regular       ;
%/HYSMyeongJo-Medium           /Munhwa-Regular                 ;
%/HYSMyeongJo-Medium           /MunhwaMyungjoStd-Bold          ;
%/HYSMyeongJo-Medium           /Munhwa-Bold                    ;
%/HYGoThic-Medium              /MunhwaGothicStd-Regular        ;
%/HYGoThic-Medium              /MunhwaGothic-Regular           ;
%/HYKHeadLine-Bold             /MunhwaGothicStd-Bold           ;
%/HYKHeadLine-Bold             /MunhwaGothic-Bold              ;
%/HYGungSo-Bold                /MunhwaScriptStd-Bold           ;
%/HYGungSo-Bold                /MunhwaGungSeo-Bold             ;
%/HYGungSo-Bold                /MunhwaScriptStd-Light          ;
%/HYGungSo-Bold                /MunhwaGungSeo-Light            ;
%/HYGungSo-Bold                /MunhwaScriptFreestyleStd-Bold  ;
%/HYGungSo-Bold                /MunhwaGungSeoHeulim-Bold       ;
%/HYGungSo-Bold                /MunhwaScriptFreestyleStd-Light ;
%/HYGungSo-Bold                /MunhwaGungSeoHeulim-Light      ;

%%% Wadalab Maru Gothic (JIS X 0213)
%%% See http://sourceforge.jp/projects/jis2004/wiki/FrontPage
/WadaLabMaruGo20044           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (wlmaru20044.ttf) >> ;
/WadaLabMaruGo20004           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (wlmaru20004.ttf) >> ;

%%% Chinese TrueType font by Arphic Technology
%%% See ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/ShanHeiSun-Light             << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (bsmi00lp.ttf) >> ;
/ZenKai-Medium                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (bkai00mp.ttf) >> ;
/BousungEG-Light-GB           << /FileType /TrueType  /CSI [(GB1) 5]     /Path (gbsn00lp.ttf) >> ;
/GBZenKai-Medium              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (gkai00mp.ttf) >> ;

%%% CJK-Unifonts
%%% See http://www.freedesktop.org/wiki/Software/CJKUnifonts
/ShanHeiSun-Uni               << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (uming.ttf) >> ;
/ShanHeiSun-Uni-Adobe-GB1     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (uming.ttf) >> ;
/ZenKai-Uni                   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (ukai.ttf)  >> ;
/ZenKai-Uni-Adobe-GB1         << /FileType /TrueType  /CSI [(GB1) 5]     /Path (ukai.ttf)  >> ;

%%% WenQuanYi outline fonts
%%% See http://wqy.sourceforge.net/en/
%%%     http://sourceforge.net/projects/wqy/
/WenQuanYiZenHei              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (wqy-zenhei.ttf) >> ;
/WenQuanYiZenHei-Adobe-CNS1   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (wqy-zenhei.ttf) >> ;

%%% cwTeX TrueType font
%%% See http://cle.linux.org.tw/fonts/cwttf/
/cwTeXMing                    << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwming.ttf) >> ;
/cwTeXHeiBold                 << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwheib.ttf) >> ;
/cwTeXYen                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwyen.ttf)  >> ;
/cwTeXKai                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwkai.ttf)  >> ;
/cwTeXFangSong                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwfs.ttf)   >> ;

%%% Un-fonts Core families
%%% See http://kldp.net/projects/unfonts/
/UnBatang                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnBatang.ttf)      >> ;
/UnBatang-Bold                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnBatangBold.ttf)  >> ;
/UnDotum                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnDotum.ttf)       >> ;
/UnDotum-Bold                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnDotumBold.ttf)   >> ;
/UnGraphic                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnGraphic.ttf)     >> ;
/UnGraphic-Bold               << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnGraphicBold.ttf) >> ;
/UnGungseo                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnGungseo.ttf)     >> ;
/UnPilgi                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnPilgi.ttf)       >> ;
/UnPilgi-Bold                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnPilgiBold.ttf)   >> ;

%%% Un-fonts Extra families
%%% See http://kldp.net/projects/unfonts/
/UnShinmun                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnShinmun.ttf)    >> ;
/UnPen                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnPen.ttf)        >> ;
/UnPenheulim                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnPenheulim.ttf)  >> ;
/UnTaza                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnTaza.ttf)       >> ;
/UnYetgul                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnYetgul.ttf)     >> ;
/UnBom                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnBom.ttf)        >> ;
/UnJamoBatang                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnJamoBatang.ttf) >> ;
/UnJamoSora                   << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnJamoSora.ttf)   >> ;
/UnJamoDotum                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnJamoDotum.ttf)  >> ;
/UnJamoNovel                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnJamoNovel.ttf)  >> ;

%%% monospaced TrueType outline fonts in Windows Vista/XP
%%% See C:\Windows\Fonts\
/MS-Mincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msmincho.ttc)  /SubfontID 0 >> ;
/MS-Gothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 0 >> ;
/NSimSun                      << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsun.ttc)    /SubfontID 1 >> ;
/SimHei                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simhei.ttf)                 >> ;
/SimHei-Adobe-CNS1            << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/simhei.ttf)                 >> ;
/MingLiU                      << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 0 >> ;
/BatangChe                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 1 >> ;
/DotumChe                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 3 >> ;
/GulimChe                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 1 >> ;
/GungsuhChe                   << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 3 >> ;

%%% proportional TrueType outline fonts in Windows Vista/XP
%%% See C:\Windows\Fonts\
/MS-PMincho                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msmincho.ttc)  /SubfontID 1 >> ;
/MS-PGothic                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 1 >> ;
/MS-UIGothic                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 2 >> ;
/SimSun                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsun.ttc)    /SubfontID 0 >> ;
/PMingLiU                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 1 >> ;
/Batang                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 0 >> ;
/Dotum                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 2 >> ;
/Gulim                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 0 >> ;
/Gungsuh                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 2 >> ;

%%% monospaced TrueType outline fonts in Windows Vista
%%% See C:\Windows\Fonts\
/SimSun-ExtB                  << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsunb.ttf) >> ;
/KaiTi                        << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simkai.ttf)  >> ;
/FangSong                     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simfang.ttf) >> ;
/DFKaiShu-SB-Estd-BF          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/kaiu.ttf)    >> ;

%%% proportional TrueType outline fonts in Windows Vista
%%% See C:\Windows\Fonts\
/Meiryo                       << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryo.ttc)    /SubfontID 0 >> ;
/Meiryo-Italic                << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryo.ttc)    /SubfontID 1 >> ;
/Meiryo-Bold                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryob.ttc)   /SubfontID 0 >> ;
/Meiryo-BoldItalic            << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryob.ttc)   /SubfontID 1 >> ;
/MicrosoftYaHei               << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/msyh.ttf)                   >> ;
/MicrosoftYaHeiBold           << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/msyhbd.ttf)                 >> ;
/MicrosoftJhengHeiRegular     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/msjh.ttf)                   >> ;
/MicrosoftJhengHeiBold        << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/msjhbd.ttf)                 >> ;
/Ming-Lt-HKSCS-UNI-H          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 2 >> ;
/MingLiU-ExtB                 << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 0 >> ;
/PMingLiU-ExtB                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 1 >> ;
/Ming-Lt-HKSCS-ExtB           << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 2 >> ;
/MalgunGothicRegular          << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/malgun.ttf)                 >> ;
/MalgunGothicBold             << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/malgunbd.ttf)               >> ;

%%% TrueType outline fonts in StarSuite 8
%%% See http://jp.sun.com/products/software/starsuite/
%%%     http://pack.google.com/intl/ja/pack_installer.html?gl=jp&ci_apps=None&ci_so=on
/HG-MinchoL-Sun               << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/HG-MinchoL-Sun.ttc)  /SubfontID 0 >> ;
/HG-GothicB-Sun               << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/HG-GothicB-Sun.ttc)  /SubfontID 0 >> ;

%%% TrueType outline fonts in StarSuite 8 or Microsoft Office 2003
/HGMinchoB                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrmb.ttc)   /SubfontID 0 >> ;
/HGMinchoE                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrme.ttc)   /SubfontID 0 >> ;
/HGSoeiPresenceEB             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrpre.ttc)  /SubfontID 0 >> ;
/HGGothicM                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrgm.ttc)   /SubfontID 0 >> ;
/HGGothicE                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrge.ttc)   /SubfontID 0 >> ;
/HGSoeiKakugothicUB           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrsgu.ttc)  /SubfontID 0 >> ;
/HGMaruGothicMPRO             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrsmp.ttf)               >> ;
/HGSoeiKakupoptai             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrpp1.ttc)  /SubfontID 0 >> ;
/HGKyokashotai                << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrkk.ttc)   /SubfontID 0 >> ;
/HGSeikaishotaiPRO            << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrskp.ttf)               >> ;
/HGGyoshotai                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrgy.ttc)   /SubfontID 0 >> ;
```

***

なお，gs\gs8.??\Resource\CMap\ に CMap をコピーしていない方は，
そこに先に述べた Adobe Reader 附属の CMap などをコピーしてください。

以上でインストールはようやく終わりです。

さて，TeX ソースに中国語・韓國語を入力するためには
残念ながら入力ソフト (input method) が必須となります。
入力ソフトをまだインストールしてない場合は
「[Windows 系コンピュータで使う中国語・韓国語](http://www2.yamanashi-ken.ac.jp/~yohnishi/pcinfo/windows_tips/international/win-cn-kr.html)」
を参考にインストールしてください。

otfcjk での書き方は
[Kino さんの入力例](http://www2.odn.ne.jp/alt-quinon/files/ptex/otfcjk/)の
WhatsUniCJK-tex.zip などを参考にしてください。
（Mac OS X を想定した書き方のため，そのままコンパイルはできません。

```
\usepackage[ttf]{mlotf}
```

の “\[ttf\]” を抜いて

```
\usepackage{mlotf}
```

に直すことで，［不具合はあるものの］とりあえずコンパイルは通ります。）
使い方は非常に簡単で，繁體字（正體字）は「繁体中文」環境，
簡化字（&#x7b80;化字，簡体字）は「簡体中文」環境，
ハングル（&#xd55c;&#xae00;）は「ハングル」環境で括るだけです。

自分で書いてみたい方は次のような自己紹介の文章でも良いでしょう。
このファイルを “cjkintro.tex” とします。

***

```
%%% -*- mode: yatex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage[multi]{otf}
\usepackage{mlotf}

\begin{document}
\section{Japanese}
こんにちは。私の名前は\textbf{東大}です。よろしくお願いします。

こんにちは。私の名前は\textbf{ひがしひろし}です。よろしくお願いします。

\section{Chinese}
\subsection{Simplified Chinese}
%%% 簡化字中国語（中国大陸などで用いられる）の場合は
%%% 「簡体中文」環境を用います。
\begin{簡体中文}
你好。说\textbf{东大}。请多关照。
\end{簡体中文}

\subsection{Traditional Chinese}
%%% 繁體字中国語（臺灣［台湾］・香港などで用いられる）の場合は
%%% 「繁体中文」環境を用います。
\begin{繁体中文}
你好。說\textbf{東大}。請多關照。
\end{繁体中文}

\section{Korean}
%%% 韓國語・朝鮮語の場合は「ハングル」環境を用います。
\begin{ハングル}
안녕하세요.\textbf{히가시 히로시}라고 합니다.잘 부탁드립니다.
\end{ハングル}

\end{document}
```

***

コマンドラインより次のコマンドで変換します。

```
utf8toutf cjkintro.tex cjkintro-sjis.tex
```

これで変換され，文字コードも自動的に Shift_JIS になりました。
生成したファイル名はここでは “cjkintro-sjis.tex” です。

あとはいつものように platex などで処理し，PDF 文書で確認しましょう。

```
platex cjkintro-sjis.tex
dvipdfmx cjkintro-sjis.dvi
```

または，

```
platex cjkintro-sjis.tex
dvips cjkintro-sjis.dvi
ps2pdf cjkintro-sjis.ps
```

のように実行します（Ghostscript 8.54 においては，ps2pdf での変換時に
フリーズしたと思えるほど非常に時間がかかります）。あとは PDF を開いて
うまく表示されているかどうか確認しましょう。なお，PDF を開いたときに
フォントのインストールを促されたらインストールしておいてください。

最後に。中国語や韓國語は句読点が真ん中に表示されることがありますが，
それで問題ないはずです。
（フォントのグリフの問題です。伝統的な組版かどうかまでは分かりませんが。）

### モンゴル語 {#omoneast}

モンゴル語に
ついては，[MonTeX](http://www.ring.gr.jp/pub/text/CTAN/help/Catalogue/entries/montex.html)
というパッケージがあります。また，日本語とモンゴル語を共存させる際に
役立つ LRTate.sty というものもあります。詳細は
「[Babel を使った最新版 LaTeX2e、pLaTeX2e での多言語環境構築](http://www2.tba.t-com.ne.jp/ing/babel.html#gcinst)」
にもありますが，ここではインストール方法について解説します。

まず[montex.tgz](http://userpage.fu-berlin.de/~corff/im/MLS/montex.tgz)，[LRtate.sty](http://www.ns.musashi-tech.ac.jp/~inoue/Pages/TeX/LRtate.sty)，[diagnose.sty](http://www.ring.gr.jp/pub/text/CTAN/macros/latex/contrib/diagnose/texinput/diagnose.sty)
の3つをダウンロードします。

montex.tgz のファイルを tar + gzip 形式に対応した展開（解凍）ソフトで展開し，
次のようにコピーします。$TEXMF は share/texmf-local など，
ご自分の環境に読み替えてください。

- texinput/ ディレクトリの中のすべてのファイル → $TEXMF/tex/latex/montex/
- mfinput/ ディレクトリの中のすべてのファイル → $TEXMF/fonts/source/public/mfinput/mls/
- tfm/ ディレクトリの中のすべてのファイル → $TEXMF/fonts/tfm/mls/
- doc/ ディレクトリの中のすべてのファイル → $TEXMF/doc/montex/

また，LRtate.sty や diagnose.sty も $TEXMF/tex/latex/montex/ にコピーします。

$TEXMF/tex/generic/config/language.dat に次を追記します。
私は texmf/tex/generic/config/language.dat を
texmf-local/tex/generic/config/ にコピーして用いています。

```
mongolian	mnhyphen.tex % mnhyphex.tex % No exceptions now.
```

あとは次を実行します。最初の mktexlsr が必要ない方は実行しなくても構いません。

```
mktexlsr
fmtutil --byfmt latex
fmtutil --byfmt platex
```

以上で終わりです。

[栗山雅俊さん](http://ethics.let.hokudai.ac.jp/~gpae/plus2/?Staff/Kuriyama)が
作成された[横書き](https://okumuralab.org/~okumura/texfaq/qa/36989.html)と[縦書き](https://okumuralab.org/~okumura/texfaq/qa/36993.html)の2種類のサンプルが
ありますので，試してみてください。

## 多言語の Unicode 直接入力と pTeX {#cyraccpw}

### 概要 {#tagaiyos}

[ASCII 文字による翻字入力方式](</アスキー文字を用いた転写表記/>)は
入力ソフト (input method) を必要としないという点で有用な手段ですが，
中にはそれぞれの外国語を input method で直接入力して多言語混在 Unicode 文書を
作成し，これを TeX で処理したいという方もいらっしゃるでしょう。

現在では各種フィルタソフト（プリプロセッサ）がありますので，
それと併用することで Unicode のまま編集することができるようになりました。
また Unicode のまま編集することで，Aspell によるスペルチェックもできます。

フランス語やドイツ語などの Latin-1, Latin-2 文字，ギリシア文字，
ロシア語のキリル文字，ヴェトナム語，グルジア語，中国語，韓國語に
ついては[安田功さん](http://yasuda.homeip.net/)が
[Utf82TeX](http://yasuda.homeip.net/tex/utf82tex.html) を
公開していますので，これを用いれば一括で pTeX 処理可能な文書に変換できます。

なお，pTeX 本体の Unicode (UTF-8) 対応に
ついては[土村展之さん](http://www.nn.iij4u.or.jp/~tutimura/)による
試みがあります。すでに [ptetex3](/Make/#saac55c2) と
[W32TeX](http://w32tex.org/) で
利用可能になっています（現在は和文とラテン文字のみの対応）。また
[ttk (TANAKA, Takuji) さん](http://homepage3.nifty.com/ttk/comp/tex/)による
[upTeX](http://homepage3.nifty.com/ttk/comp/tex/uptex.html)
（pTeX の内部 Unicode 版）の開発も始まりました
（現在はβ版，なお [ptetexWiki:UTF-8対応(4)](http://tutimura.ath.cx/ptetex/?UTF-8%E5%AF%BE%E5%BF%9C%284%29) もご覧ください）。

### Unicode のテキストファイルを作るには？ {#j8063098}

このスクリプトを使うためには，もちろん外国語を直接入力するための入力ソフト
(input method)，そして Unicode (UTF-8) 対応のテキストエディタが必要です。

input method については，[Google](http://www.google.co.jp/) などで探してみましょう。参考までに，[フランス語入力](http://wm.tamagawa.ac.jp/manual/Bb/user/FirstStepMyPC_ja_JP/appendix/FirstStepMyPC_c14appendix_12.htm)，[ドイツ語入力](http://wm.tamagawa.ac.jp/manual/Bb/user/FirstStepMyPC_ja_JP/appendix/FirstStepMyPC_c14appendix_13.htm)，[スペイン語入力](http://wm.tamagawa.ac.jp/manual/Bb/user/FirstStepMyPC_ja_JP/appendix/FirstStepMyPC_c14appendix_14.htm)，[ギリシャ語入力](http://homepage1.nifty.com/suzuri/000/pc3.html)，[ロシア語入力](http://www.l.u-tokyo.ac.jp/~slav/wrusindex.html)，[タイ語入力](http://www.fan.hi-ho.ne.jp/rkawa/pcthai/winxp/winxp.html) に関するサイトを挙げておきます。

一方の Unicode (UTF-8) 対応テキストエディタですが，Microsoft Windows では
元々附属しているメモ帳 (Notepad) の他に
フリーウェアとして
[Emacs](/Emacs/) ([NTEmacs](http://gnupack.sourceforge.jp/docs/current/UsersGuide_download.html#_download_emacs)，[Meadow](http://www.meadowy.org/meadow/))，
[Vim](/Vim/)，
[xyzzy](/xyzzy/)，
[jEdit](http://www.jedit.org/)，
[FooEditor](http://sourceforge.jp/projects/fooeditor/)，
[Notepad++](/Notepad++/)，
[サクラエディタ](</サクラエディタ/>) UNICODE 版，
Mery，
[真魚［まな］](http://mana.ikuto.com/)，
[Alpha](http://sourceforge.jp/projects/alpha/releases/?package_id=1965)，
[AkelPad](http://akelpad.sourceforge.net/)，
[GreenPad](http://www.kmonos.net/lib/gp.html)，
[EmEditor Free](http://www.forest.impress.co.jp/lib/offc/document/txteditor/emeditor.html)
などが，シェアウェアと
して [秀丸エディタ](</秀丸エディタ/>) ([学生などは無料で利用できます](http://hide.maruo.co.jp/support/hidemarufree.html))，
WZ EDITOR，
[EmEditor Professional](http://jp.emeditor.com/)
などがあります。
ただ，xyzzy はタイ語などには
対応していません。NTEmacs は充分すぎるほどの多言語対応能力を持ち，ビルドの更新頻度が Meadow よりも活発です。起動の速さを重視する方は AkelPad，メモ帳がおすすめです。Linux などの UNIX 互換 OS では
GNU [Emacs](/Emacs/)，[Vim](/Vim/) が，Mac OS X では
Carbon Emacs，[Cocoa Emacs/Mac Emacs](http://www.muskmelon.jp/macosx/)，[MacVim-KaoriYa](http://code.google.com/p/macvim-kaoriya/) が，定番だと思います。

そこで Microsoft Windows に附属しているワードパッド (WordPad) で
リッチテキスト形式 (RTF) の多言語文書を
作り，[RTFコンバータ](http://www5b.biglobe.ne.jp/~harigaya/rtfcnv.html)で
UTF-8 テキストファイルに変換する方法をお勧めします。RTFコンバータの
インストールは，インストーラの指示に従ってインストールするだけなので簡単です。

まず，ワードパッドで多言語文書を作ります。それぞれの言語で，適当に
フォントを切り替えながら編集します（例えば，日本語は「ＭＳ ゴシック」など，
ラテンアルファベット系言語・キリルアルファベット系言語・ギリシア語は
Microsoft Sans Serif など，タイ語は Tahoma，中国語は SimSun など，
韓國語は Dotum など）。文書の保存はリッチテキスト形式で構いません。

あとは RTFコンバータを起動し，入力にワードパッドで作成した文書を指定して
「出力ファイルの種類」を「テキスト形式」に，「テキストファイルのコード」を
「Unicode (UTF-8)」に指定します。出力先・出力ファイル名を適当に決めて
「実行」ボタンをクリックすることで，多言語テキストファイルが作られます。

### UTF82TeX のインストール・設定 {#iutf82tx}

安田さんのスクリプトの実行には Perl が必要になります。Perl をインストールしていない方は
[Strawberry Perl](http://strawberryperl.com/)，[ActivePerl](http://www.activestate.com/Products/ActivePerl/)をインストールしておきましょう。
なお，PC-UNIX環境の方は各ディストリビューション毎にパッケージが用意されている(ないしインストール済みである)場合が多いです。

まず，[Utf82TeX](http://yasuda.homeip.net/tex/utf82tex.html) の[ダウンロード・サービス](http://yasuda.homeip.net/dl/dl.html#g)から utf82tex-\*.zip をダウンロードし，展開（解凍）します。展開したディレクトリ内のutf82texというファイルをUnicode対応のテキストエディタで開きますと，先頭の行に

```
#!/usr/bin/perl -w
```

と書いてありますので，これを環境に合わせて（例えばActivePerlをデフォルトのままインストールしたなら

```
#!/Perl/bin/perl -w
```

と書く）に直しておきます。

タイ語を扱う場合，

```
# iconv, swath 実行可能チェック
if ($opts{'t'}) {
	unless (-x $ICONV && -x $SWATH) {
		die "Swath or Iconv not executable.\n";
	} else {
		$ICONV .= " " . $ICOPT; $SWATH .= " " . $SWOPT;
	}
}
```

を

```
# iconv, swath 実行可能チェック
if ($opts{'t'}) {
#	unless (-x $ICONV && -x $SWATH) {
#		die "Swath or Iconv not executable.\n";
#	} else {
		$ICONV .= " " . $ICOPT; $SWATH .= " " . $SWOPT;
#	}
}
```

のように変更します。（変更点は，単に一部の行の頭に#をつけただけです。）

あとは Utf82TeX を PATH の通ったディレクトリ
（例えば TeX のインストールディレクトリ内にある
実行ファイルディレクトリ C:\w32tex\bin\ など）にコピーします。
ついでに TeX 実行ファイルのインストール先であれば
そのディレクトリ内にある perlexec.exe を utf82tex.exe などに
コピーしておきます。（こうしておくとコマンド実行時に便利ですので。）

次に，config/ ディレクトリの中の utf82texrc/，contrib/
ディレクトリそのもの，tables/ ディレクトリの中の \*-tbl をすべて
C:\usr\local\etc\utf82texフォルダ（無い場合には作る）にコピーします。
上以外の場所にコピーしたい場合には
環境変数 UTF82TEXRC にその場所への PATH を設定する必要があります。

utf82texrc の PATH は特に /usr/local/bin から
C:\\\usr\\\local\\\bin のように変更する必要はないようです。
ただ，SWATH のオプションの部分は変更する必要があるかもしれません。
ここの記述のとおりにタイ語環境を構築した場合，utf82texrc を

```
$SWOPT   = "-f latex -d C:\\usr\\local\\bin\\data";
```

のように変更します。

### UTF82TeX の使い方 {#ususeutf}

実際にテキストエディタでUnicode文書を書いてみましょう。

さまざまな言語の入力ソフトを併用して書いていきます。

準備ができたら，[Utf82TeX のページの入力例](http://yasuda.homeip.net/tex/utf82tex.html)も参考に書いていきます。タイ語も混在編集して構いません。中国語と韓國語はタグによって処理を分ける独自の方式
をとります。したがって，OTFCJKをインストールする必要もおそらくありません。タグは
%でコメントアウトしておくことで，TeXには無視させられます。

さて，いろいろ頑張って一通り書き終わりました。このファイルをutftest8.texとします。ここでUtf82TeXの出番です。コマンドラインから

```
utf82tex <utftest8.tex >utftest8-utex.tex
```

を実行します。すると，utftest8.texを変換した結果をutf8out.texに書き出します。

書き出したutftest8-utf.texはUTF8のままなので，エディタやiconvなどで，Shift_JISなどpTeXの扱える文字コードに直しておきます。
（土村氏によるpTeXの [UTF-8 対応［非公式］パッチ](http://tutimura.ath.cx/ptetex/?UTF-8%E5%AF%BE%E5%BF%9C%282%29) を用い，platex-utf8  または platex --kanji=utf8 ［[qa:47792](https://okumuralab.org/~okumura/texfaq/qa/47792.html) 参照］でコンパイルする場合にはこのステップは不要です。 このパッチは最新のptetex3, W32TeXには導入されています。）

タイ語が入っている場合は-tオプションを，ヴェトナム語やグルジア語などの拡張変換表を用いる場合は-xオプションをつけます。

あとは pLaTeX あるいは LaTeX にかけるだけです。（「そういえばロシア語・ギリシア語を使う環境をまだそろえていなかった」という方は[新 pTeX とBabel](</新 pTeX とBabel/>)
を是非ご覧ください。また，それ以外の外国語については，ここの該当箇所をお読みください。）

## 謝辞 {#mlathbos}

本文書を作るにあたり，[「TeX Q &amp; A」掲示板](https://okumuralab.org/~okumura/texfaq/qa/index.html)でご教示くださった方々に
心より御礼申し上げます。

## Comments {#mlcomeiz}

- 何かここの記述について間違いなどございましたらコメント欄にお願いします。 -- 書いた人 2005-12-14 (水) 16:33:57
- 今回の修正事項はレイアウト上の単純ミスの訂正のみです。 -- 書いた人 2005-12-21 (水) 18:34:10
- 多言語処理についてまとめて下さりありがとうございます（素晴らしいです!）。VnTeXについてですが、CTANでより新しいバージョンが配布されているようです（[VnTeX-3.02](ftp://ftp.ring.gr.jp/pub/text/CTAN/language/vietnamese/vntex/)）。[安田さんの解説](http://www.ceres.dti.ne.jp/~i-yasuda/tex/cjk.html#d)もあります。 -- 栗山雅俊 2005-12-26 (月) 20:58:48
- ありがとうございます。最新のものについても暇を見て試してみたいと思います。 -- 書いた人 2005-12-27 (火) 08:56:43
- Utf82TeX をバージョンアップしました。 -- 安田 2005-12-28 (水) 10:49:28
- ご報告ありがとう御座いました。新しい記述に暇を見つけて直していきたいと思います。 -- 書いた人 2005-12-28 (水) 18:31:31
- UTF82TeXについて、最新版に対応した記述に改めました。 -- 書いた人 2006-01-04 (水) 16:59:01
- アラビア語・モンゴル語・「RTFコンバータ」を用いた多言語編集について記述しました。 -- 書いた人 2006-01-05 (木) 15:43:31
- 「はじめに」でWiki内の LaTeX-CJK ページへリンクを貼りました。 -- 栗山 2006-01-11 (水) 12:50:47
- Utf82TeX タイ語処理は -t オプションが必要です。タイ語処理が不要なら、-t を指定しなければ swath、iconv がなくても動作します。 -- 安田 2006-01-11 (水) 15:23:02
- ありがとうございました。安田さんのご指摘を反映させました。 -- 書いた人 2006-01-11 (水) 18:32:54
- ArabTeXマニュアル日本語訳へのリンクをサイト移転にともない修正しました． -- 大足 2006-05-07 (日) 00:10:15
- CTAN Directory （旧CTAN/language）のリンクを修正しました。 -- 稲垣 2007-01-13 (土) 18:38:42
- 「ASCII文字による転写方式」についての説明が冒頭付近に欲しいような気がいたします． -- kd 2007-01-15 (月) 09:18:09
- VnTeX の最新版が [CTAN:language/vietnamese/](https://mirror.ctan.org/language/vietnamese/) に登録されています。重要な変更箇所は，t5enc.def \[2006/11/21 v1.4 Vietnamese T5 encoding\] における \d のバグフィックスと \horn{o} 等入力方法の変更（新：\ohorn，\Ohorn，\uhorn，\Uhorn）です。簡単な入出力例は「[CTAN Directory: Vietnamese](http://www2.tba.t-com.ne.jp/ing/ctan/vietnamese.html)」を参照願います。なお，UTF82TeX については言及していません。 -- 稲垣 2007-02-05 (月) 11:42:03
- 「ASCII文字による転写方式」ですが，[『新pTeXとBabel』](http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?%E6%96%B0%20pTeX%20%E3%81%A8Babel)でのサンプルだけでは足りないでしょうか。 -- 栗山 2007-02-06 (火) 05:43:37
- [アスキー文字を用いた転写表記](</アスキー文字を用いた転写表記/>)という解説があるようです． -- kd 2007-02-16 (金) 09:14:53
- ASCII転写入力について記述を少し加えてみました。こんな感じでいかがでしょうか。 -- 栗山 2007-02-22 (木) 23:26:49
- 上記に関連して若干記述を追加しました（かえって見づらくなったかも...）。 -- 栗山 2007-02-24 (土) 21:13:48
- Babel &amp; hebrew について簡単に追加。-- ttk 2008-01-14 (月) 05:37:55
- Windows上のUnicode対応テキストエディタなら秀丸も便利です -- 書いた人 2008-01-15 (火) 22:13:03
- Unicode (UTF-8) 対応テキストエディタとして挙げられているものに、たとえばサクラエディタの通常版のように、内部コードがShiftJISになっているもの、つまり実質UNICODEが扱えないものは混ざっていないでしょうか？ -- ken 2011-06-14 (火) 05:03:27
