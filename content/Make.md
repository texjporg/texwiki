---
title: "Make"
url: "/Make/"
date: 2006-09-10T21:17:39Z
pukiwiki: "Make"
---

# Make

## Make {#b0e9d8ed}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## LaTeX ドキュメントを Make で取り扱う {#f5f8b4b0}

ここでは、Make を使って LaTeX ドキュメントを取り扱う方法を説明します。

### Make とは何か？ {#g7efa508}

Make は、定型的なファイル変換作業を自動化するツールです。LaTeX では Make を使うことで、texソースファイルからPDFやdviファイルを生成する作業を自動化できます。

なお、一般に Make は C言語などのプログラムをコンパイルするときに多く用いられます。Make について調べるとこうしたプログラムのコンパイルを前提とした情報が出てくることが多いので、注意してください。

### Make のインストール {#c29bc068}

Make はUNIX 用のユーティリティツールとして古い歴史を持ち、さまざまな実装があります。その中で現在多く用いられているのは、[GNU Make](http://www.gnu.org/software/make/) です。使い方や設定ファイル（Makefile）の文法は、基本的な部分は統一されているものの、実装ごとの拡張機能もあります。特にGNU Makeは多くの拡張機能を持っています。

#### Mac OS X {#g1b3ea4a}

Xcodeのコマンドラインツールをインストールしてください（[http://qiita.com/xtetsuji/items/f738bdddd3ab8f7d7329](http://qiita.com/xtetsuji/items/f738bdddd3ab8f7d7329) 参照）。GNU Makeがインストールされます。

#### Linux {#q3c99e20}

多くの場合、初期状態で GNU Make がインストールされています。

#### FreeBSDなど {#w18263e3}

初期設定では、BSD Make がインストールされています。思うように動作しない場合は、GNU Makeのインストールなどを検討してください。なお、GNU Makeが「make」ではなく「gmake」コマンドとしてインストールされている場合もあります。

#### Windows {#a0e09c4e}

Windows用のGNU Makeのインストールなどを検討してください（要調査？）。Cygwinなどをインストールしたほうがよいかもしれません。

### 基本的な使い方 {#r0cf25ac}

#### 手順 {#fc23c5da}

Makeを使う手順は、次のとおりです。

1. texソースファイルと同じディレクトリーに「Makefile」という名前の設定ファイルを作成する
1. texソースファイルと同じディレクトリーで、make コマンドを実行する

#### Makefile の基本的な文法 {#k8b654fd}

Makefile は、Make 設定ファイルの文法に従って記述します。基本的な文法は次のとおりです。

```
ターゲット: 必須項目
<タブ>コマンド
```

ターゲットは、生成されるファイルの名前です。1つの Makefile で複数のターゲットを指定することもできます。その場合、make コマンド実行時に「make ターゲット」とすることで生成するファイルを設定できます。ターゲットを指定せずに make コマンドを実行すると、Makefile で最初に指定されたターゲットが生成されます。また通常は、ターゲットのファイルがすでに存在して更新日時がすべての必須項目ファイルの更新日時よりも新しい場合、ターゲットファイルの更新は不要と判断され、コマンドは実行されません。

必須項目は、ターゲット生成のために必要なファイルです。1つのターゲットに対して複数の必須項目を指定できます。必須項目のファイルが別の部分でターゲットとして指定されている場合、まずはそのファイルが生成されます。

コマンドは、必須項目からターゲットを生成するためのコマンドです。

#### 例: test.tex から PDFを生成する {#kfde0605}

例として、『LaTeX2e 美文書作成入門 改訂第6版』P.31 の test.tex ファイルが作成してある状態からPDFを生成することを考えます。
まずはテキストエディタなどを使い、test.tex と同じディレクトリーに Makefile を次の内容で作成します。

```
test.pdf: test.dvi
	dvipdfmx $<

test.dvi: test.tex
	platex  -interaction=nonstopmode $<
```

コマンドの前にある空白は、スペースではなくタブです。タブをスペースに変えると正常に動作しません。
コマンド中の「$&lt;」は必須項目を表し、この場合は「test.dvi」と「test.tex」になります。
なお、makeからplatexコマンドを呼び出しているときにエラーが発生しても途中で止まらないよう、platexコマンドにオプション「-interaction=nonstopmode」を付けています。

Makefile を保存したあとターミナル上で test.tex のディレクトリーで make コマンドを実行すると、Makefile に記述したコマンドが呼び出され、PDFが生成されます。このあとは、test.tex が更新されたり生成された test.pdf が削除されたりしなければ、再度make コマンドを実行しても、Makefile に記述したコマンドは呼び出されません。

より実用的な Makefile として、次の内容が考えられます。

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
	platex -interaction=nonstopmode $<
```

この Makefile では次の機能を実現しています。

- texソースファイルの名前が「test.tex」以外の場合でも、Makefile 1行目の「test.pdf」を変更するだけで対応できる
- make clean を実行すると、PDF生成時に一緒に生成された.aux、.log、.dvi ファイルが削除される
- make distclean を実行すると、.aux、.log、.dvi ファイルに加えて PDF が削除される

ただし、この Makefile では次のような場合に正常に動作しない可能性があります。

- 相互参照を含む場合
- 目次を生成する場合
- 索引を生成する場合
- BiBTeX を使って文献一覧を生成する場合
- tex ソースを複数のファイルに分けている場合
- 参照している画像などのファイルを別途生成または変換する必要がある場合

### LaTeX 文書の処理における複数ファイルの管理 {#r1a92c3a}

LaTeX 文書の処理時、たとえば索引を作成するときなど、作成に関わる中間生成ファイルが多数生成されますが、これらを必要に応じて削除したりするのは、手動で行うと、誤って必要なファイルを削除してしまう、等のトラブルの原因になります。このようなときには、Make を使うことで効果的なファイル操作が可能です。

### 実例 {#wff9a2e3}

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
        platex $(TEX)
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

という順番での処理を行う必要があります。また、処理終了後、あるいは処理を中断するときには、中間生成ファイルや PDF 等を必要に応じて削除する必要があります。

このようなときに、上のような Makefile を作成しておくと、

```
$ make
```

（厳密には make all ですが、make は引数なしで実行されたときの default として、Makefile に最初に記述のある "all" を引数にとったときと同じ処理をします）と入力するだけで、上述の一連の処理が全て行われます。また、

```
$ make clean
```

と入力すると、文書ファイルと最終生成物である PDF ファイル以外の全てのファイルが削除され、

```
$ make distclean
```

で、文書ファイル以外の全てのファイル（最終生成物の PDF ファイルを含めて）が削除されます。

Makefile の書き方は簡単な条件分岐なので、ご覧になるだけでも何となくお分かりになると思います。ネット上では、"Makefile 書き方" で検索していただければ数多くの解説を参照することができると思います。ここでは参考に以下ひとつだけ挙げておきます（append 歓迎）。

- [TeX文章をmakeで管理](http://folioscope.hatenablog.jp/entry/2013/07/29/000009)
- [Makefileの解説](http://www.am.sanken.osaka-u.ac.jp/~mukaigaw/misc/Makefile.html)
- [GNU Makeで楽々コンパイル(Latexも楽々)](http://note.chiebukuro.yahoo.co.jp/detail/n36864)
- [自分用latex Makefile](https://gist.github.com/1095020)
- [thesis-template](https://github.com/ymrl/thesis-template)
    - [修士論文用のテンプレートを作った](http://mkdir.g.hatena.ne.jp/ymrl/20121112/1352743084)
- [texマン](http://utata.hatenadiary.jp/entry/2012/11/03/215140)
- [なんかpdf作るために使ったり](https://gist.github.com/programmerMOT/4994126)
- \[[TeX\]Makefileの活用\[Make\]](http://kevlar.blog137.fc2.com/blog-entry-3.html)

## [Latexmk](http://www.phys.psu.edu/~collins/software/latexmk-jcc/) {#xe923cf8}

- platex を使用する場合 (TeXworks, YaTeX, AUCTeX (TeX-interactive-mode が ON の場合) などの場合)

***

&#x7e;/.latexmkrc

***

```
#!/usr/bin/env perl
if ($^O eq 'MSWin32') {
  $latex = 'platex %O -kanji=utf8 -guess-input-enc -synctex=1 %S';
  $bibtex = 'pbibtex %O -kanji=utf8 %B';
  $makeindex = 'mendex %O -U -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -g > %D';
  $ps2pdf = 'ps2pdf.bat %O %S %D';
  $pdf_mode = 3;
  if (-f 'C:/Program Files/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } elsif (-f 'C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } else {
    $pdf_previewer = 'texworks';
  }
} else {
  $latex = 'platex %O -synctex=1 %S';
  $bibtex = 'pbibtex %O %B';
  $makeindex = 'mendex %O -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -g > %D';
  $ps2pdf = 'ps2pdf %O %S %D';
  $pdf_mode = 3;
}
```

***

```
latexmk -gg -pdfdvi hoge.tex
latexmk -gg -pdfps hoge.tex
```

- platex を使用する場合 (TeXstudio, Texmaker, Emacs の TeX mode, AUCTeX (TeX-interactive-mode が OFF の場合) などの場合)

***

&#x7e;/.latexmkrc

***

```
#!/usr/bin/env perl
if ($^O eq 'MSWin32') {
  $latex = 'platex %O -kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode %S';
  $bibtex = 'pbibtex %O -kanji=utf8 %B';
  $makeindex = 'mendex %O -U -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -g > %D';
  $ps2pdf = 'ps2pdf.bat %O %S %D';
  $pdf_mode = 3;
  if (-f 'C:/Program Files/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } elsif (-f 'C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } else {
    $pdf_previewer = 'texworks';
  }
} else {
  $latex = 'platex %O -synctex=1 -interaction=nonstopmode %S';
  $bibtex = 'pbibtex %O %B';
  $makeindex = 'mendex %O -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -g > %D';
  $ps2pdf = 'ps2pdf %O %S %D';
  $pdf_mode = 3;
}
```

***

```
latexmk -gg -pdfdvi hoge.tex
latexmk -gg -pdfps hoge.tex
```

- uplatex を使用する場合 (TeXworks, YaTeX, AUCTeX (TeX-interactive-mode が ON の場合) などの場合)

***

&#x7e;/.latexmkrc

***

```
#!/usr/bin/env perl
if ($^O eq 'MSWin32') {
  $latex = 'uplatex %O -kanji=utf8 -no-guess-input-enc -synctex=1 %S';
  $bibtex = 'upbibtex %O %B';
  $makeindex = 'mendex %O -U -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
  $ps2pdf = 'ps2pdf.bat %O %S %D';
  $pdf_mode = 3;
  if (-f 'C:/Program Files/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } elsif (-f 'C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } else {
    $pdf_previewer = 'texworks';
  }
} else {
  $latex = 'uplatex %O -synctex=1 %S';
  $bibtex = 'upbibtex %O %B';
  $makeindex = 'mendex %O -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
  $ps2pdf = 'ps2pdf %O %S %D';
  $pdf_mode = 3;
}
```

***

```
latexmk -gg -pdfdvi hoge.tex
latexmk -gg -pdfps hoge.tex
```

- uplatex を使用する場合 (TeXstudio, Texmaker, Emacs の TeX mode, AUCTeX (TeX-interactive-mode が OFF の場合) などの場合)

***

&#x7e;/.latexmkrc

***

```
#!/usr/bin/env perl
if ($^O eq 'MSWin32') {
  $latex = 'uplatex %O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %S';
  $bibtex = 'upbibtex %O %B';
  $makeindex = 'mendex %O -U -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
  $ps2pdf = 'ps2pdf.bat %O %S %D';
  $pdf_mode = 3;
  if (-f 'C:/Program Files/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } elsif (-f 'C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } else {
    $pdf_previewer = 'texworks';
  }
} else {
  $latex = 'uplatex %O -synctex=1 -interaction=nonstopmode %S';
  $bibtex = 'upbibtex %O %B';
  $makeindex = 'mendex %O -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
  $ps2pdf = 'ps2pdf %O %S %D';
  $pdf_mode = 3;
}
```

***

```
latexmk -gg -pdfdvi hoge.tex
latexmk -gg -pdfps hoge.tex
```

- 中間ファイルの削除

```
latexmk -c
```

- 中間ファイルと .dvi, .ps, .pdf の削除

```
latexmk -C
```

- [latexmk](http://kamae-norihiro.blogspot.jp/2013/06/latexmk.html)
- [LaTeX on SublimeText 2](http://izumin.hateblo.jp/entry/2013/05/09/230731)
- [Latexmkのススメ](http://xaro.hatenablog.jp/entry/2013/01/06/125723)
- [latexmk と ptex2pdf](http://konoyonohana.blog.fc2.com/blog-entry-25.html)
- [YaTeX#Latexmkを使う場合](/YaTeX/#naf0d69e)
- [latexmk を LaTeX コンパイルに使ってみた](http://unvalance.g.hatena.ne.jp/KainokiKaede/20111124/1322117707)
- [latexmk つかって LaTeX コンパイルしたら簡単すぎて身長が10cm伸びた](http://d.hatena.ne.jp/yambi/20091117/1258452926)

## [OMake](http://omake.metaprl.org/) {#yf7ac218}

- [OMakeマニュアル 日本語訳](http://omake-japanese.sourceforge.jp/)
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

## arara {#d21204f6}

- [http://cereda.github.io/arara/](http://cereda.github.io/arara/)
- [https://github.com/cereda/arara](https://github.com/cereda/arara)

## Lua スクリプト {#uddc392d}

- [ptex2pdf](/ptex2pdf/)

## Ruby スクリプト {#h23942de}

- [部門/TeX/ソースファイルが更新されたら自動的にコンパイルするスクリプト](http://www47.atwiki.jp/cscd/m/pages/219.html)

## Perl スクリプト {#ce040874}

- [ファイルが更新されたら自動で platex して dvipdfmx する](http://fjyuu.info/watch-platexpdf/)
    - [platexpdf – github](https://github.com/fjyuu/platexpdf)

## バッチファイル {#n34560fd}

- [2011.12.14 - Maidsphere // メイドスフィア](http://www.maidsphere.jp/archive/20111214/), [2011.3.8 - Maidsphere // メイドスフィア](http://www.maidsphere.jp/archive/20110308)
