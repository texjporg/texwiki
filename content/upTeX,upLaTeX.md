---
title: "upTeX,upLaTeX"
url: "/upTeX,upLaTeX/"
date: 2012-07-27T06:39:50Z
pukiwiki: "upTeX,upLaTeX"
---

# upTeX,upLaTeX

## e-upTeX {#t3be9c34}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## upTeX, upLaTeXとは {#ge195750}

[upTeX, upLaTeX](http://www.t-lab.opal.ne.jp/tex/uptex.html)は、[pTeX, pLaTeX](http://ascii.asciimw.jp/pb/ptex/) の内部 Unicode[^1]版。<br>
pTeX, pLaTeX では、漢字/かな/和文記号としてJIS第一・第二水準(JIS X 0208)の範囲を扱うのに対し、
upTeX, upLaTeX では、漢字/かな/CJK(日中韓)記号/ハングルとして Unicode の範囲を扱えるようになっています。<br>
また、\kcatcode の設定切替えで欧文 LaTeX の \inputenc{utf8} や Babel が障害なく利用でき、CJK 以外の多言語についても pLaTeX よりも扱いやすくなっています。<br>

### 特徴 {#redf175b}

- pTeX, pLaTeX 上位互換
    - 組版品質、縦組み機能、過去の資産活用
- UTF-8 入力、内部 Unicode によりプレーンテキストでの処理能力向上
    - 日本語字種の拡張
    - CJK(日中韓)各言語の混植
    - 欧文 TeX の Unicode 入力、babel との親和性向上
- [http://www.t-lab.opal.ne.jp/tex/01uptex_doc_utf8.txt](http://www.t-lab.opal.ne.jp/tex/01uptex_doc_utf8.txt)
- [http://tug.org/tug2013/slides/TUG2013_upTeX.pdf](http://tug.org/tug2013/slides/TUG2013_upTeX.pdf)
- [upTeX — Unicode version of pTeX with CJK extensions](https://www.tug.org/TUGboat/tb34-3/tb108tanaka.pdf), [TUGboat 34:3](https://www.tug.org/TUGboat/Contents/contents34-3.html)

### ChangeLog {#le7df259}

- [主な更新箇所](http://www.t-lab.opal.ne.jp/tex/uptex.html)

を参照．<br>

#### upTeX {#na27195e}

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/uptexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/uptexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/uptexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/uptexdir/ChangeLog?view=markup)

#### e-upTeX {#s277beb8}

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/euptexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/euptexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/euptexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/euptexdir/ChangeLog?view=markup)

### 注意点 {#rfce644f}

#### uplatex -guess-input-enc hoge のように文字コードの自動判別機能を使用してタイプセットすると間違った文字コードで判別されてタイプセットされるパターンが存在する → -kanji=utf8 -no-guess-input-enc オプションを指定してタイプセットまたは UTF-8 with BOM で保存する {#zb472e1c}

以下の様な TeX ファイルを hoge.tex という名前で UTF-8 without BOM で保存します．<br>

```
\documentclass[uplatex]{jsarticle}
\begin{document}
日本語①
\end{document}
```

hoge.tex を

```
uplatex -guess-input-enc hoge
```

のように文字コードの自動判別機能を使用してタイプセットすると UTF-8 without BOM ではなく Shift_JIS として間違った文字コードで判別されてタイプセットされます．<br>

```
(./hoge.tex(guessed encoding: Shift_JIS = sjis)
```

この場合は

```
uplatex -kanji=utf8 -no-guess-input-enc hoge
```

として -kanji=utf8 -no-guess-input-enc オプションを指定してタイプセットまたは UTF-8 with BOM で保存すれば OK です．<br>

### 不具合 {#p35560b1}

#### biblatex の backend に bibtex を指定して upbibtex (upBibTeX 0.99d-j0.33-u1.11) を使用すると upbibtex がフリーズする → backend に biber を指定して biber を使用する {#g3e20a4e}

biblatex の backend に bibtex (upBibTeX 0.99d-j0.33-u1.11) を指定して upbibtex を使用すると upbibtex がフリーズします．<br>
この場合は pbibtex を使用すると回避できます．<br>

```
pbibtex -kanji=utf8 hoge
```

biblatex を使用する場合は backend に biber を指定して biber を使用するのがおすすめです．<br>

```
biber --bblencoding=utf8 -u -U --output_safechars hoge
```

- [latexmk で楽々 TeX タイプセットの薦め（＆ biblatex+biberで先進的な参考文献処理） - konn-san.com](http://konn-san.com/prog/why-not-latexmk.html)
- \[[LaTeX\] biblatex ～初歩の初歩～ ---- もう一つの［参考文献］生成ツール](http://konoyonohana.blog.fc2.com/blog-entry-96.html)

### インストール {#d62d0a5a}

#### TeX Live {#mc80f714}

[TeX Live](</TeX Live/>) には upTeX が含まれています。

#### W32TeX {#sa412321}

[W32TeX](/W32TeX/) には [uptex-w32.tar.xz](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/uptex-w32.tar.xz) が含まれています。

### 最初の例 {#nea5a740}

例えば、以下のようなデータを Unicode 対応のテキストエディタで編集し、文字コード UTF-8 で kumo.tex というファイル名で保存します。<br>

```
% kumo.tex
\documentclass{utarticle}
\begin{document}
\section{幸田露伴「雲のいろ〳〵――卿雲」}
景雲といひ、卿雲といひ、慶雲といへる、しかと指し定められたる雲にはあらざるべし。
卿雲爛たり糺縵〻たり、といへる、煙にあらず雲にあらず紫を曳き光を流す、といへる、
大人作矣、五色氤氳、といへる、金柯初めて繞繚、玉葉漸く氤氳、といへる、
還つて九霄に入りて沆瀣を成し、夕嵐生ずる處鶴松に歸る、
といへる詩の句などによりて見れば、歸するところは美しき雲といふまでなり。
\end{document}
```

次に、Windows PowerShell またはコマンド プロンプト上で以下のコマンドを入力することにより、コンパイルします。<br>

```
uplatex kumo.tex
```

さらに、dviwareで処理します。<br>
この例では、Windows PowerShell またはコマンド プロンプト上で以下のコマンドを入力することにより、dvipdfmx で pdf 化します。<br>

```
dvipdfmx kumo.dvi
```

出力として kumo.pdf が得られます。<br>
[ptex2pdf](/ptex2pdf/) を使用しても OK です．<br>

```
ptex2pdf -u -l kumo
```

### 簡単な使い方 {#wd228c3a}

upTeX, upLaTeX は、pTeX, pLaTeX とほぼ同様に使うことができます。<br>
pTeX, pLaTeX で利用しているコマンド名等は以下のように読み替えてください。<br>

- コマンド名

| 欧文TeX | pTeX | upTeX |
|---|---|---|
| tex      | ptex      | uptex      |
| latex    | platex    | uplatex    |
| bibtex   | pbibtex   | upbibtex   |
| dvitype  | pdvitype  | updvitype  |
| tftopl   | ptftopl   | uptftopl   |
| pltotf   | ppltotf   | uppltotf   |

- クラスファイル

<table>
<thead>
<tr><th colspan="3">横組み</th><th colspan="2">縦組み</th></tr>
<tr><th>欧文LaTeX</th><th>pLaTeX</th><th>upLaTeX</th><th>pLaTeX</th><th>upLaTeX</th></tr>
</thead>
<tbody>
<tr><td>article.cls </td><td>jarticle.cls </td><td>ujarticle.cls </td><td>tarticle.cls </td><td>utarticle.cls </td></tr>
<tr><td>report.cls  </td><td>jreport.cls  </td><td>ujreport.cls  </td><td>treport.cls  </td><td>utreport.cls </td></tr>
<tr><td>book.cls    </td><td>jbook.cls    </td><td>ujreport.cls  </td><td>tbook.cls    </td><td>utreport.cls </td></tr>
</tbody>
</table>

- クラスオプションファイル

| pLaTeX | upLaTeX |
|---|---|
| tsize10.clo  | utsize10.clo  |
| tsize11.clo  | utsize11.clo  |
| tsize12.clo  | utsize12.clo  |
| tbk10.clo    | utbk10.clo  |
| tbk11.clo    | utbk11.clo  |
| tbk12.clo    | utbk12.clo  |

- デフォルトのエンコーディング

| pTeX | upTeX | 用途 |
|---|---|---|
| JY1  | JY2   | 横組み |
| JT1  | JT2   | 縦組み |

jsarticle.cls では、uplatex オプションを追加してください。<br>
[otfパッケージ](/OTF/)では、uplatex オプションを追加してください。<br>

### dviware {#e548f906}

[TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) に含まれる [dvipdfmx](/dvipdfmx/), [dvips](/dvips/), dvi2tty, [dvisvgm](/dvisvgm/)は、upTeX対応済みです。

### 日本語ファイル名 {#z3e68b41}

TeX Live 2014 以降はWindows版においてファイル名に日本語や他言語のUnicode文字が使用できます．<br>

- [Windowsのコマンドプロンプト上でUnicode文字を扱う](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=397)
- [file names with multi-byte characters in (e)upTeX and XeTeX on Windows](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1158)
- [tty input in (e)upTeX on Windows](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1202)
- \[[texlive\] Revision 32308](http://www.tug.org/svn/texlive?view=revision&revision=32308)
- \[[texlive\] Revision 32557](http://www.tug.org/svn/texlive?view=revision&revision=32557)

texmf.cnf に command_line_encoding.dvipdfmx = utf8 を設定すると \includegraphics{表題.pdf} のように記述できます．<br>

- [KANJI file name in special in dvi　(uptex)](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1210)

texmf.cnf に command_line_encoding.dvips = utf8 を設定すると \includegraphics{表題.eps} のように記述できます．<br>

- [KANJI file name in special in dvi (II) (Windows)](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1211))

Linux版においてはロケールがUTF-8系であればファイル名に日本語や他言語のUnicode文字が使用できます．<br>

## upTeX, upLaTeXによる多言語処理 {#b41c00bb}

### 仕様 {#o544ccd9}

upTeXは、\kcatcode の設定次第で、入力された UTF-8 の文字を内部処理に渡す際に CJK トークン(漢字, かな, CJK記号, ハングルのいずれか)か、または、欧文の 8-bit 文字からなる UTF-8 の文字列に振り分けて処理します。<br>
\kcatcode は、[Unicode の block](http://unicode.org/Public/UNIDATA/Blocks.txt) ごとに設定可能です。<br>
以下では基本的な書き方を例示していますが、[PXbaseパッケージ](http://zrbabbler.sp.land.to/pxbase.html)を利用すると、フォント、\kcatcode、babel の設定などを簡便にできます。

### CJK (日本語、中国語、韓国語) {#p5e56276}

upTeX のデフォルトで、U+0080 以上の文字は、漢字, かな, CJK 記号, ハングル のいずれかに設定されています。<br>
適切なフォントに切り替えるだけで、CJK 混植の文書を作成できます。<br>
以下は、入力例です。<br>

```
\documentclass{ujarticle}

% CJK fontの設定
\DeclareFontFamily{JY2}{jpnrm}{}
\DeclareFontFamily{JY2}{schrm}{}
\DeclareFontFamily{JY2}{tchrm}{}
\DeclareFontFamily{JY2}{korrm}{}
\DeclareFontShape{JY2}{jpnrm}{m}{n}{<->s*[0.962216]upjpnrm-h}{}
\DeclareFontShape{JY2}{schrm}{m}{n}{<->s*[0.962216]upschrm-h}{}
\DeclareFontShape{JY2}{tchrm}{m}{n}{<->s*[0.962216]uptchrm-h}{}
\DeclareFontShape{JY2}{korrm}{m}{n}{<->s*[0.962216]upkorrm-h}{}
\DeclareFontShape{JY2}{jpnrm}{bx}{n}{<->ssub*jpnrm/m/n}{}
\DeclareFontShape{JY2}{schrm}{bx}{n}{<->ssub*schrm/m/n}{}
\DeclareFontShape{JY2}{tchrm}{bx}{n}{<->ssub*tchrm/m/n}{}
\DeclareFontShape{JY2}{korrm}{bx}{n}{<->ssub*korrm/m/n}{}
\DeclareRobustCommand\jpnrm{\kanjifamily{jpnrm}\selectfont}
\DeclareRobustCommand\schrm{\kanjifamily{schrm}\selectfont}
\DeclareRobustCommand\tchrm{\kanjifamily{tchrm}\selectfont}
\DeclareRobustCommand\korrm{\kanjifamily{korrm}\selectfont}

\begin{document}
\section{日本語}
\jpnrm
すべての人間は、生まれながらにして自由であり、かつ、尊厳と権利とについて平等である。
人間は、理性と良心とを授けられており、互いに同胞の精神をもって行動しなければならない。 
```

```
\section{中国語・簡体字 {\schrm 简体中文}}
{\schrm
人人生而自由，在尊严和权利上一律平等。
他们赋有理性和良心，并应以兄弟关系的精神相对待。
}

\section{中国語・繁体字 {\tchrm 繁體中文}}
{\tchrm
人人生而自由，在尊嚴和權利上一律平等。
他們賦有理性和良心，並應以兄弟關係的精神相對待。
}
```

```
\section{韓国語 {\korrm 한국어}}
{\korrm
\xkanjiskip=.1zw plus 1pt minus 1pt
모든 인간은 태어날 때부터 자유로우며 그 존엄과 권리에 있어 동등하다.
인간은 천부적으로 이성과 양심을 부여받았으며 서로 형제애의 정신으로 행동하여야 한다. 
}

\end{document}
```

[pxbabelパッケージ](http://zrbabbler.sp.land.to/pxbase.html#sec-pxbabel)を利用すると、CJK 言語間の切り換えが簡便になります。

### 欧文 (ギリシャ文字、キリル文字を含む) {#g25333bf}

upTeX のデフォルトでは、U+0080 以上の文字は欧文としては処理されませんが、\kcatcode を 15 に設定することで、欧文の 8-bit 文字列として扱うことが出来ます。<br>
欧文 LaTeX の inputenc パッケージを利用することで、UTF-8 で記述された文書が処理出来ます。<br>
pLaTeX の場合では、ギリシャ文字、キリル文字は必ず和文扱いされます[^2]が、
upLaTeX の場合は、ギリシャ文字ブロック、キリル文字ブロックの \kcatcode を 15 に設定することで回避できます。<br>
ギリシャ文字とキリル文字のフォントのインストールは[新 pTeX とBabel](</新 pTeX とBabel/>)をご参照ください。<br>
欧文 LaTeX の babel パッケージも、欧文 LaTeX と同様に利用出来ます。<br>
以下は、入力例です。<br>

```
\documentclass{ujarticle}
%\usepackage{lmodern}% Latin Modern
\usepackage[utf8x]{inputenc}
%\usepackage{type1ec}
\usepackage[T2A,T2B,T2C,T1]{fontenc}
\usepackage[french,german,czech,russian,greek,japanese]{babel}

\begin{document}
\kcatcode`ç=15% not cjk character
\kcatcode`Ŕ=15
\kcatcode`П=15
\kcatcode`α=15
\kcatcode`ἀ=15
\kcatcode`“=15

\selectlanguage{french}
\section{フランス語 Français}
Tous les êtres humains naissent libres et égaux en dignité et en droits.
Ils sont doués de raison et de conscience et doivent agir les uns envers les autres dans un esprit de fraternité.

\selectlanguage{german}
\section{ドイツ語 Deutsch}
Alle Menschen sind frei und gleich an Würde und Rechten geboren.
Sie sind mit Vernunft und Gewissen begabt und sollen einander im Geiste der Brüderlichkeit begegnen.
```

```
\selectlanguage{czech}%
\section{チェコ語 Czech}
Všichni lidé rodí se svobodní a sobě rovní co do důstojnosti a práv.
Jsou nadáni rozumem a svědomím a mají spolu jednat v duchu bratrství. 
```

```
\selectlanguage{russian}
\section{ロシア語 \fontencoding{T2A}\selectfont{}Русский}
\fontencoding{T2A}\selectfont
Все люди рождаются свободными и равными в своем достоинстве и правах.
Они наделены разумом и совестью и должны поступать в отношении друг друга в духе братства.
```

```
\fontencoding{T1}\selectfont
```

```
\selectlanguage{greek}
\section{ギリシア語 Ελληνικά}
'Ολοι οι άνθρωποι γεννιούνται ελεύθεροι και ίσοι στην αξιοπρέπεια και τα δικαιώματα.
Είναι προικισμένοι με λογική και συνείδηση, και οφείλουν να συμπεριφέρονται μεταξύ τους με πνεύμα αδελφοσύνης.

\selectlanguage{japanese}
\section{日本語}
すべての人間は、生まれながらにして自由であり、かつ、尊厳と権利とについて平等である。
人間は、理性と良心とを授けられており、互いに同胞の精神をもって行動しなければならない。 
```

```
\end{document}
```

### ヘブライ語 {#f3b6c860}

[TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) に含まれる uplatex コマンドは、[e-TeX](/e-TeX/) 拡張を含んだ e-upTeX をコンパイラとしているため、TeX-XeT 機能が利用できます。<br>
ヘブライ文字ブロックの \kcatcode を 15 に設定することで、
欧文 LaTeX と同様、babel パッケージの hebrew オプションが利用出来ます。<br>

### その他の言語 {#ldca57c5}

upTeX 自身の機能としてアラビア文字など複雑な文字をレンダリングする能力を持っているわけではありません。<br>
しかし、欧文 TeX で使用できるパッケージなどを利用することにより組版を実現できます。<br>

## 関連リンク {#of92a3e9}

- [upTeX, upLaTeX － 内部Unicode版 pTeX, pLaTeX の実装](http://www.t-lab.opal.ne.jp/tex/uptex.html)
- [「upTeX」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=upTeX)
- [upLaTeX を使おう](http://zrbabbler.sp.land.to/uplatex.html) ZRさん
- [upLaTeX : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/upLaTeX)
- [e-upTeX と LuaTeX とを使ってみる](http://kainokikaede.hatenablog.com/entry/2014/07/18/060128)

[^1]: 内部 Unicode になっているのは、CJK の文字。欧文の処理は欧文 TeX, pTeX と同様、8-bit のままです。
[^2]: プリプロセッサなどで入力を^^ab形式に変換すれば欧文扱いが可能です。
