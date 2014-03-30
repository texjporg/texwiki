---
title: "dvisvgm"
url: "/dvisvgm/"
date: 2012-08-22T16:08:53Z
pukiwiki: "dvisvgm"
---

# dvisvgm

dvisvgm で問題が発生する場合は <strong>dvisvgm を使用せず PDF ファイルで出力して [MuPDF](/MuPDF/) の mudraw を使用する</strong>方法があります。<br>

## [dvisvgm](http://dvisvgm.sourceforge.net/) → 問題が発生する場合は PDF ファイルで出力して [MuPDF](/MuPDF/) の mudraw を使用する {#hefd7ca2}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## dvisvgm とは {#xb898030}

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
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvisvgm/ChangeLog?view=markup)

## 使い方 {#he5a75c1}

### DVI -> SVG {#e2526b87}

dvisvgm 1.5 以降は pTeX で作成された DVI ファイルと XeTeX で作成された &#x58;DV ファイルに対応しているので日本語が使用できます．<br>

DVI ファイルを SVG ファイルに変換する場合は

```
$ dvisvgm hoge.dvi
```

EPS ファイルを SVG ファイルに変換する場合は

```
$ dvisvgm -E hoge.eps
```

dvisvgm を使用して SVG ファイルに変換した場合はテキストデータも保持されます．<br>

### DVI -> PDF -> Inkscape -> SVG {#y57cab44}

DVI ファイルを PDF ファイルに変換して [Inkscape](/Inkscape/) を使用して PDF ファイルをインポートして SVG ファイルに出力する方法もあります．<br>
Inkscape を使用する場合もテキストデータが保持されます．<br>

### DVI -> PDF -> MuPDF (mudraw) -> SVG {#pe2bf0a7}

DVI ファイルを PDF ファイルに変換して [MuPDF](/MuPDF/) の mudraw を使えば PDF ファイルを SVG ファイルに変換できます．<br>
MuPDF の mudraw を使用する場合もテキストデータが保持されます．<br>
PDF ファイルの余白を削除する場合は pdfcrop を使用してください．<br>

```

$ mudraw -o hoge.svg hoge.pdf
```

### DVI -> PDF -> Poppler (pdftocairo) -> SVG {#dbe3e3c1}

DVI ファイルを PDF ファイルに変換して [Poppler](/Poppler/) の pdftocairo を使えば PDF ファイルを SVG ファイルに変換できます．<br>
ただし pdftocairo を使用して SVG ファイルに変換した場合はテキストデータが失われて文字列のコピーができなくなります．<br>
PDF ファイルの余白を削除する場合は pdfcrop を使用してください．<br>

```

$ pdftocairo -svg hoge.pdf
```

## 関連リンク {#b9432180}

- [dvisvgm : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/dvisvgm)
