---
title: "Make"
url: "/Make/"
date: 2006-09-10T21:17:39Z
pukiwiki: "Make"
---

# Make

## Make {#b0e9d8ed}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## LaTeX ドキュメントを make で取り扱う {#f5f8b4b0}

ここでは、make を使って LaTeX ドキュメントを処理する方法について簡単に記します。

### Make とは何か？ {#g7efa508}

Make は、複数のファイルで構成されるソースを確実にコンパイル・インストールしたり、コンパイルで生成されたファイル等を削除してコンパイル前の状態に戻したりすることができるツールです。ほとんどの UNIX 系のシステム（OS X を含む）には [GNU Make](http://www.gnu.org/software/make/) がインストールされていると思いますので、以下、GNU Make の使用を前提に書きます。

### LaTeX 文書の処理における複数ファイルの管理 {#r1a92c3a}

LaTeX 文書の処理時、たとえば索引を作成するときなど、作成に関わる中間生成ファイルが多数生成されますが、これらを必要に応じて削除したりするのは、手動で行うと、誤って必要なファイルを削除してしまう、等のトラブルの原因になります。このようなときには、make を使うことで効果的なファイル操作が可能です。

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

- [Makefileの解説](http://www.am.sanken.osaka-u.ac.jp/~mukaigaw/misc/Makefile.html)
- [自分用latex Makefile](https://gist.github.com/1095020)

### [Latexmk](http://www.phys.psu.edu/~collins/software/latexmk-jcc/) {#xe923cf8}

- platex を使用する場合

***

&#x7e;/.latexmkrc

***

```
$latex = 'platex -kanji=utf8 -guess-input-enc -synctex=1';
$bibtex = 'pbibtex -kanji=utf8';
$makeindex = 'mendex -U';
$dvipdf = 'dvipdfmx %O -o %D %S';
$dvips = 'dvips %O -z -f %S | convbkmk -g > %D';
$ps2pdf = 'ps2pdf.bat %O %S %D';
```

***

```
latexmk -gg -pdfdvi hoge.tex
latexmk -gg -pdfps hoge.tex
```

- uplatex を使用する場合

***

&#x7e;/.latexmkrc

***

```
$latex = 'uplatex -kanji=utf8 -no-guess-input-enc -synctex=1';
$bibtex = 'upbibtex';
$makeindex = 'mendex -U';
$dvipdf = 'dvipdfmx %O -o %D %S';
$dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
$ps2pdf = 'ps2pdf.bat %O %S %D';
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

- [YaTeX#Latexmkを使う場合](/YaTeX/#naf0d69e)
- [latexmk を LaTeX コンパイルに使ってみた](http://unvalance.g.hatena.ne.jp/KainokiKaede/20111124/1322117707)
- [latexmk つかって LaTeX コンパイルしたら簡単すぎて身長が10cm伸びた](http://d.hatena.ne.jp/yambi/20091117/1258452926)

### [OMake](http://omake.metaprl.org/) {#yf7ac218}

- [OMakeマニュアル 日本語訳](http://omake-japanese.sourceforge.jp/)
- [latex-template](https://github.com/nojima/latex-template)
- \[[OMake\]\[tex\] 複数ファイル](http://ameblo.jp/kaerunyaru/entry-11283143868.html)
- [Windowsで快適なLaTeX環境を構築する](http://nojima.hatenablog.com/entry/2012/01/12/205857)
- [TeXファイルの変更を監視して自動コンパイル](http://d.hatena.ne.jp/kaishin0527/20110915/1316159313)
- [OMakeで快適に論文執筆：TeX編](http://leoclock.blogspot.jp/2009/09/omaketex.html)
- [WindowsでOMakeを使って継続ビルド](http://blog.s21g.com/articles/1219)
- [OMake つかって LaTeX コンパイルしたら簡単すぎて身長が5cm伸びた](http://d.hatena.ne.jp/hayamiz/20081208/1228727272)
