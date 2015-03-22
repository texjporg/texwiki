---
title: "MuPDF"
url: "/MuPDF/"
date: 2012-09-28T13:54:10Z
pukiwiki: "MuPDF"
---

# MuPDF

## [MuPDF](http://www.mupdf.com/) → 問題が発生する場合は [Poppler](/Poppler/) を使用する {#x9985d4a}

<img src="http://upload.wikimedia.org/wikipedia/commons/a/a7/MuPDF.png" alt="MuPDF" style="float:right">

MuPDF は軽量な PDF/XPS/CBZ ビューアです．
また MuPDF は PDF/XPS/CBZ のパーサ/レンダリングライブラリとしても使用できます．

<strong>公式サイト</strong>

- [MuPDF](http://www.mupdf.com/)

以下のプログラムが MuPDF を使用しています．

- PDF ビューア: [SumatraPDF](/SumatraPDF/), [zathura](/zathura/) (zathura-pdf-mupdf), [qpdfview](/qpdfview/) (fitz-plugin)

[TeX2img](/TeX2img/) は，SVG 画像出力に MuPDF の mudraw を使用しています．

***

***

### 動作環境 {#u6c9b420}

Windows, OS X, Linux, Android, iOS

### インストール {#m15a5d1f}

#### Windows {#j0820160}

- [http://www.mupdf.com/downloads/](http://www.mupdf.com/downloads/)

#### OS X {#bad1a3d8}

MacPortsを利用してインストールする場合は次のようにします。

```
$ sudo port install mupdf
```

- [homebrew / Library / Formula / mupdf.rb](https://github.com/mxcl/homebrew/blob/master/Library/Formula/mupdf.rb)
- [/trunk/dports/graphics/mupdf/Portfile](https://trac.macports.org/browser/trunk/dports/graphics/mupdf/Portfile)

#### Arch Linux {#y10f7abd}

- [https://www.archlinux.org/packages/?name=mupdf](https://www.archlinux.org/packages/?name=mupdf)
- [https://www.archlinux.org/packages/?q=mupdf](https://www.archlinux.org/packages/?q=mupdf)

#### Linux Mint {#od9b1036}

- [http://packages.ubuntu.com/ja/mupdf](http://packages.ubuntu.com/ja/mupdf)

#### Debian/Ubuntu {#ve64b6e7}

DebianやUbuntuでは、MuPDFのパッケージはlibmupdf-devとmupdfとmupdf-toolsの3つに分かれています。自分でMuPDFを使ったプログラムをコンパイルするのでなければ、libmupdf-devをインストールする必要はありません。mupdfとmupdf-toolsを入れたらOKです。

```
$ sudo apt-get install mupdf mupdf-tools
```

なお、mupdf-toolsにはmutoolとmudrawが含まれています。

<!-- -https://packages.debian.org/ja/mupdf -->

#### Fedora {#k5d2c514}

- [https://apps.fedoraproject.org/packages/mupdf](https://apps.fedoraproject.org/packages/mupdf)

#### openSUSE {#sa86e80c}

- [http://software.opensuse.org/package/mupdf](http://software.opensuse.org/package/mupdf)

### ビルド {#ddb9bb15}

#### Windows {#o34a88ba}

MinGW を使う方法があります．

[MinGW](/MinGW/), zlib, libjpeg, OpenJPEG, FreeType 等をインストールします．

- [jbig2dec](http://git.ghostscript.com/?p=jbig2dec.git) をインストールします．

```
$ curl -R -L -o jbig2dec.tar.gz "http://git.ghostscript.com/?p=jbig2dec.git;a=snapshot;h=HEAD;sf=tgz"
$ tar xvf jbig2dec.tar.gz
$ pushd jbig2dec*
$ ./autogen.sh
$ ./configure --prefix=/mingw
$ make
$ make install
```

<!-- $ curl -R -L -O http://download.sourceforge.net/jbig2dec/jbig2dec-0.11.tar.xz -->
<!-- $ tar xvf jbig2dec-0.11.tar.xz -->
<!-- $ pushd jbig2dec-0.11 -->
<!-- $ configure - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

- [MuPDF](http://www.mupdf.com/) をインストールします．

```
$ curl -R -L -o mupdf.tar.gz "http://git.ghostscript.com/?p=mupdf.git;a=snapshot;h=HEAD;sf=tgz"
$ tar xvf mupdf.tar.gz
$ cd mupdf*
```

Makefile の

```
ifeq "$(NOX11)" ""
MUVIEW := $(OUT)/mupdf
$(MUVIEW) : $(FITZ_LIB) $(THIRD_LIBS)
$(MUVIEW) : $(addprefix $(OUT)/, x11_main.o x11_image.o pdfapp.o)
```

を

```
ifeq "$(NOX11)" ""
MUVIEW := $(OUT)/mupdf
$(MUVIEW) : $(FITZ_LIB) $(THIRD_LIBS)
$(MUVIEW) : $(addprefix $(OUT)/, win_main.o pdfapp.o)
```

に修正します．

fitz/image_jpx.c の

```
#define OPJ_STATIC
```

を

```
//#define OPJ_STATIC
```

としてコメントアウトします．

```
$ CFLAGS="-Wall -Ofast -march=native `pkg-config --cflags freetype2 libopenjpeg zlib`" LIBS="-lkernel32 -luser32 -lgdi32 -lcomdlg32 `pkg-config --libs freetype2 libopenjpeg zlib`" make build=release prefix=/mingw install
```

### 関連記事 {#u27a744e}

#### ライセンス {#kcee43f7}

[GNU Affero General Public License (AGPL)](http://git.ghostscript.com/?p=mupdf.git;a=blob;f=COPYING;hb=HEAD), [Artifex Commercial License](http://www.artifex.com/page/licensing-information.html)

#### 変更履歴 {#vbbec018}

- [http://git.ghostscript.com/?p=mupdf.git](http://git.ghostscript.com/?p=mupdf.git)
    - [shortlog](http://git.ghostscript.com/?p=mupdf.git;a=shortlog)
    - [CHANGES](http://git.ghostscript.com/?p=mupdf.git;a=blob;f=CHANGES;hb=HEAD)

<!-- ***fork [#d573b664] -->
<!-- -https://github.com/monami-ya/mupdf/ -->

#### リンク {#c8e94ca4}

- [Reading PDF file in Windows store App sample in C#, C++, JavaScript for Visual Studio 2012](http://code.msdn.microsoft.com/windowsapps/Open-PDF-in-Windows-store-0614b58c)
- [MuPDF - DenkiYagi](http://terurou.hateblo.jp/category/MuPDF)
    - [MuPDF conveter（MuPDFLib）でPDFを画像に変換してみる](http://terurou.hateblo.jp/entry/2013/07/10/172026)
- [MuPDF 1.2 ライブラリーの C++ ラッパー](http://www.rvf-rc45.net/wordpress/?p=628)
- [MuPDF for Windows 9x](http://d.hatena.ne.jp/lukewarm/20110521#p1)
