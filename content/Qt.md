---
title: "Qt"
url: "/Qt/"
date: 2013-09-21T05:23:23Z
pukiwiki: "Qt"
---

# Qt

## Qt {#me01a2ad}

Qt はクロスプラットフォーム・アプリケーションフレームワークです．
以下のプログラムが Qt を使用しています．

- LaTeX editor: [LyX](/LyX/), [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/)
- PDF viewer: [Okular](/Okular/), [qpdfview](/qpdfview/), [Sioyek](/Sioyek/), [Dual-Screen PDF Viewer \[dspdfviewer\]](http://dspdfviewer.danny-edel.de/), [Xpdf (XpdfReader)](/Xpdf/)

***

***

### 動作環境 {#w51d5d67}

- [https://doc.qt.io/qt-6/supported-platforms.html](https://doc.qt.io/qt-6/supported-platforms.html)
- [https://doc.qt.io/qt-5/supported-platforms.html](https://doc.qt.io/qt-5/supported-platforms.html)

## ダウンロード {#de2773fb}

Qt 5.15 以降のオープンソース版のオフラインインストーラーは提供されなくなりました。--&gt; [Qtライセンスに関する変更 – 2020年](https://www.qt.io/ja-jp/blog/qt-offering-changes-2020)

- [https://www.qt.io/download](https://www.qt.io/download)
- [https://download.qt.io/official_releases/qt/](https://download.qt.io/official_releases/qt/)
- [https://download.qt.io/development_releases/qt/](https://download.qt.io/development_releases/qt/)
- [https://download.qt.io/archive/qt/](https://download.qt.io/archive/qt/)

MSYS2 で Qt 6 が提供されています。

- [https://packages.msys2.org/groups/mingw-w64-ucrt-x86_64-qt6](https://packages.msys2.org/groups/mingw-w64-ucrt-x86_64-qt6)
- [https://packages.msys2.org/groups/mingw-w64-clang-x86_64-qt6](https://packages.msys2.org/groups/mingw-w64-clang-x86_64-qt6)
- [https://packages.msys2.org/groups/mingw-w64-clang-aarch64-qt6](https://packages.msys2.org/groups/mingw-w64-clang-aarch64-qt6)

## 不具合 {#zc678b55}

- [https://bugreports.qt.io/](https://bugreports.qt.io/)
    - \[[QTBUG-10543\] Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard. - Qt Bug Tracker](https://web.archive.org/web/20240229115844/https://bugreports.qt.io/browse/QTBUG-10543)
    - \[[QTBUG-43756\] setExtraSelections with QTextFormat::FullWidthSelection makes preedit text difficult to read - Qt Bug Tracker](https://web.archive.org/web/20240229115844/https://bugreports.qt.io/browse/QTBUG-43756)

## Unicode {#oce7c878}

- [Unicode in Qt](https://doc.qt.io/qt-6/unicode.html)
- [Qtの基礎 - 文字コード](http://mochiuwiki.e2.valueserver.jp/index.php?title=Qt%E3%81%AE%E5%9F%BA%E7%A4%8E_-_%E6%96%87%E5%AD%97%E3%82%B3%E3%83%BC%E3%83%89)

### Qt 5.11 {#f03ec2c2}

One of the larger updates in Qt Core went into our Unicode support. QChar, QString, QText&#x42;oundaryFinder and our algorithm for bidirectional text are now fully compatible with [Unicode 10](http://www.unicode.org/versions/Unicode10.0.0/).

Qt Core の大きな変更の１つは Unicode 対応です。今回 QChar、QString、QText&#x42;oundaryFinder と、双方向テキストを [Unicode 10](http://www.unicode.org/versions/Unicode10.0.0/) に完璧に対応させました。

- [http://blog.qt.io/blog/2018/05/22/qt-5-11-released/](http://blog.qt.io/blog/2018/05/22/qt-5-11-released/)
- [http://blog.qt.io/jp/2018/05/23/qt-5-11-released/](http://blog.qt.io/jp/2018/05/23/qt-5-11-released/)

### Qt 5.0 {#ceb62694}

Qt 5.0 uses and fully supports version [6.2](http://www.unicode.org/versions/Unicode6.2.0/) of the Unicode standard.

Qt 5.0 は [Unicode 6.2](http://www.unicode.org/versions/Unicode6.2.0/) をサポートしています。

- [http://doc.qt.io/qt-5/unicode.html](http://doc.qt.io/qt-5/unicode.html)
- [Qt5 の新機能 2012/12/15](https://www.slideshare.net/takumiasaki/qt5-20121215)
