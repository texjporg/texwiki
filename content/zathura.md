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
    - [girara](http://pwmt.org/projects/girara/)
- [The zathura Archives](http://lists.pwmt.org/archive/zathura/)
- [The girara Archives](http://lists.pwmt.org/archive/girara/)

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

#### zathura {#wf24e546}

- [git.pwmt.org Git - zathura.git/shortlog](http://git.pwmt.org/?p=zathura.git;a=shortlog;h=refs/heads/develop) (develop)
- [git.pwmt.org Git - zathura.git/summary](http://git.pwmt.org/?p=zathura.git) (master)

#### girara {#l7dfb095}

- [git.pwmt.org Git - girara.git/shortlog](http://git.pwmt.org/?p=girara.git;a=shortlog;h=refs/heads/develop) (develop)
- [git.pwmt.org Git - girara.git/summary](http://git.pwmt.org/?p=girara.git;a=summary) (master)

### 派生版 {#oea86148}

zathura を SyncTeX に対応させた zathura-synctex が作成されています． → 本家にマージされました．<br>

- [zathura-synctex](https://github.com/rschatz/zathura-synctex)
- \[[zathura\] Synctex support](http://lists.pwmt.org/archive/zathura/2011-August/000047.html)
- \[[zathura\]  Synctex support](http://www.mail-archive.com/zathura@lists.pwmt.org/msg00042.html)
- [Re: \[zathura\] Synctex support](http://www.mail-archive.com/zathura@lists.pwmt.org/msg00019.html)

## ダウンロード/インストール {#w2221884}

### Linux Mint {#cc8ebe01}

- [http://packages.ubuntu.com/ja/zathura](http://packages.ubuntu.com/ja/zathura)

### Debian {#x8dcc844}

- [http://packages.debian.org/ja/zathura](http://packages.debian.org/ja/zathura)

### Fedora {#f03f2bfa}

- [https://apps.fedoraproject.org/packages/zathura](https://apps.fedoraproject.org/packages/zathura)

### openSUSE {#p01e8065}

- [http://software.opensuse.org/package/zathura](http://software.opensuse.org/package/zathura)

### Arch Linux {#h8cd5d50}

- [https://www.archlinux.org/packages/?q=zathura](https://www.archlinux.org/packages/?q=zathura)

### Gentoo Linux {#z80dcad8}

- [http://packages.gentoo.org/package/app-text/zathura](http://packages.gentoo.org/package/app-text/zathura)

## SyncTeX {#g93d0312}

### inverse search {#c00c992e}

TeXworks の場合は

```
$ zathura -s -x 'texworks --position=%{line} "%{input}"' hoge.pdf
```

のように実行して zathura 上で Ctrl + 左クリックを実行すると TeXworks が起動して TeX 文書の対応する行にジャンプします．<br>

## 関連リンク {#l21c05df}

- [Emacs like key bindings for zathura](https://gist.github.com/3168313)
- [zathura - a document viewer (Page 1) / Community Contributions / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=115118)
- [zathura - a PDF viewer (Page 1) / Community Contributions / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=80458)
    - [SyncTeX kludge](https://bbs.archlinux.org/viewtopic.php?pid=807105#p807105)
