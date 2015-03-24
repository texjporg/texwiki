---
title: "TeXnicCenter"
url: "/TeXnicCenter/"
date: 2011-03-03T03:06:29Z
pukiwiki: "TeXnicCenter"
---

# TeXnicCenter

## [TeXnicCenter](http://www.texniccenter.org/) {#f2674e4f}

<img src="http://texniccenter.sourceforge.net/_static/TeXnicCenter.png" alt="TeXnicCenter" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

<div style="clear:both"></div>

## TeXnicCenter とは {#rb91ca3f}

TeXnicCenter は多機能で使いやすい LaTeX 統合環境です．<br>

- [TeXnicCenter](http://www.texniccenter.org/)
- [TeXnicCenter | SourceForge.net](http://sourceforge.net/projects/texniccenter/)

### 動作環境 {#sa939c6e}

Windows

### License {#haaa8397}

[GPL](http://sourceforge.net/p/texniccenter/manual/ci/tip/tree/source/copyright.rst)

### リリース情報 {#da101e5c}

- [TeXnicCenter  &raquo; News](http://www.texniccenter.org/news/)
- [http://sourceforge.net/p/texniccenter/code/ref/default/tags/](http://sourceforge.net/p/texniccenter/code/ref/default/tags/)

を参照．

### ChangeLog {#y2c9ad23}

- [Hg tools](http://sourceforge.net/p/texniccenter/_list/hg)
    - [Code](http://sourceforge.net/p/texniccenter/code/)
        - [log](http://sourceforge.net/p/texniccenter/code/ci/tip/log/)

### 特徴 {#c8ac578a}

- TeX のコマンドを色分けできます．
- TeX のコマンドを補完してくれます．(Ctrl + Space)
- 折りたたみが可能です．→ デフォルトでは OFF になっています．\[View\]-\[Fold Margin\] で ON にできます．
- SumatraPDF を使用すれば，SyncTeX による forward and inverse search も可能です．

## 不具合 {#p40a9a4a}

- [TeXnicCenter / User Reports](http://sourceforge.net/p/texniccenter/user-reports/)

## ダウンロード {#rf294e94}

- [http://ftp.jaist.ac.jp/pub/sourceforge/t/te/texniccenter/](http://ftp.jaist.ac.jp/pub/sourceforge/t/te/texniccenter/)
- [ftp://ftp.jaist.ac.jp/pub/sourceforge/t/te/texniccenter/](ftp://ftp.jaist.ac.jp/pub/sourceforge/t/te/texniccenter/)
- [Downloads](http://www.texniccenter.org/resources/downloads)
- [Browse TeXnicCenter Files on SourceForge.net](http://sourceforge.net/projects/texniccenter/files/)

## Encoding → \[File\]-\[Save As...\] の Encoding のリストから UTF-8 を指定して保存する {#u85685c5}

Encoding は

- ANSI (ANSI は日本語版 Windows では CP932 (Shift_JIS) として保存されます)
- UTF-8
- UTF-8 with BOM
- UTF-16
- UTF-16 Big Endian
- UTF-32
- UTF-32 Big Endian

に対応しています．

UTF-8 で保存する場合は \[File\]-\[Save As...\] の Encoding のリストから UTF-8 を指定して保存してください．

## プロファイルの作成 {#n1a2864d}

初回起動時に Configuration Wizard が表示されます．<br>
初回起動時に設定をキャンセルした場合は，メニューの \[Build\] → \[Define Output Profiles...\] で，プロファイルを作成します．<br>

\[Wizard...\] をクリックします．

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:#2E3436;background-color:#2E3436;"><ins>　<span style="color:White;"><strong>←</strong></span>　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

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

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:#2E3436;background-color:#2E3436;"><ins>　<span style="color:Black;"><strong>←</strong></span>　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<span style="color:#1144BB;">Distribution directory</span><br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the full path of the directory, where the<br>
　　　　　　　　　　　　　　　　　　　executables (latex, tex, etc.) of your<br>
　　　　　　　　　　　　　　　　　　　TeX-distribution are located:<br>

<br>

　　　　　　　　　　　　　　　　　　　<ins>C:\texlive\2015\bin\win64</ins><br>
　　　　　　　　　　　　　　　　　　　<ins>C:\texlive\2015\bin\win32</ins><br>

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

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:#2E3436;background-color:#2E3436;"><ins>　<span style="color:Black;"><strong>←</strong></span>　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<span style="color:#1144BB;">DVI-Viewer configuration</span><br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the full path of the DVI-viewer to use:<br>

<br>

　　　　　　　　　　　　　　　　　　　<br>

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

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:#2E3436;background-color:#2E3436;"><ins>　<span style="color:Black;"><strong>←</strong></span>　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<span style="color:#1144BB;">Your TeX-distribution supports the generation of PostScript-files</span><br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the full path of the PostScript-viewer to use:<br>

<br>

　　　　　　　　　　　　　　　　　　　<br>

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

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:#2E3436;background-color:#2E3436;"><ins>　<span style="color:Black;"><strong>←</strong></span>　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<span style="color:#1144BB;">Your TeX-distribution supports the generation of PDF-files</span><br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　Enter the full path of the PDF-viewer to use:<br>

<br>

　　　　　　　　　　　　　　　　　　　<ins>C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe</ins><br>
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

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:#2E3436;background-color:#2E3436;"><ins>　<span style="color:Black;"><strong>←</strong></span>　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

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

英語版のコンパイラが設定されるので日本語版のコンパイラ (upLaTeX) に変更します．<br>

Profiles

LaTeX => DVI => PDF<br>
LaTeX => PS => PDF<br>

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\texlive\2015\bin\win64\uplatex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\uplatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\texlive\2015\bin\win64\upbibtex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\upbibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\texlive\2015\bin\win64\upmendex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\upmendex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

Profiles

LaTeX => PDF<br>

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\texlive\2015\bin\win64\pdflatex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\pdflatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-synctex=1 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\texlive\2015\bin\win64\bibtex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\bibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\texlive\2015\bin\win64\makeindex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\makeindex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

Profiles

LuaLaTeX => PDF<br>
■ LuaLaTeX の場合

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\texlive\2015\bin\win64\lualatex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\lualatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-synctex=1 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\texlive\2015\bin\win64\upbibtex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\upbibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\texlive\2015\bin\win64\upmendex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\upmendex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

■ LuaJITLaTeX の場合

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\texlive\2015\bin\win64\luajitlatex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\luajitlatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-synctex=1 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\texlive\2015\bin\win64\upbibtex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\upbibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\texlive\2015\bin\win64\upmendex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\upmendex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

Profiles

XeLaTeX => PDF<br>

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<strong>\[ (La)TeX　　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Preprocessor \]\[ Postprocessor \]\[ Viewer　　　\]</ins></span><br>

(La)TeX-Compiler<br>
☑ Run (La)TeX in this profile<br>
☐ Stop Compilation, if LaTeX-Error occures<br>
Path to the (La)TeX<br>
<ins>C:\texlive\2015\bin\win64\xelatex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\xelatex.exe</ins><br>

Command line arguments to pass to the compiler:<br>
<ins>-synctex=1 -interaction=nonstopmode "%wm"</ins><br>

BibTeX<br>
☐ Do not use BibTeX in this profile<br>
Path to BibTeX<br>
<ins>C:\texlive\2015\bin\win64\upbibtex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\upbibtex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm"</ins><br>

MakeIndex<br>
☐ Do not use MakeIndex in this profile<br>
Path to MakeIndex<br>
<ins>C:\texlive\2015\bin\win64\upmendex.exe</ins><br>

<ins>C:\texlive\2015\bin\win32\upmendex.exe</ins><br>

Command line arguments to pass to<br>
<ins>"%tm.idx" -t "%tm.ilg" -o "%tm.ind"</ins><br>

***

## Postprocessor {#w0bb01d0}

Profiles

LaTeX => DVI => PDF<br>

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

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

Executable:　　　　　<ins>C:\texlive\2015\bin\win64\dvipdfmx.exe</ins> または <ins>C:\texlive\2015\bin\win32\dvipdfmx.exe</ins><br>
Arguments　　　　　 <ins>"%bm.dvi"</ins><br>
Input<br>
Output<br>

***

Profiles

LaTeX => PS => PDF<br>

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

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

Executable:　　　　　<ins>C:\texlive\2015\bin\win64\dvips.exe</ins> または <ins>C:\texlive\2015\bin\win32\dvips.exe</ins><br>
Arguments　　　　　 <ins>-Ppdf -o "%Bm.ps" "%Bm.dvi"</ins><br>
Input<br>
Output<br>

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

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

Executable:　　　　　<ins>C:\texlive\2015\bin\win64\rungs.exe</ins> または <ins>C:\texlive\2015\bin\win32\rungs.exe</ins><br>
Arguments　　　　　 <ins>-sPAPERSIZE=a4 -dSAFER -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile="%bm.pdf" -c save pop -f "%bm.ps"</ins><br>
Input<br>
Output<br>

***

## Viewer {#a436e057}

### PDF Viewer {#nfb23bc6}

Profiles

LaTeX => DVI => PDF<br>
LaTeX => PDF<br>
LaTeX => PS => PDF<br>
LuaLaTeX => PDF<br>
XeLaTeX => PDF<br>

#### [SumatraPDF](/SumatraPDF/) {#pdc24230}

■ SumatraPDF を前面に表示したい場合

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe -reuse-instance -inverse-search "\\"C:\Program Files\TeXnicCenter\TeXnicCenter.exe\\" /ddecmd \\"\[goto('%f','%l')\]\\""</ins><br>

<ins>C:\Program Files\SumatraPDF\SumatraPDF.exe -reuse-instance -inverse-search "\\"C:\Program Files\TeXnicCenter\TeXnicCenter.exe\\" /ddecmd \\"\[goto('%f', '%l')\]\\""</ins><br>

<br>

View project's output<br>
◯ Command line argument　　(●) DDE command<br>
Command <ins>\[Open("%bm.pdf",0,1,1)\]</ins><br>
Server: <ins>SUMATRA</ins>　　　　　　　Topic: <ins>control</ins><br>

<br>

Forward search<br>
◯ Command line argument　　(●) DDE command<br>
Command <ins>\[ForwardSearch("%bm.pdf","%Wc",%l,0,0,1)\]</ins><br>
Server: <ins>SUMATRA</ins>　　　　　　　Topic: <ins>control</ins><br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　(●) Do not close<br>

<br>

<br>

***

■ SumatraPDF を前面に表示したくない場合

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe -reuse-instance -inverse-search "\\"C:\Program Files\TeXnicCenter\TeXnicCenter.exe\\" /ddecmd \\"\[goto('%f','%l')\]\\""</ins><br>

<ins>C:\Program Files\SumatraPDF\SumatraPDF.exe -reuse-instance -inverse-search "\\"C:\Program Files\TeXnicCenter\TeXnicCenter.exe\\" /ddecmd \\"\[goto('%f', '%l')\]\\""</ins><br>

<br>

View project's output<br>
◯ Command line argument　　(●) DDE command<br>
Command <ins>\[Open("%bm.pdf",0,0,1)\]</ins><br>
Server: <ins>SUMATRA</ins>　　　　　　　Topic: <ins>control</ins><br>

<br>

Forward search<br>
◯ Command line argument　　(●) DDE command<br>
Command <ins>\[ForwardSearch("%bm.pdf","%Wc",%l,0,0,0)\]</ins><br>
Server: <ins>SUMATRA</ins>　　　　　　　Topic: <ins>control</ins><br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　(●) Do not close<br>

<br>

<br>

***

#### [TeXworks](/TeXworks/) {#ef4e474a}

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Windows\System32\cmd.exe</ins><br>

<br>

View project's output<br>
(●) Command line argument　　◯ DDE command<br>
Command <ins>/c texworks "%bm.pdf"</ins><br>

<br>

<br>

Forward search<br>
(●) Command line argument　　◯ DDE command<br>
Command <ins>/c synctex view -i "%l:0:%Wc" -o "%bm.pdf" -x "texworks  --position=&#x25;&#x25;{page+1} '&#x25;&#x25;{output}'"</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　(●) Do not close<br>

<br>

<br>

***

#### [Mozilla Firefox](</Mozilla Firefox/>) (PDF.js) {#y4109c68}

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Windows\System32\cmd.exe</ins><br>

<br>

View project's output<br>
(●) Command line argument　　◯ DDE command<br>
Command <ins>/c rundll32 shell32,ShellExec_RunDLL firefox -new-window "%bm.pdf"</ins><br>

<br>

<br>

Forward search<br>
(●) Command line argument　　◯ DDE command<br>
Command <ins>/c synctex view -i "%l:0:%Wc" -o "%bm.pdf" -x "rundll32 shell32,ShellExec_RunDLL firefox -new-window '&#x25;&#x25;{output}'"</ins><br> <!-- Command %%%/c synctex view -i "%l:0:%Wc" -o "%bm.pdf" -x "rundll32 shell32,ShellExec_RunDLL firefox -new-window '&#x25;&#x25;{output}#page=&#x25;&#x25;{page+1}'"%%%&br; -->

<br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　(●) Do not close<br>

<br>

<br>

***

#### Chrome PDF Viewer {#fd20d9e0}

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Windows\System32\cmd.exe</ins><br>

<br>

View project's output<br>
(●) Command line argument　　◯ DDE command<br>
Command <ins>/c rundll32 shell32,ShellExec_RunDLL chrome --new-window "%bm.pdf"</ins><br>

<br>

<br>

Forward search<br>
(●) Command line argument　　◯ DDE command<br>
Command <ins>/c synctex view -i "%l:0:%Wc" -o "%bm.pdf" -x "rundll32 shell32,ShellExec_RunDLL chrome --new-window '&#x25;&#x25;{output}'"</ins><br> <!-- Command %%%/c synctex view -i "%l:0:%Wc" -o "%bm.pdf" -x "rundll32 shell32,ShellExec_RunDLL chrome - -new-window '&#x25;&#x25;{output}#page=&#x25;&#x25;{page+1}'"%%%&br; -->

<br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　◯ DDE command　　(●) Do not close<br>

<br>

<br>

***

#### Adobe Acrobat Reader DC {#h47fd5db}

■ コマンドラインを使用する場合<br>
TeX ファイルの行番号に対応する PDF ファイルの該当するページにジャンプします．<br>

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Windows\System32\cmd.exe</ins><br>

<br>

View project's output<br>
(●) Command line argument　　◯ DDE command<br>
Command <ins>/c "%bm.pdf"</ins><br>

<br>

<br>

Forward search<br>
(●) Command line argument　　◯ DDE command<br>
Command <ins>/c synctex view -i "%l:0:%Wc" -o "%bm.pdf" -x "pdfopen --r15 --file '&#x25;&#x25;{output}' --page &#x25;&#x25;{page+1}"</ins><br>

<br>

<br>

Close document before running (La)TeX<br>
(●) Command line argument　◯ DDE command　　◯ Do not close<br>
Command <ins>/c pdfclose --r15 --file "%bm.pdf"</ins><br>

<br>

***

■ DDE を使用する場合<br>
PDF ファイルの先頭ページにジャンプします．<br>

***

<span style="color:#2E3436;background-color:#2E3436;"><ins>　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ (La)TeX　　　\]\[ Preprocessor \]\[ Postprocessor \]</ins></span><strong>\[ Viewer　　　\]</strong><br>

Executable path<br>

<br>

<ins>C:\Program Files (x86)\Adobe\Acrobat Reader DC\Reader\AcroRd32.exe</ins><br>

<ins>C:\Program Files\Adobe\Acrobat Reader DC\Reader\AcroRd32.exe</ins><br>

<br>

View project's output<br>
◯ Command line argument　　(●) DDE command<br>
Command <ins>\[DocOpen("%bm.pdf")\]\[FileOpen("%bm.pdf")\]</ins><br>
Server: <ins>acroviewR15</ins>　　　　　　Topic: <ins>control</ins><br>

<br>

Forward search<br>
◯ Command line argument　　(●) DDE command<br>
Command <ins>\[DocOpen("%bm.pdf")\]\[FileOpen("%bm.pdf")\]\[DocGoTo("%bm.pdf",0)\]</ins><br>
Server: <ins>acroviewR15</ins>　　　　　　Topic: <ins>control</ins><br>

<br>

Close document before running (La)TeX<br>
◯ Command line argument　(●) DDE command　　◯ Do not close<br>
Command <ins>\[DocClose("%bm.pdf")\]</ins><br>
Server: <ins>acroviewR15</ins>　　　　　　Topic: <ins>control</ins><br>

<br>

***

## SumatraPDF との連携 {#yfd68060}

Command line arguments to pass to the compiler: に -synctex=1 を追加します．

### forward and inverse search {#e049aa23}

forward and inverse search は PDF Viewer の [SumatraPDF](/TeXnicCenter/#pdc24230) の項を参考に設定してください．<br>
inverse search は Executable path に追加する代わりに SumatraPDF の \[☰\]-\[設定(S)\]-\[オプション(O)...\] の逆順検索コマンドラインの設定に以下の設定を追加しても OK です．<br>

```
"C:\Program Files\TeXnicCenter\TeXnicCenter.exe" /ddecmd "[goto('%f', '%l')]"
```

## 使い方 {#f25094fe}

TeXnicCenter の使い方に関する詳細については<br>
[Welcome to the documentation of TeXnicCenter &mdash; TeXnicCenter v2.0 documentation](http://texniccenter.sourceforge.net/)<br>
を参照してください．<br>

### プロジェクトの作成 {#td4273eb}

\[File\]-\[New\]-\[Project...\] で新規プロジェクトを作成します．

### 補完 {#tcdb30cc}

Ctrl + Space で補完ができます．

doc とタイプして Ctrl + Space をタイプすると

```
\begin{document}

\end{document}
```

を補完してくれます．

ite とタイプして Ctrl + Space をタイプすると

```
\begin{itemize}
	\item 
\end{itemize}
```

を補完してくれます．

### プロファイルの変更 {#t5967111}

\[Build\]-\[Select Output Profile...\] またはツールバーからプロファイルを変更できます．

dvipdfmx で PDF ファイルを作成する場合は，プロファイルを LaTeX => DVI => PDF に変更します．

### ビルド {#i6bfece2}

\[Build\]-\[Build Output\] をクリックします．

エラーが見つかれば，×印が表示され，クリックするとエラー箇所にジャンプします．

間違った箇所を修正してもう一度ビルドします．

### 表示 {#w010da2b}

\[Build\]-\[View Output\] で対応するプロファイルの出力ファイルが表示されます．

\[Build\]-\[Build and View Output\] でビルドと表示ができます．

### 折りたたみ {#r2ac1196}

\[View\]-\[Fold Margin\] で折りたたみできます．

## 関連リンク {#r73017f2}

- [WindowsでTeXをeclipseみたいな感じで作れるTeXnicCenter　その２](http://blog.goo.ne.jp/xmldtp/e/6c445d6fca39c15d20103bb28264384a)
- [WindowsでTeXをeclipseみたいな感じで作れるTeXnicCenter　その１](http://blog.goo.ne.jp/xmldtp/e/3694c7b9cef534f3555b1bc41a96b5de)
- [TexnicCenter2.0の日本語使用について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=794)
- [工大院生の学生メモ : Texniccenter](http://blog.livedoor.jp/gastttt3678/archives/2846954.html)
- [Newest &#39;texniccenter&#39; Questions - TeX - LaTeX - Stack Exchange](http://tex.stackexchange.com/questions/tagged/texniccenter)
- [DDE Message of Acrobat and Adobe Reader](http://acrobat-dde.nnn2.com/)
