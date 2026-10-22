---
title: "REVTeX"
url: "/REVTeX/"
date: 2013-01-23T00:39:31Z
pukiwiki: "REVTeX"
---

# REVTeX

## [REVTeX](https://journals.aps.org/revtex) {#cfdc01cb}

\[FIXME\] 以下はかなり古い内容です。
TeX Live にはインストール済みですので，改めてインストールする必要はありません。
使い方をもっと詳しくすべきですね。

- [REVTeX Home Page](https://journals.aps.org/revtex)

### リリース情報 {#i3bdc15f}

2020-10-05 REVTeX 4.2e

### インストール {#jaaef53a}

TeX Live には既にインストールされています．

参考

- [UbuntuにLatex+Revtexをインストール](http://y-m-sakurai800.hatenadiary.jp/entry/2015/09/21/172017)
- [latex: revtex4-1 スタイルのインストール (MacOS X)](http://qiita.com/ryokbys/items/206e5a9bdfa5f174edb9)

### AMS-LaTeX と natbib のインストール {#f1d3fb76}

TeX Live には既にインストールされています．

REVTeX の使用には次のパッケージも必要です。

- AMS-LaTeX 2.0 以降
- natbib \[1999/05/28 7.0 (PWD)\] 以降

### 実行 {#f6f956b2}

revtex4 を展開したディレクトリの中に sample というディレクトリがありますので、
その中に入ってサンプル apssamp.tex を組版してみましょう。

要は latex apssamp と bibtex apssamp を交互に数回繰り返せばいいわけです。
もうちょっと詳しく言えば、

```
latex apssamp
```

と打ち込んで

```
LaTeX Warning: Label(s) may have changed. Rerun to get cross-references right .
```

と言われれば、再度

```
latex apssamp
```

と打ち込まなければなりませんし、

```
Package natbib Warning: Citation(s) may have changed.
(natbib)                Rerun to get citations correct.
```

と言われれば再度

```
bibtex apssamp
```

と打ち込みます。
何も言われなくなったら完成です。
