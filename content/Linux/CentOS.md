---
title: "Linux/CentOS"
url: "/Linux/CentOS/"
date: 2012-09-14T05:09:13Z
pukiwiki: "Linux/CentOS"
---

# Linux/CentOS

[Linux](/Linux/) > Red Hat Enterprise Linux (RHEL)/CentOS/Scientific Linux (SL)

## [Red Hat Enterprise Linux (RHEL)](http://www.redhat.com/products/enterprise-linux/)/[CentOS](http://www.centos.org/)/[Scientific Linux (SL)](http://www.scientificlinux.org/) {#n9cb81ae}

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/6/6c/RedHat.svg/500px-RedHat.svg.png" alt="Red Hat Enterprise Linux (RHEL)" style="float:right">

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Centos_full.svg/500px-Centos_full.svg.png" alt="CentOS" style="float:right">

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scientific_Linux_logo_and_wordmark.svg/200px-Scientific_Linux_logo_and_wordmark.svg.png" alt="Scientific Linux (SL)" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Red Hat Enterprise Linux (RHEL) とは {#y9ceb9fc}

Red Hat Enterprise Linux (RHEL) は Red Hat が開発・販売している Linux ディストリビューションです．<br>

- [Red Hat Enterprise Linux](http://www.redhat.com/products/enterprise-linux/)
- [http://ftp.redhat.com/redhat/linux/enterprise/](http://ftp.redhat.com/redhat/linux/enterprise/)
- [ftp://ftp.redhat.com/redhat/linux/enterprise/](ftp://ftp.redhat.com/redhat/linux/enterprise/)
- [http://ftp.redhat.com/redhat/rhel/](http://ftp.redhat.com/redhat/rhel/)
- [ftp://ftp.redhat.com/redhat/rhel/](ftp://ftp.redhat.com/redhat/rhel/)

## CentOS とは {#hc0603c9}

CentOS は Red Hat Enterprise Linux (RHEL) と互換性のある Linux ディストリビューションです．<br>

- [CentOS project](http://www.centos.org/)
- [FrontPage - CentOS Wiki](http://wiki.centos.org/)
- [Systemdコマンド早見表(CentOS 7対応)](http://blog.yuryu.jp/2014/07/systemd-quick-guide.html)

### ミラーサイト {#tf7026af}

- [the status of CentOS mirrors#jp](http://mirror-status.centos.org/#jp)

### ChangeLog {#q632c241}

- [https://git.centos.org/](https://git.centos.org/)
    - [https://git.centos.org/activity/](https://git.centos.org/activity/)
    - [https://git.centos.org/summary/?r=centos-git-common.git](https://git.centos.org/summary/?r=centos-git-common.git)

## Scientific Linux (SL) とは {#d9e440c7}

Scientific Linux (SL) は Red Hat Enterprise Linux (RHEL) と互換性のある Linux ディストリビューションです．<br>

- [Scientific Linux (SL)](http://www.scientificlinux.org/)

### ミラーサイト {#vbf06ac5}

- [SL Mirrors | Scientific Linux](http://www.scientificlinux.org/downloads/sl-mirrors/)

## Software Collections {#m01d8b64}

- [Software Collections &mdash; Software Collections](https://www.softwarecollections.org/)
- [http://wiki.centos.org/AdditionalResources/Repositories/SCL](http://wiki.centos.org/AdditionalResources/Repositories/SCL)

## TeX Live {#od75da14}

### TeX Live 公式パッケージ {#jc67c0a8}

- [Linux](/Linux/#texliveinstall)
- [http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/](http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/)
    - [http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/EnterpriseLinux-7](http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/EnterpriseLinux-7)
        <!-- -[http://optipessimist.blog108.fc2.com/blog-entry-404.html CentOS6.5での文書作成環境構築（備忘録）] -->
        <!-- -[http://be.nucl.ap.titech.ac.jp/~koba/cgi-bin/moin.cgi/TeX%20Live%202013%20on%20Scientific%20Linux%206.4 TeX Live 2013 on Scientific Linux 6.4] -->
        <!-- -[http://kousei42.s246.xrea.com/wiki/index.cgi?page=%23014%2ELyX #014.LyX - kosewiki] -->

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/) をインストールします．<br>
texlive-dummy をインストールすると TeX Live/RHEL に依存するパッケージが TeX Live/RHEL をインストールするのを防止できます．<br>

```
$ sudo rpm -ivh http://mirrors.ctan.org/support/texlive/texlive-dummy/EnterpriseLinux-7/texlive-dummy-2012a-1.el7.noarch.rpm
```

### TeX Live/RHEL → TeX Live 公式パッケージを使用する {#w0c3dfae}

RHEL/CentOS/SL 7.0 の TeX Live は TeX Live 2013 です．<br>
sudo yum install texlive-\* でインストールすると (u)pTeX がインストールされなかったので RHEL/CentOS/SL 7.0 の TeX Live は (u)pTeX が収録されていないかもしれません．<br>
最新版の TeX Live または (u)pTeX が必要な場合は TeX Live 公式パッケージを使用してください．<br>

```
$ sudo yum install texlive-*
```

## [Ghostscript](/Ghostscript/) {#j27db6cf}

RHEL/CentOS/SL 7.0 の Ghostscript は Ghostscript 9.07 です．<br>

```
$ sudo yum install ghostscript
```

## [Python](/Python/) {#r2377e5f}

### Python 3 {#h7df1ef5}

- [https://www.softwarecollections.org/scls/?search=Python](https://www.softwarecollections.org/scls/?search=Python)

### Python 2 {#b51e9b09}

RHEL/CentOS/SL 7.0 の Python は Python 2.7.5 です．<br>

```
$ sudo yum install python
```

## Julia {#p0236f37}

- [https://copr.fedoraproject.org/coprs/nalimilan/julia/](https://copr.fedoraproject.org/coprs/nalimilan/julia/)
- [https://copr.fedoraproject.org/coprs/nalimilan/julia-nightlies/](https://copr.fedoraproject.org/coprs/nalimilan/julia-nightlies/)

## [Ruby](/Ruby/) {#pa5990a1}

RHEL/CentOS/SL 7.0 の Ruby は ruby 2.0.0p353 (2013-11-22) \[x86_64-linux\] です．<br>

```
$ sudo yum install ruby
```

## [Perl](/Perl/) {#ye8ee108}

RHEL/CentOS/SL 7.0 の Perl は Perl 5.16.3 です．<br>

```
$ sudo yum install perl
```

## [Evince](/Evince/) {#b582893c}

RHEL/CentOS/SL 7.0 の Evince は Evince 3.8.3 です．<br>

```
$ sudo yum install evince
```

## [Okular](/Okular/) {#nf124489}

RHEL/CentOS/SL 7.0 の Okular は Okular 0.16.5 です．<br>

```
$ sudo yum install okular
```

## [TeXstudio](/TeXstudio/) {#d3954fd9}

TeXstudio の公式サイトから CentOS 用の TeXstudio のパッケージが入手できます．<br>

- [http://download.opensuse.org/repositories/home:/jsundermeyer/CentOS_CentOS-7/x86_64/](http://download.opensuse.org/repositories/home:/jsundermeyer/CentOS_CentOS-7/x86_64/)
