---
title: "XeTeX"
url: "/XeTeX/"
date: 2006-06-06T23:57:52Z
pukiwiki: "XeTeX"
---

# XeTeX

## XeTeX {#a81f78a6}

### XeTeX とは {#v9b12e60}

[The XeTeX typesetting system](http://scripts.sil.org/xetex)
は UTF-8 ベースの TeX。 <!-- 入力ファイルは UTF-8 ベースだが，内部動作は UCS16 ベース。 --> <!-- これを知らないと，BMP 以外の文字をアクティブにしたりする時にハマルことになる。 -->
「ズィーTeX」と読む。
Mac OS X 上で開発され，システムが認識する OpenType フォントをそのまま使える。
Linux 版もある。W32 版は Linux 版を移植したものである。 Linux と W32 では，
使えるフォントは OS が認識しているものと言うより，FontConfig が認識して
いるものと言ったほうが正確である。
なお，バージョン 0.995 以降では（ただし 0.995 でも xetex は svn revision
344 以降，xdvipdfmx は svn revision 74 以降），

```
[FontFileName:FaceIndex]:features
```

なるフォントの指定法も可能になり，FontConfig とは無関係に， Kpathsearch
が見つけることができるところにある “Uninstalled fonts” を native fonts
として使用することもできるようになっている。例えば

```
\font\x="[msmincho.ttc:1]:mapping=tex-text,color=0000FF" at 12pt
```

は

```
\font\x="MS PMincho:mapping=tex-text,color=0000FF" at 12pt
```

と同じように振舞う。前者のほうが FontConfig に関係しないので，早く処理
できるかもしれない。 FaceIndex は不要の場合は省略できる。

デフォルトではタイプセット時に，パイプ
によって出力がドライバに送られ，最終出力は pdf となる。オプション --no-pdf
によってこれを 2 段階に分けることもできる。この場合は .xdv ファイル
（.dvi ファイルを拡張したもの）を出力する。.xdv ファイルをドライバによって
pdf に変換する。 xdv2pdf は Mac 専用のドライバであって，他では利用できない。
Linux と W32 では，汎用の xdvipdfmx というドライバを用いる。これは
dvipdfmx を XeTeX 用に拡張したものである。
xdv2pdf は Mac OS X を有効利用するドライバだが，仮想フォントを読むことが
できないので，通常の tfm, vf 形式の TeX, LaTeX 用フォントも利用する場合には
Mac OS X であっても xdvipdfmx を使うことになる。
また、上記の "Uninstalled fonts" を使う機能も、ドライバに xdvipdfmx を使う
場合だけ有効である。直接 pdf を出力する場合には

```
xelatex --output-driver='xdvipdfmx -q -E' foo
```

のようにすると，デフォルトのドライバを変更して xdvipdfmx
を使うようにできる。なお Mac OS X 用の XeTeX には最新の 0.995 以降の
ものにしか xdvipdfmx は含まれていない。
パッケージに同梱されている graphics.cfg と color.cfg は xdv2pdf 用の設定が
なされている。従って Linux と W32 では，
graphics パッケージや color パッケージなどを使用するとき，必ず dvipdfm
オプションを付加しておくのを忘れてはいけない。ただし，Jonathan Kew さんに
より，Mac と Linux-W32 とでインターフェイスを統一する仕事がなされており，
最新版の xdvipdfmx と XeTeX を W32 版でテストしてみると，
デフォルトのままで xetex.def を使えるようになっている。

### Mac でのインストール {#x46670ed}

[ptetex](http://www.nn.iij4u.or.jp/~tutimura/tex/ptetex.html)
をインストールした Mac OS X 10.4.x でインストールしてみた。
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

最新の 0.995 (Web2C-7.5.5, Kpse-3.5.5) は TDS 1.1 なので，もっとスムーズに
インストールできるのではないかと思われる。

### Windows でのインストール {#j287e7c2}

<!-- XeTeX for W32 のインストール方法 -->

cf. [qa:43295](https://okumuralab.org/~okumura/texfaq/qa/43295.html)

最新の web2c-7.5.5-w32.tar.gz を入手して，TeX のインストール
トップディレクトリで展開して下さい。この中に xetex をサポートする
fmtutil.cnf と texmf.cnf が入っています。

xetex-w32.tar.bz2 を TeX のインストールトップディレクトリで展開して下さい。

TopDir/share/texmf/fonts/conf に移動し，（つまりカレントディレクトリとし）
そこにある fonts.conf というファイルを編集します。
編集するのは “Find fonts in these directories” というセクションだけです。
そこにはデフォルトで， Windows のシステムフォントディレクトリだけが

```
    <dir>c:/windows/fonts</dir>
```

として入れてありますから，このままで良い場合は編集する必要はありません。
ディレクトリの名前が違う場合には変更する必要があります。 <!-- Windows 2000 だと c:/winnt/fonts となりますが，Windows 2000 も最近はメジャーでは --> <!-- なく Windows XP の方が一般的でしょうか。 -->
Windows のシステムフォントディレクトリの他に，購入したフォントのディレクトリがあれば，
以下の例のように追加することができます：

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
をスキャンして，キャッシュファイルを作成するコマンドです。キャッシュ
ファイルは，TopDir/share/texmf/fonts/cache に作成されます。
大きいフォントファイルが大量にあると，このコマンドは終了までに数分かかる
ことがありますから，気長に他の仕事をしていて下さい。

以上でインストールが終了します。使用可能フォント名は，通常のものが使えます。
名前を見たい場合は，

```
   fc-list >namelist.txt
```

とすると， namelist.txt に記録されます。
ただし UTF-8 で記録されますから，もし Shift_JIS で見たかったら

```
   nkf -s namelist.txt >namelist.sj
```

とすれば良いでしょう。あるいは最初に

```
   fc-list | nkf -s >namelist.sj
```

とすると，直接 Shift_JIS のファイルになります。

### 実行例 {#n6a9a656}

簡単なサンプル test.tex を UTF-8 で書く：

```
\documentclass{article}
\begin{document}
Hello, \TeX!
\font\foo="ヒラギノ丸ゴ Pro W4:-palt"
\foo 日本語
\end{document}
```

これで xelatex test とすると，test.pdf ができる。
日本語 OpenType フォントを使用する場合，デフォルトで詰め組になってしまうので，
ベタ組をするためには，Proportional Alternative (palt) フィーチャーを
無効にしておく。

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

ただし XeTeX は日本語の組版ルールをよく知っているわけではないので，現状ではまともではない。

### 参考サイト {#m6b448cf}

- [The XeTeX typesetting system](http://scripts.sil.org/xetex) （本家）
- [XeTeX Info Page](http://www.tug.org/mailman/listinfo/xetex) (TUG)

### コメント {#d0504266}

- 使用環境は Windows2000(SP4) です。ヒラギノは持っていないので「小塚明朝 Pro Acro R:-palt」で試したのですが「! Font \foo="フォント名は文字化けPro Acro R:-palt" not loadable: installed font not found.」と言われて失敗しました。代わりに「Kozuka Mincho Pro Acro:-pait」で成功しました。「MS P明朝」「みかちゃん_o」では成功。fc-list での namelist.txt で得られるフォント名一覧でフォント名には二番目の要素を使えば良いのかもしれません。 -- tony 2006-07-17 (月) 15:32:30
- 最新のものでは、 \[フォントファイル名\] という指定も可能になっています: 例: \font\f="\[KozMinPro-Regular.otf\]:mapping=tex-text,color=FF0000" -- kakuto 2006-08-18 (金) 10:53:19
