---
title: "TeXworks/設定/Windows"
url: "/TeXworks/設定/Windows/"
date: 2012-07-13T02:57:05Z
pukiwiki: "TeXworks/設定/Windows"
---

# TeXworks/設定/Windows

[TeXworks](/TeXworks/) > [設定](</TeXworks/設定/>) > [Windows](</Microsoft Windows/>)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## タイプセットの設定 {#q50d2378}

### [W32TeX](/W32TeX/), [TeX Live](</TeX Live/>) {#kaca20c0}

#### 設定前 {#n2341fff}

W32TeX の TeXworks は pdfpLaTeX がデフォルトになっていますが，公式サイトで配布されている TeXworks と TeX Live の TeXworks は pdfLaTeX がデフォルトになっています．<br>
pdfplatex.bat, pdfplatex2.bat, pdfuplatex.bat, pdfuplatex2.bat, latexmk-pdfpLaTeX, latexmk-pdfpLaTeX2, latexmk-pdfupLaTeX, latexmk-pdfupLaTeX2, latexmk-pdfLaTeX, latexmk-LuaLaTeX, latexmk-LuaJITLaTeX, latexmk-XeLaTeX, pbibtex, upbibtex, mendex を使ってタイプセットできるように設定します．<br>
W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>
タイプセットの設定については [Common Workflows](https://code.google.com/p/texworks/wiki/AdvancedTypesettingTools#Common_Workflows) にも記述されているので参考にしてください．<br>
$synctexoption, $fullname, $basename などの意味に関しては，[Defining new typesetting tools](https://code.google.com/p/texworks/wiki/AdvancedTypesettingTools#Defining_new_typesetting_tools) を参照してください．<br>

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>TeXworksの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　全体　\]\[　エディタ　\]\[　プレビュー　\]</ins></span><strong>\[　タイプセット　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　スクリプト　\]</ins></span><br>
　　　　TeXおよび関連プログラムのパス<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/go-down.png" alt="go down" width="25" height="25">\]</span><br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>

<br>

　　　　タイプセットの方法<br>
　　　　<span style="color:White;background-color:#1188FF;"> pdfTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/go-down.png" alt="go down" width="25" height="25">\]</span><br>
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
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　　　デフォルト: <span style="color:Black;background-color:#EEEEEE;">\[ pdfLaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　　　コンソール出力を表示しない 　　<span style="color:Black;background-color:#EEEEEE;">\[ 自動で隠す　　　　　　　　　　　　　　▼\]</span><br>

***

#### pdfpLaTeX {#nb7beec9}

■ TeX Live 2013 の場合

pdfplatex.bat を作成して pdfplatex.bat で PDF ファイルを作成します．

***

- C:\texlive\2013\bin\win32\pdfplatex.bat

***

```
@echo off
platex -synctex=1 -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvipdfmx "%~n1"
```

***

IPAexフォントを埋め込む場合はコマンド プロンプトから

```
kanji-config-updmap ipaex
```

を実行します．<br>

■ W32TeX の場合

W32TeX の場合は pdfplatex.bat がデフォルトで含まれています．

***

- C:\w32tex\bin\pdfplatex.bat

***

```
@echo off
platex -synctex=1 -jobname="%~n1" -kanji=utf8 -guess-input-enc %1 && dvipdfmx "%~n1"
```

***

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeX</ins><br>
　　プログラム: <ins>pdfplatex.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

[ptex2pdf](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/ptex2pdf/ptex2pdf.lua?view=markup) を使って設定しても OK です．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeX</ins><br>
　　プログラム: <ins>ptex2pdf</ins><br>
　　引数:　　　　<ins>-l</ins><br>
　　　　　　　　　<ins>-ot</ins><br>
　　　　　　　　　<ins>$synctexoption -guess-input-enc -kanji=utf8 -jobname='$basename'</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### pdfpLaTeX2 {#y6e650d6}

pdfplatex2.bat を作成して pdfplatex2.bat で PDF ファイルを作成します．

convbkmk の実行には [Ruby](http://www.ruby-lang.org/ja/) が必要です．<br>
Ruby は [RubyInstaller](http://rubyinstaller.org/) でインストールできます．<br>

***

- C:\texlive\2013\bin\win32\pdfplatex2.bat
- C:\w32tex\bin\pdfplatex2.bat

***

```
@echo off
platex -synctex=1 -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -g > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps"
```

***

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeX2</ins><br>
　　プログラム: <ins>pdfplatex2.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### pdfupLaTeX {#r7f9a2a4}

pdfuplatex.bat を作成して pdfuplatex.bat で PDF ファイルを作成します．

■ TeX Live 2013 の場合

***

- C:\texlive\2013\bin\win32\pdfuplatex.bat

***

```
@echo off
uplatex -synctex=1 -kanji=utf8 -no-guess-input-enc %1 && ^
dvipdfmx "%~n1"
```

***

IPAexフォントを埋め込む場合はコマンド プロンプトから

```
kanji-config-updmap ipaex
```

を実行します．<br>

■ W32TeX の場合

***

- C:\w32tex\bin\pdfuplatex.bat

***

```
@echo off
uplatex -synctex=1 -kanji=utf8 -no-guess-input-enc %1 && ^
dvipdfmx "%~n1"
```

***

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

[ptex2pdf](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/ptex2pdf/ptex2pdf.lua?view=markup) を使って設定しても OK です．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeX</ins><br>
　　プログラム: <ins>ptex2pdf</ins><br>
　　引数:　　　　<ins>-l</ins><br>
　　　　　　　　　<ins>-u</ins><br>
　　　　　　　　　<ins>-ot</ins><br>
　　　　　　　　　<ins>$synctexoption -no-guess-input-enc -kanji=utf8</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### pdfupLaTeX2 {#cf95a9e9}

pdfuplatex2.bat を作成して pdfuplatex2.bat で PDF ファイルを作成します．

convbkmk の実行には [Ruby](http://www.ruby-lang.org/ja/) が必要です．<br>
Ruby は [RubyInstaller](http://rubyinstaller.org/) でインストールできます．<br>

***

- C:\texlive\2013\bin\win32\pdfuplatex2.bat
- C:\w32tex\bin\pdfuplatex2.bat

***

```
@echo off
uplatex -synctex=1 -kanji=utf8 -no-guess-input-enc %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps"
```

***

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk {#u0fa8c19}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-pdfpLaTeX {#ub925a5a}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

■ TeX Live の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pdfpLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/platex %O -synctex=1 -kanji=utf8 -guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/pbibtex %O -kanji=utf8 %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex %O -U -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx %O -f ptex-ipaex.map -f otf-ipaex.map -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

■ W32TeX の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pdfpLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/platex %O -synctex=1 -kanji=utf8 -guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/pbibtex %O -kanji=utf8 %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex %O -U -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx %O -f ipaex.map -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-pdfpLaTeX2 {#xd83ee9b}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

■ TeX Live の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pdfpLaTeX2</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/platex %O -synctex=1 -kanji=utf8 -guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/pbibtex %O -kanji=utf8 %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex %O -U -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvips=q/dvips %O -z -f %S | convbkmk -g > %D/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$ps2pdf=q/ps2pdf %O %S %D/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfps</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

■ W32TeX の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pdfpLaTeX2</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/platex %O -synctex=1 -kanji=utf8 -guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/pbibtex %O -kanji=utf8 %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex %O -U -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvips=q/dvips %O -z -f %S | convbkmk -g > %D/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$ps2pdf=q/ps2pdf.bat %O %S %D/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfps</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-pdfupLaTeX {#t6b9c629}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

■ TeX Live の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pdfupLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex %O -synctex=1 -kanji=utf8 -no-guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex %O -U -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx %O -f uptex-ipaex.map -f otf-up-ipaex.map -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

■ W32TeX の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pdfupLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex %O -synctex=1 -kanji=utf8 -no-guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex %O -U -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx %O -f ipaex.map -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-pdfupLaTeX2 {#h1fdd4cd}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

■ TeX Live の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pdfupLaTeX2</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex %O -synctex=1 -kanji=utf8 -no-guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex %O -U -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$ps2pdf=q/ps2pdf %O %S %D/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfps</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

■ W32TeX の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pdfupLaTeX2</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex %O -synctex=1 -kanji=utf8 -no-guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex %O -U -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$ps2pdf=q/ps2pdf.bat %O %S %D/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfps</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-pdfLaTeX {#g9f8b777}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-pdfLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/pdflatex %O  -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/makeindex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdf</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-LuaLaTeX {#o5201be5}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-LuaLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/lualatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtexu %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/texindy %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-lualatex</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-LuaJITLaTeX {#j65f502c}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-LuaJITLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/luajitlatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtexu %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/texindy %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-lualatex</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-XeLaTeX {#j68480c3}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk-XeLaTeX</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/xelatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtexu %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/texindy %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-xelatex</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### pBibTeX {#a883f235}

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するのチェックをはずしてください．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pBibTeX</ins><br>
　　プログラム: <ins>pbibtex.exe</ins><br>
　　引数:　　　　<ins>-kanji=utf8</ins><br>
　　　　　　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

#### upBibTeX {#n4723fa1}

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するのチェックをはずしてください．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>upBibTeX</ins><br>
　　プログラム: <ins>upbibtex.exe</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

#### Mendex {#ef14bad7}

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するのチェックをはずしてください．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Mendex</ins><br>
　　プログラム: <ins>mendex.exe</ins><br>
　　引数:　　　　<ins>-U</ins><br>
　　　　　　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

#### 設定後 {#me50c549}

デフォルトを pdfpLaTeX に変更します．<br>
タイプセットのコンソール出力を確認したい場合は 「コンソール出力を表示しない」 に 『表示する』 を指定します．<br> <!-- TeXworks Version 0.5 [[r.793:https://code.google.com/p/texworks/source/detail?r=793]] 以降の場合は Hide output panel: に Never を指定します．~ -->

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>TeXworksの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　全体　\]\[　エディタ　\]\[　プレビュー　\]</ins></span><strong>\[　タイプセット　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　スクリプト　\]</ins></span><br>
　　　　TeXおよび関連プログラムのパス<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/go-down.png" alt="go down" width="25" height="25">\]</span><br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>

<br>

　　　　タイプセットの方法<br>
　　　　<span style="color:White;background-color:#1188FF;"> pdfpLaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/go-down.png" alt="go down" width="25" height="25">\]</span><br>
　　　　 pdfpLaTeX2　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 編集 \]</span><br>
　　　　 pdfupLaTeX<br>
　　　　 pdfupLaTeX2<br>
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
　　　　 Latexmk-pdfpLaTeX<br>
　　　　 Latexmk-pdfpLaTeX2<br>
　　　　 Latexmk-pdfupLaTeX<br>
　　　　 Latexmk-pdfupLaTeX2<br>
　　　　 Latexmk-pdfLaTeX<br>
　　　　 Latexmk-pdfLuaLaTeX<br>
　　　　 Latexmk-pdfLuaJITLaTeX<br>
　　　　 Latexmk-XeLaTeX<br>
　　　　 pBibTeX<br>
　　　　 upBibTeX<br>
　　　　 BibTeX<br>
　　　　 Mendex<br>
　　　　 MakeIndex<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　　　デフォルト: <span style="color:Black;background-color:#EEEEEE;">\[ pdfpLaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　　　コンソール出力を表示しない 　　<span style="color:Black;background-color:#EEEEEE;">\[ 表示する　　　　　　　　　　　　　　　▼\]</span><br>

***

## [SumatraPDF](/SumatraPDF/) との連携 {#b23c23fc}

### pdfpLaTeXS {#pd4ad539}

pdfplatexS.bat を作成します．

***

- C:\w32tex\bin\pdfplatexS.bat

***

```
@echo off
setlocal
if exist "C:\Program Files\SumatraPDF\SumatraPDF.exe" (
set SUMATRAPDF=C:\Program Files\SumatraPDF\SumatraPDF.exe
) else set SUMATRAPDF=C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe
platex -synctex=1 -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvipdfmx "%~n1" && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo "%SUMATRAPDF%" -reuse-instance "%~n1.pdf" | ^
cmd
)
endlocal
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeXS</ins><br>
　　プログラム: <ins>pdfplatexS.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfpLaTeX2S {#g68658bc}

pdfplatex2S.bat を作成します．

***

- C:\w32tex\bin\pdfplatex2S.bat

***

```
@echo off
setlocal
if exist "C:\Program Files\SumatraPDF\SumatraPDF.exe" (
set SUMATRAPDF=C:\Program Files\SumatraPDF\SumatraPDF.exe
) else set SUMATRAPDF=C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe
platex -synctex=1 -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -g > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo "%SUMATRAPDF%" -reuse-instance "%~n1.pdf" | ^
cmd
)
endlocal
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeX2S</ins><br>
　　プログラム: <ins>pdfplatex2S.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfupLaTeXS {#u9e90942}

pdfuplatexS.bat を作成します．

***

- C:\w32tex\bin\pdfuplatexS.bat

***

```
@echo off
setlocal
if exist "C:\Program Files\SumatraPDF\SumatraPDF.exe" (
set SUMATRAPDF=C:\Program Files\SumatraPDF\SumatraPDF.exe
) else set SUMATRAPDF=C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe
uplatex -synctex=1 -kanji=utf8 -no-guess-input-enc %1 && ^
dvipdfmx "%~n1" && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo "%SUMATRAPDF%" -reuse-instance "%~n1.pdf" | ^
cmd
)
endlocal
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfupLaTeX2S {#t907f818}

pdfuplatex2S.bat を作成します．

***

- C:\w32tex\bin\pdfuplatex2S.bat

***

```
@echo off
setlocal
if exist "C:\Program Files\SumatraPDF\SumatraPDF.exe" (
set SUMATRAPDF=C:\Program Files\SumatraPDF\SumatraPDF.exe
) else set SUMATRAPDF=C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe
uplatex -synctex=1 -kanji=utf8 -no-guess-input-enc %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo "%SUMATRAPDF%" -reuse-instance "%~n1.pdf" | ^
cmd
)
endlocal
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfLaTeXS {#o1cdfc13}

pdflatexS.bat を作成します．

***

- C:\w32tex\bin\pdflatexS.bat

***

```
@echo off
setlocal
if exist "C:\Program Files\SumatraPDF\SumatraPDF.exe" (
set SUMATRAPDF=C:\Program Files\SumatraPDF\SumatraPDF.exe
) else set SUMATRAPDF=C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe
pdflatex -synctex=1 %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo "%SUMATRAPDF%" -reuse-instance "%~n1.pdf" | ^
cmd
)
endlocal
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### LuaLaTeXS {#m4152f1a}

lualatexS.bat を作成します．

***

- C:\w32tex\bin\lualatexS.bat

***

```
@echo off
setlocal
if exist "C:\Program Files\SumatraPDF\SumatraPDF.exe" (
set SUMATRAPDF=C:\Program Files\SumatraPDF\SumatraPDF.exe
) else set SUMATRAPDF=C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe
lualatex -synctex=1 %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo "%SUMATRAPDF%" -reuse-instance "%~n1.pdf" | ^
cmd
)
endlocal
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### LuaJITLaTeXS {#y2650097}

luajitlatexS.bat を作成します．

***

- C:\w32tex\bin\luajitlatexS.bat

***

```
@echo off
setlocal
if exist "C:\Program Files\SumatraPDF\SumatraPDF.exe" (
set SUMATRAPDF=C:\Program Files\SumatraPDF\SumatraPDF.exe
) else set SUMATRAPDF=C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe
luajitlatex -synctex=1 %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo "%SUMATRAPDF%" -reuse-instance "%~n1.pdf" | ^
cmd
)
endlocal
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### XeLaTeXS {#i07eb3dd}

xelatexS.bat を作成します．

***

- C:\w32tex\bin\xelatexS.bat

***

```
@echo off
setlocal
if exist "C:\Program Files\SumatraPDF\SumatraPDF.exe" (
set SUMATRAPDF=C:\Program Files\SumatraPDF\SumatraPDF.exe
) else set SUMATRAPDF=C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe
xelatex -synctex=1 %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo "%SUMATRAPDF%" -reuse-instance "%~n1.pdf" | ^
cmd
)
endlocal
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### inverse search {#kfe751af}

TeX コマンドのオプションに -synctex=1 を追加します．

SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に

```
C:\w32tex\share\texworks\TeXworks.exe --position=%l "%f"
```

&#x2d;-position オプションはファイル名よりも先に指定しなければうまくいきません．

## [Adobe Reader](</Adobe Reader/>) との連携 {#jad25a78}

### pdfpLaTeXA {#e7697990}

pdfplatexA.bat を作成します．

***

- C:\w32tex\bin\pdfplatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
platex -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvipdfmx "%~n1" && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeXA</ins><br>
　　プログラム: <ins>pdfplatexA.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfpLaTeX2A {#h1e57c7f}

pdfplatex2A.bat を作成します．

***

- C:\w32tex\bin\pdfplatex2A.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
platex -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -g > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeX2A</ins><br>
　　プログラム: <ins>pdfplatex2A.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfupLaTeXA {#p7c5112a}

pdfuplatexA.bat を作成します．

***

- C:\w32tex\bin\pdfuplatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
uplatex -kanji=utf8 -no-guess-input-enc %1 && ^
dvipdfmx "%~n1" && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfupLaTeX2A {#e6ab4d81}

pdfuplatex2A.bat を作成します．

***

- C:\w32tex\bin\pdfuplatex2A.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
uplatex -kanji=utf8 -no-guess-input-enc %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### pdfLaTeXA {#x2b72c74}

pdflatexA.bat を作成します．

***

- C:\w32tex\bin\pdflatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
pdflatex %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### LuaLaTeXA {#w51d9af4}

lualatexA.bat を作成します．

***

- C:\w32tex\bin\lualatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
lualatex %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### LuaJITLaTeXA {#o93f36df}

luajitlatexA.bat を作成します．

***

- C:\w32tex\bin\luajitlatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
luajitlatex %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### XeLaTeXA {#rf592c22}

xelatexA.bat を作成します．

***

- C:\w32tex\bin\xelatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
pdfopen --rxi --file "%~n1.pdf" && ^
pdfclose --rxi --file "%~n1.pdf" & ^
xelatex %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --rxi --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

## 関連リンク {#n8b7f53c}

- [TeXworksの設定](http://www.netplan.co.jp/archives/2167)
