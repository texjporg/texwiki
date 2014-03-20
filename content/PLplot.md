---
title: "PLplot"
url: "/PLplot/"
date: 2011-09-28T18:40:02Z
pukiwiki: "PLplot"
---

# PLplot

## [PLplot](http://plplot.sourceforge.net/) {#tc328e7c}

## Summary {#r3877799}

PLplot は，グラフを作成するためのライブラリです．<br>
PDF, EPS, PS, EPS+LaTeX, SVG 形式などに出力可能です．<br>

- [PLplot Home Page - Main](http://plplot.sourceforge.net/)

### System requirements {#dd55c850}

Windows, OS X, Linux

### License {#z821faef}

LGPL

### ChangeLog {#v32a5d09}

[http://sourceforge.net/p/plplot/code/HEAD/log/](http://sourceforge.net/p/plplot/code/HEAD/log/)

### Language Bindings {#eabaaf6a}

[http://sourceforge.net/p/plplot/code/HEAD/tree/trunk/bindings/](http://sourceforge.net/p/plplot/code/HEAD/tree/trunk/bindings/)

### Related links {#s690b648}

- [http://www.miscdebris.net/plplot_wiki/](http://www.miscdebris.net/plplot_wiki/)
- [https://sites.google.com/site/makeplplot/](https://sites.google.com/site/makeplplot/)
- [PLplot でコマンドライン引数にデータファイルを指定する方法](http://krustf.hateblo.jp/entry/20130310/1362920130)
- [Momma's Wiki: PLplot - プロットライブラリ http://plplot.sourceforge.net/](http://www.eml.ele.cst.nihon-u.ac.jp/~momma/wiki/wiki.cgi/PLplot.html)
- [グラフ描画ライブラリ"PLplot"のインストール](http://d.hatena.ne.jp/A7M/20080125/1201242751)

## Installation {#x8c634ec}

### CMake options {#n5595ff6}

- [CMake options for PLplot - PLplotWiki](http://www.miscdebris.net/plplot_wiki/index.php?title=CMake_options_for_PLplot)

### Windows {#z2e8dabc}

#### MinGW {#h997502f}

- [Configure PLplot for MinGW/CLI](http://www.miscdebris.net/plplot_wiki/index.php?title=Configure_PLplot_for_MinGW/CLI)

[Poppler](/Poppler/) を参考にして MinGW, CMake, pkg-config 等をインストールします．

PLplot で PDF ファイルを出力する場合は [Qt](/Qt/) または cairo または libHaru が必要です．<br>

PLplot をインストールします．<br>
&#x2d;DENABLE_d=ON にするとビルド時にエラーが発生したので，&#x2d;DENABLE_d=OFF としました．<br>
&#x2d;DPLD_pdf=ON にするとビルド時にエラーが発生したので，&#x2d;DPLD_pdf=OFF としました．<br>

```
$ curl -R -L -O http://download.sourceforge.net/plplot/plplot-5.10.0.tar.gz
$ tar xvf plplot-5.10.0.tar.gz
$ cd plplot-5.10.0
$ mkdir build
$ cd build
```

<!-- $ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DBUILD_SHARED_LIBS=ON -DBUILD_TEST=ON -DENABLE_d=OFF -DPLD_pdf=OFF -DPLD_ps=ON -DPLD_pstex=ON -DPLD_pdfcairo=ON -DPLD_pscairo=ON -DPLD_svgcairo=ON -DPLD_pngcairo=ON -->

```
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DBUILD_SHARED_LIBS=ON -DBUILD_TEST=ON -DENABLE_d=OFF -DPLD_pdf=OFF -DPLD_ps=ON -DPLD_pstex=ON
$ make
$ make install
```

### Linux {#o3b250b6}

#### Arch Linux {#g5b0198c}

- [https://aur.archlinux.org/packages/plplot/](https://aur.archlinux.org/packages/plplot/)

## Uninstallation {#s2821338}

### Windows {#j9a86478}

#### MinGW {#d6cfb753}

cmake の Makefile でインストールした場合は，make uninstall が使えないので，アンインストールする場合は，ビルドしたディレクトリで

```
$ sed -e "s/\r$//" install_manifest.txt | sort | uniq | xargs rm
```

を実行します．

## Usage {#qd056acb}

### Code samples {#p78cac37}

- [http://plplot.sourceforge.net/examples.php](http://plplot.sourceforge.net/examples.php)
- [http://sourceforge.net/p/plplot/code/HEAD/tree/trunk/examples/](http://sourceforge.net/p/plplot/code/HEAD/tree/trunk/examples/)

#### Build on MinGW {#hc1cce0b}

サンプルをビルドします．

```
$ cd /mingw/share/plplot5.10.0/examples/c
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
 < 8> psttf      PostScript File (monochrome)
 < 9> psttfc     PostScript File (color)
 <10> svg        Scalable Vector Graphics (SVG 1.1)
 <11> pdf        Portable Document Format PDF
 <12> bmpqt      Qt Windows bitmap driver
 <13> jpgqt      Qt jpg driver
 <14> pngqt      Qt png driver
 <15> ppmqt      Qt ppm driver
 <16> tiffqt     Qt tiff driver
 <17> svgqt      Qt SVG driver
 <18> qtwidget   Qt Widget
 <19> epsqt      Qt EPS driver
 <20> pdfqt      Qt PDF driver
 <21> extqt      External Qt driver
 <22> memqt      Memory Qt driver
 <23> pdfcairo   Cairo PDF Driver
 <24> pscairo    Cairo PS Driver
 <25> epscairo   Cairo EPS Driver
 <26> svgcairo   Cairo SVG Driver
 <27> pngcairo   Cairo PNG Driver
 <28> memcairo   Cairo Memory Driver
 <29> extcairo   Cairo External Context Driver
 <30> wincairo   Cairo Microscoft Windows Driver
```

```
Enter device number or keyword (stream 1): 1
```

デバイス番号またはキーワードを入力して Enter を入力すると指定したデバイスに結果が出力されます．<br>

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
リンク先のコードは PLplot 5.10.0 でコンパイルできませんでした．<br>
以下のコードはリンク先のコードを修正したもので<br>
GCC 4.8.1, PLplot 5.10.0 でビルド，実行できます．<br>

```
$ g++ -std=c++11 x03c++11oldfix.cc -o x03c++11oldfix `pkg-config --cflags --libs plplotd-c++`
```

***

```
//
// $ g++ -std=c++11 x03c++11oldfix.cc -o x03c++11oldfix `pkg-config --cflags --libs plplotd-c++`
//
#include <array>
#include <memory>
#include <cstddef>
#include <plstream.h>

using value_type = double;

class Plots : public plstream {
public:
    explicit Plots( int argc, const char** argv )
    {
        this->parseopts( &argc, argv, PL_PARSE_FULL | PL_PARSE_SKIP );
        this->scolbg( 255, 255, 255 );
        this->scol0( 15, 0, 0, 0 );
        this->init();
    }

    template < template < typename U, std::size_t N > class T, typename U, std::size_t N >
    auto plot(std::size_t num,
            T< U, N > const & ax,
            T< U, N > const & ay)
            -> void
    {
        this->col0( 15 );
        this->env( -1.3, 1.3, -0.3, 1.3, 1, 1 );
        this->lab( "X", "Y", "y=x#u2#d" );
        this->col0( 1 );
        this->width( 3 );
        this->line( num, ax.data(), ay.data() );
    }
};

auto main( int argc, const char** argv ) -> int
{
    constexpr value_type x_min = -1.0, x_max = 1.0;
    constexpr std::size_t num = 30;
    std::array< value_type, num > ax, ay;

    for ( auto i = 0; i < num; ++i ) {
        ax[i] = x_min + ( x_max - x_min ) / ( static_cast< value_type >( num ) - 1.0 ) * i;
        ay[i] = ax[i] * ax[i];
    }

    auto pls = std::make_shared< Plots >( argc, argv );
    pls->plot( num, ax, ay );
}
```

***

以下のコードは PLplot 5.10.0 の x03.cc を C++11 で記述したもので<br>
GCC 4.8.1, PLplot 5.10.0 でビルド，実行できます．<br>

```
$ g++ -std=c++11 x03c++11.cc -o x03c++11 `pkg-config --cflags --libs plplotd-c++`
```

***

```
//
// $ g++ -std=c++11 x03c++11.cc -o x03c++11 `pkg-config --cflags --libs plplotd-c++`
//
#include <array>
#include <memory>
#include <cmath>
#include <cstdio>
#include <plstream.h>

class Polor : public plstream
{
public:
    explicit Polor( int, const char ** );
    auto plot() -> void;
};

Polor::Polor( int argc, const char ** argv )
{
    // Parse and process command line arguments.
    this->parseopts( &argc, argv, PL_PARSE_FULL | PL_PARSE_SKIP );

    // Set orientation to portrait - note not all device drivers
    // support this, in particular most interactive drivers do not.
    this->sori( 1 );

    // Initialize PLplot.
    this->init();
}

auto Polor::plot() -> void
{
    constexpr int degree = 360;
    constexpr int max_degree = degree + 1;
    constexpr double pi = 4.0 * atan( 1.0 );
    constexpr PLFLT dtr = pi / 180.0;

    // Set up viewport and window, but do not draw box.
    this->env( -1.3, 1.3, -1.3, 1.3, 1, -2 );

    // Draw circles for polar grid
    for ( auto i = 1; i <= 10; ++i ) {
        this->arc( 0.0, 0.0, 0.1 * i, 0.1 * i, 0.0, static_cast< double >( degree ), 0.0, 0 );
    }

    this->col0( 2 );

    auto text = std::array< char, 4 >{ "" };
    PLFLT theta, dx, dy, offset;

    for ( auto i = 0; i <= 11; ++i ) {
        theta = 30.0 * i;
        dx    = std::cos( dtr * theta );
        dy    = std::sin( dtr * theta );

        // Draw radial spokes for polar grid.
        this->join( 0.0, 0.0, dx, dy );
        std::sprintf( text.data(), "%d", static_cast< int >( std::round( theta ) ) );

        // Write labels for angle.

        if ( theta < 9.99 ) {
            offset = 0.45;
        }
        else if ( theta < 99.9 ) {
            offset = 0.30;
        }
        else {
            offset = 0.15;
        }

        // Slightly off zero to avoid floating point logic flips at 90 and 270 deg.
        if ( dx >= -0.00001 ) {
            this->ptex( dx, dy, dx, dy, -offset, text.data() );
        }
        else {
            this->ptex( dx, dy, -dx, -dy, 1. + offset, text.data() );
        }
    }

    // Draw the graph.
    auto x0 = std::array< PLFLT, max_degree >{};
    auto y0 = std::array< PLFLT, max_degree >{};

    for ( auto i = 0; i <= degree; ++i ) {
        x0[i] = std::cos( dtr * i );
        y0[i] = std::sin( dtr * i );
    }

    PLFLT r;
    auto x = std::array< PLFLT, max_degree >{};
    auto y = std::array< PLFLT, max_degree >{};

    for ( auto i = 0; i <= degree; ++i ) {
        r    = std::sin( dtr * ( 5 * i ) );
        x[i] = x0[i] * r;
        y[i] = y0[i] * r;
    }

    this->col0( 3 );
    this->line( max_degree, x.data(), y.data() );

    this->col0( 4 );
    this->mtex( "t", 2.0, 0.5, 0.5, "#frPLplot Example 3 - r(#gh)=sin 5#gh" );
}

auto main( int argc, const char ** argv ) -> int
{
    auto pls = std::make_shared< Polor >( argc, argv );
    pls->plot();
}
```

***
