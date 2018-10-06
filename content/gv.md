---
title: "gv"
url: "/gv/"
date: 2018-10-05T11:42:25Z
pukiwiki: "gv"
---

# gv

gv は [Ghostscript](/Ghostscript/) のフロントエンドです。

- [GV - GNU Project - Free Software Foundation](https://www.gnu.org/software/gv/)

### Cygwin {#n4a211dd}

[Cygwin](/Cygwin/) と [VcXsrv](https://sourceforge.net/projects/vcxsrv/) で gv が使用できます。

VcXsrv を起動して Cygwin64 Terminal (64-bit Cygwin) あるいは Cygwin Terminal (32-bit Cygwin) から

```
DISPLAY=:0 gv foo.ps
```

あるいは

```
export DISPLAY=:0
gv foo.ps
```

で foo.ps が gv で表示できます。

適切に設定すれば日本語も表示可能です。

### macOS {#k8b85c7c}

- [TeXの記憶(125) — Mac用Ghostscript（gv付き）を入れてみた](https://oversleptabit.com/archives/1337)
