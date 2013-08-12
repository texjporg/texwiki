---
title: "xdvi"
url: "/xdvi/"
date: 2013-05-12T16:30:08Z
pukiwiki: "xdvi"
---

# xdvi

xdvi で問題が発生する場合は <strong>xdvi を使用せず PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), PdfViewer, [TeXworks](/TeXworks/) などでプレビューする</strong>方法があります。<br>
TeX Live 2013 以降であれば [ptex2pdf](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/ptex2pdf/ptex2pdf.lua?view=markup) を使用して TeX ファイルから直接 PDF ファイルを出力できます。<br>

## [xdvik](http://xdvi.sourceforge.net/)/[pxdvi](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA) {#ca163844}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## xdvik とは <a id="xdvik"></a> {#s47919ef}

xdvik は DVI プレビューアです．<br>
xdvi を Kpathsea ライブラリに対応させたものです．<br>
[CJK package](/LaTeX-CJK/) を使用すれば xdvik でも日本語が表示できます．<br>

- [Xdvik Homepage](http://xdvi.sourceforge.net/)
- [xdvi](http://math.berkeley.edu/~vojta/xdvi.html)

### 動作環境 {#y90c90d1}

X Window System

### リリース情報/ChangeLog {#p61511cc}

- [SourceForge.net Repository - \[xdvi\] Contents of /xdvik/texk/xdvik/CHANGES](http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/CHANGES?view=markup)

- \[[texlive\] Index of /trunk/Build/source/texk/xdvik](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/?view=log)
    - [CHANGES](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/CHANGES?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/ChangeLog?view=markup)

### インストール {#jfa6e6ec}

xdvik 22.86 は TeX Live 2013 に含まれています．

### 使い方 {#m5b0a3d2}

```
$ xdvi -watchfile 1 hoge.dvi &
```

## pxdvi とは <a id="pxdvi"></a> {#s1b173bb}

pxdvi は pTeX で出力された DVI ファイルに対応した DVI プレビューアです．<br>
pxdvi は xdvik を pTeX に対応させたものです．<br>

- [tlptexliveリポジトリ](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA)
- [xdvik 日本語化パッチ整理プロジェクト](http://xdvi.sourceforge.jp/)
- [MLアーカイブ: users - xdvi-jp-cleanup - SourceForge.JP](http://sourceforge.jp/projects/xdvi/lists/archive/users/)
    - [http://sourceforge.jp/projects/xdvi/lists/archive/users/2013-May/thread.html](http://sourceforge.jp/projects/xdvi/lists/archive/users/2013-May/thread.html)
    - [http://sourceforge.jp/projects/xdvi/lists/archive/users/2013-April/thread.html](http://sourceforge.jp/projects/xdvi/lists/archive/users/2013-April/thread.html)
    - [http://sourceforge.jp/projects/xdvi/lists/archive/users/2013-March/thread.html](http://sourceforge.jp/projects/xdvi/lists/archive/users/2013-March/thread.html)
- [pxdvi の使用用途について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=731)

### ChangeLog {#y0777637}

- [http://gitorious.org/xdvik-japanese-patch-cleanup](http://gitorious.org/xdvik-japanese-patch-cleanup)
- [http://gitorious.org/tlptexlive](http://gitorious.org/tlptexlive)

### インストール <a id="pxdviinstall"></a> {#cce5d1ed}

pxdvi, pmetapost は [tlptexliveリポジトリ](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA) からインストールできます．<br>

#### TeX Live 2013 の場合 {#c75bb558}

```
$ cd /usr/local/texlive/2013
$ sudo ln -s texmf-dist texmf
$ sudo tlmgr update --self --all
$ sudo tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
```

<!-- tlmgr: added repository with tag tlptexlive: http://www.tug.org/~preining/tlptexlive/ -->

```
$ sudo tlmgr pinning add tlptexlive '*'
```

<!-- tlmgr: package repositories: -->
<!-- 	main = http://ring.airnet.ne.jp/pub/text/CTAN/systems/texlive/tlnet/ -->
<!-- 	tlptexlive = http://www.tug.org/~preining/tlptexlive/ -->
<!-- tlmgr: new pinning data for tlptexlive: * -->
<!-- $ sudo tlmgr pinning add tlptexlive 'pxdvi*' -->
<!-- tlmgr: package repositories: -->
<!-- 	main = http://ring.airnet.ne.jp/pub/text/CTAN/systems/texlive/tlnet/ -->
<!-- 	tlptexlive = http://www.tug.org/~preining/tlptexlive/ -->
<!-- tlmgr: new pinning data for tlptexlive: pxdvi* -->
<!-- $ sudo tlmgr pinning add tlptexlive 'pmetapost*' -->
<!-- tlmgr: package repositories: -->
<!-- 	main = http://ring.airnet.ne.jp/pub/text/CTAN/systems/texlive/tlnet/ -->
<!-- 	tlptexlive = http://www.tug.org/~preining/tlptexlive/ -->
<!-- tlmgr: new pinning data for tlptexlive: pmetapost* -->

```
$ sudo tlmgr install pxdvi pmetapost
$ cd /usr/local/texlive/2013/texmf-dist/xdvi
$ sudo cp XDvi XDvi.org
```

<!-- $ sudo sed 's/-helvetica-/-*-/' -i XDvi -->

```
$ sudo sed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo sed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

### 使い方 {#o73d19d8}

```
$ pxdvi -watchfile 1 hoge.dvi &
```
