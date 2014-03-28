---
title: "Okular"
url: "/Okular/"
date: 2012-07-22T23:21:27Z
pukiwiki: "Okular"
---

# Okular

## [Okular](http://okular.kde.org/) {#x3070edc}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/02/KDE-graphics-viewer-document.svg/200px-KDE-graphics-viewer-document.svg.png" alt="Okular" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Okular とは {#jde0a0e5}

Okular は PDF, PS, DVI ファイルが表示可能なドキュメント・ビューアです．<br>
SyncTeX に対応しています．<br>
ファイルの自動更新機能もあります．<br>

- [Okular](http://okular.kde.org/)

### 動作環境 {#ca9192aa}

KDE

### License {#qbc60c11}

[GPLv2](https://projects.kde.org/projects/kde/kdegraphics/okular/repository/revisions/master/entry/COPYING)

### リリース情報 {#v4dc0489}

[Development News](http://okular.kde.org/news.php) を参照．<br>

### ChangeLog {#h7a9328d}

- [Activity](https://projects.kde.org/projects/kde/kdegraphics/okular/activity)

## ダウンロード/インストール {#xecad964}

### Windows {#h8e4fcbd}

- [KDE on Windows](http://windows.kde.org/) のインストーラーを使用してインストールできます．

### Arch Linux {#c209770f}

- [https://www.archlinux.org/packages/?q=kdegraphics-okular](https://www.archlinux.org/packages/?q=kdegraphics-okular)

### Linux Mint {#d3c8be06}

- [http://packages.ubuntu.com/ja/okular](http://packages.ubuntu.com/ja/okular)

### Debian {#j00dbf39}

- [https://packages.debian.org/ja/okular](https://packages.debian.org/ja/okular)

### Fedora {#mf21deef}

- [https://apps.fedoraproject.org/packages/okular](https://apps.fedoraproject.org/packages/okular)

### openSUSE {#w345a41b}

- [http://software.opensuse.org/package/okular](http://software.opensuse.org/package/okular)

### Gentoo Linux {#rfafd9c6}

- [http://packages.gentoo.org/package/kde-base/okular](http://packages.gentoo.org/package/kde-base/okular)

### Beyond Linux From Scratch {#zf4b2d67}

- [http://www.linuxfromscratch.org/blfs/view/svn/kde/okular.html](http://www.linuxfromscratch.org/blfs/view/svn/kde/okular.html)
- [http://lfsbookja.sourceforge.jp/BLFS/svn.ja/kde/okular.html](http://lfsbookja.sourceforge.jp/BLFS/svn.ja/kde/okular.html)

## 代替フォントの設定 {#o2eb9a55}

- [KDE-Okular や Texmaker で和文フォント非埋め込みPDFを表示させるには](http://blogs.yahoo.co.jp/igproj_fusion/16383026.html)

## 使い方 {#jf24f8bb}

### コマンドラインオプション {#md2d6a7f}

```
$ okular --help
使用法: okular [Qt-オプション] [KDE-オプション] [オプション] [URL] 

Okular, 汎用文書ビューア

一般的なオプション:
  --help                    オプションに関するヘルプを表示
  --help-qt                 Qt に特有なオプションを表示
  --help-kde                KDE に特有なオプションを表示
  --help-all                すべてのオプションを表示
  --author                  著作者情報
  -v, --version             バージョン情報を表示
  --license                 ライセンス情報を表示
  --                        オプションの最後

オプション:
  -p, --page <number>       表示する文書のページ
  --presentation            文書をプレゼンテーションモードで開く
  --print                   Start with print dialog
  --unique                  1 つのインスタンスのみ許可
  --noraise                 Not raise window

引数:
  URL                       開く文書。標準入力から読む場合は “-” を指定。
```

## SyncTeX {#ya8f4753}

### forward search {#i560a338}

TeX ファイルの 30 行目に対応する PDF ファイルの該当する箇所にジャンプしたい場合は

```
$ okular --unique "file:hoge.pdf#src:30 `pwd`/hoge.tex"
```

のように実行します．<br>

### inverse search {#ja9305fc}

\[設定(<ins>S</ins>)\]-\[Okular を設定(<ins>O</ins>)...\]-\[エディタ\]

TeXstudio の場合は<br>
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

を設定します．<br>

Okular 上で Shift + 左クリックを実行すると TeXstudio が起動して TeX 文書の対応する行にジャンプします．<br>
