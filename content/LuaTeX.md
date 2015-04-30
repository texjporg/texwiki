---
title: "LuaTeX"
url: "/LuaTeX/"
date: 2011-11-26T03:42:28Z
pukiwiki: "LuaTeX"
---

# LuaTeX

## [LuaTeX](http://www.luatex.org/) {#af5563d6}

LuaTeX は パワフル・高速・軽量で組み込み可能なスクリプト言語 [Lua](http://www.lua.org/)
が使える TeX です．派生版として LuaJITTeX があります．

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/LuaTeX_logo.svg/200px-LuaTeX_logo.svg.png" alt="LuaTeX" width="200" height="172" style="float:right">

***

***

### LuaTeX, LuaLaTeX で日本語 {#a0eb47cd}

LuaTeX, LuaLaTeX では [LuaTeX-ja](/LuaTeX-ja/) を使って日本語文書の組版が可能です．

LuaLaTeX では [BXjscls](/BXjscls/) が使用可能です．

### その他パッケージ {#u56aae1f}

- [enumerator.sty](https://github.com/chemicl-t/enumerator) simple package for LuaLaTeX to enumerate files recursively.

### お知らせ {#t3177d69}

#### W32TeX における LuaTeX, LuaJITTEX と日本語ファイル名 {#r425bd72}

[W32TeX](/W32TeX/) における Windows 用 LuaTeX と LuaJITTEX は，最初のオプション，つまり C 言語の言葉で argv\[1\] が -cmdx あるいは --cmdx である場合に限り，日本語ファイル名を使用することができます．その他の場合には日本語ファイル名は使用できません．-cmdx あるいは --cmdx オプションは argv\[1\] でないところに記述しても害はありませんが，何の効果も無く，単に無視されます．なお，この機能は TeX Live 2015 の Win32 版にも持たせる予定です．(2015/01/26 --Akira Kakuto)

### 不具合 {#v600e2c1}

- [http://tracker.luatex.org/view_all_bug_page.php](http://tracker.luatex.org/view_all_bug_page.php)

<!-- **bm.sty が使えない → 回避策: amsmath + \pmb{} を使用するか[[ixbm.sty:https://gist.github.com/2625027]] を使用する → [[LuaTeX rev 4411:https://foundry.supelec.fr/scm/viewvc.php?view=rev&root=luatex&revision=4411]] で修正されました [#o2818a24] -->
<!--  -->
<!-- [[LuaTeX rev 4411:https://foundry.supelec.fr/scm/viewvc.php?view=rev&root=luatex&revision=4411]] で修正されました．~ -->
<!-- LuaTeX, Version beta-0.70.2-2012052222 (TeX Live 2012) では bm.sty がエラーが出ることなく使用できています．~ -->
<!--  -->
<!-- LuaLaTeX の数式モード中で bm.sty を使用しようとするとエラーが出ます。 -->
<!--  -->
<!-- \documentclass{article}  -->
<!-- \usepackage{bm}  -->
<!-- \begin{document}  -->
<!-- $\bm{a}$  -->
<!-- \end{document} -->
<!--  -->
<!-- ! Invalid math code. -->
<!-- \bm@command ->\mathchar 31458401 -->
<!--  -->
<!-- l.4 $\bm{a} -->
<!--            $ -->
<!-- ? -->
<!--  -->
<!-- これは、アルファベットの太字を \bm{} で出そうとすると、\mathchar に不正な値が渡されるためと思われます。amsmath を読み込んだ上で \pmb{} を用いるか、LuaLaTeX 向けの [[ixbm.sty:https://gist.github.com/2625027]] を使用すればエラーは回避できます。 -->
<!--  -->
<!-- -[[\mathcode と \omathcode と \Umathcode と:http://d.hatena.ne.jp/zrbabbler/20120509/1336584479]] -->

### 関連リンク {#cdd9fc14}

- \[[LuaTeX\]記事一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=*%5BLuaTeX%5D)
- [「LuaTeX」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=LuaTeX)
- [En toi Pythmeni tes TeXnopoleos［電脳世界の奥底にて］](http://zrbabbler.sp.land.to/)
- [pdffill, luajalayout, luafontcomp, luamirageat etc.](http://www-is.amp.i.kyoto-u.ac.jp/lab/kmaeda/)
    - [biblatex パッケージを使ってみる](http://www-is.amp.i.kyoto-u.ac.jp/lab/kmaeda/biblatex/)
- [「LuaTeX」の検索結果一覧 - にっき♪](http://d.hatena.ne.jp/abenori/archive?word=LuaTeX)
- [「LuaTeX」の検索結果一覧 - Luoyang Press](http://d.hatena.ne.jp/ratbeta/archive?word=LuaTeX)
- [os.execute() in LuaTeX 0.75.0](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=955), [Lua: Return values of os.execute()](https://gist.github.com/anonymous/5134368)
- [LuaTeXによるマンデルブロ集合の描画](https://github.com/yoshimuraYuu/myBlog/blob/master/articles/luatex_mand.md)
- [OMakeでlualatexをつかう](http://hideaki-t.blogspot.jp/2012/02/omakelualatex.html)
- [明日できること。カテゴリ (TeX)](http://termoshtt.blog110.fc2.com/blog-category-4.html)
- [Luatexを使ってMoleCoding](http://molecoding.cocolog-nifty.com/blog/2011/10/luatexmolecodin.html)
- [LuaTeX - ConTeXt wiki](http://wiki.contextgarden.net/LuaTeX)
- [slnunicode](https://github.com/LuaDist/slnunicode)
- [hyperref, lualatex and unicode bookmarks issue (garbled page numbers in AR for Linux)](http://tex.stackexchange.com/questions/24445/hyperref-lualatex-and-unicode-bookmarks-issue-garbled-page-numbers-in-ar-for-l)
- [Switched to LuaLaTeX](http://the-user.org/post/switched-to-lualatex)
- [How to get \copyright when mixing T1 fonts and fontspec?](http://tex.stackexchange.com/questions/29895/how-to-get-copyright-when-mixing-t1-fonts-and-fontspec)
- [Automatically downloading images to be included](https://groups.google.com/forum/?fromgroups=#!topic/comp.text.tex/_c_kcgQTfaw)
- LuaTeX で MePoTeX マクロを ([qa:56951](https://okumuralab.org/~okumura/texfaq/qa/56951.html))
- [最近的LuaTeX变动](http://bbs.ctex.org/forum.php?mod=viewthread&tid=74466)
- [LuaTeX について | 日本OSS推進フォーラム](http://ossforum.jp/node/1283)
- [Lua 入門（北川さん）](https://sites.google.com/site/keisansugaku/home/lua-intro)

#### LuaTeX 関連サイト {#p8fbba4f}

- [Luatex home page](http://www.luatex.org/)
- [Main Page - LuaTeXWiki](http://wiki.luatex.org/)
- [FusionForge: LuaTeX: Project Home](https://foundry.supelec.fr/projects/luatex/)
- [lualatex · GitHub](https://github.com/lualatex)
- [My View - MantisBT](http://tracker.luatex.org/my_view_page.php)
- [The luatex Archives](http://tug.org/pipermail/luatex/) (TUG)
- [The dev-luatex Archives](http://www.ntg.nl/pipermail/dev-luatex/)

#### License {#u58971dd}

[GPLv3, GPLv2](https://foundry.supelec.fr/scm/viewvc.php/trunk/COPYING?view=markup&root=luatex)

#### ChangeLog {#h5bae295}

- [FusionForge: LuaTeX: SCM Repository](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=luatex)
    - [log](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=luatex&view=log)
- \[[texlive\] Index of /trunk/Build/source/texk/web2c/luatexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/luatexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/luatexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/luatexdir/ChangeLog?view=markup)
    - [NEWS](http://tug.org/svn/texlive/trunk/Build/source/texk/web2c/luatexdir/NEWS?view=markup)
