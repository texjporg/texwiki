---
title: "Atril"
url: "/Atril/"
date: 2025-09-25T09:55:23Z
pukiwiki: "Atril"
---

# Atril

## [Atril](https://github.com/mate-desktop/atril) {#x498e285}

Atril は複数ページの文書を表示可能な MATE デスクトップ環境の公式な文書ビューアです。SyncTeX に対応しています。

- [Atril - PDF ビューア | MATEwiki](https://wiki.mate-desktop.org/ja/mate-desktop/applications/atril/)
- [GitHub - mate-desktop/atril: A document viewer for MATE](https://github.com/mate-desktop/atril)

### お知らせ {#c4fe5ed2}

- [Linux向けPDFビューア「Evince」「Atril」「xreader」に、細工されたPDFファイルを開くだけで任意コード実行につながる深刻な脆弱性「CVE-2026-46529」が報告された。<br><br>公開された検証コードによると、PDF内部の/GoToRアクションと引数処理の不備を悪用し、外部ライブラリを読み込ませることで、利用者権限で任意コードを実行できるという。<br><br>影響を受けるのは、Atril 1.28.4未満、xreader 4.6.3未満、GTK3版Evince 48.1未満など。研究者の João Medeiros 氏はGitHub上でPoCを公開しており、PDFとELF共有ライブラリを一体化した「ポリグロットファイル」を用いることで、閲覧時のクリック操作だけでリバースシェルを起動できるとしている。<br><br>脆弱性は長年存在していた可能性があり、原因はユーザー制御可能な文字列を適切にエスケープせずコマンドラインへ渡していた点にある。GTK4版Evinceでは特定の悪用経路が無効化されているものの、根本的な引数注入自体は残ると指摘されている。利用者には速やかなアップデート適用が推奨される。](https://x.com/yousukezan/status/2057723843159236609)
- [GitHub - N1et/CVE-2026-46529: Evince/xreader/Atril RCE exploit to CVE-2026-46529 · GitHub](https://github.com/N1et/CVE-2026-46529)

### リリース情報 {#re025d19}

- [https://github.com/mate-desktop/atril/releases](https://github.com/mate-desktop/atril/releases)
- [https://github.com/mate-desktop/atril/tags](https://github.com/mate-desktop/atril/tags)

### ChangeLog {#z8d9c1b2}

- [https://mate-desktop.org/ja/blog/](https://mate-desktop.org/ja/blog/)
- [https://github.com/mate-desktop/atril/commits/master/](https://github.com/mate-desktop/atril/commits/master/)
    <!-- - - [[meson: Replace backend boolean options with features · mate-desktop/atril@46997f7 · GitHub:https://github.com/mate-desktop/atril/commit/46997f7337803637f52a246c07de90500b3ef1d2]] Replace backend boolean options with features -->
    <!-- - - [[meson: make ps and epub optional backends · mate-desktop/atril@27fc5fe · GitHub:https://github.com/mate-desktop/atril/commit/27fc5fef126e173d922db3aa22df12ed6a4aa6ea]] &lt;- - Atril 1.28.2 (2025-04-25) で PostScript のバックエンドが無効化される -->

### インストール {#n40b8ac1}

#### Linux {#s35b31c9}

- [https://archlinux.org/packages/?name=atril](https://archlinux.org/packages/?name=atril)
- [https://packages.ubuntu.com/atril](https://packages.ubuntu.com/atril)
- [https://packages.debian.org/atril](https://packages.debian.org/atril)
- [https://packages.fedoraproject.org/pkgs/atril/atril/](https://packages.fedoraproject.org/pkgs/atril/atril/)
- [https://software.opensuse.org/package/atril](https://software.opensuse.org/package/atril)

### SyncTeX {#ra20a002}

[Pluma](/Pluma/#synctex)、[AUCTeX](/AUCTeX/#atril) を参照。

### コマンドラインオプション {#aa0def49}

- [https://github.com/mate-desktop/atril/blob/master/shell/main.c](https://github.com/mate-desktop/atril/blob/master/shell/main.c)
- [https://github.com/mate-desktop/atril/blob/master/po/ja.po](https://github.com/mate-desktop/atril/blob/master/po/ja.po)

```
$ atril --help-all
用法:
  atril [オプション…] [ファイル…] MATE 文書ビューアー

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
  -p, --page-label=ページ         表示する文書のページラベル
  -i, --page-index=NUMBER         表示する文書のページ番号
  -f, --fullscreen                全画面モードで起動する
  -n, --named-dest=DEST           表示先を指定する
  -s, --presentation              プレゼンテーションモードで起動する
  -w, --preview                   プレビューアーとして起動する
  -l, --find=STRING               文書の中から単語や語句を検索する
  --display=DISPLAY               使用する X のディスプレイを指定する
```

### Night Mode（夜間モード） {#z37861d3}

Atril には Night Mode（夜間モード）という色を反転させる機能があります。

Ctrl+I で Night Mode（夜間モード）を切り替えることができます。
