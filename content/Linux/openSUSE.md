---
title: "Linux/openSUSE"
url: "/Linux/openSUSE/"
date: 2011-10-16T16:15:57Z
pukiwiki: "Linux/openSUSE"
---

# Linux/openSUSE

[Linux](/Linux/) > openSUSE

## [openSUSE](http://www.opensuse.org/) {#nea99a9d}

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/9/98/OpenSUSE_official-logo-color.svg/200px-OpenSUSE_official-logo-color.svg.png" alt="openSUSE" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## openSUSE とは {#n178877e}

openSUSE は安定・使い易い・多目的な Linux ベースのオペレーティングシステムです．<br>

- [openSUSE.org](http://www.opensuse.org/)
- [メインページ - openSUSE](http://ja.opensuse.org/)

## TeX Live {#n3c200b7}

- [http://software.opensuse.org/package/texlive-scheme-full](http://software.opensuse.org/package/texlive-scheme-full)
- [Show Publishing:TeXLive - openSUSE Build Service](https://build.opensuse.org/project/show?project=Publishing%3ATeXLive)
- [Index of /repositories/Publishing:/TeXLive](http://download.opensuse.org/repositories/Publishing:/TeXLive/)
- [http://www.ctan.org/pkg/texlive-dummy-opensuse](http://www.ctan.org/pkg/texlive-dummy-opensuse)
    - [CTAN: tex-archive/support/texlive/texlive-dummy/openSUSE](http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/openSUSE)
- [http://software.opensuse.org/package/texlive-dummy_install](http://software.opensuse.org/package/texlive-dummy_install)

### TeX Live 公式パッケージ {#v87b6755}

- [Linux](/Linux/#texliveinstall)
- [texliveを任意のディレクトリにインストールする](http://zashikiro.hateblo.jp/entry/2014/01/21/062124)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は
[texlive-dummy-opensuse](http://software.opensuse.org/package/texlive-dummy_install)
をインストールします．<br>
texlive-dummy-opensuse をインストールすると
TeX Live/TeX Live for SUSE Linux に依存するパッケージが
TeX Live/TeX Live for SUSE Linux をインストールするのを防止できます．<br>

### TeX Live/TeX Live for SUSE Linux {#y0f6032d}

```
$ sudo zypper install texlive-scheme-full
```

&#x2a;\* WARNING \*\* Could not open config file "dvipdfmx.cfg". が表示される場合は TeX Live 公式パッケージをインストールしてください． → [Tex Live 2013 が壊れている疑惑](http://folioscope.hatenablog.jp/entry/2013/12/09/194754)

## [Ghostscript](/Ghostscript/) {#iea7fcc9}

```
$ sudo zypper install ghostscript
```

## [Poppler](/Poppler/) {#dae12f15}

```
$ sudo zypper install poppler-data
```

## [Evince](/Evince/) {#p27ad2e3}

```
$ sudo zypper install evince
```

## [Okular](/Okular/) {#kfc5a9bf}

```
$ sudo zypper install okular
```

## [Adobe Reader](</Adobe Reader/>) (Windows 版) + Wine {#m8b54511}

Adobe Reader XI は Wine 上でも動作します．<br>

- [https://en.opensuse.org/Adobe_Reader](https://en.opensuse.org/Adobe_Reader)

## [LyX](/LyX/) {#uad65708}

```
$ sudo zypper install lyx
```

## [TeXstudio](/TeXstudio/) {#xc0b5b03}

```
$ sudo zypper install texstudio
```

## [Texmaker](/Texmaker/) {#fa598615}

```
$ sudo zypper install texmaker
```

## [TeXworks](/TeXworks/) {#n8431fb2}

```
$ sudo zypper install texworks texworks-plugin-lua texworks-plugin-python
```

## [MinGW](/MinGW/) {#e5f30d58}

- [Index of /repositories/windows:/mingw:/win32/openSUSE_Factory/noarch](http://download.opensuse.org/repositories/windows:/mingw:/win32/openSUSE_Factory/noarch/)
- [Where can I download precompiled GTK+ 3 binaries or windows installer?](http://stackoverflow.com/questions/6006689/where-can-i-download-precompiled-gtk-3-binaries-or-windows-installer)
