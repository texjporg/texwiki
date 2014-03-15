---
title: "LibTIFF"
url: "/LibTIFF/"
date: 2014-03-15T03:02:19Z
pukiwiki: "LibTIFF"
---

# LibTIFF

## [LibTIFF](http://www.remotesensing.org/libtiff/) {#v8148926}

### Installation {#x9e16dd0}

#### MinGW {#fb2c7742}

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
