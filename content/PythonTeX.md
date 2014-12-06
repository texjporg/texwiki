---
title: "PythonTeX"
url: "/PythonTeX/"
date: 2013-11-01T17:31:54Z
pukiwiki: "PythonTeX"
---

# PythonTeX

## PythonTeX {#fef32cd2}

PythonTeX は TeX Live, W32TeX に含まれています．<br>
PythonTeX の実行には [Pygments](http://pygments.org/) が必要です．<br>
PythonTeX は [Python](/Python/) 以外に Julia や [Ruby](/Ruby/) もサポートしています．<br>

- [https://github.com/gpoore/pythontex](https://github.com/gpoore/pythontex)
- [http://www.ctan.org/pkg/pythontex](http://www.ctan.org/pkg/pythontex)

### 注意点 {#k9bf9ea1}

コマンドラインから PythonTeX を実行したときに

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

のように ImportError: No module named 'pygments' のエラーが発生する場合は pygments をインストールする必要があります．<br>
Python 3.4 以降では pip を使ってインストールできます．<br>

```
pip install pygments
```

### 関連リンク {#e0f26668}

- [「PythonTeX」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=PythonTeX)
- [PythonTeX : はむ吉(のんびり)の雑記帳](http://blog.livedoor.jp/hamu_nbr/tag/PythonTeX)
    - [PythonTeXを試してみた：Pythonコードの出力結果をLaTeX文書に埋め込む](http://blog.livedoor.jp/hamu_nbr/archives/39582714.html)
- [3 次元極座標のラプラシアンをPythonTeXで計算してみた](http://nsplat.wordpress.com/2013/10/04/3-%E6%AC%A1%E5%85%83%E6%A5%B5%E5%BA%A7%E6%A8%99%E3%81%AE%E3%83%A9%E3%83%97%E3%83%A9%E3%82%B7%E3%82%A2%E3%83%B3%E3%82%92pythontex%E3%81%A7%E8%A8%88%E7%AE%97%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F/)
- [TeXLive2013とPythonTeXを入れた](http://nsplat.wordpress.com/2013/10/04/texlive2013%E3%81%A8pythontex%E3%82%92%E5%85%A5%E3%82%8C%E3%81%9F/)
- [&quot;Python&quot; - 記事一覧 - 何かを書き留める何か](http://xaro.hatenablog.jp/archive/category/Python)
    - [http://xaro.hatenablog.jp/search?q=PythonTeX](http://xaro.hatenablog.jp/search?q=PythonTeX)
- [TeXでruby](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1185)
