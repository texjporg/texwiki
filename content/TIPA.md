---
title: "TIPA"
url: "/TIPA/"
date: 2004-09-23T04:25:50Z
pukiwiki: "TIPA"
---

# TIPA

## TIPA {#z57e2958}

[TIPA](http://www.l.u-tokyo.ac.jp/~fkr/computer.htm)は東大の[福井玲](http://www.l.u-tokyo.ac.jp/~fkr/)先生が作られたIPA (International Phonetic Alphabet、国際音標文字、いわゆる発音記号フォント) です。TIPAのTはTeXまたはTokyo (東大?) を意味するとのことです。同じ福井先生が製作に携わったTSIPAをベースに、大幅に機能およびフォントデザインを改良したものです。

TIPAのフォントにはIPAの記号のほか、アメリカの音声学、インド・ヨーロッパ言語、東アジアの言語学などで使用される音声記号が含まれています。これらはComputer Modernをベースに設計されており、Roman、Slanted、Bold Extended、Sans Serif、Typewriter体など豊富な種類が使用できます (Italic体はありません)。また、TimesおよびHelveticaにデザインを近づけたバージョンも含まれています。

福井先生のサイトの[tipaディレクトリ](http://www.l.u-tokyo.ac.jp/~fkr/tipa/)
から最新版がダウンロードできます (執筆時点での最新版はtipa-1.3です)。
[CTANのfonts/tipa/](http://www.ring.gr.jp/pub/text/CTAN/fonts/tipa/)でもミラーされています。

### インストール {#j6ff5f64}

makeが使える環境であれば、Makefileの先頭のPREFIXの定義を適宜変更し

```
make install
```

を実行します。

手動でインストールする場合は、展開されたファイル群を以下の場所に移動します (下記/usr/local/share/texmfの部分はお使いの環境に応じて読み替えて下さい)。

- styディレクトリの中身を/usr/local/share/texmf/tex/latex/tipaに入れる。
- mfディレクトリの中身を/usr/local/share/texmf/fonts/source/fkr/tipaに入れる。
- tfmディレクトリの中身を/usr/local/share/texmf/fonts/tfm/fkr/tipaに入れる。
- type1ディレクトリの中身を/usr/local/share/texmf/fonts/type1/fkr/tipaに入れる。
- dvipsディレクトリの中身を/usr/local/share/texmf/dvips/configに入れる (※)。

> (※) TDS 1.1では/usr/local/share/texmf/fonts/map/dvips/fkr/tipaになります。

移動したら、必要に応じてmktexlsr、updmap --enable Map tipa.mapなどを実行します。

その後TIPAの配布に含まれるdocディレクトリ内にある、tipaman.texをコンパイルします。インストールに成功していれば、生成されたtipaman.dviの全ページが正常に表示されます。

### 使い方 {#o25babb1}

\usepackageコマンドでtipa.styを読み込めば、TIPAの機能を使用できるようになります。

```
\documentclass{jsarticle}
\usepackage{tipa}
\begin{document}
:
\end{document}
```

特殊な記号を使用する場合は、\usepackage{tipa}の後に続けて\usepackage{xipa}を指定します。

```
\documentclass{jsarticle}
\usepackage{tipa}
\usepackage{xipa}
\begin{document}
:
\end{document}
```

音声記号は、

- 通常のテキスト内でマクロ名を指定する
- マクロの引数や環境内でショートカット文字を使用する

のいずれかの方法で入力できます。たとえば英語の「explanation」の発音を表す記号

> \[ˌɛkspləˈneɪʃən\]

は

```
[\textsecstress\textepsilon kspl\textschwa
\textprimstress ne\textsci\textesh\textschwa n]
```

または

```
\textipa{[""Ekspl@"neIS@n]}
```

と入力します。

使用できるコマンド、フォントの詳細はtipaman.texをご参照下さい ([TIPA](http://www.l.u-tokyo.ac.jp/~fkr/computer.htm)のページでは、tipaman.texをコンパイルした文書のPDF版 (TIPAマニュアル) を見ることもできます)。
