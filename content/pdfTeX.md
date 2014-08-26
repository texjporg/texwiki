---
title: "pdfTeX"
url: "/pdfTeX/"
date: 2013-07-16T08:42:39Z
pukiwiki: "pdfTeX"
---

# pdfTeX

## [pdfTeX](http://www.tug.org/applications/pdftex/) {#wed85f46}

pdfTeX は Hàn Thế Thành により開発された TeX の派生プログラムです。
主な特徴として

- PDF を直接出力できる。
- Microtypography 拡張。
    - [http://www.tug.org/TUGboat/Articles/tb22-3/tb72thanh.pdf](http://www.tug.org/TUGboat/Articles/tb22-3/tb72thanh.pdf)

などがあります。

pdfTeX の Microtypography 拡張は次の二つの部分からなります:

- マージン・カーニング -- 特定の種類の文字を余白に僅かにはみ出させることで、テキストの端がよりきれいに揃ったように見せることができます。マージン・カーニングなしでは、ある種の文字が端にきたとき、錯覚によりテキストの端ががたついているような印象を受けることがあります。マージン・カーニングはぶら下げ組み (hanging punctuation) と似たところがあります。適切な設定をした上でこれを適用することでテキスト・ブロックの見た目をかなり改善することができます。
- フォント・エクスパンション -- これはわずかに横に伸縮させたフォントを利用することで単語間のスペースをより均一にするテクニックです。これはまたより良い位置でのライン・ブレイキングを行うことに使うこともできます。

マニュアル (英語) は

- [ftp://ctan.tug.org/tex-archive/systems/pdftex/manual/pdftex-l.pdf](ftp://ctan.tug.org/tex-archive/systems/pdftex/manual/pdftex-l.pdf)

です。

### ChangeLog {#j6e7e366}

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/pdftexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/pdftexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/pdftexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/pdftexdir/ChangeLog?view=markup)
    - [NEWS](http://tug.org/svn/texlive/trunk/Build/source/texk/web2c/pdftexdir/NEWS?view=markup)

## 使い方 {#m3e1918c}

ここでは pdfTeX の拡張機能についてその使用法を解説します。主に "[Margin Kerning and Font Expansion with pdfTEX](http://www.tug.org/TUGboat/Articles/tb22-3/tb72thanh.pdf)" からの抜粋 (の翻訳) です。いくぶん古い記事ですので現在での利用方法とはかけ離れているかもしれません。

### マージン・カーニング {#dc432ab6}

マージン・カーニングのもっとも簡単な使用法は以下のようなものです:

```
 \input protcode.tex
 \font\f=cmr10
 \rpcode\f‘\-=700
 \adjustprotcode\f
 \f
 \pdfprotrudechars=1
 Some text...
```

ここで \rpcode は  ”right protruding code” ("右ぶら下げコード") です。最初のパラメータはフォントの識別子、そして二番目は文字コードです。三番目のパラメータは右のマージン (余白) に対してどれだけの量突き出すかを指定します。上の例では、フォント \f のハイフンが右マージンの境界に来たとき、それがマージンに文字幅の 700 / 1000 (つまり 70%) だけ突き出すことを表します。

それぞれの文字に対してぶら下げ係数 (protruding factor) を文字幅の千分率で指定することで都合よく処理できます。pdfTeX のバージョン 0.14h までは \rpcode はこのように実装されています。しかしながら、この方法は文字幅ゼロのものに対しては上手くいきません。このためバージョン 0.14h とそれ以降ではこの量はフォントの em (エム) に対する千分率で指定します。
ここでは、マクロ \adjustprotcode (ファイル protrude.tex で定義されている)  が、使用されている pdfTeX のバージョンが 0.14h より古いものかチェックし、もしそうならばバージョン 0.14h 以前 の設定 (つまり文字幅の千分率指定) からそれ以降のバージョンの対応する設定 ( em の千分率) に変換します。

デフォルトでは、全ての文字に対して \rpcode はゼロに設定されています。このため \rpcode を陽に設定しない限りは "ぶら下げ" は起こりません。

プリミティブ  \pdfprotrudechars はマージン・カーニングをグローバル・レベルで制御するのに用いられます。

- ≤ 0: マージン・カーニングなし。
- 1: レベル 1 マージン・カーニングで行分割処理に影響を与えません。この設定は行分割処理をTeX と互換にする手軽なものです。
- ≥ 2: レベル 2 マージン・カーニングです。これは通常、行分割処理で異なる結果をもたらします。この設定は行分割処理において、文字をマージンに追い出す分量を考慮にいれます。結果としてより良い単語間スペーシングをもたらします。

同様に左マージンに対して作用する \lpcode も用意されています。それぞれの文字に対して \rpcode と \lpcode を設定するのは大変です。pdfTeX では多くの本文用フォントで十分良く機能する汎用の protruding factor のセットを提供します。これは次の例のように使えます:

```
 \input protcode.tex
 \font\f=cmr10
 \setprotcode\f
 \f
 \pdfprotrudechars=2
 Some text...
```

マクロ \setprotcode は、ファイル protcode.tex で定義されており、これは "ぶら下げ" の設定をした後に \adjustprotcode を実行します。このためこの例では \adjustprotcode がありません。

\lpcode と \rpcode への割り当ては常にグローバルなものです。

### フォント・エクスパンション {#ya7b30e1}

フォント・エクスパンションの機能は伸縮されたバージョンのフォントを必要とするためより複雑です。いくつかのフォント形式で利用可能ですが、ここではより一般的な PostScript Type1 フォントでの場合について解説します。

## pdfLaTeX で日本語 {#dfcf126c}

pdfLaTeX で日本語を扱うには CJK パッケージを使います。CJK パッケージについては

- [CJK LaTeX/BXcjkjatype](/LaTeX-CJK/)
- [My Future Sight for Past: pdflatex](http://myfuturesightforpast.blogspot.jp/search/label/pdflatex)

を参照してください。

とりあえず IPA 明朝を使って日本語を出してみましょう。まず TFM や fd ファイルの準備が必要です。ttf2tfm プログラムでサブフォントを生成します：

```
 ttf2tfm  ipam.ttf ipam@Unicode@ &> log
```

大量の TFM ファイルができます。そして fd ファイル "c70ipam.fd" を作ります。以下のような内容です：

```
 \ProvidesFile{c70ipam.fd}
 \DeclareFontShape{C70}{ipam}{m}{n}{<-> CJK * ipam}{}
 \endinput
```

LaTeX ソースを書きます。(この例ではエンコーディングを UTF-8 にします)

```
 \documentclass{article}
 \usepackage{CJK}
 \pdfmapline{=ipam@Unicode@ <ipam.ttf}
 \begin{document}
 \begin{CJK}{UTF8}{ipam}
 こんにちは。
 \end{CJK}
 \end{document}
```

ここで、"\pdfmapline" はフォントマップを定義する pdfTeX の拡張コマンドです。
