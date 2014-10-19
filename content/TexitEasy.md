---
title: "TexitEasy"
url: "/TexitEasy/"
date: 2014-07-06T17:47:20Z
pukiwiki: "TexitEasy"
---

# TexitEasy

## [TexitEasy](http://texiteasy.com/) {#r9978a56}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## TextiEasy とは {#s4cf568b}

TexitEasy はシンプルでパワフルな LaTeX エディタです．<br>

- [http://texiteasy.com/](http://texiteasy.com/)

### 動作環境 {#fe3a97c6}

Windows, OS X, Linux

### License {#w109ff29}

[GPLv3](https://github.com/Bramas/texiteasy/blob/master/LICENCE.txt)

### ChangeLog {#s58f17ee}

- [https://github.com/Bramas/texiteasy/commits/master](https://github.com/Bramas/texiteasy/commits/master)

## 不具合 {#k3a7bcbb}

### OS X の TexitEasy で，文字コードが UTF-8 の場合に Backslash (U+005C) が入力できず 円記号 (U+00A5) になってしまう → Karabiner で Backslash が優先されるようにキーバインドを変更する {#g400e330}

OS X の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです．→ [Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt-project.org/browse/QTBUG-10543)<br>
Karabiner で Backslash が優先されるようにキーバインドを変更するといいようです．<br>

***

<span style="color:#595857;background-color:#D3D3D3;"><ins>　<span style="color:#FF0000;background-color:#D3D3D3;">●</span> <span style="color:#FFD700;background-color:#D3D3D3;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>Karabiner</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　　　　　　<ins><span style="color:#F1F1F1;background-color:#0F5FFF;"><span style="color:#0F5FFF;">\[</span>　<strong>Change Key</strong>　<span style="color:#0F5FFF;">\]</span></span><span style="color:Black;background-color:#EEEEEE;">\[　<strong>Key Repeat</strong>　\]\[　<strong>Status Message</strong>　\]\[　<strong>MenuBar</strong>　\]\[　<strong>Misc &amp; Uninstall</strong>　\]</span></ins><br>
　　　　<span style="color:Black;background-color:#FAFAFA;">(<ins>　Change Yen　　　　　　　　　　　　　　　　　　</ins>)</span>　　☐ Show enabled only (1 item)　　　　　　　　　　<ins>\[ <strong>↻</strong> ReloadXML \]</ins><br>
　　　　remapping<br>
　　　　▼For Japanese<br>
　　　　　　▼Change Yen(￥) Key<br>
　　　　　　　　　<span style="color:White;background-color:#0F5FFF;">☑</span> JIS Yen(￥) to Backslash(＼)<br>
　　　　　　　　　　　　(except virtual machine, X11, RDC)<br>

***

## 組み込みの PDF ビューアに日本語を表示させる {#f5e8075e}

### Windows の場合 {#la147e36}

Windows の TexitEasy で組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を
C:\Program Files (x86)\TexitEasy\share\poppler または C:\Program Files\TexitEasy\share\poppler に配置します．<br>
poppler-data は [Poppler の公式サイト](http://poppler.freedesktop.org/)から入手できます．<br>
[TeXworks](/TeXworks/) をインストールしている場合は TeXworks に含まれている poppler-data を
C:\Program Files (x86)\TexitEasy\share\poppler または C:\Program Files\TexitEasy\share\poppler にコピーして使用することもできます．<br>

***

```
C:.
└─Program Files (x86)\ または Program Files\
    └─TexitEasy\
        └─share\
            └─poppler\
                ├─cidToUnicode\
                ├─cMap\
                ├─nameToUnicode\
                ├─unicodeMap\
                ├─CMakeLists.txt
                ├─COPYING
                ├─COPYING.adobe
                ├─COPYING.gpl2
                ├─Makefile
                └─README
```

***

### OS X の場合 {#y3501a2e}

OS X の TexitEasy で組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /usr/local/share/poppler に配置します．<br>
poppler-data は [Poppler の公式サイト](http://poppler.freedesktop.org/)から入手できます．<br>
[TeXworks](/TeXworks/) をインストールしている場合は TeXworks に含まれている poppler-data を /usr/local/share/poppler にコピーして使用することもできます．<br>
poppler-data を配置する場所は

```
$ strings -a /Applications/texiteasy.app/Contents/Frameworks/libpoppler.??.dylib | grep poppler
@executable_path/../Frameworks/libpoppler.??.dylib
/usr/local/share/poppler/ColorProfiles/
/usr/local/share/poppler
Unknown CID font collection, please report to poppler bugzilla.
%Produced by poppler pdftops version: {0:s} (http://poppler.freedesktop.org)
```

で調べることができます．<br>
この場合は /usr/local/share/poppler が poppler-data を配置するディレクトリになります．<br>
コマンドラインから poppler-data を /usr/local/share/poppler に配置する場合は以下のように実行します．<br>

```
$ brew install poppler
```

または

```
$ cd ~
$ curl -O http://poppler.freedesktop.org/poppler-data-0.4.7.tar.gz
$ tar xvf poppler-data-0.4.7.tar.gz
$ sudo mkdir -p /usr/local/share/poppler
$ sudo cp -pR ~/poppler-data-0.4.7/* /usr/local/share/poppler
```

***

```
/
└─usr/
    └─local/
        └─share/
            └─poppler/
                ├─cidToUnicode/
                ├─cMap/
                ├─nameToUnicode/
                ├─unicodeMap/
                ├─CMakeLists.txt
                ├─COPYING
                ├─COPYING.adobe
                ├─COPYING.gpl2
                ├─Makefile
                └─README
```

***
