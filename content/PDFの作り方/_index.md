---
title: "PDFの作り方"
url: "/PDFの作り方/"
date: 2013-09-11T22:44:11Z
bookCollapseSection: true
pukiwiki: "PDFの作り方"
---

# PDFの作り方

## PDF の作り方 {#td997c6f}

投稿論文や予稿で PDF を要求されることが増えました。
ここでは PDF の上手な作り方を解説します。

<em>Adobe Acrobat DC (Adobe Acrobat Distiller DC を含む) や dvipdfmx は CJK フォントを埋め込まないと仕様に違反した PDF を生成します。仕様にできるだけ従いたい場合には，これらのソフトを使う場合フォントを可能な限り埋め込むようにしましょう。</em>

***

***

## PDF を作るためのソフトウェア {#mde22763}

PDF ファイルを作るためのソフトウェアや，PDF 編集ソフトウェア，PDF ビューアの一覧は [PDF](/PDF/) という項目にまとめられています。

## LaTeX で PDF {#k0e3280f}

LaTeX のインストールについては
[Windows へのインストール](</Microsoft Windows/>)，
[OS X へのインストール](/Mac/)，
[Linux へのインストール](/Linux/)
などのページをご覧ください．

### 要約 {#gf004f58}

#### 日本語の PDF ファイルを作成する場合 {#j5accec9}

upLaTeX で日本語の PDF ファイルを作る場合は [dvipdfmx](/dvipdfmx/) を使用します．
具体的には [dvipdfmx の使い方](#rdc781c9) をご覧ください．

dvipdfmx のほかに dvips でいったん PostScript に変換して，[Ghostscript](/Ghostscript/) に付属の ps2pdf または Adobe Acrobat Distiller DC
で PDF に変換する方法もあります．
詳しくは [dvips の使い方](#lf015a28) をご覧ください．

#### 欧文のみの PDF ファイルを作成する場合 {#sb4de6fd}

欧文のみの原稿ならば，pdfLaTeX が簡単です．
[BXcjkjatype](/LaTeX-CJK/) を使用すると pdfLaTeX で日本語の PDF ファイルも作成できます．

#### Unicode を使用して多言語 PDF ファイルを作成する場合 {#ff1f7cd1}

Unicode を使用して多言語 PDF ファイルを作成する場合は，[LuaLaTeX](/LuaTeX/), [XeLaTeX](/XeTeX/) がおすすめです．
日本語の PDF ファイルを作成する場合は [LuaTeX-ja](/LuaTeX-ja/) や [ZXjatype](/xeCJK/) を使用します．

#### PDF形式出力を得るLaTeXタイプセットの主な流儀 {#gf004f58}

(1) tex → pdf

```
platex-ng: tex → pdf
pdflatex: tex → pdf (日本語を使用する場合は BXcjkjatype)
lualatex: tex → pdf (日本語を使用する場合は LuaTeX-ja)
xelatex: tex (→ xdv) → pdf (日本語を使用する場合は ZXjatype)
※ 挿入図ファイルはPDF形式等も可
```

(2) tex → dvi → pdf

```
(2)-1: uplatex: tex → dvi
(2)-2: dvipdfmx: dvi → pdf
※ ptex2pdf を使用すると (2)-1, (2)-2 の処理を一度に実行できます．
※ 挿入図ファイルはPDF形式等も可（EPS形式以外はdvipdfmxが自力で対応するので，Ghostscriptの助けは不要）．
```

(3) tex → dvi → ps → pdf

```
(3)-1: uplatex: tex → dvi
(3)-2: dvips: dvi → ps
(3)-3: ps2pdf (Ghostscript)  or 「Adobe Acrobat Distiller DC」: ps → pdf
※ [[arXiv]] 等ではこれを要求されるようです
※ 挿入図ファイルはEPS形式のみ, pstricks, powerdot 使用可能
```

#### PDF形式ファイル（図）の挿入について {#n20e1824}

- EPS 形式を使用せずに PDF 形式の挿入図を用いて，「platex-ng, pdflatex, lualatex, xelatex: tex → pdf」または「uplatex + dvipdfmx: tex → dvi → pdf」の流儀で処理させると，Ghostscript を経ることもなく，通常は処理も速い．

- PDF ファイルを画像として取り込むときには，\includegraphics が利用するバウンディングボックスの情報が必要．
    - 一般に \includegraphics で外部ファイルを画像として取り込むには，出力されるページ上で画像の境界がどこに設定されるかを指定する必要がある．この領域のことをバウンディングボックス（bounding box）と呼ぶ．
    - EPS ファイルは，もともと PostScript の画像を埋め込むための形式として開発されたこともあって，バウンディングボックスを表す情報が必ずファイル内に埋め込まれている（BoundingBox）． EPSの取り込みでは，この BoundingBox の値が使われる．EPS 以外を取り込むときは，別の方法でバウンディングボックスの情報を手に入れるしかない．

- dvipdfmx を使う場合は， extractbb というコマンドを使うと画像 PDF のバウンディングボックスの値を出力できる．TeX Live 2015 以降, MacTeX-2015 以降, W32TeX を使用している場合は自動実行されるので extractbb を直接実行する必要はない．

```
$ extractbb foo.pdf
```

- 後述の [extractbb の自動実行](</PDFの作り方/#rf074b4b>) も参照．
    - PDF ファイルには，コンテンツが画像であるかどうかに関係なく，ドキュメントのページ上のさまざまな領域を表す 5 種類のボックスが定義されている．
        - CropBox，ArtBox，TrimBox，BleedBox，MediaBox
    - PDF に対して extractbb を実行すると，これら PDF のボックスの値をもとに，バウンディングボックスの値が返される．
        - 詳しくは [http://d.hatena.ne.jp/zrbabbler/20140629/1404010741](http://d.hatena.ne.jp/zrbabbler/20140629/1404010741) を参照．

- \includegraphics のオプションとしてバウンディングボックスの情報を手動で指定することもできる．
    - 詳しくは graphics/graphicx パッケージのマニュアルや『LaTeX コンパニオン』などを参照．

<!-- - pdf ファイルの bounding box 情報 -->
<!-- - - PDF ファイル（Adobe [[Illustrator]] による保存を除く）の bounding box 情報の仕様（正確には bounding-box-like な矩形領域情報は複数種類が定義されている）は，EPS ファイルのそれとは正確には異なる． -->
<!-- - - 従って，PDF ファイル内から普通に bounding box 情報を読み取っても，それは「描かれた図形を囲む最小矩形領域」ではない可能性も存在するので注意が必要．その場合には，計算等によって「最小矩形領域」を算出する過程が必要となる． -->

### 読み手に親切な PDF ファイルの作り方 {#hb3bee4c}

- 目次から本文のページなどへリンクジャンプ可能だと読み手が楽です．dvipdfmx を使用する場合はプリアンブルに下記を入れると良いようです．

    ```
    \usepackage[dvipdfmx,bookmarkstype=toc,colorlinks=true,urlcolor=black,%
          linkcolor=black,citecolor=black,linktocpage=true,bookmarks=false]{hyperref}
    \usepackage{pxjahyper}
    ```

- \boldsymbol などを用いて本物のボールド体を使ってください．（重ね打ち \[“\pmb” or “\bm”\] による擬似的ボールド体は見苦しいです．例えば IEEE サイトで有償提供されている論文などです．）
    <!-- bm パッケージによる \bm は基本的には重ね打ちではなく， -->
    <!-- きちんとボールド体を用います（ただし，ボールド体を利用できない -->
    <!-- ［あるいは利用しづらい］一部の記号については重ね打ちになります）． -->

- Type 1 フォントを用い，かつファイル内に埋め込んでください．（Adobe Acrobat Reader DC で正常にテキスト検索できるように，妙なテキストエンコーディングも用いないでください．）

- （上記に関して，世の中の PDF ファイルには読んでいて苦労をするものが案外多いようです．）

### dvipdfmx の使い方 {#rdc781c9}

[dvipdfmx](/dvipdfmx/) は TeX 出力（DVI ファイル）を PDF に変換するフリーソフトウェアです．
TeX Live, W32TeX に含まれています．
『［改訂第6版］ LaTeX2e 美文書作成入門』の電子版は dvipdfmx で PDF 化しました．

使い方は，Windows PowerShell またはコマンド プロンプトで

```
dvipdfmx foo.dvi
```

と打ち込むだけです．
これで foo.dvi が foo.pdf に変換されます．
コマンドラインを使用するのが苦手な方は [LyX](/LyX/), [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/)
などで dvipdfmx を使うように設定できます．

以下では dvipdfmx について説明します．

#### フォントの埋め込み設定 {#z0e1001a}

dvipdfmx がフォントを埋め込むかどうかは設定によります．

まず欧文フォントですが，TeX Live ではデフォルトで欧文フォントを埋め込みますが，W32TeX では通常は PostScript Level 1 での基本14書体は埋め込みません．
W32TeX で基本14書体を埋め込むには

```
dvipdfmx -f dlbase14.map ファイル名
```

のようにして起動してください．
あるいはソースに

```
\AtBeginDvi{\special{pdf:mapfile dlbase14.map}}
```

なる special コマンドを書いておいてもよいです．(\specialの用法について ([qa:55664](https://okumuralab.org/~okumura/texfaq/qa/55664.html), [qa:55665](https://okumuralab.org/~okumura/texfaq/qa/55665.html), [qa:55672](https://okumuralab.org/~okumura/texfaq/qa/55672.html)))

次に和文フォントですが，TeX Live はデフォルトで和文フォントを埋め込みませんが，W32TeX はデフォルトでは IPAexMincho・IPAexGothic を埋め込みます．
TeX Live で IPAexフォントを埋め込む場合は，Windows PowerShell またはコマンド プロンプトから

```
kanji-config-updmap-sys ipaex
```

または

```
kanji-config-updmap ipaex
```

を実行します．

W32TeX の場合は和文フォントはデフォルトでは IPAexMincho・IPAexGothic を埋め込みます．

$TEXMF/fonts/map/dvipdfmx/base/cid-x.map に

```
%%
%% upTeX examples
%%
```

```
urml     UniJIS-UTF16-H   ipaexm.ttf
urmlv    UniJIS-UTF16-V   ipaexm.ttf
ugbm     UniJIS-UTF16-H   ipaexg.ttf
ugbmv    UniJIS-UTF16-V   ipaexg.ttf
uprml-h  UniJIS-UTF16-H   ipaexm.ttf
uprml-v  UniJIS-UTF16-V   ipaexm.ttf
upgbm-h  UniJIS-UTF16-H   ipaexg.ttf
upgbm-v  UniJIS-UTF16-V   ipaexg.ttf
uprml-hq UniJIS-UCS2-H    ipaexm.ttf
upgbm-hq UniJIS-UCS2-H    ipaexg.ttf
```

と書いてあれば「IPAexMincho」・「IPAexGothic」が埋め込まれます．

cid-x.map の場所は Windows PowerShell またはコマンド プロンプトから以下のコマンドを実行すれば検索できます．

```
kpsewhich -progname=dvipdfmx -format=map cid-x.map
```

なお，dvipdfmx はフォントを埋め込まないと仕様に違反した PDF を生成するようです．
日本語版 dvipdfm にはこの問題はないようです．
（参照：[PDF1.7 仕様書](https://wwwimages2.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf#page=285)
The Identity-H and Identity-V CMaps shall not be used with a non-embedded font. Only standardized character
sets may be used.）(--> これは ISO 32000-1 で加わった仕様で，PDF Reference, Sixth edition, version 1.7 とそれ以前の PDF Reference にはそのような記述はありません．このため ISO 32000-1 は過去の PDF のバージョンと非互換です．Adobe Acrobat Distiller DC 等も同様の問題を抱えているようです．)

dvipdfmx は PDF，PNG，JPEG，MetaPost 出力，EPS を挿入できます．
EPS 挿入には外部プログラムとして Ghostscript が必要です．
ベクトル画像は PDF 形式，ラスター画像は PNG または JPEG 形式で挿入するのがいいでしょう．

#### extractbb の自動実行 {#rf074b4b}

TeX Live 2015 以降，MacTeX-2015 以降，[W32TeX](/W32TeX/)，[美文書第6版](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/) からインストールした場合は texmf.cnf の shell_escape_commands に extractbb が指定されていて，自動的に extractbb が実行されるので，あらかじめ extractbb を実行する必要はありません．
これら以外の環境の場合は，[こちらのアーカイブ情報](</古い情報/#rf074b4b>)を参考に extractbb の自動実行を設定するか，[次の項](</PDFの作り方/#z06f5ff9>)も読んで下さい．

LaTeX ファイル中では

```
\usepackage[dvipdfmx]{graphicx}
...
\includegraphics[width=8cm]{zu.png}
```

のようにします．
graphicx パッケージを読み込む際には次のように必ず dvipdfmx オプションを与えます．

```
\usepackage[dvipdfmx]{graphicx}
```

これを LaTeX と dvipdfmx で処理します．

Ghostscript で PDF を作る場合，正しい設定をすれば和文フォントを埋め込まずにきれいな
EPS ファイルができます．
詳しくは [Ghostscript](/Ghostscript/) のページをご覧ください．

Adobe Acrobat Distiller DC をコマンドラインから使いたい場合，OS X では

```
$ open -a 'Acrobat Distiller.app' ファイル名
```

とします（alias を設定しておくと便利でしょう）．

dvipdfmx で PSfrag を使うには，まず \pagestyle{empty}
で図と PSfrag だけのページを作り，“dvips -Ppdf -E” で
いったん EPS にしてから，それをメインの LaTeX ファイルに挿入します．
ちょっと面倒ですので，
[overpic](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/overpic.html)
や
[labelfig](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/labelfig.html)
を使うのがいいでしょう．

dvipdfmx は PFB 形式の Type 1 フォントしか使えません．
PFA → PFB 変換には [FontForge](http://fontforge.github.io/) が使えそうです

#### BoundingBox の指定 {#z06f5ff9}

手動で BoundingBox を直接指定する，もしくは extractbb を実行することも可能です．

BoundingBox を直接指定する場合は

```
\includegraphics[bb=0 0 横ポイント数 縦ポイント数,width=幅]{ファイル名}
```

を挿入します．

なお “bb” とは “bounding box” を意味しています．
bb の単位は既定では bp (big point) です．

- 1in = 72bp = 72.27pt = 25.40mm = 2.540 cm
- [https://twitter.com/zr_tex8r/status/463680032204791808](https://twitter.com/zr_tex8r/status/463680032204791808)
- [BoundingBox について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=998)
- [用語・略語集](</用語・略語集/#bp>)
- [Wikipedia.ja:ポイント](https://ja.wikipedia.org/wiki/%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88)
- [単位](http://www.math.kobe-u.ac.jp/~kodama/tips-measure.html)
- [TeXの10ptとDTPソフトの10ptは違う](http://www.dab.hi-ho.ne.jp/t-wata/tex/10pt.html)

bb で直接指定する方法には次の欠点があります．

- 値を指定する手間がかかる
- 間違った値を指定してしまうと適切に表示されなくなる可能性がある

通常は次に述べる extractbb を使用した方がよいです．

TeX Live, W32TeX には dvipdfmx 用の BoundingBox を作成する extractbb というツールが付属しています．

```
extractbb hoge.pdf
```

とすると hoge.xbb というファイルが生成されます．
extractbb は TeX ソースの本文に記述するものではなく，ターミナルまたは Windows PowerShell またはコマンドプロンプトから実行するコマンドです．

- [「dvipdfmxと3つのバッド・ノウハウ」に関するアレ(1)](http://d.hatena.ne.jp/zrbabbler/20141109/1415525804), [「dvipdfmxと3つのバッド・ノウハウ」に関するアレ(2)](http://d.hatena.ne.jp/zrbabbler/20141110/1415632001)
- [dvipdfmxと3つのバッド・ノウハウ](http://www.slideshare.net/zr-tex8r/yato-texconf14)
- [xbbファイルが作成できない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=817)
- [inclusion of images and dvipdfmx](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1326)
- [実験レポート：LaTeX + dvipdfmx による画像ファイル挿入](http://d.hatena.ne.jp/zrbabbler/20140614/1402762227)
- [dvipdfmx で画像する時に色々とアレな話](http://d.hatena.ne.jp/zrbabbler/20140814/1408040710)
- [bbox とか ﾅﾝﾄｶBox に関する補足](http://d.hatena.ne.jp/zrbabbler/20140817/1408239981)

### dvips の使い方 {#lf015a28}

dvips は TeX の出力（DVI ファイル）を PostScript (PS) ファイルに変換するツールです．

dvips で変換した PS ファイルは Ghostscript 付属の ps2pdf コマンドや Adobe Acrobat Distiller DC で PDF ファイルに変換できます．
ただし，処理速度や使いやすさの観点では dvipdfmx のほうがいいかもしれません．

詳細は [dvips](/dvips/) を参照してください。

### 図の描き方 {#yca8607c}

[図の作り方](</図の作り方/>)で，おもに EPS 形式の画像ファイルの作り方を説明しています。

<!-- **Computer Modern Type 1 フォント [#k3985a6a] -->
<!--  -->
<!-- W32TeX では Computer Modern Type 1 フォントは&ref(http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/t1fonts.tar.xz); に含まれています． -->
<!--  -->
<!-- 無償で配布されている Computer Modern Type 1 -->
<!-- フォントはすべてのサイズがそろっているわけではありません． -->
<!-- 次のように type1cm -->
<!-- パッケージを使って，存在しない Type 1 -->
<!-- フォントは存在するものを拡大・縮小して使うようにする必要があります． -->
<!--  -->
<!-- \usepackage{type1cm} -->

## Word で PDF {#l3ff32fb}

Word は，同じファイルでも環境の違いによって，レイアウトが変わってしまうという嫌な特徴を持っています．
正しい方法で PDF にしておけば，レイアウトの崩れは防げます．
[Microsoft Office](</Microsoft Office/>) を参照してください。

## Adobe Acrobat DC で PDF {#w441bc87}

### Adobe Acrobat Reader DC と Adobe Acrobat DC の違い {#c982e6e9}

Adobe Acrobat Reader DC は Adobe Acrobat DC から表示・印刷・注釈の追加機能だけを抜き出したもので，[Adobe Acrobat Reader DC のダウンロードサイト](http://get.adobe.com/jp/reader/)から無償で入手できます．
[Adobe Acrobat DC](http://www.adobe.com/jp/products/acrobat.html) は
Adobe Acrobat Distiller DC を含む製品（商品）です．
値段は [Adobe Systems](http://www.adobe.com/jp/) で確認してください．

その機能によってプランが幾つか存在しています．
参考：「[&#x30d7;&#x30e9;&#x30f3;&#x3068;&#x4fa1;&#x683c;&#xff1a;&#x30d7;&#x30e9;&#x30f3;&#x6bd4;&#x8f03;&#x8868; &#x7c; Adobe Acrobat DC](http://acrobat.adobe.com/jp/ja/pricing/pricing-compare-plans.html)」

- Adobe Acrobat Reader DC — PDF の表示と印刷と注釈の追加のみ．無償配布されている．
- Adobe Acrobat DC
    - Adobe Acrobat Standard DC — PDF の編集が可能
    - Adobe Acrobat Pro DC — 様々な PDF の編集が可能

Adobe Acrobat DC があれば Adobe Acrobat Reader DC がなくても PDF ファイルを表示できます．

Adobe 製品は，なるべく最新のアップデートを適用しておきましょう．
アップデートについては[アドビシステムズ](http://www.adobe.com/jp/)の
ダウンロードのページをご覧ください．

### Adobe Acrobat Distiller DC の設定 {#e5e57a76}

PDFWriter ではなく Distiller を使います．

コントロールパネルから［デバイスとプリンター］画面を表示します．
［プリンターと FAX］にある「Adobe PDF」プリンターアイコンを右クリックし，「通常使うプリンターに設定」します．

「Adobe PDF」プリンターアイコンを右クリックし，［印刷設定］ → ［レイアウト］ → ［詳細設定］ (または［プリンターのプロパティ］ → ［全般］ → ［基本設定］ → ［レイアウト］ → ［詳細設定］) で細かい設定をします．

［TrueTypeフォント］の項目は，デフォルトでは「デバイス フォントと代替」になっています．
このままのほうが軽い PDF ファイルができます．
論文のオンライン投稿ではこのままにしておきます．
デザインものなどで，まったく同じフォントで出力してほしいなら，ここを「ソフト フォントとしてダウンロード」にします．

また，PostScript オプションの左の \[+\] をクリックし，［PostScript出力オプション］を「エラーが軽減するよう最適化」にするといいでしょう．
その下の TrueTypeフォントダウンロードオプションは「自動」または「Native TrueType」にしておきます．

Distiller を立ち上げます．

Distiller の［ファイル］ → ［環境設定］で「PDFファイルの保存先を確認」をオンにします．
「Distillerで変換後にPDFを表示」もオンにしておくと確認のため便利です．

まず，Acrobat では［Adobe PDF 設定］の［デフォルト設定］で選びます．
Web 用なら 最小ファイルサイズ，論文提出用には低品位でよければ 標準，より高品位にするには 高品質印刷にすればいいでしょう．
なお，Acrobat は最小ファイルサイズ設定にしてフォントを埋め込まないようにすると仕様に違反した PDF を生成するようです．
（参照：[PDF1.7 仕様書](https://wwwimages2.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf#page=285)
The Identity-H and Identity-V CMaps shall not be used with a non-embedded font. Only standardized character
sets may be used.）

プレス品質は論文では必要ないでしょう．

［設定］ → ［Adobe PDF 設定\] の \[編集］は次のように設定します．

- ［一般］で「互換性のある形式」が標準で Acrobat 8.0 (PDF1.7) または Acrobat 7.0 (PDF1.6) または Acrobat 6.0 (PDF1.5) になっていて TeX Live 2014 を使用している場合は Acrobat 5.0 (PDF 1.4) までにしておくほうが無難です．
    Acrobat 8.0 (PDF1.7), Acrobat 7.0 (PDF1.6), Acrobat 6.0 (PDF1.5) の場合は TeX Live 2014 の extractbb を使用するとエラーが発生することがあります (→ [xbbファイルが作成できない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=817))．

- デフォルトページサイズが米国のレターサイズ（8.5 inches × 11 inches，21.59 cm × 27.94 cm）になっていて
    A4サイズを主に使うなら，ここを 21.0 cm × 29.7 cm に直します（ただし文書側の設定が優先されます）．

- ［フォント］で，「すべてのフォントを埋め込む」は，軽くするためにはオフ，見栄えをまったく同じにしたいときはオンにします．
    また，「埋め込めなかったときの処理」は「警告した後続行する」であることを確認します．
    ここが「ジョブをキャンセルする」になっていると，もともとシステムに存在しないフォント（“Ryumin-Light” など）
    を指定した場合に止まってしまいます．

- ［カラー］で「カラー変更なし」にしておきます．
- ［詳細設定］で「EPSファイルのページサイズ変更とアートワークの中央配置」をオフにします．
    これは後で dvipdfmx を使う際に便利です．

以上の設定内容を「名前を付けて保存」します．
ファイル名は例えば “A4.joboptions” のようにします．

以上の設定が終われば Distiller
は［×］で閉じておいてかまいませんが，二つ同時には立ち上がらないようにできていますので，立ち上げたままにしておけば起動時間が節約できます．

LaTeX + dvips で作った PS ファイルを変換する際に “Warning: Ryumin-Light not found, using Font Substitution. Font cannot be embedded.” などと
いう警告が出ますが，無視してかまいません．
むしろこのように出るほうがフォントが埋め込まれず軽い PDF になります．
この PDF を開くと，Ryumin-Light がなければ小塚明朝またはＭＳ 明朝で表示されます．
これに対して，“XXX not found, using Courier.” というメッセージはエラーです．

- ただし，フォントが埋め込まれないと仕様に違反した PDF になることがあるようです．

Distiller をコマンドプロンプトから使うには

```
start hoge.ps
```

と打ち込みます．
拡張子 “.ps” と関連づけられていれば Distiller が起動するか，すでに起動している Distiller が処理を始めます．
Distiller に関連付けしたくない場合は Distiller に入力/出力ファイル名を指定してコマンドラインから実行することもできます．(→ [Distillerを入力/出力ファイル名を指定して起動する方法について](http://kb2.adobe.com/jp/cps/510/510769.html))
保存場所や上書き確認をせず Adobe Acrobat DC を立ち上げない設定にしておけば便利です．
さらに，共有フォルダを「監視フォルダ」に指定して立ち上げておけば Linux などからでも使えます．

LaTeX で color パッケージを使って dvips → Distiller で作った PDF
を印刷すると文字がアミカケ状態になってしまうことがあります．
［設定］ → ［ジョブオプション］ → ［カラー］ を「カラーマネジメント用にすべてタグ付け」，作業用スペースの CMYK
を Photoshop 5 Default CMYK にすると直りました（理屈はよくわかってないのですが）([qa:16839](https://okumuralab.org/~okumura/texfaq/qa/16839.html))．<br>
設定ファイルを「プリプレス-日本」にしても直るようです ([qa:18199](https://okumuralab.org/~okumura/texfaq/qa/18199.html))．

Photoshop 5 Default CMYK にすると今度は色が変わってしまうというご指摘をいただきました．
設定ファイルを「プリプレス-日本」にするのがよさそうです．
ただ，文字がアミカケ状態になるのは Adobe Acrobat DC から非 PS プリンターに出力する際の問題のようですので，PS
プリンター（イメージセッタも）では大丈夫かもしれません．

### pdf（のサイズ）を拡大 {#l1c219ce}

下記が目標：

- 元のサイズが 128.0 × 96.0 mm の pdf (beamer作成）のイメージを 2.1865 倍に拡大（ 279.87 × 209.9 mm ）
- 仕上がりペーパーサイズ（A4: 297.04 × 209.9 mm）とし，上記を中央配置した pdf ファイルを作成

方法１：

Acrobat Pro DC（有償ソフト）を用いて対象の pdf ファイルを開き，Adobe PDF プリンターを用いて印刷し新たなpdf ファイルを生成．

- 下記の手順の結果，拡大倍率 205%，左寄せ配置のpdf ファイルが生成された．
    - プリント設定で，用紙サイズ A4．
    - プリントで，Adobe PDF プリンター．ページの拡大／縮小の設定は｢用紙に合わせる」．

## Adobe Acrobat Reader DC /Acrobat DC のヒント {#l5e4219f}

印刷ダイアログの「用紙サイズに合わせてページを縮小」は，特に必要なければオフにします．
これがオンの場合，ほんの少し小さく印刷されることがあります．

「画像として印刷」はオフにします．
どうしても印刷がうまくいかない場合にオンにしますが，ガタガタの印刷になってしまいます．

「2バイトフォントのダウンロード」も通常はオフにします．

文字がきれいに表示されない場合には，うんと拡大してみてください．
ギザギザに見えてくるなら，間違ってビットマップフォントが埋め込まれてしまったのです．
設定を見直してください．
拡大するときれいに見えるなら，Adobe Acrobat Reader DC/Acrobat DC の設定の問題でしょう．
スムージング（アンチエイリアシング），グリーキング（小さい文字を潰して表示すること）の設定を変えてみてください．

## Illustrator のヒント {#j52115c0}

Illustrator 9/10 から EPS
形式で保存するときは，互換性は最新のもの（「バージョン 9」「バージョン 10」）でかまいません．
CMYK ポストスクリプト（レベル 2）にします．
プレビューやサムネールは TeX では不要ですが，他のアプリケーションに埋め込む際にはプレビューがあったほうが便利です．
Word などに埋め込む際には，プレビューのラジオボタンは必ず「不透明」にします．

「フォントデータを含む」チェックボックスはオンにしないと文字化けします．
あるいは，逆にこれをオフにして，フォント名をエディタなどで標準的なものに置き換えるという手もあります．
たとえば Illustrator に附いている小塚明朝 Std M を使った場合，KozMinStd-Medium-90ms-RKSJ-H を
Ryumin-Light-RKSJ-H に置き換えます．

## PDF をパスワードで保護するには {#u51b6592}

- [PDFの暗号化 ～３つの暗号化コマンドの紹介 ～](http://konoyonohana.blog.fc2.com/blog-entry-49.html)

Adobe Acrobat DC を使えばできますが，フリーウェアとして [QPDF](/QPDF/) もあります．

また，OS Xでは印刷するときに「PDFで保存」を選択すれば必要なセキュリティオプションを選択できます．
ただし，Adobe Acrobat Reader DC からはこの操作はできませんので，一度作成したPDFを「プレビュー」「[TeXShop](/TeXShop/)」などで開いてから実行してください．

LaTeX ユーザーの方は，dvipdfmx を用いて，PDF にパスワード保護をつけることができます．
具体的には，

```
dvipdfmx -S filename
```

のように，“-S” オプションをつけます．
あとは所有者のパスワードとユーザーパスワード（PDF ファイルを開いたときに入力させるパスワード）の2つを問われますので，入力して Enter キーを押してください．
なお，確認のために2度入力を求められます．

また，"-P"オプションでセキュリティオプションを細かく指定できます．

- 閲覧・印刷は可能にしてテキスト・グラフィックのコピー（抽出）を禁止する場合

    ```
    dvipdfmx -S -P 0x0004 filename
    ```

- 逆に印刷を不可にしてテキスト・グラフィックのコピー（抽出）を許可する場合

    ```
    dvipdfmx -S -P 0x0010 filename
    ```

- 閲覧のみを許可し，印刷もコピー（抽出）も禁止する場合

    ```
    dvipdfmx -S -P 0x0008 filename
    ```

    なお，デフォルトの「全部許可」のオプションは"0x003C"です．

その他の細かいオプションについては，dvipdfmx.cfgに記載されています．

また，20110307以降のdvipdfmxでは，\specialを用いてセキュリティオプションをtex原稿に埋め込むことができるようになりました．
プリアンブルに記述します．

- \special{pdf:encrypt ownerpw (abc) userpw (xyz) length 128 perm 252}

    ```
             If a parameter is omitted, the default value / empty password
             is used. The special must appear at the beginning of the file.
    ```

- この機能を簡便に利用できるようにするパッケージ[bxpdfcrypt.sty](http://d.hatena.ne.jp/zrbabbler/20110320/1300620094)も存在します．

PDF のパスワードを忘れてしまった場合は

- [PDFCrack](http://pdfcrack.sourceforge.net/)
- [PDFCrack (Windows version)](http://blog.rubypdf.com/pdfcrack/)

を使うと正しいパスワードを教えてくれます．

## RedMon による PDF 作成 {#mbf7209f}

- [WindowsをPostScriptプリンターにしてUbuntuから快適印刷](http://gihyo.jp/admin/serial/01/ubuntu-recipe/0271)
- [pdf仮想プリンタを作成する (Windows 7 Enterprise 64bit)](http://heilman-jinroku.blogspot.jp/2012/09/pdfwindows-7-enterprise-64bit.html)
- [ghostscript と RedMon による PDF プリンタの実現](http://miko.org/~tatyana/tech/Win/pdfprinter.html)

Windows 上で，フリーウェアだけで簡単に PDF が作れます．
[RedMon](http://pages.cs.wisc.edu/~ghost/redmon/) というツールと Ghostscript を組み合わせて使います．

あらかじめ最新版の Ghostscript をインストールしておきます．
フォントを埋め込むように設定しておくといいでしょう．

RedMon を展開して setup.exe を実行します．

次に，コントロールパネルの「プリンターの追加」（「プリンターのインストール」）を実行します．
「ローカルプリンター」「自動的に検出しない」でいいでしょう．
プリンターポートは「新しいポートの作成」で「Redirected Port」を選びます．
ポート名は “RPT1:” のままでかまいません（複数作ると “RPT2:” 等々になります）．
プリンターソフトウェアは，カラーのPSプリンターなら何でもかまいません．
“Apple” “Apple Color LaserWriter 12/600J” でも “Canon” “Canon LBP-2260PS” でも大丈夫でした．
テスト印刷はしません．

「デバイスとプリンター」の「プリンターと FAX」に新しいプリンターアイコンができますので，
適当な名前に変えます（例えば “Ghostscript PDF writer”）．
さらに，右クリックして「プロパティ」の「ポート」タブを選び，上で指定したポート名
（“RPT1:” など）が選ばれている状態で［ポートの構成］を押し，たとえば次のように設定します：

Redirect this port to the program:
: &nbsp;

C:\texlive\2015\bin\win32\rungs.exe

Arguments for this program are:
: -sDEVICE=pdfwrite -dBATCH -dNOPAUSE -dSAFER -sPAPERSIZE=a4 -sOutputFile="%1" -

Output:
: Prompt for filename

Run:
: Minimized

Word などのアプリケーションからこのプリンターに印刷すると，保存するファイル名を聞かれます．
適当な名前（何々.pdf）を入力すれば，PDF ファイルが出来上がります．

同趣向の
[PDFCreator 日本語対応版](http://super777.o.oo7.jp/page004.html)
というフリーソフトウェアがあります．
日本語も通ります．<br>

## その他のリンク {#ed93164a}

- [Wikipedia.en:List_of_PDF_software](https://en.wikipedia.org/wiki/List_of_PDF_software)
- [DTP で TeX を使おう](</DTPとTeX/>)
- [PDFフォント○×チェッカー](http://pdf.printjapan.com/)　これを使うと作成した PDF ファイルにフォントがすべて埋め込まれているかどうかチェックできます．
- [埋め込むか，埋め込まざるか，その設定方法が問題だ（W32TeX 編）](http://d.hatena.ne.jp/zrbabbler/20130110/1357824856)
- [（フォントを）埋め込むか，埋め込まざるか，その設定方法が問題だ（TeX Live 編）](http://d.hatena.ne.jp/zrbabbler/20130115/1358197826), [埋め込むか，埋め込まざるか，の補足](http://d.hatena.ne.jp/zrbabbler/20130119/1358573411), [埋め込むか，埋め込まざるか，後者は問題だ](http://d.hatena.ne.jp/zrbabbler/20130131/1359631758)
- [pdf ファイルのフォント埋め込みについて - JSIAM](http://www.jsiam.org/modules/xfsection/article.php?articleid=57)
- [手書き PDF 入門](http://www.kobu.com/docs/pdf/pdfxhand.htm) (横浜工文社さん)
- [フリーソフトで PDF を作成する方法](http://www.trueroad.jp/pdf-make/) （細田さん）
- [さまざまなPDFの作成技術の概観](http://www.antenna.co.jp/pdf/reference/createpdf.htm) (アンテナハウスさん)
- [テクニカルガイド - PDF作成方法](http://www.iro-dori.net/guide/technical/pdf/)
- [PDFファイル作成方法](http://www.miyagi.kopas.co.jp/guide_JSBBA/guide.html)
- [PDF化の方法（Windows編）](http://www.kenkyuu.net/computer-12)
- [きんどるをはっく - LaTeX編 - YouTube](http://www.youtube.com/watch?v=JQOsVWqLCLM&feature=related) KindleでLaTeXソースをコンパイルし，pdfファイルを生成．できたpdfをKindleで閲覧．
- [LaTeXからPDFをKindleで読みやすく](http://d.hatena.ne.jp/peccu/20111120/latex2kindle)
- [Texに泣きました](http://d.hatena.ne.jp/sonodam/20111019/p1)
- [Good bye EPS.](http://d.hatena.ne.jp/ratbeta/20111211/1323584317)
- [TeXで日本語PDFを生成する方法に詳しい方いますか？](https://groups.google.com/forum/#!topic/web2py-japan/kTRxfjOdAXs)
- [dvipsとdvipdfmxでPDFにヒラギノ書体を埋め込もう](http://www.unilab.gbb60166.jp/tex/hiragino.htm)
- [文庫本作成データ生成ツール・威沙(朱鷺魅)](http://tokimi.sylphid.jp/)
- [TeX+dvipdfmxでiPhone / iPod Touch向けPDF作成（エセ）](http://irusuka.sakura.ne.jp/archive/2012/06/texdvipdfmxiphone_ipod_touchpd.html)
- [LaTeX で原稿を書いてから印刷所に入稿するまで](http://hayamiz.com/~hotchpotch/?p=43)
- [dvipdfmxで作ったPDFをPDF/X-1aにする際にいちばんうまくいく方法](http://tumblr.golden-lucky.net/post/195552930/dvipdfmx-pdf-pdf-x-1a-1)
- [pdfx.sty](http://fugenji.org/thomas/diary/index.php?no=r794)
- [TeXにpng画像を挿入するときの注意](http://qiita.com/items/32ea69d031701463f789)
- [http://www.willus.com/k2pdfopt/](http://www.willus.com/k2pdfopt/)
- [Mac OS XでGhostScriptを使わない，日本語PostScriptファイルのPDF化](http://mechawooser.blogspot.jp/2013/11/mac-os-xghostscriptpostscriptpdf.html)
- [PDF画像を使う（TeX on Win8.1）](http://njmnjm.blogspot.jp/2014/04/pdftex-on-win81.html)
