---
title: "Babel"
url: "/Babel/"
date: 2012-11-25T00:02:31Z
pukiwiki: "Babel"
---

# Babel

## Babel {#r809659f}

Babel は LaTeX で多言語文書を作成するためのパッケージです．

- [CTAN web interface: package babel](https://ctan.org/pkg/babel)
- [CTAN web interface: Directory listing for /macros/latex/required/babel](https://ctan.org/tex-archive/macros/latex/required/babel)
- [「Babel」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=Babel)
- [日本語 LaTeX による多言語処理](http://www2.tba.t-com.ne.jp/ing/)
- [upTeX, pTeX と多言語処理](</pTeXと多言語処理/>)
- [upTeX, 新 pTeX と Babel](</新 pTeX とBabel/>)

### babel-japanese <a id="babel-japanese"></a> {#h2523f84}

日本語クラスを使用していて babel パッケージを読み込むと，キャプションなどが英語などの他言語に変わってしまいます．
対処法の一つが，日本語に再変更しなおすことで，これを実現するのが babel-japanese パッケージです．

- [https://ctan.org/pkg/babel-japanese](https://ctan.org/pkg/babel-japanese)
- [https://github.com/texjporg/babel-japanese](https://github.com/texjporg/babel-japanese)
- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/generic/babel-japanese/japanese.ldf?view=markup](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/generic/babel-japanese/japanese.ldf?view=markup)

2016/12/17 以降，従来の japanese パッケージは babel-japanese パッケージとリネームされています（ただし使い方は従来と全く同じ）．

- babel の japanese オプションの新バージョン（日本語 TeX 開発コミュニティによる管理に移行） [forum:2102](https://okumuralab.org/tex/mod/forum/discuss.php?d=2102)

もう一つの方法が pxbabel パッケージです．

- [美文書付録Iについて思うことをグダグダ書き連ねるシリーズ (7)](http://d.hatena.ne.jp/zrbabbler/20120905/1346805180)

#### インストール {#u48e60e8}

TeX Live では babel-japanese パッケージはすでにインストールされています．

W32TeX の場合は babel-japanese パッケージは 2013/10/17 以降の版にインストールされています．

### polyglossia {#q0893d44}

babel の事実上の後継として [polyglossia](https://ctan.org/pkg/polyglossia) が公開されています．
polyglossia は LuaLaTeX と XeLaTeX がサポートされています．
polyglossia は TeX Live にも W32TeX にもインストールされています．
