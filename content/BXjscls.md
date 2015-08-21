---
title: "BXjscls"
url: "/BXjscls/"
date: 2013-10-22T19:25:42Z
pukiwiki: "BXjscls"
---

# BXjscls

## [BXjscls](http://zrbabbler.sp.land.to/bxjscls.html) {#l3cac28c}

BXjscls パッケージは pdflatex, lualatex, xelatex, uplatex, platex で使用可能な日本語文書組版のための LaTeX 文書クラスのコレクションです．
TeX Live, W32TeX に含まれています．

奥村先生の「[pLaTeX2e 新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/)」は pLaTeX2e での使用を前提としているため，uplatex, platex 以外では使用することができません．
BXjscls は新ドキュメントクラスから pLaTeX 依存の部分を分離したもので，これと各エンジン用の日本語処理パッケージを組み合わせることで，pLaTeX 以外でも新ドキュメントクラスを用いた場合と同等の文書作成が可能となります．

- [https://github.com/zr-tex8r/BXjscls](https://github.com/zr-tex8r/BXjscls)
- [http://www.ctan.org/pkg/bxjscls](http://www.ctan.org/pkg/bxjscls)
- [http://www.ctan.org/tex-archive/language/japanese/BX/bxjscls](http://www.ctan.org/tex-archive/language/japanese/BX/bxjscls)

***

***

### 基本的な使い方 {#g8a35a3c}

ここでは新しい版（v1.x）の BXjscls パッケージの使い方を説明します．
（以前の v0.3，v0.9 とは若干仕様が異なることに注意．）

#### 文書クラスの一覧 {#i6dd9974}

BXjscls パッケージには次の 4 つの文書クラス（「BXJS クラス」と総称する）が収録されています．
これらは何れも「新ドキュメントクラス」（JS クラス）の文書レイアウトと機能を継承したものとなっています．

- bxjsarticle クラス： 「章のないレポート」用．jsarticle クラスに相当．
- bxjsreport クラス： 「章のあるレポート」用．jsbook クラス + report オプションに相当．
- bxjsbook クラス： 書籍用．jsbook クラスに相当．
- bxjsslide クラス： スライド用．-jsarticle クラス + slide オプションに相当．

#### 文書クラスの指定 {#v3b1d61c}

BXJS クラスを“標準設定”で使用する場合，\documentclass 命令を以下のように記述します．

```
 \docuemntclass[<エンジン>,<ドライバ>,ja=standard,<他オプション>...]{<クラス名>}
```

ここで &lt;クラス名> には先述の文書クラス名（bxjsarticle 等）の 1 つを指定します．
クラスオプションは以下のように指定します．

- &lt;エンジン> の指定は必須で，LaTeX のコマンド名（pdflatex，xelatex 等）を書きます．
- DVI 出力のエンジン（platex，uplatex）を用いる場合は &lt;ドライバ> に使用する DVI ウェアの名を書きます．dvips，dvipdfmx，dviout，xdvi が指定可能です．一方，PDF 出力のエンジン（xelatex 等）を用いる場合は &lt;ドライバ> の指定は省略します．
- “標準設定”を利用するため ja=standard を必ず指定します．<br>
    ※ v0.9 では jadriver=standard と書いていました．

- 他のクラスオプション（a4paper，twocolumn 等）については，ほとんどの場合，JS クラスと同じものが使えます．

“標準設定”（ja=standard）を指定した場合，自動的に当該のエンジンのための日本語処理パッケージが読み込まれます．

<table>
<tbody>
<tr><td> エンジン </td><td> 日本語処理パッケージ </td><td> jafont指定 </td></tr>
<tr><td> (u)platex </td><td> （エンジン機能） </td><td> pxchfon </td></tr>
<tr><td> (pdf)latex </td><td colspan="2"> bxcjkjatype </td></tr>
<tr><td> xelatex </td><td> zxjatype </td><td> zxjafont </td></tr>
<tr><td> lualatex </td><td> LuaTeX-ja </td><td> luatexja-preset </td></tr>
</tbody>
</table>

その上で，必要最低限の設定（和文フォント設定など）が行われます．そのため，(u)pLaTeX を用いる時と同様に，「何も設定せずにいきなり本文（やプレアンブル）に日本語を書く」ことができます．

#### 例 {#x483b172}

以下は，bxjsarticle クラスを用いた簡単な XeLaTeX 文書の例です．

```
\documentclass[a4paper,xelatex,ja=standard]{bxjsarticle}% ドライバ指定は無し
\usepackage{metalogo} % \XeLaTeX ロゴのため
\title{{\XeLaTeX}で日本語文書}
\author{七篠 権兵衛}
% \today の出力はJSクラスと同様に西暦になる
\begin{document}
\maketitle

\section{{\XeLaTeX}で日本語してみる}

吾輩は\textgt{猫}である！\hspace{1\zw}%
名前など無い！

\end{document}
```

以下の点にも注意してください．

- (u)pLaTeX の場合と同様に，\textmc／\textgt で和文を明朝／ゴシックに切り替えられます．
- JS クラス使用時と同様に，欧文がサンセリフ（\sffamily）に切り替わると連動して和文がゴシック（\gtfamily）に切り替わります．
- 「現在の和文の全角幅」を表す単位 zw は (u)pLaTeX 以外では使えないので，代わりに \zw と書きます．

以下は，bxjsslide クラスを用いた pdfLaTeX 文書（スライド）の例です．

```
\documentclass[pdflatex,ja=standard]{bxjsslide}% ドライバ指定は無し
\usepackage{color}
\newcommand{\alert}[1]{\textcolor{red}{#1}}
\title{{pdf\LaTeX}~で日本語文書}
\author{七篠 権兵衛}
\begin{document}
```

```
% タイトル
\maketitle
\newpage

\section{吾輩は~cat~である}
ニャーン
\newpage

\section{まとめ}
御清聴ありがとうございました。
\newpage

\section{大事なことなのでもう~1~回}
\alert{御清聴}ありがとうございました。
\end{document}
```

pdfLaTeX に対する“標準設定”では bxcjkjatype パッケージが以下の設定で自動的に読み込まれます．

```
\usepackage[whole,autotilde]{bxcjkjatype}
```

pdfLaTeX を使う場合には以下の点にも注意が必要です．

- 文書本体の全体が \begin{CJK\*}～\end{CJK\*} で囲まれていると見なされます．
    （whole オプションのため．）
    このため，本体にいきなり日本語を書き始めることができます．

- 他のエンジンと異なり，pdfLaTeX では和欧文間空白（四分空き）は自動的には挿入されません．
    代わりに，“~”が和欧文間空白を入れる命令となっているので，手動で適宜これを入れる必要があります．
    - つまり，“~”の意味が LaTeX 本来のもの（非分割欧文空白）から変更されていることに注意してください．
        非分割欧文空白を挿入するには \nbs という命令を使います．
    - \CJKtilde 命令を実行すると“~”の意味が和欧文間空白に代わり，\standardtilde 命令を実行すると“~”の意味が非分割欧文空白に戻ります．
        （bxcjkjatype の autotilde オプションは CJK 環境の先頭で自動的に \CJKtilde を発行するためのものです．）

### 便利な機能 {#r9231b32}

#### 用紙サイズを長さで指定する {#p7509804}

paper オプションで任意の用紙サイズを指定することができます．

```
% 郵便はがき（10cm×14.8cm）のサイズを設定
\documentclass[xelatex,paper={100mm}{148mm},8pt,ja=standard]{bxjsarticle}
```

#### 基底フォントサイズを長さで指定する {#x78db8de}

base オプションで，基底フォントサイズ（\normalsize のフォントサイズ）に任意の長さ値を指定できます．

```
% 基底フォントサイズを8.5ptにする
\documentclass[xelatex,a4paper,base=8.5pt,ja=standard]{bxjsreport}
```

この指定の場合，厳密にいうと，「欧文の \normalsize の要求フォントサイズ」が 8.5pt になります．BXJS クラスでは（JS クラスと同様に）欧文に対して和文を少し縮小して合わせているため，和文の全角幅（\zw）は 8.5pt より少し小さくなります．

これに対して，「和文の \normalsize を特定のサイズになる」ように基底フォントサイズを設定するには jbase オプションを利用します．

```
% 和文の \normalsize を2.75mm(=11Q)にする
\documentclass[lualatex,b5paper,jbase=2.75mm,ja=standard]{bxjsbook}
```

※ 単位“Q”は (u)pLaTeX 以外では使えません．
またこの時点では“標準設定”が未完了のため，\jQ も使用できません．

#### 和文フォントのプリセット指定 {#uc956aaf}

“標準設定”において，既定では基本和文フォント（\mcfamily／\gtfamily の実体）として以下のものが用いられます．

- pLaTeX／upLaTeX では DVI ウェアの設定に従う．（つまり文書中では指定しない．）
- pdfLaTeX では Type1 版（ipaex-type1 パッケージ）の IPAex フォント．
- XeLaTeX／LuaLaTeX では本物（TrueType 形式）の IPAex フォント．

この基本和文フォント設定は，jafont オプションを用いて簡単に変更できます．
例えば，次のようにすると，基本和文フォントとしてヒラギノ（ProN版）が使用されるようになります．

```
\documentclass[xelatex,a4paper,ja=standard,jafont=hiragino-pron]{bxjsarticle}
```

この機能の仕様について少し詳しく説明しましょう．
“標準設定”で利用している日本語処理パッケージには「和文フォントのプリセット設定」を行うためのパッケージが付随しています．

- pLaTeX／upLaTeX では pxchfon パッケージ．
- pdfLaTeX では bxcjkjatype パッケージ自体がその機能をもつ．
- XeLaTeX では zxjafont パッケージ．
- LuaLaTeX では luatexja-preset パッケージ．

そこで，jafont オプションキーが指定された場合はその値をオプションにして当該のパッケージを読み込むことで，プリセット設定を実現しているのです．
つまり，先の例では内部で次のパッケージ読み込みが行われます．

```
\usepackage[hiragino-pron]{zxjafont}
```

※もちろん，jafont を使わずに手動で和文フォントを設定しても構いません．

```
\documentclass[xelatex,a4paper,ja=standard]{bxjsarticle}
% zxjafont の命令を用いて(Win8.1の)游フォントを指定する
\setCJKmainfont[BoldFont=YuMincho-DemiBold]{YuMincho-Regular}
\setCJKsansfont[BoldFont=YuGothic-Bold]{YuGothic-Regular}
```

#### 和文用の単位 {#tf4c0036}

和文組版に特化したエンジンである (u)pLaTeX では zw や Q 等の和文特有の単位がサポートされていますが、他のエンジンではこれらの単位は使えません。
BXJS クラス（標準設定）ではこれらの単位の代用となる長さ命令を提供しています。

<table>
<tbody>
<tr><td> 命令 </td><td> 次の単位に相当 </td><td> 備考 </td></tr>
<tr><td style="text-align:center"> \zw </td><td style="text-align:center"> zw </td><td style="text-align:left"> 現在の和文の全角幅 </td></tr>
<tr><td style="text-align:center"> \jQ </td><td style="text-align:center"> Q </td><td style="text-align:left"> = 0.25mm </td></tr>
<tr><td style="text-align:center"> \jH </td><td style="text-align:center"> H </td><td style="text-align:left"> = 0.25mm </td></tr>
<tr><td style="text-align:center"> \trueQ </td><td style="text-align:center"> trueQ </td><td style="text-align:left"> = 0.25truemm </td></tr>
<tr><td style="text-align:center"> \trueH </td><td style="text-align:center"> trueH </td><td style="text-align:left"> = 0.25truemm </td></tr>
</tbody>
</table>

少し特殊な長さ命令として \ascQ（anti-scaled Q）があります。
これは、\trueQ（= 0.25truemm）を和文スケール値で割った長さであり、以下のようにフォントサイズ指定で用いることを想定しています。

```
% 和文サイズ10Q, 行送り16H
\fontsize{10\ascQ}{16\trueH}\selectfont
```

これを実行すると、和文の全角幅（\zw）が 10trueQ になるようにフォントサイズが変更されます。

この他、本来 (u)pLaTeX のカーネルで定義されている以下の和文特有パラメタも、全てのエンジンについて利用可能です。

<table>
<tbody>
<tr><td> 命令 </td><td> 意味 </td></tr>
<tr><td style="text-align:center"> \Cwd </td><td style="text-align:left"> 標準の和文文字幅（\normalsize の \zw）</td></tr>
<tr><td style="text-align:center"> \Cht </td><td style="text-align:left"> 標準の和文文字高さ </td></tr>
<tr><td style="text-align:center"> \Cdp </td><td style="text-align:left"> 標準の和文文字深さ </td></tr>
<tr><td style="text-align:center"> \Chs </td><td style="text-align:left"> 標準の和文字送り（BXJS では \Cwd に等しい） </td></tr>
<tr><td style="text-align:center"> \Cvs </td><td style="text-align:left"> 標準の和文行送り（\normalsize の \baselineskip 自然長） </td></tr>
</tbody>
</table>

#### hyperrefの文書情報の文字化け対策 {#k7783d8f}

hyperref パッケージを利用して出力 PDF 文書に文書情報（しおり等）を付加する場合、一般的には“PDF の文字コード”に関する設定を適切に行う必要がありますが、これはエンジンごとに「正しい設定」が異なっていて非常に厄介なものです。

- 参考：[考察：文書情報が文字化けしない hyperref の設定](http://d.hatena.ne.jp/zrbabbler/20130204/1359977214)

BXJS クラスでは使用されるエンジンに応じて「正しい設定」が自動的に行われるようになっています。
そのため、hyperref パッケージで unicode オプションを指定する必要はありません。（指定した場合も「正しい方」に補正される。）
また、(u)pLaTeX + dvipdfmx の上で用いる時も、ほとんどの場合、pxjahyper パッケージの読込は不要です。[^1]

※BXJS クラスが自動的に hyperref パッケージを読み込むことはありません。

#### magstyle設定 {#we2b3036}

「新ドキュメントクラス」（JS クラス）におけるページレイアウト決定の過程では、基底フォントサイズが 10pt 以外の場合に、“版面を拡大縮小する”という手順を採用しています。
そして、JS クラスではこの“版面の拡大”を実現するために TeX エンジンが持つ版面拡大機能（仮に「mag 設定」と呼称する）を利用しています。
このことには相応の理由があるのですが、一方でこの処理は以下のような不都合の原因となっています。

- 文書中で指定する絶対の長さ（単位付数値）について単位に“true”をつける必要がある。（付けないと mag 設定により拡大縮小されてしまう。）
- mag 設定は LaTeX ではほとんど用いられないため、実際に用いられた時にそれを想定していないパッケージが誤動作する。[^2]

BXJS クラスでは“版面拡大”について mag 設定以外の他の実現方法を提供していて、クラスオプション magstyle でそれを選択できます。

- magstyle=mag（既定）： JS クラスと同様に、“版面拡大”のために mag 設定を用います。
- magstyle=real： mag 設定を一切用いず、代わりに、全てのページレイアウトのパラメタの値を実際にスケールさせた値に置き換えます。
- magstyle=xreal： real と同様の処理をし、さらにオプティカルサイズの補正のために NFSS にパッチを当てます。

### 不具合 {#x3d34063}

#### graphicx に明示的に xetex オプションを指定して xelatex で処理すると ! LaTeX Error: Option clash for package graphicx. {#oe701641}

以下のように，BXJS クラス（“標準設定”）の XeLaTeX 文書で graphicx パッケージを xetex のドライバオプションを明示して読み込むとエラー <strong>! LaTeX Error: Option clash for package graphicx.</strong> が発生します．

***

```
\documentclass[xelatex,ja=standard]{bxjsarticle}
\usepackage[xetex]{graphicx}
\begin{document}
吾輩は猫である。
\end{document}
```

***

XeLaTeX の標準設定では zxjatype パッケージを通して fontspec パッケージが読み込まれるのですが，この fontspec が graphicx をオプション無しで読み込んでいるためエラーが発生します．

graphicx の xetex オプション指定をはずすとタイプセットできます．

***

```
\documentclass[xelatex,ja=standard]{bxjsarticle}
\usepackage{graphicx} % オプション無し
\begin{document}
吾輩は猫である。
\end{document}
```

***

### 関連リンク {#f25f7b2d}

- [「BXjscls」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=BXjscls)
- [天地有情 BXjscls の pdflatex で日本語組版をしてみた](http://konoyonohana.blog.fc2.com/blog-entry-76.html)

#### ChangeLog {#je081c38}

- [https://github.com/zr-tex8r/BXjscls](https://github.com/zr-tex8r/BXjscls)
    - [https://github.com/zr-tex8r/BXjscls/commits/](https://github.com/zr-tex8r/BXjscls/commits/)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/latex/bxjscls](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/bxjscls/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/bxjscls/?view=log)

[^1]: 文書情報の文字列中に一部の特殊文字が含まれる場合には相変わらず必要になる。
[^2]: 例えば hyperref の用紙サイズ機能が誤動作する。なお、BXJS クラスではその機能を無効化して問題を回避している。
