---
title: "WinShell/設定/ShiftJIS"
url: "/WinShell/設定/ShiftJIS/"
date: 2012-07-13T21:45:33Z
pukiwiki: "WinShell/設定/ShiftJIS"
---

# WinShell/設定/ShiftJIS

[WinShell](/WinShell/) > 設定 > ShiftJIS

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## 主なTeXプログラムの設定 (エンコーディングが ShiftJIS の場合) {#g207ffab}

### LaTeX {#v667ffa2}

#### Windows PowerShell の場合 (-jobname を使用する場合) {#tdad26dc}

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

#### バッチファイルの場合 (-jobname を使用する場合) {#cacf5771}

バッチファイルを作成します．

***

- C:\w32tex\bin\platex-nonstopmode-sjis.bat

***

```
@echo off
platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname="%~n1" %1
```

***

- &#x2d;jobname を使用すると 表.tex, 予定.tex といったファイル名の場合でもうまく処理できます．
- exeファイル名を platex-nonstopmode-sjis.bat に変更します．
- コマンドラインを "%s.tex" に変更します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">LaTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>platex-nonstopmode-sjis.bat</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>"%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### platex の場合 (-jobname を使用しない場合) {#if180e37}

- 表.tex, 予定.tex といったファイル名の場合はうまく処理できません．
- exeファイル名を platex.exe に設定します． (うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\platex.exe)
- さらに，コマンドラインも -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode "%s.tex" に変更します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">LaTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>platex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### BibTeX {#tf3b5c49}

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

### DVIView {#af16332e}

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

### DVI -> PS {#b419cdf2}

<em>2010/5/6 に W32TeX の "dvipsk.exe" は "dvips.exe" に統合されました．それ以前の W32TeX をインストールされている方は，DVI -> PS の設定の部分を "dvipsk.exe" にしてください． ([qa:54955](https://okumuralab.org/~okumura/texfaq/qa/54955.html))</em>

- exeファイル名を dvips.exe (うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\dvips.exe)
- コマンドラインを -Ppdf -o "%s.ps" "%s.dvi"

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
　　コマンドライン 　<ins>-Ppdf -o "%s.ps" "%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F8 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### GSView {#o546cec0}

#### SumatraPDF の場合 {#zc302e04}

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

#### GSview の場合 {#x54b0852}

- exeファイル名を "C:\Program Files\Ghostgum\gsview\gsview32.exe" (64bit版Windows の場合は "C:\Program Files (x86)\Ghostgum\gsview\gsview32.exe") (\[参照(B)...\] で gsview32.exe を検索)
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

### PDFLaTeX {#be6ae006}

#### Windows PowerShell の場合 {#b63425e9}

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

#### バッチファイルの場合 {#i5ac5d34}

バッチファイルを作成します．

***

- C:\w32tex\bin\pdfplatex-nonstopmode-sjis.bat

***

```
@echo off
platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname="%~n1" %1 && ^
dvipdfmx "%~n1"
```

***

- exeファイル名を pdfplatex-nonstopmode-sjis.bat に変更します．
- コマンドラインを "%s.tex" に変更します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>pdfplatex-nonstopmode-sjis.bat</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFLaTeX　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>"%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### dvipdfmx の場合 {#k2405879}

- exeファイル名を dvipdfmx.exe に変更します．(うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\dvipdfmx.exe)
- さらに，コマンドラインも "%s.dvi" に変更します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>dvipdfmx.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFLaTeX　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>"%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### PDFView {#j67d12bb}

- [TeXworks](/TeXworks/) の場合，[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．exeファイル名を C:\w32tex\share\texworks\TeXworks.exe (\[参照(B)...\] で TeXworks.exe を検索) とします．
- [SumatraPDF](/SumatraPDF/) の場合，exeファイル名を "C:\Program Files\SumatraPDF\SumatraPDF.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe") (\[参照(B)...\] で SumatraPDF.exe を検索) とします．
- Chrome PDF Viewer, Windows 7/Vista の場合，exeファイル名を powershell.exe とし，コマンドラインを -Command "&amp; {$s = echo %s.pdf;$p = \[System.IO.Path\]::GetFullPath($s);rundll32 shell32,ShellExec_RunDLL "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe" --new-window $p}" とします．
- [Adobe Reader](</Adobe Reader/>) XI の場合，exeファイル名を rundll32.exe とし，コマンドラインを shell32,ShellExec_RunDLL "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf" (64bit版Windowsの場合は shell32,ShellExec_RunDLL "C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf") とします．
- [Adobe Reader](</Adobe Reader/>) X，WinShell 3.3.2.3 以降のバージョンの場合，exeファイル名を "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe") (\[参照(B)...\] で AcroRd32.exe を検索) とします．
- [Adobe Reader](</Adobe Reader/>) X，WinShell 3.3.2.3 よりも前のバージョンの場合，exeファイル名を rundll32.exe とし，コマンドラインを shell32,ShellExec_RunDLL "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf" (64bit版Windowsの場合は shell32,ShellExec_RunDLL "C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf") とします．

PDFLaTeXを先に実行 のチェックは外しておいた方が良いでしょう．

#### TeXworks の場合 {#wb930dec}

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

#### SumatraPDF の場合 {#kae177af}

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

#### Chrome PDF Viewer, Windows 7/Vista の場合 {#l95907df}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-Command "&amp; {$s = echo %s.pdf;$p = \[System.IO.Path\]::GetFullPath($s);rundll32 shell32,ShellExec_RunDLL "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe" --new-window $p}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Adobe Reader XI の場合 {#vd5193b7}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>rundll32.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>shell32,ShellExec_RunDLL "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf"</ins> または <ins>shell32,ShellExec_RunDLL "C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe" "%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Adobe Reader X，WinShell 3.3.2.3 以降のバージョンの場合 {#h749d42d}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe"</ins> または <ins>"C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe"</ins><br>
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

#### Adobe Reader X，WinShell 3.3.2.3 よりも前のバージョンの場合 {#g02437e9}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>rundll32.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>shell32,ShellExec_RunDLL "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf"</ins> または <ins>shell32,ShellExec_RunDLL "C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

## ユーザ指定プログラム (エンコーディングが ShiftJIS の場合) {#c7714f80}

“DOS”のチェック (☑) は，exe ファイルが DOS (コンソール) アプリケーションで，出力先をコンソールではなく WinShell の Output Window に変更することを意味しています．

チェックを付けていないと，エラーの場合にコマンドプロンプトが出るのは正しい動作です．

従って

- Window アプリケーションの場合
- コンソールアプリケーションでコンソールに出力したい場合

は“DOS”のチェックをはずしてください．

### pdfpLaTeX {#y256879c}

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

### pdfpLaTeX2 {#s0122311}

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
　　コマンドライン 　<ins>-Command "&amp; {$r = echo "%s";$s = echo """$r""";$d = echo """$r.dvi""";$p = echo """$r.ps""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s;if($?){dvips -Ppdf -o $p $d};if($?){ps2pdf.bat $p}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F2 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### Mendex {#i68949e8}

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
