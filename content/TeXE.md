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

TeXE は，Windows で動作する国産でフリーの簡易 TeX 専用エディタです．

主な特徴は以下の通りです．

- TeX コマンドの補完機能
- 予約語の色指定
- 文字コード変換機能
- onig.dll を用いた正規表現検索/置換機能
- SumatraPDF を使用すれば，SyncTeX による forward and inverse search も可能

TeraPad に TeX の色分け機能と補完機能を追加したような感じのエディタです．

- [ゆるゆるでいこう](http://www5.ocn.ne.jp/~fact/)
    - [Top](http://www5.ocn.ne.jp/~fact/top.html)
    - [Download](http://www5.ocn.ne.jp/~fact/download.html)
        - [更新履歴](http://www5.ocn.ne.jp/~fact/download/history.txt)
        - [簡易ヘルプテキスト](http://www5.ocn.ne.jp/~fact/download/help.txt)

## インストール {#pdbc335f}

ダウンロードしたファイルを適当な場所に解凍するだけでインストールは完了です．

- 注意事項
    - onig.dll は TeXE.exe と同じ階層においてください．(別途用意する場合)
    - .dat 等は TeXE.ini で場所を指定すれば移動，追加できます．

## アンインストール {#n704d221}

設定はすべて TeXE.ini と TeXE.color に保存してあるので，アンインストールは解凍したファイルと INI ファイル等を削除するだけです．

## 設定 {#jf6b3b60}

### 簡易自動設定 {#r526ef0b}

\[表示\]-\[環境オプション\]-\[TeX\] に簡易自動設定があります．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　環境オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　　編集/表示 \]\[　　ファイル \]\[　　メニュー \]\[　　色設定 \]\[　　入力支援 \]</ins></span><strong>\[　　TeX \]</strong><br>
　　　簡易自動設定　　　　　　　　　　　　　　　　　　<span style="color:Red;">自動設定機能が正常に機能しない場合は下を手動で設定してください。</span><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[　　開始　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[標準設定　　　　　　　▼\]</span><br>

***

開始すると自動設定してくれますが，\[BibTeX\] が jbibtex.exe， \[Dvi to Pdf\] が dvipdfm.exe になるので

- jbibtex.exe → pbibtex.exe
- dvipdfm.exe → dvipdfmx.exe

に変更します．

引数や Macro を入力する欄で，右クリックをするとパラメータの説明が表示されます．

引数のパラメータ<br>

- "%F"(ファイル名，フルパス)
- "%D"(DVIファイル名，フルパス)
- "%X"(拡張子なしファイル名，フルパス)
- "%f"(ファイル名のみ)
- "%x"(拡張子なしファイル名のみ)
- "%p"(開いているファイルのディレクトリ部分のみ)
- "%e"(TeXEの実行ディレクトリ)
- "%%"(% パーセント)
- "%c"(, カンマ)
- "%s"(選択中のテキスト)
- "%l"(カーソル位置の行番号)

Macroのパラメータ<br>

- "%F"(ファイル名，フルパス)
- "%D"(DVIファイル名，フルパス)
- "%X"(拡張子なしファイル名，フルパス)
- "%f"(ファイル名のみ)
- "%x"(拡張子なしファイル名のみ)
- "%p"(開いているファイルのディレクトリ部分のみ)
- "%%"(% パーセント)
- "%c"(, カンマ)
- "%n"(改行)
- "%l"(カーソル位置の行番号)

### 「自動処理(A)」での処理 {#j2fe5493}

> ☑MakeIndex<br>
> ☑BibTeX<br>
> ☑DVI to PDF<br>

#### 処理後 {#jc642b5a}

> ☑DVIを表示<br>
> ☐PDFを表示<br>

### 処理オプション {#p9e23bd1}

> ☐BATを作成し処理する[^1]<br>
> ☐出力をメッセージパネルへ[^2]<br>
> ☐処理前に古い処理を削除する[^3]<br>

> <span style="color:#888888;background-color:White;">☑削除前にバックアップを作成</span><br>

### PDFプレビュー(P) {#x40a9b88}

> ☐Dvi to Pdf処理後PDF表示<br>

### 不要なファイルの削除 {#u7968d10}

> ☐閉じる前に不要なファイルを削除する[^4]
>
> 拡張子
> : .toc|.idx|.bbl|.log|.lof|.ind|.blg|.aux|.aux.bbl|.aux.blg|.lot|.ilg
>

### TeX {#obbe32e3}

フルパス
: C:\w32tex\bin\platex.exe

引数
: -synctex=-1 -src-specials "%F"

### MakeIndex {#g6c29d8e}

フルパス
: C:\w32tex\bin\mendex.exe

引数
: "%X.idx"

### BibTeX {#j33abf74}

フルパス
: C:\w32tex\bin\pbibtex.exe

引数
: "%X"

### Dvi Viewer {#n4f1bf86}

#### dviout {#n0a40e5f}

フルパス
: C:\w32tex\dviout\dviout.exe

引数
: -1 "%D" "# %l %F"

DDE
: ☑DDEを使用する ← DDEを使用しない場合は，DDEを使用するのチェックをはずす

Service
: dviout

Topic
: dviout

Macro
: \[PageOpen(# %l %F)\]\[WinNormal\]\[FileOpen("%D")\]

#### SumatraPDF {#ff11f3ec}

DVI ファイルを表示する必要がない場合は，Dvi Viewer に SumatraPDF を設定して DVI ファイルのかわりに PDF ファイルを表示できます．

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
: \[ForwardSearch("%X.pdf","%F",%l,0,0,1)\]\[Open("%X.pdf",0,1,1)\]

### Dvi to Pdf {#w081339b}

フルパス
: C:\w32tex\bin\dvipdfmx.exe

引数
: "%D"

<span style="color:Red;">注意：それぞれのオプションは\[OK\]を押すまで適用されません(ただし\[再読込\]は即適用)</span><br>

<span style="color:Red;">\[OK\]を押すと適用と同時に設定がINIファイルに保存されます(時間がかかる場合があります)</span><br>

***

## 使い方 {#l6407046}

\[ツール(T)\]-\[TeX自動処理(A)\] で TeX ファイルをコンパイルして表示してくれます．

## SumatraPDF との連携 (inverse search) {#u9ba0f1e}

```
C:\texe022i\TeXE.exe /j%l "%f"
```

## dviout との連携 (inverse search) {#u0ce365d}

```
C:\texe022i\TeXE.exe^s /j%d "%s"
```

## 不具合 {#b8d5d357}

### 環境 (設定？) によって PDF ファイルが開けないことがある {#r3adc450}

\[ツール\]-\[PDFプレビュー\] で「PDFが開けませんでした」といったエラーメッセージが表示される場合があります．

このとき PDF ファイルはきちんと作成されていますが，プレビューができません．

この場合，一度 ini ファイルを削除してから設定をやり直すかもしくは \[表示\]-\[環境オプション\]-\[メニュー\] で

- 外部ツール

\[追加\]

- 追加/変更

表示名
: SumatraPDF

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

を \[適用\] することで \[ツール(T)\]-\[SumatraPDF\] もしくは \[ツール(T)\]-\[Adobe Reader\] から PDF ファイルを表示することが可能になります．

ショートカットキーを割り当てることも可能です．

コマンドやパスを入力する欄で，右クリックをするとパラメータの説明が表示されます．

コマンドのパラメータ<br>

- "%F"(ファイル名，フルパス)
- "%D"(DVIファイル名，フルパス)
- "%X"(拡張子なしファイル名，フルパス)
- "%f"(ファイル名のみ)
- "%x"(拡張子なしファイル名のみ)
- "%p"(開いているファイルのディレクトリ部分のみ)
- "%e"(TeXEの実行ディレクトリ)
- "%%"(% パーセント)
- "%c"(, カンマ)
- "%n"(改行)
- "%s"(選択中のテキスト)
- "%l"(カーソル位置の行番号)

パスのパラメータ<br>

- "%p"(開いているファイルのディレクトリ部分のみ)
- "%e"(TeXEの実行ディレクトリ)
- "%%"(% パーセント)
- "%c"(, カンマ)
- "%n"(改行)

[^1]: TeX等の終了監視を行わなくなり、動作が軽くなります。DDEは使用できません。
[^2]: DOSプロンプトのウィンドウが表示されなくなり、出力がメッセージパネルに表示されます。
[^3]: DVIとPDFファイルが対象
[^4]: TeXメニュー使用時のみ
