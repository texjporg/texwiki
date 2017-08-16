---
title: "qpdfview"
url: "/qpdfview/"
date: 2012-09-21T00:36:06Z
pukiwiki: "qpdfview"
---

# qpdfview

## [qpdfview](https://launchpad.net/qpdfview) {#gb497957}

***

***

## qpdfview とは {#o070cb99}

qpdfview はタブ切り替え型のドキュメントビューアです．
PDF ファイルや PS ファイルが表示できます．
[SyncTeX](/SyncTeX/) に対応しています．
ファイルの自動更新機能もあります．
ファイルの自動更新機能はデフォルトでは無効になっているので設定で有効にする必要があります．

- [qpdfview](https://launchpad.net/qpdfview)

### 動作環境 {#g3b31065}

Linux

### License {#v29be396}

[GPLv2](http://bazaar.launchpad.net/~adamreichold/qpdfview/trunk/view/head:/COPYING)

### リリース情報 {#k3e6b6c1}

[timeline : qpdfview](https://launchpad.net/qpdfview/+series) を参照．

### ChangeLog {#ne9f67d7}

- [CHANGES](http://bazaar.launchpad.net/~adamreichold/qpdfview/trunk/view/head:/CHANGES)
- [コミットログ](http://bazaar.launchpad.net/~adamreichold/qpdfview/trunk/changes)

## ダウンロード/インストール {#h3948c41}

### Arch Linux {#ua5dc612}

- [https://aur.archlinux.org/packages/qpdfview/](https://aur.archlinux.org/packages/qpdfview/)

### Linux Mint {#c6d3b357}

- [https://packages.ubuntu.com/ja/qpdfview](https://packages.ubuntu.com/ja/qpdfview)

### Debian {#g4ce84b5}

- [https://packages.debian.org/ja/qpdfview](https://packages.debian.org/ja/qpdfview)

### Fedora {#qa034e43}

- [https://apps.fedoraproject.org/packages/qpdfview](https://apps.fedoraproject.org/packages/qpdfview)

### openSUSE {#e541d6b9}

- [http://software.opensuse.org/package/qpdfview](http://software.opensuse.org/package/qpdfview)

## 設定 {#uc8afff9}

### 自動更新 {#na403c1a}

\[編集(E)\] &gt; \[設定...\] &gt; \[挙動(B)\]

自動更新の項目をチェックするとファイルを自動的に更新してくれます．

> <strong>\[　挙動(B)　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　画像(G)　\]\[　インタフェース(I)　\]\[　ショートカット(S)　\]\[　修飾鍵(M)　\]</ins></span><br>
>
> 　　URLを開く:　　　　　　　　　　　　　　　 ☐<br>
> 　　自動更新:　　　　　　　　　　　　　　　　☑<br>
> 　　直近に使われたものを追跡:　　　　　☐<br>
> 　　直近に閉じられたものを保持:　　　　☐<br>
> 　　タブを戻す:　　　　　　　　　　　　　　　☐<br>
> 　　しおりを復帰させる;　　　　　　　　　　☐<br>
> 　　ファイル毎の設定を復帰させる:　　　☐<br>
> 　　データベース保存間隔:　　　　　　　　<ins>\[5 分　　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　　プレゼンテーションを同期:　　　　　　☐<br>
> 　　プレゼンテーションスクリーン:　　　　 <ins>\[既定　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　　概要表示を同期:　　　　　　　　　　　 ☐<br>
> 　　拡大因子:　　　　　　　　　　　　　　　 <ins>\[1.10　　　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　　強調する時間:　　　　　　　　　　　　　<ins>\[5000 ミリ秒　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　　強調表示の色:　　　　　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
> 　　註釈の色:　　　　　　　　　　　　　　　 <ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
> 　　ソースエディタ:　　　　　　　　　　　　　<ins>texstudio "%1" -line %2</ins><br>

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

のように実行します．

### inverse search {#n500afd3}

\[編集(E)\] &gt; \[設定...\] &gt; \[挙動(B)\]

[TeXstudio](/TeXstudio/) の場合は
ソースエディタの項目に

```
texstudio "%1" -line %2
```

を設定します．

> <strong>\[　挙動(B)　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　画像(G)　\]\[　インタフェース(I)　\]\[　ショートカット(S)　\]\[　修飾鍵(M)　\]</ins></span><br>
>
> 　　URLを開く:　　　　　　　　　　　　　　　 ☐<br>
> 　　自動更新:　　　　　　　　　　　　　　　　☑<br>
> 　　直近に使われたものを追跡:　　　　　☐<br>
> 　　直近に閉じられたものを保持:　　　　☐<br>
> 　　タブを戻す:　　　　　　　　　　　　　　　☐<br>
> 　　しおりを復帰させる;　　　　　　　　　　☐<br>
> 　　ファイル毎の設定を復帰させる:　　　☐<br>
> 　　データベース保存間隔:　　　　　　　　<ins>\[5 分　　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　　プレゼンテーションを同期:　　　　　　☐<br>
> 　　プレゼンテーションスクリーン:　　　　 <ins>\[既定　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　　概要表示を同期:　　　　　　　　　　　 ☐<br>
> 　　拡大因子:　　　　　　　　　　　　　　　 <ins>\[1.10　　　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　　強調する時間:　　　　　　　　　　　　　<ins>\[5000 ミリ秒　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　　強調表示の色:　　　　　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
> 　　註釈の色:　　　　　　　　　　　　　　　 <ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
> 　　ソースエディタ:　　　　　　　　　　　　　<ins>texstudio "%1" -line %2</ins><br>

qpdfview 上でダブルクリックすると TeXstudio が起動して TeX 文書の対応する行にジャンプします．
