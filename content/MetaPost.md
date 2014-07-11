---
title: "MetaPost"
url: "/MetaPost/"
date: 2004-09-22T22:42:45Z
pukiwiki: "MetaPost"
---

# MetaPost

## MetaPost {#v0160eb8}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## はじめに {#q0dc30bf}

「この文章は角藤さんの
[MetaPost の紹介 (PDF) \[Internet Archive\]](http://web.archive.org/web/20030318073200/http://www.fsci.fuk.kindai.ac.jp/~kakuto/win32-ptex/mpost.pdf)
という文章に触発されて書いたものです。角藤さんに感謝いたします。」

↑この謝辞は、この文章がWikiに移される前に[奥村さん](http://cise.edu.mie-u.ac.jp/~okumura/)が記したものです。<br>
この文章がWikiに移された後は不特定多数の方が加筆しているので、謝辞は妥当なものではなくなっているかもしれません。<br>

## MetaPost とは {#e4617397}

MetaPost は John D. Hobby が作った [METAFONT](/METAFONT/) 類似のソフトです。<br>
METAFONT が gf 形式のフォントを出力するのに対して，
MetaPost は PostScript（EPS）形式のファイルを出力します。<br>

MetaPost の詳細は

```
texdoc metapost
```

で確認してください。<br>

[Asymptote](/Asymptote/) という MetaPost を発展させたベクトルグラフィック記述言語もあります。<br>

- [FusionForge: MetaPost: Project Home](https://foundry.supelec.fr/projects/metapost/) （本家）
- [The MetaPost page](http://cm.bell-labs.com/who//hobby/MetaPost.html) (作者 John D. Hobby のページ)

### License {#ze87e412}

1995年から AT&amp;T ライセンス不要のフリーソフトになりました。

[LGPLv3](https://foundry.supelec.fr/scm/viewvc.php/trunk/COPYING.LESSER?root=metapost&view=log)

### ChangeLog {#q9da79df}

- [FusionForge: MetaPost: SCM Repository](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=metapost)
    - [log](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=metapost&view=log)
    - [CHANGES](https://foundry.supelec.fr/scm/viewvc.php/trunk/CHANGES?view=markup&root=metapost)

## MetaPost 日本語版 {#vcd749fc}

### TeX Live {#l36a3b95}

TeX Live の場合は

- [tlptexlive](http://www.preining.info/blog/software-projects/tlptexlive/)

から入手可能です．<br>

#### インストール (Windows) {#h80cb69d}

```
PS C:\Users\$Env:USERNAME> tlmgr update --self --all
PS C:\Users\$Env:USERNAME> tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
PS C:\Users\$Env:USERNAME> tlmgr pinning add tlptexlive "*"
PS C:\Users\$Env:USERNAME> tlmgr install pmetapost
```

#### インストール (Cygwin) {#w370c0b7}

```
$ tlmgr update --self --all
$ tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
$ tlmgr pinning add tlptexlive "*"
$ tlmgr install pmetapost
$ tlmgr path add
```

#### インストール (OS X) {#q808c38d}

```
$ sudo tlmgr update --self --all
$ sudo tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
$ sudo tlmgr pinning add tlptexlive '*'
$ sudo tlmgr install pmetapost
```

#### インストール (Linux) {#adc6bf92}

```
$ sudo tlmgr update --self --all
$ sudo tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
$ sudo tlmgr pinning add tlptexlive '*'
$ sudo tlmgr install pmetapost
$ sudo tlmgr path add
```

### W32TeX {#ab245e27}

W32TeX には MetaPost の日本語版 (upmpost) が含まれています．<br>

## 不具合 {#z01f418a}

### TeX Live 2013 の MetaPost 1.803 で異常な TFM ファイルが生成される → TeX Live 2014 の MetaPost 1.902 以降にアップデート {#c01c14c0}

TeX Live 2014 (MetaPost 1.902), W32TeX (MetaPost 1.999) では修正されています．<br>

- [TeXLive 2013のmf2pt1がおかしい件](http://qiita.com/_yyu_/items/b1fac90074545ccee727)
- [http://tex.stackexchange.com/questions/122644/wrong-tfm-generated-by-mf2pt1-in-texlive-2013/175003#175003](http://tex.stackexchange.com/questions/122644/wrong-tfm-generated-by-mf2pt1-in-texlive-2013/175003#175003)

## MetaPostプログラミング入門 {#p3fbc416}

### 簡単な線画の作成 {#t3a63dd6}

まず簡単なMetaPostプログラムを作ってみましょう。

```
beginfig(1);
u=100;
draw (u,0)--(2u,u)--(u,2u)--(0,u);
endfig;
end.
```

これは単に4点を3本の線分で結ぶだけです。

このファイルをたとえば test.mp
という名前で UTF-8 で保存します．<br>

日本語を使用する場合は

```
upmpost test
```

日本語を使用しない場合は

```
mpost test
```

と打ち込むと，beginfig(1); から endfig;
までに描かれた内容が test.1 という EPS ファイルに出力されます。<br>
Ghostscript などで確認してみてください。<br>

もしさらに beginfig(2);……endfig;
が同じ test.mp に書かれていれば，その中身は test.2
に出力されます。<br>
要するに beginfig() は拡張子を決めるだけですが，
拡張子は数字（番号）しか使えません。<br>

上の例は単なる折れ線でした。<br>
閉じた図形にするには，

```
draw (u,0)--(2u,u)--(u,2u)--(0,u)--cycle;
```

とします。<br>
さらに，滑らかな線で結ぶには，

```
draw (u,0)..(2u,u)..(u,2u)..(0,u)..cycle;
```

とします。<br>
もちろん

```
draw (u,0)--(2u,u)--(u,2u)..(0,u)..cycle;
```

のような使い方もできます。<br>

塗りつぶしや色指定もできます。<br>
たとえば

```
fill (u,0)..(2u,u)..(u,2u)..(0,u)..cycle withcolor red;
```

としてみてください。

### 図に文字を挿入する {#j8ce9e55}

文字を入れることもできます。<br>
たとえば

```
prologues:=1;
defaultfont := "rptmr";
defaultscale := 1.5;
beginfig(1);
u=100;
fill (u,0)..(2u,u)..(u,2u)..(0,u)..cycle withcolor red;
label("Red Ball", (u,u));
endfig;
end.
```

のようにすれば，点 (u,u) を中心とする位置に Red Ball と書かれます。<br>
このように文字を入れる場合は，
PostScript フォントを指定し，
最初に prologues:=1; としておけば，
独立のEPSとして使えます。<br>
ただし，
defaultfont := "rptmr";
のような命令でデフォールトのフォント名を標準的な PS
フォントに指定しておく必要があります（rptmr
は Times-Roman の TeX での名前です）。<br>
そうでなければ cmr10 になってしまい，一般のプリンタでは出力できません。<br>

> しかし Ghostscript では次のようにして cmr10 などを出力することができます：
> GS_LIB という環境変数を CM Type1 フォントのある場所
> （たとえば /usr/share/texlive/texmf-dist/fonts/type1/bluesky/cm）
> に設定しておき（あるいはここにある pfb ファイルを /usr/share/ghostscript/fonts
> にコピーしておき），Ghostscript のディレクトリの Fontmap
> ファイルにたとえば
>
> ```
> /CMR10                                  (cmr10.pfb)     ;
> /CMMI10                                 (cmmi10.pfb)    ;
> /CMR7                                   (cmr7.pfb)      ;
> /CMMI7                                  (cmmi7.pfb)     ;
> /CMEX10                                 (cmex10.pfb)    ;
> ```
>
> などのように書いておきます。<br>
> 別の手として，cmr10.pfb などを CMR10 という名前で /Resource/Font
> ディレクトリにコピーしておいてもいいでしょう。<br>

### 作成した図をTeX文章に取り込む {#ee4db6cc}

TeX/LaTeX の文書の中に組み込んで使う場合は，
逆に prologues:=1; は指定しません。<br>
この場合，たとえば

```
\documentclass[uplatex]{jsarticle}
\usepackage[dvips]{graphicx}
\begin{document}
……
\begin{center}
\includegraphics{test.1}
\end{center}
……
\end{document}
```

のようにして組み込み，

```
uplatex test
```

として処理して

```
dvips test -o test.ps
```

と打ち込むと test.ps というPostScriptファイルができますので，
Ghostscriptで見るか，PostScriptプリンタに送ります。<br>

ここで

```
\documentclass{article}
\usepackage[dvips]{graphicx}
\pagestyle{empty}
\begin{document}
\includegraphics{test.1}
\end{document}
```

のように図だけを含むTeXファイルから dvi を作り，

```
dvips -E test -o test.eps
```

のように dvips の -E オプションを使えば，
本物の EPS ファイルになり，
TeX 以外のアプリケーションに取り込むこともできます。<br>

### TeXの機能を使って図に挿入する文字を組版する {#o948ef03}

上のような方法ではカーニングやリガチャは入りませんし，
数式を含ませることもできません。<br>
ちゃんと組まれた文や数式を含ませるには，次のように label
中に btex …… etex で囲んで入れます。<br>

```
verbatimtex
\documentclass{article}
\begin{document}
etex;
beginfig(1);
u=100;
fill (u,0)..(2u,u)..(u,2u)..(0,u)..cycle withcolor red;
label(btex Area is $\pi r^2$ etex, (u,u));
endfig;
end.
```

このように TeX や LaTeX の文書が含まれている場合は，
TeX または LaTeX を起動するコマンドをあらかじめ環境変数 TEX
で指定しておく必要があります。<br>
たとえば上の例で LaTeX を起動するコマンドが uplatex の場合は<br>
B Shell 系 (bash, zsh など) であれば

```
export TEX=uplatex
```

C Shell 系 (tcsh など) であれば

```
setenv TEX uplatex
```

としてから

```
upmpost test
```

と打ち込みます。

なお、比較的新しい TeX 環境では、makempx が利口になっており、

```
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
end.
```

と書いておくだけで、自動的に latex を使ってくれます。<br>
ただしその場合の TEX
変数は、latex.fmt に対するエンジンでなければいけません。(最近のものでは
pdftex)。<br>

### PSfragの利用 {#gd4ef62a}

日本語版MetaPostが利用できない場合は，次のようにして PSfrag で日本語を使うことができます。<br>
さきほどの例で（prologues:=1; を指定しておき）

```
\documentclass[uplatex]{jsarticle}
\usepackage[dvips]{graphicx,psfrag}
\begin{document}
……
\begin{center}
\psfrag{Red Ball}{赤いボール}
\includegraphics{test.1}
\end{center}
……
\end{document}
```

のようにすれば，Red Ballの文字列が「赤いボール」に置き換わります。<br>
ただし，日本語としてセンタリングされるわけではありませんので，
一般に位置がずれます。<br>

### その他の注意点 {#ddd5a5aa}

Unix 版（web2c 版）では曲線 ..
でつなぐ場合の最大長はデフォルトでは 2000 点です。

## 例 {#nda680a6}

もうちょっと数学のテスト問題に使えそうな例をあげておきます。

```
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

## おまけ {#nec162e2}

MetaPost を併用して[等高線を描くプログラム](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/contour.html)
を作ってみました。

## 関連アプリケーション {#o3813278}

MetaPostで作成した図をLaTeX文書に取り込むようなとき、図のソースをLaTeX文書に埋め込んで図の生成と取り込みを自動化するパッケージ[MePoTeX](http://homepage2.nifty.com/domae/metapost/mepotex.html)というものもあります。

## 最新バージョンで追加された機能のいくつか {#ze022f07}

0.970 (beta) 以降で追加された新機能のいくつかを述べます。

```
(1) filenametemplate
filenametemplate "%j-%3c.mps";
beginfig(1);
... ...
endfig;
```

のようにすると、出力ファイル名は $(jobname)-001.mps のようになります。
バージョン1.2以降では filenametemplate もまだ使用できるようですが
無くなるかもしれません。

```
outputtemplate:="%j-%3c.mps";
```

のほうがよいでしょう。構文の違いに気をつけてください。

```
(2) cmyk color model:
beginfig(1);
draw fullcircle
withcmykcolor (1,0,0,0);
endfig;
```

```
(3) greyscale color model
beginfig(1);
faded := 0.5;
draw fullcircle withgreyscale faded;
endfig;
```

```
注: withgrayscale なる綴りは使えないので注意すること。
```

```
(4) 標準 eps:
```

独立した eps を出力する機能が強化されています。 prologues := 2;
でフォントマップファイルに従ってフォント定義を完全に行います。
prologues := 3; では dvips のように type1 フォントのサブセットを
ダウンロードします。たとえば上に出てきた例で

```
prologues:=3;
defaultscale := 1.5;
beginfig(1);
u=100;
fill (u,0)..(2u,u)..(u,2u)..(0,u)..cycle withcolor red;
label("Red Ball", (u,u));
endfig;
end.
```

としておくと、必要な cm フォントがダウンロードされるので、通常のプリンタ
で印刷できる eps ができます。

```
(5) font map:
```

デフォルトマップファイルは psfonts.map ですが、ソース中で設定
することもできます:

```
fontmapfile "+foo.map";
```

とすると、重複を無視して foo.map の内容を追加します。

```
 
fontmapfile "=foo.map";
```

とすると、重複を置き換えて foo.map を追加します。

```
fontmapfile "-foo.map";
     
```

とすると、foo.map 内の記述とマッチするエントリを全て削除します。

ファイルではなくて、具体的記述によって指定する方法もあります:

```
fontmapline "+foo bar <baz.pfb";
```

とすると、重複を無視して この内容を追加します。

```
fontmapline "=foo bar <baz.pfb";
```

とすると、重複を置き換えてこの内容を追加します。

```
fontmapline "-foo bar <baz.pfb";
```

とすると、この内容と一致するものを削除します。

なお、新しい MetaPost では pool ファイル は無くなっています。
(MetaPost だけでなくて、全ての TeX エンジン、METAFONT でも
pool ファイルは無くなっています。) 1.501 から mem ファイルも無くなりました。

現在 release されている最新バージョンは 1.999 です。(gmp, mpfr と link)。

TeX Live 2013 では MetaPost のバージョンは 1.803 になっています。eps, svg に加えてビットマップの png
も出力可 (outputformat := "png";)。

TeX Live 2014 には バージョン 1.902 が入っています。

Version 1.999 では -numbersystem=binary, および -numbersystem=decimal
の場合に，numberprecision が使用できます。最大値は 1000 になっています。
たとえば

```
%
% test.mp
%
numberprecision:=900;
show mexp(256);
end.
```

を

```
mpost -numbersystem=binary test
```

のように処理すると

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

を出力します(読みやすいように編集してあります)。これは最後の数字(8)を除いて
正しいものです。

## 参考サイト {#sa284452}

- [MetaPost](http://www.sat.t.u-tokyo.ac.jp/~hideyuki/metapost/)（[鈴木秀幸さん](http://www.sat.t.u-tokyo.ac.jp/~hideyuki/index-j.html)による日本語MetaPost）
- [MetaPost 覚書](http://lagendra.s.kanazawa-u.ac.jp/ogurisu/manuals/metapost/mpost.html)（小栗栖さんによるリファレンスマニュアル）
- [TeX&amp;MetaPostであそぼう](http://homepage2.nifty.com/domae/)(みなもさんによるMePoTeX 配布など)
- [MetaPost Basics: Drawing lines, curves and shapes and using color](http://www.latex-community.org/component/content/article/61-latexs-friends-others/486-metapost-lines-curves-shapes-color)
- [Function Grapher](http://www.tlhiv.org/mpgraph/) WEB application by MetaPost
