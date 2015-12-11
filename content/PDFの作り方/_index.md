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

今では PDF ファイルを作るための方法は様々あります：

- OS の印刷機能などを使う。
- ブラウザの印刷機能などで HTML から生成する。
- グラフィックソフトから PDF で出力する。
- Adobe Acrobat DC などの専用ソフトを使う。
- [LaTeX](/LaTeX/) などの文書作成環境を整え，PDF として文書を出力する。

PDF 編集ソフトウェア，PDF ビューアの一覧は [PDF](/PDF/) という項目にまとめられています。

***

***

## 印刷機能を使う {#m27e7b63}

OS X では標準で印刷機能から PDF で保存ができます。

Windows でも，Windows10 から「Microsoft Print to PDF」というプリンタが標準で追加され，Windows10　上で動く様々なソフトウェアから手軽に PDF の作成ができるようになりました．今後は Windows でも PDF 環境はさらに改善するでしょう。

Windows7/8 を使っている場合には，PDF 出力用の仮想プリンタを導入することで，PDF への「印刷」機能を追加できます。仮想プリンタの導入については後述します。

Linux などの環境でも，近年は PDF 生成環境は整ってきています。2D グラフィックス・ライブラリの[Cairo](http://cairographics.org/) が標準で PDF への書き出しをサポートしており，これを用いる [Inkscape](/Inkscape/) などのソフトウェアでは，PDF への出力が可能です。

### 仮想プリンタの導入 {#ge6f5633}

PDF 出力用の仮想プリンタを導入することで，様々なアプリケーションから，印刷機能を使って PDF を作成できるようになります。
Adobe Acrobat DC など商品をはじめ，CutePDF などのフリーソフトなど，仮想プリンタとして動作可能な，様々な PDF 作成用のソフトがあります。

Windows では，[Ghostscript](/Ghostscript/) というオープンソースのソフトウェアを用いた，
PDF へ出力するための無償の仮想プリンタが多数あります：
[PDFCreator](http://www.pdfforge.org/)，
[CubePDF](http://www.cube-soft.jp/cubepdf/)，
[BullZip PDF Printer](http://www.bullzip.com/products/pdf/info.php)，
[CutePDF Writer](http://www.acrosoftware.com/Products/CutePDF/writer.asp)，
[PDF24 Creator](http://en.pdf24.org/)，
[PrimoPDF](http://www.primopdf.com/)，
[pdf995](http://www.pdf995.com/)

インストール方法や使い方については，それぞれのソフトウェア名で検索してください。

## HTML などから PDF を生成する {#w33adba5}

[Google Chrome](</Google Chrome/>) などのブラウザは，ウェブページを PDF で保存する機能を持っています。
このため，HTML で文書を書いておけば，手軽に PDF 生成が可能です。

いちいちブラウザを立ち上げたくない場合でも，[wkhtmltopdf](http://wkhtmltopdf.org/) などを使い，PDF の生成が可能です。wkhtmltopdf は Qt Webkit と呼ばれる，レンダリング・エンジンを利用しています。Qt Webkit の元となる [Webkit](https://www.webkit.org/) は様々なブラウザの中核となるレンダリング・エンジンです。

wkhtmltopdf の他にも，いくつかのディスプレイへの出力を必要としない，"ヘッドレス"なブラウザが存在します。[PhantomJS](http://phantomjs.org/) も　Qt Webkit を利用したヘッドレスブラウザで，JavaScript で利用可能です。

## LaTeX で PDF {#k0e3280f}

LaTeX のインストールについては
[Windows へのインストール](</Microsoft Windows/>)，
[OS X へのインストール](/Mac/)，
[Linux へのインストール](/Linux/)
などのページをご覧ください．

<!-- **注意点 [#q8e1fe4a] -->
<!--  -->
<!-- 残念ながら、現在、日本ではdvipdfmxを用いたPDF生成が主流となっておりますが、完全なガラパゴスであって、またdvipdfmxは問題のあるプログラムであることもあり、憂慮すべき事態となっております。実際、様々な方々から苦言が出ています： -->
<!--  -->
<!--  ↑「残念ながら」「憂慮すべき」というのは無用に主観的な記述と思います． -->
<!--  -->
<!-- emathの作者として有名なtDB氏の発言、 -->
<!-- -[[dvipdfm(x)にはご注意を:http://hpcgi3.nifty.com/emath/treebbs.cgi?kako=1&log=5586]] -->
<!-- >特に -->
<!-- >　　教室で使用するプリントで emath をお使いの方は信用の失墜に -->
<!-- >　　商用で emath をお使いの方は経済的損失に -->
<!-- >つながりかねませんからご注意ください。 -->
<!--  -->
<!-- -[[emathPs と PDF形式:http://hpcgi3.nifty.com/emath/treebbs.cgi?kako=1&all=8805&s=8840]] -->
<!-- ># それにしても， -->
<!-- ># 　　つかえねぇ～ dvipdfmx にこれほどまで振り回されるとは -->
<!-- ># くたばれ dvipdfmx と毒づきたくもなるというものです。 -->
<!--  -->
<!-- TeX ユーザの集い 2015 実行委員会代表、きえだゆうすけ氏の発言、 -->
<!-- -[[いかなる意味の印刷もしないのならば:https://twitter.com/p_typo/status/624638576509059072]] -->
<!-- >いかなる意味の印刷もしないのならばdvipdfmxの利用は考えてもいいかもしれない -->
<!--  -->
<!-- 様々な有用なパッケージの作者であるZR氏もこう言っています、 -->
<!-- -[[まあ、何せ、dvipdfmxは:https://mobile.twitter.com/zr_tex8r/status/643221404301701121]] -->
<!-- >まあ、何せ、dvipdfmxはアレなので……。 -->
<!--  -->
<!-- PDF生成ソフトの利用については慎重に検討しましょう。 -->

LaTeX で PDF を作成する方法はいくつかあります。日本語を含む場合は，伝統的に dvips で PostScript ファイルを作成し，Adobe Acrobat で PDF へ変換する方法が好まれてきました。
[dvipdfmx](/dvipdfmx/) というソフトで DVI ファイルから PDF を生成する方法もあります。欧米では，pdfLaTeX により LaTeX 文書から直接 PDF を生成するのが一般的です．
Unicode を使用して多言語 PDF ファイルを作成する場合は，[LuaLaTeX](/LuaTeX/)， [XeLaTeX](/XeTeX/) が使えます．

### PDF形式出力を得るLaTeXタイプセットの主な流儀 {#gf004f58}

1. tex → pdf
    - platex-ng: tex → pdf
    - pdflatex: tex → pdf
    - lualatex: tex → pdf
    - xelatex: tex (→ xdv) → pdf
1. tex → dvi → pdf
    - uplatex→dvipdfmx
    - Windows では [dviout](/dviout/) から印刷で PDF へ出力する方法もあります。
1. tex → dvi → ps → pdf
    - uplatex などで DVI を，dvips で DVI→PS，ps2pdf (GhostScript) か "Adobe Acrobat Distiller DC" で ps → pdf

arXiv などでは 3. を要求されます。特に Adobe Acrobat Distiller DC を用いるほうが信頼性が高く，印刷所などでも好まれます．

### dvips の使い方 {#lf015a28}

dvips は TeX の出力（DVI ファイル）を PostScript (PS) ファイルに変換するツールです．

dvips で変換した PS ファイルは Ghostscript 付属の ps2pdf コマンドや Adobe Acrobat Distiller DC で PDF ファイルに変換できます．
Adobe Acrobat Distiller DC を用いるほうが信頼性は断然よいですが，
処理速度や使いやすさの観点では dvipdfmx のほうがいいかもしれません．

詳細は [dvips](/dvips/) を参照してください。

## Adobe Acrobat DC で PDF {#w441bc87}

Adobe Acrobat　は，[Adobe Systems](http://www.adobe.com/jp/) が開発する、PDF ファイルを作成・編集・加工・管理するためのソフトです。PDF の作成だけでなく，様々な機能を備えています。

### Adobe Acrobat Reader DC と Adobe Acrobat DC の違い {#c982e6e9}

Adobe Acrobat Reader DC は Adobe Acrobat DC から表示・印刷・注釈の追加機能だけを抜き出したもので，[Adobe Acrobat Reader DC のダウンロードサイト](http://get.adobe.com/jp/reader/)から無償で入手できます．
[Adobe Acrobat DC](http://www.adobe.com/jp/products/acrobat.html) は
Adobe Acrobat Distiller DC を含む製品（商品）です．
値段は Adobe のサイトで確認してください．

有償の Adobe Acrobat DC には，その機能によってプランが幾つか存在しています．
「[Acrobat DCプラン別機能比較](http://acrobat.adobe.com/jp/ja/pricing/pricing-compare-plans.html)」などを参照してください．
Standard と Pro がありますが，どちらも様々な文書ファイルや画像ファイルの PDF への変換をサポートしており，PDF のパスワード保護，複数の PDF の統合，PDF の編集などに対応しており，また，Word への書き出しや署名なども可能です．Pro ではこれに加え，PDF/X や PDF/A への変換や，これらへの規格適合性の検証 (プリフライト) などプロフェッショナル向けの機能を備えています．

Adobe Acrobat DC があれば Adobe Acrobat Reader DC がなくても PDF ファイルを表示できます．

Adobe 製品は，なるべく最新のアップデートを適用しておきましょう．
アップデートについては　Adobe のダウンロードのページをご覧ください．

### Adobe Acrobat DC の設定 {#e5e57a76}

PDF 出力をデフォルトのプリンターとして設定することができます。
コントロールパネルから［デバイスとプリンター］画面を表示します．
［プリンターと FAX］にある「Adobe PDF」プリンターアイコンを右クリックし，
「通常使うプリンターに設定」します．

出力の細かい設定を行うには，「Adobe PDF」プリンターアイコンを右クリックし，［印刷設定］ → ［レイアウト］ → ［詳細設定］ (または［プリンターのプロパティ］ → ［全般］ → ［基本設定］ → ［レイアウト］ → ［詳細設定］) へと進みます。

まずは［Adobe PDF 設定］タブの［PDF設定］で設定を選びます．
Web 用，論文提出用には低品位でよければ「標準」，
より高品位にするには「高品質印刷」にすればいいでしょう．
「プレス品質」は論文では必要ないでしょう．

［設定］ → ［Adobe PDF 設定\] → \[PDF 設定\]の\[編集］は次のように設定します．

- ［一般］で「互換性のある形式」は，TeX Live 2014 を使用している場合は，
    Acrobat 5.0 (PDF 1.4) までにしておくほうが無難です．
    Acrobat 8.0 (PDF1.7), Acrobat 7.0 (PDF1.6), Acrobat 6.0 (PDF1.5) の場合は TeX Live 2014 の extractbb を使用するとエラーが発生することがあります (→ [xbbファイルが作成できない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=817))．

- デフォルトページサイズは，A4サイズを主に使用する場合は，
    21.0 cm × 29.7 cm なっていることを確認します。（ただし文書側の設定が優先されます）．

- ［カラー］で\[カラーマネジメントポリシー\]を「カラー変更なし」にしておきます．
- ［詳細設定］で「EPSファイルのページサイズ変更とアートワークの中央配置」をオフにします．
    これは後で dvipdfmx を使う際に便利です．

以上の設定内容を「名前を付けて保存」します．
ファイル名は例えば “A4.joboptions” のようにします．

Distiller　は二つ同時には立ち上がらないようにできていますので，
立ち上げたままにしておけば起動時間が節約できます．

Distiller をコマンド プロンプトから使うには

```
start hoge.ps
```

と打ち込みます．
拡張子 “.ps” と関連づけられていれば Distiller が起動するか，すでに起動している Distiller が処理を始めます．
Distiller に関連付けしたくない場合は Distiller に入力/出力ファイル名を指定してコマンドラインから実行することもできます．(→ [Distillerを入力/出力ファイル名を指定して起動する方法について](http://kb2.adobe.com/jp/cps/510/510769.html))
保存場所や上書き確認をせず Adobe Acrobat DC を立ち上げない設定にしておけば便利です．
さらに，共有フォルダを「監視フォルダ」に指定して立ち上げておけば Linux などからでも使えます．

#### 注意事項など {#l8a15d53}

- LaTeX で color パッケージを使って dvips → Distiller で作った PDF
    を印刷すると文字がアミカケ状態になってしまうことがあります．
    ［設定］ → ［ジョブオプション］ → ［カラー］ を「カラーマネジメント用にすべてタグ付け」，作業用スペースの CMYK
    を Photoshop 5 Default CMYK にすると直りました（理屈はよくわかってないのですが）([qa:16839](https://okumuralab.org/~okumura/texfaq/qa/16839.html))．<br>
    設定ファイルを「プリプレス-日本」にしても直るようです ([qa:18199](https://okumuralab.org/~okumura/texfaq/qa/18199.html))．

- Photoshop 5 Default CMYK にすると今度は色が変わってしまうというご指摘をいただきました．
    設定ファイルを「プリプレス-日本」にするのがよさそうです．
    ただ，文字がアミカケ状態になるのは Adobe Acrobat DC から非 PS プリンターに出力する際の問題のようですので，PS
    プリンター（イメージセッタも）では大丈夫かもしれません．

### Adobe Acrobat Reader DC /Acrobat DC のヒント {#l5e4219f}

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

## グラフィックソフトで PDF {#y8472509}

多くのグラフィックスソフトが PDF の出力機能を備えています。

### 様々な画像を PDF へ変換する {#m0798181}

[ImageMagick](/ImageMagick/) などを使うとよいでしょう。

### Illustrator のヒント {#zf39d5a5}

Illustrator 9/10 から EPS　形式で保存するときは，
互換性は最新のもの（「バージョン 9」「バージョン 10」）でかまいません．
CMYK ポストスクリプト（レベル 2）にします．
プレビューやサムネールは TeX では不要ですが，他のアプリケーションに埋め込む際にはプレビューがあったほうが便利です．
Word などに埋め込む際には，プレビューのラジオボタンは必ず「不透明」にします．

「フォントデータを含む」チェックボックスはオンにしないと文字化けします．
あるいは，逆にこれをオフにして，フォント名をエディタなどで標準的なものに置き換えるという手もあります．
たとえば Illustrator に附いている小塚明朝 Std M を使った場合，KozMinStd-Medium-90ms-RKSJ-H を
Ryumin-Light-RKSJ-H に置き換えます．

## PDF を作る際の Tips {#k491ed05}

### 読み手に親切な PDF ファイル {#hb3bee4c}

PDF を作成するときは，読み手のことを考え，親切な PDF となるように心がけましょう．

#### しおりやハイパーリンクの利用 {#oe50e6c2}

目次から本文のページなどへ，リンクでジャンプ可能だと読み手が楽です．
LaTeX で PDF 文書を作成する場合は，[hyperref](/hyperref/) パッケージを使いましょう。
しおりの生成や，目次のハイパーリンク化などを自動化してくれ，非常に便利です。

Word などで PDF 文書を作る場合でも，設定を行い，きちんと見出しを「見出し」として作成すれば自動的にしおりをつけることができます。

#### 疑似ボールド体など {#jec95395}

いわゆる Poor Man's Bold (疑似ボールド） の利用は避けましょう。LaTeX では，\boldsymbol などを用いて本物のボールド体を使ってください．重ね打ち (“\pmb” or “\bm”) によって生じる，擬似的ボールド体は見苦しいです．例えば IEEE サイトで有償提供されている論文などです．これは単に見苦しいだけでなく，テキストの検索や抽出にも悪影響を与えます． <!-- bm パッケージによる \bm は基本的には重ね打ちではなく， --> <!-- きちんとボールド体を用います（ただし，ボールド体を利用できない --> <!-- ［あるいは利用しづらい］一部の記号については重ね打ちになります）． -->

#### フォントの利用 {#v9136148}

OpenType，TrueType，PostScript Type 1 フォントなどを用い，かつ埋め込んでください．ビットマップフォントの利用は避けましょう．Adobe Acrobat Reader DC で正常にテキスト検索できるように，妙なテキストエンコーディングも用いないでください．

フォントの埋め込みはよい PDF を作成するために推奨されることですが，これにはライセンス上の微妙な問題も絡み，注意が必要です。「[フォントの埋め込みとライセンス](</フォントの埋め込みとライセンス/>)」の項なども参照してください。

<em>Adobe Acrobat DC (Distiller)，dvipdfmx (XeTeX)，LuaTeX は日本語フォントを埋め込まないで使うと，ISO の仕様に違反した PDF を生成します．注意してください．</em>

#### テキスト情報 {#g073c42c}

PDF 文書内で文字列を検索したり，文書から文字列をコピーしたりできるようにしましょう。フォントがアウトライン化されて，テキスト情報が欠落してしまうような場合は，これらができなくなってしまいます。

#### 画像の解像度 {#vf1940c0}

PDF 文書内にとりこむ画像の解像度は，ファイルサイズ，ページが完全に描画されるまでの時間などに影響します。読み手がストレスなく文書を読めるように適切に取り扱いましょう。

Acrobat などの製品では，必要であればダウンサンプルによって，画像の解像度を自動的に落としてくれますが，LaTeX などの環境ではまずこういった機能はありません。pdfTeX，LuaTeX，XeTeX，dvipdfmx　などすべてダウンサンプルの機能はありません。この場合は，グラフィックソフトなどで，手動で画像サイズの調整が必要となってきます。

例えば，iPhone 6 のカメラで写真を撮る場合の標準的なサイズは 3264×2448 ですが，これを 5cm 幅の画像として取り込むと，解像度は 1600 dpi となってしまい，標準的なプリンタやディスプレイの能力をはるかに超えてしまいます。実際にはこの 3割 くらいの解像度で十分なので，ピクセルサイズを 20% から 30% くらいに縮小してもよいでしょう。

バッチ処理でおこなうには [ImageMagick](/ImageMagick/) などのソフトを，また OS に標準でついてくるペイントソフトなどを使って画像の縮小を行います。

#### Web表示用に最適化 {#n0919134}

PDF ファイルは長大な文書に利用されることが多く，また文書の表示に必要なリソースをひとつのファイルにパッケージ化するため，ファイルサイズが大きくなりがちです。インターネットで公開する場合，ダウンロード時間も長くなり，最初のページが表示されるまでにだいぶ待たなければなりません。

この問題を解消するための方法として，「Web 表示用に最適化」というオプションがあります。

Web 表示用に最適化すると、PDF 文書の構造が再構成され，Web サーバーからページ単位でのダウンロードなどが可能になります。Web 表示用に最適された PDF では，PDF ファイル全体ではなく，特定のページを描画するのに必要な情報だけが，Web サーバーから送信されます。ダウンロードに時間がかかるサイズの大きい PDF ファイルでは，このオプションを選択すると特に効果的です。

Acrobat での設定は，[Adobe のサイト](http://help.adobe.com/ja_JP/acrobat/pro/using/WS58a04a822e3e50102bd615109794195ff-7f52.w.html) にて確認してください。

[QPDF](/QPDF/) は，既存の PDF を Web　表示用に最適化 (リニアライズ) する機能を備えています。

```
 qpdf --linearize input.pdf output.pdf
```

また，Adobe Acrobat Reader DC などで保存しなおすことで，
Web 表示用に最適化するという方法もあります。
PDF ビューアによっては，この部分ダウンロードを行えない場合もありますが，「Web 表示用に最適化」の操作は，PDF ファイルの構造を変えるだけで，品質の劣化を招くものではないので，やっておいても損はありません。

### PDF をパスワードで保護する {#u51b6592}

PDF 文書をパスワードで保護するには，いくつかの方法があります．

- [PDFの暗号化 ～３つの暗号化コマンドの紹介 ～](http://konoyonohana.blog.fc2.com/blog-entry-49.html)

Adobe Acrobat DC を使えばできますが，フリーウェアとして [QPDF](/QPDF/) もあります．

また，OS Xでは印刷するときに「PDFで保存」を選択すれば必要なセキュリティオプションを選択できます．
ただし，Adobe Acrobat Reader DC からはこの操作はできませんので，一度作成したPDFを「プレビュー」「[TeXShop](/TeXShop/)」などで開いてから実行してください．

### PDF に注釈をつける {#v9b289c9}

Adobe Acrobat Reader DC をはじめ，様々な PDF ビューアが注釈をサポートしています．
LaTeX で注釈付きの PDF を作成する方法については，[PDFの作り方/注釈をつける](</PDFの作り方/注釈をつける/>)を参照してください．

## その他のリンク {#ed93164a}

- [Wikipedia.en:List_of_PDF_software](https://en.wikipedia.org/wiki/List_of_PDF_software)
- [pdf ファイルのフォント埋め込みについて - JSIAM](http://www.jsiam.org/modules/xfsection/article.php?articleid=57)
- [文庫本作成データ生成ツール・威沙(朱鷺魅)](http://tokimi.sylphid.jp/)
