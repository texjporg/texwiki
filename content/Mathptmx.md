---
title: "Mathptmx"
url: "/Mathptmx/"
date: 2005-11-05T22:34:44Z
pukiwiki: "Mathptmx"
---

# Mathptmx

## Mathptmx {#a95ec0b1}

Mathptmx は，本文・数式とも，フォントを Computer Modern から Times にかえるパッケージです。このパッケージを利用すると，\jmath，\amalg，\coprod が出力できなくなってしまいます。下のようにすると，この3種類の文字（演算子）だけ Computer Modern で，ほかは Times で出力することができます。このソースは，TXFonts を参考にして書きました。

```
\documentclass{jsarticle}
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
