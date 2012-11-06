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

Kile は TeX の統合環境です．<br>
エディタ部分は [Kate](http://kate-editor.org/) を使用しています．<br>

- [Kile](http://kile.sourceforge.net/)
- [SourceForge.net: kile](http://sourceforge.net/apps/mediawiki/kile/)
    - [Live Preview](http://sourceforge.net/apps/mediawiki/kile/index.php?title=Live_Preview)
- [Kile - Overview - KDE Projects](https://projects.kde.org/projects/extragear/office/kile)

### 動作環境 {#fc95c26d}

KDE

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

### ViewDVI {#jdb2e9e7}

#### pxdvi の場合 {#gf8017cc}

\[New...\] をクリックして pxdvi を入力します．

Select:
: pxdvi

Command:
: pxdvi

Options:
: -watchfile 1 '%target'

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

## Evince との連携 {#f6cbca7e}

### forward search {#ob62a5ad}

fwdevince は [Evince - TeX Wiki#fwdevince](/Evince/#ie18c015) の fwdevince を使用します．

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

\[Settings\]-\[Configure Kile...\]-\[Tools\]-\[Build\]

#### ForwardPDF {#ace63589}

\[New...\] をクリックして Evince を入力します．

Select:
: Evince

Command:
: kile2fwdevince

Options:
: '%target'

Kile のメニューの \[Build\]-\[View\]-\[ForwardPDF\] で forward search ができます．

## PdfViewer との連携 {#p9f6aff5}

### forward search {#iff757fb}

\[Settings\]-\[Configure Kile...\]-\[Tools\]-\[Build\]

#### ForwardPDF {#c86416d5}

\[New...\] をクリックして PdfViewer を入力します．

Select:
: PdfViewer

Command:
: pdfviewer

Options:
: '%target'

Kile のメニューの \[Build\]-\[View\]-\[ForwardPDF\] で forward search ができます．

### inverse search {#t261af4f}

\[Tools\]-\[Settings\]-\[Configure PdfViewer...\]

Editor:
: kile --line %l "%f"

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## pxdvi との連携 (非推奨) {#p727cf9d}

### forward search {#vc1cbc71}

***

- kile2pxdvi

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
        dvi = m.group(1)
        line = m.group(2)
        tex = m.group(3)
        subprocess.call(['pxdvi', '-nofork', '-sourceposition', line + " " + tex, dvi])
```

***

```
$ chmod +x kile2pxdvi
$ sudo cp -p kile2pxdvi /usr/local/bin
```

\[Settings\]-\[Configure Kile...\]-\[Tools\]-\[Build\]

#### ForwardDVI {#w5d81fff}

\[New...\] をクリックして pxdvi を入力します．

Select:
: pxdvi

Command:
: kile2pxdvi

Options:
: '%target'

Kile のメニューの \[Build\]-\[View\]-\[ForwardDVI\] で forward search ができます．

### inverse search {#m4747ece}

\[Settings\]-\[Configure Kile...\]-\[Tools\]-\[Build\]

#### ViewDVI {#pdd1bac9}

Select:
: pxdvi

Command:
: pxdvi

Options:
: -watchfile 1 -editor 'kile %f --line %l' '%target'

## 関連リンク {#o6aee049}

- [Newest &#39;kile&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/kile)
    - [Configure kile to enable inverse search function](http://tex.stackexchange.com/questions/11528/configure-kile-to-enable-inverse-search-function)
- [LinuxでSyncTeXを使う](http://kubuser.blog.fc2.com/blog-entry-26.html)
- [KileをWindowsで使ってみる](http://d.tnose.net/?p=1654)
