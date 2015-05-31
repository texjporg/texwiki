---
title: "TeX 以外の組版・レイアウトシステム"
url: "/TeX 以外の組版・レイアウトシステム/"
date: 2015-05-31T04:06:47Z
pukiwiki: "TeX 以外の組版・レイアウトシステム"
---

# TeX 以外の組版・レイアウトシステム

## TeX 以外の組版・レイアウトシステム {#l0ceef78}

TeX 以外の組版・レイアウトシステムについて紹介します。

***

***

## オープンソース {#s9837f3b}

### [Apache FOP](https://xmlgraphics.apache.org/fop/) {#z9bf216b}

Apache FOPは、XSL-FOの処理系で、Apache XML Graphics プロジェクトにより開発されています。PDF を含む様々な出力フォーマットに対応しています。Java による実装です。

### [Patoline](http://patoline.org/) {#vdc178df}

主に OCaml で書かれた組版システムです。LaTeX 風の独自入力フォーマットで PDF など様々なフォーマットで出力します。

### [PDFJ](http://hp1.jonex.ne.jp/~nakajima.yasushi/) {#f1452ce3}

Perl で実装された PDF 生成用のモジュールです。JIS X 4051 にほぼ準拠した日本語組版ルールを組み込んであるのが特徴です。

### [SILE](http://www.sile-typesetter.org/) {#va3c00e3}

Lua で書かれた組版システム。LaTeX 風の独自の入力フォーマットと XML による入力で、PDF 出力です。Harfbuzz による OpenType レイアウト機能を備えており、日本語を含む様々な言語・文字体系をサポートします。Lua により拡張可能です。

### [Vivliostyle プロジェクト](http://vivliostyle.co.jp/project/) {#v10e66b1}

HTML+CSSベースの組版システムです。電子出版の時代にマッチする新しい組版システムを、Webブラウザ技術をベースに作ることを目指しています。

### [Weasy Print](http://weasyprint.org/) {#s618647b}

WeasyPrint は HTML+CSS から PDF や PNG を出力するレンダリング・エンジンです。その目的は出版向けのWeb標準技術をサポートすることにあります。Python などによる実装で、BSDライセンスで提供されています。Pango によるレイアウトと Cairo を用いた出力です。
