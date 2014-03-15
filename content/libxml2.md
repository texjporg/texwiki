---
title: "libxml2"
url: "/libxml2/"
date: 2014-03-15T14:02:02Z
pukiwiki: "libxml2"
---

# libxml2

## [libxml2](http://xmlsoft.org/) {#i46cce8d}

### Installation {#y82ea743}

#### MinGW {#e764be72}

```
$ curl -R -L -O ftp://xmlsoft.org/libxml2/libxml2-2.9.1.tar.gz
$ tar xvf libxml2-2.9.1.tar.gz
$ pushd libxml2-2.9.1
```

<!-- configure.in を修正します． -->
<!-- - --  -->
<!-- ■修正前 -->
<!-- - --  -->
<!-- AC_PATH_PROG(RM, rm, /bin/rm) -->
<!-- AC_PATH_PROG(MV, mv, /bin/mv) -->
<!-- - --  -->
<!-- ■修正後 -->
<!-- - --  -->
<!-- AC_PATH_PROG(RM, rm, /bin/rm) -->
<!-- RM="$RM -f" -->
<!-- AC_PATH_PROG(MV, mv, /bin/mv) -->
<!-- - --  -->
<!--  -->
<!-- libxml2-2.7.8 では ./configure - -with-threads で make しようとすると testThreads.c でエラーが発生します． -->
<!--  -->
<!-- testThreads.c: In function 'main': -->
<!-- testThreads.c:110:6: error: conversion to non-scalar type requested -->
<!--  -->
<!-- testThreads.c を修正します． -->
<!-- - --  -->
<!-- ■修正前 -->
<!-- - --  -->
<!-- 	for (i = 0; i < num_threads; i++) { -->
<!-- 	    results[i] = NULL; -->
<!-- 	    tid[i] = (pthread_t) -1; -->
<!-- 	} -->
<!-- - --  -->
<!-- ■修正後 -->
<!-- - --  -->
<!-- 	for (i = 0; i < num_threads; i++) { -->
<!-- 	    results[i] = NULL; -->
<!-- 	    tid[i] = *(pthread_t*) -1; -->
<!-- 	} -->
<!-- - --  -->
<!-- $ autoreconf -->

```
$ ./configure --prefix=/mingw

```

libxml2-2.7.4 以降は ./configure --prefix=/mingw で以下のようなメッセージが表示されますが，ビルドできるので無視してかまいません．

```
...
/bin/rm: cannot lstat `libtoolT': No such file or directory
Done configuring

```

```
$ make
$ make install
$ popd
```
