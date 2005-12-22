---
title: "Aspell"
url: "/Aspell/"
date: 2005-10-24T22:09:01Z
pukiwiki: "Aspell"
---

# Aspell

## Aspell {#asp4a889}

### Aspell について {#aspb1466}

AspellはIspellに機能を追加した新しいスペルチェッカです。TeXの命令を無視する機能もあります。

英語はもちろんのこと、ドイツ語・フランス語・ギリシア語・ロシア語などにも対応しています。

xyzzyから使う場合以外、日本語には完全対応というわけではありません。コマンドラインからの起動・EasyTeXの場合は日本語アルファベット混じり文で誤認識する程度（そこの置換は適切に行われない。それ以外の箇所は問題なく置換可能）、WinShellから使う場合は英語のみの文でないと誤認識がひどい、xyzzyから使う場合は日本語アルファベット混じり文を完全に無視（たとえば「これはtstです」のtstも無視）してくれる、と使い方によって対応状況はまちまちです。（以上から見て分かるように、もっとも使い勝手がいいのはxyzzyから使う場合でしょう。とはいえ、WinShell以外であれば日本語・アルファベット混じり文でもあまりひどくは気にならないと思います。）

上記の通り日本語アルファベット混じり文を完全無視してくれないのが嫌だとか、重いのがいやだとか特に理由がなければぜひAspellをお試しください。WinShell 3も標準で対応しています。

ここではAspell<del>のWindows版</del>について解説します。

### Aspell のインストール {#aspin466}

Aspellは本体と辞書ファイルが別々に配布されています。ここでは英語辞書のみをインストールすることにしましょう。

もちろん英語以外の辞書をインストールすれば英語以外の言語の文書もスペルチェックできます。（ただし、コマンドラインなどでは、ASCII文字のアルファベット以外で構成された単語をスペルチェックすると文字化けすると思います。Emacsやxyzzyなど、さまざまな文字コードに対応したテキストエディタのマクロから呼び出すことを勧めます。）

まず、次の場所からAspell本体（Aspell-（任意の数字）-Setup)と英語辞書（Aspell-en-（任意の数字））をダウンロードします。

[Aspell for Win32](http://aspell.net/win32/)

まず本体をインストーラの指示通りにインストールします。基本的にはNextとInstallとFinishを押していくだけでインストールできるはずです。英語辞書もインストーラになっていますが、本体のインストール時にインストール先を変えた場合は、英語辞書のインストール先も適切に変更しておく必要があります。（変えてない場合はデフォルトどおりにインストールします。）

辞書のインストール時に

```
replace TmpInstall/Copying? [y]es, [n]o, [A]ll, [N]one, [r]ename:
```

と聞かれることがあります。「A」と入力してEnterキーを押しておきましょう。

環境変数PATHを必要に応じて設定します。PATHの値はC:\Program Files\Aspell\binです。（ただし、コマンドプロンプトを用いる場合です。WinShellなどエディタ等から呼び出す場合はPATHの設定をする必要はありません。）

<!-- Windows以外のインストール方法は、[[欧文スペルチェッカー GNU Aspell:http:// members.jcom.home.ne.jp/advweb/build/others/aspell.html]]をご覧ください。 -->

#### Linuxの場合 {#w22db8c3}

Linuxでは通常最初からaspellがインストールされています。aspellが吐いていなければ、例えば、VineLinuxだとすると

```
# apt-get install aspell
```

でインストールが完了します。もちろん、英語辞書も一緒です。いずれにしても、Windowsのような難しいことを考える必要はありません。

### Aspell の使い方（コマンドプロンプト編） {#aspus466}

PATHを通しているならば、

```
aspell --lang=en -c -t 調べたいtexファイル
```

でTeX文書を英語でスペルチェックできます。LinuxなどUNIX-likeなシステムでも同様にターミナル上で上記コマンドを実行します。

スペルチェック中の操作キーは下記の通り。

|  キー  |  機能  |
|---|---|
|  0-9  |  修正候補と置換  |
|  i  |  無視して次へ  |
|  r  |  自分で手修正  |
|  a  |  ユーザ辞書に追加  |
|  b  |  修正を保存せずに終了  |
|  I  |  同じミススペルを全て無視して次へ  |
|  R  |  手修正を全ての同じミススペルに適用。そして次へ |
|  l  |  小文字でユーザ辞書に追加。そして次へ  |
|  x  |  保存して終了  |

間違ってユーザ辞書に登録してしまった場合は、ユーザ辞書をテキストエディタで開いて当該行を削除。ユーザ辞書は通常 ~/.aspell.en.pwsという名前になっています。

さらにAspellには、

```
 --add|rem-tex-command=<str> TeX commands
 --[dont-]tex-check-comments check TeX comments
 --add|rem-tex-extension=<str> TeX file extensions
```

このようなオプションがあります。

例えば、コメント文もスペルチェックして欲しいときには、

```
$ aspell -c -t --tex-check-commets TeXソースファイル
```

とします。

非標準のTeXコマンドを追加したい場合には、--add-tex-commandを使います。--add-tex-commandのあとに、コマンド名と制御パラメータを書きます。

```
   «command»  «a list of p,P,o and Os» 
```

コマンドの後に続くパラメータは、コマンド文におけるスペルチェックの動作を制御します。pはコマンドの引数をスペルチェックせずにスキップ、Pはスペルチェックする。oはコマンドのオプション引数をスペルチェックせずにスキップ、Oはスペルチェック、パラメータの１文字目はコマンドの第1引数に相当します。パラメータの2文字目はコマンドの第2引数に相当します。それ以上のパラメータがあればAspellは通常通りにスペルチェックします。例えば、

```
--add-tex-command rule pp
```

とすると、"rule"というコマンドの第1と第2引数をスキップします。また、

```
--add-tex-command foo Pop
```

とすると、"foo"というコマンドの第1引数はスペルチェックされ、その次のオプション引数があってもなくても無視され、第2引数も無視されますが、それ以降の引数はスペルチェックの対象となります。さらに、コマンドの最後についているアスタリスク(\*)は単純に無視されます。例えば、

```
--add-tex-command enlargethispage p
```

とすると、enlargethispageとenlargethispage\*の両方の第1引数を無視します。

コマンドの削除は単純に例えば、

```
--rem-tex-command foo
```

とします。これでfooというコマンドがTeXコマンドリストから削除されて通常の文書として透けるチェックの対象となります。もちろん、リストからの削除はこの場限りです。

追加するtex-commandは、aspellの設定ファイル/etc/aspell.confにあらかじめ書いておくことも可能。

```
tex-command
    (list) TeX commands 
tex-check-comments
    (boolean) check TeX comments
```

<!-- 詳しい使い方は -->
<!-- [[欧文スペルチェッカー GNU Aspell:http://members.jcom.home.ne.jp/advweb/build/others/aspell.html]] -->
<!-- をご覧ください。 -->

### Aspell の使い方（WinShell編） {#awsus466}

WinShellなら設定なしで（PATHの設定も不要）、ツールバーのスペルチェッカボタンを押すだけでスペルチェックしてくれます。専用のダイアログもあり、使いやすいです。

ただし、日本語アルファベット交じりの文だと、日本語とアルファベットの混じり具合にもよりますが、あまり適切に働かないこともあります。日本語アルファベット混じり文をIgnoreし続け、アルファベットのみの文でのみスペルチェックしていく、というやり方で我慢するしかないようです。EasyTeXなど他のソフトから起動するという手もあります。

また、メニューを英語にしておかないと、ダイアログにメニューが表示されないことにも注意してください。

### Aspell の使い方（EasyTeX編） {#awset466}

\[オプション\]→\[TeX環境設定\]より、スペルチェッカに「C:\Program Files\aspell\bin\aspell.exe」を、スペルチェッカー起動オプションに「--lang=en -t -c」を指定しておきます。\[Iniファイルに保存\]ボタンをクリックし、\[OK\]をクリックします。

ツールバーよりスペルチェックボタンを押せば、Aspellが起動します。使い方はAspellの使い方を参照して下さい。

### Aspell の使い方（Emacs, Meadow編） {#aemcsfoi}

設定ファイルに

```
(setq-default ispell-program-name "aspell") 
```

と1行書けばとりあえず使えます。ただし、バージョン3.0以前のispell.elを使っている場合は、

```
(setq-default ispell-extra-args '("--reverse")) 
```

を足す必要がありますが、aspellが標準で入っているシステムでは通常不要です。

日本語混じりのTeX文書のスペルをチェックしたい場合には、[TeX FAQ 3898](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/3898.html)にある通り、

```
(eval-after-load "ispell"
 '(add-to-list 'ispell-skip-region-alist '("[^\000-\377]+")))
```

も追加します。

<!-- ispell.lから呼び出せるそうです。いろいろ検索してみましょう。例として、[[ドイツ語LaTeX文書のスペルチェック方法:http://www.pocus.jp/d-latex/aspell-latex-de.html]]のページを挙げます。 -->

### Aspell の使い方（xyzzy編） {#awsxy466}

<strong>[xyzzyの解説](/xyzzy/)</strong>をご覧ください。英語以外の言語もスペルチェックできます。
