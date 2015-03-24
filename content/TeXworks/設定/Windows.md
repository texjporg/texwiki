---
title: "TeXworks/設定/Windows"
url: "/TeXworks/設定/Windows/"
date: 2012-07-13T02:57:05Z
pukiwiki: "TeXworks/設定/Windows"
---

# TeXworks/設定/Windows

[TeXworks](/TeXworks/) > [設定](</TeXworks/設定/>) > [Windows](</Microsoft Windows/>)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## タイプセットの設定 {#q50d2378}

### [TeX Live](</TeX Live/>) {#kaca20c0}

#### 設定前 {#n2341fff}

公式サイトで配布されている TeXworks と TeX Live の TeXworks は pdfLaTeX がデフォルトになっています．<br>
upLaTeX (ptex2pdf), pdfupLaTeX, pdfupLaTeX2, pLaTeX-ng, Latexmk, Latexmk-upLaTeX-pdfdvi, Latexmk-upLaTeX-pdfps, Latexmk-pLaTeX-ng, Latexmk-pdfLaTeX, Latexmk-LuaLaTeX, Latexmk-LuaJITLaTeX, Latexmk-XeLaTeX を使ってタイプセットできるように設定します．<br>
タイプセットの設定については [Common Workflows](https://github.com/TeXworks/texworks/wiki/AdvancedTypesettingTools#common-workflows) にも記述されているので参考にしてください．<br>
$synctexoption, $fullname, $basename などの意味に関しては，[Defining new typesetting tools](https://github.com/TeXworks/texworks/wiki/AdvancedTypesettingTools#defining-new-typesetting-tools) を参照してください．<br>

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXworksの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　全体　\]\[　エディタ　\]\[　プレビュー　\]</ins></span><strong>\[　タイプセット　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　スクリプト　\]</ins></span><br>
　　　　TeXおよび関連プログラムのパス<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/go-down.png" alt="go down" width="25" height="25">\]</span><br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>

<br>

　　　　タイプセットの方法<br>
　　　　<span style="color:Black;background-color:#DAEAFF;"> pdfTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/go-down.png" alt="go down" width="25" height="25">\]</span><br>
　　　　 pdfLaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 編集 \]</span><br>
　　　　 LuaTeX<br>
　　　　 LuaLaTeX<br>
　　　　 XeTeX<br>
　　　　 XeLaTeX<br>
　　　　 ConTeXt (LuaTeX)<br>
　　　　 ConTeXt (pdfTeX)<br>
　　　　 ConTeXt (XeTeX)<br>
　　　　 BibTeX<br>
　　　　 MakeIndex<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　　　デフォルト: <span style="color:Black;background-color:#EEEEEE;">\[ pdfLaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　　　コンソール出力を表示しない 　　<span style="color:Black;background-color:#EEEEEE;">\[ 自動で隠す　　　　　　　　　　　　　　▼\]</span><br>

***

#### upLaTeX (ptex2pdf) {#r7f9a2a4}

TeX Live で IPAexフォントを埋め込む場合は Windows PowerShell またはコマンド プロンプトから<br>

```
kanji-config-updmap ipaex
```

を実行します．<br>

[ptex2pdf](/ptex2pdf/) を使って設定します．<br>

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>upLaTeX (ptex2pdf)</ins><br>
　　プログラム: <ins>ptex2pdf</ins><br>
　　引数:　　　　<ins>-u</ins><br>
　　　　　　　　　<ins>-l</ins><br>
　　　　　　　　　<ins>-ot</ins><br>
　　　　　　　　　<ins>$synctexoption -no-guess-input-enc -kanji=utf8</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### pdfupLaTeX {#r6870d92}

pdfuplatex.bat を作成して pdfuplatex.bat で PDF ファイルを作成します．

***

- C:\texlive\2015\bin\win64\pdfuplatex.bat
- C:\texlive\2015\bin\win32\pdfuplatex.bat

***

```
@echo off
ptex2pdf -u -l -ot "-synctex=1 -kanji=utf8 -no-guess-input-enc" %1
```

***

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeX</ins><br>
　　プログラム: <ins>pdfuplatex.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### pdfupLaTeX2 {#cf95a9e9}

pdfuplatex2.bat を作成して pdfuplatex2.bat で PDF ファイルを作成します．

convbkmk の実行には [Ruby](http://www.ruby-lang.org/ja/) が必要です．<br>
Ruby は [RubyInstaller](http://rubyinstaller.org/) でインストールできます．<br>

***

- C:\texlive\2015\bin\win64\pdfuplatex2.bat
- C:\texlive\2015\bin\win32\pdfuplatex2.bat

***

```
@echo off
uplatex -synctex=1 -kanji=utf8 -no-guess-input-enc %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.exe "%~n1.ps"
```

***

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeX2</ins><br>
　　プログラム: <ins>pdfuplatex2.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### pLaTeX-ng {#o0792104}

pLaTeX-ng で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pLaTeX-ng</ins><br>
　　プログラム:　 <ins>platex-ng</ins><br>
　　引数:　　　　<ins>$synctexoption</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk {#u0fa8c19}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>$fullname</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-upLaTeX-pdfdvi {#t6b9c629}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-upLaTeX-pdfdvi</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex %O -synctex=1 -kanji=utf8 -no-guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/upmendex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx %O -f uptex-ipaex.map -f otf-up-ipaex.map -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-upLaTeX-pdfps {#h1fdd4cd}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-upLaTeX-pdfps</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex %O -synctex=1 -kanji=utf8 -no-guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/upmendex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$ps2pdf=q/ps2pdf.exe %O %S %D/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfps</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-pLaTeX-ng {#sf618d99}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pLaTeX-ng</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/platex-ng %O  -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/upmendex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdf</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-pdfLaTeX {#g9f8b777}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pdfLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/pdflatex %O  -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/makeindex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdf</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-LuaLaTeX {#o5201be5}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-LuaLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/lualatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/upmendex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdf</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-LuaJITLaTeX {#j65f502c}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-LuaJITLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/luajitlatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/upmendex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdf</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-XeLaTeX {#j68480c3}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-XeLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/xelatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/upmendex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdf</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### 設定後 {#me50c549}

デフォルトを upLaTeX (ptex2pdf) または pdfupLaTeX に変更します．<br>
タイプセットのコンソール出力を確認したい場合は 「コンソール出力を表示しない」 に 『表示する』 を指定します．<br>

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXworksの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　全体　\]\[　エディタ　\]\[　プレビュー　\]</ins></span><strong>\[　タイプセット　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　スクリプト　\]</ins></span><br>
　　　　TeXおよび関連プログラムのパス<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/go-down.png" alt="go down" width="25" height="25">\]</span><br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>

<br>

　　　　タイプセットの方法<br>
　　　　<span style="color:Black;background-color:#DAEAFF;"> upLaTeX (ptex2pdf)　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　　 <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/go-down.png" alt="go down" width="25" height="25">\]</span><br>
　　　　 pdfupLaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 編集 \]</span><br>
　　　　 pdfupLaTeX2<br>
　　　　 pLaTeX-ng<br>
　　　　 pdfTeX<br>
　　　　 pdfLaTeX<br>
　　　　 LuaTeX<br>
　　　　 LuaLaTeX<br>
　　　　 XeTeX<br>
　　　　 XeLaTeX<br>
　　　　 ConTeXt (LuaTeX)<br>
　　　　 ConTeXt (pdfTeX)<br>
　　　　 ConTeXt (XeTeX)<br>
　　　　 Latexmk<br>
　　　　 Latexmk-upLaTeX-pdfdvi<br>
　　　　 Latexmk-upLaTeX-pdfps<br>
　　　　 Latexmk-pLaTeX-ng<br>
　　　　 Latexmk-pdfLaTeX<br>
　　　　 Latexmk-LuaLaTeX<br>
　　　　 Latexmk-LuaJITLaTeX<br>
　　　　 Latexmk-XeLaTeX<br>
　　　　 BibTeX<br>
　　　　 MakeIndex<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　　　デフォルト: <span style="color:Black;background-color:#EEEEEE;">\[ upLaTeX (ptex2pdf)　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　　　コンソール出力を表示しない 　　<span style="color:Black;background-color:#EEEEEE;">\[ 表示する　　　　　　　　　　　　　　　▼\]</span><br>

***

## [SumatraPDF](/SumatraPDF/) との連携 {#b23c23fc}

### pdfupLaTeXS {#u9e90942}

pdfuplatexS.bat を作成します．

***

- pdfuplatexS.bat

***

```
@echo off
ptex2pdf -u -l -ot "-synctex=1 -kanji=utf8 -no-guess-input-enc" %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "%~n1.pdf" | ^
cmd
)
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeXS</ins><br>
　　プログラム: <ins>pdfuplatexS.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfupLaTeX2S {#t907f818}

pdfuplatex2S.bat を作成します．

***

- pdfuplatex2S.bat

***

```
@echo off
uplatex -synctex=1 -kanji=utf8 -no-guess-input-enc %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.exe "%~n1.ps" && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "%~n1.pdf" | ^
cmd
)
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeX2S</ins><br>
　　プログラム: <ins>pdfuplatex2S.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pLaTeX-ngS {#v97bad02}

platex-ngS.bat を作成します．

***

- platex-ngS.bat

***

```
@echo off
platex-ng -synctex=1 %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "%~n1.pdf" | ^
cmd
)
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pLaTeX-ngS</ins><br>
　　プログラム: <ins>platex-ngS.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfLaTeXS {#o1cdfc13}

pdflatexS.bat を作成します．

***

- pdflatexS.bat

***

```
@echo off
pdflatex -synctex=1 %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "%~n1.pdf" | ^
cmd
)
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pdfLaTeXS</ins><br>
　　プログラム: <ins>pdflatexS.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### LuaLaTeXS {#m4152f1a}

lualatexS.bat を作成します．

***

- lualatexS.bat

***

```
@echo off
lualatex -synctex=1 %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "%~n1.pdf" | ^
cmd
)
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>LuaLaTeXS</ins><br>
　　プログラム: <ins>lualatexS.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### LuaJITLaTeXS {#y2650097}

luajitlatexS.bat を作成します．

***

- luajitlatexS.bat

***

```
@echo off
luajitlatex -synctex=1 %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "%~n1.pdf" | ^
cmd
)
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>LuaJITLaTeXS</ins><br>
　　プログラム: <ins>luajitlatexS.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### XeLaTeXS {#i07eb3dd}

xelatexS.bat を作成します．

***

- xelatexS.bat

***

```
@echo off
xelatex -synctex=1 %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "%~n1.pdf" | ^
cmd
)
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>XeLaTeXS</ins><br>
　　プログラム: <ins>xelatexS.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### inverse search {#kfe751af}

TeX コマンドのオプションに -synctex=1 を追加します．

SumatraPDF の \[☰\]-\[設定(S)\]-\[オプション(O)...\] の逆順検索コマンドラインの設定に以下の記述を設定します．<br>

```
"C:\texlive\2015\tlpkg\texworks\texworks.exe" --position=%l "%f"
```

&#x2d;-position オプションはファイル名よりも先に指定しなければうまくいきません．

## Adobe Acrobat Reader DC との連携 {#jad25a78}

### pdfupLaTeXA {#p7c5112a}

pdfuplatexA.bat を作成します．

***

- pdfuplatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --r15 --file "%~n1.pdf" && ^
pdfclose --r15 --file "%~n1.pdf" & ^
ptex2pdf -u -l -ot "-synctex=1 -kanji=utf8 -no-guess-input-enc" %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --r15 --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeXA</ins><br>
　　プログラム: <ins>pdfuplatexA.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfupLaTeX2A {#e6ab4d81}

pdfuplatex2A.bat を作成します．

***

- pdfuplatex2A.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --r15 --file "%~n1.pdf" && ^
pdfclose --r15 --file "%~n1.pdf" & ^
uplatex -synctex=1 -kanji=utf8 -no-guess-input-enc %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.exe "%~n1.ps" && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --r15 --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeX2A</ins><br>
　　プログラム: <ins>pdfuplatex2A.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pLaTeX-ngA {#s0b5764b}

platex-ngA.bat を作成します．

***

- platex-ngA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --r15 --file "%~n1.pdf" && ^
pdfclose --r15 --file "%~n1.pdf" & ^
platex-ng -synctex=1 %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --r15 --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pLaTeX-ngA</ins><br>
　　プログラム: <ins>platex-ngA.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfLaTeXA {#x2b72c74}

pdflatexA.bat を作成します．

***

- pdflatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --r15 --file "%~n1.pdf" && ^
pdfclose --r15 --file "%~n1.pdf" & ^
pdflatex -synctex=1 %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --r15 --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pdfLaTeXA</ins><br>
　　プログラム: <ins>pdflatexA.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### LuaLaTeXA {#w51d9af4}

lualatexA.bat を作成します．

***

- lualatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --r15 --file "%~n1.pdf" && ^
pdfclose --r15 --file "%~n1.pdf" & ^
lualatex -synctex=1 %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --r15 --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>LuaLaTeXA</ins><br>
　　プログラム: <ins>lualatexA.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### LuaJITLaTeXA {#o93f36df}

luajitlatexA.bat を作成します．

***

- luajitlatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --r15 --file "%~n1.pdf" && ^
pdfclose --r15 --file "%~n1.pdf" & ^
luajitlatex -synctex=1 %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --r15 --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>LuaJITLaTeXA</ins><br>
　　プログラム: <ins>luajitlatexA.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### XeLaTeXA {#rf592c22}

xelatexA.bat を作成します．

***

- xelatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --r15 --file "%~n1.pdf" && ^
pdfclose --r15 --file "%~n1.pdf" & ^
xelatex -synctex=1 %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --r15 --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>XeLaTeXA</ins><br>
　　プログラム: <ins>xelatexA.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://github.com/TeXworks/texworks/raw/master/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***
