---
title: "Cygwin"
url: "/Cygwin/"
date: 2012-03-17T07:04:07Z
pukiwiki: "Cygwin"
---

# Cygwin

[Microsoft Windows](</Microsoft Windows/>) > Cygwin

## [Cygwin](http://www.cygwin.com/) {#y69b4c00}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cygwin_logo.svg/200px-Cygwin_logo.svg.png" alt="Cygwin" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Cygwin とは {#yd433e3a}

Cygwin は Microsoft Windows 上で動作する Linux (UNIX&reg; 互換システム) ライクな環境です．<br>
64-bit 版と 32-bit 版のインストーラーがあります．<br>
アーカイブ展開のみで即座に cygwin と emacs が使える環境を提供してくれる gnupack もあります．<br>

- [Cygwin](http://www.cygwin.com/)
    - [The Cygwin Project mailing list archives](http://cygwin.com/ml/cygwin/)
    - [The cygwin-announce mailing list archives](http://cygwin.com/ml/cygwin-announce/)
    - [The cygwin-apps mailing list archives](http://cygwin.com/ml/cygwin-apps/)
- [gnupack](http://gnupack.sourceforge.jp/docs/latest/UsersGuide.html)
    - [gnupackの開発メモ](http://d.hatena.ne.jp/ksugita0510/)

### 動作環境 {#n6af06c2}

- [http://www.cygwin.com/faq.html#faq.what.supported](http://www.cygwin.com/faq.html#faq.what.supported)

### License {#fe355f24}

- [http://www.cygwin.com/faq.html#faq.what.free](http://www.cygwin.com/faq.html#faq.what.free)
- [http://cygwin.com/licensing.html](http://cygwin.com/licensing.html)

## TeX Live <a id="texlive"></a> {#dead7b03}

Cygwin で TeX Live を使用する場合は

- TeX Live 公式パッケージ
- TeX Live/Cygwin

の選択肢があります．

### TeX Live 公式パッケージ {#cfed3869}

#### TeX Live のインストール {#peed6637}

- [CygwinにTeXlive公式パッケージを導入する](http://vraisamis.hatenadiary.jp/entry/2013/11/19/213227)
- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

を参照．<br>

[ミラーサイト](</TeX Live/#tlnet>)から install-tl-unx.tar.gz をダウンロードします．<br>

```
$ wget http://ring.maffin.ad.jp/pub/text/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz
```

install-tl-unx.tar.gz を展開します．<br>

```
$ tar xvf install-tl-unx.tar.gz
```

展開したインストーラのディレクトリに移動します．<br>

```
$ cd install-tl*
```

インストーラを実行します．<br>
オプションでダウンロードするリポジトリを指定できます．<br>

```
$ ./install-tl --repository http://ring.maffin.ad.jp/pub/text/CTAN/systems/texlive/tlnet/

...

Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit

Enter command: I
```

I を入力してインストールを開始します．<br>
サーバーの接続エラーが発生したり，アーカイブ中に予期せぬ EOF があったりした場合はインストールが途中でストップします．<br>
エラーが発生した場合は以下のコマンドで途中から再開できたりできなかったりします．<br>
再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するかまたは [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．<br>

```
$ ./install-tl --profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．<br>

```
$ /usr/local/texlive/????/bin/i386-cygwin/tlmgr path add
```

#### アップデート {#k71f6600}

アップデートは

```
$ tlmgr update --self --all
```

を実行すれば OK です．<br>

#### extractbb の追加 {#od9c58f2}

- [TeX Live texmf-localの扱いに関して。](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1149)

TEXMFLOCAL の値を確認します．<br>

```
$ kpsewhich -var-value TEXMFLOCAL
/usr/local/texlive/????/../texmf-local
```

/usr/local/texlive/texmf-local/web2c/texmf.cnf を作成します．<br>

```
$ mkdir -p /usr/local/texlive/texmf-local/web2c
$ touch /usr/local/texlive/texmf-local/web2c/texmf.cnf
```

/usr/local/texlive/texmf-local/web2c/texmf.cnf を編集します．<br>
shell_escape_commands を以下のように編集して保存します．<br>

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,upbibtex,biber,\
kpsewhich,\
makeindex,texindy,\
mpost,upmpost,\
repstopdf,epspdf,extractbb
```

mktexlsr を実行します．<br>

```
$ mktexlsr
```

#### フォント埋め込みの設定 {#ea17ba92}

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．<br>
IPAexフォントを埋め込む場合は<br>

```
$ kanji-config-updmap-sys ipaex
```

または

```
$ kanji-config-updmap ipaex
```

を実行します．<br>

TeX Live には IPAex フォント，uptex-ipaex.map が収録されています．<br>

```
$ kpsewhich ipaexm.ttf ipaexg.ttf
/usr/local/texlive/????/texmf-dist/fonts/truetype/public/ipaex/ipaexm.ttf
/usr/local/texlive/????/texmf-dist/fonts/truetype/public/ipaex/ipaexg.ttf
$ kpsewhich uptex-ipaex.map
/usr/local/texlive/????/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ipaex/uptex-ipaex.map
```

upLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
$ ptex2pdf -u -l -ot '-synctex=1' -od '-f uptex-ipaex.map' hoge.tex
```

### TeX Live/Cygwin <a id="texlive-cygwin"></a> {#xad0a00d}

TeX Live 由来のパッケージが，texlive.tlpkg に沿ったパッケージングによって，Cygwin 本家から提供されています．<br>
TeX Live のパッケージが一通りそろっていれば問題ないというユーザにとっては十分です．<br>
いわゆる OS のパッケージングなので，Cygwin 本家のパッケージングシステムから独自に変更を加えることに対する対応は甘いという点に，ヘビーユーザは気を付ける必要があります．

<!-- [[tlptexliveリポジトリ:http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA]] に Cygwin のバイナリが用意されています．~ -->
<!-- ただし，setup-x86.exe または setup-x86_64.exe でインストールした texlive パッケージでは，tlmgr がうまく動かないので，tlptexlive リポジトリは，TeX Live を install-tl などで独自インストールしたときに使えるとお考えいただくのが現時点ではよさそうです． -->

#### TeX Live/Cygwin 64-bit 版 (x86_64) {#u7b94ff6}

- [http://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/TeX/](http://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/TeX/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/TeX/](ftp://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/TeX/)

#### TeX Live/Cygwin 32-bit 版 (x86) {#cf18fc4c}

- [http://ftp.jaist.ac.jp/pub/cygwin/x86/release/TeX/](http://ftp.jaist.ac.jp/pub/cygwin/x86/release/TeX/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/x86/release/TeX/](ftp://ftp.jaist.ac.jp/pub/cygwin/x86/release/TeX/)

#### TeX Live/Cygwin のインストール {#fc129d62}

- [Windowsに執筆支援ツールのReVIEWを入れて書籍制作をCIする](http://ch3cooh.hatenablog.jp/entry/20130826/1377523171)
- [CygwinにLaTeXをapt-cygで入れてみた](http://looxu.blogspot.jp/2013/05/cygwinlatexapt-cyg.html)
- [Cygwin で TeX 環境を作る](http://keisanbutsuriya.blog.fc2.com/blog-entry-55.html)

Cygwin オフィシャルインストーラーの setup-x86_64.exe または setup-x86.exe を使って TeX Live/Cygwin をインストールできます．<br>
パッケージ選択画面で Publishing を Default から Install に変更すると TeX Live/Cygwin がフルインストールされます．<br>

***

<span style="color:#80A0A0;background-color:#80A0A0;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Cygwin Setup</strong></span>　　　　　　　　　　　　　　　　<span style="color:#80A0A0;background-color:#80A0A0;"></ins>\[ <span style="color:Black;"><strong>◛</strong></span> \]<ins></span><span style="color:#80A0A0;background-color:#80A0A0;"></ins>\[ <span style="color:Black;"><strong>▭</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cygwin_logo.svg/200px-Cygwin_logo.svg.png" alt="Cygwin" style="float:left">

<strong>Cygwin Net Release Setup Program</strong><br>

<span style="font-size:12px">This setup program is used for the initial installation of the</span><br>

<span style="font-size:12px">Cygwin environment as well as all subsequent updates. Make</span><br>

<span style="font-size:12px">sure to remember where you saved it.</span><br>

<br>

<span style="font-size:12px">The pages that follow will guide you through the installation.</span><br>

<span style="font-size:12px">Please note that Cygwin consists of a large number of</span><br>

<span style="font-size:12px">packages spanning a wide variety of purposes. We only install a</span><br>

　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">base set of packages by default. You can always run this</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">program at any time in the future to add, remove, or upgrade</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">packages as necessary.</span><br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:14px"><strong>Setup.exe version 2.844 (64-bit)</strong> または <strong>Setup.exe version 2.844 (32-bit)</strong></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">Copyright 2000-2013</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">[http://www.cygwin.com/](http://www.cygwin.com/)</span>

***

<span style="color:#80A0A0;background-color:#80A0A0;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Cygwin Setup - Select Packages</strong></span>　　　　　　　　　　　　　　　　<span style="color:#80A0A0;background-color:#80A0A0;"></ins>\[ <span style="color:Black;"><strong>◛</strong></span> \]<ins></span><span style="color:#80A0A0;background-color:#80A0A0;"></ins>\[ <span style="color:Black;"><strong>▭</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　<strong>Select Packages</strong><br>
　　　　<span style="font-size:12px">Select packages to download</span>

```
- All ⇕ Install ← すべてのパッケージをインストールする場合はクリックして Default から Install に変更
  ...
  - Publishing ⇕ Install ← TeX Live/Cygwin をフルインストールする場合はクリックして Default から Install に変更
      asymptote: Vector graphics language for TeX
      jgraph: A Filter for Plotting Graphs in Postscript
      libkpathsea-devel: TeX file and path search library (development)
      libkpathsea6: TeX file and path search library (runtime)
      libpaper: Paper handling library (sources)
      libpaper-bin: Paper handling library (utilities)
      libpaper-devel: Paper handling library (development)
      libpaper1: Paper handling library (runtime)
      libptexenc-devel: TeX Unicode encoding library (development)
      libptexenc1: TeX Unicode encoding library (runtime)
      lyx: A latex-based WYSIWYM word processor
      pdftk: PDF manipulation without Acrobat.
      texlive: TeX Live binaries
      texlive-collection-basic: TeX Live basic packages
      texlive-collection-basic-doc: Documentation for texlive-collection-basic
      texlive-collection-bibtexextra: TeX Live extra BibTeX packages
      texlive-collection-bibtexextra-doc: Documentation for texlive-collection-bibtexextra
      texlive-collection-binextra: TeX Live additional commands
      texlive-collection-binextra-doc: Documentation for texlive-collection-binextra
      texlive-collection-context: TeX Live ConTeXt packages
      texlive-collection-context-doc: Documentation for texlive-collection-context
      texlive-collection-documentation-arabic: TeX Live Arabic documentation
      texlive-collection-documentation-base: TeX Live common documentation files
      texlive-collection-documentation-bulgarian: TeX Live Bulgarian documentation
      texlive-collection-documentation-chinese: TeX Live Chinese documentation
      texlive-collection-documentation-czechslovak: TeX Live Czech and Slovak documentation
      texlive-collection-documentation-dutch: TeX Live Dutch documentation
      texlive-collection-documentation-english: TeX Live English documentation
      texlive-collection-documentation-finnish: TeX Live Finnish documentation
      texlive-collection-documentation-french: TeX Live French documentation
      texlive-collection-documentation-german: TeX Live German documentation
      texlive-collection-documentation-italian: TeX Live Italian documentation
      texlive-collection-documentation-japanese: TeX Live Japanese documentation
      texlive-collection-documentation-korean: TeX Live Korean documentation
      texlive-collection-documentation-mongolian: TeX Live Mongolian documentation
      texlive-collection-documentation-polish: TeX Live Polish documentation
      texlive-collection-documentation-portuguese: TeX Live Portuguese documentation
      texlive-collection-documentation-russian: TeX Live Russian documentation
      texlive-collection-documentation-serbian: TeX Live Serbian documentation
      texlive-collection-documentation-slovenian: TeX Live Slovenian documentation
      texlive-collection-documentation-spanish: TeX Live Spanish documentation
      texlive-collection-documentation-thai: TeX Live Thai documentation
      texlive-collection-documentation-turkish: TeX Live Turkish documentation
      texlive-collection-documentation-ukrainian: TeX Live Ukrainian documentation
      texlive-collection-documentation-vietnamese: TeX Live Vietnamese documentation
      texlive-collection-fontsextra: TeX Live extra fonts
      texlive-collection-fontsextra-doc: Documentation for texlive-collection-fontsextra
      texlive-collection-fontsrecommended: TeX Live recommended fonts
      texlive-collection-fontsrecommended-doc: Documentation for texlive-collection-fontsrecommended
      texlive-collection-fontutils: TeX Live font utilities
      texlive-collection-fontutils-doc: Documentation for texlive-collection-fontutils
      texlive-collection-formatsextra: TeX Live support for miscellaneous other formats
      texlive-collection-games: TeX live support for typesetting games
      texlive-collection-genericextra: TeX Live extra generic packages
      texlive-collection-genericextra-doc: Documentation for texlive-collection-genericextra
      texlive-collection-genericrecommended: TeX Live recommended generic packages
      texlive-collection-genericrecommended-doc: Documentation for texlive-collection-genericrecommended
      texlive-collection-htmlxml: TeX Live HTML/SGML/XML packages
      texlive-collection-humanities: TeX Live packages for law, linguistics, and humanities
      texlive-collection-humanities-doc: Documentation for texlive-collection-humanities
      texlive-collection-langafrican: TeX Live African language support
      texlive-collection-langarabic: TeX Live Arabic language suppport
      texlive-collection-langcjk: TeX Live Chinese/Japanese/Korean language support
      texlive-collection-langcroatian: TeX Live Croatian language support
      texlive-collection-langcyrillic: TeX Live Cyrillic language support
      texlive-collection-langczechslovak: TeX Live Czech and Slovak language support
      texlive-collection-langfinnish: TeX Live Finnish language support
      texlive-collection-langfrench: TeX Live French language support
      texlive-collection-langgerman: TeX Live German language support
      texlive-collection-langgreek: TeX Live Greek language support
      texlive-collection-langhebrew: TeX Live Hebrew language support
      texlive-collection-langhungarian: TeX Live Hungarian language support
      texlive-collection-langindic: TeX Live Indic language support
      texlive-collection-langitalian: TeX Live Italian language support
      texlive-collection-langlithuanian: TeX Live Lithuanian language support
      texlive-collection-langmongolian: TeX Live Mongolian language support
      texlive-collection-langpolish: TeX Live Polish language support
      texlive-collection-langportuguese: TeX Live Portuguese language support
      texlive-collection-langspanish: TeX Live Spanish language support
      texlive-collection-langswedish: TeX Live Swedish language support
      texlive-collection-langtibetan: TeX Live Tibetan language support
      texlive-collection-langturkmen: TeX Live Turkmen language support
      texlive-collection-langvietnamese: TeX Live Vietnamese language support
      texlive-collection-latex: TeX Live core LaTeX support
      texlive-collection-latex-doc: Documentation for texlive-collection-latex
      texlive-collection-latexextra: TeX Live extra LaTeX packages
      texlive-collection-latexextra-doc: Documentation for texlive-collection-latexextra
      texlive-collection-latexrecommended: TeX Live recommended LaTeX packages
      texlive-collection-latexrecommended-doc: Documentation for texlive-collection-latexrecommended
      texlive-collection-luatex: TeX Live LuaTeX packages
      texlive-collection-luatex-doc: Documentation for texlive-collection-luatex
      texlive-collection-mathextra: TeX Live extra math typesetting packages
      texlive-collection-mathextra-doc: Documentation for texlive-collection-mathextra
      texlive-collection-metapost: TeX Live MetaPost packages
      texlive-collection-metapost-doc: Documentation for texlive-collection-metapost
      texlive-collection-music: TeX Live music typesetting support
      texlive-collection-music-doc: Documentation for texlive-collection-music
      texlive-collection-omega: TeX Live Omega packages
      texlive-collection-pictures: TeX Live graphics packages
      texlive-collection-pictures-doc: Documentation for texlive-collection-pictures
      texlive-collection-plainextra: TeX Live extra plain TeX packages
      texlive-collection-pstricks: TeX Live PSTricks packages
      texlive-collection-pstricks-doc: Documentation for texlive-collection-pstricks
      texlive-collection-publishers: TeX Live support for publishers, standards, conferences, etc.
      texlive-collection-publishers-doc: Documentation for texlive-collection-publishers
      texlive-collection-science: TeX Live science typesetting packages
      texlive-collection-science-doc: Documentation for texlive-collection-science
      texlive-collection-texinfo: TeX Live TeXinfo macros
      texlive-collection-xetex: TeX Live XeTeX macros
      texlive-collection-xetex-doc: Documentation for texlive-collection-xetex
```

***

#### extractbb の追加 {#uc813f02}

- [TeX Live texmf-localの扱いに関して。](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1149)

/usr/share/texmf-dist/web2c/texmf.cnf に shell_escape_commands が以下のように記述されていると思います．<br>

```
shell_escape_commands = \
bibtex,bibtex8,\
kpsewhich,\
makeindex,\
mpost,\
repstopdf,\
```

デフォルトでは extractbb が自動実行されません．<br>

TEXMFLOCAL の値を確認します．<br>

```
$ kpsewhich -var-value TEXMFLOCAL
/usr/share/texmf-site
```

/usr/share/texmf-site/web2c/texmf.cnf を作成します．<br>

```
$ mkdir -p /usr/share/texmf-site/web2c
$ touch /usr/share/texmf-site/web2c/texmf.cnf
```

/usr/share/texmf-site/web2c/texmf.cnf を編集します．<br>
shell_escape_commands を以下のように編集して保存します．<br>

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,upbibtex,biber,\
kpsewhich,\
makeindex,texindy,\
mpost,upmpost,\
repstopdf,epspdf,extractbb
```

mktexlsr を実行します．<br>

```
$ mktexlsr
```

#### フォント埋め込みの設定 {#s6b421fb}

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．<br>
IPAexフォントを埋め込む場合は<br>

```
$ kanji-config-updmap-sys ipaex
```

または

```
$ kanji-config-updmap ipaex
```

を実行します．<br>

upLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
$ ptex2pdf -u -l -ot '-synctex=1' -od '-f uptex-ipaex.map' hoge.tex
```

### 不具合 {#iffd4e02}

#### TeX Live 2013/Cygwin で ptex2pdf を実行すると /usr/bin/env: texlua  : No such file or directory のエラーが発生する → ptex2pdf.lua の shebang line #!/usr/bin/env texlua   の texlua の後ろの余分なスペース2つを削除 {#p6191d87}

TeX Live 2013/Cygwin で ptex2pdf を実行すると /usr/bin/env: texlua  : No such file or directory のエラーが発生します．<br>

```
$ ptex2pdf -u -l hoge.tex
/usr/bin/env: texlua  : No such file or directory
```

ptex2pdf -u -l &lt;FILENAME> を実行すると "/usr/bin/env: texlua  : No such file or directory" と表示される場合は [ptex2pdf.lua](/ptex2pdf/) の shebang line

```
#!/usr/bin/env texlua  
```

の texlua の後ろの余分なスペース2つを削除してください．<br>

- [Cygwin の setup から texlive パッケージを入れて ptex2pdf -l &lt;FILENAME> としたら "/usr/bin/env: texlua  : No such file or directory" ってエラーになった．](https://twitter.com/tsubuyakisc/status/351962192901443585)
- [#!/usr/bin/env texlua   って texlua の後ろに空白文字が2文字ついてた．これを削除して無事 ptex2pdf が動くようになった．](https://twitter.com/tsubuyakisc/status/351962660453093376)

#### dvipdfmx が rungs の呼び出しに失敗する → /usr/share/texmf-dist/dvipdfmx/dvipdfmx.cfg を修正する {#oe289452}

dvipdfmx がうまく動作しない場合は /usr/share/texmf-dist/dvipdfmx/dvipdfmx.cfg を修正します．<br>

デフォルトでは

```
D  "rungs -q -dNOPAUSE -dBATCH -dEPSCrop -sDEVICE=pdfwrite -dCompatibilityLevel=%v -dAutoFilterGrayImages=false -dGrayImageFilter=/FlateEncode -dAutoFilterColorImages=false -dColorImageFilter=/FlateEncode -sOutputFile='%o' '%i' -c quit"
```

に設定されています．<br>
Ghostscript のコマンド名が gs の場合は

```
D  "gs -q -dNOPAUSE -dBATCH -dEPSCrop -sDEVICE=pdfwrite -dCompatibilityLevel=%v -dAutoFilterGrayImages=false -dGrayImageFilter=/FlateEncode -dAutoFilterColorImages=false -dColorImageFilter=/FlateEncode -sOutputFile='%o' '%i' -c quit"
```

に修正します．<br>

- [dvipdfmx fails to call rungs](http://cygwin.com/ml/cygwin/2013-01/msg00366.html)
    - [Re: dvipdfmx fails to call rungs](http://cygwin.com/ml/cygwin/2013-01/msg00370.html)
- [Cygwin の TeXLive の dvipdfmx が失敗する](http://d.hatena.ne.jp/tsntsumi/20120514/DvipdfmxInTexLiveOnCygwinFailed) → [Cygwin の TeXLive の dvipdfmx が成功した](http://d.hatena.ne.jp/tsntsumi/20120515/DvipdfmxInTeXLiveOnCygwinSucceeded)

## [Cygwin Ports](http://sourceware.org/cygwinports/) {#p78f0c6f}

- [Cygwin Ports project](http://sourceware.org/cygwinports/)

## setup-x86_64.exe, setup-x86.exe 以外のオフラインインストーラー {#lb2cecd8}

- [pmcyg](http://pmcyg.sourceforge.net/)
    - [オフラインでもCygwinのインストールを行えるようにする「pmcyg」](http://www.moongift.jp/2010/01/pmcyg/)
    - [pmcygを使ってCygwinをクリーンインストール](http://d.hatena.ne.jp/takehikom/20100110/1263073598)

## setup-x86_64.exe, setup-x86.exe 以外のパッケージ管理 {#re5d2b36}

- [apt-cyg](https://code.google.com/p/apt-cyg/)
    - [https://github.com/paprykarz/apt-cyg](https://github.com/paprykarz/apt-cyg)
    - [https://github.com/kou1okada/apt-cyg](https://github.com/kou1okada/apt-cyg)
    - [https://github.com/transcode-open/apt-cyg](https://github.com/transcode-open/apt-cyg)
    - [CygwinにLaTeXをapt-cygで入れてみた](http://looxu.blogspot.jp/2013/05/cygwinlatexapt-cyg.html)
- [cyg-apt](https://code.google.com/p/cyg-apt/)
- [CygApt](https://code.google.com/p/maphew/wiki/CygApt)
- [cyg-get](https://code.google.com/p/cyg-get/)
- [cyg-get](http://www.nabber.org/projects/cyg-get/)
- [cyg-pm](http://sourceforge.jp/projects/gnupack/downloads/49574/)
    - [Cygwinパッケージマネージャの自作中（その１）](http://d.hatena.ne.jp/ksugita0510/20101031/p2)
    - [Cygwinパッケージマネージャの自作中（その２）](http://d.hatena.ne.jp/ksugita0510/20101106/p1)

## [Terminal Emulator](https://ja.wikipedia.org/wiki/%E7%AB%AF%E6%9C%AB%E3%82%A8%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%BF) {#y02da075}

[Best terminal environment for Cygwin/Windows?](http://stackoverflow.com/questions/701895/best-terminal-environment-for-cygwin-windows) を参照．

- [mintty](https://code.google.com/p/mintty/)
- [cygwin ck terminal emulator](http://www.geocities.jp/meir000/ck/)
- [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/)
    - [PuTTY wish cygwin-terminal-window](http://www.chiark.greenend.org.uk/~sgtatham/putty/wishlist/cygwin-terminal-window.html)
    - [PuTTYjp](http://hp.vector.co.jp/authors/VA024651/)
    - [GDI PuTTY](http://ice.hotmint.com/putty/)
    - [D2D/DW PuTTY](http://ice.hotmint.com/putty/d2ddw.html)
    - [FuTTY](https://code.google.com/p/futty/)
- [Tera Term](http://ttssh2.sourceforge.jp/)
- [Poderosa](http://poderosa.sourceforge.net/)
- [RLogin](http://nanno.dip.jp/softlib/man/rlogin/)
- [ConEmu](https://code.google.com/p/conemu-maximus5/)
- [Console](http://sourceforge.net/projects/console/)
- [ckw-mod](http://ckw-mod.github.io/)
    - [ckw-mod を使う](http://yuu0t.hatenablog.com/entry/2012/01/12/220801)
- [mlterm](http://mlterm.sourceforge.net/)
- [sakura](https://launchpad.net/sakura)
- [evilvte](http://www.calno.com/evilvte/)
- [Final Term](http://finalterm.org/)

## 関連リンク {#bc8cfcc3}

- [Gow (Gnu On Windows)](https://github.com/bmatzelle/gow/wiki)
- [ゼロからはじめる「Cygwin」 - WindowsでUNIXを動かしてみよう！](http://news.mynavi.jp/articles/2013/08/06/cygwin/)
- [いつの間にか Cygwin の 64bit 版がリリースされてた](http://d.hatena.ne.jp/sa-y/20130821#1377076966)
- [Cygwin 64 と gcc 4.8.1](http://www.oki-osk.jp/esc/cyg/cygwin-27.html)
- [cygwinの64bit版をインストール。fork問題の解決](http://waless.hatenablog.jp/entry/2013/07/28/103345)
- [Cygwin/インストール](http://discypus.jp/wiki/?Cygwin%2F%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB)
    <!-- -[[Windows に Cygwin バージョン 1.7 をインストール:http://kkaneko.com/rinkou/cygwin/cygwin.html]] -->

- [便利コマンドバッチ集](http://aya-eiya.hateblo.jp/entry/20120312/1331572894)
