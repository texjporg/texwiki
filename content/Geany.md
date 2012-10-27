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

### 動作環境 {#ib302119}

Windows, OS X, Linux

## Geany で LaTeX {#s0f3de16}

### ビルドコマンドの設定 {#aaa2ae74}

Geany はデフォルトで LaTeX のビルドに対応しています．

\[ビルド(<ins>B</ins>)\]-\[ビルドコマンドを設定(<ins>S</ins>)\]

#### LaTeX コマンド {#z6996bd9}

LaTeX -> <ins>D</ins>VI
: platex -synctex=1 --file-line-error-style "%f"<br>uplatex -synctex=1 --file-line-error-style "%f"

LaTeX -> <ins>P</ins>DF
: platex -synctex=1 --file-line-error-style "%f" &amp;&amp; dvipdfmx "%e.dvi"<br>platex -synctex=1 --file-line-error-style "%f" &amp;&amp; dvips -Ppdf -z -f "%e.dvi" | convbkmk -g > "%e.ps" &amp;&amp; ps2pdf "%e.ps"<br>uplatex -synctex=1 --file-line-error-style "%f" &amp;&amp; dvipdfmx "%e.dvi"<br>uplatex -synctex=1 --file-line-error-style "%f" &amp;&amp; dvips -Ppdf -z -f "%e.dvi" | convbkmk -u > "%e.ps" &amp;&amp; ps2pdf "%e.ps"<br>pdflatex -synctex=1 --file-line-error-style "%f"<br>lualatex -synctex=1 --file-line-error-style "%f"<br>xelatex -synctex=1 --file-line-error-style "%f"

#### コマンドを実行 {#r981dc9c}

V<ins>i</ins>ew PDF File
: evince "%e.pdf"<br>okular --unique "%e.pdf"<br>zathura -s -x "geany +&#x25;{line} &#x25;{input}" "%e.pdf"<br>qpdfview --unique "%e.pdf"<br>pdfviewer "%e.pdf"

<ins>V</ins>iew DVI File
: pxdvi -watchfile 1 "%e.dvi"

### [GeanyLaTeX](http://frank.uvena.de/en/Geany/geanylatex/) {#scc8a76c}

- [http://git.geany.org/geany-plugins/log/?qt=grep&q=GeanyLaTeX](http://git.geany.org/geany-plugins/log/?qt=grep&q=GeanyLaTeX)

## 関連リンク {#j4cca0b1}

- [geany-dark-scheme](http://code.google.com/p/geany-dark-scheme/)
- [MacにGeanyをインストール](http://code-life.net/?p=951)
