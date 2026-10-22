---
title: "upTeX,upLaTeX"
url: "/upTeX,upLaTeX/"
date: 2012-07-27T06:39:50Z
pukiwiki: "upTeX,upLaTeX"
---

# upTeX,upLaTeX

## upTeX {#t3be9c34}

[upTeX](http://www.t-lab.opal.ne.jp/tex/uptex.html) は、pTeX の内部 Unicode[^1]版です。
pTeX では漢字/かな/和文記号としてJIS第一・第二水準(JIS X 0208)の範囲を扱うのに対し、upTeX では漢字/かな/CJK(日中韓)記号/ハングルとして Unicode の範囲を扱えるようになっています。
そのおかげで、従来は [otf パッケージ](/OTF/)などが必要であった丸数字（①②③…）なども、ソースにそのまま記述してコンパイルできます。
また、\kcatcode の設定切替えで欧文 LaTeX の \inputenc{utf8} や Babel が障害なく利用でき、CJK 以外の多言語についても pTeX よりも扱いやすくなっています。

e-upTeX は upTeX に [e-TeX](/e-TeX/) 拡張を追加したものです。
[e-pTeX](/e-pTeX/) の成果を upTeX に取り込んだもので、現在では uplatex を起動したときに使われるのは e-upTeX になっています。

***

***

### 特徴 {#redf175b}

- pTeX 上位互換
    - 組版品質、縦組み機能、過去の資産活用
- UTF-8 入力、内部 Unicode によりプレーンテキストでの処理能力向上
    - 日本語字種の拡張
    - CJK(日中韓)各言語の混植
    - 欧文 TeX の Unicode 入力、babel との親和性向上
- [http://www.t-lab.opal.ne.jp/tex/01uptex_doc_utf8.txt](http://www.t-lab.opal.ne.jp/tex/01uptex_doc_utf8.txt)
- [http://tug.org/tug2013/slides/TUG2013_upTeX.pdf](http://tug.org/tug2013/slides/TUG2013_upTeX.pdf)
- [upTeX — Unicode version of pTeX with CJK extensions](https://www.tug.org/TUGboat/tb34-3/tb108tanaka.pdf), [TUGboat 34:3](https://www.tug.org/TUGboat/Contents/contents34-3.html)

### 注意点 {#rfce644f}

#### -guess-input-enc による文字コードの自動判別機能で間違った文字コードに判別されるパターンが存在する {#zb472e1c}

(以下は TeX Live 2022年以前の実装(内部でnkfを呼び出し)に基づく記述です。最新版は[ptexenc内の判定ルーチン](/ptexenc/#zb472e1c)を使用しています)

以下の様な TeX ファイルを hoge.tex という名前で UTF-8 without BOM で保存します．

```
\documentclass[uplatex,dvipdfmx]{jsarticle}
\begin{document}
日本語①
\end{document}
```

hoge.tex を

```
uplatex -guess-input-enc hoge
```

のように文字コードの自動判別機能を使用してタイプセットすると UTF-8 without BOM ではなく Shift_JIS として間違った文字コードで判別されてタイプセットされます．

```
(./hoge.tex(guessed encoding: Shift_JIS = sjis)
```

この場合は

```
uplatex -kanji=utf8 -no-guess-input-enc hoge
```

として -kanji=utf8 -no-guess-input-enc オプションを指定してタイプセットまたは UTF-8 with BOM で保存すれば OK です．

- [https://web.archive.org/web/20241208023922/https://ja.osdn.net/projects/nkf/ticket/42653](https://web.archive.org/web/20241208023922/https://ja.osdn.net/projects/nkf/ticket/42653) より

チケット #42653<br>
UTF-8 without BOM「日本語①」の自動判定　　登録: 2021-07-21 20:37 最終更新: 2022-03-20 21:43<br>

報告者: aminophen　　　　　　　　担当者: (未割り当て)<br>
チケットの種類: バグ　　　　　　　 状況: 完了<br>
コンポーネント: (未割り当て)　　 　 マイルストーン: (未割り当て)<br>
優先度: 5 - 中　　　　　　　　　　　重要度: 5 - 中<br>
解決法: 直さない　　　　　　　　　 ファイル: なし<br>

詳細<br>
こんにちは，日本語 TeX の開発関係者です。既に報告があるのかもしれませんが，過去チケットを検索しても見つけられませんでしたので報告します。<br>
現在，Windows 版の pTeX（日本語 TeX）では nkf をライブラリとして組み込んで文字コード推定に使わせて頂いております。その中で，nkf が文字コード推定を誤る例が（ずいぶん前から）指摘されていることに今更気づきました。<br>

- [https://texwiki.texjp.org/?upTeX%2CupLaTeX#zb472e1c](https://texwiki.texjp.org/?upTeX%2CupLaTeX#zb472e1c)

確かに nkf 単体で「日本語①」を test.txt として UTF-8 without BOM で保存しても，nkf --guess test.txt で Shift_JIS と返ってきます。ところが<br>

- 「日」だけ → UTF-8
- 「日本」まで → UTF-8
- 「日本語」まで → UTF-8
- 「日本語①」まで → Shift_JIS
- 「日本語①あ」まで → UTF-8

となり「日本語①」の時だけ判定を誤るのを不思議に思っています。100%判定が当たるとは思っていませんが，不思議なので理由だけでも分かるとありがたいです。よろしくお願いします。<br>

チケットの履歴 (4 件中 3 件表示)<br>
2022-03-09 02:37 更新者: None<br>
コメント<br>
&gt;「日本語①」の時だけ判定を誤るのを不思議に思っています。 不思議なので理由だけでも分かるとありがたいです<br>
気になったので調べてみました。<br>
「日本語①」 の 文字解析をデバッグ実行した結果を連携します。<br>
nkf の内部では 入力された文字を 1バイトづつ バッファにためておいて<br>
EUC,SJIS,UTF-8 として評価してみて 一番良いスコアの物を採用するというロジックになっています。<br>
「日本語①」 の 場合 SJIS だと 「ｿ譌･譛ｬ隱樞蔵」になって「漢字,半角カタカナ」と判定されスコアは 131 になります。<br>
EUC だと 変換できない文字があるので 変換エラーフラグが立ち、スコアは非常に悪くなります。<br>
UTF-8 の場合 w_status 関数の中で w2e_conv 関数を呼び unicode_to_jis_common で JIS に変換するために<br>
code_score 関数の中で 「日本語」は漢字として判定されず「①」だけが JIS コード 2D21 に変換され これが 「英数字」 と判定され スコアは 132 となりました。<br>
スコアは小さいほどよく SJIS が 選択される状況となりました。<br>
「①」が来る前までは UTF-8 は 「初期状態」で スコア 128 となっており ① が来るまでは UTF-8 が選択される状況でした。<br>
※ w_status 関数で w2e_conv を呼んだあとで JIS → SJIS 変換 すると UTF-８ でも「漢字」と判定され 　UTF-8 の「日本語①」も UTF-8 と判定されるようになるのでは？と思います。<br>
修正してみて、うまく動くようなら バグ修正の プルリクエスト出してみます<br>
kkato233<br>

<br>

2022-03-09 23:01 更新者: None<br>
コメント<br>
テストしたら 上記の説明違っていました。 説明消すことできなかったので追記します。<br>
まず追加の調査で分かったのは code_score 関数は JIS または EUC の文字コードで スコア判定する物でした。<br>
スコアで「漢字」だと思っていたのは「第2水準の漢字」でした。<br>
「①」は 環境依存文字という事で 「第2水準の漢字」「半角カナ」よりもスコアが悪いようです。<br>
結論として<br>
UTF-8 の 「日本語①」は<br>
nkf の内部では 評価されたとき<br>
UTF-8 で 「日本語①」　　 が 「漢字,環境依存文字」と評価され スコアが 132 となり<br>
SJIS では 「ｿ譌･譛ｬ隱樞蔵」が「第2水準漢字、半角カナ」と評価され スコアが 131 となりました。<br>
①が入ると スコアの悪い UTF-8 の方がスコアが悪くなり SJIS と判定されます。<br>
「日本語①あ」に すると SJIS で表現できない文字が含まれる事になり SJIS のスコアが 387 となり UTF-8 のスコアの方がよくなるため UTF-8 となります。<br>
結論： 　「①」は環境依存文字で「半角カナ」や「第2水準漢字」よりも評価が悪い。<br>
　たまたま SJIS で 表示できる文字の場合 SJIS の方が優先されることがある。<br>
　nkf の現在の内部のスコア判定の仕組みでは 回避できない現象のようです。<br>

<br>

2022-03-20 21:43 更新者: aminophen

- 状況 が オープン から 完了 に更新されました
- 解決法 が なし から 直さない に更新されました

コメント<br>
質問者です。反応遅く申し訳ありません。<br>
調べていただきありがとうございます。スコア判定の仕組みによるものとのことで納得しました。<br>

### 不具合 {#p35560b1}

#### upTeX 1.24 での全角英数・半角カナの \kcatcode のデフォルト値が 17(kana) ではなく 18(other_kchar) {#h94b455a}

upTeX 1.25 で修正されました．
環境が upTeX 1.24 の場合，本バグが「全角英数・半角カナを制御綴の一部として使う動作」「全角疑問符・感嘆符・カンマ・ピリオド・括弧等を制御綴の一部として含めない動作」「全角疑問符・感嘆符・カンマ・ピリオド・括弧等周辺のwidow penaltyの動作」に影響します．「全角英数・半角カナを制御綴の一部として使う動作」を優先させたい場合，文書の冒頭で

```
\kcatcode"FF00=17% Halfwidth and Fullwidth Forms -> 17(kana)
```

とし，「全角疑問符・感嘆符・カンマ・ピリオド・括弧等を制御綴の一部として含めない動作」「全角疑問符・感嘆符・カンマ・ピリオド・括弧等周辺のwidow penaltyの動作」を優先させたい場合，文書の冒頭で

```
\kcatcode"FF00=18% Halfwidth and Fullwidth Forms -> 18(other_kchar)
```

とすれば片方は動作します．

- [upTeX 1.24 での全角英数・半角カナの \kcatcode のデフォルト値 by doraTeX · Pull Request #79 · texjporg/tex-jp-build · GitHub](https://github.com/texjporg/tex-jp-build/pull/79)
- [全角英数・半角カナの \kcatcode のデフォルト値 · texjporg/uptex-base · GitHub](https://github.com/texjporg/uptex-base/issues/3)
- tlpkgでupdateするとき、\*\*\*\*を除くすべてをupdateするというオプションがほしい ([forum:2638](https://okumuralab.org/tex/mod/forum/discuss.php?d=2638))
- upTeX 1.24 のバグ: コントロールシーケンス作成、widow処理 ([forum:2639](https://okumuralab.org/tex/mod/forum/discuss.php?d=2639))

#### upbibtex (upBibTeX 0.99d-j0.33-u1.23) が特定の方法で substring を使うとフリーズする {#de52f8a4}

upbibtex (upBibTeX 0.99d-j0.33-u1.24) で修正されました．

- upBibTeXが特定の方法でsubstringを使うとフリーズする ([forum:2496](https://okumuralab.org/tex/mod/forum/discuss.php?d=2496))
- [upBibTeXが特定の方法でsubstringを使うとフリーズする · Issue #64 · texjporg/tex-jp-build · GitHub](https://github.com/texjporg/tex-jp-build/issues/64)
- [upbibtex: fix bug and remove unused code on substring$ by miimou · Pull Request #66 · texjporg/tex-jp-build · GitHub](https://github.com/texjporg/tex-jp-build/pull/66)

#### [biblatex](/Biblatex/) の backend に bibtex を指定して upbibtex (upBibTeX 0.99d-j0.33-u1.21) を使用すると upbibtex がフリーズする {#g3e20a4e}

upbibtex (upBibTeX 0.99d-j0.33-u1.22) を使用すると回避できます．
または pbibtex を使用すると回避できます．

```
pbibtex -kanji=utf8 hoge
```

biblatex を使用する場合は backend に biber を指定して biber を使用するのがおすすめです．

```
biber --bblencoding=utf8 -u -U --output_safechars hoge
```

- upbibtex を biblatex で使う ([forum:1886](https://okumuralab.org/tex/mod/forum/discuss.php?d=1886))
- [latexmk で楽々 TeX タイプセットの薦め（＆ biblatex+biberで先進的な参考文献処理） - konn-san.com](http://konn-san.com/prog/why-not-latexmk.html)
- \[[LaTeX\] biblatex ～初歩の初歩～ ---- もう一つの［参考文献］生成ツール](http://konoyonohana.blog.fc2.com/blog-entry-96.html)

### インストール {#d62d0a5a}

#### TeX Live {#mc80f714}

[TeX Live](</TeX Live/>) には upTeX が含まれています。

#### MiKTeX {#sa412321}

[MiKTeX](/MiKTeX/) には upTeX が含まれています。

### 最初の例 {#nea5a740}

例えば、以下のようなデータを Unicode 対応のテキストエディタで編集し、文字コード UTF-8 で kumo.tex というファイル名で保存します。

```
% kumo.tex
\documentclass[dvipdfmx]{utarticle}
\begin{document}
\section{幸田露伴「雲のいろ〳〵――卿雲」}
景雲といひ、卿雲といひ、慶雲といへる、しかと指し定められたる雲にはあらざるべし。
卿雲爛たり糺縵〻たり、といへる、煙にあらず雲にあらず紫を曳き光を流す、といへる、
大人作矣、五色氤氳、といへる、金柯初めて繞繚、玉葉漸く氤氳、といへる、
還つて九霄に入りて沆瀣を成し、夕嵐生ずる處鶴松に歸る、
といへる詩の句などによりて見れば、歸するところは美しき雲といふまでなり。
\end{document}
```

次に、コマンドラインで以下のコマンドを入力することにより、コンパイルします。

```
uplatex kumo.tex
```

さらに、dviwareで処理します。
この例では dvipdfmx で pdf 化します。

```
dvipdfmx kumo.dvi
```

出力として kumo.pdf が得られます。

もしくは，[ptex2pdf](/ptex2pdf/) を使用しても OK です．

```
ptex2pdf -u -l kumo
```

[TeXworks](/TeXworks/), [TeXShop](/TeXShop/), [LyX](/LyX/), [TeXstudio](/TeXstudio/) など、その他の統合環境を用いる場合は、それぞれのソフトで適切な設定を行えば upTeX (upLaTeX) を使用してコンパイルできます。

### 簡単な使い方 {#wd228c3a}

upTeX, upLaTeX は、pTeX, pLaTeX とほぼ同様に使うことができます。
pTeX, pLaTeX で利用しているコマンド名等は以下のように読み替えてください。

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
<tr><td>book.cls    </td><td>jbook.cls    </td><td>ujbook.cls  </td><td>tbook.cls    </td><td>utbook.cls </td></tr>
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

jsarticle.cls では、uplatex オプションを追加してください。
[otf パッケージ](/OTF/)では、uplatex オプションを追加してください。

```
\documentclass[uplatex,dvipdfmx]{jsarticle}
\usepackage[uplatex]{otf}
\begin{document}
  ①②③
\end{document}
```

### dviware {#e548f906}

[TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) に含まれる [dvipdfmx](/dvipdfmx/), [dvips](/dvips/), dvi2tty, [dvisvgm](/dvisvgm/)は、upTeX対応済みです。

### 日本語ファイル名 {#z3e68b41}

TeX Live 2014 以降はWindows版においてファイル名に日本語や他言語のUnicode文字が使用できます．

- [W32TeX - 漢字入出力対応状況](https://texwiki.texjp.org/?W32TeX#qc9f2e7d)
- [Windowsのコマンドプロンプト上でUnicode文字を扱う](https://okumuralab.org/tex/mod/forum/discuss.php?d=397)
- [file names with multi-byte characters in (e)upTeX and XeTeX on Windows](https://okumuralab.org/tex/mod/forum/discuss.php?d=1158)
- [tty input in (e)upTeX on Windows](https://okumuralab.org/tex/mod/forum/discuss.php?d=1202)
- \[[texlive\] Revision 32308](http://www.tug.org/svn/texlive?view=revision&revision=32308)
- \[[texlive\] Revision 32557](http://www.tug.org/svn/texlive?view=revision&revision=32557)

texmf.cnf に command_line_encoding.dvipdfmx = utf8 を設定すると \includegraphics{表題.pdf} のように記述できます．

- [KANJI file name in special in dvi　(uptex)](https://okumuralab.org/tex/mod/forum/discuss.php?d=1210)

texmf.cnf に command_line_encoding.dvips = utf8 を設定すると \includegraphics{表題.eps} のように記述できます．

- [KANJI file name in special in dvi (II) (Windows)](https://okumuralab.org/tex/mod/forum/discuss.php?d=1211))

Linux版においてはロケールがUTF-8系であればファイル名に日本語や他言語のUnicode文字が使用できます．

## upTeX, upLaTeXによる多言語処理 {#b41c00bb}

### 仕様 {#o544ccd9}

upTeXは、\kcatcode の設定次第で、入力された UTF-8 の文字を内部処理に渡す際に CJK トークン(漢字, かな, CJK記号, ハングルのいずれか)か、または、欧文の 8-bit 文字からなる UTF-8 の文字列に振り分けて処理します。
\kcatcode は、[Unicode の block](http://unicode.org/Public/UNIDATA/Blocks.txt) ごとに設定可能です。
以下では基本的な書き方を例示していますが、[PXbaseパッケージ](https://github.com/zr-tex8r/PXbase)を利用すると、フォント、\kcatcode、babel の設定などを簡便にできます。

### CJK (日本語、中国語、韓国語) {#p5e56276}

upTeX のデフォルトで、U+0080 以上の文字は、漢字, かな, CJK 記号, ハングル のいずれかに設定されています。
適切なフォントに切り替えるだけで、CJK 混植の文書を作成できます。
以下は、入力例です。

```
\documentclass[dvipdfmx]{ujarticle}
```

```
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
```

```
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
```

```
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
```

```
\end{document}
```

[pxbabelパッケージ](https://github.com/zr-tex8r/PXbase)を利用すると、CJK 言語間の切り換えが簡便になります。

### 欧文 (ギリシャ文字、キリル文字を含む) {#g25333bf}

upTeX のデフォルトでは、U+0080 以上の文字の大部分[^2]は欧文としては処理されませんが、\kcatcode を 15 に設定することで、欧文の 8-bit 文字列として扱うことが出来ます。
欧文 LaTeX の inputenc パッケージを利用することで、UTF-8 で記述された文書が処理出来ます。
pLaTeX の場合では、ギリシャ文字、キリル文字は必ず和文扱いされます[^3]が、upLaTeX の場合は、ギリシャ文字ブロック、キリル文字ブロックの \kcatcode を 15 に設定することで回避できます。
[upLaTeXでの全角ギリシャ文字の取り扱い](https://okumuralab.org/tex/mod/forum/discuss.php?d=2275) もご参照ください。
ギリシャ文字とキリル文字のフォントのインストールは[新 pTeX とBabel](</新 pTeX とBabel/>)をご参照ください。
欧文 LaTeX の babel パッケージも、欧文 LaTeX と同様に利用出来ます。
以下は、入力例です。

```
\documentclass[dvipdfmx]{ujarticle}
%\usepackage{lmodern}% Latin Modern
\usepackage[utf8x]{inputenc}
%\usepackage{type1ec}
\usepackage[T2A,T2B,T2C,T1]{fontenc}
\usepackage[french,german,czech,russian,greek,japanese]{babel}
```

```
\begin{document}
\kcatcode"E7=15%  ç:U+00E7   15: not cjk character
\kcatcode"154=15%  Ŕ:U+0154
\kcatcode`П=15
\kcatcode`α=15
\kcatcode`ἀ=15
\kcatcode`“=15
```

```
\selectlanguage{french}
\section{フランス語 Français}
Tous les êtres humains naissent libres et égaux en dignité et en droits.
Ils sont doués de raison et de conscience et doivent agir les uns envers les autres dans un esprit de fraternité.
```

```
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
```

```
\selectlanguage{japanese}
\section{日本語}
すべての人間は、生まれながらにして自由であり、かつ、尊厳と権利とについて平等である。
人間は、理性と良心とを授けられており、互いに同胞の精神をもって行動しなければならない。
```

```
\end{document}
```

### ヘブライ語 {#f3b6c860}

[TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) に含まれる uplatex コマンドは、[e-TeX](/e-TeX/) 拡張を含んだ e-upTeX をコンパイラとしているため、TeX--XeT 機能が利用できます。
ヘブライ文字ブロックの \kcatcode を 15 に設定することで、欧文 LaTeX と同様、babel パッケージの hebrew オプションが利用出来ます。

### その他の言語 {#ldca57c5}

upTeX 自身の機能としてアラビア文字など複雑な文字をレンダリングする能力を持っているわけではありません。
しかし、欧文 TeX で使用できるパッケージなどを利用することにより組版を実現できます。

## 関連リンク {#of92a3e9}

- [upTeX, upLaTeX － 内部Unicode版 pTeX, pLaTeX の実装](http://www.t-lab.opal.ne.jp/tex/uptex.html)
- コミュニティ版 [uptex-base](https://github.com/texjporg/uptex-base), [uptex-fonts](https://github.com/texjporg/uptex-fonts), [uplatex](https://github.com/texjporg/uplatex), [uptex-manual](https://github.com/texjporg/uptex-manual)
- [upTeX の検索結果 - マクロツイーター](https://zrbabbler.hatenablog.com/search?q=upTeX)
- [upLaTeX の検索結果 - マクロツイーター](https://zrbabbler.hatenablog.com/search?q=upLaTeX)
- [［改訂新版］upLaTeXを使おう](http://qiita.com/zr_tex8r/items/5c14042078b20edbfb07) ZRさん
- [upLaTeX文書で源ノ明朝／Noto Serif CJKを簡単に使う方法（最新のdvipdfmxとpxchfonを使用）](http://qiita.com/zr_tex8r/items/9dfeafecca2d091abd02) ZRさん
- [upLaTeX : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/upLaTeX)
- [e-upTeX と LuaTeX とを使ってみる](http://kainokikaede.hatenablog.com/entry/2014/07/18/060128)
- [upLaTeX でアクセント付きのラテン文字などがうまく出力されないときの対処法](http://id.fnshr.info/2017/05/27/pxcjkcat/)

### ChangeLog {#le7df259}

- [主な更新箇所](http://www.t-lab.opal.ne.jp/tex/uptex.html)

を参照．

#### upTeX {#na27195e}

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/uptexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/uptexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/uptexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/uptexdir/ChangeLog?view=markup)

#### e-upTeX {#s277beb8}

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/euptexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/euptexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/euptexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/euptexdir/ChangeLog?view=markup)

[^1]: 内部 Unicode になっているのは、CJK の文字。欧文の処理は欧文 TeX, pTeX と同様、8-bit のままです。
[^2]: upTeX-1.23以降は、欧文の一部のデフォルトが欧文となります。[TeXフォーラムの記事](https://okumuralab.org/tex/mod/forum/discuss.php?d=2374)を参考。
[^3]: プリプロセッサなどで入力を^^ab形式に変換すれば欧文扱いが可能です。
