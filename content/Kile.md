---
title: "Kile"
url: "/Kile/"
date: 2012-05-20T18:47:25Z
pukiwiki: "Kile"
---

# Kile

## [Kile](https://kile.sourceforge.io/) {#pab65dd4}

***

***

## Kile とは {#v4a214a0}

Kile は LaTeX の統合環境です．

SyncTeX に対応しています．

エディタ部分は [KTextEditor](https://invent.kde.org/frameworks/ktexteditor) を使用しています．

- [Kile - KDE Applications](https://apps.kde.org/kile/)
- [Kile - an Integrated LaTeX Environment](https://kile.sourceforge.io/)

### 動作環境 {#fc95c26d}

Windows, Linux

### License {#bd454552}

[GPLv2](https://github.com/KDE/kile/blob/master/COPYING)

### リリース情報 {#qfb7e12c}

- [https://invent.kde.org/office/kile/-/tags](https://invent.kde.org/office/kile/-/tags)
- [https://github.com/KDE/kile/tags](https://github.com/KDE/kile/tags)

### ChangeLog {#k30d45b0}

- [https://invent.kde.org/office/kile](https://invent.kde.org/office/kile)
    - [https://invent.kde.org/office/kile/-/commits/master](https://invent.kde.org/office/kile/-/commits/master)
- [https://github.com/KDE/kile](https://github.com/KDE/kile)
    - [https://github.com/KDE/kile/commits/master](https://github.com/KDE/kile/commits/master)

## 設定 {#g12179be}

\[設定(<ins>S</ins>)\]-\[Kile を設定(<ins>C</ins>)...\]-\[ツール\]-\[ビルド\]

### QuickBuild {#t46a75f7}

#### LaTeX+DVItoPDF+ViewPDF の場合 {#l170063d}

LaTeX+DVItoPDF+ViewPDF を選択します．<br>

選択:
: LaTeX+DVItoPDF+ViewPDF

#### LaTeX+DVItoPDF+ForwardPDF の場合 {#l39af91a}

PDF ファイルを表示するときに forward search をしたい場合は

\[新規...\]

LaTeX+DVItoPDF+ForwardPDF

\[全般\] タブで

LaTeX<br>
DVItoPDF<br>
ForwardPDF<br>

を設定して LaTeX+DVItoPDF+ForwardPDF を選択します．<br>

選択:
: LaTeX+DVItoPDF+ForwardPDF

### LaTeX {#hec49503}

コマンド(<ins>M</ins>):
: uplatex

オプション:
: -synctex=1 -interaction=nonstopmode '%source'

### BibTeX {#kd1bef77}

コマンド(<ins>M</ins>):
: bibtexu

オプション:
: '%S'

### MakeIndex {#o588ae80}

コマンド(<ins>M</ins>):
: upmendex

オプション:
: '%S.idx'

### DVItoPDF {#kf18eec8}

コマンド(<ins>M</ins>):
: dvipdfmx

オプション:
: '%S.dvi'

### ViewPDF {#fdeebbcf}

#### Okular Unique の場合 {#d5998916}

選択:
: Okular Unique

コマンド(<ins>M</ins>):
: okular

オプション:
: --unique '%target'

#### qpdfview Unique の場合 {#x84dd0b8}

\[新規...\]

qpdfview Unique

選択:
: qpdfview Unique

コマンド(<ins>M</ins>):
: qpdfview

オプション:
: --unique '%target'

## 使い方 {#ub2acf7c}

### QuickBuild {#o3d47735}

メニューの \[ビルド(<ins>U</ins>)\]-\[<ins>Q</ins>uickBuild\] でビルドして PDF ファイルを表示します．

## Okular との連携 {#q0949a00}

### forward search {#ad302b58}

\[設定(<ins>S</ins>)\]-\[Kile を設定(<ins>C</ins>)...\]-\[ツール\]-\[ビルド\]

#### ForwardPDF {#a8c50040}

選択:
: Okular

コマンド(<ins>M</ins>):
: okular

オプション:
: --unique '%absolute_target'

Kile のメニューの \[ビルド(<ins>U</ins>)\]-\[表示(<ins>V</ins>)\]-\[ForwardPDF\] で forward search ができます．

### inverse search {#t261af4f}

Okular のメニューの \[設定(S)\]-\[Okular を設定(O)...\]-\[エディタ\] の項目から Kile を選択します．

エディタ:
: Kile

コマンド:
: kile --line %l

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## qpdfview との連携 {#u024daea}

### forward search {#o5906f94}

***

- kile2qpdfview

***

```
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import re
import subprocess

if __name__ == '__main__':
    m = re.match(r'file:(\S*)#src:(\S*) (\S*)', sys.argv[1])
    if m:
        pdf = m.group(1)
        line = m.group(2)
        tex = m.group(3)
        args = pdf + '#src:' + tex + ':' + line + ':0'
        subprocess.call(['qpdfview', '--unique', args])
```

***

```
$ chmod +x kile2qpdfview
$ sudo cp -p kile2qpdfview /usr/local/bin
```

\[設定(<ins>S</ins>)\]-\[Kile を設定(<ins>C</ins>)...\]-\[ツール\]-\[ビルド\]

#### ForwardPDF {#p9b7fdb1}

\[新規...\] をクリックして qpdfview を入力します．

選択:
: qpdfview

コマンド(<ins>M</ins>):
: kile2qpdfview

オプション:
: '%target'

Kile のメニューの \[ビルド(<ins>U</ins>)\]-\[表示(<ins>V</ins>)\]-\[ForwardPDF\] で forward search ができます．

### inverse search {#i42c49b9}

\[Edit\]-\[Settings...\]-\[Behaviour\]

Source editor:
: kile --line %2 "%1"

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## zathura との連携 {#k6bc7213}

### forward and inverse search {#k321c508}

- [Wikipedia.en:Zathura\_(document_viewer)](https://en.wikipedia.org/wiki/Zathura_%28document_viewer%29)

の Forward/Inverse Search with Kile を参照．

## 関連リンク {#o6aee049}

- [Newest &#39;kile&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/kile)
    - [Configure kile to enable inverse search function](http://tex.stackexchange.com/questions/11528/configure-kile-to-enable-inverse-search-function)
- [LuaTeX-ja に乗り換えようか](https://projectzero.hatenadiary.jp/entry/2019/07/01/162240)
- [app-editors/kile-2.9.91](http://fusion0202.blog.jp/archives/609136.html)
- [Kile | Kubuntuにっき(仮)](http://kubuser.blog.fc2.com/?q=Kile&charset=utf-8)
- [latex | Kubuntuにっき(仮)](http://kubuser.blog.fc2.com/blog-category-2.html)
- [TeX Live 2013 on Gentoo Linux](http://fusion0202.blog.jp/archives/603893.html)
