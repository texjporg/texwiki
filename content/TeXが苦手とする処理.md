---
title: "TeXが苦手とする処理"
url: "/TeXが苦手とする処理/"
date: 2006-11-05T05:57:50Z
pukiwiki: "TeXが苦手とする処理"
---

# TeXが苦手とする処理

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->

[TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) などでしばしば話題になる処理のうち，TeX 本体では提供されず，
ときとして TeX 自身は不得手とする処理について挙げます。
既製品があるものについては既製品も紹介していますが，
それらを用いた場合の出力結果に不満がある場合には，
ユーザ自身で対処することになります。

ここに挙げる処理を行うのが単なる「書き手の趣味」である場合には，
無理をせずに書き手自身の腕で無難にできる範囲の処理で済ませる（か，
画像にしてしまう）ほうが賢明である場合もあることでしょう。

### 丸数字 {#s7930698}

まず，丸数字（e.g. &#x2460; \[U+2460\], &#x2461; \[U+2461\], &#x2462; \[U+2462\]）の
類は（従来の EUC-JP, Shift_JIS などの文字符号化方式を用いて記述する限り）
「環境依存」文字であることに注意してください (See [qa:45781](https://okumuralab.org/~okumura/texfaq/qa/45781.html))。

対処法は，大別すると次の 2 通りになります。

- 丸数字などの字形をもったフォントを利用:
    - ZapfDingbats フォント（“{\usefont{U}{pzd}{m}{n} \symbol{"AC}}” など）
    - pifont パッケージ（“\ding{"AC}”，“\Pisymbol{pzd}{"AC}” など）
        - 【注意】 “"” は十六進表記の識別子であり，“'” にすれば八進表記，何も付けなければ十進表記でも書けます。例えば "AC = '254 = 172 です。こういったコードは [testfont](/testfont/) をタイプセットして一覧を作ると確認できます。
    - [otf パッケージ](/OTF/)（“\ajMaru{1}”，“\UTF{2460}” ［= &#x2460; {U+2460}］など）
- 丸の中身と丸を合成:
    - \textcircled マクロ（LaTeX 自身が提供）
    - \MARU マクロ（okumacro パッケージが提供するほか，
        同種のものがあちこちで定義されています。\[See [qa:29584](https://okumuralab.org/~okumura/texfaq/qa/29584.html)\]）

### 機種依存文字（環境依存文字） {#p625d750}

<!-- 取り敢えず，ひとまとめ。どなたか補足をお願いします。 -->
<!-- （このコメントは次回編集時に消すつもりです。） -->

<table>
<thead>
<tr><th colspan="10" rowspan="2" style="text-align:center">Shift_JIS, ISO-2022-JP, EUC-JP に<br>おける主な機種依存文字</th><th colspan="4" style="text-align:center">代替処置の例</th></tr>
<tr><th colspan="2" style="text-align:center">テキストベース</th><th colspan="2" style="text-align:center">(p)LaTeX の命令</th></tr>
</thead>
<tbody>
<tr><td style="text-align:center">①</td><td style="text-align:center">②</td><td style="text-align:center">③</td><td style="text-align:center">④</td><td style="text-align:center">⑤</td><td style="text-align:center">⑥</td><td style="text-align:center">⑦</td><td style="text-align:center">⑧</td><td style="text-align:center">⑨</td><td style="text-align:center">⑩</td><td style="text-align:center">(1)</td><td style="text-align:center">(10)</td><td style="text-align:center">\ding{"AC}</td><td rowspan="13" style="text-align:center">\UTF{}<br><br>\CID{}<br><br>\UMS{}</td></tr>
<tr><td style="text-align:center">⑪</td><td style="text-align:center">⑫</td><td style="text-align:center">⑬</td><td style="text-align:center">⑭</td><td style="text-align:center">⑮</td><td style="text-align:center">⑯</td><td style="text-align:center">⑰</td><td style="text-align:center">⑱</td><td style="text-align:center">⑲</td><td style="text-align:center">⑳</td><td style="text-align:center">(11)</td><td style="text-align:center">(20)</td><td style="text-align:center">\ajMaru{11}</td></tr>
<tr><td style="text-align:center">Ⅰ</td><td style="text-align:center">Ⅱ</td><td style="text-align:center">Ⅲ</td><td style="text-align:center">Ⅳ</td><td style="text-align:center">Ⅴ</td><td style="text-align:center">Ⅵ</td><td style="text-align:center">Ⅶ</td><td style="text-align:center">Ⅷ</td><td style="text-align:center">Ⅸ</td><td style="text-align:center">Ⅹ</td><td style="text-align:center">VII</td><td style="text-align:center">IX</td><td style="text-align:center">\ajRoman{1}</td></tr>
<tr><td style="text-align:center">㍉</td><td style="text-align:center">㌔</td><td style="text-align:center">㌢</td><td style="text-align:center">㍍</td><td style="text-align:center">㌘</td><td style="text-align:center">㌧</td><td style="text-align:center">㌃</td><td style="text-align:center">㌶</td><td style="text-align:center">㍑</td><td style="text-align:center">㍗</td><td style="text-align:center">ミリ</td><td style="text-align:center">キロ</td><td style="text-align:center">\ajLig{ミリ}</td></tr>
<tr><td style="text-align:center">㌍</td><td style="text-align:center">㌦</td><td style="text-align:center">㌣</td><td style="text-align:center">㌫</td><td style="text-align:center">㍊</td><td style="text-align:center">㌻</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">カロリー</td><td style="text-align:center">ドル</td><td style="text-align:center">\ajLig{カロリー}</td></tr>
<tr><td style="text-align:center">㎜</td><td style="text-align:center">㎝</td><td style="text-align:center">㎞</td><td style="text-align:center">㎎</td><td style="text-align:center">㎏</td><td style="text-align:center">㏄</td><td style="text-align:center">㎡</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">mm</td><td style="text-align:center">m^2</td><td style="text-align:center">m$^2$</td></tr>
<tr><td style="text-align:center">№</td><td style="text-align:center">㏍</td><td style="text-align:center">℡</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">No.</td><td style="text-align:center">Tel</td><td style="text-align:center">T\textsc{el}</td></tr>
<tr><td style="text-align:center">㊤</td><td style="text-align:center">㊥</td><td style="text-align:center">㊦</td><td style="text-align:center">㊧</td><td style="text-align:center">㊨</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">（上）</td><td style="text-align:center">（中）</td><td style="text-align:center">\ajLig{○上}</td></tr>
<tr><td style="text-align:center">㈱</td><td style="text-align:center">㈲</td><td style="text-align:center">㈹</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">（株）</td><td style="text-align:center">（代）</td><td style="text-align:center">\ajLig{(株)}</td></tr>
<tr><td style="text-align:center">㍾</td><td style="text-align:center">㍽</td><td style="text-align:center">㍼</td><td style="text-align:center">㍻</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">昭和</td><td style="text-align:center">平成</td><td style="text-align:center">\ajLig{平成}</td></tr>
<tr><td style="text-align:center">∮</td><td style="text-align:center">∟</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">&int;</td><td style="text-align:center">&ang;</td><td style="text-align:center">$\oint$</td></tr>
<tr><td style="text-align:center">⊿</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">&Delta;</td><td style="text-align:center"></td><td style="text-align:center">$\mathnormal{\Delta}$</td></tr>
<tr><td style="text-align:center">ⅰ</td><td style="text-align:center">ⅱ</td><td style="text-align:center">ⅲ</td><td style="text-align:center">ⅳ</td><td style="text-align:center">ⅴ</td><td style="text-align:center">ⅵ</td><td style="text-align:center">ⅶ</td><td style="text-align:center">ⅷ</td><td style="text-align:center">ⅸ</td><td style="text-align:center">ⅹ</td><td style="text-align:center">vii</td><td style="text-align:center">ix</td><td style="text-align:center">\ajroman{1}</td></tr>
</tbody>
</table>

### 複数行にわたる下線（あるいは波線・破線など） {#t65559ac}

まず，[qa:32045](https://okumuralab.org/~okumura/texfaq/qa/32045.html) でコメントされている現実があることを認識してください。
そのうえで既製品にあたると，
[大石氏のサイト](http://www17.plala.or.jp/ohishi-masaru/)に
下線類を作成するマクロについての比較を行った文書
「[下線に関するマクロ比較](http://www17.plala.or.jp/ohishi-masaru/tex/library/underline.pdf)」
（ただし，未完成）があり，その中でいくつかの既製品が紹介されています。
現在 <!-- （特定のコミュニティのメンバーでなくとも） --> <!-- おそらく@niftyを指していると思いますが，TeXに関するフォーラムは無くなったので --> <!-- 言及しなくとも良いでしょう。 - - tony 2006/11/06 --> <!-- // いまどきはむしろ mixi のようなところが問題になるのでは？ --> <!-- mixi には今のところ @nifty にあったようなライブラリのような機能はありませんし， --> <!-- サイトの成り立ちを考えると今後も設置されるとは思えないです。- - tony 2006/11/06 -->
入手可能なもののうち，
和文テキストを取り扱うことを念頭に置いたもので，
かつ比較的完成度の高いものを挙げます。

- [jumoline パッケージ](http://www.para.tutics.tut.ac.jp/~nakasima/latex/):
    中島 浩氏。
    下線 (\\<strong>U</strong>nderline)，打ち消し線 (\\<strong>M</strong>idline) ，上線 (\\<strong>O</strong>verline)を提供

- [udline パッケージ](http://homepage2.nifty.com/domae/tex.html):
    みなも氏。実線，破線，点線，波線などによる下線，打ち消し線，上線を提供

- [uline-- パッケージ](http://www.h4.dion.ne.jp/~latexcat/macros/macro-index.html):
    吉永徹美氏。実線，波線による下線，打ち消し線，上線を提供（縦組み対応）

なお，欧文のみでよければ，
[ulem パッケージ](https://mirror.ctan.org/macros/latex/contrib/misc/ulem.sty) が下線，二重下線，
打ち消し線，波線などを提供しています。

### 飾り枠（ときとしてページ分割可能なもの） {#t43fb31c}

TeX は「お絵描き」ソフトではない以上，そのような飾り枠の類は苦手とします。
それゆえ，凝った枠が要る場合には画像にするなり
pstricks などの「描画用」パッケージを用いるなりするのが簡単でしょう。

#### ひとつのページに収まる枠 {#zac9bf00}

枠の途中でのページ分割の必要がなければ，
比較的単純な形状の枠については ascmac パッケージが提供する
itembox 環境といったものが存在します（さらに，枠の四隅の形状を変更した例が
[qa:45183](https://okumuralab.org/~okumura/texfaq/qa/45183.html) にみられます）。
また，[niceframe パッケージ](https://mirror.ctan.org/macros/latex/contrib/niceframe/)は
「飾り文字を並べて作成した枠（ページ分割は不可）」
を作成するマクロを提供しています
（niceframe パッケージを用いる場合には，このパッケージで使用するフォントの
Type1 版を [CTAN:fonts/niceframe/](https://mirror.ctan.org/fonts/niceframe/) から入手しておくとよいでしょう）。

<!-- // 枠の四隅を四分円にする例（PSTricks 使用）: -->
<!-- // 枠線上に見出し文字列を乗せるにはもう少し細工が必要です． -->
<!-- // また，（2007-02-04 の時点では）dvipdfm(x) を用いる場合には -->
<!-- // このサンプルは利用できません．dvipdfmx などの PostScript を解さない -->
<!-- // dviware を用いる場合，枠の四隅にはフォント lcircle10 に収められている -->
<!-- // 文字を利用するなり，tpic specials を用いるなりしてください（pict2e -->
<!-- // パッケージで拡張した picture 環境でもよいかもしれません）． -->
<!-- \documentclass{jarticle} -->
<!-- \usepackage{pstricks,pstcol} -->
<!--  -->
<!-- \usepackage{keyval} -->
<!-- %%% keyval パッケージは graphicx パッケージの中でも読み込まれているので， -->
<!-- %%% graphicx パッケージ使用時には keyval パッケージを明示的に -->
<!-- %%% 読み込む必要はありません． -->
<!--  -->
<!-- \makeatletter -->
<!-- \define@key{SCREEN}{bgcolor}{\def\@SCREEN@bgcolor{#1}} -->
<!-- \define@key{SCREEN}{linestyle}{\edef\@SCREEN@linestyle{#1}} -->
<!-- \define@key{SCREEN}{linewidth}{\edef\@SCREEN@linewidth{#1}} -->
<!-- \define@key{SCREEN}{linecolor}{\edef\@SCREEN@linecolor{#1}} -->
<!-- \define@key{SCREEN}{radius}{\edef\@SCREEN@radius{#1}} -->
<!-- \define@key{SCREEN}{dashlength}{\edef\@SCREEN@dashlength{#1}} -->
<!-- \define@key{SCREEN}{dashgap}{\edef\@SCREEN@dashgap{#1}} -->
<!-- \define@key{SCREEN}{framesep}{\edef\@SCREEN@framesep{#1}} -->
<!-- \@ifundefined{scb@x}{\newbox\scb@x}\relax -->
<!-- \def\SCREEN{\@testopt\@SCREEN{}} -->
<!-- \def\@SCREEN[#1]{% -->
<!--    \if@noskipsec \leavevmode \fi -->
<!--    \ifhmode \par \fi -->
<!--    \medskip -->
<!--    \noindent -->
<!--    \let\@SCREEN@bgcolor\@empty -->
<!--    \let\@SCREEN@linestyle\@empty -->
<!--    \def\@SCREEN@linewidth{\fboxrule}% -->
<!--    \let\@SCREEN@linecolor\@empty -->
<!--    \let\@SCREEN@radius\@empty -->
<!--    \def\@SCREEN@dashlength{10pt}% -->
<!--    \def\@SCREEN@dashgap{3pt}% -->
<!--    \def\@SCREEN@framesep{\fboxsep}% -->
<!--    \setkeys{SCREEN}{#1}% -->
<!--    \@tempdima\@SCREEN@linewidth\relax -->
<!--    \ifdim\@tempdima<\z@ \@tempdima.4\p@ \fi -->
<!--    \edef\@SCREEN@setting{linewidth=\the\@tempdima}% -->
<!--    \ifx\@SCREEN@bgcolor\@empty\else -->
<!--       \edef\@SCREEN@setting{\@SCREEN@setting,% -->
<!--          fillstyle=solid,fillcolor=\@SCREEN@bgcolor}% -->
<!--    \fi -->
<!--    \ifx\@SCREEN@linestyle\@empty\else -->
<!--       \def\@tempa{dashed}% -->
<!--       \edef\@SCREEN@setting{\@SCREEN@setting,% -->
<!--          linestyle=\@SCREEN@linestyle -->
<!--          \ifx\@SCREEN@linestyle\@tempa -->
<!--             ,dash=\@SCREEN@dashlength\space\@SCREEN@dashgap -->
<!--          \fi}% -->
<!--    \fi -->
<!--    \ifx\@SCREEN@linecolor\@empty\else -->
<!--       \edef\@SCREEN@setting{\@SCREEN@setting,linecolor=\@SCREEN@linecolor}% -->
<!--    \fi -->
<!--    \ifx\@SCREEN@radius\@empty\else -->
<!--       \edef\@SCREEN@setting{\@SCREEN@setting,% -->
<!--          linearc=\@SCREEN@radius,cornersize=absolute}% -->
<!--    \fi -->
<!--    \@tempdimb\@SCREEN@framesep\relax -->
<!--    \ifdim\@tempdimb<\z@ \@tempdimb\fboxsep \fi -->
<!--    \edef\@SCREEN@setting{\@SCREEN@setting,framesep=\the\@tempdimb}% -->
<!--    \edef\@SCREEN@setting{[\@SCREEN@setting]}% -->
<!--    \advance\@tempdimb\@tempdima -->
<!--    \@tempdima\linewidth \advance\@tempdima-\tw@\@tempdimb -->
<!--    \setbox\scb@x\color@vbox -->
<!--        \normalcolor -->
<!--        \vtop\bgroup -->
<!--          \hsize\@tempdima -->
<!--          \@parboxrestore} -->
<!-- \def\endSCREEN{% -->
<!--          \ifvmode \vskip-\lastskip \fi -->
<!--       \egroup -->
<!--    \color@endbox -->
<!--    \expandafter\psframebox\@SCREEN@setting{\box\scb@x}% -->
<!--    \par -->
<!--    \medskip} -->
<!-- \makeatother -->
<!--  -->
<!-- \begin{document} -->
<!-- \def\TEXT{% -->
<!--    これは，意味のないサンプルテキストです． -->
<!--    これは，意味のないサンプルテキストです． -->
<!--    これは，意味のないサンプルテキストです． -->
<!--    これは，意味のないサンプルテキストです． -->
<!--    これは，意味のないサンプルテキストです．} -->
<!--  -->
<!-- \begin{SCREEN} -->
<!--   \TEXT -->
<!-- \end{SCREEN} -->
<!--  -->
<!-- \begin{SCREEN}[bgcolor=lightgray,linecolor=blue,framesep=1zw] -->
<!--   \TEXT -->
<!-- \end{SCREEN} -->
<!--  -->
<!-- \begin{SCREEN}[bgcolor=lightgray,linewidth=1pt,radius=3mm] -->
<!--   \TEXT -->
<!-- \end{SCREEN} -->
<!--  -->
<!-- \begin{itemize} -->
<!-- \item -->
<!-- \begin{SCREEN}[linestyle=dashed,dashlength=5mm,dashgap=2mm,radius=5mm] -->
<!--   \TEXT -->
<!-- \end{SCREEN} -->
<!-- \end{itemize} -->
<!-- \end{document} -->

#### 複数ページにわたる枠 (1) ［枠自体を分割する場合］ {#b3d25e0d}

「テキストに枠をつけたものを分割する」という形でのページ分割の必要がある場合，
長方形の枠については
[eclbkbox パッケージ](http://mechanics.civil.tohoku.ac.jp/~bear/bear-collections/style-files/eclbkbox.lzh)
が提供する breakbox 環境が利用できます。
なお，ページ分割可能な枠の四隅を四分円にしたり
斜めに切り落とした（八角形状の）枠にしたものは，
（著名な）既製品では提供されていないようですので，
ユーザ自身で作成することになります。
要は，eclbkbox パッケージによる breakbox 環境などの処理をふまえつつ
「枠の四隅」のところだけ書き換えればよいということになります
（やるべきことは [qa:45183](https://okumuralab.org/~okumura/texfaq/qa/45183.html) の例と同様です）。
さらに，ページ分割可能な破線の枠を作成するとなると，もはや自動化は諦めて
「手動で枠を分割しつつ，枠の断片を pstricks あたりで描画する」
という方針をとるのが現実的かもしれません
（一応，長方形の枠についてマクロレベルの処理で済ませた例が
[qa:17408](https://okumuralab.org/~okumura/texfaq/qa/17408.html) にあります）。

#### 複数ページにわたる枠 (2) ［複数の枠を作成する場合］ {#s982eb3b}

「枠をつけるテキストが複数ページにまたがる場合，
個々のページに収まる部分ごとに枠をつける」という処理を行うには，
framed パッケージが提供する framed 環境，shaded 環境
（あるいは shaded 環境の定義に準じてカスタマイズしたもの）が使えます。 <!-- framed 環境と breakbox 環境との違いは， --> <!-- 例えば枠が 3 ページ以上にわたる場合の出力が次のようになる， --> <!-- という点にあります。 --> <!-- framed 環境: --> <!--    \fbox{最初の断片}, \fbox{2 番目の断片}, ..., \fbox{最後の断片} --> <!-- breakbox 環境: --> <!--    最初の断片の上部と左右のみ罫線で囲んだもの， --> <!--    2 番目の断片の左右にのみ罫線がついたもの， --> <!--    ...， --> <!--    最後の断片の下部と左右のみ罫線で囲んだもの -->

### 原稿用紙 {#i5d966d4}

枠は必須でなくとも「20文字×20行」のような体裁を要求されることがあります。

- [http://home.hiroshima-u.ac.jp/mnishida/linux/genkou01.html](http://home.hiroshima-u.ac.jp/mnishida/linux/genkou01.html)
- [http://www.sapmed.ac.jp/satui/std/doc/genkou.sty.news](http://www.sapmed.ac.jp/satui/std/doc/genkou.sty.news) （LaTeX 2.09用）
- [http://www.sapmed.ac.jp/satui/std/doc/genkou.sty.patch1](http://www.sapmed.ac.jp/satui/std/doc/genkou.sty.patch1) （上のパッチ）

## Comments {#ada1c094}

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->
