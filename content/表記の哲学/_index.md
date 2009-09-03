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

- 数学的な変数（と変関数）のシンボルをイタリック体とする．
    - ISOに従うと（立体ではなくて）イタリック体とするのはこれらだけとのようです。
    - 例として $f\_{i} (x)$ の $f$、$i$ や $x$ がイタリック体。
    - 物理定数は数学的には変数扱い（イタリック体）とのこと（例：$c = 299{,}792{,}458$\\,m/s）。
    - 数学的な定数と既定な関数（立体のまま）の例は，$\sin \uppi$。

- 行列転置操作の ${}^{t} A$ や $A^{T}$（イタリック体で良いかどうか？）
    - t/T は “<strong>t</strong>ranspose” の略．変数・変関数には属さないのでイタリック体対象外で立体のまま（ISOに従うと）
        - 従って ${}^{\mathrm{t}} A$ や$A^{\mathrm{T}}$ のように立てて書く（べきという流儀がある）。
        - \top を使う人もいる。

- 単位名は立体で表記
    - 変数・変関数には属さないのでイタリック体対象外で立体のまま（ISOに従うと）
    - 例として “1 &micro;m” （“1 &mu;m”。環境によってどちらかは立体に見えるはず）は次のようにして表す。
        <!-- イタリック体に見える例は “1 &mu;m” -->
        - 1\\,\textmu m（TS1 encoding
            \[“\usepackage\[T1\]{fontenc} \usepackage{textcomp}”\] 加えて\usepackage{lmodern} を使用）
        - 1\\,$\upmu$m （\usepackage{upgreek} を使用）
        - 1\\,\Pisymbol{psy}{"6D}m（pifont.sty パッケージを使用）
        - 1\\,{\usefont{U}{psy}{m}{n} \symbol{"6D}}m

- BibTeX データの人名で，“Jr” か “Jr.” か？
    - どちらも間違いではない。
    - 試しに BibTeXing (Oren Patashnik,
        [CTAN:biblio/bibtex/contrib/doc/btxdoc.pdf](http://www.ring.gr.jp/pub/text/CTAN/biblio/bibtex/contrib/doc/btxdoc.pdf))
        を調べてみると，例の中では “Jr” となっている。
    - 自分で .bst ファイルを書いて置換を行うようにすれば，最終出力をどちらかに統一できそう。

### 日本語表記 {#p670ef1d}

日本語表記の伝統は．．．

#### 強調 {#qa4a098e}

bold もしくは gothic体？ （もしくはbold gothic体？）

- 伝統では強調はゴシック体？
- 下線を使いたがる人もいる
- イタリック体も見られる（英語では強調表示の基本）
- 勘案するとボールド \bfseries (\textbf) が妥当でしょうか？

#### 数値範囲 {#zd86c11e}

「○○○--○○○」とするか「○○○〜○○○」か？

- 伝統では後者？
    <!-- 日本語テキスト中では「○○○～○○○」で問題ない（en-dash でつなぐのは英語式）． -->
