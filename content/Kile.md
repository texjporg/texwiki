---
title: "Kile"
url: "/Kile/"
date: 2012-05-20T18:47:25Z
pukiwiki: "Kile"
---

# Kile

## [Kile](http://kile.sourceforge.net/) {#pab65dd4}

<img src="http://kile.sourceforge.net/images/kile_big.png" alt="Kile" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Kile とは {#v4a214a0}

Kile は KDE で動作する TeX のための統合環境です．

- [Kile](http://kile.sourceforge.net/)
- [SourceForge.net: kile](http://sourceforge.net/apps/mediawiki/kile/)
    - [Live Preview](http://sourceforge.net/apps/mediawiki/kile/index.php?title=Live_Preview)
- [Kile - Overview - KDE Projects](https://projects.kde.org/projects/extragear/office/kile)

## 設定 {#g12179be}

\[Settings\]-\[Configure Kile...\]-\[Tools\]-\[Build\]

### QuickBuild {#t46a75f7}

Select:
: LaTeX+DVItoPDF+ViewPDF

### LaTeX {#hec49503}

#### platex の場合 {#vab528b1}

Command:
: platex

Options:
: -synctex=1 -interaction=nonstopmode '%source'

#### uplatex の場合 {#w257ee86}

Command:
: uplatex

Options:
: -synctex=1 -interaction=nonstopmode '%source'

### BibTeX {#kd1bef77}

#### pbibtex の場合 {#j092a932}

Command:
: pbibtex

Options:
: '%S'

#### upbibtex の場合 {#febb1ff7}

Command:
: upbibtex

Options:
: '%S'

### MakeIndex {#o588ae80}

Command:
: mendex

Options:
: '%S.idx'

### DVItoPDF {#kf18eec8}

Command:
: dvipdfmx

Options:
: '%S.dvi'

### ViewPDF {#fdeebbcf}

#### Okular Unique の場合 {#d5998916}

Select:
: Okular Unique

Command:
: okular

Options:
: --unique '%target'

#### Evince の場合 {#c83cd000}

Select:
: Evince

Command:
: evince

Options:
: '%target'

## 使い方 {#ub2acf7c}

### QuickBuild {#o3d47735}

メニューの \[Build\]-\[QuickBuild\] でビルドして PDF ファイルを表示します．

## Okular との連携 {#q0949a00}

### forward search {#ad302b58}

\[Settings\]-\[Configure Kile...\]-\[Tools\]-\[Build\]

#### ForwardPDF {#a8c50040}

Select:
: Okular

Command:
: okular

Options:
: --unique '%absolute_target'

Kile のメニューの \[Build\]-\[View\]-\[ForwardPDF\] で forward search ができます．

### inverse search {#t261af4f}

Okular のメニューの \[Settings\]-\[Configure Okular...\]-\[Editor\] の項目から Kile を選択します．

Editor:
: Kile

Command:
: kile --line %l

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## 関連リンク {#o6aee049}

- [KileをWindowsで使ってみる](http://d.tnose.net/?p=1654)
