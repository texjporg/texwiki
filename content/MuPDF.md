---
title: "MuPDF"
url: "/MuPDF/"
date: 2012-09-28T13:54:10Z
pukiwiki: "MuPDF"
---

# MuPDF

## [MuPDF](http://mupdf.com/) {#x9985d4a}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## MuPDF とは {#u255891c}

MuPDF は軽量な PDF/XPS ビューアです．

- [MuPDF](http://mupdf.com/)
    - [summary](http://git.ghostscript.com/?p=mupdf.git;a=summary)

## インストール {#m15a5d1f}

### Windows {#j0820160}

#### MinGW {#qd80d98f}

poppler - TeX Wiki を参照して MinGW, freetype2, libjpeg, libopenjpeg, zlib 等をインストールします．

- [jbig2dec](http://jbig2dec.sourceforge.net/) をインストールします．

<!-- $ curl -R -L -o jbig2dec.tar.gz "http://git.ghostscript.com/?p=jbig2dec.git;a=snapshot;h=HEAD;sf=tgz" -->
<!-- $ tar xvf jbig2dec.tar.gz -->
<!-- $ pushd jbig2dec* -->
<!-- $ ./autogen.sh -->
<!-- $ ./configure - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->

```
$ curl -R -L -O http://download.sourceforge.net/jbig2dec/jbig2dec-0.11.tar.xz
$ tar xvf jbig2dec-0.11.tar.xz
$ pushd jbig2dec-0.11
$ configure --prefix=/mingw
$ make
$ make install
$ popd
```

- MuPDF をインストールします．

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
$ CFLAGS="-Wall -O2 -march=native `pkg-config --cflags freetype2 libopenjpeg zlib`" LIBS="-lkernel32 -luser32 -lgdi32 -lcomdlg32 `pkg-config --libs freetype2 libopenjpeg zlib`" make build=release prefix=/mingw install
```

### OS X {#bad1a3d8}

- [homebrew / Library / Formula / mupdf.rb](https://github.com/mxcl/homebrew/blob/master/Library/Formula/mupdf.rb)
- [/trunk/dports/graphics/mupdf/Portfile](https://trac.macports.org/browser/trunk/dports/graphics/mupdf/Portfile)
