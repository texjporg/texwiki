---
title: "zathura"
url: "/zathura/"
date: 2012-07-23T04:50:13Z
pukiwiki: "zathura"
---

# zathura

## [zathura](https://pwmt.org/projects/zathura/) {#z4200d90}

***

***

## zathura とは {#s6eb3d04}

zathura は高いカスタマイズ性と機能性を備えたドキュメントビューアです．
PDF ファイルが表示できます．
[SyncTeX](/SyncTeX/) に対応しています．
ファイルの自動更新機能もあります．

- [Home | pwmt.org](https://pwmt.org/)
    - [zathura](https://pwmt.org/projects/zathura/)
    - [girara](https://pwmt.org/projects/girara/)
- [https://github.com/pwmt/zathura](https://github.com/pwmt/zathura)

### 動作環境 {#q9b59e7d}

macOS, Linux, BSD

[Known supported distributions](https://pwmt.org/projects/zathura/installation/#known-supported-distributions) を参照．

### License {#v6901e72}

[zlib License](https://github.com/pwmt/zathura/blob/develop/LICENSE)

### リリース情報 {#p5c718a4}

- [https://pwmt.org/news/](https://pwmt.org/news/)
- [https://pwmt.org/news/tag/release/](https://pwmt.org/news/tag/release/)

を参照．

### ChangeLog {#fdab5877}

#### zathura {#wf24e546}

- [https://github.com/pwmt/zathura/commits/develop/](https://github.com/pwmt/zathura/commits/develop/)

#### girara {#l7dfb095}

- [https://github.com/pwmt/girara/commits/develop/](https://github.com/pwmt/girara/commits/develop/)

## ダウンロード/インストール {#w2221884}

### macOS {#hcc17832}

- [https://github.com/zegervdv/homebrew-zathura](https://github.com/zegervdv/homebrew-zathura)
- [https://github.com/macports/macports-ports/blob/master/office/zathura/Portfile](https://github.com/macports/macports-ports/blob/master/office/zathura/Portfile)
- [https://github.com/macports/macports-ports/blob/master/office/zathura-plugin-pdf-poppler/Portfile](https://github.com/macports/macports-ports/blob/master/office/zathura-plugin-pdf-poppler/Portfile)
- [https://github.com/macports/macports-ports/blob/master/office/zathura-plugin-pdf-mupdf/Portfile](https://github.com/macports/macports-ports/blob/master/office/zathura-plugin-pdf-mupdf/Portfile)

### Arch Linux {#h8cd5d50}

- [https://www.archlinux.org/packages/?name=zathura](https://www.archlinux.org/packages/?name=zathura)
- [https://www.archlinux.org/packages/?q=zathura](https://www.archlinux.org/packages/?q=zathura)

### Linux Mint/Ubuntu {#cc8ebe01}

- [https://packages.ubuntu.com/ja/zathura](https://packages.ubuntu.com/ja/zathura)

### Debian {#x8dcc844}

- [https://packages.debian.org/ja/zathura](https://packages.debian.org/ja/zathura)

### Fedora {#f03f2bfa}

- [https://packages.fedoraproject.org/search?query=zathura](https://packages.fedoraproject.org/search?query=zathura)

### openSUSE {#p01e8065}

- [http://software.opensuse.org/package/zathura](http://software.opensuse.org/package/zathura)

## 不具合 {#ue94eec4}

- [https://github.com/pwmt/zathura/issues](https://github.com/pwmt/zathura/issues)

## 使い方 {#w279d8d0}

### キーボード操作 {#ta398819}

zathura は [Vim](/Vim/) キーバインドを採用しています．
[Emacs](/Emacs/) ライクなキーバインドにカスタマイズすることもできます． → [Emacs like key bindings for zathura](https://gist.github.com/3168313)

### コマンドラインオプション {#u4f91695}

- [https://github.com/pwmt/zathura/blob/develop/zathura/main.c](https://github.com/pwmt/zathura/blob/develop/zathura/main.c)

```
$ zathura --help
```

```
Usage:
  zathura [OPTION...]  [file1] [file2] [...]

Help Options:
  -h, --help                           Show help options

Application Options:
  -e, --reparent=xid                   Reparents to window specified by xid
  -c, --config-dir=path                Path to the config directory
  -d, --data-dir=path                  Path to the data directory
  --cache-dir=path                     Path to the cache directory
  -p, --plugins-dir=path               Path to the directories containing plugins
  --fork                               Fork into the background
  -w, --password=password              Document password
  -P, --page=number                    Page number to go to
  -l, --log-level=level                Log level (debug, info, warning, error)
  -v, --version                        Print version information
  -x, --synctex-editor-command=cmd     Synctex editor (forwarded to the synctex command)
  --synctex-forward=position           Move to given synctex position
  --synctex-pid=pid                    Highlight given position in the given process
  --mode=mode                          Start in a non-default mode
  -b, --bookmark=bookmark              Bookmark to go to
  -f, --find=string                    Search for the given phrase and display results
```

## SyncTeX {#g93d0312}

<!-- -[[LaTeX forward/inverse searches with Zathura:http://wiki.math.cmu.edu/iki/wiki/tips/20140310-zathura-fsearch.html]] -->

### forward and inverse search {#t2531a9e}

TeX ファイルの 30 行目に対応する PDF ファイルの該当する箇所にジャンプして [TeXstudio](/TeXstudio/) で inverse search する場合は

```
$ zathura -x "texstudio '%{input}' -line %{line}" --synctex-forward "30:0:hoge.tex" "hoge.pdf"
```

のように実行して zathura 上で Ctrl + 左クリックを実行すると TeXstudio が起動して TeX 文書の対応する行にジャンプします．

### forward search {#m29e6702}

TeX ファイルの 30 行目に対応する PDF ファイルの該当する箇所にジャンプしたい場合は

```
$ zathura --synctex-forward "30:0:hoge.tex" "hoge.pdf"
```

のように実行します．

### inverse search {#c00c992e}

[TeXstudio](/TeXstudio/) で inverse search する場合は

```
$ zathura -x "texstudio '%{input}' -line %{line}" "hoge.pdf"
```

のように実行して zathura 上で Ctrl + 左クリックを実行すると TeXstudio が起動して TeX 文書の対応する行にジャンプします．

## 関連リンク {#l21c05df}

- [Emacs like key bindings for zathura](https://gist.github.com/3168313)
    <!-- -[[zathura - a document viewer (Page 1) / Community Contributions / Arch Linux Forums:https://bbs.archlinux.org/viewtopic.php?id=115118]] -->
    <!-- -[[zathura - a PDF viewer (Page 1) / Community Contributions / Arch Linux Forums:https://bbs.archlinux.org/viewtopic.php?id=80458]] -->
    <!-- - -[[SyncTeX kludge:https://bbs.archlinux.org/viewtopic.php?pid=807105#p807105]] -->
