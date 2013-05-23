---
title: "gedit"
url: "/gedit/"
date: 2011-10-30T08:45:20Z
pukiwiki: "gedit"
---

# gedit

## [gedit](http://projects.gnome.org/gedit/) {#c704b7fa}

<img src="http://projects.gnome.org/gedit/images/gedit-logo.png" alt="gedit" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## gedit とは {#s7f61b9d}

gedit は GNOME 公式のテキストエディタです．<br>

- [gedit](http://projects.gnome.org/gedit/)

***

<span style="color:#DAF0FE;background-color:#DAE0FE;"><ins>　　<span style="color:Black;">ファイル(</ins>F<ins>)</span>　 <span style="color:Black;">編集(</ins>E<ins>)</span>　 <span style="color:Black;">表示(</ins>V<ins>)</span>　 <span style="color:Black;">検索(</ins>S<ins>)</span>　 <span style="color:Black;">ツール(</ins>T<ins>)</span>　 <span style="color:Black;">ドキュメント(</ins>D<ins>)</span>　 <span style="color:Black;">ヘルプ(</ins>H<ins>)</span>　　　　　　　　　　　　　</ins></span><br>

```
\documentclass[12pt]{scrartcl}
\usepackage{indentfirst}
\begin{document}
\section{What is gedit?}
gedit is the official text editor of the GNOME desktop environment.

While aiming at simplicity and ease of use, gedit is a powerful general purpose text editor.\par
Currently it features:

\begin{itemize}
  \item Full support for internationalized text (UTF-8)
  \item Configurable syntax highlighting for various languages (C, C++, Java, HTML, XML, Python, Perl and many others)
  \item Undo/Redo
  \item Editing files from remote locations
  \item File reverting
  \item Print and print preview support
  \item Clipboard support (cut/copy/paste)
  \item Search and replace
  \item Go to specific line
  \item Auto indentation
  \item Text wrapping
  \item Line numbers
  \item Right margin
  \item Current line highlighting
  \item Bracket matching
  \item Backup files
  \item Configurable fonts and colors
  \item A complete online user manual
\end{itemize}

gedit features also a flexible plugin system which can be used to dynamically add new advanced features to gedit itself. See the plugins page for more info on the existing plugins.

Go to the screenshots page to see gedit in action!

gedit is released under the GNU General Public License (GPL).
\end{document}
```

***

### 動作環境 {#kd6ded02}

Windows, OS X, Linux

### License {#bf49560f}

[GPLv2](https://git.gnome.org/browse/gedit/tree/COPYING)

### リリース情報/ChangeLog {#z39e4e65}

- [gedit - GNOME Text Editor](https://git.gnome.org/browse/gedit/) GNOME GIT source code repository
    - [refs](https://git.gnome.org/browse/gedit/refs/)
    - [log](https://git.gnome.org/browse/gedit/log/)

## プラグイン {#c01f900c}

- [geditのプラグイン : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/gedit%E3%81%AE%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3)
- [LaTeX入門 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/LaTeX%E5%85%A5%E9%96%80)

を参照．<br>

### [gedit-latex](https://git.gnome.org/browse/gedit-latex/) {#p2206363}

- [https://git.gnome.org/browse/gedit-latex/](https://git.gnome.org/browse/gedit-latex/)
- [http://ftp.gnome.org/pub/GNOME/sources/gedit-latex/](http://ftp.gnome.org/pub/GNOME/sources/gedit-latex/)
- [https://live.gnome.org/Gedit/LaTeXPlugin](https://live.gnome.org/Gedit/LaTeXPlugin)
- [https://aur.archlinux.org/packages/gedit-latex/](https://aur.archlinux.org/packages/gedit-latex/)

gedit-latex は gedit で LaTeX の文書作成を簡単にできるようにするためのプラグインです．<br>
\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の LaTeX Plugin にチェックをいれます．<br>
LaTeX Plugin の \[設定(P)\] で LaTeX Plugin で使用する Tools の設定ができます．<br>
Tools の項目の LaTeX → PDF を選択して \[プロパティ(P)\] をクリックします．<br>

LaTeX → PDF はデフォルトでは

```
rubber --inplace --maxerr -1 --short --force --warn all --pdf "$filename"
gvfs-open "$shortname.pdf"
```

に設定されています．<br>
これらを \[削除(R)\] して<br>

TeX Live 2013 以降に含まれている [ptex2pdf](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/ptex2pdf/ptex2pdf.lua?view=markup) を使用する場合は

```
ptex2pdf -l -ot '-synctex=1' "$filename"
```

Latexmk を使用する場合は

```
latexmk -e '$latex=q/platex -synctex=1/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$filename"
```

を \[追加(A)\] して設定します．<br>
出力した PDF ファイルを表示するようにしたい場合は

```
 evince "$shortname.pdf"
```

も \[追加(A)\] してください．<br>
LaTeX → PDF は \[ツール(T)\]-\[LaTeX → PDF\] で実行できます．<br>
\[表示(V)\]-\[ボトムパネル(B)\] の \[Tools\] タブをクリックすると Job (処理状況) が表示されます．<br>
forward and inverse search が必要な場合は SyncTeX プラグインを使用してください．<br>

### [gedit-plugins (SyncTeX)](https://git.gnome.org/browse/gedit-plugins/tree/plugins/synctex) {#uc9a113c}

- [https://git.gnome.org/browse/gedit-plugins/tree/plugins/synctex](https://git.gnome.org/browse/gedit-plugins/tree/plugins/synctex)
    <!-- -https://github.com/jaliste/gedit-synctex-plugin -->

- [SyncTeX による検索](http://library.gnome.org/users/evince/stable/synctex-search.html.ja)

SyncTeX プラグインは gedit-plugins に収録されています．<br>
SyncTeX プラグインを使用すると gedit と Evince の間で forward and inverse search ができます．<br>
\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の SyncTeX にチェックをいれます．<br>

forward search は gedit で Ctrl+Alt+F または Ctrl + 左クリックを使用すると Evince の該当行にジャンプします．<br>
inverse search は Evince で Ctrl + 左クリックを使用すると gedit の該当行にジャンプします．<br>

gedit の起動時に

```
Traceback (most recent call last):
  File "/usr/lib/gedit/plugins/synctex/synctex.py", line 251, in <lambda>
    self.window.connect("tab-added", lambda window, tab: self.add_helper(tab.get_view(), window)),
  File "/usr/lib/gedit/plugins/synctex/synctex.py", line 276, in add_helper
    helper = SynctexViewHelper(view, window, self)
  File "/usr/lib/gedit/plugins/synctex/synctex.py", line 99, in __init__
    self.update_location()
  File "/usr/lib/gedit/plugins/synctex/synctex.py", line 152, in update_location
    modeline_output_file = self.get_output_file()
  File "/usr/lib/gedit/plugins/synctex/synctex.py", line 118, in get_output_file
    for i in range(min(3,line_count)) + range(max(0,line_count - 3), line_count):
TypeError: unsupported operand type(s) for +: 'range' and 'range'
Traceback (most recent call last):
  File "/usr/lib/gedit/plugins/synctex/synctex.py", line 112, in on_saved_or_loaded
    self.update_location()
  File "/usr/lib/gedit/plugins/synctex/synctex.py", line 152, in update_location
    modeline_output_file = self.get_output_file()
  File "/usr/lib/gedit/plugins/synctex/synctex.py", line 118, in get_output_file
    for i in range(min(3,line_count)) + range(max(0,line_count - 3), line_count):
TypeError: unsupported operand type(s) for +: 'range' and 'range'
```

といったエラーメッセージが出力される場合は /usr/lib/gedit/plugins/synctex/synctex.py を [最新版の synctex.py](https://git.gnome.org/browse/gedit-plugins/plain/plugins/synctex/synctex/synctex.py) で上書きすれば forward and inverse search が動作するようになります．<br>

### [gedit-plugins (Code comment)](https://git.gnome.org/browse/gedit-plugins/tree/plugins/codecomment) {#q8313fab}

- [https://git.gnome.org/browse/gedit-plugins/tree/plugins/codecomment](https://git.gnome.org/browse/gedit-plugins/tree/plugins/codecomment)

Code comment プラグインは gedit-plugins に収録されています．<br>
Code comment プラグインを使用するとコメントアウト，コメントアウトの解除ができます．<br>
\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の Code comment にチェックをいれます．<br>

- [geditのプラグイン： Code comment](http://blog.livedoor.jp/ti5942/archives/7584204.html)

### 外部ツール {#qa44ee46}

外部ツールは，外部コマンドと Shell スクリプトを実行するためのプラグインです．<br>
\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の 外部ツールにチェックをいれます．<br>
\[ツール(T)\]-\[外部ツールの管理...\] から外部ツールの設定ができます．<br>
ツール(T): で \[＋\] をクリックするとツールが追加できます．<br>
編集(E): の項目にシェルスクリプトを追加します．<br>
適用範囲(A): で All Languages から LaTeX に変更します．<br>
\[ツール(T)\]-\[外部ツール\] から設定した外部ツールを実行できます．<br>
Latexmk は Latexmk Version 4.35 で動作確認しています．<br>

#### pdfpLaTeX {#pcd18d0c}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
platex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME" && \
dvipdfmx "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`"
```

***

保存(S):
: 編集中のドキュメント

#### pdfpLaTeX2 {#g8ed96d6}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
platex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME" && \
dvips -Ppdf -z -f "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.dvi" | \
convbkmk -g > "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.ps" && \
ps2pdf "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.ps"
```

***

保存(S):
: 編集中のドキュメント

#### pdfupLaTeX {#x4f1ba2c}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
uplatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME" && \
dvipdfmx "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`"
```

***

保存(S):
: 編集中のドキュメント

#### pdfupLaTeX2 {#k85e2282}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
uplatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME" && \
dvips -Ppdf -z -f "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.dvi" | \
convbkmk -u > "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.ps" && \
ps2pdf "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.ps"
```

***

保存(S):
: 編集中のドキュメント

#### pdfLaTeX {#f6f3d125}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
pdflatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### LuaLaTeX {#dacfdc34}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
lualatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### LuaJITLaTeX {#p2dffd1c}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
luajitlatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### XeLaTeX {#df8a1522}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
xelatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk {#a2b5d8d4}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-pdfpLaTeX {#id6f3d3f}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$latex=q/platex -synctex=1/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-pdfpLaTeX2 {#p2b753e6}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$latex=q/platex -synctex=1/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvips=q/dvips %O -z -f %S | convbkmk -g > %D/' -e '$ps2pdf=q/ps2pdf %O %S %D/' -norc -gg -pdfps "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-pdfupLaTeX {#t17eb179}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$latex=q/uplatex -synctex=1/' -e '$bibtex=q/upbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-pdfupLaTeX2 {#p3caf947}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$latex=q/uplatex -synctex=1/' -e '$bibtex=q/upbibtex/' -e '$makeindex=q/mendex/' -e '$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/' -e '$ps2pdf=q/ps2pdf %O %S %D/' -norc -gg -pdfps "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-pdfLaTeX {#q7311d5c}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$pdflatex=q/pdflatex -synctex=1/' -e '$bibtex=q/bibtex/' -e '$makeindex=q/makeindex/' -norc -gg -pdf "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-LuaLaTeX {#gd49f6fd}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$pdflatex=q/lualatex -synctex=1/' -e '$bibtex=q/bibtexu/' -e '$makeindex=q/texindy/' -norc -gg -pdf "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-LuaJITLaTeX {#of7ecadb}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$pdflatex=q/luajitlatex -synctex=1/' -e '$bibtex=q/bibtexu/' -e '$makeindex=q/texindy/' -norc -gg -pdf "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-XeLaTeX {#s2321b30}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$pdflatex=q/xelatex -synctex=1/' -e '$bibtex=q/bibtexu/' -e '$makeindex=q/texindy/' -norc -gg -xelatex "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### pBibTeX {#h82edb4a}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
pbibtex "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`"
```

***

保存(S):
: 編集中のドキュメント

#### upBibTeX {#if36eff6}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
upbibtex "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`"
```

***

保存(S):
: 編集中のドキュメント

#### Mendex {#p50c6431}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
mendex "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`"
```

***

保存(S):
: 編集中のドキュメント

#### Evince {#t53bc494}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
evince "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### fwdevince {#s41c2ddc}

fwdevince は [Evince - TeX Wiki](/Evince/) の fwdevince を使用します．<br>

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
fwdevince "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf" $GEDIT_CURRENT_LINE_NUMBER "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

#### Okular {#gaa0fcf1}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
okular --unique "file:"`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"#src:$GEDIT_CURRENT_LINE_NUMBER "$GEDIT_CURRENT_DOCUMENT_PATH""
```

***

#### zathura {#db749118}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
zathura -s -x "gedit "%{input}" +%{line}" "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### qpdfview {#ud4fadf3}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
qpdfview --unique ""`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"#src:"$GEDIT_CURRENT_DOCUMENT_NAME":$GEDIT_CURRENT_LINE_NUMBER:0"
```

***

#### PdfViewer {#k6ca6cfc}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
pdfviewer "file:"`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"#src:$GEDIT_CURRENT_LINE_NUMBER "$GEDIT_CURRENT_DOCUMENT_NAME""
```

***

#### TeXworks {#b3f685e3}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
texworks "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### MuPDF {#cdaf098f}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
mupdf "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### Mozilla Firefox (pdf.js) {#h50b5c23}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
firefox -new-window "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### Chrome PDF Viewer {#l9d9720f}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
chromium --new-window "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### acroread {#h5982543}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
acroread "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### pdfopen {#mea51975}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
pdfopen -viewer ar9-tab "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### その他の外部ツールの設定例 {#a704e342}

- [UbuntuにTeX環境 -2-](http://ngc1952.net/archives/1063)
- [tips/Latex - PukiWiki](http://www-nh.scphys.kyoto-u.ac.jp/~asano/index.php?tips%2FLatex)
- [Ubuntuのテキストエディタ（gedit）の「外部ツール」をTeX仕様に](http://pen.agbi.tsukuba.ac.jp/~RStiger/hiki2/?Ubuntu%A4%CE%A5%C6%A5%AD%A5%B9%A5%C8%A5%A8%A5%C7%A5%A3%A5%BF%A1%CAgedit%A1%CB%A4%CE%A1%D6%B3%B0%C9%F4%A5%C4%A1%BC%A5%EB%A1%D7%A4%F2TeX%BB%C5%CD%CD%A4%CB)
- [geditをカスタマイズする。](http://jiy.blog.shinobi.jp/Entry/93/)
- [gedit で tex の呼び出し](http://www.rcai.riken.jp/petadimension/textips.html#texgedit)
- [synctex + gedit + evince](http://www.benwhale.com/blog/2011/06/26/synctex-gedit-evince/)

## 関連リンク {#v8f6d6f7}

- [geditをカスタマイズしてみる](http://d.hatena.ne.jp/rkmathi/20110402/1301733604)
