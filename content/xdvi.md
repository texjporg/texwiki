---
title: "xdvi"
url: "/xdvi/"
date: 2013-05-12T16:30:08Z
pukiwiki: "xdvi"
---

# xdvi

## xdvi (非推奨) {#s73ab198}

xdvi は X Window System 上で動作する DVI ビューアです。

X Window System には [X.Org](https://www.x.org/)、[VcXsrv](https://github.com/marchaesen/vcxsrv)、[Cygwin/X](https://x.cygwin.com/)、[XQuartz](https://www.xquartz.org/)、[yserver](https://github.com/joske/yserver) などのオープンソースの実装があり Windows, macOS, Linux などで動作します。

xdvi を使用すると，日本語が表示されないといった問題が発生する場合があります（[古い情報](</古い情報/#je1d5241>)もご覧ください）。

このため，<strong>現在は DVI ではなく PDF でのプレビューが推奨されています。</strong>

- [MyTeXpert:xdvi](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?xdvi)

***

***

## [xdvik](http://xdvi.sourceforge.net/) (非推奨) <a id="xdvik"></a> {#s47919ef}

### xdvik とは {#de90c407}

xdvik は DVI プレビューアです。
xdvi を Kpathsea ライブラリに対応させたものです。

- [Xdvik Homepage](http://xdvi.sourceforge.net/)
- [xdvi](https://math.berkeley.edu/~vojta/xdvi.html)

### 動作環境 {#y90c90d1}

X Window System

### ChangeLog {#p61511cc}

- [xdvik / Code (main) / \[HEAD\] /trunk/xdvik](https://sourceforge.net/p/xdvi/code/HEAD/tree/trunk/xdvik/)
    - [log](https://sourceforge.net/p/xdvi/code/log/)
- [https://git.texlive.info/texlive/tree/Build/source/texk/xdvik](https://git.texlive.info/texlive/tree/Build/source/texk/xdvik)
    - [log](https://git.texlive.info/texlive/log/Build/source/texk/xdvik)
    - [ChangeLog](https://git.texlive.info/texlive/tree/Build/source/texk/xdvik/ChangeLog)
    - [CHANGES](https://git.texlive.info/texlive/tree/Build/source/texk/xdvik/CHANGES)
- [https://www.freshports.org/print/tex-xdvik/](https://www.freshports.org/print/tex-xdvik/)
- [https://pkgsrc.se/print/tex-xdvi](https://pkgsrc.se/print/tex-xdvi)

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

macOS の場合

```
$ cd /usr/local/texlive/????/texmf-dist/xdvi
$ sudo cp XDvi XDvi.org
$ brew install gnu-sed
$ sudo gsed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo gsed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

Linux の場合

```
$ cd /usr/local/texlive/????/texmf-dist/xdvi
$ sudo cp XDvi XDvi.org
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

- [https://sourceforge.net/p/xdvi/code/HEAD/tree/trunk/xdvik/texk/xdvik/main.c](https://sourceforge.net/p/xdvi/code/HEAD/tree/trunk/xdvik/texk/xdvik/main.c)
- [https://git.texlive.info/texlive/tree/Build/source/texk/xdvik/main.c](https://git.texlive.info/texlive/tree/Build/source/texk/xdvik/main.c)

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

## print/tex-xdvik (非推奨) <a id="print_tex-xdvik"></a> {#l6d2c61a}

print/tex-xdvik は日本語対応 DVI プレビューアです。

- [https://www.freshports.org/print/tex-xdvik/](https://www.freshports.org/print/tex-xdvik/)
- [https://cgit.freebsd.org/ports/tree/print/tex-xdvik](https://cgit.freebsd.org/ports/tree/print/tex-xdvik)
    - [https://cgit.freebsd.org/ports/log/print/tex-xdvik](https://cgit.freebsd.org/ports/log/print/tex-xdvik)
- [FreeBSD: その他のメモ](http://takeno.iee.niit.ac.jp/~shige/FreeBSD/fbsd-omemo.html)
- [UNIX に関するメモ等](http://takeno.iee.niit.ac.jp/~shige/unix/memo/unix-memo.html)
- [Cygwin の xdvi で日本語を表示する](http://proglab.blog.fc2.com/blog-entry-26.html)

## xdvik-ja (非推奨) <a id="xdvik-ja"></a> {#vab2aa47}

xdvik-ja は日本語対応 DVI プレビューアです。

<!-- -https://twilog.org/uwabami/search?word=xdvik-ja -->
- [https://salsa.debian.org/uwabami/xdvik-ja](https://salsa.debian.org/uwabami/xdvik-ja)
    - [https://salsa.debian.org/uwabami/xdvik-ja/commits/master](https://salsa.debian.org/uwabami/xdvik-ja/commits/master)
- [https://launchpad.net/debian/+source/xdvik-ja](https://launchpad.net/debian/+source/xdvik-ja)
- \[[debian-devel:19159\] Orphan jtex-base, multex-base, xdvik-ja](http://lists.debian.or.jp/debian-devel/201606/msg00008.html), \[[debian-devel:19164\]](http://lists.debian.or.jp/debian-devel/201606/msg00013.html)

% 最後のリンクについて，これだけを書き込むのがよくわかりませんが，どういう意図なのでしょうか？ -- kmaeda (2016/07/02)

## pxdvi (非推奨) <a id="pxdvi"></a> {#s1b173bb}

### pxdvi とは {#e137631f}

pxdvi は (e-(u))pTeX で出力された DVI ファイルに対応した DVI プレビューアです。
pxdvi は xdvik を (e-(u))pTeX に対応させたものです。

tltexjp リポジトリが削除されたので pxdvi は配布終了しました。（[pxdvi, ptex-ngを削除 · Issue #5 · texjporg/tltexjp · GitHub](https://github.com/texjporg/tltexjp/issues/5)を参照）

- [https://github.com/texjporg/tltexjp](https://github.com/texjporg/tltexjp)
- [pxdvi の使用用途について](https://okumuralab.org/tex/mod/forum/discuss.php?d=731)
- [Fedora 31でuptex環境を設定](https://hanaokaiwa.hatenablog.jp/entry/2020/01/20/174909)

### ChangeLog {#y0777637}

- [https://github.com/texjporg/tltexjp/commits/master](https://github.com/texjporg/tltexjp/commits/master)

### インストール <a id="pxdviinstall"></a> {#cce5d1ed}

pxdvi の配布は終了しました。tltexjp 先生の次回作にご期待ください。

### 注意点など {#uca9d6da}

[xdvik](/xdvi/#s47919ef) と同様です。コマンド名は xdvi ではなく pxdvi です。
