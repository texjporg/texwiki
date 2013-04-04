---
title: "zathura"
url: "/zathura/"
date: 2012-07-23T04:50:13Z
pukiwiki: "zathura"
---

# zathura

## [zathura](http://pwmt.org/projects/zathura/) {#z4200d90}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## zathura とは {#s6eb3d04}

zathura は高いカスタマイズ性と機能性を備えたドキュメントビューアです．<br>
PDF ファイルや PS ファイルが表示できます．<br>
SyncTeX に対応しています．<br>
ファイルの自動更新機能もあります．<br>

- [Home | pwmt.org](http://pwmt.org/)
    - [zathura](http://pwmt.org/projects/zathura/)
- [The zathura Archives](http://lists.pwmt.org/archive/zathura/)

### 動作環境 {#q9b59e7d}

Linux, BSD

[Known supported distributions](http://pwmt.org/projects/zathura/installation/#known-supported-distributions) を参照．<br>

### License {#v6901e72}

[zlib/libpng License](http://git.pwmt.org/?p=zathura.git;a=blob;f=LICENSE;hb=HEAD)

### リリース情報 {#p5c718a4}

[News](http://pwmt.org/news/) を参照．<br>

Version 0.2.2 で [SyncTeX (forward search) の対応](http://git.pwmt.org/?p=zathura.git;a=commit;h=a8cd10dcac7a6da06598bdbf402531989900fa0b)の実装をはじめました (work in progress)．<br>
Version 0.2.1 で [SyncTeX (inverse search) に対応](http://git.pwmt.org/?p=zathura.git;a=commit;h=49116a08347566be0463682badce4c5572b84618)しました．<br>

### ChangeLog {#fdab5877}

- [git.pwmt.org Git - zathura.git/shortlog](http://git.pwmt.org/?p=zathura.git;a=shortlog;h=refs/heads/develop) (develop)
- [git.pwmt.org Git - zathura.git/summary](http://git.pwmt.org/?p=zathura.git) (master)

### 派生版 {#oea86148}

zathura を SyncTeX に対応させた zathura-synctex が作成されています． → 本家にマージされました．<br>

- [zathura-synctex](https://github.com/rschatz/zathura-synctex)
- \[[zathura\] Synctex support](http://lists.pwmt.org/archive/zathura/2011-August/000047.html)
- \[[zathura\]  Synctex support](http://www.mail-archive.com/zathura@lists.pwmt.org/msg00042.html)
- [Re: \[zathura\] Synctex support](http://www.mail-archive.com/zathura@lists.pwmt.org/msg00019.html)

## ダウンロード/インストール {#w2221884}

### ソースコードからインストール {#t7edecd8}

[girara](http://pwmt.org/projects/girara/) をインストールします．

```
$ wget http://pwmt.org/projects/girara/download/girara-0.1.5.tar.gz
$ tar xvf girara-0.1.5.tar.gz
$ pushd girara-0.1.5
$ sudo make install
make install で No package 'gtk+-2.0' found のエラーが発生する場合は
$ sudo make GIRARA_GTK_VERSION=3 install
$ popd
```

[zathura](http://pwmt.org/projects/zathura/) をインストールします．

```
$ wget http://pwmt.org/projects/zathura/download/zathura-0.2.2.tar.gz
$ tar xvf zathura-0.2.2.tar.gz
$ pushd zathura-0.2.2
$ sudo make install
make install で No package 'gtk+-2.0' found のエラーが発生する場合は
$ sudo make ZATHURA_GTK_VERSION=3 install
$ popd
```

[zathura-pdf-poppler](http://pwmt.org/projects/zathura/plugins/zathura-pdf-poppler/) をインストールします．

```
$ wget http://pwmt.org/projects/zathura/plugins/download/zathura-pdf-poppler-0.2.2.tar.gz
$ tar xvf zathura-pdf-poppler-0.2.2.tar.gz
$ pushd zathura-pdf-poppler-0.2.2
$ sudo make install
$ popd
```

### Ubuntu {#cc8ebe01}

- [Ubuntu -- パッケージ検索結果 -- zathura](http://packages.ubuntu.com/ja/zathura)

### Debian {#x8dcc844}

- [Debian -- パッケージ検索結果 -- zathura](http://packages.debian.org/ja/zathura)

### Arch Linux {#h8cd5d50}

- [https://www.archlinux.org/packages/?q=zathura](https://www.archlinux.org/packages/?q=zathura)

## 関連リンク {#l21c05df}

- [Emacs like key bindings for zathura](https://gist.github.com/3168313)
- [zathura - a document viewer (Page 1) / Community Contributions / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=115118)
- [zathura - a PDF viewer (Page 1) / Community Contributions / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=80458)
    - [SyncTeX kludge](https://bbs.archlinux.org/viewtopic.php?pid=807105#p807105)
