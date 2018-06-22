---
title: "texlive-dummy"
url: "/texlive-dummy/"
date: 2016-05-02T14:31:00Z
pukiwiki: "texlive-dummy"
---

# texlive-dummy

## texlive-dummy {#u693d45c}

Linux で TeX Live 公式パッケージをインストールした場合は TeX Live に依存するパッケージによって各種 Linux ディストリビューションが提供している TeX Live がインストールされないように TeX Live の dummy パッケージをインストールします．

- [MyTeXpert:texlive-dummy](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?texlive-dummy)

***

***

### Arch Linux <a id="archlinux"></a> {#e2fe8ca0}

- [https://aur.archlinux.org/packages/texlive-dummy/](https://aur.archlinux.org/packages/texlive-dummy/) (404 - Page Not Found)

<del>TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](https://aur.archlinux.org/packages/texlive-dummy/) をインストールします．</del>

<del>texlive-dummy をインストールすると TeX Live/Arch Linux に依存するパッケージが TeX Live/Arch Linux をインストールするのを防止できます．</del>

```
yay -S texlive-dummy
```

AUR の texlive-dummy は削除されました．--&gt; [http://mao.5ch.net/test/read.cgi/linux/1506160955/911](http://mao.5ch.net/test/read.cgi/linux/1506160955/911) , [http://mao.5ch.net/test/read.cgi/linux/1506160955/912](http://mao.5ch.net/test/read.cgi/linux/1506160955/912)

[https://aur.archlinux.org/cgit/aur.git/snapshot/texlive-dummy.tar.xz](https://aur.archlinux.org/cgit/aur.git/snapshot/texlive-dummy.tar.xz) からダウンロードできるようです．

### Linux Mint/Debian/Ubuntu <a id="linuxmint"></a> <a id="debian"></a> <a id="ubuntu"></a> {#w5728cb9}

- [http://www.tug.org/texlive/debian.html#vanilla](http://www.tug.org/texlive/debian.html#vanilla)

TeX Live の公式サイトのパッケージをインストールしたあとで TeX Live/Debian に依存するパッケージをインストールしようとすると TeX Live/Debian も同時にインストールされてしまいます．
TeX Live/Debian がインストールされないように [dummy パッケージ](http://www.tug.org/texlive/debian.html#vanilla)を作成して依存関係の問題を回避します．

```
sudo apt install equivs
wget http://www.tug.org/texlive/files/debian-equivs-2018-ex.txt
equivs-build debian-equivs-2018-ex.txt
sudo dpkg -i texlive-local_2018-1_all.deb
```

### Fedora <a id="fedora"></a> {#cf6b23bc}

- [https://copr.fedorainfracloud.org/coprs/fatka/texlive-dummy/](https://copr.fedorainfracloud.org/coprs/fatka/texlive-dummy/)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](https://copr.fedorainfracloud.org/coprs/fatka/texlive-dummy/) をインストールします．
texlive-dummy をインストールすると TeX Live/Fedora に依存するパッケージが TeX Live/Fedora をインストールするのを防止できます．

```
sudo dnf copr enable fatka/texlive-dummy
sudo dnf install texlive-dummy
```

### openSUSE <a id="opensuse"></a> {#y33add76}

- [https://ctan.org/tex-archive/support/texlive/texlive-dummy/](https://ctan.org/tex-archive/support/texlive/texlive-dummy/)
    - [https://ctan.org/tex-archive/support/texlive/texlive-dummy/openSUSE](https://ctan.org/tex-archive/support/texlive/texlive-dummy/openSUSE)
- [https://ctan.org/pkg/texlive-dummy-opensuse](https://ctan.org/pkg/texlive-dummy-opensuse)
- [https://software.opensuse.org/package/texlive-dummy_install](https://software.opensuse.org/package/texlive-dummy_install)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](https://ctan.org/tex-archive/support/texlive/texlive-dummy/) をインストールします．
texlive-dummy をインストールすると TeX Live/TeX Live for opensuse.org に依存するパッケージが TeX Live/TeX Live for opensuse.org をインストールするのを防止できます．

```
sudo zypper install http://mirrors.ctan.org/support/texlive/texlive-dummy/openSUSE/texlive-dummy-2018.9999-1.noarch.rpm
```

### RHEL/CentOS/SL <a id="rhel"></a> <a id="centos"></a> <a id="sl"></a> {#ha758dd0}

- [https://ctan.org/tex-archive/support/texlive/texlive-dummy/](https://ctan.org/tex-archive/support/texlive/texlive-dummy/)
    - [https://ctan.org/tex-archive/support/texlive/texlive-dummy/EnterpriseLinux-7](https://ctan.org/tex-archive/support/texlive/texlive-dummy/EnterpriseLinux-7)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](https://ctan.org/tex-archive/support/texlive/texlive-dummy/) をインストールします．
texlive-dummy をインストールすると TeX Live/RHEL/CentOS/SL に依存するパッケージが TeX Live/RHEL/CentOS/SL をインストールするのを防止できます．

```
sudo yum install http://mirrors.ctan.org/support/texlive/texlive-dummy/EnterpriseLinux-7/texlive-dummy-2012a-1.el7.noarch.rpm
```

### Gentoo Linux <a id="gentoolinux"></a> {#i10c1e71}

- [GentooでTeXLiveを使う話](http://ryokubudoh.hatenadiary.com/entry/2015/12/09/171356)
