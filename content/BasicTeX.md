---
title: "BasicTeX"
url: "/BasicTeX/"
date: 2015-09-11T22:27:28Z
pukiwiki: "BasicTeX"
---

# BasicTeX

## [BasicTeX](http://tug.org/mactex/morepackages.html) {#basictex}

BasicTeX は [TeX Live](</TeX Live/>) のサブセットで，macOS 専用の TeX ディストリビューションです。
BasicTeX は TeX Live の scheme-small に対応し，LaTeX の文書作成に必要な最低限のパッケージと [pdfTeX](/pdfTeX/)，[LuaTeX](/LuaTeX/)，[XeTeX](/XeTeX/) などが含まれています。
BasicTeX には [e-pTeX](/e-pTeX/) や [e-upTeX](/upTeX,upLaTeX/) が含まれていませんので，日本語の LaTeX 文書を作成するためには別途 collection-langjapanese をインストールします。
collection-langjapanese をインストールすれば，[jsclasses](/jsclasses/) や [OTF](/OTF/)， [BXjscls](/BXjscls/) も利用可能になります。 <!-- LuaTeX-ja は BasicTeX + collection-langjapanese だけではダメなので下へ移動 - - アセトアミノフェン (2016-06-22) -->

***

***

### BasicTeX のインストール {#i5822f30}

#### BasicTeX.pkg でインストール {#if691d16}

[More Packages - MacTeX](http://tug.org/mactex/morepackages.html) または[ミラーサイト (MacTeX)](/MacTeX/#mirror) から BasicTeX.pkg をダウンロードします。

BasicTeX のインストールの概略は以下のとおりです。

1. ダウンロードした BasicTeX.pkg をダブルクリックしてインストールします。
1. ターミナル上で sudo tlmgr update --self --all を実行し，最新版までアップデートします。
1. BasicTeX には標準で日本語 pTeX / upTeX が入っていませんので，collection-langjapanese を追加でインストールします。

    ```
    sudo tlmgr install collection-langjapanese
    ```

    collection-langjapanese をインストールすれば，依存関係で collection-langcjk もインストールされます。

1. ヒラギノフォントを TeX でも利用する場合は設定します。（→[macOS Sierra / OS X El Capitan での TeX Live のセットアップ](</TeX Live/Mac/#l8c867e9>)）

> - この設定をしなくても日本語は使用できますし，IPAexフォント/IPAフォントを埋め込んだPDFの作成もできます。

[Ghostscript](/Ghostscript/) は別途インストールする必要があります。

#### Homebrew でインストール {#w71ff68b}

Homebrew で BasicTeX をインストールできます。

```
$ brew cask install basictex
$ sudo tlmgr update --self --all
$ sudo tlmgr install collection-langjapanese
$ sudo tlmgr paper a4
```

<!-- ***インストールの事例 [#q65e25e8] -->

#### TeX Live 2016 以降での注意点 {#y0fc0688}

<!-- [[古い情報]] に書くべきかもしれないが，影響ある人は少ないと思われるので，直接関係ありそうなこちらに． -->

TeX Live 2015 以前でのインストール事例・解説記事では，BasicTeX に加えて

```
$ sudo tlmgr install ptex
```

などとすれば日本語環境ができるとしているものがあります。
確かに 2015 以前では ptex をインストールすれば platex も使えるようになっていたのですが，
2016 以降では platex は platex パッケージに分離されました。
このため，ptex をインストールしただけでは platex が使えるようにはなりません。

日本語環境を構成するには，このページで解説しているように collection-langjapanese を
インストールすることをおすすめします。

<!-- 念のため TeX Live 2014 対応のものも残しておきます． -->
<!-- -[[RStudioから使えるR Markdownで日本語のPDFを作成する:http://bicycle1885.hatenablog.com/entry/2014/10/15/032024]] -->
<!-- -[[Macbook air に texlive2014 をインストールする:http://d.hatena.ne.jp/pyopyopyo/20140815/p1]] -->

### BasicTeX + collection-langjapanese で LuaTeX-ja を使う {#f2230bb1}

TeX Live の collection-langjapanese には [LuaTeX-ja](/LuaTeX-ja/) も含まれています。
しかし，BasicTeX + collection-langjapanese だけでは ltjsarticle.cls などを使った文書をタイプセットすることができません。
LuaTeX-ja を実際に使用するには，別途 collection-luatex (ctablestack.sty etc.) や collection-latexextra (filehook.sty etc.) などいくつかのパッケージを追加する必要があります。

% [Twitter](https://twitter.com/_yyu_/status/728825087470632961) などを参考に再現してみて，最小構成を確認できれば追記します。 -- アセトアミノフェン (2016-06-22)

% [ここ](http://qiita.com/yyu/items/e3451caa86779b94abe1)が参考になりそう。
