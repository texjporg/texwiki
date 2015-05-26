---
title: "Linux/Arch Linux"
url: "/Linux/Arch Linux/"
date: 2013-05-24T13:55:15Z
pukiwiki: "Linux/Arch Linux"
---

# Linux/Arch Linux

[Linux](/Linux/) > Arch Linux

## [Arch Linux](https://www.archlinux.org/) {#e64e7986}

Arch Linux はシンプルで軽量な Linux ディストリビューションです．

<!-- #ref(http://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Archlinux-official-fullcolour.svg/500px-Archlinux-official-fullcolour.svg.png,right,around,nolink,Arch Linux) -->

***

***

### [TeX Live](</TeX Live/>) {#texlive}

- [TeX Live - ArchWiki](https://wiki.archlinux.org/index.php/TeX_Live)
- [LaTeX - ArchWiki](https://wiki.archlinux.org/index.php/LaTeX)
    <!-- -[[Kile and TeX Live - ArchWiki:https://wiki.archlinux.org/index.php/Kile_and_TeX_Live]] -->

#### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#w9579c29}

- [Linux](/Linux/#texliveinstall)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は [texlive-dummy](https://aur.archlinux.org/packages/texlive-dummy/) をインストールします．
texlive-dummy をインストールすると TeX Live/Arch Linux に依存するパッケージが TeX Live/Arch Linux をインストールするのを防止できます．

```
$ yaourt -S texlive-dummy
```

#### TeX Live/Arch Linux <a id="texlivearchlinux"></a> {#y18009db}

- [TeX Live/Linux - MyTeXpert](http://mytexpert.osdn.jp/index.php?TeX%20Live%2FLinux)
- [Arch Linux - TeX Liveのインストール](http://oldmanpylos14.seesaa.net/article/415312508.html)

通常は texlive-langjapanese と texlive-most をインストールします．

```
$ sudo pacman -S texlive-langjapanese texlive-most
```

必要最小限のパッケージのみインストールする場合は texlive-most ではなく texlive-core をインストールします．

```
$ sudo pacman -S texlive-langjapanese texlive-core
```

### [Ghostscript](/Ghostscript/) {#q940a9dc}

```
$ sudo pacman -S ghostscript
```

### [Python](/Python/) {#i5b0d02d}

#### Python 3 {#e996fe1c}

```
$ sudo pacman -S python python-dbus python-gobject
```

#### Python 2 {#tc491f53}

```
$ sudo pacman -S python2 python2-dbus python2-gobject
```

### Julia {#xdaa5ad2}

```
$ sudo pacman -S julia
```

### [Ruby](/Ruby/) {#f4286b29}

```
$ sudo pacman -S ruby
```

### [Perl](/Perl/) {#sf038555}

```
$ sudo pacman -S perl
```

### [Poppler](/Poppler/) {#bfbc00bc}

```
$ sudo pacman -S poppler poppler-data
```

### [Evince](/Evince/) {#qd63d30c}

```
$ sudo pacman -S evince
```

### [Okular](/Okular/) {#d36d48ab}

```
$ sudo pacman -S kdegraphics-okular kde-l10n-ja
```

### [zathura](/zathura/) {#cae6188b}

```
$ sudo pacman -S zathura zathura-pdf-poppler zathura-ps
```

### [qpdfview](/qpdfview/) {#xe3804e4}

```
$ yaourt -S qpdfview
```

### [MuPDF](/MuPDF/) {#w1b2cec8}

```
$ sudo pacman -S mupdf
```

<!-- **Xpdf [#yfd9416b] -->
<!--  -->
<!-- $ sudo pacman -S xpdf xpdf-japanese -->
<!--  -->
<!-- xpdf で日本語が表示できるように &#x7e;/.xpdfrc を編集します． -->
<!--  -->
<!-- $ vi ~/.xpdfrc -->
<!--  -->
<!-- - --  -->
<!-- cidToUnicode Adobe-Japan1 /usr/share/xpdf/japanese/Adobe-Japan1.cidToUnicode -->
<!-- unicodeMap ISO-2022-JP /usr/share/xpdf/japanese/ISO-2022-JP.unicodeMap -->
<!-- unicodeMap EUC-JP /usr/share/xpdf/japanese/EUC-JP.unicodeMap -->
<!-- unicodeMap Shift-JIS /usr/share/xpdf/japanese/Shift-JIS.unicodeMap -->
<!-- cMapDir Adobe-Japan1 /usr/share/xpdf/japanese/CMap -->
<!-- toUnicodeDir /usr/share/xpdf/japanese/CMap -->
<!-- fontFile Ryumin-Light-Identity-H /usr/share/texmf-dist/fonts/truetype/public/ipaex/ipaexm.ttf -->
<!-- fontFile GothicBBB-Medium-Identity-H /usr/share/texmf-dist/fonts/truetype/public/ipaex/ipaexg.ttf -->
<!-- - --  -->

### [LyX](/LyX/) {#odd649e9}

```
$ sudo pacman -S lyx
```

### [TeXstudio](/TeXstudio/) {#geb231cb}

```
$ sudo pacman -S texstudio
```

Arch Linux の TeXstudio は Qt 5 を使用しています．
Qt 5 版の TeXstudio では，日本語を入力するとカーソルが文字の位置からずれたり日本語が重なって表示されたりする現象が発生します（[不具合情報](http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?TeXstudio#ped67bdd)を参照）．

### [Texmaker](/Texmaker/) {#gbe0fd81}

```
$ sudo pacman -S texmaker
```

### [TeXworks](/TeXworks/) {#y01d9b26}

```
$ yaourt -S texworks
```

### [Emacs](/Emacs/) {#le6bf422}

```
$ sudo pacman -S emacs
```

### [Vim](/Vim/) {#g73ca7b0}

```
$ sudo pacman -S vim
```

### [Inkscape](/Inkscape/) {#ca45a692}

```
$ sudo pacman -S inkscape pstoedit python2-lxml
```

<!-- **awesome [#hf2862e7] -->
<!--  -->
<!-- $ sudo pacman -S awesome -->
<!--  -->
<!-- -[[ウィンドウマネージャ「awesome」の基本操作:http://momoto.github.io/blog/2013/03/27/awesome-tutorials/]] -->

### sakura {#kf265bc9}

```
$ sudo pacman -S sakura
```

### fcitx {#y9e621be}

- [Fcitx (日本語) - ArchWiki](<https://wiki.archlinux.org/index.php/Fcitx_(%E6%97%A5%E6%9C%AC%E8%AA%9E)>)
    <!-- -https://aur.archlinux.org/packages/fcitx-mozc-ut/ -->
    <!--  -->
    <!-- $ yaourt -S fcitx-mozc-ut -->

<!-- *Arch Linux のインストール [#ba9eb570] -->
<!--  -->
<!-- -[[Beginners' Guide (日本語) - ArchWiki:https://wiki.archlinux.org/index.php/Beginners%27_Guide_(%E6%97%A5%E6%9C%AC%E8%AA%9E)]] -->
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
<!-- -[[pacman (日本語) - ArchWiki:https://wiki.archlinux.org/index.php/Pacman_(%E6%97%A5%E6%9C%AC%E8%AA%9E)]] -->
<!-- -[[Pacman Rosetta:https://wiki.archlinux.org/index.php/Pacman_Rosetta]] -->
<!--  -->
<!-- **Yaourt [#nf53cc4e] -->
<!--  -->
<!-- -[[Yaourt (日本語) - ArchWiki:https://wiki.archlinux.org/index.php/Yaourt_(%E6%97%A5%E6%9C%AC%E8%AA%9E)]] -->
<!--  -->
