---
title: "XyMTeX"
url: "/XyMTeX/"
date: 2004-10-09T06:12:11Z
pukiwiki: "XyMTeX"
---

# XyMTeX

一般に化学の学術雑誌への投稿には、化学者専用の化学構造描画パッケージとして
[ChemDraw](http://software.univcoop.or.jp/products/chemoffice/chemdraw.html)
または、アカデミックユーザーのみ無料で使用可能であり登録する必要もない
[ISIS/Draw](http://www.chem-station.com/soft/Isisdraw.htm)
などのソフトを利用することが化学者の場合には常識であります。

欧米および日本において一流の化学の学術雑誌では TeX での原稿を受け付けて
いない現状を見ますと、数学・物理での状況とは大きく異なっているようです。

実際に化学雑誌の場合では極限られた物となりますが TeX による原稿でも受理可能な
雑誌等への投稿の折には、藤田さん（京都工繊大・工芸学部）の
[XyM（キュム）TeX](http://imt.chem.kit.ac.jp/fujita/fujitas3/xymtex/index.html)
が参考になることでしょう。

なお、簡単な参照ページとして
[LaTeX で化学構造式（XyMTeX の紹介）](http://www.klavis.info/xym.html)
および
[PukiWiki XyMTeX プラグイン](http://tec-tech.org/index.php?PukiWiki%2FPlugin%2Fxymtex.inc.php)
を挙げて置きます。

XyMTeXは改良に改良を重ね、（試していませんが）[マイトトキシン](http://en.wikipedia.org/wiki/Image:Mitotoxin.jpg)のような複雑な化合物でもTeXやパッケージの仕様などの制限さえなければ理論的に描画可能なレベルまでになりました。

現時点で描画の難しい構造として、いす型構造式において、環の融合やATOMLIST指定が不可であること、任意の平面構造より立体的に突出した構造（楔形のことではない。これは4.01で実装済み）を描く際にpicture環境などによるレイアウト指定が必要になることを挙げます。たとえば次のフグ毒テトロドトキシン

<img src="http://upload.wikimedia.org/wikipedia/en/2/2f/Tetrodotoxin.png" alt="テトロドトキシンの構造式">

をXyMTeXで描画する際には、おそらく一からpicture環境などで描画する必要があります。（いす型構造式においてATOMLISTとしてNを指定しなければならないのでchair命令が使えない。）
これらを描画する際には相変わらずChemDraw, ISIS/DrawなどのWYSIWYGソフトが必要になるかもしれません。
