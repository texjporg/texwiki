---
title: "qpdfview"
url: "/qpdfview/"
date: 2012-09-21T00:36:06Z
pukiwiki: "qpdfview"
---

# qpdfview

## [qpdfview](https://launchpad.net/qpdfview) {#gb497957}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## qpdfview とは {#o070cb99}

qpdfview はタブ切り替え型のドキュメントビューアです．<br>
PDF ファイルや PS ファイルが表示できます．<br>
SyncTeX に対応しています．<br>
ファイルの自動更新機能もあります．<br>
ファイルの自動更新機能 (Auto-refresh) はデフォルトでは無効になっているので設定で有効にする必要があります．<br>

- [qpdfview](https://launchpad.net/qpdfview)

### 動作環境 {#g3b31065}

Linux

### License {#v29be396}

[GPLv2](http://bazaar.launchpad.net/~adamreichold/qpdfview/trunk/view/head:/COPYING)

### リリース情報 {#k3e6b6c1}

[timeline : qpdfview](https://launchpad.net/qpdfview/+series) を参照．<br>

### ChangeLog {#ne9f67d7}

- [CHANGES](http://bazaar.launchpad.net/~adamreichold/qpdfview/trunk/view/head:/CHANGES)
- [コミットログ](http://bazaar.launchpad.net/~adamreichold/qpdfview/trunk/changes)

## ダウンロード/インストール {#h3948c41}

### Arch Linux {#ua5dc612}

- [https://aur.archlinux.org/packages/qpdfview/](https://aur.archlinux.org/packages/qpdfview/)

### Linux Mint {#c6d3b357}

- [http://packages.ubuntu.com/ja/qpdfview](http://packages.ubuntu.com/ja/qpdfview)

### Debian {#g4ce84b5}

- [https://packages.debian.org/ja/qpdfview](https://packages.debian.org/ja/qpdfview)

### Fedora {#qa034e43}

- [https://apps.fedoraproject.org/packages/qpdfview](https://apps.fedoraproject.org/packages/qpdfview)

### openSUSE {#e541d6b9}

- [http://software.opensuse.org/package/qpdfview](http://software.opensuse.org/package/qpdfview)

### Gentoo Linux {#ka0be970}

- [http://packages.gentoo.org/package/app-text/qpdfview](http://packages.gentoo.org/package/app-text/qpdfview)

## 設定 {#uc8afff9}

### Auto-refresh {#na403c1a}

\[Edit\]-\[Settings...\]-\[Behaviour\]

Auto-refresh の項目をチェックするとファイルを自動的に更新してくれます．

***

　　<strong>\[　Behavior　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　Graphics　\]\[　Interface　\]\[　Shortcuts　\]\[　Modifiers　\]</ins></span><br>
　　　　Open URL:　　　　　　　　　　　　　　　☐<br>
　　　　Auto-refresh:　　　　　　　　　　　　　☑<br>
　　　　Track recently used:　　　　　　　　　☐<br>
　　　　Keep recently closed:　　　　　　　　 ☐<br>
　　　　Restore tabs:　　　　　　　　　　　　　☐<br>
　　　　Restore bookmarks:　　　　　　　　　☐<br>
　　　　Restore per-file settings:　　　　　　☐<br>
　　　　Synchronize presentation:　　　　　☐<br>
　　　　Presentation screen:　　　　　　　　<ins>\[Default　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
　　　　Highlight duration:　　　　　　　　　　<ins>\[5000 ms　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
　　　　Highlight color:　　　　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
　　　　Annotation color:　　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
　　　　Source editor:　　　　　　　　　　　　<ins>texstudio "%1" -line %2</ins><br>

***

## 使い方 {#n3df728b}

### コマンドラインオプション {#f3a7bfad}

- [http://bazaar.launchpad.net/~adamreichold/qpdfview/trunk/view/head:/sources/main.cpp](http://bazaar.launchpad.net/~adamreichold/qpdfview/trunk/view/head:/sources/main.cpp)

```
$ qpdfview --help
Usage: qpdfview [options] [--] [file[#page]] [file[#src:name:line:column]] ...

Available options:
  --help                      Show this information
  --quiet                     Suppress warning messages when opening files
  --search text               Search for text in the current tab
  --unique                    Open files as tabs in unique window
  --unique --instance name    Open files as tabs in named instance
  --unique --choose-instance  Open files as tabs after choosing an instance name
```

## SyncTeX {#pd09d0e8}

### forward search {#edba988b}

TeX ファイルの 30 行目に対応する PDF ファイルの該当する箇所にジャンプしたい場合は

```
$ qpdfview --unique "hoge.pdf#src:hoge.tex:30:0"
```

のように実行します．<br>

### inverse search {#n500afd3}

\[Edit\]-\[Settings...\]-\[Behaviour\]

TeXstudio の場合は<br>
Source editor の項目に

```
texstudio "%1" -line %2
```

を設定します．<br>

***

　　<strong>\[　Behavior　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　Graphics　\]\[　Interface　\]\[　Shortcuts　\]\[　Modifiers　\]</ins></span><br>
　　　　Open URL:　　　　　　　　　　　　　　　☐<br>
　　　　Auto-refresh:　　　　　　　　　　　　　☑<br>
　　　　Track recently used:　　　　　　　　　☐<br>
　　　　Keep recently closed:　　　　　　　　 ☐<br>
　　　　Restore tabs:　　　　　　　　　　　　　☐<br>
　　　　Restore bookmarks:　　　　　　　　　☐<br>
　　　　Restore per-file settings:　　　　　　☐<br>
　　　　Synchronize presentation:　　　　　☐<br>
　　　　Presentation screen:　　　　　　　　<ins>\[Default　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
　　　　Highlight duration:　　　　　　　　　　<ins>\[5000 ms　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
　　　　Highlight color:　　　　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
　　　　Annotation color:　　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
　　　　Source editor:　　　　　　　　　　　　<ins>texstudio "%1" -line %2</ins><br>

***

qpdfview 上でダブルクリックすると TeXstudio が起動して TeX 文書の対応する行にジャンプします．<br>
