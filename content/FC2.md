---
title: "FC2"
url: "/FC2/"
date: 2004-09-17T04:31:29Z
pukiwiki: "FC2"
---

# FC2

<span style="color:red;background-color:white;">このページは書きかけです。</span>

## Fedora Core 2 へのインストール {#v03f1475}

Fedora Core 2 を「パーソナルデスクトップ」でインストールして、TeXで日本語が使えるようにするための設定です。

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

#### ファイルの作成（gedit編） {#e39b751d}

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

#### ファイルの作成（Emacs編） {#d3f67474}

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
ggv test.ps &
```

で見ることができます。
プリンタの設定が終わっていれば、「ファイル」→「文書の印刷」を実行するだけで印刷することができます。

### 新ドキュメントクラスのインストール（オプション） {#t1f89e20}

どなたかが作ってくださったrpmファイルを使わせていただきましょう。（まだ）

### dvipdfmxのインストール（オプション） {#rc384294}

これはソースからコンパイルします。gccのインストールも必要そうです。（まだ）

### Emacsの日本語入力を使いやすくするための設定（オプション） {#x94b5e29}

tamagoとcannaを使うようにしてみます。（まだ）

### AUCTeXのインストール（オプション） {#d924e221}

rpmをインストールします。（まだ）
