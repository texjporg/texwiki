---
title: "awdea"
url: "/awdea/"
date: 2004-11-19T04:54:41Z
pukiwiki: "awdea"
---

# awdea

なぜ以下のようなものが書き込まれたか判断に苦しみます。

非常に下手な書き方です。
どなたか（書き込まれたかたとは別のかた）が，コメントの形で，下手なところを指摘してくださっています。
「編集」をクリックすればコメントが見えますのでご参考まで。

\documentclass\[a4paper,11pt\]{jarticle}

\usepackage{color}

% 入れ子の分数の定義 %

\def\leqq{\mbox{\small ≦}}

\def\geqq{\mbox{\small ≧}} <!-- amssymb パッケージを使用すれば，\leqq/\geqq は提供されている． --> <!-- 上記の定義には，\leqq/\geqq が関係演算子としてではなく --> <!-- 通常の文字として扱われるという不具合もある． -->

\def\dfrac#1#2{{\displaystyle \frac{#1}{#2}}} <!-- 以下，\displaystyle を仕込んだマクロをいくつか定義しているが， --> <!-- きちんとディスプレイ数式用の環境を用いればそのようなマクロを --> <!-- 使うまでもなくなるであろう（なお，インラインの数式までことごとく --> <!-- ディスプレイ・スタイルにするのは「子供じみた」記述）． -->

\def\dlim#1{{\displaystyle \lim \_{#1}}}

\def\dsum#1#2{{\displaystyle \sum \_{#1}^{#2}}}

\def\norm#1{{\left\\| #1 \right\\|}}

\def\dint#1#2{{\displaystyle \int \_{#1}^{#2}}}

\oddsidemargin=-5mm

\textwidth=170mm

\topmargin=-20mm

\textheight=250mm

\begin{document}

\begin{center}

{\bf \Large 動力学 \quad 練習問題~23}\\\\ <!-- {\bf ...} は obsolete な形式．\textbf{...} が better. -->

インターネット上より印刷\\\\

\today\\\\

Ver. 1.80

\end{center}

{\bf （２）}

\color{blue}

仕事率を$P\[W\]$とすれば、\\\ \\\\ <!-- このような箇所で強制改行の \\ を使うものではない（以下同様）． -->

\qquad $P \\, = \\, \dfrac{20.0 \times 9.80 \times 10.0 \times \sin 
\dfrac{\pi}{6}}{20.0} \\, = \\, 49.0 \\,\[W\]$\\\\ <!-- 「強制改行＋水平方向のスペース」ではなく， --> <!-- 「（何らかの）ディスプレイ数式環境」を用いるべき箇所のように見える． --> <!-- また，等号の前後に恣意的な \, を入れるようなことはすべきではない． --> <!-- 数式グルーの大きさに不具合があるのであれば， --> <!-- \thinmuskip/\medmuskip/\thickmuskip の値を再設定すべき． -->

\begin{flushright}

\underline{ A. $49.0\\,\[W\]$ } <!-- 「単位」までイタリック表記になっているのはまずい． --> <!-- “[W]”の部分は数式の外に出すか，\mbox{...}/\textrm{...} あたりに --> <!-- 入れることになる（以下同様）． -->

\end{flushright}

\vspace\*{12pt} <!-- このようなアキを手動で入れるべきかどうかは，再考する必要がある． --> <!-- (1)，(2)等の各項目を適切に定義した環境に入れれば， --> <!-- アキを手動で入れなくても済むようにできるであろう． --> <!-- あるいは，enumerate 等の（既製の）環境を適宜用いることによっても --> <!-- 然るべき体裁にすることができるであろう． -->

\color{black}

{\bf （３）}

\color{blue}

力が物体になした仕事を$W\\,\[J\]$、$5.00\\,\[s\]$間に物体が進んだ距離を$x\\,\[m\]$
とすれば、\\\ \\\\

\qquad $F \times 5.00 \\, = \\, 3.00 \times 20.0 - 3.00 \times 0$ \dots (1)\\\ 
\\\\

\qquad $x = \dfrac{1}{2} \times \dfrac{20.0}{5.00} \times (5.00)^2 = 50.0 
\\,\[m\]$ \dots (2)\\\ \\\\

\qquad $W = Fx$ \dots (3)\\\ \\\\

よって、(1)～(3)式より、$W = 600 \\, \[J\]$\\\\

\begin{flushright}

\underline{ A. $600\\,\[J\]$ }

\end{flushright}

\vspace\*{12pt}

\color{black}

{\bf （６）}

\color{blue}

この電車を等速度$36.0\\,\[km/h\]\\,(\\,=\\,10.0\\,\[m/s\])$で動かすのに必要な力を$F\\,\[N\]$
、 

その時の仕事率を$P\\,\[kW\]$とすれば、\\\ \\\\

\qquad $F \\, = 2.50 \times 80.0 \times 9.80 + 80.0 \times 10^3 \times \sin 
\left( \tan ^{-1} \dfrac{1}{100} \right) \times 9.80$ \dots (1)\\\ \\\\

\qquad $P \times 10^3 \\, = \dfrac{F \times 10.0}{1.00} \\, \cos \left( \tan 
^{-1} \dfrac{1}{100} \right)$ \dots (2)\\\ \\\\

よって、(1)、(2)式より、$P = 98.0\\,\[kW\]$\\\\

\begin{flushright}

\underline{ A. $98.0\\,\[kW\]$ }

\end{flushright}

\vspace\*{12pt}

\color{black}

{\bf （７）}

\color{blue}

この物体を動かすのに必要な力を$F\\,\[N\]$、仕事率を$P\\,\[W\]$とすれば、\\\ \\\\

\qquad $F \\, = 0.300 \times 30.0 \times 9.80$ \dots (1)\\\ \\\\

\qquad $P \\, = \dfrac{F \times 4.00}{5.00}$ \dots (2)\\\ \\\\

よって、(1)、(2)式より、$P = 70.6\\,\[W\]$\\\\

\begin{flushright}

\underline{ A. $70.6\\,\[W\]$ }

\end{flushright}

\vspace\*{12pt}

\color{black}

{\bf （８）}

\color{blue}

物体を$3.00\\,\[m\]$引き上げた時、速さが$5.00\\,\[m/s\]$になるまでにかかる時間
を$t\\,\[s\]$、 

その時の加速度を$\alpha \\,\[m/s^2\]$、引き上げるのに必要な力を$F\\,\[N\]$とす
れば、\\\ \\\\

\qquad $5.00 = \alpha \\, t$\dots (1)\\\ \\\\

\qquad $3.00 = \dfrac{1}{2} \\, \alpha t^2$\dots (2)\\\ \\\\

\qquad $5.00 \times \alpha = F - 5.00 \times 9.80 \sin \dfrac{\pi}{6} - 
0.350 \times 5.00 \times 9.80 \cos \dfrac{\pi}{6}$\dots (3)\\\ \\\\

\qquad $W = F \times 3.00$\dots (4)\\\ \\\\

よって、(1)～(4)式より、$W = 181\\,\[J\]$\\\\

\begin{flushright}

\underline{ A. $181\\,\[J\]$}

\end{flushright}

\vspace\*{12pt}

\color{black}

{\bf （９）}

\color{blue}

パイプ内の平均流速を$v\\,\[m/s\]$、仕事率を$P\\,\[W\]$とすれば、\\\ \\\\

\qquad $\dfrac{120 \times 10^3}{10.0} \times 10^{-2} = v \times 60.0$\dots 
(1)\\\ \\\\

ここで、$5\\,\[\ell\] = 5\\,\[kg\]$より、\\\ \\\\

\qquad $P = \dfrac{5.00 \times 9.80 \times v}{1.00}$\dots (2)\\\ \\\\

よって、(1)、(2)式より、$v = 2.00 \\, \[m/s\]$ , $P = 98.0\\,\[W\]$\\\\ <!-- （$P=... の直前の）コンマの前に空白が入っているのは（組版上の）誤り． -->

\begin{flushright}

\quad パイプ内の平均流速 : $2.00\\,\[m/s\]$\\\\ <!-- コロンの前に空白が入っているのはやはり（組版上の）誤り． --> <!-- 和文文字の（全角の）コロンを用いた場合のような出力を得たいのであれば， --> <!-- 最初から和文文字のコロンにすべきであろう． -->

\underline{ A. \quad \quad \quad \quad \quad \quad 仕事率 : $98.0\\,\[W\]$ }

\end{flushright}

\end{document}

### 上記の記述を改善した例 {#b940a313}

```
% デバイスドライバは適宜 dvips, dvipdfm, dviout などに変更
\documentclass[a4j,11pt,dvipdfm]{jsarticle}
\usepackage{color}
% 乱暴な方法だが....
\addtolength{\topmargin}{-2cm}
\addtolength{\textheight}{1cm}
% 自作のコマンドの定義
\makeatletter
% 標準の設定では 数式の番号は \normalcolor で基準色に戻される
\def\@eqnnum{{\normalfont %\normalcolor
   (\theequation)}}
% \mondai[#1] -> 「問題」の見出しを作成する命令
\newcounter{cnt@mondai}
\newcommand\mondai{\@ifnextchar[{\@mondai}{\@@mondai}}
\long\def\@mondai[#1]{\par\vskip\Cvs
  ({\normalfont\bfseries#1})\par\nobreak
  \setcounter{cnt@mondai}{#1}%
}
\long\def\@@mondai{%
  \refstepcounter{cnt@mondai}\par\vskip\Cvs
  ({\normalfont\bfseries\thecnt@mondai})\par\nobreak
}
\makeatother
% Toi -> 「問」を記述するための環境
\newenvironment{Toi}{\bgroup\color{blue}}{\egroup}%\color{black}}
% Kai -> 「解」を記述するための環境
\newenvironment{Kai}{\begin{flushright}}{\end{flushright}}
% \kaito#1 -> 回答には下線を付けるようなので
\newcommand{\kaito}[1]{\underline{A\@. #1}}
% \U#1 -> 単位はローマン体にする
\newcommand*\U[1]{\ensuremath{\mathrm{#1}}}
% 好みの問題で「～」にしても良い。
\newcommand*\digitEmDash{\raise.2ex\hbox{--}}

\begin{document}

% 表題
\title{動力学 練習問題~23}
\author{インターネット上より印刷}
\date{\today\\ Ver. 1.80}
\maketitle

% 問題の始まり、任意引数で番号を指定する。
% 2 を任意引数で渡した場合、次は 3 からカウントされる。
\mondai[2]

% 「問」全体に色を着色するということで Toi 環境を使用する。
\begin{Toi}
仕事率を $P\ [\U{W}]$ とすれば、
\begin{equation}
 P = \frac{20.0 \times 9.80 \times 10.0 \times \sin 
 (\pi/6) } {20.0}  = 49.0 \ [\U{W}] 
\end{equation}

% 「解」は Kai 環境に記述する。
\begin{Kai}
% 下線を引きたい解答は \kaito#1 とする。
\kaito{$49.0\ [\U{W}]$}
\end{Kai}

\end{Toi}

\mondai

\begin{Toi}
力が物体になした仕事を$W\ [\U{J}]$、
時間 $5.00\ [\U{s}]$ 間に物体が進んだ
距離を$x\ [\U{m}]$ とすれば、
\begin{eqnarray}
 F \times 5.00 &=&  3.00 \times 20.0 - 3.00 \times 0 
   \label{hoge:1} \\
 x &=& \frac{1}{2} \times \frac{20.0}{5.00} \times 
        (5.00)^2 = 50.0 \ [\U{m}] \label{hoge:2}\\
 W &=& F x \label{hoge:3}
\end{eqnarray}
よって、式~(\ref{hoge:1}\digitEmDash\ref{hoge:3}) より、
$W = 600 \ [\U{J}]$ となる。

\begin{Kai}
\kaito{$600\ [\U{J}]$ }
\end{Kai}

\end{Toi}

\mondai[6]

\begin{Toi}
この電車を等速度 $36.0\ [\U{km/h}]
\ (\mbox{} = 10.0\ [\U{m/s}])$ で動かすのに必要な力を$F
\ [\U{N}]$、 その時の仕事率を$P\ [\U{kW}]$ とすれば、

\begin{eqnarray}
 F & = & 2.50 \times 80.0 \times 9.80 + 80.0 \times 10^3 
         \times \sin \left( \tan^{-1} \frac{1}{100} \right) 
         \times 9.80 \label{hoge:4} \\
 P \times 10^3 & =  & 
     \frac{F \times 10.0}{1.00} 
     \cos \left( \tan^{-1} \frac{1}{100} \right) \label{hoge:5}
\end{eqnarray}
よって、式~(\ref{hoge:4}, \ref{hoge:5})より、$P = 98.0\ [\U{kW}]$ となる。

\begin{Kai}
\kaito{$98.0\ [\U{kW}]$}
\end{Kai}

\end{Toi}

\mondai

\begin{Toi}
この物体を動かすのに必要な力を $F\ [\U{N}]$、
仕事率を $P\ [\U{W}]$ とすれば、
\begin{eqnarray}
F & = & 0.300 \times 30.0 \times 9.80 \\
P & = & \frac{F \times 4.00}{5.00} 
\end{eqnarray}
よって、式~(1, 2) より、$P = 70.6\ [\U{W}]$ となる。

\begin{Kai}
\kaito{ $70.6\ [\mathrm{W}]$ }
\end{Kai}

\end{Toi}

\mondai

\begin{Toi}

物体を $3.00\ [\U{m}]$ 引き上げた時、速さが 
$5.00\ [\U{m/s}]$になるまでにかかる時間を $t\ [\U{s}]$、 
その時の加速度を $\alpha\ [\U{m/s^2}]$、引き上げるのに必要
な力を $F\ [\U{N}]$ とすれば、
\begin{eqnarray}
 5.00 &=& \alpha  t \label{hoge:6} \\
 3.00 &=& \frac{1}{2} \alpha t^2 \label{hoge:7} \\
 5.00 \times \alpha &=& F - 5.00 \times 9.80 \sin 
      \frac{\pi}{6} - 0.350 \times 5.00 \times 9.80 
      \cos \frac{\pi}{6} \label{hoge:8} \\
    W &=& F \times 3.00 \label{hoge:9}
\end{eqnarray}
よって、式~(\ref{hoge:6}\digitEmDash\ref{hoge:9}) より、
$W = 181\ [\U{J}]$ となる。

\begin{Kai}
\kaito{ $181\ [\mathrm{J}]$}
\end{Kai}

\end{Toi}

\mondai

\begin{Toi}
パイプ内の平均流速を $v\ [\U{m/s}]$、仕事率を$P\ [\U{W}]$ 
とすれば、
\begin{equation}
\frac{120 \times 10^3}{10.0} \times 10^{-2} = v \times 60.0 
\label{hoge:10}
\end{equation}
ここで、$5\ [\U{L}] = 5\ [\U{kg}]$ より、
\begin{equation}
P = \frac{5.00 \times 9.80 \times v}{1.00} 
\label{hoge:11}
\end{equation}
よって、式~(\ref{hoge:10}, \ref{hoge:11}) より、
$v = 2.00\ [\U{m/s}]$、$P = 98.0\ [\U{W}]$ となる。

\begin{Kai}
\kaito{% 少々 \kenten{ずる}をしているようにも思える。
  \vbox{%
  \hbox{パイプ内の平均流速：$2.00\ [\U{m/s}]$}%
  \hbox{仕事率：$98.0\ [\U{W}]$ }}}
\end{Kai}

\end{Toi}
\end{document}
```
