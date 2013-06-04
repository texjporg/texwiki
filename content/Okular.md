---
title: "Okular"
url: "/Okular/"
date: 2012-07-22T23:21:27Z
pukiwiki: "Okular"
---

# Okular

## [Okular](http://okular.kde.org/) {#x3070edc}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

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

### Linux Mint {#d3c8be06}

- [Ubuntu -- パッケージ検索結果 -- okular](http://packages.ubuntu.com/ja/okular)

### Debian {#j00dbf39}

- [Debian -- パッケージ検索結果 -- okular](http://packages.debian.org/ja/okular)

### Fedora {#mf21deef}

- [https://apps.fedoraproject.org/packages/okular](https://apps.fedoraproject.org/packages/okular)

### openSUSE {#w345a41b}

- [http://software.opensuse.org/package/okular](http://software.opensuse.org/package/okular)

### Arch Linux {#c209770f}

- [https://www.archlinux.org/packages/?q=kdegraphics-okular](https://www.archlinux.org/packages/?q=kdegraphics-okular)

### Beyond Linux From Scratch {#zf4b2d67}

- [http://www.linuxfromscratch.org/blfs/view/svn/kde/okular.html](http://www.linuxfromscratch.org/blfs/view/svn/kde/okular.html)
- [http://lfsbookja.sourceforge.jp/BLFS/svn.ja/kde/okular.html](http://lfsbookja.sourceforge.jp/BLFS/svn.ja/kde/okular.html)

## 代替フォントの設定 {#o2eb9a55}

- [KDE-Okular や Texmaker で和文フォント非埋め込みPDFを表示させるには](http://blogs.yahoo.co.jp/igproj_fusion/16383026.html)

## SyncTeX {#ya8f4753}

### forward search {#i560a338}

TeX ファイルの 30 行目に対応する PDF ファイルの該当する箇所にジャンプしたい場合は

```
$ okular --unique "file:hoge.pdf#src:30 `pwd`/hoge.tex"
```

のように実行します．<br>

### inverse search {#ja9305fc}

\[設定(<ins>S</ins>)\]-\[Okular を設定(<ins>O</ins>)...\]-\[エディタ\]

TeXworks の場合は<br>
エディタ の項目に

エディタ
: &nbsp;

```
カスタム
```

コマンド
: &nbsp;

```
texworks --position=%l
```

を設定します．<br>

Okular 上で Shift + 左クリックを実行すると TeXworks が起動して TeX 文書の対応する行にジャンプします．<br>
