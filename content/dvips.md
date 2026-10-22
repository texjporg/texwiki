---
title: "dvips"
url: "/dvips/"
date: 2004-09-21T00:42:38Z
pukiwiki: "dvips"
---

# dvips

## dvips (非推奨) → [dvipdfmx](/dvipdfmx/) を使用する {#y40d302b}

dvips は DVI ファイルを [PostScript](/PostScript/) ファイルに変換するソフトウェアです。
実績があり、信頼のおけるプログラムとして、かつては TeX の世界で広く用いられていました。

現在では PostScript は非推奨となっているため、dvips の代わりに dvipdfmx を使用してください。

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

このとき，TeX Live では欧文フォントとして Type 1 フォントが使われます。

<!-- 少し古い W32TeX を使っている場合は Type 1 フォントでなく pk フォントが使われてしまい，これを PDF に変換すると汚くなります。 -->
<!-- 私の手元では 2012 年 11 月時点で pk フォントを利用していたことを確認しています。 -->
<!-- 2014 年 12 月にはいつのまにか Type 1 フォントになっていました。 -->
<!-- なお，かつての teTeX や ptetex は 2006 年時点で既に Type 1 フォントでした。 -->

PS ファイルを引き続き PDF に変換する予定があれば

```
dvips -Ppdf -o foo.ps foo.dvi
```

ように “-Ppdf” というオプションを付けておきましょう。
欧文 Base14 フォントを埋め込む場合は “-Pdownload35” といったオプションにします。

ハイパーリンクを埋め込んであるなら

```
dvips -z -o foo.ps foo.dvi
```

のように “-z” を付けます。

#### 制限事項 {#x73150ff}

長い間新機能の追加がないため、技術的にはかなり遅れています。
以下のような制限があります。

- OpenType や TrueType フォントは利用できない。

> 利用できるのは PostScript Type1 フォントと PK フォントです。

- PNG、JPEG、PDF などの画像は利用できない。

> 画像は常に EPS へ変換して利用します。

#### dvips の用紙サイズ指定 {#b1d8723b}

標準では A4 サイズになり，&#x25;&#x25;BoundingBox や &#x25;&#x25;PaperSize には正しい用紙サイズが出力され，PostScript の用紙設定コマンド a4 が出力されます。
この用紙設定コマンドが解釈不可能な場合には単に無視されます。

レターサイズにするには dvips に -t letter というオプションをつけて実行します。

[jsclasses](/jsclasses/)でたとえば

```
\documentclass[a4paper,papersize]{jsarticle}
```

のようにオプション \[papersize\] を与えれば，DVI ファイル中に

```
papersize=用紙の幅,用紙の高さ
```

という形式の [special 命令](</special 命令/>)が挿入されます。

一般のドキュメントクラスでこのような special を出力するには，LaTeX ファイルのプリアンブルにたとえば

```
\AtBeginDvi{\special{papersize=210mm,297mm}}
```

のように書いておきます。

また，dvips に -t a4 というオプションを与えれば，強制的に a4 という設定が選ばれ，PDF に変換した際に正しく A4 サイズになります。

#### dvips で変換した PS ファイルを PDF に変換する {#m9a341d6}

dvips で出力した PS ファイルを PDF ファイルに変換するには，以下の方法があります：

- dvips で変換した PS ファイルは [Ghostscript](/Ghostscript/) 付属の ps2pdf コマンドで PDF ファイルに変換できます。きちんと設定すれば，日本語部分もきれいなアウトラインで出力されます。

- Adobe Acrobat をお持ちであれば，PS ファイルをダブルクリックすれば Adobe Acrobat Distiller が PDF に変換してくれます。

通常のドキュメントクラスでは，a4paper オプションを付けても，Adobe Acrobat Distiller のデフォルト設定では用紙がレターサイズになってしまいます。
A4 にするには，ジョブオプションの設定でページサイズを変えるか，あるいは dvips に “-t a4” というオプションを付けてください。
[jsclasses](/jsclasses/)なら

```
\documentclass[a4paper,papersize]{jsarticle}
```

のように “papersize” オプションを付けると dvips が用紙サイズを認識してくれます。

#### 図の挿入 {#e0b06e9a}

図を挿入する際には [graphicx](/graphicx/) パッケージに

```
\usepackage[dvips]{graphicx}
```

のように dvips オプションを指定します．
図として EPS を挿入できます．

% 以下，LaTeX入門/図表からの移転。

(u)pLaTeX + [dvips](/dvips/) でタイプセットする場合には

```
\documentclass[dvips]{jsarticle}
\usepackage[dvips]{graphicx}
```

と書くことで，画像取り込みの指示が dvips に正しく伝わります。

#### しおりの文字化けを防ぐ {#v5d4fb65}

LaTeX で作成した日本語文書を
dvips を用いて PDF 化する際，しおりが文字化けしないようにするためには
[convbkmk](https://ctan.org/pkg/convbkmk) を使います。

- [http://www.t-lab.opal.ne.jp/tex/uptex.html](http://www.t-lab.opal.ne.jp/tex/uptex.html)
- [convbkmkコマンドの使い方　覚え書き](http://konoyonohana.blog.fc2.com/blog-entry-35.html)

なお，convbkmk は Ruby スクリプトですので，[Ruby](/Ruby/) の処理系が必要です．

#### ChangeLog {#o96c7d5c}

- [https://git.texlive.info/texlive/tree/Build/source/texk/dvipsk](https://git.texlive.info/texlive/tree/Build/source/texk/dvipsk)
    - [log](https://git.texlive.info/texlive/log/Build/source/texk/dvipsk)
    - [ChangeLog](https://git.texlive.info/texlive/tree/Build/source/texk/dvipsk/ChangeLog)

### リンク集 {#fd89856f}

- TeXLiveのdvips [forum:678](https://okumuralab.org/tex/mod/forum/discuss.php?d=678)
- pdfへのフォントの埋め込みとPSプリンタ [qa:38540](https://okumuralab.org/~okumura/texfaq/qa/38540.html)
