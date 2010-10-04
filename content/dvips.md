---
title: "dvips"
url: "/dvips/"
date: 2004-09-21T00:42:38Z
pukiwiki: "dvips"
---

# dvips

## dvips {#y40d302b}

\[未完\]

### dvips の用紙サイズ指定 {#b1d8723b}

標準では A4 サイズになり，&#x25;&#x25;BoundingBox や &#x25;&#x25;PaperSize
には正しい用紙サイズが出力され，PostScript の用紙設定コマンド a4 が出力されます。この用紙設定コマンドが解釈不可能な場合には単に無視されます。

レターサイズにするには dvips に -t letter というオプションをつけて実行します。

私の [新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/) でたとえば

```
\documentclass[papersize,a4paper]{jsarticle}
```

のようにオプション \[papersize\] を与えれば，dviファイル中に

```
papersize=用紙の幅,用紙の高さ
```

という形式の special コマンドが挿入されます。

一般のドキュメントクラスでこのような special を出力するには，LaTeX ファイルのプリアンブルにたとえば

```
\AtBeginDvi{\special{papersize=210mm,297mm}}
```

のように書いておきます。

この papersize special の解釈は dvips の設定ファイル config.ps に依存します。
たとえば config.ps に次のように書いてあったとします。

```
@ a4 210mm 297mm
@+ ! %%DocumentPaperSizes: a4
@+ %%BeginPaperSize: a4
@+ /setpagedevice where
@+  { pop << /PageSize [595 842] >> setpagedevice }
@+  { /a4 where { pop a4 } if }
@+ ifelse
@+ %%EndPaperSize
```

```
@ letter 8.5in 11in
@+ ! %%DocumentPaperSizes: Letter
@+ %%BeginPaperSize: Letter
@+ /setpagedevice where
@+  { pop << /PageSize [612 792] >> setpagedevice }
@+  { /letter where { pop letter } if }
@+ ifelse
@+ %%EndPaperSize
```

```
@ a4size 210mm 297mm
@+ ! %%DocumentPaperSizes: a4
@+ %%BeginPaperSize: a4
@+ /setpagedevice where
@+  { pop << /PageSize [595 842] >> setpagedevice }
@+  { /a4 where { pop a4 } if }
@+ ifelse
@+ %%EndPaperSize
 
@ jisb4 257mm 364mm
@+ ! %%DocumentPaperSizes: jisb4
@+ %%BeginPaperSize: jisb4
@+ /setpagedevice where
@+  { pop << /PageSize [729 1032] >> setpagedevice }
@+  { /jisb4 where { pop jisb4 } if }
@+ ifelse
@+ %%EndPaperSize
```

```
% use -t unknown with a \special{papersize=...} for a nonstandard page size.
@ unknown 0in 0in
@+ statusdict /setpageparams known { hsize vsize 0 1 statusdict begin {
@+ setpageparams } stopped end } { true } ifelse { statusdict /setpage known
@+ { hsize vsize 1 statusdict begin { setpage } stopped pop end } if } if
```

ここで dvi ファイル内で papersize
を与えた場合，それが210mm×297mmに±5bpの誤差で一致するなら a4 が選ばれます (1bp = 1/72 インチ)。
これは &#x25;&#x25;BoundingBox を210mm×297mmにし，

```
%%DocumentPaperSizes: a4
```

というコメントを出力し，最後のところで

```
%%BeginPaperSize: a4
/setpagedevice where
{ pop << /PageSize [595 842] >> setpagedevice }
{ /a4 where { pop a4 } if }
ifelse
%%EndPaperSize
```

を出力します。従って Distiller で PDF
に変換する際には正しく A4 サイズになります。

また，257mm×364mmに±5bpの誤差で一致するなら jisb4
が選ばれますが，これは &#x25;&#x25;BoundingBox を257mm×364mmにし，頭の部分で

```
%%DocumentPaperSizes: jisb4
```

という1行，最後のところで

```
%%BeginPaperSize: jisb4
/setpagedevice where
{ pop << /PageSize [729 1032] >> setpagedevice }
{ /jisb4 where { pop jisb4 } if }
ifelse
%%EndPaperSize
```

という6行を出力します。
従って PDF に変換した際に正しく JIS B4 サイズになります。

papersize が 5bp の誤差範囲内でどの項目にも一致しないなら，最後の unknown
が選ばれ，

```
statusdict /setpageparams known { hsize vsize 0 1 statusdict begin {
setpageparams } stopped end } { true } ifelse { statusdict /setpage known
{ hsize vsize 1 statusdict begin { setpage } stopped pop end } if } if
```

という3行が出力され，プリンタ依存になりますがページサイズが正しく設定されます。

また，dvips に -t a4 というオプションを与えれば，強制的に a4
という設定が選ばれ，PDF
に変換した際に正しく A4 サイズになります。

### dvips の日本語フォント指定 {#i633a67d}

- [QA: dvips で日本語フォントを指定するには](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=539)
