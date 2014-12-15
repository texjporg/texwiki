---
title: "LyX"
url: "/LyX/"
date: 2014-12-15T17:07:54Z
bookCollapseSection: true
pukiwiki: "LyX"
---

# LyX

## [LyX](http://www.lyx.org/) {#odce06b4}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## LyX とは {#c2a24f42}

LyX は，LaTeX 文書が出力できるドキュメントプロセッサです．<br>
LyX は，文書の「構造」 (WYSIWYM) に基づいた書き方を支援します．<br>
単純に文書の見た目による (WYSIWYG) 書き方を支援するものではありません．<br>

- [LyX | LyX &ndash; 文書プロセッサ](http://www.lyx.org/WebJa.Home) 公式サイト
    - [LyX | LyXとは何か](http://www.lyx.org/WebJa.WhatIsLyX)
    - [LyX | ビジュアル・ツアー](http://www.lyx.org/WebJa.VisualTour)
    - [LyX | LyXグラフィカルツアー](http://www.lyx.org/WebJa.Walkthrough)
        <!-- -[[The LyX Project:http://www.lyx.org/trac/]] -->
        <!-- - -[[lyxgit:http://www.lyx.org/trac/browser/lyxgit]] -->
        <!-- - --[[lyxgit (ログ):http://www.lyx.org/trac/log/lyxgit/]] -->
        <!-- - -[[Timeline:http://www.lyx.org/trac/timeline]] -->

- [LyX wiki | LyX / LyX](http://wiki.lyx.org/)
    - [LyX on Cygwin](http://wiki.lyx.org/LyX/LyXOnCygwin)
    - [SyncTeX](http://wiki.lyx.org/LyX/SyncTeX)
    - [Logotype](http://wiki.lyx.org/LyX/Logotype)
    - [SplashScreen](http://wiki.lyx.org/LyX/SplashScreen)
- [LyXWinInstaller](http://sourceforge.net/projects/lyxwininstaller/)
- [LyX in Launchpad](https://launchpad.net/lyx)
- [gmane.editors.lyx.devel](http://blog.gmane.org/gmane.editors.lyx.devel)
- [lyx-devel](http://www.mail-archive.com/lyx-devel@lists.lyx.org/)

### 動作環境 {#xd7ee343}

Windows, Cygwin, OS X, Linux<br>

### License {#pb9a4019}

[GPLv3, GPLv2](http://www.lyx.org/WebJa.License)

### リリース情報 {#k8ba7cf7}

- [http://git.lyx.org/?p=lyx.git;a=tags](http://git.lyx.org/?p=lyx.git;a=tags)
- [LyX | ニュース](http://www.lyx.org/WebJa.News)

を参照．<br>

### ChangeLog {#uf3685b6}

- [git.lyx.org](http://git.lyx.org/?p=lyx.git;a=summary)
    - [shortlog](http://git.lyx.org/?p=lyx.git;a=shortlog)
- [timeline](http://www.lyx.org/trac/timeline)
- [http://www.lyx.org/trac/log/lyxgit/](http://www.lyx.org/trac/log/lyxgit/)

<!-- **派生版 [#h5bb137d] -->
<!--  -->
<!-- -[[LyXWinInstaller:http://sourceforge.net/projects/lyxwininstaller/]] -->
<!-- -[[LyX-JP プロジェクト日本語トップページ - OSDN:http://osdn.jp/projects/jalyx/]] -->
<!-- -[[Project Web of LyX-JP on OSDN Web space:http://jalyx.osdn.jp/]] -->

### LyX の読み方 {#r8403bf4}

- [http://wiki.lyx.org/FAQ/Pronunciation](http://wiki.lyx.org/FAQ/Pronunciation)
- [http://en.wikipedia.org/wiki/LyX#Pronunciation](http://en.wikipedia.org/wiki/LyX#Pronunciation)

によると LyX の開発者は「りっくす」，「りくす」，「りーくす」などと発音しているようですが，結論としては自分の好きなように発音していいようです．

### 特徴 {#safe878b}

- WYSIWYM なので TeX ファイルをタイプセットしなくても視覚的に確認することができます．
- 数式がほぼリアルタイムで表示できるので数式を多用する文書で威力を発揮します．
- 出力結果を細かく調整したい場合は TeX のコードを直接入力することもできます．

## インストール {#x6ddd58f}

LyX/インストール を参照．

## 不具合 {#h17851b4}

- [LyX Bug Tracker](http://www.lyx.org/trac/wiki/BugTrackerHome)

### LyX 2.1.3 の pdfview.exe で Adobe Acrobat Reader DC を使用して PDF ファイルが開けない {#qdfb6a10}

- [Lyx pdflatex doesn't work with acrobat reader DC](http://www.lyx.org/trac/ticket/9512)

LyX 2.1.3 の pdfview.exe で Adobe Acrobat Reader DC を使用して PDF ファイルが開けない場合は LyX 2.1.4 を使用してください．

### OS X の LyX で，文字コードが UTF-8 の場合に Backslash (U+005C) が入力できず 円記号 (U+00A5) になってしまう {#i84c7128}

OS X の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです．→ [Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt.io/browse/QTBUG-10543)<br>
Karabiner で Backslash が優先されるようにキーバインドを変更するといいようです．<br>

## 設定 {#ue19dc3a}

[LyX/設定](</LyX/設定/>) を参照

## 使い方 {#m277af28}

[LyX/使い方](</LyX/使い方/>) を参照．

## 関連リンク {#j2a0a89a}

- [http://www.pseudomoon.jp/dotclear/index.php?q=LyX](http://www.pseudomoon.jp/dotclear/index.php?q=LyX)
- [My Future Sight for Past: lyx](http://myfuturesightforpast.blogspot.jp/search/label/lyx)
- [http://yo.eki.do/tag/texlatex](http://yo.eki.do/tag/texlatex)
- [記事一覧 - 跳慮跋考](http://kino.hateblo.jp/search?q=LyX)
- [&quot;LyX&quot; - 記事一覧 - ill-identified diary](http://ill-identified.hatenablog.com/archive/category/LyX)
- [「LyX」の検索結果 - Rajun Blog](http://d.hatena.ne.jp/azbshgb/searchdiary?word=LyX)
- [LyX 2.xでUTF-8のプレーンLaTeXファイルを読みこむには](http://www.dbc-works.org/feedback/entry/2014/12/1/)
- [LyX、TeXstudio、Texmakerを少しだけ試用](http://blawat2015.no-ip.com/~mieki256/diary/201409211.html)
- [LyX を使用してグラフィカルな方法で LaTeX 文書を作成する](http://www.ibm.com/developerworks/jp/opensource/library/os-lyx/)
- [LyX - My memory for future](https://sites.google.com/site/mymemoryforfuture/lyx)
- [Ken Senoo - Google+](https://plus.google.com/100959984173869250851/posts)
- [How to Use LyX on OS X](http://mac.tutsplus.com/tutorials/app-training/how-to-use-lyx-on-os-x/)
- [Newest &#39;lyx&#39; Questions - TeX - LaTeX - Stack Exchange](http://tex.stackexchange.com/questions/tagged/lyx)
- [Lyx で Beamer](http://hasundue.hatenablog.com/entry/2012/06/17/134329)
- [MINT Julep 3: LyX](http://mintjulep3.blogspot.jp/search/label/LyX)
- [LyX HowTo](http://www.int.otaru-uc.ac.jp/lyx-howto) 横田 宏治 さんによる詳しい解説
