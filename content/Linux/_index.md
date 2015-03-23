---
title: "Linux"
url: "/Linux/"
date: 2013-12-08T04:43:36Z
bookCollapseSection: true
pukiwiki: "Linux"
---

# Linux

## [Linux](https://ja.wikipedia.org/wiki/Linux) での TeX の利用 {#h0c68a28}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/200px-Tux.svg.png" alt="Linux" style="float:right">

***

***

## Linux での TeX 環境構築 {#h2a1700b}

Linux で TeX 環境を構築するには，2つの方法があります．

- 使用している Linux ディストリビューションのパッケージ管理システムから TeX Live のパッケージをインストールする．
- TeX Live のインストーラを使ってインストールする．

前者の場合は，他のパッケージと同様に統一的な管理ができますが，ディストリビューションによっては提供されているパッケージのバージョンが古いことがあります．後者の場合は，パッケージ管理システムによる管理からは外れてしまいますが，tlmgr を使って最新の状態にアップデートし続けることが可能です．

各 Linux ディストリビューション毎のパッケージ管理システムによる TeX 環境の構築方法については，以下の各ページを参照して下さい．

{{< children >}}

## TeX ディストリビューション {#v025f4e5}

以下では，パッケージ管理システムを使わずに TeX 環境を構築する方法を説明します．

### [TeX Live](</TeX Live/>) {#texlive}

#### TeX Live のインストール {#texliveinstall}

TeX Live のインストールガイド

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

に従えばよいですが，このページでもネットワークインストーラを使う場合について簡単に説明します．

まず，[ミラーサイト](</TeX Live/#qf59e3ea>)から install-tl-unx.tar.gz をダウンロードします．

- wget を使用する場合

    ```
    $ wget http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz
    ```

- curl を使用する場合

    ```
    $ curl -O http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz
    ```

install-tl-unx.tar.gz を展開します．

```
$ tar xvf install-tl-unx.tar.gz
```

展開したインストーラのディレクトリに移動します．

```
$ cd install-tl*
```

root 権限でインストーラを実行します．オプションでダウンロードするリポジトリを指定できます．

```
$ sudo ./install-tl --repository http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/
```

```
...
```

```
Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit
```

```
Enter command: I
```

I を入力してインストールを開始します．サーバーの接続エラーが発生したり，何らかの理由により取得したアーカイブに問題があったりした場合はインストールが途中でストップします．この場合は，以下のコマンドで途中から再開できたりできなかったりします．

```
$ sudo ./install-tl --profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

再開できない場合は[接続先を変更](</TeX Live/#qf59e3ea>)するか，または [ISO ファイル](</TeX Live/#id0ad572>)をミラーサイトからダウンロードしてインストールしてください．

インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．

```
$ sudo /usr/local/texlive/????/bin/*/tlmgr path add
```

#### アップデート {#v78bce27}

アップデートは

```
$ sudo tlmgr update --self --all
```

を実行すれば OK です．

ただし，アップデートのタイミングによっては，今まで動いていたものが動かなくなったりすることがあるかもしれません．

- /usr/local/texlive/????/tlpkg/backups

にパッケージのバックアップが保存されています．アップデートによって動作しなくなった場合は

```
$ sudo tlmgr restore （パッケージ名） （リビジョン番号）
```

とすることで以前のバージョンに戻すことができます．

#### フォント埋め込みの設定 {#w8cc5799}

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．IPAexフォントを埋め込む場合は

```
$ sudo kanji-config-updmap-sys ipaex
```

または

```
$ kanji-config-updmap ipaex
```

を実行します．

### [W32TeX](/W32TeX/) {#od6f4f13}

[W32TeX](/W32TeX/) は Windows 向けの TeX ディストリビューションですが， Wine を使えば Linux 上で利用することも可能です．

- [Wine への W32TeX インストーラ](http://kmaeda.net/kmaeda/tex/) ([install-w32tex.py](https://gist.github.com/2766442))

## [統合環境・エディタ](</TeX用エディタ/>) {#ta48d235}

LaTeX での文書作成を支援するための統合環境・エディタが開発されています．

- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

にも Linux で使用可能な LaTeX 用の統合環境・エディタが紹介されています．これらは各ディストリビューションのパッケージ管理システムに用意されていることも多いでしょう．

### フリーソフトウェア (オープンソースソフトウェア) {#a586d103}

#### Linux, Windows, OS X {#ef19350f}

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [Texmaker](/Texmaker/)
- [TeXworks](/TeXworks/)
- TexitEasy
- [Eclipse](/Eclipse/)
    - [TeXlipse](/TeXlipse/)
- [Emacs](/Emacs/)
    - [Org mode](</Emacs/Org mode/>) + [YASnippet](/YASnippet/)
    - [TeX mode](</Emacs/TeX mode/>) + [YASnippet](/YASnippet/)
    - [AUCTeX](/AUCTeX/)
    - [YaTeX](/YaTeX/)
- [Vim](/Vim/)
    - [tex.vim](/Vim/tex.vim/) + (vimtex or LaTeX Box) + [quickrun](/quickrun/) + [neocomplete &amp; neosnippet](/neocomplete/)
    - [Vim-LaTeX](/Vim-LaTeX/)
    - ATP
- [Atom](/Atom/)
- [Brackets](/Brackets/)
- [Light Table](</Light Table/>)
- [gedit](/gedit/)
- [Geany](/Geany/)

#### Linux {#v89b4b6c}

- [Kile](/Kile/)
- LaTeXila

## PDF ファイルビューア {#uf722ec6}

- [Common Applications/Documents - ArchWiki](https://wiki.archlinux.org/index.php/Common_Applications/Documents)
- [http://pdfreaders.org/](http://pdfreaders.org/)
    <!-- -[[A PDF viewer supporting SyncTeX for Gnome:http://askubuntu.com/questions/23322/a-pdf-viewer-supporting-synctex-for-gnome]] -->

を参照．

### フリーソフトウェア (オープンソースソフトウェア) {#n9c5f419}

- [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), TexitEasy などは PDF ファイルビューアを内蔵しています．
- [Evince](/Evince/)
- [Okular](/Okular/)
- [zathura](/zathura/)
- [qpdfview](/qpdfview/)
- [MuPDF](/MuPDF/) a lightweight PDF and XPS viewer．zathura (zathura-pdf-mupdf), qpdfview (fitz-plugin) などで使われています．
- [Poppler](/Poppler/) PDF のレンダリングライブラリ．TeXstudio, Texmaker, TeXworks, TexitEasy, Evince, Okular, zathura (zathura-pdf-poppler), qpdfview (pdf-plugin) などで使われています．
- [Mozilla Firefox (PDF.js)](</Mozilla Firefox/#pdfjs>)
- [Chrome/Chromium PDF Viewer (PDFium)](</Google Chrome/#chromepdfviewer>)

## [BibTeX 関連](</BibTeX関連ツール/>) {#q19644b2}

### フリーソフトウェア (オープンソースソフトウェア) {#p8c9577b}

- [Zotero](https://www.zotero.org/)
- [JabRef](http://jabref.sourceforge.net/)
- [QRef](http://members3.jcom.home.ne.jp/qref/)
