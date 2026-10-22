---
title: "Pluma"
url: "/Pluma/"
date: 2026-04-29T05:19:57Z
pukiwiki: "Pluma"
---

# Pluma

## Pluma {#x5cd133b}

Pluma は MATE デスクトップ用に作られた小型軽量のテキストエディタです。

- [https://github.com/mate-desktop/pluma](https://github.com/mate-desktop/pluma)

## プラグイン {#p97ece01}

- [https://github.com/mate-desktop/pluma-plugins](https://github.com/mate-desktop/pluma-plugins)
- [Raspbian buster に pluma をインストールする](https://ytyaru.hatenablog.com/entry/2020/01/04/111111)

### SyncTeX <a id="synctex"></a> {#r4eb27e2}

- [https://github.com/mate-desktop/pluma-plugins/tree/master/plugins/synctex](https://github.com/mate-desktop/pluma-plugins/tree/master/plugins/synctex)
- [https://aur.archlinux.org/packages/pluma-plugins](https://aur.archlinux.org/packages/pluma-plugins)
- [https://packages.ubuntu.com/search?keywords=pluma-plugins](https://packages.ubuntu.com/search?keywords=pluma-plugins)
    - [https://packages.ubuntu.com/search?keywords=pluma-plugin-synctex](https://packages.ubuntu.com/search?keywords=pluma-plugin-synctex)
- [https://packages.debian.org/search?keywords=pluma-plugins](https://packages.debian.org/search?keywords=pluma-plugins)
    - [https://packages.debian.org/search?keywords=pluma-plugin-synctex](https://packages.debian.org/search?keywords=pluma-plugin-synctex)
- [https://packages.fedoraproject.org/pkgs/pluma-plugins/pluma-plugins/](https://packages.fedoraproject.org/pkgs/pluma-plugins/pluma-plugins/)
- [https://software.opensuse.org/package/pluma-plugins](https://software.opensuse.org/package/pluma-plugins)
    - [https://software.opensuse.org/package/pluma-plugin-synctex](https://software.opensuse.org/package/pluma-plugin-synctex)

SyncTeX プラグインは pluma-plugins に収録されています。

SyncTeX プラグインを使用すると Pluma と Atril の間で forward and inverse search ができます。

\[編集(E)\] &gt; \[設定(E)\] &gt; \[プラグイン\] タブの SyncTeX にチェックをいれます。

forward search は Pluma で Ctrl+Alt+F または Ctrl + 左クリックを使用すると Atril の該当行にジャンプします。

inverse search は Atril で Ctrl + 左クリックを使用すると Pluma の該当行にジャンプします。

### コードコメント (Code Comment) {#c5402fc4}

- [https://github.com/mate-desktop/pluma-plugins/tree/master/plugins/codecomment](https://github.com/mate-desktop/pluma-plugins/tree/master/plugins/codecomment)

コードコメントプラグインは pluma-plugins に収録されています．

コードコメントプラグインを使用するとコメントアウト，コメントアウトの解除ができます．

\[編集(E)\] &gt; \[設定(E)\] &gt; \[プラグイン\] タブの コードコメント (Code Comment) にチェックをいれます．

### 括弧補完 (Bracket Completion) {#f1527082}

- [https://github.com/mate-desktop/pluma-plugins/tree/master/plugins/bracketcompletion](https://github.com/mate-desktop/pluma-plugins/tree/master/plugins/bracketcompletion)

括弧補完プラグインは pluma-plugins に収録されています．

括弧補完プラグインを使用すると閉じかっこを自動的に追加してくれます．

\[編集(E)\] &gt; \[設定(E)\] &gt; \[プラグイン\] タブの 括弧補完 (Bracket Completion) にチェックをいれます．

### コードスニペット {#yb6597a7}

- [https://github.com/mate-desktop/pluma/tree/master/plugins/snippets](https://github.com/mate-desktop/pluma/tree/master/plugins/snippets)

コードスニペットは，よく使用する文字列をすばやく挿入するためのプラグインです．

\[編集(E)\] &gt; \[設定(E)\] &gt; \[プラグイン\] タブの コードスニペットにチェックをいれます．

\[ツール(T)\] &gt; \[スニペットの管理...\] からコードスニペットの設定ができます．

### 外部ツール {#e95007d2}

- [https://github.com/mate-desktop/pluma/tree/master/plugins/externaltools](https://github.com/mate-desktop/pluma/tree/master/plugins/externaltools)

外部ツールは，外部コマンドと Shell スクリプトを実行するためのプラグインです．

\[編集(E)\] &gt; \[設定(E)\] &gt; \[プラグイン\] タブの 外部ツールにチェックをいれます．

\[ツール(T)\] &gt; \[外部ツールの管理...\] から外部ツールの設定ができます．

\[＋\] をクリックするとツールが追加できます．

#!/bin/sh が記述されている編集画面にシェルスクリプトを追加します．

適用範囲はデフォルトでは All Languages に指定されているので LaTeX に変更します．

\[ツール(T)\] &gt; \[外部ツール\] から設定した外部ツールを実行できます．

\[表示(V)\] &gt; \[ボトムペイン(B)\] を ON にして \[Shell Output\] タブをクリックすると処理状況が表示されます．

#### LuaLaTeX {#b039df9f}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
lualatex -synctex=1 "$PLUMA_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### LuaLaTeXmk {#tc207be3}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
latexmk -e '$lualatex=q/lualatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdflua "$PLUMA_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### Okular {#e376614c}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
okular --unique "file:"`basename "$PLUMA_CURRENT_DOCUMENT_NAME" .tex`.pdf"#src:$PLUMA_CURRENT_LINE_NUMBER "$PLUMA_CURRENT_DOCUMENT_PATH""
```

***

#### Papers {#c18fa445}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
synctex view -i $PLUMA_CURRENT_LINE_NUMBER:0:"$PLUMA_CURRENT_DOCUMENT_NAME" -o "`basename "$PLUMA_CURRENT_DOCUMENT_NAME" .tex`.pdf" -x "papers -i %{page+1} %{output}"
```

***

#### zathura {#hc469e5e}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
zathura -x "pluma "%{input}" +%{line}" --synctex-forward $PLUMA_CURRENT_LINE_NUMBER:0:"$PLUMA_CURRENT_DOCUMENT_NAME" "`basename "$PLUMA_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### qpdfview {#i27cb8c8}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
qpdfview --unique ""`basename "$PLUMA_CURRENT_DOCUMENT_NAME" .tex`.pdf"#src:"$PLUMA_CURRENT_DOCUMENT_NAME":$PLUMA_CURRENT_LINE_NUMBER:0"
```

***

#### TeXworks {#k07c8aaa}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
texworks "`basename "$PLUMA_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### TeXstudio {#qa9f79ba}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
texstudio --pdf-viewer-only "`basename "$PLUMA_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### MuPDF {#l7211de3}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
mupdf "`basename "$PLUMA_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### Mozilla Firefox (PDF.js) {#xaebb9a0}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
firefox -new-window "`basename "$PLUMA_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### Chrome PDF Viewer {#f5eceb7a}

***

```
#!/bin/sh

cd "$PLUMA_CURRENT_DOCUMENT_DIR" && \
chromium --new-window "`basename "$PLUMA_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***
