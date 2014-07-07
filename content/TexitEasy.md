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
$ curl -O http://poppler.freedesktop.org/poppler-data-0.4.6.tar.gz
$ tar xvf poppler-data-0.4.6.tar.gz
$ sudo mkdir -p /usr/local/share/poppler
$ sudo cp -pR ~/poppler-data-0.4.6/* /usr/local/share/poppler
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
