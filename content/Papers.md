---
title: "Papers"
url: "/Papers/"
date: 2025-06-26T13:26:28Z
pukiwiki: "Papers"
---

# Papers

## [Papers](https://apps.gnome.org/ja/Papers/) {#yd6d1b48}

Papers は GNOME デスクトップ用のドキュメントビューアーです。さまざまな形式の文書を表示したり、文書内を検索したり、文書に注釈を付けたりすることができます。

Papers は次の文書をサポートしています: PDF, DjVu, TIFF, Comic Books アーカイブ (CBR, CBT, CBZ, CB7)。

- [Papers – GNOMEアプリ](https://apps.gnome.org/ja/Papers/)
- [GNOMEへようこそ – Papers](https://welcome.gnome.org/ja/app/Papers/)
- [GNOME / Papers · GitLab](https://gitlab.gnome.org/GNOME/papers)
- [GNOME PDF viewer app Papers](https://lists.debian.org/debian-accessibility/2025/02/msg00018.html)
- [PapersはGNOMEのデフォルトPDFビューアとしてEvinceに取って代わることが期待されています。](https://ja.linux-terminal.com/?p=8507)

### お知らせ {#t48892bd}

GNOME 49 (2025-09-17) で標準のドキュメントビューアーが Evince から Papers に変更されました。--&gt; [https://release.gnome.org/49/#new-document-viewer](https://release.gnome.org/49/#new-document-viewer)

Papers では Evince の機能である SyncTeX、XPS、PostScript、DVI のサポートが削除されました。

- [GNOME / Papers · GitLab](https://gitlab.gnome.org/GNOME/papers)
    - [Rebrand Evince to Papers](https://gitlab.gnome.org/GNOME/papers/-/commit/4341dc7988ab9b31eefc7f283dca1c57878de970) &lt;-- バージョン [46.0](https://gitlab.gnome.org/GNOME/papers/-/blob/main/NEWS.md?ref_type=heads#papers-460) で Evince から Papers に名称変更
    - [Drop Synctex support](https://gitlab.gnome.org/GNOME/papers/-/commit/59409c2f18137ea794a21041b0a1a71367f255ed) &lt;-- バージョン [46.0](https://gitlab.gnome.org/GNOME/papers/-/blob/main/NEWS.md?ref_type=heads#papers-460) で SyncTeX をサポート対象外に
        - [Synctex support](https://gitlab.gnome.org/GNOME/papers/-/issues/47) &lt;-- SyncTeX サポート復活の要望
        - [Draft: libdocument: restore synctex support](https://gitlab.gnome.org/GNOME/papers/-/merge_requests/90) &lt;-- SyncTeX サポート復活のマージリクエスト
    - [Remove DVI support](https://gitlab.gnome.org/GNOME/papers/-/commit/edf8c1a71ca56ab0f99ccb27db3fa467137b97b2) &lt;-- バージョン [46.0](https://gitlab.gnome.org/GNOME/papers/-/blob/main/NEWS.md?ref_type=heads#papers-460) で DVI をサポート対象外に
    - [Dropped support for DVI file format.<br>Dropped synctex support.](https://gitlab.gnome.org/GNOME/papers/-/tags/46.0)
    - [libdocument: backends: remove XPS support](https://gitlab.gnome.org/GNOME/papers/-/commit/3aa9c695e533705fe3cadba07c75f5f8ee5a6955) &lt;-- バージョン [48.beta](https://gitlab.gnome.org/GNOME/papers/-/blob/main/NEWS.md?ref_type=heads#papers-48beta) で XPS をサポート対象外に
    - [libdocument: backends: remove PostScript backend](https://gitlab.gnome.org/GNOME/papers/-/commit/5ca1f851babab56ffdb0023410626903929b396f) &lt;-- バージョン [48.beta](https://gitlab.gnome.org/GNOME/papers/-/blob/main/NEWS.md?ref_type=heads#papers-48beta) で PostScript をサポート対象外に
        - [What to do with PostScript support?](https://gitlab.gnome.org/GNOME/papers/-/issues/151) &lt;-- PostScript サポートについて
        - [libdocument: backends: remove XPS and PostScript backends](https://gitlab.gnome.org/GNOME/papers/-/merge_requests/367) &lt;-- XPS と PostScript バックエンドの削除について

### リリース情報 {#edce1549}

- [https://gitlab.gnome.org/GNOME/papers/-/tags](https://gitlab.gnome.org/GNOME/papers/-/tags)

### ChangeLog {#g9f7c4d0}

- [https://gitlab.gnome.org/GNOME/papers/-/blob/main/NEWS.md](https://gitlab.gnome.org/GNOME/papers/-/blob/main/NEWS.md)

## ダウンロード/インストール {#ybca190a}

### Windows {#idf7eb36}

- [https://github.com/cosmicvi/papers-for-windows](https://github.com/cosmicvi/papers-for-windows)

### macOS {#c720955a}

- [https://formulae.brew.sh/formula/gnome-papers](https://formulae.brew.sh/formula/gnome-papers)

### Linux {#p9649c9c}

- [https://flathub.org/apps/org.gnome.Papers](https://flathub.org/apps/org.gnome.Papers)
- [https://archlinux.org/packages/?name=papers](https://archlinux.org/packages/?name=papers)
- [https://packages.debian.org/search?keywords=papers](https://packages.debian.org/search?keywords=papers)
- [https://packages.ubuntu.com/search?keywords=papers](https://packages.ubuntu.com/search?keywords=papers)
- [https://packages.fedoraproject.org/pkgs/papers/papers/](https://packages.fedoraproject.org/pkgs/papers/papers/)
- [https://software.opensuse.org/package/papers](https://software.opensuse.org/package/papers)

## 使い方 {#gb97275a}

### コマンドラインオプション {#lca61f1a}

- [https://gitlab.gnome.org/GNOME/papers/-/blob/main/shell/src/application.rs](https://gitlab.gnome.org/GNOME/papers/-/blob/main/shell/src/application.rs)
- [https://gitlab.gnome.org/GNOME/papers/-/blob/main/po/ja.po](https://gitlab.gnome.org/GNOME/papers/-/blob/main/po/ja.po)

```
$ papers --help-all
用法:
 papers [オプション…] [ファイル…] Document Viewer

ヘルプのオプション:
  -h, --help                   ヘルプのオプションを表示する
  --help-all                   ヘルプのオプションをすべて表示する
  --help-gapplication          GApplication のオプションを表示する

GApplication オプション:
  --gapplication-service       GApplication サービスモードに入る（D-Bus サービスファイルから使用）

アプリケーションのオプション:
  -p, --page-label=PAGE        表示するドキュメントのページラベル。
  -i, --page-index=NUMBER      表示するドキュメントのページ番号。
  -n, --named-dest=DEST        表示する名前付きリンク先。
  -f, --fullscreen             papers をフルスクリーンモードで実行する。
  -s, --presentation           プレゼンテーションモードで実行する。
  --version                    プログラムのバージョンを表示する。
```

### Night Mode（夜間モード） {#v40d9cc7}

Papers には Night Mode（夜間モード）という色を反転させる機能があります。

Ctrl+I で Night Mode（夜間モード）を切り替えることができます。
