---
title: "Linux/Fedora"
url: "/Linux/Fedora/"
date: 2013-05-26T17:14:07Z
pukiwiki: "Linux/Fedora"
---

# Linux/Fedora

[Linux](/Linux/) > Fedora

## [Fedora](http://fedoraproject.org/) {#l0a22986}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Fedora_logo_and_wordmark.svg/500px-Fedora_logo_and_wordmark.svg.png" alt="Fedora" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Fedora とは {#q5c4d3a4}

Fedora は日常的な使用に適した，軽快・安定・高機能な Linux ベースのオペレーティングシステムです．<br>

- [Fedora Project](http://fedoraproject.org/)
- [http://wiki.sugarlabs.org/go/Fedora](http://wiki.sugarlabs.org/go/Fedora)

## ダウンロード {#j75c78dc}

### ミラーサイト {#oc47dabf}

- [Public mirror list#JP](http://mirrors.fedoraproject.org/publiclist/#JP)

## [TeX Live](</TeX Live/>) {#u412c2cf}

- [Fedora Project Wiki](http://fedoraproject.org/wiki/Fedora_Project_Wiki)
    - [Features/TeXLive](http://fedoraproject.org/wiki/Features/TeXLive)
- [https://apps.fedoraproject.org/packages/texlive](https://apps.fedoraproject.org/packages/texlive)
- [https://apps.fedoraproject.org/packages/texlive-scheme-full](https://apps.fedoraproject.org/packages/texlive-scheme-full)
- [https://apps.fedoraproject.org/packages/texlive-collection-langcjk](https://apps.fedoraproject.org/packages/texlive-collection-langcjk)
- [http://kojipkgs.fedoraproject.org/packages/texlive/](http://kojipkgs.fedoraproject.org/packages/texlive/)

### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#dfc42b2c}

- [Linux](/Linux/#texliveinstall)

### TeX Live/Fedora <a id="texlivefedora"></a> {#n44a0820}

```
$ sudo yum install texlive-scheme-full
```

## [Ghostscript](/Ghostscript/) {#w3eeacef}

```
$ sudo yum install ghostscript
```

デフォルトの設定では Ghostscript で日本語が表示できないかもしれません．<br>
Ghostscript を適切に設定することで 日本語が表示できるようになります．<br>

## [Python](/Python/) {#z2c220a1}

```
$ sudo yum install python python3
```

## [Ruby](/Ruby/) {#j99de34a}

```
$ sudo yum install ruby
```

## [Perl](/Perl/) {#m7e04372}

```
$ sudo yum install perl
```

## [Evince](/Evince/) {#na36e8b6}

```
$ sudo yum install evince
```

## [Okular](/Okular/) {#k7d05705}

```
$ sudo yum install okular
```

## [zathura](/zathura/) {#i470648d}

```
$ sudo yum install zathura zathura-pdf-poppler
```

## [qpdfview](/qpdfview/) {#yf420316}

```
$ sudo yum install qpdfview
```

## [MuPDF](/MuPDF/) {#id862097}

```
$ sudo yum install mupdf
```

## [Adobe Reader](</Adobe Reader/>) (Windows 版) + Wine {#m85c82f5}

[Adobe Reader 9 のサポートは終了](http://www.adobe.com/jp/jos/acrobat/it/endsupport.html)しました．<br>
Adobe Reader 9 を使用している方は Adobe Reader XI にアップグレードしてください．<br>
Adobe Reader XI は Wine 上でも動作します．<br>

<!-- -http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/ -->
<!--  -->
<!-- $ sudo rpm -ivh http://linuxdownload.adobe.com/adobe-release/adobe-release-i386-1.0-1.noarch.rpm -->
<!-- $ sudo rpm - -import /etc/pki/rpm-gpg/RPM-GPG-KEY-adobe-linux -->
<!-- $ sudo yum install nspluginwrapper.i686 AdobeReader_enu -->

## [LyX](/LyX/) {#n0d7807d}

```
$ sudo yum install lyx
```

## [TeXstudio](/TeXstudio/) {#aaf316c5}

```
$ sudo yum install texstudio
```

## [TeXworks](/TeXworks/) {#q8a87364}

```
$ sudo yum install texworks
```

## [Eclipse](/Eclipse/) {#p298a48c}

```
$ sudo yum install eclipse
```

## [Emacs](/Emacs/) {#m28f0609}

```
$ sudo yum install emacs
```

## [Vim](/Vim/) {#c4ba801a}

```
$ sudo yum install vim
```

## [Inkscape](/Inkscape/) {#ue2d802a}

```
$ sudo yum install inkscape texlive-latex texlive-dvips texlive-dvisvgm pstoedit python-lxml
```

## ibus-kkc {#a96c1055}

- [libkkc / libkkc / wiki / Home &mdash; Bitbucket](https://bitbucket.org/libkkc/libkkc/)
- [libkkc - Gitorious](https://gitorious.org/libkkc)
- [du -a ~ueno | Just another WordPress site](http://blog.du-a.org/)
- [Features/libkkc - FedoraProject](https://fedoraproject.org/wiki/Features/libkkc)
