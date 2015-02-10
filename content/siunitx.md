---
title: "siunitx"
url: "/siunitx/"
date: 2015-02-10T06:37:49Z
pukiwiki: "siunitx"
---

# siunitx

## siunitx {#x11d1f9f}

<!-- ICMJE というページから移転して加筆しました． -->

siunitx とは，SI 単位をサポートするスタイルファイルで，si, SIstyle, siunits
等のパッケージの上位版といえるものです．
[TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) に標準で含まれています．

### SI 単位の正しい表記法 {#ue8fdee5}

siunitx は，単位記号のフルスペルを入力すれば，大文字小文字を間違わずに正しく記号化してくれます（例えば，mHz Mhz mhz MHz を区別してくれます）．

#### siunitx の使用例 {#yed0da9a}

<table>
<tbody>
<tr><td> \SI[inter-unit-product=$\cdot$]{-1.234e3}{N.m} </td><td><img src="http://www2.hyo-med.ac.jp/~tanimura/images/sistyle1.png" alt=""></td></tr>
<tr><td> \ang{32;46;23.373} </td><td><img src="http://www2.hyo-med.ac.jp/~tanimura/images/sistyle2.png" alt=""></td></tr>
<tr><td> \SI{5}{\textit{\micro}s} </td><td><img src="http://www2.hyo-med.ac.jp/~tanimura/images/sistyle3.png" alt=""></td></tr>
<tr><td> \SI{60}{\degreeCelsius} </td><td><img src="http://www2.hyo-med.ac.jp/~tanimura/images/sistyle4.png" alt=""></td></tr>
</tbody>
</table>

## 関連リンク {#b1d93009}

- 数式の前後の四分アキ [forum:913](https://okumuralab.org/tex/mod/forum/discuss.php?d=913)
- [例の和欧文間空白が入らないアレ](http://d.hatena.ne.jp/zrbabbler/20130105/1357384970)
