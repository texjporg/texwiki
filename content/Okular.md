---
title: "Okular"
url: "/Okular/"
date: 2012-07-22T23:21:27Z
pukiwiki: "Okular"
---

# Okular

## [Okular](https://okular.kde.org/) {#x3070edc}

Okular は KDE Plasma に搭載されている，PDF ファイルが表示可能なドキュメント・ビューアです．
[SyncTeX](/SyncTeX/) に対応しています．
ファイルの自動更新機能もあります．

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

- [https://cdn.kde.org/ci-builds/graphics/okular/master/windows/](https://cdn.kde.org/ci-builds/graphics/okular/master/windows/)
- [https://cdn.kde.org/ci-builds/graphics/okular/release-25.08/windows/](https://cdn.kde.org/ci-builds/graphics/okular/release-25.08/windows/)

から Okular のインストーラーをダウンロードしてインストールできます．

MSYS2 でインストールすることもできます．

- [https://packages.msys2.org/search?t=binpkg&q=okular](https://packages.msys2.org/search?t=binpkg&q=okular)
    - [https://packages.msys2.org/package/mingw-w64-ucrt-x86_64-okular](https://packages.msys2.org/package/mingw-w64-ucrt-x86_64-okular)
    - [https://packages.msys2.org/package/mingw-w64-clang-x86_64-okular](https://packages.msys2.org/package/mingw-w64-clang-x86_64-okular)
    - [https://packages.msys2.org/package/mingw-w64-clang-aarch64-okular](https://packages.msys2.org/package/mingw-w64-clang-aarch64-okular)
- [https://packages.msys2.org/base/mingw-w64-okular](https://packages.msys2.org/base/mingw-w64-okular)
- [https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-okular](https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-okular)

を参照してください．

winget でインストールすることもできます．[https://winget.run/pkg/KDE/Okular](https://winget.run/pkg/KDE/Okular) や [https://github.com/microsoft/winget-pkgs/tree/master/manifests/k/KDE/Okular](https://github.com/microsoft/winget-pkgs/tree/master/manifests/k/KDE/Okular) を参照してください．

Scoop でインストールすることもできます．[https://scoop.sh/#/apps?q=okular&s=0&d=1&o=true](https://scoop.sh/#/apps?q=okular&s=0&d=1&o=true) を参照してください．

Chocolatey でインストールすることもできます．[https://chocolatey.org/packages/okular](https://chocolatey.org/packages/okular) を参照してください．

### macOS {#ye831736}

- [https://cdn.kde.org/ci-builds/graphics/okular/master/macos-arm64/](https://cdn.kde.org/ci-builds/graphics/okular/master/macos-arm64/)
- [https://cdn.kde.org/ci-builds/graphics/okular/master/macos-x86_64/](https://cdn.kde.org/ci-builds/graphics/okular/master/macos-x86_64/)
- [https://cdn.kde.org/ci-builds/graphics/okular/release-25.08/macos-arm64/](https://cdn.kde.org/ci-builds/graphics/okular/release-25.08/macos-arm64/)
- [https://cdn.kde.org/ci-builds/graphics/okular/release-25.08/macos-x86_64/](https://cdn.kde.org/ci-builds/graphics/okular/release-25.08/macos-x86_64/)
- [https://github.com/KDE/homebrew-kde/blob/master/Formula/okular.rb](https://github.com/KDE/homebrew-kde/blob/master/Formula/okular.rb)

### Flatpak {#e979726d}

- [https://flathub.org/apps/org.kde.okular](https://flathub.org/apps/org.kde.okular)
- [Tutorials/Flatpak - KDE UserBase Wiki](https://userbase.kde.org/Tutorials/Flatpak#Nightly_KDE_apps)

### Linux {#c209770f}

ほとんどのディストリビューションではパッケージ管理システムからインストールできます．

- [https://archlinux.org/packages/?name=okular](https://archlinux.org/packages/?name=okular)
- [https://packages.ubuntu.com/ja/okular](https://packages.ubuntu.com/ja/okular)
- [https://packages.debian.org/ja/okular](https://packages.debian.org/ja/okular)
- [https://packages.fedoraproject.org/pkgs/okular/okular/](https://packages.fedoraproject.org/pkgs/okular/okular/)
- [https://software.opensuse.org/package/okular](https://software.opensuse.org/package/okular)

## 代替フォントの設定 {#o2eb9a55}

- [Evince#代替フォントの設定](/Evince/#fallback)
- [KDE-Okular や Texmaker で和文フォント非埋め込みPDFを表示させるには](http://fusion0202.blog.jp/archives/603103.html)

## 使い方 {#jf24f8bb}

### コマンドラインオプション {#md2d6a7f}

- [https://github.com/KDE/okular/blob/master/shell/main.cpp](https://github.com/KDE/okular/blob/master/shell/main.cpp)
- [https://github.com/KDE/okular/blob/master/po/ja/okular.po](https://github.com/KDE/okular/blob/master/po/ja/okular.po)

```
$ okular --help
Usage: okular [options] urls
Okular, 汎用文書ビューア

Options:
  -h, --help                 Displays this help.
  -v, --version              Displays version information.
  --author                   Show author information.
  --license                  Show license information.
  --desktopfile <file name>  The base file name of the desktop entry for this
                             application.
  -p, --page <number>        表示する文書のページ
  --presentation             文書をプレゼンテーションモードで開く
  --print                    Start with print dialog
  --print-and-exit           Start with print dialog and exit after printing
  --unique                   1 つのインスタンスのみ許可
  --noraise                  Not raise window

Arguments:
  urls                       開く文書。標準入力から読む場合は “-” を指定してください。
```

## SyncTeX {#ya8f4753}

### forward search {#i560a338}

TeX ファイルの 30 行目に対応する PDF ファイルの該当する箇所にジャンプしたい場合は

```
$ okular --unique "file:hoge.pdf#src:30 `pwd`/hoge.tex"
```

のように実行します．

### inverse search {#ja9305fc}

\[設定(<ins>S</ins>)\] &gt; \[Okular を設定(<ins>O</ins>)...\] &gt; \[エディタ\]

例えば [TeXstudio](/TeXstudio/) の場合は
エディタ の項目に

エディタ
: &nbsp;

```
カスタム
```

コマンド
: &nbsp;

```
texstudio "%f" -line %l
```

を設定します．

Okular 上で Shift + 左クリックを実行すると TeXstudio が起動して TeX 文書の対応する行にジャンプします．
