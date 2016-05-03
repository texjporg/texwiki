---
title: "Linux/Linux Mint"
url: "/Linux/Linux Mint/"
date: 2013-03-28T20:19:04Z
pukiwiki: "Linux/Linux Mint"
---

# Linux/Linux Mint

[Linux](/Linux/) > Linux Mint/Linux Mint Debian Edition (LMDE)

## [Linux Mint/Linux Mint Debian Edition (LMDE)](https://linuxmint.com/) {#f4077eb2}

Linux Mint は Ubuntu をベースにした [DistroWatch.com](http://distrowatch.com/?language=JP) ページヒットランキング 1 位の Linux ディストリビューションです．
Linux Mint Debian Edition (LMDE) は Debian GNU/Linux をベースにした Linux ディストリビューションです．
デスクトップ環境に Cinnamon, MATE, KDE, Xfce を採用しています．

<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Linux_Mint_logo_and_wordmark.svg/500px-Linux_Mint_logo_and_wordmark.svg.png,right,around,nolink,Linux Mint) -->

***

***

### TeX Live {#texlive}

#### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#ef984d1b}

- [Linux](/Linux/#texliveinstall) &amp; [texlive-dummy](/texlive-dummy/#linuxmint)

#### TeX Live/Debian <a id="texlivedebian"></a> {#qcd9ce14}

- [https://launchpad.net/tex-live](https://launchpad.net/tex-live)
- [https://launchpad.net/ubuntu/+source/texlive-base](https://launchpad.net/ubuntu/+source/texlive-base)
    - [https://launchpad.net/ubuntu/+source/texlive-base/+changelog](https://launchpad.net/ubuntu/+source/texlive-base/+changelog)
- [https://launchpad.net/ubuntu/+source/texlive-lang](https://launchpad.net/ubuntu/+source/texlive-lang)
    - [https://launchpad.net/ubuntu/+source/texlive-lang/+changelog](https://launchpad.net/ubuntu/+source/texlive-lang/+changelog)
- UbuntuPackageSearch:texlive-full, UbuntuPackageSearch.en:texlive-full, UbuntuPackageSearch.ja:texlive-full
- UbuntuPackageSearch:texlive-lang-japanese, UbuntuPackageSearch.en:texlive-lang-japanese, UbuntuPackageSearch.ja:texlive-lang-japanese
- UbuntuPackageSearch:texlive-luatex, UbuntuPackageSearch.en:texlive-luatex, UbuntuPackageSearch.ja:texlive-luatex
- UbuntuPackageSearch:texlive-xetex, UbuntuPackageSearch.en:texlive-xetex, UbuntuPackageSearch.ja:texlive-xetex
- UbuntuPackageSearch:texlive, UbuntuPackageSearch.en:texlive, UbuntuPackageSearch.ja:texlive
- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)
- [TeX Live in Launchpad](https://launchpad.net/tex-live)
    - [trunk](https://code.launchpad.net/~naesten/tex-live/trunk)
        - [ChangeLog](http://bazaar.launchpad.net/~naesten/tex-live/trunk/view/head:/ChangeLog)
- Linux/Debian
- [TeX Live/Debian<br>日本語関連のパッケージと texlive パッケージ<br>をインストールする場合<br>texlive-lang-japanese texlive xzdec<br>→lualatexコマンド、luatexja.styは入るが、<br>LuaLaTeXでタイプセットできない](https://twitter.com/ti5942/status/580810894713577472)
- [Ubuntu で OS の texlive パッケージをインスト<br>ールすると /usr/bin/xetex がインストールされ<br>るけど、それだけでは他の必要なファイルがイ<br>ンストールされなくて結局 plain XeTeX として<br>も使えない。。。](https://twitter.com/trueroad_jp/status/704285097524998144)<br>[texlive-xetex パッケージをインストールすれば<br>必要なファイルが揃うので、ようやく plain <br>XeTeX が使えるようになる。](https://twitter.com/trueroad_jp/status/704285653958160385)

TeX Live/Debian をフルインストールする場合は

```
sudo apt install texlive-full xzdec
tlmgr init-usertree
```

日本語関連のパッケージと texlive-luatex パッケージと texlive-xetex パッケージと texlive パッケージをインストールする場合は <!-- Linux Mint の最新版は 17.3 です． --> <!-- どのバージョン以降が正しいのでしょう？ -->

Linux Mint 18 以降の場合は

```
sudo apt install texlive-lang-japanese texlive-luatex texlive-xetex texlive xzdec
tlmgr init-usertree
```

Linux Mint 17.3 の場合は

```
sudo apt install texlive-lang-cjk texlive-luatex texlive-xetex texlive xzdec
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
