---
title: "LaTeX-CJK"
url: "/LaTeX-CJK/"
date: 2005-12-24T20:57:21Z
pukiwiki: "LaTeX-CJK"
---

# LaTeX-CJK

(a place holder --- not yet completed)

## [The CJK package for LaTeX](http://cjk.ffii.org/) {#ue7194c1}

日本語を処理できる TeX としては、
国内ではアスキー社による日本語 pTeX が広く使われていますが、
TeX コンパイラ・DVI ウェア共に独自拡張を施しています。
このため、ツールによっては dvipng のように日本語に対応してないものがあります。

ここでは、コンパイラ等には手を加えず、
マクロで日中韓文字を処理する CJK LaTeX を紹介します。
漢字等がビットマップになることにさえ我慢できれば(?)、
周辺ツールも含めてオリジナルの TeX 環境がそのまま使えます。
縦書や日本語の禁則処理等は苦手ですが、
UTF8 等を用いて中国韓国文字も処理できます。
海外では、英文中にほんの少し漢字を書きたい場合によく使われているようです。 <!-- CJK LaTeX に詳しくない者が書き加えました。間違ってたらすいません。 -->

CJKパッケージはinputencパッケージなどと同じく、8bitの立った文字のカテゴリー
コードを変更して、多バイト文字のTeXソースを標準的な8bit版のLaTeXでコンパイル
可能にするマクロ集です。当然、pLaTeXでは使用できません。基本的な使い方は

> \usepackage{CJK}
> ...<br>
> \begin{CJK}{encoding}{family}<br>
> ...<br>
> \end{CJK}

です。エンコーディングにはBig5, CNS11643, GB2312, EUC-JP, Shift-JIS, EUC-KR, 
UTF8などさまざまなものが使えます。以下は代表的なものです。

<table>
<tbody>
<tr><td>名前</td><td>ユーザーコード</td><td>TFMエンコーディング</td></tr>
<tr><td>Big5</td><td>Bg5</td><td>c00</td></tr>
<tr><td>GB2312</td><td>GB</td><td>c10</td></tr>
<tr><td>EUC-JP</td><td>JIS</td><td>c40</td></tr>
<tr><td>Shift JIS</td><td>SJIS</td><td>c40</td></tr>
<tr><td>JISX0212(EUC)</td><td>JIS2</td><td>c50</td></tr>
<tr><td>EUC-KR</td><td>KS</td><td>c60</td></tr>
<tr><td>UTF8</td><td>UTF8</td><td>c70</td></tr>
</tbody>
</table>

ユーザーコードはTeXのソースコードのencodingに書き込む文字列、
TFMエンコーディングはfdファイルの作成に必要です。
この説明から見当がつくと思いますが、TeXのソースコードに
様々なエンコーディングが混じっていても、問題なくコンパイルできます。
しかし、編集の手間を考えると、複数のエンコーディングを用いて
原稿を用意する時は別ファイルにしておいて、\inputするのが良いでしょう。
特に、Big5とShift JISは２バイト目に'\\', '{', '}'と言ったLaTeXにとって
特別な意味を持つ文字が使われることがあるので、プリプロセッサーを
かける必要があるため、別ファイルにするメリットが大きいです。

> \begin{CJK}{JIS}{}
> \input{euc-jp-text1}%<br>
> \CJKenc{Bg5}%<br>
> \ifx\VTeXversion\undefined%<br>
> \immediate\write18{bg5conv &lt; big5-text.raw > big5-text.tex}%<br>
> \fi\input{big5-text}%<br>
> \input{euc-jp-text2}<br>
> \end{CJK}

一方、ファミリーはフォントの指定です。
ここを空白にしておくと、デフォルトのsong(宋體)が使われます。
デフォルトを変更するには\CJKfamilyや\CJKencfamilyを使います。
実際にTeXがアクセスするフォントは
NFSSに従い "(TFMエンコーディング)(ファミリー名).fd" で
指定します。つまり、様々なエンコーディングに対して、ファミリーは共通に
songであっても、UTF8の文書はc70song.fdで指定されたcyberbXX.tfmが、
EUC-JPの文書はc40song.fdで指定されたjsso12XX.tfmが、等々のフォントが使われます。

## インストール {#fb6c9457}

### TeX {#a7fe5a5f}

まず、LaTeXが動作する環境が必要です。その他に
[CTAN:languages/japanese/CJK/4_6.0/texinput](https://mirror.ctan.org/languages/japanese/CJK/4_6.0/texinput)
配下のマクロファイルと、更にはTFMファイル(フォントメトリック)がいります。
TFMファイルはTTFフォントがあれば、ttf2tfmで簡単に作成できます。
もし、全角文字しか使わないのであれば、既存のTFMファイルを名前を変えて
コピーすることでもしのげます。
(以下のサンプルに同梱のTFMファイルは事実そのようにして作ったもので、
これを使って、アルファベットの類をタイプセットすると悲惨な結果を招きます。)
自分で作ったTFMファイルを使うにはfdファイルを書く必要もあります。

Shift JISとBig5の原稿を処理するにはプリプロセッサーsjisconv, bg5convも
インストールしなければなりません。

### DVIドライバー {#u7a0009a}

近い将来pdflatexでも正式にCJKパッケージがサポートされる模様ですが、現時点で
CJKパッケージを使って、まともなPDFを作成するにはVTeX(商用)とdvipdfmxだけしか
選択肢がありませんので、ここではdvipdfmxについてのみ扱います。
設定する必要があるのはDVIファイル内のTFMと
PDFファイル内のフォントとの対応だけです。
この対応はcid-x.mapに書きます。(Details will be added later.)

## サンプル {#f920d8cd}

以下のサンプルをコンパイルするには[CTAN:languages/japanese/CJK/4_6.0/texinput](https://mirror.ctan.org/languages/japanese/CJK/4_6.0/texinput)
配下のファイルが必要です。サンプルはインストールして使用することも可能なように
アーカイヴされていますが、インストールせずに試してみるには空の作業用ディレクトリ
(フォルダー)を用意し、すべてのファイルをそこにコピーします。更にサンプル内の
dvipdfm/config/cid-x.map-add.\*を、インストールせずに試してみるにはcid-x.mapに
改名、インストールして使用する場合はその内容をシステムのcid-x.mapに追加します。

1. [UTF8で書かれたTeXファイルでCJKの各漢字字形を使い分ける。](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-UTF8-noembed.tar.bz2)
1. [縦書き](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-localEncoding-vertical.tar.bz2)
1. [Supplementary Ideographic Planeの使用](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-SIP.tar.bz2)このサンプルからPDFファイルを作るには、最新版のdvipdfmxと商用フォントが必要です。[作成済みPDF](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-SIP.pdf)も置いておきます。
