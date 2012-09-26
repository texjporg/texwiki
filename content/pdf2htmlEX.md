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
    - [FAQ](https://github.com/coolwanglu/pdf2htmlEX/wiki/FAQ)
- [pdf2htmlEX by coolwanglu](http://coolwanglu.github.com/pdf2htmlEX/)
- [WANG Lu (coolwanglu) - Twitter](http://twitter.com/coolwanglu)

## 不具合 {#q60cf17d}

### pdf2htmlEX version 0.3 で変換した HTML ファイルを Internet Explorer 9 で表示すると表示が崩れる → pdf2htmlEX version 0.4 で修正されました {#x082653d}

pdf2htmlEX version 0.4 で修正されました． →
(参照：[commit a28d9f8a206188ba3a0b7a661f9d6a306e8d1b96](https://github.com/coolwanglu/pdf2htmlEX/commit/a28d9f8a206188ba3a0b7a661f9d6a306e8d1b96))<br>
修正前の pdf2htmlEX version 0.3 で変換した HTML ファイルを Internet Explorer 9 で表示すると表示が崩れます．→ [IE での表示](http://twitter.com/tomoBorderless/status/245510669665984512)<br>

- [IE9以前におけるスタイルシート制限](http://html555.jp/2012/05/08/ie_selector/)
- [CSS スタイルを使用して、web ページが、Internet Explorer で正常に表示されません。](http://support.microsoft.com/kb/262161/ja)
- [A webpage that uses CSS styles does not render correctly in Internet Explorer](http://support.microsoft.com/kb/262161/en-us)

### pdf2htmlEX version 0.4 で変換した HTML ファイルを Windows 版の Mozilla Firefox で表示すると Firefox の動作が極端に遅くなる → pdf2htmlEX version 0.5 で修正されました {#ddfa6a70}

pdf2htmlEX version 0.5 で修正されました． →
(参照：[commit fddff14dc87a192c8efd52949d643bc7760842fc](https://github.com/coolwanglu/pdf2htmlEX/commit/fddff14dc87a192c8efd52949d643bc7760842fc))<br>
修正前の pdf2htmlEX version 0.4 で変換した HTML ファイルを Windows 版の Mozilla Firefox で表示すると Firefox の動作が極端に遅くなる現象が発生します．→ [Windows 版の Firefoxで開くとフリーズ](http://twitter.com/kobachi_dearu/status/245839318202081280)<br>
Windows 版の Mozilla Firefox で [Formulas](http://coolwanglu.github.com/pdf2htmlEX/demo/cheat.html) を表示すると Firefox の動作が極端に遅くなります．<br>
OS X や Linux の Firefox では問題が発生しないようです．<br>

### pdf2htmlEX version 0.4 で変換した HTML ファイルを Windows 版の Google Chrome で拡大しない状態で表示すると細い線 (1−x の − (マイナス) など) が表示されない → pdf2htmlEX version 0.5 で修正されました {#t8c12146}

pdf2htmlEX version 0.5 で修正されました． →
(参照：[cheat.htmlはChromeでもみえるようです](http://twitter.com/coolwanglu/status/249134714722611200))<br>
修正前の pdf2htmlEX version 0.4 で変換した HTML ファイルを Windows 版の Google Chrome で拡大しない状態で表示すると細い線 (1−x の − (マイナス) など) が表示されません．→ [Chromeは細い線が潰れてます](http://twitter.com/tomoBorderless/status/246220536781348865)<br>
Windows 版の Google Chrome で拡大しない状態で [Formulas](http://coolwanglu.github.com/pdf2htmlEX/demo/cheat.html) を表示すると 1−x の − (マイナス) が表示されていないように見えます．<br>
拡大すると表示されます．<br>
Windows 版の Chrome では IE や Firefox とは異なり，アンチエイリアスが効いていないようです． → [Chromeはwindowsでanti-aliasがないようです](http://twitter.com/coolwanglu/status/246220925454934016)

## インストール {#d5b9a2e9}

C++11 未対応のコンパイラを使用している場合は GCC 4.7.0 以降をインストールしてください。<br>
[Dependency](https://github.com/coolwanglu/pdf2htmlEX#dependency) によると GCC 4.4.6 以上でビルド可能なようです．<br>

### Windows {#r72743bf}

#### MinGW {#d9c5cb24}

poppler - TeX Wiki を参照して poppler をインストールします．(pdf2htmlEX をビルドする場合 poppler は configure で Makefile を作成してインストールしてください)<br>

<!-- [[Boost:http://www.boost.org/]] をインストールします． -->
<!-- $ curl -R -L -O http://download.sourceforge.net/boost/boost_1_51_0.tar.bz2 -->
<!-- $ tar xvf boost_1_51_0.tar.bz2 -->
<!-- $ pushd boost_1_51_0 -->
<!-- $ cmd -->
<!-- >bootstrap.bat gcc -->
<!-- Building Boost.Build engine -->
<!-- 指定されたバッチ ラベルが見つかりません - Test_Option -->
<!--  -->
<!-- Bootstrapping is done. To build, run: -->
<!--  -->
<!--     .\b2 -->
<!--  -->
<!-- To adjust configuration, edit 'project-config.jam'. -->
<!-- Further information: -->
<!--  -->
<!--     - Command line help: -->
<!--     .\b2 - -help -->
<!--  -->
<!--     - Getting started guide: -->
<!--     http://boost.org/more/getting_started/windows.html -->
<!--  -->
<!--     - Boost.Build documentation: -->
<!--     http://www.boost.org/boost-build2/doc/html/index.html -->
<!--  -->
<!-- >exit -->
<!-- $ ./b2 - -prefix=/mingw toolset=gcc link=static,shared install -->
<!-- $ popd -->

dlopen(), dlclose(), dlsym(), dlerror() 関数が必要な場合は [dlfcn-win32](http://code.google.com/p/dlfcn-win32/) をインストールします．<br>
FontForge はこれらの関数を使用しているようです．<br>

```
$ curl -R -L -O http://dlfcn-win32.googlecode.com/files/dlfcn-win32-r19.tar.bz2
$ tar xvf dlfcn-win32-r19.tar.bz2
$ pushd dlfcn-win32-r19
$ ./configure --prefix=/mingw --enable-shared
$ make
$ make install
$ popd
```

[libspiro](http://libspiro.sourceforge.net/) をインストールします．<br>

```
$ curl -R -L -O http://download.sourceforge.net/libspiro/libspiro_src-20071029.tar.bz2
$ tar xvf libspiro_src-20071029.tar.bz2
$ pushd libspiro-20071029
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

<!-- [[getopt:http://software.frodo.looijaard.name/getopt/]] をインストールします．~ -->
<!-- $ curl -R -L -O http://software.frodo.looijaard.name/getopt/files/getopt-1.1.5.tar.gz -->
<!-- $ tar xvf getopt-1.1.5.tar.gz -->
<!-- $ pushd getopt-1.1.5 -->
<!--  -->
<!-- Makefile の -->
<!-- prefix=/usr/local -->
<!-- を -->
<!-- prefix=/mingw -->
<!-- に変更します．~ -->
<!--  -->
<!-- Makefile に -->
<!-- LDLIBS=-lintl -->
<!-- を追加します．~ -->
<!--  -->
<!-- Makefile の getopt: を -->
<!-- getopt: $(objects) -->
<!-- #       $(CC) $(LDFLAGS) -o $@ $(objects) -->
<!--         $(CC) $(LDFLAGS) -o $@ $(objects) $(LDLIBS) -->
<!-- に修正します．~ -->
<!--  -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

<!-- [[xmlto:http://cyberelk.net/tim/software/xmlto/]] をインストールします．~ -->
<!-- $ curl - -insecure -R -L -O https://fedorahosted.org/releases/x/m/xmlto/xmlto-0.0.25.tar.bz2 -->
<!-- $ tar xvf xmlto-0.0.25.tar.bz2 -->
<!-- $ pushd xmlto-0.0.25 -->
<!-- $ ./configure - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

<!-- [[GIFLIB:http://giflib.sourceforge.net/]] をインストールします．~ -->
<!-- $ curl -R -L -O http://download.sourceforge.net/giflib/giflib-5.0.0.tar.bz2 -->
<!-- $ tar xvf giflib-5.0.0.tar.bz2 -->
<!-- $ pushd giflib-5.0.0 -->
<!-- $ ./configure - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

[LibUnicodeNames](https://github.com/chemoelectric/libunicodenames) をインストールします．<br>

```
$ curl --insecure -R -L -O https://github.com/downloads/chemoelectric/libunicodenames/libunicodenames-1.0.0_beta4.tar.xz
$ tar xvf libunicodenames-1.0.0_beta4.tar.xz
$ pushd libunicodenames-1.0.0_beta4
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

[FontForge](https://github.com/fontforge/fontforge) をインストールします．<br> <!-- エラーが発生する場合はビルドできるように修正してインストールします．→ [[2012-09-12 - にっき♪:http://d.hatena.ne.jp/abenori/20120912]]~ --> <!-- -FontForge 20120731-b をインストールする場合 --> <!--  --> <!-- $ curl -R -L -O http://download.sourceforge.net/fontforge/fontforge_full-20120731-b.tar.bz2 --> <!-- $ tar xvf fontforge_full-20120731-b.tar.bz2 --> <!-- $ pushd fontforge-20120731-b --> <!-- $ curl -R -L -O http://download.sourceforge.net/freetype/freetype-2.4.10.tar.bz2 --> <!-- $ tar xvf freetype-2.4.10.tar.bz2 --> <!-- $ ./configure - -prefix=/mingw - -with-freetype-src=freetype-2.4.10 --> <!-- $ make --> <!-- $ make install --> <!-- $ popd --> <!--  --> <!-- -FontForge 最新版をインストールする場合 -->

```
$ curl --insecure -R -L -o fontforge-fontforge.tar.gz https://github.com/fontforge/fontforge/tarball/master
$ tar xvf fontforge-fontforge.tar.gz
$ pushd fontforge-fontforge*
$ ./autogen.sh
Preparing the fontforge build system...please wait

Found GNU Autoconf version 2.68
Found GNU Automake version 1.12.4
Found GNU Libtool version 2.4

Automatically preparing build ... done

The fontforge build system is now prepared.  To build here, run:
  ./configure
  make
$ ./configure --prefix=/mingw
```

```
Summary of optional features:

  real (floating pt) double
  programs           yes
  native scripting   yes
  python scripting   yes
  python extension   yes
  freetype debugger  no
  capslock for alt   no
  raw points mode    no
  tile path          no
  gb12345 encoding   no

Summary of optional dependencies:

  cairo              yes        http://www.cairographics.org/
  freetype           yes        http://www.freetype.org/
  giflib             no         http://giflib.sourceforge.net/
  libjpeg            yes        http://en.wikipedia.org/wiki/Libjpeg
  libpng             yes        http://www.libpng.org/
  libtiff            yes        http://en.wikipedia.org/wiki/Libtiff
  libxml             yes        http://www.xmlsoft.org/
  libspiro           yes        http://libspiro.sourceforge.net/
  libunicodenames    yes        https://github.com/chemoelectric/libunicodenames

  X Window System    no
```

```
$ make
```

```
noprefs.c:451:2: error: implicit declaration of function 'GetModuleFileNameA' [-
Werror=implicit-function-declaration]
noprefs.c:679:5: error: implicit declaration of function 'srandom' [-Werror=impl
icit-function-declaration]
noprefs.c:680:5: error: implicit declaration of function 'random' [-Werror=impli
cit-function-declaration]
```

のエラーが発生する場合は

```
#if defined(_WIN32)
#include <windows.h>
#define srandom srand
#define random rand
#endif
```

を追加します．

```
$ make install
```

make install でエラーになる場合は pyhook/Makefile を

```
#pyexecdir = ${exec_prefix}\Lib\site-packages
#pythondir = ${prefix}\Lib\site-packages
pyexecdir = C:/Python27/Lib/site-packages
pythondir = C:/Python27/Lib/site-packages
```

に修正します．

```
$ popd
```

[ttfautohint](http://www.freetype.org/ttfautohint/) をインストールします．<br>

```
$ curl -R -L -O http://download.sourceforge.net/freetype/ttfautohint-0.92.tar.gz
$ tar xvf ttfautohint-0.92.tar.gz
$ pushd ttfautohint-0.92
$ ./configure --prefix=/mingw
$ make
```

```
../libtool: line 6013: cd: ./lib: No such file or directory
libtool: link: cannot determine absolute directory name of `./lib'
```

のエラーが発生する場合は ttfautohint-0.92/frontend/Makefile の中身を

```
#QT_LIBS = -L'./lib' -L'c:/Qt/4.8.3/lib' -lmingw32 -lqtmain -lQtGui4 -lQtCore4
QT_LIBS = -L'c:/Qt/4.8.3/lib' -lmingw32 -lqtmain -lQtGui4 -lQtCore4
```

に修正します．

```
$ make install
$ popd
```

<!-- -http://svn.r-project.org/R/trunk/src/main/datetime.c -->
<!-- -http://svn.r-project.org/R/trunk/src/main/mkdtemp.c -->
<!-- mkdtemp は MinGW でエラー -->
<!-- auto p = mkdtemp(buf); -->
<!-- _mktemp は MinGW でも OK -->
<!-- auto p = _mktemp(buf); -->

[pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX) をインストールします．<br> <!-- エラーが発生する場合はビルドできるように修正してインストールします．→ [[2012-09-12 - にっき♪:http://d.hatena.ne.jp/abenori/20120912]]~ -->

```
$ curl --insecure -R -L -o coolwanglu-pdf2htmlEX.tar.gz https://github.com/coolwanglu/pdf2htmlEX/tarball/master
$ tar xvf coolwanglu-pdf2htmlEX.tar.gz
$ cd coolwanglu-pdf2htmlEX*
```

src/pdf2htmlEX.cc に

<!-- #if defined(_WIN32) && ! defined(_MSC_VER) -->

```
#if defined(_WIN32)
char *mkdtemp(char *buf){
  srand((unsigned)time(0));
  int a = (int)((rand() / ((double)RAND_MAX+1.0)) * 1e6);
  ::GetTempPath(MAX_PATH,buf);
  sprintf(buf, "%s%s%d", buf, "pdf2htmlEX-", a);
  ::CreateDirectory(buf,NULL);
  return buf;
}
#endif
```

を追加します．

src/util.cc に

<!-- #if defined(_WIN32) && ! defined(_MSC_VER) -->

```
#if defined(_WIN32)
int mkdir(const char *dir,mode_t mode){
  if(::GetFileAttributes(dir) == FILE_ATTRIBUTE_DIRECTORY)return 0;
  return ::CreateDirectory(dir,NULL) ? 0 : 1;
}
#endif
```

を追加します．

src/ffw.c に

<!-- #if defined(_WIN32) && ! defined(_MSC_VER) -->

```
#if defined(_WIN32)
#undef printf
#undef vfprintf
#endif
```

を追加します．

```
$ mkdir build
$ cd build
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw
-- The C compiler identification is GNU 4.7.0
-- The CXX compiler identification is GNU 4.7.0
-- Check for working C compiler: C:/MinGW/bin/gcc.exe
-- Check for working C compiler: C:/MinGW/bin/gcc.exe -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working CXX compiler: C:/MinGW/bin/g++.exe
-- Check for working CXX compiler: C:/MinGW/bin/g++.exe -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Found PkgConfig: C:/MinGW/bin/pkg-config.exe (found version "0.27.1")
-- checking for module 'poppler>=0.20.0'
--   found poppler, version 0.21.0
-- checking for module 'libfontforge>=2.0.0'
--   found libfontforge, version 2.0.0
Found config.h: C:/MinGW/include/fontforge/config.h
-- Configuring done
-- Generating done
-- Build files have been written to: C:/coolwanglu-pdf2htmlEX-???????/build
```

```
$ make
[  7%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/pdf2htmlEX.cc.obj
[ 15%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/general.cc
.obj
[ 23%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/state.cc.o
bj
[ 30%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/install.cc
.obj
[ 38%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/export.cc.
obj
[ 46%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/text.cc.ob
j
[ 53%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/image.cc.o
bj
[ 61%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/LineBuffer
.cc.obj
[ 69%] Building C object CMakeFiles/pdf2htmlEX.dir/src/ffw.c.obj
[ 76%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/BackgroundRenderer.cc.o
bj
[ 84%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/FontPreprocessor.cc.obj

[ 92%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/util.cc.obj
[100%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/ArgParser.cc.obj
Linking CXX executable pdf2htmlEX.exe
[100%] Built target pdf2htmlEX
```

```
$ make install
[100%] Built target pdf2htmlEX
Install the project...
-- Install configuration: ""
-- Installing: C:/MinGW/bin/pdf2htmlEX.exe
-- Installing: C:/MinGW/share/pdf2htmlEX/base.css
-- Installing: C:/MinGW/share/pdf2htmlEX/jquery.js
-- Installing: C:/MinGW/share/pdf2htmlEX/pdf2htmlEX.js
-- Installing: C:/MinGW/share/pdf2htmlEX/manifest
-- Installing: C:/MinGW/share/man/man1/pdf2htmlEX.1
```

```
$ pdf2htmlEX --help
pdftohtmlEX version 0.5
```

pdf2htmlEX はコードを適切に修正すれば Windows でも動作します．

#### Cygwin {#wf50eda2}

Cygwin では問題なく動作するようです．<br>

### OS X {#u6860a4e}

- [Build gcc 4.7.1 on Mac OS X Lion](http://henry.animeo.jp/wp/?p=1695)
- [Compiling gcc-4.7.1 on Mac OSX Lion](http://solarianprogrammer.com/2012/07/21/compiling-gcc-4-7-1-mac-osx-lion/)
- [sol-prog/gcc-4.7-binary · GitHub](https://github.com/sol-prog/gcc-4.7-binary)
- [homebrew/Library/Formula/pdf2htmlex.rb at pdf2htmlex · jamiely/homebrew · GitHub](https://github.com/jamiely/homebrew/blob/pdf2htmlex/Library/Formula/pdf2htmlex.rb)
- [Pdf2htmlex.rb](https://gist.github.com/3758157)
- [pdf2htmlex brew formula rough draft](https://gist.github.com/3758431)
- [#36028 (pdf2htmlEX port) – MacPorts](https://trac.macports.org/ticket/36028)

### Linux {#bbc3ecf8}

#### Ubuntu {#z45bd221}

- [ppa:coolwanglu/pdf2htmlex](https://launchpad.net/~coolwanglu/+archive/pdf2htmlex)

```
$ sudo apt-add-repository ppa:coolwanglu/pdf2htmlex
$ sudo apt-get update
$ sudo apt-get install pdf2htmlex
```

#### Arch Linux {#ae9f73e9}

- [AUR (en) - pdf2htmlex-git](https://aur.archlinux.org/packages.php?ID=62426)

#### Gentoo Linux {#d917d3e1}

- [Gentoo Linux での pdf2htmlEX のビルド](http://blogs.yahoo.co.jp/igproj_fusion/16101259.html)

#### CentOS {#q04cd947}

CentOS 6.3 でもビルドできるようです．→ [pdf2htmlEXのrelaxedcpp11ブランチがBoostなしでbuildできるようになった。](http://twitter.com/h_okumura/status/245305278906638336)

<!-- ↑あれ，これは私のツイートですね。私はCentOS 6.3でbuildしました。 -->
<!--  -->
<!-- ↑うっかり OS X とはやとちりしてしまいました． -->
<!-- 返信どうもありがとうございました． -->

## 使い方 {#cc3ae41e}

Usage: pdf2htmlEX \[Options\] &lt;input.pdf> \[&lt;output.html>\]

## 関連リンク {#m74160f6}

- [WangLu's Tech Blog](http://coolwanglu.blogspot.com/)
- [pdf2htmlEXの紹介](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=873)
- [巫璐赛](http://lang-8.com/393787)
    - [150 僕が書いたツール：　pdf2htmlEX](http://lang-8.com/393787/journals/1662451)
    - [152 デモストレーション](http://lang-8.com/393787/journals/1665803/)
    - [154 リンク](http://lang-8.com/393787/journals/1669233)
    - [155 促進する](http://lang-8.com/393787/journals/1670992/)
- [pdf2htmlEX（Lang-8より転載）](http://blogs.yahoo.co.jp/igproj_fusion/16093260.html)
- [香港のプログラマーの御紹介](http://blogs.yahoo.co.jp/igproj_fusion/16098576.html)
- [Gentoo Linux での pdf2htmlEX のビルド](http://blogs.yahoo.co.jp/igproj_fusion/16101259.html)
- [「pdf2htmlEX」の検索結果一覧 - にっき♪](http://d.hatena.ne.jp/abenori/archive?word=pdf2htmlEX)
- [はてなブックマーク - pdf2htmlEX - TeX Wiki](http://b.hatena.ne.jp/entry/oku.edu.mie-u.ac.jp/~okumura/texwiki/?pdf2htmlEX)
- [Pdf2htmlEX: A PDF to HTML converter | Hacker News](http://news.ycombinator.com/item?id=4528797)
- [pdf2htmlEX – Convert PDF to HTML without losing format](http://ubuntuguide.net/pdf2htmlex-convert-pdf-to-html-without-losing-format)
    <!-- -[[Boostライブラリのビルド方法:https://sites.google.com/site/boostjp/howtobuild]] -->

- [dlfcn-win32](http://code.google.com/p/dlfcn-win32/)
- [MinGW/dllを呼び出す - Ura5han Wiki](http://ura5han.resourcez.org/wiki/MinGW/dll%E3%82%92%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%99)
