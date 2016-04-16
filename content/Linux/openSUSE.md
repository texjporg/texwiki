---
title: "Linux/openSUSE"
url: "/Linux/openSUSE/"
date: 2011-10-16T16:15:57Z
pukiwiki: "Linux/openSUSE"
---

# Linux/openSUSE

[Linux](/Linux/) > openSUSE

## [openSUSE](https://www.opensuse.org/) {#nea99a9d}

openSUSE は安定・使い易い・多目的な Linux ディストリビューションです．

***

***

### TeX Live {#texlive}

#### TeX Live 公式パッケージ {#v87b6755}

- [Linux](/Linux/#texliveinstall)
- [http://www.ctan.org/pkg/texlive-dummy-opensuse](http://www.ctan.org/pkg/texlive-dummy-opensuse)
    - [CTAN: tex-archive/support/texlive/texlive-dummy/openSUSE](http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/openSUSE)
- [https://software.opensuse.org/package/texlive-dummy](https://software.opensuse.org/package/texlive-dummy)
- [https://software.opensuse.org/package/texlive-dummy_install](https://software.opensuse.org/package/texlive-dummy_install)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy-opensuse](http://www.ctan.org/pkg/texlive-dummy-opensuse) をインストールします．
texlive-dummy-opensuse をインストールすると TeX Live/TeX Live for opensuse.org に依存するパッケージが TeX Live/TeX Live for opensuse.org をインストールするのを防止できます．

```
$ sudo zypper install http://mirrors.ctan.org/support/texlive/texlive-dummy/openSUSE/texlive-dummy-2015.9999-1.noarch.rpm
```

#### TeX Live/TeX Live for opensuse.org {#y0f6032d}

- [https://software.opensuse.org/package/texlive-scheme-full](https://software.opensuse.org/package/texlive-scheme-full)
- [https://software.opensuse.org/package/texlive-collection-langjapanese](https://software.opensuse.org/package/texlive-collection-langjapanese)
- [Show Publishing:TeXLive - openSUSE Build Service](https://build.opensuse.org/project/show?project=Publishing%3ATeXLive)
- [Index of /repositories/Publishing:/TeXLive](http://download.opensuse.org/repositories/Publishing:/TeXLive/)

フルインストールする場合は

```
$ sudo zypper install texlive-scheme-full
```

日本語関連のパッケージのみインストールする場合は

openSUSE Tumbleweed (TeX Live 2015/TeX Live for opensuse.org) の場合は

```
$ sudo zypper install texlive-collection-langjapanese
```

openSUSE Leap 42.1 (TeX Live 2013/TeX Live for SUSE Linux) の場合は

```
$ sudo zypper install texlive-collection-langcjk
```

を実行します．

### [Ghostscript](/Ghostscript/) {#iea7fcc9}

```
$ sudo zypper install ghostscript
```

### [Poppler](/Poppler/) {#dae12f15}

```
$ sudo zypper install poppler-data
```

### [Evince](/Evince/) {#p27ad2e3}

```
$ sudo zypper install evince
```

### [Okular](/Okular/) {#kfc5a9bf}

```
$ sudo zypper install okular
```

### [LyX](/LyX/) {#uad65708}

```
$ sudo zypper install lyx
```

### [TeXstudio](/TeXstudio/) {#xc0b5b03}

```
$ sudo zypper install texstudio
```

### [Texmaker](/Texmaker/) {#fa598615}

```
$ sudo zypper install texmaker
```

### [TeXworks](/TeXworks/) {#n8431fb2}

```
$ sudo zypper install texworks texworks-plugin-lua texworks-plugin-python
```

### [MinGW](/MinGW/) {#e5f30d58}

- [Index of /repositories/windows:/mingw:/win32/openSUSE_Factory/noarch](http://download.opensuse.org/repositories/windows:/mingw:/win32/openSUSE_Factory/noarch/)
- [Where can I download precompiled GTK+ 3 binaries or windows installer?](http://stackoverflow.com/questions/6006689/where-can-i-download-precompiled-gtk-3-binaries-or-windows-installer)
