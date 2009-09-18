---
title: "AMS-LaTeX"
url: "/AMS-LaTeX/"
date: 2004-10-16T23:09:41Z
pukiwiki: "AMS-LaTeX"
---

# AMS-LaTeX

## AMS-LaTeX {#wf4b3974}

[AMS-LaTeX](http://www.ams.org/tex/amslatex.html) は
[アメリカ数学会](http://www.ams.org/)（American Mathematical Society）
によって開発されたパッケージおよびクラスファイルです。
AMS-LaTeX は，数式に関する各種のコマンド・環境を定義した amsmath と
アメリカ数学会の組版ルールに従った文書を作るための amscls の 2 つに分けられます。
角藤さんの W32TeX を初めとする多くの TeX システムには最初から含まれていますが，
[http://www.ams.org/tex/amslatex.html](http://www.ams.org/tex/amslatex.html) や
[CTAN:macros/latex/required/amslatex/](https://mirror.ctan.org/macros/latex/required/amslatex/) から入手することもできます。

ドキュメント等

- Short Math Guide for LaTeX (short-math-guide.pdf from [ftp@ams.org](ftp://ftp.ams.org/pub/tex/doc/amsmath/short-math-guide.pdf)[http@chiba-u.ac.jp](http://www.le.chiba-u.ac.jp/~aoyama/tex/short-math-guide.pdf))

### amsmath {#h5d7d27f}

amsmath は数式に関する各種のコマンド・環境を定義したパッケージです。
使用するにはプリアンブルに

```
\usepackage{amsmath}
```

と書きます（下記の amsart, amsbook, amsproc のいずれかのクラスファイルを使用する場合は自動的に読み込まれるのでこの記述は不要です）。
基本的なマニュアルは [amsldoc.pdf](https://mirror.ctan.org/macros/latex/required/amslatex/math/amsldoc.pdf)
（$TEXMF/doc/latex/amslatex/math/amsldoc.pdf）です。

### amscls {#r3f5ce5e}

#### クラスファイル {#j6f14098}

アメリカ数学会の組版ルールに従った文書を作るためのクラスファイルとして，
amsart（論文用），amsbook（書籍用），amsproc（プロシーディングス用）が用意されています。
使用するには

```
\documentclass{amsart}
```

などと書きます。
基本的なマニュアルは [instr-l.pdf](https://mirror.ctan.org/macros/latex/required/amslatex/classes/instr-l.pdf)
（$TEXMF/doc/latex/amslatex/classes/instr-l.pdf）です。

#### amsthm {#dedf34bf}

定理型の環境を作成するためのパッケージです。
上記のクラスファイルを使う場合は自動的に読み込まれますが，
jarticle など上記以外のクラスファイルを使う場合も

```
\usepackage{amsthm}
```

と書くことで明示的に読み込むことができます。
基本的なマニュアルは [amsthdoc.pdf](https://mirror.ctan.org/macros/latex/required/amslatex/classes/amsthdoc.pdf)
（$TEXMF/doc/latex/amslatex/classes/amsthdoc.pdf）です。

### バグ {#f1f7b248}

AMS-LaTeX で配布されるクラスファイルには脚注に関するバグがあります。
問題は次のソースによって再現します：

```
       \documentclass{amsart}
       \begin{document}
       \Huge $G$
       \normalsize Aha\footnote{Wow!}
       \end{document}
```

これを修正するにはプリアンブルに次のように書けば OK です。

```
       \makeatletter
       \def\@makefnmark{%
               \leavevmode
               \raise.9ex\hbox{\check@mathfonts
                       \fontsize\sf@size\z@\normalfont%
                               \@thefnmark}%
       }
       \makeatother
```

以下は，Alexandru Scorpan から texhax メーリングリストに投稿された，
この問題を報告するメールです：

I don't know if you know, but I though I'd let you know:
There a new version (v.2) of AMSLaTeX available to download as
[ftp://ftp.ams.org/pub/tex/amsltx2.zip](ftp://ftp.ams.org/pub/tex/amsltx2.zip)

It's funny though that they haven't fixed their \footnote bug, which in
all AMS classes types the footnote mark in the last size used in math
mode.

To see it in action, simply typeset

```
       \documentclass{amsart}
       \begin{document}
       \Huge $G$
       \normalsize Aha\footnote{Wow!}
       \end{document}
```

Here the fix for it: add to your preamble

```
       \makeatletter
       \def\@makefnmark{%
               \leavevmode
               \raise.9ex\hbox{\check@mathfonts
                       \fontsize\sf@size\z@\normalfont%
                               \@thefnmark}%
       }
       \makeatother
```

I think this fix is due to F. Mittelbach.

-- Alex

### ディスプレイ数式のソース記述 {#i42c18a4}

AMS-LaTeXを利用することを前提として，ディスプレイ数式のソース記述を簡単にまとめました．

```
\documentclass{jarticle}
\usepackage{amsmath}
\begin{document}
AMS-LaTeXを利用することを前提として，ディスプレイ数式のソース記述を簡単にまとめました．
\begin{itemize}
\item
数式番号を1行とする場合は\texttt{equation}環境を用いて記述します．
\begin{itemize}
\item 数式が``1行"の場合の例は，
\begin{equation}
1+2=3+0.
\end{equation}
\item 数式が``2行以上"の場合には，この\texttt{equation}環境に加えて，
\begin{itemize}
\item \texttt{gathered}環境を併用して記述します\footnote{\label{fn1}中心位置合わせを行う場合．}．
\begin{equation}
\begin{gathered}
0+1+2=3,\\
4+5=9.
\end{gathered}
\end{equation}
\item もしくは\texttt{aligned} (or \texttt{split})環境を併用して記述します\footnote{\label{fn2}特定位置における横方向位置合わせを行う場合．ソース例の中の第1行と第2行には``\texttt{\&=}"と記述していますので，``$=$"の位置における横方向位置合わせを行っています．}．
\begin{equation}
\begin{aligned}
0+1+2&=3,\\
4+11&=15+0.
\end{aligned}
\end{equation}
\end{itemize}
\end{itemize}
\item
数式番号を2行以上とする場合は
\begin{itemize}
\item \texttt{gather}環境を用いて記述します\footnotemark[\ref{fn1}]．
\begin{gather}
0+1+2=3,\\
4+5=9.
\end{gather}
\item もしくは\texttt{align}環境を用いて記述します\footnotemark[\ref{fn2}]．
\begin{align}
0+1+2&=3,\\
4+11&=15+0.
\end{align}
\end{itemize}
\item
数式番号を付加しない場合は数式番号を``1行"とする場合に準じて記述します．
\begin{itemize}
\item ただし数式が``2行以上"の場合には，数式番号を2行以上とする場合に準ずる方がソースを簡素に記述できます．
\end{itemize}
\end{itemize}
\end{document}
```

## コメント {#mlcomeiz}
