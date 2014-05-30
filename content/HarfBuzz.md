---
title: "HarfBuzz"
url: "/HarfBuzz/"
date: 2014-03-19T14:26:35Z
pukiwiki: "HarfBuzz"
---

# HarfBuzz

## [HarfBuzz (حرف‌باز)](http://www.freedesktop.org/wiki/Software/HarfBuzz/) {#s01fae62}

### ChangeLog {#gc53d478}

- [http://cgit.freedesktop.org/harfbuzz/](http://cgit.freedesktop.org/harfbuzz/)
- [https://github.com/behdad/harfbuzz/commits/master](https://github.com/behdad/harfbuzz/commits/master)

### Installation {#m4b0da8d}

#### MinGW {#q26159fe}

```
$ curl -R -L -O http://www.freedesktop.org/software/harfbuzz/release/harfbuzz-0.9.29.tar.bz2
$ tar xvf harfbuzz-0.9.29.tar.bz2
$ pushd harfbuzz-0.9.29
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```
