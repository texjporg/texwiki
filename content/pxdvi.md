---
title: "pxdvi"
url: "/pxdvi/"
date: 2012-09-06T23:52:56Z
pukiwiki: "pxdvi"
---

# pxdvi

pxdvi で日本語が表示されないなどの問題が発生する場合は <strong>pxdvi を使用せず PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) などでプレビューする</strong>方法があります。<br>
[ptex2pdf](/ptex2pdf/) を使用して TeX ファイルから直接 PDF ファイルを出力できます。<br>

## [pxdvi](http://www.preining.info/blog/software-projects/tlptexlive/) → 日本語が表示されないなどの問題が発生する場合は PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) などでプレビューする <a id="pxdvi"></a> {#s1b173bb}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## pxdvi (xdvik-ja) → 日本語が表示されないなどの問題が発生する場合は PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) などでプレビューする {#q4ba8496}

### pxdvi とは {#e137631f}

pxdvi は (e-)(u)pTeX で出力された DVI ファイルに対応した DVI プレビューアです．<br>
pxdvi は [xdvik](/xdvi/) を (e-)(u)pTeX に対応させたものです．<br>

- [tlptexlive](http://www.preining.info/blog/software-projects/tlptexlive/)
- [tlptexlive Archives &middot; There and back again](http://www.preining.info/blog/tag/tlptexlive/)
- [xdvik 日本語化パッチ整理プロジェクト](http://xdvi.sourceforge.jp/)
- [MLアーカイブ: users - xdvi-jp-cleanup - SourceForge.JP](http://sourceforge.jp/projects/xdvi/lists/archive/users/)
- [pxdvi の使用用途について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=731)

### ChangeLog {#y0777637}

- [https://gitorious.org/xdvik-japanese-patch-cleanup](https://gitorious.org/xdvik-japanese-patch-cleanup)
    - [https://gitorious.org/xdvik-japanese-patch-cleanup/xdvik-japanese-patch-cleanup/commits/master](https://gitorious.org/xdvik-japanese-patch-cleanup/xdvik-japanese-patch-cleanup/commits/master)
- [https://gitorious.org/tlptexlive](https://gitorious.org/tlptexlive)
    - [https://gitorious.org/tlptexlive/build-tlptexlive/commits/master](https://gitorious.org/tlptexlive/build-tlptexlive/commits/master)
    - [https://gitorious.org/tlptexlive/tlptexlive-root/commits/master](https://gitorious.org/tlptexlive/tlptexlive-root/commits/master)

### pxdvi のインストール <a id="pxdviinstall"></a> {#cce5d1ed}

pxdvi は [tlptexlive](http://www.preining.info/blog/software-projects/tlptexlive/) からインストールできます．<br>

```
$ pxdvi --version
xdvik version 22.85 j1.41-ptexlive (Xaw toolkit)
Libraries: kpathsea version 6.1.1dev, T1lib version 5.1.2, FreeType version 2.4.11, Fontconfig version 2.9.0
```

#### TeX Live 公式パッケージ (Cygwin) の場合 {#s31803b9}

```
$ tlmgr update --self --all
$ tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
$ tlmgr pinning add tlptexlive '*'
$ tlmgr install pxdvi pmetapost
$ tlmgr path add
$ tlmgr update --all
$ cd /usr/local/texlive/????
$ ln -s texmf-dist texmf
$ cd /usr/local/texlive/????/texmf-dist/xdvi
$ cp XDvi XDvi.org
$ sed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
$ sed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
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

tlptexlive リポジトリから pxdvi をダウンロード・展開して<br>
pxdvi-xaw, pxdvi.cfg, xdvi-ptex.map, texmf.cnf などを適切な場所に配置して<br>
/usr/share/texmf-local/web2c/texmf.cnf に &#x58;DVIINPUTS を設定します．<br>

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

/usr/share/texmf-local/web2c/texmf.cnf に &#x58;DVIINPUTS を追加します．<br>

```
$ printf '\n%% pxdvi\nXDVIINPUTS = /usr/share/texmf-dist/pxdvi\n' | sudo tee -a /usr/share/texmf-local/web2c/texmf.cnf
$ tail /usr/share/texmf-local/web2c/texmf.cnf
...
% pxdvi
XDVIINPUTS = /usr/share/texmf-dist/pxdvi
```

&#x58;DVIINPUTS に /usr/share/texmf-dist/pxdvi が設定されていることを確認します．<br>

```
$ kpsewhich -var-value XDVIINPUTS
/usr/share/texmf-dist/pxdvi
```

### xdvik-ja のインストール <a id="xdvik-jainstall"></a> {#tfc9f890}

#### TeX Live/Debian の場合 {#g7b22367}

- [http://packages.ubuntu.com/ja/xdvik-ja](http://packages.ubuntu.com/ja/xdvik-ja)
- [https://packages.debian.org/ja/xdvik-ja](https://packages.debian.org/ja/xdvik-ja)
- [#638764 - xdvik-ja: please remove t1lib dependency - Debian Bug report logs](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=638764)

```
$ sudo apt-get install xdvik-ja
$ xdvi --version
xdvik version 22.84.16 j1.41-ptexlive (Xaw toolkit)
Libraries: kpathsea version 6.2.0, T1lib version 5.1.2, FreeType version 2.4.9
```

### 注意点 {#jd5a94be}

#### pxdvi で DVI ファイルを表示するとコンソールに Warning: Cannot convert string ... が表示される → /usr/local/texlive/????/texmf-dist/xdvi/&#x58;Dvi を修正する {#ha5f0016}

pxdvi で DVI ファイルを表示するとコンソールに Warning: Cannot convert string ... が表示されることがあります．<br>

```
Warning: Cannot convert string "-*-helvetica-medium-r-*-*-12-*-*-*-*-*-*" to type FontStruct
Warning: Cannot convert string "-*-helvetica-medium-r-*-*-10-*-*-*-*-*-*" to type FontStruct
```

以下の作業を行います．<br>

- Cygwin の場合

    ```
    $ cd /usr/local/texlive/????/texmf-dist/xdvi
    $ cp XDvi XDvi.org
    $ sed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
    $ sed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
    ```

- OS X の場合

    ```
    $ cd /usr/local/texlive/????/texmf-dist/xdvi
    $ sudo cp XDvi XDvi.org
    $ brew install gnu-sed
    $ sudo gsed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
    $ sudo gsed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
    ```

- Linux の場合

    ```
    $ cd /usr/local/texlive/????/texmf-dist/xdvi
    $ sudo cp XDvi XDvi.org
    $ sudo sed 's/\(^\*font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
    $ sudo sed 's/\(^\*statusline\.font:\)\(.*\)helvetica\(.*\)/\1\2\*\3-\*/' -i XDvi
    ```

### 使い方 {#o73d19d8}

以下の様な文書を作成して hoge.tex という名前で UTF-8 で保存します．<br>

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

を実行します．<br>

[CJK-LaTeX/BXcjkjatype](/LaTeX-CJK/) を使用すれば日本語化されていない xdvi でも日本語が表示できます．<br>

DVI ファイルを表示するには<br>

```
$ pxdvi -nofork -unique -watchfile 1 'hoge.dvi' &
```

または

```
$ pxdvi -nofork -unique -watchfile 1 "hoge.dvi" &
```

を実行します．<br>

PDF ファイルに出力する場合は

```
$ ptex2pdf -u -l -ot "-synctex=1" hoge
```

または

```
$ pdflatex -synctex=1 hoge
```

を実行します．<br>

#### コマンドラインオプション {#bf61120e}

- [http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/main.c?view=markup](http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/main.c?view=markup)

### SyncTeX {#i441324e}

#### forward search {#ucabcddf}

TeX ファイルの 30 行目に対応する DVI ファイルの該当するページにジャンプしたい場合は<br>

```
$ synctex view -i '30:0:hoge.tex' -o 'hoge.dvi' -x 'pxdvi -nofork -unique -watchfile 1 +%{page+1} "%{output}"' &
```

または

```
$ synctex view -i "30:0:hoge.tex" -o "hoge.dvi" -x "pxdvi -nofork -unique -watchfile 1 +%{page+1} '%{output}'" &
```

のように実行します．<br>
