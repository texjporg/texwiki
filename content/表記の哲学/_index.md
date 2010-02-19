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
    - ISOに従うと（立体(upright)ではなくて）イタリック体とするのはこれらだけとのようです。
    - 例として $f\_{i} (x)$ の $f$、$i$ や $x$ がイタリック体。
    - 物理定数は数学的には変数扱い（イタリック体）とのこと（例：$c = 299{,}792{,}458$\\,m/s）。
    - 数学的な定数と既定な関数（立体のまま）の例は，$\sin \uppi$。

- 行列変数
    - 大文字かつイタリック体（ISOに従うと）
    - ＋ボールド体とはしない流儀の例
        - [http://physics.nist.gov/cuu/pdf/sp811.pd](http://physics.nist.gov/cuu/pdf/sp811.pd)
    - ＋ボールド体とする流儀の例（これは古い？）
        - [http://physics.nist.gov/Document/typefaces.pdf](http://physics.nist.gov/Document/typefaces.pdf)
    - 日本でボールド体が普及していない原因は？

- 行列転置操作の ${}^{t} A$ や $A^{T}$（イタリック体で良いかどうか？）
    - t/T は “<strong>t</strong>ranspose” の略．そもそも変数・変関数には属さないのでイタリック体対象外で立体のまま（ISOに従うと）
        - 従って ${}^{\mathrm{t}} A$ や$A^{\mathrm{T}}$ のように立てて書く（べきという流儀がある）。
        - 念を入れると $A^{\operatorname{T}}$かも．
        - \top を使う人もいる。

- 単位名は立体で表記
    - 変数・変関数には属さないのでイタリック体対象外で立体のまま（ISOに従うと）
    - 例として “1 &micro;m” （“1 &mu;m”。環境によってどちらかは立体に見えるはず）は次のようにして表す。
        <!-- イタリック体に見える例は “1 &mu;m” -->
        - 1\\,\textmu m（TS1 encoding:
            \usepackage\[T1\]{fontenc}  と \usepackage{textcomp}，さらに加えて\usepackage{lmodern} を使用．）
        - 1\\,$\upmu$m （\usepackage{upgreek} を使用）
        - 1\\,\Pisymbol{psy}{"6D}m（pifont.sty パッケージを使用）
        - 1\\,{\usefont{U}{psy}{m}{n} \symbol{"6D}}m （多少見映えが良くない？）
        - いずれも\textmuを定義して使うと良さそう．例：\DeclareRobustCommand\*\textmu{\leavevmode{\usefont{U}{psy}{m}{n} \symbol{"6D}}}

- 多数桁数値の3桁毎区切り
    - 見易くするために「\\,」を挿入し3桁毎区切りが許される．(ISO)
    - 英語流では，299,792,458 （数式モード内では $299{,}792{,}458$）
        - 参考情報wikipedia: [http://ja.wikipedia.org/wiki/小数点](<http://ja.wikipedia.org/wiki/小数点>)

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
    - \emph{}はゴシック体としている．
    - 何かの由来がある？
- 下線を使いたがる人もいる
- イタリック体も見られる（英語では強調表示の基本）
- 勘案するとボールド \bfseries (\textbf) が妥当でしょうか？

#### 数値範囲 {#zd86c11e}

「○○○--○○○」とするか「○○○〜○○○」か

- 日本の伝統は後者
    - $\sim$を使用（\\-- を定義例: \def\\--{$\sim$} ）
    - 日本語テキスト中では「○○○〜○○○」で問題ない（en-dash でつなぐのは英語式）．逆に，欧米人は，〜をみると $\sim$ の意味 (大体，オーダーは等しく) にしか取らない．

- ～ と 〜 は字形が違う．前者が正しいと思うが，どうか？？
    - 前者は危険(?)なMicrosoftコード文字(cp932)のはず？

#### 章名・節名 {#cdd3210f}

bold もしくは gothic体？ （もしくはbold gothic体？）

- LaTeXタイプセットするとデフォルトでbold体となる．
