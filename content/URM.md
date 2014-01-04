---
title: "URM"
url: "/URM/"
date: 2007-11-05T01:18:27Z
pukiwiki: "URM"
---

# URM

<!-- 2007年 11月  5日 月曜日 谷村 -->
<!-- 2005年8月26日金曜日に作成したURMSBJをURMに改めました -->
<!-- どんどん書き足してください -->

## Uniform Requirements for Manuscripts Submitted to Biomedical Journals {#xe7b281e}

医学系のトップジャーナルが採用している共通の投稿規定（Uniform Requirements for Manuscripts Submitted to Biomedical Journals: 生物医学雑誌投稿に関する統一規定）に合わせた論文をTeXで書くTipsを集めましょう。

***

### Uniform Requirements for Manuscripts Submitted to Biomedical Journals とは {#occb286d}

生物医学の分野では、「[生物医学雑誌投稿に関する統一規定 (Uniform Requirements for Manuscripts Submitted to Biomedical Journals）](http://www.icmje.org/urm_full.pdf)」が[国際医学雑誌編集者委員会（International Committee of Medical Journal Editors）](/ICMJE/)により作成されています。<br>
現在 500 誌以上の雑誌が URM に従っています（[URM の採用雑誌一覧](http://www.icmje.org/journals.html)）。<br>
これは、1979 年に発表され、最初に会議を開催した都市の名をとって[バンクーバースタイル](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%B3%E3%82%AF%E3%83%BC%E3%83%90%E3%83%BC%E6%96%B9%E5%BC%8F)と呼ばれています。<br>
最新版は 2010 年 4 月版です。<br>
日本語訳も存在します。<br>

- [海外医学雑誌投稿情報 | 統一規定 | 「生医学雑誌への投稿のための統一規定」 2010年4月改訂版 （翻訳）](http://www.toukoukitei.net/i4aURM201004.html)
- [ICMJE統一投稿規定（2010年改訂版）｜論文作成お役立ち情報｜株式会社翻訳センター](http://www.honyakucenter.jp/usefulinfo/uniform_requirements2010.html)

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

簡単にダブルスペース化するには、setspace.sty または doublespace.sty を使う。<br>
特別な理由がない限り、setspace.sty を使った方が無難。<br>

- setspace の最新版は 2000 年であり、一方、doublespace の方は 1986 年である
- doublespace スタイルを使うと、backgrnd や pdfdraftcopy のように color を使う場合にエラーになる。詳細と解決策 [qa:37934](https://okumuralab.org/~okumura/texfaq/qa/37934.html)

部分的にシングルスペースや任意のスペーシングをしたい場合のコマンド・環境が setspace.sty に用意されている。<br>
詳細は setspace.sty の中をのぞく。

### タイトルページの作成 {#h7ddae99}

URM では、タイトルページの要素として、

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

最新版の URM ではページ番号の位置指定はなくなったが、ページ番号の位置を簡単に変更したい場合は、pageno.styを使う。例えば右上なら下記のようにする。

```
\usepackage[outsidehead]{pageno}
```

### 四方余白を1インチに {#ae6567ae}

最新版の URM では「十分な余白」に変更されたが、四方余白を1インチと指定されている場合は、fullpage.styで簡単に四方余白を1インチにできる。

```
\usepackage{fullpage}
```

オプションなしで読み込むだけでOK。もし、\usepackage\[outsidehead\]{pageno}と併用して本文と右肩のページ番号が重なる場合は、\usepackage\[outsidehead\]{pageno}をはずして、単に

```
\usepackage[myheadings]{fullpage}
```

とする。fullpageのその他のオプションは、plain, empty, headings。

### 図表 {#gb594e5c}

URM では、図表は1つずつ独立したページで用意して、本文の後につけなければならない。また、図はキャプションなしで用意し、図の裏に図番号などのラベルを貼る。

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

略語は初出の時にフルスペルでかかなくてはいけない。これを自動的に行ってくれるacromake.styがある。

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

URMの文献スタイルの例は、
[ここ](http://www.nlm.nih.gov/bsd/uniform_requirements.html)にあります。
これは、[Vancouverスタイル](http://en.wikipedia.org/wiki/Vancouver_system)と呼ばれるもので、幸いにも
[vancouver.bst](https://mirror.ctan.org/biblio/bibtex/contrib/vancouver/vancouver.bst)
［[詳細](http://www.ctan.org/info?id=vancouver)］が CTAN にあります。
これを使って

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
