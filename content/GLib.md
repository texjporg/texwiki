---
title: "GLib"
url: "/GLib/"
date: 2014-03-15T17:38:52Z
pukiwiki: "GLib"
---

# GLib

## [GLib](https://developer.gnome.org/glib/) {#t89d094a}

- [https://developer.gnome.org/glib/stable/](https://developer.gnome.org/glib/stable/)
- [https://developer.gnome.org/glib/unstable/](https://developer.gnome.org/glib/unstable/)

### Installation {#d8092964}

#### MSYS2 {#c72e704a}

```
$ pacman -S glib2
$ pacman -S gettext
$ pacman -S pkg-config
```

#### MinGW {#s8134160}

- Install libffi.
- Install GLib.

```
$ curl --insecure -R -L -O https://download.gnome.org/sources/glib/2.40/glib-2.40.0.tar.xz
$ tar xvf glib-2.40.0.tar.xz
$ pushd glib-2.40.0
$ CFLAGS="-Wall -Ofast -march=native" ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

<!-- -Install [[GObject Introspection:https://wiki.gnome.org/GObjectIntrospection]]. -->
<!--  -->
<!-- $ curl - -insecure -R -L -O https://download.gnome.org/sources/gobject-introspection/1.40/gobject-introspection-1.40.0.tar.xz -->
<!-- $ tar xvf gobject-introspection-1.40.0.tar.xz -->
<!-- $ pushd gobject-introspection-1.40.0 -->
<!-- $ ./configure - -prefix=/mingw -->
<!-- $ make -->
<!-- $ make install -->
<!-- $ popd -->

- Install [gettext](http://www.gnu.org/software/gettext/).

```
$ curl -R -L -O http://ftp.jaist.ac.jp/pub/GNU/gettext/gettext-0.18.3.2.tar.gz
$ tar xvf gettext-0.18.3.2.tar.gz
$ pushd gettext-0.18.3.2
$ ./configure --prefix=/mingw
```

<!--  -->
<!-- gettext-tools/gnulib-lib/wctype.in.h の344行目から360行目までをコメントアウトします． -->
<!-- //_GL_WCTYPE_INLINE wint_t -->
<!-- //rpl_towlower (wint_t wc) -->
<!-- //{ -->
<!-- //  return (wint_t) (wchar_t) towlower (wc); -->
<!-- //} -->
<!-- //#  if !(defined __cplusplus && defined GNULIB_NAMESPACE) -->
<!-- //#   define towlower rpl_towlower -->
<!-- //#  endif -->
<!-- //  -->
<!-- //_GL_WCTYPE_INLINE wint_t -->
<!-- //rpl_towupper (wint_t wc) -->
<!-- //{ -->
<!-- //  return (wint_t) (wchar_t) towupper (wc); -->
<!-- //} -->
<!-- //#  if !(defined __cplusplus && defined GNULIB_NAMESPACE) -->
<!-- //#   define towupper rpl_towupper -->
<!-- //#  endif -->
<!--  -->

```
$ make
$ make install
$ popd
```

- Install [pkg-config](http://www.freedesktop.org/wiki/Software/pkg-config).

```
$ curl -R -L -O http://pkgconfig.freedesktop.org/releases/pkg-config-0.28.tar.gz
$ tar xvf pkg-config-0.28.tar.gz
$ pushd pkg-config-0.28
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

<!-- gtk -->
<!--  -->
<!-- make[1]: Entering directory `gtk+-3.6.0/gtk' -->
<!--   CCLD     gtk-update-icon-cache.exe -->
<!-- ../libtool: line 9517: ./gtk-update-icon-cache.exe: Bad file number -->
<!-- このように表示される場合は管理者権限で MinGW Shell (MSYS) を実行してビルドしてください．~ -->
