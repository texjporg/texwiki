---
title: "OCHEM"
url: "/OCHEM/"
date: 2004-10-11T13:36:41Z
pukiwiki: "OCHEM"
---

# OCHEM

化学構造式を LaTeX で表現するには [XyMTeX](/XyMTeX/) がありますが、OCHEM というパッケージも
存在します。

OCHEM は LaTeX のソース中に書いた構造式を、Perl スクリプトを使って PostScript に
変換します。そのため XyMTeX よりも複雑な構造式を比較的短いコードで描くことができます。具体的には、立体構造を表す楔や点線、反応機構で電子の流れを表す矢印が描けます。また、複数の構造式をうまく配置するための方法も用意されています。複雑なヘテロ環を簡単に描くためのマクロもあり、自作も容易です。作成した構造式は LaTeX 文書中に埋め込むほか、単体の EPS ファイルに変換させることもできます。

作者のサイトは、[http://www.2k-software.de/ingo/index.html](http://www.2k-software.de/ingo/index.html) です。トップページはドイツ語ですが OCHEM のページは英語となっており、マニュアルも英語で提供されています。マニュアル中のサンプルを見るだけでも面白いと思います。

問題としては、dvips を使って Postscript に変換することを前提としているのか、dviout や xdvi でうまくプレビューできなかったり、dvipdfm(x) が使えないことです (私の技術不足かもしれませんが)。
