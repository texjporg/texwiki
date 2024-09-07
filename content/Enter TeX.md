---
title: "Enter TeX"
url: "/Enter TeX/"
date: 2024-09-07T19:23:22Z
pukiwiki: "Enter TeX"
---

# Enter TeX

## [Enter TeX](https://gitlab.gnome.org/swilmet/enter-tex) {#e966f73d}

***

***

## Enter TeX とは {#h4d58d3b}

Enter TeX は TeX/LaTeX エディタです．
SyncTeX に対応しています．

- [Sébastien Wilmet / enter-tex · GitLab](https://gitlab.gnome.org/swilmet/enter-tex)

### 動作環境 {#a52783ff}

Windows, macOS, Linux

### License {#a34a81c6}

[GPLv3](https://gitlab.gnome.org/swilmet/enter-tex/-/blob/main/LICENSES/GPL-3.0-or-later.txt)

### リリース情報/ChangeLog {#p49a2369}

- [Sébastien Wilmet / enter-tex · GitLab](https://gitlab.gnome.org/swilmet/enter-tex)
    - [NEWS](https://gitlab.gnome.org/swilmet/enter-tex/-/blob/main/NEWS)
    - [タグ](https://gitlab.gnome.org/swilmet/enter-tex/-/tags)
    - [コミットログ](https://gitlab.gnome.org/swilmet/enter-tex/-/commits/main)

<!-- *不具合 [#o7b20b21] -->

## インストール {#b3035bdc}

### Windows {#xe7a69b8}

- [https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-gnome-latex](https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-gnome-latex)

Windows 版 GNOME LaTeX は MSYS2 の pacman でインストールできます．

```
pacman -S mingw-w64-x86_64-gnome-latex
```

を実行します．

### macOS {#b3c38ac4}

- [https://formulae.brew.sh/formula/gnome-latex](https://formulae.brew.sh/formula/gnome-latex)
    - [https://github.com/Homebrew/homebrew-core/blob/master/Formula/g/gnome-latex.rb](https://github.com/Homebrew/homebrew-core/blob/master/Formula/g/gnome-latex.rb)

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
<!-- :|latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$biber=q/biber %O - -bblencoding=utf8 -u -U - -output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$filename" -->
<!-- :Post Processor| -->
<!-- :|latexmk -->
<!--  -->
<!-- [Build] &gt; [LaTeX → DVI → PDF (Latexmk)] で実行できます． -->

### Personal build tools {#kcfc97ba}

#### LuaLaTeXmk {#s8b1424d}

Commands
: &nbsp;

: latexmk -e '$lualatex=q/lualatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdflua "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\] &gt; \[LuaLaTeXmk\] で実行できます．

## Evince との連携 {#t97f1692}

### forward search {#o187dfd8}

\[Search\] &gt; \[Search Forward\] または Ctrl+Alt+F で forward search ができます．

### inverse search {#tc58bb85}

Evince 上で Ctrl + 左クリックを実行すると TeX 文書の対応する行にジャンプします．
