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
このため、ツールによっては [dvipng](/dvipng/) のように日本語に対応してないものがあります。

ここでは、コンパイラ等には手を加えず、
マクロで日中韓文字を処理する CJK LaTeX を紹介します。
漢字等がビットマップになることにさえ我慢できれば(?)、
周辺ツールも含めてオリジナルの TeX 環境がそのまま使えます。
縦書や日本語の禁則処理等は苦手ですが、 <!-- 日本語の禁則処理をしていない訳ではありません。 --> <!-- pTeXと比べて、組版の仕上がりが見劣りするのは和文(中文)と欧文の境界に --> <!-- グルーが入らない事が原因であるように感じます。 --> <!-- 境界に[space]を入れて誤魔化すのを忘れると、まあ、ひどい仕上がりになります。 -->
UTF-8 等を用いて中国韓國文字も処理できます。
海外では、英文中にほんの少し漢字を書きたい場合によく使われているようです。 <!-- CJK LaTeX に詳しくない者が書き加えました。間違ってたらすいません。 --> <!-- CJK は主に台湾で使われています。 -->

CJKパッケージはinputencパッケージなどと同じく、
8bit目(最上位bit)の立った文字のカテゴリー
コードを変更して、多バイト文字のTeXソースを標準的な8bit版のLaTeXでコンパイル
可能にするマクロ集です。当然、8bit目(最上位bit)の立った文字が
マクロとして処理される前に
多バイト文字として、コンパイラに解釈されてしまう拡張が施された
pLaTeXでは使用できません。基本的な使い方は

> \usepackage{CJK}
> ...<br>
> \begin{CJK}{encoding}{family}<br>
> ...<br>
> \end{CJK}

<!-- 要説明 CJKutf8.sty -->

です。エンコーディングには EUC-JP, Shift_JIS, GB2312, Big5, x-EUC-TW (CNS 11643), EUC-KR, 
UTF-8 などさまざまなものが使えます。以下は代表的なものです。

<table>
<tbody>
<tr><td>名前</td><td>ユーザーコード</td><td>TFM エンコーディング</td></tr>
<tr><td>Big5</td><td>Bg5</td><td>c00</td></tr>
<tr><td>GB2312</td><td>GB</td><td>c10</td></tr>
<tr><td>EUC-JP</td><td>JIS</td><td>c40</td></tr>
<tr><td>Shift_JIS</td><td>SJIS</td><td>c40</td></tr>
<tr><td>JIS X 0212 (EUC-JP)</td><td>JIS2</td><td>c50</td></tr>
<tr><td>EUC-KR</td><td>KS</td><td>c60</td></tr>
<tr><td>UTF-8</td><td>UTF8</td><td>c70</td></tr>
</tbody>
</table>

ユーザーコードはTeXのソースコードのencodingに書き込む文字列、
TFMエンコーディングはfdファイルの作成に必要です。
この説明から見当がつくと思いますが、TeXのソースコードに
様々なエンコーディングが混じっていても、問題なくコンパイルできます。
しかし、編集の手間を考えると、複数のエンコーディングを用いて
原稿を用意する時は別ファイルにしておいて、\inputするのが良いでしょう。
特に、Big5とShift_JISは２バイト目に'\\', '{', '}'と言ったLaTeXにとって
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
songであっても、UTF-8の文書はc70song.fdで指定されたcyberbXX.tfmが、
EUC-JPの文書はc40song.fdで指定されたjsso12XX.tfmが、等々のフォントが使われます。

### 拡張パッケージ {#xec38b47}

CJKパッケージの配布には、様々な拡張とそのサンプルが同梱されています。
そのうち、最も重要と思われる、CJKutf8について、説明します。
中国語と、日本語(そして、いくらかは韓國語［朝鮮語］も)は禁則対象の文字の前後を除き、
どこでも改行できると言う、他の言語にはなかなか見出しがたい、
特徴的な組版規則を持っています。CJKパッケージでは TeX上にそのような
規則を実現するための実装がなされているため、CJK環境内で、それ以外の言語を
使用すると、望ましからぬ組版処理が行われてしまいます。
丁度、pTeXでも、全角の英数字を使って、英文を書いたのでは、正しいハイフネーションが
行われないのと同じ事です。
そこで、CJKと他の言語を併用するには、他の言語の部分をCJK環境の
外部に書かなければなりません。更に、TeXのハイフネーションや、
カーニング、リガチャーはフォントエンコーディングに依存しているため、
正しいフォントエンコーディングがCJK環境外部ではロードされるように
しなければなりません。
そのような問題を解決してくれるのが、CJKutf8パッケージです。
仕組みを説明するために、まず、inputencパッケージについて解説します。

#### inputencパッケージ {#wd55a638}

LaTeX2eとLaTeX2.09の大きな違いは、NFSS2の採用です。
それに伴い、使用するフォントエンコーディングは、その他のフォントの属性とは独立に
ユーザーが指定するものとなりました。同時に、ソースファイルの記述に使う
エンコーディングも、ユーザーが指定するものとなりました。
その結果、LaTeX2eの作法に則った最小のTeXソースは
(実際にはfontencのオプション指定はbabel等の他のパッケージを用いて、
間接に行う方が便利でしょうけれども、)

> \documentclass{...}
> \usepackage\[...\]{fontenc}<br>
> \usepackage\[...\]{inputenc}<br>
> \begin{document}<br>
> ...<br>
> \end{document}

となります。過去 (LaTeX2.09) との互換性から、もし、fontencを指定しなければ、
テキストではOT1が使用され、もし、inputencを指定しなければ、
ソースファイルのエンコーディングは、フォントエンコーディングと同じものが、
使用されます。もし、それが自分の用途に適うものであったとしても、これらの
パッケージをロードしない事が、LaTeX2eの作法に則ったソースの書き方とは
言えないでしょう。

ところで、inputenc.styが実際に行っている事は、8bit目(最上位bit)の立った文字を
アクティブにし、ソースコード中でこれらの文字を使用しようとするとエラーを
発効するだけに過ぎません。もし、8bit目(最上位bit)の立った文字を
ソースコード中で使用したいのならば、アクティブにされた文字をマクロとして
再定義して、適切なフォントエンコーディング中の、適切な文字コードに
対応させてやる必要があります。inputencに与える、オプションは、そう言った
再定義の記載されたファイルです。
2004年2月9日以降のLaTeX2eでは、inputencパッケージはUTF8オプションが使用可能です。

> \usepackage\[UTF8\]{inputenc}

しかし、このように、プリアンブルに書いたからと言って、すべてのUTF-8で
エンコードされた文字がソースコード中で使える訳ではありません。
実はinputencパッケージのUTF8オプションは、本文が始まるまでにプリアンブルで
ロードされたすべてのフォントエンコーディングを走査し、各エンコーディングXXX
に対し、xxxenc.dfuを読み込み、そこで定義された、UTF-8文字の再定義のみを
有効にするだけです。それ以外の文字を使用しようとすると、処理不可能のエラーがでます。

現在、標準的に配布されているdfuファイルは、

> lcyenc.dfu
> ly1enc.dfu
> omsenc.dfu
> ot1enc.dfu
> ot2enc.dfu
> t1enc.dfu
> t2aenc.dfu
> t2benc.dfu
> t2cenc.dfu
> ts1enc.dfu
> x2enc.dfu

です。utf8enc.dfuはこれらの内容を一覧にしたファイルです。
これらに対応するフォントエンコーディングで記述できる言語に関しては、
ソースファイルにUTF-8を使っても、それ以外のエンコーディングを使った時と
全く同じに、ハイフネーション、カーニング、リガチャーは処理され、
同じ仕上りにタイプセットされます。

何もパッケージを追加しない、LaTeX標準での、ユニコードサポートに関する、
現在の状況をまとめると、

- LaTeXはUTF-8エンコーディングによる、ソースコードの表記を
    (BMPに限らず)完全にサポートしている。

- 次の条件を満たす言語のタイプセットに関しては、ソースコードに
    UTF-8エンコーディングを使う限り、当該言語を記述するのに適切な
    フォントエンコーディングとdfuファイルを
    用意すれば、原則的に可能である。
    - 行は一定の水平方向に並べられる文字(glyphaeme)で構成され、
        行は、上から下に向かい、垂直に並べられる。
    - 各行には充分なだけな数の、可変な幅を持つ空白(またはそれに類する文字)
        が含まれ、それらの空白(またはそれに類する文字)の箇所で、
        改行が可能である。

#### CJKutf8パッケージ {#r2eca9d6}

このパッケージは内部的には複雑な事をやっていますが、提供する機能は単純です。
要するに、裏で、inputencパッケージを読み込み、CJK環境では
まず、inputencで処理を試み、処理できない文字が
出て来たら、CJK環境として処理を試みる。ただそれだけです。

> \documentclass{article}
> \usepackage\[T1\]{CJKutf8}%%フォントエンコーディングをオプションで指定しても良い。<br>
>
> <br>
>
> \begin{document}<br>
> \begin{CJK}{UTF8}{}<br>
> UTF-8で何か文章を書く。babel等でハイフネーションの言語を指定すれば、正しく組版される。<br>
> \end{CJK}<br>
> \end{document}

## インストール {#fb6c9457}

### TeX {#a7fe5a5f}

まず、LaTeXが動作する環境が必要です。その他に
[CTAN:languages/japanese/CJK/4_6.0/texinput](https://mirror.ctan.org/languages/japanese/CJK/4_6.0/texinput)
配下のマクロファイルと、更にはTFMファイル(フォントメトリック)がいります。
CJKにデフォルトで附属するフォントの設定はdvipsやpdflatexでの使用も
可能なようになっているので、dvipdfmxで使うには最適なものではありません。
ここではカスタムなフォント定義を行なう方法を説明します。
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
例えば、EUC-JP/Shift_JIS で書かれた原稿を処理するためにfooをステムに持つ
TFMファイルを作って、TeXファイルではbarと言うファミリー名で
ユニコードのcmapを持ったbaz.ttfフォントのデザインを使いたいならば、

> ttf2tfm baz foo@UJIS@

で、まず、foo01.tfm--foo35.tfmを作ります。それから、
c40bar.fdを作らなければなりませんが、その最低限の内容は

> \DeclareFontFamily{C40}{bar}{}
> \DeclareFontShape{C40}{bar}{m}{n}{&lt;-> CJK \* foo}{}

です。テキストエディタででも作って下さい。こうしてできたファイルを
LaTeXが見つけられるようにしてやれば、無事にLaTeXのコンパイルは通る筈です。

> \documentclasss{article}
> \usepackage{CJK}<br>
>
> <br>
>
> \begin{document}<br>
> \begin{CJK}{JIS}{bar}<br>
> ここに EUC-JP で日本語の文章を書きます。<br>
> \end{CJK}<br>
> \begin{CJK}{SJIS}{bar}<br>
> ここに Shift_JIS で日本語の文章を書きます。%<br>
> しかし、もしかすると、このブロックだけ%<br>
> プリプロセッサーを通さないと \LaTeX{} のコンパイルが通らないかも%<br>
> 知れません。<br>
> \end{CJK}<br>
> \end{document}

Shift_JISとBig5の原稿を処理するにはプリプロセッサーsjisconv, bg5convも
インストールしなければなりません。

### DVIドライバー {#u7a0009a}

近い将来pdflatexでも正式にCJKパッケージがサポートされる模様ですが、現時点で
CJKパッケージを使って、まともなPDFを作成するにはVTeX(商用)とdvipdfmxだけしか
選択肢がありませんので、ここではdvipdfmxについてのみ扱います。

> ここで、dvipsや現在一般に流布しているpdflatexの生成するPDFがまともでないと
> 言う意味はこれらのDVIドライバーではTFMの分割に従って、PDFが使用する
> 実フォントも分割したフォント(Type1, PK)にしなければならないからです。

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
<thead>
<tr><th style="text-align:center">言語</th><th>文字集合</th><th>フォント名</th></tr>
</thead>
<tbody>
<tr><td rowspan="8" style="text-align:center">日本語</td><td rowspan="4">Adobe-Japan1</td><td>Ryumin-Light</td></tr>
<tr><td>GothicBBB-Medium</td></tr>
<tr><td>HeiseiMin-W3</td></tr>
<tr><td>HeiseiKakuGo-W5</td></tr>
<tr><td rowspan="2">Adobe-Japan1-2</td><td>HeiseiMin-W3-Acro</td></tr>
<tr><td>HeiseiKakuGo-W5-Acro</td></tr>
<tr><td rowspan="2">Adobe-Japan1-4</td><td>KozMinPro-Regular-Acro</td></tr>
<tr><td>KozGoPro-Medium-Acro</td></tr>
<tr><td rowspan="3" style="text-align:center">簡体中文<br>（簡化字中文）</td><td>Adobe-GB1</td><td>STSong-Light</td></tr>
<tr><td>Adobe-GB1-2</td><td>STSong-Light-Acro</td></tr>
<tr><td>Adobe-GB1-4</td><td>AdobeSongStd-Light-Acro</td></tr>
<tr><td rowspan="5" style="text-align:center">繁體中文<br>（正體中文）</td><td rowspan="2">Adobe-CNS1</td><td>MSung-Light</td></tr>
<tr><td>MHei-Medium</td></tr>
<tr><td rowspan="2">Adobe-CNS1-0</td><td>MSung-Light-Acro</td></tr>
<tr><td>MHei-Medium-Acro</td></tr>
<tr><td>Adobe-CNS1-4</td><td>AdobeMingStd-Light-Acro</td></tr>
<tr><td rowspan="5" style="text-align:center">韓國語<br>（朝鮮語）</td><td rowspan="2">Adobe-Korea1</td><td>HYSMyeongJo-Medium</td></tr>
<tr><td>HYGoThic-Medium</td></tr>
<tr><td rowspan="2">Adobe-Korea1-0</td><td>HYSMyeongJo-Medium-Acro</td></tr>
<tr><td>HYGoThic-Medium-Acro</td></tr>
<tr><td>Adobe-Korea1-2</td><td>AdobeMyungjoStd-Medium-Acro</td></tr>
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

これも単純ですが、jsso12XX.tfmのエンコーディングを集めてShift_JISに復元し、
Adobe-Japan1のグリフに標準的に対応させます。

> jsso12@SJIS@ 90ms-RKSJ-H HeiseiMin-W3-Acro

これもShift_JISを経由しますが、 MS Windows標準文字セットの対応を使用します。
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
Adobeの標準文字集合の時は、標準的なユニコードからの対応により、
TrueTypeフォントをCIDフォントとして、埋め込む事ができます。
但し、ユニコードの割り振られていないグリフなどは、元々TTFフォントには
存在しない場合が多いですし、たとえ存在しても、アクセスできません。
\[CMap名\]に指定されたCMapファイルの文字集合がAdobeの標準文字集合と異なっていても、
TTFフォント名の後ろに"/AJ14"等と、付けてやれば、Adobe-Japan1のsupplement 4を
偽装できます。
TrueTypeフォントを埋め込まずに使用する場合、原則として、この方法を使って下さい。

#### TrueTypeフォントの場合 {#q2b385eb}

cmapテーブルを使用して、TTFフォントにアクセスするには、cid-x.mapのエントリー

> \[TFM名ステム\]@\[SFD名\]@ unicode \[フォントファイル名\] \[オプション\]

を使います。ここでSFDはTFMのエンコーディングをユニコードに対応させる、
'U'で始まるものでなければなりません。

> ```
> -w オプション
> ```
>
> TrueTypeフォントを縦書きフォントとして使う時に使います。
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
> UnicodeのBMP (Basic Multilingual Plane)に入っていないコードポイントを持つ文字に
> アクセスするために使用します。
>
> ```
> -p 0
> ```
>
> BMPの文字にアクセスします。（デフォルト）<br>
> つまり、0x0000--0xffffのコードポイントに同じコードポイントを持つ文字を対応させます。
>
> ```
> -p 1
> ```
>
> SMP (Supplementary Multilingual Plane)の文字にアクセスします。
> TeXで必要なのは、主に、古代文字です。<br>
> 0x0000--0xffffのコードポイントに0x10000平行移動した
> 0x10000--0x1ffffのコードポイントを持つ文字を対応させます。
>
> ```
> -p 2
> ```
>
> SIP (Supplementary Ideographic Plane)の文字にアクセスします。
> これはBMPに収まり切れなかった漢字です。
> 0x0000--0xffffのコードポイントに0x20000平行移動した
> 0x20000--0x2ffffのコードポイントを持つ文字を対応させます。

何等かの事情でTTFフォントのグリフに、cmapを経由せず、
その並び順で直接アクセスするには、
文字集合として、Adobe-Identityを持つCMapファイルを使用します。
しかし、このCMapファイルの名前は"Identity-H"または"Identity-V"であってはいけません。

## サンプル {#f920d8cd}

以下のサンプルをコンパイルするには[CTAN:languages/japanese/CJK/4_7.0/texinput/](https://mirror.ctan.org/languages/japanese/CJK/4_7.0/texinput/)
配下のファイルが必要です。サンプルはインストールして使用することも可能なように
アーカイヴされていますが、インストールせずに試してみるには空の作業用ディレクトリ
(フォルダー)を用意し、すべてのファイルをそこにコピーします。更にサンプル内の
dvipdfm/config/cid-x.map-add.\*を、インストールせずに試してみるにはcid-x.mapに
改名、インストールして使用する場合はその内容をシステムのcid-x.mapに追加します。

1. [UTF-8で書かれたTeXファイルでCJKの各漢字字形を使い分ける。](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-UTF8-noembed.tar.bz2)
    - これまでに判明している問題点:
        - 各ページ、最下段を除いて、意味不明な箇所がある。視点を変えて、少し距離をおいて眺める必要があるかも知れない。
1. [縦書き](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-localEncoding-vertical.tar.bz2)JISX0213をShift_JISで使うために必要な設定も一式入っています。
    - これまでに判明している問題点:
        - 同梱されたtfmファイルは全角文字以外に使えない。
        - 横書きフォントを縦書きに使う場合のfdxファイルが無いため、CJKvert.styを使った縦書きでは、句読点の位置がおかしい。(縦書きフォントを使う場合は問題ないと思います。)
1. [Supplementary Ideographic Planeの使用](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-SIP.tar.bz2)このサンプルからPDFファイルを作るのには、
    最新版にパッチを当てたdvipdfmxが必要です。更に商用フォントも使いました。
    そこで、[作成済みPDF](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/CJK-LaTeX-SIP.pdf)も置いておきます。
    - これまでに判明している問題点:
        - 現時点では、dvipdfmxにパッチ[qa:40437](https://okumuralab.org/~okumura/texfaq/qa/40437.html)を当てなくてはならない。
        - c70usong.fdに二つのフォントが定義されている。これはc70usong.fdとc70usong2.fd
            の二つのファイルに分けないと、SIPの文字を文書の最初に使えない。
        - 商用フォントを使う設定になっている。これは、cid-x.mapを書き換えて、[HAN NOM FONTs](http://www.viethoc.org/article.php?sid=98&mode=threaded&order=0&thold=0)を使う設定に直した方がいい。(それにしても、Han NomのデザインはSimSunに似ている。)
        - 手持ちの材料で、適当にでっちあげたサンプルの文書には、その後、簡単な
            Web検索しただけで、明らかな誤り２箇所と、幾多の要改善箇所が見つかっている。
        - 現在の最新版である。CJK 4.6.0では、プリアンブルに、このサンプルにあるような、
            コードを加えないと、BMP以外の文字は扱えないが、ユニコードをフルサポートした、
            開発版のCJKパッケージとは、このコードは衝突してしまう。
            <!-- +CJKutf8.styについては[[Cardo:http://scholarsfonts.net/]]1.01がリリースされてから -->
            <!-- 考えます。文例と、当該言語のハイフネーションパターンを提供して頂けると助かります。 -->
            <!-- SMPも使ってみたい。 -->
            <!-- SMPをサポートしたTTFファイルは、大抵の場合、欧文用のフォントに準じて -->
            <!-- 作成されており、各グリフがpsnameを持っています。 -->
            <!-- 従って、たとい、文字コードがBMPに入っていなくても、 ttf2afmとafm2tfm -->
            <!-- を併用すれば、TFMを作成できます。あとは、ここの説明を応用すれば、使えるはずです。 -->

他にどのようなサンプルを作れば分かり易いか、アイデアをお寄せ下さい。
もちろん、新たなサンプルの提供と、(全体の)文章の修正も歓迎します。
