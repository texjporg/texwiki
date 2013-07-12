---
title: "Linux/CentOS"
url: "/Linux/CentOS/"
date: 2012-09-14T05:09:13Z
pukiwiki: "Linux/CentOS"
---

# Linux/CentOS

[Linux](/Linux/) > CentOS/Scientific Linux (SL)

## [CentOS](http://www.centos.org/)/[Scientific Linux (SL)](http://www.scientificlinux.org/) {#n9cb81ae}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scientific_Linux_logo_and_wordmark.svg/200px-Scientific_Linux_logo_and_wordmark.svg.png" alt="Scientific Linux (SL)" style="float:right">

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/a/a9/CentOS_full_logo.svg/500px-CentOS_full_logo.svg.png" alt="CentOS" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## CentOS とは {#hc0603c9}

CentOS は Red Hat Enterprise Linux (RHEL) と互換性のある Linux ディストリビューションです．<br>

- [CentOS](http://www.centos.org/)

## Scientific Linux (SL) とは {#d9e440c7}

Scientific Linux (SL) は Red Hat Enterprise Linux (RHEL) と互換性のある Linux ディストリビューションです．<br>

- [Scientific Linux (SL)](http://www.scientificlinux.org/)

## TeX Live {#od75da14}

### TeX Live 2013 {#jc67c0a8}

- [CentOS 6.4 + TeX Live 2013 において pxdvi で日本語を表示する](http://granular.blog39.fc2.com/blog-entry-69.html)
- [TeXLive2013へのアップグレード](http://anastashia.blog.shinobi.jp/tex/upgrade_to_texlive2013)
- [Linux](/Linux/#texlive2013)

### TeX Live 2012, Ghostscript {#e1520aae}

- [CentOS 6.4 で ps2pdf のエラー](http://granular.blog39.fc2.com/blog-entry-66.html)
- [CentOS 6.3にGhostscript 9.07とTeXLive 2012をインストールする](http://dokoka.org/wiki.cgi?page=CentOS+6%2E3%A4%CBGhostscript+9%2E07%A4%C8TeXLive+2012%A4%F2%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB%A4%B9%A4%EB)
- [Linuxに日本語LaTeXを導入する](http://note.chiebukuro.yahoo.co.jp/detail/n151638)
- [TeX Live 2012をCentOS6にインストール](http://kame-t.hatenablog.jp/entry/2012/11/27/154813), [TeX Live 2012をSELinux Enforcingで動かす](http://kame-t.hatenablog.jp/entry/2012/12/05/141752)
- [chef-texlive](https://github.com/tk0miya/chef-texlive)
- [CentOS - TeX Live 2012 インストール！](http://www.mk-mode.com/wordpress/2012/09/15002016/)

## [Evince](/Evince/) {#b582893c}

```
$ sudo yum install evince
```

## [Adobe Reader](</Adobe Reader/>) {#eb6955fb}

[Adobe Reader 9 は 2013年6月26日 でサポートが終了](http://www.adobe.com/jp/joc/acrobat/it/news/)しました．<br>
Adobe Reader 9 を使用している方は Adobe Reader XI にアップグレードしてください．<br>
Adobe Reader XI は [Wine](http://www.winehq.org/) 上でも動作します．<br>

- [CentOS 6.xにAdobe Readerインストール設定（yum）](http://boota.mydns.jp/blog/?p=2028)
- [http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/](http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/)

```
$ sudo rpm -ivh http://linuxdownload.adobe.com/adobe-release/adobe-release-i386-1.0-1.noarch.rpm
$ sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-adobe-linux
$ sudo yum install nspluginwrapper.i686 AdobeReader_enu
```
