---
title: "TIPA"
url: "/TIPA/"
date: 2004-09-23T04:25:50Z
pukiwiki: "TIPA"
---

# TIPA

## TIPA {#z57e2958}

[TIPA](http://www.l.u-tokyo.ac.jp/~fkr/computer.htm) は
東京大学の[福井玲さん](http://www.l.u-tokyo.ac.jp/~fkr/)が作られた
IPA （<strong>I</strong>nternational <strong>P</strong>honetic
<strong>A</strong>lphabet，国際音声記号，謂ゆる発音記号）の

フォントです。TIPA の T は TeX または Tokyo （東京大学？）を
意味するとのことです。同じ福井さんが製作に携わった TSIPA をベースに，
大幅に機能およびフォントデザインを改良したものです。

TIPA のフォントには IPA の記号のほか，
アメリカの音声学，インド・ヨーロッパ言語，東アジアの言語学などで
使用される音声記号が含まれています。これらは Computer Modern をベースに
設計されており，Roman，Slanted，Bold Extended，Sans Serif，Typewriter 体など
豊富な種類が使用できます（Italic 体はありません）。また，Times
及び Helvetica にデザインを近付けたフォント xipa も含まれています。

福井さんのウェブサイトの
[tipa/ ディレクトリ](http://www.l.u-tokyo.ac.jp/~fkr/tipa/)から
最新版がダウンロードできます（執筆時点での最新版は
tipa-1.3 です）。[CTAN:fonts/tipa/](https://mirror.ctan.org/fonts/tipa/) でもミラーされています。

### インストール {#j6ff5f64}

make が使える環境であれば，Makefile の先頭の PREFIX の定義を適宜変更し

```
$ make install
```

を実行します。

手動でインストールする場合には，展開されたファイル群を以下の場所に移動します
（下記 $TEXMFLOCAL の部分はお使いの環境に応じて読み替えてください）。

- sty/ ディレクトリの中身を $TEXMFLOCAL/tex/latex/tipa/ に入れる。
- mf/ ディレクトリの中身を $TEXMFLOCAL/fonts/source/tipa/ に入れる。
- tfm/ ディレクトリの中身を $TEXMFLOCAL/fonts/tfm/tipa/ に入れる。
- type1/ ディレクトリの中身を $TEXMFLOCAL/fonts/type1/tipa/ に入れる。
- dvips/ ディレクトリの中身を $TEXMFLOCAL/fonts/map/dvips/tipa/ に
    入れる。[^1]

- doc/ ディレクトリの中身を $TEXMFLOCAL/doc/tipa/ に入れる。

移動したら，必要に応じて

```
mktexlsr
```

や

```
updmap --enable Map tipa.map
```

などを実行します。

その後 TIPA の配布に含まれる doc/ ディレクトリ内にある tipaman.tex を
コンパイルしてみます。インストールに成功していれば，
生成された tipaman.dvi の全ページが正常に表示されます。

### 使い方 {#o25babb1}

\usepackage コマンドで tipa.sty を読み込めば，TIPA の機能を
使用できるようになります。

```
%%% -*- mode: yatex; Coding: iso-2022-jp; Encoding: ISO-2022-JP -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage{tipa}
\begin{document}
...
\end{document}
```

特殊な記号を使用する場合には，tipa.sty の後に続けて tipx.sty を指定します。

```
%%% -*- mode: yatex; Coding: iso-2022-jp; Encoding: ISO-2022-JP -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage{tipa,tipx}
\begin{document}
...
\end{document}
```

音声記号の入力方法には次のものがあります。英語の “explanation” の発音を
表す記号 \[&#x2cc;&#x25b;kspl&#x259;&#x2c8;ne&#x26a;&#x283;&#x259;n\] を
例として挙げています。

1. 命令型マクロ \textipa の引数内でショートカット文字を使用する。

    ```
    \textipa{[""Ekspl@"neIS@n]}
    ```

1. 宣言型マクロ \tipaencoding と共にショートカット文字を使用する。

    ```
    {\tipaencoding [""Ekspl@"neIS@n]}
    ```

1. IPA 環境内でショートカット文字を使用する。

    ```
    \begin{IPA}
      [""Ekspl@"neIS@n]
    \end{IPA}
    ```

1. 通常のテキスト内でマクロ名を指定する。

    ```
    [\textsecstress\textepsilon kspl\textschwa
    \textprimstress ne\textsci\textesh\textschwa n]
    ```

使用できるコマンド，フォントの
詳細は[tipaman.pdf](http://www.ring.gr.jp/pub/text/CTAN/fonts/tipa/tipaman.pdf)
をご参照ください。

[^1]: 旧い [TDS](https://mirror.ctan.org/tds/) では $TEXMFLOCAL/dvips/config/ でした。
