---
title: "dvips"
url: "/dvips/"
date: 2004-09-21T00:42:38Z
pukiwiki: "dvips"
---

# dvips

## dvips {#y40d302b}

dvips は DVI ファイルを PS ファイルに変換するソフトウェアです。

- [Tom Rokicki and Radical Eye Software](http://www.radicaleye.com/)
    - [The Official Dvips Home Page](http://www.radicaleye.com/dvips.html)
- [Dvips(k)](http://www.tug.org/dvips/)

***

***

### 使い方 {#a0ed32c6}

foo.dvi という DVI ファイルを PostScript ファイル foo.ps に変換するには，次のように打ち込みます：

```
dvips -o foo.ps foo.dvi
```

このとき，TeX Live や最近の W32TeX では欧文フォントとして Type 1 フォントが使われます。

少し古い W32TeX を使っている場合は Type 1 フォントでなく pk フォントが使われてしまい，これを PDF に変換すると汚くなります。 <!-- 私の手元では 2012 年 11 月時点で pk フォントを利用していたことを確認しています。 --> <!-- 2014 年 12 月にはいつのまにか Type 1 フォントになっていました。 --> <!-- なお，かつての teTeX や ptetex は 2006 年時点で既に Type 1 フォントでした。 -->
PS ファイルを引き続き PDF に変換する予定があれば

```
dvips -Ppdf -o foo.ps foo.dvi
```

ように “-Ppdf” というオプションを付けておきましょう。
欧文 Base14 フォントを埋め込む場合は “-Pdl” といったオプションにします。

ハイパーリンクを埋め込んであるなら

```
dvips -z -o foo.ps foo.dvi
```

のように “-z” を付けます。

#### dvips の用紙サイズ指定 {#b1d8723b}

標準では A4 サイズになり，&#x25;&#x25;BoundingBox や &#x25;&#x25;PaperSize には正しい用紙サイズが出力され，PostScript の用紙設定コマンド a4 が出力されます。
この用紙設定コマンドが解釈不可能な場合には単に無視されます。

レターサイズにするには dvips に -t letter というオプションをつけて実行します。

私の[新ドキュメントクラス](/jsclasses/)でたとえば

```
\documentclass[a4paper,papersize]{jsarticle}
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

ここで dvi ファイル内で papersize を与えた場合，それが210mm×297mmに±5bpの誤差で一致するなら
a4 が選ばれます (1bp = 1/72 インチ)。
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

を出力します。
従って Adobe Acrobat Distiller DC で PDF に変換する際には正しく A4 サイズになります。

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

papersize が 5bp の誤差範囲内でどの項目にも一致しないなら，最後の unknown が選ばれ，

```
statusdict /setpageparams known { hsize vsize 0 1 statusdict begin {
setpageparams } stopped end } { true } ifelse { statusdict /setpage known
{ hsize vsize 1 statusdict begin { setpage } stopped pop end } if } if
```

という3行が出力され，プリンタ依存になりますがページサイズが正しく設定されます。

また，dvips に -t a4 というオプションを与えれば，強制的に a4 という設定が選ばれ，PDF に変換した際に正しく A4 サイズになります。

#### dvips で変換した PS ファイルを PDF に変換する {#m9a341d6}

<strong> <em>注意</em>：最終的に PDF にしたいのであれば，処理速度や使いやすさの点で dvips + ps2pdf よりも [dvipdfmx](/dvipdfmx/) のほうがいいかもしれません。</strong>

dvips で出力した PS ファイルを PDF ファイルに変換するには，以下の方法があります：

- dvips で変換した PS ファイルは [Ghostscript](/Ghostscript/) 付属の ps2pdf コマンドで PDF ファイルに変換できます。きちんと設定すれば，日本語部分もきれいなアウトラインで出力されます。

- Adobe Acrobat DC をお持ちであれば，PS ファイルをダブルクリックすれば Adobe Acrobat Distiller DC が PDF に変換してくれます。

通常のドキュメントクラスでは，a4paper オプションを付けても，Adobe Acrobat Distiller DC のデフォルト設定では用紙がレターサイズになってしまいます。
A4 にするには，ジョブオプションの設定でページサイズを変えるか，あるいは dvips に “-t a4” というオプションを付けてください。
[新ドキュメントクラス](/jsclasses/)なら

```
\documentclass[a4paper,papersize]{jsarticle}
```

のように “papersize” オプションを付けると dvips が用紙サイズを認識してくれます。

#### 図の挿入 {#e0b06e9a}

図を挿入する際には
 \usepackage\[dvips\]{graphicx}
のように dvips オプションを指定します．
図として EPS を挿入できます．

#### しおりの文字化けを防ぐ {#v5d4fb65}

LaTeX で作成した日本語文書を
dvips を用いて PDF 化する際，しおりが文字化けしないようにするためには
[convbkmk](http://www.ctan.org/pkg/convbkmk) を使います。

- [http://www.t-lab.opal.ne.jp/tex/uptex.html](http://www.t-lab.opal.ne.jp/tex/uptex.html)
- [convbkmkコマンドの使い方　覚え書き](http://konoyonohana.blog.fc2.com/blog-entry-35.html)

なお，convbkmk は Ruby スクリプトですので，[Ruby](/Ruby/) の処理系が必要です．

### リンク集 {#fd89856f}

- TeXLiveのdvips [forum:678](https://okumuralab.org/tex/mod/forum/discuss.php?d=678)
- pdfへのフォントの埋め込みとPSプリンタ [qa:38540](https://okumuralab.org/~okumura/texfaq/qa/38540.html)

#### ChangeLog {#o96c7d5c}

- \[[texlive\] Index of /trunk/Build/source/texk/dvipsk](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipsk/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipsk/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipsk/ChangeLog?view=markup)
