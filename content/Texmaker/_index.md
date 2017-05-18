---
title: "Texmaker"
url: "/Texmaker/"
date: 2013-06-02T22:55:35Z
bookCollapseSection: true
pukiwiki: "Texmaker"
---

# Texmaker

## [Texmaker](http://www.xm1math.net/texmaker/) {#x838d855}

Texmaker は，統合環境として使える LaTeX エディタです．
SyncTeX もサポートされています．
Texmaker のデフォルトの文字コードは UTF-8 です．

- [Texmaker (free cross-platform latex editor)](http://www.xm1math.net/texmaker/)
    - [User manual](http://www.xm1math.net/texmaker/doc.html)
- [Texmaker Project on Google Code Archive](https://code.google.com/archive/p/texmaker/)

***

***

### 動作環境 {#tf7debca}

Windows, macOS, Linux

### License {#l7d7100c}

GPLv2

### 派生版 {#n8123b82}

- [TeXstudio](/TeXstudio/)
- [bidiTeXmaker3](https://bitbucket.org/srazi/biditexmaker3)

## ダウンロード/インストール {#q69dea61}

[Texmaker (free cross-platform latex editor)](http://www.xm1math.net/texmaker/download.html)
から，Windows, macOS, Linux 用のバイナリおよびソースコードがダウンロードできます．

- Windows の場合は exe 形式のものをダウンロードして実行すればインストールされます．以下の記事も参考になります．
    - [DTP Tools: Texmakerのインストール](http://dtptools.blogspot.jp/2013/08/texmaker.html)
- macOS の場合は zip 形式のものをダウンロードして展開します．
- Linux の場合はパッケージ管理システムからインストールするのがよいです．パッケージ名は大抵 texmaker でしょう．

### 日本語化 {#k564e4ed}

Texmaker は英語でメニューなどが表示されますが，日本語化されたものも作成されています．

#### Texmaker 4.0.1 {#h11371e4}

- [TexmakerでTeX文書を書こう！](http://writingwithtexmaker.blogspot.jp/)
    - [日本語キットfor texmaker4.0.1](http://writingwithtexmaker.blogspot.jp/2013/04/texmaker40.html)
        - [texmaker_jp.qm4texmaker4.0.1_20130306.zip](https://box.yahoo.co.jp/guest/viewer?sid=box-l-eoqe3irxlbfhq6sxm5553ou5rm-1001&uniqid=5f8f02fe-2d42-4fc2-ac67-1f3501d2f74a&viewtype=detail)

## 不具合 {#h6093782}

- [Issues](https://code.google.com/archive/p/texmaker/issues)

### macOS の Texmaker で，文字コードが UTF-8 の場合に Backslash (U+005C) が入力できず 円記号 (U+00A5) になってしまうため自動補完機能が使えない {#u2a90df7}

macOS の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです ([Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt.io/browse/QTBUG-10543))．

Karabiner で Backslash が優先されるようにキーバインドを変更するとよいようです．

### かな漢字変換をする際に，文字と背景が黒く表示され，読めなくなる {#c698d89f}

Texmaker には，かな漢字変換をする際に変換候補の文字色とその背景色がともに「黒」となって読めなくなるという不具合があります．
OS やインプットメソッドフレームワークの種類などの違いでこの不具合が発生しない場合もあるようです．

Windows と Linux でかな漢字変換をする際に，文字と背景が黒く表示され，読めなくなる不具合が発生します．
macOS では発生しないようです．

#### Windows の場合 {#z3a8b3e4}

Windows の場合は Dark theme を選択することで回避できます．

#### Linux の場合 {#nd7d6ba8}

<strong>■ ibus を使用している場合</strong>

Arch Linux の ibus-kkc では特に問題なく日本語入力できています．

<strong>■ fcitx を使用している場合</strong>

fcitx の \[設定\] &gt; \[アドオン\] &gt; \[拡張を ON\] &gt; \[Fcitx XIM Frontend をダブルクリック\] で 「XIMで On The Spot スタイルを使う」 が OFF の場合は変換候補の場所に文字が表示されるので文字が確認できます．

<strong>■ uim を使用している場合</strong>

uim を使用している場合は背景が黒く表示されて読めなくなることがあるようです．

<!-- 以下の「修正方法」なるもので本当に解決するのならば，報告するべきでしょう． -->
<!-- たぶんわざわざ setFormat() しているものをコメントアウトするので何か副作用があるのだろうと -->
<!-- 思いますが． -->

<!-- ***修正方法 (Windows) [#e1ab5b1e] -->

<!-- Texmaker のソースコードを修正してビルドすれば日本語入力に関する不具合を回避できます． -->

<!-- -[[Poppler]] をインストールします． -->

<!-- -Texmaker のソースコードを修正してビルドします． -->

<!-- // $ curl -RLO http://www.xm1math.net/texmaker/texmaker-4.5.tar.bz2 -->
<!--  $ powershell -Command "& {Invoke-WebRequest -Uri 'http://www.xm1math.net/texmaker/texmaker-4.5.tar.bz2' -OutFile 'texmaker-4.5.tar.bz2'}" -->
<!--  $ tar xvf texmaker-4.5.tar.bz2 -->
<!--  $ cd texmaker-4.5 -->

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

<!-- -日本語のフォントが埋め込まれていない PDF ファイルが組み込みビューアで表示できることを確認します． -->

<!-- -C:\MinGW\bin と C:\Qt\Qt5.6.0\5.6\mingw492_32\bin に PATH を通せばエクスプローラーからダブルクリックして起動できるようになります． -->

### Linux 版の Texmaker で \section{ を入力した直後に日本語入力をしようとすると日本語入力が ON にならなかったり，正しいかな漢字変換ができなかったりすることがある {#i1222dd8}

Linux 版の Texmaker で \section{ を入力した直後に日本語入力をしようとすると日本語入力が ON にならなかったり，正しいかな漢字変換ができなかったりすることがあります．

fcitx-mozc では \section{ の直後で日本語入力が ON にならないことがあります．このとき，\section{ の直後で 「かんじ」 を 「漢字」 に変換しようとすると 「k暗示」 と変換されてしまいます．

ibus-kkc も同様に \section{ の直後では日本語入力が ON にならないことがあります．

これらの問題は，[TeXstudio](/TeXstudio/) を使用することで回避できます．

### コマンドの設定に使用するパラメータのパースの仕方に問題がある {#t0aace20}

% これが本当で困っているならばバグ報告するべきでは．ここに書いて終わりですか？

Texmaker はコマンドの設定に使用するパラメータのパースの仕方に問題があります．
[TeXstudio](/TeXstudio/) ではコマンドの設定に使用するパラメータが正しく処理されています．

Texmaker のマニュアルにはコマンドの設定に &#x25; という表示が必要になった場合に &#x25;&#x25; と記述すればよいとありますが，&#x25;&#x25; と記述しても期待したように処理されません．

例えば Windows 版の TeXstudio では Latexmk-upLaTeX-pdfdvi は以下の設定で動作します．

> latexmk.exe -e "$latex=q/uplatex &#x25;&#x25;O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/upbibtex &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/upmendex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent %

ところが Windows 版の Texmaker では上記の設定では動作せず以下のように &#x25;&#x25; を記述しない方法で設定する必要があります．

> ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/upmendex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"

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

- テキストエディタの機能を使う場合は，[メモ帳で UTF-8 に変換する](https://okumuralab.org/tex/mod/forum/discuss.php?d=496%23p2654)方法や[サクラエディタ](</サクラエディタ/>)などのテキストエディタを使う方法があります．
- コマンドラインからの場合，文字コード変換プログラムである [nkf](/nkf/) が利用できます．

## 組み込みの PDF ビューアに日本語を表示させる {#a258817b}

### macOS の場合 {#m8993d2f}

macOS の Texmaker で組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /Users/pascalbrachet/poppler64/share/poppler に配置します．
poppler-data は [Poppler の公式サイト](https://poppler.freedesktop.org/)から入手できます．
[TeXworks](/TeXworks/) をインストールしている場合は TeXworks に含まれている poppler-data を /Users/pascalbrachet/poppler64/share/poppler にコピーして使用することもできます．

poppler-data を配置する場所は strings と grep で調べることができます．

```
$ strings -a /Applications/texmaker.app/Contents/Frameworks/libpoppler.??.dylib | grep poppler
Unknown CID font collection, please report to poppler bugzilla.
/Users/pascalbrachet/poppler64/share/poppler
%Produced by poppler pdftops version: {0:s} (http://poppler.freedesktop.org)
```

この場合は /Users/pascalbrachet/poppler64/share/poppler が poppler-data を配置するディレクトリになります．

コマンドラインから poppler-data を /Users/pascalbrachet/poppler64/share/poppler に配置する場合は以下のように実行します．

```
$ brew install poppler
$ sudo mkdir -p /Users/pascalbrachet/poppler64/share
$ sudo ln -s /usr/local/share/poppler /Users/pascalbrachet/poppler64/share/poppler
```

または

```
$ cd ~
$ curl -kO https://poppler.freedesktop.org/poppler-data-0.4.7.tar.gz
$ tar xvf poppler-data-0.4.7.tar.gz
$ sudo mkdir -p /Users/pascalbrachet/poppler64/share/poppler
$ sudo cp -pR ~/poppler-data-0.4.7/* /Users/pascalbrachet/poppler64/share/poppler
```

***

```
/
└─Users/
    └─pascalbrachet/
        └─poppler64/
            └─share/
                └─poppler/
                    ├─cidToUnicode/
                    ├─cMap/
                    ├─nameToUnicode/
                    ├─unicodeMap/
                    ├─CMakeLists.txt
                    ├─COPYING
                    ├─COPYING.adobe
                    ├─COPYING.gpl2
                    ├─Makefile
                    └─README
```

***

## 組み込みの PDF ビューアで日本語を表示するために使用される代替フォント {#h2a20ebd}

### Windows の Texmaker の場合 {#h82370cc}

Texmaker の Windows 版は poppler-data が適切な位置に配置されており fontconfig も適切に設定されています．

```
C:.
└─Program Files (x86) または Program Files
    └─Texmaker
        ├─texmaker.exe
        └─share
            └─poppler
```

fontconfig を適切に設定すれば PDF ファイルに日本語のフォントが埋め込まれていなくても日本語を表示することが可能になります．
日本語のフォントを埋め込んでいない PDF ファイルを表示すると texmaker.exe と同じフォルダーに WINDOWSTEMPDIR_FONTCONFIG_CACHE フォルダーが作成され，日本語が表示されます．
なお，<strong>初回の表示ではフォントキャッシュを作成するため時間がかかり，応答なしの状態になってしまう</strong>かもしれませんが，作成されれば通常通り表示されるようになります．

```
C:.
└─Program Files (x86) または Program Files
    └─Texmaker
        ├─texmaker.exe
        └─WINDOWSTEMPDIR_FONTCONFIG_CACHE
```

PDF ビューアで表示される代替フォントは texmaker.exe と同じフォルダーに存在する etc\fonts\local.conf で設定されています．

```
C:.
└─Program Files (x86) または Program Files
    └─Texmaker
        ├─texmaker.exe
        └─etc
            └─fonts
                ├─conf.d
                ├─fonts.conf
                ├─fonts.dtd
                └─local.conf
```

Texmaker に含まれている fontconfig の設定では Ryumin-Light (明朝体) は MS Mincho，GothicBBB-Medium (ゴシック体) は MS Gothic で表示されます．

### Linux の Texmaker の場合 {#o71b53f0}

[代替フォントの設定](/Evince/#substitute) を参照して代替フォントの設定をします．

## 設定 {#e3cd1932}

% 以下の設定解説ページは読めるものではない．一から書き直しが必要．

[Texmaker/設定](</Texmaker/設定/>) を参照．

## 使い方 {#qb8bff72}

[Texmaker/使い方](</Texmaker/使い方/>) を参照．

<!-- *関連リンク [#n5a9b95f] -->

<!-- 適切な解説と一緒に置かれていないとゴミ情報にしかならない． -->
<!-- もちろん，リンクされていた記事がゴミという意味では全くないが，一旦消す． -->
