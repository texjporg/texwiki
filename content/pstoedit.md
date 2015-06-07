---
title: "pstoedit"
url: "/pstoedit/"
date: 2015-02-07T16:52:53Z
pukiwiki: "pstoedit"
---

# pstoedit

## [pstoedit](http://sourceforge.net/projects/pstoedit/) {#o4a6bcaf}

pstoedit は，[PostScript](/PostScript/) や [PDF](/PDF/) ファイルを，種々のドローツールでサポートされる他のベクター画像形式に変換するツールです．
[Ghostscript](/Ghostscript/) がインストールされている必要があります．

<strong>公式サイト</strong>

- [http://www.pstoedit.net/](http://www.pstoedit.net/)
- [http://osdn.jp/projects/sfnet_pstoedit/](http://osdn.jp/projects/sfnet_pstoedit/)

[W32TeX](/W32TeX/) には標準で含まれています．

***

***

### お知らせ {#ecc26b2e}

[CTAN](/CTAN/) に公開されているのはかなり古いバージョンです (3.50)．

- [http://www.ctan.org/pkg/pstoedit](http://www.ctan.org/pkg/pstoedit)

### 対応している出力形式 {#q2a22716}

LaTeX の picture 形式や [MetaPost](/MetaPost/) 形式のほか Tgif, Xfig, [pic](/pic/), [gnuplot](/gnuplot/), [Asymptote](/Asymptote/) 形式などを出力することができます．
他の主な出力可能な形式を挙げておきます：

- wmf/emf (Windows metafile/Enhanced Windows metafile)
- dxf (CAD exchange format)
- ai (Adobe Illustrator)

### 使い方 {#qcd5ad79}

```
pstoedit -help
```

でヘルプメッセージが表示されます．

### インストール {#ua330eea}

#### OS X {#e64abc47}

MacPorts を利用しているなら，pstoedit という名前の Port をイントールします。

```
$ sudo port install pstoedit
```

#### Linux {#zc00b97c}

Debian や Ubuntu では，pstoedit パッケージが3つに小分けされています。
pstoedit に依存したプログラムを自分でコンパイルするのでなければ，libpstoedit0c2a と pstoedit をインストールします。

```
$ sudo apt-get install pstoedit
```

libpstoedit0c2a は依存関係で自動的にインストールされます。

### 関連リンク {#u9a3bf06}

- [pstoedit | Inkscape@JP](http://inkscape.paix.jp/manual/overview/external/pstoedit/)
- [PostScriptファイルを加工する - Tgif 入門](http://dsl4.eee.u-ryukyu.ac.jp/DOCS/tgif/node96.html)
- [グラフをWordに貼っつける（pstoeditの使い方）](http://www.geocities.jp/ne_o_t/GMT-USE/sonota/pstoedit.htm)
- [pstoedit --- ps/pdf ファイルをベクター形式に変換](http://konoyonohana.blog.fc2.com/blog-entry-103.html)
- [OpenOffice Drawの図をWordに貼り付ける](http://blog.umasaka.com/archives/1232)

#### License {#t236e98d}

GPLv2

#### ChangeLog {#x5a34f7d}

- [http://www.helga-glunz.homepage.t-online.de/pstoedit/changelog.htm](http://www.helga-glunz.homepage.t-online.de/pstoedit/changelog.htm)
