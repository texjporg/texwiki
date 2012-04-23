---
title: "WinShell3"
url: "/WinShell3/"
date: 2010-09-29T22:58:26Z
pukiwiki: "WinShell3"
---

# WinShell3

[WinShell](/WinShell/) > WinShell 3

## [WinShell 3](http://www.winshell.org/) {#cf393be7}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## WinShell とは {#wa3184ab5}

[WinShell](https://mirror.ctan.org/help/Catalogue/entries/winshell.html) は，多言語に対応した LaTeX と TeX のための統合環境 (IDE) です．

TeX の入力とコマンドの実行を簡単にするためのソフトウェアです．

WinShell には

- テキストエディタ
- 構文の強調表示
- プロジェクト管理
- スペルチェック
- 表の作成ウィザード
- BibTeX サポート
- Unicode サポート
- ユーザー定義オプション

などの機能があります．

最新の安定版以降の Ver. では、Windows NT 5.x 系（2000・XP・XP x64 Edition <!-- NT5.1 は 32bit版・NT5.2 は 64bit版のためこのように記載しました// -->
）・NT 6.x系（Vista・7）のみサポートしています．
64 ビットOSでは WOW64 による 32 ビット互換アプリとして動作します．

[Wine](http://www.winehq.org/) を使えば Linux 上でも動作します．

> 【注意】<strong>WinShell は TeX そのものなどではありません</strong>．TeX 自身
> および関連ソフトウェアをあらかじめインストールしておく必要があります
> ［必要があれば，TeXWiki:インストール(Windows) を
> 参照してください］． <!-- また，最初から WinShell を使うのではなく， --> <!-- コマンドライン操作を一通りふまえておいてから --> <!-- WinShell の類の統合環境を用いるべきです． -->

- [WinShell - LaTeX User Front End](http://www.winshell.org/) 公式サイト

[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/) 著
『LaTeX2e 美文書作成入門』
([改訂第5版](http://oku.edu.mie-u.ac.jp/~okumura/bibun5/)) では，おすすめの統合環境が [<strong>TeXworks</strong>](/TeXworks/) になりました．<br>
[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/) 著
『LaTeX2e 美文書作成入門』
([改訂第4版](http://oku.edu.mie-u.ac.jp/~okumura/bibun4/)) の WinShell 3.x についてはこちらと [<strong>Wiki内の「WinShell」</strong>](/WinShell/) で解説します．<br>
[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/) 著
『LaTeX2e 美文書作成入門』
([改訂版](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun2e.html)，[改訂第3版](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun3/))
の WinShell は 2.2 など，古いバージョンのものですので，TeXWiki:WinShell/2 をご覧ください．

### リリース情報 {#kbd54269}

2011-04-10 WinShell 3.3.2.4 - upload date: 2011-04-10

### スクリーンショット {#me69336b}

[![WinShell 3 の新しい画面](http://www.winshell.org/modules/ws_screenshots/images/main_small.png)](http://www.winshell.org/modules/ws_screenshots/images/main.png)
[![Linux で動作する WinShell 3](http://www.winshell.org/modules/ws_screenshots/images/Linux_WinShell_small.png)](http://www.winshell.org/modules/ws_screenshots/images/Linux_WinShell.png)

## ダウンロードとインストール {#bf3167cb}

[WinShell - LaTeX User Front End](http://www.winshell.org/) のほか，[CTAN](/CTAN/) からも
ダウンロードできます．<br>
ダウンロードするファイルは，Self-installing exe file と Zip archive の2種類があります．好きな方を選んでダウンロードしてください．

### Self-installing exe file {#o6616ae5}

- [WinShell - Download WinShell](http://www.winshell.org/modules/ws_download/) (最新版)
    - [リリース版](http://www.winshell.org/modules/ws_download/#release)
    - [ベータ版](http://www.winshell.org/modules/ws_download/#beta)
- [CTAN:systems/win32/winshell/](https://mirror.ctan.org/systems/win32/winshell/) (最新版とは限りません)
- [WinShellでUTF-8](http://stanag4172.m13.coreserver.jp/blog/archives/154) WinShell 3.1 (旧バージョン)
- [LaTeX Install/WinShell - PukiWiki](http://igproj.com/zone3/index.php?LaTeX%20Install/WinShell) WinShell 3.1 (旧バージョン)

上記のサイトから WinShell インストーラ (“WinShell3??.exe” といった名前のもの) をダウンロードし，実行するとインストールできます．<br>
インストーラの質問には \[Next\] → \[Next\] → \[Next\] → \[Next\] → \[Finish\] と答えてください．<br>
使用許諾書ではもちろん “accept” (受諾) する項目を選んでください．<br>
WinShell が立ち上がり，さらに説明が出ますので，\[OK\] を押してください．<br>
このあといったん WinShell を閉じます．

### Zip archive {#e5dfb289}

- [WinShell - Download WinShell](http://www.winshell.org/modules/ws_download/) (最新版)
    - [リリース版](http://www.winshell.org/modules/ws_download/#release)
    - [ベータ版](http://www.winshell.org/modules/ws_download/#beta)
- [CTAN:systems/win32/winshell/](https://mirror.ctan.org/systems/win32/winshell/) (最新版とは限りません)

上記のサイトから WinShell zip ファイル（“WinShell3??.zip” といった名前のもの）をダウンロードし，展開すると
インストール完了です．

<!-- **日本語言語ファイル [#i83c37b0] -->
<!--  -->
<!-- -[[WinShell3日本語化:http://redmine.nnnnn.me/projects/winshell/files]] -->
<!-- - -[[jp_JP.txt:http://webcache.googleusercontent.com/search?q=cache%3ahttp://redmine.nnnnn.me/attachments/download/1/jp_JP.txt]] (Google キャッシュ) -->
<!-- -[[WinShell3 日本語言語ファイル:http://nnnnn.co/filemgmt/viewcat.php?cid=2]] -->
<!-- -[[WinShell3 日本語言語ファイル:http://nnnnn.co/filemgmt/index.php/1]] -->
<!-- - -[[jp_JP.txt:http://webcache.googleusercontent.com/search?q=cache%3ahttp://nnnnn.co/filemgmt/visit.php?lid=1]] (Google キャッシュ) -->
<!--  -->
<!-- [[( ﾟÅﾟ)んー:http://twitter.com/whoami]] さんが WinShell3 日本語言語ファイルを公開されています．~ -->
<!-- WinShell に付属の日本語言語ファイルは，一部翻訳されていない部分があるので，気になる方はこれも合わせてダウンロードしてください．~ -->
<!-- ダウンロードしたファイルは WinShell の Translations フォルダに置いてください．~ -->

## 不具合 {#j9720464}

### Runtime Error! {#o5faaed5}

WinShell 3.3.2.4 で，エンコーディングを UTF-8 に変更し

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]</ins></span><strong>\[ フォント \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　　　<span style="color:Black;background-color:#EEEEEE;">\[文書　　　　　　　　　　　　　　　　　　　▼\]</span>　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>

<br>

　　　　フォント:　　　　　　　　　　　　　　　　　　　　　サイズ:　　　　スクリプト:<br>
　　　　<span style="color:Black;background-color:White;">\[　　MS UI Gothic　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[10　　　▼\]</span> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　▼\]</span><br>

<br>

　　　　例:　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　エンコーディング:<br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　<span style="color:Black;background-color:#EEEEEE;">\[UTF-8　　　　　　　▼\]</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;"> 　　　　　　　　　　　　AaBbAaAa　　　　　　　　　　　　　</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　☐ Bold Font<br>

***

LaTeX ファイルをメニューの \[実行(X)\] → \[LaTeX\] でコンパイルしたところ，以下のような Runtime Error! が発生しました．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　Microsoft Visual C++ Runtime Library　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="font-size:35px"><strong>×</strong></span> Runtime Error!<br>

<br>

　　　　Program: C:\Program Files\WinShell\WinShell.exe<br>

<br>

<br>

　　　　This application has requested the Runtime to terminate it in an<br>
　　　　unusual way.<br>
　　　　Please contact the application's support team for more<br>
　　　　information.

***

ShiftJIS (Shift_JIS) では発生しませんでした．

UTF-8 を使用したい方は，WinShell 3.1 (旧バージョン) をダウンロードするか [TeXworks](/TeXworks/), [Texmaker](/Texmaker/), [LyX](/LyX/), [TeXnicCenter](/TeXnicCenter/), [Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/), Mery, [サクラエディタ](</サクラエディタ/>), [Notepad++](/Notepad++/), jEdit, [Geany](/Geany/), [gedit](/gedit/), [xyzzy](/xyzzy/), [Emacs](/Emacs/), [Vim](/Vim/) などの UTF-8 で問題の発生しないエディタを使用してください．

- [WinShellでUTF-8](http://stanag4172.m13.coreserver.jp/blog/archives/154) WinShell 3.1 (旧バージョン)
- [LaTeX Install/WinShell - PukiWiki](http://igproj.com/zone3/index.php?LaTeX%20Install/WinShell) WinShell 3.1 (旧バージョン)

[Winshell3.3 の Runtime Error: nouse](http://yeblog.cocolog-nifty.com/nouse/2009/02/winshell33-runt.html) にも，Runtime Error! に関する情報があります．

どうしても WinShell の最新版で UTF-8 を使用したい場合は

- 主なTeXプログラムの設定 (エンコーディングが UTF-8 の場合)
- ユーザ指定プログラム (エンコーディングが UTF-8 の場合)

を参照して設定をしてください．

### Adobe Reader X で PDF ファイルが表示できない {#z65ee470}

WinShell 3.3.2.3 よりも前のバージョンの場合，Adobe Reader X で PDF ファイルを表示しようとすると，以下のような警告メッセージが表示され，PDF ファイルが表示できません．<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShell　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　　　　Cannot start AcrobatReader or open the document.<br>
　　　　<span style="font-size:35px"><strong>!</strong></span>　　Please check on the exe file and cmd line of the PDFView<br>
　　　　　　　options.<br>

<br>

***

WinShell 3.3.2.4 でも状況によってはこの警告メッセージが表示されて PDF ファイルが表示できないことがあります．<br>
その場合は WinShell を再起動すれば OK です．<br>
ただし，また同じ警告メッセージが表示され，PDF ファイルが表示できなくなる可能性があります．<br>
これを回避するには PDFView を参照してください．

### 自動スペルチェックがオンの場合に赤い小さなゴミのようなものが表示される → 自動スペルチェックをオフにする {#bf59f9a2}

WinShell 3.3.0.3 + 配布されているパッチという環境で、日本語文書を入力して
カーソル移動などをすると、各文字について、赤い小さなゴミのようなものが表示されます。3.3.2.4 でも同様の症状が発生します。

> <span style="color:Red;"><strong>「オプション(O) → 自動スペルチェック(A)」をオフにすると解消されます。</strong></span>

### 括弧の強調表示時の文字化け {#xfe3d30d}

過去に報告された日本語の不具合はおおむね直っていますが，括弧の強調表示時の文字化け現象は解決していませんでした。

［オプション］ → ［WinShellの外観］ → ［ユーザー設定］ でツールバーに登録する際にコンボボックスのリストの日本語が表示されません。

この操作をする際には ［オプション］ → ［言語］ から言語を “English” にしておきましょう。

括弧の強調表示時に，日本語が文字化けする不具合があります。

例えば

```
\chapter{日本語文字
```

と入力してから “}” を付けると，括弧が緑色に表示され，文字入力カーソルを “本” の後ろに移動させると文字化けします．

ShiftJIS の場合，特定の文字を{}の中で使用し、文字入力カーソルを特定の文字の後ろに移動させると文字化けします。

これを回避するには，対応する括弧の強調表示のチェックをはずしてください．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]</ins></span><strong>\[ 構文の強調表示 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

<br>

<br>

　　　　　　　　　　☑ 構文の強調表示(S)<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>
　　　　　　　　　　　<ins><span style="color:Black;background-color:Blue;">\[　　\]</span> \ (La)TeX命令　　　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　色(C)...　　　\]</span><br>

<br>

　　　　　　　　　　☐ 対応する括弧の強調表示(M)<br>

<br>

<br>

<br>

***

関連内容;　TeXフォーラム内の質問「WinShellにてカーソルを合わせると消える文字について」

[http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=156](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=156)

LaTeX などのメッセージ出力欄においても，日本語が出力される場合文字化けします。

プロジェクトの ［目次］ において，\section に日本語を指定した場合に
文字が表示されない不具合があります。<br>
(追記：2009/12/21)<br>
{}の中で使用すると不具合が起こる文字を以下の通りにまとめます。

> ＋ ボ к 閲 顎 宮 鶏 砿 施 旬 須 捜 畜 怒 倍 府 本 養 几 嘴 學 悳 掉 桀 毬 炮 痣 窖 縵 艝 蛔 諚 轆 閔 驅 黠 垬 葈

> マ м 厭 笠 急 迎 閤 枝 殉 図 挿 筑 党 媒 扶 凡 抑 凩 嘲 孺 怡 掵 栲 毳 烋 痾 竈 繃 艟 蛩 諳 轗 閘 驀 黨 埇 蕓

1行目の文字群は2byte目が0x7C( { )になっており、2行目の文字群は2byte目が0x7d( } )となっているため、エラーが発生します。<br>
これらの文字群を使用するとWinShellのBibTeXのフロントエンド編集での読み込みもできません。(WinShell3.3.0.3,WinShell3.3.0.6,WinShell3.3.1.2で確認)<br>
(追記：2010/01/20)<br>
また、プロジェクトウィンドウを利用している場合は、参考文献一覧も上記文字群が含まれている場合は正常に表示できません。<br>
対策として、上記文字群が含まれているBibTeX項目を、別のbibファイルに隔離して２つのbibファイルを使い分けると少し使い勝手が向上します。<br>
その際、隔離したbibが_Unknownにまとめて表示されれば、WinShellが本来意図して付けたBibTeXの機能を使用できるかと思います。<br> <!-- ちなみに確認OSはXP 32ビットProfessional版 SP2 -->

#### 3.3.0.3 現在 Vista(64ビット版) SP1 + W32TeX {#p7b9c1e0}

```
 括弧の強調表示時の文字化け
```

　　日本語のままで正常動作しました

```
 ある文字を{}の中で使用すると,文字化け
```

　　正常動作しました

```
 プロジェクトの ［目次］ において文字が表示されない
```

　　正常動作しました

## 設定 {#h3ab6f8d}

### 設定ファイル {#i7f9763c}

WinShell.exe と同じフォルダに Settings という名前のフォルダを作成すると，設定ファイルが Settings フォルダに作成されます。

### 初回起動時 {#ec0403bb}

インストーラでインストールした場合は，デスクトップの WinShell アイコンをダブルクリックするか，
［スタート］ → ［すべてのプログラム］ → ［WinShell］ → ［WinShell］ で起動します。

zip ファイルでインストールした場合は，展開したディレクトリの WinShell.exe をダブルクリックします．

初回起動時に言語を聞いて来ますので，“Japanese” (日本語) を選択して \[OK\] をクリックしてください．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShell　　　　　　　　　　　　　　　　</ins></span><br>

　 Choose Language<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">\[Japanese　　　　　　　　　▼\]</span>　← Japanese (日本語) で \[ 　　　OK　　　 \]<br>
<br><br>

　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　　OK　　　 \]</span>

***

### 一般 {#g088628a}

メニューから \[オプション(O)\] → \[全般(G)...\] をクリックします．

デフォルトではバックアップファイルを作成しません．<br>
重要な文書を作成する場合は，バックアップ(.bak)ファイル作成(C) にチェックを入れておきましょう．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<strong>\[ 一般　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>
　　　　　言語　　　　　　　　　　　　　　　　　　　　　　　　　　　　ファイル形式<br>
　　　　　　WinShell: 　 　 　 　 　　 　 　 　 　 　 　　　　　　　　　<span style="color:#3333CC;">◎</span> Windows<br>
　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[Japanese　　　　　　　　　　　　▼\]</span>　　　　　　　　　　◯ Unix<br>
　　　　　　スペルチェック:<br>
　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[en_US 　 　 　 　 　 　 　 　 　　▼\]</span><br>

<br>

　　　　☑ バックアップ(.bak)ファイル作成(C)<br>
　　　　☐ 終了時に自動保存(S)<br>
　　　　☑ エラー行に自動ジャンプ(J)<br>
　　　　☑ BibTeXのエディタ表示を利用する<br>
　　　　☑ 起動時に開いているファイルを再読込(R)

***

### フォント {#e6753d2e}

まずフォントの設定をします。

Shift_JIS ではなく UTF-8 を使いたい場合は 不具合#Runtime Error! を参照してください．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]</ins></span><strong>\[ フォント \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　　　<span style="color:Black;background-color:#EEEEEE;">\[文書　　　　　　　　　　　　　　　　　　　▼\]</span>　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>

<br>

　　　　フォント:　　　　　　　　　　　　　　　　　　　　　サイズ:　　　　スクリプト:<br>
　　　　<span style="color:Black;background-color:White;">\[　　MS UI Gothic　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[10　　　▼\]</span> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　▼\]</span><br>

<br>

　　　　例:　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　エンコーディング:<br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　<span style="color:Black;background-color:#EEEEEE;">\[ShiftJIS　　　　　　▼\]</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;"> 　　　　　　　　　　　　AaBbAaAa　　　　　　　　　　　　　</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　☐ Bold Font<br>

***

WinShell 3.3 の場合：
: &nbsp;

初回起動時に言語選択が Japanese ならば, デフォルトで 3.2 設定項目が設定されるはずです。但しフォントは確認の上ご自分の用途に応じたものを選んでください。

WinShell 3.2 の場合：
: &nbsp;

起動したら，［オプション］ → ［フォント］ で次のように設定してください。
「文書」を選択し，『フォント』の項目で「ＭＳ ゴシック」などお好みの日本語フォントを選択します。さらに『スクリプト』を「日本語」にし，『エンコーディング』で「ShiftJIS」 (Shift_JIS) を選択します<em>（よく忘れるので，この作業を絶対に忘れないこと！）</em>。\[OK\] をクリックしてください。

Winshell 3.1 の場合：
: &nbsp;

起動したら，［オプション］ → ［フォント］ で，次のように設定してください。
「文書」を選択し，『フォント名』の項目で「ＭＳ ゴシック」などお好みの日本語フォントを選択します。さらに『スクリプト』を「日本語」にし，『エンコーディング』で「DBCS」 (double-byte character set) を選択します<em>（よく忘れるので，この作業を絶対に忘れないこと！）</em>。\[OK\] をクリックしてください。

Winshell 3.0 の場合：
: &nbsp;

起動したら，［オプション］ → ［フォント］ で ［変更］ボタンをクリックします。
そして，『フォント名』の項目で「ＭＳ ゴシック」などお好みの日本語フォントを選択します。さらに，『書体の種類』を「日本語」にします<em>（よく忘れるので，この作業を絶対に忘れないこと！）</em>。\[OK\] をクリックすると表示フォントが変更されます。

> いずれの場合においても，フォント名として「@ＭＳ ゴシック」のような “@” が先頭に附いた名称のものを選択するとテキストエディタ部の和文文字が横倒しに表示されてしまいますので，そのような設定は避けましょう。

### 構文の強調表示 {#q1b1fd50}

エンコーディングが ShiftJIS の場合，文字化けを防止するため，対応する括弧の強調表示のチェックをはずします．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]</ins></span><strong>\[ 構文の強調表示 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

<br>

<br>

　　　　　　　　　　☑ 構文の強調表示(S)<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>
　　　　　　　　　　　<ins><span style="color:Black;background-color:Blue;">\[　　\]</span> \ (La)TeX命令　　　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　色(C)...　　　\]</span><br>

<br>

　　　　　　　　　　☐ 対応する括弧の強調表示(M)<br>

<br>

<br>

<br>

***

### 自動スペルチェック {#wff9afda}

日本語の文章を作成する場合は \[オプション(O)\] → \[自動スペルチェック(A)\] をオフにします．

## 主なTeXプログラムの設定 (エンコーディングが ShiftJIS の場合) {#v03241d0}

［オプション］ → ［TeX関連プログラム設定］ で
「exeファイル名」を次のように設定します．インストールしたドライブが
Cドライブでない場合には “C:” という部分を書き換えてください．

なお DVIView，GSView，PDFView は自動的に適切な設定になっているはずです．<br>
参照ボタンを押して直接指定する必要はないでしょう．<br>
ただし，WinShell 3.3.2.3 よりも前のバージョンの場合は Adobe Reader X に対応していないため，PDFView の exeファイル名に Adobe Reader X を指定しても PDF ファイルが表示できません(なお、Adobe Acrobat X を指定した PDF ファイルの表示は可能です)．<br>
WinShell 3.3.2.3 よりも前のバージョンでは，cmd.exe から Adobe Reader X を呼び出すことで使用が可能になります．

<em>注意 x64 環境でも TeX 環境用(gs が 32bit dll等) の GSView は必ず x86 用をインストールして下さい。</em>

### LaTeX {#j415cdd8}

<!-- ***-jobname を使用する場合 [#g7ceca06] -->

- &#x2d;jobname を使用すると 表.tex, 予定.tex といったファイル名の場合でもうまく処理できます．
- exeファイル名を powershell.exe に設定します．
- さらに，コマンドラインも -Command "&amp; {$s = echo """%s""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s}" に変更します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">LaTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Command "&amp; {$s = echo """%s""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

<!-- ***-jobname を使用しない場合 [#x51ab74f] -->
<!--  -->
<!-- -表.tex, 予定.tex といったファイル名の場合はうまく処理できません． -->
<!-- -exeファイル名を platex.exe に設定します． (うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\platex.exe) -->
<!-- -さらに，コマンドラインも -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode "%s.tex" に変更します． -->
<!--  -->
<!-- - --  -->
<!-- &color(Black,#ACDEFE){%%%　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(Black,#CC3333){%%%[ 　''&color(White){✕};''　 ]%%%}; %%%};&br; -->
<!-- 　&color(Black,#EEEEEE){%%%[ 一般　]%%%};''[ 主なTeXプログラムの設定 ]''&color(Black,#EEEEEE){%%%[ ユーザ指定プログラム ][ マクロ　][ フォント ][ 構文の強調表示 ][ ◀ ][ ▶ ]%%%};&br; -->
<!-- &br; -->
<!-- 　　プログラム名　　%%%LaTeX%%%&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(White,#1188FF){LaTeX　　　　　　　　　　　　　};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView&br; -->
<!-- 　　exeファイル名 　%%%platex.exe%%%&br; -->
<!-- 　　　　　　　　　　　　&color(Black,#EEEEEE){[　　　　参照(B)...　　　　]};　　&color(#888888,White){☑ DOS};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView&br; -->
<!-- 　　コマンドライン 　%%%-no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode "%s.tex"%%%&br; -->
<!-- 　　　　　　　　　　　　　サフィックスも追加してください！&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(#888888,White){☐ LaTeXを先に実行};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(#888888,White){☐ PDFLaTeXを先に実行};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(#888888,White){☐ DVIPSを先に実行};&br; -->
<!-- 　　実行キー:　　　　引数:&br; -->
<!-- 　　F5 　　　　　　　　%s<.tex><.dvi><.ps><.pdf>&br; -->
<!-- - --  -->

### BibTeX {#x2fc6cd6}

<em>2009/7/20 に W32TeXの "jbibtex.exe" は "pbibtex.exe" に変更されました．それ以前の W32TeX をインストールされている方は，BibTeX の設定の部分を "jbibtex.exe" にしてください． ([qa:53349](https://okumuralab.org/~okumura/texfaq/qa/53349.html))</em>

- exeファイル名を pbibtex.exe (うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\pbibtex.exe)
- コマンドラインを -kanji=sjis "%s"

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>BibTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">BibTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>pbibtex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-kanji=sjis "%s"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F6 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### DVIView {#gc5e030c}

- exeファイル名を C:\w32tex\dviout\dviout.exe (\[参照(B)...\] で dviout.exe を検索)
- コマンドラインを -1 "%s.dvi"

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVIView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVIView 　　　　　　　　　　　　</span><br>
　　exeファイル名 　<ins>C:\w32tex\dviout\dviout.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-1 "%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F7 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### DVI -> PS {#m386c533}

<em>2010/5/6 に W32TeX の "dvipsk.exe" は "dvips.exe" に統合されました．それ以前の W32TeX をインストールされている方は，DVI -> PS の設定の部分を "dvipsk.exe" にしてください． ([qa:54955](https://okumuralab.org/~okumura/texfaq/qa/54955.html))</em>

- exeファイル名を dvips.exe (うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\dvips.exe)
- コマンドラインを -Ppdf -t a4 -o "%s.ps" "%s.dvi"

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVI -> PS</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>dvips.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVI -> PS　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Ppdf -t a4 -o "%s.ps" "%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F8 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### GSView {#gb236799}

#### SumatraPDF の場合 {#s954f654}

- exeファイル名を "C:\Program Files\SumatraPDF\SumatraPDF.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe") (\[参照(B)...\] で SumatraPDF.exe を検索)
- コマンドラインを -reuse-instance "%s.ps" に設定します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>GSView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">GSView　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-reuse-instance "%s.ps"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ DVIPSを先に実行<br>
　　実行キー:　　　　引数:<br>
　　F9 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### GSview の場合 {#p8adc014}

- exeファイル名を"C:\Program Files\Ghostgum\gsview\gsview32.exe" (64bit版Windows の場合は "C:\Program Files (x86)\Ghostgum\gsview\gsview32.exe") (\[参照(B)...\] で gsview32.exe を検索)
- コマンドラインを -e "%s.ps" に設定します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>GSView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Ghostgum\gsview\gsview32.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">GSView　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-e "%s.ps"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ DVIPSを先に実行<br>
　　実行キー:　　　　引数:<br>
　　F9 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### PDFLaTeX {#f08ac8c2}

<!-- ***platex + dvipdfmx の場合 [#t07b93fd] -->

- exeファイル名を powershell.exe に変更します．
- さらに，コマンドラインも -Command "&amp; {$s = echo """%s""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvipdfmx $s}}" に変更します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFLaTeX　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Command "&amp; {$s = echo """%s""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvipdfmx $s}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

<!-- ***dvipdfmx の場合 [#jcbca9e9] -->
<!--  -->
<!-- -exeファイル名を dvipdfmx.exe に変更します．(うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\dvipdfmx.exe) -->
<!-- -さらに，コマンドラインも "%s.dvi" に変更します． -->
<!--  -->
<!-- - --  -->
<!-- &color(Black,#ACDEFE){%%%　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(Black,#CC3333){%%%[ 　''&color(White){✕};''　 ]%%%}; %%%};&br; -->
<!-- 　&color(Black,#EEEEEE){%%%[ 一般　]%%%};''[ 主なTeXプログラムの設定 ]''&color(Black,#EEEEEE){%%%[ ユーザ指定プログラム ][ マクロ　][ フォント ][ 構文の強調表示 ][ ◀ ][ ▶ ]%%%};&br; -->
<!-- &br; -->
<!-- 　　プログラム名　　%%%PDFLaTeX%%%&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView&br; -->
<!-- 　　exeファイル名 　%%%dvipdfmx.exe%%%&br; -->
<!-- 　　　　　　　　　　　　&color(Black,#EEEEEE){[　　　　参照(B)...　　　　]};　　&color(#888888,White){☑ DOS};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(White,#1188FF){PDFLaTeX　　　　　　　　　　　};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView&br; -->
<!-- 　　コマンドライン 　%%%"%s.dvi"%%%&br; -->
<!-- 　　　　　　　　　　　　　サフィックスも追加してください！&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(#888888,White){☐ LaTeXを先に実行};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(#888888,White){☐ PDFLaTeXを先に実行};&br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(#888888,White){☐ DVIPSを先に実行};&br; -->
<!-- 　　実行キー:　　　　引数:&br; -->
<!-- 　　F10　　　　　　　　%s<.tex><.dvi><.ps><.pdf>&br; -->
<!-- - --  -->

### PDFView {#gffc0a36}

- [TeXworks](/TeXworks/) の場合，[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．exeファイル名を C:\w32tex\share\texworks\TeXworks.exe (\[参照(B)...\] で TeXworks.exe を検索) とします．
- [SumatraPDF](/SumatraPDF/) の場合，exeファイル名を "C:\Program Files\SumatraPDF\SumatraPDF.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe") (\[参照(B)...\] で SumatraPDF.exe を検索) とします．
- [Adobe Reader](</Adobe Reader/>) X，WinShell 3.3.2.3 以降のバージョンの場合，exeファイル名を "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe") (\[参照(B)...\] で AcroRd32.exe を検索) とします．
- [Adobe Reader](</Adobe Reader/>) X，WinShell 3.3.2.3 よりも前のバージョンの場合，exeファイル名を cmd.exe とし，コマンドラインを /c start "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf" (64bit版Windowsの場合は /c start "C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf") とします．
- [Adobe Reader](</Adobe Reader/>) 9 の場合，exeファイル名を "C:\Program Files\Adobe\Reader 9.0\Reader\AcroRd32.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\Adobe\Reader 9.0\Reader\AcroRd32.exe") (\[参照(B)...\] で AcroRd32.exe を検索) とします．

PDFLaTeXを先に実行 のチェックは外しておいた方が良いでしょう．

#### TeXworks の場合 {#hc3a2b77}

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>C:\w32tex\share\texworks\TeXworks.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>"%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### SumatraPDF の場合 {#r627f09f}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-reuse-instance -inverse-search "\\"C:\Program Files\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf" -forward-search "%c.tex" %l</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Adobe Reader X，WinShell 3.3.2.3 以降のバージョンの場合 {#f03db245}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>"%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Adobe Reader X，WinShell 3.3.2.3 よりも前のバージョンの場合 {#v7b43812}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>cmd.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>/c start "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Adobe Reader 9 の場合 {#qfb9a940}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Adobe\Reader 9.0\Reader\AcroRd32.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>"%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

## ユーザ指定プログラム (エンコーディングが ShiftJIS の場合) {#q408fd2f}

“DOS”のチェック (☑) は，exe ファイルが DOS (コンソール) アプリケーションで，出力先をコンソールではなく WinShell の Output Window に変更することを意味しています．

チェックを付けていないと，エラーの場合にコマンドプロンプトが出るのは正しい動作です．

従って

- Window アプリケーションの場合
- コンソールアプリケーションでコンソールに出力したい場合

は“DOS”のチェックをはずしてください．

<!-- >“DOS” にチェックを付けていないと，エラーのときに -->
<!-- 「コマンド プロンプト」が出てしまいます。“DOS” に -->
<!-- チェックを付けてあると，エラーのときに下のログ窓に -->
<!-- エラーの状況が出るだけになります。この挙動は逆のような気がします……。 -->
<!-- < -->

### pdfpLaTeX {#f117c474}

欧文の文書を作成する方は，\[PDFLaTeX\] の項目はデフォルトの pdflatex のままで，［オプション］ → ［ユーザー指定プログラム］ で Tool 1 の プログラム名を pdfpLaTeX，exeファイル名を powershell.exe，コマンドラインを -Command "&amp; {$s = echo """%s""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvipdfmx $s}}" に設定しておくと、欧文は pdflatex, 和文は platex + dvipdfmx と使いわけができます．

ただし，Tool 1 の pdfpLaTeX で作成した和文 PDF をツールバーの PDFView ボタンで閲覧する場合，［オプション］ → ［主なTeXプログラムの設定］の PDFView の項目で「PDFLaTeXを先に実行」のチェックを外しておかないと Adobe Reader がアプリケーションエラーを起こして文書が表示されません．

［オプション］ → ［ユーザー指定プログラム］ で
Tool 1 を pdfpLaTeX に設定します。

プログラム名
: pdfpLaTeX

exeファイル名
: powershell.exe

コマンドライン
: -Command "&amp; {$s = echo """%s""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvipdfmx $s}}"

右下のチェックをすべてはずします。

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfpLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 1　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 3<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-Command "&amp; {$s = echo """%s""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvipdfmx $s}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F1 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### pdfpLaTeX2 {#o1b22e62}

［オプション］ → ［ユーザー指定プログラム］ で
Tool 2 を pdfpLaTeX2 に設定します。

プログラム名
: pdfpLaTeX2

exeファイル名
: powershell.exe

コマンドライン
: -Command "&amp; {$r = echo "%s";$s = echo """$r""";$d = echo """$r.dvi""";$p = echo """$r.ps""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvips -Ppdf -t a4 -o $p $d};if($?){ps2pdf.bat $p}}"

右下のチェックをすべてはずします。

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfpLaTeX2</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 2　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 3<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-Command "&amp; {$r = echo "%s";$s = echo """$r""";$d = echo """$r.dvi""";$p = echo """$r.ps""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvips -Ppdf -t a4 -o $p $d};if($?){ps2pdf.bat $p}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F2 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### Mendex {#z53d4c84}

［オプション］ → ［ユーザー指定プログラム］ で
Tool 3 を Mendex に設定します。

プログラム名
: Mendex

exeファイル名
: mendex.exe

コマンドライン
: -S "%s.idx" （「%s」だけでも可。）

右下は「LaTeXを先に実行」（英語なら，“LaTeX first”）にだけ
チェックを付けておきます。

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>Mendex</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 3　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>mendex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-S "%s.idx"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F3 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

追加した pdfpLaTeX，pdfpLaTeX2，Mendex は ［オプション］ → ［表示］ → ［ユーザ設定］ で
ツールバーに登録できます。ただしメニューバーの言語を
English にしておかないと，文字が大部分表示されないことがあるかもしれません。

## 主なTeXプログラムの設定 (エンコーディングが UTF-8 の場合) {#g728aabc}

最新版の WinShell (WinShell 3.3.2.4) で UTF-8 を使用する場合は，Runtime Error! が発生します．

Runtime Error! を回避するには，まず \[主なTeXプログラムの設定\] のプログラムの

- LaTeX
- PDFLaTeX

の exeファイル名の値をすべて削除します．

間違って LaTeX, PDFLaTeX を使用しても，警告メッセージが表示されるだけになり，Runtime Error! を回避できます．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShell　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　　　　実行(.exe)ファイルがありません。<br>
　　　　<span style="font-size:35px"><strong>!</strong></span>　　オプションの指定を確認してください。<br>

<br>

***

それから

- BibTeX
- DVIView
- DVI -> PS
- GSView
- PDFView

の LaTeXを先に実行と PDFLaTeXを先に実行のチェックをすべてはずします．
これらのプログラムは LaTeX と PDFLaTeX のプログラムを使用しなければ，エラーにならずに使用できます．

### LaTeX {#vb61ae7c}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">LaTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Command "&amp; {$s = echo """%s""";platex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode -jobname $s $s}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### PDFLaTeX {#aa58f8e6}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFLaTeX　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Command "&amp; {$s = echo """%s""";platex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvipdfmx $s}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### BibTeX {#f738702c}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>BibTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">BibTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>pbibtex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-kanji=utf8 "%s"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F6 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### DVIView {#t3155d55}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVIView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVIView 　　　　　　　　　　　　</span><br>
　　exeファイル名 　<ins>C:\w32tex\dviout\dviout.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-1 "%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F7 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### DVI -> PS {#vc4b836f}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVI -> PS</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>dvips.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVI -> PS　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Ppdf -t a4 -o "%s.ps" "%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F8 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### GSView {#c86acf84}

#### SumatraPDF の場合 {#xeb4838b}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>GSView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">GSView　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-reuse-instance "%s.ps"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ DVIPSを先に実行<br>
　　実行キー:　　　　引数:<br>
　　F9 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### GSview の場合 {#r71628f8}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>GSView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Ghostgum\gsview\gsview32.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">GSView　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-e "%s.ps"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ DVIPSを先に実行<br>
　　実行キー:　　　　引数:<br>
　　F9 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### PDFView {#q59b9a0b}

#### TeXworks の場合 {#wb5055eb}

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>C:\w32tex\share\texworks\TeXworks.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>"%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### SumatraPDF の場合 {#c7c1500e}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-reuse-instance -inverse-search "\\"C:\Program Files\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf" -forward-search "%c.tex" %l</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Adobe Reader X，WinShell 3.3.2.3 以降のバージョンの場合 {#k032bb97}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>"%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Adobe Reader X，WinShell 3.3.2.3 よりも前のバージョンの場合 {#fb70361e}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>cmd.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>/c start "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Adobe Reader 9 の場合 {#lfaa80bb}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Adobe\Reader 9.0\Reader\AcroRd32.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>"%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

## ユーザ指定プログラム (エンコーディングが UTF-8 の場合) {#w2dc76e1}

次に \[ユーザ指定プログラム\] へプログラムを設定します．<br>
\[ユーザ指定プログラム\] を使用すると Runtime Error! にならずにコンパイルすることができます．<br>

### pdfpLaTeX {#t92da731}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfpLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 1　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 3<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-Command "&amp; {$s = echo """%s""";platex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvipdfmx $s}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F1 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### pdfpLaTeX2 {#dccc6ce8}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfpLaTeX2</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 2　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 3<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-Command "&amp; {$r = echo "%s";$s = echo """$r""";$d = echo """$r.dvi""";$p = echo """$r.ps""";platex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvips -Ppdf -t a4 -o $p $d};if($?){ps2pdf.bat $p}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F2 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### pdfupLaTeX {#lde7d8ef}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfupLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 3　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-Command "&amp; {$s = echo """%s""";uplatex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode $s;if($?){dvipdfmx $s}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F3 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### pdfupLaTeX2 {#i337fee7}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfupLaTeX2</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 4　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-Command "&amp; {$r = echo "%s";$s = echo """$r""";$d = echo """$r.dvi""";$p = echo """$r.ps""";uplatex -no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode $s;if($?){dvips -Ppdf -t a4 -o $p $d};if($?){ps2pdf.bat $p}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F4 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### pdfLaTeX {#h0f0b8cb}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 5　　　　　　　　　　　　　　</span><br>
　　exeファイル名 　<ins>pdflatex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-synctex=1 -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F5 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### LuaLaTeX {#ecf6765b}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LuaLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　exeファイル名 　<ins>lualatex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 6　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-synctex=1 -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F6 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### XeLaTeX {#k56949e4}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>XeLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　exeファイル名 　<ins>xelatex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LuaLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 7　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-synctex=1 -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F7 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### upBibTeX {#x3ca6d7d}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>upBibTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　exeファイル名 　<ins>upbibtex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LuaLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　XeLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 8　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>"%s"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F8 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### Mendex {#f0721163}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>Mendex</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　exeファイル名 　<ins>mendex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LuaLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　XeLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　upBibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 9　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-U "%s.idx"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F9 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### Asymptote {#s5ca02c1}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>Asymptote</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfupLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　exeファイル名 　<ins>asy.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LuaLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　XeLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　upBibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Mendex<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 10　　　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>"%s.asy"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F10　　　　　　 %&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

## 使い方 {#q72162c1}

すでに TeX ファイルがあればツールバーの ［開く］ボタンで開きます
（ボタンの名前は，ツールバーのアイコンにカーソルを合わせると出てきます）。
無ければ［新規作成］ボタンを押します。上側にエディタ窓が開きます。
このエディタ窓に LaTeX の文書を打ち込みます。

打ち込み終わったら，［保存］ボタンを押します。新規に作成した文書の場合は
ファイル名を聞いてきますので，適当に答えます（例えば “test.tex”）。

\[LaTeX\] ボタンを押します。下のログ窓に処理状況が現れます。

> もしユーザ自身が作成したファイルとは異なるファイルが処理されているようなら，
> ユーザの意図しない「プロジェクト」が用いられていないかどうかを
> 調べてみてください（「プロジェクト」機能については
> 後述の「プロジェクト機能を使おう」を参照してください）。WinShell の
> インストール直後などではデモ用のプロジェクトが用意されていることがあるので，
> 必要ならそれを解除してください (See [qa:48695](https://okumuralab.org/~okumura/texfaq/qa/48695.html))。

エラーがなければ，続いて ［DVI閲覧］ボタンを
押します。[dviout for Windows](/dviout/) が立ち上がって，
結果が表示されるはずです。印刷は dviout for Windows から行います。

次回からは，拡張子が “.tex” のファイルは
エクスプローラでダブルクリックするだけで WinShell が起動するようになります。

<!-- **日本語のマニュアル [#uf5a572b] -->
<!--  -->
<!-- 「[[いろんな文書の翻訳 #WinShell のマニュアル:http://dokoka.org/wiki.cgi?page=%A4%A4%A4%ED%A4%F3%A4%CA%CA%B8%BD%F1%A4%CE%CB%DD%CC%F5]]」 -->
<!-- において WinShell 附属のマニュアルを日本語訳して公開しています。 -->
<!-- （← これは 3.0 附属のものです。現行のバージョンとは多少違いがあります） -->

### 補完機能 {#k8741d37}

Ctrl + Space でキーワードの補完ができます．

### コメントイン・コメントアウト機能 {#wsunk293}

範囲選択後 ［編集］ → ［注釈による無効化/無効化の解除］ （言語が English なら
\[Edit\] → \[Un/Comment\]）と選ぶと，選択した範囲の行頭に “%” が付けられたり
外されたりします。ショートカットキー Ctrl + K で同様のことができます。

### プロジェクト機能を使おう {#l22wsprj}

WinShell にはプロジェクト機能があります。長めの TeX 文書を書く場合に
非常に役立つと思いますのでやり方を紹介しておきます。

まず，TeX ファイルはあらかじめコンパイルしておきます。
メニューバーより ［プロジェクト］ → ［新規プロジェクト］ で
プロジェクトファイルを作ります。
そして，［プロジェクト］ → ［追加］ → ［中心となるTeX文書］ で
現在編集中のファイルを追加します。複数の TeX ファイルに分けている場合には
先ほどの ［追加］ から ［TeX文書］ を，bib ファイルを
作っている場合には ［BibTeX文書］ を選びます。

あとは，左に現れたプロジェクト名を右クリックしてアクティブに
し，［目次］ などの項目を右クリックして［再読み込み］することで，［目次］ には
\section などへのリンクが，［図］ や ［表］，［参考文献］ には
それぞれの \label へのリンクが追加されます。それぞれのラベルへのリンクを
ダブルクリックすることで，そこにジャンプすることができます。

### dviout プレビュー時にできる邪魔なファイルをスッキリさせる {#ja9ea261}

- [リンク: Windowsでdvioutプレビュー時にできる邪魔なファイルをスッキリさせる。](http://d.hatena.ne.jp/okmount/20101004)
- [WindowsでLaTeXを使うときの.pbmファイルを削除する方法](http://nlab.ee.tokushima-u.ac.jp/nlab/haruna/memo/pbm.html)

## SumatraPDF との連携 (forward and inverse search) {#o54574a6}

LaTeX コマンドのコマンドラインに -synctex=1 を追加し，PDFView を [SumatraPDF](/SumatraPDF/) に変更します．

WinShell は PDFView に SumatraPDF を指定すれば inverse search の設定を自動的に行い forward search の設定をしなくても自動的に実行してくれます．

SumatraPDF v1.7.3952 未満 かつ 2011/05/11 以降の W32TeX の場合は PDFLaTeX を以下のように修正します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFLaTeX　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Command "&amp; {$r = echo "%s";$s = echo """$r""";$t = echo """$pwd\\$r.tex""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $t;if($?){dvipdfmx $s}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

inverse search の時に他のエディタが起動してしまう場合は sumatrapdfprefs.dat を削除してください．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-reuse-instance -inverse-search "\\"C:\Program Files\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf" -forward-search "%c.tex" %l</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

## dviout との連携 (非推奨) {#l22a7019}

[dviout#forward and inverse search](/dviout/#ycc841a2) を参照．

メニューバーより ［オプション］ → ［TeX関連プログラム設定］ と選び，右の
「プログラム」のリストより \[LaTeX\] を選びます。そして，「コマンドライン」に

```
-src-specials
```

を追加します。

### forward search {#yc2b25ff}

メニューバーより ［オプション］ → ［TeX関連プログラム設定］ と選び，
右の「プログラム」のリストより \[DVIView\] を選びます。
そして，「コマンドライン」を

```
-1 "%s.dvi" "# %l '%c.tex'"
```

のように変更しておきます。こうしておくことで，WinShell
から ［DVI閲覧］ボタンを押すことで，WinShell の文書のカーソル位置に相当する
dviout for Windows への該当領域へとジャンプすることができます。

### inverse search {#m06ddfb4}

[dviout for Windows](/dviout/) の
\[Option\] → \[Setup Parameters...\] → \[Common\] の src: 欄に

```
C:\Program Files\WinShell\WinShell.exe^s -c "%s" -l %d
(64bitOSの場合は、C:\Program Files (x86)\WinShell\WinShell.exe^s -c "%s" -l %d)
```

と書き込んで \[Save\] → \[OK\] の順にクリックしてください。

dviout for Windows でマウスカーソルが矢印になっているときに画面の一部を
ダブルクリックすると，WinShell が前面に出て，該当個所に飛ぶはずです。

## 「WinShell Update」機能 {#n1ccef71}

WinShell 3.3.1.3 （この Ver. はベータ版）からは標記の機能が追加されました。インストールされている Ver. よりも新しい安定版またはベータ版が出ている場合、新 Ver. の WinShell に Update できるようになりました。

実際、2010/1/7 より 3.3.1.4 （この Ver. もベータ版）への Update がこの機能を用いて、自動的かつ容易にできるようになりました。

### WinShell の更新 {#j9fd4961}

WinShell を起動し，メニューから \[ヘルプ(H)\] → \[アップデートの確認(C)...\] をクリックします。

「WinShellの更新」 が表示され，WinShell の使用中のバージョン・最新のリリースバージョン・最新のベータバージョンが表示されます。

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShellの更新　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

　使用中のバージョン: 　　　　3.3.2.3<br>
　最新のリリースバージョン:　3.3.2.4　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 更新を適応 \]</span><br>
　最新のベータバージョン:　　none　　　　　　<span style="color:#888888;background-color:#EEEEEE;">\[ 更新を適応 \]</span><br>
　<span style="color:Black;background-color:#E8E8E8;">\[　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\]</span><br>
　残り時間:<br>
　転送状況:<br>
　☑アップデートを自動的に確認　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　中止　　 \]</span>

***
