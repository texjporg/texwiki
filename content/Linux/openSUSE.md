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

- [Show Publishing:TeXLive - openSUSE Build Service](https://build.opensuse.org/project/show?project=Publishing%3ATeXLive)
- [Index of /repositories/Publishing:/TeXLive](http://download.opensuse.org/repositories/Publishing:/TeXLive/)
- [texlive-dummy-opensuse](http://www.ctan.org/pkg/texlive-dummy-opensuse)

### TeX Live 2012/TeX Live for SUSE Linux {#y0f6032d}

#### openSUSE 12.3 {#i8bbf7fd}

- フルインストールの場合

YaST パッケージマネージャ で texlive-scheme-full を検索してtexlive-scheme-full パッケージを選択してインストールします．<br>
zypper を使用しても OK です．<br>

```
$ sudo zypper install texlive-scheme-full
```

- 個別にインストールする場合

個別にインストールしたい場合は texlive-collection-langcjk パッケージをインストールすれば (e-)(u)pTeX を使用した日本語の LaTeX 環境が構築できます．<br>
YaST パッケージマネージャ で texlive-collection-langcjk を検索して texlive-collection-langcjk パッケージを選択してインストールします．<br>
zypper を使用しても OK です．<br>

```
$ sudo zypper install texlive-collection-langcjk
```

pdfLaTeX, [LuaLaTeX](/LuaTeX/), [XeLaTeX](/XeTeX/) を使用する場合は texlive-collection-latex, texlive-collection-luatex, texlive-collection-xetex パッケージもインストールします．<br>
YaST パッケージマネージャ で texlive-collection-latex, texlive-collection-luatex, texlive-collection-xetex を検索して texlive-collection-latex, texlive-collection-luatex, texlive-collection-xetex パッケージを選択してインストールします．<br>
zypper を使用しても OK です．<br>

```
$ sudo zypper install texlive-collection-latex texlive-collection-luatex texlive-collection-xetex
```

## Texmaker {#ua730d97}

```
$ sudo zypper install texmaker
```

## LyX {#uad65708}

```
$ sudo zypper install lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

## TeXworks {#n8431fb2}

```
$ sudo zypper install texworks texworks-plugin-lua texworks-plugin-python
```

## MinGW {#e5f30d58}

- [Index of /repositories/windows:/mingw:/win32/openSUSE_Factory/noarch](http://download.opensuse.org/repositories/windows:/mingw:/win32/openSUSE_Factory/noarch/)
- [Where can I download precompiled GTK+ 3 binaries or windows installer?](http://stackoverflow.com/questions/6006689/where-can-i-download-precompiled-gtk-3-binaries-or-windows-installer)
