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

TeXE は 国産でフリーの簡易 TeX 専用エディタです．

- [ゆるゆるでいこう](http://www5.ocn.ne.jp/~fact/)
    - [Top](http://www5.ocn.ne.jp/~fact/top.html)
    - [Download](http://www5.ocn.ne.jp/~fact/download.html)
        - [更新履歴](http://www5.ocn.ne.jp/~fact/download/history.txt)
        - [簡易ヘルプテキスト](http://www5.ocn.ne.jp/~fact/download/help.txt)

### 動作環境 {#g0bc153f}

Windows 8.1, 8, 7, Vista, XP

### ChangeLog {#acf4c7af}

[更新履歴](http://www5.ocn.ne.jp/~fact/download/history.txt)

### 特徴 {#x3489437}

- TeX コマンドの補完機能
- 予約語の色指定
- 文字コード変換機能
- onig.dll を用いた正規表現検索/置換機能
- SumatraPDF を使用すれば，SyncTeX による forward and inverse search も可能

## 設定 {#jf6b3b60}

### 簡易自動設定 {#r526ef0b}

\[表示\]-\[環境オプション\]-\[TeX\] に簡易自動設定があります．<br> <!--  --> <!-- - --  --> <!-- &color(Black,#ACDEFE){%%%　環境オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(Black,#CC3333){[　 &color(White){''✕''}; 　]}; %%%};&br; --> <!-- 　　&color(Black,#EEEEEE){%%%[　　編集/表示 ][　　ファイル ][　　メニュー ][　　色設定 ][　　入力支援 ]%%%};''[　　TeX ]''&br; --> <!-- 　　　簡易自動設定　　　　　　　　　　　　　　　　　　&color(Red){自動設定機能が正常に機能しない場合は下を手動で設定してください。};&br; --> <!-- 　　　&color(Black,#EEEEEE){[　　開始　　]};　&color(Black,#EEEEEE){[標準設定　　　　　　　▼]};&br; --> <!-- - --  --> <!--  -->
開始すると自動設定してくれますが<br>
\[TeX\] が platex.exe, \[BibTeX\] が jbibtex.exe, \[Dvi to Pdf\] が dvipdfm.exe になるので<br>

- platex.exe → uplatex.exe
- jbibtex.exe → upbibtex.exe
- dvipdfm.exe → dvipdfmx.exe

に変更します．<br>

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
: &nbsp;

: C:\w32tex\bin64\uplatex.exe

: C:\w32tex\bin\uplatex.exe

引数
: -no-guess-input-enc -kanji=utf8 -synctex=1 "%F"

### MakeIndex {#g6c29d8e}

フルパス
: &nbsp;

: C:\w32tex\bin64\makeindex.exe

: C:\w32tex\bin\makeindex.exe

引数
: "%X.idx"

### BibTeX {#j33abf74}

フルパス
: &nbsp;

: C:\w32tex\bin64\upbibtex.exe

: C:\w32tex\bin\upbibtex.exe

引数
: "%X"

### Dvi Viewer {#n4f1bf86}

#### SumatraPDF (SumatraPDF を前面に表示したい場合) {#ff11f3ec}

フルパス
: &nbsp;

: C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe

: C:\Program Files\SumatraPDF\SumatraPDF.exe

引数
: -reuse-instance "%X.pdf" -forward-search "%F" %l

DDE
: ☑DDEを使用する ← DDEを使用しない場合は，DDEを使用するのチェックをはずす

Service
: SUMATRA

Topic
: control

Macro
: \[ForwardSearch("%X.pdf","%F",%l,0,0,1)\]\[Open("%X.pdf",0,1,1)\]

#### SumatraPDF (SumatraPDF を前面に表示したくない場合) {#e7c044c0}

フルパス
: &nbsp;

: C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe

: C:\Program Files\SumatraPDF\SumatraPDF.exe

引数
: -reuse-instance "%X.pdf"

DDE
: ☑DDEを使用する

Service
: SUMATRA

Topic
: control

Macro
: \[ForwardSearch("%X.pdf","%F",%l,0,0,0)\]\[Open("%X.pdf",0,0,1)\]

### Dvi to Pdf {#w081339b}

フルパス
: &nbsp;

: C:\w32tex\bin64\dvipdfmx.exe

: C:\w32tex\bin\dvipdfmx.exe

引数
: "%D"

<span style="color:Red;">注意：それぞれのオプションは\[OK\]を押すまで適用されません(ただし\[再読込\]は即適用)</span><br>

<span style="color:Red;">\[OK\]を押すと適用と同時に設定がINIファイルに保存されます(時間がかかる場合があります)</span><br>

***

## 使い方 {#l6407046}

\[ツール(T)\]-\[TeX自動処理(A)\] で TeX ファイルをコンパイルして表示してくれます．

## SumatraPDF との連携 {#u9ba0f1e}

TeX の引数に -synctex=1 を追加します．

### forward search {#yeb65671}

forward search は Dvi Viewer の SumatraPDF を参照してください．

### inverse search {#zac0399b}

inverse search は SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に

```
C:\texe022i\TeXE.exe /j%l "%f"
```

## 外部ツール {#z2fa544a}

### 追加 {#r3adc450}

\[表示\]-\[環境オプション\]-\[メニュー\]

- 外部ツール

\[追加\]

- 追加/変更

表示名
: SumatraPDF

コマンド
: &nbsp;

: C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe -reuse-instance "%X.pdf" -forward-search "%F" %l

: C:\Program Files\SumatraPDF\SumatraPDF.exe -reuse-instance "%X.pdf" -forward-search "%F" %l

パス
: <br>

- 追加/変更

表示名
: TeXworks

コマンド
: C:\w32tex\share\texworks\TeXworks.exe "%X.pdf"

パス
: <br>

- 追加/変更

表示名
: Adobe Reader

コマンド
: &nbsp;

: C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe "%X.pdf"

: C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe "%X.pdf"

パス
: <br>

\[ツール(T)\]-\[SumatraPDF\] もしくは \[ツール(T)\]-\[TeXworks\] もしくは \[ツール(T)\]-\[Adobe Reader\] から PDF ファイルを表示できます．

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
