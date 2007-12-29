---
title: "XyMTeX"
url: "/XyMTeX/"
date: 2004-10-09T06:12:11Z
pukiwiki: "XyMTeX"
---

# XyMTeX

## XyMTeX {#j669bd8c}

一般に化学の学術雑誌への投稿には，化学者専用の化学構造描画パッケージとして
[ChemDraw](http://www.chem-station.com/yukitopics/chemdraw.htm)，
またはアカデミックユーザーのみ無料で使用可能であり登録する必要もない
[ISIS/Draw](http://www.chem-station.com/yukitopics/3dmethod2.htm)
などのソフトを利用することが化学者の間では常識であります。

欧米および日本において一流の化学の学術雑誌では TeX での原稿を受け付けて
いない現状を見ますと，数学・物理での状況とは大きく異なっているようです。

実際に化学雑誌の場合では
ごく限られた物となりますが，TeX による原稿でも受理可能な雑誌等への投稿の折
には[藤田眞作さん](http://xymtex.com/fujitas/)@[湘南情報数理化学研究所](http://xymtex.com/)の
[XyMTeX （キュムテフ）](http://xymtex.com/fujitas3/xymtex/)が
参考になることでしょう。

なお，簡単な参照ページとして
「[LaTeX で化学構造式 &mdash; XyMTeX の紹介](http://www.klavis.info/xym.html)」
および
「[PukiWiki XyMTeX プラグイン（Internet Archive のウェブアーカイブ）](http://web.archive.org/web/20060113004208/http://tec-tech.org/?PukiWiki/Plugin/xymtex.inc.php)」
を挙げておきます。

XyMTeX は改良に改良を重ね，（試して
いませんが）マイトトキシン (maitotoxin)

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Maitotoxin.png/654px-Maitotoxin.png" alt="マイトトキシンの構造式" style="display:block;margin-inline:auto;margin-right:auto">

のような複雑な化合物でも TeX やパッケージの仕様などの制限さえなければ
理論的に描画可能なレベルまでになりました。

現時点で描画の難しい構造として，いす型構造式において環の融合や ATOMLIST 指定が
不可であること，任意の平面構造より立体的に突出した構造（楔形のことではない。
これは Version 4.01 で実装済み）を描く際に picture 環境などによる
レイアウト指定が必要になることを挙げます。例えばフグ毒である
次のテトロドトキシン (tetrodotoxin)

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tetrodotoxin-2D-skeletal.png/275px-Tetrodotoxin-2D-skeletal.png" alt="テトロドトキシンの構造式" style="display:block;margin-inline:auto;margin-right:auto">

を XyMTeX で描画する際には，おそらく一から picture 環境などで描画する必要が
あります（いす型構造式において ATOMLIST として N を指定しなければならないので
chair 命令が使えない）。これらを描画する際には相変わらず
ChemDraw，ISIS/Draw などの WYSIWYG ソフトが必要になるかもしれません。
