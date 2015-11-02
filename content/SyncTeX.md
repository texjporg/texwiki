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

- [The official SyncTeX page](http://itexmac.sourceforge.net/SyncTeX.html)

***

***

### 使い方 {#la8fbb40}

タイプセット時に -synctex オプションをつけると，SyncTeX 用のデータが出力されます．

- -synctex=1 とすると，zlib で圧縮した SyncTeX 用データ (.synctex.gz) を出力します．
- -synctex=-1 のように負の値に設定すると，圧縮しないデータ (.synctex) を出力します．

ただし [ConTeXt](/ConTeXt/) の場合は，mkiv であればソースにおいて \enabledirectives\[system.synctex\] とし，mkii であればソースにおいて \synctex=1 としておくと SyncTeX が有効になります．

例えば，platex の場合は次のようにすれば foo.synctex.gz が出力されます．

```
$ platex -synctex=1 foo.tex
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
- [Evince](/Evince/)
- [Okular](/Okular/)
- [zathura](/zathura/)
- [qpdfview](/qpdfview/)

### 関連リンク {#b9d9b106}

- [秀丸と SumatraPDF で SyncTeX](http://www.muskmelon.jp/?p=1024)
- [Windows 7 で W32TeX を導入して日本語 SyncTeX を試してみる](https://skalldan.wordpress.com/2011/11/11/windows-7-%E3%81%A7-w32tex-%E3%82%92%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%A6%E6%97%A5%E6%9C%AC%E8%AA%9E-synctex-%E3%82%92%E8%A9%A6%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B/)
- [LinuxでSyncTeXを使う](http://kubuser.blog.fc2.com/blog-entry-26.html)
- [TeXWorksでSyncTeXが使えないとき，まず確認すべき1つのこと](http://motosonomoto.hatenablog.com/entry/20110623/1308850895)

#### ChangeLog {#q711590a}

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/synctexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/synctexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/synctexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/synctexdir/ChangeLog?view=markup)
