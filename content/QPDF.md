---
title: "QPDF"
url: "/QPDF/"
date: 2014-08-19T04:39:46Z
pukiwiki: "QPDF"
---

# QPDF

## QPDF とは？ {#y4152cbf}

QPDF は PDF ファイルの、内容を維持したままの構造的な変換をおこなうコマンドラインプログラムです。QPDF は pdf-to-pdf とでも呼ぶべきものです。QPDF はまた、PDF 生成ソフト開発者向けの有用な機能を提供します。それらは PDF がどのようなもの知るために PDF ファイルの中身をのぞき見たい人々のために役立ちます。

QPDF は PDF をリニアライズド ("WEB に最適化された") にしたり、暗号化したりできます。また、(PDF の比較的新しい機能である) オブジェクトストリームを持つ PDF ファイルからそれを持たない PDF に変換したり、逆にオブジェクトストリームを生成したりできます。QPDF は PDF ファイルをテキストエディタで編集するのを助ける特別なモードをサポートします。詳しくは [QPDF のドキュメント](http://qpdf.sourceforge.net/files/qpdf-manual.html) を見てください。

```
 
```

以上、QPDF のホームページより

QPDF は PDF を暗号化したり、WEB 用に最適化 (ここではリニアライズのみ) したり操作したり、解析したりするコマンドラインプログラム (qpdf) やテキストエディタで PDF をいじるためのプログラム (qpdf --qdf と fix-qdf) や PDF を読み込み操作するためのライブラリ (libqpdf) からなります。

### コマンドラインプログラム qpdf の使い方 {#t6112193}

#### 基本的な機能 {#ce2aa5eb}

とりあえず暗号化するには

```
 qpdf --encrypt user-passwd owner-passwd 40 --modify=n -- input.pdf output.pdf
```

のようにします。

リニアライズするには

```
 qpdf --linearize input.pdf output.pdf
```

です。巨大な PDF の場合、リニアライズドにしておくと最初のページが表示されるまでの時間が短くなったり、ページを表示するのに部分ダウンロードが可能になります。

ページの抽出と結合は

```
 qpdf file1.pdf --pages file1.pdf 1-5 file2.pdf 3-8 -- output.pdf
```

これは file1.pdf からページ 1-5 を、file2.pdf からページ 3-8 を取り出し結合し、output.pdf に出力します。

#### 開発者向けの機能 {#sf176fe6}

ページオブジェクトのオブジェクト番号等を取得

```
 qpdf --show-pages input.pdf
```

オブジェクトを抽出 (オブジェクト番号 3)

```
 qpdf --show-object=3 input.pdf
```

ストリームオブジェクトを抽出

```
 qpdf --show-object=6 --filtered-stream-data input.pdf
```

### QDF モードと fix-qdf {#a6b92b14}

PDF の中身をテキストエディタでいじりたいときに役に立ちます。

```
 qpdf --qdf input.pdf output.qdf
```

で output.qdf (中身は PDF だが拡張子を <em>q</em>df に代えてある) をつくり、テキストエディタで編集する。(この時点でホントは xref テーブルや Stream オブジェクトの Length 等がおかしくなる) その後

```
fix-qdf < output.qdf > output.pdf
```

で修正すると output.<em>p</em>df は正当な PDF になる。

PDF の簡単な解説については[手書き PDF 入門](http://www.kobu.com/docs/pdf/pdfxhand.htm) を、完全な解説については [PDF Reference](http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/pdf_reference_1-7.pdf) を参照。

### libqpdf {#l2e5ffe5}

PDF を読み込み操作したりする C++ のライブラリ。
