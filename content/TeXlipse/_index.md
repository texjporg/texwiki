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

TeXlipse は [Eclipse](/Eclipse/) の LaTeX 用プラグインです．

***

***

## 公式サイト {#m60f5d27}

- [TeXlipse homepage &mdash; LaTeX for Eclipse](http://texlipse.sourceforge.net/)
- [TeXlipse | SourceForge.net](https://sourceforge.net/projects/texlipse/)
- [Pdf4Eclipse](http://borisvl.github.com/Pdf4Eclipse/)
    - [Borisvl/Pdf4Eclipse · GitHub](https://github.com/Borisvl/Pdf4Eclipse)
- [BibSonomy](http://www.bibsonomy.org/)
- [CTAN:help/Catalogue/entries/texlipse.html](https://mirror.ctan.org/help/Catalogue/entries/texlipse.html)

### License {#y9484ed1}

[Eclipse Public License (EPL)](http://texlipse.sourceforge.net/manual/about.html)

### スクリーンショット {#j94c34b3}

[公式のスクリーンショットのページ](http://texlipse.sourceforge.net/screenshots/)を参照．

### 特徴 {#qe22fab6}

- アウトライン
- 折りたたみ
- 自動ビルド
- 自動補完
- スペル・チェッカ
- SyncTeX による forward and inverse search

## 注意点 {#f6b7dd5c}

### TeXlipse が文法的に正しい TeX ファイルを parsing (構文解析) できずにエラーになる {#t27e1af4}

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

TeXlipse は自前で LaTeX parser を持っていて，ほとんどの場合は処理できるようですが，さすがに TeX コンパイラ並みの解析はできないので，上記のような場合にはエラーになってしまいます．

この場合はエラーが発生する部分の最初と最後に

```
%###
```

という特別なコメントを入れることで parser に該当部分を無視するようにできるそうです．

## 不具合 {#t2a5d9cf}

- [TeXlipse / Bugs](https://sourceforge.net/p/texlipse/bugs/)
- [Issues · Borisvl/Pdf4Eclipse · GitHub](https://github.com/Borisvl/Pdf4Eclipse/issues)

を参照．

### Eclipse がフリーズする {#k9639d78}

TeXlipse git HEAD では修正されています．

- [Finally a fix for the very annoying bug 3511323, which could cause a freeze of Eclipse even when no TeX file was edited. Thanks to Nitin Dahyabhai for the tip.](https://sourceforge.net/p/texlipse/net.sourceforge.texlipse/ci/bbf0c9ab337f61a4fc0a3c283fd6823661e3e420/)
- [TeXlipse causes Eclipse UI to freeze](https://sourceforge.net/tracker/?func=detail&aid=3511323&group_id=133306&atid=726818) (Fixed)

### TeXlipse 1.5.0 と Eclipse 4.2 (Juno) でワードラップが正常に動作しない {#k7905270}

TeXlipse git HEAD では修正されています．

- [Fix word wrap bug which occurs in Eclipse Juno (3542507)](https://sourceforge.net/p/texlipse/net.sourceforge.texlipse/ci/77f84799c805a5785d3ee1d8cda903e6bb52cfe9/)
- [Word wrap in Juno](https://sourceforge.net/tracker/?func=detail&aid=3542507&group_id=133306&atid=726818) (Fixed)
- [正常なbibファイルをなぜかパースできず、行折り返しが動作しない](https://twitter.com/tasusu/status/274718435353718784)

### PDF renderer が SUN renderer の場合に ä ö ü fi などの文字が Pdf4Eclipse で表示されない {#c876c383}

- [Diacritics are not displayed when compiling with XeLaTeX](https://github.com/Borisvl/Pdf4Eclipse/issues/18) (closed)

PDF renderer を SUN renderer 以外に設定して PDF ファイルを開き直すか，または SumatraPDF, TeXworks, Adobe Acrobat Reader DC などの外部ビューアで表示することができます．

### TeXlipse 1.5.0 で \cite{XXX} を使用した場合に Key XXX is undefined といった警告が表示される {#i0880f90}

- [SourceForge.net: TeXlipse: Detail: 3498342 - Key XXX is undefined warning](https://sourceforge.net/tracker/index.php?func=detail&aid=3498342&group_id=133306&atid=726818)

\cite{XXX} で Key XXX is undefined という警告が表示される場合は

```
%###
\cite{XXX}
%###
```

とすることで警告を抑制できます．

## インストール {#u4a48677}

[Eclipse](/Eclipse/) を起動します．
メニューの「ヘルプ &gt; 新規ソフトウェアのインストール...」を選択し，
「インストール」ウィンドウの \[追加(A)...\]で，

- 名前(N): TeXlipse Update Site
- ロケーション(L): &#x68;ttp://texlipse.sourceforge.net

を入力して \[OK\] をクリックします．

- Bibsonomy
- Pdf4Eclipse
- TeXlipse

にチェックを入れ，\[次へ(N) >\] をクリックして，指示に従って TeXlipse をインストールします．
TeXlipse のインストール後 Eclipse を再起動します．

Update Site を使う方法がうまくいかない場合は [CTAN:support/texlipse/](https://mirror.ctan.org/support/texlipse/) や [texlipse.sourceforge.net/release.html](http://texlipse.sourceforge.net/release.html)
から直接ダウンロードして展開 (解凍) します．
展開したファイルの中に plugins フォルダーがあります．
この plugins フォルダーを Eclipse フォルダーに上書きコピーします．

## 設定 {#j3f79297}

[TeXlipse/設定](</TeXlipse/設定/>) を参照．

## 使い方 {#n32f16b3}

[TeXlipse/使い方](</TeXlipse/使い方/>) を参照．

## 関連リンク {#g42d5edd}

- [Newest &#39;texlipse&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/texlipse)
- [Eclipseワードラップ用プラグイン](http://dogwood.skr.jp/blog/2013/10/389/)
- [Eclipse/TeXlipse and evince: How to make backward search work? (Example using Ubuntu 14.04)](http://solutions4linux.blogspot.com/2014/05/eclipsetexlipse-and-evince-how-to-make.html)
- [TeXlipse＋Pdf4EclipseでTeX執筆環境を構築する](http://tatuas.hatenablog.com/entry/2012/12/11/211105)
- [【Win8】 TeXlipse (eclipseでLaTexを作成するためのプラグイン) インストール：なんでもかんでもコンピュータ：So-netブログ](http://ankyo.blog.so-net.ne.jp/2012-12-01)
- [Feature of the Week: BibSonomy TeXlipse Plugin](http://blog.bibsonomy.org/2012/08/feature-of-week-bibsonomy-texlipse.html)
- [spell check does not run](https://sourceforge.net/projects/texlipse/forums/forum/451977/topic/3669794)
- [TeXlipse and Chrome](http://bigneek.com/content/texlipse-and-chrome)
- [Texlipse-Article-Template](https://github.com/feldob/Texlipse-Article-Template)
- [TeXlipse as a lightweight portable TeX editor](http://blog.keyboardplaying.org/2012/05/26/texlipse-lightweight-portable-tex-editor/)
- [TeXlipse is again my favorite LaTeX environment](http://joelslinux.blogspot.jp/2012/05/texlipse-is-again-my-favorite-latex.html)
- [【Ubuntu,Windows】TexlipseでB4や用紙を横にする場合のdvipdfmxの設定 --- ただ、設定しなくてもtexの記述で指定できる。](http://ankyo.blog.so-net.ne.jp/2012-05-18)
- [TeXlipseでスペルチェック](http://d.hatena.ne.jp/bettamodoki/20111007/1318001930)
- [Setting up TeXlipse and Sumatra PDF](http://teakes.blogspot.com/2009/08/setting-up-texlipse-and-sumatra-pdf.html)
- [EclipseでTeXを編集するTeXlipse](http://d.hatena.ne.jp/jun9128/20110323/)
- [Eclipse/TeXlipse - KLab Public Wiki](http://telecom0.eng.niigata-u.ac.jp/index.php?Eclipse/TeXlipse)
- [Texlipse can't find Bibtex](http://latex.org/forum/viewtopic.php?f=27&t=10481&start=0)

### リリース情報 {#f49b6dcf}

[News](http://texlipse.sourceforge.net/news.php) を参照．

### ChangeLog {#e321b2d0}

- [https://sourceforge.net/p/texlipse/net.sourceforge.texlipse/ci/master/tree/](https://sourceforge.net/p/texlipse/net.sourceforge.texlipse/ci/master/tree/)
    - [log](https://sourceforge.net/p/texlipse/net.sourceforge.texlipse/ci/master/log/)
