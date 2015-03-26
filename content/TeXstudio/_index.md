---
title: "TeXstudio"
url: "/TeXstudio/"
date: 2015-01-23T06:33:30Z
bookCollapseSection: true
pukiwiki: "TeXstudio"
---

# TeXstudio

<!-- *[[TeXstudio:http://texstudio.sourceforge.net/]] → Qt 5 版の TeXstudio で日本語入力するとカーソルが文字の位置から右にずれる場合は高度なオプションの表示を ON にして詳細なエディタ設定からハック/回避策の最適なディスプレイオプションの自動選択を OFF にして描画モードを QCE（推奨） から Qt に変更する [#wc9679cf] -->

TeXstudio は [Texmaker](/Texmaker/) から派生[^1]した LaTeX 統合環境です．TeXstudio のエディタ部分は Texmaker とは異なり，[QCodeEdit](http://qcodeedit.org/) をベースにして改変したものを使用しています．PDF ビューアには [TeXworks](/TeXworks/) の PDF ビューアを使用しています．メニューは日本語化されており，[SyncTeX](/SyncTeX/) もサポートしています．

<img src="http://texstudio.sourceforge.net/images/texstudio128x128.png" alt="TeXstudio" style="float:right">

<!-- #ref(http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/splash.png,right,around,nolink,TeXstudio) -->

<strong>目次</strong>

## TeXstudio とは {#w233c0c1}

- [TeXstudio](http://texstudio.sourceforge.net/)
- [TeXstudio - A LaTeX Editor | SourceForge.net](http://sourceforge.net/projects/texstudio/)
- [TeXstudio - A LaTeX Editor / Wiki / Home](http://sourceforge.net/p/texstudio/wiki/)

### 動作環境 {#e7cc7bd5}

Windows, OS X, Linux<br>

### License {#od98a625}

[GPLv2](http://sourceforge.net/p/texstudio/hg/ci/tip/tree/utilities/COPYING)

QCodeEdit は [GPLv3](http://git.tuxfamily.org/qcodeedit/qce3.git?p=qcodeedit/qce3.git;a=blob;f=GPL.txt;hb=HEAD)

### リリース情報 {#xc0de645}

- [News](http://texstudio.sourceforge.net/#news)
- [http://sourceforge.net/p/texstudio/news/](http://sourceforge.net/p/texstudio/news/)
- [http://sourceforge.net/p/texstudio/hg/ref/default/tags/](http://sourceforge.net/p/texstudio/hg/ref/default/tags/)
- [https://twitter.com/texstudio](https://twitter.com/texstudio)

を参照．<br>

### ChangeLog {#u7f0ea72}

- [log](http://sourceforge.net/p/texstudio/hg/ci/tip/log/)
- [http://hg.code.sf.net/p/texstudio/hg/](http://hg.code.sf.net/p/texstudio/hg/)
- [CHANGELOG.txt](http://sourceforge.net/p/texstudio/hg/ci/tip/tree/utilities/CHANGELOG.txt)
- [http://anastashia.github.io/texstudio_jp_manual/#SECTIONNEW](http://anastashia.github.io/texstudio_jp_manual/#SECTIONNEW)
    <!-- -http://www.ohloh.net/p/texstudio/commits -->

<!-- **日本語化 [#ibfc5135] -->
<!-- -[[TeXstudioの日本語化:http://anastashia.blog.shinobi.jp/Entry/14/]] -->

### スクリーンショット {#u321c087}

> <table>
> <tbody>
> <tr><td style="background-color:#CCF">マルチカーソル</td><td style="background-color:#CCF">自動補完</td></tr>
> <tr><td><img src="http://texstudio.sourceforge.net/images/block-cursor.png" alt="Multi-Cursors"></td><td><img src="http://texstudio.sourceforge.net/images/autocompletion-help.png" alt="Auto completion"></td></tr>
> <tr><td style="background-color:#CCF">1000 を超える数学記号</td><td style="background-color:#CCF">ブックマーク</td></tr>
> <tr><td><img src="http://texstudio.sourceforge.net/images/symbols.png" alt="More than 1000 mathematical symbols"></td><td><img src="http://texstudio.sourceforge.net/images/bookmarks.png" alt="Bookmarks"></td></tr>
> <tr><td style="background-color:#CCF">リンク先のオーバーレイ表示</td><td style="background-color:#CCF">画像，表，数式アシスタント</td></tr>
> <tr><td><img src="http://texstudio.sourceforge.net/images/link-overlay.png" alt="Link overlay"></td><td><img src="http://texstudio.sourceforge.net/images/assistants.png" alt="Assistants for images,tables,formulas,..."></td></tr>
> <tr><td style="background-color:#CCF">画像ファイルのドラッグ &amp; ドロップ</td><td style="background-color:#CCF">表の整形</td></tr>
> <tr><td><img src="http://texstudio.sourceforge.net/images/dragdropimages.png" alt="Drag &amp;amp; drop support for images"></td><td><img src="http://texstudio.sourceforge.net/images/table-formating.png" alt="Table-formatting"></td></tr>
> </tbody>
> </table>
>

### TeXstudio UI 日本語訳用ファイル {#d46c6bb1}

- [TeXstudio UI 日本語訳用ファイル](https://github.com/anastashia/texstudio_jp_ui)

## ダウンロード/インストール {#f36a3b67}

TeXstudio/インストール を参照．<br>

## 注意点 {#g9d4fa21}

### OS X の TeXstudio で ptex2pdf が動作しない → ptex2pdf を version 0.6 以降に更新して ~/.bash_profile に export PATH=$PATH:/usr/texbin を追加する {#zfde7b69}

- [(mac) TexStudioでptex2pdfが動かない](http://tipsboardx.blogspot.jp/2014/06/mac-texstudioptex2pdf.html)

## 不具合 {#k30ccccc}

- [TeXstudio - A LaTeX Editor / Bugs](http://sourceforge.net/p/texstudio/bugs/)

### OS X の TeXstudio で，文字コードが UTF-8 の場合に Backslash (U+005C) が入力できず 円記号 (U+00A5) になってしまう → Karabiner で Backslash が優先されるようにキーバインドを変更する {#ffe2f4b8}

OS X の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです．→ [Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt.io/browse/QTBUG-10543)<br>
Karabiner で Backslash が優先されるようにキーバインドを変更するといいようです．<br>

***

<span style="color:#595857;background-color:#DFDFDF;"><ins>　<span style="color:#FF0000;background-color:#DFDFDF;">●</span> <span style="color:#FFD700;background-color:#DFDFDF;">●</span> <span style="color:#C9C9C9;background-color:#DFDFDF;">●</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>Karabiner</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<ins><span style="color:#F1F1F1;background-color:#0F7FFF;"><span style="color:#0F7FFF;">\[</span>　<strong>Change Key</strong>　<span style="color:#0F7FFF;">\]</span></span><span style="color:Black;background-color:White;">\[　<strong>Key Repeat</strong>　\]\[　<strong>Status Message</strong>　\]\[　<strong>MenuBar</strong>　\]\[　<strong>AXNotifier</strong>　\]\[　<strong>Misc &amp; Uninstall</strong>　\]</span></ins><br>
　　　　<span style="color:Black;background-color:#FAFAFA;">\[<ins>&#x1f50d; Change Yen　　　　　　　　　　　　　　　　　　</ins>\]</span>　　☐ Show enabled only (1 item)　　　　　　　<ins>\[ <strong>↻</strong> ReloadXML \]</ins><br>
　　　　remapping<br>
　　　　<span style="color:#595857;">▼</span>For Japanese<br>
　　　　　　<span style="color:#595857;">▼</span>Change Yen(￥) Key<br>
　　　　　　　　　<span style="color:White;background-color:#0F7FFF;">☑</span> JIS Yen(￥) to Backslash(＼)<br>
　　　　　　　　　　　　(except virtual machine, X11, RDC)<br>

***

### Qt 5 版の TeXstudio で日本語入力するとカーソルが文字の位置から右にずれる → 高度なオプションの表示を ON にして詳細なエディタ設定からハック/回避策の最適なディスプレイオプションの自動選択を OFF にして描画モードを QCE（推奨） から Qt に変更する {#ped67bdd}

Qt 5 版の TeXstudio で日本語入力するとカーソルが文字の位置から右にずれる場合は高度なオプションの表示を ON にして詳細なエディタ設定からハック/回避策の最適なディスプレイオプションの自動選択を OFF にして描画モードを QCE（推奨） から Qt に変更してください．<br>
Qt 4 版の TeXstudio では日本語入力するとカーソルが文字の位置から右にずれる現象は発生しませんでした．<br>

***

<span style="color:#3F43EF;background-color:#3F43EF;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXstudioの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#3F43EF;background-color:#3F43EF;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般　　　　　　　　　　　　　　外観<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

コマンド　　　　　　　　　　　　☑ 行変更の状態を表示　　　　　　　　　　　　　　　　　　　　☐ 空白を表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

ビルド　　　　　　　　　　　　　☑ 状態パネルを表示　　　　　　　　　　　　　　　　　　　　　　タブ幅:　<ins>4　　\[<strong>⇕</strong>\]</ins><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット　　　行番号を表示:　<span style="color:Black;background-color:#EEEEEE;"><ins>\[すべての行番号　　　　▼\]</ins></span>　　　　　　　　☑ 太いカーソル<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_latexmenus.png" alt="メニュー" width="37" height="37" style="float:left">

メニュー　　　　　　　　　　　　検索パネル<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_toolbars.png" alt="ツールバー" width="37" height="37" style="float:left">

ツールバー　　　　　　　　　　☐ 検索・置換パネルを共に閉じる<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

エディタ　　　　　　　　　　　　 ☑ 単語検索として単一行選択を使用<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_advancededitor.png" alt="詳細なエディタ設定" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">詳細なエディタ設定　　　</span>　　☑ 検索範囲を既存の選択部に制限<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示　　　　　　　 特別なオプション<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="カスタム強調表示" width="37" height="37" style="float:left">

カスタム強調表示　　　　　　　☑ 括弧の自動補完　　　　　　　　　　　　　　　　　　　 ☑ ツールチップとしてエディタ上のテキストにヘルプを表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

コマンドの補完　　　　　　　　　☑ マウスホイールによるズーム　　　　　　　　　　　　☑ ツールチップとしてエディタ上の式のプレビューを表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法　　　　　　　　　　　　　　　 ☑ なめらかなスクロール　　　　　　　　　　　　　　　　 ☑ 組み込みpdfビューワーでコマンドのヘルプを表示(texdoc)<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー　　　　　　　　　　　　☑ プレースホルダ前の開き括弧を上書き<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN　　　　　　　　　　　　　　　　☑ プレースホルダ後の閉括弧を上書き<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　行のワードラップ:　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ウィンドウ端で緩やかに行のワードラップを行う　　　　　　　　　　　　▼\]</ins></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　最大文字数:　　　　　　　　　　　　　　　　　<ins>80　　　　　　　　\[<strong>⇕</strong>\]</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　全てのファイルを自動保存:　　　　　　　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[しない　　　　　▼\]</ins></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 暗黙的に、保存したファイルを再読み込みして外部での変更を適用（アンドゥ／リドゥスタックを破棄）<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 記号をユニコード文字として挿入　　　　　　　　　　 ☐ 「Esc」キーで全画面表示モードを閉じることを無効化<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ ログ項目のクリック時にログマーカーを表示　　　　☑ ログの表示時にエラー行へ移動<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　コンテキストメニューからのスペルチェック:　　　　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[項目をコンテキストメニューへ直接追加　　　　　　　　　　　▼\]</ins></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　文書の構造パネル<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 構造ツリーに含まれるもののインデントを維持する<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　コンテキストメニューでの参照コマンド:　<ins>\ref</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　表の自動整形<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　特殊コマンド:　　　　　<ins>\hline,\cline,\intertext,\shortintertext,\toprule,\midrule,\bottomrule</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　特殊コマンドの位置:　<span style="color:Black;background-color:#EEEEEE;"><ins>\[改行の後ろ　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</ins></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ セルあたり1行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　追加の検索パス<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　Bibファイル:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　画像ファイル:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　Bi-Di（双方向表記）<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LRM(left-to-right mark)文字を自動的に挿入<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ ビジュアルコラムカーソルモード（右から左へ読むテキストで矢印キーの方向にカーソルを移動させる）<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　ハック/回避策<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ アクセント記号タイプ時に回避策を無効化（Mac OS Xのみ）<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:black;background-color:yellow;"><strong>☐ 最適なディスプレイオプションの自動選択 ← チェックをはずす</strong></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 文字幅のキャッシュを無効化<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 固定ピッチモードを無効化<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 描画された行のキャッシュを無効化<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:black;background-color:yellow;"><strong>描画モード:</strong></span> <span style="color:Black;background-color:#EEEEEE;">\[ Qt　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><span style="color:black;background-color:yellow;"><strong> ← Qt に変更する</strong></span><br>

<br>

　☑ 高度なオプションの表示

<br>

***

### 自動補完機能でキーワードを補完したあとでプレースホルダーに日本語入力して確定すると確定した日本語が二重に入力される → 高度なオプションの表示を ON にしてコマンドの補完のプレースホルダーを使用を OFF にする {#s17caeff}

自動補完機能でキーワードを補完したあとでプレースホルダーに日本語入力して確定すると確定した日本語が二重に入力されます．<br>

\begin{do とタイプして Enter を入力すると自動補完機能で以下のような状態になります．<br>

```
\begin{document}
	content...
\end{document}
```

この状態でプレースホルダー (ここでは content...) に日本語入力して確定すると確定した日本語が二重に入力されます．<br>

```
\begin{document}
	日本語日本語
\end{document}
```

高度なオプションの表示を ON にしてコマンドの補完のプレースホルダーを使用を OFF にすることで回避できます．<br>

***

<span style="color:#3F43EF;background-color:#3F43EF;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXstudioの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#3F43EF;background-color:#3F43EF;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般　　　　　　　　　　　　　　コマンドの補完<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

コマンド　　　　　　　　　　　　☑ LaTeXコマンド入力時に自動的に補完を開始　　　　　　　　　　　　　　　好みのコマンドセット:　<span style="color:Black;background-color:#EEEEEE;"><ins>\[典型的　　　　▼\]</ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

ビルド　　　　　　　　　　　　　☑ 大文字と小文字を区別する　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXコマンドの自動置換<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット　　　　☑ 最初の文字で区別　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ ツールチップヘルプ<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_latexmenus.png" alt="メニュー" width="37" height="37" style="float:left">

メニュー　　　　　　　　　　　　☑ 共通する接頭語の自動補完<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_toolbars.png" alt="ツールバー" width="37" height="37" style="float:left">

ツールバー　　　　　　　　　　☑ 非文字キャラクタを押すと選択したテキストを補完　　　　　　　　　　　　タブバーの大きさ　<ins>100&#x25;　　\[<strong>⇕</strong>\]</ins><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

エディタ　　　　　　　　　　　　 <span style="color:black;background-color:yellow;"><strong>☐ プレースホルダーを使用 ← チェックをはずす</strong></span>　　　　　　　　　　　　　　☑ プレースホルダーを表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_advancededitor.png" alt="詳細なエディタ設定" width="37" height="37" style="float:left">

詳細なエディタ設定　　　　　次の補完ファイルを使用:<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="カスタム強調表示" width="37" height="37" style="float:left">

カスタム強調表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">コマンドの補完　　　　　　</span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN<br>

<br>

<br>

<br>

<br>

<br>

　☑ 高度なオプションの表示

<br>

***

### W32TeX を使用して \usepackage{mathptmx} で \sum を使用した場合に組み込みの PDF ビューアで表示されない → TeX Live を使用するまたは dvipdfmx.exe -f dlbase14.map %.dvi を設定してフォントを埋め込む {#ge309e14}

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

を記述してください．

PDF ファイルのフォントの埋め込みについては

- [PDFの作り方#フォントの埋め込み設定](</PDFの作り方/#z0e1001a>)

を参照してください．

## 文字コードの変換 {#v4ac40ab}

TeXstudio で使用する文字コードはデフォルトでは UTF-8 です．<br>
Shift_JIS, ISO-2022-JP, EUC-JP の文字コードを使用しているファイルを UTF-8 で表示する場合はファイルの文字コードを UTF-8 に変換する必要があります．<br>
[W32TeX](/W32TeX/) には，標準で文字コード変換プログラムである [nkf](http://sourceforge.jp/projects/nkf/) が含まれています．<br>
nkf の場所は以下のようにして確認できます．<br>

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

- コマンド プロンプトの場合

    ```
    >where nkf
    C:\w32tex\bin64\nkf.exe
    C:\w32tex\bin\nkf.exe
    ```

使用方法は [UTF-8への変換](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=545) などを参照してください．<br>
Windows PowerShell またはコマンド プロンプトに慣れていない場合は，[メモ帳で UTF-8 に変換する](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=496#p2654)方法もあります．<br>
メモ帳で UTF-8 に変換した場合は BOM が付加されます．<br>
nkf やメモ帳以外の変換ツールを使用したい場合は[サクラエディタ](</サクラエディタ/>)などのエディタを使っても OK です．<br>

## 組み込みの PDF ビューアに日本語を表示させる {#o84f3d5c}

### OS X の場合 {#ued437e7}

- [TeXstudioの組み込みPDFビューアで日本語を表示させる(Mac)](http://hayate.me/archives/31)

OS X の TeXstudio で組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /usr/local/share/poppler に配置します．<br>
poppler-data は [Poppler の公式サイト](http://poppler.freedesktop.org/)から入手できます．<br>
[TeXworks](/TeXworks/) をインストールしている場合は TeXworks に含まれている poppler-data を /usr/local/share/poppler にコピーして使用することもできます．<br>
poppler-data を配置する場所は

```
$ strings -a /Applications/texstudio.app/Contents/Frameworks/libpoppler.??.dylib | grep poppler
@executable_path/../Frameworks/libpoppler.??.dylib
/usr/local/share/poppler
Unknown CID font collection, please report to poppler bugzilla.
%Produced by poppler pdftops version: {0:s} (http://poppler.freedesktop.org)
```

で調べることができます．<br>
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

C:\w32tex\share\texmf-dist\fonts\map\dvipdfmx\base\cid-x.map が以下のように記述されていれば IPAexフォントが埋め込まれます．<br>

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

Windows の TeXstudio の組み込みの PDF ビューアは日本語のフォントを埋め込んでいない PDF ファイルの場合は MS-Mincho で表示されます．<br>

### Linux の TeXstudio の場合 {#s6cbe6f1}

[代替フォントの設定](/Evince/#substitute) を参照して代替フォントの設定をします．

## 設定 {#d18b43a8}

[TeXstudio/設定](</TeXstudio/設定/>) を参照．<br>

## 使い方 {#ed1259ec}

[TeXstudio/使い方](</TeXstudio/使い方/>) を参照．<br>

## 関連リンク {#b0ba1b9b}

- [Newest &#39;texstudio&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/texstudio)
- [August 2013: Project of the Month: TeXstudio  |  SourceForge Community Blog](http://sourceforge.net/blog/august-2013-project-of-the-month-texstudio/)
- [http://research.informagic.org/latex-tweaks](http://research.informagic.org/latex-tweaks)
- [http://www.okomeda.net/?TeXStudio](http://www.okomeda.net/?TeXStudio)
- [TexStudioで最初にする設定](http://kamiwo-koete.hatenablog.jp/entry/2014/12/30/101759)
- [TeX Live と TeXstudio でサクッと Windows 上に LaTeX 環境を構築](http://yksris.hatenablog.com/entry/2014/10/01/143744)
- [LyX、TeXstudio、Texmakerを少しだけ試用](http://blawat2015.no-ip.com/~mieki256/diary/201409211.html)
- [TexStudioのインストール(Windows7)](http://ch.nicovideo.jp/hetare0914/blomaga/ar524833)
- [Failed to read .bib file from TeXstudio (Win7 64bit) -> absolute path worked](http://naturesflyers.blogspot.jp/2014/01/failed-to-read-bib-file-from-texstudio.html)
- [Texmakerから派生したTeXStudioがイイ感じだった](http://moyashiki.hateblo.jp/entry/2014/01/08/134632)
- [texstudioのプレビューに日本語が表示されない件](http://cocu.hatenablog.com/entry/2013/03/27/113754)
- [TeXstudio による LaTeX 文書の最終検査](http://blog.fujioizumi.verse.jp/?eid=135)
- [日々徒然思うこと TeX](http://anastashia.blog.shinobi.jp/Category/5/)
- [TeXの問題点を解決する開発環境を目指す！開発者に聞く：高機能なTeX・LaTeXコードエディタTeXstudio編](http://sourceforge.jp/magazine/12/07/16/0613248)

[^1]: [Wikipedia.ja:フォーク\_(ソフトウェア開発)](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF_%28%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%96%8B%E7%99%BA%29)
