---
title: "TikZ"
url: "/TikZ/"
date: 2013-08-13T16:01:46Z
pukiwiki: "TikZ"
---

# TikZ

## [TikZ &amp; PGF](http://pgf.sourceforge.net/) {#w315bc8f}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## はじめに {#aacc19e6}

PGF (Portable Graphics Format) は、Till Tantau（Beamerのオリジナルの開発者） および Mark Wibrow, Christian Feuers&auml;nger を中心として開発されているTeX用の描画パッケージです。<br>
PGF のフロントエンドとして一般的には TikZ (TikZ ist kein Zeichenprogramm = "TikZ is not a drawing program") を使用します。<br>
Beamer が基礎としている描画エンジンもPGFです。<br>

また、R や gnuplot と連携させて描画させることもできます。<br>

PGF/TikZ が提供する tikzpicture 環境は、LaTeX 標準の picture 環境と同様に TeX 文書中に描画コマンドを直接書き込むものですが、かなり高度な描画機能を持っています。（→図版の例は[こちら](http://www.texample.net/tikz/)を参照。）<br>
PGF/TikZ 自身が持っているライブラリで機能が拡充されるほか、PGF/TikZ を利用し、拡張するパッケージも数多く作られています。<br>
PGF/TikZ を利用するパッケージには PGFPlots, TikZ-dependency, tkz-euclide などがあります。<br>
同じく高度な描画機能を持っている [PSTricks](/PSTricks/) との大きな違いは、PostScript (PS) を経由せずに PDF を作成できる点です。<br>

PGF/TikZ は LaTeX だけでなく、plain TeX と ConTeXt にも対応していますが、以下は、LaTeX の場合について記述します。<br>

- [TikZ/PGF - Graphic systems for TeX](http://pgf.sourceforge.net/)
- [PGF and TikZ -- Graphic systems for TeX](http://sourceforge.net/projects/pgf/)
    <!-- -http://pgf.cvs.sourceforge.net/viewvc/pgf/?view=tar -->

- [http://www.ctan.org/pkg/pgf](http://www.ctan.org/pkg/pgf)
- [CTAN:help/Catalogue/entries/pgf.html](https://mirror.ctan.org/help/Catalogue/entries/pgf.html)
    - [e-TeX](/e-TeX/) 拡張が必要です． ([qa:53665](https://okumuralab.org/~okumura/texfaq/qa/53665.html), [qa:53666](https://okumuralab.org/~okumura/texfaq/qa/53666.html), [qa:53672](https://okumuralab.org/~okumura/texfaq/qa/53672.html))
    - [TeX Live](</TeX Live/>) 2014 以降, [W32TeX](/W32TeX/)であれば動作に問題はありません。
        <!-- -[[Altermundus tkz-base:http://altermundus.com/pages/builds/]] -->
        <!-- - -[[ChangeLog:http://altermundus.com/pages/builds/pgf_2.10-CVS.ChangeLog]] -->

### ChangeLog {#off3b30e}

- [http://pgf.sourceforge.net/pgf_CVS.ChangeLog](http://pgf.sourceforge.net/pgf_CVS.ChangeLog)

### 初期設定 {#e634a5d8}

dviware の指定をしてから、tikz パッケージを読み込みます。<br>
dvipdfmx を使用する場合は次のように設定します。<br>

```
\documentclass[uplatex,dvipdfmx]{jsarticle}
```

dvipdfmx をグローバル指定すると都合が悪い場合は、graphicx パッケージのオプションが PGF に自動的に適用されますので以下のように指定します（pgf自身、graphicx を読み込みます）。<br>

```
\usepackage[dvipdfmx]{graphicx}%
%\def\pgfsysdriver{pgfsys-dvipdfmx.def}%（graphicx パッケージを使用しない場合はこの行を有効に）
\usepackage{tikz}%（これで、pgf と pgffor も読み込まれます。）
```

PGF は dvips, dvipdfmx, dvisvgm, pdfTeX, LuaTeX, XeTeX などをサポートしています。<br>
なお、PGF の機能を 100% サポートしているのは LuaTeX (pdfTeX) ですが、最近のバージョンでは dvipdfmx でもほぼすべての機能が使えます。（[Troubleshootingを参照](#i0cba852)）<br>

<br>

graphicx を使用しない場合は、以下のいずれかを tikz（またはpgf）パッケージを読み込む前に記述します。<br>

```
\def\pgfsysdriver{pgfsys-dvipdfmx.def}%dvipdfmxの場合
\def\pgfsysdriver{pgfsys-dvips.def}%dvipsの場合
\def\pgfsysdriver{pgfsys-dvisvgm.def}%dvisvgmの場合
\def\pgfsysdriver{pgfsys-pdftex.def}%pdfTeX, LuaTeX, LuaJITTeXの場合．最も高機能
\def\pgfsysdriver{pgfsys-xetex.def}%XeTeXの場合
```

その他の出力形式については、付属のマニュアルを参照してください。<br>

### マニュアルについて {#x910ebfe}

PGF/TikZには

- 1165ページの長大なマニュアル (ver 3.0.0 の場合)

が付属しています．<br>
PGF/TikZ のマニュアルはコマンドラインから

```
texdoc tikz
```

を実行することで表示できます．<br>
マニュアルの前半には 70 ページにも及ぶチュートリアルがあるので、学習を始めるのは比較的容易です。<br>
ところが、示されているコードには必要なライブラリの読み込み指示が徹底されていないなどの不備があり、マニュアルにある例をコピー＆ペーストしてもエラーが出て動作しないことがあります。<br>
たとえば、チュートリアルの

- p.39 (ver 3.0.0 の場合)

にある「パスの交錯」のセクションでは、説明の本文には「intersections ライブラリ」について言及されているものの、例にはその設定が記述されていないため、そのままではエラーが出ます。<br>
プリアンブルに

```
\usetikzlibrary{intersections}
```

と設定しておく必要があります。<br>

<!-- ver 3.0.0 からは examplefill という色は用いられなくなりましたので、以下の記述は obsolete です。 -->
<!-- また、初期設定では examplefill という色は定義されていません。~ -->
<!-- マニュアルの例をそのまま写して試したい場合は、以下をプリアンブルにあらかじめ定義しておいた方がよいでしょう。~ -->
<!-- \colorlet{examplefill}{yellow!80!black}（プリアンブルでも本文の中でも環境中でもかまいません） -->

仕様の改訂とともにマニュアルはアップデートされていますが、前半のチュートリアルなどには以前の仕様の書式が用いられていることがあります。（たとえば円を描く書式。）

## 基本的な用法 {#qa925ba8}

### 基本的な使い方 {#oee3a550}

インライン形式で図を本文の一部に入れるときは

```
\tikz 1行コマンド;
```

とします。<br>
コマンドの終了は「;」（セミコロン）です。<br>

独立した環境の中に複雑な（複数の）コマンドを記す場合は

```
\begin{tikzpicture}[環境オプション]
　　コマンド;
　　コマンド;
…;
\end{tikzpicture}
```

とします。<br>
各コマンドは「;」（セミコロン）で終了します。<br>

- コマンドの書式
    - コマンド中の空白（半角スペース）は無視される
    - 各コマンドのオプションは <strong>\[オプション\]</strong> で示し、複数のオプションはコンマで区切る
    - オプションはコマンドのどこにおいてもよく、矛盾するオプションは最後のものが有効になる
    - 「%」以降はコメントと見なされる
- scopeの設定
    - tikzpicture環境の中で、<strong>\begin{scope}…\end{scope}</strong>で挟むとlocalな環境を作る
    - scopeの中で設定したオプションは、scopeの外の環境に影響を及ぼさない
- 座標指定の基礎
    - <strong>(x,y)</strong> とすると、xy平面（デカルト平面）上の座標を表す（基本単位は1cm）
    - <strong>(θ:r)</strong> とすると極座標（円座標）形式の座標表示となり、θが偏角（右方向が0で、-360から720まで）で r が原点（基準点）からの距離を示す（基本単位は1cm）
- 線画の指定…\draw と \fill の基本

<table>
<tbody>
<tr><td> コマンド</td><td> 正式名 </td><td colspan="2"> 機能やオプション</td></tr>
<tr><td> \draw </td><td> \path[draw] </td><td colspan="2">線を描く（線の太さ ultra thin (0.1pt) 〜 ultra thick (1.6pt)、色指定も可能）</td></tr>
<tr><td> \draw[-&gt;]</td><td>\path[draw, -&gt;]</td><td>終点／始点／両端に矢印、二重矢印、latex風矢印、ステルス機風矢印</td><td><strong>[-&gt;]</strong>／<strong>[&lt;-]</strong>／<strong>[&lt;-&gt;]</strong>／<strong>[-&gt;&gt;]</strong>／<strong>[&gt;=latex]</strong>／<strong>[&gt;=stealth]</strong></td></tr>
<tr><td> \fill </td><td> \path[fill] </td><td> 描かれた図形の内側を塗る（色・透明度の指定も可能）  </td><td><strong>例：[red, opacity=.5]</strong> </td></tr>
<tr><td> \filldraw </td><td> \path[fill, draw] </td><td> パス自身の色と内側の色をそれぞれ別に指定する </td><td> <strong>例：[fill=cyan, draw=blue]</strong> </td></tr>
</tbody>
</table>

- 描画順
    - 記述された順番に描画される
- 環境オプション
    - 座標系を p 倍に拡大縮小するときは \[scale = p\] とする。縦横の縮小率をそれぞれ指定するときは \[xscale = p, yscale = q\] とする。<br>
        このとき拡大縮小されるのは座標系だけで、<strong>線の太さや文字の大きさは変化しない</strong>
    - 文字や線の太さも含めて拡大縮小したいときは transform shape を追加して \[scale = p, transform shape\] とすればよいが、すべての要素が適切に拡大縮小されるとは限らない（tikz の作者は画像の拡大縮小は推奨していない）
        - tikzpicture 環境全体を拡大縮小する別の方法として、全体を \scalebox で囲うやり方もある（縦の倍率は省略可能）

            ```
            \scalebox{横の倍率}[縦の倍率]{\begin{tikzpicture}...\end{tikzpicture} }  
            ```

### PGF/TikZの拡張 {#i2fd58ae}

#### ライブラリの読み込み {#p4b035b0}

PGF/TIkZ は初期設定の段階でも高い描画力がありますが、付属のライブラリを読み込むことでさらに多彩な表現力を得ます。<br>
ライブラリには、たとえば背景パターンを塗る patterns、交点を求める intersections、座標計算をする calc、矢印の種類を増やす arrows、パスを飾る decorations、角度記号を描く angles などがあります。<br>
ライブラリを用いるときは、tikzパッケージを読み込んだ後で<br>

```
\usetikzlibrary{intersections, calc}
```

などとします。<br>

#### 色指定の方法 {#s90394a7}

pgfパッケージは内部で[xcolor](http://www.ring.gr.jp/pub/text/CTAN/help/Catalogue/entries/xcolor.html)パッケージを読み込みますので、以下の色名が使用可能です。

red、green、blue、cyan、magenta、yellow、black、gray、white、darkgray、lightgray、brown、lime、olive、orange、pink、purple、teal、violet

PGF/TikZでの色指定は基本的にxcolorの形式を踏襲しますので、色指定の際に複数の色をブレンドしたものを使用することができます。<br>
たとえば、red!30!gray は「30%の red＋70%の gray」の意味します。<br>
単に red!30 とした場合は、white とのブレンドと解釈されます。<br>
3色以上のブレンドも可能です。<br>

新しい色を新規に定義するときは、以下の書式で定義します。（pgfとは独立したxcolorパッケージに基づくので、tikzpicture環境以外でも使用可能です。）

```
\colorlet{NewColor}{red!30!gray}
```

デフォルトで使える色名は19色ですが、dvipsnames オプションを用いると使える色名が68色増えます。（svgnamesオプションを用いると色名が151色、x11namesを用いると色名が317色増えます。詳細はxcolorのマニュアルを参照してください。）<br>
このオプションを使用したい場合は、xcolorパッケージをオプションつきで読み込むか、あるいはプリアンブルに以下を記述します。<br>

```
\PassOptionsToPackage{dvipsnames}{xcolor}%tikzパッケージよりも前に読み込みます。
```

### 簡単な図形描画の例 {#c4bd1edb}

```
\documentclass[uplatex]{jsarticle}
\usepackage[dvipdfmx]{graphicx}
% \def\pgfsysdriver{pgfsys-dvipdfmx.def}%(graphicxパッケージを使用しない場合)
\usepackage[dvipdfmx,svgnames]{xcolor}%tikzパッケージよりも前に読み込みます。
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}
\draw [help lines] (0,0) grid (10,4);%(0,0)から(10,4)までの"細線の方眼"

```

%%直線の例

```
\draw (0,0) -- (2,1)  [rounded corners]--(2,2) -- (0,2) [sharp corners] --  (0,1)-- (1,1);
%点(0,0), (2,1), (2,2), (0,2), (0,1), (1,1)を結ぶ"線分"で、(2,2)と(0,2)では"滑らか"
\draw [orange, thick] (1,2.5) -- ++(35:2cm);
%(1,2.5)を始点として35°の方向に2cmの"オレンジ色の太い線分"
\draw [very thick] (0,3) rectangle (1.5,4);
%(0,3)を左下、(1.5,4)を右上とする"極太の長方形"
\draw (1.5,0) -| (2.5,1.5);
%(2,0)と(3,1.5)をまっすぐ結ばずに"横線と縦線のみで結ぶ"
```

%%円、楕円、扇形

```
\draw [red, thick] (3,3) circle (1);
%(3,3)を中心とする半径1の"赤い太線の円"（古い書式で、現在は非推奨）
\fill [green!80] (4,3) circle [x radius=1cm, y radius=5mm, rotate=30];
%中心(4,3)、横1cm、縦5mmの"楕円を30°傾け緑80%で塗った図形"（推奨されている新しい円の書式）
\filldraw [fill=blue, opacity=.5, draw=Indigo] (5,0)  arc (0:45:2) --(3,0)--cycle;
%(5,0)を出発点に半径2の弧を0°から45°まで描き、(3,0)を経由して出発点まで線分で戻って囲んだ"透明度50%の青で塗った扇形"
```

%%放物線、サインカーブ、曲線、ベジェ曲線

```
\draw (5,4) parabola bend (7,2) (8,4);
%(5,4)を始点とし(7,2)を頂点とする放物線と(7,2)を頂点とし(8,4)を終点とする"放物線"
\draw [thick] (5,1) sin (6,2) cos (7,1) sin (8,0) cos (9,1);
%(5,1)から始まり、(6,2)、(8,0)を頂点として(9,1)で終わる"太線のサインカーブ"
\draw [purple, thick] (6,3) to [out=75, in=90] (8,2);
%(6,3)から75°の角度で出発し、90°の角度で終点(8,3)に至る"紫の太い曲線"
\draw [ultra thick] (8,1) .. controls (10,2) and (10,3.5) ..(9,4);
	%始点(8,1)、終点(9,4)で方向点がそれぞれ(10,2)と(10,3)である"超極太の3次ベジェ曲線"
\draw [->, very thin]	(8,1) -- (10,2); \draw[<-, very thin] (10,3.5) -- (9,4);
%上のベジェ曲線の"→つき方向線を示した細線"
\end{tikzpicture}
\end{document}
```

なお、長さの基本単位はデフォルトでは「cm」と見なされます。

上の例の各図形の書式についての簡単な説明（( )とあるのは座標表示、\[ \]とあるのはオプション）

1. 方眼の書式
    - <strong>方眼</strong>は \draw (左下隅) grid (右上隅);
        - オプションの<strong>\[help lines\]</strong>によって、方眼がグレーの細線になる
        - さらに\[step = 5mm\]などとして方眼の間隔を設定できる（デフォルトでは1cm）
1. 直線の書式
    - <strong>線分</strong>は \draw (始点) -- (中間点) … -- (終点);
        - 点と点のあいだの<strong>--</strong>は「ハイフン2個」
        - パスを閉じるときは最後に <strong>-- cycle</strong> をつける（このオプションで始点に戻ることになる）
        - 滑らかな角にするにはその手前で <strong>\[rounded corners\] --</strong> とする
        - 再び直線的な角にするにはその手前で <strong>\[sharp corners\] --</strong> とする
        - (終点) の座標を<strong>極座標形式 (角度:長さ)</strong>で表現することもでき、<strong>++</strong>をつければ始点からの相対座標となる（なければ絶対座標）
    - <strong>長方形</strong>は \draw (左下隅) rectangle (右上隅);
    - <strong>タテ・ヨコだけで結ぶ線</strong>は \draw (始点) <strong>|-</strong> (終点); または \draw (始点) <strong>-|</strong> (終点);
        - "--"が (始点) と (終点) をまっすぐに結ぶのに対し、<strong>|-</strong>は「始めにタテ、次にヨコ」で2点を結び、<strong>-|</strong>は「始めにヨコ、次にタテ」で2点を結ぶ
1. 円、楕円、弧（扇形）の書式
    - <strong>円</strong>は \draw (中心) circle \[radius=r\];
        - 古い仕様では、半径を(r)とつけることになっていたが、可読性の観点から座標以外を( )で囲むことは現在は推奨されていない
        - 座標上の「点」を黒丸で示すときには旧形式の表記がよく用いられる（\fill (中心) circle (2pt);）
    - <strong>楕円</strong>は \draw (中心) circle \[x radius = x方向の径, y radius = y方向の径, rotate = 回転角\];
        - 回転角はラジアン（弧度法）ではなく、<strong>度数法</strong>（1回転が360度となるもの）で表す
    - <strong>弧</strong>は \draw (始点) arc \[start angle = 始点の角度, end angle = 終点の角度, radius = 半径\];
        - 角度はラジアン（弧度法）ではなく、<strong>度数法</strong>（1回転が360度となるもの）で表す
        - 略式では \draw (始点) arc (始点の角度:終点の角度:半径); とすることもできる
        - 始点の角度または終点の角度の一方の代わりに <strong>delta angle = 中心角</strong> を設定することもできる
        - <strong>radius</strong> の代わりに <strong>x radius</strong> と <strong>y radius</strong> に異なった長さを設定すれば楕円の弧の一部になる
1. 放物線、サインカーブ、曲線、ベジェ曲線の書式
    - <strong>放物線</strong>は \draw (始点) parabola bend (頂点) (終点);
        - ただし、上の式は<strong>「始点から頂点までの放物線」</strong>と<strong>「頂点から終点までの放物線」</strong>を表し、必ずしも3点を通る1つの放物線になるとは限らない（同一放物線にするには、適切な座標を記述者自身が与えなくてはならない）
        - \draw (始点) parabola (終点); と2点のみを与えた場合は始点が頂点、\draw (始点) parabola \[bend at end\] (終点)とした場合は終点が頂点になる
        - \draw (始点) parabola \[parabola height = 高さ\] +(幅,0);
    - <strong>サインカーブ</strong>は \draw (始点) sin (頂点); または \draw (頂点) cos (終点);
        - <strong>sin</strong>を用いれば「原点から頂点まで」の1/4周期を描き、<strong>cos</strong>を用いれば「頂点から原点まで」の1/4周期を描く（いずれも\[0, π/2\]の範囲ということ）
        - 三角関数の1周期分を記述するには、sin と cos を適切に組み合わせる
        - sin および cos で描かれるのは三角関数の1/4周期分のみ
    - 曲線として \draw (始点) to \[out = 始点から出る角度, in = 終点に入る角度\] (終点);
        - 2点の「出」と「入り」の角度を指定し、滑らかな曲線でつなぐ
        - \[out = ○, in = ○\] というオプションがなければ、上式は \draw (始点) -- (終点); に等しい
    - <strong>ベジェ曲線</strong>は \draw (始点) .. controls (方向点1) and (方向点2) .. (終点);
        - 3次のベジェ曲線になる
        - 方向点2を省略すると、方向点2と終点が一致していると見なされて描画される

### スタイルの設定 {#vc8500e0}

同じオプションを繰り返し用いたい場合、自分でスタイルを定義することができます。globalに用いたい場合は、プリアンブルでスタイル名を定義します。<br>

```
\tikzset{ スタイル名/ .style={各種オプションの設定}}
```

環境の中でのみ用いる場合は、環境の冒頭で以下のように定義します。<br>

```
[ スタイル名/ .style={各種オプションの設定}]
```

複数のスタイルを定義する場合は、1つの\[  \]の中で、各スタイルを「,」（コンマ）で区切って定義します。

デフォルト値を設定した上で、パラメーターを用いてその都度変えられるようにも設定できます。<br>

```
\begin{tikzpicture}
[new grid/.style ={help lines,color=#1!50},%パラメーター#1を設定
new grid/.default=blue]%パラメーターのデフォルト値
\draw[new grid] (0,0) grid (1.5,2);%青50%の方眼（デフォルト値）
\draw[new grid=red] (2,0) grid (3.5,2);%赤50%の方眼
\end{tikzpicture}
```

<!-- every node/ .styleなど -->

### 点、そして交点の設定 {#e28f8154}

#### 点や線の「設定」「命名」「ラベル」 {#m96085cf}

点（ノード）に名前を付け、ラベルを設定することができます。<br>
\coordinate は \path coordinate の短縮形で、\node は \path node の短縮形です。<br>
点を設定するだけのときは以下のように用います。(点の名前) や (座標) の順番は問いません。<br>

```
\coordinate (点の名前) at (座標); 
\node [オプション] (点の名前) at (座標) {ラベル}; %すでに設定された点の名前を(座標)の位置に置くことができます
```

\draw や \fill など、パスを描いている途中で点やラベルを設定するときは、「\」から「;」までのあいだに coordinate または node を記述します。（このとき「\」を改めてつける必要はありません。） (座標) は node が設定された時点での座標が自動的に適用され、「at (座標)」は省略できます。

coordinate は座標を設定するだけですが、node は設定した座標にラベルを設定します。node が設定するラベルはデフォルトでは (座標) の真上に置かれますが、オプションで「少しずらす」ことができます。above, below, right, left が使用可能で、below=2mm などと細かく指定することもできます。

node はそれ自体に大きさがあり、色や形も指定できます。
\node に位置をずらすオプションをつけると、指定された座標には node の端点が置かれることになり、node 自体の座標は \coordinate で座標を指定した場合とは少しズレます。
なお、coordinate とは実際には「大きさゼロでラベルが空白の node」のことです。

#### node の主なオプション {#p650e55b}

\[オプション\] をつける位置は、パスの中では自由です

- 位置（2種類の指定方法）
    - above, below, right, left および above left のように「上下」＋「左右」を組み合わせたもの
        - 設定された (座標) に対して、<strong>node（ラベル）がどの位置に置かれるか</strong>を示す
    - \[anchor=north\] など 東西南北および north westのように「north/south」＋「east/west」を組み合わせたもの
        - \[anchor=東西南北\] で指定された方向の <strong>node の端点が指定された (座標) に置かれる</strong>
- 形状
    - circle, rectangle, coordinate の3種が設定可能（デフォルトは rectangle、ライブラリで拡張可能）
    - \[draw\] をつけると輪郭が描かれる
    - \[inner sep=○\] で node 内のラベルと外枠とのあいだの距離を設定（デフォルトは.3333em）
        - node 自体に大きさがあるため、node を端点とした線は <strong>node の輪郭まで</strong>となる
- 色指定
    - \[(color=)色指定\] でノード全体の色を設定（デフォルトでは先に指定された色指定を引き継ぐ）
    - \[text=色指定\] でテキストの色だけを指定することができる
    - \[fill=色指定\] で node 内を塗ることができる
- ラベル
    - \[label=位置:ラベル\] はラベル専用のノードを指定の位置（上下左右、東西南北、角度のいずれか）に設定する
        - \usetikzlibrary{quotes}を用いると簡略化して \["ラベル"\] と指定できる（3.0.0からの新機能）
    - このオプションを用いることで、ノードを指定座標に置きつつラベルをずらして配置できる
    - \[pin=位置:ラベル\] は、ノードとラベルのあいだを線で結ぶ（線の太さはデフォルトではhelp line）
- パス上に位置指定
    - \[pos=○\] （○は0〜1までの数字）を指定するとパスの端点ではなく、パス上の相対的な位置にノードを設定する
    - \[midway\] とすると \[pos=0.5\] と同じ意味になる。その他のオプションとして、at start/end, near start/end, very near start/end を指定することもできる。（それぞれ pos=0/1, 0.25/0.75, 0.125/0.875 を表す。）
- ラベルの向き
    - \[sloped\] とすると、パスにそって文字が配置される

```
\begin{tikzpicture}
\draw [help lines] (0,0) grid (3.5,2.5);%(0,0)から(3.5,2.5)までの"細線の方眼"
\coordinate (O) at (0,0) node at (O) [left] {$O$}; %(0,0)に点Oを設定し、その左に$O$と記載する
\coordinate (A) at (1,2); %(1,2)に点Aを設定する
\node (B) at (2,2) [above] {$B$} ; %(2,2) の上方にノードBを設定し、$B$と記載する
\node (C) [fill=white, draw, text=red, circle] at (3,2) {C}; %(2,2)に白塗りした円形のノードCを設定する

\coordinate (D) at (3,1) node at (D) [label=right:Dの右横] {};
	%(D)には「大きさ」がなく、その位置に無名のノードが置かれ、右にラベルがある
%\node (D) at (3,1) [label=right:Dの右横] {};
	%(D)には「大きさ」をもった無名のノードがおかれ、その右にラベルがある
\fill (O) circle (2pt) (A) circle (2pt) (D) circle (2pt); %点O,A, Dに黒丸をつける（1つの\fillで複数の点を対象にできる）

\draw (O) -- (A) node [above] {$A$}; %線分OAを描き、その上方にノードを設定して$A$と記載する（ノード自体は無名）
\draw [->] (O)--(B); %矢印OBを描く（Bが(2,2)の上方にあること、ノードBに大きさがあることに注目）
\draw [->] (O)--(C); %矢印OCを描く（矢印はノードCの輪郭まで）
\draw (O)--(D);%(D)の設定を\coordinateでしたか\nodeでしているかで線の長さが異なる
\end{tikzpicture}
```

<!-- +, ++について -->

#### 直行する2つの直線の交点 {#o7fb6e19}

2点P、Qがあるとして、Pを通る垂直な線とQを通る水平な線との交点は<br>

```
((Pの座標) |- (Qの座標))
```

で示されます。<br>
同様に、Pを通る水平な線とQを通る垂直な線との交点は<br>

```
((Pの座標) -| (Qの座標))
```

となります。

```
\begin{tikzpicture}
\draw [help lines] (0,0) grid (4.5,3.5);%(0,0)から(4.5,3.5)までの"細線の方眼"
\coordinate (O) at (0,0) node [below] at (O) {O};
\coordinate (A) at (3,0) node [below]at (A) {A};
\coordinate (B) at (1,2) node [above right] at (B) {B};
```

```
\fill [red] (A -| B) circle (2pt) node [above] {A{\verb\-|\}Bの点};
\fill [blue] (A |- B) circle (2pt) node [above] {A{\verb\|-\}Bの点};
\fill (O) circle (2pt);
\fill (A) circle (2pt);
\fill (B) circle (2pt);
\end{tikzpicture}
```

#### 任意のパスの交点 {#a5e018c3}

intersectionsライブラリを読み込んでおく必要があります。<br>
ライブラリの読み込みは、tikzパッケージを読み込んだ後で<br>

```
\usetikzlibrary{intersections}
```

とします。

\[name path=○○\]で2つの図形に名前を付け、\[name intersections={of=○○ and ○○}\]で交点を設定します。<br>
交点の名前は、デフォルトでは intersection-n（n は1,2,3,…）という名前が順に付けられますが、name intersections オプションに by={○,□,…} とリストを与えて設定することもできます。（交点の総数はオプションで得られるので、後述のforeachと組み合わせて全交点にそれぞれラベルを付けることもできます。マニュアル参照。）

以下の1つ目の例では、やや傾いた長方形（rectangle）と楕円（ellipse）の交点が半透明な赤い点で示されます。<br>
2つ目の例では、2曲線の交点を順に3つ a, b, c と名前を付けて、ラベルを付けてます。<br>

```
\documentclass[uplatex]{jsarticle}
\usepackage[dvipdfmx]{graphicx}
\usepackage{tikz}
\usetikzlibrary{intersections, calc}
\begin{document}
\begin{tikzpicture}[every node/.style={opacity=1, black}]
```

%1つ目の図

```
\begin{scope}
\draw [help lines] grid (3,2);
\draw [name path=rectangle, rotate=10] (0.5,0.5) rectangle +(2,1);
\draw [name path=ellipse] (2,0.5) ellipse (0.75cm and 1cm);
\fill [red, opacity=0.5, name intersections={of=rectangle and ellipse}]
(intersection-1) circle (2pt) node [above right] {1} %第1の交点
(intersection-2) circle (2pt) node [below right] {2};%第2の交点
\end{scope}
```

%ここから2つ目の図

```
\begin{scope}[xshift=5cm]
\clip (-2,-2) rectangle (2,2);
\draw [name path=curve 1] (-2,-1) .. controls (8, -1) and (-8, 1) .. (2,1);
\draw [name path=curve 2] (-1,-2) .. controls (-1,8) and (1, -8) .. (1,2);
\fill [red, opacity=0.5, name intersections={of= curve 1 and curve 2, by={a, b, c}}]
(a) circle (2pt) node [above left] at (a) {a}
(b) circle (2pt) node [above right] at (b) {b}
(c) circle (2pt) node [below left] at (c) {c};
\end{scope}
\end{tikzpicture}
```

#### 計算による座標設定（例：三角形の重心と垂心を求めてみる） {#vc9ec410}

calc ライブラリを読み込むことで、簡単な座標計算ができます。<br>

1. 座標の四則演算<br>
    座標をk倍したり、x座標、y座標に増減を加えることができます。<br>

    ```
    ($k*(座標) + (x,y)$)
    ```

1. 線分の内分<br>
    線分ABを t:1-t (0&lt;t&lt;1) で内分した点の座標は以下のようになります。<br>

    ```
    ($(Aの座標)!t!(Bの座標)$)
    ```

    tに負の数字または1より大きい数字を指定することも可能で、このときは外分点になります。

1. 線分を回転してから内分<br>
    線分ABをα°回転させてから u:1-u で内分した点の座標は、以下で求められます。<br>

    ```
    ($(Aの座標)!u!α:(Bの座標)$) 
    ```

    αに 90 を指定すれば、Aを通りABに垂直な線上の点を指定することになります。

1. 内分点を距離で指定<br>
    線分AB上で、Aからの距離が 1cm の点の座標は以下の計算で求まります。<br>

    ```
    ($(Aの座標)!1cm!(Bの座標)$) 
    ```

    回転させたときも同様で、線分ABをAの周りにα°回転させ、Aからの距離が1cmの点の座標は以下のようになります。<br>

    ```
    ($(Aの座標)!1cm!α:(Bの座標)$)
    ```

1. 線分に垂線を下ろす<br>
    点Pから線分ABに垂線を下ろした足の座標は、以下のようになります。<br>

    ```
    ($(Aの座標)!(Pの座標)!(Bの座標)$)
    ```

1. 計算で求めた座標に、さらに計算を続けることができます。<br>
    たとえば、線分ABの中点から垂直に1cm離れた点は以下の計算で求まります。

    ```
    ($(Aの座標)!.5!(Bの座標)!1cm!90:(B)$)
    ```

三角形の重心と垂心を求める例。<br>

```
\documentclass[uplatex]{jsarticle}
\usepackage[dvipdfmx]{graphicx}
\usepackage{tikz}
\usetikzlibrary{intersections, calc}
\begin{document}
\begin{tikzpicture}
\begin{scope}%△OABの重心を求める
\draw [help lines] (0,0) grid (4.5,3.5);%(0,0)から(4.5,3.5)までの"細線の方眼"
%△OABの頂点を設定
\coordinate (O) at (0,0) node [below] at (O) {O};
\coordinate (A) at (4,0) node [below]at (A) {A};
\coordinate (B) at (3,3) node [above right] at (B) {B};
%各辺の中点を計算
\coordinate (C) at ($(O)!.5!(A)$) node at (C) [below]  {C};%OAの中点
\coordinate (D) at ($(A)!.5!(B)$) node at (D) [above right]  {D};%ABの中点
\coordinate (E) at ($(B)!.5!(O)$) node at (E) [above left]  {E};%BOの中点
%中点であることを示す
\node [circle, draw, inner sep=2pt] at ($(O)!.5!(E)$) {};
\node [circle, draw, inner sep=2pt] at ($(B)!.5!(E)$) {};
\node at ($(A)!.5!(D)$) {×};
\node at ($(B)!.5!(D)$) {×};
\draw (O) to [out=-20, in=200] (C);
\draw (C) to [out=-20, in=200] (A);
%線分を引く
\draw (O)--(A)--(B)--cycle;
\draw [red] (O)--(D) [name path=line 1];
\draw [blue] (A)--(E) [name path=line 2];
\draw [green] (B)--(C);
%各点に黒丸をつける
\fill (O) circle (2pt);
\fill (A) circle (2pt);
\fill (B) circle (2pt);
\fill (C) circle (2pt);
\fill (D) circle (2pt);
\fill (E) circle (2pt);
\fill [name intersections={of=line 1 and line 2}] (intersection-1) circle (2pt) node [above] {重心};
\end{scope}
%
\begin{scope}[xshift=5cm]%△OABの垂心を求める
\draw [help lines] (0,0) grid (4.5,3.5);%(0,0)から(4.5,3.5)までの"細線の方眼" 
%三角形の頂点を設定
\coordinate (O) at (0,0) node [below] at (O) {O};
\coordinate (A) at (4,0) node [below] at (A) {A};
\coordinate (B) at (3,3) node [above right] at (B) {B};
%各頂点からの垂線の足を計算
\coordinate (C) at ($(O)!(B)!(A)$) node at (C) [below] {C};%BからOAに下ろした垂線の足
\coordinate (D) at ($(A)!(O)!(B)$) node at (D) [right] {D};%OからABに下ろした垂線の足
\coordinate (E) at ($(O)!(A)!(B)$) node at (E) [above left] {E};%AからOBに下ろした垂線の足
%線分を引く
\draw (O)--(A)--(B)--cycle;
\draw [red] (O)--(D);
\draw [name path=line 1, green] (B)--(C);
\draw [name path=line 2, blue] (A)--(E);
%C,D,Eに直角記号をつける
\draw ($(C)!5pt!(B)$) -| ($(C)!5pt!(A)$);
\draw ($(D)!5pt!(O)$)--($(D)!5pt!(O)!5pt!90:(D)$)--($(D)!5pt!(B)$);
\draw ($(E)!5pt!(A)$)--($(E)!5pt!(A)!5pt!90:(E)$)--($(E)!5pt!(O)$);
%各点に黒丸をつける
\foreach \P in {A,...,E,O} \fill (\P) circle (2pt);
\fill [name intersections={of=line 1 and line 2}] (intersection-1) circle (2pt) node [below left] {垂心};
\end{scope}
\end{tikzpicture}
\end{document}
```

角度記号をつける例。<br>

```
\documentclass[uplatex,dvipdfmx]{jsarticle}
\usepackage{graphicx}
\usepackage{tikz}
\usetikzlibrary{calc, quotes, angles}%quotesは角度のラベルオプション内に記述するために使用
\begin{document}
```

```
%直角記号の付け方の例1（calc ライブラリ必須）
\begin{tikzpicture}
 \draw
 (20:3cm) coordinate (A) node[right] {A}
 -- (0,0) coordinate (O) node[below left] {O}
 -- (110:2cm) coordinate (C) node[above left] {C};
 \coordinate (P) at ($(O)!.3cm!(A)!.3cm!90:(A)$);%直角記号の頂点の設定
 \draw[thick, red] ($(O)!(P)!(A)$)--(P);
 \draw[thick, red] ($(O)!(P)!(C)$)--(P);
\end{tikzpicture}
```

```
%直角記号の付け方の例2（calc ライブラリ必須）
\begin{tikzpicture}
 \draw
 (20:3cm) coordinate (A) node[right] {A}
 -- (0,0) coordinate (O) node[below left] {O}
 -- (110:2cm) coordinate (C) node[above left] {C};
 \draw[thick, red] ($(O)!8pt!(A)$)--($(O)!8pt!(A)!8pt!90:(A)$)--($(O)!8pt!(C)$);
\end{tikzpicture}
```

```
%一般の角度記号の付け方（3.0.0以降、angles ライブラリ必須）
\begin{tikzpicture}
 \draw
 (3,-1) coordinate (A)
 -- (0,0) coordinate (B)
 -- (2,2) coordinate (C)
 pic["$\alpha$",draw=orange, <->, very thick, angle eccentricity=1.2, angle radius=1cm] {angle=A--B--C};
%線分の長さを示す例
 \draw (B).. controls ($(B)!.2!(C)!10pt!90:(C)$) and ($(B)!.8!(C)!10pt!90:(C)$) .. (C) node [midway, sloped, fill=white] {$a$};
 \draw (A).. controls ($(A)!.2!(B)!10pt!90:(B)$) and ($(A)!.8!(B)!10pt!90:(B)$) .. (B) node [midway, sloped, fill=white] {$b$};
\end{tikzpicture}
\end{document}
```

#### 2点間の距離を計算する（例：三角形の外心と内心を求めてみる） {#c9ba66a8}

veclen(x,y)によってベクトル(x,y)の大きさが求められます。<br>
パスの記述の途中で let を用いると、数字レジスタ\n、ポイントレジスタ\p, \x, \y が使用可能となります。<br>
「=」の左側に置くとそのレジスタに数値または座標が代入されます。<br>
「=」の右側に置かれたレジスタは、その中身が展開されます。<br>
\x, \y はそれぞれ \p の x 成分、y 成分です。<br>

```
\path let \p1 = ○○, \n1 = □□ in （レジスタを含んだ）コマンド
```

これらを利用すると、点Aを中心として点Bを通る円は、以下のように書けます。<br>

```
\draw let \p1 = ($(Bの座標) - (Aの座標)$), %
　　　　　\n1 = {veclen(\x1,\y1)} %ベクトル\p1の大きさを \n1 に代入
　　　　　in circle [at=(Aの座標), radius=\n1];
```

through ライブラリを\usetikzlibrary{through}で読み込んであれば、上のような円はもっと簡単に書けます。<br>
（円形のノードの半径を拡大して望む点の座標を通るように設定します。）<br>

```
\node [draw, circle through=(Bの座標)] at (Aの座標) {};
```

三角形の外心と内心を求める例。<br>

```
\documentclass[uplatex]{jsarticle}
\usepackage[dvipdfmx]{graphicx}
\usepackage{tikz}
\usetikzlibrary{intersections, calc, through}
\begin{document}
\begin{tikzpicture}
\begin{scope}%△OABの外心を求める
\draw [help lines] (0,0) grid (4.5,3.5);%(0,0)から(4.5,3.5)までの"細線の方眼"
%三角形の頂点を設定し、三角形を描く
\coordinate (O) at (0,0) node [below] at (O) {O};
\coordinate (A) at (4,0) node [below] at (A) {A};
\coordinate (B) at (3,3) node [above right] at (B) {B};
\draw (O)--(A)--(B)--cycle;
%各辺の垂直二等分線およびその交点（＝外心）
\draw ($(O)!.5!(A)!1cm!90:(O)$)--($(O)!.5!(A)!4cm!90:(A)$) [name path=line 1, red];
\draw ($(A)!.5!(B)!1cm!90:(A)$)--($(A)!.5!(B)!4cm!90:(B)$) [name path=line 2, green];
\draw ($(B)!.5!(O)!1cm!90:(B)$)--($(B)!.5!(O)!4cm!90:(O)$) [name path=line 3, blue];
\fill [name intersections={of=line 1 and line 2}] (intersection-1) circle (2pt) node (P) [label=left:外心] {};
\draw ($(O)!.5!(A)!5pt!(A)$) |- ($(O)!.5!(A)!5pt!90:(A)$);%直角記号
%各点に黒丸をつける
\foreach \P in {O,A,B} \fill (\P) circle (2pt);
%外心円（半径はOPの距離）
\node [draw, circle through=(O)] at (P) {};
\end{scope}
%
\begin{scope}[xshift=5cm]%△OABの内心を求める
\draw [help lines] (0,0) grid (4.5,3.5);%(0,0)から(4.5,3.5)までの"細線の方眼"
%三角形の頂点を設定し、三角形を描く
\coordinate (O) at (0,0) node [below] at (O) {O};
\coordinate (A) at (4,0) node [below] at (A) {A};
\coordinate (B) at (3,3) node [above right] at (B) {B};
\draw (O)--(A)--(B)--cycle;
%各辺上で一定の長さの点を設定する
\coordinate (s) at ($(O)!1cm!(A)$);
\coordinate (t) at ($(O)!1cm!(B)$);
\coordinate (u) at ($(A)!1cm!(O)$);
\coordinate (v) at ($(A)!1cm!(B)$);
\coordinate (w) at ($(B)!1cm!(O)$);
\coordinate (z) at ($(B)!1cm!(A)$);
%内角の二等分線
\draw (O)--($5*(s)!.5!(t)$) [name path=line O, red];
\draw (A)--($(u)!.5!(v)!-4!(A)$) [name path=line A, green];
\draw (B)--($(z)!.5!(w)!-4!(B)$) [name path=line B, blue];
%角の二等分線の交点（＝内心）
\fill [name intersections={of=line O and line B}] (intersection-1) circle (2pt) node (P) [label=left:内心] {};
%各点に黒丸をつける
\foreach \P in {O,A,B} \fill (\P) circle (2pt);
%内心円（半径はPからOAに下ろした垂線の長さ）
\draw let \p1=($(O)!(P)!(A)-(P)$), \n1={veclen(\x1,\y1)} in circle [at=(P), radius=\n1];
\end{scope}
\end{tikzpicture}
\end{document}
```

### 繰り返し処理、変数 {#a177336d}

繰り返し処理は、\foreachおよび\breakforeachで実行します。<br>
これは、tikzパッケージが読み込む pgffor パッケージの中で定義されているもので、pgfとは独立に用いることもできます。（つまりtikzpicture環境以外でも使用可能です。）<br>

繰り返し処理の書式は、以下のようになります。<br>

```
\foreach \変数 [オプション] in {変域リスト} {(\変数 を含む)コマンド}
```

この式によって、{変域リスト} に含まれる要素の数だけ {コマンド} が繰り返され、その度に「\変数」に {変域リスト} の各要素が順繰りに代入されたコマンドが実行されます。

- 「\変数」は \x や \y という単独文字だけでなく、\angle のような文字列を使用することもできます。（日本語も使用可能）
- 「変域リスト」はコンマ区切りの数字または文字列です。（日本語も使用可能）
- 「変域リスト」に名付けられた点列を与えれば、「\変数」は座標を示します。
- 「/」で区切ることで、複数の「\変数」を指定できます。「変域リスト」内も同様に区切ります。

たとえば、左の式は、それぞれ右のような結果となります。<br>

```
・\foreach \x in {1, 2, 3, 4} {A-\x, } →（出力）A-1, A-2, A-3, A-4, 
・\foreach \angle in {0, 90, 180, 270} {$\cos\angle^\circ$　} →（出力）cos 0°　cos 90°　cos 180°　cos 270°
・\foreach \名前 in {太郎, 次郎, 花子, 桜子} {\名前{さん}，} →（出力）太郎さん，次郎さん，花子さん，桜子さん，
```

- 「変数リスト」中の規則的な数字列やアルファベット列は、リストの途中を「,…,」とすることで「良きに計らって」埋めてもらうこともできます。

```
・{1, 2, …, 10} → {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} と解釈
・{1, 3, …, 10} → {1, 3, 5, 7, 9} と解釈
・{a, b, c, 1, 2, …, 6, d, e,..., h} → {a, b, c, 1, 2, 3, 4, 5, 6,  d, e, f, g, h} と解釈
・{a, …, e} → {a, b, c, d, e} と解釈
・{Z, X, …, M} → {Z, X, V, T, R, P, N} と解釈
```

#### 基本的な描画例 {#bb6c31a6}

```
%目盛り付き座標軸
\begin{tikzpicture}
\draw[thick, ->] (-1,0) -- (5,0) node [below] {$x$};%x軸
\draw[thick, ->] (0,-1) -- (0,5) node [left] {$y$};%y軸
\node at (0,0) [anchor=north east] {O};
\foreach \x in {1,2,3,4}
   \draw (\x cm,.2) -- (\x cm,0) node[anchor=north] {$\x$};
\foreach \y in {1,2,3,4}
   \draw (.2,\y cm) -- (0,\y cm) node[anchor=east] {$\y$};
\end{tikzpicture}
```

```
%時計の例（2変数指定の例）
\begin{tikzpicture}
\draw[very thick] (0,0) circle (2cm);%時計の外周
\foreach \angle / \label in 
  {0/3, 30/2, 60/1, 90/12, 120/11, 150/10, 180/9, 210/8, 240/7, 270/6, 300/5, 330/4} 
  { 
   \draw (\angle:1.8cm) -- (\angle:2cm); 
   \node at (\angle:1.5cm) {\textsf{\label}}; 
  } 
\foreach \angle in {0,90,180,270} 
   \draw[thick] (\angle:1.7cm) -- (\angle:2cm); 
\draw[line width=3pt, cap=round] (0,0) -- (145:0.8cm);%短針
\draw[line width=3pt, cap=round] (0,0) -- (30:1.2cm);%長針
\end{tikzpicture}%
```

### 図画のみの出力 {#nf2ceec5}

tikz/PGF で作成した図画を含んだソースファイルから、図画のみを別ファイルに抽出できます。<br>
dvips または LuaTeX または pdfTeX を用いると、ちょうどその画像の大きさの ps ファイルまたは pdf ファイルが得られます。<br>
dvipdfmx を用いた場合は、コマンドラインから pdfcrop を最後に適用することで画像の大きさちょうどの pdf を得られます。<br>

- ソースコードに追加記述
1. プリアンブルに追加
1. 画像部分に追加
- オプションをつけてコンパイルする
1. uplatex → dvipdfmx → pdfcrop
1. uplatex → dvips
1. lualatex

#### ソースコードへの追加記述 {#yddb8d2b}

1. プリアンプルへの追加<br>
    プリアンプルに以下のコードを追加します。<em>filename</em> は、tex ファイル自体の名前です（拡張子の .tex などは含めません）。

    ```
    \pgfrealjobname{filename}
    ```

1. 図画部分への追加<br>
    tikz 環境の前後に pgf のコマンドを以下のように書き足します。<em>filename-fig1</em> は、それぞれの図画につける任意の名前です。

    ```
    \beginpgfgraphicnamed{filename-fig1}
    \begin{tikzpicture}
    ...
    \end{tikzpicture}
    \endpgfgraphicnamed
    ```

#### コンパイル {#q32b1a53}

ソースコード（tex ファイル）をコンパイルするときに、以下のオプションをつけて実行します。<br>
それぞれの図画に対し、<strong>--jobname</strong> オプションをつけてコンパイルします。<br>
なお、以下の例では拡張子（.tex など）をつけてますが、省略しても各コマンドは「よきにはからって」くれます。<br>

```
$ uplatex --jobname=filename-fig1 filename.tex
```

これで、図画だけを含んだ filename-fig1.dvi が作成されます。

1. dvipdfmx を使用する場合

    ```
    $ dvipdfmx filename-fig1.dvi
    $ pdfcrop filename-fig1.pdf
    ```

    これで、図画の大きさちょうどの pdf ファイルが作成されます。
    余白を入れるには pdfcrop に <strong>--margins</strong> オプションを用います。以下の例では、周囲に 3bp の余白を入れています。

    ```
    $ pdfcrop --margins 3 filename-fig1.pdf
    ```

    （4方向の余白を指定するには &lt;左> &lt;上> &lt;右> &lt;下> と指定します。数字を2つ指定した場合は&lt;右>&lt;下>の余白になります。）

1. dvips を使用する場合

    ```
    $ dvips filename-fig1.dvi
    ```

    これで、図画の大きさちょうどの ps ファイルが作成されます。

1. LuaLaTeX を使用する場合

    ```
    $ lualatex --jobname=filename-fig1 filename.tex
    ```

    これだけで、図画の大きさちょうどの pdf ファイル（filename-fig1.pdf）が作成されます。

## Troubleshooting {#i0cba852}

- \[[tikz\] 破線に添えた分数式の横棒が…](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1020)
- 「縦書き (tarticle) で tikz を使おうとするとエラーが出る」→ ([qa:56760](https://okumuralab.org/~okumura/texfaq/qa/56760.html), [qa:56761](https://okumuralab.org/~okumura/texfaq/qa/56761.html)), [A package to make everyshi compatible with tate-mode of pTeX.](https://gist.github.com/zr-tex8r/2702969)
- dvipdfmx を使用することによる制約が以前はいくつかありましたが、3.0.0 ではほぼ解消されています。LuaTeX, pdfTeX を使用すれば可能です。（マニュアル  p.116 (ver 3.0.0)。以下同）
    - <strong>dvipdfmx でパターンは使用可</strong>であることをマニュアルのサンプルで確認（\usetikzlibrary{patterns}は有効）（マニュアル p.172）
    - <strong>dvipdfmx でシェーディングは使用可</strong>であることをマニュアルのサンプルで確認（\usetikzlibrary{shadings,fadings}も有効）（マニュアル p.175）
    - <strong>dvipdfmx で path picture は使用可</strong>であることをマニュアルのサンプルで確認（マニュアル p.174）
    - <strong>dvipdfmx でマスクは使用可</strong>であることをマニュアルのサンプルで確認（マニュアル p.1068）
    - \[remember picture\] を dvipdfmx で使用するためには pxpgfmark を読み込む必要があります。（[TikZ は dvipdfmx をどこまでサポートするか？ (2)](http://d.hatena.ne.jp/zrbabbler/20130302/1362228901), [数学雑談　LaTeX (TikZ)](http://mathsci.blog41.fc2.com/blog-entry-65.html)）
        - dvipdfmx の制約の検証について（旧版のTikZ/pgf）[TikZ は dvipdfmx をどこまでサポートするか？(1)](http://d.hatena.ne.jp/zrbabbler/20130222/1361495591), [あなたが知らない(かもしれない)PGF/TikZの世界](http://slashdot.jp/~ujimushi/journal/551945)
- dvipsを使用することによる制約。
    - パスで画像をマスクできない／シェーディングは使用可能だが、品質は落ちる／透明度は最近のGhostscriptを必要とする

## TikZ 対応エディタ {#ta16acba}

- [TeXstudio](/TeXstudio/)
- [TikzEdt](http://www.tikzedt.org/)
- [TikZiT](http://tikzit.sourceforge.net/)
- [Circuit](http://wwwu.uni-klu.ac.at/magostin/cirkuit.html)
- [KtikZ/QtikZ](http://www.hackenberger.at/blog/ktikz-editor-for-the-tikz-language/)
    - [Ubuntu 12.10: QTikZ で日本語（１）導入、メニューの日本語化](http://blog.livedoor.jp/ti5942/archives/7563183.html)
- [GeoGebra](http://www.geogebra.org/cms/ja)
    - GeoGebraの使い方…[GeoGebra日本](https://sites.google.com/site/geogebrajp/)
- [Jpdgdraw](http://www.dickimaw-books.com/apps/jpgfdraw/)
- [Sketch -- A 3D Scene Description Translator](http://www.frontiernet.net/~eugene.ressler/)
- [ePiX](http://mathcs.holycross.edu/~ahwang/epix/ePiX.html)
- [WhizzyTikZ](https://bitbucket.org/gvol/whizzy-tikz)

## 関連リンク {#rdbc5335}

### PGF/TikZを利用・拡張するもの {#e2a3bdfe}

- [Beamer](/Beamer/)
- [PGFPlots](http://pgfplots.sourceforge.net/)
    - [Introductory Talk (pdf)](http://pgfplots.sourceforge.net/pgfplots_talk_FTUG_2012_final.pdf) (at French TeX User Group, April 14 2012)
    - [Pgfplot - ConTeXt wiki](http://wiki.contextgarden.net/Pgfplot)
- [TikZ-dependency](http://sourceforge.net/projects/tikz-dependency/)
    - A LaTeX library to draw all sorts of dependency trees and graphs
    - [TikZ-dependency で 係り受け木を描く](http://tetsuok.hatenablog.com/entry/2012/06/30/040852)
    - [% -\*- coding: utf-8 -\*- % Only for XeLaTeX. % need to install tikz-dependency pa - Pastebin.com](http://pastebin.com/2RTcBAA3)
- [tkz-euclide](http://altermundus.fr/pages/euclide.html)
- [Altermundus.com](http://altermundus.com/index.html)
    - PGF/TikZをベースにしたtkz-base、tkz-euclideパッケージなどの紹介
- [tikzDevice: A Device for R Graphics Output in PGF/TikZ Format](http://cran.r-project.org/web/packages/tikzDevice/index.html)
    - マニュアルは[こちら](http://cran.r-project.org/web/packages/tikzDevice/vignettes/tikzDevice.pdf)

### 使用例や解説 {#d081bd28}

- [TeXample.net](http://www.texample.net/)
    - [TikZ and PGF examples](http://www.texample.net/tikz/examples/)
- [Newest &#39;tikz-pgf&#39; Questions - TeX - LaTeX - Stack Exchange](http://tex.stackexchange.com/questions/tagged/tikz-pgf)
    - [diagrams - Nice scientific pictures show off](http://tex.stackexchange.com/questions/158668/nice-scientific-pictures-show-off)
    - [How can we display fireworks?](http://tex.stackexchange.com/questions/39485/how-can-we-display-fireworks)
    - [How to draw nanotubes with TeX?](http://tex.stackexchange.com/questions/54341/how-to-draw-nanotubes-with-tex)
- [Tikz&amp;pgf | LaTeX工作室](http://www.latexstudio.net/category/tex-graphics/tikz-example/)
- [「TikZ」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=TikZ)
- [ZR-TeXnobabbler/「TikZ」の検索結果 - Twilog](http://twilog.org/tweets.cgi?id=zr_tex8r&word=TikZ)
- [TikZ - TeX Alchemist Online](http://doratex.hatenablog.jp/category/TikZ)
    - [TeX Alchemist Online / 東大化学設問数のTikZによるグラフ化](http://doratex.hatenablog.jp/entry/20140301/1393604168)
        - TikZによるグラフ作成（折れ線グラフ、棒グラフ）の例
    - [TeX Alchemist Online / TikZによる連成振動アニメーション (1) ～ アニメーションGIF篇](http://doratex.hatenablog.jp/entry/20140417/1397742060) [(2) ～ 動くPDF篇](http://doratex.hatenablog.jp/entry/20140418/1397750533)
        - 連成振動（物理のバネ・おもり・壁など）の図の作成例，およびそのアニメーション化の方法
- [いわにぃのブログ : TikZ](http://blog.livedoor.jp/ti5942/tag/TikZ), [いわにぃのブログ : PGF/TikZ](http://blog.livedoor.jp/ti5942/archives/cat_131138.html)
- [岩崎 隆盛/「TikZ」の検索結果 - Twilog](http://twilog.org/tweets.cgi?id=ti5942&word=TikZ)
- [「TikZ」の検索結果一覧 - にっき♪](http://d.hatena.ne.jp/abenori/archive?word=TikZ)
- [うぶつん: Tikz](http://ubutun.blogspot.jp/search/label/Tikz)
- [TikZ | 人ごとな独り言](http://hitgot.org/archives/category/computer/programming/tex/tikz/)
- [ちっちのぶろぐ: Tikz](http://chitchnoblog.blogspot.jp/search/label/Tikz)
- [tetsuok の旅 blog](http://tetsuok.hatenablog.com/archive/category/latex)
- [TeX memo](http://perikanfan.web.fc2.com/tex.html)
    - TikZの日本語マニュアルあり（未完）
- [TikZを使う](http://blogs.yahoo.co.jp/igproj_fusion/14008346.html)
- [Software Design Laboratory &raquo; TeX macros](http://softcream.oka-pu.ac.jp/tex-macros/)
    - TikZ/PGFを利用して、構文解析器のXML出力から構文木を自動描画したり、２変数２次関数の等高線を描画するマクロなど。クリップアート集も。
- [Fibonacci 数列で TikZ してみた](http://d.hatena.ne.jp/munepi/20120425/PGFandTikZ)
    - [TikZ（＋expl3）を用いてフィボナッチ数列](http://d.hatena.ne.jp/abenori/20120425)
    - [テンプレート的 LaTeX、再び (1)](http://d.hatena.ne.jp/zrbabbler/20120504/1336153796)
- [Graphics with PGF and TikZ](http://www.tug.org/pracjourn/2007-1/mertz/)
    - PracTeX journal(2007-1)の記事で、代表的な用法をシンプルに紹介（英文）
- [BeamerのためのTikZ](http://www.opt.mist.i.u-tokyo.ac.jp/~tasuku/tikz.html)
    - 木構造を表す模式図の作成例
- [Miffy Code Snipets](http://miffysora.wikidot.com/tikz)
- [TikZを利用した図形描画](http://unilab.gbb60166.jp/TikZ_etude/TikZ_etude.htm)
    - 初等幾何の作図例（扇型、円を組み合わせた面積、角度）
