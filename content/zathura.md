---
title: "zathura"
url: "/zathura/"
date: 2012-07-23T04:50:13Z
pukiwiki: "zathura"
---

# zathura

## [zathura](http://pwmt.org/projects/zathura/) {#z4200d90}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## zathura とは {#s6eb3d04}

zathura は高いカスタマイズ性と機能性を備えたドキュメントビューアです．<br>
PDF ファイルや PS ファイルが表示できます．<br>
SyncTeX に対応しています．<br>
ファイルの自動更新機能もあります．<br>

- [Home | pwmt.org](http://pwmt.org/)
    - [zathura](http://pwmt.org/projects/zathura/)
    - [girara](http://pwmt.org/projects/girara/)
- [The zathura Archives](http://lists.pwmt.org/archive/zathura/)
- [The girara Archives](http://lists.pwmt.org/archive/girara/)

### 動作環境 {#q9b59e7d}

OS X, Linux, BSD

[Known supported distributions](http://pwmt.org/projects/zathura/installation/#known-supported-distributions) を参照．<br>

### License {#v6901e72}

[zlib/libpng License](https://git.pwmt.org/?p=zathura.git;a=blob;f=LICENSE;hb=HEAD)

### リリース情報 {#p5c718a4}

- [https://git.pwmt.org/?p=zathura.git;a=tags](https://git.pwmt.org/?p=zathura.git;a=tags)
- [https://git.pwmt.org/?p=girara.git;a=tags](https://git.pwmt.org/?p=girara.git;a=tags)
- [News](http://pwmt.org/news/)

を参照．<br>

Version 0.2.7 で SyncTeX (forward and inverse search) に対応しました．<br>

### ChangeLog {#fdab5877}

#### zathura {#wf24e546}

- [https://git.pwmt.org/?p=zathura.git;a=shortlog;h=refs/heads/develop](https://git.pwmt.org/?p=zathura.git;a=shortlog;h=refs/heads/develop) (develop)
- [https://git.pwmt.org/?p=zathura.git](https://git.pwmt.org/?p=zathura.git) (summary)

#### girara {#l7dfb095}

- [https://git.pwmt.org/?p=girara.git;a=shortlog;h=refs/heads/develop](https://git.pwmt.org/?p=girara.git;a=shortlog;h=refs/heads/develop) (develop)
- [https://git.pwmt.org/?p=girara.git](https://git.pwmt.org/?p=girara.git) (summary)

<!-- **派生版 [#oea86148] -->
<!--  -->
<!-- zathura を SyncTeX に対応させた zathura-synctex が作成されています． → 本家にマージされました．~ -->
<!--  -->
<!-- -[[zathura-synctex:https://github.com/rschatz/zathura-synctex]] -->
<!-- -[[[zathura] [PATCH] synctex forward synchronization:http://lists.pwmt.org/archive/zathura/2013-December/001324.html]] -->
<!-- -[[[zathura] Synctex support:http://lists.pwmt.org/archive/zathura/2011-August/000047.html]] -->
<!-- -[[[zathura]  Synctex support:http://www.mail-archive.com/zathura@lists.pwmt.org/msg00042.html]] -->
<!-- -[[Re: [zathura] Synctex support:http://www.mail-archive.com/zathura@lists.pwmt.org/msg00019.html]] -->

## ダウンロード/インストール {#w2221884}

### OS X {#hcc17832}

- [/trunk/dports/office/zathura](http://trac.macports.org/browser/trunk/dports/office/zathura/Portfile)
- [/trunk/dports/office/zathura-plugin-pdf-poppler](http://trac.macports.org/browser/trunk/dports/office/zathura-plugin-pdf-poppler/Portfile)

### Arch Linux {#h8cd5d50}

- [https://www.archlinux.org/packages/?name=zathura](https://www.archlinux.org/packages/?name=zathura)
- [https://www.archlinux.org/packages/?q=zathura](https://www.archlinux.org/packages/?q=zathura)

### Linux Mint {#cc8ebe01}

- [http://packages.ubuntu.com/ja/zathura](http://packages.ubuntu.com/ja/zathura)

### Debian {#x8dcc844}

- [https://packages.debian.org/ja/zathura](https://packages.debian.org/ja/zathura)

### Fedora {#f03f2bfa}

- [https://apps.fedoraproject.org/packages/zathura](https://apps.fedoraproject.org/packages/zathura)

### openSUSE {#p01e8065}

- [http://software.opensuse.org/package/zathura](http://software.opensuse.org/package/zathura)

### Gentoo Linux {#z80dcad8}

- [http://packages.gentoo.org/package/app-text/zathura](http://packages.gentoo.org/package/app-text/zathura)

## 不具合 {#ue94eec4}

- [http://bugs.pwmt.org/](http://bugs.pwmt.org/)

## 使い方 {#w279d8d0}

### キーボード操作 {#ta398819}

zathura は [Vim](/Vim/) キーバインドを採用しています．<br>
[Emacs](/Emacs/) ライクなキーバインドにカスタマイズすることもできます． → [Emacs like key bindings for zathura](https://gist.github.com/3168313)<br>

### コマンドラインオプション {#u4f91695}

<!-- -https://git.pwmt.org/?p=zathura.git;a=blob_plain;f=main.c;hb=develop -->
- [https://git.pwmt.org/?p=zathura.git;a=blob_plain;f=main.c](https://git.pwmt.org/?p=zathura.git;a=blob_plain;f=main.c)

```
$ zathura --help
Usage:
  zathura [OPTION...]  [file1] [file2] [...]

Help Options:
  -h, --help                           Show help options

Application Options:
  -e, --reparent=xid                   Reparents to window specified by xid
  -c, --config-dir=path                Path to the config directory
  -d, --data-dir=path                  Path to the data directory
  -p, --plugins-dir=path               Path to the directories containing plugins
  --fork                               Fork into the background
  -w, --password=password              Document password
  -P, --page=number                    Page number to go to
  -l, --debug=level                    Log level (debug, info, warning, error)
  -v, --version                        Print version information
  -s, --synctex                        Enable synctex support
  -x, --synctex-editor-command=cmd     Synctex editor (forwarded to the synctex command)
  --synctex-forward=position           Move to given synctex position
  --synctex-pid=pid                    Highlight given position in the given process
  --mode=mode                          Start in a non-default mode
```

<!-- $ zathura - -version -->
<!-- zathura 0.2.6 -->
<!-- (plugin) djvu (0.2.3) (/usr/lib/zathura/djvu.so) -->
<!-- (plugin) pdf-poppler (0.2.4) (/usr/lib/zathura/pdf.so) -->
<!-- (plugin) ps (0.2.2) (/usr/lib/zathura/ps.so) -->

## SyncTeX {#g93d0312}

- [LaTeX forward/inverse searches with Zathura](http://wiki.math.cmu.edu/iki/wiki/tips/20140310-zathura-fsearch.html)

### forward search {#m29e6702}

TeX ファイルの 30 行目に対応する PDF ファイルの該当する箇所にジャンプしたい場合は

```
$ zathura hoge.pdf &
$ zathura --synctex-forward 30:0:hoge.tex hoge.pdf
```

のように実行します．<br>
zathura で forward search をする場合は，あらかじめ PDF ファイルを開いておく必要があります．<br>

プロセス ID を指定して forward search をすることもできます．<br>
pgrep や pidof を使用するとプロセス ID が取得できます．<br>

```
$ zathura hoge.pdf &
$ PID=`pgrep zathura`
$ zathura --synctex-pid=$PID --synctex-forward 30:0:hoge.tex hoge.pdf
```

```
$ zathura hoge.pdf &
$ PID=`pidof zathura`
$ zathura --synctex-pid=$PID --synctex-forward 30:0:hoge.tex hoge.pdf
```

### inverse search {#c00c992e}

TeXstudio の場合は

```
$ zathura -s -x "texstudio '%{input}' -line %{line}" "hoge.pdf"
```

のように実行して zathura 上で Ctrl + 左クリックを実行すると TeXstudio が起動して TeX 文書の対応する行にジャンプします．<br>

## 関連リンク {#l21c05df}

- [Emacs like key bindings for zathura](https://gist.github.com/3168313)
    <!-- -[[zathura - a document viewer (Page 1) / Community Contributions / Arch Linux Forums:https://bbs.archlinux.org/viewtopic.php?id=115118]] -->
    <!-- -[[zathura - a PDF viewer (Page 1) / Community Contributions / Arch Linux Forums:https://bbs.archlinux.org/viewtopic.php?id=80458]] -->
    <!-- - -[[SyncTeX kludge:https://bbs.archlinux.org/viewtopic.php?pid=807105#p807105]] -->
