---
title: "BasicTeX"
url: "/BasicTeX/"
date: 2015-09-11T22:27:28Z
pukiwiki: "BasicTeX"
---

# BasicTeX

## [BasicTeX](http://tug.org/mactex/morepackages.html) {#basictex}

BasicTeX は [TeX Live](</TeX Live/>) のサブセットで，OS X 専用の TeX ディストリビューションです。
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

[More Packages - MacTeX](http://tug.org/mactex/morepackages.html) または[ミラーサイト (MacTeX)](/MacTeX/#mirror) から BasicTeX.pkg をダウンロードします。

BasicTeX のインストールの概略は以下のとおりです。

1. ダウンロードした BasicTeX.pkg をダブルクリックしてインストールします。
    - <strong>手動でパスを通す必要はありません</strong>。
        ターミナルで以下のコマンドを実行し，返ってきた PATH に <strong>/Library/TeX/texbin</strong> が含まれていれば大丈夫です。

        ```
        $ echo $PATH
        ```

        - <strong>ターミナル初心者への注意：</strong> 上記コマンドの先頭の <strong>$</strong> はターミナルを起動すると示される「コマンド入力待ちの記号（プロンプト）」を表します。従って，実際に入力するのは echo $PATH です。
        - 以前に MacPorts または Fink からインストールした TeX が残っている場合は，パスの優先順位の再設定が必要です。（→[Multiple TeX Distributions](http://tug.org/mactex/multipletexdistributions.html)）
1. ターミナル上で sudo tlmgr update --self --all を実行し，最新版までアップデートします。（→[tlmgr を使用してのアップデート](</TeX Live/Mac/#p3c663c9>)）
1. BasicTeX には標準で日本語 pTeX / upTeX が入っていませんので，collection-langjapanese を追加でインストールします。

    ```
    sudo tlmgr install collection-langjapanese
    ```

    collection-langjapanese をインストールすれば，依存関係で collection-langcjk もインストールされます。

1. 日本語環境を整えます。
    - ヒラギノフォントを TeX でも利用可能にします。（→[日本語環境の整備](</TeX Live/Mac/#i9febc9b>)）
        - 以前の TeX Live で既に設定済みの場合は，この手順は不要です。
        - この設定をしなくても日本語は使用できますし，IPAexフォント/IPAフォントを埋め込んだPDFの作成もできますが，高品質なフォントであるヒラギノが使える OS X ならばヒラギノを利用可能にする設定は有用でしょう。
    - sudo kanji-config-updmap-sys を実行して PDF に埋め込むフォントを指定します。（→[kanji-config-updmap(-sys) ](</TeX Live/Mac/#hf34afcc>)）
        - 新規インストール（アップグレード）時にはフォントが埋め込まれない設定となっているため，作成された PDF が「ファイルが壊れている」と見なされて開けないことがあります。
        - updmap-sys も実行されて各種の map ファイルが自動生成されます。
1. <strong>Happy LaTeXing!</strong>

[Ghostscript](/Ghostscript/) は別途インストールする必要があります。
また，[TeXShop](/TeXShop/) などの追加アプリケーションをインストールするとよいでしょう。

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
