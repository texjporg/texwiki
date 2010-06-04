---
title: "Eclipse"
url: "/Eclipse/"
date: 2010-06-04T04:48:42Z
pukiwiki: "Eclipse"
---

# Eclipse

## Eclipse {#t7934744}

### Eclipse とは {#r72c2682}

Eclipse は Java で書かれた IDE (統合開発環境) です。

### Java のインストール {#ca668ec2}

Eclipse は Java アプリケーションなので Java のランタイムが必要です。

- [http://java.sun.com/javase/ja/6/download.html](http://java.sun.com/javase/ja/6/download.html)

から JRE (Java でプログラミングをしたい人は JDK) をダウンロードしてインストールします。

### Eclipse のインストール {#r143ba66}

[Eclipse Wiki](http://eclipsewiki.net/eclipse/) を参照。

Windows の場合 [Pleiades All in One](http://mergedoc.sourceforge.jp/) を使えば、すぐに日本語化された Eclipse が使えます。

Eclipse の公式サイトからダウンロードした Eclipse を日本語化する場合は

- [eclipse-SDK-3.5.2-win32.zip](http://download.eclipse.org/eclipse/downloads/) (本体)

を解凍し、

- [pleiades_1.3.1.zip](http://mergedoc.sourceforge.jp/) (Eclipse 本体とプラグインの日本語化)

を Eclipse のルートフォルダに解凍して eclipse.ini の最終行に

```
-javaagent:plugins/jp.sourceforge.mergedoc.pleiades/pleiades.jar
```

を追加します。

### Eclipse で TeX {#i62a454e}

- [TeXlipse](/TeXlipse/)
- [BlueNoteTex](http://bluenotetex.sourceforge.net/index-ja.html)
- ecleTeX (旧名：eTeX)
