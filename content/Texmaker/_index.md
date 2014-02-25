---
title: "Texmaker"
url: "/Texmaker/"
date: 2013-06-02T22:55:35Z
bookCollapseSection: true
pukiwiki: "Texmaker"
---

# Texmaker

## [Texmaker](http://www.xm1math.net/texmaker/) {#x838d855}

<img src="http://www.xm1math.net/texmaker/texmaker128.png" alt="Texmaker" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## Texmaker とは {#y02c99e4}

Texmaker は，LaTeX エディタ (統合環境) です．<br>
SyncTeX がサポートされています．<br>
Texmaker のデフォルトの文字コードは UTF-8 です．<br>

- [Texmaker (free cross-platform latex editor)](http://www.xm1math.net/texmaker/)
    - [User manual](http://www.xm1math.net/texmaker/doc.html)
- [Texmaker Project on Google Code](https://code.google.com/p/texmaker/)

### 動作環境 {#tf7debca}

Windows, OS X, Linux<br>

### License {#l7d7100c}

GPLv2

### リリース情報/ChangeLog {#g3ccd7ae}

[ChangeLog](http://www.xm1math.net/texmaker/log.html)

### 特徴 {#m6bf2399}

[http://www.xm1math.net/texmaker/#features](http://www.xm1math.net/texmaker/#features)

### 派生版・修正版 {#n8123b82}

- [TeXstudio](/TeXstudio/)
- [texmaker(Win)修正版](http://blogs.yahoo.co.jp/igproj_fusion/folder/566040.html)
- [bidiTeXmaker3](https://bitbucket.org/srazi/biditexmaker3)

## 不具合 {#h6093782}

- [Issues](https://code.google.com/p/texmaker/issues/list)
    <!-- - -[[Issue 46: The problem with Japanese input:https://code.google.com/p/texmaker/issues/detail?id=46]] -->
    <!-- - -[[Issue 104:	Apple JIS keyword issue:https://code.google.com/p/texmaker/issues/detail?id=104]] -->
    <!-- - -[[Issue 364: Embedded PDF viewer doesn't show text in a certain font:https://code.google.com/p/texmaker/issues/detail?id=364]] -->
    <!-- - -[[Issue 420:	SumatraPDF forward search:https://code.google.com/p/texmaker/issues/detail?id=420]] → Done -->
    <!-- - -[[Issue 473:	Subdirectories in # parameter:https://code.google.com/p/texmaker/issues/detail?id=473]] -->

### OS X の Texmaker で，文字コードが UTF-8 の場合に Backslash (U+005C) が入力できず 円記号 (U+00A5) になってしまう → [KeyRemap4MacBook](http://pqrs.org/macosx/keyremap4macbook/index.html.ja) で Backslash が優先されるようにキーバインドを変更する {#u2a90df7}

<!-- -[[Issue 104:	Apple JIS keyword issue:https://code.google.com/p/texmaker/issues/detail?id=104]] -->
<!-- -[[ただし，''MacOSX SnowLeopardの環境では，半角のバックスラッシュが入力できず，半角の￥になってしまうという問題があります．''もっとも原始的な(笑)コピペよりもう少しましな方法として，次のようにすることでとりあえず回避できます．&br;▷ ことえりの「環境設定」の「入力文字」の「JISキーボードの￥キーで入力する文字」を「バックスラッシュ」に設定&br;▷ ことえりの辞書に「読み：半角バックスラッシュ→単語：半角バックスラッシュ」として登録&br;▷ ひらがな（全角入力）モードで「￥」キーを入力&br;変換確定のためreturnキーを一度叩く必要はあるものの入力は可能です．ただし''必ず全角入力モードでないとだめ''です．半角英数モードだと，当然ながら半角の￥マークになります．とりあえず，対処療法ですが，目的は達成できます（笑）．ただその弊害として全角の￥記号が打てなくなりますが，こちらは「option+Y」で入力できます．:http://www.sip-ac.jp/sip/tex02.html]] -->

OS X の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです．→ [Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt-project.org/browse/QTBUG-10543)<br>
[KeyRemap4MacBook](http://pqrs.org/macosx/keyremap4macbook/index.html.ja) で Backslash が優先されるようにキーバインドを変更するといいようです．<br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDD00;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　　　　　<strong>KeyRemap4MacBook</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　　　　　　<ins><span style="color:#F1F1F1;background-color:#555555;"><span style="color:#555555;">\[</span>　<strong>Change Key</strong>　<span style="color:#555555;">\]</span></span><span style="color:Black;background-color:#EEEEEE;">\[　<strong>Key Repeat</strong>　\]\[　<strong>Status Message</strong>　\]\[　<strong>MenuBar</strong>　\]\[　<strong>Misc &amp; Uninstall</strong>　\]</span></ins><br>
　　　　<span style="color:Black;background-color:#FAFAFA;">(<ins>　Change Yen　　　　　　　　　　　　　　　　　　</ins>)</span>　　☐ Show enabled only (1 item)　　　　　　　　　　<ins>\[ <strong>↻</strong> ReloadXML \]</ins><br>
　　　　remapping<br>
　　　　▼For Japanese<br>
　　　　　　▼Change Yen(￥) Key<br>
　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> JIS Yen(￥) to Backslash(＼)<br>
　　　　　　　　　　　　(except virtual machine, X11, RDC)<br>

***

### かな漢字変換をする際に，文字と背景が黒く表示され，判読不能になる → 修正版または[TeXstudio](/TeXstudio/) を使用する {#c698d89f}

Texmaker には，かな漢字変換をする際に変換候補の文字色とその背景色がともに「黒」となって判読不能になるという不具合があります．<br>
OS やインプットメソッドフレームワークの種類などの違いでこの不具合が発生しない場合もあるようです．<br>
Windows, Linux で不具合が発生して OS X では発生しないようです．<br>
■ Windows の場合<br>
Windows の場合は Texmaker の修正版を使用することで回避できます．<br>
■ Linux で ibus を使用している場合<br>
Arch Linux, Texmaker 4.1, ibus-kkc の組み合わせでは特に問題なく日本語入力できています．<br>
Linux Mint で ibus を使用している場合は ibus-qt4, qt4-qtconfig をインストールして Qt 設定ツールの \[インターフェース\]-\[デフォルトのインプットメソッド\] から ibus を選択することで回避できます．<br>
Fedora を使用している場合は ibus-qt, qt-config をインストールして Qt 設定ツールの \[インターフェース\]-\[デフォルトのインプットメソッド\] から ibus を選択することで回避できます．<br>
■ Linux で fcitx を使用している場合<br>
fcitx の \[設定\]-\[アドオン\]-\[拡張を ON\]-\[Fcitx XIM Frontend をダブルクリック\] で 「XIMで On The Spot スタイルを使う」 が OFF の場合は変換候補の場所に文字が表示されるので文字が確認できます．<br>
fcitx の \[設定\]-\[アドオン\]-\[拡張を ON\]-\[Fcitx XIM Frontend をダブルクリック\] で 「XIMで On The Spot スタイルを使う」 が ON の場合は背景が黒く表示されて判読不能になることがあるようです．<br>
■ Linux で uim を使用している場合<br>
uim を使用している場合は背景が黒く表示されて判読不能になることがあるようです．<br>

バージョン 1.3 の公式バイナリではこの不具合は発生しませんが，1.3 のソースを Qt 4.7.2 でビルドしてみるとこの不具合が発生します．<br>
また，同じく Qt を使用している [TeXworks でもハイライトに関する不具合が存在する](/TeXworks/#s5bfc44e)ので，もしかすると Qt の不具合 (仕様？) かもしれません．<br>

Texmaker の日本語入力を直した修正版か派生版の [TeXstudio](/TeXstudio/) を使用するといいでしょう．<br>

#### 修正方法 (Windows) {#e1ab5b1e}

Texmaker のソースコードを修正してビルドすれば日本語入力に関する不具合を回避できます．<br>

- [Poppler](/Poppler/) をインストールします．

- Texmaker のソースコードを修正してビルドします．

```
$ curl -R -L -O http://www.xm1math.net/texmaker/texmaker-4.1.1.tar.bz2
$ tar xvf texmaker-4.1.1.tar.bz2
$ cd texmaker-4.1.1
```

Texmaker は texmaker.cpp に記述されている Texmaker::GeneralOptions() メソッドの中の

```
if (QColor::isValidColor(confDlg->ui.colortableWidget->item(3,1)->text())) colorStandard=QColor(confDlg->ui.colortableWidget->item(3,1)->text());
```

という処理でテキストの色を設定しています．<br>
デフォルトではテキストの色は黒です．<br>
日本語変換時にも，この色が適用され，文字の色が黒くなってしまうので [latexhighlighter.cpp](https://bitbucket.org/srazi/biditexmaker3/src/tip/latexhighlighter.cpp) の

```
setFormat( i, 1,ColorStandard);
```

と書かれている箇所を全て

```
//setFormat( i, 1,ColorStandard);
```

としてコメントアウトしてビルドすれば，日本語変換時に黒くなる現象を回避できます．<br>

Qt 5 を使用する場合は texmaker.pro を修正します．<br>

***

```
## QT4
#QT += xml webkit network
## QT5
QT += xml webkitwidgets network widgets printsupport concurrent
```

***

poppler-qt4.h, poppler-qt5.h を参照できるようにするため，texmaker.pro に INCLUDEPATH を追加して LIBS に -lpoppler-qt5 を追加します．

Portable バージョンを作成する場合は #DEFINES += USB_VERSION の # を外します．

***

```
win32 {
INCLUDEPATH += C:\QtSDK\mingw\include
INCLUDEPATH += C:\poppler
INCLUDEPATH += /mingw/include/poppler/qt4
INCLUDEPATH += /mingw/include/poppler/qt5
LIBS         += -LC:\poppler -lpoppler-qt4 -lpoppler-qt5
RC_FILE = win.rc

DEFINES += USB_VERSION
```

***

```
$ qmake texmaker.pro
$ make release
$ cd release
$ ./texmaker &
```

- かな漢字変換をする際に，文字が黒くならないことを確認します．

- 日本語のフォントが埋め込まれていない PDF ファイルが組み込みビューアで表示できることを確認します．

- このままの状態ではエクスプローラーからダブルクリックして起動する場合に dll が見つからないといったエラーメッセージが表示されるので，Texmaker の実行に必要なライブラリ (DLL ファイル) の確認をします．<br>
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

- C:\MinGW\bin と C:\Qt\Qt5.2.0\5.2.0\mingw48_32\bin に PATH を通せばエクスプローラーからダブルクリックして起動できるようになります．

### Linux 版の Texmaker で \section{ を入力した直後に日本語入力をしようとすると日本語入力が ON にならなかったり，正しいかな漢字変換ができなかったりすることがある → [TeXstudio](/TeXstudio/) を使用する {#i1222dd8}

Linux 版の Texmaker で \section{ を入力した直後に日本語入力をしようとすると日本語入力が ON にならなかったり，正しいかな漢字変換ができなかったりすることがあります．<br>
fcitx-mozc では \section{ の直後で日本語入力が ON にならないことがあります．\section{ の直後に日本語入力が ON にならない場合に手動で日本語入力を ON にした状態で \section{ の直後で 「かんじ」 を 「漢字」 に変換しようとすると 「k暗示」 と変換されます．<br>
ibus-kkc も同様に \section{ の直後では日本語入力が ON にならないことがあります．<br>
[TeXstudio](/TeXstudio/) を使用することで回避できます．<br>

### コマンドの設定に使用するパラメータのパースの仕方に問題がある → [TeXstudio](/TeXstudio/) または Ruby, Windows PowerShell, バッチファイル, シェルスクリプト などを使用する {#t0aace20}

Texmaker はコマンドの設定に使用するパラメータのパースの仕方に問題があります．<br>
[TeXstudio](/TeXstudio/) はコマンドの設定に使用するパラメータが正しく処理されています．<br>
Texmaker の場合は例えばコマンドの設定に &#x25; が必要になった場合に &#x25; をそのまま記述しても &#x25;&#x25; と記述しても期待したように処理されません．<br>
Ruby では

```
0x25.chr
```

Windows PowerShell では

```
[char]0x25
```

で &#x25; を表示できます．<br>
このようにして Ruby や Windows PowerShell を使用して表示したい文字を「数値→文字」の変換で表現して設定を記述すれば OK です．<br>
Ruby, Windows PowerShell の他に バッチファイルやシェルスクリプトを使用しても OK です．<br>

### Windows PowerShell を使用して設定を記述して実行すると Texmaker が応答しなくなることがある → Ruby を使用して設定を記述する {#o6c242bd}

Windows PowerShell を使用して設定を記述して実行すると Texmaker が応答しなくなることがあります．<br>
この場合は Ruby を使用して設定を記述してください．<br>

### W32TeX を使用して \usepackage{mathptmx} で \sum を使用した場合に組み込みの PDF ビューアで表示されない → dvipdfmx -f dlbase14.map %.dvi を設定してフォントを埋め込む {#t68c551e}

<!-- -[[Issue 364: Embedded PDF viewer doesn't show text in a certain font:https://code.google.com/p/texmaker/issues/detail?id=364]] -->
- [Windows にTexmakerを導入](http://blog.sqr-main.net/2012/06/windows-texmaker.html)

W32TeX を使用して \usepackage{mathptmx} で \sum を使用した場合に組み込みの PDF ビューアで表示されません．<br>

```
dvipdfmx -f dlbase14.map %.dvi
```

を設定してフォントを埋め込めば表示されるようになります．<br>
通常はフォントを埋め込まない設定にしておきたい場合は，TeX ファイルのプリアンブルに

```
\AtBeginDvi{\special{pdf:mapfile dlbase14.map}}
```

を記述してください．

PDF ファイルのフォントの埋め込みについては

- [PDFの作り方#フォントの埋め込み設定](</PDFの作り方/#z0e1001a>)

を参照してください．

### [Beamer ポスター入門](http://www.ms.u-tokyo.ac.jp/~tado/beamer/poster.html) のサンプルを [lualatex や pdflatex で -synctex=1 オプションを有効にした状態でクイックビルドを実行して組み込みビューアで PDF ファイルを表示しようとすると Texmaker が落ちる](http://blog.livedoor.jp/ti5942/archives/7423368.html) → -synctex=1 オプションをはずす {#b257516a}

[Beamer ポスター入門](http://www.ms.u-tokyo.ac.jp/~tado/beamer/poster.html) のサンプルを [lualatex や pdflatex で -synctex=1 オプションを有効にした状態でクイックビルドを実行して組み込みビューアで PDF ファイルを表示しようとすると Texmaker が落ちる](http://blog.livedoor.jp/ti5942/archives/7423368.html)という不具合があります．<br>
この不具合が発生する場合は -synctex=1 オプションをはずしてください．<br>

***

- texmaker.cpp

***

```
void Texmaker::RunCommand(QString comd,bool waitendprocess)
```

メソッドの中の

```
if (builtinpdfview && (comd==viewpdf_command))
  {
    if (embedinternalpdf)
      {
      if (pdfviewerWidget)
	{
	pdfviewerWidget->openFile(outputName(finame,".pdf"),viewpdf_command,ghostscript_command);
	StackedViewers->setCurrentWidget(pdfviewerWidget);
	//pdfviewerWidget->raise();
      	showpdfview=true;
	ShowPdfView(false);
	pdfviewerWidget->show();
	if ( (pdflatex_command.contains("synctex=1")) || (latex_command.contains("synctex=1")) ) pdfviewerWidget->jumpToPdfFromSource(getName(),currentline);
```

の部分の

```
	if ( (pdflatex_command.contains("synctex=1")) || (latex_command.contains("synctex=1")) ) pdfviewerWidget->jumpToPdfFromSource(getName(),currentline);
```

で落ちているようです．

## 組み込みの PDF ビューアで日本語を表示するために使用される代替フォント {#h2a20ebd}

### Windows の Texmaker の場合 {#h82370cc}

Texmaker の公式サイトで配布されている Windows バイナリと Texmaker 修正版は poppler-data が適切な位置に配置されており fontconfig も適切に設定されています．<br>

***

```
C:.
└─Texmaker
    ├─texmaker.exe
    └─share
        └─poppler
```

***

fontconfig を適切に設定すれば PDF ファイルに日本語のフォントが埋め込まれていなくても日本語を表示することが可能になります．<br>
日本語のフォントを埋め込んでいない PDF ファイルを表示すると texmaker.exe と同じフォルダーに WINDOWSTEMPDIR_FONTCONFIG_CACHE フォルダーが作成され，日本語が表示されます．<br>
なお，<strong>初回の表示ではフォントキャッシュを作成するため時間がかかり，応答なしの状態になってしまう</strong>かもしれませんが，作成されれば通常通り表示されるようになります．<br>

***

```
C:.
└─Texmaker
    ├─texmaker.exe
    └─WINDOWSTEMPDIR_FONTCONFIG_CACHE
```

***

PDF ビューアで表示される代替フォントは texmaker.exe と同じフォルダーに存在する etc\fonts\local.conf で設定されています．<br>

***

```
C:.
└─Texmaker
    ├─texmaker.exe
    └─etc
        └─fonts
            ├─conf.d
            ├─fonts.conf
            ├─fonts.dtd
            └─local.conf
```

***

デフォルトでは Ryumin-Light (明朝体) は MS Mincho，GothicBBB-Medium (ゴシック体) は MS Gothic で表示されます．<br>

***

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<!-- local.conf file to configure local font access -->
<fontconfig>
<dir>c:/texlive/2014/texmf-dist/fonts/opentype</dir>
<dir>c:/texlive/2014/texmf-dist/fonts/truetype</dir>
<dir>c:/w32tex/share/texmf-dist/fonts/opentype</dir>
<dir>c:/w32tex/share/texmf-dist/fonts/truetype</dir>
<dir>c:/Program Files/MiKTeX 2.9/fonts/opentype</dir>
<dir>c:/Program Files/MiKTeX 2.9/fonts/truetype</dir>
<dir>c:/Program Files (x86)/MiKTeX 2.9/fonts/opentype</dir>
<dir>c:/Program Files (x86)/MiKTeX 2.9/fonts/truetype</dir>
<dir>c:/Windows/Fonts</dir>

<match target="pattern">
  <test qual="any" name="family">
    <string>Ryumin</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>MS Mincho</string>
  </edit>
</match>
<match target="pattern">
  <test qual="any" name="family">
    <string>GothicBBB</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>MS Gothic</string>
  </edit>
</match>

<alias binding="same">
  <family>ZapfDingbats</family>
  <accept><family>Dingbats</family></accept>
</alias>

</fontconfig>
```

***

### Linux の Texmaker の場合 {#o71b53f0}

[代替フォントの設定](/Evince/#substitute) を参照して代替フォントの設定をします．<br>

## 設定ファイル {#ke75945d}

> <table>
> <thead>
> <tr><th style="text-align:center">環境</th><th style="text-align:center">設定ファイルが保存されるフォルダー</th><th style="text-align:center">ファイル名</th></tr>
> </thead>
> <tbody>
> <tr><td>Portable バージョン</td><td>Texmaker の実行ファイルと同じフォルダー</td><td>texmaker.ini, texmakerapp.ini, texmakerpdfview.ini</td></tr>
> <tr><td>Windows</td><td>%APPDATA%\xm1\</td><td>texmaker.ini, texmakerapp.ini, texmakerpdfview.ini</td></tr>
> <tr><td>UNIX, Linux, OS X</td><td>$HOME/.config/xm1/</td><td>texmaker.ini, texmakerapp.ini, texmakerpdfview.ini</td></tr>
> </tbody>
> </table>
>

## 設定のリセット {#qc1461dd}

\[オプション(O)\]-\[設定ファイル\]-\[設定をリセット\]

## コマンド (Windows) {#cab65285}

\[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\]

PDF ビューアは，組み込みビューアと外部ビューアを選択するようになっているので好きな方を選択してください．<br>
コマンドの LaTeX に設定されている latex を uplatex に変更してコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの LuaLaTeX に設定されているコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの Bib(la)tex に設定されている bibtex を biber --bblencoding=utf8 -u -U --output_safechars に変更します．<br>
コマンドの Dvipdfm に設定されている dvipdfm を dvipdfmx に変更します．<br>
Texmaker のデフォルトの文字コードは UTF-8 です．<br>
コンパイルエラーが発生する場合は[サクラエディタ](</サクラエディタ/>)で文字コードを UTF-8，改行コードを CR+LF にして保存するとコンパイルが通るそうです． → [やっと見つけたTeXエディタ](http://yaplog.jp/stdwave/archive/215)<br>
W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>

***

<span style="color:#9BC527;background-color:#9BC527;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#9BC527;background-color:#9BC527;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>uplatex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>pdflatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ 出力ファイルを "build" サブフォルダーに出力する</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">XeLaTeX　　</span><ins>xelatex -synctex=1 -interaction=nonstopmode %.tex</ins>　　　　　<span style="color:Black;background-color:#F5F5F5;">LuaLaTeX　　</span><ins>lualatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>luajitlatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/makeindex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"</ins><br>

<br>

<br>

<br>

　　　<strong>クイックビルド</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](/Biblatex/)　　 </span><ins>biber --bblencoding=utf8 -u -U --output_safechars &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>makeindex %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>dvips -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>dvipdfmx %.dvi</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>ps2pdf.bat %.ps</ins> または <ins>ps2pdf.exe %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>upmpost -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>asy %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>rungs.exe</ins> または <ins>gswin64c.exe</ins> または <ins>gswin32c.exe</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　<strong>ショートカット</strong>　　　<span style="color:Black;background-color:#F5F5F5;">Add to PATH　　　　</span><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;">(●) 組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>powershell -Command "&amp; {$line=\[char\]0x22+@+\[char\]0x22;$tex=\[char\]0x22+'#.tex'+\[char\]0x22;$pdf=\[char\]0x22+'%.pdf'+\[char\]0x22;$texmaker='C:\Program Files (x86)\Texmaker\texmaker.exe';$f=\[char\]0x25+'f';$l=\[char\]0x25+'l';$inverse_search=\[char\]0x22+\[char\]0x5c+\[char\]0x22+$texmaker+\[char\]0x5c+\[char\]0x22+' '+\[char\]0x5c+\[char\]0x22+$f+\[char\]0x5c+\[char\]0x22+' -line '+$l+\[char\]0x22;$sumatrapdf=\[char\]0x22+'C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe'+\[char\]0x22;Start-Process $sumatrapdf -ArgumentList ('-reuse-instance','-inverse-search',$inverse_search,$pdf,'-forward-search',$tex,$line)}"</ins><br>

<ins>powershell -Command "&amp; {$line=\[char\]0x22+@+\[char\]0x22;$tex=\[char\]0x22+'#.tex'+\[char\]0x22;$pdf=\[char\]0x22+'%.pdf'+\[char\]0x22;$texmaker='C:\Program Files\Texmaker\texmaker.exe';$f=\[char\]0x25+'f';$l=\[char\]0x25+'l';$inverse_search=\[char\]0x22+\[char\]0x5c+\[char\]0x22+$texmaker+\[char\]0x5c+\[char\]0x22+' '+\[char\]0x5c+\[char\]0x22+$f+\[char\]0x5c+\[char\]0x22+' -line '+$l+\[char\]0x22;$sumatrapdf=\[char\]0x22+'C:\Program Files\SumatraPDF\SumatraPDF.exe'+\[char\]0x22;Start-Process $sumatrapdf -ArgumentList ('-reuse-instance','-inverse-search',$inverse_search,$pdf,'-forward-search',$tex,$line)}"</ins><br>

<ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @</ins><br>

<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @</ins><br>

<ins>powershell -Command "&amp; {$param=\[char\]0x22+'@:0:#.tex'+\[char\]0x22; $pdf=\[char\]0x22+'%.pdf'+\[char\]0x22; $page=\[char\]0x25+'{page+1}'; $o=\[char\]0x27+\[char\]0x25+'{output}'+\[char\]0x27; synctex view -i $param -o $pdf -x """texworks --position=$page $o"""}"</ins><br>
<!-- %%%texworks %.pdf%%%&br; -->
<!-- %%%cmd /c start firefox -new-window %.pdf%%%&br; -->
<!-- %%%cmd /c start chrome - -new-window !/%.pdf%%%&br; -->
<!-- %%%pdfopen - -rxi - -file %.pdf%%%&br; -->

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

## [SumatraPDF](/SumatraPDF/) との連携 {#f10825ae}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward and inverse search {#xf457e6c}

#### SumatraPDF を前面に表示したい場合 {#r4dc6964}

forward and inverse search は PDFビューアの外部ビューアに以下のように設定します．<br>

■ 64-bit Windows の場合<br>

```
powershell -Command "& {$line=[char]0x22+@+[char]0x22;$tex=[char]0x22+'#.tex'+[char]0x22;$pdf=[char]0x22+'%.pdf'+[char]0x22;$texmaker='C:\Program Files (x86)\Texmaker\texmaker.exe';$f=[char]0x25+'f';$l=[char]0x25+'l';$inverse_search=[char]0x22+[char]0x5c+[char]0x22+$texmaker+[char]0x5c+[char]0x22+' '+[char]0x5c+[char]0x22+$f+[char]0x5c+[char]0x22+' -line '+$l+[char]0x22;$sumatrapdf=[char]0x22+'C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe'+[char]0x22;Start-Process $sumatrapdf -ArgumentList ('-reuse-instance','-inverse-search',$inverse_search,$pdf,'-forward-search',$tex,$line)}"
```

■ 32-bit Windows の場合<br>

```
powershell -Command "& {$line=[char]0x22+@+[char]0x22;$tex=[char]0x22+'#.tex'+[char]0x22;$pdf=[char]0x22+'%.pdf'+[char]0x22;$texmaker='C:\Program Files\Texmaker\texmaker.exe';$f=[char]0x25+'f';$l=[char]0x25+'l';$inverse_search=[char]0x22+[char]0x5c+[char]0x22+$texmaker+[char]0x5c+[char]0x22+' '+[char]0x5c+[char]0x22+$f+[char]0x5c+[char]0x22+' -line '+$l+[char]0x22;$sumatrapdf=[char]0x22+'C:\Program Files\SumatraPDF\SumatraPDF.exe'+[char]0x22;Start-Process $sumatrapdf -ArgumentList ('-reuse-instance','-inverse-search',$inverse_search,$pdf,'-forward-search',$tex,$line)}"
```

### forward search {#y08c577b}

#### SumatraPDF を前面に表示したい場合 {#id9fc839}

forward search は PDFビューアの外部ビューアに以下のように設定します．<br>

■ 64-bit Windows の場合<br>

```
"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @
```

■ 32-bit Windows の場合<br>

```
"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance %.pdf -forward-search #.tex @
```

#### SumatraPDF を前面に表示したくない場合 {#j0fbd66f}

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

forward search は PDFビューアの外部ビューアに以下のように設定します．<br>

```
fwdsumatrapdf.exe %.pdf #.tex @
```

### inverse search {#p850b553}

inverse search は SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に以下のように設定します．<br>

■ 64-bit Windows の場合

```
"C:\Program Files (x86)\Texmaker\texmaker.exe" "%f" -line %l
```

■ 32-bit Windows の場合

```
"C:\Program Files\Texmaker\texmaker.exe" "%f" -line %l
```

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## [TeXworks](/TeXworks/) との連携 {#o9f4b99c}

### forward search {#a41fe59c}

forward search は PDFビューアの外部ビューアに以下のように設定します．<br>

```
powershell -Command "& {$param=[char]0x22+'@:0:#.tex'+[char]0x22; $pdf=[char]0x22+'%.pdf'+[char]0x22; $page=[char]0x25+'{page+1}'; $o=[char]0x27+[char]0x25+'{output}'+[char]0x27; synctex view -i $param -o $pdf -x """texworks --position=$page $o"""}"
```

## [Adobe Reader](</Adobe Reader/>) との連携 {#u27e1718}

### forward search {#l5bfe340}

#### pdfupLaTeXA {#v915ab85}

pdfuplatexA-nonstopmode.bat を作成します．

***

- pdfuplatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
ptex2pdf -u -l -ot "-kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode" %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdfuplatexA-nonstopmode.bat % #.tex @
```

を入力します．

#### pdfupLaTeX2A {#pf77769a}

pdfuplatex2A-nonstopmode.bat を作成します．

***

- pdfuplatex2A-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
uplatex -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdfuplatex2A-nonstopmode.bat % #.tex @
```

を入力します．

#### pdfLaTeXA {#j7c9b397}

pdflatexA-nonstopmode.bat を作成します．

***

- pdflatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
pdflatex -synctex=1 -interaction=nonstopmode %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
pdflatexA-nonstopmode.bat % #.tex @
```

を入力します．

#### LuaLaTeXA {#b2053ddc}

lualatexA-nonstopmode.bat を作成します．

***

- lualatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
lualatex -synctex=1 -interaction=nonstopmode %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
lualatexA-nonstopmode.bat % #.tex @
```

を入力します．

#### LuaJITLaTeXA {#z4aadf43}

luajitlatexA-nonstopmode.bat を作成します．

***

- luajitlatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
luajitlatex -synctex=1 -interaction=nonstopmode %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
luajitlatexA-nonstopmode.bat % #.tex @
```

を入力します．

#### XeLaTeXA {#md09c195}

xelatexA-nonstopmode.bat を作成します．

***

- xelatexA-nonstopmode.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
xelatex -synctex=1 -interaction=nonstopmode %1 && ^
synctex view -i "%~n3:0:%~n2.tex" -o "%~n1.pdf" -x "pdfopen --rxi --file '%%{output}' --page %%{page+1}"
```

***

クイックビルドのコマンドのユーザー定義または \[ユーザー(U)\]-\[ユーザー定義コマンド(C)\]-\[ユーザー定義コマンドの編集(C)\] で

```
xelatexA-nonstopmode.bat % #.tex @
```

を入力します．

## コマンド (OS X) {#qe10b63b}

\[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\]

動作未確認です．<br>
PDFビューアは，組み込みビューアと外部ビューアを選択するようになっているので好きな方を選択してください．<br>
コマンドの LaTeX に設定されている latex を uplatex に変更してコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの LuaLaTeX に設定されているコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの Bib(la)tex に設定されている bibtex を biber --bblencoding=utf8 -u -U --output_safechars に変更します．<br>
コマンドの Dvipdfm に設定されている dvipdfm を dvipdfmx に変更します．<br>
BibTeX と dvipdfmx がうまく動作しない場合は以下を参照してください．<br>

- [TeXmakerでbibTeXとdvipdfmxが動きません](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=988)
- [TeXshopでbibTeXがうまく動かなくなりました](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=991)

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#00DD00;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>Texmaker の設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>"/usr/texbin/uplatex" -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>"/usr/texbin/pdflatex" -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ 出力ファイルを "build" サブフォルダーに出力する</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">XeLaTeX　　</span><ins>"/usr/texbin/xelatex" -synctex=1 -interaction=nonstopmode %.tex</ins>　　　　　<span style="color:Black;background-color:#F5F5F5;">LuaLaTeX　　</span><ins>"/usr/texbin/lualatex" -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>"/usr/texbin/luajitlatex" -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/makeindex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"</ins><br>

<br>

<br>

<br>

　　　<strong>クイックビルド</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](/Biblatex/)　　 </span><ins>"/usr/texbin/biber" --bblencoding=utf8 -u -U --output_safechars &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>"/usr/texbin/makeindex" %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>"/usr/texbin/dvips" -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>"/usr/texbin/dvipdfmx" %.dvi</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>"/Applications/Ghostscript.app/bin/ps2pdf" %.ps</ins> または <ins>"/usr/local/bin/ps2pdf" %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>"/usr/texbin/upmpost" -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>"/usr/texbin/asy" %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>"/usr/local/bin/gs"</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　<strong>ショートカット</strong>　　　<span style="color:Black;background-color:#F5F5F5;">Add to PATH　　　　</span><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;"><span style="color:Black;background-color:#9FCFFB;">(<span style="color:Black;">●</span>)</span>　組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>"/Applications/Skim.app/Contents/SharedSupport/displayline" @ %.pdf #.tex</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

## Skim との連携 {#b05a1a86}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#jbc32d2d}

forward search は PDFビューアに

```
"/Applications/Skim.app/Contents/SharedSupport/displayline" @ %.pdf #.tex
```

です．

### inverse search {#q51f9015}

コマンド:
: /Applications/texmaker.app/Contents/MacOS/texmaker

引数:
: "%file" -line %line

## コマンド (Linux) {#web15355}

\[オプション(O)\]-\[Texmaker の設定\]-\[コマンド\]

PDFビューアは，組み込みビューアと外部ビューアを選択するようになっているので好きな方を選択してください．<br>
組み込みビューアで和文フォントを埋め込んでいない PDF ファイルを表示したい場合は [代替フォントの設定](/Evince/#substitute) や [KDE-Okular や Texmaker で和文フォント非埋め込みPDFを表示させるには](http://blogs.yahoo.co.jp/igproj_fusion/16383026.html)を参照してください．<br>
コマンドの LaTeX に設定されている latex を uplatex に変更してコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの LuaLaTeX に設定されているコマンドのオプションに -synctex=1 を追加します．<br>
コマンドの Bib(la)tex に設定されている bibtex を biber --bblencoding=utf8 -u -U --output_safechars に変更します．<br>
コマンドの Dvipdfm に設定されている dvipdfm を dvipdfmx に変更します．<br>

***

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">コマンド (% : 拡張子を除いたファイル名 - @ : 行番号)</span><br>

<span style="color:Black;background-color:#F5F5F5;">LaTeX　　　　</span><ins>uplatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">PdfLaTeX　　</span><ins>pdflatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<span style="color:Black;background-color:#F5F5F5;">☐ 出力ファイルを "build" サブフォルダーに出力する</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>コマンド</strong>　　　</span>　 <span style="color:Black;background-color:#F5F5F5;">XeLaTeX　　</span><ins>xelatex -synctex=1 -interaction=nonstopmode %.tex</ins>　　　　　<span style="color:Black;background-color:#F5F5F5;">LuaLaTeX　　</span><ins>lualatex -synctex=1 -interaction=nonstopmode %.tex</ins> または <ins>luajitlatex -synctex=1 -interaction=nonstopmode %.tex</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">Latexmk　　 </span><ins>ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/makeindex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"</ins><br>

<br>

<br>

<br>

　　　<strong>クイックビルド</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[Bib(la)tex](/Biblatex/)　　 </span><ins>biber --bblencoding=utf8 -u -U --output_safechars &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Makeindex　　</span><ins>makeindex %.idx</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[dvips](/dvips/)　　　　　</span><ins>dvips -Ppdf -o %.ps %.dvi</ins><br>

<span style="color:Black;background-color:#F5F5F5;">Dvipdfm　　　</span><ins>dvipdfmx %.dvi</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">ps2pdf　　　　</span><ins>ps2pdf %.ps</ins><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">[metapost](/MetaPost/)　　</span><ins>upmpost -interaction=nonstopmode &#x25;</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[Asymptote](/Asymptote/)　</span><ins>asy %.asy</ins><br>

<span style="color:Black;background-color:#F5F5F5;">[ghostscript](/Ghostscript/)　</span><ins>gs</ins><br>

<span style="color:Black;background-color:#F5F5F5;">R Sweave　 </span><ins>R CMD Sweave %.Rnw</ins><br>

　　　<strong>ショートカット</strong>　　　<span style="color:Black;background-color:#F5F5F5;">Add to PATH　　　　</span><br>

***

　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><strong>PDF ビューア</strong></span><br>
<span style="color:Black;background-color:#F5F5F5;">(●)　組み込みビューア</span><br>

<span style="color:Black;background-color:#F5F5F5;">☑　埋め込み</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯　外部ビューア</span><br>

<ins>ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'evince -i '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<ins>fwdevince %.pdf @ #.tex</ins><br>

<ins>ruby -e "cmd='okular --unique '+0x22.chr+'file:'+'"%.pdf"'+0x23.chr+'src:'+'"@"'+' '+'"!/#.tex"'+0x22.chr;system(cmd)"</ins><br>

<ins>ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'zathura -P '+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<ins>ruby -e "cmd='zathura -s -x '+0x22.chr+'texmaker '+0x22.chr++0x25.chr+'{input}'+0x22.chr+' -line '+0x25.chr+'{line}'+0x22.chr+' '+0x22.chr+'"%.pdf"'+0x22.chr;system(cmd)"</ins><br>

<ins>ruby -e "cmd='qpdfview --unique '+0x22.chr+'"%.pdf"'+0x23.chr+'src:'+'"#.tex"'+':'+'"@"'+':0'+0x22.chr;system(cmd)"</ins><br>

<ins>ruby -e "cmd='synctex view -i '+0x27.chr+'"@:0:#.tex"'+0x27.chr+' -o '+0x27.chr+'"%.pdf"'+0x27.chr+' -x '+0x27.chr+'texworks --position='+0x25.chr+'{page+1} '+0x22.chr+0x25.chr+'{output}'+0x22.chr+0x27.chr;system(cmd)"</ins><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

## [Evince](/Evince/) との連携 {#xd595a5d}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#dc58c25f}

Evince/fwdevince の fwdevince を使用します．<br>

forward search は PDFビューアに

```
fwdevince %.pdf @ #.tex
```

です．

### inverse search {#zb2ae21e}

Evince/fwdevince の invevince を使用します．<br>

ユーザーコマンドに invevince を作成して以下のようにコマンドを設定します．<br>

```
ruby -e "cmd='invevince'+' '+0x22.chr+'"%.pdf"'+0x22.chr+' '+0x22.chr+'texmaker '+0x27.chr++0x25.chr+'f'+0x27.chr+' -line '+0x25.chr+'l'+0x22.chr;system(cmd)"
```

PDFビューアに evince を設定して evince で PDF ファイルを表示してユーザーコマンドを実行します．<br>
Ctrl + 左クリックで inverse search ができます．<br>
ユーザーコマンドを実行するタイミングは evince で PDF ファイルを表示する前でも後でもどちらでも OK です．<br>
Texmaker の動作がおかしくなる場合は使用を中止してください．<br>

## Okular との連携 {#e1d5124a}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#rb0da469}

forward search は PDFビューアに

```
ruby -e "cmd='okular --unique '+0x22.chr+'file:'+'"%.pdf"'+0x23.chr+'src:'+'"@"'+' '+'"!/#.tex"'+0x22.chr;system(cmd)"
```

です．

### inverse search {#r820bc14}

\[Settings\]-\[Configure Okular...\]-\[Editor\] の項目から Custom Text Editor を選択します．

Editor:
: Custom Text Editor

Command:
: texmaker "%f" -line %l

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## zathura との連携 {#k3c22c37}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#za381a9a}

ユーザーコマンドに fwdzathura を作成して以下のようにコマンドを設定します．<br>

```
ruby -e "cmd='zathura --synctex-forward '+0x22.chr+'"@"'+':0:'+'"#.tex"'+0x22.chr+' '+0x22.chr+'"%.pdf"'+0x22.chr;system(cmd)"
```

PDFビューアに zathura を設定して zathura で PDF ファイルを表示したあとでユーザーコマンドを実行します．

### inverse search {#s8c6284b}

PDFビューアに

```
ruby -e "cmd='zathura -s -x '+0x22.chr+'texmaker '+0x22.chr++0x25.chr+'{input}'+0x22.chr+' -line '+0x25.chr+'{line}'+0x22.chr+' '+0x22.chr+'"%.pdf"'+0x22.chr;system(cmd)"
```

を設定します．

クイックビルドの DVI/PS/PDF ファイルがすでに開いている場合は新たにビューアを起動しないを ON にします．<br>

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## qpdfview との連携 {#t3c4682d}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#dca2869a}

forward search は PDFビューアに

```
ruby -e "cmd='qpdfview --unique '+0x22.chr+'"%.pdf"'+0x23.chr+'src:'+'"#.tex"'+':'+'"@"'+':0'+0x22.chr;system(cmd)"
```

です．

### inverse search {#pac65f46}

\[Edit\]-\[Settings...\]-\[Behaviour\]

Source editor:
: texmaker "%1" -line %2

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## クイックビルド {#y84eb800}

\[オプション(O)\]-\[Texmaker の設定\]-\[クイックビルド\]

LaTeX + dvipdfm + PDF ファイルを表示 を選択します．<br>
ユーザー定義でコマンドを指定して実行することもできます．<br>

クイックビルドを実行して複数のビューアが起動してしまう場合は<br>

- DVI/PS/PDF ファイルがすでに開いている場合は新たにビューアを起動しないにチェックを入れる
- ユーザー定義でビューアを起動する手順を除いた処理を作成する

などの方法で対処してください．<br>

***

<span style="color:#9BC527;background-color:#9BC527;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#9BC527;background-color:#9BC527;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">クイックビルドで使用するコマンド</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ PdfLaTeX + PDF ファイルを表示</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;">◯ LaTeX + dvips + PS ファイルを表示</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ PdfLaTeX + Bib(la)tex + PdfLaTeX (x2) + PDF ファイルを表示</span>　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;">◯ LaTeX + DVI ファイルを表示</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ LaTeX + dvips + ps2pdf + PDF ファイルを表示</span>　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#F5F5F5;"><span style="color:black;background-color:yellow;"><strong>(●) LaTeX + dvipdfm + PDF ファイルを表示 ← 選択する</strong></span></span><br>

　　　　　<strong>コマンド</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">◯ LaTeX + Bib(la)tex + LaTeX (x2) + dvips + ps2pdf + PDF ファイルを表示</span>　　　　<span style="color:Black;background-color:#F5F5F5;">◯ Sweave + PdfLaTeX + PDF ファイルを表示</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">◯ LaTeX + Asymptote + LaTeX + dvips + PS ファイルを表示</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ PdfLaTeX + Asymptote + PdfLaTeX + PDF ファイルを表示</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ Latexmk + PDF ファイルを表示</span><br>

<span style="color:Black;background-color:#F5F5F5;">◯ XeLaTeX + PDF ファイルを表示</span><br>

　　<span style="color:Black;background-color:#DAEAFF;">　<strong>クイックビルド</strong>　</span>　 <span style="color:Black;background-color:#F5F5F5;">◯ LuaLaTeX + PDF ファイルを表示</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">◯ ユーザー定義 : (% : 拡張子を除いたファイル名)</span><br>

<span style="color:#888888;background-color:#EEEEEE;"><ins>ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -synctex=1 -interaction=nonstopmode '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/makeindex '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%.tex';system(cmd)"&#x7c;rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance %.pdf -forward-search #.tex @</ins></span><br>

<span style="color:Black;background-color:#F5F5F5;">(コマンドは'&#x7c;'で分割する必要があります)</span><br>

<span style="color:Black;background-color:#F5F5F5;">For .asy files　</span><ins>asy -f pdf -noView %.asy&#x7c;pdfopen --rxi --file %.pdf</ins><br>

　　　　　<strong>エディタ</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">☐ DVI/PS/PDF ファイルがすでに開いている場合は新たにビューアを起動しない</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

<br>

<br>

<br>

<br>

　　　<strong>ショートカット</strong><br>

<br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

## エディタ {#y67addbe}

\[オプション(O)\]-\[Texmaker の設定\]-\[エディタ\]

文字コードのリストからエディタで使用する文字コードを指定できます．<br>
デフォルトの文字コードは UTF-8 です．<br>
日本語の文書を作成する場合はスペルチェック辞書のインラインのチェックを外します．<br>
重要なファイルを作成する場合は 10 分ごとにバックアップをとる にチェックを入れます．<br>

***

<span style="color:#9BC527;background-color:#9BC527;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Texmaker の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#9BC527;background-color:#9BC527;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configtools.png" alt="コマンド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">エディタ</span><br>

<span style="color:Black;background-color:#F5F5F5;">フォント名 　　　　　　　　　　　　　　　　　　　　</span><ins>メイリオ　　　　　　　　　　　<strong>ᐯ</strong></ins><span style="color:Black;background-color:#F5F5F5;">　☑ ワードラップ</span><br>

<span style="color:Black;background-color:#F5F5F5;">サイズ 　　　　　　　　　　　　　　　　　　　　　　</span><ins>12　　　　　　　　　　　　　 \[<strong>⇕</strong>\]</ins><span style="color:Black;background-color:#F5F5F5;">　☑ 補完</span><br>

<span style="color:Black;background-color:#F5F5F5;">文字コード　　　　　　　　　　　　　　　　　　　　</span><span style="color:Black;background-color:#EEEEEE;"><ins>\[UTF-8　　　　　　　　　　　▼\]</ins></span><span style="color:Black;background-color:#F5F5F5;">　☑ 行番号の表示</span><br>

　　　　　<strong>コマンド</strong>　　　　 <span style="color:Black;background-color:#F5F5F5;">☐ 外部からの変更をチェックする　　　　　　　　　　　　　　　　　　　　　　　　 ☑ 10 分ごとにバックアップをとる</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configquick.png" alt="クイックビルド" style="float:left">

<span style="color:Black;background-color:#F5F5F5;">スペルチェック辞書　</span><ins>C:/texmakerwin32usb/en_US.dic　　　　　　　　　　　　　　　　</ins><span style="color:Black;background-color:#F5F5F5;">　　　　<span style="color:black;background-color:yellow;"><strong>☐ インライン ← 日本語の文書を作成する場合はチェックをはずす</strong></span></span><br>

<span style="color:Black;background-color:#F5F5F5;">タブ幅 (スペースの数) </span><ins>4　　\[<strong>⇕</strong>\]</ins><span style="color:Black;background-color:#F5F5F5;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ タブをスペースで置き換える</span><br>

<span style="color:Black;background-color:#F5F5F5;">色</span><br>

<br>

　　　<strong>クイックビルド</strong><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configeditor.png" alt="エディタ" style="float:left">

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#DAEAFF;">　　　<strong>エディタ</strong>　　　</span><br>

<div style="clear:both"></div>

<img src="https://bitbucket.org/srazi/biditexmaker3/raw/tip/images/configkeys.png" alt="ショートカット" style="float:left">

>
> : &nbsp;
>

>
> : &nbsp;
>

> <table>
> <tbody>
> <tr><td style="color:#555">Background</td><td>#ffffff　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td></tr>
> <tr><td style="color:#555">Current line</td><td>#ececec</td></tr>
> <tr><td style="color:#555">Highlighted line</td><td>#ff0000</td></tr>
> <tr><td style="color:#555">Text</td><td>#000000</td></tr>
> <tr><td style="color:#555">Comment</td><td>#606060</td></tr>
> <tr><td style="color:#555">Math</td><td>#008000</td></tr>
> <tr><td style="color:#555">...</td><td>...</td></tr>
> </tbody>
> </table>
>

　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 　　　　　 ダークテーマ 　　　　　 \]</span><br>
　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　　　デフォルトのテーマ　　　　\]</span><br>

<div style="clear:both"></div>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ キャンセル \]</span><br>

***

## 使い方 {#qb8bff72}

### クイックビルド {#t4a85ad6}

\[ツール(T)\]-\[クイックビルド\] もしくは F1 キーでクイックビルドのコマンドが実行されます．<br>

### 補完 {#hb123681}

自動補完機能があります．<br>
補完する時に "•" (place holder) が表示された場合，Tab キーで移動できます．<br>
前の place holder に戻るときは Shift + Tab で戻ります．<br>
自動補完機能を off にする場合は \[オプション(O)\]-\[Texmaker の設定\]-\[エディタ\] の 補完 のチェックを外します．<br>

### forward and inverse search {#nec0efab}

forward search は エディタ上で Ctrl + Space または 右クリック → PDF ファイルへジャンプ<br>
inverse search は PDF ビューア上で Ctrl + 左クリック または 右クリック → 該当行へジャンプ<br>

### スペルチェック {#v6609c95}

\[オプション(O)\]-\[Texmaker の設定\]-\[エディタ\]-\[スペルチェック辞書\]-\[インライン\] にチェックがはいっている場合，スペルが間違っていると思われる単語の下に赤い点線が表示されます．<br>
メニューからは \[編集(E)\]-\[スペルチェック\]，ショートカットキーは Ctrl + Shift + F7 です．<br>
日本語の文章を作成するときに赤い点線を表示したくない場合は \[オプション(O)\]-\[Texmaker の設定\]-\[エディタ\]-\[スペルチェック辞書\]-\[インライン\] のチェックを外します．<br>

### マスターファイル {#q462cf44}

文書を分割している場合は，メインのファイルで \[オプション(O)\]-\[このファイルを 'マスターファイル' に設定する\] を選択してマスターファイルに指定します．<br>

### 矩形選択 {#d3fe38c1}

Alt キーを押しながらマウスをドラッグすると矩形選択ができます．<br>

### TexDoc {#j3990168}

\[ヘルプ(H)\]-\[TexDoc \[selection\]\] から調べたいドキュメントを検索できます．<br>

例えば

```
tikz
```

とタイプして \[OK\] をクリックすると [TikZ](/TikZ/) のマニュアルが表示されます．<br>

## 関連リンク {#n5a9b95f}

- [http://fossies.org/dox/texmaker/](http://fossies.org/dox/texmaker/)
- [Newest &#39;texmaker&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/texmaker)
    - [Forward/inverse search for Texmaker on OS X](http://tex.stackexchange.com/questions/9904/forward-inverse-search-for-texmaker-on-os-x)
    - [Configure forward search with Texmaker + SumatraPDF](http://tex.stackexchange.com/questions/37327/configure-forward-search-with-texmaker-sumatrapdf)
- [http://research.informagic.org/latex-tweaks](http://research.informagic.org/latex-tweaks)
- [http://linuxg.net/how-to-install-texmaker-4-1-on-ubuntu-13-10-13-04-12-10-12-04-linux-mint-16-15-14-13-pear-os-8-7-elementary-os-0-2-debian-wheezy-and-kwheezy/](http://linuxg.net/how-to-install-texmaker-4-1-on-ubuntu-13-10-13-04-12-10-12-04-linux-mint-16-15-14-13-pear-os-8-7-elementary-os-0-2-debian-wheezy-and-kwheezy/)
- [Texmakerのインストール](http://dtptools.blogspot.jp/2013/08/texmaker.html)
- [GateKeeperに引っかかった時の対処(OS X)](http://hnsn1202.hateblo.jp/entry/2013/04/09/193136)
- [TeXmakerで使用可能なファイル名について](http://fagahhe2645.hatenablog.com/entry/2013/02/07/231005)
