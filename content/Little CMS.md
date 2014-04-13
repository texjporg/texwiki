---
title: "Little CMS"
url: "/Little CMS/"
date: 2014-03-15T03:19:41Z
pukiwiki: "Little CMS"
---

# Little CMS

## [Little CMS](http://www.littlecms.com/) {#b0b42891}

### ChangeLog {#bd3e9b8c}

[https://github.com/mm2/Little-CMS/commits/master](https://github.com/mm2/Little-CMS/commits/master)

### Installation {#k8b3dd98}

#### MinGW {#uce45174}

<!-- $ curl -R -L -O http://sourceforge.net/projects/lcms/files/lcms/2.6/lcms2-2.6.tar.gz -->

```
$ curl -R -L -O http://download.sourceforge.net/lcms/lcms2-2.6.tar.gz
$ tar xvf lcms2-2.6.tar.gz
$ pushd lcms2-2.6
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```
