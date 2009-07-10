---
title: "表記の哲学"
url: "/表記の哲学/"
date: 2008-02-19T11:36:49Z
bookCollapseSection: true
pukiwiki: "表記の哲学"
---

# 表記の哲学

## 表記の哲学 {#z0617861}

こだわり過ぎるのはいかがなものかとは思いますが，気にし始めると気になって仕方ないことも少なくないものです。

{{< children >}}

- 行列転置操作の ${}^{t} A$ や $A^{T}$（イタリック体で良いかどうか？）
    - t/T は “<strong>t</strong>ranspose” の略なので，${}^{\mathrm{t}} A$ や
        $A^{\mathrm{T}}$ のように立てて書くべきだという流儀がある。
    - \top を使う人もいる。

- 変数（と変関数）のシンボルをイタリック体に（ISO
    に従うとこれらだけを立体ではなくイタリック体とするということのようです。）
    - 例として $f\_{i} (x)$ の $f$、$i$ や $x$ がイタリック体。
    - 物理定数は数学的には変数扱い（イタリック体）とのこと（例：$c = 299{,}792{,}458$）。
    - これに対して数学的な定数と既定な関数の例は，$\sin \uppi$。

- 単位名は立体で表記
    - 変数・変関数には属さない
    - 例として “&micro;m” は次のようにして表す。
        - \textmu s（TS1 encoding
            \[“\usepackage\[T1\]{fontenc} \usepackage{textcomp}”\] を使用）
        - \Pisymbol{psy}{"6D}s（pifont.sty パッケージを使用）
        - {\usefont{U}{psy}{m}{n} \symbol{"6D}}s
- BibTeX データの人名で，“Jr” か “Jr.” か？
    - どちらも間違いではない。
    - 試しに BibTeXing (Oren Patashnik,
        [CTAN:biblio/bibtex/contrib/doc/btxdoc.pdf](http://www.ring.gr.jp/pub/text/CTAN/biblio/bibtex/contrib/doc/btxdoc.pdf))
        を調べてみると，例の中では “Jr” となっている。
    - 自分で .bst ファイルを書いて置換を行うようにすれば，最終出力をどちらかに統一できそう。
