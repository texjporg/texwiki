---
title: "LyX/設定/Linux"
url: "/LyX/設定/Linux/"
date: 2012-10-02T12:13:33Z
pukiwiki: "LyX/設定/Linux"
---

# LyX/設定/Linux

[LyX](/LyX/) > [設定](</LyX/設定/>) > Linux

***

***

## 設定 {#f3c4bb26}

### 順検索 (forward search) {#l3e420bc}

#### [Okular](/Okular/) の場合 {#s32b3472}

PDFコマンドは [Okular](/Okular/) を使用します．
PDFコマンドのリストから okular --unique "$$o#src:$$n $$f" を選択します．

> ```
>
> ```
>
> <br>
>
> 順検索<br>
> 　DVIコマンド: <br>
> 　PDFコマンド: <ins>okular --unique "$$o#src:$$n $$f"</ins><br>

#### [Papers](/Papers/) の場合 {#ebd984f2}

PDFコマンドは synctex を使用します．

> ```
>
> ```
>
> <br>
>
> 順検索<br>
> 　DVIコマンド: <br>
> 　PDFコマンド: <ins>synctex view -i $$n:0:$$t -o $$o -x "papers -i %{page+1} $$o"</ins><br>

#### [zathura](/zathura/) の場合 {#f1b11fba}

PDFコマンドは [zathura](/zathura/) を使用します．

> ```
>
> ```
>
> <br>
>
> 順検索<br>
> 　DVIコマンド: <br>
> 　PDFコマンド: <ins>zathura --synctex-forward $$n:0:$$t $$o</ins><br>

#### [qpdfview](/qpdfview/) の場合 {#a6f5bad3}

PDFコマンドは [qpdfview](/qpdfview/) を使用します．

> ```
>
> ```
>
> <br>
>
> 順検索<br>
> 　DVIコマンド: <br>
> 　PDFコマンド: <ins>qpdfview --unique "$$o#src:$$f:$$n:0"</ins><br>

## Okular との連携 {#ka27016a}

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[出力\] の出力と同期(Y)をチェックして調整用マクロ(U):から \synctex=1 を選択します．

変換子のコマンドオプションに直接 -synctex=1 を追加しても OK です．

### forward search {#w6988b67}

[順検索 (forward search)](</LyX/設定/Linux/#l3e420bc>) を参照してください．

## Papers との連携 {#yfea5c32}

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[出力\] の出力と同期(Y)をチェックして調整用マクロ(U):から \synctex=1 を選択します．

変換子のコマンドオプションに直接 -synctex=1 を追加しても OK です．

### forward search {#i9ef9b4c}

[順検索 (forward search)](</LyX/設定/Linux/#l3e420bc>) を参照してください．

## zathura との連携 {#z3a17acd}

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[出力\] の出力と同期(Y)をチェックして調整用マクロ(U):から \synctex=1 を選択します．

変換子のコマンドオプションに直接 -synctex=1 を追加しても OK です．

### forward search {#md1a5537}

[順検索 (forward search)](</LyX/設定/Linux/#f1b11fba>) を参照してください．

## qpdfview との連携 {#i536202e}

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[出力\] の出力と同期(Y)をチェックして調整用マクロ(U):から \synctex=1 を選択します．

変換子のコマンドオプションに直接 -synctex=1 を追加しても OK です．

### forward search {#l5055820}

[順検索 (forward search)](</LyX/設定/Linux/#l3e420bc>) を参照してください．
