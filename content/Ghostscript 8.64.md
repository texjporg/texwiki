---
title: "Ghostscript 8.64"
url: "/Ghostscript 8.64/"
date: 2009-05-08T18:45:32Z
pukiwiki: "Ghostscript 8.64"
---

# Ghostscript 8.64

- [Ghostscript](/Ghostscript/) > Ghostscript 8.xx > Ghostscript 8.64

とりあえず Ghostscript 8.54 との違いだけを説明します。

## 初期設定ファイル {#j9d94de5}

初期設定ファイルが ghostscript/8.64/Resource/Init に移りました。これはデフォルトではバイナリにコンパイルされるので configure 時に --disable-compile-inits を付けておかないと後で困ります。

Mac OS X 10.5では次のようにしてconfigureしました：

```
./configure --disable-cups --disable-compile-inits
```
