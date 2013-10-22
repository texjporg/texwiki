---
title: "xdvi"
url: "/xdvi/"
date: 2013-05-12T16:30:08Z
pukiwiki: "xdvi"
---

# xdvi

xdvi で問題が発生する場合は <strong>xdvi を使用せず PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), PdfViewer, [TeXworks](/TeXworks/) などでプレビューする</strong>方法があります。<br>
[ptex2pdf](/ptex2pdf/) を使用して TeX ファイルから直接 PDF ファイルを出力できます。<br>

## [xdvik](http://xdvi.sourceforge.net/)/[pxdvi](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA) (obsolete) {#ca163844}

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
    - [CHANGES](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/CHANGES?view=markup)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/ChangeLog?view=markup)

### インストール {#jfa6e6ec}

xdvik は TeX Live に含まれています．

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

- [https://gitorious.org/xdvik-japanese-patch-cleanup](https://gitorious.org/xdvik-japanese-patch-cleanup)
    - [https://gitorious.org/xdvik-japanese-patch-cleanup/xdvik-japanese-patch-cleanup/commits/master](https://gitorious.org/xdvik-japanese-patch-cleanup/xdvik-japanese-patch-cleanup/commits/master)
- [https://gitorious.org/tlptexlive](https://gitorious.org/tlptexlive)
    - [https://gitorious.org/tlptexlive/build-tlptexlive/commits/master](https://gitorious.org/tlptexlive/build-tlptexlive/commits/master)
    - [https://gitorious.org/tlptexlive/tlptexlive-root/commits/master](https://gitorious.org/tlptexlive/tlptexlive-root/commits/master)

### インストール <a id="pxdviinstall"></a> {#cce5d1ed}

pxdvi は [tlptexliveリポジトリ](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA) からインストールできます．<br>

- [tlptexlive Archives &middot; There and back again](http://www.preining.info/blog/tag/tlptexlive/)

#### TeX Live 2013 公式パッケージ (OS X) の場合 {#ve2d6700}

```
$ sudo tlmgr update --self --all
$ sudo tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
$ sudo tlmgr pinning add tlptexlive '*'
$ sudo tlmgr install pxdvi pmetapost
$ sudo tlmgr update --all
$ cd /usr/local/texlive/2013
$ sudo ln -s texmf-dist texmf
$ cd /usr/local/texlive/2013/texmf-dist/xdvi
$ sudo cp XDvi XDvi.org
$ brew install gnu-sed または sudo port install gsed
$ sudo gsed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo gsed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

#### TeX Live 2013 公式パッケージ (Linux) の場合 {#xf0871b2}

```
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
$ sudo tlmgr update --all
$ cd /usr/local/texlive/2013
$ sudo ln -s texmf-dist texmf
$ cd /usr/local/texlive/2013/texmf-dist/xdvi
$ sudo cp XDvi XDvi.org
```

<!-- $ sudo sed 's/-helvetica-/-*-/' -i XDvi -->

```
$ sudo sed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo sed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

#### TeX Live 2013/Arch Linux の場合 {#w4613e7f}

- [xdviで日本語が表示できない.](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1120)

pxdvi を使えば TeX Live 2013/Arch Linux で platex で処理された日本語 DVI ファイルが表示できます．<br>
tlptexlive リポジトリから pxdvi をダウンロード・展開して<br>
pxdvi-xaw, pxdvi.cfg, xdvi-ptex.map, texmf.cnf などを適切な場所に配置して<br>
/usr/share/texmf-local/web2c/texmf.cnf に &#x58;DVIINPUTS を設定します．<br>

```
$ mkdir pxdvi
$ cd pxdvi
$ curl -O http://www.tug.org/~preining/tlptexlive/archive/pxdvi.tar.xz
$ curl -O http://www.tug.org/~preining/tlptexlive/archive/pxdvi.x86_64-linux.tar.xz
$ tar xvf pxdvi.tar.xz
$ tar xvf pxdvi.x86_64-linux.tar.xz
$ sudo cp -p bin/x86_64-linux/pxdvi-xaw /usr/bin
$ sudo ln -s /usr/bin/pxdvi-xaw /usr/bin/pxdvi
$ sudo cp -pR texmf-dist/xdvi /usr/share/texmf-dist/pxdvi
$ sudo cp -pR texmf-dist/fonts/map/pxdvi /usr/share/texmf-dist/fonts/map/pxdvi
$ sudo mkdir -p /usr/share/texmf-local/web2c
$ sudo cp /usr/share/texmf-dist/web2c/texmf.cnf /usr/share/texmf-local/web2c
```

/usr/share/texmf-local/web2c/texmf.cnf に &#x58;DVIINPUTS を追加します．<br>

```
$ printf '\n%% pxdvi\nXDVIINPUTS = /usr/share/texmf-dist/pxdvi\n' | sudo tee -a /usr/share/texmf-local/web2c/texmf.cnf
$ tail /usr/share/texmf-local/web2c/texmf.cnf
...
% pxdvi
XDVIINPUTS = /usr/share/texmf-dist/pxdvi
```

&#x58;DVIINPUTS に /usr/share/texmf-dist/pxdvi が設定されていることを確認します．<br>

```
$ kpsewhich -var-value XDVIINPUTS
/usr/share/texmf-dist/pxdvi
```

platex で処理された DVI ファイルが表示できます．<br>

```
$ pxdvi -watchfile 1 hoge.dvi &
```

#### TeX Live 2013/Debian の場合 {#h734b9c9}

pxdvi を使用する場合は xdvik-ja をインストールします．<br>

```
$ sudo apt-get install xdvik-ja
```

/usr/local/share/texmf/web2c/texmf.cnf に &#x58;DVIINPUTS を追加します．<br>

```
$ printf '\n%% pxdvi\nXDVIINPUTS = /etc/texmf/xdvi\n' | sudo tee -a /usr/local/share/texmf/web2c/texmf.cnf
$ tail /usr/local/share/texmf/web2c/texmf.cnf
...
% pxdvi
XDVIINPUTS = /etc/texmf/xdvi
```

&#x58;DVIINPUTS に /etc/texmf/xdvi が設定されていることを確認します．<br>

```
$ kpsewhich -var-value XDVIINPUTS
/etc/texmf/xdvi
```

platex で処理された DVI ファイルが表示できます．<br>

```
$ xdvi -watchfile 1 hoge.dvi &
```

または<br>

```
$ pxdvi-xaw -watchfile 1 hoge.dvi &
```

### 使い方 {#o73d19d8}

```
$ pxdvi -watchfile 1 hoge.dvi &
```
