---
title: "Evince"
url: "/Evince/"
date: 2012-09-26T00:24:07Z
pukiwiki: "Evince"
---

# Evince

## [Evince](https://wiki.gnome.org/Apps/Evince) {#fec1fb99}

Evince は PDF, PS, EPS, DVI ファイルが表示可能なドキュメント・ビューアです．
[SyncTeX](/SyncTeX/) に対応しています．
ファイルの自動更新機能もあります．

- [Evince](https://wiki.gnome.org/Apps/Evince)
- [Evince Document Viewer](https://help.gnome.org/users/evince/stable/index.html.en)
- [evince.mirror](http://sourceforge.net/projects/evince.mirror/)

***

***

### 動作環境 {#q9c64542}

Windows, OS X, Linux

### ライセンス {#lf30b1e1}

[GPLv2](https://git.gnome.org/browse/evince/tree/COPYING)

### リリース情報 {#m8e1200a}

[https://git.gnome.org/browse/evince/refs/tags](https://git.gnome.org/browse/evince/refs/tags)

### 変更履歴 {#nb7ae766}

- [https://git.gnome.org/browse/evince/](https://git.gnome.org/browse/evince/)
    - [log](https://git.gnome.org/browse/evince/log/)

## ダウンロード/インストール {#j395f01d}

### Windows {#f2460848}

- [Apps/Evince/Downloads - GNOME Wiki!](https://wiki.gnome.org/Apps/Evince/Downloads)

公式サイトの Windows 版の Evince 2.32.0.145 で日本語を表示したい場合はフォントを埋め込む必要があります． (→ [(W32TeX)LualatexのPDFがEvinceで日本語が表示されない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=836))
自分で Evince をビルドして使用する場合はフォントを埋め込まなくても日本語を表示することが可能です．
Evince は [MinGW](/MinGW/) でビルド可能です．

### OS X {#y8d21820}

- [/trunk/dports/gnome/evince/Portfile](http://trac.macports.org/browser/trunk/dports/gnome/evince/Portfile)

### Arch Linux {#eb51c4f9}

- [https://www.archlinux.org/packages/?name=evince](https://www.archlinux.org/packages/?name=evince)
- [Arch LinuxでTeXで出力された日本語pdfをevinceで表示する &amp; fonts.conf公開](http://blog.yomak.info/2015/03/arch-linuxtexpdfevince-fontsconf.html)

### Linux Mint {#lacd43b5}

- [http://packages.ubuntu.com/ja/evince](http://packages.ubuntu.com/ja/evince)

### Debian/Ubuntu {#rf817124}

EvinceはGnomeの標準ドキュメントビューアなので、最初からインストールされていることがケースがほとんどでしょう。手動でインストールするには次のようにします。

```
$ sudo apt-get install evince
```

依存関係によりevince-commonパッケージもインストールされます。
GNOME keyring サポートを外したevince-gtkパッケージもあります。なお、Evinceに依存したプログラムをコンパイルするには
libevince-devパッケージが必要です。

- [https://packages.debian.org/ja/evince](https://packages.debian.org/ja/evince)

### Fedora {#jbf882d0}

- [https://apps.fedoraproject.org/packages/evince](https://apps.fedoraproject.org/packages/evince)

### openSUSE {#rd040fd0}

- [http://software.opensuse.org/package/evince](http://software.opensuse.org/package/evince)

### Beyond Linux From Scratch {#i9f92bae}

- [http://www.linuxfromscratch.org/blfs/view/svn/gnome/evince.html](http://www.linuxfromscratch.org/blfs/view/svn/gnome/evince.html)
- [http://lfsbookja.osdn.jp/BLFS/svn.ja/gnome/evince.html](http://lfsbookja.osdn.jp/BLFS/svn.ja/gnome/evince.html)

## 代替フォントの設定 <a id="substitute"></a> {#id0a7178}

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
<dir>/usr/local/texlive/2015/texmf-dist/fonts/truetype/public/ipaex</dir>
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

- [https://git.gnome.org/browse/evince/tree/shell/main.c](https://git.gnome.org/browse/evince/tree/shell/main.c)

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

## SyncTeX {#w699c2c2}

- [Evince Document Viewer › SyncTex](https://help.gnome.org/users/evince/stable/index.html.en#synctex)
    - [Evince Document Viewer › SyncTex » Supported Editors](https://help.gnome.org/users/evince/stable/synctex-editors.html.en)

### forward and inverse search {#ga060086}

fwdevince, evince_forward_search を使用して forward search ができます．
invevince, bwdevince, evince_inverse_search, evince_backward_search を使用して inverse search ができます．
inverse search は Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

#### fwdevince <a id="fwdevince"></a> {#ie18c015}

Evince/fwdevince を参照．
