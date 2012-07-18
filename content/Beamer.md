---
title: "Beamer"
url: "/Beamer/"
date: 2011-06-11T21:53:53Z
pukiwiki: "Beamer"
---

# Beamer

## [Beamer](http://bitbucket.org/rivanvx/beamer/) {#wc0b104e}

<strong>目次</strong>

### Beamer とは {#g7e9b20e}

Beamer は プレゼンテーション用の LaTeX クラスです．

#### [LaTeX Beamer class](http://bitbucket.org/rivanvx/beamer/) {#n3e24f61}

- 2011/09/19 以降の [W32TeX](/W32TeX/) には標準で含まれています．
- Beamer は [LuaTeX-ja](/LuaTeX/#nec94db0) も使用できます．
- [Beamer 公式サイト](http://bitbucket.org/rivanvx/beamer/)
    - [コミットログ](https://bitbucket.org/rivanvx/beamer/changesets)
    - [ダウンロード](https://bitbucket.org/rivanvx/beamer/downloads)
        <!-- - --https://bitbucket.org/rivanvx/beamer/get/tip.zip -->
        <!-- - --https://bitbucket.org/rivanvx/beamer/get/tip.tar.gz -->
        <!-- - --https://bitbucket.org/rivanvx/beamer/get/tip.tar.bz2 -->

- [CTAN:help/Catalogue/entries/beamer.html](https://mirror.ctan.org/help/Catalogue/entries/beamer.html)
- [http://www.ctan.org/tex-archive/macros/latex/contrib/beamer/](http://www.ctan.org/tex-archive/macros/latex/contrib/beamer/)

### 不具合 {#d9dfcf20}

[Issues](https://bitbucket.org/rivanvx/beamer/issues?status=new&status=open) を参照．

#### Beamer 3.18 で dvipdfm(x) を使用すると block 環境の影がおかしくなる → Beamer 3.19 で修正されました {#pc9c1e18}

- [#161 \[Patch\] Real transparency for box shadows](https://bitbucket.org/rivanvx/beamer/issue/161/patch-real-transparency-for-box-shadows)
- [#192 beamer 3.18 with dvipdfmx breaks the shadow of block environments](https://bitbucket.org/rivanvx/beamer/issue/192/beamer-318-with-dvipdfmx-breaks-the-shadow) → resolved
- beamer 3.18 &amp; texlive 2011 ([qa:56746](https://okumuralab.org/~okumura/texfaq/qa/56746.html), [qa:56747](https://okumuralab.org/~okumura/texfaq/qa/56747.html), [qa:56748](https://okumuralab.org/~okumura/texfaq/qa/56748.html), [QA: beamer 3.18 &amp; texlive 2011](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=815))

#### Beamer 公式サイトのファイルを使用するとエラーが発生する {#i1ba3f44}

- [#10 Problem with ClassRCS and PackageRCS from beamerbasercs](https://bitbucket.org/rivanvx/beamer/issue/10/problem-with-classrcs-and-packagercs-from)
- [#36 Cannot resolve codes around RCS --- we need another software?](https://bitbucket.org/rivanvx/beamer/issue/36/cannot-resolve-codes-around-rcs-we-need)
- [#56 Run latest beamer error in ubuntu 10.04](https://bitbucket.org/rivanvx/beamer/issue/56/run-latest-beamer-error-in-ubuntu-1004)
- [beamer コンパイル中のエラー](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=462)
- [Beamer 3.10 にアップグレードした](http://d.hatena.ne.jp/triadsou/20101110/1289357503)
- [https://bitbucket.org/rivanvx/beamer/wiki/Home#!development](https://bitbucket.org/rivanvx/beamer/wiki/Home#!development)

Beamer 公式サイトからファイルをダウンロードして使用すると以下のようなエラーが発生します．

```
Runaway argument?
Header$ \ProvidesPackage {\beamer@rcsfile }[\beamer@rcsdate \space (r\ETC.
! File ended while scanning use of \beamer@parseid.
<inserted text>
                \par
l.12 \ProvidesClassRCS
                       $Header$
```

CTAN の Beamer では発生しなかったので CTAN からダウンロードして使用することをおすすめします．

### [TikZ and PGF](/TikZ/) {#o6f8726a}

- 2011/09/20 以降の [W32TeX](/W32TeX/) には標準で含まれています．
- e-TeX 拡張が必要 ([qa:53665](https://okumuralab.org/~okumura/texfaq/qa/53665.html), [qa:53666](https://okumuralab.org/~okumura/texfaq/qa/53666.html), [qa:53672](https://okumuralab.org/~okumura/texfaq/qa/53672.html))
- [CTAN:help/Catalogue/entries/pgf.html](https://mirror.ctan.org/help/Catalogue/entries/pgf.html)
- [latex-beamerと日本語とdvipdfmxでtikzを使う](http://slashdot.jp/~ujimushi/journal/526101)

### [xcolor](http://www.ukern.de/tex/xcolor.html) {#j904c1e1}

- 2011/09/20 以降の [W32TeX](/W32TeX/) には標準で含まれています．
- [CTAN:help/Catalogue/entries/xcolor.html](https://mirror.ctan.org/help/Catalogue/entries/xcolor.html)

### [extsizes](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/extsizes.html) {#e19a97f8}

- 2011/09/20 以降の [W32TeX](/W32TeX/) には標準で含まれています．
- [CTAN:help/Catalogue/entries/extsizes.html](https://mirror.ctan.org/help/Catalogue/entries/extsizes.html)

### [LaTeX beamerposter](http://www-i6.informatik.rwth-aachen.de/~dreuw/latexbeamerposter.php) {#pabd14ab}

- [CTAN:help/Catalogue/entries/beamerposter.html](https://mirror.ctan.org/help/Catalogue/entries/beamerposter.html)
- [Beamer ポスター入門](http://www.ms.u-tokyo.ac.jp/~tado/beamer/poster.html)
- [LaTeXでポスターを作る](http://d.hatena.ne.jp/hkhn/comment?date=20110303)

### [wiki2beamer](http://wiki2beamer.sourceforge.net/) {#q47a5bc8}

- [http://sourceforge.net/projects/wiki2beamer/](http://sourceforge.net/projects/wiki2beamer/)
- [Wiki発Latex・PDF経由プレゼン行き「Wiki2Beamer」](http://www.moongift.jp/2007/05/wiki2beamer/)

### Beamer Themes {#r446ce9a}

- [The progressbar Beamer theme](http://recherche.noiraudes.net/fr/LaTeX.php)
- [http://www.pletscher.org/writings/latex/beamerthemes.php](http://www.pletscher.org/writings/latex/beamerthemes.php)
- [http://mike.depalatis.net/beamerthemes/](http://mike.depalatis.net/beamerthemes/)
- [Keynote Like Gradient Theme for LaTeX Beamer (時計じかけの林檎)](http://sites.google.com/site/tokeijikakenoringo/Home/keynote-like-gradient-theme-for-latex-beamer)
- [LaTeX-beamerのテンプレート](http://d.hatena.ne.jp/ckazu/20090217/1234857766)

### 関連リンク {#tfca5d80}

- [Beamer (辻研究室)](http://neurodynamics.jp/etc/beamer)
- [Beamer V3.0 を使ってみる](http://www-an.acs.i.kyoto-u.ac.jp/~fujiwara/tex/beamer.html) (dvips利用)
- [latex-beamer を使ってみる](http://www.pocus.jp/p-latex-main.html#latex-beamer) (dvipdfmx利用)
- [LaTeX Beamerでプレゼンテーション](http://windom.phys.hirosaki-u.ac.jp/fswiki/wiki.cgi?page=LaTeX+Beamer%A4%C7%A5%D7%A5%EC%A5%BC%A5%F3%A5%C6%A1%BC%A5%B7%A5%E7%A5%F3) (dvipdfmx利用)
- [Windows 7にBemerを入れた時の作業メモ](http://d.hatena.ne.jp/teramonagi/20120324/1332574760)
- [Beamer 3.10 にアップグレードした](http://d.hatena.ne.jp/triadsou/20101110/1289357503)
- [LaTeX-Beamer - .R. Wiki](http://locs.bw.nitech.ac.jp/~kobayashi/fswiki/wiki.cgi?page=LaTeX-Beamer)
- [Windows XPにおけるbeamerのセットアップ作業のメモ](http://yoshiiz.blog129.fc2.com/blog-entry-190.html)
- [Beamer, geometry package のアップデートで不具合](http://d.hatena.ne.jp/triadsou/20100303/1267607085)
- [LaTeX Beamer 入門](http://www.ms.u-tokyo.ac.jp/~tado/beamer/)
- [Windows XP に LaTeX beamer をいれる](http://aaaaushisan.blogspot.com/2011/06/windows-xp-latex-beamer.html)
- [XeLaTeXで日本語beamer](http://d.hatena.ne.jp/tizz/20100505/)
- [LaTeX+Beamerでtableofcontentsは決してできない](http://blomott.mobi/rubyneko/entry%2CMnZntmATC-OCUhEBedf7yQ%2C%2C%2C%2C.html)
- [LaTeX + Beamer + Macで\tableofcontents{}ができないときの処方箋](http://blomott.mobi/rubyneko/entry%2CQNT1bI-wQBEF7V6ZF5N8sg%2C%2C%2C%2C.html)
- [パワポは苦手！理工系のためのプレゼンツールBeamer](http://d.hatena.ne.jp/wkmy/20110829/1314611076)
- [Beamerでプレゼン資料を作る](http://wiki.livedoor.jp/fuhmi/d/%CA%AA%C3%D6)
- [A Beamer Quickstart](http://www.math.umbc.edu/~rouben/beamer/)
- [Lyx で Beamer](http://hasundue.hatenablog.com/entry/2012/06/17/134329)
- [powerdot with beamerboxesrounded](https://gist.github.com/3139838)

### TeX ► QA ► フォーラム ► 一般フォーラム ► {#u64515a4}

- [beamerでの数式フォントの変更](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=729)
- [bemaerによるプレゼンテーション](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=700)
- [Beamerの使い方について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=611)
- [beamer 3.10について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=566)
- [beamer コンパイル中のエラー](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=462)
- [beamerでmovieの上に画像の貼り付け](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=399)
- [beamerでxy-picを使いたい](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=360)
- [beamerでceo.styを活用したい](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=357)
- [XeLaTeX で Beamer クラスを使用する際の日本語フォントの指定について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=317)

<!-- **TeX Q & A [#n18c085c] -->
