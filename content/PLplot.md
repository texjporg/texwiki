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
PDF, EPS, PS, LaTeX 形式などに出力可能です．<br>
Linux, Mac OS X, Windows で使用できます．<br>
フリーソフトウェアでライセンスは LGPL です．<br>

- [PLplot 公式サイト](http://plplot.sourceforge.net/)
- [PLplotのメモ](https://sites.google.com/site/makeplplot/)

## インストール {#x8c634ec}

### Windows {#z2e8dabc}

- [Configure PLplot for MinGW/CLI](http://www.miscdebris.net/plplot_wiki/index.php?title=Configure_PLplot_for_MinGW/CLI)
- [Momma's Wiki: PLplot - プロットライブラリ http://plplot.sourceforge.net/](http://www.eml.ele.cst.nihon-u.ac.jp/~momma/wiki/wiki.cgi/PLplot.html)
- [グラフ描画ライブラリ"PLplot"のインストール](http://d.hatena.ne.jp/A7M/20080125/1201242751)

[Texmaker#かな漢字変換をする際に，文字と背景が黒く表示され，判読不能になる#修正方法 (Windows)](/Texmaker/#e1ab5b1e) を参考にして MinGW, CMake 等をインストールします．

```
$ curl -R -L -o plplot-5.9.8.tar.gz http://sourceforge.net/projects/plplot/files/plplot/5.9.8%20Source/plplot-5.9.8.tar.gz/download
$ tar zxvf plplot-5.9.8.tar.gz
$ cd plplot-5.9.8
$ mkdir build_dir
$ cd build_dir
$ cmake -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw .. -DBUILD_SHARED_LIBS=ON -DBUILD_TEST=ON -DENABLE_ada=OFF -DENABLE_tcl=OFF -DPLD_ps=ON -DPLD_pstex=ON -DPLD_xfig=OFF
$ make
```

ここで test-drv-info.exe が動作を停止しました (おそらく extqt デバイスのテストでプログラムが落ちた可能性が高い)．

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
 < 4> pstex      Combined Postscript/LaTeX files
 < 5> null       Null device
 < 6> mem        User-supplied memory device
 < 7> svg        Scalable Vector Graphics (SVG 1.1)
 < 8> bmpqt      Qt Windows bitmap driver
 < 9> jpgqt      Qt jpg driver
 <10> pngqt      Qt png driver
 <11> ppmqt      Qt ppm driver
 <12> tiffqt     Qt tiff driver
 <13> svgqt      Qt SVG driver
 <14> qtwidget   Qt Widget
 <15> epsqt      Qt EPS driver
 <16> pdfqt      Qt PDF driver
 <17> extqt      External Qt driver
 <18> memqt      Memory Qt driver
```

```
Enter device number or keyword: 1
```

サンプルが表示されます．

コマンドライン引数からも指定できます．

```
./x01c -dev wingcc
```

LaTeX + EPS で出力したい場合は pstex を指定するか，コマンドラインから以下のようにすると x01c.eps と x01c.eps_t が出力されます．

```
./x01c -dev pstex -o x01c.eps
```

コマンドライン引数の詳細は

```
./x01c -h
```

で確認できます．
