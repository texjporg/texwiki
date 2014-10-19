---
title: "dvipdfmx"
url: "/dvipdfmx/"
date: 2013-06-25T04:47:13Z
bookCollapseSection: true
pukiwiki: "dvipdfmx"
---

# dvipdfmx

## [dvipdfmx/xdvipdfmx](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/) {#x9826408}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## dvipdfmx/xdvipdfmx とは {#ia9746cb}

dvipdfmx は Mark A. Wicks 氏によって開発された DVI-to-PDF 変換ソフトウェア、[dvipdfm](http://gaspra.kettering.edu/dvipdfm/) の拡張版で、xdvipdfmx は X&#x44;V ファイルを処理するための dvipdfmx の拡張版です。<br>
dvipdfm の主な特徴は、

- アウトラインやアノーテーション (注釈機能) など Acrobat Distiller の pdfmark に対応した多くの機能を提供します。
- HyperTeX (HTML)、TPIC、カラー、PSFile、その他 PostScript special など "標準的な" DVI special 機能を提供します。
- MetaPost 出力を PDF に取り込む際のネイティブな対応と、任意の PostScript ファイルを外部プログラムの助けを借りて取り込む機能を提供します。
- サムネイル埋め込み機能 (GhostScript を利用します) を提供します。
- 組版結果に対する任意のネストした線形変換 (変形) 機能を提供します。テキストを含む、すべてのページ上の描画物に対し伸縮や回転の操作を行えます。
- PDFの最初のページを (ページを描画するのに必要な) フォントなどのリソースとともにカプセル化し取り込むことができます。
- JPEG と PNG 画像を取り込むことができます。
- 内部カラー・スタック。色設定に対するスタック操作 (push、pop) が可能です。これは例えば、ヘッドラインなどで一時的に色を変えたりするのに役に立ちます。
- ファイル・サイズを小さくするためにフォントの部分埋め込みと Flate 圧縮に対応しています。
- Acrobat 製品群では不完全な (dvipdfm マニュアルが書かれた当時) エンコーディングの問題に対処するために、フォントの再エンコーディングの機能を提供します。
- ページとデスティネーション・ツリーに対する平衡木の利用により、巨大な文書における PDF ビューアのアクセスを高速化します。

[Dvipdfm User's Manual Version 0.12.4](http://gaspra.kettering.edu/dvipdfm/dvipdfm-0.12.4.pdf) より

dvipdfmx での主な変更・拡張は

- OpenType/TrueType に対するより完全な対応、特に2バイトフォントとしての利用や縦組み用のグリフ置換機能を提供します。
- Subfont Definition ファイルへの対応。CJK-LaTeX を使う際のフォントの問題を解消します。
- PostScript CMap リソースを利用して多様な旧来のエンコーディングに対応します。
- 入力エンコーディングとしての Unicode への対応や ToUnicode CMap の自動生成など Unicode 関連の機能の強化を提供します。
- アスキー pTeX 拡張への対応。
- pdfTeX 互換 special などいくつかの special コマンドを追加します。
- Type1 フォントの CFF (Type1C) への変換や オブジェクト・ストリーム対応などファイル・サイズ削減のための様々な機能を提供します。
- アルファ・チャンネルや埋め込み ICC プロファイル対応などの改善されたラスタ画像への対応。

などです。<br>

[XeTeX, XeLaTeX](/XeTeX/) を -no-pdf オプションを指定しないで実行すると xdvipdfmx が自動的に実行されます．<br>

### ライセンス {#w1524716}

[GPLv3, GPLv2](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/COPYING?view=markup)<br>

### ChangeLog {#he60a3d0}

- \[[texlive\] Index of /trunk/Build/source/texk/dvipdfm-x](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/ChangeLog?view=markup)
- \[[texlive\] Contents of /trunk/Master/texmf-dist/tex/latex/dvipdfmx-def/dvipdfmx.def](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/dvipdfmx-def/dvipdfmx.def?view=markup)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/dvipdfmx-def/dvipdfmx.def?view=log)
- \[[latexfmxdef\] Index of /trunk](http://svn.gnu.org.ua/viewvc/latexfmxdef/trunk/)
    - [log](http://svn.gnu.org.ua/viewvc/latexfmxdef/trunk/?view=log)
    - [ChangeLog](http://svn.gnu.org.ua/viewvc/latexfmxdef/trunk/ChangeLog?view=markup)

## 不具合 {#mb96765c}

### dvipdfmx Version 20130624 で TikZ を使用した DVI ファイルを処理すると \*\* ERROR \*\* Invalid object type: 10 → TeX Live 2014 (dvipdfmx Version 20140317) 以降にアップデート {#m3330a51}

TeX Live 2014 (dvipdfmx Version 20140317), TeX Live 2013 (dvipdfmx-20130405) では大丈夫です<br>
TeX Live 2014 (→ [Revision 31738](http://www.tug.org/svn/texlive?view=revision&revision=31738), [Revision 31739](http://www.tug.org/svn/texlive?view=revision&revision=31739) を参照) で修正されました<br>

- \[[dvipdfmx\] tikz のパターン描画でエラー](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1081)

### dvipdfmx Version 20130624 で しおりを作成するとジャンプできない → TeX Live 2014 (dvipdfmx Version 20140317) 以降にアップデート {#x496f09a}

TeX Live 2014 (dvipdfmx Version 20140317), TeX Live 2013 (dvipdfmx-20130405) ではジャンプできます<br>
TeX Live 2014 (→ [Revision 31386](http://www.tug.org/svn/texlive?view=revision&revision=31386), [Revision 31672](http://www.tug.org/svn/texlive?view=revision&revision=31672), [Revision 31691](http://www.tug.org/svn/texlive?view=revision&revision=31691), [Revision 31759](http://www.tug.org/svn/texlive?view=revision&revision=31759) を参照) で修正されました<br>

- [hyperref パッケージの hyperlink が機能しない(OS X10.9.1, MacTeX,TeXworks )](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1225)
- [hyperref.styによる目次からのリンクが無効](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1078)

### dvipdfmx Version 20130624 で PDF 変換した場合に A5 サイズ (148mm×210mm) で出力できない → TeX Live 2014 (dvipdfmx Version 20140317) 以降にアップデート {#r12477d0}

TeX Live 2014 (dvipdfmx Version 20140317), TeX Live 2013 (dvipdfmx-20130405) では出力可能です<br>
TeX Live 2014 (→ [Revision 31398](http://www.tug.org/svn/texlive?view=revision&revision=31398) を参照) で修正されました<br>

- [dvipdfmxでPDF変換した際に紙のサイズが異なる](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1073)

### dvipdfmx-20120420 で IPAexフォント (Ver.002.01) を使うと \*\* ERROR \*\* Could not obtain necessary font info. → TeX Live 2013 (dvipdfmx-20130405) 以降にアップデート {#z5173081}

TeX Live 2013 (→ [Revision 28787](http://www.tug.org/svn/texlive?view=revision&revision=28787) を参照) で修正されました<br>

- [dvipdfmxでipaexフォントを使うと\*\* ERROR \*\* Could not obtain necessary font info.](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/56967.html)
- [QA: dvipdfmxでipaexフォントを使うと\*\* ERROR \*\* Could not obtain necessary font info.](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=917)

### dvipdfmx-20120420, xdvipdfmx-0.7.8 で [Lucida](https://en.wikipedia.org/wiki/Lucida) や [Bitstream Charter](https://en.wikipedia.org/wiki/Bitstream_Charter) のアクセント記号 (発音記号) が表示できない → TeX Live 2013 (dvipdfmx-20130405) 以降にアップデート {#za070e82}

TeX Live 2013 (→ [Revision 27479](http://www.tug.org/svn/texlive?view=revision&revision=27479), [Revision 27480](http://www.tug.org/svn/texlive?view=revision&revision=27480) を参照) で修正されました<br>

dvipdfmx-20120420 (修正前) と xdvipdfmx-0.7.8 (修正前) と dvipdfm, version 0.13.3TL-j-p1d で [Lucida](https://en.wikipedia.org/wiki/Lucida) や [Bitstream Charter](https://en.wikipedia.org/wiki/Bitstream_Charter) のアクセント記号 (発音記号) が表示できません．<br>

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

↑ Type1 フォントの合成済字形（←これが seac を使っている）でなくて、TeX 上の合成で事足りるのであれば、アクセント自動置換をごまかして TeX 上の合成を強制することにすればよいでしょう。([アクセント合成済文字を避ける](http://d.hatena.ne.jp/zrbabbler/20120609/1339257531) を参照)

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
- [seac のバグは「構成要素の文字（例だと \\'{} e \\"{} o）を文書のどこかに紛れ込ませる」と逃げられる、はず。](https://twitter.com/zr_tex8r/status/209880317023109120)
- [dvipdfm(x)のseacバグ](https://twitter.com/golden_lucky/status/209924362785140736)

## 注意点 {#n8c7de22}

### upLaTeX + dvipdfmx で波ダッシュ「〜」(U+301C) が 全角チルダ「～」(U+FF5E) で表示される → map ファイルの UniJIS-UTF16-H を unicode に変更または \AtBeginDvi{\special{pdf:mapline uprml-h unicode :0:msmincho.ttc}} を追加 {#n5909871}

- [upLaTeX + dvipdfmx で波ダッシュ「〜」(U+301C) が 全角チルダ「～」(U+FF5E) で表示される](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1218)
- [qa:49109](https://okumuralab.org/~okumura/texfaq/qa/49109.html)
- [https://twitter.com/zr_tex8r/status/422752198724825090](https://twitter.com/zr_tex8r/status/422752198724825090)
- [https://twitter.com/zr_tex8r/status/422763693202350080](https://twitter.com/zr_tex8r/status/422763693202350080)
- [pLaTeX + dvipdfmx で PUA 文字を何とかする話](http://d.hatena.ne.jp/zrbabbler/20130420/1366451325)

### dvips, dvipdfm, dvipdfmx で \scalebox を使用した場合に dvipdfmx の縦組時のみ他のドライバと挙動が異なる → [pxtatescale パッケージ](https://gist.github.com/zr-tex8r/5237259) を使用する {#he8e8e71}

- [\scaleboxの縦組時挙動に付いて](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=961)

## 使い方 {#qabeb774}

- [Dvipdfm マニュアル](http://gaspra.kettering.edu/dvipdfm/dvipdfm-0.12.4.pdf) (英語) をまず読んでください。

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
 コマンドラインから入力されるすべての寸法は "True" 付きと解釈される。
 "-s" の引数はコンマで分離されたページレンジを列挙したものです、
         例えば、"-s 1-3,5-6".
 ページサイズは用紙フォーマット (例: "a4")
         あるいは w<unit>,h<unit> (例: "20cm,30cm") で指定。
```

```
 バグ報告は電子メールで: tex-k@tug.org.
```

### フォントの設定 {#tbddb566}

フォントの設定は TeX 関連プログラムを使う際に大きな困難となる部分です。<br>
TeX とその関連プログラムがどのようにフォントを取り扱うのか、あまり理解していない場合は各ディストリビューションのデフォルト設定に従うのが賢明です。<br>
フォント管理ツール (updmap など) が利用可能であればそれを利用しましょう。<br>

フォントの設定はマップファイルで行います。<br>
マップファイルの役割は、TeX が認識するフォント名と実際に PDF 出力に使うべき実フォントとを対応付けることです。<br>
このファイルの書式は<br>

```
 tfm[@SFD@] enc font options
```

のようになります。<br>
ここで <em>tfm</em> は TeX において使われるフォント名、<em>enc</em> は使用すべきフォントのエンコーディング、<em>font</em> は PDF 出力に用いられる実フォント名（通常はファイル名）で <em> options</em> で様々なオプションを指定します。<br>
\[@SFD@\] の項は CJK パッケージで用いられるフォントの分割方法の指定で、pLaTeX などでは通常不要です。<br>

TeX Live や W32TeX をフルインストールすれば各 OS で利用可能なフォントのマップファイルは既にインストールされています。<br>
TeX Live でフォントのマップファイルが存在しない場合は [jfontmaps パッケージ](http://www.ctan.org/pkg/jfontmaps) を導入します。<br>
使用するマップファイルの切り替えには updmap プログラムを使います。<br>
マップファイルが用意されていないフォントを使いたい場合は自分で用意しなければなりません。<br>

以下にマップファイルの書き方について簡単に解説します。<br>

#### TeX フォント名 {#ua7d8a2c}

マップファイルの <em>tfm</em> のフィールドには TeX で使用されるフォント名、あるいは Virtual font から最終的に辿り着く TeX フォントがきます。<br>
cmr10 や rml などです。<br>
オプションとして @ SFD@ をつけることができます。<br>
ここで SFD は SubFont Difinition 名です。<br>
このオプションは <em>SFD</em> の規則に従い分割されたサブフォントを一つのフォントにまとめあげる (復元する) ときに指定します。<br>

```
 min@Unicode@  unicode  Mincho
```

は、Unicode.sfd の規則にしたがって分割されたサブフォント群 min00, min01, ... を逆にひとつの Unicode フォントとして復元します。<br>
その後このひとつに束ねられた仮想的なフォントは Mincho というフォントにマップされます。<br>

#### エンコーディング {#y16b9bc3}

エンコーディング・フィールド <em>enc</em> を正しく指定しないと正しい出力は得られません。<br>
dvipdfmx でサポートされているのは<br>

```
 dvips の .enc 名
 PostScript CMap リソース名
 unicode
```

の3種類です

dvips の .enc ファイルは 8-bit エンコーディング用のエンコーディングファイルで、どのコードポイントにどの文字 (グリフ) が割り当てられているかを PostScript の書式で記述します。<br>
例えば、8r.enc では<br>

```
  /TeXBase1Encoding [
  % 0x00
    /.notdef /dotaccent /fi /fl
    /fraction /hungarumlaut /Lslash /lslash
    ...(略)...
    /udieresis /yacute /thorn /ydieresis
  ] def
```

のような記述が見られます。<br>
コード 0x00 に /.notdef (未定義) 文字を、0x01 に /dotaccent を、0x02 に /fi (f と i のリガチャ) を...割り振っています。<br>
ここでは文字の識別は PostScript グリフ名で行われます。<br>
dvipdfmx では OpenType/TrueType フォントに対して dvips enc ファイルを適用する場合は、Unicode 値を使って /uniXXXX (XXXX は 4 桁の 16 進数 Unicode 値) という形での指定も可能です。<br>
必要な dvips enc ファイルは通常のインストールでほぼすべてインストールされています。<br>

```
 foo 8r Foo
```

というマップエントリは TeX フォント foo を Foo に対応付けます。<br>
その際 TeX で用いられたエンコーディングは 8r.enc に記述されてあるものとします。<br>

PostScript CMap リソースは dvipdfmx が文字を CID (Character IDentifier) と呼ばれる文字の識別番号で識別する場合に用いられます。<br>
PostScript CMap ファイルは一般的によく用いられるエンコーディング (Shift-JIS など) から CID への対応付けを記述したファイルです。<br>
例えば、UniJIS-UCS2-H は Unicode の JIS サブセットの範囲で UCS2 で表現された文字列を Adobe-Japan1 で定められた文字集合の CID の並びに変換するのに用いられます。<br>
dvipdfmx では拡張子が ".otf" の 和文 OpenType フォントに対しては通常これを使います。<br>
pTeX/pLaTeX でよく用いられる設定は:

```
 rml  H Ryumin-Light
 gbm  H GothicBBB-Medium
```

などです。<br>
CMap ファイルは通常は [Adobe によって管理されたもの](http://sourceforge.net/adobe/cmap/wiki/Home/) が一式インストールされているはずです。<br>

最後に unicode は OpenType/TrueType フォントに内臓の Unicode マッピングテーブルを使って Unicode 値からフォント内の字形データを得ることを指定します。<br>
upLaTeX や Omega など DVI ファイル内のエンコーディングが Unicode となる場合にはこれが使えます。<br>

```
 uprml-h unicode ipaexm.ttf
```

エンコーディング unicode は PostScript Type1 フォントに対しても指定が可能です。<br>
この場合は、Adobe グリフリストの記述に従い PostScript グリフ名と Unicode 値とを対応付けます。<br>
ファイル "glyphlist.txt" がインストールされている必要があります。<br>

#### 実フォント名 {#he05780d}

<em>font</em> の項には出力 PDF で使用されるフォント名がきます。<br>

これは通常フォントファイル名です。<br>

```
 ugoth10  unicode  Gothic.ttf
```

は TeX フォント ugoth10 を TrueType フォント Gothic.ttf に結びつけます。<br>
また、フォントファイルが TrueType Collection の場合は<br>

```
 ugoth10  unicode  :1:GothicB.ttc
```

のようにファイル名の前に :n: を付けることで n 番目のフォントを選べます。<br>
実フォント名の前に "!" スイッチを付けることでフォントを非埋め込みにすることも可能です:

```
 ugoth10 unicode   !Gothic.ttf
```

フォントを非埋め込みにすることでファイルサイズをかなり小さくできますが、表示に問題が生じる場合が多々あります。<br>
特に文書の再現性と (長期的な) 保存という観点からは推奨されません。<br>
実際、PDF を長期保存可能なフォーマットとして利用することを目標として、[国際標準化機構（ISO） により制定された PDF/A](http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=38920) ではフォントをすべて埋め込むことを求めています。<br>

#### オプション {#d4922a30}

オプション・フィールドではフォントに対して様々なオプションを与えます。例えば、"変形" オプション

```
 -s .167
 -e 1.2
 -b 1.0
```

のうち、"s" は斜体 (slanted) に、"e" は横に伸張 (extended) し、"b" は "太字" にするオプションです。<br>
"b" オプションによる疑似太字の結果は酷いもので、これの利用は推奨されません。<br>
将来削除される可能性もあります。<br>

フォント・オプション:

```
 -i 2
 -w 1
```

"i" は TrueType Collection インデックスの指定 (フォント名の前の :2: と同じ) で "w" は縦書き/横書きの指定です。<br>
"w" はエンコーディングが unicode のときのみ有効で、値が 1 のときは縦書き用であることを示します。<br>
オプション "w" の値が 1 のとき縦書き用の OpenType グリフ置換機能が有効になります。<br>
エンコーディングを unicode に指定して縦組みを行う場合、"-w 1"　を指定しないと括弧や句読点が正しく表示されないことに注意してください。<br>

```

```

#### フォント関連のよくあるエラーと警告 {#p3025758}

フォントとエンコーディング関連、PostScript ファイルの取り込みではエラーが多発します。<br>
フォント関連でよくあるエラー・警告とその原因です:

```
 Could not locate a virtual/physical font for TFM “gbm-jis”.
 There are no valid font mapping entry for this font.
 Font file name “gbm-jis” was assumed but failed to locate that font.
 Cannot proceed without .vf or “physical” font for PDF output…
```

この種のエラーは mktexpk (ビットマップ・フォント生成プログラム) が実行され失敗した後表示されます。<br>
TeX フォント "gbm-jis" にはなんら実フォントとの対応付けがなされておらず、"gbm-jis" という名のフォントを試そうとして失敗しました。<br>
おそらくフォントの設定が適切になされてません。<br>
類似のエラーとして:

```
 Could not locate a virtual/physical font for TFM "hgothr-h".
 This font is mapped to a physical font "HiraKakuProN-W3.otf".
 Please check if kpathsea library can find this font: HiraKakuProN-W3.otf
 Cannot proceed without .vf or "physical" font for PDF output...
```

のようなメッセージが出る場合は、フォント "HiraKakuProN-W3.otf" がインストールされていないか dvipdfmx が見つけられる場所にありません。<br>

```
 Could not find encoding file "H".
```

pTeX/pLaTeX で通常必要な PostScript CMap リソース "H" が見つかりませんでした。<br>
これらのファイルが正しくインストールされていない可能性があります。<br>

```
 No character mapping available.
 CMap name: H
 input str: <7c>
```

CMap "H" での文字コード変換に失敗しました。<br>
おそらくエンコーディングの指定が誤っています。<br>
自身が DVI への出力にどのようなエンコーディングを使っているか把握する必要があります。<br>
H (JIS) で未定義の文字コードを使っている可能性もあります。<br>

```
 Glyph missing in font. (CID=19141, code=0x4e23)
```

お使いのフォントには CID 19141 に対応する文字データがありません。<br>
フォントを代えるなどの対処が必要です。<br>

```
 Failed to load AGL file "glyphlist.txt"...
```

PostScript グリフ名と Unicode との対応を記述したファイル "glyphlist.txt" が読み込めませんでした。<br>
(主に欧文フォントで) 稀に文字が欠落したり、生成された PDF ファイルで文字列の検索やコピー &amp; ペーストがうまくいかなくなるかも知れません。<br>

```
 CMap has higher supplement number than CIDFont: Ryumin-Light
 Some characters may not be displayed or printed.
```

使用している CMap が新しい改訂版であるため、フォント "Ryumin-Light" に含まれない文字が使用される可能性があります。<br>
文字が欠落する可能性があり、"Glyph missing in font." の警告が出ないか注意する必要があります。<br>

#### ファイルが見つからない場合の対処法 {#x37a3e64}

ファイルが見つからないというエラーが出た場合は、dvipdfmx が実際にどこを探していてるかを知る必要があります。<br>
TeX 関連の多くのプログラムは kpathsea というライブラリにファイル検索を依頼しており、dvipdfmx も kpathsea ライブラリを利用しています。<br>
kpsewhich というコマンドラインプログラムがファイルを置くべき場所を知るのに利用できます。<br>
例えば、PostScript CMap "H" が dvipdfmx に見える場所にあるか確かめるには

```
 kpsewhich -progname=dvipdfmx -format=cmap H
```

とします。<br>
ファイルが存在する場合はその場所が出力されます。<br>
空行しか出力されない場合は dvipdfmx の検索パスにファイルが存在しません。<br>
CMap ファイルがどこにインストールされているべきなのか知るには

```
 kpsewhich -progname=dvipdfmx -show-path=cmap
```

のようにします。<br>
区切り文字 (Windows では ";") で区切られたフォルダのリストが出力されます。<br>
検索パス等は

```
 kpsewhich -a -format=cnf texmf.cnf
```

で示されるファイルで設定されています。<br>
kpsewhich の使い方については

```
 kpsewhich -help
```

などを参照してください。<br>

#### フォント関連の重要なファイル {#d0149545}

pTeX/pLaTeX で日本語を使うために最低限必要なファイルは PostScript CMap リソース "H" (と "V") です。<br>
TrueType フォントを利用する場合はこれに加えて "Adobe-Japan1-UCS2"  というファイルが必要となります。<br>
"H" は JIS エンコーディングから Adobe-Japan1 の CID 値への対応付けを行う変換用のファイルで、"Adobe-Japan1-UCS2" は Adobe-Japan1 の CID を Unicode に変換するのに用いられます。<br>
TrueType フォントを (PostScript CMap リソースとともに) 利用する場合は

```
 JIS --> Adobe-Japan1 --> Unicode
```

という 2 重の (文字コード) 変換を伴います。<br>

他に Unicode に関連した重要なものとして [Adobe グリフリスト](http://partners.adobe.com/public/developer/en/opentype/glyphlist.txt)があります。<br>
これは "glyphlist.txt" という名前でインストールされている必要があります。<br>
このファイルは PostScript グリフ名を Unicode に対応付ける必要がある場合に利用されます。<br>
PostScript Type1 フォントを Unicode で使う場合がそのひとつです。<br>
生成されたPDF ファイル内の文字列の検索やコピー &amp; ペーストを可能にするためにも重要な役割を果たします。<br>

### 画像の取り込み {#a1cabace}

dvipdfmx がサポートする画像フォーマットは PNG、JPEG、BMP、JPEG 2000 (2014/08/11 より) および MetaPost が出力した EPS (MPS) です。<br>
これに加えて PDF のページも取り込めます。<br>
通常の EPS はサポートされていないことに注意してください。<br>
通常の EPS ファイルの取り込みでは外部プログラムを呼び出し、dvipdfmx が扱えるフォーマットに変換してから取り込みます。<br>

dvipdfmx はダウンサンプルは行いません。<br>
画像を埋め込むとファイルサイズが異様に大きくなるような場合は画像加工ソフトで適切な解像度になるように画像のサイズを調整してください。<br>
2インチ (5.08センチ) の幅に 300dpi の解像度で画像を収める場合の画像の幅 (横方向のピクセル数) は 600 です。<br>
一般的なプリンタでの印刷の場合はこれくらいの解像度でもよいでしょう。<br>
2インチ-72dpi (スクリーン向け低解像度) の場合は 144 ピクセル、2インチ-150dpi (電子書籍向け) の場合は 300 ピクセルです。<br>

#### サポート状況 {#e5c0f21c}

PNG はよくサポートされています。<br>
透明度や埋め込み ICC プロファイルなどの情報も保持されます。<br>
色深度が 16bpc のときは 8bpc へと変換されるという制限があります。<br>
メタデータの保持はできていません。<br>

JPEG は比較的よくサポートされています。<br>
CMYK 色空間にも対応していますが、ビューアが対応していない可能性もあるため避けるのが無難です。<br>
物理的サイズ (解像度) の取得に JFIF データを利用します。<br>
Exif データは利用していません。<br>
JFIF と Exif データに不整合がある場合にサイズの決定に問題が生じることが知られています。<br>
埋め込み ICC プロファイルにも対応しています。<br>

BMP は非圧縮かランレングス圧縮のものに限られます。<br>
多くの拡張機能には対応していません。<br>

JPEG 2000 の対応は最低限のものです。<br>
PDF の仕様の制限から JP2 と JPX baseline サブセットに限定されます。<br>
J2C ファイルには対応していません。<br>
透明度については不明です。<br>

PDF はベクタ•ラスタ画像のどちらにもよく対応した高機能なフォーマットですが、仕様の改訂の度に複雑化するという問題があります。<br>
不要に高いバージョン設定にしない、タグ付きにしないなどの点に注意すれば比較的よく対応できます。<br>
これまで PDF-1.5 以上のファイルで取り込みに失敗することがありましたが、2014/08/14 の修正でそのようなファイルにも対応しました。<br>

#### どのフォーマットを選ぶべきか？ {#la46999e}

PNG と JPEG で満足しているのであればそれを続けましょう。<br>
PDF は PNG と同等の機能をもち、JPEG も丸ごとサポート (実際に丸ごと JPEG ファイルを埋め込める) しているので PDF で統一することも考えられます。<br>
RAW データから JPEG への変換でもやもやとしたノイズが気になる場合は JPEG 2000 を検討してもよいでしょう。<br>
ただし、JPEG 2000 は普及に失敗したようで PDF ビューアのサポートが十分でない可能性もあります。<br>

PostScript はそれが確かに必要だという場合を除き使わない方がよいでしょう。<br>
dvipdfmx は PostScript を直接サポートしていません。<br>

#### PostScript ファイルの取り込み {#q1c3abbe}

PostScript ファイルを取り込む際には通常は GhostScript が自動的に起動し、PDF へ一時的に変換したうえで取り込みます。<br>
具体的には dvipdfmx.cfg のオプションの記述を見ましょう:

```
 kpsewhich -progname=dvipdfmx -format=othertext dvipdfmx.cfg
```

で示されるファイルに

```
 D  "rungs -q -dNOPAUSE -dBATCH -dEPSCrop \
         -sDEVICE=pdfwrite ...(略)... -sOutputFile='%o' '%i' -c quit"
```

のような一行があるはずです。("%" で始まる行はコメント行です)<br>
この部分の指示により dvipdfmx は PostScript の図を埋め込むように指示されたとき、自動的に rungs (gs へのラッパー) を起動し PDF へ変換するように動作します。<br>
"D" オプションの基本的な書式は

```
 D "command %i %o"
```

のような形です。<br>
ここで　"%o"、"%i" はそれぞれ出力 (dvipdfmx が定める一時ファイル名)、入力ファイル名に置き換わります。<br>
取り込まれた PostScript の図に問題があるようでしたらこのオプションを見直してください。<br>
PostScript ファイルはトラブルの大きな原因です。<br>
フォントをすべて埋め込んだはずなのに埋め込まれていないフォントがある。<br>
和文フォントを使わないようにしたはずなのに実際は使ってある。<br>
など、取り込まれた PostScript ファイルが原因となっている場合があります。<br>
また変換が失敗する場合はまず "D" オプションで指定されたコマンドを直接実行してみて、どのようなエラーがでるのか調べてください。<br>
dvipdfmx が

```
 Filtering file via command -->rungs -q ...(略)... failed.
 Image format conversion for "./foo.eps" failed...
```

のようなエラーメッセージを出力する場合は PostScript の変換プログラムが変換に失敗しています。<br>

#### SVG を取り込む {#o8c48aab}

"D" オプションは EPS ファイルを取り込むためだけのものではありません。<br>
これは dvipdfmx がサポートしない形式のファイルを処理するための一般的なものです。<br>
[Inkscape](/Inkscape/) などに SVG から PDF への変換を依頼して図を取り込むこともできます:

```
 D "inkscape -z -A %o %i"
```

実際の運用では様々な画像フォーマットに対して分岐処理をするスクリプトを呼び出すことになるでしょう。<br>

#### MetaPost 出力への対応 {#gd0313ef}

MetaPost が出力する EPS ファイルは外部プログラムの助けなしに dvipdfmx が処理することができます。<br>
ただし、

```
 prologues:=2;
```

に指定してください。<br>
また、非公式ですが dvipdfmx に "-M" オプションを付けて実行することで "MetaPost モード" で MetaPost 出力を PDF へ変換することができます。<br>
例えば MetaPost が出力した "test.1" というファイルに対して

```
dvipdfmx -M -o test.pdf test.1
```

を実行すると、"test.pdf" が生成されます。<br>
デバッグ用に使えます。<br>

### special コマンド {#p133bd5e}

dvipdfmx は様々な special 拡張をサポートしています。<br>
文書やページの設定を行うものとして

```
 papersize landscape pdf:pagesize pdf:encrypt pdf:minorversion
```

など、dvips 由来のもの、HTML 形式のハイパーリンクなど様々です。<br>
dvipdfmx 自身も独自の special による拡張機能を持ちます。<br>

これらの機能のうちほとんどはユーザーが直接意識することはありません。<br>
通常はパッケージの製作者が LaTeX 等の為の使い易いインターフェイスを提供します。<br>
しかしながら様々な特殊効果を出す為にこれらの拡張機能を直接使いたい場合もあります。<br>
dvipdfm(x) 独自の機能を使う場合は、それにより他の DVI ドライバとの互換性を酷く損なうという事に注意してください。<br>
いくつかの機能は DVI の設計思想に反することもあります。<br>

#### ページ設定 {#zbee7ac4}

landscape や papersize などの文書全体に影響するものは PDF への変換前にスキャンされ実行されます。<br>

```
 \special{landscape}
```

は用紙を横置きに、

```
 \special{papersize=210mm,297mm}
```

は用紙サイズを 210mm × 297mm に設定します。<br>

pagesize は文書の途中でも使えますが、これが実行されるタイミングによっては予期せぬ結果となります。<br>
特にページがシャッフルされる時は意図したようにはなりません。<br>

```
  \special{pdf:pagesize width 210mm height 297mm}
```

のように使います。<br>

#### special で遊ぶ {#a807a6c0}

- [http://www2.hyo-med.ac.jp/~tanimura/LaTeX/dvipdfmx.html](http://www2.hyo-med.ac.jp/~tanimura/LaTeX/dvipdfmx.html) あたりに dvipdfm/dvipdfmx 用の \specail の様々な使用例があります。<br>

アノーテーション (注釈機能) でファイルを添付:

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

上の例ではまず最初の special で外部ファイルを取り込み、それを fileobj と名付けます。<br>
次の special で "添付ファイル" アノーテーションを作ります。<br>
出来上がった PDF には小さなクリップが表示され、その上で右クリックするとメニューから添付ファイルを保存できるようになるはずです。(ビューアーによって操作は異なります)<br>
このようにして TeX のソースを埋め込んでおくこともできます。<br>

ページの開始時に任意の PDF 描画コードを挿入することもできます:

```
 \special{pdf:bop 0.4 0.4 0.6 rg 0 0 596 842 re 72 72 452 700 re f*}
```

これは余白の部分を塗りつぶします。<br>
"bop" はページの開始時に指定された PDF 描画コードを埋め込みます。<br>

ウォーターマーク風のものを入れます:

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

(bophook.sty が必要です) やや複雑な例です。<br>
"obj" はオブジェクトを定義するコマンドでここでは Courier-Bold というフォントを定義しています。<br>
"bop" はページの開始時に "Sample" という文字列を描画するように指示しています。<br>
"put" の部分では resources で識別される辞書オブジェクト (ここではページリソース) に与えられたオブジェクトを追加します。<br>
ここではフォントリソースに先ほど定義したフォント Courier-Bold を "\_Fn01" という名前で登録しています。<br>

上の例ではページに直接 Sample という文字を書き込みましたがアノーテーションを使ってウォーターマークを入れることもできます。<br>

### フォントの埋め込みとライセンス {#x49ed9c0}

フォントを PDF へ埋め込めるかどうか、そしてその PDF が配布可能かどうかはフォントの提供元が定める規則に従ってください。<br>
新たにフォントを入手されたときには、そのフォントに付属の EULA (エンドユーザ使用許諾契約) をよく読んで理解したうえで使用してください。<br>

OpenType と Windows 向け TrueType フォントにはフォントファイルの中にフォントの埋め込み許可に関する情報が記載されています。<br>
dvipdfmx はこの情報を読み取り埋め込み可能かどうか判断し、場合によってはライセンスに関する警告を発します。<br>
Microsoft による [TrueType の仕様書](http://www.microsoft.com/typography/SpecificationsOverview.mspx) では以下の埋め込みライセンス形態が指定可能です:

- 埋め込み不許可: このライセンスのフォントは著作権保有者の許可なしには、いかなる形でのフォントの受け渡しを禁止しています。
    - 表示と印刷可: フォントは表示と印刷のために用いる場合にのみ埋め込むことができます。
    - 編集可: "表示と印刷" に加えて文書を受け取った側はこのライセンスのフォントを含む文書を編集することができます。
    - インストール可: フォントを文書に埋め込んで配布することができ、それを受け取った側は文書の表示・印刷・編集が可能です。また受け取った側は、埋め込まれたフォントをパソコンに恒久的にインストールすることができ、そのフォントに関してフォントの元の入手者 (文書の配布者) と同じ権利を保有するとともに同じ EULA の制限を受けることになります。

文書の受け手に "表示と印刷" <em>のみ</em>を許可するには、文書を暗号化により保護するしかありません。<br>
また OpenType/TrueType の仕様書は "インストール可" の場合を除き、文書からフォントを抽出しシステムに恒久的にインストールすることを禁じています。(許可された目的のために一時的にインストールすることは可能)

OpenType/TrueType フォントファイルに記載できるフォントの埋め込み許可情報は簡易なものです。<br>
詳細については必ずそのフォントの EULA を参照するようにしてください。<br>

Adobe のフォントに関しては、Adobe のサイト "[フォントの埋め込みや編集などに関する許可](http://www.adobe.com/jp/type/browser/info/embedding.html)" を参照してください。<br>
なお、Adobe Reader に付属の小塚フォントは Adobe Reader からの利用のみが可能ですので dvipdfmx で流用することはできません。注意してください。<br>

MS 明朝・MS ゴシックに関して、かつてはフォントを埋め込んだ文書を (不特定多数の人間に) 配布することはライセンスに抵触するのではないかという議論がありました。<br>
しかしながら、フォントの利用に関して供給元であるリコーと Microsoft の見解に変化があったようです ([ゆず屋：\[豆知識\] MS明朝、MSゴシックは（今は）商用利用できる](http://yuzuya.style.coocan.jp/blog/archives/2010/12/22223803.php)) ので再度調査が必要です。<br>

Windows 標準搭載フォントのうち Microsoft に著作権があるものに関しては、"[マイクロソフトの著作物の使用について](http://www.microsoft.com/ja-jp/mscorp/legal/permission/default.aspx)" によると、Windows の使用許諾契約書内にあるフォントの条項で規定されているようです。<br>
Microsoft による[ライセンス条項のページ](http://www.microsoft.com/ja-jp/mscorp/legal/useterms/)からたどれる"マイクロソフト ソフトウェア ライセンス条項" には (Windows 7 Professional の場合)

> · フォントの埋め込みに関する制限の下で許容される範囲でコンテンツにフォントを埋め込む。

ことが許可されるとの記載があります。<br>
"フォントの埋め込みに関する制限の下で許容される範囲" というものが何を指しているのかは不明です。<br>
また、別のサイト "[Microsoft Typography - Font Redistribution FAQ](http://www.microsoft.com/typography/RedistributionFAQ.mspx)" にはフォントの "プロパティー" (フォントファイルの上で右クリック) の詳細のタブにある "フォント埋め込み可能" の項目を参照するように書かれています。<br>
この情報はおそらく dvipdfmx がフォントの埋め込みの際に参照するライセンス情報と同じものです。<br>

OS X に関しては、Apple による[ハードウェアおよびソフトウェア製品規約](https://www.apple.com/jp/legal/sla/)のページを参照してください。<br>
"[OS X（Mountain Lion 10.8.2）ソフトウェアライセンス](https://www.apple.com/legal/sla/docs/OSX1082.pdf)" の p.41 には

> E. フォント　本契約の契約条件に従って、お客様は、Appleソフトウェアの起動中にコンテンツ
> を表示およびプリントするために、Appleソフトウェアに入っているフォントを使用することが
> できます。しかし、お客様は、問題になっているフォントに付属する組み込み制限が許諾する場
> 合のみ、コンテンツの中にフォントを組み込むことができます。これらの組み込み制限は、Font
> Book/プレビュー/フォント情報を表示、においてご覧になれます。

との記載があります。<br>

### PDF のバージョンを指定する {#b272a636}

- [出力 PDF のバージョン（とか）を指定する](http://d.hatena.ne.jp/zrbabbler/20140705/1404540914), [出力 PDF のバージョン（とか）を指定する（補足）](http://d.hatena.ne.jp/zrbabbler/20140706/1404618797)
- [https://github.com/zr-tex8r/BXpdfver](https://github.com/zr-tex8r/BXpdfver)
- [pdfの図が表示されない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=690)
- [mediabb パッケージが（あまり）役に立たない話](http://d.hatena.ne.jp/zrbabbler/20140530/1401462549)

PDF 1.4 で出力したい場合はプリアンブルに

```
\special{pdf: minorversion=4}
```

bxpdfver パッケージを使用する場合は

```
\usepackage[dvipdfmx,1.4]{bxpdfver}
```

PDF 1.5 で出力したい場合はプリアンブルに

```
\special{pdf: minorversion=5}
```

bxpdfver パッケージを使用する場合は

```
\usepackage[dvipdfmx,1.5]{bxpdfver}
```

PDF 1.6 で出力したい場合はプリアンブルに

```
\special{pdf: minorversion=6}
```

bxpdfver パッケージを使用する場合は

```
\usepackage[dvipdfmx,1.6]{bxpdfver}
```

PDF 1.7 で出力したい場合はプリアンブルに

```
\special{pdf: minorversion=7}
```

bxpdfver パッケージを使用する場合は

```
\usepackage[dvipdfmx,1.7]{bxpdfver}
```

と記述すれば OK です．<br>

コマンドラインオプションで指定することもできます．<br>

```
-V number     Set PDF minor version
```

### dvipdfmx を画像キャッシュで高速化 {#y11c4b43}

- TeX Live 2013 以降で使用可能です (→ TeX Live [Revision 29495](http://www.tug.org/svn/texlive?view=revision&revision=29495), [Revision 29512](http://www.tug.org/svn/texlive?view=revision&revision=29512) でコミットされました)
- [Image cache in (x)dvipdfmx by Tsuchimura-san](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1153)
- [dvipdfmx を画像キャッシュで高速化](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=958)

デフォルトでは有効にならないようになっています。<br>
有効にするにはコマンドラインオプション

```
-I number
```

において、number を正整数にします。<br>
この数値は、キャッシュが有効な時間を表しています。<br>
デフォルトで有効にしたい場合、dvipdfmx.cfg の I セクションで

```
I 24
```

のように設定しておきます。<br>
この場合、一日以内ならキャッシュにイメージがある場合、それを使用することを意味しています。<br>

### dvipdfmx に extractbb などの名前でシンボリックリンクを作成する {#k882a214}

- [#美文書 １１５ページ、「TeX Liveではextractbbやebbは実はdvipdfmxへのシンボリックリンクです」？](https://twitter.com/ti5942/status/273700405341483008) → [extractbbのプロパティ](https://twitter.com/ti5942/status/273742359915794432)

dvipdfmx はコマンドの名前によって機能を変えることができます．<br>
[dvipdfmx.c](http://www.tug.org/svn/texlive/trunk/Build/source/texk/dvipdfm-x/dvipdfmx.c?view=markup) の main 関数を見るとコマンド名によって処理を変えています．<br>
UNIX ではプログラムに複数の機能を実装してシンボリックリンクを使用して別の名前をつけることで機能を変えることは普通に行われます．<br>

### DVI ファイルが存在しない PDF ファイルを削除する {#i282b26a}

dvipdfmx には DVI ファイルが存在しない PDF ファイルを削除する機能があります．

```
PS C:\Users\$Env:USERNAME> dvipdfmx test
test.dvi -> test.pdf

** ERROR ** Could not open specified DVI file: test.dvi

Output file removed.
```

## 関連リンク {#me536d1a}

- [Unofficial LaTeX graphics drivers - 概要 \[Puszcza\]](http://puszcza.gnu.org.ua/projects/latexfmxdef)
- [Newest &#39;dvipdfmx&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/dvipdfmx)
- [Dvipdfmx - MyTeXpert](http://mytexpert.sourceforge.jp/index.php?Dvipdfmx)
- [「dvipdfmx」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=dvipdfmx)
- [PXchfon パッケージ ～pLaTeX文書のフォントを簡単に変更～ \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/pxchfon.html)
- [dvipdfmx : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/dvipdfmx)
- [dvipdfmx は括弧入り eps がお嫌いのようです](http://d.hatena.ne.jp/naga_sawa/20130115/1358217658)
- [dvipdfmxのみを用いたpdfファイルサイズの圧縮](http://yonishi.cocolog-nifty.com/weblog/2011/05/dvipdfmxpdf-ebe.html)
- [standalone クラスは dvipdfmx でも使えるような気がする](https://gist.github.com/zr-tex8r/3845085)
- [LCDF TypetoolsでOpenTypeフォントを使う（DVIPDFMXで）](http://dev.activebasic.com/egtra/2012/12/18/522/)
- [The DVIPDFMx Project](http://project.ktug.org/dvipdfmx/)
- [DVI specials for PDF generation](http://project.ktug.org/dvipdfmx/doc/tb94cho.pdf) (PDF)
