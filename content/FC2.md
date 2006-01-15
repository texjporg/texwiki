---
title: "FC2"
url: "/FC2/"
date: 2004-09-17T04:31:29Z
pukiwiki: "FC2"
---

# FC2

## Fedora Core 2 へのインストール {#v03f1475}

Fedora Core 2 を「パーソナルデスクトップ」でインストールして、TeXで日本語が使えるようにするための設定です。

### 目次 {#cba370e7}

### Yumの設定 {#p1a58a1f}

インストール直後の状態ではYumが非常に遅いので、設定を変更します。

GNOME端末を起動して

```
su
```

コマンドでスーパーユーザになり、

```
mv /etc/yum.conf /etc/yum.conf.org
```

を実行して設定ファイルのバックアップをとります。
次に

```
gedit /etc/yum.conf
```

を実行して、エディタで設定ファイルを開き、以下の内容をコピーして貼り付けます。

```
[main]
cachedir=/var/cache/yum
debuglevel=2
logfile=/var/log/yum.log
pkgpolicy=newest
distroverpkg=redhat-release
tolerant=1
exactarch=1
retries=20

[base]
name=Fedora Core $releasever - $basearch - Base
baseurl=http://ring.data-hotel.net/archives/linux/fedora/linux/core/$releasever/$basearch/os
        ftp://ftp.riken.go.jp/pub/Linux/fedora/core/$releasever/$basearch/os
        ftp://ftp.kddlabs.co.jp/Linux/packages/fedora/core/$releasever/$basearch/os
        http://download.fedora.redhat.com/pub/fedora/linux/core/$releasever/$basearch/os/

[updates-released]
name=Fedora Core $releasever - $basearch - Released Updates
baseurl=http://ring.data-hotel.net/archives/linux/fedora/linux/core/updates/$releasever/$basearch
        ftp://ftp.riken.go.jp/pub/Linux/fedora/core/updates/$releasever/$basearch
        ftp://ftp.kddlabs.co.jp/Linux/packages/fedora/core/updates/$releasever/$basearch
        http://download.fedora.redhat.com/pub/fedora/linux/core/updates/$releasever/$basearch/
```

（Yumの設定は [http://www.es.dis.titech.ac.jp/~satsuma/wh/Fedora+Core+2%A1%A7%252Fetc%252Fyum.conf.html](http://www.es.dis.titech.ac.jp/~satsuma/wh/Fedora+Core+2%A1%A7%252Fetc%252Fyum.conf.html) を参考にしました。）

### インストール {#ya3f6176}

Fedora Core 2 を「パーソナルデスクトップ」タイプでインストールすると、TeX関連のパッケージはインストールされません。
また、デスクトップ環境はGNOMEしかインストールされません。

GNOME端末を起動して

```
su
```

コマンドでスーパーユーザになり、

```
yum install 'tetex*' 'VFlib*'
```

を実行すると、

```
Gathering header information file(s) from server(s)
Server: Fedora Core 2 - i386 - Base
Server: Fedora Core 2 - i386 - Released Updates
Finding updated packages
Downloading needed headers
iiimf-protocol-lib-1-11.4 100% |=========================| 5.3 kB    00:00
xorg-x11-xauth-0-6.7.0-5. 100% |=========================|  68 kB    00:01
（中略）
gtk2-devel-0-2.4.7-2.4.i3 100% |=========================|  37 kB    00:00
gdk-pixbuf-gnome-1-0.22.0 100% |=========================| 3.2 kB    00:00
Resolving dependencies
.Dependencies resolved
I will do the following:
[install: tetex-latex 2.0.2-13.i386]
[install: tetex-afm 2.0.2-13.i386]
[install: tetex-dvips 2.0.2-13.i386]
[install: tetex 2.0.2-13.i386]
[install: VFlib2-VFjfm 2.25.6-21.i386]
[install: VFlib2-conf-ja 2.25.6-21.i386]
[install: tetex-doc 2.0.2-13.i386]
[install: tetex-fonts 2.0.2-13.i386]
[install: VFlib2-devel 2.25.6-21.i386]
[install: tetex-xdvi 2.0.2-13.i386]
I will install/upgrade these to satisfy the dependencies:
[deps: dialog 0.9b-20031207.2.i386]
[deps: w3c-libwww 5.4.0-9.1.i386]
Is this ok [y/N]:
```

などと表示されるので、「y」を入力します。

すると、以下のように、インストールが始まり、成功すれば、「Transaction(s) Complete」と表示されます。

```
Downloading Packages
Getting dialog-0.9b-20031207.2.i386.rpm
dialog-0.9b-20031207.2.i3 100% |=========================| 135 kB    00:01
Getting w3c-libwww-5.4.0-9.1.i386.rpm
w3c-libwww-5.4.0-9.1.i386 100% |=========================| 390 kB    00:05
（中略）
VFlib2-devel-2.25.6-21.i3 100% |=========================| 140 kB    00:01
Getting tetex-xdvi-2.0.2-13.i386.rpm
tetex-xdvi-2.0.2-13.i386. 100% |=========================| 1.0 MB    00:14
Running test transaction:
Test transaction complete, Success!
tetex-fonts 100 % done 1/12
w3c-libwww 100 % done 2/12
dialog 100 % done 3/12
（中略）
VFlib2-devel 100 % done 11/12
tetex-xdvi 100 % done 12/12
Installed:  tetex-latex 2.0.2-13.i386 tetex-afm 2.0.2-13.i386 ...
Dep Installed:  dialog 0.9b-20031207.2.i386 w3c-libwww 5.4.0-9.1.i386
Transaction(s) Complete
```

### ここまでのテスト {#f064671b}

#### ソースファイルの作成（gedit編） {#e39b751d}

今までUnixやLinuxを使ったことのない人は、こちらがお勧めです。

GNOME端末で

```
gedit &
```

を実行してエディタを起動し、次の例をコピーして貼り付けてください。
（Fedora Core 2 では、日本語入力は Ctrl + スペースキーです。）

```
\documentclass{jarticle}
\begin{document}

ただいまテスト中。

\TeX

\end{document}
```

ここで「ファイル」→「別名で保存」を実行し、日本語EUCで保存するために、以下の作業を行います。

1. 「名前」の横に「test.tex」と入力する。
1. 「文字コード」の横のドロップダウンリストから「Add or Remove...」を選ぶ。
1. 左のリストから「日本語 EUC-JP」を選び、「追加」「OK」ボタンを押す。
1. 「文字コード」の横のドロップダウンリストから「日本語 (EUC-JP)」を選ぶ。
1. 「保存」ボタンを押す。

これで、日本語EUCで test.tex というファイルがホームディレクトリに保存されます。

#### ソースファイルの作成（Emacs編） {#d3f67474}

これからガリガリTeXで文章を書くぞ、という人は、こちらがお勧めです。

GNOME端末で

```
LANG=ja_JP.eucJP emacs test.tex &
```

を実行してエディタを日本語EUCモードで起動し、次の例をコピーして貼り付けてください。
（Emacs内で日本語を入力するには、Ctrl + \ キーを使います。）

```
\documentclass{jarticle}
\begin{document}

ただいまテスト中。

\TeX

\end{document}
```

Emacsでは、貼り付けは Ctrl + Y キーに割り当てられているので、注意してください。

ここでCtrlキーを押したままX、Sキーを順番に押すと、ファイルが保存されます。

#### タイプセット、プレビュー、印刷 {#l2832348}

GNOME端末で

```
platex test
```

を実行し、

```
This is pTeX, Version 3.14159-p3.1.3 (euc) (Web2C 7.4.5)
(./test.tex
pLaTeX2e <2001/09/04>+0 (based on LaTeX2e <2001/06/01> patch level 0)
(/usr/share/texmf/ptex/platex/base/jarticle.cls
Document Class: jarticle 2001/10/04 v1.3 Standard pLaTeX class
(/usr/share/texmf/ptex/platex/base/jsize10.clo))
No file test.aux.
[1] (./test.aux) )
Output written on test.dvi (1 page, 312 bytes).
Transcript written on test.log.
```

の様に表示されれば、うまく行っています。

ここで

```
pxdvi test
```

を実行すると、作成されたdviファイルを見ることができます。
また、

```
pdvips -o test.ps test
```

を実行すると、test.ps という印刷可能なファイルが出来上がります。
このファイルは

```
ggv test.ps
```

で見ることができます。
プリンタの設定が終わっていれば、「ファイル」→「文書の印刷」を実行するだけで印刷することができます。

### 新ドキュメントクラスのインストール（オプション） {#t1f89e20}

松浦さんのホームページ（[http://homepage2.nifty.com/t-matsuu/install-memo/fc/](http://homepage2.nifty.com/t-matsuu/install-memo/fc/)）から tetex-jisfont-1-4.src.rpm と tetex-jsclasses-040927-1.src.rpm をダウンロードさせてもらいます。

GNOME端末で

```
su
```

コマンドでスーパーユーザになり、

```
yum install 'rpm*'
rpmbuild --rebuild tetex-jisfont-1-4.src.rpm
rpm -ivh /usr/src/redhat/RPMS/noarch/tetex-jisfont-1-4.noarch.rpm
rpmbuild --rebuild tetex-jsclasses-040927-1.src.rpm
rpm -ivh /usr/src/redhat/RPMS/noarch/tetex-jsclasses-040927-1.noarch.rpm
```

を実行すると新ドキュメントクラスのインストールが終了します。
（途中で「Is this ok \[y/N\]:」と聞かれるので、y と答えます。）

### dvipdfmxのインストール（オプション） {#rc384294}

#### Acrobat Reader のインストール {#s6268f75}

GNOME端末で

```
cd /tmp
wget ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/5.x/linux-509.tar.gz
mkdir acroread
cd acroread
tar zxvf ../linux-509.tar.gz
su -c './INSTALL'
```

を実行すると、Acrobat Reader がインストールされます。
途中で「To accept the terms and conditions of this agreement enter "accept".」などと聞かれるので、「accept」と答えます。
他の質問にはそのままEnterキーで進みます。

```
cd /tmp
mkdir jpnfont5
cd jpnfont5
wget ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/5.x/jpnfont.tar.gz
tar zxvf jpnfont.tar.gz
cd JPNKIT
su -c './INSTLANG'
cd /tmp
mkdir jpnfont4
cd jpnfont4
wget ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/4.x/jpnfont.tar.gz
tar zxvf jpnfont.tar.gz
cd JPNKIT
tar xvf LANGJPN.TAR
cd CIDFont
su -c 'cp -v HeiseiKakuGo-W5-Acro /usr/local/Acrobat5/Resource/Font/; ln -s -v /usr/local/Acrobat5/bin/acroread /usr/bin/acroread'
```

で、先程インストールした Acrobat Reader で日本語が表示できるようになります。

Acrobat Reader に実行パスを通すため、GNOME端末で

```
gedit .bashrc
```

を実行して .bashrc を開き、最後に

```
export PATH="$PATH:/usr/local/Acrobat5/bin"
```

を付け加えます。

（Acrobat Reader のインストールは [http://www.geocities.co.jp/SiliconValley-Cupertino/9940/acrobat/](http://www.geocities.co.jp/SiliconValley-Cupertino/9940/acrobat/) を参考にしました。）

#### gccのインストール {#n98250e4}

スーパーユーザで

```
yum install 'gcc*'
```

を実行して、gccをインストールします。

#### dvipdfmxのインストール {#x1e5ecb5}

GNOME端末で

```
cd /tmp
wget http://project.ktug.or.kr/dvipdfmx/snapshot/current/dvipdfmx-20050627.tar.gz
tar zxvf dvipdfmx-20050627.tar.gz
cd dvipdfmx-20050627
./configure --prefix=/usr && make && su -c 'make install'
```

を実行すると、dvipdfmxがインストールされます。

```
cd /usr/share/texmf/dvipdfm
su -c ' ln -s -v /usr/local/Acrobat5/Resource/Font . && mktexlsr'
```

を実行すると、日本語を含むPDFファイルが作れるようになります。

（dvipdfmxのインストールは [http://t-munu.phys.s.u-tokyo.ac.jp/aso/linux/Fedora.html#DVI%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89PDF%E3%82%92%E4%BD%9C%E3%82%8B%E3%80%82](http://t-munu.phys.s.u-tokyo.ac.jp/aso/linux/Fedora.html#DVI%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89PDF%E3%82%92%E4%BD%9C%E3%82%8B%E3%80%82) を参考にしました。）

#### インストールの確認 {#d7aa5162}

GNOME端末で

```
platex test
dvipdfmx test
```

を実行すると、test.pdf というファイルが出来上がります。
ここで

```
acroread test.pdf
```

を実行すると、確認することができます。

### Emacsの日本語入力を使いやすくするための設定（オプション） {#x94b5e29}

GNOME端末で

```
cd /tmp
wget ftp://ftp.m17n.org/pub/tamago/tamago-4.0.6.tar.gz
wget http://cgi18.plala.or.jp/nyy/canna/canna-20011204.diff.gz
tar zxvf tamago-4.0.6.tar.gz
cd tamago-4.0.6
zcat ../canna-20011204.diff.gz | patch -p1
./configure --prefix=/usr
make
su -c 'make install'
```

を実行すれば、tamagoのインストールと、tamagoでcannaを使うた
めのパッチが当たります。
途中でいろいろ聞かれましたが、全て黙ってEnterキーを押しました。

次に、.emacs をエディタで開き、

```
;; settings for egg-canna
(setq default-input-method "japanese-egg-canna")
(setq canna-hostname "localhost")
```

の3行を付け加えます。

これだけでは、変換しようとしたときに「egg Japanese backend: サーバと接続できませんでした」と表示されて変換できないので、GNOME端末で

```
su -
```

コマンドでスーパーユーザになり、エディタで /etc/hosts.canna を開き、先頭に

```
localhost
```

という行を付け加え、/etc/rc.d/init.d/canna をエディタで開き、

```
        initlog -c "$SERVER -syslog -u bin"
```

の行を

```
        initlog -c "$SERVER -syslog -u bin -inet"
```

に置き換え、GNOME端末で

```
service canna restart
```

を実行します。

これで、Emacsを使っているときに Ctrl + \ キーで日本語入力を切り替えられるようになったはずです。

（tamago、cannaの設定は [http://www.ne.jp/asahi/diver/hrk/openbsd/s-emacs.html](http://www.ne.jp/asahi/diver/hrk/openbsd/s-emacs.html)、
サーバと接続できないエラーへの対処は [http://hp.vector.co.jp/authors/VA023018/setting.htm](http://hp.vector.co.jp/authors/VA023018/setting.htm) を参考にしました。）

### AUCTeXのインストール（オプション） {#d924e221}

GNOME端末で

```
wget http://ftp.gnu.org/pub/gnu/auctex/auctex-emacs-11.53-1.fedora.noarch.rpm
```

を実行します。

スーパーユーザになって

```
rpm -ivh auctex-emacs-11.53-1.fedora.noarch.rpm
```

を実行します。

.emacs の最後に

```
;; use AUCTeX
(require 'tex-site)
(setq TeX-default-mode 'japanese-latex-mode)
(setq japanese-TeX-command-default "pTeX")
(setq japanese-LaTeX-command-default "pLaTeX")
(setq japanese-LaTeX-default-style "jsarticle")
(setq TeX-file-extensions '("tex" "sty" "cls" "ltx" "texi" "texinfo" "dtx"))
(setq kinsoku-limit 10)
(setq LaTeX-indent-level 4)
(setq TeX-output-view-style
     '(
       ("^dvi$" "." "pxdvi %d")
       ))
```

を追加します。

これでAUCTeXが使えるようになります。

現在のAUCTeXでは、TeX-view-styleではなくTeX-output-view-styleを使うことで、DVIやPDFなどのViewerを個別に登録できるようにしています。
