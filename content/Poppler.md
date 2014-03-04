---
title: "Poppler"
url: "/Poppler/"
date: 2013-08-26T08:13:06Z
pukiwiki: "Poppler"
---

# Poppler

## [Poppler](http://poppler.freedesktop.org/) {#c1f030c4}

<img src="http://poppler.freedesktop.org/logo.png" alt="poppler" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Poppler とは {#fd295383}

Poppler は PDF ファイルを表示するためのライブラリです．<br>
Poppler は

<table>
<tbody>
<tr><th style="color:#468">統合環境・エディタ</th><td style="color:#468;background-color:#DDD"><a href="/TeXstudio/">TeXstudio</a>, <a href="/TeXworks/">TeXworks</a></td></tr>
<tr><th style="color:#468">PDF ビューア</th><td style="color:#468;background-color:#DDD"><a href="/Evince/">Evince</a>, <a href="/Okular/">Okular</a>, <a href="/zathura/">zathura</a> (zathura-pdf-poppler), <a href="/qpdfview/">qpdfview</a></td></tr>
</tbody>
</table>

などで使用されています．<br>

- [Poppler](http://poppler.freedesktop.org/)
- [The poppler Archives](http://lists.freedesktop.org/archives/poppler/)

### License {#i424d155}

[GPLv3](http://cgit.freedesktop.org/poppler/poppler/tree/COPYING3), [GPLv2](http://cgit.freedesktop.org/poppler/poppler/tree/COPYING)

### リリース情報 {#ha3b28ab}

- [http://cgit.freedesktop.org/poppler/poppler/refs/tags](http://cgit.freedesktop.org/poppler/poppler/refs/tags) を参照．<br>

### ChangeLog {#u62118c7}

- [poppler/poppler - The poppler pdf rendering library](http://cgit.freedesktop.org/poppler/poppler)
    - [log](http://cgit.freedesktop.org/poppler/poppler/log/)

### font configuration {#e532ec53}

Poppler は font configuration で win32 を選択した場合，日本語のフォントを埋め込んでいない PDF ファイルは MS-Mincho で表示されます．<br>
ただし font configuration が win32 の場合 GothicBBB-Medium (ゴシック体) でも Ryumin-Light (明朝体) と同様 MS-Mincho で表示されます．<br>
GothicBBB-Medium (ゴシック体) をきちんと表示したい場合は font configuration を fontconfig でビルドして fontconfig を適切に設定します．<br>

## インストール {#e0d6f40b}

### Windows {#o45a1c30}

#### MinGW {#x2d1044d}

TeX Live を使用している場合は [http://curl.haxx.se/download.html#Win32](http://curl.haxx.se/download.html#Win32) から curl の Windows バイナリをダウンロードして環境変数 PATH に curl.exe が存在するフォルダーを追加してください．<br>
W32TeX を使用している場合は curl が W32TeX に含まれているのでダウンロードする必要はありません．<br>
sed, grep, sort, uniq は MinGW だけではなく W32TeX にも含まれています．<br>

- [MinGW](/MinGW/) をフルインストールします．

- [http://qt-project.org/downloads](http://qt-project.org/downloads) から Qt 5 の mingw バイナリをダウンロードしてインストールします．インストールした Qt の Qt 関連バイナリが存在する bin フォルダー (qmake.exe や moc.exe のあるフォルダー) に PATH を通します．
    <!-- - -[[Qt 5 の mingwバイナリ:http://sourceforge.net/projects/mingwbuilds/files/external-binary-packages/Qt-Builds/]] -->

<!-- -[[msysgit - Git for Windows:https://code.google.com/p/msysgit/]] から PortableGit-1.7.4-preview20110204.7z をダウンロードして展開し，bin フォルダー (git.exe のあるフォルダー) に PATH を通します． -->

- [Subversion Windows Installer](http://alagazam.net/) から Windows バイナリをダウンロードして展開し，bin フォルダー (svn.exe のあるフォルダー) に PATH を通します．

- [CMake - Cross Platform Make](http://www.cmake.org/cmake/resources/software.html) から Binary distributions の Windows ZIP File をダウンロードして展開し，bin フォルダー (cmake.exe のあるフォルダー) に PATH を通します．

- [GTK+ Download: Windows (32-bit)](http://www.gtk.org/download/win32.php) から

- GLib の Run-time
    - gettext-runtime の Run-time
    - pkg-config の Tool

をダウンロードして，展開後 bin フォルダーにある

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

- [Python](/Python/) をインストールします．<br>

- MinGW Shell (MSYS) を起動します．

<!-- [[mingw-and-ndk:https://code.google.com/p/mingw-and-ndk/]] のページから [[Python:http://www.python.org/]] の MinGW バイナリ ([[python-mingw.7z:https://code.google.com/p/mingw-and-ndk/downloads/detail?name=python-mingw.7z]]) をダウンロードしてインストールします．~ -->
<!--  -->
<!-- [[7-Zip:http://sevenzip.sourceforge.jp/]] で展開して中身のフォルダーを C:\MinGW に上書きします．~ -->

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
<!-- $ tar xvf paco-2.0.9.tar.bz2 -->
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

- [zlib](http://zlib.net/) をインストールします． ([ChangeLog](http://zlib.net/ChangeLog.txt))

```
$ curl -R -L -O http://zlib.net/zlib-1.2.8.tar.xz
$ tar xvf zlib-1.2.8.tar.xz
$ pushd zlib-1.2.8
$ make -f win32/Makefile.gcc BINARY_PATH=/mingw/bin INCLUDE_PATH=/mingw/include LIBRARY_PATH=/mingw/lib SHARED_MODE=1 install
$ popd
```

- [CMake](http://www.cmake.org/) をインストールします．

```
$ curl -R -L -O http://www.cmake.org/files/v2.8/cmake-2.8.12.2.tar.gz
$ tar xvf cmake-2.8.12.2.tar.gz
$ pushd cmake-2.8.12.2
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

- [libpng](http://www.libpng.org/pub/png/libpng.html) をインストールします．([log](http://sourceforge.net/p/libpng/code/ci/master/log/))

<!-- $ curl -R -L -O http://sourceforge.net/projects/libpng/files/libpng16/1.6.9/libpng-1.6.9.tar.xz -->

```
$ curl -R -L -O http://download.sourceforge.net/libpng/libpng-1.6.9.tar.xz
$ tar xvf libpng-1.6.9.tar.xz
$ pushd libpng-1.6.9
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

<!-- $ curl -R -L -O http://sourceforge.net/projects/libpng/files/libpng16/1.6.9/libpng-1.6.9.tar.xz -->
<!-- $ tar xvf libpng-1.6.9.tar.xz -->
<!-- $ pushd libpng-1.6.9 -->
<!-- $ mkdir build -->
<!-- $ pushd build -->
<!-- $ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->
<!-- $ popd -->
<!--  -->
<!-- -[[libjpeg-turbo:http://libjpeg-turbo.virtualgl.org/]] をインストールします．~ -->
<!-- $ curl -R -L -O http://download.sourceforge.net/libjpeg-turbo/libjpeg-turbo-1.3.0.tar.gz -->
<!-- $ tar xvf libjpeg-turbo-1.3.0.tar.gz -->
<!-- $ pushd libjpeg-turbo-1.3.0 -->
<!-- $ ./configure - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

- [libjpeg](http://www.ijg.org/) をインストールします．

```
$ curl -R -L -O http://www.ijg.org/files/jpegsrc.v9a.tar.gz
$ tar xvf jpegsrc.v9a.tar.gz
$ pushd jpeg-9a
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [XZ Utils](http://tukaani.org/xz/) をインストールします．

```
$ curl -R -L -O http://tukaani.org/xz/xz-5.0.5.tar.xz
$ tar xvf xz-5.0.5.tar.xz
$ pushd xz-5.0.5
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [LibTIFF](http://www.remotesensing.org/libtiff/) をインストールします．

```
$ curl -R -L -O http://download.osgeo.org/libtiff/tiff-4.0.3.tar.gz
$ tar xvf tiff-4.0.3.tar.gz
$ pushd tiff-4.0.3
$ ./configure --prefix=/mingw
```

```
Libtiff is now configured for i686-pc-mingw32

  Installation directory:             /mingw
  Documentation directory:            ${prefix}/share/doc/tiff-4.0.3
  C compiler:                         gcc -g -O2 -Wall -W
  C++ compiler:                       g++ -g -O2
  Enable runtime linker paths:        no
  Enable linker symbol versioning:    no
  Support Microsoft Document Imaging: yes
  Use win32 IO:                       yes

 Support for internal codecs:
  CCITT Group 3 & 4 algorithms:       yes
  Macintosh PackBits algorithm:       yes
  LZW algorithm:                      yes
  ThunderScan 4-bit RLE algorithm:    yes
  NeXT 2-bit RLE algorithm:           yes
  LogLuv high dynamic range encoding: yes

 Support for external codecs:
  ZLIB support:                       yes
  Pixar log-format algorithm:         yes
  JPEG support:                       yes
  Old JPEG support:                   yes
  JPEG 8/12 bit dual mode:            no
  ISO JBIG support:                   no
  LZMA2 support:                      yes

  C++ support:                        yes

  OpenGL support:                     no
```

```
$ make
$ make install
$ popd
```

- [Little CMS](http://www.littlecms.com/) をインストールします．

<!-- $ curl -R -L -O http://sourceforge.net/projects/lcms/files/lcms/2.5/lcms2-2.5.tar.gz -->

```
$ curl -R -L -O http://download.sourceforge.net/lcms/lcms2-2.5.tar.gz
$ tar xvf lcms2-2.5.tar.gz
$ pushd lcms2-2.5
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [OpenJPEG](http://www.openjpeg.org/) をインストールします．

OpenJPEG 2.0.0 以降を使用して Poppler がビルドできない場合は OpenJPEG 1.5.1 をインストールしてください．<br>

OpenJPEG 最新版の場合

<!-- $ curl - -insecure -R -L -O https://openjpeg.googlecode.com/files/openjpeg-2.0.0.tar.gz -->
<!-- $ tar xvf openjpeg-2.0.0.tar.gz -->
<!-- $ pushd openjpeg-2.0.0 -->

```
$ svn checkout http://openjpeg.googlecode.com/svn/trunk/ openjpeg-read-only
$ pushd openjpeg-read-only
$ mkdir build
$ pushd build
```

<!-- $ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DBUILD_SHARED_LIBS:bool=on -DBUILD_CODEC:bool=on -DBUILD_MJ2:bool=on -DBUILD_JPWL:bool=on -DBUILD_JPIP_SERVER:bool=on -DBUILD_JP3D:bool=on -->

```
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DBUILD_SHARED_LIBS:bool=on -DBUILD_CODEC:bool=on -DBUILD_MJ2:bool=on -DBUILD_JPWL:bool=on -DUNIX:bool=on
$ make
$ make install
$ popd
$ popd
```

OpenJPEG 1.5.1 の場合

```
$ curl -R -L -O http://openjpeg.googlecode.com/files/openjpeg-1.5.1.tar.gz
$ tar xvf openjpeg-1.5.1.tar.gz
$ pushd openjpeg-1.5.1
$ ./configure --prefix=/mingw --enable-mj2 --enable-jpwl
$ make
$ make install
$ popd
```

- [FreeType](http://www.freetype.org/) をインストールします．

<!-- $ curl -R -L -O http://sourceforge.net/projects/freetype/files/freetype2/2.5.2/freetype-2.5.2.tar.bz2 -->

```
$ curl -R -L -O http://download.sourceforge.net/freetype/freetype-2.5.2.tar.bz2
$ tar xvf freetype-2.5.2.tar.bz2
$ pushd freetype-2.5.2
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [nkf](http://sourceforge.jp/projects/nkf/) をインストールします．

```
$ curl -R -L -O http://jaist.dl.sourceforge.jp/nkf/59912/nkf-2.1.3.tar.gz
$ tar xvf nkf-2.1.3.tar.gz
$ pushd nkf-2.1.3
$ make
$ make prefix=/mingw install
mkdir /mingw/bin
mkdir: cannot create directory `/mingw/bin': File exists
make: [install] Error 1 (ignored)
mkdir /mingw/man
mkdir: cannot create directory `/mingw/man': File exists
make: [install] Error 1 (ignored)
mkdir /mingw/man/man1
mkdir: cannot create directory `/mingw/man/man1': File exists
make: [install] Error 1 (ignored)
mkdir /mingw/man/ja
mkdir /mingw/man/ja/man1
cp -f nkf /mingw/bin/
cp -f nkf.1 /mingw/man/man1/
cp -f nkf.1j /mingw/man/ja/man1/nkf.1
```

エラーが表示されますがインストールされるので気にしないでください．

```
$ popd
```

- [libxml2](http://xmlsoft.org/) をインストールします．

```
$ curl -R -L -O ftp://xmlsoft.org/libxml2/libxml2-2.9.1.tar.gz
$ tar xvf libxml2-2.9.1.tar.gz
$ pushd libxml2-2.9.1
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

- [fontconfig](http://www.freedesktop.org/wiki/Software/fontconfig/) をインストールします．

```
$ curl -R -L -O http://www.freedesktop.org/software/fontconfig/release/fontconfig-2.11.0.tar.bz2
$ tar xvf fontconfig-2.11.0.tar.bz2
$ pushd fontconfig-2.11.0
$ ./configure --prefix=/mingw --enable-libxml2
$ make
$ make install
```

<!--  -->
<!-- /mingw/bin/fc-cache -s -f -v の実行で多少時間がかかります． -->
<!-- ... -->
<!--  /bin/install -c -m 644 ./fonts.conf /mingw/etc/fonts/fonts.conf -->
<!--  /mingw/bin/fc-cache -s -f -v -->
<!-- C:/Windows/fonts: caching, new cache contents: ??? fonts, ? dirs -->
<!-- ... -->
<!--  -->

```
$ popd
```

fc-match で Ryumin-Light と GothicBBB-Medium を確認します．

```
$ fc-match Ryumin-Light
mingliu.ttc: "MingLiU" "Regular"
$ fc-match GothicBBB-Medium
mingliu.ttc: "MingLiU" "Regular"
```

デフォルトでは日本語のフォントが埋め込まれていない PDF ファイルの明朝体とゴシック体が同じフォントで表示されてしまいます．<br>
そこで明朝体とゴシック体を適切に表示するため，C:\MinGW\etc\fonts\local.conf を作成して編集します．<br>
fc-list で MS Mincho と MS Gothic がリストに存在するかどうか確認します．<br>

```
$ fc-list | nkf -W8 -s | grep "MS Mincho"
C:/Windows/fonts/msmincho.ttc: MS Mincho,ＭＳ 明朝:style=Regular,標準
```

```
$ fc-list | nkf -W8 -s | grep "MS Gothic"
C:/Windows/fonts/msgothic.ttc: MS Gothic,ＭＳ ゴシック:style=Regular,標準
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

C:\MinGW\etc\fonts\fonts.conf の71行目に記述されている

```
<include ignore_missing="yes">/mingw/etc/fonts/conf.d</include>
```

の下に

```
<include ignore_missing="yes">local.conf</include>
```

を追加します．

fc-match で Ryumin-Light と GothicBBB-Medium を確認します．

```
$ fc-match Ryumin-Light
msmincho.ttc: "MS Mincho" "Regular"
$ fc-match GothicBBB-Medium
msgothic.ttc: "MS Gothic" "Regular"
```

- [pixman](http://cgit.freedesktop.org/pixman/) をインストールします．

```
$ curl -R -L -O http://cairographics.org/releases/pixman-0.32.4.tar.gz
$ tar xvf pixman-0.32.4.tar.gz
$ pushd pixman-0.32.4
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [cairo](http://www.cairographics.org/) をインストールします．

```
$ curl -R -L -O http://cairographics.org/releases/cairo-1.12.16.tar.xz
$ tar xvf cairo-1.12.16.tar.xz
$ pushd cairo-1.12.16
$ ./configure --prefix=/mingw
```

<!-- $ qt_CFLAGS="-IC:/Qt/4.8.5/include -IC:/Qt/4.8.5/include/QtCore -IC:/Qt/4.8.5/include/QtGui" qt_LIBS="-LC:/Qt/4.8.5/lib -lQtCore4 -LC:/Qt/4.8.5/lib -lQtGui4" ./configure - -prefix=/mingw - -enable-xml - -enable-qt -->

```

cairo (version 1.12.16 [release]) will be compiled with:

The following surface backends:
  Image:         yes (always builtin)
  Recording:     yes (always builtin)
  Observer:      yes (always builtin)
  Mime:          yes (always builtin)
  Tee:           no (disabled, use --enable-tee to enable)
  XML:           no (disabled, use --enable-xml to enable)
```

<!--   XML:           yes -->

```
  Skia:          no (disabled, use --enable-skia to enable)
  Xlib:          no (requires X development libraries)
  Xlib Xrender:  no (requires --enable-xlib)
  Qt:            no (disabled, use --enable-qt to enable)
```

<!--   Qt:            yes -->

```
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
cairo-missing.h:45:17: error: conflicting types for 'ssize_t'
```

[util/cairo-missing/cairo-missing.h](http://cgit.freedesktop.org/cairo/tree/util/cairo-missing/cairo-missing.h?id=1.12.16#n45) の 45行目にある

```
typedef SSIZE_T ssize_t;
```

をコメントアウトします．<br>

```
//typedef SSIZE_T ssize_t;
```

```
$ make install
$ popd
```

- [OpenSSL](http://www.openssl.org/) をインストールします．

```
$ curl -R -L -O http://www.openssl.org/source/openssl-1.0.1f.tar.gz
$ tar xvf openssl-1.0.1f.tar.gz
$ pushd openssl-1.0.1f
$ ./config --prefix=/mingw shared
$ make
$ make install
$ popd
```

<!-- -[[Libgcrypt:http://directory.fsf.org/wiki/Libgcrypt]] をインストールします． -->
<!--  -->
<!-- $ curl -R -L -O ftp://ftp.gnupg.org/gcrypt/libgpg-error/libgpg-error-1.10.tar.bz2 -->
<!-- $ tar xvf libgpg-error-1.10.tar.bz2 -->
<!-- $ pushd libgpg-error-1.10 -->
<!-- $ ./config - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->
<!-- $ curl -R -L -O ftp://ftp.gnupg.org/gcrypt/libgcrypt/libgcrypt-1.5.0.tar.bz2 -->
<!-- $ tar xvf libgcrypt-1.5.0.tar.bz2 -->
<!-- $ pushd libgcrypt-1.5.0 -->
<!-- $ ./config - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

- [libssh2](http://www.libssh2.org/) をインストールします．

```
$ curl -R -L -O http://www.libssh2.org/download/libssh2-1.4.3.tar.gz
$ tar xvf libssh2-1.4.3.tar.gz
$ pushd libssh2-1.4.3
$ ./configure --prefix=/mingw
```

```
  version:          1.4.3
  Host type:        i686-pc-mingw32
  Install prefix:   /mingw
  Compiler:         gcc
  Compiler flags:    -DLIBSSH2_WIN32
  Library types:    Shared=yes, Static=yes
  Crypto library:   openssl: yes (AES-CTR: no) libgcrypt: no
  Debug build:      no
  Build examples:   yes
  Path to sshd:      (only for self-tests)
  libz compression: yes
```

```
$ make
$ make install
$ popd
```

- [curl](http://curl.haxx.se/) をインストールします．

```
$ curl -R -L -O http://curl.haxx.se/download/curl-7.35.0.tar.bz2
$ tar xvf curl-7.35.0.tar.bz2
$ pushd curl-7.35.0
$ ./configure --prefix=/mingw
```

```
  curl version:     7.35.0
  Host setup:       i686-pc-mingw32
  Install prefix:   /mingw
  Compiler:         gcc
  SSL support:      enabled (OpenSSL)
  SSH support:      enabled (libSSH2)
  zlib support:     enabled
  krb4 support:     no      (--with-krb4*)
  GSSAPI support:   no      (--with-gssapi)
  SPNEGO support:   no      (--with-spnego)
  TLS-SRP support:  enabled
  resolver:         default (--enable-ares / --enable-threaded-resolver)
  ipv6 support:     no      (--enable-ipv6)
  IDN support:      no      (--with-{libidn,winidn})
  Build libcurl:    Shared=yes, Static=yes
  Built-in manual:  no      (--enable-manual)
  --libcurl option: enabled (--disable-libcurl-option)
  Verbose errors:   enabled (--disable-verbose)
  SSPI support:     no      (--enable-sspi)
  ca cert bundle:   no
  ca cert path:     no
  LDAP support:     enabled (winldap)
  LDAPS support:    enabled
  RTSP support:     enabled
  RTMP support:     no      (--with-librtmp)
  metalink support: no      (--with-libmetalink)
  Protocols:        DICT FILE FTP FTPS GOPHER HTTP HTTPS IMAP IMAPS LDAP LDAPS P
OP3 POP3S RTSP SCP SFTP SMTP SMTPS TELNET TFTP
```

```
$ make
$ make install
$ popd
```

- [libffi](http://sourceware.org/libffi/) をインストールします．<br>

```
$ curl -R -L -O ftp://sourceware.org/pub/libffi/libffi-3.0.13.tar.gz
$ tar xvf libffi-3.0.13.tar.gz
$ pushd libffi-3.0.13
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [GLib](https://developer.gnome.org/glib/) をインストールします．

```
$ curl --insecure -R -L -O https://download.gnome.org/sources/glib/2.39/glib-2.39.91.tar.xz
$ tar xvf glib-2.39.91.tar.xz
$ pushd glib-2.39.91
$ CFLAGS="-Wall -Ofast -march=native" ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

<!-- -[[GObject Introspection:https://wiki.gnome.org/GObjectIntrospection]] をインストールします． -->
<!--  -->
<!-- $ curl - -insecure -R -L -O https://download.gnome.org/sources/gobject-introspection/1.39/gobject-introspection-1.39.0.tar.xz -->
<!-- $ tar xvf gobject-introspection-1.39.0.tar.xz -->
<!-- $ pushd gobject-introspection-1.39.0 -->
<!-- $ ./configure - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

- [gettext](http://www.gnu.org/software/gettext/) をインストールします．

```
$ curl -R -L -O http://ftp.jaist.ac.jp/pub/GNU/gettext/gettext-0.18.3.2.tar.gz
$ tar xvf gettext-0.18.3.2.tar.gz
$ pushd gettext-0.18.3.2
$ ./configure --prefix=/mingw
```

<!--  -->
<!-- gettext-tools/gnulib-lib/wctype.in.h の344行目から360行目までをコメントアウトします． -->
<!-- //_GL_WCTYPE_INLINE wint_t -->
<!-- //rpl_towlower (wint_t wc) -->
<!-- //{ -->
<!-- //  return (wint_t) (wchar_t) towlower (wc); -->
<!-- //} -->
<!-- //#  if !(defined __cplusplus && defined GNULIB_NAMESPACE) -->
<!-- //#   define towlower rpl_towlower -->
<!-- //#  endif -->
<!-- //  -->
<!-- //_GL_WCTYPE_INLINE wint_t -->
<!-- //rpl_towupper (wint_t wc) -->
<!-- //{ -->
<!-- //  return (wint_t) (wchar_t) towupper (wc); -->
<!-- //} -->
<!-- //#  if !(defined __cplusplus && defined GNULIB_NAMESPACE) -->
<!-- //#   define towupper rpl_towupper -->
<!-- //#  endif -->
<!--  -->

```
$ make
$ make install
$ popd
```

- [pkg-config](http://www.freedesktop.org/wiki/Software/pkg-config) をインストールします．

```
$ curl -R -L -O http://pkgconfig.freedesktop.org/releases/pkg-config-0.28.tar.gz
$ tar xvf pkg-config-0.28.tar.gz
$ pushd pkg-config-0.28
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

<!-- gtk -->
<!--  -->
<!-- make[1]: Entering directory `gtk+-3.6.0/gtk' -->
<!--   CCLD     gtk-update-icon-cache.exe -->
<!-- ../libtool: line 9517: ./gtk-update-icon-cache.exe: Bad file number -->
<!-- このように表示される場合は管理者権限で MinGW Shell (MSYS) を実行してビルドしてください．~ -->

- [Poppler](http://poppler.freedesktop.org/) をインストールします．

```
Poppler は --with-font-configuration=win32 または -DFONT_CONFIGURATION=win32 でビルドすると日本語のフォントが埋め込まれていない PDF ファイルが MS-Mincho で表示されます．
ただし font configuration: win32 の場合 GothicBBB-Medium (ゴシック体) でも Ryumin-Light (明朝体) と同様 MS-Mincho で表示されます．
GothicBBB-Medium (ゴシック体) をきちんと表示したい場合は font configuration: fontconfig でビルドして fontconfig を適切に設定します．
configure の場合は --with-font-configuration=fontconfig で fontconfig を使用できます．
CMake の場合は -DFONT_CONFIGURATION=fontconfig で fontconfig を使用できます．
```

```
$ curl -R -L -O http://poppler.freedesktop.org/poppler-0.25.1.tar.xz
$ tar xvf poppler-0.25.1.tar.xz
$ pushd poppler-0.25.1
```

***

- configure で Makefile を作成してインストールする場合 ([pdf2htmlEX](/pdf2htmlEX/) をビルドする場合 Poppler は configure で Makefile を作成してインストールしてください)

<!-- ■ Qt 5 mingw バイナリをインストールした場合 -->

```
$ POPPLER_QT5_CFLAGS="-IC:/Qt/Qt5.2.0/5.2.0/mingw48_32/include" POPPLER_QT5_LIBS="-LC:/Qt/Qt5.2.0/5.2.0/mingw48_32/lib -lQt5Core -lQt5Gui -lQt5Xml -lQt5Widgets -lQt5Test" POPPLER_QT5_TEST_CFLAGS="-IC:/Qt/Qt5.2.0/5.2.0/mingw48_32/include" POPPLER_QT5_TEST_LIBS="-LC:/Qt/Qt5.2.0/5.2.0/mingw48_32/bin" LIBOPENJPEG_CFLAGS="`pkg-config --cflags libopenjp2`" LIBOPENJPEG_LIBS="`pkg-config --libs libopenjp2`" ./configure --prefix=/mingw --with-font-configuration=fontconfig --enable-xpdf-headers --enable-zlib --enable-libcurl --enable-poppler-glib --disable-gtk-test
```

<!-- goo/gfile.cc -->
<!-- #define _WIN32_WINNT 0x0501 -->
<!-- #include <windows.h> -->
<!-- を追加 -->

<!-- ■ Qt 4 mingw バイナリをインストールした場合 -->
<!--  -->
<!-- $ POPPLER_QT4_CFLAGS="-IC:/Qt/4.8.4/include" POPPLER_QT4_LIBS="-LC:/Qt/4.8.4/lib -lQtCore4 -lQtGui4 -lQtNetwork4 -lQtWebKit4 -lQtXml4 -lQtXmlPatterns4" POPPLER_QT4_TEST_CFLAGS="-IC:/Qt/4.8.4/include" POPPLER_QT4_TEST_LIBS="-LC:/Qt/4.8.4/bin" LIBOPENJPEG_CFLAGS="`pkg-config - -cflags libopenjp2`" LIBOPENJPEG_LIBS="`pkg-config - -libs libopenjp2`" ./configure - -prefix=/mingw - -with-font-configuration=fontconfig - -enable-xpdf-headers - -enable-zlib - -enable-libcurl - -enable-poppler-glib - -disable-gtk-test -->

```
Building poppler with support for:
  font configuration: fontconfig
  splash output:      yes
  cairo output:       yes
  qt4 wrapper:        no
  qt5 wrapper:        yes
  glib wrapper:       yes
    introspection:    no
  cpp wrapper:        yes
  use gtk-doc:        no
  use libjpeg:        yes
  use libpng:         yes
  use libtiff:        yes
  use zlib:           yes
  use libcurl:        yes
  use libopenjpeg:    yes
  use cms:            yes
      with lcms2
  command line utils: yes
  test data dir:

  Warning: Using zlib is not totally safe
```

```
$ make
$ make install
```

***

- CMake で Makefile を作成してインストールする場合<br>CMake で Makefile を作成した場合は poppler.pc などがインストールされないようです

```
$ mkdir build
$ pushd build
```

<!-- $ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DFONT_CONFIGURATION=fontconfig -DENABLE_XPDF_HEADERS=ON -DENABLE_ZLIB=ON -DZLIB_LIBRARY=C:/MinGW/bin/zlib1.dll -DENABLE_LIBOPENJPEG=ON -DENABLE_LIBCURL=ON -DLIBOPENJPEG_INCLUDE_DIR=C:/MinGW/include/openjpeg-2.0 -DLIBOPENJPEG_LIBRARIES=C:/MinGW/bin/libopenjp2.dll -->

```
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DFONT_CONFIGURATION=fontconfig -DENABLE_XPDF_HEADERS=ON -DENABLE_ZLIB=ON -DZLIB_LIBRARY=C:/MinGW/bin/zlib1.dll -DENABLE_LIBCURL=ON -DLIBOPENJPEG_INCLUDE_DIR=C:/MinGW/include/openjpeg-2.0 -DLIBOPENJPEG_LIBRARIES=C:/MinGW/bin/libopenjp2.dll
```

```
Building Poppler with support for:
  font configuration:   fontconfig
  splash output:        yes
  cairo output:         yes
  qt4 wrapper:          no
  qt5 wrapper:          yes
  glib wrapper:         yes
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
```

***

```
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

日本語の PDF ファイルを表示できるようにするため，poppler-data を適切な場所に配置します．

poppler-data を C:\MinGW\share にコピーします．

```
$ curl -R -L -O http://poppler.freedesktop.org/poppler-data-0.4.6.tar.gz
$ tar xvf poppler-data-0.4.6.tar.gz
$ cp -pR poppler-data-0.4.6 /mingw/share/poppler
```

### OS X {#l3620b9b}

- [homebrew / Library / Formula / poppler.rb](https://github.com/mxcl/homebrew/blob/master/Library/Formula/poppler.rb)
- [/trunk/dports/graphics/poppler/Portfile](https://trac.macports.org/browser/trunk/dports/graphics/poppler/Portfile)

### Linux {#k603e696}

- fontconfig
    - [http://www.linuxfromscratch.org/blfs/view/svn/general/fontconfig.html](http://www.linuxfromscratch.org/blfs/view/svn/general/fontconfig.html)
    - [http://lfsbookja.sourceforge.jp/BLFS/svn.ja/general/fontconfig.html](http://lfsbookja.sourceforge.jp/BLFS/svn.ja/general/fontconfig.html)
- Poppler
    - [http://www.linuxfromscratch.org/blfs/view/svn/general/poppler.html](http://www.linuxfromscratch.org/blfs/view/svn/general/poppler.html)
    - [http://lfsbookja.sourceforge.jp/BLFS/svn.ja/general/poppler.html](http://lfsbookja.sourceforge.jp/BLFS/svn.ja/general/poppler.html)

## 関連リンク {#m3ac74dd}

- [Poppler: Displaying PDF Files with Qt](http://doc.qt.digia.com/qq/qq27-poppler.html)
- [Poppler - DenkiYagi](http://terurou.hateblo.jp/category/Poppler)
    - [Poppler 0.22.5の.NETバインディングを作成する](http://terurou.hateblo.jp/entry/2013/07/09/160937)
    - [MinGWでPoppler 0.22.5をビルド](http://terurou.hateblo.jp/entry/2013/07/09/160937)
- [PDF Rendering on the Web](http://syntensity.com/static/poppler.html)
- [Popplerについてちょっとだけ](http://d.hatena.ne.jp/naruoga/20130112/1358002227)
- [pdfgrepでPDFをgrepする](http://emasaka.blog65.fc2.com/blog-entry-1010.html)
- [poppler on Windows 奮闘記](https://sites.google.com/site/kaihatsublog/poppler-on-windows-funtou-ki)
- [poppler 0.18.1 ビルド奮闘記](https://sites.google.com/site/poppler0181builder/)
