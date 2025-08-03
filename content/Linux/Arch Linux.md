---
title: "Linux/Arch Linux"
url: "/Linux/Arch Linux/"
date: 2013-05-24T13:55:15Z
pukiwiki: "Linux/Arch Linux"
---

# Linux/Arch Linux

[Linux](/Linux/) > Arch Linux/Manjaro Linux

## [Arch Linux](https://www.archlinux.org/)/[Manjaro Linux](https://manjaro.org/) {#e64e7986}

Arch Linux はシンプルで軽量な Linux ディストリビューションです．

Manjaro Linux は Arch Linux ベースのユーザーフレンドリーな Linux ディストリビューションです．

<!-- #ref(http://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Archlinux-official-fullcolour.svg/500px-Archlinux-official-fullcolour.svg.png,right,around,nolink,Arch Linux) -->

***

***

### [TeX Live](</TeX Live/>) {#texlive}

#### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#w9579c29}

- [Linux](/Linux/#texliveinstall) &amp; [texlive-dummy](/texlive-dummy/#archlinux)

#### TeX Live/Arch Linux <a id="texlivearchlinux"></a> {#y18009db}

- [https://wiki.archlinux.org/index.php/TeX_Live](https://wiki.archlinux.org/index.php/TeX_Live)
- [https://wiki.archlinux.jp/index.php/TeX_Live](https://wiki.archlinux.jp/index.php/TeX_Live)
- [https://archlinux.jp/packages/?q=texlive](https://archlinux.jp/packages/?q=texlive)
- [https://archlinux.jp/groups/x86_64/texlive/](https://archlinux.jp/groups/x86_64/texlive/)
- [https://archlinux.jp/groups/x86_64/texlive-lang/](https://archlinux.jp/groups/x86_64/texlive-lang/)
- [https://archlinux.org/packages/?name=texlive-langjapanese](https://archlinux.org/packages/?name=texlive-langjapanese)
- [https://archlinux.org/packages/?name=texlive-latexextra](https://archlinux.org/packages/?name=texlive-latexextra)
- [https://archlinux.org/packages/?name=texlive-luatex](https://archlinux.org/packages/?name=texlive-luatex)

通常は texlive-langjapanese と texlive をインストールします．

```
sudo pacman -S texlive-langjapanese texlive
```

日本語関連パッケージのみインストールする場合は texlive-langjapanese と texlive-latexextra と texlive-luatex をインストールします．
[jlreq](/jlreq/) は LuaLaTeX 非利用時は everyhook.sty が必要なので texlive-latexextra をインストールする必要があります．
[LuaTeX-ja](/LuaTeX-ja/) は luatexja-core.sty で luatexbase.sty が必要なので texlive-luatex をインストールする必要があります．

```
sudo pacman -S texlive-langjapanese texlive-latexextra texlive-luatex
```

### [Ghostscript](/Ghostscript/) {#q940a9dc}

```
sudo pacman -S ghostscript
```

### [Python](/Python/) {#i5b0d02d}

```
sudo pacman -S python python-dbus python-gobject
```

### Julia {#xdaa5ad2}

```
sudo pacman -S julia
```

### [Ruby](/Ruby/) {#f4286b29}

```
sudo pacman -S ruby
```

### [Perl](/Perl/) {#sf038555}

```
sudo pacman -S perl
```

### [Poppler](/Poppler/) {#bfbc00bc}

```
sudo pacman -S poppler poppler-data
```

### [Evince](/Evince/) {#qd63d30c}

```
sudo pacman -S evince poppler-data
```

### [Okular](/Okular/) {#d36d48ab}

```
sudo pacman -S okular poppler-data
```

### [zathura](/zathura/) {#cae6188b}

```
sudo pacman -S zathura zathura-pdf-poppler zathura-ps poppler-data
```

### [qpdfview](/qpdfview/) {#xe3804e4}

```
sudo pacman -S qpdfview poppler-data
```

### [llpp](/llpp/) {#wc4e0815}

```
sudo pacman -S llpp
```

### [MuPDF](/MuPDF/) {#w1b2cec8}

```
sudo pacman -S mupdf mupdf-tools
```

または

```
sudo pacman -S mupdf-gl mupdf-tools
```

### [Adobe Acrobat Reader](</Adobe Acrobat Reader/>) {#yd3a1e2d}

[Adobe Acrobat Reader](</Adobe Acrobat Reader/#linux>)

### [LyX](/LyX/) {#odd649e9}

```
sudo pacman -S lyx
```

### [TeXstudio](/TeXstudio/) {#geb231cb}

```
sudo pacman -S texstudio poppler-data
```

### [Texmaker](/Texmaker/) {#gbe0fd81}

```
sudo pacman -S texmaker
```

### [TeXworks](/TeXworks/) {#y01d9b26}

```
sudo pacman -S texworks poppler-data
```

### [Visual Studio Code](</Visual Studio Code/>) {#q33f10c6}

```
sudo pacman -S code
```

### [Emacs](/Emacs/) {#le6bf422}

```
sudo pacman -S emacs
```

### [Vim](/Vim/) {#g73ca7b0}

```
sudo pacman -S vim
```

### [Inkscape](/Inkscape/) {#ca45a692}

```
sudo pacman -S inkscape pstoedit
```

<!-- **awesome [#hf2862e7] -->
<!--  -->
<!-- sudo pacman -S awesome -->
<!--  -->
<!-- -[[ウィンドウマネージャ「awesome」の基本操作:http://momoto.github.io/blog/2013/03/27/awesome-tutorials/]] -->

<!-- **sakura [#kf265bc9] -->
<!--  -->
<!-- sudo pacman -S sakura -->
<!--  -->
<!-- *Arch Linux のインストール [#ba9eb570] -->
<!--  -->
<!-- -[[ArchWiki:Beginners'_guide]], [[ArchWiki.ja:ビギナーズガイド]] -->
<!-- -[[Archlinuxのインストールから環境設定まで:http://note.chiebukuro.yahoo.co.jp/detail/n267693]] -->
<!-- -[[Arch Linux インストール から Xfce 快適環境を構築するまで:http://qiita.com/macchaberrycream/items/1dfabe8b710dc638e3f9]] -->
<!-- -[[【ArchLinux】ArchLinuxインストールめも (2013完全版？？？):http://tosainu.wktk.so/view/325]] -->
<!-- -[[Arch Linuxインストールメモ （archlinux-2013.09.01）:http://extrea.hatenablog.com/entry/2013/09/16/020230]] -->
<!-- -[[【Arch Linuxをインストールする】 2013.7.01バージョン:http://zaka-think.com/linux/arch-linux%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B/]] -->
<!-- -[[Arch Linux インストール:http://qiita.com/tukiyo/items/48fb3b4b41642743d581]] -->
<!-- -[[Arch Linux インストールから awesome 導入まで:http://qiita.com/co-me@github/items/12f21126c5117e07decd]] -->
<!-- -[[arch linux(はてな):http://arch2013.hatenablog.com/]] -->
<!-- -[[ArchLinuxのインストール:http://mba-hack.blogspot.jp/2013/05/archlinux.html]] -->
<!-- -[[2013.4.30 - Maidsphere // メイドスフィア:http://www.maidsphere.jp/archive/20130430/]] -->
<!-- -[[Arch Linux 2013.04.01 インストールまとめ1:http://lynx0077.hateblo.jp/entry/2013/04/18/214846]], [[Arch Linux 2013.04.01 インストールまとめ2:http://lynx0077.hateblo.jp/entry/2013/04/18/215116]] -->
<!-- -[[ArchLinux 2013.04.01 をインストール、日本語化:http://tkyon.blogspot.jp/2013/04/archlinux-20130401.html]] -->
<!-- -[[ArchLinux[2013.03.01]をインストールしてみた。:http://hgeekooohay.blogspot.jp/2013/03/archlinux20130301.html]] -->
<!-- -[[Arch Linux セットアップまとめ:http://jedipunkz.github.io/blog/2013/01/14/arch-linux-setup/]] -->
<!--  -->
<!-- archlinux-yyyy.mm.dd-dual.iso から起動して Boot Arch Linux (x86_64) を選択 -->
<!--  -->
<!-- Arch Linux ?.??.?-?-ARCH (tty1) -->
<!--  -->
<!-- archiso login: root (automatic login) -->
<!-- root@archiso ~ # -->
<!--  -->
<!-- デフォルトでは日本語キーボード配列 (JIS 配列) ではなく英語キーボード配列 (ASCII 配列) になっています． -->
<!-- 日本語キーボードを使用している場合は日本語キーボード配列 (JIS 配列) で作業できるように変更します． -->
<!--  -->
<!-- # loadkeys jp106 -->
<!-- Loading /usr/share/kbd/keymaps/i386/qwerty/jp106.map.gz -->
<!--  -->
<!-- 自分の環境に合わせてインストール作業を行います． -->
<!--  -->
<!-- **pacman [#b6ab2d3d] -->
<!--  -->
<!-- -[[ArchWiki:Pacman]], [[ArchWiki.ja:Pacman]] -->
<!-- -[[Pacman Rosetta:https://wiki.archlinux.org/index.php/Pacman_Rosetta]] -->
<!--  -->
