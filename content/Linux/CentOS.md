---
title: "Linux/CentOS"
url: "/Linux/CentOS/"
date: 2012-09-14T05:09:13Z
pukiwiki: "Linux/CentOS"
---

# Linux/CentOS

[Linux](/Linux/) > Red Hat Enterprise Linux (RHEL)/CentOS/Scientific Linux (SL)

## [Red Hat Enterprise Linux (RHEL)](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux)/[CentOS](https://www.centos.org/)/[Scientific Linux (SL)](http://www.scientificlinux.org/) {#n9cb81ae}

Red Hat Enterprise Linux (RHEL) は Red Hat が開発・販売している Linux ディストリビューションです．

CentOS は Red Hat Enterprise Linux (RHEL) と互換性のある Linux ディストリビューションです．

Scientific Linux (SL) は Red Hat Enterprise Linux (RHEL) と互換性のある Linux ディストリビューションです．

<!-- #ref(http://upload.wikimedia.org/wikipedia/en/thumb/6/6c/RedHat.svg/500px-RedHat.svg.png,right,around,nolink,Red Hat Enterprise Linux (RHEL)) -->
<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Centos_full.svg/500px-Centos_full.svg.png,right,around,nolink,CentOS) -->
<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scientific_Linux_logo_and_wordmark.svg/200px-Scientific_Linux_logo_and_wordmark.svg.png,right,around,nolink,Scientific Linux (SL)) -->

***

***

### TeX Live {#texlive}

#### TeX Live 公式パッケージ {#jc67c0a8}

- [Linux](/Linux/#texliveinstall)
- [TeXを任意のディレクトリにインストールする（CentOS版）](http://nc30mtd.oops.jp/blog/2015/11/texcentos.html)
- [CentOS 7 における TeX Live 2015 のインストール手順 ISO イメージ編](http://yoshiiz.blog129.fc2.com/blog-entry-828.html)
- [http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/](http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/)
    - [http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/EnterpriseLinux-7](http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/EnterpriseLinux-7)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/) をインストールします．
texlive-dummy をインストールすると TeX Live/RHEL/CentOS/SL に依存するパッケージが TeX Live/RHEL/CentOS/SL をインストールするのを防止できます．

```
$ sudo yum install http://mirrors.ctan.org/support/texlive/texlive-dummy/EnterpriseLinux-7/texlive-dummy-2012a-1.el7.noarch.rpm
```

#### TeX Live/RHEL/CentOS/SL --&gt; TeX Live 公式パッケージを使用する {#w0c3dfae}

- [http://centos-packages.com/7/results/texlive/](http://centos-packages.com/7/results/texlive/)
- [http://centos-packages.com/7/package/texlive/](http://centos-packages.com/7/package/texlive/)

RHEL/CentOS/SL 7.2 の TeX Live は TeX Live 2012 です．
最新版の TeX Live が必要な場合あるいは (u)pTeX が必要で sudo yum install texlive-\* でインストールすると (u)pTeX がインストールされなかった場合は TeX Live 公式パッケージを使用してください．

```
$ sudo yum install texlive-*
```

### [Ghostscript](/Ghostscript/) {#j27db6cf}

```
$ sudo yum install ghostscript
```

### [Python](/Python/) {#r2377e5f}

#### Python 3 {#h7df1ef5}

- [https://www.softwarecollections.org/scls/?search=Python](https://www.softwarecollections.org/scls/?search=Python)

#### Python 2 {#b51e9b09}

```
$ sudo yum install python
```

### Julia {#p0236f37}

- [https://copr.fedorainfracloud.org/coprs/nalimilan/julia/](https://copr.fedorainfracloud.org/coprs/nalimilan/julia/)
- [https://copr.fedorainfracloud.org/coprs/nalimilan/julia-nightlies/](https://copr.fedorainfracloud.org/coprs/nalimilan/julia-nightlies/)

### [Ruby](/Ruby/) {#pa5990a1}

```
$ sudo yum install ruby
```

### [Perl](/Perl/) {#ye8ee108}

```
$ sudo yum install perl
```

### [Evince](/Evince/) {#b582893c}

```
$ sudo yum install evince
```

### [Okular](/Okular/) {#nf124489}

```
$ sudo yum install okular
```

### [LyX](/LyX/) {#ucf886d7}

- [https://pkgs.org/search/LyX](https://pkgs.org/search/LyX)
- [http://dl.fedoraproject.org/pub/epel/7/x86_64/l/](http://dl.fedoraproject.org/pub/epel/7/x86_64/l/)
- [http://dl.fedoraproject.org/pub/epel/testing/7/x86_64/l/](http://dl.fedoraproject.org/pub/epel/testing/7/x86_64/l/)

### [TeXstudio](/TeXstudio/) {#d3954fd9}

TeXstudio の公式サイトから CentOS 用の TeXstudio のパッケージが入手できます．

### Software Collections {#m01d8b64}

- [Software Collections &mdash; Software Collections](https://www.softwarecollections.org/)
- [http://wiki.centos.org/AdditionalResources/Repositories/SCL](http://wiki.centos.org/AdditionalResources/Repositories/SCL)
