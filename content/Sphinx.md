---
title: "Sphinx"
url: "/Sphinx/"
date: 2011-06-05T19:50:08Z
pukiwiki: "Sphinx"
---

# Sphinx

## [Sphinx](http://sphinx-doc.org/) {#t006e75b}

<img src="http://sphinx-doc.org/latest/_static/sphinxheader.png" alt="Sphinx" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Sphinx とは {#pbb2bc6a}

Sphinx は美しいドキュメントを簡単に作成できるツールです．

### [Sphinx home](http://sphinx-doc.org/) {#u72d0718}

- [http://sphinx-doc.org/latest/](http://sphinx-doc.org/latest/)

### License {#qc08e5c2}

[BSD 2-Clause](https://bitbucket.org/birkenfeld/sphinx/src/tip/LICENSE)

### ChangeLog {#b34742d0}

- [http://sphinx-doc.org/latest/changes.html](http://sphinx-doc.org/latest/changes.html)
- [https://bitbucket.org/birkenfeld/sphinx/](https://bitbucket.org/birkenfeld/sphinx/)
    - [https://bitbucket.org/birkenfeld/sphinx/commits/](https://bitbucket.org/birkenfeld/sphinx/commits/)

### Sphinx-Users.jp {#d394d0e1}

#### [Sphinx-Users.jp](http://sphinx-users.jp/) {#j5b51377}

- [Sphinxをはじめよう](http://sphinx-users.jp/gettingstarted/)
    - [Windowsへのインストール](http://sphinx-users.jp/gettingstarted/install_windows.html)
    - [Windowsへのインストール(スタンドアロンインストール)](http://sphinx-users.jp/gettingstarted/install_windows_standalone.html)
    - [Mac OS X, Linuxへのインストール](http://sphinx-users.jp/gettingstarted/install_unix.html)
- [sphinxjp – Bitbucket](https://bitbucket.org/sphinxjp/)
- [Sphinx-users 保存書庫](http://www.python.jp/pipermail/sphinx-users/)

## インストール {#a449ee84}

pip を使用してインストールします．<br>

```
pip install Sphinx
```

<!-- Sphinx 1.2 を指定してインストールする場合は以下のコマンドを実行します．~ -->
<!--  -->
<!-- pip install Sphinx==1.2 -->

## Python ドキュメント {#h53fa12f}

### [Python Japan User's Group](http://www.python.jp/) {#dc4feddc}

- [Python 和訳ドキュメント](http://docs.python.jp/)

### [python-doc-ja - Pythonドキュメント日本語翻訳プロジェクト](https://code.google.com/p/python-doc-ja/) {#wb6e2415}

- [LaTeX のビルド手順](https://code.google.com/p/python-doc-ja/wiki/LaTeXBuild)

## Sphinx → HTML {#xba45212}

HTML ファイルを作成する場合は<br>

```
make html
```

を実行します．<br>

## Sphinx → LaTeX → PDF {#wb4c36d7}

[TeX Live](</TeX Live/>) をインストールします．<br>

LaTeX 経由で PDF ファイルを作成する場合は<br>

```
make latexpdf
```

を実行します．<br>
日本語の PDF ファイルを作成する場合は<br>

```
make latexpdfja
```

を実行します．<br>

- [LaTeX documentation example for SphinxCon JP 2014](https://github.com/jj1bdx/sphinxconjp2014-examples)
    - [Sphinxcon JP 2014 presentation: SphinxとLaTeXで作る英文マニュアル](http://sssslide.com/speakerdeck.com/jj1bdx/sphinxcon-jp-2014-presentation-sphinxtolatexdezuo-ruying-wen-maniyuaru)
- [menes-pdf](http://menes-pdf.info/)
    - [SphinxをPDFにするwebサービス](http://www.python.jp/pipermail/sphinx-users/2014-June/000984.html)
- [SphinxでLatex拡張を使ってPDF出力する](http://qiita.com/H-A-L/items/8222d894daf1552cef67)
- [https://bitbucket.org/keik/sphinx-lualatex](https://bitbucket.org/keik/sphinx-lualatex)
- [SphinxのLaTeXのフォーマットをいじる](http://gadget-mac.undo.jp/blog/2014/06/sphinx%E3%81%AElatex%E3%81%AE%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%92%E3%81%84%E3%81%98%E3%82%8B)
- [WindowsでSphinxからPDFファイルを作成する](http://hidemium.hatenablog.com/entry/2014/05/28/070000)
- [Succeeded to make a PDF including CJK text by sphinx](https://groups.google.com/forum/#!topic/sphinx-users/iaRNBHC_f5o)
- [LaTeX経由でのPDF作成](http://sphinx-users.jp/cookbook/pdf/latex.html)
- [sphinxでplantumlの図入り日本語テキストをlatexpdfjaでPDF化してみた](http://qiita.com/hnakamur/items/8360a481a3820f374e3d)
- [Ubuntu 14.04 でSphinxを使ってPDFを作成する方法](http://nekomatu.blogspot.jp/2014/03/ubuntu-trusty-testing-no2-howto-sphinx.html)
- [テキストからHTMLやTeX,pdf,docxをつくれるSphinxがドキュメント作成にかなり便利だったのでメモ](http://nwpct1.hatenablog.com/entry/2013/10/03/212309)
- [Sphinx と LaTeX を使うときの 小技](https://gist.github.com/uchida/4545280)
- [使い始めたばかりのSphinxでPDFを生成してみた](http://kanonji.info/blog/2013/04/12/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%81%9F%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%AEsphinx%E3%81%A7pdf%E3%82%92%E7%94%9F%E6%88%90%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F/)
- [Sphinx で日本語を含む PDF 出力をする](http://atasatamatara.hatenablog.jp/entry/2013/03/16/204232)
- [Sphinx + TeX + PDF with jsbook](http://tboffice.hatenablog.jp/entry/2013/01/08/035429)
- [Sphinxを使ってみた](http://d.hatena.ne.jp/neko-gensui/20130107/1357527163)
- [Sphinx+pLatex+dvipdfxmで美文書作成tips](http://qiita.com/items/5276798613ab0f9a9db9)
- [日本語 Sphinx ドキュメントの PDF 化(TeX 経由)のサンプル](https://github.com/shino/sphinx_to_pdf_via_tex_jp/)
- [sphinxのlatex経由pdfの時に jsarticle を使ってみたかった](http://d.hatena.ne.jp/tboffice/20121127/1354030250)
- [latex_documentsで \and を使うとLaTeXのビルドでこける](http://d.hatena.ne.jp/tboffice/20121126/1353945728)
- [Windows8にPDFありのsphinx環境](http://fseek.blogspot.com/2012/11/windows8pdfsphinx.html)
- [独学Linux : Sphinx を含む記事](http://blog.livedoor.jp/vine_user/search?q=Sphinx)
- [CentOS5(Scientific Linux 6) + texlive2011 + Sphinx1.1でlatex経由のpdf出力](http://room6933.com/blog/2012/01/16/sphinx2pdf/)
- [SphinxでTex](http://d.hatena.ne.jp/yukichanko/20100816/1281936940)
- [Sphinx と W32TeX で PDF 出力](http://d.hatena.ne.jp/hokorobi/20120108/1326023180)
- [Sphinx で 日本語 pdf を出力する(Mac OS X Lion)](http://d.hatena.ne.jp/shiumachi/20120107/1325930802)
- [(11日目) Sphinx から PDF を生成してみよう (LaTeX 編)](http://d.hatena.ne.jp/tk0miya/20111211), [(11日目) Sphinx から PDF を生成してみよう (LaTeX 編) - Hack like a rolling stone](http://d.hatena.ne.jp/tk0miya/touch/20111211)
- [ubuntuでsphinxのpdf出力をする環境を作る2](http://d.hatena.ne.jp/bols-blue/20110821/1313925176)
- [ubuntuでsphinxのpdf出力をする環境を作る](http://d.hatena.ne.jp/bols-blue/20110820/1313832820)
- [sphinx math](http://ggutter.blogspot.com/2009/12/sphinx-math.html)
- [Sphinx - laclefwiki](http://saekiyoshiyasu.org/wiki/Sphinx)
- [Sphinxでドキュメント生成 - 図を描く、TeX経由でPDF（Windowsでの始め方）（続）](http://d.hatena.ne.jp/torutk/20110618/p1)
- [SphinxでXeLaTeXを使って日本語使ったPDFを出力する](http://hideaki-t.blogspot.com/2011/07/sphinxxelatexpdf.html)
- [Sphinxで日本語PDFを出力する](http://d.hatena.ne.jp/yusukei2/20110604/1307145621), [Sphinxで日本語PDFを出力する その２？](http://d.hatena.ne.jp/yusukei2/20110806/1312605553)
- [sphinxのPDF出力ではまった](http://d.hatena.ne.jp/yuitowest/20111114/1321262351)

## Sphinx → HTML → PDF {#w924420a}

- [Sphinxで素早く簡単に綺麗な日本語のPDFを作成する方法](http://dxd8.com/archives/225/)

## 関連リンク {#t09e1c4e}

- [Sphinxとは - はてなキーワード](http://d.hatena.ne.jp/keyword/Sphinx)
- [Sphinx Advent Calendar 2012 - connpass](http://connpass.com/event/1441/)
- [Sphinx Advent Calendar 2012 (全部俺)](http://advent-calendar2012.usaturn.net/)
- [http://ossanhoihoi.web.fc2.com/](http://ossanhoihoi.web.fc2.com/)
- [数学・情報系男子がWikiを捨ててSphinxを使うべき10の理由](http://room6933.com/blog/2011/12/19/hello_sphinx/)
- [Sphinx](http://blogs.yahoo.co.jp/igproj_fusion/14494896.html)
- [おれたちが考えた最強の出版システムPython Developers Festa 2012.11](http://www.slideshare.net/k16shikano/our-docsyspyfes201211)
- [omakeもmakeも使わずに、Sphinxドキュメントの継続的ビルド](http://tell-k.hatenablog.com/entry/2012/01/04/022229)
- [ドキュメンテーション Advent Calendar 2013 - Qiita \[キータ\]](http://qiita.com/advent-calendar/2013/documentation)
