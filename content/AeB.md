---
title: "AeB"
url: "/AeB/"
date: 2011-04-25T21:21:31Z
pukiwiki: "AeB"
---

# AeB

## [The AcroTeX eDucation Bundle (AeB)](http://www.math.uakron.edu/~dpstory/webeq.html) {#laec97db}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## The AcroTeX eDucation Bundle (AeB) とは {#t8885b18}

The AcroTeX eDucation Bundle (AeB) は Web 用の PDF ファイルを作成するためのパッケージです．<br>
The AcroTeX eDucation Bundle (AeB) を使うと LaTeX で JavaScript を使った PDF ファイルを作成することもできます．<br>

- [The AcroTeX eDucation Bundle](http://www.math.uakron.edu/~dpstory/webeq.html)
- [Aeb_Pro](http://www.math.uakron.edu/~dpstory/aeb_pro.html)
- [AcroTeX - eDucational System Tools](http://www.acrotex.net/)
    - [The AcroTeX blog | The AcroTeX blog publishes articles on PDF and the AcroTeX family of LaTeX packages](http://www.acrotex.net/blog/)
- [http://www.ctan.org/pkg/acrotex](http://www.ctan.org/pkg/acrotex)
- [CTAN:help/Catalogue/entries/acrotex.html](https://mirror.ctan.org/help/Catalogue/entries/acrotex.html)

## インストール {#a7637893}

acrotex_pack.zip をダウンロードして展開します．

### TeX Live の場合 {#a104916b}

acrotex フォルダーを C:\texlive\texmf-local\tex\latex\acrotex に配置します．

```
C:\texlive\\texmf-local\tex\latex\acrotex>latex acrotex.ins
C:\texlive\\texmf-local\tex\latex\acrotex>mktexlsr
```

### W32TeX の場合 {#v4089369}

acrotex フォルダーを C:\w32tex\share\texmf-local\tex\latex\acrotex に配置します．

```
C:\w32tex\share\texmf-local\tex\latex\acrotex>latex acrotex.ins
```

- dljslib.sty
- eforms.sty
- exerquiz.sty
- insdljs.sty
- taborder.sty
- web.sty

が作成されます．

## 使い方 {#ub75b88a}

acrotex\doc\adb_man.pdf を参照してください．<br>
acrotex_exdoc.zip をダウンロードして展開すると豊富なサンプルドキュメントがあります．<br>
AeB は dvipdfmx, dvips, pdftex, xetex などのドライバ指定オプションに対応しています．<br>
