---
title: "Texmaker/設定"
url: "/Texmaker/設定/"
date: 2012-07-12T19:53:47Z
bookCollapseSection: true
pukiwiki: "Texmaker/設定"
---

# Texmaker/設定

[Texmaker](/Texmaker/) > 設定

***

***

## 設定 {#e3cd1932}

### 設定ファイル {#ke75945d}

> <table>
> <thead>
> <tr><th style="text-align:center">環境</th><th style="text-align:center">設定ファイルが保存されるフォルダー</th><th style="text-align:center">ファイル名</th></tr>
> </thead>
> <tbody>
> <tr><td>Windows (デスクトップ版インストーラー)</td><td>%APPDATA%\xm1\</td><td>texmaker.ini, texmakerapp.ini, texmakerpdfview.ini</td></tr>
> <tr><td>Windows (USB パッケージ)</td><td>Texmaker の実行ファイルと同じフォルダー</td><td>texmaker.ini, texmakerapp.ini, texmakerpdfview.ini</td></tr>
> <tr><td>macOS</td><td>$HOME/.config/xm1/</td><td>texmaker.ini, texmakerapp.ini, texmakerpdfview.ini</td></tr>
> <tr><td>Linux</td><td>$HOME/.config/xm1/</td><td>texmaker.ini, texmakerapp.ini, texmakerpdfview.ini</td></tr>
> </tbody>
> </table>
>

### 設定のリセット {#qc1461dd}

<ins>O</ins>ptions &gt; Settings File &gt; Reset Settings

### コマンド {#cab65285}

{{< children >}}

を参照．

### クイックビルド {#y84eb800}

<ins>O</ins>ptions &gt; Configure Texmaker &gt; Quick Build

LuaLaTeX + View PDF を選択します．

ユーザー定義でコマンドを指定して実行することもできます．

Quick Build を実行して複数のビューアが起動してしまう場合は

- Don't launch a new instance of the viewer if the dvi/ps/pdf file is already opened にチェックを入れる
- ユーザー定義でビューアを起動する手順を除いた処理を作成する

などの方法で対処してください．

### エディタ {#y67addbe}

<ins>O</ins>ptions &gt; Configure Texmaker &gt; Editor

デフォルトの文字コードは UTF-8 です．

かな漢字変換をする際に，文字と背景が黒く表示され，読めなくなる場合は Dark theme を選択します．

日本語の文書を作成する場合は Spelling dictionary の Inline のチェックを外します．

重要なファイルを作成する場合は Record backup of opened files every 10 minutes にチェックを入れます．
