---
title: "Kile"
url: "/Kile/"
date: 2012-05-20T18:47:25Z
pukiwiki: "Kile"
---

# Kile

## [Kile](https://kile.sourceforge.io/) {#pab65dd4}

2018-05-11 に KDE Frameworks 5 に対応した Kile 3.0 beta 2 がリリースされています。

***

***

## Kile とは {#v4a214a0}

Kile は LaTeX の統合環境です．

SyncTeX に対応しています．

エディタ部分は [KTextEditor](https://api.kde.org/frameworks/ktexteditor/html/) を使用しています．

- [Kile - an Integrated LaTeX Environment](https://kile.sourceforge.io/)

### 動作環境 {#fc95c26d}

Windows, Linux

### License {#bd454552}

[GPLv2](https://cgit.kde.org/kile.git/tree/COPYING)

### リリース情報 {#qfb7e12c}

[News](https://kile.sourceforge.io/news.php)

### ChangeLog {#k30d45b0}

- [https://cgit.kde.org/kile.git/](https://cgit.kde.org/kile.git/)
    - [https://cgit.kde.org/kile.git/log/](https://cgit.kde.org/kile.git/log/)
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
: upbibtex

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

#### Evince の場合 {#c83cd000}

選択:
: Evince

コマンド(<ins>M</ins>):
: evince

オプション:
: '%target'

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

## Evince との連携 {#f6cbca7e}

### forward search {#ob62a5ad}

fwdevince は Evince/fwdevince の fwdevince を使用します．

***

- kile2fwdevince

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
        subprocess.call(['fwdevince', pdf, line, tex])
```

***

```
$ chmod +x kile2fwdevince
$ sudo cp -p kile2fwdevince /usr/local/bin
```

\[設定(<ins>S</ins>)\]-\[Kile を設定(<ins>C</ins>)...\]-\[ツール\]-\[ビルド\]

#### ForwardPDF {#ace63589}

\[新規...\] をクリックして Evince を入力します．

選択:
: Evince

コマンド(<ins>M</ins>):
: kile2fwdevince

オプション:
: '%target'

Kile のメニューの \[ビルド(<ins>U</ins>)\]-\[表示(<ins>V</ins>)\]-\[ForwardPDF\] で forward search ができます．

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

## 関連リンク {#o6aee049}

- [Newest &#39;kile&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/kile)
    - [Configure kile to enable inverse search function](http://tex.stackexchange.com/questions/11528/configure-kile-to-enable-inverse-search-function)
- [app-editors/kile-2.9.91](https://blogs.yahoo.co.jp/igproj_fusion/20944032.html)
- [Kile | Kubuntuにっき(仮)](http://kubuser.blog.fc2.com/?q=Kile&charset=utf-8)
- [latex | Kubuntuにっき(仮)](http://kubuser.blog.fc2.com/blog-category-2.html)
- [TeX Live 2013 on Gentoo Linux](http://blogs.yahoo.co.jp/igproj_fusion/17319986.html)
