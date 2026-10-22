---
title: "METAFONT"
url: "/METAFONT/"
date: 2006-04-03T17:16:36Z
pukiwiki: "METAFONT"
---

# METAFONT

## METAFONT {#a97c3921}

- [https://ctan.org/pkg/metafont](https://ctan.org/pkg/metafont)

METAFONTは、主に TeX で使用するためのフォントを作成するプログラムです。
[TeX](/TeX/) と同じく Knuth によって作られました。
TeX の標準フォントである Computer Modern は METAFONT プログラミング言語で設計されています。
現在のバージョン番号は 2.7182818 です。

METAFONT 言語で書かれたソースファイルをコンパイルすると、TeX で利用する形式のフォントメトリックファイル (tfm) と、出力装置にあわせたビットマップのグリフファイル (gf) が生成されます。

これら tfm および gf ファイルを、他の形式に変換するためのプログラム (tftopl、gftopk、gftodvi、TeXtrace など) もいろいろあります。

自作のフォントを METAFONT で制作するためにはデザインセンスだけでなく、プログラミングの知識も必要になります。
METAFONT を使用すれば、簡単な記号だけでなく、パラメータを調節することにより複数のウェイト (太さや横幅など) に変化するような、高品質のフォントファミリーを作成することもできます。

METAFONTについて詳しく知りたい場合は、Knuthによる説明書『The METAFONTbook』(邦訳は『METAFONTブック』ですが絶版です)があります。METAFONT言語の文法仕様は類例のない独特のものなので、この本を読むのがもっとも簡単確実です。邦訳は絶版ですが、大学図書館などには所蔵されているかもしれません。

### 関連リンク {#af77cd68}

- [TeXで外字を使う, JIS 補助漢字 METAFONT など](http://kanji.zinbun.kyoto-u.ac.jp/~yasuoka/program.html) (安岡孝一さん)
- [メタ紋帳プロジェクト](http://tenteba.la.coocan.jp/metamon.htm) と [TeX 関連リンク集](http://tenteba.la.coocan.jp/tex.htm) (てんてばさん)
- [今さら人に聞けないMETAFONT](http://qiita.com/VoD/items/addb623ac0ceea78eb3f)
