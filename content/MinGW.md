---
title: "MinGW"
url: "/MinGW/"
date: 2012-12-05T16:33:35Z
pukiwiki: "MinGW"
---

# MinGW

## [MinGW](http://www.mingw.org/) {#c9002cc1}

MinGW は "Minimalist GNU for Windows" の略語で，Microsoft Windows アプリケーションを開発するための最小限の開発環境を提供します．

<strong>公式サイト</strong>

- [MinGW | Minimalist GNU for Windows](http://www.mingw.org/)

TeX 関連プログラムには C, C++ で書かれたプログラムがあります．
MinGW を使用すれば [TeX Live](</TeX Live/>) の最新の開発版を自分でビルドして使用することができます．
64-bit バイナリをビルドしたい場合は [MSYS2](/MSYS2/) を使用します．

***

***

### インストーラ {#x50e277a}

- [https://sourceforge.net/projects/mingw/files/Installer/](https://sourceforge.net/projects/mingw/files/Installer/)

## MSYS {#o619b52f}

- [http://www.mingw.org/wiki/MSYS](http://www.mingw.org/wiki/MSYS)

#### /etc/fstab の作成 {#n8a19258}

/mingw が存在しない場合は /etc/fstab を作成して c:/mingw		/mingw を追加します．

***

- C:\MinGW\msys\1.0\etc\fstab

***

```
#fstab.sample
#This is a sample file for /etc/fstab.
#Currently /etc/fstab is only read during dll initialization.
#I will eventually watch the directory for changes and reread the file.
#The line format is simple in that you give the Win32 path, followed by one or
#more space or tab delimiter, followed by the mount point.  Mount points in 
#typical UNIX environments must be a physical name on a drive before it can 
#actually be used as a mount point.  In this implementation the "must exist" 
#requirement isn't enforced, however, it will be an aide to such programs as 
#find and readline's tab completion if it does exist.

#You can use a # as the first character on the line as a comment indicator.
#Blank lines are ignored.

#Win32_Path		Mount_Point
c:/mingw		/mingw
```

***

## TeX Live <a id="texlive"></a> {#h63c1837}

### Building TeX Live {#p61b773f}

- [Building TeX Live](http://www.tug.org/texlive/doc/tlbuild.html)
- [TeX LiveとTeXworksのビルド](http://abenori.blogspot.com/2015/05/tex-livetexworks.html)

MinGW をフルインストールします．

MinGW Shell を起動して [Fontconfig](/Fontconfig/) をインストールして以下のコマンドを実行します．

```
$ mkdir texlive-win32 && cd texlive-win32
$ rsync -a --delete --exclude=.svn --exclude=Work tug.org::tldevsrc/Build/source/ .
$ mkdir Work && cd Work
$ ../Build --no-clean --without-ln-s
```

&#x7e;/texlive-win32/inst/bin/i686-pc-mingw32/ 配下に実行ファイルが作成されます．

64-bit バイナリをビルドしたい場合は [MSYS2](/MSYS2/) を使うとビルドできます．

## MinGW 関連リンク {#e987affa}

- [http://win-builds.org/](http://win-builds.org/)
- [News - nuwen.net](http://nuwen.net/)
    - [MinGW Distro - nuwen.net](http://nuwen.net/mingw.html)
- [MinGW | Qt Wiki | Qt Project](http://qt-project.org/wiki/MinGW)
- [FAQ | MinGW](http://www.mingw.org/wiki/FAQ)
- [C::B advanced](https://sourceforge.net/projects/cbadvanced/)
- [Index of /repositories/windows:/mingw:/win32/openSUSE_Factory/noarch](http://download.opensuse.org/repositories/windows:/mingw:/win32/openSUSE_Factory/noarch/)
- [Where can I download precompiled GTK+ 3 binaries or windows installer?](http://stackoverflow.com/questions/6006689/where-can-i-download-precompiled-gtk-3-binaries-or-windows-installer)
- [七誌の開発日記](http://7shi.hateblo.jp/archive/category/MSYS) (MSYS)
- [Console2 + Nyaos + MinGWで快適Windwosターミナル](http://upinetree.hatenablog.com/entry/2013/03/06/220800)
- [#if defined(\__MINGW32_\_) &amp;&amp; !defined(\__MINGW64_VERSION_MAJOR)](https://github.com/joyent/libuv/pull/1296)
- [Index of /repositories/windows:/mingw:/win32/openSUSE_Factory/noarch](http://download.opensuse.org/repositories/windows:/mingw:/win32/openSUSE_Factory/noarch/)
- [Where can I download precompiled GTK+ 3 binaries or windows installer?](http://stackoverflow.com/questions/6006689/where-can-i-download-precompiled-gtk-3-binaries-or-windows-installer)
