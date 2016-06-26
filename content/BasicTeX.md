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

BasicTeX の派生版である [Drag &amp; Drop UpTeX](</Drag and Drop UpTeX/>) は，最初から BasicTeX + collection-langjapanese を収録しています。 <!-- いちばん下に「派生版」とだけ書いても，日本向けだと伝わらないし， --> <!-- 誰も注目しないだろうと思うのでトップに移動。 - - アセトアミノフェン (2016-06-22) -->

***

***

### BasicTeX のインストール {#i5822f30}

#### BasicTeX.pkg でインストール {#if691d16}

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
        - 以前の TeX Live で既に設定済みの場合は，この手順は不要です（ただし，El Capitan へのアップデート後にまだ作業を行っていない場合は必要になります）。
        - この設定をしなくても日本語は使用できますし，IPAexフォント/IPAフォントを埋め込んだPDFの作成もできますが，高品質なフォントであるヒラギノが使える macOS ならばヒラギノを利用可能にする設定は有用でしょう。
    - sudo kanji-config-updmap-sys を実行して PDF に埋め込むフォントを指定します。（→[kanji-config-updmap(-sys) ](</TeX Live/Mac/#hf34afcc>)）
        - 新規インストール（アップグレード）時にはフォントが埋め込まれない設定となっているため，作成された PDF が「ファイルが壊れている」と見なされて開けないことがあります。
        - updmap-sys も実行されて各種の map ファイルが自動生成されます。
1. <strong>Happy LaTeXing!</strong>

[Ghostscript](/Ghostscript/) は別途インストールする必要があります。
また，[TeXShop](/TeXShop/) などの追加アプリケーションをインストールするとよいでしょう。

#### Homebrew でインストール {#w71ff68b}

Homebrew で BasicTeX をインストールできます。

```
$ brew cask install basictex
$ sudo tlmgr update --self --all
$ sudo tlmgr install collection-langjapanese
```

#### インストールの事例 {#q65e25e8}

以下のインストール事例も参考になります。

- [Mac：BasicTeXを再インストール](http://blog.livedoor.jp/mt_kinabalu/archives/59515359.html)
- [MacにTeX環境を整える](http://keisanbutsuriya.hateblo.jp/entry/2016/04/15/190757)
- \[[El Capitan\]Homebrew CaskでTeX環境を構築する](https://www.aruneko.net/archives/1423)
- [OS X に texlive2015 をインストールする](http://d.hatena.ne.jp/pyopyopyo/20150710/p1)
- [BasicTeX-2015でRe:VIEWの環境を用意する](http://qiita.com/takahashim/items/74d6d1de557fad09a879)
- [MacにTexを導入する](http://mktozk.hateblo.jp/entry/configure-tex-on-mac)

<!-- 念のため TeX Live 2014 対応のものも残しておきます． -->
<!-- -[[RStudioから使えるR Markdownで日本語のPDFを作成する:http://bicycle1885.hatenablog.com/entry/2014/10/15/032024]] -->
<!-- -[[Macbook air に texlive2014 をインストールする:http://d.hatena.ne.jp/pyopyopyo/20140815/p1]] -->

### BasicTeX + collection-langjapanese で LuaTeX-ja を使う {#f2230bb1}

TeX Live の collection-langjapanese には [LuaTeX-ja](/LuaTeX-ja/) も含まれています。
しかし，BasicTeX + collection-langjapanese だけでは ltjsarticle.cls などを使った文書をタイプセットすることができません。
LuaTeX-ja を実際に使用するには，別途 collection-luatex (ctablestack.sty etc.) や collection-latexextra (filehook.sty etc.) などいくつかのパッケージを追加する必要があります。

% [Twitter](https://twitter.com/_yyu_/status/728825087470632961) などを参考に再現してみて，最小構成を確認できれば追記します。 -- アセトアミノフェン (2016-06-22)

% [ここ](http://qiita.com/yyu/items/e3451caa86779b94abe1)が参考になりそう。
