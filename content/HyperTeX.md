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
