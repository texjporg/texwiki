---
title: "OCHEM"
url: "/OCHEM/"
date: 2004-10-11T13:36:41Z
pukiwiki: "OCHEM"
---

# OCHEM

化学構造式をLaTeXで表現するには、XymTeXが有名ですが、OCHEMというパッケージもあります。

OCHEMは、LaTeXのソース中に書いた構造式を、Perlスクリプトを使ってPostScriptに変換します。そのため、XymTeXよりも複雑な構造式を描くことができます。具体的には、立体構造を表す楔と点線、反応機構で電子の流れを表す矢印も描けます。複雑なヘテロ環を簡単に描くためのマクロも用意されています。

作者のサイトは、[http://www.2k-software.de/ingo/index.html](http://www.2k-software.de/ingo/index.html) です。トップページはドイツ語ですが、OCHEMのページは英語となっており、マニュアルも英語で提供されています。

問題としては、dvipsを使ってPostscriptに変換することを前提としているのか、dvioutやxdviでうまくプレビューできなかったり、dvipdfm(x)が使えないことです(私の技術不足かもしれませんが)。
