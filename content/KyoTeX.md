---
title: "KyoTeX"
url: "/KyoTeX/"
date: 2011-02-13T19:51:41Z
pukiwiki: "KyoTeX"
---

# KyoTeX

[xyzzy](/xyzzy/) > KyoTeX

## [KyoTeX](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/) {#v6739e44}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### kyotex-mode とは {#sb34eaed}

kyotex-mode は [xyzzy](/xyzzy/) 用の TeX/LaTeX/BibTeX 編集支援モードです．

- [kyotex-mode - xyzzy lisp - 米澤進吾 ホームページ](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/) 公式サイト

<img src="http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/img/snapshot_001.png" alt="kyotex-mode を使った xyzzy の画面">

### kyotex-mode のインストール {#v1bb481d}

- [kyotex-modeのインストール](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/install.html) を参照．

環境変数 XYZZYHOME が設定されている場合，.xyzzy ファイルは [MinGW](http://www.mingw.org/) Shell (MSYS) や [Cygwin](http://www.cygwin.com/) Bash Shell から

```
$ cd $XYZZYHOME
$ touch .xyzzy
```

で作成可能です．

MinGW や Cygwin がインストールされていない場合は，環境変数 XYZZYHOME で設定されているフォルダで，テキスト ドキュメントを新規作成し，メモ帳で

```
".xyzzy"
```

のようにダブルクォーテーションを付けて保存すれば作成可能です．

kyotex-mode を以下のように配置します．

***

```
C:.
└─xyzzy
    ├─site-lisp
    │   └─kyotex
    │       ├─kyotex.l
    │       └─bibtex-template.l
    └─etc
        ├─KyoTeX
        └─BiBTeX
```

***

.xyzzy に以下の記述を追加します．

***

```
;;
;; KyoTeX
;;
(push (merge-pathnames "site-lisp/kyotex" (si:system-root)) *load-path*)
(load-library "kyotex")
(push '("\\.tex$" . kyotex-mode) *auto-mode-alist*)
(push '("\\.bbl$" . kyotex-mode) *auto-mode-alist*)
(push '("\\.bib$" . bibtex-mode) *auto-mode-alist*)
```

***

### 基本設定 {#mab284ce}

- [kyotex-modeの設定変更方法](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/setting.html) を参照．

メニューの \[kyotex(Y)\]-\[基本設定\]-\[コンパイラの設定(D)\] で

TeX(T):
: platex

BiBTeX(B):
: pbibtex

DVI->PDF(P):
: dvipdfmx

MakeIndex(M):
: mendex

MakeIndex Option:
: @@

に設定して \[設定の保存(S)\] をクリックします．

### コンパイルコマンド {#kbf0ab3d}

- [コンパイルコマンド](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/compile.html) を参照．

### 補完コマンド {#be009b07}

- [補完コマンド](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/completion.html) を参照．
