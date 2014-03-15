---
title: "GLib"
url: "/GLib/"
date: 2014-03-15T17:38:52Z
pukiwiki: "GLib"
---

# GLib

## [GLib](https://developer.gnome.org/glib/) {#t89d094a}

### Installation {#d8092964}

#### MinGW {#s8134160}

```
$ curl --insecure -R -L -O https://download.gnome.org/sources/glib/2.39/glib-2.39.91.tar.xz
$ tar xvf glib-2.39.91.tar.xz
$ pushd glib-2.39.91
$ CFLAGS="-Wall -Ofast -march=native" ./configure --prefix=/mingw
$ make
$ make install
$ popd
```
