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
\usepackage{amsfonts}
\usepackage{times}
\usepackage{doublespace}                            % 原稿全体をダブルスペースにします。
\renewcommand{\listfigurename}{Legends of Figures}
```

### タイトルページの作成 {#h7ddae99}

タイトルページはtitlepage環境の中に書きます。articleにtitlepageオプションをつけると、titlepage環境やabstract環境は自動的に改ページされます。ただし、ページ番号はふられません。

<!-- URMSBJでは、タイトルページの要素として、 -->
<!-- - 論文のタイトル -->
<!-- - 著者氏名と最高学位及び学会員資格 -->
<!-- - 所属 -->
<!-- - 通信の責任を持つ著者の氏名と住所 -->
<!-- - 別刷の依頼先の著者名と住所 -->
<!-- -  -->

#### Todo {#jd39c775}

- 総単語数（抄録、謝辞、図表キャプション、文献リストは除く）を自動的にカウントして、タイトルページに入れる
- 図と表の数を自動的にタイトルページに入れる

### 文献スタイル {#n0cb9c0e}

幸いにもURMSBJ用のbstファイル（[vancouver.bst](http://www.ring.gr.jp/pub/text/CTAN/biblio/bibtex/contrib/vancouver/vancouver.bst) \[[詳細](http://www.ctan.org/info?id=vancouver)\]）がCTANにあります。これを使って

```
\bibliographystyle{vancouver}
\bibliography{使用するbibファイル名}
```

とすればOKです。

### その他 {#b7405687}

doublespaceスタイルを使うと、backgrndやpdfdraftcopyのようにcolorを使う場合にエラーになる。詳細と解決策 [TeX FAQ 37934](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/37934.html)

### コメント {#y6aa6ec3}
