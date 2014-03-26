---
title: "Poppler"
url: "/Poppler/"
date: 2013-08-26T08:13:06Z
pukiwiki: "Poppler"
---

# Poppler

## [Poppler](http://poppler.freedesktop.org/) {#c1f030c4}

<img src="http://poppler.freedesktop.org/logo.png" alt="poppler" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#fd295383}

Poppler is a library used to render PDF documents.<br>

Programs using Poppler.<br>

<table>
<tbody>
<tr><th style="color:#468">LaTeX editor</th><td style="color:#468;background-color:#DDD"><a href="/TeXstudio/">TeXstudio</a>, <a href="/Texmaker/">Texmaker</a>, <a href="/TeXworks/">TeXworks</a></td></tr>
<tr><th style="color:#468">PDF viewer</th><td style="color:#468;background-color:#DDD"><a href="/Evince/">Evince</a>, <a href="/Okular/">Okular</a>, <a href="/zathura/">zathura</a>, <a href="/qpdfview/">qpdfview</a></td></tr>
</tbody>
</table>

- [Poppler](http://poppler.freedesktop.org/)
- [The poppler Archives](http://lists.freedesktop.org/archives/poppler/)

### License {#i424d155}

[GPLv3](http://cgit.freedesktop.org/poppler/poppler/tree/COPYING3), [GPLv2](http://cgit.freedesktop.org/poppler/poppler/tree/COPYING)

### ChangeLog {#u62118c7}

- [poppler/poppler - The poppler pdf rendering library](http://cgit.freedesktop.org/poppler/poppler)
    - [http://cgit.freedesktop.org/poppler/poppler/refs/tags](http://cgit.freedesktop.org/poppler/poppler/refs/tags)
    - [http://cgit.freedesktop.org/poppler/poppler/log/](http://cgit.freedesktop.org/poppler/poppler/log/)

### font configuration {#e532ec53}

Poppler は font configuration で win32 を選択した場合，日本語のフォントを埋め込んでいない PDF ファイルは MS-Mincho で表示されます．<br>
ただし font configuration が win32 の場合 GothicBBB-Medium (ゴシック体) でも Ryumin-Light (明朝体) と同様 MS-Mincho で表示されます．<br>
GothicBBB-Medium (ゴシック体) をきちんと表示したい場合は font configuration を fontconfig でビルドして fontconfig を適切に設定します．<br>

## Installation {#e0d6f40b}

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
    <!-- - -gettext-runtime の Run-time -->
    - pkg-config の Tool

をダウンロードして，展開後 bin フォルダーにある

- gspawn-win32-helper.exe
    - gspawn-win32-helper-console.exe
    - libgio-2.0-0.dll
    - libglib-2.0-0.dll
    - libgmodule-2.0-0.dll
    - libgobject-2.0-0.dll
    - libgthread-2.0-0.dll
        <!-- - -libintl-8.dll -->
    - pkg-config.exe

を C:\MinGW\bin にコピーします．

- Install [Python](/Python/).

- Run MinGW Shell (MSYS).

<!-- [[mingw-and-ndk:https://code.google.com/p/mingw-and-ndk/]] のページから [[Python]] の MinGW バイナリ ([[python-mingw.7z:https://code.google.com/p/mingw-and-ndk/downloads/detail?name=python-mingw.7z]]) をダウンロードしてインストールします．~ -->
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

- Install zlib.

- Install CMake.

- Install libpng.

- Install libjpeg.

- Install XZ Utils.

- Install LibTIFF.

- Install Little CMS.

- Install OpenJPEG.

- Install FreeType.

- Install [nkf](/nkf/).

- Install libxml2.

- Install [Fontconfig](/Fontconfig/).

- Install cairo.

- Install OpenSSL.

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

- Install libssh2.

- Install cURL.

- Install libffi.

- Install GLib.

- Install [Poppler](http://poppler.freedesktop.org/).

```
Poppler は --with-font-configuration=win32 または -DFONT_CONFIGURATION=win32 でビルドすると日本語のフォントが埋め込まれていない PDF ファイルが MS-Mincho で表示されます．
ただし font configuration: win32 の場合 GothicBBB-Medium (ゴシック体) でも Ryumin-Light (明朝体) と同様 MS-Mincho で表示されます．
GothicBBB-Medium (ゴシック体) をきちんと表示したい場合は font configuration: fontconfig でビルドして fontconfig を適切に設定します．
configure の場合は --with-font-configuration=fontconfig で fontconfig を使用できます．
CMake の場合は -DFONT_CONFIGURATION=fontconfig で fontconfig を使用できます．
```

```
$ curl -R -L -O http://poppler.freedesktop.org/poppler-0.25.2.tar.xz
$ tar xvf poppler-0.25.2.tar.xz
$ pushd poppler-0.25.2
```

***

- configure で Makefile を作成してインストールする場合 ([pdf2htmlEX](/pdf2htmlEX/) をビルドする場合 Poppler は configure で Makefile を作成してインストールしてください)

<!-- ■ Qt 5 mingw バイナリをインストールした場合 -->

```
$ POPPLER_QT5_CFLAGS="-IC:/Qt/Qt5.3.0/5.3.0/mingw48_32/include" POPPLER_QT5_LIBS="-LC:/Qt/Qt5.3.0/5.3.0/mingw48_32/lib -lQt5Core -lQt5Gui -lQt5Xml -lQt5Widgets -lQt5Test" POPPLER_QT5_TEST_CFLAGS="-IC:/Qt/Qt5.3.0/5.3.0/mingw48_32/include" POPPLER_QT5_TEST_LIBS="-LC:/Qt/Qt5.3.0/5.3.0/mingw48_32/bin" LIBOPENJPEG_CFLAGS="`pkg-config --cflags libopenjp2`" LIBOPENJPEG_LIBS="`pkg-config --libs libopenjp2`" ./configure --prefix=/mingw --with-font-configuration=fontconfig --enable-xpdf-headers --enable-zlib --enable-libcurl --enable-poppler-glib --disable-gtk-test
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
