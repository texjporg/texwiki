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

#### platex の場合 (コマンド プロンプトを表示したい場合) {#h6590942}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">LaTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>rundll32.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>shell32,ShellExec_RunDLL cmd /c powershell.exe -Command "&amp; {$s = """%s"""; platex -no-guess-input-enc -kanji=sjis -jobname $s $s}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### platex の場合 (コマンド プロンプトを表示したくない場合) {#tdad26dc}

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
　　コマンドライン 　<ins>-Command "&amp; {$s = """%s"""; platex -no-guess-input-enc -kanji=sjis -interaction=nonstopmode -jobname $s $s}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### BibTeX {#tf3b5c49}

#### pbibtex の場合 (コマンド プロンプトを表示したい場合) {#e809345f}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

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
　　コマンドライン 　<ins>shell32,ShellExec_RunDLL cmd /c pbibtex -kanji=sjis "%s"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F6 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### pbibtex の場合 (コマンド プロンプトを表示したくない場合) {#s8210602}

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
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F6 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### DVIView {#af16332e}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVIView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVIView 　　　　　　　　　　　　</span><br>
　　exeファイル名 　<ins>C:\texlive\2013\tlpkg\dviout\dviout.exe</ins> または <ins>C:\w32tex\dviout\dviout.exe</ins><br>
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

### DVI -> PS {#b419cdf2}

#### platex + dvips の場合 (コマンド プロンプトを表示したい場合) {#tff478d1}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

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
　　コマンドライン 　<ins>shell32,ShellExec_RunDLL cmd /c powershell.exe -Command "&amp; {$r = Write-Output "%s"; $s = """$r"""; $d = """$r.dvi"""; $p = """$r.ps"""; platex -no-guess-input-enc -kanji=sjis -jobname $s $s; if($?) {dvips -Ppdf -o $p $d}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F8 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### platex + dvips の場合 (コマンド プロンプトを表示したくない場合) {#fc5c94d9}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVI -> PS</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVI -> PS　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Command "&amp; {$r = Write-Output "%s"; $s = """$r"""; $d = """$r.dvi"""; $p = """$r.ps"""; platex -no-guess-input-enc -kanji=sjis -interaction=nonstopmode -jobname $s $s; if($?) {dvips -Ppdf -o $p $d}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F8 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### GSView {#o546cec0}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>GSView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins> (32bit 版 Windows の場合) <ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe"</ins> (64bit 版 Windows の場合)<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">GSView　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-reuse-instance "%s.ps"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:　　　　引数:<br>
　　F9 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### PDFLaTeX {#be6ae006}

#### platex + dvipdfmx の場合 (コマンド プロンプトを表示したい場合) {#rad3a657}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>rundll32.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFLaTeX　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>shell32,ShellExec_RunDLL cmd /c powershell.exe -Command "&amp; {$s = """%s"""; platex -no-guess-input-enc -kanji=sjis -synctex=1 -jobname $s $s; if($?) {dvipdfmx $s}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### platex + dvipdfmx の場合 (コマンド プロンプトを表示したくない場合) {#b63425e9}

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
　　コマンドライン 　<ins>-Command "&amp; {$s = """%s""";platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s; if($?) {dvipdfmx $s}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### platex + dvips + ps2pdf の場合 (コマンド プロンプトを表示したい場合) {#vf382e2f}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>rundll32.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFLaTeX　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>shell32,ShellExec_RunDLL cmd /c powershell.exe -Command "&amp; {$r = Write-Output "%s"; $s = """$r"""; $d = """$r.dvi"""; $p = """$r.ps"""; platex -no-guess-input-enc -kanji=sjis -synctex=1 -jobname $s $s; if($?) {dvips -Ppdf -o $p $d}; if($?) {ps2pdf.bat $p}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### platex + dvips + ps2pdf の場合 (コマンド プロンプトを表示したくない場合) {#ga6cb102}

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
　　コマンドライン 　<ins>-Command "&amp; {$r = Write-Output "%s"; $s = """$r"""; $d = """$r.dvi"""; $p = """$r.ps"""; platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s; if($?) {dvips -Ppdf -o $p $d}; if($?) {ps2pdf.bat $p}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

### PDFView {#j67d12bb}

SyncTeX を使用して SumatraPDF で forward search を行う場合や Adobe Reader を使用する場合は PDFLaTeXを先に実行 のチェックは外しておいた方が良いでしょう．<br>
Adobe Reader の Windows 版は PDF ファイルをロックしてしまうので，PDF ファイルのプレビューには向いていません．<br>
PDF ファイルのプレビューには [TeXworks](/TeXworks/) や [SumatraPDF](/SumatraPDF/) を使用して，最終確認や印刷をする場合に Adobe Reader を使用することをおすすめします．<br>

#### TeXworks の場合 {#wb930dec}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>C:\texlive\2013\tlpkg\texworks\texworks.exe</ins> または <ins>C:\w32tex\share\texworks\TeXworks.exe</ins><br>
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
　　exeファイル名 　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins> (32bit 版 Windows の場合) <ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe"</ins> (64bit 版 Windows の場合)<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-reuse-instance -inverse-search "\\"C:\Program Files\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins> (32bit 版 Windows の場合) <ins>-reuse-instance -inverse-search "\\"C:\Program Files (x86)\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins> (64bit 版 Windows の場合)<br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Mozilla Firefox (pdf.js) の場合 {#s45dee2d}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Mozilla Firefox\firefox.exe"</ins> (32bit 版 Windows の場合) <ins>"C:\Program Files (x86)\Mozilla Firefox\firefox.exe"</ins> (64bit 版 Windows の場合)<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-new-window "%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Chrome PDF Viewer の場合 {#l95907df}

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
　　コマンドライン 　<ins>-Command "&amp; {$s = Write-Output %s.pdf;$p = \[System.IO.Path\]::GetFullPath($s);cmd /c start chrome --new-window $p}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### Adobe Reader の場合 {#xdafa678}

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

## ユーザ指定プログラム (エンコーディングが ShiftJIS の場合) {#c7714f80}

“DOS”のチェック (☑) は，exe ファイルが DOS (コンソール) アプリケーションで，出力先をコンソールではなく WinShell の Output Window に変更することを意味しています．

チェックを付けていないと，エラーの場合にコマンド プロンプトが出るのは正しい動作です．

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
　　コマンドライン 　<ins>-Command "&amp; {$s = """%s"""; platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s; if($?) {dvipdfmx $s}}"</ins><br>
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
　　コマンドライン 　<ins>-Command "&amp; {$r = Write-Output "%s"; $s = """$r"""; $d = """$r.dvi"""; $p = """$r.ps"""; platex -no-guess-input-enc -kanji=sjis -synctex=1 -interaction=nonstopmode -jobname $s $s; if($?) {dvips -Ppdf -o $p $d}; if($?) {ps2pdf.bat $p}}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F2 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### pdfLaTeX {#zb4a18d5}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 3　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
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
　　+ F3 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

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
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 4　　　　　　　　　　　　　　</span><br>
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
　　+ F4 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***
