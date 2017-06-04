---
title: "Drag and Drop UpTeX"
url: "/Drag and Drop UpTeX/"
date: 2016-04-17T03:39:30Z
pukiwiki: "Drag and Drop UpTeX"
---

# Drag and Drop UpTeX

## [Drag &amp; Drop UpTeX (UpTeX.app)](http://www2.kumagaku.ac.jp/teacher/herogw/) {#ha7286b6}

Drag &amp; Drop UpTeX は，小川弘和さんによって配布されている TeX Live scheme-small + texlive-collection-langjapanese ベースの macOS 専用 TeX ディストリビューションです。
OS X 10.11 El Capitan / 10.10 Yosemite 環境になるべくコンパクトな日本語 TeX 処理系を簡単に導入するためにパッケージされています。
あらかじめ TeX Live scheme-small に collection-langjapanese を追加した状態で配布されており，日本語フォントの設定を最低限の操作で完了させることができます。
TeX 環境をアプリケーション・バンドルのなかに包むことで，任意の場所に Drag &amp; Drop でインストールし，最低限の操作で必要な設定も完了します。

### History {#a33a457a}

Drag &amp; Drop UpTeX は，20160907 版以降は BasicTeX を使わず，「TeX Live 2016 scheme-small + collection-langjapanese」を収録しています ([forum:2018](https://okumuralab.org/tex/mod/forum/discuss.php?d=2018)) 。

Drag &amp; Drop UpTeX は，20160614 版までは「BasicTeX + collection-langjapanese」を収録していました。

Drag &amp; Drop UpTeX は，2015年9月10日の UTeX20150910.dmg からは TeX Live ベースになりました。

Drag &amp; Drop UpTeX は，2011年公開の UTeX20111010.dmg までは teTeX-3.0 / ptetex3 ベースでした。

<!-- いちばん下に「派生版」とだけ書いても，日本向けだと伝わらないし， -->
<!-- 誰も注目しないだろうと思うのでトップに移動。 - - アセトアミノフェン (2016-06-22) -->

### Drag &amp; Drop UpTeX のインストールと設定 {#e30d8e71}

添付の README.pdf をよくお読みください。
アプリケーションファイル名は UpTeX.app です。
基本的にはこれを /Applications 以下などにインストールするとよいでしょう。

インストールしたら，[dvipdfmx](/dvipdfmx/) による PDF 作成で埋め込む日本語フォントを設定します。
UpTeX.app をダブルクリックで起動し，メニューバーの「UpTeX」-「環境設定」から環境設定パネルを開きます。
「dvipdfmx のフォント」のプルダウンメニューからお使いの OS X のバージョン（El Capitan または Yosemite）に合わせたヒラギノフォントを選択するとよいでしょう。
（これはバックグラウンドで updmap-sys と mktexlsr を実行します。あらかじめヒラギノフォントのシンボリックリンクを作成してあるため，簡単に設定を完了することができます。）

TeX Live のアップデートは，同じく環境設定パネルから「TeX コンポーネントのアップデート」で行います。
（これはバックグラウンドで [tlmgr](/tlmgr/) をターミナルに実行させています。）

以下のインストールのやり方などの事例も参照してください。

- [El CapitanでDrag &amp; Drop UpTeX を使って日本語TeX環境を整える](http://ijairai.hatenablog.com/entry/2015/10/24/170311)
    - 当該ページの TeXShop の設定（特に upTeX (ptex2pdf) を使うのに ShiftJIS に設定変更している部分）は誤りだが、他のスクリーンショットは参考になる。
        - 具体的にどのような点が誤りなのでしょうか？

### 古い版（20160614 以前）を利用していた場合の注意 {#jc002f21}

UTeX20160907.dmg 以降の版は，TeX Live 2016 scheme-small + collection-langjapanese を収録していますが，UTeX20160614.dmg までは BasicTeX + collection-langjapanese を収録していました。
この場合，LaTeX や pLaTeX，upLaTeX を tlmgr で更新しても，フォーマットファイルが自動で更新されないという問題があります（これは元となっている [BasicTeX](/BasicTeX/) の仕様です）。

- 参考：[forum:2018](https://okumuralab.org/tex/mod/forum/discuss.php?d=2018)

このため，20160614 までの UpTeX.app をインストールしている場合は，ご自身で

```
~/Library/texlive/2016basic/texmf-var/web2c
```

以下に残っている，拡張子 .fmt のファイル (platex.fmt, etc.) を削除してください。
texlive フォルダごと削除してしまってもかまいません。
そのうえで，最新版 20160907 以降のものをインストールしてください。

### Drag &amp; Drop UpTeX で LuaTeX-ja を使う {#vf102fe3}

これは BasicTeX + collection-langjapanese と状況はほぼ同じです。
[BasicTeX + collection-langjapanese で LuaTeX-ja を使う](/BasicTeX/#f2230bb1) を参照してください。
