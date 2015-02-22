---
title: "TeX と化学"
url: "/TeX と化学/"
date: 2014-12-07T11:28:35Z
pukiwiki: "TeX と化学"
---

# TeX と化学

## TeX と化学 {#udade172}

<strong>目次</strong>

### 化学分野における TeX の利用 {#y06bc047}

一般に化学の学術雑誌への投稿には，化学者専用の化学構造描画ツールとして商用の
[ChemDraw](http://www.cambridgesoft.com/Ensemble_for_Chemistry/ChemDraw/)，または条件付きで無償で利用できる

- [ChemSketch](http://www.acdlabs.com/resources/freeware/chemsketch/)
    ：for Windows（要登録：個人または教育用に限り無償）

- [Accelrys Draw](http://accelrys.co.jp/products/informatics/cheminformatics/draw/)
    ：for Windows（要登録：教育用に限り無償）

- [Marvin Sketch](http://chemaxon.jp/wp/product/marvin)
    ：for Windows, Mac, Linux（要登録：スタンドアロンでの利用は無償）

<!-- またはアカデミックユーザーのみ無料で使用可能であり登録する必要もない -->
<!-- [[ISIS/Draw:http://www.chem-station.com/yukitopics/3dmethod2.htm]] // これはたぶん obsolete のはず -->

などのソフトを利用することが化学者の間では常識であります．

欧米および日本において一流の化学の学術雑誌では TeX での原稿を受け付けていない場合が多いという現状を見ますと，数学・物理での状況とは大きく異なっているようです．

実際の化学雑誌の場合ではごく限られた物となりますが，TeX による原稿でも受理可能な雑誌等への投稿の折には以下が参考になるでしょう．

### 化学式と反応式 {#t73b6700}

化合物名を表す場合は数式と異なり，元素名をイタリックでなく立体で示す規則があり，かつ上付き・下付き文字や矢印を使う必要があります．
化学式や反応式の中に構造式を含まない場合には，以下のパッケージで十分です．

- [mhchem](/mhchem/)
    ：化学式や反応式をかくためのパッケージ．上付き・下付きを自動で整形するので，指定は最小限で済む．

- [chemmacros](http://ctan.org/pkg/chemmacros)
    ：mhchem 同様の機能を持つ
    [chemformula](http://www.ctan.org/pkg/chemformula)，立体ギリシャ文字を出力する
    [chemgreek](http://www.ctan.org/pkg/chemgreek)
    等を用いて，より広範囲の整形をサポート

### 化学の構造式 {#c2b9c735}

化学構造式を TeX の文書中に挿入する方法としては，以下のような選択肢が考えられます．
どの方法も一長一短あるので，工夫が必要でしょう．

#### パッケージの利用 {#v18ced72}

- [XyMTeX](/XyMTeX/) ：藤田眞作先生による化学構造描画パッケージ．
- ChemFig ：[TikZ](/TikZ/) ベースの化学構造描画パッケージ．

#### 化学構造描画の専用ツールの利用 {#l7c47a01}

- [ChemDraw](http://www.cambridgesoft.com/Ensemble_for_Chemistry/ChemDraw/)
    などのツールで構造式を描画し，汎用的な画像フォーマット (EPS, PDF, PNG) で出力して
    \includegraphics する

#### 折衷案 （パッケージの利用と描画ソフトの組み合わせ） {#g5085d13}

- 簡単な構造式をマクロで描画し，[mhchem](/mhchem/) パッケージにより整形した反応式中に挿入．
    より複雑な構造式は [TeX2img](/TeX2img/) や [Illustrator](/Illustrator/)，[Inkscape](/Inkscape/) を使って編集して
    \includegraphics する
    - [TeXによる化学組版](http://doratex.hatenablog.jp/entry/20131203/1386068127)
        ： pict2e マクロ + [mhchem](/mhchem/) (+ [TeX2img](/TeX2img/) + [Illustrator](/Illustrator/))

- ChemDraw などの専用ツールで構造式を描画し，[Open Babel](http://openbabel.org/) と
    [Inkscape](/Inkscape/) によって自動的に画像ファイルに変換して取り込む
    - [誰でも簡単！ 化学構造式を LaTeX に取り込むパッケージ](http://acetaminophen.hatenablog.com/entry/2014/12/08/053519)
        ：ChemDraw ファイル等を画像に自動変換する自作パッケージの公開

## 関連リンク {#w1803c82}

- [CTAN: Topic chemistry](http://www.ctan.org/topic/chemistry)
- [Known packages - myChemistry](http://www.mychemistry.eu/known-packages/)
- [LaTeX/Chemical Graphics](http://en.wikibooks.org/wiki/LaTeX/Chemical_Graphics)
- [Writing Chemistry with LaTeX (1/3)](http://www.jon.hk/2010/03/writing-chemistry-with-latex-13/), [(2/3)](http://www.jon.hk/2010/03/writing-chemistry-with-latex-23/), [(3/3)](http://www.jon.hk/2010/03/writing-chemistry-with-latex-33/)
