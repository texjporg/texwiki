---
title: "Enter TeX"
url: "/Enter TeX/"
date: 2024-09-07T19:23:22Z
pukiwiki: "Enter TeX"
---

# Enter TeX

## [Enter TeX](https://gitlab.gnome.org/World/gedit/enter-tex) {#e966f73d}

***

***

## Enter TeX とは {#h4d58d3b}

Enter TeX は TeX/LaTeX エディタです．
SyncTeX に対応しています．

バージョン 3.47.0 (2024-09-14) から Enter TeX という名前に変更されました。バージョン 3.27.2 (2018-01-17) から 3.46.0 (2023-07-29) までは GNOME LaTeX、バージョン 0.0.1 (2009-09-02) から 3.27.1 (2017-12-09) までは LaTeXila という名前でした。

- [World / gedit / enter-tex · GitLab](https://gitlab.gnome.org/World/gedit/enter-tex)
- [Enter TeX | Gedit Technology blog](https://gedit-text-editor.org/blog/2025-02-11-enter-tex.html)
- [Enter TeX Reference Manual: Enter TeX Reference Manual](https://gedit-text-editor.org/developer-docs/enter-tex/)

### 動作環境 {#a52783ff}

Windows, macOS, Linux

### License {#a34a81c6}

[GPLv3](https://gitlab.gnome.org/World/gedit/enter-tex/-/blob/main/LICENSES/GPL-3.0-or-later.txt)

### リリース情報/ChangeLog {#p49a2369}

- [World / gedit / enter-tex · GitLab](https://gitlab.gnome.org/World/gedit/enter-tex)
    - [NEWS](https://gitlab.gnome.org/World/gedit/enter-tex/-/blob/main/NEWS)
    - [タグ](https://gitlab.gnome.org/World/gedit/enter-tex/-/tags)
    - [コミットログ](https://gitlab.gnome.org/World/gedit/enter-tex/-/commits/main)
- [https://download.gnome.org/sources/enter-tex/](https://download.gnome.org/sources/enter-tex/)
    - [https://download.gnome.org/sources/enter-tex/cache.json](https://download.gnome.org/sources/enter-tex/cache.json)

<!-- *不具合 [#o7b20b21] -->

## インストール {#b3035bdc}

### Windows {#xe7a69b8}

- [https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-enter-tex](https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-enter-tex)
- [https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-enter-tex](https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-enter-tex)
- [https://packages.msys2.org/packages/mingw-w64-clang-x86_64-enter-tex](https://packages.msys2.org/packages/mingw-w64-clang-x86_64-enter-tex)
- [https://packages.msys2.org/packages/mingw-w64-clang-aarch64-enter-tex](https://packages.msys2.org/packages/mingw-w64-clang-aarch64-enter-tex)

MSYS2 の pacman でインストールできます．UCRT64 環境で

```
pacman -S mingw-w64-ucrt-x86_64-enter-tex
```

を実行します．

### macOS {#b3c38ac4}

- [https://formulae.brew.sh/formula/enter-tex](https://formulae.brew.sh/formula/enter-tex)

```
brew install enter-tex
```

### Arch Linux/Manjaro Linux {#z0c32b42}

- [https://archlinux.org/packages/?sort=&q=enter-tex](https://archlinux.org/packages/?sort=&q=enter-tex)

```
sudo pacman -S enter-tex
```

### Linux Mint/Debian/Ubuntu {#i25e2946}

- [https://packages.debian.org/search?keywords=enter-tex](https://packages.debian.org/search?keywords=enter-tex)
- [https://packages.ubuntu.com/ja/enter-tex](https://packages.ubuntu.com/ja/enter-tex)

```
sudo apt install enter-tex
```

### openSUSE {#z63d593b}

- [https://software.opensuse.org/package/enter-tex](https://software.opensuse.org/package/enter-tex)

```
sudo zypper install enter-tex
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
<!-- [Build] &gt; [LaTeX → DVI → PDF (Latexmk)] で実行できます。 -->

### Personal build tools {#kcfc97ba}

#### LuaLaTeXmk {#s8b1424d}

Commands
: &nbsp;

: latexmk -e '$lualatex=q/lualatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdflua "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\] &gt; \[LuaLaTeXmk\] で実行できます。

#### upLaTeXmk {#q6b26226}

Commands
: &nbsp;

: latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$filename"

Post Processor
: &nbsp;

: latexmk

\[Build\] &gt; \[upLaTeXmk\] で実行できます。
