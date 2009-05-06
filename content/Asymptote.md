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
より簡単には asy -f pdf で起動するか，あるいは ~/.asy/config.asy に

```
import settings;
outformat="pdf"; 
```

と書いておけばPDFプレビューできる。
Leopardのプレビュー機能は，再読み込みにやや難があるが，非アクティブ→アクティブのタイミングでちゃんと再読み込みしてくれる。

### 使い方 {#mfe06d22}

asy または asy -f pdf で起動する。help と入力すれば詳しいマニュアルが現れる。

### 日本語対応 {#q20b2da8}

/.asy/config.asy を次のようにすれば日本語が通るようである（要日本語対応Ghostscript）。

```
import settings;
tex="latex";
texcommand="platex";
texdvicommand="platex";
```

platex のデフォルトがUTF-8になっていない場合は "platex-utf8" または "platex -kanji=utf8" などとしなければならない。また，日本語対応dvipsのコマンドが別名の場合は

```
dvips="dvipsk";
```

または

```
dvips="pdvips";
```

としないといけないだろう。

### 日本語対応（Windows） {#f6f53eb8}

私の簡単なテストでは texdvicommand="platex --kanji=utf8"; のように
オプションを含めることはできませんでした。ただし Windows 用バイナリです。
全体がコマンド名と見なされるようです。しかし shift jis でも問題なく
通るようです。危ない "表" なども大丈夫でした。テストした config.asy は

```
import settings;
tex="latex";
texpath="c:/w32tex/bin";
texcommand="platex";
texdvicommand="platex";
dvips="dvipsk";
dvipsOptions="-Ppdf";
psviewer="c:/ghostgum/gsview/gsview32.exe";
```

(kakuto 本文にコメントを書いてすみません。適当に移動してください。)

(どうもありがとうございます。Windowsでのテストをさぼっていました。すみません -- okumura)

### 例1 {#x0dd2813}

日本語を使った例。jsarticle相当の日本語フォントの設定をするために [minijs.sty](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/minijs.sty) を読み込んでいる。

```
usepackage("minijs");
import graph;
real dnorm(real x) { return exp(-x^2/2)/sqrt(2*pi); }
size(12cm,8cm,IgnoreAspect);
draw(graph(dnorm,-4,4,operator ..));
label("標準正規分布の密度関数 $y=\frac{1}{\sqrt{2\pi}}e^{-x^2\!/2}$",(0,0.45),S);
xaxis("$x$",BottomTop,LeftTicks); 
yaxis("$y$",LeftRight,RightTicks); 
```

出力
[dnorm-asy.pdf](http://oku.edu.mie-u.ac.jp/~okumura/texwiki/image/dnorm-asy.pdf), 
[dnorm-asy.png](http://oku.edu.mie-u.ac.jp/~okumura/texwiki/image/dnorm-asy.png)

### 関連リンク {#xbb02c40}

- [LaTeXで使えるベクタグラフィック言語AsymptoteをWindowsで試す](http://d.hatena.ne.jp/hyuki/20090216#tex)
