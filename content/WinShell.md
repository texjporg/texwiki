---
title: "WinShell"
url: "/WinShell/"
date: 2013-01-25T16:28:38Z
pukiwiki: "WinShell"
---

# WinShell

<strong>現在では主流ではありません。使っている人も少ないので、サポートも得にくいです。</strong><br>

WinShell ではなく [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), [LyX](/LyX/), [TeXnicCenter](/TeXnicCenter/) などの統合環境をおすすめします．<br>

## [WinShell](http://www.winshell.org/) (obsolete) → [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), [LyX](/LyX/), [TeXnicCenter](/TeXnicCenter/) などの統合環境を使用する {#cf193be7}

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

- [LaTeX User Front End : WinShell](http://www.winshell.org/)

### お知らせ {#z73b9e72}

[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/) 著
『LaTeX2e 美文書作成入門』
([改訂第6版](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/), [改訂第5版](http://oku.edu.mie-u.ac.jp/~okumura/bibun5/)) では，おすすめの統合環境が [<strong>TeXworks</strong>](/TeXworks/) になりました．<br>

### 動作環境 {#f8ed906d}

Windows 8.1, 8, 7, Vista, XP

### リリース情報/ChangeLog {#yc18b30c}

- [Download : WinShell](http://www.winshell.org/modules/download/)
- [History : WinShell](http://www.winshell.org/modules/history/)

を参照．<br>

WinShell 3.3.2.6 は Adobe Reader XI と Adobe Acrobat XI の DDE に対応しています．<br>

### スクリーンショット {#l2305277}

[![WinShell 3 の新しい画面](http://www.winshell.org/screenshots/main_small.png)](http://www.winshell.org/screenshots/main.png) [![Linux で動作する WinShell 3](http://www.winshell.org/screenshots/Linux_WinShell_small.png)](http://www.winshell.org/screenshots/Linux_WinShell.png)

## ダウンロード {#j27d3bd6}

### リリース版 {#d795df7b}

- [Download : WinShell](http://www.winshell.org/modules/download/)

インストーラー版とポータブル版があります．<br>

### 日本語言語ファイル {#z273ed84}

- [WinShell3日本語化](http://redmine.nnnnn.me/projects/winshell/files)
    <!-- - -[[jp_JP.txt:http://webcache.googleusercontent.com/search?q=cache%3ahttp://redmine.nnnnn.me/attachments/download/1/jp_JP.txt]] (Google キャッシュ) -->

[( ﾟÅﾟ)んー](https://twitter.com/whoami) さんが WinShell 日本語言語ファイルを公開されています．<br>
WinShell に付属の日本語言語ファイルは，一部翻訳されていない部分があるので，気になる方はこれも合わせてダウンロードしてください．<br>
ダウンロードしたファイルは WinShell の Translations フォルダーに置いてください．<br>

## 不具合 {#m3e6b0cc}

### エンコーディングが UTF-8 の場合に \[PDFLaTeX\], \[LaTeX\] を実行すると Runtime Error! → 別の統合環境・エディタを使用する {#g47585a4}

エンコーディングを UTF-8 に変更して

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]</ins></span><strong>\[ フォント \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　　　<span style="color:Black;background-color:#EEEEEE;">\[文書　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</span>　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>

<br>

　　　　フォント:　　　　　　　　　　　　　　　　　　　　　サイズ:　　　　スクリプト:<br>
　　　　<span style="color:Black;background-color:White;">\[　　Meiryo UI　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[10　　　<strong>ᐯ</strong>\]</span> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　<strong>ᐯ</strong>\]</span><br>

<br>

　　　　例:　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　エンコーディング:<br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　<span style="color:Black;background-color:#EEEEEE;">\[UTF-8　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;"> 　　　　　　　　　　　　AaBbAaAa　　　　　　　　　　　　　</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　☐ Bold Font<br>

***

LaTeX ファイルをメニューの \[実行(X)\] → \[PDFLaTeX\] または \[実行(X)\] → \[LaTeX\] でコンパイルしたところ，以下のような Runtime Error! が発生しました．

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　<span style="color:Black;"><strong>Microsoft Visual C++ Runtime Library</strong></span>　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<span style="font-size:35px"><strong>×</strong></span> Runtime Error!<br>

<br>

　　　　Program: C:\Program Files (x86)\WinShell\WinShell.exe<br>

<br>

<br>

　　　　This application has requested the Runtime to terminate it in an<br>
　　　　unusual way.<br>
　　　　Please contact the application's support team for more<br>
　　　　information.

***

UTF-8 を使用したい方は

- [TeXstudio](/TeXstudio/)
- [Texmaker](/Texmaker/)
- [TeXworks](/TeXworks/)
- [LyX](/LyX/)
- [TeXnicCenter](/TeXnicCenter/)
- [Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/)
- [Emacs](/Emacs/)
- [Vim](/Vim/)
- [Notepad++](/Notepad++/)
- [サクラエディタ](</サクラエディタ/>)

などの UTF-8 で問題の発生しないオープンソースの統合環境・エディタを使用してください．

### Adobe Reader XI で PDF ファイルが表示できない → WinShell 3.3.2.6 にアップデートしてレジストリの HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\application の (既定) の値のデータを AcroViewR11 に修正 {#s2ec7c9c}

- [Adobe Reader XI: pdfView cannot be used](http://www.winshell.org/modules/smartfaq/faq.php?faqid=16)

WinShell 3.3.2.6 の場合，Adobe Reader XI で DDE を使用して PDF ファイルを表示しようとすると，以下のような警告メッセージが表示され，PDF ファイルが表示できない場合があります．<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>WinShell</strong></span>　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　　　　Cannot start AcrobatReader or open the document.<br>
　　　　<span style="font-size:35px"><strong>!</strong></span>　　1. Please check on the exe file and cmd line of the PDFView<br>
　　　　　　　options.<br>
　　　　　　　2. Please set correct Adobe DDE Version in registry key<br>
　　　　　　　'HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\applicatio<br>
　　　　　　　n'<br>

<br>

***

Adobe Reader XI で DDE を使用する場合はレジストリの HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\application の (既定) の値のデータを

```
AcroViewR11
```

に修正します．

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>文字列の編集</strong></span>　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　値の名前(N):<br>
　　 <ins>(既定)</ins><br>

　　値のデータ(V):<br>
　　 <ins>AcroViewR11</ins><br>

<br>

***

DDE を使用する場合は PDFView を以下のように設定します．

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe"</ins> (32-bit 版 Windows の場合) <ins>"C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe"</ins> (64-bit 版 Windows の場合)<br>
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

DDE を使用しない場合は PDFView を以下のように設定します．

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

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
　　コマンドライン 　<ins>/c start "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf"</ins> (32-bit 版 Windows の場合) <ins>/c start "C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf"</ins> (64-bit 版 Windows の場合)<br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### エンコーディングが ShiftJIS の場合，対応する括弧の強調表示時に日本語が文字化けする → UTF-8 を使用するまたは対応する括弧の強調表示を OFF にする {#n7cba889}

エンコーディングが ShiftJIS の場合，対応する括弧の強調表示時に日本語が文字化けする不具合があります．<br>
例えば<br>

```
\chapter{日本語文字
```

と入力してから “}” を付けると，括弧が緑色に表示され，文字入力カーソルを “本” の後ろに移動させると文字化けします．<br>

エンコーディングが ShiftJIS の場合，特定の文字を{}の中で使用し、文字入力カーソルを特定の文字の後ろに移動させると文字化けします．<br>
文字化けを回避するには，UTF-8 を使用する方法があります．<br>
ShiftJIS を使用したい場合は対応する括弧の強調表示のチェックをはずしてください．<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]</ins></span><strong>\[ 構文の強調表示 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

<br>

<br>

　　　　　　　　　　☑ 構文の強調表示(S)<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>
　　　　　　　　　　　<ins><span style="color:Black;background-color:Blue;">\[　　\]</span> \ (La)TeX命令　　　　　　　　　　　　　<strong>ᐯ</strong></ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　色(C)...　　　\]</span><br>

<br>

　　　　　　　　　　☐ 対応する括弧の強調表示(M) ← ShiftJIS の場合はチェックをはずす<br>

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

> <table>
> <tbody>
> <tr><td>2byte目</td><td>文字</td><td></td></tr>
> <tr><td>0x7b</td><td>{</td><td>＋ ボ к 閲 顎 宮 鶏 砿 施 旬 須 捜 畜 怒 倍 府 本 養 几 嘴 學 悳 掉 桀 毬 炮 痣 窖 縵 艝 蛔 諚 轆 閔 驅 黠 垬 葈</td></tr>
> <tr><td>0x7d</td><td>}</td><td>マ м 厭 笠 急 迎 閤 枝 殉 図 挿 筑 党 媒 扶 凡 抑 凩 嘲 孺 怡 掵 栲 毳 烋 痾 竈 繃 艟 蛩 諳 轗 閘 驀 黨 埇 蕓</td></tr>
> </tbody>
> </table>
>

1行目の文字群は 2-byte 目が 0x7b ( { ) になっており、2行目の文字群は 2-byte 目が 0x7d ( } ) となっているため、エラーが発生します。<br>
これらの文字群を使用すると WinShell の BibTeX のフロントエンド編集での読み込みもできません。<br>
(追記：2010/01/20)<br>
また、プロジェクトウィンドウを利用している場合は、参考文献一覧も上記文字群が含まれている場合は正常に表示できません。<br>
対策として、上記文字群が含まれている BibTeX 項目を、別の bib ファイルに隔離して2つの bib ファイルを使い分けると少し使い勝手が向上します。<br>
その際、隔離した bib が \_Unknown にまとめて表示されれば、WinShell が本来意図して付けた BibTeX の機能を使用できるかと思います。<br> <!-- ちなみに確認 OS は XP SP2 32ビット Professional 版 -->

【参考】

- [Shift_JISのダメ文字](https://sites.google.com/site/fudist/Home/grep/sjis-damemoji-jp)
    - [ダメ文字一覧表](https://sites.google.com/site/fudist/Home/grep/sjis-damemoji-jp/table)

## 設定 {#xe1b50b7}

WinShell/設定 を参照．

## 使い方 {#n7874abc}

WinShell/使い方 を参照．
