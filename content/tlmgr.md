---
title: "tlmgr"
url: "/tlmgr/"
date: 2014-05-26T05:37:38Z
pukiwiki: "tlmgr"
---

# tlmgr

## tlmgr {#headline}

tlmgr は [TeX Live](</TeX Live/>) のパッケージ管理ツールで，コマンドラインで使用します．
GUI 版としては Windows の [TeX Live Manager](</TeX Live Manager/>) や OS X の [TeX Live Utility](</TeX Live Utility/>) もあります．

### 使い方 {#usage}

公式ドキュメントに解説があります．

- [http://www.tug.org/texlive/tlmgr.html](http://www.tug.org/texlive/tlmgr.html)
- [http://www.tug.org/texlive/doc/tlmgr.html](http://www.tug.org/texlive/doc/tlmgr.html)

```
$ tlmgr --help
```

でもマニュアルが表示されます．

#### TeX Live のアップデート {#update}

コマンドラインから以下のコマンドを実行します．

- Windows, Cygwin の場合

    ```
    tlmgr update --self --all
    ```

- OS X, Linux の場合

    ```
    sudo tlmgr update --self --all
    ```

#### インストールされているパッケージの情報を見る（ライセンス・バージョン確認など） {#info}

たとえば [geometry](/geometry/) パッケージについて調べる場合は，以下のコマンドを実行します．

```
$ tlmgr info geometry
package:     geometry
category:    Package
shortdesc:   Flexible and complete interface to document dimensions.
longdesc:    The package provides an easy and flexible user interface (以下略)
installed:   Yes
revision:    19716
cat-version: 5.6
cat-date:    2010-09-13 00:36:13 +0200
cat-license: lppl
collection:  collection-latex
```

### 関連リンク {#links}

- [tlmgr オンラインアップデータ](http://www.fugenji.org/~thomas/texlive-guide/tlmgr.html)
- [tlmgr user mode - There and back again](http://www.preining.info/blog/2013/04/tlmgr-user-mode/)
