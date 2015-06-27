---
title: "TeX 以外の組版・レイアウトシステム"
url: "/TeX 以外の組版・レイアウトシステム/"
date: 2015-05-31T04:06:47Z
pukiwiki: "TeX 以外の組版・レイアウトシステム"
---

# TeX 以外の組版・レイアウトシステム

## TeX 以外の組版・レイアウトシステム {#l0ceef78}

TeX 以外の組版・レイアウトシステムについて紹介します。TeX との比較対象となる条件として、禁則処理は当然ながら、パラグラフ全体を考慮した改行位置の最適化、ハイフネーション、リガチャ・カーニング処理などが挙げられます。

***

***

## オープンソース {#s9837f3b}

### [Apache FOP](http://xmlgraphics.apache.org/fop/) {#z9bf216b}

Apache FOPは、XSL-FOの処理系で、[Apache XML Graphics プロジェクト](http://xmlgraphics.apache.org/)により開発されています。PDF を含む様々な出力フォーマットに対応しています。Java による実装です。

2015年6月5日の段階では Version 2.0 が最新のリリースとなっています。フロートのサポートや Mac OS X のヒラギノなど PostScript 系 OpenType フォントへの対応といった、重要な更新が含まれます。

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

実行時に設定ファイルを -c オプションで読み込ませることができます。設定ファイルのサンプルが conf/fop.xconf にあります。フォントの自動検出などの設定が含まれるので参考にしましょう。

基本的に、インストールは好きなディレクトリに展開した内容を移すだけです。場合によっては FOP_HOME などの環境変数を設定する必要が出てくるかもしれません。

ハイフネーション用のパターンファイルはライセンスの関係上、別途入手する必要があります。[FOP XML Hyphenation Patterns](http://offo.sourceforge.net/) のページからコンパイル済みバイナリ入りの配布物を取得し、fop-hyph.jar を lib 以下に投入します。

#### 文書の作成 {#o64708aa}

Apache FOP の入力は XSL-FO と呼ばれる XML 文書の一種です。先ほどの

```
   examples/fo/basic/simple.fo
```

の中身が参考になるでしょう。

また、Apache FOP には XSLT プロセッサが同梱されているため、他の XML 文書から XSL-FO へ変換しながら PDF 生成を行うことができます。例えば、DocBook を処理するには、[The DocBook Project](http://docbook.sourceforge.net/) から XSL スタイルシート群を取得し（最新の docbook-xsl-ns 配布物）、どこか（例えば docbook-xsl-ns）に展開します。そして、

```
   fop -xml input -xsl docbook-xsl-ns/fo/docbook.xsl -pdf output
```

のようにして処理します。

#### 利点と制限・欠点 {#l80a7ea9}

利点は

- 入力形式である XSL-FO は [XSL](http://www.w3.org/Style/XSL/) の仕様の一部として、標準化団体 W3C により開発され勧告として公表されています。
- SVG への対応。WEB 標準技術である SVG への高水準での対応は魅力的です。

欠点等は

- 入力形式である XSL-FO は平易な解説資料に乏しいため、学習コストが高くなります。他の XML 形式から変換する場合もそれほど容易ではありません。XSL-FO の仕様そのものも、今後どうなるのか不透明なところがあります。
- 国際化対応など、どの程度できているのか不明瞭です。縦組みなどは未対応な模様です。

XSLT は TeX のマクロを代用するほどのプログラミング言語としての機能は備えていません。これを利点ととるか欠点ととるかは人によるかと思われます。複雑さと柔軟さのバランス的には微妙なところでしょうか。
実際の運用としては、[AsciiDoc](http://www.methods.co.nz/asciidoc/) などで文書を作成し、バックエンドとして利用することになるでしょう。

#### TeX との比較 {#k61aa916}

様々なところで TeX への言及があります。

- [Knuths Model](http://wiki.apache.org/xmlgraphics-fop/KnuthsModel)

> FOP's line breaking and page breaking algorithms both implement Knuth's breaking algorithm.

- [Hyphenation](http://xmlgraphics.apache.org/fop/1.1/hyphenation.html)

> Apache™ FOP uses Liang's hyphenation algorithm, well known from TeX.

ということのようです。

### 関連リンク {#g9895063}

- [Apache FOP --- TeX 以外の組版 ～初歩の初歩～](http://konoyonohana.blog.fc2.com/blog-entry-121.html)

### [GNU troff](http://www.gnu.org/software/groff/) {#s340bffc}

Groff（GNU troff）はプレーンテキストに文書整形用コマンドを埋め込んだ形式の入力から、整形された出力を行う組版システムです。DVI、PostScript や PDF などのページ記述言語、HTML、あるいは端末での表示用に ASCII/UTF8 での出力が可能です。最初は James Clark によって書かれ、現在は Ted Harding と Werner Lemberg によりメンテナンスされています。

行分割処理は1行ごとに逐次行われます。

### [The Heirloom Documentation Tools](http://n-t-roff.github.io/heirloom/doctools.html) {#tf77c997}

こちらも troff です。OpenSolaris 版の troff をもとにしています。Gunnar Ritter により開発されています。C 言語による実装です。

特徴として、

- PostScript Type 1、OpenType、TrueType フォントが使えます。
- パラグラフの整形には Knuth-Plass アルゴリズムの変種を用い、パラグラフ全体に対し調整を行います。グリフ幅、文字間スペース、単語間スペースの調整などの microtypography 拡張を含みます。
- ペア・カーニングやトラッキングのサポート。
- ぶら下げ組み（Hanging characters）対応。
- 国際化対応したハイフネーション。TeX の Liang アルゴリズムをもとに開発され、OpenOffice で用いられる　Raph Levien の LibHnj を用います。

などがあります。PostScritp 出力が可能です。

Unix 互換な環境でないと動かすのは難しいようです。FreeBSD 11.0 では [GNU troff の代わりに Heirloom doctools の troff が同梱されるという話](https://www.mail-archive.com/freebsd-current@freebsd.org/msg160520.html)もあります。 

### [Patoline](http://patoline.org/) {#vdc178df}

主に OCaml で書かれた組版システムです。LaTeX 風の独自入力フォーマットで PDF など様々なフォーマットで出力します。

### [PDFJ](http://hp1.jonex.ne.jp/~nakajima.yasushi/) {#f1452ce3}

Perl で実装された PDF 生成用のモジュールです。JIS X 4051 にほぼ準拠した日本語組版ルールを組み込んであるのが特徴です。

### [SILE](http://www.sile-typesetter.org/) {#va3c00e3}

Simon Cozens による、Lua で書かれた組版システム。LaTeX 風の独自の入力フォーマットと XML による入力で、PDF 出力です。HarfBuzz による OpenType レイアウト機能を備えており、日本語を含む様々な言語・用字系をサポートします。Lua により拡張可能です。

特徴として、

- フレームを用いた複雑なページレイアウトに対応する。
- 高水準のプログラミング言語（Lua）によって組版エンジンを容易に拡張可能。
- XSL スタイルシートを用いずに直接 XML から PDF を生成できる。
- グリッド上でのタイプセット。

などがあります。作者の Simon Cozens は[Perl で TeX の Kunth-Plass アルゴリズムを実装する](http://search.cpan.org/~simon/Text-KnuthPlass-1.02/)など、TeX に強い影響を受けているようです。[マニュアル](http://www.sile-typesetter.org/images/sile-0.9.1.pdf)を読む限りでは、TeX のアルゴリズムを Lua へ移植したといった様相で、本格的なものです。また、[Fontconfig](/Fontconfig/) を介したフォントアクセスで、TeX のようなフォント関連の煩わしさがあまりありません。

現在、かなり活発に開発が行われており、縦組みや JIS X 4051 への対応なども取り組まれるようです。積極的にフィードバックされると良いでしょう。

#### インストール（MinGW32） {#r5f11a5c}

Linux や Mac へのインストールはパッケージ管理システムを使って依存ライブラリを整えて行けば、それほど苦労はしないでしょう。

ここでは Windows、特に MinGW32 環境へのインストールの概要を解説します。

#### 依存ライブラリ {#g916e4d4}

SILE 自身は OpenType フォントサポートに [HarfBuzz](http://www.freedesktop.org/wiki/Software/HarfBuzz/) に依存しており、これはまた様々なライブラリに依存しています。また、フォント・アクセスに [Fontconfig](/Fontconfig/) を用います。SILE は XML 形式の入力を処理するために [Expat XML Parser](http://www.libexpat.org/) を利用します。これらは [GTK+の配布サイト](http://www.gtk.org/download/win32.php) からある程度そろえることができます。HarfBuzz や SILE をビルドするには Run-Time に加えて Dev パッケージも必要です。SILE の PDF 出力部は C言語で書かれており、libpng や zlib に依存するのでこれらも必要です。

必要な DLL がなくてプログラムがうまく起動しない場合は、

```
    objdump -p /usr/local/bin/libharfbuzz-0.dll | grep DLL
```

などで調べて、必要とされる DLL を探しましょう。

依存ライブラリの整備ができたら Lua の整備です。

#### Lua と LuaRocks {#m4791203}

MinGW32 環境では、Lua を mingw-get で入れるのが簡単です。

```
   mingw-get install mingw32-lua
```

Lua のパッケージ・マネージャ [LuaRocks](http://luarocks.org/) を入れるには、まずWindows 向けのファイルを[ダウンロード](http://keplerproject.github.io/luarocks/releases/)し展開ます。その後、コマンド プロンプトを立ち上げ、展開したフォルダに移動し、インストールします。例えば、Lua 5.2 で C:\Lua\5.2\LuaRocks にインストールするには、

```
   install /P C:\Lua\5.2\LuaRocks /MW /LV 5.2 /TREE C:\Lua\5.2\LuaRocks
```

とします。インストール後に出る PATH の設定の指示に従って下さい。

Lua と LuaRocks がインストールできたら、いくつかの Lua パッケージを入れます。

```
   luarocks install lpeg
   luarocks install luaexpat EXPAT_DIR=C:\MinGW\msys\1.0\local
```

コマンド プロンプトから（mintty などではなく）実行します。

ここまでできてようやく SILE に移ります。

#### SILE のインストール {#lc82b54b}

SILE の最新版は 2015年6月3日現在、0.9.2 です。[公式ページ](http://github.com/simoncozens/sile/releases/tag/v0.9.2) から sile-0.9.2.zip を取ってきます。展開したのち、configure スクリプトを実行しましょう。環境変数 CFLAGS や LDFLAGS を設定する必要があるかもしれません。また、注意点として、C:\MinGW\msys\1.0 を /usr にマウントしており、/usr/local 以下にインストールする場合は、

```
   ./configure --prefix=/MinGW/msys/1.0/local
```

のようにする必要があります。0.9.2 では、libtexpdf のソースに以下の修正を加える必要があります。

```
   --- libtexpdf.h.orig    2015-06-05 01:13:10 +0900
   +++ libtexpdf.h 2015-06-05 01:13:23 +0900
   @@ -100,10 +100,5 @@
    #include "type1.h"
    #include "type1c.h"
    #include "unicode.h"
   -#ifdef __MINGW32__
   -#define off_t off64_t
   -#define ftello ftello64
   -#define fseeko fseeko64
   -#endif
```

```
    #endif
   --- mfileio.h.orig      2015-06-05 01:15:49 +0900
   +++ mfileio.h   2015-06-05 01:13:38 +0900
   @@ -52,6 +52,11 @@
```

```
    extern long file_size (FILE *file);
```

```
   +#ifdef __MINGW32__
   +#define off_t off64_t
   +#define ftello ftello64
   +#define fseeko fseeko64
   +#endif
    #define xseek_absolute(file, pos, name) fseeko (file, (off_t)(pos), SEEK_SET)
    #define xseek_relative(file, pos, name) fseeko (file, (off_t)(pos), SEEK_CUR)
    #define xseek_end(file, name) fseeko (file, (off_t)0, SEEK_END)
```

後は、

```
   make && make install
```

です。

#### SILE の実行 {#pfce2046}

とりあえず、配布物の examples 以下にあるファイルを処理してみましょう。

```
   sile examples/simple.sil
```

のようにすると、examples/simple.pdf ができます。

使い方については [docmentation/sile.pdf](http://github.com/simoncozens/sile/tree/master/documentation) （[日本語訳](http://github.com/shirat74/SILE-doc_ja)）を参照してください。

### [Vivliostyle プロジェクト](http://vivliostyle.co.jp/project/) {#v10e66b1}

HTML+CSSベースの組版システムです。電子出版の時代にマッチする新しい組版システムを、Webブラウザ技術をベースに作ることを目指しています。

現在（2015年6月3日）、入手可能なのはアルファ版のみです。

- [Vivliostyle.js](http://vivliostyle.github.io/vivliostyle.js/)
- [Vivliostyle Chrome 拡張](https://chrome.google.com/webstore/detail/vivliostyle/ffeiildjegeigkbobbakjjmfeacadbne)

### [Weasy Print](http://weasyprint.org/) {#s618647b}

WeasyPrint は HTML+CSS から PDF や PNG を出力するレンダリング・エンジンです。その目的は出版向けのWeb標準技術をサポートすることにあります。Python などによる実装で、BSDライセンスで提供されています。Pango によるレイアウト（と[Pyphen](http://pyphen.org/)モジュールによるハイフネーション）と Cairo を用いた出力です。

Pango の高水準 API と Cairo を用いることによる制約はあるかと思われます。Pango のレイアウト機能は GUI におけるテキスト表示などには良いですが、比較的長い文章の組版に適しているわけではありません。また、Cairo の PDF 出力も、ハイパーリンクやしおりなどの機能はなく、WeasyPrint はポストプロセスとしてこれらを生成された PDF に付加しています。

Python 3.x/Windows で WeasyPrint 0.23 を動かすには

```
   lib/site-packages/weasyprint/urls.py
```

の 85-86 行目の

```
   if isinstance(path, unicode):
       path = path.encode(FILESYSTEM_ENCODING)
```

をコメントアウトする必要があるようです。

日本語の利用に関しては、表示等はできますが、禁則処理ができていなかったり、CSS で和文フォントをきちんと指定しないと中国語フォントが選択されてしまったりと、色々と難しいところがあります。

### その他 {#u1d7757c}

TeX のアルゴリズムの実装

- [TEX LINE BREAKING ALGORITHM IN JAVASCRIPT](http://www.bramstein.com/projects/typeset/)
- [Crawdad](https://github.com/madriska/crawdad): Knuth-Plass linebreaking for Ruby
- [Text::KnuthPlass](http://search.cpan.org/~simon/Text-KnuthPlass-1.02/lib/Text/KnuthPlass.pm) - Breaks paragraphs into lines using the TeX algorithm (Perl による実装)

などがあります。
