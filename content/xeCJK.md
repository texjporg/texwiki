---
title: "xeCJK"
url: "/xeCJK/"
date: 2012-09-01T19:43:31Z
pukiwiki: "xeCJK"
---

# xeCJK

[XeTeX](/XeTeX/) > xeCJK/ZXjatype

## xeCJK/ZXjatype {#x8dfc603}

***

***

## [xeCJK](https://github.com/CTeX-org/ctex-kit/tree/master/xeCJK) {#nb577bd0}

xeCJK は [XeLaTeX](/XeTeX/) で CJK 文書を作成するためのパッケージです．
IVS ([異体字セレクタ](https://ja.wikipedia.org/wiki/%E7%95%B0%E4%BD%93%E5%AD%97%E3%82%BB%E3%83%AC%E3%82%AF%E3%82%BF)) にも対応しています．
[TeX Live](</TeX Live/>), [MiKTeX](/MiKTeX/) に含まれています．

- [CTeX-kit](https://github.com/CTeX-org/ctex-kit)
    - [xeCJK](https://github.com/CTeX-org/ctex-kit/tree/master/xeCJK) &lt;-- [https://raw.githubusercontent.com/CTeX-org/ctex-kit/master/xeCJK/xeCJK.dtx](https://raw.githubusercontent.com/CTeX-org/ctex-kit/master/xeCJK/xeCJK.dtx) をダウンロードして適切に処理[^1]すれば xeCJK.sty が得られます．
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/xelatex/xecjk](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/xelatex/xecjk/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/xelatex/xecjk/?view=log)
- [http://miktex.org/packages/xecjk](http://miktex.org/packages/xecjk)
- [xeCJK Package](https://ctan.org/pkg/xecjk)
- [CTAN:macros/xetex/latex/xecjk](https://mirror.ctan.org/macros/xetex/latex/xecjk)
- [xecjk – Support for CJK documents in XeLaTeX](http://ctanhg.scharrer-online.de/pkg/xecjk.html) (Automated Mercurial Repositories of CTAN)

### リリース情報/ChangeLog {#if427aa7}

- [https://github.com/CTeX-org/ctex-kit/releases](https://github.com/CTeX-org/ctex-kit/releases)
- [https://github.com/CTeX-org/ctex-kit/commits/master/xeCJK/xeCJK.dtx](https://github.com/CTeX-org/ctex-kit/commits/master/xeCJK/xeCJK.dtx)

### 注意点 {#w700f957}

#### xeCJK 3.9.1 で 丸1「①」(U+2460) が表示されない → \xeCJKDeclareCharClass{CJK}{\`①} または \XeTeXcharclass\`①=1 を追加 {#p8d5ba51}

xeCJK 3.9.1 で 丸1「①」(U+2460) が表示されません．

```
\documentclass{scrartcl}
\usepackage{xeCJK}
\setCJKmainfont{HaranoAjiMincho-Regular.otf}
\begin{document}
ABCDEあいうえお①
\end{document}
```

丸1「①」(U+2460) が表示されない場合は \xeCJKDeclareCharClass{CJK}{\`①} または \XeTeXcharclass\`①=1 を追加します．

```
\documentclass{scrartcl}
\usepackage{xeCJK}
\setCJKmainfont{HaranoAjiMincho-Regular.otf}
\xeCJKDeclareCharClass{CJK}{`①}
\begin{document}
ABCDEあいうえお①
\end{document}
```

### 不具合 {#t2600dd9}

[Issues](https://github.com/CTeX-org/ctex-kit/issues?q=xeCJK)

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

W32TeX で \setCJKmainfont{IPAexMincho} を使用する場合はコマンドラインから

```
fc-list | nkf -W8 -s | grep "IPAexMincho"
```

を実行して

```
c:/w32tex/share/texmf-dist/fonts/truetype/ipa/ipaexm.ttf: IPAexMincho,IPAex明朝:style=Regular
```

が表示されれば使用できます．

何も表示されない場合は C:\w32tex\share\texmf-dist\fonts\conf\local.conf を作成して以下のように編集します．

***

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<!-- local.conf file to configure local font access -->
<fontconfig>

<dir>c:/w32tex/share/texmf-dist/fonts/opentype</dir>
<dir>c:/w32tex/share/texmf-dist/fonts/truetype</dir>
<dir>c:/w32tex/share/texmf-local/fonts/opentype</dir>
<dir>c:/w32tex/share/texmf-local/fonts/truetype</dir>

</fontconfig>
```

***

#### MS Mincho, MS Gothic の場合 {#u1a0c13b}

```
\usepackage{xeCJK}
\setCJKmainfont{MS Mincho}
\setCJKsansfont{MS Gothic}
\setCJKmonofont{MS Gothic}
```

<!-- **xeCJK 以外のパッケージ [#k90787cf] -->
<!-- -[[「はじめてのLaTeX」: MiKTeXでXeTeXで日本語を:http://supportdoc.net/support-latex/xetex.html]] -->
<!-- -[[zhmCJK Package:https://ctan.org/pkg/zhmcjk]] -->
<!-- -[[Writing Japanese with XeTeX:http://kuniyoshi.fastmail.fm/xetex/]] -->
<!-- -[[Including Japanese Text:http://www.lewis.soc.hit-u.ac.jp/latex/including-japanese-text]] -->

### 関連リンク {#j53b1d05}

- [xeCJK の検索結果 - マクロツイーター](https://zrbabbler.hatenablog.com/search?q=xeCJK)
- [xeCJK を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=xeCJK)
- [xeCJK : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/xeCJK)
- [日本語の文章を XeLaTeX で書く](http://technology-memo.seesaa.net/article/313825378.html)
- [Newest &#39;xecjk&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/xecjk)
- [How to programmatically detect if a LaTeX package is installed?](http://tex.stackexchange.com/questions/31852/how-to-programmatically-detect-if-a-latex-package-is-installed)

## [ZXjatype](https://github.com/zr-tex8r/ZXjatype) {#n8276349}

ZXjatype は [XeLaTeX](/XeTeX/) で日本語文書を作成するためのパッケージです．
ZXjatype は TeX Live, W32TeX に含まれています．
ZXjatype は xeCJK が必要です．

- [ZXjatype](https://github.com/zr-tex8r/ZXjatype)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/latex/zxjatype](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/zxjatype/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/zxjatype/?view=log)
- [https://ctan.org/pkg/zxjatype](https://ctan.org/pkg/zxjatype)
- [https://ctan.org/tex-archive/language/japanese/zxjatype](https://ctan.org/tex-archive/language/japanese/zxjatype)

### リリース情報 {#ecfc94ae}

[Tags · zr-tex8r/ZXjatype · GitHub](https://github.com/zr-tex8r/ZXjatype/tags) を参照．

### ChangeLog {#s6e9d1be}

[Commit History · zr-tex8r/ZXjatype · GitHub](https://github.com/zr-tex8r/ZXjatype/commits/)

### 注意点 {#w1bedbd6}

#### ZXjatype 0.7 で 丸1「①」(U+2460) が表示されない → \xeCJKDeclareCharClass{CJK}{\`①} または \XeTeXcharclass\`①=1 を追加 {#f847cc0f}

- [https://x.com/zr_tex8r/status/571372508261122048](https://x.com/zr_tex8r/status/571372508261122048)
- [https://www.overleaf.com/read/drxbbhxpbyfm](https://www.overleaf.com/read/drxbbhxpbyfm)

ZXjatype 0.7 で 丸1「①」(U+2460) が表示されません．

```
\documentclass[xelatex]{bxjsarticle}
\usepackage{zxjatype}
\setjamainfont{HaranoAjiMincho-Regular.otf}
\begin{document}
ABCDEあいうえお①
\end{document}
```

丸1「①」(U+2460) が表示されない場合は \xeCJKDeclareCharClass{CJK}{\`①} または \XeTeXcharclass\`①=1 を追加します．

```
\documentclass[xelatex]{bxjsarticle}
\usepackage{zxjatype}
\setjamainfont{HaranoAjiMincho-Regular.otf}
\xeCJKDeclareCharClass{CJK}{`①}
\begin{document}
ABCDEあいうえお①
\end{document}
```

丸1「①」(U+2460) 以外にも表示できない文字がある場合は以下のように設定すればいいようです。

```
\xeCJKDeclareCharClass{CJK}{
  `⓪, `①->`⑳, `㉑->`㉟, `㊱->`㊿,
  `⓿, `❶->`❿, `⓫->`⓴,
  `Ⅰ->`Ⅻ, `ⅰ->`ⅻ, `☃, `⛄, `⛇
}
```

#### [BXjsclsを使ったXeLaTeXのときだけparagraphの前にblacksquareが現れない](https://okumuralab.org/tex/mod/forum/discuss.php?d=1704) {#k0a25489}

### 不具合 {#u54213d7}

- [Issues](https://github.com/zr-tex8r/ZXjatype/issues)

### 使い方 {#v46b0c77}

[ZXjatype パッケージ ～XeLaTeX でまともな日本語組版を～ \[電脳世界の奥底にて\]](https://zr-tex8r.github.io/pythmeni/zxjatype.html) を参照．<br>

以下の様な文書を作成して UTF-8 で保存します．

***

- neko.tex

***

```
\documentclass[xelatex]{bxjsarticle}
\usepackage{zxjatype}
\setjamainfont{ipaexm.ttf}
\setjasansfont{ipaexg.ttf}
\setjamonofont{ipaexg.ttf}
\begin{document}

吾輩は猫である。名前はまだ無い。

どこで生れたかとんと見当がつかぬ。
何でも薄暗いじめじめした所で
ニャーニャー泣いていた事だけは記憶している。
吾輩はここで始めて人間というものを見た。

\end{document}
```

***

XeLaTeX を実行します．

```
xelatex neko.tex
```

#### IPAexMincho, IPAexGothic の場合 {#ebafbaae}

```
\usepackage{zxjatype}
\setjamainfont{IPAexMincho}
\setjasansfont{IPAexGothic}
\setjamonofont{IPAexGothic}
```

上記の設定で

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

のエラーが発生する場合はフォントファイル名を指定すればタイプセットできるようです．

```
\usepackage{zxjatype}
\setjamainfont{ipaexm.ttf}
\setjasansfont{ipaexg.ttf}
\setjamonofont{ipaexg.ttf}
```

W32TeX で \setjamainfont{IPAexMincho} を使用する場合はコマンドラインから

```
fc-list | nkf -W8 -s | grep "IPAexMincho"
```

を実行して

```
c:/w32tex/share/texmf-dist/fonts/truetype/ipa/ipaexm.ttf: IPAexMincho,IPAex明朝:style=Regular
```

が表示されれば使用できます．

何も表示されない場合は C:\w32tex\share\texmf-dist\fonts\conf\local.conf を作成して以下のように編集します．

***

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<!-- local.conf file to configure local font access -->
<fontconfig>

<dir>c:/w32tex/share/texmf-dist/fonts/opentype</dir>
<dir>c:/w32tex/share/texmf-dist/fonts/truetype</dir>
<dir>c:/w32tex/share/texmf-local/fonts/opentype</dir>
<dir>c:/w32tex/share/texmf-local/fonts/truetype</dir>

</fontconfig>
```

***

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

- [zxjatype の検索結果 - マクロツイーター](https://zrbabbler.hatenablog.com/search?q=zxjatype)
- [ZXjatype を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=ZXjatype)
- [ZXjatype : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/ZXjatype)
- [QA: XeTeX で日本語、再び](https://okumuralab.org/tex/mod/forum/discuss.php?d=139)
- [記事一覧 - tetsuok の旅 blog](http://tetsuok.hatenablog.com/archive/category/latex)
- 仮名だけ別フォント ([qa:57028](https://okumuralab.org/~okumura/texfaq/qa/57028.html), [qa:57030](https://okumuralab.org/~okumura/texfaq/qa/57030.html), [qa:57031](https://okumuralab.org/~okumura/texfaq/qa/57031.html), [qa:57032](https://okumuralab.org/~okumura/texfaq/qa/57032.html))

[^1]: [蛇足事項、その他 \[電脳世界の奥底にて\]](https://zr-tex8r.github.io/pythmeni/note.html)を参照
