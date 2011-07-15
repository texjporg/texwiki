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
は [MetaPost](/MetaPost/) を発展させたベクトルグラフィック記述言語。

- [Asymptote](http://asymptote.sourceforge.net/)
- [Asymptote project on SourceForge](http://sourceforge.net/projects/asymptote/)

### 発音 {#te374add}

最初見たときにどう発音すればいいかよく分からなかったので，
[Pronunciation of asymptote - how to pronounce asymptote correctly.](http://www.howjsay.com/index.php?word=asymptote)
(注意：音が出ます)
で確認したところ「アスィムトートゥ」みたいな感じで発音するみたいです。

### インストール {#a2be7136}

本家や[CTAN:graphics/asymptote/](https://mirror.ctan.org/graphics/asymptote/)に各種バイナリがある。

ソースからコンパイルするのも簡単。
Mac OS Xでコンパイルする際は，OSのreadlineライブラリが古いので，あらかじめ新しいreadlineライブラリをインストールしておくと，コマンドラインのヒストリー機能などが使えるようになる。
Asymptoteソースを展開したディレクトリに
[gc-7.1.tar.gz](http://www.hpl.hp.com/personal/Hans_Boehm/gc/gc_source/gc-7.1.tar.gz)
を展開せずに置き，

```
./configure
# 非標準なところにlibreadlineがある場合は次のように指定
# LDFLAGS="-L/usr/local/lib" CPPFLAGS="-I/usr/local/include" ./configure
make
make install
```

でできる。

Mac OS X 10.6 (Snow Leopard) では次のようなエラーになる。

```
In file included from mach_dep.c:163:
/usr/include/ucontext.h:42:2: error: #error ucontext routines are deprecated, and require _XOPEN_SOURCE to be defined
```

このときは gc-7.1 の中で ucontext.h をインクルードしているファイルが二つあるのを sys/ucontext.h をインクルードするように書き換えてからその（gc-7.1 の）中で

```
./configure --disable-shared  --enable-large-config
make
```

し，一つ上に上がって make し直せばよい。

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
```

platex のデフォルトがUTF-8になっていない場合は "platex-utf8" とする。こういうコマンドがなければエイリアスかバッチファイルで作る。"platex -kanji=utf8" のようにはできないようだ。また，日本語対応dvipsのコマンドが別名の場合は

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
dvips="dvips";
dvipsOptions="-Ppdf";
psviewer="c:/ghostgum/gsview/gsview32.exe";
```

うまくいったのは、偶然うまくゆく例を使ったためで、一般には Shift_JIS
エンコーディングの場合、0x5c を含む文字はだめです。 W32TeX の
platex は Shift_JIS がデフォルトなので、texcommand="platex"; などと
することはできません。 platex --kanji=utf8 ... と同じ役割をする
コマンド platex-utf8.exe を使って以下のように設定し、
Asymptote で日本語を使うには UTF-8 を使ってください:

```

texcommand="platex-utf8";
texdvicommand="platex-utf8";
```

おそらく、 EUC でも ok でしょう。 EUC を使う場合は次のようにしておきます:

```
texcommand="platex-euc";
texdvicommand="platex-euc";
```

最新のものでは、texdvicommand なる変数は無くなっているかも知れません。
その場合は、単に関連する行を削除するだけで ok です。

(本文にコメントを書いてすみません。適当に移動してください。 kakuto)

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
