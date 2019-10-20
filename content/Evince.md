---
title: "Evince"
url: "/Evince/"
date: 2012-09-26T00:24:07Z
pukiwiki: "Evince"
---

# Evince

## [Evince](https://wiki.gnome.org/Apps/Evince) {#fec1fb99}

Evince は PDF, PS, EPS, DVI ファイルが表示可能なドキュメントビューアーです．
[SyncTeX](/SyncTeX/) に対応しています．
ファイルの自動更新機能もあります．
PS, EPS ファイルの表示には [Ghostscript](/Ghostscript/) と PS, EPS ファイルを表示できるようにビルドされた Evince が必要です．

- [Evince](https://wiki.gnome.org/Apps/Evince)
- [Evince Document Viewer](https://help.gnome.org/users/evince/stable/index.html.en)
- [The evince-list Archives](https://mail.gnome.org/archives/evince-list/)
- [MyTeXpert:Evince](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?Evince)

***

***

### お知らせ {#i6e6a97a}

Evince 3.30.0 で PostScript バックエンドがデフォルトで無効化されました。

Arch Linux/Manjaro Linux, Linux Mint/Debian/Ubuntu, Fedora, openSUSE
などで使われているパッケージ管理システムからインストールされる Linux 版 Evince は
PostScript バックエンドのサポートが有効化されているので PS, EPS ファイルを表示できます。

- \[[evince\] evince 3.30.0 released](https://mail.gnome.org/archives/evince-list/2018-September/msg00000.html) &lt;-- [Disable PostScript backend by default](https://gitlab.gnome.org/GNOME/evince/commit/3e8ea509ccb9e32717f4856ee7a7e5ff12944e15)
- [build: Disable PostScript backend by default (1621cacf) · Commits · GNOME / evince · GitLab](https://gitlab.gnome.org/GNOME/evince/commit/1621cacf75ebff4ab4ab0fa6855977a2d8da0ac6) &lt;-- evince 3.30.0 で enable_ps=no に変更
- [https://git.archlinux.org/svntogit/packages.git/commit/trunk?h=packages/evince&id=e364baf233db2b2455d4c990c8000df62628bbf6](https://git.archlinux.org/svntogit/packages.git/commit/trunk?h=packages/evince&id=e364baf233db2b2455d4c990c8000df62628bbf6) &lt;-- Arch Linux の evince 3.30.0-1 で --enable-ps が追加
- [releasing package evince version 3.30.0-2 (7b631abe) · Commits · GNOME / evince · GitLab](https://salsa.debian.org/gnome-team/evince/commit/7b631abe927e17919243a5407c1b79fb40ed1507), [Enable postscript (0029cfba) · Commits · GNOME / evince · GitLab](https://salsa.debian.org/gnome-team/evince/commit/0029cfba6afdf308023f387447779ffe21716ed7) &lt;-- Debian GNU/Linux の evince 3.30.0-2 で --enable-ps が追加
- [Commit - rpms/evince - 382cdcb280f4114cecd34f0df02eda7727282b34 - Pagure](https://src.fedoraproject.org/rpms/evince/c/382cdcb280f4114cecd34f0df02eda7727282b34?branch=master) &lt;-- Fedora の evince 3.30.1-2 で --enable-ps=yes が追加
- [File evince.changes of Package evince - openSUSE Build Service](https://build.opensuse.org/package/view_file/openSUSE:Factory/evince/evince.changes), [Request 639947 - openSUSE Build Service](https://build.opensuse.org/request/show/639947) &lt;-- openSUSE の evince 3.30.1 で --enable-ps が追加

### 動作環境 {#q9c64542}

Windows, macOS, Linux

### ライセンス {#lf30b1e1}

[GPLv2](https://gitlab.gnome.org/GNOME/evince/blob/master/COPYING)

### リリース情報 {#m8e1200a}

[https://gitlab.gnome.org/GNOME/evince/tags](https://gitlab.gnome.org/GNOME/evince/tags)

### 変更履歴 {#nb7ae766}

- [https://gitlab.gnome.org/GNOME/evince](https://gitlab.gnome.org/GNOME/evince)
    - [コミットログ](https://gitlab.gnome.org/GNOME/evince/commits/master)

### 派生版 {#z48adc83}

- [Atril](https://github.com/mate-desktop/atril)
- [Xreader](https://github.com/linuxmint/xreader)

## ダウンロード/インストール {#j395f01d}

### Windows {#f2460848}

- [https://github.com/Alexpux/MINGW-packages/tree/master/mingw-w64-evince](https://github.com/Alexpux/MINGW-packages/tree/master/mingw-w64-evince)
- [http://repo.msys2.org/mingw/x86_64/](http://repo.msys2.org/mingw/x86_64/)
- [http://repo.msys2.org/mingw/i686/](http://repo.msys2.org/mingw/i686/)
- [FOSS な PDF Viewer for Windows (Evince も導入できた)](https://text.baldanders.info/remark/2019/03/about-free-software-pdf-viewers/)

Windows 版 Evince は MSYS2 の pacman でインストールできます．

64-bit Evince をインストールする場合は

```
pacman -S mingw-w64-x86_64-evince
```

32-bit Evince をインストールする場合は

```
pacman -S mingw-w64-i686-evince
```

を実行します．

mingw-w64-evince 3.34.1 は PDF ファイルは表示できますが、[PS, EPS ファイルを表示できるようにビルドされていない](https://github.com/msys2/MINGW-packages/blob/master/mingw-w64-evince/PKGBUILD)ため PS, EPS ファイルを開こうとすると

> ドキュメント“file:///C:/path/to/foo.ps”を開けません。<br>
> ファイルタイプ (Text Document) (test/plain) はサポートしていません<br>

> ドキュメント“file:///C:/path/to/foo.eps”を開けません。<br>
> ファイルタイプ (Text Document) (test/plain) はサポートしていません<br>

といったメッセージが表示されて PS, EPS ファイルが表示できません。
mingw-w64-evince 3.28.2 までは PostScript バックエンドがデフォルトで有効化されていたので PS, EPS ファイルが表示できました。
PS, EPS ファイルを表示できるようにビルドすれば表示できると思われるので必要な方は自分でビルドしてください。

### macOS {#y8d21820}

- [https://formulae.brew.sh/formula/evince](https://formulae.brew.sh/formula/evince)
    - [https://github.com/Homebrew/homebrew-core/blob/master/Formula/evince.rb](https://github.com/Homebrew/homebrew-core/blob/master/Formula/evince.rb)
- [https://www.macports.org/ports.php?by=name&substr=evince](https://www.macports.org/ports.php?by=name&substr=evince)
    - [https://github.com/macports/macports-ports/blob/master/gnome/evince/Portfile](https://github.com/macports/macports-ports/blob/master/gnome/evince/Portfile)

### Arch Linux/Manjaro Linux {#eb51c4f9}

- [https://www.archlinux.org/packages/?name=evince](https://www.archlinux.org/packages/?name=evince)
- [Arch LinuxでTeXで出力された日本語pdfをevinceで表示する &amp; fonts.conf公開](http://blog.yomak.info/2015/03/arch-linuxtexpdfevince-fontsconf.html)

```
sudo pacman -S evince poppler-data
```

### Linux Mint/Debian/Ubuntu {#lacd43b5}

- [https://packages.ubuntu.com/ja/evince](https://packages.ubuntu.com/ja/evince)
- [https://packages.debian.org/ja/evince](https://packages.debian.org/ja/evince)

Evince は GNOME の標準ドキュメントビューアーなので、最初からインストールされているケースがほとんどでしょう。手動でインストールするには次のようにします。

```
sudo apt install evince poppler-data
```

依存関係により evince-common パッケージもインストールされます。
GNOME keyring サポートを外した evince-gtk パッケージもあります。なお、Evince に依存したプログラムをコンパイルするには
libevince-dev パッケージが必要です。

### Fedora {#jbf882d0}

- [https://apps.fedoraproject.org/packages/evince](https://apps.fedoraproject.org/packages/evince)

```
sudo dnf install evince poppler-data
```

### openSUSE {#rd040fd0}

- [https://software.opensuse.org/package/evince](https://software.opensuse.org/package/evince)

```
sudo zypper install evince poppler-data
```

### Beyond Linux From Scratch {#i9f92bae}

- [http://www.linuxfromscratch.org/blfs/view/svn/gnome/evince.html](http://www.linuxfromscratch.org/blfs/view/svn/gnome/evince.html)
- [http://lfsbookja.osdn.jp/BLFS/svn-ja/gnome/evince.html](http://lfsbookja.osdn.jp/BLFS/svn-ja/gnome/evince.html)

## 代替フォントの設定 <a id="fallback"></a> {#id0a7178}

フォントが埋め込まれていない場合に Ryumin-Light (明朝体) がゴシック体で表示されてしまう場合は &#x7e;/.config/fontconfig/fonts.conf を作成して代替フォントの設定をします．
以下の設定では TeX Live に含まれている IPAexMincho, IPAexGothic で表示するようにしています．

```
$ mkdir -p ~/.config/fontconfig
$ vi ~/.config/fontconfig/fonts.conf
```

***

- &#x7e;/.config/fontconfig/fonts.conf

***

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
<dir>/usr/local/texlive/2019/texmf-dist/fonts/truetype/public/ipaex</dir>
<dir>/usr/share/texlive/texmf-dist/fonts/truetype/public/ipaex</dir>
<dir>/usr/share/texmf-dist/fonts/truetype/public/ipaex</dir>
<dir>/usr/share/texmf/fonts/truetype/public/ipaex</dir>

<match target="pattern">
  <test qual="any" name="family">
    <string>Ryumin</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>IPAexMincho</string>
  </edit>
</match>
<match target="pattern">
  <test qual="any" name="family">
    <string>GothicBBB</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>IPAexGothic</string>
  </edit>
</match>

</fontconfig>
```

***

```
$ fc-match Ryumin
ipaexm.ttf: "IPAex明朝" "Regular"
$ fc-match GothicBBB
ipaexg.ttf: "IPAexゴシック" "Regular"
```

## 使い方 {#jfee0cca}

### コマンドラインオプション {#bc93383b}

- [https://gitlab.gnome.org/GNOME/evince/blob/master/shell/main.c](https://gitlab.gnome.org/GNOME/evince/blob/master/shell/main.c)

```
$ evince --help
用法:
  evince [OPTION…] [ファイル…] GNOME ドキュメントビューアー

ヘルプのオプション:
  -h, --help                  ヘルプのオプションを表示する
  --help-all                  ヘルプのオプションをすべて表示する
  --help-gtk                  GTK+ のオプションを表示する

アプリケーションのオプション:
  -p, --page-label=PAGE       表示するドキュメントのページラベル
  -i, --page-index=NUMBER     表示するドキュメントのページ番号
  -n, --named-dest=DEST       表示する Named destination
  -f, --fullscreen            フルスクリーンモードで起動する
  -s, --presentation          プレゼンテーションモードで起動する
  -w, --preview               プレビューアーで起動する
  -l, --find=STRING           ドキュメントの中から単語や語句を検索する
  --display=DISPLAY           使用するXのディスプレイを指定する
```

### Night Mode（夜間モード） {#c3b2e12b}

Evince には Night Mode（夜間モード）という色を反転させる機能があります。

Ctrl+I で色が反転します。

## SyncTeX {#w699c2c2}

- [Evince Document Viewer › SyncTex](https://help.gnome.org/users/evince/stable/index.html.en#synctex)
    - [Evince Document Viewer › SyncTex » Supported Editors](https://help.gnome.org/users/evince/stable/synctex-editors.html.en)

### forward and inverse search {#ga060086}

fwdevince, evince_forward_search を使用して forward search ができます．
invevince, bwdevince, evince_inverse_search, evince_backward_search を使用して inverse search ができます．
inverse search は Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

#### fwdevince <a id="fwdevince"></a> {#ie18c015}

Evince/fwdevince を参照．
