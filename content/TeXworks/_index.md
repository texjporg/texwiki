---
title: "TeXworks"
url: "/TeXworks/"
date: 2013-05-24T15:47:51Z
bookCollapseSection: true
pukiwiki: "TeXworks"
---

# TeXworks

TeXworks は TeX でドキュメントを作成するためのシンプルな統合環境です．OS X 用の優れた統合環境である [TeXShop](/TeXShop/) をモデルに，同様の環境を全てのシステム上で実現すべく，開発されています．[TeX Live](</TeX Live/>)[^1]，[W32TeX](/W32TeX/)，[MiKTeX](/MiKTeX/) 等の TeX ディストリビューションに標準で含まれています．メニューは日本語化されており，[SyncTeX](/SyncTeX/) もサポートしています．

奥村晴彦・黒木裕介「[［改訂第6版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/)」では，おすすめの統合環境に TeXworks が紹介されています．

<strong>目次</strong>

## 概要 {#e8144da8}

### Webサイト {#e62cfe01}

- [TeXworks 公式サイト](http://www.tug.org/texworks/)
    - [The texworks Archives](http://tug.org/pipermail/texworks/)
- [TeXworks 開発サイト](https://github.com/TeXworks)
    - [Wiki Pages](https://github.com/TeXworks/texworks/wiki)
        <!-- -[[TeXworks in Launchpad:https://launchpad.net/~texworks]] -->
        <!-- - -[[~texworks/packaging/win32 : changes:http://bazaar.launchpad.net/~texworks/packaging/win32/changes]] -->
        <!-- - -[[~texworks/packaging/trunk : changes:http://bazaar.launchpad.net/~texworks/packaging/trunk/changes]] -->
        <!-- -[[stloeffler/TeXworks - GitHub:https://github.com/stloeffler/TeXworks]] Unofficial fork of the TeXworks editor -->
        <!-- -[[Experimental Multi-Page PDF Viewer:https://github.com/stloeffler/TeXworks/tree/multipage-viewer]] -->

### 動作環境 {#ye220c29}

Microsoft Windows（XP 以降），OS X, GNU/Linux で利用できます．TeXworks はツールキットとして [Qt](/Qt/) を使用しているため，これら以外にも [Qt がサポートされているプラットフォーム](http://doc.qt.io/qt-5/supported-platforms.html)では動作すると思われます．

### License {#lccd03cb}

[GPLv2](https://github.com/TeXworks/texworks/blob/master/COPYING)<br>

### ダウンロード/インストール {#t28a6277}

[TeXworks/インストール](</TeXworks/インストール/>) を参照．

### 設定 {#q50d2378}

W32TeX で配布のものを使用する場合は，既に日本語用の設定がされています．そうでない場合に日本語を含む文書の組版をするためには，upLaTeX (ptex2pdf) または pLaTeX (ptex2pdf) を使うための設定を追加する必要があります．

[TeXworks/設定](</TeXworks/設定/>) を参照．

### 使い方 {#w7e215a3}

[TeXworks/使い方](</TeXworks/使い方/>) を参照．

<!-- **リリース情報 [#re7d3d85] -->
<!--  -->
<!-- [[News:http://www.tug.org/texworks/#News]] を参照．~ -->
<!--  -->
<!-- TeXworks 0.4.6 の Windows バイナリは Qt 5.1.0, Poppler 0.32.0 を使用してビルドされています．~ -->
<!-- TeXworks 0.4.5 の OS X バイナリは Qt 4.8.4, Poppler 0.22.1 を使用してビルドされています．~ -->

<!-- **ChangeLog [#j22176bb] -->
<!-- -[[コミットログ:https://github.com/TeXworks/texworks/commits/master]] -->
<!-- //-[[コミットログ (github, unofficial):https://github.com/stloeffler/TeXworks/commits/]] -->
<!-- //-[[コミットログ (github, unofficial):https://github.com/Sharpie/TeXworks/commits/]] -->
<!-- -[[コミットログ (github, multipage-viewer):https://github.com/stloeffler/TeXworks/commits/multipage-viewer]] -->
<!-- -[[[texlive] Index of /trunk/Master/tlpkg/texworks:http://www.tug.org/svn/texlive/trunk/Master/tlpkg/texworks/]] -->
<!-- - -[[log:http://www.tug.org/svn/texlive/trunk/Master/tlpkg/texworks/?view=log]] -->

## 文字コードの変換 {#e8ba5265}

TeXworks で使用する文字コードはデフォルトでは UTF-8 です．このため，Shift_JIS, ISO-2022-JP, EUC-JP の文字コードを使用しているファイルを開きたい場合は，事前にファイルの文字コードを UTF-8 に変換する必要があります．文字コードの変換には，各種テキストエディタの機能を使う方法と，コマンドラインから変換プログラムを使う方法があります．

テキストエディタの機能を使う場合は，[メモ帳で UTF-8 に変換する](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=496#p2654)方法や[サクラエディタ](</サクラエディタ/>)などのテキストエディタを使う方法があります．

コマンドラインからの場合，[W32TeX](/W32TeX/) には標準で文字コード変換プログラムである [nkf](http://sourceforge.jp/projects/nkf/) が含まれています．nkf の場所は以下のようにして確認できます．

- Windows PowerShell の場合

    ```
    PS > Get-Command nkf | Select-Object Path
    エイリアスを使用した場合は
    PS > gcm nkf | select path
    ```

```
Path
----
C:\w32tex\bin64\nkf.exe
C:\w32tex\bin\nkf.exe
```

- コマンドプロンプトの場合

    ```
    >where nkf
    C:\w32tex\bin64\nkf.exe
    C:\w32tex\bin\nkf.exe
    ```

使用方法は [UTF-8への変換](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=545)などを参照してください．

## 組み込みの PDF ビューアにゴシック体を表示させる {#t5313ebc}

<!-- -[[[tex-live] TeXworks on Windows versus Linux wrt embedding of	Japanese fonts:http://www.tug.org/pipermail/tex-live/2013-March/033076.html]] -->
<!-- TeXworks 0.4.5 で Poppler 0.22.2 を使用するようになったため日本語のフォントを埋め込んでいない場合に MS-Mincho で表示されるようになりました．~ -->
<!-- ゴシック体を表示したい場合は以下の方法があります．~ -->
<!-- -フォントを埋め込む -->
<!-- -バイナリエディタで TeXworks.exe を開いて msmincho を検索して msmincho を msgothic に修正して保存 (フォントを埋め込んでいない場合に明朝体が MS-Gothic で表示されるようになります) -->
<!-- -fontconfig で使用する代替フォントを設定して poppler-data を適切な場所に配置して fontconfig にリンクさせた Poppler を使用して TeXworks をビルド -->

Windows 版 TeXworks の PDF ビューアでゴシック体を表示する場合はフォントを埋め込む必要があります．

フォントを埋め込んでおくと，TeXworks の PDF viewer でゴシック体が表示できます．

<!-- フォント埋め込み設定の書かれた然るべきページにリンクするべきだと思う． -->

### TeX Live の場合 {#aa8923ee}

デフォルトでは和文フォントを埋め込みません．IPAexフォントを埋め込む場合は Windows PowerShell またはコマンドプロンプトから

```
kanji-config-updmap-sys ipaex
```

または

```
kanji-config-updmap ipaex
```

を実行します．

### W32TeX の場合 {#h6fd82bc}

デフォルトでは IPAexMincho・IPAexGothic を埋め込みます．upLaTeX (ptex2pdf) で PDF ファイルを作成した場合，自動的にフォントが埋め込まれるので特に設定する必要はありません．

フォントが埋め込まれていない場合は C:\w32tex\share\texmf-dist\fonts\map\dvipdfmx\base\cid-x.map の設定を確認します．

***

```
C:.
└─w32tex
    └─share
        └─texmf-dist
            └─fonts
                └─map
                    └─dvipdfmx
                        └─base
                            └─cid-x.map
```

***

C:\w32tex\share\texmf-dist\fonts\map\dvipdfmx\base\cid-x.map が以下のように記述されていれば IPAexフォントが埋め込まれます．

***

```
%%
%% upTeX examples
%%
```

```
urml     UniJIS-UTF16-H   ipaexm.ttf
urmlv    UniJIS-UTF16-V   ipaexm.ttf
ugbm     UniJIS-UTF16-H   ipaexg.ttf
ugbmv    UniJIS-UTF16-V   ipaexg.ttf
uprml-h  UniJIS-UTF16-H   ipaexm.ttf
uprml-v  UniJIS-UTF16-V   ipaexm.ttf
upgbm-h  UniJIS-UTF16-H   ipaexg.ttf
upgbm-v  UniJIS-UTF16-V   ipaexg.ttf
uprml-hq UniJIS-UCS2-H    ipaexm.ttf
upgbm-hq UniJIS-UCS2-H    ipaexg.ttf
```

***

cid-x.map の場所は Windows PowerShell またはコマンド プロンプトから以下のコマンドを実行すれば検索できます．

```
kpsewhich -progname=dvipdfmx -format=map cid-x.map
```

## 不具合 {#v0f00822}

- [Issues](https://github.com/TeXworks/texworks/issues)

### Windows の TeXworks 0.4.6 で ptex2pdf を使用してタイプセットでエラーが発生した場合にタイプセットの中止ボタンをクリックすると TeXworks が応答なしになる {#g55f5548}

Windows の TeXworks 0.4.6 で ptex2pdf を使用してタイプセットでエラーが発生した場合にタイプセットの中止ボタンをクリックすると TeXworks が応答なしになるようです．

[TeXworks 0.4.5](http://sourceforge.net/projects/texworks.mirror/files/) では問題は発生しませんでした．

Qt 5.1.0 でビルドされた TeXworks で問題が発生するようです．

TeXworks で使用されている Qt のバージョンは strings と grep で確認できます．

```
$ strings -a TeXworks.exe | grep Qt | grep version | grep build
Qt4 version      : 5.1.0 (build) /
```

Qt 5.3 でビルドすれば回避できるようです．

- [Could not interprete the stop sign from new TeXworks · Issue #2 · norbusan/ptex2pdf · GitHub](https://github.com/norbusan/ptex2pdf/issues/2)
- \[[texworks\] Problem: TeXworks 0.4.6 (official) crashes](http://tug.org/pipermail/texworks/2015q2/006265.html)
- Re: TeXworks がエラー時に停止させるとフリーズ ([forum:1563](https://okumuralab.org/tex/mod/forum/discuss.php?d=1563))
- [http://abenori.blogspot.com/2015/05/texworks-tex-forum-qt-5.html](http://abenori.blogspot.com/2015/05/texworks-tex-forum-qt-5.html)
- [http://abenori.blogspot.com/2015/05/tex-livetexworks.html](http://abenori.blogspot.com/2015/05/tex-livetexworks.html)
- [http://abenori.blogspot.com/2015/05/texworksmingw.html](http://abenori.blogspot.com/2015/05/texworksmingw.html)

### OS X の TeXworks 0.4.5 を使用すると TeXworks のプレビューが日本語表示できない {#n5c2ae8e}

OS X の TeXworks 0.4.5 を使用すると TeXworks のプレビューが日本語表示できないようです．

[TeXworks-0.4.6-Yosemite+-ja_JP](http://junk.greencherry.jp/macosx/texworks/) を使用してください．

- Mountain Lion で Texworks のプレビューが日本語表示できない ([forum:1082](https://okumuralab.org/tex/mod/forum/discuss.php?d=1082))
- [http://blogs.yahoo.co.jp/igproj_fusion/15780910.html#commentsArea](http://blogs.yahoo.co.jp/igproj_fusion/15780910.html#commentsArea)

### OS X の TeXworks 0.4.5 でバックスラッシュが円記号になってしまう {#f4128341}

OS X の TeXworks 0.4.5 で，文字コードが UTF-8 の場合に[バックスラッシュ](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が入力できず[円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) になってしまうようです．

- TeXworks 0.4.3でのバックスラッシュの入力(Mac) ([forum:674](https://okumuralab.org/tex/mod/forum/discuss.php?d=674))
- [backslash becomes yen · Issue #516 · TeXworks/texworks · GitHub](https://github.com/TeXworks/texworks/issues/516)

OS X の Qt アプリケーションで [バックスラッシュ](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換される[バグ](https://bugreports.qt.io/browse/QTBUG-10543)があるようです．Karabiner で Backslash が優先されるようにキーバインドを変更するといいようです．

<!-- - --  -->
<!-- &color(#595857,#DFDFDF){%%%　&color(#FF0000,#DFDFDF){●}; &color(#FFD700,#DFDFDF){●}; &color(#C9C9C9,#DFDFDF){●};　　　　　　　　　　　　　　　　　　　　　　　　　　　　''Karabiner''　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　%%%};&br; -->
<!-- 　　　　%%%&color(#F1F1F1,#0F7FFF){&color(#0F7FFF){[};　''Change Key''　&color(#0F7FFF){]};};&color(Black,White){[　''Key Repeat''　][　''Status Message''　][　''MenuBar''　][　''AXNotifier''　][　''Misc &amp; Uninstall''　]};%%%&br; -->
<!-- 　　　　&color(Black,#FAFAFA){[%%%&#x1f50d; Change Yen　　　　　　　　　　　　　　　　　　%%%]};　　☐ Show enabled only (1 item)　　　　　　　%%%[ ''↻'' ReloadXML ]%%%&br; -->
<!-- 　　　　remapping&br; -->
<!-- 　　　　&color(#595857){▼};For Japanese&br; -->
<!-- 　　　　　　&color(#595857){▼};Change Yen(￥) Key&br; -->
<!-- 　　　　　　　　　&color(White,#0F7FFF){☑}; JIS Yen(￥) to Backslash(＼)&br; -->
<!-- 　　　　　　　　　　　　(except virtual machine, X11, RDC)&br; -->
<!-- - --  -->

### かな漢字変換をする際に文字が白く表示され，ハイライトに隠れて見えにくくなる {#s5bfc44e}

TeXworks で \[編集\]-\[設定\] のエディタタブのエディタ全体のオプションで現在カーソルのある行をハイライトするにチェックを入れている場合，かな漢字変換の際に，文字が白く表示され，ハイライトに隠れて見えにくくなるという現象が発生します．これを回避するには，現在カーソルのある行をハイライトするのチェックをはずしてください．

<!-- - --  -->
<!-- &color(#00ADDD,#00ADDD){%%%　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(Black){''TeXworksの設定''};　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(#00ADDD,#00ADDD){%%%[ &color(Black){''？''}; ]%%%};&color(#DD4444,#DD4444){%%%[　&color(White){''×''};　]%%%};%%%};&br; -->
<!--  -->
<!-- 　　&color(Black,#EEEEEE){%%%[　全体　]%%%};''[　エディタ　]''&color(Black,#EEEEEE){%%%[　プレビュー　][　タイプセット　][　スクリプト　]%%%};&br; -->
<!-- 　　　　エディタのデフォルト&br; -->
<!-- 　　　　%%% メイリオ　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　''ᐯ''%%% %%%12 pt　[''⇕'']%%%&br; -->
<!-- 　　　　タブ幅:　　　　　　　　　　　　　　　　　　　　　　%%%32 px　　　　　　　　　　　　　　　　　[''⇕'']%%%&br; -->
<!-- 　　　　☐ 行番号表示　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ 行の折り返し&br; -->
<!-- 　　　　構文の色付け: &color(Black,#EEEEEE){[ LaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼]};&br; -->
<!-- 　　　　自動インデント: &color(Black,#EEEEEE){[ なし　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 ▼]};&br; -->
<!-- 　　　　引用符の入力支援 &color(Black,#EEEEEE){[ なし　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼]};&br; -->
<!-- 　　　　スペルチェッカの言語: &color(Black,#EEEEEE){[ English - UnitedStates (en_US)　　　　　　　　　　　　　　　　　　　　　　▼]};&br; -->
<!-- 　　　　エンコーディング: &color(Black,#EEEEEE){[ UTF-8　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼]};&br; -->
<!-- &br; -->
<!-- 　　　　エディタ全体のオプション&br; -->
<!-- 　　　　&color(black,yellow){''☐ 現在カーソルのある行をハイライトする　← チェックをはずす''};&br; -->
<!-- 　　　　☑ 自動補完を有効にする&br; -->
<!-- &br; -->
<!-- &br; -->
<!-- &br; -->
<!-- &br; -->
<!-- 　　　注意:これはデフォルトの設定です。設定を変更しても、すでに開いているウィンドウには影響しません。既存のウィンドウの設定を変更す&br; -->
<!-- 　　　るには、"フォーマット" メニューから設定をおこなってください&br; -->
<!-- - --  -->

#### ソースコードから修正する方法 (Windows) {#pb4e9c13}

- [Git](http://git-scm.com/) をインストールします．

- [Poppler](/Poppler/) をインストールします．

- [Hunspell](/Hunspell/) をインストールします．

- TeXworks のソースコードを取得します．

```
$ git clone https://github.com/TeXworks/texworks.git
$ pushd texworks
```

- TeXworks のソースコードの該当箇所を修正します．

[texworks/src/CompletingEdit.cpp](https://github.com/TeXworks/texworks/blob/master/src/CompletingEdit.cpp) の

```
currentLineFormat->setBackground(QColor::fromRgbF(.9 * bgR + .1 * fgR, .9 * bgG + .1 * fgG, .9 * bgB + .1 * fgB));
```

の部分を

```
currentLineFormat->setForeground(QColor::fromRgbF(.1 * bgR + .9 * fgR, .1 * bgG + .9 * fgG, .1 * bgB + .9 * fgB));
currentLineFormat->setBackground(QColor::fromRgbF(.9 * bgR + .1 * fgR, .9 * bgG + .1 * fgG, .9 * bgB + .1 * fgB));
```

のように QTextFormat::setForeground メソッドで QColor::fromRgbF(.1 \* bgR + .9 \* fgR, .1 \* bgG + .9 \* fgG, .1 \* bgB + .9 \* fgB) や Qt::darkBlue や Qt::black などの色を指定すれば回避できます．ただし，この修正方法ではカーソル行の文字が指定された色で表示されてしまい，色分けされなくなります．

- TeXworks をビルドします．

```
$ mkdir build
$ pushd build
$ cmake .. -G "MSYS Makefiles" -DWITH_LUA=OFF -DWITH_PYTHON=OFF -DZLIB_LIBRARY=C:/MinGW/bin/zlib1.dll -Dgp_cmd=C:/MinGW/bin/objdump.exe
$ make
$ ./src/TeXworks.exe &
```

上記の作業を行うことで，かな漢字変換をしてもハイライトに隠れずに表示されました．

- 現在カーソルのある行をハイライトするにチェックがはいっている場合にかな漢字変換をしてもハイライトに隠れずに表示されることを確認します．

- 日本語のフォントが埋め込まれていない PDF ファイルが組み込みビューアで表示できることを確認します．

- このままの状態ではエクスプローラーからダブルクリックして起動する場合に dll が見つからないといったエラーメッセージが表示されるので，TeXworks の実行に必要なライブラリ (DLL ファイル) の確認をします．objdump の他に [Dependency Walker](http://www.dependencywalker.com/) ([Dependency Walker 日本語化パッチ](http://blog.livedoor.jp/blackwingcat/archives/1000078.html)) を使って確認することも可能です．

```
$ objdump -p ./src/TeXworks.exe | grep "DLL Name" | sort | uniq
        DLL Name: KERNEL32.dll
        DLL Name: Qt5Core.dll
        DLL Name: Qt5Gui.dll
        DLL Name: Qt5Script.dll
        DLL Name: Qt5ScriptTools.dll
        DLL Name: Qt5Widgets.dll
        DLL Name: Qt5Xml.dll
        DLL Name: USER32.dll
        DLL Name: libgcc_s_dw2-1.dll
        DLL Name: libhunspell-1.3-0.dll
        DLL Name: libpoppler.dll
        DLL Name: libstdc++-6.dll
        DLL Name: msvcrt.dll
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

- C:\MinGW\bin と C:\Qt\Qt5.4.0\5.4\mingw491_32\bin に PATH を通せばエクスプローラーからダブルクリックして起動できるようになります．

## スクリプト {#m00b4a58}

- [stloeffler/TeXworks-scripts - GitHub](https://github.com/stloeffler/TeXworks-scripts)
    - [コミットログ](https://github.com/stloeffler/TeXworks-scripts/commits/)
- [TwScript Information Page](http://twscript.paulanorman.com/)

## TeX フォーラムの質問一覧 {#m9d42515}

- [texworks-processing fails.](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1275)
- [文書ファイルの作成について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1273)
- [Texworksを使用してdviをpdfに変換するときのエラーについて](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1213)
- [TeXworks の初期設定カスタマイズ(美文書第６版DVD)](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1182)
- [TeXLive2013 の動作](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1146)
- [インストーラーの初期化に失敗しました。](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1124)
- [Mountain Lion で Texworks のプレビューが日本語表示できない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1082)
- [TeXworksでMiKTeXを使う](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=905)
- [TeXworksで文字化けします。](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=886)
- [! LaTeX Error: Encoding scheme \`JY1' unknown.](https://okumuralab.org/tex/mod/forum/discuss.php?d=840)
- [Mac へのTeXworksのインストールについて](https://okumuralab.org/tex/mod/forum/discuss.php?d=790)
- [ptexencの文字コード自動判定とpdfplatex.batの設定](https://okumuralab.org/tex/mod/forum/discuss.php?d=788)
- [TeXworksの日本語の下の赤波線の削除](https://okumuralab.org/tex/mod/forum/discuss.php?d=785)
- [.synctex.gzファイルについて](https://okumuralab.org/tex/mod/forum/discuss.php?d=781)
- [TeXworks 0.4.3でのバックスラッシュの入力(Mac)](https://okumuralab.org/tex/mod/forum/discuss.php?d=674)
- [TeXworksで作成されたpdfファイルの文字化け](https://okumuralab.org/tex/mod/forum/discuss.php?d=625)
- [TeXWorksにWinTpicで作成した図を\inputできません。](https://okumuralab.org/tex/mod/forum/discuss.php?d=610)
- [ソースコードでUTF-8のBOM付きと不付きについて](https://okumuralab.org/tex/mod/forum/discuss.php?d=596)
- [TeXworksでタイプセットをクリックすると、Abort typesettingになってしまう](https://okumuralab.org/tex/mod/forum/discuss.php?d=556)
- [Texworksの赤の波線](https://okumuralab.org/tex/mod/forum/discuss.php?d=554)
- [Texworksでのタブの挿入](https://okumuralab.org/tex/mod/forum/discuss.php?d=553)
- [UTF-8への変換](https://okumuralab.org/tex/mod/forum/discuss.php?d=545)

## 関連リンク {#e07d54a5}

- [Newest &#39;texworks&#39; Questions - TeX - LaTeX - Stack Exchange](http://tex.stackexchange.com/questions/tagged/texworks)
    - [configure latexmk in Texworks 0.2.3](http://tex.stackexchange.com/questions/18936/configure-latexmk-in-texworks-0-2-3)
- [にっき&#9834;: TeXworksの検索結果](http://abenori.blogspot.com/search?q=TeXworks)
- [USBメモリ活用講座【実践編・TeXworksとupLaTeX】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/texworks.shtml)
- [TeXWorks で perl との連携](http://emath.s40.xrea.com/ydir/Wiki/index.php?TeXWorks%20%A4%C7%20perl%20%A4%C8%A4%CE%CF%A2%B7%C8)
- [TeX | 餅と輪](http://blog.mochiring.net/archives/tag/tex)
- [TeXっておいしいのかな？](http://d.hatena.ne.jp/filline/20120412/1334220540)
- [TeXworks のテンプレートに日本語の雛形を入れてみました](http://d.hatena.ne.jp/munepi/20110625/texworks)
- [TeXworks+JabRefで参考文献を表示させるときの注意点](http://d.hatena.ne.jp/motoso/comment?date=20110609)
- [jplain.bstで参考文献を表示させる．](http://brainmuscle.blog64.fc2.com/blog-entry-16.html)
- [TeXWorksでSyncTeXが使えないとき，まず確認すべき1つのこと](http://d.hatena.ne.jp/motoso/20110623/1308850895)
- [TeXworksで横置き(landscape)にするには](http://ameblo.jp/chilsok/entry-10745073896.html)
- [Tex使ってみました - 極楽せきゅあ日記](http://d.hatena.ne.jp/sonodam/20110330/p1)
- [Perl と texworks の連携について - Yahoo!知恵袋](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1343614933)
- [新しい TeX ドキュメント制作環境 TeXworks の紹介](http://d.hatena.ne.jp/munepi/20100819/texworks)
- [TeXworks for newcomers-and what's new for old hands - YouTube](http://www.youtube.com/watch?v=9-Z43CSPgM0)
- [TeXworks: Lowering the barrier to entry - YouTube](http://www.youtube.com/watch?v=f2i8ZgP7vUE)
- [TeXWorksでの色の変更](http://ysykimura.wordpress.com/2011/11/12/texworks%E3%81%A7%E3%81%AE%E8%89%B2%E3%81%AE%E5%A4%89%E6%9B%B4/)
- [http://chiebukuro.search.yahoo.co.jp/search?sort=16&p=TeXworks](http://chiebukuro.search.yahoo.co.jp/search?sort=16&p=TeXworks)
    - [アプリケーション（TeXworks）について](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10105181875)
    - [texについて質問です。](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1289463912)
    - [至急でお願いします。 「SyncTexデータがありません」となってしまい困っています...](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1089798695)
    - [texworksに日本語フォントを埋め込みたいんですが、解説サイトを見るとcid-x.mapというファイルが必要みたいなんですが、これが見つかりません。どうすればいいでしょうか。](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1496913364)

[^1]: TeXworks は Win32 版の TeX Live に収録されています．Cygwin, OS X, GNU/Linux の TeX Live には TeXworks は収録されていません．
