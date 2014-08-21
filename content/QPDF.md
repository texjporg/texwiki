---
title: "QPDF"
url: "/QPDF/"
date: 2014-08-19T04:39:46Z
pukiwiki: "QPDF"
---

# QPDF

## QPDF とは？ {#y4152cbf}

QPDF は PDF ファイルの、内容を維持したままの構造的な変換をおこなうコマンドラインプログラムです。QPDF は pdf-to-pdf とでも呼ぶべきものです。QPDF はまた、PDF 生成ソフト開発者や PDF の中身を覗き見てみたい人たち向けの有用な機能を提供します。それらは PDF がどのようなものかを学ぶために役立ちます。

QPDF は PDF をリニアライズド ("WEB 表示用に最適化された") にしたり、暗号化したりできます。また、(PDF の比較的新しい機能である) オブジェクトストリームを持つ PDF ファイルからそれを持たない PDF に変換したり、逆にオブジェクトストリームを生成したりできます。QPDF は PDF ファイルをテキストエディタで編集するのを助ける特別なモードをサポートします。詳しくは [QPDF のドキュメント](http://qpdf.sourceforge.net/files/qpdf-manual.html) を見てください。

```
 
```

以上、QPDF のホームページより

QPDF は PDF を暗号化したり、WEB 表示用に最適化 (ここではリニアライズのみ) したり操作したり、解析したりするコマンドラインプログラム (qpdf) やテキストエディタで PDF をいじるためのプログラム (qpdf --qdf と fix-qdf) や PDF を読み込み操作するためのライブラリ (libqpdf) からなります。

### コマンドラインプログラム qpdf の使い方 {#t6112193}

#### 基本的な機能 {#ce2aa5eb}

とりあえず暗号化するには

```
 qpdf --encrypt upasswd opasswd 40 --modify=n -- input.pdf output.pdf
```

のようにします。ここで upasswd と opasswd はそれぞれユーザー、オーナーパスワードで、40 は暗号化鍵長です。それ以降から "--" まで許可設定フラグが続きます。"--modify=n" の "n" ("y") は "modify" = 編集が非許可 (許可) であることを表します。パスワードが不要な場合は空文字列 "" にしましょう。許可設定フラグで指定可能な値は鍵長の値によって異なります。

暗号化による保護を解除するには

```
 qpdf --password=パスワード --decrypt
```

のようにします。

リニアライズするには

```
 qpdf --linearize input.pdf output.pdf
```

です。巨大な PDF の場合、リニアライズドにしておくと最初のページが表示されるまでの時間が短くなったり、特定のページを表示するのに部分ダウンロードが可能になります。

PDF 1.5 のオブジェクト・ストリームを有効にするには

```
 qpdf --object-streams=generate input.pdf output.pdf
```

です。古いビューアとの互換性の問題が生じますが、ファイルサイズがより小さくなります。これを解除するには "generate" の代わりに "disable" を指定します。

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

で output.qdf (中身は PDF だが拡張子を <em>q</em>df に代えてある) をつくり、テキストエディタで編集します。(この時点でホントは xref テーブルや Stream オブジェクトの Length 等がおかしくなり壊れた PDF になる) その後

```
fix-qdf < output.qdf > output.pdf
```

で修正すると output.<em>p</em>df は正当な PDF になります。

PDF の簡単な解説については[手書き PDF 入門](http://www.kobu.com/docs/pdf/pdfxhand.htm) を、完全な解説については [PDF Reference](http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/pdf_reference_1-7.pdf) を参照。

### libqpdf {#l2e5ffe5}

libqpdf は PDF を読み込み操作したりする C++ のライブラリです。詳しくは [http://github.com/qpdf/qpdf](http://github.com/qpdf/qpdf) の
[examples](http://github.com/qpdf/qpdf/tree/master/examples) や [include/qpdf/QPDF.hh](http://github.com/qpdf/qpdf/blob/master/include/qpdf/QPDF.hh) あたりを参照してください。

libqpdf でプログラミングするには PDF の構造や仕組みに関する詳細な知識を必要とします。これは PDF の構造をあまり意識しないで済む高水準の API を提供する PDFlib とは対照的です。PDF の生成もできますが、libqpdf にはグラフィックス描画関数などはありません。

試しに mingw32 環境で最新 (2014/08/20) の gcc-4.8.1 でサンプルコードをコンパイルしてみましたがうまく動かないようです。gcc-4.6.2 にダウングレードしたら動きました。

とりあえず [examples/pdf-create.cc](http://github.com/qpdf/qpdf/tree/master/examples/pdf-create.cc) を参考に簡単な PDF 生成プログラムを書いてみます:

```
 #include <qpdf/QPDF.hh>
 #include <qpdf/QPDFObjectHandle.hh>
 #include <qpdf/QPDFWriter.hh>
 #include <stdlib.h>
```

```
 static void create_pdf (char const* filename)
 {
   QPDF pdf;
```

```
   // 空の PDF を用意する
   pdf.emptyPDF();
   // ページオブジェクト
   QPDFObjectHandle page = pdf.makeIndirectObject(
     QPDFObjectHandle::parse(
       "<< /Type /Page"
       "   /MediaBox [0 0 200 200]"
       "   /Resources << /ProcSet [/PDF] >> >>")
     );
   // ページ内容: (50, 50) に 100×100 の正方形を描画
   QPDFObjectHandle contents =
     QPDFObjectHandle::newStream(&pdf, "50 50 100 100 re s");
   page.replaceKey("/Contents", contents);
   // ページを追加
   pdf.addPage(page, true);
```

```
   // ファイルに書き出し
   QPDFWriter w(pdf, filename);
   w.write();
 }
```

```
 int main (int argc, char* argv[])
 {
   try
   {
     create_pdf("test.pdf");
   }
   catch (std::exception& e)
   {
     std::cerr << e.what() << std::endl;
     exit(2);
   }
```

```
   return 0;
 }
```

コンパイルして実行すると test.pdf ができるはずです。
