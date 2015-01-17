---
title: "e-TeX"
url: "/e-TeX/"
date: 2008-01-11T11:04:58Z
pukiwiki: "e-TeX"
---

# e-TeX

## e-TeX {#hcfcdf97}

### e-TeX とは {#b5bc17ea}

The NTS (<strong>N</strong>ew <strong>T</strong>ypesetting <strong>S</strong>ystem) team によって始められた，
（欧文）TeX の拡張です．
1999年以降は P. Breitenlohner が copyright 所有者となっています．
Knuth オリジナルの TeX と100%の互換性を保ちながら
TeX の少々不便なところを補うような実用性の高い拡張となっています．
近年，[ConTeXt](/ConTeXt/) や LaTeX における [hyperref](/hyperref/) パッケージなど，
e-TeX の拡張モードを要求するマクロ類が増加しつつあります．
また [e-pTeX](/e-pTeX/), [e-upTeX](/upTeX,upLaTeX/), [pdfTeX](/pdfTeX/),
[LuaTeX](/LuaTeX/), LuaJITTeX, [XeTeX](/XeTeX/),
[Aleph](http://wiki.contextgarden.net/Aleph) （Omega と e-TeX のマージ）
といった主だった TeX の拡張版においても e-TeX の拡張機能は取り入れられており，
事実上の新標準とも呼ぶべき重要な拡張と言えます．

### 互換モードと拡張モード {#h1a4de54}

- <strong>互換モード</strong> (TeX compatibility mode) では，Knuth オリジナルの
    TeX と完全に同一の動作[^1]をします．

- <strong>拡張モード</strong> (extended mode) では，e-TeX で追加したプリミティヴなど
    e-TeX の様々な拡張仕様が動作します．

拡張モードを選択するのは format 作成時です．
指定ファイル名の先頭に “\*” を付けるか，あるいはオプション --etex を付けると，
拡張モードの format ファイルをダンプします．
通常 e-TeX をサポートするエンジンに対して，fmtutil.cnf では
拡張モードの format file を作成するように設定してあります．

### レジスタの増加 {#c0a083b8}

様々なレジスタ (count, dimen, skip, muskip, box, token) の数が
オリジナルの TeX では256個なのに対し，e-TeX では32,768個に拡張されています．
0 から 255 まではオリジナルの TeX と同じ方法で実現されていますが，
256 から 32767 までのレジスタは要求されたときに
TeX のメインメモリ領域に sparse registers として作成されます．

### プリミティブの拡張 {#b966af46}

#### tracing の改良と内部状態の取得 {#v3ec6be0}

\tracingcommands などの動作が改良され，
より大きな値を指定することでより詳細な TeX の内部動作を確認できるようになりました．
これに関連して \tracingifs，\tracinggroups といった条件判断文とか
グループの開始・終了状況を表示するプリミティブも追加されています．

また，TeX ソース内部でも「現在いるもっとも内側の条件判断文の深さや種類」や
グループについてのそれらなどを
\currentifbranch，\currentiflevel，\currentgrouptype，\currentgrouplevel で
調べることができます．

#### 拡張された条件判断文 {#i43dce13}

- \ifdefined, \ifcsname,..., \endcsname という
    「（引数が）定義されているか」を調べるプリミティブが追加されています．

- \unless という，真理値を反転させるプリミティブが追加されています．

#### 「式」の表現 {#o4b25094}

\numexpr，\dimexpr，\glueexpr，\muexpr という4つのプリミティブが追加され，
それらによって整数値・長さ量・グルーを結果とする式を扱うことができます．
例えば，e-TeX のマニュアルには次のような例が載っています．

```
\ifdim\dimexpr (2pt-5pt)*\numexpr 3-3*13/5\relax + 34pt/2<\wd20
```

#### \middle プリミティブ {#a6c61606}

TeX では，例えば

```
\left( ... \right)
```

で括弧の大きさが中身に応じて自動調整されるのだったが，これでは
「区切り記号が3個以上のときに，全部の記号の大きさを自動調整」させるときには
面倒なマクロを組まなければなりませんでした．

一方，e-TeX で追加された \middle プリミティブを用いると，そのようなものも

```
\left< ... \middle| ... \right>
```

と簡単に実現できます．

### TeX--XeT {#saadfb87}

拡張モードで \TeXXeTstate が正のときに有効となります．
組み方向で「左から右」と「右から左」の双方向が可能で，それらの混植をサポートしています．
「右から左」の場合であっても，出力する DVI ファイルは特別な拡張の無い仕様となっています．

### 注意 {#hfcfb969}

- pdfTeX は，現在では e-TeX 対応したものだけがあり，古いものを除いて
    e-TeX 対応していないものはありません．
    （pdfetex は互換性のために残してある，pdftex へのリンク．）
    - 参考：[pTeX を UTF-8 入力に対応させる試み(6)のコメント(2)](http://tutimura.ath.cx/ptetex/?UTF-8%C2%D0%B1%FE%286%29#h3780916)
- platex, pdflatex の -etex オプションは，
    フォーマットファイル作成時だけ意味のあるオプションですから，
    コンパイル時に指定しても無意味です．
    - 参考：[e-TeX の互換モードと拡張モード](/e-TeX/#h1a4de54)
        <!-- 教えてくれた人ありがとうございます． -->

### 参考サイト {#y961b75c}

- [e-TeX V2 reference site](https://mirror.ctan.org/systems/e-tex/v2/)
    ([CTAN](/CTAN/)@[Ring server](https://mirror.ctan.org/../../../))

- マニュアルは [W32TeX](/W32TeX/) の配布にも 含まれています．(See [qa:50569](https://okumuralab.org/~okumura/texfaq/qa/50569.html))
- [The e-TeX Short Reference Manual](http://tex.loria.fr/moteurs/etex_ref.html)
- \[[e-TeX\]記事一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=%2A%5Be-TeX%5D)
- [「e-TeX」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=e-TeX)

### コメント {#a61ff5c1}

- 何はともあれ、作ってみました。-- ttk 2008-01-12 (土) 05:04:58
- 「プリミティブの拡張」のところを加筆してみました． -- 北川 2008-01-14 (月) 09:24:57

[^1]: すなわち，TRIP テストが完全に通ります．
