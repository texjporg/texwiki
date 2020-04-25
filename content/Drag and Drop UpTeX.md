---
title: "Drag and Drop UpTeX"
url: "/Drag and Drop UpTeX/"
date: 2016-04-17T03:39:30Z
pukiwiki: "Drag and Drop UpTeX"
---

# Drag and Drop UpTeX

## [Drag &amp; Drop UpTeX](http://www2.kumagaku.ac.jp/teacher/herogw/) {#ha7286b6}

Drag &amp; Drop UpTeX は，小川弘和さんによって配布されている macOS 専用 TeX ディストリビューションです。

構成はコンパクト（具体的には TeX Live scheme-small に collection-langjapanese + α）ですが，pLaTeX と upLaTeX を使うには十分です。
また，日本語フォントのセットアップを自動で行う GUI も付属しているため，日本語フォントの設定を最低限の操作で完了させることができます。
TeX 環境をアプリケーション・バンドルのなかに包むことで，任意の場所に Drag &amp; Drop でインストールし，最低限の操作で必要な設定も完了します。

### 動作環境 {#s8a76771}

- macOS 10.15 Catalina
- macOS 10.14 Mojave
- macOS 10.13 High Sierra
- macOS 10.12 Sierra
- OS X 10.11 El Capitan
- OS X 10.10 Yosemite

<!-- いちばん下に「派生版」とだけ書いても，日本向けだと伝わらないし， -->
<!-- 誰も注目しないだろうと思うのでトップに移動。 - - アセトアミノフェン (2016-06-22) -->

### Drag &amp; Drop UpTeX のインストールと設定 {#e30d8e71}

添付の [ReadMe.pdf](http://www2.kumagaku.ac.jp/teacher/herogw/archive/ReadMe.pdf) をよくお読みください。
アプリケーションファイル名は UpTeX.app です。
基本的にはこれを /Applications 以下などにインストールするとよいでしょう。

TeX Live のアップデートは，環境設定パネルから「パッケージの管理」ボタンをクリックしてパッケージ管理ウィンドウを起ちあげ「全て更新」ボタンをクリックします。
（これはバックグラウンドで [tlmgr](/tlmgr/) をターミナルに実行させています。）

以下のインストールのやり方などの事例も参照してください。

- [OS X El Capitanで複数のエンコーディングに対応したTeXの設定方法](https://ryorsk.wordpress.com/2016/03/26/tex_for_el_capitan/)

### Drag &amp; Drop UpTeX で LuaTeX-ja を使う {#vf102fe3}

これは BasicTeX + collection-langjapanese と状況はほぼ同じです。
[BasicTeX + collection-langjapanese で LuaTeX-ja を使う](/BasicTeX/#f2230bb1) を参照してください。

### 古い版（20160614 以前）を利用していた場合の注意 {#jc002f21}

UTeX20160907.dmg 以降の版は，TeX Live scheme-small + collection-langjapanese を収録していますが，UTeX20160614.dmg までは BasicTeX + collection-langjapanese を収録していました。
この場合，LaTeX や pLaTeX，upLaTeX を tlmgr で更新しても，フォーマットファイルが自動で更新されないという問題があります（これは元となっている [BasicTeX](/BasicTeX/) の仕様です）。

- 参考：[forum:2018](https://okumuralab.org/tex/mod/forum/discuss.php?d=2018)

このため，20160614 までの UpTeX.app をインストールしている場合は，ご自身で

```
~/Library/texlive/2016basic/texmf-var/web2c
```

以下に残っている，拡張子 .fmt のファイル (platex.fmt, etc.) を削除してください。
texlive フォルダごと削除してしまってもかまいません。
そのうえで，最新版 の Drag &amp; Drop UpTeX をインストールしてください。

### 過去の情報 {#a33a457a}

[ReadMe.pdf](http://www2.kumagaku.ac.jp/teacher/herogw/archive/ReadMe.pdf) の更新履歴と公式サイトの What's NEW を参照。

- Drag &amp; Drop UpTeX 20200423 は TeX Live 2020 scheme-small + collection-langjapanese + α。
- Drag &amp; Drop UpTeX 20190717 は TeX Live 2019 scheme-small + collection-langjapanese + α。
- Drag &amp; Drop UpTeX 20180702 は TeX Live 2018 scheme-small + collection-langjapanese + α。
- Drag &amp; Drop UpTeX 20180429 は TeX Live 2017 scheme-small + collection-langjapanese。
- Drag &amp; Drop UpTeX 20160907 は BasicTeX を使わず，「TeX Live 2016 scheme-small + collection-langjapanese」を収録しています ([forum:2018](https://okumuralab.org/tex/mod/forum/discuss.php?d=2018)) 。
- Drag &amp; Drop UpTeX 20160614 までは「BasicTeX + collection-langjapanese」を収録していました。
- Drag &amp; Drop UpTeX は，2015年9月10日の UTeX20150910.dmg からは TeX Live ベースになりました。
