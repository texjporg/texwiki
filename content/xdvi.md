---
title: "xdvi"
url: "/xdvi/"
date: 2013-05-12T16:30:08Z
pukiwiki: "xdvi"
---

# xdvi

## xdvi {#s73ab198}

<span style="font-size:30px">xdvi は現在，非推奨です！</span>

日本語が表示されないなどの問題が発生する場合があります．[古い情報](</古い情報/#je1d5241>)もご覧ください．
現在は DVI ではなく PDF でのプレビューが推奨されています．

以下の情報はアーカイブとして残しておきます．
極力削除はお控えください．[forum:1013](https://okumuralab.org/tex/mod/forum/discuss.php?d=1013) の<strong>「削除は原則禁止」</strong>の合意事項に基づきます．

<strong>目次</strong>

## [xdvik](http://xdvi.sourceforge.net/) → 日本語が表示されないなどの問題が発生する場合は PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) などでプレビューする <a id="xdvik"></a> {#s47919ef}

### xdvik とは {#de90c407}

xdvik は DVI プレビューアです．
xdvi を Kpathsea ライブラリに対応させたものです．
[CJK-LaTeX/BXcjkjatype](/LaTeX-CJK/) を使用すれば日本語化されていない xdvik でも日本語が表示できます．

- [Xdvik Homepage](http://xdvi.sourceforge.net/)
- [xdvi](http://math.berkeley.edu/~vojta/xdvi.html)

### 動作環境 {#y90c90d1}

X Window System

### ChangeLog {#p61511cc}

- [SourceForge.net Repository - \[xdvi\] Contents of /xdvik/texk/xdvik/CHANGES](http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/CHANGES?view=markup)

- \[[texlive\] Index of /trunk/Build/source/texk/xdvik](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/?view=log)
    - [CHANGES](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/CHANGES?view=markup)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/xdvik/ChangeLog?view=markup)

### インストール {#jfa6e6ec}

xdvik は TeX Live に含まれています．

```
$ xdvi --version
xdvik version 22.87 (Xaw toolkit)
Libraries: kpathsea version 6.2.0, freetype version 2.5.3
```

### 注意点 {#mfca3e3a}

#### xdvi で DVI ファイルを表示するとコンソールに Warning: Cannot convert string ... が表示される → /usr/local/texlive/????/texmf-dist/xdvi/&#x58;Dvi を修正する {#l9a6d5b3}

xdvi で DVI ファイルを表示するとコンソールに Warning: Cannot convert string ... が表示されることがあります．

```
Warning: Cannot convert string "-*-helvetica-medium-r-*-*-12-*-*-*-*-*-*" to type FontStruct
Warning: Cannot convert string "-*-helvetica-medium-r-*-*-10-*-*-*-*-*-*" to type FontStruct
```

以下の作業を行います．

```
$ cd /usr/local/texlive/????/texmf-dist/xdvi
$ sudo cp XDvi XDvi.org
```

OS X の場合

```
$ brew install gnu-sed
$ sudo gsed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo gsed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

Linux の場合

```
$ sudo sed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo sed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

### 使い方 {#m5b0a3d2}

以下の様な文書を作成して hoge.tex という名前で UTF-8 で保存します．

```
\ifdefined\kanjiskip
  \documentclass[uplatex]{jsarticle}
\else
  \documentclass{scrartcl}
  \usepackage[whole]{bxcjkjatype}
\fi
\begin{document}

吾輩は猫である。名前はまだ無い。

どこで生れたかとんと見当がつかぬ。
何でも薄暗いじめじめした所で
ニャーニャー泣いていた事だけは記憶している。
吾輩はここで始めて人間というものを見た。

\end{document}
```

hoge.tex を LaTeX で処理します．

```
$ latex -synctex=1 hoge
```

[CJK-LaTeX/BXcjkjatype](/LaTeX-CJK/) を使用すれば日本語化されていない xdvi でも日本語が表示できます．

DVI ファイルを表示するには

```
$ xdvi -nofork -unique -watchfile 1 'hoge.dvi' &
```

または

```
$ xdvi -nofork -unique -watchfile 1 "hoge.dvi" &
```

を実行します．

PDF ファイルに出力する場合は

```
$ ptex2pdf -u -l -ot "-synctex=1" hoge
```

または

```
$ pdflatex -synctex=1 hoge
```

を実行します．

#### コマンドラインオプション {#ce42827f}

- [http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/main.c?view=markup](http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/main.c?view=markup)

### SyncTeX {#g4e4f193}

xdvi は [SyncTeX](/SyncTeX/) に対応しています．

#### forward search {#ic1815e4}

TeX ファイルの 30 行目に対応する DVI ファイルの該当するページにジャンプしたい場合は

```
$ synctex view -i '30:0:hoge.tex' -o 'hoge.dvi' -x 'xdvi -nofork -unique -watchfile 1 +%{page+1} "%{output}"' &
```

または

```
$ synctex view -i "30:0:hoge.tex" -o "hoge.dvi" -x "xdvi -nofork -unique -watchfile 1 +%{page+1} '%{output}'" &
```

のように実行します．

## [pxdvi](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA) → 日本語が表示されないなどの問題が発生する場合は PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) などでプレビューする <a id="pxdvi"></a> {#s1b173bb}

### pxdvi とは {#e137631f}

pxdvi は (e-)(u)pTeX で出力された DVI ファイルに対応した DVI プレビューアです．
pxdvi は xdvik を (e-)(u)pTeX に対応させたものです．

- [tlptexliveリポジトリ](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA)
- [xdvik 日本語化パッチ整理プロジェクト](http://xdvi.sourceforge.jp/)
- [MLアーカイブ: users - xdvi-jp-cleanup - SourceForge.JP](http://sourceforge.jp/projects/xdvi/lists/archive/users/)
- [pxdvi の使用用途について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=731)

### ChangeLog {#y0777637}

- [https://github.com/norbusan/tlptexlive-root/commits/master](https://github.com/norbusan/tlptexlive-root/commits/master)
- [https://github.com/norbusan/build-tlptexlive/commits/master](https://github.com/norbusan/build-tlptexlive/commits/master)

### インストール <a id="pxdviinstall"></a> {#cce5d1ed}

pxdvi は [tlptexliveリポジトリ](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA) からインストールできます．

- [tlptexlive Archives &middot; There and back again](http://www.preining.info/blog/tag/tlptexlive/)

```
$ pxdvi --version
xdvik version 22.85 j1.41-ptexlive (Xaw toolkit)
Libraries: kpathsea version 6.1.1dev, T1lib version 5.1.2, FreeType version 2.4.11, Fontconfig version 2.9.0
```

#### TeX Live 公式パッケージ (OS X) の場合 {#r20c1e45}

```
$ sudo tlmgr update --self --all
$ sudo tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
$ sudo tlmgr pinning add tlptexlive '*'
$ sudo tlmgr install pxdvi pmetapost
$ sudo tlmgr update --all
$ cd /usr/local/texlive/????
$ sudo ln -s texmf-dist texmf
$ cd /usr/local/texlive/????/texmf-dist/xdvi
$ sudo cp XDvi XDvi.org
$ brew install gnu-sed
$ sudo gsed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo gsed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

#### TeX Live 公式パッケージ (Linux) の場合 {#ud34ec40}

```
$ sudo tlmgr update --self --all
$ sudo tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
$ sudo tlmgr pinning add tlptexlive '*'
$ sudo tlmgr install pxdvi pmetapost
$ sudo tlmgr path add
$ sudo tlmgr update --all
$ cd /usr/local/texlive/????
$ sudo ln -s texmf-dist texmf
$ cd /usr/local/texlive/????/texmf-dist/xdvi
$ sudo cp XDvi XDvi.org
$ sudo sed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo sed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

#### TeX Live/Arch Linux (x86_64) の場合 {#p7bf914d}

- [xdviで日本語が表示できない.](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1120)

tlptexlive リポジトリから pxdvi をダウンロード・展開して
pxdvi-xaw, pxdvi.cfg, xdvi-ptex.map, texmf.cnf などを適切な場所に配置して
/usr/share/texmf-local/web2c/texmf.cnf に &#x58;DVIINPUTS を設定します．

```
$ mkdir pxdvi
$ cd pxdvi
$ curl -O http://www.tug.org/~preining/tlptexlive/archive/pxdvi.tar.xz
$ curl -O http://www.tug.org/~preining/tlptexlive/archive/pxdvi.x86_64-linux.tar.xz
$ tar xvf pxdvi.tar.xz
$ tar xvf pxdvi.x86_64-linux.tar.xz
$ sudo cp -p bin/x86_64-linux/pxdvi-xaw /usr/bin
$ sudo ln -s /usr/bin/pxdvi-xaw /usr/bin/pxdvi
$ sudo cp -pR texmf-dist/xdvi /usr/share/texmf-dist/pxdvi
$ sudo cp -pR texmf-dist/fonts/map/pxdvi /usr/share/texmf-dist/fonts/map/pxdvi
$ sudo mkdir -p /usr/share/texmf-local/web2c
$ sudo cp /usr/share/texmf-dist/web2c/texmf.cnf /usr/share/texmf-local/web2c
```

/usr/share/texmf-local/web2c/texmf.cnf に &#x58;DVIINPUTS を追加します．

```
$ printf '\n%% pxdvi\nXDVIINPUTS = /usr/share/texmf-dist/pxdvi\n' | sudo tee -a /usr/share/texmf-local/web2c/texmf.cnf
$ tail /usr/share/texmf-local/web2c/texmf.cnf
...
% pxdvi
XDVIINPUTS = /usr/share/texmf-dist/pxdvi
```

&#x58;DVIINPUTS に /usr/share/texmf-dist/pxdvi が設定されていることを確認します．

```
$ kpsewhich -var-value XDVIINPUTS
/usr/share/texmf-dist/pxdvi
```

### 注意点 {#jd5a94be}

#### pxdvi で DVI ファイルを表示するとコンソールに Warning: Cannot convert string ... が表示される → /usr/local/texlive/????/texmf-dist/xdvi/&#x58;Dvi を修正する {#ha5f0016}

pxdvi で DVI ファイルを表示するとコンソールに Warning: Cannot convert string ... が表示されることがあります．

```
Warning: Cannot convert string "-*-helvetica-medium-r-*-*-12-*-*-*-*-*-*" to type FontStruct
Warning: Cannot convert string "-*-helvetica-medium-r-*-*-10-*-*-*-*-*-*" to type FontStruct
```

以下の作業を行います．

```
$ cd /usr/local/texlive/????/texmf-dist/xdvi
$ sudo cp XDvi XDvi.org
```

OS X の場合

```
$ brew install gnu-sed
$ sudo gsed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo gsed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

Linux の場合

```
$ sudo sed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sudo sed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
```

### 使い方 {#o73d19d8}

以下の様な文書を作成して hoge.tex という名前で UTF-8 で保存します．

```
\ifdefined\kanjiskip
  \documentclass[uplatex]{jsarticle}
\else
  \documentclass{scrartcl}
  \usepackage[whole]{bxcjkjatype}
\fi
\begin{document}

吾輩は猫である。名前はまだ無い。

どこで生れたかとんと見当がつかぬ。
何でも薄暗いじめじめした所で
ニャーニャー泣いていた事だけは記憶している。
吾輩はここで始めて人間というものを見た。

\end{document}
```

DVI ファイルに出力する場合は

```
$ uplatex -synctex=1 hoge
```

または

```
$ latex -synctex=1 hoge
```

を実行します．

[CJK-LaTeX/BXcjkjatype](/LaTeX-CJK/) を使用すれば日本語化されていない xdvi でも日本語が表示できます．

DVI ファイルを表示するには

```
$ pxdvi -nofork -unique -watchfile 1 'hoge.dvi' &
```

または

```
$ pxdvi -nofork -unique -watchfile 1 "hoge.dvi" &
```

を実行します．

PDF ファイルに出力する場合は

```
$ ptex2pdf -u -l -ot "-synctex=1" hoge
```

または

```
$ pdflatex -synctex=1 hoge
```

を実行します．

#### コマンドラインオプション {#bf61120e}

- [http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/main.c?view=markup](http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/main.c?view=markup)

### SyncTeX {#i441324e}

pxdvi は [SyncTeX](/SyncTeX/) に対応しています．

#### forward search {#ucabcddf}

TeX ファイルの 30 行目に対応する DVI ファイルの該当するページにジャンプしたい場合は

```
$ synctex view -i '30:0:hoge.tex' -o 'hoge.dvi' -x 'pxdvi -nofork -unique -watchfile 1 +%{page+1} "%{output}"' &
```

または

```
$ synctex view -i "30:0:hoge.tex" -o "hoge.dvi" -x "pxdvi -nofork -unique -watchfile 1 +%{page+1} '%{output}'" &
```

のように実行します．
