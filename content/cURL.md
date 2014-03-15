---
title: "cURL"
url: "/cURL/"
date: 2014-03-15T17:32:07Z
pukiwiki: "cURL"
---

# cURL

## [cURL](http://curl.haxx.se/) {#b9c11180}

### ChangeLog {#b2bb9f55}

[https://github.com/bagder/curl/commits/master](https://github.com/bagder/curl/commits/master)

### Installation {#wbd5fb7a}

#### MinGW {#va108410}

```
$ curl -R -L -O http://curl.haxx.se/download/curl-7.35.0.tar.bz2
$ tar xvf curl-7.35.0.tar.bz2
$ pushd curl-7.35.0
$ ./configure --prefix=/mingw
```

```
  curl version:     7.35.0
  Host setup:       i686-pc-mingw32
  Install prefix:   /mingw
  Compiler:         gcc
  SSL support:      enabled (OpenSSL)
  SSH support:      enabled (libSSH2)
  zlib support:     enabled
  krb4 support:     no      (--with-krb4*)
  GSSAPI support:   no      (--with-gssapi)
  SPNEGO support:   no      (--with-spnego)
  TLS-SRP support:  enabled
  resolver:         default (--enable-ares / --enable-threaded-resolver)
  ipv6 support:     no      (--enable-ipv6)
  IDN support:      no      (--with-{libidn,winidn})
  Build libcurl:    Shared=yes, Static=yes
  Built-in manual:  no      (--enable-manual)
  --libcurl option: enabled (--disable-libcurl-option)
  Verbose errors:   enabled (--disable-verbose)
  SSPI support:     no      (--enable-sspi)
  ca cert bundle:   no
  ca cert path:     no
  LDAP support:     enabled (winldap)
  LDAPS support:    enabled
  RTSP support:     enabled
  RTMP support:     no      (--with-librtmp)
  metalink support: no      (--with-libmetalink)
  Protocols:        DICT FILE FTP FTPS GOPHER HTTP HTTPS IMAP IMAPS LDAP LDAPS P
OP3 POP3S RTSP SCP SFTP SMTP SMTPS TELNET TFTP
```

```
$ make
$ make install
$ popd
```
