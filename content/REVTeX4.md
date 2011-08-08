---
title: "REVTeX4"
url: "/REVTeX4/"
date: 2004-09-22T23:06:56Z
pukiwiki: "REVTeX4"
---

# REVTeX4

## REVTeX 4 {#cfdc01cb}

\[FIXME\] 以下はかなり古い内容です。
もう角藤さんの Windows 版 TeX や新しい teTeX 2
などにはインストール済みですので，改めてインストールする必要はありません。
インストール法は消して，使い方をもっと詳しくすべきですね。

### はじめに {#i3bdc15f}

今までの REVTeX 3 は LaTeX 2.09 ベースだったので、LaTeX2e
ベースの新版が待望されていましたが、2001年8月3日、遅れに遅れて
[REVTeX 4](https://authors.aps.org/revtex4/)
がやっと正式公開されました。

### インストール {#jaaef53a}

UNIX 系の OS では次のようにインストールします。
Windows でも同様です（mv は move または copy とします）。
インストールディレクトリ /usr/local/share/texmf はシステムにより異なります。

```
tar xvzf revtex4.tar.gz
cd revtex4
mkdir /usr/local/share/texmf/tex/latex/revtex4
mv *.cls *.rtx *.sty /usr/local/share/texmf/tex/latex/revtex4
mkdir /usr/local/share/texmf/bibtex/bst/revtex4
mv *.bst /usr/local/share/texmf/bibtex/bst/revtex4
mktexlsr  (または texhash)
```

他に次のものも必要ですのでご確認ください。

- AMS-LaTeX 2.0 以降
- natbib \[1999/05/28 7.0 (PWD)\] 以降

### AMS-LaTeX と natbib のインストール {#f1d3fb76}

AMS-LaTeX と natbib はすでに入っていると思われますが、もしないなら次のようにしてインストールします。

[AMS-LaTeX](http://www.ams.org/tex/amslatex.html)
は次のようにインストールします。
同じファイル名でもバージョンがときどき上がっています。
中心となるファイル amsmath.sty の最新版は \[2000/07/18 v2.13 AMS math features\]
というバージョンです。

```
tar xvzf amsltx2.tgz -C /usr/local/share/texmf
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
mkdir /usr/local/share/texmf/tex/latex/natbib
mv *.sty /usr/local/share/texmf/tex/latex/natbib
mkdir /usr/local/share/texmf/bibtex/bst/natbib
mv *.bst /usr/local/share/texmf/bibtex/bst/natbib
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
