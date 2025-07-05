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
- [GNOME / Incubator / Papers · GitLab](https://gitlab.gnome.org/GNOME/Incubator/papers)
    - [Rebrand Evince to Papers](https://gitlab.gnome.org/GNOME/papers/-/commit/4341dc7988ab9b31eefc7f283dca1c57878de970) &lt;-- バージョン 46.0 で Evince から Papers に名称変更
    - [Drop Synctex support](https://gitlab.gnome.org/GNOME/papers/-/commit/59409c2f18137ea794a21041b0a1a71367f255ed) &lt;-- バージョン 46.0 で SyncTeX をサポート対象外に
    - [Remove DVI support](https://gitlab.gnome.org/GNOME/papers/-/commit/edf8c1a71ca56ab0f99ccb27db3fa467137b97b2) &lt;-- バージョン 46.0 で DVI をサポート対象外に
    - [Dropped support for DVI file format.<br>Dropped synctex support.](https://gitlab.gnome.org/GNOME/Incubator/papers/-/tags/46.0)
- [https://flathub.org/apps/org.gnome.Papers](https://flathub.org/apps/org.gnome.Papers)
- [https://archlinux.org/packages/?name=papers](https://archlinux.org/packages/?name=papers)
- [https://packages.debian.org/search?keywords=papers](https://packages.debian.org/search?keywords=papers)
- [https://packages.ubuntu.com/search?keywords=papers](https://packages.ubuntu.com/search?keywords=papers)
- [https://packages.fedoraproject.org/pkgs/papers/papers/](https://packages.fedoraproject.org/pkgs/papers/papers/)
- [https://software.opensuse.org/package/papers](https://software.opensuse.org/package/papers)
- [GNOME PDF viewer app Papers](https://lists.debian.org/debian-accessibility/2025/02/msg00018.html)

### オプション {#lca61f1a}

```
$ papers --help-all
用法:
 papers [オプション…] [ファイル…] Papers

ヘルプのオプション:
  -h, --help                   ヘルプのオプションを表示する
  --help-all                   ヘルプのオプションをすべて表示する
  --help-gapplication          GApplication のオプションを表示する

GApplication Options:
  --gapplication-service       GApplication サービスモードに入る（D-Bus サービスファイル使用）

アプリケーションのオプション:
  -p, --page-label=PAGE        表示するドキュメントのページラベル
  -i, --page-index=NUMBER      表示するドキュメントのページ番号
  -n, --named-dest=DEST        表示する Named destination
  -f, --fullscreen             フルスクリーンモードで起動する
  -s, --presentation           プレゼンテーションモードで起動する
  --version                    Show the version of the program.
```
