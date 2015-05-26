---
title: "Linux/Debian"
url: "/Linux/Debian/"
date: 2013-04-12T00:57:30Z
pukiwiki: "Linux/Debian"
---

# Linux/Debian

[Linux](/Linux/) > Debian GNU/Linux

## [Debian GNU/Linux](https://www.debian.org) {#b76dbb44}

Debian はフリーなオペレーティングシステムを作成するためのプロジェクトです．
Debian GNU/Linux は Debian Project によって作成された Linux ディストリビューションです．

<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Debian-OpenLogo.svg/200px-Debian-OpenLogo.svg.png,right,around,nolink,Debian GNU/Linux) -->

<!-- **設定 [#n0611da8] -->
<!-- -[[Debianリポジトリの設定方法:http://ftp-admin.blogspot.jp/2013/02/debian.html]] -->

***

***

## [TeX Live](</TeX Live/>) {#texlive}

- [Debian -- パッケージ検索結果 -- texlive-full](https://packages.debian.org/ja/texlive-full)
- [Debian -- パッケージ検索結果 -- texlive-lang-japanese](https://packages.debian.org/ja/texlive-lang-japanese)
- [Debian -- パッケージ検索結果 -- texlive-luatex](https://packages.debian.org/ja/texlive-luatex)
- [Debian -- パッケージ検索結果 -- texlive](https://packages.debian.org/ja/texlive)
- [Debian -- sid の texlive パッケージに関する詳細](https://packages.debian.org/sid/texlive)
- [https://packages.debian.org/ja/sid/tex/](https://packages.debian.org/ja/sid/tex/)
- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)
- [http://anonscm.debian.org/cgit/debian-tex/texlive-bin.git/](http://anonscm.debian.org/cgit/debian-tex/texlive-bin.git/)
- [http://anonscm.debian.org/cgit/debian-tex/texlive-nonbin.git/](http://anonscm.debian.org/cgit/debian-tex/texlive-nonbin.git/)
- [http://dedup.debian.net/compare/poppler-data/texlive-lang-japanese](http://dedup.debian.net/compare/poppler-data/texlive-lang-japanese)
- [https://people.debian.org/~preining/TeX/](https://people.debian.org/~preining/TeX/)

### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#z4379676}

- [Linux](/Linux/#texliveinstall)
- [TeX Live Archives - There and back again](http://www.preining.info/blog/tag/tex-live/)
- [TeX Live を使おう──Linux ユーザと Mac OS X ユーザのために──](http://www.fugenji.org/~thomas/texlive-guide/)
- [TeX / ChangeLog::hjk](http://kreisel.fam.cx/webmaster/clog/cat_tex.html)

TeX Live の公式サイトのパッケージをインストールしたあとで TeX Live/Debian に依存するパッケージをインストールしようとすると TeX Live/Debian も同時にインストールされてしまいます．<br>
TeX Live/Debian がインストールされないように [dummy パッケージ](http://www.tug.org/texlive/debian.html#vanilla)を作成して依存関係の問題を回避します．<br>

```
$ sudo apt-get install equivs
$ wget http://www.tug.org/texlive/files/debian-equivs-2015-ex.txt
$ equivs-build debian-equivs-2015-ex.txt
$ sudo dpkg -i texlive-local_2015-1_all.deb
```

### TeX Live/Debian <a id="texlivedebian"></a> {#rde4f3be}

- [TeX Live Archives - There and back again](http://www.preining.info/blog/tag/tex-live/)
- [Debian 8.x (Jessie) での TeX 環境](http://uwabami.junkhub.org/log/20141205.html#p01)
- [Debian 8 jessie での日本語 TeX 環境の構築](https://blog.ymyzk.com/2014/10/debian-8-jessie-japanese-tex/)
- [TeXLive 2015](http://www1.pm.tokushima-u.ac.jp/~kohda/tex/texlive.html)

TeX Live/Debian をフルインストールする場合は

```
$ sudo apt-get install texlive-full xzdec
$ tlmgr init-usertree
```

日本語関連のパッケージと texlive-luatex パッケージと texlive パッケージをインストールする場合は

```
$ sudo apt-get install texlive-lang-japanese texlive-luatex texlive xzdec
$ tlmgr init-usertree
```

を実行します．<br>

## [Ghostscript](/Ghostscript/) <a id="ghostscript"></a> {#y4c2003d}

```
$ sudo apt-get install ghostscript
```

## [Python](/Python/) <a id="python"></a> {#df01e340}

### Python 3 {#l32086b7}

```
$ sudo apt-get install python3
```

### Python 2 {#vf673aa3}

```
$ sudo apt-get install python
```

## Julia <a id="julia"></a> {#wfa371af}

```
$ sudo apt-get install julia
```

## [Ruby](/Ruby/) <a id="ruby"></a> {#b036c19c}

```
$ sudo apt-get install ruby2.2
```

## [Perl](/Perl/) <a id="perl"></a> {#t46cade6}

```
$ sudo apt-get install perl
```

## [Evince](/Evince/) <a id="evince"></a> {#w1fb0d62}

```
$ sudo apt-get install evince
```

## [Okular](/Okular/) <a id="okular"></a> {#u6c2955c}

```
$ sudo apt-get install okular kde-l10n-ja
```

## [zathura](/zathura/) <a id="zathura"></a> {#r36251d6}

```
$ sudo apt-get install zathura
```

## [qpdfview](/qpdfview/) <a id="qpdfview"></a> {#f44ae716}

```
$ sudo apt-get install qpdfview
```

## [MuPDF](/MuPDF/) <a id="mupdf"></a> {#fff66c5d}

```
$ sudo apt-get install mupdf mupdf-tools
```

## [LyX](/LyX/) <a id="lyx"></a> {#jbb03661}

```
$ sudo apt-get install lyx
```

## [TeXstudio](/TeXstudio/) <a id="texstudio"></a> {#n198519c}

```
$ sudo apt-get install texstudio texstudio-l10n texstudio-doc
```

## [Texmaker](/Texmaker/) <a id="texmaker"></a> {#oe09ab85}

```
$ sudo apt-get install texmaker
```

## [TeXworks](/TeXworks/) <a id="texworks"></a> {#r265d7ea}

```
$ sudo apt-get install texworks
```

## [Eclipse](/Eclipse/) <a id="eclipse"></a> {#f101e753}

```
$ sudo apt-get install eclipse
```

## [Emacs](/Emacs/) <a id="emacs"></a> {#gfaebf66}

```
$ sudo apt-get install emacs
```

### AUCTeX {#t099fe57}

- [https://launchpad.net/debian/+source/auctex/](https://launchpad.net/debian/+source/auctex/)
    - [https://launchpad.net/debian/+source/auctex/+changelog](https://launchpad.net/debian/+source/auctex/+changelog)
- [AUCTeX の設定](http://www.gfd-dennou.org/member/uwabami/cc-env/emacs/auctex_config.html)

### YaTeX {#r57295dd}

- [https://launchpad.net/debian/+source/yatex/](https://launchpad.net/debian/+source/yatex/)
    - [https://launchpad.net/debian/+source/yatex/+changelog](https://launchpad.net/debian/+source/yatex/+changelog)
- [YaTeXのインストールと設定](http://emacs.tsutomuonoda.com/latex-emacs-yatex-install-setting/)

## [Vim](/Vim/) <a id="vim"></a> {#k24f9849}

```
$ sudo apt-get install vim vim-gtk
```

## [Inkscape](/Inkscape/) <a id="inkscape"></a> {#h0e14315}

```
$ sudo apt-get install inkscape pstoedit python-lxml
```
