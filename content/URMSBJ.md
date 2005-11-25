---
title: "URMSBJ"
url: "/URMSBJ/"
date: 2005-08-25T23:40:21Z
pukiwiki: "URMSBJ"
---

# URMSBJ

<!-- 2005年  8月 26日 金曜日 谷村 -->
<!-- どんどん書き足してください -->

## Uniform Requirements for Manuscripts Submitted to Biomedical Journals {#xe7b281e}

医学系のトップジャーナルが採用している共通の投稿規定（Uniform Requirements for Manuscripts Submitted to Biomedical Journals: 生物医学雑誌投稿に関する統一規定）に合わせた論文をTeXで書くTipsを集めましょう。

***

### Uniform Requirements for Manuscripts Submitted to Biomedical Journals とは {#occb286d}

生物医学の分野では、「[生物医学雑誌投稿に関する統一規定 (Uniform Requirements for Manuscripts Submitted to Biomedical Journals）](http://www.icmje.org/icmje.pdf)」が[国際医学雑誌編集者委員会（International Committee of Medical Journal Editors）](http://www.icmje.org/)により作成されており、現在500誌以上の雑誌がこの規定に従っています。これは、1979年に発表され、最初に会議を開催した都市の名をとってバンクーバースタイルと呼ばれ、2004年10月版が最新版です。最新版の[日本語訳](http://www.toukoukitei.net/URM0410.pdf)も存在します。

### プリアンプルの例 {#yb81b0fc}

```
\documentclass[a4paper,titlepage]{article}
\usepackage{graphicx}
\usepackage{times}
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

簡単にダブルスペース化するには、doublespace.styまたはsetspace.styを使う。特別な理由がない限り、setspace.styを使った方が無難。

- doublespaceの最新版は1986年であり、一方、setspaceの方は2000年である
- doublespaceスタイルを使うと、backgrndやpdfdraftcopyのようにcolorを使う場合にエラーになる。詳細と解決策 [TeX FAQ 37934](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/37934.html)

部分的にシングルスペースや任意のスペーシングをしたい場合のコマンド・環境がsetspace.styに用意されているので、詳細はsetspace.styの中をのぞく。

### タイトルページの作成 {#h7ddae99}

URMSBJでは、タイトルページの要素として、

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

タイトルページはtitlepage環境の中に書きます。articleにtitlepageオプションをつけると、titlepage環境やabstract環境は自動的に改ページされます。ただし、ページ番号はふられません。

タイトルページに図の数や表の数を入れるにはlastpage.styを使う。表の数は
最後の\begin{table}...\end{table}の間に、\label{lasttable}を入れ、\ref{lasttable}で参照する。図の数は最後の\begin{figure}...\end{figure}の間に、\label{lastfig}を入れ、\ref{lastfig}で参照する。

#### Todo {#jd39c775}

- 総単語数（抄録、謝辞、図表キャプション、文献リストは除く）を自動的にカウントして、タイトルページに入れる

### ページ番号 {#z8ab941f}

ページ番号はタイトルページからはじめて一連番号を付けなければならない。

<!-- Abstractからページ番号を振りたい場合は、\begin{abstract}...\end{abstract}のあとに、 [#dfa3a50d] -->
<!-- \addtocounter{page}{1} -->
<!-- を追加する。 -->

#### ページ番号を右上に {#a0c50ac9}

最新版のURMSBJではページ番号の位置指定はなくなったが、ページ番号の位置を簡単に変更したい場合は、pageno.styを使う。例えば右上なら下記のようにする。

```
\usepackage[outsidehead]{pageno}
```

### 四方余白を1インチに {#ae6567ae}

最新版のURMSBJでは「十分な余白」に変更されたが、四方余白を1インチと指定されている場合は、fullpage.styで簡単に四方余白を1インチにできる。

```
\usepackage{fullpage}
```

オプションなしで読み込むだけでOK。もし、\usepackage\[outsidehead\]{pageno}と併用して本文と右肩のページ番号が重なる場合は、\usepackage\[outsidehead\]{pageno}をはずして、単に

```
\usepackage[myheadings]{fullpage}
```

とする。fullpageのその他のオプションは、plain, empty, headings。

### 図表 {#gb594e5c}

URMSBJでは、図表は1つずつ独立したページで用意して、本文の後につけなければならない。また、図はキャプションなしで用意し、図の裏に図番号などのラベルを貼る。

いまのところの妥協案は下記の通り。

自分や共著者へのプレビュー用に通常通りfigure環境やtable環境を使い、投稿時に

```
\usepackage[noheads,tablesfirst]{endfloat}
```

とする。すると、図の挿入箇所に

```
[Figure 1 about here]
```

などと挿入され、図表は本文の後に回される。デフォルトでは図が表よりも先にくるので、tablesfirstというオプションを入れる。

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

図をキャプションなしにして、さらにページいっぱいに拡大する方法はいまのところ不明（誰か加筆してください）。List of Figuresの方はちゃんとキャプションがリストされているはず。

#### Todo {#a08dd516}

- 図の裏に貼るラベルを自動出力

### 度量衡単位 {#f7517a12}

SI単位を用いる。これをサポートするスタイルファイルとして、SIunits.styとsistyle.styがあり、両者は趣が異なる。Slunitsの方はフルスペルを書いてそれを大文字小文字を間違わずに正しく記号化するためのもの（例えば、mHz Mhz mhz MHzを区別してくれる）。SIstyleの方は入力を簡略化するための支援マクロである。残念ながら、SIunits.styはplatexでコンパイルできない（latexならOK）。

<strong>(例)</strong> SIstyleの使用例

<table>
<tbody>
<tr><td> \SI{-1.234e^3}{N.m} </td><td><img src="http://shakan2.tm.nagasaki-u.ac.jp/~umusus/texwiki-images/sistyle1.png" alt=""></td></tr>
<tr><td> \ang{32;46;23.373} </td><td><img src="http://shakan2.tm.nagasaki-u.ac.jp/~umusus/texwiki-images/sistyle2.png" alt=""></td></tr>
<tr><td> \SI{5}{\micro s} </td><td><img src="http://shakan2.tm.nagasaki-u.ac.jp/~umusus/texwiki-images/sistyle3.png" alt=""></td></tr>
<tr><td> \SI{60}{\degC} </td><td><img src="http://shakan2.tm.nagasaki-u.ac.jp/~umusus/texwiki-images/sistyle4.png" alt=""></td></tr>
</tbody>
</table>

もちろん本文中にも\degCなどマクロは使用できる。

### 略語を簡単に {#n64448be}

略語は初出の時にフルスペルでかかなくてはいけない。これを自動的にしてくれるacromake.styがある。

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

となる。自分がよく使う略語の定義ファイルを作成しておき、\input{}で読み込めば、略語の展開を気にすることなく、本文に集中できる。

### 文献スタイル {#n0cb9c0e}

幸いにもURMSBJ用のbstファイル（[vancouver.bst](http://www.ring.gr.jp/pub/text/CTAN/biblio/bibtex/contrib/vancouver/vancouver.bst) \[[詳細](http://www.ctan.org/info?id=vancouver)\]）がCTANにあります。これを使って

```
\bibliographystyle{vancouver}
\bibliography{使用するbibファイル名}
```

とすればOKです。

このvancuver.bstは、論文タイトルをbibファイルにかかれているとおりに出力します。

#### 論文タイトルを文頭以外小文字に {#x1a58ed1}

Lacetなどに投稿する際には文頭以外は小文字にした方がよいでしょう。
自動的に論文タイトルの文頭以外を小文字にするには、vancouver.bstの546行目付近の

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

vancouver.bstでは、例えば、bibファイルの中に Donald E. Knuth と書かれていれば、
Knuth DonaldEと出力してしまいます。bibファイルの中を D. E. Knuthと代えれば、
Knuth DE と本来の出力をします。vancouver.bstを編集して、Donald E. KnuthでもD. E. Knuthでも Knuth DEと出力するようにしましょう。vancouver.bstの467行目

```
"{vv~}{ll}{ ff{}}{ jj}"
```

を

```
"{vv~}{ll}{ f{}}{ jj}"
```

と編集します。

```

```

### その他 {#b7405687}

### コメント {#y6aa6ec3}
