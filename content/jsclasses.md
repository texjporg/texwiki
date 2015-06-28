---
title: "jsclasses"
url: "/jsclasses/"
date: 2013-11-02T18:24:42Z
pukiwiki: "jsclasses"
---

# jsclasses

## [jsclasses](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/)（pLaTeX2e 新ドキュメントクラス） {#m850c7de}

jsclasses は奥村晴彦先生による upLaTeX, pLaTeX 用新ドキュメントクラスです．
従来の jarticle や jbook といったドキュメントクラスは
JIS フォントメトリックに従っていませんでしたが，今では日本語文書の行組版方法に即した
jsclasses が標準になっています．

派生版として，pLaTeX2e 依存部分を取り除いて
uplatex, platex 以外のエンジンでも利用可能にした [BXjscls](/BXjscls/) があります．

***

***

### インストール {#h846e833}

[TeX Live](</TeX Live/>) には jsclasses パッケージが最初からインストールされています．

[W32TeX](/W32TeX/) の場合は
（[uptex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/uptex-w32.tar.xz)）
をインストールすれば新ドキュメントクラスがインストールされます．
手動でインストールする場合は jsclasses パッケージを $TEXMFLOCAL/tex/platex/
（例えば C:\w32tex\share\texmf-local\tex\platex\）
に展開すれば OK です。

もしファイル名のデータベース
$TEXMF/ls-R（例えば C:\w32tex\share\texmf\ls-R）が存在するのなら，mktexlsr
コマンド[^1]でデータベースを更新しないと，新しくインストールしたファイルが認識されません．
しかしこれは忘れやすいので，初心者のかたは
mktexlsr コマンドを打ち込まないほうがいいでしょう．
W32TeX を使用していて間違って mktexlsr コマンドを打ち込んでしまった場合は
deltexlsr コマンドを打ち込めば，$TEXMF/ls-R ファイルが削除されます。

### 使い方 {#q5891f40}

[LaTeX入門](</LaTeX入門/>) を参照．

### jsclasses による縦組み {#i93cafcb}

古い jclasses には tarticle, tbook などといった縦組み用文書クラスがありますが，これらには問題点があります。
jsclasses には標準で縦組み対応のクラスファイルがありませんが，工夫次第で縦組みも可能なようです。

% \[TODO\] ほかの例も集めましょう。

- [upLaTeX + Source Han Sans（源ノ角ゴシック）による縦書き実験](http://doratex.hatenablog.jp/entry/20140803/1407072636)，[ソース例](https://gist.github.com/doraTeX/63e6b3e8637fc8e9bdc4)
- 質問：[tarticle, tbook で行頭括弧が揃わない](http://tex.stackexchange.com/questions/233736/uplatex-and-line-indentation-tbook)，解答例 [jsarticle を縦書きで使う](https://www.overleaf.com/read/qkvrbgzqrmrv)
- [LaTeX で「部分的な縦書き」](http://qiita.com/zr_tex8r/items/6f0b88c5838c42241457)

### 関連リンク {#h5eda15f}

- [pLaTeX2e 新ドキュメントクラス (CTAN)](http://www.ctan.org/pkg/jsclasses)

#### ChangeLog {#v6b070f7}

- [http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/#new](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/#new)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/platex/jsclasses](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/jsclasses/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/jsclasses/?view=log)
- \[[texlive\] Index of /trunk/Master/texmf-dist/source/platex/jsclasses](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/platex/jsclasses/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/platex/jsclasses/?view=log)

[^1]: 環境によっては texhash コマンドかもしれません．
