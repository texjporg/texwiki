---
title: "Babel"
url: "/Babel/"
date: 2012-11-25T00:02:31Z
pukiwiki: "Babel"
---

# Babel

## Babel {#r809659f}

Babel は LaTeX, pdfLaTeX, LuaLaTeX, XeLaTeX で多言語文書を作成するためのパッケージです．

- [CTAN: Package babel](https://ctan.org/pkg/babel)
- [CTAN:macros/latex/required/babel](https://mirror.ctan.org/macros/latex/required/babel)
- [Babel の検索結果 - マクロツイーター](https://zrbabbler.hatenablog.com/search?q=Babel)
- [多言語環境 Babel](https://www.clas.kitasato-u.ac.jp/~fujiwara/infoScienceB/TeX/babel.html)
- [日本語 LaTeX による多言語処理](https://web.archive.org/web/20140709181648/http://www2.tba.t-com.ne.jp/ing/)
- [upTeX, pTeX と多言語処理](</pTeXと多言語処理/>)
- [upTeX, 新 pTeX と Babel](</新 pTeX とBabel/>)

### 注意点 {#je0f80cc}

#### Babel 3.21 2018-05-10 で pLaTeX / upLaTeX が動作しない {#r73ec466}

Babel 3.21 2018-05-10 で pLaTeX / upLaTeX が動作しない問題は [pLaTeX 2018-05-11](https://github.com/texjporg/platex/releases/tag/2018-05-11) ([TeX Live revision 47683](https://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/base/plcore.ltx?r1=47402&r2=47683&pathrev=47683)) で修正されました．

- [Babel v3.21 で pLaTeX 2018-04-01 patch level 1 は動きません](https://okumuralab.org/tex/mod/forum/discuss.php?d=2428)
- [\everyjob でのバナー表示の簡略化 &#183; Issue #71 &#183; texjporg/platex &#183; GitHub](https://github.com/texjporg/platex/issues/71)

```
This is e-pTeX, Version 3.14159265-p3.8.1-180226-2.6 (utf8.sjis) (TeX Live 2018/W32TeX) (preloaded format=platex)
 restricted \write18 enabled.
entering extended mode
(./ex1.tex(guessed encoding: UTF-8 = utf8)
! Argument of \UTFviii@four@octets@@ has an extra }.
<inserted text>
                \par
l.1
    \documentclass{jsarticle}
?
```

### babel-japanese <a id="babel-japanese"></a> {#h2523f84}

日本語クラスを使用していて babel パッケージを読み込むと，キャプションなどが英語などの他言語に変わってしまいます．
対処法の一つが，日本語に再変更しなおすことで，これを実現するのが babel-japanese パッケージです．

- [https://ctan.org/pkg/babel-japanese](https://ctan.org/pkg/babel-japanese)
- [https://github.com/texjporg/babel-japanese](https://github.com/texjporg/babel-japanese)
- [https://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/generic/babel-japanese/japanese.ldf?view=markup](https://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/generic/babel-japanese/japanese.ldf?view=markup)

2016/12/17 以降，従来の japanese パッケージは babel-japanese パッケージとリネームされています（ただし使い方は従来と全く同じ）．

- babel の japanese オプションの新バージョン（日本語 TeX 開発コミュニティによる管理に移行） [forum:2102](https://okumuralab.org/tex/mod/forum/discuss.php?d=2102)

もう一つの方法が pxbabel パッケージです．

- [美文書付録Iについて思うことをグダグダ書き連ねるシリーズ (7)](https://zrbabbler.hatenablog.com/entry/20120905/1346805180)

#### インストール {#u48e60e8}

TeX Live には babel-japanese パッケージはすでにインストールされています．

### polyglossia {#q0893d44}

babel の代替として [polyglossia](https://ctan.org/pkg/polyglossia) が公開されています．
polyglossia は LuaLaTeX と XeLaTeX がサポートされています．
polyglossia は TeX Live にインストールされています．

- [XeLaTeXで日本語+ロシア語](https://nixeneko.hatenablog.com/entry/2015/11/28/061905)
- [polyglossiaと日本語 (日本語とアラビア語の混植についての韓国語の記事)](https://hoze.tistory.com/1907)
