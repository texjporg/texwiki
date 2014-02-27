---
title: "Kile"
url: "/Kile/"
date: 2012-05-20T18:47:25Z
pukiwiki: "Kile"
---

# Kile

## [Kile](http://kile.sourceforge.net/) {#pab65dd4}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kile.svg/240px-Kile.svg.png" alt="Kile" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Kile とは {#v4a214a0}

Kile は LaTeX の統合環境です．<br>
SyncTeX に対応しています．<br>
エディタ部分は [Kate](http://kate-editor.org/) を使用しています．<br>

- [Kile](http://kile.sourceforge.net/)
- [SourceForge.net: kile](http://sourceforge.net/apps/mediawiki/kile/)
    - [Live Preview](http://sourceforge.net/apps/mediawiki/kile/index.php?title=Live_Preview)

### 動作環境 {#fc95c26d}

KDE

### License {#bd454552}

[GPLv2](https://projects.kde.org/projects/extragear/office/kile/repository/revisions/master/entry/COPYING)

### リリース情報 {#qfb7e12c}

[News](http://kile.sourceforge.net/news.php)

### ChangeLog {#k30d45b0}

- [Kile - Overview - KDE Projects](https://projects.kde.org/projects/extragear/office/kile)
    - [Activity](https://projects.kde.org/projects/extragear/office/kile/activity)
- [Repository](https://projects.kde.org/projects/extragear/office/kile/repository)
    - [ChangeLog](https://projects.kde.org/projects/extragear/office/kile/repository/revisions/master/entry/ChangeLog)
- [http://quickgit.kde.org/?p=kile.git](http://quickgit.kde.org/?p=kile.git)

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
: makeindex

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
- [TeX Live 2013 on Gentoo Linux](http://blogs.yahoo.co.jp/igproj_fusion/17319986.html)
- [Kile使ってみたよ](http://ameblo.jp/a-gateau-chocolate/entry-11565297948.html)
- [latex | Kubuntuにっき(仮)](http://kubuser.blog.fc2.com/blog-category-2.html)
- [KileをWindowsで使ってみる](http://d.tnose.net/?p=1654)
