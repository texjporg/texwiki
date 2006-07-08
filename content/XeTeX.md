---
title: "XeTeX"
url: "/XeTeX/"
date: 2006-06-06T23:57:52Z
pukiwiki: "XeTeX"
---

# XeTeX

## XeTeX {#a81f78a6}

これはスタブです。書き直してください。

### XeTeXとは {#v9b12e60}

[The XeTeX typesetting system](http://scripts.sil.org/xetex)
はutf-8ベースのTeX。
「ズィーTeX」と読む。
Mac OS X上で開発され，システムが認識するOpenTypeフォントをそのまま使える。
Linux版もある。W32 版は Linux 版を移植したものである。 Linux と W32 では、
使えるフォントは OS が認識しているものと言うより、FontConfig が認識して
いるものと言ったほうが正確である。デフォルトではタイプセット時に、パイプ
によって出力がドライバに送られ、最終出力は pdf となる。オプション --no-pdf
によってこれを 2 段階に分けることもできる。この場合は .xdv ファイル
(.dvi ファイルを拡張したもの) を出力する。.xdv ファイルをドライバによって
pdf に変換する。 xdv2pdf は Mac 専用のドライバであって、他では利用できない。
Linux と W32 では、汎用の xdvipdfmx というドライバを用いる。これは
dvipdfmx を XeTeX 用に拡張したものである。従って Linux と W32 では、
graphics パッケージや color パッケージなどを使用するとき、必ず dvipdfm
オプションを付加しておくのを忘れてはいけない。

### Macでのインストール {#x46670ed}

[ptetex](http://www.nn.iij4u.or.jp/~tutimura/tex/ptetex.html)
をインストールしたMac OS X 10.4.xでインストールしてみた。
本家から XeTeX_099b.dmg をダウンロードし，ダブルクリックして現れる XeTeX.pkg
をダブルクリックして先に進んでいくとエラーになる。
インチキだが

```
cd /usr/local/teTeX/bin
ln -s . powerpc-apple-darwin-current
```

とするとインストーラが動く。

```
cd /usr/local/teTeX/share
mv texmf.local texmf-local
cd texmf-local
ln -s ../texmf-var/fonts/map/dvips/updmap dvips
```

/usr/local/teTeX/share/texmf-dist/tex/generic/config/language.dat
の The following languages are disabled by default.
と書いてあるところ以降を %! でコメントアウトし

```
fmtutil --byfmt xetex
fmtutil --byfmt xelatex
```

### Windows でのインストール {#j287e7c2}

<!-- XeTeX for W32 のインストール方法 -->

cf.[qa:43295](https://okumuralab.org/~okumura/texfaq/qa/43295.html)

最新の web2c-7.5.5-w32.tar.gz を入手して、TeX のインストール
トップディレクトリで展開して下さい。この中に xetex をサポートする
fmtutil.cnf と texmf.cnf が入っています。

xetex-w32.tar.bz2 を TeX のインストールトップディレクトリで展開して下さい。

TopDir/share/texmf/fonts/conf に移動し、(つまりカレントディレクトリとし)
そこにある fonts.conf というファイルを編集します。編集するのは
"Find fonts in these directories" というセクションだけです。
そこにはデフォルトで、 Windows のシステムフォントディレクトリだけが

```
    <dir>c:/windows/fonts</dir>
```

として入れてありますから、このままで良い場合は編集する必要はありません。
ディレクトリの名前が違う場合には変更する必要があります。
Windows のシステムフォントディレクトリの他に、購入したフォントのディレクトリがあれば、
以下の例のように追加することができます:

```
    <dir>c:/windows/fonts</dir>
    <dir>c:/usr/local/share/texmf/fonts/opentype/dnscreen/hiragino</dir>
    <dir>c:/usr/local/share/texmf/fonts/opentype/adobe/kozuka</dir>
    <dir>c:/usr/local/share/texmf/fonts/opentype/adobe/others</dir>
```

コンソール上で

```
    fc-cache -v -f
```

なるコマンドを実行して下さい。これはフォントディレクトリにある各ファイル
をスキャンして、キャッシュファイルを作成するコマンドです。キャッシュ
ファイルは、TopDir/share/texmf/fonts/cache に作成されます。
大きいフォントファイルが大量にあると、このコマンドは終了までに数分かかる
ことがありますから、気長に他の仕事をしていて下さい。

以上でインストールが終了します。使用可能フォント名は、通常のものが使えます。
名前を見たい場合は、 fc-list >namelist.txt とすると、 namelist.txt に記録
されます。ただし utf8 で記録されますから、もし shift-JIS で見たかったら
nkf -s namelist.txt >namelist.sj とすれば良いでしょう。あるいは最初に
fc-list | nkf -s >namelist.sj とすると、直接 shift-JIS のファイルになります。

### 実行例 {#n6a9a656}

簡単なサンプルtest.texをUTF-8で書く：

```
\documentclass{article}
\begin{document}
Hello, \TeX!
\font\foo="ヒラギノ丸ゴ Pro W4"
\foo 日本語
\end{document}
```

これで xelatex test とすると，test.pdf ができる。

日本語のルールに則って行分割をするには次のようにする。

```
\XeTeXlinebreaklocale "ja_JP"
\XeTeXlinebreakskip=0em plus 0.1em minus 0.01em
\XeTeXlinebreakpenalty=0
```

元に戻すには次のようにする。

```
\XeTeXlinebreaklocale ""
```

ただしXeTeXは日本語の組版ルールをよく知っているわけではないので，現状ではまともではない。

### 参考サイト {#m6b448cf}

- [The XeTeX typesetting system](http://scripts.sil.org/xetex) (本家)
- [XeTeX Info Page](http://www.tug.org/mailman/listinfo/xetex) (TUG)
