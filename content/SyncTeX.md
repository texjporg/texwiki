---
title: "SyncTeX"
url: "/SyncTeX/"
date: 2013-11-02T18:02:49Z
pukiwiki: "SyncTeX"
---

# SyncTeX

## SyncTeX {#i5b9d0ce}

SyncTeX は TeX ソースを開いたエディタと PDF ビューワとの間での相互ジャンプを実現する仕組みです．
PDF プレビューが主流になった現在では，かつて DVI プレビューがよく用いられていた頃の [src-specials](</special 命令/#src-specials>) を置き換えるものとしてよく使われています．

- [https://github.com/jlaurens/synctex](https://github.com/jlaurens/synctex)

***

***

### 使い方 {#la8fbb40}

タイプセット時に -synctex オプションをつけると，SyncTeX 用のデータが出力されます．

- -synctex=1 とすると，zlib で圧縮した SyncTeX 用データ (.synctex.gz) を出力します．
- -synctex=-1 のように負の値に設定すると，圧縮しないデータ (.synctex) を出力します．

ただし [ConTeXt](/ConTeXt/) の場合は，mkiv であればソースにおいて \enabledirectives\[system.synctex\] とし，mkii であればソースにおいて \synctex=1 としておくと SyncTeX が有効になります．

例えば，lualatex の場合は次のようにすれば foo.synctex.gz が出力されます．

```
lualatex -synctex=1 foo.tex
```

SyncTeX 用のデータが出力できたら，エディタとビューワのそれぞれに適切な設定をすると，相互ジャンプが可能になります．

% 要追記

- [http://tex.stackexchange.com/questions/tagged/forward-inverse-search](http://tex.stackexchange.com/questions/tagged/forward-inverse-search)
- [http://mactex-wiki.tug.org/wiki/index.php/SyncTeX](http://mactex-wiki.tug.org/wiki/index.php/SyncTeX)

### SyncTeX 対応 PDF ビューア {#yf457304}

- [TeXworks](/TeXworks/)
- [TeXstudio](/TeXstudio/)
- [TeXShop](/TeXShop/)
- [SumatraPDF](/SumatraPDF/)
- [Skim](/Skim/)
- [Okular](/Okular/)
- [Evince/Atril/Xreader](/Evince/)
- [zathura](/zathura/)
- [qpdfview](/qpdfview/)
- [Sioyek](/Sioyek/)
- [llpp](/llpp/)

### 関連リンク {#b9d9b106}

- [LyX wiki | LyX / SyncTeX](https://wiki.lyx.org/LyX/SyncTeX)
- [MyTeXpert:SyncTeX](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?SyncTeX)
- [SyncTeX対応のPDFビューワ。](https://chiyosuke.blogspot.com/2018/05/synctexpdf.html)

#### ChangeLog {#q711590a}

- [https://github.com/jlaurens/synctex](https://github.com/jlaurens/synctex)
    - [https://github.com/jlaurens/synctex/commits/master](https://github.com/jlaurens/synctex/commits/master)
- \[[texlive\] Index of /trunk/Build/source/texk/web2c/synctexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/synctexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/synctexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/synctexdir/ChangeLog?view=markup)
