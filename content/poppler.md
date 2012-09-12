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
poppler は [TeXworks](/TeXworks/), [Texmaker](/Texmaker/), [Kile](/Kile/), Gummi などで使用されています．<br>

- [poppler](http://poppler.freedesktop.org/)
    - [repository](http://cgit.freedesktop.org/poppler/poppler)

### リリース情報 {#ha3b28ab}

2012-09-10 poppler 0.20.4<br>

poppler 0.19.2 で font configuration で win32 を選択した場合，日本語のフォントを埋め込んでいない PDF ファイルは MS-Mincho で表示されるようになりました<br>

- [Bug 48046 &ndash; ttc&lt;-&gt;ttf fallback is expected for CJK font list in GlobalParamsWin.cc](https://bugs.freedesktop.org/show_bug.cgi?id=48046)
- \[[Bug 48046\] New: ttc&lt;-&gt;ttf fallback is expected for CJK font list in GlobalParamsWin.cc - poppler-bugs.lists.freedesktop.org - ArchiveOrange](http://web.archiveorange.com/archive/v/RybTrzJz0TKVhTDfV9z3)
- [ttc&lt;->ttf fallback is expected for CJK font list in GlobalParamsWin.cc](http://cgit.freedesktop.org/poppler/poppler/commit/?id=f5b708c3e04ba50756cd9f9530cf82f547443ce9)
- [per-collection fallback for missing CID-keyed fonts on Win32](http://cgit.freedesktop.org/poppler/poppler/commit/?id=4a38d933d06d189317b1b9028c3fa4ae2a1551af)
- [CJK improvements](http://cgit.freedesktop.org/poppler/poppler/commit/?id=55d039ada063a9427de6dd59846ce1570ab26e9f)
- [CJK substitute implementation on WIndows platforms.](http://cgit.freedesktop.org/poppler/poppler/commit/?id=dae29c6c201cd69cbf4f008de865cc19a36f29b3)
- [Improve CJK suport in PSOutputDev](http://cgit.freedesktop.org/poppler/poppler/commit/?id=32e47ee03840cc8f21c00497025864d77edb75f5)

## インストール {#e0d6f40b}

### Windows {#o45a1c30}

#### MinGW {#x2d1044d}

TeX Live を使用している場合は [http://curl.haxx.se/download.html#Win32](http://curl.haxx.se/download.html#Win32) から curl の Windows バイナリをダウンロードして curl.exe に PATH を通してください．<br>
W32TeX を使用している場合は curl が W32TeX に含まれているのでダウンロードする必要はありません．<br>
sed, grep, sort, uniq は MinGW だけではなく W32TeX にも含まれています．<br>

- [MinGW](http://www.mingw.org/) のサイトから [mingw-get-inst の最新版](http://sourceforge.net/projects/mingw/files/Installer/mingw-get-inst/) をダウンロードし，フルインストールします．

<!-- -http://get.qt.nokia.com/qt/source/ から最新版の Qt mingw バイナリ をダウンロードしてインストールします．インストール後，C:\Qt\4.8.1\bin (C:\Qt\インストールしたQtのバージョン\bin) に PATH を通します． -->
- [http://releases.qt-project.org/qt4/source/](http://releases.qt-project.org/qt4/source/) から最新版の Qt mingw バイナリ をダウンロードしてインストールします．インストール後，C:\Qt\4.8.2\bin (C:\Qt\インストールしたQtのバージョン\bin) に PATH を通します．
    <!-- -http://releases.qt-project.org/qt5.0/ -->

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
$ curl -R -L -O http://zlib.net/zlib-1.2.7.tar.gz
$ tar zxvf zlib-1.2.7.tar.gz
$ pushd zlib-1.2.7
$ make -f win32/Makefile.gcc BINARY_PATH=/mingw/bin INCLUDE_PATH=/mingw/include LIBRARY_PATH=/mingw/lib SHARED_MODE=1 install
$ popd
```

- [CMake](http://www.cmake.org/) をインストールします．

```
$ curl -R -L -O http://www.cmake.org/files/v2.8/cmake-2.8.9.tar.gz
$ tar zxvf cmake-2.8.9.tar.gz
$ pushd cmake-2.8.9
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

<!-- $ curl -R -L -O http://sourceforge.net/projects/libpng/files/libpng15/1.5.12/libpng-1.5.12.tar.xz -->

```
$ curl -R -L -O http://download.sourceforge.net/libpng/libpng-1.5.12.tar.xz
$ tar Jxvf libpng-1.5.12.tar.xz
$ pushd libpng-1.5.12
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

<!-- $ curl -R -L -O http://sourceforge.net/projects/libpng/files/libpng15/1.5.12/libpng-1.5.12.tar.xz -->
<!-- $ tar Jxvf libpng-1.5.12.tar.xz -->
<!-- $ pushd libpng-1.5.12 -->
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
$ curl -R -L -O ftp://ftp.remotesensing.org/pub/libtiff/tiff-4.0.2.tar.gz
$ tar zxvf tiff-4.0.2.tar.gz
$ pushd tiff-4.0.2
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [Little CMS](http://www.littlecms.com/) をインストールします．

<!-- $ curl -R -L -O http://sourceforge.net/projects/lcms/files/lcms/2.4/lcms2-2.4.tar.gz -->

```
$ curl -R -L -O http://download.sourceforge.net/lcms/lcms2-2.4.tar.gz
$ tar zxvf lcms2-2.4.tar.gz
$ pushd lcms2-2.4
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

<!-- $ curl -R -L -O http://sourceforge.net/projects/freetype/files/freetype2/2.4.10/freetype-2.4.10.tar.bz2 -->

```
$ curl -R -L -O http://download.sourceforge.net/freetype/freetype-2.4.10.tar.bz2
$ tar jxvf freetype-2.4.10.tar.bz2
$ pushd freetype-2.4.10
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [nkf](http://sourceforge.jp/projects/nkf/) をインストールします．

```
$ curl -R -L -O http://jaist.dl.sourceforge.jp/nkf/53171/nkf-2.1.2.tar.gz
$ tar zxvf nkf-2.1.2.tar.gz
$ pushd nkf-2.1.2
```

Makefile の

```
prefix = /usr/local
```

を

```
prefix = /mingw
```

に変更します．

```
$ make
$ make install
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
$ curl -R -L -O ftp://xmlsoft.org/libxml2/libxml2-2.8.0.tar.gz
$ tar zxvf libxml2-2.8.0.tar.gz
```

<!-- $ curl -R -L -O ftp://xmlsoft.org/libxml2/libxml2-git-snapshot.tar.gz -->
<!-- $ tar zxvf libxml2-git-snapshot.tar.gz -->

```
$ pushd libxml2-2.8.0
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

<!-- fontconfig のインストールでエラーが発生する場合は [[fontconfig のインストールについて:http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=732]] を参照してください． -->
<!--  -->

```
$ curl -R -L -O http://www.freedesktop.org/software/fontconfig/release/fontconfig-2.10.1.tar.gz
$ tar zxvf fontconfig-2.10.1.tar.gz
$ pushd fontconfig-2.10.1
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
Vera.ttf: "Bitstream Vera Sans" "Roman"
$ fc-match GothicBBB-Medium
Vera.ttf: "Bitstream Vera Sans" "Roman"
```

デフォルトでは日本語のフォントが埋め込まれていない PDF ファイルの明朝体は，すべてゴシック体で表示されてしまいます．<br>
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

fc-match で Ryumin-Light と GothicBBB-Medium を確認します．

```
$ fc-match Ryumin-Light
msmincho.ttc: "MS Mincho" "Regular"
$ fc-match GothicBBB-Medium
msgothic.ttc: "MS Gothic" "Regular"
```

上記のように表示されない場合は C:\MinGW\etc\fonts\fonts.conf に

```
<include>local.conf</include>
```

を記述してください．

- [pixman](http://cgit.freedesktop.org/pixman/) をインストールします．

```
$ curl -R -L -O http://cairographics.org/releases/pixman-0.26.2.tar.gz
$ tar zxvf pixman-0.26.2.tar.gz
$ pushd pixman-0.26.2
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- [cairo](http://www.cairographics.org/) をインストールします．

```
$ curl -R -L -O http://cairographics.org/releases/cairo-1.12.2.tar.xz
$ tar Jxvf cairo-1.12.2.tar.xz
$ pushd cairo-1.12.2
$ ./configure --prefix=/mingw

cairo (version 1.12.2 [release]) will be compiled with:

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
cairo-missing.h:45:17: error: conflicting types for 'ssize_t'
```

[cairo-1.12.2/util/cairo-missing/cairo-missing.h](http://cgit.freedesktop.org/cairo/tree/util/cairo-missing/cairo-missing.h?id=1.12.2) の 45行目にある

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
$ curl -R -L -O http://www.openssl.org/source/openssl-1.0.1c.tar.gz
$ tar zxvf openssl-1.0.1c.tar.gz
$ pushd openssl-1.0.1c
$ ./config --prefix=/mingw shared
$ make
$ make install
$ popd
```

<!-- -[[Libgcrypt:http://directory.fsf.org/wiki/Libgcrypt]] をインストールします． -->
<!--  -->
<!-- $ curl -R -L -O ftp://ftp.gnupg.org/gcrypt/libgpg-error/libgpg-error-1.10.tar.bz2 -->
<!-- $ tar jxvf libgpg-error-1.10.tar.bz2 -->
<!-- $ pushd libgpg-error-1.10 -->
<!-- $ ./config - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->
<!-- $ curl -R -L -O ftp://ftp.gnupg.org/gcrypt/libgcrypt/libgcrypt-1.5.0.tar.bz2 -->
<!-- $ tar jxvf libgcrypt-1.5.0.tar.bz2 -->
<!-- $ pushd libgcrypt-1.5.0 -->
<!-- $ ./config - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

- [libssh2](http://www.libssh2.org/) をインストールします．

```
$ curl -R -L -O http://www.libssh2.org/download/libssh2-1.4.2.tar.gz
$ tar zxvf libssh2-1.4.2.tar.gz
$ pushd libssh2-1.4.2
$ ./configure --prefix=/mingw
```

```
  version:          1.4.2
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
$ curl -R -L -O http://curl.haxx.se/download/curl-7.27.0.tar.bz2
$ tar jxvf curl-7.27.0.tar.bz2
$ pushd curl-7.27.0
$ ./configure --prefix=/mingw
```

```
  curl version:     7.27.0
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
OP3 POP3S RTSP SMTP SMTPS TELNET TFTP
```

```
$ make
$ make install
$ popd
```

- [poppler](http://poppler.freedesktop.org/) をインストールします．

```
configure の場合は --with-font-configuration=fontconfig で fontconfig にリンクするようにすると日本語のフォントが埋め込まれていない PDF ファイルでも日本語が表示できるようになります．
CMake の場合は -DFONT_CONFIGURATION=fontconfig で fontconfig にリンクするようにすると日本語のフォントが埋め込まれていない PDF ファイルでも日本語が表示できるようになります．
poppler 0.19.2 で --with-font-configuration=win32 または -DFONT_CONFIGURATION=win32 でビルドしても日本語のフォントが埋め込まれていない PDF ファイルが MS-Mincho で表示できるようになりました．
ただし font configuration: win32 の場合 GothicBBB-Medium (ゴシック体) でも Ryumin-Light (明朝体) と同様 MS-Mincho で表示されます．
GothicBBB-Medium (ゴシック体) をきちんと表示したい場合は font configuration: fontconfig でビルドして fontconfig を適切に設定することをおすすめします．
```

```
$ curl -R -L -O http://poppler.freedesktop.org/poppler-0.20.4.tar.gz
$ tar zxvf poppler-0.20.4.tar.gz
$ pushd poppler-0.20.4
```

***

- configure で Makefile を作成してインストールする場合 ([pdf2htmlEX](/pdf2htmlEX/) をビルドする場合 poppler は configure で Makefile を作成してインストールしてください)

```
$ POPPLER_QT4_CFLAGS="-IC:/Qt/4.8.2/include" POPPLER_QT4_LIBS="-LC:/Qt/4.8.2/lib -lQtCore4 -lQtGui4 -lQtNetwork4 -lQtWebKit4 -lQtXml4 -lQtXmlPatterns4" POPPLER_QT4_TEST_CFLAGS="-IC:/Qt/4.8.2/include" POPPLER_QT4_TEST_LIBS="-LC:/Qt/4.8.2/bin" ./configure --prefix=/mingw --with-font-configuration=fontconfig --enable-xpdf-headers --enable-zlib --enable-libcurl
```

```
Building poppler with support for:
  font configuration: fontconfig
  splash output:      yes
  cairo output:       yes
  qt4 wrapper:        yes
  glib wrapper:       no
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

- CMake で Makefile を作成してインストールする場合

```
$ mkdir build
$ pushd build
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

- W32TeX の場合

W32TeX の poppler-data (C:\w32tex\share\texworks\share\poppler) を C:\MinGW\share にコピーします．

```
$ cp -pR /c/w32tex/share/texworks/share/poppler/ /mingw/share/poppler
```

***

```
C:.
├─w32tex
│  └─share
│      └─texworks
│          └─share
│              └─poppler
└─MinGW
    └─share
        └─poppler
```

***

- TeX Live の場合

TeX Live の poppler-data (C:\texlive\2012\tlpkg\texworks\share\poppler) を C:\MinGW\share にコピーします．

```
$ cp -pR /c/texlive/2012/tlpkg/texworks/share/poppler/ /mingw/share/poppler
```

***

```
C:.
├─texlive
│  └─2012
│      └─tlpkg
│          └─texworks
│              └─share
│                  └─poppler
└─MinGW
    └─share
        └─poppler
```

***

### Linux {#k603e696}

- [http://www.linuxfromscratch.org/blfs/view/svn/general/poppler.html](http://www.linuxfromscratch.org/blfs/view/svn/general/poppler.html)
- [http://lfsbookja.sourceforge.jp/BLFS/svn.ja/general/poppler.html](http://lfsbookja.sourceforge.jp/BLFS/svn.ja/general/poppler.html)

## 関連リンク {#m3ac74dd}

- [Index of /repositories/windows:/mingw:/win32/openSUSE_Factory/noarch](http://download.opensuse.org/repositories/windows:/mingw:/win32/openSUSE_Factory/noarch/)
- [Where can I download precompiled GTK+ 3 binaries or windows installer?](http://stackoverflow.com/questions/6006689/where-can-i-download-precompiled-gtk-3-binaries-or-windows-installer)
- [PDF Rendering on the Web](http://syntensity.com/static/poppler.html)
- [pdfgrepでPDFをgrepする](http://emasaka.blog65.fc2.com/blog-entry-1010.html)
- [popplerでPDFを画像に変換すると日本語フォントが抜ける話](http://nanatomo.com/program/744)
- [poppler on Windows 奮闘記](https://sites.google.com/site/kaihatsublog/poppler-on-windows-funtou-ki)
- [poppler 0.18.1 ビルド奮闘記](https://sites.google.com/site/poppler0181builder/)
- [片っ端から忘れていけばいいじゃない。 mingw](http://0xc000013a.blog96.fc2.com/?tag=mingw)
