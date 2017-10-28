---
title: "Linux/Fedora"
url: "/Linux/Fedora/"
date: 2013-05-26T17:14:07Z
pukiwiki: "Linux/Fedora"
---

# Linux/Fedora

[Linux](/Linux/) > Fedora

## [Fedora](https://getfedora.org/) {#l0a22986}

Fedora は信頼性が高く、ユーザーフレンドリーで、パワフルな Linux ディストリビューションです．

<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Fedora_logo_and_wordmark.svg/500px-Fedora_logo_and_wordmark.svg.png,right,around,nolink,Fedora) -->

***

***

### [TeX Live](</TeX Live/>) {#texlive}

#### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#dfc42b2c}

- [Linux](/Linux/#texliveinstall) &amp; [texlive-dummy](/texlive-dummy/#fedora)

#### TeX Live/Fedora <a id="texlivefedora"></a> {#n44a0820}

- [Features/TeXLive - FedoraProject](http://fedoraproject.org/wiki/Features/TeXLive)
- [https://apps.fedoraproject.org/packages/texlive](https://apps.fedoraproject.org/packages/texlive)
- [https://apps.fedoraproject.org/packages/texlive-scheme-full](https://apps.fedoraproject.org/packages/texlive-scheme-full)
- [https://apps.fedoraproject.org/packages/texlive-collection-langjapanese](https://apps.fedoraproject.org/packages/texlive-collection-langjapanese)
- [https://kojipkgs.fedoraproject.org/packages/texlive/](https://kojipkgs.fedoraproject.org/packages/texlive/)

フルインストールする場合は

```
sudo dnf install texlive-scheme-full
```

日本語関連のパッケージのみインストールする場合は

```
sudo dnf install texlive-collection-langjapanese
```

を実行します．

Fedora 27, Fedora 26, Fedora 25 の TeX Live 2016 で upLaTeX を実行すると I can't find the format file \`uplatex.fmt'! と表示されます．
これは /usr/share/texlive/texmf-dist/web2c/fmtutil.cnf の
uplatex, uptex, euptex の項目がコメントアウトされているためなので，これらのコメントアウトを外します．

```
--- /usr/share/texlive/texmf-dist/web2c/fmtutil.cnf.org	2017-02-09 14:19:54.883499043 +0900
+++ /usr/share/texlive/texmf-dist/web2c/fmtutil.cnf	2017-02-09 14:20:59.219760319 +0900
@@ -121,11 +121,11 @@ tex tex - tex.ini
 tex tex - tex.ini
 #
 # from uplatex:
-#! uplatex euptex language.dat *uplatex.ini
+uplatex euptex language.dat *uplatex.ini
 #
 # from uptex:
-#! uptex uptex - uptex.ini
-#! euptex euptex language.def *euptex.ini
+uptex uptex - uptex.ini
+euptex euptex language.def *euptex.ini
 #
 # from xetex:
 xetex xetex language.def -etex xetex.ini
```

sudo fmtutil-sys --byfmt uplatex を実行すると uplatex.fmt が作成され upLaTeX が使用できるようになります．

```
sudo fmtutil-sys --byfmt uplatex
```

### [Ghostscript](/Ghostscript/) {#w3eeacef}

Fedora の Ghostscript は初期設定では日本語が文字化けするかもしれません．
[Ghostscript/Linux](/Ghostscript/Linux/) を参照して適切に設定することで文字化けせずに出力できるようになります．

```
sudo dnf install ghostscript
```

### [Python](/Python/) {#z2c220a1}

#### Python 3 {#o15f7222}

```
sudo dnf install python3
```

#### Python 2 {#c019fdb6}

```
sudo dnf install python
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
sudo dnf install zathura zathura-pdf-poppler
```

### [qpdfview](/qpdfview/) {#yf420316}

```
sudo dnf install qpdfview
```

### [MuPDF](/MuPDF/) {#id862097}

```
sudo dnf install mupdf
```

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

### [Eclipse](/Eclipse/) {#p298a48c}

```
sudo dnf install eclipse
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
sudo dnf install inkscape texlive-latex texlive-dvips texlive-dvisvgm pstoedit python-lxml
```

### ibus-kkc {#a96c1055}

- [ueno/libkkc · GitHub](https://github.com/ueno/libkkc)
- [du -a ~ueno | Just another WordPress site](http://blog.du-a.org/)
- [Features/libkkc - FedoraProject](https://fedoraproject.org/wiki/Features/libkkc)
