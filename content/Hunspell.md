---
title: "Hunspell"
url: "/Hunspell/"
date: 2012-11-04T04:24:50Z
pukiwiki: "Hunspell"
---

# Hunspell

## [Hunspell](http://hunspell.sourceforge.net/) {#g6159d85}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#m1ff4251}

Hunspell はスペルチェッカーです．<br>

- [Hunspell](http://hunspell.sourceforge.net/)

以下のフリーソフトウェア (オープンソースソフトウェア) の統合環境・エディタで使用されています．

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [TeXworks](/TeXworks/)
- TexitEasy
- [Notepad++](/Notepad++/) ([DSpellCheck](https://github.com/Predelnik/DSpellCheck))

### 辞書 {#q4b7f294}

- [http://extensions.services.openoffice.org/](http://extensions.services.openoffice.org/)
- [https://addons.mozilla.org/ja/thunderbird/language-tools/](https://addons.mozilla.org/ja/thunderbird/language-tools/)
- [http://sourceforge.net/projects/lyxwininstaller/files/hunspell/](http://sourceforge.net/projects/lyxwininstaller/files/hunspell/)

などから入手できます．

### 派生版 {#z489a458}

- [NHunspell](http://nhunspell.sourceforge.net/)

## Installation {#y7b755eb}

### Windows {#mcb4fc44}

#### MinGW {#deab3978}

<!-- $ curl -R -L -O http://sourceforge.net/projects/hunspell/files/Hunspell/1.3.2/hunspell-1.3.2.tar.gz -->

```
$ curl -R -L -O http://download.sourceforge.net/hunspell/hunspell-1.3.2.tar.gz
$ tar xvf hunspell-1.3.2.tar.gz
$ pushd hunspell-1.3.2
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```
