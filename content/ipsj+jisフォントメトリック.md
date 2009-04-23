---
title: "ipsj+jisフォントメトリック"
url: "/ipsj+jisフォントメトリック/"
date: 2009-04-18T23:35:18Z
pukiwiki: "ipsj+jisフォントメトリック"
---

# ipsj+jisフォントメトリック

## 情報処理学会スタイルでjisフォントメトリックを使うには {#v57694e7}

```
\documentclass{ipsjpapers}
```

の前に

```
\DeclareFontShape{JY1}{mc}{m}{n}{<-> jis}{}
\DeclareFontShape{JY1}{gt}{m}{n}{<-> jisg}{}
\DeclareFontShape{JT1}{mc}{m}{n}{<-> tmin10}{}
\DeclareFontShape{JT1}{gt}{m}{n}{<-> tgoth10}{}
```

を入れる。

> 【注意】（情報処理学会論文誌の投稿に関する）『LaTeX による論文作成のガイド』（第 7.1 版）の 4.1 項には

> 例えば，\textheight などのいわゆる style parameter を変更するのは当然やめていただきたい．

> とあります．
> 「文書のデフォルトのフォントに関する設定」もまたそういったパラメータと同じく文書の体裁に影響を与えるものである以上，少なくとも「（情報処理学会論文誌への）投稿用原稿作成時には」上記のようなフォント関連の変更は慎んでください． <!-- たとえ出版時に「閉じ括弧類と句読点が連続する箇所」などの調整が行われるにしても， --> <!-- 「著者自身でのデフォルトのフォントの変更」というのは（ジャーナル類の）出版の一連のワークフローにおいては --> <!-- 著者側の「越権行為」です． -->

新しいスタイルはA4横置きになったので，

```
\documentclass{ipsjpapers}
```

の後に

```
\AtBeginDvi{\special{papersize=845pt,597pt}}
```

を入れる（または dvipdfmx に -l オプションを付ける）。
