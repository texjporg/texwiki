---
title: "METAFONT"
url: "/METAFONT/"
date: 2006-04-03T17:16:36Z
pukiwiki: "METAFONT"
---

# METAFONT

## METAFONT {#a97c3921}

- [http://www.ctan.org/pkg/metafont](http://www.ctan.org/pkg/metafont)

METAFONTは、主に TeX で使用するためのフォントを作成するプログラムです。<br>
[TeX](</TeX入門/#nef9fd41>) と同じく Knuth によって作られました。<br>
TeX の標準フォントである Computer Modern は、METAFONT プログラム言語で設計されています。<br>
現在のバージョン番号は 2.718281 です。<br>

METAFONT 言語で書かれたソースファイルをコンパイルすると、TeX で利用する形式のフォントメトリックファイル (tfm) と、出力装置にあわせたビットマップのグリフファイル (gf) が生成されます。

これら tfm および gf ファイルを、他の形式に変換するためのプログラム (tftopl、gftopk、gftodvi、TeXtrace など) もいろいろあります。

自作のフォントを METAFONT で制作するためにはデザインセンスだけでなく、プログラミングの知識も必要になります。<br>
METAFONT を使用すれば、簡単な記号だけでなく、パラメータを調節することにより複数のウェイト (太さや横幅など) に変化するような、高品質のフォントファミリーを作成することもできます。<br>

METAFONTについて勉強したい方は、以下の書籍をご覧下さい。

- 【絶版】Knuth
    [『METAFONTブック』](http://index.ascii.jp/10836/)
    鷺谷好輝訳（アスキー，1994年，6932円，[ISBN4-7561-0194-1](http://ja.wikipedia.org/wiki/Special:Booksources/4-7561-0194-1)）
    ……METAFONT の原典です。
    原著のソースファイル：[CTAN:systems/knuth/dist/mf/mfbook.tex](https://mirror.ctan.org/systems/knuth/dist/mf/mfbook.tex)

### 関連リンク {#af77cd68}

- [TeXで外字を使う, JIS 補助漢字 METAFONT など](http://kanji.zinbun.kyoto-u.ac.jp/~yasuoka/program.html) (安岡孝一さん)
- [メタ紋帳プロジェクト](http://homepage3.nifty.com/tenteba/metamon.htm) と [TeX 関連リンク集](http://homepage3.nifty.com/tenteba/tex.htm) (てんてばさん)
