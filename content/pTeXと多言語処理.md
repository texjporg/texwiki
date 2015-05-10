---
title: "pTeXと多言語処理"
url: "/pTeXと多言語処理/"
date: 2011-03-28T18:53:52Z
pukiwiki: "pTeXと多言語処理"
---

# pTeXと多言語処理

## upTeX, pTeX と多言語処理 {#z7e3fae1}

***

***

## 初めに {#pfirasfd}

ここでは pTeX での多言語処理を扱います．
[upTeX](/upTeX,upLaTeX/) については、CJK 以外の言語では事情は pTeX とほぼ同じです。
[upTeX, upLaTeXによる多言語処理](/upTeX,upLaTeX/#b41c00bb)も参照してください。

pTeX 上で多言語混在文書を扱う方法をまとめたものとして，[稲垣徹さん](http://web.archive.org/web/20140709181648/http://www2.tba.t-com.ne.jp/ing/)による「[pTeX 3.1.41とBabel 3.8 \[Internet Archive\]](http://web.archive.org/web/20130727072828/http://www2.tba.t-com.ne.jp/ing/babel.html#babel)」や「[日本語 LaTeX による多言語処理 &mdash; CTAN directory \[Internet Archive\]](http://web.archive.org/web/20130522162657/http://www2.tba.t-com.ne.jp/ing/ctan/ctanindex.htmll)」が知られています。
ただ，一部の言語，例えば中国語（&#x6c49;&#x8bed;［漢語］，中文）・韓国語（&#xd55c;&#xad6d;&#xc5b4;）・タイ語などについては取り扱っていませんし，個々のパッケージのインストール方法についても一部のパッケージについては割愛しています。
そこで稲垣さんが取り上げてくださることを期待しつつ，補足情報のようなものを Wiki 上でまとめていこうと考えています。

この文書では基本的に Microsoft Windows を想定して書いていますが，UNIX 互換 OS などでも似たような方法でインストールできるかもしれません。
また，[安田功さんの解説](http://yasuda.homeip.net/tex/texinst2.html)は UNIX 互換 OS での多言語環境構築において非常に参考になると思います。

### 参考—upTeX, pTeX を使わない方法 {#o00569f3}

ちなみに，upTeX, pTeX でなくても良い場合は，

1. [LuaTeX](/LuaTeX/)
1. LuaJITTeX
1. [XeTeX](/XeTeX/)

によるアプローチなどが考えられます。

CJK に関しては，

1. [XeLaTeX](/XeTeX/) + [xeCJK パッケージ](/xeCJK/)
1. [(pdf)LaTeX](/pdfTeX/) + [CJK パッケージ](/LaTeX-CJK/)

などが考えられます。

### 入力方法—ASCII 翻字入力 (transliteration) と直接入力 {#n744380c}

英語以外の言語の多くは，今までラテンアルファベットによる対応付け（“transliteration” ［翻字，文字転写，字訳］ないし ASCII 翻字入力）による方法が一般的でした。
これは TeX ソースファイル入力時にアクセント記号，あるいは文字全部を ASCII 文字の組み合わせで代替するもので，以下の記述も基本的にはこの方法に基づいています。
ASCII 翻字入力についての詳細は [TeXWiki:アスキー文字を用いた転写表記](</アスキー文字を用いた転写表記/>) をご覧ください（入力サンプルは [TeXWiki:新 pTeX と Babel #タイプセットのテスト](</新 pTeX とBabel/#mafcbf19>)）。
また Unicode を用いた直接入力については[#多言語の Unicode 直接入力と upTeX](#cyraccpw) をご覧ください。

## 多言語の Unicode 直接入力と upTeX {#cyraccpw}

### 概要 {#tagaiyos}

[ASCII 文字による翻字入力方式](</アスキー文字を用いた転写表記/>)は入力ソフト (input method) を必要としないという点で有用な手段ですが，中にはそれぞれの外国語を input method で直接入力して多言語混在 Unicode 文書を作成し，これを TeX で処理したいという方もいらっしゃるでしょう。
現在では [ttk (TANAKA, Takuji) さん](http://www.t-lab.opal.ne.jp/tex/)による [upTeX](http://www.t-lab.opal.ne.jp/tex/uptex.html) が [TeX Live](</TeX Live/>) と [W32TeX](/W32TeX/) で利用可能になっています。

### Unicode のテキストファイルを作るには？ {#j8063098}

Unicode のテキストファイルを作成して多言語処理をするためには外国語を直接入力するための入力ソフト (input method)，そして Unicode (UTF-8) 対応のテキストエディタが必要です。

input method については，[Google](https://www.google.co.jp/) などで探してみましょう。
参考までに，[フランス語入力](http://www.solac.kobe-u.ac.jp/france/doku.php/tools:keyboard)，[ドイツ語入力](http://kazajirushi.blog81.fc2.com/blog-entry-977.html)，[スペイン語入力](http://www.spaingo.jp/input.html)，[ギリシャ語入力](http://glc.l.u-tokyo.ac.jp/pukiwiki/index.php?eLearning%2FInputMethod%2FGreek%2FWindows)，[ロシア語入力](http://www.l.u-tokyo.ac.jp/~slav/05info/winrus/)，[タイ語入力](http://www.geocities.jp/evs800/win7.html) に関するサイトを挙げておきます。

Unicode (UTF-8) 対応テキストエディタについては，Microsoft Windows では元々付属しているメモ帳 (Notepad) の他にオープンソースソフトウェアとして
[Emacs](/Emacs/)，
[Vim](/Vim/)，
[Atom](/Atom/)，
[Brackets](/Brackets/)，
[Notepad++](/Notepad++/)，
[サクラエディタ](</サクラエディタ/>) Ver. 2 以降などがあります。
Emacs は充分すぎるほどの多言語対応能力を持っていますが起動に多少時間がかかるかもしれません。
起動の速さを重視する方はメモ帳がおすすめです。

OS X や Linux などでは [Emacs](/Emacs/)，[Vim](/Vim/), [Atom](/Atom/), [Brackets](/Brackets/) が定番だと思います。

## 欧米（キリル文字含む）の諸言語 {#obaldssd}

### Babel を用いた方法 {#lsdjceet}

欧米の諸言語であれば，Babel というパッケージを用いることで非常に美しい文書が作れます。
これは各言語のハイフネーション・正書法のみならず，「参考文献」などの見出しまで各国の言語で出力してくれるという至れり尽くせりのパッケージです。
インストールについては，基本的な言語のみであれば [TwXWiki:新 pTeX と Babel](</新 pTeX とBabel/>) あるいは「[Babelを使った最新版LaTeX2e, pLaTeX2eでの多言語環境構築--pTeX-p3.1.4以降（Win・UNIX・Mac）](http://web.archive.org/web/20130727072828/http://www2.tba.t-com.ne.jp/ing/babel.html)」や「[pTeX 3.1.41とBabel 3.8](http://web.archive.org/web/20130727072828/http://www2.tba.t-com.ne.jp/ing/babel.html)」をご覧ください。

### 各パッケージによる方法 {#otpckgsd}

文字がラテンアルファベットやキリル文字でない場合，各種パッケージを用いることになるかもしれません。
欧米の諸言語であれば「[pTeX 3.1.41とBabel 3.8](http://web.archive.org/web/20130727072828/http://www2.tba.t-com.ne.jp/ing/babel.html)」でも取り扱っていますが，ここでは例としてグルジア語について紹介します。

#### グルジア語 {#mxeldrul}

グルジア語の場合，TeX では [mxedruli パッケージ](https://mirror.ctan.org/help/Catalogue/entries/mxedruli.html)を用いることで，多数のグルジア文字を扱うことができます。
mxedruli パッケージは ASCII アルファベットでグルジア語を記述することになります。
入力ソフト (input method) がない場合は大変助かりますが，持っている方にとってはこのままではちょっと不便かもしれません。
そんな方は UTF82TeX を -x オプションつきで実行してみてください。

インストール方法について解説します。

グルジア語を扱う TeX パッケージである
[mxedruli パッケージ](https://mirror.ctan.org/fonts/georgian/mxedruli/)をダウンロードし，展開（解凍）します。
$TEXMFLOCAL/fonts/source/mxedruli/ に mf/ ディレクトリの中身を，$TEXMFLOCAL/tex/latex/mxedruli/ に inputs/ ディレクトリの中身をコピーします。
（mxedruli/ ディレクトリは新たに作ります。名前は別に “mxedruli” でなくても良いですが。）
必要な方は mktexlsr コマンドを実行しておきましょう。

グルジア語の場合，次のようにソースを書いていきます。
\usepackage でmxedruli を読み込みます。
グルジア語は mxedr 環境内に書きます。
ASCII 文字ではなく，直接グルジア文字を入力している場合，保存する際には文字コード（エンコーディング）を UTF-8 で保存します。

***

```
%%% -*- mode: yatex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass[uplatex]{jsarticle}
%\documentclass{ujarticle}
\usepackage{mxedruli}
\begin{document}
日本語を使いつつ，グルジア語のアルファベットを記述していきます。
```

```
\begin{mxedr}
%%% （mxedr 環境にグルジア文字を直接記述します。
%%%   表記できない文字はマニュアルを参考に
%%%   ASCII アルファベットで直接書きます。）
\end{mxedr}
```

```
\end{document}
```

***

グルジア文字を直接入力している場合は，UTF82TeX を用いてグルジア文字を mxedruli パッケージ用の ASCII 文字転写規則に変換しましょう。

文書が出来ましたら，普通に ptex2pdf で処理します。すなわち，

```
ptex2pdf -u -l gtest-o.tex
```

を実行します。
PDF ファイルをプレビューしてみて，うまくいっているかどうかを確認してください。

## 中東の諸言語 {#arablowic}

### アラビア語 {#r238fbee}

アラビア語についてはArabTeX上で扱えますし，ヘブライ語はArabTeXによる方法とBabelから用いる方法の2種類があるようです。
詳細は，[ArabTeX User's Manualの日本語訳](http://www.kotoito.net/arabtex.html),
[ArabTeX の導入 ～アラビア文字を TeX で～](http://syun2ej.jugem.jp/?eid=3364)
などをご覧ください。

インストール方法については「[日本語 LaTeX による多言語処理 &mdash; CTAN directory](http://www2.tba.t-com.ne.jp/ing/ctan/ctanindex.html)」に説明がありますが，一応ここでもインストール解説をします。

TeX Live の場合は ArabTeX は最初からインストールされています。
W32TeX の場合は [ArabTeX](http://www.ctan.org/pkg/arabtex) をダウンロードします。
展開（解凍）後，次のようにコピーします。
$TEXMFLOCAL は C:/w32tex/share/texmf-local などご自分の環境に置き換えてください。

- mfinput/ ディレクトリ内のファイルすべて → $TEXMFLOCAL/fonts/source/public/arabtex/
- tfm/ ディレクトリ内のファイルすべて → $TEXMFLOCAL/fonts/tfm/public/arabtex/
- psfonts/ ディレクトリ内の PFB ファイルすべて → $TEXMFLOCAL/fonts/type1/public/arabtex/
- psfonts/ ディレクトリ内の map ファイルすべて → $TEXMFLOCAL/fonts/map/dvips/arabtex/
- texinput/ ディレクトリ内のファイルすべて → $TEXMFLOCAL/tex/latex/arabtex/

さらに，安田さんが ArabTeX と Babel を共存させるためのパッチを作ってくださいました。
パッチ適用済みのファイルは「[ダウンロード・サービス #ArabTeX 7 ビット化アーカイブ](http://yasuda.homeip.net/dl/dl.html#p)」からダウンロードします。
これらは $TEXMFLOCAL/tex/latex/arabtex/ にコピーします。

必要な方は Windows PowerShell またはコマンド プロンプトで mktexlsr を実行します。

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
TeX--XeT 機能を用いるため [e-TeX](/e-TeX/) 非対応の古い pTeX では処理できませんでしたが，[e-pTeX](/e-pTeX/) の登場により処理可能になりました。

参考： [qa:50566](https://okumuralab.org/~okumura/texfaq/qa/50566.html),  [qa:50568](https://okumuralab.org/~okumura/texfaq/qa/50568.html), [qa:50589](https://okumuralab.org/~okumura/texfaq/qa/50589.html), [qa:55967](https://okumuralab.org/~okumura/texfaq/qa/55967.html) <!-- , [[qa:55969]], [[qa:55970]] ← これらはドイツ語なので削っておきます。 -->

## 中央アジアの諸言語 {#arsktowi}

サンスクリット語は skt パッケージなどが知られています。
また，ベンガル語・タミル語などの言語についても扱えます。
これらについても「[pTeX 3.1.4 と Babel 3.8](http://www2.tba.t-com.ne.jp/ing/babel.html#babel)」や「[日本語 LaTeX による多言語処理 &mdash; CTAN directory](http://www2.tba.t-com.ne.jp/ing/ctan/ctanindex.html)」をご覧ください。
後者にはインストール方法についての解説もあります。

## 東南アジアの諸言語 {#sethiecs}

### ヴェトナム語 {#vnwtexpi}

ヴェトナム語の場合は [VnTeX](http://sourceforge.net/projects/vntex/) を用います。
TeX Live の場合は VnTeX は最初からインストールされています。

入力は基本的に ASCII 文字で書いていきますが，ヴェトナム語の入力ソフト (input method) を持っている方は UTF82TeX という変換スクリプトがありますので，それで入力しても大丈夫です（-x オプションをつけて実行します）。

***

```
%%% -*- mode: yatex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass[uplatex]{jsarticle}
%\documentclass{ujarticle}
\usepackage{inputenc}
\usepackage[T1]{fontenc}
\usepackage{dblaccnt}
\usepackage[vietnam,english]{babel}
\begin{document}
```

```
こんな感じです。
```

```
\begin{otherlanguage}{vietnam}
%%% この中にヴェトナム語を直接入力
\end{otherlanguage}
\end{document}
```

***

ソースをヴェトナム文字で直接入力した方は，UTF82TeX で変換してください。

出来上がったら ptex2pdf で処理します。

```
ptex2pdf -u -l vtest-o.tex
```

PDF ファイルを見ると，ヴェトナム語が正常に表示されているはずです。

### タイ語 {#thiocpaq}

[タイ語をどうにかする実験 \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/bxthai.html) を参照．

タイ語はthailatexを使って記述できます。
ただし，タイ文字を7ビット化するなど，一工夫必要です。

まず，タイ語をTIS-620という文字コードで記述できるエディタまたは UTF-8 に対応したエディタと iconv が必要です。
TIS-620を直接編集できるテキストエディタとして，Windowsの場合，[Emacs](/Emacs/), [Notepad++](/Notepad++/) が対応しています。
iconv は [MSYS2](/MinGW/#x1532c23) に含まれています．

以下のスクリプトの実行には [Strawberry Perl](http://strawberryperl.com/) など，Perl が必要になりますので，忘れずにインストールしてください。
[8bt2ptex.pl](http://web.archive.org/web/20121121181915/http://www2.tba.t-com.ne.jp/ing/ctan/8bt2ptex.pl)をダウンロードし，エディタで開いて一番上の

```
#!perl
```

を

```
#!/strawberry/perl/bin/perl
```

など自分の環境に合わせて修正します。
そして C:\w32tex\bin\ など platex.exe などのある場所にコピーし，同じ場所にある perlexec.exe を同じ場所にコピーして 8bt2ptex.exe と名前を変更します。（こうすることで，8bt2ptex を実行しやすくなります。）

thailatexのWindows用はMikTeXで用いられるものになっていますが，TDS 1.1に合わせて
適切にコピーすることで角藤さんのW32TeX(pTeX)でも使えるようになります。
[thailatexの解説ページ（タイ語）](http://khombkk.tripod.com/mikfiles/miktle.htm)より，「miktl025.zip」と「SWATH」（下の\[local copy\]のリンク先からダウンロード可能）の2つをダウンロードします。（直接リンクするとうまくダウンロードできませんでしたので，ご面倒でも上の解説ページより各自ダウンロードしてください。）

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

にコピーします。thai.ldfはthaiold.ldfなどと名前を変え，Windows PowerShell またはコマンド プロンプトで

```
8bt2ptex thaiold.ldf >thai.ldf
```

で7ビット化したthai.ldfをコピーします。

その後，$TEXMF/fonts/map/dvipdfmx/base/cid-x.map に

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

と記述します。もう一つダウンロードしてきた swathw32.zip は展開（解凍）して， data/ ディレクトリと swath.exe を C:\w32tex\bin\ など PATH の通ったところにコピーします（data/ ディレクトリは別にどこにコピーしても同じだと思いますが）。

では，実際にタイ語文書を作りましょう。

Unicodeでタイ語文書を記述可能なエディタを用いてタイ語を編集して保存します。
[Emacs](/Emacs/) をお使いの場合は，それを用いてタイ語を書き，UTF-8で保存します。
これをthaiutf8.txtとします。
コマンドラインから iconv を実行し，TIS-620という文字コードに変換します。

```
iconv -c -f UTF-8 -t TIS620 <thaiutf8.txt >thaimemo.txt
```

TIS-620 の文字コードで編集して保存した場合は上のような iconv での変換作業は不要です。

これらの方法などで出来た thaimemo.txt を Windows PowerShell またはコマンド プロンプトにて SWATH で処理し，単語の切れ目に \wbr という目印を付けます。
例えば data/ ディレクトリを C:\w32tex\bin\ にコピーしたなら，コマンド プロンプトで次のように実行します。

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
\documentclass[uplatex,a4paper]{jsarticle}
%\documentclass[a4paper]{ujarticle}
\usepackage[OT2,T1]{fontenc}
\usepackage[thai]{babel} % thai オプション
\usepackage{thswitch} % thswitch.sty を指定する
```

```
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
```

```
和文。日本語OK
```

```
\end{document}
```

***

このTeXソースをfoo.texとします。

あとはいつもの通りに処理します。

```
ptex2pdf -u -l foo.tex
```

foo.pdf を開くとタイ語と日本語が共存しているはずです。

なお Unicode でタイ語文書を記述できる方は，先に述べたような iconv → swath → 8bt2ptex の代わりに，最後の項で紹介する [UTF82TeX](</pTeXと多言語処理/#iutf82tx>) を用いたほうがさらに簡便です。

### その他の言語 {#osecjfhg}

その他の言語についてもパッケージがあると思います。
詳細は稲垣徹さんのウェブサイト「[日本語 LaTeX による多言語処理](http://web.archive.org/web/20140709181648/http://www2.tba.t-com.ne.jp/ing/)」をご覧ください。

## 東アジアの言語 {#easapflq}

### 中国語・韓国語 {#cjkinqd}

中国語（&#x6c49;&#x8bed;［漢語］，中文）・韓国語（&#xd55c;&#xad6d;&#xc5b4;）については，upTeX で直接扱うことができます。
PXbase パッケージを使用すれば upTeX で中国語（簡化字・繁體字の両方）と韓国語を簡単に扱えます。
PXbase パッケージは TeX Live, W32TeX に含まれています．

"sample.map(for dvipdfmx)" を参考に，$TEXMFLOCAL/fonts/map/dvipdfmx/base/cid-x.map に次のように追記しておきます。

#### $TEXMFLOCAL/fonts/map/dvipdfmx/base/cid-x.map への追記 {#u719ef74}

***

```
%rml            H                   Ryumin-Light
%rmlv           V                   Ryumin-Light
```

```
rml            H                   ipaexm.ttf
rmlv           V                   ipaexm.ttf
```

```
gbm            H                   ipaexg.ttf
gbmv           V                   ipaexg.ttf
```

```
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
```

```
hminr-h        H                   ipaexm.ttf
hminr-v        V                   ipaexm.ttf
otf-ujmr-h     UniJIS-UTF16-H      ipaexm.ttf
otf-ujmr-v     UniJIS-UTF16-V      ipaexm.ttf
```

<!-- %otf-cjmr-h     Identity-H          ipaexm.ttf/AJ16 -->

```
otf-cjmr-h     Adobe-Japan1-6      ipaexm.ttf
otf-cjmr-v     Identity-V          ipaexm.ttf/AJ16
```

```
hgothr-h       H                   ipaexg.ttf
hgothr-v       V                   ipaexg.ttf
otf-ujgr-h     UniJIS-UTF16-H      ipaexg.ttf
otf-ujgr-v     UniJIS-UTF16-V      ipaexg.ttf
```

<!-- %otf-cjgr-h     Identity-H          ipaexg.ttf/AJ16 -->

```
otf-cjgr-h     Adobe-Japan1-6      ipaexg.ttf
otf-cjgr-v     Identity-V          ipaexg.ttf/AJ16
```

```
%hminb-h        H                   Ryumin-Light,Bold
%hminb-v        V                   Ryumin-Light,Bold
%otf-ujmb-h     UniJIS-UTF16-H      Ryumin-Light,Bold
%otf-ujmb-v     UniJIS-UTF16-V      Ryumin-Light,Bold
```

<!-- %otf-cjmb-h     Identity-H          Ryumin-Light,Bold -->

```
%otf-cjmb-h     Adobe-Japan1-6      Ryumin-Light,Bold
%otf-cjmb-v     Identity-V          Ryumin-Light,Bold
```

```
hminb-h        H                :0:hgrmb.ttc
hminb-v        V                :0:hgrmb.ttc
otf-ujmb-h     UniJIS-UTF16-H   :0:hgrmb.ttc
otf-ujmb-v     UniJIS-UTF16-V   :0:hgrmb.ttc
```

<!-- %otf-cjmb-h     Identity-H       :0:hgrmb.ttc/AJ16 -->

```
otf-cjmb-h     Adobe-Japan1-6   :0:hgrmb.ttc
otf-cjmb-v     Identity-V       :0:hgrmb.ttc/AJ16
```

```
hgothb-h       H                :0:hgrge.ttc
hgothb-v       V                :0:hgrge.ttc
otf-ujgb-h     UniJIS-UTF16-H   :0:hgrge.ttc
otf-ujgb-v     UniJIS-UTF16-V   :0:hgrge.ttc
```

<!-- %otf-cjgb-h     Identity-H       :0:hgrge.ttc/AJ16 -->

```
otf-cjgb-h     Adobe-Japan1-6   :0:hgrge.ttc
otf-cjgb-v     Identity-V       :0:hgrge.ttc/AJ16
```

```
hmgothr-h      H                   wlmaru20044.ttf
hmgothr-v      V                   wlmaru20044.ttf
otf-ujmgr-h    UniJIS-UTF16-H      wlmaru20044.ttf
otf-ujmgr-v    UniJIS-UTF16-V      wlmaru20044.ttf
```

<!-- %otf-cjmgr-h    Identity-H          wlmaru20044.ttf/AJ16 -->

```
otf-cjmgr-h    Adobe-Japan1-6      wlmaru20044.ttf
otf-cjmgr-v    Identity-V          wlmaru20044.ttf/AJ16
```

```
hgotheb-h      H                :0:hgrsgu.ttc
hgotheb-v      V                :0:hgrsgu.ttc
```

```
%hminl-h        H                   HiraMinStdN-W2.otf
%hminl-v        V                   HiraMinStdN-W2.otf
%otf-ujml-h     UniJIS-UTF16-H      HiraMinStdN-W2.otf
%otf-ujml-v     UniJIS-UTF16-V      HiraMinStdN-W2.otf
```

<!-- %otf-cjml-h     Identity-H          HiraMinStdN-W2.otf -->

```
%otf-cjml-h     Adobe-Japan1-6      HiraMinStdN-W2.otf
%otf-cjml-v     Identity-V          HiraMinStdN-W2.otf
```

```
hminl-h        H                :0:msmincho.ttc
hminl-v        V                :0:msmincho.ttc
otf-ujml-h     UniJIS-UTF16-H   :0:msmincho.ttc
otf-ujml-v     UniJIS-UTF16-V   :0:msmincho.ttc
```

<!-- %otf-cjml-h     Identity-H       :0:msmincho.ttc/AJ16 -->

```
otf-cjml-h     Adobe-Japan1-6   :0:msmincho.ttc
otf-cjml-v     Identity-V       :0:msmincho.ttc/AJ16
```

```
%otf-ucmr-h     UniGB-UTF16-H       STSong-Light
%otf-ucmr-v     UniGB-UTF16-V       STSong-Light
```

<!-- %otf-ccmr-h     Identity-H          STSong-Light -->

```
%otf-ccmr-h     Adobe-GB1-4         STSong-Light
%otf-ccmr-v     Identity-V          STSong-Light
```

```
otf-ucmr-h     UniGB-UTF16-H       gbsn00lp.ttf
otf-ucmr-v     UniGB-UTF16-V       gbsn00lp.ttf
```

<!-- %otf-ccmr-h     Identity-H          gbsn00lp.ttf/AG14 -->

```
otf-ccmr-h     Adobe-GB1-4         gbsn00lp.ttf
otf-ccmr-v     Identity-V          gbsn00lp.ttf/AG14
```

```
otf-ucgr-h     UniGB-UTF16-H       wqy-zenhei.ttf
otf-ucgr-v     UniGB-UTF16-V       wqy-zenhei.ttf
```

<!-- %otf-ccgr-h     Identity-H          wqy-zenhei.ttf/AG14 -->

```
otf-ccgr-h     Adobe-GB1-4         wqy-zenhei.ttf
otf-ccgr-v     Identity-V          wqy-zenhei.ttf/AG14
```

```
%otf-utmr-h     UniCNS-UTF16-H      MSung-Light
%otf-utmr-v     UniCNS-UTF16-V      MSung-Light
```

<!-- %otf-ctmr-h     Identity-H          MSung-Light -->

```
%otf-ctmr-h     Adobe-CNS1-4        MSung-Light
%otf-ctmr-v     Identity-V          MSung-Light
```

```
otf-utmr-h     UniCNS-UTF16-H      uming.ttf
otf-utmr-v     UniCNS-UTF16-V      uming.ttf
```

<!-- %otf-ctmr-h     Identity-H          uming.ttf/AC14 -->

```
otf-ctmr-h     Adobe-CNS1-4        uming.ttf
otf-ctmr-v     Identity-V          uming.ttf/AC14
```

```
otf-utgr-h     UniCNS-UTF16-H      cwheib.ttf
otf-utgr-v     UniCNS-UTF16-V      cwheib.ttf
```

<!-- %otf-ctgr-h     Identity-H          cwheib.ttf/AC14 -->

```
otf-ctgr-h     Adobe-CNS1-4        cwheib.ttf
otf-ctgr-v     Identity-V          cwheib.ttf/AC14
```

```
%otf-ukmr-h     UniKS-UTF16-H       HYSMyeongJo-Medium
%otf-ukmr-v     UniKS-UTF16-V       HYSMyeongJo-Medium
```

<!-- %otf-ckmr-h     Identity-H          HYSMyeongJo-Medium -->

```
%otf-ckmr-h     Adobe-Korea1-2      HYSMyeongJo-Medium
%otf-ckmr-v     Identity-V          HYSMyeongJo-Medium
```

```
otf-ukmr-h     UniKS-UTF16-H       UnBatang.ttf
otf-ukmr-v     UniKS-UTF16-V       UnBatang.ttf
```

<!-- %otf-ckmr-h     Identity-H          UnBatang.ttf/AK12 -->

```
otf-ckmr-h     Adobe-Korea1-2      UnBatang.ttf
otf-ckmr-v     Identity-V          UnBatang.ttf/AK12
```

```
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
```

***

ここで日本語フォントに [IPAexフォント/IPAフォント](http://ipafont.ipa.go.jp/) (ipaexm.ttf, ipaexg.ttf) を，中国語簡化字フォントに [Arphic （文鼎） Technology のフォント](https://mirror.ctan.org/../../GNU/non-gnu/chinese-fonts-truetype/) (gbsn00lp.ttf) と [WenQuanYi outline fonts](http://wqy.sourceforge.net/en/) (wqy-zenhei.ttf) を，中国語繁體字フォントに [CJK-Unifonts](http://www.freedesktop.org/wiki/Software/CJKUnifonts) (uming.ttf) と [cwTeX TrueType font](http://cle.linux.org.tw/fonts/cwttf/) (cwheib.ttf) を，韓国語フォントに [Un-fonts](http://kldp.net/projects/unfonts/) (UnBatang.ttf, UnDotum.ttf) を用いています。
いずれも無償で入手できます。

Adobe Acrobat Reader DC 付属の CMap（どこにあるのか分からない場合には “UniGB-UTF16-H” で検索してみること）は例えば "C:\Program Files (x86)\Adobe\Acrobat Reader DC\Resource\CMap\\" にあるので，全て $TEXMFLOCAL/fonts/cmap/ 内に上書きコピーしておきます。

DVI → PS → PDF の流れで作りたい方は自分用のたとえば mydvips.map に次を記述します。(dvips のオプション -u+mydvips.map で使用)

#### mydvips.map への記述 (その1) {#r889375b}

***

```
rml                  Ryumin-Light-H
rmlv                 Ryumin-Light-V
```

```
gbm              GothicBBB-Medium-H
gbmv             GothicBBB-Medium-V
```

```
%%% OTF package
hminr-h              Ryumin-Light-H
hminr-v              Ryumin-Light-V
otf-ujmr-h           Ryumin-Light-UniJIS-UTF16-H
otf-ujmr-v           Ryumin-Light-UniJIS-UTF16-V
otf-cjmr-h           Ryumin-Light-Identity-H
otf-cjmr-v           Ryumin-Light-Identity-V
```

```
hgothr-h         GothicBBB-Medium-H
hgothr-v         GothicBBB-Medium-V
otf-ujgr-h       GothicBBB-Medium-UniJIS-UTF16-H
otf-ujgr-v       GothicBBB-Medium-UniJIS-UTF16-V
otf-cjgr-h       GothicBBB-Medium-Identity-H
otf-cjgr-v       GothicBBB-Medium-Identity-V
```

```
hminb-h          FutoMinA101-Bold-H
hminb-v          FutoMinA101-Bold-V
otf-ujmb-h       FutoMinA101-Bold-UniJIS-UTF16-H
otf-ujmb-v       FutoMinA101-Bold-UniJIS-UTF16-V
otf-cjmb-h       FutoMinA101-Bold-Identity-H
otf-cjmb-v       FutoMinA101-Bold-Identity-V
```

```
hgothb-h          FutoGoB101-Bold-H
hgothb-v          FutoGoB101-Bold-V
otf-ujgb-h        FutoGoB101-Bold-UniJIS-UTF16-H
otf-ujgb-v        FutoGoB101-Bold-UniJIS-UTF16-V
otf-cjgb-h        FutoGoB101-Bold-Identity-H
otf-cjgb-v        FutoGoB101-Bold-Identity-V
```

```
hmgothr-h            Jun101-Light-H
hmgothr-v            Jun101-Light-V
otf-ujmgr-h          Jun101-Light-UniJIS-UTF16-H
otf-ujmgr-v          Jun101-Light-UniJIS-UTF16-V
otf-cjmgr-h          Jun101-Light-Identity-H
otf-cjmgr-v          Jun101-Light-Identity-V
```

```
hgotheb-h          MidashiGo-MB31-H
hgotheb-v          MidashiGo-MB31-V
```

```
hminl-h            HiraMinStdN-W2-H
hminl-v            HiraMinStdN-W2-V
otf-ujml-h         HiraMinStdN-W2-UniJIS-UTF16-H
otf-ujml-v         HiraMinStdN-W2-UniJIS-UTF16-V
otf-cjml-h         HiraMinStdN-W2-Identity-H
otf-cjml-v         HiraMinStdN-W2-Identity-V
```

```
otf-ucmr-h           STSong-Light-UniGB-UTF16-H
otf-ucmr-v           STSong-Light-UniGB-UTF16-V
otf-ccmr-h           STSong-Light-Identity-H
otf-ccmr-v           STSong-Light-Identity-V
```

```
otf-ucgr-h        STHeiti-Regular-UniGB-UTF16-H
otf-ucgr-v        STHeiti-Regular-UniGB-UTF16-V
otf-ccgr-h        STHeiti-Regular-Identity-H
otf-ccgr-v        STHeiti-Regular-Identity-V
```

```
otf-utmr-h            MSung-Light-UniCNS-UTF16-H
otf-utmr-v            MSung-Light-UniCNS-UTF16-V
otf-ctmr-h            MSung-Light-Identity-H
otf-ctmr-v            MSung-Light-Identity-V
```

```
otf-utgr-h            MHei-Medium-UniCNS-UTF16-H
otf-utgr-v            MHei-Medium-UniCNS-UTF16-V
otf-ctgr-h            MHei-Medium-Identity-H
otf-ctgr-v            MHei-Medium-Identity-V
```

```
otf-ukmr-h     HYSMyeongJo-Medium-UniKS-UTF16-H
otf-ukmr-v     HYSMyeongJo-Medium-UniKS-UTF16-V
otf-ckmr-h     HYSMyeongJo-Medium-Identity-H
otf-ckmr-v     HYSMyeongJo-Medium-Identity-V
```

```
otf-ukgr-h        HYGoThic-Medium-UniKS-UTF16-H
otf-ukgr-v        HYGoThic-Medium-UniKS-UTF16-V
otf-ckgr-h        HYGoThic-Medium-Identity-H
otf-ckgr-v        HYGoThic-Medium-Identity-V
```

```
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
```

***

または

#### mydvips.map への記述 (その2) {#tfd8aa35}

***

```
rml                  RyuminPr6N-Light-H
rmlv                 RyuminPr6N-Light-V
```

```
gbm              GothicBBBPr6N-Medium-H
gbmv             GothicBBBPr6N-Medium-V
```

```
%%% OTF package
hminr-h              RyuminPr6N-Light-H
hminr-v              RyuminPr6N-Light-V
otf-ujmr-h           RyuminPr6N-Light-UniJIS-UTF16-H
otf-ujmr-v           RyuminPr6N-Light-UniJIS-UTF16-V
otf-cjmr-h           RyuminPr6N-Light-Identity-H
otf-cjmr-v           RyuminPr6N-Light-Identity-V
```

```
hgothr-h         GothicBBBPr6N-Medium-H
hgothr-v         GothicBBBPr6N-Medium-V
otf-ujgr-h       GothicBBBPr6N-Medium-UniJIS-UTF16-H
otf-ujgr-v       GothicBBBPr6N-Medium-UniJIS-UTF16-V
otf-cjgr-h       GothicBBBPr6N-Medium-Identity-H
otf-cjgr-v       GothicBBBPr6N-Medium-Identity-V
```

```
hminb-h          FutoMinA101Pr6N-Bold-H
hminb-v          FutoMinA101Pr6N-Bold-V
otf-ujmb-h       FutoMinA101Pr6N-Bold-UniJIS-UTF16-H
otf-ujmb-v       FutoMinA101Pr6N-Bold-UniJIS-UTF16-V
otf-cjmb-h       FutoMinA101Pr6N-Bold-Identity-H
otf-cjmb-v       FutoMinA101Pr6N-Bold-Identity-V
```

```
hgothb-h          FutoGoB101Pr6N-Bold-H
hgothb-v          FutoGoB101Pr6N-Bold-V
otf-ujgb-h        FutoGoB101Pr6N-Bold-UniJIS-UTF16-H
otf-ujgb-v        FutoGoB101Pr6N-Bold-UniJIS-UTF16-V
otf-cjgb-h        FutoGoB101Pr6N-Bold-Identity-H
otf-cjgb-v        FutoGoB101Pr6N-Bold-Identity-V
```

```
hmgothr-h            MidashiGoPr6N-MB31-H
hmgothr-v            MidashiGoPr6N-MB31-V
otf-ujmgr-h          MidashiGoPr6N-MB31-UniJIS-UTF16-H
otf-ujmgr-v          MidashiGoPr6N-MB31-UniJIS-UTF16-V
otf-cjmgr-h          MidashiGoPr6N-MB31-Identity-H
otf-cjmgr-v          MidashiGoPr6N-MB31-Identity-V
```

```
hminl-h            HiraMinStdN-W2-H
hminl-v            HiraMinStdN-W2-V
otf-ujml-h         HiraMinStdN-W2-UniJIS-UTF16-H
otf-ujml-v         HiraMinStdN-W2-UniJIS-UTF16-V
otf-cjml-h         HiraMinStdN-W2-Identity-H
otf-cjml-v         HiraMinStdN-W2-Identity-V
```

```
otf-ucmr-h           STSong-Light-UniGB-UTF16-H
otf-ucmr-v           STSong-Light-UniGB-UTF16-V
otf-ccmr-h           STSong-Light-Identity-H
otf-ccmr-v           STSong-Light-Identity-V
```

```
otf-ucgr-h        STHeiti-Regular-UniGB-UTF16-H
otf-ucgr-v        STHeiti-Regular-UniGB-UTF16-V
otf-ccgr-h        STHeiti-Regular-Identity-H
otf-ccgr-v        STHeiti-Regular-Identity-V
```

```
otf-utmr-h            MSung-Light-UniCNS-UTF16-H
otf-utmr-v            MSung-Light-UniCNS-UTF16-V
otf-ctmr-h            MSung-Light-Identity-H
otf-ctmr-v            MSung-Light-Identity-V
```

```
otf-utgr-h            MHei-Medium-UniCNS-UTF16-H
otf-utgr-v            MHei-Medium-UniCNS-UTF16-V
otf-ctgr-h            MHei-Medium-Identity-H
otf-ctgr-v            MHei-Medium-Identity-V
```

```
otf-ukmr-h     HYSMyeongJo-Medium-UniKS-UTF16-H
otf-ukmr-v     HYSMyeongJo-Medium-UniKS-UTF16-V
otf-ckmr-h     HYSMyeongJo-Medium-Identity-H
otf-ckmr-v     HYSMyeongJo-Medium-Identity-V
```

```
otf-ukgr-h        HYGoThic-Medium-UniKS-UTF16-H
otf-ukgr-v        HYGoThic-Medium-UniKS-UTF16-V
otf-ckgr-h        HYGoThic-Medium-Identity-H
otf-ckgr-v        HYGoThic-Medium-Identity-V
```

```
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
```

***

さらに，gs\gs$(rungs --version)\lib\cidfmap の末尾に次を追記します。

#### gs\gs$(rungs --version)\lib\cidfmap への追記 {#meed555f}

***

```
%!
%%% aliases
/Ryumin-Light                 /IPAexMincho                 ;
/Ryumin-Medium                /IPAexMincho                 ;
/FutoMinA101-Bold             /WadaMin-Bold                ;
/MidashiMin-MA31              /HGMinchoE                   ;
/GothicBBB-Medium             /IPAexGothic                 ;
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
```

```
%%% IPAex Fonts
%%% See http://ipafont.ipa.go.jp/
/IPAexMincho                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (ipaexm.ttf) >> ;
/IPAexGothic                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (ipaexg.ttf) >> ;
```

```
%%% IPA Fonts
%%% See http://ipafont.ipa.go.jp/
/IPAMincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (ipam.ttf) >> ;
/IPAGothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (ipag.ttf) >> ;
```

```
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
```

```
%%% Wadalab Maru Gothic (JIS X 0213)
%%% See http://osdn.jp/projects/jis2004/wiki/FrontPage
/WadaLabMaruGo20044           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (wlmaru20044.ttf) >> ;
/WadaLabMaruGo20004           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (wlmaru20004.ttf) >> ;
```

```
%%% Chinese TrueType font by Arphic Technology
%%% See ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/ShanHeiSun-Light             << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (bsmi00lp.ttf) >> ;
/ZenKai-Medium                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (bkai00mp.ttf) >> ;
/BousungEG-Light-GB           << /FileType /TrueType  /CSI [(GB1) 5]     /Path (gbsn00lp.ttf) >> ;
/GBZenKai-Medium              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (gkai00mp.ttf) >> ;
```

```
%%% CJK-Unifonts
%%% See http://www.freedesktop.org/wiki/Software/CJKUnifonts
/ShanHeiSun-Uni               << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (uming.ttf) >> ;
/ShanHeiSun-Uni-Adobe-GB1     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (uming.ttf) >> ;
/ZenKai-Uni                   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (ukai.ttf)  >> ;
/ZenKai-Uni-Adobe-GB1         << /FileType /TrueType  /CSI [(GB1) 5]     /Path (ukai.ttf)  >> ;
```

```
%%% WenQuanYi outline fonts
%%% See http://wqy.sourceforge.net/en/
%%%     http://sourceforge.net/projects/wqy/
/WenQuanYiZenHei              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (wqy-zenhei.ttf) >> ;
/WenQuanYiZenHei-Adobe-CNS1   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (wqy-zenhei.ttf) >> ;
```

```
%%% cwTeX TrueType font
%%% See http://cle.linux.org.tw/fonts/cwttf/
/cwTeXMing                    << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwming.ttf) >> ;
/cwTeXHeiBold                 << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwheib.ttf) >> ;
/cwTeXYen                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwyen.ttf)  >> ;
/cwTeXKai                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwkai.ttf)  >> ;
/cwTeXFangSong                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwfs.ttf)   >> ;
```

```
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
```

```
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
```

```
%%% monospaced TrueType outline fonts in Windows 10/8.1/8/7
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
```

```
%%% proportional TrueType outline fonts in Windows 10/8.1/8/7
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
```

```
%%% monospaced TrueType outline fonts in Windows 10/8.1/8/7
%%% See C:\Windows\Fonts\
/SimSun-ExtB                  << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsunb.ttf) >> ;
/KaiTi                        << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simkai.ttf)  >> ;
/FangSong                     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simfang.ttf) >> ;
/DFKaiShu-SB-Estd-BF          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/kaiu.ttf)    >> ;
```

```
%%% proportional TrueType outline fonts in Windows 10/8.1/8/7
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
```

```
%%% TrueType outline fonts in Microsoft Office 2013
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

なお，gs\gs$(rungs --version)\Resource\CMap\ に CMap をコピーしていない方は，そこに先に述べた Adobe Acrobat Reader DC 付属の CMap などをコピーしてください。

以上でインストールはようやく終わりです。

さて，TeX ソースに中国語・韓国語を入力するためには設定が必要です。
「[中国語・韓国語を入力したい](http://www.tjf.or.jp/ringo/migaku/post-22.php)」を参考に設定してください。

ここでは ZR さんの PXbase パッケージを使用します。

- [https://github.com/zr-tex8r/PXbase](https://github.com/zr-tex8r/PXbase)
- [upLaTeXを使おう \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/uplatex.html)
- [BXbase／PXbase パッケージ \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/pxbase.html)

使い方は非常に簡単で，繁體字（正體字）は「\foreignlanguage{tchinese}{}」，簡化字（&#x7b80;化字，簡体字）は「\foreignlanguage{schinese}{}」，ハングル（&#xd55c;&#xae00;）は「\foreignlanguage{korean}{}」を使用するだけです。

自分で書いてみたい方は次のような自己紹介の文章でも良いでしょう。このファイルを “cjkintro.tex” として UTF-8 で保存します。

***

```
%%% -*- mode: yatex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass[uplatex]{jsarticle}
%\documentclass{ujarticle}
\usepackage[english]{babel}
\usepackage[main=japanese]{pxbabel}
\begin{document}
\section{Japanese}
こんにちは。私の名前は\textbf{東大}です。よろしくお願いします。
```

```
こんにちは。私の名前は\textbf{ひがしひろし}です。よろしくお願いします。
```

```
\section{Chinese}
\subsection{Simplified Chinese}
%%% 簡化字中国語（中国大陸などで用いられる）の場合は
%%% 「\foreignlanguage{schinese}{}」を用います。
\foreignlanguage{schinese}{你好。说\textbf{东大}。请多关照。}
```

```
\subsection{Traditional Chinese}
%%% 繁體字中国語（臺灣［台湾］・香港などで用いられる）の場合は
%%% 「\foreignlanguage{tchinese}{}」を用います。
\foreignlanguage{tchinese}{你好。說\textbf{東大}。請多關照。}
```

```
\section{Korean}
%%% 韓国語・朝鮮語の場合は「\foreignlanguage{korean}{}」を用います。
\foreignlanguage{korean}{안녕하세요.\textbf{히가시 히로시}라고 합니다.잘 부탁드립니다.}
```

```
\end{document}
```

***

あとは ptex2pdf などで処理し，PDF 文書で確認しましょう。

```
ptex2pdf -u -l cjkintro.tex
```

または，

```
uplatex cjkintro.tex
dvips cjkintro.dvi
ps2pdf cjkintro.ps
```

のように実行します。
あとは PDF を開いてうまく表示されているかどうか確認しましょう。
なお，PDF を Adobe Acrobat Reader DC で開いたときにフォントのインストールを促されたらインストールしておいてください。

最後に。
中国語や韓国語は句読点が真ん中に表示されることがありますが，それで問題ないはずです。
（フォントのグリフの問題です。伝統的な組版かどうかまでは分かりませんが。）

### モンゴル語 {#omoneast}

モンゴル語については，[MonTeX](http://www.ring.gr.jp/pub/text/CTAN/help/Catalogue/entries/montex.html) というパッケージがあります。
また，日本語とモンゴル語を共存させる際に役立つ LRTate.sty というものもあります。
詳細は「[Babel を使った最新版 LaTeX2e、pLaTeX2e での多言語環境構築](http://www2.tba.t-com.ne.jp/ing/babel.html#gcinst)」にもありますが，ここではインストール方法について解説します。

まず[montex.tgz](http://userpage.fu-berlin.de/~corff/im/MLS/montex.tgz)，[LRtate.sty](http://www.ma.ns.tcu.ac.jp/Pages/TeX/LRtate.sty)，[diagnose.sty](http://www.ring.gr.jp/pub/text/CTAN/macros/latex/contrib/diagnose/texinput/diagnose.sty) の3つをダウンロードします。

montex.tgz のファイルを tar + gzip 形式に対応した展開（解凍）ソフトで展開し，次のようにコピーします。
$TEXMF は share/texmf-local など，ご自分の環境に読み替えてください。

- texinput/ ディレクトリの中のすべてのファイル → $TEXMF/tex/latex/montex/
- mfinput/ ディレクトリの中のすべてのファイル → $TEXMF/fonts/source/public/mfinput/mls/
- tfm/ ディレクトリの中のすべてのファイル → $TEXMF/fonts/tfm/mls/
- doc/ ディレクトリの中のすべてのファイル → $TEXMF/doc/montex/

また，LRtate.sty や diagnose.sty も $TEXMF/tex/latex/montex/ にコピーします。

$TEXMF/tex/generic/config/language.dat に次を追記します。
私は texmf/tex/generic/config/language.dat を texmf-local/tex/generic/config/ にコピーして用いています。

```
mongolian	mnhyphen.tex % mnhyphex.tex % No exceptions now.
```

あとは次を実行します。
最初の mktexlsr が必要ない方は実行しなくても構いません。

```
mktexlsr
fmtutil --byfmt latex
fmtutil --byfmt platex
```

以上で終わりです。

[栗山雅俊さん](http://ethics.let.hokudai.ac.jp/~gpae/plus2/?Staff/Kuriyama)が作成された[横書き](https://okumuralab.org/~okumura/texfaq/qa/36989.html)と[縦書き](https://okumuralab.org/~okumura/texfaq/qa/36993.html)の2種類のサンプルがありますので，試してみてください。

## UTF82TeX {#p07ce0eb}

### UTF82TeX のインストール・設定 {#iutf82tx}

安田さんのスクリプトの実行には Perl が必要になります。
Perl をインストールしていない方は [Strawberry Perl](http://strawberryperl.com/) をインストールしておきましょう。
なお，PC-UNIX環境の方は各ディストリビューション毎にパッケージが用意されている（ないしインストール済みである）場合が多いです。

まず，[Utf82TeX](http://yasuda.homeip.net/tex/utf82tex.html) の[ダウンロード・サービス](http://yasuda.homeip.net/dl/dl.html#g)から utf82tex-\*.zip をダウンロードし，展開（解凍）します。
展開したディレクトリ内のutf82texというファイルをUnicode対応のテキストエディタで開きますと，先頭の行に

```
#!/usr/bin/perl -w
```

と書いてありますので，これを環境に合わせて（例えば Strawberry Perl をデフォルトのままインストールしたなら

```
#!/strawberry/perl/bin/perl -w
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

あとは Utf82TeX を PATH の通ったディレクトリ（例えば TeX のインストールディレクトリ内にある
実行ファイルディレクトリ C:\w32tex\bin\ など）にコピーします。
ついでに TeX 実行ファイルのインストール先であればそのディレクトリ内にある perlexec.exe を utf82tex.exe などにコピーしておきます。
こうしておくとコマンド実行時に便利です。

次に，config/ ディレクトリの中の utf82texrc/，contrib/
ディレクトリそのもの，tables/ ディレクトリの中の \*-tbl をすべて
C:\usr\local\etc\utf82texフォルダ（無い場合には作る）にコピーします。
上以外の場所にコピーしたい場合には環境変数 UTF82TEXRC にその場所への PATH を設定する必要があります。

utf82texrc の PATH は特に /usr/local/bin から C:\\\usr\\\local\\\bin のように変更する必要はないようです。
ただ，SWATH のオプションの部分は変更する必要があるかもしれません。
ここの記述のとおりにタイ語環境を構築した場合，utf82texrc を

```
$SWOPT   = "-f latex -d C:\\usr\\local\\bin\\data";
```

のように変更します。

### UTF82TeX の使い方 {#ususeutf}

実際にテキストエディタで Unicode 文書を書いてみましょう。
さまざまな言語の入力ソフトを併用して書いていきます。

準備ができたら，[Utf82TeX のページの入力例](http://yasuda.homeip.net/tex/utf82tex.html)も参考に書いていきます。
タイ語も混在編集して構いません。
中国語と韓国語はタグによって処理を分ける独自の方式をとります。
タグは % でコメントアウトしておくことで，TeXには無視させられます。

さて，いろいろ頑張って一通り書き終わりました。
このファイルをutftest8.texとします。
ここでUtf82TeXの出番です。
コマンドラインから

```
utf82tex <utftest8.tex >utftest8-utex.tex
```

を実行します。
すると，utftest8.texを変換した結果をutf8out.texに書き出します。

書き出したutftest8-utf.texはUTF-8です。
uplatex  でコンパイルします。

タイ語が入っている場合は-tオプションを，ヴェトナム語やグルジア語などの拡張変換表を用いる場合は-xオプションをつけます。

あとは upLaTeX あるいは LaTeX にかけるだけです。
「そういえばロシア語・ギリシア語を使う環境をまだそろえていなかった」という方は[新 pTeX とBabel](</新 pTeX とBabel/>)を是非ご覧ください。
また，それ以外の外国語については，ここの該当箇所をお読みください。

## 謝辞 {#mlathbos}

本文書を作るにあたり，[TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html)でご教示くださった方々に心より御礼申し上げます。

## Comments {#mlcomeiz}

- 何かここの記述について間違いなどございましたらコメント欄にお願いします。 -- 書いた人 2005-12-14 (水) 16:33:57
- 今回の修正事項はレイアウト上の単純ミスの訂正のみです。 -- 書いた人 2005-12-21 (水) 18:34:10
- 多言語処理についてまとめて下さりありがとうございます（素晴らしいです!）。VnTeXについてですが、CTANでより新しいバージョンが配布されているようです（[VnTeX-3.02](ftp://ftp.ring.gr.jp/pub/text/CTAN/language/vietnamese/vntex/)）。[安田さんの解説](http://yasuda.homeip.net/tex/cjk.html#d)もあります。 -- 栗山雅俊 2005-12-26 (月) 20:58:48
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
- Windows上のUnicode対応テキストエディタならNotepad++も便利です -- 書いた人 2008-01-15 (火) 22:13:03
- Unicode (UTF-8) 対応テキストエディタとして挙げられているものに、たとえばサクラエディタの通常版のように、内部コードがShiftJISになっているもの、つまり実質UNICODEが扱えないものは混ざっていないでしょうか？ -- ken 2011-06-14 (火) 05:03:27
