---
title: "TeX入手法"
url: "/TeX入手法/"
date: 2004-09-04T03:06:58Z
pukiwiki: "TeX入手法"
---

# TeX入手法

## TeX 入手法 {#webfdcfe}

<!-- やっぱり TeX のインストールの案内ページとして，このまとめは必要だと判断し， -->
<!-- 同じ「TeX入手法」というページ名で復活させました． - - アセトアミノフェン (2015-01-16) -->

LaTeX を使うためには，まずお使いのコンピュータで TeX の環境を整えましょう。
コンピュータに TeX をインストールして使えるようになるまでの大まかな流れとしては

1. TeX の処理系（“TeX システム”）のインストールと設定
1. 統合環境またはエディタのインストールと設定

が必要です。
TeX の処理系（プログラム）や拡張マクロなどの一式を集めたものを「TeX ディストリビューション」といい，LaTeX の原稿（ソース）の作成や TeX 関連プログラムを実行する作業を簡略化してくれるのが「統合環境」です。

しばしば勘違いされますが，TeX では「TeX の処理系」と「統合環境やエディタ」は別物です。
また，場合によっては「TeX の処理系をインストールするためのツール」が用意されていることもありますが，それもまた別物です。
以下の解説ページに従って正しくインストールと設定を行いましょう。

***

***

### TeX のインストール {#w6f35a2c}

詳しいインストール方法は，利用する OS にあわせた解説ページを参照してください．

- [Microsoft Windows](</Microsoft Windows/>)
    <!-- -[[Cygwin]] -->

- [OS X](/Mac/)
- [Linux](/Linux/)
- [BSD](/BSD/)
- [Android](/Android/)
- [iOS](/iOS/)

入門書に付属するインストーラからも可能です．

- [［改訂第6版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/)

インストールせずに Web で試してみることもできます．

- [TeX を使ってみよう](http://oku.edu.mie-u.ac.jp/~okumura/texonweb/)
- [TeX を Web で](</TeXをWebで/>)

### 主要な TeX ディストリビューション {#ef41d307}

TeX ディストリビューションごとの解説ページです．
現在，日本国内では [TeX Live](</TeX Live/>) または [W32TeX](/W32TeX/) というディストリビューションが多く用いられています．
OS X 用の [MacTeX](</TeX Live/Mac/#mactex>) は TeX Live をベースにしたものです．

- <strong>[TeX Live](</TeX Live/>)</strong> (for Windows, Cygwin, OS X, Linux)
- <strong>[W32TeX](/W32TeX/)</strong> (for Windows)
- <strong>[MacTeX](</TeX Live/Mac/#mactex>)</strong> (for OS X)
- [MiKTeX](/MiKTeX/) (for Windows)
- [BasicTeX](</TeX Live/Mac/#basictex>) (for OS X)

### インストール時のよくあるトラブル・勘違い {#l1a033e5}

よく「TeXworks をインストールしましたが，日本語が出ません。TeX のインストールに失敗したのでしょうか。」のような質問をみかけますが，TeXworks はあくまでユーザが TeX を使いやすいようにいろいろと手助けしてくれるエディタ（統合環境，フロントエンド）にすぎません。
ここがワープロソフトと LaTeX で仕組みが大きく違う点です（[はじめての方へ](</はじめての方へ/>)参照）が，LaTeX を使ううちに慣れていってください。

よくある勘違い・失敗例を挙げておきます。

- 「TeX2img をインストールしましたが，パスが通っていないなどのエラー」（[OKWave の質問](http://okwave.jp/qa/q4200980.html)より）
    - 数式を簡単に画像化できると思ってインストールを試みたらしい。
    - 統合環境の一つにすぎない [TeX2img](/TeX2img/) だけをダウンロード・展開し，TeX 処理系をインストールする必要性に気づいていない失敗例。

- 「以前はpLaTex2eでしたが，最近TeXWorksに乗り換えました」（フォーラムの質問 [forum:655](https://okumuralab.org/tex/mod/forum/discuss.php?d=655) より）
    - これも「TeX 関連プログラム」と「統合環境」の区別がついていない例。

インストール時のトラブルも[よくある質問](</よくある質問/>)や [TeX フォーラム](http://oku.edu.mie-u.ac.jp/tex/)，[TeX Q &amp; A](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/) の過去ログを見れば解決するかもしれません。
