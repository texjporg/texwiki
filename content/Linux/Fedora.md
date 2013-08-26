---
title: "Linux/Fedora"
url: "/Linux/Fedora/"
date: 2013-05-26T17:14:07Z
pukiwiki: "Linux/Fedora"
---

# Linux/Fedora

[Linux](/Linux/) > Fedora

## [Fedora](http://fedoraproject.org/) {#l0a22986}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Fedora_logo_and_wordmark.svg/500px-Fedora_logo_and_wordmark.svg.png" alt="Fedora" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Fedora とは {#q5c4d3a4}

Fedora は日常的な使用に適した，軽快・安定・高機能な Linux ベースのオペレーティングシステムです．<br>

- [Fedora Project](http://fedoraproject.org/)

## ダウンロード {#j75c78dc}

### ミラーサイト {#oc47dabf}

- [Public mirror list](http://mirrors.fedoraproject.org/publiclist/)

## [TeX Live](</TeX Live/>) {#u412c2cf}

- [Fedora Project Wiki](http://fedoraproject.org/wiki/Fedora_Project_Wiki)
    - [Features/TeXLive](http://fedoraproject.org/wiki/Features/TeXLive)
- [https://apps.fedoraproject.org/packages/texlive](https://apps.fedoraproject.org/packages/texlive)
- [https://apps.fedoraproject.org/packages/texlive-scheme-full](https://apps.fedoraproject.org/packages/texlive-scheme-full)
- [https://apps.fedoraproject.org/packages/texlive-collection-langcjk](https://apps.fedoraproject.org/packages/texlive-collection-langcjk)
- [http://kojipkgs.fedoraproject.org/packages/texlive/](http://kojipkgs.fedoraproject.org/packages/texlive/)
    <!-- -http://jnovy.fedorapeople.org/texlive/ -->
    <!-- -[[The TeXLive Archives:http://www.linux.cz/pipermail/texlive/]] -->
    <!-- -[[[TeX] - Luoyang Press:http://d.hatena.ne.jp/ratbeta/searchdiary?word=%2A%5BTeX%5D]] -->

### TeX Live 2013 <a id="texlive2013"></a> {#dfc42b2c}

- [Linux](/Linux/#texlive2013)

### TeX Live 2013/Fedora <a id="texlive2013fedora"></a> {#n44a0820}

#### Fedora 20, 19 {#u01e1fc4}

yum で texlive-scheme-full と perl-Digest-MD5 を指定すれば TeX Live 2013/Fedora をインストールできます．<br>

```
$ sudo yum install texlive-scheme-full perl-Digest-MD5
```

perl-Digest-MD5 をインストールしないと kanji-config-updmap でエラーが発生します．<br>

```
$ kanji-config-updmap ipaex
Setting up ... ptex-ipaex.map
Can't locate Digest/MD5.pm in @INC (@INC contains: /usr/share/texlive/tlpkg /usr/local/lib64/perl5 /usr/local/share/perl5 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5 .) at /usr/share/texlive/tlpkg/TeXLive/TLUtils.pm line 201.
BEGIN failed--compilation aborted at /usr/share/texlive/tlpkg/TeXLive/TLUtils.pm line 201.
Compilation failed in require at /usr/bin/updmap line 42.
BEGIN failed--compilation aborted at /usr/bin/updmap line 42.
Can't locate Digest/MD5.pm in @INC (@INC contains: /usr/share/texlive/tlpkg /usr/local/lib64/perl5 /usr/local/share/perl5 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5 .) at /usr/share/texlive/tlpkg/TeXLive/TLUtils.pm line 201.
BEGIN failed--compilation aborted at /usr/share/texlive/tlpkg/TeXLive/TLUtils.pm line 201.
Compilation failed in require at /usr/bin/updmap line 42.
BEGIN failed--compilation aborted at /usr/bin/updmap line 42.
Can't locate Digest/MD5.pm in @INC (@INC contains: /usr/share/texlive/tlpkg /usr/local/lib64/perl5 /usr/local/share/perl5 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5 .) at /usr/share/texlive/tlpkg/TeXLive/TLUtils.pm line 201.
BEGIN failed--compilation aborted at /usr/share/texlive/tlpkg/TeXLive/TLUtils.pm line 201.
Compilation failed in require at /usr/bin/updmap line 42.
BEGIN failed--compilation aborted at /usr/bin/updmap line 42.
```

/usr/share/texlive/texmf-dist/web2c/texmf.cnf の shell_escape_commands が以下のように記述されていると思います．<br>

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
/usr/share/texlive/texmf-local//
```

/usr/share/texlive/texmf-local/web2c/texmf.cnf を作成します．<br>

```
$ sudo mkdir -p /usr/share/texlive/texmf-local/web2c
$ sudo touch /usr/share/texlive/texmf-local/web2c/texmf.cnf
```

/usr/share/texlive/texmf-local/web2c/texmf.cnf を編集します．<br>
shell_escape_commands を以下のように編集して保存します．<br>

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,pbibtex,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,\
mpost,pmpost,upmpost,\
repstopdf,epspdf,extractbb,\
```

文字コードの自動判別機能を有効にする場合は [日本語 encoding の推測](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1043) を参照して設定します．<br>

nkf をインストールします．<br>

```
$ sudo yum install nkf
```

/usr/share/texlive/texmf-local/web2c/texmf.cnf に PTEX_IN_FILTER = /usr/bin/nkf -w を追加します．<br>

```
$ printf '\n%% guess input enc\nPTEX_IN_FILTER = /usr/bin/nkf -w\n' | sudo tee -a /usr/share/texlive/texmf-local/web2c/texmf.cnf
$ tail /usr/share/texlive/texmf-local/web2c/texmf.cnf
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

pxdvi は 64-bit 版の Fedora 19 の場合は [http://ftp.jaist.ac.jp/pub/Linux/Vine/VineSeed/x86_64/RPMS.main/](http://ftp.jaist.ac.jp/pub/Linux/Vine/VineSeed/x86_64/RPMS.main/) から pxdvi-motif が収録されているパッケージ (texlive-2012-4vl7.x86_64.rpm) をダウンロード・展開して pxdvi-motif, pxdvi.cfg などを適切な場所に配置して openmotif をインストールして &#x58;DVIINPUTS に適切な値を設定すれば使用可能になります．<br>

```
$ mkdir vine
$ cd vine
$ curl -O http://ftp.jaist.ac.jp/pub/Linux/Vine/VineSeed/x86_64/RPMS.main/texlive-2012-4vl7.x86_64.rpm
$ rpm2cpio texlive-2012-4vl7.x86_64.rpm | cpio -id
$ sudo cp -p usr/bin/pxdvi-motif /usr/bin
$ sudo ln -s /usr/bin/pxdvi-motif /usr/bin/pxdvi
$ sudo cp -pR usr/share/texmf/xdvi/ /usr/share/texlive/texmf-dist/pxdvi
$ sudo yum install openmotif
```

/usr/share/texlive/texmf-local/web2c/texmf.cnf に &#x58;DVIINPUTS を追加します．<br>

```
% pxdvi
XDVIINPUTS = /usr/share/texlive/texmf-dist/pxdvi
```

platex で処理された DVI ファイルが表示できます．<br>

```
$ pxdvi -watchfile 1 hoge.dvi &
```

<!-- $ mkdir pxdvi -->
<!-- $ cd pxdvi -->
<!-- $ curl -O http://www.tug.org/~preining/tlptexlive/archive/pxdvi.tar.xz -->
<!-- $ curl -O http://www.tug.org/~preining/tlptexlive/archive/pxdvi.x86_64-linux.tar.xz -->
<!-- $ tar xvf pxdvi.tar.xz -->
<!-- $ tar xvf pxdvi.x86_64-linux.tar.xz -->
<!-- $ sudo cp -p bin/x86_64-linux/pxdvi-xaw /usr/bin -->
<!-- $ sudo ln -s /usr/bin/pxdvi-xaw /usr/bin/pxdvi -->
<!-- $ sudo cp -pR texmf/xdvi /usr/share/texlive/texmf-dist/pxdvi -->
<!-- $ sudo cp -pR texmf/fonts/map/pxdvi /usr/share/texlive/texmf-dist/fonts/map/pxdvi -->
<!-- $ sudo mkdir -p /usr/share/texmf-local/web2c -->
<!-- $ sudo cp /usr/share/texlive/texmf-dist/web2c/texmf.cnf /usr/share/texmf-local/web2c -->
<!--  -->
<!-- /usr/share/texlive/texmf-local/web2c/texmf.cnf に &#x58;DVIINPUTS を追加します．~ -->
<!--  -->
<!-- % pxdvi -->
<!-- XDVIINPUTS = /usr/share/texlive/texmf-dist/pxdvi -->
<!--  -->
<!-- platex で処理された DVI ファイルが表示できます．~ -->
<!--  -->
<!-- $ pxdvi -watchfile 1 hoge.dvi & -->

## [Python](/Python/) {#z2c220a1}

```
$ sudo yum install python python3
```

## [Ruby](/Ruby/) {#j99de34a}

```
$ sudo yum install ruby
```

## [Perl](/Perl/) {#m7e04372}

```
$ sudo yum install perl perl-Digest-MD5
```

## [Evince](/Evince/) {#na36e8b6}

```
$ sudo yum install evince
```

Fedora の Evince, Okular, zathura, qpdfview, Texmaker, TeXworks などの poppler + fontconfig を使用するアプリケーションはインストール直後のデフォルトの状態ではフォントが埋め込まれていない場合に Ryumin-Light (明朝体) がゴシック体で表示されてしまいます．<br>
[代替フォントの設定](/Evince/#substitute) を参照して代替フォントの設定をします．<br>

## [Okular](/Okular/) {#k7d05705}

```
$ sudo yum install okular
```

## [zathura](/zathura/) {#i470648d}

```
$ sudo yum install zathura zathura-pdf-poppler
```

## [qpdfview](/qpdfview/) {#yf420316}

```
$ sudo yum install qpdfview
```

## [MuPDF](/MuPDF/) {#id862097}

```
$ sudo yum install mupdf
```

## [Adobe Reader](</Adobe Reader/>) {#m85c82f5}

[Adobe Reader 9 は 2013年6月26日 でサポートが終了](http://www.adobe.com/jp/jos/acrobat/it/endsupport.html)しました．<br>
Adobe Reader 9 を使用している方は Adobe Reader XI にアップグレードしてください．<br>
Adobe Reader XI は Wine 上でも動作します．<br>

- [http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/](http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/)

```
$ sudo rpm -ivh http://linuxdownload.adobe.com/adobe-release/adobe-release-i386-1.0-1.noarch.rpm
$ sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-adobe-linux
$ sudo yum install nspluginwrapper.i686 AdobeReader_enu
```

## [Texmaker](/Texmaker/) {#lcaf9397}

```
$ sudo yum install texmaker
```

Texmaker はかな漢字変換に関して不具合があるので<br>
不具合を回避するための設定をします．<br>
\section{ を入力した直後に日本語入力をしようとすると日本語入力が ON にならない場合は [Kile](/Kile/) を使用してください．<br>

1. [ibus-qt](https://apps.fedoraproject.org/packages/ibus-qt) を導入する

    ```
    $ sudo yum install ibus-qt
    ```

1. [qt-config](https://apps.fedoraproject.org/packages/qt-config) を導入する

    ```
    $ sudo yum install qt-config
    ```

1. Qt 設定ツールの \[インターフェース\]-\[デフォルトのインプットメソッド\] から ibus を選択する

    ```
    $ qtconfig-qt4
    ```

1. Texmaker を起動する

    ```
    $ texmaker &
    ```

とすると Texmaker の日本語入力で黒く表示される問題が解決しました．

Qt 設定ツールを使用せずに Texmaker の編集画面で右クリックして \[インプットメソッドを選択\]-\[ibus\] を選択しても OK です．<br>
編集画面で右クリックして \[インプットメソッドを選択\] が出てこない場合は \[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\] のテキスト入力ボックスでマウスを右クリックすると出てきました．<br>
\[インプットメソッドを選択\] で XIM を選択すると日本語入力で黒く表示されてしまいました．<br>

## [TeXstudio](/TeXstudio/) {#aaf316c5}

```
$ sudo yum install texstudio
```

## [LyX](/LyX/) {#n0d7807d}

```
$ sudo yum install lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

## [TeXworks](/TeXworks/) {#q8a87364}

```
$ sudo yum install texworks
```

1. [ibus-qt](https://apps.fedoraproject.org/packages/ibus-qt) を導入する

    ```
    $ sudo yum install ibus-qt
    ```

1. [qt-config](https://apps.fedoraproject.org/packages/qt-config) を導入する

    ```
    $ sudo yum install qt-config
    ```

1. Qt 設定ツールの \[インターフェース\]-\[デフォルトのインプットメソッド\] から ibus を選択する

    ```
    $ qtconfig-qt4
    ```

1. TeXworks を起動する

    ```
    $ texworks &
    ```

1. 現在カーソルのある行をハイライトするをチェックする

とすることで，かな漢字変換をしてもハイライトに隠れずに表示されました．<br>
Qt 設定ツールを使用せずに TeXworks の編集画面で右クリックして，\[インプットメソッドを選択\]-\[ibus\] を選択しても OK です．<br>
\[インプットメソッドを選択\]-\[XIM\] ではかな漢字変換をする際に，文字が白く表示され，ハイライトに隠れて見えにくくなるようです．<br>

## LaTeXila {#ka561406}

```
$ sudo yum install latexila
$ sudo yum install perl-Digest-MD5
```

## [Kile](/Kile/) {#o606f639}

```
$ sudo yum install kile
```

## [Eclipse](/Eclipse/) {#p298a48c}

```
$ sudo yum install eclipse
```

## [Emacs](/Emacs/) {#m28f0609}

```
$ sudo yum install emacs
```

## [Vim](/Vim/) {#c4ba801a}

```
$ sudo yum install vim
```

## [gedit](/gedit/) {#s50327ec}

```
$ sudo yum install gedit gedit-latex gedit-plugins
```

## [Geany](/Geany/) {#ha256fb0}

```
$ sudo yum install geany geany-plugins-geanylatex
```

## [Inkscape](/Inkscape/) {#ue2d802a}

```
$ sudo yum install inkscape texlive-latex texlive-dvips texlive-dvisvgm pstoedit python-lxml
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

## ibus-kkc {#a96c1055}

Fedora 19 から日本語入力に ibus-kkc が利用できるようになりました． → [http://fedoraproject.org/wiki/Releases/19/FeatureList](http://fedoraproject.org/wiki/Releases/19/FeatureList)<br>

- [libkkc / libkkc / wiki / Home &mdash; Bitbucket](https://bitbucket.org/libkkc/libkkc/)
- [du -a ~ueno | Just another WordPress site](http://blog.du-a.org/)
- [Features/libkkc - FedoraProject](https://fedoraproject.org/wiki/Features/libkkc)
