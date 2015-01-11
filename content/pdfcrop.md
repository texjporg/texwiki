---
title: "pdfcrop"
url: "/pdfcrop/"
date: 2014-10-28T19:23:44Z
pukiwiki: "pdfcrop"
---

# pdfcrop

## pdfcrop {#pdcba349}

pdfcrop は，PDF の余白をクロップ/付与する Perl スクリプトです．<br>
TeX Live, W32TeX に含まれていますが，W32TeX の場合は別途 Perl インタプリタが必要です．<br>

- [pdfcrop](https://mirror.ctan.org/help/Catalogue/entries/pdfcrop.html)

### pdfcrop の内部処理 {#n52bff22}

pdfcrop は大まかには

1. Ghostscript によってオリジナルの PDF のバウンディングボックス情報を取得する．
1. TeX 文書を作成し，オリジナルの PDF を画像として取り込む．<br>
    このとき，パラメータを設定して余分な空白を取り除く．

1. pdfTeX によって TeX 文書を処理し，PDF を生成する．

という作業を行っています．

- [Why does pdfcrop invoke pdftex internally - TeX - LaTeX Stack Exchange](http://tex.stackexchange.com/questions/22678/why-does-pdfcrop-invoke-pdftex-internally)

### 関連リンク {#daf12593}

- [バッチで作る、劣化版pdfcrop](https://gist.github.com/zr-tex8r/138b07c6d71e31aa5334) ： Perl のない Windows で pdfcrop と類似の処理を行うバッチファイル
