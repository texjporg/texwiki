---
title: "Texmaker"
url: "/Texmaker/"
date: 2013-06-02T22:55:35Z
bookCollapseSection: true
pukiwiki: "Texmaker"
---

# Texmaker

## [Texmaker](http://www.xm1math.net/texmaker/) (非推奨) → [TeXstudio](/TeXstudio/) を使用する {#h2b86e88}

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

### Texmaker 日本語化キット {#oed0ed19}

- Texmaker/インストール/Texmaker 日本語化キット

## ダウンロード/インストール {#q69dea61}

Texmaker/インストール を参照．

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

### かな漢字変換をする際に，文字と背景が黒く表示され，判読不能になる → [TeXstudio](/TeXstudio/) を使用する {#c698d89f}

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

Texmaker ではなく Texmaker の派生版の [TeXstudio](/TeXstudio/) を使用すれば OK です．<br>

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
- [http://linuxg.net/how-to-install-texmaker-4-1-on-ubuntu-13-10-13-04-12-10-12-04-linux-mint-16-15-14-13-pear-os-8-7-elementary-os-0-2-debian-wheezy-and-kwheezy/](http://linuxg.net/how-to-install-texmaker-4-1-on-ubuntu-13-10-13-04-12-10-12-04-linux-mint-16-15-14-13-pear-os-8-7-elementary-os-0-2-debian-wheezy-and-kwheezy/)
- [Texmakerのインストール](http://dtptools.blogspot.jp/2013/08/texmaker.html)
- [GateKeeperに引っかかった時の対処(OS X)](http://hnsn1202.hateblo.jp/entry/2013/04/09/193136)
- [TeXmakerで使用可能なファイル名について](http://fagahhe2645.hatenablog.com/entry/2013/02/07/231005)
