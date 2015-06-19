---
title: "TeX2img"
url: "/TeX2img/"
date: 2014-09-14T14:26:46Z
pukiwiki: "TeX2img"
---

# TeX2img

## TeX ソースから画像を生成するアプリケーション TeX2img {#headline}

TeX2img は TeX ソースコードをタイプセットし，画像に変換するアプリケーションです．
しばしば「数式の画像化」ツールとして紹介されますが，実際は「地の文を含めて TeX 文書全体を画像化」することを想定して作られています．

<strong>公式サイト</strong>

- [TeX2img](http://www.math.sci.hokudai.ac.jp/~abenori/soft/#TEX2IMG) (Windows 版)
- [TeX2img](http://island.geocities.jp/loveinequality/) (Mac 版)

類似ソフトウェアとして，[LaTeXiT](/LaTeXiT/) があります．

奥村先生の [［改訂第6版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/) には，Windows版/Mac版が標準インストールソフトウェアとしてバンドルされています．

***

***

### 出力形式 {#output}

入力した TeX ソースコードを TeX でコンパイルして，次のような形式の画像で出力します．
出力した画像は Word, Excel, PowerPoint, Illustrator, InDesign
等に貼り付けて利用可能です．

- ベクター画像
    - アウトラインをとった EPS ファイル
    - アウトラインをとった PDF ファイル
    - テキストを保持した PDF ファイル
    - アウトラインをとった SVG ファイル
    - アウトラインをとった EMF ファイル（Windows 版のみ．Mac 版は[補助ツール](http://island.geocities.jp/loveinequality/#eps2emf)で対応．）
- ビットマップ画像
    - JPEG ファイル
    - PNG ファイル
    - BMP ファイル
    - TIFF ファイル
    - GIF ファイル

PNG は背景を透過させることができます．（Mac 版は TIFF / GIF も透過対応．）

<!-- **使い方 [#usage] -->

### 動作環境 {#environment}

Windows, OS X

### お知らせ {#notice}

Windows/Mac 版ともに TeX と [Ghostscript](/Ghostscript/) が正しくインストールされていることが必要です．

- Windows 版，Mac 版ともに SVG 画像の出力に使用する
    [MuPDF](/MuPDF/) の mudraw を内蔵しています．
    <!-- [[pdf2svg]] よりすぐれた SVG 変換法に乗り換えました． -->

- Windows 版の 1.4.0 以前のバージョンでは，オプションで
    [ImageMagick](/ImageMagick/) をインストールすれば，より綺麗な出力画像を得られます．なお
    1.5.0 以降では ImageMagick に依存しない改良が施されました．

- Mac 版はビットマップ画像の生成に OS X 標準の画像処理 API を活用します．
- Windows 版は EMF 画像の出力に，Google が開発した
    [PDFium](</Google Chrome/#l83f1380>) という PDF レンダリングエンジンを利用しています．

### トラブルシューティング・よくある質問 {#faq}

[TeX2img FAQ](</TeX2img FAQ/>) を参照してください。

### リンク {#links}

#### 作者による解説など {#project}

- [「TeX2img」の検索結果 - にっき♪](http://abenori.blogspot.com/search?q=TeX2img)
- [「TeX2img」の検索結果 - Twilog](http://twilog.org/doraTeX/search?word=TeX2img)

#### 使い方，動作の仕組みの解説 {#manual}

- [&quot;TeX2img&quot; - 記事一覧 - Acetaminophen’s diary](http://acetaminophen.hatenablog.com/archive/category/TeX2img)
    - [TeX2img のすゝめ：詳しい使い方（改訂版）](http://acetaminophen.hatenablog.com/entry/tex2img-gui)
    - [TeX2img のコマンドライン版の使い方（改訂版）](http://acetaminophen.hatenablog.com/entry/tex2img-cui)
    - [TeX2img で任意の TeX エンジンを指定するために](http://acetaminophen.hatenablog.com/entry/tex2img-latex)
    - [TeX2img (Windows/Mac) の動作の詳細（改訂版）](http://acetaminophen.hatenablog.com/entry/tex2img-converter)
    - [PDF のトリミングとベクター画像抽出](http://acetaminophen.hatenablog.com/entry/2014/09/15/075714)
- [&quot;Ghostscript&quot; - 記事一覧 - Acetaminophen’s diary](http://acetaminophen.hatenablog.com/archive/category/Ghostscript)
    - [Ghostscript のこと(1)：アウトライン化の詳細](http://acetaminophen.hatenablog.com/entry/2014/10/16/110255)
    - [Ghostscript のこと(2)：不具合？](http://acetaminophen.hatenablog.com/entry/2014/10/17/145447)
    - [Ghostscript のこと(3)：新しいアウトライン化の知見](http://acetaminophen.hatenablog.com/entry/2015/03/14/221359)
- [USBメモリ活用講座【付録・TeX2img ポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/tex2img.shtml)

#### ライセンス {#license}

- Windows 版：
    [BSD 2-Clause](https://github.com/abenori/TeX2img/blob/master/license.txt)

- Mac 版：
    [GPLv2](https://github.com/doraTeX/TeX2img/blob/master/LICENSE.txt)

#### ソースコード {#repository}

- Windows 版：
    [https://github.com/abenori/TeX2img](https://github.com/abenori/TeX2img)

- Mac 版：
    [https://github.com/doraTeX/TeX2img](https://github.com/doraTeX/TeX2img)

#### 変更履歴 {#changelog}

- Windows 版
    - [https://github.com/abenori/TeX2img/blob/master/TeX2img.txt](https://github.com/abenori/TeX2img/blob/master/TeX2img.txt)
    - [https://github.com/abenori/TeX2img/commits/master](https://github.com/abenori/TeX2img/commits/master)
- Mac 版
    - [http://island.geocities.jp/loveinequality/#history](http://island.geocities.jp/loveinequality/#history)
    - [https://github.com/doraTeX/TeX2img/commits/master](https://github.com/doraTeX/TeX2img/commits/master)
