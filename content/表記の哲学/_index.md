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
        - 定義例（ジータ関数、ガンマ関数）： \let\zetaf\upzeta \let\Gammaf\Gamma
    - 変数もしくはquantitiesのシンボルはイタリック体とするので(ISO)，下付添え字にも適用．
        - The NIST Guide for the Use of the International System of Units (SI) ([http://physics.nist.gov/cuu/pdf/sp811.pdf](http://physics.nist.gov/cuu/pdf/sp811.pdf) ) 内の例：
        - L_P   (level of a power quantity)
        - \kappa_T  (isothermal compressibility)
        - C_p  (specific heat at constant pressure)
            <!-- 圧力をいつでも「p」で表すわけではないので，その解釈はむしろこじつけに近いのでは． -->
            <!-- まあ，「誰もが英語を使っているわけでもないので，『pressure（の類）の頭文字』と -->
            <!-- 解釈するのもこじつけだ」と言われればそれまでですが． -->
            <!-- また，「固定する変数を下添字にする記法が用いられることもある」ので， -->
            <!-- 「圧力を『p』で表している文脈では」定圧比熱を「C_p」と書いても構わないのですが． -->
        - \sigma\_\varOmega  (standard error of solid angle)
        - \omega_z  (angular velocity around z-axis)

- 行列変数
    - 大文字かつイタリック体（ISOに従うと）
        - 例 [http://physics.nist.gov/cuu/pdf/sp811.pdf](http://physics.nist.gov/cuu/pdf/sp811.pdf)
    - ボールド体とする流儀の例（米国では行列変数・ベクトル変数に，立体かつボールド体表記が多用される模様）
        - 例 [http://physics.nist.gov/Document/typefaces.pdf](http://physics.nist.gov/Document/typefaces.pdf)
            <!-- - - 日本でボールド体が普及していない原因は？ -->

- 単位行列 $I$ （イタリック体で良いかどうか？）
    - 変数ではないので，イタリック体対象外で立体のままか？（ISOに従うと）

- 行列転置操作の ${}^{t} A$ や $A^{T}$（イタリック体で良いかどうか？）
    - t/T は “<strong>t</strong>ranspose” の略．そもそも変数・変関数には属さないのでイタリック体対象外で立体のまま（ISOに従うと）
        - 従って ${}^{\mathrm{t}} A$ や$A^{\mathrm{T}}$ のように立てて書く（べきという流儀がある）。
        - 念を入れると $A^{\operatorname{T}}$かも。（定義例：\def\transpose{{\operatorname{T}}}）
        - \top を使う人もいる。

- 単位名は立体で表記
    - 変数・変関数には属さないのでイタリック体対象外で立体のまま（ISOに従うと）
    - 例として “1 &micro;m” （“1 &mu;m”。Safari等の環境ではこちらが立体に見えるはず）は次のようにして表す。
        <!-- イタリック体に見える例は “1 &mu;m” -->
        - 1\\,\textmu m（TS1 encoding:
            \usepackage\[T1\]{fontenc}  と \usepackage{textcomp}，さらに加えて\usepackage{lmodern} を使用．）
        - 1\\,$\upmu$m （\usepackage{upgreek} を使用）
        - 1\\,\Pisymbol{psy}{"6D}m（pifont.sty パッケージを使用）
        - 1\\,{\usefont{U}{psy}{m}{n} \symbol{"6D}}m （多少見映えが良くない？）
        - いずれも\textmuを定義して使うと良さそう．例：\DeclareRobustCommand\*\textmu{\leavevmode{\usefont{U}{psy}{m}{n} \symbol{"6D}}}

- 物理量と単位
    - 物理量［イタリック体］ = 数［立体］× 単位［立体］　（例：$c$=299,792,458\\,m/s）　（SI に従うと）
        - 物理量［イタリック体］÷ 単位［立体］= 数［立体］　（例：$c$ / (m/s) = 299,792,458）　（SI に従うと）
        - 無次元量（cycle や radian など）を考えると単純ではない　例として，ω=2 π rad/s  ⇔ f=1 Hz = 1 cycle/s　（慣習上、変数記号を使い分けている）

- Sans-serif typeface
    - SI次元表記法で使う（例：$\textsf{L}$）
    - テンソル変数に使う（例：$\mathsfslbf{A}$）

- 多数桁数値の3桁毎区切り
    - 見易くするために「\\,」（thin space）を挿入し3桁毎区切りが許される。すなわち，299\\,792\\,458．(ISO流)

- 区切りに &amp;thinsp;  を使った例：299&thinsp;792&thinsp;458&thinsp;m/s
    - 区切りに narrow no-break space (U+202F) を使った例：299&#x202f;792&#x202f;458&thinsp;m/s（Safari等の環境では空白が見えないようです）
    - 英語流では“,”で区切って，299,792,458 （数式モード内では $299{,}792{,}458$）
        - 参考情報wikipedia: [http://ja.wikipedia.org/wiki/小数点](<http://ja.wikipedia.org/wiki/小数点>)

- BibTeX データの人名で，“Jr” か “Jr.” か？
    - どちらも間違いではない。
    - 試しに BibTeXing (Oren Patashnik,
        [CTAN:biblio/bibtex/contrib/doc/btxdoc.pdf](http://www.ring.gr.jp/pub/text/CTAN/biblio/bibtex/contrib/doc/btxdoc.pdf))
        を調べてみると，例の中では “Jr” となっている。
    - 自分で .bst ファイルを書いて置換を行うようにすれば，最終出力をどちらかに統一できそう。

- 日付表記
    - ISO 8601 に従えば、年月日の表記は「YYYY-MM-DD」（年月日の順、区切りはハイフン）（例：「2000-12-31」）
        - 中国ではこれを通常に使用する
        - この並べ順（年月日）は、日本なども通常に使用する（日本の例：「2000/12/31」）　（中国、日本、韓国、ハンガリー、スエーデン、フィンランド、デンマークなど）
        - 区切りについては、世界的には（日本も）「/（スラッシュ）」を使用する国が多い
        - 他に，区切りに「.（ピリオド）」を使用する例も見られる
    - 参考情報wikipedia: [http://ja.wikipedia.org/wiki/ISO_8601](http://ja.wikipedia.org/wiki/ISO_8601)，wikipedia: [http://ja.wikipedia.org/wiki/日付](<http://ja.wikipedia.org/wiki/日付>)

### ギリシア文字の大文字 {#s890dffd}

ギリシア文字の大文字は、伝統的には数学変数であっても，立体で表記される。TeXにおいてもこれがデフォルトとなっている（例えば$\Gamma$は立体で表記される）。

- ギリシア文字の大文字を、イタリック体表記に切り替える試み。\varGamma 等を定義するパッケージ類（amsmath パッケージ等）を用いたうえで、プリアンブルに下記を記述。

```
\let\Gammaf\Gamma% Gamma function
\let\Gamma\varGamma
\let\Delta\varDelta
\let\Theta\varTheta
\let\Lambda\varLambda
\let\Xi\varXi
\let\Pi\varPi
\let\Sigma\varSigma
\let\Upsilon\varUpsilon
\let\Phi\varPhi
\let\Psi\varPsi
```

### 日本語表記 {#p670ef1d}

日本語表記の伝統は．．．

#### 強調 {#qa4a098e}

bold もしくは gothic体？ （もしくはbold gothic体？）

- 日本での伝統では強調はゴシック体？
    - \emph{}はゴシック体としている．
    - 何かの由来がある？
- 下線を使いたがる人もいる
- イタリック体も見られる（英語では強調表示の基本）
- 勘案するとボールド \bfseries (\textbf) が妥当でしょうか？

#### 章名・節名 {#cdd3210f}

bold もしくは gothic体？ （もしくはbold gothic体？）

- LaTeXタイプセットするとデフォルトでbold体となる．

#### 数値範囲 {#zd86c11e}

「○○○〜○○○」（wave dash）とするか「○○○--○○○」（en-dash、英語式）か <!-- <!- -（en-dash でつなぐのは英語式）- -> -->

- 日本の伝統は前者（wave dash）
    - 日本語テキスト中では日本の伝統に従う「○○○〜○○○」が良いだろう．ただし，欧米人は日本の伝統を知らないので，〜をみると“similar to”の意味 (大体，オーダーは等しく) にしか取らない．
    - 全て半角を用いて「○○○〜○○○」を書き表す場合，TeXでは $\sim$（これは半角文字）を使用（\\-- を定義例: \def\\--{$\sim$} ）
        - TeX では、$\sim$ は wave dash と freestanding tilde (= “similar to”) の両方を表すのに用いられる．
            <!-- とを異なる文字としては区別しない扱い。 -->
    - もしも全て全角を用いて「○○○〜○○○」を書き表したい場合は，〜(U+301C、wave dash)．
        - 〜(U+301C、wave dash) は，～(U+FF5E、fullwidth tilde) とは異なる文字である。両者は字形がほとんど同じであったり違ったりすることがある (フォントに依存)
        - これは、いわゆる波ダッシュ問題．前者は初期の Unicode 規格書の U+301C（波ダッシュ）の説明に由来し，後者は Microsoft のコード変換 (cp932)に由来する．Microsoft Vista以降では前者を正しく表示可能のはず．
        - UTF-8 対応 pTeX (ptexenc ライブラリを使用) では，両者とも JIS X 0208 の 1区33点 として処理される．
        - Adobe の CMap の主要なもの (UniJIS-UTF16-H など) では，両者とも CID665 として処理される．
        - Adobe Acrobat Reader 文書内の波ダッシュ（の文字）を選択しコピーすると、全角チルダがコピーされることがあり、環境依存もあるかもしれない。
            <!-- （なおU+FF5EはUnicode 規格書では全角チルダとされる） -->

#### 数値・単位 {#z74ce697}

- 日本では，多数桁数値は英語流に“,”で区切る表記を用いることが多い，299,792,458
- 数値と単位の間の区切り\\,（thin space）は入れるべきだろうが（299,792,458\\,m/s），日本では入れない人も見られる（299,792,458m/s）．
    - html文で &amp;thinsp; を区切りに使った例：「299,792,458&thinsp;m/s」．
    - 全角で書くと日本では区切りを入れることは無い（１００ｋm）．

#### 英語・略語等の提示 {#ra06ceb1}

- 人によって各種の流儀が見られる．例：国際連合（United Nations: UN）．
    - なお英語では“United Nations (UN)”という具合になる。
