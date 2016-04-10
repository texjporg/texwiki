---
title: "special 命令"
url: "/special 命令/"
date: 2015-11-02T01:48:02Z
pukiwiki: "special 命令"
---

# special 命令

## \special 命令 {#headline}

special 命令とは，DVI 標準ではサポートしていない，各 DVI ドライバの独自拡張機能を指示するための命令です。今日の LaTeX において普通に用いられている，

- 図形描画（[TikZ](/TikZ/)，[PSTricks](/PSTricks/)など）
- 画像ファイルの取込（[graphicx](/graphicx/)）
- ハイパーリンクの埋込（[hyperref](/hyperref/)）
- 用紙サイズ情報の記録（[geometry](/geometry/)など）

などの機能の実装には special 命令が使用されています。

<!-- とりあえず基本的な説明を書くことにする． -->

***

***

### special 命令の基本 {#basic}

<!-- 今の時代に「デバイス」が何を指すかという議論は避けたい。 -->

#### special 命令とは何か {#what-is}

（旧来の）TeX 処理系は組版結果を DVI ファイルに出力します。この「DVI (device-independent) ファイル」というのは，その名称の通り，デバイス非依存な一種のページ記述言語で書かれています。

DVI ファイルは「“A”の文字を出力する」「参照点を右に 1pt 移動する」などの“DVI 命令”から構成されます。DVI 命令の意味は仕様で明確に決められているので，どの DVI ウェア（DVI ファイルを扱うソフトウェア）を用いても同じように解釈されます。

しかし，場合によっては，特定の DVI ウェアにおいて独自拡張の機能が使える方が便利なことがあります。例えば，DVI 標準では「色を付ける」「ハイパーリンクを置く」などの機能は規定されていません。[^1]しかし PDF 文書形式ではこれらの機能が実現できます。となると，dvipdfmx のような「DVI を PDF に変換する」DVI ドライバを実装する場合には，そのような拡張機能を持たせたいというのは自然な要求です。

そこで，DVI 仕様では「仕様では意味を定めず，専ら独自拡張機能のために使う」ための特別な命令である「special 命令」を敢えて用意しています。つまり，標準の部分と独自拡張の部分を明確に分離する方針をとっているのです。

そして TeX 言語では，この「DVI の special 命令」を発行するための機能として，\special プリミティブが用意されています。

今日の LaTeX では，「色を付ける」機能は (x)color パッケージ、ハイパーリンクを作る機能は [hyperref](/hyperref/) パッケージで提供されていますが，これらの機能の実装には special 命令（\special プリミティブ）が利用されています。

#### DVI の special 命令 {#dvi-special}

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

#### TeX の \special プリミティブ {#tex-special}

\special プリミティブは以下のような単純な書式を持ちます。[^4]

```
\special{<トークン列>}
```

ここで引数のトークン列は \write プリミティブと同様に“文字列化”されます。つまり，完全展開した後に文字列化した結果が「DVI の special 命令の引数の文字列」となるわけです。

TeX 処理系は，\special{～} が実行[^5]されると，「“～”という special 命令を発行する」という情報を込めた特殊なオブジェクト（whatsit ノード）を現在の参照点に配置します。そして，そのオブジェクトを含むページが出力（shipout）された時に，そのページの DVI 命令列の中に実際に special 命令として現れることになります。

#### special 命令の文字コード {#fda58d13}

先述の通り \special の引数のトークン列は「文字列化して DVI の special 命令の引数として書き出される」のですが，その際に文字コードの扱いは以下のようになっています。

- 8 ビット欧文の TeX においては，文字とは実質バイトのことなので，引数のバイト列がそのまま DVI に書き出されます。
- (u)pTeX において，和文文字は，エンジンの内部漢字コードでエンコードされたバイト列として書き出されます。ソースファイルの漢字コードとは無関係であることに注意してください。欧文文字の扱いは欧文 TeX と同じです。
- XeTeX [^6]においては，文字列は常に UTF-8 でエンコードされたバイト列として書き出されます。やはりソースファイルの文字コードは無関係です。

#### PDF 直接出力のときの \special プリミティブ {#j5504fc9}

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

### 主な \special 命令の種類 {#specials-set}

非常に良く使われている \special 命令の例として，画像ファイルのとりこみや文字の拡大縮小・回転を行う [graphicx (graphics)](/graphicx/) パッケージ，文字や図形に色をつけるための (x)color パッケージがあります。
ほかにも，文書やページの設定を行う \special 命令もよく使われています。

大規模な \special コマンドセットでよく知られているものは，次のようなものが挙げられます。

#### PostScript specials {#ps-specials}

[PostScript](/PostScript/) の命令を直接 TeX ソース中に書き込むための special コマンドセットです。
PostScript specials を完全にサポートできるドライバの条件として，PostScript 命令をヘッダの内容と組み合わせて解釈できる（VTeX 等）か，組み合わせた PostScript 命令をその場で PostScript インタプリタに処理させられる（xdvipdfmx 等）か，あるいは PostScript を解釈せずに次の段階に受け渡す（[dvips](/dvips/) 等）かが挙げられます。
[PSTricks](/PSTricks/) パッケージや psfrag パッケージで使われています。

[dvipdfmx](/dvipdfmx/) では PostScript specials による多彩な描画表現はサポートされていませんが，[MetaPost](/MetaPost/) をサポートするために簡単な命令のみ解釈できるようです。
試しに使ってみましょう。まず，以下のような TeX ファイル (test.tex) を用意します：

```
 \special{ps: gsave 0 0 moveto 100 0 lineto stroke grestore}
 \bye
```

そして，TeX と dvipdfmx で処理します：

```
 tex test.tex
 dvipdfmx test.dvi
```

出来上がった PDF を見ると，直線が引かれているはずです。

- 参考：[なぜか dvipdfmx で PSTricks できる話](http://d.hatena.ne.jp/zrbabbler/20140712/1405179775)

#### HyperTeX specials {#hypertex-specials}

HTML ライクなハイパーリンクを可能にする special コマンドセットです。
[dvipdfmx](/dvipdfmx/)，[dvips](/dvips/) などの DVI ドライバでサポートされています。
[hyperref](/hyperref/) パッケージで使われています。

- 参考：[HyperTeX](/HyperTeX/)

#### TPIC specials {#tpic-specials}

簡単なフローチャートのような図を作成するためのプログラミング言語 pic を元にして作られた special コマンドセットです。
[dvips](/dvips/)，[dvipdfmx](/dvipdfmx/)，[dviout](/dviout/)，[xdvi](/xdvi/) 等の数多くの DVI ドライバでサポートされています。
一方で，DVI を扱わない [pdfTeX](/pdfTeX/) では tpic 拡張機能がサポートされていません。
eepic や [Xy-pic](/Xy-pic/) などのパッケージが tpic specials を利用しています。

- 参考：[tpic (pic)](/pic/#xda9ac26)

#### src-specials {#src-specials}

TeX ソースのエディタと DVI ビューアとの間で，相互に対応部分にジャンプすることを目的に作られた special コマンドです。
[dviout](/dviout/) や [xdvi](/xdvi/) などの DVI ビューアが対応しています。
しかし，現在ではほかの多くのデバイス依存パッケージを利用するようになったことから，PDF まで出力してプレビューする方式が一般的となり，[SyncTeX](/SyncTeX/) に取って代わられました。

### dvipdfmx で用いることができる \special 命令 {#specials-dvipdfmx}

dvipdfmx は様々な special 拡張をサポートしています。
文書やページの設定を行うものとして

```
papersize landscape pdf:pagesize pdf:encrypt pdf:minorversion
```

など，dvips 由来のもの，HTML 形式のハイパーリンクなど様々です。
dvipdfm(x) 自身も独自の special による拡張機能を持ちます。
dvipdfm(x) 独自の機能を使う場合は，それにより他の DVI ドライバとの互換性を酷く損なうということに注意してください。

ここでは，LaTeX パッケージの機能以外でさまざまな特殊効果を出すために用いることができる \special 拡張機能を紹介します。

#### ページ設定（用紙サイズなど） {#specials-dvipdfmx-pagesettings}

landscape や papersize などの文書全体に影響するものは PDF への変換前にスキャンされ実行されます。

```
\special{landscape}
```

は用紙を横置きに，

```
\special{papersize=210mm,297mm}
```

は用紙サイズを 210mm × 297mm に設定します。

pagesize は文書の途中でも使えますが，これが実行されるタイミングによっては予期せぬ結果となります。
特にページがシャッフルされる時は意図したようにはなりません。

```
\special{pdf:pagesize width 210mm height 297mm}
```

のように使います。
[jsclasses](/jsclasses/) の papersize オプションは，DVI ファイルに papersize special を挿入することで用紙サイズを規定しています。

#### ファイルを添付 {#specials-dvipdfmx-annotate}

アノーテーション（注釈機能）でファイルを添付：

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

上の例ではまず最初の special で外部ファイルを取り込み，それを fileobj と名付けます。
次の special で "添付ファイル" アノーテーションを作ります。
出来上がった PDF には小さなクリップが表示され，その上で右クリックするとメニューから添付ファイルを保存できるようになるはずです（ビューアによって操作は異なります）。
このようにして TeX のソースを埋め込んでおくこともできます。

#### XMP メタデータ {#c01ffb78}

XMP メタデータは PDF など様々なファイルに添付できる XML 形式の
メタデータです。これも fstream を使います。例えば、test.xmp　というファイル名で XMP
メタデータを用意したとします。

```
 \special{pdf:fstream @xmp (test.xmp) <<
   /Type /Metadata
   /Subtype /XML >>
 }
 \special{pdf:put @catalog << /Metadata @xmp >>}
```

で添付します。（現在のところメタデータは圧縮されます）

#### PDF に描画・透かしを入れる {#specials-dvipdfmx-drawing}

ページの開始時に任意の PDF 描画コードを挿入することもできます：

```
\special{pdf:bop 0.4 0.4 0.6 rg 0 0 596 842 re 72 72 452 700 re f*}
```

これは余白の部分を塗りつぶします。
"bop" はページの開始時に指定された PDF 描画コードを埋め込みます。

ウォーターマーク（透かし）風のものを入れます：

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

（bophook.sty が必要です）やや複雑な例です。
"obj" はオブジェクトを定義するコマンドでここでは Courier-Bold というフォントを定義しています。
"bop" はページの開始時に "Sample" という文字列を描画するように指示しています。
"put" の部分では resources で識別される辞書オブジェクト（ここではページリソース）に与えられたオブジェクトを追加します。
ここではフォントリソースに先ほど定義したフォント Courier-Bold を "\_Fn01" という名前で登録しています。

上の例ではページに直接 Sample という文字を書き込みましたが，アノーテーションを使ってウォーターマークを入れることもできます。

#### 描画物を切り取り貼り付ける {#jc3fc76f}

bxobj/exobj と uxobj はユニークな機能を提供します。

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

#### dvipdfmx の \special 使用例のリンク {#specials-dvipdfmx-links}

- [dvipdfmx（谷村さん）](http://www2.hyo-med.ac.jp/~tanimura/LaTeX/dvipdfmx.html)：dvipdfm/dvipdfmx 用の \special の様々な使用例

[^1]: モノクロのプリンターで紙に印刷する場合にはこれらの機能は意味を持たないので，“デバイス非依存”を旨とする DVI 標準でサポートされないのは当然でしょう。
[^2]: special 命令を扱うのに，DVI 仕様の詳細についての理解は（一般には）不要です。
[^3]: ここで挙げたダンプ形式はここでの説明のためのアドホックなものです。実際に DVI ファイルを人間が読める形に“逆アセンブル”するには，dvitype や dv2dt などのツールを利用します。なお，dvitype では special 命令は“xxx”と表示されます。
[^4]: 「暗黙の波括弧」などの些末な話は措いておきましょう。
[^5]: もちろん，\special プリミティブは展開可能ではありません。
[^6]: 拡張 DVI ファイルに書き出す時の話です。なお，実用されることはまずないと思いますが，“DVI モードの LuaTeX”も XeTeX と同じ動作になります。
[^7]: 不幸なことに，dvipdfmx の独自の special 命令は「pdf:」で始まっており，この規定と衝突しています。そのため，この仕様は「dvipdfmx 用の TeX 文書を誤って pdfTeX でコンパイルした時に，エラーも傾向も出ずに壊れた PDF ファイルを出力してしまう」というトラブルの原因となってしまっています。
[^8]: さらに言うと，「color push Red」という形式の special 命令であれば dvips，dvipdfmx の他に dviout でもサポートされます。
