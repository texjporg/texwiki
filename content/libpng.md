---
title: "libpng"
url: "/libpng/"
date: 2014-03-14T23:47:31Z
pukiwiki: "libpng"
---

# libpng

## [libpng](http://www.libpng.org/pub/png/libpng.html) {#t738fa7f}

### ChangeLog {#xc2e296c}

[http://sourceforge.net/p/libpng/code/ci/master/log/](http://sourceforge.net/p/libpng/code/ci/master/log/)

### インストール {#jc84d550}

<!-- $ curl -R -L -O http://sourceforge.net/projects/libpng/files/libpng16/1.6.10/libpng-1.6.10.tar.xz -->

```
$ curl -R -L -O http://download.sourceforge.net/libpng/libpng-1.6.10.tar.xz
$ tar xvf libpng-1.6.10.tar.xz
$ pushd libpng-1.6.10
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

<!-- $ curl -R -L -O http://sourceforge.net/projects/libpng/files/libpng16/1.6.10/libpng-1.6.10.tar.xz -->
<!-- $ tar xvf libpng-1.6.10.tar.xz -->
<!-- $ pushd libpng-1.6.10 -->
<!-- $ mkdir build -->
<!-- $ pushd build -->
<!-- $ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->
<!-- $ popd -->
