---
title: "media9"
url: "/media9/"
date: 2013-11-26T22:53:53Z
pukiwiki: "media9"
---

# media9

## media9 {#e4438562}

[media9](http://www.ctan.org/pkg/media9) は PDF ファイルに動画や 3D オブジェクトを埋め込むためのパッケージです．<br>
TeX Live, W32TeX に含まれています．<br>

### 日本語 pTeX で使用する場合の注意 {#t6u982n7}

media9 は LaTeX3 の構文で記述されています．<br>
内部で expl3 を読み込むのですが，現在の expl3 は pTeX をエンジンとして知らないため，pdfTeX だと誤判定します．<br>
対処法として

- ZR さんによる [bxexpl3ptex.sty](https://gist.github.com/zr-tex8r/2adc6f1e62cb591a1204) を用いる

があります．<br>

より古い pTeX では media9 やその依存パッケージを処理できないことがあります．<br>
その場合は media9 の前身である movie15 や，それを dvipdfmx 用に改善した movie15_dvipdfmx を使うことができます．<br>
なお，movie15 には [qa:56612](https://okumuralab.org/~okumura/texfaq/qa/56612.html) のような問題があります．

#### 欧文 LaTeX による media9 使用例 {#df15908f}

- [PDFに動画埋め込む （PDFBoxあきらめてLaTex ffmpeg変換）](http://www.gcgate.jp/engineerblog/2014/02/21/717/)
- [Beamer で PDF ファイルに動画を埋め込む](http://empitsu.hatenablog.com/entry/2012/11/02/182722)

#### 日本語 LaTeX による処理例 {#qb664bd0}

- [TeX+movie15(media9)+u3dによる3Dモデル埋め込みPDF作成](http://d.hatena.ne.jp/npal_shared/20120907/1346980528) ：movie15_dvipdfmx の利用と，XeTeX での media9 使用
- [platex+dvipdfmxでpdfに動画を埋め込む方法](http://myfuturesightforpast.blogspot.jp/2013/10/platexdvipdfmxpdf.html) ：movie15_dvipdfmx の利用を含むいくつかの方法の概説
- [PowerPointやPDFにいろいろなマルチメディアを埋め込む(2)](http://acetaminophen.hatenablog.com/entry/2014/09/13/124429) ：movie15_dvipdfmx による動画埋め込み
- [PowerPointやPDFにいろいろなマルチメディアを埋め込む(5)](http://acetaminophen.hatenablog.com/entry/2014/09/22/235603), [(6)](http://acetaminophen.hatenablog.com/entry/2014/09/24/195029), [(7)](http://acetaminophen.hatenablog.com/entry/2014/10/03/173932) ：movie15_dvipdfmx による 3D オブジェクト埋め込み
- [Tips: マルチメディアに関する補足(2)](http://acetaminophen.hatenablog.com/entry/2014/11/28/002341) ：media9 を platex + dvipdfmx に無理矢理通す試みと，bxexpl3ptex の利用
