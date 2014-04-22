---
title: "dvipdfmx"
url: "/dvipdfmx/"
date: 2013-06-25T04:47:13Z
bookCollapseSection: true
pukiwiki: "dvipdfmx"
---

# dvipdfmx

## [dvipdfmx/xdvipdfmx](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/) {#x9826408}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## dvipdfmx/xdvipdfmx とは {#ia9746cb}

dvipdfmx は DVI ファイルを PDF ファイルに変換するソフトウェアです．<br>
xdvipdfmx は X&#x44;V ファイルを PDF ファイルに変換するソフトウェアです．<br>
[XeTeX, XeLaTeX](/XeTeX/) を実行すると内部で xdvipdfmx が自動的に実行されます．<br>

### License {#w1524716}

[GPLv3, GPLv2](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/COPYING?view=markup)<br>

### ChangeLog {#he60a3d0}

- \[[texlive\] Index of /trunk/Build/source/texk/dvipdfm-x](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/ChangeLog?view=markup)
- \[[texlive\] Contents of /trunk/Master/texmf-dist/tex/latex/dvipdfmx-def/dvipdfmx.def](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/dvipdfmx-def/dvipdfmx.def?view=markup)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/dvipdfmx-def/dvipdfmx.def?view=log)
- \[[latexfmxdef\] Index of /trunk](http://svn.gnu.org.ua/viewvc/latexfmxdef/trunk/)
    - [log](http://svn.gnu.org.ua/viewvc/latexfmxdef/trunk/?view=log)
    - [ChangeLog](http://svn.gnu.org.ua/viewvc/latexfmxdef/trunk/ChangeLog?view=markup)

## 不具合 {#mb96765c}

### dvipdfmx Version 20130624 で TikZ を使用した DVI ファイルを処理すると \*\* ERROR \*\* Invalid object type: 10 → TeX Live 2014 (dvipdfmx Version 20140317) 以降にアップデート {#m3330a51}

TeX Live 2014 (dvipdfmx Version 20140317), TeX Live 2013 (dvipdfmx-20130405) では大丈夫です<br>
TeX Live 2014 (→ [Revision 31738](http://www.tug.org/svn/texlive?view=revision&revision=31738), [Revision 31739](http://www.tug.org/svn/texlive?view=revision&revision=31739) を参照) で修正されました<br>

- \[[dvipdfmx\] tikz のパターン描画でエラー](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1081)

### dvipdfmx Version 20130624 で しおりを作成するとジャンプできない → TeX Live 2014 (dvipdfmx Version 20140317) 以降にアップデート {#x496f09a}

TeX Live 2014 (dvipdfmx Version 20140317), TeX Live 2013 (dvipdfmx-20130405) ではジャンプできます<br>
TeX Live 2014 (→ [Revision 31386](http://www.tug.org/svn/texlive?view=revision&revision=31386), [Revision 31672](http://www.tug.org/svn/texlive?view=revision&revision=31672), [Revision 31691](http://www.tug.org/svn/texlive?view=revision&revision=31691), [Revision 31759](http://www.tug.org/svn/texlive?view=revision&revision=31759) を参照) で修正されました<br>

- [hyperref パッケージの hyperlink が機能しない(OS X10.9.1, MacTeX,TeXworks )](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1225)
- [hyperref.styによる目次からのリンクが無効](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1078)

### dvipdfmx Version 20130624 で PDF 変換した場合に A5 サイズ (148mm×210mm) で出力できない → TeX Live 2014 (dvipdfmx Version 20140317) 以降にアップデート {#r12477d0}

TeX Live 2014 (dvipdfmx Version 20140317), TeX Live 2013 (dvipdfmx-20130405) では出力可能です<br>
TeX Live 2014 (→ [Revision 31398](http://www.tug.org/svn/texlive?view=revision&revision=31398) を参照) で修正されました<br>

- [dvipdfmxでPDF変換した際に紙のサイズが異なる](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1073)

### dvipdfmx-20120420 で IPAexフォント (Ver.002.01) を使うと \*\* ERROR \*\* Could not obtain necessary font info. → TeX Live 2013 (dvipdfmx-20130405) 以降にアップデート {#z5173081}

TeX Live 2013 (→ [Revision 28787](http://www.tug.org/svn/texlive?view=revision&revision=28787) を参照) で修正されました<br>

- [dvipdfmxでipaexフォントを使うと\*\* ERROR \*\* Could not obtain necessary font info.](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/56967.html)
- [QA: dvipdfmxでipaexフォントを使うと\*\* ERROR \*\* Could not obtain necessary font info.](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=917)

### dvipdfmx-20120420, xdvipdfmx-0.7.8 で [Lucida](https://en.wikipedia.org/wiki/Lucida) や [Bitstream Charter](https://en.wikipedia.org/wiki/Bitstream_Charter) のアクセント記号 (発音記号) が表示できない → TeX Live 2013 (dvipdfmx-20130405) 以降にアップデート {#za070e82}

TeX Live 2013 (→ [Revision 27479](http://www.tug.org/svn/texlive?view=revision&revision=27479), [Revision 27480](http://www.tug.org/svn/texlive?view=revision&revision=27480) を参照) で修正されました<br>

dvipdfmx-20120420 (修正前) と xdvipdfmx-0.7.8 (修正前) と dvipdfm, version 0.13.3TL-j-p1d で [Lucida](https://en.wikipedia.org/wiki/Lucida) や [Bitstream Charter](https://en.wikipedia.org/wiki/Bitstream_Charter) のアクセント記号 (発音記号) が表示できません．<br>

```
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{charter}
\begin{document}
chass\'e du G\"obe
\end{document}
```

以下のように \\' や \\" の直後に {}$\\!\\!\\!$ を追加すれば表示できるようになりました．

```
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{charter}
\begin{document}
chass\'{}$\!\!\!$e du G\"{}$\!\!\!$obe
\end{document}
```

↑ Type1 フォントの合成済字形（←これが seac を使っている）でなくて、TeX 上の合成で事足りるのであれば、アクセント自動置換をごまかして TeX 上の合成を強制することにすればよいでしょう。([アクセント合成済文字を避ける](http://d.hatena.ne.jp/zrbabbler/20120609/1339257531) を参照)

```
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{charter}
\begin{document}
chass\'{\empty e} du G\"{\empty o}be /
CHASS\'{\empty E} DU G\"{\empty O}BE
\end{document}
```

- [Lucida fonts (T1) and dvipdfm.](https://groups.google.com/group/comp.text.tex/browse_thread/thread/429dd838fe75ea40/d26feb9baf78f9d6)
- [Diacritics from Bitstream Charter are not translated to PDF](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=639373)
- [dvipdfmxがBitstream Charterでバグる！](https://twitter.com/h_okumura/status/209849248987090945)
- [seac のバグは「構成要素の文字（例だと \\'{} e \\"{} o）を文書のどこかに紛れ込ませる」と逃げられる、はず。](https://twitter.com/zr_tex8r/status/209880317023109120)
- [dvipdfm(x)のseacバグ](https://twitter.com/golden_lucky/status/209924362785140736)

## 注意点 {#n8c7de22}

### upLaTeX + dvipdfmx で波ダッシュ「〜」(U+301C) が 全角チルダ「～」(U+FF5E) で表示される → map ファイルの UniJIS-UTF16-H を unicode に変更または \AtBeginDvi{\special{pdf:mapline uprml-h unicode :0:msmincho.ttc}} を追加 {#n5909871}

- [upLaTeX + dvipdfmx で波ダッシュ「〜」(U+301C) が 全角チルダ「～」(U+FF5E) で表示される](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1218)
- [qa:49109](https://okumuralab.org/~okumura/texfaq/qa/49109.html)
- [https://twitter.com/zr_tex8r/status/422752198724825090](https://twitter.com/zr_tex8r/status/422752198724825090)
- [https://twitter.com/zr_tex8r/status/422763693202350080](https://twitter.com/zr_tex8r/status/422763693202350080)
- [pLaTeX + dvipdfmx で PUA 文字を何とかする話](http://d.hatena.ne.jp/zrbabbler/20130420/1366451325)

### dvips, dvipdfm, dvipdfmx で \scalebox を使用した場合に dvipdfmx の縦組時のみ他のドライバと挙動が異なる → [pxtatescale パッケージ](https://gist.github.com/zr-tex8r/5237259) を使用する {#he8e8e71}

- [\scaleboxの縦組時挙動に付いて](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=961)

## 使い方 {#qabeb774}

### dvipdfmx を画像キャッシュで高速化 {#y11c4b43}

- TeX Live 2013 以降で使用可能です (→ TeX Live [Revision 29495](http://www.tug.org/svn/texlive?view=revision&revision=29495), [Revision 29512](http://www.tug.org/svn/texlive?view=revision&revision=29512) でコミットされました)
- [Image cache in (x)dvipdfmx by Tsuchimura-san](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1153)
- [dvipdfmx を画像キャッシュで高速化](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=958)

デフォルトでは有効にならないようになっています。<br>
有効にするにはコマンドラインオプション

```
-I number
```

において、number を正整数にします。<br>
この数値は、キャッシュが有効な時間を表しています。<br>
デフォルトで有効にしたい場合、dvipdfmx.cfg の I セクションで

```
I 24
```

のように設定しておきます。<br>
この場合、一日以内ならキャッシュにイメージがある場合、それを使用することを意味しています。<br>

### dvipdfmx に extractbb などの名前でシンボリックリンクを作成する {#k882a214}

- [#美文書 １１５ページ、「TeX Liveではextractbbやebbは実はdvipdfmxへのシンボリックリンクです」？](https://twitter.com/ti5942/status/273700405341483008) → [extractbbのプロパティ](https://twitter.com/ti5942/status/273742359915794432)

dvipdfmx はコマンドの名前によって機能を変えることができます．<br>
[dvipdfmx.c](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/dvipdfmx.c?view=markup) の main 関数を見るとコマンド名によって処理を変えています．<br>
UNIX ではプログラムに複数の機能を実装してシンボリックリンクを使用して別の名前をつけることで機能を変えることは普通に行われます．<br>

### DVI ファイルが存在しない PDF ファイルを削除する {#i282b26a}

dvipdfmx には DVI ファイルが存在しない PDF ファイルを削除する機能があります．

```
PS C:\Users\$Env:USERNAME> dvipdfmx test
test.dvi -> test.pdf

** ERROR ** Could not open specified DVI file: test.dvi

Output file removed.
```

## 関連リンク {#me536d1a}

- [Unofficial LaTeX graphics drivers - 概要 \[Puszcza\]](http://puszcza.gnu.org.ua/projects/latexfmxdef)
- [Newest &#39;dvipdfmx&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/dvipdfmx)
- [Dvipdfmx - MyTeXpert](http://mytexpert.sourceforge.jp/index.php?Dvipdfmx)
- [「dvipdfmx」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=dvipdfmx)
- [PXchfon パッケージ ～pLaTeX文書のフォントを簡単に変更～ \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/pxchfon.html)
- [dvipdfmx : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/dvipdfmx)
- [dvipdfmx は括弧入り eps がお嫌いのようです](http://d.hatena.ne.jp/naga_sawa/20130115/1358217658)
- [dvipdfmxのみを用いたpdfファイルサイズの圧縮](http://yonishi.cocolog-nifty.com/weblog/2011/05/dvipdfmxpdf-ebe.html)
- [standalone クラスは dvipdfmx でも使えるような気がする](https://gist.github.com/zr-tex8r/3845085)
- [LCDF TypetoolsでOpenTypeフォントを使う（DVIPDFMXで）](http://dev.activebasic.com/egtra/2012/12/18/522/)
- [The DVIPDFMx Project](http://project.ktug.org/dvipdfmx/)
- [DVI specials for PDF generation](http://project.ktug.org/dvipdfmx/doc/tb94cho.pdf) (PDF)
