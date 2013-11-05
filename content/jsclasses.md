---
title: "jsclasses"
url: "/jsclasses/"
date: 2013-11-02T18:24:42Z
pukiwiki: "jsclasses"
---

# jsclasses

## jsclasses {#m850c7de}

- [pLaTeX2e 新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/)
- [http://www.ctan.org/pkg/jsclasses](http://www.ctan.org/pkg/jsclasses)

### ChangeLog {#v6b070f7}

- [http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/#new](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/#new)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/platex/jsclasses](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/jsclasses/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/jsclasses/?view=log)
- \[[texlive\] Index of /trunk/Master/texmf-dist/source/platex/jsclasses](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/platex/jsclasses/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/platex/jsclasses/?view=log)

### インストール {#h846e833}

#### TeX Live {#w5dcc154}

TeX Live には jsclasses パッケージが最初からインストールされています．<br>

#### W32TeX {#g87352e2}

W32TeX の
（[uptex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/uptex-w32.tar.xz)）
をインストールすれば新ドキュメントクラスもインストールされます。<br>
手動でインストールする場合は jsclasses パッケージを $TEXMFLOCAL/tex/platex/
（例えば C:\w32tex\share\texmf-local\tex\platex\）
に展開すれば OK です。

もしファイル名のデータベース $TEXMF/ls-R
（例えば C:\w32tex\share\texmf\ls-R）が
存在するのなら，mktexlsr コマンド (または texhash コマンド) でデータベースを更新しないと，
新しくインストールしたファイルが認識されません。<br>
しかしこれは忘れやすいので，
初心者のかたは mktexlsr コマンドを打ち込まないほうがいいでしょう。

W32TeX を使用していて間違って mktexlsr コマンドを打ち込んでしまった場合は deltexlsr コマンドを打ち込んでください。<br>
$TEXMF/ls-R ファイルが削除されます。
