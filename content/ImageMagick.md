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
また，奥村先生の [［改訂第6版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/) では，Windows と Mac で標準インストールソフトウェアに含まれています（Mac 版は convert コマンドのみ）．

***

***

### 動作環境 {#h6356e3a}

Windows, macOS, Linux

### インストール {#s8fd7568}

#### Microsoft Windows の場合 {#i4b62fab}

[本家サイト](http://www.imagemagick.org/script/download.php#windows)または[ミラーサイト](/ImageMagick/#mirror)から，インストーラをダウンロードして実行します．
あるいは Chocolatey や MSYS2 の pacman などのパッケージ管理システムからインストールすることも可能です。

- [https://chocolatey.org/packages/imagemagick](https://chocolatey.org/packages/imagemagick)
- [https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-imagemagick](https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-imagemagick)
- [http://repo.msys2.org/mingw/x86_64/](http://repo.msys2.org/mingw/x86_64/)

<strong> <em>重要！</em> </strong>

Windows のシステムには C:\Windows\System32\convert.exe という「FAT ボリュームを NTFS に変換するコマンド」が存在します．
ImageMagick 6.9.3-9 以前の画像変換コマンド名は convert でしたので，これと Windows の convert を混同しないように注意が必要です．

画像変換に用いる ImageMagick の convert を実行するつもりでシステムのコマンドを誤作動させると，最悪の場合 Windows システム自体が使えなくなるかもしれません．
この危険性を排除するため，ImageMagick 6.9.3-9 以前を使用する場合は，必ずインストール時に ImageMagick の convert が先に見つかるように，<strong>PATH の先頭に追加</strong>してください（逆に Windows のシステムの convert を使う場合はフルパスで実行することになります）．
また，<strong>スペース文字を含まないパス</strong>へのインストールが望ましいです（デフォルトでは Program Files 以下にインストールされるはず）．

なお，ImageMagick 7 以降，この convert というプログラム名は廃止されて magick に名称変更されています．

- [convert.exe missing from 7.0.1-Q16?](http://www.imagemagick.org/discourse-server/viewtopic.php?t=29582)

したがって，ImageMagick 7 以降をインストールした環境で convert を実行すると，それは Windows システムの convert.exe である可能性が非常に高いです．

#### macOS の場合 {#g2f35f2c}

[本家サイト](http://www.imagemagick.org/script/download.php#macosx)または[ミラーサイト](/ImageMagick/#mirror)から，パッケージをダウンロードして展開します．
あるいは Homebrew や MacPorts などのパッケージ管理システムからインストールすることも可能です．

- [https://formulae.brew.sh/formula/imagemagick](https://formulae.brew.sh/formula/imagemagick)
    - [https://github.com/Homebrew/homebrew-core/blob/master/Formula/imagemagick.rb](https://github.com/Homebrew/homebrew-core/blob/master/Formula/imagemagick.rb)
- [https://formulae.brew.sh/formula/imagemagick@6](https://formulae.brew.sh/formula/imagemagick@6)
    - [https://github.com/Homebrew/homebrew-core/blob/master/Formula/imagemagick@6.rb](https://github.com/Homebrew/homebrew-core/blob/master/Formula/imagemagick@6.rb)
- [https://www.macports.org/ports.php?by=name&substr=ImageMagick](https://www.macports.org/ports.php?by=name&substr=ImageMagick)
    - [https://github.com/macports/macports-ports/blob/master/graphics/ImageMagick/Portfile](https://github.com/macports/macports-ports/blob/master/graphics/ImageMagick/Portfile)

### 関連リンク {#f3e124e5}

- [LaTeX（uplatex）で、「! Dimension too large.」というエラーで、JPEGファイルの\includegraphicsに失敗して小一時間ハマった。](https://plus.google.com/105478710098039448821/posts/8CGQ1Nue5GK)
- [Dimension too large on a PNG figure under xelatex and beamer - TeX LaTeX Stack Exchange](http://tex.stackexchange.com/questions/51164/dimension-too-large-on-a-png-figure-under-xelatex-and-beamer)
- [YoyaMagick で Image::Magick (PerlMagick)](http://uzulla.hateblo.jp/entry/2013/06/23/200936)
- [GIF アニメ生成は本当に GraphicsMagick で行うべきか？](http://labs.gree.jp/blog/2013/05/8132/)
- [GIFアニメ生成にImageMagickはオワコン、情強は高速なGraphicsMagickを使う](http://uiureo.hatenablog.com/entry/2013/05/19/030414)
- [変換やリサイズなどの画像処理がコマンドラインから扱えるImageMagick使い方メモ](http://nwpct1.hatenablog.com/entry/2013/12/14/201726)

#### ミラーサイト {#mirror}

- [http://ftp.core.ring.gr.jp/pub/graphics/ImageMagick/binaries/](http://ftp.core.ring.gr.jp/pub/graphics/ImageMagick/binaries/)

#### 派生版 {#t37f9970}

- [GraphicsMagick](http://www.graphicsmagick.org/)
