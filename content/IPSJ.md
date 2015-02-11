---
title: "IPSJ"
url: "/IPSJ/"
date: 2015-02-10T15:13:33Z
pukiwiki: "IPSJ"
---

# IPSJ

## [情報処理学会スタイル](http://www.ipsj.or.jp/journal/submit/style.html) {#v57694e7}

現在の情報処理学会スタイル ipsj.cls は jis フォントメトリックに対応しています． <!-- というわけなので，「ipsj+jisフォントメトリック」という項目名から「IPSJ」に変更しました． -->
ただし，uplatex には対応できていないようです．

- [ipsj.cls で uplatex → NG](http://uep.ipe.media.kyoto-u.ac.jp/ipsj-cls-%E3%81%A7-uplatex-ng/)

% Fix Me! 以下は情報が古そうなので，どなたか修正お願いします！

<!-- ここは ipsj が jis フォントメトリックに対応した時点で不要なので，コメントアウトします． -->
<!-- - --  -->
<!-- \documentclass{ipsjpapers} -->
<!-- の前に -->
<!--  \DeclareFontShape{JY1}{mc}{m}{n}{<-> jis}{} -->
<!--  \DeclareFontShape{JY1}{gt}{m}{n}{<-> jisg}{} -->
<!--  \DeclareFontShape{JT1}{mc}{m}{n}{<-> tmin10}{} -->
<!--  \DeclareFontShape{JT1}{gt}{m}{n}{<-> tgoth10}{} -->
<!-- を入れる． -->
<!-- - --  -->

### 注意 {#q68d87fb}

（情報処理学会論文誌の投稿に関する）『LaTeX による論文作成のガイド』（第 7.1 版）の 4.1 項には

> 例えば，\textheight などのいわゆる style parameter を変更するのは当然やめていただきたい．

とあります．
「文書のデフォルトのフォントに関する設定」もまたそういったパラメータと同じく文書の体裁に影響を与えるものである以上，少なくとも「（情報処理学会論文誌への）投稿用原稿作成時には」上記のようなフォント関連の変更は慎んでください． <!-- たとえ出版時に「閉じ括弧類と句読点が連続する箇所」などの調整が行われるにしても， --> <!-- 「著者自身でのデフォルトのフォントの変更」というのは（ジャーナル類の）出版の一連のワークフローにおいては --> <!-- 著者側の「越権行為」です． -->

新しいスタイルは A4 横置きになったので，

```
\documentclass{ipsjpapers}
```

の後に

```
\AtBeginDvi{\special{papersize=845pt,597pt}}
```

を入れます（または dvipdfmx に -l オプションを付ける）．

### 関連リンク {#xd2bfe1e}

- [情報処理学会のLaTeXファイルをコンパイル](http://d.akiroom.com/2013-02/ipsj-latex-compile/)
- [IPSJのLatexスタイルファイルとlistings.styの共存問題の回避策](https://www.facebook.com/photo.php?pid=114445681&l=421cd76d8f&id=100000489726394)
- [ipsj.cls で uplatex → NG](http://uep.ipe.media.kyoto-u.ac.jp/ipsj-cls-%E3%81%A7-uplatex-ng/)
- [（情報処理学会論文誌の投稿に関する）LaTeX による論文作成のガイド（第6版）](https://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/ipsj-old/sample.pdf)
- [情報処理学会論文誌等を執筆時にdvipdfmxでlandscapeしなくて困った人が読むエントリ](http://written.4403.biz/archives/2009/02/dvipdfmxlandscape.html)
