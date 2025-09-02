---
title: "Microsoft 365"
url: "/Microsoft 365/"
date: 2024-09-21T11:59:08Z
bookCollapseSection: true
pukiwiki: "Microsoft 365"
---

# Microsoft 365

## Microsoft 365 {#md3f00ea}

言わずと知れた Word, Excel, PowerPoint, Access (Windows PC のみ)  など。

<strong>公式サイト</strong>

- [Microsoft 365 - Subscription for Productivity Apps | Microsoft 365](https://www.microsoft.com/en-US/microsoft-365)
- [Microsoft 365 - 生産性向上アプリのサブスクリプション | Microsoft 365](https://www.microsoft.com/ja-JP/microsoft-365)
- [Microsoft 365 / X](https://x.com/MSOfficeJP)

ここでは，TeX/LaTeX と関連づけた利用法（Microsoft 365 ドキュメントへの数式の挿入，Microsoft 365 による図の作成など）に絞って説明します。

***

***

### Microsoft Word で PDF を作る {#l3ff32fb}

<!-- 「PDFの作り方」から移転して少し加筆 (2015-06-18) -->
<!-- どうやら2005年頃から記述が全く変わっていなかったようです… -->
<!-- フォントの非埋め込みを推奨していたので，とりあえず書き換えました。 - - アセトアミノフェン -->

Word は，同じファイルを開いても，同じように書いても，バージョン，設定，テンプレート，プリンター[^1]，その他の環境の違いによって，レイアウトが変わってしまうという嫌な特徴を持っています。
正しい方法で PDF にしておけば，レイアウトの崩れは防げます。

以前は，和文フォントを埋め込まずに「リュウミンL-KL」「中ゴシックBBB」にしておけば

- PDF ビューアが適当なフォントに置き換えてくれる
- PDF そのものが非常に軽くなる
- 論文集などで論文ごとに違う和文フォントになるということが避けられる

といった理由で，以前は好まれていました。
しかし，最近では PDF の仕様が変更され，むしろ<strong>基本書体以外のフォントを埋め込むことが推奨</strong>されています（[PDF1.7 仕様書](https://wwwimages2.adobe.com/content/dam/acom/en/devnet/pdf/pdfs/PDF32000_2008.pdf#page=285)）。

> The Identity-H and Identity-V CMaps shall not be used with a non-embedded font. Only standardized character sets may be used.

通信の高速化により軽い PDF への要求は以前ほどではなくなりましたし，「いっそのことすべて埋め込んでくれ」という場合が今後は多くなるでしょう[^2]。
学会で配布する PDF などでは，海外のコンピュータでそのまま開けるように和文フォントを埋め込んだほうがよいでしょう。

#### フォントを埋め込まない PDF の作り方（Adobe Acrobat Distiller 使用） {#dc435b5b}

上で述べたとおり，現在では基本書体以外のフォントを埋め込むのが主流です。
それでもフォントを埋め込みたくない場合は以下の方法が有効でしょう。

- 設定から［Bluetooth とデバイス］→［プリンターとスキャナー］画面を表示します。［プリンターとスキャナー］にある「Adobe PDF」プリンターが「既定」に設定されていることを確認します。

- テンプレートが指定されている場合には，それをユーザテンプレート用のフォルダに入れておきます。ユーザテンプレート用のフォルダは，Word を立ち上げて［ツール］→［オプション］→［規定のフォルダ］で確認できます（見にくい場合には，とりあえず［変更］を押してみるといいでしょう）。

- Word を立ち上げます。
    - テンプレートがあるなら「新規作成」でテンプレート名を指定します。
    - テンプレートがないなら，［ファイル］→［ページ設定］で決められた値を設定します．用紙は，日欧では A4，米国ではレターサイズが一般的です。

- 欧文か和文かによって適切にフォントを設定します。欧文・和文を問わず，ローマ数字は I，II，III，IV，V のように欧文アルファベットを並べて表しましょう。
    - 欧文論文なら，すぐにフォントを欧文フォントに切り替えます。
        - 理系論文用の欧文フォントとしては，本文は Times New Roman，見出しは Arial が一般的です。ちなみに Word で Century を使うとイタリック体が本来のイタリック体ではなく機械的に斜めにしたものになってしまいます。
        - 欧文論文では全角文字は一切使ってはいけません。記号類は Symbol フォントを使いましょう。
    - 和文論文なら，本文は「リュウミンL-KL」，見出しは「中ゴシックBBB」にします。これらのフォントが一覧に現れない場合には，「Acrobat Distiller」プリンターが「通常使うプリンターに設定」されていないことが考えられます。
        - 和文フォントの文字飾り（ボールド，斜体，ワードアートなど）は使ってはいけません。

- 挿入する図についても，フォントは正しく設定しましょう。
    - Excel のグラフ軸の数字が「ＭＳ Ｐゴシック」のままになっていませんか。

- 完成したら，［ファイル］→［印刷］でプリンター名が Adobe PDF になっていることを確認し，印刷します。PDF ファイル名を聞いてきますので，フォルダを確認し，半角英数字でファイル名を付けます。

- Adobe Acrobat Reader（または Adobe Acrobat）が立ち上がりますので，拡大して文字がギザギザにならないことを確認します。また，全ページをスクロールし表示した後で，［ファイル］→［プロパティ］→［フォント］ですべての使用フォントを確認します。
    - 欧文フォントの「実際のフォント」（4.0 では「使用フォント」）が（Times，Helvetica などの PostScript Level 1 での基本14書体を除いて）すべて「埋め込みサブセット」または「埋め込み」となっているでしょうか。
    - 和文の場合には，和文フォントの「オリジナルフォント」（4.0 では「PDFのフォント」）が「リュウミンL-KL」と「中ゴシックBBB」になっているでしょうか。

紙に印刷するには，Word ではなく [Adobe Acrobat Reader](</Adobe Acrobat Reader/>)（または Adobe Acrobat）の印刷メニューで，プリンター名を物理的なプリンターに変えてから印刷しましょう。

- 印刷ダイアログの「用紙サイズに合わせてページを縮小」はデフォルトでオンになっているようですが，等サイズで印刷するときはオフにしておかないと微妙に縮小されることがあります。

- 「画像として印刷」もオフにしておかないとガタガタの印刷になります。

- 「2バイトフォントのダウンロード」も通常はオフにします。

なお，PDF ではなく Word のファイルとして保存する場合には，プリンターフォントではなく Windows 標準の TrueType フォントを使わないと，開いた環境により文字がずれてしまいます。

### Office で PDF を作成する際の注意 {#i41f716f}

Word などの極細 (0.25 pt) の罫線は使わないほうが無難です。
画面では見えても，印刷すると飛んでしまうことがあります。

### アドイン {#w6cd2e21}

[プレゼンツール](</プレゼンツール/>)を参照．

### LaTeX との比較 {#k678548a}

いわゆる「ワープロソフト」と LaTeX はまったく異なるツールで，見た目だけに注目した単純な比較はナンセンスです。
[はじめての方へ](</はじめての方へ/>)もお読みください。

- [学術論文を書くときは Microsoft Word と LaTeX のどちらが効率的か？｜Colorless Green Ideas](http://id.fnshr.info/2014/12/21/word-or-latex/)
- [PLOS ONE: An Efficiency Comparison of Document Preparation Systems Used in Academic Research and Development](http://www.plosone.org/article/info:doi/10.1371/journal.pone.0115069)
- [TeXは本当によいものか?](http://hdmr.org/d/?e=1947)
- [WordとTexって結局どっちがええのんか](http://yakyuzuki.blogspot.jp/2013/05/wordtex.html)
- [僕がTeXで仕様書を書く理由](http://setsulla.hatenablog.com/entry/2012/10/09/144243)
- [TeXとOfficeの差異(前編)](http://tatuyan-edson.blogspot.com/2011/08/texoffice.html)
- [TeXからWordへの乗り換えを試みた](https://moccos.hatenablog.com/entry/20110801/p1)
- [なぜ，我々はWordの絵がどっか言ってしまうと文句を言い募るだろうか？](https://smectic-g.hatenadiary.org/entry/20100223/1266934286)
- [私がTeXを使い続ける理由 - くるるの数学ノート](https://kururu.hatenablog.com/entry/20100220/1266648484)
- [私がTeXを使い続ける1個+6個の理由 - わさっき](https://takehikom.hateblo.jp/entry/20100218/1266441239)
- [僕が TeX を使うのを辞めた3つの理由](https://ufcpp.hatenadiary.org/entry/20100216/1266337507)
- [僕が TeX を使うのを辞めた 10 の理由](https://ufcpp.hatenadiary.org/entry/20100219/1266594885)
- [僕が TeX を使うのを辞めた30の理由](https://ufcpp.hatenadiary.org/entry/20100220/1266661449)
- [まえがき (Office 関連)](http://ufcpp.net/study/office/wordintro.html)
- [まえがき (Word 2007、Word 2010)](http://ufcpp.net/study/office/word2007.html)
- [まえがき (数式入力)](http://ufcpp.net/study/office/wordmath.html)
- [最近、MS Equation Editor にどっぷり](http://ufcpp.wordpress.com/2010/02/16/%E6%9C%80%E8%BF%91%E3%80%81ms-equation-editor-%E3%81%AB%E3%81%A9%E3%81%A3%E3%81%B7%E3%82%8A/)
- [10 の理由に増やしてみた](http://ufcpp.wordpress.com/2010/02/19/10-%E3%81%AE%E7%90%86%E7%94%B1%E3%81%AB%E5%A2%97%E3%82%84%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F/)
- [WordとLaTeX－どちらを使うべきか？](http://www.forte-science.co.jp/news/articles/20090106/wordorlatex.cfm)

### Word の正しい使い方 {#q1fc579f}

- [情報教育Wiki:Word の正しい使い方](https://okumuralab.org/~okumura/compedu/?Word%E3%81%AE%E6%AD%A3%E3%81%97%E3%81%84%E4%BD%BF%E3%81%84%E6%96%B9)

### 「ネ申 Excel」への警鐘 {#q611269f}

- [「ネ申Excel」問題](https://okumuralab.org/~okumura/SSS2013.pdf)
- [「ネ申Excel」問題（スライド）](https://okumuralab.org/~okumura/SSS2013slide.pdf)
- [「ネ申Excel」はなぜ問題なのか](https://it.srad.jp/story/13/10/23/037221)

### 外部リンク {#i993cecd}

- [Wikipedia.ja:Microsoft 365](https://ja.wikipedia.org/wiki/Microsoft%20365)
- [Microsoft Office - Wikibooks](https://ja.wikibooks.org/wiki/Microsoft_Office)
- [Word で UnicodeMath および LaTeX を使用して行形式の数式を入力する](https://support.microsoft.com/ja-jp/office/word-%E3%81%A7-unicodemath-%E3%81%8A%E3%82%88%E3%81%B3-latex-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E8%A1%8C%E5%BD%A2%E5%BC%8F%E3%81%AE%E6%95%B0%E5%BC%8F%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%99%E3%82%8B-2e00618d-b1fd-49d8-8cb4-8d17f25754f8)
- [LaTexスタイルの数式入力が「Office 365」で利用可能へ](http://forest.watch.impress.co.jp/docs/news/1073615.html)
- [「Excel」「PowerPoint」もLaTeX記法に対応 ～「Microsoft 365」の数式対応が拡充](https://forest.watch.impress.co.jp/docs/news/2043287.html)

[^1]: プリンター依存性は Word 2000 でほぼ解消されたようです。
[^2]: 「ＭＳ 明朝を埋め込むこと」といった指示は Linux/macOS ユーザに酷ですが…
