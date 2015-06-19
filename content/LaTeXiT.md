---
title: "LaTeXiT"
url: "/LaTeXiT/"
date: 2011-11-22T01:20:44Z
pukiwiki: "LaTeXiT"
---

# LaTeXiT

## [LaTeXiT](http://pierre.chachatelier.fr/latexit/) {#b58323c5}

LaTeXiT は，TeX ソースコードをタイプセットして画像に変換するアプリケーションです．
[MacTeX](</TeX Live/Mac/#mactex>) に標準で含まれています．

<strong>公式サイト</strong>

- [LaTeXiT](http://pierre.chachatelier.fr/latexit/)
- [LaTeXiT | Facebook](https://www.facebook.com/LaTeXit)

類似ソフトウェアとして，[TeX2img](/TeX2img/) があります．

***

***

### 出力形式 {#j810704f}

LaTeXiT が出力できる画像形式は以下のとおりです．

- ベクター画像
    - アウトラインをとった EPS ファイル
    - アウトラインをとった PDF ファイル (PDF with outlined fonts)
    - テキストを保持した PDF ファイル
- ビットマップ画像
    - JPEG ファイル
    - PNG ファイル
    - TIFF ファイル

PNG は背景を透過させることができます．

オプションで [pdf2svg](/pdf2svg/) をインストールすれば，SVG ファイルも出力できます．

バージョン 2.3.0 以降は，試験的に MathML 形式でも出力できる機能が付加されました．

### 動作環境 {#e0e2eaf2}

OS X で動作します．
[COMPATIBILITY](http://pierre.chachatelier.fr/latexit/latexit-features.php?lang=en#main) を参照してください．

### インストール {#z9061d08}

LaTeXiT 本体は [LaTeXiT Downloads](http://pierre.chachatelier.fr/latexit/latexit-downloads.php) からダウンロードできます．
Beta 版も [LaTeXiT Beta](http://pierre.chachatelier.fr/latexit/latexit-beta.php) で入手できます，

### 環境設定 {#tab3d738}

#### 一般 {#fe0be871}

デフォルトの出力画像形式は，\[一般\]-\[書き出しフォーマット\] で選択します。

SVG 形式の画像を出力したい場合は，\[書き出しフォーマット\] で SVG を選択し，\[オプション\] で pdf2svg のパスを入力します。
pdf2svg は例えば MacPorts でインストールできます。

- pdf2svg のパス：/opt/local/bin/pdf2svg

#### プログラム {#a32b734b}

日本語を使いたい場合は，\[プログラム\]-\[コマンド\] で latex+dvipdf を選択し，\[変更...\] を使用せずにプログラムのパスを直接入力します．

- pdfLaTeX：/Library/TeX/texbin/pdflatex
- XeLaTeX：/Library/TeX/texbin/xelatex
- LaTeX：/Library/TeX/texbin/uplatex または /Library/TeX/texbin/platex
- dvipdf：/Library/TeX/texbin/dvipdfmx
- Ghostscript (gs)：/usr/local/bin/gs-noX11
- ps2pdf：/usr/local/bin/ps2pdf

もし [Ghostscript.app - マスクメロン](http://www.muskmelon.jp/?page_id=75) を使用する場合は，上の Ghostscript (gs) と ps2pdf を

- Ghostscript (gs)：/Applications/Ghostscript.app/bin/gs
- ps2pdf：/Applications/Ghostscript.app/bin/ps2pdf

に変更してください。

### 関連リンク {#tab9989c}

- [LaTeXiT FAQ](http://pierre.chachatelier.fr/latexit/latexit-faq.php)
- [MacのLaTeX環境構築とプレゼン資料に数式を貼り付けるのに便利な「LaTeXiT」](http://ottan.xyz/mac-latex-presentation-92/)
- [MacにLaTeXiT (+LaTeX) を導入＆日本語に対応](http://harulab.info/?p=631)
- [Texの設定(MacTex)](https://sites.google.com/site/yoshitoshimajiri/memo-for-researches/texno-she-ding-m)
- [tips of LaTeXiT](http://astr.phys.saga-u.ac.jp/~funakubo/research/LaTeXiT_tips/LaTeXiT.html)
- MacWiki:LaTeXiT
- LaTeXiT で Undefined control sequence. l.1 \documentclass とのエラーメッセージ ([qa:56339](https://okumuralab.org/~okumura/texfaq/qa/56339.html), [qa:56340](https://okumuralab.org/~okumura/texfaq/qa/56340.html), [qa:56341](https://okumuralab.org/~okumura/texfaq/qa/56341.html), [qa:56342](https://okumuralab.org/~okumura/texfaq/qa/56342.html), [qa:56343](https://okumuralab.org/~okumura/texfaq/qa/56343.html), [qa:56344](https://okumuralab.org/~okumura/texfaq/qa/56344.html), [qa:56345](https://okumuralab.org/~okumura/texfaq/qa/56345.html), [qa:56346](https://okumuralab.org/~okumura/texfaq/qa/56346.html), [qa:56347](https://okumuralab.org/~okumura/texfaq/qa/56347.html), [qa:56352](https://okumuralab.org/~okumura/texfaq/qa/56352.html), [qa:56353](https://okumuralab.org/~okumura/texfaq/qa/56353.html), [qa:56359](https://okumuralab.org/~okumura/texfaq/qa/56359.html))
- [LaTeXItで数式の一部に日本語](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=833)

#### ChangeLog {#sb3b1ab6}

- [ChangeLog](http://pierre.chachatelier.fr/latexit/latexit-downloads.php#main)
