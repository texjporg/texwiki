---
title: "pdfcrop"
url: "/pdfcrop/"
date: 2014-10-28T19:23:44Z
pukiwiki: "pdfcrop"
---

# pdfcrop

## [pdfcrop](https://mirror.ctan.org/help/Catalogue/entries/pdfcrop.html) {#pdcba349}

pdfcrop は，PDF の余白をクロップ/付与する Perl スクリプトです。
[TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) に含まれていますが，W32TeX の場合は別途 Perl インタプリタが必要です（[Perl](/Perl/) の項目参照）。

### 使い方 {#v3083d79}

オプション無しで実行すると，入力ファイル名に crop という文字列が追加されて出力されます。

```
$ pdfcrop hoge.pdf
```

出力ファイル名を指定したいときには，コマンドラインの最後に出力ファイル名を加えます。

```
$ pdfcrop hoge.pdf ../fuga.pdf
```

ギリギリに切り取るのではなく，少しだけ余白をもたせたいときには，--margins オプションで余白を指定します。単位はbpです。「左 上 右 下」の指定順になります。

```
$ pdfcrop --margins "10 8 12 8" hoge.pdf
```

数字を2つだけにした場合は，左右と上下がそれぞれ等しいとみなされます。

### インストール {#d880ca1a}

#### Linux {#yecabda5}

Denian/Ubuntuのリポジトリを利用したインストール

```
$ sudo apt-get install texlive-extra-utils

```

### pdfcrop の内部処理 {#n52bff22}

pdfcrop は大まかには

1. [Ghostscript](/Ghostscript/) によってオリジナルの PDF のバウンディングボックス情報（ここでは，余白を除いた実際に描画されている領域）を取得する。
1. TeX 文書を作成し，オリジナルの PDF を画像として取り込む。
    このとき，パラメータを設定して余分な空白を取り除く。

1. [pdfTeX](/pdfTeX/) によって TeX 文書を処理し，PDF を生成する。

という作業を行っています。

- [Why does pdfcrop invoke pdftex internally - TeX - LaTeX Stack Exchange](http://tex.stackexchange.com/questions/22678/why-does-pdfcrop-invoke-pdftex-internally)

### 関連リンク {#daf12593}

- [バッチで作る，劣化版pdfcrop](https://gist.github.com/zr-tex8r/138b07c6d71e31aa5334) ： Perl のない Windows で pdfcrop と類似の処理を行うバッチファイル
