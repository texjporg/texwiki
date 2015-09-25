---
title: "texmf.cnf ファイル"
url: "/texmf.cnf ファイル/"
date: 2015-09-25T05:47:25Z
pukiwiki: "texmf.cnf ファイル"
---

# texmf.cnf ファイル

## texmf.cnf ファイル {#acde7a64}

<!-- 記事タイトルは多分 "Kpathsea ライブラリ"の方が的確なんだろうけど、 -->
<!-- 一般ユーザにとって"ライブラリ"は把握が難しいものだからなあ…。 -->
<!-- どうやらライブラリの正式名称は Kpathsearch ではなく Kpathsea らしい…。 -->

TeX および関連ソフトウェアに関する設定は texmf.cnf というファイルで集約して管理されています。[^1]

### 概要 {#ab004e09}

大昔の TeX 環境では入力ファイルの検索パス等の設定を（OS の）環境変数（TEXINPUTS 等）で行っていました。
TeX 関連のソフトウェアの数や設定項目の件数が増えたためにこの方法での管理は困難となり、「TeX 環境版の環境変数」を管理するためのライブラリである Kpathsea が開発されました。
現在では、TeX Live や W32TeX を含めほとんど全ての TeX 環境がこの Kpathsea ライブラリを利用しています。

Kpathsea における設定データの構造は、OS の環境変数のモデルを基礎としていて、「任意の“変数名”に任意の“値”（文字列）を割り当てる」という非常に単純なものです。
しかし、OS の環境変数と比べて以下のような点で拡張されています。

- 設定ファイルの階層化（優先度の順を付けて複数の設定ファイルを利用できる）
- プログラム名によって同じ変数の値が異なるようにする

TeX 環境での設定項目（変数）の多くは OS の実行パス（PATH 変数）に類似した形式の検索パスリストです。
Kpathsea は、このような変数について単に検索パスの値を格納するのみでなく、実際にファイルの検索を行う機能も備えています。

### texmf.cnf ファイルの場所 {#r5008864}

現在有効な texmf.cnf ファイルのある場所（これ自体も Kpathsea で管理されている）は次のコマンドで知ることができます。

```
kpsewhich -all texmf.cnf
```

最近の TeX Live の場合は、次の例（これは Windows の TeX Live 2015）のように 2 つのパスを返します。

```
c:/texlive/2015/texmf.cnf
c:/texlive/2015/texmf-dist/web2c/texmf.cnf
```

このように複数の有効な texmf.cnf がある場合、前にあるものほど高い優先度をもちます。
つまり、後ろ（低い優先度）の texmf.cnf で設定された値は、前（高い優先度）の texmf.cnf によって上書きされます。
TeX Live においては、この後ろが「マスタの設定ファイル」、前が「カスタム用設定ファイル」であり、ユーザが設定をカスタマイズしたい場合は、c:/texlive/2015/texmf.cnf の方を編集します。

一方、W32TeX においては既定では次のように「マスタの設定ファイル」しかありません。

```
c:/usr/local/share/texmf-dist/web2c/texmf.cnf
```

自分用の「カスタム用設定ファイル」は，「マスタの設定ファイル」より優先されるもの，例えば

```
c:/usr/local/share/texmf-local/web2c/texmf.cnf
```

作成して編集します。これは再インストール時に上書きされることがありません。ここで

```
c:/usr/local
```

とは，インストール ディレクトリであり，

```
c:/w32tex
```

の場合は，それに置き換えて解釈して下さい。

texmf.cnf を“置くことができる”ディレクトリは次のコマンドで調べることができます。[^2]

```
kpsewhich -var-value=TEXMFCNF
```

この出力についても、前にあるパスの方が優先度が高いものとなります。

### texmf.cnf ファイルの書式 {#uf6ee363}

texmf.cnf の中身は次のような感じのテキストファイルです。

```
% The location of texmf trees.
TEXMFROOT = /usr/local/share
TEXMFMAIN = $TEXMFROOT/texmf-dist   % the main tree
TEXMFHOME = ~/texmf                 % the user tree
% Shell-escape settings.
shell_escape = p                    % restricted
shell_escape_commands = bibtex,kpsewhich,makeindex,\
mpost,extractbb
```

- ‘%’以降はコメントとして無視されます。[^3]
- コメント以外の行は以下の書式を持っていて[^4]、これにより変数の値を指定します。

    ```
     変数名 = 値
    ```

    <!-- 変数名.プログラム名 の話はあとで。 -->

- 値の文字列の中で“$変数名”を書くとその値に展開されます。
    つまり上掲の例で変数 TEXMFMAIN の値は“/usr/local/share/texmf-dist”となります。
    <!-- ブレース展開は値の解釈ではなくパス検索の解釈として行われるらしい。 -->

- 行末の‘\’は行継続を表します。
    上掲の例で変数 shell_escape_commands の値は“bibtex,kpsewhich,makeindex,mpost,extractbb”となります。

### 変数の値を調べる {#ke1c37e3}

kpsewhich コマンドは、Kpathsea ライブラリのコマンドラインインタフェースであり、これを用いて現在の変数の値を調べることができます。[^5]

例えば、変数 shell_escape の値を調べるには以下のコマンドを実行します。

```
kpsewhich -var-value=shell_escape
```

※ shell_escape は[外部コマンドの実行](</外部コマンドの実行/>)の許可の既定設定を表します。
この変数の値が p ならば -shell-restricted 相当、t ならば -shell-escape 相当、f ならば -no-shell-escape 相当です。

### 変数の値を変更する {#t6a321fb}

例えば、変数 shell_escape の値を“f”に変更したいとします。
この場合、「カスタム用設定ファイル」である texmf.cnf に以下の行を追記します。

```
shell_escape = f
```

※既に「shell_escape = …」を書いた行がある場合はそれを置き換えます。

本家 TeX Live の場合は、tlmgr コマンドを用いて変数の値を設定することも可能です。（これは「カスタム用設定ファイル」を書き換える処理を行っています。）

```
tlmgr conf texmf shell_escape f
```

### コマンドごとに変数の値を変える {#n3a6270e}

Kpatthsea では一つの変数についてコマンドごとに読み取る値を変えることができます。
例を挙げて説明します。

W32TeX および Windows 版 TeX Live の pTeX 系エンジンには入力ソースファイルの文字コード自動判別を行う機能が備わっていて、既定で有効になっています。
Kpathsea 変数 guess_input_kanji_encoding によってこの機能の有効・無効を設定できます。

```
guess_input_kanji_encoding = 0   % 文字コード自動判定: 1=有効,0=無効
```

ここで仮に、「pLaTeX （platex コマンド）については自動判定を有効にしたいが、upLaTeX では UTF-8 しか使わないので無効にしたい」と思ったとします。
これは「カスタム用設定ファイル」に次のように記述することで実現できます。

```
guess_input_kanji_encoding.platex = 1 % 'platex' では有効
guess_input_kanji_encoding = 0        % それ以外('uplatex'等)では無効
```

kpsewhich で変数の値を調べる時には、“-progname=コマンド名”を付けることで「コマンドごとの値」をみることができます。

```
kpsewhich -var-value=guess_input_kanji_encoding -progname=platex
#==>「1」と出力
kpsewhich -var-value=guess_input_kanji_encoding -progname=uplatex
#==>「0」と出力
```

[^1]: “texmf”の名前は「insTeX/ins と insM/insetainsF/insont」に由来します。
[^2]: これは Kpathsea で設定された変数 TEXMFCNF の値です。ところが、これは「texmf.cnf の記述により決まるもの」でですから、この値に基づいて texmf.cnf が検索されるというのは論理的に奇妙です。実は、本当の検索パスはここで表示される値とは必ずしも一致しないのですが、「texmf.cnf 中の TEXMFCNF の値を一切変更していない」のであれば、ここで書いた説明が成り立ちます。
[^3]: ただし、‘%’の前に空白以外の文字がある場合はコメント開始と見なされません。
[^4]: ‘=’の周りの空白は省略できます。実は、‘=’自体も省略できるようです。
[^5]: ちなみに、Perl や Ruby 等のスクリプト言語で書かれたソフトウェアが Kpathsea 変数の値を読みだす場合は kpsewhich コマンドを実行するのが普通です。
