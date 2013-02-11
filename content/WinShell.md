---
title: "WinShell"
url: "/WinShell/"
date: 2013-01-25T16:28:38Z
pukiwiki: "WinShell"
---

# WinShell

## [WinShell](http://www.winshell.org/) {#cf193be7}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## WinShell とは {#s864df7d}

WinShell は，多言語に対応した LaTeX と TeX のための統合環境 (IDE) です．

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

<strong>WinShell は LaTeX そのものではありません．</strong>

LaTeX の処理系は別途インストールする必要があります．

- [LaTeX User Front End : WinShell](http://www.winshell.org/)
    公式サイト

### お知らせ {#z73b9e72}

[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/) 著
『LaTeX2e 美文書作成入門』
([改訂第5版](http://oku.edu.mie-u.ac.jp/~okumura/bibun5/)) では，おすすめの統合環境が [<strong>TeXworks</strong>](/TeXworks/) になりました．<br>

### 動作環境 {#f8ed906d}

Windows 8, 7, Vista, XP, 2000

### リリース情報/ChangeLog {#yc18b30c}

- [Download : WinShell](http://www.winshell.org/modules/download/)
- [History : WinShell](http://www.winshell.org/modules/history/)

を参照．<br>

WinShell 3.3.2.5 以降は Adobe Reader XI と Adobe Acrobat XI の DDE に対応しています．<br>
WinShell 3.3.2.3 以降は Adobe Reader X と Adobe Acrobat X の DDE に対応しています．<br>

### スクリーンショット {#l2305277}

[![WinShell 3 の新しい画面](http://www.winshell.org/screenshots/main_small.png)](http://www.winshell.org/screenshots/main.png) [![Linux で動作する WinShell 3](http://www.winshell.org/screenshots/Linux_WinShell_small.png)](http://www.winshell.org/screenshots/Linux_WinShell.png)

## ダウンロード {#j27d3bd6}

### インストーラー版 {#d795df7b}

- [Download : WinShell](http://www.winshell.org/modules/download/)
    WinShell 最新版

- [CTAN ミラー](https://mirror.ctan.org/help/Catalogue/entries/winshell.html)
    国内の WinShell ミラーサイト

- [WinShellでUTF-8](http://stanag4172.m13.coreserver.jp/blog/archives/154) WinShell 3.1 (旧バージョン)
- [Index of /mounir/anits/latex/winshell](http://wwwesto.ump.ma/mounir/anits/latex/winshell/) WinShell 3.1 (旧バージョン)

### ポータブル版 {#w8b350cf}

- [Download : WinShell](http://www.winshell.org/modules/download/)
    WinShell 最新版
    <!-- -[[WinShell332Portable （zip）:http://www.htc.nagoya-u.ac.jp/~yamamoto/lecture/11/]] (WinShell 3.3.2.4) -->

- [CTAN ミラー](https://mirror.ctan.org/help/Catalogue/entries/winshell.html)
    国内の WinShell ミラーサイト

### 日本語言語ファイル {#z273ed84}

- [WinShell3日本語化](http://redmine.nnnnn.me/projects/winshell/files)
    - [jp_JP.txt](http://webcache.googleusercontent.com/search?q=cache%3ahttp://redmine.nnnnn.me/attachments/download/1/jp_JP.txt) (Google キャッシュ)

[( ﾟÅﾟ)んー](http://twitter.com/whoami) さんが WinShell3 日本語言語ファイルを公開されています．<br>
WinShell に付属の日本語言語ファイルは，一部翻訳されていない部分があるので，気になる方はこれも合わせてダウンロードしてください．<br>
ダウンロードしたファイルは WinShell の Translations フォルダーに置いてください．<br>

## 不具合 {#m3e6b0cc}

### エンコーディングが UTF-8 の場合に Runtime Error! → 別の統合環境・エディタを使用する {#g47585a4}

WinShell 3.3.2.6 で，エンコーディングを UTF-8 に変更し

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

UTF-8 を使用したい方は

- [LyX](/LyX/)
- [TeXworks](/TeXworks/)
- [Texmaker](/Texmaker/)
- [TeXstudio](/TeXstudio/)
- [TeXnicCenter](/TeXnicCenter/)
- [Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/)
- [Emacs](/Emacs/)
- [Vim](/Vim/)
- [Notepad++](/Notepad++/)
- [サクラエディタ](</サクラエディタ/>)
- AkelPad
- 真魚\[まな\]
- [xyzzy](/xyzzy/)
- jEdit
- [Geany](/Geany/)
- [gedit](/gedit/)
- Gummi

などの UTF-8 で問題の発生しないオープンソースの統合環境・エディタを使用してください．

WinShell 3.1 (旧バージョン) では UTF-8 でも Runtime Error! が発生しないようです．

- [WinShellでUTF-8](http://stanag4172.m13.coreserver.jp/blog/archives/154) WinShell 3.1 (旧バージョン)
- [Index of /mounir/anits/latex/winshell](http://wwwesto.ump.ma/mounir/anits/latex/winshell/) WinShell 3.1 (旧バージョン)

[Winshell3.3 の Runtime Error: nouse](http://yeblog.cocolog-nifty.com/nouse/2009/02/winshell33-runt.html) にも，Runtime Error! に関する情報があります．

どうしても WinShell の最新版で UTF-8 を使用したい場合は

- 主なTeXプログラムの設定 (エンコーディングが UTF-8 の場合)
- ユーザ指定プログラム (エンコーディングが UTF-8 の場合)

を参照して設定をしてください．

### エンコーディングが ShiftJIS の場合の括弧の強調表示時の文字化け → 対応する括弧の強調表示を OFF にする {#n7cba889}

エンコーディングが ShiftJIS の場合，括弧の強調表示時に，日本語が文字化けする不具合があります．

例えば

```
\chapter{日本語文字
```

と入力してから “}” を付けると，括弧が緑色に表示され，文字入力カーソルを “本” の後ろに移動させると文字化けします．

エンコーディングが ShiftJIS の場合，特定の文字を{}の中で使用し、文字入力カーソルを特定の文字の後ろに移動させると文字化けします．

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

#### WinShellにてカーソルを合わせると消える文字について {#hec85ef2}

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

【参考】

- [Shift_JISのダメ文字](https://sites.google.com/site/fudist/Home/grep/sjis-damemoji-jp)
    - [ダメ文字一覧表](https://sites.google.com/site/fudist/Home/grep/sjis-damemoji-jp/table)

### Adobe Reader XI で PDF ファイルが表示できない → WinShell 3.3.2.5 以降にアップデートしてレジストリの HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\application の (既定) の値のデータを AcroViewR11 に修正 {#s2ec7c9c}

- [Adobe Reader XI: pdfView cannot be used](http://www.winshell.org/modules/smartfaq/faq.php?faqid=16)

WinShell 3.3.2.5 で修正されました．

#### Adobe Reader XI，WinShell 3.3.2.5 以降のバージョンの場合 {#f8497c44}

WinShell 3.3.2.5 以降の場合，Adobe Reader XI で PDF ファイルを表示しようとすると，以下のような警告メッセージが表示され，PDF ファイルが表示できない場合があります．<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShell　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　　　　Cannot start AcrobatReader or open the document.<br>
　　　　<span style="font-size:35px"><strong>!</strong></span>　　1. Please check on the exe file and cmd line of the PDFView<br>
　　　　　　　options.<br>
　　　　　　　2. Please set correct Adobe DDE Version in registry key<br>
　　　　　　　'HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\applicatio<br>
　　　　　　　n'<br>

<br>

***

この場合レジストリの HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\application の (既定) の値のデータを

```
AcroViewR11
```

に修正します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　文字列の編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　値の名前(N):<br>
　　 <ins>(既定)</ins><br>

　　値のデータ(V):<br>
　　 <ins>AcroViewR11</ins><br>

<br>

***

PDFView を以下のように設定します．

- [Adobe Reader](</Adobe Reader/>) XI，WinShell 3.3.2.5 以降のバージョンの場合，exeファイル名を "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe") (\[参照(B)...\] で AcroRd32.exe を検索) とします．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe"</ins> (32bit 版 Windows の場合) <ins>"C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe"</ins> (64bit 版 Windows の場合)<br>
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

#### Adobe Reader XI，WinShell 3.3.2.5 よりも前のバージョンの場合 {#yfe3b87c}

WinShell 3.3.2.5 よりも前のバージョンの場合，Adobe Reader XI で PDF ファイルを表示しようとすると，以下のような警告メッセージが表示され，PDF ファイルが表示できません．<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShell　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　　　　Cannot start AcrobatReader or open the document.<br>
　　　　<span style="font-size:35px"><strong>!</strong></span>　　Please check on the exe file and cmd line of the PDFView<br>
　　　　　　　options.<br>

<br>

***

これを回避するには PDFView を以下のように設定します．

- [Adobe Reader](</Adobe Reader/>) XI，WinShell 3.3.2.5 よりも前のバージョンの場合，exeファイル名を cmd.exe とし，コマンドラインを /c start "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf" (64bit版Windowsの場合は /c start "C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf") とします．

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
　　コマンドライン 　<ins>/c start "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf"</ins> (32bit 版 Windows の場合) <ins>/c start "C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf"</ins> (64bit 版 Windows の場合)<br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### Adobe Reader X で PDF ファイルが表示できない → WinShell 3.3.2.5 以降にアップデートしてレジストリの HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\application の (既定) の値のデータを AcroViewR10 に修正 {#n0b52900}

WinShell 3.3.2.3 で修正されました．

#### Adobe Reader X，WinShell 3.3.2.3 以降のバージョンの場合 {#u1b7f6cd}

WinShell 3.3.2.5 以降の場合，Adobe Reader X で PDF ファイルを表示しようとすると，以下のような警告メッセージが表示され，PDF ファイルが表示できない場合があります．<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShell　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　　　　Cannot start AcrobatReader or open the document.<br>
　　　　<span style="font-size:35px"><strong>!</strong></span>　　1. Please check on the exe file and cmd line of the PDFView<br>
　　　　　　　options.<br>
　　　　　　　2. Please set correct Adobe DDE Version in registry key<br>
　　　　　　　'HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\applicatio<br>
　　　　　　　n'<br>

<br>

***

この場合レジストリの HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\application の (既定) の値のデータを

```
AcroViewR10
```

に修正します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　文字列の編集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　値の名前(N):<br>
　　 <ins>(既定)</ins><br>

　　値のデータ(V):<br>
　　 <ins>AcroViewR10</ins><br>

<br>

***

PDFView を以下のように設定します．

- [Adobe Reader](</Adobe Reader/>) X，WinShell 3.3.2.3 以降のバージョンの場合，exeファイル名を "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe") (\[参照(B)...\] で AcroRd32.exe を検索) とします．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe"</ins> (32bit 版 Windows の場合) <ins>"C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe"</ins> (64bit 版 Windows の場合)<br>
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

#### Adobe Reader X，WinShell 3.3.2.3 よりも前のバージョンの場合 {#y3225185}

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
これを回避するには PDFView を以下のように設定します．

- [Adobe Reader](</Adobe Reader/>) X，WinShell 3.3.2.3 よりも前のバージョンの場合，exeファイル名を cmd.exe とし，コマンドラインを /c start "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf" (64bit版Windowsの場合は /c start "C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf") とします．

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
　　コマンドライン 　<ins>/c start "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf"</ins> (32bit 版 Windows の場合) <ins>/c start "C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf"</ins> (64bit 版 Windows の場合)<br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### WinShell 3.3.2.4 で自動スペルチェックがオンの場合に赤い小さなゴミのようなものが表示される → 自動スペルチェックをオフにする → WinShell 3.3.2.5 で修正されました {#y2f85553}

WinShell 3.3.2.5 で修正されました．

WinShell 3.3.2.4 で，日本語文書を入力してカーソル移動などをすると，各文字について，赤い小さなゴミのようなものが表示されます．<br>
「オプション(O) → 自動スペルチェック(A)」をオフにすると解消されます．<br>

## 設定 {#xe1b50b7}

WinShell/設定 を参照．

## 使い方 {#n7874abc}

WinShell/使い方 を参照．

## 関連リンク {#t6b26342}

- [WinShellのbibtexでエラーが出た時](http://blog.livedoor.jp/tmako123-programming/archives/22041970.html)
- [WinShellでTeXのコンパイル中にも編集する方法](http://tatsyblog.wordpress.com/2013/01/07/winshell%E3%81%A7tex%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E4%B8%AD%E3%81%AB%E3%82%82%E7%B7%A8%E9%9B%86%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/)
- [WinShell便利設定](http://dalvatechnique.seesaa.net/article/310165517.html)
- [レポートの表紙をTeXで書きなおしてみた](http://nryas.hateblo.jp/entry/2012/12/25/005143)
- [LaTeXインストール・論文作成](http://bin.t.u-tokyo.ac.jp/startup2012/)
- [LaTexの使い方 初級編](http://www.library.osaka-u.ac.jp/doc/TA_LaTeX1.pdf) (PDF)
- [WinShellでTeXのコンパイル中にも編集する方法](http://tatsyblog.wordpress.com/2013/01/07/winshell%E3%81%A7tex%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E4%B8%AD%E3%81%AB%E3%82%82%E7%B7%A8%E9%9B%86%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/)
- [キーワード：WinShell | 情報科学屋さんを目指す人のメモ](http://did2memo.net/tag/winshell/)
- [Windows 7 のセットアップ](http://transitive.info/2012/03/24/windows7-setup/)
- Tex統合開発環境WinShellの利用方法について ([その1](http://www.ex.media.osaka-cu.ac.jp/windows/winshell.html), [その2](http://www.ex.media.osaka-cu.ac.jp/windows/winshell9F.html))
