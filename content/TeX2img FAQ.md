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

しばしば誤解されがちですが，TeX2img は数式画像生成ツールではなく「あらゆる LaTeX ソースを画像に変換するツール」です。
したがって，数式を画像化するには数式環境に入れる必要があります。

一見して画像が生成したように見えても，思うような出力にならない場合，TeX2img の設定で「少々のエラーは無視して画像化を強行する」が ON になっていることがあります。
この機能は「LaTeX によるタイプセットで多少の警告が出ていても，PDF ファイルが出来さえすれば，その先のステップに無理やり進む」というものですが，警告が出ている場合は往々にして期待とは異なる結果になります。

### Mac 版で ! Undefined control sequence. {#xb2c033d}

```
\UTF{????} と出る
```

pLaTeX を使う場合，通常は JIS 第一水準・第二水準の漢字までしか出力できませんが，otf パッケージを利用すると出力できます。
Mac 版ではこれを利用し，設定画面で「JIS X 0208 外の文字を \UTF{xxxx} に置換」を ON にしておくと，ユーザが入力した JIS 第一水準・第二水準を超える漢字を \UTF{????} に勝手に置換します。
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
Unknown device: eps2write
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
Error: /VMerror in --.pushpdf14devicefilter-- 
```

これは，何らかの理由で Ghostscript が綺麗なアウトライン化に失敗し，細かい膨大なパスに分割されてしまうことによるものです。

同種のソースを Ghostscript 9.15 以上で処理すると，アウトライン化に失敗してビットマップ化してしまいます。

- 実例：[Ghostscript のこと(1)：アウトライン化の詳細](http://acetaminophen.hatenablog.com/entry/2014/10/16/110255)，[(2)：不具合？](http://acetaminophen.hatenablog.com/entry/2014/10/17/145447)

これは TeX2img のエラーではなく Ghostscript の問題なので，有効な対処法は現状ではありません。
Ghostscript の問題を回避するには

- Windows 版：オプションの［基本設定］で「低解像度での処理を行う」にチェックを入れ，［出力画像設定］で解像度を適宜調節
- Mac 版：環境設定の［変換ツール］で「速度優先モード」に切り替える

とすることが有効かもしれません。

## よくある質問 {#ta8b7d06}

### Word や PowerPoint に画像を貼り付けたいのですが… {#q983d536}

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

### Illustrator や Inkscape で画像を編集したいのですが… {#h5ceaadb}

TeX2img はベクター画像について，文字をアウトライン化する機能を持っています。
[Illustrator](/Illustrator/) や [Inkscape](/Inkscape/) のようなベクター画像編集ツールに LaTeX の出力を取り込みたい場合，アウトラインをとった EPS ファイルに変換するのが安全です。
アウトライン化しておけば，フォントがインストールされていないという理由で文字化けするようなこともありません。
Mac 版は Illustrator に「配置」するという機能もあります。
