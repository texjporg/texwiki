---
title: "BXjscls"
url: "/BXjscls/"
date: 2013-10-22T19:25:42Z
pukiwiki: "BXjscls"
---

# BXjscls

## [BXjscls](https://github.com/zr-tex8r/BXjscls) {#l3cac28c}

BXjscls パッケージは pdflatex, lualatex, xelatex, platex-ng, uplatex, platex で使用可能な日本語文書組版のための LaTeX 文書クラスのコレクションです．
TeX Live に含まれています．

Japanese TeX Development Community の [jsclasses](/jsclasses/) は (u)pLaTeX での使用を前提としているため，他のエンジンでは使用することができません．
BXjscls は jsclasses から (u)pLaTeX 依存の部分を分離したもので，これと各エンジン用の日本語処理パッケージを組み合わせることで，(u)pLaTeX 以外でも新ドキュメントクラスを用いた場合と同等の文書作成が可能となります．

- [https://github.com/zr-tex8r/BXjscls](https://github.com/zr-tex8r/BXjscls)
- [https://ctan.org/pkg/bxjscls](https://ctan.org/pkg/bxjscls)
- [https://ctan.org/tex-archive/language/japanese/BX/bxjscls](https://ctan.org/tex-archive/language/japanese/BX/bxjscls)

***

***

### 基本的な使い方 {#g8a35a3c}

ここでは新しい版（v2.x）の BXjscls パッケージの使い方を説明します．
（以前の v0.3，v0.9 とは若干仕様が異なることに注意．）

#### 文書クラスの一覧 {#i6dd9974}

BXjscls パッケージには次の 4 つの文書クラス（「BXJS クラス」と総称する）が収録されています．
これらは何れも「新ドキュメントクラス」（JS クラス）の文書レイアウトと機能を継承したものとなっています．

- bxjsarticle クラス： 「章のないレポート」用．jsarticle クラスに相当．
- bxjsreport クラス： 「章のあるレポート」用．jsreport クラスに相当．<br>
    ※v1.6から継承元が従来の「jsbook + report オプション」から変更されました．

- bxjsbook クラス： 書籍用．jsbook クラスに相当．
- bxjsslide クラス： スライド用．jsarticle クラス + slide オプションに相当．

#### 文書クラスの指定 {#v3b1d61c}

BXJS クラスを“標準設定”で使用する場合，\documentclass 命令を以下のように記述します．

```
\documentclass[<エンジン>,<ドライバ>,ja=standard,<他オプション>...]{<クラス名>}
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

#### 例（XeLaTeX + bxjsarticle クラス） {#x483b172}

以下は，bxjsarticle クラスを用いた簡単な XeLaTeX 文書の例です．

```
% 文字コードは UTF-8
\documentclass[a4paper,xelatex,ja=standard]{bxjsarticle}% ドライバ指定は無し
\usepackage{metalogo} % \XeLaTeX ロゴのため
\title{{\XeLaTeX}で日本語文書}
\author{七篠\ 権兵衛}
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
- XeLaTeX および pdfLaTeX を使用する場合，空白文字の扱いが (u)pLaTeX とは多少異なります．
    例えば，「七篠 権兵衛」のように和文文字の間に欧文空白を入れたい場合は，空白文字の前に \ が必要です．

#### 例（pdfLaTeX + bxjsslide クラス） {#g10102c6}

以下は，bxjsslide クラスを用いた pdfLaTeX 文書（スライド）の例です．
この文書では出力 PDF に文書情報を付加するために hyperref パッケージを読み込んでいます．
（BXjscls の v1.0a 以降が必要．）

```
% 文字コードは UTF-8
\documentclass[pdflatex,ja=standard]{bxjsslide}% ドライバ指定は無し
\usepackage[colorlinks]{hyperref}
\hypersetup{pdftitle={{pdf\LaTeX}で日本語文書},
  pdfauthor={七篠権兵衛},
  pdfkeywords={BXJSクラス}}
\usepackage{color}
\newcommand{\alert}[1]{\textcolor{red}{#1}}
\title{{pdf\LaTeX}~で日本語文書}
\author{七篠\ 権兵衛}
\begin{document}
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
% 和文の \normalsize を11Qにする
\documentclass[lualatex,b5paper,jbase=11Q,ja=standard]{bxjsbook}
```

※ 単位“Q”は本来は (u)pLaTeX 特有のものですが，（v1.0a 以降では）base，jbase 指定に限って他のエンジンでも使用できます[^1]．

#### 和文フォントのプリセット指定 {#uc956aaf}

※“標準設定”（ja=standard）を前提にします．

既定では基本和文フォント（\mcfamily／\gtfamily の実体）として以下のものが用いられます．

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

<!-- 別小節(#vcf338a2,#z7248164)に移した前の残骸が残っていた -->

※もちろん，jafont を使わずに手動で和文フォントを設定しても構いません．

```
\documentclass[xelatex,a4paper,ja=standard]{bxjsarticle}
% zxjatype の命令を用いて(Win8.1の)游フォントを指定する
\setCJKmainfont[BoldFont=YuMincho-DemiBold]{YuMincho-Regular}
\setCJKsansfont[BoldFont=YuGothic-Bold]{YuGothic-Regular}
```

#### jafont オプションの応用的な使用法 {#vcf338a2}

※“標準設定”（ja=standard）を前提にします．

- 例えば，「jafont=sourcehan(-otc)」のように括弧付きの値を指定すると，XeLaTeX/LuaLaTeX では「sourcehan」，それ以外のエンジンでは「sourcehan-otc」と解釈されます．（v1.7b 以降）
- 「jafont=auto」を指定すると，TeX Live の kanji-config-updmap コマンドで指定したファミリ名が実際のプリセット名として使われます．

#### 2004JIS 字形を選択する {#z7248164}

※“標準設定”（ja=standard）を前提にします．

jafont でプリセットを指定した場合，既定では 90JIS 字形が選択されます．2004JIS 字形を選択するには，「japaram オプションの値のリストの中に“jis2004”を追加」します．

```
\documentclass[lualatex,ja=standard,jafont=noto,
    japaram={jis2004},a4paper]{bxjsarticle}
\begin{document}
巷で噂の葛飾区。
\end{document}
```

※プリセットに対する補助設定という位置付けです．<br>
※実際に字形の切り替えができるかはフォントに依ります．<br>
※現状では (u)pLaTeX/LuaLaTeX でのみ有効です．

#### 和文用の単位 {#tf4c0036}

※“標準設定”（ja=standard）を前提にします．

和文組版に特化したエンジンである (u)pLaTeX では zw や Q 等の和文特有の単位がサポートされていますが，他のエンジンではこれらの単位は使えません．
BXJS クラスではこれらの単位の代用となる長さ命令を提供しています．

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

少し特殊な長さ命令として \ascQ（anti-scaled Q）があります．
これは，\trueQ（= 0.25truemm）を和文スケール値で割った長さであり，以下のようにフォントサイズ指定で用いることを想定しています．

```
% 和文サイズ10Q, 行送り16H
\fontsize{10\ascQ}{16\trueH}\selectfont
```

これを実行すると，和文の全角幅（\zw）が 10trueQ になるようにフォントサイズが変更されます．

この他，本来 (u)pLaTeX のカーネルで定義されている以下の和文特有パラメタも，全てのエンジンについて利用可能です．

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

#### 和文用の単位そのものを使う {#b66764f6}

v1.8より，(u)pLaTeX 以外のエンジンでも和文用の単位そのものを使う機能が追加されました．

次のように，「japaram オプションの値のリストの中に“units”を追加するとこの機能が有効になり，「\hspace{1zw}」などの命令が全てのエンジンで通るようになります．

```
\documentclass[lualatex,ja=standard,japaram={units}]{bxjsarticle}
```

#### hyperrefの文書情報の文字化け対策 {#k7783d8f}

※“標準設定”（ja=standard）を前提にします．

hyperref パッケージを利用して出力 PDF 文書に文書情報（しおり等）を付加する場合，一般的には“PDF の文字コード”に関する設定を適切に行う必要がありますが，これはエンジンごとに「正しい設定」が異なっていて非常に厄介なものです．

- 参考：[考察：文書情報が文字化けしない hyperref の設定](http://d.hatena.ne.jp/zrbabbler/20130204/1359977214)

BXJS クラスでは使用されるエンジンに応じて「正しい設定」が自動的に行われるようになっています．
そのため，hyperref パッケージで unicode オプションを指定する必要はありません．（指定した場合も「正しい方」に補正される．）
また，(u)pLaTeX + dvipdfmx の上で用いる時も，ほとんどの場合，pxjahyper パッケージの読込は不要です．[^2]

※BXJS クラスが自動的に hyperref パッケージを読み込むことはありません．

#### 数式の一部として和文文字を出力する {#s9d7b599}

※“標準設定”（ja=standard）を前提にします．

次のように，数式の要素として（つまり \mbox や \text を介して「数式中のテキスト」として扱うのではなく）和文文字が使われることがあります．

```
\[ % "地"は地球, "太"は太陽を表す識別子
  \frac{a_{地}^3}{T_{地}^2} = G\cdot\frac{m_{太} + m_{地}}{4\pi^2}
\]
```

v1.3a 以前では数式中で和文文字が使えるのは LuaLaTeX に限られていましたが，v1.4 以降では (u)pLaTeX でも使えるようになりました．また，クラスオプションに enablejfam=true を指定すると，XeLaTeX でも数式中で和文文字が使えるようになります．

```
% XeLaTeX 文書, UTF-8
\documentclass[xelatex,ja=standard,enablejfam=true,a4paper]{bxjsarticle}
\begin{document}
\[ \frac{a_{地}^3}{T_{地}^2} = G\cdot\frac{m_{太} + m_{地}}{4\pi^2} \]
\end{document}
```

和文用の数式フォント命令（\mathmc，\mathgt）は本来は (u)pLaTeX と LuaLaTeX でのみサポートされるものです．それ以外のエンジン（pdfLaTeX も含む）でも“一時的にテキストに切り替える”という擬似的な処理で実装されているためこれらの命令が使えます．ただしこの場合は（一般的には）amstext（または amsmath）パッケージの併用が必要になります．

```
% pdfLaTeX 文書, UTF-8
\documentclass[pdflatex,ja=standard,a4paper]{bxjsarticle}
\usepackage{amsmath}% これも必要
\begin{document}
% e_{地} は無理だが, \mathmc を使うとOK
\[ e_{\mathmc{地}} = 0.0167 \]
\end{document}
```

#### magstyle設定 {#we2b3036}

「新ドキュメントクラス」（JS クラス）におけるページレイアウト決定の過程では，基底フォントサイズが 10pt 以外の場合に，“版面を拡大縮小する”という手順を採用しています．
そして，JS クラスではこの“版面の拡大”を実現するために TeX エンジンが持つ版面拡大機能（仮に「mag 設定」と呼称する）を利用しています．
このことには相応の理由があるのですが，一方でこの処理は以下のような不都合の原因となっています．

- 文書中で指定する絶対の長さ（単位付数値）について単位に“true”をつける必要がある．（付けないと mag 設定により拡大縮小されてしまう．）
- mag 設定は LaTeX ではほとんど用いられないため，実際に用いられた時にそれを想定していないパッケージが誤動作する．[^3]
- 新しい（v0.87 以降の）LuaTeX エンジンでは，そもそも mag 設定のサポートが廃止された．

BXJS クラスでは“版面拡大”について mag 設定以外の他の実現方法を提供していて，クラスオプション magstyle でそれを選択できます．[^4]

- magstyle=usemag（既定）： JS クラスと同様に，“版面拡大”のために mag 設定を用います．
- magstyle=nomag： mag 設定を一切用いず，代わりに，全てのページレイアウトのパラメタの値を実際にスケールさせた値に置き換えます．
- magstyle=nomag\*： nomag と同様の処理をし，さらにオプティカルサイズの補正のために NFSS にパッチを当てます

※ v1.1f において，jsclasses の 2016/07/15 版に合わせるためにオプション値の名称が変更されました．これより前の版では，usemag／nomag／nomag\* の代わりにそれぞれ mag／real／xreal と書いてください．
※ magstyle の既定値は usemag ですが，例外的に，v0.87 以降の LuaTeX では usemag がサポートされない[^5]ので代わりに nomag\* が既定値となります．

magstyle の値をどうすればよいか迷った場合は次のように決めればよいでしょう．

- とにかく JS クラスと同じ動作にしたい場合は，既定の usemag のままにする．
- それ以外の場合，特に「mag 機能の使用による不具合を避けたい」場合は：
    - 本文で Computer Modern フォント（およびその派生）を用いる場合は，nomag\* を指定する．
    - そうでない場合は，nomag を指定する．

#### 和文間空白，和欧文間空白の設定 {#fc1b6217}

※“標準設定”（ja=standard）を前提にします．

全てのエンジンにおいて，\setkanjiskip 命令で和文間空白，\setxkanjiskip 命令で和欧文間空白の大きさを設定できます．
値に em や \zw の単位を用いた場合は，フォントサイズの変更に追随します．

```
% 和欧文間空白を“八分空き”にする
\setxkanjiskip{0.125em minus 0.042em}
```

また，pTeX 系と同様の \\(no)autospacing および \\(no)autoxspacing 命令が全てのエンジンで使用できます．

※段落の途中で和文間空白や和欧文間空白の設定を変えた場合の挙動は，エンジンにより異なります．

#### jsbookクラスの一行の文字数の上限を変更する {#r305df84}

本文領域の一行の文字数は、普通は紙面の幅が大きくなるのに合わせて増えます．ところが、書籍用の bxjsbook クラスでは，行が長くなりすぎて読みにくくなるのを防ぐため，一行の文字数の上限を 40 文字に設定しています。[^6]

この上限の値は textwidth-limit オプションで変更することができます．もちろん，十分な横幅がない場合は実際の行長はここで指定した値よりも小さくなります．

```
% A4判の(使える)横幅を使い切りたい
\documentclass[lualatex,ja=standard,textwidth-limit=60,a4paper]{jsbook}
```

#### エンジンの自動判定 {#u1ac124a}

BXJS クラスでは使用するエンジンの種類をオプションとして指定させる仕様になっています．
これは，「どのエンジンを使うのが正しいのかは文書に明示されるべき」という設計思想のためです．

しかし，例えば「Markdown から LaTeX を途中経由して PDF に変換する」ツール等において，自動生成される LaTeX ソースのテンプレートに BXJS クラスを使用するという場合は正しいエンジン名の指定が難しい可能性も考えられます．

このような場合に対応するため，エンジンオプションとして autodetect-engine という特殊な値を用意しています．
これを指定するとエンジンが自動的に判別されます．

エンジンを自動判別する時には「DVI 出力の時だけ指定が必要」なドライバオプションの扱いが厄介です．
これに対処するため，ドライバオプションにも特殊な値 dvi=dvipdfmx が用意されています．
これを指定すると，エンジンが DVI 出力の時にはドライバオプションに dvipdfmx が指定されたと見なされ（グローバルオプションとして機能する），エンジンが PDF 出力の場合は何も起こりません．
つまり，以下のようにオプションを指定すると，PDF 出力のエンジンでも (u)pLaTeX + dvipdfmx でもコンパイルが通るようになります．

```
 \documentclass[autodetect-engine,dvi=dvipdfmx,ja=standard,
     a4paper,9pt,twocolumn]{bxjsreport}
```

#### XeTeX の ActualText 生成機能を利用する {#pe4c22be}

XeLaTeX エンジンを利用する場合に，ActualText 生成機能（\XeTeXgenerateactualtext=1，詳しくは[XeTeX](/XeTeX/)の記事を参照）を有効にしたい場合は，クラスオプションに precisetext を指定します[^7]．（v1.1b 以降が必要．）

```
% ActualText生成を有効にする
\documentclass[xelatex,a4paper,ja=standard,precisetext]{bxjsarticle}
```

※\XeTeXgenerateactualtext に対応した新しい XeTeX 以外のエンジンではこのオプションは（警告付きで）無視されます．

#### Pandoc モード {#f45df5c0}

[Pandoc](/Pandoc/) （文書形式変換ツール）のデフォルトの LaTeX 用テンプレートを利用して他形式（Markdown 等）の日本語文書を LaTeX 形式（および PDF 形式）に変換する場合，BXJS クラスの「Pandoc モード」を利用すると適切な出力が得られます．この場合，文書クラスのオプションに pandoc を指定し，エンジンと和文ドライバの指定（ja=...）を省略します．[^8]（v1.1a 以降が必要です．）

bxjsarticle クラスで Pandoc モードを指定した例を示します．

```
\documentclass[pandoc,jafont=ipaex,a5paper]{bxjsarticle}
```

この指定を生成するための Pandoc のオプション指定は以下のようになります．

```
pandoc sample.md -o sample.pdf --latex-engine=lualatex
  -V papersize=a5 -V documentclass=bxjsarticle
  -V classoption=pandoc -V classoption=jafont=ipaex
```

Pandoc は本来は (u)pLaTeX をサポートしませんが，BXJS クラスの Pandoc モードを用いると，正常な（コンパイルが正しく通る）(u)pLaTeX 文書に変換することができます．詳しくは以下の記事を参照してください．

- [BXjscls がまた新しくなった（v1.1a）](http://d.hatena.ne.jp/zrbabbler/20160228/1456622107)

※「Pandoc モード」では独自の（“pandoc”という名前の）和文ドライバが用いられます．[^9]

### 注意事項 {#x2bf3267}

#### bxjsbook クラスのページレイアウトが 1.3 版で変更された {#ed3951a0}

BXJS クラスのページレイアウトは JS クラスに合わせることを原則としていますが，手違いのため，bxjsbook クラスの本文領域の水平マージンについて，jsbook クラスと大きく異なる値になっていました．（大きな紙面の場合，本文領域がノド側に偏るのが本来のデザインです．）これは本来想定していた設計ではないため，1.3 版において水平マージンを jsbook のものと合わせる改修が行われました．

以前のレイアウトを使い続けたい場合は，クラスオプションに“layout=v1”を指定してください．

```
\documentclass[lualatex,ja=standard,layout=v1,a4paper]{jsbook}
```

※詳しくは以下の記事を参照してください．

- [BXjscls の新しいやつ（v1.3）](http://d.hatena.ne.jp/zrbabbler/20161106/1478424429)

#### JSクラスのオプションで使用不可能なもの {#g072eb66}

- クラス変種指定： report，slide．<br>
    ※ report 相当はbxjsreport，slide 相当はbxjsslide と別クラスになっている．

- トンボ出力： tombow，tombo，mentuke．<br>
    ※トンボ出力には pLaTeX のカーネルの機能が必要だから．

- 和文フォントメトリック指定： jis，winjis，mingoth．

<!-- disablejfam はv1.4で対応された． -->
<!-- でも今の e-pTeX は数式ファミリが256個に拡張されているので使う機会はないと思う． -->

#### BXJS クラスの“標準設定”使用時に graphicx にオプションを与えたい場合 (XeLaTeX / LuaLaTeX) {#oe701641}

以下のように，BXJS クラスの“標準設定”使用時に XeLaTeX / LuaLaTeX 文書で [graphicx](/graphicx/) パッケージにオプションを与えて読み込むとエラー <strong>! LaTeX Error: Option clash for package graphicx.</strong> が発生します．
これは，BXJS クラスの XeLaTeX 用標準設定では zxjatype パッケージを通して fontspec パッケージが読み込まれるのですが，この fontspec が graphicx をオプション無しで読み込んでいるためです．
LuaLaTeX 用標準設定でも fontspec が使われるため，同じ理由でエラーが発生します．

```
\documentclass[xelatex,ja=standard]{bxjsarticle}
\usepackage[hiresbb]{graphicx}
\begin{document}
吾輩は猫である。
\end{document}
```

回避策として，BXJS クラス v1.0b 以降ではグローバルオプション（クラスオプション）にこれらのオプションを付ければ適用されます．

```
\documentclass[xelatex,ja=standard,hiresbb]{bxjsarticle} % ここで graphicx のオプションを与える
\usepackage{graphicx} % ここはオプションなし
\begin{document}
吾輩は猫である。
\end{document}
```

なお，BXJS クラス v1.0a 以前ではこの回避策をとることもできませんでしたので，次のようにすればよいでしょう．

```
\PassOptionsToPackage{hiresbb}{graphicx} % graphicx が読まれるときにオプションを渡せるように事前に書いておく
\documentclass[xelatex,ja=standard]{bxjsarticle} % この段階で fontspec によって graphicx が読み込まれる
\begin{document}
吾輩は猫である。
\end{document}
```

なお，graphicx の xetex ドライバ指定については明示指定しなくとも自動的に xetex.def が読まれますので，わざわざオプション指定しなくてもよいでしょう．

#### 文字を“和文として”出力する {#s0220665}

(u)pLaTeX においては特に何も設定しない場合は，ASCII で（直接または間接的に）入力する文字以外の Unicode 文字は全て和文として扱われます．[^10]しかしその他のエンジン（と日本語処理パッケージの組合せ）では Unicode 文字の一部が“欧文扱い”になっています．そのため通常は，そのような文字は“欧文側”のフォントで出力される（あるいは，フォントが対応してなければ出力されない）ことになります．

例えば，次の文書をコンパイルすると，“☃”（U+2603）の文字の部分が空白になってしまいます．

```
\documentclass[xelatex,a4paper,ja=standard]{bxjsarticle}
\begin{document}
吾輩は☃である。
\end{document}
```

XeLaTeX + zxjatype においては，“☃”は“欧文扱い”であるため，欧文フォントで出力しようとしますが，現在の欧文フォント（Latin Modern Serif）は“☃”の字形を持たないので，結果的に空白になってしまったのです．

BXJS クラス（標準設定）では \jachar{&lt;文字>} という命令を用いて，当該の文字を強制的に“和文として”出力させることができます．

```
\documentclass[xelatex,a4paper,ja=standard]{bxjsarticle}
\begin{document}
吾輩は\jachar{☃}である。
\end{document}
```

現在の和文フォント（IPAex明朝）には“☃”の字形があるため，これで正常に“☃”が出力できます．

※ \jachar の引数には文字 1 つだけを指定できます．

#### macOS で IPAex フォントがシステムにインストールされていない状態で BXjscls のデフォルト設定のまま XeLaTeX を使用するとエラーになる {#gc18a2b0}

macOS で IPAex フォントがシステムにインストールされていない状態で BXjscls のデフォルト設定のまま XeLaTeX を使用するとエラーになるようです。--&gt; ([参考](https://x.com/wtsnjp/status/1068110801381163008))

### 不具合 {#x3d34063}

#### LuaLaTeX + BXJS クラスで graphicx パッケージを読み込むと“Option ‘pdftex’ requires pdfTeX”エラーが出る → 最新版にアップデート {#v4743042}

v1.0b～v1.3a の BXJS クラス（標準設定）と最近の LuaLaTeX の組合せで graphicx（または graphics）パッケージを読み込むと予期せぬエラーが発生します．

```
% LuaLaTeX 文書
\documentclass[lualatex,ja=standard]{bxjsarticle}
\usepackage{graphicx}
% 以下略
```

例えば，この文書をコンパイルすると次のエラーが発生します．

```
! Package pdftex.def Error: Option `pdftex' requires pdfTeX,
(pdftex.def)                but pdfTeX features are missing.
(pdftex.def)                Loading of this driver file is aborted.
```

これはバグであり，v1.4 において修正されています． <!-- 回避策： グローバルオプションにluatexを指定． -->

※“Option clash”のエラーについては，本記事の「BXJS クラスの“標準設定”使用時に graphicx にオプションを与えたい場合」の項目を参照してください．

#### 別行立て数式を使うと警告が出る → 最新版にアップデート {#j507a331}

v1.0a 以前の BXJS クラスでは，文書中に別行立て数式（ディスプレイ数式）が出現するたびに無用な警告が出る，という不具合がありました．例えば：

```
\documentclass[uplatex,dvipdfmx,ja=standard]{bxjsarticle}
\begin{document}
例：
\[ a + b = c \] % ここで警告が出る
\end{document}
```

この文書をコンパイルすると以下の警告が出ます．

```
LaTeX Font Warning: Command \normalsize invalid in math mode on input line 4.
```

これはバグであり，v1.0b において修正されています． <!-- 回避策： 当該の警告を潰してしまう． -->

#### \paragraph 命令でエラーが出る → 最新版にアップデート {#pa6f742a}

v1.0d～v1.1 の BXJS クラスを minimal 和文ドライバで用いる場合，\paragraph 命令を使うとエラーが出ます．例えば：

```
% ja無指定なのでminimal和文ドライバになる
\documentclass[xelatex,a4paper]{bxjsarticle}
\usepackage{zxjatype}
\usepackage[ipaex]{zxjafont}
\begin{document}
\paragraph{BXjsclsは} アレ。
\end{document}
```

この文書をコンパイルすると以下のエラーが出ます．

```
! Undefined control sequence.
\jsParagraphMark ->\jsJaChar 
                             {■}
l.6 \paragraph{BXjsclsは} ア
                              レ。
?
```

これはバグであり，v1.1a において修正されています． <!-- 回避策： \let\jsJaChar\relax -->

### 関連リンク {#f25f7b2d}

- [「BXjscls」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=BXjscls)
- [天地有情 BXjscls の pdflatex で日本語組版をしてみた](http://konoyonohana.blog.fc2.com/blog-entry-76.html)

#### ChangeLog {#je081c38}

- [https://github.com/zr-tex8r/BXjscls](https://github.com/zr-tex8r/BXjscls)
    - [https://github.com/zr-tex8r/BXjscls/commits/](https://github.com/zr-tex8r/BXjscls/commits/)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/latex/bxjscls](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/bxjscls/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/bxjscls/?view=log)

[^1]: この時点では“標準設定”が未完了のため，\jQ 命令は使用できません．
[^2]: 文書情報の文字列中に一部の特殊文字が含まれる場合には相変わらず必要になります．
[^3]: 例えば hyperref の用紙サイズ機能が誤動作します．なお，BXJS クラスではその機能を無効化して問題を回避しています．
[^4]: “magstyle=”を省略する（JS クラスと同じ書き方にする）こともできます．
[^5]: この理由は，そもそもエンジンで（PDF モードにおいて）mag 機能がサポートされないからです．
[^6]: これは jsbook クラスのページレイアウト設計を踏襲したものです．通常のマージン設定で行の長さが 40 文字を超える場合は，超過した分だけ小口側のマージンが増やされます．
[^7]: この設定を既定にするか否かについては現在検討中らしい．
[^8]: ドライバオプションは dvi=dvipdfmx が既定となりますが，これは明示指定で上書きできます．
[^9]: “標準設定”（standard 和文ドライバ）の機能はそのまま pandoc 和文ドライバにも引き継がれているため，通常は両者の違いを意識する必要はありません．
[^10]: ただし pLaTeX の既定の設定では，JIS 符号にある文字以外は扱えません．
