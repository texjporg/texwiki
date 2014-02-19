---
title: "Make"
url: "/Make/"
date: 2006-09-10T21:17:39Z
pukiwiki: "Make"
---

# Make

## Make {#b0e9d8ed}

ここでは、Make を LaTeX と組み合わせて使う方法を説明します。

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Make とは何か？ {#g7efa508}

Make は、定型的なファイル変換作業を自動化するツールです。<br>
LaTeX では Make を使うことで、texソースファイルからPDFやdviファイルを生成する作業を自動化できます。<br>

Make はUNIX 用のユーティリティツールとして古い歴史を持ち、さまざまな実装があります。<br>
その中で現在多く用いられているのは、[GNU Make](http://www.gnu.org/software/make/) です。<br>
使い方や設定ファイル（Makefile）の文法は、基本的な部分は統一されているものの、実装ごとの拡張機能もあります。<br>
特にGNU Makeは多くの拡張機能を持っています。<br>

なお、一般に Make は C言語などのプログラムをコンパイルするときに多く用いられます。<br>
Make について調べるとこうしたプログラムのコンパイルを前提とした情報が出てくることが多いので、注意してください。<br>

## Make のインストール {#c29bc068}

### OS X {#g1b3ea4a}

Xcode のコマンドラインツールをインストールしてください（[http://qiita.com/ksato9700/items/8a14189934c9360a668c](http://qiita.com/ksato9700/items/8a14189934c9360a668c) 参照）。<br>
GNU Make がインストールされます。

### Linux {#q3c99e20}

多くの場合、初期状態で GNU Make がインストールされています。

### FreeBSDなど {#w18263e3}

初期設定では、BSD Make がインストールされています。<br>
下記の Makefile などが思うように動作しない場合は、GNU Makeのインストールなども検討してください。<br>
なお、GNU Makeが「make」ではなく「gmake」コマンドとしてインストールされている場合もあります。<br>

### Windows {#a0e09c4e}

Windows 用 の GNU Make のインストールをしてください。<br>
[MinGW](/MinGW/) や [Cygwin](/Cygwin/) などをインストールすれば GNU Make もインストールされます。<br>

なお、Windows用のMakeにはGNU Makeのほか、マイクロソフト社のnmakeなどがあります。nmakeは、Visual Studioに付属します。

## Makeの使い方 {#q2810aac}

### Makefile の作成と Make の実行 {#b022f4c0}

Makeを実行してTeXソースファイルからPDFや.dviなどのドキュメントファイルを生成する手順は、次のとおりです。

1. texソースファイルと同じディレクトリーに「Makefile」という名前の設定ファイルを作成する
1. texソースファイルと同じディレクトリーで、make コマンドを実行する

#### Makefile の作成 {#j674e7ce}

Makefile は、Make 設定ファイルの文法に従って記述します。<br>
基本的な文法は次のとおりです。<br>

```
ターゲット: 必須項目
<タブ>コマンド
```

ターゲットは、生成されるファイルの名前です。<br>
1つの Makefile で複数のターゲットを指定することもできます。<br>
その場合、make コマンド実行時に「make ターゲット」とすることで生成するファイルを設定できます。<br>
ターゲットを指定せずに make コマンドを実行すると、Makefile で最初に指定されたターゲットが生成されます。<br>
また通常は、ターゲットのファイルがすでに存在して更新日時がすべての必須項目ファイルの更新日時よりも新しい場合、ターゲットファイルの更新は不要と判断され、コマンドは実行されません。<br>

必須項目は、ターゲット生成のために必要なファイルです。<br>
1つのターゲットに対して複数の必須項目を指定できます。<br>
必須項目のファイルが別の部分でターゲットとして指定されている場合、まずはそのファイルが生成されます。<br>

コマンドは、必須項目からターゲットを生成するためのコマンドです。なおコマンドの前に付ける&lt;タブ>は、スペースに変えると正常に動作しません。<br>

#### 基本的な Makefile {#xfdbcbf5}

例として、『LaTeX2e 美文書作成入門 改訂第6版』P.31 の test.tex ファイルの \documentclass{jsarticle} を \documentclass\[uplatex\]{jsarticle} に変更したものが ~/latex ディレクトリーに作成してある状態から PDF を生成することを考えます。<br>
まずはテキストエディタなどを使い、test.tex と同じディレクトリーに Makefile を次の内容で作成します。<br>

```
test.pdf: test.dvi
	dvipdfmx $<

test.dvi: test.tex
	uplatex -interaction=batchmode $<
```

コマンド中の「$&lt;」は必須項目を表し、この場合は「test.dvi」と「test.tex」になります。<br>
なお、makeからuplatexコマンドを呼び出しているときにエラーが発生しても途中で止まらないよう、uplatexコマンドにオプション「-interaction=batchmode」を付けています。<br>

#### Make の実行 {#icc67860}

Makefile を保存したあとターミナル上で test.tex のディレクトリーで make コマンドを実行します。Makefile に記述したコマンドが呼び出され、PDFが生成されます。<br>
このあとは、test.tex が更新されたり生成された test.pdf が削除されたりしなければ、再度make コマンドを実行しても、Makefile に記述したコマンドは呼び出されません。<br>
OS XやLinux上でのコマンド実行例を以下に示します（$ は、プロンプト文字）。

```
$ cd ~/latex/
$ ls
Makefile  test.tex
$ make
uplatex  -interaction=batchmode test.tex
This is e-upTeX, Version 3.14159265-p3.4-u1.11-130605-2.6 (utf8.uptex) (TeX Live 2014/dev)
 restricted \write18 enabled.
entering extended mode
dvipdfmx test.dvi
test.dvi -> test.pdf
[1]
25751 bytes written
$ ls
Makefile  test.aux  test.dvi  test.log	test.pdf  test.tex
$ make
make: `test.pdf' is up to date.
$ 
```

#### より実用的な Makefile {#rc4136ab}

より実用的な Makefile として、次の内容が考えられます。<br>

```
TARGET := test.pdf

.PHONY: all clean distclean

all: $(TARGET)

clean:
	$(RM) *.aux *.log *.dvi

distclean: clean
	$(RM) $(TARGET)

%.pdf: %.dvi
	dvipdfmx $<

%.dvi: %.tex
	uplatex -interaction=batchmode $<
```

「%.dvi: %.tex」のように記述されている行はパターンルールといい、拡張子を元に動作ルールを決めます。
「%.dvi: %.tex」は任意の.texファイルから.dviファイル、「%.pdf: %.dvi」は任意の.dviファイルから.pdfファイルを作成するルールを定めています。

この Makefile では次の機能を実現しています。

- texソースファイルの名前が「test.tex」以外の場合でも、Makefile 1行目の「test.pdf」を変更するだけで対応できる
- make clean を実行すると、PDF生成時に一緒に生成された.aux、.log、.dvi ファイルが削除される
- make distclean を実行すると、.aux、.log、.dvi ファイルに加えて PDF が削除される

LaTeX実行時に多数生成される中間ファイルを削除するとき、手動で行うと誤って必要なファイルを削除してしまうなどのトラブルが起こる可能性があります。make clean や make distclean を設定して用いれば、こうしたトラブルを減らすことができます。

ただし、この Makefile では次のような場合に正常に動作しない可能性があります。

- 相互参照や目次などを生成する場合
- 画像を参照していたり、tex ソースを複数のファイルに分けていたりする場合
- 索引や文献リストを生成する場合

### 相互参照や目次などが含まれる場合 {#xdd98ce4}

ドキュメントに次のものが含まれる場合、上記の Makefile ではいずれの場合でも正常にPDFを生成できません。これらを正常に生成するには、複数回LaTeXを実行する必要があるからです。

- 相互参照（数式や図・表・脚注の番号参照など）
- 目次
- 図リスト
- 表リスト

一般に、LaTeX を実行する回数を多くすれば正常にPDFを作成できない問題が発生する可能性は小さくなる反面、実行には時間がかかるというトレードオフの関係があります。

#### LaTeX を無条件に複数回実行 {#ae41f9a4}

正常にPDFを作成できない問題の単純な解決方法は、無条件に複数回 LaTeXを実行することです。次の Makefile では変数 CNT で設定された回数（初期状態では2回）、無条件に LaTeX が実行されます。

```
TARGET := test.pdf

CNT := 2

.PHONY: all clean distclean

all: $(TARGET)

clean:
	$(RM) *.aux *.log *.dvi

distclean: clean
	$(RM) $(TARGET)

%.pdf: %.dvi
	dvipdfmx $<

%.dvi: %.tex
	for i in `seq 1 $(CNT)`; do uplatex -interaction=batchmode $<; done
```

Makeの実行方法は、基本的なMakefileの場合と同じです。作成されたPDFファイルで、特に相互参照や目次などの問題がないか確認してください。

この方法でも、LaTeX 実行の回数がまだ足りず、引き続きPDFが正常に作成できない場合もあります。そのときは、変数 CNT の数を増やします。
また、逆に LaTeX 実行の回数が多すぎるため、余計に時間がかかることも考えられます。

#### ログファイルに警告のある場合の実行 {#z88e6381}

LaTeX を無条件で実行してから、ログファイルに警告がある場合にだけさらに LaTeX を実行することもできます。
次のMakefileでは、CNT 変数で指定された回数分LaTeX を実行してから、ログに相互参照未定義の警告がある場合だけLaTeXを実行するようにしています。
ログに相互参照未定義の警告があるかどうかは、shシェルのif文と grep（fgrep） を組み合わせて判定しています。
また、相互参照に誤りがある場合はLaTeXを何回実行してもログに相互参照未定義の警告が出るので、相互参照未定義の警告がある場合のLaTeX実行は最大3回としています。

```
TARGET := test.pdf

CNT := 2

.PHONY: all clean distclean

all: $(TARGET)

clean:
	$(RM) *.aux *.log *.dvi

distclean: clean
	$(RM) $(TARGET)

%.pdf: %.dvi
	dvipdfmx $<

%.dvi: %.tex
	for i in `seq 1 $(CNT)`; do uplatex -interaction=batchmode $<; done
	for i in `seq 1 3`; do if grep -F 'Rerun to get cross-references right.' `basename $< .tex`.log; then uplatex -interaction=batchmode $<; else exit 0; fi; done
```

なお、LaTeXを複数回実行する方法の詳細については、『LaTeX2e美文書作成入門』P.161の「（p）LaTeXを適切な回数繰り返し実行する方法 」を参照してください。

### 画像やLaTeXファイルが挿入されている場合 {#mf500793}

Makeは基本的に、必須項目として指定されているファイルが更新された場合に実行されます。
LaTeXソースファイルで \includegraphics 命令によって挿入された画像や、\include や \input 命令で挿入された LaTeX ファイルが更新されていても、上記の Makefile では Make が実行されず反映されないことがあります。

さらに、EPS以外の形式の画像ファイルを挿入しているときは、.xbb（バウンディング情報ファイル）が必要です（LaTeXの設定により、.xbbファイル作成を明示しなくても、エラーにならない場合もあります）。

そのため、画像および.xbbファイルやLaTeXファイルの依存関係は、Makefileに反映する必要があります。たとえば、画像 tiger.pdf を挿入している場合は、次のようにMakefileを記述します。「test.dvi: tiger.pdf tiger.xbb」が、画像および.xbbファイルの依存関係を表します。また、パターンルールで.xbbファイルの作成方法を設定しています。

```
TARGET := test.pdf

CNT := 1

.PHONY: all clean distclean

all: $(TARGET)

test.dvi: tiger.pdf tiger.xbb

clean:
	$(RM) *.aux *.log *.dvi

distclean: clean
	$(RM) $(TARGET)

%.pdf: %.dvi
	dvipdfmx $<

%.dvi: %.tex
	for i in `seq 1 $(CNT)`; do uplatex -interaction=batchmode $<; done
	for i in `seq 1 3`; do if grep -F 'Rerun to get cross-references right.' `basename $< .tex`.log; then uplatex -interaction=batchmode $<; else exit 0; fi; done

%.xbb: %.pdf
	extractbb $<
```

#### 挿入された画像やLaTeXファイルの調査 {#h0229340}

挿入された画像ファイルやLaTeXファイルを調査するためには、LaTeXソースファイルを直接さがす方法と、.flsファイルを使う方法があります。

#### ソースファイルの調査 {#wd3d562f}

挿入された画像ファイルやLaTeXファイルを調査するときは、LaTeXソースファイルを手動（目視）でさがすほかに、sed をつかってリスト出力することもできます。

次の例では、test.texファイルから \includegraphics 命令で指定された画像ファイルのリストを出力します。ただし、コメントやverbatim環境内などに記述された画像ファイルもリストに含まれるため、それらは除外する必要があります。

```
$ sed -e 's/}/}%/g' test.tex | sed -e 'y/}%/}\n/' | sed -n -e 's/.*\\includegraphics\(\[[^]]*\]\)\{0,1\}{\([^}]*\)}$/\2/p'
```

#### .flsファイルの調査 {#u6148f74}

LaTeXに -recorderオプションをつけて実行すると出力される.fls ファイルを元に調査することもできます。次のコマンドで、test.tex ファイルからtest.fls ファイルを生成します。

```
$ uplatex -interaction=nonstopmode -recorder test.tex
```

.flsファイルには、LaTeX処理で入出力されるファイルがリストになっています。入力ファイルと出力ファイルはそれぞれ、INPUTとOUTPUTではじまる行に記録されます。また、TeXのシステムファイルもリストに含まれます。そのため、TeXのシステムファイル以外の入力ファイルを表示するには、
次のようにします。

```
$ grep '^INPUT' test.fls | grep -v `kpsewhich -expand-var '$TEXMFROOT'` | sort | uniq
INPUT test.aux
INPUT test.tex
INPUT tiger.pdf
INPUT tiger.xbb
```

## PDF作成の実例 {#s60e963b}

Make は、コマンド実行時のカレントディレクトリにある Makefile を読み込んで、その記述と引数に応じた処理を行います。以下に、LaTeX 文書の処理に用いた Makefile の実例を示します。

```
FILENAME  = doc001
TEX       = $(FILENAME).tex
IDX       = $(FILENAME).idx
DVI       = $(FILENAME).dvi
PDF       = $(FILENAME).pdf
PDFOUT    = $(FILENAME)_enc.pdf

all:
        make tex
        make tex
        make idx
        make tex
        make dvipdf
        make pw
distclean:
        make clean
        rm $(PDFOUT)
clean:
        rm *.aux *.dvi *.idx *.ilg *.ind *.log *.out *.toc *~ $(PDF)
tex:
        uplatex $(TEX)
idx:
        mendex $(IDX)
dvipdf:
        dvipdfmx $(DVI)
pw:
        pdftk $(PDF) output $(PDFOUT) owner_pw foobar
```

この場合、用意した LaTeX 文書ファイルは doc001.tex という名前です。mendex コマンドで索引を生成するのと、[pdftk](http://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/) でコピー・ペースト・印刷の禁止、パスワードの付与を行うために、 

- LaTeX での処理を2回
- mendex
- LaTeX で最終処理
- dvipdfmx で PDF ファイル生成
- 生成した PDF ファイルを基に、pdftk でパスワード付与した PDF を生成

という順番での処理を行う必要があります。<br>
また、処理終了後、あるいは処理を中断するときには、中間生成ファイルや PDF 等を必要に応じて削除する必要があります。<br>

このようなときに、上のような Makefile を作成しておくと、

```
$ make
```

（厳密には make all ですが、make は引数なしで実行されたときの default として、Makefile に最初に記述のある "all" を引数にとったときと同じ処理をします）と入力するだけで、上述の一連の処理が全て行われます。<br>
また、

```
$ make clean
```

と入力すると、文書ファイルと最終生成物である PDF ファイル以外の全てのファイルが削除され、

```
$ make distclean
```

で、文書ファイル以外の全てのファイル（最終生成物の PDF ファイルを含めて）が削除されます。

## リンク {#i5861f79}

Makefile の書き方は簡単な条件分岐なので、ご覧になるだけでも何となくお分かりになると思います。<br>
ネット上では、"Makefile 書き方" で検索していただければ数多くの解説を参照することができると思います。<br>
ここでは参考に以下ひとつだけ挙げておきます（append 歓迎）。<br>

- [TeX文章をmakeで管理](http://folioscope.hatenablog.jp/entry/2013/07/29/000009)
- [Makefileの解説](http://www.am.sanken.osaka-u.ac.jp/~mukaigaw/misc/Makefile.html)
- [GNU Makeで楽々コンパイル(Latexも楽々)](http://note.chiebukuro.yahoo.co.jp/detail/n36864)
- [自分用latex Makefile](https://gist.github.com/1095020)
- [thesis-template](https://github.com/ymrl/thesis-template)
    - [修士論文用のテンプレートを作った](http://mkdir.g.hatena.ne.jp/ymrl/20121112/1352743084)
- [texマン](http://utata.hatenadiary.jp/entry/2012/11/03/215140)
- [なんかpdf作るために使ったり](https://gist.github.com/programmerMOT/4994126)
- \[[TeX\]Makefileの活用\[Make\]](http://kevlar.blog137.fc2.com/blog-entry-3.html)

## 関連項目 {#db55a14a}

Make と LaTeX の組み合わせとして次のようなものもあります。

- Latexmk
- OMake
- arara
- Lua スクリプト
- Ruby スクリプト
- Perl スクリプト
- バッチファイル

### Latexmk {#ae6ae029}

[Latexmk - TeX Wiki](/Latexmk/) を参照．<br>

### OMake (非推奨) → [Latexmk](/Latexmk/) を使用する {#df86b9ce}

[http://omake.metaprl.org/](http://omake.metaprl.org/)

- [OMakeマニュアル 日本語訳](http://omake-japanese.sourceforge.jp/)
- [ファイルを分割していると OMake + BibTeX がうまくいかない](http://qiita.com/t_uda/items/c89f300868e6a3707f6c)
- [LaTeXのソースを毎回makeしてる情弱は俺まででいい #OMake](http://st63jun.hatenablog.jp/entry/2013/01/30/002642)
- [OmakeによるLatexファイルの継続ビルド。べんり。](https://gist.github.com/4602243)
- [ぼくのかんがえたさいきょうの小説執筆環境](https://github.com/yoshimuraYuu/myBlog/blob/master/articles/novel.md)
- [latex-template](https://github.com/nojima/latex-template)
- \[[OMake\]\[tex\] 複数ファイル](http://ameblo.jp/kaerunyaru/entry-11283143868.html)
- [Windowsで快適なLaTeX環境を構築する](http://nojima.hatenablog.com/entry/2012/01/12/205857)
- [TeXファイルの変更を監視して自動コンパイル](http://d.hatena.ne.jp/kaishin0527/20110915/1316159313)
- [OMakeで快適に論文執筆：TeX編](http://leoclock.blogspot.jp/2009/09/omaketex.html)
- [WindowsでOMakeを使って継続ビルド](http://blog.s21g.com/articles/1219)
- [OMake つかって LaTeX コンパイルしたら簡単すぎて身長が5cm伸びた](http://d.hatena.ne.jp/hayamiz/20081208/1228727272)

### arara {#vc2756b0}

- [http://cereda.github.io/arara/](http://cereda.github.io/arara/)
- [https://github.com/cereda/arara](https://github.com/cereda/arara)

### Lua スクリプト {#v301e7db}

- [ptex2pdf](/ptex2pdf/)

### Ruby スクリプト {#b8eace76}

- [部門/TeX/ソースファイルが更新されたら自動的にコンパイルするスクリプト](http://www47.atwiki.jp/cscd/m/pages/219.html)

### Perl スクリプト {#kb29316f}

- [ファイルが更新されたら自動で platex して dvipdfmx する](http://fjyuu.info/watch-platexpdf/)
    - [platexpdf – github](https://github.com/fjyuu/platexpdf)

### バッチファイル {#n34560fd}

- [2011.12.14 - Maidsphere // メイドスフィア](http://www.maidsphere.jp/archive/20111214/), [2011.3.8 - Maidsphere // メイドスフィア](http://www.maidsphere.jp/archive/20110308)
