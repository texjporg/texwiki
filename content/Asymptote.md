---
title: "Asymptote"
url: "/Asymptote/"
date: 2009-01-16T04:41:54Z
pukiwiki: "Asymptote"
---

# Asymptote

## Asymptote {#dd856e20}

### はじめに {#w5cb2317}

[Asymptote](http://asymptote.sourceforge.net/)
はMetaPostを発展させたベクトルグラフィック記述言語。

### インストール {#a2be7136}

本家に各種バイナリがある。

ソースからコンパイルするのも簡単。
Mac OS Xでコンパイルする際は，OSのreadlineライブラリが古いので，あらかじめ新しいreadlineライブラリをインストールしておくと，コマンドラインのヒストリー機能などが使えるようになる。
Asymptoteソースを展開したディレクトリに
[gc-7.1.tar.gz](http://www.hpl.hp.com/personal/Hans_Boehm/gc/gc_source/gc-7.1.tar.gz)
を展開せずに置き，（新しいlibreadlineが/usr/local/libにあるなら）

```
LIBS='-L/usr/local/lib ' ./configure
make
make install
```

でできる。

### Mac OS X でのプレビュー {#dc357da5}

標準ではgv（あるいはGSview）を使ったPostScriptプレビューになる。
これはMacでも（gvをインストールしておけば）可能だが，X11を立ち上げておかないといけない。
より簡単には ~/.asy/config.asy に

```
import settings;
outformat="pdf"; 
```

と書いておけばPDFプレビューできる。
Leopardのプレビュー機能は，再読み込みにやや難があるが，非アクティブ→アクティブのタイミングでちゃんと再読み込みしてくれる。

### 使い方 {#mfe06d22}

asy で起動する。help と入力すれば詳しいマニュアルが現れる。
