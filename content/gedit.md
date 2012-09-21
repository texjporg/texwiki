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

gedit は Linux で動作する GNOME 公式のテキストエディタです．<br>
gedit は Windows や OS X でも動作します．<br>

- [gedit](http://projects.gnome.org/gedit/)
- [gedit - GNOME Text Editor](http://git.gnome.org/browse/gedit/) GNOME GIT source code repository
    - [log](http://git.gnome.org/browse/gedit/log/)

## プラグイン {#c01f900c}

### [gedit-latex](https://live.gnome.org/Gedit/LaTeXPlugin) {#p2206363}

最新版の gedit-latex は gedit 3 で動作します．<br>

- [gedit-latex](https://live.gnome.org/Gedit/LaTeXPlugin)
    <!-- - -[[gedit-latex team:http://sourceforge.net/project/memberlist.php?group_id=204144]] -->

- gedit-latex は gedit で LaTeX の文書作成を簡単にできるようにするためのプラグインです．インストール方法は [README](http://git.gnome.org/browse/gedit-latex/tree/README) を参照してください．
- [http://git.gnome.org/browse/gedit-latex](http://git.gnome.org/browse/gedit-latex)
- [http://ftp.gnome.org/pub/GNOME/sources/gedit-latex/](http://ftp.gnome.org/pub/GNOME/sources/gedit-latex/)
- [日本語でgedit pluginsを紹介する](http://utisam.blogspot.com/2011/04/gedit-plugins.html)
- [EDUbuntu：geditのプラグインをインストールしました。](http://blog.livedoor.jp/ti5942/archives/3682394.html)
- [synctex with gedit on Ubuntu 12.04](http://blog.livedoor.jp/shota_soga_/archives/3536366.html)

### 外部ツール {#qa44ee46}

外部ツールは，外部コマンドと Shell スクリプトを実行するためのプラグインです．<br>
\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の 外部ツールにチェックをいれます．<br>
\[ツール(T)\]-\[外部ツールの管理...\] から外部ツールの設定ができます．<br>
ツール(T): で \[＋\] をクリックするとツールが追加できます．<br>
編集(E): の項目にシェルスクリプトを追加します．<br>
適用範囲(A): で All Languages から LaTeX に変更します．<br>
\[ツール(T)\]-\[外部ツール\] から設定した外部ツールを実行できます．<br>

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

#### TeXworks {#b3f685e3}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
texworks "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### Evince {#t53bc494}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
evince "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### fwdevince {#s41c2ddc}

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

#### gv {#qda5d9a3}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
gv --watch "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### Emacs {#b1a60c18}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
emacs "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
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

#### pLaTeX (非推奨) {#b13823ac}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
platex -src-specials "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### upLaTeX (非推奨) {#pdc10784}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
uplatex -src-specials "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

保存(S):
: 編集中のドキュメント

#### pxdvi (非推奨) {#vedc0f33}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
pxdvi -nofork -watchfile 1 -editor "gedit "%f" +%l" "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.dvi" -sourceposition "$GEDIT_CURRENT_LINE_NUMBER $GEDIT_CURRENT_DOCUMENT_NAME"
```

***

#### その他の外部ツールの設定例 {#a704e342}

- [tips/Latex - PukiWiki](http://www-nh.scphys.kyoto-u.ac.jp/~asano/index.php?tips%2FLatex)
- [gedit外部ツール](http://utisam.blogspot.jp/2011/07/gedit.html)
- [Ubuntuのテキストエディタ（gedit）の「外部ツール」をTeX仕様に](http://pen.agbi.tsukuba.ac.jp/~RStiger/hiki2/?Ubuntu%A4%CE%A5%C6%A5%AD%A5%B9%A5%C8%A5%A8%A5%C7%A5%A3%A5%BF%A1%CAgedit%A1%CB%A4%CE%A1%D6%B3%B0%C9%F4%A5%C4%A1%BC%A5%EB%A1%D7%A4%F2TeX%BB%C5%CD%CD%A4%CB)
- [geditをカスタマイズする。](http://jiy.blog.shinobi.jp/Entry/93/)
- [gedit で tex の呼び出し](http://www.rcai.riken.jp/petadimension/textips.html#texgedit)
- [synctex + gedit + evince](http://www.benwhale.com/blog/2011/06/26/synctex-gedit-evince/)

## 関連リンク {#v8f6d6f7}

- [geditをカスタマイズしてみる](http://d.hatena.ne.jp/rkmathi/20110402/1301733604)
