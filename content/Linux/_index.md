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
[TeX Live](</TeX Live/>) の公式サイトのインストーラを使えば Linux ディストリビューションの違いをあまり気にせずに最新の TeX 環境が導入できます．<br>
最新のソフトウェアを使用したい場合は [Arch Linux](</Linux/Arch Linux/>) をおすすめします．<br>

{{< children >}}

## TeX ディストリビューション {#v025f4e5}

### [TeX Live](</TeX Live/>) <a id="texlive"></a> {#d212a0d5}

最新版の TeX Live をおすすめします．<br>

#### TeX Live のインストール <a id="texliveinstall"></a> {#i0a1ca9a}

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

を参照．<br>

[ミラーサイト](</TeX Live/#tlnet>)から install-tl-unx.tar.gz をダウンロードします．<br>

- wget を使用する場合

    ```
    $ wget http://ring.maffin.ad.jp/pub/text/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz
    ```

- curl を使用する場合

    ```
    $ curl -O http://ring.maffin.ad.jp/pub/text/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz
    ```

install-tl-unx.tar.gz を展開します．<br>

```
$ tar xvf install-tl-unx.tar.gz
```

展開したインストーラのディレクトリに移動します．<br>

```
$ cd install-tl*
```

root 権限でインストーラを実行します．<br>
オプションでダウンロードするリポジトリを指定できます．<br>

```
$ sudo ./install-tl --repository http://ring.maffin.ad.jp/pub/text/CTAN/systems/texlive/tlnet/

...

Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit

Enter command: I
```

I を入力してインストールを開始します．<br>
サーバーの接続エラーが発生したり，アーカイブ中に予期せぬ EOF があったりした場合はインストールが途中でストップします．<br>
エラーが発生した場合は以下のコマンドで途中から再開できたりできなかったりします．<br>
再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するかまたは [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．<br>

```
$ sudo ./install-tl --profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．<br>

- 64-bit 版の場合

    ```
    $ sudo /usr/local/texlive/????/bin/x86_64-linux/tlmgr path add
    ```

- 32-bit 版の場合

    ```
    $ sudo /usr/local/texlive/????/bin/i386-linux/tlmgr path add
    ```

#### アップデート {#v78bce27}

アップデートは

```
$ sudo tlmgr update --self --all
```

を実行すれば OK です．<br>

#### extractbb の追加 <a id="extractbb"></a> {#a9feb439}

TEXMFLOCAL の値を確認します．<br>

```
$ kpsewhich -var-value TEXMFLOCAL
/usr/local/texlive/????/../texmf-local
```

/usr/local/texlive/texmf-local/web2c/texmf.cnf を作成します．<br>

```
$ sudo mkdir -p /usr/local/texlive/texmf-local/web2c
$ sudo touch /usr/local/texlive/texmf-local/web2c/texmf.cnf
```

/usr/local/texlive/texmf-local/web2c/texmf.cnf を編集します．<br>
shell_escape_commands を以下のように編集して保存します．<br>

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,upbibtex,biber,\
kpsewhich,\
makeindex,texindy,\
mpost,upmpost,\
repstopdf,epspdf,extractbb
```

mktexlsr を実行します．<br>

```
$ sudo mktexlsr
```

#### フォント埋め込みの設定 {#w8cc5799}

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．<br>
IPAexフォントを埋め込む場合は<br>

```
$ sudo kanji-config-updmap-sys ipaex
```

または

```
$ kanji-config-updmap ipaex
```

を実行します．<br>

TeX Live には IPAex フォント，uptex-ipaex.map が収録されています．<br>

```
$ kpsewhich ipaexm.ttf ipaexg.ttf
/usr/local/texlive/????/texmf-dist/fonts/truetype/public/ipaex/ipaexm.ttf
/usr/local/texlive/????/texmf-dist/fonts/truetype/public/ipaex/ipaexg.ttf
$ kpsewhich uptex-ipaex.map
/usr/local/texlive/????/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ipaex/uptex-ipaex.map
```

upLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
$ ptex2pdf -u -l -ot '-synctex=1' -od '-f uptex-ipaex.map' hoge.tex
```

### [W32TeX](/W32TeX/) {#od6f4f13}

[W32TeX](/W32TeX/) は Wine で動作します．<br>
TeX Live に収録されていないプログラムを使用したい場合は W32TeX が便利です．<br>

- [install-w32tex.py](https://gist.github.com/2766442) (a.k.a. 誰得スクリプト) Install W32TeX on Wine<br>

## プログラミング言語 {#ccef7053}

- C
- C++
- Fortran
- D
- Go
- Haskell
- F#
- C#
- VB
- Java
- JavaScript
- PHP
- [Python](/Python/)
- [Ruby](/Ruby/)
- [Perl](/Perl/)
- Lua
- LuaJIT
- [Lisp](/Lisp/)

## [統合環境・エディタ](</TeX用エディタ/>) {#ta48d235}

LaTeX での文書作成を支援するための統合環境・エディタが開発されています．<br>
初心者の方はまずは LaTeX 用の統合環境を使用して LaTeX に慣れるのがいいとおもいます．<br>
エディタ・マクロ・プラグインの種類によって得手不得手があったり不具合が発生したりする場合があります．<br>
問題が発生した場合は別のエディタを使用してください．<br>
人によってエディタの好みは様々なので自分にあったエディタを見つけてください．<br>
見つからない人は自作してみるのもいいかもしれません．<br>

- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

にも Linux で使用可能な LaTeX 用の統合環境・エディタが紹介されています．

### フリーソフトウェア (オープンソースソフトウェア) {#a586d103}

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [TeXworks](/TeXworks/)
- [Eclipse](/Eclipse/)
    - [TeXlipse](/TeXlipse/)
- [Emacs](/Emacs/)
    - [Org mode](</Emacs/Org mode/>)
    - [TeX mode](</Emacs/TeX mode/>) + [YASnippet](/YASnippet/)
    - [AUCTeX](/AUCTeX/)
    - [YaTeX](/YaTeX/)
- [Vim](/Vim/)
    - [tex.vim](/Vim/tex.vim/) + LaTeX Box + [quickrun](/quickrun/) + [neocomplete &amp; neosnippet](/neocomplete/)
    - [Vim-LaTeX](/Vim-LaTeX/)
    - ATP
- [Kile](/Kile/)
- LaTeXila
- [Geany](/Geany/)
- [gedit](/gedit/)

## PDF ファイルビューア {#uf722ec6}

- [Common Applications/Documents - ArchWiki](https://wiki.archlinux.org/index.php/Common_Applications/Documents)
    <!-- -http://pdfreaders.org/ -->
    <!-- -[[A PDF viewer supporting SyncTeX for Gnome:http://askubuntu.com/questions/23322/a-pdf-viewer-supporting-synctex-for-gnome]] -->

を参照．

### フリーソフトウェア (オープンソースソフトウェア) {#n9c5f419}

- [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/) などは PDF ファイルビューアを内蔵しています．
- [Evince](/Evince/)
- [Okular](/Okular/)
- [zathura](/zathura/)
- [qpdfview](/qpdfview/)
- [MuPDF](/MuPDF/) a lightweight PDF and XPS viewer．zathura (zathura-pdf-mupdf), qpdfview (fitz-plugin) などで使われています．
- [Poppler](/Poppler/) PDF のレンダリングライブラリ．TeXstudio, Texmaker, TeXworks, Evince, Okular, zathura (zathura-pdf-poppler), qpdfview (pdf-plugin) などで使われています．
- [Mozilla Firefox (pdf.js)](</Mozilla Firefox/#pdfjs>)

## [BibTeX 関連](</BibTeX関連ツール/>) {#q19644b2}

### フリーソフトウェア (オープンソースソフトウェア) {#p8c9577b}

- [Zotero](https://www.zotero.org/)
- [JabRef](http://jabref.sourceforge.net/)
- [QRef](http://members3.jcom.home.ne.jp/qref/)

## シェルスクリプト関連 {#z69d3afc}

- Bash

## Linux 関連 {#n1de1185}

- [DistroWatch.com](http://distrowatch.com/)
- [Open Source Watershed](http://oswatershed.org/)
- [30 人の Linux カーネル開発者](https://jp.linux.com/linux-community/30linuxkerneldevelopers)
- [Linux のシステム管理，Linux でソフトウエア開発環境やデスクトップ環境を作る](http://www.kkaneko.com/rinkou/linux/)
