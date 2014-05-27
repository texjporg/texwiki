---
title: "dvipng"
url: "/dvipng/"
date: 2004-12-09T17:39:12Z
pukiwiki: "dvipng"
---

# dvipng

## [dvipng](http://www.nongnu.org/dvipng/) {#i1384369}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## dvipngとは？ {#wd523196}

dvipng は dvi ファイルから png 形式の画像を生成するコマンドです。<br>
[preview-latex プロジェクト](http://www.gnu.org/software/auctex/preview-latex.html)の成果物として公開されています。<br>
Version 1.9 から サブフォントに対応しているので、サブフォント機構
を使って作成した dvi の場合には日本語も png 化できます。<br>
mimeTeX 同様、数式をウェブ用の画像に変換するのに役立ちそうです。<br>

- [http://www.nongnu.org/dvipng/](http://www.nongnu.org/dvipng/)
- [http://savannah.nongnu.org/projects/dvipng/](http://savannah.nongnu.org/projects/dvipng/)
- [http://sourceforge.net/projects/dvipng/](http://sourceforge.net/projects/dvipng/)
- [http://www.gnu.org/software/auctex/preview-latex](http://www.gnu.org/software/auctex/preview-latex)

### License {#s323d9c3}

[LGPLv3](http://cvs.savannah.gnu.org/viewvc/dvipng/COPYING.LESSER?root=dvipng&view=markup)

### ChangeLog {#b9b69757}

- \[[texlive\] Index of /trunk/Build/source/texk/dvipng](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipng/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipng/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipng/ChangeLog?view=markup)

## 使い方 {#ic72a209}

### DVI -> dvipng -> PNG {#wff0573c}

[CJK-LaTeX/BXcjkjatype](/LaTeX-CJK/) を使用すれば dvipng でも日本語が使用できます．<br>

DVI ファイルを PNG ファイルに変換する場合は

```
$ dvipng hoge.dvi
```

### DVI -> PDF -> MuPDF (mudraw) -> PNG {#vf3c0c13}

(e-)(u)pTeX で日本語を使用したい場合は DVI ファイルを PDF ファイルに変換して [MuPDF](/MuPDF/) の mudraw を使えば簡単に PNG ファイルに変換できます．<br>
PDF ファイルの余白を削除する場合は pdfcrop を使用してください．<br>

```
$ mudraw -o hoge.png hoge.pdf
```

### DVI -> PDF -> Poppler (pdftocairo) -> PNG {#a65b7c7c}

(e-)(u)pTeX で日本語を使用したい場合は DVI ファイルを PDF ファイルに変換して [Poppler](/Poppler/) の pdftocairo を使えば簡単に PNG ファイルに変換できます．<br>
PDF ファイルの余白を削除する場合は pdfcrop を使用してください．<br>

```
$ pdftocairo -png hoge.pdf
```

## 関連リンク {#d403df71}

- [PXtosb パッケージ \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/pxtosb.html)
- [dvipng - \[物理のかぎしっぽ\]](http://hooktail.org/computer/index.php?dvipng)
- [qa:17730](https://okumuralab.org/~okumura/texfaq/qa/17730.html)
- [qa:51671](https://okumuralab.org/~okumura/texfaq/qa/51671.html)からの議論で、dvi2dviを通してサブフォント化した日本語dviファイルが変換できるようになりました
