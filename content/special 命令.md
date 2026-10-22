---
title: "special 命令"
url: "/special 命令/"
date: 2015-11-02T01:48:02Z
pukiwiki: "special 命令"
---

# special 命令

## special 命令 {#headline}

special 命令とは，DVI 標準ではサポートしていない，各 DVI ウェアの独自拡張機能を指示するための命令です。今日の LaTeX において普通に用いられている，

- 図形描画（[TikZ](/TikZ/)，[PSTricks](/PSTricks/)など）
- 画像ファイルの取込（[graphicx](/graphicx/)）
- ハイパーリンクの埋込（[hyperref](/hyperref/)）
- 用紙サイズ情報の記録（[geometry](/geometry/)など）

などの機能の実装には special 命令が使用されています。

***

***

## special 命令の基本 {#basic}

<!-- 今の時代に「デバイス」が何を指すかという議論は避けたい。 -->

### special 命令とは何か {#what-is}

（旧来の）TeX 処理系は組版結果を DVI ファイルに出力します。この「DVI (device-independent) ファイル」というのは，その名称の通り，デバイス非依存な一種のページ記述言語で書かれています。

DVI ファイルは「“A”の文字を出力する」「参照点を右に 1pt 移動する」などの“DVI 命令”から構成されます。DVI 命令の意味は仕様で明確に決められているので，どの DVI ウェア（DVI ファイルを扱うソフトウェア）を用いても同じように解釈されます。

しかし，場合によっては，特定の DVI ウェアにおいて独自拡張の機能が使える方が便利なことがあります。例えば，DVI 標準では「色を付ける」「ハイパーリンクを置く」などの機能は規定されていません。[^1]しかし PDF 文書形式ではこれらの機能が実現できます。となると，dvipdfmx のような「DVI を PDF に変換する」DVI ドライバを実装する場合には，そのような拡張機能を持たせたいというのは自然な要求です。

そこで，DVI 仕様では「仕様では意味を定めず，専ら独自拡張機能のために使う」ための特別な命令である「special 命令」を敢えて用意しています。つまり，標準の部分と独自拡張の部分を明確に分離する方針をとっているのです。

そして TeX 言語では，この「DVI の special 命令」を発行するための機能として，\special プリミティブが用意されています。

今日の LaTeX では，「色を付ける」機能は (x)color パッケージ，ハイパーリンクを作る機能は [hyperref](/hyperref/) パッケージで提供されていますが，これらの機能の実装には special 命令（\special プリミティブ）が利用されています。

### DVI の special 命令 {#dvi-special}

DVI の special 命令についての概略を把握するため，一つ例を挙げてみます。[^2]

```
Te\special{color Red}X
```

この TeX 言語コード（の断片）をコンパイルすると，以下のような DVI 命令の列が生成されます。[^3] <!-- DVIでのspecialの扱いの雰囲気を知らせるため，敢えてDVIコードを出す。 -->

```
54                     : setchar84          % 'T'を出力
91FF2AAA               : right3 -54614      % カーニングの左移動
65                     : setchar101         % 'e'を出力
EF09636F6C6F7220526564 : special1 9 'color Red' % special命令
58                     : setchar88          % 'X'を出力
```

これから判るように，\special プリミティブに与えた引数の文字列は，TeX 処理系により解釈されることなく，そのまま DVI の special 命令の引数として書き出されています。つまり DVI 標準としては「“color Red”という拡張命令が発行された」という意味しか持っていません。ところが，dvips にとっては“color Red”という special 命令は「以降の文字の色を赤に変える」という意味を持っています。従って，上記の命令列を含む DVI ファイルを dvips で処理した場合は，文字“X”が赤色で出力される（ような PostScript ファイルが生成される）ことになります。

### TeX の \special プリミティブ {#tex-special}

\special プリミティブは以下のような単純な書式を持ちます。[^4]

```
\special{<トークン列>}
```

ここで引数のトークン列は \write プリミティブと同様に“文字列化”されます。つまり，完全展開した後に文字列化した結果が「DVI の special 命令の引数の文字列」となるわけです。

TeX 処理系は，\special{～} が実行[^5]されると，「“～”という special 命令を発行する」という情報を込めた特殊なオブジェクト（whatsit ノード）を現在の参照点に配置します。そして，そのオブジェクトを含むページが出力（shipout）された時に，そのページの DVI 命令列の中に実際に special 命令として現れることになります。

### special 命令の文字コード {#fda58d13}

先述の通り \special の引数のトークン列は「文字列化して DVI の special 命令の引数として書き出される」のですが，その際に文字コードの扱いは以下のようになっています。

- 8 ビット欧文の TeX においては，文字とは実質バイトのことなので，引数のバイト列がそのまま DVI に書き出されます。
- (u)pTeX において，和文文字は，エンジンの内部漢字コードでエンコードされたバイト列として書き出されます。ソースファイルの漢字コードとは無関係であることに注意してください。欧文文字の扱いは欧文 TeX と同じです。
- XeTeX [^6]においては，文字列は常に UTF-8 でエンコードされたバイト列として書き出されます。やはりソースファイルの文字コードは無関係です。

### PDF 直接出力のときの \special プリミティブ {#j5504fc9}

\special プリミティブは DVI の special 命令を出力するためのものです。従って，PDF 出力モードの pdfTeX や LuaTeX では無意味であるのでサポートされていません。（\special を実行すると警告が出て無視されます。）

※ただし例外として，引数が

```
\special{pdf: <トークン列>}
```

のように“pdf:”で始まっている場合は

```
\pdfliteral{<トークン列>}
```

と同等と解釈されます。[^7]

XeTeX は表向きは PDF を直接出力しているように見えますが，実は内部ではいったん「XDV 形式」（DVI の拡張版）のファイルを出力してそれを xdvipdfmx（dvipdmx の拡張版）で PDF に変換する，という手順を踏んでいます。従って，XeTeX では dvipdfmx がサポートする special 命令が使用できます。また，XeTeX の拡張プリミティブが内部では special 命令により実現されていることもあります。

### ドライバ依存に関する注意 {#device-independent}

そもそも special 命令は「特定の DVI ウェアの独自拡張命令」を表すためのものなので，当然，それを使った DVI ファイルはその特定の DVI ウェアで処理する必要があります。

例えば，先の例に挙げた

```
\special{color Red}
```

は dvips 用の special 命令なので，これを用いた DVI ファイルは dvips でないと正常に処理されない，ということです。

ただし，ある種類の special 命令が（互換性確保などの理由で）複数の DVI ウェアでサポートされている場合もあります。例えば，実は「color Red」という special 命令は dvipdfmx でもサポートされています。[^8]

いずれにしても，\special プリミティブを含むコードを扱うときは，それが特定の DVI ウェアに依存することを常に念頭に置いておく必要があります。

#### LaTeX パッケージのドライバオプション {#driver-option}

DVI 標準にない機能で，「複数の DVI ウェアでサポートされているが，それを実現する special 命令の書き方が異なる」という場合があります。例えば，「テキストを斜体変形する」という機能は dvips では次のような PostScript special 命令を使ったマクロで実現できます。

```
% slantbox{<傾き率>}{<テキスト>}
\def\slantbox#1#2{\leavevmode\bgroup\setbox0\hbox{#2}%
  \special{ps: gsave currentpoint currentpoint translate
    [1 0 #1 neg 1 0 0] concat neg exch neg exch translate}%
  \hbox to0pt{\copy0\hss}%
  \special{ps: grestore}\kern\wd0\egroup}
```

ところが，同じ機能について，dvipdfmx では次のように PDF special を使う必要があります。

```
% slantbox{<傾き率>}{<テキスト>}
\def\slantbox#1#2{\leavevmode\bgroup\setbox0\hbox{#2}%
  \special{pdf:btrans 1 0 #1 1 0 0}\hbox to0pt{\copy0\hss}%
  \special{pdf:etrans}\kern\wd0\egroup}
```

ここで，そのような機能を LaTeX パッケージ（“twslant パッケージ”）として提供したいとします。そういう場合は，graphicx パッケージなどと同様に，「文書作成者がドライバオプションを指定する」インタフェースを採用するのが通例です。 <!-- tw- は "TeX Wiki" の略。 -->

```
% twslant.sty
\RequirePackage{ifpdf}
\DeclareOption{dvips}{% dvipsの場合
  \def\twslant@start#1{\special{ps:
    gsave currentpoint currentpoint translate
    [1 0 #1 neg 1 0 0] concat neg exch neg exch translate}}%
  \def\twslant@end{\special{ps: grestore}}}
\DeclareOption{dvipdfmx}{% dvipdfmxの場合
  \def\twslant@start#1{\special{pdf:btrans 1 0 #1 1 0 0}}%
  \def\twslant@end{\special{pdf:etrans}}}
\DeclareOption{pdftex}{% pdfTeXの場合
  \def\twslant@start#1{\pdfsave\pdfsetmatrix{1 0 #1 1}}%
  \def\twslant@end{\pdfrestore}}
\ifpdf \ExecuteOption{pdftex}\fi % pdfTeXを自動判定する
\ProcessOptions\relax
% \slantbox{<傾き率>}{<テキスト>}
\newcommand*\slantbox[2]{\leavevmode\bgroup\setbox\z@\hbox{#2}%
  \twslant@start{#1}\hb@xt@\z@{\copy\z@\hss}%
  \twslant@end\kern\wd\z@\egroup}
```

この方式を採用しておくと，パッケージの使用者（文書作成者）は，「dvips を使う場合と dvipdfmx を使う場合で，ソースの記述が一か所しか異ならない」というメリットが得られます。

```
% ↓ドライバオプションを変えるだけでよい!
\documentclass[a4paper,uplatex,dvips]{jsarticle}
%...
\usepackage{twslant}
%...
\begin{document}
\slantbox{0.3}{※暫定版（2016-08-08）}
%...
\end{document}
```

たとえ，一種類の DVI ウェアしかサポートしないという場合も，この方式を採用することにはメリットがあります。今日の習慣では，文書作成者がドライバオプションをグローバルオプションとして指定していることが期待できるので，サポート外の DVI ウェア（や TeX エンジン）が使われている場合に，適切なエラーを出すことができるのです。

```
% twxxx.sty
\newif\iftwxxx@ok \twxxx@okfalse
\DeclareOption{dvipdfmx}{\twxxx@oktrue}
\DeclareOption{dvips}{\twxxx@okfalse}
\DeclareOption{dviout}{\twxxx@okfalse}
% pdfTeX とかの扱いも同様に...
\iftwxxx@ok\else
  \PackageError{twxxx}{Not supported}\@ehc
\fi
```

<!-- 一般のLaTeXユーザに対する注意をこの記事に書いてもあまり意味がなさそう。 -->

<!-- こうした拡張が進んだ結果，いまどきのユーザは各種の \special を（意図的にあるいは暗黙のうちに） 使うことによって「デバイス依存」な DVI ファイルを作りがちになっています。 -->
<!-- しかし，これらの \special 命令を用いて作成した DVI ファイルは，その命令を正しく解釈できるデバイスドライバ以外で正しく印刷することができないことに注意が必要です。 -->

## 主要な \special 命令 {#specials-set}

ここでは重要な special 命令の使い方について解説します。

<!-- 仕様の解説がメイン。 -->

※ special 命令の書式については，各開発者が勝手に決めているものなので，special の種類によって大きく異なっています。

### Papersize special {#papersize-specials}

サポート： dvips，(x)dvipdfmx，dviout

```
papersize=<横幅>,<縦幅>
```

命令があるページとそれ以降のページについて，出力の用紙サイズを指定します。&lt;横幅> と &lt;縦幅> には 210mm や 11in のような「TeX の単位付き数値」を指定します。

これはページ全体（または文書全体）に関わる設定なので，LaTeX では通常は \AtBeginDvi 命令などを用いて本文領域の外に配置されます。

```
\AtBeginDvi{\special{papersize=182mm,257mm}} % JIS B5で出力
```

※mag指定が有効（1000 以外）な場合，papersize special で指定する長さは mag の影響を受けません。つまり “true 付”単位と同じ扱いになります。[^9]

※用紙サイズに関連するものとして他に landscape special（\special{landscape}）がありますが，現在は非推奨となっています。特に landscape と papersize を同時に使用すべきではありません。

- 参照： [紙面サイズの指定 (1/2) - マクロツイーター](https://zrbabbler.hatenablog.com/entry/20101123/1290541806)

### psfile special {#psfile-specials}

サポート： dvips，(x)dvipdfmx，dviout

```
psfile=<ファイル名> [hscale=<横拡大率>] [vscale=<縦拡大率>
  [angle=<回転角度>] [clip]
  [llx=<左下x>] [lly=<左下y>] [urx=<右上x>] [ury=<右上y>]
  [rhi=<幅>] [rwi=<高さ>]
```

（\[ \] は省略可能であることを示す。\[ \] 自体は書かない。）

EPS 画像ファイルを読み込みその場に配置します。

- “PSfile=...”と書いてもよい。
- clip は元画像のバウンディングボックス外の部分の描画を抑止する。
- &lt;横拡大率>，&lt;縦拡大率> は百分率の整数で指定。
- &lt;回転角度> は度単位の整数で指定。
- &lt;左下x>，&lt;左下y>，&lt;右上x>，&lt;右上y> はバウンディングボックスの座標を表し，bp 単位の実数で指定。
- &lt;幅>，&lt;高さ> は挿入後の寸法を表し，これらは 0.1 bp 単位の実数で指定。

※多くのドライバにおいて，graphicx パッケージの機能で EPS 画像を読み込む時には psfile special が用いられます。

※かつては dvips 以外にも様々な DVI→PS 変換用の DVI ウェアが存在し，それぞれが異なる形式の EPS 画像読込の special をサポートしていました。dvips では，互換性のためこれらの一部（“epsfile=...”，“postscriptbox...”）をサポートしています。

- 参照： [ナントカBoxの話(3) - マクロツイーター](https://zrbabbler.hatenablog.com/entry/20140704/1404425429)

### color special {#color-specials}

サポート： dvips，(x)dvipdfmx，dviout

```
color <色指定>
color push <色指定>
color pop
background <色指定>
```

色を指定します。元々は dvips で規定されたもので，他の DVI ウェアでも一部の仕様がサポートされています。

“background &lt;色指定>”は背景色を，“color &lt;色指定>”は描画色を指定します。描画色は仕様的には TeX の出力（テキストや罫）に対するものですが，通常は，PostScript や PDF の描画状態にも反映されます。

TeX の“局所的な代入”と同様の仕組の“局所的な色指定”の実装を容易にするため，“色スタック”が用意されています。“color push”と“color pop”はこの色スタックを操作するものです。色スタックが空でない場合は，そのトップにある色が実際の描画色となります。

color special の引数の &lt;色指定> の書式は次の通りです。

- “Black”や“Red”などの，予め定義された名前。dvips では，単にその名前を実行するものと解釈されます。（予め “/Red {0 1 1 0 setcmykcolor} bind ref”のように定義されているわけです。）
- 色モデルとパラメタによる定義。以下のものがあります。dvips では，“rgb 0 0.5 0”を“0 0.5 0 TeXrgbcolor”のように解釈します。（TeXrgbcolor は予め定義されたマクロ。）
    - rgb &lt;R> &lt;G> &lt;B>
    - hsb &lt;H> &lt;S> &lt;B>
    - cmyk &lt;C> &lt;M> &lt;Y> &lt;K>
    - gray &lt;G>
- 「" &lt;PostScriptコード>」で任意の“色を設定するためのコード”が指定できます。

※(x)color パッケージについて，dvips 等のいくつかのドライバは color special を利用しています。
かつて dvipdfmx 用ドライバは PDF special を利用していましたが，2017 年 6 月の改修で dvips と同様の color special に置き換わりました（共通部分が増えるとメンテナンスが容易になるため）。

### PostScript special {#ps-specials}

サポート： dvips，(x)dvipdfmx，dviout

```
" <PostScriptコード>
ps: <PostScriptコード>
ps::  <PostScriptコード>
ps::[begin]  <PostScriptコード>
ps::[end]  <PostScriptコード>
ps::[nobreak]  <PostScriptコード>
```

[PostScript](/PostScript/) の命令の実行を指示します。

「"」で始める形式は，「周囲から隔離された状態」で &lt;PostScriptコード> を実行します。ここで，「隔離された」というのは以下を意味します。

- gsave／grestore で囲まれている。つまりコード中で行った状態変更は外部に影響しない。
- 現在の TeX の参照点が PostScript の座標の原点となっている。
- 原点が移動していることを除いて座標系は既定の状態である。（例えば 1 単位は 1bp に等しい。）

このため，「"」形式は DVI ウェアに依らず共通の結果が得られることが期待できます。主に当該の special だけで完結している描画を行うために利用されます。

これに対して，ps: 形式は隔離の処理を行わずに &lt;PostScriptコード> を実行します。ただし special のある TeX の参照点に PostScript の現在点を合わせる事前処理は行われます。コード実行時に適用されている座標系は DVI ウェアごとに異なることに注意してください。こちらは主に，後続の TeX 出力に影響を与えるような描画設定変更（例えば回転の指示）を行うのに利用されます。

ps: 形式には幾つかの変種があります。ps:: は ps: と同様ですが，現在点を合わせる事前処理すら行われません。この形式は ps: の special で始めたコードの続きを書きたい場合に用いられます。つまり，

```
\special{ps:foo}\special{ps::bar}
```

というコードは

```
\special{ps:foo bar}
```

と等価になります。ここでもし bar の special を ps: で書いてしまうと，foo と bar の間に別の命令が入ってしまいます。

ps::\[begin\] は ps: と同じ動作で，ps::\[end\] は ps:: と同じ動作です。これらの形式は，

```
\special{ps::[begin] foo ......}% 長いコードの最初
\special{ps:: bar ......}% 続き
\special{ps::[end] baz ......}% 最後
```

のような様式での使用を想定しているようです。（dvipdfmx ではこの様式も守らないとエラーになってしまいます。）

dvips は，&lt;PostScriptコード> が長い場合，それを途中の空白で分割して複数行で出力する場合があります。ps::\[nobreak\] の形式を使うと，確実に一行で出力されるようになります。

dvips における PostScript special は非常に強力で，要するに PostScript でできることなら何でもできます。このため，ドライバ依存のパッケージの多くについて，その dvips 用ドライバ実装では PostScript special が利用されています。例えば，graphicx（拡大と回転），pict2e，[PGF/TikZ](/TikZ/)，[PSTricks](/PSTricks/)，PSfrag，animate などのパッケージが該当します。

#### 各DVIウェアにおける PostScript special のサポートの状況 {#ps-specials-support}

- dvips は全ての仕様をサポートします。dvips は PostScript コードを出力する DVI ウェアなので，与えられたコードを何も解釈することなく，ただ出力ファイルにそのまま書き出します。
- dviout は「"」形式をサポートします。具体的には，与えられたコードを Ghostscript に渡して実行し，その描画結果（ビットマップデータ）を取り込むという動作になります。「ps:」形式もサポートしていますが，これは「"」形式と全く同じ扱いになるので，恐らく意図した結果にならないでしょう。その他の形式はサポートしていないようです。
- (x)dvipdfmx は全ての形式をサポートしますが，解釈できる PostScript 命令がごく一部のものに限られます。（[MetaPost](/MetaPost/) の出力画像の取り込みを行うために，一部の PostScript 命令だけをサポートしているのです。）解釈に成功した場合は，PDF 描画命令に変換されます。失敗した場合は警告を出して special 命令全体を無視します。Ghostscript が呼び出されることはないことに注意してください。

<!-- PostScript specials を完全にサポートできるドライバの条件として，PostScript 命令をヘッダの内容と組み合わせて解釈できる（VTeX 等）か，組み合わせた PostScript 命令をその場で PostScript インタプリタに処理させられる（xdvipdfmx 等）か，あるいは PostScript を解釈せずに次の段階に受け渡す（[[dvips]] 等）かが挙げられます。 -->

#### PSTricks special {#pstricks-specials}

```
PST: <PostScriptコード>
pst: <PostScriptコード>
```

<!-- この2つは機能が異なるらしい。 -->

XeTeX エンジン（つまり xdvipdfmx）で [PSTricks](/PSTricks/) をサポートするために実装された special 命令です。一般の PostScript special とは異なり，Ghostscript を呼び出して実行するようです。ただ，PSTricks の出力するコードに強く依存した処理になっているため，本来の目的以外で「任意の PostScript コードを実行する」ために流用することは困難なようです。

ちなみに，現在では xdvipdfmx と dvipdfmx のソースが統合されているため，これらの special は dvipdfmx でも有効です。つまり，ちょっと細工をすれば，dvipdfmx で PSTricks を動作させることが実はできるようです。

- 参考：[なぜか dvipdfmx で PSTricks できる話](https://zrbabbler.hatenablog.com/entry/20140712/1405179775)

### HyperTeX specials {#hypertex-specials}

サポート： dvips，(x)dvipdfmx，dviout，xdvi

```
html:<a href="URL">
html:<a name="アンカー名">
html:</a>
html:<img src="URL">
html:<base href="URL">
```

HTML ライクな書式でハイパーリンクを設置します。

[hyperref](/hyperref/) パッケージでは，ドライバ指定を hypertex にした場合に，ハイパーリンクを設定するのに HyperTeX special を利用します。[dviout](/dviout/) や [xdvi](/xdvi/) でハイパーリンクを使いたい場合はこの方法が利用されます。

※hypertex 以外のドライバ指定の時は hyperref は HyperTeX special を利用しません。例えば dvips ドライバでは PostScript special，dvipdfmx ドライバでは PDF special，pdftex ドライバでは \pdfliteral が使われます。

※ “html:&lt;img ...>”や“html:&lt;base ...>”はほとんどサポートされていないようです。

- 参考：[HyperTeX](/HyperTeX/)

### tpic specials {#tpic-specials}

サポート： dvips，(x)dvipdfmx，dviout，xdvi

```
<命令名> <引数> ...
```

※tpic special の命令名は英小文字 2 文字からなるのが特徴的です。例えば以下のようなものです。

```
pn 8
ar 140 0 42 42 0 3.142
```

簡単な図形描画の機能を実現するためのものです。描画プログラミング言語 pic を元にして作られています。eepic や [Xy-pic](/Xy-pic/) などの LaTeX パッケージで利用されています。また，描画ソフトウェアで，TeX 向けのエクスポートで tpic special を用いるものがあります。

数多くの DVI ウェアでサポートされ，一時は「TeX での図形描画機能の標準」の座を占めてしましたが，pdfTeX エンジンが tpic special のサポートを行わなかったため，pdfTeX の使用が主流になるにつれて tpic special の利用は廃れてしまいました。現在では，TeX で図形描画の機能を実装する場合は，まずドライバ判定を行った上で，PostScript 出力の場合は PostScript コード，PDF 出力の場合は PDF 描画命令のコードを生成した上で出力中に（special 命令で）埋め込むという方法が一般的です。例えば pict2e や [TikZ](/TikZ/) はこの方法を採っています。

- 参考：[tpic (pic)](/pic/#xda9ac26)

### Source special {#src-specials}

サポート： dviout，xdvi

```
src:<行番号> <ファイル名>
```

版面中の特定の位置に対応する TeX ソースの位置の情報を記録します。TeX ソースのエディタと DVI ビューアとの間で，相互に対応部分にジャンプすることを目的としたものです。[dviout](/dviout/) や [xdvi](/xdvi/) などの DVI ビューアが対応しています。

一般的な special 命令は TeX ソース中の \special プリミティブにより出力されるものですが，source special は特別で，TeX エンジンのコマンドのオプションに -src-specials を指定することで，エンジンが自動的に DVI 文書の適当な箇所に special 命令を挿入するという動作を行います。

現在では DVI ファイルではなく PDF ファイルを利用したプレビューが一般的となったため，原理的に DVI ビューアでしかサポートできない source special に代わって，[SyncTeX](/SyncTeX/) 機能が使われるようになっています。

### dvipdfmx の PDF special {#pdf-specials}

サポート： (x)dvipdfmx

dvipdfmx が独自にサポートしている special（「PDF special」と総称される）は以下の書式を持っています。

```
pdf:<名前> <引数> ...
```

引数の書式は命令により様々ですが，一般的に次のことがいえます。

- 引数は空白区切りで指定する。
- 値の表記に PDF 言語のリテラル形式を用いる。例えば “TeX”という文字列は (TeX) または &lt;546558> のように書く。また配列 \[...\] や辞書 &lt;&lt;...>> を引数に取ることもある。
- ただし寸法値は TeX 言語と同様に 1.5cm や 20pt のように書く。
- なぜか知らないが命令の別名が多く存在する。例えば，“pdf:annotation”・“pdf:annotate”・“pdf:annot”・“pdf:ann”は全て同じ命令である。

#### PDF specialに関する資料 {#pdf-specials-info}

<!-- [Wic99] -->
- Mark A. Wicks: DVIPDFM User's Manual. 1999.
    - 元祖“DVIPDFM”のマニュアル。TeX Live では「texdoc dvipdfm」で開きます。
        <!-- [Cho09] -->

- Jin-Hwan Cho: DVI specials for PDF generation.
    TUGboat, vol.30, no.1, 2009.
    - TeX Live に含まれていて，「texdoc dvipdfmx-special」で開きます。
        <!-- [Cho07] -->

- Jin-Hwan Cho: Hacking DVI files: Birth of DVIasm.
    TUGboat, vol.28, no.2, 2007.

#### PDF specialの一覧 {#pdf-specials-list}

括弧内に別名を示します。 <!-- 代表名は次の順で決めた。 --> <!-- 1. [Cho09][Cho07]で使われているもの --> <!-- 2. dvipdfmxの実装の関数名で使われているもの -->

<!-- Wic99§4.1-4.3; Cho09§3 -->
- pdf:ann (annotation, annotate, annot)
- pdf:bann (bannot, beginann)
- pdf:eann (eannot, endann)
    <!-- Wic99§4.4-4.6 -->

- pdf:link
- pdf:nolink
- pdf:dest (destination)
    <!-- Wic99§4.7-4.8 -->

- pdf:docinfo
- pdf:docview
- pdf:names
    <!-- Wic99§4.9,4.12; Cho09§2 -->

- pdf:obj (object)
- pdf:stream
- pdf:fstream
- pdf:put
- pdf:close
    <!-- Wic99§4.10; Cho09§4 -->

- pdf:out (outline)
    <!-- Wic99§4.11 -->

- pdf:pagesize
    <!-- Wic99§4.13 -->

- pdf:bead (thread)
- pdf:article (art)
    <!-- Wic99§5,8; Cho09§5 XObjects -->

- pdf:image (img, epdf)
- pdf:bxobj (bform, beginxobj)
- pdf:exobj (eform, endxobj)
- pdf:uxobj (usexobj)
    <!-- Wic99§6 -->

- pdf:btrans (begintransform, begintrans, bt)
- pdf:etrans (endtransform, endtrans, et)
    <!-- Wic99§7 -->

- pdf:bcolor (begincolor, bc, begingray, bgray, bg)
- pdf:scolor (setcolor, sc)
- pdf:ecolor (endcolor, ec, endgray, egray, eg)
- pdf:bgcolor (bgc, bbc, bbg)
    <!-- Wic99§9; Cho09§6 -->

- pdf:content
- pdf:bcontent
- pdf:econtent
- pdf:literal
- pdf:code
- pdf:bop
- pdf:eop
    <!-- その他大勢 -->

- pdf:mapline
- pdf:mapfile
- pdf:minorversion
- pdf:encrypt
- pdf:tounicode

以下では PDF special 命令の一部について，仕様を説明します。

※ PDF special の書式表示の中で，\[ \] 内は省略可能であることを示します。（\[ \] 自体は書きません。）

#### pdf:minorversion {#pdf-minorversion}

```
pdf:minorversion <整数>
```

出力 PDF 文書のマイナーバージョン（1.x の x の部分）を指定します。指定可能な値の範囲は 3～7 です。pdfTeX の \pdfminorversion に相当するものです。

[bxpdfver](https://www.ctan.org/pkg/bxpdfver) パッケージはこの special 命令を利用しています。

#### pdf:pagesize {#pdf-pagesize}

```
pdf:pagesize [width <横幅(寸法)>] [height <縦幅(寸法)>]
    [xoffset <横オフセット(寸法)>] [yoffset <縦オフセット(寸法)>]
```

出力用の用紙に関する設定です。&lt;横幅> と &lt;縦幅> は用紙サイズを設定するもので，pdfTeX の \pdfpagewidth/height に相当します。&lt;横オフセット> と &lt;縦オフセット> は DVI 座標の原点の位置[^10]を定めるもので，pdfTeX の \pdfxorigin/yorigin に相当するものです。

※papersize special と異なり，パラメタの寸法値には“true付き”と“true無し”のどちらの単位も指定可能で，それは本来の意味を保ちます。

#### pdf:tounicode {#pdf-tounicode}

```
pdf:tounicode <CMap名(名前)>
```

PDF special 中の特定の引数の文字列（主に PDF の文書情報を表す文字列）について，文字コード変換を指示します。専ら，(u)pTeX エンジンを利用する場合に利用されます。

PDF の文書情報の Unicode 文字列は UTF-16BE で符号化されたバイト列で与える必要がありますが，(u)pTeX が出力する special 命令の文字列は“エンジンの内部漢字コード”（SJIS，EUC，UTF-8 の何れか）で符号化されているため，正常に解釈させるためには文字コード変換が必要になります。
pdf:tounicode が実行されると，dvipdfmx は引数に指定した名前の CMap ファイルを読み込みます。そして以降に現れる special（の特定の引数）について，そこで定義されたマッピングを用いて元の文字コードから UTF-16BE への変換を行います。

具体的にどのような文字列が変換の対象になるのかは，以下の記事で説明されています。

- [(x)dvipdfmx が文書情報を Unicode する件に関するメモ(3)](https://zrbabbler.hatenablog.com/entry/20160220/1455915826)

[PXjahyper](https://www.ctan.org/pkg/pxjahyper) パッケージはこの special 命令を利用しています。

#### PDF描画命令の書き出し {#pdf-content}

```
pdf:content <命令列>
pdf:literal <命令列>
pdf:code <命令列>
```

dvipdfmx がページの内容として生成する PDF 描画命令列の中に，&lt;命令列> として指定した文字列をそのまま書き出します。ただし，その前後に調整のための命令も挿入し，その方法が special の種類により異なります。

- pdf:content は &lt;命令列> を，「参照点が原点であり，かつ局所化された状態」で実行します。
    - つまり実際には“q &lt;CM> &lt;命令列> Q”という命令列を書き出します。
- pdf:literal は &lt;命令列> を，「参照点が原点であるが，局所化されていない状態」で実行します。
    - つまり実際には“&lt;CM> &lt;命令列> &lt;CM′>”という命令列を書き出します。
- pdf:code は全く調整を行わず単に &lt;命令列> を実行します。
    - つまり本当に &lt;命令列> だけを書き出します。

ここで，&lt;CM> は「現在の参照点を原点に平行移動する座標変換（cm 演算子）」，&lt;CM′> はその逆変換を表します。

## special 命令を利用した TeX コードの例 {#specials-dvipdfmx}

<!-- こちらは実例を紹介する。 -->

ここでは，DVI 標準の範囲ではできない様々な機能について，実際に special 命令を利用して実装した例を紹介します。

### ページ設定（用紙サイズなど） {#specials-dvipdfmx-pagesettings}

サポート： dvips，(x)dvipdfmx，dviout

LaTeX の文書クラスのオプション（a5paper 等）で指定した（レイアウト用の）用紙サイズを出力に反映させるには，通常は次のようなコードが使われます。

```
\AtBeginDvi{\special{papersize=\the\paperwidtgh,\the\paperheight}}
```

例えば，[jsarticle](/jsclasses/) クラスの papersize オプションおよび geometry パッケージもこの方法を用いています。

しかし，これは先頭ページにだけ special 命令を出力しているので，途中で用紙サイズ（\paperwidth／\paperheight）を変更する場合には対応できません。また，dviselect などのツールを用いて DVI のページをシャッフルする場合にも問題が起こりえます。こういう場合は，atbegshi や bophook などのパッケージを利用して，全てのページに special 命令を出す必要があります。ここでは bophook を利用する例を示します。

```
% プレアンブル
\usepackage{bophook}
\AtBeginPage{\special{papersize=\the\paperwidtgh,\the\paperheight}}
```

### TeXのボックスを直接ページとして出力する {#occcb92b}

サポート： (x)dvipdfmx

いわゆる「出力ルーチン」を介さずに，\shipout を直接使ってボックスをページとして出力します。この時に pdf:pagesize special を利用して適切なページ設定を行います。

```
% upLaTeX 文書; 文字コードは UTF-8
\documentclass{article}
\begin{document}
\setbox0\hbox{☃}% 出力したいボックス
\shipout\hbox{%
  \special{pdf:pagesize
      width \the\wd0 \space
      height \the\dimexpr\ht0+\dp0\relax\space
      xoffset 0in yoffset 0in}%
  \box0}%
\end{document}
```

xoffset，yoffset を指定して「例の 1 インチ」を消しているのがポイントです。 <!-- まあ，\hoffset=-1in \voffset=-1in でも同じことができるけど。 -->

### 簡単な図（ゆきだるま）を描く {#specials-snowman}

サポート： dvips，(x)dvipdfmx，dviout

special 命令を直接使って「ゆきだるまの絵」を描いてみましょう。

まずは，PostScript special を使った例です。

```
\documentclass[a4paper]{article}
\begin{document}
Hello%
\special{" 0.6 setlinewidth
 newpath 25.64 24.64 moveto
 26.13 23.84 26.4 22.95 26.4 22 curveto 26.4 20.4 24.8 18.8 22.8 17.6 curveto
 27.6 16.4 29.6 12.8 29.6 10 curveto 29.6 5.2 26 3.2 23.2 3.2 curveto
 8.8 3.2 lineto 6 3.2 2.4 5.2 2.4 10 curveto 2.4 12.8 4.4 16.4 9.2 17.6 curveto
 7.2 18.8 5.6 20.4 5.6 22 curveto 5.6 25.63 9.54 28.26 14.45 28.73 curveto stroke
 newpath 19.2 36 moveto 26.8 32.4 lineto 25.6 24.4 lineto
 22.4 24 16 26.4 14.4 28.8 curveto  closepath stroke
 newpath 12.4 22.4 moveto
 12.4 22.73 12.22 23 12 23 curveto 11.78 23 11.6 22.73 11.6 22.4 curveto
 11.6 22.07 11.78 21.8 12 21.8 curveto 12.22 21.8 12.4 22.07 12.4 22.4 curveto closepath fill
 newpath 20.4 22.4 moveto
 20.4 22.73 20.22 23 20 23 curveto 19.78 23 19.6 22.73 19.6 22.4 curveto
 19.6 22.07 19.78 21.8 20 21.8 curveto 20.22 21.8 20.4 22.07 20.4 22.4 curveto closepath fill
 newpath 12 19.2 moveto 20 19.2 lineto stroke
}, {\TeX}!
\end{document}
```

ここでは「周囲から隔離した描画環境」を作る「"」形式を使っているため，dvips，dvipdfmx，dviout の何れを用いてもほぼ同じ結果が得られます。描画はほぼ (0,0)―(32,40) の範囲に行われていて，座標原点 (0,0) が \special のある位置（‘o’と‘,’の間）に配置されています。special 自体は大きさを持たないため，それに続くテキストは絵の上に重ね書きされます。

ここでもし「"」形式の代わりに「ps:」形式を使ってしまうと，絵が予想外の位置（DVI ウェアにより異なる）に動いてしまいます。

次に，dvipdfmx の PDF special を利用した例を示します。（これは (x)dvipdfmx でのみ動作します。）

```
\documentclass[a4paper]{article}
\begin{document}
Hello%
\special{pdf:content 0.6 w
 n 25.64 24.64 m
 26.13 23.84 26.4 22.95 26.4 22 c 26.4 20.4 24.8 18.8 22.8 17.6 c
 27.6 16.4 29.6 12.8 29.6 10 c 29.6 5.2 26 3.2 23.2 3.2 c
 8.8 3.2 l 6 3.2 2.4 5.2 2.4 10 c 2.4 12.8 4.4 16.4 9.2 17.6 c
 7.2 18.8 5.6 20.4 5.6 22 c 5.6 25.63 9.54 28.26 14.45 28.73 c S
 n 19.2 36 m 26.8 32.4 l 25.6 24.4 l
 22.4 24 16 26.4 14.4 28.8 c s
 n 12.4 22.4 m
 12.4 22.73 12.22 23 12 23 c 11.78 23 11.6 22.73 11.6 22.4 c
 11.6 22.07 11.78 21.8 12 21.8 c 12.22 21.8 12.4 22.07 12.4 22.4 c f
 n 20.4 22.4 m
 20.4 22.73 20.22 23 20 23 c 19.78 23 19.6 22.73 19.6 22.4 c
 19.6 22.07 19.78 21.8 20 21.8 c 20.22 21.8 20.4 22.07 20.4 22.4 c f
 n 12 19.2 m 20 19.2 l S
}, {\TeX}!
\end{document}
```

このように PDF special で「周囲から隔離した描画環境」を作るには pdf:content 命令を用います。

最後に，Tpic special を利用した例を示します。

```
\documentclass{article}
\begin{document}
Hello%
\begingroup\def\[#1]{\special{#1}\ignorespaces}
\[pn 9]\[pa 356 -342]\[pa 357 -341]\[pa 357 -340]\[pa 358 -338]\[pa 361 -334]
\[pa 364 -325]\[pa 367 -306]\[pa 352 -273]\[pa 336 -258]\[pa 327 -251]
\[pa 322 -248]\[pa 319 -246]\[pa 318 -245]\[pa 317 -245]\[pa 317 -244]
\[pa 318 -244]\[pa 319 -244]\[pa 321 -243]\[pa 325 -242]\[pa 333 -240]
\[pa 347 -234]\[pa 371 -218]\[pa 401 -180]\[pa 411 -139]\[pa 397 -85]
\[pa 363 -54]\[pa 322 -44]\[pa 256 -44]\[pa 189 -44]\[pa 122 -44]
\[pa 82 -54]\[pa 48 -85]\[pa 33 -139]\[pa 43 -180]\[pa 74 -218]
\[pa 98 -234]\[pa 112 -240]\[pa 120 -242]\[pa 124 -243]\[pa 126 -244]
\[pa 127 -244]\[pa 128 -244]\[pa 128 -245]\[pa 127 -245]\[pa 126 -245]
\[pa 125 -246]\[pa 123 -248]\[pa 118 -251]\[pa 108 -258]\[pa 92 -273]
\[pa 78 -306]\[pa 94 -351]\[pa 139 -383]\[pa 168 -393]\[pa 184 -397]
\[pa 192 -398]\[pa 196 -399]\[pa 199 -399]\[pa 200 -399]\[pa 201 -399]\[sp]
\[sh 1]\[ia 167 -311 6 8 0 7]
\[sh 1]\[ia 278 -311 6 8 0 7]
\[pa 356 -339]\[pa 355 -339]\[pa 354 -339]\[pa 353 -339]\[pa 350 -338]
\[pa 344 -338]\[pa 330 -339]\[pa 300 -345]\[pa 240 -368]\[pa 216 -384]
\[pa 207 -392]\[pa 203 -396]\[pa 201 -398]\[pa 201 -399]\[pa 200 -399]
\[pa 200 -400]\[sp]
\[pa 200 -400]\[pa 267 -500]\[pa 372 -450]\[pa 356 -339]\[fp]
\[pa 167 -267]\[pa 278 -267]\[fp]
\endgroup
, {\TeX}!
\end{document}
```

Tpic special の描画環境は常に周りの TeX 出力とは隔離されていて，座標の原点は現在の TeX の参照点にあります。

### ファイルを添付 {#specials-dvipdfmx-annotate}

サポート： (x)dvipdfmx

PDFのアノーテーション（注釈）機能を利用してファイルを添付します。

```
\special{pdf:fstream @fileobj (ファイル名をここに)}%
\special{pdf:ann width 5bp height 10bp
           << /Type /Annot
              /Subtype /FileAttachment
              /FS <<
                    /Type /Filespec
                    /F    (ファイル名をここに)
                    /EF   << /F @fileobj >>
                  >>
              /Name /Paperclip
              /C    [0.8 0.4 0.4]
              /T    (タイトルをここに)
           >>
         }%
```

上の例ではまず最初の pdf:fstream special で外部ファイルを取り込み，それを fileobj と名付けます。
次の pdf:ann special で "添付ファイル" アノーテーションを作ります。
出来上がった PDF には小さなクリップが表示され，その上で右クリックするとメニューから添付ファイルを保存できるようになるはずです（ビューアによって操作は異なります）。
このようにして TeX のソースを埋め込んでおくこともできます。

### XMP メタデータ {#c01ffb78}

サポート： (x)dvipdfmx

XMP メタデータは PDF など様々なファイルに添付できる XML 形式のメタデータです。
これも pdf:fstream を使います。
例えば，test.xmp というファイル名で XMP メタデータを用意したとすると，以下のコードでそれを添付できます。

```
 \special{pdf:fstream @xmp (test.xmp) <<
   /Type /Metadata
   /Subtype /XML >>
 }
 \special{pdf:put @catalog << /Metadata @xmp >>}
```

（現在のところメタデータは圧縮されます）

### PDF に描画・透かしを入れる {#specials-dvipdfmx-drawing}

サポート： (x)dvipdfmx

pdf:bop 命令を使用すると，ページの開始時に任意の PDF 描画コードを挿入することができます：

```
\special{pdf:bop 0.4 0.4 0.6 rg 0 0 596 842 re 72 72 452 700 re f*}
```

これは余白の部分を塗りつぶします。

ウォーターマーク（透かし）風のものを入れます：<br>
（bophook パッケージが必要です）

```
\documentclass{article}
\usepackage{bophook}
\AtBeginDocument{
  \special{pdf:obj @Courier-Bold
    <<
      /Type /Font
      /Subtype /Type1
      /BaseFont /Courier-Bold
      /Encoding /WinAnsiEncoding
    >>
  }
  \special{pdf:bop BT 1 Tr /_Fn01 200 Tf
                   0.707 0.707 -0.707 0.707 72 216 Tm (Sample) Tj ET}
}
\AtBeginPage{
  \special{pdf:put @resources << /Font << /_Fn01 @Courier-Bold >> >>}
}
\begin{document}
Hello, world.
\end{document}
```

やや複雑な例です。
pdf:obj はオブジェクトを定義する命令でここでは Courier-Bold というフォントを定義しています。
次の pdf:bop ではページの開始時に "Sample" という文字列を描画するように指示しています。
pdf:put の部分では resources で識別される辞書オブジェクト（ここではページリソース）に与えられたオブジェクトを追加します。
ここではフォントリソースに先ほど定義したフォント Courier-Bold を "\_Fn01" という名前で登録しています。

上の例ではページに直接 Sample という文字を書き込みましたが，アノーテーションを使ってウォーターマークを入れることもできます。

### 描画物を切り取り貼り付ける {#jc3fc76f}

サポート： (x)dvipdfmx

pdf:bxobj/exobj と pdf:uxobj はユニークな機能を提供します。

```
 \special{pdf:bxobj @myform width 100pt height 0pt depth 10pt}%
 Hello World!
 \special{pdf:exobj}%
```

```
 \special{pdf:uxobj @myform}
 \special{pdf:bt rotate -10}\special{pdf:uxobj @myform}\special{pdf:et}
 \special{pdf:bt rotate -20}\special{pdf:uxobj @myform}\special{pdf:et}
 \special{pdf:bt rotate -30}\special{pdf:uxobj @myform}\special{pdf:et}
 \bye
```

TeX の出力結果 "Hello World!" を切り取り，uxobj で貼り付けます。
一度切り取り保存したオブジェクトは何度も再利用できます。

## 関連リンク {#links}

- [dvipdfmx（谷村さん）](https://web.archive.org/web/20250427162209/http://r03.nurse.medic.mie-u.ac.jp/LaTeX/dvipdfmx.html)：dvipdfm/dvipdfmx 用の \special の様々な使用例

[^1]: モノクロのプリンターで紙に印刷する場合にはこれらの機能は意味を持たないので，“デバイス非依存”を旨とする DVI 標準でサポートされないのは当然でしょう。
[^2]: special 命令を扱うのに，DVI 仕様の詳細についての理解は（一般には）不要です。
[^3]: ここで挙げたダンプ形式はここでの説明のためのアドホックなものです。実際に DVI ファイルを人間が読める形に“逆アセンブル”するには，dvitype や dv2dt などのツールを利用します。なお，dvitype では special 命令は“xxx”と表示されます。
[^4]: 「暗黙の波括弧」などの些末な話は措いておきましょう。
[^5]: もちろん，\special プリミティブは展開可能ではありません。
[^6]: 拡張 DVI ファイルに書き出す時の話です。なお，実用されることはまずないと思いますが，“DVI モードの LuaTeX”も XeTeX と同じ動作になります。
[^7]: 不幸なことに，dvipdfmx の独自の special 命令は「pdf:」で始まっており，この規定と衝突しています。そのため，この仕様は「dvipdfmx 用の TeX 文書を誤って pdfTeX でコンパイルした時に，エラーも傾向も出ずに壊れた PDF ファイルを出力してしまう」というトラブルの原因となってしまっています。
[^8]: さらに言うと，「color push Red」という形式の special 命令であれば dvips，dvipdfmx の他に dviout でもサポートされます。
[^9]: 210truemm などの“true 付”単位を明示的に指定することは（少なくとも dvips では）できません。ちなみに，同じ用途の pdf:pagesize special 命令では，true 付と true 無しの単位は本来の意味を持ちます。
[^10]: 「例の 1 インチ」のオフセットのことです。
