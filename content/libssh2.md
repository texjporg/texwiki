---
title: "libssh2"
url: "/libssh2/"
date: 2014-03-15T17:28:21Z
pukiwiki: "libssh2"
---

# libssh2

## [libssh2](http://www.libssh2.org/) {#t7120b9d}

### ChangeLog {#tbd58a7c}

[http://git.libssh2.org/?p=libssh2.git;a=summary;js=1](http://git.libssh2.org/?p=libssh2.git;a=summary;js=1)

### Installation {#qae26d0b}

#### MinGW {#ff2247b4}

```
$ curl -R -L -O http://www.libssh2.org/download/libssh2-1.4.3.tar.gz
$ tar xvf libssh2-1.4.3.tar.gz
$ pushd libssh2-1.4.3
$ ./configure --prefix=/mingw
```

```
  version:          1.4.3
  Host type:        i686-pc-mingw32
  Install prefix:   /mingw
  Compiler:         gcc
  Compiler flags:    -DLIBSSH2_WIN32
  Library types:    Shared=yes, Static=yes
  Crypto library:   openssl: yes (AES-CTR: no) libgcrypt: no
  Debug build:      no
  Build examples:   yes
  Path to sshd:      (only for self-tests)
  libz compression: yes
```

```
$ make
$ make install
$ popd
```
