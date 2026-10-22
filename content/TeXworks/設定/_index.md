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

### TeX Live に付属する TeXworks の場合 {#o58363ec}

TeX Live に付属する TeXworks では既に日本語環境用の設定がされています。

### TeXworks 公式サイトの TeXworks の場合 {#tcf1ce56}

TeXworks 公式サイトの TeXworks は、日本語環境用の設定はされておらず、デフォルトで pdflatex によるコンパイルを試みるため、日本語を扱えません。

TeXworks 公式サイトの TeXworks を使用する場合は以下のように ptex2pdf （platex + dvipdfmx を行うスクリプト）によるコンパイルができるように、タイプセットエンジンを選択するドロップダウンリストに新しい選択肢として追加登録しておきます．
まず、次の図に示すように、メニューから「編集」→「設定」と選びます．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set1.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set1.png" alt=""></a>

続いて、出てきた設定ダイアログで次の図のように「タイプセット」タブを選び（赤囲み），右下の「＋」ボタン（青囲み）を押します．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set2.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set2.png" alt=""></a>

続いて、出てきた選択肢追加用のダイアログで次の図のように新しいタイプセットエンジンの設定を登録します。
次のように入力してください．（間違わないように以下をコピー＆ペーストするとよいでしょう．）引数を入力する際には「＋」ボタン（赤囲み）を押します．

- 名前：pLaTeX (ptex2pdf)
- プログラム：ptex2pdf
- 引数：上から
    - -l
    - -ot
    - -kanji=utf8 $synctexoption
    - $fullname

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set3.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set3.png" alt=""></a>

各項目の入力が済んだらOKを押して閉じてください．

今後の運用で索引付きの文書を作成する場合は、索引作成用の二つの補助プログラムを同じように登録しておくと簡単に起動できるようになります。索引作成用のプログラムはタイプセットエンジンではありませんが、タイプセットエンジンの登録と同じダイアログで行います。

まず、pBibTeX を次の図のように登録します。

- 名前：pBibTeX
- プログラム：pbibtex.exe
- 引数：$basename

「実行後，PDF を表示する」のチェックを外しておきます．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set4.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set4.png" alt=""></a>

もう一つは mendex です。やはり次の図のように登録します。

- 名前：mendex
- プログラム：mendex.exe
- 引数：$basename

これも「実行後，PDF を表示する」のチェックを外しておきます．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set5.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set5.png" alt=""></a>

各プログラムの登録が済んだら、次の図のように、タイプセット時に優先的に使用するエンジン（デフォルトエンジン）として「pLaTeX (ptex2pdf)」を設定しておきます。

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set7.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set7.png" alt=""></a>

OK を押して最初の画面に戻り，必要ならば次の図に示すように左上のドロップダウンリストから「pLaTeX (ptex2pdf)」を選んだ状態にしておきます．

<a href="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set6.png"><img src="/attach/TeXworks/%E8%A8%AD%E5%AE%9A/set6.png" alt=""></a>

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
        - -kanji=utf8 -no-guess-input-enc $synctexoption
        - $fullname
    - 「実行後，PDF を表示する」にチェックを入れる．

- Latexmk と upLaTeX によるタイプセット
    - 名前：upLaTeX (latexmk)
    - プログラム：latexmk
    - 引数：
        - -latex=uplatex -kanji=utf8 -no-guess-input-enc $synctexoption %O %S
        - -e
        - $dvipdf='dvipdfmx %O -o %D %S';$bibtex='bibtexu %O %B';$makeindex='upmendex %O -o %D %S';
        - -pdfdvi
        - $fullname
    - 「実行後，PDF を表示する」にチェックを入れる．

{{< children >}}

も参照．

## スペルチェックの辞書の設定 {#vd0f0d24}

TeXworks はスペルチェックの辞書が含まれていないので自分で設定する必要があります．

### Windows の TeX Live 2026 の場合 {#ycb12d64}

1. [https://addons.mozilla.org/ja/thunderbird/language-tools/](https://addons.mozilla.org/ja/thunderbird/language-tools/) から辞書をダウンロードします．
1. ダウンロードしたファイルの拡張子を zip に変更して展開します．
1. TeXworks を起動してすぐに終了します．
1. C:\ユーザー\\&lt;ユーザー アカウント名>\\.texlive2026\texmf-config\texworks フォルダーまたは C:\ユーザー\\&lt;ユーザー アカウント名>\TeXworks フォルダーが作成されていることを確認します
1. C:\ユーザー\\&lt;ユーザー アカウント名>\\.texlive2026\texmf-config\texworks\dictionaries フォルダーまたは C:\ユーザー\\&lt;ユーザー アカウント名>\TeXworks\dictionaries フォルダーを作成して辞書 (English (US) であれば en-US.aff と en-US.dic) を配置します
1. TeXworks を起動して \[編集\] &gt; \[設定\] &gt; \[エディタ\] &gt; \[スペルチェッカの言語\] から辞書を選択します．
1. \[編集\] &gt; \[スペルチェック\] で辞書を選択します．

### macOS の場合 {#d0319cb7}

1. [https://addons.mozilla.org/ja/thunderbird/language-tools/](https://addons.mozilla.org/ja/thunderbird/language-tools/) から辞書をダウンロードします．
1. ダウンロードしたファイルの拡張子を zip に変更して展開します．
1. TeXworks を起動してすぐに終了します．
1. /Users/&lt;ユーザー名>/Library/TeXworks/ ディレクトリ、もしくは/Users/&lt;ユーザー名>/Library/Application Support/TUG/TeXworks ディレクトリが作成されていることを確認します
1. 上記の TeXworks ディレクトリの中に dictionaries ディレクトリを作成して辞書 (English (US) であれば en-US.aff と en-US.dic) を配置します
1. TeXworks を起動して \[編集\] &gt; \[設定\] &gt; \[エディタ\] &gt; \[スペルチェッカの言語\] から辞書を選択します．
1. \[編集\] &gt; \[スペルチェック\] で辞書を選択します．

### 設定がうまくいかない場合 {#e58dee18}

- texworks のスペルチェックを英国英語で行いたい ([forum:3828](https://okumuralab.org/tex/mod/forum/discuss.php?d=3828))
- texworksでスペルチェッカーが機能しない([forum:3149](https://okumuralab.org/tex/mod/forum/discuss.php?d=3149))
- texworks で スペルチェッカーがインストールできない ([forum:2651](https://okumuralab.org/tex/mod/forum/discuss.php?d=2651))

を参照してください。

## フォントの選択 {#h886fb41}

\[フォーマット\] &gt; \[フォント\] で編集中のファイルを表示するためのフォントを選択できます．

## 構文の色付け {#bfadedc6}

\[フォーマット\] &gt; \[構文の色付け\] &gt; \[LaTeX\] を選択すると編集中のファイルが色分けされるようになります．

## 背景色・文字色の変更 {#g4b457a4}

- [Texworksで背景色と文字の色やキーワードの色を変更するには](https://blogs.yahoo.co.jp/tensai10432/14697466.html)
- [TeXworksの背景色・文字色を変える](https://tasusu.hatenablog.com/entry/20111106/1320588877)
