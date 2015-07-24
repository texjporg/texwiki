---
title: "PDFjam"
url: "/PDFjam/"
date: 2015-07-16T07:05:17Z
pukiwiki: "PDFjam"
---

# PDFjam

## [PDFjam](http://www2.warwick.ac.uk/fac/sci/statistics/staff/academic-research/firth/software/pdfjam/) {#a6029433}

PDFjam は，PDF ファイルの結合・分割・割付ツールです。
実体は，[pdfpages](/pdfpages/) パッケージを使用した LaTeX ソースを pdfLaTeX で処理するシェルスクリプトです。

### インストール {#ta539380}

OS X (Mac)，Linux といった Unix 系の TeX Live には含まれています。
Windows で PDFjam を使用したい場合は，Unix ライクな環境である [Cygwin](/Cygwin/) 上に TeX Live を導入することで可能です。

仮にインストールされなかった場合は

- 公式サイトからシェルスクリプトを入手してパスを通す
- Unix 系 OS 標準のパッケージ管理システムで pdfjam を探す

という選択肢があります。
前者の場合はもちろん，pdfLaTeX コマンドがインストールされている前提です。
後者の場合，pdfjam の依存パッケージに TeX Live 本体が含まれることに注意してください。 <!-- たとえば MacPorts なら以下のように調べられます。 --> <!--   $ port deps pdfjam --> <!--  Full Name: pdfjam @2.08_0 --> <!--  Runtime Dependencies: texlive-latex, texlive-latex-recommended -->
パッケージ管理ツールが提供する TeX Live パッケージをインストールしていれば何も問題ありませんが，TeX Live 公式インストーラを使用した場合は [texlive-dummy](http://www.ctan.org/tex-archive/support/texlive/texlive-dummy/) をインストールすることで，重複インストールを回避できます。

### 関連リンク {#r2829cf6}

- [https://www.ctan.org/pkg/pdfjam](https://www.ctan.org/pkg/pdfjam)
- [PDFjam - PIB](http://seesaawiki.jp/w/kou1okada/d/PDFjam)
- [pdfjamのインストール](http://y12o.blogspot.jp/2009/12/pdfjam.html)
- [pdfjam で複数ページの pdf ファイルをタイル状に並べる](http://xr0038tech.hatenadiary.jp/entry/2014/11/13/164350)
