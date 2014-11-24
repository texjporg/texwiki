---
title: "libjpeg"
url: "/libjpeg/"
date: 2014-03-15T01:26:03Z
pukiwiki: "libjpeg"
---

# libjpeg

## [libjpeg](http://www.ijg.org/) {#i0c27a04}

### ChangeLog {#h0c6584b}

[http://www.infai.org/jpeg/](http://www.infai.org/jpeg/)

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

### ChangeLog {#o5d4a292}

[http://sourceforge.net/p/libjpeg-turbo/code/HEAD/log/](http://sourceforge.net/p/libjpeg-turbo/code/HEAD/log/)

### Installation {#zbcb57de}

#### MinGW {#l1391267}

```
$ curl -R -L -O http://download.sourceforge.net/libjpeg-turbo/libjpeg-turbo-1.3.1.tar.gz
$ tar xvf libjpeg-turbo-1.3.1.tar.gz
$ pushd libjpeg-turbo-1.3.1
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```
