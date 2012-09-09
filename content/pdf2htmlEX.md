---
title: "pdf2htmlEX"
url: "/pdf2htmlEX/"
date: 2012-09-07T17:22:10Z
pukiwiki: "pdf2htmlEX"
---

# pdf2htmlEX

## [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX) {#t74544cf}

### pdf2htmlEX とは {#h92a9ad3}

pdf2htmlEX は PDF ファイルを HTML ファイルに変換するソフトウェアです．

- [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX)
    <!-- -[[WangLu's Tech Blog:http://coolwanglu.blogspot.com/]] -->

### インストール {#d5b9a2e9}

#### Windows (MinGW) {#r72743bf}

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
$ make install
$ popd
```

[FontForge](http://fontforge.org/) をインストールします．<br>
エラーが発生する場合は修正してビルドします．<br>

```
$ curl -R -L -O http://download.sourceforge.net/fontforge/fontforge_full-20120731-b.tar.bz2
$ tar fontforge_full-20120731-b
$ pushd fontforge_full-20120731-b
$ curl -R -L -O http://download.sourceforge.net/freetype/freetype-2.4.10.tar.bz2
$ tar jxvf freetype-2.4.10.tar.bz2
$ ./configure --prefix=/mingw --with-freetype-src=freetype-2.4.10
$ make install
$ popd
```

[pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX) の最新版をダウンロードしてインストールします．<br>
エラーが発生する場合は修正してビルドします．<br>

```
$ mkdir build
$ cd build
$ cmake .. -G "MSYS Makefiles"
$ ./pdf2htmlEX
```

#### Linux {#bbc3ecf8}

[Gentoo Linux での pdf2htmlEX のビルド](http://blogs.yahoo.co.jp/igproj_fusion/16101259.html) を参照．

### 関連リンク {#m74160f6}

- [pdf2htmlEXの紹介](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=873)
- [150 僕が書いたツール：　pdf2htmlEX](http://lang-8.com/393787/journals/1662451)
- [pdf2htmlEX（Lang-8より転載）](http://blogs.yahoo.co.jp/igproj_fusion/16093260.html)
- [香港のプログラマーの御紹介](http://blogs.yahoo.co.jp/igproj_fusion/16098576.html)
- [Gentoo Linux での pdf2htmlEX のビルド](http://blogs.yahoo.co.jp/igproj_fusion/16101259.html)
- [ppa:coolwanglu/pdf2htmlex](https://launchpad.net/~coolwanglu/+archive/pdf2htmlex)
- [pdf2htmlEX – Convert PDF to HTML without losing format](http://ubuntuguide.net/pdf2htmlex-convert-pdf-to-html-without-losing-format)
- [Boostライブラリのビルド方法](https://sites.google.com/site/boostjp/howtobuild)
- [dlfcn-win32](http://code.google.com/p/dlfcn-win32/)
- [MinGW/dllを呼び出す - Ura5han Wiki](http://ura5han.resourcez.org/wiki/MinGW/dll%E3%82%92%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%99)
