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

Windows, OS X, Linux

### License {#l7d7100c}

GPLv2

### リリース情報/ChangeLog {#g3ccd7ae}

[ChangeLog](http://www.xm1math.net/texmaker/log.html)

### 派生版 {#n8123b82}

- [TeXstudio](/TeXstudio/)
- [bidiTeXmaker3](https://bitbucket.org/srazi/biditexmaker3)

## ダウンロード/インストール {#q69dea61}

Texmaker/インストール を参照．

## 不具合 {#h6093782}

- [Issues](https://code.google.com/archive/p/texmaker/issues)

### OS X の Texmaker で，文字コードが UTF-8 の場合に Backslash (U+005C) が入力できず 円記号 (U+00A5) になってしまうため自動補完機能が使えない {#u2a90df7}

<!-- -[[Issue 104:	Apple JIS keyword issue:https://code.google.com/p/texmaker/issues/detail?id=104]] -->
<!-- -[[ただし，''MacOSX SnowLeopardの環境では，半角のバックスラッシュが入力できず，半角の￥になってしまうという問題があります．''もっとも原始的な(笑)コピペよりもう少しましな方法として，次のようにすることでとりあえず回避できます．&br;▷ ことえりの「環境設定」の「入力文字」の「JISキーボードの￥キーで入力する文字」を「バックスラッシュ」に設定&br;▷ ことえりの辞書に「読み：半角バックスラッシュ→単語：半角バックスラッシュ」として登録&br;▷ ひらがな（全角入力）モードで「￥」キーを入力&br;変換確定のためreturnキーを一度叩く必要はあるものの入力は可能です．ただし''必ず全角入力モードでないとだめ''です．半角英数モードだと，当然ながら半角の￥マークになります．とりあえず，対処療法ですが，目的は達成できます（笑）．ただその弊害として全角の￥記号が打てなくなりますが，こちらは「option+Y」で入力できます．:http://www.sip-ac.jp/sip/tex02.html]] -->

OS X の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです ([Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt.io/browse/QTBUG-10543))．

Karabiner で Backslash が優先されるようにキーバインドを変更するといいようです．

### かな漢字変換をする際に，文字と背景が黒く表示され，読めなくなる {#c698d89f}

Texmaker には，かな漢字変換をする際に変換候補の文字色とその背景色がともに「黒」となって読めなくなるという不具合があります．
OS やインプットメソッドフレームワークの種類などの違いでこの不具合が発生しない場合もあるようです．

Windows と Linux でかな漢字変換をする際に，文字と背景が黒く表示され，読めなくなる不具合が発生します．
OS X では発生しないようです．

#### Windows の場合 {#z3a8b3e4}

Windows の場合は Dark theme を選択することで回避できます．
Dark theme を選択しても読めない場合は 派生版の [TeXstudio](/TeXstudio/) を使用してください．

<!-- - --  -->
<!-- &color(#9BC527,#9BC527){%%%　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(Black){''Texmaker の設定''};　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(#9BC527,#9BC527){%%%[ &color(Black){''？''}; ]%%%};&color(#DD4444,#DD4444){%%%[　&color(White){''×''};　]%%%};%%%};&br; -->
<!--  -->
<!-- #ref(https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png,left,around,nolink,コマンド) -->
<!-- &color(Black,#F5F5F5){エディタ};&br; -->
<!-- &color(Black,#F5F5F5){フォント名 　　　　　　　　　　　　　　　　　　　　};%%%メイリオ　　　　　　　　　　　''ᐯ''%%%&color(Black,#F5F5F5){　☑ ワードラップ};&br; -->
<!-- &color(Black,#F5F5F5){サイズ 　　　　　　　　　　　　　　　　　　　　　　};%%%12　　　　　　　　　　　　　 [''⇕'']%%%&color(Black,#F5F5F5){　☑ 補完};&br; -->
<!-- &color(Black,#F5F5F5){文字コード　　　　　　　　　　　　　　　　　　　　};&color(Black,#EEEEEE){%%%[UTF-8　　　　　　　　　　　▼]%%%};&color(Black,#F5F5F5){　☑ 行番号の表示};&br; -->
<!-- 　　　　　''コマンド''　　　　 &color(Black,#F5F5F5){☐ 外部からの変更をチェックする　　　　　　　　　　　　　　　　　　　　　　　　 ☑ 10 分ごとにバックアップをとる};&br; -->
<!-- #img(,clear) -->
<!-- #ref(https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png,left,around,nolink,クイックビルド) -->
<!-- &color(Black,#F5F5F5){スペルチェック辞書　};%%%C:/texmakerwin32usb/en_US.dic　　　　　　　　　　　　　　　　%%%&color(Black,#F5F5F5){　　　　&color(black,yellow){''☐ インライン ← 日本語の文書を作成する場合はチェックをはずす''};};&br; -->
<!-- &color(Black,#F5F5F5){タブ幅 (スペースの数) };%%%4　　[''⇕'']%%%&color(Black,#F5F5F5){　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ タブをスペースで置き換える};&br; -->
<!-- &color(Black,#F5F5F5){色};&br; -->
<!-- &br; -->
<!-- 　　　''クイックビルド''&br; -->
<!-- #img(,clear) -->
<!-- #ref(https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png,left,around,nolink,エディタ) -->
<!-- &br; -->
<!-- &br; -->
<!-- &br; -->
<!-- &br; -->
<!-- 　　&color(Black,#DAEAFF){　　　''エディタ''　　　};&br; -->
<!-- #img(,clear) -->
<!-- #ref(https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png,left,around,nolink,ショートカット) -->
<!-- > -->
<!-- >> -->
<!-- >>> -->
<!-- :| -->
<!-- > -->
<!-- >> -->
<!-- >>> -->
<!-- ::| -->
<!-- > -->
<!-- |COLOR(#555):Background|#ffffff　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　| -->
<!-- |COLOR(#555):Current line|#ececec| -->
<!-- |COLOR(#555):Highlighted line|#ff0000| -->
<!-- |COLOR(#555):Text|#000000| -->
<!-- |COLOR(#555):Comment|#606060| -->
<!-- |COLOR(#555):Math|#008000| -->
<!-- |COLOR(#555):...|...| -->
<!-- < -->

<!-- 　　　　　　　　　　　　　　 &color(Black,#EEEEEE){[ 　　　　　 ダークテーマ 　　　　　 ]};&color(black,yellow){''← かな漢字変換をする際に，文字と背景が黒く表示され，読めなくなる場合は Dark theme を選択する''};&br; -->
<!-- 　　　　　　　　　　　　　　 &color(Black,#EEEEEE){[　　　　デフォルトのテーマ　　　　]};&br; -->
<!-- #img(,clear) -->
<!-- 　　　　　　　　　　　　　　 &color(Black,#F5F5F5){Svn};&br; -->
<!-- 　　　　　　　　　　　　　　 &color(Black,#F5F5F5){☐ Detect uncommitted lines at the opening};&br; -->
<!-- 　　　　　　　　　　　　　　 &color(Black,#F5F5F5){Path to the svn command};&br; -->
<!-- &br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(Black,#EEEEEE){[　　　OK　　　]};　&color(Black,#EEEEEE){[ キャンセル ]};&br; -->
<!-- - --  -->

#### Linux の場合 {#nd7d6ba8}

<strong>■ ibus を使用している場合</strong>

Arch Linux の ibus-kkc では特に問題なく日本語入力できています．

<strong>■ fcitx を使用している場合</strong>

fcitx の \[設定\] &gt; \[アドオン\] &gt; \[拡張を ON\] &gt; \[Fcitx XIM Frontend をダブルクリック\] で 「XIMで On The Spot スタイルを使う」 が OFF の場合は変換候補の場所に文字が表示されるので文字が確認できます．

<strong>■ uim を使用している場合</strong>

uim を使用している場合は背景が黒く表示されて読めなくなることがあるようです．

<!-- バージョン 1.3 の公式バイナリではこの不具合は発生しませんが，1.3 のソースを Qt 4.7.2 でビルドしてみるとこの不具合が発生します． -->
<!-- また，同じく Qt を使用している [[TeXworks でもハイライトに関する不具合が存在する>TeXworks#s5bfc44e]]ので，もしかすると Qt の不具合 (仕様？) かもしれません． -->

#### 修正方法 (Windows) {#e1ab5b1e}

Texmaker のソースコードを修正してビルドすれば日本語入力に関する不具合を回避できます．

- [Poppler](/Poppler/) をインストールします．

- Texmaker のソースコードを修正してビルドします．

<!-- $ curl -RLO http://www.xm1math.net/texmaker/texmaker-4.5.tar.bz2 -->

```
$ powershell -Command "& {Invoke-WebRequest -Uri 'http://www.xm1math.net/texmaker/texmaker-4.5.tar.bz2' -OutFile 'texmaker-4.5.tar.bz2'}"
$ tar xvf texmaker-4.5.tar.bz2
$ cd texmaker-4.5
```

Texmaker は texmaker.cpp に記述されている Texmaker::GeneralOptions() メソッドの中の

```
if (QColor::isValidColor(confDlg->ui.colortableWidget->item(3,1)->text())) colorStandard=QColor(confDlg->ui.colortableWidget->item(3,1)->text());
```

という処理でテキストの色を設定しています．
デフォルトではテキストの色は黒です．
日本語変換時にも，この色が適用され，文字の色が黒くなってしまうので [latexhighlighter.cpp](https://bitbucket.org/srazi/biditexmaker3/src/tip/latexhighlighter.cpp) の

```
setFormat( i, 1,ColorStandard);
```

と書かれている箇所を全て

```
//setFormat( i, 1,ColorStandard);
```

としてコメントアウトしてビルドすれば，日本語変換時に黒くなる現象を回避できます．

```
$ qmake texmaker.pro
$ make release
$ cd release
$ ./texmaker &
```

- かな漢字変換をする際に，文字が黒くならないことを確認します．

- 日本語のフォントが埋め込まれていない PDF ファイルが組み込みビューアで表示できることを確認します．

- このままの状態ではエクスプローラーからダブルクリックして起動する場合に dll が見つからないといったエラーメッセージが表示されるので，Texmaker の実行に必要なライブラリ (DLL ファイル) の確認をします．
    objdump の他に [Dependency Walker](http://www.dependencywalker.com/) ([Dependency Walker 日本語化パッチ](http://blog.livedoor.jp/blackwingcat/archives/1000078.html)) を使って確認することも可能です．

```
$ objdump -p texmaker.exe | grep -i -E "\.dll" | sort | uniq
        DLL Name: KERNEL32.dll
        DLL Name: Qt5Core.dll
        DLL Name: Qt5Gui.dll
        DLL Name: Qt5Network.dll
        DLL Name: Qt5PrintSupport.dll
        DLL Name: Qt5WebKitWidgets.dll
        DLL Name: Qt5Widgets.dll
        DLL Name: Qt5Xml.dll
        DLL Name: libgcc_s_dw2-1.dll
        DLL Name: libpoppler.dll
        DLL Name: libstdc++-6.dll
        DLL Name: msvcrt.dll
        DLL Name: zlib1.dll
```

```
$ objdump -p /mingw/bin/libpoppler.dll | grep "DLL Name" | sort | uniq
        DLL Name: ADVAPI32.DLL
        DLL Name: GDI32.dll
        DLL Name: KERNEL32.dll
        DLL Name: USER32.dll
        DLL Name: libcurl-4.dll
        DLL Name: libfontconfig-1.dll
        DLL Name: libfreetype-6.dll
        DLL Name: libgcc_s_dw2-1.dll
        DLL Name: libjpeg-9.dll
        DLL Name: liblcms2-2.dll
        DLL Name: libopenjp2.dll
        DLL Name: libpng16-16.dll
        DLL Name: libstdc++-6.dll
        DLL Name: libtiff-5.dll
        DLL Name: msvcrt.dll
        DLL Name: zlib1.dll
```

```
$ objdump -p /mingw/bin/libfontconfig-1.dll | grep "DLL Name" | sort | uniq
        DLL Name: KERNEL32.dll
        DLL Name: libfreetype-6.dll
        DLL Name: libxml2-2.dll
        DLL Name: msvcrt.dll
```

```
$ objdump -p /mingw/bin/libxml2-2.dll | grep "DLL Name" | sort | uniq
        DLL Name: KERNEL32.dll
        DLL Name: WS2_32.dll
        DLL Name: libiconv-2.dll
        DLL Name: liblzma-5.dll
        DLL Name: msvcrt.dll
        DLL Name: zlib1.dll
```

- C:\MinGW\bin と C:\Qt\Qt5.6.0\5.6\mingw492_32\bin に PATH を通せばエクスプローラーからダブルクリックして起動できるようになります．

### Linux 版の Texmaker で \section{ を入力した直後に日本語入力をしようとすると日本語入力が ON にならなかったり，正しいかな漢字変換ができなかったりすることがある {#i1222dd8}

Linux 版の Texmaker で \section{ を入力した直後に日本語入力をしようとすると日本語入力が ON にならなかったり，正しいかな漢字変換ができなかったりすることがあります．

fcitx-mozc では \section{ の直後で日本語入力が ON にならないことがあります．このとき，\section{ の直後で 「かんじ」 を 「漢字」 に変換しようとすると 「k暗示」 と変換されてしまいます．

ibus-kkc も同様に \section{ の直後では日本語入力が ON にならないことがあります．

これらの問題は，[TeXstudio](/TeXstudio/) を使用することで回避できます．

### コマンドの設定に使用するパラメータのパースの仕方に問題がある {#t0aace20}

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

### Windows PowerShell を使用して設定を記述して実行すると Texmaker が応答しなくなることがある {#o6c242bd}

Windows PowerShell を使用して設定を記述して実行すると Texmaker が応答しなくなることがあります．
この場合は Ruby を使用して設定を記述してください．

## 文字コードの変換 {#y2f21c8a}

Texmaker で使用する文字コードはデフォルトでは UTF-8 です．
このため，Shift_JIS, ISO-2022-JP, EUC-JP の文字コードを使用しているファイルを開きたい場合は，事前にファイルの文字コードを UTF-8 に変換する必要があります．
文字コードの変換には，各種テキストエディタの機能を使う方法と，コマンドラインから変換プログラムを使う方法があります．

- テキストエディタの機能を使う場合は，[メモ帳で UTF-8 に変換する](https://okumuralab.org/tex/mod/forum/discuss.php?d=496%23p2654)方法や[サクラエディタ](</サクラエディタ/>)などのテキストエディタを使う方法があります．
- コマンドラインからの場合，文字コード変換プログラムである [nkf](/nkf/) が利用できます．

## 組み込みの PDF ビューアに日本語を表示させる {#a258817b}

### OS X の場合 {#m8993d2f}

OS X の Texmaker で組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /Users/pascalbrachet/poppler64/share/poppler に配置します．
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

[Texmaker/設定](</Texmaker/設定/>) を参照．

## 使い方 {#qb8bff72}

[Texmaker/使い方](</Texmaker/使い方/>) を参照．

## 関連リンク {#n5a9b95f}

- [http://fossies.org/dox/texmaker/](http://fossies.org/dox/texmaker/)
- [Newest &#39;texmaker&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/texmaker)
    - [Forward/inverse search for Texmaker on OS X](http://tex.stackexchange.com/questions/9904/forward-inverse-search-for-texmaker-on-os-x)
    - [Configure forward search with Texmaker + SumatraPDF](http://tex.stackexchange.com/questions/37327/configure-forward-search-with-texmaker-sumatrapdf)
- [http://research.informagic.org/latex-tweaks](http://research.informagic.org/latex-tweaks)
- [Windows + TeX Live + Texmaker 環境で自動インデント](http://blog.livedoor.jp/user5/archives/42208915.html)
- [Mac OS X MarvericksへのTeX環境のインストール](http://qiita.com/lethe2211/items/4faf76cb498a37a43312)
- [How to US-English spell checking in Texmaker (Texmakerのスペルチェックを米語にする)](https://gist.github.com/tos-kamiya/1c091f80be9c7e98f70c)
- [Texmakerにスペルチェックを追加する](http://sweettips.take-uma.net/latex/texmaker%E3%81%AB%E3%82%B9%E3%83%9A%E3%83%AB%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)
- [MacTeX 2014+texmaker+GhostView の環境で日本語PDFを作成する方法](http://qiita.com/mmurasawa/items/25a88b0c5548c96f6196)
- [LyX、TeXstudio、Texmakerを少しだけ試用](http://blawat2015.no-ip.com/~mieki256/diary/201409211.html)
- [http://linuxg.net/how-to-install-texmaker-4-1-on-ubuntu-13-10-13-04-12-10-12-04-linux-mint-16-15-14-13-pear-os-8-7-elementary-os-0-2-debian-wheezy-and-kwheezy/](http://linuxg.net/how-to-install-texmaker-4-1-on-ubuntu-13-10-13-04-12-10-12-04-linux-mint-16-15-14-13-pear-os-8-7-elementary-os-0-2-debian-wheezy-and-kwheezy/)
- [Texmakerのインストール](http://dtptools.blogspot.jp/2013/08/texmaker.html)
- [GateKeeperに引っかかった時の対処(OS X)](http://hnsn1202.hateblo.jp/entry/2013/04/09/193136)
- [TeXmakerで使用可能なファイル名について](http://fagahhe2645.hatenablog.com/entry/2013/02/07/231005)
- [texのエディタ](http://masashiabe665.wordpress.com/2014/07/14/tex%E3%81%AE%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF/)
- [Texmaker+makefile+Built-in Viewer](http://d.hatena.ne.jp/NU_Pan/20140723/1406103369)
