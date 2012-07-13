---
title: "TeXworks/設定/Windows"
url: "/TeXworks/設定/Windows/"
date: 2012-07-13T02:57:05Z
pukiwiki: "TeXworks/設定/Windows"
---

# TeXworks/設定/Windows

[TeXworks](/TeXworks/) > [設定](</TeXworks/設定/>) > Windows

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

```

```

## タイプセットの設定 {#q50d2378}

### [W32TeX](/W32TeX/), [TeX Live](</TeX Live/>) {#kaca20c0}

#### 設定前 {#n2341fff}

W32TeX の TeXworks は pdfpLaTeX がデフォルトになっていますが，公式サイトで配布されている TeXworks と TeX Live の TeXworks は pdfLaTeX がデフォルトになっています．<br>
latexmk, pdfplatex1.bat, pdfplatex2.bat, pdfuplatex1.bat, pdfuplatex2.bat, pbibtex, upbibtex, mendex を使ってタイプセットできるように設定します．<br>
latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>
タイプセットの設定については [Common Workflows](http://code.google.com/p/texworks/wiki/AdvancedTypesettingTools#Common_Workflows) にも記述されているので参考にしてください．<br>
$synctexoption, $fullname, $basename などの意味に関しては，[Defining new typesetting tools](http://code.google.com/p/texworks/wiki/AdvancedTypesettingTools#Defining_new_typesetting_tools) を参照してください．<br>

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

#### Latexmk1 {#ub925a5a}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

■ W32TeX の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk1</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/platex" "-synctex=1" "-kanji=utf8" "-guess-input-enc/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/pbibtex" "-kanji=utf8/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex" "-U/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx" "%O" "-o" "%D" "%S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

■ TeX Live の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk1</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/platex" "-synctex=1" "-kanji=utf8" "-guess-input-enc/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/pbibtex" "-kanji=utf8/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex" "-U/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx" "%O" "-f" "ptex-ipaex.map" "-o" "%D" "%S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk2 {#xd83ee9b}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

■ bkmk2uni を使用する場合<br>

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk2</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/platex" "-synctex=1" "-kanji=utf8" "-guess-input-enc/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/pbibtex" "-kanji=utf8/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex" "-U/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvips=q/dvips" "%O" "-z" "-f" "%S" "|" "bkmk2uni" ">" "%D/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$ps2pdf=q/ps2pdf.bat" "%O" "%S" "%D/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfps</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

■ convbkmk を使用する場合<br>

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk2</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/platex" "-synctex=1" "-kanji=utf8" "-guess-input-enc/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/pbibtex" "-kanji=utf8/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex" "-U/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvips=q/dvips" "%O" "-z" "-f" "%S" "|" "convbkmk" "-g" ">" "%D/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$ps2pdf=q/ps2pdf.bat" "%O" "%S" "%D/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfps</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk3 {#t6b9c629}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

■ W32TeX の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk3</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex" "-synctex=1" "-kanji=utf8" "-no-guess-input-enc/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex" "-U/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx" "%O" "-o" "%D" "%S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

■ TeX Live の場合

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk3</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex" "-synctex=1" "-kanji=utf8" "-no-guess-input-enc/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex" "-U/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx" "%O" "-f" "ptex-ipaex.map" "-o" "%D" "%S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk4 {#h1fdd4cd}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk4</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex" "-synctex=1" "-kanji=utf8" "-no-guess-input-enc/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex" "-U/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvips=q/dvips" "%O" "-z" "-f" "%S" "|" "convbkmk" "-u" ">" "%D/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$ps2pdf=q/ps2pdf.bat" "%O" "%S" "%D/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfps</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### pdfpLaTeX {#nb7beec9}

pdfplatex1.bat を作成して pdfplatex1.bat で PDF ファイルを作成します．

■ W32TeX の場合

***

- C:\w32tex\bin\pdfplatex1.bat

***

```
@echo off
platex -synctex=1 -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvipdfmx "%~n1"
```

***

■ TeX Live の場合

***

- C:\texlive\2012\bin\win32\pdfplatex1.bat

***

```
@echo off
platex -synctex=1 -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvipdfmx -f ptex-ipaex.map "%~n1"
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
　　プログラム: <ins>pdfplatex1.bat</ins><br>
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

#### pdfpLaTeX2 {#y6e650d6}

pdfplatex2.bat を作成して pdfplatex2.bat で PDF ファイルを作成します．

■ bkmk2uni を使用する場合<br>

***

- C:\w32tex\bin\pdfplatex2.bat

***

```
@echo off
platex -synctex=1 -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
bkmk2uni > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps"
```

***

■ convbkmk を使用する場合<br>
convbkmk の実行には [Ruby](http://www.ruby-lang.org/ja/) が必要です．<br>
Ruby は [RubyInstaller](http://rubyinstaller.org/) でインストールできます．<br>

***

- C:\w32tex\bin\pdfplatex2.bat
- C:\texlive\2012\bin\win32\pdfplatex2.bat

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

pdfuplatex1.bat を作成して pdfuplatex1.bat で PDF ファイルを作成します．

■ W32TeX の場合

***

- C:\w32tex\bin\pdfuplatex1.bat

***

```
@echo off
uplatex -synctex=1 -kanji=utf8 -no-guess-input-enc %1 && ^
dvipdfmx "%~n1"
```

***

■ TeX Live の場合

***

- C:\texlive\2012\bin\win32\pdfuplatex1.bat

***

```
@echo off
uplatex -synctex=1 -kanji=utf8 -no-guess-input-enc %1 && ^
dvipdfmx -f ptex-ipaex.map "%~n1"
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
　　プログラム: <ins>pdfuplatex1.bat</ins><br>
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

#### pdfupLaTeX2 {#cf95a9e9}

pdfuplatex2.bat を作成して pdfuplatex2.bat で PDF ファイルを作成します．

convbkmk の実行には [Ruby](http://www.ruby-lang.org/ja/) が必要です．<br>
Ruby は [RubyInstaller](http://rubyinstaller.org/) でインストールできます．<br>

***

- C:\w32tex\bin\pdfuplatex2.bat
- C:\texlive\2012\bin\win32\pdfuplatex2.bat

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
「コンソール出力を表示しない」 に 『表示する』 を指定します．<br> <!-- TeXworks Version 0.5 [[r.793:http://code.google.com/p/texworks/source/detail?r=793]] 以降の場合は Hide output panel: に Never を指定します．~ -->

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
　　　　 Latexmk1　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/go-down.png" alt="go down" width="25" height="25">\]</span><br>
　　　　 Latexmk2　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 編集 \]</span><br>
　　　　 Latexmk3<br>
　　　　 Latexmk4<br>
　　　　<span style="color:White;background-color:#1188FF;"> pdfpLaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　　 pdfpLaTeX2<br>
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

pdfplatex1S.bat を作成します．

***

- C:\w32tex\bin\pdfplatex1S.bat

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
　　プログラム: <ins>pdfplatex1S.bat</ins><br>
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

pdfuplatex1S.bat を作成します．

***

- C:\w32tex\bin\pdfuplatex1S.bat

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
　　プログラム: <ins>pdfuplatex1S.bat</ins><br>
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

pdfplatex1A.bat を作成します．

***

- C:\w32tex\bin\pdfplatex1A.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
echo exit | ^
pdfdde & ^
platex -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvipdfmx "%~n1" && ^
pdfopen --file "%~n1.pdf"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeXA</ins><br>
　　プログラム: <ins>pdfplatex1A.bat</ins><br>
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
echo exit | ^
pdfdde & ^
platex -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -g > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
pdfopen --file "%~n1.pdf"
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

pdfuplatex1A.bat を作成します．

***

- C:\w32tex\bin\pdfuplatex1A.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
echo exit | ^
pdfdde & ^
uplatex -kanji=utf8 -no-guess-input-enc %1 && ^
dvipdfmx "%~n1" && ^
pdfopen --file "%~n1.pdf"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeXA</ins><br>
　　プログラム: <ins>pdfuplatex1A.bat</ins><br>
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
echo exit | ^
pdfdde & ^
uplatex -kanji=utf8 -no-guess-input-enc %1 && ^
dvips -Ppdf -z -f "%~n1.dvi" | ^
convbkmk -u > "%~n1.ps" && ^
ps2pdf.bat "%~n1.ps" && ^
pdfopen --file "%~n1.pdf"
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
echo exit | ^
pdfdde & ^
pdflatex %1 && ^
pdfopen --file "%~n1.pdf"
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
echo exit | ^
pdfdde & ^
lualatex %1 && ^
pdfopen --file "%~n1.pdf"
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

### XeLaTeXA {#rf592c22}

xelatexA.bat を作成します．

***

- C:\w32tex\bin\xelatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | ^
findstr "AcroRd32.exe" > nul && ^
echo exit | ^
pdfdde & ^
xelatex %1 && ^
pdfopen --file "%~n1.pdf"
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

## [dviout](/dviout/) との連携 (非推奨) {#d2be9fd8}

[dviout#forward and inverse search](/dviout/#ycc841a2) を参照．

[dviout#プレビューの自動更新](/dviout/#t2d3346c) を参照して，dviout の設定を行います．

### dvipLaTeX {#q4767b5e}

dviplatex.bat を作成します．

***

- C:\w32tex\bin\dviplatex.bat

***

```
@echo off
setlocal
set DVIOUT=C:\w32tex\dviout\dviout.exe
platex -src-specials -kanji=utf8 -guess-input-enc -jobname="%~n1" %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq dviout.exe" /nh | ^
findstr "dviout.exe" > nul || ^
echo "%DVIOUT%" -1 "%~n1.dvi" | ^
cmd
)
endlocal
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>dvipLaTeX</ins><br>
　　プログラム: <ins>dviplatex.bat</ins><br>
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

### dviupLaTeX {#e7579615}

[dviout#upTeX で出力された DVI ファイルを dviout で表示する場合の注意点](/dviout/#wadc9abf) を参照して，dviout の設定を行います．

dviuplatex.bat を作成します．

***

- C:\w32tex\bin\dviuplatex.bat

***

```
@echo off
setlocal
set DVIOUT=C:\w32tex\dviout\dviout.exe
uplatex -src-specials -kanji=utf8 -no-guess-input-enc %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq dviout.exe" /nh | ^
findstr "dviout.exe" > nul || ^
echo "%DVIOUT%" -1 "%~n1.dvi" | ^
cmd
)
endlocal
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:Black;background-color:#007BBB;"><ins>　　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　　名前:　　　　<ins>dviupLaTeX</ins><br>
　　プログラム: <ins>dviuplatex.bat</ins><br>
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

### inverse search {#k17f3637}

TeX コマンドのオプションに -src-specials を追加します．

dviout の \[Option\]-\[Setup Parameters...\]-\[Common\]-\[src:\] に

```
C:\w32tex\share\texworks\TeXworks.exe^s --position=%d "%s"
```

&#x2d;-position オプションはファイル名よりも先に指定しなければうまくいきません．
