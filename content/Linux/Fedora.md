---
title: "Linux/Fedora"
url: "/Linux/Fedora/"
date: 2013-05-26T17:14:07Z
pukiwiki: "Linux/Fedora"
---

# Linux/Fedora

[Linux](/Linux/) > Fedora

## [Fedora](https://getfedora.org/) {#l0a22986}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Fedora_logo_and_wordmark.svg/500px-Fedora_logo_and_wordmark.svg.png" alt="Fedora" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Fedora とは {#q5c4d3a4}

Fedora は信頼性が高く、ユーザーフレンドリーで、パワフルな Linux ベースのオペレーティングシステムです．<br>

- [Fedora](https://getfedora.org/)
- [https://copr.fedoraproject.org/](https://copr.fedoraproject.org/)
- [http://wiki.sugarlabs.org/go/Fedora](http://wiki.sugarlabs.org/go/Fedora)

## ダウンロード {#j75c78dc}

### ミラーサイト {#oc47dabf}

- [Public mirror list#JP](http://mirrors.fedoraproject.org/publiclist/#JP)

## [TeX Live](</TeX Live/>) {#u412c2cf}

- [Fedora Project Wiki](http://fedoraproject.org/wiki/Fedora_Project_Wiki)
    - [Features/TeXLive](https://fedoraproject.org/wiki/Features/TeXLive)
- [https://apps.fedoraproject.org/packages/texlive](https://apps.fedoraproject.org/packages/texlive)
- [https://apps.fedoraproject.org/packages/texlive-scheme-full](https://apps.fedoraproject.org/packages/texlive-scheme-full)
- [https://apps.fedoraproject.org/packages/texlive-collection-langcjk](https://apps.fedoraproject.org/packages/texlive-collection-langcjk)
- [https://kojipkgs.fedoraproject.org/packages/texlive/](https://kojipkgs.fedoraproject.org/packages/texlive/)

### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#dfc42b2c}

- [Linux](/Linux/#texliveinstall)
- [https://github.com/haoyun/texlive-dummy](https://github.com/haoyun/texlive-dummy)
- [https://copr-fe.cloud.fedoraproject.org/coprs/fatka/texlive-dummy/](https://copr-fe.cloud.fedoraproject.org/coprs/fatka/texlive-dummy/)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は texlive-dummy をインストールします．<br>
texlive-dummy をインストールすると TeX Live/Fedora に依存するパッケージが TeX Live/Fedora をインストールするのを防止できます．<br>

### TeX Live/Fedora <a id="texlivefedora"></a> {#n44a0820}

```
$ sudo dnf install texlive-scheme-full
```

## [Ghostscript](/Ghostscript/) {#w3eeacef}

デフォルトの設定では Ghostscript で日本語が表示できないかもしれません．<br>
Ghostscript を適切に設定することで 日本語が表示できるようになります．<br>

```
$ sudo dnf install ghostscript
```

## [Python](/Python/) {#z2c220a1}

```
$ sudo dnf install python python3
```

## Julia {#h3524e63}

- [https://copr.fedoraproject.org/coprs/nalimilan/julia/](https://copr.fedoraproject.org/coprs/nalimilan/julia/)
- [https://copr.fedoraproject.org/coprs/nalimilan/julia-nightlies/](https://copr.fedoraproject.org/coprs/nalimilan/julia-nightlies/)

## [Ruby](/Ruby/) {#j99de34a}

```
$ sudo dnf install ruby
```

## [Perl](/Perl/) {#m7e04372}

```
$ sudo dnf install perl
```

## [Evince](/Evince/) {#na36e8b6}

```
$ sudo dnf install evince
```

## [Okular](/Okular/) {#k7d05705}

```
$ sudo dnf install okular
```

## [zathura](/zathura/) {#i470648d}

```
$ sudo dnf install zathura zathura-pdf-poppler
```

## [qpdfview](/qpdfview/) {#yf420316}

```
$ sudo dnf install qpdfview
```

## [MuPDF](/MuPDF/) {#id862097}

```
$ sudo dnf install mupdf
```

## [LyX](/LyX/) {#n0d7807d}

```
$ sudo dnf install lyx
```

## [TeXstudio](/TeXstudio/) {#aaf316c5}

```
$ sudo dnf install texstudio
```

## [Texmaker](/Texmaker/) {#lcf03ec4}

```
$ sudo dnf install texmaker
```

## [TeXworks](/TeXworks/) {#q8a87364}

```
$ sudo dnf install texworks
```

## [Eclipse](/Eclipse/) {#p298a48c}

```
$ sudo dnf install eclipse
```

## [Emacs](/Emacs/) {#m28f0609}

```
$ sudo dnf install emacs
```

## [Vim](/Vim/) {#c4ba801a}

```
$ sudo dnf install vim
```

## [Inkscape](/Inkscape/) {#ue2d802a}

```
$ sudo dnf install inkscape texlive-latex texlive-dvips texlive-dvisvgm pstoedit python-lxml
```

## ibus-kkc {#a96c1055}

- [ueno/libkkc · GitHub](https://github.com/ueno/libkkc)
- [du -a ~ueno | Just another WordPress site](http://blog.du-a.org/)
- [Features/libkkc - FedoraProject](https://fedoraproject.org/wiki/Features/libkkc)
