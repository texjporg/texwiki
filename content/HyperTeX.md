---
title: "HyperTeX"
url: "/HyperTeX/"
date: 2004-09-23T04:01:58Z
pukiwiki: "HyperTeX"
---

# HyperTeX

## HyperTeX {#la40905a}

\[TODO\] hyperref.sty の使い方を詳しく

HyperTeX は dvi ファイル中に簡単なタグを \special 命令で入れておくと
ハイパージャンプができるというものです。
[dviout](/dviout/)
はハイパージャンプに対応しています。

詳細は次のリンクをたどってください。

- [HyperTeX FAQ](http://www.arxiv.org/hypertex/)
- [上記の日本語訳](http://www.ksky.ne.jp/~hiro-san/pc/hypertex_faq_jp.html)
- [HyperTeXの入手と設定方法](http://www.ksky.ne.jp/~hiro-san/pc/hypertex.html)

LaTeX2eでは hyperref.sty を使うのが標準的な方法ですが，念のため，HyperTeX
の基本仕様をすべて実現する簡単なマクロを挙げておきます。
これを myhyper.sty のような名前で保存し，
スタイルファイル（パッケージ）として取り込んでください。
\href の第1引数（飛び先のURL）には，TeX の特殊文字 ~ や # が入るので，
ちょっとトリックを使ってあります。

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
\name{foo}{ここ}に飛びます。
```

や

```
\href{http://oku.edu.mie-u.ac.jp/~okumura/foo.html#bar}{ここ}
```

のようにします。

### hyperref を上手に呼んで便利な PDF を作る {#ubbc3ac6}

$TEXMF/doc/latex/hyperref/ や [PDFによる詳細な説明書 (角藤氏)](http://www.fsci.fuk.kindai.ac.jp/~kakuto/win32-ptex/web754w32.pdf), [qa:33459](https://okumuralab.org/~okumura/texfaq/qa/33459.html) などを参考にして，うまく hyperref を呼ぶことで，手間少なく便利な PDF を作ることができます．

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

のように随所に {} を挟んでいるのも，その次の半角空白を活かすためです (このあたりの技術は TeX ユーザのよく知るところですね?)．

タイトルには，強制改行の \\\ や，ベタ打ちでは消えてほしい半角空白を付け加えていることもあるかもしれません．余分な半角空白を消すだけなら，上記のトリックを逆に利用して，

```
pdftitle=\@title
```

とすればよいわけです．
強制改行の \\\ が入っているときには，usepackage のオプションで指定することは厳しいので，先に hyperref を呼んでから，あとから \hypersetup を加えるとうまくいきます．

```
\AtBeginDvi{\special{pdf:tounicode 90ms-RKSJ-UCS2}}
\RequirePackage[dvipdfm,%
 bookmarks=true, bookmarksnumbered=true, bookmarkstype=toc, bookmarksopen=true,%
 pdfstartview={FitH -32768}, pdfpagelayout=TwoColumnRight, pdfdisplaydoctitle=true,%
% pdftitle=\@title,
 pdfsubject={\@subtitle{} (\@belongsto)},%
 pdfauthor={\@author{} (\advisor@prefix:{} \@advisor{} \advisor@suffix)},%
 pdfkeywords={\@keywords}%
]{hyperref}

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
