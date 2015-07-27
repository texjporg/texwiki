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

しばしば誤解されがちですが，TeX2img は数式画像生成に特化したツールではなく，日本語など地の文を含めて「あらゆる LaTeX 文書を画像に変換するツール」として作られています。
したがって，通常の LaTeX と同様に，数式用コマンドを使うには，$ ... $ や \\\[ ... \\\] ，\begin{align\*} ... \end{align\*} などの数式環境に入れる必要があります。

一見して画像が生成したように見えても，思うような出力にならない場合，TeX2img の設定で「少々のエラーは無視して画像化を強行する」が ON になっていることがあります。
この機能は「LaTeX によるタイプセットで多少の警告が出ていても，PDF ファイルが出来さえすれば，その先のステップに無理やり進む」というものですが，警告が出ている場合は往々にして期待とは異なる結果になります。

- 失敗例の解説：[TeX2img FAQ でも作ろうかなあ](http://d.hatena.ne.jp/acetaminophen/20150615/1434383196)

もし TeX2img を数式画像生成のためだけに使いたい場合は，[後の項目](</TeX2img FAQ/#m4a21526>)を参照してください。

### TeX2img が突然動かなくなった {#a402a767}

Windows 版 TeX2img がある日突然動かなくなるという現象が発生することがあります。

- 失敗例：[TeX2imgが画像ファイル生成してくれない現象発生してる](https://twitter.com/pavlov469/status/595438306181062656)

この場合，原因は「一時フォルダに拡張子が .tmp のファイルが大量にあること」であるかもしれません。
定期的に一時フォルダを掃除することをおすすめします。

- TeX2img for Windows 1.5.3 での対処：[GetTempFileNameで「ファイルがあります」](http://abenori.blogspot.jp/2015/05/gettempfilename.html)

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

### アウトライン化に失敗する（あるいは Ghostscript 実行中に Error: /VMerror in --.pushpdf14devicefilter-- と出る） {#lb8a48e0}

Ghostscript 9.14 以下では，ある種のソースで次のエラーが起こるようです。

```
Error: /VMerror in --.pushpdf14devicefilter-- 
GPL Ghostscript 9.10: Unrecoverable error, exit code 1
VM status: 3 4658400 5960088
Current allocation mode is local
```

これは，何らかの理由で Ghostscript が綺麗なアウトライン化に失敗し，細かい膨大なパスに分割されてしまうことによるものです。

同種のソースを Ghostscript 9.15 以上で処理すると，アウトライン化に失敗してビットマップ化してしまいます。

- 実例：[Ghostscript のこと(1)：アウトライン化の詳細](http://acetaminophen.hatenablog.com/entry/2014/10/16/110255)，[(2)：不具合？](http://acetaminophen.hatenablog.com/entry/2014/10/17/145447)

これは TeX2img のエラーではなく Ghostscript の問題なので，有効な対処法は現状ではありません。
Ghostscript の問題を回避するには

- Windows 版：オプションの［基本設定］で「低解像度での処理を行う」にチェックを入れ，［出力画像設定］で解像度を適宜調節
- Mac 版：環境設定の［変換ツール］で「速度優先モード」に切り替える

とすることが有効かもしれません。

## よくある質問・Tips {#ta8b7d06}

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

### 数式画像生成だけのために TeX2img を使いたい {#m4a21526}

[上の項目](</TeX2img FAQ/#w3327c6d>)で述べたとおり，TeX2img は「あらゆる LaTeX 文書を画像化する」ことを想定して作られています。
しかし，「日本語はワープロやプレゼンソフトで書くから，数式だけ画像化してくれればいいんだ」という場合は，文書全体が \\\[ ... \\\] で囲まれるようにプリアンブルで設定しておくと，毎回 \\\[ ... \\\] で囲う必要がなくて便利かもしれません。

プリアンブル設定ウィンドウに

```
\documentclass[fleqn,papersize]{jsarticle}
\usepackage{amsmath,amssymb}
\pagestyle{empty}
\makeatletter
\AtBeginDocument{\[}
\expandafter\expandafter\expandafter\def
\expandafter\expandafter\expandafter\@enddocumenthook
\expandafter\expandafter\expandafter{%
\expandafter\]\@enddocumenthook}
\makeatother
```

と書き，本文（\begin{document} ... \end{document} の内部）に例えば

```
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
```

のように書けば，本文全体が \\\[ ... \\\] で囲まれていることになり，そのまま入力すれば display math mode になります。
ただし，\\\[ ... \\\] 内に空行 (\par) は入れられませんので，空行を入れないように注意してください。

## 既知の問題（未解決） {#ddfe3887}

### EPS ファイルを出力すると，PostScript 言語が圧縮されていて読めない {#l3bf36cb}

Ghostscript 9.15 以降を利用している場合に，デフォルトでページ記述部分が圧縮されてバイナリになるために起こります。

- [Ghostscript の EPS バイナリ出力への対処](http://d.hatena.ne.jp/acetaminophen/20150514/1431625979)

### Windows 版で EMF ファイルを出力すると破線が消える {#w156ec2a}

これは EMF ファイルの出力に使用している pdfiumdraw という補助ツールの問題で，現在検証中です。

- [pdfiumdraw の EMF 出力検証](http://d.hatena.ne.jp/acetaminophen/20150606/1433606734)
- [EMFに振り回されている（2015年6月14日）](http://abenori.blogspot.jp/2015/06/emf-pdfium-fxwin32gdipext.html)
