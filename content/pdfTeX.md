---
title: "pdfTeX"
url: "/pdfTeX/"
date: 2013-07-16T08:42:39Z
pukiwiki: "pdfTeX"
---

# pdfTeX

## [pdfTeX](http://www.tug.org/applications/pdftex/) {#wed85f46}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## pdfTeX とは {#c0f592e3}

<em>\[注意\]pdfTeX/LuaTeX用のパッケージとしてpdfx パッケージなるものがあり、PDF/XやPDF/Aの出力が可能かのように言われていますが、これを使えばPDF/XやPDF/Aに準拠したPDFが生成できるというわけではありません。重大な事故のもとになる為、決してこれらのパッケージは使ってはいけません。</em>

pdfTeX は Hàn Thế Thành により開発された TeX の派生プログラムです。
主な特徴として

- PDF を直接出力できる。
- Microtypography 拡張。

などがあります。

pdfTeX の Microtypography 拡張は主に次の二つの部分からなります:

- マージン・カーニング -- 特定の種類の文字を余白にいくらかはみ出させることで、テキストの端 (行頭や行末) をよりきれいに揃ったように見せることができます。マージン・カーニングなしでは、ある種の文字が端にきたとき、錯覚によりテキストの端ががたついているような印象を受けることがあります。マージン・カーニングはぶら下げ組み (hanging punctuation) と似たところがあります。適切な設定をした上でこれを適用することでテキスト・ブロックの見た目をかなり改善することができます。
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

この例では幅 3cm という狭い領域に比較的長い文章を押し込んでいます。また、microtype パッケージのオプションでかなりのフォントの伸張・収縮を (10% まで) 許容しています。(実際の利用では 伸張 3%、収縮 2% 以内に収めるほうが良いそうです。) microtype パッケージを読み込まない場合と比較すると大きな違いがでるでしょう。パッケージを読み込んだ場合は Underfull がほとんど出なくなると思います。

### トラッキング {#te8bcdb1}

Microtypography に関連した別の機能としてトラッキングがあります。字間スペースの一様な調整です。この機能は例えば、スモールキャピタルで組まれた文章で字間スペースをわずかに広げるために用いることができます。また、小さいサイズのフォントで字間スペースを広げ、大きなサイズのフォントで逆に詰めることで可読性を向上させることもできます。(Computer Modern のように異なるオプティカル・サイズでフォントが用意されている場合にはこのようなことは不要ですが）以下に microtype パッケージのドキュメントにある例をあげます:

```
 \usepackage[tracking=true]{microtype}
 \DeclareMicrotypeSet*[tracking]{my}
    { encoding = *,
      size     = {small, Large},
      font     = */*/*/sc/* }
 \SetTracking[ no ligatures = f ]{ encoding = *, shape = sc}{ 50 }
 \SetTracking{ encoding = *, size = small }{  20 }
 \SetTracking{ encoding = *, size = Large }{ -20 }
```

この例では、文章がスモールキャピタルのフォントで組まれたときに字間スペースを 50/1000em だけ広げ、\small 以下のサイズのフォントが利用されている場合に 0.02em 広げ、さらに \Large 以上のサイズのフォントでは 0.02em だけ均等に詰めます。値は基本的にフォントの em に対する千分率で与えます。

### PDF 関連の拡張機能 {#n88c67a4}

pdfTeX は PDF 出力用に PDF 関連の様々な拡張機能を備えます。それらのほとんどは pdfLaTeX を使う限りは使用することはないでしょう。hyperref など様々なマクロ・パッケージがこれらの機能に対する、より使いやすいインターフェースを提供します。

## フォントの設定 {#n545b089}

フォントの設定はフォントマップ・ファイルで行います。フォントマップの役割は TFM ファイルと (アウトライン) フォント・ファイルとを結びづけることです。このファイルにはまた、フォントの再エンコーディングに関する情報やフォントの部分埋め込み (サブセッティング) 、文字変形パラメータ (SlantFont や ExtendFont) の設定を記述します。

デフォルトでは pdfTeX は pdftex.map を読み込みます。Web2c システムにおいては、マップファイルは TEXFONTMAPS で設定される場所で検索されます。フォントマップ・ファイル中では、一行ごとに各フォントに関する設定を記述します。書式は dvips のそれの拡張で、以下のようなものです:

```
 tfmname basename fontflags special encodingfile fontfile
```

最初のフィールドは tfmname である必要があります。もし basename を与えるとすれば、それは二番目のフィールドでなければなりません。同様に fontflags はあるとすれば二番目か三番目に (basename のあるなしで変わる) 来ます。special、encodingfile、fontfile の順番は決まっていませんが、最初の三つのフィールドの順序は固定です。 

いくつかの例を挙げます:

```
 ptmri8r Times-Italic <8r.enc <ptmri8a.pfb
 cmr10 CMR10 <cmr10.pfb
 psyro StandardSymL ".167 SlantFont" <usyr.pfb
 pcrr8rn Courier ".85 ExtendFont" <8r.enc <pcrr8a.pfb
```

fontfile 名の先頭の "&lt;" はフォントが部分埋め込みであることを指示します。最初と最後の例では "8r" エンコーディングが用いられ、後の二つでは斜体にしたりフォントを横方向に収縮したりしています。上の例ではすべてフォントの basename (ここでは PostScript フォント名) が指定されています。これは必須ではありませんが、常に使用することを強く推奨します。

fontflags はフォントの特徴を記述したフラグです。上記の例では全く使われていません。これはフォントが埋め込まれていない場合などに、PDF ビューアが代替フォントを見つけてくるのに利用されることがあります。フォントを埋め込まないことはあまり推奨されませんのでこのフラグは通常使いません。

## pdfLaTeX で日本語 {#dfcf126c}

pdfLaTeX で日本語を扱うには CJK パッケージを使います。CJK パッケージについては

- [CJK LaTeX/BXcjkjatype](/LaTeX-CJK/)
- [My Future Sight for Past: pdflatex](http://myfuturesightforpast.blogspot.jp/search/label/pdflatex)

を参照してください。

### 基本的な使い方 {#ta3a723b}

とりあえず IPA 明朝を使って日本語を出してみましょう。フォントなどの設定が出来ていない場合はまず TFM や fd ファイルの準備が必要です。ttf2tfm プログラムでサブフォントを生成します:

```
 ttf2tfm  ipam.ttf ipam@Unicode@ &> log
```

(お使いの OS によって実際のコマンド・ライン入力は適切に変えてください) 大量の TFM ファイルができますので注意してください。そして fd ファイル "c70ipam.fd" を作ります。以下のような内容です:

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
 \begin{CJK*}{UTF8}{ipam}
 こんにちは。
 \end{CJK*}
 \end{document}
```

ここで、"\pdfmapline" はフォントマップを定義する pdfTeX の拡張コマンドです。CJK パッケージには CJK 環境と CJK\* 環境が用意されていますが、これらの違いは CJK 文字に続くスペースや改行文字の取り扱いの違いです。改行文字を無視して欲しい場合は CJK\* 環境を使います。

このままでは生成された PDF では文字列の検索やコピー&amp;ペーストができません。これを可能にするには CJK の代わりに CJKutf8 を使います。また、ブックマークなどに日本語を使うには、unicode オプション付きで hyperref パッケージを読み込みます:

```
 \usepackage{CJKutf8}
 \usepackage[bookmarks,unicode]{hyperref}
```

この場合、エンコーディングには UTF-8 を使います。

CJK\* 環境では平仮名や漢字に続くスペースは無視されます。和文と英単語の間にスペース（四分アキ）を入れたい場合は \CJKtilde と "~" を使います。

```
 \begin{CJK*}{UTF8}{ipam}
 \CJKtilde
 日本語は~Japanese~です。
 \end{CJK*}
```

pdfLaTeX で CJK を利用する場合、PDF 出力におけるフォントの取り扱いに難がありますが、多言語環境を考える場合は有用です。
