---
title: "Linux/Debian"
url: "/Linux/Debian/"
date: 2013-04-12T00:57:30Z
pukiwiki: "Linux/Debian"
---

# Linux/Debian

[Linux](/Linux/) > Debian GNU/Linux

## [Debian GNU/Linux](http://www.debian.org) {#b76dbb44}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Debian-OpenLogo.svg/200px-Debian-OpenLogo.svg.png" alt="Debian GNU/Linux" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Debian GNU/Linux とは {#b9471c57}

Debian はフリーなオペレーティングシステムを作成するためのプロジェクトです．<br>
Debian GNU/Linux は Debian Project によって作成された Linux ディストリビューションです．<br>

- [Debian](http://www.debian.org)

### 設定 {#n0611da8}

- [Debianリポジトリの設定方法](http://ftp-admin.blogspot.jp/2013/02/debian.html)

## [TeX Live](</TeX Live/>) <a id="texlive"></a> {#j310e7a0}

- [Debian -- パッケージ検索結果 -- texlive-full](http://packages.debian.org/ja/texlive-full)
- [Debian -- パッケージ検索結果 -- texlive-lang-cjk](http://packages.debian.org/ja/texlive-lang-cjk)
- [Debian -- パッケージ検索結果 -- texlive-fonts-recommended](http://packages.debian.org/ja/texlive-fonts-recommended)
- [Debian -- パッケージ検索結果 -- latexmk](http://packages.debian.org/ja/latexmk)
- [Debian -- パッケージ検索結果 -- ghostscript](http://packages.debian.org/ja/ghostscript)
- [Debian -- sid の texlive パッケージに関する詳細](http://packages.debian.org/sid/texlive)
- [http://packages.debian.org/ja/sid/tex/](http://packages.debian.org/ja/sid/tex/)
- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)
- [http://anonscm.debian.org/gitweb/?p=debian-tex/texlive-bin.git;a=summary](http://anonscm.debian.org/gitweb/?p=debian-tex/texlive-bin.git;a=summary)
- [http://anonscm.debian.org/gitweb/?p=debian-tex/texlive-nonbin.git;a=summary](http://anonscm.debian.org/gitweb/?p=debian-tex/texlive-nonbin.git;a=summary)
- [http://dedup.debian.net/compare/poppler-data/texlive-lang-cjk](http://dedup.debian.net/compare/poppler-data/texlive-lang-cjk)

### TeX Live 2013 <a id="texlive2013"></a> {#z4379676}

- [TeX / ChangeLog::hjk](http://kreisel.fam.cx/webmaster/clog/cat_tex.html)
- [TeX Live を使おう──Linux ユーザと Mac OS X ユーザのために──](http://www.fugenji.org/~thomas/texlive-guide/)
- [Linux/Linux Mint](</Linux/Linux Mint/#texlive2013install>)
- [TeX Live 2013 released](http://www.preining.info/blog/2013/06/tex-live-2013-released/)

### TeX Live 2013/Debian <a id="texlive2013debian"></a> {#rde4f3be}

- [TeX Live 2013 released](http://www.preining.info/blog/2013/06/tex-live-2013-released/)
- [TeXLive 2013 in Debian](http://uwabami.junkhub.org/log/20130526p01.html)
- [TeX Live 2013 for Debian](http://www.preining.info/blog/2013/05/tex-live-2013-for-debian/)

#### Debian GNU/Linux sid で TeX Live 2013/Debian のインストール {#b43aa577}

Synaptic パッケージマネージャから [texlive-full](http://packages.debian.org/sid/texlive-full) パッケージを選択してインストールすれば OK です．<br>

apt-get を使用してインストールしても OK です．<br>

```
$ sudo apt-get install texlive-full
```

/usr/share/texlive/texmf-dist/web2c/texmf.cnf を編集します．

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

### TeX Live 2012/Debian <a id="texlive2012debian"></a> {#s760f6d9}

- [VirtualBoxにDebian/wheezyをインストール](http://ameblo.jp/koba-matethm/entry-11554870177.html)
- [Debian Wheezy amd64でLaTeX環境を構築する](http://linux.tsutomuonoda.com/debian-wheezy-amd64-latex/)
- [Raspberry Pi で遊ぶ (1) &mdash;LaTeX のコンパイルサーバーとして&#8212;](http://skalldan.wordpress.com/2013/02/18/raspberry-pi-%E3%81%A7%E9%81%8A%E3%81%B6-1-latex-%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%A8%E3%81%97%E3%81%A6/)
- [Linuxに日本語LaTeXを導入する](http://note.chiebukuro.yahoo.co.jp/detail/n151638)
- [Debian wheezyへTeX環境のインストール](http://animemo.seesaa.net/article/314356021.html)

#### Debian GNU/Linux 7.0 「Wheezy」 で TeX Live 2012/Debian のインストール {#v3917726}

Synaptic パッケージマネージャから [texlive-full](http://packages.debian.org/wheezy/texlive-full) パッケージを選択してインストールすれば OK です．<br>

apt-get を使用してインストールしても OK です．<br>

```
$ sudo apt-get install texlive-full
```

/usr/share/texlive/texmf/web2c/texmf.cnf を編集します．

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

## [Python](/Python/) <a id="python"></a> {#df01e340}

```
$ sudo apt-get install python python3
```

## [Ruby](/Ruby/) <a id="ruby"></a> {#b036c19c}

```
$ sudo apt-get install ruby1.9.3
```

## [Perl](/Perl/) <a id="perl"></a> {#t46cade6}

```
$ sudo apt-get install perl
```

## [Evince](/Evince/) <a id="evince"></a> {#w1fb0d62}

```
$ sudo apt-get install evince
```

[代替フォントの設定](/Evince/#substitute) を参照して代替フォントの設定をします．<br>

## [Okular](/Okular/) <a id="okular"></a> {#u6c2955c}

```
$ sudo apt-get install okular kde-l10n-ja
```

## [zathura](/zathura/) <a id="zathura"></a> {#r36251d6}

```
$ sudo apt-get install zathura
```

## [qpdfview](/qpdfview/) <a id="qpdfview"></a> {#f44ae716}

```
$ sudo apt-get install qpdfview
```

## [MuPDF](/MuPDF/) <a id="mupdf"></a> {#fff66c5d}

```
$ sudo apt-get install mupdf
```

## [Adobe Reader](</Adobe Reader/>) <a id="adobereader"></a> {#o1495f80}

### Debian GNU/Linux sid x86_64 (amd64) での [Adobe Reader](</Adobe Reader/>) のインストール {#p857c294}

#### 64 bit OS 上での 32 bit バイナリの取り扱いに関して {#u2fe7284}

```

```

Linux 版、Windows 版の双方に関して、[Adobe Reader](</Adobe Reader/>) は、ia32（32 bit 版）バイナリのみが配布されています。<br>
よって、64 bit の Linux 上で 32 bit バイナリを動作させなければなりません。<br>
現在の Debian では [Multiarch](http://wiki.debian.org/Multiarch) によってこれを実現しています。<br>
従来は ia32-libs 等をインストールすることでこれを実現していました。<br>

```
$ sudo dpkg --add-architecture <architecture>
```

を実行することにより、システムのセカンドアーキテクチャが登録され、インストール・実行が可能となります。このとき、セカンドアーキテクチャのパッケージ名末尾には ":&lt;architecture>" が付与されます。

wine を使用して Windows 用バイナリを実行する際にも、Multiarch による 32 bit アーキテクチャのサポートが必須となります。これに関しては、wine のインストール時に apt が説明のメッセージを出しますので、詳細はそちらを御参照下さい。

#### Linux 版 Adobe Reader のインストール {#l44b42e5}

[Adobe Reader](</Adobe Reader/>) (Linux 版/英語版) と Adobe Reader 日本語フォントパック (Linux 版) のパッケージが [deb-multimedia](http://deb-multimedia.org/) (dmo) から供給されています。apt への追加法に関しては [deb-multimedia のページ](http://deb-multimedia.org/) の下の方に書かれています。

dmo を apt へ追加した後、インストールする際には以下のようにします。

```
$ sudo dpkg --add-architecture i386 
$ sudo apt-get update 
$ sudo apt-get install acroread:i386 acroread-fonts-jpn
```

なお、Adobe から供給されている [Adobe Reader](</Adobe Reader/>) 9.5.5 (Linux 版/英語版) の .deb パッケージと Adobe Reader 日本語フォントパック (Linux 版) を自力でインストールしたい、という場合は、以下のようにします．

```
$ sudo dpkg --add-architecture i386
$ sudo apt-get install libgtk2.0-0:i386 libatk1.0-0:i386 libcairo2:i386 libgdk-pixbuf2.0-0:i386 libglib2.0-0:i386 libpango1.0-0:i386 libpixman-1-0:i386 libxcb-shm0:i386 libjasper1:i386 libpcre3:i386 libthai0:i386 libdatrie1:i386 gtk2-engines:i386
$ wget ftp://ftp.adobe.com/pub/adobe/reader/unix/9.x/9.5.5/enu/AdbeRdr9.5.5-1_i386linux_enu.deb
$ sudo dpkg -i --force-architecture AdbeRdr9.5.5-1_i386linux_enu.deb
$ wget ftp://ftp.adobe.com/pub/adobe/reader/unix/9.x/9.1/misc/FontPack910_jpn_i486-linux.tar.bz2
$ tar xvf FontPack910_jpn_i486-linux.tar.bz2
$ sudo JPNKIT/INSTALL
$ sudo ln -fs ~/.wine/drive_c/Program\ Files/Adobe/Reader\ 11.0/Resource/CIDFont/KozGoPr6N-Medium.otf /opt/Adobe/Reader9/Resource/CIDFont/KozGoPr6N-Medium.otf
```

```
ゴシック体が表示されない場合は
$ rm -rf ~/.adobe
を実行します
```

<!-- また、Adobe から供給されている [[Adobe Reader]] 9.4.2 (Linux 版/日本語版) をインストールする場合は以下のようにします． -->
<!--  -->
<!-- $ sudo dpkg - -add-architecture i386  -->
<!-- $ sudo apt-get install libgtk2.0-0:i386 libatk1.0-0:i386 libcairo2:i386 libgdk-pixbuf2.0-0:i386 libglib2.0-0:i386 libpango1.0-0:i386 libpixman-1-0:i386 libxcb-shm0:i386 libjasper1:i386 libpcre3:i386 libthai0:i386 libdatrie1:i386 gtk2-engines:i386 -->
<!-- $ wget ftp://ftp.adobe.com/pub/adobe/reader/unix/9.x/9.4.2/jpn/AdbeRdr9.4.2-1_i386linux_jpn.deb -->
<!-- $ sudo dpkg -i - -force-architecture AdbeRdr9.4.2-1_i386linux_jpn.deb -->
<!-- $ sudo ln -fs ~/.wine/drive_c/Program\ Files/Adobe/Reader\ 11.0/Resource/CIDFont/KozGoPr6N-Medium.otf /opt/Adobe/Reader9/Resource/CIDFont/KozGoPr6N-Medium.otf -->

#### Wine を用いた Windows 版 Adobe Reader のインストール・実行 {#j0e5abe3}

wine で [Adobe Reader](</Adobe Reader/>) XI (Windows 版/日本語版) を使う場合、保護モードを無効にしないとファイルが開けないようです．<br>

```
$ sudo dpkg --add-architecture i386 
$ sudo apt-get install wine-bin:i386
$ wget ftp://ftp.adobe.com/pub/adobe/reader/win/11.x/11.0.03/ja_JP/AdbeRdr11003_ja_JP.exe
$ wine AdbeRdr11003_ja_JP.exe
$ wine ~/.wine/drive_c/Program\ Files/Adobe/Reader\ 11.0/Reader/AcroRd32.exe
```

```
Adobe Reader の保護モード
システム設定の互換性に問題があるので、 Adobe Reader を保護モードで開けません。保護モードを無効にして Adobe Reader を開きますか？
```

```
◯ 保護モードを無効にして開く(O)
◎ 常に保護モードを無効にして開く(A) ← 常に保護モードを無効にして開くを選択
◯ 保護モードを無効にした状態では開かない(D)
```

#### 不具合等 {#a79bb64a}

Linux 版の Adobe Reader では検索語のフィールドに日本語の直接入力ができませんでした (コピー&amp;ペーストによる日本語の入力・検索は可能です)。<br>
Windows 版の Adobe Reader では日本語入力、検索、共に可能なようです (ただし日本語入力で表示される文字列は□で表示されたりすることがあるかもしれません)．<br>

### 関連リンク {#la21311d}

- [debian (amd64) に Adobe Reader をインストールする方法](http://d.hatena.ne.jp/pyopyopyo/20121004/p1)
- [acroread 9.5.1-dmo6](http://hidenosuke.org/diary/?date=20120708#p02)
- [Linux版Adobe Reader 9で日本語が表示できない問題の解決法](http://d.hatena.ne.jp/pyopyopyo/20090726/p1)
- [Linux用の日本語版Adobe Readerは脆弱性が放置されてるのね](http://linux.ikoinoba.net/index.php?UID=1336916076)
- [Adobe Reader 9.5.1 日本語版もどきをインストールしてみた](http://d.hatena.ne.jp/munepi/20120414/AdobeReader_jpn)
- [WineHQ  - Adobe Reader](http://appdb.winehq.org/objectManager.php?sClass=application&iId=3156)
    - [WineHQ  - Adobe Reader 11.x](http://appdb.winehq.org/objectManager.php?sClass=version&iId=27093)

## [Texmaker](/Texmaker/) <a id="texmaker"></a> {#v9a89433}

```
$ sudo apt-get install texmaker
$ sudo apt-get install qt4-qtconfig
```

インプットメソッドに ibus を使用している場合は ibus-qt4 もインストールします．<br>

```
$ sudo apt-get install ibus-qt4
```

インプットメソッドに ibus を使用している場合は [Texmaker#かな漢字変換をする際に，文字と背景が黒く表示され，判読不能になる#修正方法 (Ubuntu)](/Texmaker/#q93a4c5b) を参照して不具合を回避します．<br>

## [LyX](/LyX/) <a id="lyx"></a> {#jbb03661}

最新の安定版/開発版をインストールしたい場合は LyX/インストール#Ubuntu を参照．<br>

```
$ sudo apt-get install lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

## [TeXworks](/TeXworks/) <a id="texworks"></a> {#r265d7ea}

最新の安定版/開発版をインストールしたい場合は [TeXworks/インストール#Ubuntu](</TeXworks/インストール/#p69845c9>) を参照．<br>

```
$ sudo apt-get install texworks
$ sudo apt-get install qt4-qtconfig
```

インプットメソッドに ibus を使用している場合は ibus-qt4 もインストールします．<br>

```
$ sudo apt-get install ibus-qt4
```

インプットメソッドに ibus を使用している場合は [かな漢字変換をする際に，文字が白く表示され，ハイライトに隠れて見えにくくなる#修正方法 (Ubuntu)](/TeXworks/#ke5fd57d) を参照して不具合を回避します．<br>

## Gummi <a id="gummi"></a> {#g69f5317}

```
$ sudo apt-get install gummi
```

## LaTeXila <a id="latexila"></a> {#q4026bb3}

```
$ sudo apt-get install latexila
```

## [Kile](/Kile/) <a id="kile"></a> {#xe3b1e96}

```
$ sudo apt-get install kile
```

## [Eclipse](/Eclipse/) <a id="eclipse"></a> {#f101e753}

```
$ sudo apt-get install eclipse
```

## [Emacs](/Emacs/) <a id="emacs"></a> {#gfaebf66}

```
$ sudo apt-get install emacs24
```

### YaTeX {#r57295dd}

- [https://launchpad.net/debian/+source/yatex/](https://launchpad.net/debian/+source/yatex/)
    - [https://launchpad.net/debian/+source/yatex/+changelog](https://launchpad.net/debian/+source/yatex/+changelog)
- [YaTeXのインストールと設定](http://emacs.tsutomuonoda.com/latex-emacs-yatex-install-setting/)

### AUCTeX {#t099fe57}

- [AUCTeX の設定](http://www.gfd-dennou.org/member/uwabami/cc-env/Emacs/auctex_config.html)
- [https://launchpad.net/debian/+source/auctex/](https://launchpad.net/debian/+source/auctex/)
    - [https://launchpad.net/debian/+source/auctex/+changelog](https://launchpad.net/debian/+source/auctex/+changelog)

## [Vim](/Vim/) <a id="vim"></a> {#k24f9849}

```
$ sudo apt-get install vim
```

## [gedit](/gedit/) <a id="gedit"></a> {#j3cc1af4}

```
$ sudo apt-get install gedit gedit-latex-plugin gedit-plugins
```

## [Geany](/Geany/) <a id="geany"></a> {#afd436be}

```
$ sudo apt-get install geany geany-plugins
```

## [Inkscape](/Inkscape/) <a id="inkscape"></a> {#h0e14315}

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
