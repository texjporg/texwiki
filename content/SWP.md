---
title: "SWP"
url: "/SWP/"
date: 2004-09-22T23:41:40Z
pukiwiki: "SWP"
---

# SWP

## [Scientific WorkPlace](http://www.mackichan.com/) {#u14e70e6}

\[FIXME\] かなり古い内容です。

### はじめに {#z3dc0f35}

Scientific WorkPlace は文書処理システム LaTeX
と数式処理・数値計算・グラフィックシステム Maple V
をワープロ風の統合環境にしたものです。
[MacKichan Software, Inc.](http://www.mackichan.com/)
が開発し，
[株式会社ライトストーン](http://www.lightstone.co.jp/)
が日本語化して販売しています。
マニュアルもすべて日本語です。

なお，Scientific WorkPlace から Maple を除いた Scientific Word，
LaTeX を除いた Scientific Notebook もあります。
ビューア部分 Scientific Viewer は
[MacKichan](http://www.mackichan.com/)
から無償ダウンロードできます。

### インストール {#o4a30792}

一般の Windows のソフトと同様にインストーラで簡単にインストールできます。

インストールしただけではビューア機能しか使えないようになっています。
ライセンスを設定する方法は何通りか用意されていますが，インターネットを使うことにしました。
「ヘルプ」—「登録」で必要事項を記入します。
シリアル番号を入れても「間違っています」と出てしまいましたが，
単に所属欄を入れなかっただけのようです。
標準のブラウザが立ち上がり，再度送信すればライセンス情報が表示されます。
この全文またはライセンス部分を選択して「編集」—「コピー」し，
いったん Scientific WorkPlace
を終了してから起動するとライセンスが設定されるはずなのですが，どうやら私の環境の
Internet Explorer
ではこの方法ではクリップボードにコピーされないようです。
いろいろやっているうちに，メールでもライセンス情報が送られてきたので，
そちらのライセンス部分を選択して「編集」—「コピー」すればうまくいきました。

日本語をタイプセットするためには，別途 pLaTeX と dviout
をインストールしておき，これらを呼び出すように Scientific WorkPlace
を設定しなければなりません。
その方法は同梱の SWreadme.tex に書かれています。
pLaTeX と dviout は乙部さんの本のものが想定されているようですが，
他の本に付いているものやインターネットでダウンロードしたものでもまったく同様に使えます。

仕組みは，Scientific WorkPlace の生成するユニコード（16進表記）をシフトJISに変換し
（SWreadme.tex にはJISコードに変換すると書かれています），
これを通常のシフトJIS対応の platex コマンドで処理し，dviout で表示・印刷するというものです。

### 不具合 {#w74f19d6}

#### Windows 7 SP1 で CPU 使用率が 100% になる {#ebd10526}

- [100% CPU Load | MacKichan Software User Community](http://forum.mackichan.com/node/344)

### 試用してみて {#kac06ad3}

たいへん快適です（そのうちもっと詳しく書きます）。
