---
title: "SumatraPDF"
url: "/SumatraPDF/"
date: 2012-12-28T22:22:46Z
bookCollapseSection: true
pukiwiki: "SumatraPDF"
---

# SumatraPDF

## [SumatraPDF](http://www.sumatrapdfreader.org/) {#afa7a42e}

SumatraPDF は Windows 用のタブ切り替え型の軽量な PDF ビューアです．
ePub, MOBI, CHM, XPS, DjVu, CBZ, CBR などの形式も閲覧できます．
[SyncTeX](/SyncTeX/) への対応，ファイルの自動更新機能もあり，TeX のプレビューアに向いています．
PDF ファイルだけではなく PostScript ファイルも表示可能です．([Ghostscript](/Ghostscript/) が必要です．)

***

***

### インストール {#r04b7fad}

[SumatraPDF 公式サイト（日本語）](http://www.sumatrapdfreader.org/free-pdf-reader-ja.html) からリンクをたどり，インストーラをダウンロードします．
後はダブルクリックし指示に従えばインストールが完了します．

### 使い方（SyncTeX の利用） {#wd50e1d3}

[SyncTeX](/SyncTeX/) とは PDF ファイルと TeX ソースファイルの相互ジャンプを行うための機能です．
TeX エンジンが SyncTeX に対応しており（主要なエンジンは対応しています），またソースが -synctex=1 または -synctex=-1 オプションとともにコンパイルされている必要があります．（ソースファイルと同じフォルダに拡張子が .synctex のファイルができます．）
ジャンプはエディタ→ SumatraPDF（forward search）と SumatraPDF →エディタ（inverse search）の両方が可能です．

#### forward search {#m71d9172}

コマンドラインオプション (-forward-search &lt;texfile> &lt;linenumber>) を指定して forward search を行うことが可能です．

以下のエディタ・マクロ・プラグインは SumatraPDF で forward and inverse search が可能です．

■ フリーソフトウェア (オープンソースソフトウェア)

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [Texmaker](/Texmaker/)
- [Eclipse](/Eclipse/)
    - [TeXlipse](/TeXlipse/)
- [Emacs](/Emacs/)
    - [TeX mode](</Emacs/TeX mode/>)
    - [AUCTeX](/AUCTeX/)
    - [YaTeX](/YaTeX/)
- [Vim](/Vim/)
    - [tex.vim](/Vim/tex.vim/)
    - vimtex
    - [Vim-LaTeX](/Vim-LaTeX/)
- [Atom](/Atom/)
- [TeXnicCenter](/TeXnicCenter/)
- [Notepad++](/Notepad++/)
    - [NppExec](/NppExec/)
    - [jN](/jN/)
    - [Python Script](</Python Script/>)
- [サクラエディタ](</サクラエディタ/>)
    - [Typeset.js](</サクラエディタ/マクロ/#i861969f>)

#### fwdsumatrapdf <a id="fwdsumatrapdf"></a> {#n8da77e2}

forward search するときに SumatraPDF を前面に表示したくない場合は fwdsumatrapdf を使用します．
[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) を参照してください．

#### inverse search {#wfcdbef6}

inverse search は SumatraPDF の画面をダブルクリックすると実行されます．ただ，設定が必要です．

まずは，-synctex オプションとともにコンパイルされた PDF ファイルを開いてください．（正確には，.synctex ファイルが同じフォルダにある PDF ファイルを開いてください．）
SumatraPDF の \[☰\]-\[設定(S)\]-\[オプション(O)...\] の逆順検索コマンドラインの設定で inverse search で実行されるコマンドラインの設定を行います．
inverse search の設定はコマンドラインから -inverse-search オプションで指定することも可能です．
どのように設定するかはエディタ・マクロ・プラグインによって異なるのでそれぞれのマニュアルを見て設定してください．

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

- [http://www.sumatrapdfreader.org/manual-ja.html](http://www.sumatrapdfreader.org/manual-ja.html)
- [https://github.com/sumatrapdfreader/sumatrapdf/blob/master/src/ParseCommandLine.cpp](https://github.com/sumatrapdfreader/sumatrapdf/blob/master/src/ParseCommandLine.cpp)

### リンク {#pad542dc}

- [SumatraPDF 公式サイト](http://www.sumatrapdfreader.org/)
    - [News](http://www.sumatrapdfreader.org/news.html)
    - [ダウンロード](http://www.sumatrapdfreader.org/download-free-pdf-viewer-ja.html)
    - [SumatraPDF pre-release builds](http://www.sumatrapdfreader.org/prerelease.html) テスト用のプレリリースビルド版
- [sumatrapdfreader · GitHub](https://github.com/sumatrapdfreader)
    - [Home · sumatrapdfreader/sumatrapdf Wiki · GitHub](https://github.com/sumatrapdfreader/sumatrapdf/wiki)
        - [DDE commands ](https://github.com/sumatrapdfreader/sumatrapdf/wiki/DDE-commands)
- [Sumatra PDF Viewer forum](http://forums.fofou.org/sumatrapdf/)
    <!-- - -[[forward search fails in texlive 2011:http://forums.fofou.org/sumatrapdf/topic?id=2131346]] -->
    <!-- - -[[Forward search from Vim to sumatrapdf:http://forums.fofou.org/sumatrapdf/topic?id=2353338]] -->

- [Sumatora PDF のインストールと設定](http://blog.fujioizumi.verse.jp/?eid=230)

#### License {#f48c8095}

[GPLv3](https://github.com/sumatrapdfreader/sumatrapdf/blob/master/COPYING)

#### ChangeLog {#b67b5a28}

- [News](http://www.sumatrapdfreader.org/news.html)
- [コミットログ](https://github.com/sumatrapdfreader/sumatrapdf/commits/master)

#### 派生版・独自ビルド版 {#i2d3e037}

- [XhmikosR's Builds sumatrapdf](http://xhmikosr.1f0.de/sumatrapdf/)
- [SumatraPDF x86/x64 Optimized Builds](http://nikkhokkho.sourceforge.net/static.php?page=SumatraPDFOpt)
- [SumatraPDF 先読み対応バージョン](https://gist.github.com/miau/5277670)
- [PDFlite](http://www.pdflite.com/)
- [PortableApps.com](http://portableapps.com/) の [SumatraPDF Portable](http://portableapps.com/apps/office/sumatra_pdf_portable)
