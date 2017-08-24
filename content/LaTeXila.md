---
title: "LaTeXila"
url: "/LaTeXila/"
date: 2013-02-23T04:37:16Z
pukiwiki: "LaTeXila"
---

# LaTeXila

## [LaTeXila](https://wiki.gnome.org/Apps/LaTeXila) {#e966f73d}

***

***

## LaTeXila とは {#h4d58d3b}

LaTeXila は LaTeX 統合環境 (LaTeX エディタ) です．
SyncTeX に対応しています．

- [LaTeXila - LaTeX editor for GNOME](https://wiki.gnome.org/Apps/LaTeXila)

### 動作環境 {#a52783ff}

Windows, macOS, Linux

### License {#a34a81c6}

[GPLv3](https://git.gnome.org/browse/latexila/tree/COPYING)

### リリース情報/ChangeLog {#p49a2369}

- [latexila - LaTeXila, an Integrated LaTeX Environment](https://git.gnome.org/browse/latexila/)
    - [NEWS](https://git.gnome.org/browse/latexila/plain/NEWS)
    - [log](https://git.gnome.org/browse/latexila/log/)
- [GNOME/latexila · GitHub](https://github.com/GNOME/latexila)
    - [NEWS](https://github.com/GNOME/latexila/blob/master/NEWS)
    - [コミットログ](https://github.com/GNOME/latexila/commits/master)

<!-- *不具合 [#o7b20b21] -->

## インストール {#b3035bdc}

### Windows {#xe7a69b8}

Windows 版 LaTeXila は MSYS2 の pacman でインストールできます．

64-bit LaTeXila の場合は

```
pacman -S mingw-w64-x86_64-latexila
```

32-bit LaTeXila の場合は

```
pacman -S mingw-w64-i686-latexila
```

### macOS {#b3c38ac4}

- [https://github.com/Homebrew/homebrew-core/blob/master/Formula/latexila.rb](https://github.com/Homebrew/homebrew-core/blob/master/Formula/latexila.rb)

```
brew install latexila
```

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
<!-- となっています． -->
<!-- デフォルトの設定を削除して以下のように設定します． -->
<!--  -->
<!-- :Commands| -->
<!-- :|latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O - -bblencoding=utf8 -u -U - -output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$filename" -->
<!-- :Post Processor| -->
<!-- :|latexmk -->
<!--  -->
<!-- [Build]-[LaTeX → DVI → PDF (Latexmk)] で実行できます． -->

### Personal build tools {#kcfc97ba}

#### Latexmk-upLaTeX {#q6b26226}

Commands
: &nbsp;

: latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\]-\[Latexmk-upLaTeX\] で実行できます．

#### Latexmk-LuaLaTeX {#s8b1424d}

Commands
: &nbsp;

: latexmk -e '$lualatex=q/lualatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdflua "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\]-\[Latexmk-LuaLaTeX\] で実行できます．

## Evince との連携 {#t97f1692}

### forward search {#o187dfd8}

\[Search\]-\[Search Forward\] または Ctrl+Alt+F で forward search ができます．

### inverse search {#tc58bb85}

Evince 上で Ctrl + 左クリックを実行すると TeX 文書の対応する行にジャンプします．
