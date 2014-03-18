---
title: "libHaru"
url: "/libHaru/"
date: 2014-03-18T22:39:06Z
pukiwiki: "libHaru"
---

# libHaru

## [libHaru](http://libharu.org/) {#va72d1b6}

### ChangeLog {#r6179a0c}

[https://github.com/libharu/libharu/commits/master](https://github.com/libharu/libharu/commits/master)

### Installation {#b5dcc7c4}

libHaru のビルドには zlib, libpng が必要です．<br>

CMake の場合

```
$ curl --insecure -R -L -o libharu-libharu.tar.gz https://github.com/libharu/libharu/tarball/master
$ tar xvf libharu-libharu.tar.gz
$ pushd libharu-libharu*
$ mkdir build
$ pushd build
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw
$ make
$ make install
$ popd
$ popd
```

configure の場合

```
$ curl --insecure -R -L -o libharu-libharu.tar.gz https://github.com/libharu/libharu/tarball/master
$ tar xvf libharu-libharu.tar.gz
$ pushd libharu-libharu*
$ ./buildconf.sh
$ ./configure --prefix=/mingw --with-zlib=/mingw --with-png=/mingw
$ make
$ make install
$ popd
```
