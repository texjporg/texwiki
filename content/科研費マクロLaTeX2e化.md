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
\renewcommand{\normalsize}{%
  \@setfontsize\normalsize\@xpt\@xiipt
  \abovedisplayskip 10\p@ \@plus3\p@ \@minus4\p@
  \abovedisplayshortskip \z@ \@plus3\p@
  \belowdisplayskip \abovedisplayskip
  \belowdisplayshortskip \belowdisplayskip
  \let\@listi\@listI}
\normalsize
% from latex209.def
\newdimen\@maxsep
\newdimen\@dblmaxsep
\def\@magscale#1{ scaled \magstep#1 }
\let\gtfam\gtfamily
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
```

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

***
