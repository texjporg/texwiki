---
title: "SumatraPDF"
url: "/SumatraPDF/"
date: 2012-12-28T22:22:46Z
bookCollapseSection: true
pukiwiki: "SumatraPDF"
---

# SumatraPDF

## [SumatraPDF](http://blog.kowalczyk.info/software/sumatrapdf/) {#afa7a42e}

<img src="http://sumatrapdf.googlecode.com/svn/trunk/gfx/SumatraPDF-256x256x32.png" alt="SumatraPDF" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## SumatraPDF とは {#td9ee2f0}

SumatraPDF は PDF, ePub, MOBI, CHM, XPS, DjVu, CBZ, CBR リーダーです．<br>
SyncTeX に対応しています．<br>
ファイルの自動更新機能もあります．<br>
[Adobe Reader](</Adobe Reader/>) よりも TeX のプレビューアに向いています．<br>
PDF ファイルだけではなく PostScript ファイルも表示可能です．([Ghostscript](/Ghostscript/) が必要です．)<br>
プレビューする場合に複数の SumatraPDF が起動するのを防止したい場合は -reuse-instance オプションを追加します．<br>
forward search を行う場合は -forward-search &lt;texfile> &lt;linenumber> オプションを追加します．<br>

- [SumatraPDF 公式サイト](http://blog.kowalczyk.info/software/sumatrapdf/)
    - [News](http://blog.kowalczyk.info/software/sumatrapdf/news.html)
    - [ダウンロード](http://blog.kowalczyk.info/software/sumatrapdf/download-free-pdf-viewer-ja.html)
    - [SumatraPDF pre-release builds](http://blog.kowalczyk.info/software/sumatrapdf/prerelease.html) テスト用のプレリリースビルド版
- [sumatrapdf - PDF viewer for Windows - Google Project Hosting](https://code.google.com/p/sumatrapdf/)
    - [コミットログ](https://code.google.com/p/sumatrapdf/source/list)
    - [Wiki](https://code.google.com/p/sumatrapdf/w/)
        - [DDEcommands ](https://code.google.com/p/sumatrapdf/wiki/DDEcommands)
- [Sumatra PDF Viewer forum](http://forums.fofou.org/sumatrapdf/)
    <!-- - -[[forward search fails in texlive 2011:http://forums.fofou.org/sumatrapdf/topic?id=2131346]] -->
    <!-- - -[[Forward search from Vim to sumatrapdf:http://forums.fofou.org/sumatrapdf/topic?id=2353338]] -->

- [Sumatora PDF のインストールと設定](http://blog.fujioizumi.verse.jp/?eid=230)

### 動作環境 {#z85aa9cd}

Windows

### License {#f48c8095}

[GPLv3](https://code.google.com/p/sumatrapdf/source/browse/trunk/COPYING)

### リリース情報/ChangeLog {#b67b5a28}

[News](http://blog.kowalczyk.info/software/sumatrapdf/news.html)<br>
[コミットログ](https://code.google.com/p/sumatrapdf/source/list)<br>

を参照．<br>

### 派生版・独自ビルド版 {#i2d3e037}

- [XhmikosR's Builds sumatrapdf](http://xhmikosr.1f0.de/sumatrapdf/)
- [SumatraPDF x86/x64 Optimized Builds](http://nikkhokkho.sourceforge.net/static.php?page=SumatraPDFOpt)
- [SumatraPDF 先読み対応バージョン](https://gist.github.com/miau/5277670)
- [PDFlite](http://www.pdflite.com/)
- [PortableApps.com](http://portableapps.com/) の [SumatraPDF Portable](http://portableapps.com/apps/office/sumatra_pdf_portable)
- TeX ユーザのための [SumatraPDF-TeX](http://william.famille-blum.org/software/sumatra/) → 本家にマージされました．

## 使い方 {#wd50e1d3}

### コマンドラインオプション {#d9cff28c}

- [http://blog.kowalczyk.info/software/sumatrapdf/manual-ja.html](http://blog.kowalczyk.info/software/sumatrapdf/manual-ja.html)
- [https://code.google.com/p/sumatrapdf/source/browse/trunk/src/ParseCommandLine.cpp](https://code.google.com/p/sumatrapdf/source/browse/trunk/src/ParseCommandLine.cpp)

## SyncTeX {#m55b995b}

### forward search {#m71d9172}

forward search を行うには LaTeX コマンドのオプションに -synctex=1 または -synctex=-1 を追加する必要があります．<br>
コマンドラインオプション (-forward-search &lt;texfile> &lt;linenumber>) を指定して forward search を行うことが可能です．<br>

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
    - [Vim-LaTeX](/Vim-LaTeX/)
- [TeXnicCenter](/TeXnicCenter/)
- [Notepad++](/Notepad++/)
    - [NppExec](/NppExec/)
    - [jN](/jN/)
    - [Python Script](</Python Script/>)
- [サクラエディタ](</サクラエディタ/>)
    - [SumatraPDF.js](</サクラエディタ/マクロ/#s758d3d9>)

#### fwdsumatrapdf <a id="fwdsumatrapdf"></a> {#n8da77e2}

forward search するときに SumatraPDF を前面に表示したくない場合は fwdsumatrapdf を使用します．<br>

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) を参照．

### inverse search {#wfcdbef6}

inverse search を行うには LaTeX コマンドのオプションに -synctex=1 または -synctex=-1 を追加する必要があります．<br>
inverse search は SumatraPDF の画面をダブルクリックすると実行されます．<br>
SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] で inverse search で実行されるコマンドラインの設定を行います．<br>
inverse search の設定はコマンドラインから -inverse-search オプションで指定することも可能です．<br>
この項目は，-synctex オプションを用いて作成された PDF ファイルが開かれている状態でないと現れません．<br>
どのように設定するかはエディタ・マクロ・プラグインによって異なるのでそれぞれのマニュアルを見て設定してください．<br>

64-bit Windows での [TeXstudio](/TeXstudio/) であれば

***

<span style="color:#FFF100;background-color:#FFF100;"><ins>　　　　　　　　　　　　　　　<span style="color:Black;"><strong>SumatraPDF のオプション</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

...<br>
　　逆順検索コマンドラインの設定<br>
　　PDF ドキュメント上でダブルクリックしたときに呼び出すコマンドラインを入<br>
　　力:<br>
　　<ins>"C:\Program Files (x86)\TeXstudio\texstudio.exe" "%f" -line %l</ins><br>

***

32-bit Windows での [TeXstudio](/TeXstudio/) であれば

***

<span style="color:#FFF100;background-color:#FFF100;"><ins>　　　　　　　　　　　　　　　<span style="color:Black;"><strong>SumatraPDF のオプション</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

...<br>
　　逆順検索コマンドラインの設定<br>
　　PDF ドキュメント上でダブルクリックしたときに呼び出すコマンドラインを入<br>
　　力:<br>
　　<ins>"C:\Program Files\TeXstudio\texstudio.exe" "%f" -line %l</ins><br>

***

となります．
