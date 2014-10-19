---
title: "Vim-LaTeX"
url: "/Vim-LaTeX/"
date: 2012-11-14T06:27:16Z
pukiwiki: "Vim-LaTeX"
---

# Vim-LaTeX

[Vim](/Vim/) > Vim-LaTeX (LaTeX-Suite)

<!-- このページをメンテナンスしてくださっているかたへ： -->
<!-- いつもありがとうございます。次のようなメールをいただきましたので， -->
<!-- コメントとして付けておきます。 -->
<!--  -->
<!-- I add some little stuff in .vimrc to make Vim_LaTex + Quick_build + -->
<!-- Forward_search available. -->
<!-- This would smooth the annoy when a raw hand get in vim from texmaker -->
<!-- or kile, like me. -->
<!--  -->
<!-- let g:Tex_ViewRule_pdf = ‘okular –unique’ -->
<!-- let g:Tex_AutoFolding = 0 -->
<!-- :nnoremap <F2> :w<CR>:call Tex_RunLaTeX()<CR>:call Tex_ViewLaTeX()<CR> -->
<!-- :nnoremap <F3> :w<CR>:call Tex_RunLaTeX()<CR>:call Tex_ForwardSearchLaTeX()<CR> -->
<!--  -->
<!-- Then in okular, choose setting-configure okular-editor, -->
<!--  -->
<!-- Editor: Custom Text Editor -->
<!--  -->
<!-- Command: gvim –remote-silent +%l %f -->
<!--  -->
<!-- Now I can  use F2 to see the output and F3 to get where I am editing. -->
<!--  -->
<!-- P.S. I have tried forwardsearch with zathura and evince, it doesn’t -->
<!-- work for me. Does it work for you? -->
<!--  -->
<!-- P.P.S the \ll \lv in visual mode save me a lot of time debugging and -->
<!-- it is easy to handle for a new vim_texer just like me. I guess it -->
<!-- would help the other beginners, too. -->

## [Vim-LaTeX (LaTeX-Suite)](http://vim-latex.sourceforge.net/) → 問題が発生する場合は [tex.vim](/Vim/tex.vim/) + LaTeX Box + [quickrun](/quickrun/) + [neocomplete &amp; neosnippet](/neocomplete/) を使用する {#z8e30b5a}

<img src="http://vim-latex.sourceforge.net/vim-latex.gif" alt="Vim-LaTeX" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

<div style="clear:both"></div>

## Vim-LaTeX とは {#q4aed643}

Vim-LaTeX は [Vim](/Vim/) で LaTeX ドキュメントを編集，コンパイル，プレビューするためのプラグインです．<br>

- [VIM-LaTeX](http://vim-latex.sourceforge.net/) (公式サイト)
    - [Manual, LaTeX Reference, Tutorial](http://vim-latex.sourceforge.net/manual.shtml)
    - [FAQ](http://vim-latex.sourceforge.net/faq.shtml)
    - [Features](http://vim-latex.sourceforge.net/features.shtml)
    - [Screenshots](http://vim-latex.sourceforge.net/screenshots.shtml)
        <!-- -[[micheljansen/vim-latex · GitHub:https://github.com/micheljansen/vim-latex]] -->
        <!-- -[[gerw/vim-latex-suite · GitHub:https://github.com/gerw/vim-latex-suite]] -->

### License {#v798753a}

[VIM ライセンス](http://vim-latex.sourceforge.net/documentation/latex-suite/) ([日本語訳](https://sites.google.com/site/vimdocja/uganda-html))

### ChangeLog {#ye1a925a}

- [http://sourceforge.net/p/vim-latex/vim-latex/ci/master/tree/](http://sourceforge.net/p/vim-latex/vim-latex/ci/master/tree/)
    - [コミットログ](http://sourceforge.net/p/vim-latex/vim-latex/ci/master/log/)

## [不具合](http://sourceforge.net/tracker/?group_id=52322&atid=466456) {#df88e09f}

### MacVim-KaoriYa を使用して Vim-LaTeX でノーマルモードに入る時に自動で IME がオフになる機能を有効にするとインサートモードでの日本語入力がおかしくなる → [Karabiner を使って IME をノーマルモードで必ずオフにする](http://rcmdnk.github.io/blog/2013/06/20/computer-mac-keyremap4macbook-vim/) {#p586f5da}

### MacVim-KaoriYa で Vim-LaTeX を使用すると日本語入力が中断される → $HOME/.vim/gvimrc に set imdisable を記述して MacVim メニューの「環境設定」「詳細」の「インラインインプットメソッドを使用する」のチェックをはずす {#qac1e623}

- [Issue 30 - macvim-kaoriya -IM挿入モードの中断 - MacVim KaoriYa - Google Project Hosting](https://code.google.com/p/macvim-kaoriya/issues/detail?id=30) → $HOME/.vim/gvimrc に set imdisable

### Linux の GVim で Vim-LaTeX を使用する場合に発生する日本語入力に関する不具合 → ソースコードの修正またはコンソール版の Vim を使用する {#g843a69b}

Linux の GVim で Vim-LaTeX を使用すると日本語入力に問題が発生します．<br>
GVim の on-the-spot の実装に問題があるようです．<br>

- [http://www.bookshelf.jp/2ch/unix/1232035011.html#45](http://www.bookshelf.jp/2ch/unix/1232035011.html#45)
- [http://www.bookshelf.jp/2ch/unix/1258278511.html#366](http://www.bookshelf.jp/2ch/unix/1258278511.html#366)
- [https://code.google.com/p/vim/source/browse/src/mbyte.c](https://code.google.com/p/vim/source/browse/src/mbyte.c)

### CTRL-J が使えない → [https://github.com/vim-jp/issues/issues/523#issuecomment-35015892](https://github.com/vim-jp/issues/issues/523#issuecomment-35015892) {#v27fb866}

- [vim-latexについて · Issue #523 · vim-jp/issues · GitHub](https://github.com/vim-jp/issues/issues/523)

### \int　や　{\pi} という表示が白く変換して表示される → [https://github.com/vim-jp/issues/issues/529#issuecomment-35566960](https://github.com/vim-jp/issues/issues/529#issuecomment-35566960) {#ee220d93}

- [vim-latexの表示について · Issue #529 · vim-jp/issues · GitHub](https://github.com/vim-jp/issues/issues/529)

## インストール {#sbc289a6}

### NeoBundle を使用して Git リポジトリからインストールする場合 {#adee180e}

[NeoBundle](https://github.com/Shougo/neobundle.vim) を使って Git リポジトリからインストールできます．

```
NeoBundle 'git://git.code.sf.net/p/vim-latex/vim-latex'
```

### 公式サイトのパッケージをインストールする場合 {#g7a904f1}

[http://sourceforge.net/projects/vim-latex/files/](http://sourceforge.net/projects/vim-latex/files/) からファイルをダウンロードします．

#### Windows の場合 {#ob7fb0a1}

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

を配置します．

#### OS X, Linux の場合 {#w3182b39}

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

を配置します．

## 設定 {#bdb0aee6}

### Windows {#eb85b35a}

[Vim &mdash; KaoriYa](http://www.kaoriya.net/software/vim) または [vim UTF-8日本語版 - fudist](https://sites.google.com/site/fudist/Home/vim-nihongo-ban) をインストールします．

$HOME/vimfiles/vimrc に設定を記述します．<br>

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
let g:Tex_MultipleCompileFormats='dvi,pdf'
"let g:Tex_FormatDependency_pdf = 'pdf'
let g:Tex_FormatDependency_pdf = 'dvi,pdf'
"let g:Tex_FormatDependency_pdf = 'dvi,ps,pdf'
let g:Tex_FormatDependency_ps = 'dvi,ps'
let g:Tex_CompileRule_pdf = 'ptex2pdf -u -l -ot "-kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode -file-line-error-style" $*'
"let g:Tex_CompileRule_pdf = 'pdflatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = 'lualatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = 'luajitlatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = 'xelatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = 'ps2pdf.exe $*.ps'
let g:Tex_CompileRule_ps = 'dvips -Ppdf -o $*.ps $*.dvi'
let g:Tex_CompileRule_dvi = 'uplatex -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
let g:Tex_BibtexFlavor = 'upbibtex'
let g:Tex_MakeIndexFlavor = 'mendex -U $*.idx'
let g:Tex_ViewRule_pdf = 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n -c \":RemoteOpen +\%l \%f\""'
"let g:Tex_ViewRule_pdf = 'texworks'
"let g:Tex_ViewRule_pdf = 'rundll32 shell32,ShellExec_RunDLL firefox -new-window'
"let g:Tex_ViewRule_pdf = 'powershell -Command "& {$p = [System.String]::Concat(''"""'',[System.IO.Path]::GetFullPath($args),''"""'');Start-Process chrome -ArgumentList (''--new-window'',$p)}"'
"let g:Tex_ViewRule_pdf = 'pdfopen --rxi --file'
```

***

SumatraPDF の inverse search については [Vim-LaTeX#SumatraPDF との連携 (inverse search)](/Vim-LaTeX/#nefa91ff) を参照してください．

### OS X {#aecb2dfb}

動作未確認です．<br>

[MacVim-KaoriYa](https://code.google.com/p/macvim-kaoriya/) をインストールします．

$HOME/.vim/vimrc に設定を記述します．<br>

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
let g:Tex_MultipleCompileFormats='dvi,pdf'
"let g:Tex_FormatDependency_pdf = 'pdf'
let g:Tex_FormatDependency_pdf = 'dvi,pdf'
"let g:Tex_FormatDependency_pdf = 'dvi,ps,pdf'
let g:Tex_FormatDependency_ps = 'dvi,ps'
let g:Tex_CompileRule_pdf = '/usr/texbin/ptex2pdf -u -l -ot "-synctex=1 -interaction=nonstopmode -file-line-error-style" $*'
"let g:Tex_CompileRule_pdf = '/usr/texbin/pdflatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = '/usr/texbin/lualatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = '/usr/texbin/luajitlatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = '/usr/texbin/xelatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = '/usr/local/bin/ps2pdf $*.ps'
let g:Tex_CompileRule_ps = '/usr/texbin/dvips -Ppdf -o $*.ps $*.dvi'
let g:Tex_CompileRule_dvi = '/usr/texbin/uplatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
let g:Tex_BibtexFlavor = '/usr/texbin/upbibtex'
let g:Tex_MakeIndexFlavor = '/usr/texbin/mendex -U $*.idx'
let g:Tex_UseEditorSettingInDVIViewer = 1
let g:Tex_ViewRule_pdf = '/usr/bin/open -a Skim.app'
"let g:Tex_ViewRule_pdf = '/usr/bin/open -a Preview.app'
"let g:Tex_ViewRule_pdf = '/usr/bin/open -a TeXShop.app'
"let g:Tex_ViewRule_pdf = '/Applications/TeXworks.app/Contents/MacOS/TeXworks'
"let g:Tex_ViewRule_pdf = '/Applications/texstudio.app/Contents/MacOS/texstudio --pdf-viewer-only'
"let g:Tex_ViewRule_pdf = '/usr/bin/open -a Firefox.app'
"let g:Tex_ViewRule_pdf = '/usr/bin/open -a "Adobe Reader.app"'
"let g:Tex_ViewRule_pdf = '/usr/bin/open'
```

***

日本語入力に不具合が発生する場合は $HOME/.vim/gvimrc に set imdisable を記述して MacVim メニューの「環境設定」「詳細」の「インラインインプットメソッドを使用する」のチェックをはずします．

***

```
""
"" Vim-LaTeX
""
set imdisable
```

***

set imdisable を設定すると問題が発生する場合は set imdisable を削除してください．<br>

***

bibtexを使うなど，複数回のコンパイルが必要な場合は，「g:Tex_MultipleCompileFormats」オプションを設定する必要があります．例えば，pdfでbibtexを使う場合は，

```
let g:Tex_MultipleCompileFormats = 'pdf'
```

という設定を書き加えます．
参考：[http://superuser.com/questions/257007/macvim-wont-run-bibtex-or-compile-as-necessary-to-clear-warnings-with-ll-sho](http://superuser.com/questions/257007/macvim-wont-run-bibtex-or-compile-as-necessary-to-clear-warnings-with-ll-sho)

### Linux {#f59a6b76}

$HOME/.vim/vimrc に設定を記述します．<br>

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
let g:Tex_MultipleCompileFormats='dvi,pdf'
"let g:Tex_FormatDependency_pdf = 'pdf'
let g:Tex_FormatDependency_pdf = 'dvi,pdf'
"let g:Tex_FormatDependency_pdf = 'dvi,ps,pdf'
let g:Tex_FormatDependency_ps = 'dvi,ps'
let g:Tex_CompileRule_pdf = 'ptex2pdf -u -l -ot "-synctex=1 -interaction=nonstopmode -file-line-error-style" $*'
"let g:Tex_CompileRule_pdf = 'pdflatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = 'lualatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = 'luajitlatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = 'xelatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
"let g:Tex_CompileRule_pdf = 'ps2pdf $*.ps'
let g:Tex_CompileRule_ps = 'dvips -Ppdf -o $*.ps $*.dvi'
let g:Tex_CompileRule_dvi = 'uplatex -synctex=1 -interaction=nonstopmode -file-line-error-style $*'
let g:Tex_BibtexFlavor = 'upbibtex'
let g:Tex_MakeIndexFlavor = 'mendex -U $*.idx'
let g:Tex_UseEditorSettingInDVIViewer = 1
let g:Tex_ViewRule_pdf = 'xdg-open'
"let g:Tex_ViewRule_pdf = 'evince'
"let g:Tex_ViewRule_pdf = 'okular --unique'
"let g:Tex_ViewRule_pdf = 'zathura -s -x "vim --servername synctex -n --remote-silent +\%{line} \%{input}"'
"let g:Tex_ViewRule_pdf = 'qpdfview --unique'
"let g:Tex_ViewRule_pdf = 'texworks'
"let g:Tex_ViewRule_pdf = 'mupdf'
"let g:Tex_ViewRule_pdf = 'firefox -new-window'
"let g:Tex_ViewRule_pdf = 'chromium --new-window'
```

***

[Evince](/Evince/) の forward and inverse search は [Vim-LaTeX#Evince との連携 (forward and inverse search)](/Vim-LaTeX/#j6ff1448) を参照してください．

## 使い方 {#v4639f7b}

詳細は [VIM-LaTeX Manual](http://vim-latex.sourceforge.net/manual.shtml) を参照してください．

### 折りたたみ {#rfb1c8be}

デフォルトでは TeX ファイルを開くと折りたたまれた状態で表示されます．

***

<span style="color:#007F00;background-color:#007F00;"><ins>　</ins></span>[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/200px-Vimlogo.svg.png" alt="welcome home : vim online" width="28" height="28">](http://www.vim.org/)<span style="color:#007F00;background-color:#007F00;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>vim.tex - GVIM1</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#007F00;background-color:#007F00;"></ins>\[ <span style="color:Black;"><strong>◛</strong></span> \]<ins></span><span style="color:#007F00;background-color:#007F00;"></ins>\[ <span style="color:Black;"><strong>▭</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル(F)　 編集(E)　 ツール(T)　 シンタックス(S)　 バッファ(B)　 ウィンドウ(W)　 TeX-Suite　 TeX-Environments　 TeX-Elements　 TeX-Math　 ヘルプ(H)　　　</ins></span><br>

<span style="color:Blue;">%</span><br>

<span style="color:Navy;">&#x2b;--　 7 行: Preamble: \documentclass\[uplatex,12pt\]{jsarticle}---------------------------------------------------------------------------------</span><br>

<span style="color:Magenta;">\begin{document}</span><br>

<span style="color:Navy;">&#x2b;--　46 行:\section{Vim について}-------------------------------------------------------------------------------------------------------</span><br>

<span style="color:Magenta;">\end{document}</span><br>

***

TeX ファイルを開くときに自動的に折りたたみを行う機能を off にするには $HOME/vimfiles/vimrc または $HOME/.vim/vimrc に

```
let g:Tex_AutoFolding = 0
```

を追加します．

カーソル位置の折りたたみを開く場合は &lt;Space> で代用できます．

Vim-LaTeX では，折りたたみに関しては以下の 2 つの操作を覚えていれば OK です．

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">メニュー [TeX-Suite]</th><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td></td><td>&lt;Space&gt;</td><td>カーソル位置の折りたたみを開いてカーソルを1つ進める</td></tr>
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

プレビューはファイルの自動更新機能をサポートしているビューアを使用します．<br>
\ll でコンパイルして \lv でビューアを起動すれば，その後は \lv をもう一度タイプしなくても OK です．<br>
TeX ファイルを保存して \ll でコンパイルすれば，自動的に再描画してくれます．<br>

### コンパイル・プレビュー対象フォーマットの変更 {#w8864fda}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">メニュー [TeX-Suite]</th><th style="color:#FFF;background-color:#070;text-align:center">コマンドラインモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>Target Format</td><td>:TTarget pdf</td><td>コンパイル・プレビュー対象フォーマットを PDF に変更</td></tr>
> <tr><td>Target Format</td><td>:TTarget ps</td><td>コンパイル・プレビュー対象フォーマットを PS に変更</td></tr>
> <tr><td>Target Format</td><td>:TTarget dvi</td><td>コンパイル・プレビュー対象フォーマットを DVI に変更</td></tr>
> </tbody>
> </table>
>

編集中にコンパイル・プレビュー対象フォーマットを変更することができます．

OS X ではデフォルトの対象フォーマットは PDF です．その他の OS ではデフォルトの対象フォーマットは DVI です．

デフォルトの対象フォーマットを PDF に変更する場合は $HOME/vimfiles/vimrc または $HOME/.vim/vimrc に

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

Smart Quotes を off にするには $HOME/vimfiles/vimrc または $HOME/.vim/vimrc に

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

$HOME/vimfiles/vimrc の g:Tex_ViewRule_pdf を [Vim-LaTeX#SumatraPDF との連携 (inverse search)](/Vim-LaTeX/#nefa91ff) を参照して設定します．

使い方は

1. GVim を起動して TeX ファイルを開きます．
1. :TTarget pdf
1. \ll でコンパイルして PDF ファイルを作成します．
1. \ls で SumatraPDF で PDF ファイルをプレビューして forward search を行います．

### SumatraPDF を前面に表示したい場合 {#r8a125e8}

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
  if (has('win32') && (viewer =~? '^ *yap\( \|$\)'))

    let execString = 'silent! !start '. viewer.' -s '.line('.').expand('%').' '.mainfnameRoot

  elseif (has('win32') && (viewer =~? "sumatrapdf"))

    let relativeFile = substitute(expand("%:p"), Tex_GetMainFileName(':p:h').'/', '','')
    let execString = 'silent! !start ' . viewer . ' -reuse-instance "' .mainfnameFull . '.' . s:target .'" -forward-search "' . relativeFile . '" ' . line('.')

...
```

***

### SumatraPDF を前面に表示したくない場合 {#g49fe34c}

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

[$HOME/vimfiles/ftplugin/latex-suite/compiler.vim](http://vim-latex.git.sourceforge.net/git/gitweb.cgi?p=vim-latex/vim-latex;a=blob;f=ftplugin/latex-suite/compiler.vim) を修正します．

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
  if (has('win32') && (viewer =~? '^ *yap\( \|$\)'))

    let execString = 'silent! !start '. viewer.' -s '.line('.').expand('%').' '.mainfnameRoot

  elseif (has('win32') && (viewer =~? "sumatrapdf"))

    let relativeFile = substitute(expand("%:p"), Tex_GetMainFileName(':p:h').'/', '','')
    let execString = 'silent! !fwdsumatrapdf.exe '.'"'.mainfnameFull.'.'.s:target.'" "'.relativeFile.'" '. line('.')

...
```

***

## [SumatraPDF](/SumatraPDF/) との連携 (inverse search) {#nefa91ff}

SumatraPDF で inverse search を使用するには LaTeX コマンドに -synctex=1 を追加します．<br>
Vim-LaTeX で SumatraPDF の inverse search をする場合は，tex.vim, quickrun, LaTeX Box の設定とは異なる記述が必要です．<br>

Vim-LaTeX の場合 inverse search は SumatraPDF の \[☰\]-\[設定(S)\]-\[オプション(O)...\] の逆順検索コマンドラインの設定に

```
"C:\vim\gvim.exe" -n -c ":RemoteOpen +%l %f"
```

です．<br>
設定ファイルから SumatraPDF の -inverse-search コマンドラインオプションで指定することもできます．<br>
gvim.exe が :echo $VIM で表示されるディレクトリに存在する場合 $HOME/vimfiles/vimrc の g:Tex_ViewRule_pdf を

***

```
let g:Tex_ViewRule_pdf = 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n -c \":RemoteOpen +\%l \%f\""'
```

***

に設定します．

SumatraPDF の inverse search は ダブルクリックで行います．

## Evince との連携 (forward and inverse search) {#j6ff1448}

- Evince/fwdevince
- [Vim, Evince and forward and backward LaTeX synctex search](http://jlebl.wordpress.com/2011/01/13/vim-evince-and-forward-and-backward-latex-synctex-search/)
- [Synctex support for Vim and Evince through DBus](https://github.com/peder2tm/sved)

evince で forward and inverse search を使用するには LaTeX コマンドに -synctex=1 を追加して

$HOME/.vim/vimrc の g:Tex_ViewRule_pdf を

***

```
let g:Tex_ViewRule_pdf = 'evince'
```

***

に設定します．

$HOME/.vim/ftplugin/latex-suite/compiler.vim を修正します．<br>
fwdevince は Evince/fwdevince の fwdevince を使用します．<br>

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

## 関連サイト {#fc8d75eb}

- [Empty bibliography generated by Vim-LaTeX in Ubuntu 14.04](http://tex.stackexchange.com/questions/176202/empty-bibliography-generated-by-vim-latex-in-ubuntu-14-04)
- [VimでTeXを書く](http://haru.moo.jp/2014/02/vim%E3%81%A7tex%E3%82%92%E6%9B%B8%E3%81%8F/)
- [latexmkとvim-quickrunとneosnippetでVim-LaTeXを卒業しよう](http://rutto-ysgr.net/post/75144999302/latexmk-vim-quickrun-neosnippet-vim-latex)
- [Scheme書くためにVimの環境を整えたメモ](http://pastak.hatenablog.com/entry/2013/10/30/235525)
- [MacPortsでLaTeXの導入とvim-latex](http://d.hatena.ne.jp/adragoona/20131022/1382451627)
- [MacVimでVim-LaTeXを使えるようにした。](http://d.hatena.ne.jp/tnil/20130827/1377615499)
- [http://masa.o.oo7.jp/vimrc.txt](http://masa.o.oo7.jp/vimrc.txt)
- [TeXLive 2012＋Vim-LaTeXでてふてふする on Fedora 17](http://masanoriprog.blogspot.jp/2013/01/texlive-2012vim-latex-on-fedora-17.html)
- [Vim-LaTeX (LaTeX-Suite) について(etc.)](http://d.hatena.ne.jp/mFumi/archive?word=*%5btex%5d)
    (mFumi さん)

- [俺がVIM-LaTeXについて書くしかない(etc.)](http://d.hatena.ne.jp/okmount/archive?word=*%5bLatex%5d)
    (沼井 裕二 (okmount) さん)

- [Vim : いわにぃのブログ](http://blog.livedoor.jp/ti5942/archives/cat_225413.html)
- [macvim+kaoriya+vimlatex](http://fbncc112358.blogspot.jp/2013/03/osxwsemacsviperyatexlatexmaclionosxwsmo.html)
- [MacTex + Vim-LaTeX で Mac の TeX 環境を整える](http://shkh.hatenablog.com/entry/2012/04/30/214107)
- [Open pdf to the current location in a LaTeX ](http://vim.wikia.com/wiki/Open_pdf_to_the_current_location_in_a_LaTeX_file)
- [Newest &#39;vim&#39; Questions - TeX - LaTeX - Stack Exchange](http://tex.stackexchange.com/questions/tagged/vim)
- [http://tex.stackexchange.com/questions/tagged/latex-suite](http://tex.stackexchange.com/questions/tagged/latex-suite)
- [vim-latex 操作まとめ](http://blog.livedoor.jp/itym/archives/332261.html)
- [Windows の VIM-Latex で補完](http://d.hatena.ne.jp/k3k1/20110227/1298775822)
- [Sumatra PDF viewerがLaTeX用によさげ](http://d.hatena.ne.jp/Rion778/20091127)
- [Vim-LaTeXを書き換え](http://hidehiroyokota.wordpress.com/2011/01/26/rewriting-vim-latex-gotoerrorlocation/)
- [Vim+LaTeX on Linux - NLPWiki](https://facwiki.cs.byu.edu/nlp/index.php/Vim%2BLaTeX_on_Linux)
- [Vim LaTeX/Skim](http://mactex-wiki.tug.org/wiki/index.php/SyncTeX#Vim_LaTeX.2FSkim)
- [MacVim won't run bibtex (or compile as necessary to clear warnings) with \ll shortcut](http://superuser.com/questions/257007/macvim-wont-run-bibtex-or-compile-as-necessary-to-clear-warnings-with-ll-shor)
- [c. 256色日和](https://sites.google.com/site/zrexv5te/kyoryu/sl-c760/256colorcrazy)
