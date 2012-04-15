---
title: "ArchiveQandA"
url: "/ArchiveQandA/"
date: 2004-09-13T23:29:02Z
pukiwiki: "ArchiveQandA"
---

# ArchiveQandA

ここでは、[TeX Forum](http://oku.edu.mie-u.ac.jp/tex/) や [TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) で話題になった、あるいは頻繁に尋ねられる事柄をまとめます。

<!-- *目次 [#c74dbb77] -->

### ヘルプドキュメントの探し方 {#bdcc8e5a}

([qa:53707](https://okumuralab.org/~okumura/texfaq/qa/53707.html), [qa:53708](https://okumuralab.org/~okumura/texfaq/qa/53708.html) など)

- 検索サイトで，パッケージ名やコマンド名で検索する
- マクロやパッケージ関わることであれば，[CTAN](/CTAN/) ([CTAN search](http://www.ctan.org/search.html)) でパッケージ名をキーに探す
- W32TeX または TeX Live であれば texdoc -l -s &lt;パッケージ名> と打つ<br>
    (例) texdoc -l -s hyperref
    - TeX Live には [texdoctk](http://www.ctan.org/tex-archive/help/Catalogue/entries/texdoctk.html) というPerl/Tkを用いたGUIのドキュメント検索ソフトがあります．

> Fedora 10で使ってみるとテキスト検索はまともに入力もできないのですが、
> マウスクリックでカテゴリやキーワードから文書を選択して表示できるので、
> 「調べたいことが書いてある文書の名前（パッケージ名）がわからない」ときに便利かもしれません。

- MiKTeX であれば texdoc -l &lt;パッケージ名> と打つ<br>
    (例) texdoc -l hyperref

- TeXworks や dviout など由来のはっきりしているソフトウェアに関するヘルプは，それぞれのソフトウェアのヘルプをまず見る．

### TeXworksのエラーメッセージ {#g1eb4223}

- エラーが発生した場合は，エラーメッセージをよく読んで対処してください。

<br>

    よく分からない場合は [TeX Forum](http://oku.edu.mie-u.ac.jp/tex/) や [TeXworks#TeX ► QA ► フォーラム ► 一般フォーラム ►](/TeXworks/#m9d42515) に同様の事例がないか探してみてください。

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

- 複数ページのPDFファイルの任意のページを取り込む
    - [PDFファイルの任意のページの画像を使いたい](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=641#p3532)によれば、

        ```
        \includegraphics[page=3,width=5cm]{sample.pdf}
        ```

        とソース中に記述し、コンパイル時に

        ```
        --shell-escape-commands=extractbb
        ```

        オプションを付けて実行することで、複数ページからなるPDFファイルの任意のページを図として取り込むことができます。
        <!-- -[[TeX と「TeX 以外」]] -->

### Tips {#de167df2}

- 自分自身のファイル名の取得
    - \jobname ([qa:32943](https://okumuralab.org/~okumura/texfaq/qa/32943.html), [qa:17412](https://okumuralab.org/~okumura/texfaq/qa/17412.html), [qa:11872](https://okumuralab.org/~okumura/texfaq/qa/11872.html)).
- 余白に行番号
    - [CTAN:macros/latex/contrib/lineno/](https://mirror.ctan.org/macros/latex/contrib/lineno/) ([qa:33113](https://okumuralab.org/~okumura/texfaq/qa/33113.html), ...)
- 通しノンブルを振る・最後のページ番号を取得する
    - 通しノンブルを振る (印刷所持込用?) ([qa:9645](https://okumuralab.org/~okumura/texfaq/qa/9645.html), [qa:9677](https://okumuralab.org/~okumura/texfaq/qa/9677.html), [qa:10561](https://okumuralab.org/~okumura/texfaq/qa/10561.html)).
    - 章ごとのページ／章の総ページ数 ([qa:45859](https://okumuralab.org/~okumura/texfaq/qa/45859.html), [qa:45860](https://okumuralab.org/~okumura/texfaq/qa/45860.html), [qa:45870](https://okumuralab.org/~okumura/texfaq/qa/45870.html)).
    - lastpage.sty のカスタマイズは hyperref.sty と共存しにくい ([qa:46490](https://okumuralab.org/~okumura/texfaq/qa/46490.html))
        <!-- ([[qa:46483]], [[qa:46486]], [[qa:46488]], [[qa:46489]], [[qa:46490]],  -->
        <!-- [[qa:46494]], [[qa:46495]], [[qa:46502]], [[qa:46508]], [[qa:46510]]). -->
        <!-- //// 原題: hyperref.sty と lastpage.sty は競合する -->
        <!-- // その件は，hyperref，lastpage の両パッケージが競合しているというよりも -->
        <!-- // むしろ，“hyperref 自身が lastpage と共存できるように細工しているがゆえに， -->
        <!-- // lastpage の内部処理に手を入れるようなユーザ自身によるカスタマイズが -->
        <!-- // hyperref 使用時にはうまくいかない”という話のようです． -->
        <!-- //// 詳しい解説をありがとうございます．内容は理解しているつもりでしたが， -->
        <!-- //// 正しく 1 行紹介するのがむずかしいのと， -->
        <!-- //// トラブルに陥った人が後から検索するのにどういうタイトルがいいか， -->
        <!-- //// という兼ね合いがうまくなかったでしょうか．ちょっと変えてみました． -->
        <!-- //// 細かいことを気にすると，断定形で書きにくくなるのがくせものです・・・． -->

- \label{}, \ref{} を目に見えるように張る
    - [CTAN:macros/latex/required/tools/showkeys.dtx](https://mirror.ctan.org/macros/latex/required/tools/showkeys.dtx) ([qa:19427](https://okumuralab.org/~okumura/texfaq/qa/19427.html), ...)
- ハイフネーションの禁止
    - \hyphenpenalty=10000 \exhyphenpenalty=10000 と設定
    - \lefthyphenmin=100 \righthyphenmin=100 と設定
        <!-- ほかにもありますが，この 2 通りが手軽でしょう． -->

- 二段組にしたときに最終ページの左右カラムを揃える
    - [blance.sty](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/balance.html)，[CTAN:macros/latex/contrib/preprint/](https://mirror.ctan.org/macros/latex/contrib/preprint/)内 ([qa:32276](https://okumuralab.org/~okumura/texfaq/qa/32276.html)...)
- [TeXが苦手とする処理](</TeXが苦手とする処理/>)<del>（下線，飾り枠など）</del>
- 行列の転置の書き方
    - [qa:2476](https://okumuralab.org/~okumura/texfaq/qa/2476.html)からのスレッド：[qa:2478](https://okumuralab.org/~okumura/texfaq/qa/2478.html), [qa:2479](https://okumuralab.org/~okumura/texfaq/qa/2479.html), [qa:2480](https://okumuralab.org/~okumura/texfaq/qa/2480.html), [qa:2490](https://okumuralab.org/~okumura/texfaq/qa/2490.html), [qa:2496](https://okumuralab.org/~okumura/texfaq/qa/2496.html), [qa:2498](https://okumuralab.org/~okumura/texfaq/qa/2498.html), [qa:2502](https://okumuralab.org/~okumura/texfaq/qa/2502.html), [qa:2503](https://okumuralab.org/~okumura/texfaq/qa/2503.html), [qa:2568](https://okumuralab.org/~okumura/texfaq/qa/2568.html), [qa:2569](https://okumuralab.org/~okumura/texfaq/qa/2569.html), [qa:2571](https://okumuralab.org/~okumura/texfaq/qa/2571.html), [qa:2572](https://okumuralab.org/~okumura/texfaq/qa/2572.html), [qa:2573](https://okumuralab.org/~okumura/texfaq/qa/2573.html), [qa:2579](https://okumuralab.org/~okumura/texfaq/qa/2579.html), [qa:2583](https://okumuralab.org/~okumura/texfaq/qa/2583.html), [qa:2584](https://okumuralab.org/~okumura/texfaq/qa/2584.html), [qa:2585](https://okumuralab.org/~okumura/texfaq/qa/2585.html)
    - 上のスレッドで出てきたマクロの使い方の例：[qa:12045](https://okumuralab.org/~okumura/texfaq/qa/12045.html)
    - 大型演算子以外に使う \sideset：[qa:2511](https://okumuralab.org/~okumura/texfaq/qa/2511.html)
    - [qa:43655](https://okumuralab.org/~okumura/texfaq/qa/43655.html) に対する回答：[qa:43656](https://okumuralab.org/~okumura/texfaq/qa/43656.html), [qa:43657](https://okumuralab.org/~okumura/texfaq/qa/43657.html), [qa:43658](https://okumuralab.org/~okumura/texfaq/qa/43658.html), [qa:43667](https://okumuralab.org/~okumura/texfaq/qa/43667.html), [qa:43668](https://okumuralab.org/~okumura/texfaq/qa/43668.html)
- 「アンバランスな括弧」[qa:44132](https://okumuralab.org/~okumura/texfaq/qa/44132.html)，[qa:49364](https://okumuralab.org/~okumura/texfaq/qa/49364.html)（およびそれらの元質問）
    <!-- // もっとも，「仕事なのでやむをえない」というのでもなければ，適宜 -->
    <!-- // 斜線を用いて書き直すのが妥当．下記のサンプル文書を検討のこと． -->
    <!-- \documentclass{article} -->
    <!-- \usepackage{amsmath} -->
    <!--  -->
    <!-- \makeatletter -->
    <!-- \def\addshiftedparentheses{\addshifteddelimiters()} -->
    <!-- \def\addshiftedbraces{\addshifteddelimiters\{\}} -->
    <!-- \def\addshiftedbrackets{\addshifteddelimiters[]} -->
    <!-- \def\addshifteddelimiters#1#2#3{% -->
    <!--    \@ifnextchar^% -->
    <!--       {\@addshifteddelimiters@u{{#1}{#2}{#3}}}% -->
    <!--       {\@addshifteddelimiters@n{{#1}{#2}{#3}}}} -->
    <!-- \def\@addshifteddelimiters@u#1^#2{% -->
    <!--    \@ifnextchar_% -->
    <!--       {\@addshifteddelimiters@ul{#1{#2}}}% -->
    <!--       {\@@addshifteddelimiters{#1{#2}{}}}} -->
    <!-- \def\@addshifteddelimiters@ul#1_#2{\@@addshifteddelimiters{#1{#2}}} -->
    <!-- \def\@addshifteddelimiters@n#1{% -->
    <!--    \@ifnextchar_% -->
    <!--       {\@addshifteddelimiters@l{#1}}% -->
    <!--       {\@@addshifteddelimiters{#1{}{}}}} -->
    <!-- \def\@addshifteddelimiters@l#1_#2{% -->
    <!--    \@ifnextchar^% -->
    <!--       {\@addshifteddelimiters@lu{#1}{#2}}% -->
    <!--       {\@@addshifteddelimiters{#1{}{#2}}}} -->
    <!-- \def\@addshifteddelimiters@lu#1#2^#3{\@@addshifteddelimiters{#1{#3}{#2}}} -->
    <!-- \def\@@addshifteddelimiters{\mathpalette\@@@addshifteddelimiters} -->
    <!-- \def\@@@addshifteddelimiters#1#2{\@@@@addshifteddelimiters#1#2} -->
    <!-- \def\@@@@addshifteddelimiters#1#2#3#4#5#6{% -->
    <!--   \mathinner{% -->
    <!--      \setbox\z@\hbox{% -->
    <!--         \m@th -->
    <!--         $% -->
    <!--         \setbox\z@\hbox{$#1#4$}% -->
    <!--         \dimen@\ht\z@ -->
    <!--         \setbox\z@\hbox{$\vcenter{\box\z@}$}% -->
    <!--         \advance\dimen@-\ht\z@ -->
    <!--         \left#2 \box\z@ \right#3% -->
    <!--         \expandafter$\expandafter}\expandafter\dimen@\the\dimen@\relax -->
    <!--      \def\@tempa{#5}\def\@tempb{#6}% -->
    <!--      \ifx\@tempa\@empty -->
    <!--         \ifx\@tempb\@empty \let\@tempa\@empty -->
    <!--         \else              \def\@tempa{_{#6}}% -->
    <!--         \fi -->
    <!--      \else -->
    <!--         \ifx\@tempb\@empty \def\@tempa{^{#5}}% -->
    <!--         \else              \def\@tempa{_{#6}^{#5}}% -->
    <!--         \fi -->
    <!--      \fi -->
    <!--      \raise\dimen@\box\z@\@tempa}} -->
    <!-- \makeatother -->
    <!--  -->
    <!-- \begin{document} -->
    <!-- Though it is possible to produce a formula like -->
    <!-- \[ -->
    <!--     1 -->
    <!--   + \addshiftedparentheses{\frac{x}{x - \dfrac{1}{2}}} -->
    <!--   + \addshiftedparentheses{\frac{x - \dfrac{1}{2}}{x}}, -->
    <!-- \] -->
    <!-- it would be better to choose ``traditional'' expressions such as -->
    <!-- \[ -->
    <!--     1 -->
    <!--   + \left( \frac{x}{x - 1/2} \right) -->
    <!--   + \left( \frac{x - 1/2}{x} \right), -->
    <!-- \] -->
    <!-- or -->
    <!-- \[ -->
    <!--     1 -->
    <!--   + \left( \frac{x}{x - \frac{1}{2}} \right) -->
    <!--   + \left( \frac{x - \frac{1}{2}}{x} \right). -->
    <!-- \] -->
    <!-- \end{document} -->

- ArchiveQandA/dvipsで日本語がうまく出なかったときには

### コメント {#adc20c89}

- インストール先がCドライブとは限らないので（インストールディレクトリ）\dvioutとしたのですが…。 -- 若雲 2004-12-05 (日) 17:35:30
- ↑修正してみました。 -- トニイ 2005-03-18 (金) 07:20:18
    <!-- - ebbをPDF 1.4に対応させるには - - tacro &new{2006-03-04 (土) 20:26:14}; -->
    <!-- - ↑間違いです。すみません。 - - tacro &new{2006-03-04 (土) 20:27:24}; -->

- Wikiなので編集も削除も可能です。前の書き込みは間違いだったそうなので，コメントを付けて表示から消しました。 -- トニイ 2006-03-06 (月) 17:39:05
