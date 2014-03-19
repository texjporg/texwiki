---
title: "FreeType"
url: "/FreeType/"
date: 2014-03-15T05:52:30Z
pukiwiki: "FreeType"
---

# FreeType

## [FreeType](http://www.freetype.org/) {#t5ee2446}

### ChangeLog {#gb3e0562}

[http://git.savannah.gnu.org/cgit/freetype/freetype2.git/log/](http://git.savannah.gnu.org/cgit/freetype/freetype2.git/log/)

### Language Bindings {#g534d7a2}

[http://www.freetype.org/developer.html#language-bindings](http://www.freetype.org/developer.html#language-bindings)

### Installation {#a3708638}

#### MinGW {#zbf036d7}

<!-- -Install [[zlib]] -->
<!-- -Install [[libpng]] -->
<!-- -Install bzip2 -->
<!-- -Install [[HarfBuzz]] -->
<!--  -->
<!-- CMake を使用する場合 -->
<!--  -->
<!-- $ curl -R -L -O http://sourceforge.net/projects/freetype/files/freetype2/2.5.3/freetype-2.5.3.tar.bz2 -->
<!-- $ curl -R -L -O http://download.sourceforge.net/freetype/freetype-2.5.3.tar.bz2 -->
<!-- $ tar xvf freetype-2.5.3.tar.bz2 -->
<!-- $ pushd freetype-2.5.3 -->
<!-- $ mkdir build -->
<!-- $ pushd build -->
<!-- $ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->
<!-- $ popd -->
<!--  -->
<!-- configure を使用する場合 -->
<!--  -->
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
