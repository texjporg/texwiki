---
title: "e-pTeX"
url: "/e-pTeX/"
date: 2013-04-06T08:37:44Z
pukiwiki: "e-pTeX"
---

# e-pTeX

e-pTeX は内部処理が Unicode ではないので Unicode を使用した文書を適切に処理できないことがあります．<br>
Unicode を使用して問題が発生する場合は [e-upTeX](/upTeX,upLaTeX/) を使用してください．<br>

## [e-pTeX](http://sourceforge.jp/projects/eptex/wiki/) → 問題が発生する場合は [e-upTeX](/upTeX,upLaTeX/) を使用する {#u8bd5dfc}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### e-pTeX とは {#a746c835}

e-pTeX は pTeX に [e-TeX](/e-TeX/) 拡張を追加したものです．<br>

- [e-pTeX Wiki](http://sourceforge.jp/projects/eptex/wiki/FrontPage)

### ChangeLog {#mf34fb2b}

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/eptexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/eptexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/eptexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/eptexdir/ChangeLog?view=markup)

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/ptexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/ptexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/ptexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/ptexdir/ChangeLog?view=markup)

### ptexenc {#w41f5dea}

- [ptexenc/文字コード判定 - ptexlive Wiki](http://tutimura.ath.cx/ptexlive/?ptexenc%2F%CA%B8%BB%FA%A5%B3%A1%BC%A5%C9%C8%BD%C4%EA)
- \[[texlive\] Index of /trunk/Build/source/texk/ptexenc](http://www.tug.org/svn/texlive/trunk/Build/source/texk/ptexenc/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/ptexenc/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/ptexenc/ChangeLog?view=markup)

### 不具合 {#xf84e130}

#### Windows の TeX Live 2013 で 表.tex などの 0x5c を含むファイル名を (e-)pTeX で処理しようとするとファイル名を正しく処理できない → TeX Live 2014 以降にアップデート {#p4d23466}

TeX Live 2014 (→ [Revision 31414](http://www.tug.org/svn/texlive?view=revision&revision=31414) を参照) で (e-)pTeX が 表.tex などの 0x5c を含むファイル名に対応しました．<br>
TeX Live 2013 ではファイル名に日本語を使用した場合，ファイル名を正しく処理できない場合があります．<br>

```
platex 表.tex
```

この場合は .dvi が出力され，表.dvi は出力されません．

同様に

```
platex 予定.tex
platex 構造.tex
platex ソフトウェア.tex
```

も 定.dvi, 造.dvi, フトウェア.dvi が出力され，予定.dvi, 構造.dvi, ソフトウェア.dvi は出力されません．

これを回避する方法としては

```
platex -jobname=表 表.tex
platex -jobname=予定 予定.tex
platex -jobname=構造 構造.tex
platex -jobname=ソフトウェア ソフトウェア.tex
```

のように -jobname= で指定してコンパイルする方法があります． → [platexでダメ文字を含むファイルを処理する](http://d.hatena.ne.jp/tailriver/20101022/1291955342), [TeXmakerで使用可能なファイル名について](http://fagahhe2645.hatenablog.com/entry/2013/02/07/231005)

【参考】

- [Windows版pTeXでダメ文字を含むファイル名を扱う](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1074)
- [Shift_JISのダメ文字](https://sites.google.com/site/fudist/Home/grep/sjis-damemoji-jp)
    - [ダメ文字一覧表](https://sites.google.com/site/fudist/Home/grep/sjis-damemoji-jp/table)
