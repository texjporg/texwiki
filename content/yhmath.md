---
title: "yhmath"
url: "/yhmath/"
date: 2004-09-23T04:32:41Z
pukiwiki: "yhmath"
---

# yhmath

## yhmath {#c1ec97da}

### 何？ {#rf9b7794}

[Yannis Haralambous](http://tug.org/interviews/haralambous.html) ([twitter](https://twitter.com/y_haralambous)) 作の根号や括弧などのフォントです。
通常より大きいものまで用意されています。

yhmathを紹介してくださった本田さんに感謝します。
また，石原さん，uchiyamaさんにご教示をいただきました。

### インストール {#xdd91a7e}

TeX Live であれば既にインストールされています。

texmf-dist/fonts/map/dvips/yhmath/yhmath.map に

```
yrcmex10 Yhcmex <yhcmex.pfb
```

と記述されています。<br>

<!-- [[yhcmex.pfa>CTAN:fonts/yhmath/yhcmex.pfa]] -->
<!-- ではなく，これを [[t1utils:http://www.lcdf.org/~eddietwo/type/#t1utils]] -->
<!-- [[FontForge:http://fontforge.sourceforge.net/]] -->
<!-- で変換した [[yhcmex.pfb:http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/yhcmex.pfb]] を使う方法を説明します。 -->
<!--  -->
<!-- ダウンロードするもの： -->
<!--  -->
<!-- -[[yhmath.ps>CTAN:fonts/yhmath/yhmath.ps]] (マニュアル) -->
<!-- -[[yhmath.dtx>CTAN:macros/latex/contrib/yhmath/yhmath.dtx]] (適当なフォルダに) -->
<!-- -[[yhmath.ins>CTAN:macros/latex/contrib/yhmath/yhmath.ins]] (上と同じフォルダに) -->
<!-- -[[yhmath.sty>CTAN:fonts/yhmath/yhmath.sty]] (.../texmf-dist/tex/latex/yhmath/ に) -->
<!-- -[[yhcmex.pfb:http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/yhcmex.pfb]] -->
<!-- (.../texmf-dist/fonts/type1/public/yhmath/ に) [29149バイトです。古いものと混同されないように] -->
<!-- -[[yhcmex10.tfm>CTAN:fonts/yhmath/yhcmex10.tfm]] (.../texmf-dist/fonts/tfm/public/yhmath/ に) -->
<!-- -[[yrcmex10.tfm>CTAN:fonts/yhmath/yrcmex10.tfm]] (.../texmf-dist/fonts/tfm/public/yhmath/ に) -->
<!-- -[[yhcmex10.vf>CTAN:fonts/yhmath/yhcmex10.vf]] (.../texmf-dist/fonts/vf/public/yhmath/ に) -->
<!--  -->
<!-- yhmath.ins のあるフォルダに移動して，yhmath.ins を tex で処理します： -->
<!--  -->
<!-- tex yhmath.ins -->
<!--  -->
<!-- できた *.fd を .../texmf-dist/tex/latex/yhmath/ に移します。 -->
<!--  -->
<!-- もし ls-R を作っているなら mktexlsr を実行します。 -->
<!--  -->
<!-- .../texmf/fonts/map/dvips/updmap/psfonts.map と .../texmf/fonts/map/pdftex/updmap/pdftex.map に次のように書き足します。 -->
<!--  -->
<!-- yrcmex10 Yhcmex <yhcmex.pfb -->
<!--  -->
<!-- .../texmf/fonts/map/dvipdfmx/updmap/yhmath.map を作成して次のように書き足します： -->
<!--  -->
<!-- yrcmex10 default yhcmex -->
<!--  -->
<!-- 以上で使えるはずです。 -->

### バグ {#vc558236}

長い \[ \] を使うと途中が途切れるというバグが報告されています [qa:21493](https://okumuralab.org/~okumura/texfaq/qa/21493.html)。
これについて Haralambous 氏にメールしたのですが，返事がありません。
角藤さん [qa:22089](https://okumuralab.org/~okumura/texfaq/qa/22089.html) が直してくださいました。
念のためここにも角藤さんの直された
[yhcmex10.tfm](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/yhcmex10.tfm) と
[yhcmex10.vf](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/yhcmex10.vf) を置いておきます。

大熊さんがさらにバグと解決法を見つけられました [qa:23593](https://okumuralab.org/~okumura/texfaq/qa/23593.html)。
これについても Haralambous 氏に連絡しておきました。

### 関連リンク {#l55021be}

- [Macports で導入した pTeX で yhmath フォント](http://knmac.math.kyushu-u.ac.jp/konno/modules/wpkonno/?p=12)
