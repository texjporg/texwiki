---
title: "Okular"
url: "/Okular/"
date: 2012-07-22T23:21:27Z
pukiwiki: "Okular"
---

# Okular

## [Okular](https://okular.kde.org/) {#x3070edc}

Okular は KDE に搭載されている，PDF, PS, DVI ファイルが表示可能なドキュメント・ビューアです．
[SyncTeX](/SyncTeX/) に対応しています．
ファイルの自動更新機能もあります．

***

***

### 公式 Web サイト {#jde0a0e5}

- [Okular - more than a reader](https://okular.kde.org/)

### 動作環境 {#ca9192aa}

Windows, macOS, Linux

### ライセンス {#qbc60c11}

[GPLv2](https://cgit.kde.org/okular.git/tree/COPYING)

### リリース情報 {#v4dc0489}

[Development News](https://okular.kde.org/news.php) を参照．

### ChangeLog {#h7a9328d}

- [https://cgit.kde.org/okular.git/log/](https://cgit.kde.org/okular.git/log/)

### 派生版 {#m771d62f}

- [okular-backend-mupdf](https://github.com/xylosper/okular-backend-mupdf)

## インストール {#xecad964}

### Windows {#h8e4fcbd}

[https://binary-factory.kde.org/job/Okular_Nightly_win64/](https://binary-factory.kde.org/job/Okular_Nightly_win64/) から Okular のインストーラーをダウンロードしてインストールできます．

Chocolatey でインストールすることもできます．
Chocolatey を使用する場合は [https://chocolatey.org/packages/okular](https://chocolatey.org/packages/okular) を参照してください．

Windows Power&#x53;lhell を管理者として実行して

```
choco install okular
```

を実行します．

### macOS {#ye831736}

- [https://github.com/KDE-mac/homebrew-kde/blob/master/Formula/okular.rb](https://github.com/KDE-mac/homebrew-kde/blob/master/Formula/okular.rb)

### Linux {#c209770f}

ほとんどのディストリビューションではパッケージ管理システムからインストールできます．

## 代替フォントの設定 {#o2eb9a55}

- [Evince#代替フォントの設定](/Evince/#fallback)
- [KDE-Okular や Texmaker で和文フォント非埋め込みPDFを表示させるには](http://blogs.yahoo.co.jp/igproj_fusion/16383026.html)

## 使い方 {#jf24f8bb}

### コマンドラインオプション {#md2d6a7f}

- [https://cgit.kde.org/okular.git/tree/shell/main.cpp](https://cgit.kde.org/okular.git/tree/shell/main.cpp)

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
  urls                       Documents to open. Specify '-' to read from stdin.
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
