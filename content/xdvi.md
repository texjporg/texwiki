---
title: "xdvi"
url: "/xdvi/"
date: 2013-05-12T16:30:08Z
pukiwiki: "xdvi"
---

# xdvi

## xdvi {#s73ab198}

xdvi は Unix 系 OS で動作する DVI ビューアです。

xdvi を使用すると，日本語が表示されないといった問題が発生する場合があります（[古い情報](</古い情報/#je1d5241>)もご覧ください）。
現在は DVI ではなく PDF でのプレビューが推奨されています。

以下の情報はアーカイブとして残しておきます。
極力削除はお控えください。[forum:1013](https://okumuralab.org/tex/mod/forum/discuss.php?d=1013) の<strong>「削除は原則禁止」</strong>の合意事項に基づきます。

***

***

## [xdvik](http://xdvi.sourceforge.net/) <a id="xdvik"></a> {#s47919ef}

### xdvik とは {#de90c407}

xdvik は DVI プレビューアです。
xdvi を Kpathsea ライブラリに対応させたものです。

- [Xdvik Homepage](http://xdvi.sourceforge.net/)
- [xdvi](http://math.berkeley.edu/~vojta/xdvi.html)

### 動作環境 {#y90c90d1}

X Window System

### ChangeLog {#p61511cc}

- [SourceForge.net Repository - \[xdvi\] Contents of /xdvik/texk/xdvik/CHANGES](http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/CHANGES?view=markup)
- [http://sourceforge.net/p/xdvi/activity/](http://sourceforge.net/p/xdvi/activity/)
- \[[texlive\] Index of /trunk/Build/source/texk/xdvik](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/?view=log)
    - [CHANGES](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/CHANGES?view=markup)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/ChangeLog?view=markup)
- [http://pkgsrc.se/print/tex-xdvi](http://pkgsrc.se/print/tex-xdvi)

### インストール {#jfa6e6ec}

xdvik は [TeX Live](</TeX Live/>) に含まれています。

### 注意点 {#mfca3e3a}

#### xdvi で DVI ファイルを表示するとコンソールに Warning: Cannot convert string ... が表示される {#l9a6d5b3}

xdvi で DVI ファイルを表示するとコンソールに Warning: Cannot convert string ... が表示されることがあります。

```
Warning: Cannot convert string "-*-helvetica-medium-r-*-*-12-*-*-*-*-*-*" to type FontStruct
Warning: Cannot convert string "-*-helvetica-medium-r-*-*-10-*-*-*-*-*-*" to type FontStruct
```

ターミナルから以下の作業を行います。

```
$ cd /usr/local/texlive/????/texmf-dist/xdvi
$ sudo cp XDvi XDvi.org
```

OS X の場合

```
$ brew install gnu-sed
$ sudo gsed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo gsed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

Linux の場合

```
$ sudo sed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo sed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

### 使い方 {#m5b0a3d2}

以下の様な文書を作成して hoge.tex という名前で UTF-8 で保存します。

```
\ifdefined\kanjiskip
  \documentclass[uplatex]{jsarticle}
\else
  \documentclass{scrartcl}
  \usepackage[whole]{bxcjkjatype}
\fi
\begin{document}
```

```
吾輩は猫である。名前はまだ無い。
```

```
どこで生れたかとんと見当がつかぬ。
何でも薄暗いじめじめした所で
ニャーニャー泣いていた事だけは記憶している。
吾輩はここで始めて人間というものを見た。
```

```
\end{document}
```

hoge.tex を LaTeX で処理します。

```
$ latex -synctex=1 hoge
```

[CJK-LaTeX/BXcjkjatype](/LaTeX-CJK/) を使用すれば日本語化されていない xdvi でも日本語が表示できます。

DVI ファイルを表示するには

```
$ xdvi -nofork -unique -watchfile 1 'hoge.dvi' &
```

または

```
$ xdvi -nofork -unique -watchfile 1 "hoge.dvi" &
```

を実行します。

PDF ファイルに出力する場合は

```
$ ptex2pdf -u -l -ot "-synctex=1" hoge
```

または

```
$ pdflatex -synctex=1 hoge
```

を実行します。

#### コマンドラインオプション {#ce42827f}

- [http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/main.c?view=markup](http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/main.c?view=markup)

### SyncTeX {#g4e4f193}

xdvi は [SyncTeX](/SyncTeX/) には対応していませんが synctex コマンドを使用して forward and inverse search を行うことができます。

#### forward search {#ic1815e4}

TeX ファイルの 30 行目に対応する DVI ファイルの該当するページにジャンプしたい場合は

```
$ synctex view -i '30:0:hoge.tex' -o 'hoge.dvi' -x 'xdvi -nofork -unique -watchfile 1 +%{page+1} "%{output}"' &
```

または

```
$ synctex view -i "30:0:hoge.tex" -o "hoge.dvi" -x "xdvi -nofork -unique -watchfile 1 +%{page+1} '%{output}'" &
```

のように実行します。

詳細については

```
$ synctex help view
```

を参照してください。

#### inverse search {#wcff3889}

[TeXstudio](/TeXstudio/) で DVI ファイルの 30 ページ目の x 座標 0, y 座標 0 に対応する TeX ファイルの該当する行にジャンプしたい場合は

```
$ synctex edit -o '30:0:0:hoge.dvi' -x 'texstudio -line %{line} "%{input}"'
```

または

```
$ synctex edit -o "30:0:0:hoge.dvi" -x "texstudio -line %{line} '%{input}'"
```

のように実行します。

詳細については

```
$ synctex help edit
```

を参照してください。

## [pxdvi](</TeX Live/#tlptexlive>) <a id="pxdvi"></a> {#s1b173bb}

### pxdvi とは {#e137631f}

pxdvi は (e-)(u)pTeX で出力された DVI ファイルに対応した DVI プレビューアです。
pxdvi は xdvik を (e-)(u)pTeX に対応させたものです。

- [tlptexlive](</TeX Live/#tlptexlive>)
- [xdvik 日本語化パッチ整理プロジェクト](http://xdvi.osdn.jp/)
- [MLアーカイブ: users - xdvi-jp-cleanup - OSDN](http://osdn.jp/projects/xdvi/lists/archive/users/)
- [pxdvi の使用用途について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=731)
- [Cygwin の xdvi で日本語を表示する](http://proglab.blog.fc2.com/blog-entry-26.html)

### ChangeLog {#y0777637}

- [https://github.com/norbusan/tlptexlive-root/commits/master](https://github.com/norbusan/tlptexlive-root/commits/master)
- [https://github.com/norbusan/build-tlptexlive/commits/master](https://github.com/norbusan/build-tlptexlive/commits/master)
- [https://svnweb.freebsd.org/ports/head/print/tex-xdvik/files/](https://svnweb.freebsd.org/ports/head/print/tex-xdvik/files/)
    - [https://svnweb.freebsd.org/ports/head/print/tex-xdvik/files/?view=log](https://svnweb.freebsd.org/ports/head/print/tex-xdvik/files/?view=log)

### インストール <a id="pxdviinstall"></a> {#cce5d1ed}

pxdvi は [tlptexlive](</TeX Live/#tlptexlive>) からインストールできます。

インストール方法は [http://www.preining.info/blog/software-projects/tlptexlive/](http://www.preining.info/blog/software-projects/tlptexlive/) を参照してください。

### 注意点など {#uca9d6da}

[xdvik](/xdvi/#s47919ef) と同様です。コマンド名は xdvi ではなく pxdvi です。
