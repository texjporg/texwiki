---
title: "BasicTeX"
url: "/BasicTeX/"
date: 2015-09-11T22:27:28Z
pukiwiki: "BasicTeX"
---

# BasicTeX

## [BasicTeX](http://tug.org/mactex/morepackages.html) {#basictex}

BasicTeX は TeX Live のサブセットで，OS X 専用の TeX ディストリビューションです。
BasicTeX は TeX Live の scheme-small に対応し，LaTeX の文書作成に必要な最低限のパッケージと [pdfTeX](/pdfTeX/)，[LuaTeX](/LuaTeX/)，[XeTeX](/XeTeX/) などが含まれています。
BasicTeX には [e-pTeX](/e-pTeX/) や [e-upTeX](/upTeX,upLaTeX/) が含まれていませんので，日本語の LaTeX 文書を作成するためには別途 collection-langjapanese をインストールします。
collection-langjapanese をインストールすれば，[jsclasses](/jsclasses/) や [OTF](/OTF/)， [BXjscls](/BXjscls/)，[LuaTeX-ja](/LuaTeX-ja/) も利用可能になります。

なお，「小川版 Drag &amp; Drop UpTeX」はあらかじめ BasicTeX に collection-langjapanese を追加した状態で配布されており，日本語フォントの設定を最低限の操作で完了させることができます。

***

***

### [小川版 Drag &amp; Drop UpTeX (UpTeX.app)](http://www2.kumagaku.ac.jp/teacher/herogw/) {#ha7286b6}

Drag &amp; Drop UpTeX は，小川弘和さんによって配布されている BasicTeX + texlive-collection-langjapanese ベースの OS X 専用 TeX ディストリビューションです。
[^1]
OS X 10.10 Yosemite / 10.11 El Capitan 環境になるべくコンパクトな日本語 TeX 処理系を簡単に導入するためにパッケージされています。
TeX 環境をアプリケーション・バンドルのなかに包むことで，任意の場所に Drag &amp; Drop でインストールし，最低限の操作で必要な設定も完了します。

#### 小川版 Drag &amp; Drop UpTeX のインストールと設定 {#e30d8e71}

添付の README.pdf をよくお読みください。
アプリケーションファイル名は UpTeX.app です。
基本的にはこれを /Applications 以下などにインストールするとよいでしょう。

インストールしたら，[dvipdfmx](/dvipdfmx/) による PDF 作成で埋め込む日本語フォントを設定します。
UpTeX.app をダブルクリックで起動し，メニューバーの「UpTeX」-「環境設定」から環境設定パネルを開きます。
「dvipdfmx のフォント」のプルダウンメニューからお使いの OS X のバージョン（Yosemite または El Capitan）に合わせたヒラギノフォントを選択するとよいでしょう。
（これはバックグラウンドで updmap-sys と mktexlsr を実行します。あらかじめヒラギノフォントのシンボリックリンクを作成してあるため，簡単に設定を完了することができます。）

TeX Live のアップデートは，同じく環境設定パネルから「TeX コンポーネントのアップデート」で行います。
（これはバックグラウンドで [tlmgr](/tlmgr/) をターミナルに実行させています。）

### （本家）BasicTeX のインストール {#i5822f30}

[More Packages - MacTeX](http://tug.org/mactex/morepackages.html) または[ミラーサイト (MacTeX)](</TeX Live/Mac/#mirror>) から BasicTeX.pkg をダウンロードします。
ダウンロードした BasicTeX.pkg をダブルクリックしてインストールします。
BasicTeX には標準で日本語 pTeX / upTeX が入っていませんので，collection-langjapanese を追加でインストールしてください。

```
sudo tlmgr install collection-langjapanese
```

collection-langjapanese をインストールすれば，依存関係で collection-langcjk もインストールされます。

#### インストールの事例 {#q65e25e8}

以下のインストール事例も参考になります。

- [BasicTeX-2015でRe:VIEWの環境を用意する](http://qiita.com/takahashim/items/74d6d1de557fad09a879)

<!-- 念のため TeX Live 2014 対応のものも残しておきます． -->
<!-- -[[RStudioから使えるR Markdownで日本語のPDFを作成する:http://bicycle1885.hatenablog.com/entry/2014/10/15/032024]] -->
<!-- -[[Macbook air に texlive2014 をインストールする:http://d.hatena.ne.jp/pyopyopyo/20140815/p1]] -->

#### アップデート {#zbd108c2}

BasicTeX は [tlmgr](/tlmgr/) を用いてアップデートできます。

```
$ sudo tlmgr update --self --all
$ sudo tlmgr install collection-langjapanese
```

[^1]: 2011年公開の UTeX20111010.dmg までは teTeX-3.0 / ptetex3 ベースでしたが，2015年9月10日の UTeX20150910.dmg からは TeX Live ベースになりました。
