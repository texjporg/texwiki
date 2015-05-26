---
title: "Linux/Linux Mint"
url: "/Linux/Linux Mint/"
date: 2013-03-28T20:19:04Z
pukiwiki: "Linux/Linux Mint"
---

# Linux/Linux Mint

[Linux](/Linux/) > Linux Mint/Linux Mint Debian Edition (LMDE)

## [Linux Mint/Linux Mint Debian Edition (LMDE)](http://linuxmint.com/) {#f4077eb2}

Linux Mint は Ubuntu をベースにした Linux ディストリビューションです．
Linux Mint Debian Edition (LMDE) は Debian GNU/Linux をベースにした Linux ディストリビューションです．

<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Linux_Mint_logo_and_wordmark.svg/500px-Linux_Mint_logo_and_wordmark.svg.png,right,around,nolink,Linux Mint) -->

***

***

### TeX Live {#texlive}

- [https://launchpad.net/tex-live](https://launchpad.net/tex-live)
- [https://launchpad.net/ubuntu/+source/texlive-base](https://launchpad.net/ubuntu/+source/texlive-base)
    - [https://launchpad.net/ubuntu/+source/texlive-base/+changelog](https://launchpad.net/ubuntu/+source/texlive-base/+changelog)
- [https://launchpad.net/ubuntu/+source/texlive-lang](https://launchpad.net/ubuntu/+source/texlive-lang)
    - [https://launchpad.net/ubuntu/+source/texlive-lang/+changelog](https://launchpad.net/ubuntu/+source/texlive-lang/+changelog)
- [Ubuntu -- パッケージ検索結果 -- texlive-full](http://packages.ubuntu.com/ja/texlive-full)
- [Ubuntu -- パッケージ検索結果 -- texlive-lang-japanese](http://packages.ubuntu.com/ja/texlive-lang-japanese)
- [Ubuntu -- パッケージ検索結果 -- texlive-luatex](http://packages.ubuntu.com/ja/texlive-luatex)
- [Ubuntu -- パッケージ検索結果 -- texlive](http://packages.ubuntu.com/ja/texlive)
- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)
- [TeX Live in Launchpad](https://launchpad.net/tex-live)
    - [trunk](https://code.launchpad.net/~naesten/tex-live/trunk)
        - [ChangeLog](http://bazaar.launchpad.net/~naesten/tex-live/trunk/view/head:/ChangeLog)

#### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#ef984d1b}

- [Linux](/Linux/#texliveinstall)

TeX Live の公式サイトのパッケージをインストールしたあとで TeX Live/Debian に依存するパッケージをインストールしようとすると TeX Live/Debian も同時にインストールされてしまいます．
TeX Live/Debian がインストールされないように [dummy パッケージ](http://www.tug.org/texlive/debian.html#vanilla)を作成して依存関係の問題を回避します．

```
$ sudo apt-get install equivs
$ wget http://www.tug.org/texlive/files/debian-equivs-2015-ex.txt
$ equivs-build debian-equivs-2015-ex.txt
$ sudo dpkg -i texlive-local_2015-1_all.deb
```

#### TeX Live/Debian <a id="texlivedebian"></a> {#qcd9ce14}

- Linux/Debian

TeX Live/Debian をフルインストールする場合は

```
$ sudo apt-get install texlive-full xzdec
$ tlmgr init-usertree
```

日本語関連のパッケージと texlive-luatex パッケージと texlive パッケージをインストールする場合は Linux Mint 18 以降にアップグレードして

```
$ sudo apt-get install texlive-lang-japanese texlive-luatex texlive xzdec
$ tlmgr init-usertree
```

を実行します．

### [Ghostscript](/Ghostscript/) <a id="ghostscript"></a> {#t53b858c}

```
$ sudo apt-get install ghostscript
```

### [Python](/Python/) <a id="python"></a> {#reda4f97}

#### Python 3 {#ia53444d}

```
$ sudo apt-get install python3
```

#### Python 2 {#a93b92ac}

```
$ sudo apt-get install python
```

### Julia <a id="julia"></a> {#xf5a03c6}

```
$ sudo apt-get install julia
```

### [Ruby](/Ruby/) <a id="ruby"></a> {#mf285d32}

```
$ sudo apt-get install ruby2.1
```

### [Perl](/Perl/) <a id="perl"></a> {#e850770a}

```
$ sudo apt-get install perl
```

### [Evince](/Evince/) <a id="evince"></a> {#qfdb160b}

```
$ sudo apt-get install evince
```

### [Okular](/Okular/) <a id="okular"></a> {#ba1358b3}

```
$ sudo apt-get install okular kde-l10n-ja
```

### [zathura](/zathura/) <a id="zathura"></a> {#eabe50ed}

```
$ sudo apt-get install zathura
```

### [qpdfview](/qpdfview/) <a id="qpdfview"></a> {#u94ec4be}

```
$ sudo apt-get install qpdfview
```

### [MuPDF](/MuPDF/) <a id="mupdf"></a> {#c80fa1e6}

```
$ sudo apt-get install mupdf mupdf-tools
```

### [LyX](/LyX/) <a id="lyx"></a> {#jdcf4217}

```
$ sudo apt-get install lyx
```

### [TeXstudio](/TeXstudio/) <a id="texstudio"></a> {#q1b2ff71}

```
$ sudo apt-get install texstudio texstudio-l10n texstudio-doc
```

### [Texmaker](/Texmaker/) <a id="texmaker"></a> {#f4899fdc}

```
$ sudo apt-get install texmaker
```

### [TeXworks](/TeXworks/) <a id="texworks"></a> {#g455c5e0}

```
$ sudo apt-get install texworks
```

### [Eclipse](/Eclipse/) <a id="eclipse"></a> {#bd4e03c3}

```
$ sudo apt-get install eclipse
```

### [Emacs](/Emacs/) <a id="emacs"></a> {#w2c42a95}

```
$ sudo apt-get install emacs
```

#### [AUCTeX](/AUCTeX/) {#r3a92e85}

- [https://launchpad.net/ubuntu/+source/auctex/](https://launchpad.net/ubuntu/+source/auctex/)
    - [https://launchpad.net/ubuntu/+source/auctex/+changelog](https://launchpad.net/ubuntu/+source/auctex/+changelog)

#### [YaTeX](/YaTeX/) {#reffaf03}

- [https://launchpad.net/ubuntu/+source/yatex/](https://launchpad.net/ubuntu/+source/yatex/)
    - [https://launchpad.net/ubuntu/+source/yatex/+changelog](https://launchpad.net/ubuntu/+source/yatex/+changelog)

### [Vim](/Vim/) <a id="vim"></a> {#febc084d}

```
$ sudo apt-get install vim vim-gtk
```

### [Inkscape](/Inkscape/) <a id="inkscape"></a> {#ke45cdf4}

```
$ sudo apt-get install inkscape pstoedit python-lxml
```
