---
title: "Eclipse"
url: "/Eclipse/"
date: 2010-06-04T04:48:42Z
pukiwiki: "Eclipse"
---

# Eclipse

## [Eclipse](http://www.eclipse.org/) {#t7934744}

<img src="http://upload.wikimedia.org/wikipedia/en/3/34/Eclipse-logo.png" alt="Eclipse" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## Eclipse とは {#r72c2682}

Eclipse は Java で書かれた IDE (統合開発環境) です．

- [Eclipse.org home](http://www.eclipse.org/)
    - [eclipse project downloads](http://download.eclipse.org/eclipse/downloads/)
    - [eclipse e4 project downloads](http://download.eclipse.org/e4/downloads/)
- [Eclipse Portable](http://sf.net/projects/eclipseportable/files/)

## 動作環境 {#aae7926e}

[Target Environments](http://www.eclipse.org/projects/project-plan.php?projectid=eclipse#target_environments) を参照．

## Java のインストール {#ca668ec2}

Eclipse は Java アプリケーションなので Java のランタイムが必要です．

### Windows, Linux, Solaris {#h067ff28}

- [Java SE Downloads](http://www.oracle.com/technetwork/jp/java/javase/downloads/)

から JRE (Java でプログラミングをしたい人は JDK) をダウンロードしてインストールします．

- [Java Portable](http://sourceforge.net/projects/portableapps/files/Java%20Portable/Additional%20Versions/)

もあります．

### OS X {#q0e0ab59}

#### Java for OS X {#y4154449}

- [Java - OS X Lion 2012-001](http://support.apple.com/kb/DL1515?viewlocale=ja_JP)
- [Java - Mac OS X 10.6 アップデート 7](http://support.apple.com/kb/DL1516?viewlocale=ja_JP)

#### OpenJDK {#n03d5e54}

- [OpenJDK 7 and 8 for OS/X Snow and Lion](http://code.google.com/p/openjdk-osx-build/)

## Eclipse のインストール {#r143ba66}

[Eclipse Wiki](http://eclipsewiki.net/eclipse/) を参照。

Windows の場合 [Pleiades All in One](http://mergedoc.sourceforge.jp/) を使えば，すぐに日本語化された Eclipse が使えます．

Eclipse の公式サイトからダウンロードした Eclipse を日本語化する場合は

- [Eclipse の最新リリース版](http://download.eclipse.org/eclipse/downloads/) (本体)

を解凍し，

- [Pleiades 本体の最新版](http://mergedoc.sourceforge.jp/) (Eclipse 本体とプラグインの日本語化)

を Eclipse のルートフォルダに解凍して eclipse.ini の最終行に

```
-javaagent:plugins/jp.sourceforge.mergedoc.pleiades/pleiades.jar
```

を追加します．

## Eclipse で TeX {#i62a454e}

- [TeXlipse](/TeXlipse/)
- [sTeXIDE](http://code.google.com/p/stexide/)
- [Blue Note Tex](http://bluenotetex.sourceforge.net/index-ja.html)
- [ecleTeX (旧名：eTeX)](http://sourceforge.net/projects/etex/)
- [LatEc](http://www.itu.dk/people/jborella/)
- [LaPsE](http://sf.net/projects/eclipse-latex)
- [LaTexEditor](http://sf.net/projects/latexeditor/)

## 関連リンク {#o908ecbb}

- Eclipse - [http://www.eclipse.org/](http://www.eclipse.org/)
- Pleiades - [http://mergedoc.sourceforge.jp/](http://mergedoc.sourceforge.jp/)
- Eclipse Wiki - [http://eclipsewiki.net/eclipse/](http://eclipsewiki.net/eclipse/)
