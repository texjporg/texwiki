---
title: "LaTeXila"
url: "/LaTeXila/"
date: 2013-02-23T04:37:16Z
pukiwiki: "LaTeXila"
---

# LaTeXila

## [LaTeXila](https://wiki.gnome.org/Apps/LaTeXila) (非推奨) → [TeXstudio](/TeXstudio/), [LyX](/LyX/), [TeXworks](/TeXworks/) などの統合環境を使用する {#e966f73d}

<img src="https://git.gnome.org/browse/latexila/plain/data/images/app/logo.png" alt="LaTeXila" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## LaTeXila とは {#h4d58d3b}

LaTeXila は LaTeX 統合環境 (LaTeX エディタ) です．<br>
SyncTeX に対応しています．<br>

- [LaTeXila - LaTeX editor for GNOME](https://wiki.gnome.org/Apps/LaTeXila)

### 動作環境 {#a52783ff}

GNOME

### License {#a34a81c6}

[GPLv3](https://git.gnome.org/browse/latexila/tree/COPYING)

### リリース情報/ChangeLog {#p49a2369}

- [latexila - LaTeXila, an Integrated LaTeX Environment](https://git.gnome.org/browse/latexila/)
    - [NEWS](https://git.gnome.org/browse/latexila/plain/NEWS)
    - [log](https://git.gnome.org/browse/latexila/log/)
- [GNOME/latexila · GitHub](https://github.com/GNOME/latexila)
    - [NEWS](https://github.com/GNOME/latexila/blob/master/NEWS)
    - [コミットログ](https://github.com/GNOME/latexila/commits/master)

### インストール {#scad45f9}

[Installation](https://wiki.gnome.org/Apps/LaTeXila#Installation) を参照．

<!-- ***OpenBSD [#v124e0d8] -->
<!--  -->
<!-- -http://openports.se/x11/gnome/latexila -->

## 不具合 {#o7b20b21}

### LaTeXila 2.8.2 で \section{hoge} で hoge を削除して fcitx-mozc や ibus-kkc でかな漢字変換をすると Segmentation fault (コアダンプ) → [TeXstudio](/TeXstudio/) を使用する {#xf55798b}

LaTeXila 2.8.2 で

```
\section{hoge}
```

で hoge を削除して fcitx-mozc や ibus-kkc でかな漢字変換をすると Segmentation fault (コアダンプ) が発生します．<br>
[TeXstudio](/TeXstudio/) を使用することで回避できます．<br>

## Build Tool {#t1320044}

\[Build\]-\[Manage Build Tools\]

<!-- **Default build tools [#s9d34304] -->
<!--  -->
<!-- ***LaTeX → DVI → PDF (Latexmk) [#kfbc0e63] -->
<!--  -->
<!-- デフォルトでは -->
<!-- :Commands| -->
<!-- :|latexmk -pdfdvi -synctex=1 $filename -->
<!-- :Post Processor| -->
<!-- :|latexmk -->
<!--  -->
<!-- となっています．~ -->
<!-- デフォルトの設定を削除して以下のように設定します．~ -->
<!--  -->
<!-- :Commands| -->
<!-- :|latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$makeindex=q/mendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$filename" -->
<!-- :Post Processor| -->
<!-- :|latexmk -->
<!--  -->
<!-- [Build]-[LaTeX → DVI → PDF (Latexmk)] で実行できます．~ -->

### Personal build tools {#kcfc97ba}

#### Latexmk-pdfupLaTeX {#q6b26226}

Commands
: &nbsp;

: latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$makeindex=q/mendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\]-\[Latexmk-pdfupLaTeX\] で実行できます．<br>

#### Latexmk-pdfupLaTeX2 {#s6b92cf0}

Commands
: &nbsp;

: latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$makeindex=q/mendex %O -o %D %S/' -e '$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/' -e '$ps2pdf=q/ps2pdf %O %S %D/' -norc -gg -pdfps "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\]-\[Latexmk-pdfupLaTeX2\] で実行できます．<br>

#### Latexmk-pdfLaTeX {#of015905}

Commands
: &nbsp;

: latexmk -e '$pdflatex=q/pdflatex %O -synctex=1 %S/' -e '$bibtex=q/bibtex %O %B/' -e '$makeindex=q/makeindex %O -o %D %S/' -norc -gg -pdf "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\]-\[Latexmk-pdfLaTeX\] で実行できます．<br>

#### Latexmk-LuaLaTeX {#s8b1424d}

Commands
: &nbsp;

: latexmk -e '$pdflatex=q/lualatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$makeindex=q/texindy %O -o %D %S/' -norc -gg -pdf "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\]-\[Latexmk-LuaLaTeX\] で実行できます．<br>

#### Latexmk-LuaJITLaTeX {#hea17a5b}

Commands
: &nbsp;

: latexmk -e '$pdflatex=q/luajitlatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$makeindex=q/texindy %O -o %D %S/' -norc -gg -pdf "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\]-\[Latexmk-LuaJITLaTeX\] で実行できます．<br>

#### Latexmk-XeLaTeX {#c3409718}

Commands
: &nbsp;

: llatexmk -e '$pdflatex=q/xelatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$makeindex=q/texindy %O -o %D %S/' -norc -gg -pdf "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\]-\[Latexmk-XeLaTeX\] で実行できます．<br>

## Evince との連携 {#t97f1692}

### forward search {#o187dfd8}

\[Search\]-\[Search Forward\] または Ctrl+Alt+F で forward search ができます．<br>

### inverse search {#tc58bb85}

Evince 上で Ctrl + 左クリックを実行すると TeX 文書の対応する行にジャンプします．<br>
