---
title: "OTF"
url: "/OTF/"
date: 2010-02-19T08:31:12Z
pukiwiki: "OTF"
---

# OTF

## OTF パッケージ {#l22413ec}

[OTF パッケージ](http://psitau.kitunebi.com/otf.html)は，[齋藤修三郎さん](http://psitau.kitunebi.com/)による，Adobe-Japan1-6 相当のフォントあたり最大23,058文字の和文 OpenType フォントを upLaTeX, pLaTeX で使うためのパッケージです。
ここでは OTF パッケージを Microsoft Windows，UNIX （OS X，Solaris など），UNIX 互換 OS （Linux，BSD など）で使う方法を説明します。

<strong>目次</strong>

### ダウンロード {#a0ff39f1}

- [http://www.ctan.org/pkg/japanese-otf](http://www.ctan.org/pkg/japanese-otf)
- [http://www.ctan.org/pkg/japanese-otf-uptex](http://www.ctan.org/pkg/japanese-otf-uptex)

### 特徴 {#w1bac38c}

- OTF パッケージは5書体以上を扱うことができます。
- 和文フォントのメトリックが改訂されました。
    OTF では正方形（高さ : 深さ = 88 : 12）に直されました。
    従来のものは min10.tfm のしがらみを引きずった長方形でした。

- OTF パッケージの扱えるグリフは Adobe-Japan1-6，Adobe-GB1-5，Adobe-CNS1-6，Adobe-Korea1-2 のプロポーショナルでない固定幅のもの（全角幅，半角幅，1/3 角幅など）です。
    CID 番号に完全対応している DVIware で[ヒラギノ](http://www.jiyu-kobo.co.jp/works/works.html#Anchor-001)を使用する場合には従属欧文およびプロポーショナル仮名が使用可能です。

### ChangeLog {#k32bef0c}

- [変更履歴](http://psitau.kitunebi.com/otf.html)（pLaTeX 用のオリジナル版）
- [主な更新箇所](http://www.t-lab.opal.ne.jp/tex/uptex.html)（upLaTeX 用の改変版）

を参照．

<!-- ***japanese-otf [#b26e364e] -->
<!-- -[[[texlive] Index of /trunk/Master/texmf-dist/tex/platex/japanese-otf:http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/japanese-otf/]] -->
<!-- - -[[log:http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/japanese-otf/?view=log]] -->
<!-- -[[texlive] Index of /trunk/Master/texmf-dist/source/fonts/japanese-otf:http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/fonts/japanese-otf/]] -->
<!-- - -[[log:http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/fonts/japanese-otf/?view=log]] -->

<!-- ***japanese-otf-uptex [#kd9a1a12] -->
<!-- -[[[texlive] Index of /trunk/Master/texmf-dist/tex/platex/japanese-otf-uptex:http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/japanese-otf-uptex/]] -->
<!-- - -[[log:http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/japanese-otf-uptex/?view=log]] -->
<!-- -[[[texlive] Index of /trunk/Master/texmf-dist/source/fonts/japanese-otf-uptex:http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/fonts/japanese-otf-uptex/]] -->
<!-- - -[[log:http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/fonts/japanese-otf-uptex/?view=log]] -->

## インストール {#g2a8e99e}

### TeX Live {#da8ed89a}

TeX Live では最初から japanese-otf パッケージ，japanese-otf-uptex パッケージがインストールされます．
バージョンは[ベータ版](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/japanese-otf-uptex/otf.sty?view=markup)に相当します．

### W32TeX {#z4ee6291}

[W32TeX](/W32TeX/) に含まれている [otfbeta.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/otfbeta.tar.xz) をダウンロードします。
これを例えば C:\temp\ に入れます。
Windows PowerShell やコマンド プロンプトで次のように打ち込みます。

```
PS C:\Users\$Env:USERNAME> c:
PS C:\Users\$Env:USERNAME> cd \w32tex
PS C:\w32tex> .\tar xvf C:/temp/otfbeta.tar.xz
```

dvipdfmx 用の map ファイルの置き場所は $TEXMF/fonts/map/dvipdfmx// です。

W32TeX の tar は GNU tar 1.11.8 + 2.2(WIN32) です．

```
PS C:\w32tex> .\tar --version
GNU tar 1.11.8 + 2.2(WIN32)
```

GNU tar 1.11.8 + 2.2(WIN32) の場合，圧縮フィルタ用のオプション文字を省略できます．つまり，次で OK です:

```
PS C:\w32tex> .\tar xvf C:/temp/otfbeta.tar.xz
```

[Tar - GNU Project - Free Software Foundation (FSF)](http://www.gnu.org/software/tar/) によると GNU tar 1.15 (2004-12-20) 以降ではアーカイブの種類を指定するオプションが省略可能になり，GNU tar 1.22 (2009-03-05) で xz がサポートされたようです．

### CMap {#n2a34850}

Adobe 提供の CMap ファイルが2009年9月、オープンソースになりました。
[CMap Resources](http://sourceforge.net/adobe/cmap/) から "Downloads" へ進み、
[Adobe-Japan1-6](http://sourceforge.net/projects/cmap.adobe/files/cmapresources_japan1-6.tar.z/download),
[Adobe-GB1-5](http://sourceforge.net/projects/cmap.adobe/files/cmapresources_gb1-5.tar.z/download),
[Adobe-CNS1-6](http://sourceforge.net/projects/cmap.adobe/files/cmapresources_cns1-6.tar.z/download),
[Adobe-Korea1-2](http://sourceforge.net/projects/cmap.adobe/files/cmapresources_korean1-2.tar.z/download) を取得できます。

## pLaTeX 以外でも OTF のコマンドを使いたい場合 {#fd82fe9a}

\CID や \UTF を使いたい場合は，次のパッケージを使います．

- [LuaTeX-ja](/LuaTeX-ja/) の場合：luatexja-otf パッケージを読み込みます．
- XeLaTeX の場合：[ZXotf パッケージ](http://zrbabbler.sp.land.to/zxotf.html)を読み込みます．

## 使い方 {#c8490780}

### フォントを埋め込まず使用する {#m049c993}

まず OpenType フォントを持っていなくても試せる方法です。
Ryimun-Light と GothicBBB-Meduim は埋め込まれていないフォントを表します。
[Adobe Reader](</Adobe Reader/>) は埋め込まれていない Ryumin-Light と GothicBBB-Medium を適切なフォントに代替して表示・印刷します。
Adobe Reader で使えるアジア・拡張言語フォントパック

- [Adobe Reader XI Font Packs - Asian and Extended Language Pack (Windows)](http://www.adobe.com/support/downloads/detail.jsp?ftpID=5508)
- [Adobe Reader XI Font Packs - Asian and Extended Language Pack (Mac)](http://www.adobe.com/support/downloads/detail.jsp?ftpID=5509)

はインストール済みとします。

これで次のものをテストしてみます。

- \UTF{...} は十六進4桁の Unicode 番号
- \CID{...} は十進の CID 番号

を使います。

***

```
\ifdefined\kanjiskip
  \documentclass[uplatex]{jsarticle}
  \usepackage[uplatex,jis2004]{otf}
\else
  \documentclass{ltjsarticle}
  \usepackage{luatexja-otf}
  \usepackage[noembed,jis2004]{luatexja-preset}
\fi
\begin{document}
```

```
森\UTF{9DD7}外と内田百\UTF{9592}とが\UTF{9AD9}島屋に行くところを想像した。
```

```
\CID{7652}飾区の\CID{13706}野屋
```

```
\end{document}
```

***

これを “hoge.tex” という名前で UTF-8 で保存します。
Windows PowerShell, コマンド プロンプト, ターミナルエミュレータで次のようにして処理します。

- upLaTeX (ptex2pdf) の場合

> - TeX Live の場合
>
>     ```
>     ptex2pdf -u -l -od "-f uptex-noEmbed-04.map -f otf-up-noEmbed.map" hoge.tex
>     ```
>
> - W32TeX の場合
>
>     ```
>     ptex2pdf -u -l -od "-f noembed04.map" hoge.tex
>     ```
>

- LuaLaTeX の場合

    ```
    lualatex hoge.tex
    ```

- LuaJITLaTeX の場合

    ```
    luajitlatex hoge.tex
    ```

出力された PDF ファイルを表示します。

- Windows の場合

```
start hoge.pdf
```

- OS X の場合

```
open hoge.pdf
```

- Linux の場合

```
xdg-open hoge.pdf
```

PDF ファイルが Adobe Reader に関連付けされている場合は hoge.pdf が Adobe Reader で表示されると思います。

upLaTeX (ptex2pdf), LuaLaTeX, LuaJITLaTeX では \UTF{...} や \CID{...} を使用しなくても OK です．
ただし upLaTeX の場合に

```
 \usepackage[uplatex,jis2004]{otf}
```

を記述しなかった場合は dvipdfmx で

```
char=0x20bb7(134071)
Tried to set a nonexistent character in a virtual font
```

と表示されて Adobe Reader で 𠮷 (U+20BB7) の字が表示されませんでした．

***

```
\ifdefined\kanjiskip
  \documentclass[uplatex]{jsarticle}
  \usepackage[uplatex,jis2004]{otf}
\else
  \documentclass{ltjsarticle}
  \usepackage[noembed,jis2004]{luatexja-preset}
\fi
\begin{document}
```

```
森鷗外と内田百閒とが髙島屋に行くところを想像した。
```

```
葛飾区の𠮷野屋
```

```
\end{document}
```

***

最新の Adobe-Japan1-6 の文字を表示させて見ましょう。
OTF パッケージはベータ版を使用します。

テスト用のソースは，例えば次のものを用いてみます。

***

```
\ifdefined\kanjiskip
  \documentclass[uplatex]{jsarticle}
  \usepackage[uplatex,jis2004]{otf}
  \kcatcode`゜=18
\else
  \documentclass{ltjsarticle}
  \usepackage{luatexja-otf}
  \usepackage[noembed,jis2004]{luatexja-preset}
\fi
\begin{document}
Adobe-Japan1-5で追加された文字を使った例
\begin{itemize}
  \item 「\゜か」，「\゜き」，「\゜く」，「\゜け」，「\゜こ」，
        「\゜カ」，「\゜キ」，「\゜ク」，「\゜ケ」，「\゜コ」は鼻濁音を表す。
  \item Macintosh用キーボードの\UTF{2318}(Command key)を押す。
  \item \UTF{2672}を心がけよう。
\end{itemize}
```

```
Adobe-Japan1-6で追加された文字を使った例
\begin{itemize}
  \item ほげほげ番組\CID{20556}
  \item ほげほげフェスティバル\CID{20656}
  \item \CID{20939}(Bq: becquerel)は放射能の強さを表す単位である。
  \item フラーレン(fullerene) C$_{60}$は
        サッカーボール状（\CID{20957}）の構造をしている。
  \item \UTF{9B87}とは岩魚（イワナ）のことであり，嘉魚とも書く。
\end{itemize}
\end{document}
```

***

最初の3項目に Adobe-Japan1-5 で追加された文字を，次の5項目に Adobe-Japan1-6 で追加された文字を使っています。
コマンド処理は上と同様です。

uplatex で処理する場合に \kcatcode\`゜=18 を追加しています．
これを追加しない場合は uplatex でエラーが発生します．
upTeX での kcatcode の既定値が pTeX から変更されているようです．

- W32TeX の upTeX-0.11 ([qa:49088](https://okumuralab.org/~okumura/texfaq/qa/49088.html))
- pTeX-0.11 の kcatcode の既定値 (Re: W32TeX の...) ([qa:49120](https://okumuralab.org/~okumura/texfaq/qa/49120.html))
- upTeX の kcatcode の既定値(Re: 欧文ギリシア語の...) ([qa:48229](https://okumuralab.org/~okumura/texfaq/qa/48229.html), [qa:48242](https://okumuralab.org/~okumura/texfaq/qa/48242.html))

を参考にしてください．

### フォントを埋め込むには {#hf05d89a}

上の方法で作った PDF ファイルは，和文フォントが埋め込まれていないので軽いのですが，PDF の仕様に違反しており，どんな環境でも文字化けせず読めるというわけではありません。
実際，上のファイルを upLaTeX (ptex2pdf) で処理して，SumatraPDF と TeXworks で開いた場合に
𠮷 (U+20BB7) の字が表示されませんでした。

どのような環境でも読めるようにするには，フォントを埋め込まなければなりません。
そのためには OpenType フォントが必要です。

#### Microsoft Windows の場合 {#p413a15f}

とりあえず　$TEXMF/fonts/opentype/Adobe/ に Adobe Reader/Acrobat の KozMinPr6N-Regular.otf ・ KozGoPr6N-Medium.otf のシンボリックリンクを作成します。
シンボリックリンクは管理者権限で「コマンド プロンプト」を開き， mklink を実行すれば作成できます。
C:/Windows/Fonts/ にある KozMinPr6N-Regular.otf 等の otf ファイルを $TEXMF/fonts/opentype/Adobe/ に直接コピーすることはライセンス上できません。

Windows PowerShell またはコマンド プロンプトで次のようにして処理します。

- upLaTeX (ptex2pdf) の場合

> - TeX Live の場合
>
>     ```
>     ptex2pdf -u -l -od "-f uptex-kozuka-pr6n-04.map -f otf-up-kozuka-pr6n.map" hoge.tex
>     ```
>
> - W32TeX の場合
>
>     ```
>     ptex2pdf -u -l -od "-f kozukapr6n04.map" hoge.tex
>     ```
>

- LuaLaTeX の場合

    ```
    \usepackage[noembed,jis2004]{luatexja-preset} を \usepackage[kozuka-pr6n,jis2004]{luatexja-preset} に変更
    lualatex hoge.tex
    ```

- LuaJITLaTeX の場合

    ```
    \usepackage[noembed,jis2004]{luatexja-preset} を \usepackage[kozuka-pr6n,jis2004]{luatexja-preset} に変更
    luajitlatex hoge.tex
    ```

これで明朝体については「小塚明朝 Pr6N R」が，ゴシック体については「小塚ゴシック Pr6N M」がそれぞれ埋め込まれるので，Adobe-Japan1-6 の範囲なら誰でも読めるようになります。

なお，Adobe に問い合わせたところ，アジア・拡張言語フォントパック内の
OpenType フォントの用途として，Adobe Reader/Acrobat でのプレビュー・印刷用途を想定しているようです。
上のような dvipdfmx, lualatex, luajitlatex を利用したフォントの埋め込みはライセンス違反となりますのでご注意下さい。
[TeXWiki:フォント](</フォント/>) にある Adobe-Japan1-6 に完全対応した和文フォント（有償）を購入している場合には問題ありません。

#### UNIX 互換 OS の場合 {#c2475144}

とりあえず Windows 版 Adobe Reader の KozMinPr6N-Regular.otf ・ KozGoPr6N-Medium.otf のある
ディレクトリを $TEXMFLOCAL/fonts/opentype// ディレクトリ以下からシンボリックリンクします。

次のようにして処理します。

- upLaTeX (ptex2pdf) の場合

    ```
    ptex2pdf -u -l -od "-f uptex-kozuka-pr6n-04.map -f otf-up-kozuka-pr6n.map" hoge.tex
    ```

- LuaLaTeX の場合

    ```
    \usepackage[noembed,jis2004]{luatexja-preset} を \usepackage[kozuka-pr6n,jis2004]{luatexja-preset} に変更
    lualatex hoge.tex
    ```

これで明朝体については「小塚明朝 Pr6N R」が，ゴシック体については「小塚ゴシック Pr6N M」がそれぞれ埋め込まれるので
Adobe-Japan1-6 の範囲なら誰でも読めるようになります。

## Adobe-Japan1-6 とは {#j54465d8}

2004年6月に出た，現時点で最新の Adobe-Japan1-6 は，JIS C 6226:1978，JIS X 0213:2000，JIS X 0212:1990の規格表示体，JIS X 0213:2004の印刷標準字体や
U-PRESS用の文字を含む23,058グリフの文字セットです。
KozMinPr6N-Regular.otf と KozGoPr6N-Medium.otf が Adobe-Japan1-6 に準拠しています。
KozMinPr6N-Regular.otf と KozGoPr6N-Medium.otf は Adobe Reader 日本語版または Adobe Reader に用いるアジア・拡張言語フォントパックに含まれているので
Adobe Reader を使用すれば豊富なフォントを利用できます。
Microsoft Windows 版の Adobe Reader に
対する[アジア・拡張言語フォントパック](ftp://ftp.adobe.com/pub/adobe/reader/win/11.x/11.0.00/misc/)には

- KozMinPr6N-Regular.otf ［Adobe-Japan1-6 対応の日本語明朝体フォント］
- KozGoPr6N-Medium.otf ［Adobe-Japan1-6 対応の日本語ゴシック体フォント］
- AdobeSongStd-Light.otf ［Adobe-GB1-5 対応の簡化字中国語宋体フォント］
- AdobeHeitiStd-Regular.otf ［Adobe-GB1-5 対応の簡化字中国語黒体フォント］
- AdobeMingStd-Light.otf ［Adobe-CNS1-6[^1] 対応の繁體中国語明體フォント］
- AdobeFanHeitiStd-Bold.otf ［Adobe-CNS1-6 対応の繁體中国語黒體フォント］
- AdobeMyungjoStd-Medium.otf ［Adobe-Korea1-2 対応の
    韓国語｛&#xd55c;&#xad6d;&#xc5b4;｝明朝體｛&#xba85;&#xc870;&#xccb4;｝フォント］

- AdobeGothicStd-Bold.otf ［Adobe-Korea1-2 対応の
    韓国語｛&#xd55c;&#xad6d;&#xc5b4;｝ゴシック体フォント］

が付属しています。

### ヒラギノと OS X {#l1d1369f}

ヒラギノを買ったら MacBook Air がオマケに附いてきました（ウソ）。

TeX Live をインストールして

```
sudo kanji-config-updmap-sys -jis2004 hiragino-pron
```

を実行しました。
これで2万グリフのヒラギノが使えるようになりました。めでたしめでたし。

!["ヒラギノ出力例"](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/hiragino.png)

\usepackage\[uplatex,jis2004,expert\]{otf} とすると，
ご覧のように，縦書きと横書きで一部の字形が変わります（拙著旧版
『[［改訂版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun2e.html)』も
ヒラギノですが変わらなかったのは OpenType 版ヒラギノではなかったから）。
ちなみに無指定の OTF パッケージでは
\bfseries で同じウェイトのゴシックになるだけですので，上の図の例では “bold” オプションも加えて太いゴシックにしてあります。

### 新しいフォントメトリック {#y2c312cd}

OTF パッケージを（“noreplace” オプション以外で）使うと，\UTF{...} や
\CID{...} で指定した文字以外についても，新しい和文用メトリックが使われます。
これは JIS フォントメトリックとほぼ同じですが，JIS フォントメトリックが今までの
min10 などのしがらみを引きずって「高さ + 深さ &lt; 幅」であったのに対し，OTF
パッケージの新 JIS メトリックは正方形（高さ + 深さ = 幅）です。
従って，1 zw
= 1 zh です（公称 10 pt のフォントで 1 zw = 1 zh = 9.62216 pt）。
また，一般的な PostScript の和文フォントにならって「高さ : 深さ = 88 : 12」です。

さらに，「？」と「！」（JIS の用語では「区切り約物」）の後に，
横書きの場合も 0.5 zw のグルー（スペース）が入るようになりました
（縦書きでは tmin10 などと同様 1 zw が入ります）。
このグルーを禁止するには

```
あっ！\inhibitglue と驚く
```

または

```
あっ！\<と驚く
```

と書かなければなりません。

### upLaTeX での利用 {#u1eb9e1c}

upLaTeX を使用すると丸附き数字（e.g. &#x2460; \[U+2460\]）なども使用できます。

### CID 番号参照用のサンプルへのリンク {#ze53c84a}

- [Font and Type Technology Center&mdash;Font technical notes](http://www.adobe.com/devnet/font.html)
    - [Adobe-Japan1-6 Character Collection for CID-Keyed Fonts #5078 (PDF,10.3 MiB)](http://www.adobe.com/content/dam/Adobe/en/devnet/font/pdfs/5078.Adobe-Japan1-6.pdf)
    - [Adobe-GB1-5 Character Collection for CID-Keyed Fonts #5079 (PDF,12.6 MiB)](http://www.adobe.com/content/dam/Adobe/en/devnet/font/pdfs/5079.Adobe-GB1-5.pdf)
    - [Adobe-CNS1-5 Character Collection for CID-Keyed Fonts #5080 (PDF,8.0 MiB)](http://www.adobe.com/content/dam/Adobe/en/devnet/font/pdfs/5080.Adobe-CNS1-5.pdf)
    - [Adobe-Korea1-2 Character Collection for CID-Keyed Fonts #5093 (PDF,6.0 MiB)](http://www.adobe.com/content/dam/Adobe/en/devnet/font/pdfs/5093.Adobe-Korea1-2.pdf)

- [ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/)<br>
    [ftp://ftp.oreilly.de/pub/examples/english_examples/nutshell/cjkv/adobe/](ftp://ftp.oreilly.de/pub/examples/english_examples/nutshell/cjkv/adobe/)<br>
    [http://examples.oreilly.de/english_examples/nutshell/cjkv/adobe/](http://examples.oreilly.de/english_examples/nutshell/cjkv/adobe/)
    - [aj16-radical-stroke.pdf](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/aj16-radical-stroke.pdf)
    - [aj16-utf32.pdf](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/aj16-utf32.pdf)
    - [ag15-utf32.pdf](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/ag15-utf32.pdf)
    - [ac15-utf32.pdf](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/ac15-utf32.pdf)
    - [ak12-utf32.pdf](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/ak12-utf32.pdf)

- [安岡孝一先生の website](http://kanji.zinbun.kyoto-u.ac.jp/~yasuoka/index-j.html)
    - [Adobe-Japan1 の漢字（部首画数順） (PDF)](http://kanji.zinbun.kyoto-u.ac.jp/~yasuoka/publications/Adobe-Japan1kanji.pdf)

## OTF パッケージ用の map ファイル {#nc92c884}

TeX Live と W32TeX には OTF パッケージで使用する map ファイルが最初から用意されています．

### TeX Live の場合 {#p1b2eb36}

TeX Live には，(e-)(u)pTeX エンジン用の [map ファイル](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/)が準備されています。 (→ [updmap and kanji - TeX Live - TeX Users Group](http://tug.org/texlive/updmap-kanji.html) を参照。)
埋め込み制御は

```
$ sudo updmap-sys --setoption kanjiEmbed noEmbed  （埋め込まない）
$ sudo updmap-sys --setoption kanjiEmbed hiragino （ヒラギノ書体を埋め込む）
$ sudo updmap-sys --setoption kanjiEmbed ipaex    （IPAexフォントを埋め込む）
$ sudo updmap-sys --setoption kanjiEmbed ipa      （IPAフォントを埋め込む）
$ sudo updmap-sys --setoption kanjiEmbed ms       （MSフォントを埋め込む）
$ sudo updmap-sys --setoption kanjiEmbed yu-win   （游フォントを埋め込む）
$ sudo updmap-sys --setoption kanjiEmbed yu-osx   （游フォントを埋め込む）
$ sudo updmap-sys --setoption kanjiEmbed kozuka   （小塚書体を埋め込む）
$ sudo updmap-sys --setoption kanjiEmbed morisawa （モリサワフォントを埋め込む）
```

などを実行すれば dvipdfmx/dvips/xdvi の設定がすべて切り替わります。
[kanji-config-updmap](https://github.com/norbusan/jfontmaps/blob/master/script/kanji-config-updmap.pl) を使用すれば PDF へのフォント埋め込みの指定、および埋め込み状況の確認ができます。

```
$ sudo kanji-config-updmap-sys <fontname>  （otf-<fontname>.map にしたがってフォントを埋め込む）
$ sudo kanji-config-updmap-sys auto        （自動的に <fontname> のいずれかを埋め込む）
$ sudo kanji-config-updmap-sys nofont      （PDF にフォントを埋め込まない）
$ sudo kanji-config-updmap-sys status      （現在の埋め込み設定を確認する）
```

自動的に埋め込み設定されるフォント &lt;fontname> は次のものです．

```
hiragino, hiragino-pron, morisawa, morisawa-pr6n, kozuka, kozuka-pr6, kozuka-pr6n, ipaex, ipa, ms, yu-win, yu-osx
（いずれもないときは nofont になります）
```

dvipdfmx の設定を一時的に変更したいだけなら，コマンドラインから

```
dvipdfmx -f uptex-hiragino-pron-04.map -f otf-up-hiragino-pron.map hoge.dvi
```

などとオプション “-f” で直接指定する方法もあります。

### W32TeX の場合 {#rffd4bea}

W32TeX には，(e-)(u)pTeX エンジン用の map ファイルが準備されています。
埋め込み制御はすべて dvipdfmx の -f オプションを使います。 (→ [OTF利用の際のフォント埋め込みの切り替えなど](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=866) を参照．)

```
dvipdfmx dviname (デフォルト,otf は Hiragino ProN、一般漢字は ipaex)
dvipdfmx -f hiragino.map dviname (Hiragino)
dvipdfmx -f hiraginopron.map dviname (Hiragino ProN)
dvipdfmx -f hiraginopron04.map dviname (Hiragino ProN, JIS2004字形)
dvipdfmx -f ipa.map dviname (ipa)
dvipdfmx -f ipaex.map dviname (ipaex)
dvipdfmx -f kozuka.map dviname (小塚 Pro)
dvipdfmx -f kozukapr6n.map dviname (小塚 Pr6N)
dvipdfmx -f kozukapr6n04.map dviname (小塚 Pr6N, JIS2004字形)
dvipdfmx -f morisawa.map dviname (Morisawa)
dvipdfmx -f morisawapr6n.map dviname (Morisawa Pr6N)
dvipdfmx -f morisawapr6n04.map dviname (Morisawa Pr6N, JIS2004字形)
dvipdfmx -f msmingoth.map dviname (msmincho and msgothic)
dvipdfmx -f yu.map dviname (游明朝・游ゴシック)
dvipdfmx -f noembed.map dviname (埋め込まない)
dvipdfmx -f noembed04.map dviname (埋め込まない, JIS2004字形)
```

dvips の場合は

```
dvips -Pdl dviname (デフォルト,otf は Hiragino ProN)
dvips -Pdl -u+hiragino-ps.map dviname (Hiragino)
dvips -Pdl -u+hiraginopron-ps.map dviname (Hiragino ProN)
dvips -Pdl -u+hiraginopron04-ps.map dviname (Hiragino ProN, JIS2004字形)
dvips -Pdl -u+kozuka-ps.map dviname (小塚 Pro)
dvips -Pdl -u+kozukapr6n-ps.map dviname (小塚 Pr6N)
dvips -Pdl -u+kozukapr6n04-ps.map dviname (小塚 Pr6N, JIS2004字形)
dvips -Pdl -u+morisawa-ps.map dviname (Morisawa)
dvips -Pdl -u+morisawapr6n-ps.map dviname (Morisawa Pr6N)
dvips -Pdl -u+morisawapr6n04-ps.map dviname (Morisawa Pr6N, JIS2004字形)
dvips -Pdl -u+standard-ps.map dviname (Ryumin-Light, GothicBBB-Medium のみ)
dvips -Pdl -u+standard04-ps.map dviname (Ryumin-Light, GothicBBB-Medium のみ, JIS2004字形)
```

結果の PS は Distiller で処理できます。 Ghostscript を使う場合は、

```
ps2otfps old.ps new.ps
```

によって、new.ps を作成し、この new.ps を Ghostscript で処理します。
あるいは，最新の ps2otfps はフィルタにもなるので (オプション -f)

```
dvips -f -Pdl ... dviname | ps2otfps -f >psname
```

を使うほうが便利でしょう。

<!-- otf-cjmr-h は，前半では Identity-H と紹介されていますが， -->
<!-- 以下では Adobe-Japan1-6 にしてあるのはどういう意味があるのでしょうか。 -->
<!-- Adobe-Japan1-6 は「必要な４つの CMap」にも含まれてませんが，いいのかな。 -->

<!-- 日本語の OpenType フォント内には Adobe-Japan1 の情報が入っているので， -->
<!-- 日本語の OpenType フォントを使う場合には -->
<!-- Adobe-Japan1-6 は必要なく Identity-H でもかまいません。 -->
<!-- TrueType フォントには Adobe-Japan1 の情報が入っていないので， -->
<!-- TrueType フォントを使って CID 番号の命令 (\CID{}) から文字を出す場合には -->
<!-- CMap に Adobe-Japan1-6 を指定するか， -->
<!-- または Identity-H, Identity-V を指定した上で -->
<!-- TrueType フォント名の最後に “/AJ16” を付け加える必要があります。 -->
<!-- 中国語や韓国語についても同様のことが言えます。 -->
<!-- （下の記述にある Microsoft Windows の TrueType フォントを使う場合の -->
<!--   dvipdfmx 用の map ファイルや次のサイトをご参照ください。 -->
<!--   http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?LaTeX-CJK#odc3338f -->
<!--   http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfmx/README?view=markup -->
<!--   http://www.ring.gr.jp/pub/text/CTAN/dviware/dvipdfmx/README       ） -->
<!-- 実際に，Adobe-Japan1-6 や “/AJ16” を使わずに -->
<!-- Identity-H, Identity-V と TrueType フォントを使うように -->
<!--  -->
<!--  otf-cjmr-h     Identity-H       :0:msmincho.ttc -->
<!--  otf-cjmr-v     Identity-V       :0:msmincho.ttc -->
<!--  -->
<!-- などと map ファイルに書いた上で -->
<!--  -->
<!--  \documentclass{jsarticle} -->
<!--  %\documentclass{tarticle} -->
<!--  \usepackage[deluxe,multi]{otf} -->
<!--  \begin{document} -->
<!--  \noindent -->
<!--  日本語\\ -->
<!--  \UTF{65E5}\UTF{672C}\UTF{8A9E}\\ -->
<!--  \CID{3284}\CID{3722}\CID{1952} -->
<!--  \end{document} -->
<!--  -->
<!-- と書いて dvipdfmx で処理してみると -->
<!-- おそらく3行目の CID 番号による部分が文字化けするので， -->
<!-- Adobe-Japan1-6 の必要性がわかると思います。 -->
<!--  -->
<!-- OTF パッケージの機能をフルに活用しようとすれば， -->
<!-- H, UniJIS-UTF16-H, UniGB-UTF16-H, UniCNS-UTF16-H, UniKS-UTF16-H, -->
<!-- V, UniJIS-UTF16-V, UniGB-UTF16-V, UniCNS-UTF16-V, UniKS-UTF16-V, -->
<!-- Identity-H, Identity-V, Adobe-Japan1-6, Adobe-Korea1-2, -->
<!-- Adobe-GB1-5, Adobe-CNS1-5 -->
<!-- の計16個の CMap が必要になります。 -->
<!--  -->
<!-- 前半の記述は別の方がお書きになったもので， -->
<!-- 記述内容に差がある部分もあると思います。 -->
<!-- 時間が許せば，前半と後半とをひとまとめにしたいと思っております。 -->
<!--  -->
<!-- ptetex3 の updmap では CJK フォントも対象になっているのですか。 -->
<!-- W32TeX では updmap は CJK フォント以外のみに対応しています。 -->
<!-- ところで，ptetex3 では updmap での（特に Mac OS X での） -->
<!-- 中国語や韓国語のフォントの埋め込み制御はどのようになっているのでしょうか？ -->
<!-- 上の記述では日本語フォントの埋め込み制御しか無いようですが。 -->

<!-- 丁寧な解説ありがとうございます。TrueType フォントのことを忘れておりました。 -->
<!-- Adobe-Japan1-6 の意義がようやくわかりました。 -->
<!-- 個人的な感想を書かせていただきますと， -->
<!-- ご承知の通り Identity-{H,V} の二つはまったく同一ですから， -->
<!-- otf-cjmr-{h,v} のエンコードの表記は， -->
<!-- やはり揃えておいたほうが誤解が少ないように思います。 -->
<!-- （私は長い間 Identity-V は縦書きの文字に置き換えられると思っていました。） -->
<!-- ptetex3 の updmap については，以下が詳しいです。 -->
<!-- http://tutimura.ath.cx/ptetex/?%A5%D5%A5%A9%A5%F3%A5%C8%A4%CE%BD%B8%C3%E6%B4%C9%CD%FD -->
<!-- 中韓のフォントの埋め込み制御はできないようですが， -->
<!-- 埋め込み制御は dvipdfm に直接オプションで指定するのがよいと思います。 -->

<!-- Identity-H と Identity-V とは同じではありませんよ。例えば -->
<!--  -->
<!--  otf-cjmr-h     Identity-V          Ryumin-Light -->
<!--  -->
<!-- とすると，文字が横に寝てしまいます。 -->
<!--  -->
<!-- 私は CMap の部分にはできるだけ Identity-H を使わずに， -->
<!-- その CID 番号に対応した CMap 名を表記するべきだと考えます。例えば， -->
<!--  -->
<!--  otf-cjmr-h     Identity-H          MSung-Light -->
<!--  -->
<!-- のように map ファイルを書いても dvipdfmx は何のエラーも出さずに -->
<!-- 処理を完了させます。しかし実際に PDF を表示してみると， -->
<!-- 日本語用の CID 番号による部分が見事に文字化けしています。 -->
<!-- Identity-H と書いて実質 CMap を特定しなかったために -->
<!-- MSung-Light 内の CMap 情報である Adobe-CNS1 を使ってしまったのが原因です。 -->
<!-- 当然この virtual font “otf-cjmr-h” は -->
<!-- 日本語用の CID 番号の CMap である Adobe-Japan1 のみに対応しています。 -->
<!-- 従って “otf-cjmr-h” には Adobe-Japan1-6 を使うということを -->
<!-- はっきりと明示するために，map ファイルにはできるだけ -->
<!-- Identity-H ではなく Adobe-Japan1-6 と CMap 名を書くべきだと考えるのです。 -->
<!-- 一方，横組み用の CMap である Adobe-Japan1-6 などを縦組み用の Identity-V と -->
<!-- 置き換えることはできません。もし置き換えてしまうと文字が横に寝てしまいます -->
<!-- （一応 Adobe-Japan1-5-V なるものもありますが，使わないほうが良いとのこと）。 -->
<!-- そのため Identity-V を使わざるを得ません。 -->
<!-- そこで Identity-V と TrueType フォントとを一緒に使う場合には -->
<!-- “/AJ16” などのオプションを付け加えることによって CMap を特定しています。 -->
<!--  -->
<!-- 私も dvipdfmx のオプション “-f” を使って map ファイルを指定し， -->
<!-- 頻繁に埋め込み制御を行っています。ここのページで -->
<!-- map ファイルの代表的な例を挙げているのも，各個人がこの例を参考にして -->
<!-- 独自の map ファイルを作って使って頂ければ幸いと考えたからです。 -->
<!-- しかし，最もよく使う埋め込み制御をデフォルトの map ファイルとして updmap や -->
<!-- cid-x.mapなどの標準 map ファイルに設定しておくのが便利だとは考えます。 -->
<!-- （20th Sep., 2006 現在では W32TeX 付属の -->
<!--   $TEXMFMAIN/fonts/map/dvipdfmx/base/cid-x.map に -->
<!--   中国語や韓国語用の virtual font に対する記述はありますが， -->
<!--   Microsoft Windows に標準ではインストールされていないフォントを指定してあるので， -->
<!--   中国語や韓国語に対しては実質使い物になりません。 -->
<!--   ptetex3 ではどうでしょうか？） -->
<!--  -->
<!-- この議論，このページの下の方か TeX Q & A の方へ移した方がよくありませんか？ -->

<!-- これで最後だと思うので，ここに書かせていただきます。 -->
<!-- Identity-{H,V} の文字のマッピングは同一だと思っていたのですが， -->
<!-- それはそうでも，文字の向きが変わってしまうのには気づきませんでした。 -->
<!-- Adobe-Japan1-6 と書かれている気持ちもわかりました。 -->
<!-- どうもありがとうございました。 -->
<!-- ptetex3 では，OpenType フォントが前提になってるようですし， -->
<!-- xdvi との連携もあるので Identity-{H,V} のほうが都合よさそうです。 -->
<!-- ちなみに，中韓は非埋め込みの設定だけが準備されています。 -->

### For dvipdfmx {#gb0b4cc5}

<!-- あらかじめ dvipdfmx で使いたいフォントを，拡張子が “.otf” の -->
<!-- OpenType フォントファイルなら $TEXMFLOCAL/fonts/opentype// 以下に， -->
<!-- 拡張子が “.ttf”，“.ttc” の TrueType データ -->
<!-- （2次 B-スプライン曲線データ）フォントなら $TEXMFLOCAL/fonts/truetype// 以下に -->
<!-- コピーまたは移動しておくかシンボリックリンクを作っておきます。 -->
<!-- （Microsoft Windows ならば，システムにフォントをインストールしておいても良いでしょう。） -->
<!--  -->
<!-- $TEXMF/dvipdfmx/config/dvipdfmx.cfg に OTF パッケージ用の map ファイル -->
<!-- （例えば $TEXMFLOCAL/fonts/map/dvipdfmx/local/cid-x-local.map）のファイル名を -->
<!-- f cid-x-local.map -->
<!-- のように追記した上で， -->
<!-- 次のような OTF パッケージ用の map ファイル -->
<!-- （ここでは $TEXMFLOCAL/fonts/map/dvipdfmx/local/cid-x-local.map）を -->
<!-- $TEXMFLOCAL/fonts/map/dvipdfmx// 以下に作成します。 -->
<!--  -->
<!-- （または {$TEXMFMAIN,$TEXMFDIST}/fonts/map/dvipdfmx/base/cid-x.map を -->
<!-- $TEXMFLOCAL/fonts/map/dvipdfmx/base/cid-x.map にコピーした上で， -->
<!-- $TEXMFLOCAL/fonts/map/dvipdfmx/base/cid-x.map の最後に -->
<!-- 次のような内容を直接追記しても良いでしょう。） -->

- [https://github.com/norbusan/jfontmaps](https://github.com/norbusan/jfontmaps)
- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/)

#### フォントを埋め込まない場合 {#t1a90b4f}

- [https://github.com/norbusan/jfontmaps/tree/master/maps/noEmbed/](https://github.com/norbusan/jfontmaps/tree/master/maps/noEmbed/)
- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/noEmbed/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/noEmbed/)

- TeX Live の場合

```
ptex2pdf -u -l -od "-f uptex-noEmbed-04.map -f otf-up-noEmbed.map" hoge.tex
```

- W32TeX の場合

```
ptex2pdf -u -l -od "-f noembed04.map" hoge.tex
```

#### IPAexフォントを使う場合 {#xcbe9625}

- [https://github.com/norbusan/jfontmaps/tree/master/maps/ipaex/](https://github.com/norbusan/jfontmaps/tree/master/maps/ipaex/)
- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ipaex/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ipaex/)

- TeX Live の場合

```
ptex2pdf -u -l -od "-f uptex-ipaex.map -f otf-up-ipaex.map" hoge.tex
```

- W32TeX の場合

```
ptex2pdf -u -l -od "-f ipaex.map" hoge.tex
```

<!-- 各フリーフォントの入手先は[[フォント - TeX Wiki>フォント]]を参照してください。なお，入手先は変更される場合があります。また，利用・再配布等にあたっては「使用許諾契約」をご自身で確認されることを強くおすすめいたします（フリーフォントの「使用許諾契約」は随時変更されるため）。 -->

#### MSフォントを使う場合 {#g54b5df7}

- [https://github.com/norbusan/jfontmaps/tree/master/maps/ms/](https://github.com/norbusan/jfontmaps/tree/master/maps/ms/)
- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ms/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ms/)

- TeX Live の場合

```
ptex2pdf -u -l -od "-f uptex-ms.map -f otf-up-ms.map" hoge.tex
```

- W32TeX の場合

```
ptex2pdf -u -l -od "-f msmingoth.map" hoge.tex
```

なお，Microsoft Windows に
付属している日本語フォントのウェイトに関する分類は次のようになっています。

<table>
<thead>
<tr><th rowspan="2" style="text-align:center">weight</th><th style="text-align:center">serif</th><th colspan="2" style="text-align:center">sans serif</th></tr>
<tr><th style="text-align:center">明朝体</th><th style="text-align:center">角ゴシック体</th><th style="text-align:center">丸ゴシック体</th></tr>
</thead>
<tbody>
<tr><th style="text-align:center">Ultra bold</th><td style="text-align:center"></td><td style="text-align:center">HG創英角ｺﾞｼｯｸUB<br>(hgrsgu.ttc)</td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Heavy</th><td style="text-align:center"></td><td style="text-align:center">HG創英角ﾎﾟｯﾌﾟ体<br>(hgrpp1.ttc)</td><td style="text-align:center"></td></tr>
<tr><th rowspan="2" style="text-align:center">Extra bold</th><td style="text-align:center">HG創英ﾌﾟﾚｾﾞﾝｽEB<br>(hgrpre.ttc)</td><td rowspan="2" style="text-align:center">HGｺﾞｼｯｸE<br>(hgrge.ttc)</td><td rowspan="2" style="text-align:center"></td></tr>
<tr><td style="text-align:center">HG明朝E<br>(hgrme.ttc)</td></tr>
<tr><th rowspan="2" style="text-align:center">Bold</th><td rowspan="2" style="text-align:center">HG明朝B<br>(hgrmb.ttc)</td><td style="text-align:center">HG ゴシックB Sun<br>(HG-GothicB-Sun.ttc)</td><td style="text-align:center"></td></tr>
<tr><td style="text-align:center">ＭＳ ゴシック<br>(msgothic.ttc)</td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Semi bold</th><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Medium</th><td style="text-align:center"></td><td style="text-align:center">HGｺﾞｼｯｸM<br>(hgrgm.ttc)</td><td style="text-align:center">HG丸ｺﾞｼｯｸM-PRO<br>(hgrsmp.ttf)</td></tr>
<tr><th style="text-align:center">Regular</th><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Semi light</th><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><th rowspan="2" style="text-align:center">Light</th><td style="text-align:center">HG 明朝L Sun<br>(HG-MinchoL-Sun.ttc)</td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><td style="text-align:center">ＭＳ 明朝<br>(msmincho.ttc)</td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Extra light</th><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
<tr><th style="text-align:center">Ultra light</th><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td></tr>
</tbody>
</table>

ここで「[ＭＳ 明朝](http://www.tg.rim.or.jp/~hexane/ach/hfw/hfw14.htm#MSMincho)」
「[ＭＳ ゴシック](http://www.tg.rim.or.jp/~hexane/ach/hfw/hfw12.htm#MSGothic)」は
それぞれ [RYOBI IMAGIX](http://www.ryobi-group.co.jp/projects/printing/font/) の
「[本明朝-L](http://www.ryobi-group.co.jp/projects/printing/font/products/f_mihon01.html#minti)」
「[ゴシック-B](http://www.ryobi-group.co.jp/projects/printing/font/products/f_mihon01.html#goshi)」の
字母を基に [RICOH](http://font.ricoh.co.jp/) が作成したものなので，
「ＭＳ 明朝」「ＭＳ ゴシック」を
それぞれ “Light”，“Bold” のウェイトに分類しています。

<!-- $TEXMFLOCAL/fonts/truetype/MS-Mincho.ttf は -->
<!-- "/Library/Fonts/Microsoft/MS Mincho.ttf" への -->
<!-- シンボリックリンクです。"MS Mincho.ttf"，Batang.ttf，Gulim.ttf は -->
<!-- Microsoft Office for Mac 2011 に -->
<!-- 付属しているフォントです。"MS Mincho.ttf"，"MS Gothic.ttf" は -->
<!-- [[Microsoft Office for Mac 2011 30日間無償評価版:http://www.microsoft.com/japan/mac/trial]]から -->
<!-- 入手して使うことができます（情報源は -->
<!-- 「[[ＭＳフォントの合法的な入手が可能です: Apple サポートコミュニティ:https://discussionsjapan.apple.com/thread/10036561]]」）。 -->

#### 游フォントを使う場合 {#t5547d05}

- [https://github.com/norbusan/jfontmaps/tree/master/maps/yu-win/](https://github.com/norbusan/jfontmaps/tree/master/maps/yu-win/)
- [https://github.com/norbusan/jfontmaps/tree/master/maps/yu-osx/](https://github.com/norbusan/jfontmaps/tree/master/maps/yu-osx/)
- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/yu-win/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/yu-win/)
- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/yu-osx/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/yu-osx/)

- TeX Live の場合

> - Windows の場合
>
>     ```
>     ptex2pdf -u -l -od "-f uptex-yu-win.map -f otf-up-yu-win.map" hoge.tex
>     ```
>
> - OS X の場合
>
>     ```
>     ptex2pdf -u -l -od "-f uptex-yu-osx-04.map -f otf-up-yu-osx.map" hoge.tex
>     ```
>

- W32TeX の場合

```
ptex2pdf -u -l -od "-f yu.map" hoge.tex
```

#### [ヒラギノ書体](http://www.jiyu-kobo.co.jp/works/works.html#Anchor-001)を使う場合 {#l6a3d188}

- [https://github.com/norbusan/jfontmaps/tree/master/maps/hiragino/](https://github.com/norbusan/jfontmaps/tree/master/maps/hiragino/)
- [https://github.com/norbusan/jfontmaps/tree/master/maps/hiragino-pron/](https://github.com/norbusan/jfontmaps/tree/master/maps/hiragino-pron/)
- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/hiragino/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/hiragino/)
- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/hiragino-pron/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/hiragino-pron/)

- TeX Live の場合

```
ptex2pdf -u -l -od "-f uptex-hiragino-pron-04.map -f otf-up-hiragino-pron.map" hoge.tex
```

- W32TeX の場合

```
ptex2pdf -u -l -od "-f hiragino04.map" hoge.tex
```

<!-- ただし，[[HiraMinStdN-W2.otf:http://www.screen.co.jp/ga_product/sento/products/pr_CreativeV8.html#anchor_ot01V8]] -->
<!-- は OS X に付属していません。 -->

#### [Adobe のフォント](http://www.adobe.com/jp/type/)（[小塚書体など](http://www.adobe.com/type/browser/C/C_japanese.html?store=OLS-JP&language=JP)）を使う場合 {#v02c074b}

<!-- -https://github.com/norbusan/jfontmaps/tree/master/maps/kozuka/ -->
<!-- -https://github.com/norbusan/jfontmaps/tree/master/maps/kozuka-pr6/ -->
- [https://github.com/norbusan/jfontmaps/tree/master/maps/kozuka-pr6n/](https://github.com/norbusan/jfontmaps/tree/master/maps/kozuka-pr6n/)
    <!-- -http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/kozuka/ -->
    <!-- -http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/kozuka-pr6/ -->

- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/kozuka-pr6n/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/kozuka-pr6n/)

- TeX Live の場合

```
ptex2pdf -u -l -od "-f uptex-kozuka-pr6n-04.map -f otf-up-kozuka-pr6n.map" hoge.tex
```

- W32TeX の場合

```
ptex2pdf -u -l -od "-f kozukapr6n04.map" hoge.tex
```

Microsoft Windows から利用する場合は $TEXMF/fonts/opentype/adobe/ に KozMinPr6N-Regular.otf 等のシンボリックリンク（管理者権限で「コマンド プロンプト」を開き， mklink を実行します。）を作成します（C:/Windows/Fonts/ にある KozMinPr6N-Regular.otf 等の otf ファイルを $TEXMF/fonts/opentype/Adobe/ に直接コピーすることはライセンス上できません）。

#### [モリサワフォント](http://www.morisawa.co.jp/font/)を使う場合 {#n4b1d474}

<!-- -https://github.com/norbusan/jfontmaps/tree/master/maps/morisawa/ -->
- [https://github.com/norbusan/jfontmaps/tree/master/maps/morisawa-pr6n/](https://github.com/norbusan/jfontmaps/tree/master/maps/morisawa-pr6n/)
    <!-- -http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/morisawa/ -->

- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/morisawa-pr6n/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/fonts/map/dvipdfmx/jfontmaps/morisawa-pr6n/)

- TeX Live の場合

```
ptex2pdf -u -l -od "-f uptex-morisawa-pr6n-04.map -f otf-up-morisawa-pr6n.map" hoge.tex
```

- W32TeX の場合

```
ptex2pdf -u -l -od "-f morisawapr6n04.map" hoge.tex
```

Microsoft Windows から利用する場合は $TEXMF/fonts/opentype/morisawa/ に C:/Windows/Fonts/ にある A-OTF-RyuminPr6N-Light.otf 等のシンボリックリンク（管理者権限で「コマンド プロンプト」を開き， mklink を実行します。）を作成します（C:/Windows/Fonts/ にある A-OTF-RyuminPr6N-Light.otf 等の otf ファイルを $TEXMF/fonts/opentype/morisawa/ に直接コピーすることはライセンス上はおろか，プロテクトがかかっているため技術的にもできません）。

### <a id="map-dvips">For dvips</a> {#k1eb9f9c}

$TEXMF/dvips/config/config.ps に OTF パッケージ用の map ファイル
（例えば $TEXMFLOCAL/fonts/map/dvips/local/psfonts-local.map）のファイル名を

```
p  +psfonts-local.map
```

のように追記した上で，
次のような OTF パッケージ用の map ファイル
（ここでは $TEXMFLOCAL/fonts/map/dvips/local/psfonts-local.map）を
$TEXMFLOCAL/fonts/map/dvips// 以下に作成します。

<!-- （または {$TEXMFMAIN,$TEXMFDIST}/fonts/map/dvips/base/psfonts.map を -->
<!-- $TEXMFLOCAL/fonts/map/dvips/base/psfonts.map にコピーした上で， -->
<!-- $TEXMFLOCAL/fonts/map/dvips/base/psfonts.map の最後に -->
<!-- 次のような内容を直接追記しても良いでしょう。） -->
<!--  -->
<!-- psfonts.map ( $TEXMFDIST/fonts/map/dvips/updmap/psfonts.map ) -->
<!-- は、updmap が処理するので、編集しない方がよい。 -->
<!-- もし fonts/map/dvips/base に psfonts.map があったら消去すること。 -->

***

```
rml                  Ryumin-Light-H
rmlv                 Ryumin-Light-V
```

```
gbm              GothicBBB-Medium-H
gbmv             GothicBBB-Medium-V
```

```
%%% OTF package
hminr-h              Ryumin-Light-H
hminr-v              Ryumin-Light-V
otf-ujmr-h           Ryumin-Light-UniJIS-UTF16-H
otf-ujmr-v           Ryumin-Light-UniJIS-UTF16-V
otf-cjmr-h           Ryumin-Light-Identity-H
otf-cjmr-v           Ryumin-Light-Identity-V
```

```
hgothr-h         GothicBBB-Medium-H
hgothr-v         GothicBBB-Medium-V
otf-ujgr-h       GothicBBB-Medium-UniJIS-UTF16-H
otf-ujgr-v       GothicBBB-Medium-UniJIS-UTF16-V
otf-cjgr-h       GothicBBB-Medium-Identity-H
otf-cjgr-v       GothicBBB-Medium-Identity-V
```

```
hminb-h          FutoMinA101-Bold-H
hminb-v          FutoMinA101-Bold-V
otf-ujmb-h       FutoMinA101-Bold-UniJIS-UTF16-H
otf-ujmb-v       FutoMinA101-Bold-UniJIS-UTF16-V
otf-cjmb-h       FutoMinA101-Bold-Identity-H
otf-cjmb-v       FutoMinA101-Bold-Identity-V
```

```
hgothb-h          FutoGoB101-Bold-H
hgothb-v          FutoGoB101-Bold-V
otf-ujgb-h        FutoGoB101-Bold-UniJIS-UTF16-H
otf-ujgb-v        FutoGoB101-Bold-UniJIS-UTF16-V
otf-cjgb-h        FutoGoB101-Bold-Identity-H
otf-cjgb-v        FutoGoB101-Bold-Identity-V
```

```
hmgothr-h            MidashiGo-MB31-H
hmgothr-v            MidashiGo-MB31-V
otf-ujmgr-h          MidashiGo-MB31-UniJIS-UTF16-H
otf-ujmgr-v          MidashiGo-MB31-UniJIS-UTF16-V
otf-cjmgr-h          MidashiGo-MB31-Identity-H
otf-cjmgr-v          MidashiGo-MB31-Identity-V
```

```
hminl-h            HiraMinStdN-W2-H
hminl-v            HiraMinStdN-W2-V
otf-ujml-h         HiraMinStdN-W2-UniJIS-UTF16-H
otf-ujml-v         HiraMinStdN-W2-UniJIS-UTF16-V
otf-cjml-h         HiraMinStdN-W2-Identity-H
otf-cjml-v         HiraMinStdN-W2-Identity-V
```

```
otf-ucmr-h           STSong-Light-UniGB-UTF16-H
otf-ucmr-v           STSong-Light-UniGB-UTF16-V
otf-ccmr-h           STSong-Light-Identity-H
otf-ccmr-v           STSong-Light-Identity-V
```

```
otf-ucgr-h        STHeiti-Regular-UniGB-UTF16-H
otf-ucgr-v        STHeiti-Regular-UniGB-UTF16-V
otf-ccgr-h        STHeiti-Regular-Identity-H
otf-ccgr-v        STHeiti-Regular-Identity-V
```

```
otf-utmr-h            MSung-Light-UniCNS-UTF16-H
otf-utmr-v            MSung-Light-UniCNS-UTF16-V
otf-ctmr-h            MSung-Light-Identity-H
otf-ctmr-v            MSung-Light-Identity-V
```

```
otf-utgr-h            MHei-Medium-UniCNS-UTF16-H
otf-utgr-v            MHei-Medium-UniCNS-UTF16-V
otf-ctgr-h            MHei-Medium-Identity-H
otf-ctgr-v            MHei-Medium-Identity-V
```

```
otf-ukmr-h     HYSMyeongJo-Medium-UniKS-UTF16-H
otf-ukmr-v     HYSMyeongJo-Medium-UniKS-UTF16-V
otf-ckmr-h     HYSMyeongJo-Medium-Identity-H
otf-ckmr-v     HYSMyeongJo-Medium-Identity-V
```

```
otf-ukgr-h        HYGoThic-Medium-UniKS-UTF16-H
otf-ukgr-v        HYGoThic-Medium-UniKS-UTF16-V
otf-ckgr-h        HYGoThic-Medium-Identity-H
otf-ckgr-v        HYGoThic-Medium-Identity-V
```

```
hiramin-w3-h       HiraMinProN-W3-Identity-H
hiramin-w3-v       HiraMinProN-W3-Identity-V
hiramin-w6-h       HiraMinProN-W6-Identity-H
hiramin-w6-v       HiraMinProN-W6-Identity-V
hirakaku-w3-h     HiraKakuProN-W3-Identity-H
hirakaku-w3-v     HiraKakuProN-W3-Identity-V
hirakaku-w6-h     HiraKakuProN-W6-Identity-H
hirakaku-w6-v     HiraKakuProN-W6-Identity-V
hiramaru-w4-h     HiraMaruProN-W4-Identity-H
hiramaru-w4-v     HiraMaruProN-W4-Identity-V
```

***

## 関連リンク {#tcc8e32f}

- [http://www.ctan.org/pkg/japanese-otf](http://www.ctan.org/pkg/japanese-otf)
- [http://www.ctan.org/pkg/japanese-otf-uptex](http://www.ctan.org/pkg/japanese-otf-uptex)
- [http://www.ctan.org/pkg/jfontmaps](http://www.ctan.org/pkg/jfontmaps)
- [upLaTeX + \propshape](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1235)
- [ZXotf パッケージ ～XeTeX でも CID フォントを～ \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/zxotf.html) （ZRさん）
- [日本語フォントのセットアップ](http://www.fugenji.org/~thomas/texlive-guide/font_setup.html) （Tamotsu Thomas UEDA さん）
- [MacPorts の pTeX における和文多書体環境の整えかた](http://miko.org/~tatyana/tech/OSX/pTeX/fonts.html) （たちゃなさん）
- [otf パッケージを使って明朝体太文字を出力する](http://d.hatena.ne.jp/chichimotsu/20120831#1346430178) （chichimotsu さん）
- [pLaTeX2e における和文フォントの扱いと多書体化の話](http://www.geocities.co.jp/texuttex/jfontsettings.html) （ut さん）
- [TeX Live and upTeX](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1148)

[^1]: 「Adobe Creative Suite 5」に同梱ではないものはAdobe-CNS1-5 対応。
