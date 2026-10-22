---
title: "Geany"
url: "/Geany/"
date: 2012-03-04T22:14:55Z
pukiwiki: "Geany"
---

# Geany

## [Geany](https://www.geany.org/) {#d1003dd0}

***

***

## Geany とは {#u4d63bea}

Geany は GTK を使用した高速で軽量なテキストエディタです．
Geany は 基本的な IDE の機能があります．
Geany は LaTeX の編集に対応しています．
Geany は UTF-8/EUC-JP/ISO-2022-JP/Shift_JIS/CP932 等の文字コードに対応しています．

- [Geany](https://www.geany.org/)

### 動作環境 {#ib302119}

Windows, macOS, Linux

### License {#q7890579}

[GPLv2](https://github.com/geany/geany/blob/master/COPYING)

### リリース情報/ChangeLog {#n1e93e0e}

- [ChangeLog](https://www.geany.org/Documentation/ChangeLog)
- [geany/geany · GitHub](https://github.com/geany/geany)
    - [tags](https://github.com/geany/geany/tags)
    - [commit](https://github.com/geany/geany/commits/)

## Geany で LaTeX {#s0f3de16}

### ビルドコマンドの設定 {#aaa2ae74}

\[ビルド(<ins>B</ins>)\] &gt; \[ビルドコマンドを設定(<ins>S</ins>)\]

Geany はデフォルトで LaTeX のビルドに対応しています．<br>
以下の設定では LuaLaTeX や latexmk を使用しています．<br>
BibTeX や hyperref パッケージなどを使用する場合は latexmk を使用してください．<br>

#### LaTeX コマンド {#z6996bd9}

LaTeX -> <ins>P</ins>DF
: &nbsp;

: lualatex -synctex=1 --file-line-error-style "%f"

: latexmk -e '$lualatex=q/lualatex %O -synctex=1 --file-line-error-style %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdflua "%f"

#### コマンドを実行 {#r981dc9c}

V<ins>i</ins>ew PDF File
: &nbsp;

: okular --unique "%e.pdf"

: papers "%e.pdf"

: zathura -x "geany +&#x25;{line} &#x25;{input}" "%e.pdf"

: qpdfview --unique "%e.pdf"

: texworks "%e.pdf"

: texstudio --pdf-viewer-only "%e.pdf"

: mupdf "%e.pdf"

: xpdf "%e.pdf"

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

### LaTeX {#scc8a76c}

- [https://github.com/geany/geany-plugins/tree/master/latex](https://github.com/geany/geany-plugins/tree/master/latex)

\[ツール(<ins>T</ins>)\] &gt; \[プラグインマネージャ(<ins>P</ins>)\] で GeanyLaTeX にチェックをいれてアクティブにします．<br>
メニューに \[<ins>L</ins>aTeX\] や \[<ins>B</ins>ibTeX\] が追加されます．<br>
\[ツール(<ins>T</ins>)\] &gt; \[LaTeXウィザード(<ins>W</ins>)\] で LaTeX 文書を簡単に作成するウィザードを開始できます．<br>

## 関連リンク {#j4cca0b1}

- [geany-dark-scheme](https://github.com/dflock/geany-dark-scheme)
