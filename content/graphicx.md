---
title: "graphicx"
url: "/graphicx/"
date: 2015-10-23T01:08:29Z
pukiwiki: "graphicx"
---

# graphicx

## [graphicx](https://www.ctan.org/pkg/graphicx) {#headline}

graphicx は，LaTeX ドキュメントに画像を挿入したり，テキストや図の拡大縮小・回転を行うためのパッケージです。
基本的な使いかたについては [LaTeX 入門/図表](</LaTeX入門/図表/>)で解説されていますが，graphicx パッケージは初心者にとって扱いの難しいものです。
[TeX Forum](https://oku.edu.mie-u.ac.jp/tex/) での質問頻度もかなり高い部類に入りますので，この項目で詳しく説明します。

graphics というパッケージもありますが，graphicx はこれを高機能にしたものと考えて結構です（ただし graphicx は内部で graphics を読み込みます）。
この項目ではより高機能で用途の広い graphicx を対象に説明しますが，ドライバ依存についての説明は graphicx だけでなく graphics にも通用します。

***

***

### “ドライバ依存” の注意 {#driver-dependent}

[TeX と「TeX 以外」](</TeX と「TeX 以外」/>)で説明されているとおり，“画像の取り込み” は TeX 自身の機能ではありません．
“画像の取り込み” という処理は

1. TeX が（ときに外部プログラムの力を借りつつ）画像のサイズ情報である “バウンディングボックス” を取得する
1. 取得したバウンディングボックス情報をもとに TeX は画像の取り込みに必要な領域面積を確保し，画像の取り込み方についての指示を書き込む[^1]
1. 最終的に [PostScript](/PostScript/) や [PDF](/PDF/) を出力する “ドライバ” が，実際に画像を取り込む

という流れで行われます。
ここでいうドライバとは，例えば [dvipdfmx](/dvipdfmx/) や [dvips](/dvips/) のような “DVI ドライバ”（DVIware とも），[pdfTeX](/pdfTeX/) などを指します。

画像の取り込みはドライバが担うため，その前段階であるバウンディングボックスの取得や取り込み方の指示はドライバに合致したものでなければなりません。
これが “ドライバ依存” です。
したがって，TeX で処理する段階から「引き続いてどのドライバで処理するか」を意識している必要があります。

ユーザが「引き続いてどのドライバで処理するか」を LaTeX ソース中で指示するのが “ドライバオプション” です。
たとえば LaTeX 処理の次に dvipdfmx を使うことが決まっている場合は

```
\usepackage[dvipdfmx]{graphicx}
```

としなければなりませんし，dvips を使うことが決まっている場合は

```
\usepackage[dvips]{graphicx}
```

としなければなりません[^2]。
このドライバオプションが実際に何を意味するかは，[あとで](/graphicx/#driver-detail)説明します。

### “color パッケージとの関係” の注意 {#driver-color}

graphicx と同様によく使われるパッケージとして，文字や図に色をつける color パッケージがあります。
この color パッケージも “ドライバ依存” ですので，graphicx と同様に

```
\usepackage[dvipdfmx]{color}
```

のようなドライバオプションを付ける必要があります。
ただし，実は graphicx (graphics) と color は “ドライバ依存” の扱いを完全に共有しており，このことがしばしば graphicx の予期せぬ動作の原因となります。
この理由についても[あとで](/graphicx/#driver-detail)説明します。

### ドライバオプションの詳細 {#driver-detail}

ユーザが LaTeX ソースで

```
\usepackage[dvipdfmx]{graphpicx}
```

のようにドライバオプションを指定した場合（もしくは無指定によりデフォルトのドライバオプションが仮定された場合），対応するドライバ依存の処理内容を定義した .def ファイルを読み込みます。
dvipdfmx の場合は dvipdfmx.def，dvips の場合は dvips.def，pdfLaTeX の場合は pdftex.def などとなっています。

この .def ファイルには，ドライバが対応する画像ファイル形式（拡張子）とそれに対するバウンディングボックスの取得方法などが定義されています。
たとえば dvipdfmx.def では

- PNG / JPG / PDF ファイルについては .xbb ファイルを探して BoundingBox を読み，なければ extractbb を実行する
- EPS などそれ以外については直接 BoundingBox と書かれた場所を探して読む

のように定義されています。
LaTeX はこの定義に単に従うことで，画像の内容については関知せずに済むわけです。

[先ほど](/graphicx/#driver-color) graphicx (graphics) と color が “ドライバ依存” の扱いを完全に共有していると述べましたが，これは graphicx も color も全く同じ .def ファイルを読み込むという意味です。

% 少しずつまとめていく予定。

[^1]: 指示を書き込む先は，TeX から DVI ファイルを経由する場合は DVI ファイルになりますし，TeX から自分で直接 PDF を出す場合は自ら保持します。
[^2]: ただし，DVI ファイルを経由する場合のデフォルトは「引き続き dvips を経由する」と仮定した状態になっていますので，dvips の場合には省略することも可能です。また，pdfLaTeX / LuaLaTeX / XeLaTeX を使っている場合はそれぞれデフォルトで適切なドライバオプションが渡されるため，必ずしも指定は不要です（仮に明示する場合は pdfLaTeX / LuaLaTeX では \[pdftex\]，XeLaTeX では \[xetex\] とします）。
