---
title: "Linux"
url: "/Linux/"
date: 2013-12-08T04:43:36Z
bookCollapseSection: true
pukiwiki: "Linux"
---

# Linux

## [Linux](https://ja.wikipedia.org/wiki/Linux) {#h0c68a28}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/200px-Tux.svg.png" alt="Linux" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Linux ディストリビューション {#h2a1700b}

Linux はディストリビューションによって TeX のインストール方法が異なります．<br>
Linux ディストリビューションに収録されている TeX Live をインストールする場合はディストリビューションごとの項目をご覧ください．<br>
[TeX Live](</TeX Live/>) の公式サイトのインストーラを使えば Linux ディストリビューションの違いをあまり気にせずに最新の TeX 環境が導入できます．

{{< children >}}

## TeX ディストリビューション {#v025f4e5}

### [TeX Live](</TeX Live/>) <a id="texlive"></a> {#d212a0d5}

最新版の TeX Live をおすすめします．

#### TeX Live のインストール <a id="texliveinstall"></a> {#i0a1ca9a}

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

を参照．

[ミラーサイト](</TeX Live/#tlnet>)から install-tl-unx.tar.gz をダウンロードします．

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

root 権限でインストーラを実行します．<br>
オプションでダウンロードするリポジトリを指定できます．

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

I を入力してインストールを開始します．<br>
サーバーの接続エラーが発生したり，アーカイブ中に予期せぬ EOF があったりした場合はインストールが途中でストップします．<br>
エラーが発生した場合は以下のコマンドで途中から再開できたりできなかったりします．

```
$ sudo ./install-tl --profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するかまたは [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．<br>
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

ただし，アップデートによってパッケージや設定が変更されて，今まで動いていたものが動かなくなったりすることがあるかもしれません．

- /usr/local/texlive/????/tlpkg/backups

にパッケージのバックアップが保存されます．<br>
アップデートによって動作しなくなった場合は以前のバージョンに戻してください．<br> <!-- やり方を書く． -->

#### extractbb の追加 <a id="extractbb"></a> {#a9feb439}

TeX Live 2014 はデフォルトでは extractbb が自動実行されません．<br>
TEXMFLOCAL の値を確認します．

```
$ kpsewhich -var-value TEXMFLOCAL
/usr/local/texlive/texmf-local
```

/usr/local/texlive/texmf-local/web2c/texmf.cnf を作成します．

```
$ sudo mkdir -p /usr/local/texlive/texmf-local/web2c
$ sudo touch /usr/local/texlive/texmf-local/web2c/texmf.cnf
```

/usr/local/texlive/texmf-local/web2c/texmf.cnf を編集します．<br>
shell_escape_commands を以下のように編集して保存します．

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,xindy,\
mpost,upmpost,\
repstopdf,epspdf,extractbb
```

mktexlsr を実行します．

```
$ sudo mktexlsr
```

#### フォント埋め込みの設定 {#w8cc5799}

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．<br>
IPAexフォントを埋め込む場合は

```
$ sudo kanji-config-updmap-sys ipaex
```

または

```
$ kanji-config-updmap ipaex
```

を実行します．

TeX Live には IPAex フォント，uptex-ipaex.map が収録されています．

```
$ kpsewhich ipaexm.ttf ipaexg.ttf
/usr/local/texlive/????/texmf-dist/fonts/truetype/public/ipaex/ipaexm.ttf
/usr/local/texlive/????/texmf-dist/fonts/truetype/public/ipaex/ipaexg.ttf
$ kpsewhich uptex-ipaex.map
/usr/local/texlive/????/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ipaex/uptex-ipaex.map
```

upLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．

```
$ ptex2pdf -u -l -ot '-synctex=1' -od '-f uptex-ipaex.map' hoge.tex
```

### [W32TeX](/W32TeX/) {#od6f4f13}

[W32TeX](/W32TeX/) は Windows 向けの TeX ディストリビューションですが， Wine を使えば Linux 上で利用することも可能です．<br>
TeX Live に収録されていないプログラムを使用したい場合は W32TeX が便利です．

- [Wine への W32TeX インストーラ](http://kmaeda.net/kmaeda/tex/) ([install-w32tex.py](https://gist.github.com/2766442))

## [統合環境・エディタ](</TeX用エディタ/>) {#ta48d235}

LaTeX での文書作成を支援するための統合環境・エディタが開発されています．

- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

にも Linux で使用可能な LaTeX 用の統合環境・エディタが紹介されています．

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
    - [tex.vim](/Vim/tex.vim/) + (vim-latex or LaTeX Box) + [quickrun](/quickrun/) + [neocomplete &amp; neosnippet](/neocomplete/)
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
