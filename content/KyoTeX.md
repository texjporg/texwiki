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

環境変数 XYZZYHOME が設定されている場合，.xyzzy ファイルは [Cygwin](http://www.cygwin.com/) の bash から

```
$ cd $XYZZYHOME
$ touch .xyzzy
```

で作成可能です．

Cygwin がインストールされていない場合は，環境変数 XYZZYHOME で設定されているフォルダで，テキスト ドキュメントを新規作成し，メモ帳で

```
".xyzzy"
```

という名前で保存すれば作成可能です．

### 基本設定 {#mab284ce}

- [kyotex-modeの設定変更方法](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/setting.html) を参照．

TeX(T):
: eplatex

BiBTeX(B):
: pbibtex

DVI->PDF(P):
: dvipdfmx

MakeIndex(M):
: mendex

MakeIndex Option:
: @@

に設定します．

### コンパイルコマンド {#kbf0ab3d}

- [コンパイルコマンド](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/compile.html) を参照．

### 補完コマンド {#be009b07}

- [補完コマンド](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/completion.html) を参照．
