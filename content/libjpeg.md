---
title: "libjpeg"
url: "/libjpeg/"
date: 2014-03-15T01:26:03Z
pukiwiki: "libjpeg"
---

# libjpeg

## [libjpeg](http://www.ijg.org/) {#i0c27a04}

### Installation {#v74c25d2}

#### MinGW {#pece36ae}

```
$ curl -R -L -O http://www.ijg.org/files/jpegsrc.v9a.tar.gz
$ tar xvf jpegsrc.v9a.tar.gz
$ pushd jpeg-9a
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

## [libjpeg-turbo](http://libjpeg-turbo.virtualgl.org/) {#ib19d9ff}

### Installation {#zbcb57de}

#### MinGW {#l1391267}

```
$ curl -R -L -O http://download.sourceforge.net/libjpeg-turbo/libjpeg-turbo-1.3.0.tar.gz
$ tar xvf libjpeg-turbo-1.3.0.tar.gz
$ pushd libjpeg-turbo-1.3.0
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```
