---
title: "TeXworks/設定"
url: "/TeXworks/設定/"
date: 2012-07-12T19:39:57Z
bookCollapseSection: true
pukiwiki: "TeXworks/設定"
---

# TeXworks/設定

## タイプセットの設定 {#q50d2378}

### [W32TeX](/W32TeX/), [TeX Live](</TeX Live/>) (Windows) {#kaca20c0}

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

### [MacTeX &amp; TeX Live](/Mac/#f5466652) ([OS X](/Mac/)) {#p614bf13}

[TeXworks#タイプセットの設定#TeX Live (Linux)](/TeXworks/#y48c4d8a) を参照．

### [TeX Live](</TeX Live/>) ([Linux](/Linux/)) {#y48c4d8a}

#### Latexmk1 {#mef164a7}

タイプセットの方法を設定します．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk1</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/platex -synctex=1/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/pbibtex/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx %O -f ptex-ipaex.map -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk2 {#zf4308f5}

タイプセットの方法を設定します．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk2</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/platex -synctex=1/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/pbibtex/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex/</ins><br>
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

#### Latexmk3 {#xb8626bf}

タイプセットの方法を設定します．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk3</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex -synctex=1/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx %O -f ptex-ipaex.map -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk4 {#bfa76c53}

タイプセットの方法を設定します．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk4</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex -synctex=1/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/mendex/</ins><br>
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

#### pdfpLaTeX {#ed42a6c2}

pdfplatex (シェルスクリプト) を作成します．

***

- pdfplatex

***

```
#!/bin/sh
platex -synctex=1 "$1" && \
dvipdfmx -f ptex-ipaex.map "`basename "$1" .tex`"
```

***

chmod で実行権限を付加します．

```
$ chmod +x pdfplatex
```

TeXおよび関連プログラムのパスに存在するディレクトリに pdfplatex をコピー

```
$ sudo cp -p pdfplatex /usr/local/bin
```

またはTeXおよび関連プログラムのパスに pdfplatex の存在するディレクトリを追加します．

タイプセットの方法を設定します．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeX</ins><br>
　　プログラム:　 <ins>pdfplatex</ins><br>
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

[simpdftex](http://www.tug.org/svn/texlive/trunk/Master/texmf/scripts/simpdftex/simpdftex?view=markup) を使って設定しても OK です．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeX</ins><br>
　　プログラム:　 <ins>simpdftex</ins><br>
　　引数:　　　　<ins>platex</ins><br>
　　　　　　　　　<ins>--mode</ins><br>
　　　　　　　　　<ins>dvipdfmx</ins><br>
　　　　　　　　　<ins>--extratexopts</ins><br>
　　　　　　　　　<ins>$synctexoption</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

ただし simpdftex を使用する方法だとエラーが発生してもそのまま dvipdfmx を実行してしまうようです．

[TeX Live](</TeX Live/>) には latexmk も含まれているので latexmk を使用しても OK です．

#### pdfpLaTeX2 {#qcbb3b20}

<!-- tlptexlive をインストールしていない場合は convbkmk.rb を wget します． -->
<!--  -->
<!-- $ wget http://homepage3.nifty.com/ttk/comp/tex/convbkmk.rb -->
<!--  -->
<!-- chmod で実行権限を付加します． -->
<!--  -->
<!-- $ chmod +x convbkmk.rb -->
<!--  -->
<!-- /usr/local/bin にコピーします． -->
<!--  -->
<!-- $ sudo cp -p convbkmk.rb /usr/local/bin -->
<!--  -->
<!-- シンボリックリンクを作成します． -->
<!--  -->
<!-- $ sudo ln -s /usr/local/bin/convbkmk.rb /usr/local/bin/convbkmk -->

pdfplatex2 (シェルスクリプト) を作成します．

***

- pdfplatex2

***

```
#!/bin/sh
platex -synctex=1 "$1" && \
dvips -Ppdf -z -f "`basename "$1" .tex`.dvi" | \
convbkmk -g > "`basename "$1" .tex`.ps" && \
ps2pdf "`basename "$1" .tex`.ps"
```

***

chmod で実行権限を付加します．

```
$ chmod +x pdfplatex2
```

TeXおよび関連プログラムのパスに存在するディレクトリに pdfplatex2 をコピー

```
$ sudo cp -p pdfplatex2 /usr/local/bin
```

またはTeXおよび関連プログラムのパスに pdfplatex2 の存在するディレクトリを追加します．

タイプセットの方法を設定します．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>pdfpLaTeX2</ins><br>
　　プログラム:　 <ins>pdfplatex2</ins><br>
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

#### pdfupLaTeX {#h6d8b747}

pdfuplatex (シェルスクリプト) を作成します．

***

- pdfuplatex

***

```
#!/bin/sh
uplatex -synctex=1 "$1" && \
dvipdfmx -f ptex-ipaex.map "`basename "$1" .tex`"
```

***

chmod で実行権限を付加します．

```
$ chmod +x pdfuplatex
```

TeXおよび関連プログラムのパスに存在するディレクトリに pdfuplatex をコピー

```
$ sudo cp -p pdfuplatex /usr/local/bin
```

またはTeXおよび関連プログラムのパスに pdfuplatex の存在するディレクトリを追加します．

タイプセットの方法を設定します．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeX</ins><br>
　　プログラム:　 <ins>pdfuplatex</ins><br>
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

[simpdftex](http://www.tug.org/svn/texlive/trunk/Master/texmf/scripts/simpdftex/simpdftex?view=markup) を使って設定しても OK です．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeX</ins><br>
　　プログラム:　 <ins>simpdftex</ins><br>
　　引数:　　　　<ins>uplatex</ins><br>
　　　　　　　　　<ins>--mode</ins><br>
　　　　　　　　　<ins>dvipdfmx</ins><br>
　　　　　　　　　<ins>--extratexopts</ins><br>
　　　　　　　　　<ins>$synctexoption</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

ただし simpdftex を使用する方法だとエラーが発生してもそのまま dvipdfmx を実行してしまうようです．

#### pdfupLaTeX2 {#f387d242}

pdfuplatex2 (シェルスクリプト) を作成します．

***

- pdfuplatex2

***

```
#!/bin/sh
uplatex -synctex=1 "$1" && \
dvips -Ppdf -z -f "`basename "$1" .tex`.dvi" | \
convbkmk -u > "`basename "$1" .tex`.ps" && \
ps2pdf "`basename "$1" .tex`.ps"
```

***

chmod で実行権限を付加します．

```
$ chmod +x pdfuplatex2
```

TeXおよび関連プログラムのパスに存在するディレクトリに pdfuplatex2 をコピー

```
$ sudo cp -p pdfuplatex2 /usr/local/bin
```

またはTeXおよび関連プログラムのパスに pdfuplatex2 の存在するディレクトリを追加します．

タイプセットの方法を設定します．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeX2</ins><br>
　　プログラム:　 <ins>pdfuplatex2</ins><br>
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

#### pBibTeX {#h3cb3469}

タイプセットの方法を設定します．

実行後、PDFを表示するのチェックをはずしてください．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>pBibTeX</ins><br>
　　プログラム:　 <ins>pbibtex</ins><br>
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

#### upBibTeX {#r3b63b91}

タイプセットの方法を設定します．

実行後、PDFを表示するのチェックをはずしてください．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>upBibTeX</ins><br>
　　プログラム:　 <ins>upbibtex</ins><br>
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

#### Mendex {#m4dd7796}

タイプセットの方法を設定します．

実行後、PDFを表示するのチェックをはずしてください．

***

<span style="color:Black;background-color:#222222;"><ins>　　<span style="color:Black;background-color:#EE5500;">(×)</span>　　<span style="color:White;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　名前:　　　　<ins>Mendex</ins><br>
　　プログラム:　 <ins>mendex</ins><br>
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
