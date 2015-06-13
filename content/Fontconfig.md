---
title: "Fontconfig"
url: "/Fontconfig/"
date: 2014-03-15T14:05:20Z
pukiwiki: "Fontconfig"
---

# Fontconfig

## [Fontconfig](http://www.freedesktop.org/wiki/Software/fontconfig/) {#yb562832}

Fontconfig は、主に Linux などで用いられる、システムのフォント設定情報を様々なアプリケーションに提供するためのライブラリです。提供される情報には、利用可能なフォント、フォントの代替・置換に関する情報、フォントのレンダリングに関する設定などを含みます。TeX 関連では [XeTeX](/XeTeX/)、また GIMP、PDF ビューアの [Poppler](/Poppler/) やその他様々なソフトウェアで利用されています。フォント設定を一元化する重要なライブラリですので、インストールしたらきちんと設定しましょう。

***

***

## インストール {#c70d9c03}

### MinGW {#j2ea43a1}

最新のものにこだわらないのであれば、[GTK+ Project](http://www.gtk.org/) の [Windows 用バイナリ](http://www.gtk.org/download/win32.php)をもらってくるのが簡単です。FreeType2 や libxml2 に依存しています。

ソースからビルドする場合は、例えば

```
$ curl -R -L -O http://www.freedesktop.org/software/fontconfig/release/fontconfig-2.11.94.tar.bz2
$ tar xvf fontconfig-2.11.94.tar.bz2
$ pushd fontconfig-2.11.94
$ ./configure --prefix=/mingw --enable-libxml2
$ make
$ make install
```

<!--  -->
<!-- /mingw/bin/fc-cache -s -f -v の実行で多少時間がかかります． -->
<!-- ... -->
<!--  /bin/install -c -m 644 ./fonts.conf /mingw/etc/fonts/fonts.conf -->
<!--  /mingw/bin/fc-cache -s -f -v -->
<!-- C:/Windows/fonts: caching, new cache contents: ??? fonts, ? dirs -->
<!-- ... -->
<!--  -->

```
$ popd
```

などとします。

## 設定 {#a1be93d1}

Fontconfig は [Poppler](/Poppler/) などの PDF ビューアでも用いられるので、基本的な設定はきちんと済ませておきましょう。まずは fc-match で、Ryumin-Light と GothicBBB-Medium がどのようなフォントで代替されるかを確認してみます。

```
$ fc-match Ryumin-Light
mingliu.ttc: "MingLiU" "Regular"
$ fc-match GothicBBB-Medium
mingliu.ttc: "MingLiU" "Regular"
```

デフォルトでは日本語のフォントが埋め込まれていない PDF ファイルの明朝体とゴシック体が同じフォントで表示されてしまいます。
そこで明朝体とゴシック体を適切に表示するための設定を行いましょう。

### MinGW での設定 {#j76fced9}

fc-list で MS Mincho と MS Gothic がリストに存在するかどうか確認します。

```
$ fc-list | nkf -W8 -s | grep "MS Mincho"
C:/Windows/fonts/msmincho.ttc: MS Mincho,ＭＳ 明朝:style=Regular,標準
```

```
$ fc-list | nkf -W8 -s | grep "MS Gothic"
C:/Windows/fonts/msgothic.ttc: MS Gothic,ＭＳ ゴシック:style=Regular,標準
```

（[nkf](/nkf/) をインストールしていなければ nkf の部分は省いてください）

C:\MinGW\etc\fonts\local.conf （具体的な場所は異なる場合があります） を作成して以下のように編集します．

***

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<!-- local.conf file to configure local font access -->
<fontconfig>

<match target="pattern">
  <test qual="any" name="family">
    <string>Ryumin</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>MS Mincho</string>
  </edit>
</match>
<match target="pattern">
  <test qual="any" name="family">
    <string>GothicBBB</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>MS Gothic</string>
  </edit>
</match>

</fontconfig>
```

***

C:\MinGW\etc\fonts\fonts.conf の71行目に記述されている

```
<include ignore_missing="yes">/mingw/etc/fonts/conf.d</include>
```

の下に

```
<include ignore_missing="yes">local.conf</include>
```

を追加します。

fc-match で Ryumin-Light と GothicBBB-Medium を確認します。

```
$ fc-match Ryumin-Light
msmincho.ttc: "MS Mincho" "Regular"
$ fc-match GothicBBB-Medium
msgothic.ttc: "MS Gothic" "Regular"
```

のようになれば大丈夫です。

## ユーティリティ {#jdee1352}

### fc-cache と fc-cat {#x382dffd}

fc-cache はフォントディレクトリにあるフォント情報のキャッシュを作成します。fc-cat はキャッシュの内容を表示します。

### fc-list と fc-match {#ie082f07}

fc-list は利用可能なフォントのリストを表示します。引数なしで実行するとすべてのフォントがリストされます。

```
fc-list :lang=ja
```

とすると、和文フォントとして利用可能なフォントがリストされます。

fc-match はあるパターンに最も良くマッチするフォントを表示します。

```
 fc-match :weight=bold:lang=ar
```

は、ウェイトが bold でアラビア語をカバーするフォントを表示します。
