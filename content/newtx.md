---
title: "newtx"
url: "/newtx/"
date: 2013-10-10T02:01:10Z
pukiwiki: "newtx"
---

# newtx

## newtx {#xd8a1457}

newtx は TX フォントを改良した Times 系フォントです．
TeX Live，W32TeX に標準で含まれています．

***

***

### 公式サイトなど {#o3f5f613}

- [Michael Sharpe Home Page](http://math.ucsd.edu/~msharpe/)
    - [MSharpe TeX software](https://dl.dropboxusercontent.com/u/3825336/TeX/index.html)
- [http://www.ctan.org/pkg/newtx](http://www.ctan.org/pkg/newtx)
    - newtx – Al­ter­na­tive uses of the TX fonts, with im­proved met­rics
- [http://www.ctan.org/pkg/newtxtt](http://www.ctan.org/pkg/newtxtt)
    - newtxtt – Enhancement of typewriter fonts from newtx
- [http://www.ctan.org/pkg/newpx](http://www.ctan.org/pkg/newpx)
    - newpx – Al­ter­na­tive uses of the PX fonts, with im­proved met­rics
- [http://www.ctan.org/pkg/boondox](http://www.ctan.org/pkg/boondox)
    - boon­dox – Math­e­mat­i­cal al­pha­bets de­rived from the STIX fonts
- [http://www.ctan.org/pkg/fontaxes](http://www.ctan.org/pkg/fontaxes)
    - fontaxes – Ad­di­tional font axes for LaTeX

### License {#ga9ac954}

[The LaTeX Project Public Li­cense](http://latex-project.org/lppl/)

### News {#s0ef87dd}

[MSharpe TeX software](https://dl.dropboxusercontent.com/u/3825336/TeX/index.html) を参照．<br>

### インストール {#va9608e1}

#### TeX Live {#v5e856b3}

TeX Live 2014 には newtx, newtxtt, newpx, boondox, fontaxes パッケージが最初からインストールされています．<br>

#### W32TeX {#h170776e}

W32TeX には newtx, newtxtt, newpx, boondox, fontaxes パッケージが最初からインストールされています．<br>

### 使い方 {#rcf88e0c}

```
\usepackage{newtxtext,newtxmath}
```

詳細は

```
texdoc newtx
```

で確認してください。

### 関連リンク {#s6bcb75e}

- newtx フォントで脚注に不具合 ([qa:57284](https://okumuralab.org/~okumura/texfaq/qa/57284.html), [qa:57286](https://okumuralab.org/~okumura/texfaq/qa/57286.html), [qa:57287](https://okumuralab.org/~okumura/texfaq/qa/57287.html), [qa:57288](https://okumuralab.org/~okumura/texfaq/qa/57288.html))

## TX フォント → TX フォントを改良した newtx がリリースされています {#uba8f4cc}

\[Summary in English\]
Young Ryu's TX fonts tutorial in Japanese.
Modified txmi/txmi1 tfm/vf files
([txmi.zip](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/txmi.zip),
[txmi1.zip](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/txmi1.zip))
improve the spacing of $S$ with subscripts.

- [http://www.ctan.org/pkg/txfonts](http://www.ctan.org/pkg/txfonts)

### News {#b42eab94}

- \[2008-03-26\] small capsがAdobe Reader 8でうまく表示できない問題のfix およびtxfonts.styの若干の修正 (Young Ryu)
- \[2004-02-13\] varg オプションを付けた場合に使われる [txmi1.zip](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/txmi1.zip)
    のほうも角藤さんが作ってくださいました

- \[2004-01-27\] txfonts で $S$ の後ろのスペースが広すぎる件で本田さんのご指摘
    [qa:25199](https://okumuralab.org/~okumura/texfaq/qa/25199.html)に従って txmi.tfm，txmi.vf
    を修正してみました（[txmi.zip](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/txmi.zip)）。

- \[2001-06-13\] [TX Fonts, PX Fonts \[CPAN patch1\]](http://www.nn.iij4u.or.jp/~tutimura/tex/detail.html) Vine 2.x 用パッケージ (土村さんの rpm が更新されました)
- \[2001-04-16\] [作者 Young U. Ryu のコメント](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/young.txt)(comp.text.tex)
- \[2001-03-17\] Mac のかたにご注意：
    texmf:dvips:config 中のテキストファイル（tx8r.enc，txr.map，txr1.map，txr2.map）
    の改行コードを必ず Mac 形式に変換してください（Thanks: 神山さん）

- \[2001-03-01\] txfonts/pxfonts のパッチが出ました。CTAN の fonts/txfonts/tx_patch1.zip，
    fonts/pxfonts/px_patch1.zip です

- \[2001-01-03\] 新たに CTAN に収められたものは多少内容が違うようです（実質同じ？）ので，
    私のところに置いてあるものもパッケージングしなおしました。

- TX フォントの最新版は 2009-01-14 です。拙著
    [『［改訂版］LaTeX2e 美文書作成入門』](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun2e.html)
    のCD-ROMに入っているものは初期バージョンですので，
    更新をお勧めします。

### はじめに {#u110fd71}

今までは TeX のフォントといえば Knuth がデザインした Computer Modern
フォントを使うことがほとんどでした。
しかし，Computer Modern フォントはデザインがいまいちで使う気になれないという人も多いと思います。

そんな人には Times を TeX 用に配置し直した TX フォントをお薦めします。
[『［改訂版］LaTeX2e 美文書作成入門』](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun2e.html)も TX フォントを使っています。

Computer Modern Roman/Italic と TX フォントの出力例です（PNG画像）。
本物の Times ではなく Ghostscript 付属のフリーの互換フォントを使っています。

!["Computer Modern と TX フォントの比較"](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/txr.png)

TX フォントの作者
[Young U. Ryu](http://www.utdallas.edu/~ryoung/)
さんは Palatino ベースの
[PX Fonts](https://mirror.ctan.org/fonts/pxfonts/)
も作っておられます。

### 補足 {#ma713e1b}

TXフォントが出たころは、期待感がたいへん大きかったのですが、Ryu氏はその後TXやPXからまったく手を引いてしまい、彼のWebページからも削除された状態です。<br>
バランスの悪いところは未修整のままです。<br>
現在では、改良されたnewtx, newpxがあります。<br>
newtx, newpx は TeX Live, W32TeX に標準でインストールされます。<br>

### インストール {#u8fe5614}

#### TeX Live {#dd6c8b38}

TeX Live には txfonts, pxfonts が含まれていますので，何もする必要はありません。

#### W32TeX {#o79bd0d3}

W32TeX にはすでに TX も PX も含まれています（txpx-pazofonts.tar.xz，t1fonts.tar.xz）ので，何もする必要はありません。<br>

### 使い方 {#w2da6d80}

upLaTeX を使っている場合は，次のようにして txfonts パッケージを読み込みます。

```
\documentclass[uplatex]{jsarticle}  % たとえば
\usepackage{txfonts}
\begin{document}

……本文……

\end{document}
```

TXフォント 2.1 以降では Computer Modern Roman を Times で置き換えるだけでなく，
Computer Modern Sans Serif を Helvetica で置き換え，
Computer Modern Typewriter をこれと同じ幅の独特のタイプライタフォントで置き換えます。
Helvetica は \usepackage{times} としたときに比べて95％に縮小されます。
このほうが本文の Times とのバランスが良くなります。

TX Typewriter フォントの代わりに Computer Modern Typewriter
を使うには

```
\usepackage{txfonts}
\renewcommand{\ttdefault}{cmtt}
\DeclareMathAlphabet{\mathtt}{OT1}{cmtt}{m}{n}
\SetMathAlphabet{\mathtt}{bold}{OT1}{cmtt}{m}{n}
```

とします。Courierを使いたいなら

```
\usepackage{txfonts}
\renewcommand{\ttdefault}{pcr}
\DeclareMathAlphabet{\mathtt}{OT1}{pcr}{m}{n}
\SetMathAlphabet{\mathtt}{bold}{OT1}{pcr}{b}{n}
```

とします。

数学で amsmath パッケージの類を使うなら

```
\usepackage{amsmath}
\usepackage{txfonts}
```

とします（つまり，他のパッケージの後で txfonts を読み込みます）。
amssymb を読み込む必要はありません。

数式で g，v，w，y のデザインを Times Italic
風ではなく伝統的な数式風（g が 9 のように見えるもの）にするには

```
\usepackage[varg]{txfonts}
```

とします。なお，g だけ 9 のように見えるものにするには，g の代わりに \varg
と書くか，あるいは本田さんが
[TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) の [qa:248](https://okumuralab.org/~okumura/texfaq/qa/248.html)
で書いてくださっている方法を使います。

PostScript プリンタによってはうまく動作しないものがあるようです。
その場合は dvips に -j0 オプションを与えてみてください
（partial downloading をしないというオプションです）。

TXフォントのバグ報告は comp.text.tex に投稿してください。
ただしもう Ryu さんは txfonts を当分いじらないおつもりのようです。

### その他 {#t7433d78}

★ config.ps に txr.map ではなく txr1.map
と書けば Adobe の Times フォント（もしあれば）を埋め込みます。
txr2.map と書けば Ghostscript 付属の Times そっくりのフォントを埋め込みます。
txr.map では欧文フォントが埋め込まれないので，Times の代わりに Times New
で表示され，見栄えがやや異なることがあります。
たとえば $A$ の傾きがかなり違うので，$\hat{A}$ のハットがおかしな位置に付きます。

★ [TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) の [qa:869](https://okumuralab.org/~okumura/texfaq/qa/869.html) （藤花さん）
によれば，\usepackage{amsmath,txfonts}
だけでは \checkmark などごく一部の記号が出ないようです。
\usepackage{amsmath,amssymb,txfonts}
とするか，あるいは \checkmark を定義する必要があるようです。

★ [TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) の [qa:1440](https://okumuralab.org/~okumura/texfaq/qa/1440.html) （本田さん）
による $\to$ だけ txfonts でなく CM に戻す方法：

```
\DeclareSymbolFont{cmSymbols}{OMS}{cmsy}{m}{n}
\DeclareMathSymbol{\cmrightarrow}{\mathrel}{cmSymbols}{"21}
\let\to\cmrightarrow
```

★ [TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) の [qa:2669](https://okumuralab.org/~okumura/texfaq/qa/2669.html) （角藤さん）
による $\ell$ だけ txfonts ではなく CM に戻す方法：

```
\DeclareSymbolFont{cmletters}{OML}{cmm}{m}{it}
\DeclareMathSymbol{\ell}{\mathord}{cmletters}{"60}
```

★ \usepackage{txfonts} しないで $\int$ だけ txfonts を使う方法：

```
\DeclareSymbolFont{txlargesymbols}{OMX}{txex}{m}{n}
\DeclareMathSymbol{\txintop}{\mathop}{txlargesymbols}{"52}
\let\intop\txintop
```

### 他の選択肢 {#o83fb328}

TX フォントの数式のバランスが気になる方のために，Times 系の商品フォントをあげておきます。

- [Personal TeX, Inc.](http://www.pctex.com/)
    - MathTime Pro 2
        (MTPro2 Complete: オンライン: Price $179, Academic price $129)

- [MicroPress](http://www.micropress-inc.com/) --
    [TM Math](http://www.micropress-inc.com/fonts/tmmath/tmmain.htm)
    ($150.00 + 送料 $20.00, 注文ページは SSL 非対応)

MathTime については [MathTime](/MathTime/) にまとめて書きました。

フリーのもので，いくつかのフォントを Times にするためのパッケージもあげておきます。

- newtx …… Al­ter­na­tive uses of the TX fonts, with im­proved met­rics
- mathptmx …… LaTeX の PSNFSS に含まれるものです。
- mathptm …… mathptmx の旧版
- Belleek ([TrueTeX](http://truetex.com/))
    …… MathTime（3フォント）の代替品です。
    MathTime Plus（15フォント）相当のものは含まれていません。

### 関連リンク {#na79627d}

- [Ringサーバ](http://www.ring.gr.jp/)
    の
    [CTAN:fonts/txfonts/](https://mirror.ctan.org/fonts/txfonts/)

- 会津大学のCTANミラー:
    [ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/fonts/txfonts/](ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/fonts/txfonts/)

- 本家CTANサーバ:
    [ftp://ctan.tug.org/tex-archive/fonts/txfonts/](ftp://ctan.tug.org/tex-archive/fonts/txfonts/)

- [txfonts のインテグラルのフォントを変える](http://blog.wgag.net/402.html)
