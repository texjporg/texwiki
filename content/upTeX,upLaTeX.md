---
title: "upTeX,upLaTeX"
url: "/upTeX,upLaTeX/"
date: 2012-07-27T06:39:50Z
pukiwiki: "upTeX,upLaTeX"
---

# upTeX,upLaTeX

## upTeX, upLaTeXとは {#ge195750}

upTeX, upLaTeXは、pTeX, pLaTeXの内部Unicode版．pTeX, pLaTeXでは、漢字/かな/和文記号としてJIS第一・第二水準(JIS X 0208)の範囲を扱うのに対し、
upTeX, upLaTeXでは、漢字/かな/CJK記号/ハングルとしてUnicodeの範囲を扱えるようになっています．
また、\kcatcode の設定切替えで欧文LaTeXの\inputenc{utf8}やBabelが障害なく利用でき、CJK以外の多言語についてもpLaTeXよりも扱いやすくなっています．

### インストール {#d62d0a5a}

#### Windows {#sa412321}

最新のW32TeXには uptex-w32.tar.xz が含まれています．

#### TeX Live {#mc80f714}

TeX Live 2012には upTeX が含まれています．

### 最初の例 {#nea5a740}

例えば、以下のようなデータをUnicode対応のテキストエディタで編集し、文字コードUTF-8でkumo.texというファイル名で保存します．

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

次に、コマンドプロンプト上で以下のコマンドを入力することにより、コンパイルします。

```
uplatex kumo.tex
```

さらに、dviwareで処理します．
この例では、コマンドプロンプト上で以下のコマンドを入力することにより、dvipdfmxでpdf化します．

```
dvipdfmx kumo.dvi
```

出力として kumo.pdf が得られます．

### 簡単な使い方 {#wd228c3a}

upTeX/upLaTeXは、pTeX/pLaTeXとほぼ同様に使うことができます．
pTeX/pLaTeXで利用しているコマンド名等は以下のように読み替えてください．

コマンド名

| pTeX | upTeX |
|---|---|
| ptex      | uptex      |
| platex    | uplatex    |
| pbibtex   | upbibtex   |
| pdvitype  | updvitype  |
| ptftopl   | uptftopl   |
| ppltotf   | uppltotf   |

クラスファイル

<table>
<thead>
<tr><th colspan="2">横組み</th><th colspan="2">縦組み</th></tr>
<tr><th>pTeX</th><th>upTeX</th><th>pTeX</th><th>upTeX</th></tr>
</thead>
<tbody>
<tr><td>jarticle.cls </td><td>ujarticle.cls </td><td>tarticle.cls </td><td>utarticle.cls </td></tr>
<tr><td>jreport.cls  </td><td>ujreport.cls  </td><td>treport.cls  </td><td>utreport.cls </td></tr>
<tr><td>jbook.cls    </td><td>ujreport.cls  </td><td>tbook.cls    </td><td>utreport.cls </td></tr>
</tbody>
</table>

クラスオプションファイル

| pTeX | upTeX |
|---|---|
| tsize10.clo  | utsize10.clo  |
| tsize11.clo  | utsize11.clo  |
| tsize12.clo  | utsize12.clo  |
| tbk10.clo    | utbk10.clo  |
| tbk11.clo    | utbk11.clo  |
| tbk12.clo    | utbk12.clo  |

デフォルトのエンコーディング

| pTeX | upTeX | 用途 |
|---|---|---|
| JY1  | JY2   | 横組み |
| JT1  | JT2   | 縦組み |

jsarticle.clsでは、uplatexオプションを追加してください．
otfパッケージでは、uplatexオプションを追加してください．

### 多言語処理 {#b41c00bb}

#### 仕様 {#o544ccd9}

upTeXは、\kcatcode の設定次第で、入力されたUTF-8の文字を内部処理に渡す際にCJKトークン(漢字, かな, CJK記号, ハングルのいずれか)か、または、欧文の8bit文字からなるUTF-8の文字列に振り分けて処理します．
\kcatcode は、Unicodeのblockごとに設定可能です．

#### CJK (日本語、中国語、韓国語) {#p5e56276}

upTeXのデフォルトで、U+0080以上の文字は、漢字,かな,CJK記号,ハングル のいずれかに設定されています．
適切なフォントに切り替えるだけで、CJK混植の文書を作成できます．

#### 欧文 (ギリシャ文字、キリル文字を含む) {#g25333bf}

upTeXのデフォルトでは、U+0080以上の文字は欧文としては処理されませんが、\kcatcode を15に設定することで、欧文の8bit文字列として扱うことが出来ます．
欧文latexのinputencパッケージを利用することで、UTF-8で記述された文書が処理出来ます．
platexの場合では、ギリシャ文字、キリル文字は必ず和文扱いされますが、
uplatexの場合は、ギリシャ文字ブロック、キリル文字の\kcatcode を15に設定することで回避できます．
欧文latexのbabelパッケージも、欧文latexと同様に利用出来ます．

#### ヘブライ語 {#f3b6c860}

W32TeX, TeX Live 2012に含まれるuplatexコマンドは、e-TeX拡張を含んだe-upTeXをコンパイラとしているため、
TeX-XeT拡張が利用できます．
ヘブライ文字ブロックの\kcatcode を15に設定することで、
欧文latexと同様、babelパッケージのhebrewオプションが利用出来ます．

#### その他の言語 {#ldca57c5}

upTeX自身の機能としてアラビア文字などをレンダリングする能力を持っているわけではありません．しかし、欧文TeXで使用できるパッケージなどを利用することにより組版を実現できます．
