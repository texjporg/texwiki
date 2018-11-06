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

- [Evince](https://wiki.gnome.org/Apps/Evince)
- [Evince Document Viewer](https://help.gnome.org/users/evince/stable/index.html.en)
- [The evince-list Archives](https://mail.gnome.org/archives/evince-list/)
- [MyTeXpert:Evince](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?Evince)

***

***

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
- [Windows で evince](http://www.yamamo10.jp/yamamoto/wordpress/?p=842)

Windows 版 Evince は MSYS2 の pacman でインストールできます．フォントを埋め込まなくても日本語を表示することができます．

64-bit Evince をインストールする場合は

```
pacman -S mingw-w64-x86_64-evince mingw-w64-x86_64-gstreamer mingw-w64-x86_64-gst-plugins-base
```

32-bit Evince をインストールする場合は

```
pacman -S mingw-w64-i686-evince mingw-w64-i686-gstreamer mingw-w64-i686-gst-plugins-base
```

を実行します．

MSYS2 からインストールできる Evince よりも若干古いバージョンになりますが [https://www.dropbox.com/sh/9oaq3bdmjjroiso/AADl3RV_XaiJ1dotrhH2D-8Ca](https://www.dropbox.com/sh/9oaq3bdmjjroiso/AADl3RV_XaiJ1dotrhH2D-8Ca) から Evince 3.26.0 の Windows 版インストーラ（64-bit 版と 32-bit 版）がダウンロードできます．

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

Evince は GNOME の標準ドキュメントビューアなので、最初からインストールされているケースがほとんどでしょう。手動でインストールするには次のようにします。

```
sudo apt install evince
```

依存関係により evince-common パッケージもインストールされます。
GNOME keyring サポートを外した evince-gtk パッケージもあります。なお、Evince に依存したプログラムをコンパイルするには
libevince-dev パッケージが必要です。

### Fedora {#jbf882d0}

- [https://apps.fedoraproject.org/packages/evince](https://apps.fedoraproject.org/packages/evince)

```
sudo dnf install evince
```

### openSUSE {#rd040fd0}

- [https://software.opensuse.org/package/evince](https://software.opensuse.org/package/evince)

```
sudo zypper install evince
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
<dir>/usr/local/texlive/2018/texmf-dist/fonts/truetype/public/ipaex</dir>
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
  evince [オプション...] [ファイル…] GNOME ドキュメントビューアー

ヘルプのオプション:
  -h, --help                      ヘルプのオプションを表示する
  --help-all                      ヘルプのオプションをすべて表示する
  --help-sm-client                Show session management options
  --help-gtk                      GTK+ のオプションを表示する

アプリケーションのオプション:
  -p, --page-label=PAGE           表示するドキュメントのページラベル
  -i, --page-index=NUMBER         表示するドキュメントのページ番号
  -n, --named-dest=DEST           表示する Named destination
  -f, --fullscreen                フルスクリーンモードで起動する
  -s, --presentation              プレゼンテーションモードで起動する
  -w, --preview                   プレビューアーで起動する
  -l, --find=STRING               ドキュメントの中から単語や語句を検索する
  --display=DISPLAY               使用するXのディスプレイを指定する
```

### Night Mode {#c3b2e12b}

Evince には Night Mode という色を反転させる機能があります。

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
