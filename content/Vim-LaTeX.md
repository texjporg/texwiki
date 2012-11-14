---
title: "Vim-LaTeX"
url: "/Vim-LaTeX/"
date: 2012-11-14T06:27:16Z
pukiwiki: "Vim-LaTeX"
---

# Vim-LaTeX

[Vim](/Vim/) > Vim-LaTeX (LaTeX-Suite)

## [Vim-LaTeX (LaTeX-Suite)](http://vim-latex.sourceforge.net/) {#z8e30b5a}

<img src="http://vim-latex.sourceforge.net/vim-latex.gif" alt="Vim-LaTeX" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## Vim-LaTeX とは {#q4aed643}

Vim-LaTeX は [Vim](/Vim/) で LaTeX ドキュメントを編集，コンパイル，プレビューするためのプラグインです．<br>
Vim-LaTeX は [VIM ライセンス](http://vim-latex.sourceforge.net/documentation/latex-suite/) ([日本語訳](https://sites.google.com/site/vimdocja/uganda-html)) でリリースされています．<br>

- [VIM-LaTeX](http://vim-latex.sourceforge.net/) (公式サイト)
    - [Manual, LaTeX Reference, Tutorial](http://vim-latex.sourceforge.net/manual.shtml)
    - [FAQ](http://vim-latex.sourceforge.net/faq.shtml)
    - [Features](http://vim-latex.sourceforge.net/features.shtml)
    - [Screenshots](http://vim-latex.sourceforge.net/screenshots.shtml)
        <!-- -[[micheljansen/vim-latex · GitHub:https://github.com/micheljansen/vim-latex]] -->
        <!-- -[[gerw/vim-latex-suite · GitHub:https://github.com/gerw/vim-latex-suite]] -->

### ChangeLog {#ye1a925a}

- [SourceForge - vim-latex/vim-latex/summary](http://vim-latex.git.sourceforge.net/git/gitweb.cgi?p=vim-latex/vim-latex)
    - [コミットログ](http://vim-latex.git.sourceforge.net/git/gitweb.cgi?p=vim-latex/vim-latex;a=shortlog)

### スクリーンショット {#fcc0c5b2}

<img src="http://vim-latex.sourceforge.net/screenshots/compilation-error.png" alt="Vim-LaTeX でのコンパイルエラー画面">

## [不具合](http://sourceforge.net/tracker/?group_id=52322&atid=466456) {#df88e09f}

### MacVim-KaoriYa で Vim-LaTeX を使用する場合に発生する日本語入力に関する不具合 → 回避策：.gvimrc に set imdisable を記述して MacVim メニューの「環境設定」「詳細」の「インラインインプットメソッドを使用する」のチェックをはずす {#qac1e623}

- [Issue 30 - macvim-kaoriya -IM挿入モードの中断 - MacVim KaoriYa - Google Project Hosting](http://code.google.com/p/macvim-kaoriya/issues/detail?id=30) → .gvimrc に set imdisable

### Linux の GVim で Vim-LaTeX を使用する場合に発生する日本語入力に関する不具合 → ソースコードの修正またはコンソール版の Vim を使用する {#g843a69b}

- \[[Vim-latex-devel\] Vim-latexsuite and IBus](http://www.mail-archive.com/vim-latex-devel@lists.sourceforge.net/msg01078.html)
- [vim-latex と gvim を併用すると日本語が打てない罠](http://d.hatena.ne.jp/jimbeam0203/20080703/1215113577) &amp; [gtk2のgvimだとscimで日本語入力ができない](http://d.hatena.ne.jp/mFumi/20090901/1251779763) → SCIM の「未確定文字列を入力対象クライアントのウインドウに表示」のチェックを外す
- [VIM-LaTeX を起動すると，GVim で日本語入力ができません… kinput2 は立ち上がるのですが，入力した瞬間に落ちます．](http://alohakun.blog7.fc2.com/blog-entry-61.html)
- [vim-latex は便利なんですけど，他の機能との相性が難しいですよね．私の場合は，何故か gvim で起動させると kinput2 が落ちるので，端末内の Vim で起動させています．](http://d.hatena.ne.jp/noya/comment?date=20051202#c)

GVim の on-the-spot の実装に問題があるようです．

- [http://www.bookshelf.jp/2ch/unix/1232035011.html#45](http://www.bookshelf.jp/2ch/unix/1232035011.html#45)
- [http://www.bookshelf.jp/2ch/unix/1258278511.html#366](http://www.bookshelf.jp/2ch/unix/1258278511.html#366)
- [http://code.google.com/p/vim/source/browse/src/mbyte.c](http://code.google.com/p/vim/source/browse/src/mbyte.c)

## インストール {#sbc289a6}

### [W32TeX](/W32TeX/) (Windows) {#eb85b35a}

[Vim &mdash; KaoriYa](http://www.kaoriya.net/software/vim) または [vim UTF-8日本語版 - fudist](https://sites.google.com/site/fudist/Home/vim-nihongo-ban) をインストールします．

[http://sourceforge.net/projects/vim-latex/files/](http://sourceforge.net/projects/vim-latex/files/) からファイルをダウンロードします．

Vim を起動し

```
 :echo $HOME
```

で，$HOME の場所を確認します．

パッケージを展開し，$HOME/vimfiles/ に

- compiler/
- doc/
- ftplugin/
- indent/
- plugin/
- latextags
- ltags
    <!-- -Makefile -->
    <!-- -Makefile.in -->

を配置します．

#### 設定 {#q8a0044b}

$HOME/\_vimrc に設定を記述します．

***

```
""
"" Vim-LaTeX
""
filetype plugin on
filetype indent on
set shellslash
set grepprg=grep\ -nH\ $*
let g:tex_flavor='latex'
let g:Imap_UsePlaceHolders = 1
let g:Imap_DeleteEmptyPlaceHolders = 1
let g:Imap_StickyPlaceHolders = 0
let g:Tex_DefaultTargetFormat = 'pdf'
let g:Tex_FormatDependency_ps = 'dvi,ps'
let g:Tex_FormatDependency_pdf = 'dvi,pdf'
"let g:Tex_FormatDependency_pdf = 'dvi,ps,pdf'
"let g:Tex_FormatDependency_pdf = 'pdf'
let g:Tex_CompileRule_dvi = 'platex -kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode $*'
"let g:Tex_CompileRule_dvi = 'uplatex -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode $*'
let g:Tex_CompileRule_ps = 'dvips -Ppdf -o $*.ps $*.dvi'
let g:Tex_CompileRule_pdf = 'dvipdfmx $*.dvi'
"let g:Tex_CompileRule_pdf = 'ps2pdf.bat $*.ps'
"let g:Tex_CompileRule_pdf = 'pdflatex -synctex=1 -interaction=nonstopmode $*'
"let g:Tex_CompileRule_pdf = 'lualatex -synctex=1 -interaction=nonstopmode $*'
"let g:Tex_CompileRule_pdf = 'xelatex -synctex=1 -interaction=nonstopmode $*'
let g:Tex_BibtexFlavor = 'pbibtex -kanji=utf8'
"let g:Tex_BibtexFlavor = 'upbibtex'
let g:Tex_MakeIndexFlavor = 'mendex -U $*.idx'
let g:Tex_ViewRule_dvi = 'C:/w32tex/dviout/dviout.exe -1'
let g:Tex_ViewRule_ps = 'C:/Program Files/SumatraPDF/SumatraPDF.exe -reuse-instance'
"let g:Tex_ViewRule_ps = 'C:/Program Files/Ghostgum/gsview/gsview32.exe -e'
let g:Tex_ViewRule_pdf = 'texworks'
"let g:Tex_ViewRule_pdf = 'C:/Program Files/SumatraPDF/SumatraPDF.exe -reuse-instance -inverse-search "C:\vim73-kaoriya-win32\gvim.exe -n -c \":RemoteOpen +\%l \%f\""'
"let g:Tex_ViewRule_pdf = 'C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe -reuse-instance -inverse-search "C:\vim73-kaoriya-win64\gvim.exe -n -c \":RemoteOpen +\%l \%f\""'
"let g:Tex_ViewRule_pdf = 'pdfopen --rxi --file'
```

***

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

TeXworks ではなく SumatraPDF を使いたい場合は [Vim-LaTeX#SumatraPDF との連携 (inverse search)](/Vim-LaTeX/#nefa91ff) を参照してください．

### [MacTeX &amp; TeX Live](/Mac/#f5466652) ([OS X](/Mac/)) {#aecb2dfb}

動作未確認です．

[MacVim-KaoriYa](http://code.google.com/p/macvim-kaoriya/) をインストールします．

[http://sourceforge.net/projects/vim-latex/files/](http://sourceforge.net/projects/vim-latex/files/) からファイルをダウンロードします．

Vim を起動し

```
 :echo $HOME
```

で，$HOME の場所を確認します．

パッケージを展開し，$HOME/.vim/ に

- compiler/
- doc/
- ftplugin/
- indent/
- plugin/
- latextags
- ltags
    <!-- -Makefile -->
    <!-- -Makefile.in -->

を配置します．

#### 設定 {#hf6d9f36}

$HOME/.vimrc に設定を記述します．

***

```
""
"" Vim-LaTeX
""
filetype plugin on
filetype indent on
set shellslash
set grepprg=grep\ -nH\ $*
let g:tex_flavor='latex'
let g:Imap_UsePlaceHolders = 1
let g:Imap_DeleteEmptyPlaceHolders = 1
let g:Imap_StickyPlaceHolders = 0
let g:Tex_DefaultTargetFormat = 'pdf'
let g:Tex_FormatDependency_ps = 'dvi,ps'
let g:Tex_FormatDependency_pdf = 'dvi,pdf'
"let g:Tex_FormatDependency_pdf = 'dvi,ps,pdf'
"let g:Tex_FormatDependency_pdf = 'pdf'
let g:Tex_CompileRule_dvi = '/usr/texbin/platex -synctex=1 -interaction=nonstopmode $*'
"let g:Tex_CompileRule_dvi = '/usr/texbin/uplatex -synctex=1 -interaction=nonstopmode $*'
let g:Tex_CompileRule_ps = '/usr/texbin/dvips -Ppdf -o $*.ps $*.dvi'
let g:Tex_CompileRule_pdf = '/usr/texbin/dvipdfmx $*.dvi'
"let g:Tex_CompileRule_pdf = '/usr/local/bin/ps2pdf $*.ps'
"let g:Tex_CompileRule_pdf = '/usr/texbin/pdflatex -synctex=1 -interaction=nonstopmode $*'
"let g:Tex_CompileRule_pdf = '/usr/texbin/lualatex -synctex=1 -interaction=nonstopmode $*'
"let g:Tex_CompileRule_pdf = '/usr/texbin/xelatex -synctex=1 -interaction=nonstopmode $*'
let g:Tex_BibtexFlavor = '/usr/texbin/pbibtex'
"let g:Tex_BibtexFlavor = '/usr/texbin/upbibtex'
let g:Tex_MakeIndexFlavor = '/usr/texbin/mendex $*.idx'
let g:Tex_UseEditorSettingInDVIViewer = 1
"let g:Tex_ViewRule_dvi = '/usr/texbin/pxdvi -watchfile 1'
let g:Tex_ViewRule_dvi = '/usr/bin/open -a PictPrinter.app'
"let g:Tex_ViewRule_dvi = '/usr/bin/open -a Skim.app'
let g:Tex_ViewRule_ps = '/usr/local/bin/gv --watch'
let g:Tex_ViewRule_pdf = '/usr/bin/open -a Preview.app'
"let g:Tex_ViewRule_pdf = '/usr/bin/open -a Skim.app'
"let g:Tex_ViewRule_pdf = '/usr/bin/open -a TeXShop.app'
"let g:Tex_ViewRule_pdf = '/usr/bin/open -a TeXworks.app'
"let g:Tex_ViewRule_pdf = '/usr/bin/open -a "Adobe Reader.app"'
```

***

日本語入力に不具合が発生する場合は $HOME/.gvimrc に set imdisable を記述して MacVim メニューの「環境設定」「詳細」の「インラインインプットメソッドを使用する」のチェックをはずします．

***

```
""
"" Vim-LaTeX
""
set imdisable
```

***

### [TeX Live](</TeX Live/>) ([Linux](/Linux/)) {#f59a6b76}

[http://sourceforge.net/projects/vim-latex/files/](http://sourceforge.net/projects/vim-latex/files/) からファイルをダウンロードします．

Vim を起動し

```
 :echo $HOME
```

で，$HOME の場所を確認します．

パッケージを展開し，$HOME/.vim/ に

- compiler/
- doc/
- ftplugin/
- indent/
- plugin/
- latextags
- ltags
    <!-- -Makefile -->
    <!-- -Makefile.in -->

を配置します．

#### 設定 {#j3b0f658}

$HOME/.vimrc に設定を記述します．

***

```
""
"" Vim-LaTeX
""
filetype plugin on
filetype indent on
set shellslash
set grepprg=grep\ -nH\ $*
let g:tex_flavor='latex'
let g:Imap_UsePlaceHolders = 1
let g:Imap_DeleteEmptyPlaceHolders = 1
let g:Imap_StickyPlaceHolders = 0
let g:Tex_DefaultTargetFormat = 'pdf'
let g:Tex_FormatDependency_ps = 'dvi,ps'
let g:Tex_FormatDependency_pdf = 'dvi,pdf'
"let g:Tex_FormatDependency_pdf = 'dvi,ps,pdf'
"let g:Tex_FormatDependency_pdf = 'pdf'
let g:Tex_CompileRule_dvi = 'platex -synctex=1 -interaction=nonstopmode $*'
"let g:Tex_CompileRule_dvi = 'uplatex -synctex=1 -interaction=nonstopmode $*'
let g:Tex_CompileRule_ps = 'dvips -Ppdf -o $*.ps $*.dvi'
let g:Tex_CompileRule_pdf = 'dvipdfmx $*.dvi'
"let g:Tex_CompileRule_pdf = 'ps2pdf $*.ps'
"let g:Tex_CompileRule_pdf = 'pdflatex -synctex=1 -interaction=nonstopmode $*'
"let g:Tex_CompileRule_pdf = 'lualatex -synctex=1 -interaction=nonstopmode $*'
"let g:Tex_CompileRule_pdf = 'xelatex -synctex=1 -interaction=nonstopmode $*'
let g:Tex_BibtexFlavor = 'pbibtex'
"let g:Tex_BibtexFlavor = 'upbibtex'
let g:Tex_MakeIndexFlavor = 'mendex $*.idx'
let g:Tex_UseEditorSettingInDVIViewer = 1
let g:Tex_ViewRule_dvi = 'pxdvi -watchfile 1'
"let g:Tex_ViewRule_dvi = 'advi -watch-file 1'
"let g:Tex_ViewRule_dvi = 'evince'
"let g:Tex_ViewRule_dvi = 'okular --unique'
"let g:Tex_ViewRule_dvi = 'wine ~/.wine/drive_c/w32tex/dviout/dviout.exe -1'
let g:Tex_ViewRule_ps = 'gv --watch'
"let g:Tex_ViewRule_ps = 'evince'
"let g:Tex_ViewRule_ps = 'okular --unique'
"let g:Tex_ViewRule_ps = 'zathura'
"let g:Tex_ViewRule_pdf = 'texworks'
let g:Tex_ViewRule_pdf = 'evince'
"let g:Tex_ViewRule_pdf = 'okular --unique'
"let g:Tex_ViewRule_pdf = 'zathura -s -x "vim --servername synctex -n --remote-silent +\%{line} \%{input}"'
"let g:Tex_ViewRule_pdf = 'qpdfview --unique'
"let g:Tex_ViewRule_pdf = 'pdfviewer'
"let g:Tex_ViewRule_pdf = 'gv --watch'
"let g:Tex_ViewRule_pdf = 'acroread'
"let g:Tex_ViewRule_pdf = 'pdfopen -viewer ar9-tab'
```

***

[Evince](/Evince/) の forward and inverse search は [Vim-LaTeX#Evince との連携 (forward and inverse search)](/Vim-LaTeX/#j6ff1448) を参照してください．

pxdvi の forward and inverse search は [Vim-LaTeX#xdvi との連携 (forward and inverse search)](/Vim-LaTeX/#e36989d2) を参照してください．

## 使い方 {#v4639f7b}

詳細は [VIM-LaTeX Manual](http://vim-latex.sourceforge.net/manual.shtml) を参照してください．

### 折りたたみ {#rfb1c8be}

デフォルトでは TeX ファイルを開くと折りたたまれた状態で表示されます．

***

<span style="color:Black;background-color:#007F00;"><ins>　</ins></span>[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/200px-Vimlogo.svg.png" alt="welcome home : vim online" width="28" height="28">](http://www.vim.org/)<span style="color:Black;background-color:#007F00;"><ins>　<span style="color:White;"><strong>vim.tex - GVIM1</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006F00;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#006F00;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル(F)　 編集(E)　 ツール(T)　 シンタックス(S)　 バッファ(B)　 ウィンドウ(W)　 TeX-Suite　 TeX-Environments　 TeX-Elements　 TeX-Math　 ヘルプ(H)　　　</ins></span><br>

<span style="color:Blue;">%</span><br>

<span style="color:Navy;">&#x2b;--　 7 行: Preamble: \documentclass\[12pt\]{jsarticle}---------------------------------------------------------------------------------------</span><br>

<span style="color:Magenta;">\begin{document}</span><br>

<span style="color:Navy;">&#x2b;--　46 行:\section{Vim について}-------------------------------------------------------------------------------------------------------</span><br>

<span style="color:Magenta;">\end{document}</span><br>

***

TeX ファイルを開くときに自動的に折りたたみを行う機能を off にするには $HOME/\_vimrc または $HOME/.vimrc に

```
let g:Tex_AutoFolding = 0
```

を追加します．

カーソル位置の折りたたみを開く場合は &lt;Space> で代用できます．

Vim-LaTeX では，折りたたみに関しては以下の 2 つの操作を覚えていれば OK です．

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">メニュー [TeX-Suite]</th><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td></td><td>&lt;Space&gt;</td><td>カーソル位置の折りたたみを開いて桁を1つ進める</td></tr>
> <tr><td>Refresh Folds</td><td>\rf</td><td>カーソル位置以外の折りたたみを閉じる</td></tr>
> </tbody>
> </table>
>

[Vim#使い方#折りたたみ](/Vim/#ff31000b) も参照してください．

### コンパイル・プレビュー・検索 {#v129fc5c}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">メニュー [TeX-Suite]</th><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>Compile</td><td>\ll</td><td>コンパイル</td></tr>
> <tr><td>View</td><td>\lv</td><td>プレビュー</td></tr>
> <tr><td>Search</td><td>\ls</td><td>検索 (forward search)</td></tr>
> </tbody>
> </table>
>

\ll, \lv, \ls は素早く入力する必要があります．

pxdvi, Active-DVI, dviout, gv, TeXworks, SumatraPDF, Skim, Evince, Okular, zathura, qpdfview, PdfViewer には，ファイルの自動更新機能があります．<br>
\ll でコンパイルして \lv でビューアを起動すれば，その後は \lv をもう一度タイプしなくても OK です．<br>
TeX ファイルを保存して \ll でコンパイルすれば，自動的に再描画してくれます．<br>

### コンパイル・プレビュー対象フォーマットの変更 {#w8864fda}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">メニュー [TeX-Suite]</th><th style="color:#FFF;background-color:#070;text-align:center">コマンドラインモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>Target Format</td><td>:TTarget dvi</td><td>コンパイル・プレビュー対象フォーマットを DVI に変更</td></tr>
> <tr><td>Target Format</td><td>:TTarget ps</td><td>コンパイル・プレビュー対象フォーマットを PS に変更</td></tr>
> <tr><td>Target Format</td><td>:TTarget pdf</td><td>コンパイル・プレビュー対象フォーマットを PDF に変更</td></tr>
> </tbody>
> </table>
>

編集中にコンパイル・プレビュー対象フォーマットを変更することができます．

OS X ではデフォルトの対象フォーマットは PDF です．その他の OS ではデフォルトの対象フォーマットは DVI です．

デフォルトの対象フォーマットを PDF に変更する場合は $HOME/\_vimrc または $HOME/.vimrc に

```
let g:Tex_DefaultTargetFormat = 'pdf'
```

を追加します．

### 補完 {#ndae7cd5}

#### Environment Mappings {#x2b85b15}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">メニュー [TeX-Environments]</th><th style="color:#FFF;background-color:#070;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#070;text-align:center">ビジュアルモード</th><th style="color:#FFF;background-color:#070;text-align:center">補完 (インサートモード)</th><th style="color:#FFF;background-color:#070;text-align:center">補完 (ビジュアルモード)</th></tr>
> <tr><td>Structure -&gt; document</td><td>EDO<br>document &lt;F5&gt;<br>&lt;F5&gt; document</td><td>,do<br>&lt;F5&gt; document</td><td>\documentclass[&lt;+options+&gt;]{&lt;+class+&gt;}<br><br>\begin{document}<br>&lt;++&gt;<br>\end{document}<br></td><td>\begin{document}<br>...<br>\end{document}<br></td></tr>
> <tr><td>Lists -&gt; itemize</td><td>EIT<br>itemize &lt;F5&gt;<br>&lt;F5&gt; itemize</td><td>,it<br>&lt;F5&gt; itemize</td><td>\begin{itemize}<br>\item<br>\end{itemize}&lt;++&gt;<br></td><td>\begin{itemize}<br>...<br>\end{itemize}<br></td></tr>
> </tbody>
> </table>
>

インサートモードの状態で，EDO とタイプすると

```
\documentclass[<+options+>]{<+class+>}

\begin{document}
<++>
\end{document}
```

と補完されます．

&#x3c;+options+>, &lt;+class+>, &lt;++> は place-holder で，&#x3c;Ctrl-J> をタイプすると place-holder が表示されている場所へジャンプします．

place-holder を使った移動は [TeXworks](/TeXworks/), [Texmaker](/Texmaker/) にも実装されています．

EDO を表示したい場合は，EDo をタイプして &#x3c;Esc> (&#x3c;Ctrl-\[> または &#x3c;Ctrl-C> でも OK) をタイプして ~ をタイプします．

インサートモードの状態で，EIT とタイプすると

```
\begin{itemize}
  \item 
\end{itemize}<++>
```

と補完されます．

2つ目以降の \item は &#x3c;Alt-I> で補完できます．

&#x3c;Ctrl-J> をタイプすると &lt;++> へジャンプします．

EIT を表示したい場合は，EI をタイプして &#x3c;Ctrl-V> をタイプして T をタイプします．

#### Command Mappings {#j5dbc2af}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#070;text-align:center">ビジュアルモード</th><th style="color:#FFF;background-color:#070;text-align:center">補完 (ノーマルモード・インサートモード)</th><th style="color:#FFF;background-color:#070;text-align:center">補完 (ビジュアルモード)</th></tr>
> <tr><td>frac にカーソルがある状態で &lt;F7&gt;<br>&lt;F7&gt; frac</td><td>frac &lt;F7&gt;<br>&lt;F7&gt; frac</td><td></td><td>\frac{&lt;+n+&gt;}{&lt;+d+&gt;}&lt;++&gt;</td><td></td></tr>
> <tr><td>footnote にカーソルがある状態で &lt;F7&gt;<br>&lt;F7&gt; footnote</td><td>footnote &lt;F7&gt;<br>&lt;F7&gt; footnote</td><td>&lt;F7&gt; footnote</td><td>\footnote{}&lt;++&gt;</td><td>\footnote{<br>...<br>}<br></td></tr>
> </tbody>
> </table>
>

インサートモードの状態で，frac &lt;F7> とタイプすると

```
\frac{<+n+>}{<+d+>}<++>
```

と補完されます．

&#x3c;Ctrl-J> をタイプすると &lt;+n+>, &lt;+d+>, &lt;++> へジャンプします．

#### Font Mappings {#c3a8a4c8}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">メニュー [TeX-Elements]</th><th style="color:#FFF;background-color:#070;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#070;text-align:center">ビジュアルモード</th><th style="color:#FFF;background-color:#070;text-align:center">補完 (インサートモード)</th><th style="color:#FFF;background-color:#070;text-align:center">補完 (ビジュアルモード(v))</th><th style="color:#FFF;background-color:#070;text-align:center">補完 (ビジュアルモード(&#x3c;Shift-V&gt;, &#x3c;Ctrl-V&gt;))</th></tr>
> <tr><td>Font -&gt; Family -&gt; rmfamily</td><td>FRM</td><td>`rm</td><td>\textrm{}&lt;++&gt;</td><td>\textrm{...}</td><td>{\rmfamily<br>...<br>}<br></td></tr>
> </tbody>
> </table>
>

インサートモードの状態で，FRM とタイプすると

```
\textrm{}<++>
```

と補完されます．

&#x3c;Ctrl-J> をタイプすると &lt;++> へジャンプします．

FRM を表示したい場合は，FR をタイプして &#x3c;Ctrl-V> をタイプして M をタイプします．

#### Section Mappings {#p56fcbdb}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">メニュー [TeX-Environments]</th><th style="color:#FFF;background-color:#070;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#070;text-align:center">ビジュアルモード</th><th style="color:#FFF;background-color:#070;text-align:center">補完 (インサートモード)</th><th style="color:#FFF;background-color:#070;text-align:center">補完 (ビジュアルモード)</th></tr>
> <tr><td>Sections -&gt; section</td><td>SSE</td><td>,se</td><td>\section{}&lt;++&gt;</td><td>\section{...}</td></tr>
> </tbody>
> </table>
>

インサートモードの状態で，SSE とタイプすると

```
\section{}<++>
```

と補完されます．

&#x3c;Ctrl-J> をタイプすると &lt;++> へジャンプします．

SSE を表示したい場合は，SS をタイプして &#x3c;Ctrl-V> をタイプして E をタイプします．

#### Greek Letter Mappings {#i3ca609c}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">メニュー [TeX-Math]</th><th style="color:#FFF;background-color:#070;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#070;text-align:center">補完</th></tr>
> <tr><td>Greek -&gt; Small -&gt; alpha</td><td>`a</td><td>\alpha</td></tr>
> </tbody>
> </table>
>

インサートモードの状態で，\`a とタイプすると

```
\alpha
```

と補完されます．

\`a を表示したい場合は，\` をタイプして &#x3c;Ctrl-V> をタイプして a をタイプします．

#### Smart Key Mappings {#pf3d470a}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#070;text-align:center">補完</th></tr>
> <tr><td>"</td><td>``</td></tr>
> </tbody>
> </table>
>

[vim-latexで引用符を直に入力する方法](http://blog.livedoor.jp/les_paul_sp/archives/989566.html) を参照．

デフォルトではインサートモードの状態で，" を入力すると

```
``
```

と補完されます．

" を表示したい場合は，&#x3c;Ctrl-V> をタイプして " をタイプします．

Smart Quotes を off にするには $HOME/\_vimrc または $HOME/.vimrc に

```
let g:Tex_SmartKeyQuote = 0
```

を追加します．

#### Auc-Tex Key Bindings {#d18b06c1}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#070;text-align:center">補完</th></tr>
> <tr><td>`/</td><td>\frac{}{&lt;++&gt;}&lt;++&gt;</td></tr>
> </tbody>
> </table>
>

インサートモードの状態で，\`/ とタイプすると

```
\frac{}{<++>}<++>
```

と補完されます．

&#x3c;Ctrl-J> をタイプすると &lt;++> へジャンプします．

\`/ を表示したい場合は，\` をタイプして &#x3c;Ctrl-V> をタイプして / をタイプします．

#### マクロの展開を抑制 {#d059b4a4}

EIT などのマクロの展開を抑制したい場合は，

コマンドラインモードで

```
:let b:Imap_FreezeImap=1
```

とします．元に戻す場合は

```
:let b:Imap_FreezeImap=0
```

とします．

## [SumatraPDF](/SumatraPDF/) との連携 (forward search) {#e0090c3d}

SumatraPDF で forward search を使用するには LaTeX コマンドに -synctex=1 を追加して

$HOME/\_vimrc の g:Tex_ViewRule_pdf を [Vim-LaTeX#SumatraPDF との連携 (inverse search)](/Vim-LaTeX/#nefa91ff) を参照して設定します．

### SumatraPDF を前面に表示したい場合 {#r8a125e8}

#### -forward-search &lt;texfile> &lt;linenumber> オプションを使用する場合 {#aad615d5}

[$HOME/vimfiles/ftplugin/latex-suite/compiler.vim](http://vim-latex.git.sourceforge.net/git/gitweb.cgi?p=vim-latex/vim-latex;a=blob;f=ftplugin/latex-suite/compiler.vim) を修正します．

***

- $HOME/vimfiles/ftplugin/latex-suite/compiler.vim

***

```
...
"      For inverse search, if you are reading this, then just pressing \ls
"      will work.
function! Tex_ForwardSearchLaTeX()
...
  " tips on vim.sf.net (vim.sf.net tip #225)
  if (has('win32') && (viewer =~? "yap"))

    let execString = 'silent! !start '. viewer.' -s '.line('.').expand('%').' '.mainfnameRoot

  elseif (has('win32') && (viewer =~? "dviout"))

    let execString = 'silent! !start ' . viewer . ' -1 ' . mainfnameRoot . '.dvi' . ' \# '. line('.') . ' ' . expand('%')

  elseif (has('win32') && (viewer =~? "sumatrapdf"))

    let relativeFile = substitute(expand("%:p"), Tex_GetMainFileName(':p:h').'/', '','')
    let execString = 'silent! !start ' . viewer . ' -reuse-instance "' .mainfnameFull . '.' . s:target .'" -forward-search "' . relativeFile . '" ' . line('.')

...
```

***

使い方は

1. GVim を起動して TeX ファイルを開きます．
1. :TTarget pdf
1. \ll でコンパイルして PDF ファイルを作成します．
1. \ls で SumatraPDF で PDF ファイルをプレビューして forward search を行います．

#### fwdsumatra.py (Python の場合) {#if33a161}

***

<!-- ***初心者の方へ [#wc3116fb] -->
- 初心者の方へ

***

初心者の方は，[VimとSumatraPDFを使いforward searchの設定をする](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=668) を参照してください．

Vim-LaTeX で SumatraPDF を使った forward search は自分には難しいと判断された方は [SumatraPDF - TeX Wiki](/SumatraPDF/) に記述されているエディタを使って SumatraPDF を使った forward search をしてみてください．<br>
これからプログラミングを勉強される場合は Python を使ってみてください．<br>
Python は可読性が高く，便利なライブラリが豊富に存在し，ドキュメントもしっかりしています．<br>
Python のドキュメントは [Sphinx](/Sphinx/) で作成されています．<br>
初心者におすすめのプログラミング言語です．<br>
Python に慣れてきたら Ruby や Perl も使ってみてください．<br>
動的型付け言語に慣れてきたら F# などの静的型付け言語も使ってみてください．<br>

***

[fwdsumatra](http://william.famille-blum.org/blog/static.php?page=static081010-000413) を使用すると SumatraPDF で forward search が使用可能になります．

[Python](http://www.python.org/) と [pywin32 (Python for Windows Extensions)](http://sourceforge.net/projects/pywin32/files/pywin32/) が必要です．

python-2.7.3.msi と pywin32-214.win32-py2.7.exe で動作します．

pywin32 (Python for Windows Extensions) の Build 218, 217, 216, 215 は python.exe で win32ui モジュールと dde モジュールを import するときに

***

```
>>> import win32ui
>>> import dde
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ImportError: This must be an MFC application - try loading win32ui first
```

***

といったエラーが発生するので Build 214 を使用してください．→ [dde module initialization failing - ID: 3314345](http://sourceforge.net/tracker/?func=detail&aid=3314345&group_id=78018&atid=551954)

PythonWin (Python IDE) ではエラーが発生しないようです． → ([Re: \[python-win32\] can't import dde module after importing win32ui &laquo; python-win32 &laquo; ActiveState List Archives](http://code.activestate.com/lists/python-win32/11729/))

インストール方法は

- python-2.7.3.msi と pywin32-214.win32-py2.7.exe をインストールして C:\Python27 に PATH を通します．
- vim-fwdsumatra.zip を展開します．
- $HOME/vimfiles/ftplugin/latex-suite/ に fwdsumatra.py をコピーします．

Python 3 で使用する場合は 2to3.py を使用してリファクタリングを行います．

```
>C:\Python32\python.exe C:\Python32\Tools\Scripts\2to3.py fwdsumatra.py
RefactoringTool: Skipping implicit fixer: buffer
RefactoringTool: Skipping implicit fixer: idioms
RefactoringTool: Skipping implicit fixer: set_literal
RefactoringTool: Skipping implicit fixer: ws_comma
RefactoringTool: Refactored fwdsumatra.py
--- fwdsumatra.py       (original)
+++ fwdsumatra.py       (refactored)
@@ -19,7 +19,7 @@
 """

 def usage():
-    print USAGE_TEXT
+    print(USAGE_TEXT)
     sys.exit(-1)

 def main(pdf,tex,line):
RefactoringTool: Files that need to be modified:
RefactoringTool: fwdsumatra.py
```

print 文を print 関数に修正します．

***

- $HOME/vimfiles/ftplugin/latex-suite/fwdsumatra.py

***

```
#!/usr/bin/env python

# Part of Latex-Suite
#
# Copyright: Julien Cornebise
# Date: February 20, 2009
# Description:
#   This file calls ForwardSearch DDE function of SumatraPDF

import sys
import win32ui
import dde

# Set to 0 to prevent SumatraPDF from raising, to 1 to raise it
raiseWindow = 1

USAGE_TEXT = """
Usage: fwdsumatra.py <pdf_file> <source_file> <line_number>
"""

def usage():
    print(USAGE_TEXT)
    sys.exit(-1)

def main(pdf,tex,line):
    # Convert backslashes to slashes, for Unix-style calling from vimlatex
    pdf = pdf.replace("/", "\\")
    # Connect to SumatraPDF
    server = dde.CreateServer()
    server.Create("LatexSuite")
    conversation = dde.CreateConversation(server)
    conversation.ConnectTo("SUMATRA", "control")
    # Build the DDE call
    execString = '[ForwardSearch("' + pdf + '","' + tex + '",' + line + ',0,0,' + str(raiseWindow) + ')]'
    # Call !
    conversation.Exec(execString)

if __name__ == "__main__":
    if len(sys.argv) != 4:
        usage()

    main(sys.argv[1],sys.argv[2],sys.argv[3])
```

***

現在の Vim-LaTeX は fwdsumatra が作成された時期とは $HOME/vimfiles/ftplugin/latex-suite/compiler.vim の実装が異なっています．

patch コマンドでは fwdsumatra.diff の修正が適用できないかもしれません．

また，2011/05/11 以降の W32TeX では，出力する synctex ファイルに記述されているソースファイル名が 2011/05/11 よりも前の W32TeX とは異なります．

2011/05/11 以降の W32TeX ではフルパスでない TeX ファイル名 (basename.tex のみ) を引数に与えると

```
dirname/./basename.tex
```

のように出力されます．

2011/05/11 よりも前の W32TeX ではフルパスでない TeX ファイル名 (basename.tex のみ) を引数に与えると

```
basename.tex
```

のように出力されます．

フルパスの場合はどちらもフルパスで出力されます．

SumatraPDF v1.7.3952 で，dirname/./basename.tex の場合にも対応しました．

```

```

このため，fwdsumatra.diff の修正が適用できたとしても，SumatraPDF v1.7.3952 未満 かつ 2011/05/11 以降の W32TeX では SumatraPDF の forward search は動作しません．

そこで fwdsumatra.diff の内容を見て，$HOME/vimfiles/ftplugin/latex-suite/compiler.vim を手動で修正します．

- SumatraPDF v1.7.3952 以上 または 2011/05/11 よりも前の W32TeX の場合は relativeFile を

    ```
        let relativeFile = substitute(expand("%:p"), Tex_GetMainFileName(':p:h').'/', '','')
    ```

    とします．

- SumatraPDF v1.7.3952 未満 かつ 2011/05/11 以降の W32TeX の場合は relativeFile を
    <!--     let relativeFile = Tex_GetMainFileName(':p:h').'/./'.expand("%:.") -->

    ```
        let relativeFile = './'.substitute(expand("%:p"), Tex_GetMainFileName(':p:h').'/', '','')
    ```

    とします．

- fwdsumatra.diff の修正内容では \lv したあと \ls しなければならず，使い勝手が悪いため \ls だけで，プレビュー，検索ができるように call Tex_ViewLaTeX() を追加しました．
- forward search が機能しない場合は execString の値が適切でないことが考えられます．$HOME/\_vimrc に

    ```
    let g:Tex_Debug = 1
    let g:Tex_DebugLog = 'C:\vim73-kaoriya-win32\debug.txt'
    ```

    を追加してください．
    $HOME/vimfiles/ftplugin/latex-suite/compiler.vim に

    ```
    call Tex_Debug("Tex_ForwardSearchLaTeX: execString = ".execString, "comp")
    ```

    を追加すると C:\vim73-kaoriya-win32\debug.txt が出力され execString の値を調べることができます．(これは既に記述されています．)
    execString の値が適切な値になるように修正してみてください．

***

- $HOME/vimfiles/ftplugin/latex-suite/compiler.vim

***

```
...
"      For inverse search, if you are reading this, then just pressing \ls
"      will work.
let s:path = expand('<sfile>:p:h')
function! Tex_ForwardSearchLaTeX()
...
  " tips on vim.sf.net (vim.sf.net tip #225)
  if (has('win32') && (viewer =~? "yap"))

    let execString = 'silent! !start '. viewer.' -s '.line('.').expand('%').' '.mainfnameRoot

  elseif (has('win32') && (viewer =~? "dviout"))

    let execString = 'silent! !start ' . viewer . ' -1 ' . mainfnameRoot . '.dvi' . ' \# '. line('.') . ' ' . expand('%')

  elseif (has('win32') && (viewer =~? "sumatrapdf"))

    let relativeFile = substitute(expand("%:p"), Tex_GetMainFileName(':p:h').'/', '','')
    let execString = 'silent! !python '.s:path.'/fwdsumatra.py "'.mainfnameFull.'.'.s:target.'" "'.relativeFile.'" '. line('.')
    call Tex_ViewLaTeX()

...
```

***

fwdsumatra のライセンスは [WTFPL - Do What The Fuck You Want To Public License](http://sam.zoy.org/wtfpl/)[^1] です．

#### fwdsumatra.rb (Ruby の場合) {#beac476a}

Python + pywin32 の代わりに [RubyInstaller](http://rubyinstaller.org/) + [dde](http://rubygems.org/gems/dde) を使っても OK です．

```
C:\Ruby193\bin>gem install dde
Fetching: bundler-1.0.21.gem (100%)
Fetching: ffi-1.0.9-x86-mingw32.gem (100%)
Fetching: win-0.3.27.gem (100%)
Fetching: dde-0.2.11.gem (100%)
Successfully installed bundler-1.0.21
Successfully installed ffi-1.0.9-x86-mingw32
Successfully installed win-0.3.27
Successfully installed dde-0.2.11
4 gems installed
Installing ri documentation for bundler-1.0.21...
Installing ri documentation for ffi-1.0.9-x86-mingw32...
Installing ri documentation for win-0.3.27...
unable to convert "\xE2" to UTF-8 in conversion from ASCII-8BIT to UTF-8 to Wind
ows-31J for lib/win/dde.rb, skipping
unable to convert "\xE2" to UTF-8 in conversion from ASCII-8BIT to UTF-8 to Wind
ows-31J for lib/win/library.rb, skipping
Installing ri documentation for dde-0.2.11...
Installing RDoc documentation for bundler-1.0.21...
Installing RDoc documentation for ffi-1.0.9-x86-mingw32...
Installing RDoc documentation for win-0.3.27...
unable to convert "\xE2" to UTF-8 in conversion from ASCII-8BIT to UTF-8 to Wind
ows-31J for lib/win/dde.rb, skipping
unable to convert "\xE2" to UTF-8 in conversion from ASCII-8BIT to UTF-8 to Wind
ows-31J for lib/win/library.rb, skipping
Installing RDoc documentation for dde-0.2.11...
```

***

- $HOME/vimfiles/ftplugin/latex-suite/fwdsumatra.rb

***

```
#!/usr/bin/env ruby

# Part of Latex-Suite
#
# Description:
#   This file calls ForwardSearch DDE function of SumatraPDF

require 'dde'

# Set to 0 to prevent SumatraPDF from raising, to 1 to raise it
$raiseWindow = 1

USAGE_TEXT = <<-"EOF"
Usage: fwdsumatra.rb <pdf_file> <source_file> <line_number>
EOF

def usage()
  print(USAGE_TEXT)
  exit(-1)
end

def main(pdf, tex, line)
  # Convert backslashes to slashes, for Unix-style calling from vimlatex
  pdf = pdf.gsub("\\", "/")
  # Connect to SumatraPDF
  client = Dde::Client.new(nil, &Proc.new{})
  client.start_conversation("SUMATRA", "control")
  # Build the DDE call
  data = '[ForwardSearch("' + pdf + '","' + tex + '",' + line + ',0,0,' + $raiseWindow.to_s + ')]'
  data_pointer = FFI::MemoryPointer.from_string(data.to_s)
  # Call !
  client.start_transaction(Win::Dde::XTYP_EXECUTE, data_pointer, data_pointer.size, Win::Dde::CF_TEXT, "")
  client.stop_conversation()
end

if $0 == __FILE__
  if ARGV.length() != 3
    usage()
  end
  main(ARGV[0], ARGV[1], ARGV[2])
end
```

***

$HOME/vimfiles/ftplugin/latex-suite/compiler.vim の execString の定義を

```
let execString = 'silent! !ruby '.s:path.'/fwdsumatra.rb "'.mainfnameFull.'.'.s:target.'" "'.relativeFile.'" '. line('.')
```

に修正します．

#### fwdsumatra.pl (Perl の場合) {#o1d76025}

Python + pywin32 の代わりに [Strawberry Perl](http://strawberryperl.com/) + [Win32::DDE](http://www.bribes.org/perl/win32dde.html) (インストール方法は [PPM Repository](http://www.bribes.org/perl/ppmdir.html) を参照) を使っても OK です．

```
C:\strawberry\perl\bin>ppm install http://www.bribes.org/perl/ppm/Win32-DDE.ppd
Installing C:\strawberry\perl\site\lib\auto\Win32\DDE\DDE.bs
Installing C:\strawberry\perl\site\lib\auto\Win32\DDE\DDE.dll
Installing C:\strawberry\perl\site\lib\auto\Win32\DDE\DDE.exp
Installing C:\strawberry\perl\site\lib\auto\Win32\DDE\DDE.lib
Installing C:\strawberry\perl\site\lib\Win32\DDE.pm
Installing C:\strawberry\perl\site\lib\Win32\DDE\Callback.pm
Installing C:\strawberry\perl\site\lib\Win32\DDE\Client.pm
```

***

- $HOME/vimfiles/ftplugin/latex-suite/fwdsumatra.pl

***

```
#!/usr/bin/env perl

# Part of Latex-Suite
#
# Description:
#   This file calls ForwardSearch DDE function of SumatraPDF

use Win32::DDE::Client;

use strict;
use warnings;

# Set to 0 to prevent SumatraPDF from raising, to 1 to raise it
our $raiseWindow = 1;

my $USAGE_TEXT = <<"EOF";
Usage: fwdsumatra.pl <pdf_file> <source_file> <line_number>
EOF

sub usage {
  print($USAGE_TEXT);
  exit(-1);
}

sub main {
  my ($pdf, $tex, $line) = @_;
  # Convert backslashes to slashes, for Unix-style calling from vimlatex
  $pdf =~ s/\\/\//g;
  # Connect to SumatraPDF
  my $client = new Win32::DDE::Client("SUMATRA", "control");
  # Build the DDE call
  my $command = '[ForwardSearch("' . $pdf . '","' . $tex . '",' . $line . ',0,0,' . $raiseWindow . ')]';
  # Call !
  $client->Execute($command);
  $client->Disconnect;
}

if ($0 eq __FILE__) {
  if ($#ARGV != 2) {
    &usage;
  }
  &main($ARGV[0], $ARGV[1], $ARGV[2]);
}
```

***

$HOME/vimfiles/ftplugin/latex-suite/compiler.vim の execString の定義を

```
let execString = 'silent! !perl '.s:path.'/fwdsumatra.pl "'.mainfnameFull.'.'.s:target.'" "'.relativeFile.'" '. line('.')
```

に修正します．

### SumatraPDF を前面に表示したくない場合 {#g49fe34c}

#### fwdsumatrapdf.exe (fwdsumatrapdf.fsx) (F# の場合) {#f2c220aa}

[SumatraPDF#fwdsumatrapdf.exe](/SumatraPDF/#n8da77e2) の fwdsumatrapdf.exe を使用します．<br>

$HOME/vimfiles/ftplugin/latex-suite/compiler.vim の execString の定義を

```
let execString = 'silent! !C:/w32tex/NDde/Binary/fwdsumatrapdf.exe '.'"'.mainfnameFull.'.'.s:target.'" "'.relativeFile.'" '. line('.')
```

に修正します．

## [SumatraPDF](/SumatraPDF/) との連携 (inverse search) {#nefa91ff}

SumatraPDF で inverse search を使用するには LaTeX コマンドに -synctex=1 を追加して

- SumatraPDF のフルパスが C:\Program Files\SumatraPDF\SumatraPDF.exe
- gvim.exe のフルパスが C:\vim73-kaoriya-win32\gvim.exe

の場合 $HOME/\_vimrc の g:Tex_ViewRule_pdf を

***

```
let g:Tex_ViewRule_pdf = 'C:/Program Files/SumatraPDF/SumatraPDF.exe -reuse-instance -inverse-search "C:\vim73-kaoriya-win32\gvim.exe -n -c \":RemoteOpen +\%l \%f\""'
```

***

に設定します．

- SumatraPDF のフルパスが C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe
- gvim.exe のフルパスが C:\vim73-kaoriya-win64\gvim.exe

の場合 $HOME/\_vimrc の g:Tex_ViewRule_pdf を

***

```
let g:Tex_ViewRule_pdf = 'C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe -reuse-instance -inverse-search "C:\vim73-kaoriya-win64\gvim.exe -n -c \":RemoteOpen +\%l \%f\""'
```

***

に設定します．

SumatraPDF の inverse search は ダブルクリックで行います．

## Evince との連携 (forward and inverse search) {#j6ff1448}

- [Evince - TeX Wiki](/Evince/)
- [Vim, Evince and forward and backward LaTeX synctex search](http://jlebl.wordpress.com/2011/01/13/vim-evince-and-forward-and-backward-latex-synctex-search/)
- [Synctex support for Vim and Evince through DBus](https://github.com/peder2tm/sved)

evince で forward and inverse search を使用するには LaTeX コマンドに -synctex=1 を追加して

$HOME/.vimrc の g:Tex_ViewRule_pdf を

***

```
let g:Tex_ViewRule_pdf = 'evince'
```

***

に設定します．

$HOME/.vim/ftplugin/latex-suite/compiler.vim を修正します．

***

- $HOME/.vim/ftplugin/latex-suite/compiler.vim

***

```
function! Tex_ForwardSearchLaTeX()
...
  else
    " We're either UNIX or Mac and using a UNIX-type viewer
...
    else
      " We must be using a generic UNIX viewer
      " syntax is: viewer TARGET_FILE LINE_NUMBER SOURCE_FILE

      if viewer =~? "evince"

        let execString = 'silent! !fwdevince' .' '. fnamemodify(Tex_GetMainFileName(), ":p:r") .'.pdf '. line(".") .' '. expand("%:p")

```

<!--       elseif viewer =~? "okular" -->
<!--  -->
<!--         let execString = 'silent! !'.viewer.' - -unique "file:'.mainfnameRoot.'.'.s:target.'\#src:'.line('.').' '.expand("%:p").'"' -->
<!--  -->

```
      elseif viewer =~? "xdvi"

        let execString = 'silent! !'.viewer.' -nofork "'.mainfnameRoot.'.dvi'.'" -sourceposition "'.line('.').' '.expand('%').'"'

      else

        let execString = 'silent! !'.viewer.' "'.mainfnameRoot.'.'.s:target.'" '.line('.').' "'.expand('%').'"'

      endif

    endif
```

***

evince の forward search は

1. Vim を起動して TeX ファイルを開きます．
1. :TTarget pdf
1. \ll でコンパイルして PDF ファイルを作成します．
1. \ls で evince で PDF ファイルをプレビューして forward search を行います．

evince で inverse search をする場合は

```
$ vim --servername hoge hoge.tex
```

または

```
$ gvim --servername hoge hoge.tex
```

として起動します．

evince の inverse search は Ctrl + 左クリックで行います．

evince_backward_search を使って inverse search を行う場合は

```
$ evince_backward_search hoge.pdf "vim --servername hoge -n --remote-silent '+%l<Enter>' %f"
```

として evince_backward_search を起動すると evince から inverse search ができます．

行をハイライトしたい場合は

```
$ evince_backward_search hoge.pdf "vim --servername hoge -n --remote-silent '+%l<Enter>:match Search /\%%ll/' %f"
```

とします．

## [dviout](/dviout/) との連携 (非推奨) {#g7a208c2}

[dviout#forward and inverse search](/dviout/#ycc841a2) を参照．

### forward search {#o9fb00be}

dviout で forward search を使用するには LaTeX コマンドに -src-specials を追加して

$HOME/\_vimrc の g:Tex_ViewRule_dvi を

***

```
let g:Tex_ViewRule_dvi = 'C:/w32tex/dviout/dviout.exe -1'
```

***

に設定します．

[Vim-LaTeX#SumatraPDF との連携 (forward search)#SumatraPDF v1.9.4622 以上の場合](/Vim-LaTeX/#r8a125e8) を参照して $HOME/vimfiles/ftplugin/latex-suite/compiler.vim を修正します．

使い方は

1. GVim を起動して TeX ファイルを開きます．
1. :TTarget dvi
1. \ll でコンパイルして DVI ファイルを作成します．
1. \ls で dviout で DVI ファイルをプレビューして forward search を行います．

### inverse search {#qeb959a7}

```
C:\vim73-kaoriya-win32\gvim.exe^s -n --remote-silent +%d "%s"
```

dviout の inverse search は ダブルクリックで行います．

## pxdvi との連携 (forward and inverse search) (非推奨) {#e36989d2}

pxdvi で forward and inverse search を使用するには LaTeX コマンドに -src-specials を追加して

$HOME/.vimrc の g:Tex_UseEditorSettingInDVIViewer と g:Tex_ViewRule_dvi を

***

```
let g:Tex_UseEditorSettingInDVIViewer = 1
let g:Tex_ViewRule_dvi = 'pxdvi -watchfile 1 -editor "vim --servername src-specials -n --remote-silent +\%l \%f"'
```

***

に設定します．

[Evince との連携 (forward and inverse search)](/Vim-LaTeX/#j6ff1448) を参照して $HOME/.vim/ftplugin/latex-suite/compiler.vim を修正します．

pxdvi の forward search は

1. Vim を起動して TeX ファイルを開きます．
1. :TTarget dvi
1. \ll でコンパイルして DVI ファイルを作成します．
1. \ls で pxdvi で DVI ファイルをプレビューして forward search を行います．

pxdvi で inverse search をする場合は

```
$ vim --servername src-specials hoge.tex
```

または

```
$ gvim --servername src-specials hoge.tex
```

として起動します．

pxdvi の inverse search は Ctrl + 左クリックで行います．

## 関連サイト {#fc8d75eb}

- [Vim-LaTeX (LaTeX-Suite) について(etc.)](http://d.hatena.ne.jp/mFumi/archive?word=*%5btex%5d)
    (mFumi さん)

- [俺がVIM-LaTeXについて書くしかない(etc.)](http://d.hatena.ne.jp/okmount/archive?word=*%5bLatex%5d)
    (沼井 裕二 (okmount) さん)
    - [ある Vim 使いの告白: Vim-Latex ユーザだった俺はなぜ Winshell 3.3x + KeyVi に浮気したか](http://d.hatena.ne.jp/okmount/20100927/)
- [Vim : いわにぃのブログ](http://blog.livedoor.jp/ti5942/archives/cat_225413.html)
- [MacTex + Vim-LaTeX で Mac の TeX 環境を整える](http://shkh.hatenablog.com/entry/2012/04/30/214107)
- [Open pdf to the current location in a LaTeX ](http://vim.wikia.com/wiki/Open_pdf_to_the_current_location_in_a_LaTeX_file)
- [Newest &#39;vim&#39; Questions - TeX - LaTeX - Stack Exchange](http://tex.stackexchange.com/questions/tagged/vim)
- [vim 快適な論文執筆環境の整備 -その2-](http://kuni255.blogspot.jp/2011/12/vim-2.html)
- [Vim-LaTeXの導入](http://gajumaru.ddo.jp/wordpress/?p=359)
- [vim-latex 操作まとめ](http://blog.livedoor.jp/itym/archives/332261.html)
- [Windows の VIM-Latex で補完](http://d.hatena.ne.jp/k3k1/20110227/1298775822)
- [VIM-LaTeXでレポートを書いて思ったこと。](http://d.hatena.ne.jp/toguro2011/20110124/1295866955)
- [Windows×Tex×USB×Vim](http://d.hatena.ne.jp/firepig/20110118)
- [Sumatra PDF viewerがLaTeX用によさげ](http://d.hatena.ne.jp/Rion778/20091127)
- [Vim-LaTeXを書き換え](http://hidehiroyokota.wordpress.com/2011/01/26/rewriting-vim-latex-gotoerrorlocation/)
- [Macはじめました。: ターミナルからQuick Lookする方法](http://lastarrow.tumblr.com/post/34790484391/mac-quick-look)
- [偽Vim使いがLaTeXを使い始めた on Mac](http://shkh.hatenablog.com/entry/2012/04/30/214107)
- [Mac上のVim-LaTeXでいい感じにPDFへコンパイルする設定](http://anond.hatelabo.jp/20110823180114)
- [Ubuntu 10.04 で Vim-LaTeX 【UTF-8断念】](http://yozorabiyori.blog116.fc2.com/blog-entry-231.html) &amp; [dvipdfmx でのエラー](http://yozorabiyori.blog116.fc2.com/blog-entry-232.html)
    (ひでたそさん)

- \[[vim-LaTeX\]記事一覧 - c⌒っ_д\_)っ←のや](http://d.hatena.ne.jp/noya/archive?word=%2A%5Bvim-LaTeX%5D)
- [VIM-LaTeX 良いかも](http://alohakun.blog7.fc2.com/blog-entry-60.html)
    (若槻 俊宏 (あろは) さん)

- [GVimのLatex用プラグイン「LaTeX-Suite」のインストール](http://d.hatena.ne.jp/hisomura/20111023/1319378823)
- [VIM-LaTeX で jbibtex を使う．](http://ushiolab.sys.es.osaka-u.ac.jp/~kanazawa/main/tips.html#vim_tex)/[VIM-LaTeX で警告を抑制する．](http://ushiolab.sys.es.osaka-u.ac.jp/~kanazawa/main/tips.html#vim_warn)/[vimspell を使う．](http://ushiolab.sys.es.osaka-u.ac.jp/~kanazawa/main/tips.html#vim_spell)
- [Vim + VIM-LaTeX で TeX](http://www.c.csce.kyushu-u.ac.jp/kb/wiki/index.php?TeX%2FWindows%BE%E5%A4%C7%A4%CETeX%CA%D4%BD%B8%B4%C4%B6%AD#ge0a5c12)
- ["LaTeX Font Warning" vim-latex](http://ggutter.blogspot.com/2009/05/latex-font-warning-vim-latex.html)
- [MacPortsからインストールしたTex環境とMacVimの組合せでvim-latexを使う設定](http://vim.g.hatena.ne.jp/y_yanbe/20080918/1221724545)
- [Vim+LaTeX on Linux - NLPWiki](https://facwiki.cs.byu.edu/nlp/index.php/Vim%2BLaTeX_on_Linux)
- [Vim LaTeX/Skim](http://mactex-wiki.tug.org/wiki/index.php/SyncTeX#Vim_LaTeX.2FSkim)
- [MacVim won't run bibtex (or compile as necessary to clear warnings) with \ll shortcut](http://superuser.com/questions/257007/macvim-wont-run-bibtex-or-compile-as-necessary-to-clear-warnings-with-ll-shor)
- [Vim+LaTeXのコンパイル環境の決定版](http://blomott.mobi/rubyneko/entry%2CKr4pdneXf4dr7AHIqedeTQ%2C%2C%2C%2C.html)
    <!-- -[[Vim+LaTeXのコンパイル環境の決定版 [Internet Archive]:http://web.archive.org/web/20090129134051/http://ujihisa.nowa.jp/entry/3a8fe06cc1]] -->

- [VIM-LaTeX (LaTeX-suite) でその場でCompiling ruleを変更する方法](http://blomott.mobi/rubyneko/entry%2CMsb5ghfnuZDarqhKxZq2rw%2C%2C%2C%2C.html)
- [latex-suite + beamerで快適folding](http://blomott.mobi/rubyneko/entry%2CshuWakaAb79Gq-szi9seUw%2C%2C%2C%2C.html)
- [c. 256色日和](https://sites.google.com/site/zrexv5te/kyoryu/sl-c760/256colorcrazy)
- [latexSuite.vimの便利キーAlt-iをなんとかして使う (おまけあり)](http://blomott.mobi/rubyneko/entry%2C3nk1xJT90ncRaXRp_2AbUQ%2C%2C%2C%2C.html)
    <!-- -[[latexSuite.vimの便利キーAlt-iをなんとかして使う (おまけあり) [Internet Archive]:http://web.archive.org/web/20090224044204/http://ujihisa.nowa.jp/archive/2008/09/]] -->
    <!-- -[[ここ最近のLaTeX + Vimに関する自分のエントリをまとめてみる:http://blomott.mobi/rubyneko/entry%2CIfbEFfNcBLSRV2Br5_OaZw%2C%2C%2C%2C.html]] -->

- [vimでtexで$aaa$みたいなのの入力をラクにする設定](http://blomott.mobi/rubyneko/entry%2CT3G5eJNLL7aaGFAJadDmAA%2C%2C%2C%2C.html)
- [VIM-LaTeXを試してみた](http://blomott.mobi/rubyneko/entry%2CmwrzbK9nMSYU9M3Qf8c2kA%2C%2C%2C%2C.html), [VIM-LaTeXを試してみた (2)](http://blomott.mobi/rubyneko/entry%2CQiT80vPzE-sOY7Xz_P8gjQ%2C%2C%2C%2C.html)
- [memo/vim-LaTex \[Internet Archive\]](http://web.archive.org/web/20050627163954/www.ss.ics.tut.ac.jp/noya/index.php?%5b%5bmemo/vim-LaTex%5d%5d)

[^1]: WikiPedia.ja:WTFPL を参照．
