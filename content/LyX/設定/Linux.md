---
title: "LyX/設定/Linux"
url: "/LyX/設定/Linux/"
date: 2012-10-02T12:13:33Z
pukiwiki: "LyX/設定/Linux"
---

# LyX/設定/Linux

[LyX](/LyX/) > [設定](</LyX/設定/>) > Linux

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## 設定 {#f3c4bb26}

### 順検索 (forward search) {#l3e420bc}

#### [Evince](/Evince/) の場合 {#ebd984f2}

PDFコマンドは Evince/fwdevince の fwdevince を使用します．<br>

***

```

```

<br>

出力の行幅(L): <ins>65</ins><br>
日付書式(D): 　<ins>&#x25;x</ins><br>
書き出し時の上書き(O): <span style="color:Black;background-color:#EEEEEE;">\[許可を求める　　▼\]</span><br>
順検索<br>
　DVIコマンド: <br>
　PDFコマンド: <ins>fwdevince $$o $$n $$t</ins><br>

***

#### [Okular](/Okular/) の場合 {#s32b3472}

PDFコマンドは [Okular](/Okular/) を使用します．<br>
PDFコマンドのリストから okular --unique "$$o#src:$$n $$f" を選択します．<br>

***

```

```

<br>

出力の行幅(L): <ins>65</ins><br>
日付書式(D): 　<ins>&#x25;x</ins><br>
書き出し時の上書き(O): <span style="color:Black;background-color:#EEEEEE;">\[許可を求める　　▼\]</span><br>
順検索<br>
　DVIコマンド: <br>
　PDFコマンド: <ins>okular --unique "$$o#src:$$n $$f"</ins><br>

***

#### [zathura](/zathura/) の場合 {#f1b11fba}

PDFコマンドは [zathura](/zathura/) を使用します．<br>

***

```

```

<br>

出力の行幅(L): <ins>65</ins><br>
日付書式(D): 　<ins>&#x25;x</ins><br>
書き出し時の上書き(O): <span style="color:Black;background-color:#EEEEEE;">\[許可を求める　　▼\]</span><br>
順検索<br>
　DVIコマンド: <br>
　PDFコマンド: <ins>zathura --synctex-forward $$n:0:$$t $$o</ins><br>

***

#### [qpdfview](/qpdfview/) の場合 {#a6f5bad3}

PDFコマンドは [qpdfview](/qpdfview/) を使用します．<br>

***

```

```

<br>

出力の行幅(L): <ins>65</ins><br>
日付書式(D): 　<ins>&#x25;x</ins><br>
書き出し時の上書き(O): <span style="color:Black;background-color:#EEEEEE;">\[許可を求める　　▼\]</span><br>
順検索<br>
　DVIコマンド: <br>
　PDFコマンド: <ins>qpdfview --unique "$$o#src:$$f:$$n:0"</ins><br>

***

## Evince との連携 {#yfea5c32}

\[文書(D)\]-\[設定(S)...\]-\[出力\] の \[出力と同期(Y)\] をチェックして\[自製マクロ(U):\]に \synctex=1 を選択もしくは変換子に -synctex=1 を追加します．

### forward search {#i9ef9b4c}

[順検索 (forward search)](</LyX/設定/Linux/#l3e420bc>) を参照してください．

## Okular との連携 {#ka27016a}

\[文書(D)\]-\[設定(S)...\]-\[出力\] の \[出力と同期(Y)\] をチェックして\[自製マクロ(U):\]に \synctex=1 を選択もしくは変換子に -synctex=1 を追加します．

### forward search {#w6988b67}

[順検索 (forward search)](</LyX/設定/Linux/#l3e420bc>) を参照してください．

## zathura との連携 {#z3a17acd}

\[文書(D)\]-\[設定(S)...\]-\[出力\] の \[出力と同期(Y)\] をチェックして\[自製マクロ(U):\]に \synctex=1 を選択もしくは変換子に -synctex=1 を追加します．

### forward search {#md1a5537}

[順検索 (forward search)](</LyX/設定/Linux/#f1b11fba>) を参照してください．

## qpdfview との連携 {#i536202e}

\[文書(D)\]-\[設定(S)...\]-\[出力\] の \[出力と同期(Y)\] をチェックして\[自製マクロ(U):\]に \synctex=1 を選択もしくは変換子に -synctex=1 を追加します．

### forward search {#l5055820}

[順検索 (forward search)](</LyX/設定/Linux/#l3e420bc>) を参照してください．

## 関連リンク {#z80015dd}

- [Ubuntu12.04でLyXを入れるときに一緒に入ろうとするTeXパッケージと格闘する](http://barippi.seesaa.net/article/293238931.html)
- [インド学仏教学における LyX の利用](http://skalldan.wordpress.com/2011/12/01/%E3%82%A4%E3%83%B3%E3%83%89%E5%AD%A6%E4%BB%8F%E6%95%99%E5%AD%A6%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B-lyx-%E3%81%AE%E5%88%A9%E7%94%A8/)
- [LyX の導入と Zotero との連携](http://skalldan.wordpress.com/2011/11/30/lyx-%E3%81%AE%E5%B0%8E%E5%85%A5%E3%81%A8-zotero-%E3%81%A8%E3%81%AE%E9%80%A3%E6%90%BA/)
- [仮想マシンで遊んでみた2](http://barippi.seesaa.net/article/257411076.html)
- [メモ置き](https://sites.google.com/site/6eskymemo/)
    - [Funtoo Linux](https://sites.google.com/site/6eskymemo/note/funtoo-linux)
    - [TeX/LyX 関連](https://sites.google.com/site/6eskymemo/note/tex-lyx)
- [lyxで日本語を使う。(ubuntu 11.10)](http://d.hatena.ne.jp/hiroki_f/20111114/1321227216)
- [Lyx 2.0 の設定](http://d.hatena.ne.jp/hasundue/20110710/1310300350)
- [LyX2.0でpdfの画像ファイルを埋め込む](http://blogs.yahoo.co.jp/pentainformation/29055437.html)
- [Lyxを使ってみました](http://d.hatena.ne.jp/mFumi/20090902/1251900233)
- [Using custom LaTeX document classes in LyX](http://stefaanlippens.net/customLaTeXclassesinLyX)
