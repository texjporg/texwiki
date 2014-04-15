---
title: "xdvi"
url: "/xdvi/"
date: 2013-05-12T16:30:08Z
pukiwiki: "xdvi"
---

# xdvi

xdvi で問題が発生する場合は <strong>xdvi を使用せず PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) などでプレビューする</strong>方法があります。<br>
[ptex2pdf](/ptex2pdf/) を使用して TeX ファイルから直接 PDF ファイルを出力できます。<br>

## [xdvik](http://xdvi.sourceforge.net/)/[pxdvi](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA) → 問題が発生する場合は PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) などでプレビューする {#ca163844}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## [xdvik](http://xdvi.sourceforge.net/) → 問題が発生する場合は PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) などでプレビューする <a id="xdvik"></a> {#s47919ef}

### xdvik とは {#de90c407}

xdvik は DVI プレビューアです．<br>
xdvi を Kpathsea ライブラリに対応させたものです．<br>
[CJK package](/LaTeX-CJK/) を使用すれば xdvik でも日本語が表示できます．<br>

- [Xdvik Homepage](http://xdvi.sourceforge.net/)
- [xdvi](http://math.berkeley.edu/~vojta/xdvi.html)

### 動作環境 {#y90c90d1}

X Window System

### ChangeLog {#p61511cc}

- [SourceForge.net Repository - \[xdvi\] Contents of /xdvik/texk/xdvik/CHANGES](http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/CHANGES?view=markup)

- \[[texlive\] Index of /trunk/Build/source/texk/xdvik](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/?view=log)
    - [CHANGES](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/CHANGES?view=markup)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/ChangeLog?view=markup)

### インストール {#jfa6e6ec}

xdvik は TeX Live に含まれています．<br>

### 使い方 {#m5b0a3d2}

```
$ xdvi -nofork -unique -watchfile 1 'hoge.dvi' &
```

または

```
$ xdvi -nofork -unique -watchfile 1 "hoge.dvi" &
```

### SyncTeX {#g4e4f193}

#### forward search {#ic1815e4}

TeX ファイルの 30 行目に対応する DVI ファイルの該当するページにジャンプしたい場合は<br>

```
$ synctex view -i '30:0:hoge.tex' -o 'hoge.dvi' -x 'xdvi -nofork -unique -watchfile 1 +%{page+1} "%{output}"' &
```

または

```
$ synctex view -i "30:0:hoge.tex" -o "hoge.dvi" -x "xdvi -nofork -unique -watchfile 1 +%{page+1} '%{output}'" &
```

のように実行します．<br>

## [pxdvi](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA) → 問題が発生する場合は PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) などでプレビューする <a id="pxdvi"></a> {#s1b173bb}

### pxdvi とは {#e137631f}

pxdvi は (e-)(u)pTeX で出力された DVI ファイルに対応した DVI プレビューアです．<br>
pxdvi は xdvik を (e-)(u)pTeX に対応させたものです．<br>

- [tlptexliveリポジトリ](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA)
- [xdvik 日本語化パッチ整理プロジェクト](http://xdvi.sourceforge.jp/)
- [MLアーカイブ: users - xdvi-jp-cleanup - SourceForge.JP](http://sourceforge.jp/projects/xdvi/lists/archive/users/)
- [pxdvi の使用用途について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=731)

### ChangeLog {#y0777637}

- [https://gitorious.org/xdvik-japanese-patch-cleanup](https://gitorious.org/xdvik-japanese-patch-cleanup)
    - [https://gitorious.org/xdvik-japanese-patch-cleanup/xdvik-japanese-patch-cleanup/commits/master](https://gitorious.org/xdvik-japanese-patch-cleanup/xdvik-japanese-patch-cleanup/commits/master)
- [https://gitorious.org/tlptexlive](https://gitorious.org/tlptexlive)
    - [https://gitorious.org/tlptexlive/build-tlptexlive/commits/master](https://gitorious.org/tlptexlive/build-tlptexlive/commits/master)
    - [https://gitorious.org/tlptexlive/tlptexlive-root/commits/master](https://gitorious.org/tlptexlive/tlptexlive-root/commits/master)

### インストール <a id="pxdviinstall"></a> {#cce5d1ed}

pxdvi は [tlptexliveリポジトリ](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA) からインストールできます．<br>

- [tlptexlive Archives &middot; There and back again](http://www.preining.info/blog/tag/tlptexlive/)

### 使い方 {#o73d19d8}

```
$ pxdvi -nofork -unique -watchfile 1 'hoge.dvi' &
```

または

```
$ pxdvi -nofork -unique -watchfile 1 "hoge.dvi" &
```

### SyncTeX {#i441324e}

#### forward search {#ucabcddf}

TeX ファイルの 30 行目に対応する DVI ファイルの該当するページにジャンプしたい場合は<br>

```
$ synctex view -i '30:0:hoge.tex' -o 'hoge.dvi' -x 'pxdvi -nofork -unique -watchfile 1 +%{page+1} "%{output}"' &
```

または

```
$ synctex view -i "30:0:hoge.tex" -o "hoge.dvi" -x "pxdvi -nofork -unique -watchfile 1 +%{page+1} '%{output}'" &
```

のように実行します．<br>
