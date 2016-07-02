---
title: "Linux/Linux Mint"
url: "/Linux/Linux Mint/"
date: 2013-03-28T20:19:04Z
pukiwiki: "Linux/Linux Mint"
---

# Linux/Linux Mint

[Linux](/Linux/) > Linux Mint

## [Linux Mint](https://linuxmint.com/) {#f4077eb2}

Linux Mint はデスクトップ向けの使いやすい Linux ディストリビューションです．

***

***

### TeX Live {#texlive}

#### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#ef984d1b}

- [Linux](/Linux/#texliveinstall) &amp; [texlive-dummy](/texlive-dummy/#linuxmint)

#### TeX Live/Debian <a id="texlivedebian"></a> {#qcd9ce14}

- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)
- [tex-live in Launchpad](https://launchpad.net/tex-live)
    - [trunk](https://code.launchpad.net/~naesten/tex-live/trunk)
        - [ChangeLog](http://bazaar.launchpad.net/~naesten/tex-live/trunk/view/head:/ChangeLog)
- [https://launchpad.net/ubuntu/+source/texlive-base](https://launchpad.net/ubuntu/+source/texlive-base)
    - [https://launchpad.net/ubuntu/+source/texlive-base/+changelog](https://launchpad.net/ubuntu/+source/texlive-base/+changelog)
- [https://launchpad.net/ubuntu/+source/texlive-lang](https://launchpad.net/ubuntu/+source/texlive-lang)
    - [https://launchpad.net/ubuntu/+source/texlive-lang/+changelog](https://launchpad.net/ubuntu/+source/texlive-lang/+changelog)

TeX Live/Debian をフルインストールする場合は

```
sudo apt install texlive-full xzdec
tlmgr init-usertree
```

日本語関連のパッケージをインストールする場合は

```
sudo apt install texlive-lang-japanese xzdec
tlmgr init-usertree
```

を実行します．

tlmgr の実行には xzdec パッケージが必要です．

### [Ghostscript](/Ghostscript/) <a id="ghostscript"></a> {#t53b858c}

```
sudo apt install ghostscript
```

### [Python](/Python/) <a id="python"></a> {#reda4f97}

#### Python 3 {#ia53444d}

```
sudo apt install python3
```

#### Python 2 {#a93b92ac}

```
sudo apt install python
```

### Julia <a id="julia"></a> {#xf5a03c6}

```
sudo apt install julia
```

### [Ruby](/Ruby/) <a id="ruby"></a> {#mf285d32}

```
sudo apt install ruby
```

### [Perl](/Perl/) <a id="perl"></a> {#e850770a}

```
sudo apt install perl
```

### [Evince](/Evince/) <a id="evince"></a> {#qfdb160b}

```
sudo apt install evince
```

### [Okular](/Okular/) <a id="okular"></a> {#ba1358b3}

```
sudo apt install okular kde-l10n-ja
```

### [zathura](/zathura/) <a id="zathura"></a> {#eabe50ed}

```
sudo apt install zathura
```

### [qpdfview](/qpdfview/) <a id="qpdfview"></a> {#u94ec4be}

```
sudo apt install qpdfview
```

### [MuPDF](/MuPDF/) <a id="mupdf"></a> {#c80fa1e6}

```
sudo apt install mupdf mupdf-tools
```

### [LyX](/LyX/) <a id="lyx"></a> {#jdcf4217}

```
sudo apt install lyx
```

### [TeXstudio](/TeXstudio/) <a id="texstudio"></a> {#q1b2ff71}

```
sudo apt install texstudio texstudio-l10n texstudio-doc
```

### [Texmaker](/Texmaker/) <a id="texmaker"></a> {#f4899fdc}

```
sudo apt install texmaker
```

### [TeXworks](/TeXworks/) <a id="texworks"></a> {#g455c5e0}

```
sudo apt install texworks
```

### [Eclipse](/Eclipse/) <a id="eclipse"></a> {#bd4e03c3}

```
sudo apt install eclipse
```

### [Emacs](/Emacs/) <a id="emacs"></a> {#w2c42a95}

```
sudo apt install emacs
```

#### [AUCTeX](/AUCTeX/) {#r3a92e85}

- [https://launchpad.net/ubuntu/+source/auctex/](https://launchpad.net/ubuntu/+source/auctex/)
    - [https://launchpad.net/ubuntu/+source/auctex/+changelog](https://launchpad.net/ubuntu/+source/auctex/+changelog)

#### [YaTeX](/YaTeX/) {#reffaf03}

- [https://launchpad.net/ubuntu/+source/yatex/](https://launchpad.net/ubuntu/+source/yatex/)
    - [https://launchpad.net/ubuntu/+source/yatex/+changelog](https://launchpad.net/ubuntu/+source/yatex/+changelog)

### [Vim](/Vim/) <a id="vim"></a> {#febc084d}

```
sudo apt install vim vim-gtk
```

### [Inkscape](/Inkscape/) <a id="inkscape"></a> {#ke45cdf4}

```
sudo apt install inkscape pstoedit python-lxml
```
