---
title: "Geany"
url: "/Geany/"
date: 2012-03-04T22:14:55Z
pukiwiki: "Geany"
---

# Geany

## [Geany](http://www.geany.org/) {#d1003dd0}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Geany_logo.svg/200px-Geany_logo.svg.png" alt="Geany" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Geany とは {#u4d63bea}

Geany は GTK+ を使用した IDE の機能を持つテキストエディタです．<br>
Geany は 軽くて高速な IDE としても使用できます．<br>
Geany は LaTeX の編集に対応しており，Shift_JIS/CP932/ISO-2022-JP/EUC-JP/UTF-8 等の文字コードに対応しています．<br>

- [Geany](http://www.geany.org/)
- [Geany Portable](http://sourceforge.net/projects/geanyportable/files/)

### 動作環境 {#ib302119}

Windows, OS X, Linux

### License {#q7890579}

[GPLv2](https://github.com/geany/geany/blob/master/COPYING)

### リリース情報/ChangeLog {#n1e93e0e}

- [ChangeLog](http://www.geany.org/Documentation/ChangeLog)
- [geany/geany · GitHub](https://github.com/geany/geany)
    - [tags](https://github.com/geany/geany/tags)
    - [commit](https://github.com/geany/geany/commits/)

## Geany で LaTeX {#s0f3de16}

### ビルドコマンドの設定 {#aaa2ae74}

Geany はデフォルトで LaTeX のビルドに対応しています．

\[ビルド(<ins>B</ins>)\]-\[ビルドコマンドを設定(<ins>S</ins>)\]

#### LaTeX コマンド {#z6996bd9}

LaTeX -> <ins>P</ins>DF
: &nbsp;

: platex -synctex=1 --file-line-error-style "%f" &amp;&amp; dvipdfmx "%e.dvi"

: platex -synctex=1 --file-line-error-style "%f" &amp;&amp; dvips -Ppdf -z -f "%e.dvi" | convbkmk -g > "%e.ps" &amp;&amp; ps2pdf "%e.ps"

: uplatex -synctex=1 --file-line-error-style "%f" &amp;&amp; dvipdfmx "%e.dvi"

: uplatex -synctex=1 --file-line-error-style "%f" &amp;&amp; dvips -Ppdf -z -f "%e.dvi" | convbkmk -u > "%e.ps" &amp;&amp; ps2pdf "%e.ps"

: pdflatex -synctex=1 --file-line-error-style "%f"

: lualatex -synctex=1 --file-line-error-style "%f"

: luajitlatex -synctex=1 --file-line-error-style "%f"

: xelatex -synctex=1 --file-line-error-style "%f"

#### コマンドを実行 {#r981dc9c}

V<ins>i</ins>ew PDF File
: &nbsp;

: evince "%e.pdf"

: okular --unique "%e.pdf"

: zathura -s -x "geany +&#x25;{line} &#x25;{input}" "%e.pdf"

: qpdfview --unique "%e.pdf"

: pdfviewer "%e.pdf"

: texworks "%e.pdf"

: mupdf "%e.pdf"

: firefox -new-window "%e.pdf"

: chromium --new-window "%e.pdf"

: acroread "%e.pdf"

### [GeanyLaTeX](http://frank.uvena.de/en/Geany/geanylatex/) {#scc8a76c}

- [http://git.geany.org/geany-plugins/log/?qt=grep&q=GeanyLaTeX](http://git.geany.org/geany-plugins/log/?qt=grep&q=GeanyLaTeX)

## 関連リンク {#j4cca0b1}

- [geany-dark-scheme](https://code.google.com/p/geany-dark-scheme/)
- [MacにGeanyをインストール](http://code-life.net/?p=951)
