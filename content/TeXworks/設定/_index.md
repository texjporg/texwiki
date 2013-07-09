---
title: "TeXworks/設定"
url: "/TeXworks/設定/"
date: 2012-07-12T19:39:57Z
bookCollapseSection: true
pukiwiki: "TeXworks/設定"
---

# TeXworks/設定

[TeXworks](/TeXworks/) > 設定

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

```

```

## エンコーディングの設定 {#sc2efa04}

\[編集\]-\[設定\] のエディタタブのエンコーディングのリストから使用するエンコーディングを指定できます．<br>
デフォルトでは UTF-8 に設定されています．<br>
Shift_JIS/ISO-2022-JP/EUC-JP も選択できます．<br>
エディタの編集画面の右下に表示されているエンコーディングをクリックしてエンコーディングを変更することもできます．<br>
Shift_JIS/ISO-2022-JP/EUC-JP が表示されない場合は 最新版の TeXworks (TeXworks 0.4.4 以降) をインストールしてください．<br>

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>TeXworksの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　全体　\]</ins></span><strong>\[　エディタ　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　プレビュー　\]\[　タイプセット　\]\[　スクリプト　\]</ins></span><br>
　　　　エディタのデフォルト<br>
　　　　<ins> MS UI Gothic　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼</ins> <ins>12 pt　\[◆\]</ins><br>
　　　　タブ幅:　　　　　　　　　　　　　　　　　　　　　　<ins>32 px　　　　　　　　　　　　　　　　　\[◆\]</ins><br>
　　　　☐ 行番号表示　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ 行の折り返し<br>
　　　　構文の色付け: <span style="color:Black;background-color:#EEEEEE;">\[ LaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　　　自動インデント: <span style="color:Black;background-color:#EEEEEE;">\[ なし　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 ▼\]</span><br>
　　　　引用符の入力支援 <span style="color:Black;background-color:#EEEEEE;">\[ なし　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　　　スペルチェッカの言語: <span style="color:Black;background-color:#EEEEEE;">\[ English - UnitedStates (en_US)　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　　　エンコーディング: <span style="color:Black;background-color:#EEEEEE;">\[ UTF-8　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　　　　エディタ全体のオプション<br>
　　　　☐ 現在カーソルのある行をハイライトする<br>
　　　　☑ 自動補完を有効にする<br>

<br>

<br>

<br>

<br>

　　　注意:これはデフォルトの設定です。設定を変更しても、すでに開いているウィンドウには影響しません。既存のウィンドウの設定を変更す<br>
　　　るには、"フォーマット" メニューから設定をおこなってください<br>

***

## タイプセットの設定 {#q50d2378}

{{< children >}}

を参照．

## スペルチェックの辞書の設定 {#vd0f0d24}

W32TeX の TeXworks はスペルチェックの辞書が含まれているので設定する必要はありません．<br>
TeX Live 2013, MacTeX-2013 の TeXworks はスペルチェックの辞書が含まれていないので自分で設定する必要があります．<br>

### Windowes 8, 7, Vista (TeX Live 2013) の場合 {#ycb12d64}

1. [http://extensions.services.openoffice.org/dictionary](http://extensions.services.openoffice.org/dictionary) または [https://addons.mozilla.org/ja/thunderbird/language-tools/](https://addons.mozilla.org/ja/thunderbird/language-tools/) から辞書をダウンロードします．
1. ダウンロードしたファイルの拡張子を zip に変更して展開します．
1. TeXworks を起動してすぐに終了します．
1. C:\ユーザー\\&lt;ユーザー アカウント名>\TeXworks フォルダーが作成されていることを確認します
1. C:\ユーザー\\&lt;ユーザー アカウント名>\TeXworks\dictionaries フォルダーを作成して辞書 (English (US) であれば en-US.aff と en-US.dic) を配置します
1. TeXworks を起動して \[編集\]-\[設定\]-\[エディタ\]-\[スペルチェッカの言語\] から辞書を選択します．
1. \[編集\]-\[スペルチェック\] で辞書を選択します．

上記の設定でうまくいかない場合は [texlive 2012](http://technology.dip.jp/~ray/2013/02/967) の「texworksのスペルチェッカの辞書の設置場所」を参照してください．

### OS X (MacTeX-2013) の場合 {#d0319cb7}

1. [http://extensions.services.openoffice.org/dictionary](http://extensions.services.openoffice.org/dictionary) または [https://addons.mozilla.org/ja/thunderbird/language-tools/](https://addons.mozilla.org/ja/thunderbird/language-tools/) から辞書をダウンロードします．
1. ダウンロードしたファイルの拡張子を zip に変更して展開します．
1. TeXworks を起動してすぐに終了します．
1. /Users/&lt;ユーザー名>/Library/TeXworks/ ディレクトリが作成されていることを確認します
1. /Users/&lt;ユーザー名>/Library/TeXworks/dictionaries ディレクトリを作成して辞書 (English (US) であれば en-US.aff と en-US.dic) を配置します
1. TeXworks を起動して \[編集\]-\[設定\]-\[エディタ\]-\[スペルチェッカの言語\] から辞書を選択します．
1. \[編集\]-\[スペルチェック\] で辞書を選択します．

## 背景色・文字色の変更 {#g4b457a4}

- [Texworksで背景色と文字の色やキーワードの色を変更するには](http://blogs.yahoo.co.jp/tensai10432/14697466.html)
- [TeXworksの背景色・文字色を変える](http://d.hatena.ne.jp/tasusu/20111106/1320588877)
