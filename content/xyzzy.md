---
title: "xyzzy"
url: "/xyzzy/"
date: 2010-05-08T01:39:34Z
pukiwiki: "xyzzy"
---

# xyzzy

## xyzzy {#ea58addb}

## xyzzy とは {#xya184ab}

xyzzy は柔軟なカスタマイズを可能にした，
多機能なテキストエディタ，Common-LISP インタプリタです。

[Emacs](/Emacs/) という
テキストエディタを知っている方には，elisp ではなく，common lisp を使って拡張する Microsoft Windows 専用の環境である，と
表現したほうがわかりやすいかもしれません。

国産で，フリーソフトウェアです。

TeX 用マクロ [KaTeX （花鳥）](#xykb6f8d) や tex/latex/bibtex 編集支援モードの [kyotex-mode](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/) が
ありますし，アウトラインの表示機能マクロ [outline-tree2](http://ohkubo.s53.xrea.com/xyzzy/index.html#outline-tree2) もあります。

多言語についても
フランス語やドイツ語などの ラテンアルファベット系言語，ロシア語などの
キリルアルファベット系言語，ギリシア語，中国語（&#x6c49;&#x8bed;［漢語］，
中文），韓國語（&#xd55c;&#xad6d;&#xc5b4;）などの文字の表示・混在編集などに
対応しています（Unicode のすべての言語に対応しているわけではありません）。

公式ウェブサイトは次のところです。

- [やる気のないぺぇじ](http://www.jsdlab.co.jp/~kamei/)

<img src="http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/img/snapshot_001.png" alt="kyotex-mode を使った xyzzy の画面">

Emacs ライクなテキストエディタというと，デフォルトの状態では使い物にならず，設定しないと (設定しても) 使う気にならない上級者向けとの印象があります。

ですが，xyzzy はデフォルトの状態でも (Emacs に比べれば) 使いやすく，メニューバーやツールバーやタブバーがありますし，多くのテキストエディタでできるような設定はダイアログボックスからマウスでできます。

ただし，「テキストエディタって何？」という方や
Emacs のエディタに関する考え方に共感できず，挫折した方は xyzzy でも同様に挫折する可能性が高いと思われますので，TeraPad や [サクラエディタ](</サクラエディタ/>) をおすすめします。

キーボードショートカット（キーバインド）は Windows の他のエディタと異なり，特殊ですが，標準添付の Gates.l など，Windows 標準のキーボードショートカットにするためのマクロがあります。

また，同じく標準添付の winkey.l というマクロを使えば，KaTeX などのマクロとの
キーボードショートカット上の共存が可能です。（例えば，C-c はマウスによる
選択［セレクション］時にはコピーになりますが，選択をしていない場合は
コピーには割り当てられません。従って，マウスで選択さえしていなければ，KaTeX で
頻繁に用いられるキー \[prefix\] とも問題なく共存できるのです。）

レジストリは変更しませんので，
少しでも興味のある方は試してみてはいかがでしょうか？

Wine でも動くという報告がありますので，Linux ユーザも検討してみる価値はあります。

> （SUSE LINUX 9.2 \[kernel 2.6.8\] wine 20050111 xyzzy 0.2.2.233。
> 2ch-mode, www-mode, kamail, outline-tree, migemo, netinstaller は動く。
> browser.dll 関連，filer 関連は一部動作せず。Emacs より軽いという報告もある。
> 詳細は [2ch Windows 板 「xyzzy Part12」 (2ちゃんねるのログ)](http://www.bookshelf.jp/2ch/win/1103400818.html) の >>217, >>220-222 あたりを
> 参照のこと。）

とうとうオープンソースになりました！
（MIT ライセンス［[原文](http://opensource.org/licenses/mit-license.php)，[日本語訳](http://sourceforge.jp/projects/opensource/wiki/licenses%2FMIT_license)］。
短いライセンスなので読んでください。）興味のある方は
是非いじってみてください。

公式サイトの xyzzy の更新は止まっていますが，オープンソースなのでいろいろな xyzzy の派生版が作成されています。

- [英語版 xyzzy](http://xyzzy.s53.xrea.com/english/archive/)
- [基本設定済みxyzzy](http://sourceforge.jp/projects/packaged-xyzzy/)
- [multiframe 版 xyzzy](http://bitbucket.org/mumurik/xyzzy/downloads)
- [xyzzy+](http://xyzzy.codeplex.com/)
- [xyzzy.src (for-gcc ブランチ)](http://github.com/bulb/xyzzy.src)
- [xyzzy.src (nanri-master ブランチ)](http://github.com/southly/xyzzy.src/tree/nanri-master)
- [xyzzy.src (deleted-window-p ブランチ)](http://github.com/miyamuko/xyzzy.src/tree/deleted-window-p)
- [xyzzyをちょこちょこ改造](http://blog.2310.net/archives/category/xyzzy)

## ダウンロードとインストール {#xy9167cb}

[インストーラ](http://xyzzy.s53.xrea.com/wiki/?Installer%20of%20xyzzy)から
インストールするのが最も簡単かもしれません。

手動で行う場合は，次のようにします。

まず，「[やる気のないぺぇじ](http://www.jsdlab.co.jp/~kamei/)」 や
[基本設定済みxyzzy](http://sourceforge.jp/projects/packaged-xyzzy/) や
[xyzzy.src](http://github.com/southly/xyzzy.src/downloads)
から
xyzzy のファイルをダウンロードします。

圧縮ファイルを適当な場所に展開（解凍）するだけでインストールは終了です。

USB メモリで使用する方は，
[xyzzyをちょこちょこ改造](http://blog.2310.net/archives/category/xyzzy)
からダウンロードして，解凍後，本体のものと置き換えてください。

あとは自分専用の設定ファイルを作りたければ，
ホームディレクトリのための環境変数 XYZZYHOME を設定します。

「環境変数」というものがよくわからない方や環境変数を設定できない方の
場合には，xyzzy\usr\\%USERNAME%\w??\xyzzy.ini （w??\ は
OS によって wxp\\, w2k\\, wnt\\, wme\\, w98\\, w95\ となります）に，例えば

```
[init]
homeDir=C:/usr/local/share/xyzzy/usr/UserName/wxp
```

のように末尾に追記しておきます（後述するマクロを使うためにも，
この作業は是非やっておいてください）。

ショートカットは
xyzzy.exe へのものではなく，xyzzycli.exe へのものにしましょう。

そうしないと，既にファイルを xyzzy で開いているときにショートカットに
ドラッグ &amp; ドロップすると，xyzzy が二重に起動してしまうのです。

## xyzzy の基本的な使い方 {#xycb6f8d}

最初に起動したときにはあまりの地味さに驚くことでしょう。でも大丈夫です。

メニューより ［表示］ → ［ツールバー］ と選び，
［標準］ と ［バッファ］ にチェックを入れることで，標準のツールバーと
ファイル名（正確にはバッファ名）の書かれたタブが表示されるようになります。

試しにファイルを開いてみましょう。［ファイル］ → ［開く］ と選ぶか，
ツールバーの ［開く］ボタンを押すと，
ファイルを開くためのダイアログが出てきます。

同様に，保存したり検索したり他のエディタに見られるような設定をするときも，
このようなダイアログが表示され，マウスで操作することができます。（Emacs 使いの
方は，Ctrl + X, Ctrl + F \[C-x, C-f\] と入力してファイルを開いてみて
ください。Emacs 風にミニバッファからファイルを入力して開くことができます。）

このことから，少なくともマウス操作においては，他のエディタを
お使いの方にとっても違和感はほとんどないのではないかと思われます。

また先述したように標準では Emacs 風のキーボードショートカットに
なっていますが，xyzzy 標準添付の Gates.l や winkey.l を用いることで
Windows 標準のキーボードショートカットが使えるようになります。

しかしながら，
この二つは「普段は Gates.l 並みに多い Windows 標準のキーボードショートカットを
使いたいが，KaTeX などのマクロのキーボードショートカットも使いたい」という
要望を完全にはかなえてくれません。

そのような方は，
大友さん作の[pavail.l](http://web.archive.org/web/20060824010604/http://www.klavis.info/pavail.l) というマクロをお使いください。

インストールは，[pavail.l](http://web.archive.org/web/20060824010604/http://www.klavis.info/pavail.l) を
ダウンロードして xyzzy/site-lisp/ にコピーし，~/.xyzzy などの
初期設定ファイルで，

```
(load-library "pavail")
```

と記述するだけです。

これで，xyzzy を快適に使うことができるように
なるかもしれません（私が使っている分には，不具合は今のところありません）。

なお，他人様のコードを借用して組み合わせただけのつまらないマクロのため
まったく宣伝していません。
従って，まだ Netinstaller からはインストールできません。

これくらいのことを考えている方は他にもいるはずなのにな……と思ったら
同じことを考えている方がいらっしゃいました。たぶん pavail.l と似た機能の
ものですが，次のところが元祖で pavail.l が後発になると思います。

- [winkey2.l](http://www.uranus.dti.ne.jp/~shiro-/soft/xyzzy/keybind.html#windows)

## xyzzy と dviout の連携機能 (Source special) {#xysssdaf}

[dviout for Windows](/dviout/) の
\[Option\] → \[Setup Parameters...\] → \[Common\] の src: 欄に

```
C:\usr\local\share\xyzzy\xyzzycli.exe^s-g %d "%s"
```

と書き込んで \[Save\]，\[OK\] の順にクリックしてください。

さてコンパイルですが，eplatex に src オプションを付けて実行します。すなわち，

```
eplatex -src
```

を実行するようにします。

後述する [KaTeX](#xykb6f8d) を使っているのであれば，~/.xyzzy などの初期設定ファイルに，

```
(setq elisp::tex-command "eplatex -src")
```

と書いておきます。

dviout for Windows でマウスカーソルが矢印になっているときに画面の一部（本文の文字など）をダブルクリックすると， xyzzy が前面に出て，該当個所に飛ぶはずです。
（上の記述は xyzzycli.exe が C:/usr/local/share/xyzzy/ にあると仮定しています。なお，xyzzy の二重起動を防止するため，xyzzy.exe ではなく xyzzycli.exe を指定していることに注意してください。）

逆に，xyzzy から dviout for Windows の該当箇所にジャンプすることも可能です。
例えば，KaTeX をお使いなら [XyzzyWiki:質問箱/121](http://xyzzy.s53.xrea.com/wiki/?%BC%C1%CC%E4%C8%A2/121) を参考に次のような文字列を ~/.xyzzy などの初期設定ファイルに書いておきます。

***

```
(defun katex-dvisrcprv ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (dvi-file (el::KaTeX-get-preview-file-name)))
    (call-process (concat el::dvi2-command " -1 " dvi-file " \"\# "
                          (format nil "~D" (current-line-number)) " " tex-file "\"")
                  :exec-directory (directory-namestring tex-file))))
```

***

KaTeX をお使いでない場合は次のように書きます。ただし，KaTeX をインストールして上のように書いておくことを勧めます。

***

```
(defun dvisrcprv ()
  (interactive)
  (let* ((tex-dirfile (get-buffer-file-name))
	 (dvi-dirfile (substitute-string tex-dirfile "\\.tex$" "\\.dvi" :case-fold t))
        (tex-file (file-namestring tex-dirfile))
	 (dvi-file (file-namestring dvi-dirfile))
	 (dir (directory-namestring dvi-dirfile))
	 (tmp-file (make-temp-file-name)))
    (call-process (concat "c:\\dviout\\dviout.exe -1 " dvi-file " \"\# "
			  (format nil "~D" (current-line-number)) " " tex-file "\"") :output tmp-file
		  :exec-directory dir :wait t)
    (delete-file tmp-file))
  )
```

***

すると，前者の KaTeX用の設定を書いた場合は M-x katex-dvisrcprv （Alt を押しながら x を押し，“katex-dvisrcprv” と入力して Enterキーを押す），後のそれ以外の設定を書いた場合は M-x dvisrcprv とすることで，現在 TeXファイル中でカーソルのある箇所に相当する dviファイルの位置を開いてくれるはずです。
頻繁に使う方はキーボードショートカット（キーバインド）を定義したり自前でツールバー・ツールバーに割り当てる関数を作成しておくことを勧めます。

> 【注意】この「source specials を用いた連携」は，
> 「TeX ソースファイルの形で他人に渡す文書（投稿論文の TeX ソースの類）の最終版」
> を作成する際には用いないでください。
> 実際，source specials を用いるか否かによって体裁あるいは
> 「タイプセットの可否」が変わる例が知られています
> （[qa:8914](https://okumuralab.org/~okumura/texfaq/qa/8914.html)，[qa:14224](https://okumuralab.org/~okumura/texfaq/qa/14224.html) 参照）。

## TeX で書く際に役立つマクロの紹介 {#xycb6f8d}

有名なマクロであれば，たいがい NetInstaller から楽にインストールできます。

詳細は
[XyzzyWiki:QuickTour/ext/NetInstaller](http://xyzzy.s53.xrea.com/wiki/?QuickTour/ext/NetInstaller)
をご覧ください。

[KaTeX (花鳥)](#xykb6f8d) や [outline-tree2](http://ohkubo.s53.xrea.com/xyzzy/index.html#outline-tree2) (アウトラインツリー表示マクロ。
LaTeX 正規表現アウトライン機能があるらしい) あたりを入れておけば便利でしょう。

[kyotex-mode](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/)，
[bibtex-mode](http://f55.aaa.livedoor.jp/~ynomura/xyzzy/index.html#bibtex-mode)，
[RefTeX for xyzzy](http://f55.aaa.livedoor.jp/~ynomura/xyzzy/index.html#reftex) というものもあります。

簡単な使い方を説明します。前に示したリンク先の情報の通り，インストール後，xyzzy を再起動します。

Alt + x と入力して netinstaller と入力して Enter を押すと Netinstaller が起動します。

a キーを押し，次の項目以降で示すカッコ内の URI を入力して Enter を押します。
そうすることで，xyzzy マクロを配布しているサイトとマクロのリストが登録されます。

あとはサイトを選んで Enter で決定し，インストールしたいマクロを選び，i キーでインストールします。

終了は q です。

### outline-tree でアウトライン表示 {#xyob6f8d}

#### outline-tree 2 {#xyott2kl}

<img src="http://f.hatena.ne.jp/images/fotolife/k/ks88/20091123/20091123214305.jpg" alt="outline-tree2 を使った xyzzy の画面">

上の xyzzy の画像で，左側に \section や \subsection の構成をツリー構造で示した欄があることに気づいたと思います。
そんなふうに LaTeX ソースの論理構造をグラフィカルに示してくれる outline-tree を入れます。

現在は outline-tree のバージョンが2になっています。
かなり多くの設定がマウスでできるようになるなど，ぐっと使いやすくなっています。

- Masatoshi's xyzzy extend lisps
    ([http://xyzzy.s53.xrea.com/ni/ni.l](http://xyzzy.s53.xrea.com/ni/ni.l))

から treeviewdll をインストールし，その後

- [雑記帖](http://ohkubo.s53.xrea.com/)
    ([http://ohkubo.s53.xrea.com/xyzzy/packages.l](http://ohkubo.s53.xrea.com/xyzzy/packages.l))

から win-window, color, buf2html, treeview, outlinetree をインストールします。

&#x7e;/.xyzzy などの初期設定ファイルには最低限次のように書いておきます。

```
;; outline-tree 2
(require "outline-tree/outline-tree")
```

アウトラインツリーにフォーカスを移動させる操作を Ctrl + Tab，アウトラインツリーの作成・更新を Ctrl + Enter というショートカットキーボードでできるような設定方法を以下に示します。

***

```
;;; extended-key-translate-table 設定
(set-extended-key-translate-table exkey-C-tab #\F23) ; focus
(set-extended-key-translate-table exkey-C-return #\F20) ; reload

;;; Editor <-> TreeView
 ;; Editor -> TreeView
(require "treeview/setup")
(global-set-key #\F23 'treeview::treeview-focus-treeview)
 ;; TreeView (outline-tree) -> Editor
(require "outline-tree/outline-tree")
(define-key outline-tree2::*outline-tree-map*
            #\F23 'treeview::treeview-focus-editor)

;;; outline 更新
(global-set-key #\F20 'outline-tree2::outline-tree-create-outline-and-select-node)
(define-key outline-tree2::*outline-tree-map*
                  #\F20  'outline-tree2::outline-tree-create-outline-and-select-node)
```

***

最後に，拡張子 “.tex” のファイルを開くと，自動的に TeX 用のアウトラインが作られるような設定を示します。
（ただ，私の環境では，なぜか拡張子 “.tex” 以外にも TeX 用のアウトラインが作られてしまうことがあります。）

***

```
;;; outline-tree LaTeX
(in-package "outline-tree2")
(defun my-outline-tree-get-create-outline-function (buffer)
(let ((buffer-name (buffer-name buffer))
(buffer-mode (save-excursion (set-buffer buffer) buffer-mode))
(mode-name (save-excursion (set-buffer buffer) mode-name)))
(cond
((and (symbolp 'outline-tree2::outline-tree-create-outline-LaTeX)
(fboundp 'outline-tree2::outline-tree-create-outline-LaTeX)
(string-matchp "\\.tex$" buffer-name))
'outline-tree2::outline-tree-create-outline-LaTeX)
(t nil))))
(setq *outline-tree-get-default-create-outline-function-advice-func*
'my-outline-tree-get-create-outline-function) 
```

***

では，使ってみましょう。

xyzzy を再起動後，メニューバーより ［Outline-Tree］ → ［outline-tree の起動］ で outline-tree を起動します。
Ctrl + Enter またはメニューバーより ［Outline-Tree］ → ［アウトラインの作成/更新］ で，左側にアウトラインツリーが表示され，現在開いているファイルの一覧が示されます。

あとは，TeX ファイル名をクリックすれば，\section や \subsection の階層構造などが示され，それぞれの項目をクリックすることでファイルの該当する部分に飛びます。

詳細は，[作者の Flash によるデモ](http://ohkubo.s53.xrea.com/xyzzy/outline-tree/demo/outline-tree2.html)をご覧ください。

#### outline-tree 1 {#xyott1kl}

以下はバージョン1に相当する古い情報です。

上の xyzzy の画像で，左側に \section や \subsection の構成をツリー構造で示した欄があることに気づいたと思います。
そんなふうに LaTeX ソースの論理構造をグラフィカルに示してくれる outline-tree を入れます。

- Masatoshi's xyzzy extend lisps
    ([http://xyzzy.s53.xrea.com/ni/ni.l](http://xyzzy.s53.xrea.com/ni/ni.l))

から treeviewdll をインストールし，その後

- [雑記帖](http://ohkubo.s53.xrea.com/)
    ([http://ohkubo.s53.xrea.com/xyzzy/packages.l](http://ohkubo.s53.xrea.com/xyzzy/packages.l))

から outlinetree をインストールします。~/.xyzzy には

```
(load-library "olt/olt")
```

と記述します。メニューバーの ［表示］ → ［ツールバー］ → ［Outline］ でアウトライン用ツールバーが起動できる。
［ツール］ → ［アウトラインツリー設定］ で ［アウトラインタイプ］ の ［動作設定］タブで「LaTeXファイル（簡易）」を選びます。
あとは，ツールバーの一番左のボタン ［アウトライン作成（更新）］ を押すことで，アウトラインが作成されるようになります。

後述する [KaTeX](#xykb6f8d) をお使いの方は，ホームディレクトリに “.olt” というファイルを作り，次のように記述しておきます。
このように書いておくと，TeX ファイルの場合にアウトラインを作成すると LaTeX 用のアウトラインになります。

***

```
;;; -*- mode: Lisp -*-
(in-package "outline-tree")

 ;; For KaTeX
(when (find-load-path "elisp")
  (require "elisp")
  (add-hook 'elisp::katex-mode-hook 'olt-setting-LaTeX-mode)
  (pushnew '(elisp::katex-mode . olt-setting-LaTeX-mode)
           *olt-setting-alist* :test 'equal))

 ;; このファイルで *olt-setting-alist* に設定した内容を既存のバッファに適用
(olt-init-setting)
```

***

### KaTeX で TeX の命令をラクラク入力 {#xykb6f8d}

TeX で命令を書いているときに，そうした命令を書いていくのがおっくうになることがありませんか？ 例えば
箇条書きを書くときにいちいち \begin{itemize} と \end{itemize} を書いてくくり，さらに項目ごとにいちいち先頭に \item などと書かなきゃならない……面倒くさい，そう思うこともあるに違いありません。
そんなときは KaTeX を使ってみましょう。

KaTeX （花鳥）は便利なキーボードショートカットを多数有し，LaTeX の命令や
環境の入力を素早く，なおかつ楽にしてくれるマクロです。[YaTeX](/YaTeX/) の
xyzzy 版と言った方がわかりやすいかもしれません。

[雄猫のがらくた置き場 (xyzzy)](http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html)
([http://osuneko.at.infoseek.co.jp/xyzzy/packages.l](http://osuneko.at.infoseek.co.jp/xyzzy/packages.l))
から KaTeX と Emacs Lisp 移植キットを選んでそれぞれダウンロードすればいいでしょう。

[XyzzyWiki:QuickTour/ext/KaTeX](http://xyzzy.s53.xrea.com/wiki/?QuickTour/ext/KaTeX)
には画像付きでインストール方法が丁寧に述べられていますので，
併せてご覧ください。

KaTeX 用の設定ですが，お勧めの設定とあわせ，~/.xyzzy に

```
;;; ロードパスに KaTeX のあるディレクトリを追加
(push (merge-pathnames "site-lisp/katex" (si:system-root)) *load-path*)
;;; elispパッケージを有効にする
(require "elisp")
;;; 拡張子と関数の関連付け
;;; （拡張子 “.ins”，“.ini” は
;;;   Windows 上で TeX 関連以外のプログラムと関連付けられており，
;;;   拡張子 “.def”，“.cfg” は
;;;   TeX 関連以外のプログラムでもよく使われているので，
;;;   この4つの拡張子は含めていない。）
(push '("\\.\\(tex\\|aux\\|toc\\|lof\\|lot\\|idx\\|ind\\|glo\\|gls\\|bbl\\|sty\\|cls\\|clo\\|dtx\\|fdd?\\|ltx\\|dfu\\|ldf\\|4ht\\)$" . elisp::katex-mode) *auto-mode-alist*)
;;; オートロード
(autoload 'elisp::katex-mode "katex" t)
 ;; タイプセットを e-pTeX で
 (setq elisp::tex-command "eplatex")
 ;; dviout に PATH を通しておらず，C:\w32tex\dviout\dviout をプレビューに使いたい場合
 (setq elisp::dvi2-command "c:\\w32tex\\dviout\\dviout")
 ;; M-RET を有効に
 (set-extended-key-translate-table exkey-M-return #\M-RET)
 ;; ツールバー表示
 (setq elisp::*KaTeX-use-toolbar* t)
 ;; ショートカット
 (defun user::katex-mode ()
   (interactive)
   (elisp::katex-mode))
 ;; jsarticle をデフォルトに 
 ;(setq elisp::KaTeX-default-documentclass "jsarticle")
 ;; 自動改行なし
 (add-hook 'elisp::katex-mode-hook
           #'(lambda ()
               (auto-fill-mode nil)))
```

などと記入しておきます。「自動改行なし」や jsarticle 関連，ツールバーの表示あたりはお好みです。

<em>なお，2009/07/20 をもって "jbibtex.exe" は "pbibtex.exe" に変更されています。</em>後者を使うためには .xyzzy に次のように記述しておく必要があります。

```
;; pbibtex を使う
(setq elisp::bibtex-command "pbibtex")
```

そのほか，具体的な使い方は Emacs のマクロ (Elisp) である YaTeX とほぼ同じですので，[TeXWiki:YaTeX](/YaTeX/) を参照してください。

一つだけ便利な技を紹介しておきましょう。
ある領域の行の先頭に一気に “%” を付け加え，コメントアウトしたいときは，該当領域をリージョン指定し，Ctrl + c と入力して “>” を入力します (C-c >)。
逆に，“%” を外したいときはリージョン指定をした上で Ctrl + c と入力して “&lt;” を入力します (C-c &lt;)。
「リージョン」というのは，指定したい範囲の起点で Ctrl + SPACE キー (C-SPC) を押し，その後で起点からカーソルを移動した場所までの領域を指します。
見た目には何も起こらないように思えますが，実際はきちんと範囲になっていたりするのです。
そして，リージョンの終点において，先ほどの C-c > や C-c &lt; を実行すればよいのです。
（よく分からない方は，[Emacs におけるリージョン](http://cns-guide.sfc.keio.ac.jp/2001/7/2/4.html)と仕組みは同じですので，そちらを参照していただければと思います。）

さらに，KaTeX からその他のコマンドを実行できるように改造してみましょう。
次のコメント行（セミコロン “;” から始まる，xyzzy が命令を読み込まない行）を参考にすれば，任意のコマンドを登録できるようになるでしょう。
ここでは “out2uni” というコマンドを登録しています
（今ではあまり使わないコマンドですが，ちょっとネタが思いつかないので）。

長いものですが，基本的には「ここから」から「ここまで」のみを編集していけば OK です。なお，前に

```
(in-package "elisp")
(require "katex")
```

の2行を記述してない場合は，記述しておくようにしてください。

```
(defun KaTeX-typeset-menu (arg &optional char)
  "Typeset, preview, visit error and miscellaneous convenient menu.
Optional second argument CHAR is for non-interactive call from menu."
  (interactive "P")
  (message
   (concat "J)latex R)egion B)ibtex mk(I)ndex "
	   (if (fboundp 'start-process) "K)ill-latex ")
	   "P)review "
	   (and (boundp 'window-system) window-system "S)earch ")
	   "V)iewerr L)pr D)vips dvipdF)m"
	   ;; ここでさらにコマンドを追加する場合は説明文をダブルクウォート (") で区切って
	   ;; 追加する。ここでは「O)ut2uni」というのをスペースのあとに追加する。
	   ;; 二つ以上追加したい場合（ここでは「A)command」というのを追加する）は
	   ;; 例えば「O)ut2uni」のあとにスペースで区切り，
	   ;; " O)ut2uni A)command"
	   ;; のように書く。
	   ;;
	   ;; ここから
	   
	   " O)ut2uni"
	   
	   ;; ここまで
	   ))
  (let ((pre-ime (and (get-ime-mode) (toggle-ime)))
	(sw (selected-window)) (c (or char (read-char))))
    (require "katexprc") ;for Nemacs's bug
    (select-window sw)
    (cond
     ((= c #\j) (KaTeX-typeset-buffer))
     ((= c #\r) (KaTeX-typeset-region))
     ((= c #\b) (KaTeX-call-command-on-file
		 bibtex-command "*KaTeX-bibtex*"))
    ((= c #\i) (KaTeX-call-command-on-file
		 makeindex-command "*KaTeX-makeindex*"))
     ((= c #\k) (KaTeX-kill-typeset-process KaTeX-typeset-process))
     
     ((= c #\p) (call-interactively 'KaTeX-preview))
     ;((= c #\q) (KaTeX-system "lpq" "*Printer queue*"))
     ((= c #\v) (KaTeX-view-error))
     ((= c #\l) (KaTeX-lpr arg))
     ((= c #\m) (KaTeX-switch-mode-menu arg))
     ((= c #\b) (KaTeX-insert-string "\\")) ;???
     ;((= c #\s) (KaTeX-xdvi-remote-search arg))
     ;; -----------------------------------------------------------
     ;; added command
     ((= c #\d) (KaTeX-dvi2ps))
     ((= c #\f) (KaTeX-dvipdfm))
     ;; さらに加えたいコマンドを「ここから」から「ここまで」まで以下に次の様式で記入します。
     ;; ((= c #\【Ctrl + c, t の後に押すキーボード】) (【コマンドを実行するための関数名】))
     ;; 一例では Ctrl + c, t そして“o”の順に押すキーボードショートカットに
     ;; “KaTeX-out2uni”という関数を割り当てます。
     ;; 二つ以上関数を割り当てる場合は，上の added command の下のように改行するなりして並べます。
     ;;
     ;; ここから
    
     ((= c #\o) (KaTeX-out2uni))
     
     ;; ここまで
     )
    (and pre-ime (not (get-ime-mode)) (toggle-ime))))
(KaTeX-define-key #\t 'KaTeX-typeset-menu)
```

```
(defvar dvips-command "dvips -Ppdf")
(defun KaTeX-dvi2ps ()
(interactive)
(KaTeX-save-buffers)
(KaTeX-call-command-on-file dvips-command KaTeX-typeset-buffer))
```

```
(defvar dvipdfm-command "dvipdfmx ")
(defun KaTeX-dvipdfm ()
(interactive)
(KaTeX-save-buffers)
(KaTeX-call-command-on-file dvipdfm-command KaTeX-typeset-buffer))
```

```
;;; 実際にコマンドを呼び出す関数を作ります。
;;; 先ほど，“KaTeX-out2uni”という関数に Ctrl + c, t, o というキーボードショートカットを
;;; 割り当てました。これは「out2uni （現在編集中のファイルから拡張子を抜いたファイル名）」という外部コマンドを呼び出す関数です。
;;; あとは次のテンプレートを参考に，見よう見まねで作ってください。
;;; 複数以上コマンドを割り当てるときは defvar から KaTeX-call-command-on-file の行まで追記します。
;;;
;;; (defvar 【適当な分かりやすい変数の名前。なんでもいい。】 "【呼び出すコマンド。最後のスペースをお忘れなく】")
;;; (defun 【先ほどキーボードショートカットに割り当てた関数名】 ()
;;; (interactive)
;;; (KaTeX-save-buffers)
;;; (KaTeX-call-command-on-file 【先ほど defvar... で記述した変数の名前】 KaTeX-typeset-buffer))
;;; 自作した各種コマンド起動関数，たとえば多言語関連で後述する UTF82TeX などを起動する関数
;;; などについてもこの下に記入します。
;;;
;;; ここから
```

```
(defvar out2uni-command "out2uni ")
(defun KaTeX-out2uni ()
  (interactive)
  (KaTeX-save-buffers)
  (KaTeX-call-command-on-file out2uni-command KaTeX-typeset-buffer))
```

```
;;; ここまで
```

なお，KaTeX には，同じマークアップ言語である HTML （正確には違うらしい）を
編集するための KaHTML というのも同梱してあります。exbrowserdll と browserex と
併用することで非常に便利な HTML 編集環境を作ることができます。

KaHTML についての記述は
[XyzzyWiki:QuickTour/ext/KaTeX #KaHTML の設定](http://xyzzy.s53.xrea.com/wiki/?QuickTour/ext/KaTeX#j73htme9)
に移転することにしました。そちらを是非ご参照いただければと思います。

### 対応括弧を見つけてみる {#xyparenl}

#### parentag {#xyprtags}

基本的な命令のみで TeX 文書を書いている場合はいいのですが，XyMTeX などで命令の入れ子を多用する場合や，TeX のパッケージを作成する場合には，ある括弧がどの括弧に対応しているのかが分かりにくくなり，混乱してしまうことがあります。

そんなときは parentag をお試しください。閉じ括弧を書くと，対応する開き括弧にジャンプします。

netinstaller を用いる場合は
[雄猫のがらくた置き場 (xyzzy)](http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html)
([http://osuneko.at.infoseek.co.jp/xyzzy/packages.l](http://osuneko.at.infoseek.co.jp/xyzzy/packages.l))
より，parentag をインストールします。その上で，たとえば次のように記述します。

```
;;; parentag
(require "paren")
(turn-on-paren) ; 常に paren を使いたいとき
```

これで，対応する括弧がわかりやすくなりました。

#### paren {#parenlsd}

paren は現在入手が難しいようです。持っている方は以下のように設定してください。

KaTeX をお使いの場合，~/.xyzzy などの初期設定ファイルには

```
;;; paren
(require "paren")
(turn-on-global-paren)
```

と書いておきます。さらに，KaTeX のインストール時に ~/.xyzzy などの初期設定ファイルに

```
(require "elisp")
```

などと書いたと思いますので，そこから後ろにでも，

```
;;; paren を KaTeXモードに対応
(add-hook 'elisp::katex-mode-hook #'(lambda()
  (set-syntax-match (syntax-table) #\( #\))
  (set-syntax-match (syntax-table) #\{ #\})
  (set-syntax-match (syntax-table) #\[ #\])
))
```

のように記述します。これでもう括弧で悩むことはなくなるはずです。

### clickable-uri と小物マクロによる便利技 {#xyclickab}

URI をダブルクリックすると自動的に Web ブラウザが起動するマクロですが，
これを応用するとダブルクリックすることで \includegraphics で指定した
画像ファイルをダブルクリックで開くことができるようになります。xyzzy で
Emacs の preview-latex マクロみたいなことはできませんが，
この機能とその次に述べる，数式環境のみを自動タイプセットする
小物マクロを併用することで，いくぶんやりやすくなるでしょう。

[雑記帖](http://ohkubo.s53.xrea.com/)
([http://ohkubo.s53.xrea.com/xyzzy/packages.l](http://ohkubo.s53.xrea.com/xyzzy/packages.l))
から NetInstaller でインストールしましょう。そして，

```
(push "\\\\includegraphics\\\[*.*\\\]*{.+}"
      *clickable-uri-special-regexp-list*)
(push (cons "^\\\\includegraphics\\\[*.*\\\]*{\\(.+\\)}"
	    #'(lambda (uri)
		(when (string-matchp "\\\\includegraphics\\\[*.*\\\]*{\\(.+\\)}" uri)
		  (goto-char (match-beginning 0))
		  (set-mark-command)
		  (goto-char (match-end 0))
		  (el::KaTeX-typeset-region)
		  (call-interactively 'el::KaTeX-preview)
		  )))
      *clickable-uri-open-command-alist*)
(clickable-uri-set-regexp)
```

と記述しておくことで，\includegraphics{test.jpg} などと書かれている部分をダブルクリックすることで，test.jpg を開けるようになります。

なお次のような関数を定義しておけば，“$” や “\\\[” で囲まれた数式環境を Shift + Ctrl + 左クリック することで，自動的にその領域だけタイプセット・プレビューしてくれます。
タイプセットが終わった後にミニバッファ（下の1行くらいの領域）で2回 Enter を押しておく必要があるでしょう。
（デフォルトの設定では，dviout に PATH を通しておかないと最初に Enter を押す前に dviout のフルパスを指定する羽目になると思います。）

***

```
(defun preview-math-env ()
  (interactive)
  (save-excursion
    (if (and (el::KaTeX-in-math-mode-p)
	     (scan-buffer "\\$\\|begin\\|\\[" :reverse t :regexp t)
	     (cond ((string= (match-string 0) "$")
		    (set-mark) ; はじめの“$”でマークセット
		    (scan-buffer "$" :no-dup t :tail t)) ; 終わりの“$”へポイント移動
		   ((string= (match-string 0) "\[") ;
		    (backward-char)
		    (set-mark) ; はじめの“\[”でマークセット
		    (scan-buffer "\\\]" :no-dup t :tail t)) ; 終わりの“\]”へポイント移動
		   )
	     )
	(progn (el::KaTeX-typeset-region)
	  (call-interactively 'el::KaTeX-preview))
      (message "数式がみつかりません。")
      )))

(define-key elisp::*KaTeX-mode-map* '(#\S-C-LBtnDown) 'preview-math-env)
```

***

応用すれば，equation 環境などでも同じことができそうです。

### template-insert で雛形挿入 {#xyki6f8d}

LaTeX のファイルを新たに開いたときに，自動的に雛形となるファイルが挿入されると
非常に便利でしょう。template-insert はそれを実現するためのマクロです。

[kia's website](http://www.geocities.jp/kiaswebsite/xyzzy/)
([http://www.geocities.jp/kiaswebsite/xyzzy/packages.txt](http://www.geocities.jp/kiaswebsite/xyzzy/packages.txt))
を追加し，template-insert を選びます。あとは ~/.xyzzy のあるフォルダに
insert というフォルダを新たに作り，textemplate.tex という雛形ファイル（例えば

```
\documentclass{jsarticle}
%\documentclass{jarticle}
\begin{document}

\end{document}
```

とする）を作っておき，~/.xyzzy などに

```
(require "template-insert")
(use-package 'template-insert)
(setq *template-insert-directory* "~/insert/")
(setq *template-insert-alist* '((elisp::katex-mode . "textemplate.tex")))
```

と記述します。すると，新たに TeX ソースファイルを作成し，このときに KaTeX を自動読み込みする設定になっていると，雛形ファイル textemplate.tex の内容を自動的に挿入するかどうか聞いてきます。入れたい場合は y と答えます。

### 動的補完でらくらく入力 {#xydb6f8d}

上の xyzzy の画像で，\text と入力した後に小さなメニューを出している様子が気にかかった方もいらっしゃるでしょう。
これは，動的補完 (Dabbrev) という xyzzy 標準の機能を利用しているのです。

特に何かインストールする必要はありません。texkey というファイル
（[キーワードファイルのサンプル](http://blechmusik.xrea.jp/resources/xyzzy/katex/texkey)も
示しておきます）に TeX の命令などをまとめておき，
これをホームディレクトリ（~/.xyzzy のあるフォルダ）に置きます。~/.xyzzy に
[XyzzyWiki:質問箱/112](http://xyzzy.s53.xrea.com/wiki/?%BC%C1%CC%E4%C8%A2/112)
（ご教示くださった方々に感謝）を参考に，

```
(in-package "elisp")
(require "katex")
```

の後ろ（書いていない場合は追加）に

```
;;; keyword list
(defvar *my-latex-completion-list* nil)
(defvar *my-latex-popup-completion-list* :always)
(defvar *my-latex-keyword-hash-table* nil)
(defvar *my-latex-keyword-file* "~/texkey")

(defun my-latex-completion ()
  (interactive)
  (or *my-latex-completion-list*
      (setq *my-latex-completion-list* (make-list-from-keyword-table *my-latex-keyword-hash-table*))
      (return-from my-latex-completion nil))
  (let ((opoint (point)))
    ;(when (skip-syntax-spec-backward "w_.")
    (when (skip-syntax-spec-backward "w_.@")
      (let ((from (point)))
        (goto-char opoint)
        (do-completion from opoint :list *my-latex-completion-list*
                      nil nil *my-latex-popup-completion-list*)))))

(defun my-latex-load-keyword ()
  (and *my-latex-keyword-file*
       (null *my-latex-keyword-hash-table*)
       (setq *my-latex-keyword-hash-table*
             (load-keyword-file *my-latex-keyword-file* t))))

(add-hook 'elisp::katex-mode-hook
         #'(lambda ()
             (my-latex-load-keyword)
             (define-key elisp::*KaTeX-mode-map* #\C-. 'my-latex-completion)))
```

などと記入しておきます。こうしておくと，たとえば \docu などと TeX ソース編集中に書きかけたときに Ctrl + . と入力する (C-.) ことで，\documentclass などのリストが自動的に出てきます。
矢印キーの上下などで選択し，Enter を押すと補完されます。

2005年11月4日9時くらいまでの記述は paren などの設定との共存ができませんでしたが，上記のとおりの記述であれば大丈夫です。
前の設定を書いた方は，申し訳ありませんが前の設定を消して上のものに差し替えてください。

### スペルチェックソフト Aspell を xyzzy から使う {#xyaspella}

TeX 文書を編集しているときにも，Word みたくスペルミスをチェックしてくれるソフトがあると便利です。
そんな無料のスペルチェックソフトとして知られているのが Ispell，そして Ispell の機能をさらに拡張した Aspell です。

xyzzy からは[角藤亮さんの移植した Ispell](http://w32tex.org/w32/) を呼び出すことはおそらくできません。亀井哲弥さんの移植した Ispell ([ispell-win32.lzh](http://www.jsdlab.co.jp/~kamei/ispell-win32.lzh)) は呼び出せますが，TeX の命令を無視する機能はないようです。
というわけで，TeX ファイルをスペルチェックするのであれば，Aspell および xyzzy からそれを呼び出す aspell.l を使うことをお勧めします。

Aspell そのものは適切に日本語・アルファベット混じり文を無視してくれるというわけではありませんが，xyzzy から aspell.l 経由で使う場合には（筆者の確認した限りでは）日本語アルファベット混じり文（「これはtstです」のような文も含む）を完全に無視してくれます。
あまり機能面で欲張る方でなければ，なかなか使いやすい措置ではないでしょうか？

また，最新の aspell.l では英語以外の言語も使えるようになりました。
使える文字コードは ISO-8859-\* （“\*” は数字が入る）ですので日本語は使えませんが，長めの文章であればその文字コードのファイルにコピー・貼り付けしてスペルチェックをしてみるとよいのではないかと思います。

この機能を使うためにはあらかじめ [Aspell for Win32](http://aspell.net/win32/) をインストールしておきます。
インストール方法については [TeXWiki:Aspell](/Aspell/) をご覧ください。

「[xyzzy から aspell を使う](http://www.shido.info/xyzzy/aspell_l.html)」の
download から aspell_l.lzh をダウンロードします
（NetInstaller からはダウンロードできない）。
展開（解凍）し，xyzzy のインストールフォルダの site-lisp\ フォルダの
中（例えば C:/usr/local/share/xyzzy/site-lisp/）にコピーします。

&#x7e;/.xyzzy などの初期設定ファイルに次のように記述します
（ここでは，Aspell をインストーラからデフォルトの設定でインストールしたときの設定を書きます）。

```
(import '(ed::aspell ed::*aspell-command* ed::*aspell-language*))
(autoload 'aspell "aspell" t)
(global-set-key #\M-a 'aspell)
(setq *aspell-command* "C:\\Program Files\\aspell\\bin\\aspell.exe -a")
```

さらに，英語以外の言語，たとえばロシア語をお使いの方は

```
(setq ed::*aspell-language* "ru")
```

も追加します。フランス語であれば “ru” が “fr” のように変わります。

TeX ファイルや HTML ファイルは拡張子に応じて適切なオプションを付けてくれます。

あとは，xyzzy を再起動し，Alt + a で Aspell を起動します。使い方は Aspell の使い方と同じです。また，[xyzzy上のスペルチェッカー作成](http://keijisaito.info/arc/spell/spell_check.htm)にあるファイルを使うと，マウスのホイールクリックから Aspell を起動し，テンキーによるスペルチェックができるようです。

英語以外の言語をスペルチェックしたい方は [aspell.l の作者のページの「4. 英語以外の言語のスペルチェックの方法」](http://www.shido.info/xyzzy/aspell_l.html)を参照してください。詳しくやり方が書かれています。

なお，環境変数 LANG に ja_JP.SJIS など，Aspell にないものを登録している場合，xyzzy から起動できないそうです。
その場合はその環境変数を削除すると動作しますが，環境変数 LANG を削除すると他のアプリケーションで不具合が出る可能性もあります。
この場合，環境変数 LANG はそのままにして以下の方法で問題を回避してください（Windows 2000 で確認しています）。

1. 設定ファイルの作成

環境変数 HOME を指定し，

```
$HOME/.aspell.conf
```

を作成し，

```
lang en
```

と書きます。これでつねに英語のスペルチェックをするようになります。
他言語も使用するときは，次の 2. の方法を併用すると良いでしょう。

2. コマンドラインオプション

[TeXWiki:Aspell](/Aspell/) にも記載されていますが，コマンドラインオプション “--lang” で使用言語が指定できます。

古い aspell.l であれば，例えば英語ならば，~/.xyzzy に以下のように記述してください。

```
(import '(ed::aspell  ed::*aspell-command*))
(autoload 'aspell "aspell" t)
(global-set-key #\M-a 'aspell)
(setq *aspell-command* "C:\\Program Files\\aspell\\bin\\aspell.exe --lang=en -a")
```

新しい aspell.l では，たぶん

```
(import '(ed::aspell ed::*aspell-command* ed::*aspell-language*))
(autoload 'aspell "aspell" t)
(global-set-key #\M-a 'aspell)
(setq *aspell-command* "C:\\Program Files\\aspell\\bin\\aspell.exe -a")
(setq ed::*aspell-language* "en")
```

で良いと思いますが，うまくいくかどうかは確認していません。

ただし，この方法だけではデスクトップアイコンのショートカットからは動作しなくなるので，必要であればショートカットを編集すると良いでしょう。

### Word の文章校正機能などを使ってみる {#xywordch}

Word を持っている方の中には，Word の文章校正機能を使いたいと思う方がいらっしゃるかもしれません。
そんな方は是非 word-tools を使ってみてください。なお当たり前ですが，Word を持っていない方はこのマクロを利用することはできません。

NetInstaller の
[xyzzy のじかん](http://miyamuko.s56.xrea.com/)
([http://miyamuko.s56.xrea.com/xyzzy/package.l](http://miyamuko.s56.xrea.com/xyzzy/package.l))
からインストールできます。~/.xyzzy などへの設定の追加は不要です。

あとは xyzzy を再起動後，メニューバーより選んでいきます。

- ［Word］ → ［文章校正］ 以下： 英文のスペルチェック・校正作業をする。
- ［Word］ → ［要約の作成］： 25%くらいまでの要約をカーソル位置に自動挿入する。
- ［Word］ → ［類義語辞典］： 英単語の類義語を調べる。
- ［Word］ → ［文字カウント］： 文字数を調べる。
- ［Word］ → ［日付と時刻］： 日本語を含めた日付と時刻を挿入する。

Word をいちいち起動するのでスペック面で劣るパソコンでは多少ストレスを
感じるかもしれません。TeX の命令などもミススペルと認識しますので，
辞書登録も必要です。また，多くは英文向け機能です。従って，単にスペルチェックを
したいのであれば，TeX の命令を無視してくれる機能を持つ Aspell を用いた方が
良いかもしれません（なお，xyzzy には角藤さんの Ispell for Win32 を使うための
マクロはありませんので，必然的に Aspell を用いることになると思います）。

あと，たまにフリーズすることがありますので，
その場合には冷静に WINWORD.EXE を強制終了しましょう。

### 自分でマクロを作ってみる {#xymb6f8d}

自分でマクロを作る手もあります。Lisp 系の言語で書くことになります。メニューバーやツールバー・タブバー，さらにはダイアログまでマクロで作ることができます。

WinAPI も呼び出せます（コモンダイアログを使うときには NetInstaller より雑記帖の commdlg を使うと便利）。頑張って作れば，相当良い LaTeX 環境を実現できそうです。

## Unicode で多言語 TeX 文書 {#zf0dbbe2}

### Unicode で多言語 TeX 文書を作ってみる（ヨーロッパ言語・ロシア語・ギリシア語編） {#xyutff8d}

中国語・韓國語も含め，多言語設定に関しては
『[入門 xyzzy](http://ssl.ohmsha.co.jp/cgi-bin/menu.cgi?ISBN=4-274-06600-2)』
に詳しいので，そちらもご覧ください。

冒頭で「xyzzy は Unicode を扱える」と申しました。
ここで，「pTeX は Unicode に対応していないのでは？」と思った方も
いらっしゃるかもしれません。しかし，現在では各種フィルタソフトがありますので，
それと併用することで Unicode のまま編集しても大丈夫になりました。
また，Unicode のまま編集することで，Aspell によるスペルチェックも
（いったん ISO-8859-\* エンコーディングに変換する必要はありますが）できます。

フランス語やドイツ語などの Latin-1, Latin-2 文字，ギリシア文字，
ロシア語のキリル文字などについては[安田功さん](http://yasuda.homeip.net/)が
[Utf82TeX](http://yasuda.homeip.net/tex/utf82tex.html) を
公開していますので，これを用いればよさそうです。

さて，ここで “Babel” という言葉を聞いたことのない方は
[TeXWiki:新 pTeX と Babel](</新 pTeX とBabel/>) をご覧ください。
特に欧文・ロシア語・ギリシア語を扱う際には実に美しい出力を得ることができます。

また，Perl をインストールしていない方は
[Strawberry Perl](http://strawberryperl.com/)，
[ActivePerl](http://www.activestate.com/Products/ActivePerl/) を
インストールしておきましょう。otfcjk のインストールの際にも必要になります。

まず，[Utf82TeX](http://yasuda.homeip.net/tex/utf82tex.html) の[ダウンロード・サービス](http://yasuda.homeip.net/dl/dl.html#g)から utf82tex-\*.zip をダウンロードし，展開（解凍）します。展開したディレクトリ内の utf82tex というファイルをテキストエディタ（もちろんここでは xyzzy）で開きますと，先頭の行に

```
#!/usr/bin/perl
```

と書いてありますので，これを環境に合わせて（例えば ActivePerl をデフォルトのままインストールしたなら

```
#!/Perl/bin/perl
```

と書く）に直しておきます。

あとは Utf82TeX を PATH の通ったディレクトリ
（例えば TeX のインストールディレクトリ内にある
実行ファイルディレクトリ C:\w32tex\bin など）にコピーします。
ついでに TeX 実行ファイルのインストール先であれば
そのディレクトリ内にある perlexec.exe を utf82tex.exe などに
コピーしておきます。（こうしておくとコマンド実行時に便利ですので。）

では，実際に xyzzy で Unicode 文書を書いてみましょう。
新規作成した後にすぐに ［ファイル］ → ［名前をつけて保存］ で，
ダイアログの「エンコーディング」に \[Unicode (UTF-8)\] を選んで保存します
（UTF-16 などの他の Unicode エンコーディングは選ばないように注意！）。

さまざまな言語の入力ソフト（インストール方法は [Google](http://www.google.co.jp/) から調べましょう）を併用して書いていきます。

まずは入力ソフト（インプットメソッド）のインストールです。参考までに，[フランス語入力](http://wm.tamagawa.ac.jp/manual/Bb/user/FirstStepMyPC_ja_JP/appendix/FirstStepMyPC_c14appendix_12.htm)，[ドイツ語入力](http://wm.tamagawa.ac.jp/manual/Bb/user/FirstStepMyPC_ja_JP/appendix/FirstStepMyPC_c14appendix_13.htm)，[スペイン語入力](http://wm.tamagawa.ac.jp/manual/Bb/user/FirstStepMyPC_ja_JP/appendix/FirstStepMyPC_c14appendix_14.htm)，[ギリシャ語入力](http://homepage1.nifty.com/suzuri/000/pc3.html)，[ロシア語入力](http://www.l.u-tokyo.ac.jp/~slav/wrusindex.html)に関するサイトを挙げておきます。
次に，xyzzy 側の設定です。[ギリシャ語を xyzzy から入力できるようにするための設定](http://homepage1.nifty.com/suzuri/000/xyzzy.html#greek)を参考に，使いたい言語に関して同様の設定を行います。

準備ができたら，[Utf82TeX のページの入力例](http://yasuda.homeip.net/tex/utf82tex.html)も参考に書いていきます。

さて，いろいろ頑張って一通り書き終わりました。このファイルを utftest8.tex とします。ここで Utf82TeX の出番です。コマンドラインから

```
utf82tex <utftest8.tex >utftest8-utex.tex
```

を実行します。すると，utftest8.tex を変換した結果を utf8out.tex に書き出します。

xyzzy から実行したい方は次を ~/.xyzzy などの初期設定ファイルに書いておきます。
Alt + x とした上で “exec-utf82tex” と入力し，Enterキーを押して起動します。前に述べた KaTeX の設定と組み合わせることを勧めます。

```
(defun exec-utf82tex ()
  (interactive)
  (let ((in-file (file-namestring (get-buffer-file-name)))
	(out-file (concat (pathname-name (get-buffer-file-name))
			  "-utex."
			  (pathname-type (get-buffer-file-name))))
	(dir (directory-namestring (get-buffer-file-name)))
	)
    (call-process "utf82tex"
		  :input in-file
		  :output out-file
		  :exec-directory dir
		  :wait t)
    (split-window)
    (other-window)
    (find-file (concat dir out-file))
    ;; 文字コードも自動的に Shift_JIS にしたい場合は
    ;; 下の行の一番左の;を削除（コメントアウト）する。
    ;(set-buffer-fileio-encoding *encoding-sjis*)
    ))
```

書き出した utftest8-utf.tex は UTF-8 のままなので，［ファイル］ → ［名前をつけて保存］ より，「エンコーディング」を ［日本語(Shift_JIS)］ に直して保存しなおします。（上の関数で

```
;(set-buffer-fileio-encoding *encoding-sjis*)
```

の行をコメントアウトしている場合は上記のエンコーディング変換は不要です。）

あとは pLaTeX あるいは LaTeX にかけるだけです。（「そういえばロシア語・ギリシア語を使う環境をまだそろえていなかった」という方は [TeXWiki:新 pTeX と Babel](</新 pTeX とBabel/>)
を是非ご覧ください。）

### Unicode で多言語 TeX 文書を作ってみる（中国語・韓國語編） {#xyutfasd}

韓國語（&#xd55c;&#xad6d;&#xc5b4;）
は[福井玲さん](http://www.l.u-tokyo.ac.jp/~fkr/)の
KoreanTeX
(pLaTeX2e に対応しているのは
[kTeX 1.2.2](http://auemath.aichi-edu.ac.jp/~khotta/ghost/ktex/))
がありました（これはハングルを ASCII 文字転写したかたちで入力できますので，
後述する方法と異なり入力ソフト \[input method\] が不要です）。

多書体 TeX の
開発者である[堀田耕作さん](http://www.geocities.jp/koh_hotta/ghost/)の
[KoreanTeX への解説ページ 1](http://blogs.yahoo.co.jp/koh_hotta/44928272.html)
および
[KoreanTeX への解説ページ 2](http://blogs.yahoo.co.jp/koh_hotta/45883465.html)
もあります。

一方，中国語（&#x6c49;&#x8bed;［漢語］，中文）については扱う方法が
ありませんでした。しかし，[OTF パッケージ](/OTF/)と OTFCJK パッケージの登場に
より，ようやく pTeX でも中国語（簡化字・繁體字の両方）と韓國語をまとめて
扱えるようになりました。（後述するように，UTF82TeX を用いる方法もあります。
他に別の言語も直接入力して混在させている方に特に便利です。）

以下をインストールする前に OTF パッケージと Omega が必要です。
あらかじめ TeXインストーラ3 などでインストールしておきましょう。

Perl をインストールしていない方は
[Strawberry Perl](http://strawberryperl.com/)，
[ActivePerl](http://www.activestate.com/Products/ActivePerl/) も
インストールしておきましょう。

PDF 閲覧の際には
[Adobe Reader](http://www.adobe.com/jp/products/reader/) が必要です。

さて，中国語や韓國語
などは[utf8toutf](http://w32tex.org/generic/utf8toutf.zip)
と [otfcjk](http://psitau.at.infoseek.co.jp/experiment.html) を併用すると
便利です。まずはそれぞれダウンロードしておきましょう。

utf8toutf.zip を展開（解凍）し，w32bin/ ディレクトリ内の utf8toutf.exe を
PATH の通ったディレクトリ（例えば TeX のインストールディレクトリ内にある
実行ファイルディレクトリ C:\w32tex\bin など）にコピーしておきます。

otfcjk.zip も展開後，mkttftrad.pl を xyzzy などで開き，先頭の行にある

```
#!/usr/bin/perl
```

を

```
#!/Perl/bin/perl
```

に変更しておきます。（これは
[ActivePerl](http://www.activestate.com/Products/ActivePerl/) の
デフォルトのインストールフォルダです。違う場合は適切に編集します。）

mkchina というファイルを “mkchina.bat” に名前変更し，次のように修正します。

***

```
echo "making vf (wait a while)..."
perl mkchina.pl
perl mkttftrad.pl
pltotf basepl\s-base-h.pl tfm\s-chinese-h.tfm
pltotf basepl\s-base-v.pl tfm\s-chinese-v.tfm
pltotf basepl\s-base-h.pl tfm\s-chineseg-h.tfm
pltotf basepl\s-base-v.pl tfm\s-chineseg-v.tfm
pltotf basepl\t-base-h.pl tfm\t-chinese-h.tfm
pltotf basepl\t-base-v.pl tfm\t-chinese-v.tfm
pltotf basepl\t-base-h.pl tfm\t-chineseg-h.tfm
pltotf basepl\t-base-v.pl tfm\t-chineseg-v.tfm
pltotf basepl\t-base-h.pl tfm\tt-chinese-h.tfm
pltotf basepl\t-base-v.pl tfm\tt-chinese-v.tfm
pltotf basepl\t-base-h.pl tfm\tt-chineseg-h.tfm
pltotf basepl\t-base-v.pl tfm\tt-chineseg-v.tfm
del vf\*.ofm
rem copy mlotf.sty test\
rem copy tfm\* test\
rem copy vf\* test\
rem cd test
rem platex test1.tex
rem dvipdfmx test1.dvi
rem start test1.pdf
```

***

なお下のほうの rem を除いて適切に編集すれば，コンパイル・プレビューまで
全自動でやってくれるでしょうが，通常はその必要はありません。

今作った mkchina.bat をダブルクリックし，TFM と VF を
生成させます。tfm/ ディレクトリの中身を $TEXMFLOCAL/fonts/tfm/otfcjk/
に，vf/ ディレクトリの中身を $TEXMFLOCAL/fonts/vf/otfcjk/ にでも
すべてコピーします。mlotf.sty を $TEXMFLOCAL/tex/latex/otfcjk/ に
コピーします。あとは必要な方のみ

```
mktexlsr
```

を実行してください。

dvipdfmx で変換し，PDF の形で出力結果を見ることになります。
そこで "sample.map(for dvipdfmx)" を
参考に，$TEXMFLOCAL/fonts/map/dvipdfm/base/cid-x.map に
次のように追記しておきます。

***

```
%rml            H                   Ryumin-Light
%rmlv           V                   Ryumin-Light

rml            H                   ipam.ttf
rmlv           V                   ipam.ttf

gbm            H                   ipag.ttf
gbmv           V                   ipag.ttf

%%% OTF package
%hminr-h        H                   Ryumin-Light
%hminr-v        V                   Ryumin-Light
%otf-ujmr-h     UniJIS-UTF16-H      Ryumin-Light
%otf-ujmr-v     UniJIS-UTF16-V      Ryumin-Light
```

<!-- %otf-cjmr-h     Identity-H          Ryumin-Light -->

```
%otf-cjmr-h     Adobe-Japan1-6      Ryumin-Light
%otf-cjmr-v     Identity-V          Ryumin-Light

hminr-h        H                   ipam.ttf
hminr-v        V                   ipam.ttf
otf-ujmr-h     UniJIS-UTF16-H      ipam.ttf
otf-ujmr-v     UniJIS-UTF16-V      ipam.ttf
```

<!-- %otf-cjmr-h     Identity-H          ipam.ttf/AJ16 -->

```
otf-cjmr-h     Adobe-Japan1-6      ipam.ttf
otf-cjmr-v     Identity-V          ipam.ttf/AJ16

hgothr-h       H                   ipag.ttf
hgothr-v       V                   ipag.ttf
otf-ujgr-h     UniJIS-UTF16-H      ipag.ttf
otf-ujgr-v     UniJIS-UTF16-V      ipag.ttf
```

<!-- %otf-cjgr-h     Identity-H          ipag.ttf/AJ16 -->

```
otf-cjgr-h     Adobe-Japan1-6      ipag.ttf
otf-cjgr-v     Identity-V          ipag.ttf/AJ16

%hminb-h        H                   Ryumin-Light,Bold
%hminb-v        V                   Ryumin-Light,Bold
%otf-ujmb-h     UniJIS-UTF16-H      Ryumin-Light,Bold
%otf-ujmb-v     UniJIS-UTF16-V      Ryumin-Light,Bold
```

<!-- %otf-cjmb-h     Identity-H          Ryumin-Light,Bold -->

```
%otf-cjmb-h     Adobe-Japan1-6      Ryumin-Light,Bold
%otf-cjmb-v     Identity-V          Ryumin-Light,Bold

hminb-h        H                :0:hgrmb.ttc
hminb-v        V                :0:hgrmb.ttc
otf-ujmb-h     UniJIS-UTF16-H   :0:hgrmb.ttc
otf-ujmb-v     UniJIS-UTF16-V   :0:hgrmb.ttc
```

<!-- %otf-cjmb-h     Identity-H       :0:hgrmb.ttc/AJ16 -->

```
otf-cjmb-h     Adobe-Japan1-6   :0:hgrmb.ttc
otf-cjmb-v     Identity-V       :0:hgrmb.ttc/AJ16

hgothb-h       H                :0:hgrge.ttc
hgothb-v       V                :0:hgrge.ttc
otf-ujgb-h     UniJIS-UTF16-H   :0:hgrge.ttc
otf-ujgb-v     UniJIS-UTF16-V   :0:hgrge.ttc
```

<!-- %otf-cjgb-h     Identity-H       :0:hgrge.ttc/AJ16 -->

```
otf-cjgb-h     Adobe-Japan1-6   :0:hgrge.ttc
otf-cjgb-v     Identity-V       :0:hgrge.ttc/AJ16

hmgothr-h      H                   wlmaru20044.ttf
hmgothr-v      V                   wlmaru20044.ttf
otf-ujmgr-h    UniJIS-UTF16-H      wlmaru20044.ttf
otf-ujmgr-v    UniJIS-UTF16-V      wlmaru20044.ttf
```

<!-- %otf-cjmgr-h    Identity-H          wlmaru20044.ttf/AJ16 -->

```
otf-cjmgr-h    Adobe-Japan1-6      wlmaru20044.ttf
otf-cjmgr-v    Identity-V          wlmaru20044.ttf/AJ16

hgotheb-h      H                :0:hgrsgu.ttc
hgotheb-v      V                :0:hgrsgu.ttc

%hminl-h        H                   HiraMinStdN-W2.otf
%hminl-v        V                   HiraMinStdN-W2.otf
%otf-ujml-h     UniJIS-UTF16-H      HiraMinStdN-W2.otf
%otf-ujml-v     UniJIS-UTF16-V      HiraMinStdN-W2.otf
```

<!-- %otf-cjml-h     Identity-H          HiraMinStdN-W2.otf -->

```
%otf-cjml-h     Adobe-Japan1-6      HiraMinStdN-W2.otf
%otf-cjml-v     Identity-V          HiraMinStdN-W2.otf

hminl-h        H                :0:msmincho.ttc
hminl-v        V                :0:msmincho.ttc
otf-ujml-h     UniJIS-UTF16-H   :0:msmincho.ttc
otf-ujml-v     UniJIS-UTF16-V   :0:msmincho.ttc
```

<!-- %otf-cjml-h     Identity-H       :0:msmincho.ttc/AJ16 -->

```
otf-cjml-h     Adobe-Japan1-6   :0:msmincho.ttc
otf-cjml-v     Identity-V       :0:msmincho.ttc/AJ16

%otf-ucmr-h     UniGB-UTF16-H       STSong-Light
%otf-ucmr-v     UniGB-UTF16-V       STSong-Light
```

<!-- %otf-ccmr-h     Identity-H          STSong-Light -->

```
%otf-ccmr-h     Adobe-GB1-4         STSong-Light
%otf-ccmr-v     Identity-V          STSong-Light

otf-ucmr-h     UniGB-UTF16-H       gbsn00lp.ttf
otf-ucmr-v     UniGB-UTF16-V       gbsn00lp.ttf
```

<!-- %otf-ccmr-h     Identity-H          gbsn00lp.ttf/AG14 -->

```
otf-ccmr-h     Adobe-GB1-4         gbsn00lp.ttf
otf-ccmr-v     Identity-V          gbsn00lp.ttf/AG14

otf-ucgr-h     UniGB-UTF16-H       wqy-zenhei.ttf
otf-ucgr-v     UniGB-UTF16-V       wqy-zenhei.ttf
```

<!-- %otf-ccgr-h     Identity-H          wqy-zenhei.ttf/AG14 -->

```
otf-ccgr-h     Adobe-GB1-4         wqy-zenhei.ttf
otf-ccgr-v     Identity-V          wqy-zenhei.ttf/AG14

%otf-utmr-h     UniCNS-UTF16-H      MSung-Light
%otf-utmr-v     UniCNS-UTF16-V      MSung-Light
```

<!-- %otf-ctmr-h     Identity-H          MSung-Light -->

```
%otf-ctmr-h     Adobe-CNS1-4        MSung-Light
%otf-ctmr-v     Identity-V          MSung-Light

otf-utmr-h     UniCNS-UTF16-H      uming.ttf
otf-utmr-v     UniCNS-UTF16-V      uming.ttf
```

<!-- %otf-ctmr-h     Identity-H          uming.ttf/AC14 -->

```
otf-ctmr-h     Adobe-CNS1-4        uming.ttf
otf-ctmr-v     Identity-V          uming.ttf/AC14

otf-utgr-h     UniCNS-UTF16-H      cwheib.ttf
otf-utgr-v     UniCNS-UTF16-V      cwheib.ttf
```

<!-- %otf-ctgr-h     Identity-H          cwheib.ttf/AC14 -->

```
otf-ctgr-h     Adobe-CNS1-4        cwheib.ttf
otf-ctgr-v     Identity-V          cwheib.ttf/AC14

%otf-ukmr-h     UniKS-UTF16-H       HYSMyeongJo-Medium
%otf-ukmr-v     UniKS-UTF16-V       HYSMyeongJo-Medium
```

<!-- %otf-ckmr-h     Identity-H          HYSMyeongJo-Medium -->

```
%otf-ckmr-h     Adobe-Korea1-2      HYSMyeongJo-Medium
%otf-ckmr-v     Identity-V          HYSMyeongJo-Medium

otf-ukmr-h     UniKS-UTF16-H       UnBatang.ttf
otf-ukmr-v     UniKS-UTF16-V       UnBatang.ttf
```

<!-- %otf-ckmr-h     Identity-H          UnBatang.ttf/AK12 -->

```
otf-ckmr-h     Adobe-Korea1-2      UnBatang.ttf
otf-ckmr-v     Identity-V          UnBatang.ttf/AK12

otf-ukgr-h     UniKS-UTF16-H       UnDotum.ttf
otf-ukgr-v     UniKS-UTF16-V       UnDotum.ttf
```

<!-- %otf-ckgr-h     Identity-H          UnDotum.ttf/AK12 -->

```
otf-ckgr-h     Adobe-Korea1-2      UnDotum.ttf
otf-ckgr-v     Identity-V          UnDotum.ttf/AK12

```

<!-- %hiramin-w3-h   Identity-H          HiraMinProN-W3.otf -->

```
hiramin-w3-h   Adobe-Japan1-6      HiraMinProN-W3.otf
hiramin-w3-v   Identity-V          HiraMinProN-W3.otf
```

<!-- %hiramin-w6-h   Identity-H          HiraMinProN-W6.otf -->

```
hiramin-w6-h   Adobe-Japan1-6      HiraMinProN-W6.otf
hiramin-w6-v   Identity-V          HiraMinProN-W6.otf
```

<!-- %hirakaku-w3-h  Identity-H          HiraKakuProN-W3.otf -->

```
hirakaku-w3-h  Adobe-Japan1-6      HiraKakuProN-W3.otf
hirakaku-w3-v  Identity-V          HiraKakuProN-W3.otf
```

<!-- %hirakaku-w6-h  Identity-H          HiraKakuProN-W6.otf -->

```
hirakaku-w6-h  Adobe-Japan1-6      HiraKakuProN-W6.otf
hirakaku-w6-v  Identity-V          HiraKakuProN-W6.otf
```

<!-- %hiramaru-w4-h  Identity-H          HiraMaruProN-W4.otf -->

```
hiramaru-w4-h  Adobe-Japan1-6      HiraMaruProN-W4.otf
hiramaru-w4-v  Identity-V          HiraMaruProN-W4.otf

%%% UTF package
%hmr            H                   Ryumin-Light
%hmrv           V                   Ryumin-Light
%unijmin-h      UniJIS-UTF16-H      Ryumin-Light
%unijmin-v      UniJIS-UTF16-V      Ryumin-Light
```

<!-- %cidmin-h       Identity-H          Ryumin-Light -->

```
%cidmin-h       Adobe-Japan1-6      Ryumin-Light
%cidmin-v       Identity-V          Ryumin-Light

hmr            H                   ipam.ttf
hmrv           V                   ipam.ttf
unijmin-h      UniJIS-UTF16-H      ipam.ttf
unijmin-v      UniJIS-UTF16-V      ipam.ttf
```

<!-- %cidmin-h       Identity-H          ipam.ttf/AJ16 -->

```
cidmin-h       Adobe-Japan1-6      ipam.ttf
cidmin-v       Identity-V          ipam.ttf/AJ16

hkb            H                   ipag.ttf
hkbv           V                   ipag.ttf
unijgoth-h     UniJIS-UTF16-H      ipag.ttf
unijgoth-v     UniJIS-UTF16-V      ipag.ttf
```

<!-- %cidgoth-h      Identity-H          ipag.ttf/AJ16 -->

```
cidgoth-h      Adobe-Japan1-6      ipag.ttf
cidgoth-v      Identity-V          ipag.ttf/AJ16
```

***

ここで日本語フォントに
[IPAフォント](http://www.ipa.go.jp/about/press/20071001-2.html)
(ipam.ttf, ipag.ttf) を，中国語簡化字フォントに
[Arphic （文鼎） Technology のフォント](https://mirror.ctan.org/../../GNU/non-gnu/chinese-fonts-truetype/)
(gbsn00lp.ttf) と [WenQuanYi outline fonts](http://wqy.sourceforge.net/en/)
(wqy-zenhei.ttf) を，中国語繁體字フォントに
[CJK-Unifonts](http://www.freedesktop.org/wiki/Software/CJKUnifonts) (uming.ttf) と
[cwTeX TrueType font](http://cle.linux.org.tw/fonts/cwttf/) (cwheib.ttf) を，
韓國語フォントに [Un-fonts](http://kldp.net/projects/unfonts/)
(UnBatang.ttf, UnDotum.ttf) を用いています。いずれも無償で入手できます。

Adobe Reader 附属の CMap
（どこにあるのか分からない場合には “UniGB-UTF16-H” で検索してみること）は
例えば "C:\Program Files\Adobe\Reader 8.0\Resource\CMap\\" にあるので，
全て $TEXMFLOCAL/fonts/cmap/ 内に上書きコピーしておきます。

DVI → PS → PDF の流れで作りたい方は，[Ghostscript](/Ghostscript/) が 8.54 以降で
あることを確認し，$TEXMF/fonts/map/dvips/base/psfonts.map に
次を追加します
（Ghostscript は 8.51 あたりでも大丈夫かもしれませんが，確認していません）。

***

```
rml                  Ryumin-Light-H
rmlv                 Ryumin-Light-V

gbm              GothicBBB-Medium-H
gbmv             GothicBBB-Medium-V

%%% OTF package
hminr-h              Ryumin-Light-H
hminr-v              Ryumin-Light-V
otf-ujmr-h           Ryumin-Light-UniJIS-UTF16-H
otf-ujmr-v           Ryumin-Light-UniJIS-UTF16-V
otf-cjmr-h           Ryumin-Light-Identity-H
otf-cjmr-v           Ryumin-Light-Identity-V

hgothr-h         GothicBBB-Medium-H
hgothr-v         GothicBBB-Medium-V
otf-ujgr-h       GothicBBB-Medium-UniJIS-UTF16-H
otf-ujgr-v       GothicBBB-Medium-UniJIS-UTF16-V
otf-cjgr-h       GothicBBB-Medium-Identity-H
otf-cjgr-v       GothicBBB-Medium-Identity-V

hminb-h          FutoMinA101-Bold-H
hminb-v          FutoMinA101-Bold-V
otf-ujmb-h       FutoMinA101-Bold-UniJIS-UTF16-H
otf-ujmb-v       FutoMinA101-Bold-UniJIS-UTF16-V
otf-cjmb-h       FutoMinA101-Bold-Identity-H
otf-cjmb-v       FutoMinA101-Bold-Identity-V

hgothb-h          FutoGoB101-Bold-H
hgothb-v          FutoGoB101-Bold-V
otf-ujgb-h        FutoGoB101-Bold-UniJIS-UTF16-H
otf-ujgb-v        FutoGoB101-Bold-UniJIS-UTF16-V
otf-cjgb-h        FutoGoB101-Bold-Identity-H
otf-cjgb-v        FutoGoB101-Bold-Identity-V

hmgothr-h            Jun101-Light-H
hmgothr-v            Jun101-Light-V
otf-ujmgr-h          Jun101-Light-UniJIS-UTF16-H
otf-ujmgr-v          Jun101-Light-UniJIS-UTF16-V
otf-cjmgr-h          Jun101-Light-Identity-H
otf-cjmgr-v          Jun101-Light-Identity-V

hgotheb-h          MidashiGo-MB31-H
hgotheb-v          MidashiGo-MB31-V

hminl-h            HiraMinStdN-W2-H
hminl-v            HiraMinStdN-W2-V
otf-ujml-h         HiraMinStdN-W2-UniJIS-UTF16-H
otf-ujml-v         HiraMinStdN-W2-UniJIS-UTF16-V
otf-cjml-h         HiraMinStdN-W2-Identity-H
otf-cjml-v         HiraMinStdN-W2-Identity-V

otf-ucmr-h           STSong-Light-UniGB-UTF16-H
otf-ucmr-v           STSong-Light-UniGB-UTF16-V
otf-ccmr-h           STSong-Light-Identity-H
otf-ccmr-v           STSong-Light-Identity-V

otf-ucgr-h        STHeiti-Regular-UniGB-UTF16-H
otf-ucgr-v        STHeiti-Regular-UniGB-UTF16-V
otf-ccgr-h        STHeiti-Regular-Identity-H
otf-ccgr-v        STHeiti-Regular-Identity-V

otf-utmr-h            MSung-Light-UniCNS-UTF16-H
otf-utmr-v            MSung-Light-UniCNS-UTF16-V
otf-ctmr-h            MSung-Light-Identity-H
otf-ctmr-v            MSung-Light-Identity-V

otf-utgr-h            MHei-Medium-UniCNS-UTF16-H
otf-utgr-v            MHei-Medium-UniCNS-UTF16-V
otf-ctgr-h            MHei-Medium-Identity-H
otf-ctgr-v            MHei-Medium-Identity-V

otf-ukmr-h     HYSMyeongJo-Medium-UniKS-UTF16-H
otf-ukmr-v     HYSMyeongJo-Medium-UniKS-UTF16-V
otf-ckmr-h     HYSMyeongJo-Medium-Identity-H
otf-ckmr-v     HYSMyeongJo-Medium-Identity-V

otf-ukgr-h        HYGoThic-Medium-UniKS-UTF16-H
otf-ukgr-v        HYGoThic-Medium-UniKS-UTF16-V
otf-ckgr-h        HYGoThic-Medium-Identity-H
otf-ckgr-v        HYGoThic-Medium-Identity-V

hiramin-w3-h       HiraMinProN-W3-Identity-H
hiramin-w3-v       HiraMinProN-W3-Identity-V
hiramin-w6-h       HiraMinProN-W6-Identity-H
hiramin-w6-v       HiraMinProN-W6-Identity-V
hirakaku-w3-h     HiraKakuProN-W3-Identity-H
hirakaku-w3-v     HiraKakuProN-W3-Identity-V
hirakaku-w6-h     HiraKakuProN-W6-Identity-H
hirakaku-w6-v     HiraKakuProN-W6-Identity-V
hiramaru-w4-h     HiraMaruProN-W4-Identity-H
hiramaru-w4-v     HiraMaruProN-W4-Identity-V

%%% UTF package
hmr                  Ryumin-Light-H
hmrv                 Ryumin-Light-V
unijmin-h            Ryumin-Light-UniJIS-UTF16-H
unijmin-v            Ryumin-Light-UniJIS-UTF16-V
cidmin-h             Ryumin-Light-Identity-H
cidmin-v             Ryumin-Light-Identity-V

hkb              GothicBBB-Medium-H
hkbv             GothicBBB-Medium-V
unijgoth-h       GothicBBB-Medium-UniJIS-UTF16-H
unijgoth-v       GothicBBB-Medium-UniJIS-UTF16-V
cidgoth-h        GothicBBB-Medium-Identity-H
cidgoth-v        GothicBBB-Medium-Identity-V
```

***

さらに，gs\gs8.??\lib\cidfmap の末尾に次を追記します。

***

```
%!
%%% aliases
/Ryumin-Light                 /IPAMincho                   ;
/Ryumin-Medium                /IPAMincho                   ;
/FutoMinA101-Bold             /WadaMin-Bold                ;
/MidashiMin-MA31              /HGMinchoE                   ;
/GothicBBB-Medium             /IPAGothic                   ;
/FutoGoB101-Bold              /HGGothicE                   ;
/MidashiGo-MB31               /HGSoeiKakugothicUB          ;
/Jun101-Light                 /WadaLabMaruGo20044          ;
/HeiseiMin-W3                 /Ryumin-Light                ;
/HeiseiKakuGo-W5              /GothicBBB-Medium            ;
/HiraMinStdN-W2               /MS-Mincho                   ;
/KozMinProVI-Regular          /Ryumin-Light                ;
/KozMinPro-Regular            /KozMinProVI-Regular         ;
/KozMinPro-Regular-Acro       /KozMinPro-Regular           ;
/HeiseiMin-W3-Acro            /KozMinPro-Regular-Acro      ;
/KozGoProVI-Medium            /GothicBBB-Medium            ;
/KozGoPro-Medium              /KozGoProVI-Medium           ;
/KozGoPro-Medium-Acro         /KozGoPro-Medium             ;
/HeiseiKakuGo-W5-Acro         /KozGoPro-Medium-Acro        ;
/STSong-Light                 /BousungEG-Light-GB          ;
/STSong-Regular               /BousungEG-Light-GB          ;
/STHeiti-Regular              /WenQuanYiZenHei             ;
/STHeiti-Light                /WenQuanYiZenHei             ;
/STKaiti-Regular              /GBZenKai-Medium             ;
/STFangsong-Regular           /FangSong                    ;
/STFangsong-Light             /FangSong                    ;
/AdobeSongStd-Light           /STSong-Light                ;
/AdobeSongStd-Light-Acro      /AdobeSongStd-Light          ;
/STSongStd-Light-Acro         /AdobeSongStd-Light-Acro     ;
/STSongStd-Light              /STSongStd-Light-Acro        ;
/STSong-Light-Acro            /STSongStd-Light-Acro        ;
/AdobeHeitiStd-Regular        /STHeiti-Regular             ;
/MSung-Light                  /ShanHeiSun-Uni              ;
/MSung-Medium                 /ShanHeiSun-Uni              ;
/MHei-Medium                  /cwTeXHeiBold                ;
/MKai-Medium                  /ZenKai-Uni                  ;
/AdobeMingStd-Light           /MSung-Light                 ;
/AdobeMingStd-Light-Acro      /AdobeMingStd-Light          ;
/MSungStd-Light-Acro          /AdobeMingStd-Light-Acro     ;
/MSungStd-Light               /MSungStd-Light-Acro         ;
/MSung-Light-Acro             /MSungStd-Light-Acro         ;
/MHei-Medium-Acro             /MHei-Medium                 ;
/HYSMyeongJo-Medium           /UnBatang                    ;
/HYGoThic-Medium              /UnDotum                     ;
/HYKHeadLine-Bold             /UnBatang-Bold               ;
/HYKHeadLine-Medium           /UnBatang-Bold               ;
/HYRGoThic-Medium             /GulimChe                    ;
/HYGungSo-Bold                /UnGungseo                   ;
/AdobeMyungjoStd-Medium       /HYSMyeongJo-Medium          ;
/AdobeMyungjoStd-Medium-Acro  /AdobeMyungjoStd-Medium      ;
/HYSMyeongJoStd-Medium-Acro   /AdobeMyungjoStd-Medium-Acro ;
/HYSMyeongJoStd-Medium        /HYSMyeongJoStd-Medium-Acro  ;
/HYSMyeongJo-Medium-Acro      /HYSMyeongJoStd-Medium-Acro  ;
/HYGoThic-Medium-Acro         /HYGoThic-Medium             ;

%%% IPA Fonts
%%% See http://www.ipa.go.jp/about/press/20071001-2.html
%%%     http://ossipedia.ipa.go.jp/ipafont/
/IPAMincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (ipam.ttf) >> ;
/IPAGothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (ipag.ttf) >> ;

%%% O'Reilly CID-keyed fonts including Wadalab Fonts
%%% See ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/samples/
%%%     ftp://ftp.oreilly.de/pub/examples/english_examples/nutshell/cjkv/adobe/samples/
%%%     http://examples.oreilly.de/english_examples/nutshell/cjkv/adobe/samples/
%/Ryumin-Light                 /WadaMin-Regular                ;
%/FutoMinA101-Bold             /WadaMin-Bold                   ;
%/GothicBBB-Medium             /WadaGo-Bold                    ;
%/Jun101-Light                 /WadaMaruGo-Regular             ;
%/MSung-Light                  /MOESung-Regular                ;
%/MKai-Medium                  /MOEKai-Regular                 ;
%/HYSMyeongJo-Medium           /MunhwaMyungjoStd-Regular       ;
%/HYSMyeongJo-Medium           /Munhwa-Regular                 ;
%/HYSMyeongJo-Medium           /MunhwaMyungjoStd-Bold          ;
%/HYSMyeongJo-Medium           /Munhwa-Bold                    ;
%/HYGoThic-Medium              /MunhwaGothicStd-Regular        ;
%/HYGoThic-Medium              /MunhwaGothic-Regular           ;
%/HYKHeadLine-Bold             /MunhwaGothicStd-Bold           ;
%/HYKHeadLine-Bold             /MunhwaGothic-Bold              ;
%/HYGungSo-Bold                /MunhwaScriptStd-Bold           ;
%/HYGungSo-Bold                /MunhwaGungSeo-Bold             ;
%/HYGungSo-Bold                /MunhwaScriptStd-Light          ;
%/HYGungSo-Bold                /MunhwaGungSeo-Light            ;
%/HYGungSo-Bold                /MunhwaScriptFreestyleStd-Bold  ;
%/HYGungSo-Bold                /MunhwaGungSeoHeulim-Bold       ;
%/HYGungSo-Bold                /MunhwaScriptFreestyleStd-Light ;
%/HYGungSo-Bold                /MunhwaGungSeoHeulim-Light      ;

%%% Wadalab Maru Gothic (JIS X 0213)
%%% See http://sourceforge.jp/projects/jis2004/wiki/FrontPage
/WadaLabMaruGo20044           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (wlmaru20044.ttf) >> ;
/WadaLabMaruGo20004           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (wlmaru20004.ttf) >> ;

%%% Chinese TrueType font by Arphic Technology
%%% See ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/ShanHeiSun-Light             << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (bsmi00lp.ttf) >> ;
/ZenKai-Medium                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (bkai00mp.ttf) >> ;
/BousungEG-Light-GB           << /FileType /TrueType  /CSI [(GB1) 5]     /Path (gbsn00lp.ttf) >> ;
/GBZenKai-Medium              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (gkai00mp.ttf) >> ;

%%% CJK-Unifonts
%%% See http://www.freedesktop.org/wiki/Software/CJKUnifonts
/ShanHeiSun-Uni               << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (uming.ttf) >> ;
/ShanHeiSun-Uni-Adobe-GB1     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (uming.ttf) >> ;
/ZenKai-Uni                   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (ukai.ttf)  >> ;
/ZenKai-Uni-Adobe-GB1         << /FileType /TrueType  /CSI [(GB1) 5]     /Path (ukai.ttf)  >> ;

%%% WenQuanYi outline fonts
%%% See http://wqy.sourceforge.net/en/
%%%     http://sourceforge.net/projects/wqy/
/WenQuanYiZenHei              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (wqy-zenhei.ttf) >> ;
/WenQuanYiZenHei-Adobe-CNS1   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (wqy-zenhei.ttf) >> ;

%%% cwTeX TrueType font
%%% See http://cle.linux.org.tw/fonts/cwttf/
/cwTeXMing                    << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwming.ttf) >> ;
/cwTeXHeiBold                 << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwheib.ttf) >> ;
/cwTeXYen                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwyen.ttf)  >> ;
/cwTeXKai                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwkai.ttf)  >> ;
/cwTeXFangSong                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (cwfs.ttf)   >> ;

%%% Un-fonts Core families
%%% See http://kldp.net/projects/unfonts/
/UnBatang                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnBatang.ttf)      >> ;
/UnBatang-Bold                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnBatangBold.ttf)  >> ;
/UnDotum                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnDotum.ttf)       >> ;
/UnDotum-Bold                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnDotumBold.ttf)   >> ;
/UnGraphic                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnGraphic.ttf)     >> ;
/UnGraphic-Bold               << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnGraphicBold.ttf) >> ;
/UnGungseo                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnGungseo.ttf)     >> ;
/UnPilgi                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnPilgi.ttf)       >> ;
/UnPilgi-Bold                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnPilgiBold.ttf)   >> ;

%%% Un-fonts Extra families
%%% See http://kldp.net/projects/unfonts/
/UnShinmun                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnShinmun.ttf)    >> ;
/UnPen                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnPen.ttf)        >> ;
/UnPenheulim                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnPenheulim.ttf)  >> ;
/UnTaza                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnTaza.ttf)       >> ;
/UnYetgul                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnYetgul.ttf)     >> ;
/UnBom                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnBom.ttf)        >> ;
/UnJamoBatang                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnJamoBatang.ttf) >> ;
/UnJamoSora                   << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnJamoSora.ttf)   >> ;
/UnJamoDotum                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnJamoDotum.ttf)  >> ;
/UnJamoNovel                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (UnJamoNovel.ttf)  >> ;

%%% monospaced TrueType outline fonts in Windows Vista/XP
%%% See C:\Windows\Fonts\
/MS-Mincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msmincho.ttc)  /SubfontID 0 >> ;
/MS-Gothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 0 >> ;
/NSimSun                      << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsun.ttc)    /SubfontID 1 >> ;
/SimHei                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simhei.ttf)                 >> ;
/SimHei-Adobe-CNS1            << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/simhei.ttf)                 >> ;
/MingLiU                      << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 0 >> ;
/BatangChe                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 1 >> ;
/DotumChe                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 3 >> ;
/GulimChe                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 1 >> ;
/GungsuhChe                   << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 3 >> ;

%%% proportional TrueType outline fonts in Windows Vista/XP
%%% See C:\Windows\Fonts\
/MS-PMincho                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msmincho.ttc)  /SubfontID 1 >> ;
/MS-PGothic                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 1 >> ;
/MS-UIGothic                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 2 >> ;
/SimSun                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsun.ttc)    /SubfontID 0 >> ;
/PMingLiU                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 1 >> ;
/Batang                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 0 >> ;
/Dotum                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 2 >> ;
/Gulim                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 0 >> ;
/Gungsuh                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 2 >> ;

%%% monospaced TrueType outline fonts in Windows Vista
%%% See C:\Windows\Fonts\
/SimSun-ExtB                  << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsunb.ttf) >> ;
/KaiTi                        << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simkai.ttf)  >> ;
/FangSong                     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simfang.ttf) >> ;
/DFKaiShu-SB-Estd-BF          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/kaiu.ttf)    >> ;

%%% proportional TrueType outline fonts in Windows Vista
%%% See C:\Windows\Fonts\
/Meiryo                       << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryo.ttc)    /SubfontID 0 >> ;
/Meiryo-Italic                << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryo.ttc)    /SubfontID 1 >> ;
/Meiryo-Bold                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryob.ttc)   /SubfontID 0 >> ;
/Meiryo-BoldItalic            << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryob.ttc)   /SubfontID 1 >> ;
/MicrosoftYaHei               << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/msyh.ttf)                   >> ;
/MicrosoftYaHeiBold           << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/msyhbd.ttf)                 >> ;
/MicrosoftJhengHeiRegular     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/msjh.ttf)                   >> ;
/MicrosoftJhengHeiBold        << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/msjhbd.ttf)                 >> ;
/Ming-Lt-HKSCS-UNI-H          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 2 >> ;
/MingLiU-ExtB                 << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 0 >> ;
/PMingLiU-ExtB                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 1 >> ;
/Ming-Lt-HKSCS-ExtB           << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 2 >> ;
/MalgunGothicRegular          << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/malgun.ttf)                 >> ;
/MalgunGothicBold             << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/malgunbd.ttf)               >> ;

%%% TrueType outline fonts in StarSuite 8
%%% See http://jp.sun.com/products/software/starsuite/
%%%     http://pack.google.com/intl/ja/pack_installer.html?hl=ja&gl=jp&ci_apps=None&ci_so=on
/HG-MinchoL-Sun               << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/HG-MinchoL-Sun.ttc)  /SubfontID 0 >> ;
/HG-GothicB-Sun               << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/HG-GothicB-Sun.ttc)  /SubfontID 0 >> ;

%%% TrueType outline fonts in StarSuite 8 or Microsoft Office 2003
/HGMinchoB                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrmb.ttc)   /SubfontID 0 >> ;
/HGMinchoE                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrme.ttc)   /SubfontID 0 >> ;
/HGSoeiPresenceEB             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrpre.ttc)  /SubfontID 0 >> ;
/HGGothicM                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrgm.ttc)   /SubfontID 0 >> ;
/HGGothicE                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrge.ttc)   /SubfontID 0 >> ;
/HGSoeiKakugothicUB           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrsgu.ttc)  /SubfontID 0 >> ;
/HGMaruGothicMPRO             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrsmp.ttf)               >> ;
/HGSoeiKakupoptai             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrpp1.ttc)  /SubfontID 0 >> ;
/HGKyokashotai                << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrkk.ttc)   /SubfontID 0 >> ;
/HGSeikaishotaiPRO            << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrskp.ttf)               >> ;
/HGGyoshotai                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrgy.ttc)   /SubfontID 0 >> ;
```

***

なお，gs\gs8.??\Resource\CMap\ に CMap をコピーしていない方は，
そこに先に述べた Adobe Reader 附属の CMap などをコピーしてください。

以上でインストールはようやく終わりです。

では，実際に xyzzy で Unicode 文書を書いてみましょう。新規作成した後に
すぐに ［ファイル］ → ［名前をつけて保存］ で，
ダイアログの「エンコーディング」に \[Unicode (UTF-8)\] を選んで保存します
（UTF-16 などの他の Unicode エンコーディングは選ばないように注意！）。

さて，TeX ソースに中国語・韓國語を入力するためには
残念ながら入力ソフト (input method) が必須となります。
入力ソフトをまだインストールしてない場合は
「[Windows 系コンピュータで使う中国語・韓国語](http://www2.yamanashi-ken.ac.jp/~yohnishi/pcinfo/windows_tips/international/win-cn-kr.html)」，
「[Windowsで中国語・韓国語を扱う方法](http://www.rglk.com/regal/mame-chisiki-j.html)」
を参考にインストールしてください。xyzzy は Global IME による入力に
対応していますので，Windows 98 などの方は
Global IME をインストールしておきましょう。

xyzzy 側での設定ですが，メニューバーより ［ツール］ → ［共通設定］ より ［フォント］タブを選び，それぞれの言語の文字セットについて，フォントなどを適切に対応付けておきます。
（どのフォントを使うのか分からない場合は，Internet Explorer より ［ツール］ → ［インターネットオプション］ より，［全般］タブを選び，［フォント］ボタンをクリックして調べます。それぞれの言語セットの ［テキスト形式フォント］ が xyzzy で使うべきフォントです。）

Global IME を用いる Windows 98 などのユーザーは ［ツール］ → ［共通設定］ より ［いろいろ］タブを選び，［Global IMEを使う］ にチェックを入れておきます。

otfcjk での書き方は
[Kino さんの入力例](http://www2.odn.ne.jp/alt-quinon/files/ptex/otfcjk/)の
WhatsUniCJK-tex.zip などを参考にしてください。
（Mac OS X を想定した書き方のため，そのままコンパイルはできません。

```
\usepackage[ttf]{mlotf}
```

の “\[ttf\]” を抜いて

```
\usepackage{mlotf}
```

に直すことで，［不具合はあるものの］とりあえずコンパイルは通ります。）
使い方は非常に簡単で，繁體字（正體字）は「繁体中文」環境，
簡化字（&#x7b80;化字，簡体字）は「簡体中文」環境，
ハングル（&#xd55c;&#xae00;）は「ハングル」環境で括るだけです。

自分で書いてみたい方は次のような自己紹介の文章でも良いでしょう。
このファイルを “cjkintro.tex” とします。

***

```
%%% -*- mode: katex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage[multi]{otf}
\usepackage{mlotf}

\begin{document}
\section{Japanese}
こんにちは。私の名前は\textbf{東大}です。よろしくお願いします。

こんにちは。私の名前は\textbf{ひがしひろし}です。よろしくお願いします。

\section{Chinese}
\subsection{Simplified Chinese}
%%% 簡化字中国語（中国大陸などで用いられる）の場合は
%%% 「簡体中文」環境を用います。
\begin{簡体中文}
你好。说\textbf{东大}。请多关照。
\end{簡体中文}

\subsection{Traditional Chinese}
%%% 繁體字中国語（臺灣［台湾］・香港などで用いられる）の場合は
%%% 「繁体中文」環境を用います。
\begin{繁体中文}
你好。說\textbf{東大}。請多關照。
\end{繁体中文}

\section{Korean}
%%% 韓國語・朝鮮語の場合は「ハングル」環境を用います。
\begin{ハングル}
안녕하세요.\textbf{히가시 히로시}라고 합니다.잘 부탁드립니다.
\end{ハングル}

\end{document}
```

***

コマンドラインより次のコマンドで変換します。

```
utf8toutf cjkintro.tex cjkintro-sjis.tex
```

xyzzy から実行したい方は次を ~/.xyzzy などの初期設定ファイルに書いておきます。Alt + x とした上で “exec-utf8toutf” と入力し，Enterキーを押して起動します。
前に述べた KaTeX の設定と組み合わせることを勧めます。

```
(defun exec-utf8toutf ()
  (interactive)
  (let ((in-file (file-namestring (get-buffer-file-name)))
	(out-file (concat (pathname-name (get-buffer-file-name))
			  "-sjis."
			  (pathname-type (get-buffer-file-name))))
	(dir (directory-namestring (get-buffer-file-name)))
	)
    (call-process "utf8toutf"
		  :input in-file
		  :output out-file
		  :exec-directory dir
		  :wait t)
    (split-window)
    (other-window)
    (find-file (concat dir out-file))

    ))
```

これで変換され，文字コードも自動的に Shift_JIS になりました。
生成したファイル名はここでは “cjkintro-sjis.tex” です
（ちなみに Utf82TeX も併用したい場合には
先に Utf82TeX で処理しておくのがコツです）。

あとはいつものように platex などで処理し，PDF 文書で確認しましょう。

```
platex cjkintro-sjis.tex
dvipdfmx cjkintro-sjis.dvi
```

または，

```
platex cjkintro-sjis.tex
dvips cjkintro-sjis.dvi
ps2pdf cjkintro-sjis.ps
```

のように実行します（Ghostscript 8.54 においては，ps2pdf での変換時に
フリーズしたと思えるほど非常に時間がかかります）。あとは PDF を開いて
うまく表示されているかどうか確認しましょう。なお，PDF を開いたときに
フォントのインストールを促されたらインストールしておいてください。

最後に。中国語や韓國語は句読点が真ん中に表示されることがありますが，
それで問題ないはずです。
（フォントのグリフの問題です。伝統的な組版かどうかまでは分かりませんが。）

### Unicode で多言語 TeX 文書を作ってみる（グルジア語・ヴェトナム語編） {#xygeorsd}

xyzzy はなぜかグルジア文字を扱えます。また，正式対応ではありませんが，
ヴェトナム語も表示できるようです。折角ですので，
グルジア語やヴェトナム語を TeX で扱う方法についても述べましょう。

グルジア語の場合，TeX では
[mxedruli パッケージ](https://mirror.ctan.org/help/Catalogue/entries/mxedruli.html)を
用いることで，多数のグルジア文字を扱うことができます。
ただ mxedruli パッケージは ASCII アルファベットでグルジア語を記述する必要が
あるため，このままではちょっと不便です。幸い xyzzy ではグルジア文字を
表示できます。ですので，グルジア文字と ASCII 文字転写規則をハッシュとして
表現した上で変換するような Perl Script でもこしらえれば便利そうです。

インストール方法について解説します。

xyzzy でグルジア文字を表示できるようにしておきます。無料のフォントとしては，[BPG フォント](http://geocities.ws/bpgfonts/files/)，例えば BPG Courier New は xyzzy で表示できるフォントですので，これをインストールします。
そして，xyzzy のメニューより ［ツール］ → ［共通設定］ の ［フォント］タブにて，「文字セット」を ［グルジア文字］ にし，例えば \[BPG Courier New\] を選んで \[OK\] を押します。これでめでたくグルジア文字が表示できるようになったはずです。

グルジア語を扱う TeX パッケージである
[mxedruli パッケージ](https://mirror.ctan.org/fonts/georgian/mxedruli/)をダウンロードし，
展開（解凍）します。$TEXMFLOCAL/fonts/source/mxedruli/ に
mf/ ディレクトリの中身を，$TEXMFLOCAL/tex/latex/mxedruli/ に
inputs/ ディレクトリの中身をコピーします。（mxedruli/ ディレクトリは
新たに作ります。名前は別に “mxedruli” でなくても良いですが。）
必要な方は mktexlsr コマンドを実行しておきましょう。

ヴェトナム語の場合は [VnTeX](http://sourceforge.net/projects/vntex/) を
用います。このリンク先から圧縮形式の違うだけのものは除いて
全種類（3種類だと思う）のファイルをダウンロードしてきます。
「[TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/ndex.html)」の [qa:33515](https://okumuralab.org/~okumura/texfaq/qa/33515.html) および [qa:27846](https://okumuralab.org/~okumura/texfaq/qa/27846.html) の投稿を参考に
インストールします。以下，$TEXMFLOCAL を例えば share/texmf-local などと
自分の環境に合わせて置き換えて考えてください。

vntex-20030303.zip を展開（解凍）し，次のディレクトリはそのまま上書きします。

- vntex-20030303/web2c/ → $TEXMFLOCAL/web2c/
- vntex-20030303/fonts/ → $TEXMFLOCAL/fonts/
- vntex-20030303/tex/ → $TEXMFLOCAL/tex/
- vntex-20030303/doc/ → $TEXMFLOCAL/doc/

次は，$TEXMF/fontname/special.map が存在しない場合のみコピーします。

- vntex-20030303/fontname/special.map → $TEXMFLOCAL/fontname/special.map

次のファイルを次のように適切な場所にコピーします。

- vntex-20030303/dvips/vntex/config.vnr → $TEXMFLOCAL/dvips/config/
- vntex-20030303/dvips/vntex/t5.enc → $TEXMFLOCAL/fonts/enc/dvips/base/
- vntex-20030303/dvips/vntex/vnr.map → $TEXMFLOCAL/fonts/map/dvips/misc/
- vntex-20030303/dvipdfm/config/vnr.map → $TEXMFLOCAL/fonts/map/dvipdfm/base/

dvipdfmx をお使いの場合，$TEXMF/dvipdfm/config/dvipdfmx.cfg に

```
f vnr.map
```

と書きます。

フォントは基本的に vnr-t1-20030303.zip と urwvn-tex-20030114.zip の
fonts/ や tex/ ディレクトリ (urwvn-tex-20030114.zipのみ) を
そのまま対応するディレクトリ（例えば share/texmf-local/）に上書きしますが
urwvn-tex-20030114/dvips/urwvn/urwvn.map だけは
$TEXMFLOCAL/fonts/map/dvips/misc/ に保存しておいてください。

今回は日本語と一緒に扱うことを前提に，VnTeX を Babel に組み込んでみます。

1. $TEXMFLOCAL/tex/generic/babel/ に
    VnTeX の tex/latex/vietnam/ に含まれている vietnam.ldf を置く。

1. babel.sty の \DeclareOption の並んでいる辺り
    （私は \DeclareOption{USenglish}{\input{english.ldf}} の下にした）に 

    ```
    \DeclareOption{vietnam}{\input{vietnam.ldf}}
    ```

    を追加する。

1. $TEXMF/tex/generic/hyphen/ukhyphen.tex をコピーし，vnhyphen.tex に
    リネームする。（とりあえず外来語に多い英語でやっています。
    古いベトナム書籍の組版ではフランス語やロシア語に倣ったものもあるそうです。）

1. $TEXMF/tex/generic/config/language.dat の末尾に

    ```
    vietnam vnhyphen.tex
    ```

    と追加します。

あとはコマンドプロンプトなどで次のように fmtutil で処理します。

```
fmtutil --byfmt latex
fmtutil --byfmt platex
```

では，実際にソースを記述していきましょう。たとえば次のような感じで書いていきます。
グルジア文字やヴェトナム語の入力環境を整えてない方は，次を参考にグルジア語やヴェトナム語のキーボードの追加設定を行ってください。
（まずはグルジア語。[Windows 2000 の場合](http://mlang1.osaka-gaidai.ac.jp/multi/win2k.html)，[Windows XP の場合](http://mlang1.osaka-gaidai.ac.jp/multi/winxp.html)。
[ヴェトナム語の場合 \[Windows 2000, XP\]](http://www.vinapark.com/basic/input.html#windows)）

グルジア語の場合，次のようにソースを書いていきます。\usepackage で
mxedruli を読み込みます。グルジア語は mxedr 環境内に書きます。
保存する際には文字コード（エンコーディング）を UTF-8 で保存します。

***

```
%%% -*- mode: katex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage{mxedruli}
\begin{document}
日本語を使いつつ，グルジア語のアルファベットを記述していきます。

\begin{mxedr}
%%% （mxedr 環境にグルジア文字を直接記述します。
%%%   表記できない文字はマニュアルを参考に
%%%   ASCII アルファベットで直接書きます。）
\end{mxedr}

\end{document}
```

***

ヴェトナム語の場合は次の通りです。

***

```
%%% -*- mode: katex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage{inputenc}
\usepackage[T1]{fontenc}
\usepackage{dblaccnt}
\usepackage[vietnam,english]{babel}
%\usepackage{japanese}
\begin{document}

こんな感じです。

\begin{otherlanguage}{vietnam}
%%% この中にヴェトナム語を直接入力
\end{otherlanguage}
\end{document}
```

***

では，変換してみましょう。簡単な変換スクリプトを作ってみましたので，よろしければ使ってみてください。
（私の環境で表示できた an から ha までの文字しか変換できません。その他の文字については，すみませんが ASCII アルファベットで書いてください。
もちろん改良スクリプト随時大募集です。） スクリプトの実行には Perl が必要になりますので，忘れずにインストールしてください。

- G2TeX ([g2tex.pl](http://web.archive.org/web/20060824005927/http://www.klavis.info/g2tex.pl))
- V2TeX ([v2tex.pl](http://web.archive.org/web/20060824010156/http://www.klavis.info/v2tex.pl))

g2tex.pl や v2tex.pl をダウンロードし，PATH の通ったディレクトリ
（例えば TeX のインストールディレクトリ内にある
実行ファイルディレクトリ C:\w32tex\bin など）にコピーします。
ついでに TeX 実行ファイルのインストール先であれば
そのディレクトリ内にある perlexec.exe を g2tex.exe や v2tex.exe に
コピーしておきます。（こうしておくとコマンド実行時に便利ですので。）

コマンドプロンプト上で，入力ファイルが gtest.tex，変換後のファイルが gtesto.tex であれば

```
g2tex <gtest.tex >gtest-o.tex
```

のように実行します。（ヴェトナム語の場合は g2tex を v2tex にします。）すると，gtest-o.tex にグルジア文字やヴェトナム語が ASCII アルファベットに変換されたファイルが出力されます。

xyzzy から実行したい方は次を ~/.xyzzy などの初期設定ファイルに書いておきます。Alt + x とした上で “exec-g2tex” と入力し，Enterキーを押して起動します。
前に述べた KaTeX の設定と組み合わせることを勧めます。（ヴェトナム語の場合は “g2tex” を “v2tex” に直して書きます。）

```
(defun exec-g2tex ()
  (interactive)
  (let ((in-file (file-namestring (get-buffer-file-name)))
	(out-file (concat (pathname-name (get-buffer-file-name))
			  "-o."
			  (pathname-type (get-buffer-file-name))))
	(dir (directory-namestring (get-buffer-file-name)))
	)
    (call-process "g2tex"
		  :input in-file
		  :output out-file
		  :exec-directory dir
		  :wait t)
    (split-window)
    (other-window)
    (find-file (concat dir out-file))
    ;; 文字コードも自動的に Shift_JIS にしたい場合は
    ;; 下の行の一番左の“;”を削除（コメントアウト）する。
    ;(set-buffer-fileio-encoding *encoding-sjis*)
    ))
```

あとはこれを Shift_JIS エンコーディングで保存し，

```
platex gtest-o.tex
```

を実行します。DVI ファイルをプレビューしてみて，うまくいっているかどうかを
確認してください。ヴェトナム語の場合はこれだけではたぶん文字化けしますので，

```
dvipdfmx gtest-o.dvi
```

を実行して PDF ファイルを閲覧するようにしてください。

xyzzy 作者の[亀井哲弥さん](http://www.jsdlab.co.jp/~kamei/)がやる気を出して
他の言語を扱えるようになったら，
その都度グルジア語と同じように，TeX パッケージの転記規則を調べ，
変換スクリプトを作ることで同様に任意の外国語文字を直接入力できるように
なります。今後多種多様な文字を xyzzy で扱えるようになるといいですね。

## その他の使い方 {#xyz162c1}

[Xyzzy Wiki](http://xyzzy.s53.xrea.com/wiki/) に有用な情報が
集積していますので，そちらをご覧ください。

『[入門 xyzzy](http://ssl.ohmsha.co.jp/cgi-bin/menu.cgi?ISBN=4-274-06600-2)』
という本もあります。
体系的に xyzzy の操作方法を習得したい場合は購入を検討してみるとよいでしょう。
メニューバー・ツールバー等の作成まで含めた xyzzy Lisp の書き方も
割と詳しくまとめられていますし，
ここで少し述べた多言語入力法にまで踏み込んで書かれています。

## 謝辞 {#xyathxds}

本文書を作るにあたり，[2ch](http://www.2ch.net/) の xyzzy 関連スレや
[Xyzzy Wiki](http://xyzzy.s53.xrea.com/wiki/) のアイディアを
拝借するなどしています。親切にご教示くださった方々に心より御礼申し上げます。

## Comments {#xyacm2ab}

- 編集などは勝手にどうぞ。編集まではしたくないけどツッコミがある場合、新しいアイディアがある場合、この文書に関するご質問がある場合はコメント欄から遠慮なくどうぞ。（質問は一応調べてから来てくれるとうれしいです。） -- ダメダメ筆者 2005-10-26 (水) 09:41:57
- 項目が多くなって見づらい気がしたので多少整理してみました。ちなみに[xyzzyでもispellは使える](http://xyzzy.s53.xrea.com/wiki/?QuickTour%2Fetc%2Fispell)はずです。とはいえ私もaspell派ですが。 --  2005-10-26 (水) 18:24:05
- 整理ありがとうございました！ちなみにxyzzyから使えるIspellは亀井さんの移植したものであって角藤さんの移植したものではなかったはずです。亀井さんの移植したIspellにはTeXの命令を無視するなどの機能はありましたっけ？ -- ダメダメ筆者 2005-10-26 (水) 18:36:18
- なるほど、そういうことでしたか。ispellは使ってないのできちんと調べずに書いてしまいました。すいません。でも、「角藤先生のispellは使えない」→「Aspellを使うことになる」だとほかの可能性をまったく除外しているように感じました。Aspellを使うことをオススメします、ぐらいでいいのではないでしょうか。 --  2005-10-26 (水) 20:25:44
- ここはTeX WikiなのでAspell以外の選択肢を除外してしまいましたが、やんわりとお勧めしたほうがいいかもしれませんね。直してみました。 -- ダメダメ筆者 2005-10-27 (木) 09:07:26
- Aspellはwin2k環境変数LANGにja_JP.SJISがかき込んであるとディスクトップアイコンに英文テキストをドラッグしても起動せず、xyzzyではcannot spown aspellとなって起動しません。ispellは平気です。 -- zyma56 2005-11-02 (水) 05:28:49
- ご報告ありがとうございます。早速追記させていただきます。 -- ダメダメ筆者 2005-11-02 (水) 08:32:52
- Aspellについて追記しておきました。 --  2005-11-02 (水) 18:07:56
- ありがとうございました。xyzzy+KTeXはここ２週間の使用経験で手放せなくなりました。初心者の私がみなさまのご助言を得て解決したこのケースが他のみなさまのお役にたてば嬉しいです。 -- zyam56 2005-11-02 (水) 20:20:10
- 自分の書いたコードがここで紹介されていて感激しました． --  2005-11-05 (土) 15:52:39
- どうもありがとうございました＞Aspellについて追記した方＆改良コードを書いてくださった方　私自身はへたれコードしか書けませんので、どなたかより良いコードが書ける方はどんどん直してください。 -- ダメダメ筆者 2005-11-07 (月) 18:14:31
- xyzzyのライセンスがMITライセンスになりました。割と重要なことですのでいちおうコメント欄にも書いておきます。 -- ダメダメ筆者 2005-12-19 (月) 14:34:31
- パスにスペースが入っている場合も考慮してDVIOUTの設定（srcの%s）を囲みました。 -- 稲原 2005-12-24 (土) 21:57:36
- ありがとうございました。なるほど、たしかにこれは必要なことです。 -- ダメダメ筆者 2005-12-27 (火) 08:58:46
- outline-treeのバージョン2の解説を書いてみました。間違いなどがありましたらご指摘下さい。 -- ダメダメ筆者 2006-05-26 (金) 15:19:04
- parenがnetinstallerから消えるなどしていましたので、parentagをメインに紹介することにしました。 -- ダメダメ筆者 2006-05-30 (火) 18:00:26
- xyzzyのインストーラについて追記しました。 -- ダメダメ筆者 2006-06-07 (水) 10:34:10
- [xyzzy上のスペルチェッカー作成](http://keijisaito.info/arc/spell/spell_check.htm)にaspellの設定説明と片手でできるテンキー用スペルチェックのファイルがあります。 -- 1154736330 2006-08-05 (土) 09:05:30
- 動的補完のコードに問題点があったので、修正しました。 -- act 2007-02-20 (火) 22:49:36
- 「KaTeX で TeX の命令をラクラク入力」のセクションに "pbibtex.exe" 関連の記述を追加しました。 -- 1257567430 2009-11-07 (土) 13:17:10
