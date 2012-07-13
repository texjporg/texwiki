---
title: "TeXlipse/設定/OS X"
url: "/TeXlipse/設定/OS X/"
date: 2012-07-13T02:16:32Z
pukiwiki: "TeXlipse/設定/OS X"
---

# TeXlipse/設定/OS X

[TeXlipse](/TeXlipse/) > [設定](</TeXlipse/設定/>) > OS X

## ビルダー設定 (OS X) {#vcf0d397}

動作未確認です．<br>
OS X の MacTeX, TeX Live の場合 platex は eptex にリンクされています．<br>
設定で \[Browse...\] を使用するとリンク先の eptex に変更されてしまい LaTeX 文書がタイプセットできなくなるので \[Browse...\] は使用せずに直接パスを指定してください．<br>

- texlipse日本語コンパイルできない（mac）→ 解決できました ([qa:56663](https://okumuralab.org/~okumura/texfaq/qa/56663.html), [qa:56664](https://okumuralab.org/~okumura/texfaq/qa/56664.html), [qa:56665](https://okumuralab.org/~okumura/texfaq/qa/56665.html), [qa:56666](https://okumuralab.org/~okumura/texfaq/qa/56666.html))

dvipdfmx で EPS ファイルがうまく扱えない場合は Ghostscript に PATH が通っているか確認してください．<br>

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Latex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

■ platex の場合<br>
<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Latex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/platex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .dvi<br>

<br>

　　　Program file ok

***

■ uplatex の場合<br>
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

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the LuaLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/lualatex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Bibtex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

■ pbibtex の場合<br>
<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/pbibtex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

■ upbibtex の場合<br>
<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/upbibtex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

■ bibtexu の場合<br>
<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/bibtexu</ins><br>
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
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .bcf 　　　出力フォーマット： .bbl<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　<strong>Edit builder program</strong>　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Makeindex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/texbin/mendex</ins><br>
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
　　 引数： 　　　　　　　　　　　<ins>-f ptex-ipaex.map "&#x25;input"</ins><br>
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
　　 Program file： 　　　　　　　<ins>/usr/texbin/mendex</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input" -s nomencl.ist -o "%output"</ins><br>
　　　Input format： .nlo 　　　出力フォーマット： .nls<br>

<br>

　　　Program file ok

***

## ビューアー設定 (OS X) {#dddd18cb}

動作未確認です．<br>

### PDF ファイル ビューアー {#x7261881}

#### [Pdf4Eclipse](http://borisvl.github.com/Pdf4Eclipse/) {#c7007b14}

[Pdf4Eclipse](</TeXlipse/設定/Windows/#o62b47a3>) を参照．

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
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/open</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-a TeXworks.app "&#x25;file"</ins><br>

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

#### Skim {#y5f135de}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　<strong>新規ビューアー構成の追加</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Skim</ins><br>
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

### PS ファイル ビューアー {#w5db2ee5}

#### gv {#b8a4034d}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　gv ()　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　<strong>Modify existing viewer configuration</strong>　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>gv</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/local/bin/gv</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>--watch "&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[ps 　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

### DVI ファイル ビューアー {#m381260c}

<!-- ***pxdvi [#iae2458d] -->
<!--  -->
<!-- - --  -->
<!-- &color(Black,#473EBE){　&color(Black,#DEDEEF){　&color(Black,#DAEAFF){[　　　　　新規(W)...　　　　　]};　};　};&br; -->
<!-- - --  -->
<!-- &color(Black,#CCCCCC){%%%　&color(#DD0000,#CCCCCC){●}; &color(#DDDDDD,#CCCCCC){●}; &color(#DDDDDD,#CCCCCC){●};　　　　　　　　　　　　　　　　　　　　　''新規ビューアー構成の追加''　　　　　　　　　　　　　　　　　　　　　　　　　　%%%};&br; -->
<!-- 　　 ビューアーを構成します。&br; -->
<!-- 　　 ビューアー名：　　　　　　　　　　　　　　　　%%%pxdvi%%%&br; -->
<!-- 　　 ビューアー・コマンド：　　　　　　　　　　　　 %%%/usr/texbin/pxdvi%%%&br; -->
<!-- 　　 ビューアー引数：　　　　　　　　　　　　　　 %%%-nofork -watchfile 1 -editor "echo &#x25;f:&#x25;l" "&#x25;file" -sourceposition "&#x25;line &#x25;texfile"%%%&br; -->
<!-- &br; -->
<!-- &br; -->
<!-- &br; -->
<!-- &br; -->
<!-- &br; -->
<!-- &br; -->
<!-- &br; -->
<!-- 　　 ビューアー入力ファイル・フォーマット：　 &color(Black,#EEEEEE){[dvi　▼]};&br; -->
<!-- 　　 逆検索サポート：　　　　　　　　　　　　　　&color(Black,#EEEEEE){[ビューアーのコンソールへ "file:行番号" を出力　　▼]};&br; -->
<!-- 　　 ☑ ビューアーでフォーマット済み検索をサポート&br; -->
<!-- &br; -->
<!-- 　　　File ok. -->
<!-- - --  -->

#### pxdvi {#u2125d3e}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　xdvi ()　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　<strong>Modify existing viewer configuration</strong>　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>xdvi</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/texbin/pxdvi</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-watchfile 1 "&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[dvi　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

#### PictPrinter {#bd7c88b1}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　<strong>新規ビューアー構成の追加</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>PictPrinter</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/open</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-a PictPrinter.app "&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[dvi　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

#### Mxdvi {#efe9f4b4}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　<strong>新規ビューアー構成の追加</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Mxdvi</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/open</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-a Mxdvi.app "&#x25;file"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[dvi　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

## pxdvi との連携 (非推奨) {#gd6df302}

引数に -src-specials を追加します．

### forward and inverse search {#ie9c17fd}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　xdvi (/usr/texbin/pxdvi)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　<strong>Modify existing viewer configuration</strong>　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>xdvi</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/texbin/pxdvi</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-nofork -watchfile 1 -editor "echo &#x25;f:&#x25;l" "&#x25;file" -sourceposition "&#x25;line &#x25;texfile"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[dvi　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ビューアーのコンソールへ "file:行番号" を出力　　▼\]</span><br>
　　 ☑ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***
