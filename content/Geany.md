---
title: "Geany"
url: "/Geany/"
date: 2012-03-04T22:14:55Z
pukiwiki: "Geany"
---

# Geany

## [Geany](http://www.geany.org/) {#d1003dd0}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Geany_logo.svg/200px-Geany_logo.svg.png" alt="Geany" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Geany とは {#u4d63bea}

Geany は GTK+ を使用した高速で軽量な IDE です．<br>
Geany は IDE の機能を持つテキストエディタとしても使用出来ます．<br>
Geany は LaTeX の編集に対応しています．<br>
Geany は UTF-8/EUC-JP/ISO-2022-JP/Shift_JIS/CP932 等の文字コードに対応しています．<br>

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

\[ビルド(<ins>B</ins>)\]-\[ビルドコマンドを設定(<ins>S</ins>)\]

Geany はデフォルトで LaTeX のビルドに対応しています．<br>
以下の設定では TeX Live に含まれている [ptex2pdf](/ptex2pdf/) を使用しています．<br>
BibTeX や hyperref パッケージなどを使用する場合は latexmk を使用してください．<br>

#### LaTeX コマンド {#z6996bd9}

LaTeX -> <ins>P</ins>DF
: &nbsp;

: ptex2pdf -u -l -ot '-synctex=1 --file-line-error-style' "%f"

: uplatex -synctex=1 --file-line-error-style "%f" &amp;&amp; dvips -Ppdf -z -f "%e.dvi" | convbkmk -u > "%e.ps" &amp;&amp; ps2pdf "%e.ps"

: pdflatex -synctex=1 --file-line-error-style "%f"

: lualatex -synctex=1 --file-line-error-style "%f"

: luajitlatex -synctex=1 --file-line-error-style "%f"

: xelatex -synctex=1 --file-line-error-style "%f"

: latexmk -e '$latex=q/uplatex %O -synctex=1 --file-line-error-style %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi "%f"

: latexmk -e '$latex=q/uplatex %O -synctex=1 --file-line-error-style %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/' -e '$ps2pdf=q/ps2pdf %O %S %D/' -norc -gg -pdfps "%f"

: latexmk -e '$pdflatex=q/pdflatex %O -synctex=1 --file-line-error-style %S/' -e '$bibtex=q/bibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/makeindex %O -o %D %S/' -norc -gg -pdf "%f"

: latexmk -e '$pdflatex=q/lualatex %O -synctex=1 --file-line-error-style %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdf "%f"

: latexmk -e '$pdflatex=q/luajitlatex %O -synctex=1 --file-line-error-style %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdf "%f"

: latexmk -e '$pdflatex=q/xelatex %O -synctex=1 --file-line-error-style %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdf "%f"

#### コマンドを実行 {#r981dc9c}

V<ins>i</ins>ew PDF File
: &nbsp;

: evince "%e.pdf"

: okular --unique "%e.pdf"

: zathura -s -x "geany +&#x25;{line} &#x25;{input}" "%e.pdf"

: qpdfview --unique "%e.pdf"

: texworks "%e.pdf"

: texstudio --pdf-viewer-only "%e.pdf"

: mupdf "%e.pdf"

: firefox -new-window "%e.pdf"

: chromium --new-window "%e.pdf"

#### ビルドコマンドの使い方 {#da168efd}

> <table>
> <tbody>
> <tr><th style="color:#000;background-color:#FE4;text-align:center">メニュー [ビルド(<ins>B</ins>)]</th><th style="color:#000;background-color:#FE4;text-align:center">ツールバー</th><th style="color:#000;background-color:#FE4;text-align:center">ショートカットキー</th><th style="color:#000;background-color:#FE4;text-align:center">機能</th></tr>
> <tr><td>LaTeX -&gt; <ins>P</ins>DF</td><td>ビルド</td><td>F9</td><td>PDF ファイルの作成</td></tr>
> <tr><td>V<ins>i</ins>ew PDF File</td><td>実行</td><td>F5</td><td>PDF ファイルを表示</td></tr>
> </tbody>
> </table>
>

### [GeanyLaTeX](http://frank.uvena.de/en/Geany/geanylatex/) {#scc8a76c}

- [http://git.geany.org/geany-plugins/log/?qt=grep&q=GeanyLaTeX](http://git.geany.org/geany-plugins/log/?qt=grep&q=GeanyLaTeX)

\[ツール(<ins>T</ins>)\]-\[プラグインマネージャ(<ins>P</ins>)\] で GeanyLaTeX にチェックをいれてアクティブにします．<br>
メニューに \[<ins>L</ins>aTeX\] や \[<ins>B</ins>ibTeX\] が追加されます．<br>
\[ツール(<ins>T</ins>)\]-\[LaTeXウィザード(<ins>W</ins>)\] で LaTeX 文書を簡単に作成するウィザードを開始できます．<br>

## 関連リンク {#j4cca0b1}

- [geany-dark-scheme](https://github.com/dflock/geany-dark-scheme)
- [MacにGeanyをインストール](http://code-life.net/?p=951)
