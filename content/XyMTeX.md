---
title: "XyMTeX"
url: "/XyMTeX/"
date: 2004-10-09T06:12:11Z
pukiwiki: "XyMTeX"
---

# XyMTeX

## XyMTeX {#j669bd8c}

XyMTeX は[藤田眞作さん](http://xymtex.com/fujitas/)@[湘南情報数理化学研究所](http://xymtex.com/)による化学構造式を描画するマクロ集です．<br>
TeX Live, W32TeX に含まれています．<br>

- [湘南情報数理化学研究所 xymtex.com](http://xymtex.com/)
    - [XyMTeX 化学構造式描画](http://xymtex.com/fujitas3/xymtex/)
- [http://www.ctan.org/pkg/xymtex](http://www.ctan.org/pkg/xymtex)

簡単な参照ページとして
「[LaTeX で化学構造式 &mdash; XyMTeX の紹介（Internet Archive のウェブアーカイブ）](http://web.archive.org/web/20090224162250/http://www.klavis.info/xym.html)」
および
「[PukiWiki XyMTeX プラグイン（Internet Archive のウェブアーカイブ）](http://web.archive.org/web/20060113004208/http://tec-tech.org/?PukiWiki/Plugin/xymtex.inc.php)」
を挙げておきます。

XyMTeX は改良に改良を重ね，（試して
いませんが）[マイトトキシン (maitotoxin)](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%82%A4%E3%83%88%E3%83%88%E3%82%AD%E3%82%B7%E3%83%B3)

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Maitotoxin.png/654px-Maitotoxin.png" alt="マイトトキシンの構造式" style="display:block;margin-inline:auto;margin-right:auto">

のような複雑な化合物でも TeX やパッケージの仕様などの制限さえなければ
理論的に描画可能なレベルまでになりました。

現時点で描画の難しい構造として，いす型構造式において環の融合や ATOMLIST 指定が
不可であること，任意の平面構造より立体的に突出した構造（楔形のことではない。
これは Version 4.01 で実装済み）を描く際に picture 環境などによる
レイアウト指定が必要になることを挙げます。例えばフグ毒である
次の[テトロドトキシン (tetrodotoxin)](https://ja.wikipedia.org/wiki/%E3%83%86%E3%83%88%E3%83%AD%E3%83%89%E3%83%88%E3%82%AD%E3%82%B7%E3%83%B3)

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tetrodotoxin-2D-skeletal.png/275px-Tetrodotoxin-2D-skeletal.png" alt="テトロドトキシンの構造式" style="display:block;margin-inline:auto;margin-right:auto">

を XyMTeX で描画する際には，おそらく一から picture 環境などで描画する必要が
あります（いす型構造式において ATOMLIST として N を指定しなければならないので
chair 命令が使えない）。これらを描画する際には相変わらず
ChemDraw，ISIS/Draw などの WYSIWYG ソフトが必要になるかもしれません。

## 関連リンク {#d1c64818}

- [MacTeX で XyMTeX](http://www.clas.kitasato-u.ac.jp/~fujiwara/MacTeX/xymtex.html)
