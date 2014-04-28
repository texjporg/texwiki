---
title: "TeXnicle"
url: "/TeXnicle/"
date: 2012-09-01T21:17:44Z
pukiwiki: "TeXnicle"
---

# TeXnicle

## [TeXnicle](http://www.bobsoft-mac.de/texnicle/texnicle.html) {#p6c2084c}

<img src="http://www.bobsoft-mac.de/texnicle/files/blocks_image_0_1.png" alt="TeXnicle" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## TeXnicle とは {#k3131c97}

TeXnicle は TeX 統合環境です．<br>
SyncTeX に対応しています．<br>

- [TeXnicle](http://www.bobsoft-mac.de/texnicle/texnicle.html)
- [martinhewitson/TeXnicle · GitHub](https://github.com/martinhewitson/TeXnicle)

### 動作環境 {#ob2dc8eb}

OS X

### License {#s7995e80}

BSD 2-Clause

### リリース情報/ChangeLog {#s78f6912}

- [TeXnicle Downloads](http://www.bobsoft-mac.de/texnicle/texnicledownload/texnicledownload.html)
- [Commit History · martinhewitson/TeXnicle · GitHub](https://github.com/martinhewitson/TeXnicle/commits/)

### スクリーンショット {#n2e34e21}

- [TeXnicle Screenshots](http://www.bobsoft-mac.de/texnicle/texniclescreenshots/texniclescreenshots.html)

> <table>
> <tbody>
> <tr><td><a href="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1000-full.html"><img src="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1000-thumb.jpg" alt="The TeXnicle main screen showing the code snippet library."></a></td><td><a href="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1001-full.html"><img src="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1001-thumb.jpg" alt="The TeXnicle main screen showing the editor and project tree."></a></td><td><a href="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1002-full.html"><img src="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1002-thumb.jpg" alt="The TeXnicle main screen showing the symbol palette."></a></td><td><a href="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1003-full.html"><img src="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1003-thumb.jpg" alt="A TeXnicle project with bookmarks"></a></td></tr>
> <tr><td style="text-align:center">The TeXnicle main<br>screen showing the<br>code snippet library.</td><td style="text-align:center">The TeXnicle main<br>screen showing the<br>editor and project<br>tree.</td><td style="text-align:center">The TeXnicle main<br>screen showing the<br>symbol palette.</td><td style="text-align:center">A TeXnicle project<br>with bookmarks</td></tr>
> <tr><td><a href="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1004-full.html"><img src="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1004-thumb.jpg" alt="The TeXnicle main project screen"></a></td><td><a href="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1005-full.html"><img src="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1005-thumb.jpg" alt="The code snippets library"></a></td><td><a href="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1006-full.html"><img src="http://www.bobsoft-mac.de/texnicle/texniclescreenshots/files/page8-1006-thumb.jpg" alt="A stand-alone editor."></a></td><td></td></tr>
> <tr><td style="text-align:center">The TeXnicle main<br>project screen</td><td style="text-align:center">The code snippets<br>library</td><td style="text-align:center">A stand-alone editor.</td><td></td></tr>
> </tbody>
> </table>
>

## 設定 {#y1c767e9}

MacTeX がインストールされていることを前提としています．<br>
デフォルトでは pdflatex を使用することになっているので、日本語 upLaTeX（e-upTeX）で使用する場合は以下のように新たな設定を追加します．

### uplatex＋dvipdfmx として設定する方法 {#t9059d8b}

1. 「Preferences」-「Typesetting」の項で Engines タブを選択し、表中の latex を選択して Duplicate します．
1. コピーした engine ファイル ([latex.engine](https://github.com/martinhewitson/TeXnicle/blob/master/TeXnicle/Engine/EngineScripts/latex.engine)) を選択し、Edit します．
1. 24行目の ENGINE の行を以下のように修正します．

    ```
    ENGINE=/usr/texbin/uplatex
    ```

1. 25行目の BIBTEX の行を以下のように修正します．

    ```
    BIBTEX=/usr/texbin/upbibtex
    ```

1. 26行目の DVIPS の行を以下のように修正します．

    ```
    DVIPDFMX=/usr/texbin/dvipdfmx
    ```

1. 27行目の PS2PDF の行は不要なのでコメントアウトします．その他、ps2pdf に係わる行を好みに応じてコメントアウトしておきます．

    ```
    #PS2PDF=/usr/local/bin/ps2pdf
    ```

1. 71行目〜の dvips を使用する設定を dvipdfmx を使用するように設定し直します．

    ```
    # Run dvipdfmx
    echo "*** Doing dvipdfmx on $mainfile..."
    $DVIPDFMX "$mainfile"
    ```

1. 完了表示を以下のように修正します．

    ```
    echo "*** uplatex.engine has completed."
    ```

1. 編集済みの engine ファイルを保存して閉じ、Reveal すると Finder 上 で選択されるので、ファイル名をわかりやすく（たとえば uplatex.engine に）修正します．
1. 「Preferences」-「Typesetting」の項で Typesetting タブを選択し、Default Engine に日本語 upLaTeX 用に書き直した新しい engine を選択します．
1. 個々のファイルでその都度 engine を選択するには、画面左の歯車マークを選択して Engine を設定します．

<strong>Happy LaTeXing!</strong>

### 便利技 {#p3abf08a}

#### 画面幅で改行 {#tc429033}

「Preferences」-「General」で、Hard wrap とあるのを Soft wrap に設定します．改行幅も設定できます．

## 使い方 {#y814953c}

ウィンドウ中央に TeX ソースを記述すると、ウィンドウ右に pdf ファイルが表示されます。<br>
コマンドキー＋クリックで、ソースと pdf の該当箇所を相互に参照できます．<br>
Live Update を有効にしておくと、修正するたびに自動でコンパイルしてくれます（on/off は設定可能です）．<br>

## 関連リンク {#ba4bf8c9}

- [http://koemu.hatenablog.jp/search?q=TeXnicle](http://koemu.hatenablog.jp/search?q=TeXnicle)
- [TeXnicleの設定](http://www.sekailab.com/wp/2013/06/27/texnicle-setting/)
