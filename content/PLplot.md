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

- [PLplot Home Page - Main](http://plplot.sourceforge.net/)

### 動作環境 {#dd55c850}

Windows, OS X, Linux

### License {#z821faef}

LGPL

### ChangeLog {#v32a5d09}

[http://sourceforge.net/p/plplot/code/HEAD/log/](http://sourceforge.net/p/plplot/code/HEAD/log/)

### 関連リンク {#s690b648}

- [https://sites.google.com/site/makeplplot/](https://sites.google.com/site/makeplplot/)
- [Momma's Wiki: PLplot - プロットライブラリ http://plplot.sourceforge.net/](http://www.eml.ele.cst.nihon-u.ac.jp/~momma/wiki/wiki.cgi/PLplot.html)
- [グラフ描画ライブラリ"PLplot"のインストール](http://d.hatena.ne.jp/A7M/20080125/1201242751)

## インストール {#x8c634ec}

### Windows {#z2e8dabc}

#### MinGW {#h997502f}

- [Configure PLplot for MinGW/CLI](http://www.miscdebris.net/plplot_wiki/index.php?title=Configure_PLplot_for_MinGW/CLI)

[Poppler](/Poppler/) を参考にして MinGW, CMake, pkg-config 等をインストールします．

PLplot で PDF ファイルを作成する場合は [Qt](/Qt/) または libHaru が必要です．<br>

PLplot をインストールします．<br>
&#x2d;DENABLE_d=ON にするとビルド時にエラーが発生したので，&#x2d;DENABLE_d=OFF としました．<br>
&#x2d;DPLD_pdf=ON にするとビルド時にエラーが発生したので，&#x2d;DPLD_pdf=OFF としました．<br>

```
$ curl -R -L -O http://download.sourceforge.net/plplot/plplot-5.10.0.tar.gz
$ tar xvf plplot-5.10.0.tar.gz
$ cd plplot-5.10.0
$ mkdir build
$ cd build
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DBUILD_SHARED_LIBS=ON -DBUILD_TEST=ON -DENABLE_d=OFF -DPLD_pdf=OFF -DPLD_ps=ON -DPLD_pstex=ON
$ make
$ make install
```

### Linux {#o3b250b6}

#### Arch Linux {#g5b0198c}

- [https://aur.archlinux.org/packages/plplot/](https://aur.archlinux.org/packages/plplot/)

## アンインストール {#s2821338}

### Windows {#j9a86478}

#### MinGW {#d6cfb753}

cmake の Makefile でインストールした場合は，make uninstall が使えないので，アンインストールする場合は，ビルドしたディレクトリで

```
$ sed -e "s/\r$//" install_manifest.txt | sort | uniq | xargs rm
```

を実行します．

## 使い方 {#qd056acb}

### コードサンプル {#p78cac37}

[http://sourceforge.net/p/plplot/code/HEAD/tree/trunk/examples/](http://sourceforge.net/p/plplot/code/HEAD/tree/trunk/examples/)

#### ビルド {#hc1cce0b}

サンプルをビルドしてみます．

```
$ cd /mingw/share/plplot5.10.0/examples/
$ cd c
$ make
```

PLplot でデバイスに出力する場合は wingcc.dll, ps.dll などのドライバ (DLL ファイル) が必要になります．<br>
/mingw/lib/plplot5.10.0/driversd/ にパスを通します．<br>

```
$ export PATH=/mingw/lib/plplot5.10.0/driversd:$PATH
```

サンプルを実行します．<br>

```
$ ./x00c
PLplot library version: 5.10.0

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

サンプルが表示されます．<br>

コマンドライン引数からも指定できます．

```
./x00c -dev wingcc
```

EPS+LaTeX 形式で出力したい場合は Plotting Options に pstex を指定するか，コマンドラインから以下のようにすると x00c.eps と x00c.eps_t が出力されます．

```
./x00c -dev pstex -o x00c.eps
```

以下のようにして使用します．

```
\documentclass{article}
\usepackage[dvips]{graphicx}
\begin{document}
\input{x00c.eps_t}
\end{document}
```

コマンドライン引数の詳細は

```
./x00c -h
```

で確認できます．

### C++11 {#id0ea4f5}

C++11 でも記述できるそうです → [PLplotの使い方](http://d.hatena.ne.jp/ignisan/20110924/p1)<br>
リンク先のコードが PLplot 5.10.0 でコンパイルできなかったので修正してみました．<br>
以下のコードは GCC 4.8.1, PLplot 5.10.0 でビルド，実行できます．<br>

```
$ g++ -std=c++11 x03.cc -o x03 `pkg-config --cflags --libs plplotd-c++`
```

***

```
//
// $ g++ -std=c++11 x03.cc -o x03 `pkg-config --cflags --libs plplotd-c++`
//
#include <vector>
#include <memory>
#include "plstream.h"

class Plots : public plstream {
public:
    explicit Plots(int argc, const char** argv)
    {
        this->parseopts(&argc, argv, PL_PARSE_FULL);
        this->scolbg(255, 255, 255);
        this->scol0(15, 0, 0, 0);
        // this->sdev("aqt");  // AquaTerm
        this->init();
    }

    auto plot(int num,
            const std::vector<double>& ax,
            const std::vector<double>& ay)
            -> void
    {
        this->col0(15);
        this->env(-1.3, 1.3, -0.3, 1.3, 1, 1);
        this->lab("X", "Y", "y=x#u2#d");
        this->col0(1);
        this->width(3);
        this->line(num, &ax[0], &ay[0]);
    }
};

auto main(int argc, const char** argv) -> int
{
    constexpr double x_min = -1.0, x_max = 1.0;
    constexpr int num = 30;
    std::vector<double> ax(num), ay(num);

    for (auto i = 0; i < num; ++i) {
        ax[i] = x_min + (x_max - x_min) / (num - 1.0) * i;
        ay[i] = ax[i] * ax[i];
    }

    auto pls = std::make_shared<Plots>(argc, argv);
    pls->plot(num, ax, ay);

    return 0;
}
```

***
