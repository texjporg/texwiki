---
title: "ICMJE"
url: "/ICMJE/"
date: 2014-01-04T18:47:49Z
pukiwiki: "ICMJE"
---

# ICMJE

## ICMJE (International Committee of Medical Journal Editors) {#ua5e736e}

### ICMJE (International Committee of Medical Journal Editors) とは {#b4160739}

ICMJE は [国際医学雑誌編集者委員会（International Committee of Medical Journal Editors）](http://www.icmje.org/) です．<br>

<!-- 2007年 11月  5日 月曜日 谷村 -->
<!-- どんどん書き足してください -->

## ICMJE Recommendations (Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals) {#xe7b281e}

医学系のトップジャーナルが採用している共通の統一投稿規定（Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals: 医学雑誌投稿に関する統一投稿規定）に合わせた論文をTeXで書くTipsを集めましょう。

***

### ICMJE Recommendations (Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals) とは {#occb286d}

医学の分野では、「[医学雑誌投稿に関する統一投稿規定 (Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals）](http://www.icmje.org/recommendations/)」が[国際医学雑誌編集者委員会（International Committee of Medical Journal Editors）](/ICMJE/)により作成されています。<br>
現在 500 誌以上の雑誌が ICMJE Recommendations に従っています（[ICMJE Recommendations の採用雑誌一覧](http://www.icmje.org/journals.html)）。<br>
これは、1979 年に発表され、最初に会議を開催した都市の名をとって[バンクーバースタイル](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%B3%E3%82%AF%E3%83%BC%E3%83%90%E3%83%BC%E6%96%B9%E5%BC%8F)と呼ばれています。<br>
最新版は 2013 年 12 月版です。<br>
日本語訳も存在します。<br>

- [第１章　はじめに - 臨床研究で学ぶ論文執筆](http://www.asca-co.com/oncol/2013/08/post.html)
- [論文執筆の手引き - 東京女子医科大学学会](http://www.twmu.ac.jp/gakkai/journal/qa.html)
- [投稿 | 【Ronbun.jp】医学論文を書く方のための究極サイト | 大鵬薬品工業株式会社](http://www.ronbun.jp/icmje/)

### プリアンプルの例 {#yb81b0fc}

```
\documentclass[a4paper,titlepage]{article}
\usepackage{graphicx}
\usepackage{newtxtext,newtxmath}
\usepackage[doublespacing]{setspace}
\renewcommand{\listfigurename}{Legends of Figures}
\usepackage[noheads,tablesfirst]{endfloat}
\AtBeginDelayedFloats{\renewcommand{\baselinestretch}{2}}
\makeatletter
\renewcommand{\@makecaption}[2]{%
  \vskip\abovecaptionskip
  \hbox to \hsize{\hfil #1\hfil}%
  \vskip\belowcaptionskip}
\makeatother
```

### ダブルスペース {#j474cf50}

簡単にダブルスペース化するには、setspace.sty を使う。<br>
部分的にシングルスペースや任意のスペーシングをしたい場合のコマンド・環境が setspace.sty に用意されている。<br>
詳細は setspace.sty の中をのぞく。

- \[[TeX\]論文を添削してもらう時のダブルスペース](http://cocomoff.hatenablog.com/entry/2012/02/10/143142)

### タイトルページの作成 {#h7ddae99}

ICMJE Recommendations では、タイトルページの要素として、

- 論文のタイトル
- 著者氏名及び所属機関
- その研究業績が帰属すべき部署及び機関の名称
- 権利放棄証書（必要に応じて）
- 通信担当著者とその連絡先（住所、TEL、FAX、e-mail）
- 別刷請求先の著者とその住所
- 助成金、装置、薬剤などの形態で受けた援助の出所
- ランニングタイトル
- 総単語数、表の数、図の数
    が必要。

タイトルページはtitlepage環境の中に書きます。<br>
articleにtitlepageオプションをつけると、titlepage環境やabstract環境は自動的に改ページされます。<br>
ただし、ページ番号はふられません。<br>

タイトルページに図の数や表の数を入れるにはlastpage.styを使う。<br>
表の数は
最後の\begin{table}...\end{table}の間に、\label{lasttable}を入れ、\ref{lasttable}で参照する。<br>
図の数は最後の\begin{figure}...\end{figure}の間に、\label{lastfig}を入れ、\ref{lastfig}で参照する。<br>

#### Todo {#jd39c775}

- 総単語数（抄録、謝辞、図表キャプション、文献リストは除く）を自動的にカウントして、タイトルページに入れる

### ページ番号 {#z8ab941f}

ページ番号はタイトルページからはじめて一連番号を付けなければならない。

<!-- Abstractからページ番号を振りたい場合は、\begin{abstract}...\end{abstract}のあとに、 [#dfa3a50d] -->
<!-- \addtocounter{page}{1} -->
<!-- を追加する。 -->

#### ページ番号を右上に {#a0c50ac9}

最新版の ICMJE Recommendations ではページ番号の位置指定はなくなったが、ページ番号の位置を簡単に変更したい場合は、pageno.styを使う。<br>
例えば右上なら下記のようにする。<br>

```
\usepackage[outsidehead]{pageno}
```

### 四方余白を1インチに {#ae6567ae}

最新版の ICMJE Recommendations では「十分な余白」に変更されたが、四方余白を1インチと指定されている場合は、fullpage.styで簡単に四方余白を1インチにできる。

```
\usepackage{fullpage}
```

オプションなしで読み込むだけでOK。もし、\usepackage\[outsidehead\]{pageno}と併用して本文と右肩のページ番号が重なる場合は、\usepackage\[outsidehead\]{pageno}をはずして、単に

```
\usepackage[myheadings]{fullpage}
```

とする。<br>
fullpageのその他のオプションは、plain, empty, headings。<br>

### 図表 {#gb594e5c}

ICMJE Recommendations では、図表は1つずつ独立したページで用意して、本文の後につけなければならない。<br>
また、図はキャプションなしで用意し、図の裏に図番号などのラベルを貼る。<br>

いまのところの妥協案は下記の通り。

自分や共著者へのプレビュー用に通常通りfigure環境やtable環境を使い、投稿時に

```
\usepackage[noheads,tablesfirst]{endfloat}
```

とする。すると、図の挿入箇所に

```
[Figure 1 about here]
```

などと挿入され、図表は本文の後に回される。<br>
デフォルトでは図が表よりも先にくるので、tablesfirstというオプションを入れる。<br>

#### 図版の説明文リストをダブルスペースに {#o3fe6c26}

endfloatを使っている場合、下記をプリアンプルに足す。

```
\AtBeginDelayedFloats{\renewcommand{\baselinestretch}{2}}
```

#### キャプションなしの図を出力する {#pc2b2ad4}

@makecaptionを再定義する。

```
\renewcommand{\@makecaption}[2]{%
  \vskip\abovecaptionskip
  \hbox to \hsize{\hfil #1\hfil}%
  \vskip\belowcaptionskip}
```

図をキャプションなしにして、さらにページいっぱいに拡大する方法はいまのところ不明（誰か加筆してください）。<br>
List of Figuresの方はちゃんとキャプションがリストされているはず。<br>

#### Todo {#a08dd516}

- 図の裏に貼るラベルを自動出力

### 度量衡単位 {#f7517a12}

SI 単位を用いる。<br>

#### siunitx {#x11d1f9f}

SI 単位をサポートするスタイルファイルとして、siunitx.sty がある。<br>
siunitx はフルスペルを書いてそれを大文字小文字を間違わずに正しく記号化するためのもの（例えば、mHz Mhz mhz MHzを区別してくれる）。<br>
siunitx は入力を簡略化するための支援マクロである。<br>

<strong>(例)</strong> siunitx の使用例

<table>
<tbody>
<tr><td> \SI[inter-unit-product=$\cdot$]{-1.234e3}{N.m} </td><td><img src="http://www2.hyo-med.ac.jp/~tanimura/images/sistyle1.png" alt=""></td></tr>
<tr><td> \ang{32;46;23.373} </td><td><img src="http://www2.hyo-med.ac.jp/~tanimura/images/sistyle2.png" alt=""></td></tr>
<tr><td> \SI{5}{\textit{\micro}s} </td><td><img src="http://www2.hyo-med.ac.jp/~tanimura/images/sistyle3.png" alt=""></td></tr>
<tr><td> \SI{60}{\degreeCelsius} </td><td><img src="http://www2.hyo-med.ac.jp/~tanimura/images/sistyle4.png" alt=""></td></tr>
</tbody>
</table>

### 略語を簡単に {#n64448be}

略語は初出の時にフルスペルでかかなくてはいけない。<br>
これを自動的に行ってくれるacromake.styがある。<br>

```
\acromake{ANSA}{{\tt ANSA}}{another nasty stupid acronym}
```

と書いておくと、

```
\ANSA is a new approach to the use of \ANSA, where \ANSA is ...
```

は

```
another nasty stupid acronym (ANSA) is a new approach to the use of ANSA, where  ANSA is ...
```

となる。<br>
自分がよく使う略語の定義ファイルを作成しておき、\input{}で読み込めば、略語の展開を気にすることなく、本文に集中できる。<br>

### 文献スタイル {#n0cb9c0e}

ICMJE Recommendations の文献スタイルの例は、
[ここ](http://www.nlm.nih.gov/bsd/uniform_requirements.html)にあります。<br>
これは、[Vancouverスタイル](http://en.wikipedia.org/wiki/Vancouver_system)と呼ばれるもので、幸いにも
[vancouver.bst](https://mirror.ctan.org/biblio/bibtex/contrib/vancouver/vancouver.bst)
［[詳細](http://www.ctan.org/pkg/vancouver)］が CTAN にあります。<br>
これを使って

```
\bibliographystyle{vancouver}
\bibliography{使用するbibファイル名}
```

とすればOKです。<br>

このvancuver.bstは、論文タイトルをbibファイルにかかれているとおりに出力します。<br>

#### 論文タイトルを文頭以外小文字に {#x1a58ed1}

Lacetなどに投稿する際には文頭以外は小文字にした方がよいでしょう。<br>
自動的に論文タイトルの文頭以外を小文字にするには、vancouver.bstの904行目付近の

```
FUNCTION {format.title}
{ title
%%duplicate$ empty$ 'skip$
%%  { "t" change.case$ }
%%if$
  "title" bibinfo.check
}
```

この部分の%を削除します。

#### 著者名のファーストネームをイニシャルに {#n367e118}

旧版の vancouver.bst では、例えば、bib ファイルの中に Donald E. Knuth と書かれていれば、
Knuth DonaldE と出力してしまいます。<br>
bib ファイルの中を D. E. Knuthと代えれば、
Knuth DE と本来の出力をします。<br>
vancouver.bst を編集して、Donald E. Knuth でも D. E. Knuth でも Knuth DE と出力するようにしましょう。<br>
vancouver.bst の731行目が

```
"{vv~}{ll}{ ff{}}{ jj}"
```

になっている場合は

```
"{vv~}{ll}{ f{}}{ jj}"
```

と編集します。
