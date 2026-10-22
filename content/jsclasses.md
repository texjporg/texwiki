---
title: "jsclasses"
url: "/jsclasses/"
date: 2013-11-02T18:24:42Z
pukiwiki: "jsclasses"
---

# jsclasses

## [jsclasses](https://github.com/texjporg/jsclasses) {#m850c7de}

jsclasses は Japanese TeX Development Community による upLaTeX, pLaTeX 用ドキュメントクラスです．
従来の jarticle や jbook といったドキュメントクラスは
JIS フォントメトリックに従っていませんでしたが，今では日本語文書の行組版方法に即した
jsclasses が標準になっています．

派生版として，pLaTeX2e 依存部分を取り除いて
uplatex, platex 以外のエンジンでも利用可能にした [BXjscls](/BXjscls/) があります．

***

***

### インストール {#h846e833}

[TeX Live](</TeX Live/>) には jsclasses パッケージが最初からインストールされています．

### 使い方 {#q5891f40}

[LaTeX入門](</LaTeX入門/>) を参照．

### jsclasses による縦組み {#i93cafcb}

古い jclasses には tarticle, tbook などといった縦組み用文書クラスがありますが，これらには問題点があります。
jsclasses には標準で縦組み対応のクラスファイルがありませんが，工夫次第で縦組みも可能なようです。 <!-- 開発者も手が回らないようです。どなたか開発してみませんか？ --> <!-- https://x.com/h_okumura/status/591454252431642625 -->

% \[TODO\] ほかの例も集めましょう。

- [upLaTeX + Source Han Sans（源ノ角ゴシック）による縦書き実験](http://doratex.hatenablog.jp/entry/20140803/1407072636)，[ソース例](https://gist.github.com/doraTeX/63e6b3e8637fc8e9bdc4)
- 質問：[tarticle, tbook で行頭括弧が揃わない](http://tex.stackexchange.com/questions/233736/uplatex-and-line-indentation-tbook)，回答例 [jsarticle を縦書きで使う](https://www.overleaf.com/read/qkvrbgzqrmrv)
- [LaTeX で「部分的な縦書き」](http://qiita.com/zr_tex8r/items/6f0b88c5838c42241457)
- [行頭で括弧が揃わないって](http://d.hatena.ne.jp/zrbabbler/20120514/1336952639)，[行頭で括弧が揃うようにする](http://d.hatena.ne.jp/zrbabbler/20120524/1337880639)，[行頭括弧を揃えるパッケージ（bxjaprnind パッケージ）(1)](http://d.hatena.ne.jp/zrbabbler/20120525/1337966128)，[(2)](http://d.hatena.ne.jp/zrbabbler/20120526)

### 関連リンク {#h5eda15f}

#### 開発版リポジトリ {#tb311a71}

- [https://github.com/texjporg/jsclasses](https://github.com/texjporg/jsclasses)

#### ChangeLog {#v6b070f7}

- [https://github.com/texjporg/jsclasses/commits/master](https://github.com/texjporg/jsclasses/commits/master)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/platex/jsclasses](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/jsclasses/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/jsclasses/?view=log)
- \[[texlive\] Index of /trunk/Master/texmf-dist/source/platex/jsclasses](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/platex/jsclasses/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/platex/jsclasses/?view=log)

#### CTAN 配布サイト {#q7ee37eb}

- [https://ctan.org/pkg/jsclasses](https://ctan.org/pkg/jsclasses)

#### pLaTeX2e 新ドキュメントクラス {#k48ec8db}

- [pLaTeX2e 新ドキュメントクラス](https://web.archive.org/web/20230119032705/https://oku.edu.mie-u.ac.jp/~okumura/jsclasses/)
