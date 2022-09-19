---
title: "GNOME LaTeX"
url: "/GNOME LaTeX/"
date: 2018-02-17T12:18:32Z
pukiwiki: "GNOME LaTeX"
---

# GNOME LaTeX

## [GNOME LaTeX](https://wiki.gnome.org/Apps/GNOME-LaTeX) {#e966f73d}

***

***

## GNOME LaTeX とは {#h4d58d3b}

GNOME LaTeX は LaTeX 統合環境 (LaTeX エディタ) です．
SyncTeX に対応しています．

- [Apps/GNOME-LaTeX - GNOME Wiki!](https://wiki.gnome.org/Apps/GNOME-LaTeX)

### 動作環境 {#a52783ff}

Windows, macOS, Linux

### License {#a34a81c6}

[GPLv3](https://gitlab.gnome.org/GNOME/gnome-latex/blob/master/COPYING)

### リリース情報/ChangeLog {#p49a2369}

- [GNOME / gnome-latex · GitLab](https://gitlab.gnome.org/GNOME/gnome-latex)
    - [NEWS](https://gitlab.gnome.org/GNOME/gnome-latex/blob/master/NEWS)
    - [コミットログ](https://gitlab.gnome.org/GNOME/gnome-latex/commits/master)
- [GitHub - GNOME/gnome-latex: GNOME LaTeX, a LaTeX editor](https://github.com/GNOME/gnome-latex)
    - [NEWS](https://github.com/GNOME/gnome-latex/blob/master/NEWS)
    - [コミットログ](https://github.com/GNOME/gnome-latex/commits/master)

<!-- *不具合 [#o7b20b21] -->

## インストール {#b3035bdc}

### Windows {#xe7a69b8}

- [https://github.com/Alexpux/MINGW-packages/tree/master/mingw-w64-gnome-latex](https://github.com/Alexpux/MINGW-packages/tree/master/mingw-w64-gnome-latex)

Windows 版 GNOME LaTeX は MSYS2 の pacman でインストールできます．

64-bit GNOME LaTeX の場合は

```
pacman -S mingw-w64-x86_64-gnome-latex
```

32-bit GNOME LaTeX の場合は

```
pacman -S mingw-w64-i686-gnome-latex
```

を実行します．

### macOS {#b3c38ac4}

- [https://formulae.brew.sh/formula/gnome-latex](https://formulae.brew.sh/formula/gnome-latex)
    - [https://github.com/Homebrew/homebrew-core/blob/master/Formula/gnome-latex.rb](https://github.com/Homebrew/homebrew-core/blob/master/Formula/gnome-latex.rb)

```
brew install gnome-latex
```

### Arch Linux/Manjaro Linux {#z0c32b42}

- [https://www.archlinux.org/packages/?name=gnome-latex](https://www.archlinux.org/packages/?name=gnome-latex)

```
sudo pacman -S gnome-latex
```

### openSUSE {#z63d593b}

- [https://software.opensuse.org/package/gnome-latex](https://software.opensuse.org/package/gnome-latex)

```
sudo zypper install gnome-latex
```

## Build Tool {#t1320044}

\[Build\] &gt; \[Manage Build Tools\]

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
<!-- [Build] &gt; [LaTeX → DVI → PDF (Latexmk)] で実行できます． -->

### Personal build tools {#kcfc97ba}

#### Latexmk-upLaTeX {#q6b26226}

Commands
: &nbsp;

: latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\] &gt; \[Latexmk-upLaTeX\] で実行できます．

#### Latexmk-LuaLaTeX {#s8b1424d}

Commands
: &nbsp;

: latexmk -e '$lualatex=q/lualatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdflua "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\] &gt; \[Latexmk-LuaLaTeX\] で実行できます．

## Evince との連携 {#t97f1692}

### forward search {#o187dfd8}

\[Search\] &gt; \[Search Forward\] または Ctrl+Alt+F で forward search ができます．

### inverse search {#tc58bb85}

Evince 上で Ctrl + 左クリックを実行すると TeX 文書の対応する行にジャンプします．
