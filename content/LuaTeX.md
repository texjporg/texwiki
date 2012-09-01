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

以下のページを参照．

- [Luatex home page](http://www.luatex.org/)
- [SupelecFoundry > プロジェクト > LuaTeX > Home](http://foundry.supelec.fr/gf/project/luatex/)
    - [Log of /trunk](http://foundry.supelec.fr/gf/project/luatex/scmsvn/?action=browse&path=%2Ftrunk%2F&view=log)
- [My View - MantisBT](http://tracker.luatex.org/my_view_page.php)
- [The luatex Archives](http://tug.org/pipermail/luatex/) (TUG)

## LuaTeX-ja {#nec94db0}

LuaTeX-ja は [CTAN](http://www.ctan.org/tex-archive/macros/luatex/generic/luatexja) に submit されました。(["New on CTAN: LuaTeX-ja": CTAN Announcements, Fri, 20 Apr 2012 06:51:50 -0700](http://www.mail-archive.com/ctan-ann@dante.de/msg04764.html))<br>

- [LuaTeX-ja プロジェクト wiki](http://sourceforge.jp/projects/luatex-ja/wiki/)
    - [LuaTeX-ja wiki (FrontPage(en))](http://sourceforge.jp/projects/luatex-ja/wiki/FrontPage%28en%29)
    - [LuaTeX-ja の使い方](http://sourceforge.jp/projects/luatex-ja/wiki/LuaTeX-ja%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9)
    - [LuaTeX-jaの開発 (PDF)](http://oku.edu.mie-u.ac.jp/texconf11/presentations/kitagawa.pdf)
    - [git.sourceforge.jp Git - luatex-ja/luatexja.git/summary](http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git)

### 利用可能な TeX ディストリビューション {#ca58332d}

LuaTeX-ja は

- [TeX Live](</TeX Live/>) 2012, 2011
    - [TeX Live - TeX Wiki#LuaTeX-ja](</TeX Live/#d5b40bf5>)
- [W32TeX](/W32TeX/) (luatexja.tar.xz)
- [MiKTeX](/MiKTeX/)
    - [MiKTeX Package Information (luatexja)](http://miktex.org/packages/luatexja)

で利用可能です．

### ダウンロード {#xa9091b6}

- [http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git;a=snapshot;h=master;sf=tgz](http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git;a=snapshot;h=master;sf=tgz)

### インストール {#p4234337}

#### [W32TeX](/W32TeX/) {#a565ecc6}

2012/04/20 以降の W32TeX には luatexja.tar.xz が含まれています．<br>
W32TeX をフルインストールすると<br>

```
C:.
└─w32tex
    └─share
        └─texmf
             └─tex
                 └─luatex
                     └─luatex-ja
```

にインストールされます．<br>

ls-R が必要ない場合は deltexlsr, ls-R が必要な場合は mktexlsr を実行してください．

#### [TeX Live](</TeX Live/>) {#v2c7b507}

TeX Live 2012 には luatexja が含まれています．<br>
TeX Live 2011 で luatexja をインストールする場合は tlmgr でパッケージをアップデートします．<br>

```
$ sudo tlmgr update --self --all
```

```
...
[???/???, ??:??/??:??] auto-install: luatexja [????k]
...
```

### 注意点 {#vbed1356}

LuaTeX 開発版のソースを追っかけて自分でコンパイルしている場合，r4433--r4446 は （内部の lpeg が新しくなった関係で luaotfload パッケージが動かなくなったので）利用できません． そのため，r4432 以前か，r4447 以降を使用して下さい．<br>
W32TeX における LuaTeX 開発版 (luatex-dev-w32.tar.xz) では，2012/05/26 <strong>以外</strong>のものであれば大丈夫のようです．<br>

現状では e-pTeX と比べると[コンパイルに時間がかかります](http://d.hatena.ne.jp/abenori/20110906)．<br>
mktexlsr で ls-R を作成しておくとだいたい 2～3倍ぐらい処理が速くなる場合もあるようです．<br>

使用可能なドキュメントクラスは ltjarticle, ltjsarticle, bxjsarticle, beamer などがあります．<br>
jarticle や jsarticle などの pTeX の使用を前提としたものは使用できません．<br>

使用可能な文字コードは UTF-8 です．<br>
Shift_JIS, EUC-JP, ISO-2022-JP は使用できません．<br>

### 不具合 {#m2b9f4bc}

[チケット一覧/検索 - LuaTeX-ja - SourceForge.JP](http://sourceforge.jp/projects/luatex-ja/ticket/) を参照．

#### フォントを埋め込まない場合に全角チルダ「～」(U+FF5E)が表示できない → 回避策: 全角チルダの代わりに波ダッシュ「〜」(U+301C) を使うか \usepackage{luatexja-fontspec} でフォントを指定して埋め込む {#i3e2d318}

LuaTeX-ja でフォントを埋め込まない場合に全角チルダ「～」(U+FF5E) を処理すると表示されないようです．<br>
これは全角チルダの代わりに波ダッシュ「〜」(U+301C)を使うことで回避できます．<br>
\usepackage{luatexja-fontspec} でフォントを指定して埋め込んでも表示できます．<br>

- [Wikipedia:表記ガイド#波ダッシュ](http://ja.wikipedia.org/wiki/Wikipedia:%E8%A1%A8%E8%A8%98%E3%82%AC%E3%82%A4%E3%83%89#.E6.B3.A2.E3.83.80.E3.83.83.E3.82.B7.E3.83.A5) によると

> 固有名称などでやむを得ず波ダッシュを使用する際には、原則として「〜」(Unicode: U+301C)を用い、全角チルダ「～」(Unicode: U+FF5E)、チルダ「~」(Unicode: U+007E)は使用しないでください。全角チルダ「～」 (Unicode: U+FF5E) は、非Windows環境の場合には表示されないことがあるので使用を推奨しません。また、波ダッシュ「〜」(Unicode: U+301C)もフォントによっては上下逆の波形で表示されることがありますので、必要最小限に用います。

とあるので全角チルダは使用しない方がいいかもしれません．

#### bm.sty が使えない → 回避策: amsmath + \pmb{} を使用するか[ixbm.sty](https://gist.github.com/2625027) を使用する → [LuaTeX rev 4411](http://foundry.supelec.fr/gf/project/luatex/scmsvn/?action=browse&path=%2F&view=rev&revision=4411) で修正されました {#o2818a24}

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

### [BXjscls パッケージ](http://zrbabbler.sp.land.to/bxjscls.html) {#te382979}

LuaTeX では [BXjscls パッケージ](http://zrbabbler.sp.land.to/bxjscls.html)が使用可能です．<br>

### [Beamer](/Beamer/) {#w67ac91d}

[Beamer](/Beamer/) で LuaTeX-ja を使ってみたところ特に問題なく使用できています．<br>

### [OTF](/OTF/) {#g94672b9}

OTF パッケージは使用できません．<br>
LuaTeX-ja では luatexja-otf.sty を使用します．<br>

```
\usepackage{luatexja-otf}
```

### [hyperref](/hyperref/) {#v13d851a}

LuaTeX でも [hyperref](/hyperref/) が使用できます．<br>

#### しおりと文書のプロパティのタイトル・作成者・サブタイトル・キーワードの作成 {#pf9bb02b}

しおりと文書のプロパティのタイトル・作成者・サブタイトル・キーワードの作成は [hyperref](/hyperref/) を使用します．<br>
指定するドライバは pdftex です．<br>

```
\usepackage[pdftex,pdfencoding=auto]{hyperref}
\hypersetup{%
  bookmarksnumbered=true,%
  colorlinks=true,%
  pdftitle={タイトル},%
  pdfauthor={作成者},%
  pdfsubject={サブタイトル},%
  pdfkeywords={キーワード1\000\012キーワード2\000\015キーワード3\000\015\000\012キーワード4}}
```

pdfencoding=auto または unicode=true を指定しないとしおりや文書のプロパティのタイトル・作成者・サブタイトル・キーワードの日本語が文字化けします．<br>
改行は [XeTeX](/XeTeX/) と同様に Unicode の改行コードが 8進数表記で指定できます．<br>

- LF (\000\012)
- CR (\000\015)
- CRLF (\000\015\000\012)

### babel {#v6636cbc}

多言語混在文書を取り扱いたい場合、従来の LaTeX 同様 [babel](http://www.ctan.org/tex-archive/macros/latex/required/babel) を用いることができます。XeLaTeX では既に babel の事実上の後継として [polyglossia](http://ctan.org/tex-archive/macros/xetex/latex/polyglossia) が公開されていますが、現時点では polyglossia は LuaLaTeX からは使用できません。

- [再び悩ましい状態に：Luminescence](http://fugenji.org/thomas/diary/index.php?no=r830)
- [polyglossia が LuaTeX に非対応な理由](http://twitter.com/#!/zr_tex8r/status/196604967115694080)

を参照．

#### [japanese](</TeX Live/#z23227fb>) {#m6094362}

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

### 関連リンク {#cdd9fc14}

- \[[LuaTeX\]記事一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=*%5BLuaTeX%5D)
- [「LuaTeX」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=LuaTeX)
- [En toi Pythmeni tes TeXnopoleos［電脳世界の奥底にて］](http://zrbabbler.sp.land.to/)
- [pdffill, luajalayout, luafontcomp, luamirageat etc.](http://www-is.amp.i.kyoto-u.ac.jp/lab/kmaeda/)
    - [biblatex パッケージを使ってみる](http://www-is.amp.i.kyoto-u.ac.jp/lab/kmaeda/biblatex/)
- [「LuaTeX」の検索結果一覧 - にっき♪](http://d.hatena.ne.jp/abenori/archive?word=LuaTeX)
- [機械学習の勉強とか: LuaTeX](http://choge.blogspot.jp/search/label/LuaTeX)
- [「LuaTeX」の検索結果一覧 - Luoyang Press](http://d.hatena.ne.jp/ratbeta/archive?word=LuaTeX)
- [LuaTeX について](http://ossipedia.ipa.go.jp/article/17/)
- \[[latex\]\[japanese\]lualatex example](https://gist.github.com/3316964)
- [PharoByExample-japanese](https://github.com/SquareBracketAssociates/PharoByExample-japanese)
- [そろそろ考える時期だろう](http://fugenji.org/thomas/diary/index.php?no=r827)
- [OMakeでlualatexをつかう](http://hideaki-t.blogspot.jp/2012/02/omakelualatex.html)
- [Ubuntu11.10: LuaTeX-jaをインストールしました！](http://blog.livedoor.jp/ti5942/archives/6612853.html)
- [明日できること。カテゴリ (TeX)](http://termoshtt.blog110.fc2.com/blog-category-4.html)
- [Luatexを使ってMoleCoding](http://molecoding.cocolog-nifty.com/blog/2011/10/luatexmolecodin.html)
- [LuaTeX - ConTeXt wiki](http://wiki.contextgarden.net/LuaTeX)
- [slnunicode](http://files.luaforge.net/releases/sln/slnunicode)
- [hyperref, lualatex and unicode bookmarks issue (garbled page numbers in AR for Linux)](http://tex.stackexchange.com/questions/24445/hyperref-lualatex-and-unicode-bookmarks-issue-garbled-page-numbers-in-ar-for-l)
- [Switched to LuaLaTeX](http://the-user.org/post/switched-to-lualatex)
- [How to get \copyright when mixing T1 fonts and fontspec?](http://tex.stackexchange.com/questions/29895/how-to-get-copyright-when-mixing-t1-fonts-and-fontspec)
