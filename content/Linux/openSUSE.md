---
title: "Linux/openSUSE"
url: "/Linux/openSUSE/"
date: 2011-10-16T16:15:57Z
pukiwiki: "Linux/openSUSE"
---

# Linux/openSUSE

[Linux](/Linux/) > openSUSE

## [openSUSE](https://www.opensuse.org/) {#nea99a9d}

openSUSE Tumbleweed はローリングリリースモデルで最新の Linux パッケージを提供する、高速で統合性に優れた Linux ディストリビューションです．

***

***

### TeX Live {#texlive}

#### TeX Live 公式パッケージ {#v87b6755}

- [Linux](/Linux/#texliveinstall) &amp; [texlive-dummy](/texlive-dummy/#opensuse)

#### TeX Live/TeX Live for SUSE Linux {#y0f6032d}

- [https://software.opensuse.org/package/texlive-scheme-full](https://software.opensuse.org/package/texlive-scheme-full)
- [https://software.opensuse.org/package/texlive-collection-langjapanese](https://software.opensuse.org/package/texlive-collection-langjapanese)
- [https://software.opensuse.org/package/texlive-collection-latexextra](https://software.opensuse.org/package/texlive-collection-latexextra)
- [https://software.opensuse.org/package/texlive-collection-luatex](https://software.opensuse.org/package/texlive-collection-luatex)
- [Show Publishing:TeXLive - openSUSE Build Service](https://build.opensuse.org/project/show/Publishing:TeXLive)
- [Index of /repositories/Publishing:/TeXLive](http://download.opensuse.org/repositories/Publishing:/TeXLive/)

フルインストールする場合は

```
sudo zypper install texlive-scheme-full
```

日本語関連のパッケージのみインストールする場合は

```
sudo zypper install texlive-collection-langjapanese texlive-collection-latexextra texlive-collection-luatex
```

を実行します．[jlreq](/jlreq/) は LuaLaTeX 非利用時は everyhook.sty が必要なので texlive-collection-latexextra をインストールする必要があります．
[LuaTeX-ja](/LuaTeX-ja/) は luatexja-core.sty で luatexbase.sty が必要なので texlive-collection-luatex をインストールする必要があります．

### [Ghostscript](/Ghostscript/) {#iea7fcc9}

```
sudo zypper install ghostscript
```

### [Poppler](/Poppler/) {#dae12f15}

```
sudo zypper install poppler-data
```

### [Okular](/Okular/) {#kfc5a9bf}

```
sudo zypper install okular okular-spectre
```

### [Papers](/Papers/) {#p27ad2e3}

```
sudo zypper install papers
```

### [zathura](/zathura/) {#u6a6ff55}

```
sudo zypper install zathura
```

### [qpdfview](/qpdfview/) {#m6133c44}

```
sudo zypper install qpdfview
```

### [MuPDF](/MuPDF/) {#p18e5d53}

```
sudo zypper install mupdf
```

### [Adobe Acrobat Reader](</Adobe Acrobat Reader/>) {#e5e1f8c0}

[Adobe Acrobat Reader](</Adobe Acrobat Reader/#linux>)

### [LyX](/LyX/) {#uad65708}

```
sudo zypper install lyx
```

### [TeXstudio](/TeXstudio/) {#xc0b5b03}

```
sudo zypper install texstudio
```

### [Texmaker](/Texmaker/) {#fa598615}

```
sudo zypper install texmaker
```

### [TeXworks](/TeXworks/) {#n8431fb2}

```
sudo zypper install texworks
```
