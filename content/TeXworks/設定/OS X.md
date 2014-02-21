---
title: "TeXworks/設定/OS X"
url: "/TeXworks/設定/OS X/"
date: 2012-07-13T03:05:00Z
pukiwiki: "TeXworks/設定/OS X"
---

# TeXworks/設定/OS X

[TeXworks](/TeXworks/) > [設定](</TeXworks/設定/>) > [OS X](/Mac/)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

```

```

## タイプセットの設定 {#q50d2378}

### [MacTeX &amp; TeX Live](/Mac/#mactex) {#p614bf13}

- [MacTeX 2012 on Mac (snow leopard)](http://blogs.yahoo.co.jp/igproj_fusion/15780910.html)

を参照．

#### upLaTeX (ptex2pdf) {#hb35622b}

IPAexフォントを埋め込む場合は<br>

```
$ kanji-config-updmap ipaex
```

を実行します．<br>

[ptex2pdf](/ptex2pdf/) を使って設定します．<br>

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

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### pdfupLaTeX {#h1113e8d}

pdfuplatex (シェルスクリプト) を作成します．

- Bash を参照．

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

#### pdfupLaTeX2 {#v9b94dcd}

pdfuplatex2 (シェルスクリプト) を作成します．

- Bash を参照．

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

#### Latexmk {#s7547dd9}

タイプセットの方法を設定します．

***

<br>

　　名前:　　　　<ins>Latexmk</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
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

#### Latexmk-pdfupLaTeX {#n543aa96}

タイプセットの方法を設定します．

***

<br>

　　名前:　　　　<ins>Latexmk-pdfupLaTeX</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/makeindex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx %O -f uptex-ipaex.map -f otf-up-ipaex.map -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-pdfupLaTeX2 {#h6950538}

タイプセットの方法を設定します．

***

<br>

　　名前:　　　　<ins>Latexmk-pdfupLaTeX2</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/upbibtex %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/makeindex %O -o %D %S/</ins><br>
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

#### Latexmk-pdfLaTeX {#x1c59d0b}

タイプセットの方法を設定します．

***

<br>

　　名前:　　　　<ins>Latexmk-pdfLaTeX</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/pdflatex %O -synctex=1 %S/</ins><br>
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
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-LuaLaTeX {#pc34d1b7}

タイプセットの方法を設定します．

***

<br>

　　名前:　　　　<ins>Latexmk-LuaLaTeX</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/lualatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtexu %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/makeindex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdf</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-LuaJITLaTeX {#xda8c464}

タイプセットの方法を設定します．

***

<br>

　　名前:　　　　<ins>Latexmk-LuaJITLaTeX</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/luajitlatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtexu %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/makeindex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdf</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk-XeLaTeX {#cd46d8e4}

タイプセットの方法を設定します．

***

<br>

　　名前:　　　　<ins>Latexmk-XeLaTeX</ins><br>
　　プログラム:　 <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$pdflatex=q/xelatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtexu %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/makeindex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdf</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="http://texworks.googlecode.com/svn/trunk/res/tango/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***
