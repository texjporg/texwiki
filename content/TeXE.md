---
title: "TeXE"
url: "/TeXE/"
date: 2010-05-14T05:30:11Z
pukiwiki: "TeXE"
---

# TeXE

## [TeXE](http://www5.ocn.ne.jp/~fact/download.html) {#d1c324af}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## TeXE とは {#b019eb8f}

TeXE は，国産でフリーの簡易 TeX 専用エディタです．

主な特徴は以下の通りです．

- TeX コマンドの補完機能
- 予約語の色指定
- 文字コード変換機能
- onig.dll を用いた正規表現検索/置換機能

TeraPad に TeX の色分け機能と補完機能を追加したような感じのエディタです．

- [ゆるゆるでいこう](http://www5.ocn.ne.jp/~fact/)
    - [Top](http://www5.ocn.ne.jp/~fact/top.html)
    - [Download](http://www5.ocn.ne.jp/~fact/download.html)

## インストール {#pdbc335f}

ダウンロードしたファイルを適当な場所に解凍するだけでインストールは完了です．

- 注意事項
    - onig.dll は TeXE.exe と同じ階層においてください．(別途用意する場合)
    - .dat 等は TeXE.ini で場所を指定すれば移動，追加できます．

## アンインストール {#n704d221}

設定はすべて TeXE.ini と TeXE.color に保存してあるので，アンインストールは解凍したファイルと INI ファイル等を削除するだけです．

## 設定 {#jf6b3b60}

\[表示\]-\[環境オプション\]-\[TeX\] に簡易自動設定があります．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　環境オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　　編集/表示 \]\[　　ファイル \]\[　　メニュー \]\[　　色設定 \]\[　　入力支援 \]</ins></span><strong>\[　　TeX \]</strong><br>
　　　簡易自動設定　　　　　　　　　　　　　　　　　　<span style="color:Red;">自動設定機能が正常に機能しない場合は下を手動で設定してください。</span><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[　　開始　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[標準設定　　　　　　　▼\]</span><br>

***

開始すると自動設定してくれますが，
\[TeX\] が platex.exe， \[BibTeX\] が jbibtex.exe， \[Dvi to Pdf\] が dvipdfm.exe になるので

- platex.exe → eplatex.exe
- jbibtex.exe → pbibtex.exe
- dvipdfm.exe → dvipdfmx.exe

に変更します．

***

- 「自動処理(A)」での処理

> ☑MakeIndex<br>
> ☑BibTeX<br>
> ☑DVI to PDF<br>

- 処理後

> ☑DVIを表示<br>
> ☐PDFを表示<br>

- TeX

フルパス
: C:\w32tex\bin\eplatex.exe

引数
: -kanji=sjis -synctex=-1 -src-specials "%F"

- MakeIndex

フルパス
: C:\w32tex\bin\mendex.exe

引数
: -S "%X.idx"

- BibTeX

フルパス
: C:\w32tex\bin\pbibtex.exe

引数
: -kanji=sjis "%X"

- Dvi Viewer

フルパス
: C:\w32tex\dviout\dviout.exe

引数
: -1 "%D"

DDE
: ☑DDEを使用する ← DDEを使用しない場合は，DDEを使用するのチェックをはずす

Service
: dviout

Topic
: dviout

Macro
: \[WinNormal\]\[FileOpen("%D")\]

- Dvi to Pdf

フルパス
: C:\w32tex\bin\dvipdfmx.exe

引数
: "%D"

<span style="color:Red;">注意：それぞれのオプションは\[OK\]を押すまで適用されません(ただし\[再読込\]は即適用)</span><br>

<span style="color:Red;">\[OK\]を押すと適用と同時に設定がINIファイルに保存されます(時間がかかる場合があります)</span><br>

***

## 使い方 {#l6407046}

\[ツール(T)\]-\[TeX自動処理(A)\] で TeX ファイルをコンパイルして表示してくれます．

## 不具合 {#b8d5d357}

### PDF ファイルが開けない {#r3adc450}

\[ツール\]-\[PDFプレビュー\] で「PDFが開けませんでした」といったエラーダイアログが出ます．

PDF ファイルはきちんと作成されていますが，プレビューができません．

この場合，\[表示\]-\[環境オプション\]-\[メニュー\] で

- 外部ツール

\[追加\]

- 追加/変更

表示名
: Sumatra PDF

コマンド
: C:\Program Files\SumatraPDF\SumatraPDF.exe -reuse-instance "%X.pdf"

パス
: <br>

- 追加/変更

表示名
: Adobe Reader

コマンド
: C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe "%X.pdf"

パス
: <br>

を \[適用\] することで \[ツール(T)\]-\[Sumatra PDF\] もしくは \[ツール(T)\]-\[Adobe Reader\] から PDF ファイルを表示することが可能になります．

ショートカットキーを割り当てることも可能です．

DVI ファイルを表示する必要がない場合は，\[表示\]-\[環境オプション\]-\[TeX\] の Dvi Viewer に Sumatra PDF もしくは Adobe Reader を設定して PDF ファイルを表示できます．

Adobe Reader の場合は手動で閉じる必要があるので，Sumatra PDF がおすすめです．

#### Sumatra PDF の場合 {#j65e2eb0}

- Dvi Viewer

フルパス
: C:\Program Files\SumatraPDF\SumatraPDF.exe

引数
: -reuse-instance "%X.pdf"

DDE
: ☑DDEを使用する ← DDEを使用しない場合は，DDEを使用するのチェックをはずす

Service
: SUMATRA

Topic
: control

Macro
: \[Open("%X.pdf",0,1,1)\]\[ForwardSearch("%X.pdf","%F",%l,0)\]

#### Adobe Reader の場合 {#ke2a1b29}

- Dvi Viewer

フルパス
: C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe

引数
: "%X.pdf"

DDE
: ☑DDEを使用する ← DDEを使用しない場合は，DDEを使用するのチェックをはずす

Service
: acroviewR10

Topic
: control

Macro
: \[DocOpen("%X.pdf")\]\[FileOpen("%X.pdf")\]
