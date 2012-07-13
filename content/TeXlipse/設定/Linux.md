---
title: "TeXlipse/設定/Linux"
url: "/TeXlipse/設定/Linux/"
date: 2012-07-13T02:18:29Z
pukiwiki: "TeXlipse/設定/Linux"
---

# TeXlipse/設定/Linux

## ビルダー設定 (Linux) {#w3b7087c}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Latex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

■ platex の場合<br>
<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Latex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>platex -synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .dvi<br>

<br>

　　　Program file ok

***

■ uplatex の場合<br>
<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Latex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>uplatex -synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .dvi<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　PdfLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the PdfLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>pdflatex -synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　XeLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the XeLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>xelatex -synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　LuaLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the LuaLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>lualatex -synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Bibtex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

■ pbibtex の場合<br>
<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>pbibtex "&#x25;input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

■ upbibtex の場合<br>
<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>upbibtex "&#x25;input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

■ bibtexu の場合<br>
<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>bibtexu "&#x25;input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Biber (BibLaTeX)　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Biber (BibLaTeX). If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>biber "&#x25;input"</ins><br>
　　　Input format： .bcf 　　　出力フォーマット： .bbl<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Makeindex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>mendex -s "%style" "%input"</ins><br>
　　　Input format： .idx 　　　出力フォーマット： .ind<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Dvips program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Dvips program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>dvips -Ppdf -o "%output" "%input"</ins><br>
　　　Input format： .dvi 　　　出力フォーマット： .ps<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Dvipdf program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Dvipdf program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>dvipdfmx -f ptex-ipaex.map "&#x25;input"</ins><br>
　　　Input format： .dvi 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Ps2pdf program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Ps2pdf program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>ps2pdf "&#x25;input"</ins><br>
　　　Input format： .ps　　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program (nomencl)　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 Setup the Makeindex program (nomencl). If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>/usr/bin/env</ins><br>
　　 引数： 　　　　　　　　　　　<ins>mendex "&#x25;input" -s nomencl.ist -o "%output"</ins><br>
　　　Input format： .nlo 　　　出力フォーマット： .nls<br>

<br>

　　　Program file ok

***

## ビューアー設定 (Linux) {#c2845a3f}

### PDF ファイル ビューアー {#x367d3a8}

#### [Pdf4Eclipse](http://borisvl.github.com/Pdf4Eclipse/) {#p67adb24}

[Pdf4Eclipse](/TeXlipse/#o62b47a3) を参照．

#### [TeXworks](/TeXworks/) {#y2f3d401}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>TeXworks</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/env</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>texworks "&#x25;file"</ins><br>

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

#### [Evince](/Evince/) {#l26d46b1}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

■ evince の場合<br>
<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Evince</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/env</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>evince "&#x25;file"</ins><br>

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

■ fwdevince の場合<br>
[Evince#fwdevince](/Evince/#ie18c015) の fwdevince を使用します．<br>
<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Evince</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/env</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>fwdevince "&#x25;file" &#x25;line "&#x25;texfile"</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☑ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

#### Okular {#w9fed163}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Okular</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/env</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>okular --unique "file:&#x25;file#src:&#x25;line &#x25;fulltexfile"</ins><br>

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

#### PdfViewer {#r591d805}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>PdfViewer</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/env</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>pdfviewer "file:&#x25;file#src:&#x25;line &#x25;texfile"</ins><br>

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

#### zathura {#ubc4a201}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>zathura</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/env</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>zathura "&#x25;file"</ins><br>

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

#### [Adobe Reader](</Adobe Reader/>) {#afa78ea6}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　acroread ()　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Modify existing viewer configuration</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>acroread</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/env</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>acroread "&#x25;file"</ins><br>

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

### PS ファイル ビューアー {#y9dba9fe}

#### gv {#t0a49f13}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　gv ()　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Modify existing viewer configuration</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>gv</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/env</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>gv --watch "&#x25;file"</ins><br>

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

### DVI ファイル ビューアー {#x1e7ae94}

#### pxdvi {#i0cf4c4d}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　xdvi ()　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>Modify existing viewer configuration</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>xdvi</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>/usr/bin/env</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>pxdvi -watchfile 1 "&#x25;file"</ins><br>

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
