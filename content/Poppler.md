---
title: "Poppler"
url: "/Poppler/"
date: 2013-08-26T08:13:06Z
pukiwiki: "Poppler"
---

# Poppler

## [Poppler](http://poppler.freedesktop.org/) → 問題が発生する場合は [MuPDF](/MuPDF/) を使用する {#c1f030c4}

<img src="http://poppler.freedesktop.org/logo.png" alt="poppler" style="float:right">

<!-- インストールの項より下は，もう少し見やすくならないでしょうか… -->

<strong>目次</strong>

## Poppler とは {#u238ad2e}

Poppler は，PDF ドキュメントのレンダリングに利用されるライブラリで，ベースとなった
[Xpdf](/Xpdf/) に比べてレンダリングが向上されています．
以下のプログラムが Poppler を使用しています．

- LaTeX editor: [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), TexitEasy
- PDF viewer: [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/) (zathura-pdf-poppler), [qpdfview](/qpdfview/) (pdf-plugin)

### 公式サイト {#fd295383}

- [Poppler](http://poppler.freedesktop.org/)
- [The poppler Archives](http://lists.freedesktop.org/archives/poppler/)

### License {#i424d155}

[GPLv3](http://cgit.freedesktop.org/poppler/poppler/tree/COPYING3), [GPLv2](http://cgit.freedesktop.org/poppler/poppler/tree/COPYING)

### ChangeLog {#u62118c7}

- [poppler/poppler - The poppler pdf rendering library](http://cgit.freedesktop.org/poppler/poppler)
    - [http://cgit.freedesktop.org/poppler/poppler/refs/tags](http://cgit.freedesktop.org/poppler/poppler/refs/tags)
    - [http://cgit.freedesktop.org/poppler/poppler/log/](http://cgit.freedesktop.org/poppler/poppler/log/)

### font configuration {#e532ec53}

Poppler は font configuration で win32 を選択した場合，日本語のフォントを埋め込んでいない PDF ファイルは MS-Mincho で表示されます．
ただし font configuration が win32 の場合 GothicBBB-Medium (ゴシック体) でも Ryumin-Light (明朝体) と同様 MS-Mincho で表示されます．
GothicBBB-Medium (ゴシック体) をきちんと表示したい場合は font configuration を fontconfig でビルドして fontconfig を適切に設定します．

### Bug {#nbe31c73}

- [poppler does not show fl ligature](https://bugs.freedesktop.org/show_bug.cgi?id=73291) -> Fixed

## インストール {#e0d6f40b}

### Windows {#o45a1c30}

#### MinGW {#x2d1044d}

TeX Live を使用している場合は [http://curl.haxx.se/download.html#Win32](http://curl.haxx.se/download.html#Win32) から curl の Windows バイナリをダウンロードして環境変数 PATH に curl.exe が存在するフォルダーを追加してください．<br>
W32TeX を使用している場合は curl が W32TeX に含まれているのでダウンロードする必要はありません．<br>
sed, grep, sort, uniq は MinGW だけではなく W32TeX にも含まれています．<br>

- [MinGW](/MinGW/) をフルインストールします．

<!-- -[[Git for Windows:http://msysgit.github.io/]] をダウンロードして展開し，bin フォルダー (git.exe のあるフォルダー) に PATH を通します． -->

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

- Install [Qt](/Qt/).

- Install [Python](/Python/).

- Run MinGW Shell (MSYS).

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

- Install [Fontconfig](/Fontconfig/).

- Install cairo.

- Install cURL.

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
$ curl -R -L -O http://poppler.freedesktop.org/poppler-0.32.0.tar.xz
$ tar xvf poppler-0.32.0.tar.xz
$ pushd poppler-0.32.0
```

***

- configure で Makefile を作成してインストールする場合 ([pdf2htmlEX](/pdf2htmlEX/) をビルドする場合 Poppler は configure で Makefile を作成してインストールしてください)

```
$ POPPLER_QT5_CFLAGS="-IC:/Qt/Qt5.4.1/5.4/mingw491_32/include" POPPLER_QT5_LIBS="-LC:/Qt/Qt5.4.1/5.4/mingw491_32/lib -lQt5Core -lQt5Gui -lQt5Xml -lQt5Widgets -lQt5Test" POPPLER_QT5_TEST_CFLAGS="-IC:/Qt/Qt5.4.1/5.4/mingw491_32/include" POPPLER_QT5_TEST_LIBS="-LC:/Qt/Qt5.4.1/5.4/mingw491_32/bin" LIBOPENJPEG_CFLAGS="`pkg-config --cflags libopenjp2`" LIBOPENJPEG_LIBS="`pkg-config --libs libopenjp2`" ./configure --prefix=/mingw --with-font-configuration=fontconfig --enable-xpdf-headers --enable-zlib --enable-libcurl --enable-poppler-glib --disable-gtk-test
```

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
$ curl -R -L -O http://poppler.freedesktop.org/poppler-data-0.4.7.tar.gz
$ tar xvf poppler-data-0.4.7.tar.gz
$ cp -pR poppler-data-0.4.7 /mingw/share/poppler
```

### OS X {#l3620b9b}

#### MacPorts を利用したインストール {#t1b53491}

poppler という名前の Port をインストールします。variants は universal のみです。

```
$ sudo port install poppler
```

poppler をインストールすると下記の便利なコマンドが使えます。

```
$ port contents poppler | grep /bin
  /opt/local/bin/pdfdetach
  /opt/local/bin/pdffonts
  /opt/local/bin/pdfimages
  /opt/local/bin/pdfinfo
  /opt/local/bin/pdfseparate
  /opt/local/bin/pdftocairo
  /opt/local/bin/pdftohtml
  /opt/local/bin/pdftoppm
  /opt/local/bin/pdftops
  /opt/local/bin/pdftotext
  /opt/local/bin/pdfunite
```

なお，[Xpdf](/Xpdf/) 関連の Port（具体的には xpdf-tools と pdftohtml が該当）がインストールされていると衝突してインストールできなくなります。Poppler をインストールしたい場合は，xpdf-tools と pdftohtml をアンインストールしてください。

- [homebrew / Library / Formula / poppler.rb](https://github.com/mxcl/homebrew/blob/master/Library/Formula/poppler.rb)
- [/trunk/dports/graphics/poppler/Portfile](https://trac.macports.org/browser/trunk/dports/graphics/poppler/Portfile)

### Linux {#k603e696}

#### Debian/Ubuntu {#p084e73d}

DebianやUbuntuではpopplerライブラリはlibpoppler44という名前だったり、libpoppler46という名前だったりします。poppler-utilsをインストールすれば、依存関係で適宜判断されますので、poppler-utilsをインストールします。日本語を使う場合はpoppler-dataも必要です。

```
$ sudo apt-get install poppler-utils poppler-data
```

- fontconfig
    - [http://www.linuxfromscratch.org/blfs/view/svn/general/fontconfig.html](http://www.linuxfromscratch.org/blfs/view/svn/general/fontconfig.html)
    - [http://lfsbookja.osdn.jp/BLFS/svn.ja/general/fontconfig.html](http://lfsbookja.osdn.jp/BLFS/svn.ja/general/fontconfig.html)
- Poppler
    - [http://www.linuxfromscratch.org/blfs/view/svn/general/poppler.html](http://www.linuxfromscratch.org/blfs/view/svn/general/poppler.html)
    - [http://lfsbookja.osdn.jp/BLFS/svn.ja/general/poppler.html](http://lfsbookja.osdn.jp/BLFS/svn.ja/general/poppler.html)

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
