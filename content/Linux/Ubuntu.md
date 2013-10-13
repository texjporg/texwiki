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

[texlive-dummy-ubuntu](https://github.com/krlmlr/texlive-dummy-ubuntu) を使用する場合は以下のようにします．<br>

```
$ sudo add-apt-repository ppa:krlmlr/ppa
$ sudo apt-get update
$ sudo apt-get install texlive-dummy
```

### TeX Live 2013/Debian <a id="texlive2013debian"></a> {#c935e6e4}

#### Ubuntu 14.04, 13.10 {#xabd5471}

TeX Live 2013/Debian をインストールする場合は texlive-full を指定してインストールします．<br>

```
$ sudo apt-get install texlive-full
```

/usr/share/texlive/texmf-dist/web2c/texmf.cnf の shell_escape_commands を確認します．<br>

shell_escape_commands が以下のように記述されていると思います．<br>

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
mpost,pmpost,upmpost,\
repstopdf,epspdf,extractbb
```

mktexlsr を実行します．<br>

```
$ sudo mktexlsr
```

文字コードの自動判別機能を有効にする場合は [日本語 encoding の推測](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1043) を参照して設定します．<br>

nkf をインストールします．<br>

```
$ sudo apt-get install nkf
```

/usr/local/share/texmf/web2c/texmf.cnf に PTEX_IN_FILTER = /usr/bin/nkf -w を追加します．<br>

```
$ printf '\n%% guess input enc\nPTEX_IN_FILTER = /usr/bin/nkf -w\n' | sudo tee -a /usr/local/share/texmf/web2c/texmf.cnf
$ sudo mktexlsr
$ tail /usr/local/share/texmf/web2c/texmf.cnf
...
% guess input enc
PTEX_IN_FILTER = /usr/bin/nkf -w
```

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．<br>
IPAexフォントを埋め込む場合は<br>

```
$ kanji-config-updmap ipaex
```

を実行します．<br>

pLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
$ ptex2pdf -l -ot '-synctex=1' -od '-f ptex-ipaex.map' hoge.tex
```

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

## [Adobe Reader](</Adobe Reader/>) {#jc822238}

[Adobe Reader 9 は 2013年6月26日 でサポートが終了](http://www.adobe.com/jp/jos/acrobat/it/endsupport.html)しました．<br>
Adobe Reader 9 を使用している方は Adobe Reader XI にアップグレードしてください．<br>
Adobe Reader XI は Wine 上でも動作します．<br>

## [TeXstudio](/TeXstudio/) <a id="texstudio"></a> {#w37788fd}

```
$ sudo apt-get install texstudio
```

## [Texmaker](/Texmaker/) <a id="texmaker"></a> {#z2142745}

```
$ sudo apt-get install texmaker
```

Texmaker はかな漢字変換に関して不具合があるので<br>
不具合を回避するための設定をします．<br>
\section{ を入力した直後に日本語入力をしようとすると日本語入力が ON にならない場合は [TeXstudio](/TeXstudio/) または [Kile](/Kile/) を使用してください．<br>

インプットメソッドに ibus を使用している場合は

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

## [TeXworks](/TeXworks/) <a id="texworks"></a> {#veed3c44}

最新の安定版/開発版をインストールしたい場合は [TeXworks/インストール#Linux Mint](</TeXworks/インストール/#p69845c9>) を参照．<br>

```
$ sudo apt-get install texworks
```

インプットメソッドに ibus を使用している場合は

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

## [LyX](/LyX/) <a id="lyx"></a> {#s7886348}

最新の安定版/開発版をインストールしたい場合は LyX/インストール#Linux Mint を参照．<br>

```
$ sudo apt-get install lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

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

fcitx-mozc が利用できます．<br>

```
$ sudo apt-get install software-properties-common
$ sudo apt-add-repository ppa:ikuya-fruitsbasket/fcitx
$ sudo apt-get update
$ sudo apt-get install fcitx fcitx-mozc
$ im-config -x
```

## 関連リンク {#p9c99f41}

- [http://www.fsf.org/blogs/rms/ubuntu-spyware-what-to-do](http://www.fsf.org/blogs/rms/ubuntu-spyware-what-to-do)
- [http://www.gnu.org/distros/common-distros.html#Ubuntu](http://www.gnu.org/distros/common-distros.html#Ubuntu)
- [フリーソフトウェアのリーダーRichard Stallman曰く: Amazonの検索を統合したUbuntuはスパイウェアだ](http://jp.techcrunch.com/2012/12/08/20121207free-software-leader-richard-stallman-amazon-search-integration-in-ubuntu-amounts-to-spyware/)
- [リチャードストールマン氏が Ubuntu を非難](http://japan.internet.com/webtech/20121211/3.html)
- [2012年9月27日　問題は広告じゃない!? Ubuntu 12.10のデフォルト検索→Amazonに反対するワケ](http://gihyo.jp/admin/clip/01/linux_dt/201209/27)
- [Ubuntu 12.10にAmazonレンズを無効にする設定項目が加わったらしい](http://cpplover.blogspot.jp/2012/10/ubuntu-1210amazon.html)
- [ストールマン、UbuntuのUnityレンズについて](http://cpplover.blogspot.jp/2012/10/ubuntuunity.html)
- [Richard Stallman氏の批判にUbuntuのコミュニティーマネージャーが反論](http://linux.slashdot.jp/story/12/12/10/2111218/Richard-Stallman%E6%B0%8F%E3%81%AE%E6%89%B9%E5%88%A4%E3%81%ABUbuntu%E3%81%AE%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%BC%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%BC%E3%81%8C%E5%8F%8D%E8%AB%96)
- [Ubuntu脱出計画その1 〜動機編〜](http://nippondanji.blogspot.jp/2013/02/ubuntu1.html)
