---
title: "XZ Utils"
url: "/XZ Utils/"
date: 2014-03-15T03:11:48Z
pukiwiki: "XZ Utils"
---

# XZ Utils

## [XZ Utils](http://tukaani.org/xz/) {#l0b85e37}

### ChangeLog {#bdd78fcc}

[http://git.tukaani.org/?p=xz.git;a=summary](http://git.tukaani.org/?p=xz.git;a=summary)

### Installation {#d36e5a04}

#### MinGW {#ca66da1c}

```
$ curl -R -L -O http://tukaani.org/xz/xz-5.0.5.tar.xz
$ tar xvf xz-5.0.5.tar.xz
$ pushd xz-5.0.5
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```
