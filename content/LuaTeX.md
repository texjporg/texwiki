---
title: "LuaTeX"
url: "/LuaTeX/"
date: 2011-11-26T03:42:28Z
pukiwiki: "LuaTeX"
---

# LuaTeX

## [LuaTeX](https://www.luatex.org/) {#af5563d6}

LuaTeX は パワフル・高速・軽量で組み込み可能なスクリプト言語 [Lua](https://www.lua.org/)
が使える TeX です．[pdfTeX](/pdfTeX/) の後継として期待されています。
派生版として [LuajitTeX](/LuajitTeX/) があります．

***

***

### お知らせ {#t3177d69}

#### リリース情報 {#x6fec2ee}

TeX Live 2025 初回リリース版には LuaHBTeX 1.21.0, LuaTeX 1.21.0 が収録されていますが、この版には「[TL2025でSTIX2とNewComputerModernの積分記号が変わった？](https://okumuralab.org/tex/mod/forum/discuss.php?d=3900)」の投稿で示される不具合があります。この不具合を修正した [Revision 74603](https://svn.tug.org/texlive?view=revision&revision=74603) には LuaHBTeX 1.22.0, LuaTeX 1.22.0 が収録されています。

LuaTeX 1.20.0 で luaffi が [AArch64](https://ja.wikipedia.org/wiki/AArch64) に対応しました。--&gt; [Revision 73279](https://svn.tug.org/texlive?revision=73279&view=revision)

TeX Live 2024 には LuaHBTeX 1.18.0, LuaTeX 1.18.0 が収録されています。

TeX Live 2023 初回リリース版には LuaHBTeX 1.16.0, LuaTeX 1.16.0 が収録されています。[Revision 66967](https://svn.tug.org/texlive?view=revision&revision=66967), [Revision 66994](https://svn.tug.org/texlive?view=revision&revision=66994) には LuaHBTeX 1.17.0, LuaTeX 1.17.0 が収録されています。

TeX Live 2022 には LuaHBTeX 1.15.0, LuaTeX 1.15.0 が収録されています。

TeX Live 2021 には LuaHBTeX 1.13.2, LuaTeX 1.13.2 が収録されています。

TeX Live 2020 には LuaHBTeX 1.12.0, LuaTeX 1.12.0 が収録されています。LuaLaTeX は LuaHBTeX ベースになりました。

TeX Live 2019 には LuaTeX 1.10.0 が収録されています。

TeX Live 2018 には LuaTeX 1.07.0 が収録されています。

TeX Live 2017 には LuaTeX 1.0.4 が収録されています。

2016 年に LuaTeX 1.0.0 がリリースされました。

#### 内蔵 Lua 処理系のバージョン {#wb3b0391}

TeX Live 2025 には Lua 5.3.6 が収録されています。

TeX Live 2024 には Lua 5.3.6 が収録されています。

TeX Live 2023 には Lua 5.3.6 が収録されています。

TeX Live 2022 には Lua 5.3.6 が収録されています。

TeX Live 2021 には Lua 5.3.6 が収録されています。

TeX Live 2020 には Lua 5.3.5 が収録されています。

TeX Live 2019 には Lua 5.3.5 が収録されています。

TeX Live 2018 には Lua 処理系のバージョンが異なる2つの LuaTeX バイナリが収録されています。

- luatex, texlua: Lua 5.2.4 を内蔵（デフォルト）
- luatex53, texlua53: Lua 5.3.4 を内蔵

LuaTeX 開発者 [Luigi Scarso のポスト](https://x.com/luigi_scarso/status/1054799795628453889)によれば LuaTeX 1.09.0 が Lua 5.2 をサポートする最後のバージョンになり、その後は Lua 5.3 に完全に移行する模様です。さらに LuaTeX チームには今後 Lua 5.4 に移行していく意思もあるようです。（参考：[NEWS (r6924)](https://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/luatexdir/NEWS?revision=48591&view=markup)）

#### LuaTeX, LuajitTeX と日本語ファイル名 {#r425bd72}

Windows 用 LuaTeX と LuajitTeX も，日本語ファイル名を使用することができます．

#### LuaTeX のプリミティブの変更 {#f5c38821}

TeX Live 2016 は LuaTeX beta-0.95.0，TeX Live 2015 は LuaTeX beta-0.80.0 が収録されていますが，LuaTeX beta-0.80.0 から LuaTeX beta-0.95.0 に至る間に多くの仕様変更がありました。

LuaTeX beta-0.81.0 では多くのプリミティブ名が変更されました。
詳細は [NEWS (r5348)](https://github.com/tex-mirror/luatex/commit/e4e49d9cfbe51e8a2b7b66d6f9f62cfe2bd81036#diff-e7bbc46d2b59f615d21a8349c1184135) を参照してください。

特に LuaTeX beta-0.81.0 で \pdftexversion が未定義になったことで，いくつかのパッケージに影響すると予想されます。
LuaTeX beta-0.79.1 までは \pdftexversion は “200” と定義していましたが，TeX Live 2015 の LuaTeX beta-0.80.0 では \luatexversion と同じ値に定義されていました。

- lualatex で不具合 [forum:1681](https://okumuralab.org/tex/mod/forum/discuss.php?d=1681)
- [LuaTeX の “pdfTeX のバージョン”がアレな件](http://d.hatena.ne.jp/zrbabbler/20150720/1437366487)，[補足](http://d.hatena.ne.jp/zrbabbler/20150722/1437549646)

### LuaTeX, LuaLaTeX で日本語 {#a0eb47cd}

LuaTeX では [LuaTeX-ja](/LuaTeX-ja/) を使って日本語文書の組版が可能です．

LuaLaTeX では [LuaTeX-ja](/LuaTeX-ja/)，[BXjscls](/BXjscls/), [jlreq](/jlreq/) が使用可能です．

### その他パッケージ {#u56aae1f}

- [recursive-input.sty](https://github.com/chemicl-t/recursive-input) フォルダを指定すると、そのフォルダ内を再帰的に探索して全てのファイルを\inputするパッケージ。

### 関連リンク {#cdd9fc14}

- [LuaTeX の検索結果 - マクロツイーター](https://zrbabbler.hatenablog.com/search?q=LuaTeX)
- [LuaLaTeX の検索結果 - マクロツイーター](https://zrbabbler.hatenablog.com/search?q=LuaLaTeX)
- [En toi Pythmeni tes TeXnopoleos［電脳世界の奥底にて］](http://zrbabbler.sp.land.to/)
- [にっき&#9834;: LuaTeXの検索結果](http://abenori.blogspot.com/search?q=LuaTeX&by-date=true)
- [「LuaTeX」の検索結果一覧 - Luoyang Press](http://d.hatena.ne.jp/ratbeta/archive?word=LuaTeX)
- [os.execute() in LuaTeX 0.75.0](https://okumuralab.org/tex/mod/forum/discuss.php?d=955), [Lua: Return values of os.execute()](https://gist.github.com/anonymous/5134368)
- [LuaTeXによるマンデルブロ集合の描画](https://github.com/yoshimuraYuu/myBlog/blob/master/articles/luatex_mand.md)
- [明日できること。カテゴリ (TeX)](http://termoshtt.blog110.fc2.com/blog-category-4.html)
- [LuaTeX - ConTeXt wiki](https://wiki.contextgarden.net/LuaTeX)
- [slnunicode](https://github.com/LuaDist/slnunicode)
- [hyperref, lualatex and unicode bookmarks issue (garbled page numbers in AR for Linux)](http://tex.stackexchange.com/questions/24445/hyperref-lualatex-and-unicode-bookmarks-issue-garbled-page-numbers-in-ar-for-l)
- [Switched to LuaLaTeX](http://the-user.org/post/switched-to-lualatex)
- [How to get \copyright when mixing T1 fonts and fontspec?](http://tex.stackexchange.com/questions/29895/how-to-get-copyright-when-mixing-t1-fonts-and-fontspec)
- [Automatically downloading images to be included](https://groups.google.com/forum/?fromgroups=#!topic/comp.text.tex/_c_kcgQTfaw)
- LuaTeX で MePoTeX マクロを ([qa:56951](https://okumuralab.org/~okumura/texfaq/qa/56951.html), [qa:56952](https://okumuralab.org/~okumura/texfaq/qa/56952.html), [qa:56955](https://okumuralab.org/~okumura/texfaq/qa/56955.html))
- [LuaTeX について | 日本OSS推進フォーラム](http://ossforum.jp/node/1283)
- [LuaLaTeX Lab](https://lualatexlab.blog.fc2.com/)
- [p/upLaTeX から LuaLaTeX へ移行すべき理由と方法](https://www.metaphysica.info/2022/outdated-uplatex/)
- [LuaLaTeXの環境構築をしてLuaLaTeXデビューする方法](https://digital-sp.net/2024/11/05/how-to-lualatex-debut/)

#### LuaTeX 関連サイト {#p8fbba4f}

- [LuaTeX home](https://www.luatex.org/)
- [Main Page - LuaTeXWiki](https://wiki.luatex.org/)
- [lualatex · GitHub](https://github.com/lualatex)
- [My View - MantisBT](https://tracker.luatex.org/my_view_page.php)
- [luatex archives - TeX Users Group](https://tug.org/pipermail/luatex/)
- [lualatex-dev archives - TeX Users Group](https://tug.org/pipermail/lualatex-dev/)

#### License {#u58971dd}

GPLv3, GPLv2

#### ChangeLog <a id="changelog"></a> {#h5bae295}

- [TeXLive / luatex · GitLab](https://gitlab.lisn.upsaclay.fr/texlive/luatex)
    - [コミット](https://gitlab.lisn.upsaclay.fr/texlive/luatex/-/commits/master)
- \[[ViewVC\] Index of: texlive/trunk/Build/source/texk/web2c/luatexdir](https://svn.tug.org/texlive/trunk/Build/source/texk/web2c/luatexdir/)
    - [log](https://svn.tug.org/texlive/trunk/Build/source/texk/web2c/luatexdir/?view=log)
    - [ChangeLog](https://svn.tug.org/texlive/trunk/Build/source/texk/web2c/luatexdir/ChangeLog?view=markup)
    - [NEWS](https://svn.tug.org/texlive/trunk/Build/source/texk/web2c/luatexdir/NEWS?view=markup)

#### 派生版 {#n2ca8cf1}

- [LuajitTeX](/LuajitTeX/)
