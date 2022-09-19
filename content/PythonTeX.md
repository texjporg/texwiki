---
title: "PythonTeX"
url: "/PythonTeX/"
date: 2013-11-01T17:31:54Z
pukiwiki: "PythonTeX"
---

# PythonTeX

## PythonTeX {#fef32cd2}

PythonTeX は，LaTeX ドキュメントの中に埋め込んだ [Python](/Python/) コードを実行して，その結果を元の場所に出力するためのパッケージです．
Python 以外に [Ruby](/Ruby/), Julia, Octave, Sage, Bash, Rust, R, Perl, Raku, JavaScript もサポートしています．

- [https://github.com/gpoore/pythontex](https://github.com/gpoore/pythontex)
- [https://ctan.org/pkg/pythontex](https://ctan.org/pkg/pythontex)

***

***

### インストール {#o64ddf5b}

[TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) には含まれています．

PythonTeX の利用には，パッケージ自体の他に [Python](/Python/) のインタプリタと [Pygments](http://pygments.org/) という Python モジュールが必要になります．
Pygments は pip を使ってインストールできます．

Python 3 を使用している場合は

```
pip3 install pygments
```

Python 2  を使用している場合は

```
pip2 install pygments
```

でインストールできます．

### 使い方 {#oa863e50}

例として，次を pow.tex として保存してみましょう．

```
\documentclass{article}
\usepackage{pythontex}
\newcommand{\pow}[2]{\py{#1**#2}}
\begin{document}
$2^{10}=\pow{2}{10}$.
\end{document}
```

これを pdflatex で処理します（platex でも大丈夫です）．

```
$ pdflatex pow
...
No file pythontex-files-pow/pow.pytxmcr.
Run PythonTeX to create it.
```

```
Package PythonTeX Warning: Missing autoprint content on input line 5.
...
```

このようなログが出て，pow.pytxcode という中間ファイルが生成されます．
これを pythontex で処理すれば，Python コードの実行結果が含まれた pythontex-files-pow/pow.pytxmcr というファイルが生成されます．
さらにもう一度 pdflatex を実行すれば，2の10乗の値が正しく埋め込まれます．

```
$ pythontex pow
This is PythonTeX 0.14

--------------------------------------------------
PythonTeX:  pow - 0 error(s), 0 warning(s)

$ pdflatex pow
...
```

まとめると，PythonTeX では latex → pythontex → latex の順でコマンドを実行する必要があります．

### 注意点 {#k9bf9ea1}

pythontex を実行したときに

```
Traceback (most recent call last):
  File "c:/w32tex/share/texmf-dist/scripts/pythontex/pythontex.py", line 55, in
<module>
    import pythontex3 as pythontex
  File "c:\w32tex\share\texmf-dist\scripts\pythontex\pythontex3.py", line 61, in
 <module>
    from pygments.styles import get_all_styles
ImportError: No module named 'pygments'
```

のように ImportError: No module named 'pygments' のエラーが発生する場合は pygments がインストールされていません．[インストール](/PythonTeX/#o64ddf5b)を参照して下さい．

### 関連リンク {#e0f26668}

- [「PythonTeX」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=PythonTeX)
- [PythonTeX : はむ吉(のんびり)の雑記帳](http://blog.livedoor.jp/hamu_nbr/tag/PythonTeX)
    - [PythonTeXを試してみた：Pythonコードの出力結果をLaTeX文書に埋め込む](http://blog.livedoor.jp/hamu_nbr/archives/39582714.html)
- [3 次元極座標のラプラシアンをPythonTeXで計算してみた](http://nsplat.wordpress.com/2013/10/04/3-%E6%AC%A1%E5%85%83%E6%A5%B5%E5%BA%A7%E6%A8%99%E3%81%AE%E3%83%A9%E3%83%97%E3%83%A9%E3%82%B7%E3%82%A2%E3%83%B3%E3%82%92pythontex%E3%81%A7%E8%A8%88%E7%AE%97%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F/)
- [TeXLive2013とPythonTeXを入れた](http://nsplat.wordpress.com/2013/10/04/texlive2013%E3%81%A8pythontex%E3%82%92%E5%85%A5%E3%82%8C%E3%81%9F/)
- [&quot;Python&quot; - 記事一覧 - 何かを書き留める何か](http://xaro.hatenablog.jp/archive/category/Python)
    - [http://xaro.hatenablog.jp/search?q=PythonTeX](http://xaro.hatenablog.jp/search?q=PythonTeX)
- [TeXでruby](https://okumuralab.org/tex/mod/forum/discuss.php?d=1185)
