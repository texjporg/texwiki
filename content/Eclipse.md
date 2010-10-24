---
title: "Eclipse"
url: "/Eclipse/"
date: 2010-06-04T04:48:42Z
pukiwiki: "Eclipse"
---

# Eclipse

## [Eclipse](http://www.eclipse.org/) {#t7934744}

### Eclipse とは {#r72c2682}

Eclipse は Java で書かれた IDE (統合開発環境) です。

- [Eclipse.org home](http://www.eclipse.org/)

### Java のインストール {#ca668ec2}

Eclipse は Java アプリケーションなので Java のランタイムが必要です。

- [http://www.oracle.com/technetwork/java/javase/downloads/](http://www.oracle.com/technetwork/java/javase/downloads/)

から JRE (Java でプログラミングをしたい人は JDK) をダウンロードしてインストールします。

### Eclipse のインストール {#r143ba66}

[Eclipse Wiki](http://eclipsewiki.net/eclipse/) を参照。

Windows の場合 [Pleiades All in One](http://mergedoc.sourceforge.jp/) を使えば、すぐに日本語化された Eclipse が使えます。

Eclipse の公式サイトからダウンロードした Eclipse を日本語化する場合は

- [Eclipse の最新リリース版](http://download.eclipse.org/eclipse/downloads/) (本体)

を解凍し、

- [Pleiades 本体の最新版](http://mergedoc.sourceforge.jp/) (Eclipse 本体とプラグインの日本語化)

を Eclipse のルートフォルダに解凍して eclipse.ini の最終行に

```
-javaagent:plugins/jp.sourceforge.mergedoc.pleiades/pleiades.jar
```

を追加します。

### Eclipse で TeX {#i62a454e}

- [TeXlipse](/TeXlipse/)
- [sTeXIDE](http://code.google.com/p/stexide/)
- [BlueNoteTex](http://bluenotetex.sourceforge.net/index-ja.html)
- ecleTeX (旧名：eTeX)
- [LatEc](http://www.itu.dk/people/jborella/)
- [LaPsE](http://sf.net/projects/eclipse-latex)
- [LaTexEditor](http://sf.net/projects/latexeditor/)

### 関連リンク {#o908ecbb}

- Eclipse - [http://www.eclipse.org/](http://www.eclipse.org/)
- Pleiades - [http://mergedoc.sourceforge.jp/](http://mergedoc.sourceforge.jp/)
- Eclipse Wiki - [http://eclipsewiki.net/eclipse/](http://eclipsewiki.net/eclipse/)
