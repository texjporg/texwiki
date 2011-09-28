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

[Texmaker#かな漢字変換をする際に，文字と背景が黒く表示され，判読不能になる#修正方法 (Windows)](/Texmaker/#e1ab5b1e) を参考にして MinGW, CMake 等をインストールします．

```
$ curl -R -L -o plplot-5.9.8.tar.gz http://sourceforge.net/projects/plplot/files/plplot/5.9.8%20Source/plplot-5.9.8.tar.gz/download
$ tar zxvf plplot-5.9.8.tar.gz
$ pushd plplot-5.9.8
$ mkdir build_dir
$ pushd build_dir
$ cmake -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=install .. -DBUILD_SHARED_LIBS=ON -DBUILD_TEST=ON -DENABLE_ada=OFF -DENABLE_tcl=OFF -DPLD_xfig=OFF
$ make
$ make install
```

plplot-5.9.8 の dll フォルダにパスを通します．<br>
PLplot でデバイスに出力する場合に wingcc.dll, ps.dll などのドライバ (DLL ファイル) が必要になります．<br>

## アンインストール {#s2821338}

### Windows {#j9a86478}

cmake の Makefile でインストールした場合は，make uninstall が使えないので，アンインストールする場合は，ビルドしたディレクトリで

```
$ sed -e "s/\r$//" install_manifest.txt | sort | uniq | xargs rm
```

を実行します．
