---
title: "TeXlipse"
url: "/TeXlipse/"
date: 2011-09-04T18:34:44Z
bookCollapseSection: true
pukiwiki: "TeXlipse"
---

# TeXlipse

[Eclipse](/Eclipse/) > TeXlipse

## [TeXlipse](http://texlipse.sourceforge.net/) {#cc0edd31}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## TeXlipse とは {#m60f5d27}

TeXlipse は
[Eclipse](/Eclipse/) の
[LaTeX](https://mirror.ctan.org/help/Catalogue/entries/latex.html) 用プラグインです．

- [TeXlipse homepage &mdash; LaTeX for Eclipse](http://texlipse.sourceforge.net/)
    - [All news](http://texlipse.sourceforge.net/news.php)
    - [FAQ](http://texlipse.sourceforge.net/faq.php)
- [TeXlipse at SourceForge.net](http://sourceforge.net/projects/texlipse/)
    - [Files](http://sourceforge.net/projects/texlipse/files/)
        - [texlipse plugin](http://sourceforge.net/projects/texlipse/files/texlipse%20plugin/)
        - [dictionaries](http://sourceforge.net/projects/texlipse/files/dictionaries/)
        - [texlipse documentation](http://sourceforge.net/projects/texlipse/files/texlipse%20documentation/)
- [Pdf4Eclipse](http://borisvl.github.com/Pdf4Eclipse/)
    - [Borisvl/Pdf4Eclipse · GitHub](https://github.com/Borisvl/Pdf4Eclipse)
- [BibSonomy](http://www.bibsonomy.org/)
    - [TeXlipseBibSonomyExtension](http://www.bibsonomy.org/help_en/TeXlipseBibSonomyExtension)
- [CTAN:help/Catalogue/entries/texlipse.html](https://mirror.ctan.org/help/Catalogue/entries/texlipse.html)

### License {#y9484ed1}

[Eclipse Public License (EPL)](http://texlipse.sourceforge.net/manual/about.html)

### リリース情報 {#f49b6dcf}

[News](http://texlipse.sourceforge.net/news.php) を参照．<br>

### ChangeLog {#e321b2d0}

- [http://sourceforge.net/p/texlipse/net.sourceforge.texlipse/ci/master/tree/](http://sourceforge.net/p/texlipse/net.sourceforge.texlipse/ci/master/tree/)
    - [log](http://sourceforge.net/p/texlipse/net.sourceforge.texlipse/ci/master/log/)

### スクリーンショット {#j94c34b3}

[![Pdf4Eclipse](http://borisvl.github.com/Pdf4Eclipse/pics/screenshot_thumb.jpg)](http://borisvl.github.com/Pdf4Eclipse/pics/screenshot.jpg)<br><br> <!-- [[&ref(http://texlipse.sourceforge.net/screenshots/bibref-screen-thumb.png,around,nolink,This picture shows the BibTeX completion in action. The cursor disappeared from the screenshot, but you can see the "shadow" of it, as one of the curly braces is highlighted on the line where the error is.);>http://texlipse.sourceforge.net/screenshots/bibref-screen.png]] --> <!-- 　 [[&ref(http://texlipse.sourceforge.net/screenshots/freport-screen-thumb.png,around,nolink,This picture shows navigation from build errors to source file. Latex reports all kinds of warnings and errors, and not all of them contain a line number. However, there usually is also a valid error message with line number information.);>http://texlipse.sourceforge.net/screenshots/freport-screen.png]] -->

### 特徴 {#qe22fab6}

- アウトライン
- 折りたたみ
- 自動ビルド
- 自動補完
- スペル・チェッカー
- SyncTeX による forward and inverse search

## 注意点 {#f6b7dd5c}

### TeXlipse が文法的に正しい TeX ファイルをパースできずにエラーになる → コメント %### を使用する {#t27e1af4}

- [TeXlipseがマクロを正しくParseしてくれない問題について](http://did2.blog64.fc2.com/blog-entry-334.html) を参照．

TeXlipse では

```
\def\|{\verb|}
```

のようなマクロがエラーになり，コンパイルできません．

この問題の解決策が，TeXlipse の [FAQ](http://texlipse.sourceforge.net/faq.php) にあります．

結論から言うと

```
%###
\def\|{\verb|}
%###
```

とすれば OK です．

TeXlipse は自前で LaTeX のパーサを持っていて，ほとんどの場合は処理できるようですが，さすがに TeX コンパイラ並みのパースはできないので，上記のような場合にはエラーになってしまいます．

この場合はエラーが発生する部分の最初と最後に

```
%###
```

という特別なコメントを入れることでパーサに該当部分を無視するようにできるそうです．

## 不具合 {#t2a5d9cf}

- [SourceForge.net: TeXlipse: Bugs](http://sourceforge.net/tracker/?group_id=133306&atid=726818)
- [Issues · Borisvl/Pdf4Eclipse · GitHub](https://github.com/Borisvl/Pdf4Eclipse/issues)

を参照．

### Eclipse がフリーズする → TeXlipse git HEAD では Eclipse がフリーズする問題は修正されています {#k9639d78}

- [Finally a fix for the very annoying bug 3511323, which could cause a freeze of Eclipse even when no TeX file was edited. Thanks to Nitin Dahyabhai for the tip.](http://sourceforge.net/p/texlipse/net.sourceforge.texlipse/ci/bbf0c9ab337f61a4fc0a3c283fd6823661e3e420/)
- [TeXlipse causes Eclipse UI to freeze](http://sourceforge.net/tracker/?func=detail&aid=3511323&group_id=133306&atid=726818) → Fixed

### TeXlipse 1.5.0 と Eclipse 4.2 (Juno) でワードラップが正常に動作しない → TeXlipse git HEAD ではワードラップの問題は修正されています {#k7905270}

- [Fix word wrap bug which occurs in Eclipse Juno (3542507)](http://sourceforge.net/p/texlipse/net.sourceforge.texlipse/ci/77f84799c805a5785d3ee1d8cda903e6bb52cfe9/)
- [Word wrap in Juno](http://sourceforge.net/tracker/?func=detail&aid=3542507&group_id=133306&atid=726818) → Fixed
- [正常なbibファイルをなぜかパースできず、行折り返しが動作しない](https://twitter.com/tasusu/status/274718435353718784)

### PDF renderer が SUN renderer の場合に ä ö ü fi などの文字が Pdf4Eclipse で表示されない → PDF renderer を SUN renderer 以外に設定して PDF ファイルを開き直すかまたは SumatraPDF, TeXworks, TeXstudio, Mozilla Firefox, Chrome PDF Viewer, Adobe Reader などの外部ビューアで表示する {#c876c383}

- [Diacritics are not displayed when compiling with XeLaTeX](https://github.com/Borisvl/Pdf4Eclipse/issues/18) → closed

PDF renderer が SUN renderer の場合に ä ö ü fi などの文字が Pdf4Eclipse で表示されない場合は PDF renderer を SUN renderer 以外に設定して PDF ファイルを開き直すかまたは SumatraPDF, TeXworks, TeXstudio, Mozilla Firefox, Chrome PDF Viewer, Adobe Reader などの外部ビューアで表示することができます．<br>

<!-- **TeXlipse 1.5.0 で \bibliography がうまく動作しない [#i3d2f9c0] -->
<!--  -->
<!-- -[[SourceForge.net: TeXlipse: Detail: 3446921 - bibliography error since 1.5.0:http://sourceforge.net/tracker/?func=detail&aid=3446921&group_id=133306&atid=726818]] -->

### TeXlipse 1.5.0 で \cite{XXX} を使用した場合に Key XXX is undefined といった警告が表示される → コメント %### を使用する {#i0880f90}

- [SourceForge.net: TeXlipse: Detail: 3498342 - Key XXX is undefined warning](http://sourceforge.net/tracker/index.php?func=detail&aid=3498342&group_id=133306&atid=726818)

\cite{XXX} で Key XXX is undefined という警告が表示される場合は

```
%###
\cite{XXX}
%###
```

とすることで警告を抑制できます．

## インストール {#u4a48677}

[Eclipse](/Eclipse/) を起動します．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ヘルプ(H)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　新規ソフトウェアのインストール...　</span>　</span><br>

***

「インストール」ウィンドウの \[追加(A)...\]
で

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>リポジトリーの追加</strong></span>　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

名前(N):　　　　　<ins>TeXlipse Update Site</ins><br>
ロケーション(L): <ins>&#x68;ttp://texlipse.sourceforge.net</ins>

***

を入力して \[OK\] をクリックします．

- Bibsonomy
- Pdf4Eclipse
- TeXlipse

にチェックを入れ，\[次へ(N) >\] をクリックして，指示に従って TeXlipse をインストールします．<br>
TeXlipse のインストール後 Eclipse を再起動します．<br>

Update Site を使う方法が，うまくいかない場合は，[CTAN:support/texlipse/](https://mirror.ctan.org/support/texlipse/) や [texlipse.sourceforge.net/release.html](http://texlipse.sourceforge.net/release.html)
から直接ダウンロードして展開 (解凍) します．<br>
展開したファイルの中に plugins フォルダーがあります．<br>
この plugins フォルダーを Eclipse フォルダーに上書きコピーします．<br>

## 設定 {#j3f79297}

[TeXlipse/設定](</TeXlipse/設定/>) を参照．

## 使い方 {#n32f16b3}

[TeXlipse/使い方](</TeXlipse/使い方/>) を参照．

## 関連リンク {#g42d5edd}

- [TeXlipse homepage - LaTeX for Eclipse](http://texlipse.sourceforge.net/)
- [Newest &#39;texlipse&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/texlipse)
- [Eclipseワードラップ用プラグイン](http://dogwood.skr.jp/blog/2013/10/389/)
- [https://gitorious.org/evince-texlipse-sync](https://gitorious.org/evince-texlipse-sync)
- [TeXlipse＋Pdf4EclipseでTeX執筆環境を構築する](http://tatuas.hatenablog.com/entry/2012/12/11/211105)
- [【Win8】 TeXlipse (eclipseでLaTexを作成するためのプラグイン) インストール：なんでもかんでもコンピュータ：So-netブログ](http://ankyo.blog.so-net.ne.jp/2012-12-01)
- [Feature of the Week: BibSonomy TeXlipse Plugin](http://blog.bibsonomy.org/2012/08/feature-of-week-bibsonomy-texlipse.html)
    <!-- -[[改造版TeXlipse:http://www.csg.is.titech.ac.jp/~f_takeyama/texlipse/]] -->

- [spell check does not run](http://sourceforge.net/projects/texlipse/forums/forum/451977/topic/3669794)
- [TeXlipse and Chrome](http://bigneek.com/content/texlipse-and-chrome)
- [Texlipse-Article-Template](https://github.com/feldob/Texlipse-Article-Template)
    <!-- -[[ms4py / latexmk.py / wiki / Texlipse – Bitbucket:https://bitbucket.org/ms4py/latexmk.py/wiki/Texlipse]] -->

- [TeXlipse as a lightweight portable TeX editor](http://blog.keyboardplaying.org/2012/05/26/texlipse-lightweight-portable-tex-editor/)
- [TeXlipse is again my favorite LaTeX environment](http://joelslinux.blogspot.jp/2012/05/texlipse-is-again-my-favorite-latex.html)
- [【Ubuntu,Windows】TexlipseでB4や用紙を横にする場合のdvipdfmxの設定 --- ただ、設定しなくてもtexの記述で指定できる。](http://ankyo.blog.so-net.ne.jp/2012-05-18)
- [TeX覚書](http://ameblo.jp/tex-memo)
- [TeXlipseでスペルチェック](http://d.hatena.ne.jp/bettamodoki/20111007/1318001930)
- [Setting up TeXlipse and SumatraPDF](http://halkov.blogspot.com/2011/04/setting-up-texlipse-and-sumatrapdf.html)
- [Setting up TeXlipse and Sumatra PDF](http://teakes.blogspot.com/2009/08/setting-up-texlipse-and-sumatra-pdf.html)
- [EclipseでTeXを編集するTeXlipse](http://d.hatena.ne.jp/jun9128/20110323/)
- [Eclipse/TeXlipse - KLab Public Wiki](http://telecom0.eng.niigata-u.ac.jp/index.php?Eclipse/TeXlipse)
- [LaTeX Community &bull; View topic - Texlipse can't find Bibtex](http://www.latex-community.org/forum/viewtopic.php?f=27&t=10481&start=0)
- [nomencl.sty: TeX パッケージ](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/nomencl.html)
