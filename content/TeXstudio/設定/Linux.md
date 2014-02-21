---
title: "TeXstudio/設定/Linux"
url: "/TeXstudio/設定/Linux/"
date: 2013-08-19T11:44:08Z
pukiwiki: "TeXstudio/設定/Linux"
---

# TeXstudio/設定/Linux

[TeXstudio](/TeXstudio/) > [設定](</TeXstudio/設定/>) > Linux

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### コマンド {#fdb50ca9}

PDFビューアは，組み込みPDFビューアと外部PDFビューアを選択するようになっているので好きな方を選択してください．<br>
組み込みPDFビューアで和文フォントを埋め込んでいない PDF ファイルを表示したい場合は [代替フォントの設定](/Evince/#substitute) や [KDE-Okular や Texmaker で和文フォント非埋め込みPDFを表示させるには](http://blogs.yahoo.co.jp/igproj_fusion/16383026.html)を参照してください．<br>
コマンドの LaTeX に設定されている latex を uplatex に変更して -src を -synctex=1 に変更します．<br>
コマンドの DviPdf に設定されている dvipdfm を dvipdfmx に変更します．<br>
コマンドの BibTeX に設定されている bibtex を upbibtex に変更します．<br>
コマンドの Biber に設定されている biber を biber --bblencoding=utf8 -u -U --output_safechars に変更します．<br>

***

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">コマンド 　　　　　　　　　　　</span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

ビルド<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

エディタ<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

コマンドの補完<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN<br>

<br>

<br>

<br>

<br>

<br>

　☐ 高度なオプションの表示

<br>

***

詳細な設定をする場合は高度なオプションの表示を ON にします．<br>

***

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">コマンド 　　　　　　　　　　　</span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

ビルド<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_latexmenus.png" alt="メニュー" width="37" height="37" style="float:left">

メニュー<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_toolbars.png" alt="ツールバー" width="37" height="37" style="float:left">

ツールバー<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

エディタ<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_advancededitor.png" alt="詳細なエディタ設定" width="37" height="37" style="float:left">

詳細なエディタ設定<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="カスタム強調表示" width="37" height="37" style="float:left">

カスタム強調表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

コマンドの補完<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN<br>

<br>

<br>

<br>

<br>

<br>

　☑ 高度なオプションの表示

<br>

***

LaTeX
: &nbsp;

: uplatex -synctex=1 -interaction=nonstopmode %.tex

PdfLaTeX
: &nbsp;

: pdflatex -synctex=1 -interaction=nonstopmode %.tex

XeLaTeX
: &nbsp;

: xelatex -synctex=1 -interaction=nonstopmode %.tex

LuaLaTeX
: &nbsp;

: lualatex -synctex=1 -interaction=nonstopmode %.tex

: luajitlatex -synctex=1 -interaction=nonstopmode %.tex

外部PDFビューア
: &nbsp;

: synctex view -i "@:0:?c:am.tex" -o "?am.pdf" -x "evince -i &#x25;&#x25;{page+1} '&#x25;&#x25;{output}'"

: fwdevince "?am.pdf" @ "?c:am.tex"

: okular --unique "file:?am.pdf#src:@ ?c:am.tex"

: synctex view -i "@:0:?c:am.tex" -o "?am.pdf" -x "zathura -P &#x25;&#x25;{page+1} '&#x25;&#x25;{output}'"

: zathura -s -x "texstudio '&#x25;&#x25;{input}' -line &#x25;&#x25;{line}" "?am.pdf"

: qpdfview --unique "?am.pdf#src:?c:am.tex:@:0"

: synctex view -i "@:0:?c:am.tex" -o "?am.pdf" -x "texworks --position=&#x25;&#x25;{page+1} '&#x25;&#x25;{output}'"

DviPs
: &nbsp;

: ruby -e "cmd='dvips -Ppdf -z -f '+0x22.chr+'?am.dvi'+0x22.chr+' '+0x7c.chr+' '+'convbkmk -u'+' '+0x3e.chr+' '+0x22.chr+'?am.ps'+0x22.chr;system(cmd)"

DviPng
: &nbsp;

: dvipng -T tight -D 120 %.dvi

Ps2Pdf
: &nbsp;

: ps2pdf %.ps

DviPdf
: &nbsp;

: dvipdfmx %.dvi

BibTeX
: &nbsp;

: upbibtex %

BibTex 8ビット
: &nbsp;

: bibtex8 %

Biber
: &nbsp;

: biber --bblencoding=utf8 -u -U --output_safechars %

Makeindex
: &nbsp;

: makeindex %.idx

Texindy
: &nbsp;

: texindy %.idx

Makeglossary
: &nbsp;

: makeglossaries

Metapost
: &nbsp;

: upmpost -interaction=nonstopmode %

Asymptote
: &nbsp;

: asy %.asy

Ghostscript
: &nbsp;

: gs

Latexmk
: &nbsp;

: latexmk -e "$latex=q/uplatex &#x25;&#x25;O -synctex=1 -interaction=nonstopmode &#x25;&#x25;S/" -e "$bibtex=q/upbibtex &#x25;&#x25;O &#x25;&#x25;B/" -e "$biber=q/biber &#x25;&#x25;O --bblencoding=utf8 -u -U --output_safechars &#x25;&#x25;B/" -e "$makeindex=q/makeindex &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -e "$dvipdf=q/dvipdfmx &#x25;&#x25;O -o &#x25;&#x25;D &#x25;&#x25;S/" -norc -gg -pdfdvi -silent %

SVN
: &nbsp;

: svn

SVNADMIN
: &nbsp;

: svnadmin

***

## [Evince](/Evince/) との連携 {#y63d1279}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#c5c506ca}

Evince/fwdevince の fwdevince を使用します．<br>

forward search は外部PDFビューアに

```
fwdevince "?am.pdf" @ "?c:am.tex"
```

です．

### inverse search {#b18e31c8}

Evince/fwdevince の invevince を使用します．<br>

inverse search はユーザーコマンドに invevince を作成して以下のようにコマンドを設定します．<br>

```
invevince "?am.pdf" "texstudio '%%f' -line %%l"
```

外部PDFビューアに evince を設定して evince で PDF ファイルを表示してユーザーコマンドを実行します．<br>
Ctrl + 左クリックで inverse search ができます．<br>
ユーザーコマンドを実行するタイミングは evince で PDF ファイルを表示する前でも後でもどちらでも OK です．<br>

## [Okular](/Okular/) との連携 {#c6d921dc}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#x57d864f}

forward search は外部PDFビューアに

```
okular --unique "file:?am.pdf#src:@ ?c:am.tex"
```

です．

### inverse search {#xd0f2973}

\[Settings\]-\[Configure Okular...\]-\[Editor\] の項目から Custom Text Editor を選択します．

Editor:
: Custom Text Editor

Command:
: texstudio "%f" -line %l

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## [zathura](/zathura/) との連携 {#i139e4bb}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#gc97fa6f}

forward search はユーザーコマンドに fwdzathura を作成して以下のようにコマンドを設定します．<br>

```
zathura --synctex-forward "@:0:?c:am.tex" "?am.pdf"
```

外部PDFビューアに zathura を設定して zathura で PDF ファイルを表示したあとでユーザーコマンドを実行します．<br>

### inverse search {#hd7f6d9d}

inverse search は外部PDFビューアに

```
zathura -s -x "texstudio '%%{input}' -line %%{line}" "?am.pdf"
```

を設定します．

高度なオプションの表示を ON にして，ビルドオプションのすでにdvi/ps/pdfファイルが開いている場合、新たにビューアを起動しないを ON にします．<br>

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## [qpdfview](/qpdfview/) との連携 {#j7ca7059}

LaTeX コマンド, PdfLaTeX コマンド, XeLaTeX コマンド, LuaLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#d9853641}

forward search は外部PDFビューアに

```
qpdfview --unique "?am.pdf#src:?c:am.tex:@:0"
```

です．

### inverse search {#f31d5e80}

\[Edit\]-\[Settings...\]-\[Behaviour\]

Source editor:
: texstudio "%1" -line %2

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．
