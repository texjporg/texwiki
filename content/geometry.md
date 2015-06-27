---
title: "geometry"
url: "/geometry/"
date: 2015-06-27T01:45:40Z
pukiwiki: "geometry"
---

# geometry

## geometry {#x589db6b}

geometry は，ページのレイアウトを柔軟に変更することができるパッケージです。
梅木さんによって作られました。

- [https://www.ctan.org/pkg/geometry](https://www.ctan.org/pkg/geometry)

TeX Live, W32TeX に含まれています。

***

***

### レイアウト（特に余白）について {#yf5cd2c8}

そもそも，ページレイアウトを変えたい理由のほとんどは「余白が広すぎるように感じる」ことでしょう。

しばしば，LaTeX 標準の article.cls，report.cls，book.cls（日本語なら jarticle.cls，jreport.cls，jbook.cls）の余白が広いという主張をみかけます。
しかし，実際は「余白が広い」のではなく，「用紙が大きい」というのが正しい理解です。
これらのクラスファイルは，米国で標準的なレターサイズ文書を前提に作られており，それをそのまま A4 用紙に印刷するので結果的に余白が大きく見えるのです。

レイアウトを自分でいじる場合に避けるべきことを挙げておきます：

- やってはいけないこと
    - \oddsidemargin などの調整によるレイアウト変更
- 絶対にやってはいけないこと
    - \hoffset，\voffset をいじること
- 参考：[使ってはいけない LaTeX のコマンド・パッケージ・作法](http://ichiro-maruta.blogspot.jp/2013/03/latex.html)の「8. ページレイアウトの変更」

一つの対処法が，この geometry パッケージを利用することです。

### 使い方 {#c2c67492}

- [geometry.sty LaTeX パッケージ](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/geometry.html)
- [LaTeX メモ ― geometry パッケージによるページレイアウトの設定](http://dayinthelife.at.webry.info/201401/article_2.html)
- [geometryパッケージ 再訪](http://konoyonohana.blog.fc2.com/blog-entry-119.html)

### geometry パッケージの縦組み対応 {#j41bdb1d}

geometry パッケージは，長らく（そして現在も）縦組みに対応していませんでした。

- geometry.sty を縦書きで [forum:1116](https://okumuralab.org/tex/mod/forum/discuss.php?d=1116)

そこで，geometry パッケージを無理矢理縦組クラスでも使えるようにする lltjp-geometry.sty が開発されました。
もともとは [LuaTeX-ja](/LuaTeX-ja/) プロジェクトにおける縦組の実装で作られたものですが，単体で (u)pLaTeX でも使えます。
LuaTeX-ja 20150420.0 リリースにより，これも TeX Live, W32TeX に含まれています。

- 縦組クラスでの overfull 警告 [forum:1442](https://okumuralab.org/tex/mod/forum/discuss.php?d=1442)
- LuaTeX-ja 20150420.0 [qa:57629](https://okumuralab.org/~okumura/texfaq/qa/57629.html)

### TeX Q &amp; A，TeX Forum より {#kf77807a}

- 文字数と行数指定で余白も指定したい ([forum:1206](https://okumuralab.org/tex/mod/forum/discuss.php?d=1206))
- 上下左右の余白を25mmに設定したい ([forum:1228](https://okumuralab.org/tex/mod/forum/discuss.php?d=1228))
- B4判を横置きに使用 ([forum:652](https://okumuralab.org/tex/mod/forum/discuss.php?d=652))
- Xelatexで既存のPDFにしおり追加-用紙サイズについて ([forum:604](https://okumuralab.org/tex/mod/forum/discuss.php?d=604))
- jsクラスの用紙サイズについて ([forum:507](https://okumuralab.org/tex/mod/forum/discuss.php?d=507))
- 用紙サイズ, A3, 横 ([forum:470](https://okumuralab.org/tex/mod/forum/discuss.php?d=470))
- a3サイズの用紙を使うことはできますか？ ([forum:260](https://okumuralab.org/tex/mod/forum/discuss.php?d=260))
- dvipdfmx での用紙サイズの拡大/縮小 ([qa:52373](https://okumuralab.org/~okumura/texfaq/qa/52373.html), [qa:52374](https://okumuralab.org/~okumura/texfaq/qa/52374.html), [qa:52376](https://okumuralab.org/~okumura/texfaq/qa/52376.html), [qa:52381](https://okumuralab.org/~okumura/texfaq/qa/52381.html), [qa:52383](https://okumuralab.org/~okumura/texfaq/qa/52383.html), [qa:52387](https://okumuralab.org/~okumura/texfaq/qa/52387.html), [qa:52388](https://okumuralab.org/~okumura/texfaq/qa/52388.html), [qa:52389](https://okumuralab.org/~okumura/texfaq/qa/52389.html), [qa:52439](https://okumuralab.org/~okumura/texfaq/qa/52439.html), [qa:52440](https://okumuralab.org/~okumura/texfaq/qa/52440.html), [qa:52441](https://okumuralab.org/~okumura/texfaq/qa/52441.html), [qa:52442](https://okumuralab.org/~okumura/texfaq/qa/52442.html), [qa:52455](https://okumuralab.org/~okumura/texfaq/qa/52455.html), [qa:52456](https://okumuralab.org/~okumura/texfaq/qa/52456.html), [qa:52457](https://okumuralab.org/~okumura/texfaq/qa/52457.html), [qa:52458](https://okumuralab.org/~okumura/texfaq/qa/52458.html), [qa:52463](https://okumuralab.org/~okumura/texfaq/qa/52463.html), [qa:52464](https://okumuralab.org/~okumura/texfaq/qa/52464.html), [qa:52473](https://okumuralab.org/~okumura/texfaq/qa/52473.html))
- jsarticle の papersize オプションと geometry.sty ([qa:33951](https://okumuralab.org/~okumura/texfaq/qa/33951.html), [qa:33957](https://okumuralab.org/~okumura/texfaq/qa/33957.html), [qa:33958](https://okumuralab.org/~okumura/texfaq/qa/33958.html), [qa:33962](https://okumuralab.org/~okumura/texfaq/qa/33962.html))

% とりあえず関係ありそうなものを羅列。古いものもとりあえず拾ってきたので，今の状況に即していなければ補足しつつ分類。
