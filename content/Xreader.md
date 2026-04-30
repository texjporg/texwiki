---
title: "Xreader"
url: "/Xreader/"
date: 2025-09-25T09:55:52Z
pukiwiki: "Xreader"
---

# Xreader

## [Xreader](https://github.com/linuxmint/xreader) {#gcc7d137}

Xreader は X-Apps のドキュメントビューアーです。SyncTeX に対応しています。

- [GitHub - linuxmint/xreader: A generic Document Reader](https://github.com/linuxmint/xreader)
- [XApps &mdash; Linux Mint Developer Guide  documentation#xreader](https://linuxmint-developer-guide.readthedocs.io/en/latest/xapps.html#xreader)

### リリース情報 {#nc26750d}

- [https://github.com/linuxmint/xreader/releases](https://github.com/linuxmint/xreader/releases)

### インストール {#c7459ad2}

- [https://github.com/linuxmint/xreader/blob/master/INSTALL.md](https://github.com/linuxmint/xreader/blob/master/INSTALL.md)

### SyncTeX {#h73c0bb5}

[AUCTeX](/AUCTeX/#xreader) を参照。

### コマンドラインオプション {#y06f48aa}

- [https://github.com/linuxmint/xreader/blob/master/shell/main.c](https://github.com/linuxmint/xreader/blob/master/shell/main.c)
- [https://github.com/linuxmint/xreader/blob/master/po/ja.po](https://github.com/linuxmint/xreader/blob/master/po/ja.po)

```
$ xreader --help-all
用法:
  xreader [オプション…] [ファイル…] 文書ビューアー

ヘルプのオプション:
  -h, --help                      ヘルプのオプションを表示する
  --help-all                      ヘルプのオプションをすべて表示する
  --help-sm-client                Show session management options
  --help-gtk                      GTK+ のオプションを表示する

Session management options:
  --sm-client-disable             Disable connection to session manager
  --sm-client-state-file=FILE     Specify file containing saved configuration
  --sm-client-id=ID               Specify session management ID

GTK+ のオプション
  --class=CLASS                   ウィンドウマネージャーで利用するプログラムのクラスを指定する
  --name=NAME                     ウィンドウマネージャーで利用するプログラムの名前を指定する
  --gtk-module=MODULES            追加で読み込む GTK+ モジュールを指定する
  --g-fatal-warnings              警告をすべて致命的と見なす

アプリケーションのオプション:
  -p, --page-label=ページ         表示する文書ページのラベルです。
  -i, --page-index=番号           表示する文書ページの番号です。
  -f, --fullscreen                xreader を全画面表示で実行します
  -n, --named-dest=移動先         表示する文書ページの名前付きの移動先です。
  -s, --presentation              xreader をプレゼンテーションモードで実行します
  -w, --preview                   xreader をプレビューアーとして実行します
  -l, --find=文字列               文書の中から検索する単語や語句です
  --display=DISPLAY               使用する X のディスプレイを指定する
```
