---
title: "gedit"
url: "/gedit/"
date: 2011-10-30T08:45:20Z
pukiwiki: "gedit"
---

# gedit

## [gedit](https://gedit-text-editor.org/) {#c704b7fa}

<!-- #ref(https://gedit-text-editor.org/images/gedit-icon.png,right,around,nolink,gedit) -->

***

***

## gedit とは {#s7f61b9d}

gedit は使いやすい一般的なテキストエディターです．

- [gedit, a text editor](https://gedit-text-editor.org/)

***

<span style="color:#DAF0FE;background-color:#DAE0FE;"><ins>　<span style="color:Black;">\[開く(O)\]</span> <span style="color:Black;">\[+\]</span>　 　　　　　　　<span style="color:Black;">無題のドキュメント1</span>　　　　　　　　<span style="color:Black;">\[保存(S)\]</span> <span style="color:Black;">\[☰\]</span> <span style="color:Black;">×</span>　</ins></span><br>

```
\documentclass[12pt]{scrartcl}
\usepackage{indentfirst}
\begin{document}
\section{What is gedit?}
gedit is an easy-to-use and general-purpose text editor.\par
Notable Features

\begin{itemize}
  \item Files are opened in tabs
  \item Full support for internationalized text (UTF-8)
  \item Syntax highlighting for lots of languages (Python, Shell, C, C++, HTML, CSS, JavaScript, XML, Markdown and many others)
  \item Configurable fonts and colors
  \item Print and print preview support
  \item Search and replace with support of regular expressions
  \item A side panel with an integrated file browser
  \item Spell-checking
  \item Word auto-completion
  \item Undo/Redo
  \item Auto indentation
  \item Text wrapping
  \item Line numbers
  \item Right margin
  \item Highlight current line
  \item Highlight matching brackets
  \item Editing files from remote locations
  \item Backup files
  \item A flexible plugin system which can be used to dynamically add new advanced features 
  \item List of plugins distributed with gedit
  \item User manual
\end{itemize}
\end{document}
```

***

### 動作環境 {#kd6ded02}

Linux, Windows, macOS

### License {#bf49560f}

[GPLv2](https://gitlab.gnome.org/World/gedit/gedit/-/blob/master/COPYING)

### リリース情報/ChangeLog {#z39e4e65}

- [World / gedit / gedit · GitLab](https://gitlab.gnome.org/World/gedit/gedit)
    - [https://gitlab.gnome.org/World/gedit/gedit/-/tags](https://gitlab.gnome.org/World/gedit/gedit/-/tags)
    - [https://gitlab.gnome.org/World/gedit/gedit/-/commits/master](https://gitlab.gnome.org/World/gedit/gedit/-/commits/master)

### 派生版 {#k13d1526}

- [pluma](https://github.com/mate-desktop/pluma)
    - [pluma-plugins](https://github.com/mate-desktop/pluma-plugins)
- [xed](https://github.com/linuxmint/xed)

## インストール {#a97adada}

### Windows {#f78902e6}

- [https://packages.msys2.org/package/mingw-w64-ucrt-x86_64-gedit](https://packages.msys2.org/package/mingw-w64-ucrt-x86_64-gedit)
- [https://packages.msys2.org/package/mingw-w64-clang-x86_64-gedit](https://packages.msys2.org/package/mingw-w64-clang-x86_64-gedit)
- [https://packages.msys2.org/package/mingw-w64-clang-aarch64-gedit](https://packages.msys2.org/package/mingw-w64-clang-aarch64-gedit)

### macOS {#j8f7f037}

- [https://formulae.brew.sh/formula/gedit](https://formulae.brew.sh/formula/gedit)
    - [https://github.com/Homebrew/homebrew-core/blob/master/Formula/g/gedit.rb](https://github.com/Homebrew/homebrew-core/blob/master/Formula/g/gedit.rb)

## プラグイン {#c01f900c}

### [gedit-latex](https://wiki.gnome.org/Apps/Gedit/LaTeXPlugin) {#p2206363}

- [https://wiki.gnome.org/Apps/Gedit/LaTeXPlugin](https://wiki.gnome.org/Apps/Gedit/LaTeXPlugin)
- [https://gitlab.gnome.org/GNOME/gedit-latex](https://gitlab.gnome.org/GNOME/gedit-latex)
- [https://repology.org/project/gedit-latex-plugin/versions](https://repology.org/project/gedit-latex-plugin/versions)
- [https://repology.org/project/gedit-latex/versions](https://repology.org/project/gedit-latex/versions)
- [http://ftp.gnome.org/pub/GNOME/sources/gedit-latex/](http://ftp.gnome.org/pub/GNOME/sources/gedit-latex/)
- [https://aur.archlinux.org/packages/gedit-latex/](https://aur.archlinux.org/packages/gedit-latex/)
- [https://packages.ubuntu.com/search?keywords=gedit-latex](https://packages.ubuntu.com/search?keywords=gedit-latex)
- [https://packages.debian.org/search?keywords=gedit-latex](https://packages.debian.org/search?keywords=gedit-latex)
- [https://packages.fedoraproject.org/pkgs/gedit-latex/gedit-latex/](https://packages.fedoraproject.org/pkgs/gedit-latex/gedit-latex/)
- [https://software.opensuse.org/package/gedit-latex](https://software.opensuse.org/package/gedit-latex)

gedit-latex は gedit で LaTeX の文書作成を簡単にできるようにするためのプラグインです．

\[☰\] &gt; \[設定\] &gt; \[プラグイン\] の LaTeX Plugin にチェックをいれます．

LaTeX Plugin の \[設定\] で LaTeX Plugin で使用する Tools の設定ができます．

Tools の項目の LaTeX → PDF を選択して \[プロパティ\] をクリックします．

LaTeX → PDF はデフォルトでは

```
rubber --inplace --maxerr -1 --short --force --warn all --pdf "$filename"
gvfs-open "$shortname.pdf"
```

に設定されています．

これらを \[削除\] して

[ptex2pdf](/ptex2pdf/)-upLaTeX を使用する場合は

```
ptex2pdf -u -l -ot '-synctex=1' "$filename"
```

Latexmk-upLaTeX を使用する場合は

```
latexmk -e '$latex=q/uplatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "$filename"
```

を \[追加\] して設定します．

出力した PDF ファイルを表示するようにしたい場合は

```
 okular --unique "$shortname.pdf"
```

も \[追加\] してください．

LaTeX → PDF は \[☰\] &gt; \[ツール\] &gt; \[LaTeX Tools\] &gt; \[LaTeX → PDF\] で実行できます．

\[☰\] &gt; \[表示\] &gt; \[ボトムパネル\] を ON にして \[Tools\] タブをクリックすると Job (処理状況) が表示されます．

### [gedit-plugins (Code Comment)](https://gitlab.gnome.org/World/gedit/gedit-plugins/-/tree/master/plugins/codecomment) {#q8313fab}

- [https://gitlab.gnome.org/World/gedit/gedit-plugins/-/tree/master/plugins/codecomment](https://gitlab.gnome.org/World/gedit/gedit-plugins/-/tree/master/plugins/codecomment)

Code Comment プラグインは gedit-plugins に収録されています．

Code Comment プラグインを使用するとコメントアウト，コメントアウトの解除ができます．

\[☰\] &gt; \[設定\] &gt; \[プラグイン\] の Code Comment にチェックをいれます．

- [geditのプラグイン： Code comment](http://blog.livedoor.jp/ti5942/archives/7584204.html)

### [gedit-plugins (Bracket Completion)](https://gitlab.gnome.org/World/gedit/gedit-plugins/-/tree/master/plugins/bracketcompletion) {#af44b88e}

- [https://gitlab.gnome.org/World/gedit/gedit-plugins/-/tree/master/plugins/bracketcompletion](https://gitlab.gnome.org/World/gedit/gedit-plugins/-/tree/master/plugins/bracketcompletion)

Bracket Completion プラグインは gedit-plugins に収録されています．

Bracket Completion プラグインを使用すると閉じかっこを自動的に追加してくれます．

\[☰\] &gt; \[設定\] &gt; \[プラグイン\] の Bracket Completion にチェックをいれます．

### コードスニペット {#t852fd66}

コードスニペットは，よく使用する文字列をすばやく挿入するためのプラグインです．

\[☰\] &gt; \[設定\] &gt; \[プラグイン\] の コードスニペットにチェックをいれます．

\[☰\] &gt; \[スニペットの管理...\] からコードスニペットの設定ができます．

### 外部ツール {#qa44ee46}

外部ツールは，外部コマンドと Shell スクリプトを実行するためのプラグインです．

\[☰\] &gt; \[設定\] &gt; \[プラグイン\] の 外部ツールにチェックをいれます．

\[☰\] &gt; \[外部ツールの管理...\] から外部ツールの設定ができます．

\[＋\] をクリックするとツールが追加できます．

#!/bin/sh が記述されている編集画面にシェルスクリプトを追加します．

適用範囲はデフォルトでは All Languages に指定されているので LaTeX に変更します．

\[☰\] &gt; \[ツール\] &gt; \[外部ツール\] から設定した外部ツールを実行できます．

\[☰\] &gt; \[表示\] &gt; \[ボトムパネル\] を ON にして \[Tool Output\] タブをクリックすると処理状況が表示されます．

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

#### LuaLaTeXmk {#gd49f6fd}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$lualatex=q/lualatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdflua "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Okular {#gaa0fcf1}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
okular --unique "file:"`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"#src:$GEDIT_CURRENT_LINE_NUMBER "$GEDIT_CURRENT_DOCUMENT_PATH""
```

***

#### Papers {#t53bc494}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
synctex view -i $GEDIT_CURRENT_LINE_NUMBER:0:"$GEDIT_CURRENT_DOCUMENT_NAME" -o "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf" -x "papers -i %{page+1} %{output}"
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
