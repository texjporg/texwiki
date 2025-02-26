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
collection-langjapanese をインストールすれば，[jsclasses](/jsclasses/) や [OTF](/OTF/)，[BXjscls](/BXjscls/)，[jlreq](/jlreq/) も利用可能になります。 <!-- LuaTeX-ja は BasicTeX + collection-langjapanese だけではダメなので下へ移動 - - アセトアミノフェン (2016-06-22) -->

***

***

### BasicTeX のインストール {#i5822f30}

#### BasicTeX.pkg でインストール {#if691d16}

[More Packages - MacTeX - TeX Users Group](http://tug.org/mactex/morepackages.html) または[ミラーサイト (MacTeX)](/MacTeX/#mirror) から BasicTeX.pkg をダウンロードします。

BasicTeX のインストールの概略は以下のとおりです。

1. ダウンロードした BasicTeX.pkg をダブルクリックしてインストールします。
1. ターミナル上で sudo tlmgr update --self --all を実行し，最新版までアップデートします。
1. ターミナル上で sudo tlmgr paper a4 を実行してデフォルトの用紙サイズを A4 に変更します。
1. BasicTeX には標準で日本語 pTeX / upTeX が入っていませんので，以下のコレクションを追加でインストールします。

    ```
    sudo tlmgr install collection-langjapanese collection-latexextra collection-luatex
    ```

    collection-langjapanese をインストールすれば，依存関係で collection-langcjk もインストールされます。

[Ghostscript](/Ghostscript/)、[Latexmk](/Latexmk/) は別途インストールする必要があります。

#### Homebrew Cask でインストール {#w71ff68b}

Homebrew Cask で BasicTeX をインストールできます。

```
$ brew install --cask basictex
$ eval "$(/usr/libexec/path_helper)"
$ sudo tlmgr update --self --all
$ sudo tlmgr paper a4
$ sudo tlmgr install collection-langjapanese collection-latexextra collection-luatex
```

#### インストールの事例 <a id="installationexample"></a> {#q65e25e8}

- [macOSにtexlive2023 をインストールする方法](https://pyopyopyo.hatenablog.com/entry/2023/04/07/173000)
- [Macでの日本語LaTeXお手軽インストール](https://x.com/BeryLiuM_Green/status/1390235461667364864)
- [Mac で日本語 LaTeX 環境最短手順](https://x.com/u_sho_KyoPro/status/1388020287233355778)
- [macOS Big SurでLaTeX環境整えた時のメモ(2020, x86_64/arm64対応)](https://qiita.com/yaplus/items/55fa6957c1b15dbcf387)
- [初心者がBasicTexをmacにインストールする(2019年)](https://qiita.com/yuukami1024/items/bec77e17111ad95a1188)

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

日本語環境を構成するには，このページで解説しているように collection-langjapanese、collection-latexextra、collection-luatex を
インストールすることをおすすめします。

<!-- TeX Live 2017 対応 -->
<!-- -[[macOS に Tex Live 2017をインストールする:http://d.hatena.ne.jp/pyopyopyo/20170801/p1]] -->

<!-- 念のため TeX Live 2014 対応のものも残しておきます． -->
<!-- -[[RStudioから使えるR Markdownで日本語のPDFを作成する:http://bicycle1885.hatenablog.com/entry/2014/10/15/032024]] -->

### BasicTeX + collection-langjapanese で LuaTeX-ja を使う {#f2230bb1}

TeX Live の collection-langjapanese には [LuaTeX-ja](/LuaTeX-ja/) も含まれています。
しかし，BasicTeX + collection-langjapanese だけでは ltjsarticle.cls などを使った文書をタイプセットすることができません。
LuaTeX-ja を実際に使用するには，別途 collection-luatex (ctablestack.sty etc.) や collection-latexextra (filehook.sty etc.) などいくつかのパッケージを追加する必要があります。

% [X](https://x.com/_yyu_/status/728825087470632961) などを参考に再現してみて，最小構成を確認できれば追記します。 -- アセトアミノフェン (2016-06-22)

% [ここ](https://qiita.com/yyu/items/e3451caa86779b94abe1)が参考になりそう。
