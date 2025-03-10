---
title: "Drag and Drop UpTeX"
url: "/Drag and Drop UpTeX/"
date: 2016-04-17T03:39:30Z
pukiwiki: "Drag and Drop UpTeX"
---

# Drag and Drop UpTeX

## [Drag &amp; Drop UpTeX](http://www2.kumagaku.ac.jp/teacher/herogw/) {#ha7286b6}

Drag &amp; Drop UpTeX は，小川弘和さんによって配布されている macOS 専用 TeX ディストリビューションです。

構成はコンパクト（具体的には TeX Live scheme-small に collection-langjapanese + α）ですが，upLaTeX を使うには十分です。
また，日本語フォントのセットアップを自動で行う GUI も付属しているため，日本語フォントの設定を最低限の操作で完了させることができます。
TeX 環境をアプリケーション・バンドルのなかに包むことで，任意の場所に Drag &amp; Drop でインストールし，最低限の操作で必要な設定も完了します。

### 動作環境 {#s8a76771}

- macOS 10.14 Mojave 以降

<!-- いちばん下に「派生版」とだけ書いても，日本向けだと伝わらないし， -->
<!-- 誰も注目しないだろうと思うのでトップに移動。 - - アセトアミノフェン (2016-06-22) -->

### Drag &amp; Drop UpTeX のインストールと設定 {#e30d8e71}

添付の [ReadMe.pdf](http://www2.kumagaku.ac.jp/teacher/herogw/archive/ReadMe.pdf) をよくお読みください。
アプリケーションファイル名は UpTeX.app です。
基本的にはこれを /Applications 以下などにインストールするとよいでしょう。

TeX Live のアップデートは，環境設定パネルから「パッケージの管理」ボタンをクリックしてパッケージ管理ウィンドウを起ちあげ「全て更新」ボタンをクリックします。
（これはバックグラウンドで [tlmgr](/tlmgr/) をターミナルに実行させています。）

以下のインストールのやり方などの事例も参照してください。

- [macOSでLaTeX環境（Drag &amp; Drop UpTeXを使って）](https://tsuu32.hatenablog.com/entry/2019/08/12/024301)

### Drag &amp; Drop UpTeX で LuaTeX-ja を使う {#vf102fe3}

これは BasicTeX + collection-langjapanese と状況はほぼ同じです。
[BasicTeX + collection-langjapanese で LuaTeX-ja を使う](/BasicTeX/#f2230bb1) を参照してください。

### 更新履歴 {#a33a457a}

[ReadMe.pdf](http://www2.kumagaku.ac.jp/teacher/herogw/archive/ReadMe.pdf) の更新履歴と公式サイトの What's NEW を参照。
