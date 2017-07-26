---
title: "gedit"
url: "/gedit/"
date: 2011-10-30T08:45:20Z
pukiwiki: "gedit"
---

# gedit

## [gedit](https://wiki.gnome.org/Apps/Gedit) {#c704b7fa}

<!-- #ref(https://git.gnome.org/browse/gedit/plain/pixmaps/gedit-logo.png,right,around,nolink,gedit) -->

***

***

## gedit とは {#s7f61b9d}

gedit は GNOME 公式のテキストエディタです．

- [gedit](https://wiki.gnome.org/Apps/Gedit)
- [https://wiki.gnome.org/action/show/Apps/Gedit](https://wiki.gnome.org/action/show/Apps/Gedit)

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

Windows, macOS, Linux

### License {#bf49560f}

[GPLv2](https://git.gnome.org/browse/gedit/tree/COPYING)

### リリース情報/ChangeLog {#z39e4e65}

- [gedit - GNOME Text Editor](https://git.gnome.org/browse/gedit/) GNOME GIT source code repository
    - [https://git.gnome.org/browse/gedit/refs/tags](https://git.gnome.org/browse/gedit/refs/tags)
    - [log](https://git.gnome.org/browse/gedit/log/)

### 派生版 {#k13d1526}

- [pluma](https://github.com/mate-desktop/pluma)
- [xed](https://github.com/linuxmint/xed)

## プラグイン {#c01f900c}

- [geditのプラグイン : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/gedit%E3%81%AE%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3)
- [LaTeX入門 : いわにぃのブログ](http://blog.livedoor.jp/ti5942/tag/LaTeX%E5%85%A5%E9%96%80)

を参照．

### [gedit-latex](https://wiki.gnome.org/Apps/Gedit/LaTeXPlugin) {#p2206363}

- [https://wiki.gnome.org/Apps/Gedit/LaTeXPlugin](https://wiki.gnome.org/Apps/Gedit/LaTeXPlugin)
- [https://git.gnome.org/browse/gedit-latex/](https://git.gnome.org/browse/gedit-latex/)
- [http://ftp.gnome.org/pub/GNOME/sources/gedit-latex/](http://ftp.gnome.org/pub/GNOME/sources/gedit-latex/)
- [https://aur.archlinux.org/packages/gedit-latex/](https://aur.archlinux.org/packages/gedit-latex/)

gedit-latex は gedit で LaTeX の文書作成を簡単にできるようにするためのプラグインです．

\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の LaTeX Plugin にチェックをいれます．

LaTeX Plugin の \[設定(P)\] で LaTeX Plugin で使用する Tools の設定ができます．

Tools の項目の LaTeX → PDF を選択して \[プロパティ(P)\] をクリックします．

LaTeX → PDF はデフォルトでは

```
rubber --inplace --maxerr -1 --short --force --warn all --pdf "$filename"
gvfs-open "$shortname.pdf"
```

に設定されています．

これらを \[削除(R)\] して

[ptex2pdf](/ptex2pdf/) を使用する場合は

```
ptex2pdf -u -l -ot '-synctex=1' "$filename"
```

Latexmk を使用する場合は

```
latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$filename"
```

を \[追加(A)\] して設定します．

出力した PDF ファイルを表示するようにしたい場合は

```
 evince "$shortname.pdf"
```

も \[追加(A)\] してください．

LaTeX → PDF は \[ツール(T)\]-\[LaTeX → PDF\] で実行できます．

\[表示(V)\]-\[ボトムパネル(B)\] の \[Tools\] タブをクリックすると Job (処理状況) が表示されます．

forward and inverse search が必要な場合は SyncTeX プラグインを使用してください．

### [gedit-plugins (SyncTeX)](https://git.gnome.org/browse/gedit-plugins/tree/plugins/synctex) {#uc9a113c}

- [https://git.gnome.org/browse/gedit-plugins/tree/plugins/synctex](https://git.gnome.org/browse/gedit-plugins/tree/plugins/synctex)
    <!-- -https://github.com/jaliste/gedit-synctex-plugin -->

- [SyncTeX による検索](https://help.gnome.org/users/evince/stable/synctex-search.html.ja)

SyncTeX プラグインは gedit-plugins に収録されています．

SyncTeX プラグインを使用すると gedit と Evince の間で forward and inverse search ができます．

\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の SyncTeX にチェックをいれます．

forward search は gedit で Ctrl+Alt+F または Ctrl + 左クリックを使用すると Evince の該当行にジャンプします．

inverse search は Evince で Ctrl + 左クリックを使用すると gedit の該当行にジャンプします．

gedit のメニューから \[ツール(T)\]-\[Forward Search\] を実行してエラーメッセージが出力される場合は
/usr/lib/gedit/plugins/synctex/synctex.py または
/usr/lib64/gedit/plugins/synctex/synctex.py を
[最新版の synctex.py](https://git.gnome.org/browse/gedit-plugins/plain/plugins/synctex/synctex/synctex.py) で上書きすれば
forward and inverse search が動作するかもしれません．

### [gedit-plugins (Code comment)](https://git.gnome.org/browse/gedit-plugins/tree/plugins/codecomment) {#q8313fab}

- [https://git.gnome.org/browse/gedit-plugins/tree/plugins/codecomment](https://git.gnome.org/browse/gedit-plugins/tree/plugins/codecomment)

Code comment プラグインは gedit-plugins に収録されています．

Code comment プラグインを使用するとコメントアウト，コメントアウトの解除ができます．

\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の Code comment にチェックをいれます．

- [geditのプラグイン： Code comment](http://blog.livedoor.jp/ti5942/archives/7584204.html)

### [gedit-plugins (Bracket Completion)](https://git.gnome.org/browse/gedit-plugins/tree/plugins/bracketcompletion) {#af44b88e}

- [https://git.gnome.org/browse/gedit-plugins/tree/plugins/bracketcompletion](https://git.gnome.org/browse/gedit-plugins/tree/plugins/bracketcompletion)

Bracket Completion プラグインは gedit-plugins に収録されています．

Bracket Completion プラグインを使用すると閉じかっこを自動的に追加してくれます．

\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の Bracket Completion にチェックをいれます．

### コードスニペット {#t852fd66}

コードスニペットは，よく使用する文字列をすばやく挿入するためのプラグインです．

\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の コードスニペットにチェックをいれます．

\[ツール(T)\]-\[スニペットの管理...\] からコードスニペットの設定ができます．

### 外部ツール {#qa44ee46}

外部ツールは，外部コマンドと Shell スクリプトを実行するためのプラグインです．

\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の 外部ツールにチェックをいれます．

\[ツール(T)\]-\[外部ツールの管理...\] から外部ツールの設定ができます．

ツール(T): で \[＋\] をクリックするとツールが追加できます．

編集(E): の項目にシェルスクリプトを追加します．

適用範囲(A): で All Languages から LaTeX に変更します．

\[ツール(T)\]-\[外部ツール\] から設定した外部ツールを実行できます．

\[表示(V)\]-\[ボトムパネル(B)\] の \[Shell Output\] タブをクリックすると処理状況が表示されます．

#### pdfupLaTeX {#x4f1ba2c}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
ptex2pdf -u -l -ot '-synctex=1' "$GEDIT_CURRENT_DOCUMENT_NAME"
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

#### pLaTeX-ng {#m6f8fa02}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
platex-ng -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME"
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

#### Latexmk-upLaTeX-pdfdvi {#t17eb179}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-upLaTeX-pdfps {#p3caf947}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/' -e '$ps2pdf=q/ps2pdf %O %S %D/' -norc -gg -pdfps "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-pLaTeX-ng {#s063e57a}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$pdflatex=q/platex-ng %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdf "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-pdfLaTeX {#q7311d5c}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$pdflatex=q/pdflatex %O -synctex=1 %S/' -e '$bibtex=q/bibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/makeindex %O -o %D %S/' -norc -gg -pdf "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-LuaLaTeX {#gd49f6fd}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$lualatex=q/lualatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdflua "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-LuaJITLaTeX {#of7ecadb}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$lualatex=q/luajitlatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdflua "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Latexmk-XeLaTeX {#s2321b30}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$xelatex=q/xelatex %O -synctex=1 %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdfxe "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Evince {#t53bc494}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
synctex view -i $GEDIT_CURRENT_LINE_NUMBER:0:"$GEDIT_CURRENT_DOCUMENT_NAME" -o "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf" -x "evince -i %{page+1} %{output}"
```

***

#### fwdevince {#s41c2ddc}

fwdevince は Evince/fwdevince の fwdevince を使用します．

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
zathura -x "gedit "%{input}" +%{line}" --synctex-forward $GEDIT_CURRENT_LINE_NUMBER:0:"$GEDIT_CURRENT_DOCUMENT_NAME" "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
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

#### TeXworks {#b3f685e3}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
texworks "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### TeXstudio {#u27bd777}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
texstudio --pdf-viewer-only "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
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

#### Mozilla Firefox (PDF.js) {#h50b5c23}

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
