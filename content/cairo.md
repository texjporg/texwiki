---
title: "cairo"
url: "/cairo/"
date: 2014-03-15T16:04:59Z
pukiwiki: "cairo"
---

# cairo

## [cairo](http://www.cairographics.org/) {#ka2a7241}

### ChangeLog {#g1e6e2e7}

[http://cgit.freedesktop.org/cairo/](http://cgit.freedesktop.org/cairo/)

### Installation {#pc9d5936}

#### MinGW {#s9a2b332}

- Install [pixman](http://cgit.freedesktop.org/pixman/).

```
$ curl -R -L -O http://cairographics.org/releases/pixman-0.32.6.tar.gz
$ tar xvf pixman-0.32.6.tar.gz
$ pushd pixman-0.32.6
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```

- Install cairo.

```
$ curl -R -L -O http://cairographics.org/releases/cairo-1.14.0.tar.xz
$ tar xvf cairo-1.14.0.tar.xz
$ pushd cairo-1.14.0
$ ./configure --prefix=/mingw

cairo (version 1.14.0 [release]) will be compiled with:

The following surface backends:
  Image:         yes (always builtin)
  Recording:     yes (always builtin)
  Observer:      yes (always builtin)
  Mime:          yes (always builtin)
  Tee:           no (disabled, use --enable-tee to enable)
  XML:           no (disabled, use --enable-xml to enable)
```

<!--   XML:           yes -->

```
  Skia:          no (disabled, use --enable-skia to enable)
  Xlib:          no (requires X development libraries)
  Xlib Xrender:  no (requires --enable-xlib)
  Qt:            no (disabled, use --enable-qt to enable)
```

<!--   Qt:            yes -->

```
  Quartz:        no (requires CoreGraphics framework)
  Quartz-image:  no (disabled, use --enable-quartz-image to enable)
  XCB:           no (requires xcb >= 1.6 xcb-render >= 1.6 http://xcb.freedeskto
p.org)
  Win32:         yes
  OS2:           no (disabled, use --enable-os2 to enable)
  CairoScript:   yes
  PostScript:    yes
  PDF:           yes
  SVG:           yes
  OpenGL:        no (disabled, use --enable-gl to enable)
  OpenGL ES 2.0: no (disabled, use --enable-glesv2 to enable)
  BeOS:          no (disabled, use --enable-beos to enable)
  DirectFB:      no (disabled, use --enable-directfb to enable)
  OpenVG:        no (disabled, use --enable-vg to enable)
  DRM:           no (disabled, use --enable-drm to enable)
  Cogl:          no (disabled, use --enable-cogl to enable)

The following font backends:
  User:          yes (always builtin)
  FreeType:      yes
  Fontconfig:    yes
  Win32:         yes
  Quartz:        no (requires CoreGraphics framework)

The following functions:
  PNG functions:   yes
  GLX functions:   no (not required by any backend)
  WGL functions:   no (not required by any backend)
  EGL functions:   no (not required by any backend)
  X11-xcb functions: no (disabled, use --enable-xlib-xcb to enable)
  XCB-shm functions: no (requires --enable-xcb)

The following features and utilities:
  cairo-trace:                no (requires dynamic linker and zlib and real pthr
eads)
  cairo-script-interpreter:   yes

And the following internal features:
  pthread:       yes
  gtk-doc:       no
  gcov support:  no
  symbol-lookup: no (requires bfd)
  test surfaces: no (disabled, use --enable-test-surfaces to enable)
  ps testing:    no (requires libspectre)
  pdf testing:   no (requires poppler-glib >= 0.17.4)
  svg testing:   no (requires librsvg-2.0 >= 2.15.0)
  win32 printing testing:    no (requires ghostscript)

$ make
```

```
cairo-missing.h:45:17: error: conflicting types for 'ssize_t'
```

[util/cairo-missing/cairo-missing.h](http://cgit.freedesktop.org/cairo/tree/util/cairo-missing/cairo-missing.h?id=1.12.16#n45) の 45行目にある

```
typedef SSIZE_T ssize_t;
```

をコメントアウトします．<br>

```
//typedef SSIZE_T ssize_t;
```

```
$ make install
$ popd
```
