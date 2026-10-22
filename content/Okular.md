---
title: "Okular"
url: "/Okular/"
date: 2012-07-22T23:21:27Z
pukiwiki: "Okular"
---

# Okular

## [Okular](https://okular.kde.org/) {#x3070edc}

Okular は KDE Plasma デスクトップに搭載されている、PDF ファイルが表示可能な汎用文書ビューアです。
[SyncTeX](/SyncTeX/) への対応、ファイルの自動更新機能もあり、PostScript を PDF としてインポートできます。
初期設定では無効になっていますが、ファイルをタブで開く機能もあります。

***

***

### 公式 Web サイト {#jde0a0e5}

- [Okular - The Universal Document Viewer](https://okular.kde.org/)

### 開発サイト {#q8e2c31b}

- [Graphics / Okular · GitLab](https://invent.kde.org/graphics/okular)
- [GitHub - KDE/okular: KDE document viewer](https://github.com/KDE/okular)

### 動作環境 {#ca9192aa}

Windows, macOS, Linux

### ライセンス {#qbc60c11}

[GPLv2](https://invent.kde.org/graphics/okular/-/tree/master/LICENSES)

### リリース情報 {#v4dc0489}

- [https://invent.kde.org/graphics/okular/-/tags](https://invent.kde.org/graphics/okular/-/tags)
- [https://github.com/KDE/okular/tags](https://github.com/KDE/okular/tags)

### ChangeLog {#h7a9328d}

- [https://invent.kde.org/graphics/okular/-/commits/master](https://invent.kde.org/graphics/okular/-/commits/master)
- [https://github.com/KDE/okular/commits/master](https://github.com/KDE/okular/commits/master)

## インストール {#xecad964}

- [https://okular.kde.org/download/](https://okular.kde.org/download/)

### Windows {#h8e4fcbd}

- [https://cdn.kde.org/ci-builds/graphics/okular/release-26.08/windows/](https://cdn.kde.org/ci-builds/graphics/okular/release-26.08/windows/) (リリースビルド版)
- [https://cdn.kde.org/ci-builds/graphics/okular/master/windows/](https://cdn.kde.org/ci-builds/graphics/okular/master/windows/) (ナイトリービルド版)

から Okular のインストーラーをダウンロードしてインストールできます。

Microsoft Store からインストールすることもできます。[Okular - Windows に無料でダウンロードしてインストールする | Microsoft Store](https://apps.microsoft.com/detail/9n41msq1wnm8?hl=ja-JP&gl=JP) を参照してください。

winget でインストールすることもできます。[https://winget.run/pkg/KDE/Okular](https://winget.run/pkg/KDE/Okular) や [https://github.com/microsoft/winget-pkgs/tree/master/manifests/k/KDE/Okular](https://github.com/microsoft/winget-pkgs/tree/master/manifests/k/KDE/Okular) を参照してください。

Scoop でインストールすることもできます。[https://scoop.sh/#/apps?q=okular&s=0&d=1&o=true](https://scoop.sh/#/apps?q=okular&s=0&d=1&o=true) を参照してください。

Chocolatey でインストールすることもできます。[https://chocolatey.org/packages/okular](https://chocolatey.org/packages/okular) を参照してください。

MSYS2 でインストールすることもできます。

- [https://packages.msys2.org/search?t=binpkg&q=okular](https://packages.msys2.org/search?t=binpkg&q=okular)
    - [https://packages.msys2.org/package/mingw-w64-ucrt-x86_64-okular](https://packages.msys2.org/package/mingw-w64-ucrt-x86_64-okular)
    - [https://packages.msys2.org/package/mingw-w64-clang-x86_64-okular](https://packages.msys2.org/package/mingw-w64-clang-x86_64-okular)
    - [https://packages.msys2.org/package/mingw-w64-clang-aarch64-okular](https://packages.msys2.org/package/mingw-w64-clang-aarch64-okular)
- [https://packages.msys2.org/base/mingw-w64-okular](https://packages.msys2.org/base/mingw-w64-okular)
- [https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-okular](https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-okular)

を参照してください。

### macOS {#ye831736}

- [https://cdn.kde.org/ci-builds/graphics/okular/release-26.08/macos-arm64/](https://cdn.kde.org/ci-builds/graphics/okular/release-26.08/macos-arm64/) (リリースビルド版)
- [https://cdn.kde.org/ci-builds/graphics/okular/master/macos-arm64/](https://cdn.kde.org/ci-builds/graphics/okular/master/macos-arm64/) (ナイトリービルド版)
    <!-- -https://github.com/KDE/homebrew-kde/blob/master/Formula/okular.rb -->

### Linux {#c209770f}

ほとんどのディストリビューションではパッケージ管理システムからインストールできます．

- [https://flathub.org/apps/org.kde.okular](https://flathub.org/apps/org.kde.okular) , [Tutorials/Flatpak - KDE UserBase Wiki](https://userbase.kde.org/Tutorials/Flatpak#Nightly_KDE_apps)
- [https://archlinux.org/packages/?name=okular](https://archlinux.org/packages/?name=okular)
- [https://packages.ubuntu.com/ja/okular](https://packages.ubuntu.com/ja/okular)
- [https://packages.debian.org/ja/okular](https://packages.debian.org/ja/okular)
- [https://packages.fedoraproject.org/pkgs/okular/okular/](https://packages.fedoraproject.org/pkgs/okular/okular/)
- [https://software.opensuse.org/package/okular](https://software.opensuse.org/package/okular)
- [https://software.opensuse.org/package/okular-spectre](https://software.opensuse.org/package/okular-spectre)

## ファイルをタブで開く設定 {#w7907039}

ファイルをタブで開くようにするには以下の設定を行います。

\[設定(S)\] &gt; \[Okular を設定(O)...\] &gt; \[全般\]

全般オプション<br>
　　　　　　　プログラムの機能: ☑ Open new files in tabs<br>
　　　　　　　　　　　　　　 　 ☑ Switch to existing tab if file is already open<br>

## 代替フォントの設定 {#o2eb9a55}

- [KDE-Okular や Texmaker で和文フォント非埋め込みPDFを表示させるには](https://fusion0202.blog.jp/archives/603103.html)

## 使い方 {#jf24f8bb}

### コマンドラインオプション {#md2d6a7f}

- [https://invent.kde.org/graphics/okular/-/blob/master/shell/main.cpp](https://invent.kde.org/graphics/okular/-/blob/master/shell/main.cpp)
- [https://invent.kde.org/graphics/okular/-/blob/master/shell/shell.cpp](https://invent.kde.org/graphics/okular/-/blob/master/shell/shell.cpp)
- [https://invent.kde.org/graphics/okular/-/blob/master/po/ia/okular.po](https://invent.kde.org/graphics/okular/-/blob/master/po/ia/okular.po)
- [https://github.com/KDE/okular/blob/master/shell/main.cpp](https://github.com/KDE/okular/blob/master/shell/main.cpp)
- [https://github.com/KDE/okular/blob/master/shell/shell.cpp](https://github.com/KDE/okular/blob/master/shell/shell.cpp)
- [https://github.com/KDE/okular/blob/master/po/ja/okular.po](https://github.com/KDE/okular/blob/master/po/ja/okular.po)

```
$ okular --help-all
使い方: okular [オプション] urls
Okular, 汎用文書ビューア

オプション:
  -h, --help                           Displays help on commandline options.
  --help-all                           Displays help, including generic Qt
                                       options.
  -v, --version                        バージョン情報を表示する。
  --author                             作者に関する情報を表示します。
  --license                            ライセンス情報を表示します。
  --desktopfile <ファイル名>                このアプリケーションのデスクトップエントリのベースファイル名です。
  -p, --page <number>                  表示する文書のページ
  --presentation                       文書をプレゼンテーションモードで開く
  --print                              Start with print dialog
  --print-and-exit                     Start with print dialog and exit after
                                       printing
  --unique                             1 つのインスタンスのみ許可
  --noraise                            Not raise window
  --find <string>                      Find a string on the text
  --editor-cmd <string>                Sets the external editor command
  --qmljsdebugger <value>              Activates the QML/JS debugger with a
                                       specified port. The value must be of
                                       format port:1234[,block]. "block" makes
                                       the application wait for a connection.
  --platform <platformName[:options]>  QPA plugin. See QGuiApplication
                                       documentation for available options for
                                       each plugin.
  --platformpluginpath <path>          Path to the platform plugins.
  --platformtheme <theme>              Platform theme.
  --plugin <plugin>                    Additional plugins to load, can be
                                       specified multiple times.
  --qwindowgeometry <geometry>         Window geometry for the main window,
                                       using the X11-syntax, like 100x100+50+50.
  --qwindowicon <icon>                 Default window icon.
  --qwindowtitle <title>               Title of the first window.
  --reverse                            Sets the application's layout direction
                                       to Qt::RightToLeft (debugging helper).
  --session <session>                  Restores the application from an earlier
                                       session.

引数:
  urls                                 開く文書。標準入力から読む場合は “-” を指定してください。
```

### PostScript を PDF としてインポート {#d2bee3bd}

\[ファイル(F)\] &gt; \[PostScript を PDF としてインポート(I)...\]

## SyncTeX {#ya8f4753}

### forward search {#i560a338}

TeX ファイルの 30 行目に対応する PDF ファイルの該当する箇所にジャンプしたい場合は

```
$ okular --unique "file:hoge.pdf#src:30 `pwd`/hoge.tex"
```

のように実行します．

### inverse search {#ja9305fc}

\[設定(<ins>S</ins>)\] &gt; \[Okular を設定(<ins>O</ins>)...\] &gt; \[エディタ\]

例えば Windows 版の [TeXstudio](/TeXstudio/) の場合は
エディタ の項目に

エディタ
: &nbsp;

```
カスタム
```

コマンド
: &nbsp;

```
"C:\Program Files\texstudio\texstudio.exe" -line %l "%f"
```

を設定します．

Okular 上で Shift + 左クリックを実行すると TeXstudio が起動して TeX 文書の対応する行にジャンプします．

Okular 22.03.80 (2022-03-12) 以降ではコマンドラインオプションから設定できるようになりました。--&gt; [Adds option editor-cmd to the commandline](https://invent.kde.org/graphics/okular/-/commit/147a638619b4f8bbe80f42b9279c1e993cafc783)
