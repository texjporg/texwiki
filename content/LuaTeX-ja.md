---
title: "LuaTeX-ja"
url: "/LuaTeX-ja/"
date: 2012-11-29T15:59:41Z
pukiwiki: "LuaTeX-ja"
---

# LuaTeX-ja

[LuaTeX](/LuaTeX/) > LuaTeX-ja

## LuaTeX-ja {#nec94db0}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### LuaTeX-ja とは {#ha0b38ce}

LuaTeX-ja は [LuaTeX, LuaLaTeX](/LuaTeX/) で日本語文書の組版を行うためのパッケージです．<br>
LuaTeX-ja は [CTAN](http://www.ctan.org/tex-archive/macros/luatex/generic/luatexja) に submit されました。(["New on CTAN: LuaTeX-ja": CTAN Announcements, Fri, 20 Apr 2012 06:51:50 -0700](http://www.mail-archive.com/ctan-ann@dante.de/msg04764.html))<br>

- [LuaTeX-ja プロジェクト wiki](http://sourceforge.jp/projects/luatex-ja/wiki/)
    - [LuaTeX-ja wiki (FrontPage(en))](http://sourceforge.jp/projects/luatex-ja/wiki/FrontPage%28en%29)
    - [LuaTeX-ja の使い方](http://sourceforge.jp/projects/luatex-ja/wiki/LuaTeX-ja%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9)
    - [LuaTeX-jaの開発 (PDF)](http://oku.edu.mie-u.ac.jp/texconf11/presentations/kitagawa.pdf)

### 利用可能な TeX ディストリビューション {#ca58332d}

LuaTeX-ja は

- [TeX Live](</TeX Live/>) (TeX Live 2012 以降)
    - [TeX Live - TeX Wiki#LuaTeX-ja](</TeX Live/#d5b40bf5>)
- [W32TeX](/W32TeX/) (luatexja.tar.xz)
- [MiKTeX](/MiKTeX/)
    - [MiKTeX Package Information (luatexja)](http://miktex.org/packages/luatexja)
- [MacTeX](/Mac/#f5466652) (MacTeX-2012 以降)

で利用可能です．

### ダウンロード {#xa9091b6}

- [http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git;a=snapshot;h=HEAD;sf=tgz](http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git;a=snapshot;h=HEAD;sf=tgz)
- [http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git;a=snapshot;h=master;sf=tgz](http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git;a=snapshot;h=master;sf=tgz)

### ChangeLog {#ka55de08}

- [git.sourceforge.jp Git - luatex-ja/luatexja.git/summary](http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/luatex/luatexja](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/luatex/luatexja/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/luatex/luatexja/?view=log)

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

#### [MacTeX](/Mac/#f5466652) {#p8fa09cd}

MacTeX-2012 には luatexja が含まれています．<br>

### 注意点 {#vbed1356}

LuaTeX 開発版のソースを追っかけて自分でコンパイルしている場合，r4433--r4446 は （内部の lpeg が新しくなった関係で luaotfload パッケージが動かなくなったので）利用できません． そのため，r4432 以前か，r4447 以降を使用して下さい．<br>
W32TeX における LuaTeX 開発版 (luatex-dev-w32.tar.xz) では，2012/05/26 <strong>以外</strong>のものであれば大丈夫のようです．<br>

現状では pLaTeX と比べるとタイプセットに時間がかかります．<br>

- [LuaTeX+SumatraPDF+小塚Pr6N](http://d.hatena.ne.jp/eggtoothcroc/20121117/p1)
- [2011-09-06 - にっき♪](http://d.hatena.ne.jp/abenori/20110906)

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
\usepackage{luatexja-fontspec} でフォントを指定して埋め込むと全角チルダが表示できます．<br>

- [Wikipedia:表記ガイド#波ダッシュ](http://ja.wikipedia.org/wiki/Wikipedia:%E8%A1%A8%E8%A8%98%E3%82%AC%E3%82%A4%E3%83%89#.E6.B3.A2.E3.83.80.E3.83.83.E3.82.B7.E3.83.A5) によると

> 全角チルダ「～」(Unicode: U+FF5E)・チルダ「~」(Unicode: U+007E)は使用しないでください。<br>
> 波ダッシュ・波ダーシ（「![](http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Wave_Dash.svg/18px-Wave_Dash.svg.png)」など）は原則として用いず、半角(JIS X 0201)にあるハイフンマイナス「-」で代用します。この理由は、波ダッシュ「〜」(Unicode: U+301C)が、コンピュータOSおよびフォントによっては上下逆の波形「![](http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Wave_Dash2.svg/18px-Wave_Dash2.svg.png)」で表示されることがあるからです。<br>
> 波ダッシュを固有名称などでやむを得ず使用する際には、原則として「〜」(Unicode: U+301C)を必要最小限に用いてください。<br>
> この場合、波ダッシュ「〜」(Unicode: U+301C)の入力は、Windows環境では、通常のキーボード入力（すなわち「全角チルダ」となってしまう入力）は避けて下さい。<br>

とあるので全角チルダは使用しない方がいいかもしれません．

### [BXjscls パッケージ](http://zrbabbler.sp.land.to/bxjscls.html) {#te382979}

LuaLaTeX では [BXjscls パッケージ](http://zrbabbler.sp.land.to/bxjscls.html)が使用可能です．<br>

### [Beamer](/Beamer/) {#w67ac91d}

[Beamer](/Beamer/) で LuaTeX-ja を使ってみたところ特に問題なく使用できています．<br>

### [OTF](/OTF/) {#g94672b9}

OTF パッケージは使用できません．<br>
LuaTeX-ja では luatexja-otf.sty を使用します．<br>

```
\usepackage{luatexja-otf}
```

### [hyperref](/hyperref/) {#v13d851a}

LuaLaTeX でも [hyperref](/hyperref/) が使用できます．<br>

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
改行は [XeLaTeX](/XeTeX/) と同様に Unicode の改行コードが 8進数表記で指定できます．<br>

- LF (\000\012)
- CR (\000\015)
- CRLF (\000\015\000\012)

### [Babel](/Babel/) {#v6636cbc}

多言語混在文書を取り扱いたい場合、従来の LaTeX 同様 [babel](/Babel/) を用いることができます。XeLaTeX では既に babel の事実上の後継として [polyglossia](http://ctan.org/tex-archive/macros/xetex/latex/polyglossia) が公開されていますが、現時点では polyglossia は LuaLaTeX からは使用できません。

- [再び悩ましい状態に：Luminescence](http://fugenji.org/thomas/diary/index.php?no=r830)
- [polyglossia が LuaTeX に非対応な理由（ツイッター）](http://twitter.com/#!/zr_tex8r/status/196604967115694080)

を参照．

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

## 関連リンク {#sf395095}

- [「LuaTeX-ja」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=LuaTeX-ja)
- [LuaTeX-ja を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=LuaTeX-ja)
- [LuaTex-ja : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/LuaTex-ja)
- \[[tex\]embed source code syntax highlighting with texments](https://gist.github.com/3322504)
- \[[latex\]\[japanese\]lualatex example](https://gist.github.com/3316964)
- [PharoByExample-japanese](https://github.com/SquareBracketAssociates/PharoByExample-japanese)
- [そろそろ考える時期だろう](http://fugenji.org/thomas/diary/index.php?no=r827)
