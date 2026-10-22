---
title: "TeXworks/設定/Linux"
url: "/TeXworks/設定/Linux/"
date: 2012-07-13T03:02:14Z
pukiwiki: "TeXworks/設定/Linux"
---

# TeXworks/設定/Linux

[TeXworks](/TeXworks/) > [設定](</TeXworks/設定/>) > [Linux](/Linux/)

***

***

## タイプセットの設定 {#q50d2378}

### [TeX Live](</TeX Live/>) {#y48c4d8a}

#### upLaTeX (ptex2pdf) {#h6d8b747}

[ptex2pdf](/ptex2pdf/) を使って設定します．

***

<br>

　　名前:　　　　<ins>upLaTeX (ptex2pdf)</ins><br>
　　プログラム:　 <ins>ptex2pdf</ins><br>
　　引数:　　　　<ins>-u</ins><br>
　　　　　　　　　<ins>-l</ins><br>
　　　　　　　　　<ins>-ot</ins><br>
　　　　　　　　　<ins>$synctexoption</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk {#w19207d5}

タイプセットの方法を設定します．

***

<br>

　　名前:　　　　<ins>Latexmk</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>$fullname -no-guess-input-enc -kanji=utf8</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### upLaTeXmk {#xb8626bf}

タイプセットの方法を設定します．

***

<br>

　　名前:　　　　<ins>upLaTeXmk</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex %O -synctex=1 -kanji=utf8 -no-guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtexu %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/upmendex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### LuaLaTeXmk {#l2112a03}

タイプセットの方法を設定します．

***

<br>

　　名前:　　　　<ins>LuaLaTeXmk</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$lualatex=q/lualatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtexu %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/upmendex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdflua</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

## Okular との連携 {#p26e93fe}

### inverse search {#b1008e80}

\[Settings\]-\[Configure Okular...\]-\[Editor\] の項目から Custom Text Editor を選択します．

Editor:
: Custom Text Editor

Command:
: texworks --position=%l

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## qpdfview との連携 {#xa845db9}

### inverse search {#e1580763}

\[Edit\]-\[Settings...\]-\[Behaviour\]

Source editor:
: texworks --position=%2 "%1"

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．
