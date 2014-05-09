---
title: "pdf2htmlEX"
url: "/pdf2htmlEX/"
date: 2012-09-07T17:22:10Z
pukiwiki: "pdf2htmlEX"
---

# pdf2htmlEX

## [pdf2htmlEX](http://coolwanglu.github.com/pdf2htmlEX/) {#t74544cf}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## pdf2htmlEX とは {#h92a9ad3}

pdf2htmlEX は PDF ファイルを HTML ファイルに変換するソフトウェアです．

- [pdf2htmlEX by coolwanglu](http://coolwanglu.github.com/pdf2htmlEX/)
- [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX)
    - [FAQ](https://github.com/coolwanglu/pdf2htmlEX/wiki/FAQ)
- [WANG Lu (coolwanglu) - Twitter](https://twitter.com/coolwanglu)
    - 日本語で返信していただいてもかまいません。

<!-- *注意点 [#j715c0ef] -->
<!-- **pdf2htmlEX version 0.6 で - -auto-hint 1 オプションを指定しないで変換した HTML ファイルを Windows 版の Google Chrome で表示すると拡大/縮小の値によって細い線 (1−x の − (マイナス) など) が表示されたりされなかったりする → - -auto-hint 1 オプションを指定する [#t8c12146] -->
<!--  -->
<!-- pdf2htmlEX version 0.6 で - -auto-hint 1 オプションを指定しないで変換した HTML ファイルを Windows 版の Google Chrome で表示すると拡大/縮小の値によって細い線 (1−x の − (マイナス) など) が表示されたりされなかったりします．~ -->
<!-- Windows 版の Google Chrome で [[Formulas:http://coolwanglu.github.com/pdf2htmlEX/demo/cheat.html]] の元になった cheat.pdf を - -auto-hint 1 オプション指定なしで -->
<!--  -->
<!-- $ pdf2htmlEX - -zoom 2 cheat.pdf -->
<!--  -->
<!-- として変換して表示すると -->
<!--  -->
<!-- 拡大/縮小 90% → 1−x の − (マイナス) が表示される~ -->
<!-- 拡大/縮小 100% → 1−x の − (マイナス) が表示されない~ -->
<!-- 拡大/縮小 110% → 1−x の − (マイナス) が表示される~ -->
<!--  -->
<!-- といった現象が発生します．~ -->
<!-- オプション指定で - -auto-hint 1 を指定すると表示できるようになりました -->
<!--  -->
<!-- $ pdf2htmlEX - -auto-hint 1 - -zoom 2 cheat.pdf -->
<!--  -->
<!-- Windows 版の Chrome では IE や Firefox とは異なり，アンチエイリアスが効いていないようです． → [[Chromeはwindowsでanti-aliasがないようです:https://twitter.com/coolwanglu/status/246220925454934016]] -->

## 不具合 {#q60cf17d}

- [https://github.com/coolwanglu/pdf2htmlEX/issues](https://github.com/coolwanglu/pdf2htmlEX/issues)

## インストール {#d5b9a2e9}

see [https://github.com/coolwanglu/pdf2htmlEX/wiki/Building](https://github.com/coolwanglu/pdf2htmlEX/wiki/Building)

### Windows {#r72743bf}

#### [MXE (M cross environment)](http://mxe.cc/) {#tecb65f1}

[pdf2htmlEX Windows Version](http://soft.rubypdf.com/software/pdf2htmlex-windows-version)

#### MinGW {#d9c5cb24}

[Poppler - TeX Wiki](/Poppler/) を参照して Poppler をインストールします．(pdf2htmlEX をビルドする場合 Poppler は configure で Makefile を作成してインストールしてください)<br>

<!-- [[Python]] 2.7.6 Windows x86 MSI Installer をダウンロードしてインストールします．~ -->
<!-- [[mingw-and-ndk:https://code.google.com/p/mingw-and-ndk/]] のページから [[Python]] の MinGW バイナリ ([[python-mingw.7z:https://code.google.com/p/mingw-and-ndk/downloads/detail?name=python-mingw.7z]]) をダウンロードしてインストールします．~ -->
<!--  -->
<!-- [[7-Zip:http://sevenzip.sourceforge.jp/]] で展開して中身のフォルダーを C:\MinGW に上書きします．~ -->
<!--  -->
<!-- mingw-utils をインストールします．~ -->
<!--  -->
<!-- $ mingw-get install mingw-utils -->
<!--  -->
<!-- MinGW Shell (MSYS) で Python を必要とするモジュールがビルドできるように準備します．~ -->
<!--  -->
<!-- 32-bit Windows の場合 -->
<!--  -->
<!-- $ pexports /c/Windows/System32/python27.dll > python27.def -->
<!-- $ dlltool -D /c/Windows/System32/python27.dll -d python27.def -l /mingw/lib/libpython27.a -->
<!-- C:\MinGW\bin\dlltool.exe: Path components stripped from dllname, 'c:/Windows/System32/python27.dll'. -->
<!-- $ rm python27.def -->
<!--  -->
<!-- 64-bit Windows の場合 -->
<!--  -->
<!-- $ pexports /c/Windows/SysWOW64/python27.dll > python27.def -->
<!-- $ dlltool -D /c/Windows/SysWOW64/python27.dll -d python27.def -l /mingw/lib/libpython27.a -->
<!-- C:\MinGW\bin\dlltool.exe: Path components stripped from dllname, 'c:/Windows/SysWOW64/python27.dll'. -->
<!-- $ rm python27.def -->
<!--  -->
<!-- - --  -->
<!-- -C:/MinGW/lib/pkgconfig/python.pc -->
<!-- -C:/MinGW/lib/pkgconfig/python-2.7.pc -->
<!--  -->
<!-- を作成して以下の内容を記述します． -->
<!-- - --  -->
<!-- prefix=/mingw -->
<!-- exec_prefix=${prefix} -->
<!-- libdir=${exec_prefix}/lib -->
<!-- includedir=/c/Python27/include -->
<!--  -->
<!-- Name: Python -->
<!-- Description: Python library -->
<!-- Requires:  -->
<!-- Version: 2.7 -->
<!-- Libs.private: -->
<!-- Libs: -L${libdir} -lpython27 -->
<!-- Cflags: -IC:/Python27/include -->
<!-- - --  -->

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
<!--  -->
<!-- dlopen(), dlclose(), dlsym(), dlerror() 関数が必要な場合は [[dlfcn-win32:https://code.google.com/p/dlfcn-win32/]] をインストールします．~ -->
<!-- FontForge はこれらの関数を使用しているようです．~ -->
<!-- $ curl - -insecure -R -L -O https://dlfcn-win32.googlecode.com/files/dlfcn-win32-r19.tar.bz2 -->
<!-- $ tar xvf dlfcn-win32-r19.tar.bz2 -->
<!-- $ pushd dlfcn-win32-r19 -->
<!-- $ ./configure - -prefix=/mingw - -enable-shared -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->
<!--  -->
<!-- [[libspiro:http://libspiro.sourceforge.net/]] をインストールします．~ -->
<!-- $ curl -R -L -O http://download.sourceforge.net/libspiro/libspiro_src-20071029.tar.bz2 -->
<!-- $ tar xvf libspiro_src-20071029.tar.bz2 -->
<!-- $ pushd libspiro-20071029 -->
<!-- $ ./configure - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->
<!--  -->
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
<!--  -->
<!-- [[LibUnicodeNames:https://bitbucket.org/sortsmill/libunicodenames]] をインストールします．~ -->
<!-- $ curl - -insecure -R -L -O https://bitbucket.org/sortsmill/libunicodenames/downloads/libunicodenames-1.0.1.tar.xz -->
<!-- $ tar xvf libunicodenames-1.0.1.tar.xz -->
<!-- $ pushd libunicodenames-1.0.1 -->
<!-- $ ./configure - -prefix=/mingw -->
<!--  -->
<!-- configure でエラーが発生する場合は configure からエラーの原因を取り除きます． -->
<!--  -->
<!-- -        if test ! "x$pythonexists" = "xyes"; then -->
<!-- -          { { $as_echo "$as_me:${as_lineno-$LINENO}: error: in \`$ac_pwd':" >&5 -->
<!--  -->
<!-- -$as_echo "$as_me: error: in \`$ac_pwd':" >&2;} -->
<!-- -as_fn_error $? " -->
<!-- -  Could not link test program to Python. Maybe the main Python library has been -->
<!--  -->
<!-- -  installed in some non-standard library path. If so, pass it to configure, -->
<!-- -  via the LDFLAGS environment variable. -->
<!-- -  Example: ./configure LDFLAGS=\"-L/usr/non-standard-path/python/lib\" -->
<!-- -  ============================================================================ -->
<!-- -   ERROR! -->
<!-- -   You probably have to install the development version of the Python package -->
<!-- -   for your distribution.  The exact name of this package varies among them. -->
<!-- -  ============================================================================ -->
<!--  -->
<!-- -See \`config.log' for more details" "$LINENO" 5; } -->
<!-- -         PYTHON_VERSION="" -->
<!-- -       fi -->
<!--  -->
<!-- -       # -->
<!-- -       # all done! -->
<!-- -       # -->
<!--  -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

[pango](http://www.pango.org/) をインストールします．<br>

```
$ curl --insecure -R -L -O https://download.gnome.org/sources/pango/1.36/pango-1.36.3.tar.xz
$ tar xvf pango-1.36.3.tar.xz
$ pushd pango-1.36.3
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

[PlibC](http://plibc.sourceforge.net/) をインストールします．<br>

```
$ curl -R -L -O http://download.sourceforge.net/plibc/plibc-0.1.7-src.tar.gz
$ tar xvf plibc-0.1.7-src.tar.gz
$ pushd PlibC-0.1.7
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

Summary of optional features:

  real (floating pt) double
  programs           yes
  native scripting   yes
  python scripting   no
  python extension   no
  freetype debugger  no
  capslock for alt   no
  raw points mode    no
  tile path          no
  gb12345 encoding   no

Summary of optional dependencies:

  cairo              yes        http://www.cairographics.org/
```

<!--   freetype           yes        http://www.freetype.org/ -->

```
  giflib             no         http://giflib.sourceforge.net/
  libjpeg            yes        http://en.wikipedia.org/wiki/Libjpeg
  libpng             yes        http://www.libpng.org/
  libtiff            yes        http://en.wikipedia.org/wiki/Libtiff
  libxml             yes        http://www.xmlsoft.org/
  libspiro           no         http://libspiro.sourceforge.net/
  libuninameslist    no         https://github.com/fontforge/libuninameslist
  libunicodenames    no         https://bitbucket.org/sortsmill/libunicodenames
  zeromq             no         http://www.zeromq.org/
  libreadline        no         http://www.gnu.org/software/readline
  X Window System    no

$ make
$ make install
$ popd
```

[ttfautohint](http://www.freetype.org/ttfautohint/) をインストールします．<br>

```
$ curl -R -L -O http://download.sourceforge.net/freetype/ttfautohint-1.00.tar.gz
$ tar xvf ttfautohint-1.00.tar.gz
$ pushd ttfautohint-1.00
$ ./configure --prefix=/mingw
$ make
```

```
../libtool: line 6013: cd: C:QtQt5.3.05.3.0mingw48_32lib: No such file or directory
libtool: link: cannot determine absolute directory name of `C:QtQt5.3.05.3.0mingw48_32lib'
```

のエラーが発生する場合は ttfautohint-1.00/frontend/Makefile の中身を

```
#QT_LIBS = -lglu32 -lopengl32 -lgdi32 -luser32 -lmingw32 -lqtmain -LC:\Qt\Qt5.3.0\5.3.0\mingw48_32\lib -lQt5Gui -lQt5Core -lQt5Widgets
QT_LIBS = -lglu32 -lopengl32 -lgdi32 -luser32 -lmingw32 -lqtmain -LC:/Qt/Qt5.3.0/5.3.0/mingw48_32/lib -lQt5Gui -lQt5Core -lQt5Widgets
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
#include <errno.h>
char *mkdtemp(char *tempbuf) {
  int rand_value = 0;
  char* tempbase = NULL;
  char tempbasebuf[MAX_PATH] = "";

  if (strcmp(&tempbuf[strlen(tempbuf)-6], "XXXXXX")) {
    errno = EINVAL;
    return NULL;
  }

  srand((unsigned)time(0));
  rand_value = (int)((rand() / ((double)RAND_MAX+1.0)) * 1e6);
  tempbase = strrchr(tempbuf, '/');
  tempbase = tempbase ? tempbase+1 : tempbuf;
  strcpy(tempbasebuf, tempbase);
  sprintf(&tempbasebuf[strlen(tempbasebuf)-6], "%d", rand_value);
  ::GetTempPath(MAX_PATH, tempbuf);
  strcat(tempbuf, tempbasebuf);
  ::CreateDirectory(tempbuf, NULL);
  return tempbuf;
}
#endif
```

を追加します．

src/util/path.cc に

<!-- #if defined(_WIN32) && ! defined(_MSC_VER) -->

```
#if defined(_WIN32)
#include <windows.h>
int mkdir(const char *pathname, mode_t mode) {
  if (::GetFileAttributes(pathname) == FILE_ATTRIBUTE_DIRECTORY) {
    errno = EEXIST;
    return -1;
  }
  return ::CreateDirectory(pathname, NULL) ? 0 : -1;
}
#endif
```

を追加します．

src/util/ffw.c に

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
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DENABLE_SVG=ON
-- The C compiler identification is GNU 4.8.1
-- The CXX compiler identification is GNU 4.8.1
-- Check for working C compiler: C:/MinGW/bin/gcc.exe
-- Check for working C compiler: C:/MinGW/bin/gcc.exe -- works
-- Detecting C compiler ABI info
-- Detecting C compiler ABI info - done
-- Check for working CXX compiler: C:/MinGW/bin/g++.exe
-- Check for working CXX compiler: C:/MinGW/bin/g++.exe -- works
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Found PkgConfig: C:/MinGW/bin/pkg-config.exe (found version "0.28")
-- checking for module 'poppler>=0.20.0'
--   found poppler, version 0.26.0
-- checking for module 'libfontforge>=2.0.0'
--   found libfontforge, version 2.0.0
-- Performing Test CXX0X_SUPPORT
-- Performing Test CXX0X_SUPPORT - Success
-- Configuring done
-- Generating done
-- Build files have been written to: C:/coolwanglu-pdf2htmlEX-???????/build
```

```
$ make
[  3%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/pdf2htmlEX.cc.obj
[  7%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/draw.cc.ob
j
[ 11%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/general.cc
.obj
[ 15%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/image.cc.o
bj
[ 19%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/font.cc.ob
j
[ 23%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/link.cc.ob
j
[ 26%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/outline.cc
.obj
[ 30%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/state.cc.o
bj
[ 34%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLRenderer/text.cc.ob
j
[ 38%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/BackgroundRenderer/Spla
shBackgroundRenderer.cc.obj
[ 42%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/BackgroundRenderer/Cair
oBackgroundRenderer.cc.obj
[ 46%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/util/const.cc.obj
[ 50%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/util/encoding.cc.obj
[ 53%] Building C object CMakeFiles/pdf2htmlEX.dir/src/util/ffw.c.obj
[ 57%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/util/math.cc.obj
[ 61%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/util/misc.cc.obj
[ 65%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/util/path.cc.obj
[ 69%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/util/unicode.cc.obj
[ 73%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/ArgParser.cc.obj
[ 76%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/Base64Stream.cc.obj
[ 80%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/Color.cc.obj
[ 84%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLTextLine.cc.obj
[ 88%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/HTMLTextPage.cc.obj
[ 92%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/Preprocessor.cc.obj
[ 96%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/StringFormatter.cc.obj
[100%] Building CXX object CMakeFiles/pdf2htmlEX.dir/src/TmpFiles.cc.obj
Linking CXX executable pdf2htmlEX.exe
[100%] Built target pdf2htmlEX
```

```
collect2.exe: error: ld returned 1 exit status
```

のエラーが発生する場合は CMakeFiles/pdf2htmlEX.dir/build.make の

```
	/C/MinGW/bin/g++.exe   -Wall --std=c++0x -O2 -DNDEBUG    -Wl,--whole-arc
hive CMakeFiles/pdf2htmlEX.dir/objects.a -Wl,--no-whole-archive  -o pdf2htmlEX.e
xe -Wl,--out-implib,libpdf2htmlEX.dll.a -Wl,--major-image-version,0,--minor-imag
e-version,0  -L/C/MinGW/lib -lpoppler -lfontforge -lgunicode -lkernel32 -luser32
 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32
```

と記述されている行を修正してリンクできるようにしてください．<br>
以下のように

```
-liconv -lintl -lz -lltdl -ljpeg -lxml2 -lgutils -lpng16 -ltiff -lglib-2.0 -lgio-2.0
```

を追加するとリンクできるようになりました．<br>
実際は1行です．<br>

```
	/C/MinGW/bin/g++.exe   -Wall --std=c++0x -O2 -DNDEBUG    -Wl,--whole-arc
hive CMakeFiles/pdf2htmlEX.dir/objects.a -Wl,--no-whole-archive  -o pdf2htmlEX.e
xe -Wl,--out-implib,libpdf2htmlEX.dll.a -Wl,--major-image-version,0,--minor-imag
e-version,0  -L/C/MinGW/lib -lpoppler -lfontforge -lgunicode -lkernel32 -luser32
 -lgdi32 -lwinspool -lshell32 -lole32 -loleaut32 -luuid -lcomdlg32 -ladvapi32 -l
iconv -lintl -lz -lltdl -ljpeg -lxml2 -lgutils -lpng16 -ltiff -lglib-2.0 -lgio-2
.0
```

```
$ make install
[100%] Built target pdf2htmlEX
Install the project...
-- Install configuration: "Release"
-- Installing: C:/MinGW/bin/pdf2htmlEX.exe
-- Installing: C:/MinGW/share/pdf2htmlEX/base.css
-- Installing: C:/MinGW/share/pdf2htmlEX/fancy.css
-- Installing: C:/MinGW/share/pdf2htmlEX/jquery.js
-- Installing: C:/MinGW/share/pdf2htmlEX/pdf2htmlEX.js
-- Installing: C:/MinGW/share/pdf2htmlEX/manifest
-- Installing: C:/MinGW/share/man/man1/pdf2htmlEX.1
```

```
$ pdf2htmlEX --version
pdf2htmlEX version 0.9
```

pdf2htmlEX はコードを適切に修正すれば Windows でも動作します．<br>
プログラムを実行すると Segmentation fault が発生する場合は gdb を使用してデバッグしてください．<br>

#### Cygwin {#wf50eda2}

Cygwin では問題なく動作するようです．<br>

### OS X {#u6860a4e}

#### Homebrew {#db279f00}

- brew install pdf2htmlex
- [https://github.com/mxcl/homebrew/blob/master/Library/Formula/pdf2htmlex.rb](https://github.com/mxcl/homebrew/blob/master/Library/Formula/pdf2htmlex.rb)
    <!-- - -[[Pdf2htmlex.rb:https://gist.github.com/3758157]] -->
    <!-- - -[[pdf2htmlex brew formula rough draft:https://gist.github.com/3758431]] -->

#### MacPorts {#ub0beda7}

- [pdf2htmlEX-macport](https://github.com/iapain/pdf2htmlEX-macport)
    <!-- -[[#36028 (pdf2htmlEX port) – MacPorts:https://trac.macports.org/ticket/36028]] -->

### Linux {#bbc3ecf8}

#### Ubuntu {#z45bd221}

- [ppa:coolwanglu/pdf2htmlex](https://launchpad.net/~coolwanglu/+archive/pdf2htmlex)
- [pdf2htmlEX - Convert PDF to HTML without losing format](http://linux.ikoinoba.net/index.php?UID=1349019363)

```
$ sudo apt-get install software-properties-common
$ sudo apt-add-repository ppa:coolwanglu/pdf2htmlex
$ sudo apt-get update
$ sudo apt-get install pdf2htmlex
```

#### Arch Linux {#ae9f73e9}

- [AUR (en) - pdf2htmlex-git](https://aur.archlinux.org/packages.php?ID=62426)

#### Gentoo Linux {#d917d3e1}

- [Gentoo Linux での pdf2htmlEX のビルド](http://blogs.yahoo.co.jp/igproj_fusion/16101259.html)

#### CentOS {#q04cd947}

CentOS 6.3 でもビルドできるようです．→ [pdf2htmlEXのrelaxedcpp11ブランチがBoostなしでbuildできるようになった。](https://twitter.com/h_okumura/status/245305278906638336)

<!-- ↑あれ，これは私のツイートですね。私はCentOS 6.3でbuildしました。 -->
<!--  -->
<!-- ↑うっかり OS X とはやとちりしてしまいました． -->
<!-- 返信どうもありがとうございました． -->

## 使い方 {#cc3ae41e}

Usage: pdf2htmlEX \[Options\] &lt;input.pdf> \[&lt;output.html>\]

## 関連リンク {#m74160f6}

- [Pdf2htmlEX – Convert PDF to HTML without losing text or format (github.com)](https://news.ycombinator.com/item?id=5657988)
- [pdf2htmlEXはGitHubで今月のトレンドRepoになりました！](http://lang-8.com/393787/journals/205776832576308965279285506837389641381/pdf2htmlEX%25E3%2581%25AFGitHub%25E3%2581%25A7%25E4%25BB%258A%25E6%259C%2588%25E3%2581%25AE%25E3%2583%2588%25E3%2583%25AC%25E3%2583%25B3%25E3%2583%2589Repo%25E3%2581%25AB%25E3%2581%25AA%25E3%2582%258A%25E3%2581%25BE%25E3%2581%2597%25E3%2581%259F%25EF%25BC%2581)
- [pdf2htmlEXの紹介](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=873)
- [巫璐赛](http://lang-8.com/393787)
    - [150 僕が書いたツール：　pdf2htmlEX](http://lang-8.com/393787/journals/1662451)
- [pdf2htmlEX（Lang-8より転載）](http://blogs.yahoo.co.jp/igproj_fusion/16093260.html)
- [香港のプログラマーの御紹介](http://blogs.yahoo.co.jp/igproj_fusion/16098576.html)
- [Gentoo Linux での pdf2htmlEX のビルド](http://blogs.yahoo.co.jp/igproj_fusion/16101259.html)
- [「pdf2htmlEX」の検索結果一覧 - にっき♪](http://d.hatena.ne.jp/abenori/archive?word=pdf2htmlEX)
- [これがHTML？と言いたくなるようなPDF変換ソフトウェア「pdf2htmlEX」](http://www.moongift.jp/2012/09/20120926/)
- [はてなブックマーク - pdf2htmlEX - TeX Wiki](http://b.hatena.ne.jp/entry/oku.edu.mie-u.ac.jp/~okumura/texwiki/?pdf2htmlEX)
- [Pdf2htmlEX: A PDF to HTML converter | Hacker News](http://news.ycombinator.com/item?id=4528797)
- [pdf2htmlEX – Convert PDF to HTML without losing format](http://ubuntuguide.net/pdf2htmlex-convert-pdf-to-html-without-losing-format)
- [Man page of MKDTEMP](http://linuxjm.sourceforge.jp/html/LDP_man-pages/man3/mkdtemp.3.html)
- [Man page of MKDIR](http://linuxjm.sourceforge.jp/html/LDP_man-pages/man2/mkdir.2.html)
    <!-- -[[Boostライブラリのビルド方法:https://sites.google.com/site/boostjp/howtobuild]] -->

- [dlfcn-win32](https://code.google.com/p/dlfcn-win32/)
- [MinGW/dllを呼び出す - Ura5han Wiki](http://ura5han.resourcez.org/wiki/MinGW/dll%E3%82%92%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%99)
