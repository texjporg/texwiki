---
title: "TeXworks/設定"
url: "/TeXworks/設定/"
date: 2012-07-12T19:39:57Z
bookCollapseSection: true
pukiwiki: "TeXworks/設定"
---

# TeXworks/設定

[TeXworks](/TeXworks/) > 設定

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

```

```

## エンコーディングの設定 {#sc2efa04}

\[編集\]-\[設定\] のエディタタブのエンコーディングのリストから使用するエンコーディングを指定できます．<br>
デフォルトでは UTF-8 に設定されています．<br>
エディタの編集画面の右下に表示されているエンコーディングをクリックしてエンコーディングを変更することもできます．<br>

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXworksの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　全体　\]</ins></span><strong>\[　エディタ　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　プレビュー　\]\[　タイプセット　\]\[　スクリプト　\]</ins></span><br>
　　　　エディタのデフォルト<br>
　　　　<ins> メイリオ　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong></ins> <ins>12 pt　\[<strong>⇕</strong>\]</ins><br>
　　　　タブ幅:　　　　　　　　　　　　　　　　　　　　　　<ins>32 px　　　　　　　　　　　　　　　　　\[<strong>⇕</strong>\]</ins><br>
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
TeX Live, MacTeX の TeXworks はスペルチェックの辞書が含まれていないので自分で設定する必要があります．<br>

### Windowes 8.1, 8, 7 (TeX Live) の場合 {#ycb12d64}

1. [http://extensions.services.openoffice.org/](http://extensions.services.openoffice.org/) または [https://addons.mozilla.org/ja/thunderbird/language-tools/](https://addons.mozilla.org/ja/thunderbird/language-tools/) から辞書をダウンロードします．
1. ダウンロードしたファイルの拡張子を zip に変更して展開します．
1. TeXworks を起動してすぐに終了します．
1. C:\ユーザー\\&lt;ユーザー アカウント名>\TeXworks フォルダーが作成されていることを確認します
1. C:\ユーザー\\&lt;ユーザー アカウント名>\TeXworks\dictionaries フォルダーを作成して辞書 (English (US) であれば en-US.aff と en-US.dic) を配置します
1. TeXworks を起動して \[編集\]-\[設定\]-\[エディタ\]-\[スペルチェッカの言語\] から辞書を選択します．
1. \[編集\]-\[スペルチェック\] で辞書を選択します．

上記の設定でうまくいかない場合は [texlive 2012 &raquo; leaf letter](http://technology.dip.jp/~ray/2013/02/967) の「texworksのスペルチェッカの辞書の設置場所」を参照してください．

### OS X (MacTeX) の場合 {#d0319cb7}

1. [http://extensions.services.openoffice.org/](http://extensions.services.openoffice.org/) または [https://addons.mozilla.org/ja/thunderbird/language-tools/](https://addons.mozilla.org/ja/thunderbird/language-tools/) から辞書をダウンロードします．
1. ダウンロードしたファイルの拡張子を zip に変更して展開します．
1. TeXworks を起動してすぐに終了します．
1. /Users/&lt;ユーザー名>/Library/TeXworks/ ディレクトリが作成されていることを確認します
1. /Users/&lt;ユーザー名>/Library/TeXworks/dictionaries ディレクトリを作成して辞書 (English (US) であれば en-US.aff と en-US.dic) を配置します
1. TeXworks を起動して \[編集\]-\[設定\]-\[エディタ\]-\[スペルチェッカの言語\] から辞書を選択します．
1. \[編集\]-\[スペルチェック\] で辞書を選択します．

## フォントの選択 {#h886fb41}

\[フォーマット\]-\[フォント\] で編集中のファイルを表示するためのフォントを選択できます．<br>

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>フォントの選択</strong></span>　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

フォント(F)　　　　　　　　　　　　　　　　　　　　　　　フォントスタイル(Y)　　　　　　　　　サイズ(S)<br>
<span style="color:White;background-color:#1188FF;">メイリオ</span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">明朝</span>　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">12</span><br>

Urdu Typesetting　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">明朝　　　　　　　　　　　　　　</span>　　 6<br>
Utsaah　　　　　　　　　　　　　　　　　　　　　　　　　　ゴシック　　　　　　　　　　　　　　 7<br>
Vani　　　　　　　　　　　　　　　　　　　　　　　　　　　 イタリック　　　　　　　　　　　　　　8<br>
Verdana　　　　　　　　　　　　　　　　　　　　　　　　　ゴシック イタリック　　　　　　　　　9<br>
Vijaya　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　10<br>
Vrinda　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　11<br>
Webdings　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">12　　　　　　</span><br>
Wingdings　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　14<br>
<span style="color:Black;background-color:#DAEAFF;">メイリオ　　　　　　　　　　　　　　　　　　　　　　　</span>　　　　　　　　　　　　　　　　　　　　　　16<br>

<br>

　文字飾り　　　　　　　　　　　　　　　　　　　　　　　　　サンプル<br>
　☐ 取り消し線(K)<br>
　☐ 下線(U)　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>AaBbYyZz</strong><br>
　言語(I)<br>
　<span style="color:Black;background-color:#EEEEEE;">\[ すべて　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

***

## 構文の色付け {#bfadedc6}

\[フォーマット\]-\[構文の色付け\]-\[LaTeX\] を選択すると編集中のファイルが色分けされるようになります．<br>

## 背景色・文字色の変更 {#g4b457a4}

- [Texworksで背景色と文字の色やキーワードの色を変更するには](http://blogs.yahoo.co.jp/tensai10432/14697466.html)
- [TeXworksの背景色・文字色を変える](http://d.hatena.ne.jp/tasusu/20111106/1320588877)
