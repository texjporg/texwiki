---
title: "TeX2img FAQ"
url: "/TeX2img FAQ/"
date: 2015-06-19T15:40:51Z
pukiwiki: "TeX2img FAQ"
---

# TeX2img FAQ

[TeX2img](/TeX2img/) > TeX2img FAQ

Windows, Mac で使える画像化ツール TeX2img について，よくあるトラブルや質問をまとめておきます。

***

***

## トラブルシューティング {#se385ebb}

### TeX2img をダウンロードして起動すると「platex が見つかりません」などのエラーが出る {#a4788aaa}

TeX2img は，LaTeX ソースコードを入力して画像に変換するツールですが，これは TeX 用統合環境（エディタ）の一種にすぎません。
したがって，その処理にはお使いのコンピュータに TeX ディストリビューションが正しくインストールされている必要があります。

- 失敗例：[TeX2imgのPATHの通し方](http://okwave.jp/qa/q4200980.html)

[TeX入手法](</TeX入手法/>)を参考に，お使いのコンピュータに TeX ディストリビューションをインストールしましょう。

### 数式を入力してもエラーが出て画像が生成しない（または画像が変になる） {#w3327c6d}

しばしば誤解されがちですが，TeX2img は，[LaTeXiT](/LaTeXiT/) などとは異なり，<strong>数式画像生成に特化したツールではありません</strong>。日本語など地の文を含めて「<strong>あらゆる LaTeX 文書を画像に変換するツール</strong>」として作られています。
したがって，通常の LaTeX と同様に，数式用コマンドを使うには，$ ... $ や \\\[ ... \\\] ，\begin{align\*} ... \end{align\*} などの数式環境に入れる必要があります。

一見して画像が生成したように見えても，思うような出力にならない場合，TeX2img の設定で「少々のエラーは無視して画像化を強行する」が ON になっていることがあります。
この機能は「LaTeX によるタイプセットで多少の警告が出ていても，PDF ファイルが出来さえすれば，その先のステップに無理やり進む」というものですが，警告が出ている場合は往々にして期待とは異なる結果になります。

- 失敗例の解説：[TeX2img FAQ でも作ろうかなあ](http://d.hatena.ne.jp/acetaminophen/20150615/1434383196)

もし TeX2img を数式画像生成のためだけに使いたい場合は，[後の項目](</TeX2img FAQ/#m4a21526>)を参照してください。

### 生成画像の日本語部分が中国語っぽいフォントで出力されてしまう {#cb473466}

dvipdfmx の和文フォント埋め込み設定がなされていない可能性が高いです。
例えば [MacTeX](/MacTeX/) の場合，インストールした状態のままでは，和文フォントを埋め込まないPDFを生成してしまいます。
普段 PDF を閲覧する限りにおいては，ビューアが適当な和文フォントを探してきて表示してくれるため，不都合を感じないかもしれませんが，フォント非埋め込み PDF は，異なる環境に持って行ったときに正しく表示される保証がありません。
実際，TeX2img では内部的に生成 PDF を [Ghostscript](/Ghostscript/) に通すことがありますが，その際和文フォントが埋め込まれていないと，おかしなフォントで代用されてしまい，それが「中国語っぽいフォントで出力されてしまう」現象を引き起こします。

[和文フォント埋め込み設定](https://oku.edu.mie-u.ac.jp/~okumura/texwiki/?TeX%20Live%2FMac#i9febc9b)を行い，フォント埋め込み PDF を出力するよう dvipdfmx の設定を行ってください。

### Windows版 TeX2img がある日突然動かなくなった {#a402a767}

Windows 版 TeX2img がある日突然動かなくなるという現象が発生することがあります。

- 失敗例：[TeX2imgが画像ファイル生成してくれない現象発生してる](https://twitter.com/pavlov469/status/595438306181062656)

この場合，原因は「一時フォルダに拡張子が .tmp のファイルが大量にあること」であるかもしれません。
定期的に一時フォルダを掃除することをおすすめします。

- TeX2img for Windows 1.5.3 での対処：[GetTempFileNameで「ファイルがあります」](http://abenori.blogspot.jp/2015/05/gettempfilename.html)

最新バージョンでは改善されています。

### Mac 版でアップデートに失敗する・アップデート後に起動できない {#sbc4fdda}

OS のバージョンと TeX2img のバージョンの組み合わせ，あるいはパーミッション設定によっては，自動アップデートに失敗することがあります。
自動アップデートに失敗する場合は，[公式サイト](http://island.geocities.jp/loveinequality/)から最新版をダウンロードして手動でアプリを差し替えてください。

なお，自動アップデート機能は Lion (OS X 10.7) 以降で機能します。
Snow Leopard (OS X 10.6) をお使いの場合は，[公式サイト](http://island.geocities.jp/loveinequality/)にて配布されている Ver.1.10.x 系列をご利用ください。
自動アップデート機能をはじめ，Snow Leopard と互換性のない機能を削って，Snow Leopard で動くようにしたバージョンとなっています。

### Mac 版で ! Undefined control sequence. \UTF{xxxx} と出る {#xb2c033d}

pLaTeX を使う場合，通常は JIS 第一水準・第二水準の漢字までしか出力できませんが，[otf パッケージ](/OTF/)を利用すると出力できます。
Mac 版ではこれを利用し，設定画面で「JIS X 0208 外の文字を \UTF{xxxx} に置換」を ON にしておくと，ユーザが入力した JIS 第一水準・第二水準を超える漢字を \UTF{xxxx} に勝手に置換します。
結果としてユーザは範囲を意識することなく pLaTeX を使えるようになるのですが，この場合プリアンブルに

```
\usepackage{otf}
```

を加える必要があります。

しかし，[upLaTeX](/upTeX,upLaTeX/) を使えばこの制約はなくなり，otf パッケージが不要となります。
したがって，LaTeX エンジンを uplatex にしている場合はかえって otf パッケージの読み込みを忘れやすくなって有害です。
この場合は，設定画面で「JIS X 0208 外の文字を \UTF{xxxx} に置換」を OFF にしておきましょう。

### Mac 版でバックスラッシュ \ を入力したいのに円マーク ¥ が入力されてしまう {#a8b7895d}

```
編集＞入力された ¥ を \ に置換
```

を ON にしておくと，¥ が入力されてしまう可能性を排除できます。

### Ghostscript 実行中に Unknown device: epswrite というエラー {#cfbdb61c}

[Ghostscript](/Ghostscript/) は，バージョン 9.15 で従来使われてきた EPS 出力デバイスである epswrite を廃止しました。
TeX2img は，Ghostscript のバージョンが 9.14 以前の場合に epswrite を，9.15 以降の場合に eps2write を利用するようになっています。
この切り替えは，Windows 版では［ツール］-［オプション］-［基本設定］で「Ghostscript の DEVICE には epswrite を使用する」のチェックの ON/OFF で手動でも設定できます。

Windows 版で gs9.10 以下に対して eps2write を指定すると

```
Unknown device: eps2write
Unrecoverable error: undefined in .uninstallpagedevice
Operand stack:
    defaultdevice
```

逆に gs9.15 以上に対して epswrite を指定すると

```
Unknown device: epswrite
Unrecoverable error: undefined in .uninstallpagedevice
Operand stack:
    defaultdevice
```

というエラーが発生して止まります。
この場合は，チェックの ON/OFF を変更してみてください（Mac 版は毎回，Ghostscript 実行時に判定しているので，問題はないと思います）。
また，「各種パスの推定」ボタンを押すと正しく設定されるはずです。

### EPS ファイルを出力すると PostScript 言語が圧縮されていて読めない {#l3bf36cb}

Ghostscript 9.14 以前では，epswrite デバイスを指定することでプレーンテキストの EPS ファイルを出力することが可能でした。Ghostscript 9.15 以降では，epswrite デバイスは廃止され，ページ記述部分が圧縮されたバイナリの EPS を出力する eps2write デバイスに置き換わりました。
Ghostscript 9.15 以降ではプレーンテキストの EPS を出力する方法はありません。

- [Ghostscript の EPS バイナリ出力への対処](http://d.hatena.ne.jp/acetaminophen/20150514/1431625979)

Mac 版では，[Xpdf](/Xpdf/) の付属ツールである pdftops を内蔵することにより，Ghostscript 9.15 以降でもプレーンテキスト形式で EPS を出力する機能を備えています。（環境設定 → 出力画像 → プレーンテキストで出力する）

### 他のアプリで作成した EPS ファイルは使えるのに TeX2img で出力した EPS が使えない {#jbf9ace6}

トラブル例：[TeX2imgで作成したEPSファイルがWord2010で表示できない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1576)

これは，上記の「Ghostscript 9.15 以降が出力する EPS はバイナリ形式である」ことに起因するトラブルです。
Mac 版であれば，上述の「プレーンテキストで出力する」機能を用いて，プレーンテキスト形式で EPS を出力することを試してみてください。

### アウトライン化に失敗する（あるいは Ghostscript 実行中に Error: /VMerror in --.pushpdf14devicefilter-- と出る） {#lb8a48e0}

Ghostscript 9.14 以下では，ある種のソースで次のエラーが起こるようです。

```
Error: /VMerror in --.pushpdf14devicefilter-- 
GPL Ghostscript 9.10: Unrecoverable error, exit code 1
VM status: 3 4658400 5960088
Current allocation mode is local
```

これは，何らかの理由で Ghostscript が綺麗なアウトライン化に失敗し，細かい膨大なパスに分割されてしまうことによるものです。

これが起こるパターンは特定できていませんが，TikZ の shadows ライブラリの機能を使って影を付けた図については，ほぼ確実にこのエラーを引き起こすようです。

同種のソースを Ghostscript 9.15 以上で処理すると，アウトライン化に失敗してビットマップ化してしまいます。

- 実例：[Ghostscript のこと(1)：アウトライン化の詳細](http://acetaminophen.hatenablog.com/entry/2014/10/16/110255)，[(2)：不具合？](http://acetaminophen.hatenablog.com/entry/2014/10/17/145447)

これは TeX2img のエラーではなく Ghostscript の問題なので，有効な対処法は現状ではありません。
Ghostscript の問題を回避するには

- Windows 版：オプションの［基本設定］で「低解像度での処理を行う」にチェックを入れ，［出力画像設定］で解像度を適宜調節
- Mac 版：環境設定の［変換ツール］で「速度優先モード」に切り替える

とすることが有効かもしれません。

あるいは，Ghostscript を経由しない変換経路を通せば確実です。詳細は次の項目を参照してください。

### PDF 画像を生成したはずなのに，ぼやけたビットマップ画像になってしまう {#ze00ecbd}

これは Ghostscript 9.15 以降を使っている場合に，上記の「Ghostscript がアウトライン化に失敗する図」をアウトライン化しようとした際に発生します。
特に，TikZ の shadows ライブラリの機能を使って影を付けた図で発生しがちです。

これを回避するには，可能ならば Ghostscript を経由しない変換経路を通す出力方法を検討してください。
Mac版の場合，以下の出力の場合は Ghostscript を経由せず，この問題を回避できます。

- PDF 出力で「テキストを保持する」（環境設定→出力画像）が ON の場合
- SVG 出力の場合
- PNG / JPEG / GIF / TIFF / BMP 出力で変換処理が「速度優先モード」（環境設定→変換ツール）の場合

## よくある質問・Tips {#ta8b7d06}

### 複数の画像を一括生成したい {#kc117093}

TeX2img は，TeX による組版結果が複数ページにまたがる場合，ページごとに別々の画像ファイルを生成します。
これを逆手にとれば，

```
\[\sum_{n=1}^\infty \frac{1}{n^2}=\frac{\pi^2}{6}\]
\newpage
\[\sum_{n=1}^\infty \frac{1}{n^4}=\frac{\pi^4}{90}\]
\newpage
\[\sum_{n=1}^\infty \frac{1}{n^6}=\frac{\pi^6}{945}\]
```

のように，\newpage で改ページを入れることにより，複数の画像を一括生成することができます。

### 画像化したい内容が大きすぎて1ページに収まらない {#d3f26be2}

長大なソースを画像化する場合，組版結果が1ページに収まらないと，意図せず複数画像に分割されてしまいます。
それを1ページに収めた画像にしたい場合，用紙サイズの方を大きく設定しておく必要があります。
用紙サイズを自由に指定するには，[geometry](/geometry/) パッケージを利用するのがよいでしょう。
プリアンブル設定で，例えば次のように用紙サイズを十分大きく縦長に指定してください（この際，jsarticle の [papersize オプションは外しておく必要がある](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/52463.html)点に注意してください）。

```
% LaTeX compiler: platex
% DVIware: dvipdfmx 
\documentclass[fleqn]{jsarticle}
\usepackage{amsmath,amssymb}
\usepackage[dvipdfmx]{graphicx,color}
\usepackage[dvipdfm,papersize={210mm,100cm},margin=5mm]{geometry}
\pagestyle{empty}
```

### LaTeX コンパイラや dvipdfmx に対してオプションを与えたい {#i15a2487}

- LaTeX コンパイラに対して --shell-escape オプションを与えたい
- dvipdfmx 実行時に -f ptex-ipaex.map のフォントマップ設定といったオプションを与えたい

のように，実行時にオプションを加えたい場合は，次のようにして可能です。

- GUI 版：LaTeX や dvipdfmx のパス設定において，次のようにオプションを付与する。
    - Mac 版
        - /path/to/platex --shell-escape
        - /path/to/dvipdfmx -f ptex-ipaex.map
    - Windows 版
        - C:/path/to/platex.exe --shell-escape
        - C:/path/to/dvipdfmx.exe -f ptex-ipaex.map
- CUI 版：--latex や --dvidriver オプションで --latex "platex --shell-escape" --dvidriver "dvipdfmx -f ptex-ipaex.map"
    のように指定する。

### 一度生成した画像から元の TeX ソースを復元して再編集したい {#l45f6f82}

TeX2img は，Windows 版でも Mac 版でも，画像生成の元となった LaTeX ソースを保持させることができます。
例えば Mac 版 TeX2img の場合，

```
環境設定＞コンパイル後処理＞生成ファイルからソースを復元できるようにする 
```

のチェックを入れると，生成した画像ファイルを TeX2img のウィンドウへドラッグ＆ドロップすることにより，元ソースが復元されます。

#### 技術的詳細 {#n7de51d4}

元ソースは，生成した画像ファイル本体に埋め込まれているのではなく，Windows 版では NTFS の [代替データストリーム (Alternative Data Stream)](http://d.hatena.ne.jp/abenori/20150225)，Mac 版では HFS+ の [拡張属性 (Extended Attributes)](http://news.mynavi.jp/column/osx/253/) の部分にソースコードの情報を埋め込んでいます。

例えば Mac のファイルシステム HFS+ の場合，1つのファイルに対し，

- データフォーク：通常のプログラムが読み取る内容。Finder や ls コマンドが表示するファイルサイズはこれのサイズ。
- 拡張属性：Finder で表示したときのアイコンや，Spotlight 検索用メタデータなど補足情報，拡張子による関連づけから外れたこのファイルだけの特別な関連づけ（Finder の「情報を見る」で設定できる）など，その他の情報を保持する領域。

という2種類の情報を保持しています。
拡張属性の側にソースを書き込むことで，そのファイル内容（データフォーク）はいじらず，PDF や PNG といったファイルのフォーマットを崩すことなくソースコードの情報を保持させるようになっています。
HFS+ のボリューム間でコピーをすると，そのソースの内容も引き継がれます。

なお，HFS+ の拡張属性付きファイルを，Mac により FAT32 や NTFS など他のファイルシステムにコピーすると，[Apple Dobule](https://ja.wikipedia.org/wiki/AppleSingle) の仕組みによって，

- hoge.png
- .\_hoge.png

のような2つのファイルに分裂します。
.\_hoge.png の側に拡張属性が保存されていますが，これは捨てても問題なく，hoge.png のみで通常の PNG ファイルとして成立します。

セキュリティ上の理由で，拡張属性への TeX ソース埋め込みを停止させたい場合，次の方法で停止させられます。

- GUI版：環境設定＞コンパイル後処理＞生成ファイルからソースを復元できるようにする のチェックを外す
- CUI版：--no-embed-source というオプションを付与する

#### PDFのアノテーション情報へのソース埋め込み {#bcf68ae2}

上で「元ソースは生成した画像ファイル本体に埋め込まれているのではなくファイルシステムの拡張属性に埋め込まれている」と述べましたが，PDF 出力の場合には，拡張属性だけではなく，PDF のアノテーション（注釈）情報にもソース情報が保存されます。これにより，Word や PowerPoint などに PDF 形式で画像を貼り込んだ後に，その画像を TeX2img へコピー＆ペーストまたはドラッグ＆ドロップすることで，ソースを復元することができます。

これも，ソース埋め込みを停止させたい場合は，上記手順で停止させられます。

#### Mac 版と Windows 版のソース情報の互換性 {#r4c0b370}

Mac版は HFS+ の拡張属性に，Windows 版は NTFS の代替データストリームにソース情報を保存しますので，基本的には両者に互換性はありません。ですが，次のような互換性は確保されています。

- PDF出力の場合，PDFのアノテーション（注釈）情報にもソース情報を保存します。これは Mac と Windows 間で互換性があります。よって，PDF出力の場合は，Mac ⇄ Windows のどちら方向にも埋め込みソースを維持してやりとりできます。
- Mac 版で HFS+ の拡張属性にソース情報を埋め込んだファイルを Windows の FAT32 や NTFS に移すと，.\_hoge.png のようなファイルが生成します。このファイルは普通ゴミファイル扱いされて削除される運命にあることが多いですが，これを削除せずに維持しておけば，Windows 版でこのファイルに書き込まれたソース情報を復元することができます。

### \input や \includegraphics で外部ファイルを取り込むには？ {#x6a493c8}

TeX2img は，GUI 画面で入力された TeX ソースを，作業用のテンポラリディレクトリで TeX ソースファイルとして具現化した上で，そこでコンパイル・画像化処理を行います。

また，外部ファイル入力機能で既存 TeX ソースを画像化する場合も，「一度テンポラリディレクトリにソースをコピーし，そこでコンパイル・画像化処理を行う」という動きをします。これは，ユーザの文書用ディレクトリを汚さないようにという配慮です。
TeX2img は画像化のためにいくつもの中間ファイルを生成しますので，作業用中間ファイルがユーザのディレクトリを汚してしまうのを防ぐための配慮です。

その結果，\input や \includegraphics などの外部ファイルのインポートは行いにくくなっていますが，それに対する対処法は次の3通りあります。

1. \input や \includegraphics する対象となるファイル一式を，相対パスを保った状態で作業用テンポラリディレクトリに事前にコピーしておけば，コンパイルに成功します。Mac版の場合，作業用テンポラリディレクトリは，環境設定→コンパイル後処理→Finderで作業フォルダを開く からアクセスできます。（コマンドラインならば環境変数 $TMPDIR が作業用のテンポラリディレクトリを指し示します。）
1. \input や \includegraphics の引数を全て絶対パスで指定しておけば，正しく参照できます。（ただし，そのようなソース入力はソースの可搬性を損ねるので，この対処はあまりとりたくないという状況が多いでしょう。）
1. Ver. 1.9.1 以降では，外部ファイル入力で画像化する際には，コンパイル時のロードパス(TEXINPUTS)に元ソースが存在するディレクトリを含めるようにしてあります。そのため，

    ```
    \input{hoge.tex}
    \includegraphics{hoge.pdf}
    ```

    のように，同一階層にあるものをファイル名のみで呼び出す形式であれば，通るようになっています。
    ただし，TeX2imgがコンパイルしているのはあくまで作業用テンポラリディレクトリ上に存在するソースですので，

    ```
    \input{./hoge.tex}
    \includegraphics{./sub/hoge.pdf}
    ```

    のような相対パス指定では，作業用テンポラリディレクトリを基準とした相対パスになってしまい，うまくゆきません。
    したがって，この 3. の対処は，「呼び出される全てのファイルがソースと同一階層にあり，かつ呼び出しがパス指定を含まないファイル名のみで行われている」という条件が満たされている場合にのみ有効です。

以上のように考えると，最も無難で確実な対処は 1. となるでしょう。

- [TeX2img のすゝめ：詳しい使い方（改訂版）](http://acetaminophen.hatenablog.com/entry/tex2img-gui)（「注意すべき重要な点」にこの件についての説明がある）

### Mac 版の補完機能 {#d1fec82c}

[TeXShop](/TeXShop/) がインストールされている場合，Mac 版 TeX2img では，次の2種類の補完機能が使えます。

1. オートコンプリート
1. esc キーまたは tab キーによるコマンド補完

#### オートコンプリート {#z05fe1ab}

「オートコンプリート」は，例えば

```
 { と入力した瞬間に，{} が入力されてカーソルが {} の間に来る
```

といった，瞬間発動する入力補完機能です。
この入力補完機能は，TeXShop の「キーバインド」機能と補完辞書を共有しています。

TeXShop のメニューの

```
ソース → キーバインド → キーバインドファイルの編集...
```

から補完辞書の内容を編集できます。

#### esc キーまたは tab キーによるコマンド補完 {#je5d870c}

「esc キーによるコマンド補完」は，例えば

```
\be と入力して esc キーを押すと \begin{ と補完される
```

といった，現在の入力の続きを補完する機能です。
これも，TeXShop と補完辞書を共有しています。

TeXShop のメニューの

```
ソース → コマンド補完 → 補完用語ファイルの編集...
```

から，補完辞書の編集ができます。
この辞書は，下から順に補完されます。
補完後のカーソルキーの位置は #INS# で指定します。
#RET

コマンド補完に用いるキーは，

```
環境設定 → 表示 → コマンド補完キー
```

で，esc / tab キーのいずれを使うか選択できます。

### \begin{itemize} に対して \end{itemize} を補完させるには？ {#y8cb8359}

- \begin{itemize} という文字の直後の位置にカーソルを置いた状態でコマンド補完キー（esc キーまたは tab キー）を押せば，\end{itemize} が補完されます。
- あるいは，

    ```
    編集 → 現在の環境を閉じる (Command + Control + C)
    ```

    を実行すると，現在開いている一番内側の環境を閉じる命令が挿入されます。

### CUI版でのデフォルト設定を変更したい {#b7a804d6}

#### Windows版 {#b0734917}

#### Mac版 {#z4823b47}

Mac 版 TeX2img の CUI 版で，例えば「常に --no-embed-source が効くようにしたい」という場合は，.bashrc などで，次のようにエイリアスを設定しておくのがよいでしょう。

```
alias tex2img="tex2img --no-embed-source"
```

相反するオプションが複数指定された場合は，最後に指定されたものが有効になりますので，上記のようなエイリアス設定がなされている場合，

- デフォルトでは --no-embed-source が有効となる。
- tex2img --embed-source とすれば --no-embed-source の効果が消されて --embed-source が有効になる。

となり，「デフォルトが --no-embed-source である」という挙動が実現できます。

### 複数の設定プロファイルを切り替えたい {#hf4c7016}

例えば

- Illustrator 貼り付け用にEPS出力（余白なし，ソース埋め込みなし，プリアンブルでの横幅指定は十分大）
- PowerPoint 貼り付け用に透過PNG出力（余白なし，ソース埋め込みあり，プリアンブルでの横幅指定は十分大）
- ブログ画像用に非透過PNG出力（余白10px，ソース埋め込みなし，プリアンブルでの横幅指定は30zw）

のように，用途ごとに設定を切り替えて使いたい場合の方法を紹介します。

#### Windows版（GUI版） {#a6f2a2b4}

#### Windows版（CUI版） {#zcbbab9c}

#### Mac版（GUI版） {#u5ffb4db}

ウィンドウ左下の「プロファイル」ボタンで，設定プロファイルを管理できます。

- 画像化の設定
- 出力ファイル名
- プリアンブル

といった，本文部以外の全設定を，名前を付けて保存・復元することができます。

#### Mac版（CUI版） {#i77b89d8}

.bashrc などで，好みの設定を次のようにエイリアスでコマンド化しておくとよいでしょう。

```
alias tex2img-ai="tex2img --no-embed-source"
alias tex2img-powerpoint="tex2img --embed-source --transparent"
alias tex2img-blog="tex2img --no-embed-source --no-transparent --left-margin 10 --right-margin 10 --top-margin 10 --bottom-margin 10 --unit px"
```

### Word や PowerPoint, Keynote に画像を貼り付けたいのですが… {#q983d536}

TeX2img ではベクター画像とビットマップ画像を出力できます。
大雑把には「拡大してもギザギザにならないのがベクター画像，ギザギザになるのがビットマップ画像」です。

- ベクター画像
    - アウトラインをとった EPS ファイル
    - アウトラインをとった PDF ファイル
    - テキストを保持した PDF ファイル
    - アウトラインをとった SVG ファイル
    - アウトラインをとった EMF ファイル（Windows 版のみ）
- ビットマップ画像
    - JPEG ファイル
    - PNG ファイル
    - BMP ファイル
    - TIFF ファイル
    - GIF ファイル

Mac では，Word や PowerPoint のウィンドウに向かって PDF ファイルをドラッグアンドドロップすれば画像を挿入できますので，ベクター形式の PDF ファイルが最適でしょう。
ビットマップ形式なら PNG ファイルが最適でしょう。

Windows では，Word や PowerPoint のウィンドウに向かって PDF/EPS ファイルをドラッグアンドドロップしても挿入できない場合が多いようです。
EPS ファイルについては，[Ghostscript](/Ghostscript/) のバージョンによって成功したり失敗したりします。
ベクター画像にしたい場合は，EMF ファイルに変換するのが最も確実です。
ビットマップ形式なら PNG ファイルが最適です。

- TeX2imgで作成したEPSファイルがWord2010で表示できない ([forum:1576](https://okumuralab.org/tex/mod/forum/discuss.php?d=1576))

また，Windows 版 TeX2img 1.5.5 および Mac 版 TeX2img 1.9.5 では「生成ファイルを自動的にクリップボードにコピーする機能」が設けられました。
複数の画像ファイルが一度に生成した場合は，そのすべてがコピーされます。
このうち Mac 版では，クリップボードに画像をコピーしても Office for Mac 2011 に画像を貼り付けられない（代わりにファイル名の文字列が貼り付いてしまう）という問題があります。
これは，Office for Mac 2011 が Finder で選択してコピーしたファイルの貼り付けに対応していないことによるものです。
Mac 版 TeX2img と Keynote や Office for Mac 2016 の組み合わせではこの問題は発生しません。
また，Windows 版と Office 2010/2013 の組み合わせではこの問題は発生しません。

### Illustrator や Inkscape で画像を編集したいのですが… {#h5ceaadb}

TeX2img はベクター画像について，文字をアウトライン化する機能を持っています。
[Illustrator](/Illustrator/) や [Inkscape](/Inkscape/) のようなベクター画像編集ツールに LaTeX の出力を取り込みたい場合，アウトラインをとった EPS ファイルに変換するのが安全です。
アウトライン化しておけば，フォントがインストールされていないという理由で文字化けするようなこともありません。
Mac 版は Illustrator に「配置」するという機能もあります。

### 設定画面の余白の単位の px と bp とは何？ {#qe56a6f3}

px はピクセル，bp は big point です。

- [日本人のための LaTeX タブー集 〜画像読込編〜](http://qiita.com/zr_tex8r/items/5413a29d5276acac3771)（bp の解説がある）

主に，px は JPEG/PNG/GIF/TIFF/BMP といったビットマップ画像出力，bp は EPS/PDF/SVG といったベクター画像出力に用います。
実際，ベクター画像出力の際には，この設定項目は無視され，常に bp 単位で出力されます。

一方，ビットマップ画像生成の際には px 単位が直観的で分かりやすいでしょうが，解像度レベル設定を変更したときに「図版本体に対する余白の割合」が変わってしまいます。
「図版本体と余白との比率」を一定に保って解像度レベル（出力画像の大きさ）を調整したい場合は，ビットマップ画像生成でも bp 単位を選択しておくとよいでしょう。
また，bp 単位を選択しておくと，同じ入力に対してベクター画像出力とビットマップ画像生成出力を併用したときに，両者で「図版本体と余白との比率」が一致します。

#### 技術的詳細 {#k7649bf2}

EPSやPDFにおけるバウンディングボックスの座標は，PostScript由来のbp (big point)単位の数値となっています。

PDFが100%の縮尺で印刷される際には，

```
1 bp = 1/72 in ≒ 0.3528mm 
```

となります。

ベクター画像(PDF / EPS / SVG)に余白を付与する場合は，bp単位で余白が付与されます。

ビットマップ画像(PNG / JPEG / GIF / TIFF / BMP)に余白を付与する場合は，余白単位設定が px か bp かで余白の付け方が異なります。

px 単位で余白を付ける場合，最終的なビットマップ出力に対し，px 単位で指定された余白が付けられます。

一方，ビットマップ画像出力で bp 単位での余白付与が指定された場合，

```
1 bp = (dpi値/72) px
```

で px に換算されて余白が付与されます。

### エンジン設定の「文字コード：指定しない」とは？ {#b98083ea}

ソースの文字コードを明示指定すると，--kanji=utf8 のようなオプションを LaTeX コンパイラに渡します。
しかし，pTeX 系 (pLaTeX, upLaTeX) 以外のエンジンを使っている場合，そもそも --kanji というオプションがありません。
そのような場合，ソースは UTF8 で作成し，--kanji なしでコンパイラに渡す必要があり，そうした場合に利用するのが「文字コード：指定しない」です。

ただし，最近の LaTeX エンジンの場合，（pTeX 系か否かを問わず）ソースの文字コードのデフォルトは UTF8 か自動推定されますから，通常は「文字コード：指定しない」にしておけば問題ないでしょう。

### 画像の横幅を常に一定にして出力したい {#s84b19a5}

一定の横幅を持つ \parbox を薄い線で囲ってやる命令 \whitebox を用意することによって，横幅一定の画像を出力することができます。

プリアンブル設定ウィンドウに

```
\documentclass[fleqn,dvipdfmx]{jsarticle}
\usepackage{amsmath,amssymb}
\usepackage{color}
\pagestyle{empty}
\definecolor{gray1}{gray}{0.99}
\newcommand{\whitebox}[2]{\fcolorbox{gray1}{white}{\parbox{#1}{#2}}}
```

と書き，本文（\begin{document} ... \end{document} の内部）に

```
\whitebox{20zw}{\centering $\displaystyle f(x)=\int_a^x g(t) \,dt$ }
```

と書くと，次のように出力されます。

一定幅の画像中に中央揃えで出力されています。ほとんど目には見えませんが，薄い枠線で囲っているわけです。

なお，上の例では中央揃えで出力するために \centering をつけてありますが，これを外せば左揃え，\hfill に変えれば右揃えにできます。

あるいは，

```
\documentclass[border=1pt]{standalone}
\pagestyle{empty}
\begin{document}
\begin{minipage}{10cm}
\abovedisplayskip=0pt
\[f(x)=\int_a^x g(t) \,dt\]
\end{minipage}
\end{document}
```

のような standalone クラスと minipage を用いたソースを，「元のページサイズを維持する」（環境設定→出力画像→共通設定）をONにして，pdfLaTeX でコンパイルするという手もあります。

### 数式画像生成だけのために TeX2img を使いたい {#m4a21526}

[上の項目](</TeX2img FAQ/#w3327c6d>)で述べたとおり，TeX2img は，[LaTeXiT](/LaTeXiT/) のような数式画像生成に特化したソフトウェアではなく，「<strong>あらゆる LaTeX 文書を画像化する</strong>」ことを想定して作られています。
しかし，「日本語はワープロやプレゼンソフトで書くから，数式だけ画像化してくれればいいんだ」という場合は，文書全体が \\\[ ... \\\] で囲まれるようにプリアンブルで設定しておくと，毎回 \\\[ ... \\\] で囲う必要がなくて便利かもしれません。

プリアンブル設定ウィンドウに

```
\documentclass[fleqn,papersize]{jsarticle}
\usepackage{amsmath,amssymb}
\usepackage[dvipdfmx]{graphicx,color}
\pagestyle{empty}
\makeatletter
\AtBeginDocument{\[}
\expandafter\def\expandafter\@enddocumenthook\expandafter{\expandafter\]\@enddocumenthook}
\makeatother
```

と書き，本文（\begin{document} ... \end{document} の内部）に例えば

```
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
```

のように書けば，本文全体が \\\[ ... \\\] で囲まれていることになり，そのまま入力すれば display math mode になります。
ただし，\\\[ ... \\\] 内に空行 (\par) は入れられませんので，空行を入れないように注意してください。
また，TeX2img はソースを保存する際に本文の末尾に必ず改行を入れる仕様になっていますので，入力したソースの末尾にもともと改行があるとこれも空行になってしまいます。
したがって，本文末尾に改行を入れないように注意してください。

#### 本文全体を自動的に \begin{align\*} ... \end{align\*} で囲む設定 {#oebb1cb6}

本文全体が自動的に \begin{align\*} ... \end{align\*} で囲まれるようにするには，もう少し工夫が必要です。
プリアンブル設定ウィンドウに

```
\documentclass[fleqn,papersize]{jsarticle}
\usepackage{amsmath,amssymb}
\usepackage[dvipdfmx]{graphicx,color}
\pagestyle{empty}

\makeatletter
\let\my@document\document

\def\encloseDocument#1{%
  \def\my@doc{document}%
  \def\my@memory{\my@document\begin{#1}}%
  \def\my@search##1\end##2{%
    \def\my@temp{##2}%
    \ifx\my@temp\my@doc
      \expandafter\def\expandafter\my@next\expandafter{\my@memory##1\end{#1}\end{document}}%
    \else
      \expandafter\def\expandafter\my@memory\expandafter{\my@memory##1\end{##2}}%
      \let\my@next\my@search
    \fi
    \my@next
  }%
  \let\document\my@search
}
\makeatother

% \begin{document} ... \end{document} の中身を \begin{align*} ... \end{align*} で囲む設定にする
\encloseDocument{align*}
```

と書き，本文（\begin{document} ... \end{document} の内部）に例えば

```
&\left\{
\begin{array}{l}
\sigma_0=\begin{pmatrix}
 1 && 0 \\
 0 && 1 \\
\end{pmatrix}\\[10pt]
\sigma_1=\begin{pmatrix}
 0 && 1 \\
 1 && 0 \\
\end{pmatrix}\\[10pt]
\sigma_2=\begin{pmatrix}
 0 && -i \\
 i && 0 \\
\end{pmatrix}\\[10pt]
\sigma_3=\begin{pmatrix}
 1 && 0 \\
 0 && -1 \\
\end{pmatrix}
\end{array}
\right.\\[5pt]
\Longrightarrow &
\left\{
\begin{array}{l}
\sigma_1^2=\sigma_2^2=\sigma_3^2=\sigma_0\\[3pt]
\sigma_1\sigma_2=i\sigma_3\\[3pt]
\sigma_2\sigma_3=i\sigma_1\\[3pt]
\sigma_3\sigma_1=i\sigma_2
\end{array}
\right.
```

のように書けば，本文全体が \begin{align\*} ... \end{align\*} で囲まれていることになり，そのまま入力すれば &amp; で位置揃えする複数行数式が使えます。

### 「文字情報」機能 (Mac版) {#f050e217}

1文字を選択して ウィンドウ→文字情報 (Command + Shift + I) または 右クリック→文字情報 を選ぶと，その文字の詳細情報（Unicode のコードポイント，Unicode Name）が表示されます。

2文字以上を選択した場合は，文字数・単語数・行数，および全文字のコードポイント一覧が表示されます。

- 「文字数」は，サロゲートペアや結合文字列・異体字セレクタ・絵文字セレクタなどにかかわらず，見た目の文字数をカウントします。
- 「単語数」は，英語スペルチェッカが認識する単語数です。和文文字のみからなる場合は英語スペルチェッカが認識しないため「0単語」と表示されます。
- 「行数」は，選択部分に含まれる改行コードの数+1 です。そのため，行末に改行が含まれる場合は直観に反することがあるかもしれません。

### 「Unicode 正規化」機能 (Mac版) {#g2379994}

文字列を選択して 編集→ Unicode 正規化 または 右クリック→ Unicode 正規化 を選ぶと，次の方式の Unicode 正規化を施し，正規化前後の文字列の変化を比較することができます。

- NFC
- [Modified NFC](http://d.hatena.ne.jp/NAOI/20100826/1282803857)
- NFD
- [Modified NFD](http://tama-san.com/hfsplus_normalize/)
- NFKC
- NFKD
- [NFKC Casefold](http://unicode.org/reports/tr31/)

## 既知の問題（未解決） {#ddfe3887}

### Windows 版で EMF ファイルを出力すると破線が消える {#w156ec2a}

これは EMF ファイルの出力に使用している pdfiumdraw という補助ツールの問題で，現在検証中です。

- [pdfiumdraw の EMF 出力検証](http://d.hatena.ne.jp/acetaminophen/20150606/1433606734)
- [EMFに振り回されている（2015年6月14日）](http://abenori.blogspot.jp/2015/06/emf-pdfium-fxwin32gdipext.html)
