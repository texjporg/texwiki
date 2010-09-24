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
には正しい用紙サイズが出力されますが，PostScript の用紙設定コマンド a4 は出力されません。
a4 コマンドを含む PostScript ファイルはプリンタ依存になってしまうからです。
しかし，これを無設定の Acrobat Distiller で処理すると，用紙がレターサイズになってしまいます。

> 注意: 2007年10月25日現在、最も新しい config.ps では、デフォルトの用紙設定コマンド <!-- 日付にご注意！ -->
> a4 が出力されます。a4 が解釈できないプリンタの場合は無視され、解釈される
> 場合だけ使用されるように書かれています。 最新の W32TeX、
> ptetex3、ptexlive における dvips ではこの
> config.ps が採用されています。したがって、デフォルト用紙サイズを使って
> ps を作成する場合、以下に書かれているようにする必要はありません。

レターサイズになっても Acrobat や Acrobat Reader
での印刷に支障はありませんが，気になるなら Distiller
のジョブオプションの設定で A4 をデフォルトにするか，あるいは dvips
に -t a4 というオプションを付けて実行します。
この場合 a4 コマンドが PostScript ファイルに出力されます。

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
@ a4size 210mm 297mm
@+ %%PaperSize: a4

@ a4 210mm 297mm
@+ ! %%DocumentPaperSizes: a4
@+ %%BeginPaperSize: a4
@+ a4
@+ %%EndPaperSize

@ b4 257mm 364mm
@+ ! %%DocumentPaperSizes: B4
@+ %%BeginPaperSize: B4
@+ b4
@+ %%EndPaperSize

@ unknown 0in 0in
@+ statusdict /setpageparams known { hsize vsize 0 1 statusdict begin {
@+ setpageparams } stopped end } { true } ifelse { statusdict /setpage known
@+ { hsize vsize 1 statusdict begin { setpage } stopped pop end } if } if
```

ここで dvi ファイル内で papersize
を与えた場合，それが210mm×297mmに±1/4インチ(dvips 5.96 以降では 5bp. なお、
ptetex3 の dvips は 実質的に 5.96 になっており、5bp になっているはず.)の誤差で一致するなら a4size が選ばれます。
これは &#x25;&#x25;BoundingBox を210mm×297mmにし，&#x25;&#x25;PaperSize: a4
というコメントを出力しますが，Distiller で PDF
に変換する際にはジョブオプションのデフォルトページサイズになります。

また，257mm×364mmに±1/4インチ(dvips 5.96 以降では 5bp. なお、
ptetex3 の dvips は 実質的に 5.96 になっており、5bp になっているはず.)の誤差で一致するなら b4
が選ばれますが，これは &#x25;&#x25;BoundingBox を257mm×364mmにし，頭の部分で

```
%%DocumentPaperSizes: B4
```

という1行，最後のところで

```
%%BeginPaperSize: B4
b4
%%EndPaperSize
```

という3行を出力します。
b4 という PostScript コマンドのため，PostScript
ファイルはプリンタ依存になってしまいますが，PDF
に変換した際に正しく B4 サイズになります。

papersize がどの項目にも一致しないなら，最後の unknown
が選ばれ，

```
statusdict /setpageparams known { hsize vsize 0 1 statusdict begin {
setpageparams } stopped end } { true } ifelse { statusdict /setpage known
{ hsize vsize 1 statusdict begin { setpage } stopped pop end } if } if
```

という3行が出力され，プリンタ依存になりますがページサイズが正しく設定されます
（この3行は新しい teTeX 2 ではなくなっています）。

また，dvips に -t a4 というオプションを与えれば，強制的に a4
という設定が選ばれ，上記の b4 の場合と同様，PDF
に変換した際に正しく A4 サイズになります。

### dvips の日本語フォント指定 {#i633a67d}

- [QA: dvips で日本語フォントを指定するには](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=539)
