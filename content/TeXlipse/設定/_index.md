---
title: "TeXlipse/設定"
url: "/TeXlipse/設定/"
date: 2012-07-12T20:33:29Z
bookCollapseSection: true
pukiwiki: "TeXlipse/設定"
---

# TeXlipse/設定

## LaTeX ファイルのデフォルト・エンコードの設定 {#e388e178}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>設定</strong></span>　　　　　　　　　　　　　　　　　 </ins></span><br>

　　…<br>
　　◢　一般<br>
　　　　　　JStyle<br>
　　　　　　Web ブラウザー<br>
　　　　▷　エディター<br>
　　　　　　キー<br>
　　　　　<span style="color:Black;background-color:#DAEAFF;">　コンテンツ・タイプ　</span><br>
　　　　…<br>
　　…<br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　コンテンツ・タイプ

　各ファイル・タイプに関連づけられたエディターについては、<span style="color:#1188FF;"><ins>'ファイルの関連づけ'</ins></span> を参照してください。<br>
　コンテンツ・タイプ(C)：<br>
　　　　JAR コンテンツ<br>
　　　　Java クラス・ファイル<br>
　　　　Word ドキュメント<br>
　　◢　テキスト<br>
　　　　…<br>
　　　　　<span style="color:Black;background-color:#DAEAFF;">　LaTeX File　</span><br>
　　　　…<br>
　　▷　バイナリー・ファイル<br>

***

デフォルト・エンコード(E)： で，UTF-8 もしくは日本語のエンコード (MS932, EUC-JP, ISO-2022-JP) を指定し，\[　　　　　更新(U)　　　　　\] をクリックします．

## ビルダー設定 (Windows) {#j3f79297}

デフォルトでは英語版のビルド・コマンドが設定されています．

この設定では，e-pTeX が使えないので変更します．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>設定</strong></span>　　　　　　　　　　　　　　　　　 </ins></span><br>

　　…<br>
　　◢　Texlipse<br>
　　　　　　BibSonomy<br>
　　　　▷　BibTeX エディター<br>
　　　　▷　エディター<br>
　　　　▷　スペル・チェッカー<br>
　　　　　　ドキュメント・テンプレート<br>
　　　　▷　ビューアー設定<br>
　　　　▷<span style="color:Black;background-color:#DAEAFF;">　ビルダー設定　</span><br>
　　…<br>

***

### 編集前 {#j7da835a}

W32TeX がインストールされていれば以下のような表示になっているはずです．<br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　ビルダー設定

　　ドキュメントのビルドに使用するプログラム：<br>
　　Latex program　　　(C:\w32tex\bin\latex.exe)<br>
　　PsLatex program　　　()<br>
　　PdfLatex program　　　(C:\w32tex\bin\pdflatex.exe)<br>
　　XeLatex program　　　(C:\w32tex\bin\xelatex.exe)<br>
　　LuaLatex program　　　(C:\w32tex\bin\lualatex.exe)<br>
　　Bibtex program　　　(C:\w32tex\bin\bibtex.exe)<br>
　　Biber (BibLaTeX)　　　(C:\w32tex\bin\biber.exe)<br>
　　Makeindex program　　　(C:\w32tex\bin\makeindex.exe)<br>
　　Dvips program　　　(C:\w32tex\bin\dvips.exe)<br>
　　Dvipdf program　　　(C:\w32tex\bin\dvipdfm.exe)<br>
　　Ps2pdf program　　　()<br>
　　Makeindex program (nomencl)　　　(C:\w32tex\bin\makeindex.exe)<br>
　　Kpsewhich program　　　(C:\w32tex\bin\kpsewhich.exe)<br>

***

これらを \[編集(E)...\] します．<br>
W32TeX はデフォルトでは [ptexenc](</TeX Live/#r2b98f9b>) を用いて自動判別します．<br>
UTF-8, Shift_JIS, ISO-2022-JP, EUC-JP も使用可能です．<br>
自動判別, UTF-8 の場合の編集を記述します．<br>
[TeX Live](</TeX Live/>) などの TeX ディストリビューションを使用される方は，ご自分の環境に合わせて設定してください．<br>
dvipdfmx で EPS ファイルがうまく扱えない場合は Ghostscript に PATH が通っているか確認してください．<br>

### 自動判別 の場合 {#p2e48152}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Latex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Latex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\platex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-guess-input-enc -synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .dvi<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　PdfLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the PdfLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\pdflatex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　XeLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the XeLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\xelatex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　LuaLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the LuaLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\lualatex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Bibtex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\pbibtex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Biber (BibLaTeX)　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Biber (BibLaTeX). If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\biber.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .bcf 　　　出力フォーマット： .bbl<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Makeindex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\mendex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-s "%style" "%input"</ins><br>
　　　Input format： .idx 　　　出力フォーマット： .ind<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Dvips program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Dvips program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\dvips.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-Ppdf -o "%output" "%input"</ins><br>
　　　Input format： .dvi 　　　出力フォーマット： .ps<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Dvipdf program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Dvipdf program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\dvipdfmx.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .dvi 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Ps2pdf program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Ps2pdf program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\gs\gs9.05\lib\ps2pdf.bat</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .ps　　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program (nomencl)　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Makeindex program (nomencl). If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\mendex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input" -s nomencl.ist -o "%output"</ins><br>
　　　Input format： .nlo 　　　出力フォーマット： .nls<br>

<br>

　　　Program file ok

***

### UTF-8 の場合 {#je390768}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Latex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

■ platex の場合<br>
<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Latex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\platex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .dvi<br>

<br>

　　　Program file ok

***

■ uplatex の場合<br>
<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Latex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\uplatex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .dvi<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　PdfLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the PdfLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\pdflatex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　XeLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the XeLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\xelatex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　LuaLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the LuaLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\lualatex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Bibtex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

■ pbibtex の場合<br>
<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\pbibtex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-kanji=utf8 "%input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

■ upbibtex の場合<br>
<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\upbibtex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

■ bibtexu の場合<br>
<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\bibtexu.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Biber (BibLaTeX)　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Biber (BibLaTeX). If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\biber.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .bcf 　　　出力フォーマット： .bbl<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Makeindex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\mendex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-U -s "%style" "%input"</ins><br>
　　　Input format： .idx 　　　出力フォーマット： .ind<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Dvips program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Dvips program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\dvips.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-Ppdf -o "%output" "%input"</ins><br>
　　　Input format： .dvi 　　　出力フォーマット： .ps<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Dvipdf program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Dvipdf program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\dvipdfmx.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .dvi 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Ps2pdf program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Ps2pdf program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\gs\gs9.05\lib\ps2pdf.bat</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .ps　　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program (nomencl)　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 Setup the Makeindex program (nomencl). If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\w32tex\bin\mendex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-U "%input" -s nomencl.ist -o "%output"</ins><br>
　　　Input format： .nlo 　　　出力フォーマット： .nls<br>

<br>

　　　Program file ok

***

### 編集後 {#q5808f84}

***

<span style="color:Black;background-color:#473EBE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　ビルダー設定

　　ドキュメントのビルドに使用するプログラム：<br>
　　Latex program　　　(C:\w32tex\bin\platex.exe)<br>
　　PsLatex program　　　()<br>
　　PdfLatex program　　　(C:\w32tex\bin\pdflatex.exe)<br>
　　XeLatex program　　　(C:\w32tex\bin\xelatex.exe)<br>
　　LuaLatex program　　　(C:\w32tex\bin\lualatex.exe)<br>
　　Bibtex program　　　(C:\w32tex\bin\pbibtex.exe)<br>
　　Biber (BibLaTeX)　　　(C:\w32tex\bin\biber.exe)<br>
　　Makeindex program　　　(C:\w32tex\bin\mendex.exe)<br>
　　Dvips program　　　(C:\w32tex\bin\dvips.exe)<br>
　　Dvipdf program　　　(C:\w32tex\bin\dvipdfmx.exe)<br>
　　Ps2pdf program　　　(C:\gs\gs9.05\lib\ps2pdf.bat)<br>
　　Makeindex program (nomencl)　　　(C:\w32tex\bin\mendex.exe)<br>
　　Kpsewhich program　　　(C:\w32tex\bin\kpsewhich.exe)<br>

***

設定を反映させるため \[適用(A)\] <strong>&gt;</strong> \[OK\] をクリックします．

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

## ビューアー設定 (Windows) {#g567cc73}

PDF ファイル，PS ファイル，DVI ファイルを表示するための設定をします．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>設定</strong></span>　　　　　　　　　　　　　　　　　 </ins></span><br>

　　…<br>
　　◢　Texlipse<br>
　　　　　　BibSonomy<br>
　　　　▷　BibTeX エディター<br>
　　　　▷　エディター<br>
　　　　▷　スペル・チェッカー<br>
　　　　　　ドキュメント・テンプレート<br>
　　　　▷<span style="color:Black;background-color:#DAEAFF;">　ビューアー設定　</span><br>
　　　　▷　ビルダー設定<br>
　　…<br>

***

### 編集前 {#q44f328c}

***

<span style="color:Black;background-color:#473EBE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　ビューアー設定

　このページは使用可能なビューアーのためにデフォルトを構成します。プレビューがエディターから起動されたと<br>
　き、現在の出力に合う最も優先度の高いビューアーが選択されます。<br>

<br>

　ビューアー構成 (優先度降順)：<br>
　yap ()<br>
　xdvi ()<br>
　itexmac ()<br>
　kdvi ()<br>
　gv ()<br>
　sumatra PDF (C:\Program Files\SumatraPDF\SumatraPDF.exe)<br>
　acroread ()<br>
　none ()<br>

***

### PDF ファイル ビューアー {#r96591c7}

#### [Pdf4Eclipse](http://borisvl.github.com/Pdf4Eclipse/) {#o62b47a3}

Pdf4Eclipse は PDF ファイルの自動更新と SyncTeX による forward and inverse search に対応しています．<br>
フォントを埋め込めば日本語も表示可能です．<br>
プロジェクト・エクスプローラーの PDF ファイルをダブルクリックすると Pdf4Eclipse で開きます．<br>
編集中の TeX ファイルのタブをクリックしたまま下方にドラッグ (移動) すると TeX ファイルと PDF ファイルを水平分割または垂直分割して表示できます．(ドラッグする方向や移動する距離によって水平分割・垂直分割を指定できます．)<br>
編集中の TeX ファイルの編集画面を右クリック → Forward search (Ctrl+Alt+F) で forward search ができます．<br>
PDF ファイルの画面をダブルクリックすると inverse search ができます．<br>

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>設定</strong></span>　　　　　　　　　　　　　　　　　 </ins></span><br>

　　…<br>
　　　<span style="color:Black;background-color:#DAEAFF;">　Pdf4Eclipse　</span><br>
　　▷　Texlipse<br>
　　…<br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　General settings for viewing PDF documents<br>
　☑ Enable pseudo continuous scrolling(E)<br>
　　PDF renderer (document must be reopend for change to take effect)<br>
　　◯ SUN renderer (より速い)<br>
　　◯ JPedal renderer (higher compatibility)<br>
　　<span style="color:#3333CC;">◎</span> JPedal renderer for some document types that can not be displayed by SUN renderer, otherwise SUN renderer<br>

***

#### [TeXworks](/TeXworks/) {#e36f125c}

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>TeXworks</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\w32tex\share\texworks\TeXworks.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>"&#x25;file"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

編集後，

> <span style="color:White;background-color:#1188FF;">　TeXworks (C:\w32tex\share\texworks\TeXworks.exe)　</span><br>

の優先度を一番上にします．

#### [SumatraPDF](/SumatraPDF/) {#b2e80208}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　sumatra PDF (C:\Program Files\SumatraPDF\SumatraPDF.exe)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

■ SumatraPDF を前面に表示したい場合<br>
<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Modify existing viewer configuration</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>sumatra PDF</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Program Files\SumatraPDF\SumatraPDF.exe</ins> または <ins>C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-reuse-instance "&#x25;fullfile" -forward-search "&#x25;texfile" &#x25;line</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <ins>\[ForwardSearch("%fullfile","%texfile",%line,0,0,1)\]</ins><br>
　　　　サーバー： <ins>SUMATRA</ins>　　　　　　　　　　　　　　　　　　　　トピック： <ins>control</ins><br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ビューアー実行外部コマンド　　　　　　　　　　　▼\]</span><br>
　　 ☑ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

■ SumatraPDF を前面に表示したくない場合<br>
[SumatraPDF#fwdsumatrapdf.exe](/SumatraPDF/#n8da77e2) の fwdsumatrapdf.exe を使用します．<br>
<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Modify existing viewer configuration</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>sumatra PDF</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\w32tex\NDde\Binary\fwdsumatrapdf.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>"&#x25;fullfile" "&#x25;texfile" &#x25;line</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ビューアー実行外部コマンド　　　　　　　　　　　▼\]</span><br>
　　 ☑ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

編集後，

> <span style="color:White;background-color:#1188FF;">　sumatra PDF (C:\Program Files\SumatraPDF\SumatraPDF.exe)　</span><br>

の優先度を上から二番目にします．

#### Chrome PDF Viewer {#e47a5b91}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Chrome PDF Viewer</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Windows\System32\cmd.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>/c &#x25;LOCALAPPDATA&#x25;\Google\Chrome\Application\chrome.exe --new-window "&#x25;fullfile"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

編集後，

> <span style="color:White;background-color:#1188FF;">　Chrome PDF Viewer (C:\Windows\System32\cmd.exe)　</span><br>

の優先度を上から三番目にします．

#### [Adobe Reader](</Adobe Reader/>) {#qdfce81e}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　acroread ()　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

■ Adobe Reader X の場合<br>
<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Modify existing viewer configuration</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>acroread</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe</ins> または <ins>C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>"&#x25;fullfile"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <ins>\[DocOpen("%fullfile")\]\[FileOpen("%fullfile")\]</ins><br>
　　　　サーバー： <ins>acroviewR10</ins>　　　　　　　　　　　　　　　　　　　　トピック： <ins>control</ins><br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <ins>\[AppExit()\]</ins><br>
　　　　サーバー： <ins>acroviewR10</ins>　　　　　　　　　　　　　　　　　　　　トピック： <ins>control</ins><br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

■ Adobe Reader 9 の場合<br>
<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>Modify existing viewer configuration</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>acroread</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Program Files\Adobe\Reader 9.0\Reader\AcroRd32.exe</ins> または <ins>C:\Program Files (x86)\Adobe\Reader 9.0\Reader\AcroRd32.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>"&#x25;fullfile"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <ins>\[DocOpen("%fullfile")\]\[FileOpen("%fullfile")\]</ins><br>
　　　　サーバー： <ins>acroview</ins>　　　　　　　　　　　　　　　　　　　　　　トピック： <ins>control</ins><br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <ins>\[DocClose("%fullfile")\]</ins><br>
　　　　サーバー： <ins>acroview</ins>　　　　　　　　　　　　　　　　　　　　　　トピック： <ins>control</ins><br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

編集後，

> <span style="color:White;background-color:#1188FF;">　acroread (C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe)　</span><br>

の優先度を上から四番目にします．

### PS ファイル ビューアー {#d5afa7cc}

#### [SumatraPDF](/SumatraPDF/) {#o2911d51}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>sumatra PDF PS</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Program Files\SumatraPDF\SumatraPDF.exe</ins> または <ins>C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-reuse-instance "&#x25;file"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[ps 　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

編集後，

> <span style="color:White;background-color:#1188FF;">　sumatra PDF PS (C:\Program Files\SumatraPDF\SumatraPDF.exe)　</span><br>

の優先度を上から五番目にします．

#### GSview {#ra380cc3}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>GSview</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Program Files\Ghostgum\gsview\gsview32.exe</ins> または <ins>C:\Program Files (x86)\Ghostgum\gsview\gsview32.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-e "&#x25;file"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <ins>\[ShowWindow(1)\]</ins><br>
　　　　サーバー： <ins>GSview</ins>　　　　　　　　　　　　　　　　　　　　　　　　トピック： <ins>GSview</ins><br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 　　トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[ps 　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

編集後，

> <span style="color:White;background-color:#1188FF;">　GSview (C:\Program Files\Ghostgum\gsview\gsview32.exe)　</span><br>

の優先度を上から六番目にします．

### DVI ファイル ビューアー {#y075cb2d}

#### [dviout](/dviout/) {#o33347b9}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>dviout</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\w32tex\dviout\dviout.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-1 "&#x25;file"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 　　トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[dvi　▼\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

編集後，

> <span style="color:White;background-color:#1188FF;">　dviout (C:\w32tex\dviout\dviout.exe)　</span><br>

の優先度を上から七番目にします．

### 編集後 {#y59ef935}

***

<span style="color:Black;background-color:#473EBE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　ビューアー設定

　このページは使用可能なビューアーのためにデフォルトを構成します。プレビューがエディターから起動されたと<br>
　き、現在の出力に合う最も優先度の高いビューアーが選択されます。<br>

<br>

　ビューアー構成 (優先度降順)：<br>
　TeXworks (C:\w32tex\share\texworks\TeXworks.exe)<br>
　sumatra PDF (C:\Program Files\SumatraPDF\SumatraPDF.exe)<br>
　Chrome PDF Viewer (C:\Windows\System32\cmd.exe)<br>
　acroread (C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe)<br>
　sumatra PDF PS (C:\Program Files\SumatraPDF\SumatraPDF.exe)<br>
　GSview (C:\Program Files\Ghostgum\gsview\gsview32.exe)<br>
　dviout (C:\w32tex\dviout\dviout.exe)<br>
　yap ()<br>
　xdvi ()<br>
　itexmac ()<br>
　kdvi ()<br>
　gv ()<br>
　none ()<br>

***

設定を反映させるため \[適用(A)\] <strong>&gt;</strong> \[OK\] をクリックします．

## ビューアー設定 (OS X) {#dddd18cb}

動作未確認です．<br>

### PDF ファイル ビューアー {#x7261881}

#### [Pdf4Eclipse](http://borisvl.github.com/Pdf4Eclipse/) {#c7007b14}

[Pdf4Eclipse](/TeXlipse/#o62b47a3) を参照．

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

## スペル・チェッカー設定 {#m717370b}

スペル・チェッカーの設定をします．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>設定</strong></span>　　　　　　　　　　　　　　　　　 </ins></span><br>

　　…<br>
　　◢　一般<br>
　　　　…<br>
　　　　◢　エディター<br>
　　　　　　◢　テキスト・エディター<br>
　　　　　　　　…<br>
　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　スペル　</span><br>
　　　　　　　　…<br>
　　　　…<br>
　　…<br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<strong>スペル</strong><br>

☑ スペル・チェックを使用可能にする(E)<br>

<br>

　　使用するエンジンのスペルを選択(U): <span style="color:Black;background-color:#EEEEEE;">\[Latex　　　　　　　　　▼\]</span><br>

***

[dictionaries](http://sourceforge.net/projects/texlipse/files/dictionaries/) などから辞書をダウンロードします．

辞書ファイルを展開します．

展開した辞書ファイルが格納されているディレクトリを C:\eclipse\en.dict などとして設定します．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>設定</strong></span>　　　　　　　　　　　　　　　　　 </ins></span><br>

　　…<br>
　　◢　Texlipse<br>
　　　　　　BibSonomy<br>
　　　　▷　BibTeX エディター<br>
　　　　▷　エディター<br>
　　　　▷<span style="color:Black;background-color:#DAEAFF;">　スペル・チェッカー　</span><br>
　　　　　　ドキュメント・テンプレート<br>
　　　　▷　ビューアー設定<br>
　　　　▷　ビルダー設定<br>
　　…<br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#373EAE;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<strong>スペル・チェッカー</strong><br>

スペル・チェッカー設定<br>

<br>

　Build in spell checker<br>

<br>

☑ Use build in spell checker<br>
☑ Ignore comments<br>
☑ 大/小文字混合ワードを無視<br>

<br>

Directory for main dictionaries:　　　<ins>C:\eclipse\en.dict</ins><br>
Directory for user dictionaries:　　　<ins>C:\eclipse\en.dict</ins><br>

***

設定を反映させるため \[適用(A)\] <strong>&gt;</strong> \[OK\] をクリックします．

TeX ファイルを開いている場合は，いったん閉じて開き直すとスペル・チェッカーが有効になり，スペルミスしていると思われる単語に赤い下線が表示されます．

TeX ファイル編集中に改行すると Parsing が行われ，間違った単語を入力している場合，赤い下線が表示されます．

## コンソールビュー {#jf9b1095}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　ビューの表示(V)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　コンソール　</span>　</span><br>

***

コンソールビューを表示させておくと，コンパイル時のメッセージ (コマンドプロンプトでコンパイルした場合に表示されるメッセージ）が Eclipse 内で確認できます．

エラーが発生した場合に手がかりとなるので，表示できるようにしておきましょう．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>設定</strong></span>　　　　　　　　　　　　　　　　　 </ins></span><br>

　　…<br>
　　◢　Texlipse<br>
　　　　　　BibSonomy<br>
　　　　▷　BibTeX エディター<br>
　　　　▷　エディター<br>
　　　　▷　スペル・チェッカー<br>
　　　　　　ドキュメント・テンプレート<br>
　　　　▷　ビューアー設定<br>
　　　　▷<span style="color:Black;background-color:#DAEAFF;">　ビルダー設定　</span><br>
　　…<br>

***

☑ ビルド中にコンソールへ外部プログラム・メッセージを出力

設定を反映させるため \[適用(A)\] <strong>&gt;</strong> \[OK\] をクリックします．

## 設定しておくと便利かもしれない設定 {#z5a451b6}

### テンポラリーファイルを tmp へ移動する設定 {#b0ee08d7}

dviout や makeidx パッケージが作成するテンポラリーファイルを tmp ディレクトリへ移動させる設定．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　Texlipse　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　ビルダー設定　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　Latex 一時ファイル　</span>　</span><br>

***

拡張子「.pbm」，「.bmc」，「.idx」を追加．

### 行番号の表示 {#p8333010}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　一般　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　エディター　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　テキスト・エディター　</span>　</span><br>

***

☑ 行番号の表示(B)

### Emacs 風キーバインド {#bd5d4f9c}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　一般　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　キー　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　スキーム(S):　</span>　</span><br>

***

で [Emacs](/Emacs/) を選択．

### Vim 風キーバインド {#x02baddd}

[Vrapper — Vim-like editing in Eclipse](http://vrapper.sourceforge.net/) を使用すれば可能です．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ヘルプ(H)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　新規ソフトウェアのインストール...　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">\[追加(A)...\]</span>　</span><br>

***

<span style="color:Black;background-color:#473EBE;"><ins>　　 <span style="color:White;"><strong>リポジトリーの追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

名前(N):　　　　　<ins>Vrapper Update Site</ins><br>
ロケーション(L): <ins>&#x68;ttp://vrapper.sourceforge.net/update-site/stable</ins>

***

を追加します．Vrapper にチェックを入れ，\[次へ(N) >\] をクリックして，指示に従って Vrapper をインストールします．

ツールバーの [Vim](/Vim/) アイコンをクリックすると [Vim](/Vim/) 風のキーバインドで編集できます．

### 表示色の変更 {#fcb1af55}

- [Eclipse Color Theme](https://github.com/eclipse-color-theme/eclipse-color-theme)

Eclipse Color Theme で TeXlipse の表示色の変更ができます．

### 選択したファイルの文字コードをまとめて変換 {#kc62331a}

- [CharsetConv Eclipse Plugin](http://www.powerbeans.co.jp/modules/tinyd2/index.php?id=5)

CharsetConv は選択したファイルの文字コードをまとめて変換する<br>
Eclipse プラグインです．<br>
