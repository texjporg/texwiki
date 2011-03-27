---
title: "TXFonts"
url: "/TXFonts/"
date: 2004-09-22T23:24:07Z
pukiwiki: "TXFonts"
---

# TXFonts

## TX フォント {#uba8f4cc}

\[Summary in English\]
Young Ryu's TX fonts tutorial in Japanese.
Modified txmi/txmi1 tfm/vf files
([txmi.zip](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/txmi.zip),
[txmi1.zip](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/txmi1.zip))
improve the spacing of $S$ with subscripts.

### News {#b42eab94}

- \[2008-03-26\] small capsがAdobe Reader 8でうまく表示できない問題のfix およびtxfonts.styの若干の修正 (Young Ryu)
- \[2004-02-13\] varg オプションを付けた場合に使われる [txmi1.zip](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/txmi1.zip)
    のほうも角藤さんが作ってくださいました

- \[2004-01-27\] txfonts で $S$ の後ろのスペースが広すぎる件で本田さんのご指摘
    [qa:25199](https://okumuralab.org/~okumura/texfaq/qa/25199.html)に従って txmi.tfm，txmi.vf
    を修正してみました（[txmi.zip](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/txmi.zip)）。

- \[2001-04-16\] [作者 Young U. Ryu のコメント](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/young.txt)(comp.text.tex)
- \[2001-03-17\] Mac のかたにご注意：
    texmf:dvips:config 中のテキストファイル（tx8r.enc，txr.map，txr1.map，txr2.map）
    の改行コードを必ず Mac 形式に変換してください（Thanks: 神山さん）

- \[2001-03-01\] txfonts/pxfonts のパッチが出ました。CTAN の fonts/txfonts/tx_patch1.zip，
    fonts/pxfonts/px_patch1.zip です (西島さん，土村さんの rpm も更新されました)

- \[2001-01-08\] [西島さんの RPM](http://www.plain.co.jp/tex/rpm/index.htm)
    が CTAN 版 TX フォントに合わせて更新されました

- \[2001-01-03\] 新たに CTAN に収められたものは多少内容が違うようです（実質同じ？）ので，
    私のところに置いてあるものもパッケージングしなおしました。

- TX フォントの最新版は 3.1 Patch 1 (2000-12-21) です。拙著
    [『［改訂版］LaTeX2e 美文書作成入門』](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun2e.html)
    のCD-ROMに入っているものは初期バージョンですので，
    更新をお勧めします。

### はじめに {#u110fd71}

今までは TeX のフォントといえば Knuth がデザインした Computer Modern
フォントを使うことがほとんどでした。
しかし，Computer Modern フォントはデザインがいまいちで使う気になれないという人も多いと思います。

そんな人には Times を TeX 用に配置し直した TX フォントをお薦めします。
私の最新刊
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

TXフォントが出たころは、期待感がたいへん大きかったのですが、Ryu氏はその後TXやPXからまったく手を引いてしまい、彼のWebページからも削除された状態です。
バランスの悪いところは未修整のままです。
今では、LaTeXに標準で含まれ、少しずつ改良が続けられているmathptmxのほうに期待を持っている人のほうが多いかもしれません。

でも、それはオープンソースソフトの良いところで、誰でも彼のやり残したところを改善することができますし、mathptmxの良いところを合わせてまったく新しいものを作ることもできます。
どなたかぜひ挑戦してください。

### インストール（Windows） {#o79bd0d3}

角藤さんの W32TeX にはすでに TX も PX も含まれています（txpx-pazofonts.tar.gz，t1fonts.tar.gz）ので，何もする必要はありません。
dviout で使う場合は Ghostscript もインストールする必要があります。

TX フォントのバージョンを上げたなら
/usr/local/share/texmf/fonts/pk/modeless/txr/
の中をすべて消してください。

### インストール（Linux） {#dd6c8b38}

teTeX 2.x には txfonts が含まれていますので，何もする必要はありません。

teTeX 1.x については，Vine など Red Hat 系 Linux 用の RPM を
[土村さん](http://www.nn.iij4u.or.jp/~tutimura/tex/)
が配布してくださっています。
インストール・更新は他の RPM と同じです。

```
# rpm -Uvh ダウンロードしたRPMファイルの名前
```

TX フォントのバージョンを上げたなら
/usr/local/share/texmf/fonts/pk/modeless/txr/
の中をすべて消してください。

### インストール（Macintosh） {#w5aece91}

内山さんが
[TXFONTSをMacpTeXで利用するための情報](http://macptex.appi.keio.ac.jp/~uchiyama/txfonts.html)
という完璧な解説を書いてくださっています。
ぜひそちらをご覧ください。

### インストール（その他） {#e7c5f34a}

次のところからダウンロードします（約 3.5M バイト）。

- [Ringサーバ](http://www.ring.gr.jp/)
    の
    [CTAN:fonts/txfonts/](https://mirror.ctan.org/fonts/txfonts/)

- 会津大学のCTANミラー:
    [ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/fonts/txfonts/](ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/fonts/txfonts/)

- 本家CTANサーバ:
    [ftp://ctan.tug.org/tex-archive/fonts/txfonts/](ftp://ctan.tug.org/tex-archive/fonts/txfonts/)

ドキュメントを読んでインストールします。
最近の teTeX ベースのシステムなら次のように行います
（Vine 2.x をはじめ多くのシステムでは /usr/local/share/...
ではなく /usr/share/... です）。

- afm の中身を /usr/local/share/texmf/fonts/afm/txr/ に入れる。
- pfb の中身を /usr/local/share/texmf/fonts/type1/txr/ に入れる。
- tfm の中身を /usr/local/share/texmf/fonts/tfm/txr/ に入れる。
- vf の中身を /usr/local/share/texmf/fonts/vf/txr/ に入れる。
- input の中身を /usr/local/share/texmf/tex/latex/txr/ に入れる。
- dvips の中身を /usr/local/share/texmf/dvips/config/ に入れる。
- /usr/local/share/texmf/dvips/config/config.ps に p +txr.map
    という行を追加する（Vine 2.x の場合は /usr/share/texmf/config.ps）。

- /usr/local/share/texmf/dvips/config/config.pdf を使う場合は G
    という行を削除する（Vine 2.x では該当せず）。

- 古い TX フォントを使っていたなら，/usr/local/share/texmf/fonts/pk/modeless/txr/
    の中をいったん消す（Vine 2.x では /var/lib/texmf/pk/modeless/txr/）。

- /usr/local/share/texmf/ls-R というファイルがある場合は，
    ここで mktexlsr コマンドを実行する（MakeTeXls-R
    という名前になっているシステムもある）。

もしこれでうまくいかなければ，
kpsewhich psfonts.map と打ち込んで psfonts.map
の在処を調べ，それに txr.map の内容をアペンドしてしまってください。

> psfonts.map を書き換えるのはちょっと強引かもしれません。
> もとはといえば /usr/bin/mktexpk が悪いのですから，これを
> [teTeX の mktexpk](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/mktexpk)（多少手を加えたかも）と取り替えてください。

texmf ディレクトリで展開するだけでほぼインストールが完了するものも作りました：

- [txfonts-3_1_1b.zip](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/txfonts-3_1_1b.zip) (約 1M バイト)
- マニュアル [txfontsdocA4.tex](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/txfontsdocA4.tex) (約 39K バイト)

展開後，上の config.ps の編集に進んでください。

### 使い方 {#w2da6d80}

LaTeX2e を使っている場合は，次のようにして txfonts パッケージを読み込みます。

```
\documentclass{jsarticle}  % たとえば
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

- Y&amp;Y Inc. (廃業。→[TUG内のサポートページ](http://www.tug.org/yandy/)）
    - MathTime
        (MathTime 1.1 + MathTime Plus = MathTime Complete: オンライン $225)

- [MicroPress](http://www.micropress-inc.com/) --
    [TM Math](http://www.micropress-inc.com/fonts/tmmath/tmmain.htm)
    ($150.00 + 送料 $20.00, 注文ページは SSL 非対応)

MathTime については [MathTime](/MathTime/) にまとめて書きました。

フリーのもので，いくつかのフォントを Times にするためのパッケージもあげておきます。

- mathptmx …… LaTeX の PSNFSS に含まれるものです。
- mathptm …… mathptmx の旧版
- Belleek ([TrueTeX](http://truetex.com/))
    …… MathTime（3フォント）の代替品です。
    MathTime Plus（15フォント）相当のものは含まれていません。
