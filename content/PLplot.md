---
title: "PLplot"
url: "/PLplot/"
date: 2011-09-28T18:40:02Z
pukiwiki: "PLplot"
---

# PLplot

## [PLplot](http://plplot.sourceforge.net/) {#tc328e7c}

## PLplot とは {#r3877799}

PLplot は，グラフを作成するためのライブラリです．<br>
PDF, EPS, PS, EPS+LaTeX, SVG 形式などに出力可能です．<br>
Linux, Mac OS X, Windows で使用できます．<br>
フリーソフトウェアでライセンスは LGPL です．<br>

- [PLplot 公式サイト](http://plplot.sourceforge.net/)
- [PLplotのメモ](https://sites.google.com/site/makeplplot/)

## インストール {#x8c634ec}

### Windows {#z2e8dabc}

- [Configure PLplot for MinGW/CLI](http://www.miscdebris.net/plplot_wiki/index.php?title=Configure_PLplot_for_MinGW/CLI)
- [Momma's Wiki: PLplot - プロットライブラリ http://plplot.sourceforge.net/](http://www.eml.ele.cst.nihon-u.ac.jp/~momma/wiki/wiki.cgi/PLplot.html)
- [グラフ描画ライブラリ"PLplot"のインストール](http://d.hatena.ne.jp/A7M/20080125/1201242751)

[Texmaker#かな漢字変換をする際に，文字と背景が黒く表示され，判読不能になる#修正方法 (Windows)](/Texmaker/#e1ab5b1e) を参考にして MinGW, CMake, Qt, zlib, libpng 等をインストールします．

PLplot で PDF ファイルを作成する場合は [libHaru](http://libharu.org/) または Qt が必要です．<br>
[libHaru](http://libharu.org/) をインストールします．<br>
libHaru のビルドには zlib, libpng が必要です．<br>

```
$ curl -R -L -O http://libharu.org/files/libharu-2.3.0-rc1.tar.bz2
$ tar jxvf libharu-2.3.0-rc1.tar.bz2
$ pushd libharu-2.3.0-rc1
$ ./configure --prefix=/mingw --with-zlib=/mingw --with-png=/mingw
$ make
$ make install
$ popd
```

PLplot をインストールします．

```
$ curl -R -L -o plplot-5.9.8.tar.gz http://sourceforge.net/projects/plplot/files/plplot/5.9.8%20Source/plplot-5.9.8.tar.gz/download
$ tar zxvf plplot-5.9.8.tar.gz
$ cd plplot-5.9.8
$ mkdir build
$ cd build
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DBUILD_SHARED_LIBS=ON -DBUILD_TEST=ON -DENABLE_ada=OFF -DENABLE_tcl=OFF -DPLD_ps=ON -DPLD_pstex=ON
$ make
```

ここで test-drv-info.exe が動作を停止しました (おそらく extqt デバイスのテストでプログラムが落ちた可能性が高い(と予想))．

***

```
test-drv-info.exe は動作を停止しました
```

***

もう一度 make をタイプします．

```
$ make
$ make install
```

PLplot でデバイスに出力する場合に wingcc.dll, ps.dll などのドライバ (DLL ファイル) が必要になります．<br>
/mingw/lib/plplot5.9.8/driversd/ にパスを通します．<br>

```
$ export PATH=/mingw/lib/plplot5.9.8/driversd:$PATH
```

## アンインストール {#s2821338}

### Windows {#j9a86478}

cmake の Makefile でインストールした場合は，make uninstall が使えないので，アンインストールする場合は，ビルドしたディレクトリで

```
$ sed -e "s/\r$//" install_manifest.txt | sort | uniq | xargs rm
```

を実行します．

## 使い方 {#qd056acb}

### Windows {#hc1cce0b}

サンプルをビルドしてみます．

```
$ cd /mingw/share/plplot5.9.8/examples/
$ cd c
$ make
$ ./x01c
PLplot library version: 5.9.8

Plotting Options:
 < 1> wingcc     Win32 (GCC)
 < 2> ps         PostScript File (monochrome)
 < 3> psc        PostScript File (color)
 < 4> xfig       Fig file
 < 5> pstex      Combined Postscript/LaTeX files
 < 6> null       Null device
 < 7> mem        User-supplied memory device
 < 8> svg        Scalable Vector Graphics (SVG 1.1)
 < 9> pdf        Portable Document Format PDF
 <10> bmpqt      Qt Windows bitmap driver
 <11> jpgqt      Qt jpg driver
 <12> pngqt      Qt png driver
 <13> ppmqt      Qt ppm driver
 <14> tiffqt     Qt tiff driver
 <15> svgqt      Qt SVG driver
 <16> qtwidget   Qt Widget
 <17> epsqt      Qt EPS driver
 <18> pdfqt      Qt PDF driver
 <19> extqt      External Qt driver
 <20> memqt      Memory Qt driver
```

```
Enter device number or keyword: 1
```

サンプルが表示されます．

コマンドライン引数からも指定できます．

```
./x01c -dev wingcc
```

EPS+LaTeX 形式で出力したい場合は Plotting Options に pstex を指定するか，コマンドラインから以下のようにすると x01c.eps と x01c.eps_t が出力されます．

```
./x01c -dev pstex -o x01c.eps
```

以下のようにして使用します．

```
\documentclass{article}
\usepackage[dvips]{graphicx}
\begin{document}
\input{x01c.eps_t}
\end{document}
```

コマンドライン引数の詳細は

```
./x01c -h
```

で確認できます．
