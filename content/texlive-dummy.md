---
title: "texlive-dummy"
url: "/texlive-dummy/"
date: 2016-05-02T14:31:00Z
pukiwiki: "texlive-dummy"
---

# texlive-dummy

[TeX Live](</TeX Live/>) &gt; [Linux](/Linux/#texlive) &gt; texlive-dummy

## texlive-dummy {#u693d45c}

TeX Live 公式パッケージをインストールしても TeX Live に依存するパッケージをインストールすると Linux ディストリビューションが提供している TeX Live も同時にインストールされてしまいます．
Linux ディストリビューションが提供する TeX Live をインストールさせないようにするには TeX Live の dummy パッケージを事前にインストールしてパッケージマネージャに TeX Live が既にインストールされていると錯覚させる必要があります．

***

***

### [Arch Linux](</Linux/Arch Linux/>) <a id="archlinux"></a> {#e2fe8ca0}

- [https://aur.archlinux.org/packages/texlive-dummy/](https://aur.archlinux.org/packages/texlive-dummy/) (404 - Page Not Found)
- [https://aur.archlinux.org/cgit/aur.git/?h=texlive-dummy](https://aur.archlinux.org/cgit/aur.git/?h=texlive-dummy)
- [https://github.com/zhou13/aur/tree/master/texlive-dummy](https://github.com/zhou13/aur/tree/master/texlive-dummy)
- [https://gadgetlunatic.com/latex/install/#linux](https://gadgetlunatic.com/latex/install/#linux)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は AUR の texlive-dummy をインストールします．
texlive-dummy をインストールすると TeX Live/Arch Linux に依存するパッケージが TeX Live/Arch Linux をインストールするのを防止できます．

```
yay -S texlive-dummy
```

AUR の texlive-dummy は削除されました．--&gt; [https://mao.5ch.net/test/read.cgi/linux/1506160955/911-913](https://mao.5ch.net/test/read.cgi/linux/1506160955/911-913)

AUR の texlive-dummy は [https://aur.archlinux.org/cgit/aur.git/snapshot/texlive-dummy.tar.gz](https://aur.archlinux.org/cgit/aur.git/snapshot/texlive-dummy.tar.gz) からダウンロードできるようです．

AUR の texlive-dummy ではなく pacman --assume-installed を使用する場合は &#x7e;/.bashrc に以下の記述を追加してターミナルから source &#x7e;/.bashrc を実行するといいようです．

> alias pacman="pacman --assume-installed texlive-bin $(\pacman -Sgq texlive texlive-lang)"

[https://aur.archlinux.org/pkgbase/texlive-dummy/](https://aur.archlinux.org/pkgbase/texlive-dummy/) (404 - Page Not Found) のアーカイブのコメント欄でのやりとりは以下のようになります．

&amp;<span style="color:#1794D1">Latest Comments</span>;<br>

<strong>zhou13 commented on 2018-02-26 21:56</strong><br>

I am not on the mail list so I cannot post there. But I don't agree with that argument. He argued that "if we let people submit dummy packages, eventually we will have one dummy package in the AUR for each real package in the repos, on top of the numerous variations, patched versions, git version, devel versions, and compat versions". However, there is a reason why packages likes texlive and maybe nodejs deserve a different treatment. They have their own repository so essentially they are like distribution. It is reasonable to use the upstream package, which has less bugs and upgrades more frequently. In case of texlive, it has a huge list of dependency. Having an aur package is really convenient.

<strong>Fabio&#x4c;olix commented on 2018-02-25 23:09</strong><br>

As per this discussion [https://lists.archlinux.org/pipermail/aur-requests/2018-January/021830.html](https://lists.archlinux.org/pipermail/aur-requests/2018-January/021830.html) keep your pacman trickery for yourself and ask for deletion of this package or I'll do it. Thanks &#x3a;)

<strong>zhou13 commented on 2018-01-21 23:53</strong><br>

I don't know why the old texlive-dummy is removed from AUR so I created this. I just looked up the --asume-installed and I think they are very different. IMO the former is more likely to be a temporary solution. I don't want to have any inconsistency in my package dependency and texlive-dummy seems to be the only solution. I don't think such functionality can be replaced by --assumend-installed.

<strong>Foucault commented on 2018-01-21 11:57</strong><br>

This will get flagged for deletion again because the functionality is built-in to pacman.

pacman --assume-installed texlive-bin=2017.44590 etc.

It is however more convenient to have a separate package instead of adding a dozen command line arguments when installing a package.

### [Linux Mint/Debian/Ubuntu](</Linux/Linux Mint/>) <a id="linuxmint"></a> <a id="debian"></a> <a id="ubuntu"></a> {#w5728cb9}

- [https://wiki.debian.org/TeXLive#Integrating_vanilla_TeX_Live_with_Debian](https://wiki.debian.org/TeXLive#Integrating_vanilla_TeX_Live_with_Debian)
    <!-- -[[WSL に TeX Live の導入(+AucTeX の設定)#設定:https://qiita.com//ignorant/items/f8039a1e01292afff07f#%E8%A8%AD%E5%AE%9A]] -->
    <!-- -[[インストール後にやること#dummy パッケージの作成・インストール:http://www.fugenji.org/~thomas/texlive-guide/post_install.html]] -->
    <!-- -[[WSL+TeX Live環境を一から構築する#TeX 環境構築:https://www.ykyki.com/blog/install-wsl-and-texlive/#tex-%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89]] -->
    <!-- -[[Debian 12 bookwormでのtexlive-dummy:https://okumuralab.org/tex/mod/forum/discuss.php?d=3600]] -->
    <!-- -[[Debian 12 texlive-dummyのインストールについて:https://okumuralab.org/tex/mod/forum/discuss.php?d=3604]] -->

TeX Live の公式サイトのパッケージをインストールしたあとで TeX Live/Debian に依存するパッケージをインストールしようとすると TeX Live/Debian も同時にインストールされてしまいます．
TeX Live/Debian がインストールされないように [dummy パッケージ](https://wiki.debian.org/TeXLive#Integrating_vanilla_TeX_Live_with_Debian)を作成して依存関係の問題を回避します．

```
sudo apt install equivs
wget https://www.tug.org/texlive/files/debian-equivs-2023-ex.txt
equivs-build debian-equivs-2023-ex.txt
sudo dpkg -i texlive-local_2023.99999999-1_all.deb
```

### [Fedora](/Linux/Fedora/) <a id="fedora"></a> {#cf6b23bc}

- [https://ctan.org/tex-archive/support/texlive/texlive-dummy/](https://ctan.org/tex-archive/support/texlive/texlive-dummy/)
    - [https://ctan.org/tex-archive/support/texlive/texlive-dummy/Fedora](https://ctan.org/tex-archive/support/texlive/texlive-dummy/Fedora)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](https://ctan.org/tex-archive/support/texlive/texlive-dummy/) をインストールします．
texlive-dummy をインストールすると TeX Live/Fedora に依存するパッケージが TeX Live/Fedora をインストールするのを防止できます．

```
sudo dnf install https://mirrors.ctan.org/support/texlive/texlive-dummy/Fedora/texlive-dummy-2022-1.fc36.noarch.rpm
```

### [openSUSE](/Linux/openSUSE/) <a id="opensuse"></a> {#y33add76}

- [https://ctan.org/tex-archive/support/texlive/texlive-dummy/](https://ctan.org/tex-archive/support/texlive/texlive-dummy/)
    - [https://ctan.org/tex-archive/support/texlive/texlive-dummy/openSUSE](https://ctan.org/tex-archive/support/texlive/texlive-dummy/openSUSE)
- [https://ctan.org/pkg/texlive-dummy-opensuse](https://ctan.org/pkg/texlive-dummy-opensuse)
- [https://software.opensuse.org/package/texlive-dummy](https://software.opensuse.org/package/texlive-dummy)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](https://ctan.org/tex-archive/support/texlive/texlive-dummy/) をインストールします．
texlive-dummy をインストールすると TeX Live/TeX Live for SUSE Linux に依存するパッケージが TeX Live/TeX Live for SUSE Linux をインストールするのを防止できます．

```
sudo zypper install https://mirrors.ctan.org/support/texlive/texlive-dummy/openSUSE/texlive-dummy-2024.9999-2.noarch.rpm
```

### Red Hat Enterprise Linux (RHEL) {#xcb6b24c}

- [https://ctan.org/tex-archive/support/texlive/texlive-dummy/](https://ctan.org/tex-archive/support/texlive/texlive-dummy/)
    - [https://ctan.org/tex-archive/support/texlive/texlive-dummy/EnterpriseLinux-8](https://ctan.org/tex-archive/support/texlive/texlive-dummy/EnterpriseLinux-8)

```
sudo yum install https://mirrors.ctan.org/support/texlive/texlive-dummy/EnterpriseLinux-8/texlive-dummy-2020-4.el8.noarch.rpm
```

### Gentoo Linux <a id="gentoolinux"></a> {#i10c1e71}

- [GentooでTeXLiveを使う話](https://ryokubudoh.hatenadiary.com/entry/2015/12/09/171356)
