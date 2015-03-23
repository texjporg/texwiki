---
title: "TeXlipse/設定/OS X"
url: "/TeXlipse/設定/OS X/"
date: 2012-07-13T02:16:32Z
pukiwiki: "TeXlipse/設定/OS X"
---

# TeXlipse/設定/OS X

[TeXlipse](/TeXlipse/) > [設定](</TeXlipse/設定/>) > OS X

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## ビルダー設定 <a id="builder"></a> {#vcf0d397}

動作未確認です．<br>
OS X の MacTeX, TeX Live の場合 uplatex は euptex にリンクされています．<br>
設定で \[Browse...\] を使用するとリンク先の euptex に変更されてしまい LaTeX 文書がタイプセットできなくなるので \[Browse...\] は使用せずに直接パスを指定してください．<br>

<!-- -texlipse日本語コンパイルできない（mac）→ 解決できました ([[qa:56663]], [[qa:56664]], [[qa:56665]], [[qa:56666]]) -->

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Latex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Latex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/uplatex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .dvi<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　PdfLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the PdfLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/pdflatex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　XeLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the XeLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/xelatex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　LuaLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

■ lualatex の場合<br>
<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the LuaLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/lualatex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

■ luajitlatex の場合<br>
<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the LuaLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/luajitlatex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Bibtex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/upbibtex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Biber (BibLaTeX)　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Biber (BibLaTeX). If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/biber</ins><br>
　　 引数： 　　　　　　　　　　　<ins>--bblencoding=utf8 -u -U --output_safechar "&#x25;input"</ins><br>
　　　Input format： .bcf 　　　出力フォーマット： .bbl<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Makeindex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/upmendex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-s "%style" "%input"</ins><br>
　　　Input format： .idx 　　　出力フォーマット： .ind<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Dvips program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Dvips program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/dvips</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-Ppdf -o "%output" "%input"</ins><br>
　　　Input format： .dvi 　　　出力フォーマット： .ps<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Dvipdf program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Dvipdf program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/dvipdfmx</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .dvi 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Ps2pdf program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Ps2pdf program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/local/bin/ps2pdf</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .ps　　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program (nomencl)　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Makeindex program (nomencl). If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/upmendex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input" -s nomencl.ist -o "%output"</ins><br>
　　　Input format： .nlo 　　　出力フォーマット： .nls<br>

<br>

　　　Program file ok

***

## ビューアー設定 <a id="viewer"></a> {#dddd18cb}

動作未確認です．<br>

### PDF ファイル ビューアー {#x7261881}

#### [Pdf4Eclipse](http://borisvl.github.com/Pdf4Eclipse/) {#c7007b14}

[Pdf4Eclipse](</TeXlipse/設定/Windows/#o62b47a3>) を参照．

#### displayline {#y5f135de}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　<strong>新規ビューアー構成の追加</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>displayline</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/Applications/Skim.app/Contents/SharedSupport/displayline</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>&#x25;line "&#x25;file" "&#x25;texfile"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ビューアー実行外部コマンド　　　　　　　　　　　▼\]</span><br>
　　 ☑ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

#### [Skim](/Skim/) {#xd1901aa}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　<strong>新規ビューアー構成の追加</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Skim</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/open</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-a Skim.app "&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ビューアー実行外部コマンド　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

#### Preview {#uf79405f}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　<strong>新規ビューアー構成の追加</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Preview</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/open</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-a Preview.app "&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

#### [TeXShop](/TeXShop/) {#b3851737}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　<strong>新規ビューアー構成の追加</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>TeXShop</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/open</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-a TeXShop.app "&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

#### [TeXworks](/TeXworks/) {#wbc4b701}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　<strong>新規ビューアー構成の追加</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>TeXworks</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/Applications/TeXworks.app/Contents/MacOS/TeXworks</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>"&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

#### [TeXstudio](/TeXstudio/) {#qd817f78}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　<strong>新規ビューアー構成の追加</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>TeXstudio</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/Applications/texstudio.app/Contents/MacOS/texstudio</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>--pdf-viewer-only "&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

#### [Mozilla Firefox](</Mozilla Firefox/>) (PDF.js) {#b755b1a1}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　<strong>新規ビューアー構成の追加</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Mozilla Firefox</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/open</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-a Firefox.app "&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

#### [Adobe Reader](</Adobe Reader/>) {#d960177c}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　acroread ()　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　<strong>Modify existing viewer configuration</strong>　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>acroread</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/open</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-a "Adobe Reader.app" "&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***
