---
title: "FreeType"
url: "/FreeType/"
date: 2014-03-15T05:52:30Z
pukiwiki: "FreeType"
---

# FreeType

## [FreeType](http://www.freetype.org/) {#t5ee2446}

### Installation {#a3708638}

#### MinGW {#zbf036d7}

<!-- $ curl -R -L -O http://sourceforge.net/projects/freetype/files/freetype2/2.5.3/freetype-2.5.3.tar.bz2 -->

```
$ curl -R -L -O http://download.sourceforge.net/freetype/freetype-2.5.3.tar.bz2
$ tar xvf freetype-2.5.3.tar.bz2
$ pushd freetype-2.5.3
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```
