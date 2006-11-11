---
title: "MetaPost"
url: "/MetaPost/"
date: 2004-09-22T22:42:45Z
pukiwiki: "MetaPost"
---

# MetaPost

## MetaPost {#v0160eb8}

### はじめに {#q0dc30bf}

「この文章は角藤さんの
[MetaPost の紹介](http://www.fsci.fuk.kindai.ac.jp/~kakuto/win32-ptex/mpost.pdf)
という文章に触発されて書いたものです。角藤さんに感謝いたします。」

↑この謝辞は、この文章がWikiに移される前に[奥村さん](http://cise.edu.mie-u.ac.jp/~okumura/)が記したものです。この文章がWikiに移された後は不特定多数の方が加筆しているので、謝辞は妥当なものではなくなっているかもしれません。

MetaPostの日本語版については
[松山さん](http://village.infoweb.ne.jp/~fwhw5892/jweb/jmpost.htm)
→ [hideyukiさん](http://www.sat.t.u-tokyo.ac.jp/~hideyuki/metapost/)
が開発されています。

### MetaPost とは {#e4617397}

MetaPostはJohn Hobbyが作った[METAFONT](/METAFONT/)類似のソフトで，
METAFONTがgf形式のフォントを出力するのに対して，
MetaPostはPostScript（EPS）形式のファイルを出力します。
1995年からAT&amp;Tライセンス不要のフリーソフトになりました。
詳しくは作者Hobby自身による
[MetaPost](http://cm.bell-labs.com/who/hobby/MetaPost.html)
ページをご覧ください。
web2c配布にもMetaPostのマニュアルが入っています。

### MetaPostプログラミング入門 {#p3fbc416}

#### 簡単な線画の作成 {#t3a63dd6}

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
という名前で保存して，

```
mpost test
```

と打ち込むと，beginfig(1); から endfig;
までに描かれた内容が test.1 というEPSファイルに出力されます。
Ghostscript などで確認してみてください。

もしさらに beginfig(2);……endfig;
が同じ test.mp に書かれていれば，その中身は test.2
に出力されます。
要するに beginfig() は拡張子を決めるだけですが，
拡張子は数字（番号）しか使えません。

上の例は単なる折れ線でした。閉じた図形にするには，

```
draw (u,0)--(2u,u)--(u,2u)--(0,u)--cycle;
```

とします。さらに，滑らかな線で結ぶには，

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
fill (u,0)..(2u,u)..(u,2u)..(0,u)..cycle withcolor red;
```

としてみてください。

#### 図に文字を挿入する {#j8ce9e55}

文字を入れることもできます。たとえば

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

のようにすれば，点 (u,u) を中心とする位置に Red Ball と書かれます。
このように文字を入れる場合は，
PostScript フォントを指定し，
最初に prologues:=1; としておけば，
独立のEPSとして使えます。
ただし，
defaultfont := "rptmr";
のような命令でデフォールトのフォント名を標準的な PS
フォントに指定しておく必要があります（rptmr
は Times-Roman の TeX での名前です）。
そうでなければ cmr10 になってしまい，一般のプリンタでは出力できません。

> しかし Ghostscript では次のようにして cmr10 などを出力することができます：
> GS_LIB という環境変数を CM Type1 フォントのある場所
> （たとえば /usr/local/teTeX/share/texmf/fonts/type1/bluesky/cm）
> に設定しておき（あるいはここにある pfb ファイルを /usr/local/share/ghostscript/fonts
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
> などのように書いておきます。
> 別の手として，cmr10.pfb などを CMR10 という名前で /Resource/Font
> ディレクトリにコピーしておいてもいいでしょう。

#### 作成した図をTeX文章に取り込む {#ee4db6cc}

TeX/LaTeX の文書の中に組み込んで使う場合は，
逆に prologues:=1; は指定しません。
この場合，たとえば

```
\documentclass{jsarticle}
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
platex test
```

として処理して

```
dvips test -o test.ps
```

と打ち込むと test.ps というPostScriptファイルができますので，
Ghostscriptで見るか，PostScriptプリンタに送ります。

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

のようにdvipsの -E オプションを使えば，
本物のEPSファイルになり，
TeX以外のアプリケーションに取り込むこともできます。

#### TeXの機能を使って図に挿入する文字を組版する {#o948ef03}

上のような方法ではカーニングやリガチャは入りませんし，
数式を含ませることもできません。
ちゃんと組まれた文や数式を含ませるには，次のように label
中に btex …… etex で囲んで入れます。

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
で指定しておく必要があります。
たとえば上の例で LaTeX を起動するコマンドが latex なら，
Bシェルの類なら export TEX=latex，
Cシェルなら setenv TEX latex
としてから mpost test と打ち込みます。

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

と書いておくだけで、自動的に latex を使ってくれます。

#### PSfragの利用 {#gd4ef62a}

日本語版MetaPostが利用できない場合は，次のようにして PSfrag で日本語を使うことができます。
さきほどの例で（prologues:=1; を指定しておき）

```
\documentclass{jsarticle}
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

のようにすれば，Red Ballの文字列が「赤いボール」に置き換わります。
ただし，日本語としてセンタリングされるわけではありませんので，
一般に位置がずれます。

#### その他の注意点 {#ddd5a5aa}

Unix 版（web2c 版）では曲線 ..
でつなぐ場合の最大長はデフォルトでは 2000 点です。
W32TeX の場合は 10000 点です。設定できる最大数は 300000 です。

### 例 {#nda680a6}

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

### おまけ {#nec162e2}

MetaPost を併用して[等高線を描くプログラム](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/contour.html)
を作ってみました。

###  {#o3813278}

MetaPostで作成した図をLaTeX文書に取り込むようなとき、図のソースをLaTeX文書に埋め込んで図の生成と取り込みを自動化するパッケージ[MePoTeX](http://homepage2.nifty.com/domae/metapost/mepotex.html)というものもあります。

### 最新バージョンで追加された機能のいくつか {#ze022f07}

0.970 (beta) 以降で追加された新機能のいくつかを述べます。

```
(1) filenametemplate
filenametemplate "%j-%3c.mps";
beginfig(1);
... ...
endfig;
```

のようにすると、出力ファイル名は $(jobname)-001.mps のようになります。

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
(4) 標準 eps:
```

独立した eps を出力する機能が強化されています。 prologues := 2;
でフォントマップファイルに従ってフォント定義を完全に行います。
0.970 (beta) では一部不具合がありますが、svn では訂正されています。
prologues := 3; では dvips のように type1 フォントのサブセットを
ダウンロードします。

```
(5) font map:
```

デフォルトマップファイルは mpost.map ですが、ソース中で設定
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
