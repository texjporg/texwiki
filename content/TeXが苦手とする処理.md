---
title: "TeXが苦手とする処理"
url: "/TeXが苦手とする処理/"
date: 2006-11-05T05:57:50Z
pukiwiki: "TeXが苦手とする処理"
---

# TeXが苦手とする処理

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->

[TeX Forum](http://oku.edu.mie-u.ac.jp/tex/) や [TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) などでしばしば話題になる処理のうち，TeX 本体では
提供されず，ときとして TeX 自身は不得手とする処理について挙げます。<br>
既製品があるものについては既製品も紹介していますが，
それらを用いた場合の出力結果に不満がある場合には，
ユーザ自身で対処することになります。<br>

ここに挙げる処理を行うのが単なる「書き手の趣味」である場合には，
無理をせずに書き手自身の腕で無難にできる範囲の
処理で済ませるか，画像にしてしまう方が賢明である場合もあることでしょう。

### 複数行にわたる下線（あるいは波線・破線など） {#t65559ac}

まず，[qa:32045](https://okumuralab.org/~okumura/texfaq/qa/32045.html) でコメントされている現実があることを認識してください。<br>
その上で既製品に
あたると，[大石氏のサイト](http://www17.plala.or.jp/ohishi-masaru/)に
下線類を作成するマクロについての比較を行った文書
「[下線に関するマクロ比較](http://www17.plala.or.jp/ohishi-masaru/tex/library/underline.pdf)」
（ただし，未完成）があり，その中でいくつかの既製品が紹介されています。<br>
現在 <!-- （特定のコミュニティのメンバーでなくとも） --> <!-- おそらく@niftyを指していると思いますが，TeXに関するフォーラムは無くなったので --> <!-- 言及しなくとも良いでしょう。 - - tony 2006/11/06 --> <!-- // いまどきはむしろ mixi のようなところが問題になるのでは？ --> <!-- mixi には今のところ @nifty にあったようなライブラリのような機能はありませんし， --> <!-- サイトの成り立ちを考えると今後も設置されるとは思えないです。- - tony 2006/11/06 -->
入手可能なもののうち，和文テキストを取り扱うことを念頭に置いたもので，
かつ比較的完成度の高いものを挙げます。<br>

- [jumoline パッケージ](http://www.para.media.kyoto-u.ac.jp/latex/)： 中島 浩氏。
    下線 (\\<strong>U</strong>nderline)，打ち消し線 (\\<strong>M</strong>idline)，上線 (\\<strong>O</strong>verline) を提供

- [udline パッケージ](http://homepage2.nifty.com/domae/tex.html)： みなも氏。
    実線・破線・点線・波線などによる下線・打ち消し線・上線を提供

- [uline-- パッケージ](http://www.h4.dion.ne.jp/~latexcat/macros/macro-index.html)： 吉永徹美氏。
    実線・波線による下線・打ち消し線・上線を提供（縦組み対応）

なお，欧文のみでよければ，[ulem パッケージ](http://www.ctan.org/pkg/ulem)が
下線・二重下線・打ち消し線・波線などを提供しています。

### 飾り枠（ときとしてページ分割可能なもの） {#t43fb31c}

[目的別パッケージ簡易リファレンス](</目的別パッケージ簡易リファレンス/#w5826b14>) も参照．<br>

- [LaTeX2e で定理などを枠を囲む方法](http://nalab.mind.meiji.ac.jp/~mk/labo/tex/how-to-waku/how-to-waku.html)

TeX は「お絵描き」ソフトではない以上，飾り枠の類は苦手とします。<br>
それゆえ，凝った枠が要る場合には以下の方法を用いるのが簡単でしょう。<br>

- 画像にする
- [TikZ](/TikZ/) などの「描画用」パッケージを用いる
    - [tcolorbox パッケージ](http://www.ctan.org/pkg/tcolorbox)： [TikZ](/TikZ/) を内部で読み込み，綺麗な枠を作る（ページまたぎ可）<br>
        参考：[tcolorbox.sty を使ってみた． - 天地有情](http://konoyonohana.blog.fc2.com/blog-entry-61.html)，[LaTeX におけるページをまたいだ囲み記事スタイルのまとめ](http://note.golden-lucky.net/2009/07/latex.html)

#### ひとつのページに収まる枠 {#zac9bf00}

枠の途中でのページ分割の必要がなければ，比較的単純な形状の枠については
ascmac パッケージが提供する itembox 環境といったものが存在します。<br>
さらに，枠の四隅の形状を変更した例が [qa:45183](https://okumuralab.org/~okumura/texfaq/qa/45183.html) にみられます。<br>
ascmac を pict2e パッケージと共存させると \oval が衝突するので，
ZR さんの [bxascmac パッケージ](http://zrbabbler.sp.land.to/bxptool.html)を代わりに使いましょう。[qa:57384](https://okumuralab.org/~okumura/texfaq/qa/57384.html), [qa:57396](https://okumuralab.org/~okumura/texfaq/qa/57396.html)<br>
また，[niceframe パッケージ](https://mirror.ctan.org/macros/latex/contrib/niceframe/)は
「飾り文字を並べて作成した枠（ページ分割は不可）」を
作成するマクロを提供しています。<br>
niceframe パッケージを用いる場合には，このパッケージで使用するフォントの
Type 1 版を [CTAN:fonts/niceframe/](https://mirror.ctan.org/fonts/niceframe/) から入手しておくとよいでしょう。<br>

<!-- // 枠の四隅を四分円にする例（PSTricks 使用）： -->
<!-- // 枠線上に見出し文字列を乗せるにはもう少し細工が必要です。 -->
<!-- // また，（2007/02/04 の時点では）dvipdfmx を用いる場合には -->
<!-- // このサンプルは利用できません。dvipdfmx などの PostScript を解さない -->
<!-- // DVIware を用いる場合，枠の四隅にはフォント lcircle10 に収められている -->
<!-- // 文字を利用するなり，tpic specials を用いるなりしてください（pict2e -->
<!-- // パッケージで拡張した picture 環境でもよいかもしれません）。 -->
<!--  -->
<!-- %%% -*- mode: yatex; Coding: utf-8; Encoding: UTF-8 -* -->
<!-- \documentclass{ujarticle} -->
<!-- \usepackage{pstricks,pstcol} -->
<!--  -->
<!-- \usepackage{keyval} -->
<!-- %%% keyval パッケージは graphicx パッケージの中でも読み込まれているので， -->
<!-- %%% graphicx パッケージ使用時には keyval パッケージを明示的に -->
<!-- %%% 読み込む必要はありません。 -->
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
<!--    これは，意味のないサンプルテキストです。 -->
<!--    これは，意味のないサンプルテキストです。 -->
<!--    これは，意味のないサンプルテキストです。 -->
<!--    これは，意味のないサンプルテキストです。 -->
<!--    これは，意味のないサンプルテキストです。} -->
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
[boites パッケージ](http://www.ctan.org/pkg/boites)が
提供する breakbox 環境が利用できます。<br>
なお，ページ分割可能な枠の四隅を四分円にしたり
斜めに切り落とした（八角形状の）枠にしたものは
（著名な）既製品では提供されていないようですので，
ユーザ自身で作成することになります。<br>
要は，boites パッケージによる breakbox 環境などの処理をふまえつつ
「枠の四隅」のところだけ書き換えればよいということになります。<br>
やるべきことは [qa:45183](https://okumuralab.org/~okumura/texfaq/qa/45183.html) の例と同様です。<br>
さらに，ページ分割可能な破線の枠を作成するとなると，もはや自動化は諦めて
「手動で枠を分割しつつ，枠の断片を [TikZ](/TikZ/) あたりで描画する」
という方針をとるのが現実的かもしれません。<br>
一応，長方形の枠についてマクロレベルの処理で済ませた例が
[qa:17408](https://okumuralab.org/~okumura/texfaq/qa/17408.html) にあります。<br>

#### 複数ページにわたる枠 (2) ［複数の枠を作成する場合］ {#s982eb3b}

「枠をつけるテキストが複数ページにまたがる場合，個々のページに収まる部分ごとに
枠をつける」という処理を行うには，framed パッケージが
提供する framed 環境，shaded 環境
（あるいは shaded 環境の定義に準じてカスタマイズしたもの）が使えます。<br> <!-- framed 環境と breakbox 環境との違いは， --> <!-- 例えば枠が3ページ以上にわたる場合の出力が次のようになる， --> <!-- という点にあります。 --> <!-- framed 環境: --> <!--    \fbox{最初の断片}, \fbox{2番目の断片},..., \fbox{最後の断片} --> <!-- breakbox 環境: --> <!--    最初の断片の上部と左右のみ罫線で囲んだもの， --> <!--    2番目の断片の左右にのみ罫線がついたもの， --> <!--    ...， --> <!--    最後の断片の下部と左右のみ罫線で囲んだもの -->

### 原稿用紙 {#i5d966d4}

枠は必須でなくとも
「20文字&times;20行」のような体裁を要求されることがあります。

- [http://www.foxking.org/oldsite/pc/genkoyoshi-on-tex.html](http://www.foxking.org/oldsite/pc/genkoyoshi-on-tex.html)
- [http://www.fugenji.org/~thomas/diary/index.php?mode=res_view&no=819](http://www.fugenji.org/~thomas/diary/index.php?mode=res_view&no=819) （上のインストール解説）

## 苦手とする数式 {#u35e5d4c}

### 文字の上線 {#ab3fec88}

- 例 $\sqrt{5} \overline{D}$：  少し長過ぎる上線．平方根にくっついてしまう
- 例 $\sqrt{5} \bar{D}$： 少し短すぎる上線
- 工夫の情報：[widebar -- 綺麗な上線](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/widebar.html)

### ボールド体 {#a45a0ccb}

#### $\bm{\phi}$ {#t82cb506}

使われるフォントをボールド体と見てくれない人が多くて困る． <!-- 「充分に満足な出力が得られる，標準配布（に近い）既製品が存在する」処理は --> <!-- この項にはなるべく載せないほうがよいと思いますが． --> <!-- そういうものはもはや「苦手」な処理とは言えないでしょうし，それ以前に --> <!-- 「何らかのパッケージを持ちだすような処理を手当たりしだいに載せ」ていたのでは --> <!-- 収拾がつかないと思います． -->

```
\documentclass[12pt]{article}
\usepackage{bm} 
\begin{document}
$\bm{\phi}=\left(\phi_1,\,\phi_2\right)$
\end{document}
```

### 単位 {#p7453c09}

普通は下記例のように書く必要があり苦しい．

```
1\,\textmu /s$^2$
```

本当(?)は下記例のように書けるようになるのが理想かも．

```
1\unit{\mu / s^2}
```

[siunitx パッケージ](http://www.ctan.org/tex-archive/macros/latex/contrib/siunitx)を用いると，大体そのような形で記述可能． <!-- 単純なものでよければ，次のサンプル程度のマクロを自作してもいい． --> <!-- \documentclass{ujarticle} --> <!-- \makeatletter --> <!-- \def\unitprespace{\,} --> <!-- \DeclareRobustCommand*\unit{\@ifstar{\@unit\relax}{\@unit\unitprespace}} --> <!-- \def\@unit#1{% --> <!--    \ifmmode\else --> <!--       \ifvmode \leavevmode \fi --> <!--       \unskip --> <!--    \fi --> <!--    #1% --> <!--    \ifmmode \expandafter\@math@unit --> <!--    \else    \expandafter\@text@unit --> <!--    \fi} --> <!-- \def\@text@unit{\@@unit\f@size} --> <!-- \def\@math@unit#1{% --> <!--     \mathchoice{\@@unit\tf@size{#1}}{\@@unit\tf@size{#1}}% --> <!--                {\@@unit\sf@size{#1}}{\@@unit\ssf@size{#1}}} --> <!-- \def\@@unit#1#2{% --> <!--    \hbox{\fontsize#1\f@baselineskip\upshape --> <!--       \expandafter\let\csname unit \endcsname\mbox --> <!--       \def\@tempa{\mu}% --> <!--       \ifx\@@micro\@tempa\else \let\mu\@@micro \fi --> <!--       \@tfor\@tempa:=% --> <!--          {\@@b\b}{\@@c\c}{\@@d\d}{\@@t\t}{\@@H\H}% --> <!--          {\'\acute}{\'\grave}{\.\dot}{\"\ddot}{\^\hat}% --> <!--          {\v\check}{\u\breve}{\~\tilde}{\=\bar}% --> <!--          {\r\mathring}%%% 実際には，おそらく，この場合のみ処理するだけでも充分 --> <!--          {\b\b@in@unit}{\c\c@in@unit}{\d\d@in@unit}{\t\t@in@unit}{\H\H@in@unit}% --> <!--          \do{\expandafter\let\@tempa}% --> <!--       \medmuskip=2mu --> <!--       \edef\@tempa{\f@series}\edef\@tempa{\expandafter\@car\@tempa\@empty\@nil}% --> <!--       \if \@tempa b\relax \mathversion{bold}\fi --> <!--       $\mathrm{#2}$}} --> <!-- \def\b@in@unit#1{\hbox{\@@b{#1}}} --> <!-- \def\c@in@unit#1{\hbox{\@@c{#1}}} --> <!-- \def\d@in@unit#1{\hbox{\@@d{#1}}} --> <!-- \def\t@in@unit#1{\hbox{\@@t{#1}}} --> <!-- \def\H@in@unit#1{\hbox{\@@H{#1}}} --> <!-- \DeclareRobustCommand*\micro{\@@micro} --> <!-- \AtBeginDocument{% --> <!--    \@ifundefined{textmu}% --> <!--       {\@ifundefined{muup}% --> <!--          {\def\@@micro{\mu}}% --> <!--          {\def\@@micro{\muup}}}% --> <!--       {\def\@@micro{\mbox{\textmu}}}} --> <!-- \makeatother --> <!--  --> <!-- \usepackage{txfonts}%%% \muup を提供 --> <!--  --> <!-- \begin{document} --> <!-- 10 \unit{m \cdot s^{-1}} and 12\unit{\micro g/l} --> <!--  --> <!-- $v = 10 \unit{m/s}$ and $c = 12\unit{\mu g/l}$ --> <!-- $X = \sup_{v \geq 10\unit{m/s}} f(v)$ --> <!--  --> <!-- 10\,[\unit*{m/s}]%%% このような場合には \unit* とする． --> <!-- \end{document} -->

## Comments {#ada1c094}

- 少なくとも丸数字の1-99くらいまでは、pkフォントがあると重宝すると思うのですが、そういうものはMFソースの形で公開れていないものでしょうか？ -- 通りすがり 2007-09-04 (火) 03:01:40
    <!-- 少なくとも，囲碁の棋譜用のフォントにそのようなものがあるということは -->
    <!-- 知られています（CTAN/fonts/go）． -->

- 私の存在自体がお気に召さない人間が存在するようですので，私が本質的な部分を作成した箇所については撤去します． -- しっぽ愛好家 2007-09-06 (木) 21:25:53
- 何があったのかわかりませんが，しっぽ愛好家さんのファンは多いはずです。 -- 奥村 2007-09-06 (木) 21:40:48
- 私が何か言うたびに某インストーラ作者に当人の日記で絡まれていまして耐えられませんので，引退することにし，それに伴いごみ掃除をいたしました（以前にも質問者を過剰に擁護する人々に絡まれてはきましたが，件の人物の場合は継続的かつ執拗ですので（こういうことを言うと件の人物が凱歌をあげるだけですけれども））．ああいうものが必要なら，あべのり氏をはじめとする「初心者の味方」気取りの皆様に改めて書かせるとよいかと存じます（私などが書いたものよりもっと「初心者に優しい」ものを書いてくださるでしょうから）． -- しっぽ愛好家 2007-09-06 (木) 22:10:34
- お気にされすぎだと思いますけれど。 -- 奥村 2007-09-06 (木) 22:25:34
- 完全ではありませんが、勝手ながら復活させていただきました。私もどんなことがあったのかわかりませんが、お気にされすぎなのではと思います。また、まとめて頂いた本当にすばらしい資料を、ご自身で否定される必要はないと思います。 -- 中丸 2007-09-07 (金) 03:30:25

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->
