---
title: "BSD/FreeBSD"
url: "/BSD/FreeBSD/"
date: 2013-04-24T02:38:32Z
pukiwiki: "BSD/FreeBSD"
---

# BSD/FreeBSD

[BSD](/BSD/) > FreeBSD

## [FreeBSD](http://www.freebsd.org) {#r05903ba}

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/d/df/Freebsd_logo.svg/500px-Freebsd_logo.svg.png" alt="FreeBSD" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## FreeBSD とは {#o8689db1}

FreeBSD はオープンソースの Unix 系オペレーティングシステムです．<br>

- [The FreeBSD Project](http://www.freebsd.org)
- [The FreeBSD Project (ja)](http://www.freebsd.org/ja/)

### Ports {#j8583985}

- [About FreeBSD Ports](http://www.freebsd.org/ports/)
- [FreshPorts -- The Place For Ports](http://www.freshports.org/)

#### お知らせ {#w2f34805}

- [Ports svn r365720 UPDATING 20140823](http://svnweb.freebsd.org/ports/head/UPDATING?r1=365599&r2=365720) にて，Ports は TeX Live 2014 ベースとなりました．
- [Ports svn r362648 UPDATING 20140727](http://svnweb.freebsd.org/ports/head/UPDATING?r1=362614&r2=362648) にて，Port make 時の変数 TEX_DEFAULT が texlive になりました．

### 派生版 {#t29f2245}

- [GhostBSD](http://www.ghostbsd.org/)
- [PC-BSD](http://www.pcbsd.org/)

## TeX Live <a id="texlive"></a> {#w7ff21ac}

- [http://svnweb.freebsd.org/ports/head/print/texlive-full/](http://svnweb.freebsd.org/ports/head/print/texlive-full/)
- [FreshPorts -- print/texlive-full](http://www.freshports.org/print/texlive-full/)

FreeBSD で [TeX Live](</TeX Live/>) をインストールする場合は

- ports を使わずに TeX Live の公式パッケージをインストールする
- ports を使って TeX Live をインストールする
    - 日本語環境は print/texlive-full と japanese/tex-ptex をインストールすることで，従来のpLaTeXやdvipdfmxと同名同等のコマンドが利用できるようになる (/etc/make.conf にて TEX_DEFAULT=texlive と書いておくほうが良いでしょう）

方法があります．

### TeX Live 公式パッケージ {#la53cbe5}

#### TeX Live のインストール <a id="texliveinstall"></a> {#v92cb887}

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)
- [Storage@Anthesphoria: TeX Live on FreeBSD | TeX Live 2014 on FreeBSD | Notes for FreeBSD users](http://anthesphoria.net/FreeBSD/TeXLive-2014/)

を参照．<br>

[ミラーサイト](</TeX Live/#tlnet>)から install-tl-unx.tar.gz をダウンロードします．<br>

```
$ sudo pkg install wget
$ wget http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz
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
$ sudo ./install-tl --repository http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/

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

```
$ sudo ./install-tl --profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するかまたは [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．<br>
インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．<br>

```
$ sudo /usr/local/texlive/????/bin/*/tlmgr path add
```

#### アップデート {#df800247}

アップデートは

```
$ sudo tlmgr update --self --all
```

を実行すれば OK です．<br>
（Portsでインストールした場合は tlmgr は使えないようにしているそうです．
こちらを参照:
[http://lists.freebsd.org/pipermail/freebsd-ports/2013-July/085001.html](http://lists.freebsd.org/pipermail/freebsd-ports/2013-July/085001.html) ）

ただし，アップデートによってパッケージや設定が変更されて，今まで動いていたものが動かなくなったりすることがあるかもしれません．<br>

- /usr/local/texlive/????/tlpkg/backups

にパッケージのバックアップが保存されます．<br>
アップデートによって動作しなくなった場合は以前のバージョンに戻してください．<br>

#### extractbb の追加 <a id="extractbb"></a> {#g07eb708}

TeX Live 2014 はデフォルトでは extractbb が自動実行されません．<br>
TEXMFLOCAL の値を確認します．<br>

```
$ kpsewhich -var-value TEXMFLOCAL
/usr/local/texlive/texmf-local
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
makeindex,mendex,texindy,xindy,\
mpost,upmpost,\
repstopdf,epspdf,extractbb
```

mktexlsr を実行します．<br>

```
$ sudo mktexlsr
```

#### フォント埋め込みの設定 {#tf6ceac1}

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

### TeX Live/FreeBSD {#p4fe1144}

- [http://www.freshports.org/print/texlive-full/](http://www.freshports.org/print/texlive-full/)
- [FreeBSD における TeXLive の導入](http://homepage3.nifty.com/maikaze/texlive1.html)
- [FreeBSDへのTeXliveインストール](http://sphinx-users.jp/cookbook/pdf/latex-install-freebsd.html)
- [FreeBSD のports TeXLive &amp; evince : 日本語フォントの設定 fonts.conf](http://blog.goo.ne.jp/koyusoma5102/e/4936476b9a197dda36799498a4bfd5c9)
- \[[FreeBSD\]texlive](http://barutan.s296.xrea.com/cgi-bin/tdiary/?date=20140726#p02)

## その他関連Ports {#k9078aba}

Portsですので，
make &amp;&amp; make installで導入できます．<br>

TeXlive と共存しないものが存在する場合は Makefile 中の変数 USE_TEX の中身を確認してください．<br>
USE_TEXの値の意味については，[/usr/ports/Mk/bsd.tex.mk](http://svnweb.freebsd.org/ports/head/Mk/bsd.tex.mk?view=markup) から参照できます．<br>
なお，bsd.tex.mkはUSE_TEXが定義されていればbsd.port.mk中でincludeされるため，別途読み込む必要はありません．<br>

<!-- ***TeXパッケージ [#z26b2356] -->
<!-- |latex-mathabx|print/latex-mathabx|Math series, aka mathabx MetaFont fontset for TeX/LaTeX| -->

#### TeXをバックエンドとして使うアプリケーション {#ba4b7bf1}

<table>
<tbody>
<tr><td><a href="/LyX/">LyX</a></td><td>print/lyx</td><td>Document processor interfaced with LaTeX (nearly WYSIWYG)</td></tr>
</tbody>
</table>

<!-- |jadetex|print/jadetex|A TeX backend for Jade, for typesetting SGML documents| -->
<!-- |ja-jadetex|japanese/jadetex-ptex|A pTeX backend for Jade, for typesetting SGML documents| -->
<!-- |smartdoc|textproc/smartdoc|XML utility to create various documents| -->

#### TeXソースの入力支援 {#z413bd5e}

<!-- |[[TeXmacs]]|editors/texmacs|A free WYSIWYG scientific text editor| -->

<table>
<tbody>
<tr><td><a href="/Texmaker/">Texmaker</a></td><td>editors/texmaker</td><td>LaTeX Development Environment</td></tr>
<tr><td><a href="/TeXworks/">TeXworks</a></td><td>editors/texworks</td><td>A simple TeX front-end program</td></tr>
<tr><td><a href="/AUCTeX/">AUCTeX</a></td><td>print/auctex</td><td>Integrated environment for writing LaTeX using GNU Emacs</td></tr>
<tr><td><a href="/YaTeX/">YaTeX</a></td><td>print/yatex</td><td>Yet Another LaTeX mode and html mode on Emacs</td></tr>
</tbody>
</table>

<!-- ***TeXソースからの変換 [#r0d43da9] -->
<!-- |detex|print/detex|Strips TeX/LaTeX codes from a file| -->
<!-- |latex2html|textproc/latex2html|Convert LaTeX documents to HTML| -->
<!-- |ja-latex2html|japanese/latex2html|Japanese LaTeX2HTML with JA patch| -->

#### DVIファイルからの変換 {#b5e1aa4a}

<table>
<tbody>
<tr><td>dvipdfmx</td><td>print/tex-dvipdfmx</td><td>Dvipdfm with Asian languages by CID-keyed font technology support</td></tr>
</tbody>
</table>

<!-- |dvi2tty|print/dvi2tty|A dvi-file previewer for text only devices| -->
<!-- |ja-dvi2tty|japanese/dvi2tty|Character-based DVI file previewer| -->

#### PostScript関連 {#v58c994c}

<table>
<tbody>
<tr><td>ghostview</td><td>print/ghostview</td><td>An X11 front-end for ghostscript, the GNU postscript previewer</td></tr>
<tr><td>gv</td><td>print/gv</td><td>A PostScript and PDF previewer</td></tr>
</tbody>
</table>

<!-- |psutils-a4|print/psutils-a4|Utilities for manipulating PostScript documents| -->
<!-- |psutils-letter|print/psutils-letter|Utilities for manipulating PostScript documents| -->
