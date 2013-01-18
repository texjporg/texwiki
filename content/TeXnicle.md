---
title: "TeXnicle"
url: "/TeXnicle/"
date: 2012-09-01T21:17:44Z
pukiwiki: "TeXnicle"
---

# TeXnicle

## [TeXnicle](http://www.bobsoft-mac.de/texnicle/texnicle.html) {#p6c2084c}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## TeXnicle とは {#k3131c97}

TeXnicle は TeX 統合環境です．MacTeX をインストールしてあることを前提としています．

ウィンドウ中央に TeX ソースを記述すると、ウィンドウ右に pdf ファイルが表示されます。コマンドキー＋クリックで、ソースと pdf の該当箇所を相互に参照できます．Live Update を有効にしておくと、修正があるするたびに自動でコンパイルしてくれます（on/off は設定可能です）．

- [TeXnicle](http://www.bobsoft-mac.de/texnicle/texnicle.html)
- [martinhewitson/TeXnicle · GitHub](https://github.com/martinhewitson/TeXnicle)

### 動作環境 {#ob2dc8eb}

OS X 10.8, 10.7, 10.6.8

### License {#s7995e80}

BSD 2-Clause

### ChangeLog {#s78f6912}

- [Commit History · martinhewitson/TeXnicle · GitHub](https://github.com/martinhewitson/TeXnicle/commits/)

## 設定 {#y1c767e9}

デフォルトでは pdflatex を使用することになっているので、日本語 pLaTeX（e-pTeX）で使用する場合は以下のように新たな設定を追加します．

### platex＋dvipdfmx として設定する方法 {#t9059d8b}

1. 「Preferences」-「Typesetting」の項で Engines タブを選択し、表中の latex を選択して Duplicate します．
1. コピーした engine ファイルを選択し、Edit します．
1. 24行目の ENGINE の行を以下のように修正します．

    ```
    ENGINE=/usr/texbin/platex
    ```

1. 25行目の BIBTEX の行を以下のように修正します．

    ```
    BIBTEX=/usr/texbin/pbibtex
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
    echo "*** platex.engine has completed."
    ```

1. 編集済みの engine ファイルを保存して閉じ、Reveal すると Finder 上 で選択されるので、ファイル名をわかりやすく（たとえば platex.engine に）修正します．
1. 「Preferences」-「Typesetting」の項で Typesetting タブを選択し、Default Engine に日本語 pLaTeX 用に書き直した新しい engine を選択します．
1. 個々のファイルでその都度 engine を選択するには、画面左の歯車マークを選択して Engine を設定します．

<strong>Happy LaTeXing!</strong>

### 便利技 {#p3abf08a}

#### 画面幅で改行 {#tc429033}

「Preferences」-「General」で、Hard wrap とあるのを Soft wrap に設定します．改行幅も設定できます．

## 関連リンク {#ba4bf8c9}

- [博士論文の執筆で役に立ったソフトウェア](http://blogos.com/article/45299/)
