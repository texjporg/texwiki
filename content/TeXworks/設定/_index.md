---
title: "TeXworks/設定"
url: "/TeXworks/設定/"
date: 2012-07-12T19:39:57Z
bookCollapseSection: true
pukiwiki: "TeXworks/設定"
---

# TeXworks/設定

[TeXworks](/TeXworks/) > 設定

***

***

## 日本語環境用の設定 {#bcc74f23}

以下の（またはそれに対応する）設定は，TeX Live （2016 以降）や W32TeX に付属する TeXworks では既にすんでいます．公式サイトの Windows バイナリは，デフォルトで pdflatex によるコンパイルを試みるため，これでは日本語を扱えません．

<!-- W32TeX の TeXworks は pdfpLaTeX が標準になっています． -->
<!-- この pdfpLaTeX で使用されている C:\w32tex\bin\pdfplatex.bat は以下のように記述されています． -->

<!-- @echo off -->
<!-- platex -synctex=1 -jobname="%~n1" -kanji=utf8 -guess-input-enc %1 && dvipdfmx "%~n1" -->

<!-- この処理方法の場合 -->
<!--  -->
<!-- -ファイルの文字コードは自動判別されます． -->
<!-- -コンソールへの出力や log ファイルへの出力は UTF-8 で行われます． -->
<!-- -SyncTeX が使用できます． -->
<!-- -platex でエラーが発生して x を入力すると dvipdfmx が実行されずに終了できます． -->
<!-- -platex でエラーが発生して e を入力すると PDF ファイルが作成されている場合に PDF ビューアがアクティブにならずにすぐにエラー行にジャンプできます． -->

公式サイトの Windows バイナリを使用する場合は以下のように ptex2pdf （platex + dvipdfmx を行うスクリプト）によるコンパイルができるように設定しておきます．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set1.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set1.png" alt=""></a>

メニューから「編集」→「設定」と選びます．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set2.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set2.png" alt=""></a>

出てきた画面から「タイプセット」タブを選び（赤囲み），右下の「＋」ボタン（青囲み）を押します．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set3.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set3.png" alt=""></a>

次のように入力してください．（間違わないように以下をコピー＆ペーストするとよいでしょう．）引数を入力する際には「＋」ボタン（赤囲み）を押します．

- 名前：pLaTeX (ptex2pdf)
- プログラム：ptex2pdf
- 引数：上から
    - -l
    - -ot
    - -kanji=utf8 $synctexoption
    - $fullname

OKを押して閉じてください．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set4.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set4.png" alt=""></a>

更に二つのプログラム設定を追加します．

- 名前：pBibTeX
- プログラム：pbibtex.exe
- 引数：$basename

「実行後，PDF を表示する」のチェックを外しておきます．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set5.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set5.png" alt=""></a>

- 名前：mendex
- プログラム：mendex.exe
- 引数：$basename

やはり「実行後，PDF を表示する」のチェックを外しておきます．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set7.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set7.png" alt=""></a>

デフォルトを「pLaTeX (ptex2pdf)」に変更しておきます．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set6.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set6.png" alt=""></a>

OK を押して最初の画面に戻り，必要ならば左上のコンボボックスから「pLaTeX (ptex2pdf)」を選びます．

## エンコーディングの設定 {#sc2efa04}

\[編集\] &gt; \[設定\] のエディタタブのエンコーディングのリストから使用するエンコーディングを指定できます．
デフォルトでは UTF-8 に設定されています．

エディタの編集画面の右下に表示されているエンコーディングをクリックしてエンコーディングを変更することもできます．

## タイプセットの設定 {#q50d2378}

- upLaTeX によるタイプセット
    - 名前：upLaTeX (ptex2pdf)
    - プログラム：ptex2pdf
    - 引数：
        - -l
        - -u
        - -ot
        - -kanji=utf8 $synctexoption
        - $fullname
    - 「実行後，PDF を表示する」にチェックを入れる．

- Latexmk（とpLaTeX）によるタイプセット
    - 名前：pLaTeX (latexmk)
    - プログラム：latexmk
    - 引数：
        - -latex=platex -kanji=utf8 $synctexoption %O %S
        - -e
        - $dvipdf='dvipdfmx %O -o %D %S';$bibtex='pbibtex %O %B';$makeindex='mendex %O -o %D %S';
        - -pdfdvi
        - $fullname
    - 「実行後，PDF を表示する」にチェックを入れる．

{{< children >}}

も参照．

## スペルチェックの辞書の設定 {#vd0f0d24}

TeX Live の TeXworks と macOS の TeXworks はスペルチェックの辞書が含まれていないので自分で設定する必要があります．

W32TeX の TeXworks はスペルチェックの辞書が含まれているので設定する必要はありません．
W32TeX に付属のものは，スペルチェック用の英語辞書を前もって入れてあります．
詳細については，ヘルプを見てください．

### Windows の TeX Live 2017 の場合 {#ycb12d64}

1. [https://addons.mozilla.org/ja/thunderbird/language-tools/](https://addons.mozilla.org/ja/thunderbird/language-tools/) から辞書をダウンロードします．
1. ダウンロードしたファイルの拡張子を zip に変更して展開します．
1. TeXworks を起動してすぐに終了します．
1. C:\ユーザー\\&lt;ユーザー アカウント名>\\.texlive2017\texmf-config\texworks フォルダーまたは C:\ユーザー\\&lt;ユーザー アカウント名>\TeXworks フォルダーが作成されていることを確認します
1. C:\ユーザー\\&lt;ユーザー アカウント名>\\.texlive2017\texmf-config\texworks\dictionaries フォルダーまたは C:\ユーザー\\&lt;ユーザー アカウント名>\TeXworks\dictionaries フォルダーを作成して辞書 (English (US) であれば en-US.aff と en-US.dic) を配置します
1. TeXworks を起動して \[編集\] &gt; \[設定\] &gt; \[エディタ\] &gt; \[スペルチェッカの言語\] から辞書を選択します．
1. \[編集\] &gt; \[スペルチェック\] で辞書を選択します．

### macOS の場合 {#d0319cb7}

1. [https://addons.mozilla.org/ja/thunderbird/language-tools/](https://addons.mozilla.org/ja/thunderbird/language-tools/) から辞書をダウンロードします．
1. ダウンロードしたファイルの拡張子を zip に変更して展開します．
1. TeXworks を起動してすぐに終了します．
1. /Users/&lt;ユーザー名>/Library/TeXworks/ ディレクトリが作成されていることを確認します
1. /Users/&lt;ユーザー名>/Library/TeXworks/dictionaries ディレクトリを作成して辞書 (English (US) であれば en-US.aff と en-US.dic) を配置します
1. TeXworks を起動して \[編集\] &gt; \[設定\] &gt; \[エディタ\] &gt; \[スペルチェッカの言語\] から辞書を選択します．
1. \[編集\] &gt; \[スペルチェック\] で辞書を選択します．

## フォントの選択 {#h886fb41}

\[フォーマット\] &gt; \[フォント\] で編集中のファイルを表示するためのフォントを選択できます．

## 構文の色付け {#bfadedc6}

\[フォーマット\] &gt; \[構文の色付け\] &gt; \[LaTeX\] を選択すると編集中のファイルが色分けされるようになります．

## 背景色・文字色の変更 {#g4b457a4}

- [Texworksで背景色と文字の色やキーワードの色を変更するには](http://blogs.yahoo.co.jp/tensai10432/14697466.html)
- [TeXworksの背景色・文字色を変える](http://d.hatena.ne.jp/tasusu/20111106/1320588877)
