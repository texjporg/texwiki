---
title: "Texmaker"
url: "/Texmaker/"
date: 2013-06-02T22:55:35Z
bookCollapseSection: true
pukiwiki: "Texmaker"
---

# Texmaker

## [Texmaker](https://www.xm1math.net/texmaker/) {#x838d855}

Texmaker は，統合環境として使える LaTeX エディタです．
SyncTeX もサポートされています．
Texmaker のデフォルトの文字コードは UTF-8 です．

現在は Texmaker から開発がフォークし，機能の追加や不具合が修正された [TeXstudio](/TeXstudio/) もあります．ただし，使用感が Texmaker とは違う部分もあります．

- [Texmaker (free cross-platform latex editor)](https://www.xm1math.net/texmaker/)
    - [Texmaker : User manual](https://www.xm1math.net/texmaker/doc.html)

***

***

### 動作環境 {#tf7debca}

Windows, macOS, Linux

### License {#l7d7100c}

[GPLv2](https://fossies.org/linux/texmaker/COPYING)

### 派生版 {#n8123b82}

- [TeXstudio](/TeXstudio/)

### ダウンロード/インストール {#q69dea61}

[Texmaker (free cross-platform latex editor)](https://www.xm1math.net/texmaker/download.html)
から，Windows, macOS, Linux 用の 64-bit バイナリおよびソースコードがダウンロードできます．

#### Windows {#wc2183b7}

Windows の場合は msi 形式のファイルをダウンロードして実行すればインストールされます．

#### macOS {#g5bab958}

macOS の場合は dmg 形式のファイルをダウンロードして展開します．

Homebrew Cask でインストールすることもできます．

> [https://formulae.brew.sh/cask/texmaker](https://formulae.brew.sh/cask/texmaker)

```
brew install --cask texmaker
```

#### Linux {#d8deaab2}

Linux の場合はパッケージ管理システムからインストールするのがよいです．パッケージ名は大抵 texmaker でしょう．

### 日本語化 {#k564e4ed}

Texmaker はデフォルトでは英語でメニューが表示されますが，メニューを日本語化するためのファイルが作成されています．

#### Texmaker 5.0.2 {#h11371e4}

texmaker_jp.qm を texmaker.exe と同じフォルダーに置いて Texmaker を起動して
<ins>O</ins>ptions &gt; Interface Language &gt; jp を選択して Texmaker を再起動するとメニューが日本語化されます．

- [TexMaker で日本語文書を作成する環境を構築する](https://wiis.info/blog/how-to-write-japanese-documents-with-texmaker/#elementor-toc__heading-anchor-2)

## 不具合 {#h6093782}

### Windows の Texmaker でかな漢字変換をする際に，変換候補の文字と背景が黒く表示され，読めなくなる {#c698d89f}

Windows の Texmaker には，かな漢字変換をする際に変換候補の文字色とその背景色がともに「黒」となって読めなくなるという不具合があります．

<ins>O</ins>ptions &gt; Configure Texmaker &gt; Editor で Dark theme を選択することで回避できます．

<!-- 以下の「修正方法」なるもので本当に解決するのならば，報告するべきでしょう． -->
<!-- たぶんわざわざ setFormat() しているものをコメントアウトするので何か副作用があるのだろうと -->
<!-- 思いますが． -->

<!-- ***修正方法 [#e1ab5b1e] -->

<!-- Texmaker のソースコードを修正してビルドすれば日本語入力に関する不具合を回避できます． -->

<!-- -Texmaker のソースコードを修正してビルドします． -->

<!-- // $ curl -RLO http://www.xm1math.net/texmaker/texmaker-5.0.tar.bz2 -->
<!--  $ powershell -Command "& {Invoke-WebRequest -Uri 'http://www.xm1math.net/texmaker/texmaker-5.0.tar.bz2' -OutFile 'texmaker-5.0.tar.bz2'}" -->
<!--  $ tar xvf texmaker-5.0.tar.bz2 -->
<!--  $ cd texmaker-5.0 -->

<!-- Texmaker は texmaker.cpp に記述されている Texmaker::GeneralOptions() メソッドの中の -->
<!--  if (QColor::isValidColor(confDlg->ui.colortableWidget->item(3,1)->text())) colorStandard=QColor(confDlg->ui.colortableWidget->item(3,1)->text()); -->
<!-- という処理でテキストの色を設定しています． -->
<!-- デフォルトではテキストの色は黒です． -->
<!-- 日本語変換時にも，この色が適用され，文字の色が黒くなってしまうので [[latexhighlighter.cpp:https://bitbucket.org/srazi/biditexmaker3/src/tip/latexhighlighter.cpp]] の -->
<!--  setFormat( i, 1,ColorStandard); -->
<!-- と書かれている箇所を全て -->
<!--  //setFormat( i, 1,ColorStandard); -->
<!-- としてコメントアウトしてビルドすれば，日本語変換時に黒くなる現象を回避できます． -->

<!--  $ qmake texmaker.pro -->
<!--  $ make release -->
<!--  $ cd release -->
<!--  $ ./texmaker & -->

<!-- -かな漢字変換をする際に，文字が黒くならないことを確認します． -->

<!-- -C:\MinGW\bin と C:\Qt\Qt5.9.1\5.9.1\mingw53_32\bin に PATH を通せばエクスプローラーからダブルクリックして起動できるようになります． -->

### コマンドの設定に使用するパラメータのパースの仕方に問題があるため &#x25;&#x25; と &#x25; を同時に使用することができない {#t0aace20}

% これが本当で困っているならばバグ報告するべきでは．ここに書いて終わりですか？

Texmaker はコマンドの設定に使用するパラメータのパースの仕方に問題があります．
[TeXstudio](/TeXstudio/) ではコマンドの設定に使用するパラメータが正しく処理されています．

Texmaker のマニュアルにはコマンドの設定に &#x25; という表示が必要になった場合に &#x25;&#x25; と記述すればよいとありますが，&#x25;&#x25; を &#x25; よりも前に記述した場合は &#x25;&#x25; が &#x25; に変換されますが &#x25; が "basename" に変換されません．また，&#x25;&#x25; を &#x25; よりも後に記述した場合は &#x25;&#x25; は &#x25; に変換されずに "basename" が2回出力されてしまいます．

[https://fossies.org/linux/texmaker/texmaker.cpp#l_7703](https://fossies.org/linux/texmaker/texmaker.cpp#l_7703) によると Texmaker では

```
QRegExp rx2("(%+)");
capt="";
if (rx2.indexIn(commandline) != -1) capt=rx2.cap(1);
if (capt=="%") commandline.replace("%","\""+basename+"\"");
else if (capt=="%%") commandline.replace("%%","%");
```

と記述されており，最初に &#x25; にマッチした場合は &#x25; が "basename" に置き換えられて &#x25;&#x25; は &#x25; に変換されずに "basename" が2回出力され，最初に &#x25;&#x25; にマッチした場合は &#x25;&#x25; は &#x25; に変換されますが &#x25; は "basename" に変換されずに &#x25; のまま出力されるためこの処理方法ではファイル名 (&#x25;) と % の表記 (&#x25;&#x25;) は同時に使用することが困難であると考えられます．

[https://github.com/texstudio-org/texstudio/blob/master/src/buildmanager.cpp#L476](https://github.com/texstudio-org/texstudio/blob/master/src/buildmanager.cpp#L476) によると TeXstudio では

```
 	for (int i = 0; i < str.size(); i++) {
 		QString add;
 		if (str.at(i) == QChar('%')) {
 			if (str.at(i + 1) == QChar('%')) add = str.at(++i);
 			else add = "\"" + mainFile.completeBaseName() + "\"";
```

と記述されており，正規表現は使用せずに1文字ずつ文字列をチェックして &#x25;&#x25; であれば &#x25; を追加して &#x25; であれば "basename" を追加して文字列リストを作成するようです．

実例を挙げると例えば Windows 版の TeXstudio では Latexmk-upLaTeX は以下の設定で動作します．

> latexmk.exe -e "$latex=q/uplatex &#x25;&#x25;O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/bibtexu &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent %

ところが Windows 版の Texmaker では上記の設定では動作せず以下のように &#x25;&#x25; を記述しない方法で設定する必要があります．

> ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/bibtexu '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/upmendex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"

Ruby では

> 0x25.chr

Windows PowerShell では

> \[char\]0x25

で &#x25; を表示できます．
このようにして Ruby や Windows PowerShell を使用して表示したい文字を「数値→文字」の変換で表現して設定を記述すれば OK です．
Ruby, Windows PowerShell の他に バッチファイルやシェルスクリプトを使用しても OK です．

<!-- ↓何を言っているのか意味がわからないです．上の「不具合」をよくよく読んでようやくわかったけれども，いずれにしてもこの書き方だと伝わらないでしょう． -->

<!-- **Windows PowerShell を使用して設定を記述して実行すると Texmaker が応答しなくなることがある [#o6c242bd] -->

<!-- Windows PowerShell を使用して設定を記述して実行すると Texmaker が応答しなくなることがあります． -->
<!-- この場合は Ruby を使用して設定を記述してください． -->

## 文字コードの変換 {#y2f21c8a}

Texmaker で使用する文字コードはデフォルトでは UTF-8 です．
このため，Shift_JIS, ISO-2022-JP, EUC-JP の文字コードを使用しているファイルを開きたい場合は，事前にファイルの文字コードを UTF-8 に変換する必要があります．
文字コードの変換には，各種テキストエディタの機能を使う方法と，コマンドラインから変換プログラムを使う方法があります．

- テキストエディタの機能を使う場合は，[サクラエディタ](</サクラエディタ/>)などのテキストエディタを使う方法があります．
- コマンドラインからの場合，文字コード変換プログラムである [nkf](/nkf/) が利用できます．

## 設定 {#e3cd1932}

% 以下の設定解説ページは読めるものではない．一から書き直しが必要．

[Texmaker/設定](</Texmaker/設定/>) を参照．

## 使い方 {#qb8bff72}

[Texmaker/使い方](</Texmaker/使い方/>) を参照．

<!-- *関連リンク [#n5a9b95f] -->

<!-- 適切な解説と一緒に置かれていないとゴミ情報にしかならない． -->
<!-- もちろん，リンクされていた記事がゴミという意味では全くないが，一旦消す． -->
