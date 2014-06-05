---
title: "WinShell"
url: "/WinShell/"
date: 2013-01-25T16:28:38Z
pukiwiki: "WinShell"
---

# WinShell

<span style="font-size:40px">WinShell はエンコーディングが UTF-8 の場合に \[PDFLaTeX\], \[LaTeX\] を実行すると Runtime Error! が発生するかもしれません．</span><br>

<span style="font-size:40px">問題が発生する場合は WinShell ではなく [LyX](/LyX/), [TeXstudio](/TeXstudio/), [TeXworks](/TeXworks/) などの統合環境を使用してください．</span><br>

## [WinShell](http://www.winshell.org/) → エンコーディングが UTF-8 の場合に \[PDFLaTeX\], \[LaTeX\] を実行すると Runtime Error! が発生するなどの問題が発生する場合は [LyX](/LyX/), [TeXstudio](/TeXstudio/), [TeXworks](/TeXworks/) などの統合環境を使用する {#cf193be7}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## WinShell とは {#s864df7d}

WinShell は，多言語に対応した LaTeX と TeX のための統合環境 (IDE) です．

- [WinShell - LaTeX User Front End](http://www.winshell.org/)

### お知らせ {#z73b9e72}

[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/) 著
『LaTeX2e 美文書作成入門』
([改訂第6版](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/), [改訂第5版](http://oku.edu.mie-u.ac.jp/~okumura/bibun5/)) では，おすすめの統合環境が [<strong>TeXworks</strong>](/TeXworks/) になりました．<br>

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

などの機能があります．

### 日本語言語ファイル {#z273ed84}

- [WinShell3日本語化](http://redmine.nnnnn.me/projects/winshell/files)
    <!-- - -[[jp_JP.txt:http://webcache.googleusercontent.com/search?q=cache%3ahttp://redmine.nnnnn.me/attachments/download/1/jp_JP.txt]] (Google キャッシュ) -->

[( ﾟÅﾟ)んー](https://twitter.com/whoami) さんが WinShell 日本語言語ファイルを公開されています．<br>
WinShell に付属の日本語言語ファイルは，一部翻訳されていない部分があるので，気になる方はこれも合わせてダウンロードしてください．<br>
ダウンロードしたファイルは WinShell の Translations フォルダーに置いてください．<br>

## 不具合 {#m3e6b0cc}

### エンコーディングが UTF-8 の場合に \[PDFLaTeX\], \[LaTeX\] を実行すると Runtime Error! → [LyX](/LyX/), [TeXstudio](/TeXstudio/), [TeXworks](/TeXworks/) などの統合環境を使用する {#g47585a4}

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

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [TeXworks](/TeXworks/)

などの UTF-8 で問題の発生しないオープンソースの統合環境を使用してください．

### Adobe Reader で PDF ファイルが表示できない → [SumatraPDF](/SumatraPDF/) を使用する {#s2ec7c9c}

Adobe Reader で PDF ファイルが表示できない場合は [SumatraPDF](/SumatraPDF/) を使用してください．<br>
Adobe Reader は SumatraPDF のメニューの \[ファイル(F)\]-\[Adobe Reader で開く(A)\] から起動できます．<br>
Adobe Reader でないと確認できない PDF ファイルを作成する場合は以下の記述を参照してください．<br>

- [WinShellでAdobe Reader11が呼べない時の解決方法](http://ameblo.jp/green-marimo/entry-11849170023.html)
- [WinShellのCannot start AcrobatReader or open the document.](http://d.hatena.ne.jp/imasusen/20131128/1385574812)

WinShell 3.3.2.6 は Adobe Reader XI, Adobe Acrobat XI, SumatraPDF の DDE に対応しています．<br>
DDE については [Wikipedia.ja:動的データ交換](https://ja.wikipedia.org/wiki/%E5%8B%95%E7%9A%84%E3%83%87%E3%83%BC%E3%82%BF%E4%BA%A4%E6%8F%9B) を参照してください．<br>
WinShell は PDFView に Adobe Reader, Adobe Acrobat, SumatraPDF を設定すると PDF ファイルの表示に DDE を使用します．<br>
WinShell 3.3.2.6 の場合，Adobe Reader XI で DDE を使用して PDF ファイルを表示しようとすると，レジストリの HKEY_CLASSES_ROOT\acrobat\shell\open\ddeexec\application の (既定) の値によっては以下のような警告メッセージが表示され，PDF ファイルが表示できない場合があります．<br>

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
　　exeファイル名 　<ins>"C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe"</ins> (64-bit 版 Windows の場合) <ins>"C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe"</ins> (32-bit 版 Windows の場合)<br>
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
　　コマンドライン 　<ins>/c start "C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf"</ins> (64-bit 版 Windows の場合) <ins>/c start "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf"</ins> (32-bit 版 Windows の場合)<br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### 主なTeXプログラムの設定に使用するコマンドラインの引数のパースの仕方に問題がある → Ruby, Windows PowerShell, バッチファイル などを使用する {#v088befc}

WinShell は主なTeXプログラムの設定に使用するコマンドラインの引数のパースの仕方に問題があります．<br>
WinShell の場合は例えば LaTeX のコマンドラインの設定で &#x25;s を2回以上使用すると WinShell がクラッシュします．<br>
Ruby や Windows PowerShell の変数を使用して &#x25;s を一度だけ使用するように設定を記述すれば OK です．<br>
Ruby, Windows PowerShell の他に バッチファイルを使用しても OK です．<br>

### エンコーディングが ShiftJIS の場合，対応する括弧の強調表示時に日本語が文字化けする → UTF-8 を使用する {#n7cba889}

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

#### WinShell のエンコーディングが ShiftJIS の場合にカーソルを合わせると消える文字について {#hec85ef2}

関連内容;　TeXフォーラム内の質問「WinShellにてカーソルを合わせると消える文字について」

[http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=156](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=156)

LaTeX などのメッセージ出力欄においても，日本語が出力される場合文字化けします。

プロジェクトの ［目次］ において，\section に日本語を指定した場合に
文字が表示されない不具合があります。<br>
(追記：2009/12/21)<br>
{}の中で使用するとエンコーディングが ShiftJIS の場合に不具合が起こる文字を以下の通りにまとめます。

> | 2-byte 目 | 文字 | エンコーディングが ShiftJIS の場合に不具合が起こる文字 |
> |---|---|---|
> | 0x7b | { | ＋ ボ к 閲 顎 宮 鶏 砿 施 旬 須 捜 畜 怒 倍 府 本 養 几 嘴 學 悳 掉 桀 毬 炮 痣 窖 縵 艝 蛔 諚 轆 閔 驅 黠 垬 葈 |
> | 0x7d | } | マ м 厭 笠 急 迎 閤 枝 殉 図 挿 筑 党 媒 扶 凡 抑 凩 嘲 孺 怡 掵 栲 毳 烋 痾 竈 繃 艟 蛩 諳 轗 閘 驀 黨 埇 蕓 |
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

### 設定ファイル {#r1bd4e35}

WinShell のポータブル版は WinShell.exe と同じフォルダーの Settings フォルダーに設定ファイルが作成されます．

### 初回起動時 {#kc4f0896}

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　<span style="color:Black;"><strong>WinShell</strong></span>　　　　　　　</ins></span><br>

　 Choose Language<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">\[Japanese　　　　　　　　　<strong>ᐯ</strong>\]</span>　← Japanese (日本語) で \[ 　　　OK　　　 \]<br>
<br><br>

　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　　OK　　　 \]</span>

***

### 一般 {#w5d7526c}

メニューから \[オプション(O)\] → \[全般(G)...\] をクリックします．

デフォルトではバックアップファイルを作成しません．<br>
重要な文書を作成する場合は，バックアップ(.bak)ファイル作成(C) にチェックを入れておきましょう．

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<strong>\[ 一般　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>
　　　　　言語　　　　　　　　　　　　　　　　　　　　　　　　　　　　ファイル形式<br>
　　　　　　WinShell: 　 　 　 　 　　 　 　 　 　 　 　　　　　　　　　(●) Windows<br>
　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[Japanese　　　　　　　　　　　　<strong>ᐯ</strong>\]</span>　　　　　　　　　　 ◯ Unix<br>
　　　　　　スペルチェック:<br>
　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[en_US 　 　 　 　 　 　 　 　 　　<strong>ᐯ</strong>\]</span><br>

<br>

　　　　☑ バックアップ(.bak)ファイル作成(C)<br>
　　　　☐ 終了時に自動保存(S)<br>
　　　　☑ エラー行に自動ジャンプ(J)<br>
　　　　☑ BibTeXのエディタ表示を利用する<br>
　　　　☑ 起動時に開いているファイルを再読込(R)

***

### フォント → エンコーディングを UTF-8 に変更する {#y5d09419}

初回起動時に言語選択で Japanese を選択した場合は, デフォルトで『スクリプト』が「日本語」，『エンコーディング』が「ShiftJIS」に設定されます．<br>
『エンコーディング』の「ShiftJIS」を「UTF-8」に変更します．<br>
UTF-8 を使用する場合は [不具合#エンコーディングが UTF-8 の場合に \[PDFLaTeX\], \[LaTeX\] を実行すると Runtime Error!](/WinShell/#g47585a4) を参照してください．<br>
フォントは確認の上ご自分の用途に応じたものを選んでください．<br>
フォント名として「@ＭＳ ゴシック」のような “@” から始まる名前のフォントを選択するとテキストエディタの和文文字が横倒しに表示されてしまいますので，そのような設定は避けましょう．<br>

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

### 自動スペルチェック {#d5530dfb}

デフォルトでは自動スペルチェックが有効になっています．<br>
自動スペルチェックが必要ない場合は \[オプション(O)\] → \[自動スペルチェック(A)\] をオフにします．

## 主なTeXプログラムの設定 {#vfb035c6}

エンコーディングが UTF-8 の場合に \[PDFLaTeX\], \[LaTeX\] を実行すると [Runtime Error!](/WinShell/#g47585a4) が発生します．

Runtime Error! を回避するには，まず \[主なTeXプログラムの設定\] のプログラムの

- LaTeX
- PDFLaTeX

の <strong>exeファイル名の値を削除</strong>します．

間違って LaTeX, PDFLaTeX を使用しても，警告メッセージが表示されるだけになり，Runtime Error! を回避できます．

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　<span style="color:Black;"><strong>WinShell</strong></span>　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

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

の LaTeXを先に実行 と PDFLaTeXを先に実行 と DVIPSを先に実行 のチェックをはずします．<br>
LaTeX と PDFLaTeX 以外のプログラムは Runtime Error! が発生しないので LaTeX と PDFLaTeX のプログラムを使用しなければ，エラーにならずに使用できます．<br>

### LaTeX → exeファイル名の値を削除する {#neba460c}

<strong>exeファイル名の値を削除</strong>します．<br>

コマンドラインの値は削除してもしなくてもかまいません．<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">LaTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　<span style="color:black;background-color:yellow;"><strong>exeファイル名 ← exeファイル名の値を削除する</strong></span><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### PDFLaTeX → exeファイル名の値を削除する {#y3e5092f}

<strong>exeファイル名の値を削除</strong>します．<br>

コマンドラインの値は削除してもしなくてもかまいません．<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　<span style="color:black;background-color:yellow;"><strong>exeファイル名 ← exeファイル名の値を削除する</strong></span><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFLaTeX　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### BibTeX {#rac1047d}

LaTeXを先に実行 と PDFLaTeXを先に実行 のチェックを外します．<br>

#### Latexmk-pdfupLaTeX の場合 {#kf0c5dfa}

W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>
以下の設定は [Ruby](/Ruby/) を使用しているので [RubyInstaller for Windows](http://rubyinstaller.org/) も必要です．<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>BibTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">BibTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>rundll32.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>shell32,ShellExec_RunDLL cmd /c ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -kanji=utf8 -no-guess-input-enc -synctex=1 '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/mendex '+0x25.chr+'O'+' -U -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvipdf=q/dvipdfmx '+0x25.chr+'O'+' -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -norc -gg -pdfdvi '+'%s.tex';system(cmd)"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F6 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### DVIView {#qe7d598d}

LaTeXを先に実行 のチェックを外します．<br>

#### SumatraPDF の場合 {#tbcf6fd8}

■ SumatraPDF を前面に表示したい場合<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVIView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVIView 　　　　　　　　　　　　</span><br>
　　exeファイル名 　<ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe"</ins> (64-bit 版 Windows の場合) <ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins> (32-bit 版 Windows の場合)<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-reuse-instance "%s.pdf" -forward-search "%c.tex" %l</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F7 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

■ SumatraPDF を前面に表示したくない場合<br>
[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVIView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVIView 　　　　　　　　　　　　</span><br>
　　exeファイル名 　<ins>fwdsumatrapdf.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>"%s.pdf" "%c.tex" %l</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F7 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### DVI -> PS {#ce93346a}

LaTeXを先に実行 のチェックを外します．<br>

#### Latexmk-pdfupLaTeX2 の場合 {#c693c76d}

W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>
以下の設定は [Ruby](/Ruby/) を使用しているので [RubyInstaller for Windows](http://rubyinstaller.org/) も必要です．<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVI -> PS</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>rundll32.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVI -> PS　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>shell32,ShellExec_RunDLL cmd /c ruby -e "cmd='latexmk -e '+0x22.chr+'$latex=q/uplatex '+0x25.chr+'O'+' -kanji=utf8 -no-guess-input-enc -synctex=1 '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$bibtex=q/upbibtex '+0x25.chr+'O'+' '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$biber=q/biber '+0x25.chr+'O'+' --bblencoding=utf8 -u -U --output_safechars '+0x25.chr+'B'+'/'+0x22.chr+' -e '+0x22.chr+'$makeindex=q/mendex '+0x25.chr+'O'+' -U -o '+0x25.chr+'D'+' '+0x25.chr+'S'+'/'+0x22.chr+' -e '+0x22.chr+'$dvips=q/dvips '+0x25.chr+'O'+' -z -f '+0x25.chr+'S'+' '+0x7c.chr+' convbkmk -u '+0x3e.chr+' '+0x25.chr+'D'+'/'+0x22.chr+' -e '+0x22.chr+'$ps2pdf=q/ps2pdf.bat '+0x25.chr+'O'+' '+0x25.chr+'S'+' '+0x25.chr+'D'+'/'+0x22.chr+' -norc -gg -pdfps '+'%s.tex';system(cmd)"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F8 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### GSView {#v5b366e3}

LaTeXを先に実行 と DVIPSを先に実行 のチェックを外します．<br>

#### SumatraPDF の場合 {#ea77c809}

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>GSView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe"</ins> (64-bit 版 Windows の場合) <ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins> (32-bit 版 Windows の場合)<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">GSView　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-reuse-instance "%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:　　　　引数:<br>
　　F9 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### PDFView {#x6d29bc8}

PDFLaTeXを先に実行 のチェックを外します．<br>
Adobe Reader の Windows 版は PDF ファイルをロックしてしまうので，PDF ファイルのプレビューには向いていません．<br>
PDF ファイルのプレビューには [SumatraPDF](/SumatraPDF/) を使用して，最終確認や印刷をする場合に Adobe Reader を使用することをおすすめします．<br>

#### SumatraPDF の場合 {#a003ae3e}

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe"</ins> (64-bit 版 Windows の場合) <ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins> (32-bit 版 Windows の場合)<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-reuse-instance -inverse-search "\\"C:\Program Files (x86)\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins> (64-bit 版 Windows の場合) <ins>-reuse-instance -inverse-search "\\"C:\Program Files\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins> (32-bit 版 Windows の場合)<br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

## ユーザ指定プログラム {#b923de85}

\[ユーザ指定プログラム\] は“DOS”のチェックの ON, OFF を指定できます．<br>
“DOS”のチェック (☑) は，exe ファイルが DOS (コンソール) アプリケーションで，出力先をコンソールではなく WinShell の Output Window に変更することを意味しています．<br>
チェックを付けていないと，コマンド プロンプトが出るのは正しい動作です．<br>
従って<br>

- Window アプリケーションの場合
- コンソールアプリケーションでコンソールに出力したい場合

は“DOS”のチェックをはずしてください．<br>

LaTeXを先に実行 と PDFLaTeXを先に実行 と DVIPSを先に実行 のチェックを外します．<br>

## SumatraPDF との連携 {#r950d1ac}

### forward and inverse search {#haf1936b}

PDFView を [SumatraPDF](/SumatraPDF/) に変更します．

WinShell は PDFView に SumatraPDF を指定すれば inverse search の設定を自動的に行い forward search の設定をしなくても PDFView を実行すれば自動的に forward search をしてくれます．

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe"</ins> (64-bit 版 Windows の場合) <ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins> (32-bit 版 Windows の場合)<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-reuse-instance -inverse-search "\\"C:\Program Files (x86)\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins> (64-bit 版 Windows の場合) <ins>-reuse-instance -inverse-search "\\"C:\Program Files\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins> (32-bit 版 Windows の場合)<br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### forward search {#ne2bfee1}

#### SumatraPDF を前面に表示したい場合 {#l68af5c0}

DVIView を [SumatraPDF](/SumatraPDF/) に変更します．

コマンドラインに

```
-reuse-instance "%s.pdf" -forward-search "%c.tex" %l
```

を設定します．

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVIView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVIView 　　　　　　　　　　　　</span><br>
　　exeファイル名 　<ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe"</ins> (64-bit 版 Windows の場合) <ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins> (32-bit 版 Windows の場合)<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-reuse-instance "%s.pdf" -forward-search "%c.tex" %l</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F7 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### SumatraPDF を前面に表示したくない場合 {#ufb9a660}

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVIView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVIView 　　　　　　　　　　　　</span><br>
　　exeファイル名 　<ins>fwdsumatrapdf.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>"%s.pdf" "%c.tex" %l</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F7 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### inverse search {#jda19218}

inverse search は SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に

- 64-bit 版 Windows の場合

    ```
    "C:\Program Files (x86)\WinShell\WinShell.exe" -c "%f" -l %l
    ```

- 32-bit 版 Windows の場合

    ```
    "C:\Program Files\WinShell\WinShell.exe" -c "%f" -l %l
    ```

です．

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## 使い方 {#n7874abc}

### TeX ファイルの作成 {#n92b6cac}

すでに TeX ファイルがあれば WinShell にドラッグ &amp; ドロップしてファイルを開きます．<br>
TeX ファイルが無ければメニューの \[ファイル(F)\]-\[新規\]-\[TeX文書\] で新規作成できます．<br>
ツールバーの \[新規TeX文書\] をクリックして作成することもできます．<br>
プロジェクトウィンドウの右側にエディタウィンドウが開きます．<br>
このエディタウィンドウに LaTeX の文書を打ち込みます．<br>

打ち込み終わったら，［保存］ボタンをクリックします．<br>
新規作成した文書の場合はファイル名を聞いてきますので，適当に答えます（例えば “test.tex”）．<br>

### PDF ファイルの出力・表示・印刷 {#ndd7120c}

\[主なTeXプログラムの設定\] の \[BibTeX\] と \[DVI -> PS\] の項目に PDF ファイルを出力するための設定をします．<br>
設定は以下を参照して設定します．<br>

- [WinShell#BibTeX#Latexmk-pdfupLaTeX の場合](/WinShell/#kf0c5dfa)
- [WinShell#DVI -> PS#Latexmk-pdfupLaTeX2 の場合](/WinShell/#c693c76d)

\[BibTeX\] に設定したプログラム (Latexmk-pdfupLaTeX) を実行する場合は \[BibTeX\] ボタンをクリックまたは F6 キーをタイプします．<br>
\[DVI -> PS\] に設定したプログラム (Latexmk-pdfupLaTeX2) を実行する場合は \[DVI -> PS\] ボタンをクリックまたは F8 キーをタイプします．<br> <!-- コマンド プロンプトまたは下の出力ウィンドウに処理状況が表示されます．~ -->
コマンド プロンプトに処理状況が表示されます．<br>

<!-- >もしユーザ自身が作成したファイルとは異なるファイルが処理されているようなら， -->
<!-- ユーザの意図しない「プロジェクト」が用いられていないかどうかを -->
<!-- 調べてみてください（「プロジェクト」機能については -->
<!-- 後述の「プロジェクト機能を使おう」を参照してください）。~ -->
<!-- WinShell のインストール直後などではデモ用のプロジェクトが用意されていることがあるので， -->
<!-- 必要ならそれを解除してください (See [[qa:48695]])。~ -->

エラーがなければ PDF ファイルが出力されます．<br>

PDF ファイルを表示したい場合は \[主なTeXプログラムの設定\] の \[DVIView\] と \[GSView\] と \[PDFView\] の項目に PDF ファイルを表示するための設定をします．<br>
設定は以下を参照して設定します．<br>

- [WinShell#DVIView#SumatraPDF の場合](/WinShell/#tbcf6fd8)
- [WinShell#GSView#SumatraPDF の場合](/WinShell/#ea77c809)
- [WinShell#PDFView#SumatraPDF の場合](/WinShell/#a003ae3e)

\[DVIView\] に設定したプログラム (SumatraPDF) を実行する場合は \[DVIView\] ボタンをクリックまたは F7 キーをタイプします．<br>
\[GSView\] に設定したプログラム (SumatraPDF) を実行する場合は \[GSView\] ボタンをクリックまたは F9 キーをタイプします．<br>
\[PDFView\] に設定したプログラム (SumatraPDF) を実行する場合は \[PDFView\] ボタンをクリックまたは F11 キーをタイプします．<br>

エラーがなければ PDF ファイルが表示されます．<br>

PDF ファイルを印刷する場合は [Adobe Reader](</Adobe Reader/>) から PDF ファイルを開いて印刷します．<br>
Adobe Reader は SumatraPDF のメニューの \[ファイル(F)\]-\[Adobe Reader で開く(A)\] から起動できます．<br>

### 補完機能 {#c8bc5b6d}

Ctrl + Space でキーワードの補完ができます．<br>

- [Winshell 補完して！](http://infotech776.blog.fc2.com/blog-entry-24.html)
- [winshellの補完機能について](http://diondaikun.hatenablog.com/entry/20121226/1356452475)

### コメントイン・コメントアウト機能 {#w8b8733a}

範囲選択後 ［編集］ → ［注釈による無効化/無効化の解除］ （言語が English なら
\[Edit\] → \[Un/Comment\]）と選ぶと，選択した範囲の行頭に “%” が付けられたり
外されたりします。<br>
ショートカットキー Ctrl + K で同様のことができます。

### プロジェクト機能を使おう {#p6a2f200}

WinShell にはプロジェクト機能があります。長めの TeX 文書を書く場合に
非常に役立つと思いますのでやり方を紹介しておきます。<br>

まず，TeX ファイルはあらかじめコンパイルしておきます。<br>
メニューバーより ［プロジェクト］ → ［新規プロジェクト］ で
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

WinShell には アップデート機能があります．<br>

#### WinShell の更新 {#x8afdcfc}

WinShell を起動し，メニューから \[ヘルプ(H)\] → \[アップデートの確認(C)...\] をクリックします．

「WinShellの更新」 が表示され，WinShell の使用中のバージョン・最新のリリースバージョン・最新のベータバージョンが表示されます．

***

<span style="color:#ACDEFE;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>WinShellの更新</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[<span style="color:White;"><strong>×</strong></span>\]<ins></span></ins></span><br>

　使用中のバージョン: 　　　　3.3.2.5<br>
　最新のリリースバージョン:　3.3.2.6　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 更新を適応 \]</span><br>
　最新のベータバージョン:　　none　　　　　　<span style="color:#888888;background-color:#EEEEEE;">\[ 更新を適応 \]</span><br>
　<span style="color:Black;background-color:#E8E8E8;">\[　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\]</span><br>
　残り時間:<br>
　転送状況:<br>
　☑アップデートを自動的に確認　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　中止　　 \]</span>

***

## 関連リンク {#i06febca}

- [http://chiebukuro.search.yahoo.co.jp/search?sort=16&p=WinShell](http://chiebukuro.search.yahoo.co.jp/search?sort=16&p=WinShell)
