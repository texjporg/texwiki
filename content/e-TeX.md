---
title: "e-TeX"
url: "/e-TeX/"
date: 2008-01-11T11:04:58Z
pukiwiki: "e-TeX"
---

# e-TeX

## e-TeX {#hcfcdf97}

### e-TeX とは {#b5bc17ea}

The NTS (<strong>N</strong>ew <strong>T</strong>ypesetting <strong>S</strong>ystem) team によって始められた
（欧文） TeX の拡張。1999年以降は P. Breitenlohner が copyright 所有者と
なっている。Knuth オリジナルの TeX と100%の互換性を保ちながら
TeX の少々不便なところを補うような実用性の高い拡張となっている。
近年，ConTeXt や LaTeX における hyperref package など
e-TeX の拡張モードを要求するマクロ類が増加しつつある。
また pdfTeX，Aleph （Omega と e-TeX のマージ），[XeTeX](/XeTeX/)，LuaTeX といった
主だった TeX の拡張版においても e-TeX の拡張機能は取り入れられており，
事実上の新標準とも呼ぶべき重要な拡張と言える。

### 互換モードと拡張モード {#h1a4de54}

互換モード (TeX compatibility mode) では，Knuth オリジナルの TeX と
完全に同一の動作をする。すなわち，TRIP テストが完全に通る。
拡張モード (extended mode) では，e-TeX で追加したプリミティヴなど
e-TeX の様々な拡張仕様が動作する。
拡張モードを選択するのは format 作成時である。
指定ファイル名の先頭に “\*” を付けるか，あるいはオプション --etex を
付けると，拡張モードの format ファイルをダンプする。
通常 e-TeX をサポートするエンジンに対して，fmtutil.cnf では
拡張モードの format file を作成するように設定してある。

### レジスタの増加 {#c0a083b8}

様々なレジスタ (count, dimen, skip, muskip, box, token) の数が
オリジナルの TeX では256個なのに対し，e-TeX では32,768個に
拡張されている。0 から 255 まではオリジナルの TeX と同じ方法で
実現されているが，256 から 32767 までのレジスタは要求されたときに
TeX のメインメモリ領域に sparse registers として作成される。

### プリミティブの拡張 {#b966af46}

### TeX--XeT {#saadfb87}

拡張モードで \TeXXeTstate が正のときに有効となる。
組み方向で「左から右」と「右から左」の双方向が可能で，
それらの混植をサポートしている。「右から左」の場合であっても，
出力する DVI ファイルは特別な拡張の無い仕様となっている。

### 参考サイト {#y961b75c}

- [e-TeX reference site](https://mirror.ctan.org/systems/e-tex/v2/)
    ([CTAN](/CTAN/)@[Ring server](https://mirror.ctan.org/../../../))

- マニュアルは
    [W32TeX](http://www.fsci.fuk.kindai.ac.jp/~kakuto/win32-ptex/) の配布にも
    含まれています (See [qa:50569](https://okumuralab.org/~okumura/texfaq/qa/50569.html))。

### コメント {#a61ff5c1}

何はともあれ、作ってみました。-- ttk 2008-01-12 (土) 05:04:58
