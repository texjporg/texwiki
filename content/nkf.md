---
title: "nkf"
url: "/nkf/"
date: 2014-03-15T13:58:09Z
pukiwiki: "nkf"
---

# nkf

## [nkf](http://osdn.jp/projects/nkf/) {#ie06d283}

### Installation {#s4661abd}

#### MinGW {#gdd930d3}

```
$ curl -R -L -O http://prdownloads.osdn.jp/nkf/59912/nkf-2.1.3.tar.gz
$ tar xvf nkf-2.1.3.tar.gz
$ pushd nkf-2.1.3
$ make
$ make prefix=/mingw install
mkdir /mingw/bin
mkdir: cannot create directory `/mingw/bin': File exists
make: [install] Error 1 (ignored)
mkdir /mingw/man
mkdir: cannot create directory `/mingw/man': File exists
make: [install] Error 1 (ignored)
mkdir /mingw/man/man1
mkdir: cannot create directory `/mingw/man/man1': File exists
make: [install] Error 1 (ignored)
mkdir /mingw/man/ja
mkdir /mingw/man/ja/man1
cp -f nkf /mingw/bin/
cp -f nkf.1 /mingw/man/man1/
cp -f nkf.1j /mingw/man/ja/man1/nkf.1
```

エラーが表示されますがインストールされるので気にしないでください．

```
$ popd
```
