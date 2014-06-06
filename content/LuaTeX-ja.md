---
title: "LuaTeX-ja"
url: "/LuaTeX-ja/"
date: 2012-11-29T15:59:41Z
pukiwiki: "LuaTeX-ja"
---

# LuaTeX-ja

[LuaTeX](/LuaTeX/), LuaJITTeX > LuaTeX-ja

## LuaTeX-ja {#nec94db0}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## LuaTeX-ja とは {#ha0b38ce}

LuaTeX-ja は [LuaTeX, LuaLaTeX](/LuaTeX/), LuaJITTeX, LuaJITLaTeX で日本語文書の組版を行うためのパッケージです．<br>

- [LuaTeX-ja プロジェクト wiki](http://sourceforge.jp/projects/luatex-ja/wiki/)
    - [LuaTeX-ja wiki (FrontPage(en))](http://sourceforge.jp/projects/luatex-ja/wiki/FrontPage%28en%29)
    - [LuaTeX-ja の使い方](http://sourceforge.jp/projects/luatex-ja/wiki/LuaTeX-ja%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9)
    - [LuaTeX-jaの開発 (PDF)](http://oku.edu.mie-u.ac.jp/texconf11/presentations/kitagawa.pdf)
- [フォーラム](http://sourceforge.jp/projects/luatex-ja/forums/)
    - [公開討議/質問](http://sourceforge.jp/forum/forum.php?forum_id=25558)
- [CTAN](http://www.ctan.org/tex-archive/macros/luatex/generic/luatexja)

### 利用可能な TeX ディストリビューション {#ca58332d}

LuaTeX-ja は

- [TeX Live](</TeX Live/>)
- [W32TeX](/W32TeX/) (luatexja.tar.xz)
- [MiKTeX](/MiKTeX/) ([MiKTeX Package Information (luatexja)](http://miktex.org/packages/luatexja))

で利用可能です．

### リリース情報 {#g1f2f88f}

- [http://sourceforge.jp/projects/luatex-ja/scm/git/luatexja/tags](http://sourceforge.jp/projects/luatex-ja/scm/git/luatexja/tags)

### ChangeLog {#ka55de08}

- [http://sourceforge.jp/projects/luatex-ja/scm/git/luatexja/](http://sourceforge.jp/projects/luatex-ja/scm/git/luatexja/)
    - [http://sourceforge.jp/projects/luatex-ja/scm/git/luatexja/commits](http://sourceforge.jp/projects/luatex-ja/scm/git/luatexja/commits)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/luatex/luatexja](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/luatex/luatexja/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/luatex/luatexja/?view=log)
- [http://sourceforge.jp/users/h7k/history](http://sourceforge.jp/users/h7k/history)
- [http://sourceforge.jp/users/kmaeda/history](http://sourceforge.jp/users/kmaeda/history)

### インストール {#p4234337}

[LuaTeX-jaの使い方#インストール・アップデート方法](http://sourceforge.jp/projects/luatex-ja/wiki/LuaTeX-ja%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9#h2-.E3.82.A4.E3.83.B3.E3.82.B9.E3.83.88.E3.83.BC.E3.83.AB.E3.83.BB.E3.82.A2.E3.83.83.E3.83.97.E3.83.87.E3.83.BC.E3.83.88.E6.96.B9.E6.B3.95) を参照．<br>

#### [TeX Live](</TeX Live/>) {#v2c7b507}

TeX Live には luatexja が含まれています．<br>

#### [W32TeX](/W32TeX/) {#a565ecc6}

W32TeX には luatexja.tar.xz が含まれています．<br>
W32TeX をフルインストールすると<br>

```
C:.
└─w32tex
    └─share
        └─texmf-dist
             └─tex
                 └─luatex
                     └─luatex-ja
```

にインストールされます．<br>

ls-R が必要ない場合は deltexlsr, ls-R が必要な場合は mktexlsr を実行してください．

### 注意点 {#vbed1356}

[LuaTeX-jaの使い方#手動でインストールする場合](http://sourceforge.jp/projects/luatex-ja/wiki/LuaTeX-ja%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9#h3-.E6.89.8B.E5.8B.95.E3.81.A7.E3.82.A4.E3.83.B3.E3.82.B9.E3.83.88.E3.83.BC.E3.83.AB.E3.81.99.E3.82.8B.E5.A0.B4.E5.90.88) を参照．<br>

現状では XeLaTeX, upLaTeX, pLaTeX と比べるとタイプセットに時間がかかります．<br>

- [LuaTeX+SumatraPDF+小塚Pr6N](http://d.hatena.ne.jp/eggtoothcroc/20121117/p1)
- [2011-09-06 - にっき♪](http://d.hatena.ne.jp/abenori/20110906)

mktexlsr で ls-R を作成しておくとだいたい 2～3倍ぐらい処理が速くなる場合もあるようです．<br>
LuaJITTeX を使用すると 1.3 倍ぐらい早くなることがあるようです． → [luajittex](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=911)<br>

使用可能なドキュメントクラスは ltjarticle, ltjsarticle, bxjsarticle, beamer などがあります．<br>
(u)jarticle や jsarticle などの (e-)(u)pTeX の使用を前提としたものは使用できません．<br>

使用可能な文字コードは UTF-8 です．<br>
Shift_JIS, EUC-JP, ISO-2022-JP は使用できません．<br>

### 不具合 {#m2b9f4bc}

[チケット一覧/検索 - LuaTeX-ja - SourceForge.JP](http://sourceforge.jp/projects/luatex-ja/ticket/) を参照．<br>

## 他のパッケージとの併用 {#kdbc7cfe}

### [microtype](http://ctan.org/pkg/microtype) {#m65358c5}

ltjsarticle.cls と microtype パッケージを使用してタイプセットすると以下のエラーが発生することがあるかもしれません．<br>

```
! Extra \else.
\XKV@wh@list ...r \expandafter \XKV@wh@list \else
                                                  \def #3{#6}\expandafter \e...
l.64    }

?
```

上記のエラーが発生する場合は [pandoc hoge.md -o hoge.pdf -V documentclass=ltjsarticle --latex-engine=lualatex を実行するとエラーになる](/Pandoc/#h2f8de68) を参照してください．<br>

### [OTF](/OTF/) {#g94672b9}

OTF パッケージ (japanese-otf, japanese-otf-uptex) は使用できません．<br>
LuaTeX-ja では luatexja-otf.sty を使用します．<br>

```
\usepackage{luatexja-otf}
```

### [Beamer](/Beamer/) {#w67ac91d}

[Beamer](/Beamer/) で LuaTeX-ja を使ってみたところ特に問題なく使用できています．<br>

### [hyperref](/hyperref/) {#v13d851a}

LuaLaTeX でも [hyperref](/hyperref/) が使用できます．<br>

#### しおりと文書のプロパティのタイトル・作成者・サブタイトル・キーワードの作成 {#pf9bb02b}

しおりと文書のプロパティのタイトル・作成者・サブタイトル・キーワードの作成は [hyperref](/hyperref/) を使用します．<br>

```
\usepackage[pdfencoding=auto]{hyperref}
\hypersetup{%
  bookmarksnumbered=true,%
  colorlinks=true,%
  pdftitle={タイトル},%
  pdfauthor={作成者},%
  pdfsubject={サブタイトル},%
  pdfkeywords={キーワード1\000\012キーワード2\000\015キーワード3\000\015\000\012キーワード4}}
```

pdfencoding=auto または unicode=true を指定しないとしおりや文書のプロパティのタイトル・作成者・サブタイトル・キーワードの日本語が文字化けします．<br>
改行は [XeLaTeX](/XeTeX/) と同様に Unicode の改行コードが 8進数表記で指定できます．<br>

- LF (\000\012)
- CR (\000\015)
- CRLF (\000\015\000\012)

ドライバを指定しないとうまく動作しない場合は pdftex を指定します．<br>

```
\usepackage[pdftex,pdfencoding=auto]{hyperref}
```

### [Babel](/Babel/) {#v6636cbc}

多言語混在文書を取り扱いたい場合、従来の LaTeX 同様 [babel](/Babel/) を用いることができます。

#### japanese {#m6094362}

japanese パッケージで提供される [japanese.ldf](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/japanese/japanese.ldf?view=markup) をそのまま使うとエラーが出ます。これは、japanese.ldf 中でプリミティブに日本語文字を使用しているためです。該当プリミティブを含めて、

- \if西暦 → \ifSeireki
- \西暦 → \Seireki
- \和暦 → \Wareki
- ファイル中文字列 "japanese" → japanesedash（例。もとの japanese との重複防止のため）

のように置換したものを、たとえば japanesedash.ldf のような名前で保存・配置して、

```
  \usepackage[polutonikogreek,english,japanesedash]{babel}
```

のように呼び出すと、platex 等で japanese を呼び出したのと同じように日本語環境を使うことができます。

（2013/07/11 追記）TeX Live 2013 では，japanese.ldf の漢字コードは ISO-2022-JP になっているので，LuaTeX-ja で扱うには UTF-8 に変換する必要があります．また，（少なくとも）20130515.0 以降では，命令に日本語文字を使えるようになっているので，\西暦 → \Seireki 等の書き換えは不要です．

### polyglossia {#vf242886}

babel の事実上の後継として [polyglossia](http://ctan.org/pkg/polyglossia) が公開されています．<br>
polyglossia は LuaLaTeX と XeLaTeX がサポートされています．<br>
polyglossia は TeX Live にも W32TeX にもインストールされています．<br>

## 関連リンク {#sf395095}

- [「LuaTeX-ja」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=LuaTeX-ja)
- [うぶつん: LuaTeX-ja](http://ubutun.blogspot.jp/search/label/LuaTeX-ja)
- [LuaTeX-ja を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=LuaTeX-ja)
- [LuaTex-ja : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/LuaTex-ja)
- [LuaTeX-jaでフォント指定するときのメモ](http://rinx.tk/blog/2014/05/13/luatex-fontspec/)
- [RStudio(Windows)でSweave(.Rnw)を使って一発でpdf作りたい](http://d.hatena.ne.jp/teramonagi/20140203/1391429752)
- [LuaLaTeXやXeLaTeXって奴を使ってみたいんです、私](http://d.hatena.ne.jp/teramonagi/20140129/1390994315)
- [電通大生のためのLuaLaTeX -UEC Advent Calendar 2013-](http://xaro.hatenablog.jp/entry/2013/12/02/075603)
- [texlive 2012 - lualatex on Gentoo](http://blogs.yahoo.co.jp/igproj_fusion/17030484.html)
- [abc11name.tex](https://gist.github.com/aleo724/5238922)
- \[[tex\]embed source code syntax highlighting with texments](https://gist.github.com/3322504)
- \[[latex\]\[japanese\]lualatex example](https://gist.github.com/3316964)
- [PharoByExample-japanese](https://github.com/SquareBracketAssociates/PharoByExample-japanese)
- [org-mode 8.0 画像入り日本語PDFをOSX10.8で出力するなら LuaTeX を使え！](http://blog.livedoor.jp/tek_nishi/archives/7862119.html)
- [Conflict between luatex-ja and fontspec](http://tex.stackexchange.com/questions/95764/conflict-between-luatex-ja-and-fontspec)
- [最近のTeXはすごい](http://tanitsutakahisa.wordpress.com/2013/03/05/2118/)
- [LuaTeX 試用中](http://slashdot.jp/~tagga/journal/564745)
- [LuaTeX で名刺作り](http://fugenji.org/thomas/diary/index.php?no=r1169)
- [そろそろ考える時期だろう](http://fugenji.org/thomas/diary/index.php?no=r827)
