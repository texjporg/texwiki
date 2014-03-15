---
title: "zlib"
url: "/zlib/"
date: 2014-03-14T23:44:12Z
pukiwiki: "zlib"
---

# zlib

## [zlib](http://zlib.net/) {#t3fd9935}

### ChangeLog {#l990b900}

[http://zlib.net/ChangeLog.txt](http://zlib.net/ChangeLog.txt)

### Installation {#zce96073}

#### MinGW {#p5c8b387}

```
$ curl -R -L -O http://zlib.net/zlib-1.2.8.tar.xz
$ tar xvf zlib-1.2.8.tar.xz
$ pushd zlib-1.2.8
$ make -f win32/Makefile.gcc BINARY_PATH=/mingw/bin INCLUDE_PATH=/mingw/include LIBRARY_PATH=/mingw/lib SHARED_MODE=1 install
$ popd
```
