---
title: "Ispell"
url: "/Ispell/"
date: 2004-10-12T20:28:35Z
pukiwiki: "Ispell"
---

# Ispell

## Ispell {#m5b4a889}

- \[041013\] みなさま，このページへの追加・改訂・改善等を宜しくお願いいたします。

### Ispell へのドイツ語辞書の追加法 {#l61b1466}

#### Windows の場合 {#ke9caba1}

角藤版 ispell-3.2.06-w32.tar.gz がインストール済みのシステムに，新・旧両正書法対応のドイツ語辞書を追加する方法を説明します。

- 
    [dic-german.zip](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/dic-german.zip) をダウンロード・解凍して得られる deutsch.hash, normal-german.hash, former-german.hash, extreme-german.hash を

```
ispell-w32/dic/
```

ディレクトリ以下に，あるいは Meadow 2.00 に付随する ispell-3.2.06-w32.tar.gz を使っている場合は

```
Meadow/site-lisp/etc/ispell/
```

ディレクトリ以下にコピーします。

- 
    deutsch.hash (7, 8ビット両対応のドイツ語旧正書法辞書) はそのまま。\*-german.hash (7, 8ビット両対応のドイツ語新正書法辞書) から「一つ」を選んで，german.hash とリネームします。

- 
    具体的には，Joghurt, Jogurt, Spaghetti, Spagetti 等々の表記をどのようにチェックさせるかによって「一つ」新正書法辞書を決めます (通常は normal-german.hash を選びます)。それぞれの辞書の違いは

```
normal-german.hash ---> チェックしない，つまり，全て正しい綴りとみなす
former-german.hash ---> Jogurt, Spagetti をチェックする (旧正書法に則るということ)
extreme-german.hash ---> Joghurt, Spaghetti をチェックする
                            (過激に新正書法の綴りだけを貫徹するということ)
```

ということです。

- 
    最後に，スペルチェックのテストをしてみます。[test-german.zip](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/test-german.zip) を適当な作業ディレクトリに展開します。そして，コマンドプロンプト上では，例えば，

```
ispell -d deutsch deutsch.tex <--- 7ビット入力ファイルを旧正書法でチェック
ispell -d german german.tex <--- 7ビット入力ファイルを新正書法でチェック
```

のように打ち込んでテストします。

- 
    Meadow の場合は，さらに 8ビット入力ファイル (latin-1 コード) もそのまま扱えます。Meadow 上で Deutsch8 Dict (8ビット旧正書法用) あるいは German8 Dict (8ビット新正書法用) 辞書を選択し，deutsch8.tex または german8.tex を開いてスペルチェックをかけてみてください。

#### Linux の場合 {#h8de4132}

「辞書の素」から私が実際に行ったコンパイルの手続きをメモしておきます。

- 
    新正書法用の辞書は MASKBITS 値が「64」でなければならないため，コンソール上で

```
ispell -vv | grep MASKBITS
```

と打ち込んだ際，もし「32」といった値が返ってきたら ispell を新たにコンパイルし直します。そのためには

```
rpm -e ispell 3.1*

```

などとして古い Ispell を消しておきます。その後 Ispell のページ [http://ficus-www.cs.ucla.edu/project-members/geoff/ispell.html](http://ficus-www.cs.ucla.edu/project-members/geoff/ispell.html) から

```
ispell-3.2.06.tar.gz (Ispell 本体)
```

を取ってきて，適当な作業ディレクトリ上で

```
mkdir work
cd work
tar xzvf ispell-3.2.06.tar.gz
```

します。

- 
    次に

```
cd ispell-3.2.06
cp local.h.samp local.h
emacs local.h
```

等として，local.h をお使いの環境に合わせて編集します。例えば Vine 2.1.5 では

```
#define BINDIR "/usr/local/bin" ----> #define BINDIR "/usr/bin"
```

としてやります。さらに，

```
#define USG

```

も付け加えます。

- 
    最後に

```
make all
make install
```

で完了です。

- 
    Ispell にドイツ語辞書を組み込むためには [http://ficus-www.cs.ucla.edu/project-members/geoff/ispell-dictionaries.html](http://ficus-www.cs.ucla.edu/project-members/geoff/ispell-dictionaries.html) ページから

```
hk2-deutsch.tar.gz (旧正書法用辞書の素)
igerman98-20030222.tar.bz2 (新正書法用辞書の素)
```

を取ってきます。

- 
    まず，旧正書法辞書から作成してみます。適当な作業ディレクトリにて

```
tar xzvf hk2-deutsch.tar.gz
```

としてやると，Makefile が現れますので，必要に応じて編集します。例えば，

```
elektronik.txt alphabeta.txt \
roemisch.txt orgabk.txt marken.txt worte2.txt zusammen.txt
```

を WORTE の項目に追加します。その後

```
make
```

します。出来上がった deutsch.hash を既に Ispell の英語辞書が入っているディレクトリに移せば完了です。

- 
    次に，新正書法辞書を作成します。

```
tar xzvf igerman98-20030222.tar.bz2
emacs Makefile
```

等として Makefile を編集します。例えば unsq がない場合は代わりに unsq.perl を使うため

```
#UNSQ = unsq
#   if for some reason you don't have Ispell's unsq use my Perl sq/unsq
#  and put it into a directory known by your PATH variable!
UNSQ = /work/igerman98-20030222/bin/unsq.pl (unsq.pl のあるパスに注意！)
```

等とします。

- 
    最後に

```
make
make install
```

で完了です（make の際，munchlist -l でもたつくかもしれません。CPU 133MHz のマシンでは 33 分かかりました）。

### Ispell へのフランス語辞書の追加法 {#e75bbb85}

#### Windows の場合 {#w091e4da}

- 
    [dic-french.zip](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/dic-french.zip) をダウンロード・解凍して得られる francais.hash, francais-tex.hash を

```
ispell-w32/dic/
```

ディレクトリ以下に，あるいは Meadow に付随する ispell-3.2.06-w32.tar.gz を使っている場合は

```
Meadow/site-lisp/etc/ispell/
```

ディレクトリ以下にコピーします。

- 
    スペルチェックのテスト。[test-french.zip](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/test-french.zip) を適当な作業ディレクトリに展開します。そして，コマンドプロンプト上では，例えば，

```
ispell -d francais francais-tex.tex <--- 7ビット入力ファイルをチェック
```

のように打ち込んでテストします。

- 
    Meadow の場合は，さらに 8ビット入力ファイル (latin-1 コード) もそのまま扱えます。Meadow 上で Francais Dict 辞書を選択し，fraincais8.tex を開いてスペルチェックをかけてみてください。
