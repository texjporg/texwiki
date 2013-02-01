---
title: "REVTeX"
url: "/REVTeX/"
date: 2013-01-23T00:39:31Z
pukiwiki: "REVTeX"
---

# REVTeX

## [REVTeX](http://publish.aps.org/revtex/) {#cfdc01cb}

\[FIXME\] 以下はかなり古い内容です。
もう角藤さんの W32TeX や新しい TeX Live
などにはインストール済みですので，改めてインストールする必要はありません。
インストール法は消して，使い方をもっと詳しくすべきですね。

- [REVTeX Home Page](http://publish.aps.org/revtex/)

### リリース情報 {#i3bdc15f}

2010-08-11 REVTeX 4.1

### インストール {#jaaef53a}

W32TeX, TeX Live には既にインストールされています．<br>

UNIX 系の OS で手動でインストールする場合は次のようにします。
Windows でも同様です（mv は move または copy とします）。
インストールディレクトリ /usr/local/texlive/2012/texmf-dist はシステムにより異なります。

```
unzip revtex4.zip
cd revtex4
mkdir -p /usr/local/texlive/2012/texmf-dist/tex/latex/revtex4
mv *.cls *.rtx *.sty /usr/local/texlive/2012/texmf-dist/tex/latex/revtex4
mkdir -p /usr/local/texlive/2012/texmf-dist/bibtex/bst/revtex4
mv *.bst /usr/local/texlive/2012/texmf-dist/bibtex/bst/revtex4
mktexlsr  (または texhash)
```

他に次のものも必要ですのでご確認ください。

- AMS-LaTeX 2.0 以降
- natbib \[1999/05/28 7.0 (PWD)\] 以降

参考

- [VineLinux6にrevtex4-1を入れる](http://m.ils.uec.ac.jp/memo/)

### AMS-LaTeX と natbib のインストール {#f1d3fb76}

AMS-LaTeX と natbib はすでに入っていると思われますが、もしないなら次のようにしてインストールします。

[AMS-LaTeX](http://www.ams.org/tex/amslatex.html)
は次のようにインストールします。
同じファイル名でもバージョンがときどき上がっています。
中心となるファイル amsmath.sty の最新版は \[2000/07/18 v2.13 AMS math features\]
というバージョンです。

```
tar xvf amsltx2.tgz -C /usr/local/texlive/2012/texmf-dist
mktexlsr  (または texhash)
```

natbib は
[CTAN:/macros/latex/contrib/natbib/](https://mirror.ctan.org//macros/latex/contrib/natbib/)
にあります。
最新版は \[2000/07/24 7.0a (PWD)\] です。
ディレクトリごと持ってきて、その中で次のようにします。

```
latex natbib.ins
latex bibentry.ins
mkdir -p /usr/local/texlive/2012/texmf-dist/tex/latex/natbib
mv *.sty /usr/local/texlive/2012/texmf-dist/tex/latex/natbib
mkdir -p /usr/local/texlive/2012/texmf-dist/bibtex/bst/natbib
mv *.bst /usr/local/texlive/2012/texmf-dist/bibtex/bst/natbib
mktexlsr  (または texhash)
```

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
