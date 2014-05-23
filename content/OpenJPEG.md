---
title: "OpenJPEG"
url: "/OpenJPEG/"
date: 2014-03-15T05:44:41Z
pukiwiki: "OpenJPEG"
---

# OpenJPEG

## [OpenJPEG](http://www.openjpeg.org/) {#tfc3a613}

### ChangeLog {#bf698d7a}

[https://code.google.com/p/openjpeg/source/list](https://code.google.com/p/openjpeg/source/list)

### Installation {#qa7273ab}

#### MinGW {#c2a477ae}

OpenJPEG 2.0.0 以降を使用して Poppler がビルドできない場合は OpenJPEG 1.5.2 をインストールしてください．<br>

<!-- OpenJPEG 最新版の場合 -->

OpenJPEG 2.1.0 の場合

<!-- $ svn checkout http://openjpeg.googlecode.com/svn/trunk/ openjpeg-read-only -->
<!-- $ pushd openjpeg-read-only -->

```
$ curl -R -L -O http://download.sourceforge.net/openjpeg.mirror/openjpeg-2.1.0.tar.gz
$ tar xvf openjpeg-2.1.0.tar.gz
$ pushd openjpeg-2.1.0
$ mkdir build
$ pushd build
```

<!-- $ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DBUILD_SHARED_LIBS:bool=on -DBUILD_CODEC:bool=on -DBUILD_MJ2:bool=on -DBUILD_JPWL:bool=on -DBUILD_JPIP_SERVER:bool=on -DBUILD_JP3D:bool=on -->

```
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw -DBUILD_SHARED_LIBS:bool=on -DBUILD_CODEC:bool=on -DBUILD_MJ2:bool=on -DBUILD_JPWL:bool=on -DUNIX:bool=on
$ make
$ make install
$ popd
$ popd
```

OpenJPEG 1.5.2 の場合

```
$ curl -R -L -O http://download.sourceforge.net/openjpeg.mirror/openjpeg-1.5.2.tar.gz
$ tar xvf openjpeg-1.5.2.tar.gz
$ pushd openjpeg-1.5.2
$ ./configure --prefix=/mingw --enable-mj2 --enable-jpwl
$ make
$ make install
$ popd
```
