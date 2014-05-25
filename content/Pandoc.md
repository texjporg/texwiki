---
title: "Pandoc"
url: "/Pandoc/"
date: 2013-11-29T17:58:50Z
pukiwiki: "Pandoc"
---

# Pandoc

## Pandoc {#j60e5103}

- [Pandoc](http://johnmacfarlane.net/pandoc/) a universal document converter
- [https://code.google.com/p/pandoc/](https://code.google.com/p/pandoc/)

### 注意点 {#hee589a6}

#### pandoc hoge.md -o hoge.pdf -V documentclass=ltjsarticle --latex-engine=lualatex を実行するとエラーになる → ltjsarticle.cls を修正して myltjsarticle.cls を作成して documentclass に myltjsarticle を指定する {#h2f8de68}

- [pandoc で PDF変換 エラー](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1005)
- [Pandocを使ってMarkdownからPDFを生成する](http://qiita.com/takeh1k0/items/ff84cb85bfffedc75066)

pandoc で documentclass に ltjsarticle を指定して lualatex を実行するとエラーが発生します．<br>

```
$ pandoc hoge.md -o hoge.pdf -V documentclass=ltjsarticle --latex-engine=lualatex
! Extra \else.
\XKV@wh@list ...r \expandafter \XKV@wh@list \else
                                                  \def #3{#6}\expandafter \e...
l.64    }

pandoc: Error producing PDF from TeX source
```

以下のように ltjsarticle.cls を修正して myltjsarticle.cls を作成します．<br>

***

- ltjsarticle.cls.patch

***

```
--- ltjsarticle.cls	2014-05-05 16:18:11 +0900
+++ myltjsarticle.cls	2014-05-25 03:00:43 +0900
@@ -384,12 +384,15 @@
   \belowdisplayskip=\skip4
   \belowdisplayshortskip=\skip6\relax}
 \def\widebaselines{\narrowbaselinesfalse\@currsize\selectfont}
-\renewcommand{\normalsize}{%
-  \ifnarrowbaselines
-    \@setfontsize\normalsize\@xpt\@xiipt
-  \else
-    \@setfontsize\normalsize\@xpt{\n@baseline}%
+\def\ltj@@ifnarrowbaselines{%
+  \ifnarrowbaselines\expandafter\@firstoftwo
+  \else \expandafter\@secondoftwo
   \fi
+}
+\renewcommand{\normalsize}{%
+  \ltj@@ifnarrowbaselines
+    {\@setfontsize\normalsize\@xpt\@xiipt}%
+    {\@setfontsize\normalsize\@xpt{\n@baseline}}%
   \abovedisplayskip 11\p@ \@plus3\p@ \@minus4\p@
   \abovedisplayshortskip \z@ \@plus3\p@
   \belowdisplayskip 9\p@ \@plus3\p@ \@minus4\p@
@@ -403,11 +406,9 @@
 \setlength\Cvs{\baselineskip}
 \setlength\Chs{\wd0}
 \newcommand{\small}{%
-  \ifnarrowbaselines
-    \@setfontsize\small\@ixpt{11}%
-  \else
-    \@setfontsize\small\@ixpt{13}%
-  \fi
+  \ltj@@ifnarrowbaselines
+    {\@setfontsize\small\@ixpt{11}}%
+    {\@setfontsize\small\@ixpt{13}}%
   \abovedisplayskip 9\p@ \@plus3\p@ \@minus4\p@
   \abovedisplayshortskip  \z@ \@plus3\p@
   \belowdisplayskip \abovedisplayskip
@@ -417,11 +418,9 @@
               \parsep \z@
               \itemsep \parsep}}
 \newcommand{\footnotesize}{%
-  \ifnarrowbaselines
-    \@setfontsize\footnotesize\@viiipt{9.5}%
-  \else
-    \@setfontsize\footnotesize\@viiipt{11}%
-  \fi
+  \ltj@@ifnarrowbaselines
+    {\@setfontsize\footnotesize\@viiipt{9.5}}%
+    {\@setfontsize\footnotesize\@viiipt{11}}%
   \abovedisplayskip 6\p@ \@plus2\p@ \@minus3\p@
   \abovedisplayshortskip  \z@ \@plus2\p@
   \belowdisplayskip \abovedisplayskip
```

***

```
$ cp `kpsewhich ltjsarticle.cls` .
$ patch -p0 < ltjsarticle.cls.patch
$ mv ltjsarticle.cls myltjsarticle.cls
$ sudo mktexlsr
```

documentclass に myltjsarticle を指定すればエラーにならずに PDF ファイルが作成できます．<br>

```
$ pandoc hoge.md -o hoge.pdf -V documentclass=myltjsarticle --latex-engine=lualatex
```

### エディタ {#h2a45f83}

- [Emacs](/Emacs/)
    - [Pandoc-mode](http://joostkremers.github.io/pandoc-mode/)
- [Vim](/Vim/)
    - [vim-pandoc](https://github.com/vim-pandoc/vim-pandoc)
- [Atom](/Atom/)
- [Brackets](/Brackets/)

### 関連リンク {#ud9aba13}

- [Pandoc ユーザーズガイド 日本語版](http://sky-y.github.io/site-pandoc-jp/users-guide/)
- [http://qiita.com/tags/pandoc](http://qiita.com/tags/pandoc)
- [pandoc : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/pandoc)
- [pandoc の使い方メモ — 相互参照について](http://pasero.net/~mako/blog/s/577)
- [MarkdownからWordやPDF生成ができるようにする (またはPandoc環境の構築方法)](http://k1low.hatenablog.com/entry/2014/02/16/205839)
- [卒論関連の覚え書き](http://d.hatena.ne.jp/tondol/20140215/1392420965)
- [Pandoc+MarkdownでLaTeXとSphinx(reStructuredText)を操る。](http://nwpct1.hatenablog.com/entry/2014/01/20/203733)
- [MarkdownとPandocを用いた簡易Latex環境の構築 ref: http://qiita.com/mountcedar/items/e7603c2eb65661369c3b](https://gist.github.com/mountcedar/7006977)
- [pandocでlatexをpdfに変換](https://gist.github.com/add20/a4ea9b143c41552e72f5)
- [http://blog.fusic.co.jp/archives/3924](http://blog.fusic.co.jp/archives/3924)
- [省力TeX](http://mith009.hatenablog.com/entry/2013/11/18/025450)
