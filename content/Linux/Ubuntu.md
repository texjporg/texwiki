---
title: "Linux/Ubuntu"
url: "/Linux/Ubuntu/"
date: 2013-04-27T23:53:01Z
pukiwiki: "Linux/Ubuntu"
---

# Linux/Ubuntu

[Linux](/Linux/) > Ubuntu/Ubuntu GNOME/Kubuntu/Xubuntu/Lubuntu

## [Ubuntu](http://www.ubuntu.com/)/[Ubuntu GNOME](http://ubuntugnome.org/)/[Kubuntu](http://www.kubuntu.org/)/[Xubuntu](http://xubuntu.org/)/[Lubuntu](http://lubuntu.net/) {#m38e62cf}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Logo-ubuntu_no%28r%29-black_orange-hex.svg/500px-Logo-ubuntu_no%28r%29-black_orange-hex.svg.png" alt="Ubuntu" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Ubuntu とは {#i6bcb07d}

Ubuntu は Debian GNU/Linux をベースにした Linux ディストリビューションです．<br>

- [Ubuntu homepage | Ubuntu](http://www.ubuntu.com/)
- [Home | Ubuntu Japanese Team](http://www.ubuntulinux.jp/)
- [Ubuntu Japanese Wiki - Ubuntu Japanese Wiki](https://wiki.ubuntulinux.jp/)
    - [開発](https://wiki.ubuntulinux.jp/Develop)
        <!-- - -[[JapaneseLocalizedDerivative/LaTeXForJapanese:https://wiki.ubuntulinux.jp/JapaneseLocalizedDerivative/LaTeXForJapanese]] -->
        <!-- - -[[AdobeReaderJpn-Migration:https://wiki.ubuntulinux.jp/Develop/AdobeReaderJpn-Migration]] -->

- [Ubuntu日本語フォーラム](https://forums.ubuntulinux.jp/)
- [The ubuntu-jp Archives](https://lists.ubuntu.com/archives/ubuntu-jp/)

### 公式派生版 {#i77fdd5e}

- [Derivatives](http://www.ubuntu.com/about/about-ubuntu/derivatives)

#### Ubuntu GNOME/Kubuntu/Xubuntu/Lubuntu とは {#fa2981c9}

Ubuntu GNOME はデスクトップ環境に GNOME を採用した Ubuntu ベースの Linux ディストリビューションです．<br>
Kubuntu はデスクトップ環境に KDE を採用した Ubuntu ベースの Linux ディストリビューションです．<br>
Xubuntu はデスクトップ環境に Xfce を採用した Ubuntu ベースの Linux ディストリビューションです．<br>
Lubuntu はデスクトップ環境に LXDE を採用した Ubuntu ベースの Linux ディストリビューションです．<br>

- [Ubuntu GNOME](http://ubuntugnome.org/)
- [Kubuntu](http://www.kubuntu.org/)
- [Xubuntu](http://xubuntu.org/)
- [Lubuntu](http://lubuntu.net/)

### 派生版 {#m65a8766}

#### Linux Mint とは {#n7037512}

Linux Mint はデスクトップ環境に Cinnamon, MATE を採用した Ubuntu ベースの Linux ディストリビューションです．<br>

- [Linux Mint](</Linux/Linux Mint/>)

## [TeX Live](</TeX Live/>) <a id="texlive"></a> {#l2f3d074}

- [https://launchpad.net/tex-live](https://launchpad.net/tex-live)
- [https://launchpad.net/ubuntu/+source/texlive-base](https://launchpad.net/ubuntu/+source/texlive-base)
    - [https://launchpad.net/ubuntu/+source/texlive-base/+changelog](https://launchpad.net/ubuntu/+source/texlive-base/+changelog)
- [https://launchpad.net/ubuntu/+source/texlive-lang](https://launchpad.net/ubuntu/+source/texlive-lang)
    - [https://launchpad.net/ubuntu/+source/texlive-lang/+changelog](https://launchpad.net/ubuntu/+source/texlive-lang/+changelog)
- [Ubuntu -- パッケージ検索結果 -- texlive-full](http://packages.ubuntu.com/ja/texlive-full)
- [Ubuntu -- パッケージ検索結果 -- texlive-lang-cjk](http://packages.ubuntu.com/ja/texlive-lang-cjk)
- [Ubuntu -- パッケージ検索結果 -- texlive-fonts-recommended](http://packages.ubuntu.com/ja/texlive-fonts-recommended)
- [Ubuntu -- パッケージ検索結果 -- latexmk](http://packages.ubuntu.com/ja/latexmk)
- [Ubuntu -- パッケージ検索結果 -- ghostscript](http://packages.ubuntu.com/ja/ghostscript)
- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)

### TeX Live 2013 <a id="texlive2013"></a> {#y097b8c5}

#### Ubuntu 13.04 {#se51f85a}

- Linux/Ubuntu

### TeX Live 2013/Debian <a id="texlive2013debian"></a> {#c935e6e4}

#### Ubuntu 13.10 {#xabd5471}

TeX Live 2013/Debian をフルインストールする場合は texlive-full を指定してインストールします．<br>

```
$ sudo apt-get install texlive-full
```

個別にインストールしたい場合は texlive-lang-cjk と texlive-fonts-recommended を指定してインストールします．<br>

```
$ sudo apt-get install texlive-lang-cjk texlive-fonts-recommended
```

/usr/share/texmf/web2c/texmf.cnf または /usr/share/texlive/texmf-dist/web2c/texmf.cnf を編集します．

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

### TeX Live 2012/Debian <a id="texlive2012debian"></a> {#rf0fcf3b}

#### Ubuntu 13.04 {#fd747683}

Ubuntu 12.10 と同様の方法でインストールできます．<br>

- [Ubuntu(Xubuntu)でTeXをEmacsで書く](http://ameblo.jp/the1736/entry-11533722174.html)
- \[[Ubuntu13.04\]LaTexのセットアップ](http://aruneko.wkeya.com/archives/461)
- [Ubuntu 13.04でLaTeX環境を整える](http://kubuser.blog.fc2.com/blog-entry-33.html)
- [Ubuntu 13.04 に TeXLive 2012 をインストール](http://tkyon.blogspot.jp/2013/04/ubuntu-1304-texlive-2012.html)
- [Ubuntu 13.04 のインストール &amp; 設定](http://transitive.info/2013/04/22/install-ubuntu-1304/)

TeX Live 2012/Debian をフルインストールする場合は texlive-full を指定してインストールします．<br>

```
$ sudo apt-get install texlive-full
```

個別にインストールしたい場合は texlive-lang-cjk と texlive-fonts-recommended を指定してインストールします．<br>

```
$ sudo apt-get install texlive-lang-cjk texlive-fonts-recommended
```

/usr/share/texmf/web2c/texmf.cnf または /usr/share/texlive/texmf/web2c/texmf.cnf を編集します．

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

## TeX Live 2013 <a id="texlive2013install"></a> {#jd4f2edd}

### dummy パッケージの作成 {#he7ed5d4}

TeX Live の公式サイトのパッケージをインストールしたあとで TeX Live 2012/Debian に依存するパッケージをインストールしようとすると Ubuntu や Debian GNU/Linux の TeX Live 2012/Debian も同時にインストールされてしまいます．<br>
TeX Live 2012/Debian がインストールされないように dummy パッケージを作成して依存関係の問題を回避します．<br>

```
$ sudo apt-get install equivs
$ wget http://www.tug.org/texlive/files/debian-control-ex.txt
```

<!-- debian-control-ex.txt に texlive-full, texlive-lang-cjk, asymptote, asymptote-doc などの項目を追加します． -->

```
$ equivs-build debian-control-ex.txt
$ sudo dpkg -i texlive-local_2011-1~1_all.deb
```

### TeX Live 2013 のインストール {#hf3fd9de}

[Linux#TeX Live 2013 のインストール](/Linux/#texlive2013) を参照．<br>

#### texmf.cnf の編集 {#e29d5a24}

[Linux#texmf.cnf の編集](/Linux/#texmfcnf) を参照．<br>

### ptex2pdf で IPAex フォントの埋め込み {#j5ae0e71}

TeX Live 2013 には IPAex フォント，ptex-ipaex.map が収録されています．<br>

```
$ kpsewhich ipaexm.ttf
/usr/local/texlive/2013/texmf-dist/fonts/truetype/public/ipaex/ipaexm.ttf
$ kpsewhich ipaexg.ttf
/usr/local/texlive/2013/texmf-dist/fonts/truetype/public/ipaex/ipaexg.ttf
$ kpsewhich ptex-ipaex.map
/usr/local/texlive/2013/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ipaex/ptex-ipaex.map
```

pLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
$ ptex2pdf -l -ot '-synctex=1' -od '-f ptex-ipaex.map' hoge.tex
```

### dvips + ps2pdf を使用して PDF ファイルを作成 {#gcac3589}

Ubuntu 13.04 には Ghostscript 9.07 が収録されています．<br>
Ghostscript がインストールされていない場合は Ghostscript をインストールします．<br>

```
$ sudo apt-get install ghostscript
```

以下の表示が出力されて dvips + ps2pdf (Ghostscript) を使用して PDF ファイルが作成できない場合は Ghostscript の設定をします．<br>

```
Can't find (or can't open) font file /usr/share/ghostscript/9.07/Resource/Font/ipaexm-H.
Can't find (or can't open) font file ipaexm-H.
Can't find (or can't open) font file /usr/share/ghostscript/9.07/Resource/Font/ipaexg-H.
Can't find (or can't open) font file ipaexg-H.
```

Ghostscript の Search path を確認します．<br>

```
$ gs --help
...
Search path:
   /usr/share/ghostscript/9.07/Resource/Init :
   /usr/share/ghostscript/9.07/lib :
   /usr/share/ghostscript/9.07/Resource/Font :
   /usr/share/ghostscript/fonts : /var/lib/ghostscript/fonts :
   /usr/share/cups/fonts : /usr/share/ghostscript/fonts :
   /usr/local/lib/ghostscript/fonts : /usr/share/fonts
```

/usr/share/fonts/truetype/ipaex に TeX Live 2013 の IPAex フォントのディレクトリのシンボリックリンクを作成します．

```
$ sudo ln -s /usr/local/texlive/2013/texmf-dist/fonts/truetype/public/ipaex /usr/share/fonts/truetype/ipaex
```

/usr/share/ghostscript/9.07/Resource/Init/cidfmap を作成します．

```
$ sudo touch /usr/share/ghostscript/9.07/Resource/Init/cidfmap
```

/usr/share/ghostscript/9.07/Resource/Init/cidfmap に設定を記述します．<br>

```
/ipaexm << /FileType /TrueType /Path (/usr/share/fonts/truetype/ipaex/ipaexm.ttf) /SubfontID 0 /CSI [(Japan1) 6] >> ;
/ipaexg << /FileType /TrueType /Path (/usr/share/fonts/truetype/ipaex/ipaexg.ttf) /SubfontID 0 /CSI [(Japan1) 6] >> ;
/Ryumin-Light /ipaexm ;
/GothicBBB-Medium /ipaexg ;
```

ps2pdf で PDF ファイルを作成すると IPAex フォントが埋め込まれます．<br>

## [Python](/Python/) <a id="python"></a> {#c68c1c0f}

```
$ sudo apt-get install python python3
```

## [Ruby](/Ruby/) <a id="ruby"></a> {#j96f01f6}

```
$ sudo apt-get install ruby1.9.3
```

## [Perl](/Perl/) <a id="perl"></a> {#q23bc7da}

```
$ sudo apt-get install perl
```

## [Evince](/Evince/) <a id="evince"></a> {#m440464c}

```
$ sudo apt-get install evince
```

[代替フォントの設定](/Evince/#substitute) を参照して代替フォントの設定をします．<br>

## [Okular](/Okular/) <a id="okular"></a> {#xd972c8e}

```
$ sudo apt-get install okular kde-l10n-ja
```

## [zathura](/zathura/) <a id="zathura"></a> {#z031990b}

```
$ sudo apt-get install zathura
```

## [qpdfview](/qpdfview/) <a id="qpdfview"></a> {#n4d4de3e}

```
$ sudo apt-get install qpdfview
```

## [MuPDF](/MuPDF/) <a id="mupdf"></a> {#s8c9b663}

```
$ sudo apt-get install mupdf
```

## [Texmaker](/Texmaker/) <a id="texmaker"></a> {#z2142745}

```
$ sudo apt-get install texmaker
$ sudo apt-get install qt4-qtconfig
```

インプットメソッドに ibus を使用している場合は ibus-qt4 もインストールします．<br>

```
$ sudo apt-get install ibus-qt4
```

インプットメソッドに ibus を使用している場合は [Texmaker#かな漢字変換をする際に，文字と背景が黒く表示され，判読不能になる#修正方法 (Linux Mint)](/Texmaker/#q93a4c5b) を参照して不具合を回避します．<br>

## [LyX](/LyX/) <a id="lyx"></a> {#s7886348}

最新の安定版/開発版をインストールしたい場合は LyX/インストール#Ubuntu を参照．<br>

```
$ sudo apt-get install lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

## [TeXworks](/TeXworks/) <a id="texworks"></a> {#veed3c44}

最新の安定版/開発版をインストールしたい場合は [TeXworks/インストール#Ubuntu](</TeXworks/インストール/#p69845c9>) を参照．<br>

```
$ sudo apt-get install texworks
$ sudo apt-get install qt4-qtconfig
```

インプットメソッドに ibus を使用している場合は ibus-qt4 もインストールします．<br>

```
$ sudo apt-get install ibus-qt4
```

インプットメソッドに ibus を使用している場合は [かな漢字変換をする際に，文字が白く表示され，ハイライトに隠れて見えにくくなる#修正方法 (Linux Mint)](/TeXworks/#ke5fd57d) を参照して不具合を回避します．<br>

## Gummi <a id="gummi"></a> {#a1b3d45b}

```
$ sudo apt-get install gummi
```

## LaTeXila <a id="latexila"></a> {#v3e14a29}

```
$ sudo apt-get install latexila
```

## [Kile](/Kile/) <a id="kile"></a> {#u0698a20}

```
$ sudo apt-get install kile
```

## [Eclipse](/Eclipse/) <a id="eclipse"></a> {#ae8afa99}

```
$ sudo apt-get install eclipse
```

## [Emacs](/Emacs/) <a id="emacs"></a> {#s0b6fa60}

```
$ sudo apt-get install emacs24
```

### [YaTeX](/YaTeX/) {#pc05aa7c}

- [https://launchpad.net/ubuntu/+source/yatex/](https://launchpad.net/ubuntu/+source/yatex/)
    - [https://launchpad.net/ubuntu/+source/yatex/+changelog](https://launchpad.net/ubuntu/+source/yatex/+changelog)

### [AUCTeX](/AUCTeX/) {#u31c1597}

- [https://launchpad.net/ubuntu/+source/auctex/](https://launchpad.net/ubuntu/+source/auctex/)
    - [https://launchpad.net/ubuntu/+source/auctex/+changelog](https://launchpad.net/ubuntu/+source/auctex/+changelog)

## [Vim](/Vim/) <a id="vim"></a> {#a5b8fa0b}

```
$ sudo apt-get install vim
```

## [gedit](/gedit/) <a id="gedit"></a> {#ofba42a2}

```
$ sudo apt-get install gedit gedit-latex-plugin gedit-plugins
```

## [Geany](/Geany/) <a id="geany"></a> {#zed31359}

```
$ sudo apt-get install geany geany-plugins
```

## [Inkscape](/Inkscape/) <a id="inkscape"></a> {#u785615b}

```
$ sudo apt-get install inkscape pstoedit python-lxml
```

eqtexsvg を最新版に更新します．<br>

```
$ wget http://www.julienvitard.eu/documents/eqtexsvg/eqtexsvg.tar.gz
$ tar xvf eqtexsvg.tar.gz
$ chmod +x eqtexsvg.py
$ sudo cp -p eqtexsvg.py eqtexsvg.inx /usr/share/inkscape/extensions
$ rm eqtexsvg.py eqtexsvg.inx eqtexsvg.tar.gz
```

Inkscape を起動すると \[エクステンション(N)\] → \[レンダリング\] → \[Latex 数式...\] が使用出来ます．<br>

## fcitx-mozc <a id="fcitx-mozc"></a> {#rbb0c80a}

Ubuntu 13.04 では fcitx-mozc が利用できます．<br>

```
$ sudo apt-get install software-properties-common
$ sudo apt-add-repository ppa:ikuya-fruitsbasket/fcitx
$ sudo apt-get update
$ sudo apt-get install fcitx fcitx-mozc
$ im-config -x
```

## 関連リンク {#ofcc84e4}

- [ASCII.jp：～師範、組版システム「TeX」について教えてください！～｜行っとけ！　Ubuntu道場！](http://ascii.jp/elem/000/000/725/725528/)
- [Sickly Life](http://www.k5.dion.ne.jp/~r-f/sicklylife/) Ubuntu をインストールした直後に行う設定
- [Ubuntu 12.04のevinceでpdfを開くと明朝体もゴシック体で表示されるのを直す](http://ubutun.blogspot.jp/2012/05/ubuntu-1204evincepdf.html)
- [Ubuntu 12.04をインストール](http://ubutun.blogspot.jp/2012/04/ubuntu-1204.html)
- [本家Ubuntuの日本語表示問題 Ubuntu 12.04編](http://blog.minawa.net/2012/04/ubuntu-ubuntu-1204.html)
