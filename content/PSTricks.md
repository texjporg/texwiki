---
title: "PSTricks"
url: "/PSTricks/"
date: 2004-09-22T22:57:55Z
pukiwiki: "PSTricks"
---

# PSTricks

## PSTricks {#c2b5878d}

<!-- mimetex を使っている行をコメントアウトしました。復帰させました。 -->

\[FIXME\] 以下の内容はかなり古いので，どなたか改訂お願いします。 <!-- 気に入らなかったら、再改訂して下さい。 --> <!-- 例があまり良くないのは分かっています。 -->
#CONTENTS

### What is PSTricks {#v92f1d4b}

PSTricks は TeX，LaTeX 文書ファイルの中で PostScript
の命令を直接使って簡単に表現力豊かな描画ができる便利なパッケージ（スタイルファイル）です。
ただし，dvi ファイルに \special で PostScript
ヘッダ(プロファイル)の内容に依存した PostScript
の命令を埋め込むので，<strong>dvi</strong> ドライバには、

- そのような PostScript 命令をヘッダの内容と組み合わせて、解釈できる VTeX 等の
    ドライバや、組み合わせた PostScript 命令をその場で、 PostScript インタプリタに
    処理させられる xdvipdfmx 等のドライバ

- PostScript を解釈せずに(ヘッダとユーザ・コマンドを埋め込むのみで)
    次の段階に受け渡す dvips(k), dvipsone, texture 等のドライバ

のいずれかを、使う必要があります。 <!-- 現在では、ほとんど使われていない古いドライバにも --> <!-- PSTricks を部分的にサポートする物がいろいろあります。 --> <!-- xdvipdfmx は建前としては、 dvipdfmx の上位互換なので、 pTeX で生成した --> <!-- dvi ファイルも PDF に変換できる可能性が高いです。もちろん、そのためには --> <!-- xdvipdfmx 用の pstricks.con を使用しなければなりません。 -->
PSTricks マクロの生成する PostScript コード断片は
EPS や、 MetaPost の生成する疑似 EPS のように、
独立して解釈できる物ではありません。
この辺りの事情も含め、<strong>dvi</strong> ドライバ固有の設定は pstricks.con ファイルに
書き込んでおく事になっています。 pstricks.con では pstricks.tex で定義された、
すべての TeX マクロを再定義できるので、特定のドライバのみ、異なる実装を
使用して、他の方法では対応できない機能をサポートする事もできます。
このファイルは dvi ドライバではなく、 TeX コンパイラの検索パスに置きます。
<strong>dvi</strong> ドライバの生成物がプロファイルを埋め込んだ PostScript フォーマットの場合は、

PostScript プリンタ（あるいは Ghostscript など）の利用が前提になります。
PostScript 言語はスタックの積み降ろしを直接記述しなければならない、大変、
低レベルの言語であり、設計思想もそれに準じた物になっています。
PostScript 命令への TeX マクロを通しての完全なアクセスを実現する、 PSTricks
のコアのユーザ・インタフェースも、その影響もあり、
METAFONT や [MetaPost](/MetaPost/)
ほど洗練されていないかもしれませんが，
PostScript でできることは何でもできます。
更に、<strong>ノード</strong>の概念と xkeyval を使う事により、高級言語としての
ユーザ・インタフェースを与える事も可能であり、それを実現したパッケージには、
pst-eucl や uml があります。
ドライバが対応していれば、
日本語も使えますし，
曲線のパス長も METAFONT や MetaPost より長くても大丈夫のようです。

### History &amp; License {#qdc38f1e}

PSTricks は [Timothy Van Zandt](http://faculty.insead.edu/vanzandt/) (開発当時プリンストン大, 現フランス・INSEAD) が作り，
フランスの Denis Girou によって育てられ，
[Sebastian Rahtz](http://users.ox.ac.uk/~rahtz/) も加わって，
1997年春に PSTricks 97 として集大成されました。
その後も修正作業は続いています。
PSTricks 2004 は Herbert Voss と Rolf Niepraschk がメンテナンスを行い、
PSTricks 2005 及び PSTricks 2006 は Herbert Voss が管理しています。
多くの TeX 関連の配布物と同じく、LPPL というライセンスで配布されています。

> 以前の LPPL は、
> 配布物に変更を加えた場合は名前も変更するよう要請していましたので、
> PSTricks のメンテナが交替したのにそのままの名前を使い続けていることを
> 不思議に思われる方がいらっしゃるかもしれません。
> 実は2004年頃の新しい LPPL 1.3 からはこの要請がなくなっています。
> また PSTricks 97 では「LPPL」とだけ書いてあって
> バージョンには触れられていなかったのですが、
> PSTricks 2004 では「LPPL 1.0 またはそれ以降のバージョン」
> を適用するよう文面が改められて、明らかに LPPL 1.3 が適用できるようになりました。
> ですから、現在では誰でもそのままの名前で改変再配布できるようです。
> （もちろんこれはライセンス上の話であって、
> コミュニティを混乱させるようなやり方はマナーとして控えるべきでしょう。
> PSTricks の場合も、新旧のメンテナの間で合意があったものと思われます。） <!-- 書き換えてみました。 -->

### インストール {#j88bb2ce}

PSTricks は [CTAN:graphics/pstricks/](https://mirror.ctan.org/graphics/pstricks/) ディレクトリにあります。

以下では、 $TEXMFLOCAL は /usr/local/teTeX/share/texmf-local や $HOME/texmf
更には /usr/local/share/texmf 等に適宜読み替えて下さい。
パッケージのファイルには通常 \*.tex (TeX マクロ本体)と\*.sty (LaTeX 用ラッパ)
と\*.pro (PostScriptヘッダ)がありますので、インストールは，
PSTricks 配布ディレクトリ中の generic ディレクトリの中身は，

```
$TEXMFLOCAL/tex/generic/pstricks
```

というディレクトリを作ってその中に移動し，
PSTricks 配布ディレクトリ中の latex ディレクトリの中身は，

```
$TEXMFLOCAL/tex/latex/pstricks
```

というディレクトリを作ってその中に移動し，
PSTricks 配布ディレクトリ中の dvips ディレクトリの中身は，

```
$TEXMFLOCAL/dvips/pstricks
```

というディレクトリを作ってその中に移動します。
あとは必要に応じて contrib
の中の \*.tex を

```
$TEXMFLOCAL/tex/generic/pstricks
```

に，\*.sty ファイルを

```
$TEXMFLOCAL/tex/latex/pstricks
```

に，\*.pro ファイルを

```
$TEXMFLOCAL/dvips/pstricks
```

に入れます
（たとえば contrib/pst-poly の中身）。 <!-- VTeX を使う場合は、すべて、$TEXMF/tex/generic/pstricksに入れる。 -->

#### バージョンに関する注意 {#xbd10e48}

\*.dtx ファイルの扱いは通常の LaTeX 用パッケージと同じです。
同一パッケージに属する、 \*.tex, \*.sty, \*.pro ファイルはすべて
同じバージョンを使用して下さい。異なるバージョンを混ぜて使用すると、
容易には理解できないトラブルの原因になる事があります。

2004 年 9 月 22 日以降のバージョンの PSTricks は xkeyval (pst-xkey) を
使用しています。できるだけ新しい xkeyval もインストールして下さい。
pst-xkey は xkeyval の内部マクロにアクセスするため、従来の pst-key を使用する
パッケージを後から、ロードすると、正しく処理されない事があります。
\usepackage の順序には気をつける必要があります。
PSTricks 関連のパッケージの場合、相互に必要なパッケージをロードするので、
xkeyval (pst-xkey) を使用するパッケージと
keyval (pst-key) を使用するパッケージが混在していると、
トラブルを解決できない事もあります。
2006 年中には、主要な PSTricks 関連のパッケージは xkeyval 対応になりましたが、
特別な理由が無い限り、 最新のパッケージか、2004 年以前のパッケージで、
すべてを固めた方が安全です。
xcolor もできるだけ新しいバージョンをインストールしてください。
現在の PSTricks に対応しているのは、 2005 年 10 月 15 日の xcolor v2.06 以降です。

#### 古いバージョンを使う際の注意 {#v322c206}

ps4pdf のような、古いパッケージを利用するために、 PSTricks 関連の
パッケージを古いバージョンで固める場合、次のような違いに注意して下さい。

- pst-text.pro に、松田一朗さんと角藤亮さんによる日本語用パッチをあてる。
    パッチの当て方が分からない場合は、テキストエディタで開き、53行目からの

    ```
      String length
      { String CharCount 1 getinterval ShowChar
        /CharCount CharCount 1 add def
    ```

を

```
  /CharSize 1 def
  currentfont /FontType get 0 eq
  { currentfont /FMapType get dup 2 eq exch dup 5 eq exch 9 eq or or
    { /CharSize 2 def} if
  } if
  String length CharSize idiv
  { String CharCount CharSize getinterval ShowChar
    /CharCount CharCount CharSize add def
```

に直す。

- LaTeX で 2004年5月21日より古いバージョンで色を利用する場合、 pstricks
    ではなく、 pstcol を読み込む。 color を直接ロードしてはいけない事は、
    新しいバージョンと同じ。(以下の例のうち、 xcolor による色の指定はそのままでは
    コンパイルできない。)

- \pspicture コマンドの shift オプションは使用できないので、数字のみを書く。

    ```
    \begin{pspicture}[0](x,y)(X,Y)
    ```

とすれば、確保された領域の下端がベースラインに、

```
\begin{pspicture}[1](x,y)(X,Y)
```

とすれば、上端がベースラインになる。 shift オプションとは単位も、正負も異なる。

なお、 LaTeX で使用しているパッケージのバージョンを調べるには、
ソースファイルの先頭に

```
\listfiles
```

と1行付け加え、 log ファイルの最後の方にある、パッケージリストを見ます。

最後に，システムによっては mktexlsr コマンドの実行が必要です。

### パッケージの使い方 {#s2d68477}

<!-- Girou による -->
<!-- [[PSTricks:http://www.tug.org/applications/PSTricks/]] -->
<!-- ホームページにはたくさんの例が載っています。 -->
<!-- このアドレスは現在 Voss のページに飛ばされます。 -->

Web 上の資源については、 Voss による [PSTricks](http://tug.org/PSTricks) から
リンクをたどっていくのがよいでしょう。
LaTeX3 プロジェクトチームによる
The LaTeX Graphics Companion
(Michel Goossens, Sebastian Rahtz, Frank Mittelbach 著, Addison Wesley, 1997)
という本にも詳しい解説があります。
現在のバージョンについても、 2006 年 12 月刊行予定の改訂版に解説が載ります。 <!-- TeXLive 2007 がリリースされたので、出版スケジュールも再び進行するでしょう。 -->

> 邦訳『LaTeXグラフィックスコンパニオン』が出ました
> （鷺谷好輝訳，ISBN4-7561-3461-0，本体5400円，アスキー）。

基本的な使い方は，LaTeX2e ならプリアンブルで

```
\usepackage[dvipsnames]{pstricks}
```

とします。さらに，特定の拡張機能を使うなら，
必要なファイルを \usepackage します。
<strong>dvipsname</strong> は実は xcolor パッケージのオプションです。

PSTricks のコマンド自身のオプションを指定するには、

```
\psline[linecolor=blue,linestyle=dotted,linewidth=1.6pt](-2,1.41421)(3,-1.73205)
```

と言ったように、 \[  \] の中に、個別のコマンド毎に、指定するか、

```
\psset{linecolor=blue,linestyle=dotted,linewidth=1.6pt}
```

と大域的に指定します。

まず、拡張機能を使うための、 PSTricks のコアとなるパッケージ群は

<table>
<tbody>
<tr><td><strong>multido</strong> </td><td>ループマクロ</td></tr>
<tr><td><strong>pst-3d</strong></td><td>3次元射影</td></tr>
<tr><td><strong>pst-coil</strong></td><td>コイルとジグザグ</td></tr>
<tr><td><strong>pst-eps</strong> </td><td>EPS への変換</td></tr>
<tr><td><strong>pst-fill</strong></td><td>パターン・タイリング</td></tr>
<tr><td><strong>pst-grad</strong></td><td>色のグラディエント</td></tr>
<tr><td><strong>pst-node</strong></td><td>ノードとその接続</td></tr>
<tr><td><strong>pst-plot</strong></td><td>関数とデータのプロット</td></tr>
<tr><td><strong>pst-text</strong></td><td>文字をパスに沿わせる、文字のアウトラインをパスにする</td></tr>
<tr><td><strong>pst-tree</strong></td><td>樹形図</td></tr>
<tr><td><strong>pst-all</strong> </td><td>以上すべてを読み込む</td></tr>
</tbody>
</table>

これらのいずれかを読み込めば，
\usepackage{pstricks} は省略できます。

なお、 pst-fill, pst-grad は，以下の pst-blur, pst-slpe 等と同じく、
PostScript level 2 でネイティブにサポートされている機能を
PostScript level 1 でエミュレートすることで、描画命令を生成しており、
簡単には最適化できないコードを吐きだします。もし、 PDF フォーマットでの
ファイル配布を目的としているならば、 PSTricks 関連ではありませんが、
PDF ネイティブな special コードを生成できる、 pgf 等のパッケージの利用も
検討する価値があります。

次に、 PSTricks を利用するパッケージのうち、主要なものを挙げます。

<table>
<tbody>
<tr><td><strong>pst-3dplot</strong></td><td>3次元空間での関数とデータのプロット</td></tr>
<tr><td><strong>pstricks-add</strong></td><td>pstricks/pst-node/pst-plot の実験的拡張機能</td></tr>
<tr><td><strong>pst-asr</strong></td><td>言語学、音声学</td></tr>
<tr><td><strong>pst-bar</strong></td><td>棒グラフ</td></tr>
<tr><td><strong>pst-barcode</strong></td><td>バーコード</td></tr>
<tr><td><strong>pst-blur</strong></td><td>ドロップ・シャドウ</td></tr>
<tr><td><strong>pst-calendar</strong></td><td>カレンダー</td></tr>
<tr><td><strong>pst-circ</strong></td><td>電気・電子回路</td></tr>
<tr><td><strong>pst-eucl</strong></td><td>幾何学作図、関数のグラフの交点計算</td></tr>
<tr><td><strong>pst-func</strong></td><td>特殊関数定義</td></tr>
<tr><td><strong>pst-geo</strong></td><td>地理データ</td></tr>
<tr><td><strong>pst-gr3d</strong></td><td>3次元格子</td></tr>
<tr><td><strong>pst-IIID</strong></td><td>3次元空間での曲面のレンダリング, <a href="http://www.math.ubc.ca/~cass/graphics/text/www/index.html">Bill Casselman</a>の14章を参照</td></tr>
<tr><td><strong>pst-jtree</strong></td><td>言語学、樹形図</td></tr>
<tr><td><strong>pst-labo</strong></td><td>化学実験器具</td></tr>
<tr><td><strong>pst-lens</strong></td><td>部分拡大図</td></tr>
<tr><td><strong>pst-light3d</strong></td><td>3次元空間での帯状曲面のレンダリング</td></tr>
<tr><td><strong>pst-optic</strong></td><td>光学</td></tr>
<tr><td><strong>pst-pdgr</strong></td><td>遺伝系統図</td></tr>
<tr><td><strong>pst-slpe</strong></td><td>色のグラディエント改良版</td></tr>
<tr><td><strong>pst-stru</strong></td><td>都市工学</td></tr>
<tr><td><strong>pst-V3D</strong></td><td>3次元空間での曲面のレンダリング</td></tr>
<tr><td><strong>pst-vue3d</strong></td><td>3次元射影</td></tr>
<tr><td><strong>uml</strong></td><td>UML図</td></tr>
</tbody>
</table>

LaTeX2e 通常の graphics パッケージ集を使う場合は，
PSTricks の後にロードすれば，
同じ名前の命令は graphics パッケージの方が生きます。
PSTricks は xcolor を通じて、color を読み込むので、 (x)color
はロードしないで下さい。

#### pspicture 環境 {#f54da89b}

PSTricks のグラフィック・オブジェクトは dvi ドライバが PostScript の
コマンドを処理して始めて目に見えるように描画可能になるのであって、
TeX から見た場合は、 whatsits と呼ばれる、実態の無い物です。
一部の、周囲にボックスを作成するマクロを除くと、
まるで、幅、高さ、深さ、いずれも 0 のボックスのようなもので、
テキスト中に \pscircle(0,0){4mm} などと直接書いたのでは、
文字と同じ位置に重ねて印刷されてしまいます。
そこで、通常、描画は、そのための専用の領域をボックスとして確保してから、
その中で行います。そのために用意されているのが、 pspicture 環境です。

```
\begin{pspicture}(x,y)(X,Y)
\end{pspicture}
```

これで、幅 |X &minus; x| 、高さ |Y &minus; y| 、深さ 0 のボックスが描画用に確保されます。
x, X, y, Y は整数でなくても構いません。単位を省略すると現在の unit が補われます。
この環境内には、 TeX はタイプセットしませんから、好きなように
グラフィック・オブジェクトを配置できます。 shift オプションを使うと、

```
\begin{pspicture}[shift=r](x,y)(X,Y)
\end{pspicture}
```

高さは r + |Y &minus; y| に、深さは &minus;r になります。

描画用に領域を確保したからと言って、その範囲にしか描画できない訳では
ありません。ところが、グラフをプロットする時など、これでは、
不便な時もあります。そのような時には、pspicture\*環境を使って、
枠からはみ出す部分をクリップします。
以下の左右の図を比較してみて下さい。

```
\documentclass{article}
\usepackage{pstricks-add}
\begin{document}
$y=0.4x^{4}-2x^{2}+2x$のグラフの概形は
\psset{unit=0.6}%単位がついていないと、現在の値 (1cm) に対する比率。
\psset{algebraic=true, VarStep=true,VarStepEpsilon=0.001}
\noindent\begin{pspicture}(-4,-6)(4,6)
\psaxes[linewidth=1.2pt,labels=none,ticks=none]{->}(0,0)(-4,-6)(4,6)
\psplot[linecolor=red]{-4}{4}{0.4*x^4-2*x^2+x}
\uput[240](4,0){$x$}\uput[210](0,6){$y$}\uput[135](0,0){$\mathrm{O}$}
\end{pspicture}
\hfill\begin{pspicture*}(-4,-6)(4,6)
\psaxes[linewidth=1.2pt,labels=none,ticks=none]{->}(0,0)(-4,-6)(4,6)
\psplot[linecolor=red]{-4}{4}{0.4*x^4-2*x^2+x}
\uput[240](4,0){$x$}\uput[210](0,6){$y$}\uput[135](0,0){$\mathrm{O}$}
\end{pspicture*}
\end{document}
```

#### 半透明画像 {#bf1b2f64}

PostScript 言語には色の透明度の概念はありませんが、 PDF 1.4 にはあります。そこで、 Ghostscript では PostScript 言語を独自に拡張して、色の透明度を指定できるようになっています。このような、言語拡張を使用している PS/EPS ファイルは、 Ghostscript 以外のソフトでは正しく取り扱えませんが、 Ghostscript で、印刷、表示、更には、 PDF 変換を行うことで、利用できます。

まずは PSTricks とは本質的に無関係なところで、直に透明度を指定してみた例です。

```
\documentclass{article}
\usepackage{infix-RPN,pst-IIID}
\parindent=0pt
\begin{document}
\infixtoRPN{3*cos(60*(x^2+y^2))*0.75^(x^2+y^2)}
\psset{eye=0 0 10 0, rotateAxis={1,0.8,1.2},rotateAngle=-100}
\psset{unit=0.6,fillcolor=[cmyk]{0.45,1,1,0},plotpoints=200}
\begin{pspicture*}(-5,-2)(5,3)
\psPlot[linestyle=none,showLines=false](-4.1,4.1)(-4.1,4.1){\RPN}
\end{pspicture*}\hfill
\begin{pspicture*}(-5,-2)(5,3)
\pscustom{\code{0.3 .setopacityalpha}
 \psPlot[linestyle=none,showLines=false](-4.1,4.1)(-4.1,4.1){\RPN}}
\end{pspicture*}
\end{document}
```

<img src="http://oku.edu.mie-u.ac.jp/tex/file.php/2/moddata/forum/2/73/transparency0.jpg" alt="">

次に、 PSTricks で、半透明画像を生成するには、 fillstyle に solid または shape を指定し、 opacity, shapealpha を設定します。 fillstyle=solid の時は opacity のみが、 fillstyle=shape の時は shapealpha のみが影響します。 fillstyle=shape の時は blendmode を指定することもできます。 blendmode=0 と blendmode=1 の時は、  fillstyle=solid と同じ、色空間での線形補間になります。 blendmode=2 の時は、光の加算、 blendmode=3 の時は、顔料の加算が結果となります。

```
\documentclass{article}
\usepackage{multido,pstricks}
\parindent=0pt
\begin{document}
\psset{fillcolor=cyan,fillstyle=shape}
\begin{pspicture*}(-5,0)(5,9.5)
\multido{\n=1+1}{9}{\psline[linewidth=5mm,linecolor=magenta!\n0](-5,\n)(5,\n)}
\psset{linestyle=none,linewidth=0.1pt}
\rput[b](-3.5,0){\Large Normal\vphantom{y}}
\psset{blendmode=1}
\psframe[shapealpha=0.2](-5,0)(-4,9.5)
\psframe[shapealpha=0.5](-4,0)(-3,9.5)
\psframe[shapealpha=0.8](-3,0)(-2,9.5)
\rput[b](0,0){\Large Screen\vphantom{y}}
\psset{blendmode=2}
\psframe[shapealpha=0.2](-1.5,0)(-0.5,9.5)
\psframe[shapealpha=0.5](-0.5,0)(0.5,9.5)
\psframe[shapealpha=0.8](0.5,0)(1.5,9.5)
\rput[b](3.5,0){\Large Multiply}
\psset{blendmode=3}
\psframe[shapealpha=0.2](2,0)(3,9.5)
\psframe[shapealpha=0.5](3,0)(4,9.5)
\psframe[shapealpha=0.8](4,0)(5,9.5)
\end{pspicture*}
\end{document}
```

#### \pscustom {#ld3ac648}

\pscustom を用いて、複数のグラフィック・オブジェクトを一体として扱えます。
これが特に有用なのは、塗りつぶしと、クリッピング・パスの設定ですが、
その前に、 PostScript では、曲線(直線を含む)を描くなど、パスを構成する時、
「現在の位置」 (current point) をパスに沿って移動させる事に注意します。
そこで、二つのパスを併せて、新たに一つのパスにするには、初めのパスの
終点を次のパスがどのように扱うかを考えなければなりません。
それを指定するのが、 liftpen オプションです。
デフォルトの liftpen=0 では、初めのパスの終点が、次のパスの始点として
扱われます。一方、 liftpen=1 では、初めのパスの終点から次のパスの明示された
始点まで、線分が引かれ、その点が、始点になります。
\psarc のように、この違いに影響を受けないオブジェクトもありますが、
\pscurve のように、影響を受けるオブジェクトもあります。
関数をプロットして領域を塗りつぶす時などに、 plotstyle=curve
にしている時など、気をつける必要があります。
\psline も linearc の値が 0 でなければ、影響を受けます。

```
\documentclass{minimal}
\usepackage{pst-plot}
\psset{unit=0.4,linewidth=4pt,arrows=-c}
\parindent=0pt
\begin{document}
\begin{pspicture*}(-20,-6)(18,6)
\psset{plotstyle=curve}
\rput(-17,-5){\pscustom{\psline(0,0)\psplot[liftpen=0]{0}{10}{11 1 x add div 1 sub}}}
\rput(-5,-5){\pscustom{\psline(0,0)\psplot[liftpen=1]{0}{10}{11 1 x add div 1 sub}}}
\rput(7,-5){\pscustom{\psline(0,0)\psplot[liftpen=2]{0}{10}{11 1 x add div 1 sub}}}
\end{pspicture*}

\begin{pspicture*}(-20,-1)(18,7)
\psset{linearc=1}
\rput(-12,0){\pscustom{\psline(0,0)\psline[liftpen=0](-5,5)(5,5)}}
\rput(0,0){\pscustom{\psline(0,0)\psline[liftpen=1](-5,5)(5,5)}}
\rput(12,0){\pscustom{\psline(0,0)\psline[liftpen=2](-5,5)(5,5)}}
\end{pspicture*}
\end{document}
```

いずれも、右端の例では、 liftpen=2 としていますが、これは、二つのパスを
連結するのではなく、異なる連結成分として扱う事を意味します。
パスの始点を矢印などで修飾すると、 liftpen=1 は liftpen=2 と同じに振舞います。

複数の連結成分からなるパスを、一体として扱う事の効果を見るため、
廻る向きを逆にとった二つの円を、

- 個別に塗りつぶす、
- 単一の図形として塗りつぶす、
- 個別にクリッピングパスに設定する、
- 単一の図形としてクリッピングパスに設定する、
    場合を比較してみて下さい。描画の順序が分かりやすいように、線幅を太くしてあります。

```
\documentclass{minimal}
\usepackage{pstricks}
\def\circles#1{%
  \psarc(0,-#1){4.5}{0}{360}
  \psarcn[liftpen=2](0,#1){2.5}{360}{0}}
\psset{unit=0.3,linewidth=4pt,linecolor=black!30,%
  fillstyle=vlines,hatchcolor=[RGB]{127,255,191}}
\parindent=0pt
\begin{document}
\begin{pspicture*}(-18,-9)(18,7)
\rput(-12,0){\circles{4}}
\rput(0,-2){\circles{2}}
\rput(12,-4){\circles{0}}
\end{pspicture*}

\begin{pspicture*}(-18,-9)(18,7)
\rput(-12,0){\pscustom{\circles{4}}}
\rput(0,-2){\pscustom{\circles{2}}}
\rput(12,-4){\pscustom{\circles{0}}}
\end{pspicture*}
```

```
\psset{fillstyle=none}
\begin{pspicture*}(-18,-9)(18,7)
\rput(-12,0){\begin{psclip}{\circles{4}}
\psframe[fillstyle=vlines](-5,-9)(5,7)
\end{psclip}}
\rput(0,-2){\begin{psclip}{\circles{2}}
\psframe[fillstyle=vlines](-5,-9)(5,7)
\end{psclip}}
\rput(12,-4){\begin{psclip}{\circles{0}}
\psframe[fillstyle=vlines](-5,-9)(5,7)
\end{psclip}}
\end{pspicture*}

\begin{pspicture*}(-18,-9)(18,7)
\rput(-12,0){\begin{psclip}{\pscustom{\circles{4}}}
\psframe[fillstyle=vlines](-5,-9)(5,7)
\end{psclip}}
\rput(0,-2){\begin{psclip}{\pscustom{\circles{2}}}
\psframe[fillstyle=vlines](-5,-9)(5,7)
\end{psclip}}
\rput(12,-4){\begin{psclip}{\pscustom{\circles{0}}}
\psframe[fillstyle=vlines](-5,-9)(5,7)
\end{psclip}}
\end{pspicture*}
\end{document}
```

#### ノード {#e1584503}

ノードを用いて、点に名前をつける事ができます。これらの点は、
直線や、曲線などで結んだり、他の点を定義する際の基準点として使えます。
ノードには、主に、テキスト中の要素に名前をつける
\rnode, \Rnode, \circlenode, \ovalnode, \dianode, \trinode などと、
(グラフィック中の)点に名前をつける
\pnode, \cnode, \Cnode, \cnodeput, \dotnode, \fnode などがあります。
テキスト中の要素に名前をつけるノード定義のうち、描画を伴う物は、
そのための枠を描くスペースが挿入されるため、文章の組が変化します。
それが、望ましくない時は、 boxsep=false にして下さい。
テキスト中にノードを配置した場合、当然、その正確な位置は
TeX によるタイプセットの影響を受けます。 <!-- どなたか、絵心のある方、 \Darma をどうにかして下さい。 -->

```
\documentclass[dvipsnames]{minimal}
\usepackage{shapepar,multido,pst-node}
\psset{boxsep=false,dotscale=1.5 2.5}
\def\Darma#1{
  \pnode{Darma#1}
  \pscurve[linewidth=4\pslinewidth](0.05,0.7)(0.1,0.6)(0.3,0.7)(0.4,0.7)(0.55,0.55)
  \pscurve[linewidth=4\pslinewidth](-0.05,0.7)(-0.1,0.6)(-0.3,0.7)(-0.4,0.7)(-0.55,0.55)
  \pscircle(-0.3,0.35){0.25}\pscircle(0.3,0.35){0.25}
  \psdots(-0.25,0.25)(0.25,0.25)
  \multido{\ra=-0.9+0.12,\rb=0+-0.04}{8}{\parabola(\ra,\rb)(0,0.1)}
  \pscustom[fillstyle=solid,fillcolor=red,linestyle=none]{
    \psarc(0,0){1}{0}{360}
    \psarcn[liftpen=2](0,0.15){0.7}{180}{0}
    \psarcn(0,1.8){2}{285}{255}}
  {\psset{linecolor=YellowOrange,linewidth=4\pslinewidth}
  \multido{\r=0.6+-0.4}{2}{%
    \psellipticarc{cc-cc}(0,0)(\r,1){200}{260}%
    \psellipticarcn{cc-cc}(0,0)(\r,1){340}{280}}}
  }
\begin{document}
\begin{center}
\shapepar{\CDlabshape}{%
  \multido{\i=1+1}{7}{%
  \ovalnode[linecolor=Orange]{darma\i}{\ifodd\i 達磨\else 達摩\fi}%
  サンガ轉ンダ ★ ☆ ★ ☆ ★ ☆ ★ ☆ ★ ☆ 一二三四五六七八九十 }}
```

```
\vskip2cm
\begin{pspicture}(-8,-1)(8,1)
\multido{\i=1+1,\I=-7+2}{7}{\rput{-90}(\I,0){\Darma\i}}
\rput(7,0){\Darma 8}
\end{pspicture}
\psset{linecolor=Orange,border=0.8\pslinewidth,arrowsize=3pt 4}
\multido{\i=1+1}{7}{\nccurve[nodesepB=1,angleB=90]{->}{darma\i}{Darma\i}}
\end{center}
\end{document}
```

点に名前をつけるメリットを理解して頂くため、
具体例として、まず。次の直角三角形の図を見て下さい。

```
\documentclass{jarticle}
\usepackage{pst-node}
\begin{document}
\begin{center}
\begin{pspicture}(0,0)(5,4)
\pspolygon(0,0)(5,4)(5,0)
\pcline(0,0)(5,4)\ncput*[nrot=:U]{斜辺}
\end{pspicture}
\end{center}
\end{document}
```

これをノードを用いて書き換えると、

```
\documentclass{jarticle}
\usepackage{pst-node}
\begin{document}
\begin{center}
\begin{pspicture}(0,0)(5,4)
\pnode(0,0){O}\pnode(5,4){A}\pnode(5,0){B}
\SpecialCoor
\pspolygon(O)(A)(B)
\ncline{O}{A}\ncput*[nrot=:U]{斜辺}
\end{pspicture}
\end{center}
\end{document}
```

となります。点の位置を取り換える必要が出て来た場合など、
変更箇所が一箇所で済む事が分かります。
このぐらいでは、あまり、ありがた味を感じないかも知れませんが、
点から斜辺に垂線を下ろそうとしたとすると、例えば、こうなります。

```
\documentclass{jarticle}
\usepackage{infix-RPN,pst-node}
\begin{document}
\begin{center}
\begin{pspicture}(0,0)(5,4)
\SpecialCoor
\def\a{38.65981}
\def\x{5}
\infixtoRPN{\x *sin(\a)/cos(\a)}
\pnode(0,0){O}\pnode(!\x\space\RPN){A}\pnode(A|O){B}
\pspolygon(O)(A)(B)
\ncline{O}{A}\ncput*[nrot=:U]{斜辺}
\rput{\a}{\pnode(B|O){H}}
\ncline[linestyle=dashed]{B}{H}\ncput*[nrot=:D]{垂線}
\end{pspicture}
\end{center}
\end{document}
```

点の座標をすべて、直交座標で与えると、 \rput の引数の sanity check を外す
TeX のマクロ・テクニックや、 tx@NodeDic の内部構造に関する PostScript の知識が
必要になって来るため、ここでは、点 A を x 座標と偏角で与え、
点 B は x 座標が A と同じ、 y 座標が O と同じ点として、定義しています。
点 H は、座標軸を &ang;BOA 回転した状態で、
x 座標が B と同じ、 y 座標が O と同じ点として、定義しています。
もし、点の座標をすべて具体的に与えるならば、回転や拡大・縮小によって、
座標系が変化する度に、同じ点でもその座標を計算し直さなければなりません。
点に名前をつけておけば、座標系が変わっても、何時でも同じ名前で参照できます。
いかがでしょうか？ もっと複雑な作図をするのであれば、 pst-eucl を使用した方が良いでしょう。

#### 逆ポーランド式記法 {#lb61b314}

適当な計算式
#mimetex((x^{2}-x)2^{x(x+1)})
を例にします。この式は加法、減法、乗法、冪と言った、二項演算を
繰り返す事で、計算できますが、その手順を樹形図で表す事ができます。

```
\documentclass{article}
\usepackage{amssymb,pst-tree}
\begin{document}
\psset{levelsep=12mm}
$
\pstree{\Tdia{\times}}{
  \pstree{\Tdia{-}}{
    \pstree{\Tdia{\bigcirc^{\square}}}{
      \Tcircle{x}
      \Tcircle{2}}
    \Tcircle{x}}
  \pstree{\Tdia{\bigcirc^{\square}}}{
    \Tcircle{2}
    \pstree{\Tdia{\times}}{
      \Tcircle{x}{
      \pstree{\Tdia{+}}{
        \Tcircle{x}
        \Tcircle{1}}}}}}
$
\end{document}
```

そこで、二変数の関数

#mimetex(f\_{\mathrm{add}}\[x,y\]=x+y)
#mimetex(f\_{\mathrm{exp}}\[x,y\]=x^{y})
#mimetex(f\_{\mathrm{mul}}\[x,y\]=xy)
#mimetex(f\_{\mathrm{sub}}\[x,y\]=x-y)

を定義してやると、この計算式は
#mimetex(f\_{\mathrm{mul}}\[f\_{\mathrm{sub}}\[f\_{\mathrm{exp}}\[x,2\],x\],f\_{\mathrm{exp}}\[2,f\_{\mathrm{mul}}\[x,f\_{\mathrm{add}}\[x,1\]\]\]\])
と、計算の優先順位を示す ( ) を使わずに、表されます。ここで、更に、関数を
引数を並べた右側に置く記法を使うと、

```
x 2 exp x sub 2 x x 1 add mul exp mul
```

と書き表される事になります。
これを<strong>逆ポーランド式記法 (Reverse Polish Notation)</strong> と呼びます。
逆ポーランド式記法で表記された数式は、後入先出の1次元記憶領域さえあれば、
容易に処理できるため、計算機の実装には良く使われます。
実際、これが、 PostScript が理解できる、計算式の表記法です。
そこで、

```
\documentclass{jarticle}
\usepackage{pst-plot}
\begin{document}
\psset{plotstyle=curve,plotpoints=100}
\noindent\begin{pspicture*}(-2,-2)(2,6)
\psaxes[linewidth=1.2pt,labels=none,ticks=none]{->}(0,0)(-2,-2)(2,6)
\psplot[linecolor=red]{-2}{2}{x 2 exp x sub 2 x x 1 add mul exp mul}
\end{pspicture*}
\end{document}
```

で、グラフがプロットできます。とは言え、人間が数式を逆ポーランド式記法で
入力するのでは、大変ですし、誤りも起きやすいので、入力支援が必要になります。
それには、 infix-RPN パッケージを使い TeX に処理させる方法と、
pstricks-add パッケージの algebraic オプションを使い PostScript に処理させる
方法があります。
TeX に処理させるには、 \usepackage{infix-RPN} とプリアンブルに追加し、
\infixtoRPN の引数に infix notation の数式を与えます。すると、 \RPN マクロの
内容が逆ポーランド式記法の数式になります。

```
\documentclass{jarticle}
\usepackage{infix-RPN}
\begin{document}
\infixtoRPN{(x^2-x)*2^(x*(x+1))}\RPN
\end{document}
```

もちろん、 \RPN は \psplot の最後の引数にそのまま使えます。
三角関数を扱う時には、 PostScript では角度を度数法で測る事に
注意しなければなりません。例えば、
#mimetex(z=\frac{2\cos\left(x^{2}-y^{2}\right)}{x^{2}+y^{2}+1})
をプロットするには

```
\documentclass{jarticle}
\usepackage{infix-RPN,pst-3dplot}
\begin{document}
\psset{xPlotpoints=50,yPlotpoints=50,hiddenLine=true,plotstyle=curve}
%\infixtoRPN{2*cos(x^2-y^2)/(x^2+y^2+1)} <--- これは誤り
\infixtoRPN{2*cos(57.29578*(x^2-y^2))/(x^2+y^2+1)}
\begin{pspicture}(-6,-6)(6,6)
\psplotThreeD[linecolor=blue](-5,5)(-5,5){\RPN}
\end{pspicture}
\end{document}
```

\parametricplot にはもちろん、 \edef を使えば良いです。

```
\documentclass{jarticle}
\usepackage{infix-RPN,pst-3dplot}
\begin{document}
\psset{xPlotpoints=50,yPlotpoints=50,hiddenLine=true,plotstyle=curve}
\infixtoRPN{1.5*cos(3*57.29578*t)}\edef\xComp{\RPN}
\infixtoRPN{1.5*sin(5*57.29578*t)}\edef\yComp{\RPN}
\infixtoRPN{0.5*sin(2*57.29578*t)}\edef\zComp{\RPN}
\begin{pspicture}(-2,-2)(2,2)
\parametricplotThreeD[linecolor=blue](-3.14159,3.14159)%
  {\xComp\space\yComp\space\zComp}
\end{pspicture}
\end{document}
```

PostScript に処理させるには、 \usepackage{pstricks-add} とプリアンブルに追加し、
algebraic オプションの値を true にします。

```
\documentclass{jarticle}
\usepackage{pstricks-add}
\begin{document}
\psset{plotstyle=curve,plotpoints=100}
\noindent\begin{pspicture*}(-2,-2)(2,6)
\psaxes[linewidth=1.2pt,labels=none,ticks=none]{->}(0,0)(-2,-2)(2,6)
\psplot[algebraic=true,linecolor=red]{-2}{2}{(x^2-x)*2^(x*(x+1))}
\end{pspicture*}
\end{document}
```

algebraic=true の時は、角度は弧度法で測ります。 \parametricplot では、
x 成分と y 成分は | で区切ります。

```
\documentclass{jarticle}
\usepackage{pstricks-add}
\begin{document}
\psset{plotstyle=curve,plotpoints=100}
\noindent\begin{pspicture*}(-1.25,-1.25)(1.25,1.25)
\parametricplot[algebraic=true,linecolor=red]{-3.14159}{3.14159}{cos(3*t)|sin(7*t)}
\end{pspicture*}
\end{document}
```

#### 例(1) {#vb5fe04c}

以下はごく簡単な例です。

```
\documentclass[svgnames]{minimal}
\usepackage{multido,pst-slpe,pst-eucl}
\pagestyle{empty}
\parindent=0pt
\psset{unit=0.35,linestyle=none,PointSymbol=none,PointName=none}
\psset{fillstyle=slope,slopebegin=SkyBlue,slopeend=Tomato}
\begin{document}
\begin{pspicture}(-12,-12)(12,12)
\rput(1,2){
\pstGeonode(0,0){O}(1;0){S_0}(1;120){S_1}(1;240){S_2}(1;0){S_3}
\pstGeonode(-3,0){X_0}
\pstTranslation[DistCoef=4]{S_1}{S_2}{X_0}[A_0]
\pstTranslation{O}{S_2}{A_0}[B_0]
\pstTranslation{S_1}{S_2}{B_0}[C_0]
\pstTranslation{O}{S_0}{C_0}[D_0]
\multido{\ia=0+1,\ib=1+1}{4}{
\pstRotation[RotAngle=120]{X_0}{A_\ia,B_\ia,C_\ia,D_\ia}[A_\ib,B_\ib,C_\ib,D_\ib]}
\multido{\ia=0+1,\ib=5+1}{10}{
\pstRotation[RotAngle=120]{O}{A_\ia,B_\ia,C_\ia,D_\ia}[A_\ib,B_\ib,C_\ib,D_\ib]}
\multido{\ia=0+1,\ib=1+1,\ic=2+1,\id=30+120}{3}{
\pspolygon[slopeangle=\id](A_\ic)(B_\ic)(C_\ib)(D_\ia)(C_\ia)(B_\ib)}
\multido{\ia=5+1,\ib=6+1,\ic=7+1,\id=150+120}{3}{
\pspolygon[slopeangle=\id](A_\ic)(B_\ic)(C_\ib)(D_\ia)(C_\ia)(B_\ib)}
\begin{psclip}{\pscustom[fillstyle=none]{\pscircle(0,0){16}
\pspolygon(D_2)(C_2)(D_1)(C_1)(D_0)(C_0)
\pspolygon(A_0)(A_1)(A_2)}}
\multido{\ia=10+1,\ib=11+1,\ic=12+1,\id=270+120}{3}{
\pspolygon[slopeangle=\id](A_\ic)(B_\ic)(C_\ib)(D_\ia)(C_\ia)(B_\ib)}
\end{psclip}}
\end{pspicture}\hfill
\psset{unit=0.75}
\begin{pspicture}(-16,-16)(16,16)
\rput(0,0){
\pstGeonode(0,0){O}(1;0){S_0}(1;120){S_1}(1;240){S_2}(1;0){S_3}
\pstTranslation[DistCoef=7.5]{S_1}{S_2}{O}[A_0]
\pstTranslation{O}{S_2}{A_0}[B_0]
\pstTranslation{S_1}{S_2}{B_0}[C_0]
\pstTranslation{O}{S_0}{C_0}[D_0]
\multido{\ia=0+1,\ib=1+1}{4}{%
\pstRotation[RotAngle=120]{O}{A_\ia,B_\ia,C_\ia,D_\ia}[A_\ib,B_\ib,C_\ib,D_\ib]}
\multido{\ia=0+1,\ib=5+1}{10}{%
\pstRotation[RotAngle=40]{O}{A_\ia,B_\ia,C_\ia,D_\ia}[A_\ib,B_\ib,C_\ib,D_\ib]}
\multido{\ia=0+1,\ib=1+1,\ic=2+1,\id=30+120}{3}{
\pspolygon[slopeangle=\id](A_\ic)(B_\ic)(C_\ib)(D_\ia)(C_\ia)(B_\ib)}
\multido{\ia=5+1,\ib=6+1,\ic=7+1,\id=70+120}{3}{
\pspolygon[slopeangle=\id](A_\ic)(B_\ic)(C_\ib)(D_\ia)(C_\ia)(B_\ib)}
\begin{psclip}{\pscustom[fillstyle=none]{\pscircle(0,0){20}
\pspolygon(D_2)(C_2)(D_1)(C_1)(D_0)(C_0)
\pspolygon(A_0)(A_1)(A_2)}}
\multido{\ia=10+1,\ib=11+1,\ic=12+1,\id=110+120}{3}{
\pspolygon[slopeangle=\id](A_\ic)(B_\ic)(C_\ib)(D_\ia)(C_\ia)(B_\ib)}
\end{psclip}}
\end{pspicture}
\end{document}
```

3-Brunnian link を 2 種類程、書いてみた物です。
左側の物は、所謂、ボロメオの輪 (Boromean rings) です。
既に説明したテクニック以外何も使っていないので、すぐに理解できると思います。

```
\documentclass[dvipsnames]{article}
\usepackage{geometry,pst-plot,pst-eucl}
\geometry{margin=0pt,paperwidth=10cm,paperheight=10cm}
\parindent=0pt\pagestyle{empty}
\begin{document}
\psset{unit=4cm,plotpoints=200}
\expandafter\def\csname T0\endcsname{1}
\expandafter\def\csname T1\endcsname{x}
\multido{\ia=0+1,\ib=1+1,\ic=2+1}{5}{%
\expandafter\xdef\csname T\ic\endcsname{2 x \csname T\ib\endcsname\space
  mul mul \csname T\ia\endcsname\space sub}
\begin{pspicture*}(-1.25,-1.25)(1.25,1.25)
%\rput[lt](-1.25,1.25){\ic 次のChebyshev多項式とその零点}
\psaxes{->}(0,0)(-1.25,-1.25)(1.25,1.25)
\pstGeonode[PointName=none,PointSymbol=none](0,0){O}(1,0){X}(0,1){Y}
\psplot[linecolor=red]{-1.25}{1.25}{\csname T\ic\endcsname}
\psset{PointSymbol=o}
\multido{\I=1+1}{\ic}{
  \pstInterFL[linecolor=red]{\csname T\ic\endcsname}{O}{X}%
    {2 \I\space 1 sub mul \ib\space div 1 sub}{C_\I}
  \pstTranslation[PointName=none,PointSymbol=none]{O}{Y}{C_\I}
  \pstLineAB[linecolor=yellow,linestyle=dashed,nodesepA=-1]{C_\I}{C_\I'}}
\pstCircleOA[linecolor=blue]{O}{Y}
\multido{\I=1+1}{\ic}{
  \pstInterLC[linecolor=blue]{C_\I}{C_\I'}{O}{Y}{D_\I}{E_\I}
  \pstLineAB[linecolor=yellow,linestyle=dotted]{O}{D_\I}
  \pstLineAB[linecolor=yellow,linestyle=dotted]{O}{E_\I}}
\end{pspicture*}\clearpage}
\end{document}
```

これは、次数の低い Chebyshev 多項式の零点を図示する物です。
まず、 Chebyshev 多項式を漸化式
#mimetex(T\_{0}(x)=1)
#mimetex(T\_{1}(x)=x)
#mimetex(T\_{n+2}(x)=2xT\_{n+1}(x)-T\_{n}(x))
で定義します。 {{< katex >}}T_{n}(x){{< /katex >}} をプロットし、 {{< katex >}}k=1,\ldots,n{{< /katex >}}
に対し、このグラフと x 軸の交点のうち、 {{< katex >}}x=\frac{2(k-1)}{n}-1{{< /katex >}}
の近傍にあるものを求め、 {{< katex >}}C_{k}{{< /katex >}} と名付けます。 {{< katex >}}n{{< /katex >}} が
小さければ、これで、すべての零点が、洩れも重複もなく、求まります。
{{< katex >}}n{{< /katex >}} が大きい時は、この場合、正確な値 {{< katex >}}-\cos\frac{(2k-1)\pi}{n}{{< /katex >}}
が分かっている訳ですから、それを第一近似として与えてやれば良いでしょう。
さて、 {{< katex >}}C_{k}{{< /katex >}} を y 軸方向に 1 平行移動した点を {{< katex >}}C^{\prime}_{k}{{< /katex >}}
と名付けます。原点を中心として半径 1 の円を描き、その円と直線
{{< katex >}}C_{k}C^{\prime}_{k}{{< /katex >}} の交点を {{< katex >}}D_{k}{{< /katex >}}, {{< katex >}}E_{k}{{< /katex >}} と名付けます。

#### 例(2) {#ye01953c}

PostScript は PDF や SVG と言った、静的なページ記述言語とは異なり、
動的なプログラミング言語です。これを TeX と組み合わせる事により、
数値計算などの、 TeX 自身の苦手な処理を担わせ、多彩なグラフィックを
その場で動的に生成する事ができます。
pst-text パッケージの pstextpath は、 PostScript 言語のテキスト描画ルーティンを
再実装して実現されていますし、既に見たように、 pst-eucl パッケージは
Newton-Raphson 法により、方程式の実数解の近似値を計算してくれます。

ここでは、 pstricks-add パッケージのダイナミックな側面を使った例を紹介します。

三体問題に於ける、 Lagrange の正三角形解をプロットしてみます。
質量 {{< katex >}}m_1{{< /katex >}}, {{< katex >}}m_2{{< /katex >}} , {{< katex >}}m_3{{< /katex >}} の質点 {{< katex >}}P_1{{< /katex >}}, 
{{< katex >}}P_2{{< /katex >}} , {{< katex >}}P_3{{< /katex >}} の重心を原点にとると、
#mimetex(|P_1-P_2|=|P_2-P_3|=|P_3-P_1|)
#mimetex(m_1P_1+m_2P_2+m_3P_3=\vec{0})
なので、簡単のために {{< katex >}}m_1+m_2+m_3=1{{< /katex >}} 、更に、質点
{{< katex >}}P_1{{< /katex >}}, {{< katex >}}P_2{{< /katex >}} , {{< katex >}}P_3{{< /katex >}} は反時計廻りに
配置されていると仮定し、まず、これを pst-eucl で作図してみます。

```
\documentclass[dvipsnames]{minimal}
\usepackage{pst-plot,pst-eucl}
\def\mass#1{\ifcase#1\or0.7\or0.2\or0.1\else\fi}
\begin{document}
\begin{pspicture}(-7,-7)(7,7)
\psaxes[labels=none,ticks=none]{->}(0,0)(-7,-7)(7,7)
\pstGeonode[PosAngle=225]{O}
\psset{PointSymbol=none,PointName=none}
\pstGeonode(3;-20){A}(3;100){B}(3;220){C}
\pstHomO[HomCoef=\mass{1}]{O}{A}
\pstHomO[HomCoef=\mass{2}]{O}{B}
\pstHomO[HomCoef=\mass{3}]{O}{C}
\pstCGravABC{A'}{B'}{C'}{G}
\psset{linestyle=dashed,linewidth=0.5pt,arrows=o-o}
\pstTranslation[DistCoef=3,PointName=default,PosAngle={0,0,-30}]{G}{O}{A,B,C}[P_1,P_2,P_3]
{\psset{DistCoef=\mass{1}}
  \pstTranslation{P_2}{P_1}{P_2}[P_21]\pstTranslation{P_3}{P_1}{P_3}[P_31]}
{\psset{DistCoef=\mass{2}}
  \pstTranslation{P_3}{P_2}{P_3}[P_32]\pstTranslation{P_1}{P_2}{P_1}[P_12]}
{\psset{DistCoef=\mass{3}}
  \pstTranslation{P_1}{P_3}{P_1}[P_13]\pstTranslation{P_2}{P_3}{P_2}[P_23]}
\pstLineAB{P_1}{P_2}
\pstLineAB{P_2}{P_3}
\pstLineAB{P_3}{P_1}
\psset{linestyle=solid,linewidth=2pt,linecolor=red,arrows=o->}
\pstLineAB{P_1}{P_12}\pstLineAB{P_1}{P_13}
\pstLineAB{P_2}{P_23}\pstLineAB{P_2}{P_21}
\pstLineAB{P_3}{P_31}\pstLineAB{P_3}{P_32}
\end{pspicture}
\end{document}
```

ここで、赤で描かれた矢印は、質点にかかる『力』ではなく、『加速度』に
比例した大きさになっています。
この図の設定と同じ初期値を用いて、いよいよ、軌道をプロットしてみます。
まず、記号 {{< katex >}}P_1{{< /katex >}}, {{< katex >}}P_2{{< /katex >}} , {{< katex >}}P_3{{< /katex >}} で各々の質点の
位置ベクトルも表す事にすると、
#mimetex(P_2=\frac{1}{2({m_2}^{2}+m_2m_3+{m_2}^{2})}\left(\begin{matrix}(m_3-m_1)(m_3-m_2)-m_1m_2&amp;-\sqrt{3}m_3\\\\\sqrt{3}m_3&amp;(m_3-m_1)(m_3-m_2)-m_1m_2\end{matrix}\right)P_1)
#mimetex(P_3=\frac{1}{2({m_2}^{2}+m_2m_3+{m_2}^{2})}\left(\begin{matrix}(m_2-m_3)(m_2-m_1)-m_3m_1&amp;\sqrt{3}m_2\\\\-\sqrt{3}m_2&amp;(m_2-m_3)(m_2-m_1)-m_3m_1\end{matrix}\right)P_1)
となり、質点 {{< katex >}}P_1{{< /katex >}} の運動方程式は、整理すると、
#mimetex(\frac{d^{2}}{dt^{2}}P_1=-\frac{({m_2}^{2}+m_2m_3+{m_2}^{2})^{3/2}}{|P_1|^{2}}P_1)
になります。高校生にも解ける(？)単純な方程式ですから、数値積分などしなくても、
プロットはできますが、ここでは、あえて、 PostScript に数値積分を計算させてみます。
そこで、従属変数のスタックには、順に {{< katex >}}x{{< /katex >}}, {{< katex >}}y{{< /katex >}}, {{< katex >}}\frac{dx}{dt}{{< /katex >}}, {{< katex >}}\frac{dy}{dt}{{< /katex >}} を積む事にします。
従属変数のスタックは PostScript 言語の記法では y (array) として、
algebraic な記法では y\[index\] として、アクセスするので、対応表を作ると、

<table>
<tbody>
<tr><td>スタック</td><td>変数</td><td>微係数</td></tr>
<tr><td>y[0]</td><td><code>x</code></td><td><code>x^\prime</code></td></tr>
<tr><td>y[1]</td><td><code>y</code></td><td><code>y^\prime</code></td></tr>
<tr><td>y[2]</td><td><code>x^\prime</code></td><td><code>-\frac{({m_2}^{2}+m_2m_3+{m_2}^{2})^{3/2}}{(x^{2}+y^{2})^{3/2}}x</code></td></tr>
<tr><td>y[3]</td><td><code>y^\prime</code></td><td><code>-\frac{({m_2}^{2}+m_2m_3+{m_2}^{2})^{3/2}}{(x^{2}+y^{2})^{3/2}}y</code></td></tr>
</tbody>
</table>

したがって、基本的にはマクロ

```
\def\f{\mass{2}^2+\mass{2}*\mass{3}+\mass{3}^2}
\psset{algebraic}
\psplotDiffEqn{t}{T}{境界値}{y[2]|y[3]|-(\f)^1.5*y[0]/(y[0]^2+y[1]^2)^1.5|-(\f)^1.5*y[1]/(y[0]^2+y[1]^2)^1.5}
```

で、区間 {{< katex >}}(t,T){{< /katex >}} の数値積分がプロットされる事になります。
algebraic は algebraic=true と同じ意味です。このマクロの最後の引数は、微係数のスタックです。
このままでは、独立変数が横軸 (abscissa) 、従属変数の最初のスタックが縦軸 (ordinate)
にプロットされてしまうので、オプションで、横軸と縦軸を指定します。
その際に、最も一般的な plotfuncx や plotfuncy を使うと、 algebraic 記法は
現状では使えないようです。

```
\documentclass[dvipsnames]{minimal}
\usepackage{pstricks-add,infix-RPN}
\def\mass#1{\ifcase#1\or0.7\or0.2\or0.1\else\fi}
\def\f{\mass{2}^2+\mass{2}*\mass{3}+\mass{3}^2}\infixtoRPN{\f}\edef\F{\RPN}
\infixtoRPN{((\mass{3}-\mass{1})*(\mass{3}-\mass{2})-3*\mass{1}*\mass{2})/(2*(\f))}\edef\XX{\RPN}
\infixtoRPN{sqrt(3)*\mass{3}/(2*(\f))}\edef\YY{\RPN}
\infixtoRPN{((\mass{2}-\mass{1})*(\mass{2}-\mass{3})-3*\mass{1}*\mass{3})/(2*(\f))}\edef\XXX{\RPN}
\infixtoRPN{0-sqrt(3)*\mass{2}/(2*(\f))}\edef\YYY{\RPN}
\def\xzero{\mass{1}*cos(-20)+\mass{2}*cos(100)+\mass{3}*cos(220)}
\def\yzero{\mass{1}*sin(-20)+\mass{2}*sin(100)+\mass{3}*sin(220)}
\infixtoRPN{3*(cos(-20)-(\xzero))}\edef\Xzero{\RPN}
\infixtoRPN{3*(sin(-20)-(\yzero))}\edef\Yzero{\RPN}
\infixtoRPN{3*(cos(100)-(\xzero))}\edef\XXzero{\RPN}
\infixtoRPN{3*(sin(100)-(\yzero))}\edef\YYzero{\RPN}
\infixtoRPN{3*(cos(220)-(\xzero))}\edef\XXXzero{\RPN}
\infixtoRPN{3*(sin(220)-(\yzero))}\edef\YYYzero{\RPN}
\def\boundaryC{\Xzero\space \Yzero\space -0.04 0.1}
\def\EqGrav{y[2]|y[3]|-(\f)^1.5*y[0]/(y[0]^2+y[1]^2)^1.5|-(\f)^1.5*y[1]/(y[0]^2+y[1]^2)^1.5}
\psset{algebraic,method=varrkiv,varsteptol=0.001,plotstyle=curve}
\begin{document}
\begin{pspicture}(-7,-7)(7,7)
\psaxes[labels=none,ticks=none]{->}(0,0)(-7,-7)(7,7)
\pspolygon[linestyle=dashed]%
  (!\Xzero\space\Yzero)(!\XXzero\space\YYzero)(!\XXXzero\space\YYYzero)
\psplotDiffEqn[whichabs=0,whichord=1,linecolor=red]{0}{50}{\boundaryC}{\EqGrav}
\psplotDiffEqn[%
  plotfuncx=y dup 0 get \XX\space mul exch 1 get \YY\space mul sub,%
  plotfuncy=dup 0 get \YY\space mul exch 1 get \XX\space mul add,%
  linecolor=green]{0}{50}{\boundaryC}{\EqGrav}
\psplotDiffEqn[%
  plotfuncx=y dup 0 get \XXX\space mul exch 1 get \YYY\space mul sub,%
  plotfuncy=dup 0 get \YYY\space mul exch 1 get \XXX\space mul add,%
  linecolor=blue]{0}{50}{\boundaryC}{\EqGrav}
\end{pspicture}
\end{document}
```

３つの楕円軌道(の一部)がプロットされる事を確かめて下さい。

以前から、 PostScript に通じた人々の間では、
[同じような試み](http://www.aihara.co.jp/~taiji/tex/index-j.html)も行われて
いましたが、 TeX マクロが整備され、特別な知識を持たなくても、
このようなことができるようになった意義は大きいと思います。

最後に山田 泰司さんが取り上げているのと同じ、 Duffing 方程式の解曲線を
プロットしてみます。

```
\documentclass[dvipsnames]{minimal}
\usepackage{pstricks-add}
\begin{document}
\psset{algebraic=true,plotstyle=curve,linewidth=0.5pt,yunit=0.5,plotpoints=1000}
\begin{pspicture}(-4,-8)(4,8)
\psaxes[labels=none,ticks=none]{|-|}(0,0)(-4,-8)(4,8)
\psplotDiffEqn[method=rk4,whichabs=0,whichord=1]{0}{99}%
  {3.5 0}{y[1]|-0.05*y[1]-y[0]^3+7.5*cos(x)}
\uput[-90](4,0){$4$}\uput[-90](-4,0){$-4$}
\uput[180](0,8){$8$}\uput[180](0,-8){$-8$}
\uput[90](4,0){$x$}\uput[0](0,8){$x'$}
\end{pspicture}
\end{document}
```

psplot の実装はおろか、 PostScript の知識が全く無くても、容易に書ける事が
わかります。ただし、ここでは、刻み幅をプロット区間の 1/1000 に固定して
いますので、このプロットはあまり正確な物ではありません。
このような場合は、 method=varrkiv として、 adaptive な数値積分を行った方が
よいでしょう。 <!-- いくらかでも、ましでしょう。 -->

### 実際に<em>使える</em>画像ファイルを作るには {#d57cdc19}

独立の EPS を作るためには，PSTricks の中の pst-eps
パッケージの PSTtoEPS という命令を使います。
ただし，これを使うと図中に文字を書き込む命令 \rput
などが使えなくなります。
文字を含む EPS を作るには，PSTtoEPS を使わず，
いったん dvi ファイルにしておいて，
dvips の -E オプションを使う方法しかないようです。
しかし，これではバウンディングボックス情報が正しく入らないため，
後で EPS ファイルを編集する必要があり，面倒です。

そこで PSTtoEPS や dvips の -E オプションを使わずに PSTricks の PDF 変換の
ためのマクロ pstpdfmx を作りました．目標は dvipdfm(x) を使って PSTricks の
図をPDFで取り込み，完全なPDFを作成することです．まずは『丸ごとパック [pstpsrc.tgz](/attach/PSTricks/pstpsrc.tgz)を
ダウンロードしてください (Unix 系 OS 専用です，要 bash/Make/gcc)．
これを使うとデバイスドライバに dvipdfm(x)を使って PSTricks のある程度のマクロを
使えるようになります．使い方はmakeするだけです．個別にPDFファイルを作成するには

```
./genpdf.sh filename
```

とします．

丸ごとパック [pstpsrc.tgz](/attach/PSTricks/pstpsrc.tgz)
: pstpdfmx, bbb, genpdf.sh 等がすべて含まれています．

pstpdfmx の解説 [pstpdfmx.pdf](/attach/PSTricks/pstpdfmx.pdf)
: pstpdfmx パッケージの説明書．

出力例 [p2p.pdf](/attach/PSTricks/p2p.pdf)
: 実際に pstpdfmx, genpdf.sh, bbb, Make を使って作成した PDF．

原稿中の PSTricks による図を一度別ファイル fig.tex に書き出し，そのファイルを
次のように処理します．

```
platex fig.tex
pdvips -Ppdf -o fig.ps fig.dvi
epstopdf fig.ps fig.pdf
gs -sDEVICE=pbm -fig.ps -sOutputFile=fig.pbm
bbb < fig.pbm > fib.bb
```

上記の作業 genpdf.sh が図の数だけ自動的に行います．そうすると正しいバウンディングボックス
情報 fig.bb と，PSTricks 画像から PDF に変換したファイル fig.pdf ができます．元原稿では
ファイル fig.pdf が存在する時だけ fig.pdf を読み込むようにしています．

上記の PDF を生成するスクリプトは genpdf.sh というファイルにまとめています．
すると完全な PDF ファイル file.pdf は次のように作ることになります．

```
platex file
./genpdf.sh file
platex file
dvipdfmx file
```

dvips にこのマクロを流用するには 1 行か 2 行の修正で済みます (デバイスドライバに
dvips を指定し， genpdf.sh の中で fig.ps の BoundingBox を awk/perl で
プログラム bbb が出力した正しいものに置換するだけです)．しかし、やはり大変面倒です． 
pdfLaTeX などが日本語化されれば pdftricks や ps4pdf などのパッケージが使える
ようになるでしょう．いずれにしても pdfTeX/pdfLaTeX で日本語が使
えるようになるまでは，このような面倒な処理が必要になると思います．

### 実際に<em>使える</em>画像ファイルを作るには (別解) {#cddb53cd}

gs/gs\[VER\]/lib/ps2epsi.bat を使うことで，かなりよい BoundingBox を得ることができるように思います．

```
#!/usr/bin/ruby -w
open(ARGV[0],"r").each_line{|line|;if line =~ /%%BoundingBox/; print line; break; end;}
```

のような ruby のスクリプト (perl でも何でもいいと思うけど) bb (パーミッションにフラグ x を立てておく) と，

```
IMGSRCS = fig.tex
TEX    = platex
DVIPS  = dvips
PS2EPS = ps2epsi.bat
PS2PDF = epstopdf -d --nogs
BB     = ./bb
all    : $(IMGSRCS:.tex=.pdf) $(IMGSRCS:.tex=.bb) $(IMGSRCS:.tex=.eps)
.tex.dvi:
	$(TEX) $<

.dvi.pdf:
	$(DVIPS) -Ppdf -z $<
	$(PS2EPS) $*.ps $*.eps
	$(PS2PDF) --outfile=$*.pdf $*.eps

.pdf.bb:
	$(BB) $*.pdf > $*.bb

.dvi.eps:
	$(DVIPS) -D600 -z $<
	$(PS2EPS) $*.ps $*.eps
```

のような Makefile を作れば，make を実行することでまともな BoundingBox を持った (表した) fig.pdf, fig.bb, fig.eps を得ることができるように思います．\[<strong>追記</strong>: <em>しかし，これでも少し小さめに BoundingBox が測られるように思います．GSView の \[File\] -> \[PS to EPS\] で変換したときくらいの BoundingBox を持った矩形を切り出したいのですが，手作業をいれずにできる方法を誰かご存じないでしょうか？</em>\]

強引に，でもよければ，ghostscript を用いて BoundingBox を得て，それを eps ファイルに入れ込むシェルスクリプトを [ここ](http://www.misojiro.t.u-tokyo.ac.jp/suribt/#tips_boundingbox) に載せましたので，どうぞ．

### 実際に<em>使える</em>画像ファイルを作るには (別解2) {#r5c8eeee}

[epstool](http://www.cs.wisc.edu/~ghost/gsview/epstool.htm) を使うと，
よい BoundingBox を得ることができます．
PSTricks で描く図だけを別ファイル foo.tex に保存して，

```
$ (p)latex foo
$ (p)dvips -E foo
$ epstool --copy --bbox foo.ps foo.eps
```

などとします．さらに

```
$ epstopdf foo.eps foo.pdf
$ ebb foo.pdf
```

としておけば，pdflatex, dvipdfmx, dvips などいろいろなドライバで共通に使える画像
セットになります．

[Herbert Voss 2006-10-10 の文書](http://www.perce.de/LaTeX/misc/PST2PDF) でも epstopdf を使っているみたいです． <!-- 上に例で挙げた Chebyshev 多項式の零点の図のように、ソースにサイズを --> <!-- 書き込んでしまうのでは、解答になりませんか？ --> <!-- // pspicture 環境の (x,y)(X,Y) でですか? --> <!-- // その指定では，その枠内ぴったりに図を描くようにがんばらないといけませんよね？ --> <!-- // アルファベットの `O' 1 文字だけを描いた図でもそれをやろうとすると， --> <!-- // 文字の太さとかを考えないと，きちんと BoundingBox の中にぴったり収めることは --> <!-- // 神技に近いです．BoundingBox は，図を描くときに手で指定するのではなく， --> <!-- // できあがった図から事後処理で補正できる方が reasonable だと思います． -->

### LaTeXDraw {#r4f44c9b}

[LaTeXDraw](http://latexdraw.sourceforge.net/) は GNU GPL ライセンスのフリーの PSTricks コードジェネレータ もしくは PSTricks エディタです。

[LaTeXDraw](http://latexdraw.sourceforge.net/) は Java で書かれており、さまざまな OS で動作します。

### 関連リンク {#y60e05bb}

- [PSTricks で図を作成](http://rexpit.blog29.fc2.com/blog-entry-67.html)
- [PSTricksパッケージ](http://www.cityfujisawa.ne.jp/~huzinami/tex/g-pack2.html)

## コメント {#j6e07b43}

<!-- 質問です。 -->
<!-- latex->dvips->ps2pdf (Ghostscript 7.07) で処理した PSTricks を含むソースで、 -->
<!-- psdot で出力される dot が、ビットマップ展開されてしまうのはなぜでしょうか？ -->
<!-- 回避する方法を御存じないでしょうか？ -->
<!-- // Ghostscript のバージョンの問題ではないですか？ -->
<!-- // 8.14, 8.15, 8.50 を試してみましたが、いずれも、スケーラブルなグラフィックに -->
<!-- // 展開されます。 -->
<!-- // 念のため。申し上げると、 dot は PS ファイル中では Type3 フォントです。 -->
<!-- コメント部分にもかかわらず、ご返答ありがとうございます。 -->
<!-- 前半部分に関してかなりショックです。 -->
<!-- 後半部分は知っていましたが、ビットに切って、ビットマップに展開した荒い -->
<!-- 文字列 (Type 3 の Helvatica?) を並べて表現しているのに比べると、スケーラブル -->
<!-- であることの魅力は代えがたいです。 -->
<!-- Ghostscript のヴァージョン問題、うーむ、困りました。 -->
<!-- 2006-12-29 (金) 00:33:23 追記: 8.54-gpl をコンパイルし、この下でスケーラブルなグラフィックに -->
<!--                      なっていることを確認しました。 -->

#COMMENT
