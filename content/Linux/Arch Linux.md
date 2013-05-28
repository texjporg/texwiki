---
title: "Linux/Arch Linux"
url: "/Linux/Arch Linux/"
date: 2013-05-24T13:55:15Z
pukiwiki: "Linux/Arch Linux"
---

# Linux/Arch Linux

[Linux](/Linux/) > Arch Linux

## [Arch Linux](http://www.archlinux.org/) {#e64e7986}

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Archlinux-official-fullcolour.svg/500px-Archlinux-official-fullcolour.svg.png" alt="Arch Linux" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Arch Linux とは {#lc2ea000}

Arch Linux はシンプルで軽量な Linux ディストリビューションです．

- [Arch Linux](http://www.archlinux.org/)

## インストール {#ba9eb570}

- [Beginners' Guide (日本語) - ArchWiki](<https://wiki.archlinux.org/index.php/Beginners%27_Guide_(%E6%97%A5%E6%9C%AC%E8%AA%9E)>)
- [ArchLinuxのインストール](http://mba-hack.blogspot.jp/2013/05/archlinux.html)
- [2013.4.30 - Maidsphere // メイドスフィア](http://www.maidsphere.jp/archive/20130430/)
- [Arch Linux 2013.04.01 インストールまとめ1](http://lynx0077.hateblo.jp/entry/2013/04/18/214846), [Arch Linux 2013.04.01 インストールまとめ2](http://lynx0077.hateblo.jp/entry/2013/04/18/215116)
- [ArchLinux 2013.04.01 をインストール、日本語化](http://tkyon.blogspot.jp/2013/04/archlinux-20130401.html)
- [ArchLinux\[2013.03.01\]をインストールしてみた。](http://hgeekooohay.blogspot.jp/2013/03/archlinux20130301.html)
- [Arch Linuxインストールメモ （archlinux-2013.02.01）](http://extrea.hatenablog.com/entry/2013/02/15/123721)
- [Arch Linux セットアップまとめ](http://jedipunkz.github.io/blog/2013/01/14/arch-linux-setup/)

archlinux-yyyy.mm.dd-dual.iso から起動して Boot Arch Linux (x86_64) を選択

```
Arch Linux ?.?.?-?-ARCH (tty1)

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

## [TeX Live](</TeX Live/>) {#e2a82c70}

- [TeX Live - ArchWiki](https://wiki.archlinux.org/index.php/TeX_Live)
- [LaTeX - ArchWiki](https://wiki.archlinux.org/index.php/LaTeX)
- [Kile and TeX Live - ArchWiki](https://wiki.archlinux.org/index.php/Kile_and_TeX_Live)

### TeX Live 2012/Arch Linux {#x25fb663}

texlive-langcjk, texlive-most をインストールします．<br>

```
$ sudo pacman -S texlive-langcjk texlive-most
```

/usr/share/texmf/web2c/texmf.cnf を編集します．

```
$ sudo vi /usr/share/texmf/web2c/texmf.cnf
```

shell_escape_commands が以下のように記述されていると思います．

```
shell_escape_commands = \
bibtex,bibtex8,\
kpsewhich,\
makeindex,\
mpost,\
repstopdf,\
```

shell_escape_commands を以下のように編集して保存します．

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,pbibtex,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,\
mpost,pmpost,\
repstopdf,epspdf,extractbb,\
```

- [tkyon: TeX](http://tkyon.blogspot.jp/search/label/TeX), [tkyon: Arch](http://tkyon.blogspot.jp/search/label/Arch)
    - [Android で TeX がしたい](http://tkyon.blogspot.jp/2013/03/android-tex.html)
    - [Archlinux (Archbang)にTeXLive2012,TeXworksをインストール](http://tkyon.blogspot.com/2012/12/archlinux-archbangtexlive2012texworks.html)
    - [TeX 用エディタの設定](http://tkyon.blogspot.jp/2013/02/tex.html)
- [最近のTeXはすごい](http://tanitsutakahisa.wordpress.com/2013/03/05/2118/)
- [Arch LinuxでTex環境](http://d.hatena.ne.jp/yutaka_j/20130212/1360661416)
- [ArchLinux へ TeX のインストール](http://d.hatena.ne.jp/with137d/20130131/1359632905)
- [TeXLiveの導入とフォントの設定](http://d.hatena.ne.jp/gionXY/20121208/1354970466)
- [ArchLinuxにLaTeXをインストール](http://amkkun.hatenablog.com/entry/2012/10/24/040333)
- [ThinkPad Edge E430にArchLinuxをインストール](http://amkkun.hatenablog.com/entry/2012/11/04/123834)

## [Python](/Python/) {#i5b0d02d}

python, python2 をインストールします．<br>

```
$ sudo pacman -S python python2
```

## [Ruby](/Ruby/) {#f4286b29}

ruby をインストールします．<br>

```
$ sudo pacman -S ruby
```

## [Perl](/Perl/) {#sf038555}

perl をインストールします．<br>

```
$ sudo pacman -S perl
```

## [Ghostscript](/Ghostscript/) {#yb4bdfcc}

ghostscript をインストールします．<br>

```
$ sudo pacman -S ghostscript
```

ghostscript の Search path を確認します．<br>

```
$ gs --help
...
Search path:
   /usr/share/ghostscript/9.07/Resource/Init :
   /usr/share/ghostscript/9.07/lib :
   /usr/share/ghostscript/9.07/Resource/Font :
   /usr/share/ghostscript/fonts : /usr/share/fonts/Type1 : /usr/share/fonts

```

/usr/share/fonts/truetype/ipaex に TeX Live 2012/Arch Linux の IPAex フォントのディレクトリのシンボリックリンクを作成します．

```
$ sudo mkdir -p /usr/share/fonts/truetype
$ sudo ln -s /usr/share/texmf-dist/fonts/truetype/public/ipaex /usr/share/fonts/truetype/ipaex
```

/usr/share/ghostscript/9.07/Resource/Init/cidfmap に設定を記述します．<br>

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

## poppler {#bfbc00bc}

poppler, poppler-data をインストールします．<br>

```
$ sudo pacman -S poppler poppler-data
```

Arch Linux の Evince, Okular, zathura, Texmaker などの poppler + fontconfig を使用するアプリケーションはインストール直後のデフォルトの状態ではフォントが埋め込まれていない場合に Ryumin-Light (明朝体) がゴシック体で表示されてしまいます．<br>
[代替フォントの設定](/Evince/#substitute) を参照して代替フォントの設定をします．<br>

## [Evince](/Evince/) {#qd63d30c}

evince をインストールします．<br>

```
$ sudo pacman -S evince
```

gvfs が必要な人は gvfs もインストールします．<br>

```
$ sudo pacman -S gvfs
```

## [Okular](/Okular/) {#d36d48ab}

kdegraphics-okular, kde-l10n-ja をインストールします．<br>

```
$ sudo pacman -S kdegraphics-okular kde-l10n-ja
```

## [zathura](/zathura/) {#cae6188b}

zathura, zathura-pdf-poppler, zathura-ps をインストールします．<br>

```
$ sudo pacman -S zathura zathura-pdf-poppler zathura-ps
```

## [MuPDF](/MuPDF/) {#w1b2cec8}

mupdf をインストールします．<br>

```
$ sudo pacman -S mupdf
```

## Xpdf {#yfd9416b}

xpdf, xpdf-japanese をインストールします．<br>

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

## [Texmaker](/Texmaker/) {#kc254e63}

texmaker をインストールします．<br>

```
$ sudo pacman -S texmaker
```

Texmaker はかな漢字変換に関して不具合があるので<br>
不具合を回避するための設定をします．<br>

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

lyx をインストールします．<br>

```
$ sudo pacman -S lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

## Gummi {#gf42d835}

gummi をインストールします．<br>

```
$ sudo pacman -S gummi
```

## [Kile](/Kile/) {#l211571b}

kile, kdebase-konsole をインストールします．<br>

```
$ sudo pacman -S kile kdebase-konsole
```

## [Emacs](/Emacs/) {#le6bf422}

emacs をインストールします．<br>

```
$ sudo pacman -S emacs
```

## [Vim](/Vim/) {#g73ca7b0}

vim をインストールします．<br>

```
$ sudo pacman -S vim
```

## [gedit](/gedit/) {#k1930181}

gedit, gedit-plugins をインストールします．<br>

```
$ sudo pacman -S gedit gedit-plugins
```

## [Geany](/Geany/) {#z3d2b775}

geany, geany-plugins をインストールします．<br>

```
$ sudo pacman -S geany geany-plugins
```

## [Inkscape](/Inkscape/) {#ca45a692}

inkscape, pstoedit, python2-lxml をインストールします．<br>

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
