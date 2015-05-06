---
title: "Pandoc"
url: "/Pandoc/"
date: 2013-11-29T17:58:50Z
pukiwiki: "Pandoc"
---

# Pandoc

## Pandoc {#j60e5103}

Pandoc はあるマークアップ言語で書かれた文書を別の形式に変換するツールです．
入力に Markdown, reStructuredText, HTML, [LaTeX](/LaTeX/), DocBook など，出力に左記の他プレーンテキスト，OpenDocument, Word docx, PDF などをサポートしています．

***

***

### 公式サイト {#z02a0637}

- [http://pandoc.org/](http://pandoc.org/)
- [https://github.com/jgm/pandoc](https://github.com/jgm/pandoc)

### 注意点 {#hee589a6}

#### PDF への変換で ltjsarticle を使うとエラーが出る {#h2f8de68}

- [pandoc で PDF変換 エラー](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1005)
- [Pandocを使ってMarkdownからPDFを生成する](http://qiita.com/takeh1k0/items/ff84cb85bfffedc75066)

pandoc で documentclass に [LuaTeX-ja](/LuaTeX-ja/) の ltjsarticle を指定して lualatex を実行するとエラーが発生します．

```
$ pandoc hoge.md -o hoge.pdf -V documentclass=ltjsarticle --latex-engine=lualatex
! Extra \else.
\XKV@wh@list ...r \expandafter \XKV@wh@list \else
                                                  \def #3{#6}\expandafter \e...
l.64    }
```

```
pandoc: Error producing PDF from TeX source
```

以下のように ltjsarticle.cls を修正して myltjsarticle.cls を作成します．

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

documentclass に myltjsarticle を指定すればエラーにならずに PDF ファイルが作成できます．

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
- [Markdownで書いたテキストをPDFに変換して納品用ドキュメントを作成する方法](http://www.clear-code.com/blog/2015/4/27.html)
- [pandoc : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/pandoc)
- [アマゾンからの出版メモ](http://reinforce-lab.github.io/blog/2014/06/12/self-publishing-through-amazon/)
    - [PandocをつかったKindle出版のサンプル](https://github.com/reinforce-lab/pandoc_kindle_sample)
- [PandocでMarkdownからPDF化を試してみた](http://betrue12.hateblo.jp/entry/2015/04/10/003830)
- [Arch Linux に Pandoc で PDF 出力できる環境を整えた](http://pocke.hatenablog.com/entry/2014/05/27/221525)
- [texを書かずにtex原稿をつくる](http://d.hatena.ne.jp/at_akada/20140522/1400771773)
- [pandoc から直接 beamer プレゼンテーション](http://kreisel.fam.cx/webmaster/clog/2014-04-27-1.html)
- [pandoc の使い方メモ — 相互参照について](http://pasero.net/~mako/blog/s/577)
- [MarkdownからWordやPDF生成ができるようにする (またはPandoc環境の構築方法)](http://k1low.hatenablog.com/entry/2014/02/16/205839)
- [卒論関連の覚え書き](http://d.hatena.ne.jp/tondol/20140215/1392420965)
- [Pandoc+MarkdownでLaTeXとSphinx(reStructuredText)を操る。](http://nwpct1.hatenablog.com/entry/2014/01/20/203733)
- [markdown->TeXの変換だけで卒論を仕上げるのに便利だったツール10個まとめ](http://mizchi.hatenablog.com/entry/2014/01/20/090957)
- [MarkdownとPandocを用いた簡易Latex環境の構築 ref: http://qiita.com/mountcedar/items/e7603c2eb65661369c3b](https://gist.github.com/mountcedar/7006977)
- [pandocでlatexをpdfに変換](https://gist.github.com/add20/a4ea9b143c41552e72f5)
- [http://blog.fusic.co.jp/archives/3924](http://blog.fusic.co.jp/archives/3924)
- [省力TeX](http://mith009.hatenablog.com/entry/2013/11/18/025450)
- [kramdownに関する覚え書き](http://cup.sakura.ne.jp/kmd_a.htm)
- [md2pdf](https://github.com/vzaccaria/md2pdf)

#### License {#q6e7e4cc}

GPLv3, GPLv2

- [https://github.com/jgm/pandoc/blob/master/COPYING](https://github.com/jgm/pandoc/blob/master/COPYING)
- [https://github.com/jgm/pandoc/blob/master/COPYRIGHT](https://github.com/jgm/pandoc/blob/master/COPYRIGHT)

#### ChangeLog {#d1c7275b}

- [https://github.com/jgm/pandoc/commits/master](https://github.com/jgm/pandoc/commits/master)
