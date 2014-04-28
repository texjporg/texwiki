---
title: "OpenSSL"
url: "/OpenSSL/"
date: 2014-03-15T16:06:45Z
pukiwiki: "OpenSSL"
---

# OpenSSL

## [OpenSSL](http://www.openssl.org/) {#h33b149b}

### ChangeLog {#i24e878a}

[http://git.openssl.org/gitweb/?p=openssl.git](http://git.openssl.org/gitweb/?p=openssl.git)

[https://github.com/openssl/openssl/commits/master](https://github.com/openssl/openssl/commits/master)

### Installation {#w1d4f4bd}

#### MinGW {#h2041c43}

```
$ curl -R -L -O http://www.openssl.org/source/openssl-1.0.1g.tar.gz
$ tar xvf openssl-1.0.1g.tar.gz
$ pushd openssl-1.0.1g
$ ./config --prefix=/mingw shared
$ make
$ make install
$ popd
```

### fork {#s2fdc39a}

- [LibreSSL](http://www.libressl.org/)
- [LibreSSL Watch](http://libressl.tumblr.com/)
