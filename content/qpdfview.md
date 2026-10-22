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

qpdfview はタブ切り替え型のドキュメントビューアです。
PDF ファイルが表示できます。
[SyncTeX](/SyncTeX/) に対応しています。
ファイルの自動更新機能もあります。
ファイルの自動更新機能はデフォルトでは無効になっているので \[編集(E)\] &gt; \[設定...\] &gt; \[挙動(B)\] の自動更新の項目にチェックを入れて有効にする必要があります。

- [qpdfview](https://launchpad.net/qpdfview)

### 動作環境 {#g3b31065}

Windows, macOS, Linux

### License {#v29be396}

[GPLv2](https://github.com/darealshinji/qpdfview/blob/master/COPYING)

### リリース情報 {#k3e6b6c1}

[timeline : qpdfview](https://launchpad.net/qpdfview/+series) を参照．

### ChangeLog {#ne9f67d7}

- [CHANGES](https://github.com/darealshinji/qpdfview/blob/master/CHANGES)
- [コミットログ](https://github.com/darealshinji/qpdfview/commits/master/)

## ダウンロード/インストール {#h3948c41}

### Windows {#e69ac234}

- [https://github.com/darealshinji/qpdfview](https://github.com/darealshinji/qpdfview)
    - [https://github.com/darealshinji/qpdfview/releases](https://github.com/darealshinji/qpdfview/releases)

qpdfview-0.5.0-win64.zip を展開して qpdfview-0.5.0-win64 フォルダーを配置します。

コンピューターを使用する全員が使用する場合は

> C:\Program Files\qpdfview-0.5.0-win64

自分のみ使用する場合は

> C:\Users\\&lt;ユーザー名>\AppData\Local\Programs\qpdfview-0.5.0-win64

に配置すればよいでしょう。

### macOS {#p4590da3}

- [https://github.com/vit9696/qpdfview](https://github.com/vit9696/qpdfview)
    - [https://github.com/vit9696/qpdfview/releases](https://github.com/vit9696/qpdfview/releases)

### Arch Linux {#ua5dc612}

- [https://aur.archlinux.org/packages/qpdfview](https://aur.archlinux.org/packages/qpdfview)
- [https://aur.archlinux.org/packages/qpdfview-bzr](https://aur.archlinux.org/packages/qpdfview-bzr)

### Linux Mint/Ubuntu {#c6d3b357}

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

自動更新の項目をチェックするとファイルを自動的に更新してくれます。

> <strong>\[　挙動(B)　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　画像(G)　\]\[　インタフェース(I)　\]\[　ショートカット(S)　\]\[　修飾キー(M)　\]</ins></span><br>
>
> 　URLを開く:　　　　　　　　☐<br>
> 　&amp;<span style="color:black,yellow">自動更新:　　　　　　　　　☑</span>;<br>
> 　最近使用したものを追跡:　　☐<br>
> 　最近閉じたものを保持:　　　☐<br>
> 　タブを復元:　　　　　　　　☐<br>
> 　ブックマークを復元;　　　　☐<br>
> 　ファイル毎の設定を復元:　　☐<br>
> 　データベース保存間隔:　　　<ins>\[5 分　　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　プレゼンテーションを同期:　☐<br>
> 　プレゼンテーション画面:　　<ins>\[既定　　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　概要表示を同期:　　　　　　☐<br>
> 　分割ビューを同期:　　　　　☑<br>
> 　相対ジャンプ:　　　　　　　☑<br>
> 　最小限のスクロール:　　　　☐<br>
> 　拡大因子:　　　　　　　　　<ins>\[1.10　　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　並行検索の実行:　　　　　　☐<br>
> 　強調する時間:　　　　　　　<ins>\[5000 ミリ秒　　　　 \]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　強調表示の色:　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
> 　註釈の色:　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
> 　ソースエディタ:　　　　　　<ins>texstudio "%1" -line %2</ins><br>

## 使い方 {#n3df728b}

### コマンドラインオプション {#f3a7bfad}

- [https://github.com/darealshinji/qpdfview/blob/master/sources/main.cpp](https://github.com/darealshinji/qpdfview/blob/master/sources/main.cpp)

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

のように実行します。

### inverse search {#n500afd3}

\[編集(E)\] &gt; \[設定...\] &gt; \[挙動(B)\]

[TeXstudio](/TeXstudio/) の場合は
ソースエディタの項目に

```
texstudio "%1" -line %2
```

を設定します。

「%1」は絶対ファイルパスで置き換えられます。「%2」および「%3」は、それぞれ行番号と列番号で置き換えられます。

qpdfview 上でダブルクリックすると TeXstudio が起動して TeX 文書の対応する行にジャンプします。

> <strong>\[　挙動(B)　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　画像(G)　\]\[　インタフェース(I)　\]\[　ショートカット(S)　\]\[　修飾キー(M)　\]</ins></span><br>
>
> 　URLを開く:　　　　　　　　☐<br>
> 　自動更新:　　　　　　　　　☑<br>
> 　最近使用したものを追跡:　　☐<br>
> 　最近閉じたものを保持:　　　☐<br>
> 　タブを復元:　　　　　　　　☐<br>
> 　ブックマークを復元;　　　　☐<br>
> 　ファイル毎の設定を復元:　　☐<br>
> 　データベース保存間隔:　　　<ins>\[5 分　　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　プレゼンテーションを同期:　☐<br>
> 　プレゼンテーション画面:　　<ins>\[既定　　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　概要表示を同期:　　　　　　☐<br>
> 　分割ビューを同期:　　　　　☑<br>
> 　相対ジャンプ:　　　　　　　☑<br>
> 　最小限のスクロール:　　　　☐<br>
> 　拡大因子:　　　　　　　　　<ins>\[1.10　　　　　　　　\]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　並行検索の実行:　　　　　　☐<br>
> 　強調する時間:　　　　　　　<ins>\[5000 ミリ秒　　　　 \]</ins><ins>\[<strong>⇕</strong>\]</ins><br>
> 　強調表示の色:　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
> 　註釈の色:　　　　　　　　　<ins>\[#ffff00　　　　　　　\]</ins><ins>\[<strong>ᐯ</strong>\]</ins><br>
> 　&amp;<span style="color:black,yellow">ソースエディタ:　　　　　　<ins>texstudio "%1" -line %2</ins></span>;<br>
