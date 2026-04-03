---
title: "BSD/FreeBSD"
url: "/BSD/FreeBSD/"
date: 2013-04-24T02:38:32Z
pukiwiki: "BSD/FreeBSD"
---

# BSD/FreeBSD

[BSD](/BSD/) > FreeBSD

## [FreeBSD](https://www.freebsd.org) {#r05903ba}

***

***

## FreeBSD とは {#o8689db1}

FreeBSD はオープンソースの Unix 系オペレーティングシステムです．

- [The FreeBSD Project](https://www.freebsd.org)

### Ports {#j8583985}

- [About FreeBSD Ports](https://www.freebsd.org/ports/)
- [FreshPorts -- The Place For Ports](http://www.freshports.org/)

### 派生版 {#t29f2245}

- [GhostBSD](https://www.ghostbsd.org/)
- [TrueOS](https://www.trueos.org/)

## TeX Live <a id="texlive"></a> {#w7ff21ac}

- [https://cgit.freebsd.org/ports/tree/print/texlive-full](https://cgit.freebsd.org/ports/tree/print/texlive-full)
- [FreshPorts -- print/texlive-full](http://www.freshports.org/print/texlive-full/)

FreeBSD で [TeX Live](</TeX Live/>) をインストールする場合は

- ports を使わずに TeX Live の公式パッケージをインストールする
- ports を使って TeX Live をインストールする
    - 日本語環境は print/texlive-full をインストールすることで，従来の pLaTeX や dvipdfmx と同名同等のコマンドが利用できるようになる

方法があります．

### TeX Live 公式パッケージ {#la53cbe5}

#### TeX Live のインストール <a id="texliveinstall"></a> {#v92cb887}

- [https://www.tug.org/texlive/quickinstall.html](https://www.tug.org/texlive/quickinstall.html)
- [https://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](https://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)
- [Storage@Anthesphoria: TeX Live on FreeBSD | TeX Live 2014 on FreeBSD | Notes for FreeBSD users](http://anthesphoria.net/FreeBSD/TeXLive-2014/)

を参照．

[ミラーサイト](</TeX Live/#tlnet>)から install-tl-unx.tar.gz をダウンロードします．

```
$ sudo pkg install curl
$ wcurl https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
```

install-tl-unx.tar.gz を展開します．

```
$ tar xvf install-tl-unx.tar.gz
```

展開したインストーラのディレクトリに移動します．

```
$ cd install-tl-2*
```

root 権限でインストーラを実行します．
オプションでダウンロードするリポジトリを指定できます．

```
$ sudo ./install-tl -no-gui -repository https://mirror.ctan.org/systems/texlive/tlnet/

...

Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit

Enter command: I
```

I を入力してインストールを開始します．
サーバーの接続エラーが発生したり，アーカイブ中に予期せぬ EOF があったりした場合はインストールが途中でストップします．
エラーが発生した場合は以下のコマンドで途中から再開できたりできなかったりします．<br>

```
$ sudo ./install-tl -no-gui -profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

再開できない場合は[接続先を変更](</TeX Live/#tlnet>)してください．
インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．

```
$ sudo /usr/local/texlive/????/bin/*/tlmgr path add
```

#### アップデート {#df800247}

アップデートは

```
$ sudo tlmgr update --self --all
```

を実行すれば OK です．<br>
（Ports でインストールした場合は [tlmgr](/tlmgr/) は使えないようにしているそうです．
こちらを参照:
[https://lists.freebsd.org/pipermail/freebsd-ports/2013-July/085001.html](https://lists.freebsd.org/pipermail/freebsd-ports/2013-July/085001.html) ）

ただし，アップデートによってパッケージや設定が変更されて，今まで動いていたものが動かなくなったりすることがあるかもしれません．

- /usr/local/texlive/????/tlpkg/backups

にパッケージのバックアップが保存されます．
アップデートによって動作しなくなった場合は以前のバージョンに戻してください．

### TeX Live/FreeBSD {#p4fe1144}

- [https://cgit.freebsd.org/ports/commit/print/texlive-base?id=993771b186bca2a5de9fa00f7f6788763306417c](https://cgit.freebsd.org/ports/commit/print/texlive-base?id=993771b186bca2a5de9fa00f7f6788763306417c) にて，Ports は TeX Live 2025 ベースとなりました．
- [http://www.freshports.org/print/texlive-full/](http://www.freshports.org/print/texlive-full/)
- [TeX Live on FreeBSD](http://maikaze.cafe.coocan.jp/texlive.html)

## その他関連Ports {#k9078aba}

Portsですので，
make &amp;&amp; make installで導入できます．

<!-- ***TeXパッケージ [#z26b2356] -->
<!-- |latex-mathabx|print/latex-mathabx|Math series, aka mathabx MetaFont fontset for TeX/LaTeX| -->

#### TeXをバックエンドとして使うアプリケーション {#ba4b7bf1}

<table>
<tbody>
<tr><td><a href="/LyX/">LyX</a></td><td><a href="https://www.freshports.org/print/lyx/">print/lyx</a></td><td>Document processor interfaced with LaTeX (nearly WYSIWYG)</td></tr>
</tbody>
</table>

<!-- |jadetex|print/jadetex|A TeX backend for Jade, for typesetting SGML documents| -->
<!-- |ja-jadetex|japanese/jadetex-ptex|A pTeX backend for Jade, for typesetting SGML documents| -->
<!-- |smartdoc|textproc/smartdoc|XML utility to create various documents| -->

#### TeXソースの入力支援 {#z413bd5e}

<!-- |[[TeXmacs]]|editors/texmacs|A free WYSIWYG scientific text editor| -->

<table>
<tbody>
<tr><td><a href="/TeXstudio/">TeXstudio</a></td><td><a href="https://www.freshports.org/editors/texstudio/">editors/texstudio</a></td><td>Integrated writing environment for LaTeX documents</td></tr>
<tr><td><a href="/Texmaker/">Texmaker</a></td><td><a href="https://www.freshports.org/editors/texmaker/">editors/texmaker</a></td><td>LaTeX Development Environment</td></tr>
<tr><td><a href="/TeXworks/">TeXworks</a></td><td><a href="https://www.freshports.org/editors/texworks/">editors/texworks</a></td><td>Simple TeX front-end program</td></tr>
<tr><td><a href="/Enter TeX/">Enter TeX</a></td><td><a href="https://www.freshports.org/editors/enter-tex/">editors/enter-tex</a></td><td>Integrated TeX/LaTeX editor</td></tr>
<tr><td><a href="/AUCTeX/">AUCTeX</a></td><td><a href="https://www.freshports.org/print/auctex/">print/auctex</a></td><td>Integrated environment for writing LaTeX using GNU Emacs</td></tr>
<tr><td><a href="/YaTeX/">YaTeX</a></td><td><a href="https://www.freshports.org/print/yatex/">print/yatex</a></td><td>Yet Another LaTeX mode and html mode on Emacs</td></tr>
</tbody>
</table>

<!-- ***TeXソースからの変換 [#r0d43da9] -->
<!-- |detex|print/detex|Strips TeX/LaTeX codes from a file| -->
<!-- |latex2html|textproc/latex2html|Convert LaTeX documents to HTML| -->
<!-- |ja-latex2html|japanese/latex2html|Japanese LaTeX2HTML with JA patch| -->

#### DVIファイルからの変換 {#b5e1aa4a}

<table>
<tbody>
<tr><td><a href="/dvipdfmx/">dvipdfmx</a></td><td><a href="https://www.freshports.org/print/tex-dvipdfmx/">print/tex-dvipdfmx</a></td><td>Dvipdfm with Asian languages by CID-keyed font technology support</td></tr>
</tbody>
</table>

<!-- |dvi2tty|print/dvi2tty|A dvi-file previewer for text only devices| -->
<!-- |ja-dvi2tty|japanese/dvi2tty|Character-based DVI file previewer| -->

#### PDF/PostScript関連 {#v58c994c}

<table>
<tbody>
<tr><td><a href="/Ghostscript/">Ghostscript</a></td><td><a href="https://www.freshports.org/print/ghostscript10/">print/ghostscript10</a></td><td>PostScript and PDF interpreter</td></tr>
<tr><td><a href="/Okular/">Okular</a></td><td><a href="https://www.freshports.org/graphics/okular">graphics/okular</a></td><td>KDE universal document viewer</td></tr>
<tr><td><a href="/Papers/">Papers</a></td><td><a href="https://www.freshports.org/graphics/papers">graphics/papers</a></td><td>View multipage documents</td></tr>
<tr><td><a href="/Atril/">Atril</a></td><td><a href="https://www.freshports.org/graphics/atril">graphics/atril</a></td><td>MATE multi-format document viewer</td></tr>
<tr><td><a href="/zathura/">zathura</a></td><td><a href="https://www.freshports.org/graphics/zathura">graphics/zathura</a></td><td>Customizable lightweight pdf viewer</td></tr>
</tbody>
</table>

<!-- |ghostview|[[print/ghostview:https://www.freshports.org/print/ghostview/]]|An X11 front-end for ghostscript, the GNU postscript previewer| -->
<!-- |gv|[[print/gv:https://www.freshports.org/print/gv/]]|A PostScript and PDF previewer| -->
<!-- |psutils-a4|print/psutils-a4|Utilities for manipulating PostScript documents| -->
<!-- |psutils-letter|print/psutils-letter|Utilities for manipulating PostScript documents| -->
