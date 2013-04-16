---
title: "dvisvgm"
url: "/dvisvgm/"
date: 2012-08-22T16:08:53Z
pukiwiki: "dvisvgm"
---

# dvisvgm

## [dvisvgm](http://dvisvgm.sourceforge.net/) {#hefd7ca2}

dvisvgm は DVI/EPS ファイルを SVG ファイルに変換するソフトウェアです．<br>

- [dvisvgm](http://dvisvgm.sourceforge.net/)
- [dvisvgm / Wiki / Home](http://sourceforge.net/p/dvisvgm/wiki/)

### License {#b1b30f5a}

[GPLv3](http://sourceforge.net/p/dvisvgm/code/ci/tip/tree/COPYING)

### リリース情報 {#t6f93e11}

- [dvisvgm: News](http://dvisvgm.sourceforge.net/News)
- [dvisvgm / News](http://sourceforge.net/p/dvisvgm/news/)
- [dvisvgm / Code / tip / NEWS](http://sourceforge.net/p/dvisvgm/code/ci/tip/tree/NEWS)

### ChangeLog {#j5462a82}

- [log](http://sourceforge.net/p/dvisvgm/code/ci/tip/log/)
- [dvisvgm / Code / Browse Commits](http://sourceforge.net/p/dvisvgm/code/commit_browser)
- \[[texlive\] Index of /trunk/Build/source/texk/dvisvgm](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvisvgm/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvisvgm/?view=log)

### 使い方 {#he5a75c1}

DVI ファイルを SVG ファイルに変換する場合は

```
$ dvisvgm hoge.dvi
```

EPS ファイルを SVG ファイルに変換する場合は

```
$ dvisvgm -E hoge.eps
```

dvisvgm を使用して SVG ファイルに変換した場合はテキストデータも保持されます．<br>

DVI ファイルを PDF ファイルに変換して [Inkscape](/Inkscape/) を使用して PDF ファイルをインポートして SVG ファイルに出力する方法もあります．<br>
この場合もテキストデータが保持されます．<br>

日本語を使用したい場合は DVI ファイルを PDF ファイルに変換して poppler の pdftocairo を使えば簡単に SVG ファイルに変換できます．<br>

```

$ pdftocairo -svg hoge.pdf
```

ただし pdftocairo を使用して SVG ファイルに変換した場合はテキストデータが失われてしまうようです．<br>
