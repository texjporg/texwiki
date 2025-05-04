---
title: "LuaTeX-ja"
url: "/LuaTeX-ja/"
date: 2012-11-29T15:59:41Z
pukiwiki: "LuaTeX-ja"
---

# LuaTeX-ja

## LuaTeX-ja {#nec94db0}

LuaTeX-ja は [LuaTeX](/LuaTeX/) で日本語文書の組版を行うためのパッケージです．
plain TeX と [LaTeX](/LaTeX/) の両方に対応しています．

***

***

### 公式サイト {#ha0b38ce}

- [https://github.com/luatexja/luatexja](https://github.com/luatexja/luatexja)
- [LuaTeX-ja プロジェクト wiki](https://ja.osdn.net/projects/luatex-ja/wiki/) ([新wiki](https://github.com/luatexja/luatexja/wiki))
    - [LuaTeX-ja wiki (FrontPage(en))](https://ja.osdn.net/projects/luatex-ja/wiki/FrontPage%28en%29) ([new](<https://github.com/luatexja/luatexja/wiki/Home(en)>))
    - [LuaTeX-ja の使い方](https://ja.osdn.net/projects/luatex-ja/wiki/LuaTeX-ja%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9) ([new](https://github.com/luatexja/luatexja/wiki/%E4%BD%BF%E3%81%84%E6%96%B9))
    - [LuaTeX-jaの開発 (PDF)](https://okumuralab.org/texconf11/presentations/kitagawa.pdf)
- [フォーラム](https://ja.osdn.net/projects/luatex-ja/forums/)
    - [公開討議/質問](https://ja.osdn.net/forum/forum.php?forum_id=25558)
- [CTAN: /tex-archive/macros/luatex/generic/luatexja](https://ctan.org/tex-archive/macros/luatex/generic/luatexja)

### 利用可能な TeX ディストリビューション {#ca58332d}

LuaTeX-ja は

- [TeX Live](</TeX Live/>)
- [MiKTeX](/MiKTeX/) ([MiKTeX Packages luatexja](http://miktex.org/packages/luatexja))

で利用可能です．

### インストール {#p4234337}

[LuaTeX-jaの使い方#インストール・アップデート方法](https://github.com/luatexja/luatexja/wiki/%E4%BD%BF%E3%81%84%E6%96%B9#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88%E6%96%B9%E6%B3%95) を参照．

#### [TeX Live](</TeX Live/>) {#v2c7b507}

TeX Live には luatexja が含まれています．

#### Debian/Ubuntuのリポジトリを使う場合 {#v06d4fe0}

Debian や Ubuntu のリポジトリから、LuaTeX-ja をインストールするには、
texlive-lang-japanese パッケージをインストールします。
ただし、必ずしも最新版ではなくタイムラグがあることに注意。

```
$ sudo apt install texlive-lang-japanese
```

#### MacPortsを利用してインストールする場合 {#k02c7aab}

LuaTeX-ja は texlive-lang-japanese という Port に含まれています。

```
$ sudo port install texlive-lang-japanese -doc
```

ドキュメントも一緒にインストールする場合には、-docオプションを除きます。

### フォントの埋め込み {#od9778bc}

欧文フォントの埋め込みについては，LuaTeX の方法に従います．

和文フォントの埋め込み設定は，付属の luatexja-preset パッケージで行います．例えばヒラギノを埋め込む設定ならば，

```
\usepackage[hiragino-pron]{luatexja-preset}
```

というようにします．オプションには，haranoaji, kozuka-pro, kozuka-pr6, kozuka-pr6n, hiragino-pro, hiragino-pron, morisawa-pro, morisawa-pr6n, yu-win, yu-osx, moga-mobo, noembed, ipa-hg, ipaex-hg, ms-hg が指定できます．具体的にどのようなフォントが埋め込まれるかは，luatexja-ja.pdf を参照してください．また，luatexja-preset には [OTF](/OTF/) パッケージのような機能も含まれています．詳しくは luatexja-ja.pdf をご覧ください．

和文フォント用の fontspec である luatexja-fontspec パッケージも付属しています．luatexja-preset パッケージで用意されていないフォントを使うには，こちらで直接指定することになります．

### 注意点 {#vbed1356}

現状では XeLaTeX, upLaTeX, pLaTeX と比べるとタイプセットに時間がかかります．

- [LuaTeX が実はそんなに遅くないかも知れない件](http://d.hatena.ne.jp/zrbabbler/20170730/1501402087)，[LaTeX： 日本語文書のコンパイル所要時間比較](https://gist.github.com/zr-tex8r/483712fa0940ef22815b04a68b825bf3)
- [https://github.com/doraTeX/TeX2img/issues/6#issuecomment-75005459](https://github.com/doraTeX/TeX2img/issues/6#issuecomment-75005459)
- [luatex でPDFを作れるようになるまで](http://sqr.hateblo.jp/entry/2014/04/20/151523)
- [定理環境の修飾 mdframed.sty](http://ubutun.blogspot.jp/2013/08/mdframedsty.html)
- [LuaTeX+SumatraPDF+小塚Pr6N](http://d.hatena.ne.jp/eggtoothcroc/20121117/p1)
- [2011-09-06 - にっき♪](http://web.archive.org/web/20160404124429/http://d.hatena.ne.jp/abenori/20110906)

LuajitTeX を使用すると 1.3 倍ぐらい早くなることもあるようです ([forum:911](https://okumuralab.org/tex/mod/forum/discuss.php?d=911))．
逆に大きなフォントを使用する場合など，LuajitTeX のほうが極端に遅くなる場合もあります．

たとえばファイルサイズが大きい SourceHanSans-Regular を使った次の [ConTeXt](/ConTeXt/) の例の場合，

```
%
% test.tex
%
\starttext
\definedfont [name:SourceHanSans-Regular at 100pt]%
漢字
\stoptext
```

```
compile_time(contextjit test.tex) / compile_time(context test.tex) = 8.4
```

ぐらいになり，LuajitTeX の方が約 8 倍長い時間がかかります．

使用可能なドキュメントクラスは ltjarticle, ltjsarticle, bxjsarticle, beamer などがあります．
(u)jarticle や jsarticle などの (e-)(u)pTeX の使用を前提としたものは使用できません．

使用可能な文字コードは UTF-8 です．
Shift_JIS, EUC-JP, ISO-2022-JP は使用できません．

### 不具合 {#m2b9f4bc}

[チケット一覧/検索 - LuaTeX-ja - OSDN](https://ja.osdn.net/projects/luatex-ja/ticket/) を参照．

### 他のパッケージとの併用 {#kdbc7cfe}

#### [microtype](https://ctan.org/pkg/microtype) {#m65358c5}

ltjsarticle.cls と microtype パッケージを使用してタイプセットすると以下のエラーが発生することがあるかもしれません．

```
! Extra \else.
\XKV@wh@list ...r \expandafter \XKV@wh@list \else
                                                  \def #3{#6}\expandafter \e...
l.64    }
```

```
?
```

上記のエラーが発生する場合は [Pandoc](/Pandoc/) の項目の [PDF への変換で ltjsarticle を使うとエラーが出る](/Pandoc/#h2f8de68) を参照してください．

#### [OTF](/OTF/) {#g94672b9}

OTF パッケージ (japanese-otf) は使用できません．
LuaTeX-ja では luatexja-otf.sty を使用します．

```
\usepackage{luatexja-otf}
```

- LuaTeX-jaで\usepackage\[yu-win10\]{luatexja-preset}\usepackage{luatexja-otf}とした場合、Unicode外のグリフは出力されないようです。

#### [Beamer](/Beamer/) {#w67ac91d}

[Beamer](/Beamer/) で LuaTeX-ja を使ってみたところ特に問題なく使用できています．

#### [hyperref](/hyperref/) {#v13d851a}

LuaLaTeX でも [hyperref](/hyperref/) が使用できます．

しおりと文書のプロパティのタイトル・作成者・サブタイトル・キーワードを作成するには次のようにします．

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

pdfencoding=auto または unicode=true を指定しないとしおりや文書のプロパティのタイトル・作成者・サブタイトル・キーワードの日本語が文字化けします．
改行は [XeLaTeX](/XeTeX/) と同様に Unicode の改行コードが 8進数表記で指定できます．

- LF (\000\012)
- CR (\000\015)
- CRLF (\000\015\000\012)

ドライバを指定しないとうまく動作しない場合は luatex を指定します．

```
\usepackage[luatex,pdfencoding=auto]{hyperref}
```

#### [Babel](/Babel/) {#v6636cbc}

多言語混在文書を取り扱いたい場合、従来の LaTeX 同様 [babel](/Babel/) と [babel-japanese](/Babel/#babel-japanese) を用いることができます。

<!-- ''（2013/07/11 追記）''TeX Live 2013 では，japanese.ldf の文字コードは ISO-2022-JP になっているので，LuaTeX-ja で扱うには UTF-8 に変換する必要があります．また，（少なくとも）20130515.0 以降では，命令に日本語文字を使えるようになっているので，以下の \西暦 → \Seireki 等の書き換えは不要です． -->
<!--  -->
<!-- babel-japanese パッケージで提供される [[japanese.ldf:http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/generic/babel-japanese/japanese.ldf?view=markup]] をそのまま使うとエラーが出ます。これは、japanese.ldf 中でプリミティブに日本語文字を使用しているためです。該当プリミティブを含めて、 -->
<!--  -->
<!-- -\if西暦 → \ifSeireki -->
<!-- -\西暦 → \Seireki -->
<!-- -\和暦 → \Wareki -->
<!-- -ファイル中文字列 "japanese" → japanesedash（例。もとの japanese との重複防止のため） -->
<!--  -->
<!-- のように置換したものを、たとえば japanesedash.ldf のような名前で保存・配置して、 -->
<!--  -->
<!--   \usepackage[polutonikogreek,english,japanesedash]{babel} -->
<!--  -->
<!-- のように呼び出すと、platex 等で japanese を呼び出したのと同じように日本語環境を使うことができます。 -->

#### polyglossia {#vf242886}

babel の代替として [polyglossia](https://ctan.org/pkg/polyglossia) が公開されています．
polyglossia は LuaLaTeX と XeLaTeX をサポートしており，TeX Live に含まれています．

### 関連リンク {#sf395095}

- [「LuaTeX-ja」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=LuaTeX-ja)
- [LuaTeX-ja の検索結果 - 0番染色体](http://0-chromosome.hatenablog.jp/search?q=LuaTeX-ja)
- [うぶつん: LuaTeX-ja](http://ubutun.blogspot.jp/search/label/LuaTeX-ja)
- [LuaTeX-ja を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=LuaTeX-ja)
- [LuaTex-ja : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/LuaTex-ja)
- [LuaTeX-ja に関する覚え書き](http://text.baldanders.info/remark/2015/luatex-ja/)
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
- [LuaTeX 試用中](http://srad.jp/~tagga/journal/564745)
- [LuaTeX で名刺作り](http://fugenji.org/thomas/diary/index.php?no=r1169)
- [そろそろ考える時期だろう](http://fugenji.org/thomas/diary/index.php?no=r827)

#### リリース情報 {#g1f2f88f}

- [https://github.com/luatexja/luatexja/tags](https://github.com/luatexja/luatexja/tags)
- [https://ja.osdn.net/projects/luatex-ja/scm/git/luatexja/tags](https://ja.osdn.net/projects/luatex-ja/scm/git/luatexja/tags)
- [http://git.osdn.net/view?p=luatex-ja/luatexja.git;a=tags](http://git.osdn.net/view?p=luatex-ja/luatexja.git;a=tags)

#### ChangeLog {#ka55de08}

- [https://github.com/luatexja/luatexja/commit/master](https://github.com/luatexja/luatexja/commit/master)
- [https://ja.osdn.net/projects/luatex-ja/scm/git/luatexja/](https://ja.osdn.net/projects/luatex-ja/scm/git/luatexja/)
    - [https://ja.osdn.net/projects/luatex-ja/scm/git/luatexja/commits](https://ja.osdn.net/projects/luatex-ja/scm/git/luatexja/commits)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/luatex/luatexja](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/luatex/luatexja/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/luatex/luatexja/?view=log)
