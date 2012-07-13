---
title: "Texmaker/設定/Linux"
url: "/Texmaker/設定/Linux/"
date: 2012-07-13T16:54:29Z
pukiwiki: "Texmaker/設定/Linux"
---

# Texmaker/設定/Linux

## [Evince](/Evince/) との連携 {#xd595a5d}

LaTeX コマンド, PdfLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#dc58c25f}

[Evince#fwdevince](/Evince/#ie18c015) の fwdevince を使用します．<br>

forward search は PDFビューアに

```
fwdevince %.pdf @ #.tex
```

です．

## Okular との連携 {#e1d5124a}

■ PDF の場合

LaTeX コマンド, PdfLaTeX コマンドのオプションに -synctex=1 を追加します．

■ DVI の場合 (非推奨)

LaTeX コマンドのオプションに -src-specials を追加します．

***

- texmaker2o_k_u_l_a_r

***

```
#!/bin/sh
okular --unique "file:$1#src:$2 $3"
```

***

```
$ chmod +x texmaker2o_k_u_l_a_r
$ sudo cp -p texmaker2o_k_u_l_a_r /usr/local/bin
```

### forward search {#rb0da469}

■ PDF の場合

forward search は PDFビューアに

```
texmaker2o_k_u_l_a_r %.pdf @ !/#.tex
```

です．

■ DVI の場合 (非推奨)

forward search は DVIビューアに

```
texmaker2o_k_u_l_a_r %.pdf @ #.tex
```

です．

### inverse search {#r820bc14}

\[Settings\]-\[Configure Okular...\]-\[Editor\] の項目から Custom Text Editor を選択します．

Editor:
: Custom Text Editor

Command:
: texmaker "%f" -line %l

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## PdfViewer との連携 {#d2a108e6}

### forward search {#t982a3a5}

***

- texmaker2pdfviewer

***

```
#!/bin/sh
pdfviewer "file:$1#src:$2 $3"
```

***

```
$ chmod +x texmaker2pdfviewer
$ sudo cp -p texmaker2pdfviewer /usr/local/bin
```

forward search は PDFビューアに

```
texmaker2pdfviewer %.pdf @ #.tex
```

です．

### inverse search {#xc8511ae}

\[Tools\]-\[Settings\]-\[Configure PdfViewer...\]

Editor:
: texmaker "%f" -line %l

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## pxdvi との連携 (非推奨) {#v8bf4b70}

LaTeX コマンドのオプションに -src-specials を追加します．

### forward and inverse search {#gd5c34f7}

forward and inverse search は DVIビューアに

```
pxdvi -nofork -watchfile 1 -editor "texmaker %f -line" %.dvi -sourceposition "@ #.tex"
```

です．

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．
