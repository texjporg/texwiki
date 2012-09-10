---
title: "pdf2htmlEX"
url: "/pdf2htmlEX/"
date: 2012-09-07T17:22:10Z
pukiwiki: "pdf2htmlEX"
---

# pdf2htmlEX

## [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX) {#t74544cf}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## pdf2htmlEX とは {#h92a9ad3}

pdf2htmlEX は PDF ファイルを HTML ファイルに変換するソフトウェアです．

- [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX)
    - [WANG Lu (coolwanglu) - Twitter](http://twitter.com/coolwanglu)

## 不具合 {#q60cf17d}

### pdf2htmlEX version 0.3 で変換した HTML ファイルを Internet Explorer 9 で表示すると表示が崩れる {#x082653d}

pdf2htmlEX version 0.3 で変換した HTML ファイルを Internet Explorer 9 で表示すると表示が崩れます．<br>
Google Chrome や Mozilla Firefox では正しく表示されました．<br>

## インストール {#d5b9a2e9}

C++11 未対応のコンパイラを使用している場合は relaxedcpp11 ブランチを使ってみてください。<br>
relaxedcpp11 ブランチは Boost をインストールしなくてもビルドできるようになりました。<br>

- [pdf2htmlEX at relaxedcpp11](https://github.com/coolwanglu/pdf2htmlEX/tree/relaxedcpp11)

### Windows (MinGW) {#r72743bf}

poppler をインストールします．<br>

[Boost](http://www.boost.org/) をインストールします．

```
$ curl -R -L -O http://download.sourceforge.net/boost/boost_1_51_0.tar.bz2
$ tar jxvf boost_1_51_0.tar.bz2
$ pushd boost_1_51_0
$ cmd
>bootstrap.bat gcc
Building Boost.Build engine
指定されたバッチ ラベルが見つかりません - Test_Option

Bootstrapping is done. To build, run:

    .\b2

To adjust configuration, edit 'project-config.jam'.
Further information:

    - Command line help:
    .\b2 --help

    - Getting started guide:
    http://boost.org/more/getting_started/windows.html

    - Boost.Build documentation:
    http://www.boost.org/boost-build2/doc/html/index.html
```

```
>exit
$ ./b2 --prefix=/mingw toolset=gcc link=static,shared install
$ popd
```

dlopen(), dlclose(), dlsym(), dlerror() 関数が必要な場合は [dlfcn-win32](http://code.google.com/p/dlfcn-win32/) をインストールします．

```
$ curl -R -L -O http://dlfcn-win32.googlecode.com/files/dlfcn-win32-r19.tar.bz2
$ tar jxvf dlfcn-win32-r19.tar.bz2
$ pushd dlfcn-win32-r19
$ ./configure --prefix=/mingw --enable-shared
$ make
$ make install
$ popd
```

[FontForge](https://github.com/fontforge/fontforge) をインストールします．<br>
エラーが発生する場合はビルドできるように修正してインストールします．<br>

```
$ curl -R -L -O http://download.sourceforge.net/fontforge/fontforge_full-20120731-b.tar.bz2
$ tar jxvf fontforge_full-20120731-b.tar.bz2
$ pushd fontforge_full-20120731-b
$ curl -R -L -O http://download.sourceforge.net/freetype/freetype-2.4.10.tar.bz2
$ tar jxvf freetype-2.4.10.tar.bz2
$ ./configure --prefix=/mingw --with-freetype-src=freetype-2.4.10
$ make
$ make install
$ popd
```

[pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX) の最新版をダウンロードしてインストールします．<br>
エラーが発生する場合はビルドできるように修正してインストールします．<br>

```
$ mkdir build
$ cd build
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw
$ make
[  8%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/pdf2htmlEX.cc.obj
[ 16%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/general.cc
.obj
[ 25%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/state.cc.o
bj
[ 33%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/install.cc
.obj
[ 41%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/export.cc.
obj
[ 50%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/text.cc.ob
j
[ 58%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/image.cc.o
bj
[ 66%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/LineBuffer
.cc.obj
[ 75%] Building C object CMakeFiles/pdf2htmlEX.dir/src/ff/ff.c.obj
[ 83%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/BackgroundRenderer.cc.o
bj
[ 91%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/FontPreprocessor.cc.obj

[100%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/Consts.cc.obj
Linking CXX executable pdf2htmlEX.exe
[100%] Built target pdf2htmlEX
```

```
$ make install
[100%] Built target pdf2htmlEX
Install the project...
-- Install configuration: ""
-- Installing: C:/MinGW/bin/pdf2htmlEX.exe
-- Installing: C:/MinGW/share/pdf2htmlEX/all.css
-- Installing: C:/MinGW/share/pdf2htmlEX/head.html
-- Installing: C:/MinGW/share/pdf2htmlEX/neck.html
-- Installing: C:/MinGW/share/pdf2htmlEX/tail.html
-- Installing: C:/MinGW/share/man/man1/pdf2htmlEX.1
```

```
$ pdf2htmlEX
pdftohtmlEX version 0.3
```

pdf2htmlEX はコードを修正すれば Windows でも動作します．

### Linux {#bbc3ecf8}

#### Ubuntu {#z45bd221}

- [ppa:coolwanglu/pdf2htmlex](https://launchpad.net/~coolwanglu/+archive/pdf2htmlex)

#### Arch Linux {#ae9f73e9}

- [AUR (en) - pdf2htmlex-git](https://aur.archlinux.org/packages.php?ID=62426)

#### Gentoo Linux {#d917d3e1}

- [Gentoo Linux での pdf2htmlEX のビルド](http://blogs.yahoo.co.jp/igproj_fusion/16101259.html)

## 関連リンク {#m74160f6}

- [WangLu's Tech Blog](http://coolwanglu.blogspot.com/)
- [pdf2htmlEXの紹介](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=873)
- [150 僕が書いたツール：　pdf2htmlEX](http://lang-8.com/393787/journals/1662451)
- [pdf2htmlEX（Lang-8より転載）](http://blogs.yahoo.co.jp/igproj_fusion/16093260.html)
- [香港のプログラマーの御紹介](http://blogs.yahoo.co.jp/igproj_fusion/16098576.html)
- [Gentoo Linux での pdf2htmlEX のビルド](http://blogs.yahoo.co.jp/igproj_fusion/16101259.html)
- [はてなブックマーク - pdf2htmlEX - TeX Wiki](http://b.hatena.ne.jp/entry/oku.edu.mie-u.ac.jp/~okumura/texwiki/?pdf2htmlEX)
- [pdf2htmlEX – Convert PDF to HTML without losing format](http://ubuntuguide.net/pdf2htmlex-convert-pdf-to-html-without-losing-format)
- [Boostライブラリのビルド方法](https://sites.google.com/site/boostjp/howtobuild)
- [dlfcn-win32](http://code.google.com/p/dlfcn-win32/)
- [MinGW/dllを呼び出す - Ura5han Wiki](http://ura5han.resourcez.org/wiki/MinGW/dll%E3%82%92%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%99)
