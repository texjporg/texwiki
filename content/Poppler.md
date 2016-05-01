---
title: "Poppler"
url: "/Poppler/"
date: 2013-08-26T08:13:06Z
pukiwiki: "Poppler"
---

# Poppler

## [Poppler](https://poppler.freedesktop.org/) --- PDF ビューア・操作ツール {#c1f030c4}

Poppler は，PDF ドキュメントのレンダリングに利用されるライブラリで，ベースとなった [Xpdf](/Xpdf/) に比べてレンダリングが向上されています。
ビューアとして Poppler を使用して問題が発生する場合は [MuPDF](/MuPDF/) を使用することを検討してください。
以下のプログラムが PDF ビューアとして Poppler を使用しています。

- LaTeX editor: [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), TexitEasy
- PDF viewer: [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/) (zathura-pdf-poppler), [qpdfview](/qpdfview/) (pdf-plugin)

また，Xpdf と同様に PDF ユーティリティとしても有用です。

<!-- インストールの項より下は，もう少し見やすくならないでしょうか… -->

***

***

### 公式サイト {#fd295383}

- [Poppler](https://poppler.freedesktop.org/)
- [The poppler Archives](https://lists.freedesktop.org/archives/poppler/)

### インストール {#tafa7455}

#### Windows {#v190b38b}

[Poppler for Windows](http://blog.alivate.com.au/poppler-windows/) から，ビルド済みの Poppler のユーティリティ類を入手することができます。
以下が利用できます：

- pdfdetach, pdffonts, pdfimages, pdfinfo, pdfseparate, pdftocairo, pdftohtml, pdftoppm, pdftops, pdftotext, pdfunite

MSYS2 の pacman でインストールすることもできます。

64-bit Poppler の場合は

```
pacman -S mingw-w64-x86_64-poppler mingw-w64-x86_64-poppler-data
```

32-bit Poppler の場合は

```
pacman -S mingw-w64-i686-poppler mingw-w64-i686-poppler-data
```

#### OS X {#l3620b9b}

MacPorts を利用したインストールが可能です。
poppler という名前の Port をインストールします。
variants は universal のみです。

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

なお，[Xpdf](/Xpdf/) 関連の Port（具体的には xpdf-tools と pdftohtml が該当）がインストールされていると衝突してインストールできなくなります。
Poppler をインストールしたい場合は，xpdf-tools と pdftohtml をアンインストールしてください。

- [homebrew / Library / Formula / poppler.rb](https://github.com/mxcl/homebrew/blob/master/Library/Formula/poppler.rb)
- [/trunk/dports/graphics/poppler/Portfile](https://trac.macports.org/browser/trunk/dports/graphics/poppler/Portfile)

#### Arch Linux {#kbfeb6e5}

- [https://www.archlinux.org/packages/?name=poppler](https://www.archlinux.org/packages/?name=poppler)
- [https://www.archlinux.org/packages/?name=poppler-data](https://www.archlinux.org/packages/?name=poppler-data)
- [https://www.archlinux.org/packages/?q=poppler](https://www.archlinux.org/packages/?q=poppler)

```
pacman -S poppler poppler-data
```

#### Linux Mint/Debian/Ubuntu {#k603e696}

- [https://packages.debian.org/ja/poppler](https://packages.debian.org/ja/poppler)
- [http://packages.ubuntu.com/ja/poppler](http://packages.ubuntu.com/ja/poppler)

Linux Mint や Debian GNU/Linux や Ubuntu では poppler ライブラリは libpoppler57 という名前だったり，libpoppler58 という名前だったりします。
poppler-utils をインストールすれば，依存関係で適宜判断されますので，poppler-utils をインストールします。
日本語を使う場合は poppler-data も必要です。

```
sudo apt install poppler-utils poppler-data
```

#### Fedora {#ub953878}

- [https://apps.fedoraproject.org/packages/poppler](https://apps.fedoraproject.org/packages/poppler)
- [https://apps.fedoraproject.org/packages/poppler-data](https://apps.fedoraproject.org/packages/poppler-data)
- [https://apps.fedoraproject.org/packages/poppler-utils](https://apps.fedoraproject.org/packages/poppler-utils)

```
sudo dnf install poppler-utils poppler-data
```

#### openSUSE {#w0cc993e}

- [https://software.opensuse.org/package/poppler](https://software.opensuse.org/package/poppler)
- [https://software.opensuse.org/package/poppler-data](https://software.opensuse.org/package/poppler-data)

```
sudo zypper install poppler poppler-data
```

### ビルド {#e0d6f40b}

#### Windows {#o45a1c30}

[MinGW](/MinGW/) を利用してソースからビルドすることができます。

- MinGW をインストールします。
- [http://ftp.gnome.org/pub/gnome/binaries/win32/glib/](http://ftp.gnome.org/pub/gnome/binaries/win32/glib/) から GLib の Run-time
    <!-- -http://ftp.gnome.org/pub/gnome/binaries/win32/dependencies/ から gettext-runtime の Run-time -->

- [http://ftp.gnome.org/pub/gnome/binaries/win32/dependencies/](http://ftp.gnome.org/pub/gnome/binaries/win32/dependencies/) から pkg-config の Tool

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

を C:\MinGW\bin にコピーします。

- Install [Qt](/Qt/).

- Install [Python](/Python/).

- Run MinGW Shell (MSYS).

<!-- mingw-utils をインストールします。 -->
<!--  -->
<!-- $ mingw-get install mingw-utils -->
<!--  -->
<!-- MinGW Shell (MSYS) で Python を必要とするモジュールがビルドできるように準備します。 -->
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
<!-- を作成して以下の内容を記述します。 -->
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

<!-- ~/.bash_profile に以下の内容を記述します。 -->
<!-- if [ -f ~/.bashrc ]; then . ~/.bashrc; fi -->

<!-- ~/.bashrc に以下の内容を記述します。 -->
<!-- alias ls='ls - -color=auto - -show-control-chars' -->
<!-- alias cp='cp -i' -->
<!-- alias rm='rm -i' -->

<!-- /etc/profile の cd "$HOME" の後に source ~/.bashrc を追加します。 -->
<!-- cd "$HOME" -->
<!-- source ~/.bashrc -->

<!-- $ source ~/.bashrc -->

<!-- http://wiki.openttd.org/Compiling_on_MinGW -->
<!-- [[「Warning: linker path does not have real file for library -lz」の件:http://d.hatena.ne.jp/ousttrue/20091113/1258095613]] -->
<!-- [[mingw + msys で cairo 1.10.0 をビルド:http://d.hatena.ne.jp/miyamuko/20100909/how_to_build_cairo_1_10_0_using_mingw]] -->

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

- Install Poppler.

```
Poppler は --with-font-configuration=win32 または -DFONT_CONFIGURATION=win32 でビルドすると日本語のフォントが埋め込まれていない PDF ファイルが MS-Mincho で表示されます。
ただし font configuration: win32 の場合 GothicBBB-Medium (ゴシック体) でも Ryumin-Light (明朝体) と同様 MS-Mincho で表示されます。
GothicBBB-Medium (ゴシック体) をきちんと表示したい場合は font configuration: fontconfig でビルドして fontconfig を適切に設定します。
configure の場合は --with-font-configuration=fontconfig で fontconfig を使用できます。
CMake の場合は -DFONT_CONFIGURATION=fontconfig で fontconfig を使用できます。
```

```
$ mkdir poppler
$ pushd poppler
```

<!-- $ curl -kRLO https://cgit.freedesktop.org/poppler/poppler/snapshot/master.tar.xz -->

```
$ powershell -Command '& {Invoke-WebRequest -Uri "https://cgit.freedesktop.org/poppler/poppler/snapshot/master.tar.xz" -OutFile "master.tar.xz"}'
$ tar xvf master.tar.xz
$ pushd master
```

***

- configure で Makefile を作成してインストールする場合 ([pdf2htmlEX](/pdf2htmlEX/) をビルドする場合 Poppler は configure で Makefile を作成してインストールしてください)

```
$ ./autogen.sh
$ POPPLER_QT5_CFLAGS="-IC:/Qt/Qt5.6.0/5.6/mingw492_32/include" POPPLER_QT5_LIBS="-LC:/Qt/Qt5.6.0/5.6/mingw492_32/lib -lQt5Core -lQt5Gui -lQt5Xml -lQt5Widgets -lQt5Test" POPPLER_QT5_TEST_CFLAGS="-IC:/Qt/Qt5.6.0/5.6/mingw492_32/include" POPPLER_QT5_TEST_LIBS="-LC:/Qt/Qt5.6.0/5.6/mingw492_32/bin" LIBOPENJPEG_CFLAGS="`pkg-config --cflags libopenjp2`" LIBOPENJPEG_LIBS="`pkg-config --libs libopenjp2`" ./configure --prefix=/mingw --with-font-configuration=fontconfig --enable-xpdf-headers --enable-zlib --enable-libcurl --enable-poppler-glib --disable-gtk-test
```

```
Building poppler with support for:
  font configuration:   fontconfig
  splash output:        yes
  cairo output:         yes
  qt4 wrapper:          no
  qt5 wrapper:          yes
  glib wrapper:         yes
    introspection:      no
  cpp wrapper:          yes
  use gtk-doc:          no
  use libjpeg:          yes
  use libpng:           yes
  use libtiff:          yes
  use zlib compress:    yes
  use zlib uncompress:  no
  use nss3:             no
  use curl:             yes
  use libopenjpeg:      yes
      with openjpeg2
  use cms:              yes
      with lcms2
  command line utils:   yes
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

<!-- $ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DFONT_CONFIGURATION=fontconfig -DENABLE_XPDF_HEADERS=ON -DENABLE_ZLIB=ON -DZLIB_LIBRARY=C:/MinGW/bin/zlib1.dll -DENABLE_LIBOPENJPEG=ON -DENABLE_LIBCURL=ON -DLIBOPENJPEG_INCLUDE_DIR=C:/MinGW/include/openjpeg-2.1 -DLIBOPENJPEG_LIBRARIES=C:/MinGW/bin/libopenjp2.dll -->

```
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DFONT_CONFIGURATION=fontconfig -DENABLE_XPDF_HEADERS=ON -DENABLE_ZLIB=ON -DZLIB_LIBRARY=C:/MinGW/bin/zlib1.dll -DENABLE_LIBCURL=ON -DLIBOPENJPEG_INCLUDE_DIR=C:/MinGW/include/openjpeg-2.1 -DLIBOPENJPEG_LIBRARIES=C:/MinGW/bin/libopenjp2.dll
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
  use zlib compress:    yes
  use zlib uncompress:  no
  use nss3:             no
  use curl:             yes
  use libopenjpeg:      yes
      with openjpeg2
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

日本語の PDF ファイルを表示できるようにするため，poppler-data を適切な場所に配置します。

poppler-data を C:\MinGW\share にコピーします。

<!-- $ curl -kRLO https://poppler.freedesktop.org/poppler-data-0.4.7.tar.gz -->

```
$ powershell -Command '& {Invoke-WebRequest -Uri "https://poppler.freedesktop.org/poppler-data-0.4.7.tar.gz" -OutFile "poppler-data-0.4.7.tar.gz"}'
$ tar xvf poppler-data-0.4.7.tar.gz
$ cp -pR poppler-data-0.4.7 /mingw/share/poppler
```

### font configuration {#e532ec53}

Poppler は font configuration で win32 を選択した場合，日本語のフォントを埋め込んでいない PDF ファイルは MS-Mincho で表示されます。
ただし font configuration が win32 の場合 GothicBBB-Medium (ゴシック体) でも Ryumin-Light (明朝体) と同様 MS-Mincho で表示されます。
GothicBBB-Medium (ゴシック体) をきちんと表示したい場合は font configuration を fontconfig でビルドして fontconfig を適切に設定します。

- [https://cgit.freedesktop.org/poppler/poppler/tree/poppler/GlobalParamsWin.cc](https://cgit.freedesktop.org/poppler/poppler/tree/poppler/GlobalParamsWin.cc)

### Issues {#nbe31c73}

- [https://bugs.freedesktop.org/buglist.cgi?bug_status=__open__&content=&no_redirect=1&order=changeddate%20DESC%2Cpriority%2Cbug_severity&product=poppler&query_based_on=&query_format=specific](https://bugs.freedesktop.org/buglist.cgi?bug_status=__open__&content=&no_redirect=1&order=changeddate%20DESC%2Cpriority%2Cbug_severity&product=poppler&query_based_on=&query_format=specific)
- [https://bugs.freedesktop.org/buglist.cgi?bug_status=__open__&content=&no_redirect=1&order=Importance&product=poppler&query_format=specific](https://bugs.freedesktop.org/buglist.cgi?bug_status=__open__&content=&no_redirect=1&order=Importance&product=poppler&query_format=specific)

### 関連リンク {#m3ac74dd}

- TwitterSearch:Poppler, TwitterSearch.en:Poppler, TwitterSearch.ja:Poppler
- [Poppler - DenkiYagi](http://terurou.hateblo.jp/category/Poppler)
    - [Poppler 0.22.5の.NETバインディングを作成する](http://terurou.hateblo.jp/entry/2013/07/09/160937)
    - [MinGWでPoppler 0.22.5をビルド](http://terurou.hateblo.jp/entry/2013/07/09/160937)
- [Popplerについてちょっとだけ](http://d.hatena.ne.jp/naruoga/20130112/1358002227)
- [pdfgrepでPDFをgrepする](http://emasaka.blog65.fc2.com/blog-entry-1010.html)
- [poppler 0.18.1 ビルド奮闘記](https://sites.google.com/site/poppler0181builder/)
- fontconfig (BLFS)
    - [http://www.linuxfromscratch.org/blfs/view/svn/general/fontconfig.html](http://www.linuxfromscratch.org/blfs/view/svn/general/fontconfig.html)
    - [http://lfsbookja.osdn.jp/BLFS/svn.ja/general/fontconfig.html](http://lfsbookja.osdn.jp/BLFS/svn.ja/general/fontconfig.html)
- Poppler (BLFS)
    - [http://www.linuxfromscratch.org/blfs/view/svn/general/poppler.html](http://www.linuxfromscratch.org/blfs/view/svn/general/poppler.html)
    - [http://lfsbookja.osdn.jp/BLFS/svn.ja/general/poppler.html](http://lfsbookja.osdn.jp/BLFS/svn.ja/general/poppler.html)

#### License {#i424d155}

[GPLv3](https://cgit.freedesktop.org/poppler/poppler/tree/COPYING3), [GPLv2](https://cgit.freedesktop.org/poppler/poppler/tree/COPYING)

#### ChangeLog {#u62118c7}

- [poppler/poppler - The poppler pdf rendering library](https://cgit.freedesktop.org/poppler/poppler)
    - [https://cgit.freedesktop.org/poppler/poppler/refs/tags](https://cgit.freedesktop.org/poppler/poppler/refs/tags)
    - [https://cgit.freedesktop.org/poppler/poppler/log/](https://cgit.freedesktop.org/poppler/poppler/log/)
