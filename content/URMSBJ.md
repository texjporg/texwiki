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

医学系のトップジャーナルが採用している共通の投稿規定（Uniform Requirements for Manuscripts Submitted to Biomedical Journals）に合わせた論文をTeXで書くTipsを集めましょう。

***

### タイトルページの作成 {#h7ddae99}

<!-- URMSBJでは、タイトルページの要素として、 -->
<!-- - 論文のタイトル -->
<!-- - 著者氏名と最高学位及び学会員資格 -->
<!-- - 所属 -->
<!-- - 通信の責任を持つ著者の氏名と住所 -->
<!-- - 別刷の依頼先の著者名と住所 -->
<!-- -  -->

### ダブルスペース {#v4c4550b}

ダブルスペースにするには\usepackage{doublespace}をプリアンプルに書きます。

### 文献スタイル {#n0cb9c0e}

幸いにもURMSBJ用のbstファイル（[vancouver.bst](http://www.ring.gr.jp/pub/text/CTAN/biblio/bibtex/contrib/vancouver/vancouver.bst)）があります。これを使って

```
\bibliographystyle{vancouver}
\bibliography{使用するbibファイル名}
```

とすればOKです。

### コメント {#y6aa6ec3}
