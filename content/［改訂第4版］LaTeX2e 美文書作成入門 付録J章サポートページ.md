---
title: "［改訂第4版］LaTeX2e 美文書作成入門 付録J章サポートページ"
url: "/［改訂第4版］LaTeX2e 美文書作成入門 付録J章サポートページ/"
date: 2006-12-17T05:05:49Z
pukiwiki: "［改訂第4版］LaTeX2e 美文書作成入門 付録J章サポートページ"
---

# ［改訂第4版］LaTeX2e 美文書作成入門 付録J章サポートページ

[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/)著[『［改訂第4版］LaTeX2e（ラテック・ツー・イー）美文書作成入門』](http://www.gihyo.co.jp/books/syoseki.php/4-7741-2984-4)（[技術評論社](http://www.gihyo.co.jp/)，2007年1月，[ISBN 4-7741-2984-4](http://ja.wikipedia.org/wiki/%E7%89%B9%E5%88%A5:Booksources/4774129844)）のうち，「付録J章」のサポートページになります。
本章のサポート責任は[稲垣徹](http://www2.tba.t-com.ne.jp/ing/)，[安田功](http://www.ceres.dti.ne.jp/~i-yasuda/)，栗山雅俊にあります。内容の誤り，ご不明な点（記述がわかりづらいなど），ご要望等ありましたら下記コメント欄にお願いいたします。
なお全体のサポートページは[こちら](http://oku.edu.mie-u.ac.jp/~okumura/bibun4/)になります。

## Errata {#kdcdc574}

- p. 357 サンプル例は Type 1 フォントを使っています。ラテン文字は cm-super を，ギリシア文字は CB Type 1 を，キリル文字は自作の Type 1 フォントを使っています。ギリシア語の CB フォントについては p. 370 以下にインストール方法を記していますが，cm-super のインストールについては[新 pTeX とBabel](</新 pTeX とBabel/#a4477ec1>) を参照下さい。ダウンロードは [CTAN:fonts/ps-type1/](https://mirror.ctan.org/fonts/ps-type1/) からできます。

- p. 357 註9 「ラテンアルファベットによる対応づけ (transliteration)」は p. 363 では「ASCII 翻字入力」という表現になっていますが（表記のゆれ），意味は同じです。

- p. 359 註10 ラテンアルファベットによる対応づけによる入力（ASCII 翻字入力）では inputenc 指定は不要です。

- p. 360 下から13&ndash;10行目「ギユメ」→「ギュメ」（稲垣）――「ギユメ」「ギュメ」どちらの表現も使われているようです。（栗山補記）

- p. 365 註28 「ギリシア文字の直接入力はサポートされていません」―― Babel 本体では未サポートですが，オプションで [iso-8859-7.def](https://mirror.ctan.org/fonts/greek/package-babel/encodings/) が配布されています。
    現代 monotonic ギリシア語については “\usepackage\[iso-8859-7\]{inputenc}” で直接入力ができます（現代 polytonic・古典ギリシア語は不可）。他言語との併用での問題については未確認ですが，わかり次第報告いたします。

- p. 368 表J.9 Babel オリジナルのギリシア数字，アルカイック文字は幾つかバグがあり，正しく出力されないものがあります。これらの文字を使用する場合はできるだけ [teubner.sty](https://mirror.ctan.org/macros/latex/contrib/teubner.zip) を使って下さい。teubner.sty の使用法，出力例についてはそのうちまとめてみたいと思っています。

- p. 369 上段 インストールディレクトリは C:\usr\local\share\texmf\\... と記してありますが，現在 (TDS 1.1) ユーザによる追加ファイルは $TEXMFLOCAL// (&asymp; texmf-local//) 以下ないし $TEXMFHOME// (= ~/texmf// = $HOME/texmf//) 以下が奨励されています。ディレクトリ構造を再現するのが大変と思われる方は texmf// 以下でも結構です。

- p. 369 下段 「日本語環境 (pTeX) で使用する場合はこれを OT2 用に改変し，フォーマットファイルを作り直す必要が」―― [ptetex3](http://tutimura.ath.cx/ptetex/) ではすでに OT2 用の設定になっています。従って改変不要です。

- p. 370 language.dat 場所は $TEXMF/tex/generic/config/ にあります。オリジナルは書き替えずに $TEXMFLOCAL// (&asymp; texmf-local//) ないし $TEXMFHOME// (= ~/texmf// = $HOME/texmf//) 以下にコピーして使った方がよいと思います。

- p. 371 「fmtutil --byfmt platex」―― [ptetex3](http://tutimura.ath.cx/ptetex/) では “--byfmt platex-euc”（または “--byfmt platex-sjis”）と指定します。

- p. 372 updmap コマンド map ファイルの置き場所は $TEXMF/fonts/map/dvips// 以下です。dvipdfm(x) は pfb を優先的に探します。その際 tfm 名と pfb 名が一致する場合は，マップファイルが無くてもかまいません。名称が異なる場合は tfm と pfb の対応を記述した map ファイルが必要です。一方，dvips(k) は常に map ファイルを必要とします。map ファイルが添付されていない場合は，pfb ファイルをエディタで開き，1行目に書かれている「フォント名」（大文字・小文字を区別します）を map ファイルに記述します。なお updmap の詳しい使い方は付録D.5節（p. 315 以下）にあります。（稲垣）

- p. 372 T1 フォントエンコーディング 本文12.2節（p. 188 以下）にも詳しく記述されていますので参照下さい。

- p. 373 EC フォントの Type 1 フォントには cm-super と Latin Modern があります。cm-super については上記 p. 357 errata もご覧下さい。Latin Modern (\usepackage{lmodern}) を指定すると，ギリシア文字やキリル文字 Type 1 フォントの一部が埋め込まれず，Type 3 が埋め込まれてしまう現象が出ています。指定の仕方も含め現在調査中です。

- p. 374 「ギリシア語...は...直接入力を行うことはできません」――上記 p. 365 註28 errata を参照下さい。

- p. 377 註62 図J.4がありませんが，横の「CJK 字体」図のことです。

- p. 382 上から8行目 “\end{bebtext}” → “\end{hebtext}”（稲垣）

- p. 385 mongolian （モンゴル語） \begin{LRtatepar}{6cm} ... \end{LRtatepar} の指定を使うには武蔵工大・井上先生作成の [LRtate.sty](http://www.ns.musashi-tech.ac.jp/~inoue/Pages/TeX/LRtate.sty) が必要です。p. 388 にも URL が挙げてあります。

- p. 385 ctib （チベット語） dbumedTeX のバージョンが上がっています。[トップページ](http://www.aliadne.net/field/tibet/)を参照下さい。

- p. 389 GT書体  多書体 TeX の開発者である[堀田先生のページ](http://auemath.aichi-edu.ac.jp/~khotta/ghost/package.html)でGT書体を使うためのパッケージ [gtfonts2.lzh](http://auemath.aichi-edu.ac.jp/~khotta/ghost/gt/gtfonts2.lzh) および [gtfonts2.tgz](http://auemath.aichi-edu.ac.jp/~khotta/ghost/gt/gtfonts2.tgz) が公開されています。 [W32TeX](http://www.fsci.fuk.kindai.ac.jp/~kakuto/win32-ptex/web2c75.html) でもGT書体を使うためのパッケージ [gtftex.lzh](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/gtftex.lzh) が提供されています。

- p. 389 『今昔文字鏡』 こちらも[堀田先生のページ](http://auemath.aichi-edu.ac.jp/~khotta/ghost/package.html)で [mjfonts2.lzh](http://auemath.aichi-edu.ac.jp/~khotta/ghost/moj/mjfonts2.lzh) （Windows 版），
    [mjfonts2.tgz](http://auemath.aichi-edu.ac.jp/~khotta/ghost/moj/mjfonts2.tgz) （PC-UNIX 版）が提供されています。

## コメント {#l1a73338}

- とりあえず付録J章のerrataを作ってみました。ご意見等ありましたらよろしくお願いします。 -- 栗山 2006-12-18 (月) 01:03:02
- 項目追加，細かい修正を行いました。 -- 栗山 2006-12-18 (月) 15:33:11
- すみません，また修正となりました。 -- 栗山 2006-12-18 (月) 16:13:58
- 堀田先生のページにリンクを貼っていただき，ありがとうございます。『今昔文字鏡』についても同様の記述を追加しました。 -- 栗山 2006-12-18 (月) 23:59:05
- 幾つかの項目修正と追加，リンク追加を行いました。 -- 栗山 2006-12-23 (土) 18:49:11
