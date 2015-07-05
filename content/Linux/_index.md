---
title: "Linux"
url: "/Linux/"
date: 2013-12-08T04:43:36Z
bookCollapseSection: true
pukiwiki: "Linux"
---

# Linux

## [Linux](https://ja.wikipedia.org/wiki/Linux) での TeX の利用 {#headline}

Linux に TeX をインストールして使えるようになるまでの大まかな流れとしては，[TeX 入手法](</TeX入手法/>)で簡単に述べたとおり

1. TeX の処理系（“TeX ディストリビューション”）のインストールと設定
1. 統合環境またはエディタ，PDF ビューアなどの周辺ツールのインストールと設定

が必要です。

***

***

## TeX ディストリビューション {#distribution}

Linux で TeX 環境を構築するには，2つの方法があります．

- 使用している Linux ディストリビューションのパッケージ管理システムから TeX Live のパッケージをインストールする．
- TeX Live のインストーラを使ってインストールする．

前者の場合は，他のパッケージと同様に統一的な管理ができますが，ディストリビューションによっては提供されているパッケージのバージョンが古いことがあります．
後者の場合は，パッケージ管理システムによる管理からは外れてしまいますが，[tlmgr](/tlmgr/) を使って最新の状態にアップデートし続けることが可能です．

各 Linux ディストリビューション毎のパッケージ管理システムによる TeX 環境の構築方法については，以下の各ページを参照して下さい．

{{< children >}}

ここから先では，パッケージ管理システムを使わずに TeX 環境を構築する方法を説明します．

### [TeX Live](</TeX Live/>) {#texlive}

#### TeX Live のインストール {#texliveinstall}

TeX Live のインストールガイド

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

に従えばよいですが，このページでもネットワークインストーラを使う場合について簡単に説明します．

まず，[ミラーサイト](</TeX Live/#tlnet>)から install-tl-unx.tar.gz をダウンロードします．

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

root 権限でインストーラを実行します．
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

I を入力してインストールを開始します．
サーバーの接続エラーが発生したり，何らかの理由により取得したアーカイブに問題があったりした場合はインストールが途中でストップします．
この場合は，以下のコマンドで途中から再開できたりできなかったりします．

```
$ sudo ./install-tl --profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するか，または [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．

インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．

```
$ sudo /usr/local/texlive/????/bin/*/tlmgr path add
```

#### アップデート {#texliveupdate}

アップデートは

```
$ sudo tlmgr update --self --all
```

を実行すれば OK です．

ただし，アップデートのタイミングによっては，今まで動いていたものが動かなくなったりすることがあるかもしれません．

- /usr/local/texlive/????/tlpkg/backups

にパッケージのバックアップが保存されています．
アップデートによって動作しなくなった場合は

```
$ sudo tlmgr restore （パッケージ名） （リビジョン番号）
```

とすることで以前のバージョンに戻すことができます．

#### フォント埋め込みの設定 {#updmap}

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．
IPAex フォントを埋め込む場合は

```
$ sudo kanji-config-updmap-sys ipaex
```

または

```
$ kanji-config-updmap ipaex
```

を実行します．

## 統合環境やエディタのインストール {#editor}

LaTeX での文書作成を支援するための統合環境・エディタが各種開発されています．
これらは，LaTeX のソース中に書かれた特別な命令を色付けしてくれたり，LaTeX によるタイプセットをボタンやショートカットキー一つで実行してくれたりと，便利なものです．
初心者の方はまずは LaTeX 用の統合環境を使用して LaTeX に慣れるのが良いでしょう．

エディタ・マクロ・プラグインの種類によって得手不得手があったり不具合が発生したりする場合があります．
問題が発生した場合は別のエディタを使用してください．
人によってエディタの好みは様々なので自分にあったエディタを見つけてください．

このほかにも

- [TeX Wiki 内の「TeX 用エディタ」紹介ページ](</TeX用エディタ/>)
- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

には，Linux で使用可能な LaTeX 用の統合環境・エディタが紹介されています。
これらは各ディストリビューションのパッケージ管理システムに用意されていることも多いでしょう．

### フリーソフトウェア（オープンソースソフトウェア） {#editor-free}

- 統合環境（TeX, LaTeX に特化した機能を備えています）
    - <strong>[TeXworks](/TeXworks/)</strong>
    - <strong>[TeXstudio](/TeXstudio/)</strong>
    - <strong>[LyX](/LyX/)</strong>
    - [Texmaker](/Texmaker/)
    - TexitEasy
    - [Kile](/Kile/)
    - LaTeXila

- 汎用エディタ（TeX, LaTeX 用のモードが用意されているものがあります）
    - <strong>[Emacs](/Emacs/)</strong>
        - <strong>[YaTeX](/YaTeX/)（野鳥）</strong>
        - [AUCTeX](/AUCTeX/)
        - [Org mode](</Emacs/Org mode/>) + [YASnippet](/YASnippet/)
        - [TeX mode](</Emacs/TeX mode/>) + [YASnippet](/YASnippet/)
    - <strong>[Vim](/Vim/)</strong>
        - <strong>[Vim-LaTeX](/Vim-LaTeX/)</strong>
        - [tex.vim](/Vim/tex.vim/) + (vimtex or LaTeX Box) + [quickrun](/quickrun/) + [neocomplete &amp; neosnippet](/neocomplete/)
        - ATP
    - [Eclipse](/Eclipse/)
        - [TeXlipse](/TeXlipse/)
    - [gedit](/gedit/)
    - [Atom](/Atom/)
    - [Geany](/Geany/)

## PDF ファイルビューア {#pdfviewer}

長らく LaTeX ファイルの編集は，dvi によるプレビューがもちいられてきました．
ただ，最近は様々な理由から PDF によるプレビューが推奨されています．（[古い情報](</古い情報/>)も参考に．）
TeXworks, TeXstudio などの統合環境には PDF 用のビューアが組み込まれています．
単独の LaTeX 用 PDF プレビューアとしては

- [Evince](/Evince/)
- [Okular](/Okular/)
- [zathura](/zathura/)
- [qpdfview](/qpdfview/)
- [MuPDF](/MuPDF/)：軽量な PDF/XPS ビューア．zathura (zathura-pdf-mupdf), qpdfview (fitz-plugin) などで使われています．
- [Poppler](/Poppler/)：PDF のレンダリングライブラリ．TeXworks, TeXstudio, Texmaker, TexitEasy, Evince, Okular, zathura (zathura-pdf-poppler), qpdfview (pdf-plugin) などで使われています．

などがあります．
ほかにも

- [Common Applications/Documents - ArchWiki](https://wiki.archlinux.org/index.php/Common_Applications/Documents)
- [Get a Free Software PDF reader!](http://pdfreaders.org/)
    <!-- -[[A PDF viewer supporting SyncTeX for Gnome:http://askubuntu.com/questions/23322/a-pdf-viewer-supporting-synctex-for-gnome]] -->

等に情報があります．

## 周辺ツールの利用 {#tools}

### 文献管理ツール {#bibtex}

オープンソースの文献管理ツールとして，以下を挙げておきます。

- [Zotero](https://www.zotero.org/)
- [JabRef](http://jabref.sourceforge.net/)
- [QRef](http://members3.jcom.home.ne.jp/qref/)

このほかにも

- [TeX Wiki 内の「BibTeX 関連ツール」紹介ページ](</BibTeX関連ツール/>)

には，Linux で使用可能な文献管理ツールが紹介されています。

## その他の選択肢 {#others}

Linux では TeX Live をインストールするのが一般的ですが，ほかの TeX ディストリビューションをインストールすることもできます．

- [W32TeX](/W32TeX/)：Microsoft Windows 向けの TeX ディストリビューションですが，Wine を使えば Linux 上で利用することも可能です．
    - [Wine への W32TeX インストーラ](http://kmaeda.net/kmaeda/tex/) ([install-w32tex.py](https://gist.github.com/2766442))
