---
title: "TeX"
url: "/TeX/"
date: 2013-05-19T13:18:36Z
pukiwiki: "TeX"
---

# TeX

## TeX {#b942966a}

TeX は Donald E. Knuth によって開発された組版エンジン，言語処理系です．

単に「TeX」と言った場合，それが LaTeX のことを指している場合も多いのですが，TeX と LaTeX は本来区別されるべきものです．詳細は [LaTeX](/LaTeX/) の項目を参照してください．

***

***

### TeX の読み方 {#gea7d22e}

TeX は「テック」または「テフ」(\[tex\])と読みます。
どちらかというと大学系の人は「テフ」派が多いようです。
英語圏では \[tek\]，\[tekh\] または誤読ですが \[teks\]，ドイツ語圏では「テヒ」(\[t&#x25b;&ccedil;\]) とも読むようです。
同様に LaTeX は「ラテック」「ラテフ」などと読みます。

- [TeX の発音](http://d.hatena.ne.jp/takeda25/20140428/1398662547)
- [TeXはテック](http://kahei.org/blog/2014/04/tex-3.html)
- [TeXはテック - Talpa memorandum](http://sonmin-sokuho.hatenablog.com/entry/2014/04/28/120221)
- [「TeX」の読み方は「テック」だった | スラド](http://it.srad.jp/story/14/04/28/0911215/%E3%80%8CTeX%E3%80%8D%E3%81%AE%E8%AA%AD%E3%81%BF%E6%96%B9%E3%81%AF%E3%80%8C%E3%83%86%E3%83%83%E3%82%AF%E3%80%8D%E3%81%A0%E3%81%A3%E3%81%9F)
- [「TeX」の読み方はテフ、それともテック？](http://www.kksanshusha.jp/booklab/archives/1184)
- [Wikipedia.ja:TeX](https://ja.wikipedia.org/wiki/TeX)

### TeX 処理系 {#g6783551}

Knuth によるオリジナルの TeX に対し，Unicode 対応やその他の拡張を施した新たな TeX 処理系が開発されてきました．
それぞれの処理系の解説ページをご覧ください．

- [LuaTeX](/LuaTeX/)
- LuaJITTeX
- [XeTeX](/XeTeX/)
- [pdfTeX](/pdfTeX/)
- [pTeX-ng](/pTeX-ng/)
- [e-upTeX](/upTeX,upLaTeX/)
- [e-pTeX](/e-pTeX/)
- [e-TeX](/e-TeX/)
- TeX ( [ftp://ftp.cs.stanford.edu/pub/tex/](ftp://ftp.cs.stanford.edu/pub/tex/) )

それぞれの関係性や特徴などをまとめた以下のリンクも参考になります．

- [Writing Japanese in LaTeX : Part 1 – Introduction](http://www.preining.info/blog/2014/12/writing-japanese-in-latex-part-1-introduction/)
- [Writing Japanese in LaTeX : Part 2 – Characters and Encodings](http://www.preining.info/blog/2014/12/writing-japanese-in-latex-part-2-characters-and-encodings/)
- [Writing Japanese in LaTeX : Part 3 – Simple documents](http://www.preining.info/blog/2014/12/writing-japanese-in-latex-part-3-simple-documents/)
- [TeX処理系御伽話](http://qiita.com/_yyu_/items/6404656f822ce14db935)
- [TeXの歴史と近年の動向](http://www.slideshare.net/doraTeX/the-history-of-tex-and-its-recent-advances)
- [TeXの最近の動向 - MyTeXpert](http://mytexpert.osdn.jp/index.php?TeX%A4%CE%BA%C7%B6%E1%A4%CE%C6%B0%B8%FE)

### チュートリアル {#q0b4ff33}

TeX のチュートリアルが [TeX入門](</TeX入門/>)にあります。こちらをお読み下さい。

TeX のエンジンレベルのエラーについては，以下でメッセージへの対処法が説明されていますので，参考にして下さい．

- [TeX のエラーメッセージ](</TeX のエラーメッセージ/>)

LaTeX のエラーメッセージは [LaTeX](/LaTeX/) の項目にまとめてあります．

### マクロパッケージ {#zf0ba6fa}

TeX を用いた組版を容易にするために作成されたマクロ集です．フォーマットと呼ばれることも多いです．
通常，TeX エンジンを起動するとコマンド名に対応したマクロパッケージがあらかじめ読み込まれた状態になります．

- [plain TeX](https://www.ctan.org/pkg/plain)：Knuth による自身の著書のためのマクロパッケージ．最も基本となるもので，単に端末で tex と打った時に読み込まれるのはこれです．
- [LaTeX](/LaTeX/)
- [ConTeXt](/ConTeXt/)
- [AMS-TeX](https://www.ctan.org/pkg/amstex)：アメリカ数学会作成のマクロパッケージ．現在は LaTeX パッケージ化された [AMS-LaTeX](/AMS-LaTeX/) を使うことが推奨されています．

ここまではメジャーなものですが，他にも TeX Live には色々あるようです．

- [Eplain](https://tug.org/eplain/)：Expanded plain TeX
- [CSTeX](http://petr.olsak.net/cstex/)
- [JadeTeX](http://jadetex.sourceforge.net/)
- [Lollipop](http://ctan.org/pkg/lollipop)
- [MeX](https://www.ctan.org/tex-archive/language/polish)
- [MLTeX](https://www.ctan.org/pkg/mltex)
- [TeXsis](http://www.texsis.org/)
- [xmltex](https://www.ctan.org/pkg/xmltex)

#### マクロパッケージを読み込まずに起動するには {#xa386bfe}

&#x2d;ini オプションを付けて起動します．例えば，pdftex ならば次のようになります（INITEX という表示がつく）．

```
$ pdftex -ini
This is pdfTeX, Version 3.14159265-2.6-1.40.16 (TeX Live 2015) (INITEX)
 restricted \write18 enabled.
**
```

各マクロパッケージのファイル (.ini) をこのまっさらな状態から読み込ませ，最後に \dump を実行することでダンプファイル (.fmt) ができます．
普段はこのようにして作成された fmt ファイルが読み込まれた状態で起動するわけです．

- [てふてふの大群がとんでゐます - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/20121024/1351076961)
- [異様な LaTeX の話 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/20140321/1395360402)

### 備考 {#d2892c04}

#### OS による実行速度の違い {#d99944d5}

Windows や OS X に比べ，Linux の方が LaTeX の実行速度が速いようです．
もし Windows や OS X を使用していて LaTeX の実行速度が遅いと感じる場合は，この機会に Linux を試してみるのも一つの手かもしれません． <!-- 以前は --> <!-- Windows や OS X を使用していて LaTeX の実行速度が遅い場合は Linux を使用してください． --> <!-- と書いてあったわけですが，そう簡単に乗り換えられませんよね？ -->

- [TeXLiveのlatexが遅い件](http://pman0214.blog37.fc2.com/blog-entry-305.html)
- [MacとUbuntuでのLaTeX実行速度の違い](http://ubutun.blogspot.jp/2014/06/macubuntulatex.html)

#### 不具合 {#e730befe}

- [TeXエンジンが Abort trap 6 で落ちる](http://qiita.com/doraTeX/items/600a1c4248fb14de9c3b)：TeX Live 2015 で修正されました (\[[texlive\] Revision 34659](http://www.tug.org/svn/texlive?view=revision&revision=34659))

#### バッドノウハウ {#hcd7e588}

- [バッドノウハウからグッドラッパーへ](http://www.hyuki.com/techinfo/knowhow.html)
- [TeX はバッドノウハウか？](http://d.hatena.ne.jp/apkz/20040311#p4)
- [バッドノウハウについて、ふたたび](http://d.hatena.ne.jp/apkz/20040316#p1)
- [バッドノウハウと TeX と書籍組版](http://d.hatena.ne.jp/apkz/20040322/p1)
- [mktexlsr は有害だ (mktexlsr Considered Harmful)](http://0xcc.net/misc/mktexlsr.html)
- [texmf の ls-R の必要性](http://d.hatena.ne.jp/lugia/20110923/1316736886)
- [bemaerによるプレゼンテーション](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=700)
    - [TeXソース内での全角スペースは有害](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=700#p3831)
- [表示的意味論の二重四角括弧の出し方，および latex のバッドノウハウについて](http://alohakun.blog7.fc2.com/blog-entry-302.html)
- [インターフ ェ イスの街角– Perl で TEX](http://www.pitecan.com/UnixMagazine/PDF/if0101.pdf) (PDF)
- [LaTeXのdfracで証明図を書くときのバッドノウハウ](http://d.hatena.ne.jp/moroha_y/20111229/p1)

#### 私は TeX を続けるよ！ {#gadbb81f}

- [私がTeXを使い続ける理由 - くるるの数学ノート](http://d.hatena.ne.jp/kururu_goedel/20100220/1266648484)
- [私がTeXを使い続ける1個+6個の理由 - わさっき](http://d.hatena.ne.jp/takehikom/20100218/1266441239)

### イベント {#df4b96d9}

#### TeXユーザの集い {#e38306bd}

- [TeXユーザの集い 2014](http://texconf14.tumblr.com/)
- [TeXユーザの集い 2012](http://oku.edu.mie-u.ac.jp/texconf12/)
- [TeXユーザの集い 2011](http://oku.edu.mie-u.ac.jp/texconf11/)
- [TeXユーザの集い 2010](http://oku.edu.mie-u.ac.jp/texconf10/)
- [TeXユーザの集い 2009](http://oku.edu.mie-u.ac.jp/texconf09/)

#### TeX Users Group (TUG) {#o7d3e65b}

- [TUG 2013（第34回TeX Users Group年次大会）](http://tug.org/tug2013/jp/)
- [TUG 2013 チュートリアルを日本語で聞く会](http://tug.org/tug2013/jp/followup.html)

### 関連リンク {#f53c2f34}

- [TeXに関する新着投稿 - Qiita \[キータ\]](http://qiita.com/tags/TeX)
- [TeXの検索結果 - Qiita \[キータ\]](http://qiita.com/search?utf8=%E2%9C%93&q=TeX)
