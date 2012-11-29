---
title: "LuaTeX"
url: "/LuaTeX/"
date: 2011-11-26T03:42:28Z
pukiwiki: "LuaTeX"
---

# LuaTeX

## [LuaTeX](http://www.luatex.org/) {#af5563d6}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## LuaTeX とは {#v17b2316}

LuaTeX に関しては以下のページを参照してください．<br>
LuaTeX では [LuaTeX-ja](/LuaTeX-ja/) を使って日本語文書の組版が可能です．<br>

- [Luatex home page](http://www.luatex.org/)
- [SupelecFoundry > プロジェクト > LuaTeX > Home](http://foundry.supelec.fr/gf/project/luatex/)
    - [Log of /trunk](http://foundry.supelec.fr/gf/project/luatex/scmsvn/?action=browse&path=%2Ftrunk%2F&view=log)
- [My View - MantisBT](http://tracker.luatex.org/my_view_page.php)
- [The luatex Archives](http://tug.org/pipermail/luatex/) (TUG)

### ChangeLog {#h5bae295}

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/luatexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/luatexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/luatexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/luatexdir/ChangeLog?view=markup)

## 不具合 {#v600e2c1}

### bm.sty が使えない → 回避策: amsmath + \pmb{} を使用するか[ixbm.sty](https://gist.github.com/2625027) を使用する → [LuaTeX rev 4411](http://foundry.supelec.fr/gf/project/luatex/scmsvn/?action=browse&path=%2F&view=rev&revision=4411) で修正されました {#o2818a24}

[LuaTeX rev 4411](http://foundry.supelec.fr/gf/project/luatex/scmsvn/?action=browse&path=%2F&view=rev&revision=4411) で修正されました．<br>
LuaTeX, Version beta-0.70.2-2012052222 (TeX Live 2012) では bm.sty がエラーが出ることなく使用できています．<br>

LuaLaTeX の数式モード中で bm.sty を使用しようとするとエラーが出ます。

```
\documentclass{article} 
\usepackage{bm} 
\begin{document} 
$\bm{a}$ 
\end{document}
```

```
! Invalid math code.
\bm@command ->\mathchar 31458401

l.4 $\bm{a}
           $
?
```

これは、アルファベットの太字を \bm{} で出そうとすると、\mathchar に不正な値が渡されるためと思われます。amsmath を読み込んだ上で \pmb{} を用いるか、LuaLaTeX 向けの [ixbm.sty](https://gist.github.com/2625027) を使用すればエラーは回避できます。

- [\mathcode と \omathcode と \Umathcode と](http://d.hatena.ne.jp/zrbabbler/20120509/1336584479)

## 関連リンク {#cdd9fc14}

- \[[LuaTeX\]記事一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=*%5BLuaTeX%5D)
- [「LuaTeX」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=LuaTeX)
- [En toi Pythmeni tes TeXnopoleos［電脳世界の奥底にて］](http://zrbabbler.sp.land.to/)
- [pdffill, luajalayout, luafontcomp, luamirageat etc.](http://www-is.amp.i.kyoto-u.ac.jp/lab/kmaeda/)
    - [biblatex パッケージを使ってみる](http://www-is.amp.i.kyoto-u.ac.jp/lab/kmaeda/biblatex/)
- [「LuaTeX」の検索結果一覧 - にっき♪](http://d.hatena.ne.jp/abenori/archive?word=LuaTeX)
- [機械学習の勉強とか: LuaTeX](http://choge.blogspot.jp/search/label/LuaTeX)
- [「LuaTeX」の検索結果一覧 - Luoyang Press](http://d.hatena.ne.jp/ratbeta/archive?word=LuaTeX)
- [LuaTeX について](http://ossipedia.ipa.go.jp/article/17/)
- [OMakeでlualatexをつかう](http://hideaki-t.blogspot.jp/2012/02/omakelualatex.html)
- [明日できること。カテゴリ (TeX)](http://termoshtt.blog110.fc2.com/blog-category-4.html)
- [Luatexを使ってMoleCoding](http://molecoding.cocolog-nifty.com/blog/2011/10/luatexmolecodin.html)
- [LuaTeX - ConTeXt wiki](http://wiki.contextgarden.net/LuaTeX)
- [slnunicode](http://files.luaforge.net/releases/sln/slnunicode)
- [hyperref, lualatex and unicode bookmarks issue (garbled page numbers in AR for Linux)](http://tex.stackexchange.com/questions/24445/hyperref-lualatex-and-unicode-bookmarks-issue-garbled-page-numbers-in-ar-for-l)
- [Switched to LuaLaTeX](http://the-user.org/post/switched-to-lualatex)
- [How to get \copyright when mixing T1 fonts and fontspec?](http://tex.stackexchange.com/questions/29895/how-to-get-copyright-when-mixing-t1-fonts-and-fontspec)
- [Automatically downloading images to be included](https://groups.google.com/forum/?fromgroups=#!topic/comp.text.tex/_c_kcgQTfaw)
