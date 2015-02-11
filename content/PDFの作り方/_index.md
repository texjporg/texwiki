---
title: "PDFの作り方"
url: "/PDFの作り方/"
date: 2013-09-11T22:44:11Z
bookCollapseSection: true
pukiwiki: "PDFの作り方"
---

# PDFの作り方

## PDF の作り方 {#td997c6f}

投稿論文や予稿で PDF を要求されることが増えました．<br>
ここでは PDF の上手な作り方を解説します．<br>

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## PDF を作るためのソフトウェア {#mde22763}

### TeX から PDF を作成するツール {#d8e4c485}

<em>Adobe Acrobat (Distiller 含む) や dvipdfmx は CJK フォントを埋め込まないと仕様に違反した PDF を生成します。仕様にできるだけ従いたい場合には，これらのソフトを使う場合フォントを可能な限り埋め込むようにしましょう。</em>

- pLaTeX/upLaTeX + dvipdfmx
- pLaTeX/upLaTeX + dvips + ps2pdf (Ghostscript)
- pLaTeX/upLaTeX + dvips + Acrobat Distiller
- [pdfLaTeX](/pdfTeX/)
- [LuaLaTeX](/LuaTeX/)
- LuaJITLaTeX
- [XeLaTeX](/XeTeX/)
- 確認用 PDF ビューア →
    [SumatraPDF](/SumatraPDF/),
    [Skim](/Skim/),
    [Evince](/Evince/),
    [Okular](/Okular/),
    [zathura](/zathura/),
    [qpdfview](/qpdfview/)

詳細は [LaTeX で PDF](</PDFの作り方/#k0e3280f>) をご覧下さい．

### PDF 作成ソフト一覧 {#w48b82bc}

[Wikipedia.ja:PDFソフトウェアの一覧](https://ja.wikipedia.org/wiki/PDF%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%AE%E4%B8%80%E8%A6%A7) を参照．

[Ghostscript](/Ghostscript/) (ps2pdf)，[dvipdfmx](/dvipdfmx/)，[pdfTeX](/pdfTeX/)，[LuaTeX](/LuaTeX/)，LuaJITTeX, [xdvipdfmx](/dvipdfmx/)，([XeTeX](/XeTeX/)) の他に，次のソフトがあります．

- フリーソフトウェア，オープンソース
    - [LibreOffice](/LibreOffice/)/[Apache OpenOffice](/LibreOffice/) は PDF 出力機能を持っています．
    - [PDFCreator](http://www.pdfforge.org/) (オープンソース)
        - [PDFCreator 日本語対応版](http://super777.o.oo7.jp/page004.html)
    - [qvPDF](http://sourceforge.net/projects/qvpdf/) (オープンソース)
    - [CubePDF](http://www.cube-soft.jp/cubepdf/) ([オープンソース](https://github.com/cube-soft/cubepdf))
        - IE 用ツールバーの [Cubeツールバー](http://www.cube-soft.jp/cubetoolbar/) と [Baidu IME](http://ime.baidu.jp/) も含まれているようです．
- フリーウェア（無償）
    - [Google Drive](https://drive.google.com/)
        は PDF 形式で保存できます．
    - [Zoho Docs](http://www.zoho.jp/docs/)
        は PDF 形式で保存できます．
    - [Foxit Reader](http://www.foxitsoftware.com/) (Free)
    - [PDF Download](http://www.pdfdownload.org/) (Free)
        - Web ページを PDF に変換することができます．
    - [BullZip PDF Printer](http://www.bullzip.com/products/pdf/info.php) (Free)
    - [CutePDF Writer](http://www.acrosoftware.com/Products/CutePDF/writer.asp) +
        [Ghostscript](/Ghostscript/) (Free)
        - PDF Writer のページには “Requires PS2PDF converter such as Ghostscript (recommended).” のくだりがあります．
    - [PDFill PDF and Image Writer](http://www.pdfill.com/freewriter.html) (Free)
    - [doPDF](http://www.dopdf.com/ja/) (Free)
        - doPDF は [Ghostscript](/Ghostscript/) を使用していないようです．
    - [PDF24 Creator](http://en.pdf24.org/) (Free)
    - [PrimoPDF](http://www.primopdf.com/) (Free)
        - [日本語版](http://www.xlsoft.com/jp/products/primopdf/)あり．
    - [Perfect PDF Master](http://en.soft-xpansion.eu/products/freeware/master/) (Free)
    - [Tiny PDF](http://www.tinypdf.com/) (Free)
    - [PDF reDirect](http://www.exp-systems.com/) (Free)
        - メニューなどのインターフェイスは英語です．
        - 出力ファイル指定では日本語ファイル名の指定は無理なようです．
    - [ImagePrinter Free](http://code-industry.net/imageprinter.php)
        (Free)
    - [pdf995](http://www.pdf995.com/) (Free)
        - 日本語も通るとのことです (Thanks: 池田さん)．中身は Ghostscript のようです ([qa:27294](https://okumuralab.org/~okumura/texfaq/qa/27294.html), [qa:27345](https://okumuralab.org/~okumura/texfaq/qa/27345.html), [qa:27434](https://okumuralab.org/~okumura/texfaq/qa/27434.html))．
        - One Way Ticket To PDF - pdf995 [(1)](http://pcweb.mycom.co.jp/column/toolexp/008/) [(2)](http://pcweb.mycom.co.jp/column/toolexp/009/) [(3)](http://pcweb.mycom.co.jp/column/toolexp/010/) 使い方の説明が詳しいページ．
    - [RedMon](http://pages.cs.wisc.edu/~ghost/redmon/)
        - [RedMon による PDF 作成](</PDFの作り方/#mbf7209f>)

- 有償，商用，シェアウェア
    - OS X ならプリント機能を持ったどんなアプリケーションからも PDF 出力できます．
    - [Adobe Acrobat](http://www.adobe.com/jp/products/acrobat.html)
        ([Adobe Systems](http://www.adobe.com/jp/))
    - [Microsoft Office](</Microsoft Office/>)
        - Microsoft Office 2013 は PDF 1.7 をサポート
        - Microsoft Office 2010 は PDF 出力を標準でサポート
    - [KINGSOFT Office](http://www.kingsoft.jp/office/) マイクロソフトオフィスと高い互換性をもつ総合オフィスソフト
    - [EIOffice](http://www.eio.jp/) マイクロソフトオフィスと高い互換性をもつ統合オフィス環境
    - [「かんたんPDF」シリーズ](http://www.e-frontier.co.jp/kantan-pdf/)
        ([イーフロンティア](http://www.e-frontier.co.jp/))
    - [いきなりPDF シリーズ](http://www.sourcenext.com/titles/pdf/?i=com_top)
        ([ソースネクスト](http://www.sourcenext.com/))
    - [SkyPDF クライアントソフトウェア](http://www.skycom.jp/product_client.html) ([スカイコム](http://www.skycom.jp/))
    - [JUST PDF 3](http://www.justsystems.com/jp/products/justpdf/) ([ジャストシステム](http://www.justsystems.com/jp/))
    - [瞬簡PDF](http://www.antenna.co.jp/product/#pdf) ([アンテナハウス](http://www.antenna.co.jp/))
    - [pdfFactory](http://www.nsd.co.jp/fineprint/pdf.html) と [FinePrint](http://www.nsd.co.jp/fineprint/) ([NSD](http://www.nsd.co.jp/))
    - [gDoc Creator](http://www.gdoc.com/showcase/creator/) ([Global Graphics Software](http://www.globalgraphics.com/))
    - [Expert PDF Creator](http://www.visagesoft.com/)
    - [CutePDF Professional](http://www.acrosoftware.com/Products/CutePDF/Pro.asp)

### PDF 編集ソフト一覧 {#se764b4f}

- 無償，フリーウェア，オープンソース
    - [pdftk](/pdftk/) PDF ファイルに対して様々なことができるツール
    - [PDFedit](http://pdfedit.petricek.net/) PDF ファイルエディタ
    - [PDFjam](http://www2.warwick.ac.uk/fac/sci/statistics/staff/academic/firth/software/pdfjam) PDF ファイルを抜き出したり，結合したり，回転したりできる
    - [PDF Split and Merge](http://sourceforge.net/projects/pdfsam/) PDF ファイルを分割したり合成したりできる
    - [PDFCrop](http://pdfcrop.sourceforge.net/) (sourceforge): PDF ファイルの余白を削除する（名前も同じですが下記とは別物）
    - [pdfcrop](/pdfcrop/) (CTAN): PDF ファイルの余白を削除する (TeX Live, W32TeX に標準で含まれています)
        - ディレクトリの区切りに \ (バックスラッシュ) を使用すると !!! Error: pdfTeX run failed! といったエラーが発生するのでディレクトリの区切りには / (スラッシュ) を使用してください．
    - [QPDF](/QPDF/) Web 表示用に最適化したり，暗号化したりできます．[W32TeX](/W32TeX/) に含まれています．
    - [Xpdf](/Xpdf/) PDF 操作ツール（テキスト抽出，[PostScript](/PostScript/) や HTML への変換など）．[W32TeX](/W32TeX/) に含まれています．
    - [pdfsizeopt](https://code.google.com/p/pdfsizeopt/) PDF file size optimizer
    - [DiffPDF](http://www.qtrac.eu/diffpdf.html) DiffPDF is used to compare two PDF files—textually or visually.

## LaTeX で PDF {#k0e3280f}

LaTeX のインストールについては
[Windows へのインストール](</Microsoft Windows/>)，
[OS X へのインストール](/Mac/)，
[Linux へのインストール](/Linux/)
などのページをご覧ください．

### 要約 {#gf004f58}

#### 日本語の PDF ファイルを作成する場合 {#j5accec9}

pLaTeX/upLaTeX で日本語の PDF ファイルを作る場合は [dvipdfmx](/dvipdfmx/) を使用します．<br>
具体的には [dvipdfmx の使い方](#rdc781c9) をご覧ください．

dvipdfmx のほかに dvips でいったん PostScript に変換して，[Ghostscript](/Ghostscript/) に付属の ps2pdf または Acrobat Distiller
で PDF に変換する方法もあります．<br>
詳しくは [dvips の使い方](#lf015a28) をご覧ください．

#### 欧文のみの PDF ファイルを作成する場合 {#sb4de6fd}

欧文のみの原稿ならば，pdfLaTeX が簡単です．<br>
[BXcjkjatype](/LaTeX-CJK/) を使用すると pdfLaTeX で日本語の PDF ファイルも作成できます．

#### Unicode を使用して多言語 PDF ファイルを作成する場合 {#ff1f7cd1}

Unicode を使用して多言語 PDF ファイルを作成する場合は，[LuaLaTeX](/LuaTeX/), LuaJITLaTeX, [XeLaTeX](/XeTeX/) がおすすめです．<br>
日本語の PDF ファイルを作成する場合は [LuaTeX-ja](/LuaTeX-ja/) や [ZXjatype](/xeCJK/) を使用します．

#### PDF形式出力を得るLaTeXタイプセットの主な流儀 {#gf004f58}

(1) tex → pdf 

```
pdflatex: tex → pdf (日本語を使用する場合は BXcjkjatype)
lualatex, luajitlatex: tex → pdf (日本語を使用する場合は LuaTeX-ja)
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
(3)-3: ps2pdf (Ghostscript)  or 「Adobe Distiller」: ps → pdf
※ arXiv等ではこれを要求されるようです
※ 挿入図ファイルはEPS形式のみ, pstricks, powerdot 使用可能
```

#### PDF形式ファイル（図）の挿入について {#n20e1824}

- EPS 形式を使用せずに PDF 形式の挿入図を用いて，「pdflatex, lualatex, luajitlatex, xelatex: tex → pdf」または「uplatex + dvipdfmx: tex → dvi → pdf」の流儀で処理させると，Ghostscript を経ることもなく，通常は処理も速い．

- PDF ファイルを画像として取り込むときには，\includegraphics が利用するバウンディングボックスの情報が必要．
    - 一般に \includegraphics で外部ファイルを画像として取り込むには，出力されるページ上で画像の境界がどこに設定されるかを指定する必要がある．この領域のことをバウンディングボックス（bounding box）と呼ぶ．
    - EPS ファイルは，もともと PostScript の画像を埋め込むための形式として開発されたこともあって，バウンディングボックスを表す情報が必ずファイル内に埋め込まれている（BoundingBox）． EPSの取り込みでは，この BoundingBox の値が使われる．EPS 以外を取り込むときは，別の方法でバウンディングボックスの情報を手に入れるしかない．

- dvipdfmx を使う場合は， extractbb というコマンドを使って画像 PDF のバウンディングボックスの値を用意する．

```
$ extractbb foo.pdf
```

- 後述の [extractbbの自動実行](http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?PDF%E3%81%AE%E4%BD%9C%E3%82%8A%E6%96%B9#rf074b4b) も参照．
    - PDF ファイルには，コンテンツが画像であるかどうかに関係なく，ドキュメントのページ上のさまざまな領域を表す 5 種類のボックスが定義されている．
        - CropBox，ArtBox，TrimBox，BleedBox，MediaBox
    - PDF に対して extractbb を実行すると，これら PDF のボックスの値をもとに，バウンディングボックスの値が返される．
        - 詳しくは [http://d.hatena.ne.jp/zrbabbler/20140629/1404010741](http://d.hatena.ne.jp/zrbabbler/20140629/1404010741) を参照．

- \includegraphics のオプションとしてバウンディングボックスの情報を手動で指定することもできる．
    - 詳しくは graphics/graphicx パッケージのマニュアルや『LaTeX コンパニオン』などを参照．

<!-- - pdf ファイルの bounding box 情報 -->
<!-- - - PDF ファイル（Adobe [[Illustrator]] による保存を除く）の bounding box 情報の仕様（正確には bounding-box-like な矩形領域情報は複数種類が定義されている）は，EPS ファイルのそれとは正確には異なる． -->
<!-- - - 従って，PDF ファイル内から普通にbounding box 情報を読み取っても，それは「描かれた図形を囲む最小矩形領域」ではない可能性も存在するので注意が必要．その場合には，計算等によって「最小矩形領域」を算出する過程が必要となる． -->

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

- Type 1 フォントを用い，かつファイル内に埋め込んでください．（Adobe Reader で正常にテキスト検索できるように，妙なテキストエンコーディングも用いないでください．）

- （上記に関して，世の中の PDF ファイルには読んでいて苦労をするものが案外多いようです．）

### dvipdfmx の使い方 {#rdc781c9}

[dvipdfmx](/dvipdfmx/) は TeX 出力（DVI ファイル）を PDF に変換するフリーソフトウェアです．<br>
『［改訂第6版］ LaTeX2e 美文書作成入門』の電子版は dvipdfmx で PDF 化しました．<br>
dvipdfmx は TeX Live, W32TeX に含まれています．<br>

使い方は，Windows PowerShell またはコマンド プロンプトなどで

```
dvipdfmx foo.dvi
```

と打ち込むだけです．<br>
これで foo.dvi が foo.pdf に変換されます．<br>
コマンドラインを使用するのが苦手なかたは [LyX](/LyX/), [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/)
などで dvipdfmx を使うように設定できます．<br>

以下では dvipdfmx について説明します．<br>

#### フォントの埋め込み設定 {#z0e1001a}

dvipdfmx がフォントを埋め込むかどうかは設定によります．

まず欧文フォントですが，TeX Live ではデフォルトで欧文フォントを埋め込みますが，W32TeX では通常は PostScript Level 1 での基本14書体は埋め込みません．<br>
W32TeX で基本14書体を埋め込むには

```
dvipdfmx -f dlbase14.map ファイル名
```

のようにして起動してください．<br>
あるいはソースに

```
\AtBeginDvi{\special{pdf:mapfile dlbase14.map}}
```

なる special コマンドを書いておいてもよいです．(\specialの用法について ([qa:55664](https://okumuralab.org/~okumura/texfaq/qa/55664.html), [qa:55665](https://okumuralab.org/~okumura/texfaq/qa/55665.html), [qa:55672](https://okumuralab.org/~okumura/texfaq/qa/55672.html)))

次に和文フォントですが，TeX Live はデフォルトで和文フォントを埋め込みませんが，W32TeX はデフォルトでは IPAexMincho・IPAexGothic を埋め込みます．<br>
TeX Live の場合は IPAexフォントを埋め込む場合は
Windows PowerShell またはコマンド プロンプトから

```
kanji-config-updmap-sys ipaex
```

または

```
kanji-config-updmap ipaex
```

を実行します．<br>

W32TeX の場合は和文フォントはデフォルトでは IPAexMincho・IPAexGothic を埋め込みます．<br>

$TEXMF/fonts/map/dvipdfmx/base/cid-x.map に

```
%%
%% upTeX examples
%%

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

なお，dvipdfmx はフォントを埋め込まないと仕様に違反した PDF を生成するようです．<br>
日本語版 dvipdfm にはこの問題はないようです．<br>
（参照：[PDF1.7 仕様書](https://wwwimages2.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf#page=285)
The Identity-H and Identity-V CMaps shall not be used with a non-embedded font. Only standardized character 
sets may be used.）(--> これは ISO 32000-1 で加わった仕様で，PDF Reference, Sixth edition, version 1.7 とそれ以前の PDF Reference にはそのような記述はありません．このため ISO 32000-1 は過去の PDF のバージョンと非互換です．Acrobat Distiller 等も同様の問題を抱えているようです．)

dvipdfmx は PDF，PNG，JPEG，MetaPost 出力，EPS を挿入できます．<br>
EPS 挿入には外部プログラムとして Ghostscript が必要です．<br>
ベクトル画像は PDF 形式，ラスター画像は PNG または JPEG 形式で挿入するのがいいでしょう．<br>

#### extractbb の自動実行 {#rf074b4b}

[W32TeX](/W32TeX/) や [美文書第6版](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/) からインストールした場合は texmf.cnf の shell_escape_commands に extractbb が指定されていて，

```
\usepackage[dvipdfmx]{graphicx}
```

のようにすると，自動的に extractbb が実行されるので，あらかじめ extractbb を実行する必要はありません．<br>

[TeX Live](</TeX Live/>) 2014, [MacTeX](/Mac/#mactex)-2014 では extractbb の実行は自動化されていません．<br>
自動化したい場合は

- Windows の場合は C:\texlive\texmf-local\web2c\texmf.cnf
- OS X, Linux の場合は /usr/local/texlive/texmf-local/web2c/texmf.cnf

に書き加えます．

```
sudo nano /usr/local/texlive/texmf-local/web2c/texmf.cnf　（ここでは例としてnanoで開きました）
```

などとして，

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,xindy,\
mpost,upmpost,\
repstopdf,epspdf,extractbb
```

を書き足して管理者権限で

```
mktexlsr
```

を実行します．

また，LaTeX ファイル中では

```
\usepackage[dvipdfmx]{graphicx}
...
\includegraphics[width=8cm]{zu.png}
```

のようにします．<br>
graphicx パッケージを読み込む際には次のように必ず dvipdfmx オプションを与えます．<br>

```
\usepackage[dvipdfmx]{graphicx}
```

これを LaTeX と dvipdfmx で処理します．<br>

Ghostscript で PDF を作る場合，正しい設定をすれば和文フォントを埋め込まずにきれいな EPS ファイルができます．<br>
詳しくは [Ghostscript](/Ghostscript/)
のページをご覧ください．

Distiller をコマンドラインから使いたい場合，
OS X では

```
$ open -a 'Acrobat Distiller.app' ファイル名
```

とします（alias を設定しておくと便利でしょう）．

dvipdfmx で PSfrag を使うには，まず \pagestyle{empty}
で図と PSfrag だけのページを作り，“dvips -Ppdf -E” で
いったん EPS にしてから，それをメインの LaTeX ファイルに挿入します．<br>
ちょっと面倒ですので，
[overpic](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/overpic.html)
や
[labelfig](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/labelfig.html)
を使うのがいいでしょう．<br>

dvipdfmx は PFB 形式の Type 1 フォントしか使えません．<br>
PFA → PFB 変換には [FontForge](http://fontforge.sourceforge.net/) が使えそうです

#### BoundingBox の指定 → 問題が発生する場合は extractbb を使用する {#z06f5ff9}

手動で BoundingBox を直接指定することも可能です．<br>

BoundingBox を直接指定する場合は

```
\includegraphics[bb=0 0 横ポイント数 縦ポイント数,width=幅]{ファイル名}
```

を挿入します．

なお “bb” とは “bounding box” を意味しています．<br>
bb の単位は既定では bp (big point) です．<br>

- 1in = 72bp = 72.27pt = 25.40mm = 2.540 cm
- [https://twitter.com/zr_tex8r/status/463680032204791808](https://twitter.com/zr_tex8r/status/463680032204791808)
- [BoundingBox について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=998)
- [用語・略語集](</用語・略語集/#bp>)
- [Wikipedia.ja:ポイント](https://ja.wikipedia.org/wiki/%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88)
- [単位](http://www.math.kobe-u.ac.jp/~kodama/tips-measure.html)
- [TeXの10ptとDTPソフトの10ptは違う](http://www.dab.hi-ho.ne.jp/t-wata/tex/10pt.html)

bb で直接指定する方法は

- 値を指定する手間がかかる
- 間違った値を指定してしまうと適切に表示されなくなる可能性がある

といった問題が発生することがあります．<br>
問題が発生する場合は bb で直接指定せずに extractbb を使用してください．<br>

TeX Live, W32TeX には dvipdfmx 用の BoundingBox を作成する extractbb というツールが付属しています．<br>

```
extractbb hoge.pdf
```

とすると hoge.xbb というファイルが生成されます．<br>
extractbb は TeX ソースの本文に記述するものではなく，ターミナルまたはコマンドプロンプトから実行するコマンドです．<br>

extractbb を使用して

```
extractbb:warning: Streams with DecodeParms not supported.
extractbb:warning: Cannot parse cross-reference stream.
extractbb:warning: Error while parsing PDF file.
extractbb:warning: ./hoge.pdf does not look like a PDF file...
```

などとエラーが表示されて .xbb ファイルが出力されない場合は TeX Live 2015 または W32TeX \[2014/08/14\] 以降の dvipdfmx にアップグレードしてください．<br>

- [「dvipdfmxと3つのバッド・ノウハウ」に関するアレ(1)](http://d.hatena.ne.jp/zrbabbler/20141109/1415525804), [「dvipdfmxと3つのバッド・ノウハウ」に関するアレ(2)](http://d.hatena.ne.jp/zrbabbler/20141110/1415632001)
- [dvipdfmxと3つのバッド・ノウハウ](http://www.slideshare.net/zr-tex8r/yato-texconf14)
- [xbbファイルが作成できない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=817)
- [inclusion of images and dvipdfmx](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1326)
- [実験レポート：LaTeX + dvipdfmx による画像ファイル挿入](http://d.hatena.ne.jp/zrbabbler/20140614/1402762227)
- [dvipdfmx で画像する時に色々とアレな話](http://d.hatena.ne.jp/zrbabbler/20140814/1408040710)
- [bbox とか ﾅﾝﾄｶBox に関する補足](http://d.hatena.ne.jp/zrbabbler/20140817/1408239981)

### dvips の使い方 {#lf015a28}

dvips は TeX の出力（DVI ファイル）を PostScript (PS) ファイルに変換するツールです．

dvips で変換した PS ファイルは Ghostscript 付属の ps2pdf
コマンドで PDF ファイルに変換できます．<br>
きちんと設定すれば，日本語部分もきれいなアウトラインで出力されます．<br>
処理速度や使いやすさの観点では，dvips + ps2pdf よりも dvipdfmx のほうがいいかもしれません．<br>

Acrobat をお持ちであればダブルクリックすれば，Acrobat Distiller が PDF に変換してくれます．<br>
dvipdfmx を使うほうがトラブルは少ないかもしれません．<br>

foo.dvi という DVI ファイルを PostScript ファイル foo.ps
に変換するには，W32TeX では Windows PowerShell またはコマンド プロンプトで次のように打ち込みます．<br>

```
dvips -Ppdf -o foo.ps foo.dvi
```

ハイパーリンクを埋め込んであるなら dvips -Ppdf -z ... のように “-z” も付けます．<br>
TeX Live では，“-Ppdf” オプションは不要です．<br>
デフォルトで，pk フォントではなく Type 1 フォントを利用できます．<br>

欧文 Base14 フォントを埋め込む場合は “-Pdl” といったオプションにします．

通常のドキュメントクラスでは，a4paper オプションを付けても，Acrobat Distiller
のデフォルト設定では用紙がレターサイズになってしまいます．<br>
A4 にするには，Distiller のジョブオプションの設定でページサイズを変えるか，あるいは dvips
に “-t a4” というオプションを付けてください（→ [詳細](/dvips/)）．<br>
[新ドキュメントクラス](/jsclasses/)なら
\documentclass\[uplatex,a4paper,papersize\]{jsarticle}
のように “papersize” オプションを付けると dvips が用紙サイズを認識してくれます．<br>

図を挿入する際には

```
\usepackage[dvips]{graphicx}
```

のように dvips オプションを指定します．<br>
図として EPS を挿入できます．<br>

### 図の描き方 {#yca8607c}

<div style="text-align:right">See <a href="/TeX入門/図表/">TeX入門/図表</a>, <a href="/描画・グラフツール/">描画・グラフツール</a></div>

せっかく PDF にするのなら図はペイント系（ラスターグラフィックツール）ではなくドロー系（ベクトルグラフィックツール）で描きましょう．<br>
ペイント系は拡大するとギザギザになりますが，ドロー系はいくら拡大しても滑らかです．<br>

フリーソフトウェアでは
[Inkscape](/Inkscape/)，[LibreOffice](/LibreOffice/)/[Apache OpenOffice](/LibreOffice/)
Draw
などがドロー系，[GIMP](https://ja.wikipedia.org/wiki/GIMP) などがペイント系です．<br>
ラスターイメージとして出力するなら
[Blender](https://ja.wikipedia.org/wiki/Blender) も使えます．<br>

商品では [Illustrator](/Illustrator/) や Visio がドロー系，Photoshop がペイント系です．<br>

ドロー系ソフトからは PDF 形式または EPS (Encapsulated PostScript) 形式で保存しておきます．<br>
dvipdfmx, pdfTeX/pdfLaTeX, LuaTeX/LuaLaTeX, LuaJITTeX/LuaJITLaTeX, XeTeX/XeLaTeX を使う場合には PDF のほうが便利でしょう．<br>

[gnuplot](/gnuplot/) などのグラフツールも PDF 形式や EPS 形式で出力できます．([28.6 グラフを画像として保存する | HWB](http://hwb.ecc.u-tokyo.ac.jp/current/applications/gnuplot/output/), [GNUPLOTを用いたグラフ作成](http://www.cse.kyoto-su.ac.jp/~oomoto/lecture/program/gnuplot/gnuplot.html), [gnuplotの出力をマージンを調整してpdfに変換する](http://d.hatena.ne.jp/yambi/20130717/1374064507), [gnuplot で pdf 出力するときの注意](http://blog.livedoor.jp/ooboofo3/archives/53922133.html))

Word や DTP ソフトに挿入するときは EPS 保存時にプレビュー用のラスター画像を付けておくと便利です．<br>
画面や非 PostScript プリンターへの出力ではラスター画像が使われ，PostScript
プリンター（Distiller も含む）への出力にはベクトル画像が使われます．<br>
LaTeX に挿入するときはプレビュー画像は不要です．<br>

画面キャプチャーなどのラスター画像は，dvips などを使って PS を作るなら，EPS
に変換しておくといいでしょう．<br>
Illustrator や Acrobat などに貼り付けたり開いたりしてから EPS
で保存することもできますし，[ImageMagick](http://www.imagemagick.org/)
や [sam2p](https://code.google.com/p/sam2p/)
などのツールを使う方法もあります．<br>

PostScript Level 2 の EPS は JPEG 形式を含んでいますので，
正しいツールを使えば，サイズをあまり変えずに JPEG → EPS 変換できます．<br>
詳しくは「[変換ツール](</変換ツール/>)」の項目をご覧ください．<br>

ドロー系の図には太さ 0.1 mm 以下の線を含めないでください．<br>
高解像度のイメージセッタで出力すると見えなくなってしまいます．<br>

写真などのラスター画像の場合，解像度は 300&ndash;600 dpi でかまいません．<br>

dvipdfmx を使う場合には，ラスター画像は EPS より PNG か JPEG で保存しておくほうが楽です．<br>

<!-- ***DVI/PDF 両形式を作成する場合の，画像の用意の仕方 [#l580b75f] -->
<!-- RIGHT:[[qa:32795]] -->
<!--  -->
<!-- -PDF 画像のみを用意する~ -->
<!-- → PDF 画像は DVIOUT で表示されるが，複雑な画像の場合には表示がおかしくなる ([[qa:32767]], [[qa:32769]]) -->
<!--  -->
<!-- -EPS 画像のみを用意する~ -->
<!-- → dvipdfm 時に ghostscript (or distiller) を呼び出して変換処理をするのに時間がかかる -->
<!--  -->
<!-- -PDF, EPS 両方を用意して使い分ける（DVI ファイルに EPS 画像，PDF ファイルに PDF 画像）．~ -->
<!-- → xbb ファイルの作成が面倒．また \includegraphics で画像の使い分けをする分岐命令が面倒，煩雑．([[qa:32749]]) -->
<!-- - -texmf.cnf の shell_escape_commands に extractbb を追加する~ -->
<!-- → xbb ファイルの作成が不要となる -->
<!-- - -\usepackage[dvipdfmx]{graphicx} -->
<!-- → いちいち EPS/PDF 画像の選択を \includegraphics 命令の分岐で行う必要がなくなる -->
<!--  -->
<!-- >いずれにせよ，''画像の EPS 版と PDF 版との間の整合性''には充分な注意を払う必要がある． -->

### Windows のソフトから EPS ファイルを作るには {#s66ac89b}

EPS 形式での書き出しに対応していないソフトでも，Windows の PostScript
プリンタードライバーをインストールして「ファイルに印刷」すれば PostScript
形式で保存できます．

PostScript プリンタードライバーは
Windows PowerShell またはコマンド プロンプトから

```
control printers
```

を実行して［デバイスとプリンター］画面を表示します．<br>
「プリンターの追加」をクリックしてインストールできます．<br>
インストール時にローカルプリンター（出力先 FILE:）としてください．<br>
適当なプリンター記述 (PPD) ファイルがないなら，Generic PostScript Printer
としてインストールします．

EPS 出力に設定するには，
Windows PowerShell またはコマンド プロンプトから

```
control printers
```

を実行して［デバイスとプリンター］画面を表示します．<br>
「プリンターと FAX」で PostScript Printer
を右クリックして「印刷設定」を選び，「レイアウト」→「詳細設定」 (または 「プリンターのプロパティ」を選び，「全般」→「基本設定」→「レイアウト」→「詳細設定」) で「ドキュメントのオプション」→「PostScript オプション」→「PostScript 出力オプション」を「EPS (Encapsulated PostScript)」にします．

保存するときはファイル名の拡張子を “.eps” にします（例： test.eps）．

しかし，この方法では BoundingBox （図の外枠の情報）が間違って附き，余白が広くなりすぎることがよくあります．<br>
バウンディングボックスを直すには次のどちらかの方法を使います．<br>

- テキストエディタで開き，先頭附近の “%%BoundingBox: 10 20 300 400” の
    ような行を見つけ，四つの値（それぞれ左下隅の x，y 座標，右上隅の x，y
    座標，いずれも単位は 1/72 inch）を修正する

- Windows の GSview というソフトでバウンディングボックスを修正する

以上の手順を簡単にする [Metafile to EPS Converter](</LyX/使い方/#s31f9c03>) (フリーソフト) があります．<br>
たいへん使い勝手の良いソフトです．<br>

また，「[Windows での TeX 用仮想 EPS プリンターの作成方法](http://keijisaito.info/arc/tex/v_eps_printer.htm)」
では，Windows 同梱のドライバーから仮想 EPS プリンターを作る方法が書いてあります．<br>
「[Excel グラフをきれいに TeX ⇒ PDF へ入れ込む方法](http://keijisaito.info/arc/tex/vector_pdf.htm)」，
「[画像や写真を TeX ⇒ PDF へ入れ込む方法](http://keijisaito.info/arc/tex/picture_eps.htm)」では，
それぞれベクトル形式のグラフ，ラスター形式の画像を埋め込む手順をスクリーンショット附きで説明しています．<br>

Windows の PS プリンタードライバーではなかなか質の高い EPS ができないものです．<br>
crop しても BoundingBox の外を侵蝕するような EPS を出力することもあるようです．<br>
いったん Distiller で PDF に変換して Acrobat （商品）で開き，必要な部分だけ切り抜き，EPS
形式で保存し直すほうがうまくいくかもしれません．<br>
フリーなツールでは
[ps2eps](http://www.tm.uka.de/~bless/ps2eps)
が使えそうです．<br>
PS プリンタードライバーの出力を直接 ps2eps に通す方法が[こちら](http://www.iir.me.ynu.ac.jp/~maeda/comp/epstips.html)に紹介されています．<br>

Visio 2003 以降は [EPS 出力がサポートされなくなりました](http://office.microsoft.com/ja-jp/visio/HA010857571041.aspx)が，
[Metafile to EPS Converter](</LyX/使い方/#s31f9c03>) を使うと EPS ファイルに変換できます．

[LibreOffice](/LibreOffice/)/[Apache OpenOffice](/LibreOffice/) の Draw には，EPS エクスポート機能があります．<br>
コピー＆ペーストで Draw に貼り付け，Ctrl-A で全選択して，ファイル→エクスポートでファイル書式を EPS にすると，EPS 形式で出力できます．<br>
Ctrl-A で全選択しておかないと， BoundingBox がページ全体になってしまうので，お忘れなく．<br>

### OS X のソフトから画像を挿入するには {#g035cf1f}

OS X では，どんなソフトからでも「印刷」メニューで PDF が作れます．<br>
これをうまく使えば EPS を経由せずに高品位の画像が挿入できます．<br>

必ず1ページだけを PDF として印刷してください．<br>

これ（zu.pdf とします）を次のようにして挿入します．<br>

```
\documentclass[uplatex]{jsarticle}
\usepackage[dvipdfmx]{graphicx}
\begin{document}
...
\includegraphics[width=5cm]{zu.pdf}
...
\end{document}
```

これで ptex2pdf で PDF にして，「プレビュー」または Adobe Reader
で印刷します．<br>
あるいは [LyX](/LyX/), [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), [TeXShop](/TeXShop/)
などを使えばボタンをクリックするだけで PDF ができます．<br>

<!-- **Computer Modern Type 1 フォント [#k3985a6a] -->
<!--  -->
<!-- W32TeX では Computer Modern Type 1 フォントは&ref(http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/t1fonts.tar.xz); に含まれています． -->
<!--  -->
<!-- 無償で配布されている Computer Modern Type 1 -->
<!-- フォントはすべてのサイズがそろっているわけではありません．~ -->
<!-- 次のように type1cm -->
<!-- パッケージを使って，存在しない Type 1 -->
<!-- フォントは存在するものを拡大・縮小して使うようにする必要があります． -->
<!--  -->
<!-- \usepackage{type1cm} -->

## Word で PDF {#l3ff32fb}

Microsoft 製品は，なるべく最新のアップデートを適用しておきましょう．<br>
Microsoft Office は [Windows Update 利用の手順](http://www.microsoft.com/ja-jp/security/pc-security/j_musteps.aspx)を参照して Office をアップデートします．<br>

Word は，同じファイルを開いても，同じように書いても，バージョン，設定，テンプレート，プリンター[^1]，その他の環境の違いによって，レイアウトが変わってしまうという嫌な特徴を持っています．<br>
正しい方法で PDF にしておけば，レイアウトの崩れは防げます．<br>

Windows PowerShell またはコマンド プロンプトから

```
control printers
```

を実行して［デバイスとプリンター］画面を表示します．<br>
［プリンターと FAX］にある「Adobe PDF」プリンターが「通常使うプリンターに設定」されていることを確認します．<br>

テンプレートが指定されている場合には，それをユーザテンプレート用のフォルダに入れておきます．<br>
ユーザテンプレート用のフォルダは，Word
を立ち上げて ［ツール］ → ［オプション］ → ［規定のフォルダ］ で確認できます
（見にくい場合には，とりあえず［変更］を押してみるといいでしょう）．<br>

Word を立ち上げます．<br>
テンプレートがあるなら「新規作成」でテンプレート名を指定します．<br>
テンプレートがないなら，［ファイル］ → ［ページ設定］ で決められた値を設定します．<br>
用紙は，日欧では A4，米国ではレターサイズが一般的です．<br>

欧文論文なら，すぐにフォントを欧文フォントに切り替えます．<br>
理系論文用の欧文フォントとしては，本文は Times New Roman，見出しは Arial
が一般的です．<br>
ちなみに Word で Century
を使うとイタリック体が本来のイタリック体ではなく機械的に斜めにしたものになってしまいます．<br>

欧文論文では全角文字は一切使ってはいけません．<br>
記号類は Symbol フォントを使いましょう．<br>

欧文・和文を問わず，ローマ数字は I，II，III，IV，V のように欧文アルファベットを並べて表します．<br>

和文論文なら，本文は「リュウミンL-KL」，見出しは「中ゴシックBBB」にします．<br>
これらのフォントが一覧に現れない場合には，「Acrobat
Distiller」プリンターが「通常使うプリンターに設定」されていないことが考えられます．<br>

和文フォントの文字飾り（ボールド，斜体，ワードアートなど）は使ってはいけません．<br>

挿入する図についても，フォントは正しく設定しましょう．<br>
Excel のグラフ軸の数字が「ＭＳ Ｐゴシック」のままになっていませんか．<br>

完成したら，［ファイル］ → ［印刷］ でプリンター名が Acrobat Distiller になっていることを確認し，印刷します．<br>
PDF ファイル名を聞いてきますので，フォルダを確認し，半角英数字でファイル名を付けます．<br>

Adobe Reader （または Adobe Acrobat） が立ち上がりますので，
拡大して文字がギザギザにならないことを確認します．<br>
また，全ページをスクロールし表示した後で，［ファイル］ → ［プロパティ］ → ［フォント］
ですべての使用フォントを確認します．<br>
確認項目：

- 欧文フォントの「実際のフォント」（4.0 では「使用フォント」）が（Times，Helvetica
    などの PostScript Level 1 での基本14書体を除いて）すべて「埋め込みサブセット」または「埋め込み」となっている

- 和文の場合には，和文フォントの「オリジナルフォント」（4.0 では「PDFのフォント」）が「リュウミンL-KL」と「中ゴシックBBB」になっている

紙に印刷するには，Word ではなく Adobe Reader （または Adobe Acrobat） の印刷メニューで，プリンター名を物理的なプリンターに変えてから印刷します．<br>
印刷ダイアログの「用紙サイズに合わせてページを縮小」はデフォルトでオンになっているようですが，等サイズで印刷するときはオフにしておかないと微妙に縮小されることがあります．<br>
「画像として印刷」もオフにしておかないとガタガタの印刷になります．<br>
「2バイトフォントのダウンロード」も通常はオフにします．<br>

Word の極細 (0.25 pt) の罫線は使わないほうが無難です．<br>
画面では見えても，印刷すると飛んでしまうことがあります．<br>
これは他のソフトでも同様です．<br>

なお，PDF ではなく Word のファイルとして保存する場合には，プリンターフォントではなく Windows 標準の TrueType フォントを使わないと，開いた環境により文字がずれてしまいます．<br>

「リュウミンL-KL」「中ゴシックBBB」にする意味ですが，こうしておけば埋め込まなくても Reader
が適当なフォントに置き換えてくれるし，PDF
そのものが非常に軽くなるし，論文集などで論文ごとに違う和文フォントになるということが避けられるということだったのですが，ネットの高速化で，軽い PDF
への要求も以前ほどではありませんし，逆に学会で配布する PDF
は海外のパソコンでそのまま開けるように和文フォントを埋め込んではどうかといった話もあるほどです（統一したフォントを埋め込まないと論文ごとにばらつきが出ては困りますが）．<br>
そういうわけで，「いっそのことすべて埋め込んでくれ」という指示もこれからはありかな，という気もします（「ＭＳ 明朝を埋め込むこと」といった指示は Linux/OS X ユーザに酷ですが）．<br>

なお，これは論文の話で，単独の書籍などであれば，著者の好きなフォントを埋め込んでおくほうがあとでトラブルがないでしょう．<br>

- 【参考リンク】[情報教育Wiki:Wordの正しい使い方](https://okumuralab.org/~okumura/compedu/?Word%E3%81%AE%E6%AD%A3%E3%81%97%E3%81%84%E4%BD%BF%E3%81%84%E6%96%B9)

## Adobe Acrobat で PDF {#w441bc87}

### Adobe Reader と Adobe Acrobat の違い {#c982e6e9}

[Adobe Reader](</Adobe Reader/>) は Adobe Acrobat から表示・印刷機能だけを抜き出したもので，[Adobe Reader のダウンロードサイト](http://get.adobe.com/jp/reader/)から無償で入手できます．<br>
[Adobe Acrobat](http://www.adobe.com/jp/products/acrobat.html) は
Acrobat Distiller を含む製品（商品）です．<br>
値段は [Adobe Systems](http://www.adobe.com/jp/) で確認してください．<br>

その機能によって製品が幾つか存在しています．<br>
参考：「[Adobe - Adobe Acrobatファミリー： 製品比較](http://www.adobe.com/jp/products/acrobat/product-comparison.html)」<br>

- Adobe Reader XI — PDF の閲覧と印刷のみ．無償配布されている．
- Adobe Acrobat XI
    - Adobe Acrobat XI Standard — PDF の編集が可能
    - Adobe Acrobat XI Pro — 様々な PDF の編集が可能

Adobe Acrobat があれば Adobe Reader がなくても PDF ファイルを表示できます．<br>

Adobe 製品は，なるべく最新のアップデートを適用しておきましょう．<br>
アップデートについては[アドビシステムズ](http://www.adobe.com/jp/)の
ダウンロードのページをご覧ください．<br>

### Acrobat Distiller の設定 {#e5e57a76}

PDFWriter ではなく Distiller を使います．

Windows PowerShell またはコマンド プロンプトから

```
control printers
```

を実行して［デバイスとプリンター］画面を表示します．<br>
［プリンターと FAX］にある「Adobe PDF」プリンターアイコンを右クリックし，「通常使うプリンターに設定」します．<br>

「Adobe PDF」プリンターアイコンを右クリックし，［印刷設定］ → ［レイアウト］ → ［詳細設定］ (または［プリンターのプロパティ］ → ［全般］ → ［基本設定］ → ［レイアウト］ → ［詳細設定］) で細かい設定をします．

［TrueTypeフォント］の項目は，デフォルトでは「デバイス フォントと代替」になっています．<br>
このままのほうが軽い PDF ファイルができます．<br>
論文のオンライン投稿ではこのままにしておきます．<br>
デザインものなどで，まったく同じフォントで出力してほしいなら，ここを「ソフト フォントとしてダウンロード」にします．<br>

また，PostScript オプションの左の \[+\] をクリックし，［PostScript出力オプション］を「エラーが軽減するよう最適化」にするといいでしょう．<br>
その下の TrueTypeフォントダウンロードオプションは「自動」または「Native TrueType」にしておきます．<br>

Distiller を立ち上げます．<br>

Distiller の［ファイル］ → ［環境設定］で「PDFファイルの保存先を確認」をオンにします．<br>
「Distillerで変換後にPDFを表示」もオンにしておくと確認のため便利です．<br>

まず，Acrobat XI では［Adobe PDF 設定］の［デフォルト設定］で選びます．<br>
Web 用なら 最小ファイルサイズ，論文提出用には低品位でよければ 標準，より高品位にするには 高品質印刷にすればいいでしょう．<br>
なお，Acrobat は最小ファイルサイズ設定にしてフォントを埋め込まないようにすると仕様に違反した PDF を生成するようです．<br>
（参照：[PDF1.7 仕様書](https://wwwimages2.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf#page=285)
The Identity-H and Identity-V CMaps shall not be used with a non-embedded font. Only standardized character 
sets may be used.）

プレス品質は論文では必要ないでしょう．<br>

［設定］ → ［Adobe PDF 設定\] の \[編集］は次のように設定します．<br>

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

以上の設定内容を「名前を付けて保存」します．<br>
ファイル名は例えば “A4.joboptions” のようにします．<br>

以上の設定が終われば Distiller
は［×］で閉じておいてかまいませんが，二つ同時には立ち上がらないようにできていますので，立ち上げたままにしておけば起動時間が節約できます．<br>

LaTeX + dvips で作った PS ファイルを変換する際に “Warning: Ryumin-Light not found, using Font Substitution. Font cannot be embedded.” などと
いう警告が出ますが，無視してかまいません．<br>
むしろこのように出るほうがフォントが埋め込まれず軽い PDF になります．<br>
この PDF を開くと，Ryumin-Light がなければ小塚明朝またはＭＳ 明朝で表示されます．<br>
これに対して，“XXX not found, using Courier.” というメッセージはエラーです．<br>

- ただし，フォントが埋め込まれないと仕様に違反した PDF になることがあるようです．<br>

Distiller を Windows PowerShell またはコマンド プロンプトから使うには

```
start hoge.ps
```

と打ち込みます．<br>
拡張子 “.ps” と関連づけられていれば Distiller が起動するか，すでに起動している Distiller が処理を始めます．<br>
Distiller に関連付けしたくない場合は Distiller に入力/出力ファイル名を指定してコマンドラインから実行することもできます．(→ [Distillerを入力/出力ファイル名を指定して起動する方法について](http://kb2.adobe.com/jp/cps/510/510769.html))<br>
保存場所や上書き確認をせず Acrobat を立ち上げない設定にしておけば便利です．<br>
さらに，共有フォルダを「監視フォルダ」に指定して立ち上げておけば Linux などからでも使えます．<br>

LaTeX で color パッケージを使って dvips → Distiller で作った PDF
を印刷すると文字がアミカケ状態になってしまうことがあります．<br>
［設定］ → ［ジョブオプション］ → ［カラー］ を「カラーマネジメント用にすべてタグ付け」，作業用スペースの CMYK
を Photoshop 5 Default CMYK にすると直りました（理屈はよくわかってないのですが）([qa:16839](https://okumuralab.org/~okumura/texfaq/qa/16839.html))．<br>
設定ファイルを「プリプレス-日本」にしても直るようです ([qa:18199](https://okumuralab.org/~okumura/texfaq/qa/18199.html))．<br>

Photoshop 5 Default CMYK にすると今度は色が変わってしまうというご指摘をいただきました．<br>
設定ファイルを「プリプレス-日本」にするのがよさそうです．<br>
ただ，文字がアミカケ状態になるのは Acrobat から非 PS プリンターに出力する際の問題のようですので，PS
プリンター（イメージセッタも）では大丈夫かもしれません．<br>

### pdf（のサイズ）を拡大 {#l1c219ce}

下記が目標：

- 元のサイズが 128.0 × 96.0 mm の pdf (beamer作成）のイメージを 2.1865 倍に拡大（ 279.87 × 209.9 mm ）
- 仕上がりペーパーサイズ（A4: 297.04 × 209.9 mm）とし，上記を中央配置した pdf ファイルを作成

方法１：

Acrobat Pro（有償ソフト）を用いて対象の pdf ファイルを開き，Adobe PDF プリンターを用いて印刷し新たなpdf ファイルを生成．

- 下記の手順の結果，拡大倍率 205%，左寄せ配置のpdf ファイルが生成された．
    - プリント設定で，用紙サイズ A4．
    - プリントで，Adobe PDF プリンター．ページの拡大／縮小の設定は｢用紙に合わせる」．

## Adobe Reader/Acrobat のヒント {#l5e4219f}

印刷ダイアログの「用紙サイズに合わせてページを縮小」は，特に必要なければオフにします．<br>
これがオンの場合，ほんの少し小さく印刷されることがあります．<br>

「画像として印刷」はオフにします．<br>
どうしても印刷がうまくいかない場合にオンにしますが，ガタガタの印刷になってしまいます．<br>

「2バイトフォントのダウンロード」も通常はオフにします．<br>

文字がきれいに表示されない場合には，うんと拡大してみてください．<br>
ギザギザに見えてくるなら，間違ってビットマップフォントが埋め込まれてしまったのです．<br>
設定を見直してください．<br>
拡大するときれいに見えるなら，Adobe Reader/Acrobat の設定の問題でしょう．<br>
スムージング（アンチエイリアシング），グリーキング（小さい文字を潰して表示すること）の設定を変えてみてください．<br>

## Illustrator のヒント {#j52115c0}

Illustrator 9/10 から EPS
形式で保存するときは，互換性は最新のもの（「バージョン 9」「バージョン 10」）でかまいません．<br>
CMYK ポストスクリプト（レベル 2）にします．<br>
プレビューやサムネールは TeX では不要ですが，他のアプリケーションに埋め込む際にはプレビューがあったほうが便利です．<br>
Word などに埋め込む際には，プレビューのラジオボタンは必ず「不透明」にします．<br>

「フォントデータを含む」チェックボックスはオンにしないと文字化けします．<br>
あるいは，逆にこれをオフにして，フォント名をエディタなどで標準的なものに置き換えるという手もあります．<br>
たとえば Illustrator に附いている小塚明朝 Std M を使った場合，KozMinStd-Medium-90ms-RKSJ-H を
Ryumin-Light-RKSJ-H に置き換えます．<br>

## PDF をパスワードで保護するには {#u51b6592}

- [PDFの暗号化 ～３つの暗号化コマンドの紹介 ～](http://konoyonohana.blog.fc2.com/blog-entry-49.html)

Acrobat を使えばできますが，フリーウェアとして [QPDF](/QPDF/) もあります．

また，OS Xでは印刷するときに「PDFで保存」を選択すれば必要なセキュリティオプションを選択できます．<br>
ただし，Adobe Readerからはこの操作はできませんので，一度作成したPDFを「プレビュー」「[TeXShop](/TeXShop/)」などで開いてから実行してください．<br>

LaTeX ユーザーの方は，dvipdfmx を用いて，PDF にパスワード保護をつけることができます．<br>
具体的には，

```
dvipdfmx -S filename
```

のように，“-S” オプションをつけます．<br>
あとは所有者のパスワードとユーザーパスワード（PDF ファイルを開いたときに入力させるパスワード）の2つを問われますので，入力して Enter キーを押してください．<br>
なお，確認のために2度入力を求められます．<br>

また，"-P"オプションでセキュリティオプションを細かく指定できます．<br>

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

    なお，デフォルトの「全部許可」のオプションは"0x003C"です．<br>

その他の細かいオプションについては，dvipdfmx.cfgに記載されています．<br>

また，20110307以降のdvipdfmxでは，\specialを用いてセキュリティオプションをtex原稿に埋め込むことができるようになりました．<br>
プリアンブルに記述します．<br>

- \special{pdf:encrypt ownerpw (abc) userpw (xyz) length 128 perm 252}

    ```
             If a parameter is omitted, the default value / empty password
             is used. The special must appear at the beginning of the file.
    ```

- この機能を簡便に利用できるようにするパッケージ[bxpdfcrypt.sty](http://d.hatena.ne.jp/zrbabbler/20110320/1300620094)も存在します．

PDF のパスワードを忘れてしまった場合は

- [PDFCrack](http://pdfcrack.sourceforge.net/)
- [PDFCrack (Windows version)](http://blog.rubypdf.com/pdfcrack/)

を使うと正しいパスワードを教えてくれます．<br>

## RedMon による PDF 作成 {#mbf7209f}

- [WindowsをPostScriptプリンターにしてUbuntuから快適印刷](http://gihyo.jp/admin/serial/01/ubuntu-recipe/0271)
- [pdf仮想プリンタを作成する (Windows 7 Enterprise 64bit)](http://heilman-jinroku.blogspot.jp/2012/09/pdfwindows-7-enterprise-64bit.html)
- [ghostscript と RedMon による PDF プリンタの実現](http://miko.org/~tatyana/tech/Win/pdfprinter.html)

Windows 上で，フリーウェアだけで Distiller と同様に簡単に PDF が作れます．<br>
[RedMon](http://pages.cs.wisc.edu/~ghost/redmon/) というツールと Ghostscript を組み合わせて使います．<br>

あらかじめ最新版の Ghostscript をインストールしておきます．<br>
フォントを埋め込むように設定しておくといいでしょう．<br>

RedMon を展開して setup.exe を実行します．

次に，コントロールパネルの「プリンターの追加」（「プリンターのインストール」）を実行します．<br>
「ローカルプリンター」「自動的に検出しない」でいいでしょう．<br>
プリンターポートは「新しいポートの作成」で「Redirected Port」を選びます．<br>
ポート名は “RPT1:” のままでかまいません（複数作ると “RPT2:” 等々になります）．<br>
プリンターソフトウェアは，カラーのPSプリンターなら何でもかまいません．<br>
“Apple” “Apple Color LaserWriter 12/600J” でも “Canon” “Canon LBP-2260PS” でも大丈夫でした．<br>
テスト印刷はしません．<br>

「デバイスとプリンター」の「プリンターと FAX」に新しいプリンターアイコンができますので，
適当な名前に変えます（例えば “Ghostscript PDF writer”）．<br>
さらに，右クリックして「プロパティ」の「ポート」タブを選び，上で指定したポート名
（“RPT1:” など）が選ばれている状態で［ポートの構成］を押し，たとえば次のように設定します：

Redirect this port to the program:
: &nbsp;

C:\texlive\2014\bin\win32\rungs.exe

Arguments for this program are:
: -sDEVICE=pdfwrite -dBATCH -dNOPAUSE -dSAFER -sPAPERSIZE=a4 -sOutputFile="%1" -

Output:
: Prompt for filename

Run:
: Minimized

Word などのアプリケーションからこのプリンターに印刷すると，保存するファイル名を聞かれます．<br>
適当な名前（何々.pdf）を入力すれば，PDF ファイルが出来上がります．<br>

同趣向の
[PDFCreator 日本語対応版](http://super777.o.oo7.jp/page004.html)
というフリーソフトウェアがあります．<br>
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
- [WinTeX文書をPDF化する](http://kamoland.com/comp/tex_acro.html)
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

[^1]: プリンター依存性は Word 2000 でほぼ解消されたようです．
