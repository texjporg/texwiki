---
title: "PDFの作り方"
url: "/PDFの作り方/"
date: 2013-09-11T22:44:11Z
bookCollapseSection: true
pukiwiki: "PDFの作り方"
---

# PDFの作り方

## PDF の作り方 {#td997c6f}

[PDF](/PDF/) は文書交換フォーマットとしてよく普及し，投稿論文や予稿で PDF を要求されることが増えました．
ここでは PDF の上手な作り方を解説します．

現在では，PDF ファイルを作るための方法は様々あります：

- OS の印刷機能を使う．
- ブラウザの印刷機能で HTML から生成する．
- グラフィックソフトから PDF で出力する．
- Adobe Acrobat などの専用ソフトを使う．
- [LaTeX](/LaTeX/) などの文書作成環境を整え，PDF として文書を出力する．

Adobe Acrobat が高機能で高品質ですが，高価な有償製品です．カジュアルなユーザのために，PDF を無償で作成するソフトウェアも多数用意されています．

PDF 編集ソフトウェア，PDF ビューアの一覧は [PDF - TeX Wiki](/PDF/) にまとめられていますので，そちらを参照して下さい．

***

***

## 印刷機能を使う {#m27e7b63}

macOS は標準で印刷機能から PDF で保存ができます．

Windows には「Microsoft Print to PDF」というプリンターが標準で搭載されており，様々なソフトウェアから手軽に PDF の作成ができます．

PDF 出力用の仮想プリンタを導入することで，PDF への「印刷」機能を追加することもできます。仮想プリンタの導入については後述します．

Linux などの環境でも，近年は PDF 生成環境は整ってきています。2D グラフィックス・ライブラリの [Skia](https://skia.org/) が標準で PDF への書き出しをサポートしており，これを用いる [Google Chrome](</Google Chrome/>) などのソフトウェアでは，PDF への出力が可能です．

### 仮想プリンタの導入 {#ge6f5633}

PDF 出力用の仮想プリンタを導入することで，様々なアプリケーションから，印刷機能を使って PDF を作成できるようになります．
Adobe Acrobat など商品をはじめ，CutePDF などのフリーソフトなど，仮想プリンタとして動作可能な，様々な PDF 作成用のソフトがあります．

Windows では，[Ghostscript](/Ghostscript/) というオープンソースのソフトウェアを用いた，
PDF へ出力するための無償の仮想プリンタが多数あります：
[PDF#PDF を扱うソフトウェア](/PDF/#o7e2223a) を参照．

インストール方法や使い方については，それぞれのソフトウェア名で検索してください．

## HTML などから PDF を生成する {#w33adba5}

[Google Chrome](</Google Chrome/>) などのブラウザは，ウェブページを PDF で保存する機能を持っています．
このため，HTML で文書を書いておけば，手軽に PDF 生成が可能です．

いちいちブラウザを立ち上げたくない場合でも，[grover](https://github.com/Studiosity/grover) や [ferrum_pdf](https://github.com/excid3/ferrum_pdf) などを使い，PDF の生成が可能です．grover は [puppeteer とヘッドレスChrome](https://gihyo.jp/article/2022/09/rapid-learning-puppeteer-01)、ferrum_pdf は [ferrum](https://github.com/rubycdp/ferrum) とヘッドレスChrome を利用します．ヘッドレスChromeはディスプレイへの出力を必要としない，"ヘッドレス"なブラウザでヘッドレスChrome が使用している [Blink](https://www.chromium.org/blink/) は様々なブラウザの中核となるレンダリング・エンジンです．JavaScript で利用可能です．

## LaTeX で PDF {#k0e3280f}

LaTeX のインストールについては
[Windows へのインストール](</Microsoft Windows/>)，
[macOS へのインストール](/Mac/)，
[Linux へのインストール](/Linux/)
などのページをご覧ください．

LaTeX で PDF を作成する方法はいくつかあります．dvipdfmx の登場以前に LaTeX で和文を作成する場合は，dvips で PostScript ファイルを作成し，Adobe Acrobat Distiller で PDF へ変換する方法が使われていました．現在では platex/uplatex → dvipdfmx という流れが主流です．
欧米では，pdfLaTeX により LaTeX 文書から直接 PDF を生成するのが一般的です．
Unicode を使用して多言語 PDF ファイルを作成する場合は，[LuaLaTeX](/LuaTeX/)
が使えます．

### PDF形式出力を得るLaTeXタイプセットの主な流儀 {#gf004f58}

1. tex → pdf
    - pdflatex: tex → pdf
    - lualatex: tex → pdf
    - xelatex: tex (→ xdv) → pdf
1. tex → dvi → pdf
    - platex→dvipdfmx (現在日本で最も主流) --&gt; [pLaTeX 入稿 lang:ja - 検索 / X](https://x.com/search?q=pLaTeX%20%E5%85%A5%E7%A8%BF%20lang%3Aja&src=typed_query&f=live)
    - uplatex→dvipdfmx (現在日本で主流)
1. tex → dvi → ps → pdf
    - platex/uplatex などで DVI を，dvips で DVI→PS，ps2pdf (GhostScript) か "Adobe Acrobat Distiller" で ps → pdf

arXiv などでは 3. を要求されます．Adobe Acrobat Distiller を用いると信頼性が高く，印刷所などでも好まるケースがあるようです．

### dvips の使い方 {#lf015a28}

dvips は TeX の出力（DVI ファイル）を PostScript (PS) ファイルに変換するツールです．

dvips で変換した PS ファイルは Ghostscript 付属の ps2pdf コマンドや Adobe Acrobat Distiller で PDF ファイルに変換できます．

詳細は [dvips](/dvips/) を参照してください．

## Adobe Acrobat で PDF {#w441bc87}

Adobe Acrobat は，[アドビ](https://www.adobe.com/jp/) が開発する，PDF ファイルを作成・編集・加工・管理するためのソフトです．PDF の作成だけでなく，様々な機能を備えています．

### Adobe Acrobat Reader と Adobe Acrobat の違い {#c982e6e9}

Adobe Acrobat Reader は Adobe Acrobat から表示・印刷・注釈の追加機能だけを抜き出したもので，[Adobe Acrobat Reader のダウンロードサイト](https://get.adobe.com/jp/reader/)から無償で入手できます．
[Adobe Acrobat](https://acrobat.adobe.com/jp/ja/) は
Adobe Acrobat Distiller を含む製品（商品）です．
値段は Adobe のサイトで確認してください．

有償の Adobe Acrobat には，その機能によってプランが幾つか存在しています．
「[Adobe Acrobat Proの価格とオプション | Adobe Acrobat](https://www.adobe.com/jp/acrobat/pricing.html)」などを参照してください．
Standard と Pro がありますが，どちらも様々な文書ファイルや画像ファイルの PDF への変換をサポートしており，PDF のパスワード保護，複数の PDF の統合，PDF の編集などに対応しており，また，Word への書き出しや署名なども可能です．Pro ではこれに加え，PDF/X や PDF/A への変換や，これらへの規格適合性の検証 (プリフライト) などプロフェッショナル向けの機能を備えています．

Adobe Acrobat があれば Adobe Acrobat Reader がなくても PDF ファイルを表示できます．

Adobe 製品は，なるべく最新のアップデートを適用しておきましょう．
アップデートについては Adobe のダウンロードのページをご覧ください．

### Adobe Acrobat の設定 {#e5e57a76}

[Windowsで既定のプリンターを設定する](https://support.microsoft.com/ja-jp/windows/windows%E3%81%A7%E6%97%A2%E5%AE%9A%E3%81%AE%E3%83%97%E3%83%AA%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B-e10cf8b8-e596-b102-bf84-c41022b5036f) を参照して
Adobe Acrobat を通常使うプリンターとして設定することができます．
「スタート」 → 「設定」 → 「Bluetooth とデバイス」 → 「プリンターとスキャナー」をクリックして［プリンターとスキャナー］画面を表示します．
［プリンターとスキャナー］の「Windows で通常使うプリンターを管理する」をオフに変更し，「Adobe PDF」プリンターアイコンをクリックして
「管理」→「既定に設定」します．

出力の細かい設定を行うには，「Adobe PDF」プリンターをクリックし，
［管理］ → ［印刷設定］ → ［レイアウト］ → ［詳細設定］へと進みます．

まずは［Adobe PDF 設定］タブの［PDF設定］で設定を選びます．
Web 用，論文提出用には低品位でよければ「標準」，
より高品位にするには「高品質印刷」にすればいいでしょう．
「プレス品質」は論文では必要ないでしょう．

［設定］ → ［Adobe PDF 設定\] → \[PDF 設定\]の\[編集］は次のように設定します．

- デフォルトページサイズは，A4サイズを主に使用する場合は，
    21.0 cm × 29.7 cm なっていることを確認します。（ただし文書側の設定が優先されます）．

- ［カラー］で\[カラーマネジメントポリシー\]を「カラー変更なし」にしておきます．

以上の設定内容を「名前を付けて保存」します．
ファイル名は例えば “A4.joboptions” のようにします．

## グラフィックソフトで PDF {#y8472509}

多くのグラフィックスソフトが PDF の出力機能を備えています．

### 様々な画像を PDF へ変換する {#m0798181}

[ImageMagick](/ImageMagick/) などを使うとよいでしょう．

## PDF を作る際の Tips {#k491ed05}

### 読み手に親切な PDF ファイル {#hb3bee4c}

PDF を作成するときは，読み手のことを考え，親切な PDF となるように心がけましょう．

#### しおりやハイパーリンクの利用 {#oe50e6c2}

目次から本文のページなどへ，リンクでジャンプ可能だと読み手が楽です．
LaTeX で PDF 文書を作成する場合は，[hyperref](/hyperref/) パッケージを使いましょう．
しおりの生成や，目次のハイパーリンク化などを自動化してくれ，非常に便利です．

Word などで PDF 文書を作る場合でも，設定を行い，きちんと見出しを「見出し」として作成すれば自動的にしおりをつけることができます．

#### 疑似ボールド体など {#jec95395}

いわゆる Poor Man's Bold (疑似ボールド） の利用は避けましょう。LaTeX では，\boldsymbol などを用いて本物のボールド体を使ってください．重ね打ち (“\pmb” or “\bm”) によって生じる，擬似的ボールド体は見苦しいです．例えば IEEE サイトで有償提供されている論文などです．これは単に見苦しいだけでなく，テキストの検索や抽出にも悪影響を与えます． <!-- bm パッケージによる \bm は基本的には重ね打ちではなく， --> <!-- きちんとボールド体を用います（ただし，ボールド体を利用できない --> <!-- ［あるいは利用しづらい］一部の記号については重ね打ちになります）． -->

#### フォントの利用 {#v9136148}

OpenType，TrueType，PostScript Type 1 フォントなどを用い，かつ埋め込んでください．ビットマップフォントの利用は避けましょう．Adobe Acrobat Reader で正常にテキスト検索できるように，妙なテキストエンコーディングも用いないでください．

フォントの埋め込みはよい PDF を作成するために推奨されることですが，これにはライセンス上の微妙な問題も絡み，注意が必要です。「[フォントの埋め込みとライセンス](</フォントの埋め込みとライセンス/>)」の項なども参照してください．

Adobe Acrobat (Distiller)，dvipdfmx，xdvipdfmx (XeTeX)，LuaTeX は日本語フォントを埋め込まないで使うと，ISO の仕様に違反した PDF を生成します．注意してください．

#### テキスト情報 {#g073c42c}

PDF 文書内で文字列を検索したり，文書から文字列をコピーしたりできるようにしましょう．フォントがアウトライン化されて，テキスト情報が欠落してしまうような場合は，これらができなくなってしまいます．

#### 画像の解像度 {#vf1940c0}

PDF 文書内にとりこむ画像の解像度は，ファイルサイズ，ページが完全に描画されるまでの時間などに影響します。読み手がストレスなく文書を読めるように適切に取り扱いましょう．

Adobe Acrobat などの製品では，必要であればダウンサンプルによって，画像の解像度を自動的に落としてくれますが，LaTeX などの環境ではまずこういった機能はありません．pdfTeX，LuaTeX，XeTeX，dvipdfmx などすべてダウンサンプルの機能はありません。この場合は，グラフィックソフトなどで，手動で画像サイズの調整が必要となってきます．

例えば，iPhone 6 のカメラで写真を撮る場合の標準的なサイズは 3264×2448 ですが，これを 5cm 幅の画像として取り込むと，解像度は 1600 dpi となってしまい，標準的なプリンタやディスプレイの能力をはるかに超えてしまいます。実際にはこの 3割 くらいの解像度で十分なので，ピクセルサイズを 20% から 30% くらいに縮小してもよいでしょう．

バッチ処理でおこなうには [ImageMagick](/ImageMagick/) などのソフトを，また OS に標準でついてくるペイントソフトなどを使って画像の縮小を行います．

#### Web表示用に最適化 {#n0919134}

PDF ファイルは長大な文書に利用されることが多く，また文書の表示に必要なリソースをひとつのファイルにパッケージ化するため，ファイルサイズが大きくなりがちです．インターネットで公開する場合，ダウンロード時間も長くなり，最初のページが表示されるまでにだいぶ待たなければなりません．

この問題を解消するための方法として，「Web 表示用に最適化」というオプションがあります．

Web 表示用に最適化すると、PDF 文書の構造が再構成され，Web サーバーからページ単位でのダウンロードなどが可能になります．Web 表示用に最適された PDF では，PDF ファイル全体ではなく，特定のページを描画するのに必要な情報だけが，Web サーバーから送信されます．ダウンロードに時間がかかるサイズの大きい PDF ファイルでは，このオプションを選択すると特に効果的です．

Adobe Acrobat での設定は，[Adobe Acrobat Pro での PDF の最適化&#x23;PDF の最適化を使用した保存（Acrobat Pro）](https://helpx.adobe.com/jp/acrobat/using/optimizing-pdfs-acrobat-pro.html) にて確認してください．

[QPDF](/QPDF/) は，既存の PDF を Web 表示用に最適化 (リニアライズ) する機能を備えています．

```
 qpdf --linearize input.pdf output.pdf
```

また，Adobe Acrobat Reader などで保存しなおすことで，
Web 表示用に最適化するという方法もあります．
PDF ビューアによっては，この部分ダウンロードを行えない場合もありますが，「Web 表示用に最適化」の操作は，PDF ファイルの構造を変えるだけで，品質の劣化を招くものではないので，やっておいても損はありません．

### PDF をパスワードで保護する {#u51b6592}

PDF 文書をパスワードで保護するには，いくつかの方法があります．

- [天地有情 \[LaTeX\] PDF-crypt --- PDFの暗号化 ～2つの暗号化コマンドの紹介 ～](http://konoyonohana.blog.fc2.com/blog-entry-49.html)

Adobe Acrobat を使えばできますが，フリーウェアとして [QPDF](/QPDF/) もあります．

また，macOS では印刷するときに「PDFで保存」を選択すれば必要なセキュリティオプションを選択できます．
ただし，Adobe Acrobat Reader からはこの操作はできませんので，一度作成したPDFを「プレビュー」「[TeXShop](/TeXShop/)」などで開いてから実行してください．

### PDF に注釈をつける {#v9b289c9}

Adobe Acrobat Reader をはじめ，様々な PDF ビューアが注釈をサポートしています．
LaTeX で注釈付きの PDF を作成する方法については，[PDFの作り方/注釈をつける](</PDFの作り方/注釈をつける/>)を参照してください．

## その他のリンク {#ed93164a}

- [Wikipedia.en:List_of_PDF_software](https://en.wikipedia.org/wiki/List_of_PDF_software)
