---
title: "Linux/Arch Linux"
url: "/Linux/Arch Linux/"
date: 2013-05-24T13:55:15Z
pukiwiki: "Linux/Arch Linux"
---

# Linux/Arch Linux

[Linux](/Linux/) > Arch Linux

## [Arch Linux](https://www.archlinux.org/) {#e64e7986}

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Archlinux-official-fullcolour.svg/500px-Archlinux-official-fullcolour.svg.png" alt="Arch Linux" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Arch Linux とは {#lc2ea000}

Arch Linux はシンプルで軽量な Linux ディストリビューションです．

- [Arch Linux](https://www.archlinux.org/)

### ミラーサイト {#z011535f}

- [Mirrors (日本語) - ArchWiki](<https://wiki.archlinux.org/index.php/Mirrors_(%E6%97%A5%E6%9C%AC%E8%AA%9E)>)
- [Pacman Mirrorlist Generator](https://www.archlinux.org/mirrorlist/)
- [http://ftp.jaist.ac.jp/pub/Linux/ArchLinux/](http://ftp.jaist.ac.jp/pub/Linux/ArchLinux/)
- [http://ftp.naist.jp/pub/Linux/archlinux/](http://ftp.naist.jp/pub/Linux/archlinux/)
- [http://ftp.nara.wide.ad.jp/pub/Linux/archlinux/](http://ftp.nara.wide.ad.jp/pub/Linux/archlinux/)
- [http://ftp.tsukuba.wide.ad.jp/Linux/archlinux/](http://ftp.tsukuba.wide.ad.jp/Linux/archlinux/)

## インストール {#ba9eb570}

- [Beginners' Guide (日本語) - ArchWiki](<https://wiki.archlinux.org/index.php/Beginners%27_Guide_(%E6%97%A5%E6%9C%AC%E8%AA%9E)>)
- [arch linux(はてな)](http://arch2013.hatenablog.com/)
- [ArchLinuxのインストール](http://mba-hack.blogspot.jp/2013/05/archlinux.html)
- [2013.4.30 - Maidsphere // メイドスフィア](http://www.maidsphere.jp/archive/20130430/)
- [Arch Linux 2013.04.01 インストールまとめ1](http://lynx0077.hateblo.jp/entry/2013/04/18/214846), [Arch Linux 2013.04.01 インストールまとめ2](http://lynx0077.hateblo.jp/entry/2013/04/18/215116)
- [ArchLinux 2013.04.01 をインストール、日本語化](http://tkyon.blogspot.jp/2013/04/archlinux-20130401.html)
- [ArchLinux\[2013.03.01\]をインストールしてみた。](http://hgeekooohay.blogspot.jp/2013/03/archlinux20130301.html)
- [Arch Linuxインストールメモ （archlinux-2013.02.01）](http://extrea.hatenablog.com/entry/2013/02/15/123721)
- [Arch Linux セットアップまとめ](http://jedipunkz.github.io/blog/2013/01/14/arch-linux-setup/)

archlinux-yyyy.mm.dd-dual.iso から起動して Boot Arch Linux (x86_64) を選択

```
Arch Linux 3.10.3-1-ARCH (tty1)

archiso login: root (automatic login)
root@archiso ~ # 
```

デフォルトでは日本語キーボード配列 (JIS 配列) ではなく英語キーボード配列 (ASCII 配列) になっています．<br>
日本語キーボードを使用している場合は日本語キーボード配列 (JIS 配列) で作業できるように変更します．<br>

```
# loadkeys jp106
Loading /usr/share/kbd/keymaps/i386/qwerty/jp106.map.gz
```

自分の環境に合わせてインストール作業を行います．<br>

### pacman {#b6ab2d3d}

- [pacman (日本語) - ArchWiki](<https://wiki.archlinux.org/index.php/Pacman_(%E6%97%A5%E6%9C%AC%E8%AA%9E)>)
- [Pacman Rosetta](https://wiki.archlinux.org/index.php/Pacman_Rosetta)

### Yaourt {#nf53cc4e}

- [Yaourt (日本語) - ArchWiki](<https://wiki.archlinux.org/index.php/Yaourt_(%E6%97%A5%E6%9C%AC%E8%AA%9E)>)

## [TeX Live](</TeX Live/>) {#e2a82c70}

- [TeX Live - ArchWiki](https://wiki.archlinux.org/index.php/TeX_Live)
- [LaTeX - ArchWiki](https://wiki.archlinux.org/index.php/LaTeX)
- [Kile and TeX Live - ArchWiki](https://wiki.archlinux.org/index.php/Kile_and_TeX_Live)

### TeX Live 2013 {#w9579c29}

- [Linux](/Linux/#texlive2013)

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は TeX Live/Arch Linux に依存するパッケージが TeX Live/Arch Linux をインストールするのを防止するため
[texlive-dummy](https://aur.archlinux.org/packages/texlive-dummy/)
をインストールします．<br>

```
$ yaourt -S texlive-dummy
```

### TeX Live 2013/Arch Linux {#y18009db}

TeX Live 2012/Arch Linux をインストールしている場合は TeX Live 2012/Arch Linux をアンインストールしてから TeX Live 2013/Arch Linux をインストールしてください． (→ [TeXLive 2013 update may require user intervention](https://www.archlinux.org/news/texlive-2013-update-may-require-user-intervention/))<br>

texlive-langcjk, texlive-most をインストールします．<br>

```
$ sudo pacman -S texlive-langcjk texlive-most
```

/usr/share/texmf-dist/web2c/texmf.cnf は /etc/texmf/web2c/texmf.cnf へのシンボリックリンクになっています．<br>
/usr/share/texmf-dist/web2c/texmf.cnf の shell_escape_commands が以下のように記述されていると思います．<br>

```
shell_escape_commands = \
bibtex,bibtex8,\
kpsewhich,\
makeindex,\
mpost,\
repstopdf,\
```

デフォルトでは extractbb が自動実行されません．<br>

TEXMFLOCAL の値を確認します．<br>

```
$ kpsewhich -var-value TEXMFLOCAL
/usr/local/share/texmf
```

/usr/local/share/texmf/web2c/texmf.cnf を作成します．<br>

```
$ sudo mkdir -p /usr/local/share/texmf/web2c
$ sudo touch /usr/local/share/texmf/web2c/texmf.cnf
```

/usr/local/share/texmf/web2c/texmf.cnf を編集します．<br>
shell_escape_commands を以下のように編集して保存します．<br>

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,pbibtex,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,\
mpost,pmpost,\
repstopdf,epspdf,extractbb,\
```

文字コードの自動判別機能を有効にする場合は [日本語 encoding の推測](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1043) を参照して設定します．<br>

[nkf](https://aur.archlinux.org/packages/nkf/) をインストールします．<br>

```
$ yaourt -S nkf
```

/usr/local/share/texmf/web2c/texmf.cnf に PTEX_IN_FILTER = /usr/bin/nkf -w を追加します．<br>

```
$ printf '\n%% guess input enc\nPTEX_IN_FILTER = /usr/bin/nkf -w\n' | sudo tee -a /usr/local/share/texmf/web2c/texmf.cnf
$ tail /usr/local/share/texmf/web2c/texmf.cnf
...
% guess input enc
PTEX_IN_FILTER = /usr/bin/nkf -w
```

TeX Live 2013 では kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．<br>
IPAexフォントを埋め込む場合は<br>

```
$ kanji-config-updmap ipaex
```

を実行します．<br>

pLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
$ ptex2pdf -l -ot '-synctex=1' -od '-f ptex-ipaex.map' hoge.tex
```

[ghostscript](https://www.archlinux.org/packages/?q=ghostscript) をインストールします．<br>

```
$ sudo pacman -S ghostscript
```

ghostscript の Search path を確認します．<br>

```
$ gs --help
...
Search path:
   /usr/share/ghostscript/`gs --version`/Resource/Init :
   /usr/share/ghostscript/`gs --version`/lib :
   /usr/share/ghostscript/`gs --version`/Resource/Font :
   /usr/share/ghostscript/fonts : /usr/share/fonts/Type1 : /usr/share/fonts

```

/usr/share/fonts/truetype/ipaex に TeX Live/Arch Linux の IPAex フォントのディレクトリのシンボリックリンクを作成します．

```
$ sudo mkdir -p /usr/share/fonts/truetype
$ sudo ln -s /usr/share/texmf-dist/fonts/truetype/public/ipaex /usr/share/fonts/truetype/ipaex
```

/usr/share/ghostscript/\`gs --version\`/Resource/Init/cidfmap に設定を記述します．<br>

```
$ sudo vi /usr/share/ghostscript/`gs --version`/Resource/Init/cidfmap
```

***

```
/ipaexm << /FileType /TrueType /Path (/usr/share/fonts/truetype/ipaex/ipaexm.ttf) /SubfontID 0 /CSI [(Japan1) 6] >> ;
/ipaexg << /FileType /TrueType /Path (/usr/share/fonts/truetype/ipaex/ipaexg.ttf) /SubfontID 0 /CSI [(Japan1) 6] >> ;
/Ryumin-Light /ipaexm ;
/GothicBBB-Medium /ipaexg ;
```

***

ps2pdf で PDF ファイルを作成すると IPAex フォントが埋め込まれます．<br>

pxdvi は tlptexliveリポジトリの pxdvi-xaw が 64bit 版の TeX Live 2013/Arch Linux で動作します．<br>
pxdvi が必要な人は tlptexliveリポジトリから pxdvi をダウンロード・展開して pxdvi-xaw, pxdvi.cfg, xdvi-ptex.map, texmf.cnf などを適切な場所に配置して /usr/share/texmf-local/web2c/texmf.cnf に &#x58;DVIINPUTS を設定してください．<br>

```
$ mkdir pxdvi
$ cd pxdvi
$ curl -O http://www.tug.org/~preining/tlptexlive/archive/pxdvi.tar.xz
$ curl -O http://www.tug.org/~preining/tlptexlive/archive/pxdvi.x86_64-linux.tar.xz
$ tar xvf pxdvi.tar.xz
$ tar xvf pxdvi.x86_64-linux.tar.xz
$ sudo cp -p bin/x86_64-linux/pxdvi-xaw /usr/bin
$ sudo ln -s /usr/bin/pxdvi-xaw /usr/bin/pxdvi
$ sudo cp -pR texmf/xdvi /usr/share/texmf-dist/pxdvi
$ sudo cp -pR texmf/fonts/map/pxdvi /usr/share/texmf-dist/fonts/map/pxdvi
$ sudo mkdir -p /usr/share/texmf-local/web2c
$ sudo cp /usr/share/texmf-dist/web2c/texmf.cnf /usr/share/texmf-local/web2c
```

/usr/share/texmf-local/web2c/texmf.cnf に &#x58;DVIINPUTS を追加します．<br>

```
% pxdvi
XDVIINPUTS = /usr/share/texmf-dist/pxdvi
```

platex で処理された DVI ファイルが表示できます．<br>

```
$ pxdvi -watchfile 1 hoge.dvi &
```

<!-- VineSeed の pxdvi-motif も pxdvi-xaw と同様に 64bit 版の TeX Live 2013/Arch Linux で動作します．~ -->
<!--  -->
<!-- $ mkdir vine -->
<!-- $ cd vine -->
<!-- $ curl -O http://ftp.jaist.ac.jp/pub/Linux/Vine/VineSeed/x86_64/RPMS.main/texlive-2012-4vl7.x86_64.rpm -->
<!-- $ curl -O http://ftp.jaist.ac.jp/pub/Linux/Vine/VineSeed/x86_64/RPMS.main/libkpathsea-2012-4vl7.x86_64.rpm -->
<!-- $ curl -O http://ftp.jaist.ac.jp/pub/Linux/Vine/VineSeed/x86_64/RPMS.main/openMotif-2.3.3-1vl6.x86_64.rpm -->
<!-- $ curl -O http://ftp.jaist.ac.jp/pub/Linux/Vine/VineSeed/x86_64/RPMS.main/libjpeg-turbo-1.2.1-1vl7.x86_64.rpm -->
<!-- $ curl -O http://ftp.jaist.ac.jp/pub/Linux/Vine/VineSeed/x86_64/RPMS.main/libpng-1.2.50-1vl7.x86_64.rpm -->
<!--  -->
<!-- rpm2cpio と cpio で rpm ファイルを展開します．~ -->
<!-- rpm2cpio が Segmentation fault (コアダンプ) する場合は Windows 版の 7-Zip をインストールして Wine で実行して rpm ファイルを展開してください．~ -->
<!-- 展開したファイルの pxdvi-motif と pxdvi-motif の実行に必要なライブラリを適切な場所に配置すれば pxdvi-motif が実行できます．~ -->
<!--  -->
<!-- $ pxdvi-motif -watchfile 1 hoge.dvi & -->

## [Python](/Python/) {#i5b0d02d}

```
$ sudo pacman -S python python2
```

## [Ruby](/Ruby/) {#f4286b29}

```
$ sudo pacman -S ruby
```

## [Perl](/Perl/) {#sf038555}

```
$ sudo pacman -S perl
```

## [Poppler](/Poppler/) {#bfbc00bc}

```
$ sudo pacman -S poppler poppler-data
```

Arch Linux の Evince, Okular, zathura, Texmaker などの Poppler + fontconfig を使用するアプリケーションはインストール直後のデフォルトの状態ではフォントが埋め込まれていない場合に Ryumin-Light (明朝体) がゴシック体で表示されてしまいます．<br>
[代替フォントの設定](/Evince/#substitute) を参照して代替フォントの設定をします．<br>

## [Evince](/Evince/) {#qd63d30c}

```
$ sudo pacman -S evince
```

gvfs が必要な人は gvfs もインストールします．<br>

```
$ sudo pacman -S gvfs
```

## [Okular](/Okular/) {#d36d48ab}

```
$ sudo pacman -S kdegraphics-okular kde-l10n-ja
```

## [zathura](/zathura/) {#cae6188b}

```
$ sudo pacman -S zathura zathura-pdf-poppler zathura-ps
```

## [qpdfview](/qpdfview/) {#xe3804e4}

```
$ yaourt -S qpdfview
```

## PdfViewer {#h51fbe76}

```
$ yaourt -S pdfviewer
```

## [MuPDF](/MuPDF/) {#w1b2cec8}

```
$ sudo pacman -S mupdf
```

## Xpdf {#yfd9416b}

```
$ sudo pacman -S xpdf xpdf-japanese
```

xpdf で日本語が表示できるように &#x7e;/.xpdfrc を編集します．

```
$ vi ~/.xpdfrc
```

***

```
cidToUnicode Adobe-Japan1 /usr/share/xpdf/japanese/Adobe-Japan1.cidToUnicode 
unicodeMap ISO-2022-JP /usr/share/xpdf/japanese/ISO-2022-JP.unicodeMap 
unicodeMap EUC-JP /usr/share/xpdf/japanese/EUC-JP.unicodeMap 
unicodeMap Shift-JIS /usr/share/xpdf/japanese/Shift-JIS.unicodeMap 
cMapDir Adobe-Japan1 /usr/share/xpdf/japanese/CMap 
toUnicodeDir /usr/share/xpdf/japanese/CMap
fontFile Ryumin-Light-Identity-H /usr/share/texmf-dist/fonts/truetype/public/ipaex/ipaexm.ttf
fontFile GothicBBB-Medium-Identity-H /usr/share/texmf-dist/fonts/truetype/public/ipaex/ipaexg.ttf
```

***

## [Adobe Reader](</Adobe Reader/>) {#f6223c5b}

[Adobe Reader 9 は 2013年6月26日 でサポートが終了](http://www.adobe.com/jp/joc/acrobat/it/news/)しました．<br>
Adobe Reader 9 を使用している方は Adobe Reader XI にアップグレードしてください．<br>
Adobe Reader XI は Wine 上でも動作します．<br>

## [Texmaker](/Texmaker/) {#kc254e63}

```
$ sudo pacman -S texmaker
```

Texmaker はかな漢字変換に関して不具合があるので<br>
不具合を回避するための設定をします．<br>
\section{ を入力した直後に日本語入力をしようとすると日本語入力が ON にならない場合は [Kile](/Kile/) を使用してください．<br>

### fcitx の場合 {#z5f111a8}

fcitx を使用する場合はテキストとハイライトが同系色の場合に文字が見えにくくなります．<br>
Qt 設定ツールを起動します．<br>

```
$ qtconfig-qt4
```

Qt 設定ツールの \[外観\]-\[パレットの設定\]-\[パレットの調整(<ins>T</ins>)...\]-\[中央部の色の役割(<ins>R</ins>)\] からハイライトを選択して<br>
\[色の選択(<ins>S</ins>)\] からテキストの色が白でも黒でもどちらでも見えるように適切な色を設定します．<br>
Qt 設定ツールの \[インターフェース\]-\[デフォルトのインプットメソッド\] から fcitx を選択すると<br>
Texmaker のデフォルトのインプットメソッドが fcitx になります．<br>
デフォルトのインプットメソッドを fcitx 以外にしたい場合は<br>
Texmaker の \[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\] のテキスト入力ボックスでマウスを右クリックして<br>
\[インプットメソッドを選択\]-\[fcitx\] を選択してください．<br>

### ibus の場合 {#ic19545c}

ibus を使用する場合はテキストとハイライトが黒く表示されて文字が見えなくなります．<br>
ibus を使用する場合は ibus-qt もインストールします．<br>

```
$ sudo pacman -S ibus-qt
```

ibus-qt をインストールしてインプットメソッドを ibus にするとハイライトが薄紫色になって文字が見えるようになります．<br>
Qt 設定ツールを起動します．<br>

```
$ qtconfig-qt4
```

Qt 設定ツールの \[インターフェース\]-\[デフォルトのインプットメソッド\] から ibus を選択すると<br>
Texmaker のデフォルトのインプットメソッドが ibus になります．<br>
デフォルトのインプットメソッドを ibus 以外にしたい場合は<br>
Texmaker の \[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\] のテキスト入力ボックスでマウスを右クリックして<br>
\[インプットメソッドを選択\]-\[ibus\] を選択してください．<br>

## [LyX](/LyX/) {#odd649e9}

```
$ sudo pacman -S lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

## [TeXworks](/TeXworks/) {#y01d9b26}

```
$ yaourt -S texworks
```

## [TeXstudio](/TeXstudio/) {#geb231cb}

```
$ yaourt -S texstudio
```

## LaTeXila {#q4319830}

```
$ yaourt -S latexila
```

## [Kile](/Kile/) {#l211571b}

```
$ sudo pacman -S kile kdebase-konsole
```

## [Emacs](/Emacs/) {#le6bf422}

```
$ sudo pacman -S emacs
```

## [Vim](/Vim/) {#g73ca7b0}

```
$ sudo pacman -S vim
```

## [gedit](/gedit/) {#k1930181}

```
$ sudo pacman -S gedit gedit-plugins
$ yaourt -S gedit-latex
```

## [Geany](/Geany/) {#z3d2b775}

```
$ sudo pacman -S geany geany-plugins
```

## [Inkscape](/Inkscape/) {#ca45a692}

```
$ sudo pacman -S inkscape pstoedit python2-lxml
```

eqtexsvg を最新版に更新します．<br>

```
$ curl -O http://www.julienvitard.eu/documents/eqtexsvg/eqtexsvg.tar.gz
$ tar xvf eqtexsvg.tar.gz
$ chmod +x eqtexsvg.py
$ sudo cp -p eqtexsvg.py eqtexsvg.inx /usr/share/inkscape/extensions
$ rm eqtexsvg.py eqtexsvg.inx eqtexsvg.tar.gz
```

Inkscape を起動すると \[エクステンション(N)\] → \[レンダリング\] → \[Latex 数式...\] が使用出来ます．<br>

## awesome {#hf2862e7}

```
$ sudo pacman -S awesome
```

または

```
$ yaourt -S awesome-git
```

- [ウィンドウマネージャ「awesome」の基本操作](http://momoto.github.io/blog/2013/03/27/awesome-tutorials/)

## sakura {#kf265bc9}

```
$ sudo pacman -S sakura
```
