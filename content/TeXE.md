---
title: "TeXE"
url: "/TeXE/"
date: 2010-05-14T05:30:11Z
pukiwiki: "TeXE"
---

# TeXE

## [TeXE](http://www5.ocn.ne.jp/~fact/) {#d1c324af}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### TeXE とは {#b019eb8f}

TeXE は 簡易 TeX 専用エディタです。

国産のフリーウェアです。

主な特徴は

- TeX コマンドの補完機能
- 予約語の色指定
- 文字コード変換機能
- onig.dll を用いた正規表現検索/置換機能

です。

公式サイトは
[ゆるゆるでいこう](http://www5.ocn.ne.jp/~fact/top.html)
です。

TeraPad に TeX の色分け機能と補完機能を追加したような感じのエディタです。

### インストール/アンインストール {#pdbc335f}

- インストール

> ダウンロードしたファイルを適当な場所に解凍するだけでインストールは完了です。

> 注意事項>

> ・onig.dll は TeXE.exe と同じ階層においてください。(別途用意する場合)

> ・.dat 等は TeXE.ini で場所を指定すれば移動、追加できます。

- アンインストール

> 設定はすべて TeXE.ini と TeXE.color に保存してあるので，アンインストールは解凍したファイルと INI ファイル等を削除するだけです。

### 設定 {#jf6b3b60}

\[表示\]-\[環境オプション\]-\[TeX\] に簡易自動設定があります。

開始すると自動設定してくれますが，
\[TeX\] が platex.exe， \[BibTeX\] が jbibtex.exe， \[Dvi to Pdf\] が dvipdfm.exe になるので

- platex.exe → eplatex.exe
- jbibtex.exe → pbibtex.exe
- dvipdfm.exe → dvipdfmx.exe

に変更します。

### 不具合 {#b8d5d357}

私の環境 (Windows Vista SP2 32bit, Adobe Reader 9.3.2) では，\[ツール\]-\[PDFプレビュー\] で「PDFが開けませんでした」といったエラーダイアログが出ます。

PDF ファイルはきちんと作成されていますが，プレビューができません。

TeXE のバージョンは 0.2.2.i です。(0.2.2 も試しましたがダメでした)

TeXE では PDF ビューアの設定項目が見あたらないのですが，もし PDF ファイルが表示できる方がいらっしゃったらここに環境や設定を書き込んでもらえるとありがたいです。
