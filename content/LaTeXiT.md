---
title: "LaTeXiT"
url: "/LaTeXiT/"
date: 2011-11-22T01:20:44Z
pukiwiki: "LaTeXiT"
---

# LaTeXiT

## [LaTeXiT](https://www.chachatelier.fr/latexit/) {#b58323c5}

LaTeXiT は，TeX ソースコードをタイプセットして画像に変換するアプリケーションです．
[MacTeX](/MacTeX/) に標準で含まれています．

<strong>公式サイト</strong>

- [LaTeXiT](https://www.chachatelier.fr/latexit/)
- [LaTeXiT | Facebook](https://www.facebook.com/LaTeXit)

類似ソフトウェアとして，[TeX2img](/TeX2img/) または [KLatexFormula](/KLatexFormula/) があります．

***

***

### 出力形式 {#j810704f}

LaTeXiT が出力できる画像形式は以下のとおりです．
PDF形式で出力した場合、PDF内部にTeXのコードが残されているため，繰り返し LaTeXiT で編集することができます．

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

macOS で動作します．
[COMPATIBILITY](https://www.chachatelier.fr/latexit/latexit-features.php?lang=en#main) を参照してください．

### インストール {#z9061d08}

LaTeXiT 本体は [LaTeXiT Downloads](https://www.chachatelier.fr/latexit/latexit-downloads.php) からダウンロードできます．

### 環境設定 {#tab3d738}

#### 一般 {#fe0be871}

デフォルトの出力画像形式は，\[一般\]-\[書き出しフォーマット\] で選択します。

SVG 形式の画像を出力したい場合は，\[書き出しフォーマット\] で SVG を選択し，\[オプション\] で pdf2svg のパスを入力します。

> [![](/attach/LaTeXiT/LaTeXiT-svg01.png)](/attach/LaTeXiT/LaTeXiT-svg01.png)

pdf2svg は例えば MacPorts でインストールできます。

- pdf2svg のパス：/opt/local/bin/pdf2svg

> [![](/attach/LaTeXiT/LaTeXiT-svg02.png)](/attach/LaTeXiT/LaTeXiT-svg02.png)

#### プログラム {#a32b734b}

日本語を使いたい場合は，\[プログラム\]-\[コマンド\] で latex+dvipdf を選択し，\[変更...\] を使用せずにプログラムのパスを直接入力します．

pdfLaTeX
: /Library/TeX/texbin/pdflatex

XeLaTeX
: /Library/TeX/texbin/xelatex

LaTeX
: /Library/TeX/texbin/uplatex

dvipdf
: /Library/TeX/texbin/dvipdfmx

Ghostscript (gs)
: /usr/local/bin/gs-noX11

: /opt/homebrew/bin/gs

ps2pdf
: /usr/local/bin/ps2pdf

: /opt/homebrew/bin/ps2pdf

> [![](/attach/LaTeXiT/LaTeXiT-program.png)](/attach/LaTeXiT/LaTeXiT-program.png)

[小川版 UpTeX.app](</Drag and Drop UpTeX/>) をお使いの場合は，以下のようにすれば良いでしょう。

pdfLaTeX
: /Applications/UpTeX.app/Contents/Resources/TEX/texbin/lualatex

#### 日本語 JIS キーボードでバックスラッシュ \ ではなく円記号 ¥ が入力される場合 {#pd5cb643}

[macOS の入力システム側で対処する](/Mac/#me741d27)ほうが筋ですが，LaTeXiT にはキーバインドの編集機能がありますので，そちらで円記号 ¥ の代わりに \ が入力されるように設定することができます。

> [![](/attach/LaTeXiT/LaTeXiT-bs.png)](/attach/LaTeXiT/LaTeXiT-bs.png)

この方法は，[forum:1635](https://okumuralab.org/tex/mod/forum/discuss.php?d=1635) で報告されているバグへの対処としても有効です。

### データ {#j0921f69}

ライブラリは ~/Library/Application Support/LaTeXiT/library-default.latexlib に保存されます。

### 関連リンク {#tab9989c}

- [LaTeXiT FAQ](https://www.chachatelier.fr/latexit/latexit-faq.php)
- [MacでTeXを使う](http://js2iiu.wp.xdomain.jp/2021/11/28/mac%E3%81%A7tex%E3%82%92%E4%BD%BF%E3%81%86/)
- [MacのLaTeX環境構築とプレゼン資料に数式を貼り付けるのに便利な「LaTeXiT」](https://ottan.jp/posts/2014/09/mac-latex-presentation/)
- [tips of LaTeXiT](http://astr.phys.saga-u.ac.jp/~funakubo/research/LaTeXiT_tips/LaTeXiT.html)
- LaTeXiT で Undefined control sequence. l.1 \documentclass とのエラーメッセージ ([qa:56339](https://okumuralab.org/~okumura/texfaq/qa/56339.html), [qa:56340](https://okumuralab.org/~okumura/texfaq/qa/56340.html), [qa:56341](https://okumuralab.org/~okumura/texfaq/qa/56341.html), [qa:56342](https://okumuralab.org/~okumura/texfaq/qa/56342.html), [qa:56343](https://okumuralab.org/~okumura/texfaq/qa/56343.html), [qa:56344](https://okumuralab.org/~okumura/texfaq/qa/56344.html), [qa:56345](https://okumuralab.org/~okumura/texfaq/qa/56345.html), [qa:56346](https://okumuralab.org/~okumura/texfaq/qa/56346.html), [qa:56347](https://okumuralab.org/~okumura/texfaq/qa/56347.html), [qa:56352](https://okumuralab.org/~okumura/texfaq/qa/56352.html), [qa:56353](https://okumuralab.org/~okumura/texfaq/qa/56353.html), [qa:56359](https://okumuralab.org/~okumura/texfaq/qa/56359.html))
- [LaTeXItで数式の一部に日本語](https://okumuralab.org/tex/mod/forum/discuss.php?d=833)
- [LaTeXit(xelatex)でテンプレート変更](http://blog.cocomoff.info/archives/2016/01/13/7642/)
- LaTeXitが使えません。([forum:2236](https://okumuralab.org/tex/mod/forum/discuss.php?d=2236))

#### ライセンス {#r39f0d2a}

[CeCILL license](https://cecill.info/index.en.html)

#### ChangeLog {#sb3b1ab6}

- [ChangeLog](https://www.chachatelier.fr/latexit/latexit-downloads.php#main)
