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

## TeX とは {#pbb19376}

### TeX の読み方 {#gea7d22e}

TeX は「テック」または「テフ」(\[tex\])と読みます。
どちらかというと日本の大学関係者の人は「テフ」派が多いようです。
英語圏では \[tek\]，\[tekh\] または誤読ですが \[teks\]，ドイツ語圏では「テヒ」(\[t&#x25b;&ccedil;\]) とも読むようです。 <!-- 七不思議の一つではない（∵不思議でない）し、また「テック」の方が妥当であるという誤った印象を与えるので消しておきます --> <!-- 「テフ」と読む人が，日本以外で通用しにくいにもかかわらず「テック」と読むのを頑なに避ける傾向にあるのはTeX界の七不思議((7つあるか不明))です。 -->
同様に LaTeX は「ラテック」「ラテフ」などと読みます。

- [TeX の発音](https://takeda25.hatenablog.jp/entry/20140428/1398662547)
- [TeXはテック](http://kahei.org/blog/2014/04/tex-3.html)
- [TeXはテック - Talpa memorandum](http://sonmin-sokuho.hatenablog.com/entry/2014/04/28/120221)
- [「TeX」の読み方は「テック」だった | スラド](http://it.srad.jp/story/14/04/28/0911215/%E3%80%8CTeX%E3%80%8D%E3%81%AE%E8%AA%AD%E3%81%BF%E6%96%B9%E3%81%AF%E3%80%8C%E3%83%86%E3%83%83%E3%82%AF%E3%80%8D%E3%81%A0%E3%81%A3%E3%81%9F)
- [「TeX」の読み方はテフ、それともテック？](http://www.kksanshusha.jp/booklab/archives/1184)
- [Wikipedia.ja:TeX](https://ja.wikipedia.org/wiki/TeX)

### TeX の仕事 {#vc046011}

TeX の仕事は組版を行うことです。

組版（くみはん）とは，印刷工程のひとつで，文字や図版などを紙面に配置し，構成することを指します。
ページといった，幅や高さなどの制約のある領域に，きれいに文章や図を押し込み配置する処理です。
TeX はこのような処理を自動化するシステムであり，組版エンジンとも呼ばれます。

一連の文章から紙面を構成する際，使用する言語や国と地域などによって，様々なルールがあります。
オリジナルの TeX では，主に英語などで組版を行う際のルールが実装されています。
ハイフネーションやリガチャ・カーニングなどの処理を自動化でき，
その内容も種々のパラメータを調整することによりカスタマイズできることが特徴です。

TeX 以外にも組版を行うシステムはいくつかあります。
[TeX 以外の組版・レイアウトシステム](</TeX 以外の組版・レイアウトシステム/>)の項などを参照してください。

### TeX 処理系とその拡張 {#g6783551}

Knuth によるオリジナルの TeX に対し，
Unicode 対応やその他の拡張を施した新たな TeX 処理系が開発されてきました．
それぞれの処理系についてはその解説ページをご覧ください．

それぞれの関係性や特徴などをまとめた以下のリンクも参考になります．

- [Writing Japanese in LaTeX : Part 1 – Introduction](http://www.preining.info/blog/2014/12/writing-japanese-in-latex-part-1-introduction/)
- [Writing Japanese in LaTeX : Part 2 – Characters and Encodings](http://www.preining.info/blog/2014/12/writing-japanese-in-latex-part-2-characters-and-encodings/)
- [Writing Japanese in LaTeX : Part 3 – Simple documents](http://www.preining.info/blog/2014/12/writing-japanese-in-latex-part-3-simple-documents/)
- [TeX処理系御伽話](http://qiita.com/_yyu_/items/6404656f822ce14db935)
- [TeXの歴史と近年の動向](http://www.slideshare.net/doraTeX/the-history-of-tex-and-its-recent-advances)

#### e-TeX {#mc911b79}

- [e-TeX](/e-TeX/)

#### pdfTeX {#gcebe472}

pdfTeX は PDF 直接出力と Microtypography 機能を搭載した TeX の派生版です。

- [pdfTeX](/pdfTeX/)

#### pTeX 系 {#b5d61a97}

pTeX は日本語の処理のために拡張された TeX の派生プログラムです。
そこからさらに，[e-TeX](/e-TeX/) 拡張を取り入れた [e-pTeX](/e-pTeX/) と，
それに Unicode 対応版と合流した [e-upTeX](/upTeX,upLaTeX/) があります。
これらとは別に，[Asiatic pTeX](</Asiatic pTeX/>) という，PDF 出力をするように拡張されたものもあります。

- [e-pTeX](/e-pTeX/)
- [e-upTeX](/upTeX,upLaTeX/)
- [Asiatic pTeX](</Asiatic pTeX/>)

#### XeTeX {#zd6f8a63}

[XeTeX](/XeTeX/) は TeX に Unicode 対応や現代的なフォント技術とテキスト・レイアウトサービスを組み込んだ派生プログラムです。
OpenType の機能を通じて，高度な組版機能と様々な複雑な用字系をサポートします。
また，OpenType フォントを直接扱えるので，オリジナルの TeX のように，フォントのインストールに膨大な手間がかかるということがありません。

#### LuaTeX {#j0605b0c}

- [LuaTeX](/LuaTeX/)
- [LuajitTeX](/LuajitTeX/)

## チュートリアル {#q0b4ff33}

TeX のチュートリアルが [TeX入門](</TeX入門/>)にあります。こちらをお読み下さい。

TeX のエンジンレベルのエラーについては，以下でメッセージへの対処法が説明されていますので，参考にして下さい．

- [TeX のエラーメッセージ](</TeX のエラーメッセージ/>)

LaTeX のエラーメッセージは [LaTeX](/LaTeX/) の項目にまとめてあります．

## マクロパッケージ {#zf0ba6fa}

TeX を用いた組版を容易にするために作成されたマクロ集です．フォーマットと呼ばれることも多いです．
通常，TeX エンジンを起動するとコマンド名に対応したマクロパッケージがあらかじめ読み込まれた状態になります．

- [plain TeX](https://ctan.org/pkg/plain)：Knuth による自身の著書のためのマクロパッケージ．最も基本となるもので，単に端末で tex と打った時に読み込まれるのはこれです．
- [LaTeX](/LaTeX/)
- [ConTeXt](/ConTeXt/)
- [AMS-TeX](https://ctan.org/pkg/amstex)：アメリカ数学会作成のマクロパッケージ．現在は LaTeX パッケージ化された [AMS-LaTeX](/AMS-LaTeX/) を使うことが推奨されています．

ここまではメジャーなものですが，他にも TeX Live には色々あるようです．

- [Eplain](https://tug.org/eplain/)：Expanded plain TeX
- [CSTeX](http://petr.olsak.net/cstex/)
- [JadeTeX](http://jadetex.sourceforge.net/)
- [Lollipop](https://ctan.org/pkg/lollipop)
- [MeX](https://ctan.org/tex-archive/language/polish)
- [MLTeX](https://ctan.org/pkg/mltex)
- [TeXsis](http://www.texsis.org/)
- [xmltex](https://ctan.org/pkg/xmltex)

### マクロパッケージを読み込まずに起動するには {#xa386bfe}

&#x2d;ini オプションを付けて起動します．例えば，pdftex ならば次のようになります（INITEX という表示がつく）．

```
$ pdftex -ini
This is pdfTeX, Version 3.141592653-2.6-1.40.26 (TeX Live 2024) (INITEX)
 restricted \write18 enabled.
**
```

各マクロパッケージのファイル (.ini) をこのまっさらな状態から読み込ませ，最後に \dump を実行することでダンプファイル (.fmt) ができます．
普段はこのようにして作成された fmt ファイルが読み込まれた状態で起動するわけです．

- [てふてふの大群がとんでゐます - マクロツイーター](https://zrbabbler.hatenablog.com/entry/20121024/1351076961)
- [異様な LaTeX の話 - マクロツイーター](https://zrbabbler.hatenablog.com/entry/20140321/1395360402)

### 備考 {#d2892c04}

### OS による実行速度の違い {#d99944d5}

Windows や macOS に比べ，Linux の方が TeX の実行速度が速いようです．
もし Windows や macOS を使用していて TeX の実行速度が遅いと感じる場合は，この機会に Linux を試してみるのも一つの手かもしれません． <!-- 以前は --> <!-- Windows や OS X を使用していて LaTeX の実行速度が遅い場合は Linux を使用してください． --> <!-- と書いてあったわけですが，そう簡単に乗り換えられませんよね？ -->

- [Windows でも TeXLive のアップグレード作業完了。動作確認で typeset したら、絶望的に遅かった（学部時代、よくこれでレポート作成してたな...）。これだと確かに Overleaf で良いわってなる。なぜ TeX はここまで Windows との相性が悪いのか](https://x.com/watamario15/status/1799312011312177465) &lt;-- [Windows は I/O 関連の API はぜんぶ Windows Defender や 3rd party のために filter/hook でウィルススキャナとか噛ませるフレームワークみたいになってるはずなので、TeX に限らず小さなファイルたくさん I/O する処理は全部絶望的に遅いはず（git とかもそう](https://x.com/orumin/status/1799312615241551973)
- [LaTeXコンパイラ時間比較 (Windows, Mac, iPad)](https://qiita.com/nhancoromochi/items/c4906794519b9b5febf7)
- [Windowsで日本語texのコンパイルを爆速にする方法](https://qiita.com/kiy_at_dev/items/75aa8a13b97d2115f4de)
- [TeXLiveのlatexが遅い件](http://pman0214.blog37.fc2.com/blog-entry-305.html)
- [MacとUbuntuでのLaTeX実行速度の違い](https://web.archive.org/web/20141027175213/http://ubutun.blogspot.jp/2014/06/macubuntulatex.html)

### 不具合 {#e730befe}

- [TeXエンジンが Abort trap 6 で落ちる](http://qiita.com/doraTeX/items/600a1c4248fb14de9c3b)：TeX Live 2015 で修正されました (\[[texlive\] Revision 34659](http://www.tug.org/svn/texlive?view=revision&revision=34659))
- [pTeX エンジンが Segmentation fault を起こす](http://qiita.com/doraTeX/items/7c28b93969a558b3e2a5)： pTeX version p3.7 で修正されました (\[[texlive\] Revision 38333](http://www.tug.org/svn/texlive?view=revision&revision=38333))

### バッドノウハウ {#hcd7e588}

- [バッドノウハウからグッドラッパーへ](http://www.hyuki.com/techinfo/knowhow.html)
- [TeX はバッドノウハウか？](https://apkz.hatenadiary.org/entry/20040311/p4)
- [バッドノウハウについて、ふたたび](https://apkz.hatenadiary.org/entry/20040316/p1)
- [バッドノウハウと TeX と書籍組版](https://apkz.hatenadiary.org/entry/20040322/p1)
- [bemaerによるプレゼンテーション](https://okumuralab.org/tex/mod/forum/discuss.php?d=700)
    - [TeXソース内での全角スペースは有害](https://okumuralab.org/tex/mod/forum/discuss.php?d=700#p3831)
- [インターフ ェ イスの街角– Perl で TEX](http://www.pitecan.com/UnixMagazine/PDF/if0101.pdf) (PDF)

## 関連リンク {#f53c2f34}

- [TeXとは？開発に役立つ使い方、トレンド記事やtips - Qiita](https://qiita.com/tags/TeX)
- [「TeX」の検索結果 - Qiita](https://qiita.com/search?utf8=%E2%9C%93&q=TeX)
- \[[tex-live\]  TeX versions](https://tug.org/pipermail/tex-live/2018-November/042697.html)
