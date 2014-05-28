---
title: "dvisvgm"
url: "/dvisvgm/"
date: 2012-08-22T16:08:53Z
pukiwiki: "dvisvgm"
---

# dvisvgm

## [dvisvgm](http://dvisvgm.sourceforge.net/) {#hefd7ca2}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## dvisvgm とは {#xb898030}

dvisvgm は DVI/&#x58;DV/EPS ファイルを SVG ファイルに変換するソフトウェアです．<br>
TeX Live 2014 (dvisvgm 1.6) 以降は (e-)upTeX で作成された DVI ファイルと XeTeX で作成された &#x58;DV ファイルに対応しているので日本語が使用できます．<br>

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

dvisvgm で問題が発生する場合は PDF ファイルで出力して [MuPDF](/MuPDF/) の mudraw を使用する方法があります。<br>

### DVI/&#x58;DV/EPS -> dvisvgm -> SVG {#e2526b87}

TeX Live 2014 (dvisvgm 1.6) 以降は (e-)upTeX で作成された DVI ファイルと XeTeX で作成された &#x58;DV ファイルに対応しているので日本語が使用できます．<br>

```
\ifdefined\kanjiskip
  \documentclass[uplatex]{jsarticle}
\else
  \ifdefined\pdfoutput
    \documentclass[latex]{bxjsarticle}
    \usepackage[whole]{bxcjkjatype}
  \else
    \documentclass[xelatex]{bxjsarticle}
    \usepackage{zxjatype}
    \setjamainfont{ipam.ttf}
  \fi
\fi
\usepackage[active,tightpage]{preview}
\begin{document}
\begin{preview}

吾輩は猫である。名前はまだ無い。

どこで生れたかとんと見当がつかぬ。
何でも薄暗いじめじめした所で
ニャーニャー泣いていた事だけは記憶している。
吾輩はここで始めて人間というものを見た。

\end{preview}
\end{document}
```

upLaTeX で出力された DVI ファイルを SVG ファイルに変換する場合は

```
$ uplatex hoge.tex
$ dvisvgm hoge.dvi
```

XeLaTeX で出力された &#x58;DV ファイルを SVG ファイルに変換する場合は

```
$ xelatex -no-pdf hoge.tex
$ dvisvgm hoge.xdv
```

LaTeX で出力された DVI ファイルを EPS ファイルに変換して EPS ファイルを SVG ファイルに変換する場合は

```
$ latex hoge.tex
$ dvips -E -o hoge.eps hoge.dvi
$ dvisvgm -E hoge.eps
```

dvisvgm を使用して DVI ファイル，XDV ファイルを SVG ファイルに変換した場合はテキストデータも保持されます．<br>
dvisvgm を使用して EPS ファイルを SVG ファイルに変換した場合はテキストデータが失われて文字列のコピーができなくなります．<br>

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
- [LaTeX dviをsvgに変換 (dvisvgm)](http://www.yamamo10.jp/yamamoto/comp/latex/dvisvgm/)
