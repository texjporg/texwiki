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

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### PDF を作るためのソフト {#mde22763}

#### フリーウェア派 (Windows/OS X/Linux/\*BSD/...) {#d8e4c485}

- upLaTeX + dvipdfmx
- upLaTeX + dvips + ps2pdf (Ghostscript)
- [pdfLaTeX](/pdfTeX/)
- [LuaLaTeX](/LuaTeX/)
- LuaJITLaTeX
- [XeLaTeX](/XeTeX/)
- Adobe Reader （確認用）

#### ソフト購入派 (Windows/OS X) {#efe1e3d8}

- Word など
- Acrobat ほか

#### 折衷派 (Windows/OS X) {#ve37d7b0}

- upLaTeX + dvips + Acrobat Distiller
- Acrobat ほか

#### PDF 作成ソフト一覧 {#w48b82bc}

[Wikipedia.ja:PDFソフトウェアの一覧](https://ja.wikipedia.org/wiki/PDF%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%AE%E4%B8%80%E8%A6%A7) を参照。

[Ghostscript](/Ghostscript/) (ps2pdf)，[dvipdfmx](/dvipdfmx/)，[pdfTeX](/pdfTeX/)，[LuaTeX](/LuaTeX/)，LuaJITTeX, [xdvipdfmx](/dvipdfmx/)
([XeTeX](/XeTeX/)) の他に，次のソフトがあります。

- 無償，フリーウェア，オープンソース
    - OS X ならプリント機能を持ったどんなアプリケーションからも PDF 出力できます。
    - [LibreOffice](/LibreOffice/)/[Apache OpenOffice](/LibreOffice/) は PDF 出力機能を持っています
    - [Google Drive](https://drive.google.com/)
        は PDF 形式で保存できます
    - [Zoho Docs](http://www.zoho.jp/docs/)
        は PDF 形式で保存できます
    - [PDFCreator](http://www.pdfforge.org/) (オープンソース)
        - [PDFCreator 日本語対応版](http://super777.o.oo7.jp/page004.html)
    - [CubePDF](http://www.cube-soft.jp/cubepdf/) ([オープンソース](https://github.com/cube-soft/cubepdf))
        - IE 用ツールバーの [Cubeツールバー](http://www.cube-soft.jp/cubetoolbar/) と [Baidu IME](http://ime.baidu.jp/) も含まれているようです．
    - [qvPDF](http://sourceforge.net/projects/qvpdf/) (オープンソース)
    - [Foxit Reader](http://www.foxitsoftware.com/) (Free)
    - [PDF Download](http://www.pdfdownload.org/) (Free)
        - Web ページを PDF に変換することができる
    - [BullZip PDF Printer](http://www.bullzip.com/products/pdf/info.php) (Free)
    - [CutePDF Writer](http://www.acrosoftware.com/Products/CutePDF/writer.asp) +
        [Ghostscript](/Ghostscript/) (Free)
        - PDF Writer のページには “Requires PS2PDF converter such as Ghostscript (recommended).” のくだりがある。
    - [PDFill PDF and Image Writer](http://www.pdfill.com/freewriter.html) (Free)
    - [doPDF](http://www.dopdf.com/ja/) (Free)
        - doPDF は [Ghostscript](/Ghostscript/) を使用していないようです
    - [PDF24 Creator](http://en.pdf24.org/) (Free)
    - [PrimoPDF](http://www.primopdf.com/) (Free)
        - [日本語版](http://www.xlsoft.com/jp/products/primopdf/)あり
    - [Perfect PDF Master](http://en.soft-xpansion.eu/products/freeware/master/) (Free)
    - [Tiny PDF](http://www.tinypdf.com/) (Free)
    - [PDF reDirect](http://www.exp-systems.com/) (Free)
        - メニューなどのインターフェイスが英語
        - 出力ファイル指定では日本語ファイル名の指定は無理なようで，この点は注意。
    - [ImagePrinter Free](http://code-industry.net/imageprinter.php)
        (Free)
    - [pdf995](http://www.pdf995.com/) (Free)
        - 日本語も通るとのことです (Thanks: 池田さん)。中身は Ghostscript のようです ([qa:27294](https://okumuralab.org/~okumura/texfaq/qa/27294.html), [qa:27345](https://okumuralab.org/~okumura/texfaq/qa/27345.html), [qa:27434](https://okumuralab.org/~okumura/texfaq/qa/27434.html))
        - One Way Ticket To PDF - pdf995 [(1)](http://pcweb.mycom.co.jp/column/toolexp/008/) [(2)](http://pcweb.mycom.co.jp/column/toolexp/009/) [(3)](http://pcweb.mycom.co.jp/column/toolexp/010/) 使い方の説明が詳しい
    - [RedMon](http://pages.cs.wisc.edu/~ghost/redmon/)
        - [RedMon による PDF 作成](</PDFの作り方/#mbf7209f>)

- 有償，商用，シェアウェア
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
    - [gDoc Creator](http://www.gdoc.com/creator/) ([Global Graphics Software](http://www.globalgraphics.com/))
    - [Expert PDF Creator](http://www.visagesoft.com/)
    - [CutePDF Professional](http://www.acrosoftware.com/Products/CutePDF/Pro.asp)

#### PDF 編集ソフト一覧 {#se764b4f}

- 無償，フリーウェア，オープンソース

- [pdftk](http://oku.edu.mie-u.ac.jp/~okumura/linux/?pdftk) PDF ファイルに対して様々なことができるツール
    - [PDFedit](http://pdfedit.petricek.net/) PDF ファイルエディタ
    - [PDFjam](http://www2.warwick.ac.uk/fac/sci/statistics/staff/academic/firth/software/pdfjam) PDF ファイルを抜き出したり、結合したり、回転したりできる
    - [PDF Split and Merge](http://sourceforge.net/projects/pdfsam/) PDF ファイルを分割したり合成したりできる
    - [PDFCrop](http://pdfcrop.sourceforge.net/) (sourceforge): PDF ファイルの余白を削除する　（名前も同じですが下記とは別物）
    - [PDFCROP](https://mirror.ctan.org/help/Catalogue/entries/pdfcrop.html) (CTAN): PDF ファイルの余白を削除する (TeX Live, W32TeX に標準で含まれています)
        - ディレクトリの区切りに \ (バックスラッシュ) を使用すると !!! Error: pdfTeX run failed! といったエラーが発生するのでディレクトリの区切りには / (スラッシュ) を使用してください．
    - [QPDF](http://qpdf.sourceforge.net/) Web表示用に最適化したり，暗号化したりできる．[W32TeX](/W32TeX/) に含まれています．
    - [pdfsizeopt](https://code.google.com/p/pdfsizeopt/) PDF file size optimizer
    - [DiffPDF](http://www.qtrac.eu/diffpdf.html) DiffPDF is used to compare two PDF files—textually or visually.

### Adobe Reader と Adobe Acrobat は違うの？ {#c982e6e9}

[Adobe Acrobat](http://www.adobe.com/jp/products/acrobat.html) は
Acrobat Distiller を含む製品（商品）です。
値段は [Adobe Systems](http://www.adobe.com/jp/) で確認してください。

その機能によって製品が幾つか存在しています。
参考：「[Adobe - Adobe Acrobatファミリー： 製品比較](http://www.adobe.com/jp/products/acrobat/product-comparison.html)」

- Adobe Reader XI — PDF の閲覧と印刷のみ。無償配布されている。
- Adobe Acrobat XI
    - Adobe Acrobat XI Standard — PDF の編集が可能
    - Adobe Acrobat XI Pro — 様々な PDF の編集が可能

[Adobe Reader](</Adobe Reader/>) は Acrobat の表示・印刷機能だけを抜き出したもので，[Adobe Reader のダウンロードサイト](http://get.adobe.com/jp/reader/)から無償で入手できます。

Adobe Acrobat があれば Adobe Reader は不要です。

Microsoft 製品でも Adobe 製品でも，なるべく最新のアップデートを適用しておきましょう。<br>
Microsoft Office は [Windows Update 利用の手順](http://www.microsoft.com/ja-jp/security/pc-security/j_musteps.aspx)を参照して Office をアップデートします。<br>
Adobe 製品は[アドビシステムズ](http://www.adobe.com/jp/)の
ダウンロードのページをご覧ください。<br>

### Acrobat Distiller の設定 {#e5e57a76}

PDFWriter ではなく Distiller を使います。

Windows PowerShell またはコマンド プロンプトから

```
control printers
```

を実行して［デバイスとプリンター］画面を表示します．<br>
［プリンターと FAX］にある「Adobe PDF」プリンターアイコンを右クリックし，「通常使うプリンターに設定」します。<br>

「Adobe PDF」プリンターアイコンを右クリックし，［印刷設定］ → ［レイアウト］ → ［詳細設定］ (または［プリンターのプロパティ］ → ［全般］ → ［基本設定］ → ［レイアウト］ → ［詳細設定］) で細かい設定をします。

［TrueTypeフォント］の項目は，デフォルトでは「デバイス フォントと代替」になっています。<br>
このままのほうが軽い PDF ファイルができます。<br>
論文のオンライン投稿ではこのままにしておきます。<br>
デザインものなどで，まったく同じフォントで出力してほしいなら，ここを「ソフト フォントとしてダウンロード」にします。<br>

また，PostScript オプションの左の \[+\] をクリックし，［PostScript出力オプション］を「エラーが軽減するよう最適化」にするといいでしょう。<br>
その下の TrueTypeフォントダウンロードオプションは「自動」または「Native TrueType」にしておきます。<br>

Distiller を立ち上げます。<br>

Distiller の［ファイル］ → ［環境設定］で「PDFファイルの保存先を確認」をオンにします。<br>
「Distillerで変換後にPDFを表示」もオンにしておくと確認のため便利です。<br>

まず，Acrobat XI では［Adobe PDF 設定］の［デフォルト設定］で選びます。<br>
Web 用なら 最小ファイルサイズ，論文提出用には低品位でよければ 標準，より高品位にするには 高品質印刷にすればいいでしょう。<br>
プレス品質は論文では必要ないでしょう。<br>

［設定］ → ［Adobe PDF 設定の編集］は次のように設定します。<br>

- ［一般］で「互換性のある形式」は Acrobat 4.0 (PDF 1.3) までにしておくほうが無難です。
    デフォルトページサイズが米国のレターサイズ（8.5 inches × 11 inches，21.59 cm × 27.94 cm）になっています。
    A4サイズを主に使うなら，ここを 21.0 cm × 29.7 cm に直します（ただし文書側の設定が優先されます）。

- ［フォント］で，「すべてのフォントを埋め込む」は，軽くするためにはオフ，見栄えをまったく同じにしたいときはオンにします。
    また，「埋め込めなかったときの処理」は「警告した後続行する」であることを確認します。
    ここが「ジョブをキャンセルする」になっていると，もともとシステムに存在しないフォント（“Ryumin-Light” など）
    を指定した場合に止まってしまいます。

- ［カラー］で「カラー変更なし」にしておきます。
- ［詳細設定］で「EPSファイルのページサイズ変更とアートワークの中央配置」をオフにします。
    これは後で dvipdfmx を使う際に便利です。

以上の設定内容を「名前を付けて保存」します。<br>
ファイル名は例えば “A4.joboptions” のようにします。<br>

以上の設定が終われば Distiller
は［×］で閉じておいてかまいませんが，二つ同時には立ち上がらないようにできていますので，立ち上げたままにしておけば起動時間が節約できます。<br>

LaTeX + dvips で作った PS ファイルを変換する際に “Warning: Ryumin-Light not found, using Font Substitution. Font cannot be embedded.” などと
いう警告が出ますが，無視してかまいません。<br>
むしろこのように出るほうがフォントが埋め込まれず軽い PDF になります。<br>
この PDF を開くと，Ryumin-Light がなければ小塚明朝またはＭＳ 明朝で表示されます。<br>
これに対して，“XXX not found, using Courier.” というメッセージはエラーです。<br>

- ただし、フォントが埋め込まれないと仕様に違反した PDF になることがあるようです。<br>

Distiller を Windows PowerShell またはコマンド プロンプトから使うには

```
start hoge.ps
```

と打ち込みます。<br>
拡張子 “.ps” と関連づけられていれば Distiller が起動するか，すでに起動している Distiller が処理を始めます。<br>
Distiller に関連付けしたくない場合は Distiller に入力/出力ファイル名を指定してコマンドラインから実行することもできます。(→ [Distillerを入力/出力ファイル名を指定して起動する方法について](http://kb2.adobe.com/jp/cps/510/510769.html))<br>
保存場所や上書き確認をせず Acrobat を立ち上げない設定にしておけば便利です。<br>
さらに，共有フォルダを「監視フォルダ」に指定して立ち上げておけば Linux などからでも使えます。<br>

LaTeX で color パッケージを使って dvips → Distiller で作った PDF
を印刷すると文字がアミカケ状態になってしまうことがあります。<br>
［設定］ → ［ジョブオプション］ → ［カラー］ を「カラーマネジメント用にすべてタグ付け」，作業用スペースの CMYK
を Photoshop 5 Default CMYK にすると直りました（理屈はよくわかってないのですが）([qa:16839](https://okumuralab.org/~okumura/texfaq/qa/16839.html))。<br>
設定ファイルを「プリプレス-日本」にしても直るようです ([qa:18199](https://okumuralab.org/~okumura/texfaq/qa/18199.html))。<br>

Photoshop 5 Default CMYK にすると今度は色が変わってしまうというご指摘をいただきました。<br>
設定ファイルを「プリプレス-日本」にするのがよさそうです。<br>
ただ，文字がアミカケ状態になるのは Acrobat から非 PS プリンターに出力する際の問題のようですので，PS
プリンター（イメージセッタも）では大丈夫かもしれません。<br>

### pdf（のサイズ）を拡大 {#l1c219ce}

下記が目標：

- 元のサイズが 128.0 × 96.0 mm の pdf (beamer作成）のイメージを 2.1865 倍に拡大（ 279.87 × 209.9 mm ）
- 仕上がりペーパーサイズ（A4: 297.04 × 209.9 mm）とし，上記を中央配置した pdf ファイルを作成

方法１：

Acrobat Pro（有償ソフト）を用いて対象の pdf ファイルを開き，Adobe PDF プリンターを用いて印刷し新たなpdf ファイルを生成．

- 下記の手順の結果，拡大倍率 205%，左寄せ配置のpdf ファイルが生成された．
    - プリント設定で，用紙サイズ A4．
    - プリントで，Adobe PDF プリンター．ページの拡大／縮小の設定は｢用紙に合わせる」．

### Word で PDF {#l3ff32fb}

Word は，同じファイルを開いても，同じように書いても，バージョン，設定，テンプレート，プリンター[^1]，その他の環境の違いによって，レイアウトが変わってしまうという嫌な特徴を持っています。<br>
正しい方法で PDF にしておけば，レイアウトの崩れは防げます。<br>

Windows PowerShell またはコマンド プロンプトから

```
control printers
```

を実行して［デバイスとプリンター］画面を表示します．<br>
［プリンターと FAX］にある「Adobe PDF」プリンターが「通常使うプリンターに設定」されていることを確認します。<br>

テンプレートが指定されている場合には，それをユーザテンプレート用のフォルダに入れておきます。
ユーザテンプレート用のフォルダは，Word
を立ち上げて ［ツール］ → ［オプション］ → ［規定のフォルダ］ で確認できます
（見にくい場合には，とりあえず［変更］を押してみるといいでしょう）。

Word を立ち上げます。
テンプレートがあるなら「新規作成」でテンプレート名を指定します。
テンプレートがないなら，［ファイル］ → ［ページ設定］ で決められた値を設定します。
用紙は，日欧では A4，米国ではレターサイズが一般的です。

欧文論文なら，すぐにフォントを欧文フォントに切り替えます。
理系論文用の欧文フォントとしては，本文は Times New Roman，見出しは Arial
が一般的です。
ちなみに Word で Century
を使うとイタリック体が本来のイタリック体ではなく機械的に斜めにしたものになってしまいます。

欧文論文では全角文字は一切使ってはいけません。
記号類は Symbol フォントを使いましょう。

欧文・和文を問わず，ローマ数字は I，II，III，IV，V のように欧文アルファベットを並べて表します。

和文論文なら，本文は「リュウミンL-KL」，見出しは「中ゴシックBBB」にします。
これらのフォントが一覧に現れない場合には，「Acrobat
Distiller」プリンターが「通常使うプリンターに設定」されていないことが考えられます。

和文フォントの文字飾り（ボールド，斜体，ワードアートなど）は使ってはいけません。

挿入する図についても，フォントは正しく設定しましょう。
Excel のグラフ軸の数字が「ＭＳ Ｐゴシック」のままになっていませんか。

完成したら，［ファイル］ → ［印刷］ でプリンター名が Acrobat Distiller になっていることを確認し，印刷します。
PDF ファイル名を聞いてきますので，フォルダを確認し，半角英数字でファイル名を付けます。

Adobe Reader （または Adobe Acrobat） が立ち上がりますので，
拡大して文字がギザギザにならないことを確認します。
また，全ページをスクロールし表示した後で，［ファイル］ → ［プロパティ］ → ［フォント］
ですべての使用フォントを確認します。
確認項目：

- 欧文フォントの「実際のフォント」（4.0 では「使用フォント」）が（Times，Helvetica
    などの PostScript Level 1 での基本14書体を除いて）すべて「埋め込みサブセット」または「埋め込み」となっている

- 和文の場合には，和文フォントの「オリジナルフォント」（4.0 では「PDFのフォント」）が「リュウミンL-KL」と「中ゴシックBBB」になっている

紙に印刷するには，Word ではなく Adobe Reader （または Adobe Acrobat） の印刷メニューで，プリンター名を物理的なプリンターに変えてから印刷します。
印刷ダイアログの「用紙サイズに合わせてページを縮小」はデフォルトでオンになっているようですが，等サイズで印刷するときはオフにしておかないと微妙に縮小されることがあります。
「画像として印刷」もオフにしておかないとガタガタの印刷になります。
「2バイトフォントのダウンロード」も通常はオフにします。

Word の極細 (0.25 pt) の罫線は使わないほうが無難です。
画面では見えても，印刷すると飛んでしまうことがあります。
これは他のソフトでも同様です。

なお，PDF ではなく Word のファイルとして保存する場合には，プリンターフォントではなく Windows 標準の TrueType フォントを使わないと，開いた環境により文字がずれてしまいます。

「リュウミンL-KL」「中ゴシックBBB」にする意味ですが，こうしておけば埋め込まなくても Reader
が適当なフォントに置き換えてくれるし，PDF
そのものが非常に軽くなるし，論文集などで論文ごとに違う和文フォントになるということが避けられるということだったのですが，ネットの高速化で，軽い PDF
への要求も以前ほどではありませんし，逆に学会で配布する PDF
は海外のパソコンでそのまま開けるように和文フォントを埋め込んではどうかといった話もあるほどです（統一したフォントを埋め込まないと論文ごとにばらつきが出ては困りますが）。
そういうわけで，「いっそのことすべて埋め込んでくれ」という指示もこれからはありかな，という気もします（「ＭＳ 明朝を埋め込むこと」といった指示は Linux/OS X ユーザに酷ですが）。

なお，これは論文の話で，単独の書籍などであれば，著者の好きなフォントを埋め込んでおくほうがあとでトラブルがないでしょう。

- 【参考リンク】[情報教育Wiki:Wordの正しい使い方](https://okumuralab.org/~okumura/compedu/?Word%E3%81%AE%E6%AD%A3%E3%81%97%E3%81%84%E4%BD%BF%E3%81%84%E6%96%B9)

### LaTeX で PDF {#k0e3280f}

(La)TeX のインストールについては
[Windows へのインストール](</Microsoft Windows/>)，
[OS X へのインストール](/Mac/)，
[Linux へのインストール](/Linux/)
などのページをご覧ください。

TeX で日本語の PDF ファイルを作る標準的な方法は，dvipdfmx を使うものです。<br>
具体的には [dvipdfmx の使い方](#rdc781c9) をご覧ください。<br>

dvipdfmx 以外の方法としては，dvips でいったん PostScript に変換して，[Ghostscript](/Ghostscript/) に付属の ps2pdf または Acrobat Distiller
で PDF に変換するものがあります。<br>
詳しくは [dvips の使い方](#lf015a28) をご覧ください。<br>

欧文のみの原稿ならば，pdfLaTeX が簡単です。<br>
BXcjkjatype を使用すると pdfLaTeX で日本語の PDF ファイルも作成できます。<br>

Unicode を使用する場合は，[LuaLaTeX](/LuaTeX/), LuaJITLaTeX, [XeLaTeX](/XeTeX/) がおすすめです。<br>

W32TeX では Computer Modern Type 1 フォントは[t1fonts.tar.xz](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/t1fonts.tar.xz) に含まれています。

無償で配布されている Computer Modern Type 1
フォントはすべてのサイズがそろっているわけではないので，次のように type1cm
パッケージを使って，存在しない Type 1
フォントは存在するものを拡大・縮小して使うようにする必要があります。

```
\usepackage{type1cm}
```

#### 読み手に親切な PDF ファイルの作り方 {#hb3bee4c}

- 目次から本文のページなどへリンクジャンプ可能だと読み手が楽です。例としてプリアンブルに下記を入れると良いようです。

    ```
    \usepackage[dvipdfmx,bookmarkstype=toc,colorlinks=true,urlcolor=black,%
          linkcolor=black,citecolor=black,linktocpage=true,bookmarks=false]{hyperref}
    \usepackage{pxjahyper}
    ```

- \boldsymbol などを用いて本物のボールド体を使ってください。（重ね打ち \[“\pmb” or “\bm”\] による擬似的ボールド体は見苦しいです。例えば IEEE サイトで有償提供されている論文などです。）
    <!-- bm パッケージによる \bm は基本的には重ね打ちではなく， -->
    <!-- きちんとボールド体を用います（ただし，ボールド体を利用できない -->
    <!-- ［あるいは利用しづらい］一部の記号については重ね打ちになります）。 -->

- Type 1 フォントを用い，かつファイル内に埋め込んでください。（Adobe Reader で正常にテキスト検索できるように，妙なテキストエンコーディングも用いないでください。）

- （上記に関して，世の中の PDF ファイルには読んでいて苦労をするものが案外多いようです。）

### dvipdfmx の使い方 {#rdc781c9}

[dvipdfmx](/dvipdfmx/) は TeX 出力（DVI ファイル）を PDF に変換するフリーソフトウェアです。<br>
『［改訂第6版］ LaTeX2e 美文書作成入門』の電子版は dvipdfmx で PDF 化しました。<br>
dvipdfmx は TeX Live, W32TeX に含まれています。<br>

使い方は，Windows PowerShell またはコマンド プロンプトなどで

```
dvipdfmx foo.dvi
```

と打ち込むだけです。<br>
これで foo.dvi が foo.pdf に変換されます。<br>
コマンドラインを使用するのが苦手なかたは [LyX](/LyX/), [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/)
などで dvipdfmx を使うように設定できます。<br>

以下では dvipdfmx について説明します。<br>

#### フォントの埋め込み設定 {#z0e1001a}

dvipdfmx がフォントを埋め込むかどうかは設定によります。

まず欧文フォントですが，TeX Live ではデフォルトで欧文フォントを埋め込みますが，W32TeX では通常は PostScript Level 1 での基本14書体は埋め込みません。<br>
W32TeX で基本14書体を埋め込むには

```
dvipdfmx -f dlbase14.map ファイル名
```

のようにして起動してください。<br>
あるいはソースに

```
\AtBeginDvi{\special{pdf:mapfile dlbase14.map}}
```

なる special コマンドを書いておいてもよいです。(\specialの用法について ([qa:55664](https://okumuralab.org/~okumura/texfaq/qa/55664.html), [qa:55665](https://okumuralab.org/~okumura/texfaq/qa/55665.html), [qa:55672](https://okumuralab.org/~okumura/texfaq/qa/55672.html)))

次に和文フォントですが，TeX Live はデフォルトで和文フォントを埋め込みませんが，W32TeX はデフォルトでは IPAexMincho・IPAexGothic を埋め込みます。<br>
TeX Live の場合は IPAexフォントを埋め込む場合は Windows PowerShell またはコマンド プロンプトから

```
kanji-config-updmap ipaex
```

を実行します。<br>

W32TeX の場合は和文フォントはデフォルトでは IPAexMincho・IPAexGothic を埋め込みます。<br>

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

と書いてあれば「IPAexMincho」・「IPAexGothic」が埋め込まれます。

cid-x.map の場所は Windows PowerShell またはコマンド プロンプトから以下のコマンドを実行すれば検索できます．

```
kpsewhich -progname=dvipdfmx -format=map cid-x.map
```

なお、dvipdfmx はフォントを埋め込まないと仕様に違反した PDF を生成するようです。<br>
日本語版 dvipdfm にはこの問題はないようです。<br>
（参照：[PDF1.7 仕様書](https://wwwimages2.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf#page=285)
The Identity-H and Identity-V CMaps shall not be used with a non-embedded font. Only standardized character 
sets may be used.）<br>

dvipdfmx は PDF，PNG，JPEG，MetaPost 出力，EPS を挿入できます。<br>
EPS 挿入には外部プログラムとして Ghostscript が必要です。<br>
ベクトル画像は PDF 形式，ラスター画像は PNG または JPEG 形式で挿入するのがいいでしょう。<br>

#### バウンディングボックス（BoundingBox）ファイルの作成 {#rf074b4b}

[W32TeX](/W32TeX/) や [美文書第6版](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/) からインストールした場合は texmf.cnf の shell_escape_commands に extractbb が指定されていて，

```
\usepackage[dvipdfmx]{graphicx}
```

のようにすると，自動的に extractbb が実行されるので，バウンディングボックスファイルをあらかじめ作成しておく必要はありません。<br>

[TeX Live](</TeX Live/>), [MacTeX](/Mac/#mactex) では extractbb の実行は自動化されていません。<br>
自動化したい場合は

- Windows の場合は C:\texlive\texmf-local\web2c\texmf.cnf
- OS X, Linux の場合は /usr/local/texlive/texmf-local/web2c/texmf.cnf

に書き加えます。

```
sudo nano /usr/local/texlive/texmf-local/web2c/texmf.cnf　（ここでは例としてnanoで開きました）
```

などとして，

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,upbibtex,biber,\
kpsewhich,\
makeindex,texindy,\
mpost,upmpost,\
repstopdf,epspdf,extractbb
```

を書き足して管理者権限で

```
mktexlsr
```

を実行します。

自動的に extractbb が実行されない場合は，あらかじめ Windows PowerShell またはコマンド プロンプトで

```
extractbb zu.png
```

と打ち込んで zu.xbb というバウンディングボックスファイルを作っておきます。

また，LaTeX ファイル中では

```
\usepackage[dvipdfmx]{graphicx}
...
\includegraphics[width=8cm]{zu.png}
```

のようにして graphicx
パッケージを読み込む際に必ず \[dvipdfmx\] オプションを与えます。<br>
これで LaTeX と dvipdfmx で処理します。<br>

Ghostscript で PDF を作る場合，正しい設定をすれば和文フォントを埋め込まずにきれいな EPS ファイルができます。<br>
詳しくは [Ghostscript](/Ghostscript/)
のページをご覧ください．

Distiller をコマンドラインから使いたい場合，
OS X では

```
$ open -a 'Acrobat Distiller.app' ファイル名
```

とします（alias を設定しておくと便利でしょう）。

dvipdfmx で PSfrag を使うには，まず \pagestyle{empty}
で図と PSfrag だけのページを作り，“dvips -Ppdf -E” で
いったん EPS にしてから，それをメインの LaTeX ファイルに挿入します。<br>
ちょっと面倒ですので，
[overpic](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/overpic.html)
や
[labelfig](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/labelfig.html)
を使うのがいいでしょう。<br>

dvipdfmx は PFB 形式の Type 1 フォントしか使えません。<br>
PFA → PFB 変換には [FontForge](http://fontforge.sourceforge.net/) が使えそうです。<br>

<div style="text-align:right">See <a href="/HyperTeX/#ubbc3ac6">HyperTeX#hyperref を上手に呼んで便利な PDF を作る</a></div>

### dvips の使い方 {#lf015a28}

dvips は TeX の出力（DVI ファイル）を PostScript (PS) ファイルに変換するツールです。

dvips で変換した PS ファイルは Ghostscript 付属の ps2pdf
コマンドで PDF ファイルに変換できます。<br>
きちんと設定すれば，日本語部分もきれいなアウトラインで出力されます。<br>
処理速度や使いやすさの観点では，dvips + ps2pdf よりも dvipdfmx のほうがいいかもしれません。<br>

Acrobat をお持ちであれば Windows 上でダブルクリックすれば，Acrobat Distiller が PDF に変換してくれます。<br>
dvipdfmx を使うほうがトラブルは少ないかもしれません。<br>

dvips はできるだけ新しいものを使いましょう。<br>
W32TeX の場合は Computer Modern Type 1 フォントの入った t1fonts.tar.xz も必ずインストールしておきます。<br>

foo.dvi という DVI ファイルを Distiller 入力用の PostScript ファイル foo.ps
に変換するには，W32TeX では Windows PowerShell またはコマンド プロンプトで次のように打ち込みます。<br>

```
dvips -Ppdf -o foo.ps foo.dvi
```

ハイパーリンクを埋め込んであるなら dvips -Ppdf -z ... のように “-z” も付けます。<br>
TeX Live では，“-Ppdf” オプションは不要です。<br>
デフォルトで，pk フォントではなく Type 1 フォントを利用できます。<br>

欧文 Base14 フォントを埋め込む場合は “-Pdl” といったオプションにします。

通常のドキュメントクラスでは，\[a4paper\] オプションを付けても，Acrobat Distiller
のデフォルト設定では用紙がレターサイズになってしまいます。<br>
A4 にするには，Distiller のジョブオプションの設定でページサイズを変えるか，あるいは dvips
に “-t a4” というオプションを付けてください（→ [詳細](/dvips/)）。<br>
[新ドキュメントクラス](/jsclasses/)なら
\documentclass\[uplatex,a4paper,papersize\]{jsarticle}
のように “papersize” オプションを付けると dvips が用紙サイズを認識してくれます。<br>

図を挿入する際には

```
\usepackage[dvips]{graphicx}
```

のように \[dvips\]
オプションを指定します。<br>
図として EPS を挿入できます。<br>

### 図の描き方 {#yca8607c}

<div style="text-align:right">See <a href="/TeX入門/図表/">TeX入門/図表</a>, <a href="/描画・グラフツール/">描画・グラフツール</a></div>

せっかく PDF にするのなら図はペイント系（ラスターグラフィックツール）ではなくドロー系（ベクトルグラフィックツール）で描きましょう。
前者は拡大するとギザギザになりますが，後者はいくら拡大しても滑らかです。

フリーソフトウェアでは
[Inkscape](/Inkscape/)，[LibreOffice](/LibreOffice/)/[Apache OpenOffice](/LibreOffice/)
Draw
などがドロー系，[GIMP](https://ja.wikipedia.org/wiki/GIMP) などがペイント系です。
ラスターイメージとして出力するなら
[Blender](https://ja.wikipedia.org/wiki/Blender) も使えます。

商品では [Illustrator](/Illustrator/) や Visio がドロー系，Photoshop がペイント系です。

ドロー系ソフトからは PDF 形式または EPS (Encapsulated PostScript) 形式で保存しておきます。
dvipdfmx, pdfTeX/pdfLaTeX, LuaTeX/LuaLaTeX, LuaJITTeX/LuaJITLaTeX, XeTeX/XeLaTeX を使う場合には PDF のほうが便利でしょう。

[gnuplot](https://okumuralab.org/~okumura/linux/?gnuplot) などのグラフツールも PDF 形式や EPS 形式で出力できます。([28.6 グラフを画像として保存する | HWB](http://hwb.ecc.u-tokyo.ac.jp/current/applications/gnuplot/output/), [GNUPLOTを用いたグラフ作成](http://www.cse.kyoto-su.ac.jp/~oomoto/lecture/program/gnuplot/gnuplot.html), [gnuplotの出力をマージンを調整してpdfに変換する](http://d.hatena.ne.jp/yambi/20130717/1374064507), [gnuplot で pdf 出力するときの注意](http://blog.livedoor.jp/ooboofo3/archives/53922133.html))

Word や DTP ソフトに挿入するときは EPS 保存時にプレビュー用のラスター画像を付けておくと便利です。
画面や非 PostScript プリンターへの出力ではラスター画像が使われ，PostScript
プリンター（Distiller も含む）への出力にはベクトル画像が使われます。
LaTeX に挿入するときはプレビュー画像は不要です。

画面キャプチャーなどのラスター画像は，dvips などを使って PS を作るなら，EPS
に変換しておくといいでしょう。
Illustrator や Acrobat などに貼り付けたり開いたりしてから EPS
で保存することもできますし，[ImageMagick](http://www.imagemagick.org/)
や [sam2p](https://code.google.com/p/sam2p/)
などのツールを使う方法もあります。

PostScript Level 2 の EPS は JPEG 形式を含んでいますので，
正しいツールを使えば，サイズをあまり変えずに JPEG → EPS 変換できます。
詳しくは「[変換ツール](</変換ツール/>)」の項目をご覧ください。

ドロー系の図には太さ 0.1 mm 以下の線を含めないでください。
高解像度のイメージセッタで出力すると見えなくなってしまいます。

写真などのラスター画像の場合，解像度は 300&ndash;600 dpi でかまいません。

dvipdfmx を使う場合には，ラスター画像は EPS より PNG か JPEG で保存しておくほうが楽です。

<!-- ***DVI/PDF 両形式を作成する場合の，画像の用意の仕方 [#l580b75f] -->
<!-- RIGHT:[[qa:32795]] -->
<!--  -->
<!-- -PDF 画像のみを用意する~ -->
<!-- → PDF 画像は DVIOUT で表示されるが，複雑な画像の場合には表示がおかしくなる ([[qa:32767]], [[qa:32769]]) -->
<!--  -->
<!-- -EPS 画像のみを用意する~ -->
<!-- → dvipdfm 時に ghostscript (or distiller) を呼び出して変換処理をするのに時間がかかる -->
<!--  -->
<!-- -PDF, EPS 両方を用意して使い分ける（DVI ファイルに EPS 画像，PDF ファイルに PDF 画像）。~ -->
<!-- → xbb ファイルの作成が面倒。また \includegraphics で画像の使い分けをする分岐命令が面倒，煩雑。([[qa:32749]]) -->
<!-- - -texmf.cnf の shell_escape_commands に extractbb を追加する~ -->
<!-- → xbb ファイルの作成が不要となる -->
<!-- - -\usepackage[dvipdfmx]{graphicx}~ -->
<!-- → いちいち EPS/PDF 画像の選択を \includegraphics 命令の分岐で行う必要がなくなる -->
<!--  -->
<!-- >いずれにせよ，''画像の EPS 版と PDF 版との間の整合性''には充分な注意を払う必要がある。 -->

### Windows のソフトから EPS ファイルを作るには {#s66ac89b}

EPS 形式での書き出しに対応していないソフトでも，Windows の PostScript
プリンタードライバーをインストールして「ファイルに印刷」すれば PostScript
形式で保存できます。

PostScript プリンタードライバーは
Windows PowerShell またはコマンド プロンプトから

```
control printers
```

を実行して［デバイスとプリンター］画面を表示します。<br>
「プリンターの追加」をクリックしてインストールできます。<br>
インストール時にローカルプリンター（出力先 FILE:）としてください。<br>
適当なプリンター記述 (PPD) ファイルがないなら，Generic PostScript Printer
としてインストールします。

EPS 出力に設定するには，
Windows PowerShell またはコマンド プロンプトから

```
control printers
```

を実行して［デバイスとプリンター］画面を表示します。<br>
「プリンターと FAX」で PostScript Printer
を右クリックして「印刷設定」を選び，「レイアウト」→「詳細設定」 (または 「プリンターのプロパティ」を選び，「全般」→「基本設定」→「レイアウト」→「詳細設定」) で「ドキュメントのオプション」→「PostScript オプション」→「PostScript 出力オプション」を「EPS (Encapsulated PostScript)」にします。

保存するときはファイル名の拡張子を “.eps” にします（例： test.eps）。

しかし，この方法では BoundingBox （図の外枠の情報）が間違って附き，余白が広くなりすぎることがよくあります。<br>
バウンディングボックスを直すには次のどちらかの方法を使います。<br>

- テキストエディタで開き，先頭附近の “%%BoundingBox: 10 20 300 400” の
    ような行を見つけ，四つの値（それぞれ左下隅の x，y 座標，右上隅の x，y
    座標，いずれも単位は 1/72 inch）を修正する

- Windows の GSview というソフトでバウンディングボックスを修正する

以上の手順を簡単にする [Metafile to EPS Converter](</LyX/使い方/#s31f9c03>) (フリーソフト) があります。<br>
たいへん使い勝手の良いソフトです。<br>

また，「[Windows での TeX 用仮想 EPS プリンターの作成方法](http://keijisaito.info/arc/tex/v_eps_printer.htm)」
では，Windows 同梱のドライバーから仮想 EPS プリンターを作る方法が書いてあります。<br>
「[Excel グラフをきれいに TeX ⇒ PDF へ入れ込む方法](http://keijisaito.info/arc/tex/vector_pdf.htm)」，
「[画像や写真を TeX ⇒ PDF へ入れ込む方法](http://keijisaito.info/arc/tex/picture_eps.htm)」では，
それぞれベクトル形式のグラフ，ラスター形式の画像を埋め込む手順をスクリーンショット附きで説明しています。<br>

Windows の PS プリンタードライバーではなかなか質の高い EPS ができないものです。<br>
crop しても BoundingBox の外を侵蝕するような EPS を出力することもあるようです。<br>
いったん Distiller で PDF に変換して Acrobat （商品）で開き，必要な部分だけ切り抜き，EPS
形式で保存し直すほうがうまくいくかもしれません。<br>
フリーなツールでは
[ps2eps](http://www.tm.uka.de/~bless/ps2eps)
が使えそうです。<br>
PS プリンタードライバーの出力を直接 ps2eps に通す方法が[こちら](http://www.iir.me.ynu.ac.jp/~maeda/comp/epstips.html)に紹介されています。<br>

Visio 2003 以降は [EPS 出力がサポートされなくなりました](http://office.microsoft.com/ja-jp/visio/HA010857571041.aspx)が，
[Metafile to EPS Converter](</LyX/使い方/#s31f9c03>) を使うと EPS ファイルに変換できます。

[LibreOffice](/LibreOffice/)/[Apache OpenOffice](/LibreOffice/) の Draw には，EPS エクスポート機能があります。<br>
コピー＆ペーストで Draw に貼り付け，Ctrl-A で全選択して，ファイル→エクスポートでファイル書式を EPS にすると，EPS 形式で出力できます。<br>
Ctrl-A で全選択しておかないと， BoundingBox がページ全体になってしまうので，お忘れなく。<br>

### OS X のソフトから画像を挿入するには {#g035cf1f}

OS X では，どんなソフトからでも「印刷」メニューで PDF が作れます。
これをうまく使えば EPS を経由せずに高品位の画像が挿入できます。

必ず1ページだけを PDF として印刷してください。

これ（zu.pdf とします）を次のようにして挿入します。

```
\documentclass[uplatex]{jsarticle}
\usepackage[dvipdfmx]{graphicx}
\begin{document}
...
\includegraphics[bb=100 400 500 700,clip,width=5cm]{zu.pdf}
...
\end{document}
```

ここで (100, 400) が挿入したい長方形部分の左下隅の座標，(500, 700) が右上隅の座標です。
もちろん数値は適当に変えてください。
単位はポイント (= 1/72 inch) で，紙の左下隅が原点 (0, 0) です。

これで ptex2pdf で PDF にして，「プレビュー」または Adobe Reader
で印刷します（あるいは [TeXworks](/TeXworks/), [TeXShop](/TeXShop/)
を使えば「タイプセット」ボタンをクリックするだけで PDF ができます）。

### Adobe Reader/Acrobat のヒント {#l5e4219f}

印刷ダイアログの「用紙サイズに合わせてページを縮小」は，特に必要なければオフにします。
これがオンの場合，ほんの少し小さく印刷されることがあります。

「画像として印刷」はオフにします。
どうしても印刷がうまくいかない場合にオンにしますが，ガタガタの印刷になってしまいます。

「2バイトフォントのダウンロード」も通常はオフにします。

文字がきれいに表示されない場合には，うんと拡大してみてください。
ギザギザに見えてくるなら，間違ってビットマップフォントが埋め込まれてしまったのです。
設定を見直してください。
拡大するときれいに見えるなら，Adobe Reader/Acrobat の設定の問題でしょう。
スムージング（アンチエイリアシング），グリーキング（小さい文字を潰して表示すること）の設定を変えてみてください。

### Illustrator のヒント {#j52115c0}

Illustrator 9/10 から EPS
形式で保存するときは，互換性は最新のもの（「バージョン 9」「バージョン 10」）でかまいません。
CMYK ポストスクリプト（レベル 2）にします。
プレビューやサムネールは TeX では不要ですが，他のアプリケーションに埋め込む際にはプレビューがあったほうが便利です。
Word などに埋め込む際には，プレビューのラジオボタンは必ず「不透明」にします。

「フォントデータを含む」チェックボックスはオンにしないと文字化けします。
あるいは，逆にこれをオフにして，フォント名をエディタなどで標準的なものに置き換えるという手もあります。
たとえば Illustrator に附いている小塚明朝 Std M を使った場合，KozMinStd-Medium-90ms-RKSJ-H を Ryumin-Light-RKSJ-H
に置き換えます。

### PDF をパスワードで保護するには {#u51b6592}

- [PDFの暗号化 ～３つの暗号化コマンドの紹介 ～](http://konoyonohana.blog.fc2.com/blog-entry-49.html)

Acrobat を使えばできますが，フリーウェアとして
[QPDF](http://qpdf.sourceforge.net/)
といったものもあるそうです (使ったことはありません)。

また、OS Xでは印刷するときに「PDFで保存」を選択すれば必要なセキュリティオプションを選択できます。（ただし、Adobe Readerからはこの操作はできませんので、一度作成したPDFを「プレビュー」「[TeXShop](/TeXShop/)」などで開いてから実行してください。）

LaTeX ユーザーの方は，dvipdfmx を用いて，PDF にパスワード保護をつけることができます。具体的には，

```
dvipdfmx -S filename
```

のように，“-S” オプションをつけます。あとは所有者のパスワードとユーザーパスワード（PDF ファイルを開いたときに入力させるパスワード）の2つを問われますので，入力して Enter キーを押してください。なお，確認のために2度入力を求められます。

また、"-P"オプションでセキュリティオプションを細かく指定できます。

- 閲覧・印刷は可能にしてテキスト・グラフィックのコピー（抽出）を禁止する場合

    ```
    dvipdfmx -S -P 0x0004 filename
    ```

- 逆に印刷を不可にしてテキスト・グラフィックのコピー（抽出）を許可する場合

    ```
    dvipdfmx -S -P 0x0010 filename
    ```

- 閲覧のみを許可し、印刷もコピー（抽出）も禁止する場合

    ```
    dvipdfmx -S -P 0x0008 filename
    ```

    なお、デフォルトの「全部許可」のオプションは"0x003C"です。

その他の細かいオプションについては、dvipdfmx.cfgに記載されています。

また、20110307以降のdvipdfmxでは、\specialを用いてセキュリティオプションをtex原稿に埋め込むことができるようになりました。（プリアンブルに記述します。）

- \special{pdf:encrypt ownerpw (abc) userpw (xyz) length 128 perm 252}

    ```
             If a parameter is omitted, the default value / empty password
             is used. The special must appear at the beginning of the file.
    ```

- この機能を簡便に利用できるようにするパッケージ[bxpdfcrypt.sty](http://d.hatena.ne.jp/zrbabbler/20110320/1300620094)も存在します。

PDF のパスワードを忘れてしまった場合は

- [PDFCrack](http://pdfcrack.sourceforge.net/)
- [PDFCrack (Windows version)](http://blog.rubypdf.com/pdfcrack/)

を使うと正しいパスワードを教えてくれます。

### RedMon による PDF 作成 {#mbf7209f}

- [WindowsをPostScriptプリンターにしてUbuntuから快適印刷](http://gihyo.jp/admin/serial/01/ubuntu-recipe/0271)
- [pdf仮想プリンタを作成する (Windows 7 Enterprise 64bit)](http://heilman-jinroku.blogspot.jp/2012/09/pdfwindows-7-enterprise-64bit.html)
- [ghostscript と RedMon による PDF プリンタの実現](http://miko.org/~tatyana/tech/Win/pdfprinter.html)

Windows 上で，フリーウェアだけで Distiller と同様に簡単に PDF が作れます。<br>
[RedMon](http://pages.cs.wisc.edu/~ghost/redmon/) というツールと Ghostscript を組み合わせて使います。<br>

あらかじめ最新版の Ghostscript をインストールしておきます。<br>
フォントを埋め込むように設定しておくといいでしょう。<br>

RedMon を展開して setup.exe を実行します。

次に，コントロールパネルの「プリンターの追加」（「プリンターのインストール」）を実行します。
「ローカルプリンター」「自動的に検出しない」でいいでしょう。
プリンターポートは「新しいポートの作成」で「Redirected Port」を選びます。
ポート名は “RPT1:” のままでかまいません（複数作ると “RPT2:” 等々になります）。
プリンターソフトウェアは，カラーのPSプリンターなら何でもかまいません。
“Apple” “Apple Color LaserWriter 12/600J” でも “Canon” “Canon LBP-2260PS” でも大丈夫でした。
テスト印刷はしません。

「デバイスとプリンター」の「プリンターと FAX」に新しいプリンターアイコンができますので，
適当な名前に変えます（例えば “Ghostscript PDF writer”）。
さらに，右クリックして「プロパティ」の「ポート」タブを選び，上で指定したポート名
（“RPT1:” など）が選ばれている状態で［ポートの構成］を押し，たとえば次のように設定します：

Redirect this port to the program:
: &nbsp;

C:\gs\gs9.14\bin\gswin64c.exe または C:\gs\gs9.14\bin\gswin32c.exe

Arguments for this program are:
: -sDEVICE=pdfwrite -dBATCH -dNOPAUSE -dSAFER -sPAPERSIZE=a4 -sOutputFile="%1" -

Output:
: Prompt for filename

Run:
: Minimized

Word などのアプリケーションからこのプリンターに印刷すると，保存するファイル名を聞かれますので，適当な名前（何々.pdf）を入力すれば，PDF ファイルが出来上がります。

同趣向の
[PDFCreator 日本語対応版](http://super777.o.oo7.jp/page004.html)
というフリーソフトウェアがあります。
日本語も通ります。

### 参考になるかもしれない他のページ {#ue062c22}

- [DTP で TeX を使おう](</DTPとTeX/>)

### その他のリンク {#ed93164a}

- [Wikipedia.en:List_of_PDF_software](https://en.wikipedia.org/wiki/List_of_PDF_software)
- [PDFフォント○×チェッカー](http://pdf.printjapan.com/)　これを使うと作成した PDF ファイルにフォントがすべて埋め込まれているかどうかチェックできます。
- [埋め込むか、埋め込まざるか、その設定方法が問題だ（W32TeX 編）](http://d.hatena.ne.jp/zrbabbler/20130110/1357824856)
- [（フォントを）埋め込むか、埋め込まざるか、その設定方法が問題だ（TeX Live 編）](http://d.hatena.ne.jp/zrbabbler/20130115/1358197826), [埋め込むか、埋め込まざるか、の補足](http://d.hatena.ne.jp/zrbabbler/20130119/1358573411), [埋め込むか、埋め込まざるか、後者は問題だ](http://d.hatena.ne.jp/zrbabbler/20130131/1359631758)
- [pdf ファイルのフォント埋め込みについて - JSIAM](http://www.jsiam.org/modules/xfsection/article.php?articleid=57)
- [手書き PDF 入門](http://www.kobu.com/docs/pdf/pdfxhand.htm) (横浜工文社さん)
- [フリーソフトで PDF を作成する方法](http://www.trueroad.jp/pdf-make/) （細田さん）
- [WinTeX文書をPDF化する](http://kamoland.com/comp/tex_acro.html)
- [さまざまなPDFの作成技術の概観](http://www.antenna.co.jp/pdf/reference/createpdf.htm) (アンテナハウスさん)
- [テクニカルガイド - PDF作成方法](http://www.iro-dori.net/guide/technical/pdf/)
- [PDFファイル作成方法](http://www.miyagi.kopas.co.jp/guide_JSBBA/guide.html)
- [PDF化の方法（Windows編）](http://www.kenkyuu.net/computer-12)
- [きんどるをはっく - LaTeX編 - YouTube](http://www.youtube.com/watch?v=JQOsVWqLCLM&feature=related) KindleでLaTeXソースをコンパイルし、pdfファイルを生成。できたpdfをKindleで閲覧。
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
- [Mac OS XでGhostScriptを使わない、日本語PostScriptファイルのPDF化](http://mechawooser.blogspot.jp/2013/11/mac-os-xghostscriptpostscriptpdf.html)

## 要約 {#gf004f58}

### PDF形式出力を得るLaTeXタイプセットの主な流儀 {#gf004f58}

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
※ ptex2pdf を使用すると (2)-1, (2)-2 の処理を一度に実行できます。
※ 挿入図ファイルはPDF形式等も可（EPS形式以外はdvipdfmxが自力で対応するので、Ghostscriptの助けは不要）。
```

(3) tex → dvi → ps → pdf

```
(3)-1: uplatex: tex → dvi
(3)-2: dvips: dvi → ps
(3)-3: ps2pdf (Ghostscript)  or 「Adobe Distiller」: ps → pdf
※ arXiv等ではこれを要求されるようです
※ 挿入図ファイルはEPS形式のみ, pstricks, powerdot 使用可能
```

### PDF形式ファイル（図）の挿入について {#n20e1824}

- EPS 形式を使用せずに PDF 形式の挿入図を用いて，「pdflatex, lualatex, luajitlatex, xelatex: tex → pdf」または「uplatex + dvipdfmx: tex → dvi → pdf」の流儀で処理させると，Ghostscript を経ることもなく，通常は処理も速い。
- 図の挿入は、一般的には，BoundingBox 情報の処理が必要（→[TeX入門/図表](</TeX入門/図表/>)）。BoundingBox とは、EPS 形式で定義されているような、描画図をぴったり囲む矩形のこと。

- pdf ファイルの BoundingBox 情報
    - PDF ファイルも、EPS形式と同様の BoundingBox （の概念）を持っているようで、Adobe [Illustrator](/Illustrator/) で作成・保存したPDF ファイル（また .ai ファイル）では実際に書き込まれる。この場合は挿入図の処理は EPS 形式と同様となる。
        <!-- - - ただし，Adobe [[Illustrator]] で作成・保存した PDF形式の挿入図に対しては不必要。cf. http://www.nn.iij4u.or.jp/~tutimura/tex/dvipdfm.html -->

- PDF ファイルは、BoundingBoxとは別に、ArtBox、TrimBox、BleedBox、CropBox、MediaBox という概念を持っている。pdfファイルを作成するアプリケーションは、少なくともArtBoxもしくはMediaBoxの値をファイル内に書き込むことが多い。
    - extractbb コマンドは書き込まれているこれらの値の一つを読み取って、BoundingBox情報として見なす。もしも、BoundingBoxとしては相応しい値でない場合には、問題が生じることになる。
        - 最近のバージョンの Adobe [Illustrator](/Illustrator/) では、作成・保存したPDF ファイル内に BoundingBox と ArtBox とを同じ値で書き込む。
        - 情報を読み取る例：

            ```
            $ pdfinfo -box  foo.pdf
            $ extractbb -O  foo.pdf 
            $ cat foo.pdf | strings | grep -e '%%\(HiRes\)*BoundingBox'
            $ gs -q -dSAFER -dNOPAUSE -dBATCH -sDEVICE=bbox  foo.pdf
            $ epstool --dump foo.eps | grep -e "box "
            ```

<!-- - pdf ファイルの bounding box 情報 -->
<!-- - - PDF ファイル（Adobe [[Illustrator]] による保存を除く）の bounding box 情報の仕様（正確には bounding-box-like な矩形領域情報は複数種類が定義されている）は、EPS ファイルのそれとは正確には異なる。 -->
<!-- - - 従って、PDF ファイル内から普通にbounding box 情報を読み取っても、それは「描かれた図形を囲む最小矩形領域」ではない可能性も存在するので注意が必要。その場合には、計算等によって「最小矩形領域」を算出する過程が必要となる。 -->

[^1]: プリンター依存性は Word 2000 でほぼ解消されたようです。
