---
title: "IguanaTex"
url: "/IguanaTex/"
date: 2015-10-03T13:22:33Z
pukiwiki: "IguanaTex"
---

# IguanaTex

## IguanaTex {#q71cd1c4}

IguanaTex は LaTeX ソースをタイプセットし，PowerPoint に貼り付けることができる PowerPoint アドインです．
pLaTeX にも対応しているので日本語も使用できます．

### 公式サイト {#n7a418b3}

- [IguanaTex - A Free Latex Add-In for PowerPoint](http://www.jonathanleroux.org/software/iguanatex/)

### 解説 {#cff23727}

LaTeX ソースをタイプセットしたのち PNG 形式の画像ファイルに変換して貼り付ける仕様です。
変換方法としては以下が選択可能です。

- latex + dvipng
- pdflatex + gs + convert
- xelatex + gs + convert
- lualatex + gs + convert
- platex + dvipdfmx + gs + convert

日本語を使用する場合は，スタンダードな pLaTeX + [dvipdfmx](/dvipdfmx/) を経由する方法か，[XeLaTeX](/XeTeX/) または [LuaLaTeX](/LuaTeX/) を経由する方法を選択します[^1]。

欧文用の LaTeX + [dvipng](/dvipng/) を使う変換方法以外では，[Ghostscript](/Ghostscript/) と [ImageMagick](/ImageMagick/) のインストールが必要です。
また，Ghostscript によるアウトライン化の際に eps2write デバイスを利用しているため，Ghostscript のバージョンは 9.14 以上である必要があります（最新 v1.46 で確認）。

### 関連リンク {#pc5b4e12}

- [IguanaTeX で日本語が通るようになった！](http://margaret-sdpara.blogspot.jp/2015/07/iguanatex.html)
- [【 IguanaTeX 日本語対応版 】 PowerPoint で TeX な数式を。そして、日本語も。](http://karat5i.blogspot.jp/2015/04/iguanatex-powerpoint-tex.html)
- [Iguana TeX で日本語を通す](http://margaret-sdpara.blogspot.jp/2014/02/iguana-tex.html)
- [PowerPointとの連携 - Kobayashi Laboratory Homepage](http://c.nagaokaut.ac.jp/index.php?PowerPoint%A4%C8%A4%CE%CF%A2%B7%C8)

#### ライセンス {#k7bfbe3c}

Creative Commons Attribution 3.0 License

#### 変更履歴 {#id065069}

[changelog](http://www.jonathanleroux.org/software/iguanatex/change.log)

[^1]: [pdfLaTeX](/pdfTeX/) で [LaTeX-CJK](/LaTeX-CJK/) を使えば日本語を扱えないことはありませんが，綺麗な結果は得られません。
