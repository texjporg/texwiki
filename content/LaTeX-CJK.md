---
title: "LaTeX-CJK"
url: "/LaTeX-CJK/"
date: 2005-12-24T20:57:21Z
pukiwiki: "LaTeX-CJK"
---

# LaTeX-CJK

(a place holder&mdash;not yet completed)

(Could someone please translate this page into English?) → [TeX Wiki の英訳](http://jun0inoue.blogspot.fr/2013/05/tex-wiki.html)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## [The CJK package for LaTeX](http://cjk.ffii.org/)/[BXcjkjatype](https://github.com/zr-tex8r/BXcjkjatype) {#ue7194c1}

- [http://www.ctan.org/pkg/cjk](http://www.ctan.org/pkg/cjk)
- [http://www.ctan.org/pkg/bxcjkjatype](http://www.ctan.org/pkg/bxcjkjatype)

CJK パッケージは [pdfLaTeX](/pdfTeX/) で CJK 文書を作成するためのパッケージです．<br>

### ChangeLog {#j34716cd}

- [http://git.savannah.gnu.org/gitweb/?p=cjk.git](http://git.savannah.gnu.org/gitweb/?p=cjk.git)

### インストール {#fb6c9457}

#### TeX Live {#o07a519a}

TeX Live は CJK パッケージ, ipaex-type1, BXjscls &amp; BXcjkjatype が最初からインストールされています．<br>

#### W32TeX {#gb5c8c94}

W32TeX は cjkzr.tar.xz をインストールすれば CJK パッケージ, ipaex-type1, BXjscls &amp; BXcjkjatype が使用できます．<br>

- [和文文書でCJKパッケージを使ってpdflatexを実行](http://myfuturesightforpast.blogspot.jp/2013/10/cjkpdflatex.html)<br>

### 日本語に関するパッケージ {#zd452c87}

ipaex-type1, BXjscls &amp; BXcjkjatype を使用すると [pdfLaTeX](/pdfTeX/) で日本語の文書が作成できます．<br>

#### ipaex-type1 {#i302fdd5}

[ipaex-type1](https://github.com/zr-tex8r/ipaex-type1) を参照．<br>

#### BXjscls &amp; BXcjkjatype {#e32515ef}

[BXjscls](/BXjscls/) &amp; [BXcjkjatype](https://github.com/zr-tex8r/BXcjkjatype) を参照．<br>

#### 使い方 {#u0524a48}

以下の様な文書を作成して UTF-8 で保存します．<br>

***

- neko.tex

***

```
\documentclass[pdflatex,jadriver=standard]{bxjsarticle}
\begin{document}

吾輩は猫である。名前はまだ無い。

どこで生れたかとんと見当がつかぬ。
何でも薄暗いじめじめした所で
ニャーニャー泣いていた事だけは記憶している。
吾輩はここで始めて人間というものを見た。

\end{document}
```

***

pdfLaTeX を実行します．<br>

```
pdflatex neko.tex
```

! Package keyval Error: pdflatex undefined. のエラーが発生する場合は BXjscls を最新版にアップデートします．<br>

KOMA-Script classes と組み合わせて使用する場合は以下のようにします．<br>

***

```
\documentclass{scrartcl}
\usepackage[whole]{bxcjkjatype}
\begin{document}

吾輩は猫である。名前はまだ無い。

どこで生れたかとんと見当がつかぬ。
何でも薄暗いじめじめした所で
ニャーニャー泣いていた事だけは記憶している。
吾輩はここで始めて人間というものを見た。

\end{document}
```

***

## CJK パッケージの詳細 {#k191ae10}

### はじめに {#ebc72ee3}

日本語を処理できる TeX としては、
国内では日本語 (e-)pTeX が広く使われていますが、
TeX コンパイラ・DVI ウェア共に独自拡張を施しています。<br>
このため、[dvipng](/dvipng/) のように (e-)pTeX に対応してないツールがあります。<br>

ここでは、コンパイラ等には手を加えず、
マクロで日中韓文字を処理する CJK パッケージを紹介します。<br> <!-- 漢字等がビットマップになることにさえ我慢できれば（？）、 -->
周辺ツールも含めてオリジナルの TeX 環境がそのまま使えます。<br>
縦書や日本語の禁則処理等は苦手ですが、 <!-- 日本語の禁則処理をしていない訳ではありません。~ --> <!-- pTeXと比べて、組版の仕上がりが見劣りするのは和文(中文)と欧文の境界に --> <!-- グルーが入らない事が原因であるように感じます。~ --> <!-- 境界に[space]を入れて誤魔化すのを忘れると、まあ、ひどい仕上がりになります。 -->
UTF-8 等を用いて中国韓国文字も処理できます。<br>
海外では、pdfLaTeX で英文中にほんの少し漢字を書きたい場合によく使われているようです。<br> <!-- CJK LaTeX に詳しくない者が書き加えました。~ --> <!-- 間違ってたらすいません。~ --> <!-- CJK は主に台湾で使われています。~ -->

CJK パッケージは inputenc パッケージなどと同じく、
8-bit目（最上位bit）の立った文字のカテゴリー
コードを変更して、多バイト文字の
LaTeX ソースを標準的な8-bit版の
pdfLaTeX でコンパイル可能にするマクロ集です。<br>
当然、8-bit目（最上位bit）の立った文字が
マクロとして処理される前に
多バイト文字として、コンパイラに解釈されてしまう拡張が施された
pLaTeX では使用できません。<br>
基本的な使い方は

> \usepackage{CJK}
> ...<br>
> \begin{CJK}{encoding}{family}<br>
> ...<br>
> \end{CJK}

<!-- 要説明 CJKutf8.sty -->

です。<br>
エンコーディングには UTF-8, EUC-JP, Shift_JIS, GB2312, Big5, EUC-KR, x-EUC-TW (CNS 11643)
などさまざまなものが使えます。<br>
以下は代表的なものです。<br>

<table>
<thead>
<tr><th style="text-align:center">名前</th><th style="text-align:center">ユーザーコード</th><th style="text-align:center">TFM エンコーディング</th></tr>
</thead>
<tbody>
<tr><td>Big5</td><td>Bg5</td><td>c00</td></tr>
<tr><td>GB2312</td><td>GB</td><td>c10</td></tr>
<tr><td>EUC-JP</td><td>JIS</td><td>c40</td></tr>
<tr><td>Shift_JIS</td><td>SJIS</td><td>c40</td></tr>
<tr><td>JIS X 0212 (EUC-JP)</td><td>JIS2</td><td>c50</td></tr>
<tr><td>EUC-KR</td><td>KS</td><td>c60</td></tr>
<tr><td>UTF-8</td><td>UTF8</td><td>c70</td></tr>
</tbody>
</table>

ユーザーコードは LaTeX のソースコードの encoding に書き込む文字列、
TFM エンコーディングは fd ファイルの作成に必要です。<br>
この説明から見当がつくと思いますが、LaTeX のソースコードに
様々なエンコーディングが混じっていても、問題なくコンパイルできます。<br>
しかし、編集の手間を考えると、複数のエンコーディングを用いて
原稿を用意する時は別ファイルにしておいて、\input するのが良いでしょう。<br>
特に、Big5 と Shift_JIS は2バイト目に “\”, “{”, “}” と言った LaTeX にとって
特別な意味を持つ文字が使われることがあるので、プリプロセッサーを
かける必要があるため、別ファイルにするメリットが大きいです。<br>

```
\begin{CJK}{JIS}{}
\input{euc-jp-text1}%
\CJKenc{Bg5}%
\ifx\VTeXversion\undefined%
\immediate\write18{bg5conv < big5-text.raw > big5-text.tex}%
\fi\input{big5-text}%
\input{euc-jp-text2}
\end{CJK}
```

一方、ファミリーはフォントの指定です。<br>
ここを空白にしておくと、デフォルトの song （宋體）が使われます。<br>
デフォルトを変更するには \CJKfamily や \CJKencfamily を使います。<br>
実際に TeX がアクセスするフォントは
NFSS に従い "(TFM エンコーディング)(ファミリー名).fd" で
指定します。<br>
つまり、様々なエンコーディングに対して、ファミリーは共通に
song であっても、UTF-8 の文書は c70song.fd で指定された cyberbXX.tfm が、
EUC-JP の文書は c40song.fd で指定された jsso12XX.tfm が、等々のフォントが使われます。<br>

### 拡張パッケージ {#xec38b47}

CJK パッケージの配布には、様々な拡張とそのサンプルが同梱されています。<br>
そのうち、最も重要と思われる CJKutf8 について説明します。<br>
中国語と日本語（そして、いくらかは韓国語［&#xd55c;&#xad6d;&#xc5b4;］も）は禁則対象の文字の前後を除き、
どこでも改行できると言う、他の言語にはなかなか見出しがたい、
特徴的な組版規則を持っています。<br>
CJK パッケージでは TeX 上にそのような
規則を実現するための実装がなされているため、CJK 環境内で、それ以外の言語を
使用すると、望ましからぬ組版処理が行われてしまいます。<br>
丁度、pTeX でも、全角の英数字を使って、英文を書いたのでは、正しいハイフネーションが
行われないのと同じ事です。<br>
そこで CJK と他の言語を併用するには、他の言語の部分を CJK 環境の
外部に書かなければなりません。<br>
更に、TeX のハイフネーションや
カーニング、リガチャーはフォントエンコーディングに依存しているため、
正しいフォントエンコーディングが CJK 環境外部ではロードされるように
しなければなりません。<br>
そのような問題を解決してくれるのが、CJKutf8 パッケージです。<br>
仕組みを説明するために、まず、inputenc パッケージについて解説します。<br>

#### inputenc パッケージ {#wd55a638}

LaTeX2e と LaTeX2.09 の大きな違いは、NFSS2 の採用です。<br>
それに伴い、使用するフォントエンコーディングは、その他のフォントの属性とは独立に
ユーザーが指定するものとなりました。<br>
同時に、ソースファイルの記述に使う
エンコーディングも、ユーザーが指定するものとなりました。<br>
その結果、LaTeX2e の作法に則った最小の TeX ソースは
（実際には fontenc のオプション指定は babel 等の他のパッケージを用いて、
間接に行う方が便利でしょうけれども、）

> \documentclass{...}
> \usepackage\[...\]{fontenc}<br>
> \usepackage\[...\]{inputenc}<br>
> \begin{document}<br>
> ...<br>
> \end{document}

となります。<br>
過去のバージョンである LaTeX2.09 との互換性から、もし fontenc を指定しなければ、
テキストでは OT1 が使用され、もし inputenc を指定しなければ、
ソースファイルのエンコーディングは、フォントエンコーディングと同じものが、
使用されます。<br>
もし、それが自分の用途に適うものであったとしても、これらの
パッケージをロードしない事が、LaTeX2e の作法に則ったソースの書き方とは
言えないでしょう。<br>

ところで、inputenc.sty が実際に行っている事は、8-bit目（最上位bit）の立った文字を
アクティブにし、ソースコード中でこれらの文字を使用しようとするとエラーを
発効するだけに過ぎません。<br>
もし、8-bit目（最上位bit）の立った文字を
ソースコード中で使用したいのならば、アクティブにされた文字をマクロとして
再定義して、適切なフォントエンコーディング中の、適切な文字コードに
対応させてやる必要があります。<br>
inputenc に与える、オプションは、そう言った
再定義の記載されたファイルです。<br>
2004年2月9日以降の LaTeX2e では、inputenc パッケージは UTF8 オプションが使用可能です。<br>

```
\usepackage[UTF8]{inputenc}
```

しかし、このように、プリアンブルに書いたからと言って、すべての UTF-8 で
エンコードされた文字がソースコード中で使える訳ではありません。<br>
実は inputenc パッケージの UTF8 オプションは、本文が始まるまでにプリアンブルで
ロードされたすべてのフォントエンコーディングを走査し、各エンコーディング XXX
に対し、XXXenc.dfu を読み込み、そこで定義された UTF-8 文字の再定義のみを
有効にするだけです。<br>
それ以外の文字を使用しようとすると、処理不可能のエラーがでます。

現在、標準的に配布されている dfu ファイルは

> lcyenc.dfu
> ly1enc.dfu<br>
> omsenc.dfu<br>
> ot1enc.dfu<br>
> ot2enc.dfu<br>
> t1enc.dfu<br>
> t2aenc.dfu<br>
> t2benc.dfu<br>
> t2cenc.dfu<br>
> ts1enc.dfu<br>
> x2enc.dfu

です。<br>
utf8enc.dfu はこれらの内容を一覧にしたファイルです。<br>
これらに対応するフォントエンコーディングで記述できる言語に関しては、
ソースファイルに UTF-8 を使っても、それ以外のエンコーディングを使った時と
全く同じにハイフネーション、カーニング、リガチャーは処理され、
同じ仕上りにタイプセットされます。<br>

何もパッケージを追加しない LaTeX 標準での、ユニコードサポートに関する
現在の状況をまとめると、

- LaTeX は UTF-8 エンコーディングによる、ソースコードの表記を
    （BMP に限らず）完全にサポートしている。

- 次の条件を満たす言語のタイプセットに関しては、ソースコードに
    UTF-8 エンコーディングを使う限り、当該言語を記述するのに適切な
    フォントエンコーディングと dfu ファイルを
    用意すれば、原則的に可能である。
    - 行は一定の水平方向に並べられる文字 (glyphaeme) で構成され、
        行は、上から下に向かい、垂直に並べられる。
    - 各行には充分なだけな数の可変な幅を持つ空白（またはそれに類する文字）
        が含まれ、それらの空白（またはそれに類する文字）の箇所で
        改行が可能である。

#### CJKutf8 パッケージ {#r2eca9d6}

このパッケージは内部的には複雑な事をやっていますが、提供する機能は単純です。<br>
要するに、裏で inputenc パッケージを読み込み、CJK 環境では
まず inputenc で処理を試み、処理できない文字が
出て来たら、CJK 環境として処理を試みる。<br>
ただそれだけです。<br>

```
\documentclass{article}
\usepackage[T1]{CJKutf8} % フォントエンコーディングをオプションで指定しても良い。

\begin{document}
\begin{CJK}{UTF8}{min}
UTF-8で何か文章を書く。babel等でハイフネーションの言語を指定すれば、正しく組版される。
\end{CJK}
\end{document}
```

### 動作環境 {#a7fe5a5f}

まず、LaTeX が動作する環境が必要です。<br>
その他に
[CTAN:languages/japanese/CJK/](https://mirror.ctan.org/languages/japanese/CJK/) 
にある配下のマクロファイル（cjk-4.x.x/という名前のディレクトリ。zipやtarballで圧縮されている場合もあり）と、更には TFM ファイル（フォントメトリック）が必要です。<br>
CJK にデフォルトで付属するフォントの設定は dvips や pdflatex での使用も
可能なようになっているので、dvipdfmx で使うには最適なものではありません。<br>
ここではカスタムなフォント定義を行なう方法を説明します。<br>
さて、pTeX や Aleph のように独自の拡張を施していない TeX が使用する TFM には、
ファイル一つにつき、一応、最大256の文字グリフに関する情報しか収納できません。<br>
もちろん、これでは、漢字などは扱えないので、CJK では本来一つのフォントを
裏側では複数のサブフォントに分割して取り扱っています。<br>
何やら恐ろしげですが、実際は
TFM ファイルは TTF フォントがあれば、ttf2tfm で簡単に作成できます。<br>

> ttf2tfm \[TTF名\] \[TFM 名ステム\]@\[SFD 名\]@

TTC ファイルならば、-f オプションでどのフェイスを使用するのか指定もできます。<br>
ここで、\[TFM 名ステム\]とは、前節での cyberbXX.tfm ならば cyberb、
jsso12XX.tfm ならば jsso12 のことです。<br>
そして、\[SFD 名\]がサブフォントへの分割方法を決めるものです。<br>
どの SFD を使うかは、TTF フォントの持つ CMap のエンコーディングと
TeX のソースコードのエンコーディングで決まりますが、
最近の TTF フォントならば、“U” で始まる\[SFD 名\]を使えば良いでしょう。<br>
もし、全角文字しか使わないのであれば、既存の TFM ファイルを名前を変えて
コピーすることでもしのげます。
（以下のサンプルに同梱の TFM ファイルは事実そのようにして作ったもので、
これを使って、アルファベットの類をタイプセットすると悲惨な結果を招きます。）<br>
自分で作った TFM ファイルを使うには fd ファイルを書く必要もあります。<br>
例えば、EUC-JP/Shift_JIS で書かれた原稿を処理するために foo をステムに持つ
TFM ファイルを作って、TeX ファイルでは bar と言うファミリー名で
ユニコードの CMap を持った baz.ttf フォントのデザインを使いたいならば、

```
ttf2tfm baz foo@UJIS@
```

で、まず、foo01.tfm&ndash;foo35.tfm を作ります。<br>
それから
c40bar.fd を作らなければなりませんが、その最低限の内容は

```
\DeclareFontFamily{C40}{bar}{}
\DeclareFontShape{C40}{bar}{m}{n}{<-> CJK * foo}{}
```

です。<br>
テキストエディタで作成してください。<br>
こうしてできたファイルを
LaTeX が見つけられるようにしてやれば、無事に LaTeX のコンパイルは通る筈です。<br>

```
\documentclasss{article}
\usepackage{CJK}

\begin{document}
\begin{CJK}{JIS}{bar}
ここにEUC-JPで日本語の文章を書きます。
\end{CJK}
\begin{CJK}{SJIS}{bar}
ここにShift_JISで日本語の文章を書きます。%
しかし、もしかすると、このブロックだけ%
プリプロセッサーを通さないと%
\LaTeX のコンパイルが通らないかも知れません。
\end{CJK}
\end{document}
```

Shift_JIS と Big5 の原稿を処理するにはプリプロセッサー sjisconv, bg5conv も
インストールしなければなりません。<br>

### DVI ドライバー {#u7a0009a}

現在の pdflatex は CJK パッケージが使用できます．<br>
pdflatex 以外で
CJK パッケージを使って、まともな PDF を作成するには dvipdfmx と VTeX （商用）の選択肢があります．<br>
ここでは dvipdfmx についてのみ扱います。

> ここで、dvips や旧バージョンの pdflatex の生成する PDF がまともでないと
> 言う意味はこれらの DVI ドライバーでは TFM の分割に従って、PDF が使用する
> 実フォントも分割したフォント (Type 1, PK) にしなければならないからです。

設定する必要があるのは DVI ファイル内の TFM と
PDF ファイル内のフォントとの対応だけです。

> 背景を説明しておくと、DVI ファイルには文字の形に関する情報は
> 何も入っていません。<br>
> 大きさと位置、そして、それがどの TFM に由来するか
> の情報だけしか入っていません。<br>
> DVI ドライバーの仕事はその大きさと位置に
> フォントから取得した文字の形に関する情報を当てはめていくことにあります。<br>
> 従って、TFM とフォントとの対応が必要になってくる訳です。<br>
> この対応が与えられていない場合、大抵の DVI ドライバーはビットマップフォントを
> 生成して、それを利用しようとします。<br>
> 現在の pTeX の場合、ここでビットマップフォントの生成に失敗してエラーで
> 止まってしまうので、誰でもインストールの失敗に気がつきます。<br>
> ところが CJK パッケージをフルインストールしているとデフォルトの
> フォントに対してはビットマップフォントの生成に成功してしまうため、
> インストールの失敗に気がつかずに、使い続けてしまうケースが多いようです。<br>
> 以下のサンプルではいずれも新たなフォント (TFM) を定義して使っていますので、
> 実フォントの対応についても方法を例示しています。<br>

dvipdfmx で TFM と PDF ファイル内のフォントとの対応を指定するファイル (map file) は
多数ありますが、その大部分は dvipdfm と共有なので、dvipdfm でも理解できる
8-bit フォントしか扱えません。<br>
そこで、この対応は dvipdfmx 専用のマップファイルである
cid-x.map に書きます。(Details will be added later.)<br>

#### 実在しない OpenType (CFF, CID-keyed) フォントの場合 {#ef120abe}

dvipdfmx は以下のフォントを「知って」います。

<table>
<thead>
<tr><th style="text-align:center">言語</th><th style="text-align:center">文字集合</th><th style="text-align:center">フォント名</th></tr>
</thead>
<tbody>
<tr><th rowspan="8" style="text-align:center">日本語</th><td rowspan="4">Adobe-Japan1</td><td>Ryumin-Light</td></tr>
<tr><td>GothicBBB-Medium</td></tr>
<tr><td>HeiseiMin-W3</td></tr>
<tr><td>HeiseiKakuGo-W5</td></tr>
<tr><td rowspan="2">Adobe-Japan1-2</td><td>HeiseiMin-W3-Acro</td></tr>
<tr><td>HeiseiKakuGo-W5-Acro</td></tr>
<tr><td rowspan="2">Adobe-Japan1-4</td><td>KozMinPro-Regular-Acro</td></tr>
<tr><td>KozGoPro-Medium-Acro</td></tr>
<tr><th rowspan="3" style="text-align:center">簡体中文<br>（簡化字中文）</th><td>Adobe-GB1</td><td>STSong-Light</td></tr>
<tr><td>Adobe-GB1-2</td><td>STSong-Light-Acro</td></tr>
<tr><td>Adobe-GB1-4</td><td>AdobeSongStd-Light-Acro</td></tr>
<tr><th rowspan="5" style="text-align:center">繁體中文<br>（正體中文）</th><td rowspan="2">Adobe-CNS1</td><td>MSung-Light</td></tr>
<tr><td>MHei-Medium</td></tr>
<tr><td rowspan="2">Adobe-CNS1-0</td><td>MSung-Light-Acro</td></tr>
<tr><td>MHei-Medium-Acro</td></tr>
<tr><td>Adobe-CNS1-4</td><td>AdobeMingStd-Light-Acro</td></tr>
<tr><th rowspan="5" style="text-align:center">韓国語<br>（&#xd55c;&#xad6d;&#xc5b4;）</th><td rowspan="2">Adobe-Korea1</td><td>HYSMyeongJo-Medium</td></tr>
<tr><td>HYGoThic-Medium</td></tr>
<tr><td rowspan="2">Adobe-Korea1-0</td><td>HYSMyeongJo-Medium-Acro</td></tr>
<tr><td>HYGoThic-Medium-Acro</td></tr>
<tr><td>Adobe-Korea1-2</td><td>AdobeMyungjoStd-Medium-Acro</td></tr>
</tbody>
</table>

<!-- 「知って」いるフォントのうち，中韓の Adobe... のフォントは，Adobe が付かない部分だけでは ? -->
<!-- 2003年11月25日以降のバージョンでは、これで正しい筈です。 -->
<!-- // http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/cid_basefont.h を見て確認しました (m__m) -->

そこで、これらのフォント名を cid-x.map のエントリー

> \[TFM 名ステム\]@\[SFD 名\]@ \[CMap 名\] \[フォントファイル名\]

で指定すると、それらのフォントが dvipdfmx の検索パスに存在しなくても、
フォントが埋め込まれていない PDF ファイルができあがります。<br>
ただし、\[CMap 名\]は SFD を適用した結果のエンコーディングから
上の表の文字集合に記された CID の並び順への対応表です。<br>
\[SFD 名\]には普通 TFM を作成する時に ttf2tfm の引数として指定したのと
同じものを使います。<br>
しかし、次のようなこともできます。<br>

```
jsso12@UJIS@ UniJIS-UCS2-H HeiseiMin-W3-Acro
```

これは単純に jsso12XX.tfm のエンコーディングを集めてユニコードに復元し、
Adobe-Japan1 のグリフに標準的に対応させます。<br>

```
jsso12@SJIS@ RKSJ-H HeiseiMin-W3-Acro
```

これも単純ですが、jsso12XX.tfm のエンコーディングを集めて Shift_JIS に復元し、
Adobe-Japan1 のグリフに標準的に対応させます。<br>

```
jsso12@SJIS@ 90ms-RKSJ-H HeiseiMin-W3-Acro
```

これも Shift_JIS を経由しますが、 Windows-31J （Microsoft Windows 標準日本語文字セット）の対応を使用します。<br>
一部、上とは微妙に違う字形が使われます。<br>

```
jsso12@SJIS@ 78-RKSJ-H HeiseiMin-W3-Acro
```

これは表外漢字の新字体、旧字体が入れ替わったりしている
JIS C 6226-1978 (JIS X 0208:1978) での例示字形が使われます。<br>

フォントを埋め込んでいない PDF では表示、印刷環境により、異なる代替フォントが
使われることがあります。<br>

#### 実在する OpenType (CFF, CID-keyed) フォントの場合 {#zc736617}

上と殆ど同じですが、\[フォントファイル名\]には dvipdfmx の検索パスに存在する
フォントを指定しなければなりません。<br>
デフォルトではフォントが埋め込まれますが、\[フォントファイル名\]の先頭に
“!” を付けると、埋め込まれなくなります。<br>
また、\[フォントファイル名\]の後に “,Bold”、“,Italic”、または “,BoldItalic” を
付けた場合もフォントは埋め込まれません。<br>
これらは、フォントを PDF ヴューアーが機械的に太らせたり、ひしゃげさせたりして、
表示することを指示します。<br>

#### TrueType フォントによる OpenType (CFF, CID-keyed) 偽装 {#odc3338f}

TTF フォントでは、内部的なグリフの並び順に何の決まりもありません。<br>
従って、フォントファイル内のグリフにアクセスするにはフォントファイルが持つ、
CMap テーブルが使われますが、\[CMap 名\]に指定された CMap ファイルの文字集合が
Adobe の標準文字集合の時は、標準的なユニコードからの対応により、
TrueType フォントを CID フォントとして、埋め込む事ができます。<br>
但し、ユニコードの割り振られていないグリフなどは元々 TTF フォントには
存在しない場合が多いですし、たとえ存在してもアクセスできません。<br>
\[CMap 名\]に指定された CMap ファイルの文字集合が Adobe の標準文字集合と異なっていても、
TTF フォント名の後ろに “/AJ14” 等と付けてやれば、Adobe-Japan1 の supplement 4 を
偽装できます。<br>
TrueType フォントを埋め込まずに使用する場合、原則として、この方法を使って下さい。<br>

#### TrueType フォントの場合 {#q2b385eb}

CMap テーブルを使用して TTF フォントにアクセスするには、cid-x.map のエントリー

> \[TFM 名ステム\]@\[SFD 名\]@ unicode \[フォントファイル名\] \[オプション\]

を使います。ここで SFD は TFM のエンコーディングをユニコードに対応させる、
“U” で始まるものでなければなりません。

> ```
> -w オプション
> ```
>
> TrueType フォントを縦書きフォントとして使う時に使います。
>
> ```
> -w 0
> ```
>
> 横書き（デフォルト）
>
> ```
> -w 1
> ```
>
> 縦書き

> ```
> -p オプション
> ```
>
> Unicode の BMP (Basic Multilingual Plane) に入っていないコードポイントを持つ文字に
> アクセスするために使用します。
>
> ```
> -p 0
> ```
>
> BMP の文字にアクセスします。（デフォルト）<br>
> つまり、0x0000&ndash;0xFFFF のコードポイントに同じコードポイントを持つ文字を対応させます。
>
> ```
> -p 1
> ```
>
> SMP (Supplementary Multilingual Plane) の文字にアクセスします。<br>
> TeX で必要なのは、主に、古代文字です。<br>
> 0x0000&ndash;0xFFFF のコードポイントに 0x10000 平行移動した
> 0x10000&ndash;0x1FFFF のコードポイントを持つ文字を対応させます。<br>
>
> ```
> -p 2
> ```
>
> SIP (Supplementary Ideographic Plane) の文字にアクセスします。<br>
> これは BMP に収まり切れなかった漢字です。<br>
> 0x0000&ndash;0xFFFF のコードポイントに 0x20000 平行移動した
> 0x20000&ndash;0x2FFFF のコードポイントを持つ文字を対応させます。<br>

何等かの事情で TTF フォントのグリフに、CMap を経由せず、
その並び順で直接アクセスするには、
文字集合として、Adobe-Identity を持つ CMap ファイルを使用します。<br>
しかし、この CMap ファイルの名前は “Identity-H” または “Identity-V” であってはいけません。<br>

## サンプル {#f920d8cd}

以下のサンプルをコンパイルするには [CTAN:languages/japanese/CJK/](https://mirror.ctan.org/languages/japanese/CJK/)
配下のファイルが必要です。<br>
サンプルはインストールして使用することも可能なように
アーカイヴされていますが、インストールせずに試してみるには空の作業用ディレクトリ
（フォルダー）を用意し、すべてのファイルをそこにコピーします。<br>
更にサンプル内の
dvipdfm/config/cid-x.map-add.\* をインストールせずに試してみるには cid-x.map に
改名、インストールして使用する場合はその内容をシステムの cid-x.map に追加します。<br>

1. [UTF-8 で書かれた TeX ファイルで CJK の各漢字字形を使い分ける。](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-UTF8-noembed.tar.bz2)
    - これまでに判明している問題点:
        - 各ページ、最下段を除いて意味不明な箇所がある。視点を変えて、少し距離をおいて眺める必要があるかも知れない。
1. [縦書き](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-localEncoding-vertical.tar.bz2) JIS X 0213 を Shift_JIS で使うために必要な設定も一式入っています。
    - これまでに判明している問題点:
        - 同梱された TFM ファイルは全角文字以外に使えない。
        - 横書きフォントを縦書きに使う場合の fdx ファイルが無いため、CJKvert.sty を使った縦書きでは句読点の位置がおかしい（縦書きフォントを使う場合は問題ないと思います）。
1. [Supplementary Ideographic Plane の使用](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-SIP.tar.bz2)このサンプルから PDF ファイルを作るのには、
    dvipdfmx-20070409 以降が必要です。更に商用フォントも使いました。
    そこで、[作成済み PDF](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-SIP.pdf) も置いておきます。
    - これまでに判明している問題点:
        - dvipdfmx-20070409 よりも前の dvipdfmx には fontmap.c に不具合がある ([qa:40437](https://okumuralab.org/~okumura/texfaq/qa/40437.html))。（cvs 版 Fri Jan 19 10:57:22 2007 UTC, [svn 版 Sun Jan 21 11:58:36 2007 UTC](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/fontmap.c?r1=3658&r2=2220), リリース版 dvipdfmx-20070409 で修正されています。）
        - c70usong.fd に二つのフォントが定義されている。これは c70usong.fd と c70usong2.fd
            の二つのファイルに分けないと、SIP の文字を文書の最初に使えない。
        - 商用フォントを使う設定になっている。これは、cid-x.map を書き換えて、[HAN NOM FONTs](http://vietunicode.sourceforge.net/fonts/fonts_hannom.html) を使う設定に直した方がいい。（それにしても、Han Nom のデザインは SimSun に似ている。）
        - 手持ちの材料で、適当にでっちあげたサンプルの文書には、その後、簡単な
            Web 検索しただけで、明らかな誤り2箇所と、幾多の要改善箇所が見つかっている。
        - CJK 4.6.0 では、プリアンブルにこのサンプルにあるような
            コードを加えないと BMP 以外の文字は扱えないが、ユニコードをフルサポートした
            開発版の CJK パッケージとはこのコードは衝突してしまう。
            <!-- +CJKutf8.styについては[[Cardo:http://scholarsfonts.net/]]1.01がリリースされてから -->
            <!-- 考えます。文例と、当該言語のハイフネーションパターンを提供して頂けると助かります。 -->
            <!-- SMPも使ってみたい。 -->
            <!-- SMPをサポートしたTTFファイルは、大抵の場合、欧文用のフォントに準じて -->
            <!-- 作成されており、各グリフがpsnameを持っています。 -->
            <!-- 従って、たとい、文字コードがBMPに入っていなくても、 ttf2afmとafm2tfm -->
            <!-- を併用すれば、TFMを作成できます。あとは、ここの説明を応用すれば、使えるはずです。 -->

他にどのようなサンプルを作れば分かり易いか、アイデアをお寄せ下さい。
もちろん、新たなサンプルの提供と、（全体の）文章の修正も歓迎します。

## 関連リンク {#nae3b659}

- [「&quot;CJK パッケージ&quot;」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=%22CJK+%A5%D1%A5%C3%A5%B1%A1%BC%A5%B8%22), [「ipaex-type1」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=ipaex-type1), [「bxcjkjatype」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=bxcjkjatype)
- [CJK-LaTeX : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/CJK-LaTeX), [LaTeX-CJK : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/LaTeX-CJK), [ipaex-type1 を含む記事 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/search?q=ipaex-type1), [bxcjkjatype : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/bxcjkjatype)
- [My Future Sight for Past: cjk](http://myfuturesightforpast.blogspot.jp/search/label/cjk)
- [Ubuntu で pLaTeX を使わずに日本語を書く](http://jun0inoue.blogspot.jp/2013/05/ubuntu-platex.html)
- [CJK，Unicode パッケージ，ロシア語多書体の利用](http://yasuda.homeip.net/tex/cjk.html)
