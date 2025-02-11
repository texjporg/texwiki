---
title: "WinShell"
url: "/WinShell/"
date: 2013-01-25T16:28:38Z
pukiwiki: "WinShell"
---

# WinShell

## WinShell (非推奨) {#t788b13b}

WinShell は Windows 向けに開発された TeX 用の統合環境です。
しかし，WinShell には

- 設定 &gt; 時刻と言語 &gt; 言語と地域 &gt; 管理用の言語の設定 &gt; \[管理\]タブの\[システムロケールの変更(C)...\] &gt; ☐ベータ: ワールドワイド言語サポートで Unicode UTF-8 を使用(U)（チェックを外した状態）&gt; \[OK\] の場合に \[LaTeX\]、\[pdfLaTeX\] を実行すると Runtime Error! が発生する
- エンコーディングが ShiftJIS の場合に文字化けの問題が回避できない
    [^1]

などの問題があり，とりわけ日本語文書を作成する際に致命的な問題が発生します。
現在では UTF-8 に対応した [LyX](/LyX/), [TeXstudio](/TeXstudio/), [TeXworks](/TeXworks/) などの統合環境を使用することが推奨されています（[古い情報](</古い情報/#zc6d6db5>)も参考に）。

<!-- とりあえず復活させてみました。「設定」以下はバックアップから取得したものに手を付けていません。 -->
<!-- 特にこのページの「ShiftJIS のダメ文字」の記述は，WinShell に限らず一般論として価値がありますよね？ -->

***

***

## WinShell とは {#s864df7d}

WinShell は，多言語に対応した LaTeX と TeX のための統合環境 (IDE) です。

- [WinShell - LaTeX User Front End](http://www.winshell.org/)
- [https://web.archive.org/web/20241225120748/http://winshell.org/](https://web.archive.org/web/20241225120748/http://winshell.org/)

<!-- Welcome to WinShell! -->
<!-- It looks like you're using an ad blocker. That's okay. Who doesn't? -->
<!--  -->
<!-- But our website is made possible by displaying online advertisements to our visitors. -->
<!-- Please consider supporting us by disabling your ad blocker. -->

### お知らせ {#z73b9e72}

[奥村晴彦](https://okumuralab.org/~okumura/)，黒木裕介 著
『[［改訂第9版］LaTeX美文書作成入門](https://github.com/okumuralab/bibun9)』
では，おすすめの統合環境が [<strong>TeXworks</strong>](/TeXworks/) になりました。

### 動作環境 {#f8ed906d}

Windows

### 特徴 {#mba54fc6}

WinShell には

- テキストエディタ
- 構文の強調表示
- プロジェクト管理
- スペルチェック
- 表の作成ウィザード
- BibTeX サポート
- Unicode サポート
- ユーザー定義オプション

などの機能があります。

<!-- ** 日本語言語ファイル [#z273ed84] -->
<!--  -->
<!-- -[[winshell-lang-ja_JP:https://github.com/new3kinnnn/winshell-lang-ja_JP]] -->
<!--  -->
<!-- [[new3kinnnn:https://github.com/new3kinnnn]] さんが WinShell 日本語言語ファイルを公開されています。 -->
<!-- WinShell に付属の日本語言語ファイルは，一部翻訳されていない部分があるので，気になる方はこれも合わせてダウンロードしてください。 -->
<!-- ダウンロードしたファイルは WinShell の Translations フォルダーに置いてください。 -->

## 不具合 {#m3e6b0cc}

### 設定 &gt; 時刻と言語 &gt; 言語と地域 &gt; 管理用の言語の設定 &gt; \[管理\]タブの\[システムロケールの変更(C)...\] &gt; ☐ベータ: ワールドワイド言語サポートで Unicode UTF-8 を使用(U)（チェックを外した状態）&gt; \[OK\] の場合に \[PDFLaTeX\], \[LaTeX\] を実行すると Runtime Error! → [LyX](/LyX/), [TeXstudio](/TeXstudio/), [TeXworks](/TeXworks/) などの統合環境を使用する {#g47585a4}

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [TeXworks](/TeXworks/)

などのオープンソースの統合環境では，「ワールドワイド言語サポートで Unicode UTF-8 を使用」が OFF でエンコーディングが UTF-8 でも問題が発生しません。

### Adobe Acrobat Reader で PDF ファイルが表示できない → [SumatraPDF](/SumatraPDF/) を使用する {#s2ec7c9c}

- [ACROBAT　Xと美文書４版との整合性](https://okumuralab.org/tex/mod/forum/discuss.php?d=1761)

Adobe Acrobat Reader は SumatraPDF のメニューの \[☰\] &gt; \[ファイル(F)\] &gt; \[Adobe Reader で開く(A)\] から起動できます。
Adobe Acrobat Reader でないと確認できない PDF ファイルを作成する場合は以下の記述を参照してください。

WinShell は Adobe Acrobat Reader, Adobe Acrobat, SumatraPDF の DDE に対応しています。
[^2]
これらのソフトウェアを PDFView に設定すると，WinShell は PDF ファイルの表示に DDE を使用します。
ただし，Adobe Acrobat Reader で DDE を使用して PDF ファイルを表示しようとすると，レジストリの HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\application の (既定) の値によっては

```
Cannot start AcrobatReader or open the document.
```

という警告メッセージが表示され，PDF ファイルが表示できない場合があります。

<img src="https://okumuralab.org/tex/pluginfile.php/6/mod_forum/attachment/10292/winshell.png" alt="" width="50%">

この問題は，Adobe Acrobat Reader を最新版にアップデートして上記のレジストリの (既定) の値のデータを

```
AcroViewA24
```

に修正することで解消できます。
[^3]

DDE を使用する場合は PDFView を以下のように設定します。

- exeファイル名：
    - "C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrobat.exe"
- コマンドライン：
    - "%s.pdf"

DDE を使用しない場合は PDFView を以下のように設定します。

- exeファイル名：
    - cmd.exe
- コマンドライン：
    - /c start "C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrobat.exe" "%s.pdf"

### 主なTeXプログラムの設定に使用するコマンドラインの引数のパースの仕方に問題がある → Ruby, Windows PowerShell, バッチファイル などを使用する {#v088befc}

WinShell は主なTeXプログラムの設定に使用するコマンドラインの引数のパースの仕方に問題があります。
WinShell の場合は例えば LaTeX のコマンドラインの設定で &#x25;s を2回以上使用すると WinShell がクラッシュします。
Ruby や Windows PowerShell の変数を使用して &#x25;s を一度だけ使用するように設定を記述すれば OK です。
Ruby, Windows PowerShell の他に バッチファイルを使用しても OK です。

### エンコーディングが ShiftJIS の場合，対応する括弧の強調表示時に日本語が文字化けする → 「ワールドワイド言語サポートで Unicode UTF-8 を使用」を有効にして UTF-8 を使用する {#n7cba889}

エンコーディングが ShiftJIS の場合，対応する括弧の強調表示時に日本語が文字化けする不具合があります。
例えば

```
\chapter{日本語文字
```

と入力してから “}” を付けると，括弧が緑色に表示され，文字入力カーソルを “本” の後ろに移動させると文字化けします。

エンコーディングが ShiftJIS の場合，特定の文字を{}の中で使用し，文字入力カーソルを特定の文字の後ろに移動させると文字化けします。
設定 &gt; 時刻と言語 &gt; 言語と地域 &gt; 管理用の言語の設定 &gt; \[管理\]タブの\[システムロケールの変更(C)...\] &gt; ☑ベータ: ワールドワイド言語サポートで Unicode UTF-8 を使用(U) &gt; \[OK\] を実行して UTF-8 を使用すれば文字化けと Runtime Error! を回避できます。
ShiftJIS を使用してなおかつ文字化けを回避したければ，対応する括弧の強調表示のチェックを外すほかありません。
「オプション」から「強調表示」を選択し，対応する括弧の強調表示(M) のチェックをはずしてください。

#### WinShell のエンコーディングが ShiftJIS の場合にカーソルを合わせると消える文字について {#hec85ef2}

関連内容：TeX フォーラム内の質問「WinShellにてカーソルを合わせると消える文字について」 [forum:156](https://okumuralab.org/tex/mod/forum/discuss.php?d=156)

LaTeX などのメッセージ出力欄においても，日本語が出力される場合文字化けします。<br>
プロジェクトの ［目次］ において，\section に日本語を指定した場合に文字が表示されない不具合があります。

{}の中で使用するとエンコーディングが ShiftJIS の場合に不具合が起こる文字を以下の通りにまとめます。

> | 2-byte 目 | 文字 | エンコーディングが ShiftJIS の場合に不具合が起こる文字 |
> |---|---|---|
> | 0x7b | { | ＋ ボ к 閲 顎 宮 鶏 砿 施 旬 須 捜 畜 怒 倍 府 本 養 几 嘴 學 悳 掉 桀 毬 炮 痣 窖 縵 艝 蛔 諚 轆 閔 驅 黠 垬 葈 |
> | 0x7d | } | マ м 厭 笠 急 迎 閤 枝 殉 図 挿 筑 党 媒 扶 凡 抑 凩 嘲 孺 怡 掵 栲 毳 烋 痾 竈 繃 艟 蛩 諳 轗 閘 驀 黨 埇 蕓 |
>

1行目の文字群は 2-byte 目が 0x7b ( { ) になっており，2行目の文字群は 2-byte 目が 0x7d ( } ) となっているため，エラーが発生します。
これらの文字群を使用すると WinShell の BibTeX のフロントエンド編集での読み込みもできません。
また，プロジェクトウィンドウを利用している場合は，参考文献一覧も上記文字群が含まれている場合は正常に表示できません。

対策として，上記文字群が含まれている BibTeX 項目を，別の bib ファイルに隔離して2つの bib ファイルを使い分けると少し使い勝手が向上します。
その際，隔離した bib が \_Unknown にまとめて表示されれば，WinShell が本来意図して付けた BibTeX の機能を使用できるかと思います。 <!-- ちなみに確認 OS は XP SP2 32ビット Professional 版 -->

【参考】

- [Shift_JISのダメ文字](https://sites.google.com/site/fudist/Home/grep/sjis-damemoji-jp)
    - [ダメ文字一覧表](https://sites.google.com/site/fudist/Home/grep/sjis-damemoji-jp/table)

## 設定 {#xe1b50b7}

### 設定ファイル {#r1bd4e35}

WinShell のポータブル版は WinShell.exe と同じフォルダーの Settings フォルダーに設定ファイルが作成されます。

### 一般 {#w5d7526c}

メニューから \[オプション\] &gt; \[一般\] をクリックします。

重要な文書を作成する場合は，バックアップ(.bak)ファイル作成(C) にチェックを入れておきましょう。

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　<strong>\[ 一般　\]</strong>　　　　　　　　　　　　　　　<strong>WinShellの一般的なオプションの変更</strong><br>
　\[ 主なTeXプログラムの設定 \]<br>
　\[ ユーザ指定プログラム \]<br>
　\[ マクロ　\]　　　　　　　　　　　　言語<br>
　\[ テキストエディタ \]　　　　　　　　　　WinShell:　　　　　　　　　　　　　　　　　　　　スペルチェック:<br>
　\[ アップデート \]　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[Japanese 　 　 　　　　　&nbsp;&nbsp;<strong>ᐯ</strong>\]</span>　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[en_US 　 　 　 　 　 　 　 　 　　<strong>ᐯ</strong>\]</span><br>
　\[ 情報 \]　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　追加(A)　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　編集(E)...　\]</span>　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　追加(A)　\]</span><br>

<br>

　　　　　　　　　　　　　　　　　　ファイル<br>
　　　　　　　　　　　　　　　　　　　　☑ バックアップ(.bak)ファイル作成(C)<br>
　　　　　　　　　　　　　　　　　　　　☐ 終了時に自動保存(S)<br>
　　　　　　　　　　　　　　　　　　　　☑ 起動時に開いているファイルを再読み込み<br>

<br>

　　　　　　　　　　　　　　　　　　BibTeXのフロントエンド<br>
　　　　　　　　　　　　　　　　　　　　☑ 内臓のBibTeXフロントエンドを使用<br>

***

### テキストエディタ {#y5d09419}

メニューから \[オプション\] &gt; \[テキストエディタ\] をクリックするとテキストエディタで使用するフォントが選択できます。<br>
日本語のフォントを選択して、『スクリプト』から「日本語」、『エンコーディング』から「UTF-8」を選択します。<br>
『エンコーディング』から「ShiftJIS」を選択することもできますが、[上述](/WinShell/#n7cba889)のように，ShiftJIS では文字化けが発生しますので，これを回避するために『エンコーディング』を「UTF-8」に変更して「ワールドワイド言語サポートで Unicode UTF-8 を使用」を ON にします。<br>
日本語のフォントは確認の上ご自分の用途に応じたものを選んでください。<br>
フォント名として「@ＭＳ ゴシック」のような “@” から始まる名前のフォントを選択するとテキストエディタの和文文字が横倒しに表示されてしまいますので，そのような設定は避けましょう。<br>
デフォルトでは自動スペルチェックが有効になっています。<br>
自動スペルチェックが必要ない場合は ☐ 自動スペルチェックのオン/オフ にしてチェックを外します。<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　\[ 一般　\]　　　　　　　　　　　　　　　<strong>テキストエディター、BibTeXフロントエンド、ウィンドウの外観変更</strong><br>
　\[ 主なTeXプログラムの設定 \]<br>
　\[ ユーザ指定プログラム \]<br>
　\[ マクロ　\]　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[文書　　　　　　　　　　　<strong>ᐯ</strong>\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>
　<strong>\[ テキストエディタ \]</strong>　　　　　　　フォント:　　　　　　　　　　　サイズ:　　　スクリプト:　　　　　　　　例:<br>
　\[ アップデート \]　　　　　　　　　<span style="color:Black;background-color:White;">\[　メイリオ　　　　　　　　<strong>ᐯ</strong>\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[10　　<strong>ᐯ</strong>\]</span> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　<strong>ᐯ</strong>\]</span>　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　</span><br>
　\[ 情報 \]　　　　　　　　　　　　　　　　　　　　　　　　　　　　エンコーディング:　　　　　　　　　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　AaBbAaAa　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[UTF-8　　　　<strong>ᐯ</strong>\]</span>　☐ ボールドフォント&thinsp;　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　</span><br>

<br>

　　　　　　　　　　　　　　　　　　構文の強調表示<br>
　　　　　　　　　　　　　　　　　　　☑ 構文の強調表示　　　　　　　　<span style="color:Black;background-color:White;">\[&nbsp;<span style="color:Black;background-color:Navy;">\[&nbsp;　&nbsp;\]</span>　\\(La)TeX命令　　　　　<strong>ᐯ</strong>\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　色(C)...　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>
　　　　　　　　　　　　　　　　　　　☑ 対応する括弧の強調表示(M)<br>

<br>

　　　　　　　　　　　　　　　　　　一般<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ エラー行に自動ジャンプ(J)<br>
　　　　　　　　　　　　　　　　　　ファイル形式　　　　☑ 折りたたみ設定/解除<br>
　　　　　　　　　　　　　　　　　　🔘 Windows　　　　☑ 行番号表示/非表示<br>
　　　　　　　　　　　　　　　　　　◯ Unix　　　　　　&nbsp;&nbsp;☑ 行の折返し設定/解除<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ 自動スペルチェックのオン/オフ<br>

***

## 主なTeXプログラムの設定：「ワールドワイド言語サポートで Unicode UTF-8 を使用」が ON でエンコーディングが UTF-8 の場合 {#vfb035c6}

設定 &gt; 時刻と言語 &gt; 言語と地域 &gt; 管理用の言語の設定 &gt; \[管理\]タブの\[システムロケールの変更(C)...\] &gt; ☐ベータ: ワールドワイド言語サポートで Unicode UTF-8 を使用(U)（チェックを外した状態）&gt; \[OK\] の状態で WinShell のエンコーディングが UTF-8 の場合は \[LaTeX\]、\[pdfLaTeX\] を実行すると [Runtime Error!](/WinShell/#g47585a4) が発生します。

Runtime Error! を回避するには，設定 &gt; 時刻と言語 &gt; 言語と地域 &gt; 管理用の言語の設定 &gt; \[管理\]タブの\[システムロケールの変更(C)...\] &gt; ☑ベータ: ワールドワイド言語サポートで Unicode UTF-8 を使用(U) &gt; \[OK\] を実行します。

### LaTeX {#neba460c}

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　\[ 一般　\]　　　　　　　　　　　　　　　<strong>TeX ディストリビューションのコマンドラインコールの変更</strong><br>
　<strong>\[ 主なTeXプログラムの設定 \]</strong><br>
　\[ ユーザ指定プログラム \]<br>
　\[ マクロ　\]　　　　　　　　　　　プログラム:<br>
　\[ テキストエディタ \]　　　　　　　LaTeX<br>
　\[ アップデート \]　　　　　　　　　BibTeX<br>
　\[ 情報 \]　　　　　　　　　　　　　dviView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;dvi2ps<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;psView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfLaTeX<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfView<br>

<br>

　　　　　　　　　　　　　　　　　名前:　　　　　　<ins>LaTeX</ins><br>

<br>

　　　　　　　　　　　　　　　　　exeファイル名:　<ins>C:\texlive\2024\bin\windows\ptex2pdf.exe</ins>　<span style="color:Black;background-color:#EEEEEE;">\[　　参照(B)...　　\]</span><br>

<br>

　　　　　　　　　　　　　　　　　コマンドライン:　<ins>-u -l -ot "-synctex=1 -interaction=nonstopmode" "%s.tex"</ins>　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　引数:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>
　　　　　　　　　　　　　　　　　実行キー:　　　　F5<br>

<br>

　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☑ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ pdfLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ dvi2psを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☑ コンソールウィンドウに結果をリダイレクト</span><br>

***

### BibTeX {#rac1047d}

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　\[ 一般　\]　　　　　　　　　　　　　　　<strong>TeX ディストリビューションのコマンドラインコールの変更</strong><br>
　<strong>\[ 主なTeXプログラムの設定 \]</strong><br>
　\[ ユーザ指定プログラム \]<br>
　\[ マクロ　\]　　　　　　　　　　　プログラム:<br>
　\[ テキストエディタ \]　　　　　　　LaTeX<br>
　\[ アップデート \]　　　　　　　　　BibTeX<br>
　\[ 情報 \]　　　　　　　　　　　　　dviView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;dvi2ps<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;psView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfLaTeX<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfView<br>

<br>

　　　　　　　　　　　　　　　　　名前:　　　　　　<ins>BibTeX</ins><br>

<br>

　　　　　　　　　　　　　　　　　exeファイル名:　<ins>C:\texlive\2024\bin\windows\bibtexu.exe</ins>　<span style="color:Black;background-color:#EEEEEE;">\[　　参照(B)...　　\]</span><br>

<br>

　　　　　　　　　　　　　　　　　コマンドライン:　<ins>"%s"</ins>　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　引数:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>
　　　　　　　　　　　　　　　　　実行キー:　　　　F6<br>

<br>

　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　☑ pdfLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ dvi2psを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☑ コンソールウィンドウに結果をリダイレクト</span><br>

***

### dviView {#qe7d598d}

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　\[ 一般　\]　　　　　　　　　　　　　　　<strong>TeX ディストリビューションのコマンドラインコールの変更</strong><br>
　<strong>\[ 主なTeXプログラムの設定 \]</strong><br>
　\[ ユーザ指定プログラム \]<br>
　\[ マクロ　\]　　　　　　　　　　　プログラム:<br>
　\[ テキストエディタ \]　　　　　　　LaTeX<br>
　\[ アップデート \]　　　　　　　　　BibTeX<br>
　\[ 情報 \]　　　　　　　　　　　　　dviView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;dvi2ps<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;psView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfLaTeX<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfView<br>

<br>

　　　　　　　　　　　　　　　　　名前:　　　　　　<ins>dviView</ins><br>

<br>

　　　　　　　　　　　　　　　　　exeファイル名:　<ins>C:\Users\＜ユーザー名＞\AppData\Local\SumatraPDF\SumatraPDF.exe</ins>　<span style="color:Black;background-color:#EEEEEE;">\[　　参照(B)...　　\]</span><br>

<br>

　　　　　　　　　　　　　　　　　コマンドライン:　<ins>-reuse-instance -inverse-search "\\"C:\Program Files (x86)\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins>　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　引数:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>
　　　　　　　　　　　　　　　　　実行キー:　　　　F7<br>

<br>

　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☑ pdfLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ dvi2psを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ コンソールウィンドウに結果をリダイレクト</span><br>

***

<!-- ** dvi2ps [#ce93346a] -->

<!-- ** psView [#v5b366e3] -->

### pdfLaTeX {#y3e5092f}

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　\[ 一般　\]　　　　　　　　　　　　　　　<strong>TeX ディストリビューションのコマンドラインコールの変更</strong><br>
　<strong>\[ 主なTeXプログラムの設定 \]</strong><br>
　\[ ユーザ指定プログラム \]<br>
　\[ マクロ　\]　　　　　　　　　　　プログラム:<br>
　\[ テキストエディタ \]　　　　　　　LaTeX<br>
　\[ アップデート \]　　　　　　　　　BibTeX<br>
　\[ 情報 \]　　　　　　　　　　　　　dviView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;dvi2ps<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;psView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfLaTeX<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfView<br>

<br>

　　　　　　　　　　　　　　　　　名前:　　　　　　<ins>pdfLaTeX</ins><br>

<br>

　　　　　　　　　　　　　　　　　exeファイル名:　<ins>C:\texlive\2024\bin\windows\lualatex.exe</ins>　<span style="color:Black;background-color:#EEEEEE;">\[　　参照(B)...　　\]</span><br>

<br>

　　　　　　　　　　　　　　　　　コマンドライン:　<ins>-synctex=1 -interaction=nonstopmode "%s.tex"</ins>　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　引数:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>
　　　　　　　　　　　　　　　　　実行キー:　　　　F10<br>

<br>

　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☑ pdfLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ dvi2psを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☑ コンソールウィンドウに結果をリダイレクト</span><br>

***

### pdfView {#x6d29bc8}

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　\[ 一般　\]　　　　　　　　　　　　　　　<strong>TeX ディストリビューションのコマンドラインコールの変更</strong><br>
　<strong>\[ 主なTeXプログラムの設定 \]</strong><br>
　\[ ユーザ指定プログラム \]<br>
　\[ マクロ　\]　　　　　　　　　　　プログラム:<br>
　\[ テキストエディタ \]　　　　　　　LaTeX<br>
　\[ アップデート \]　　　　　　　　　BibTeX<br>
　\[ 情報 \]　　　　　　　　　　　　　dviView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;dvi2ps<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;psView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfLaTeX<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfView<br>

<br>

　　　　　　　　　　　　　　　　　名前:　　　　　　<ins>pdfView</ins><br>

<br>

　　　　　　　　　　　　　　　　　exeファイル名:　<ins>C:\Users\＜ユーザー名＞\AppData\Local\SumatraPDF\SumatraPDF.exe</ins>　<span style="color:Black;background-color:#EEEEEE;">\[　　参照(B)...　　\]</span><br>

<br>

　　　　　　　　　　　　　　　　　コマンドライン:　<ins>-reuse-instance -inverse-search "\\"C:\Program Files (x86)\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins>　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　引数:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>
　　　　　　　　　　　　　　　　　実行キー:　　　　F11<br>

<br>

　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　☑ pdfLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ dvi2psを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ コンソールウィンドウに結果をリダイレクト</span><br>

***

<!-- * ユーザ指定プログラム [#b923de85] -->

## SumatraPDF との連携 {#r950d1ac}

### forward and inverse search {#haf1936b}

pdfView を [SumatraPDF](/SumatraPDF/) に変更します。

WinShell は pdfView で \[参照(B)...\] から SumatraPDF.exe を指定すれば inverse search の設定を自動的に行い forward search の設定をしなくても pdfView を実行すれば自動的に forward search をしてくれます。<br>
事前に pdfLaTeX を実行したくない場合は ☐ pdfLaTeXを先に実行 としてチェックを外してください。<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　\[ 一般　\]　　　　　　　　　　　　　　　<strong>TeX ディストリビューションのコマンドラインコールの変更</strong><br>
　<strong>\[ 主なTeXプログラムの設定 \]</strong><br>
　\[ ユーザ指定プログラム \]<br>
　\[ マクロ　\]　　　　　　　　　　　プログラム:<br>
　\[ テキストエディタ \]　　　　　　　LaTeX<br>
　\[ アップデート \]　　　　　　　　　BibTeX<br>
　\[ 情報 \]　　　　　　　　　　　　　dviView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;dvi2ps<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;psView<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfLaTeX<br>
　　　　　　　　　　　　　　　　　&nbsp;&thinsp;pdfView<br>

<br>

　　　　　　　　　　　　　　　　　名前:　　　　　　<ins>pdfView</ins><br>

<br>

　　　　　　　　　　　　　　　　　exeファイル名:　<ins>C:\Users\＜ユーザー名＞\AppData\Local\SumatraPDF\SumatraPDF.exe</ins>　<span style="color:Black;background-color:#EEEEEE;">\[　　参照(B)...　　\]</span><br>

<br>

　　　　　　　　　　　　　　　　　コマンドライン:　<ins>-reuse-instance -inverse-search "\\"C:\Program Files (x86)\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins>　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　引数:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>
　　　　　　　　　　　　　　　　　実行キー:　　　　F11<br>

<br>

　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　☑ pdfLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ dvi2psを先に実行</span><br>
　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ コンソールウィンドウに結果をリダイレクト</span><br>

***

### inverse search {#jda19218}

inverse search は SumatraPDF の \[☰\]-\[設定(S)\]-\[オプション(O)...\] の逆順検索コマンドラインの設定に以下のように設定します。

```
"C:\Program Files (x86)\WinShell\WinShell.exe" -c "%f" -l %l
```

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします。

## 使い方 {#n7874abc}

### TeX ファイルの作成 {#n92b6cac}

すでに TeX ファイルがあれば WinShell にドラッグ &amp; ドロップしてファイルを開きます。<br>
TeX ファイルが無ければ左上の「WS」と書かれたアイコンにマウスカーソルを合わせると
\[ファイルとオプション\] が表示されるのでクリックして \[新規\] &gt; \[新規TeX文書\] で新規作成できます。<br>
プロジェクトウィンドウの右側のドキュメントエリアが表示されます。<br>
このドキュメントエリアに LaTeX の文書を打ち込みます。<br>

打ち込み終わったら，［保存］ボタンをクリックします。<br>
新規作成した文書の場合はファイル名を聞いてきますので，適当に答えます（例えば “test.tex”）。<br>

### PDF ファイルの作成・表示 {#ndd7120c}

<!-- >もしユーザ自身が作成したファイルとは異なるファイルが処理されているようなら， -->
<!-- ユーザの意図しない「プロジェクト」が用いられていないかどうかを -->
<!-- 調べてみてください（「プロジェクト」機能については -->
<!-- 後述の「プロジェクト機能を使おう」を参照してください）。~ -->
<!-- WinShell のインストール直後などではデモ用のプロジェクトが用意されていることがあるので， -->
<!-- 必要ならそれを解除してください (See [[qa:48695]])。~ -->

PDF ファイルを作成したい場合は \[主なTeXプログラムの設定\] の \[LaTeX\] と \[pdfLaTeX\] の項目に PDF ファイルを作成するための設定をします。<br>

\[LaTeX\] に設定したプログラム (upLaTeX (ptex2pdf)) を実行する場合は \[LaTeX\] ボタンをクリックします。<br>
\[pdfLaTeX\] に設定したプログラム (LuaLaTeX) を実行する場合は \[pdfLaTeX\] ボタンをクリックします。<br>

エラーがなければ PDF ファイルが出力されます。<br>

PDF ファイルを表示したい場合は \[主なTeXプログラムの設定\] の \[dviView\] と \[pdfView\] の項目に PDF ファイルを表示するための設定をします。<br>

\[dviView\] に設定したプログラム (SumatraPDF) を実行する場合は \[dviView\] ボタンをクリックします。<br>
\[pdfView\] に設定したプログラム (SumatraPDF) を実行する場合は \[pdfView\] ボタンをクリックします。<br>

エラーがなければ PDF ファイルが表示されます。<br>

### 補完機能 {#c8bc5b6d}

Ctrl + Space でキーワードの補完ができます。<br>

- [Winshell 補完して！](http://infotech776.blog.fc2.com/blog-entry-24.html)
- [winshellの補完機能について](http://diondaikun.hatenablog.com/entry/20121226/1356452475)

### コメントイン・コメントアウト機能 {#w8b8733a}

範囲選択後に右クリック → ［注釈化/注釈解除］と選ぶと，選択した範囲の行頭に “%” が付けられたり外されたりします。<br>
ショートカットキー Ctrl + K で同様のことができます。<br>

### プロジェクト機能を使おう {#p6a2f200}

WinShell にはプロジェクト機能があります。長めの TeX 文書を書く場合に
非常に役立つと思いますのでやり方を紹介しておきます。<br>

まず，TeX ファイルはあらかじめコンパイルしておきます。<br>
プロジェクトエクスプローラーより［新規プロジェクト］で
プロジェクトファイルを作ります。<br>
そして，［プロジェクト］ → ［追加］ → ［中心となるTeX文書］ で
現在編集中のファイルを追加します。<br>
複数の TeX ファイルに分けている場合には
先ほどの ［追加］ から ［TeX文書］ を，bib ファイルを
作っている場合には ［BibTeX文書］ を選びます。<br>

あとは，左に現れたプロジェクト名を右クリックしてアクティブに
し，［目次］ などの項目を右クリックして［再読み込み］します。<br>
再読み込みすると［目次］ には
\section などへのリンクが，［図］ や ［表］，［参考文献］ には
それぞれの \label へのリンクが追加されます。<br>
それぞれのラベルへのリンクをダブルクリックすることで，そこにジャンプすることができます。<br>

### ToDo 管理 {#p0e8d4c5}

- [レポートのtodo管理！～Winshell編～](http://infotech776.blog.fc2.com/blog-entry-25.html)

### 「WinShell Update」機能 {#n1ccef71}

WinShell には アップデート機能があります。<br>

#### WinShell の更新 {#x8afdcfc}

WinShell を起動し，メニューから \[ヘルプ(H)\] → \[アップデートの確認(C)...\] をクリックします。

「WinShellの更新」 が表示され，WinShell の使用中のバージョン・最新のリリースバージョン・最新のベータバージョンが表示されます。

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>WinShellの更新</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[<span style="color:White;"><strong>🗙</strong></span>\]<ins></span></ins></span><br>

　使用中のバージョン: 　　　　3.3.2.5<br>
　最新のリリースバージョン:　3.3.2.6　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 更新を適応 \]</span><br>
　最新のベータバージョン:　　none　　　　　　<span style="color:#888888;background-color:#EEEEEE;">\[ 更新を適応 \]</span><br>
　<span style="color:Black;background-color:#E8E8E8;">\[　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\]</span><br>
　残り時間:<br>
　転送状況:<br>
　☑アップデートを自動的に確認　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　中止　　 \]</span>

***

## 関連リンク {#i06febca}

- [forumSearch:WinShell](https://okumuralab.org/tex/mod/forum/search.php?id=2&search=WinShell)
- [https://x.com/search?q=WinShell%20lang%3Aja&f=live](https://x.com/search?q=WinShell%20lang%3Aja&f=live)

[^1]: [ptexenc](/ptexenc/) に書かれているような，ファイル名に ShiftJIS のいわゆる「ダメ文字」を含む場合に -jobname= で指定してコンパイルする方法も，WinShell ではクラッシュを引き起こします。ただし -jobname= を指定してコンパイルするとクラッシュする現象は %s の値を % を使用しない Windows PowerShell や Ruby などの変数に代入して使用することにより回避することができます。
[^2]: DDE については [Wikipedia.ja:動的データ交換](https://ja.wikipedia.org/wiki/%E5%8B%95%E7%9A%84%E3%83%87%E3%83%BC%E3%82%BF%E4%BA%A4%E6%8F%9B) を参照してください。
[^3]: レジストリの編集には危険が伴う場合があります。自信のない場合は控えるなど，十分ご注意ください。
