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

- [https://aur.archlinux.org/packages/texlive-dummy/](https://aur.archlinux.org/packages/texlive-dummy/)
- [https://aur.archlinux.org/cgit/aur.git/?h=texlive-dummy](https://aur.archlinux.org/cgit/aur.git/?h=texlive-dummy)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は AUR の texlive-dummy をインストールします．
texlive-dummy をインストールすると TeX Live/Arch Linux に依存するパッケージが TeX Live/Arch Linux をインストールするのを防止できます．

```
paru -S texlive-dummy
```

AUR の texlive-dummy ではなく pacman --assume-installed を使用する場合は &#x7e;/.bashrc に以下の記述を追加してターミナルから source &#x7e;/.bashrc を実行するといいようです．

> alias pacman="pacman --assume-installed texlive-bin $(\pacman -Sgq texlive texlive-lang)"

### [Linux Mint/Debian/Ubuntu](</Linux/Linux Mint/>) <a id="linuxmint"></a> <a id="debian"></a> <a id="ubuntu"></a> {#w5728cb9}

- [https://wiki.debian.org/TeXLive#Integrating_vanilla_TeX_Live_with_Debian](https://wiki.debian.org/TeXLive#Integrating_vanilla_TeX_Live_with_Debian)

TeX Live の公式サイトのパッケージをインストールしたあとで TeX Live/Debian に依存するパッケージをインストールしようとすると TeX Live/Debian も同時にインストールされてしまいます．
TeX Live/Debian がインストールされないように [dummy パッケージ](https://wiki.debian.org/TeXLive#Integrating_vanilla_TeX_Live_with_Debian)を作成して依存関係の問題を回避します．

```
sudo apt install curl equivs
wcurl https://www.tug.org/texlive/files/debian-equivs-2023-ex.txt
equivs-build debian-equivs-2023-ex.txt
sudo dpkg -i texlive-local_2023.99999999-1_all.deb
```

### [openSUSE](/Linux/openSUSE/) <a id="opensuse"></a> {#y33add76}

- [https://ctan.org/tex-archive/support/texlive/texlive-dummy/](https://ctan.org/tex-archive/support/texlive/texlive-dummy/)
    - [https://ctan.org/tex-archive/support/texlive/texlive-dummy/openSUSE](https://ctan.org/tex-archive/support/texlive/texlive-dummy/openSUSE)
- [https://ctan.org/pkg/texlive-dummy-opensuse](https://ctan.org/pkg/texlive-dummy-opensuse)
- [https://software.opensuse.org/package/texlive-dummy](https://software.opensuse.org/package/texlive-dummy)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](https://ctan.org/tex-archive/support/texlive/texlive-dummy/) をインストールします．
texlive-dummy をインストールすると TeX Live/TeX Live for SUSE Linux に依存するパッケージが TeX Live/TeX Live for SUSE Linux をインストールするのを防止できます．

```
sudo zypper install https://mirrors.ctan.org/support/texlive/texlive-dummy/openSUSE/texlive-dummy-2025.9999-1.noarch.rpm
```

### [Fedora](/Linux/Fedora/) <a id="fedora"></a> {#cf6b23bc}

- [https://ctan.org/tex-archive/support/texlive/texlive-dummy/](https://ctan.org/tex-archive/support/texlive/texlive-dummy/)
    - [https://ctan.org/tex-archive/support/texlive/texlive-dummy/Fedora](https://ctan.org/tex-archive/support/texlive/texlive-dummy/Fedora)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](https://ctan.org/tex-archive/support/texlive/texlive-dummy/) をインストールします．
texlive-dummy をインストールすると TeX Live/Fedora に依存するパッケージが TeX Live/Fedora をインストールするのを防止できます．

```
sudo dnf install https://mirrors.ctan.org/support/texlive/texlive-dummy/Fedora/texlive-dummy-2022-1.fc36.noarch.rpm
```

### Red Hat Enterprise Linux (RHEL) {#xcb6b24c}

- [https://ctan.org/tex-archive/support/texlive/texlive-dummy/](https://ctan.org/tex-archive/support/texlive/texlive-dummy/)
    - [https://ctan.org/tex-archive/support/texlive/texlive-dummy/EnterpriseLinux-8](https://ctan.org/tex-archive/support/texlive/texlive-dummy/EnterpriseLinux-8)

```
sudo yum install https://mirrors.ctan.org/support/texlive/texlive-dummy/EnterpriseLinux-8/texlive-dummy-2020-4.el8.noarch.rpm
```

### Gentoo Linux <a id="gentoolinux"></a> {#i10c1e71}

- [GentooでTeXLiveを使う話](https://ryokubudoh.hatenadiary.com/entry/2015/12/09/171356)
