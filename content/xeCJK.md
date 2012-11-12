---
title: "xeCJK"
url: "/xeCJK/"
date: 2012-09-01T19:43:31Z
pukiwiki: "xeCJK"
---

# xeCJK

## xeCJK/ZXjatype {#x8dfc603}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## [xeCJK](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK) {#nb577bd0}

xeCJK は [XeLaTeX](/XeTeX/) で CJK 文書を作成するためのパッケージです．<br>
[W32TeX](/W32TeX/) の xetex-w32.tar.xz, [TeX Live](</TeX Live/>), [MiKTeX](/MiKTeX/), [MacTeX](/Mac/#f5466652) に含まれています．<br>

- [ctex-kit](http://code.google.com/p/ctex-kit/)
    - [xeCJK](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK)
    - [Changes](http://code.google.com/p/ctex-kit/source/list)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/xelatex/xecjk](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/xelatex/xecjk/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/xelatex/xecjk/?view=log)
- [http://miktex.org/packages/xecjk](http://miktex.org/packages/xecjk)
- [xeCJK Package](http://www.ctan.org/pkg/xecjk)
- [CTAN:help/Catalogue/entries/xecjk.html](https://mirror.ctan.org/help/Catalogue/entries/xecjk.html)
- [「xeCJK」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=xeCJK)
- [xeCJK を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=xeCJK)
    - [TeX Wiki xeCJKの中のxeCJK 3.0.6 r350と3.0.7 r351のリンク先間違ってませんか？](http://blog.livedoor.jp/ti5942/archives/7561279.html) → [Ubuntu 12.10 の texlive で ctex-kit の r350,r351（１）](http://blog.livedoor.jp/ti5942/archives/7562068.html)
        - チェックしてみましたがとくに間違っているようには思われません．xeCJK.dtx をクリックして File info の View raw file から xeCJK.dtx をダウンロードして適切に処理[^1]すれば xeCJK.sty が得られます．

### リリース情報 {#if427aa7}

2012-11-13 xeCJK 3.1.0<br>
2012-11-01 W32TeX \[2012/11/01\] の更新で xeCJK 3.0.10 になりました．<br>

### 不具合 {#t2600dd9}

#### [xeCJK 3.0.7 r351](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=351) でエラーが発生する → l3kernel, l3packages をアップデートする {#ve3267d4}

- [Ubuntu 12.10 の texlive で ctex-kit の r350,r351（４）テスト](http://blog.livedoor.jp/ti5942/archives/7562221.html)

l3kernel, l3packages が古いバージョンで [xeCJK 3.0.7 r351](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=351) を使用している場合は XeTeX 3.1415926-2.5-0.9999, XeTeX 3.1415926-2.4-0.9998 でエラーが発生する場合があります．<br>
気になる方は [l3kernel](https://mirror.ctan.org/help/Catalogue/entries/l3kernel.html), [l3packages](https://mirror.ctan.org/help/Catalogue/entries/l3packages.html) をアップデートしてください．<br>

#### [xeCJK 3.0.6 r350](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=350) でエラーが発生する → xeCJK をアップデートする {#f0ab434a}

l3kernel, l3packages が新しいバージョンで [xeCJK 3.0.6 r350](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=350) を使用している場合は XeTeX 3.1415926-2.5-0.9999, XeTeX 3.1415926-2.4-0.9998 でエラーが発生する場合があります．<br>
気になる方は xeCJK をアップデートしてください．<br>
l3kernel, l3packages が新しいバージョンで [xeCJK 3.0.7 r351](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=351) を使用した場合はエラーは発生しませんでした．<br>

### 使い方 {#k3d278aa}

#### MS Mincho, MS Gothic の場合 {#u1a0c13b}

```
\usepackage{xeCJK}
\setCJKmainfont{MS Mincho}
\setCJKsansfont{MS Gothic}
\setCJKmonofont{MS Gothic}
```

#### IPAMincho, IPAGothic の場合 {#uab0d085}

```
\usepackage{xeCJK}
\setCJKmainfont{IPAMincho}
\setCJKsansfont{IPAGothic}
\setCJKmonofont{IPAGothic}
```

## [ZXjatype](https://github.com/zr-tex8r/ZXjatype) {#n8276349}

ZXjatype は [XeLaTeX](/XeTeX/) で日本語文書を作成するためのパッケージです．<br>
ZXjatype は xeCJK が必要です．<br>
ZXjatype 0.6 で xeCJK 3.x 版を使用する場合は xeCJK 3.0.7 以降, 新しいバージョンの l3kernel, l3packages が必要です．<br>

- [BXjscls](https://github.com/zr-tex8r/BXjscls) &amp; [ZXjatype](https://github.com/zr-tex8r/ZXjatype)
- [ZXjatype パッケージ ～XeLaTeX でまともな日本語組版を～ \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/zxjatype.html)
- [「zxjatype」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=zxjatype)
- [ZXjatype を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=ZXjatype)
- [QA: XeTeX で日本語、再び](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=139)
    <!-- -[[名状しがたい zxjatype のようなもの:https://gist.github.com/3685126]] -->
    <!-- -[[texlive2012を入れたら（distributionで更新された）、zxjatype.styが使い物にならなくなった。:https://plus.google.com/u/0/105432768476902391894/posts/hQLEK9BuSrj]] → zxjatype v0.6 で対応しました -->
    <!-- -[[texlive2012のxeCJK.styに対応するzxjatype.styをでっち上げる！:https://gist.github.com/3156146]] → zxjatype v0.6 で対応しました -->

- [tetsuok の旅 blog](http://tetsuok.hatenablog.com/archive/category/latex)

### リリース情報 {#ecfc94ae}

2012-09-09 ZXjatype 0.6<br>

ZXjatype 0.6 は xeCJK 3.0.7 以降で動作します．<br>
[xeCJK 3.0.6 r343](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=343) を使用していて XeTeX 3.1415926-2.4-0.9998 でエラーが発生する場合は ZXjatype 0.6 は使用できません．<br>
xeCJK 3.0.6 r343 を使用している場合は xeCJK, [l3kernel](https://mirror.ctan.org/help/Catalogue/entries/l3kernel.html), [l3packages](https://mirror.ctan.org/help/Catalogue/entries/l3packages.html) をアップデートしてください．<br>
ZXjatype 0.6 よりも前のバージョンは expl3 で記述されている xeCJK 3.x 版ではエラーが発生します．<br>

### 不具合 {#u54213d7}

#### [xeCJK 3.0.6 r343](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=343) で ZXjatype 0.6 を使用するとエラーが発生する → xeCJK, l3kernel, l3packages をアップデートする {#bf394f82}

- [Ubuntu 12.10 の texlive で xeCJK/ZXjatype を使うにはどうすればよいか？](http://blog.livedoor.jp/ti5942/archives/7562299.html)
- [Ubuntu 12.10 64bit texliveに入っているxeCJKのバージョン？](http://blog.livedoor.jp/ti5942/archives/7561243.html)
- [Ubuntu 12.10: xeCJK/ZXjatypeを導入したが。。。](http://blog.livedoor.jp/ti5942/archives/7556359.html)
- [zxjatype, xeCJK3.0.6だと動かなかったけどxeCJK3.0.9だと動いた．](http://twitter.com/imunolion/status/260648169849896960)

l3kernel, l3packages が古いバージョンで [xeCJK 3.0.6 r343](http://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=343) で ZXjatype 0.6 を使用する場合は XeTeX 3.1415926-2.4-0.9998 でエラーが発生する場合があります．<br>
気になる方は xeCJK, [l3kernel](https://mirror.ctan.org/help/Catalogue/entries/l3kernel.html), [l3packages](https://mirror.ctan.org/help/Catalogue/entries/l3packages.html) をアップデートしてください．<br>

### 使い方 {#v46b0c77}

#### MS Mincho, MS Gothic の場合 {#teab5b7f}

```
\usepackage{zxjatype}
\setjamainfont{MS Mincho}
\setjasansfont{MS Gothic}
\setjamonofont{MS Gothic}
```

zxjatype.sty が見つからなかった場合に xeCJK.sty を使用する場合は以下のようにします．

```
\IfFileExists{zxjatype.sty}{
  \usepackage{zxjatype}
  \setjamainfont{MS Mincho}
  \setjasansfont{MS Gothic}
  \setjamonofont{MS Gothic}
}{
  \usepackage{xeCJK}
  \setCJKmainfont{MS Mincho}
  \setCJKsansfont{MS Gothic}
  \setCJKmonofont{MS Gothic}
}
```

#### IPAMincho, IPAGothic の場合 {#j2934d74}

```
\usepackage{zxjatype}
\setjamainfont{IPAMincho}
\setjasansfont{IPAGothic}
\setjamonofont{IPAGothic}
```

zxjatype.sty が見つからなかった場合に xeCJK.sty を使用する場合は以下のようにします．

```
\IfFileExists{zxjatype.sty}{
  \usepackage{zxjatype}
  \setjamainfont{IPAMincho}
  \setjasansfont{IPAGothic}
  \setjamonofont{IPAGothic}
}{
  \usepackage{xeCJK}
  \setCJKmainfont{IPAMincho}
  \setCJKsansfont{IPAGothic}
  \setCJKmonofont{IPAGothic}
}
```

## xeCJK 以外のパッケージ {#k90787cf}

- [「はじめてのLaTeX」: MiKTeXでXeTeXで日本語を](http://supportdoc.net/support-latex/xetex.html)
- [zhmCJK Package](http://www.ctan.org/pkg/zhmcjk)
- [Writing Japanese with XeTeX](http://kuniyoshi.fastmail.fm/xetex/)
- [Including Japanese Text](http://www.lewis.soc.hit-u.ac.jp/latex/including-japanese-text)

## 関連リンク {#q4a9591d}

- [Newest &#39;xecjk&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/xecjk)
- [How to programmatically detect if a LaTeX package is installed?](http://tex.stackexchange.com/questions/31852/how-to-programmatically-detect-if-a-latex-package-is-installed)

[^1]: [蛇足事項、その他 \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/note.html)を参照
