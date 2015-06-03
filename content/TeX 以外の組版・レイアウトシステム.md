---
title: "TeX 以外の組版・レイアウトシステム"
url: "/TeX 以外の組版・レイアウトシステム/"
date: 2015-05-31T04:06:47Z
pukiwiki: "TeX 以外の組版・レイアウトシステム"
---

# TeX 以外の組版・レイアウトシステム

## TeX 以外の組版・レイアウトシステム {#l0ceef78}

TeX 以外の組版・レイアウトシステムについて紹介します。

***

***

## オープンソース {#s9837f3b}

### [Apache FOP](http://xmlgraphics.apache.org/fop/) {#z9bf216b}

Apache FOPは、XSL-FOの処理系で、[Apache XML Graphics プロジェクト](http://xmlgraphics.apache.org/)により開発されています。PDF を含む様々な出力フォーマットに対応しています。Java による実装です。

2015年6月の段階では Version 2.0 のリリースノートがありますが、その配布物はバイナリもソースもないようです。実質 1.1 が最新のリリースとなっています。

#### インストールと実行 {#w1d759d9}

まずは Java 実行環境が必要です。Java の準備が整ったら、[ダウンロードページ](http://xmlgraphics.apache.org/fop/download.html)から辿れるミラーサイトより、最新のものをダウンロードします。

とりあえず試すには、ダウンロードしたバイナリのアーカイブを展開し、展開したディレクトリに移動します。そして例えば、

```
   ./fop examples/fo/basic/simple.fo simple.pdf
```

のようにします。simple.pdf が生成されれば成功です。MinGW で

```
   エラー: メイン・クラスorg.apache.fop.cli.Mainが見つからなかったかロードできませんでした
```

のようなエラーが出る場合は、シェルスクリプト fop の 119 行目あたりを

```
   if [ "$OS" = "Windows_NT" ] ; then
     if [ -z "$MSYSTEM" -o "$MSYSTEM" != "MINGW32" ] ; then
         pathSepChar=";"
     else
         pathSepChar=":"
     fi
   else
       pathSepChar=":"
   fi
```

のように変えます。

実行時に設定ファイルを -c オプションで読み込ませることができます。設定ファイルのサンプルが conf/fop.xconf にあります。とりあえず、設定ファイルの

```
   <fonts>...</fonts>
```

の部分に

```
   <auto-detect/>
```

を入れましょう。こうするとシステムにインストールされたフォントを自動で検出してくれます。

インストールは好きなディレクトリに展開した内容を移すだけです。場合によっては FOP_HOME などの環境変数を設定する必要が出てくるかもしれません。

#### 文書の作成 {#o64708aa}

Apache FOP の入力は XSL-FO と呼ばれる XML 文書の一種です。先ほどの

```
   examples/fo/basic/simple.fo
```

の中身が参考になるでしょう。

#### 利点と制限・欠点 {#l80a7ea9}

利点は

- 入力形式である XSL-FO は [XSL](http://www.w3.org/Style/XSL/) の仕様の一部として、標準化団体 W3C により開発され勧告として公表されています。
- SVG への対応。WEB 標準技術である SVG への高水準での対応は魅力的です。

欠点等は

- Apache FOP はフロートに対応していないようです。図表を使う際には大きな制限となるでしょう。
- PostScript系の OpenType フォントにはまだ対応していないようです。（2.0 から対応？）
- 入力形式である XSL-FO は平易な解説資料に乏しいため、学習コストが高くなります。他の XML 形式から変換する場合もそれほど容易ではありません。XSL-FO の仕様そのものも、今後どうなるのか不透明なところがあります。
- 国際化対応など、どの程度できているのか不明瞭です。縦組みなどは未対応な模様です。

#### TeX との比較 {#k61aa916}

- [Knuths Model](http://wiki.apache.org/xmlgraphics-fop/KnuthsModel)

> FOP's line breaking and page breaking algorithms both implement Knuth's breaking algorithm.

- [Hyphenation](http://xmlgraphics.apache.org/fop/1.1/hyphenation.html)

> Apache™ FOP uses Liang's hyphenation algorithm, well known from TeX.

ということのようです。

### [GNU troff](http://www.gnu.org/software/groff/) {#s340bffc}

Groff（GNU troff）はプレーンテキストに文書整形用コマンドを埋め込んだ形式の入力から、整形された出力を行う組版システムです。DVI、PostScript や PDF などのページ記述言語、HTML、あるいは端末での表示用に ASCII/UTF8 での出力が可能です。最初は James Clark によって書かれ、現在は Ted Harding と Werner Lemberg によりメンテナンスされています。

### [The Heirloom Documentation Tools](http://heirloom.sourceforge.net/doctools.html) {#tf77c997}

こちらも troff です。OpenSolaris 版の troff をもとにしています。Gunnar Ritter により開発されています。C 言語による実装です。

特徴として、

- PostScript Type 1、OpenType、TrueType フォントが使えます。
- パラグラフの整形には Knuth-Plass アルゴリズムの変種を用い、パラグラフ全体に対し調整を行います。グリフ幅、文字間スペース、単語間スペースの調整などの microtypography 拡張を含みます。
- ペア・カーニングやトラッキングのサポート。
- ぶら下げ組み（Hanging characters）対応。
- 国際化対応したハイフネーション。TeX の Liang アルゴリズムをもとに開発され、OpenOffice で用いられる　Raph Levien の LibHnj を用います。

などがあります。PostScritp 出力が可能です。

### [Patoline](http://patoline.org/) {#vdc178df}

主に OCaml で書かれた組版システムです。LaTeX 風の独自入力フォーマットで PDF など様々なフォーマットで出力します。

### [PDFJ](http://hp1.jonex.ne.jp/~nakajima.yasushi/) {#f1452ce3}

Perl で実装された PDF 生成用のモジュールです。JIS X 4051 にほぼ準拠した日本語組版ルールを組み込んであるのが特徴です。

### [SILE](http://www.sile-typesetter.org/) {#va3c00e3}

Simon Cozens による、Lua で書かれた組版システム。LaTeX 風の独自の入力フォーマットと XML による入力で、PDF 出力です。Harfbuzz による OpenType レイアウト機能を備えており、日本語を含む様々な言語・用字系をサポートします。Lua により拡張可能です。

特徴として、

- フレームを用いた複雑なページレイアウトに対応する。
- 高水準のプログラミング言語（Lua）によって組版エンジンを容易に拡張可能。
- XSL スタイルシートを用いずに直接 XML から PDF を生成できる。
- グリッド上でのタイプセット。

などがあります。作者の Simon Cozens は[Perl で TeX の Kunth-Plass アルゴリズムを実装する](http://search.cpan.org/~simon/Text-KnuthPlass-1.02/)など、TeX に強い影響を受けているようです。[マニュアル](http://www.sile-typesetter.org/images/sile-0.9.1.pdf)を読む限りでは、TeX のアルゴリズムを Lua へ移植したといった様相で、本格的なものです。また、[Fontconfig](/Fontconfig/) を介したフォントアクセスで、TeX のようなフォント関連の煩わしさがあまりありません。

### [Vivliostyle プロジェクト](http://vivliostyle.co.jp/project/) {#v10e66b1}

HTML+CSSベースの組版システムです。電子出版の時代にマッチする新しい組版システムを、Webブラウザ技術をベースに作ることを目指しています。

### [Weasy Print](http://weasyprint.org/) {#s618647b}

WeasyPrint は HTML+CSS から PDF や PNG を出力するレンダリング・エンジンです。その目的は出版向けのWeb標準技術をサポートすることにあります。Python などによる実装で、BSDライセンスで提供されています。Pango によるレイアウトと Cairo を用いた出力です。
