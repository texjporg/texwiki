---
title: "TeX Gyre"
url: "/TeX Gyre/"
date: 2014-01-16T05:52:45Z
pukiwiki: "TeX Gyre"
---

# TeX Gyre

## TeX Gyre {#v39cefcd}

TeX Gyre フォントは，Times や Helvetica などの
Adobe 基本 35 書体に対応する，高品質でオープンなフォントです．PostScript Type 1 形式と
OpenType 形式で配布されています．

- [The TeX Gyre (TG) Collection of Fonts &mdash; GUST](http://www.gust.org.pl/projects/e-foundry/tex-gyre/)
- [http://www.ctan.org/pkg/tex-gyre](http://www.ctan.org/pkg/tex-gyre)

### 使い方 {#f7c4f384}

- [「TeX Gyre」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=TeX%20Gyre)
- [XeLaTeX：欧文フォントについての補足 \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/xelatex1.html)
- [TeX GyreフォントとOTFの共存](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=902)
- [欧文フォントにフリーで高品質なTeX Gyreフォントを使おう](http://myfuturesightforpast.blogspot.jp/2013/12/tex-gyre.html)

### インストール {#k53b3194}

#### Mac OS X {#pbf60234}

MacPorts を利用してインストールできます。

TeX Gyre フォントは texlive-fonts-recommended という Port に含まれています。

```
$ sudo port install texlive-fonts-recommended -doc
```

ドキュメントも一緒にインストールす場合には，-doc を外します。

#### Linux {#g56a043a}

Debian や Ubuntu のリポジトリから TeX Gyre フォントをインストールするには，fonts-texgyre
パッケージをインストールします。
古いバージョンの Debian や Ubuntu では tex-gyre という名前になっていることもあります。

```
$ sudo apt-get install fonts-texgyre
```
