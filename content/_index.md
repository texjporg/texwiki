---
title: "TeX Wiki"
url: "/"
date: 2014-07-10T02:13:46Z
description: "TeX，LaTeX，PDF, PostScript などに関する読者参加型ページです。"
keywords: ["TeX", "LaTeX", "LaTeX2e", "pTeX", "pLaTeX", "pLaTeX2e", "upTeX", "upLaTeX", "upLaTeX2e", "pdfTeX", "pdfLaTeX", "LuaTeX", "LuaLaTeX", "LuaJITTeX", "LuaJITLaTeX", "XeTeX", "XeLaTeX", "DVI", "PostScript", "PDF"]
pukiwiki: "FrontPage"
---

# FrontPage

★[TeX ユーザの集い 2015](http://texconf15.tumblr.com) 11月7日(土)開催！ 

<span style="font-size:30px"><strong>TeX Wiki へようこそ！</strong></span>

<!-- * FrontPage [#pe4f375a] -->

TeX Wiki は，[TeX](/TeX/), [LaTeX](/LaTeX/), [PDF](/PDF/), [PostScript](/PostScript/) などに関する情報を提供する，読者参加型ページです．

「トラブルを解決したい！」という場合は，<strong>「[TeX フォーラム](http://oku.edu.mie-u.ac.jp/tex/)」で質問する前に「[よくある質問](</よくある質問/>)」を確認したり，「[エラーに遭遇したときは](#d1cf258f)」「[それでも困ったときは](#t6f648b9)」を参照する</strong>とすぐに答えが見つかるかもしれません．

- 主な項目を分類した一覧は [サイトマップ](</サイトマップ/>) にあります．
- TeX Wiki の全体ページ一覧は [ページの一覧](http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?cmd=list) にあります．

TeX Wiki は誰でも編集できます．

- 誤りを見つけた
- 読みづらいので直したい
- 最新情報を追記したい

などあれば，気軽に編集して下さい．編集に必要なパスワードはこのページの左の<span style="color:#FF2800;"><strong>赤色の文</strong></span>に書いてあります．[TeX Wiki編集方針](</TeX Wiki編集方針/>)に従ってください．

※現在，大幅な改訂を行っています．編集方針についてのご意見を [TeX Forum での議論](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1485)の方にお寄せください．

<!-- % この下は要編集．この上も要編集かも． -->
<!-- // 現状はサイトマップと大差ない感じになっているので，普通のサイトのトップページのように -->
<!-- // 大項目だけが並べてあるのがよいのではないでしょうか（必要に応じて新規ページがいるかも）． -->
<!-- // サイトマップはサイトマップで，役割分担（「ページの一覧」でも十分かもしれないけれども）． -->
<!-- // ちょっとした冒頭の文章があるのもよいかと． -->
<!-- // Python Wiki https://wiki.python.org/moin/ や， -->
<!-- // ArchWiki https://wiki.archlinux.org/index.php/Main_Page_%28%E6%97%A5%E6%9C%AC%E8%AA%9E%29 -->
<!-- // などが参考になるでしょうか． - - kmaeda -->
<!--  -->
<!-- %% とりあえず書き換えてみました．いかがでしょう？ -->
<!-- // 私も前田さんと同じ意見でした．とはいえ，サイトマップが中途半端でしたので，まずは -->
<!-- // 例の議論以降，FrontPage を書き換える準備としてサイトマップを整理してきました． -->
<!-- // だいたい移行作業が完了したので，FrontPage を書き換えた次第です． -->
<!-- // さすがに書き換えすぎたでしょうか？ - - アセトアミノフェン -->

### <em>緊急の注意</em>（OS X El Capitan に向けて） {#oe4ce14c}

2015年10月1日（日本時間）より正式に配布される OS X 10.11 El Capitan については，和文フォントの構成が大幅に変更されていることから，TeX Live 側の対応が完全ではありません。

- pTeX / upTeX でヒラギノフォントを利用することは，適切に設定すれば可能です（[別の場所](</TeX Live/Mac/#elcapitan>)で解説します；小川版 Drag &amp; Drop UpTeX は既定で設定完了）。
- LuaTeX-ja でヒラギノフォントを利用するには [LuaTeX beta-0.81.0 以降](/LuaTeX/) に更新する必要があります。
- 游フォントを利用することは困難です（游明朝体のフォントの形式が特殊であるため，現状では工夫しても限定的な利用しかできません）。
- Ghostscript でヒラギノフォントを利用することはできません。

これらのことを考慮し，El Capitan へのアップグレードは慎重に行ってください。
詳細は [OS X El Capitan への対応](</TeX Live/Mac/#elcapitan>) も参照してください。
上の情報を知らずに El Capitan をインストールしてしまった方は[こちら](</TeX Live/Mac/#y64b5891>)を参照してください。

なお，MacTeX-2014 および BasicTeX-2014 以前をインストールしている場合，El Capitan にアップグレードすると /usr/texbin に作成されているシンボリックリンクは /usr/texbin/ から /Previous System/usr/texbin/ に強制移転されてしまいます。

### TeX, LaTeX とは？ {#la57baab}

TeX はフリーの「<strong>組版システム</strong>」です．すなわち，活版印刷のような「文字や図版などの要素を紙面に配置する」という作業をコンピュータで行います．

LaTeX は TeX の上に構築されたフリーの文書処理システムです．TeX は「組版のために開発された言語」でもあり，そのままでは使いにくい点もあるので，LaTeX では一般的な文書作成に便利な機能拡張がなされています．[はじめての方へ](</はじめての方へ/>)もお読みください．

### TeX をインストールしよう {#w774cf70}

現在，日本国内では [TeX Live](</TeX Live/>) または [W32TeX](/W32TeX/) というディストリビューションが多く用いられています．詳しいインストール方法は，[TeX 入手法](</TeX入手法/>) を参照してください．

### TeX 用の統合環境・エディタを使おう {#hb6b8133}

TeX はテキストデータを処理しますが，TeX そのものにエディタ機能はありません．入力支援や作業効率化などの TeX を使いやすくする機能を備えた統合環境やエディタを利用するとよいでしょう．

- [TeXworks](/TeXworks/), [TeXShop](/TeXShop/), [TeXstudio](/TeXstudio/), [LyX](/LyX/)
- その他：[TeX 用統合環境やエディタ](</TeX用エディタ/>)
    <!-- ここに並べる統合環境は -->
    <!-- 1. TeX ディストリビューションにバンドルされているもの (TeXworks, TeXShop) -->
    <!-- 2. そうではないが，広く使われていて TeX Wiki にも情報が充実しているもの -->
    <!-- の順のつもり．従来の「アルファベット順」は無意味なので変更． -->

### LaTeX 入門 {#he46a5a4}

LaTeX の使い方の簡単な解説は [LaTeX 入門](</LaTeX入門/>) をご覧ください．TeX レベルの解説は [TeX 入門](</TeX入門/>)にあります．詳しい良書も多数 [TeX の本](</TeXの本/>) にまとめてあります．

### 関連ツール・よく用いられるパッケージなど {#gf3789cb}

TeX が組版機能を担う一方で，実際の処理には TeX 以外にも多くのツールが関わってきます．[TeX と「TeX 以外」](</TeX と「TeX 以外」/>) で具体例を見ることができます．また，LaTeX の機能を拡張する代表的な[パッケージ](</パッケージ/>)も以下にまとめられています．

- [描画・グラフツール](</描画・グラフツール/>)，[プレゼンツール](</プレゼンツール/>)，[変換ツール](</変換ツール/>)
- [目的別パッケージ簡易リファレンス](</目的別パッケージ簡易リファレンス/>)
- [TeX が苦手とする処理](</TeXが苦手とする処理/>)

### TeX 処理系について {#d8f42d41}

Unicode 対応やその他の拡張を施した新たな TeX 処理系が開発されてきました．

- [TeX](/TeX/)
- [pTeX と多言語処理](</pTeXと多言語処理/>)
- [e-TeX](/e-TeX/), [e-pTeX](/e-pTeX/), [e-upTeX](/upTeX,upLaTeX/), [pTeX-ng](/pTeX-ng/)
- [pdfTeX](/pdfTeX/)
- [XeTeX](/XeTeX/)
- [LuaTeX](/LuaTeX/), LuaJITTeX
- マクロパッケージ：[LaTeX](/LaTeX/), [ConTeXt](/ConTeXt/)

<!-- *** TeX 処理系を変更する際にはソースにも変更が必要となることがあります．例えば，従来 pLaTeX を用いていたのを upLaTeX に変更する際には，以下の変更を施すことで upLaTeX 対応になります． [#j08ab319] -->
<!--  -->
<!-- -ドキュメントクラスを upLaTeX 対応のものに変更（[[e-upTeX>upTeX,upLaTeX]] も参照） -->
<!-- \documentclass{jsarticle} → \documentclass[uplatex]{jsarticle} -->
<!-- \documentclass{tarticle} → \documentclass{utarticle} -->
<!-- -otf パッケージを用いているならば，uplatex オプションを加える（[[OTF]] も参照） -->
<!-- \usepackage{otf} → \usepackage[uplatex]{otf} -->
<!--  -->
<!-- 多くの市販の参考書が pLaTeX ベースで，upLaTeX への移行が簡単であることが -->
<!-- 意外と知られておらず，「ネットで調べる情報」の上位に来るのではないかと思い， -->
<!-- FrontPage に書き加えました． -->
<!--  -->
<!-- FrontPageにおいておく内容とは思えないのでコメントアウトしてみます． -->

### エラーに遭遇したときは {#d1cf258f}

まずは表示されているエラー・警告メッセージを読んでみてください．

- [TeX のエラーメッセージ](</TeX のエラーメッセージ/>), [LaTeX のエラーメッセージ](</LaTeX のエラーメッセージ/>), [LaTeX の警告メッセージ](</LaTeX の警告メッセージ/>), [LaTeX コマンドの誤用例](</LaTeX コマンドの誤用例/>)

### それでも困ったときは {#t6f648b9}

TeX Wiki のページに，過去に同じような質問がないか探してみてください．過去によくあった質問や回答は[よくある質問](</よくある質問/>)にまとめられています．

- [質問のしかた](</質問のしかた/>)/[回答のしかた](</回答のしかた/>)
- [古い情報](</古い情報/>)

### その他 {#uadd29af}

- [用語・略語集](</用語・略語集/>)
- [ご意見はこちらへ](</ご意見はこちらへ/>)
- [著作権](</著作権/>)

### 関連リンク {#u5d47b59}

- [国内リンク](</国内リンク/>)
- [海外リンク](</海外リンク/>)
- [CTAN](/CTAN/)

## TeX 関連情報 <span style="font-size:10px">（ユーザ名・パスワードは左の<span style="color:#FF2800;background-color:white;"><strong>赤色の文</strong></span>を参照）</span> {#i40caa06}

<span style="font-size:10px"><em>ここは検索ボックスではありません。</em></span>

{{< include "コメント/FrontPage" >}}

★↑ TeX 関連情報をご提供ください
（ユーザ名・パスワードは左の<span style="color:#FF2800;"><strong>赤色の文</strong></span>を参照）。
