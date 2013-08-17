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

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Cygwin とは {#yd433e3a}

Cygwin は Microsoft Windows 上で動作する Linux (UNIX&reg; 互換システム) ライクな環境です．<br>
アーカイブ展開のみで即座に cygwin と emacs が使える環境を提供してくれる gnupack もあります．<br>

- [Cygwin](http://www.cygwin.com/)
    - [The Cygwin Project mailing list archives](http://cygwin.com/ml/cygwin/)
- [gnupack](http://gnupack.sourceforge.jp/docs/latest/UsersGuide.html)
    - [gnupackの開発メモ](http://d.hatena.ne.jp/ksugita0510/)

### 動作環境 {#n6af06c2}

- [http://www.cygwin.com/faq.html#faq.what.supported](http://www.cygwin.com/faq.html#faq.what.supported)

### License {#fe355f24}

- [http://www.cygwin.com/faq.html#faq.what.free](http://www.cygwin.com/faq.html#faq.what.free)
- [http://cygwin.com/licensing.html](http://cygwin.com/licensing.html)

## 日本語対応の TeX 環境の導入 {#b369bf5c}

2012年3月（[2012-03-02 \[cygin-apps\]](http://cygwin.com/ml/cygwin/2012-03/msg00120.html)）に，TeX Live 由来のパッケージが，texlive.tlpkg に沿ったパッケージングによって，Cygwin 本家から提供されることになりました．<br>
TeX Live のパッケージが一通りそろっていれば問題ないというユーザにとっては十分です．<br>
[以下](#dead7b03)では，Cygwin オフィシャルインストーラの setup.exe を使って，TeX Live/Cygwin をインストールする方法を説明しています．<br>
いわゆる OS のパッケージングなので，Cygwin 本家のパッケージングシステムから独自に変更を加えることに対する対応は甘いという点に，ヘビーユーザは気を付ける必要があります．

Cygwin 本家の TeX Live パッケージ (TeX Live/Cygwin) 以外では

- [TeX Live の公式パッケージ](http://tug.org/texlive/)
- [W32TeX](/W32TeX/)

の選択肢もあります．

<!-- [[tlptexliveリポジトリ:http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA]] に Cygwin のバイナリが用意されています．~ -->
<!-- ただし，setup.exe でインストールした texlive パッケージでは，tlmgr がうまく動かないので，tlptexlive リポジトリは，TeX Live を install-tl などで独自インストールしたときに使えるとお考えいただくのが現時点ではよさそうです． -->

## TeX Live <a id="texlive"></a> {#dead7b03}

- [http://ftp.jaist.ac.jp/pub/cygwin/release/TeX/](http://ftp.jaist.ac.jp/pub/cygwin/release/TeX/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/release/TeX/](ftp://ftp.jaist.ac.jp/pub/cygwin/release/TeX/)

### リリース情報 {#z608db6c}

#### TeX Live 2013/Cygwin {#a5716290}

- \[[ANNOUNCEMENT\] Updated: TeX Live 2013](http://cygwin.com/ml/cygwin/2013-06/msg00553.html)

### 不具合 {#iffd4e02}

#### texlive-collection-langcjk-20130529-1 に含まれている /usr/share/texmf-dist/tex/platex/jsclasses/jsarticle.cls の文字コードが UTF-8 (BOMなし) になっている → 文字コードを ISO-2022-JP に変更する {#sdcc1be2}

texlive-collection-langcjk-20130529-1 に含まれている /usr/share/texmf-dist/tex/platex/jsclasses/jsarticle.cls の文字コードが UTF-8 (BOMなし) になっている場合は文字コードを ISO-2022-JP に変更します．

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

### インストール {#a8514c6c}

- [CygwinにLaTeXをapt-cygで入れてみた](http://looxu.blogspot.jp/2013/05/cygwinlatexapt-cyg.html)
- [Cygwin で TeX 環境を作る](http://keisanbutsuriya.blog.fc2.com/blog-entry-55.html)

Cygwin の setup.exe のパッケージ選択画面で TeX Live/Cygwin を選択してインストールできます．<br>

***

<span style="color:Black;background-color:#80A0A0;"><ins>　　 <span style="color:#99003F;"><strong>Cygwin Setup</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#709090;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#709090;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">Setup.exe version 2.774</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">Copyright 2000-2012</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">[http://www.cygwin.com/](http://www.cygwin.com/)</span>

***

<span style="color:Black;background-color:#80A0A0;"><ins>　　 <span style="color:#99003F;"><strong>Cygwin Setup - Select Packages</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#709090;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#709090;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<strong>Select Packages</strong><br>
　　　　<span style="font-size:12px">Select packages to download</span>

```
- All ▲▼ Install ← すべてのパッケージをインストールする場合はクリックして Default から Install に変更
  ...
  - Publishing ▲▼ Install ← TeX Live/Cygwin をフルインストールする場合はクリックして Default から Install に変更
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
$ sudo mkdir -p /usr/share/texmf-site/web2c
$ sudo touch /usr/share/texmf-site/web2c/texmf.cnf
```

/usr/share/texmf-site/web2c/texmf.cnf を編集します．<br>
shell_escape_commands を以下のように編集して保存します．<br>

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,pbibtex,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,\
mpost,pmpost,upmpost,\
repstopdf,epspdf,extractbb,\
```

#### 文字コードの自動判別 {#hab7fdc9}

文字コードの自動判別機能を有効にする場合は [日本語 encoding の推測](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1043) を参照して設定します．<br>

```
$ wget http://jaist.dl.sourceforge.jp/nkf/53171/nkf-2.1.2.tar.gz
$ tar xvf nkf-2.1.2.tar.gz
$ pushd nkf-2.1.2
$ make
$ make prefix=/usr install
$ popd
```

/usr/share/texmf-site/web2c/texmf.cnf に設定を追加します．<br>

```
PTEX_IN_FILTER = /usr/bin/nkf -w
```

pLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
$ ptex2pdf -l -ot '-synctex=1' -od '-f ptex-ipaex.map' hoge.tex
```

ptex2pdf -l &lt;FILENAME> を実行すると "/usr/bin/env: texlua  : No such file or directory" と表示される場合は [ptex2pdf.lua](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/ptex2pdf/ptex2pdf.lua?view=markup) の shebang line

```
#!/usr/bin/env texlua  
```

の texlua の後ろの余分なスペース2つを削除してください．<br>

- [Cygwin の setup から texlive パッケージを入れて ptex2pdf -l &lt;FILENAME> としたら "/usr/bin/env: texlua  : No such file or directory" ってエラーになった．](https://twitter.com/tsubuyakisc/status/351962192901443585)
- [#!/usr/bin/env texlua   って texlua の後ろに空白文字が2文字ついてた．これを削除して無事 ptex2pdf が動くようになった．](https://twitter.com/tsubuyakisc/status/351962660453093376)

## [Cygwin Ports](http://sourceware.org/cygwinports/) {#p78f0c6f}

- [Cygwin Ports project](http://sourceware.org/cygwinports/)

## setup.exe 以外のオフラインインストーラー {#lb2cecd8}

- [pmcyg](http://pmcyg.sourceforge.net/)
    - [オフラインでもCygwinのインストールを行えるようにする「pmcyg」](http://www.moongift.jp/2010/01/pmcyg/)
    - [pmcygを使ってCygwinをクリーンインストール](http://d.hatena.ne.jp/takehikom/20100110/1263073598)

## setup.exe 以外のパッケージ管理 {#re5d2b36}

- [apt-cyg](https://code.google.com/p/apt-cyg/)
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
    - [FuTTY](https://code.google.com/p/futty/)
    - [PuTTYcyg](https://code.google.com/p/puttycyg/)
    - [PuTTYjp](http://hp.vector.co.jp/authors/VA024651/)
    - [GDI PuTTY](http://ice.hotmint.com/putty/)
    - [D2D/DW PuTTY](http://ice.hotmint.com/putty/d2ddw.html)
    - [CygwinをPuTTYクローンと一緒に使えば思ったほど悪くない](http://oddwit.com/blog/2011/cygwin-futty)
- [Tera Term](http://ttssh2.sourceforge.jp/)
- [Poderosa](http://poderosa.sourceforge.net/)
- [RLogin](http://nanno.dip.jp/softlib/man/rlogin/)
- [Console](http://sourceforge.net/projects/console/)
- [CygTerm](http://www.dd.iij4u.or.jp/~nsym/cygwin/cygterm/)
- [rxvt](http://rxvt.sourceforge.net/)
    - [ja patched rxvt-20050409-9 on Cygwin](http://vmi.jp/software/cygwin/rxvt.html)
    - [rxvt-unicode](http://software.schmorp.de/pkg/rxvt-unicode.html)
- [ckw-mod](http://deflis.github.com/ckw-mod/)
    - [ckw-mod を使う](http://yuu0t.hatenablog.com/entry/2012/01/12/220801)
- [mlterm](http://mlterm.sourceforge.net/)
- [sakura](https://launchpad.net/sakura)
- [evilvte](http://www.calno.com/evilvte/)

## 関連リンク {#bc8cfcc3}

- [Gow (Gnu On Windows)](https://github.com/bmatzelle/gow/wiki)
- [Cygwin Portable](http://symbiosoft.net/projects/cygwin-portable)
- [cygwinでのtexについて](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1384247398)
- [Using LaTeX in Japanese on Cygwin.](http://www.mmsp.nitech.ac.jp/~k09/edit.php?tips%2FCygwin%20%E3%81%A7%E6%97%A5%E6%9C%AC%E8%AA%9E%20TeX%202011%20%E5%B9%B4%E7%89%88)
- [\*shell\* バッファ(cygwin の bash) から日本語ファイルを扱うための設定](http://www.ysnb.net/meadow/meadow-users-jp/2010/msg00001.html)
- [Windows に Cygwin バージョン 1.7 をインストール](http://kkaneko.com/rinkou/cygwin/cygwin.html)
- [便利コマンドバッチ集](http://aya-eiya.hateblo.jp/entry/20120312/1331572894)
