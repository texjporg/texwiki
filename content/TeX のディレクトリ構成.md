---
title: "TeX のディレクトリ構成"
url: "/TeX のディレクトリ構成/"
date: 2015-02-14T11:24:48Z
pukiwiki: "TeX のディレクトリ構成"
---

# TeX のディレクトリ構成

## TeX のディレクトリ構成 (TDS) {#u528ce3e}

<!-- こういう内容，美文書には（付録に）記載されていますが，Web ではほとんど解説されていないので -->
<!-- 有用そうです． -->

TDS (TeX Directory Structure) とは，TeX の標準的なディレクトリ構成です。
[TeX Live](</TeX Live/>) や [W32TeX](/W32TeX/) はこの TDS に従っています。

- [http://www.tug.org/texinfohtml/tds.html](http://www.tug.org/texinfohtml/tds.html)
- [http://www.ctan.org/tex-archive/tds](http://www.ctan.org/tex-archive/tds)

実際にどのように TeX に関するファイルやディレクトリを配置したらよいのか考えます。
[パッケージ](</パッケージ/>)や[フォント](</フォント/>)を追加する際，あるいは使用しているパッケージの置き場を探す際に参考になるはずです。

\[TODO\] TDS のバージョンによる違いはどの程度でしょうか？

***

***

### TEXMF ツリー・多重 TEXMF ツリーとは {#ae6fe566}

現在の TeX ディストリビューションのほとんどは TEXMF ツリー[^1]を採用しています。
TEXMF ツリーには，パッケージやクラスファイル・フォント・スクリプト・説明文書などが規則に従って分類され，収録されています。

TeX Live や W32TeX では複数の TEXMF ツリーを使い分ける「多重 TEXMF ツリー」が採用されています。
これにより，ディストリビューションが用意したファイルとユーザが追加したローカルなファイルなどを明確に区別できます。

TeX Live では例えば（以下の YYYY には年が入ります）

- C:\texlive\YYYY\texmf-dist や C:\texlive\texmf-local（Windows での典型的な例）
- /usr/local/texlive/YYYY/texmf-dist や /usr/local/texlive/texmf-local（Unix 系での典型的な例）

W32TeX では

- C:\w32tex\share\texmf-dist や C:\w32tex\share\texmf-local（典型的な例）

などのディレクトリがそれにあたります。

<!--  -->
<!-- ほかに，以下のような例があるようです。 -->
<!-- - C:\w32tex\share\texmf（2013年4月7日以前の W32TeX の典型的な例） -->
<!-- - /usr/local/share/texlive/YYYY/texmf-dist -->
<!-- - /opt/local/share/texlive/YYYY/texmf-dist -->
<!-- - /usr/share/texmf -->
<!-- - /opt/share/texmf -->
<!-- - ~/Library/texmf -->
<!--  -->

以下では，これらのディレクトリを一般に <strong>texmf</strong> とします。

### TEXMF ツリーの中身 {#y056dcf8}

<strong>texmf</strong> ルートディレクトリの下位には，主に次のようなディレクトリがあります：

- tex：TeX の動作に必要なテキストファイルが入ります。
- fonts：[フォント](</フォント/>)に関するファイルが入ります。
- metafont：[METAFONT](/METAFONT/) の動作に必要なテキストファイルが入ります。
- metapost：[MetaPost](/MetaPost/) の動作に必要なテキストファイルが入ります。
- dvipdfmx：[dvipdfmx](/dvipdfmx/) 用の設定ファイルが入ります。
- dvips：[dvips](/dvips/) 用の設定ファイルが入ります。
- bibtex：BibTeX に関するファイルが入ります。
- scripts：プラットフォームに依存しないスクリプト (Perl, Lua, etc.) が入ります。
- doc：説明文書が入ります。
- source：ソースファイル（LaTeX パッケージの元になる dtx や ins なども含む）が入ります。

TeX でファイル検索を行う kpathsea ライブラリは，このディレクトリ構成に従って必要なファイルを検索します。
kpathsea ライブラリは多重 TEXMF ツリーにも対応しています。

% 少しずつ作業を進めていきたいと思います．

[^1]: TEXMF とは，emTeX/em と emM/emETAemF/emONT という意味です。
