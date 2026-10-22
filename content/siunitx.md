---
title: "siunitx"
url: "/siunitx/"
date: 2015-02-10T06:37:49Z
pukiwiki: "siunitx"
---

# siunitx

## [siunitx](https://ctan.org/pkg/siunitx) {#x11d1f9f}

<!-- ICMJE というページから移転して加筆しました． (2015-02-11 アセトアミノフェン) -->

siunitx とは，SI 単位をサポートするスタイルファイルで，si, SIstyle, siunits
等のパッケージの上位版といえるものです．
[TeX Live](</TeX Live/>) に標準で含まれています．

### SI 単位の正しい表記法 {#ue8fdee5}

SI 単位 (The International System of Units) の表記法の主な規則を挙げておきます．

- 物理量はイタリック（斜体），単位はローマン（立体）で書く．
- 数値のあとにスペースを入れて単位をつける．

詳細は
[SI Brochure \[9th edition, 2019\]](https://www.bipm.org/en/publications/si-brochure/)
や，その[日本語版及び関連資料](https://unit.aist.go.jp/nmij/public/report/SI_9th/index.html)を参照してください．

siunitx は，単位記号のフルスペルを入力すれば，大文字小文字を間違わずに正しく記号化してくれます（例えば，mHz Mhz mhz MHz を区別してくれます）．
流儀によっていくつかの表記法がある場合にも対応しています．

#### siunitx の使用例 {#yed0da9a}

<table>
<tbody>
<tr><td> \SI[inter-unit-product=\ensuremath{\cdot}]{-1.234e3}{N.m} </td><td><img src="http://r03.nurse.medic.mie-u.ac.jp/images/sistyle1.png" alt=""></td></tr>
<tr><td> \ang{32;46;23.373} </td><td><img src="http://r03.nurse.medic.mie-u.ac.jp/images/sistyle2.png" alt=""></td></tr>
<tr><td> \SI{5}{\micro s} </td><td><img src="http://r03.nurse.medic.mie-u.ac.jp/images/sistyle3.png" alt=""></td></tr>
<tr><td> \SI{60}{\degreeCelsius} </td><td><img src="http://r03.nurse.medic.mie-u.ac.jp/images/sistyle4.png" alt=""></td></tr>
</tbody>
</table>

<!-- % 上の3つめについては，画像では「マイクロ」がイタリックになっていますが，単位記号なので立体にする必要がありますね．画像を差し替えなければ． -->
<!-- ご指摘ありがとうございます。サーバに置いていた画像を差し替えました（2015年3月6日、谷村） -->
<!-- / 更新していただいた画像を確認できました．ありがとうございます．（14:58 アセトアミノフェン） -->

なお，siunitx パッケージは expl3 パッケージに依存します．
pLaTeX / upLaTeX で expl3 がサポートされたのは
[qa:55490](https://okumuralab.org/~okumura/texfaq/qa/55490.html)（→ [qa:55523](https://okumuralab.org/~okumura/texfaq/qa/55523.html) でバグ修正）以降ですので，それ以前では利用できないことにご注意ください．

### 関連リンク {#b1d93009}

- [物理化学で用いられる量・単位・記号](https://unit.aist.go.jp/nmij/public/report/translation/IUPAC/)（計量標準総合センター）
- 数式の前後の四分アキ [forum:913](https://okumuralab.org/tex/mod/forum/discuss.php?d=913)
- 角度記号の出力法 [forum:1518](https://okumuralab.org/tex/mod/forum/discuss.php?d=1518)
- [例の和欧文間空白が入らないアレ](http://d.hatena.ne.jp/zrbabbler/20130105/1357384970)
