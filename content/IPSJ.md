---
title: "IPSJ"
url: "/IPSJ/"
date: 2015-02-10T15:13:33Z
pukiwiki: "IPSJ"
---

# IPSJ

## [情報処理学会スタイル](http://www.ipsj.or.jp/journal/submit/style.html) {#v57694e7}

% Fix Me! 以下は情報が古そうなので，どなたか修正お願いします！

<!-- ここは ipsj が jis フォントメトリックに対応した時点で不要なので，コメントアウトします． -->
<!-- - --  -->
<!-- \documentclass{ipsjpapers} -->
<!-- の前に -->
<!--  \DeclareFontShape{JY1}{mc}{m}{n}{<-> jis}{} -->
<!--  \DeclareFontShape{JY1}{gt}{m}{n}{<-> jisg}{} -->
<!--  \DeclareFontShape{JT1}{mc}{m}{n}{<-> tmin10}{} -->
<!--  \DeclareFontShape{JT1}{gt}{m}{n}{<-> tgoth10}{} -->
<!-- を入れる． -->
<!-- - --  -->

### 注意 {#q68d87fb}

現在の情報処理学会スタイル ipsj.cls は jis フォントメトリックに対応しています． <!-- というわけなので，「ipsj+jisフォントメトリック」という項目名から「IPSJ」に変更しました． -->
ただし，upLaTeX には対応できていないようです． --&gt; [ipsj.cls で uplatex → NG](http://web.archive.org/web/20150228010937/http://uep.ipe.media.kyoto-u.ac.jp/)

upLaTeX に対応した up-ipsj.cls が存在します --&gt; [ipsj.cls を upLaTeX 用にしてみる（源ノ明朝・源ノ角ゴシックを使う）](https://gist.github.com/trueroad/c44312923bf02226c2274388941d0453)

LuaLaTeX に対応した ipsj.cls が存在します --&gt; [GitHub - watayan/ipsj_cls_for_techrep: 情報処理学会研究報告用クラスファイル（LuaLaTeX対応）](https://github.com/watayan/ipsj_cls_for_techrep)

<!-- （情報処理学会論文誌の投稿に関する）『LaTeX による論文作成のガイド』（第 7.2 版）の 4.1 項には -->
<!-- > -->
<!-- 例えば，\textheight などのいわゆる style parameter を変更するのは当然やめていただきたい． -->
<!-- < -->
<!-- とあります． -->
<!-- 「文書のデフォルトのフォントに関する設定」もまたそういったパラメータと同じく文書の体裁に影響を与えるものである以上，少なくとも「（情報処理学会論文誌への）投稿用原稿作成時には」上記のようなフォント関連の変更は慎んでください． -->
<!-- たとえ出版時に「閉じ括弧類と句読点が連続する箇所」などの調整が行われるにしても， -->
<!-- 「著者自身でのデフォルトのフォントの変更」というのは（ジャーナル類の）出版の一連のワークフローにおいては -->
<!-- 著者側の「越権行為」です． -->
<!--  -->
<!-- 新しいスタイルは A4 横置きになったので， -->
<!-- \documentclass{ipsjpapers} -->
<!-- の後に -->
<!-- \AtBeginDvi{\special{papersize=845pt,597pt}} -->
<!-- を入れます（または dvipdfmx に -l オプションを付ける）． -->

### 派生版 {#q33e05d4}

- [ipsj.cls を upLaTeX 用にしてみる（源ノ明朝・源ノ角ゴシックを使う）](https://gist.github.com/trueroad/c44312923bf02226c2274388941d0453)
- [IPSJ-techrep-xelatex](https://github.com/ken1row/IPSJ-techrep-xelatex) 情報処理学会研究会原稿をOverleafなどのXeLaTeX環境で執筆するための疑似スタイルファイル
- [ShareLatex を用いた情報処理学会研究会原稿の共同執筆](http://blog.k-tanaka.me/archives/42)

### 関連リンク {#xd2bfe1e}

- [突然ですが：MacでTeX環境を作って情報処理学会の研究会フォーマットでコンパイルするまで](https://ameblo.jp/a33amimi/entry-12335729743.html)
- [OS X El Capitan＋Sublime Text 3でヒラギノを埋め込んだPDFを作る](https://gist.github.com/d-satoi/13c970563a2f5a489c9d)
- [Overleaf で pLaTeX 使って日本語PDFをプレビューした話](http://3846masa.hatenablog.jp/entry/2016/02/15/003843)
- [情報処理学会のLaTeXファイルをコンパイル](https://d.akiroom.com/2013-02/ipsj-latex-compile/)
- [ipsj.cls で uplatex → NG](http://web.archive.org/web/20150228010937/http://uep.ipe.media.kyoto-u.ac.jp/)
- [情報処理学会論文誌等を執筆時にdvipdfmxでlandscapeしなくて困った人が読むエントリ](http://written.4403.biz/archives/2009/02/dvipdfmxlandscape.html)
