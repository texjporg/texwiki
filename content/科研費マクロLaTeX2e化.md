---
title: "科研費マクロLaTeX2e化"
url: "/科研費マクロLaTeX2e化/"
date: 2004-10-10T21:30:13Z
pukiwiki: "科研費マクロLaTeX2e化"
---

# 科研費マクロLaTeX2e化

## 科研費マクロLaTeX2e化 {#w2188abf}

すでに [科研費マクロ](http://www.yukawa.kyoto-u.ac.jp/contents/researcher/kakenhi.html)
は LaTeX2e でも処理できるようになっていますが，実際は LaTeX 2.09 互換モードに LaTeX2e
対応パッチが当ててあります。
これを LaTeX2e らしく \documentclass を使うように書き直してみます。

まず k2004mac.tar.bz2 を適当な場所で展開します。

この中の macro というフォルダ中のものだけが必要なものです。
src.tex がサンプルファイルです。
まず，これの先頭に \documentclass{kakenhi} を，末尾に \end{document} を付けます。
また，この中の \input kkhgrp.mac という行はコメントアウトします（消します）。

\begin{document} はどこにあるの？
\OutputPages という命令が \begin{document} を呼び出しています。

kakenhi.cls というファイルは kkhgrp.mac の先頭に次のものを加えて作ります。
これで min10 などの代わりに jis フォントが使われるようになります。

```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%% kakenhi.cls
%%% based on kkhgrp.mac
% use jis and jisg
\DeclareFontShape{JY1}{mc}{m}{n}{<-> s * jis}{}
\DeclareFontShape{JY1}{gt}{m}{n}{<-> s * jisg}{}
\def\@setfontsize#1#2#3{%
  \ifx\protect\@typeset@protect
    \let\@currsize#1%
  \fi
  \fontsize{#2}{#3}\selectfont
  \ifdim\parindent>\z@
    \parindent=1zw
  \fi
  \kanjiskip=0zw plus .1zw minus .05zw
  \ifdim\xkanjiskip>\z@
    \xkanjiskip=0.25em plus 0.15em minus 0.06em
  \fi}
\renewcommand{\normalsize}{\@setfontsize\normalsize\@xiipt\@xivpt}
\normalsize

% from latex209.def
% LaTeX 2.09の命令をたくさん使った場合は \input latex209.def してください。
% 以下は latex209.def から最小限の内容をコピーしたものです。
\newdimen\@maxsep
\newdimen\@dblmaxsep
\def\@magscale#1{ scaled \magstep#1 }
\let\gtfam\gtfamily
\let\rm\rmfamily
\let\bf\bfseries
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
```

上の方は新ドキュメントクラスから取ったものですが，そのままだと一部表示がおかしくなるので，¥kanjiskip のマイナス部分を少し増やしました。

kakenhi.cls はもう1か所だけ修正が必要です。

```
\def\InputMacro#1{\ifPlain\input #1.mac\relax
  \else\documentstyle[#1]{lkkh}
    \ifLaTeXe\input lkkh_2e.sty\fi
  \fi}
```

となっているところを

```
\def\InputMacro#1{%
  \@namedef{@options}{\input kkhform.mac\relax}
  \usepackage{lkkh}
  \usepackage{lkkh_2e}}
```

のようにします。

これでほぼ完成です。
あとは kkhform.mac や kkh.mac の中の goth10 を jisg に置換すれば全部 jis
フォントになるはずです。

もっとブラッシュアップしたいところがありますが，とりあえずこれだけで
¥usepackage{okumacro}
のようにして LaTeX2e 用のパッケージが問題なく読み込めるようになります。

***

- Wiki の使い方分からなくて空砲を撃ってしまいました。itemize-env でただの \item を使ったら, \bf が未定義と叱られてストップしました。実際, lkkh.sty 中に \bf がありましたので全部 \bfseries に書き換えてその場を凌いでいます。他に \rm とか goth8, goth7 等あります。どうすべきかアイデアがありません。 -- [mikami@math.akita-u.ac.jp](mailto:mikami@math.akita-u.ac.jp) 2004-10-13 (水) 21:47:04
- あれ，うちでは問題なかったですが，変ですね。¥let¥bf=¥bfseries で逃げましょうか -- 奥村 2004-10-13 (水) 22:23:20
- 上のコードに \let\bf\bfseries を追加しておきました。ほかにも不具合報告歓迎します -- 奥村 2004-10-14 (木) 09:09:05
