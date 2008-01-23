---
title: "［改訂第4版］LaTeX2e 美文書作成入門 付録J章サポートページ"
url: "/［改訂第4版］LaTeX2e 美文書作成入門 付録J章サポートページ/"
date: 2006-12-17T05:05:49Z
pukiwiki: "［改訂第4版］LaTeX2e 美文書作成入門 付録J章サポートページ"
---

# ［改訂第4版］LaTeX2e 美文書作成入門 付録J章サポートページ

[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/)著『[［改訂第4版］ LaTeX2e 美文書作成入門](http://www.gihyo.co.jp/books/syoseki.php/4-7741-2984-4)』（[技術評論社](http://www.gihyo.co.jp/)，2007年1月，[ISBN 978-4-7741-2984-6](http://ja.wikipedia.org/wiki/Special:Booksources/978-4-7741-2984-6)）のうち，「付録J章」のサポートページになります。
本章のサポート責任は[稲垣徹](http://www2.tba.t-com.ne.jp/ing/)，[安田功](http://yasuda.homeip.net/)，[栗山雅俊](http://ethics.let.hokudai.ac.jp/~gpae/plus2/?Staff/Kuriyama)にあります。
内容の誤り，ご不明な点（記述がわかりづらいなど），ご要望等ありましたら下記コメント欄にお願いいたします。
なお全体のサポートページは[こちら](http://oku.edu.mie-u.ac.jp/~okumura/bibun4/)になります。

## Errata {#kdcdc574}

- p. 357 サンプル例は Type 1 フォントを使っています。ラテン文字は cm-super を，ギリシア文字は CB Type 1 を，キリル文字は自作の Type 1 フォントを使っています（T2D キリル文字で使用した Type 1 フォントは mftrace を用いて LH フォントから生成したものです。[http://yasuda.homeip.net/archives/lh-misc-type1-all-0612.zip](http://yasuda.homeip.net/archives/lh-misc-type1-all-0612.zip) に置いておきますのでご活用ください。本 Type 1 フォントのインストール，生成方法は「[LH キリル T2D/OT2 Type 1 フォント集](http://yasuda.homeip.net/tex/cyrillic-type1-fonts.html)」をご参照ください。 -- 安田）。ギリシア語の CB フォントについては p. 370 以下にインストール方法を記していますが，cm-super のインストールについては [TeXWiki:新 pTeX と Babel #cm-super](</新 pTeX とBabel/#a4477ec1>) をご参照ください。ダウンロードは [CTAN:fonts/ps-type1/](https://mirror.ctan.org/fonts/ps-type1/) からできます。

- p. 358 註9 「ラテンアルファベットによる対応づけ (transliteration)」は p. 363 では「ASCII 翻字入力」という表現になっていますが（表記の揺れ），意味は同じです。

- p. 359 註10 ラテンアルファベットによる対応づけによる入力（ASCII 翻字入力）では inputenc 指定は不要です。

- p. 359 註12 「次期 pTeX-Unicode」— [ttk (TANAKA, Takuji) さん](http://homepage3.nifty.com/ttk/comp/tex/)による [upTeX](http://homepage3.nifty.com/ttk/comp/tex/uptex.html) の開発が始まりました。[土村展之さん](http://www.nn.iij4u.or.jp/~tutimura/)のご尽力により，既に [ptetex3](/Make/#saac55c2) へのパッチとして試用可能です（なお，[ptetexWiki:UTF-8対応(4) #upTeX 対応](http://tutimura.ath.cx/ptetex/?UTF-8%E5%AF%BE%E5%BF%9C%284%29%23m605b29c) もご覧ください）。

- p. 360 下から13&ndash;10行目「ギユメ」→「ギュメ」（稲垣）—「ギユメ」「ギュメ」どちらの表現も使われているようです。（栗山補記）

- p. 364 表 J.5 \[ \] 内に示したフォントエンコーディング名に関して，複数のエンコーディングに属するものを優先順位を付けて表示していますが，特に OT2 と表示したテキスト命令は原則 T2A/T2B/T2C/T2D フォントエンコーディング指定時にも使用できる場合があります（\cyrizh，\cyrfita，\cyryat の3字母を除く）。（安田）

- p. 364, p. 369 本書で言及しているキリル文字フォントエンコーディング OT2/T2A/T2B/T2C/T2D/X2 は，キリル文字に限定すれば，(OT2 ∪ T2A ∪ T2B ∪ T2C) ⊂ X2 の関係にあります。X2 を使えば OT2 にないキリル文字をほとんどカバーできます。T2D には X2 にはない教会スラヴ語文字・古スラヴ語文字が含まれています。X2 の使い方については，稲垣さんのサイト（「CTAN Directory &mdash; “[Russian / Cyrillic Language](http://www2.tba.t-com.ne.jp/ing/ctan/russian.html)”」など）に解説があります。（安田）

- p. 364 「ロシア語におけるいくつかの補足」—数式モードにおけるキリル文字の利用について，amsmath.sty (AMS-LaTeX)，mathtext.sty を使った例を<del>[アーカイブ](http://yasuda.homeip.net/archives/mathcyr-examples-070107.zip)</del>にしました。（安田）

- p. 365 註28 「ギリシア文字の直接入力はサポートされていません」— Babel 本体では未サポートですが，オプションで[iso-8859-7.def](http://www.ring.gr.jp/pub/text/CTAN/fonts/greek/package-babel/encodings/iso-8859-7.def) が配布されています。
    現代 monotonic ギリシア語については “\usepackage\[iso-8859-7\]{inputenc}” で直接入力ができます（現代 polytonic，古典ギリシア語は不可）。他言語との併用での問題については未確認ですが，わかり次第報告いたします。

- p. 368 表 J.9 Babel オリジナルのギリシア数字，アルカイック文字は幾つかバグがあり，正しく出力されないものがあります。これらの文字を使用する場合はできるだけ[teubner.sty](ftp://ftp.ring.gr.jp/pub/text/CTAN/macros/latex/contrib/teubner.zip) を使ってください。teubner.sty の使用法，出力例についてはそのうちまとめてみたいと思っています。

- p. 369 上段 インストールディレクトリは C:\usr\local\share\texmf\\... と記してありますが，現在 (TDS 1.1) ユーザによる追加ファイルは $TEXMFLOCAL// (&asymp; texmf-local//) 以下ないし $TEXMFHOME// (= ~/texmf// = $HOME/texmf//) 以下が奨励されています。ディレクトリ構造を再現するのが大変と思われる方は texmf// 以下でも結構です。

- p. 369 中段 LH フォントのインストール—現在 (3.5f) はディレクトリ構成が変わっています。[lhfnt35f-gen-mf.zip](ftp://ftp.ring.gr.jp/pub/text/CTAN/fonts/cyrillic/lh/lhfnt35f-gen-mf.zip) と[lhfnt35f-source.zip](ftp://ftp.ring.gr.jp/pub/text/CTAN/fonts/cyrillic/lh/lhfnt35f-source.zip) をダウンロードし，適当なディレクトリで展開（解凍）します。親ディレクトリ “texmf” を必要ならば “texmf-local” 等に直して TeX をインストールしたディレクトリ（/usr/local/ など）に丸ごと上書きコピーしてください。setter.tex や 99allenc.tex は $TEXMF/source/fonts/lh/tex/ にあります。wrk// 以下に出来た mf ファイルは，$TEXMF/fonts/source/lh// 以下にディレクトリごと上書きコピーしてください。

- p. 369 下段 「日本語環境 (pTeX) で使用する場合はこれを OT2 用に改変し，フォーマットファイルを作り直す必要が」— [ptetex3](/Make/#saac55c2) ではすでに OT2 用の設定になっています。従って改変不要です。

- p. 370 language.dat 場所は $TEXMF/tex/generic/config/ にあります。オリジナルは書き替えずに $TEXMFLOCAL// (&asymp; texmf-local//) ないし $TEXMFHOME// (= ~/texmf// = $HOME/texmf//) 以下にコピーして使った方がよいと思います。

<!-- - p. 371 「fmtutil - -byfmt platex」— [[ptetex3>Make#saac55c2]] では “- -byfmt // platex-euc” （または “- -byfmt platex-sjis”）と指定します。 -->
<!-- ptetex3-20070508 で platex-euc, platex-sjis は廃止されました。 -->

- p. 372 「updmap コマンド」— map ファイルの置き場所は $TEXMF/fonts/map/dvips// 以下です。dvipdfm(x) は pfb を優先的に探します。その際 tfm 名と pfb 名が一致する場合は，マップファイルが無くてもかまいません。名称が異なる場合は tfm と pfb の対応を記述した map ファイルが必要です。一方，dvips(k) は常に map ファイルを必要とします。map ファイルが添付されていない場合は，pfb ファイルをエディタで開き，1行目に書かれている「フォント名」（大文字・小文字を区別します）を map ファイルに記述します。なお updmap の詳しい使い方は付録 D.5 節（p. 315 以下）にあります。（稲垣）

- p. 372 誤：「cbfonts.map」，正：「cbgreek.map」 — map ファイルのみ未だ古い名前でした。

- p. 372 「T1 フォントエンコーディング」—本文 12.2 節（p. 188 以下）にも詳しく記述されていますので参照ください。

- p. 373 EC フォントの Type 1 フォントには cm-super と Latin Modern があります。cm-super については上記 p. 357 errata もご覧ください。Latin Modern (“\usepackage{lmodern}”) を指定すると，ギリシア文字やキリル文字 Type 1 フォントの一部が埋め込まれず，Type 3 が埋め込まれてしまう現象が出ています。指定の仕方も含め現在調査中です。（対応策 —試案— を[ここ](http://www2.tba.t-com.ne.jp/ing/babel.html#latinmodern)に置きました。稲垣）

- p. 374 「ギリシア語……は……直接入力を行うことは出来ません」—上記 p. 365 註28 errata を参照ください。

- p. 377 註62 図 J.4 がありませんが，横の「CJK 字体」図のことです。

- p. 379 J.6 節で取り上げた言語・文字を含む各種パッケージのインストール方法，入出力例，使用上のヒントなどを「[日本語 LaTeX による多言語処理 &mdash; CTAN directory](http://www2.tba.t-com.ne.jp/ing/ctan/ctanindex.html)」に掲載しました。（稲垣）

- p. 382 上から8行目 “\end{bebtext}” → “\end{hebtext}”（稲垣）

- p. 385 「mongolian」（モンゴル語）— \begin{LRtatepar}{6cm} ... \end{LRtatepar} の指定を使うには武蔵工大・井上先生作成の[LRtate.sty](http://www.ns.musashi-tech.ac.jp/~inoue/Pages/TeX/LRtate.sty) が必要です。p. 388 にも URI が挙げてあります。

- p. 385 「ctib」（チベット語）— dbumedTeX のバージョンが上がっています。<del>[トップページ](http://www.aliadne.net/field/tibet/)</del>をご参照ください。

- p. 389 「[GT書体](http://www.l.u-tokyo.ac.jp/GT/)」—多書体 TeX の開発者である[堀田耕作さんのウェブサイト](http://www.geocities.jp/koh_hotta/ghost/package.html)でGT書体を使うためのパッケージ[gtfonts2.lzh](http://www.geocities.jp/koh_hotta/ghost/gt/gtfonts2.lzh) および[gtfonts2.tgz](http://www.geocities.jp/koh_hotta/ghost/gt/gtfonts2.tgz) が公開されています。[W32TeX](http://www.fsci.fuk.kindai.ac.jp/~kakuto/win32-ptex/) でもGT書体を使うためのパッケージ[gtftex.lzh](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/gtftex.lzh) が提供されています。

- p. 389 「『[今昔文字鏡](http://www.mojikyo.com/)』」—こちらも[堀田さんのウェブサイト](http://www.geocities.jp/koh_hotta/ghost/package.html)で[mjfonts2.lzh](http://www.geocities.jp/koh_hotta/ghost/moj/mjfonts2.lzh) （Microsoft Windows 版），
    [mjfonts2.tgz](http://www.geocities.jp/koh_hotta/ghost/moj/mjfonts2.tgz) （UNIX, Unix-like OS 版）が提供されています。

## コメント {#l1a73338}

- とりあえず付録J章のerrataを作ってみました。ご意見等ありましたらよろしくお願いします。 -- 栗山 2006-12-18 (月) 01:03:02
- 項目追加，細かい修正を行いました。 -- 栗山 2006-12-18 (月) 15:33:11
- すみません，また修正となりました。 -- 栗山 2006-12-18 (月) 16:13:58
- 堀田先生のページにリンクを貼っていただき，ありがとうございます。『今昔文字鏡』についても同様の記述を追加しました。 -- 栗山 2006-12-18 (月) 23:59:05
- 幾つかの項目修正と追加，リンク追加を行いました。 -- 栗山 2006-12-23 (土) 18:49:11
- LHフォントのヴァージョンアップに伴う記述変更を追加しました。 -- 栗山 2006-12-28 (木) 22:03:59
- すみません，また追加です（CBのmapファイル）。 -- 栗山 2006-12-28 (木) 22:53:11
- LHフォントのリンクを追加しました。稲垣さん，mapファイルについて追記ありがとうございます。また，記述の訂正，リンク作成を行っていただいた方に御礼申し上げます。 -- 栗山 2006-12-29 (金) 00:52:58
- 稲垣さん，CTAN Directory 拝見しました。素晴らしいです。 -- 栗山 2007-01-05 (金) 02:09:09
- 使用した LH キリル Type1 フォント (T2D, OT2) アーカイブへのリンクを追加しました。 -- 安田 2007-01-07 (日) 03:17:29
- 数式モードでのキリル文字使用例へのリンク、表J.5 フォントエンコーディング表記補足を追加しました。 -- 安田 2007-01-07 (日) 17:07:28
- 全角記号（全角マイナスなど）は一部のブラウザで文字化けを起こすため，すべて半角に置き換えました。 -- 栗山 2007-01-16 (火) 12:32:29
- LM/CB/LH Type 1対応策（試案）を置きました。 -- 稲垣 2007-01-28 (日) 03:52:48
- キリルフォントエンコーディング補足を追記しました (X2 の解説をありがとうございます。>稲垣さん)。 -- 安田 2007-01-28 (日) 23:55:00
- 「{OT2, T2A, T2B, T2C} ∈ X2」と書いてある上記の中の箇所は変な気がいたしますが，「OT2 ∪ T2A ∪ T2B ∪ T2C ⊂ X2」と言う意味でしょうか？ -- kd 2007-01-29 (月) 18:07:37
- kd さん、そのとおりです。訂正しました！ -- 安田 2007-01-29 (月) 20:19:12
- upTeXについての記述を付加しました。 -- 栗山 2007-04-10 (火) 21:02:48
- 全角記号はテキストブラウザ等で文字化けを起こす場合があるので半角に置き換えました(特にダッシュ（EM DASH）は要注意)。これはUnicodeの変換テーブルが機種やアプリによって異なるためと思われます-- 栗山 2007-04-21 (土) 02:45:33
