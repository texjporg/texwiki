---
title: "TeXworks/設定/Linux"
url: "/TeXworks/設定/Linux/"
date: 2012-07-13T03:02:14Z
pukiwiki: "TeXworks/設定/Linux"
---

# TeXworks/設定/Linux

## Okular との連携 {#p26e93fe}

### inverse search {#b1008e80}

\[Settings\]-\[Configure Okular...\]-\[Editor\] の項目から Custom Text Editor を選択します．

Editor:
: Custom Text Editor

Command:
: texworks --position=%l "%f"

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## PdfViewer との連携 {#v93c1198}

### inverse search {#taa10f7d}

\[Tools\]-\[Settings\]-\[Configure PdfViewer...\]

Editor:
: texworks --position=%l "%f"

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## gnuplot との連携 {#pe8db1a3}

- [LaTeX - おもこん - Yahoo!ブログ](http://blogs.yahoo.co.jp/jeaou/folder/1202527.html)
- [VineLinuxの書庫](http://blogs.yahoo.co.jp/jeaou/folder/1199960.html)
    - おもこんには、VineLinuxでgnuplotとTexworksを連携させる話題があり、Texworksのコンフィギュレーションファイルがその中で解説されています。[VineLinuxの書庫](http://blogs.yahoo.co.jp/jeaou/folder/1199960.html)から、「VineLinuxのgnuplot…」「pregnuplotを…」を見てください。
