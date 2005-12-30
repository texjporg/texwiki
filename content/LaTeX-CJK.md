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
海外では、英文中にほんの少し漢字を書きたい場合によく使われているようです。 <!-- CJK LaTeX に詳しくない者が書き加えました。間違ってたらすいません。 --> <!-- CJK は主に台湾で使われています。 -->

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
さて、pTeXやOmegaのように独自の拡張を施していないTeXが使用するTFMには、
ファイル一つにつき、一応、最大256の文字グリフに関する情報しか収納できません。
もちろん、これでは、漢字などは扱えないので、CJKでは本来一つのフォントを
裏側では複数のサブフォントに分割して取り扱っています。
何やら恐ろしげですが、実際は
TFMファイルはTTFフォントがあれば、ttf2tfmで簡単に作成できます。

> ttf2tfm \[TTF名\] \[TFM名ステム\]@\[SFD名\]@

TTCファイルならば、-fオプションでどのフェイスを使用するのか指定もできます。
ここで、\[TFM名ステム\]とは、前節でのcyberbXX.tfmならばcyberb、
jsso12XX.tfmならばjsso12のことです。
そして、\[SFD名\]がサブフォントへの分割方法を決めるものです。
どのSFDを使うかは、TTFフォントの持つcmapのエンコーディングと
TeXのソースコードのエンコーディングで決まりますが、
最近のTTFフォントならば、'U'で始まる\[SFD名\]を使えば良いでしょう。
もし、全角文字しか使わないのであれば、既存のTFMファイルを名前を変えて
コピーすることでもしのげます。
(以下のサンプルに同梱のTFMファイルは事実そのようにして作ったもので、
これを使って、アルファベットの類をタイプセットすると悲惨な結果を招きます。)
自分で作ったTFMファイルを使うにはfdファイルを書く必要もあります。
例えば、EUC-JP/Shift-JISで書かれた原稿を処理するためにfooをステムに持つ
TFMファイルを作って、TeXファイルではbarと言うファミリー名で
使いたいならば、c40bar.fdを作らなければなりませんが、その最低限の内容は

> \DeclareFontFamily{C40}{bar}{}
> \DeclareFontShape{C40}{bar}{m}{n}{&lt;-> CJK \* foo}{}

です。

Shift JISとBig5の原稿を処理するにはプリプロセッサーsjisconv, bg5convも
インストールしなければなりません。

### DVIドライバー {#u7a0009a}

近い将来pdflatexでも正式にCJKパッケージがサポートされる模様ですが、現時点で
CJKパッケージを使って、まともなPDFを作成するにはVTeX(商用)とdvipdfmxだけしか
選択肢がありませんので、ここではdvipdfmxについてのみ扱います。
設定する必要があるのはDVIファイル内のTFMと
PDFファイル内のフォントとの対応だけです。

> 背景を説明しておくと、DVIファイルには文字の形に関する情報は
> 何も入っていません。大きさと位置、そして、それがどのTFMに由来するか
> の情報だけしか入っていません。DVIドライバーの仕事はその大きさと位置に
> フォントから取得した文字の形に関する情報を当てはめていくことにあります。
> 従って、TFMとフォントとの対応が必要になってくる訳です。
> この対応が与えられていない場合、大抵のDVIドライバーはビットマップフォントを
> 生成して、それを利用しようとします。
> 現在のpTeXの場合、ここでビットマップフォントの生成に失敗してエラーで
> 止まってしまうので、誰でもインストールの失敗に気がつきます。
> ところが、CJKパッケージをフルインストールしているとデフォルトの
> フォントに対してはビットマップフォントの生成に成功してしまうため、
> インストールの失敗に気がつかずに、使い続けてしまうケースが多いようです。
> 以下のサンプルではいずれも新たなフォント(TFM)を定義して使っていますので、
> 実フォントの対応についても方法を例示しています。

dvipdfmxでTFMとPDFファイル内のフォントとの対応を指定するファイル(map file)は
多数ありますが、その大部分はdvipdfmと共有なので、dvipdfmでも理解できる
8-bitフォントしか扱えません。そこで、この対応はdvipdfmx専用のマップファイルである
cid-x.mapに書きます。(Details will be added later.)

#### 実在しないOpenType(CFF, CID-keyed)フォントの場合 {#ef120abe}

dvipdfmxは以下のフォントを「知って」います。

<table>
<tbody>
<tr><td>言語</td><td>文字集合</td><td>フォント名</td></tr>
<tr><td rowspan="3">繁体中文</td><td rowspan="3">Adobe-CNS1</td><td>MHei-Medium-Acro</td></tr>
<tr><td>MSung-Light-Acro</td></tr>
<tr><td>AdobeMingStd-Light-Acro</td></tr>
<tr><td rowspan="2">簡化字中文</td><td rowspan="2">Adobe-GB1</td><td>STSong-Light-Acro</td></tr>
<tr><td>AdobeSongStd-Light-Acro</td></tr>
<tr><td rowspan="6">日本語</td><td rowspan="6">Adobe-Japan1</td><td>HeiseiMin-W3-Acro</td></tr>
<tr><td>HeiseiKakuGo-W5-Acro</td></tr>
<tr><td>Ryumin-Light</td></tr>
<tr><td>GothicBBB-Medium</td></tr>
<tr><td>KozMinPro-Regular-Acro</td></tr>
<tr><td>KozGoPro-Medium-Acro</td></tr>
<tr><td rowspan="3">朝鮮語</td><td rowspan="3">Adobe-Korea1</td><td>HYGoThic-Medium-Acro</td></tr>
<tr><td>HYSMyeongJo-Medium-Acro</td></tr>
<tr><td>AdobeMyungjoStd-Medium-Acro</td></tr>
</tbody>
</table>

<!-- 「知って」いるフォントのうち，中韓の Adobe... のフォントは，Adobe が付かない部分だけでは ? -->
<!-- 2003年11月25日以降のバージョンでは、これで正しい筈です。 -->
<!-- // (/home/cvsroot -> ) /usr/local/src/tetex-src-3.0/texk/dvipdfmx/src/cid_basefont.h を見て確認しました (m__m) -->

そこで、これらのフォント名をcid-x.mapのエントリー

> \[TFM名ステム\]@\[SFD名\]@ \[CMap名\] \[フォントファイル名\]

で指定すると、それらのフォントがdvipdfmxの検索パスに存在しなくても、
フォントが埋め込まれていないPDFファイルができあがります。
ただし、\[CMap名\]はSFDを適用した結果のエンコーディングから
上の表の文字集合に記されたCIDの並び順への対応表です。
\[SFD名\]には普通TFMを作成する時にttf2tfmの引数として指定したのと
同じものを使います。しかし、次のようなこともできます。

> jsso12@UJIS@ UniJIS-UCS2-H HeiseiMin-W3-Acro

これは単純にjsso12XX.tfmのエンコーディングを集めてユニコードに復元し、
Adobe-Japan1のグリフに標準的に対応させます。

> jsso12@SJIS@ RKSJ-H HeiseiMin-W3-Acro

これも単純ですが、jsso12XX.tfmのエンコーディングを集めてShift-JISに復元し、
Adobe-Japan1のグリフに標準的に対応させます。

> jsso12@SJIS@ 90ms-RKSJ-H HeiseiMin-W3-Acro

これもShift-JISを経由しますが、 MS Windows標準文字セットの対応を使用します。
一部、上とは微妙に違う字形が使われます。

> jsso12@SJIS@ 78-RKSJ-H HeiseiMin-W3-Acro

これは表外漢字の新字体、旧字体が入れ替わったりしている、
1978版JISでの例示字形が使われます。

フォントを埋め込んでいないPDFでは表示、印刷環境により、異なる代替フォントが
使われることがあります。

#### 実在するOpenType(CFF, CID-keyed)フォントの場合 {#zc736617}

上と殆ど同じですが、\[フォントファイル名\]にはdvipdfmxの検索パスに存在する
フォントを指定しなければなりません。
デフォルトではフォントが埋め込まれますが、\[フォントファイル名\]の先頭に
'!'を付けると、埋め込まれなくなります。また、\[フォントファイル名\]の後に
",Bold"、",Italic"、または",BoldItalic"を付けた場合もフォントは埋め込まれません。
これらは、フォントをPDFヴューアーが機械的に、太らせたり、ひしゃげさせたりして、
表示することを指示します。

#### TrueTypeフォントによるOpenType(CFF, CID-keyed)偽装 {#odc3338f}

TTFフォントでは、内部的なグリフの並び順に何の決まりもありません。
従って、フォントファイル内のグリフにアクセスするにはフォントファイルが持つ、
cmapテーブルが使われますが、\[CMap名\]に指定されたCMapファイルの文字集合が
Adobeの標準文字集合の時は、標準的なユニコードからの対応により、(書きかけ)

#### TrueTypeフォントの場合 {#q2b385eb}

cmapテーブルを使用して、TTFフォントにアクセスするには、cid-x.mapのエントリー

> \[TFM名ステム\]@\[SFD名\]@ unicode \[フォントファイル名\]

を使います。

> ```
> -wオプション
> ```
>
> TrueTypeフォントを縦書きフォントとして使う時に使います。

> ```
> -pオプション
> ```
>
> UnicodeのBMP (Basic Multilingual Plane)に入っていないコードポイントを持つ文字に
> アクセスするために使用します。

何等かの事情でTTFフォントのグリフにその並び順で直接アクセスするには、
文字集合として、Adobe-Identityを持つCMapファイルを使用します。
しかし、このCMapファイルの名前は"Identity-H"または"Identity-V"であってはいけません。

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

他にどのようなサンプルを作れば分かり易いか、アイデアをお寄せ下さい。
