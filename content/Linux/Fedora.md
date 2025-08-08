---
title: "Linux/Fedora"
url: "/Linux/Fedora/"
date: 2013-05-26T17:14:07Z
pukiwiki: "Linux/Fedora"
---

# Linux/Fedora

[Linux](/Linux/) > Fedora

## [Fedora](https://getfedora.org/) {#l0a22986}

Fedora Workstation は、ノート PC やデスクトップ向けに洗練された簡単に使えるオペレーティングシステムです。

<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Fedora_logo_and_wordmark.svg/500px-Fedora_logo_and_wordmark.svg.png,right,around,nolink,Fedora) -->

***

***

### [TeX Live](</TeX Live/>) {#texlive}

#### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#dfc42b2c}

- [Linux](/Linux/#texliveinstall) &amp; [texlive-dummy](/texlive-dummy/#fedora)

#### TeX Live/Fedora <a id="texlivefedora"></a> {#n44a0820}

- [https://packages.fedoraproject.org/pkgs/texlive/](https://packages.fedoraproject.org/pkgs/texlive/)
    - [https://packages.fedoraproject.org/pkgs/texlive/texlive-scheme-full/](https://packages.fedoraproject.org/pkgs/texlive/texlive-scheme-full/)
    - [https://packages.fedoraproject.org/pkgs/texlive/texlive-collection-langjapanese/](https://packages.fedoraproject.org/pkgs/texlive/texlive-collection-langjapanese/)
    - [https://packages.fedoraproject.org/pkgs/texlive/texlive-collection-latexextra/](https://packages.fedoraproject.org/pkgs/texlive/texlive-collection-latexextra/)
    - [https://packages.fedoraproject.org/pkgs/texlive/texlive-collection-luatex/](https://packages.fedoraproject.org/pkgs/texlive/texlive-collection-luatex/)

フルインストールする場合は

```
sudo dnf install texlive-scheme-full
```

日本語関連のパッケージのみインストールする場合は

```
sudo dnf install texlive-collection-langjapanese texlive-collection-latexextra texlive-collection-luatex
```

を実行します．[jlreq](/jlreq/) は LuaLaTeX 非利用時は everyhook.sty が必要なので texlive-collection-latexextra をインストールする必要があります．
[LuaTeX-ja](/LuaTeX-ja/) は luatexja-core.sty で luatexbase.sty が必要なので texlive-collection-luatex をインストールする必要があります．

### [Ghostscript](/Ghostscript/) {#w3eeacef}

Fedora の Ghostscript は初期設定では日本語が文字化けします．
cjk-gs-integrate を使用することで文字化けせずに出力できるようになります．

```
sudo dnf install ghostscript
wget https://github.com/texjporg/cjk-gs-support/releases/download/20210625.0/cjk-gs-integrate-20210625.0.tar.gz
tar xvf cjk-gs-integrate-20210625.0.tar.gz
cd cjk-gs-integrate-20210625.0
sudo ./cjk-gs-integrate.pl --link-texmf --force
```

### [Python](/Python/) {#z2c220a1}

```
sudo dnf install python3
```

### Julia {#h3524e63}

```
sudo dnf install julia
```

### [Ruby](/Ruby/) {#j99de34a}

```
sudo dnf install ruby
```

### [Perl](/Perl/) {#m7e04372}

```
sudo dnf install perl
```

### [Evince](/Evince/) {#na36e8b6}

```
sudo dnf install evince
```

### [Okular](/Okular/) {#k7d05705}

```
sudo dnf install okular
```

### [zathura](/zathura/) {#i470648d}

```
sudo dnf install zathura zathura-pdf-poppler zathura-ps
```

または

```
sudo dnf install zathura zathura-pdf-mupdf zathura-ps
```

### [qpdfview](/qpdfview/) {#yf420316}

```
sudo dnf install qpdfview
```

### [MuPDF](/MuPDF/) {#id862097}

```
sudo dnf install mupdf
```

### [Adobe Acrobat Reader](</Adobe Acrobat Reader/>) {#k1d313de}

[Adobe Acrobat Reader](</Adobe Acrobat Reader/#linux>)

### [LyX](/LyX/) {#n0d7807d}

```
sudo dnf install lyx
```

### [TeXstudio](/TeXstudio/) {#aaf316c5}

```
sudo dnf install texstudio
```

### [Texmaker](/Texmaker/) {#lcf03ec4}

```
sudo dnf install texmaker
```

### [TeXworks](/TeXworks/) {#q8a87364}

```
sudo dnf install texworks
```

### [Emacs](/Emacs/) {#m28f0609}

```
sudo dnf install emacs
```

### [Vim](/Vim/) {#c4ba801a}

```
sudo dnf install vim
```

### [Inkscape](/Inkscape/) {#ue2d802a}

```
sudo dnf install inkscape
```

### ibus-kkc {#a96c1055}

- [ueno/libkkc · GitHub](https://github.com/ueno/libkkc)
- [du -a ~ueno | Just another WordPress site](http://blog.du-a.org/)
- [Features/libkkc - FedoraProject](https://fedoraproject.org/wiki/Features/libkkc)
