---
title: "TeXをWebで"
url: "/TeXをWebで/"
date: 2004-09-23T04:38:27Z
pukiwiki: "TeXをWebで"
---

# TeXをWebで

## TeX を Web 上で提供する方法 {#xdac6c3a}

### はじめに {#vd570d76}

[TeX を使ってみよう](http://oku.edu.mie-u.ac.jp/~okumura/texonweb/)
のように，TeX 形式で文章を打ち込めば PDF でダウンロードできるサービスを提供するための方法を解説します。
ぜひ各組織でこのようなサービスを立ち上げていただければ幸いです。

### 準備 {#y7017653}

まずサーバが必要です。
通常の Web サーバ上で運用することもできますが，心配なら独立したマシンを調達します。
最近の Pentium/Celeron クラスの PC に Linux や FreeBSD 等を載せれば，うまくすれば数万円でできます。

通常は Linux などをサーバ用にインストールすれば Apache や PHP が入るはずです。
これらについては特に手を加える必要はありません。

もし \ が \\\ になるようなら，php.ini で magic_quotes_gpc = Off にしてください。
Mac OS X 10.2 では /usr/lib/php.ini を作ってそこに書き込めばいいようです。
Mac OS X 10.3 では /etc/httpd/httpd.conf の &lt;IfModule mod_php4.c> ... &lt;/IfModule>
の中に書き込めばいいようです。

pTeX（日本語版 TeX）については，日本語化が十分でないディストリビューションもあるようです。
特に，dvipdfm が日本語化されていないかもしれません。
ソースからコンパイルする方法は以下のページをご参照ください。

- [LinuxWiki:Apache 2](https://okumuralab.org/~okumura/linux/?Apache%202)
- [LinuxWiki:PHP](https://okumuralab.org/~okumura/linux/?PHP)
- [UNIX系OSでのteTeX，pTeX，pLaTeX2eのインストール](/Make/)

### セキュリティ上の配慮 {#aeb59313}

以下で $TEXMF と書いた部分は /usr/\[local\[/teTeX\*\]/\]share/texmf
のような名前のディレクトリを意味します。

TeX の設定ファイル $TEXMF/web2c/texmf.cnf が次のようになっていなかったら書き換えます。

```
% シェルにエスケープさせない
shell_escape = f
% 上位ディレクトリの読み書きを禁じる
openout_any = p
openin_any = p
% 1行めのコメントで TeX の種類を指定する機能を外す
parse_first_line = f
```

さらに，shell_escape_commands = ... の形で例外的に呼び出せるコマンドを列挙している場合がありますので，これも精査あるいは削除します。

#### テスト1 {#p4f76648}

次のようなファイルを処理してみてください。
エラーになれば大丈夫です。

```
\documentclass{article}
\begin{document}
\obeylines
\input /etc/passwd
\end{document}
```

#### テスト2 {#o74e23ce}

次のようなファイルを処理してみてください。
カレントディレクトリに hoge というファイルができなければ大丈夫です。

```
\documentclass{article}
\begin{document}
\write18{touch hoge}
\end{document}
```

参考リンク：[Are Text-Only Data Formats Safe?](http://cseweb.ucsd.edu/~hovav/papers/csr10.html)

### スクリプトの準備 {#bf97e60c}

まず適当な Apache のドキュメントが置ける場所に適当なディレクトリを作ります。
このディレクトリ自体は Apache のプロセスに書き込みができないようにしておきます。

この中に次の二つのファイルを置きます。

- [index.php](http://oku.edu.mie-u.ac.jp/~okumura/texonweb/index_php.txt)
- [do.php](http://oku.edu.mie-u.ac.jp/~okumura/texonweb/do_php.txt)

また，空のファイル count.txt と空のディレクトリ work
を作ります。
これらは Apache のプロセスに書き込みができるようにします（ファイルは 666，ディレクトリは 777
にすればいいでしょう）。

ビットマップフォントの自動生成を許すなら $TEXMF/fonts/pk
というディレクトリも Apache のプロセスに書き込みができるようにします。
ただ，今は標準的なフォントは Type 1
形式で用意されていますので，この必要はほとんどありません。
[cm-super](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/cm-super.html) もインストールしておけばなおさらです。
もっとも，tfm の生成もありますので，$TEXMF/fonts/tfm/jknappen
も書き込み可にしておかなければならないでしょう。

do.php の中身は適当に直します（特に teTeX をインストールしたパス）。
次のようになっている部分も必要に応じて直します。
これは処理を10秒，1024Kバイトに制限する場合です。

```
ulimit -t 10 -f 1024
```

***

- Windows環境で動かしているかたがいれば設置法を教えてください --  2005-01-22 (土) 22:53:11
- [qa:35772](https://okumuralab.org/~okumura/texfaq/qa/35772.html)を参考に。 --  2005-05-11 (水) 22:52:05
    <!-- -fsdafsdafasd - - fdsa &new{2005-10-17 (月) 16:05:41}; -->

- Vine Linux 3.2の/usr/share/texmf/web2c/texmf.cnf でも 「openin_any = a」でした。 -- 1156162091 2006-08-21 (月) 21:08:11
- UTF-8 版のコマンドが、platex-euc になっているらしく、処理結果が文字化けします。正しくは platex-utf8 と思います。 -- ゼファー生 2008-06-16 (月) 19:15:22
- あれあれ，いつこんなことになったんでしょう。速攻で直しました。m(\_\_)m -- 奥村 2008-06-16 (月) 19:47:05
- 修正ありがとうございます。奥村先生のサイトを多いに参考にして、青空文庫テキスト zip ファイルの URL を張り付ければ、自動的に PDF化までできるような「てふてふ君」（ [http://www.aozora.jp/tools/tex/](http://www.aozora.jp/tools/tex/) ）を作りました。 -- ゼファー生 2008-06-23 (月) 12:41:00
- こんなサイトができているようです。P-Lab （[http://www.acl-inc.co.jp/p-lab/](http://www.acl-inc.co.jp/p-lab/)） -- 川嶋 2008-09-11 (木) 10:39:45
- index.php, do.php共に404 Not Foundになってしまいます。 -- 1273799701 2010-05-14 (金) 10:15:01
- index.php, do.php共に404 Not Foundになってしまいます。 -- 1273804519 2010-05-14 (金) 11:35:19
- すいませんでした。直ったでしょうか -- okumura 2010-05-14 (金) 12:15:37
- 無事ダウンロードできました。ご対応ありがとうございます。 -- 1273814348 2010-05-14 (金) 14:19:08
