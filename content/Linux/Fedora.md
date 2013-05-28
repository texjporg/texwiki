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

## [TeX Live](</TeX Live/>) {#u412c2cf}

- [Fedora Project Wiki](http://fedoraproject.org/wiki/Fedora_Project_Wiki)
    - [Features/TeXLive](http://fedoraproject.org/wiki/Features/TeXLive)
- [https://apps.fedoraproject.org/packages/texlive](https://apps.fedoraproject.org/packages/texlive)
- [https://apps.fedoraproject.org/packages/texlive-collection-langcjk](https://apps.fedoraproject.org/packages/texlive-collection-langcjk)
- [http://jnovy.fedorapeople.org/texlive/](http://jnovy.fedorapeople.org/texlive/)
- [http://kojipkgs.fedoraproject.org/packages/texlive/](http://kojipkgs.fedoraproject.org/packages/texlive/)
- [The TeXLive Archives](http://www.linux.cz/pipermail/texlive/)
- \[[TeX\] - Luoyang Press](http://d.hatena.ne.jp/ratbeta/searchdiary?word=%2A%5BTeX%5D)

### TeX Live 2013 {#n44a0820}

#### Fedora 20 (Rawhide), 19, 18 {#u01e1fc4}

Fedora 20 (Rawhide), 19, 18 では TeX Live 2013 が使用できます．<br>
texlive-scheme-full を指定すれば TeX Live 2013 をフルインストールできます．<br>

```
$ sudo yum install texlive-scheme-full
```

個別にインストールしたい場合は texlive-collection-langcjk パッケージをインストールすれば (e-)(u)pTeX を使用した日本語の LaTeX 環境が構築できます．<br>

```
$ sudo yum install texlive-collection-langcjk
```

pdfLaTeX, [LuaLaTeX](/LuaTeX/), [XeLaTeX](/XeTeX/) を使用する場合は texlive-collection-latex, texlive-collection-luatex, texlive-collection-xetex パッケージもインストールします．<br>

```
$ sudo yum install texlive-collection-latex texlive-collection-luatex texlive-collection-xetex
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

pLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
$ ptex2pdf -l -ot '-synctex=1' -od '-f ptex-ipaex.map' hoge.tex
```

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
$ sudo yum install perl
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

- [Install Adobe Reader on Fedora 18/17, CentOS/RHEL 6.4/5.9](http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/)

```
$ sudo rpm -ivh http://linuxdownload.adobe.com/adobe-release/adobe-release-i386-1.0-1.noarch.rpm
$ sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-adobe-linux
$ sudo yum install nspluginwrapper.i686 AdobeReader_enu
```

## [Texmaker](/Texmaker/) {#lcaf9397}

```
$ sudo yum install texmaker
$ sudo yum install qt-config
$ sudo yum install ibus-qt
```

[Texmaker#かな漢字変換をする際に，文字と背景が黒く表示され，判読不能になる#修正方法 (Fedora)](/Texmaker/#n5ec4d4e) を参照して不具合を回避します．<br>

## [LyX](/LyX/) {#n0d7807d}

```
$ sudo yum install lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

## [TeXworks](/TeXworks/) {#q8a87364}

```
$ sudo yum install texworks
```

[かな漢字変換をする際に，文字が白く表示され，ハイライトに隠れて見えにくくなる#修正方法 (Fedora)](/TeXworks/#qfaf14ec) を参照して不具合を回避します．<br>

## Gummi {#ce6ea66b}

```
$ sudo yum install gummi
```

## LaTeXila {#ka561406}

```
$ sudo yum install latexila
$ sudo yum install perl-Digest-MD5
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

## 日本語入力システム {#f0cbf30c}

### libkkc {#a96c1055}

Fedora 19 から日本語入力が ibus-kkc に変更されました． → [http://fedoraproject.org/wiki/Releases/19/FeatureList](http://fedoraproject.org/wiki/Releases/19/FeatureList)<br>

- [libkkc / libkkc / wiki / Home &mdash; Bitbucket](https://bitbucket.org/libkkc/libkkc/)
- [du -a ~ueno | Just another WordPress site](http://blog.du-a.org/)
- [Features/libkkc - FedoraProject](https://fedoraproject.org/wiki/Features/libkkc)
