---
title: "Fontconfig"
url: "/Fontconfig/"
date: 2014-03-15T14:05:20Z
pukiwiki: "Fontconfig"
---

# Fontconfig

## [Fontconfig](http://www.freedesktop.org/wiki/Software/fontconfig/) {#yb562832}

### ChangeLog {#s8bf189d}

[http://cgit.freedesktop.org/fontconfig/](http://cgit.freedesktop.org/fontconfig/)

### Installation {#c70d9c03}

#### MinGW {#j2ea43a1}

- Install [nkf](/nkf/).

- Install libxml2.

- Install Fontconfig.

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

fc-match で Ryumin-Light と GothicBBB-Medium を確認します．

```
$ fc-match Ryumin-Light
mingliu.ttc: "MingLiU" "Regular"
$ fc-match GothicBBB-Medium
mingliu.ttc: "MingLiU" "Regular"
```

デフォルトでは日本語のフォントが埋め込まれていない PDF ファイルの明朝体とゴシック体が同じフォントで表示されてしまいます．<br>
そこで明朝体とゴシック体を適切に表示するため，C:\MinGW\etc\fonts\local.conf を作成して編集します．<br>
fc-list で MS Mincho と MS Gothic がリストに存在するかどうか確認します．<br>

```
$ fc-list | nkf -W8 -s | grep "MS Mincho"
C:/Windows/fonts/msmincho.ttc: MS Mincho,ＭＳ 明朝:style=Regular,標準
```

```
$ fc-list | nkf -W8 -s | grep "MS Gothic"
C:/Windows/fonts/msgothic.ttc: MS Gothic,ＭＳ ゴシック:style=Regular,標準
```

C:\MinGW\etc\fonts\local.conf を作成して以下のように編集します．

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

を追加します．

fc-match で Ryumin-Light と GothicBBB-Medium を確認します．

```
$ fc-match Ryumin-Light
msmincho.ttc: "MS Mincho" "Regular"
$ fc-match GothicBBB-Medium
msgothic.ttc: "MS Gothic" "Regular"
```
