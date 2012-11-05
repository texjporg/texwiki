---
title: "TeXnicCenter"
url: "/TeXnicCenter/"
date: 2011-03-03T03:06:29Z
pukiwiki: "TeXnicCenter"
---

# TeXnicCenter

## [TeXnicCenter](http://www.texniccenter.org/) {#f2674e4f}

<img src="http://texniccenter.sourceforge.net/_static/TeXnicCenter.png" alt="TeXnicCenter" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## TeXnicCenter とは {#rb91ca3f}

TeXnicCenter は
[LaTeX](https://mirror.ctan.org/help/Catalogue/entries/latex.html)
ドキュメントを作成するための，多機能で使いやすい統合環境です．<br>
TeXnicCenter は，フリーのオープンソースソフトウェアで，GNU GPL ライセンスでリリースされています．<br>

- [TeXnicCenter 公式ページ](http://www.texniccenter.org/)
    - [TeXnicCenter News](http://www.texniccenter.org/news)
- [CTAN:help/Catalogue/entries/texniccenter.html](https://mirror.ctan.org/help/Catalogue/entries/texniccenter.html)

### 動作環境 {#sa939c6e}

Windows 7, Vista, XP

### リリース情報 {#da101e5c}

2012-11-03 [TeXnicCenter 2.0 Beta 1](http://sourceforge.net/projects/texniccenter/files/TeXnicCenter/2%20Beta%201/)<br>

TeXnicCenter 2.0 Alpha 4 で 64-Bit Windows がサポートされました．<br>
TeXnicCenter 2.0 Alpha 3 で Logo Contest で優勝した Lukas Schneider さんのアイコンになりました．<br>
バージョン 1.0 は，日本語表示，日本語入力ともに不可でしたが，バージョン 2.0 から Unicode に対応し，日本語表示，日本語入力が可能になっています．<br>

### ChangeLog {#y2c9ad23}

- [SourceForge: texniccenter/texniccenter: Summary](http://texniccenter.hg.sourceforge.net/hgweb/texniccenter/texniccenter/)
    - [コミットログ](http://texniccenter.hg.sourceforge.net/hgweb/texniccenter/texniccenter/shortlog)

### スクリーンショット {#defb0bff}

[![TeXnicCenter 2.0 の画面](http://latex.quark007.de/wp-content/uploads/2010/02/unbenannt-300x226.png)](http://latex.quark007.de/wp-content/uploads/2010/02/unbenannt.png)

### 特徴 {#c8ac578a}

- TeX のコマンドを色分けできます．
- TeX のコマンドを補完してくれます．(Ctrl + Space)
- 折りたたみが可能です．→ TeXnicCenter 2.0 Beta 1 では折りたたみ機能がうまく動作しないようです．
- SumatraPDF を使用すれば，SyncTeX による forward and inverse search も可能です．
    - [TeXnicCenter 2.0 Alpha 3 から，デフォルトの PDF ビューアが SumatraPDF になりました．](http://texniccenter.hg.sourceforge.net/hgweb/texniccenter/texniccenter/rev/86030778d9fc)

### ドキュメント {#s783d445}

- [Welcome to the documentation of TeXnicCenter &mdash; TeXnicCenter v2.0 documentation](http://texniccenter.sourceforge.net/)

## 不具合 {#p40a9a4a}

### TeXnicCenter 2.0 Beta 1 で折りたたみ機能がうまく動作しない {#w34c78b7}

TeXnicCenter 2.0 Beta 1 では折りたたみ機能がうまく動作しないようです．<br>
TeXnicCenter 2.0 Alpha 4 でも同様に折りたたみ機能がうまく動作しないようです．<br>
TeXnicCenter 2.0 Alpha 3 では折りたたみ機能が動作していました．<br>

## ダウンロード {#rf294e94}

- [Downloads](http://www.texniccenter.org/resources/downloads)
- [Browse TeXnicCenter Files on SourceForge.net](http://sourceforge.net/projects/texniccenter/files/)

## Encoding {#u85685c5}

Encoding は

- ANSI
    - 日本語版 Windows では Shift_JIS として保存されます．
        <!-- - -TeXnicCenter 2.0 Alpha 3 では Shift_JIS のファイルは ANSI で開かれていて文字が正しく表示されていましたが，TeXnicCenter 2.0 Alpha 4 では Shift_JIS のファイルは，ファイルを開くときに ANSI ではなく UTF-8 で開かれてしまい，文字が正しく表示されない場合があります．日本語を使用する場合は [File]-[Save As...] の Encoding で UTF-8 を指定して保存することをおすすめします．→ [[ASCII documents default to UTF-8 character encoding instead of ANSI:http://texniccenter.hg.sourceforge.net/hgweb/texniccenter/texniccenter/rev/c1f76110a594]] -->

- UTF-8
- UTF-8 with BOM
- UTF-16
- UTF-16 Big Endian
- UTF-32
- UTF-32 Big Endian

に対応しています．

Encoding を指定して保存する場合は \[File\]-\[Save As...\] の Encoding のリストから Encoding を指定して保存してください．

## 設定 {#y0d2dce6}

TeXnicCenter/設定 を参照．

## 使い方 {#f25094fe}

### プロジェクトの作成 {#td4273eb}

\[File\]-\[New\]-\[Project...\] で新規プロジェクトを作成します．

### 補完 {#tcdb30cc}

Ctrl + Space で補完ができます．

doc とタイプして Ctrl + Space をタイプすると

```
\begin{document}

\end{document}
```

を補完してくれます．

ite とタイプして Ctrl + Space をタイプすると

```
\begin{itemize}
	\item 
\end{itemize}
```

を補完してくれます．

### プロファイルの変更 {#t5967111}

\[Build\]-\[Select Output Profile...\] またはツールバーからプロファイルを変更できます．

dvipdfm(x) で PDF ファイルを作成する場合は，プロファイルを LaTeX => DVI => PDF に変更します．

### ビルド {#i6bfece2}

\[Build\]-\[Build Output\] をクリックします．

エラーが見つかれば，×印が表示され，クリックするとエラー箇所にジャンプします．

間違った箇所を修正してもう一度ビルドします．

### 表示 {#w010da2b}

\[Build\]-\[View Output\] で対応するプロファイルの出力ファイルが表示されます．

\[Build\]-\[Build and View Output\] でビルドと表示ができます．

## 関連リンク {#r73017f2}

- [TexnicCenter2.0の日本語使用について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=794)
- [工大院生の学生メモ : Texniccenter](http://blog.livedoor.jp/gastttt3678/archives/2846954.html)
- [Newest &#39;texniccenter&#39; Questions - TeX - LaTeX - Stack Exchange](http://tex.stackexchange.com/questions/tagged/texniccenter)
- [Configuring TeXnicCenter](http://www.statslab.cam.ac.uk/~eva/texniccenter.html)
- [LaTeX Community &bull; View topic - Adobe Reader 10 and viewing error](http://www.latex-community.org/forum/viewtopic.php?f=31&t=10857)
- [LaTeX Community &bull; View topic - Texniccenter + Adobe Reader 9 Problem](http://www.latex-community.org/forum/viewtopic.php?f=35&t=8586)
- [TexnicCenter and Adobe Reader 10 / X](http://www.agmonim.com/2010/12/texniccenter-and-adobe-reader-10-x/)
- [Alphan Ulusoy&#039;s Blog &rsaquo; Using Adobe Acrobat Reader with TeXnicCenter](http://blog.alphanulusoy.com/?p=10)
- [DDE Message of Acrobat and Adobe Reader](http://acrobat-dde.nnn2.com/)
- [FW: Open "View PDF (pdflatex)" at last cursor position / forward search](http://www.mail-archive.com/lyx-devel@lists.lyx.org/msg157991.html)
