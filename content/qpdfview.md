---
title: "qpdfview"
url: "/qpdfview/"
date: 2012-09-21T00:36:06Z
pukiwiki: "qpdfview"
---

# qpdfview

## [qpdfview](https://launchpad.net/qpdfview) {#gb497957}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

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

### Ubuntu {#c6d3b357}

- [Ubuntu -- パッケージ検索結果 -- qpdfview](http://packages.ubuntu.com/ja/qpdfview)

### Debian {#g4ce84b5}

- [Debian -- パッケージ検索結果 -- qpdfview](http://packages.debian.org/ja/qpdfview)

### Fedora {#qa034e43}

- [https://apps.fedoraproject.org/packages/qpdfview](https://apps.fedoraproject.org/packages/qpdfview)

### openSUSE {#e541d6b9}

- [http://software.opensuse.org/package/qpdfview](http://software.opensuse.org/package/qpdfview)

### Arch Linux {#ua5dc612}

- [https://aur.archlinux.org/packages/qpdfview/](https://aur.archlinux.org/packages/qpdfview/)

## 設定 {#uc8afff9}

### Auto-refresh {#na403c1a}

\[Edit\]-\[Settings...\]-\[Behaviour\]

Auto-refresh の項目をチェックするとファイルを自動的に更新してくれます．

***

　　<strong>\[　Behavior　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　Graphics　\]\[　Interface　\]\[　Shortcuts　\]\[　Modifiers　\]\[ ◀ \]\[ ▶ \]</ins></span><br>
　　　　Open URL:　　　　　　　　　　　　　　　☐<br>
　　　　Auto-refresh:　　　　　　　　　　　　　☑<br>
　　　　Track recently used:　　　　　　　　　☐<br>
　　　　Restore tabs:　　　　　　　　　　　　　☐<br>
　　　　Restore bookmarks:　　　　　　　　　☐<br>
　　　　Restore per-file settings:　　　　　　☐<br>
　　　　Synchronize presentation:　　　　　☐<br>
　　　　Presentation screen:　　　　　　　　<ins>\[Default　　　　　　　\]</ins><ins>\[◆\]</ins><br>
　　　　Highlight color:　　　　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[▼\]</ins><br>
　　　　Highlight duration:　　　　　　　　　　<ins>\[5000 ms　　　　　　\]</ins><ins>\[◆\]</ins><br>
　　　　Annotation color:　　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[▼\]</ins><br>
　　　　Source editor:　　　　　　　　　　　　<ins>texworks --position=%2 "%1"</ins><br>

***

## SyncTeX {#pd09d0e8}

### forward search {#edba988b}

TeX ファイルの 30 行目に対応する PDF ファイルの該当する箇所にジャンプしたい場合は

```
$ qpdfview --unique "hoge.pdf#src:hoge.tex:30:0"
```

のように実行します．<br>

### inverse search {#n500afd3}

\[Edit\]-\[Settings...\]-\[Behaviour\]

TeXworks の場合は<br>
Source editor の項目に

```
texworks --position=%2 "%1"
```

を設定します．<br>

***

　　<strong>\[　Behavior　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　Graphics　\]\[　Interface　\]\[　Shortcuts　\]\[　Modifiers　\]\[ ◀ \]\[ ▶ \]</ins></span><br>
　　　　Open URL:　　　　　　　　　　　　　　　☐<br>
　　　　Auto-refresh:　　　　　　　　　　　　　☑<br>
　　　　Track recently used:　　　　　　　　　☐<br>
　　　　Restore tabs:　　　　　　　　　　　　　☐<br>
　　　　Restore bookmarks:　　　　　　　　　☐<br>
　　　　Restore per-file settings:　　　　　　☐<br>
　　　　Synchronize presentation:　　　　　☐<br>
　　　　Presentation screen:　　　　　　　　<ins>\[Default　　　　　　　\]</ins><ins>\[◆\]</ins><br>
　　　　Highlight color:　　　　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[▼\]</ins><br>
　　　　Highlight duration:　　　　　　　　　　<ins>\[5000 ms　　　　　　\]</ins><ins>\[◆\]</ins><br>
　　　　Annotation color:　　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[▼\]</ins><br>
　　　　Source editor:　　　　　　　　　　　　<ins>texworks --position=%2 "%1"</ins><br>

***

qpdfview 上でダブルクリックを実行すると TeXworks が起動して TeX 文書の対応する行にジャンプします．<br>
