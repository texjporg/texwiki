---
title: "SumatraPDF"
url: "/SumatraPDF/"
date: 2012-12-28T22:22:46Z
bookCollapseSection: true
pukiwiki: "SumatraPDF"
---

# SumatraPDF

## [SumatraPDF](https://www.sumatrapdfreader.org/) {#afa7a42e}

SumatraPDF は Windows で動作するタブ切り替え型の軽量な PDF ビューアです。
eBook (ePub, MOBI), Comic Book (CBZ, CBR), DjVu, XPS, CHM などの形式も閲覧できます。
[SyncTeX](/SyncTeX/) への対応，ファイルの自動更新機能もあり，LaTeX のプレビューアに向いています。
PDF ファイルだけではなく PostScript ファイルも表示可能です。
PostScript ファイルの表示には [Ghostscript](/Ghostscript/) が必要です。

***

***

### 不具合 {#v813d27a}

#### SumatraPDF 3.5.2 (2023-10-25) でエラー表示 → [SumatraPDF 3.3.3 (2021-07-20)](https://www.sumatrapdfreader.org//dl//rel/3.3.3/SumatraPDF-3.3.3-64-install.exe) に戻す {#ec0b8b2d}

- [https://x.com/arai_amide/status/1820667539023942016](https://x.com/arai_amide/status/1820667539023942016)

#### SumatraPDF 3.4.6 (2022-06-08) で SyncTeX のエラー表示 → [SumatraPDF 3.3.3 (2021-07-20)](https://www.sumatrapdfreader.org//dl//rel/3.3.3/SumatraPDF-3.3.3-64-install.exe) に戻す {#o17d1f9c}

- [https://x.com/arai_amide/status/1564784523216568320](https://x.com/arai_amide/status/1564784523216568320)
- [zipped synctex · Discussion #2640 · sumatrapdfreader/sumatrapdf · GitHub](https://github.com/sumatrapdfreader/sumatrapdf/discussions/2640)
- [zipped synctex fails in 3.4.x · Issue #2642 · sumatrapdfreader/sumatrapdf · GitHub](https://github.com/sumatrapdfreader/sumatrapdf/issues/2642)

### インストール {#r04b7fad}

[Sumatra PDF reader download page](https://www.sumatrapdfreader.org/download-free-pdf-viewer) から Installer をダウンロードします。
後はダブルクリックして指示に従えばインストールが完了します。

SumatraPDF インストール先フォルダは

SumatraPDF をデフォルトでインストールした場合は

> C:\Users\\&lt;ユーザー名>\AppData\Local\SumatraPDF

SumatraPDF を全てのユーザーに対してインストールした場合は

> C:\Program Files\SumatraPDF

になります。

### 使い方（SyncTeX の利用） {#wd50e1d3}

[SyncTeX](/SyncTeX/) とは PDF ファイルと LaTeX ソースファイルの相互ジャンプを行うための機能です。
TeX エンジンが SyncTeX に対応しており（主要なエンジンは対応しています）、かつ LaTeX ソースが -synctex=1 または -synctex=-1 オプションとともにコンパイルされている必要があります。（LaTeX ソースファイルと同じフォルダに拡張子が .synctex のファイルができます。）
ジャンプはエディタ -&gt; SumatraPDF（forward search）と SumatraPDF -&gt; エディタ（inverse search）の両方が可能です。

#### forward search {#m71d9172}

コマンドラインオプション (-forward-search &lt;texfile> &lt;linenumber>) を指定して forward search を行うことが可能です。

以下の統合環境，テキストエディタ +（マクロ・プラグイン）は SumatraPDF で forward and inverse search が可能です。

■ フリーソフトウェア (オープンソースソフトウェア)

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [Texmaker](/Texmaker/)
- [TeXnicCenter](/TeXnicCenter/)
- [Visual Studio Code](</Visual Studio Code/>)
    - [LaTeX](</Visual Studio Code/LaTeX/>)
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

forward search するときに SumatraPDF を前面に表示したくない場合は fwdsumatrapdf を使用します。
[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) を参照してください。

#### inverse search {#wfcdbef6}

inverse search は SumatraPDF の PDF ドキュメント上でダブルクリックすると実行されます．ただし，設定が必要です。

%APPDATA%\SumatraPDF\SumatraPDF-settings.txt に

```
EnableTeXEnhancements = false
```

と記述されている場合は逆順検索コマンドラインの設定が表示されません。

逆順検索コマンドラインの設定が表示されていない場合は \[☰\] &gt; \[設定(S)\] &gt; \[詳細設定(A)\] で %APPDATA%\SumatraPDF\SumatraPDF-settings.txt を開いて

```
EnableTeXEnhancements = true
```

に修正します。

あるいは，-synctex オプションとともにコンパイルされた PDF ファイルを開いてください。（正確には，.synctex ファイルが同じフォルダにある PDF ファイルを開いてください。）

SumatraPDF の \[☰\] &gt; \[設定(S)\] &gt; \[オプション(O)...\] の逆順検索コマンドラインの設定で inverse search で実行されるコマンドラインの設定を行います。

inverse search の設定はコマンドラインから -inverse-search オプションで指定することも可能です。

設定方法については統合環境，テキストエディタ +（マクロ・プラグイン）によって異なるのでそれぞれのマニュアルを見て設定してください。

[TeXstudio](/TeXstudio/) であれば

```
"C:\Program Files\texstudio\texstudio.exe" "%f" -line %l
```

となります。

#### コマンドラインオプション {#d9cff28c}

プレビューする場合に複数の SumatraPDF が起動するのを防止したい場合は -reuse-instance オプションを追加します。

- [https://www.sumatrapdfreader.org/manual.html](https://www.sumatrapdfreader.org/manual.html)
- [https://github.com/sumatrapdfreader/sumatrapdf/blob/master/src/Flags.cpp](https://github.com/sumatrapdfreader/sumatrapdf/blob/master/src/Flags.cpp)

### リンク {#pad542dc}

- [SumatraPDF 公式サイト](https://www.sumatrapdfreader.org/)
    - [News](https://www.sumatrapdfreader.org/news.html)
    - [Download](https://www.sumatrapdfreader.org/download-free-pdf-viewer.html)
    - [SumatraPDF pre-release builds](https://www.sumatrapdfreader.org/prerelease.html) テスト用のプレリリースビルド版
    - [SumatraPDF documentation](https://www.sumatrapdfreader.org/docs/SumatraPDF-documentation)
        - [LaTeX integration](https://www.sumatrapdfreader.org/docs/LaTeX-integration)
- [sumatrapdfreader · GitHub](https://github.com/sumatrapdfreader)
    - [Home · sumatrapdfreader/sumatrapdf Wiki · GitHub](https://github.com/sumatrapdfreader/sumatrapdf/wiki)
    - [How to check programmatically if Sumatra is installed? #2855](https://github.com/sumatrapdfreader/sumatrapdf/discussions/2855)
- [Discussions · sumatrapdfreader/sumatrapdf · GitHub](https://github.com/sumatrapdfreader/sumatrapdf/discussions)
- [TeXデータを保存するメディアのフォーマットがexFATだとSumatraPDFが自動更新できなくなるので気を付けてください．](https://www.k-pmpstudy.com/entry/2018/08/29/210854)

#### License {#f48c8095}

[GPLv3](https://github.com/sumatrapdfreader/sumatrapdf/blob/master/COPYING)

#### ChangeLog {#b67b5a28}

- [News](https://www.sumatrapdfreader.org/news.html)
- [コミットログ](https://github.com/sumatrapdfreader/sumatrapdf/commits/master)
