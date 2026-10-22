---
title: "TeXworks"
url: "/TeXworks/"
date: 2013-05-24T15:47:51Z
bookCollapseSection: true
pukiwiki: "TeXworks"
---

# TeXworks

## TeXworks {#e8144da8}

TeXworks は TeX でドキュメントを作成するためのシンプルな統合環境です．macOS 用の優れた統合環境である [TeXShop](/TeXShop/) をモデルに，同様の環境を全てのシステム上で実現すべく，開発されています．[TeX Live](</TeX Live/>)[^1]，[MiKTeX](/MiKTeX/) 等の TeX ディストリビューションに標準で含まれています．メニューは日本語化されており，[SyncTeX](/SyncTeX/) もサポートしています．

奥村晴彦・黒木裕介『[［改訂第9版］LaTeX美文書作成入門](https://github.com/okumuralab/bibun9)』では，おすすめの統合環境に TeXworks が紹介されています．

***

***

### Webサイト {#e62cfe01}

- [TeXworks 公式サイト](http://www.tug.org/texworks/)
- [TeXworks 開発サイト (GitHub)](https://github.com/TeXworks)
    - [Wiki Pages](https://github.com/TeXworks/texworks/wiki)
    - [The texworks Archives](http://tug.org/pipermail/texworks/)

### 動作環境 {#ye220c29}

Microsoft Windows, macOS, GNU/Linux で利用できます．TeXworks はツールキットとして [Qt](/Qt/) を使用しているため，これら以外にも [Qt がサポートされているプラットフォーム](https://doc.qt.io/qt-6/supported-platforms.html)では動作すると思われます．

### License {#lccd03cb}

[GPLv2](https://github.com/TeXworks/texworks/blob/master/COPYING)

### ダウンロード/インストール {#t28a6277}

[TeXworks/インストール](</TeXworks/インストール/>) を参照．

### 設定 {#q50d2378}

TeX Live に付属する TeXworks は，既に日本語用の設定がされています．そうでない場合に日本語を含む文書の組版をするためには，upLaTeX (ptex2pdf) または pLaTeX (ptex2pdf) を使うための設定を追加する必要があります．

[TeXworks/設定](</TeXworks/設定/>) を参照．

### 使い方 {#w7e215a3}

[TeXworks/使い方](</TeXworks/使い方/>) を参照．

## 文字コードの変換 {#e8ba5265}

TeXworks で使用する文字コードはデフォルトでは UTF-8 です．
このため，Shift_JIS, ISO-2022-JP, EUC-JP の文字コードを使用しているファイルを開きたい場合は，事前にファイルの文字コードを UTF-8 に変換する必要があります．
文字コードの変換には，各種テキストエディタの機能を使う方法と，コマンドラインから変換プログラムを使う方法があります．

- テキストエディタの機能を使う場合は，[サクラエディタ](</サクラエディタ/>)などのテキストエディタを使う方法があります．
- コマンドラインからの場合，文字コード変換プログラムである [nkf](/nkf/) が利用できます．

## 組み込みの PDF ビューアにゴシック体を表示させる {#t5313ebc}

<!-- -[[[tex-live] TeXworks on Windows versus Linux wrt embedding of Japanese fonts:http://www.tug.org/pipermail/tex-live/2013-March/033076.html]] -->
<!-- TeXworks 0.4.5 で Poppler 0.22.2 を使用するようになったため日本語のフォントを埋め込んでいない場合に MS-Mincho で表示されるようになりました． -->
<!-- ゴシック体を表示したい場合は以下の方法があります． -->
<!-- -フォントを埋め込む -->
<!-- -バイナリエディタで TeXworks.exe を開いて msmincho を検索して msmincho を msgothic に修正して保存 (フォントを埋め込んでいない場合に明朝体が MS-Gothic で表示されるようになります) -->
<!-- -fontconfig で使用する代替フォントを設定して poppler-data を適切な場所に配置して fontconfig にリンクさせた Poppler を使用して TeXworks をビルド -->

Windows 版 TeXworks の PDF ビューアでゴシック体を表示する場合はフォントを埋め込む必要があります．最近の TeX Live の設定では規定で埋め込まれます．

- dvipdfmx の場合：[dvipdfmx/フォントの設定](</dvipdfmx/フォントの設定/>)を参照．
- LuaTeX-ja の場合：[LuaTeX-ja](/LuaTeX-ja/#od9778bc) を参照

## 不具合 {#v0f00822}

- [Issues](https://github.com/TeXworks/texworks/issues)

### かな漢字変換をする際に文字が白く表示され，ハイライトに隠れて見えにくくなることがある {#s5bfc44e}

TeXworks で \[編集\] &gt; \[設定\] のエディタタブの「エディタ全体のオプション」で「現在カーソルのある行をハイライトする」にチェックを入れている場合，かな漢字変換の際に文字が白く表示され，ハイライトに隠れて見えにくくなるという現象が発生することがあります．このような現象が発生した場合は今のところ，「現在カーソルのある行をハイライトする」のチェックを外す（ハイライト機能を使わない）ぐらいしか対策はありません．

<!-- % このことで本当に困っている人がいるならば，バグ報告するべき．インプットメソッドが必要な言語環境でしか問題にならないので，少し説明は大変かもしれないが． - - kmaeda (2016/05/09) -->
<!-- % ↑https://bugreports.qt.io/browse/QTBUG-43756 じゃないんでしょうか？ (2016/05/12) -->
<!-- なるほど，2人から報告があって，assign もしているけれども放置なんですか．情報ありがとうございます． - - kmaeda (2016/05/12) -->

- \[[QTBUG-43756\] setExtraSelections with QTextFormat::FullWidthSelection makes preedit text difficult to read](https://bugreports.qt.io/browse/QTBUG-43756) （バグ報告はされているが，残念ながら未だ修正されていない）

<!-- 以下は一つの修正例だとは思うが，自分の環境だけで対応するのはあまり筋がよくないと思う． -->
<!-- パッチとしても -->
<!-- > ただし，この修正方法ではカーソル行の文字が指定された色で表示されてしまい，色分けされなくなります． -->
<!-- とあるので，取り込んでもらえない可能性が高そう． -->

<!-- ***ソースコードから修正する方法 (Windows) [#pb4e9c13] -->

<!-- -[[Git:https://git-scm.com/]], [[Poppler]], [[Hunspell]] をインストールします． -->

<!-- -TeXworks のソースコードを取得します． -->

<!--  $ git clone https://github.com/TeXworks/texworks.git -->
<!--  $ pushd texworks -->

<!-- -TeXworks のソースコードの該当箇所を修正します． -->

<!-- [[texworks/src/CompletingEdit.cpp:https://github.com/TeXworks/texworks/blob/master/src/CompletingEdit.cpp]] の -->
<!--  currentLineFormat->setBackground(QColor::fromRgbF(.9 * bgR + .1 * fgR, .9 * bgG + .1 * fgG, .9 * bgB + .1 * fgB)); -->
<!-- の部分を -->
<!--  currentLineFormat->setForeground(QColor::fromRgbF(.1 * bgR + .9 * fgR, .1 * bgG + .9 * fgG, .1 * bgB + .9 * fgB)); -->
<!--  currentLineFormat->setBackground(QColor::fromRgbF(.9 * bgR + .1 * fgR, .9 * bgG + .1 * fgG, .9 * bgB + .1 * fgB)); -->
<!-- のように QTextFormat::setForeground メソッドで QColor::fromRgbF(.1 * bgR + .9 * fgR, .1 * bgG + .9 * fgG, .1 * bgB + .9 * fgB) や Qt::darkBlue や Qt::black などの色を指定すれば回避できます．ただし，この修正方法ではカーソル行の文字が指定された色で表示されてしまい，色分けされなくなります． -->

<!-- -TeXworks をビルドします． -->

<!--  $ mkdir build -->
<!--  $ pushd build -->
<!--  $ cmake .. -G "MSYS Makefiles" -DWITH_LUA=OFF -DWITH_PYTHON=OFF -DZLIB_LIBRARY=C:/MinGW/bin/zlib1.dll -Dgp_cmd=C:/MinGW/bin/objdump.exe -->
<!--  $ make -->
<!--  $ ./src/TeXworks.exe & -->

<!-- 上記の作業を行うことで，かな漢字変換をしてもハイライトに隠れずに表示されました． -->

<!-- -このままの状態ではエクスプローラーからダブルクリックして起動する場合に dll が見つからないといったエラーメッセージが表示されます．C:\MinGW\bin と C:\Qt\Qt5.9.1\5.9.1\mingw53_32\bin に PATH を通せばエクスプローラーからダブルクリックして起動できるようになります． -->

<!-- **macOS の TeXworks 0.4.5 を使用すると TeXworks のプレビューが日本語表示できない [#n5c2ae8e] -->
<!--  -->
<!--  -->
<!-- -[[Built-in PDF viewer cannot display Japanese characters correctly. · Issue #623 · TeXworks/texworks · GitHub:https://github.com/TeXworks/texworks/issues/623]] - -&gt; Closed -->
<!-- -Mountain Lion で Texworks のプレビューが日本語表示できない ([[forum:1082]]) -->
<!-- -http://blogs.yahoo.co.jp/igproj_fusion/15780910.html#commentsArea -->

## スクリプト {#m00b4a58}

% この節は「スクリプト」についての説明がないと意味をなさないでしょう．

- [stloeffler/TeXworks-scripts - GitHub](https://github.com/stloeffler/TeXworks-scripts)
- [TwScript Information Page](http://twscript.paulanorman.com/)

## Emacs キーバインド {#c5b20dc1}

- [Keyhac - Pythonによる柔軟なキーカスタマイズツール](https://sites.google.com/site/craftware/keyhac-ja)
    - [Fakeymacs](https://github.com/smzht/fakeymacs)
        - [FakeymacsにTeXworksの対応を追加しました。- smzht / X](https://x.com/smzht/status/1847524457403076890) --&gt; [Fekeymacs 20241019_01](https://github.com/smzht/fakeymacs/commit/9d1076865fcc8cc23b41cc799ebf6c75827d0bcf)

## 関連リンク {#e07d54a5}

- [MyTeXpert:TeXworks](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?TeXworks)
- [新しい TeX ドキュメント制作環境 TeXworks の紹介  - I'm Just Another TeXnician.](https://munepi.hatenablog.jp/entry/20100819/texworks)
- [TeXworks のテンプレートに日本語の雛形を入れてみました  - I'm Just Another TeXnician.](https://munepi.hatenablog.jp/entry/20110625/texworks)
    - [munepi/texworks-templates-japanese: Japanese templates of TeXworks](https://github.com/munepi/texworks-templates-japanese)
- [TeXworksの背景色・文字色を変える](https://tasusu.hatenablog.com/entry/20111106/1320588877)
- [TeXworks for newcomers-and what's new for old hands - YouTube](https://www.youtube.com/watch?v=9-Z43CSPgM0)：Jonathan Kew（TeXworks project の一人）による TUG 2010 での講演ビデオ

[^1]: TeXworks は Windows 版の TeX Live に収録されています．Cygwin, macOS, GNU/Linux の TeX Live には TeXworks は収録されていません．
