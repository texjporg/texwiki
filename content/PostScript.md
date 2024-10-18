---
title: "PostScript"
url: "/PostScript/"
date: 2004-09-19T16:42:27Z
pukiwiki: "PostScript"
---

# PostScript

## PostScript {#g9b8f6ae}

PostScript は DTP 業界標準のページ記述言語です．
[PDF](/PDF/) は PostScript を元にして策定されました．

***

***

### お知らせ {#wbf44675}

EPS 形式は現在では非推奨です。

- [EPS形式のファイルはもう古い！？](https://rokustar.com/blog/archives/525)
- [10年以上前からEPS形式は非推奨です！](https://note.com/dtp_tranist/n/n039b4a249c9f)
- [PDF&#x26;出力の手引き2024](https://blog.adobe.com/jp/publish/2023/11/16/cc-design-print2024)

> <strong>※従来一般的であった EPS 形式は現在のワークフローには適していません。</strong><br>
>
> 　<strong>特別な場合を除き、EPS 以外のファイル形式をご利用ください。</strong><br>

> mac OS 14 から OS での PostScript、EPS のプレビューはできなくなりました。<br>
> プレビューする際は Acrobat などの対応アプリをご利用ください。<br>
> ▶ [https://support.apple.com/ja-jp/108775](https://support.apple.com/ja-jp/108775)

<strong>Creative Cloud を利用したワークフローの場合、入稿データは「PDF/X-4( ※ EPS 使用不可 )」を推奨します。</strong><br>

macOS Sonoma 14 で PostScript、EPS ファイルを PDF ファイルに変換する機能が削除されました。

- [Mac で .ps ファイルや .eps ファイルを表示する](https://support.apple.com/ja-jp/108775)
- [macOS14 Sonoma でEPSをプレビューしたい](https://discussionsjapan.apple.com/thread/255488713)
- [macOS 14 Sonomaでは、PostScriptとEPSのサポート終了がさらに進み、.ps/.epsファイルをプリンタキューにも追加できない状態に。](https://applech2.com/archives/macos-14-sonoma-eos-ps-and-eps.html)
- [Apple、macOS 14 SonomaでPostScriptとEPSファイルをPDFへ変換する機能を削除。これによりAdobeのAcrobatなどでPDFファイルを印刷できなくなっているので注意を。](https://applech2.com/archives/20230612-apple-remove-ps-eps-to-pdf-from-macos-14-sonoma.html)
- [Apple、macOS 13 VenturaのプレビューアプリでPostScript(.ps/.eps)ファイルのサポートを終了。](https://applech2.com/archives/20221028-macos-13-ventura-preview-app-drop-support-postscript.html)

### 技術情報 {#h5ddd3dc}

PostScript の技術情報は Adobe の [Technical Notes for Developers](http://partners.adobe.com/asn/tech/ps/specifications.jsp) から全て得ることができます．

- [PostScript Language Reference, third edition - Adobe](https://www.adobe.com/jp/print/postscript/pdfs/PLRM.pdf) (PDF)
- [PostScript &amp; GhostScript Resources](http://www.inkguides.com/postscript.asp)
- [Beyond Linux® From Scratch (PostScript)](http://lfsbookja.osdn.jp/BLFS/svn-ja/pst/ps.html)
- [Gutenprint (formerly called Gimp-Print)](http://gimp-print.sourceforge.net/)（高品質のプリンタドライバ）

### 処理系 {#c7df0d3d}

#### Ghostscript {#c88bc88f}

[Ghostscript](/Ghostscript/) は PostScript/PDF インタープリタ (ソフトウェア RIP) です．

#### Adobe Acrobat Distiller {#l57d69fc}

Adobe Acrobat Distiller は PostScript ファイルを PDF に変換するためのソフトウェアです．

- [Creating PDFs with Acrobat Distiller](https://helpx.adobe.com/acrobat/using/creating-pdfs-acrobat-distiller.html)
- [Acrobat Distiller による PDF の作成](https://helpx.adobe.com/jp/acrobat/using/creating-pdfs-acrobat-distiller.html)
- [Acrobat Distiller は何をするためのソフトウェアですか](https://helpx.adobe.com/jp/legacy/kb/4624.html)

### EPS 作成 {#lceaa8b7}

- [図の作り方](</図の作り方/>)
- [変換ツール](</変換ツール/#i3d14633>)
- [ドローソフト](</描画・グラフツール/>)を使って EPS ファイルを作成することもできます．

### 関連リンク {#af57d83a}

- [PostScript FAQ](https://en.m.wikibooks.org/wiki/PostScript_FAQ)
- [sudoku.ps](https://gist.github.com/naohaq/5161653)
- [「PostScript」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=PostScript)
- [convbkmk.rb](http://www.t-lab.opal.ne.jp/tex/uptex.html) dvips で出力した PostScript ファイルを PDF ファイルに変換するときに日本語のしおりの文字化けを防止するためのスクリプト
- [PDF bookmark.py - a python script embed bookmark to PDF](https://github.com/turky/pdf-bookmark) 既存のPDFファイルに後から目次を埋め込むためのツール
- [PStill](http://www.pstill.com/) (Another PS-to-PDF utility)
- [猫でもわかるPostScriptとPDFの昔話](http://d.hatena.ne.jp/akane_neko/20130520/1369000693)
- [PostScript 実習マニュアル](http://tutorial.jp/graph/ps/psman.pdf)（大黒 学さん）
- [ページ記述言語 ポストスクリプトマニュアル](https://www1.doshisha.ac.jp/~jmizushi/ps.html)（同志社大学 水島研究室）
- [PostScript Programing 入門](http://apollon.issp.u-tokyo.ac.jp/~watanabe/ps/)
- [EPSグラフィック直書き入門](http://yubais.net/doc/eps/)
- [Postscript プログラミングメモ](https://konamih.sakura.ne.jp/Documents/ps/psmemo.html)
