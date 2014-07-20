---
title: "TeXをWebで"
url: "/TeXをWebで/"
date: 2004-09-23T04:38:27Z
pukiwiki: "TeXをWebで"
---

# TeXをWebで

## TeX を Web 上で提供する方法 {#xdac6c3a}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

### はじめに {#vd570d76}

[TeX を使ってみよう](http://oku.edu.mie-u.ac.jp/~okumura/texonweb/)
のように，TeX 形式で文章を打ち込めば PDF でダウンロードできるサービスを提供するための方法を解説します。<br>
ぜひ各組織でこのようなサービスを立ち上げていただければ幸いです。<br>

### 準備 {#y7017653}

まずサーバが必要です。<br>
通常の Web サーバ上で運用することもできますが，心配なら独立したマシンを調達します。<br>
最近の Pentium/Celeron クラスの PC に Linux や FreeBSD 等を載せれば，うまくすれば数万円でできます。<br>

通常は Linux などをサーバ用にインストールすれば Apache や PHP が入るはずです。<br>
これらについては特に手を加える必要はありません。<br>

もし \ が \\\ になるようなら，php.ini で magic_quotes_gpc = Off にしてください。<br>
Mac OS X 10.3 では /etc/httpd/httpd.conf の &lt;IfModule mod_php4.c> ... &lt;/IfModule>
の中に書き込めばいいようです。<br>

Windows でも動作するようです。 → ｢TeXを使ってみよう｣をWindows上で動かせました ([qa:35772](https://okumuralab.org/~okumura/texfaq/qa/35772.html))

最近の Linux ディストリビューションは TeX Live 2014 以降になっているので UTF-8 に対応した e-upTeX, XeTeX, LuaTeX, LuaJITTeX が収録されています。<br>
ソースからコンパイルする方法は以下のページをご参照ください。<br>

- [LinuxWiki:Apache 2](https://okumuralab.org/~okumura/linux/?Apache%202)
- [LinuxWiki:PHP](https://okumuralab.org/~okumura/linux/?PHP)
- [TeX Live#ビルド](</TeX Live/#tdb9387a>)

### セキュリティ上の配慮 {#aeb59313}

以下で $TEXMF と書いた部分は /usr/\[local\[/texlive\*\]/\]share/texmf-dist
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

さらに，shell_escape_commands = ... の形で例外的に呼び出せるコマンドを列挙している場合がありますので，これも精査あるいは削除します。<br>
shell_escape = f の場合は shell_escape_commannds = に列挙してあるコマンドも実行しません。<br>

#### テスト1 {#p4f76648}

次のようなファイルを処理してみてください。<br>
エラーになれば大丈夫です。<br>

```
\documentclass{article}
\begin{document}
\obeylines
\input /etc/passwd
\end{document}
```

#### テスト2 {#o74e23ce}

次のようなファイルを処理してみてください。<br>
カレントディレクトリに hoge というファイルができなければ大丈夫です。<br>

```
\documentclass{article}
\begin{document}
\write18{touch hoge}
\end{document}
```

参考リンク：[Are Text-Only Data Formats Safe?](http://cseweb.ucsd.edu/~hovav/papers/csr10.html)

### スクリプトの準備 {#bf97e60c}

まず適当な Apache のドキュメントが置ける場所に適当なディレクトリを作ります。<br>
このディレクトリ自体は Apache のプロセスに書き込みができないようにしておきます。<br>

この中に次の二つのファイルを置きます。<br>

- [index.php](http://oku.edu.mie-u.ac.jp/~okumura/texonweb/index_php.txt)
- [do.php](http://oku.edu.mie-u.ac.jp/~okumura/texonweb/do_php.txt)

また，空のファイル count.txt と空のディレクトリ work
を作ります。<br>
これらは Apache のプロセスに書き込みができるようにします（ファイルは 666，ディレクトリは 777
にすればいいでしょう）。<br>

ビットマップフォントの自動生成を許すなら $TEXMF/fonts/pk
というディレクトリも Apache のプロセスに書き込みができるようにします。<br>
ただ，今は標準的なフォントは Type 1
形式で用意されていますので，この必要はほとんどありません。<br>
[Latin Modern](</Latin Modern/>) もインストールしておけばなおさらです。<br>
もっとも，tfm の生成もありますので，$TEXMF/fonts/tfm/jknappen
も書き込み可にしておかなければならないでしょう。<br>

do.php の中身は適当に直します（特に TeX Live をインストールしたパス）。<br>
次のようになっている部分も必要に応じて直します。
これは処理を10秒，1024Kバイトに制限する場合です。<br>

```
ulimit -t 10 -f 1024
```

### オンライン LaTeX エディタ {#u7712307}

#### フリーソフトウェア (オープンソースソフトウェア) {#g834836b}

- [ShareLaTeX](https://github.com/sharelatex/sharelatex)
- [JaxEdit](http://jaxedit.com/)
- [texlive.js](http://manuels.github.io/texlive.js/)
- [NoTex](https://notex.ch) An online text editor for reStructuredText, Markdown, LaTex and more!

#### フリーウェア (無料) {#e0fded48}

- [TeXを使ってみよう（upTeX版）](http://glc.l.u-tokyo.ac.jp/texonweb/)
- [Cloud LaTeX](https://cloudlatex.io/ja)

### Web で数式 {#m2a3514f}

- [mimeTeX](/mimeTeX/)

### 関連リンク {#cfaeb364}

- [LaTeX Online: Options continue to grow at Some TeX Developments](http://www.texdev.net/2013/02/24/latex-online-options-continue-to-grow/)
- [TeX implementations in the Cloud](http://cikitsa.blogspot.co.at/2013/01/tex-implementations-in-cloud.html)

***

- Windows環境で動かしているかたがいれば設置法を教えてください --  2005-01-22 (土) 22:53:11
- [qa:35772](https://okumuralab.org/~okumura/texfaq/qa/35772.html)を参考に。 --  2005-05-11 (水) 22:52:05
    <!-- -fsdafsdafasd - - fdsa &new{2005-10-17 (月) 16:05:41}; -->

- Vine Linux 3.2の/usr/share/texmf/web2c/texmf.cnf でも 「openin_any = a」でした。 -- 1156162091 2006-08-21 (月) 21:08:11
- UTF-8 版のコマンドが、platex-euc になっているらしく、処理結果が文字化けします。正しくは platex-utf8 と思います。 -- ゼファー生 2008-06-16 (月) 19:15:22
- あれあれ，いつこんなことになったんでしょう。速攻で直しました。m(\_\_)m -- 奥村 2008-06-16 (月) 19:47:05
- 修正ありがとうございます。奥村先生のサイトを多いに参考にして、青空文庫テキスト zip ファイルの URL を張り付ければ、自動的に PDF化までできるような「てふてふ君」（ [http://web.archive.org/web/20121019025017/http://www.aozora.jp/tools/tex/](http://web.archive.org/web/20121019025017/http://www.aozora.jp/tools/tex/) ）を作りました。 -- ゼファー生 2008-06-23 (月) 12:41:00
- こんなサイトができているようです。P-Lab （[http://web.archive.org/web/20081019184258/http://www.acl-inc.co.jp/p-lab/top](http://web.archive.org/web/20081019184258/http://www.acl-inc.co.jp/p-lab/top)） -- 川嶋 2008-09-11 (木) 10:39:45
- index.php, do.php共に404 Not Foundになってしまいます。 -- 1273799701 2010-05-14 (金) 10:15:01
- index.php, do.php共に404 Not Foundになってしまいます。 -- 1273804519 2010-05-14 (金) 11:35:19
- すいませんでした。直ったでしょうか -- okumura 2010-05-14 (金) 12:15:37
- 無事ダウンロードできました。ご対応ありがとうございます。 -- 1273814348 2010-05-14 (金) 14:19:08
- 共用サーバ上などで texmf.cnf を自分でいじれない場合に、スクリプト側でセキュリティ対策ができたらうれしいです。 -- 1306898839 2011-06-01 (水) 12:27:19
- TeX + HTML で baseline を揃える方法は何かないでしょうか？ -- 1307150911 2011-06-04 (土) 10:28:31
- 日本語の文字化けしました。TeX をnkf通すことで解決するようでしたので, do.php に於いて, platex 命令の前に nkf -j --overwrite を追加したところ解決できました。ご参考に -- yuki@熊本高専 2012-09-12 (水) 08:57:18
- ＠FreeBSD 9.0  -- 〃 2012-09-12 (水) 08:58:42
- 奥村先生のソースコードを参考に，ソースコードを貼り付ければPDFを生成するサイトを作ってみました．まだまだ製作途中ですが，Dropboxと連携すれば，画像ファイルや追加クラスファイルも対応できると思います．( [http://web.archive.org/web/20131209152348/http://tex-web.net/edit.php](http://web.archive.org/web/20131209152348/http://tex-web.net/edit.php) ) -- 不破 2013-01-30 (水) 00:56:52
