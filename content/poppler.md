---
title: "poppler"
url: "/poppler/"
date: 2012-03-29T21:09:18Z
pukiwiki: "poppler"
---

# poppler

## [poppler](http://poppler.freedesktop.org/) {#c1f030c4}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## poppler とは {#fd295383}

poppler は PDF ファイルを表示するためのライブラリです．<br>
poppler は [TeXworks](/TeXworks/), [Texmaker](/Texmaker/) などで使用されています．<br>

- [poppler](http://poppler.freedesktop.org/)
    - [repository](http://cgit.freedesktop.org/poppler/poppler)

### リリース情報 {#ha3b28ab}

2012-04-26 poppler 0.19.4<br>

poppler 0.19.2 で font configuration で win32 を選択した場合，日本語のフォントを埋め込んでいない PDF ファイルは MS-Mincho で表示されるようになりました<br>

- [Bug 48046 &ndash; ttc&lt;-&gt;ttf fallback is expected for CJK font list in GlobalParamsWin.cc](https://bugs.freedesktop.org/show_bug.cgi?id=48046)
- \[[Bug 48046\] New: ttc&lt;-&gt;ttf fallback is expected for CJK font list in GlobalParamsWin.cc - poppler-bugs.lists.freedesktop.org - ArchiveOrange](http://web.archiveorange.com/archive/v/RybTrzJz0TKVhTDfV9z3)
- [ttc&lt;->ttf fallback is expected for CJK font list in GlobalParamsWin.cc](http://cgit.freedesktop.org/poppler/poppler/commit/?id=f5b708c3e04ba50756cd9f9530cf82f547443ce9)
- [per-collection fallback for missing CID-keyed fonts on Win32](http://cgit.freedesktop.org/poppler/poppler/commit/?id=4a38d933d06d189317b1b9028c3fa4ae2a1551af)
- [CJK improvements](http://cgit.freedesktop.org/poppler/poppler/commit/?id=55d039ada063a9427de6dd59846ce1570ab26e9f)
- [CJK substitute implementation on WIndows platforms.](http://cgit.freedesktop.org/poppler/poppler/commit/?id=dae29c6c201cd69cbf4f008de865cc19a36f29b3)
- [Improve CJK suport in PSOutputDev](http://cgit.freedesktop.org/poppler/poppler/commit/?id=32e47ee03840cc8f21c00497025864d77edb75f5)

## インストール {#e0d6f40b}

### Windows (MinGW) {#o45a1c30}

curl, nkf は W32TeX のものを使用します．<br>
sed, grep, sort, uniq は MinGW だけではなく W32TeX にも含まれています．<br>

- [MinGW](http://www.mingw.org/) のサイトから [mingw-get-inst の最新版](http://sourceforge.net/projects/mingw/files/Installer/mingw-get-inst/) をダウンロードし，フルインストールします．

- [http://get.qt.nokia.com/qt/source/](http://get.qt.nokia.com/qt/source/) から最新版の Qt mingw バイナリ をダウンロードしてインストールします．インストール後，C:\Qt\4.8.1\bin (C:\Qt\インストールしたQtのバージョン\bin) に PATH を通します．

<!-- -[[msysgit - Git for Windows:http://code.google.com/p/msysgit/]] から PortableGit-1.7.4-preview20110204.7z をダウンロードして展開し，bin フォルダ (git.exe のあるフォルダ) に PATH を通します． -->

- [CMake - Cross Platform Make](http://www.cmake.org/cmake/resources/software.html) から Binary distributions の Windows ZIP File をダウンロードして展開し，bin フォルダ (cmake.exe のあるフォルダ) に PATH を通します．

- [GTK+ Download: Windows (32-bit)](http://www.gtk.org/download/win32.php) から

- GLib の Run-time
    - gettext-runtime の Run-time
    - pkg-config の Tool

をダウンロードして，展開後 bin フォルダにある

- gspawn-win32-helper.exe
    - gspawn-win32-helper-console.exe
    - libgio-2.0-0.dll
    - libglib-2.0-0.dll
    - libgmodule-2.0-0.dll
    - libgobject-2.0-0.dll
    - libgthread-2.0-0.dll
    - intl.dll
    - pkg-config.exe

を C:\MinGW\bin にコピーします．

- \[スタート\]-\[すべてのプログラム\]-\[MinGW\]-\[MinGW Shell\] を起動します．

<!-- ~/.bash_profile に以下の内容を記述します． -->
<!-- if [ -f ~/.bashrc ]; then . ~/.bashrc; fi -->

<!-- ~/.bashrc に以下の内容を記述します． -->
<!-- alias ls='ls - -color=auto - -show-control-chars' -->
<!-- alias cp='cp -i' -->
<!-- alias rm='rm -i' -->

<!-- /etc/profile の cd "$HOME" の後に source ~/.bashrc を追加します． -->
<!-- cd "$HOME" -->
<!-- source ~/.bashrc -->

<!-- $ source ~/.bashrc -->

<!-- http://wiki.openttd.org/Compiling_on_MinGW -->
<!-- [[「Warning: linker path does not have real file for library -lz」の件:http://d.hatena.ne.jp/ousttrue/20091113/1258095613]] -->
<!-- [[mingw + msys で cairo 1.10.0 をビルド:http://d.hatena.ne.jp/miyamuko/20100909/how_to_build_cairo_1_10_0_using_mingw]] -->

<!-- -[[paco:http://paco.sourceforge.net/]] をインストールします． -->
<!--  -->
<!-- $ curl -R -L -O http://sourceforge.net/projects/paco/files/paco/2.0.9/paco-2.0.9.tar.bz2 -->
<!-- $ tar jxvf paco-2.0.9.tar.bz2 -->
<!-- $ pushd paco-2.0.9 -->
<!-- $ ./configure - -prefix=/mingw - -disable-gpaco -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ make logme -->
<!-- $ popd -->
<!-- - --  -->
<!-- basepkg.cc:255:28: error: 'lstat' was not declared in this scope -->
<!-- basepkg.cc:269:14: error: 'struct stat' has no member named 'st_blksize' -->
<!-- basepkg.cc:273:28: error: 'S_ISLNK' was not declared in this scope -->
<!-- - --  -->
<!-- lstat は MinGW にはないので無理っぽい -->

- [zlib](http://zlib.net/) をインストールします．

```
$ curl -R -L -O http://zlib.net/zlib-1.2.6.tar.gz
$ tar zxvf zlib-1.2.6.tar.gz
$ pushd zlib-1.2.6
$ make -f win32/Makefile.gcc BINARY_PATH=/mingw/bin INCLUDE_PATH=/mingw/include LIBRARY_PATH=/mingw/lib SHARED_MODE=1 install
$ popd
```

- [CMake](http://www.cmake.org/) をインストールします．

```
$ curl -R -L -O http://www.cmake.org/files/v2.8/cmake-2.8.8.tar.gz
$ tar zxvf cmake-2.8.8.tar.gz
$ pushd cmake-2.8.8
$ mkdir build
$ pushd build
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw
$ make
$ make install
$ popd
$ popd
```

cmake の Makefile でインストールした場合は，make uninstall が使えないので，アンインストールする場合は，ビルドしたディレクトリで

```
$ sed -e "s/\r$//" install_manifest.txt | sort | uniq | xargs rm
```

を実行します．

- [libpng](http://www.libpng.org/pub/png/libpng.html) をインストールします．

<!-- $ curl -R -L -O http://sourceforge.net/projects/libpng/files/libpng15/1.5.10/libpng-1.5.10.tar.xz -->

```
$ curl -R -L -O http://download.sourceforge.net/libpng/libpng-1.5.10.tar.xz
$ tar Jxvf libpng-1.5.10.tar.xz
$ pushd libpng-1.5.10
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

<!-- $ curl -R -L -O http://sourceforge.net/projects/libpng/files/libpng15/1.5.10/libpng-1.5.10.tar.xz -->
<!-- $ tar Jxvf libpng-1.5.10.tar.xz -->
<!-- $ pushd libpng-1.5.10 -->
<!-- $ mkdir build -->
<!-- $ pushd build -->
<!-- $ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->
<!-- $ popd -->
<!--  -->
- [libjpeg](http://www.ijg.org/) をインストールします．

```
$ curl -R -L -O http://www.ijg.org/files/jpegsrc.v8d.tar.gz
$ tar zxvf jpegsrc.v8d.tar.gz
$ pushd jpeg-8d
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [LibTIFF](http://www.remotesensing.org/libtiff/) をインストールします．

```
$ curl -R -L -O ftp://ftp.remotesensing.org/pub/libtiff/tiff-4.0.1.tar.gz
$ tar zxvf tiff-4.0.1.tar.gz
$ pushd tiff-4.0.1
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [Little CMS](http://www.littlecms.com/) をインストールします．

<!-- $ curl -R -L -O http://sourceforge.net/projects/lcms/files/lcms/2.3/lcms2-2.3.tar.gz -->

```
$ curl -R -L -O http://download.sourceforge.net/lcms/lcms2-2.3.tar.gz
$ tar zxvf lcms2-2.3.tar.gz
$ pushd lcms2-2.3
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

<!-- -[[FastCGI:http://www.fastcgi.com/]] をインストールします． -->
<!--  -->
<!-- $ curl -R -L -O http://www.fastcgi.com/dist/fcgi-2.4.1-SNAP-0910052249.tar.gz -->
<!-- $ tar zxvf fcgi-2.4.1-SNAP-0910052249.tar.gz -->
<!-- $ pushd fcgi-2.4.1-SNAP-0910052249 -->
<!-- $ ./configure - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

- [libopenjpeg](http://www.openjpeg.org/) をインストールします．

<!-- $ svn checkout http://openjpeg.googlecode.com/svn/trunk/ openjpeg-read-only -->
<!-- $ pushd openjpeg-read-only -->
<!-- $ ./bootstrap.sh -->

```
$ curl -R -L -O http://openjpeg.googlecode.com/files/openjpeg-1.5.0.tar.gz
$ tar zxvf openjpeg-1.5.0.tar.gz
$ pushd openjpeg-1.5.0
```

<!-- $ ./configure - -prefix=/mingw - -enable-mj2 - -enable-jpwl - -enable-jpip -->

```
$ ./configure --prefix=/mingw --enable-mj2 --enable-jpwl
$ make
$ make install
$ popd
```

- [freetype](http://www.freetype.org/) をインストールします．

<!-- $ curl -R -L -O http://sourceforge.net/projects/freetype/files/freetype2/2.4.9/freetype-2.4.9.tar.bz2 -->

```
$ curl -R -L -O http://download.sourceforge.net/freetype/freetype-2.4.9.tar.bz2
$ tar jxvf freetype-2.4.9.tar.bz2
$ pushd freetype-2.4.9
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [libxml2](http://xmlsoft.org/) をインストールします．

<!-- $ curl -R -L -O ftp://xmlsoft.org/libxml2/libxml2-2.7.8.tar.gz -->
<!-- $ tar zxvf libxml2-2.7.8.tar.gz -->

```
$ curl -R -L -O ftp://xmlsoft.org/libxml2/libxml2-git-snapshot.tar.gz
$ tar zxvf libxml2-git-snapshot.tar.gz
$ pushd libxml2-2.7.8
```

<!-- configure.in を修正します． -->
<!-- - --  -->
<!-- ■修正前 -->
<!-- - --  -->
<!-- AC_PATH_PROG(RM, rm, /bin/rm) -->
<!-- AC_PATH_PROG(MV, mv, /bin/mv) -->
<!-- - --  -->
<!-- ■修正後 -->
<!-- - --  -->
<!-- AC_PATH_PROG(RM, rm, /bin/rm) -->
<!-- RM="$RM -f" -->
<!-- AC_PATH_PROG(MV, mv, /bin/mv) -->
<!-- - --  -->
<!--  -->
<!-- libxml2-2.7.8 では ./configure - -with-threads で make しようとすると testThreads.c でエラーが発生します． -->
<!--  -->
<!-- testThreads.c: In function 'main': -->
<!-- testThreads.c:110:6: error: conversion to non-scalar type requested -->
<!--  -->
<!-- testThreads.c を修正します． -->
<!-- - --  -->
<!-- ■修正前 -->
<!-- - --  -->
<!-- 	for (i = 0; i < num_threads; i++) { -->
<!-- 	    results[i] = NULL; -->
<!-- 	    tid[i] = (pthread_t) -1; -->
<!-- 	} -->
<!-- - --  -->
<!-- ■修正後 -->
<!-- - --  -->
<!-- 	for (i = 0; i < num_threads; i++) { -->
<!-- 	    results[i] = NULL; -->
<!-- 	    tid[i] = *(pthread_t*) -1; -->
<!-- 	} -->
<!-- - --  -->
<!-- $ autoreconf -->

```
$ ./configure --prefix=/mingw

```

libxml2-2.7.4 以降は ./configure --prefix=/mingw で以下のようなメッセージが表示されますが，ビルドできるので無視してかまいません．

```
...
/bin/rm: cannot lstat `libtoolT': No such file or directory
Done configuring

```

```
$ make
$ make install
$ popd
```

- [fontconfig](http://www.fontconfig.org/) をインストールします．

fontconfig のインストールでエラーが発生する場合は [fontconfig のインストールについて](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=732) を参照してください．

```
$ curl -R -L -O http://www.freedesktop.org/software/fontconfig/release/fontconfig-2.9.0.tar.gz
$ tar zxvf fontconfig-2.9.0.tar.gz
$ pushd fontconfig-2.9.0
$ ./configure --prefix=/mingw
$ make
$ make install
```

/mingw/bin/fc-cache -s -f -v の実行で多少時間がかかります．

```
...
 /bin/install -c -m 644 ./fonts.conf /mingw/etc/fonts/fonts.conf
 /mingw/bin/fc-cache -s -f -v
C:/Windows/fonts: caching, new cache contents: ??? fonts, ? dirs
...
```

```
$ popd
```

fc-match で Ryumin-Light と GothicBBB-Medium を確認します．

```
$ fc-match Ryumin-Light
Vera.ttf: "Bitstream Vera Sans" "Roman"
$ fc-match GothicBBB-Medium
Vera.ttf: "Bitstream Vera Sans" "Roman"
```

デフォルトでは日本語のフォントが埋め込まれていない PDF ファイルの明朝体は，すべてゴシック体で表示されてしまいます．<br>
そこで明朝体とゴシック体を適切に表示するため，C:\MinGW\etc\fonts\local.conf を作成して編集します．<br>
fc-list で MS Mincho と MS Gothic がリストに存在するかどうか確認します．<br>

```
$ fc-list | nkf -W8 -s | grep "MS Mincho"
MS Mincho,ＭＳ 明朝:style=Regular,標準
```

```
$ fc-list | nkf -W8 -s | grep "MS Gothic"
MS Gothic,ＭＳ ゴシック:style=Regular,標準
```

C:\MinGW\etc\fonts\local.conf を作成して以下のように編集します．

***

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<!-- local.conf file to configure local font access -->
<fontconfig>

<match target="pattern">
  <test qual="any" name="family">
    <string>Ryumin</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>MS Mincho</string>
  </edit>
</match>
<match target="pattern">
  <test qual="any" name="family">
    <string>GothicBBB</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>MS Gothic</string>
  </edit>
</match>

</fontconfig>
```

***

fc-match で Ryumin-Light と GothicBBB-Medium を確認します．

```
$ fc-match Ryumin-Light
msmincho.ttc: "MS Mincho" "Regular"
$ fc-match GothicBBB-Medium
msgothic.ttc: "MS Gothic" "Regular"
```

- [pixman](http://cgit.freedesktop.org/pixman/) をインストールします．

```
$ curl -R -L -O http://cairographics.org/snapshots/pixman-0.25.2.tar.gz
$ tar zxvf pixman-0.25.2.tar.gz
$ pushd pixman-0.25.2
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [cairo](http://www.cairographics.org/) をインストールします．

```
$ curl -R -L -O http://cairographics.org/releases/cairo-1.12.0.tar.gz
$ tar zxvf cairo-1.12.0.tar.gz
$ pushd cairo-1.12.0
$ ./configure --prefix=/mingw

cairo (version 1.12.0 [release]) will be compiled with:

The following surface backends:
  Image:         yes (always builtin)
  Recording:     yes (always builtin)
  Observer:      yes (always builtin)
  Mime:          yes (always builtin)
  Tee:           no (disabled, use --enable-tee to enable)
  XML:           no (disabled, use --enable-xml to enable)
  Skia:          no (disabled, use --enable-skia to enable)
  Xlib:          no (requires X development libraries)
  Xlib Xrender:  no (requires --enable-xlib)
  Qt:            no (disabled, use --enable-qt to enable)
  Quartz:        no (requires CoreGraphics framework)
  Quartz-image:  no (disabled, use --enable-quartz-image to enable)
  XCB:           no (requires xcb >= 1.6 xcb-render >= 1.6 http://xcb.freedeskto
p.org)
  Win32:         yes
  OS2:           no (disabled, use --enable-os2 to enable)
  CairoScript:   yes
  PostScript:    yes
  PDF:           yes
  SVG:           yes
  OpenGL:        no (disabled, use --enable-gl to enable)
  OpenGL ES 2.0: no (disabled, use --enable-glesv2 to enable)
  BeOS:          no (disabled, use --enable-beos to enable)
  DirectFB:      no (disabled, use --enable-directfb to enable)
  OpenVG:        no (disabled, use --enable-vg to enable)
  DRM:           no (disabled, use --enable-drm to enable)
  Cogl:          no (disabled, use --enable-cogl to enable)

The following font backends:
  User:          yes (always builtin)
  FreeType:      yes
  Fontconfig:    yes
  Win32:         yes
  Quartz:        no (requires CoreGraphics framework)

The following functions:
  PNG functions:   yes
  GLX functions:   no (not required by any backend)
  WGL functions:   no (not required by any backend)
  EGL functions:   no (not required by any backend)
  X11-xcb functions: no (disabled, use --enable-xlib-xcb to enable)
  XCB-shm functions: no (requires --enable-xcb)

The following features and utilities:
  cairo-trace:                no (requires dynamic linker and zlib and real pthr
eads)
  cairo-script-interpreter:   yes

And the following internal features:
  pthread:       yes
  gtk-doc:       no
  gcov support:  no
  symbol-lookup: no (requires bfd)
  test surfaces: no (disabled, use --enable-test-surfaces to enable)
  ps testing:    no (requires libspectre)
  pdf testing:   no (requires poppler-glib >= 0.17.4)
  svg testing:   no (requires librsvg-2.0 >= 2.15.0)
  win32 printing testing:    no (requires ghostscript)

$ make
```

```
cairo-missing.h:44:17: error: conflicting types for 'ssize_t'
```

[cairo-1.12.0/util/cairo-missing/cairo-missing.h](http://cgit.freedesktop.org/cairo/tree/util/cairo-missing/cairo-missing.h?id=1.12.0) の 44行目にある typedef SSIZE_T ssize_t; をコメントアウトします．<br>

```
//typedef SSIZE_T ssize_t;
```

```
any2ppm.c:123:1: error: conflicting types for '_write'
```

[cairo-1.12.0/test/any2ppm.c](http://cgit.freedesktop.org/cairo/tree/test/any2ppm.c?id=1.12.0) の 123行目，207行目，218行目，224行目にある \_write を \__write に修正します．<br>

```
__write (int fd,
len = __write (fd,
len = __write (fd,
len = __write (fd,
```

```
$ make install
$ popd
```

- [curl](http://curl.haxx.se/) をインストールします．

```
$ curl -R -L -O http://curl.haxx.se/download/curl-7.25.0.tar.bz2
$ tar jxvf curl-7.25.0.tar.bz2
$ pushd curl-7.25.0
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [poppler](http://poppler.freedesktop.org/) をインストールします．

<!-- - -with-font-configuration=fontconfig で fontconfig にリンクすると日本語のフォントが埋め込まれていない PDF ファイルでも日本語が表示できるようになります． -->

```
-DFONT_CONFIGURATION=fontconfig で fontconfig にリンクすると日本語のフォントが埋め込まれていない PDF ファイルでも日本語が表示できるようになります．
poppler 0.19.2 で -DFONT_CONFIGURATION=win32 でビルドしても日本語のフォントが埋め込まれていない PDF ファイルが MS-Mincho で表示できるようになりました．
ただし -DFONT_CONFIGURATION=win32 の場合 GothicBBB-Medium (ゴシック体) でも Ryumin-Light (明朝体) と同様 MS-Mincho で表示されます．
GothicBBB-Medium (ゴシック体) をきちんと表示したい場合は -DFONT_CONFIGURATION=fontconfig でビルドして fontconfig を適切に設定することをおすすめします．
```

```
$ curl -R -L -O http://cgit.freedesktop.org/poppler/poppler/snapshot/poppler-0.19.4.tar.gz
$ tar zxvf poppler-0.19.4.tar.gz
$ pushd poppler-0.19.4
$ mkdir build
$ pushd build
```

<!-- $ POPPLER_QT4_CFLAGS="-IC:/Qt/4.8.1/include" POPPLER_QT4_LIBS="-LC:/Qt/4.8.1/lib -lQtCore4 -lQtGui4 -lQtNetwork4 -lQtWebKit4 -lQtXml4 -lQtXmlPatterns4" POPPLER_QT4_TEST_CFLAGS="-IC:/Qt/4.8.1/include" POPPLER_QT4_TEST_LIBS="-LC:/Qt/4.8.1/bin" ./configure - -prefix=/mingw - -with-font-configuration=fontconfig - -enable-xpdf-headers - -enable-zlib -->
<!--  -->
<!-- Building poppler with support for: -->
<!--   font configuration: fontconfig -->
<!--   splash output:      yes -->
<!--   cairo output:       yes -->
<!--   qt4 wrapper:        yes -->
<!--   glib wrapper:       no -->
<!--     introspection:    no -->
<!--   cpp wrapper:        yes -->
<!--   use gtk-doc:        no -->
<!--   use libjpeg:        yes -->
<!--   use libpng:         yes -->
<!--   use libtiff:        yes -->
<!--   use zlib:           yes -->
<!--   use libcurl:        no -->
<!--   use libopenjpeg:    no -->
<!--   use cms:            yes -->
<!--   command line utils: yes -->
<!--  -->
<!--   Warning: Using zlib is not totally safe -->
<!--   Warning: Using libopenjpeg is recommended -->
<!--  -->

```
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DFONT_CONFIGURATION=fontconfig -DENABLE_XPDF_HEADERS=ON -DENABLE_ZLIB=ON -DZLIB_LIBRARY=C:/MinGW/bin/zlib1.dll -DENABLE_LIBCURL=ON
```

```
Building Poppler with support for:
  font configuration:   fontconfig
  splash output:        yes
  cairo output:         yes
  qt4 wrapper:          yes
  glib wrapper:         no
    introspection:      no
  cpp wrapper:          yes
  use gtk-doc:          not supported with this CMake build system
  use libjpeg:          yes
  use libpng:           yes
  use libtiff:          yes
  use zlib:             yes
  use curl:             yes
  use libopenjpeg:      yes
  use cms:              yes
      with lcms2
  command line utils:   yes
  test data dir:
```

```
$ make
$ make install
$ popd
$ popd
$ strings -a /mingw/bin/libpoppler.dll | grep poppler | head
...
C:/MinGW/share/poppler
...
```

<!-- $ strings -a /mingw/bin/libpoppler-14.dll | grep poppler | head -->
<!-- /mingw/share/poppler -->
<!-- \share\poppler -->
<!-- Unknown CID font collection, please report to poppler bugzilla. -->
<!-- libpoppler-14.dll -->
<!-- ... -->

日本語の PDF ファイルを表示できるようにするため，W32TeX の poppler-data (C:\w32tex\share\texworks\poppler-data) を C:\MinGW\share にコピーして poppler にリネームします．

```
$ cp -pr /c/w32tex/share/texworks/poppler-data/ /mingw/share/poppler
```

***

```
C:.
├─w32tex
│  └─share
│      └─texworks
│          └─poppler-data
└─MinGW
    └─share
        └─poppler
```

***

## 関連リンク {#m3ac74dd}

- [Beyond Linux® From Scratch - Poppler](http://lfsbookja.sourceforge.jp/BLFS/svn.ja/general/poppler.html)
- [poppler 0.18.1 ビルド奮闘記](https://sites.google.com/site/poppler0181builder/)
