---
title: "pstoedit"
url: "/pstoedit/"
date: 2015-02-07T16:52:53Z
pukiwiki: "pstoedit"
---

# pstoedit

## [pstoedit](http://sourceforge.net/projects/pstoedit/) {#o4a6bcaf}

<strong>目次</strong>

### pstoedit とは {#s96e9010}

pstoedit は，[PostScript](/PostScript/) や [PDF](/PDF/) ファイルを，種々のドローツールでサポートされる他のベクター画像形式に変換するツールです．
[Ghostscript](/Ghostscript/) がインストールされている必要があります．

[W32TeX](/W32TeX/) に標準で含まれています．

- [http://www.pstoedit.net/](http://www.pstoedit.net/)
- [http://sourceforge.jp/projects/sfnet_pstoedit/](http://sourceforge.jp/projects/sfnet_pstoedit/)

### License {#t236e98d}

GPLv2

### ChangeLog {#x5a34f7d}

- [http://www.helga-glunz.homepage.t-online.de/pstoedit/changelog.htm](http://www.helga-glunz.homepage.t-online.de/pstoedit/changelog.htm)

### お知らせ {#ecc26b2e}

CTAN に公開されているのはかなり古いバージョンです (3.50)．

- [http://www.ctan.org/pkg/pstoedit](http://www.ctan.org/pkg/pstoedit)

## 使い方 {#qcd5ad79}

```
pstoedit -help
```

でヘルプメッセージが表示されます．

### 対応している出力形式 {#q2a22716}

LaTeX の picture 形式や [MetaPost](/MetaPost/) 形式のほか Tgif, Xfig, [pic](/pic/), [gnuplot](/gnuplot/), [Asymptote](/Asymptote/) 形式などを出力することができます．
他の主な出力可能な形式を挙げておきます：

- wmf/emf (Windows metafile/Enhanced Windows metafile)
- dxf (CAD exchange format)
- ai (Adobe Illustrator)

## インストール {#ua330eea}

### Mac OS X {#e64abc47}

#### MacPortsを利用したインストール {#k91c559c}

pstoeditという名前のPortをイントールします。

```
$ sudo port install pstoedit
```

### Linux {#zc00b97c}

#### Debian/Ubuntu {#wa540df8}

DebianやUbuntuでは、pstoeditパッケージが3つに小分けされています。pstoeditに依存したプログラムを自分でコンパイルするのでなければ、libpstoedit0c2aとpstoeditをインストールします。

```
$ sudo apt-get install pstoedit
```

libpstoedit0c2aは依存関係で自動的にインストールされます。

## 関連リンク {#u9a3bf06}

- [pstoedit | Inkscape@JP](http://inkscape.paix.jp/manual/overview/external/pstoedit/)
- [PostScriptファイルを加工する - Tgif 入門](http://dsl4.eee.u-ryukyu.ac.jp/DOCS/tgif/node96.html)
- [グラフをWordに貼っつける（pstoeditの使い方）](http://www.geocities.jp/ne_o_t/GMT-USE/sonota/pstoedit.htm)
- [pstoedit --- ps/pdf ファイルをベクター形式に変換](http://konoyonohana.blog.fc2.com/blog-entry-103.html)
- [OpenOffice Drawの図をWordに貼り付ける](http://blog.umasaka.com/archives/1232)
