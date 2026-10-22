---
title: "MetaPost"
url: "/MetaPost/"
date: 2004-09-22T22:42:45Z
pukiwiki: "MetaPost"
---

# MetaPost

## MetaPost {#v0160eb8}

MetaPost は John D. Hobby が作った [METAFONT](/METAFONT/) 類似の描画ソフトウェア（描画プログラミング言語）です。
METAFONT がビットマップフォント（gf 形式）を出力するのに対して，
MetaPost は画像ファイル（EPS 形式・PNG 形式・SVG 形式）を出力します。

***

***

## はじめに {#q0dc30bf}

MetaPost を利用すると，次のような METAFONT とよく似た言語のプログラムから，フォントではなく EPS（Encapsulated PostScipt）形式の画像ファイルを作ることができます。

```
prologues := 3;
beginfig(1); % ハートマークを描く
pickup pencircle scaled 2;
draw (0,40)..(10,50)..(20,40)..(8,20)..(0,0); % 右側
draw currentpicture xscaled -1; % 左側（鏡像）
endfig;
end
```

「FONT ではなく PostScript を作る」ので MetaPost という名前です。ただし最近の版では PNG や SVG 形式の画像ファイルも出力できます。

“普通（plain）の MetaPost”を起動するコマンドは mpost です。従って，上記のソースコードが heart.mp というファイルに書かれているとすると，以下のコマンドで heart.mp を画像ファイルに変換できます。（標準の拡張子 .mp は自動的に補われます。）

```
mpost heart
```

### ソフトウェア名の表記 {#z5c13725}

かつては，METAFONT ロゴと同じ書体（logo フォント）で“METAPOST”と書かれていましたが，現在では特別なフォントを用いずに普通に“MetaPost”と書かれるのが一般的です。公式マニュアルでも“MetaPost”という表記です。[^1]

### 日本語対応 {#vcd749fc}

- pmpost： pTeX と同様の日本語対応を施した MetaPost。
- upmpost： upTeX と同様の日本語対応を施した MetaPost。

※昔は jmpost という名前でしたが，pTeX と命名法を合わせるために，2009 年頃に pmpost と改名されました。

### インストール {#l36a3b95}

オリジナルの MetaPost（mpost）は TeX Live・W32TeX の配布の中に含まれています。

日本語対応版（pmpost・upmpost）については，W32TeX では 2009 年頃，TeX Live では 2015 年版以降でサポートされています。

TeX Live 収録の MetaPost のバージョンは以下の通りです。

- TeX Live 2019： バージョン 2.00
- TeX Live 2015： バージョン 1.999
- TeX Live 2014： バージョン 1.902
- TeX Live 2013： バージョン 1.803

### ソフトウェア情報 {#qc61f4d1}

#### 公式マニュアル {#yeac9fb4}

TeX Live および W32TeX においては，

```
texdoc mpost
```

を実行すると，詳細な公式マニュアルが開かれます。

#### ライセンス {#ze87e412}

1995年から AT&amp;T ライセンス不要のフリーソフトになりました。

現在は LGPL v3+ が適用されています。 <!-- cf. https://www.ctan.org/pkg/metapost --> <!-- cf. https://foundry.supelec.fr/scm/viewvc.php/trunk/COPYING.LESSER?root=metapost&view=log -->

#### 開発元サイト {#ib411e54}

- [FusionForge: MetaPost: Project Home](https://foundry.supelec.fr/projects/metapost/) （本家）
- [The MetaPost page](http://cm.bell-labs.com/who//hobby/MetaPost.html) (作者 John D. Hobby のページ)

#### ChangeLog {#q9da79df}

- [FusionForge: MetaPost: SCM Repository](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=metapost)
    - [log](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=metapost&view=log)
    - [CHANGES](https://foundry.supelec.fr/scm/viewvc.php/trunk/CHANGES?view=markup&root=metapost)

## MetaPostプログラミング入門 {#p3fbc416}

### 簡単な線画の作成 {#t3a63dd6}

まず簡単な MetaPost プログラムを作ってみましょう。

<!-- prologues:=3 でないと「Ghostscript で普通に閲覧できるEPSファイル」 -->
<!-- にならないので，最初から付けておく。 -->

```
% line.mp
prologues:=3;
% My first figure.
beginfig(1);
u=100;
draw (u,0)--(2u,u)--(u,2u)--(0,u);
endfig;
end
```

<!-- 最近の習慣では end の後に . は書かない？ -->
<!-- (もちろん，単独の . は字句解析的に無視される。) -->

これは単に4点を3本の線分で結ぶだけです。

このファイルを line.mp という名前で保存します．

```
mpost line
```

を実行すると，beginfig(1); から endfig;
までに描かれた内容が line.1 という EPS ファイルに出力されます。
Ghostscript などで確認してみてください。

最初の prologues:=3; と最後の end は，
今は取りあえず“必ずそう書くもの”と思っておいてください。 <!-- オマジナイ！ -->
TeX と同様に，% 以降はコメントとして無視されます。

もしさらに beginfig(2);……endfig;
が同じ line.mp に書かれていれば，その中身は line.2 に出力されます。
要するに beginfig(1) の引数“1”は拡張子を決めるだけですが，引数は数字（番号）しか使えません。

上の例は単なる折れ線でした。閉じた図形にするには，

```
draw (u,0)--(2u,u)--(u,2u)--(0,u)--cycle;
```

とします。さらに，滑らかな曲線で結ぶには，

```
draw (u,0)..(2u,u)..(u,2u)..(0,u)..cycle;
```

とします。もちろん

```
draw (u,0)--(2u,u)--(u,2u)..(0,u)..cycle;
```

のような使い方もできます。

塗りつぶしや色指定もできます。たとえば

```
% 赤い円盤
fill (u,0)..(2u,u)..(u,2u)..(0,u)..cycle withcolor red;
```

としてみてください。

### 出力ファイル名 {#re6076f2}

デフォルトの line.1，line.2，……
のようなファイル名ではソフトウェアによっては扱い難いかも知れません。
一般の EPS ファイルと同様に .eps の拡張子で出力させるには，
beginfig の前に次を書き込みます。

```
outputtemplate := "%j-%c.eps";
```

これで，ファイル名が line-1.eps，line-2.eps，……となります。
また，

```
outputtemplate := "%j-%3c.eps";
```

と書くと，ファイル名が line-001.eps，line-002.eps，……となります。

### 図に文字を挿入する {#j8ce9e55}

図に文字を入れることもできます。たとえば

<!-- prologues:=3 なので ptmr8r が EPS に埋め込まれる。 -->

```
% redball.mp
prologues:=3;
defaultfont:="ptmr8r"; % フォントはTimes Roman
defaultscale:=1.5; % 文字サイズは15pt
beginfig(1);
u=100;
fill (u,0)..(2u,u)..(u,2u)..(0,u)..cycle withcolor red;
label("Red Ball", (u,u));
endfig;
end
```

のようにすれば，点 (u,u) を中心とする位置に Red Ball と書かれます。
3 行目の defaultfont で使うフォントを指定しています。
defaultfont には，例えば次のような値が指定できます。[^2][^3] <!-- つまりURWクローンフォントの埋込を明示的に指定する。 -->

- cmr10： Computer Modern Roman[^4]
- cmtt10： Computer Modern Typewriter
- ptmr8r： Times Roman
- phvr8r： Helvetica

4 行目の defaultscale:=1.5; はフォントサイズ指定で，
「既定（10pt[^5]）の 1.5 倍である
15pt を指定しています。

<!-- しかし Ghostscript では次のようにして cmr10 などを出力することができます： -->
<!-- GS_LIB という環境変数を CM Type1 フォントのある場所 -->
<!-- （たとえば /usr/share/texlive/texmf-dist/fonts/type1/bluesky/cm） -->
<!-- に設定しておき（あるいはここにある pfb ファイルを /usr/share/ghostscript/fonts -->
<!-- にコピーしておき），Ghostscript のディレクトリの Fontmap -->
<!-- ファイルにたとえば -->
<!-- /CMR10                                  (cmr10.pfb)     ; -->
<!-- /CMMI10                                 (cmmi10.pfb)    ; -->
<!-- /CMR7                                   (cmr7.pfb)      ; -->
<!-- /CMMI7                                  (cmmi7.pfb)     ; -->
<!-- /CMEX10                                 (cmex10.pfb)    ; -->
<!-- などのように書いておきます。 -->
<!-- 別の手として，cmr10.pfb などを CMR10 という名前で /Resource/Font -->
<!-- ディレクトリにコピーしておいてもいいでしょう。 -->

### TeXの機能を使って図に挿入する文字を組版する {#o948ef03}

先に述べた方法ではカーニングやリガチャは入りませんし，
数式を含めることもできません。

ちゃんと組まれたテキストや数式を含ませるため，
MetaPost では「LaTeX で組んだ結果をラベルとして使う」機能を持っています。[^6]

```
% redball2.mp
prologues:=3;
outputtemplate:="%j-%c.eps";
verbatimtex
%&latex
\documentclass{article}
\begin{document}
etex;
beginfig(1);
u=100;
fill (u,0)..(2u,u)..(u,2u)..(0,u)..cycle withcolor red;
label(btex Area is $\pi r^2$ etex, (u,u));
endfig;
end
```

LaTeX での組版を使う場合は，以下のような書き方をします。

- 文字列の代わりに，
    LaTeX のテキストを btex … etex で囲って入れます。

- beginfig より前に，
    LaTeX のプレアンブル部分[^7]を verbatimtex … etex で囲って入れます。
    パッケージの読み込みが必要な場合は，
    ここで \usepackage を書くことができます。

- verbatimtex の直後の行に
    “%&amp;latex”という特殊なコメントを書いておきます。
    これは“TeX のコマンド”として latex を使う[^8]ことを示すものです。

#### TeXコマンドを指定する {#seb297d7}

少し昔の TeX 環境では，特殊コメント“%&amp;latex”がうまく働かない
（“Unable to read mpx file.”というエラーが出る[^9]）
場合があり，この場合はオプションで
「どの TeX のコマンドを利用したいか」
を指定する必要があります。 <!-- うまく働かない理由は： --> <!-- - TeX の first-line parsing が非サポートまたは無効である。 --> <!-- - マジックコメントで指定したフォーマット（latex）とエンジンが不整合。 --> <!--   昔はKpathsea変数 TEX の既定値は tex だったので“tex &latex”となり， --> <!--   latex.fmt は pdfTeX 用だから通らなかった。 --> <!-- 現在は TEX の既定値は etex（つまり pdfTeX エンジン）であるので --> <!-- “etex &latex”となって正常に LaTeX が起動する。 --> <!-- ちなみに，マジックコメントのフォーマットが不整合だった場合，現状では --> <!-- そのコメントは黙って無視されるらしい。昔からそうだったか？ -->

今の場合，latex を起動したいので，

```
mpost -tex=latex redball
```

のようにして起動します。
なお，この場合は特殊コメント %&amp;latex は不要です。 <!-- -tex オプションや TEX 変数はコマンドを指定するもの。 --> <!-- マジックコメントはフォーマットを指定するもの。 -->

※利用する TeX コマンドのデフォルトは Kpathsea 変数 TEX で設定できます。

### 作成した図をLaTeX文書に取り込む {#ee4db6cc}

MetaPost で作成した画像ファイルは，一般的な画像と同様に，
graphicx パッケージの機能を用いて LaTeX 文書に取り込むことができます。

```
% dvipdfmxを利用する場合 (必ず拡張子を .mps にすること)
\documentclass[a4paper,dvipdfmx]{article}
\usepackage{graphicx} \begin{document}
\begin{center}
% MetaPost画像ファイル line.mps を取り込む
\includegraphics{line.mps}
\end{center}
\end{document}
```

一般の画像ファイルの場合と同じく，
dvips や dvipdfmx などのドライバオプションを適切に指定する
（あるいは指定しない[^10]）
必要があります。

#### 画像取り込みに関する注意（dvips，dvipdfmx） {#u6394f35}

dvips や dvipdfmx で取り込むことが前提の場合は，
MetaPost ソースの先頭の

```
prologues:=3;
```

は不要です。
（書いてもかまいません。） <!-- どちらの方がいいんだろう？ -->

dvipdfmx は EPS 形式の画像ファイルを自分ではサポートせず，
EPS 画像の取り込みには Ghostscript の助けを必要とします。
ところが例外的に，MetaPost で生成した EPS 画像ファイル
（これを特に“MPS 形式”と呼ぶことがあります）
については自力で取り込むことができます。ただし，TeX Live 2016
以降では，拡張子を .mps
にしないと，正しい位置に出力されません。拡張子が .mps でない場合，
MetaPost で作成した EPS を正しい位置に出力するためには，dvipdfmx
や xdvipdfmx に --mvorigin オプションを付ける必要があります。
以下に述べる pdfTeX の場合と同じように拡張子を .mps にすると
いうことを覚えておいてください。

#### 画像取り込みに関する注意（pdfTeX） {#m89b0ecd}

pdfTeX も dvipdfmx と同様に，一般の EPS 画像をサポートせず，
MPS 画像に限ってサポートします。
この場合，outputtemplate を指定して，
出力ファイルの拡張子を .mps にする必要があります。
prologues:=3; は不要です。

```
% line.mp
outputtemplate:="%j-%c.mps";
beginfig(1);
...
```

LaTeX 文書の書き方はいつも通りですが，
念のために示しておきます。

```
\documentclass[a4paper]{article}
\begin{document}
\begin{center}
% MetaPost出力ファイルを取り込む
\includegraphics{line-1.mps}
\end{center}
\end{document}
```

環境によっては，拡張子を .eps にしても取り込めますが，
この場合は一般の EPS 画像として扱われるため，
Ghostscript が利用されます。
また，prologues:=3 が必要となります。

拡張子が .mps でも .eps でもない場合は，画像の取り込みは失敗します。

### ラベルに日本語を入れる {#h4d89172}

日本語を扱うには，
オリジナルの MetaPost（mpost）の代わりに upmpost を使います。 <!-- pmpost があって upmpost がない，という状況はほぼありえないみたい。 --> <!-- (昔は jmpost だったので。) -->
この場合，ファイルの文字コードは UTF-8 にしてください。[^11]

ラベルに日本語の文字列を使った例を示します。

```
% jaredball.mp; 文字コードはUTF-8
defaultfont:="uprml-h"; % フォントは明朝体
defaultscale:=1.5; % 文字サイズは15pt
beginfig(1);
u=100;
fill (u,0)..(2u,u)..(u,2u)..(0,u)..cycle withcolor red;
label("赤いボール", (u,u)); % ラベルが日本語
endfig;
end
```

日本語を出力する時は，defaultfont の値は次のようにします。 <!-- VFは使えないことに改めて注意。 -->

- uprml-h： 標準の明朝体[^12]
- upgbm-h： 標準のゴシック体

このソースファイルを次のコマンドでコンパイルすると，
画像ファイル jaredball.1 が得られます。

```
upmpost jaredball
```

残念ながら，日本語フォントが含まれる場合は，
MetaPost だけでは、単体で使える EPS 画像ファイルを作ることはできません。[^13]
先に示した方法で LaTeX 文書に取り込む必要があります。

#### 完全なEPSファイルを作る {#y545eb1a}

「図を一度 LaTeX 文書に取り込む」ことで完全な EPS 画像ファイルを作れます。

```
% jaredball.tex
\documentclass[dvips]{article}
\usepackage{graphicx}
\pagestyle{empty}% ページ番号を表示しない
\begin{document}% 当該の図だけを含める
\includegraphics{jaredball.1}% MetaPost出力ファイル
\end{document}
```

このような「図だけを含む文書」を作り，
これを以下のコマンドで EPS 画像ファイルに変換します。

```
latex jaredball
dvips -E jaredball -o jaredball.eps
```

ここで，dvips の -E オプションは，余白を削った EPS ファイルを作ることを指示します。

※要するに一度 LaTeX 文書に取り込めばよいので，この手順の他に，
「standalone クラスを利用して PDF 画像に変換する」
などの様々な方法が考えられます。

#### 日本語のラベルをTeXで組版する {#wc9b2dc3}

ラベルを TeX で組版する場合も，
日本語を使うことができます。

```
% jaredball2.mp; 文字コードはUTF-8
verbatimtex
% プレアンブルをuplatex用のものにする
\documentclass[uplatex]{jsarticle}
\begin{document}
etex;
beginfig(1);
u=100;
fill (u,0)..(2u,u)..(u,2u)..(0,u)..cycle withcolor red;
label(btex 面積は$\pi r^2$ etex, (u,u)); % ラベルが日本語
endfig;
end
```

この場合，MetaPost が呼び出す TeX コマンドを uplatex にする必要があるので，
以下のコマンドを実行します。
（verbatimtex に特殊コメントは書きません。）

```
upmpost -tex=uplatex jaredball2
```

ここから完全な EPS 画像ファイルを得るための手順は，
先の jaredball.mp のときと同じです。

#### PSfragの利用 {#gd4ef62a}

upmpost が利用できない場合は，次のようにして PSfrag で日本語を使うことができます。
（この場合は dvips で LaTeX 文書に取り込むことが前提となります。）

先ほどの redball.mp を使って

```
% upLaTeX文書; 文字コードはUTF-8
\documentclass[dvips,uplatex]{jsarticle}
\usepackage{graphicx,psfrag}
\begin{document}
\begin{center}
%\psfrag{<元文字列>}[<先位置>][<元位置>][<スケール>]{<先文字列>}
\psfrag{Red Ball}[c][c][1.5]{赤いボール}
\includegraphics{redball.1}
\end{center}
\end{document}
```

のようにすれば，“Red Ball”の文字列が“赤いボール”に置き換わります。
ここで，\psfrag のオプション \[c\]\[c\] は置換前と後の文字列の中心を合わせることを示しています。

### その他の注意点 {#ddd5a5aa}

Unix 版（web2c 版）では曲線 ..
でつなぐ場合の最大長はデフォルトでは 2000 点です。

## 例 {#nda680a6}

関数のグラフを描きます。

```
% graph.mp
prologues:=3;
verbatimtex
%&latex
\documentclass{article}
\begin{document}
etex;
beginfig(1);
u=1cm;
drawarrow (-.5u,0)--(4u,0);
drawarrow (0,-.5u)--(0,2u);
pickup pencircle scaled 1pt;
draw (0,0){up}
for i=1 upto 8: ..(i/2,sqrt(i/2))*u endfor;
label.lrt(btex $\sqrt{x}$ etex, (3,sqrt(3))*u);
label.rt(btex $x$ etex, (4,0)*u);
label.top(btex $y$ etex, (0,2)*u);
label.llft(btex O etex, (0,0));
endfig;
end.
```

もっとたくさんの例が
[Metapost : exemples](http://www.math.jussieu.fr/~zoonek/LaTeX/Metapost/metapost.html)
というページにあります。

#### おまけ {#nec162e2}

MetaPost を併用して[等高線を描くプログラム](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/contour.html)
を作ってみました。

## 発展的事項 {#ze022f07}

<!-- Advanced Topics! -->

<!-- *outputtemplate -->
<!-- 「入門」で書いた内容で十分だろう。 -->
<!-- バージョン1.200より前では出力ファイル名は -->
<!-- filenametemplate "%j-%3c.mps"; -->
<!-- という命令で指定していた。 -->

### 出力画像形式 {#w2aa9ee3}

変数 outputformat で出力画像形式を指定します。

- outputformat:="eps" ： PostScript（MPS／EPS）形式。
- outputformat:="svg" ： SVG 形式（v1.200 以上でサポート）
- outputformat:="png" ： PNG 形式（v1.770 以上でサポート）

### prologues変数 {#mf50369b}

PostScript 出力の場合，prologues 変数は以下の意味をもちます。

- prologues:=0 ： LaTeXで取り込むことを前提とした形式（MPS 形式）で出力します。
- （prologues:=1 は非推奨です。）
    <!-- え，troff？ 何それ？ ズンドコキヨシするやつ？ -->

- prologues:=2 ： EPS 形式で出力しますが，フォントを埋め込みません。
- prologues:=3 ： フォントを埋め込んだ完全な EPS 形式で出力します。

SVG 出力の場合は通常は prologues:=3; を指定します。

PNG 出力の場合は prologues の設定は無視されます。

### 色の指定 {#cfcd2a0f}

```
draw fullcircle withcolor (0.85,0,0);   % RGB色モデル
draw fullcircle withcolor (1,0,0.25,0); % CMYK色モデル
draw fullcircle withcolor 0.4;          % グレースケール
draw fullcircle withoutcolor;           & 色指定無し
```

色を変数に代入する場合は，
color や cmykcolor という型を指定します。
（グレースケールの色は単なる数値（numeric）です。）

```
color myred; myred = (0.85,0,0);
cmykcolor male; male = (1,0,0.25,0);
```

### フォントマップ指定 {#x8ee0931}

MetaPost では pdfTeX と同じ形式のフォントマップファイルを使用します。
デフォルトのフォントマップファイルは mpost.map です。 <!-- 大昔は psfonts.map を読んでたらしい。 -->

fontmapfile 命令を用いてマップファイルを追加できます。

- fontmapfile "+foo.map" ： 重複を無視して foo.map の内容を追加します。
- fontmapfile "=foo.map" ： 重複を置き換えて foo.map を追加します。
- fontmapfile "-foo.map" ： foo.map 内の記述とマッチするエントリを全て削除します。
    <!-- fontmapline "foo.map" もあるけど，まず使われないだろう。 -->

また，fontmapline 命令を用いると単独のマップ行を追加・削除できます。

```
fontmapline "+foo bar <baz.pfb";  %追加
fontmapline "=foo bar <baz.pfb";  %置換
fontmapline "-foo";               %削除
```

### 有効な数値の範囲 {#m052ae8f}

MetaPost では数値は32ビットの固定小数点数
（符号1ビット，整数部15ビット，小数部16ビット）
として表されます。

- 最小の正の値は 2⁻¹⁶（≒0.00002）で，変数 epsilon がこの値をもちます。
- 最大の正の値は 2¹⁵−epsilon（≒32767.99998）です。

従って，扱える数値の範囲は −32767.99998～32767.99998 となりますが，
安全を期すため，MetaPost では絶対値が 4096 以上の数値を代入しようとすると警告が出ます。
warningcheck:=0; を設定するとこの警告が出なくなります。

新しい MetaPost では，数値の内部表現について，複数の方式が用意されていて，
起動時の -numbersystem オプションで選べるようになっています。

- -numbersystem=scaled（既定）： 従来と同じ固定小数点数。
- -numbersystem=double ： IEEEの倍精度浮動小数点数。
- -numbersystem=decimal ： 十進の多倍長浮動小数点数。（v1.890 以上）
- -numbersystem=binary ： 二進の多倍長浮動小数点数。（v1.999 以上）
    - decimal と binary の場合はさらに変数 numberprecision で（十進換算の）精度を指定できます。最大値は 1000 で，デフォルト値は 34 です。

例えば，以下のような入力ファイルを用意します。

```
% e900.mp
numberprecision:=900;
show mexp(256); % mexp(r) = e^(r/256)
end
```

これを次のコマンドでコンパイルすると，
e（自然対数の底）の値が 900 桁の精度で得られます。

```
mpost -numbersystem=binary e900
```

実際の結果（読みやすさのため整形した）は次のようです。
これは最後の数字（8）を除いて正しいものです。

```
2.71828 18284 59045 23536 02874 71352 66249 77572 47093 69995 95749 66967 62772
  40766 30353 54759 45713 82178 52516 64274 27466 39193 20030 59921 81741 35966
  29043 57290 03342 95260 59563 07381 32328 62794 34907 63233 82988 07531 95251
  01901 15738 34187 93070 21540 89149 93488 41675 09244 76146 06680 82264 80016
  84774 11853 74234 54424 37107 53907 77449 92069 55170 27618 38606 26133 13845
  83000 75204 49338 26560 29760 67371 13200 70932 87091 27443 74704 72306 96977
  20931 01416 92836 81902 55151 08657 46377 21112 52389 78442 50569 53696 77078
  54499 69967 94686 44549 05987 93163 68892 30098 79312 77361 78215 42499 92295
  76351 48220 82698 95193 66803 31825 28869 39849 64651 05820 93923 98294 88793
  32036 25094 43117 30123 81970 68416 14039 70198 37679 32068 32823 76464 80429
  53118 02328 78250 98194 55815 30175 67173 61332 06981 12509 96181 88159 30416
  90351 59888 85193 45807 27386 67385 89422 87922 84998 92086 80582 57492 79610
  48419 84443 63463 24496 84875 60233 62482 70419 78623 20900 21609 90235 30436
  99418 49146 31409 34317 38143 64054 62531 52096 18369 08887 07018
```

### 何もしない命令 {#r67b92ba}

TeX には「何もしない」プリミティブ命令 \relax がありましたが，
MetaPost にも「何もしない」プリミティブ命令があります。
それは“\”（単独のバックスラッシュのトークン）です。

実は relax というトークンもあって，これも何もしないのですが，
これは単なる \ のコピーです。

```
let relax = \;  % ignore the word `relax', as in TeX
```

従って，MetaPost では「\relax」は「\」と「relax」の列となるので，
やっぱり何もしません。

### フォーマット {#f9d796f6}

TeX と同様に，MetaPost にも「フォーマット」
（入力ファイルの読込以前に予め読み込まれるプログラム）
という概念があります。

通常は，フォーマット名は起動コマンド名と同じになります。
つまり，mpost を起動すると，入力ファイルの前に mpost.mp が読み込まれるわけです。ここでもし mpost(.exe) の実行ファイルのコピー（やリンク）を metafun(.exe) という名前で作ってそれを実行すると，フォーマットとして metafun.mp が読み込まれます。また後述の通り，コマンドラインのオプションでフォーマットを指定することもできます。

かつては，TeX の .fmt ファイルと同じようなメモリダンプのファイル（拡張子 .mem）が存在しましたが，v1.500 において廃止され，現在では代わりにソースファイルを読む方式が採られています。

MetaPost のフォーマットには次のようなものがあります。 <!-- 厳密にいうと TeX の“フォーマット”ではなくて --> <!-- “マクロパッケージ”の方に相当するもの，だけど --> <!-- 何か適当な呼び方があるのかな？ -->

- plain フォーマット（plain.mp）：
    METAFONT の plain と互換のフォーマット。
    現状の mpost.mp は単に plain.mp を input しているだけなので，
    “mpost”は実質的に「plain MetaPost のコマンド」となっている。

- MetaFun フォーマット（metafun.mp）：
    Hans Hagen 氏作製のフォーマット。

### コマンドラインの構造 {#oeac4b21}

MetaPost コマンド（mpost など）のコマンドラインの書式は，
一般的には，次のようであると解説されます。

```
mpost [-<オプション>]... <入力ファイル>[.mp]>
```

しかし，MetaPost のコマンドラインの書式は，
実際には次のようになっています。

```
mpost [-<オプション>]... [&<フォーマット>] [<MetaPostソース>...]
```

TeX のコマンドラインについて知っている人ならすぐに気づくように，
これは TeX のコマンドラインと全く同じ構造です。

- “&amp;”引数または -mem オプションでフォーマット名を指定します。[^14]
- フォーマット名が指定されない場合は，コマンド名（mpost）をフォーマット名とします。
- “-”でも“&amp;”でも始まらない語があった場合は，それ以降を“ソースの先頭行”と見なします。
- （これも TeX と同様で）MetaPost の入力の先頭行は特別です。
    - 先頭行が“\”で始まらない場合は，行の最初の語を入力ファイル名と見なし，
        それを読んだ後で，（まだ終了していないなら）残りの部分を MetaPost コードと解釈して実行します。
    - 先頭行が“\”で始まる場合は，その行全体をMetaPost コードと解釈して実行します。

例えば[^15]

```
mpost null show sind 30; end
```

を実行すると，null.mp（実質的に空のファイル）を読み込んでから，
“sind 30”の値を表示して終了します。
また，

```
mpost \show sind 30; end
```

を実行すると，ファイルを何も読み込まずに，
sind 30”の値を表示して終了します。
（実はここで，先ほど紹介した「何もしない」命令“\”が使われています。）

## MetaPostで計算する {#a86a7284}

MetaPost の計算能力は、「図を描く」こと以外にも活用できます。

### 線形方程式を解く {#ecbcc086}

MetaPost には「線形方程式を解く」という面白い機能があります。

```
% tsurukame.mp
tsuru+kame=36; % 鶴と亀があわせて36匹
2tsuru+4kame=100; % 足の数はあわせて100本
show tsuru; show kame; % 鶴と亀の数は？
end
```

出力：

```
>> 22
>> 14
```

### ページレイアウトの計算 {#x334001d}

方程式を解く機能の応用です。

```
% pagelayout.mp
paperheight=257mm; % ページ縦幅
lineheight=9pt; lineskip=15pt; nlines=22; % 行
topmargin/2=botmargin/3; % 天地マージンの比率は2:3
% 成立すべき条件
bodyheight = (nlines-1)*(lineheight+lineskip)+lineheight;
topmargin+bodyheight+botmargin=paperheight;
% マージンの値(mm単位)は？
show topmargin/mm; show botmargin/mm;
end
```

出力：

```
>> 30.68048
>> 46.02074
```

- “topmargin/botmargin=2/3”と書くと“未知数/未知数”となり、
    線形でないので受け付けられません。

- MetaPost では、“mm”や“pt”などの単位は単なる数値（numeric）で、bp 単位の数値を表します。
    （つまり 1in = 72。）

### 線形変換のパラメタを求める {#aaf834ef}

MetaPost では線形変換（アフィン変換）がデータ型としてサポートされています。

次の例は，未知の線形変換変換について，変換前後の点の座標の組を 3 つ与えることでその変換のパラメタを求めています。

```
transform T;
(5,5) transformed T = (-4,6);
(0,5) transformed T = (0,12);
(5,0) transformed T = (6,-2);
show T;
end
```

出力：

```
>> (10.00002,3.99998,-0.8,-2,-1.2,1.59999)
```

このパラメタの列は PostScript や PDF における変換行列の要素の並びと同じなので，そのままコード記述に利用できます。

```
(PostScriptコード)
[10 4 -0.8 -2 -1.2 1.6] concat
(PDF描画命令)
10 4 -0.8 -2 -1.2 1.6 cm
```

### パス情報の表示 {#w983f163}

MetaPost では、点列を .. で結ぶと“いいように”曲線を描いてくれます。一方で、TikZ はそこまで気が利かないなので、ベジェ曲線を描くときには自分で制御点を指定する必要があります。TikZ を常用していて「MetaPost のように楽に曲線が作れればよいのに」と思う人がいるかもしれません。

MetaPost はプログラミング言語なので、構成したパスについて、ただ描くだけでなく端末やログにその値を出力させることができます。この機能を利用して、「MetaPost にパスを構成させてその結果を TikZ に持っていく」という使い方ができます。

```
tracingonline := 1; % パス情報を端末に表示
path heart;
heart := (0,40)..(10,50)..(20,40)..(8,20)..(0,0); % 右側
% 鏡像で作った左側とつなげて閉じたパスにする
heart := heart--(reverse(heart xscaled -1))--cycle;
show heart; % パスの内容を表示
end
```

先頭の「tracingonline := 1」はパス情報を端末にも出力することを指示します。（デフォルトではパスや図画（picture）のような情報量の多いものを show する場合にはログにのみ出力されます。）このプログラムを実行すると、端末とログに以下のように出力されます。

```
>> Path at line 6:
(0,40)..controls (-0.14027,45.57991) and (4.42009,50.14027)
 ..(10,50)..controls (15.3734,49.86491) and (19.58928,45.43672)
 ..(20,40)..controls (20.61757,31.82521) and (13.14642,26.31213)
 ..(8,20)..controls (3.35663,14.30487) and (0.56523,7.32637)
 ..(0,0)..controls (0,0) and (0,0)
 ..(0,0)..controls (-0.56523,7.32637) and (-3.35663,14.30487)
 ..(-8,20)..controls (-13.14642,26.31213) and (-20.61757,31.82521)
 ..(-20,40)..controls (-19.58928,45.43672) and (-15.3734,49.86491)
 ..(-10,50)..controls (-4.42009,50.14027) and (0.14027,45.57991)
 ..(0,40)..controls (0,40) and (0,40)
 ..cycle
```

幸いなことに、TikZ における曲線指定の文法は MetaPost のものを模倣しています。だから、ここで得られた出力をそのまま \draw や \shade などのパス指定として用いることができます。

```
% pdfLaTeX document
\documentclass{article}
\usepackage{tikz}
\begin{document}
\begin{center}\begin{tikzpicture}[x=1mm,y=1mm]
 \shade[left color=red!20!magenta!20,right color=red!20!magenta!70,
   draw=red!70!black,double=red!20!magenta,line width=1mm,double distance=1mm]
 (0,40)..controls (-0.14027,45.57991) and (4.42009,50.14027)
  ..(10,50)..controls (15.3734,49.86491) and (19.58928,45.43672)
  ..(20,40)..controls (20.61757,31.82521) and (13.14642,26.31213)
  ..(8,20)..controls (3.35663,14.30487) and (0.56523,7.32637)
  ..(0,0)..controls (0,0) and (0,0)
  ..(0,0)..controls (-0.56523,7.32637) and (-3.35663,14.30487)
  ..(-8,20)..controls (-13.14642,26.31213) and (-20.61757,31.82521)
  ..(-20,40)..controls (-19.58928,45.43672) and (-15.3734,49.86491)
  ..(-10,50)..controls (-4.42009,50.14027) and (0.14027,45.57991)
  ..(0,40)..controls (0,40) and (0,40)
  ..cycle;
\end{tikzpicture}\end{center}
\end{document}
```

### パスに対する操作 {#w31b76fd}

PostScript や PDF の描画で次のようなベジェ曲線があったとします。

```
(PostScript)
-20 40 moveto 50 100 40 10 80 30 curveto
(PDF)
-20 40 m 50 100 40 10 80 30 c
(MetaPost)
(-20,40)..controls(50,100)and(40,10)..(80,30)
```

ここで，この曲線の「x 座標が非負の部分」を取り出したベジェ曲線のパラメタを知りたいとします。他のプログラミング言語で求めるプログラムを書くのは大変ですが，MetaPost では次のように簡単に書けます。

```
tracingonline := 1; % パス情報を端末に表示
show ((-20,40)..controls(50,100)and(40,10)..(80,30))
    cutbefore ((0,0)--(0,100));
end
```

出力：

```
>> Path at line 3:
(-0.00002,54.4936)..controls (48.42572,81.8857) and (44.30908,12.15454)
 ..(80,30)
```

“&lt;パス1> cutbefore &lt;パス2>”は，「パス1をパス2でぶった切って，前の部分を落として後ろだけを残したパス」を表します。先のプログラムでは，&lt;パス2> として「x 座標が 0 の垂直線分」を与えています。（なお，「前だけを残す」ための演算子 cutafter も存在します。）

出力の曲線を PostScript や PDF に戻すと以下のようになります。

```
(PostScript)
0 54.49 moveto 48.43 81.89 44.31 12.15 80 30 curveto
(PDF)
0 54.49 m 48.43 81.89 44.31 12.15 80 30 c
```

## 不具合 {#z01f418a}

### TeX Live 2013 の MetaPost 1.803 で異常な TFM ファイルが生成される {#c01c14c0}

TeX Live 2014 (MetaPost 1.902), W32TeX (MetaPost 1.999) では修正されています．

- [TeXLive 2013のmf2pt1がおかしい件](http://qiita.com/_yyu_/items/b1fac90074545ccee727)
- [http://tex.stackexchange.com/questions/122644/wrong-tfm-generated-by-mf2pt1-in-texlive-2013/175003#175003](http://tex.stackexchange.com/questions/122644/wrong-tfm-generated-by-mf2pt1-in-texlive-2013/175003#175003)

## 関連ソフトウェア {#o3813278}

### MePoTeX {#s054565f}

- [MetaPost in TeX (MePoTeX)](http://minamo.my.coocan.jp/metapost.html)

MetaPost で作成した図を LaTeX 文書に取り込む際に，
図のソースを LaTeX 文書に埋め込んで図の生成と取り込みを自動化する、
という機能を提供する LaTeX パッケージです。

### Asymptote {#fb168fac}

[Asymptote](/Asymptote/) という MetaPost を発展させたベクトルグラフィック記述言語もあります。

## 関連リンク {#sa284452}

- [MetaPost](http://www.sat.t.u-tokyo.ac.jp/~hideyuki/metapost/)（[鈴木秀幸さん](http://www.sat.t.u-tokyo.ac.jp/~hideyuki/index-j.html)による日本語MetaPost）
- [MetaPost 覚書](http://lagendra.s.kanazawa-u.ac.jp/ogurisu/manuals/metapost/mpost.html)（小栗栖さんによるリファレンスマニュアル）
- [TeX&amp;MetaPostであそぼう](http://minamo.my.coocan.jp/metapost.html)(みなもさんによるMePoTeX 配布など)
- [MetaPost Basics: Drawing lines, curves and shapes and using color](http://latex.org/component/content/article/61-latexs-friends-others/486-metapost-lines-curves-shapes-color)
- [Function Grapher](http://www.tlhiv.org/mpgraph/) WEB application by MetaPost

<!-- - -- - Wiki移行前にあった，奥村氏による謝辞文： -->
<!-- この文章は角藤さんの -->
<!-- [[MetaPost の紹介 (PDF) [Internet Archive]:http://web.archive.org/web/20030318073200/http://www.fsci.fuk.kindai.ac.jp/~kakuto/win32-ptex/mpost.pdf]] -->
<!-- という文章に触発されて書いたものです。角藤さんに感謝いたします。」 -->

[^1]: ただし文書タイトルだけは logo フォントで“METAPOST”と書かれています。ちなみに同マニュアルにおいて，METAFONT は常に logo フォントの“METAFONT”で書かれています。
[^2]: なお，"ptmr8r" や "phvr8r" の指定は TeX Live では大丈夫ですが，W32TeX ではフォント（updmap）の設定により上手くいかないかも知れません。その場合は "utmr8r" や "uhvr8r" を代わりに使ってください。
[^3]: Tex 者向けの解説： 要するに TFM の名前を指定します。ただし，VF はサポートされていません。
[^4]: Computer Modern フォントの文字コードは少し特殊なので，空白が他の文字に化けてしまいます。
[^5]: 既定のフォントサイズはフォントにより異なりますが，先に列挙したものでは全て 10pt となります。
[^6]: LaTeX 以外の TeX（plain TeX など）も使えますが，ここでは LaTeX を使います。
[^7]: 正確にいうと，「LaTeX のソースにおいて，btex～etex のテキスト以前に書くべきもの全て」です。だから「\begin{document}」も含まれますし，それ以降にも何か書くかもしれません。
[^8]: つまり，「plain TeX ではなく LaTeX を使う」ということです。
[^9]: MetaPost が中で TeX を実行してそれが異常終了した場合にこのエラーが出ます。この場合，“mpxerr.log”というファイルに TeX 実行のログが出ます。
[^10]: pdfTeX，LuaTeX，XeTeX などの PDF を出力するエンジンを使う場合はドライバオプションは指定しません。
[^11]: オプション --kanji=sjis を付ければ SJIS にもできますが……。
[^12]: “標準の”明朝体・ゴシック体というのは，“upLaTeX のデフォルト設定の \mcfamily や \gtfamily で使われるフォント”のことです。
[^13]: これは日本語フォントを EPS ファイルに“埋め込む”ことができないからです。
[^14]: -mem は TeX の -fmt に対応します。TeX の .fmt と同様の .mem ファイルがかつてあったために、この名前になっています。
[^15]: ここではコマンドシェルによる解析は入らないものとします。
