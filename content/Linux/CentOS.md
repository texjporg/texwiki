---
title: "Linux/CentOS"
url: "/Linux/CentOS/"
date: 2012-09-14T05:09:13Z
pukiwiki: "Linux/CentOS"
---

# Linux/CentOS

[Linux](/Linux/) > Red Hat Enterprise Linux (RHEL)/CentOS

## [Red Hat Enterprise Linux (RHEL)](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux)/[CentOS](https://www.centos.org/) {#n9cb81ae}

Red Hat Enterprise Linux (RHEL) は Red Hat が開発・販売している Linux ディストリビューションです．

CentOS は Red Hat Enterprise Linux (RHEL) と互換性のある Linux ディストリビューションです．

<!-- #ref(http://upload.wikimedia.org/wikipedia/en/thumb/6/6c/RedHat.svg/500px-RedHat.svg.png,right,around,nolink,Red Hat Enterprise Linux (RHEL)) -->
<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Centos_full.svg/500px-Centos_full.svg.png,right,around,nolink,CentOS) -->

***

***

### TeX Live {#texlive}

#### TeX Live 公式パッケージ {#jc67c0a8}

- [Linux](/Linux/#texliveinstall) &amp; [texlive-dummy](/texlive-dummy/#centos)
- [参考メモ/CentOS7に TeX Live 2016 をインストールして簡単な動作確認をする](https://qiita.com/msakamoto_sf/items/78c322cb8656615ce134)
- [TeXを任意のディレクトリにインストールする（CentOS版）](http://nc30mtd.oops.jp/blog/2015/11/texcentos.html)
- [CentOS 7 における TeX Live 2015 のインストール手順 ISO イメージ編](http://yoshiiz.blog129.fc2.com/blog-entry-828.html)

#### TeX Live/CentOS 7 (1804) --&gt; TeX Live 公式パッケージを使用する {#w0c3dfae}

CentOS 7 (1804) の TeX Live は TeX Live 2013 です．
最新版の TeX Live が必要な場合あるいは (u)pTeX が必要で sudo yum install texlive-\* でインストールすると (u)pTeX がインストールされなかった場合は TeX Live 公式パッケージを使用してください．

```
sudo yum install texlive-*
```

### [Ghostscript](/Ghostscript/) {#j27db6cf}

```
sudo yum install ghostscript
```

### [Python](/Python/) {#r2377e5f}

#### Python 3 {#h7df1ef5}

- [https://ius.io/LifeCycle/#python](https://ius.io/LifeCycle/#python) , [https://github.com/iuscommunity-pkg/](https://github.com/iuscommunity-pkg/)
    - [Python 3 を CentOS 7 に yum でインストールする手順](https://weblabo.oscasierra.net/python3-centos7-yum-install/)
- [https://www.softwarecollections.org/scls/?search=Python](https://www.softwarecollections.org/scls/?search=Python)

#### Python 2 {#b51e9b09}

```
sudo yum install python
```

### Julia {#p0236f37}

- [https://copr.fedorainfracloud.org/coprs/nalimilan/julia/](https://copr.fedorainfracloud.org/coprs/nalimilan/julia/)
- [https://copr.fedorainfracloud.org/coprs/nalimilan/julia-nightlies/](https://copr.fedorainfracloud.org/coprs/nalimilan/julia-nightlies/)

### [Ruby](/Ruby/) {#pa5990a1}

```
sudo yum install ruby
```

### [Perl](/Perl/) {#ye8ee108}

```
sudo yum install perl
```

### [Evince](/Evince/) {#b582893c}

```
sudo yum install evince
```

### [Okular](/Okular/) {#nf124489}

```
sudo yum install okular
```

### [LyX](/LyX/) {#ucf886d7}

- [https://pkgs.org/download/lyx](https://pkgs.org/download/lyx)

### [TeXstudio](/TeXstudio/) {#d3954fd9}

TeXstudio の公式サイトから CentOS 用の TeXstudio のパッケージが入手できます．

- [http://download.opensuse.org/repositories/home:/jsundermeyer/CentOS_CentOS-7/x86_64/](http://download.opensuse.org/repositories/home:/jsundermeyer/CentOS_CentOS-7/x86_64/)

### Software Collections {#m01d8b64}

- [Software Collections &mdash; Software Collections](https://www.softwarecollections.org/)
- [http://wiki.centos.org/AdditionalResources/Repositories/SCL](http://wiki.centos.org/AdditionalResources/Repositories/SCL)
