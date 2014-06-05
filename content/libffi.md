---
title: "libffi"
url: "/libffi/"
date: 2014-03-15T17:36:33Z
pukiwiki: "libffi"
---

# libffi

## [libffi](http://sourceware.org/libffi/) {#y7b33388}

### ChangeLog {#sf0ce01b}

[https://github.com/atgreen/libffi/commits/master](https://github.com/atgreen/libffi/commits/master)

### Installation {#e885e478}

#### MinGW {#nfb2cfde}

```
$ curl -R -L -O ftp://sourceware.org/pub/libffi/libffi-3.1.tar.gz
$ tar xvf libffi-3.1.tar.gz
$ pushd libffi-3.1
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```
