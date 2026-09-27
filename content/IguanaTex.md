---
title: "IguanaTex"
url: "/IguanaTex/"
date: 2015-10-03T13:22:33Z
pukiwiki: "IguanaTex"
---

# IguanaTex

## IguanaTex {#q71cd1c4}

IguanaTex は LaTeX ソースをタイプセットし，PowerPoint に貼り付けることができる PowerPoint アドインです。
Windows と Mac に対応しています。
pLaTeX にも対応しているので日本語も使用できます。

### 公式サイト {#n7a418b3}

- [IguanaTex - A Free Latex Add-In for PowerPoint on Windows and Mac](http://www.jonathanleroux.org/software/iguanatex/)

### 動作環境 {#ce059009}

Windows, Mac

Microsoft 365, Office 2024 の PowerPoint

### ダウンロード {#v2c4c993}

- [https://github.com/Jonathan-LeRoux/IguanaTex/releases](https://github.com/Jonathan-LeRoux/IguanaTex/releases)

### 解説 {#cff23727}

LaTeX ソースをタイプセットしたのち PNG 形式の画像ファイルに変換して貼り付ける仕様です。
変換方法としては以下が選択可能です。

- latex + dvipng
- pdflatex + gs + convert
- xelatex + gs + convert
- lualatex + gs + convert
- platex + dvipdfmx + gs + convert

日本語を使用する場合は，日本語対応の pLaTeX + [dvipdfmx](/dvipdfmx/) を経由する方法か，[LuaLaTeX](/LuaTeX/) または [XeLaTeX](/XeTeX/) を経由する方法を選択します[^1]。

欧文用の LaTeX + [dvipng](/dvipng/) を使う変換方法以外では，[Ghostscript](/Ghostscript/) と [ImageMagick](/ImageMagick/) のインストールが必要です。
また，Ghostscript によるアウトライン化の際に eps2write デバイスを利用しているため，Ghostscript のバージョンは 9.14 以上である必要があります（v1.46 で確認）。

### 関連リンク {#pc5b4e12}

- [初学者によるIguana TeXの導入](https://qiita.com/Trigger-FK/items/380f5fc86e2f2b871c9e)
- [IguanaTeX環境構築(Windows)](https://qiita.com/ryo-ww/items/28d1cb29b4bc1f431a76)
- [PowerPointでLaTeXを使う【IguanaTeX】](https://beamdaisuki.com/iguanatex/)
- [【フォント】IguanaTexでPowerPointの数式フォントをまともにする](https://meltingrabbit.com/blog/article/2018061801/)
- [IguanaTeX で日本語が通るようになった！](http://margaret-sdpara.blogspot.jp/2015/07/iguanatex.html)
- [【 IguanaTeX 日本語対応版 】 PowerPoint で TeX な数式を。そして、日本語も。](http://karat5i.blogspot.jp/2015/04/iguanatex-powerpoint-tex.html)
- [Iguana TeX で日本語を通す](http://margaret-sdpara.blogspot.jp/2014/02/iguana-tex.html)
- [PowerPointとの連携 - Kobayashi Laboratory Homepage](http://c.nagaokaut.ac.jp/index.php?PowerPoint%A4%C8%A4%CE%CF%A2%B7%C8)

#### ライセンス {#k7bfbe3c}

[Creative Commons Attribution 3.0 License](https://github.com/Jonathan-LeRoux/IguanaTex/blob/master/LICENSE.txt)

#### 変更履歴 {#id065069}

- [change.log](https://github.com/Jonathan-LeRoux/IguanaTex/blob/master/change.log)

[^1]: [pdfLaTeX](/pdfTeX/) で [LaTeX-CJK](/LaTeX-CJK/) を使えば日本語を扱えないことはありませんが，綺麗な結果は得られません。
