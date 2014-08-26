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

などがあります。

pdfTeX の Microtypography 拡張は次の二つの部分からなります:

- マージン・カーニング -- 特定の種類の文字を余白にいくらかはみ出させることで、テキストの端 (行頭や行末) がよりきれいに揃ったように見せることができます。マージン・カーニングなしでは、ある種の文字が端にきたとき、錯覚によりテキストの端ががたついているような印象を受けることがあります。マージン・カーニングはぶら下げ組み (hanging punctuation) と似たところがあります。適切な設定をした上でこれを適用することでテキスト・ブロックの見た目をかなり改善することができます。
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

ここでは pdfTeX の拡張機能についてその使用法を解説します。

### マージン・カーニング {#dc432ab6}

マージン・カーニングのもっとも簡単な使用法は以下のようなものです:

```
 \font\f=cmr10
 \rpcode\f`\-=500
 \f
 \pdfprotrudechars=1
 Some text...
```

ここで \rpcode は  ”right protruding code” ("右ぶら下げコード") です。最初のパラメータはフォントの識別子、そして二番目は文字コードです。三番目のパラメータは右のマージン (余白) に対してどれだけの量突き出すかを指定します。上の例では、フォント \f のハイフンが右マージンの境界に来たとき、それがマージンにフォントの em (エム) の 500 / 1000 (つまり 50%) だけ突き出すことを表します。

デフォルトでは、全ての文字に対して \rpcode はゼロに設定されています。このため \rpcode を陽に設定しない限りは "ぶら下げ" は起こりません。

プリミティブ  \pdfprotrudechars はマージン・カーニングをグローバル・レベルで制御するのに用いられます。

- ≤ 0: マージン・カーニングなし。
- 1: レベル 1 マージン・カーニングで行分割処理に影響を与えません。この設定は行分割処理をTeX と互換にする手軽なものです。
- ≥ 2: レベル 2 マージン・カーニングです。これは通常、行分割処理で異なる結果をもたらします。この設定は行分割処理において、文字をマージンに追い出す分量を考慮にいれます。結果としてより良い単語間スペーシングをもたらします。

同様に左マージンに対して作用する \lpcode も用意されています。
\lpcode と \rpcode への割り当ては常にグローバルなものです。

### フォント・エクスパンション {#ya7b30e1}

簡単な例として

```
 \font\f=cmr10
 \pdffontexpand\f 30 20 10 autoexpand
 \pdfadjustspacing=2
```

のようにするとフォント・エクスパンションが有効になります。ここで \pdffontexpand はフォント \f に含まれる文字に対して、最大 1000 分の 30 の伸張から 1000 分の 20 の収縮を 1000 分の 10 ステップ単位で許すということを意味します。"autoexpand" はとりあえず与えておきましょう。これがないと非常に面倒です。プリミティブ \pdfadjustspacing はフォント・エクスパンションを有効にするかどうかのスイッチです:

- 0: フォント・エクスパンションを無効にします。
- 1: フォント・エクスパンションは通常の TeX の行分割処理が終わった後に適用されます。この場合、pdfTeX のパラグラフの行への分割の仕方はオリジナルの TeX のそれと同じになります。
- 2: 値が 2 のとき、伸張と収縮の結果による文字幅の変化は行分割処理に影響を与えます。

フォント・エクスパンションの効果を実際に確かめるには狭い幅に長い文章を組んでみるとよいです。\pdfadjustspacing の値を変化させながら結果の違いを確かめてみましょう。

### microtype パッケージ {#g8eee99d}

pdfLaTeX で Microtypography 拡張を使う場合は [microtype パッケージ](http://ctan.org/pkg/microtype) が便利です。

```
 \usepackage{microtype}
```

microtype パッケージはデフォルトで Microtypography 機能を可能な限り有効にします。

やや極端な例でその効果を試してみましょう:

```
 \documentclass{article}
 \usepackage[stretch=100,shrink=100]{microtype}
 \begin{document}
 \begin{minipage}{3cm}
 ...適当な長い英文をここに...
 \end{minipage}
 \end{document}
```

この例では幅 3cm という狭い領域に比較的長い文章を押し込んでいます。また、microtype パッケージのオプションでかなりのフォントの伸張・収縮を (10% まで) 許可しています。microtype パッケージを読み込まない場合と比較すると大きな違いがでるでしょう。パッケージを読み込んだ場合は Underfull がほとんど出なくなると思います。

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

このままでは生成された PDF では文字列の検索やコピー&amp;ペーストができません。これを可能にするには CJK の代わりに CJKutf8 を使います。また、ブックマークなどに日本語を使うには、unicode オプション付きで hyperref パッケージを読み込みます:

```
 \usepackage{CJKutf8}
 \usepackage[bookmarks,unicode]{hyperref}
```

エンコーディングには UTF-8 を使います。
