---
title: "SumatraPDF"
url: "/SumatraPDF/"
date: 2012-12-28T22:22:46Z
bookCollapseSection: true
pukiwiki: "SumatraPDF"
---

# SumatraPDF

## [SumatraPDF](https://www.sumatrapdfreader.org/) {#afa7a42e}

SumatraPDF は Windows で動作するタブ切り替え型の軽量な PDF ビューアです．
eBook (ePub, MOBI), XPS, DjVu, CHM, Comic Book (CBZ, CBR) などの形式も閲覧できます．
[SyncTeX](/SyncTeX/) への対応，ファイルの自動更新機能もあり，TeX のプレビューアに向いています．
PDF ファイルだけではなく PostScript ファイルも表示可能です．
PostScript ファイルの表示には [Ghostscript](/Ghostscript/) が必要です．

***

***

### インストール {#r04b7fad}

[Download Sumatra PDF - a free reader](https://www.sumatrapdfreader.org/download-free-pdf-viewer.html) から Installer をダウンロードします．
64-bit Windows であれば 64-bit builds の Installer をダウンロードします．
後はダブルクリックし指示に従えばインストールが完了します．

### 使い方（SyncTeX の利用） {#wd50e1d3}

[SyncTeX](/SyncTeX/) とは PDF ファイルと TeX ソースファイルの相互ジャンプを行うための機能です．
TeX エンジンが SyncTeX に対応しており（主要なエンジンは対応しています），またソースが -synctex=1 または -synctex=-1 オプションとともにコンパイルされている必要があります．（ソースファイルと同じフォルダに拡張子が .synctex のファイルができます．）
ジャンプはエディタ→ SumatraPDF（forward search）と SumatraPDF →エディタ（inverse search）の両方が可能です．

#### forward search {#m71d9172}

コマンドラインオプション (-forward-search &lt;texfile> &lt;linenumber>) を指定して forward search を行うことが可能です．

以下の統合環境，テキストエディタ +（マクロ・プラグイン）は SumatraPDF で forward and inverse search が可能です．

■ フリーソフトウェア (オープンソースソフトウェア)

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [Texmaker](/Texmaker/)
- [TeXnicCenter](/TeXnicCenter/)
- [Visual Studio Code](</Visual Studio Code/>)
    - [LaTeX](</Visual Studio Code/LaTeX/>)
- [Atom](/Atom/)
    - [Atom/LaTeX](/Atom/LaTeX/)
- [Emacs](/Emacs/)
    - [TeX mode](</Emacs/TeX mode/>)
    - [AUCTeX](/AUCTeX/)
    - [YaTeX](/YaTeX/)
- [Vim](/Vim/)
    - [tex.vim](/Vim/tex.vim/)
    - [VimTeX](/VimTeX/)
    - [Vim-LaTeX](/Vim-LaTeX/)
- [Eclipse](/Eclipse/)
    - [TeXlipse](/TeXlipse/)
- [Notepad++](/Notepad++/)
    - [NppExec](/NppExec/)
    - [jN](/jN/)
- [サクラエディタ](</サクラエディタ/>)
    - [Typeset.js](</サクラエディタ/マクロ/#i861969f>)

#### fwdsumatrapdf <a id="fwdsumatrapdf"></a> {#n8da77e2}

forward search するときに SumatraPDF を前面に表示したくない場合は fwdsumatrapdf を使用します．
[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) を参照してください．

#### inverse search {#wfcdbef6}

inverse search は SumatraPDF の画面をダブルクリックすると実行されます．ただし，設定が必要です．

%APPDATA%\SumatraPDF\SumatraPDF-settings.txt に

```
EnableTeXEnhancements = false
```

と記述されている場合は逆順検索コマンドラインの設定が表示されません．

逆順検索コマンドラインの設定が表示されていない場合は \[☰\] &gt; \[設定(S)\] &gt; \[詳細設定(A)\] で %APPDATA%\SumatraPDF\SumatraPDF-settings.txt を開いて

```
EnableTeXEnhancements = true
```

に修正します．

あるいは，-synctex オプションとともにコンパイルされた PDF ファイルを開いてください．（正確には，.synctex ファイルが同じフォルダにある PDF ファイルを開いてください．）

SumatraPDF の \[☰\] &gt; \[設定(S)\] &gt; \[オプション(O)...\] の逆順検索コマンドラインの設定で inverse search で実行されるコマンドラインの設定を行います．

inverse search の設定はコマンドラインから -inverse-search オプションで指定することも可能です．

どのように設定するかは統合環境，テキストエディタ +（マクロ・プラグイン）によって異なるのでそれぞれのマニュアルを見て設定してください．

64-bit Windows での [TeXstudio](/TeXstudio/) であれば

```
"C:\Program Files (x86)\TeXstudio\texstudio.exe" "%f" -line %l
```

32-bit Windows での TeXstudio であれば

```
"C:\Program Files\TeXstudio\texstudio.exe" "%f" -line %l
```

となります．

#### コマンドラインオプション {#d9cff28c}

プレビューする場合に複数の SumatraPDF が起動するのを防止したい場合は -reuse-instance オプションを追加します．

- [https://www.sumatrapdfreader.org/manual.html](https://www.sumatrapdfreader.org/manual.html)
- [https://github.com/sumatrapdfreader/sumatrapdf/blob/master/src/ParseCommandLine.cpp](https://github.com/sumatrapdfreader/sumatrapdf/blob/master/src/ParseCommandLine.cpp)

### リンク {#pad542dc}

- [SumatraPDF 公式サイト](https://www.sumatrapdfreader.org/)
    - [News](https://www.sumatrapdfreader.org/news.html)
    - [Download](https://www.sumatrapdfreader.org/download-free-pdf-viewer.html)
    - [SumatraPDF pre-release builds](https://www.sumatrapdfreader.org/prerelease.html) テスト用のプレリリースビルド版
- [sumatrapdfreader · GitHub](https://github.com/sumatrapdfreader)
    - [Home · sumatrapdfreader/sumatrapdf Wiki · GitHub](https://github.com/sumatrapdfreader/sumatrapdf/wiki)
- [Sumatra Reader Discussion Forum](https://forum.sumatrapdfreader.org/)
- [MyTeXpert:SumatraPDF](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?SumatraPDF)
- [Sumatora PDF のインストールと設定](http://blog.fujioizumi.verse.jp/?eid=230)

#### License {#f48c8095}

[GPLv3](https://github.com/sumatrapdfreader/sumatrapdf/blob/master/COPYING)

#### ChangeLog {#b67b5a28}

- [News](https://www.sumatrapdfreader.org/news.html)
- [コミットログ](https://github.com/sumatrapdfreader/sumatrapdf/commits/master)
