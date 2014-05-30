---
title: "xdvi"
url: "/xdvi/"
date: 2013-05-12T16:30:08Z
pukiwiki: "xdvi"
---

# xdvi

xdvi で日本語が表示されないなどの問題が発生する場合は <strong>xdvi を使用せず PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) などでプレビューする</strong>方法があります。<br>
[ptex2pdf](/ptex2pdf/) を使用して TeX ファイルから直接 PDF ファイルを出力できます。<br>

## xdvi → 日本語が表示されないなどの問題が発生する場合は PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) などでプレビューする {#ca163844}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## [xdvik](http://xdvi.sourceforge.net/) → 日本語が表示されないなどの問題が発生する場合は PDF ファイルで出力して [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) などでプレビューする <a id="xdvik"></a> {#s47919ef}

### xdvik とは {#de90c407}

xdvik は DVI プレビューアです．<br>
xdvi を Kpathsea ライブラリに対応させたものです．<br>
[CJK-LaTeX/BXcjkjatype](/LaTeX-CJK/) を使用すれば日本語化されていない xdvik でも日本語が表示できます．<br>

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

xdvik は TeX Live に含まれています．<br>

```
$ xdvi --version
xdvik version 22.87 (Xaw toolkit)
Libraries: kpathsea version 6.2.0, freetype version 2.5.3
```

### 注意点 {#mfca3e3a}

#### xdvi で DVI ファイルを表示するとコンソールに Warning: Cannot convert string ... が表示される → /usr/local/texlive/????/texmf-dist/xdvi/&#x58;Dvi を修正する {#l9a6d5b3}

xdvi で DVI ファイルを表示するとコンソールに Warning: Cannot convert string ... が表示されることがあります．<br>

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

### 使い方 {#m5b0a3d2}

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

hoge.tex を LaTeX で処理します．<br>

```
$ latex -synctex=1 hoge
```

[CJK-LaTeX/BXcjkjatype](/LaTeX-CJK/) を使用すれば日本語化されていない xdvi でも日本語が表示できます．<br>

DVI ファイルを表示するには<br>

```
$ xdvi -nofork -unique -watchfile 1 'hoge.dvi' &
```

または

```
$ xdvi -nofork -unique -watchfile 1 "hoge.dvi" &
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

#### コマンドラインオプション {#ce42827f}

- [http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/main.c?view=markup](http://xdvi.cvs.sourceforge.net/viewvc/xdvi/xdvik/texk/xdvik/main.c?view=markup)

### SyncTeX {#g4e4f193}

#### forward search {#ic1815e4}

TeX ファイルの 30 行目に対応する DVI ファイルの該当するページにジャンプしたい場合は<br>

```
$ synctex view -i '30:0:hoge.tex' -o 'hoge.dvi' -x 'xdvi -nofork -unique -watchfile 1 +%{page+1} "%{output}"' &
```

または

```
$ synctex view -i "30:0:hoge.tex" -o "hoge.dvi" -x "xdvi -nofork -unique -watchfile 1 +%{page+1} '%{output}'" &
```

のように実行します．<br>
