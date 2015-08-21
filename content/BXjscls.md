---
title: "BXjscls"
url: "/BXjscls/"
date: 2013-10-22T19:25:42Z
pukiwiki: "BXjscls"
---

# BXjscls

## [BXjscls](http://zrbabbler.sp.land.to/bxjscls.html) {#l3cac28c}

BXjscls は pdflatex, lualatex, xelatex, uplatex, platex で使用可能な日本語組版のための LaTeX 文書クラスです．
TeX Live, W32TeX に含まれています．

奥村先生の「[pLaTeX2e 新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/)」は pLaTeX2e での使用を前提としているため，uplatex, platex 以外では使用することができません．
BXjscls は新ドキュメントクラスから pLaTeX 依存の部分を取り除いたもので，これと各エンジン用の日本語処理パッケージを組み合わせることで，pLaTeX 以外でも新ドキュメントクラスを用いた場合と同等の文書作成が可能となります．

- [https://github.com/zr-tex8r/BXjscls](https://github.com/zr-tex8r/BXjscls)
- [http://www.ctan.org/pkg/bxjscls](http://www.ctan.org/pkg/bxjscls)
- [http://www.ctan.org/tex-archive/language/japanese/BX/bxjscls](http://www.ctan.org/tex-archive/language/japanese/BX/bxjscls)

***

***

### 基本的な使い方 {#g8a35a3c}

ここでは新しい版（v1.x）の BXjscls パッケージの使い方を説明します。
（以前の v0.3、v0.9 とは若干仕様が異なることに注意。）

#### 文書クラスの一覧 {#i6dd9974}

BXjscls パッケージには次の 4 つの文書クラス（「BXJS クラス」と総称する）が収録されています。
これらは何れも「新ドキュメントクラス」（JS クラス）の文書レイアウトと機能を継承したものとなっています。

- bxjsarticle クラス： 「章のないレポート」用。jsarticle クラスに相当。
- bxjsreport クラス： 「章のあるレポート」用。jsbook クラス + report オプションに相当。
- bxjsbook クラス： 書籍用。jsbook クラスに相当。-bxjsslide クラス： スライド用。-jsarticle クラス + slide オプションに相当。

#### 文書クラスの指定 {#v3b1d61c}

BXJS クラスを“標準設定”で使用する場合、\documentclass 命令を以下のように記述します。

```
 \docuemntclass[<エンジン>,<ドライバ>,ja=standard,<他オプション>...]{<クラス名>}
```

ここで &lt;クラス名> には先述の文書クラス名（bxjsarticle 等）の 1 つを指定します。
クラスオプションは以下のように指定します。

- &lt;エンジン> の指定は必須で、LaTeX のコマンド名（pdflatex、xelatex 等）を書きます。
- DVI 出力のエンジン（platex、uplatex）を用いる場合は &lt;ドライバ> に使用する DVI ウェアの名を書きます。dvips、dvipdfmx、dviout、xdvi が指定可能です。一方、PDF 出力のエンジン（xelatex 等）を用いる場合は &lt;ドライバ> の指定は省略します。
- “標準設定”を利用するため ja=standard を必ず指定します。<br>
    ※ v0.9 では jadriver=standard と書いていました。

- 他のクラスオプション（a4paper、twocolumn 等）については、ほとんどの場合、JS クラスと同じものが使えます。

“標準設定”（ja=standard）を指定した場合、自動的に当該のエンジンのための日本語処理パッケージが読み込まれます。

<table>
<tbody>
<tr><td> エンジン </td><td> 日本語処理パッケージ </td><td> jafont指定 </td></tr>
<tr><td> (u)platex </td><td> （エンジン機能） </td><td> pxchfon </td></tr>
<tr><td> (pdf)latex </td><td colspan="2"> bxcjkjatype </td></tr>
<tr><td> xelatex </td><td> zxjatype </td><td> zxjafont </td></tr>
<tr><td> lualatex </td><td> LuaTeX-ja </td><td> luatexja-preset </td></tr>
</tbody>
</table>

その上で、必要最低限の設定（和文フォント設定など）が行われます。そのため、(u)pLaTeX を用いる時と同様に、「何も設定せずにいきなり本文（やプレアンブル）に日本語を書く」ことができます。

#### 例 {#x483b172}

以下は、bxjsarticle クラスを用いた簡単な XeLaTeX 文書の例です。

```
\documentclass[a4paper,xelatex,ja=standard]{bxjsarticle}% ドライバ指定は無し
\usepackage{metalogo} % \XeLaTeX ロゴのため
\title{{\XeLaTeX}で日本語文書}
\author{七篠 権兵衛}
% \today の出力はJSクラスと同様に西暦になる
\begin{document}
\maketitle

\section{{\XeLaTeX}で日本語してみる}

吾輩は\textgt{猫}である！\hspace{1\zw}%
名前など無い！

\end{document}
```

以下の点にも注意してください。

- (u)pLaTeX の場合と同様に、\textmc／\textgt で和文を明朝／ゴシックに切り替えられます。
- 「現在の和文の全角幅」を表す単位 zw は (u)pLaTeX 以外では使えないので、代わりに \zw と書きます。

以下は、bxjsslide クラスを用いた pdfLaTeX 文書の例です。

```
\documentclass[pdflatex,ja=standard]{bxjsslide}% ドライバ指定は無し
\usepackage{color}
\newcommand{\alert}[1]{\textcolor{red}{#1}}
\title{{pdf\LaTeX}~で日本語文書}
\author{七篠 権兵衛}
\begin{document}
```

```
% タイトル
\maketitle
\newpage

\section{吾輩は~cat~である}
ニャーン
\newpage

\section{まとめ}
御清聴ありがとうございました。
\newpage

\section{大事なことなのでもう~1~回}
\alert{御清聴}ありがとうございました。
\end{document}
```

pdfLaTeX に対する“標準設定”では bxcjkjatype パッケージが以下の設定で自動的に読み込まれます。

```
\usepackage[whole,autotilde]{bxcjkjatype}
```

- 文書本体の全体が \begin{CJK\*}～\end{CJK\*} で囲まれていると見なされます。
    （whole オプションのため。）
    このため、本体にいきなり日本語を書き始めることができます。

- 他のエンジンと異なり、pdfLaTeX では和欧文間空白（四分空き）は自動的には挿入されません。
    代わりに、“~”が和欧文間空白を入れる命令となっているので、手動で適宜これを入れる必要があります。
    - つまり、“~”の意味が LaTeX 本来のもの（非分割欧文空白）から変更されていることに注意してください。
        非分割欧文空白を挿入するには \nbs という命令を使います。
    - \CJKtilde 命令を実行すると“~”の意味が和欧文間空白に代わり、\standardtilde 命令を実行すると“~”の意味が非分割欧文空白に戻ります。
        （bxcjkjatype の autotilde オプションは CJK 環境の先頭で自動的に \CJKtilde を発行するためのものです。）

### 不具合 {#x3d34063}

#### graphicx に明示的に xetex オプションを指定して xelatex で処理すると ! LaTeX Error: Option clash for package graphicx. {#oe701641}

以下のように、BXJS クラス（“標準設定”）の XeLaTeX 文書で graphicx パッケージを xetex のドライバオプションを明示して読み込むとエラー <strong>! LaTeX Error: Option clash for package graphicx.</strong> が発生します．

***

```
\documentclass[xelatex,ja=standard]{bxjsarticle}
\usepackage[xetex]{graphicx}
\begin{document}
吾輩は猫である。
\end{document}
```

***

XeLaTeX の標準設定では zxjatype パッケージを通して fontspec パッケージが読み込まれるのですが、この fontspec が graphicx をオプション無しで読み込んでいるためエラーが発生します。

graphicx の xetex オプション指定をはずすとタイプセットできます．

***

```
\documentclass[xelatex,ja=standard]{bxjsarticle}
\usepackage{graphicx} % オプション無し
\begin{document}
吾輩は猫である。
\end{document}
```

***

### 関連リンク {#f25f7b2d}

- [「BXjscls」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=BXjscls)
- [天地有情 BXjscls の pdflatex で日本語組版をしてみた](http://konoyonohana.blog.fc2.com/blog-entry-76.html)

#### ChangeLog {#je081c38}

- [https://github.com/zr-tex8r/BXjscls](https://github.com/zr-tex8r/BXjscls)
    - [https://github.com/zr-tex8r/BXjscls/commits/](https://github.com/zr-tex8r/BXjscls/commits/)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/latex/bxjscls](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/bxjscls/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/bxjscls/?view=log)
