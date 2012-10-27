---
title: "xeCJK"
url: "/xeCJK/"
date: 2012-09-01T19:43:31Z
pukiwiki: "xeCJK"
---

# xeCJK

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## [xeCJK](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK) {#nb577bd0}

xeCJK は [XeLaTeX](/XeTeX/) で CJK 文書を作成するためのパッケージです．<br>
[W32TeX](/W32TeX/) の xetex-w32.tar.xz と [TeX Live](</TeX Live/>) に含まれています．<br>

- [ctex-kit](http://code.google.com/p/ctex-kit/)
    - [xeCJK](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK)
    - [Changes](http://code.google.com/p/ctex-kit/source/list)
- [xeCJK Package](http://www.ctan.org/pkg/xecjk)
- [CTAN:help/Catalogue/entries/xecjk.html](https://mirror.ctan.org/help/Catalogue/entries/xecjk.html)
- [「xeCJK」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=xeCJK)
- [xeCJK を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=xeCJK)

### リリース情報 {#if427aa7}

2012-10-27 xeCJK 3.0.10<br>
2012-10-20 W32TeX \[2012/10/20\] の更新で xeCJK 3.0.8 から xeCJK 3.0.9 になりました．<br>

### 不具合 {#t2600dd9}

#### [xeCJK 3.0.6 r350](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=350) でエラーが発生する → xeCJK をアップデートする {#f0ab434a}

[xeCJK 3.0.6 r350](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=350) を使用している場合は XeTeX 3.1415926-2.5-0.9999 でエラーが発生するので xeCJK をアップデートしてください．<br>

### 使い方 {#k3d278aa}

```
\usepackage{xeCJK}
\setCJKmainfont{MS Mincho}
\setCJKsansfont{MS Gothic}
\setCJKmonofont{MS Gothic}
```

## [ZXjatype](https://github.com/zr-tex8r/ZXjatype) {#n8276349}

ZXjatype は [XeLaTeX](/XeTeX/) で日本語文書を作成するためのパッケージです．<br>
xeCJK が必要です．<br>

- [BXjscls](https://github.com/zr-tex8r/BXjscls) &amp; [ZXjatype](https://github.com/zr-tex8r/ZXjatype)
- [ZXjatype パッケージ ～XeLaTeX でまともな日本語組版を～ \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/zxjatype.html)
- [「zxjatype」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=zxjatype)
- [ZXjatype を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=ZXjatype)
- [QA: XeTeX で日本語、再び](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=139)
- [名状しがたい zxjatype のようなもの](https://gist.github.com/3685126)
- [zxjatype, xeCJK3.0.6だと動かなかったけどxeCJK3.0.9だと動いた．](http://twitter.com/imunolion/status/260648169849896960)
- [texlive2012を入れたら（distributionで更新された）、zxjatype.styが使い物にならなくなった。](https://plus.google.com/u/0/105432768476902391894/posts/hQLEK9BuSrj) → zxjatype v0.6 で対応しました
- [texlive2012のxeCJK.styに対応するzxjatype.styをでっち上げる！](https://gist.github.com/3156146) → zxjatype v0.6 で対応しました
- [tetsuok の旅 blog](http://tetsuok.hatenablog.com/archive/category/latex)

### リリース情報 {#ecfc94ae}

2012-09-09 ZXjatype 0.6<br>

ZXjatype 0.6 は xeCJK 3.0.10 でも xeCJK 2.4.6 でもどちらでも動作します．<br>
[xeCJK 3.0.6 r350](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=350) を使用している場合は XeTeX 3.1415926-2.5-0.9999 でエラーが発生するので ZXjatype 0.6 は使用できません．[xeCJK 3.0.7 r351](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=351) ではエラーは発生しません．<br>
xeCJK 3.0.6 r350 を使用している場合は xeCJK をアップデートしてください．<br>
ZXjatype 0.6 よりも前のバージョンは expl3 で記述されている xeCJK 3.x 版ではエラーが発生します．<br>

### 使い方 {#v46b0c77}

```
\usepackage{zxjatype}
\setjamainfont{MS Mincho}
\setjasansfont{MS Gothic}
\setjamonofont{MS Gothic}
```

## xeCJK 以外のパッケージ {#k90787cf}

- [「はじめてのLaTeX」: MiKTeXでXeTeXで日本語を](http://supportdoc.net/support-latex/xetex.html)
- [zhmCJK Package](http://www.ctan.org/pkg/zhmcjk)
- [Writing Japanese with XeTeX](http://kuniyoshi.fastmail.fm/xetex/)
- [Including Japanese Text](http://www.lewis.soc.hit-u.ac.jp/latex/including-japanese-text)
