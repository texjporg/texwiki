---
title: "ArchiveQandA"
url: "/ArchiveQandA/"
date: 2004-09-13T23:29:02Z
pukiwiki: "ArchiveQandA"
---

# ArchiveQandA

ここでは、[TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) で話題になった、あるいは頻繁に尋ねられる事柄をまとめます。

<span style="font-size:12px">Q &amp; A で話題になったのかというくくりが必要か知らないが，分類してみた．</span><br>

<span style="font-size:12px">正方形を「長方形の特殊な場合」というか「正多角形の特殊な場合」というか，みたいなことは両方やっておいて悪くないと思うので．</span>

<!-- *目次 [#c74dbb77] -->

### WinShellのエラーメッセージ {#l91d86a6}

- 文字が90&deg;回転して表示される（[qa:22602](https://okumuralab.org/~okumura/texfaq/qa/22602.html), [qa:32720](https://okumuralab.org/~okumura/texfaq/qa/32720.html)など）
    - \[Options\]-\[Font\]で設定した表示フォントに「@」のついたフォントを指定していませんか？ @は縦書き用のフォントです。@のない「MS ゴシック」などに変えましょう。

- DVIWINボタンを押しても“One or more errors occured!　Please check the options!”と言われます（[qa:29850](https://okumuralab.org/~okumura/texfaq/qa/29850.html), [qa:29142](https://okumuralab.org/~okumura/texfaq/qa/29142.html)など）
    - dvioutへのパスを通していない、あるいはDVIWIN設定ダイアログで（インストールディレクトリ）C:\dviout\dviout.exeと正しい場所を指定していないからです。[WinShell](/WinShell/#h2ab6f8d)のページを参照して、修正しましょう。

### dvioutのエラーメッセージ {#lb61846e}

### TeX本体のエラーメッセージ {#s54a975c}

### LaTeXのエラーメッセージ {#m585375b}

### 表記の哲学 {#l951f950}

- [\mathrm{d}x?](</表記の哲学/mathrm-dx/>)
- [重力加速度の g](</表記の哲学/重力加速度の g/>)

### 画像の作り方、扱い方 {#kbcf5f4a}

- [PDFの作り方#画像の用意の仕方](</PDFの作り方/#l580b75f>)
- “Cannot determine size of graphic in filename.xxx (no size specifed)”というエラーが出て画像（JPG, PNGなど）が取り込めない（[qa:29325](https://okumuralab.org/~okumura/texfaq/qa/29325.html), [qa:19304](https://okumuralab.org/~okumura/texfaq/qa/19304.html)など）
    - その画像に対応する“枠”を記述した .bb ファイル（Bounding Box）がないからです。コマンドプロンプトで画像ファイルのあるディレクトリに移動し

        ```
        c:\(画像ファイルの場所) ebb filename.xxx
        ```

        とします。すると、そのディレクトリに filename.bb ファイルが作られ、（他のエラーがない限り）画像が取り込めるようになります。dviout をお使いの場合は、同梱されている bmc.exe を使うこともできます。使い方は

        ```
        c:\(画像ファイルの場所) bmc -b filename.xxx
        ```

        となります。

### Tips {#de167df2}

- 自分自身のファイル名の取得
    - \jobname ([qa:32943](https://okumuralab.org/~okumura/texfaq/qa/32943.html), [qa:17412](https://okumuralab.org/~okumura/texfaq/qa/17412.html), [qa:11872](https://okumuralab.org/~okumura/texfaq/qa/11872.html)).

### コメント {#adc20c89}

- インストール先がCドライブとは限らないので（インストールディレクトリ）\dvioutとしたのですが…。 -- 若雲 2004-12-05 (日) 17:35:30
