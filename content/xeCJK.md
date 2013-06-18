---
title: "xeCJK"
url: "/xeCJK/"
date: 2012-09-01T19:43:31Z
pukiwiki: "xeCJK"
---

# xeCJK

[XeTeX](/XeTeX/) > xeCJK/ZXjatype

## xeCJK/ZXjatype {#x8dfc603}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## [xeCJK](https://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK) {#nb577bd0}

xeCJK は [XeLaTeX](/XeTeX/) で CJK 文書を作成するためのパッケージです．<br>
IVS (異体字セレクタ) にも対応しています．<br>
[TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) の xetex-w32.tar.xz, [MiKTeX](/MiKTeX/) に含まれています．<br>

- [ctex-kit](https://code.google.com/p/ctex-kit/)
    - [xeCJK](https://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK)
        - xeCJK.dtx をクリックして File info の View raw file から xeCJK.dtx をダウンロードして適切に処理[^1]すれば xeCJK.sty が得られます．
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/xelatex/xecjk](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/xelatex/xecjk/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/xelatex/xecjk/?view=log)
- [http://miktex.org/packages/xecjk](http://miktex.org/packages/xecjk)
- [xeCJK Package](http://www.ctan.org/pkg/xecjk)
- [CTAN:help/Catalogue/entries/xecjk.html](https://mirror.ctan.org/help/Catalogue/entries/xecjk.html)
- [xecjk – Support for CJK documents in XeLaTeX](http://ctanhg.scharrer-online.de/pkg/xecjk.html) (Automated Mercurial Repositories of CTAN)

### リリース情報/ChangeLog {#if427aa7}

- [/tags/xeCJK/](https://code.google.com/p/ctex-kit/source/browse/tags/xeCJK/)
- [Changes](https://code.google.com/p/ctex-kit/source/list)

### 注意点 {#w700f957}

#### xeCJK error: "conflict-package" → \usepackage{xltxtra} を記述しないまたは \usepackage{xeCJK} のあとに \usepackage{xltxtra} を記述 {#g3111be5}

- [MacTex2012で日本語beamer文書のコンパイルエラー](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=941)

xeCJK error: "conflict-package" が発生する場合は \usepackage{xltxtra} を記述しないかまたは \usepackage{xeCJK} のあとに \usepackage{xltxtra} を記述します． 

```
\usepackage{xltxtra}
\usepackage{xeCJK}
```

のように \usepackage{xeCJK} の前に \usepackage{xltxtra} を記述した場合に xeCJK error: "conflict-package" が発生する場合があります．

```
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!
! xeCJK error: "conflict-package"
!
! The `xltxtra' package is in conflict with xeCJK.
! Please do not use it or load it after xeCJK.
!
! See the xeCJK documentation for further information.
!
! Type <return> to continue.
!...............................................
```

### 不具合 {#t2600dd9}

[Issues](https://code.google.com/p/ctex-kit/issues/list?q=xeCJK)

- [Issue 116: xeCJK: Support for Ideographic Variation Selectors](https://code.google.com/p/ctex-kit/issues/detail?id=116)

### 使い方 {#k3d278aa}

#### IPAexMincho, IPAexGothic の場合 {#af21d789}

```
\usepackage{xeCJK}
\setCJKmainfont{IPAexMincho}
\setCJKsansfont{IPAexGothic}
\setCJKmonofont{IPAexGothic}
```

上記の設定で<br>

```
(c:/w32tex/share/texmf-dist/tex/xelatex/xecjk/config/xeCJK.cfg)))
kpathsea: Running mktextfm IPAexMincho/ICU

The command name is C:\w32tex\bin\mktextfm

kpathsea: Running mktexmf IPAexMincho/ICU.mf

The command name is C:\w32tex\bin\mktexmf
name = IPAexMincho/ICU, rootname = IPAexMincho/ICU, pointsize =
mktexmf: empty or non-existent rootfile!
Cannot find IPAexMincho/ICU.mf.
kpathsea: Appending font creation commands to missfont.log.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!
! fontspec error: "font-not-found"
!
! The font "IPAexMincho" cannot be found.
!
! See the fontspec documentation for further information.
!
! For immediate help type H <return>.
!...............................................
```

のエラーが発生する場合はフォントファイル名を指定すればタイプセットできるようです．<br>

```
\usepackage{xeCJK}
\setCJKmainfont{ipaexm.ttf}
\setCJKsansfont{ipaexg.ttf}
\setCJKmonofont{ipaexg.ttf}
```

#### MS Mincho, MS Gothic の場合 {#u1a0c13b}

```
\usepackage{xeCJK}
\setCJKmainfont{MS Mincho}
\setCJKsansfont{MS Gothic}
\setCJKmonofont{MS Gothic}
```

<!-- **xeCJK 以外のパッケージ [#k90787cf] -->
<!-- -[[「はじめてのLaTeX」: MiKTeXでXeTeXで日本語を:http://supportdoc.net/support-latex/xetex.html]] -->
<!-- -[[zhmCJK Package:http://www.ctan.org/pkg/zhmcjk]] -->
<!-- -[[Writing Japanese with XeTeX:http://kuniyoshi.fastmail.fm/xetex/]] -->
<!-- -[[Including Japanese Text:http://www.lewis.soc.hit-u.ac.jp/latex/including-japanese-text]] -->

### 関連リンク {#j53b1d05}

- [「xeCJK」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=xeCJK)
- [xeCJK を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=xeCJK)
- [xeCJK : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/xeCJK)
- [日本語の文章を XeLaTeX で書く](http://technology-memo.seesaa.net/article/313825378.html)
- [Newest &#39;xecjk&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/xecjk)
- [How to programmatically detect if a LaTeX package is installed?](http://tex.stackexchange.com/questions/31852/how-to-programmatically-detect-if-a-latex-package-is-installed)

## [ZXjatype](https://github.com/zr-tex8r/ZXjatype) {#n8276349}

ZXjatype は [XeLaTeX](/XeTeX/) で日本語文書を作成するためのパッケージです．<br>
BXjscls と ZXjatype は TeX Live 2013 以降に含まれています．<br>
ZXjatype は xeCJK が必要です．<br>
ZXjatype 0.6 で xeCJK 3.x 版を使用する場合は xeCJK 3.0.7 以降と xeCJK の動作に必要な新しいバージョンの l3kernel, l3packages が必要です．<br>

- [BXjscls](https://github.com/zr-tex8r/BXjscls) &amp; [ZXjatype](https://github.com/zr-tex8r/ZXjatype)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/latex/bxjscls](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/bxjscls/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/bxjscls/?view=log)
- [http://www.ctan.org/pkg/bxjscls](http://www.ctan.org/pkg/bxjscls)
- [http://www.ctan.org/tex-archive/language/japanese/BX/bxjscls](http://www.ctan.org/tex-archive/language/japanese/BX/bxjscls)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/latex/zxjatype](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/zxjatype/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/zxjatype/?view=log)
- [http://www.ctan.org/pkg/zxjatype](http://www.ctan.org/pkg/zxjatype)
- [http://www.ctan.org/tex-archive/language/japanese/zxjatype](http://www.ctan.org/tex-archive/language/japanese/zxjatype)

### リリース情報 {#ecfc94ae}

[Tags · zr-tex8r/ZXjatype · GitHub](https://github.com/zr-tex8r/ZXjatype/tags) を参照．<br>

ZXjatype 0.6 は xeCJK 3.0.7 以降で動作します．<br>
[xeCJK 3.0.6 r343](https://code.google.com/p/ctex-kit/source/browse/trunk/xeCJK/?r=343) を使用していて XeTeX 3.1415926-2.4-0.9998 でエラーが発生する場合は ZXjatype 0.6 は使用できません．<br>
xeCJK 3.0.6 r343 を使用している場合は xeCJK, [l3kernel](https://mirror.ctan.org/help/Catalogue/entries/l3kernel.html), [l3packages](https://mirror.ctan.org/help/Catalogue/entries/l3packages.html) をアップデートしてください．<br>
ZXjatype 0.6 よりも前のバージョンは expl3 で記述されている xeCJK 3.x 版ではエラーが発生します．<br>

### ChangeLog {#s6e9d1be}

[>Commit History · zr-tex8r/ZXjatype · GitHub](https://github.com/zr-tex8r/ZXjatype/commits/)

<!-- **不具合 [#u54213d7] -->

### 使い方 {#v46b0c77}

[ZXjatype パッケージ ～XeLaTeX でまともな日本語組版を～ \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/zxjatype.html) を参照．<br>

#### IPAexMincho, IPAexGothic の場合 {#ebafbaae}

```
\usepackage{zxjatype}
\setjamainfont{IPAexMincho}
\setjasansfont{IPAexGothic}
\setjamonofont{IPAexGothic}
```

上記の設定で<br>

```
(c:/w32tex/share/texmf-dist/tex/xelatex/xecjk/config/xeCJK.cfg)))
kpathsea: Running mktextfm IPAexMincho/ICU

The command name is C:\w32tex\bin\mktextfm

kpathsea: Running mktexmf IPAexMincho/ICU.mf

The command name is C:\w32tex\bin\mktexmf
name = IPAexMincho/ICU, rootname = IPAexMincho/ICU, pointsize =
mktexmf: empty or non-existent rootfile!
Cannot find IPAexMincho/ICU.mf.
kpathsea: Appending font creation commands to missfont.log.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!
! fontspec error: "font-not-found"
!
! The font "IPAexMincho" cannot be found.
!
! See the fontspec documentation for further information.
!
! For immediate help type H <return>.
!...............................................
```

のエラーが発生する場合はフォントファイル名を指定すればタイプセットできるようです．<br>

```
\usepackage{zxjatype}
\setjamainfont{ipaexm.ttf}
\setjasansfont{ipaexg.ttf}
\setjamonofont{ipaexg.ttf}
```

zxjatype.sty が見つからなかった場合に xeCJK.sty を使用する場合は以下のようにします．

```
\IfFileExists{zxjatype.sty}{
  \usepackage{zxjatype}
  \setjamainfont{IPAexMincho}
  \setjasansfont{IPAexGothic}
  \setjamonofont{IPAexGothic}
}{
  \usepackage{xeCJK}
  \setCJKmainfont{IPAexMincho}
  \setCJKsansfont{IPAexGothic}
  \setCJKmonofont{IPAexGothic}
}
```

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

### 関連リンク {#q4a9591d}

- [「zxjatype」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=zxjatype)
- [ZXjatype を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=ZXjatype)
- [ZXjatype : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/ZXjatype)
- [QA: XeTeX で日本語、再び](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=139)
- [記事一覧 - tetsuok の旅 blog](http://tetsuok.hatenablog.com/archive/category/latex)
- 仮名だけ別フォント ([qa:57028](https://okumuralab.org/~okumura/texfaq/qa/57028.html), [qa:57030](https://okumuralab.org/~okumura/texfaq/qa/57030.html), [qa:57031](https://okumuralab.org/~okumura/texfaq/qa/57031.html), [qa:57032](https://okumuralab.org/~okumura/texfaq/qa/57032.html))

[^1]: [蛇足事項、その他 \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/note.html)を参照
