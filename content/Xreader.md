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

### お知らせ {#k9cd97f1}

- [Linux向けPDFビューア「Evince」「Atril」「xreader」に、細工されたPDFファイルを開くだけで任意コード実行につながる深刻な脆弱性「CVE-2026-46529」が報告された。<br><br>公開された検証コードによると、PDF内部の/GoToRアクションと引数処理の不備を悪用し、外部ライブラリを読み込ませることで、利用者権限で任意コードを実行できるという。<br><br>影響を受けるのは、Atril 1.28.4未満、xreader 4.6.3未満、GTK3版Evince 48.1未満など。研究者の João Medeiros 氏はGitHub上でPoCを公開しており、PDFとELF共有ライブラリを一体化した「ポリグロットファイル」を用いることで、閲覧時のクリック操作だけでリバースシェルを起動できるとしている。<br><br>脆弱性は長年存在していた可能性があり、原因はユーザー制御可能な文字列を適切にエスケープせずコマンドラインへ渡していた点にある。GTK4版Evinceでは特定の悪用経路が無効化されているものの、根本的な引数注入自体は残ると指摘されている。利用者には速やかなアップデート適用が推奨される。](https://x.com/yousukezan/status/2057723843159236609)
- [GitHub - N1et/CVE-2026-46529: Evince/xreader/Atril RCE exploit to CVE-2026-46529 · GitHub](https://github.com/N1et/CVE-2026-46529)

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

### Night Mode（夜間モード） {#u64f9f27}

Xreader には Night Mode（夜間モード）という色を反転させる機能があります。

Ctrl+I で Night Mode（夜間モード）を切り替えることができます。
