---
title: "Adobe Reader"
url: "/Adobe Reader/"
date: 2011-09-11T19:13:04Z
pukiwiki: "Adobe Reader"
---

# Adobe Reader

## [Adobe Reader](http://www.adobe.com/jp/products/reader.html) {#a3d16439}

## Adobe Reader とは {#t103678c}

Adobe Reader は PDF ファイルを表示・印刷するためのソフトウェアです．

Adobe Reader の Windows 版は PDF ファイルをロックしてしまうので，PDF ファイルのプレビューには向いていません．<br>
PDF ファイルのプレビューには [TeXworks](/TeXworks/) や [SumatraPDF](/SumatraPDF/) を使用して，最終確認や印刷をする場合に Adobe Reader を使用することをおすすめします．<br>

- [Adobe Reader](http://www.adobe.com/jp/products/reader.html)
- [アドビ サポート担当 (adobesupportj) on Twitter](http://twitter.com/#!/AdobeSupportJ)

## ダウンロード {#ne09e93f}

- [http://www.adobe.com/jp/products/reader.html](http://www.adobe.com/jp/products/reader.html)
    - [http://get.adobe.com/jp/reader/](http://get.adobe.com/jp/reader/) (最新版)
    - [http://get.adobe.com/jp/reader/otherversions/](http://get.adobe.com/jp/reader/otherversions/) (以前のバージョン)
- [http://www.adobe.com/support/downloads/new.jsp](http://www.adobe.com/support/downloads/new.jsp)
    - Adobe Reader
        - [http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Windows](http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Windows)
        - [http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Macintosh](http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Macintosh)
        - [http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Unix](http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Unix)
    - Adobe Acrobat
        - [http://www.adobe.com/support/downloads/product.jsp?product=1&platform=Windows](http://www.adobe.com/support/downloads/product.jsp?product=1&platform=Windows)
        - [http://www.adobe.com/support/downloads/product.jsp?product=1&platform=Macintosh](http://www.adobe.com/support/downloads/product.jsp?product=1&platform=Macintosh)
            <!-- - --http://www.adobe.com/support/downloads/product.jsp?product=1&platform=Unix -->

- [ftp://ftp.adobe.com/pub/adobe/reader/win/](ftp://ftp.adobe.com/pub/adobe/reader/win/)
- [ftp://ftp.adobe.com/pub/adobe/reader/mac/](ftp://ftp.adobe.com/pub/adobe/reader/mac/)
- [ftp://ftp.adobe.com/pub/adobe/reader/unix/](ftp://ftp.adobe.com/pub/adobe/reader/unix/)

## アンインストール {#j28c578e}

- [Adobe Reader および Acrobat 用の Cleaner Tool について（Windows）](http://kb2.adobe.com/jp/cps/935/cpsid_93506.html) → ([参照](http://twitter.com/#!/AdobeSupportJ/status/192532790707888128))

## ヘルプ {#je3a489e}

- [Adobe Reader X ユーザーガイド](http://help.adobe.com/ja_JP/reader/using/)
- [Acrobat X Standard ユーザーガイド](http://help.adobe.com/ja_JP/acrobat/standard/using/)

## Adobe Reader をコマンドラインから操作する方法 (Windows) {#f9d733e4}

### PDF ファイルを開く {#id6d0918}

```
pdfopen --file hoge.pdf
echo open hoge.pdf | pdfdde
```

### PDF ファイルを閉じる {#h619779d}

```
pdfclose --file hoge.pdf
echo close hoge.pdf | pdfdde
```

### Adobe Reader を終了する {#pb5aeda1}

```
echo exit | pdfdde
```

### [Acrobat および Adobe Reader のコマンドラインオプション](http://kb2.adobe.com/jp/cps/510/510705.html) {#vb210974}

### [Windows のコマンドラインから Acrobat や Adobe Reader を使用して印刷する方法](http://pdf-file.nnn2.com/?p=222) {#fb046c0f}

## 関連リンク {#m8d917f7}

- [Adobe Reader 9.5.1 日本語版もどきをインストールしてみた](http://d.hatena.ne.jp/munepi/20120414/AdobeReader_jpn)
- [日本語を入力できない（Windows 版 Adobe Reader X 10.1）](http://kb2.adobe.com/jp/cps/908/cpsid_90899.html)
- [Adobe Reader X の検索窓で Google IME が動作しない理由](http://togetter.com/li/115406)
