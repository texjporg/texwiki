---
title: "LaTeX文書作成時に注意すべきこと"
url: "/LaTeX文書作成時に注意すべきこと/"
date: 2016-07-20T14:41:03Z
pukiwiki: "LaTeX文書作成時に注意すべきこと"
---

# LaTeX文書作成時に注意すべきこと

## 非推奨のコマンド・パッケージ {#bafd87a5}

### マクロ定義 {#i0ada20a}

\def によるマクロの定義は推奨されません．なぜなら，それ以前に同名のマクロが定義されていても警告なしに上書きしてしまうからです．マクロの定義には「可能な限り」 \newcommand，再定義には \renewcommand を使うようにしてください．

#### 発展的な話題 {#n18ab57d}

[xparse](https://www.ctan.org/pkg/xparse) というパッケージを使用するとより柔軟にマクロを定義することができます．

### 書体変更コマンド {#sd8c3025}

以下のコマンドは1993年にリリースされた LaTeX2e の [New Font Scheme Selection (NFSS)](https://www.ctan.org/pkg/fntguide) release 2 をサポートしていないため，非推奨です．NFSS とは書体の選択についての機構です．

以下の表の代替コマンドを使用してください．

<table>
<tbody>
<tr><td> 非推奨コマンド </td><td colspan="2"> 代替コマンド </td><td> 書体 </td></tr>
<tr><td> {\bf ...} </td><td> \textbf{...} </td><td> \bfseries </td><td> 太字 </td></tr>
<tr><td> {\it ...} </td><td> \textit{...} </td><td> \itshape </td><td> イタリック体 </td></tr>
<tr><td> {\rm ...} </td><td> \textrm{...} </td><td> \rmfamily </td><td> ローマン体 </td></tr>
<tr><td> {\sc ...} </td><td> \textsc{...} </td><td> \scshape </td><td> スモールキャピタル </td></tr>
<tr><td> {\sf ...} </td><td> \textsf{...} </td><td> \sffamily </td><td> サンセリフ体 </td></tr>
<tr><td> {\sl ...} </td><td> \textsl{...} </td><td> \slshape </td><td> スラント体 (光学的斜体) </td></tr>
<tr><td> {\tt ...} </td><td> \texttt{...} </td><td> \ttfamily </td><td> タイプライター体 </td></tr>
</tbody>
</table>

非推奨コマンドはそれ以前の設定を上書きします．例えば {\it \bf hoge} だと hoge は太字にはなりますが，イタリックにはなりません．代替コマンドを用いて \textit{\textbf{hoge}} (あるいは \textbf{\textit{hoge}}) とすれば太字かつイタリックになります．

なお，{\em ...} および \emph{...} は非推奨ではないので，問題なく使用出来ます．

和文では上記に加え以下のコマンドも非推奨なので注意してください．

<table>
<tbody>
<tr><td> 非推奨コマンド </td><td colspan="2"> 代替コマンド </td><td> 書体 </td></tr>
<tr><td> {\mc ...} </td><td> \textmc{...} </td><td> \mcfamily </td><td> 明朝体 </td></tr>
<tr><td> {\gt ...} </td><td> \textgt{...} </td><td> \gtfamily </td><td> ゴシック体 </td></tr>
</tbody>
</table>

## 参考文献 {#f2dcd820}

- [CTAN: tex-archive/info/l2tabu](https://www.ctan.org/tex-archive/info/l2tabu) 非推奨項目についてまとめたものです
- [CTAN: tex-archive/macros/latex/contrib/nag](https://www.ctan.org/tex-archive/macros/latex/contrib/nag) 非推奨項目を検出します

## コメント {#v0878cad}

- \def については「\def でなければ出来ないこと」もありますので、それが解る方にまで非推奨する必要はないと思います。例えば [TeX.SX](http://tex.stackexchange.com/questions/655/what-is-the-difference-between-def-and-newcommand) がわかりやすいです。「解っていればメリットもあるので使うことが許容されるのか、解っていてもデメリットが大きすぎるので使わないべきなのか」という程度の問題は検討したほうが信憑性が高まると思います。（とはいえ、「\def でなければ出来ないこと」はすでに LaTeX の範囲を超えていて、“TeX on LaTeX” の領域ですからね… LaTeX の範囲内では云々という非常に解りにくい表現になるよりは良いのかな。） -- aminophen 2016-07-21 (木) 01:56:44
- \emの書式が間違っていた（以降すべてが\emになる）ので直しました．ちなみに \bf とかは別にNFSS2の枠組みとかじゃなくって､\bf = \normalfont\bfseries （数式モードは別）であって，「互換性」のためにこうなっているんでしょうね．いたずらするなら､\normalfontを外して\bfを定義すると面白いかもしれませんが､混乱を起こすかもしれません． -- honda 2016-07-21 (木) 08:37:30
- あれ・・・2.09って\bf､\itの順序で変わったんでしたっけ？そうだったら「弱い互換性」とでもいうべきか -- honda 2016-07-21 (木) 08:52:52
- [latex209](https://www.ctan.org/pkg/latex209) を CTAN から持ってきて試してみたのですが，latex/general/lfonts.tex を同じディレクトリに置いて

    ```
    \documentclass{minimal}
    \begin{document}
    \makeatletter
    \input lfonts.tex % 無理矢理フォント定義部分を読み込んでみる
    \xpt
    \it \bf hoge
    \end{document}
    ```

    とかやってみると hoge が（イタリックではない）ボールドになります．（使い方がこれで合っているのかよくわからないですが．） そもそも cmbxti という文字列がどのファイルにもないようなのですが，ボールドイタリックはどうやって出していたのでしょうか．そのためのスタイルファイルがあったりしたのかな？ [昔の comp.text.tex の投稿](https://groups.google.com/forum/#!topic/comp.text.tex/BruaU9xFxL4)を見る限り，そうだったのでしょうか． -- kmaeda 2016-07-21 (木) 15:34:16

- 私自身は plain TeX や 2.09 の頃から使っているわけではないのですけれど、ちょっと調べてみましたら、例えば、plain TeX の入門ドキュメントである “A Gentle Introduction to TeX” では既に、“External Fonts Names” というリストに、CMBXTI10 ですとか、CMSS の BX や I なんかも載っています。なので、plain TeX の頃なら \font を直接使って、2.09 の頃なら \newfont を使って、tfm を自分で指定していたのではないでしょうか （大きさはその際の決め打ちになってしまいますが）。 -- ut 2016-07-21 (木) 20:35:30
- 2003年の W32TeX を入手できたので、みてみると「latex209」というコマンドがありました。起動してみると

    ```
    This is TeX, Version 3.141592 (Web2C 7.5.2) (format=latex209 2003.2.20)
    ```

    で LaTeX Version 2.09 &lt;25 March 1992> が利用できます。おそらくこれが、現在でも容易にネット上から入手可能な LaTeX 2.09 に近い環境だと思われます。ちゃんと \documentclass が ! Undefined control sequence. になるところまで ;)

    ```
    \documentstyle{article}
    \begin{document}
    {\bf\it ABCabc}/{\it\bf ABCabc}
    \end{document}
    ```

    を実行すると、\bf と \it を同時に使うと「後の方」だけが効くことがわかります。ボールドイタリックはいろいろ試さないとわかりません… -- aminophen 2016-07-22 (金) 22:31:21
