---
title: "Evince"
url: "/Evince/"
date: 2012-09-26T00:24:07Z
pukiwiki: "Evince"
---

# Evince

## [Evince](https://apps.gnome.org/ja/Evince/) {#fec1fb99}

Evince は PDF ファイルが表示可能なドキュメントビューアーです。
[SyncTeX](/SyncTeX/) に対応しています。
ファイルの自動更新機能もあります。
PS, EPS ファイルの表示はデフォルトで無効化されているため PS, EPS ファイルを表示するには PS, EPS ファイルの表示を有効化してビルドされた Evince が必要です。

- [ドキュメントビューアー – GNOMEアプリ](https://apps.gnome.org/ja/Evince/)
- [GNOMEへようこそ – ドキュメントビューアー](https://welcome.gnome.org/ja/app/Evince/)
- [Evince Document Viewer](https://help.gnome.org/users/evince/stable/index.html.en)
- [Topics tagged evince](https://discourse.gnome.org/tags/c/applications/7/evince)
- [Search results for &#39;evince&#39; - GNOME Discourse](https://discourse.gnome.org/search?q=evince)
- [The evince-list Archives](https://mail.gnome.org/archives/evince-list/)

***

***

### お知らせ {#i6e6a97a}

Evince 3.30.0 (2018-09-04) で PostScript バックエンドがデフォルトで無効化されました。

Arch Linux, Fedora, openSUSE
のパッケージ管理システムでインストールした Linux 版 Evince は
PostScript バックエンドのサポートが有効化されているので PS, EPS ファイルを表示できます。

- [NEWS · Release 3.30.0 · GNOME / evince · GitLab](https://gitlab.gnome.org/GNOME/evince/-/blob/bfe177e42b460350893ce89c0f7a3ceaaf2953dc/NEWS#L17) &lt;-- [Disable PostScript backend by default](https://gitlab.gnome.org/GNOME/evince/commit/3e8ea509ccb9e32717f4856ee7a7e5ff12944e15)
- [meson_options.txt · main · GNOME / evince · GitLab](https://gitlab.gnome.org/GNOME/evince/-/blob/main/meson_options.txt#L13) &lt;-- option('ps', type: 'feature', value: 'disabled', description: 'whether PS support is requested')
- [https://gitlab.archlinux.org/archlinux/packaging/packages/evince/-/blob/main/PKGBUILD?ref_type=heads](https://gitlab.archlinux.org/archlinux/packaging/packages/evince/-/blob/main/PKGBUILD?ref_type=heads) &lt;-- Arch Linux の evince は ps=enabled
- [https://salsa.debian.org/gnome-team/evince/-/blob/debian/master/meson_options.txt#L13](https://salsa.debian.org/gnome-team/evince/-/blob/debian/master/meson_options.txt#L13) &lt;-- Debian GNU/Linux の evince は ps=disabled
- [https://src.fedoraproject.org/rpms/evince/blob/rawhide/f/evince.spec](https://src.fedoraproject.org/rpms/evince/blob/rawhide/f/evince.spec) &lt;-- Fedora の evince は ps=enabled
- [https://build.opensuse.org/package/view_file/GNOME:Next/evince/evince.spec](https://build.opensuse.org/package/view_file/GNOME:Next/evince/evince.spec) &lt;-- openSUSE の evince は ps=enabled

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

- [Papers](/Papers/)
- [Xreader](https://github.com/linuxmint/xreader)
- [Atril](https://github.com/mate-desktop/atril)

## ダウンロード/インストール {#j395f01d}

### Windows {#f2460848}

- [https://packages.msys2.org/search?t=binpkg&q=evince](https://packages.msys2.org/search?t=binpkg&q=evince)
    - [https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-evince](https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-evince)
    - [https://packages.msys2.org/packages/mingw-w64-clang-x86_64-evince](https://packages.msys2.org/packages/mingw-w64-clang-x86_64-evince)
    - [https://packages.msys2.org/packages/mingw-w64-clang-aarch64-evince](https://packages.msys2.org/packages/mingw-w64-clang-aarch64-evince)
- [https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-evince](https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-evince)
- [FOSS な PDF Viewer for Windows (Evince も導入できた)](https://text.baldanders.info/remark/2019/03/about-free-software-pdf-viewers/)

Windows 版 Evince は MSYS2 の pacman でインストールできます．UCRT64 環境で

```
pacman -S mingw-w64-ucrt-x86_64-evince
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

Homebrew から Evince をインストールした場合は PostScript サポートが有効になっています。

- [https://formulae.brew.sh/formula/evince](https://formulae.brew.sh/formula/evince)

```
brew install evince
```

### Flatpak {#j2286d8f}

- [https://flathub.org/apps/org.gnome.Evince](https://flathub.org/apps/org.gnome.Evince)

### Arch Linux/Manjaro Linux {#eb51c4f9}

- [https://www.archlinux.org/packages/?name=evince](https://www.archlinux.org/packages/?name=evince)
- [https://aur.archlinux.org/packages/evince-no-gnome](https://aur.archlinux.org/packages/evince-no-gnome)
- [Arch LinuxでTeXで出力された日本語pdfをevinceで表示する &amp; fonts.conf公開](http://blog.yomak.info/2015/03/arch-linuxtexpdfevince-fontsconf.html)

```
sudo pacman -S evince poppler-data
```

### Linux Mint/Debian/Ubuntu {#lacd43b5}

- [https://packages.ubuntu.com/ja/evince](https://packages.ubuntu.com/ja/evince)
- [https://packages.debian.org/ja/evince](https://packages.debian.org/ja/evince)

Ubuntu 25.04 から標準ドキュメントビューアーが Evince から Papers に置き換えられたため、Evince をインストールするには次のようにします。

```
sudo apt install software-properties-common
sudo add-apt-repository universe
sudo apt install evince poppler-data
```

依存関係により evince-common パッケージもインストールされます。
なお、Evince に依存したプログラムをコンパイルするには
libevince-dev パッケージが必要です。

### Fedora {#jbf882d0}

- [https://packages.fedoraproject.org/pkgs/evince/evince/](https://packages.fedoraproject.org/pkgs/evince/evince/)

```
sudo dnf install evince poppler-data
```

### openSUSE {#rd040fd0}

- [https://software.opensuse.org/package/evince](https://software.opensuse.org/package/evince)

```
sudo zypper install evince poppler-data
```

### Beyond Linux From Scratch {#i9f92bae}

- [https://www.linuxfromscratch.org/blfs/view/svn/gnome/evince.html](https://www.linuxfromscratch.org/blfs/view/svn/gnome/evince.html)

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
<dir>/usr/local/texlive/2025/texmf-dist/fonts/truetype/public/ipaex</dir>
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

- [https://gitlab.gnome.org/GNOME/evince/-/blob/main/shell/main.c](https://gitlab.gnome.org/GNOME/evince/-/blob/main/shell/main.c)
- [https://gitlab.gnome.org/GNOME/evince/-/blob/main/po/ja.po](https://gitlab.gnome.org/GNOME/evince/-/blob/main/po/ja.po)

```
$ evince --help-all
用法:
  evince [OPTION…] [ファイル…] GNOME ドキュメントビューアー

ヘルプのオプション:
  -h, --help                  ヘルプのオプションを表示する
  --help-all                  ヘルプのオプションをすべて表示する
  --help-gtk                  GTK+ のオプションを表示する

アプリケーションのオプション:
  -o, --new-window            新しいウィンドウを開く
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

Ctrl+I で Night Mode（夜間モード）を切り替えることができます。

## SyncTeX {#w699c2c2}

- [Evince Document Viewer › SyncTex](https://help.gnome.org/users/evince/stable/index.html.en#synctex)
    - [Evince Document Viewer › SyncTex » Supported Editors](https://help.gnome.org/users/evince/stable/synctex-editors.html.en)

### forward and inverse search {#ga060086}

fwdevince, evince_forward_search を使用して forward search ができます．
invevince, bwdevince, evince_inverse_search, evince_backward_search を使用して inverse search ができます．
inverse search は Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

#### fwdevince <a id="fwdevince"></a> {#ie18c015}

Evince/fwdevince を参照．
