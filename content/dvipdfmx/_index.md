---
title: "dvipdfmx"
url: "/dvipdfmx/"
date: 2013-06-25T04:47:13Z
bookCollapseSection: true
pukiwiki: "dvipdfmx"
---

# dvipdfmx

## [dvipdfmx](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/) {#x9826408}

<!-- dvipdfmxはナントカboxの扱いに深刻な問題があります。 -->
<!-- ↑深刻な問題とは何ですか？ -->
<!-- (あれ，やっと http://acetaminophen.hatenablog.com/entry/2015/10/19/211705 で -->
<!-- 解決したと思ったのだけど．) -->

dvipdfmx は DVI を PDF へ変換するソフトウェアです．
元々 Mark A. Wicks 氏によって開発された [dvipdfm](http://gaspra.kettering.edu/dvipdfm/) というソフトウェアがあり，dvipdfmx は主に CJK 対応を強化した拡張版 (e<strong>X</strong>tended version) です．
現在では dvipdfm コマンドは dvipdfmx へのシンボリックリンクとなっており，dvipdfm として実行した場合は互換モードで動作するようになっています．

***

***

### 特徴 {#ia9746cb}

元となった dvipdfm の主な特徴としては，[Dvipdfm User's Manual Version 0.12.4](http://gaspra.kettering.edu/dvipdfm/dvipdfm-0.12.4.pdf) では次が挙げられています．

- アウトラインやアノーテーション（注釈機能）など Adobe Acrobat Distiller DC の pdfmark に対応した多くの機能を提供します．
- [HyperTeX](/HyperTeX/) (HTML)，[TPIC](/pic/)，カラー，PSFile，その他 [PostScript](/PostScript/) special など "標準的な" DVI special 機能を提供します．
- MetaPost 出力を PDF に取り込む際のネイティブな対応と，任意の PostScript ファイルを外部プログラムの助けを借りて取り込む機能を提供します．
- サムネイル埋め込み機能（[Ghostscript](/Ghostscript/) を利用します）を提供します．
- 組版結果に対する任意のネストした線形変換 (変形) 機能を提供します．テキストを含む，すべてのページ上の描画物に対し伸縮や回転の操作を行えます．
- PDFの最初のページを（ページを描画するのに必要な）フォントなどのリソースとともにカプセル化し取り込むことができます．
- JPEG と PNG 画像を取り込むことができます．
- 内部カラー・スタック．色設定に対するスタック操作 (push, pop) が可能です．これは例えば，ヘッドラインなどで一時的に色を変えたりするのに役に立ちます．
- ファイル・サイズを小さくするためにフォントの部分埋め込みと Flate 圧縮に対応しています．
- Acrobat 製品群では不完全な（dvipdfm マニュアルが書かれた当時）エンコーディングの問題に対処するために，フォントの再エンコーディングの機能を提供します．
- ページとデスティネーション・ツリーに対する平衡木の利用により，巨大な文書における PDF ビューアのアクセスを高速化します．

dvipdfmx での主な変更・拡張は

- OpenType/TrueType に対するより完全な対応，特に2バイトフォントとしての利用や縦組み用のグリフ置換機能を提供します．
- Subfont Definition ファイルへの対応．CJK-LaTeX を使う際のフォントの問題を解消します．
- PostScript CMap リソースを利用して多様な旧来のエンコーディングに対応します．
- 入力エンコーディングとしての Unicode への対応や ToUnicode CMap の自動生成など Unicode 関連の機能の強化を提供します．
- アスキー pTeX 拡張への対応．
- pdfTeX 互換 special などいくつかの special コマンドを追加します．
- Type1 フォントの CFF (Type1C) への変換や オブジェクト・ストリーム対応などファイル・サイズ削減のための様々な機能を提供します．
- アルファ・チャンネルや埋め込み ICC プロファイル対応などの改善されたラスタ画像への対応．

などです．

### xdvipdfmx {#b22e1172}

似たような名前のプログラムとして xdvipdfmx というものがあります．
これは [XeTeX](/XeTeX/) が出力する X&#x44;V ファイルを処理するための dvipdfmx の拡張版です．
通常は XeTeX の裏で自動的に呼ばれるので，意識する必要はありません．
ただし，dvipdfmx と同様の不具合を生じる場合があるので，PDF がうまく出力できない場合は xdvipdfmx の不具合も疑って下さい．

XeTeX であえて X&#x44;V ファイルを出力したい場合は -no-pdf オプションをつけます．

## 使い方 {#qabeb774}

変換したい DVI ファイル名を引数として与えると，デフォルトの設定で PDF ファイルへの変換が行われます．

```
$ dvipdfmx foo.dvi
foo.dvi -> foo.pdf
[1]
14514 bytes written
```

なお，拡張子は省略できます．上の場合，単に foo としても foo.dvi が変換されます．ただし，別に foo という（拡張子のない）ファイルが存在する場合は明示的に foo.dvi と書く必要があります．

なにも設定しなくともとりあえず動く場合がほとんどだとは思いますが，フォントなどはそれぞれの OS にあった設定がなされていることを確認しましょう．特に最近の Windows (8.1) や Mac (OS X) では
収録文字数が大幅に増え，また多ウェイト化なども進んで来ているため古い習慣にとらわれず新しいものを使いましょう．フォントは PDF へ埋め込むことを基本としてください．非埋め込みで PDF を作成することは推奨されません．

例えば，TeXLive/Windows 8.1 で標準搭載の游明朝・游ゴシックを埋め込むように設定するにはコマンド プロンプトで（[tlmgr](/tlmgr/) で jfontmaps パッケージをインストールしておきます）

```
 kanji-config-updmap yu-win
```

とします．Mac OS X ではヒラギノを使いましょう．設定については [Mac - TeX Wiki](http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?Mac) を参照してください．

### コマンドラインオプション {#tc481bdb}

```
 $ dvipdfmx -h
```

```
 Usage: dvipdfmx [options] [dvifile[.dvi|.xdv]]
        dvipdfmx --extractbb|--xbb|--ebb [options]     "extractbb" になる
        dvipdfmx --help|--version
```

```
 Options:
   -c            カラースペシャルを無視する (モノクロ印刷用)
   --dvipdfm     DVIPDFM 互換モードを有効にする
   -d 数値       PDF 出力の小数点以下の桁数を設定 (0-5) [2]
   -f ファイル名 マップファイル名を設定 [pdftex.map]
   -g 寸法       アノーテーションの余白 [0.0in]
   -h | --help   このメッセージを表示し終了
   -l            ランドスケープモード
   -m 数値       追加の拡大率を設定 [1.0]
   -o ファイル名 出力ファイル名を設定, "-" で標準出力 [dvifile.pdf]
   -p 用紙サイズ 用紙サイズを設定 [a4]
   -q            静かに
   -r 解像度     ビットマップフォントの解像度を DPI で指定 [600]
   -s ページ範囲 ページ範囲を指定 (-)
   -t            PNG 形式のサムネイルを埋め込む [dvifile.1]
   --version     バージョン情報を出力し終了
   -v            うるさく
   -vv           よりうるさく
   --kpathsea-debug 数値      　kpathsearch デバッグフラグを設定 [0]
   -x 寸法       水平方向のオフセットを指定 [1.0in]
   -y 寸法       垂直方向のオフセットを指定 [1.0in]
   -z 数値       zlib の圧縮レベルを指定 (0-9) [9]
   -C 数値       様々なオプションフラグ [0]:
                   0x0001 予約済み
                   0x0002 TPIC シェーディングコマンドに不透明なグレーの代わりに
                          半透明な塗りつぶしを使う (PDF 1.4 が必要)
                   0x0004 CID フォントを固定幅として扱う
                   0x0008 重複したフォントマップエントリーを置き換えない
                   0x0010 PDF デスティネーションの最適化を抑制する
                 正の値は常に前に与えられた値と OR される
                 負の値を指定すると前の値を置き換える
   -D 文字列     PS->PDF 変換コマンドラインテンプレート [none]
   -E            フォントライセンスフラグに関わらず常にフォントを埋め込む
   -I 数値       画像キャッシュの寿命 [-2]
                  0: すべての古い画像を消去し新しい画像を残す
                 -1: すべての古い画像を消去し新しい画像も消去する
                 -2: 画像キャッシュを無視する
   -K 数値       暗号化キー長 [40]
   -M            MetaPost PostScript 出力を処理
   -O 数値       開いたブックマークアイテムの最大深度 [0]
   -P 数値       暗号化の許可フラグを設定 [0x003C]
   -S            PDF 暗号化を有効に
   -V 数値       PDF のマイナーバージョンを設定 [5]
```

```
 コマンドラインから入力されるすべての寸法は "True" 付きと解釈される．
 "-s" の引数はコンマで分離されたページレンジを列挙したものです，
         例えば，"-s 1-3,5-6".
 ページサイズは用紙フォーマット (例: "a4")
         あるいは w<unit>,h<unit> (例: "20cm,30cm") で指定．
```

```
 バグ報告は電子メールで: tex-k@tug.org.
```

### マニュアル {#da69bb5d}

dvipdfmx には公式のマニュアルは存在しないようです．代わりに dvipdfm のマニュアルが参考になります．

- [Dvipdfm User's Manual](http://gaspra.kettering.edu/dvipdfm/dvipdfm-0.12.4.pdf)

### フォントの設定 {#tbddb566}

フォントの設定は TeX 関連プログラムを使う際に大きな困難となる部分です．
TeX とその関連プログラムがどのようにフォントを取り扱うのか，あまり理解していない場合は各ディストリビューションのデフォルト設定に従うのが賢明です．
フォント管理ツール（updmap など）が利用可能であればそれを利用しましょう．

フォントの設定はマップファイルで行います．
マップファイルの役割は，TeX が認識するフォント名と実際に PDF 出力に使うべき実フォントとを対応付けることです．
このファイルの書式は

```
 tfm[@SFD@] enc font options
```

のようになります．
ここで <em>tfm</em> は TeX において使われるフォント名，<em>enc</em> は使用すべきフォントのエンコーディング，<em>font</em> は PDF 出力に用いられる実フォント名（通常はファイル名）で <em> options</em> で様々なオプションを指定します．
\[@SFD@\] の項は CJK パッケージで用いられるフォントの分割方法の指定で，pLaTeX などでは通常不要です．

TeX Live や W32TeX をフルインストールすれば各 OS で利用可能なフォントのマップファイルは既にインストールされています．
TeX Live でフォントのマップファイルが存在しない場合は [jfontmaps パッケージ](http://www.ctan.org/pkg/jfontmaps) を導入します．
使用するマップファイルの切り替えには updmap プログラムを使います．
マップファイルが用意されていないフォントを使いたい場合は自分で用意しなければなりません．

以下にマップファイルの書き方について簡単に解説します．

#### TeX フォント名 {#ua7d8a2c}

マップファイルの <em>tfm</em> のフィールドには TeX で使用されるフォント名，あるいは Virtual font から最終的に辿り着く TeX フォントがきます．
cmr10 や rml などです．
オプションとして @ SFD@ をつけることができます．
ここで SFD は SubFont Difinition 名です．
このオプションは <em>SFD</em> の規則に従い分割されたサブフォントを一つのフォントにまとめあげる (復元する) ときに指定します．

```
 min@Unicode@  unicode  Mincho
```

は，Unicode.sfd の規則にしたがって分割されたサブフォント群 min00, min01, ... を逆にひとつの Unicode フォントとして復元します．
その後このひとつに束ねられた仮想的なフォントは Mincho というフォントにマップされます．

#### エンコーディング {#y16b9bc3}

エンコーディング・フィールド <em>enc</em> を正しく指定しないと正しい出力は得られません．
dvipdfmx でサポートされているのは

- dvips の .enc 名
- PostScript CMap リソース名
- unicode

の3種類です

dvips の .enc ファイルは 8-bit エンコーディング用のエンコーディングファイルで，どのコードポイントにどの文字 (グリフ) が割り当てられているかを PostScript の書式で記述します．
例えば，8r.enc では

```
  /TeXBase1Encoding [
  % 0x00
    /.notdef /dotaccent /fi /fl
    /fraction /hungarumlaut /Lslash /lslash
    ...(略)...
    /udieresis /yacute /thorn /ydieresis
  ] def
```

のような記述が見られます．
コード 0x00 に /.notdef (未定義) 文字を，0x01 に /dotaccent を，0x02 に /fi (f と i のリガチャ) を...割り振っています．
ここでは文字の識別は PostScript グリフ名で行われます．
dvipdfmx では OpenType/TrueType フォントに対して dvips enc ファイルを適用する場合は，Unicode 値を使って /uniXXXX (XXXX は 4 桁の 16 進数 Unicode 値) という形での指定も可能です．
必要な dvips enc ファイルは通常のインストールでほぼすべてインストールされています．

```
 foo 8r Foo
```

というマップエントリは TeX フォント foo を Foo に対応付けます．
その際 TeX で用いられたエンコーディングは 8r.enc に記述されてあるものとします．

PostScript CMap リソースは dvipdfmx が文字を CID (Character IDentifier) と呼ばれる文字の識別番号で識別する場合に用いられます．
PostScript CMap ファイルは一般的によく用いられるエンコーディング (Shift-JIS など) から CID への対応付けを記述したファイルです．
例えば，UniJIS-UCS2-H は Unicode の JIS サブセットの範囲で UCS2 で表現された文字列を Adobe-Japan1 で定められた文字集合の CID の並びに変換するのに用いられます．
dvipdfmx では拡張子が ".otf" の 和文 OpenType フォントに対しては通常これを使います．
pTeX/pLaTeX でよく用いられる設定は:

```
 rml  H Ryumin-Light
 gbm  H GothicBBB-Medium
```

などです．
CMap ファイルは通常は [Adobe によって管理されたもの](http://sourceforge.net/adobe/cmap/wiki/Home/) が一式インストールされているはずです．

最後に unicode は OpenType/TrueType フォントに内臓の Unicode マッピングテーブルを使って Unicode 値からフォント内の字形データを得ることを指定します．
upLaTeX や Omega など DVI ファイル内のエンコーディングが Unicode となる場合にはこれが使えます．

```
 uprml-h unicode ipaexm.ttf
```

エンコーディング unicode は PostScript Type1 フォントに対しても指定が可能です．
この場合は，Adobe グリフリストの記述に従い PostScript グリフ名と Unicode 値とを対応付けます．
ファイル "glyphlist.txt" がインストールされている必要があります．

#### 実フォント名 {#he05780d}

<em>font</em> の項には出力 PDF で使用されるフォント名がきます．

これは通常フォントファイル名です．

```
 ugoth10  unicode  Gothic.ttf
```

は TeX フォント ugoth10 を TrueType フォント Gothic.ttf に結びつけます．
また，フォントファイルが TrueType Collection の場合は

```
 ugoth10  unicode  :1:GothicB.ttc
```

のようにファイル名の前に :n: を付けることで n 番目のフォントを選べます．
実フォント名の前に "!" スイッチを付けることでフォントを非埋め込みにすることも可能です：

```
 ugoth10 unicode   !Gothic.ttf
```

フォントを非埋め込みにすることでファイルサイズをかなり小さくできますが，表示に問題が生じる場合が多々あります．
特に文書の再現性と (長期的な) 保存という観点からは推奨されません．
実際，PDF を長期保存可能なフォーマットとして利用することを目標として，[国際標準化機構（ISO） により制定された PDF/A](http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=38920) ではフォントをすべて埋め込むことを求めています．

#### オプション {#d4922a30}

オプション・フィールドではフォントに対して様々なオプションを与えます．例えば，"変形" オプション

```
 -s .167
 -e 1.2
 -b 1.0
```

のうち，"s" は斜体 (slanted) に，"e" は横に伸張 (extended) し，"b" は "太字" にするオプションです．
"b" オプションによる疑似太字の結果は酷いもので，これの利用は推奨されません．
将来削除される可能性もあります．

フォント・オプション:

```
 -i 2
 -w 1
```

"i" は TrueType Collection インデックスの指定 (フォント名の前の :2: と同じ) で "w" は縦書き/横書きの指定です．
"w" はエンコーディングが unicode のときのみ有効で，値が 1 のときは縦書き用であることを示します．
オプション "w" の値が 1 のとき縦書き用の OpenType グリフ置換機能が有効になります．
エンコーディングを unicode に指定して縦組みを行う場合，"-w 1"　を指定しないと括弧や句読点が正しく表示されないことに注意してください．

#### フォント関連のよくあるエラーと警告 {#p3025758}

フォントとエンコーディング関連，PostScript ファイルの取り込みではエラーが多発します．
フォント関連でよくあるエラー・警告とその原因です．

```
 Could not locate a virtual/physical font for TFM “gbm-jis”.
 There are no valid font mapping entry for this font.
 Font file name “gbm-jis” was assumed but failed to locate that font.
 Cannot proceed without .vf or “physical” font for PDF output…
```

この種のエラーは mktexpk (ビットマップ・フォント生成プログラム) が実行され失敗した後表示されます．
TeX フォント "gbm-jis" にはなんら実フォントとの対応付けがなされておらず，"gbm-jis" という名のフォントを試そうとして失敗しました．
おそらくフォントの設定が適切になされてません．
類似のエラーとして

```
 Could not locate a virtual/physical font for TFM "hgothr-h".
 This font is mapped to a physical font "HiraKakuProN-W3.otf".
 Please check if kpathsea library can find this font: HiraKakuProN-W3.otf
 Cannot proceed without .vf or "physical" font for PDF output...
```

のようなメッセージが出る場合は，フォント "HiraKakuProN-W3.otf" がインストールされていないか dvipdfmx が見つけられる場所にありません．

```
 Could not find encoding file "H".
```

pTeX/pLaTeX で通常必要な PostScript CMap リソース "H" が見つかりませんでした．
これらのファイルが正しくインストールされていない可能性があります．

```
 No character mapping available.
 CMap name: H
 input str: <7c>
```

CMap "H" での文字コード変換に失敗しました．
おそらくエンコーディングの指定が誤っています．
自身が DVI への出力にどのようなエンコーディングを使っているか把握する必要があります．
H (JIS) で未定義の文字コードを使っている可能性もあります．

```
 Glyph missing in font. (CID=19141, code=0x4e23)
```

お使いのフォントには CID 19141 に対応する文字データがありません．
フォントを代えるなどの対処が必要です．

```
 Failed to load AGL file "glyphlist.txt"...
```

PostScript グリフ名と Unicode との対応を記述したファイル "glyphlist.txt" が読み込めませんでした．
(主に欧文フォントで) 稀に文字が欠落したり，生成された PDF ファイルで文字列の検索やコピー &amp; ペーストがうまくいかなくなるかも知れません．

```
 CMap has higher supplement number than CIDFont: Ryumin-Light
 Some characters may not be displayed or printed.
```

使用している CMap が新しい改訂版であるため，フォント "Ryumin-Light" に含まれない文字が使用される可能性があります．
文字が欠落する可能性があり，"Glyph missing in font." の警告が出ないか注意する必要があります．

#### ファイルが見つからない場合の対処法 {#x37a3e64}

ファイルが見つからないというエラーが出た場合は，dvipdfmx が実際にどこを探していてるかを知る必要があります．
TeX 関連の多くのプログラムは kpathsea というライブラリにファイル検索を依頼しており，dvipdfmx も kpathsea ライブラリを利用しています．
kpsewhich というコマンドラインプログラムがファイルを置くべき場所を知るのに利用できます．
例えば，PostScript CMap "H" が dvipdfmx に見える場所にあるか確かめるには

```
 kpsewhich -progname=dvipdfmx -format=cmap H
```

とします．
ファイルが存在する場合はその場所が出力されます．
空行しか出力されない場合は dvipdfmx の検索パスにファイルが存在しません．
CMap ファイルがどこにインストールされているべきなのか知るには

```
 kpsewhich -progname=dvipdfmx -show-path=cmap
```

のようにします．
区切り文字 (Windows では ";") で区切られたフォルダのリストが出力されます．
検索パス等は

```
 kpsewhich -a -format=cnf texmf.cnf
```

で示されるファイルで設定されています．
kpsewhich の使い方については

```
 kpsewhich -help
```

などを参照してください．

#### フォント関連の重要なファイル {#d0149545}

pTeX/pLaTeX で日本語を使うために最低限必要なファイルは PostScript CMap リソース "H" (と "V") です．
TrueType フォントを利用する場合はこれに加えて "Adobe-Japan1-UCS2"  というファイルが必要となります．
"H" は JIS エンコーディングから Adobe-Japan1 の CID 値への対応付けを行う変換用のファイルで，"Adobe-Japan1-UCS2" は Adobe-Japan1 の CID を Unicode に変換するのに用いられます．
TrueType フォントを (PostScript CMap リソースとともに) 利用する場合は

```
 JIS --> Adobe-Japan1 --> Unicode
```

という 2 重の (文字コード) 変換を伴います．

他に Unicode に関連した重要なものとして [Adobe グリフリスト](http://partners.adobe.com/public/developer/en/opentype/glyphlist.txt)があります．
これは "glyphlist.txt" という名前でインストールされている必要があります．
このファイルは PostScript グリフ名を Unicode に対応付ける必要がある場合に利用されます．
PostScript Type1 フォントを Unicode で使う場合がそのひとつです．
生成されたPDF ファイル内の文字列の検索やコピー &amp; ペーストを可能にするためにも重要な役割を果たします．

### 画像やPDFのとり込み {#a1cabace}

dvipdfmx がサポートする画像フォーマットは PNG，JPEG，BMP，JPEG 2000 (2014/08/11 より) および MetaPost が出力した EPS (MPS) です．
これに加えて PDF のページもとり込めます．
通常の <em>EPS はサポートされていない</em>ことに注意してください．
通常の EPS ファイルのとり込みでは外部プログラムを呼び出し，dvipdfmx が扱えるフォーマットに変換してからとり込みます．

LaTeX における画像の取扱いについての基礎知識は，「[LaTeX入門/図表](</LaTeX入門/図表/>)」の項目を参照してください．

graphicx パッケージを用いて画像をとり込む場合は dvipdfmx オプションをつけて graphicx パッケージを読み込みます：

```
 \usepackage[dvipdfmx]{graphicx}
```

PDF と JPEG や PNG などのラスタ画像を使う場合は，画像の物理的サイズ (ピクセル数ではなく紙媒体に印刷する場合の大きさ) を何らかの形で LaTeX に伝える必要があります．これを行うひとつの方法は，\includegraphics の bb オプションで陽に指定することです．

```
 \includegraphics[bb=0 0 300 150, width=3cm]{input.png}
```

あるいは，bmpsize パッケージを用いて画像サイズの自動取得を行います．

```
 \usepackage[dvipdfmx]{graphicx}
 \usepackage{bmpsize}
```

bmpsize パッケージは，外部プログラムを使用せずに JPEG, PNG, BMP のサイズを計算するので，効率が良いものです．dvipdfmx と共に使用するときは，

```
 \usepackage[dvipdfmx]{graphicx}
```

の後に

```
 \usepackage{bmpsize}
```

とします．

PDF の場合には，extractbb プログラムで抽出部分のサイズを計算します．extractbb プログラムの自動呼出し機能（設定方法は[こちら](</古い情報/#rf074b4b>)）が有効になっている場合には，パイプ機能が使用されるので，.xbb ファイルは作成されません．これが有効になっていない場合は手動で extractbb を起動し，あらかじめ .xbb ファイルを生成しておく必要があります．これを行うにはターミナル (コマンド プロンプト) から

```
 extractbb ファイル名
```

のようにします．あらかじめ作業ディレクトリ (フォルダ) に移動して行います．

dvipdfmx はダウンサンプル (リサンプル) は行いません．
画像を埋め込むとファイルサイズが異様に大きくなるような場合は画像加工ソフトで適切な解像度になるように画像のサイズを調整してください．
2インチ (5.08センチ) の幅に 300dpi の解像度で画像を収める場合の画像の幅 (横方向のピクセル数) は 600 です．
一般的なプリンタでの印刷の場合はこれくらいの解像度でもよいでしょう．
2インチ-72dpi (スクリーン向け低解像度) の場合は 144 ピクセル，2インチ-150dpi (電子書籍向け) の場合は 300 ピクセルです．

#### 各画像フォーマットのサポート状況 {#e5c0f21c}

<strong>PNG</strong> はよくサポートされています．

透明度や埋め込み ICC プロファイルなどの情報も保持されます．
色深度が 16bpc のときは 8bpc へと変換されるという制限があります．
TeXLive2015 版では XMP メタデータを保持します．

<strong>JPEG</strong> は比較的よくサポートされています．

CMYK 色空間にも対応していますが，ビューアが対応していない可能性もあるため避けるのが無難です．
物理的サイズ (解像度) の取得に JFIF または Exif データを利用します．
JFIF と Exif データに不整合がある場合にサイズの決定に問題が生じることが知られています．
埋め込み ICC プロファイルにも対応しています．

<strong>BMP</strong> は非圧縮かランレングス圧縮のものに限られます．

多くの拡張機能には対応していません．

<strong>JPEG 2000</strong> の対応は最低限のものです．

PDF の仕様の制限から JP2 と JPX baseline サブセットに限定されます．
J2C ファイルには対応していません．
透明度については不明です．

<strong>PDF</strong> はベクタ•ラスタ画像のどちらにもよく対応した高機能なフォーマットですが，仕様の改訂の度に複雑化するという問題があります．

不要に高いバージョン設定にしない，タグ付きにしないなどの点に注意すれば比較的よく対応できます．
これまで PDF-1.5 以上のファイルで取り込みに失敗することがありましたが，2014/08/14 の修正でそのようなファイルにも対応しました．

PDF-1.5 以上のファイルでも，取り込みに成功する場合と失敗する場合があります．
具体的には「dvipdfmx が解釈する必要のある領域に，/DecodeParms がある PDF ファイル」について失敗します．
2014/08/14 の修正で，dvipdfmx が解釈すべき領域に /DecodeParms が見つかった場合にも対応可能な改修が施されましたので，以降の W32TeX および TeX Live 2015 以降では問題なく取り込むことができます．

- 図の挿入について [forum:1588](https://okumuralab.org/tex/mod/forum/discuss.php?d=1588)
- [美文書6版で PDF-1.5 の取り込みに関する問題](http://d.hatena.ne.jp/acetaminophen/20150530/1433009781)，[（続）](http://d.hatena.ne.jp/acetaminophen/20150531/1433042929)

<strong>PostScript (EPS)</strong> はそれが確かに必要だという場合を除き使わない方がよいでしょう．

dvipdfmx は PostScript を直接サポートしていません（Ghostscript を呼び出すので処理が圧倒的に遅くなります）．

#### どのフォーマットを選ぶべきか？ {#la46999e}

PNG と JPEG で満足しているのであればそれでよいでしょう．
PDF は PNG と同等の機能をもち，JPEG も丸ごとサポート (実際に丸ごと JPEG ファイルを埋め込める) しているので，PDF で統一することも考えられます．
RAW データから JPEG への変換でもやもやとしたノイズが気になる場合は JPEG 2000 を検討してもよいでしょう．
ただし，JPEG 2000 は普及に失敗したようで PDF ビューアのサポートが十分でない可能性もあります．

#### PostScript ファイルの取り込み {#q1c3abbe}

PostScript ファイルを取り込む際には通常は Ghostscript が自動的に起動し，PDF へ一時的に変換したうえで取り込みます．
具体的には dvipdfmx.cfg のオプションの記述を見ましょう．

```
 kpsewhich -progname=dvipdfmx -format=othertext dvipdfmx.cfg
```

で示されるファイルに

```
 D  "rungs -q -dNOPAUSE -dBATCH -dEPSCrop \
         -sDEVICE=pdfwrite ...(略)... -sOutputFile='%o' '%i' -c quit"
```

のような一行があるはずです("%" で始まる行はコメント行です)．
この部分の指示により dvipdfmx は PostScript の図を埋め込むように指示されたとき，自動的に rungs (gs へのラッパー) を起動し PDF へ変換するように動作します．
"D" オプションの基本的な書式は

```
 D "command %i %o"
```

のような形です．
ここで　"%o"，"%i" はそれぞれ出力 (dvipdfmx が定める一時ファイル名)，入力ファイル名に置き換わります．
取り込まれた PostScript の図に問題があるようでしたらこのオプションを見直してください．
PostScript ファイルはトラブルの大きな原因です．
フォントをすべて埋め込んだはずなのに埋め込まれていないフォントがある．
和文フォントを使わないようにしたはずなのに実際は使ってある．
など，取り込まれた PostScript ファイルが原因となっている場合があります．
また変換が失敗する場合はまず "D" オプションで指定されたコマンドを直接実行してみて，どのようなエラーがでるのか調べてください．
dvipdfmx が

```
 Filtering file via command -->rungs -q ...(略)... failed.
 Image format conversion for "./foo.eps" failed...
```

のようなエラーメッセージを出力する場合は PostScript の変換プログラムが変換に失敗しています．

#### SVG を取り込む {#o8c48aab}

"D" オプションは EPS ファイルを取り込むためだけのものではありません．
これは dvipdfmx がサポートしない形式のファイルを処理するための一般的なものです．
[Inkscape](/Inkscape/) などに SVG から PDF への変換を依頼して図を取り込むこともできます：

```
 D "inkscape -z -A %o %i"
```

実際の運用では様々な画像フォーマットに対して分岐処理をするスクリプトを呼び出すことになるでしょう．

#### MetaPost 出力への対応 {#gd0313ef}

MetaPost が出力する EPS ファイルは外部プログラムの助けなしに dvipdfmx が処理することができます．<br>
ただし，

```
 prologues:=2;
```

に指定してください．
また，非公式ですが dvipdfmx に "-M" オプションを付けて実行することで "MetaPost モード" で MetaPost 出力を PDF へ変換することができます．
例えば MetaPost が出力した "test.1" というファイルに対して

```
dvipdfmx -M -o test.pdf test.1
```

を実行すると，"test.pdf" が生成されます．
デバッグ用に使えます．

### special コマンド {#p133bd5e}

dvipdfmx は様々な special 拡張をサポートしています．
文書やページの設定を行うものとして

```
 papersize landscape pdf:pagesize pdf:encrypt pdf:minorversion
```

など，dvips 由来のもの，HTML 形式のハイパーリンクなど様々です．
dvipdfmx 自身も独自の special による拡張機能を持ちます．

これらの機能のうちほとんどはユーザーが直接意識することはありません．
通常はパッケージの製作者が LaTeX 等の為の使い易いインターフェイスを提供します．
しかしながら様々な特殊効果を出す為にこれらの拡張機能を直接使いたい場合もあります．
dvipdfm(x) 独自の機能を使う場合は，それにより他の DVI ドライバとの互換性を酷く損なうという事に注意してください．
いくつかの機能は DVI の設計思想に反することもあります．

#### ページ設定 {#zbee7ac4}

landscape や papersize などの文書全体に影響するものは PDF への変換前にスキャンされ実行されます．

```
 \special{landscape}
```

は用紙を横置きに，

```
 \special{papersize=210mm,297mm}
```

は用紙サイズを 210mm × 297mm に設定します．

pagesize は文書の途中でも使えますが，これが実行されるタイミングによっては予期せぬ結果となります．
特にページがシャッフルされる時は意図したようにはなりません．

```
  \special{pdf:pagesize width 210mm height 297mm}
```

のように使います．

#### special で遊ぶ {#a807a6c0}

- [http://www2.hyo-med.ac.jp/~tanimura/LaTeX/dvipdfmx.html](http://www2.hyo-med.ac.jp/~tanimura/LaTeX/dvipdfmx.html) あたりに dvipdfm/dvipdfmx 用の \specail の様々な使用例があります．

アノーテーション (注釈機能) でファイルを添付：

```
 \special{pdf:fstream @fileobj (ファイル名をここに)}%
 \special{pdf:ann width 5bp height 10bp
            << /Type /Annot
               /Subtype /FileAttachment
               /FS <<
                     /Type /Filespec
                     /F    (ファイル名をここに)
                     /EF   << /F @fileobj >>
                   >>
               /Name /Paperclip
               /C    [0.8 0.4 0.4]
               /T    (タイトルをここに)
            >>
          }%
```

上の例ではまず最初の special で外部ファイルを取り込み，それを fileobj と名付けます．
次の special で "添付ファイル" アノーテーションを作ります．
出来上がった PDF には小さなクリップが表示され，その上で右クリックするとメニューから添付ファイルを保存できるようになるはずです(ビューアーによって操作は異なります)．
このようにして TeX のソースを埋め込んでおくこともできます．

ページの開始時に任意の PDF 描画コードを挿入することもできます：

```
 \special{pdf:bop 0.4 0.4 0.6 rg 0 0 596 842 re 72 72 452 700 re f*}
```

これは余白の部分を塗りつぶします．
"bop" はページの開始時に指定された PDF 描画コードを埋め込みます．

ウォーターマーク風のものを入れます：

```
 \documentclass[]{article}
 \usepackage{bophook}
 \AtBeginDocument{
   \special{pdf:obj @Courier-Bold
     <<
       /Type /Font
       /Subtype /Type1
       /BaseFont /Courier-Bold
       /Encoding /WinAnsiEncoding
     >>
   }
   \special{pdf:bop BT 1 Tr /_Fn01 200 Tf
                    0.707 0.707 -0.707 0.707 72 216 Tm (Sample) Tj ET}
 }
 \AtBeginPage{
   \special{pdf:put @resources << /Font << /_Fn01 @Courier-Bold >> >>}
 }
 \begin{document}
 Hello, world.
 \end{document}
```

(bophook.sty が必要です) やや複雑な例です．
"obj" はオブジェクトを定義するコマンドでここでは Courier-Bold というフォントを定義しています．
"bop" はページの開始時に "Sample" という文字列を描画するように指示しています．
"put" の部分では resources で識別される辞書オブジェクト (ここではページリソース) に与えられたオブジェクトを追加します．
ここではフォントリソースに先ほど定義したフォント Courier-Bold を "\_Fn01" という名前で登録しています．

上の例ではページに直接 Sample という文字を書き込みましたがアノーテーションを使ってウォーターマークを入れることもできます．

### その他 {#dcc9a8c9}

#### PDF のバージョンを指定する {#b272a636}

- [出力 PDF のバージョン（とか）を指定する](http://d.hatena.ne.jp/zrbabbler/20140705/1404540914), [出力 PDF のバージョン（とか）を指定する（補足）](http://d.hatena.ne.jp/zrbabbler/20140706/1404618797)
- [https://github.com/zr-tex8r/BXpdfver](https://github.com/zr-tex8r/BXpdfver)
- [pdfの図が表示されない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=690)
- [mediabb パッケージが（あまり）役に立たない話](http://d.hatena.ne.jp/zrbabbler/20140530/1401462549)

例えば，PDF 1.4 で出力したい場合はプリアンブルに

```
\special{pdf: minorversion=4}
```

と書きます（minorversion とは 1.x の 'x' のことです）．
もしくは，ZR さんによる [bxpdfver](https://github.com/zr-tex8r/BXpdfver) パッケージを使用して

```
\usepackage[dvipdfmx,1.4]{bxpdfver}
```

としてもよいです．
1.4 以外に，1.5, 1.6, 1.7 が指定できます．

コマンドラインオプションで指定することもできます．

```
-V number     Set PDF minor version
```

#### 画像キャッシュで高速化 {#y11c4b43}

- TeX Live 2013 以降で使用可能です (→ TeX Live [Revision 29495](http://www.tug.org/svn/texlive?view=revision&revision=29495), [Revision 29512](http://www.tug.org/svn/texlive?view=revision&revision=29512) でコミットされました)
- [Image cache in (x)dvipdfmx by Tsuchimura-san](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1153)
- [dvipdfmx を画像キャッシュで高速化](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=958)

デフォルトでは有効にならないようになっています．
有効にするにはコマンドラインオプション

```
-I number
```

において，number を正整数にします．
この数値は，キャッシュが有効な時間を表しています．
デフォルトで有効にしたい場合，dvipdfmx.cfg の I セクションで

```
I 24
```

のように設定しておきます．
この場合，一日以内ならキャッシュにイメージがある場合，それを使用することを意味しています．

#### extractbb などの名前でシンボリックリンクを作成する {#k882a214}

- [#美文書 １１５ページ，「TeX Liveではextractbbやebbは実はdvipdfmxへのシンボリックリンクです」？](https://twitter.com/ti5942/status/273700405341483008) → [extractbbのプロパティ](https://twitter.com/ti5942/status/273742359915794432)

dvipdfmx はコマンドの名前によって機能を変えることができます．
[dvipdfmx.c](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/dvipdfmx.c?view=markup) の main 関数を見るとコマンド名によって処理を変えています．
UNIX ではプログラムに複数の機能を実装してシンボリックリンクを使用して別の名前をつけることで機能を変えることは普通に行われます．

#### PDF/X について {#e2cc950a}

今のところ dvipdfmx は PDF/X 出力には対応していませんが，\special コマンドを駆使して PDF/X 準拠を謳った PDF を作成することはできます．ここではその方法を示しますが，<em>自分が何をやっているのかよく理解したうえで行ってください</em>．

```
 \usepackage{bophook}
 \AtBeginDocument{
   \special{pdf:minorversion=3}
   \special{pdf:put @docinfo <<
     /Title (タイトル)
     /Author (著者)
     /CreationDate (D:20150124111528+09'00')
     /ModDate (D:20150124111528+09'00')
     /Trapped /False
     /GTS_PDFXVersion (PDF/X-1:2001)
     /GTS_PDFXConformance (PDF/X-1a:2001)
   >>}
   \special{pdf:put @catalog << /OutputIntents [ <<
     /Type /OutputIntent
     /S /GTS_PDFX
     /OutputConditionIdentifier (JC200103)
     /OutputCondition (JC200103 (Japan Color 2001 Coated))
     /RegistryName (http://www.color.org)
   >> ] >>}
 }
 \AtBeginPage{\special{pdf:put @thispage <<
     /BleedBox [0 0 595.28 841.89]
     /TrimBox [0 0 595.28 841.89]
 >>}}
```

dvipdfmx には<em>出力結果が PDF/X 準拠かどうか検証したり，準拠するように適切に処理したりする機能はありません</em>．少なくとも以下の点をよく検証してください：

- 色空間: X-1/X-1a では RGB は使用禁止です．CMYK やグレースケールなどを使います．
- フォント: 必ずすべて埋め込みます．
- しおりやハイパーリンク: 基本的に禁止です．hyperref は切りましょう．
- 境界ボックス: MediaBox と TrimBox が適切に設定されていることを確認します．

外部画像はトラブルの元なので特に要注意です．また PostScript と PDF \special は何を引き起こすか分からないので使われていないことを確認しましょう (dvitype で DVI ファイルを検証するとよいでしょう)．

## よくある問題 {#d092ab9c}

Dvipdfmx は問題の多いプログラムであると言われています．Dvipdfmx で問題が起こる場合は，dvips + Adobe Distiller (あるいは ps2pdf) を使用しましょう．

### EPS 画像 {#wc8e72e0}

EPS の画像が表示されない，位置がずれるなどの問題は頻発します．
Dvipdfmx は EPS (PostScript) には対応していません．EPS 画像を取り込む際には，EPS を PDF へ変換する外部プログラムが呼ばれ，それが行われます．この際に不具合が起こります．

### 用紙サイズと向き {#ma6fa008}

LaTeX で用紙サイズや向きを指定したのに，生成された PDF ファイルに反映されないと悩む人がいます．それもそのはずで，LaTeX (TeX) が処理結果として出力する DVI フォーマットには，用紙サイズや用紙の向きという概念はないのです．Dvipdfmx の入力である DVI ファイルにそのような情報が記載されていない以上，どうにもならないので，何らかの方法でそれを与えてやる必要があります．

Dvipdfmx のオプションや，用紙サイズ・向きの情報を無理やり埋め込む \special コマンドを利用します．詳しくは「使い方」の項や「special コマンド」の項を参照してください．

### 処理が遅い {#m56055d3}

EPS ファイルを使っていないか確認しましょう．EPS を PDF へ変換する外部プログラムが呼び出され，その処理に時間がかかります．EPS の使用を辞めるか，前述の画像キャッシュ機能を使うかで対応します．

## 不具合 {#f5e1d97d}

### dvipdfmx Version 20130624 でのみ起こる不具合 {#j774c931}

以下の不具合はいずれも TeX Live 2014 (dvipdfmx Version 20140317), TeX Live 2013 (dvipdfmx-20130405) では問題ない，Version 20130624 に特有のものです．
最新のバージョンにアップデートして下さい．

#### [TikZ](/TikZ/) を使用した DVI ファイルを処理すると \*\* ERROR \*\* Invalid object type: 10 {#m3330a51}

TeX Live 2014 ([Revision 31738](http://www.tug.org/svn/texlive?view=revision&revision=31738), [Revision 31739](http://www.tug.org/svn/texlive?view=revision&revision=31739)) で修正されました．

- \[[dvipdfmx\] tikz のパターン描画でエラー](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1081)

#### [hyperref](/hyperref/) で作成したリンクやしおりが機能しない {#x496f09a}

TeX Live 2014 ([Revision 31386](http://www.tug.org/svn/texlive?view=revision&revision=31386), [Revision 31672](http://www.tug.org/svn/texlive?view=revision&revision=31672), [Revision 31691](http://www.tug.org/svn/texlive?view=revision&revision=31691), [Revision 31759](http://www.tug.org/svn/texlive?view=revision&revision=31759)) で修正されました．

- [hyperref パッケージの hyperlink が機能しない(OS X10.9.1, MacTeX,TeXworks )](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1225)
- [hyperref.styによる目次からのリンクが無効](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1078)

#### A5 サイズ (148mm×210mm) で出力できない {#r12477d0}

TeX Live 2014 ([Revision 31398](http://www.tug.org/svn/texlive?view=revision&revision=31398)) で修正されました．

- [dvipdfmxでPDF変換した際に紙のサイズが異なる](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1073)

### dvipdfmx-20120420 で IPAexフォント (Ver.002.01) を使うと \*\* ERROR \*\* Could not obtain necessary font info. {#z5173081}

TeX Live 2013 ([Revision 28787](http://www.tug.org/svn/texlive?view=revision&revision=28787)) で修正されました．

- [dvipdfmxでipaexフォントを使うと\*\* ERROR \*\* Could not obtain necessary font info.](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/56967.html)
- [QA: dvipdfmxでipaexフォントを使うと\*\* ERROR \*\* Could not obtain necessary font info.](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=917)

### dvipdfmx-20120420, xdvipdfmx-0.7.8 で [Lucida](https://en.wikipedia.org/wiki/Lucida) や [Bitstream Charter](https://en.wikipedia.org/wiki/Bitstream_Charter) のアクセント記号 (発音記号) が表示できない {#za070e82}

TeX Live 2013 ([Revision 27479](http://www.tug.org/svn/texlive?view=revision&revision=27479), [Revision 27480](http://www.tug.org/svn/texlive?view=revision&revision=27480)) で修正されました．

dvipdfmx-20120420, xdvipdfmx-0.7.8, dvipdfm, version 0.13.3TL-j-p1d では，[Lucida](https://en.wikipedia.org/wiki/Lucida) や [Bitstream Charter](https://en.wikipedia.org/wiki/Bitstream_Charter) のアクセント記号 (発音記号) が表示できません．

```
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{charter}
\begin{document}
chass\'e du G\"obe
\end{document}
```

以下のように \\' や \\" の直後に {}$\\!\\!\\!$ を追加すれば表示できるようになりました．

```
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{charter}
\begin{document}
chass\'{}$\!\!\!$e du G\"{}$\!\!\!$obe
\end{document}
```

なお，Type1 フォントの合成済字形（これが seac を使っている）でなくて，TeX 上の合成で事足りるのであれば，アクセント自動置換をごまかして TeX 上の合成を強制することにすればよいでしょう．([アクセント合成済文字を避ける](http://d.hatena.ne.jp/zrbabbler/20120609/1339257531) を参照)

```
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{charter}
\begin{document}
chass\'{\empty e} du G\"{\empty o}be /
CHASS\'{\empty E} DU G\"{\empty O}BE
\end{document}
```

- [Lucida fonts (T1) and dvipdfm.](https://groups.google.com/group/comp.text.tex/browse_thread/thread/429dd838fe75ea40/d26feb9baf78f9d6)
- [Diacritics from Bitstream Charter are not translated to PDF](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=639373)
- [dvipdfmxがBitstream Charterでバグる！](https://twitter.com/h_okumura/status/209849248987090945)
- [seac のバグは「構成要素の文字（例だと \\'{} e \\"{} o）を文書のどこかに紛れ込ませる」と逃げられる，はず．](https://twitter.com/zr_tex8r/status/209880317023109120)
- [dvipdfm(x)のseacバグ](https://twitter.com/golden_lucky/status/209924362785140736)

## 注意点 {#n8c7de22}

### upLaTeX + dvipdfmx で波ダッシュ「〜」(U+301C) が 全角チルダ「～」(U+FF5E) で表示される {#n5909871}

map ファイルの UniJIS-UTF16-H を unicode に変更するか，ソース中に \AtBeginDvi{\special{pdf:mapline uprml-h unicode :0:msmincho.ttc}} を追加することで解決できます．

- [upLaTeX + dvipdfmx で波ダッシュ「〜」(U+301C) が 全角チルダ「～」(U+FF5E) で表示される](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1218)
- [qa:49109](https://okumuralab.org/~okumura/texfaq/qa/49109.html)
- [https://twitter.com/zr_tex8r/status/422752198724825090](https://twitter.com/zr_tex8r/status/422752198724825090)
- [https://twitter.com/zr_tex8r/status/422763693202350080](https://twitter.com/zr_tex8r/status/422763693202350080)
- [pLaTeX + dvipdfmx で PUA 文字を何とかする話](http://d.hatena.ne.jp/zrbabbler/20130420/1366451325)

### PNG 画像を取り込むと色が変わってしまうことがある {#g4474796}

一度 [ImageMagick](/ImageMagick/) の convert コマンドを通しておくことで回避できます．
問題の画像を foo.png とするとき，

```
$ convert foo.png foo_c.png
```

として，できた foo_c.png の方を取り込みます．

現在わかっているこの現象の発生条件は「取り込む PNG 画像が cHRM チャンクを持ちかつ gAMA チャンクを持たないこと」です（正確にはこれに加えて iCCP, sRGB チャンクも持たないこと）．
Adobe 製品で出力した PNG が該当することがあるようです．

チャンクの情報を調べるには，ImageMagick の identify コマンドが便利です．

```
$ identify -verbose foo.png
Image: foo.png
  Format: PNG (Portable Network Graphics)
  Mime type: image/png
...
  Properties:
    date:create: 2015-05-18T08:31:39+09:00
    date:modify: 2015-05-18T08:31:39+09:00
    png:bKGD: chunk was found (see Background color, above)
    png:cHRM: chunk was found (see Chromaticity, above)
    png:gAMA: gamma=0.45454544 (See Gamma, above)
...
```

このように，埋め込まれているチャンクの情報が表示されます．
もし png:cHRM がありかつ png:gAMA がない場合は発生条件にあてはまるため，色が変わる可能性があります．
一度 convert を通すと gAMA チャンクが付加されるため，正しく取り込まれるようになります．

（注意）sRGB チャンクについては，

```
    png:sRGB: intent=0 (Perceptual Intent)
```

という表示があっても実際には埋め込まれていないことがあるようです（詳細要調査）．

問題の背景には，PNG 画像のガンマ補正機能があります．
PNG には制作環境の情報を埋め込むことで，異なるディスプレイ環境でも色の変化を軽減するように補正する機能があります．
この補正のための情報が cHRM チャンクと gAMA チャンクに書き込まれます．
PNG の仕様書では，ガンマ補正値のデフォルト値は規定されず，cHRM チャンクがある場合は gAMA チャンクも書き出すべきとなっているのですが，ソフトウェアの設定によっては cHRM チャンクだけが書き込まれることがあります．
この場合，デコードの際に予期しないガンマ値で補正されてしまうことがあります．
実際に，Adobe 製品などでは PNG のガンマ値のデフォルトが 2.2 （一般的な CRT モニタの値で Windows や最近の Mac の標準）であると仮定して出力しますが，dvipdfmx では gAMA チャンクがない場合にガンマ値を 1.0　（PDF　のデフォルト値）として出力してしまいます．
このため，色調に変化が生じてしまいます．

なお，ICC プロファイルや sRGB チャンクが埋め込まれている場合はそちらの情報が優先されるため，この問題は発生しません．

- [forum:1579](https://okumuralab.org/tex/mod/forum/discuss.php?d=1579)

### dvips, dvipdfm, dvipdfmx で \scalebox を使用した場合に dvipdfmx の縦組時のみ他のドライバと挙動が異なる {#he8e8e71}

ZR さんによるパッチ（[pxtatescale パッケージ](https://gist.github.com/zr-tex8r/5237259)）を読み込むと解決できます．

- [\scaleboxの縦組時挙動に付いて](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=961)

## 関連リンク {#me536d1a}

- [Unofficial LaTeX graphics drivers - 概要 \[Puszcza\]](http://puszcza.gnu.org.ua/projects/latexfmxdef)
- [Newest &#39;dvipdfmx&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/dvipdfmx)
- [dvipdfmx - MyTeXpert](http://mytexpert.osdn.jp/index.php?dvipdfmx)
- [「dvipdfmx」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=dvipdfmx)
- [PXchfon パッケージ ～pLaTeX文書のフォントを簡単に変更～ \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/pxchfon.html)
- [dvipdfmx : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/dvipdfmx)
- [dvipdfmx は括弧入り eps がお嫌いのようです](http://d.hatena.ne.jp/naga_sawa/20130115/1358217658)
- [dvipdfmxのみを用いたpdfファイルサイズの圧縮](http://yonishi.cocolog-nifty.com/weblog/2011/05/dvipdfmxpdf-ebe.html)
- [standalone クラスは dvipdfmx でも使えるような気がする](https://gist.github.com/zr-tex8r/3845085)
- [LCDF TypetoolsでOpenTypeフォントを使う（DVIPDFMXで）](http://dev.activebasic.com/egtra/2012/12/18/522/)
- [The DVIPDFMx Project](http://project.ktug.org/dvipdfmx/)
- [DVI specials for PDF generation](http://project.ktug.org/dvipdfmx/doc/tb94cho.pdf) (PDF)
- [EPS の負座標が欠ける問題](http://hpcgi3.nifty.com/emath/treebbs.cgi?kako=1&all=8805&s=8840)
- [dvipdfm(x)にはご注意を](http://hpcgi3.nifty.com/emath/treebbs.cgi?kako=1&log=5586)

### ライセンス {#w1524716}

[GPLv3, GPLv2](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/COPYING?view=markup)

### ChangeLog {#he60a3d0}

- \[[texlive\] Index of /trunk/Build/source/texk/dvipdfm-x](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/ChangeLog?view=markup)
- \[[texlive\] Contents of /trunk/Master/texmf-dist/tex/latex/dvipdfmx-def/dvipdfmx.def](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/dvipdfmx-def/dvipdfmx.def?view=markup)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/dvipdfmx-def/dvipdfmx.def?view=log)
- \[[latexfmxdef\] Index of /trunk](http://svn.gnu.org.ua/viewvc/latexfmxdef/trunk/)
    - [log](http://svn.gnu.org.ua/viewvc/latexfmxdef/trunk/?view=log)
    - [ChangeLog](http://svn.gnu.org.ua/viewvc/latexfmxdef/trunk/ChangeLog?view=markup)
