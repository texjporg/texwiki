---
title: "Aspell"
url: "/Aspell/"
date: 2005-10-24T22:09:01Z
pukiwiki: "Aspell"
---

# Aspell

## [GNU Aspell](http://aspell.net/) {#asp4a889}

GNU Aspell は [Ispell](/Ispell/) に機能を追加した新しいスペルチェッカです．
英語はもちろんのこと，ドイツ語・フランス語・ギリシア語・ロシア語などにも対応しています．
TeX の命令を無視する機能もあります．

上記の通り日本語アルファベット混じり文を完全無視してくれないのが嫌だとか，重いのがいやだとか特に理由がなければぜひ Aspell をお試しください．

### Aspell のインストール {#aspin466}

#### Windows の場合 {#w22dbwnd}

Aspell は本体と辞書ファイルが別々に配布されています．
ここでは英語辞書のみをインストールすることにしましょう．

もちろん英語以外の辞書をインストールすれば英語以外の言語の文書もスペルチェックできます．
ただし，コマンドラインなどでは，ASCII 文字のアルファベット以外で構成された単語をスペルチェックすると文字化けすると思います．
[Emacs](/Emacs/) や [Vim](/Vim/) など，さまざまな文字コードに対応したテキストエディタのマクロから呼び出すことを勧めます．

Windows の場合は MSYS2 で Aspell をインストールします．

- [https://packages.msys2.org/base/mingw-w64-aspell](https://packages.msys2.org/base/mingw-w64-aspell)
    - [https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-aspell](https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-aspell)
    - [https://packages.msys2.org/packages/mingw-w64-clang-x86_64-aspell](https://packages.msys2.org/packages/mingw-w64-clang-x86_64-aspell)
    - [https://packages.msys2.org/packages/mingw-w64-clang-aarch64-aspell](https://packages.msys2.org/packages/mingw-w64-clang-aarch64-aspell)
- [https://packages.msys2.org/base/mingw-w64-aspell-en](https://packages.msys2.org/base/mingw-w64-aspell-en)
    - [https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-aspell-en](https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-aspell-en)
    - [https://packages.msys2.org/packages/mingw-w64-clang-x86_64-aspell-en](https://packages.msys2.org/packages/mingw-w64-clang-x86_64-aspell-en)
    - [https://packages.msys2.org/packages/mingw-w64-clang-aarch64-aspell-en](https://packages.msys2.org/packages/mingw-w64-clang-aarch64-aspell-en)
- [Windows での Emacs の設定覚書#Aspell](http://qiita.com/ignorant/items/76e4c162cedc47336e75#aspell)

```
pacman -S mingw-w64-ucrt-x86_64-aspell mingw-w64-ucrt-x86_64-aspell-en
```

#### macOS の場合 {#g5b60c70}

Homebrew を使ってインストールできます．

```
brew install aspell --lang=en
```

MacPorts を使ってインストールできます．

```
sudo port install aspell aspell-dict-en
```

#### Linux の場合 {#w22db8c3}

Linux Mint/Debian/Ubuntu の場合は

```
sudo apt install aspell aspell-en
```

です．

Fedora の場合は

```
sudo dnf install aspell aspell-en
```

です．

### Aspell の使い方（コマンドライン編） {#aspus466}

コマンドラインから

```
aspell --lang=en -c -t 調べたいtexファイル
```

で TeX 文書を英語でスペルチェックできます．

スペルチェック中の操作キーは下記の通り．

|  キー  |  機能  |
|---|---|
|  0-9  |  修正候補と置換  |
|  i  |  無視して次へ  |
|  r  |  自分で手修正  |
|  a  |  ユーザ辞書に追加  |
|  b  |  修正を保存せずに終了  |
|  I  |  同じミススペルを全て無視して次へ  |
|  R  |  手修正を全ての同じミススペルに適用．そして次へ |
|  l  |  小文字でユーザ辞書に追加．そして次へ  |
|  x  |  保存して終了  |

間違ってユーザ辞書に登録してしまった場合は，ユーザ辞書をテキストエディタで開いて当該行を削除．
ユーザ辞書は通常 &#x7e;/.aspell.en.pws という名前になっています．

さらに Aspell には，

```
--add|rem-tex-command=<str> TeX commands
--[dont-]tex-check-comments check TeX comments
--add|rem-tex-extension=<str> TeX file extensions
```

このようなオプションがあります．<br>

例えば，コメント文もスペルチェックして欲しいときには，

```
aspell -c -t --tex-check-comments TeXソースファイル
```

とします．

非標準の TeX コマンドを追加したい場合には，--add-tex-command
を使います．--add-tex-command のあとに，コマンド名と制御パラメータを書きます．

```
   «command»  «a list of p,P,o and Os» 
```

コマンドの後に続くパラメータは，コマンド文におけるスペルチェックの動作を制御します．

- p はコマンドの引数をスペルチェックせずにスキップ，P はスペルチェックする．
- o はコマンドのオプション引数をスペルチェックせずにスキップ，O はスペルチェックする．

パラメータの1文字目はコマンドの第1引数に相当します．
パラメータの2文字目はコマンドの第2引数に相当します．
それ以上のパラメータがあれば Aspell は通常通りにスペルチェックします．

> 例えば，
>
> ```
> --add-tex-command rule pp
> ```
>
> とすると，"rule"というコマンドの第1と第2引数をスキップします．
> また，
>
> ```
> --add-tex-command foo Pop
> ```
>
> とすると，"foo"というコマンドの第1引数はスペルチェックされ，その次のオプション引数があってもなくても無視され，第2引数も無視されますが，それ以降の引数はスペルチェックの対象となります．

さらに，コマンドの最後についているアスタリスク(\*)は単純に無視されます．

> 例えば，
>
> ```
> --add-tex-command enlargethispage p
> ```
>
> とすると，enlargethispage と enlargethispage\* の両方の第1引数を無視します．

コマンドの削除は単純に例えば，

```
--rem-tex-command foo
```

とします．これで foo というコマンドが TeX コマンドリストから削除されて通常の文書としてスペルチェックの対象となります．
もちろん，リストからの削除はこの場限りです．

追加する tex-command は，Aspell の設定ファイル /etc/aspell.conf や
&#x7e;/.aspell.conf にあらかじめ書いておくことも可能です．

```
add-tex-command citep p, citet p
tex-check-comments true
```

### Aspell の使い方（Emacs編） {#aemcsfoi}

Emacs の exec-path に Aspell のコマンド検索パスを追加します．
Windows の場合は

```
(add-to-list 'exec-path "C:/msys64/mingw64/bin")
```

を &#x7e;/.emacs.d/init.el に追加します．
基本的には &#x7e;/.emacs.d/init.el に

```
(setq-default ispell-program-name "aspell") 
```

と1行書けばとりあえず使えます．

日本語混じりの TeX 文書のスペルをチェックしたい場合には，[qa:3898](https://okumuralab.org/~okumura/texfaq/qa/3898.html) にある通り，

```
(with-eval-after-load "ispell"
  (add-to-list 'ispell-skip-region-alist '("[^\000-\377]+")))
```

も追加します．

Emacs では単純なスペルチェック以外にも，Aspell を使って，途中まで入力した単語の後半を補完してくれるスペル補完機能があります．

```
M-x ispell-complete-word
```

入力したスペルを途中に含む単語を補完入力する場合には，

```
M-x ispell-complete-word-interior-frag
```

とします．

<!-- ispell.l から呼び出せるそうです．いろいろ検索してみましょう． -->
<!-- 例として，[[ドイツ語LaTeX文書のスペルチェック方法:http://www.pocus.jp/d-latex/aspell-latex-de.html]]のページを挙げます． -->

### ユーザ辞書の作成 {#ve0ff963}

ユーザ辞書には2種類あります．
&#x7e;/.aspell.lang.pws は標準辞書にはない単語を追加する辞書で，
&#x7e;/.aspell.lang.prepl は特定のミススペルに対して修正置換対象を指定する辞書です．

.aspell.lang.pws はテキストファイルです．

- 1行目には，

    ```
    personal_ws-1.1 lang num [encoding]
    ```

    と書きます．
    lang は英語なら en，num は単語数ですが単なる目安です．
    0でOKです．

- 2行目からは，登録単語を書きます．
    1単語1行です．

日本人の人名などを人名辞典から引っ張ってきて片っ端から入れるのも良いでしょう．

.aspell.lang.prepl もテキストファイルです．1行目には

```
personal_repl-1.1 lang num [encoding]
```

と書きます．lang と num は上と同じです．2行目からは修正対象と修正語をペアで書きます．

```
misspelled_word correction
```

ここで設定された修正語は，スペルチェックの際に第一候補として表示されます．

### コメント {#aspb14cm}

- 日本語Aspellのじしょうをさがします．Linkください． -- Mathieu Jobin 2006-03-29 (水) 15:17:11
- 「じしょう」とは辞書（じしょ）のことでしょうか？日本語にたいしてはスペルチェッカー(spell checker)にあたるものはありません．これは日本語の特質からくるものです． -- DM 2007-09-04 (火) 17:54:09
- Microsoft Word ではある程度スペルチェック？できますね． -- legac 2008-02-06 (水) 08:17:04
