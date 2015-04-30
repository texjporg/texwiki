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

TDS (TeX Directory Structure) とは，TeX の標準的なディレクトリ構成です．
[TeX Live](</TeX Live/>) や [W32TeX](/W32TeX/) はこの TDS に従っています．

- [http://www.tug.org/texinfohtml/tds.html](http://www.tug.org/texinfohtml/tds.html)
- [http://www.ctan.org/tex-archive/tds](http://www.ctan.org/tex-archive/tds)

実際にどのように TeX に関するファイルやディレクトリを配置したらよいのか考えます．
[パッケージ](</パッケージ/>)や[フォント](</フォント/>)を追加する際，あるいは使用しているパッケージの置き場を探す際に参考になるはずです．

\[TODO\] TDS のバージョンによる違いはどの程度でしょうか？

### TEXMF ツリー {#ae6fe566}

現在の TeX ディストリビューションのほとんどで採用されているのが TEXMF ツリーです．
以下では TeX や METAFONT に関するファイルを配置する TDS のルートディレクトリを <strong>texmf</strong>[^1] とします．

% 少しずつ作業を進めていきたいと思います．最初に「多重 TEXMF ツリー」について書くのがよさそう？

[^1]: emTeX/em と emM/emETAemF/emONT という意味です．
