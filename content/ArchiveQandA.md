---
title: "ArchiveQandA"
url: "/ArchiveQandA/"
date: 2004-09-13T23:29:02Z
pukiwiki: "ArchiveQandA"
---

# ArchiveQandA

ここでは、[TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) で話題になった、あるいは頻繁に尋ねられる事柄をまとめます。

<!-- *目次 [#c74dbb77] -->

### WinShellのエラーメッセージ {#l91d86a6}

- 文字が90&deg;回転して表示される（[qa:22602](https://okumuralab.org/~okumura/texfaq/qa/22602.html), [qa:32720](https://okumuralab.org/~okumura/texfaq/qa/32720.html)など）
    - \[Options\]-\[Font\]で設定した表示フォントに「@」のついたフォントを指定していませんか？ @は縦書き用のフォントです。@のない「ＭＳ ゴシック」などに変えましょう。
        <!-- 気持ち悪いですが，ＭＳは全角英数のようです． -->

- DVIWINボタンを押しても“One or more errors occured!　Please check the options!”と言われます（[qa:29850](https://okumuralab.org/~okumura/texfaq/qa/29850.html), [qa:29142](https://okumuralab.org/~okumura/texfaq/qa/29142.html)など）
    - dvioutへのパスを通していない、あるいはDVIWIN設定ダイアログで
        「（インストールディレクトリ）\dviout.exe」
        具体的には「C:\dviout\dviout.exe」のように正しい場所を指定していないからです。[WinShell](/WinShell/#h2ab6f8d)のページを参照して、修正しましょう。

### dvioutのエラーメッセージ {#lb61846e}

- エラーが発生した場合には，関連する HELP が開くので熟読すること。

<br>

    また，[dvioutにおけるトラブル](http://akagi.ms.u-tokyo.ac.jp/dvioutQA.html)を参照しましょう。

### TeX本体のエラーメッセージ {#s54a975c}

<!-- -''! TeX capacity exceeded, sorry ...''（[[qa:32844]], [[qa:32596]]など） -->
<!-- Q&A で良く出るものはここに書いたほうが良い？  -->
- [TeX のエラーメッセージ](</TeX のエラーメッセージ/>)にまとめました。

### LaTeXのエラーメッセージ・警告メッセージ {#m585375b}

- [LaTeX のエラーメッセージ](</LaTeX のエラーメッセージ/>)
- [LaTeX の警告メッセージ](</LaTeX の警告メッセージ/>)

の各々にまとめました．

- [LaTeX コマンドの誤用例](</LaTeX コマンドの誤用例/>)（エラーや警告は生じないが，深刻な問題があるもの）

### 表記の哲学 {#l951f950}

- [\mathrm{d}x?](</表記の哲学/mathrm-dx/>)
- [重力加速度の g](</表記の哲学/重力加速度の g/>)

### 画像の作り方、扱い方 {#kbcf5f4a}

- [PDFの作り方#画像の用意の仕方](</PDFの作り方/#l580b75f>)
- “Cannot determine size of graphic in filename.xxx (no size specifed)”というエラーが出て画像（JPG, PNGなど）が取り込めない（[qa:29325](https://okumuralab.org/~okumura/texfaq/qa/29325.html), [qa:19304](https://okumuralab.org/~okumura/texfaq/qa/19304.html)など）
    - その画像に対応する“枠”を記述した .bb ファイル（Bounding Box）がないからです。コマンドプロンプトで画像ファイルのあるディレクトリに移動し

        ```
        ebb filename.xxx
        ```

        を実行します。すると、そのディレクトリに filename.bb ファイルが作られ、（他のエラーがない限り）画像が取り込めるようになります。dviout をお使いの場合は、同梱されている bmc.exe を使うこともできます。使い方は

        ```
        bmc -b filename.xxx
        ```

        となります。

- [TeX と「TeX 以外」](</TeX と「TeX 以外」/>)

### Tips {#de167df2}

- 自分自身のファイル名の取得
    - \jobname ([qa:32943](https://okumuralab.org/~okumura/texfaq/qa/32943.html), [qa:17412](https://okumuralab.org/~okumura/texfaq/qa/17412.html), [qa:11872](https://okumuralab.org/~okumura/texfaq/qa/11872.html)).
- 余白に行番号
    - [CTAN:macros/latex/contrib/lineno/](https://mirror.ctan.org/macros/latex/contrib/lineno/) ([qa:33113](https://okumuralab.org/~okumura/texfaq/qa/33113.html), ...)
- 通しノンブルを振る・最後のページ番号を取得する
    - 通しノンブルを振る (印刷所持込用?) ([qa:9645](https://okumuralab.org/~okumura/texfaq/qa/9645.html), [qa:9677](https://okumuralab.org/~okumura/texfaq/qa/9677.html), [qa:10561](https://okumuralab.org/~okumura/texfaq/qa/10561.html)).
    - 章ごとのページ／章の総ページ数 ([qa:45859](https://okumuralab.org/~okumura/texfaq/qa/45859.html), [qa:45860](https://okumuralab.org/~okumura/texfaq/qa/45860.html), [qa:45870](https://okumuralab.org/~okumura/texfaq/qa/45870.html)).
    - lastpage.sty と hyperref.sty は競合する ([qa:46490](https://okumuralab.org/~okumura/texfaq/qa/46490.html))
        <!-- ([[qa:46483]], [[qa:46486]], [[qa:46488]], [[qa:46489]], [[qa:46490]],  -->
        <!-- [[qa:46494]], [[qa:46495]], [[qa:46502]], [[qa:46508]], [[qa:46510]]). -->
        <!-- // その件は，hyperref，lastpage の両パッケージが競合しているというよりも -->
        <!-- // むしろ，“hyperref 自身が lastpage と共存できるように細工しているがゆえに， -->
        <!-- // lastpage の内部処理に手を入れるようなユーザ自身によるカスタマイズが -->
        <!-- // hyperref 使用時にはうまくいかない”という話のようです． -->

- \label{}, \ref{} を目に見えるように張る
    - [CTAN:macros/latex/required/tools/showkeys.dtx](https://mirror.ctan.org/macros/latex/required/tools/showkeys.dtx) ([qa:19427](https://okumuralab.org/~okumura/texfaq/qa/19427.html), ...)
- ハイフネーションの禁止
    - \hyphenpenalty=10000 \exhyphenpenalty=10000 と設定
    - \lefthyphenmin=100 \righthyphenmin=100 と設定
        <!-- ほかにもありますが，この 2 通りが手軽でしょう． -->

- 二段組にしたときに最終ページの左右カラムを揃える
    - [blance.sty](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/balance.html)，[CTAN:macros/latex/contrib/preprint/](https://mirror.ctan.org/macros/latex/contrib/preprint/)内 ([qa:32276](https://okumuralab.org/~okumura/texfaq/qa/32276.html)...)
- [TeXが苦手とする処理](</TeXが苦手とする処理/>)（下線，飾り枠など）

### コメント {#adc20c89}

- インストール先がCドライブとは限らないので（インストールディレクトリ）\dvioutとしたのですが…。 -- 若雲 2004-12-05 (日) 17:35:30
- ↑修正してみました。 -- トニイ 2005-03-18 (金) 07:20:18
    <!-- - ebbをPDF 1.4に対応させるには - - tacro &new{2006-03-04 (土) 20:26:14}; -->
    <!-- - ↑間違いです。すみません。 - - tacro &new{2006-03-04 (土) 20:27:24}; -->

- Wikiなので編集も削除も可能です。前の書き込みは間違いだったそうなので，コメントを付けて表示から消しました。 -- トニイ 2006-03-06 (月) 17:39:05
