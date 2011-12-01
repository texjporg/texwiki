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

## LuaTeX-ja {#nec94db0}

- [LuaTeX-ja（仮称）プロジェクト wiki](http://sourceforge.jp/projects/luatex-ja/wiki/)
    - [LuaTeX-ja wiki (FrontPage(en))](http://sourceforge.jp/projects/luatex-ja/wiki/FrontPage%28en%29)
    - [LuaTeX-ja の使い方](http://sourceforge.jp/projects/luatex-ja/wiki/LuaTeX-ja%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9)
    - [LuaTeX-jaの開発 (PDF)](http://oku.edu.mie-u.ac.jp/texconf11/presentations/kitagawa.pdf)
    - [git.sourceforge.jp Git - luatex-ja/luatexja.git/summary](http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git)

### ダウンロード {#xa9091b6}

- [http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git;a=snapshot;h=master;sf=tgz](http://git.sourceforge.jp/view?p=luatex-ja/luatexja.git;a=snapshot;h=master;sf=tgz)

### インストール {#p4234337}

W32TeX であれば，展開した luatexja フォルダを

```
C:.
└─w32tex
    └─share
        └─texmf-local
             └─tex
                 └─lualatex
                     └─luatexja
```

に配置するだけでインストール完了です．

ls-R が必要ない場合は deltexlsr, ls-R が必要な場合は mktexlsr を実行してください．

### 不具合 {#m2b9f4bc}

#### フォントを埋め込まない場合に全角チルダ(～)(U+FF5E)が表示できない → 回避策: 全角チルダの代わりに波ダッシュ(〜)(U+301C) を使うか \usepackage{luatexja-fontspec} でフォントを指定して埋め込む {#i3e2d318}

LuaTeX-ja でフォントを埋め込まない場合に全角チルダ(～)(U+FF5E) を処理すると表示されないようです．<br>
これは全角チルダの代わりに波ダッシュ(〜)(U+301C)を使うことで回避できます．<br>
\usepackage{luatexja-fontspec} でフォントを指定して埋め込んでも表示できます．<br>

- [Wikipedia:表記ガイド#波ダッシュ](http://ja.wikipedia.org/wiki/Wikipedia:%E8%A1%A8%E8%A8%98%E3%82%AC%E3%82%A4%E3%83%89#.E6.B3.A2.E3.83.80.E3.83.83.E3.82.B7.E3.83.A5) によると

> 固有名称などでやむを得ず波ダッシュを使用する際には、原則として「〜」(Unicode: U+301C)を用い、全角チルダ「～」(Unicode: U+FF5E)、チルダ「~」(Unicode: U+007E)は使用しないでください。全角チルダ「～」 (Unicode: U+FF5E) は、非Windows環境の場合には表示されないことがあるので使用を推奨しません。また、波ダッシュ「〜」(Unicode: U+301C)もフォントによっては上下逆の波形で表示されることがありますので、必要最小限に用います。

とあるので全角チルダは使用しない方がいいかもしれません．

### 注意点 {#vbed1356}

W32TeX をお使いの方は，2011/10/23 以降の版に更新して下さい．これより前の版ではエラーが発生する可能性があります．<br>

現状では e-pTeX と比べると[コンパイルに時間がかかります](http://d.hatena.ne.jp/abenori/20110906)．<br>
mktexlsr で ls-R を作成しておくとだいたい 2～3倍ぐらい処理が速くなる場合もあるようです．<br>

使用可能なドキュメントクラスは ltjarticle, ltjsarticle, bxjsarticle, beamer などがあります．<br>
jarticle や jsarticle などの pTeX の使用を前提としたものは使用できません．<br>

使用可能な文字コードは UTF-8 です．<br>
Shift_JIS, EUC-JP, ISO-2022-JP は使用できません．<br>

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

### 関連リンク {#cdd9fc14}

- \[[LuaTeX\]記事一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=*%5BLuaTeX%5D)
- [En toi Pythmeni tes TeXnopoleos［電脳世界の奥底にて］](http://zrbabbler.sp.land.to/)
- [pdffill, luajalayout, luafontcomp, luamirageat etc.](http://www-is.amp.i.kyoto-u.ac.jp/lab/kmaeda/)
- [LuaTeX について](http://ossipedia.ipa.go.jp/article/17/)
- [明日できること。カテゴリ (TeX)](http://termoshtt.blog110.fc2.com/blog-category-4.html)
- [Luatexを使ってMoleCoding](http://molecoding.cocolog-nifty.com/blog/2011/10/luatexmolecodin.html)
- [LuaTeX - ConTeXt wiki](http://wiki.contextgarden.net/LuaTeX)
- [slnunicode](http://files.luaforge.net/releases/sln/slnunicode)
- [while : ;do lualatex --halt-on-error test.tex ; inotifywait test.tex; don ってしておいてサブディスプレイにzathura test.pdfしておけば保存するたび勝手に更新されて便利](http://twitter.com/#!/naota344/status/129835653717426176)
- [while : ;do lualatex hometl.tex;sleep 120;done してPDF勝手にreloadするPDFビューワ zathuraでhometl.pdf開いてる](http://twitter.com/#!/naota344/status/129956520778678272)
- [思い切って、luatex + luatex-jaに乗り換えてみた。PDF作成が体感で倍ぐらい速い。これは良い](http://twitter.com/#!/haeena/status/137865745160863745)
- [色々試し中。あと、hyperrefの文字コードだけなんとかなれば。。。changebarは便利だよ。ただ遅いんだろなぁ。組み合わせ上、lualatex以外だとドライバ的に無理なので、じつはluatexで日本語できるのは有り難い。。](http://twitter.com/#!/shigeyas/status/138096653864411136)
- [hyperrefはpdfencoding=auto とかで幸せになりませんか？ 僕もそこちょっと悩みましたｗ](http://twitter.com/#!/haeena/status/138097073865232384)
- [luaTeX + 日本語エクステンションだと、中身はpdftexなので、changebarが出るのだった。素晴らしい。ただ劇的に遅い。あとは、hyperref周りの何かがちょっとオカシイのが気になるけど、文字のクオリティ以外は殆ど同じと言ってよさそげ。印刷してみてみるかな。](http://twitter.com/#!/shigeyas/status/138090386026541056)
- [LuaTeX(+ja拡張)やっぱ遅い。構造上しかたない。シングルコアしか使わないのもいまどき痛いんだが、まぁ、とりあえず、chagebar出すときだけ使うかな。。makefileで切り変えられるようにはしたので。。](http://twitter.com/#!/shigeyas/status/138108062937526273)
- [まあ、かかるといっても、160ページのTeX実行に20秒(5回)かかるのが、二分になるぐらいなので、たいしたことないといえばたいしたことないんだけど、なんか15年前のTeXの実行みてるみたいなイメージ（ページ番号のでかたが）これでは watchr とか使って勝手にmakeでけん](http://twitter.com/#!/shigeyas/status/138108565197045761)
- [さっきのhyper ref on LuaTeXの件は、変にspecials書かずに unicode=true か pdfencoding=auto にすれば良いようです。もう、どこでも pdfencoding=autoだけでいいのかな？](http://twitter.com/#!/shigeyas/status/138113296531341312)
- [\usepackage{luatexja-fontspec} とかやると、絶望的に遅いな。。1ページのドキュメントに17秒。。（汗）](http://twitter.com/#!/shigeyas/status/138149364093816833)
- [lualatex が遅い理由の一つはメモリ食いだからってのもありそうだなぁ。1G食ってるよ。。マクロが色々あるのでアレなんだけど。。](http://twitter.com/#!/shigeyas/status/138158449639952384)
- [TeXがこれだけ遅いと、こんなにストレスフルだということがよく分かった。最悪のパターンだと、makeの手順が全部終わるのに10分かかる。。30倍（汗）](http://twitter.com/#!/shigeyas/status/138163821498994688)
- [ダメだ。LuaTeXの日本語のフォントメトリック、追い込みが足りない。カタカナとか記号とかの周りが少し間が抜けた感じになるので、読みにくいわ。協力したいところだけど、今は無理なので、諦めてpTeXだな。。その方が早いし。。（ちと残念）](http://twitter.com/#!/shigeyas/status/138769734878502912)
- [最近開発が活発で、utf-8が通って、dviを経由せずにPDFが作成できるLuaTexの日本語対応版のLuaTex-jaに詳しい人と友達になりたい(定期ポスト)](http://twitter.com/#!/shibukawa/status/138789511441285121)
- [おお。LuaTeX、linen package使わないようにしたら、素晴らしく早くなった。遅い原因の一つはこれか。。](http://twitter.com/#!/shigeyas/status/140671574155071488)
- [hyperref, lualatex and unicode bookmarks issue (garbled page numbers in AR for Linux)](http://tex.stackexchange.com/questions/24445/hyperref-lualatex-and-unicode-bookmarks-issue-garbled-page-numbers-in-ar-for-l)
- [Switched to LuaLaTeX](http://the-user.org/post/switched-to-lualatex)
