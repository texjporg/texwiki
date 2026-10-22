---
title: "XCircuit"
url: "/XCircuit/"
date: 2006-09-19T20:01:37Z
pukiwiki: "XCircuit"
---

# XCircuit

## [XCircuit](http://opencircuitdesign.com/xcircuit/) - フリーの回路図作成ソフト {#g1267ee5}

***

***

[XCircuit](http://opencircuitdesign.com/xcircuit/)
は回路図を作成するためのフリーソフトウエアです。
特に電気・電子系のレポート作成等に役立ちます。

PostScript 形式での出力が可能なため TeX への挿入も簡単に行えます。

- [XCircuit](http://opencircuitdesign.com/xcircuit/)
- [日本語解説](http://www.mlb.co.jp/linux/science/xcircuit/)

### 動作環境 {#g2cd5520}

Windows (Windows, Cygwin), macOS, Linux

### ダウンロード {#c2add6d5}

- [http://opencircuitdesign.com/xcircuit/download.html](http://opencircuitdesign.com/xcircuit/download.html)
- [http://opencircuitdesign.com/xcircuit/archive/](http://opencircuitdesign.com/xcircuit/archive/)

### インストール {#l5809210}

- [http://opencircuitdesign.com/xcircuit/install.html](http://opencircuitdesign.com/xcircuit/install.html)

XCircuit の動作には Tcl/Tk が必要なので
XCircuit をインストールする前に Tcl/Tk をインストールします。

公式ページからダウンロードして展開します。

ソースからインストールする場合は

```
$ ./configure
$ make
$ sudo make install
```

とします。

### 使い方 {#r625b25a}

GUIなので直感的に操作できます。

#### 直線を引く {#u5fbbf80}

左クリックで始点の指定、以後クリックごとにポイントをつけていきます。
真ん中クリックで終点になります。
