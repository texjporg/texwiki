---
title: "Linux/CentOS"
url: "/Linux/CentOS/"
date: 2012-09-14T05:09:13Z
pukiwiki: "Linux/CentOS"
---

# Linux/CentOS

[Linux](/Linux/) > Red Hat Enterprise Linux (RHEL)/CentOS/Scientific Linux (SL)

## [Red Hat Enterprise Linux (RHEL)](http://www.redhat.com/products/enterprise-linux/)/[CentOS](http://www.centos.org/)/[Scientific Linux (SL)](http://www.scientificlinux.org/) {#n9cb81ae}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scientific_Linux_logo_and_wordmark.svg/200px-Scientific_Linux_logo_and_wordmark.svg.png" alt="Scientific Linux (SL)" style="float:right">

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/a/a9/CentOS_full_logo.svg/500px-CentOS_full_logo.svg.png" alt="CentOS" style="float:right">

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/6/6c/RedHat.svg/500px-RedHat.svg.png" alt="Red Hat Enterprise Linux (RHEL)" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Red Hat Enterprise Linux (RHEL) とは {#y9ceb9fc}

Red Hat Enterprise Linux (RHEL) は Red Hat が開発・販売している Linux ディストリビューションです．<br>

- [Red Hat Enterprise Linux](http://www.redhat.com/products/enterprise-linux/)

## CentOS とは {#hc0603c9}

CentOS は Red Hat Enterprise Linux (RHEL) と互換性のある Linux ディストリビューションです．<br>

- [CentOS](http://www.centos.org/)

### ミラーサイト {#tf7026af}

- [the status of CentOS mirrors#jp](http://mirror-status.centos.org/#jp)
- [http://www.centos.org/modules/tinycontent/index.php?id=32](http://www.centos.org/modules/tinycontent/index.php?id=32)

## Scientific Linux (SL) とは {#d9e440c7}

Scientific Linux (SL) は Red Hat Enterprise Linux (RHEL) と互換性のある Linux ディストリビューションです．<br>

- [Scientific Linux (SL)](http://www.scientificlinux.org/)

### ミラーサイト {#vbf06ac5}

- [Scientific Linux - Public Mirrors](http://www.scientificlinux.org/download/mirrors)

## TeX Live {#od75da14}

### TeX Live 2013 {#jc67c0a8}

- [Linux](/Linux/#texlive2013)
- [TeX Live 2013 on Scientific Linux 6.4](http://be.nucl.ap.titech.ac.jp/~koba/cgi-bin/moin.cgi/TeX%20Live%202013%20on%20Scientific%20Linux%206.4)
- [CentOS 6.4 + TeX Live 2013 において pxdvi で日本語を表示する](http://granular.blog39.fc2.com/blog-entry-69.html)
- [TeXLive2013へのアップグレード](http://anastashia.blog.shinobi.jp/tex/upgrade_to_texlive2013)

## [Evince](/Evince/) {#b582893c}

```
$ sudo yum install evince
```

## [Adobe Reader](</Adobe Reader/>) {#eb6955fb}

[Adobe Reader 9 は 2013年6月26日 でサポートが終了](http://www.adobe.com/jp/joc/acrobat/it/news/)しました．<br>
Adobe Reader 9 を使用している方は Adobe Reader XI にアップグレードしてください．<br>
Adobe Reader XI は Wine 上でも動作します．<br>

- [CentOS 6.xにAdobe Readerインストール設定（yum）](http://boota.mydns.jp/blog/?p=2028)
- [http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/](http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/)

```
$ sudo rpm -ivh http://linuxdownload.adobe.com/adobe-release/adobe-release-i386-1.0-1.noarch.rpm
$ sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-adobe-linux
$ sudo yum install nspluginwrapper.i686 AdobeReader_enu
```
