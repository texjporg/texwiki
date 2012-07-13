---
title: "TeXworks/設定/Linux"
url: "/TeXworks/設定/Linux/"
date: 2012-07-13T03:02:14Z
pukiwiki: "TeXworks/設定/Linux"
---

# TeXworks/設定/Linux

[TeXworks](/TeXworks/) > [設定](</TeXworks/設定/>) > [Linux](/Linux/)

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

```

```

## タイプセットの設定 {#q50d2378}

### [TeX Live](</TeX Live/>) {#y48c4d8a}

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

## Okular との連携 {#p26e93fe}

### inverse search {#b1008e80}

\[Settings\]-\[Configure Okular...\]-\[Editor\] の項目から Custom Text Editor を選択します．

Editor:
: Custom Text Editor

Command:
: texworks --position=%l "%f"

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## PdfViewer との連携 {#v93c1198}

### inverse search {#taa10f7d}

\[Tools\]-\[Settings\]-\[Configure PdfViewer...\]

Editor:
: texworks --position=%l "%f"

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## gnuplot との連携 {#pe8db1a3}

- [LaTeX - おもこん - Yahoo!ブログ](http://blogs.yahoo.co.jp/jeaou/folder/1202527.html)
- [VineLinuxの書庫](http://blogs.yahoo.co.jp/jeaou/folder/1199960.html)
    - おもこんには、VineLinuxでgnuplotとTexworksを連携させる話題があり、Texworksのコンフィギュレーションファイルがその中で解説されています。[VineLinuxの書庫](http://blogs.yahoo.co.jp/jeaou/folder/1199960.html)から、「VineLinuxのgnuplot…」「pregnuplotを…」を見てください。
