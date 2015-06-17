---
title: "ImageMagick"
url: "/ImageMagick/"
date: 2013-11-12T12:17:47Z
pukiwiki: "ImageMagick"
---

# ImageMagick

## [ImageMagick](http://www.imagemagick.org/) {#a0c4cf98}

ImageMagick は，ビットマップ画像を操作したり変換したりするコマンドラインツールです．
[PostScript](/PostScript/) 形式の画像 (EPS, PS, etc.) の読み書きには別途 [Ghostscript](/Ghostscript/) のインストールが必要です．

[TeX2img](/TeX2img/) の Windows 版（1.4.0 以前）で（オプションではありますが）利用されていました．
また，奥村先生の [［改訂第6版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/) では，Windows と Mac で標準インストールソフトウェアに含まれています（Mac 版は convert コマンドのみ）．

***

***

### 動作環境 {#h6356e3a}

- Windows
- OS X, Linux など UNIX 互換 OS

### インストール {#s8fd7568}

#### Microsoft Windows の場合 {#i4b62fab}

[本家サイト](http://imagemagick.org/script/binary-releases.php#windows)または上記の[ミラーサイト](/ImageMagick/#b913ec3c)から，インストーラを取得して実行します．

<strong> <em>重要！</em> </strong>

Windows のシステムには C:\Windows\System32\convert.exe という「FAT ボリュームを NTFS に変換するコマンド」が存在します．
画像変換に用いる ImageMagick の convert を実行するつもりでシステムのコマンドを誤作動させると，最悪の場合 Windows システム自体が使えなくなるかもしれません．
この危険性を排除するため，必ずインストール時に ImageMagick の convert が先に見つかるように，<strong>PATH の先頭に追加</strong>してください（逆に Windows のシステムの convert を使う場合はフルパスで実行することになります）．
また，<strong>スペース文字を含まないパス</strong>へのインストールが望ましいです（デフォルトでは Program Files 以下にインストールされるはず）．

#### OS X の場合 {#g2f35f2c}

簡単にインストールできるパッケージが [Cactuslab](http://cactuslab.com/imagemagick/) で配布されています．
また，MacPorts や Homebrew などのパッケージ管理ツールからもインストール可能です．

### 関連リンク {#f3e124e5}

- [ImageMagick - Software Settings for Studying](http://mechanics.civil.tohoku.ac.jp/soft/node43.html)
- [LaTeX（uplatex）で、「! Dimension too large.」というエラーで、JPEGファイルの\includegraphicsに失敗して小一時間ハマった。](https://plus.google.com/105478710098039448821/posts/8CGQ1Nue5GK)
- [Dimension too large on a PNG figure under xelatex and beamer - TeX LaTeX Stack Exchange](http://tex.stackexchange.com/questions/51164/dimension-too-large-on-a-png-figure-under-xelatex-and-beamer)
- [YoyaMagick で Image::Magick (PerlMagick)](http://uzulla.hateblo.jp/entry/2013/06/23/200936)
- [GIF アニメ生成は本当に GraphicsMagick で行うべきか？](http://labs.gree.jp/blog/2013/05/8132/)
- [GIFアニメ生成にImageMagickはオワコン、情強は高速なGraphicsMagickを使う](http://uiureo.hatenablog.com/entry/2013/05/19/030414)
- [変換やリサイズなどの画像処理がコマンドラインから扱えるImageMagick使い方メモ](http://nwpct1.hatenablog.com/entry/2013/12/14/201726)

#### ミラーサイト {#mirror}

- [http://www.dnsbalance.ring.gr.jp/pub/graphics/ImageMagick/binaries/](http://www.dnsbalance.ring.gr.jp/pub/graphics/ImageMagick/binaries/)
- [http://www.ring.gr.jp/pub/graphics/ImageMagick/binaries/](http://www.ring.gr.jp/pub/graphics/ImageMagick/binaries/)
- [http://core.ring.gr.jp/pub/graphics/ImageMagick/binaries/](http://core.ring.gr.jp/pub/graphics/ImageMagick/binaries/)

### 派生版 {#t37f9970}

- [GraphicsMagick](http://www.graphicsmagick.org/)
- [YoyaMagick](https://github.com/gree/YoyaMagick)
