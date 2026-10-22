---
title: "gv"
url: "/gv/"
date: 2018-10-05T11:42:25Z
pukiwiki: "gv"
---

# gv

gv は [Ghostscript](/Ghostscript/) のフロントエンドです。
PostScript/PDF ファイルを表示します。

- [GV - GNU Project - Free Software Foundation](https://www.gnu.org/software/gv/)
- [gv, a PostScript and PDF previewer](http://pages.cs.wisc.edu/~ghost/gv/gv.htm)
- [MyTeXpert:gv](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?gv)

### Cygwin {#n4a211dd}

[Cygwin](/Cygwin/) と [VcXsrv](https://github.com/marchaesen/vcxsrv) で gv が使用できます。

VcXsrv を起動して Cygwin64 Terminal (64-bit Cygwin) から

```
DISPLAY=:0 gv file.ps
```

あるいは

```
export DISPLAY=:0
gv file.ps
```

で file.ps が gv で表示できます。

適切に設定すれば日本語も表示可能です。

### macOS {#k8b85c7c}

- [https://github.com/johnhcc/homebrew-gs-x11](https://github.com/johnhcc/homebrew-gs-x11)
    - [https://github.com/johnhcc/homebrew-gs-x11/blob/main/Formula/gv.rb](https://github.com/johnhcc/homebrew-gs-x11/blob/main/Formula/gv.rb)

        ```
        brew install johnhcc/gs-x11/gv
        ```

- [https://ports.macports.org/port/gv/](https://ports.macports.org/port/gv/)
    - [https://github.com/macports/macports-ports/blob/master/print/gv/Portfile](https://github.com/macports/macports-ports/blob/master/print/gv/Portfile)
    - [74 久しぶりに Ghostscript でこけつまろびつ](https://m-katsurada.sakura.ne.jp/knowhow-2022/node74.html)

### Linux {#p8553828}

- [https://aur.archlinux.org/packages/gv](https://aur.archlinux.org/packages/gv)
- [https://packages.debian.org/search?keywords=gv](https://packages.debian.org/search?keywords=gv)
- [https://packages.ubuntu.com/gv](https://packages.ubuntu.com/gv)
- [https://packages.fedoraproject.org/pkgs/gv/gv/](https://packages.fedoraproject.org/pkgs/gv/gv/)

### 関連リンク {#u6f90105}

#### ChangeLog {#m137e578}

- [http://git.savannah.gnu.org/cgit/gv.git/](http://git.savannah.gnu.org/cgit/gv.git/)
    - [log](http://git.savannah.gnu.org/cgit/gv.git/log/)
