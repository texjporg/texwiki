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

<!-- '''すべてのバージョンの　Adobe Acrobat (Adobe Acrobat Distiller DC を含む) や dvipdfmx は CJK フォントを埋め込まないと仕様に違反した PDF を生成します。仕様にできるだけ従いたい場合には，これらのソフトを使う場合フォントを可能な限り埋め込むようにしましょう。随分前から指摘されていますが、直る気配がありません。問題のあるソフトウェアであると言わざるを得ないでしょう。''' -->

現在では PDF ファイルを作るための方法は様々あります：

- OS　の印刷機能などを使う。
- ブラウザの印刷機能などで HTML から生成する。
- グラフィックソフトから PDF で出力する。
- Adobe Acrobat DC などの専用ソフトを使う。
- [LaTeX](/LaTeX/) などの文書作成環境を整え，PDF として文書を出力する。

PDF 編集ソフトウェア，PDF ビューアの一覧は [PDF](/PDF/) という項目にまとめられています。

***

***

## 印刷機能を使う {#m27e7b63}

OS X では標準で印刷機能から PDF で保存ができます。

Windows でも，Windows10 から「Microsoft Print to PDF」というプリンタが標準で追加され，Windows10　上で動く様々なソフトウェアから手軽に PDF の作成ができるようになりました．今後は Windows でも PDF 環境はさらに改善するかもしれません．

例えば Word は，同じファイルでも環境の違いによってレイアウトが変わってしまうという嫌な特徴を持っていますが，
正しい方法で PDF にしておくことで，レイアウトの崩れは防げます．
詳しくは [Microsoft Office](</Microsoft Office/>) の項を参照してください．

Windows7/8 を使っている場合には，PDF 出力用の仮想プリンタを導入することで，PDF への「印刷」機能を追加できます。

Linux などの環境でも，近年は PDF 生成環境は整ってきています。2D グラフィックス・ライブラリの[Cairo](http://cairographics.org/) が標準で PDF への書き出しをサポートしており，これを用いる [Inkscape](/Inkscape/) などのソフトウェアでは，PDF への出力が可能です。

### 仮想プリンタの追加 {#ge6f5633}

Adobe Acrobat DC など商品をはじめ，CutePDF などのフリーソフトなど，仮想プリンタとして動作可能な，様々な PDF 作成用のソフトがあります。これらを導入することで，アプリケーションの印刷機能から，PDF への「印刷」ができるようになります．

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

HTML 文書をいちいち書きたくない場合は，[Markdown](/Markdown/) などで文書を作成するとよいでしょう。PhantomJS を利用した，[markdown-pdf](https://www.npmjs.com/package/markdown-pdf) は，Markdown 文書を HTML へ変換し，それから PDF を生成します。Node.js が利用可能な環境ではインストールは簡単です：

```
 npm install -g markdown-pdf
```

Markdown 文書を書いたら，markdown-pdf コマンドで PDF を生成します。CSS を使って体裁を整えることができます。

```
 markdown-pdf -s style.css -o output.pdf input.md
```

[Atom](/Atom/) エディタなどで編集環境を整えるとよいでしょう。

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
<!-- ↑ リンク先 ( http://hpcgi3.nifty.com/emath/treebbs.cgi?kako=1&all=8805&s=8842 ) を見ると，これは単に dvipdfmx.cfg の設定が悪いだけのようですが． -->
<!--  -->
<!-- -[[emathPs と PDF形式:http://hpcgi3.nifty.com/emath/treebbs.cgi?kako=1&all=8805&s=8840]] -->
<!-- ># それにしても， -->
<!-- ># 　　つかえねぇ～ dvipdfmx にこれほどまで振り回されるとは -->
<!-- ># くたばれ dvipdfmx と毒づきたくもなるというものです。 -->
<!--  -->
<!-- ↑「くたばれ」などと言うのは品がなく，公共の Wiki にふさわしくありません． -->
<!-- 何より，作者に対する敬意に欠け，失礼です． -->
<!--  -->
<!-- TeX ユーザの集い 2015 実行委員会代表、きえだゆうすけ氏の発言、 -->
<!-- -[[いかなる意味の印刷もしないのならば:https://twitter.com/p_typo/status/624638576509059072]] -->
<!-- >いかなる意味の印刷もしないのならばdvipdfmxの利用は考えてもいいかもしれない -->
<!--  -->
<!-- 様々な有用なパッケージの作者であるZR氏もこう言っています、 -->
<!-- -[[まあ、何せ、dvipdfmxは:https://mobile.twitter.com/zr_tex8r/status/643221404301701121]] -->
<!-- >まあ、何せ、dvipdfmxはアレなので……。 -->
<!--  -->
<!-- ↑このあたりのリンクは単体では情報価値がありません。 -->
<!--  -->
<!-- PDF生成ソフトの利用については慎重に検討しましょう。 -->
<!--  -->
<!-- ↑ あなたが dvipdfmx が嫌うのは自由ですが，「あの有名人もこんな悪口を言っている」という事例をリストアップすることに価値があるのでしょうか． -->

### 要約 {#gf004f58}

LaTeX で PDF を作成する方法はいくつかあります。日本語を含む場合は，伝統的に dvips で PostScript ファイルを作成し，Adobe Acrobat で PDF へ変換する方法が好まれてきました。
[dvipdfmx](/dvipdfmx/) というソフトで DVI ファイルから PDF を生成する方法もあります。欧米では，pdfLaTeX により LaTeX 文書から直接 PDF を生成するのが一般的です．
Unicode を使用して多言語 PDF ファイルを作成する場合は，[LuaLaTeX](/LuaTeX/)， [XeLaTeX](/XeTeX/) が使えます．

#### PDF形式出力を得るLaTeXタイプセットの主な流儀 {#gf004f58}

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

### 読み手に親切な PDF ファイル {#hb3bee4c}

PDF を作成するときは，読み手のことを考え，親切な PDF となるように心がけましょう．

#### しおりやハイパーリンクの利用 {#oe50e6c2}

目次から本文のページなどへ，リンクでジャンプ可能だと読み手が楽です．dvipdfmx を使用する場合は，[hyperref](/hyperref/) パッケージを使い，プリアンブルに下記を入れると良いです：

```
\usepackage[dvipdfmx,bookmarkstype=toc,colorlinks=true,%
            urlcolor=black,linkcolor=black,citecolor=black,%
            linktocpage=true,bookmarks=false]{hyperref}
\usepackage{pxjahyper}
```

#### 疑似ボールド体など {#jec95395}

いわゆる Poor Man's Bold (疑似ボールド） の利用は避け，\boldsymbol などを用いて本物のボールド体を使ってください．重ね打ち \[“\pmb” or “\bm”\] によって生じる，擬似的ボールド体は見苦しいです．例えば IEEE サイトで有償提供されている論文などです．これは単に見苦しいだけでなく，検索やテキストの抽出にも悪影響を与えます． <!-- bm パッケージによる \bm は基本的には重ね打ちではなく， --> <!-- きちんとボールド体を用います（ただし，ボールド体を利用できない --> <!-- ［あるいは利用しづらい］一部の記号については重ね打ちになります）． -->

#### フォントの利用 {#v9136148}

OpenType，TrueType，PostScript Type 1 フォントなどを用い，かつ埋め込んでください．ビットマップフォントの利用は避けましょう．Adobe Acrobat Reader DC で正常にテキスト検索できるように，妙なテキストエンコーディングも用いないでください．

<em>Adobe Acrobat DC (Distiller)，dvipdfmx (XeTeX)，LuaTeX は日本語フォントを埋め込まないで使うと，ISO の仕様に違反した PDF を生成します．注意してください．</em>

上記に関して，世の中の PDF ファイルには読んでいて苦労をするものが案外多いようです．

### dvipdfmx の使い方 {#rdc781c9}

[dvipdfmx](/dvipdfmx/) は TeX 出力（DVI ファイル）を PDF に変換するフリーソフトウェアです．
TeX Live, W32TeX に含まれています．
『［改訂第6版］ LaTeX2e 美文書作成入門』の電子版は dvipdfmx で PDF 化しました．

使い方は，Windows PowerShell またはコマンド プロンプトで

```
dvipdfmx foo.dvi
```

と打ち込むだけです．これで foo.dvi が foo.pdf に変換されます．
コマンドラインを使用するのが苦手な方は [LyX](/LyX/), [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/),
[TeXworks](/TeXworks/)　などで dvipdfmx を使うように設定できます．

詳しい使い方については，[dvipdfmx](/dvipdfmx/) の項を参照してください．

### dvips の使い方 {#lf015a28}

dvips は TeX の出力（DVI ファイル）を PostScript (PS) ファイルに変換するツールです．

dvips で変換した PS ファイルは Ghostscript 付属の ps2pdf コマンドや Adobe Acrobat Distiller DC で PDF ファイルに変換できます．
Adobe Acrobat Distiller DC を用いるほうが信頼性は断然よいですが，
処理速度や使いやすさの観点では dvipdfmx のほうがいいかもしれません．

詳細は [dvips](/dvips/) を参照してください。

## Adobe Acrobat DC で PDF {#w441bc87}

### Adobe Acrobat Reader DC と Adobe Acrobat DC の違い {#c982e6e9}

Adobe Acrobat Reader DC は Adobe Acrobat DC から表示・印刷・注釈の追加機能だけを抜き出したもので，[Adobe Acrobat Reader DC のダウンロードサイト](http://get.adobe.com/jp/reader/)から無償で入手できます．
[Adobe Acrobat DC](http://www.adobe.com/jp/products/acrobat.html) は
Adobe Acrobat Distiller DC を含む製品（商品）です．
値段は [Adobe Systems](http://www.adobe.com/jp/) で確認してください．

無償で配布されている Adobe Acrobat Reader DC は，PDF の表示と印刷，注釈の追加のみ可能です．

有償の Adobe Acrobat DC には，その機能によってプランが幾つか存在しています．
「[Acrobat DCプラン別機能比較](http://acrobat.adobe.com/jp/ja/pricing/pricing-compare-plans.html)」などを参照してください．
Standard と Pro がありますが，どちらも様々な文書ファイルや画像ファイルの PDF への変換をサポートしており，PDF のパスワード保護，複数の PDF の統合，PDF の編集などに対応しており，また，Word への書き出しや署名なども可能です．Pro ではこれに加え，PDF/X や PDF/A への変換や，これらへの規格適合性の検証 (プリフライト) などプロフェッショナル向けの機能を備えています．

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
Web 用，論文提出用には低品位でよければ 標準，より高品位にするには 高品質印刷にすればいいでしょう．

プレス品質は論文では必要ないでしょう．

［設定］ → ［Adobe PDF 設定\] の \[編集］は次のように設定します．

- ［一般］で「互換性のある形式」が標準で Acrobat 8.0 (PDF1.7) または Acrobat 7.0 (PDF1.6) または Acrobat 6.0 (PDF1.5) になっていて TeX Live 2014 を使用している場合は Acrobat 5.0 (PDF 1.4) までにしておくほうが無難です．
    Acrobat 8.0 (PDF1.7), Acrobat 7.0 (PDF1.6), Acrobat 6.0 (PDF1.5) の場合は TeX Live 2014 の extractbb を使用するとエラーが発生することがあります (→ [xbbファイルが作成できない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=817))．

- デフォルトページサイズが米国のレターサイズ（8.5 inches × 11 inches，21.59 cm × 27.94 cm）になっていて
    A4サイズを主に使うなら，ここを 21.0 cm × 29.7 cm に直します（ただし文書側の設定が優先されます）．

- ［カラー］で「カラー変更なし」にしておきます．
- ［詳細設定］で「EPSファイルのページサイズ変更とアートワークの中央配置」をオフにします．
    これは後で dvipdfmx を使う際に便利です．

以上の設定内容を「名前を付けて保存」します．
ファイル名は例えば “A4.joboptions” のようにします．

以上の設定が終われば Distiller
は［×］で閉じておいてかまいませんが，二つ同時には立ち上がらないようにできていますので，立ち上げたままにしておけば起動時間が節約できます．

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

## PDF をパスワードで保護する {#u51b6592}

PDF 文書をパスワードで保護するには，いくつかの方法があります．

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

## PDF に注釈をつける {#v9b289c9}

Adobe Acrobat Reader DC をはじめ，様々な PDF ビューアが注釈をサポートしています．
LaTeX で注釈付きの PDF を作成する方法については，[PDFの作り方/注釈をつける](</PDFの作り方/注釈をつける/>)を参照してください．

## その他のリンク {#ed93164a}

- [Wikipedia.en:List_of_PDF_software](https://en.wikipedia.org/wiki/List_of_PDF_software)
- [PDFフォント○×チェッカー](http://pdf.printjapan.com/)　これを使うと作成した PDF ファイルにフォントがすべて埋め込まれているかどうかチェックできます．
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
- [dvipsとdvipdfmxでPDFにヒラギノ書体を埋め込もう](http://www.unilab.gbb60166.jp/tex/hiragino.htm)
- [文庫本作成データ生成ツール・威沙(朱鷺魅)](http://tokimi.sylphid.jp/)
- [TeX+dvipdfmxでiPhone / iPod Touch向けPDF作成（エセ）](http://irusuka.sakura.ne.jp/archive/2012/06/texdvipdfmxiphone_ipod_touchpd.html)
- [LaTeX で原稿を書いてから印刷所に入稿するまで](http://hayamiz.com/~hotchpotch/?p=43)
- [dvipdfmxで作ったPDFをPDF/X-1aにする際にいちばんうまくいく方法](http://tumblr.golden-lucky.net/post/195552930/dvipdfmx-pdf-pdf-x-1a-1)
- [Mac OS XでGhostScriptを使わない，日本語PostScriptファイルのPDF化](http://mechawooser.blogspot.jp/2013/11/mac-os-xghostscriptpostscriptpdf.html)
- [PDF画像を使う（TeX on Win8.1）](http://njmnjm.blogspot.jp/2014/04/pdftex-on-win81.html)
