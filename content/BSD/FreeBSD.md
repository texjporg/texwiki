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

- [Ports svn r317904 UPDATING 20130511](http://svnweb.freebsd.org/ports/head/UPDATING?r1=317568&r2=317904) にて，Port make時の変数 TEX_DEFAULT を tetex （2013年7月現在こちらが既定値）にするか texlive にするかで，teTeXにするかTeXliveにするかを選べるようになりました．

- [About FreeBSD Ports](http://www.freebsd.org/ports/)
- [FreshPorts -- The Place For Ports](http://www.freshports.org/)

## TeX Live <a id="texlive"></a> {#w7ff21ac}

- [FreshPorts -- print/texlive-full](http://www.freshports.org/print/texlive-full/)

FreeBSD で [TeX Live](</TeX Live/>) をインストールする場合は

- ports を使わずに TeX Live の公式パッケージをインストールする
- ports を使って TeX Live をインストールする
    - 日本語環境は print/texlive-full と japanese/tex-ptex をインストールすることで，従来のpLaTeXやdvipdfmxと同名同等のコマンドが利用できるようになる (/etc/make.conf にて TEX_DEFAULT=texlive と書いておくほうが良いでしょう）

方法があります．

### TeX Live 関連 {#p4fe1144}

- [freebsd-texlive](https://code.google.com/p/freebsd-texlive/)
    - [print/texlive-core](https://code.google.com/p/freebsd-texlive/source/browse/trunk/print/texlive-core/)
    - [print/texlive-collection-langcjk](https://code.google.com/p/freebsd-texlive/source/browse/branches/releng/print/texlive-collection-langcjk/)
- [print/texlive-tlptexlive](https://github.com/HirotoKagotani/freebsd-texlive-tlptexlive)
- [FreeBSDへのTeXliveインストール](http://sphinx-users.jp/cookbook/pdf/latex-install-freebsd.html)
- [「texlive」の検索結果 - msllの日記](http://d.hatena.ne.jp/msll/searchdiary?word=texlive)
- [TeX Live 2012 on FreeBSD Extended support](http://anthesphoria.net/FreeBSD/TeXLive-2012/bin/)

## その他関連Ports {#k9078aba}

Portsですので，
make &amp;&amp; make installで導入できます．

（多くのPortがまだteTeXを前提としているため，TeXliveとは共存しないものが多数あります．Makefile中の変数 USE_TEX の中身を確認してください．USE_TEXの値の意味については，[/usr/ports/Mk/bsd.tex.mk](http://svnweb.freebsd.org/ports/head/Mk/bsd.tex.mk?view=markup) から参照できます．なお，bsd.tex.mkはUSE_TEXが定義されていればbsd.port.mk中でincludeされるため，別途読み込む必要はありません．）

<!-- ***TeXパッケージ [#z26b2356] -->
<!-- |latex-mathabx|print/latex-mathabx|Math series, aka mathabx MetaFont fontset for TeX/LaTeX| -->

#### TeXソースの入力支援 {#z413bd5e}

<!-- |[[TeXmacs]]|editors/texmacs|A free WYSIWYG scientific text editor| -->
<!-- |[[Texmaker]]|editors/texmaker|LaTeX Development Environment| -->

<table>
<tbody>
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
<tr><td>dvipdfmx</td><td>print/dvipdfmx</td><td>Dvipdfm with Asian languages by CID-keyed font technology support</td></tr>
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

#### TeXをバックエンドとして使うアプリケーション {#ba4b7bf1}

<table>
<tbody>
<tr><td><a href="/LyX/">LyX</a></td><td>print/lyx</td><td>Document processor interfaced with LaTeX (nearly WYSIWYG)</td></tr>
</tbody>
</table>

<!-- |jadetex|print/jadetex|A TeX backend for Jade, for typesetting SGML documents| -->
<!-- |ja-jadetex|japanese/jadetex-ptex|A pTeX backend for Jade, for typesetting SGML documents| -->
<!-- |smartdoc|textproc/smartdoc|XML utility to create various documents| -->
