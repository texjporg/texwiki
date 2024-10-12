---
title: "Beamer"
url: "/Beamer/"
date: 2011-06-11T21:53:53Z
pukiwiki: "Beamer"
---

# Beamer

## Beamer {#wc0b104e}

Beamer は プレゼンテーション用の LaTeX クラスです．

- [https://ctan.org/pkg/beamer](https://ctan.org/pkg/beamer)
- [https://github.com/josephwright/beamer](https://github.com/josephwright/beamer)
- [https://bitbucket.org/rivanvx/beamer/wiki/Home](https://bitbucket.org/rivanvx/beamer/wiki/Home)

### 目次 {#xf53b953}

### リリース情報 {#y60fd622}

[Releases](https://github.com/josephwright/beamer/releases) を参照．

### ChangeLog {#td463767}

- [CHANGELOG.md](https://github.com/josephwright/beamer/blob/main/CHANGELOG.md)
- [コミットログ](https://github.com/josephwright/beamer/commits/main/)

を参照．

### 利用可能な TeX ディストリビューション {#k1d828cf}

Beamer は

- [TeX Live](</TeX Live/>)
- [MiKTeX](/MiKTeX/)

で利用可能です．

- LuaLaTeX の場合は [LuaTeX-ja](/LuaTeX-ja/) で日本語文書が作成できます．
- XeLaTeX の場合は [xeCJK/ZXjatype](/xeCJK/) で日本語文書が作成できます．
- pdfLaTeX の場合は [CJK LaTeX/BXcjkjatype](/LaTeX-CJK/) で日本語文書が作成出来ます．

## 不具合 {#d9dfcf20}

[Issues](https://github.com/josephwright/beamer/issues) を参照．

<!-- **Beamer Re­pos­i­tory のファイルを使用するとエラーが発生する → CTAN からダウンロードする [#i1ba3f44] -->
<!--  -->
<!-- 修正されたようです - -&gt; https://github.com/josephwright/beamer/commit/ca843ebe45f73daf88efc1f6ccd56456bdaa9067 -->
<!--  -->
<!-- -[[#10 Problem with ClassRCS and PackageRCS from beamerbasercs:https://github.com/josephwright/beamer/issues/10]] -->
<!-- -[[#36 Cannot resolve codes around RCS - -- we need another software?:https://github.com/josephwright/beamer/issues/36]] -->
<!-- -[[#56 Run latest beamer error in ubuntu 10.04:https://github.com/josephwright/beamer/issues/56]] -->
<!-- -[[beamer コンパイル中のエラー:https://okumuralab.org/tex/mod/forum/discuss.php?d=462]] -->
<!-- -[[Beamer 3.10 にアップグレードした:http://d.hatena.ne.jp/triadsou/20101110/1289357503]] -->
<!-- -https://bitbucket.org/rivanvx/beamer/wiki/Home#markdown-header-development -->
<!--  -->
<!-- Beamer Re­pos­i­tory からファイルをダウンロードして使用すると以下のようなエラーが発生します． -->
<!--  -->
<!-- Runaway argument? -->
<!-- Header$ \ProvidesPackage {\beamer@rcsfile }[\beamer@rcsdate \space (r\ETC. -->
<!-- ! File ended while scanning use of \beamer@parseid. -->
<!-- <inserted text> -->
<!--                 \par -->
<!-- l.12 \ProvidesClassRCS -->
<!--                        $Header$ -->
<!--  -->
<!-- CTAN の Beamer では発生しなかったので CTAN からダウンロードして使用することをおすすめします． -->

### dvipdfmx, XeLaTeX でナビゲーションシンボルと \framezoom が機能しない → [bxdpx-beamer](https://ctan.org/tex-archive/macros/latex/contrib/beamer-contrib/bxdpx-beamer) パッケージを使用する {#v3f3e1ec}

bxdpx-beamer パッケージは TeX Live に含まれています．<br>

- [LaTeX: to make the navigation symbols (and \framezoom) work with dvipdfmx](https://gist.github.com/zr-tex8r/4980892)
- [Beamer は dvipdfmx をサポートするか否か？ (1)](http://d.hatena.ne.jp/zrbabbler/20130220/1361318258)
- [Beamer は dvipdfmx をサポートするか否か？ (2)](http://d.hatena.ne.jp/zrbabbler/20130221/1361455788)
- [Beamer は dvipdfmx をサポートするか否か？ (3)](http://d.hatena.ne.jp/zrbabbler/20130303/1362319511)
- [おっ、platex+dvipdfmxで拡大表示ができるようになった！？](http://blog.livedoor.jp/ti5942/archives/7760380.html)
- [「XeLaTeX でナビゲーションシンボルが機能しない →bxdpx-beamerパッケージを使う」がいい！？](http://blog.livedoor.jp/ti5942/archives/7765237.html)

## ダウンロード {#o77feabf}

- [https://github.com/josephwright/beamer/releases](https://github.com/josephwright/beamer/releases)
- [CTAN:macros/latex/contrib/beamer](https://mirror.ctan.org/macros/latex/contrib/beamer)

### Arch Linux {#h5c71065}

- [https://aur.archlinux.org/packages/latex-beamer/](https://aur.archlinux.org/packages/latex-beamer/)

### Linux Mint {#x6d699a5}

- [https://packages.ubuntu.com/ja/texlive-latex-recommended](https://packages.ubuntu.com/ja/texlive-latex-recommended)

### Debian {#h1b8334f}

- [https://packages.debian.org/ja/texlive-latex-recommended](https://packages.debian.org/ja/texlive-latex-recommended)

## Beamer 関連パッケージ {#k4220bf5}

### [TikZ/PGF](/TikZ/) {#o6f8726a}

- [TikZ - TeX Wiki](/TikZ/)
- [latex-beamerと日本語とdvipdfmxでtikzを使う](http://srad.jp/~ujimushi/journal/526101)

### [xcolor](http://www.ukern.de/tex/xcolor.html) {#j904c1e1}

- [CTAN:macros/latex/contrib/xcolor](https://mirror.ctan.org/macros/latex/contrib/xcolor)
- [All about colors](http://www.math.umbc.edu/~rouben/beamer/quickstart-Z-H-25.html#node_sec_25)

### [extsizes](http://xyoshiki.web.fc2.com/tex/extsizes.html) {#e19a97f8}

- [CTAN:macros/latex/contrib/extsizes](https://mirror.ctan.org/macros/latex/contrib/extsizes)

### [LaTeX beamerposter](http://www-i6.informatik.rwth-aachen.de/~dreuw/latexbeamerposter.php) {#pabd14ab}

- [CTAN:macros/latex/contrib/beamerposter](https://mirror.ctan.org/macros/latex/contrib/beamerposter)
- [Beamer ポスター入門](http://www.ms.u-tokyo.ac.jp/~tado/beamer/poster.html)
- [LaTeXでポスターを作る](http://d.hatena.ne.jp/hkhn/comment?date=20110303)

### [wiki2beamer](http://wiki2beamer.sourceforge.net/) {#q47a5bc8}

- [https://sourceforge.net/projects/wiki2beamer/](https://sourceforge.net/projects/wiki2beamer/)
- [Wiki発Latex・PDF経由プレゼン行き「Wiki2Beamer」](http://www.moongift.jp/2007/05/wiki2beamer/)

### Beamer Themes {#r446ce9a}

- [LaTeX Beamer Themes](http://latex.simon04.net/)
- [LaTeX Beamerの"Beamerらしく"ないおすすめテーマ集](https://qiita.com/htlsne/items/70cbb488e7a87cd9e228)
- [Beamer mtheme](https://github.com/matze/mtheme)
- [LaTeX Beamerにカスタムテーマをインストールして使う](http://d.hatena.ne.jp/muupan/20130922/1379830899)
- [Beamer Theme Matrix](http://www.hartwork.org/beamer-theme-matrix/)
- [kmbeamer](https://github.com/kmaed/kmbeamer)
- [Epyt](https://github.com/zohooo/epyt)
- [The progressbar Beamer theme](http://recherche.noiraudes.net/fr/LaTeX.php)
- [http://mike.depalatis.net/beamerthemes/](http://mike.depalatis.net/beamerthemes/)
- [Keynote Like Gradient Theme for LaTeX Beamer (時計じかけの林檎)](https://sites.google.com/site/tokeijikakenoringo/Home/keynote-like-gradient-theme-for-latex-beamer)
- [LaTeX-beamerのテンプレート](http://d.hatena.ne.jp/ckazu/20090217/1234857766)
- [LATEX resources for Rice students by Daina Chiba](http://ricebeamer.dynaman.net)

## TeX ► QA ► フォーラム ► 一般フォーラム ► {#u64515a4}

- [Beamerで「メイリオ」フォントを使う方法](https://okumuralab.org/tex/mod/forum/discuss.php?d=1036)
- [MacTex2012で日本語beamer文書のコンパイルエラー](https://okumuralab.org/tex/mod/forum/discuss.php?d=941)
- [beamer の CambridgeUS などでの \tableofcontents の番号（\setcounter が反映されない）](https://okumuralab.org/tex/mod/forum/discuss.php?d=926)
- [beamerでの数式フォントの変更](https://okumuralab.org/tex/mod/forum/discuss.php?d=729)
- [bemaerによるプレゼンテーション](https://okumuralab.org/tex/mod/forum/discuss.php?d=700)
- [Beamerの使い方について](https://okumuralab.org/tex/mod/forum/discuss.php?d=611)
- [beamerでmovieの上に画像の貼り付け](https://okumuralab.org/tex/mod/forum/discuss.php?d=399)
- [beamerでxy-picを使いたい](https://okumuralab.org/tex/mod/forum/discuss.php?d=360)
- [beamerでceo.styを活用したい](https://okumuralab.org/tex/mod/forum/discuss.php?d=357)
- [XeLaTeX で Beamer クラスを使用する際の日本語フォントの指定について](https://okumuralab.org/tex/mod/forum/discuss.php?d=317)

<!-- **TeX Q & A [#n18c085c] -->

## 関連リンク {#tfca5d80}

- [「Beamer」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=Beamer)
- [ZR-TeXnobabbler/「Beamer」の検索結果 - Twilog](http://twilog.org/tweets.cgi?id=zr_tex8r&word=Beamer)
- [Beamer を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=Beamer)
- [beamer : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/beamer)
- [岩崎 隆盛/「Beamer」の検索結果 - Twilog](http://twilog.org/tweets.cgi?id=ti5942&word=Beamer)
- [Newest &#39;beamer&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/beamer)
    - [http://tex.stackexchange.com/questions/188605/easy-list-with-beamer](http://tex.stackexchange.com/questions/188605/easy-list-with-beamer)
- [Newest &#39;beamer tikz-pgf&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/beamer+tikz-pgf)
- [Beamer &mdash; Tasuku Soma&#39;s Homepage](http://www.opt.mist.i.u-tokyo.ac.jp/~tasuku/beamer.html)
- [LyXでbeamer使うテンプレート](https://x.com/econometror/status/409287233372291072)
- [LaTeX + Beamer でスライドを作る](http://xaro.hatenablog.jp/entry/2013/09/18/020615)
- [Lyx で Beamer](http://hasundue.hatenablog.com/entry/2012/06/17/134329)
- [Beamer: dissolving animation in slide transition](https://gist.github.com/3706258)
- [Beamerで2ペインにする](http://koemu.hatenablog.jp/entry/2013/01/23/204309)
- [Windows 7にBemerを入れた時の作業メモ](http://d.hatena.ne.jp/teramonagi/20120324/1332574760)
- [LaTeX-Beamer - .R. Wiki](http://locs.bw.nitech.ac.jp/~kobayashi/fswiki/wiki.cgi?page=LaTeX-Beamer)
- [Beamer, geometry package のアップデートで不具合](http://d.hatena.ne.jp/triadsou/20100303/1267607085)
- [XeLaTeXで日本語beamer](http://d.hatena.ne.jp/tizz/20100505/)
- [Beamerでプレゼン資料を作る](http://wiki.livedoor.jp/fuhmi/d/%CA%AA%C3%D6)
- [A Beamer Quickstart](http://www.math.umbc.edu/~rouben/beamer/)
    <!-- -[[LaTeX Beamer 入門:http://www.ms.u-tokyo.ac.jp/~tado/beamer/]] -->
    <!-- -[[Windows XP に LaTeX beamer をいれる:http://aaaaushisan.blogspot.com/2011/06/windows-xp-latex-beamer.html]] -->
    <!-- -[[Windows XPにおけるbeamerのセットアップ作業のメモ:http://yoshiiz.blog129.fc2.com/blog-entry-190.html]] -->
    <!-- -[[Beamer V3.0 を使ってみる:http://www-an.acs.i.kyoto-u.ac.jp/~fujiwara/tex/beamer.html]] -->
    <!-- -[[latex-beamer を使ってみる:http://www.pocus.jp/p-latex-main.html#latex-beamer]] -->
    <!-- -[[LaTeX Beamerでプレゼンテーション:http://windom.phys.hirosaki-u.ac.jp/fswiki/wiki.cgi?page=LaTeX+Beamer%A4%C7%A5%D7%A5%EC%A5%BC%A5%F3%A5%C6%A1%BC%A5%B7%A5%E7%A5%F3]] -->
