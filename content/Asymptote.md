---
title: "Asymptote"
url: "/Asymptote/"
date: 2009-01-16T04:41:54Z
pukiwiki: "Asymptote"
---

# Asymptote

## [Asymptote](http://asymptote.sourceforge.net/) {#dd856e20}

Asymptote は [MetaPost](/MetaPost/) を発展させたベクトルグラフィック記述言語です。
TeX Live に標準で含まれています。

***

***

### 発音 {#te374add}

最初見たときにどう発音すればいいかよく分からなかったので，
[Pronunciation of asymptote - how to pronounce asymptote correctly.](http://www.howjsay.com/index.php?word=asymptote)
（注意：音が出ます）で確認したところ「アスィムトートゥ」みたいな感じで発音するみたいです。
発音記号では\[æ'sim(p)tout\]。
英単語としての意味は“漸近線”。

### インストール {#a2be7136}

本家や [CTAN:graphics/asymptote/](https://mirror.ctan.org/graphics/asymptote/) に各種バイナリがあります。

### ビルド {#e0083d41}

ソースからコンパイルするのも簡単です。

OS X でコンパイルする際は，OS の readline ライブラリが古いので，あらかじめ新しい
readline ライブラリをインストールしておくと，コマンドラインのヒストリー機能などが使えるようになります。
Asymptote ソースを展開したディレクトリに
[gc-7.4.2.tar.gz](http://www.hboehm.info/gc/gc_source/gc-7.4.2.tar.gz)
を展開せずに置き，

```
./configure
# 非標準なところにlibreadlineがある場合は次のように指定
# LDFLAGS="-L/usr/local/lib" CPPFLAGS="-I/usr/local/include" ./configure
make
make install
```

でできます。

<!-- gc-7.1.tar.gz は OS X 10.6 (Snow Leopard) で次のようなエラーになる。 -->
<!--  -->
<!-- In file included from mach_dep.c:163: -->
<!-- /usr/include/ucontext.h:42:2: error: #error ucontext routines are deprecated, and require _XOPEN_SOURCE to be defined -->
<!--  -->
<!-- このときは gc-7.1 の中で ucontext.h をインクルードしているファイルが二つ -->
<!-- あるのを sys/ucontext.h をインクルードするように書き換えてからその（gc-7.1 の）中で -->
<!--  -->
<!-- ./configure - -disable-shared  - -enable-large-config -->
<!-- make -->
<!--  -->
<!-- し，一つ上に上がって make し直せばよい。 -->

### OS X でのプレビュー {#dc357da5}

標準では gv あるいは GSview を使った PostScript プレビューになります。
これは Mac でも（gv をインストールしておけば）可能ですが，X11
を立ち上げておかなければなりません。
より簡単には asy -f pdf で起動するか，あるいは ~/.asy/config.asy に

```
import settings;
outformat="pdf"; 
```

と書いておけば PDF プレビューできます。 <!-- Leopard のプレビュー機能は，再読み込みにやや難があるが， --> <!-- 非アクティブ→アクティブのタイミングでちゃんと再読み込みしてくれる。 -->

### 使い方 {#mfe06d22}

asy または asy -f pdf で起動します。help と入力すれば詳しいマニュアルが現れます。

#### 日本語対応 (OS X) {#q20b2da8}

/.asy/config.asy を次のようにすれば日本語が通るようです（要日本語対応
[Ghostscript](/Ghostscript/)）。

- upLaTeX の場合

```
import settings;
tex="latex";
texcommand="uplatex";
```

- pLaTeX の場合

```
import settings;
tex="latex";
texcommand="platex";
```

platex のデフォルトが UTF-8 になっていない場合は "platex-utf8" とします。
こういうコマンドがなければエイリアスかバッチファイルで作りましょう。
"platex -kanji=utf8" のようにはできないようです。

#### 日本語対応 (Windows) {#f6f53eb8}

私の簡単なテストでは texdvicommand="platex --kanji=utf8";
のようにオプションを含めることはできませんでした。
ただし Windows 用バイナリです。
全体がコマンド名と見なされるようです。
しかし shift jis でも問題なく通るようです（危ない "表" なども大丈夫でした）。
テストした config.asy は

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

うまくいったのは、偶然うまくゆく例を使ったためで，一般には Shift_JIS
エンコーディングの場合，0x5c を含む文字はだめです。
W32TeX の platex は Shift_JIS がデフォルトなので，texcommand="platex";
などとすることはできません。
platex --kanji=utf8 ... と同じ役割をするコマンド
platex-utf8.exe を使って以下のように設定し，Asymptote で日本語を使うには
UTF-8 を使ってください：

```

texcommand="platex-utf8";
texdvicommand="platex-utf8";
```

おそらく EUC でも OK でしょう。
EUC を使う場合は次のようにしておきます：

```
texcommand="platex-euc";
texdvicommand="platex-euc";
```

最新のものでは，texdvicommand なる変数は無くなっているかも知れません。
その場合は，単に関連する行を削除するだけで OK です。

<!-- (本文にコメントを書いてすみません。適当に移動してください。 kakuto) -->
<!-- (どうもありがとうございます。Windowsでのテストをさぼっていました。すみません - - okumura) -->

#### 日本語を使った例 {#x0dd2813}

jsarticle 相当の日本語フォントの設定をするために [minijs.sty](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/minijs.sty)
を読み込んでいます。

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

- [Asymptote project on SourceForge](http://sourceforge.net/projects/asymptote/)
- [Asymptote に関する投稿 - Qiita](http://qiita.com/tags/asymptote)
- [Asymptote のつかいかた](http://2nd.geocities.jp/asy_zenkin/) → ひととおりの使い方が説明された数少ない日本語リソース。TeX Live 2014 対応
- [W32Tex や Asymptote の導入(インストール)に成功するまで経緯（１）](http://blogs.yahoo.co.jp/eikei375/38640701.html)
- [Sukarabe&#8217;s Easy Living &raquo; Asymptote](http://njet.oops.jp/wordpress/category/%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF/asymptote/)
- [Asymptote 問題集](http://d.hatena.ne.jp/denpoya/)
- [asymptote メモ](http://www.kabipan.com/computer/asymptote/)
- [実験室(Asymptote)](http://homepage2.nifty.com/domae/asymptote.html)
- [LaTeXで使えるベクタグラフィック言語AsymptoteをWindowsで試す](http://d.hatena.ne.jp/hyuki/20090216#tex)
- [Asymptoteにおける\tate](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1077)
- [Asymptoteで日本語を表示させられませんでした](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=765)

#### License {#a68c9862}

[GPLv3](http://sourceforge.net/p/asymptote/code/HEAD/tree/trunk/asymptote/LICENSE), [LGPLv3](http://sourceforge.net/p/asymptote/code/HEAD/tree/trunk/asymptote/LICENSE.LESSER)

#### ChangeLog {#qa654d5d}

- [http://sourceforge.net/p/asymptote/code/HEAD/tree/](http://sourceforge.net/p/asymptote/code/HEAD/tree/)
    - [log](http://sourceforge.net/p/asymptote/code/HEAD/log/)
