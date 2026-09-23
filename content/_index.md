---
title: "TeX Wiki"
url: "/"
date: 2014-07-10T02:13:46Z
description: "TeX, LaTeX, PDF などに関する読者参加型ページです．"
keywords: ["TeX", "LaTeX", "LaTeX2e", "pTeX", "pLaTeX", "pLaTeX2e", "upTeX", "upLaTeX", "upLaTeX2e", "pdfTeX", "pdfLaTeX", "LuaTeX", "LuaLaTeX", "LuajitTeX", "XeTeX", "XeLaTeX", "DVI", "PostScript", "PDF"]
pukiwiki: "FrontPage"
---

# FrontPage

<span style="font-size:30px"><strong>TeX Wiki へようこそ！</strong></span>

<!-- * FrontPage [#pe4f375a] -->

TeX Wiki は，[TeX](/TeX/)，[LaTeX](/LaTeX/)，[PDF](/PDF/) などに関する情報を提供する，読者参加型ページです．誰でも編集できますので，「誤りを見つけた」「読みづらいので直したい」「最新情報を追記したい」などあれば，気軽に編集して下さい．編集に必要なパスワードはこのページの左の<span style="color:#FF2800;"><strong>赤色の文</strong></span>に書いてあります．

編集方針は[TeX Wiki編集方針](</TeX Wiki編集方針/>)にあります．また，編集方針についてのご意見がありましたら [TeX Forum での議論](https://okumuralab.org/tex/mod/forum/discuss.php?d=1485)の方にお寄せください．

- [サイトマップ](</サイトマップ/>)
- [ページの一覧](</ページ一覧/>)

<!-- % この下は要編集．この上も要編集かも -->
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

<!-- インストールまでが長いように思えたのでダイエットしてみました． -->

<!-- ** お知らせ [#p837b6a7] -->
<!-- 増殖しそうだったので少し消しておきます。 -->
<!-- - macOS 10.13 High Sierra でヒラギノフォントを使うための一連のサポートファイルは，諸事情により TeX Live 2017 の期間中にはリリースされない見込みです。ヒラギノフォントを使いたい場合は，非公式ではありますが，山本さんによる[[［改訂第7版］LaTeX2e美文書作成入門 ヒラギノフォントパッチ:https://qiita.com/munepi/items/c4274da0646b3e785c7f]]を参考に設定してください。 -->
<!-- - 【重要】2017/06/01 以降の dvipdfmx-def パッケージ（LaTeX の graphics/x パッケージの dvipdfmx 用ドライバ）には、それ以前のバージョンと比べて非互換な変更が含まれます。このため、PDF 画像の挿入した場合に従来と異なる出力になる可能性があります。 -->
<!-- - - [[graphicx パッケージの仕様変更（dvipdfmx オプション）>forum:2211]]~ -->
<!-- - - [[graphicxパッケージでのPDF画像挿入の仕様が変わってヤバイ件:http://qiita.com/zr_tex8r/items/a0516f211831a3fc2c0e]] -->
<!-- - 【重要】2016/11/30より前の TeX Live と W32TeX において TeX 実行時に任意の外部コマンドが実行できてしまうセキュリティ上の問題が発覚しました．''可能な場合は，速やかに TeX Live のアップデートを実行してください''．この問題についての詳細は[[こちら>外部コマンドの実行#security]]を参照してください． -->
<!-- - [[奥村晴彦先生:https://okumuralab.org/~okumura/]]が運営なさっていました TeX Wiki は，2016 年 1 月 20 日をもって，[[日本語 TeX 開発コミュニティ:https://texjp.org/]]上の https://texwiki.texjp.org/ に移転しました． -->
<!-- - OS X 10.10 Yosemite 以前で TeX Live 2015 以前または MacTeX-2015 以前を使っている場合， macOS 10.12 Sierra / OS X 10.11 El Capitan へのアップグレード後，設定作業が必要です．アップデート前に[[こちら>TeX Live/Mac#elcapitan]]をご覧ください． -->

### TeX，LaTeX とは？ {#la57baab}

TeX はフリーの「<strong>組版システム</strong>」です．すなわち，活版印刷のような「文字や図版などの要素を紙面に配置する」という作業をコンピュータで行います．

LaTeX は TeX の上に構築されたフリーの文書処理システムです．TeX は「組版のために開発された言語」でもあり，そのままでは使いにくい点もあるので，LaTeX では一般的な文書作成に便利な機能拡張がなされています．[はじめての方へ](</はじめての方へ/>)もお読みください．

### TeX をインストールしよう {#w774cf70}

詳しいインストール方法は，[TeX 入手法](</TeX入手法/>) を参照してください．OS ごとのページ：\[[Windows](</Microsoft Windows/>)\]，\[[macOS](/Mac/)\]，\[[Linux](/Linux/)\]，\[[BSD](/BSD/)\]，\[[ChromeOS](/ChromeOS/)\]，\[[Android](/Android/)\]，\[[iOS/iPadOS](/iOS/)\]．

インストールせずに Web で利用することもできます。 → [TeX を Web で](</TeXをWebで/>)（解説）

### TeX 用の統合環境・エディタを使おう {#hb6b8133}

TeX はテキストデータを処理しますが，TeX そのものにエディタ機能はありません．入力支援や作業効率化などの TeX を使いやすくする機能を備えた統合環境やエディタを利用するとよいでしょう．

- [TeXworks](/TeXworks/)，[TeXShop](/TeXShop/)，[TeXstudio](/TeXstudio/)，[LyX](/LyX/)，[Visual Studio Code](</Visual Studio Code/>) with [LaTeX Workshop](</Visual Studio Code/LaTeX/>) extension
- その他：[TeX 用統合環境やエディタ](</TeX用エディタ/>)
    <!-- ここに並べる統合環境は -->
    <!-- 1. TeX ディストリビューションにバンドルされているもの（TeXworks，TeXShop） -->
    <!-- 2. そうではないが，広く使われていて TeX Wiki にも情報が充実しているもの -->
    <!-- の順のつもり．従来の「アルファベット順」は無意味なので変更． -->

### LaTeX 入門 {#he46a5a4}

LaTeX の使い方の簡単な解説は [LaTeX 入門](</LaTeX入門/>) をご覧ください．TeX レベルの解説は [TeX 入門](</TeX入門/>)にあります．詳しい良書も多数 [TeX の本](</TeXの本/>) にまとめてあります．

### 関連ツール・よく用いられるパッケージなど {#gf3789cb}

TeX が組版機能を担う一方で，実際の処理には TeX 以外にも多くのツールが関わってきます．[TeX と「TeX 以外」](</TeX と「TeX 以外」/>) で具体例を見ることができます．また，LaTeX の機能を拡張する代表的な[パッケージ](</パッケージ/>)も以下にまとめられています．パッケージなどのマニュアルは [texdoc online documentation](https://texdoc.org/) で検索できます．

- [描画・グラフツール](</描画・グラフツール/>)，[プレゼンツール](</プレゼンツール/>)，[変換ツール](</変換ツール/>)
- [目的別パッケージ簡易リファレンス](</目的別パッケージ簡易リファレンス/>)
- [TeX が苦手とする処理](</TeXが苦手とする処理/>)

### TeX 処理系について {#d8f42d41}

Unicode 対応やその他の拡張を施した新たな TeX 処理系が開発されています．

- [TeX](/TeX/)
- [e-TeX](/e-TeX/)
- [pTeX](/pTeX/)，[upTeX](/upTeX,upLaTeX/)
- [pTeX と多言語処理](</pTeXと多言語処理/>)
- [e-pTeX](/e-pTeX/)，[e-upTeX](/upTeX,upLaTeX/)，[pTeX-ng](/pTeX-ng/)
- [pdfTeX](/pdfTeX/)，[LuaTeX](/LuaTeX/)，[LuajitTeX](/LuajitTeX/)
- [XeTeX](/XeTeX/)
- ratex
- マクロパッケージ：[LaTeX](/LaTeX/)，[ConTeXt](/ConTeXt/)

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

- [TeX のエラーメッセージ](</TeX のエラーメッセージ/>)，[LaTeX のエラーメッセージ](</LaTeX のエラーメッセージ/>)，[LaTeX の警告メッセージ](</LaTeX の警告メッセージ/>)，[LaTeX コマンドの誤用例](</LaTeX コマンドの誤用例/>)

### それでも困ったときは {#t6f648b9}

まずは[よくある質問](</よくある質問/>)や[エラーに遭遇したときは](#d1cf258f)，[それでも困ったときは](#t6f648b9)をご覧ください．また，[TeX フォーラム](https://okumuralab.org/tex/)の過去記事を検索すると，同じようなトラブルにあった方の解決策がみつかるかもしれません．もちろん Google による検索も有効です．解決策にたどり着けない場合は，[TeX フォーラム](https://okumuralab.org/tex/)で質問を行うと回答を得られるかもしれません．

- [質問のしかた](</質問のしかた/>)/[回答のしかた](</回答のしかた/>)
- [古い情報](</古い情報/>)

「トラブルを解決したい！」という場合は，<strong>「[TeX フォーラム](https://okumuralab.org/tex/)」で質問する前に「[よくある質問](</よくある質問/>)」を確認したり，「[エラーに遭遇したときは](#d1cf258f)」「[それでも困ったときは](#t6f648b9)」を参照する</strong>とすぐに答えが見つかるかもしれません．

### その他 {#uadd29af}

- [日本語TeX開発コミュニティ](</日本語TeX開発コミュニティ/>)
- [用語・略語集](</用語・略語集/>)
- [ご意見はこちらへ](</ご意見はこちらへ/>)
- [著作権](</著作権/>)

### 関連リンク {#u5d47b59}

- [国内リンク](</国内リンク/>)
- [海外リンク](</海外リンク/>)
- [CTAN](/CTAN/)

## TeX 関連情報 <span style="font-size:10px">（ユーザ名・パスワードは左の<span style="color:#FF2800;background-color:white;"><strong>赤色の文</strong></span>を参照）</span> {#i40caa06}

<span style="font-size:10px"><em>ここは検索ボックスではありません．</em></span>

{{< include "コメント/FrontPage" >}}

★↑ TeX 関連情報をご提供ください
（ユーザ名・パスワードは左の<span style="color:#FF2800;"><strong>赤色の文</strong></span>を参照）．
