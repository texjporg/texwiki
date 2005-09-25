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
\usepackage[doublespacing]{setspace}                   % 原稿全体をダブルスペースにします。
\renewcommand{\listfigurename}{Legends of Figures}
```

### ダブルスペース {#j474cf50}

簡単にダブルスペース化するには、doublespace.styまたはsetspace.styを使う。特別な理由がない限り、setspace.styを使った方が無難。

- doublespaceの最新版は1986年であり、一方、setspaceの方は2000年である
- doublespaceスタイルを使うと、backgrndやpdfdraftcopyのようにcolorを使う場合にエラーになる。詳細と解決策 [TeX FAQ 37934](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/37934.html)

部分的にシングルスペースや任意のスペーシングをしたい場合のコマンド・環境がsetspace.styに用意されているので、詳細はsetspace.styの中をのぞく。

### タイトルページの作成 {#h7ddae99}

タイトルページはtitlepage環境の中に書きます。articleにtitlepageオプションをつけると、titlepage環境やabstract環境は自動的に改ページされます。ただし、ページ番号はふられません。

<!-- URMSBJでは、タイトルページの要素として、 -->
<!-- - 論文のタイトル -->
<!-- - 著者氏名と最高学位及び学会員資格 -->
<!-- - 所属 -->
<!-- - 通信の責任を持つ著者の氏名と住所 -->
<!-- - 別刷の依頼先の著者名と住所 -->
<!-- -  -->

タイトルページに図の数や表の数を入れるにはlastpage.styを使う。表の数は
最後の\begin{table}...\end{table}の間に、\label{lasttable}を入れ、\ref{lasttable}で参照する。図の数は最後の\begin{figure}...\end{figure}の間に、\label{lastfig}を入れ、\ref{lastfig}で参照する。

#### Todo {#jd39c775}

- 総単語数（抄録、謝辞、図表キャプション、文献リストは除く）を自動的にカウントして、タイトルページに入れる

### ページ番号 {#z8ab941f}

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

### その他 {#b7405687}

### コメント {#y6aa6ec3}
