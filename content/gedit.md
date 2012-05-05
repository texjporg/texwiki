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
gedit は Windows や Mac OS X でも動作します．<br>

- [gedit](http://projects.gnome.org/gedit/)
- [gedit - GNOME Text Editor](http://git.gnome.org/browse/gedit/) GNOME GIT source code repository
    - [log](http://git.gnome.org/browse/gedit/log/)

## プラグイン {#c01f900c}

### [gedit-latex](http://live.gnome.org/Gedit/LaTeXPlugin) {#p2206363}

- [gedit-latex](http://live.gnome.org/Gedit/LaTeXPlugin)
    <!-- - -[[gedit-latex team:http://sourceforge.net/project/memberlist.php?group_id=204144]] -->

- gedit-latex は gedit で LaTeX の文書作成を簡単にできるようにするためのプラグインです．インストール方法は [README](http://git.gnome.org/browse/gedit-latex/tree/README) を参照してください．
- [http://git.gnome.org/browse/gedit-latex](http://git.gnome.org/browse/gedit-latex)
- [http://ftp.gnome.org/pub/GNOME/sources/gedit-latex/](http://ftp.gnome.org/pub/GNOME/sources/gedit-latex/)
- [Plugin doesn't work with gedit 3](http://sourceforge.net/tracker/index.php?func=detail&aid=3297713&group_id=204144&atid=988428) → 最新版の gedit-latex は gedit 3 で動作します．
- [日本語でgedit pluginsを紹介する](http://utisam.blogspot.com/2011/04/gedit-plugins.html)
- [EDUbuntu：geditのプラグインをインストールしました。](http://blog.livedoor.jp/ti5942/archives/3682394.html)

### 外部ツール {#qa44ee46}

外部ツールは，外部コマンドと Shell スクリプトを実行するためのプラグインです．<br>
\[編集(E)\]-\[設定(E)\]-\[プラグイン\] の 外部ツールにチェックをいれます．<br>
\[ツール(T)\]-\[外部ツールの管理...\] から外部ツールの設定ができます．<br>
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

#### pdfpLaTeX2 {#g8ed96d6}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
platex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME" && \
dvips -Ppdf -t a4 -z -f "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.dvi" | \
convbkmk -g > "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.ps" && \
ps2pdf "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.ps"
```

***

#### pdfupLaTeX {#x4f1ba2c}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
uplatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME" && \
dvipdfmx "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`"
```

***

#### pdfupLaTeX2 {#k85e2282}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
uplatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME" && \
dvips -Ppdf -t a4 -z -f "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.dvi" | \
convbkmk -u > "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.ps" && \
ps2pdf "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.ps"
```

***

#### pdfLaTeX {#f6f3d125}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
pdflatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

#### LuaLaTeX {#dacfdc34}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
lualatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

#### XeLaTeX {#df8a1522}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
xelatex -synctex=1 "$GEDIT_CURRENT_DOCUMENT_NAME"
```

***

#### pBibTeX {#h82edb4a}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
pbibtex "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`"
```

***

#### upBibTeX {#if36eff6}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
upbibtex "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`"
```

***

#### Mendex {#p50c6431}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
mendex "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`"
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

#### Evince {#t53bc494}

***

```
#!/bin/sh

cd "$GEDIT_CURRENT_DOCUMENT_DIR" && \
evince "`basename "$GEDIT_CURRENT_DOCUMENT_NAME" .tex`.pdf"
```

***

#### [gedit外部ツール](http://utisam.blogspot.jp/2011/07/gedit.html) {#t8f05189}

#### [Ubuntuのテキストエディタ（gedit）の「外部ツール」をTeX仕様に](http://pen.agbi.tsukuba.ac.jp/~RStiger/hiki2/?Ubuntu%A4%CE%A5%C6%A5%AD%A5%B9%A5%C8%A5%A8%A5%C7%A5%A3%A5%BF%A1%CAgedit%A1%CB%A4%CE%A1%D6%B3%B0%C9%F4%A5%C4%A1%BC%A5%EB%A1%D7%A4%F2TeX%BB%C5%CD%CD%A4%CB) {#kd656c78}

#### [geditをカスタマイズする。](http://jiy.blog.shinobi.jp/Entry/93/) {#c982327a}

#### [gedit で tex の呼び出し](http://www.rcai.riken.jp/petadimension/textips.html#texgedit) {#z17ced31}

## 関連リンク {#v8f6d6f7}

- [geditをカスタマイズしてみる](http://d.hatena.ne.jp/rkmathi/20110402/1301733604)
