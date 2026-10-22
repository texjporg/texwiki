---
title: "Asymptote"
url: "/Asymptote/"
date: 2009-01-16T04:41:54Z
pukiwiki: "Asymptote"
---

# Asymptote

## [Asymptote](https://asymptote.sourceforge.io/) {#dd856e20}

Asymptote は [MetaPost](/MetaPost/) を発展させたベクトルグラフィック記述言語です。
TeX Live に標準で含まれています。

***

***

### 公式サイト {#m9a2a3cb}

- [Asymptote](https://asymptote.sourceforge.io/)

### 発音 {#te374add}

最初見たときにどう発音すればいいかよく分からなかったので，
[ASYMPTOTE | Pronunciation in English](https://dictionary.cambridge.org/pronunciation/english/asymptote)
（注意：音が出ます）で確認したところイギリス英語では「アスィムトートゥ」、アメリカ英語では「アスィムト」みたいな感じで発音するみたいです。
発音記号では\[æ'sim(p)tout\]。
英単語としての意味は“漸近線”。

### インストール {#a2be7136}

[https://sourceforge.net/projects/asymptote/files/](https://sourceforge.net/projects/asymptote/files/) に各種バイナリがあります。

また，Asymptote は [Ghostscript](/Ghostscript/) に依存しています。

Asymptote 2.33 以降は，Ghostscript の仕様変更[^1]に伴う改変がなされています。Asymptote 2.33 以降を使用する場合は Ghostscript も 9.14 以上にアップデートする必要があります。逆に，Asymptote 2.32 以前を使用する場合は 9.14 以下をインストールする必要があります。

### ビルド {#e0083d41}

ソースからコンパイルするのも簡単です。

[https://github.com/vectorgraphics/asymptote/tags](https://github.com/vectorgraphics/asymptote/tags) や [CTAN:graphics/asymptote](https://mirror.ctan.org/graphics/asymptote) にソースコードがあります。

macOS でコンパイルする際は，OS の readline ライブラリが古いので，あらかじめ新しい
readline ライブラリをインストールしておくと，コマンドラインのヒストリー機能などが使えるようになります。
Asymptote ソースを展開したディレクトリに
[gc-8.2.8.tar.gz](https://www.hboehm.info/gc/gc_source/gc-8.2.8.tar.gz)
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

### macOS でのプレビュー {#dc357da5}

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

#### 日本語対応 (macOS) {#q20b2da8}

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

<!-- platex のデフォルトが UTF-8 になっていない場合は "platex-utf8" とします。 -->
<!-- こういうコマンドがなければエイリアスかバッチファイルで作りましょう。 -->
<!-- "platex -kanji=utf8" のようにはできないようです。 -->

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
W32TeX \[2018/03/26\] 以降の platex は UTF-8 がデフォルトですが
W32TeX \[2018/03/25\] 以前の platex は Shift_JIS がデフォルトなので，texcommand="platex";
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

jsarticle 相当の日本語フォントの設定をするために [minijs.sty](https://github.com/texjporg/jsclasses/blob/master/minijs.sty)
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
[dnorm-asy.pdf](https://web.archive.org/web/20101128172948/http://oku.edu.mie-u.ac.jp/~okumura/texwiki/image/dnorm-asy.pdf), 
[dnorm-asy.png](https://web.archive.org/web/20101128172748if_/http://oku.edu.mie-u.ac.jp/~okumura/texwiki/image/dnorm-asy.png)

<img src="https://web.archive.org/web/20101128172748if_/http://oku.edu.mie-u.ac.jp/~okumura/texwiki/image/dnorm-asy.png" alt="">

#### 日本語対応 (Linux/BSD/macOS/Windows共通) {#k4f596cf}

AsymptoteスクリプトをUTF-8で書いてその中でbxcjkjatypeパッケージの利用を指定すれば，config.asyを設けなくても日本語を含むEPSやPDFが生成できるようです。
例:

```
texpreamble("\usepackage[whole]{bxcjkjatype}");
for(int i=0; i<=9; i+=1){
  draw(shift(4.5W+(i-4.5)*N)*(0E--9E));
  draw(shift(4.5S+(i-4.5)*E)*(0N--9N));
}
string[] k={"一", "二", "三", "四", "五", "六", "七", "八", "九"};
for(int i=1; i<=9; i+=1){
  label(format("%d", i), (i-5)*W+5N);
  label(scale(0.8)*k[i-1], 5E+(i-5)*S);
}
label("将棋図巧\quad 第一番", 6S);
void put(pair z, string s, transform t){label(t*s, (z.x-5)*W+(z.y-5)*S);}
void operator +(pair z, string s){put(z, s, rotate(0));}
void operator -(pair z, string s){put(z, s, rotate(180));}
5+1I+"角"; 7+1I+"金"; 7+2I+"と"; 9+2I+"金"; 8+3I+"歩"; 8+6I+"香"; 5+7I+"龍";
8+8I+"銀"; 7+9I+"桂";
10+6I+"▲"; 10+7I+"歩"; 10+8I+"銀";
8+1I-"歩"; 8+2I-"銀"; 9+3I-"歩"; 6+4I-"銀"; 7+4I-"香"; 9+4I-"桂"; 6+5I-"玉";
1+6I-"角"; 3+6I-"龍"; 9+6I-"桂"; 6+7I-"歩"; 8+7I-"と";
unitsize(15pt);
```

### 関連リンク {#xbb02c40}

- [Asymptote project on GitHub](https://github.com/vectorgraphics/asymptote)
- [Asymptote project on SourceForge](https://sourceforge.net/projects/asymptote/)
- [Asymptote に関する投稿 - Qiita](http://qiita.com/tags/asymptote)
- [Asymptote のつかいかた \[Wayback Machine\]](http://web.archive.org/web/20170722173253/http://2nd.geocities.jp/asy_zenkin/) → ひととおりの使い方が説明された数少ない日本語リソース。TeX Live 2014 対応
- [Sukarabe&#8217;s Easy Living &raquo; Asymptote](http://njet.oops.jp/wordpress/category/%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF/asymptote/)
- [Asymptote の検索結果 - denpoyaのブログ](https://denpoya.hatenablog.com/search?q=Asymptote)
- [asymptote メモ](http://www.kabipan.com/computer/asymptote/)
- [実験室(Asymptote)](http://minamo.my.coocan.jp/asymptote.html)
- [LaTeXで使えるベクタグラフィック言語AsymptoteをWindowsで試す](https://hyuki.hatenablog.com/entry/20090216/tex)
- [Asymptoteを使って図形をきれいに描こう](https://www.juen.ac.jp/math/nakagawa/asymptoteguide.html)
- [Asymptoteにおける\tate](https://okumuralab.org/tex/mod/forum/discuss.php?d=1077)
- [Asymptoteで日本語を表示させられませんでした](https://okumuralab.org/tex/mod/forum/discuss.php?d=765)

#### License {#a68c9862}

[GPLv3](https://github.com/vectorgraphics/asymptote/blob/master/LICENSE), [LGPLv3](https://github.com/vectorgraphics/asymptote/blob/master/LICENSE.LESSER)

#### ChangeLog {#qa654d5d}

- [https://github.com/vectorgraphics/asymptote](https://github.com/vectorgraphics/asymptote)
    - [https://github.com/vectorgraphics/asymptote/commits/master](https://github.com/vectorgraphics/asymptote/commits/master)

[^1]: EPS 出力デバイスについて，gs9.15 では epswrite が廃止され，代わりに gs9.14 で導入された eps2write が標準となっています。
