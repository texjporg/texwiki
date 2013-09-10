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

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## openSUSE とは {#n178877e}

openSUSE は安定・使い易い・多目的な Linux ベースのオペレーティングシステムです．<br>

- [openSUSE.org](http://www.opensuse.org/)
- [メインページ - openSUSE](http://ja.opensuse.org/)

## TeX Live {#n3c200b7}

- [http://software.opensuse.org/package/texlive-scheme-full](http://software.opensuse.org/package/texlive-scheme-full)
- [Show Publishing:TeXLive - openSUSE Build Service](https://build.opensuse.org/project/show?project=Publishing%3ATeXLive)
- [Index of /repositories/Publishing:/TeXLive](http://download.opensuse.org/repositories/Publishing:/TeXLive/)
- [texlive-dummy-opensuse](http://www.ctan.org/pkg/texlive-dummy-opensuse)

### TeX Live 2013 {#v87b6755}

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は TeX Live/TeX Live for SUSE Linux に依存するパッケージが TeX Live/TeX Live for SUSE Linux をインストールするのを防止するため [texlive-dummy-opensuse](http://www.ctan.org/pkg/texlive-dummy-opensuse) パッケージをインストールします．<br>

- [Linux](/Linux/#texlive2013)

## [Adobe Reader](</Adobe Reader/>) {#m8b54511}

[Adobe Reader 9 は 2013年6月26日 でサポートが終了](http://www.adobe.com/jp/jos/acrobat/it/endsupport.html)しました．<br>
Adobe Reader 9 を使用している方は Adobe Reader XI にアップグレードしてください．<br>
Adobe Reader XI は Wine 上でも動作します．<br>

```
$ sudo zypper install acroread acroread-fonts-ja acroread-cmaps
```

## [Texmaker](/Texmaker/) {#ua730d97}

```
$ sudo zypper install texmaker
```

## [LyX](/LyX/) {#uad65708}

```
$ sudo zypper install lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

## [TeXworks](/TeXworks/) {#n8431fb2}

```
$ sudo zypper install texworks texworks-plugin-lua texworks-plugin-python
```

## LaTeXila {#r5f3b44b}

```
$ sudo zypper install latexila
```

## [Kile](/Kile/) {#a5604b87}

```
$ sudo zypper install kile
```

## [gedit](/gedit/) {#q3837a6e}

```
$ sudo zypper install gedit gedit-plugins gedit-plugin-latex
```

## [Geany](/Geany/) {#q6659b75}

```
$ sudo zypper install geany geany-plugins
```

## [MinGW](/MinGW/) {#e5f30d58}

- [Index of /repositories/windows:/mingw:/win32/openSUSE_Factory/noarch](http://download.opensuse.org/repositories/windows:/mingw:/win32/openSUSE_Factory/noarch/)
- [Where can I download precompiled GTK+ 3 binaries or windows installer?](http://stackoverflow.com/questions/6006689/where-can-i-download-precompiled-gtk-3-binaries-or-windows-installer)
