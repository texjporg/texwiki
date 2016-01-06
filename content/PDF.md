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

- PDF/X -- 印刷用途に特化した規格。より安全な印刷データの受け渡しのため，PDF に様々な制約を設けています．
- PDF/A -- 文書保管目的に特化した規格。文書の長期保存という観点から PDF を利用しようというものです．文書のメタデータの埋め込みが要求されたり，規格によっては，文書の論理構造を示すタグ (マークアップ） が必須となります．
- PDF/UA -- アクセシビリティ．よりアクセシブルな PDF を目指して策定された規格です．スクリーンリーダーによる読み上げなどが問題なくできるように配慮されています．

他にも E やら VT やら様々な ISO 規格があります．

Adobe より，元となる PDF の仕様書が公開されています (ISO の規格書は有償です)：

- [PDF Reference and Adobe Extensions to the PDF Specification](http://www.adobe.com/jp/devnet/pdf/pdf_reference.html)
- [Adobe PDF Reference Archives](http://www.adobe.com/devnet/pdf/pdf_reference_archive.html)

近年では，OS X のみならず，Windows 10 でも標準で PDF 出力が可能で，Microsoft Edge で閲覧可能になるなど，PDF 環境は整ってきています．

***

***

### PDF の作り方 {#w4991875}

TeX Wiki 内のページ "[PDFの作り方](</PDFの作り方/>)" を参照してください．

### PDF を扱うソフトウェア {#o7e2223a}

OS X や Windows 10 では，プリント機能を持ったどんなアプリケーションからも，
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

- [Adobe Acrobat DC](https://acrobat.adobe.com/jp/ja/acrobat.html)
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

[Google Chrome](</Google Chrome/>) が標準で PDF の描画をサポートしていたり，ブラウザで PDF を描画させる [PDF.js](https://github.com/mozilla/pdf.js) という JavaScript ライブラリが存在するなど，今では PDF を表示する環境は様々です．OS X をはしりとして，iOS や Windows 10 など，様々な環境で PDF を標準で，あるいは簡単に表示できます．

[Adobe Acrobat Reader DC](https://acrobat.adobe.com/jp/ja/products/pdf-reader.html) が有名ですが，ほかにも様々あります：

- [Poppler](/Poppler/) 系：Poppler を利用したものが多数あります．
    - [TeXstudio](/TeXstudio/) PDF ビューアとしても使える TeX の統合環境
    - [TeXworks](/TeXworks/) PDF ビューアとしても使える TeX の統合環境
    - [Evince](/Evince/) (GNOME) SyncTeX に対応した GNOME 標準の PDF ビューア
    - [Okular](/Okular/) (KDE) SyncTeX に対応した KDE 標準の PDF ビューア
    - [zathura](/zathura/) (GTK+) SyncTeX に対応した軽量な PDF ビューア
    - [qpdfview](/qpdfview/) (Qt) SyncTeX に対応したタブ切り替え型の PDF ビューア
- [MuPDF](/MuPDF/) 系：MuPDF を利用したものが多数あります．
    - [SumatraPDF](/SumatraPDF/) SyncTeX に対応したタブ切り替え型の PDF ビューア
    - [zathura](/zathura/) (GTK+) SyncTeX に対応した軽量な PDF ビューア
    - [qpdfview](/qpdfview/) (Qt) SyncTeX に対応したタブ切り替え型の PDF ビューア
- [TeXShop](/TeXShop/) PDF ビューアとしても使える TeX の統合環境
- [PDF-XChange Viewer](http://www.tracker-software.com/product/pdf-xchange-viewer) タブ切り替え型で軽快に動作するフリーの PDF ビューア
- [Foxit Reader](http://www.foxitsoftware.com/downloads/#reader) フリーのPDF Reader
- [Skim](/Skim/) SyncTeX に対応した PDF ビューア．OS X 専用です．
- [Slim PDF Reader](http://www.investintech.com/resources/freetools/slimpdfreader/) 軽量な PDF ビューア

Poppler を利用したものは多く，どれを使えばよいのかわかり辛いですが，使っているデスクトップ環境や好みの UI で選びましょう．

### PDF ライブラリ {#r450d9ad}

PDF 関連のソフトウェアを作成するためのライブラリも様々あります．
入門として，以下のサイトを参照すると良いでしょう：

- [Open Source PDF Libraries and Tools](http://pdf-house.blogspot.com/)
- [PDF開発の基礎](http://www.slideshare.net/field-works/pdf-29001511)
- [手書きPDF入門](http://www.kobu.com/docs/pdf/pdfxhand.htm)
- [詳細PDF入門 ー 実装して学ぼう！PDFファイルの構造とその書き方読み方](http://itchyny.hatenablog.com/entry/2015/09/16/100000)

PDF ライブラリにはその用途に応じて，大別して3種類あります．描画（レンダリング）ライブラリ，生成ライブラリ，そして加工やデータ抽出などに使える操作ライブラリです．これら複数の用途に使えるライブラリも存在します．[PDFlib](http://www.pdflib.com/) ([日本語サイト](http://www.pdflib.jp/)) が有名ですが，無償で公開されている　[PDFlib Lite](http://www.pdflib.com/download/free-software/pdflib-lite-7/) は，機能がかなり限定的です．

#### C と C++ {#hc56261e}

[Poppler](/Poppler/) は PDF の描画・操作ライブラリで，様々なビューアに利用されています．多くの言語に対するバインディングが存在し，[Ruby](/Ruby/) などの各種言語で利用可能です．Xpdf-3.0 をベースに開発がスタートし，多くの改善がなされるとともに，Windows など様々なプラットフォームで利用可能となっています．

[Haru free PDF library](http://libharu.org/)　は C　や C++　などをサポートする生成ライブラリです。様々な高水準グラフィックス・テキスト描画関数を備えており，PostScript Type1 や TrueType フォントなどの埋め込みが可能です．暗号化による PDF の保護にも対応しています．既存の PDF の読み込みには対応していません．

[QPDF](/QPDF/) は，Jay Berkenbilt により保守・開発されている C++ の PDF 操作ライブラリです．既存の PDF の読み込みが行え，データの抽出や加工などに便利です．また，暗号化やリニアライゼーションをよくサポートしている点が魅力です．グラフィックス描画関数などは全くないため，PDF 生成を行うには，相当の PDF による図形やテキストの描画の知識が必要です．テキストやフォント関連のサポートなどもないため，自身で実装する必要があります．

[Hummus PDF Writer](http://pdfhummus.com/)　は C++　や JavaScript (Node.js)　で利用可能な生成ライブラリです．テキストやグラフィックスの描画だけでなく，既存の PDF の取り込みと加工が可能です．OpenType など様々なフォント形式をサポートします．
詳しくは，開発元の [Features](https://github.com/galkahana/PDF-Writer/wiki/Features) の項を参照してください．

[PoDoFo](http://podofo.sourceforge.net/) は PDF ファイルを扱うための C++ ライブラリです．PDF を読み込み，加工することができます．

また，2D グラフィックス・ライブラリの [Cairo](http://cairographics.org/) も PDF 出力をサポートしており，手軽に PDF 生成が可能です．しおりやハイパーリンクなどの機能が不要であれば Cairo を使うのが簡単で良いでしょう．Cairo には Ruby など様々な言語でのバインディングがあります．

#### Java {#da4d96c8}

Java ではいくつかの活発なプロジェクトがあります．

- [今どきのJavaのPDFライブラリ まとめ (2014年版)](http://weblabo.oscasierra.net/java-pdf-lib-2014/)

などを参照すると良いでしょう．

[iText](http://itextpdf.com/) は Java で書かれた PDF 生成・操作ライブラリです．
比較的長い歴史があり，インターネットで検索すると，様々な記事が見つかります．
AGPL と商用ライセンスの2ライセンス形態で利用可能です．

[Apache PDFBox](https://pdfbox.apache.org) は，オープンソースの，Java による PDF 生成・操作ライブラリとツール群です．

#### Ruby と Python {#u080d4b3}

[Prawn](http://prawn.majesticseacreature.com/) は Ruby 製の PDF 生成ライブラリです．Ruby のみで書かれています．

その他，Ruby では，[Poppler バインディング](https://rubygems.org/gems/poppler/) や，PDF 生成の選択肢として [rcairo](https://github.com/rcairo/rcairo) による Cairo での出力などが挙げられます． 

[Python](/Python/) では，PDF 生成ライブラリとして， [ReportLab](http://www.reportlab.com/opensource/) などがよく知られています．

#### その他 {#t2dca5c2}

- [PDFKit](http://pdfkit.org/): JavaScript
- [TCPDF](http://www.tcpdf.org/): PHP
- [PDFMiner](http://www.unixuser.org/~euske/python/pdfminer/): Python
- [PyPDF2](https://github.com/mstamy2/PyPDF2): Python
- [ThinReports Generator](http://www.thinreports.org/features/generator/): Ruby
- [Origami](https://rubygems.org/gems/origami): Ruby

### 関連リンク {#j6d79d4c}

- [今さら聞けない Adobe Acrobat &amp; PDF](http://m-school.biz/dev/acrobat-pdf/)
