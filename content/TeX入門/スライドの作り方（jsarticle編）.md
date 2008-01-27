---
title: "TeX入門/スライドの作り方（jsarticle編）"
url: "/TeX入門/スライドの作り方（jsarticle編）/"
date: 2008-01-27T20:28:23Z
pukiwiki: "TeX入門/スライドの作り方（jsarticle編）"
---

# TeX入門/スライドの作り方（jsarticle編）

## スライドの作り方（jsarticle編） {#zce7020e}

jsarticleにslideオプションを付けると簡単にスライドができます。スライドに特化した他のパッケージのような高度な機能はありませんが，通常のjsartlcleと同じ機能が使えますので，覚え直すことがほとんどないという利点があります。

### 雛形 {#c192429c}

```
\documentclass[slide,papersize]{jsarticle}
\usepackage[dvipdfm]{graphicx,color}
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

日付が付くのがまずければ，\maketitle の前に \date{} と入れてください。

文字サイズが気に入らなければ 14pt，17pt，21pt，25pt，30pt，36pt，43pt といったオプションを与えてください。

\begin{document} の前に \pagecolor\[rgb\]{0.8,0.8,1} のようにページ色を指定することもできます。
