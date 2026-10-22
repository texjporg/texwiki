---
title: "Texdoc"
url: "/Texdoc/"
date: 2016-11-30T05:47:36Z
pukiwiki: "Texdoc"
---

# Texdoc

## [Texdoc](https://www.tug.org/texdoc/) {#oa480686}

Texdoc は [TeX Live](</TeX Live/>) に含まれるドキュメントを検索・閲覧するためのコマンドラインツールです．Texdoc にキーワード（例えば，LaTeX パッケージの名前）を与えることにより，関連するドキュメントをローカルディスク内で検索し，適切なビューアで当該ドキュメントを表示してくれます．

***

***

### 動作環境 {#t2f499ed}

- Windows
- macOS, Linux など UNIX 互換 OS

### 基本的な使い方 {#kb4196bc}

Texdoc の最も単純な使い方は以下のようなものです．

$ texdoc &lt;keyword>

これにより &lt;keyword> に関連する文書が適当なビューアにより表示されます．例えば

$ texdoc jsarticle

のようにすると [jsclasses](/jsclasses/) の説明文書 jsclasses.pdf が既定の PDF ビューアで表示されます．

Texdoc のさらに詳しい使い方については

$ texdoc --help

のようにしてヘルプを表示するか

$ texdoc texdoc

により texdoc 自体の説明文書（texdoc.pdf）をご覧になるといいでしょう．

### 関連記事 {#y4a9bd8e}

- [TeX Live ドキュメント案内](http://qiita.com/wtsnjp/items/f8d853cccb9fd95b012c)
