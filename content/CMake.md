---
title: "CMake"
url: "/CMake/"
date: 2014-03-15T05:40:47Z
pukiwiki: "CMake"
---

# CMake

## [CMake](http://www.cmake.org/) {#w49469c9}

### ChangeLog {#n963ead6}

[http://cmake.org/gitweb?p=cmake.git](http://cmake.org/gitweb?p=cmake.git)

### Installation {#w0109a3f}

#### MinGW {#t16b8c71}

- [Download | CMake](http://www.cmake.org/download/) から Binary distributions の Windows ZIP File をダウンロードして展開し，bin フォルダー (cmake.exe のあるフォルダー) に PATH を通します．

```
$ curl -R -L -O http://www.cmake.org/files/v3.1/cmake-3.1.0.tar.gz
$ tar xvf cmake-3.1.0.tar.gz
$ pushd cmake-3.1.0
$ mkdir build
$ pushd build
$ cmake .. -G "MSYS Makefiles" -DCMAKE_INSTALL_PREFIX=/mingw
$ make
$ make install
$ popd
$ popd
```

cmake の Makefile でインストールした場合は，make uninstall が使えないので，アンインストールする場合は，ビルドしたディレクトリで

```
$ sed -e "s/\r$//" install_manifest.txt | sort | uniq | xargs rm
```

を実行します．
