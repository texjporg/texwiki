---
title: "TeX2img"
url: "/TeX2img/"
date: 2014-09-14T14:26:46Z
pukiwiki: "TeX2img"
---

# TeX2img

## TeX2img {#ac311792}

TeX2img は TeX ソースコードを画像に変換するアプリケーションです．
しばしば「数式の画像化」ツールとして紹介されますが，実際は「地の文を含めて TeX 文書全体を画像化」することを想定して作られています．

奥村先生の [［改訂第6版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/) には，Windows版/Mac版が標準インストールソフトウェアとしてバンドルされています．

<strong>目次</strong>

### お知らせ {#icba8205}

Windows/Mac 版ともに TeX と [Ghostscript](/Ghostscript/) が正しくインストールされていることが必要です．

- Windows 版はオプションで [ImageMagick](/ImageMagick/) をインストールすれば，より綺麗な出力画像を得られます．
- Mac 版は OS X 標準の画像処理 API を活用します．
- Mac 版は SVG 画像の出力に使用する [MuPDF](/MuPDF/) の mudraw を内蔵しています．
    <!-- [[pdf2svg]] よりすぐれた SVG 変換法に乗り換えました． -->

### 公式サイト {#e679cd40}

- [TeX2img](http://www.math.sci.hokudai.ac.jp/~abenori/soft/#TEX2IMG) (Windows 版)
- [TeX2img](http://island.geocities.jp/loveinequality/) (Mac 版)

### 動作環境 {#tf19749b}

Windows, OS X

### License {#a8c9cce2}

#### Windows 版 {#t3c9d1be}

[BSD 2-Clause](https://github.com/abenori/TeX2img/blob/master/license.txt)

#### Mac 版 {#nc589b01}

[GPLv2](https://github.com/doraTeX/TeX2img/blob/master/LICENSE.txt)

### ChangeLog {#c3216979}

#### Windows 版 {#w82758cc}

- [https://github.com/abenori/TeX2img/blob/master/TeX2img.txt](https://github.com/abenori/TeX2img/blob/master/TeX2img.txt)
- [https://github.com/abenori/TeX2img/commits/master](https://github.com/abenori/TeX2img/commits/master)

#### Mac 版 {#g1fc886b}

- [http://island.geocities.jp/loveinequality/#history](http://island.geocities.jp/loveinequality/#history)
- [https://github.com/doraTeX/TeX2img/commits/master](https://github.com/doraTeX/TeX2img/commits/master)

### 出力形式 {#n63a1aac}

入力した TeX ソースコードを TeX でコンパイルして，次のような形式の画像で出力します．
出力した画像は Word/Excel/PowerPoint/Illustrator/InDesign 等に貼り付けて利用可能です．

- アウトラインをとった EPS ファイル
- アウトラインをとった PDF ファイル
- テキストを保持した PDF ファイル（Mac 版のみ）
- アウトラインをとった SVG ファイル（Mac 版のみ）
- JPEG ファイル
- PNG ファイル
- 背景を透過させた PNG ファイル

## 関連リンク {#g449c714}

- [「TeX2img」の検索結果一覧 - にっき♪](http://d.hatena.ne.jp/abenori/archive?word=TeX2img)
- [http://twilog.org/doraTeX/search?word=TeX2img](http://twilog.org/doraTeX/search?word=TeX2img)
- [&quot;TeX2img&quot; - 記事一覧 - Acetaminophen’s diary](http://acetaminophen.hatenablog.com/archive/category/TeX2img)
    - [TeX2imgのすゝめ：詳しい使い方（改訂版）](http://acetaminophen.hatenablog.com/entry/tex2img-gui)
    - [TeX2imgのコマンドライン版の使い方（改訂版）](http://acetaminophen.hatenablog.com/entry/tex2img-cui)
    - [TeX2img (Windows/Mac) の動作の詳細](http://acetaminophen.hatenablog.com/entry/2014/10/18/214403)
    - [PDFのトリミングとベクター画像抽出](http://acetaminophen.hatenablog.com/entry/2014/09/15/075714)
- [&quot;Ghostscript&quot; - 記事一覧 - Acetaminophen’s diary](http://acetaminophen.hatenablog.com/archive/category/Ghostscript)
    - [Ghostscriptのこと(1)：アウトライン化の詳細](http://acetaminophen.hatenablog.com/entry/2014/10/16/110255)
    - [Ghostscriptのこと(2)：不具合？](http://acetaminophen.hatenablog.com/entry/2014/10/17/145447)
- [USBメモリ活用講座【付録・TeX2img ポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/tex2img.shtml)
