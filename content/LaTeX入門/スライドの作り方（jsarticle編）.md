---
title: "LaTeX入門/スライドの作り方（jsarticle編）"
url: "/LaTeX入門/スライドの作り方（jsarticle編）/"
date: 2015-05-22T17:33:55Z
pukiwiki: "LaTeX入門/スライドの作り方（jsarticle編）"
---

# LaTeX入門/スライドの作り方（jsarticle編）

[LaTeX入門](</LaTeX入門/>) /
[最初の例](</LaTeX入門/最初の例/>) /
[簡単な数式 (1)](</LaTeX入門/簡単な数式(1)/>) /
[簡単な数式 (2)](</LaTeX入門/簡単な数式(2)/>) /
[各種パッケージの利用](</LaTeX入門/各種パッケージの利用/>) /
[レポート](</LaTeX入門/レポート/>) /
[HTML と LaTeX の比較](</LaTeX入門/HTMLとLaTeXの比較/>) /
[複雑な数式](</LaTeX入門/複雑な数式/>) /
[図表](</LaTeX入門/図表/>) /
[図表の配置](</LaTeX入門/図表の配置/>) /
[相互参照とリンク](</LaTeX入門/相互参照とリンク/>) /
[文献引用](</文献引用/>) /
[索引作成](</索引作成/>) /
[LaTeX マクロの作成](</LaTeX入門/LaTeXマクロの作成/>) /
スライドの作り方（jsarticle 編） /
[応用的な使い方](</LaTeX入門/応用的な使い方/>)

***

## スライドの作り方 {#zce7020e}

これまでレポート作成の例などを jsarticle クラスを使って示してきましたが，同じ jsarticle クラスに slide オプションを与えると簡単にスライドを作成できます．
また，LaTeX にはスライド作成に特化したクラスもありますので，ここで簡単に紹介します。

### jsarticle クラスによるスライドの雛形 {#c192429c}

スライドに特化した他のパッケージのような高度な機能はありませんが，通常の jsartlcle と同じ機能が使えますので，覚え直すことがほとんどないという利点があります．

```
\documentclass[slide,papersize]{jsarticle}
\usepackage[dvipdfmx]{graphicx,color}
\begin{document}

\title{題名}
\author{著者名}
\maketitle

\section{セクション名}

\begin{itemize}
\item ほげ
\item ほげほげ
\item ほげほげほげ
\end{itemize}

\end{document}
```

日付が付くのがまずければ，\maketitle の前に \date{} と入れてください．

文字サイズが気に入らなければ
14pt，17pt，21pt，25pt，30pt，36pt，43pt
といったオプションを与えてください．

\begin{document} の前に
\pagecolor\[rgb\]{0.8,0.8,1} のようにページ色を指定することもできます．

### jsarticle クラスの slide オプション実例 {#jce15567}

- [LaTeX jsclassesでプレゼンテーション](http://windom.phys.hirosaki-u.ac.jp/fswiki/wiki.cgi?page=LaTeX+jsclasses%A4%C7%A5%D7%A5%EC%A5%BC%A5%F3%A5%C6%A1%BC%A5%B7%A5%E7%A5%F3)
- [LaTeX + jsarticle + slide でスライドを作る](http://xaro.hatenablog.jp/entry/2013/09/26/004920)
- [プレゼンで太字を使いたい？](http://fugenji.org/~thomas/diary/index.php?no=r774)

### bxjsslide クラスの場合 {#t2504dc0}

ZR さんによる bxjsslide クラスを使う場合は，最初の行を以下のように書けば同様にスライドを作成できます．

```
\documentclass[uplatex,dvipdfmx,ja=standard]{bxjsslide} % upLaTeX の場合
```

```
\documentclass[dvipdfmx,ja=standard]{bxjsslide}         % pLaTeX の場合
```

## スライド作成に特化したパッケージ {#e9704f43}

プレゼンテーション用の LaTeX クラスとして

- [Beamer](/Beamer/)
- [powerdot](/powerdot/)

などがあります．
その他のツールは[プレゼンツール](</プレゼンツール/>)を参照してください．
