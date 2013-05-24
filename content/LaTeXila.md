---
title: "LaTeXila"
url: "/LaTeXila/"
date: 2013-02-23T04:37:16Z
pukiwiki: "LaTeXila"
---

# LaTeXila

## [LaTeXila](http://projects.gnome.org/latexila/) {#e966f73d}

<img src="http://projects.gnome.org/latexila/images/logo.png" alt="LaTeXila" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## LaTeXila とは {#h4d58d3b}

LaTeXila は LaTeX 統合環境 (LaTeX エディタ) です．<br>
SyncTeX に対応しています．<br>

- [LaTeXila - LaTeX editor for GNOME](http://projects.gnome.org/latexila/)

### 動作環境 {#a52783ff}

GNOME

### License {#a34a81c6}

[GPLv3](https://git.gnome.org/browse/latexila/tree/COPYING)

### リリース情報/ChangeLog {#p49a2369}

- [latexila - LaTeXila, an Integrated LaTeX Environment](https://git.gnome.org/browse/latexila/)
    - [NEWS](https://git.gnome.org/browse/latexila/plain/NEWS)
    - [log](https://git.gnome.org/browse/latexila/log/)
- [swilmet/latexila · GitHub](https://github.com/swilmet/latexila)
    - [NEWS](https://github.com/swilmet/latexila/blob/master/NEWS)
    - [コミットログ](https://github.com/swilmet/latexila/commits/master)

### インストール {#scad45f9}

[Installation](http://projects.gnome.org/latexila/#installation) を参照．

<!-- ***OpenBSD [#v124e0d8] -->
<!--  -->
<!-- -http://openports.se/x11/gnome/latexila -->

## 不具合 {#o7b20b21}

### LaTeXila 2.8.1 で \section{hoge} で hoge を削除して ibus-kkc でかな漢字変換をすると Segmentation fault (コアダンプ) {#xf55798b}

LaTeXila 2.8.1 で

```
\section{hoge}
```

で hoge を削除して ibus-kkc でかな漢字変換をすると Segmentation fault (コアダンプ) が発生します．

## Build Tool {#t1320044}

\[Build\]-\[Manage Build Tools\]

### Personal build tools {#kcfc97ba}

#### Latexmk-pdfpLaTeX {#hcba291f}

Commands
: &nbsp;

: latexmk -e '$latex=q/platex -synctex=1/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi $filename

Post Processor
: &nbsp;

: latexmk

\[Build\]-\[Latexmk-pdfpLaTeX\] で実行できます

## Evince との連携 {#t97f1692}

LaTeXila 2.5.3 以降は SyncTeX に対応しています．<br>

### forward search {#o187dfd8}

\[Search\]-\[Search Forward\] または Ctrl+Alt+F で forward search ができます．<br>

### inverse search {#tc58bb85}

Evince 上で Ctrl + 左クリックを実行すると TeX 文書の対応する行にジャンプします．<br>
