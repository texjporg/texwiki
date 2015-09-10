---
title: "TeXstudio"
url: "/TeXstudio/"
date: 2015-01-23T06:33:30Z
bookCollapseSection: true
pukiwiki: "TeXstudio"
---

# TeXstudio

## [TeXstudio](http://www.texstudio.org/) {#wc9679cf}

<!-- SourceForge が長期間落ちているため変わったっぽい？ -->
<!-- 旧 URL は http://texstudio.sourceforge.net/ -->
<!-- 以下，解説中に出てくる SourceForge の URL は未検証 -->

TeXstudio は [Texmaker](/Texmaker/) から派生[^1]した LaTeX 統合環境です．<br>
TeXstudio のエディタ部分は Texmaker とは異なり，[QCodeEdit](http://qcodeedit.org/) をベースにして改変したものを使用しています．<br>
PDF ビューアには [TeXworks](/TeXworks/) の PDF ビューアを使用しています．メニューは日本語化されており，[SyncTeX](/SyncTeX/) もサポートしています．<br>

<strong>目次</strong>

### Webサイト {#w233c0c1}

- [TeXstudio - A LaTeX Editor | SourceForge.net](http://sourceforge.net/projects/texstudio/)
- [TeXstudio - A LaTeX Editor / Wiki / Home](http://sourceforge.net/p/texstudio/wiki/)

### 動作環境 {#e7cc7bd5}

Windows, OS X, Linux

### License {#od98a625}

[GPLv2](http://hg.code.sf.net/p/texstudio/hg/file/tip/utilities/COPYING)

QCodeEdit は [GPLv3](http://git.tuxfamily.org/qcodeedit/qce3.git?p=qcodeedit/qce3.git;a=blob;f=GPL.txt;hb=HEAD)

### リリース情報 {#xc0de645}

- [News](http://texstudio.sourceforge.net/#news)
- [http://sourceforge.net/p/texstudio/news/](http://sourceforge.net/p/texstudio/news/)
- [http://sourceforge.net/p/texstudio/hg/ref/default/tags/](http://sourceforge.net/p/texstudio/hg/ref/default/tags/)
- [https://twitter.com/texstudio](https://twitter.com/texstudio)

を参照．

### ダウンロード/インストール {#f36a3b67}

TeXstudio/インストール を参照．

### 設定 {#d18b43a8}

[TeXstudio/設定](</TeXstudio/設定/>) を参照．

### 使い方 {#ed1259ec}

[TeXstudio/使い方](</TeXstudio/使い方/>) を参照．

### ChangeLog {#u7f0ea72}

- [http://hg.code.sf.net/p/texstudio/hg/](http://hg.code.sf.net/p/texstudio/hg/)
- [http://sourceforge.net/p/texstudio/hg/ci/tip/log/](http://sourceforge.net/p/texstudio/hg/ci/tip/log/)
- [http://hg.code.sf.net/p/texstudio/hg/file/tip/utilities/CHANGELOG.txt](http://hg.code.sf.net/p/texstudio/hg/file/tip/utilities/CHANGELOG.txt)
- [http://sourceforge.net/p/texstudio/hg/ci/tip/tree/utilities/CHANGELOG.txt](http://sourceforge.net/p/texstudio/hg/ci/tip/tree/utilities/CHANGELOG.txt)
- [http://anastashia.github.io/texstudio_jp_manual/#SECTIONNEW](http://anastashia.github.io/texstudio_jp_manual/#SECTIONNEW)
    <!-- -http://www.ohloh.net/p/texstudio/commits -->

<!-- **日本語化 [#ibfc5135] -->
<!-- -[[TeXstudioの日本語化:http://anastashia.blog.shinobi.jp/Entry/14/]] -->

### TeXstudio UI 日本語訳用ファイル {#d46c6bb1}

- [TeXstudio UI 日本語訳用ファイル](https://github.com/anastashia/texstudio_jp_ui)

## 注意点 {#g9d4fa21}

### OS X の TeXstudio で ptex2pdf が動作しない {#zfde7b69}

&#x7e;/.bash_profile に

```
export PATH=$PATH:/Library/TeX/texbin
```

を追加する必要があります．

- [(mac) TexStudioでptex2pdfが動かない](http://tipsboardx.blogspot.jp/2014/06/mac-texstudioptex2pdf.html)

## 不具合 {#k30ccccc}

- [TeXstudio - A LaTeX Editor / Bugs](http://sourceforge.net/p/texstudio/bugs/)

### Qt 5 版の TeXstudio で日本語入力するとカーソルが文字の位置からずれたり日本語が重なって表示されたりする {#ped67bdd}

Qt 5 版の TeXstudio では，日本語を入力するとカーソルが文字の位置からずれたり日本語が重なって表示されたりすることがあります．<br>
高度なオプションの表示を ON にして詳細なエディタ設定からハック/回避策の最適なディスプレイオプションの自動選択を OFF にして描画モードを QCE（推奨） から Qt に変更してください．<br>

なお，Qt 4 版の TeXstudio では，描画モードが QCE（推奨）の場合でも日本語入力するとカーソルが文字の位置からずれたり日本語が重なって表示されたりする現象は発生しませんでした．<br>

<!-- - --  -->
<!-- &color(#3F43EF,#3F43EF){%%%　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(Black){''TeXstudioの設定''};　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(#3F43EF,#3F43EF){%%%[ &color(Black){''？''}; ]%%%};&color(#DD4444,#DD4444){%%%[　&color(White){''×''};　]%%%};%%%};&br; -->
<!--  -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png,left,around,nolink,37x37,一般) -->
<!-- 一般　　　　　　　　　　　　　　外観&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png,left,around,nolink,37x37,コマンド) -->
<!-- コマンド　　　　　　　　　　　　☑ 行変更の状態を表示　　　　　　　　　　　　　　　　　　　　☐ 空白を表示&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png,left,around,nolink,37x37,ビルド) -->
<!-- ビルド　　　　　　　　　　　　　☑ 状態パネルを表示　　　　　　　　　　　　　　　　　　　　　　タブ幅:　%%%4　　[''⇕'']%%%&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png,left,around,nolink,37x37,キーボードショートカット) -->
<!-- キーボードショートカット　　　行番号を表示:　&color(Black,#EEEEEE){%%%[すべての行番号　　　　▼]%%%};　　　　　　　　☑ 太いカーソル&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_latexmenus.png,left,around,nolink,37x37,メニュー) -->
<!-- メニュー　　　　　　　　　　　　検索パネル&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_toolbars.png,left,around,nolink,37x37,ツールバー) -->
<!-- ツールバー　　　　　　　　　　☐ 検索・置換パネルを共に閉じる&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png,left,around,nolink,37x37,エディタ) -->
<!-- エディタ　　　　　　　　　　　　 ☑ 単語検索として単一行選択を使用&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_advancededitor.png,left,around,nolink,37x37,詳細なエディタ設定) -->
<!-- &color(Black,#DAEAFF){詳細なエディタ設定　　　};　　☑ 検索範囲を既存の選択部に制限&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png,left,around,nolink,37x37,構文の強調表示) -->
<!-- 構文の強調表示　　　　　　　 特別なオプション&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png,left,around,nolink,37x37,カスタム強調表示) -->
<!-- カスタム強調表示　　　　　　　☑ 括弧の自動補完　　　　　　　　　　　　　　　　　　　 ☑ ツールチップとしてエディタ上のテキストにヘルプを表示&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png,left,around,nolink,37x37,コマンドの補完) -->
<!-- コマンドの補完　　　　　　　　　☑ マウスホイールによるズーム　　　　　　　　　　　　☑ ツールチップとしてエディタ上の式のプレビューを表示&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png,left,around,nolink,37x37,文法) -->
<!-- 文法　　　　　　　　　　　　　　　 ☑ なめらかなスクロール　　　　　　　　　　　　　　　　 ☑ 組み込みpdfビューワーでコマンドのヘルプを表示(texdoc)&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png,left,around,nolink,37x37,プレビュー) -->
<!-- プレビュー　　　　　　　　　　　　☑ プレースホルダ前の開き括弧を上書き&br; -->
<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png,left,around,nolink,37x37,SVN) -->
<!-- SVN　　　　　　　　　　　　　　　　☑ プレースホルダ後の閉括弧を上書き&br; -->
<!-- &br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　行のワードラップ:　　　　　　　　　　　　　　&color(Black,#EEEEEE){%%%[ウィンドウ端で緩やかに行のワードラップを行う　　　　　　　　　　　　▼]%%%};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　最大文字数:　　　　　　　　　　　　　　　　　%%%80　　　　　　　　[''⇕'']%%%&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　全てのファイルを自動保存:　　　　　　　　&color(Black,#EEEEEE){%%%[しない　　　　　▼]%%%};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 暗黙的に、保存したファイルを再読み込みして外部での変更を適用（アンドゥ／リドゥスタックを破棄）&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 記号をユニコード文字として挿入　　　　　　　　　　 ☐ 「Esc」キーで全画面表示モードを閉じることを無効化&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ ログ項目のクリック時にログマーカーを表示　　　　☑ ログの表示時にエラー行へ移動&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　コンテキストメニューからのスペルチェック:　　　　　&color(Black,#EEEEEE){%%%[項目をコンテキストメニューへ直接追加　　　　　　　　　　　▼]%%%};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　文書の構造パネル&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 構造ツリーに含まれるもののインデントを維持する&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　コンテキストメニューでの参照コマンド:　%%%\ref%%%&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　表の自動整形&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　特殊コマンド:　　　　　%%%\hline,\cline,\intertext,\shortintertext,\toprule,\midrule,\bottomrule%%%&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　特殊コマンドの位置:　&color(Black,#EEEEEE){%%%[改行の後ろ　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼]%%%};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ セルあたり1行&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　追加の検索パス&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　Bibファイル:&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　画像ファイル:&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　Bi-Di（双方向表記）&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LRM(left-to-right mark)文字を自動的に挿入&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ ビジュアルコラムカーソルモード（右から左へ読むテキストで矢印キーの方向にカーソルを移動させる）&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　ハック/回避策&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ アクセント記号タイプ時に回避策を無効化（Mac OS Xのみ）&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(black,yellow){''☐ 最適なディスプレイオプションの自動選択 ← チェックをはずす''};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 文字幅のキャッシュを無効化&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 固定ピッチモードを無効化&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 描画された行のキャッシュを無効化&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(black,yellow){''描画モード:''}; &color(Black,#EEEEEE){[ Qt　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼]};&color(black,yellow){'' ← Qt に変更する''};&br; -->
<!-- &br; -->
<!-- 　☑ 高度なオプションの表示 -->
<!-- &br; -->
<!-- - --  -->

### OS X の TeXstudio で，文字コードが UTF-8 の場合に Backslash (U+005C) が入力できず 円記号 (U+00A5) になってしまう {#ffe2f4b8}

OS X の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです．<br>
Karabiner で Backslash が優先されるようにキーバインドを変更するといいようです．<br>
また、IMEソフトのgoogle日本語入力では文字入力時に円記号をBackslashに変更するオプションがあります. <br>
これを有効にするとTeXstudioのテキストフィールドにはBackslashが入力されますが、実際には正しくBackslashの文字コードが送られないようです. <br>
そのためTeXstudioがTeXコマンドを認識できず、自動補完機能が正常に機能しません. <br>
以上からgoogle日本語入力を使用する際もKarabinerを併用する必要があります. <br>

- [Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt.io/browse/QTBUG-10543)
- [Macで円記号の代わりにバックスラッシュをデフォルトにする](http://www.hsakurai.com/entry/2015/08/26/222753)

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

### W32TeX を使用して \usepackage{mathptmx} で \sum を使用した場合に組み込みの PDF ビューアで表示されない {#ge309e14}

W32TeX を使用して \usepackage{mathptmx} で \sum を使用した場合に組み込みの PDF ビューアで表示されません．<br>
TeX Live では表示されます．<br>

```
dvipdfmx.exe -f dlbase14.map %.dvi
```

を設定してフォントを埋め込めば表示されるようになります．<br>
通常はフォントを埋め込まない設定にしておきたい場合は，TeX ファイルのプリアンブルに

```
\AtBeginDvi{\special{pdf:mapfile dlbase14.map}}
```

を記述してください．<br>

PDF ファイルのフォントの埋め込みについては

- [PDFの作り方#フォントの埋め込み設定](</PDFの作り方/#z0e1001a>)

を参照してください．<br>

## 文字コードの変換 {#v4ac40ab}

TeXstudio で使用する文字コードはデフォルトでは UTF-8 です．
このため，Shift_JIS, ISO-2022-JP, EUC-JP の文字コードを使用しているファイルを開きたい場合は，事前にファイルの文字コードを UTF-8 に変換する必要があります．
文字コードの変換には，各種テキストエディタの機能を使う方法と，コマンドラインから変換プログラムを使う方法があります．

- テキストエディタの機能を使う場合は，[メモ帳で UTF-8 に変換する](https://okumuralab.org/tex/mod/forum/discuss.php?d=496%23p2654)方法や[サクラエディタ](</サクラエディタ/>)などのテキストエディタを使う方法があります．
- コマンドラインからの場合，文字コード変換プログラムである [nkf](/nkf/) が利用できます．

## 組み込みの PDF ビューアに日本語を表示させる {#o84f3d5c}

### OS X の場合 {#ued437e7}

- [TeXstudioの組み込みPDFビューアで日本語を表示させる(Mac)](http://hayate.me/archives/31)

OS X の TeXstudio で組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /usr/local/share/poppler に配置します．<br>
poppler-data は [Poppler の公式サイト](http://poppler.freedesktop.org/)から入手できます．<br>
[TeXworks](/TeXworks/) をインストールしている場合は TeXworks に含まれている poppler-data を /usr/local/share/poppler にコピーして使用することもできます．<br>

poppler-data を配置する場所は strings と grep で調べることができます．<br>

```
$ strings -a /Applications/texstudio.app/Contents/Frameworks/libpoppler.??.dylib | grep poppler
@executable_path/../Frameworks/libpoppler.??.dylib
/usr/local/share/poppler
Unknown CID font collection, please report to poppler bugzilla.
%Produced by poppler pdftops version: {0:s} (http://poppler.freedesktop.org)
```

この場合は /usr/local/share/poppler が poppler-data を配置するディレクトリになります．<br>
コマンドラインから poppler-data を /usr/local/share/poppler に配置する場合は以下のように実行します．<br>

```
$ brew install poppler
```

または

```
$ cd ~
$ curl -O http://poppler.freedesktop.org/poppler-data-0.4.7.tar.gz
$ tar xvf poppler-data-0.4.7.tar.gz
$ sudo mkdir -p /usr/local/share/poppler
$ sudo cp -pR ~/poppler-data-0.4.7/* /usr/local/share/poppler
```

***

```
/
└─usr/
    └─local/
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

## 組み込みの PDF ビューアにゴシック体を表示させる {#j1641579}

Windows 版 TeXstudio の PDF ビューアでゴシック体を表示する場合はフォントを埋め込む必要があります．<br>

### TeX Live の場合 {#xf7e038f}

デフォルトでは和文フォントを埋め込みません．<br>
IPAexフォントを埋め込む場合は Windows PowerShell またはコマンド プロンプトから

```
kanji-config-updmap-sys ipaex
```

または

```
kanji-config-updmap ipaex
```

を実行します．<br>

### W32TeX の場合 {#y0816396}

デフォルトでは IPAexMincho・IPAexGothic を埋め込みます．<br>
フォントが埋め込まれていない場合は C:\w32tex\share\texmf-dist\fonts\map\dvipdfmx\base\cid-x.map の設定を確認します．<br>

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

## 組み込みの PDF ビューアで日本語を表示するために使用される代替フォント {#u9344b03}

### Windows の TeXstudio の場合 {#kc4e2fb3}

Windows の TeXstudio の組み込みの PDF ビューアは日本語のフォントを埋め込んでいない PDF ファイルの場合は MS-Mincho で表示されます．

### Linux の TeXstudio の場合 {#s6cbe6f1}

[代替フォントの設定](/Evince/#substitute) を参照して代替フォントの設定をします．

## 関連リンク {#b0ba1b9b}

- [Newest &#39;texstudio&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/texstudio)
- [August 2013: Project of the Month: TeXstudio  |  SourceForge Community Blog](http://sourceforge.net/blog/august-2013-project-of-the-month-texstudio/)
- [http://research.informagic.org/latex-tweaks](http://research.informagic.org/latex-tweaks)
- [http://www.okomeda.net/?TeXStudio](http://www.okomeda.net/?TeXStudio)
- [&#x5b;雑記&#x5d;Mac OS YosemiteへのTeX環境の導入(含TeXStudio) | fenrir's memorandum](http://karlsnautr.blogspot.jp/2015/05/mac-os-yosemitetextexstudio.html)
- [TexStudioで最初にする設定](http://kamiwo-koete.hatenablog.jp/entry/2014/12/30/101759)
- [TeX Live と TeXstudio でサクッと Windows 上に LaTeX 環境を構築](http://yksris.hatenablog.com/entry/2014/10/01/143744)
- [LyX、TeXstudio、Texmakerを少しだけ試用](http://blawat2015.no-ip.com/~mieki256/diary/201409211.html)
- [TexStudioのインストール(Windows7)](http://ch.nicovideo.jp/hetare0914/blomaga/ar524833)
- [Failed to read .bib file from TeXstudio (Win7 64bit) -> absolute path worked](http://naturesflyers.blogspot.jp/2014/01/failed-to-read-bib-file-from-texstudio.html)
- [Texmakerから派生したTeXStudioがイイ感じだった](http://moyashiki.hateblo.jp/entry/2014/01/08/134632)
- [texstudioのプレビューに日本語が表示されない件](http://cocu.hatenablog.com/entry/2013/03/27/113754)
- [TeXstudio による LaTeX 文書の最終検査](http://blog.fujioizumi.verse.jp/?eid=135)
- [日々徒然思うこと TeX](http://anastashia.blog.shinobi.jp/Category/5/)
- [TeXの問題点を解決する開発環境を目指す！開発者に聞く：高機能なTeX・LaTeXコードエディタTeXstudio編](http://osdn.jp/magazine/12/07/16/0613248)

[^1]: [Wikipedia.ja:フォーク\_(ソフトウェア開発)](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF_%28%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%96%8B%E7%99%BA%29)
