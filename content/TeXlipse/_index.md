---
title: "TeXlipse"
url: "/TeXlipse/"
date: 2011-09-04T18:34:44Z
bookCollapseSection: true
pukiwiki: "TeXlipse"
---

# TeXlipse

[Eclipse](/Eclipse/) > TeXlipse

## [TeXlipse](https://projects.eclipse.org/projects/science.texlipse) {#cc0edd31}

TeXlipse は [Eclipse](/Eclipse/) の LaTeX 用プラグインです．

***

***

## 公式サイト {#m60f5d27}

- [Eclipse TeXlipse | projects.eclipse.org](https://projects.eclipse.org/projects/science.texlipse)
- [GitHub - eclipse/texlipse: Texlipse](https://github.com/eclipse/texlipse)
- [Pdf4Eclipse](http://borisvl.github.io/Pdf4Eclipse/)
- [GitHub - Borisvl/Pdf4Eclipse: A pdf viewer for Eclipse](https://github.com/Borisvl/Pdf4Eclipse)

### License {#y9484ed1}

[Eclipse Public License 2.0](https://github.com/eclipse/texlipse/blob/master/LICENSE)

### スクリーンショット {#j94c34b3}

[Pdf4Eclipse の Screenshot](http://borisvl.github.io/Pdf4Eclipse/pics/screenshot.jpg) を参照．

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

- [Issues · eclipse/texlipse · GitHub](https://github.com/eclipse/texlipse/issues)
- [Issues · Borisvl/Pdf4Eclipse · GitHub](https://github.com/Borisvl/Pdf4Eclipse/issues)

を参照．

<!-- **Eclipse Photon (4.8) で TeXlipse 2.0.1 をインストールして設定しようとすると「現在表示されているページに、無効な値が含まれています。」と表示され設定できない [#ecef3992] -->
<!--  -->
<!-- Eclipse Photon (4.8) で TeXlipse 2.0.1 をインストールして設定しようとすると「現在表示されているページに、無効な値が含まれています。」と表示され設定できません． -->
<!--  -->
<!-- Eclipse Oxygen.3a (4.7.3a) を使用してください． -->
<!--  -->
<!-- -[[Texlipse preferences crash in Eclipse Photon Release (4.8.0) · Issue #61 · eclipse/texlipse · GitHub:https://github.com/eclipse/texlipse/issues/61]] -->

### PDF renderer が SUN renderer の場合に ä ö ü fi などの文字が Pdf4Eclipse で表示されない {#c876c383}

- [Diacritics are not displayed when compiling with XeLaTeX](https://github.com/Borisvl/Pdf4Eclipse/issues/18) (closed)

PDF renderer を SUN renderer 以外に設定して PDF ファイルを開き直すか，または SumatraPDF などの外部ビューアで表示することができます．

### TeXlipse 1.5.0 で \cite{XXX} を使用した場合に Key XXX is undefined といった警告が表示される {#i0880f90}

- [TeXlipse / Bugs / #344 Key XXX is undefined warning](https://sourceforge.net/p/texlipse/bugs/344/)

\cite{XXX} で Key XXX is undefined という警告が表示される場合は

```
%###
\cite{XXX}
%###
```

とすることで警告を抑制できます．

## インストール {#u4a48677}

TeXlipse と Pdf4Eclipse をインストールします．

### TeXlipse {#xc1bd64d}

Eclipse を起動します．
メニューの「ヘルプ &gt; 新規ソフトウェアのインストール...」を選択し，作業対象に

> &#x68;ttps://download.eclipse.org/texlipse/updates/release/latest

を入力して Enter キーを押します．

> LaTeX support for Eclipse

にチェックを入れ，\[次へ(N) >\] をクリックして，指示に従って TeXlipse をインストールします．
インストール後 Eclipse を再起動します．

### Pdf4Eclipse {#t020dd4e}

Eclipse を起動します．
メニューの「ヘルプ &gt; 新規ソフトウェアのインストール...」を選択し，作業対象に

> &#x68;ttp://borisvl.github.io/Pdf4Eclipse/

を入力して Enter キーを押します．

> Pdf4Eclipse

にチェックを入れ，\[次へ(N) >\] をクリックして，指示に従って Pdf4Eclipse をインストールします．
インストール後 Eclipse を再起動します．

## 設定 {#j3f79297}

[TeXlipse/設定](</TeXlipse/設定/>) を参照．

## 使い方 {#n32f16b3}

[TeXlipse/使い方](</TeXlipse/使い方/>) を参照．

## 関連リンク {#g42d5edd}

- [Newest &#39;texlipse&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/texlipse)
- [TeX環境構築（TeXlipse）](http://kougen.iobb.net/hobbygardens/article.php?id=64)
- [Haru Blog｜TeXlipse](http://harublo9.blog57.fc2.com/?q=TeXlipse)
- [Eclipseワードラップ用プラグイン](http://dogwood.skr.jp/blog/2013/10/389/)
- [Eclipse/TeXlipse and evince: How to make backward search work? (Example using Ubuntu 14.04)](http://solutions4linux.blogspot.com/2014/05/eclipsetexlipse-and-evince-how-to-make.html)
- [TeXlipse＋Pdf4EclipseでTeX執筆環境を構築する](http://tatuas.hatenablog.com/entry/2012/12/11/211105)
- [【Win8】 TeXlipse (eclipseでLaTexを作成するためのプラグイン) インストール：なんでもかんでもコンピュータ：So-netブログ](http://ankyo.blog.so-net.ne.jp/2012-12-01)
- [spell check does not run](https://sourceforge.net/projects/texlipse/forums/forum/451977/topic/3669794)
- [Texlipse-Article-Template](https://github.com/feldob/Texlipse-Article-Template)
- [TeXlipse as a lightweight portable TeX editor](http://blog.keyboardplaying.org/2012/05/26/texlipse-lightweight-portable-tex-editor/)
- [TeXlipse is again my favorite LaTeX environment](http://joelslinux.blogspot.jp/2012/05/texlipse-is-again-my-favorite-latex.html)
- [【Ubuntu,Windows】TexlipseでB4や用紙を横にする場合のdvipdfmxの設定 --- ただ、設定しなくてもtexの記述で指定できる。](http://ankyo.blog.so-net.ne.jp/2012-05-18)
- [TeXlipseでスペルチェック](https://bettamodoki.hatenadiary.jp/entry/20111007/1318001930)
- [Setting up TeXlipse and Sumatra PDF](http://teakes.blogspot.com/2009/08/setting-up-texlipse-and-sumatra-pdf.html)
- [EclipseでTeXを編集するTeXlipse](https://jun9128.hatenadiary.org/entry/20110323/1300892341)
- [Eclipse/TeXlipse - KLab Public Wiki](http://klab.eng.niigata-u.ac.jp/index.php?Eclipse%2FTeXlipse)
- [Texlipse can't find Bibtex](http://latex.org/forum/viewtopic.php?f=27&t=10481&start=0)

### リリース情報 {#f49b6dcf}

- [Releases · eclipse/texlipse · GitHub](https://github.com/eclipse/texlipse/releases)
- [https://projects.eclipse.org/projects/science.texlipse/governance](https://projects.eclipse.org/projects/science.texlipse/governance)

### ChangeLog {#e321b2d0}

- [https://github.com/eclipse/texlipse](https://github.com/eclipse/texlipse)
    - [https://github.com/eclipse/texlipse/commits/master](https://github.com/eclipse/texlipse/commits/master)
