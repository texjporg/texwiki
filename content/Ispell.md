---
title: "Ispell"
url: "/Ispell/"
date: 2004-10-12T20:28:35Z
pukiwiki: "Ispell"
---

# Ispell

## Ispell {#m5b4a889}

### Ispell へのドイツ語辞書の追加法 {#l61b1466}

#### Windows の場合 {#ke9caba1}

角藤版 ispell-3.3.02-w32.tar.xz がインストール済みのシステムに，新・旧両正書法対応のドイツ語辞書を追加する方法を説明します。

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
    [7ビット入力ファイルを旧正書法でチェックの様子](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/deutsch.png)

- 
    [7ビット入力ファイルを新正書法でチェックの様子](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/german.png)

- 
    Meadow の場合は，さらに 8ビット入力ファイル (latin-1 コード) もそのまま扱えます。Meadow 上で Deutsch8 Dict (8ビット旧正書法用) あるいは German8 Dict (8ビット新正書法用) 辞書を選択し，deutsch8.tex または german8.tex を開いてスペルチェックをかけてみてください。

- 
    [8ビット入力ファイルを旧正書法でチェックの様子](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/deutsch8.png)

- 
    [8ビット入力ファイルを新正書法でチェックの様子](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/german8.png)

#### Vine Linux 4.1 の場合 (2007/04/02) {#h8de4132}

- 
    [7ビット入力ファイルを旧正書法でチェックの様子](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/vine41_deutsch7.png)

- 
    [7ビット入力ファイルを新正書法でチェックの様子](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/vine41_german7.png)

- 
    [8ビット入力ファイルを旧正書法でチェックの様子](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/vine41_deutsch8.png)

- 
    [8ビット入力ファイルを新正書法でチェックの様子](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/vine41_german8.png)

「辞書の素」から私が実際に行ったコンパイルの手続きをメモしておきます。

- 
    [Ispell のページ](http://ficus-www.cs.ucla.edu/project-members/geoff/ispell.html) から

    ```
    ispell-3.3.02.tar.gz (Ispell 本体)
    ```

    を取ってきて，適当な作業ディレクトリ上で

    ```
    $ mkdir work
    $ cd work
    $ tar xzvf ispell-3.3.02.tar.gz
    ```

    します。

- 
    次に

    ```
    $ cd ispell-3.3.02
    $ cp local.h.linux local.h
    $ chmod 644 local.h
    $ vi local.h
    ```

    等として，local.h の中の次の箇所だけ以下のように編集して保存します。

    ```
    #define BINDIR "/usr/bin"
    #define LIBDIR "/usr/lib"
    #define MAN1DIR "/usr/share/man/man1"
    #define MAN45DIR "/usr/share/man/man5"
    ```

- 
    最後に

    ```
    $ make all
    $ su -m
    # make install
    ```

    で完了です。

- 
    Ispell にドイツ語辞書を組み込むためには [Ispell のページ](http://ficus-www.cs.ucla.edu/project-members/geoff/ispell-dictionaries.html) から

    ```
    hk2-deutsch.tar.gz (旧正書法用辞書の素)
    igerman98-20030222.tar.bz2 (新正書法用辞書の素)
    ```

    を取ってきます。

- 
    まず，旧正書法辞書から作成します。適当な作業ディレクトリ（ここでは work/）の中に hk2-deutsch.tar.gz ファイルを移し，それから展開します。

    ```
    $ mv hk2-deutsch.tar.gz work/
    $ cd work
    $ tar xzvf hk2-deutsch.tar.gz
    ```

    としてやると，Makefile が現れますので，必要に応じて編集します。例えば，

    ```
    elektronik.txt alphabeta.txt \
    roemisch.txt orgabk.txt marken.txt worte2.txt zusammen.txt
    ```

    を WORTE の項目に追加します。その後

    ```
    $ make
    ```

    します。出来上がった deutsch.hash を既に Ispell の英語辞書が入っているディレクトリに移せば完了です。必要ならファイルオーナー・ファイルパーミッションも変更しておきます。

    ```
    $ su -m
    # mv deutsch.hash /usr/lib/
    # cd /usr/lib/
    # chown root:root deutsch.hash
    # chmod 644 deutsch.hash
    ```

- 
    次に，新正書法辞書を作成します。ファイルのあるカレントディレクトリで展開すれば OK です。

    ```
    $ tar xjvf igerman98-20030222.tar.bz2
    $ cd igerman98-20030222
    $ emacs Makefile
    ```

    等として Makefile を編集します。unsq がないのでこれをコメントアウトし，代わりに unsq.perl を使うため，次の箇所のみ

    ```
    #UNSQ = unsq
    #   if for some reason you don't have Ispell's unsq use my Perl sq/unsq
    #  and put it into a directory known by your PATH variable!
    UNSQ = /home/ynagata/download/igerman98-20030222/bin/unsq.pl
    ```

    のように書き換え，保存します。なお，上記は「例」です。お手元の環境で，unsq.pl の在処を「絶対パス」で記してください。保存する際，iso-8859-1 指定が必要になるかもしれません。

- 
    最後に

    ```
    $ make
    $ su -m
    # make install
    # mv german.hash /usr/lib/
    # chown root:root german.hash
    # chmod 644 german.hash
    ```

    で完了です。make の際，munchlist -l でほんの少しもたつくかもしれません。ちょっとだけお待ちください。

- 
    .emacs.my.el ファイルを次のような中身で作成し，ホームディレクトリに置きます。

    ```
    ;;
    ;;; TeX モードにおいて " を自動展開させない処置：ドイツ語特有
    ;;
    (setq YaTeX-use-font-lock t
          YaTeX-19-recenter-function nil)
    (add-hook 'yatex-mode-hook 'turn-on-font-lock)
    (add-hook 'yatex-mode-load-hook
    	  (lambda ()
    	    (modify-syntax-entry ?\" "w" YaTeX-mode-syntax-table)))
    (let (elem)
      (while (setq elem (or (rassq 'tex-mode auto-mode-alist)
    			(rassq 'latex-mode auto-mode-alist)
    			(rassq 'bibtex-mode auto-mode-alist)))
    (setcdr elem 'yatex-mode)))
    (autoload 'yatex-mode "yatex" nil t)
    (add-hook 'yatex-mode-hook
    	  (lambda ()
    	    (local-set-key "\"" 'self-insert-command)))
    ;;
    ;;; aspell ではなく ispell を使う
    ;;
    (setq-default ispell-program-name "ispell")
    ```

    以上のようにすれば，「ツール」「スペルチェック」「ドイツ語」（または，Deutsch Dict）と選ぶことで，TeX 記法（babel または german パッケージでの入力方式）での7ビット表記ドイツ語チェックが「旧正書法」でできるようになります。特殊文字を直接表記する8ビット表記ドイツ語を旧正書法でチェックしたい場合は，「ドイツ語（8ビット）」（または，Deutsch8 Dict）を選びます。

「新正書法」でチェックする場合は，German Dict（7ビット TeX 記法）あるいは German8 Dict（8ビット直接記法）を選びます。

#### openSUSE 10.2 の場合 (2007/04/02) {#k798d61c}

何もする必要がありません。インストールの際，追加言語としてドイツ語を選んでおくと，全てデフォルトで使えるようになっているようです。もっと「凝りたい」人は，/etc/skel/.gnu-emacs をホームディレクトリに .gnu-emacs-custom とリネームした上でコピーし，デフォルトではコメントとなっている次の5箇所を「生かし」ます。

```
(require 'ger-keys)
(german-mode)
(modify-syntax-entry ?" "w")
(local-set-key  "\"" 'self-insert-command)
(german-keyboard)
```

M-x german-mode （トグル）で何が起こるのかは，お楽しみ！(man dr"ucke \*nacheinander\*  &lt;ComposeCharacter>, &lt;">, &lt;a> und staune!)

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
    [7ビット入力ファイルをチェックの様子](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/francais-tex.png)

- 
    Meadow の場合は，さらに 8ビット入力ファイル (latin-1 コード) もそのまま扱えます。Meadow 上で Francais Dict 辞書を選択し，fraincais.tex を開いてスペルチェックをかけてみてください。

- 
    [8ビット入力ファイルをチェックの様子](http://www.lg.fukuoka-u.ac.jp/~ynagata/latex/francais.png)
