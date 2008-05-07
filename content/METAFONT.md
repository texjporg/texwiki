---
title: "METAFONT"
url: "/METAFONT/"
date: 2006-04-03T17:16:36Z
pukiwiki: "METAFONT"
---

# METAFONT

METAFONTは、主に TeX で使用するためのフォントを作成するプログラムです。[TeX](</TeX入門/#nef9fd41>) と同じく Knuth によって作られました。TeX の標準フォントである Computer Modern は、METAFONT プログラム言語で設計されています。現在のバージョン番号は 2.718281 です。

METAFONT 言語で書かれたソースファイルをコンパイルすると、TeX で利用する形式のフォントメトリックファイル (tfm) と、出力装置にあわせたビットマップのグリフファイル (gf) が生成されます。

これら tfm および gf ファイルを、他の形式に変換するためのプログラム (tftopl、gftopk、gftodvi、TeXtrace など) もいろいろあります。

自作のフォントを METAFONT で制作するためにはデザインセンスだけでなく、プログラミングの知識も必要になります。METAFONT を使用すれば、簡単な記号だけでなく、パラメータを調節することにより複数のウェイト (太さや横幅など) に変化するような、高品質のフォントファミリーを作成することもできます。

METAFONTについて勉強したい方は、以下の書籍をご覧下さい。

- Knuth
    [『METAFONTブック』](http://ascii.asciimw.jp/books/books/detail/4-7561-0194-1.shtml)
    鷺谷好輝訳（アスキー，1994年，6932円，ISBN4-7561-0194-1）
    ……METAFONT の原典です。
    原著のソースファイル：[CTAN:systems/knuth/mf/mfbook.tex](https://mirror.ctan.org/systems/knuth/mf/mfbook.tex)
