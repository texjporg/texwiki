---
title: "Linux/Linux Mint"
url: "/Linux/Linux Mint/"
date: 2013-03-28T20:19:04Z
pukiwiki: "Linux/Linux Mint"
---

# Linux/Linux Mint

[Linux](/Linux/) > Linux Mint/Linux Mint Debian Edition (LMDE)

## [Linux Mint/Linux Mint Debian Edition (LMDE)](http://linuxmint.com/) {#f4077eb2}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Linux_Mint_logo_and_wordmark.svg/500px-Linux_Mint_logo_and_wordmark.svg.png" alt="Linux Mint" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## [Linux Mint/Linux Mint Debian Edition (LMDE) とは](http://linuxmint-jp.net/linuxmint.html) {#b5a36704}

Linux Mint は Ubuntu をベースにした Linux ディストリビューションです．<br>
Linux Mint Debian Edition (LMDE) は Debian GNU/Linux をベースにした Linux ディストリビューションです．<br>

- [Linux Mint](http://linuxmint.com/)
- [Linux Mint Japan](http://linuxmint-jp.net/)
- [https://github.com/linuxmint](https://github.com/linuxmint)

## ダウンロード {#a6b4fe07}

- [Mirrors - Linux Mint](http://www.linuxmint.com/mirrors.php)

### 国内ミラーサイト {#ce6708ed}

日本のミラーサイト (JAIST) は No codecs 版のみの配布になっています． (→ [Linux Mintのミラーを再開しました](http://ftp-admin.blogspot.jp/2013/06/linux-mint.html))<br>

#### ISO Images {#b7834158}

- [http://ftp.jaist.ac.jp/pub/Linux/linuxmint/isos/stable/](http://ftp.jaist.ac.jp/pub/Linux/linuxmint/isos/stable/)

#### パッケージ {#ub67daca}

- [http://ftp.jaist.ac.jp/pub/Linux/linuxmint/packages/](http://ftp.jaist.ac.jp/pub/Linux/linuxmint/packages/)
- [Linux MintのパッケージをJAISTから取得するようにするには](http://blog.lindwurm.biz/2013/06/get-mint-packages-from-jaist.html)

## TeX Live <a id="texlive"></a> {#d237a7b2}

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

### TeX Live 2013 <a id="texlive2013"></a> {#ef984d1b}

#### Linux Mint {#l0b7aecc}

- [Linux#TeX Live 2013 のインストール](/Linux/#texlive2013)

TeX Live の公式サイトのパッケージをインストールしたあとで TeX Live/Debian に依存するパッケージをインストールしようとすると TeX Live/Debian も同時にインストールされてしまいます．<br>
TeX Live/Debian がインストールされないように dummy パッケージを作成して依存関係の問題を回避します．<br>

```
$ sudo apt-get install equivs
$ wget http://www.tug.org/texlive/files/debian-control-ex.txt
```

<!-- debian-control-ex.txt に texlive-full, texlive-lang-cjk, asymptote, asymptote-doc などの項目を追加します． -->

```
$ equivs-build debian-control-ex.txt
$ sudo dpkg -i texlive-local_2011-1~1_all.deb
```

#### LMDE <a id="lmde"></a> {#q5d1118e}

- Linux/Debian

### TeX Live 2013/Debian <a id="texlive2013debian"></a> {#qcd9ce14}

#### Linux Mint 16 {#h653bc7f}

TeX Live 2013/Debian をインストールする場合は texlive-full を指定してインストールします．<br>

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

文字コードの自動判別機能を有効にする場合は [日本語 encoding の推測](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1043) を参照して設定します．<br>

nkf をインストールします．<br>

```
$ sudo apt-get install nkf
```

/usr/share/texlive/texmf-dist/web2c/texmf.cnf に設定を追加します．<br>

```
PTEX_IN_FILTER = /usr/bin/nkf -w
```

pLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
$ ptex2pdf -l -ot '-synctex=1' -od '-f ptex-ipaex.map' hoge.tex
```

### TeX Live 2012/Debian <a id="texlive2012debian"></a> {#ea828b67}

#### Linux Mint 15 {#n724cc58}

Linux Mint 14 と同様の方法でインストールできます．<br>

TeX Live 2012/Debian をインストールする場合は texlive-full を指定してインストールします．<br>

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

文字コードの自動判別機能を有効にする場合は [日本語 encoding の推測](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1043) を参照して設定します．<br>

nkf をインストールします．<br>

```
$ sudo apt-get install nkf
```

/usr/share/texlive/texmf/web2c/texmf.cnf に設定を追加します．<br>

```
PTEX_IN_FILTER = /usr/bin/nkf -w
```

## [Python](/Python/) <a id="python"></a> {#reda4f97}

```
$ sudo apt-get install python python3
```

## [Ruby](/Ruby/) <a id="ruby"></a> {#mf285d32}

```
$ sudo apt-get install ruby1.9.3
```

## [Perl](/Perl/) <a id="perl"></a> {#e850770a}

```
$ sudo apt-get install perl
```

## [Evince](/Evince/) <a id="evince"></a> {#qfdb160b}

```
$ sudo apt-get install evince
```

[代替フォントの設定](/Evince/#substitute) を参照して代替フォントの設定をします．<br>

## [Okular](/Okular/) <a id="okular"></a> {#ba1358b3}

```
$ sudo apt-get install okular kde-l10n-ja
```

## [zathura](/zathura/) <a id="zathura"></a> {#eabe50ed}

```
$ sudo apt-get install zathura
```

## [qpdfview](/qpdfview/) <a id="qpdfview"></a> {#u94ec4be}

```
$ sudo apt-get install qpdfview
```

## [MuPDF](/MuPDF/) <a id="mupdf"></a> {#c80fa1e6}

```
$ sudo apt-get install mupdf
```

## [Texmaker](/Texmaker/) <a id="texmaker"></a> {#u8c0cbda}

```
$ sudo apt-get install texmaker
```

Texmaker はかな漢字変換に関して不具合があるので<br>
不具合を回避するための設定をします．<br>
\section{ を入力した直後に日本語入力をしようとすると日本語入力が ON にならない場合は [Kile](/Kile/) を使用してください．<br>

Linux Mint 15 でインプットメソッドに ibus を使用している場合は

1. [ibus-qt4](http://packages.ubuntu.com/ja/ibus-qt4) を導入する

    ```
    $ sudo apt-get install ibus-qt4
    ```

1. [qt4-qtconfig](http://packages.ubuntu.com/ja/qt4-qtconfig) を導入する

    ```
    $ sudo apt-get install qt4-qtconfig
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
\[インプットメソッドを選択\] で XIM や uim を選択すると日本語入力で黒く表示されてしまいました．<br>

## [LyX](/LyX/) <a id="lyx"></a> {#jdcf4217}

最新の安定版/開発版をインストールしたい場合は LyX/インストール#Linux Mint を参照．<br>

```
$ sudo apt-get install lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

## [TeXworks](/TeXworks/) <a id="texworks"></a> {#g455c5e0}

最新の安定版/開発版をインストールしたい場合は [TeXworks/インストール#Linux Mint](</TeXworks/インストール/#p69845c9>) を参照．<br>

```
$ sudo apt-get install texworks
```

Linux Mint 15 でインプットメソッドに ibus を使用している場合は

1. [ibus-qt4](http://packages.ubuntu.com/ja/ibus-qt4) を導入する

    ```
    $ sudo apt-get install ibus-qt4
    ```

1. [qt4-qtconfig](http://packages.ubuntu.com/ja/qt4-qtconfig) を導入する

    ```
    $ sudo apt-get install qt4-qtconfig
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

## Gummi <a id="gummi"></a> {#g4646b51}

```
$ sudo apt-get install gummi
```

## LaTeXila <a id="latexila"></a> {#ied3d1b1}

```
$ sudo apt-get install latexila
```

## [Kile](/Kile/) <a id="kile"></a> {#b86719e1}

```
$ sudo apt-get install kile
```

## [Eclipse](/Eclipse/) <a id="eclipse"></a> {#bd4e03c3}

```
$ sudo apt-get install eclipse
```

## [Emacs](/Emacs/) <a id="emacs"></a> {#w2c42a95}

```
$ sudo apt-get install emacs24
```

### [YaTeX](/YaTeX/) {#reffaf03}

- [https://launchpad.net/ubuntu/+source/yatex/](https://launchpad.net/ubuntu/+source/yatex/)
    - [https://launchpad.net/ubuntu/+source/yatex/+changelog](https://launchpad.net/ubuntu/+source/yatex/+changelog)

### [AUCTeX](/AUCTeX/) {#r3a92e85}

- [https://launchpad.net/ubuntu/+source/auctex/](https://launchpad.net/ubuntu/+source/auctex/)
    - [https://launchpad.net/ubuntu/+source/auctex/+changelog](https://launchpad.net/ubuntu/+source/auctex/+changelog)

## [Vim](/Vim/) <a id="vim"></a> {#febc084d}

```
$ sudo apt-get install vim
```

## [gedit](/gedit/) <a id="gedit"></a> {#fc6bbe0c}

```
$ sudo apt-get install gedit gedit-latex-plugin gedit-plugins
```

## [Geany](/Geany/) <a id="geany"></a> {#caa66bfb}

```
$ sudo apt-get install geany geany-plugins
```

## [Inkscape](/Inkscape/) <a id="inkscape"></a> {#ke45cdf4}

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

## fcitx-mozc <a id="fcitx-mozc"></a> {#a10c0ee8}

Linux Mint 15 では fcitx-mozc が利用できます．<br>

```
$ sudo apt-get install software-properties-common
$ sudo apt-add-repository ppa:ikuya-fruitsbasket/fcitx
$ sudo apt-get update
$ sudo apt-get install fcitx fcitx-mozc
$ im-config -x
```
