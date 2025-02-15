---
title: "Linux/Linux Mint"
url: "/Linux/Linux Mint/"
date: 2013-03-28T20:19:04Z
pukiwiki: "Linux/Linux Mint"
---

# Linux/Linux Mint

[Linux](/Linux/) > Linux Mint/Debian/Ubuntu

## [Linux Mint](https://linuxmint.com/)/[Debian](https://www.debian.org/)/[Ubuntu](https://www.ubuntu.com/) {#f4077eb2}

Linux Mint はデスクトップ向けの使いやすい Linux ディストリビューションです．

Debian はコミュニティによって作られる「自由なオペレーティングシステム（OS）」です．

Ubuntu は Ubuntu コミュニティにより開発されているオペレーティングシステムです．

***

***

### TeX Live {#texlive}

#### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#ef984d1b}

- [Linux](/Linux/#texliveinstall) &amp; [texlive-dummy](/texlive-dummy/#linuxmint)

#### TeX Live/Debian <a id="texlivedebian"></a> {#qcd9ce14}

- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)
- [https://packages.ubuntu.com/ja/texlive-full](https://packages.ubuntu.com/ja/texlive-full)
- [https://packages.debian.org/search?keywords=texlive-full](https://packages.debian.org/search?keywords=texlive-full)
- [https://packages.ubuntu.com/ja/texlive-lang-japanese](https://packages.ubuntu.com/ja/texlive-lang-japanese)
- [https://packages.debian.org/search?keywords=texlive-lang-japanese](https://packages.debian.org/search?keywords=texlive-lang-japanese)
- [https://packages.ubuntu.com/ja/texlive-latex-extra](https://packages.ubuntu.com/ja/texlive-latex-extra)
- [https://packages.debian.org/search?keywords=texlive-latex-extra](https://packages.debian.org/search?keywords=texlive-latex-extra)
- [https://packages.ubuntu.com/ja/xzdec](https://packages.ubuntu.com/ja/xzdec)
- [https://packages.debian.org/search?keywords=xzdec](https://packages.debian.org/search?keywords=xzdec)
- [tex-live in Launchpad](https://launchpad.net/tex-live)
    - [trunk](https://code.launchpad.net/~naesten/tex-live/trunk)
        - [ChangeLog](http://bazaar.launchpad.net/~naesten/tex-live/trunk/view/head:/ChangeLog)
- [https://launchpad.net/ubuntu/+source/texlive-base](https://launchpad.net/ubuntu/+source/texlive-base)
    - [https://launchpad.net/ubuntu/+source/texlive-base/+changelog](https://launchpad.net/ubuntu/+source/texlive-base/+changelog)
- [https://launchpad.net/ubuntu/+source/texlive-lang](https://launchpad.net/ubuntu/+source/texlive-lang)
    - [https://launchpad.net/ubuntu/+source/texlive-lang/+changelog](https://launchpad.net/ubuntu/+source/texlive-lang/+changelog)
- [debian/ubuntuのuplatexでNotoフォントの太明朝体や丸ゴシック体など７書体使う手順](https://qiita.com//kakinaguru_zo/items/8c34ee921a8bbfd1663a)
- [Ubuntu/Debian上のLuaTeXでGoogle Notoフォントの日本語７書体を使う](https://qiita.com/kakinaguru_zo/items/764c54f2e84d21092069)
- [私の LaTeX SetUp memo](https://qiita.com/QiitaTakenoko/items/26d495842968fa37e203)
- [https://okumuralab.org/tex/pluginfile.php/6/mod_forum/attachment/21026/howto-install-texlive-ubuntu.txt](https://okumuralab.org/tex/pluginfile.php/6/mod_forum/attachment/21026/howto-install-texlive-ubuntu.txt)

フルインストールする場合は

```
sudo apt install texlive-full
```

日本語関連のパッケージのみインストールする場合は

```
sudo apt install texlive texlive-luatex texlive-lang-japanese texlive-latex-extra texlive-fonts-extra
```

を実行します．
[jlreq](/jlreq/) は LuaLaTeX 非利用時は everyhook.sty が必要なので texlive-latex-extra をインストールする必要があります．

tlmgr も実行できます．
tlmgr の実行には xzdec パッケージが必要です．

```
sudo apt install xzdec
tlmgr init-usertree
```

texlive-lang-japanese パッケージのみインストールした場合は LuaTeX-ja や BXjscls を使用するとエラーが発生することがあります．
エラーが発生する場合は必要なパッケージを追加でインストールします．

- ! LaTeX Error: File \`luatexbase.sty' not found. が発生する場合

```
sudo apt install texlive-luatex
```

- ! LaTeX Error: File \`xkeyval.sty' not found. が発生する場合

```
sudo apt install texlive-latex-recommended
```

- ! LaTeX Error: File \`filehook.sty' not found. が発生する場合

```
sudo apt install texlive-latex-extra
```

- luaotfload | db : Reload initiated (formats: otf,ttf,ttc,dfont); reason: "File not found: lmroman10-regular.".<br>! Font \EU2/lmr/m/n/10=file:lmroman10-regular:script=latn;+trep;+tlig; at 10pt not loadable: metric data not found or bad. が発生する場合

```
sudo apt install fonts-lmodern
```

- ! LaTeX Error: File \`xunicode.sty' not found. が発生する場合

```
sudo apt install texlive-xetex
```

- ! LaTeX Error: File \`CJK.sty' not found. が発生する場合

```
sudo apt install latex-cjk-common
```

- kpathsea: Running mktextfm ipxm-r-u65<br>/usr/share/texlive/texmf-dist/web2c/mktexnam: Could not map source abbreviation  for ipxm-r-u65. が発生する場合

```
sudo apt install texlive-fonts-extra
```

### [Ghostscript](/Ghostscript/) <a id="ghostscript"></a> {#t53b858c}

```
sudo apt install ghostscript
```

### [Python](/Python/) <a id="python"></a> {#reda4f97}

```
sudo apt install python3
```

### Julia <a id="julia"></a> {#xf5a03c6}

```
sudo apt install julia
```

### [Ruby](/Ruby/) <a id="ruby"></a> {#mf285d32}

```
sudo apt install ruby
```

### [Perl](/Perl/) <a id="perl"></a> {#e850770a}

```
sudo apt install perl
```

### [Evince](/Evince/) <a id="evince"></a> {#qfdb160b}

```
sudo apt install evince
```

### [Okular](/Okular/) <a id="okular"></a> {#ba1358b3}

```
sudo apt install okular kde-l10n-ja
```

### [zathura](/zathura/) <a id="zathura"></a> {#eabe50ed}

```
sudo apt install zathura
```

### [qpdfview](/qpdfview/) <a id="qpdfview"></a> {#u94ec4be}

```
sudo apt install qpdfview
```

### [MuPDF](/MuPDF/) <a id="mupdf"></a> {#c80fa1e6}

```
sudo apt install mupdf mupdf-tools
```

### [Adobe Acrobat Reader](</Adobe Acrobat Reader/>) {#je5a1069}

[Adobe Acrobat Reader](</Adobe Acrobat Reader/#linux>)

### [LyX](/LyX/) <a id="lyx"></a> {#jdcf4217}

```
sudo apt install lyx
```

### [TeXstudio](/TeXstudio/) <a id="texstudio"></a> {#q1b2ff71}

```
sudo apt install texstudio texstudio-l10n texstudio-doc
```

### [Texmaker](/Texmaker/) <a id="texmaker"></a> {#f4899fdc}

```
sudo apt install texmaker
```

### [TeXworks](/TeXworks/) <a id="texworks"></a> {#g455c5e0}

```
sudo apt install texworks
```

### [Emacs](/Emacs/) <a id="emacs"></a> {#w2c42a95}

```
sudo apt install emacs
```

#### [AUCTeX](/AUCTeX/) {#r3a92e85}

- [https://launchpad.net/ubuntu/+source/auctex/](https://launchpad.net/ubuntu/+source/auctex/)
    - [https://launchpad.net/ubuntu/+source/auctex/+changelog](https://launchpad.net/ubuntu/+source/auctex/+changelog)

#### [YaTeX](/YaTeX/) {#reffaf03}

- [https://launchpad.net/ubuntu/+source/yatex/](https://launchpad.net/ubuntu/+source/yatex/)
    - [https://launchpad.net/ubuntu/+source/yatex/+changelog](https://launchpad.net/ubuntu/+source/yatex/+changelog)

### [Vim](/Vim/) <a id="vim"></a> {#febc084d}

```
sudo apt install vim vim-gtk
```

### [Inkscape](/Inkscape/) <a id="inkscape"></a> {#ke45cdf4}

```
sudo apt install inkscape pstoedit
```
