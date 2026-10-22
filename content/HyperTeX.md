---
title: "HyperTeX"
url: "/HyperTeX/"
date: 2004-09-23T04:01:58Z
pukiwiki: "HyperTeX"
---

# HyperTeX

## HyperTeX {#la40905a}

HyperTeX は DVI ファイル中に簡単なタグを [\special 命令](</special 命令/>)で入れておくと HTML と同様のハイパージャンプができるというものです．
出力は HTML か PDF になると思われます．
Postscript (dvips) では HyperTeX の機能を十分に発揮することが出来ないでしょう（対応するビューアーがないなどで）．

詳細は次のリンクをたどってください．

- [HyperTeX FAQ](http://www.arxiv.org/hypertex/)

LaTeX2e では [hyperref](/hyperref/) パッケージを使うのが標準的な方法です。

### HyperTeX の原理 {#b19a1880}

原理は簡単で TeX の \special 命令の中に先頭に html を付けて次のようにします．

```
\special{html:<a name = "ラベル">}
  ラベルを付けられる要素をここに記述する．
\special{html:</a>}
```

上記の name の場合はラベルを付ける事が出来ます．参照したい場合は

```
\special{html:<a href = "ラベル">}
  参照したい要素
\special{html:</a>}
```

として href を使うことになります．

### HyperTeX の簡単なマクロ {#de74dc13}

このページで HyperTeX の基本仕様をすべて実現する簡単なマクロを挙げておきます．
これを myhyper.sty のような名前で保存し，スタイルファイル（パッケージ）として取り込んでください．
\href の第1引数（飛び先のURL）には，TeX の特殊文字 ~ や # が入るので，ちょっとトリックを使ってあります．

```
\def\href{\leavevmode \begingroup \@sanitize \@href}
\def\@href#1{\special{html:<a href=&quot;#1&quot;>}\endgroup \@@href}
\def\@@href#1{#1\special{html:</a>}}

\def\base{\leavevmode \begingroup \@sanitize \@base}
\def\@base#1{\special{html:<base href=&quot;#1&quot;>}\endgroup}

\def\img{\leavevmode \begingroup \@sanitize \@img}
\def\@img#1{\special{html:<img src=&quot;#1&quot;>}\endgroup}

\def\name{\leavevmode \begingroup \@sanitize \@name}
\def\@name#1{\special{html:<a name=&quot;#1&quot;>}\endgroup \@@name}
\def\@@name#1{#1\special{html:</a>}}
```

使い方は，

```
\href{#foo}{ここ}をクリックすれば
\name{foo}{ここ}に飛びます．
```

や

```
\href{https://okumuralab.org/~okumura/foo.html#bar}{ここ}
```

のようにします．

### hyperref を上手に呼んで便利な PDF を作る {#ubbc3ac6}

$TEXMF/doc/latex/hyperref/ や [hyperref.sty: TeX パッケージ (熊澤さん)](http://xyoshiki.web.fc2.com/tex/hyperref.html), [qa:33459](https://okumuralab.org/~okumura/texfaq/qa/33459.html) などを参考にして，うまく hyperref を呼ぶことで，手間少なく便利な PDF を作ることができます．

下にソース例を示しますが，\\@subtitle, \\@belongsto, \advisor@prefix, \\@advisor, \advisor@suffix, \\@keywords は適切に定義されているとします．このとき，注目点は {} の使い方です．

```
\author{NANNO Nanibeh}
```

といった名前の指定をしたとき，

```
pdfauthor=\@author
```

としたのでは，半角空白が詰まってしまいます．

```
pdfauthor={\@author}
```

とすることで半角空白が活きます．

```
pdfauthor={\@author{} (\advisor@prefix:{} \@advisor{} \advisor@suffix)}
```

のように随所に {} を挟んでいるのも，その次の半角空白を活かすためです（このあたりの技術は TeX ユーザのよく知るところですね？）．

タイトルには，強制改行の \\\ や，ベタ打ちでは消えてほしい半角空白を付け加えていることもあるかもしれません．余分な半角空白を消すだけなら，上記のトリックを逆に利用して，

```
pdftitle=\@title
```

とすればよいわけです．
強制改行の \\\ が入っているときには，\usepackage のオプションで指定することは厳しいので，先に hyperref を呼んでから，あとから \hypersetup を加えるとうまくいきます．

```
\RequirePackage[dvipdfmx,%
 bookmarks=true, bookmarksnumbered=true, bookmarkstype=toc, bookmarksopen=true,%
 pdfstartview={FitH -32768}, pdfpagelayout=TwoColumnRight, pdfdisplaydoctitle=true,%
% pdftitle=\@title,
 pdfsubject={\@subtitle{} (\@belongsto)},%
 pdfauthor={\@author{} (\advisor@prefix:{} \@advisor{} \advisor@suffix)},%
 pdfkeywords={\@keywords}%
]{hyperref}
\RequirePackage{pxjahyper}

\newcommand\org@maketitle{}
\let\org@maketitle\maketitle
\def\maketitle{%
  \pdfstringdefDisableCommands{\let\\\empty}
  \hypersetup{
    pdftitle={\@title},
  }%
  \org@maketitle
}
```

<!-- MyTeXpert のページ -->
<!-- -https://mytexpert.osdn.jp/index.php?HyperTeX  -->
<!-- から移植。 -->
