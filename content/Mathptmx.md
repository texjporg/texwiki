---
title: "Mathptmx"
url: "/Mathptmx/"
date: 2005-11-05T22:34:44Z
pukiwiki: "Mathptmx"
---

# Mathptmx

## Mathptmx {#a95ec0b1}

Mathptmx は，本文・数式の両方のフォントを Times に変更するパッケージです。

***

> ![](https://web.archive.org/web/20151107130735if_/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/mathtime/mathptmx.jpg)
>
> ***
>

### サポートされない記号 {#j8ad9e3f}

LaTeX 標準の数式記号のうち，\jmath，\amalg，\coprod は mathptmx では出力できません。

以下のようにすると，この3種類の記号を Computer Modern で出力することができます。<br> <!-- mathptmx では letter と letter-like 以外の記号は CM が使われる。 -->

<!-- このソースは，[[newtx]] を参考にして書きました。 -->

```
\documentclass{article}
\usepackage{mathptmx}
\DeclareSymbolFont{cmletters}{OML}{cmm}{m}{it}
\DeclareSymbolFont{cmsymbols}{OMS}{cmsy}{m}{n}
\DeclareSymbolFont{cmlargesymbols}{OMX}{cmex}{m}{n}
\DeclareMathSymbol{\myjmath}{\mathord}{cmletters}{"7C}
\DeclareMathSymbol{\myamalg}{\mathbin}{cmsymbols}{"71}
\DeclareMathSymbol{\mycoprod}{\mathop}{cmlargesymbols}{"60}
\let\jmath\myjmath
\let\amalg\myamalg
\let\coprod\mycoprod
\begin{document}
$\jmath \amalg \coprod$
\end{document}
```
