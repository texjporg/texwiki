---
title: "SyncTeX"
url: "/SyncTeX/"
date: 2013-11-02T18:02:49Z
pukiwiki: "SyncTeX"
---

# SyncTeX

## SyncTeX {#i5b9d0ce}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## SyncTeX とは {#i8f28fee}

SyncTeX というのは、PDF viewer と editor の間の synchronization を実現したものです．<br>
SyncTeX をサポートするエンジンは pdftex, luatex, luajittex, xetex, euptex, uptex, eptex, ptex です．<br>
オプションで

- -synctex=1 とすると，zlib で圧縮した SyncTeX 用データを出力します．
- -synctex=-1 のように負の値に設定すると，圧縮しないデータを出力します．

ただし ConTeXt の場合は、mkiv であればソースにおいて \enabledirectives\[system.synctex\] とし，mkii であればソースにおいて \synctex=1 としておくと SyncTeX が有効になります．<br>

- [The official SyncTeX page](http://itexmac.sourceforge.net/SyncTeX.html)
- [http://tex.stackexchange.com/questions/tagged/forward-inverse-search](http://tex.stackexchange.com/questions/tagged/forward-inverse-search)

### ChangeLog {#q711590a}

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/synctexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/synctexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/synctexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/synctexdir/ChangeLog?view=markup)

## SyncTeX 対応 PDF ビューア {#yf457304}

- [TeXworks](/TeXworks/)
- [TeXstudio](/TeXstudio/)
- [SumatraPDF](/SumatraPDF/)
- [Skim](/Skim/)
- [Evince](/Evince/)
- [Okular](/Okular/)
- [zathura](/zathura/)
- [qpdfview](/qpdfview/)
