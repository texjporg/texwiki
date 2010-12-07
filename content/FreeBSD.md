---
title: "FreeBSD"
url: "/FreeBSD/"
date: 2004-09-07T06:45:48Z
pukiwiki: "FreeBSD"
---

# FreeBSD

## FreeBSD {#r05903ba}

<strong>現在Ports CollectionのteTeX関連はteTeX 3.0ベースのものに置き換わっています．</strong>

<strong>この文書の内容は置き換わる前のものなので，多少の食い違いがあるかもしれません．</strong>

日本語TeX関連は[Ports Collection](http://www.freebsd.org/ports/)に収められています．

TeX Live については [freebsd-texlive](http://code.google.com/p/freebsd-texlive/) を参照してください．

### TeX関連のPort {#y07bcd98}

歴史的事情により，
teTeXベースのものに完全には置き換わっていません．
主要なものに関してはteTeXベースのPortが用意されています．

#### teTeX関連のPort {#c779326f}

- [print/teTeX-base](http://www.freebsd.org/cgi/cvsweb.cgi/ports/print/teTeX-base/)
- [japanese/ptex-tetex](http://www.freebsd.org/cgi/cvsweb.cgi/ports/japanese/ptex-tetex/)
- [japanese/dvipsk](http://www.freebsd.org/cgi/cvsweb.cgi/ports/japanese/dvipsk)
- [japanese/xdvik](http://www.freebsd.org/cgi/cvsweb.cgi/ports/japanese/xdvik)
- [japanese/xdvik-vflib](http://www.freebsd.org/cgi/cvsweb.cgi/ports/japanese/xdvik-vflib)
- [japanese/texfamily](http://www.freebsd.org/cgi/cvsweb.cgi/ports/japanese/texfamily)

\[[FreeBSD-users-jp 80203\]](http://home.jp.freebsd.org/cgi-bin/showmail/FreeBSD-users-jp/80203)によると，
次のものがteTeX環境と共存できないそうです．

japanese/ptex
: ASCII pTeX 本体 (バイナリ部分)

japanese/ptex-base
: ASCII pTeX 本体 (texmf tree 部分)

japanese/dvipsk-vflib
: dvips 5.78a + jpatch 1.4 (VFlib support)

また，
次のものが未整備のようです．

- japanese/platex209-\*
- japanese/dvi\*

### インストール {#e765b64c}

手っ取り早く構築するには，

```
# cd /usr/ports/japanese/teTeX && make && make install
```

とします．
japanese/teTeXは日本語TeX関連PortsのMeta-Portsです．
GhostScriptやフォント関連は基本的に依存関係で自動的に導入されます．
ただし，
GhostScriptの日本語環境はjapanese/ghostscript-gnu-jpnfont
を導入する必要があります．

```
# cd /usr/ports/japanese/ghostscript-gnu-jpnfont && make && make install
```

[新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/%7eokumura/jsclasses/)はjapanese/platex-jsclassesにあるので，お好みにより

```
# cd /usr/ports/japanese/platex-jsclasses && make && make install
```

するといいでしょう．

### その他関連Ports {#k9078aba}

Portsですので，
make &amp;&amp; make installで導入できます．

#### TeXパッケージ {#z26b2356}

<table>
<tbody>
<tr><td>latex-mathabx</td><td>print/latex-mathabx</td><td>Math series, aka mathabx MetaFont fontset for TeX/LaTeX</td></tr>
</tbody>
</table>

#### TeXソースの入力支援 {#z413bd5e}

<table>
<tbody>
<tr><td>yatex</td><td>print/yatex</td><td>Yet Another LaTeX mode and html mode on Emacs (for Emacs{19,20} and XEmacs{19,20})</td></tr>
<tr><td>TeXmacs</td><td>editors/texmacs</td><td>A free WYSIWYG scientific text editor.</td></tr>
<tr><td>auctex</td><td>print/auctex</td><td>Integrated environment for writing LaTeX using GNU Emacs</td></tr>
<tr><td>ja-plain2</td><td>japanese/plain2</td><td>A text converter from plain to any format</td></tr>
<tr><td>tgif2tex</td><td>print/tgif2tex</td><td>Converting texts in figure by tgif to LaTeX commands</td></tr>
</tbody>
</table>

#### TeXソースからの変換 {#r0d43da9}

<table>
<tbody>
<tr><td>detex</td><td>print/detex</td><td>Strips TeX/LaTeX codes from a file</td></tr>
<tr><td>latex2html</td><td>textproc/latex2html</td><td>Convert LaTeX documents to HTML</td></tr>
<tr><td>ja-latex2html</td><td>japanese/latex2html</td><td>Japanese LaTeX2HTML with JA patch</td></tr>
</tbody>
</table>

#### DVIファイルからの変換 {#b5e1aa4a}

<table>
<tbody>
<tr><td>dvipdfmx</td><td>print/dvipdfmx</td><td>Dvipdfm with Asian languages by CID-keyed font technology support</td></tr>
<tr><td>dvi2tty</td><td>print/dvi2tty</td><td>A dvi-file previewer for text only devices</td></tr>
<tr><td>ja-dvi2tty</td><td>japanese/dvi2tty</td><td>Character-based DVI file previewer</td></tr>
</tbody>
</table>

#### PostScript関連 {#v58c994c}

<table>
<tbody>
<tr><td>ghostview</td><td>print/ghostview</td><td>An X11 front-end for ghostscript, the GNU postscript previewer</td></tr>
<tr><td>gv</td><td>print/gv</td><td>A PostScript and PDF previewer</td></tr>
<tr><td>psutils-a4</td><td>print/psutils-a4</td><td>Utilities for manipulating PostScript documents</td></tr>
<tr><td>psutils-letter</td><td>print/psutils-letter</td><td>Utilities for manipulating PostScript documents</td></tr>
</tbody>
</table>

#### TeXをバックエンドとして使うアプリケーション {#ba4b7bf1}

<table>
<tbody>
<tr><td>jadetex</td><td>print/jadetex</td><td>A TeX backend for Jade, for typesetting SGML documents</td></tr>
<tr><td>ja-jadetex</td><td>japanese/jadetex-ptex</td><td>A pTeX backend for Jade, for typesetting SGML documents</td></tr>
<tr><td>lyx</td><td>print/lyx</td><td>Document processor interfaced with LaTeX (nearly WYSIWYG)</td></tr>
<tr><td>cjk-lyx</td><td>print/cjk-lyx</td><td>Document processor interfaced with LaTeX, with CJK support</td></tr>
<tr><td>smartdoc</td><td>textproc/smartdoc</td><td>XML utility to create various documents</td></tr>
</tbody>
</table>
