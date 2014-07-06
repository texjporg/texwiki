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

Windows の TexitEasy で組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を
C:\Program Files (x86)\TexitEasy\share\poppler または C:\Program Files\TexitEasy\share\poppler に配置します．<br>
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
