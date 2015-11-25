---
title: "PDF"
url: "/PDF/"
date: 2005-01-24T05:17:27Z
pukiwiki: "PDF"
---

# PDF

## PDF {#kf03468a}

PDF (Portable Document Format) は [アドビシステムズ (Adobe Systems Incorporated)](http://www.adobe.com/) により，[PostScript](/PostScript/) をベースに開発された電子文書フォーマットです．
現在は，国際規格 [ISO 32000-1](http://www.iso.org/iso/catalogue_detail.htm?csnumber=51502) として ISO により公開されています．
PDF の基本は，紙に書かれた文書を電子文書として表現することですが，単なるページ記述言語の枠を超え，HTML のようなハイパーリンクによる文書内外のデータの相互リンク，JavaScript　などによるインタラクティブなコンテンツや動画の再生機能なども備えています．

その用途は二十数年前の登場から広がりを見せ，現在では様々な用途や目的におけるニーズにあわせ，それに特化した派生規格も存在します．
PDF から派生した規格として，主に以下のものがあります：

- PDF/X -- 印刷用途に特化した企画。より安全な印刷データの受け渡しのため，PDF に様々な制約を設けています．
- PDF/A -- 文書保管目的に特化した企画。文書の長期保存という観点から PDF を利用しようというものです．文書のメタデータの埋め込みが要求されたり，規格によっては，文書の論理構造を示すタグ (マークアップ） が必須となります．
- PDF/UA -- アクセシビリティ．よりアクセシブルな PDF を目指して策定された規格です．スクリーンリーダーによる読み上げなどが問題なくできるように配慮されています．

Adobe より，元となる PDF の仕様書が公開されています (ISO の規格は有償です)：

- [PDF Reference and Adobe Extensions to the PDF Specification](http://www.adobe.com/jp/devnet/pdf/pdf_reference.html)
- [Adobe PDF Reference Archives](http://www.adobe.com/devnet/pdf/pdf_reference_archive.html)

***

***

### PDF の作り方 {#w4991875}

[PDFの作り方](</PDFの作り方/>) を参照．

### PDF を扱うソフトウェア {#o7e2223a}

OS X や Windows10 では，プリント機能を持ったどんなアプリケーションからも，
PDF を出力できます．
また，PostScript や PDF などを扱う，GhostScript というソフトウェアを用いた，PDF へ出力するための仮想プリンタが多数あります：
[PDFCreator](http://www.pdfforge.org/)，
[CubePDF](http://www.cube-soft.jp/cubepdf/)，
[BullZip PDF Printer](http://www.bullzip.com/products/pdf/info.php)，
[CutePDF Writer](http://www.acrosoftware.com/Products/CutePDF/writer.asp)， 
[PDF24 Creator](http://en.pdf24.org/)，
[PrimoPDF](http://www.primopdf.com/)，
[pdf995](http://www.pdf995.com/) 

有償のソフトウェアも様々な価格帯で多数あります．

- [Adobe Acrobat DC](http://www.adobe.com/jp/products/acrobat.html)
    ([Adobe Systems](http://www.adobe.com/jp/))

- [「かんたんPDF」シリーズ](http://www.e-frontier.co.jp/kantan-pdf/)
    ([イーフロンティア](http://www.e-frontier.co.jp/))

- [いきなりPDF シリーズ](http://www.sourcenext.com/titles/pdf/?i=com_top)
    ([ソースネクスト](http://www.sourcenext.com/))

- [SkyPDF クライアントソフトウェア](http://www.skycom.jp/product_client.html) ([スカイコム](http://www.skycom.jp/))
- [JUST PDF 3](http://www.justsystems.com/jp/products/justpdf/) ([ジャストシステム](http://www.justsystems.com/jp/))
- [瞬簡PDF](http://www.antenna.co.jp/product/#pdf) ([アンテナハウス](http://www.antenna.co.jp/))

既存の PDF に対して，様々な操作や加工を行うソフトウェアが存在します．上述の Adobe Acrobat DC では多様なことができます．Acrobat DC の使い方については，
[Acrobat ヘルプ](https://helpx.adobe.com/jp/acrobat/topics.html) を参照して下さい．

以下では，主にオープンソースのソフトウェアについて紹介していきます．

#### ファイルの結合やページの抽出 {#a6819b00}

[pdftk](/pdftk/) や [QPDF](/QPDF/)　で，ファイルの結合やページの抽出など，様々な操作が行えます。
複数の PDF ファイルをまとめてひとつにしたり，特定のページのみ別のファイルに抽出したりする場合に，これらのプログラムが使えます。どちらもコマンドライン・プログラムです。

#### テキスト抽出 {#p1620d11}

[Poppler](/Poppler/) や [Xpdf](/Xpdf/) に含まれる pdftotext　を使うと，PDF 文書からテキストのみ抽出できます。

#### パスワード保護 {#r212a8b0}

[pdftk](/pdftk/) や [QPDF](/QPDF/) で，暗号化による PDF の保護ができます．

#### Web 用に最適化 {#j2a7fa8f}

[QPDF](/QPDF/) は Web 用に最適化するための機能を備えています．

Web 用に最適化を行うと，Web サーバーからページ単位で PDF をダウンロードできるようになります．巨大な文書では，これを有効にすると特に効果的です。

#### その他 {#l381390e}

- [pdfsizeopt](https://github.com/pts/pdfsizeopt) PDF file size optimizer
- [DiffPDF](http://www.qtrac.eu/diffpdf.html) DiffPDF is used to compare two PDF files—textually or visually.

### PDF ビューア {#zd559492}

- [TeXstudio](/TeXstudio/) PDF ビューアとしても使える TeX の統合環境
- [TeXworks](/TeXworks/) PDF ビューアとしても使える TeX の統合環境
- [TeXShop](/TeXShop/) PDF ビューアとしても使える TeX の統合環境
- [SumatraPDF](/SumatraPDF/) SyncTeX に対応したタブ切り替え型の PDF ビューア
- [Skim](/Skim/) SyncTeX に対応した PDF ビューア
- [Slim PDF Reader](http://www.investintech.com/resources/freetools/slimpdfreader/) 軽量な PDF ビューア
- [PDF-XChange Viewer](http://www.tracker-software.com/product/pdf-xchange-viewer) タブ切り替え型で軽快に動作するフリーのPDFビューワー
- [Foxit Reader](http://www.foxitsoftware.com/downloads/#reader) フリーのPDF Reader
- [Evince](/Evince/)
- [Okular](/Okular/)
- [zathura](/zathura/)
- [qpdfview](/qpdfview/)

### PDF ライブラリ {#r450d9ad}

PDF 関連のソフトウェアを作成するためのライブラリも様々あります．
入門として，以下のサイトを参照すると良いでしょう：

- [Open Source PDF Libraries and Tools](http://pdf-house.blogspot.com/)
- [PDF開発の基礎](http://www.slideshare.net/field-works/pdf-29001511)
- [手書きPDF入門](http://www.kobu.com/docs/pdf/pdfxhand.htm)
- [詳細PDF入門 ー 実装して学ぼう！PDFファイルの構造とその書き方読み方](http://itchyny.hatenablog.com/entry/2015/09/16/100000)

#### C と C++ {#hc56261e}

[Haru free PDF library](http://libharu.org/)　は C　や C++　などをサポートするライブラリです。様々な高水準グラフィックス・テキスト描画関数を備えており，PostScript Type1 や TrueType フォントなどの埋め込みが可能です．暗号化による PDF の保護にも対応しています．既存の PDF の読み込みには対応していません．

[QPDF](/QPDF/) は，Jay Berkenbilt により保守・開発されている C++ のライブラリです．既存の PDF の読み込みと加工を行うライブラリです．データの抽出や加工などに便利です．また，暗号化やリニアライゼーションをよくサポートしている点が魅力です．グラフィックス描画関数などは全くないため，PDF 生成を行うには，相当の PDF による図形やテキストの描画の知識が必要です．テキストやフォント関連のサポートなどもないため，必要であれば，自身で実装する必要があります．

[Hummus PDF Writer](http://pdfhummus.com/)　は C++　や JavaScript (Node.js)　で利用可能なライブラリです．テキストやグラフィックスの描画だけでなく，既存の PDF の取り込みと加工が可能です．様々なフォント形式をサポートします．
詳しくは，開発元の [Features](https://github.com/galkahana/PDF-Writer/wiki/Features) の項を参照してください．

[PoDoFo](http://podofo.sourceforge.net/) は PDF ファイルを扱うための C++ ライブラリです．PDF を読み込み，加工することができます．

また，2D グラフィックス・ライブラリの [Cairo](http://cairographics.org/) も PDF 出力をサポートしており，手軽に PDF 生成が可能です．しおりやハイパーリンクなどの機能が不要であれば Cairo を使うのが簡単で良いでしょう．Cairo には Ruby など様々な言語でのバインディングがあります．

#### [iText](http://itextpdf.com/) {#u213a864}

iText は Java で書かれた PDF 生成ライブラリです。AGPL と商用ライセンスの2ライセンス形態で利用可能です．

#### [Apache PDFBox](https://pdfbox.apache.org) {#na607a01}

Apache PDFBox は，オープンソースの，Java による PDF ライブラリとツール群です。

#### [Prawn](http://prawn.majesticseacreature.com/) {#yf578756}

Ruby 製の PDF ライブラリです。

#### その他 {#t2dca5c2}

- [PDFKit](http://pdfkit.org/): JavaScript
- [TCPDF](http://www.tcpdf.org/): PHP
- [PDFMiner](http://www.unixuser.org/~euske/python/pdfminer/): Python
- [PyPDF2](https://github.com/mstamy2/PyPDF2): Python
- [ReportLab Toolkit](http://www.reportlab.com/software/opensource/rl-toolkit/): Python
- [ThinReports Generator](http://www.thinreports.org/features/generator/): Ruby
- [Origami](https://rubygems.org/gems/origami): Ruby

### 関連リンク {#j6d79d4c}

- [今さら聞けない Adobe Acrobat &amp; PDF](http://m-school.biz/dev/acrobat-pdf/)
