---
title: "PDF"
url: "/PDF/"
date: 2005-01-24T05:17:27Z
pukiwiki: "PDF"
---

# PDF

## PDF {#kf03468a}

PDF (Portable Document Format) は [PostScript](/PostScript/) をベースに作成された電子ドキュメントのファイルフォーマットです．

***

***

### 仕様書 {#l37fe424}

- [PDF Reference and Adobe Extensions to the PDF Specification](http://www.adobe.com/jp/devnet/pdf/pdf_reference.html)
- [Adobe PDF Reference Archives](http://www.adobe.com/devnet/pdf/pdf_reference_archive.html)

### PDF の作り方 {#w4991875}

[PDFの作り方](</PDFの作り方/>) を参照．

### PDF を扱うソフトウェア {#o7e2223a}

OS X や Windows10 では，プリント機能を持ったどんなアプリケーションからも，
PDF を出力できます．
また，PDF へ出力するための仮想プリンタとして，GhostScript を利用したものが多数あります：
[PDFCreator](http://www.pdfforge.org/)，
[CubePDF](http://www.cube-soft.jp/cubepdf/)，
[BullZip PDF Printer](http://www.bullzip.com/products/pdf/info.php)，
[CutePDF Writer](http://www.acrosoftware.com/Products/CutePDF/writer.asp)， 
[PDF24 Creator](http://en.pdf24.org/)，
[PrimoPDF](http://www.primopdf.com/)，
[pdf995](http://www.pdf995.com/) 

有償のソフトウェアも様々な価格帯で多数あります。

- [Adobe Acrobat DC](http://www.adobe.com/jp/products/acrobat.html)
    ([Adobe Systems](http://www.adobe.com/jp/))

- [「かんたんPDF」シリーズ](http://www.e-frontier.co.jp/kantan-pdf/)
    ([イーフロンティア](http://www.e-frontier.co.jp/))

- [いきなりPDF シリーズ](http://www.sourcenext.com/titles/pdf/?i=com_top)
    ([ソースネクスト](http://www.sourcenext.com/))

- [SkyPDF クライアントソフトウェア](http://www.skycom.jp/product_client.html) ([スカイコム](http://www.skycom.jp/))
- [JUST PDF 3](http://www.justsystems.com/jp/products/justpdf/) ([ジャストシステム](http://www.justsystems.com/jp/))
- [瞬簡PDF](http://www.antenna.co.jp/product/#pdf) ([アンテナハウス](http://www.antenna.co.jp/))

#### ファイルの結合やページの抽出 {#a6819b00}

[pdftk](/pdftk/) や [QPDF](/QPDF/)　で，ファイルの結合やページの抽出など，様々な操作が行えます。
複数の PDF ファイルをまとめてひとつにしたり，特定のページのみ別のファイルに抽出したりする場合に，これらのプログラムが使えます。どちらもコマンドライン・プログラムです。

#### テキスト抽出 {#p1620d11}

[Poppler](/Poppler/) や [Xpdf](/Xpdf/) に含まれる pdftotext　を使うと，PDF 文書からテキストのみ抽出できます。

#### パスワード保護 {#r212a8b0}

[pdftk](/pdftk/) や [QPDF](/QPDF/) で，暗号化による PDF の保護ができます．

#### Web 用に最適化 {#j2a7fa8f}

[QPDF](/QPDF/) は Web 用に最適化するための，いくつかの機能を備えています。

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

#### C と C++ {#hc56261e}

- [libHaru](http://libharu.org/): C, C++
- [QPDF](/QPDF/): C++ のライブラリも付属しています．
- [Hummus PDF Writer](http://pdfhummus.com/): C++, JavaScript (Node.js)
- [PoDoFo](http://podofo.sourceforge.net/): C++

#### [iText](http://itextpdf.com/) {#u213a864}

iText は Java で書かれた PDF 生成ライブラリです。AGPL と商用ライセンスの2ライセンス形態で利用可能です。

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

- [Open Source PDF Libraries and Tools](http://pdf-house.blogspot.com/)
- [PDF開発の基礎](http://www.slideshare.net/field-works/pdf-29001511)
- [Windows ストア アプリで PDF コンテンツをレンダリングする](http://msdn.microsoft.com/ja-jp/magazine/dn532207.aspx)
- [手書きPDF入門](http://www.kobu.com/docs/pdf/pdfxhand.htm)
- [今さら聞けない Adobe Acrobat &amp; PDF](http://m-school.biz/dev/acrobat-pdf/)
- [詳細PDF入門 ー 実装して学ぼう！PDFファイルの構造とその書き方読み方](http://itchyny.hatenablog.com/entry/2015/09/16/100000)
