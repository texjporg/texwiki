---
title: "TeXlipse/設定/Windows"
url: "/TeXlipse/設定/Windows/"
date: 2012-07-13T02:13:17Z
pukiwiki: "TeXlipse/設定/Windows"
---

# TeXlipse/設定/Windows

[TeXlipse](/TeXlipse/) > [設定](</TeXlipse/設定/>) > Windows

***

***

## ビルダー設定 <a id="builder"></a> {#j3f79297}

デフォルトの設定では，upLaTeX が使えないので変更します．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　…<br>
　　◢　Texlipse<br>
　　　　▷　BibTeX エディター<br>
　　　　▷　エディター<br>
　　　　▷　スペル・チェッカー<br>
　　　　　　ドキュメント・テンプレート<br>
　　　　▷　ビューアー設定<br>
　　　　▷<span style="color:Black;background-color:#DAEAFF;">　ビルダー設定　</span><br>
　　…<br>

***

TeX Live がインストールされていれば以下のような表示になっているはずです．<br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#675EDE;background-color:#675EDE;"></ins>\[ <span style="color:Black;"><strong>🗕</strong></span> \]<ins></span><span style="color:#675EDE;background-color:#675EDE;"></ins>\[ <span style="color:Black;"><strong>🗖</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

　<strong>ビルダー設定</strong>

　　ドキュメントのビルドに使用するプログラム：<br>
　　Latex program　　　(C:\texlive\2025\bin\windows\latex.exe)<br>
　　PsLatex program　　　()<br>
　　PdfLatex program　　　(C:\texlive\2025\bin\windows\pdflatex.exe)<br>
　　XeLatex program　　　(C:\texlive\2025\bin\windows\xelatex.exe)<br>
　　LuaLatex program　　　(C:\texlive\2025\bin\windows\lualatex.exe)<br>
　　Bibtex program　　　(C:\texlive\2025\bin\windows\bibtex.exe)<br>
　　Biber (BibLaTeX)　　　(C:\texlive\2025\bin\windows\biber.exe)<br>
　　Makeindex program　　　(C:\texlive\2025\bin\windows\makeindex.exe)<br>
　　Dvips program　　　(C:\texlive\2025\bin\windows\dvips.exe)<br>
　　Dvipdf program　　　(C:\texlive\2025\bin\windows\dvipdfm.exe)<br>
　　Ps2pdf program　　　()<br>
　　Makeindex program (nomencl)　　　(C:\texlive\2025\bin\windows\makeindex.exe)<br>
　　Kpsewhich program　　　(C:\texlive\2025\bin\windows\kpsewhich.exe または)<br>

***

これらを \[編集(E)...\] します．

### 編集 {#je390768}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Latex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 Setup the Latex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\texlive\2025\bin\windows\uplatex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .dvi<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　LuaLatex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 Setup the LuaLatex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\texlive\2025\bin\windows\lualatex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-synctex=1 -interaction=nonstopmode "%input"</ins><br>
　　　Input format： .tex 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Bibtex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 Setup the Bibtex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\texlive\2025\bin\windows\bibtexu.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .bib 　　　出力フォーマット： .aux<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Biber (BibLaTeX)　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 Setup the Biber (BibLaTeX). If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\texlive\2025\bin\windows\biber.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>--bblencoding=utf8 -u -U --output_safechar "&#x25;input"</ins><br>
　　　Input format： .bcf 　　　出力フォーマット： .bbl<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 Setup the Makeindex program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\texlive\2025\bin\windows\upmendex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>-s "%style" "%input"</ins><br>
　　　Input format： .idx 　　　出力フォーマット： .ind<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Dvipdf program　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 Setup the Dvipdf program. If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\texlive\2025\bin\windows\dvipdfmx.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input"</ins><br>
　　　Input format： .dvi 　　　出力フォーマット： .pdf<br>

<br>

　　　Program file ok

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　Makeindex program (nomencl)　…　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[編集(E)...\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Edit builder program</strong></span>　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 Setup the Makeindex program (nomencl). If the program file field is empty, this program is disabled.<br>
　　 Program file： 　　　　　　　<ins>C:\texlive\2025\bin\windows\upmendex.exe</ins><br>
　　 引数： 　　　　　　　　　　　<ins>"&#x25;input" -s nomencl.ist -o "%output"</ins><br>
　　　Input format： .nlo 　　　出力フォーマット： .nls<br>

<br>

　　　Program file ok

***

設定を反映させるため \[適用(A)\] <strong>&gt;</strong> \[OK\] をクリックします．

## ビューアー設定 <a id="viewer"></a> {#g567cc73}

PDF ファイルを表示するための設定をします．

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　…<br>
　　◢　Texlipse<br>
　　　　▷　BibTeX エディター<br>
　　　　▷　エディター<br>
　　　　▷　スペル・チェッカー<br>
　　　　　　ドキュメント・テンプレート<br>
　　　　▷<span style="color:Black;background-color:#DAEAFF;">　ビューアー設定　</span><br>
　　　　▷　ビルダー設定<br>
　　…<br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#675EDE;background-color:#675EDE;"></ins>\[ <span style="color:Black;"><strong>🗕</strong></span> \]<ins></span><span style="color:#675EDE;background-color:#675EDE;"></ins>\[ <span style="color:Black;"><strong>🗖</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

　<strong>ビューアー設定</strong>

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

#### [Pdf4Eclipse](http://borisvl.github.com/Pdf4Eclipse/) <a id="pdf4eclipse"></a> {#o62b47a3}

Pdf4Eclipse は PDF ファイルの自動更新と SyncTeX による forward and inverse search に対応しています．<br>
フォントを埋め込めば日本語も表示可能です．<br>
プロジェクト・エクスプローラーの PDF ファイルをダブルクリックすると Pdf4Eclipse で開きます．<br>
編集中の TeX ファイルのタブをクリックしたまま下方にドラッグ (移動) すると TeX ファイルと PDF ファイルを水平分割または垂直分割して表示できます．<br>
ドラッグする方向や移動する距離によって水平分割・垂直分割を指定できます．<br>
編集中の TeX ファイルの編集画面を右クリック → Forward search (Ctrl+Alt+F) で forward search ができます．<br>
PDF ファイルの画面をダブルクリックすると inverse search ができます．<br>

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DAEAFF;">　ウィンドウ(W)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DAEAFF;">　設定(P)　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　…<br>
　　　<span style="color:Black;background-color:#DAEAFF;">　Pdf4Eclipse　</span><br>
　　▷　Texlipse<br>
　　…<br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#675EDE;background-color:#675EDE;"></ins>\[ <span style="color:Black;"><strong>🗕</strong></span> \]<ins></span><span style="color:#675EDE;background-color:#675EDE;"></ins>\[ <span style="color:Black;"><strong>🗖</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

　General settings for viewing PDF documents<br>
　☑ Enable pseudo continuous scrolling(E)<br>
　　PDF renderer (document must be reopend for change to take effect)<br>
　　◯ SUN renderer (より速い)<br>
　　◯ JPedal renderer (higher compatibility)<br>
　　🔘 JPedal renderer for some document types that can not be displayed by SUN renderer, otherwise SUN renderer<br>

***

#### [SumatraPDF](/SumatraPDF/) {#b2e80208}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　sumatra PDF (C:\Program Files\SumatraPDF\SumatraPDF.exe)　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

■ SumatraPDF を前面に表示したい場合<br>
<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;"><strong>Modify existing viewer configuration</strong></span> 　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>sumatra PDF</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Program Files\SumatraPDF\SumatraPDF.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>-reuse-instance "&#x25;fullfile" -forward-search "&#x25;texfile" &#x25;line</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <ins>\[ForwardSearch("%fullfile","%texfile",%line,0,0,1)\]</ins><br>
　　　　サーバー： <ins>SUMATRA</ins>　　　　　　　　　　　　　　　　　　　　トピック： <ins>control</ins><br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　<strong>ᐯ</strong>\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ビューアー実行外部コマンド　　　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　 ☑ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

■ SumatraPDF を前面に表示したくない場合<br>
[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>
<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;"><strong>Modify existing viewer configuration</strong></span> 　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>sumatra PDF</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\texlive\2025\bin\windows\fwdsumatrapdf.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>"&#x25;fullfile" "&#x25;texfile" &#x25;line</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　<strong>ᐯ</strong>\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ビューアー実行外部コマンド　　　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　 ☑ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

SumatraPDF を使用する場合は，

> <span style="color:White;background-color:#1188FF;">　sumatra PDF (C:\Program Files\SumatraPDF\SumatraPDF.exe)　</span><br>

の優先度を一番上にします．

#### [TeXworks](/TeXworks/) {#e36f125c}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>TeXworks</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\texlive\2025\tlpkg\texworks\texworks.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>"&#x25;file"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　<strong>ᐯ</strong>\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

TeXworks を使用する場合は，

> <span style="color:White;background-color:#1188FF;">　TeXworks (C:\texlive\2025\tlpkg\texworks\texworks.exe)　</span><br>

の優先度を一番上にします．

#### [TeXstudio](/TeXstudio/) {#k839b89f}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>TeXstudio</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Program Files\texstudio\texstudio.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>--pdf-viewer-only "&#x25;file"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　<strong>ᐯ</strong>\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

TeXstudio を使用する場合は，

> <span style="color:White;background-color:#1188FF;">　TeXstudio (C:\Program Files\texstudio\texstudio.exe)　</span><br>

の優先度を一番上にします．

#### Mozilla Firefox (PDF.js) {#r5d56a20}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Mozilla Firefox</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Windows\System32\cmd.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>/c start firefox -new-window "&#x25;fullfile"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　<strong>ᐯ</strong>\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

Mozilla Firefox (PDF.js) を使用する場合は，

> <span style="color:White;background-color:#1188FF;">　Mozilla Firefox (C:\Windows\System32\cmd.exe)　</span><br>

の優先度を一番上にします．

#### Chrome PDF Viewer {#e47a5b91}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　新規(W)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>新規ビューアー構成の追加</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>Chrome PDF Viewer</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Windows\System32\cmd.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>/c start chrome --new-window "&#x25;fullfile"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <br>
　　　　サーバー： 　　　　　　　　　　　　　　　　　　　　　　　　　　 トピック： <br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　<strong>ᐯ</strong>\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

Chrome PDF Viewer を使用する場合は，

> <span style="color:White;background-color:#1188FF;">　Chrome PDF Viewer (C:\Windows\System32\cmd.exe)　</span><br>

の優先度を一番上にします．

#### Adobe Acrobat Reader {#qdfce81e}

***

<span style="color:Black;background-color:#473EBE;">　<span style="color:White;background-color:#1188FF;">　acroread ()　</span> <span style="color:White;"><strong>&gt;</strong></span> <span style="color:Black;background-color:#DEDEEF;">　<span style="color:Black;background-color:#DAEAFF;">\[　　　　　編集(E)...　　　　　\]</span>　</span>　</span><br>

***

<span style="color:#675EDE;background-color:#675EDE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;"><strong>Modify existing viewer configuration</strong></span> 　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>

　　 ビューアーを構成します。<br>
　　 ビューアー名：　　　　　　　　　　　　　　　　<ins>acroread</ins><br>
　　 ビューアー・コマンド：　　　　　　　　　　　　 <ins>C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrobat.exe</ins><br>
　　 ビューアー引数：　　　　　　　　　　　　　　 <ins>"&#x25;fullfile"</ins><br>
　　　　ビューで送信する DDE メッセージ<br>
　　　　コマンド： <ins>\[DocOpen("%fullfile")\]\[FileOpen("%fullfile")\]</ins><br>
　　　　サーバー： <ins>AcroViewA26</ins>　　　　　　　　　　　　　　　　　　　　トピック： <ins>control</ins><br>

<br>

　　　　再ビルド前に送信する DDE メッセージ<br>
　　　　コマンド： <ins>\[DocClose("%fullfile")\]</ins><br>
　　　　サーバー： <ins>AcroViewA26</ins>　　　　　　　　　　　　　　　　　　　　トピック： <ins>control</ins><br>
　　 ビューアー入力ファイル・フォーマット：　 <span style="color:Black;background-color:#EEEEEE;">\[pdf　<strong>ᐯ</strong>\]</span><br>
　　 逆検索サポート：　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[使用不可　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　 ☐ ビューアーでフォーマット済み検索をサポート<br>

<br>

　　　File ok.

***

Adobe Acrobat Reader を使用する場合は，

> <span style="color:White;background-color:#1188FF;">　acroread (C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrobat.exe)　</span><br>

の優先度を一番上にします．

***

設定を反映させるため \[適用(A)\] <strong>&gt;</strong> \[OK\] をクリックします．

## SumatraPDF との連携 {#jcc1d56b}

引数に -synctex=1 を追加します．

### forward search {#z83d5681}

forward search は PDF ファイル ビューアーの [TeXlipse/設定/Windows#SumatraPDF](</TeXlipse/設定/Windows/#b2e80208>) の項を参考に設定してください．

### inverse search {#lcd98656}

inverse search は
SumatraPDF の \[☰\] &gt; \[設定(S)\] &gt; \[オプション(O)...\] の逆順検索コマンドラインの設定で

```
javaw -classpath "C:\eclipse\plugins\\org.eclipse.texlipse_2.0.2.201807241928\texlipse.jar" org.eclipse.texlipse.viewer.util.FileLocationClient -p 55000 -f "%f" -l %l
```

と設定します．

texlipse.jar のフルパスは自分の環境に合わせて修正してください．
