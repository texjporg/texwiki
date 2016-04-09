---
title: "special 命令"
url: "/special 命令/"
date: 2015-11-02T01:48:02Z
pukiwiki: "special 命令"
---

# special 命令

## \special 命令 {#headline}

\special 命令とは，DVI ではサポートしていない，デバイス依存の命令を埋め込むための命令です。
各種図形・画像ファイルのとりこみ，ハイパーテキスト，ソースコードへのジャンプ，用紙サイズの埋め込みなどには全て special 命令が使用されています。

<!-- とりあえず基本的な説明を書くことにする． -->

***

***

### special 命令とは何か {#p63dedca}

#### DVI の special 命令 {#m8d5648c}

DVI ファイルは「“A”の文字を出力する」「参照点を右に 1pt 移動する」などの“DVI 命令”から構成されます。DVI 命令の意味は仕様で明確に決められているので，どの DVI ウェア（DVI ファイルを扱うソフトウェア）を用いても同じように解釈されます。

しかし，場合によっては，特定の DVI ウェアの独自拡張の機能が使える方が便利なことがあります。そこで，DVI 仕様では「仕様では意味を定めず，専ら独自拡張機能のために使う」ための特別な命令である「special 命令」を敢えて用意しています。つまり，標準の部分と独自拡張の部分を明確に分離する方針をとっているのです。

そして TeX 言語では，この「DVI の special 命令」を発行するための機能として，\special プリミティブが用意されています。

DVI の special 命令についての概略を把握するため，一つ例を挙げてみます。[^1]

```
Te\special{color Red}X
```

この TeX 言語コード（の断片）をコンパイルすると，以下のような DVI 命令の列が生成されます。[^2] <!-- DVIでのspecialの扱いの雰囲気を知らせるため，敢えてDVIコードを出す。 -->

```
54                     : setchar84          % 'T'を出力
91FF2AAA               : right3 -54614      % カーニングの左移動
65                     : setchar101         % 'e'を出力
EF09636F6C6F7220526564 : special1 9 'color Red' % special命令
58                     : setchar88          % 'X'を出力
```

これから判るように，\special プリミティブに与えた引数の文字列は，TeX 処理系により解釈されることなく，そのまま DVI の special 命令の引数として書き出されています。つまり DVI 標準としては「“color Red”という拡張命令が発行された」という意味しか持っていません。ところが，dvips にとっては“color Red”という special 命令は「以降の文字の色を赤に変える」という意味を持っています。従って，上記の命令列を含む DVI ファイルを dvips で処理した場合は，文字“X”が赤色で出力される（ような PostScript ファイルが生成される）ことになります。

#### TeX の \special プリミティブ {#p4ae1289}

\special プリミティブは以下のような単純な書式を持ちます。[^3]

```
\special{<トークン列>}
```

ここで引数のトークン列は \write プリミティブと同様に扱われます。つまり，完全展開した後に文字列化した結果が「DVI の special 命令の引数の文字列」となるわけです。

TeX 処理系は，\special{～} が実行[^4]されると，「“～”という special 命令を発行する」という情報を込めた特殊なオブジェクト（whatsit ノード）を現在の参照点に配置します。そして，そのオブジェクトを含むページが出力（shipout）された時に，そのページの DVI 命令列の中に実際に special 命令として現れることになります。

#### special 命令の文字コード {#fda58d13}

先述の通り \special の引数のトークン列は「文字列化して DVI の special 命令の引数として書き出される」のですが，その際に文字コードの扱いは以下のようになっています。

- 8 ビット欧文の TeX においては，文字とは実質バイトのことなので，引数のバイト列がそのまま DVI に書き出されます。
- (u)pTeX において，和文文字は，エンジンの内部漢字コードでエンコードされたバイト列として書き出されます。ソースファイルの漢字コードとは無関係であることに注意してください。欧文文字の扱いは欧文 TeX と同じです。
- XeTeX [^5]においては，文字列は常に UTF-8 でエンコードされたバイト列として書き出されます。やはりソースファイルの文字コードは無関係です。

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

と同等と解釈されます。[^6]

XeTeX は表向きは PDF を直接出力しているように見えますが，実は内部ではいったん「XDV 形式」（DVI の拡張版）のファイルを出力してそれを xdvipdfmx（dvipdmx の拡張版）で PDF に変換する，という手順を踏んでいます。従って，XeTeX では dvipdfmx がサポートする special 命令が使用できます。また，XeTeX の拡張プリミティブが内部では special 命令により実現されていることもあります。

### \special 命令とデバイス依存（ドライバ依存） {#device-independent}

<!-- 一部の内容を最初の小節に繰り入れる。 -->

元来，TeX による組版結果を記録するファイルは DVI (device-independent) という形式で，その名称の通り， DVI ファイルはデバイス非依存な一種のページ記述言語によるファイルでした。
しかし，TeX 自体は各種図形の描画，画像ファイルのとりこみ，ハイパーリンクなどの機能をもたないため，これらを実現したいという要求がありました。

TeX にはソース中に \special{...} という命令を書き込むと，TeX はそれを解釈せずにそのまま DVI ドライバ（出力デバイス）に受け渡すという機能があります。
この機能を利用し，出力デバイス側で描画やハイパーリンクなどの拡張機能を用意し，DVI ファイル中に埋め込まれた \special 命令を解釈させるという方法がとられるようになりました。
この手法のうち特に有用なものは多くが LaTeX パッケージ（[graphics(x)](/graphicx/)，(x)color，[hyperref](/hyperref/) など）としてまとめられ，一般ユーザにも広く用いられるようになりました。
とはいえ，さまざまな特殊効果を出すためにこれらの拡張機能を直接使いたい場合もあるでしょう。

こうした拡張が進んだ結果，いまどきのユーザは各種の \special を（意図的にあるいは暗黙のうちに） 使うことによって「デバイス依存」な DVI ファイルを作りがちになっています。
しかし，これらの \special 命令を用いて作成した DVI ファイルは，その命令を正しく解釈できるデバイスドライバ以外で正しく印刷することができないことに注意が必要です。

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

[^1]: special 命令を扱うのに，DVI 仕様の詳細についての理解は（一般には）不要です。
[^2]: ここで挙げたダンプ形式はここでの説明のためのアドホックなものです。実際に DVI ファイルを人間が読める形に“逆アセンブル”するには，dvitype や dv2dt などのツールを利用します。なお，dvitype では special 命令は“xxx”と表示されます。
[^3]: 「暗黙の波括弧」などの些末な話は措いておきましょう。
[^4]: もちろん，\special プリミティブは展開可能ではありません。
[^5]: 拡張 DVI ファイルに書き出す時の話です。なお，実用されることはまずないと思いますが，“DVI モードの LuaTeX”も XeTeX と同じ動作になります。
[^6]: 不幸なことに，dvipdfmx の独自の special 命令は「pdf:」で始まっており，この規定と衝突しています。そのため，この仕様は「dvipdfmx 用の TeX 文書を誤って pdfTeX でコンパイルした時に，エラーも傾向も出ずに壊れた PDF ファイルを出力してしまう」というトラブルの原因となってしまっています。
