---
title: "tlmgr"
url: "/tlmgr/"
date: 2014-05-26T05:37:38Z
pukiwiki: "tlmgr"
---

# tlmgr

## tlmgr {#headline}

tlmgr は [TeX Live](</TeX Live/>) のパッケージ管理ツールで，コマンドラインで使用します．
GUI 版としては [TeX Live Shell (GUI 版 TeX Live Manager)](</TeX Live Shell/>) や macOS の [TeX Live Utility](</TeX Live Utility/>) もあります．

### 使い方 {#usage}

公式ドキュメントに解説があります．

- [https://www.tug.org/texlive/tlmgr.html](https://www.tug.org/texlive/tlmgr.html)
- [https://www.tug.org/texlive/doc/tlmgr.html](https://www.tug.org/texlive/doc/tlmgr.html)

```
$ tlmgr --help
```

でもマニュアルが表示されます．

#### TeX Live のアップデート {#update}

コマンドラインから以下のコマンドを実行します．

- Windows (Windows, Cygwin) の場合（「管理者として実行」しなければならない場合があります）

    ```
    tlmgr update --self --all
    ```

- macOS, Linux の場合

    ```
    sudo tlmgr update --self --all
    ```

#### インストールされているパッケージの情報を見る（ライセンス・バージョン確認など） {#info}

たとえば [geometry](/geometry/) パッケージについて調べる場合は，以下のコマンドを実行します．

```
$ tlmgr info geometry
package:     geometry
category:    Package
shortdesc:   Flexible and complete interface to document dimensions
longdesc:    The package provides an easy and flexible user interface to customize page layout, implementing auto-centering and auto-balancing mechanisms so that the users have only to give the least description for the page layout. For example, if you 
want to set each margin 2cm without header space, what you need is just \usepackage[margin=2cm,nohead]{geometry}. The package knows about all the standard paper sizes, so that the user need not know what the nominal 'real' dimensions of the paper are, 
just its standard name (such as a4, letter, etc.). An important feature is the package's ability to communicate the paper size it's set up to the output (whether via DVI \specials or via direct interaction with pdf(La)TeX).
installed:   Yes
revision:    61719
sizes:       src: 325k, doc: 921k, run: 45k
relocatable: No
cat-version: 5.9
cat-license: lppl1.3c
cat-topics:  geometry
cat-related: vmargin typearea geometry-de
cat-contact-bugs: https://github.com/LaTeX-Package-Repositories/geometry/issues
cat-contact-repository: https://github.com/LaTeX-Package-Repositories/geometry
collection:  collection-latex
```

#### 過去のパッケージを復元する {#dcbeb630}

ときどき，tlmgr で更新したパッケージに不具合が混入したり，他のパッケージとの共存で不都合が生じたりすることもあります．
問題のなかった古いバージョンを復元したくなることがあると思います．

たとえば，tlmgr でパッケージを一斉にアップデートしたところ，luatexja の r39527 で不都合が生じたとして，以前にインストールされていたバージョンに復旧したいとします．
その場合，以下のコマンドを実行します．

```
$ tlmgr restore luatexja
```

バックアップが残っている場合は，ローカルに保存されているリビジョン番号が表示されます．

```
Available backups for luatexja: 39105 (2016-02-02 15:45)
```

確認したら，そのリビジョン番号を復元します．

```
$ sudo tlmgr restore luatexja 39105
```

一度確認されます．

```
Do you really want to restore luatexja to revision 39105 (y/N):
```

y で進むと

```
Restoring luatexja, 39105 from /usr/local/texlive/2015/tlpkg/backups/luatexja.r39105.tar.xz
```

などと表示され，過去のパッケージが展開されます．

なお，フォーマット作成時に読まれるファイルを復元した場合（たとえば LaTeX 本体に不具合が生じ，過去のバージョンを復元した場合）は，手動でフォーマットを再作成する必要が生じます．

- 実際の例：[LuaLaTeX (2016/02/01) で数式が化ける](https://okumuralab.org/tex/mod/forum/discuss.php?d=1819)

### 関連リンク {#links}

- [tlmgrの使用例とトラブルシューティング](https://tm23forest.com/contents/tlmgr-usage-troubleshooting)
- [tlmgr オンラインアップデータ](http://www.fugenji.org/~thomas/texlive-guide/tlmgr.html)
- [tlmgr user mode - There and back again](http://www.preining.info/blog/2013/04/tlmgr-user-mode/)
