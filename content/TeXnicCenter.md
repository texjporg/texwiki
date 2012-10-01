---
title: "TeXnicCenter"
url: "/TeXnicCenter/"
date: 2011-03-03T03:06:29Z
pukiwiki: "TeXnicCenter"
---

# TeXnicCenter

## [TeXnicCenter](http://www.texniccenter.org/) {#f2674e4f}

<img src="http://texniccenter.sourceforge.net/_static/TeXnicCenter.png" alt="TeXnicCenter" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## TeXnicCenter とは {#rb91ca3f}

TeXnicCenter は Windows 7, Vista, XP で動作する
[LaTeX](https://mirror.ctan.org/help/Catalogue/entries/latex.html)
ドキュメントを作成するための，多機能で使いやすい統合環境です．<br>
TeXnicCenter は，フリーのオープンソースソフトウェアで，GNU GPL ライセンスでリリースされています．<br>

- [TeXnicCenter 公式ページ](http://www.texniccenter.org/)
    - [TeXnicCenter News](http://www.texniccenter.org/news)
- [CTAN:help/Catalogue/entries/texniccenter.html](https://mirror.ctan.org/help/Catalogue/entries/texniccenter.html)

### ChangeLog {#y2c9ad23}

- [SourceForge: texniccenter/texniccenter: Summary](http://texniccenter.hg.sourceforge.net/hgweb/texniccenter/texniccenter/)
    - [コミットログ](http://texniccenter.hg.sourceforge.net/hgweb/texniccenter/texniccenter/shortlog)

### リリース情報 {#da101e5c}

2012-01-31 TeXnicCenter 2.0 Alpha 4<br>

TeXnicCenter 2.0 Alpha 4 で 64-Bit Windows がサポートされました．<br>
TeXnicCenter 2.0 Alpha 3 で Logo Contest で優勝した Lukas Schneider さんのアイコンになりました．<br>
バージョン 1.0 は，日本語表示，日本語入力ともに不可でしたが，バージョン 2.0 から Unicode に対応し，日本語表示，日本語入力が可能になっています．<br>

### スクリーンショット {#defb0bff}

[![TeXnicCenter 2.0 Alpha バージョンの画面](http://latex.quark007.de/wp-content/uploads/2010/02/unbenannt-300x226.png)](http://latex.quark007.de/wp-content/uploads/2010/02/unbenannt.png)

### 特徴 {#c8ac578a}

- TeX のコマンドを色分けできます．
- TeX のコマンドを補完してくれます．(Ctrl + Space)
- 折りたたみが可能です．→ TeXnicCenter Alpha 4 では折りたたみ機能がうまく動作しないようです．
- SumatraPDF を使用すれば，SyncTeX による forward and inverse search も可能です．

### ドキュメント {#s783d445}

- [Welcome to the documentation of TeXnicCenter &mdash; TeXnicCenter v2.0 documentation](http://texniccenter.sourceforge.net/)

## 不具合 {#p40a9a4a}

### TeXnicCenter Alpha 4 で折りたたみ機能がうまく動作しない {#w34c78b7}

TeXnicCenter Alpha 4 では折りたたみ機能がうまく動作しないようです．<br>
TeXnicCenter Alpha 3 では折りたたみ機能が動作していました．<br>

## ダウンロード {#rf294e94}

- [Browse TeXnicCenter Files on SourceForge.net](http://sourceforge.net/projects/texniccenter/files/)
    - [TeXnicCenter 2.0 Alpha 4](http://sourceforge.net/projects/texniccenter/files/TeXnicCenter%20Alpha/2Alpha4/)

## Encoding {#u85685c5}

Encoding は

- ANSI
    - 日本語版 Windows では Shift_JIS として保存されます．
    - TeXnicCenter 2.0 Alpha 3 では Shift_JIS のファイルは ANSI で開かれていて文字が正しく表示されていましたが，TeXnicCenter 2.0 Alpha 4 では Shift_JIS のファイルは，ファイルを開くときに ANSI ではなく UTF-8 で開かれてしまい，文字が正しく表示されない場合があります．日本語を使用する場合は \[File\]-\[Save As...\] の Encoding で UTF-8 を指定して保存することをおすすめします．→ [ASCII documents default to UTF-8 character encoding instead of ANSI](http://texniccenter.hg.sourceforge.net/hgweb/texniccenter/texniccenter/rev/c1f76110a594)
- UTF-8
- UTF-8 with BOM
- UTF-16
- UTF-16 Big Endian
- UTF-32
- UTF-32 Big Endian

に対応しています．

Encoding を指定して保存する場合は \[File\]-\[Save As...\] の Encoding のリストから Encoding を指定して保存してください．

## プロファイルの作成 {#n1a2864d}

初回起動時に Configuration Wizard が表示されます．<br>
初回起動時に設定をキャンセルした場合は，メニューの \[Build\] → \[Define Output Profiles...\] で，プロファイルを作成します．<br>

\[Wizard...\] をクリックします．

***

<span style="color:Black;background-color:#2E3436;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"><ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</ins></span> </span><br>

<span style="color:Black;background-color:#2E3436;"><ins>　<span style="color:White;"><strong>←</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<span style="color:#1144BB;">Welcome to the Configuration Wizard</span><br>

<br>

　　　　　　　　　　　　　　　　　　　The Configuration Wizard will help you, creating the<br>
　　　　　　　　　　　　　　　　　　　output profiles. In TeXnicCenter output profiles are<br>
　　　　　　　　　　　　　　　　　　　necessary to generate printable files.<br>

<br>

　　　　　　　　　　　　　　　　　　　Be sure, that you have already installed a<br>
　　　　　　　　　　　　　　　　　　　TeX-distribution. If not, you should quit the wizard<br>
　　　　　　　　　　　　　　　　　　　and TeXnicCenter now, install the TeX-distribution and<br>
　　　　　　　　　　　　　　　　　　　then restart this wizard.<br>

<br>

　　　　　　　　　　　　　　　　　　　Tip: If you are using the MikTeX-Distribution<br>
　　　　　　　　　　　　　　　　　　　(www.miktex.org), TeXnicCenter will do the most<br>
　　　　　　　　　　　　　　　　　　　part of the configuration for you.<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　次へ(N)　　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span><br>

***

<span style="color:Black;background-color:#2E3436;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"><ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</ins></span> </span><br>

<span style="color:Black;background-color:#2E3436;"><ins>　<strong>←</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<span style="color:#1144BB;">Distribution directory</span><br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the full path of the directory, where the<br>
　　　　　　　　　　　　　　　　　　　executables (latex, tex, etc.) of your<br>
　　　　　　　　　　　　　　　　　　　TeX-distribution are located:<br>

<br>

　　　　　　　　　　　　　　　　　　　<ins>C:\w32tex\bin</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　次へ(N)　　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span><br>

***

<span style="color:Black;background-color:#2E3436;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"><ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</ins></span> </span><br>

<span style="color:Black;background-color:#2E3436;"><ins>　<strong>←</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<span style="color:#1144BB;">DVI-Viewer configuration</span><br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the full path of the DVI-viewer to use:<br>

<br>

　　　　　　　　　　　　　　　　　　　<ins>C:\w32tex\dviout\dviout.exe</ins><br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the command line option that prevents the<br>
　　　　　　　　　　　　　　　　　　　viewer from starting multiple instances:<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[optional\]<br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the command line option, that causes the<br>
　　　　　　　　　　　　　　　　　　　viewer to display a paragraph belonging to a given<br>
　　　　　　　　　　　　　　　　　　　source line. Use the place holders:<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　<span style="color:#1144BB;">▶</span>　\]</span>　\[optional\]<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　次へ(N)　　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span><br>

***

<span style="color:Black;background-color:#2E3436;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"><ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</ins></span> </span><br>

<span style="color:Black;background-color:#2E3436;"><ins>　<strong>←</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<span style="color:#1144BB;">Your TeX-distribution supports the generation of PostScript-files</span><br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the full path of the PostScript-viewer to use:<br>

<br>

　　　　　　　　　　　　　　　　　　　<ins>C:\Program Files\SumatraPDF\SumatraPDF.exe</ins><br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the command line option that prevents the<br>
　　　　　　　　　　　　　　　　　　　viewer from starting multiple instances:<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[optional\]<br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the command line option, that causes the<br>
　　　　　　　　　　　　　　　　　　　viewer to display a paragraph belonging to a given<br>
　　　　　　　　　　　　　　　　　　　source line. Use the place holders:<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　<span style="color:#1144BB;">▶</span>　\]</span>　\[optional\]<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　次へ(N)　　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span><br>

***

<!-- [[TeXnicCenter 2.0 Alpha 3 から，デフォルトの PDF ビューアが SumatraPDF になりました．:http://texniccenter.hg.sourceforge.net/hgweb/texniccenter/texniccenter/rev/86030778d9fc]]&br; -->

<span style="color:Black;background-color:#2E3436;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"><ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</ins></span> </span><br>

<span style="color:Black;background-color:#2E3436;"><ins>　<strong>←</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<span style="color:#1144BB;">Your TeX-distribution supports the generation of PDF-files</span><br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the full path of the PDF-viewer to use:<br>

<br>

　　　　　　　　　　　　　　　　　　　<ins>C:\Program Files\SumatraPDF\SumatraPDF.exe</ins><br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the command line option that prevents the<br>
　　　　　　　　　　　　　　　　　　　viewer from starting multiple instances:<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[optional\]<br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the command line option, that causes the<br>
　　　　　　　　　　　　　　　　　　　viewer to display a paragraph belonging to a given<br>
　　　　　　　　　　　　　　　　　　　source line. Use the place holders:<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　<span style="color:#1144BB;">▶</span>　\]</span>　\[optional\]<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　次へ(N)　　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span><br>

***

<span style="color:Black;background-color:#2E3436;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"><ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</ins></span> </span><br>

<span style="color:Black;background-color:#2E3436;"><ins>　<strong>←</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<span style="color:#1144BB;">Finish</span><br>

<br>

　　　　　　　　　　　　　　　　　　　The following output profiles are about to be<br>

<br>

　　　　　　　　　　　　　　　　　　　・LaTeX => DVI<br>
　　　　　　　　　　　　　　　　　　　・LaTeX => DVI => PDF<br>
　　　　　　　　　　　　　　　　　　　・LaTeX => PS<br>
　　　　　　　　　　　　　　　　　　　・LaTeX => PDF<br>
　　　　　　　　　　　　　　　　　　　・LaTeX => PS => PDF<br>
　　　　　　　　　　　　　　　　　　　・LuaLaTeX => PDF<br>
　　　　　　　　　　　　　　　　　　　・XeLaTeX => PDF<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　Click on 'Finish' to generate the listed profiles.<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　完了(F)　　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span><br>

***

## (La)TeX {#n6a4bee4}

英語版のコンパイラが設定されるので日本語版のコンパイラに変更します．<br>

Profiles

LaTeX => DVI<br>
■ e-pTeX, pBibTeX の場合

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\w32tex\bin\platex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-guess-input-enc -kanji=utf8 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\w32tex\bin\pbibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>-kanji=utf8 "%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\w32tex\bin\mendex.exe</ins><br>

Command line arguments to pass to<br>
<ins>-U "%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

■ e-upTeX, upBibTeX の場合

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\w32tex\bin\uplatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-no-guess-input-enc -kanji=utf8 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\w32tex\bin\upbibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\w32tex\bin\mendex.exe</ins><br>

Command line arguments to pass to<br>
<ins>-U "%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

Profiles

LaTeX => PS<br>
■ e-pTeX, pBibTeX の場合

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\w32tex\bin\platex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-guess-input-enc -kanji=utf8 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\w32tex\bin\pbibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>-kanji=utf8 "%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\w32tex\bin\mendex.exe</ins><br>

Command line arguments to pass to<br>
<ins>-U "%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

■ e-upTeX, upBibTeX の場合

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\w32tex\bin\uplatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-no-guess-input-enc -kanji=utf8 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\w32tex\bin\upbibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\w32tex\bin\mendex.exe</ins><br>

Command line arguments to pass to<br>
<ins>-U "%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

Profiles

LaTeX => DVI => PDF<br>
LaTeX => PS => PDF<br>
■ e-pTeX, pBibTeX の場合

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\w32tex\bin\platex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\w32tex\bin\pbibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>-kanji=utf8 "%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\w32tex\bin\mendex.exe</ins><br>

Command line arguments to pass to<br>
<ins>-U "%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

■ e-upTeX, upBibTeX の場合

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\w32tex\bin\uplatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\w32tex\bin\upbibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\w32tex\bin\mendex.exe</ins><br>

Command line arguments to pass to<br>
<ins>-U "%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

Profiles

LaTeX => PDF<br>

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\w32tex\bin\pdflatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-synctex=1 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\w32tex\bin\bibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\w32tex\bin\makeindex.exe</ins><br>

Command line arguments to pass to<br>
<ins>-U "%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

Profiles

LuaLaTeX => PDF<br>

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\w32tex\bin\lualatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-synctex=1 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\w32tex\bin\bibtexu.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\w32tex\bin\texindy.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

Profiles

XeLaTeX => PDF<br>

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\w32tex\bin\xelatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-synctex=1 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\w32tex\bin\bibtexu.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\w32tex\bin\texindy.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

## Postprocessor {#w0bb01d0}

Profiles

LaTeX => DVI => PDF<br>

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]</ins></span><strong>\[ Postprocessor \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Viewer　　　\]</ins></span><br>

<span style="color:Black;background-color:#EEEEEE;">Postprocessors to run after the (La)TeX-compiler</span><br>

<span style="color:White;background-color:#1188FF;">dvipdfm　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

Executable:　　　　　<ins>C:\w32tex\bin\dvipdfmx.exe</ins><br>
Arguments　　　　　 <ins>"%bm.dvi"</ins><br>
Input<br>
Output<br>

***

Profiles

LaTeX => PS<br>

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]</ins></span><strong>\[ Postprocessor \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Viewer　　　\]</ins></span><br>

<span style="color:Black;background-color:#EEEEEE;">Postprocessors to run after the (La)TeX-compiler</span><br>

<span style="color:White;background-color:#1188FF;">DviPs　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

Executable:　　　　　<ins>C:\w32tex\bin\dvips.exe</ins><br>
Arguments　　　　　 <ins>-Ppdf -o "%Bm.ps" "%Bm.dvi"</ins><br>
Input<br>
Output<br>

***

Profiles

LaTeX => PS => PDF<br>

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]</ins></span><strong>\[ Postprocessor \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Viewer　　　\]</ins></span><br>

<span style="color:Black;background-color:#EEEEEE;">Postprocessors to run after the (La)TeX-compiler</span><br>

<span style="color:White;background-color:#1188FF;">DviPs (PDF)　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

Ghostscript (ps2pdf)<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

Executable:　　　　　<ins>C:\w32tex\bin\dvips.exe</ins><br>
Arguments　　　　　 <ins>-Ppdf -o "%Bm.ps" "%Bm.dvi"</ins><br>
Input<br>
Output<br>

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]</ins></span><strong>\[ Postprocessor \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Viewer　　　\]</ins></span><br>

<span style="color:Black;background-color:#EEEEEE;">Postprocessors to run after the (La)TeX-compiler</span><br>

DviPs (PDF)<br>
<span style="color:White;background-color:#1188FF;">Ghostscript (ps2pdf)　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

Executable:　　　　　<ins>C:\gs\gs9.06\bin\gswin32c.exe</ins><br>
Arguments　　　　　 <ins>-sPAPERSIZE=a4 -dSAFER -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile="%bm.pdf" -c save pop -f "%bm.ps"</ins><br>
Input<br>
Output<br>

***

## Viewer {#a436e057}

### DVI Viewer {#mefb3a74}

Profiles

LaTeX => DVI<br>

#### [dviout](/dviout/) {#hc739c1c}

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\w32tex\dviout\dviout.exe</ins><br>

<br>

View project's output<br>
◯ Command line argument　　<span style="color:#3333CC;">◎</span> DDE command<br>
Command <ins>\[WinNormal\]\[FileOpen("%bm.dvi")\]</ins><br>
Server: <ins>dviout</ins>　　　　　　　　　　Topic: <ins>dviout</ins><br>

<br>

Forward search<br>
◯ Command line argument　　<span style="color:#3333CC;">◎</span> DDE command<br>
Command <ins>\[WinNormal\]\[FileOpen("%bm.dvi")\]</ins><br>
Server: <ins>dviout</ins>　　　　　　　　　　Topic: <ins>dviout</ins><br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　<span style="color:#3333CC;">◎</span> Do not close<br>

<br>

<br>

***

#### Yap {#u041709f}

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files\MiKTeX 2.9\miktex\bin\yap.exe</ins><br>

<br>

View project's output<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>-1 "%bm.dvi"</ins><br>

<br>

<br>

Forward search<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>-1 "%bm.dvi"</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　<span style="color:#3333CC;">◎</span> Do not close<br>

<br>

<br>

***

### PS Viewer {#f96a74f6}

Profiles

LaTeX => PS<br>

#### [SumatraPDF](/SumatraPDF/) {#oe6c2a37}

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files\SumatraPDF\SumatraPDF.exe</ins><br>

<br>

View project's output<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>-reuse-instance "%bm.ps"</ins><br>

<br>

<br>

Forward search<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>-reuse-instance "%bm.ps"</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　<span style="color:#3333CC;">◎</span> Do not close<br>

<br>

<br>

***

#### GSview {#xd566e26}

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files\Ghostgum\gsview\gsview32.exe</ins><br>

<br>

View project's output<br>
◯ Command line argument　　<span style="color:#3333CC;">◎</span> DDE command<br>
Command <ins>\[Command("%bm.ps")\]\[ShowWindow(1)\]</ins><br>
Server: <ins>GSview</ins>　　　　　　　　　Topic: <ins>GSview</ins><br>

<br>

Forward search<br>
◯ Command line argument　　<span style="color:#3333CC;">◎</span> DDE command<br>
Command <ins>\[Command("%bm.ps")\]\[ShowWindow(1)\]</ins><br>
Server: <ins>GSview</ins>　　　　　　　　　Topic: <ins>GSview</ins><br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　<span style="color:#3333CC;">◎</span> Do not close<br>

<br>

<br>

***

### PDF Viewer {#nfb23bc6}

Profiles

LaTeX => DVI => PDF<br>
LaTeX => PDF<br>
LaTeX => PS => PDF<br>
LuaLaTeX => PDF<br>
XeLaTeX => PDF<br>

#### [TeXworks](/TeXworks/) {#ef4e474a}

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\w32tex\share\texworks\TeXworks.exe</ins><br>

<br>

View project's output<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>"%bm.pdf"</ins><br>

<br>

<br>

Forward search<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>"%bm.pdf"</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　<span style="color:#3333CC;">◎</span> Do not close<br>

<br>

<br>

***

#### [SumatraPDF](/SumatraPDF/) {#pdc24230}

inverse search の時に他のエディタが起動してしまう場合は sumatrapdfprefs.dat を削除してください．

■ SumatraPDF を前面に表示したい場合

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files\SumatraPDF\SumatraPDF.exe -reuse-instance -inverse-search "\\"C:\Program Files\TeXnicCenter Alpha\TeXnicCenter.exe\\" /ddecmd \\"\[goto('%f', '%l')\]\\""</ins><br>

<br>

View project's output<br>
◯ Command line argument　　<span style="color:#3333CC;">◎</span> DDE command<br>
Command <ins>\[Open("%bm.pdf",0,1,1)\]</ins><br>
Server: <ins>SUMATRA</ins>　　　　　　　Topic: <ins>control</ins><br>

<br>

Forward search<br>
◯ Command line argument　　<span style="color:#3333CC;">◎</span> DDE command<br>
Command <ins>\[ForwardSearch("%bm.pdf","%Wc",%l,0,0,1)\]</ins><br>
Server: <ins>SUMATRA</ins>　　　　　　　Topic: <ins>control</ins><br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　<span style="color:#3333CC;">◎</span> Do not close<br>

<br>

<br>

***

■ SumatraPDF を前面に表示したくない場合

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files\SumatraPDF\SumatraPDF.exe -reuse-instance -inverse-search "\\"C:\Program Files\TeXnicCenter Alpha\TeXnicCenter.exe\\" /ddecmd \\"\[goto('%f', '%l')\]\\""</ins><br>

<br>

View project's output<br>
◯ Command line argument　　<span style="color:#3333CC;">◎</span> DDE command<br>
Command <ins>\[Open("%bm.pdf",0,0,1)\]</ins><br>
Server: <ins>SUMATRA</ins>　　　　　　　Topic: <ins>control</ins><br>

<br>

Forward search<br>
◯ Command line argument　　<span style="color:#3333CC;">◎</span> DDE command<br>
Command <ins>\[ForwardSearch("%bm.pdf","%Wc",%l,0,0,0)\]</ins><br>
Server: <ins>SUMATRA</ins>　　　　　　　Topic: <ins>control</ins><br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　<span style="color:#3333CC;">◎</span> Do not close<br>

<br>

<br>

***

#### Chrome PDF Viewer {#fd20d9e0}

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Windows\System32\cmd.exe</ins><br>

<br>

View project's output<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>/c %LOCALAPPDATA%\Google\Chrome\Application\chrome.exe --new-window "%bm.pdf"</ins><br>

<br>

<br>

Forward search<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>/c %LOCALAPPDATA%\Google\Chrome\Application\chrome.exe --new-window "%bm.pdf"</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　<span style="color:#3333CC;">◎</span> Do not close<br>

<br>

<br>

***

#### [Adobe Reader](</Adobe Reader/>) {#c94760c4}

■ Adobe Reader XI の場合<br>

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe</ins><br>

<br>

View project's output<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>"%bm.pdf"</ins><br>

<br>

<br>

Forward search<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>"%bm.pdf"</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　<span style="color:#3333CC;">◎</span> DDE command　　◯ Do not close<br>
Command <ins>\[DocOpen("%bm.pdf")\]\[DocClose("%bm.pdf")\]</ins><br>
Server: <ins>acroviewR11</ins>　　　　　　Topic: <ins>control</ins><br>

<br>

***

<!-- Adobe Reader X の場合 Server は acroviewR10 に設定します．~ -->
<!-- ただし Adobe Reader X で [編集(E)]-[環境設定(N)...]-[一般]-[起動時に保護モードを有効にする(M)] にチェックがついている場合，Adobe Reader X の起動時に下記のエラーメッセージが出力され，PDF ファイルが表示されませんでした．~ -->
<!--  -->
<!-- - --  -->
<!-- &color(Black,#2E3436){%%%　&color(White){''TeXnicCenter''};　　　　　　　　　　　　　　　　　　　　　　　%%%};&br; -->
<!-- &size(35){''×''}; [DocOpen("%bm.pdf")][FileOpen("%bm.pdf")]&br; -->
<!-- &br; -->
<!-- 　　　　Cannot execute the command.&br; -->
<!-- - --  -->
<!--  -->
<!-- Adobe Reader X をあらかじめ起動しておけば，このエラーメッセージは表示されなくなり，DDE command が，通常どおり機能します．~ -->
<!-- 下記の設定に変更すると [起動時に保護モードを有効にする(M)] にチェックがついていても Adobe Reader X の起動時の TeXnicCenter のエラーメッセージが表示されなくなり PDF ファイルが表示されるようになりました．~ -->

■ Adobe Reader X の場合<br>

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe</ins><br>

<br>

View project's output<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>"%bm.pdf"</ins><br>

<br>

<br>

Forward search<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>"%bm.pdf"</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　<span style="color:#3333CC;">◎</span> DDE command　　◯ Do not close<br>
Command <ins>\[DocOpen("%bm.pdf")\]\[DocClose("%bm.pdf")\]</ins><br>
Server: <ins>acroviewR10</ins>　　　　　　Topic: <ins>control</ins><br>

<br>

***

<!-- 修正点は -->
<!--  -->
<!-- -View project's output と Forward search を Command line argument に変更し，Command に "%bm.pdf" を追加する -->
<!-- -Close document before running (La)TeX で Server: に acroviewR10, Topic: に control を指定して [DocClose("%bm.pdf")] の前に [DocOpen("%bm.pdf")] を追加する -->
<!--  -->
<!-- です． -->

#### PDF-XChange Viewer {#x915b4c1}

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files\Tracker Software\PDF Viewer\PDFXCview.exe</ins><br>

<br>

View project's output<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>"%bm.pdf"</ins><br>

<br>

<br>

Forward search<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>"%bm.pdf"</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
<span style="color:#3333CC;">◎</span> Command line argument　◯ DDE command　　◯ Do not close<br>

Command <ins>/close "%bm.pdf"</ins><br>

<br>

<br>

***

#### Foxit Reader {#ga5b98d1}

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Windows\System32\cmd.exe</ins><br>

<br>

View project's output<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>/c echo "C:\Program Files\Foxit Software\Foxit Reader\Foxit Reader.exe" "%bm.pdf" | cmd</ins><br>

<br>

<br>

Forward search<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>/c echo "C:\Program Files\Foxit Software\Foxit Reader\Foxit Reader.exe" "%bm.pdf" | cmd</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
<span style="color:#3333CC;">◎</span> Command line argument　◯ DDE command　　◯ Do not close<br>

Command <ins>/c echo tasklist /fi "IMAGENAME eq Foxit Reader.exe" /nh findstr "Foxit Reader.exe" > nul &amp;&amp; taskkill /im "Foxit Reader.exe" | cmd</ins><br>

<br>

<br>

***

## 使い方 {#f25094fe}

### プロジェクトの作成 {#td4273eb}

\[File\]-\[New\]-\[Project...\] で新規プロジェクトを作成します．

### 補完 {#tcdb30cc}

Ctrl + Space で補完ができます．

ite とタイプして Ctrl + Space をタイプすると

```
\begin{itemize}
	\item 
\end{itemize}
```

を補完してくれます．

### プロファイルの変更 {#t5967111}

\[Build\]-\[Select Output Profile...\] またはツールバーからプロファイルを変更できます．

dvipdfm(x) で PDF ファイルを作成する場合は，プロファイルを LaTeX => DVI => PDF に変更します．

### ビルド {#i6bfece2}

\[Build\]-\[Build Output\] をクリックします．

エラーが見つかれば，×印が表示され，クリックするとエラー箇所にジャンプします．

間違った箇所を修正してもう一度ビルドします．

### 表示 {#w010da2b}

\[Build\]-\[View Output\] で対応するプロファイルの出力ファイルが表示されます．

\[Build\]-\[Build and View Output\] でビルドと表示ができます．

## SumatraPDF との連携 {#yfd68060}

Command line arguments to pass to the compiler: に -synctex=1 を追加します．

### forward search {#e049aa23}

forward and inverse search は PDF Viewer の [SumatraPDF](/TeXnicCenter/#pdc24230) の項を参考に設定してください．<br>

### inverse search {#e38afd39}

forward and inverse search は PDF Viewer の [SumatraPDF](/TeXnicCenter/#pdc24230) の項を参考に設定してください．<br>
inverse search は Executable path に追加する代わりに SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に以下の設定を追加しても OK です．<br>

```
"C:\Program Files\TeXnicCenter Alpha\TeXnicCenter.exe" /ddecmd "[goto('%f', '%l')]"
```

## dviout との連携 (非推奨) {#r45cf8d1}

[dviout#forward and inverse search](/dviout/#ycc841a2) を参照．

Command line arguments to pass to the compiler: に -src-specials を追加します．

### forward search {#scf8c0d8}

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\w32tex\dviout\dviout.exe</ins><br>

<br>

View project's output<br>
◯ Command line argument　　<span style="color:#3333CC;">◎</span> DDE command<br>
Command <ins>\[WinNormal\]\[FileOpen("%bm.dvi")\]</ins><br>
Server: <ins>dviout</ins>　　　　　　　　　　Topic: <ins>dviout</ins><br>

<br>

Forward search<br>
◯ Command line argument　　<span style="color:#3333CC;">◎</span> DDE command<br>
Command <ins>\[PageOpen(# %l '%nc')\]\[WinNormal\]\[FileOpen("%bm.dvi")\]</ins><br>
Server: <ins>dviout</ins>　　　　　　　　　　Topic: <ins>dviout</ins><br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　<span style="color:#3333CC;">◎</span> Do not close<br>

<br>

<br>

***

### inverse search {#zb03fb4c}

inverse search は dviout の \[Option\]-\[Setup Parameters...\]-\[Common\]-\[src:\] に以下の設定を追加すれば OK です．

```
C:\Program Files\TeXnicCenter Alpha\TeXnicCenter.exe^s /ddecmd "[goto('%s', '%d')]"
```

## Yap との連携 (非推奨) {#v01c3904}

Command line arguments to pass to the compiler: に -src-specials を追加します．

### forward search {#f07fe018}

***

<span style="color:Black;background-color:#2E3436;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files\MiKTeX 2.9\miktex\bin\yap.exe</ins><br>

<br>

View project's output<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>-1 "%bm.dvi"</ins><br>

<br>

<br>

Forward search<br>
<span style="color:#3333CC;">◎</span> Command line argument　　◯ DDE command<br>

Command <ins>-1 -s %l"%Wc" "%bm.dvi"</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　<span style="color:#3333CC;">◎</span> Do not close<br>

<br>

<br>

***

### inverse search {#p696e2fe}

inverse search は Yap の \[View\]-\[Options...\]-\[Inverse DVI Search\] に設定を追加すれば OK です．

Name:
: TeXnicCenter

Specify the program you want to use to edit TeX source files:
: C:\Program Files\TeXnicCenter Alpha\TeXnicCenter.exe

Specify the program arguments:
: /ddecmd "\[goto('%f', '%l')\]"

Command line: に以下のように設定されます．

```
"C:\Program Files\TeXnicCenter Alpha\TeXnicCenter.exe" /ddecmd "[goto('%f', '%l')]"
```

## 関連リンク {#r73017f2}

- [TexnicCenter2.0の日本語使用について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=794)
- [工大院生の学生メモ : Texniccenter](http://blog.livedoor.jp/gastttt3678/archives/2846954.html)
- [Newest &#39;texniccenter&#39; Questions - TeX - LaTeX - Stack Exchange](http://tex.stackexchange.com/questions/tagged/texniccenter)
- [Configuring TeXnicCenter](http://www.statslab.cam.ac.uk/~eva/texniccenter.html)
- [LaTeX Community &bull; View topic - Adobe Reader 10 and viewing error](http://www.latex-community.org/forum/viewtopic.php?f=31&t=10857)
- [LaTeX Community &bull; View topic - Texniccenter + Adobe Reader 9 Problem](http://www.latex-community.org/forum/viewtopic.php?f=35&t=8586)
- [TexnicCenter and Adobe Reader 10 / X](http://www.agmonim.com/2010/12/texniccenter-and-adobe-reader-10-x/)
- [Alphan Ulusoy&#039;s Blog &rsaquo; Using Adobe Acrobat Reader with TeXnicCenter](http://blog.alphanulusoy.com/?p=10)
- [DDE Message of Acrobat and Adobe Reader](http://acrobat-dde.nnn2.com/)
- [FW: Open "View PDF (pdflatex)" at last cursor position / forward search](http://www.mail-archive.com/lyx-devel@lists.lyx.org/msg157991.html)
