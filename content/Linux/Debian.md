---
title: "Linux/Debian"
url: "/Linux/Debian/"
date: 2013-04-12T00:57:30Z
pukiwiki: "Linux/Debian"
---

# Linux/Debian

[Linux](/Linux/) > Debian GNU/Linux

## [Debian GNU/Linux](https://www.debian.org) {#b76dbb44}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Debian-OpenLogo.svg/200px-Debian-OpenLogo.svg.png" alt="Debian GNU/Linux" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Debian GNU/Linux とは {#b9471c57}

Debian はフリーなオペレーティングシステムを作成するためのプロジェクトです．<br>
Debian GNU/Linux は Debian Project によって作成された Linux ディストリビューションです．<br>

- [Debian -- ユニバーサルオペレーティングシステム](https://www.debian.org)

<!-- **設定 [#n0611da8] -->
<!-- -[[Debianリポジトリの設定方法:http://ftp-admin.blogspot.jp/2013/02/debian.html]] -->

## [TeX Live](</TeX Live/>) <a id="texlive"></a> {#j310e7a0}

- [Debian -- パッケージ検索結果 -- texlive-full](https://packages.debian.org/ja/texlive-full)
- [Debian -- パッケージ検索結果 -- texlive-lang-japanese](https://packages.debian.org/ja/texlive-lang-japanese)
- [Debian -- パッケージ検索結果 -- texlive](https://packages.debian.org/ja/texlive)
- [Debian -- sid の texlive パッケージに関する詳細](https://packages.debian.org/sid/texlive)
- [https://packages.debian.org/ja/sid/tex/](https://packages.debian.org/ja/sid/tex/)
- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)
- [http://anonscm.debian.org/gitweb/?p=debian-tex/texlive-bin.git;a=summary](http://anonscm.debian.org/gitweb/?p=debian-tex/texlive-bin.git;a=summary)
- [http://anonscm.debian.org/gitweb/?p=debian-tex/texlive-nonbin.git;a=summary](http://anonscm.debian.org/gitweb/?p=debian-tex/texlive-nonbin.git;a=summary)
- [http://dedup.debian.net/compare/poppler-data/texlive-lang-cjk](http://dedup.debian.net/compare/poppler-data/texlive-lang-cjk)
- [https://people.debian.org/~preining/TeX/](https://people.debian.org/~preining/TeX/)

### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#z4379676}

- [Linux](/Linux/#texliveinstall)
- [TeX Live Archives - There and back again](http://www.preining.info/blog/tag/tex-live/)
- [TeX Live を使おう──Linux ユーザと Mac OS X ユーザのために──](http://www.fugenji.org/~thomas/texlive-guide/)
- [TeX / ChangeLog::hjk](http://kreisel.fam.cx/webmaster/clog/cat_tex.html)

TeX Live の公式サイトのパッケージをインストールしたあとで TeX Live/Debian に依存するパッケージをインストールしようとすると TeX Live/Debian も同時にインストールされてしまいます．<br>
TeX Live/Debian がインストールされないように [dummy パッケージ](http://www.tug.org/texlive/debian.html#vanilla)を作成して依存関係の問題を回避します．<br>

```
$ sudo apt-get install equivs
$ wget http://www.tug.org/texlive/files/debian-equivs-2014-ex.txt
$ equivs-build debian-equivs-2014-ex.txt
$ sudo dpkg -i texlive-local_2014-1_all.deb
```

### TeX Live/Debian <a id="texlivedebian"></a> {#rde4f3be}

- [TeX Live Archives - There and back again](http://www.preining.info/blog/tag/tex-live/)
- [Debian 8 jessie での日本語 TeX 環境の構築](https://blog.ymyzk.com/2014/10/debian-8-jessie-japanese-tex/)
- [pTeX in TeXLive 2014](http://www1.pm.tokushima-u.ac.jp/~kohda/tex/texlive.html)

TeX Live/Debian をフルインストールする場合は

```
$ sudo apt-get install texlive-full xzdec
$ tlmgr init-usertree
```

Debian sid, jessie で日本語関連のパッケージと texlive パッケージをインストールする場合は

```
$ sudo apt-get install texlive-lang-japanese texlive xzdec
$ tlmgr init-usertree
```

を実行します．<br>

## [Ghostscript](/Ghostscript/) <a id="ghostscript"></a> {#y4c2003d}

```
$ sudo apt-get install ghostscript
```

## [Python](/Python/) <a id="python"></a> {#df01e340}

```
$ sudo apt-get install python python3
```

## [Ruby](/Ruby/) <a id="ruby"></a> {#b036c19c}

```
$ sudo apt-get install ruby2.1
```

## [Perl](/Perl/) <a id="perl"></a> {#t46cade6}

```
$ sudo apt-get install perl
```

## [Evince](/Evince/) <a id="evince"></a> {#w1fb0d62}

```
$ sudo apt-get install evince
```

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
$ sudo apt-get install mupdf mupdf-tools
```

## [Adobe Reader](</Adobe Reader/>) (Windows 版) + Wine <a id="adobereader"></a> {#o1495f80}

[Adobe Reader 9 のサポートは終了](http://www.adobe.com/jp/jos/acrobat/it/endsupport.html)しました．<br>
Adobe Reader 9 を使用している方は Adobe Reader XI にアップグレードしてください．<br>
Adobe Reader XI は Wine 上でも動作します．<br>

### Debian GNU/Linux sid x86_64 (amd64) での [Adobe Reader](</Adobe Reader/>) のインストール {#p857c294}

#### 64-bit OS 上での 32-bit バイナリの取り扱いに関して {#u2fe7284}

```

```

<!-- Linux 版、Windows 版の双方に関して、[[Adobe Reader]] は、ia32（32-bit 版）バイナリのみが配布されています。~ -->

64-bit の Linux 上で Adobe Reader を使用する場合は 32-bit バイナリを動作させなければなりません。<br>
Debian GNU/Linux では [Multiarch](http://wiki.debian.org/Multiarch) によってこれを実現しています。<br>

```
$ sudo dpkg --add-architecture <architecture>
```

を実行することにより、システムのセカンドアーキテクチャが登録され、インストール・実行が可能となります。<br>
このとき、セカンドアーキテクチャのパッケージ名末尾には ":&lt;architecture>" が付与されます。<br>

wine を使用して Windows 用バイナリを実行する際にも、Multiarch による 32-bit アーキテクチャのサポートが必須となります。<br>
Windows 版の [Adobe Reader](</Adobe Reader/>) は、ia32（32-bit 版）バイナリのみが配布されています。<br>
これに関しては、wine のインストール時に apt が説明のメッセージを出しますので、詳細はそちらを御参照下さい。<br>

<!-- *** Linux 版 Adobe Reader のインストール [#l44b42e5] -->
<!--  -->
<!-- [[Adobe Reader]] (Linux 版/英語版) と Adobe Reader 日本語フォントパック (Linux 版) のパッケージが [[deb-multimedia:http://deb-multimedia.org/]] (dmo) から供給されています。~ -->
<!-- apt への追加法に関しては [[deb-multimedia のページ:http://deb-multimedia.org/]] の下の方に書かれています。~ -->
<!--  -->
<!-- dmo を apt へ追加した後、インストールする際には以下のようにします。~ -->
<!--  -->
<!-- $ sudo dpkg - -add-architecture i386  -->
<!-- $ sudo apt-get update  -->
<!-- $ sudo apt-get install acroread:i386 acroread-fonts-jpn -->

#### Wine を用いた Windows 版 Adobe Reader のインストール・実行 {#j0e5abe3}

wine で [Adobe Reader](</Adobe Reader/>) XI (Windows 版/日本語版) を使う場合、保護モードを無効にしないとファイルが開けないようです．<br>

```
$ sudo dpkg --add-architecture i386
$ sudo apt-get update
$ sudo apt-get install wine
$ wget ftp://ftp.adobe.com/pub/adobe/reader/win/11.x/11.0.09/ja_JP/AdbeRdr11009_ja_JP.exe
$ wine AdbeRdr11009_ja_JP.exe
```

インストールが途中で終了してしまう場合は

```
$ wine ~/.wine/drive_c/users/Public/Application\ Data/Adobe/Setup/\{AC76BA86-7AD7-1041-7B44-AB0000000001\}/setup.exe
```

を実行して

```
$ wine ~/.wine/drive_c/Program\ Files/Adobe/Reader\ 11.0/Setup\ Files/\{AC76BA86-7AD7-1041-7B44-AB0000000001\}/setup.exe
```

を実行します．<br>

```
$ wine ~/.wine/drive_c/Program\ Files*/Adobe/Reader*/Reader/AcroRd32.exe
```

```
Adobe Reader の保護モード
システム設定の互換性に問題があるので、 Adobe Reader を保護モードで開けません。保護モードを無効にして Adobe Reader を開きますか？
```

```
 ◯ 保護モードを無効にして開く(O)
(●)常に保護モードを無効にして開く(A) ← 常に保護モードを無効にして開くを選択
 ◯ 保護モードを無効にした状態では開かない(D)
```

#### 不具合等 {#a79bb64a}

<!-- Linux 版の Adobe Reader では検索語のフィールドに日本語の直接入力ができませんでした (コピー&ペーストによる日本語の入力・検索は可能です)。~ -->

Windows 版の Adobe Reader では日本語入力、検索、共に可能なようです (ただし日本語入力で表示される文字列は□で表示されたりすることがあるかもしれません)．<br>

## [LyX](/LyX/) <a id="lyx"></a> {#jbb03661}

```
$ sudo apt-get install lyx
```

## [TeXstudio](/TeXstudio/) <a id="texstudio"></a> {#n198519c}

```
$ sudo apt-get install texstudio
```

## [Texmaker](/Texmaker/) <a id="texmaker"></a> {#oe09ab85}

```
$ sudo apt-get install texmaker
```

## [TeXworks](/TeXworks/) <a id="texworks"></a> {#r265d7ea}

```
$ sudo apt-get install texworks
```

## [Eclipse](/Eclipse/) <a id="eclipse"></a> {#f101e753}

```
$ sudo apt-get install eclipse
```

## [Emacs](/Emacs/) <a id="emacs"></a> {#gfaebf66}

```
$ sudo apt-get install emacs24
```

### AUCTeX {#t099fe57}

- [https://launchpad.net/debian/+source/auctex/](https://launchpad.net/debian/+source/auctex/)
    - [https://launchpad.net/debian/+source/auctex/+changelog](https://launchpad.net/debian/+source/auctex/+changelog)
- [AUCTeX の設定](http://www.gfd-dennou.org/member/uwabami/cc-env/emacs/auctex_config.html)

### YaTeX {#r57295dd}

- [https://launchpad.net/debian/+source/yatex/](https://launchpad.net/debian/+source/yatex/)
    - [https://launchpad.net/debian/+source/yatex/+changelog](https://launchpad.net/debian/+source/yatex/+changelog)
- [YaTeXのインストールと設定](http://emacs.tsutomuonoda.com/latex-emacs-yatex-install-setting/)

## [Vim](/Vim/) <a id="vim"></a> {#k24f9849}

```
$ sudo apt-get install vim vim-gtk
```

## [Inkscape](/Inkscape/) <a id="inkscape"></a> {#h0e14315}

```
$ sudo apt-get install inkscape pstoedit python-lxml
```
