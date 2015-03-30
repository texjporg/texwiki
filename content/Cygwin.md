---
title: "Cygwin"
url: "/Cygwin/"
date: 2012-03-17T07:04:07Z
pukiwiki: "Cygwin"
---

# Cygwin

[Microsoft Windows](</Microsoft Windows/>) > Cygwin

## [Cygwin](https://www.cygwin.com/) {#y69b4c00}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cygwin_logo.svg/200px-Cygwin_logo.svg.png" alt="Cygwin" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Cygwin とは {#yd433e3a}

Cygwin は Microsoft Windows 上で動作する Linux (UNIX&reg; 互換システム) ライクな環境です．<br>
64-bit 版と 32-bit 版のインストーラーがあります．<br>

- [Cygwin](https://www.cygwin.com/)
    - [The Cygwin Project mailing list archives](http://cygwin.com/ml/cygwin/)
    - [The cygwin-announce mailing list archives](http://cygwin.com/ml/cygwin-announce/)
    - [The cygwin-apps mailing list archives](http://cygwin.com/ml/cygwin-apps/)

### 動作環境 {#n6af06c2}

- [http://www.cygwin.com/faq.html#faq.what.supported](http://www.cygwin.com/faq.html#faq.what.supported)

### License {#fe355f24}

GPLv3

- [https://www.cygwin.com/faq.html#faq.what.free](https://www.cygwin.com/faq.html#faq.what.free)
- [https://cygwin.com/licensing.html](https://cygwin.com/licensing.html)
- [https://cygwin.com/viewvc/src/winsup/COPYING?view=markup](https://cygwin.com/viewvc/src/winsup/COPYING?view=markup)

### ChangeLog {#t7089ab8}

- [https://cygwin.com/viewvc/src/winsup/doc/ChangeLog?view=markup](https://cygwin.com/viewvc/src/winsup/doc/ChangeLog?view=markup)
- [https://cygwin.com/viewvc/src/winsup/ChangeLog?view=markup](https://cygwin.com/viewvc/src/winsup/ChangeLog?view=markup)

## TeX Live <a id="texlive"></a> {#dead7b03}

Cygwin で [TeX Live](</TeX Live/>) を使用する場合は

- TeX Live 公式パッケージ
- TeX Live/Cygwin

の選択肢があります．

### TeX Live 公式パッケージ {#cfed3869}

以下の操作で wget というコマンドを使用しますが，Cygwin インストール時にパッケージ選択画面で Default のままインストールした場合，wget がインストールされていないので，そのコマンドが使えません．<br>
あらためて setup-x86.exe または setup-x86_64.exe を立ち上げ，パッケージ選択画面で wget を検索し，Default から Install に変更し，wget をインストールしましょう．<br>
また，TeX Live のインストールには Perl も必要です．また，TeX で eps 形式の図を扱うときは Ghostscript も必要です．少なくとも，wget と Perl と Ghostscript は事前に Cygwin にインストールしておきましょう．

#### TeX Live のインストール {#peed6637}

- [CygwinにTeXlive公式パッケージを導入する](http://vraisamis.hatenadiary.jp/entry/2013/11/19/213227)
- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

を参照．<br>

[ミラーサイト](</TeX Live/#qf59e3ea>)から install-tl-unx.tar.gz をダウンロードします．<br>

```
$ wget http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz
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
$ ./install-tl --repository http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/

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

```
$ ./install-tl --profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

再開できない場合は[接続先を変更](</TeX Live/#qf59e3ea>)するかまたは [ISO ファイル](</TeX Live/#id0ad572>)をミラーサイトからダウンロードしてインストールしてください．<br>
インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．<br>

```
$ /usr/local/texlive/????/bin/*/tlmgr path add
```

#### アップデート {#k71f6600}

アップデートは

```
$ tlmgr update --self --all
```

を実行すれば OK です．<br>

ただし，アップデートによってパッケージや設定が変更されて，今まで動いていたものが動かなくなったりすることがあるかもしれません．<br>

- /usr/local/texlive/????/tlpkg/backups

にパッケージのバックアップが保存されます．<br>
アップデートによって動作しなくなった場合は以前のバージョンに戻してください．<br>

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

<!-- [[tlptexlive:http://www.preining.info/blog/software-projects/tlptexlive/]] に Cygwin のバイナリが用意されています．~ -->
<!-- ただし，setup-x86.exe または setup-x86_64.exe でインストールした texlive パッケージでは，tlmgr がうまく動かないので，tlptexlive リポジトリは，TeX Live を install-tl などで独自インストールしたときに使えるとお考えいただくのが現時点ではよさそうです． -->

#### TeX Live/Cygwin 64-bit 版 (x86_64) {#u7b94ff6}

- [http://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive-collection-langjapanese/](http://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive-collection-langjapanese/)
- [http://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive/](http://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive-collection-langjapanese/](ftp://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive-collection-langjapanese/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive/](ftp://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive/)

#### TeX Live/Cygwin 32-bit 版 (x86) {#cf18fc4c}

- [http://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive-collection-langjapanese/](http://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive-collection-langjapanese/)
- [http://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive/](http://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive-collection-langjapanese/](ftp://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive-collection-langjapanese/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive/](ftp://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive/)

#### TeX Live/Cygwin のインストール {#fc129d62}

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

　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:14px"><strong>Setup.exe version 2.870 (64 bit or 32 bit)</strong></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">Copyright 2000-2015</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">[https://www.cygwin.com/](https://www.cygwin.com/)</span>

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
      texlive-collection-langchinese: TeX Live Chinese language support
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
      texlive-collection-langjapanese: TeX Live Japanese language support
      texlive-collection-langkorean: TeX Live Korean language support
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

- [cyg-fast](https://github.com/lambdalice/cyg-fast)
    - [Cygwin使うならcyg-fastも](http://unasuke.com/howto/2014/cyg-fast-is-faster-than-apt-cyg/)

## [Terminal Emulator](https://ja.wikipedia.org/wiki/%E7%AB%AF%E6%9C%AB%E3%82%A8%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%BF) {#y02da075}

[Best terminal environment for Cygwin/Windows?](http://stackoverflow.com/questions/701895/best-terminal-environment-for-cygwin-windows) を参照．

- [mintty](https://code.google.com/p/mintty/)
- [cygwin ck terminal emulator](http://www.geocities.jp/meir000/ck/)
- [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/)
    - [PuTTY wish cygwin-terminal-window](http://www.chiark.greenend.org.uk/~sgtatham/putty/wishlist/cygwin-terminal-window.html)
    - [PuTTYjp](http://hp.vector.co.jp/authors/VA024651/)
    - [GDI PuTTY](http://ice.hotmint.com/putty/)
    - [D2D/DW PuTTY](http://ice.hotmint.com/putty/d2ddw.html)
    - [FuTTY](http://sourceforge.net/projects/futty/)
- [Tera Term](http://ttssh2.osdn.jp/)
- [Poderosa](http://poderosa.sourceforge.net/)
- [RLogin](http://nanno.dip.jp/softlib/man/rlogin/)
- [ConEmu](http://conemu.github.io/)
- [Console](http://sourceforge.net/projects/console/)
- [ckw-mod](http://ckw-mod.github.io/)
    - [ckw-mod を使う](http://yuu0t.hatenablog.com/entry/2012/01/12/220801)
- [mlterm](http://mlterm.sourceforge.net/)
- [sakura](https://launchpad.net/sakura)
- [evilvte](http://www.calno.com/evilvte/)
- [Final Term](http://finalterm.org/)

## 関連リンク {#bc8cfcc3}

- [Babun | A windows shell you will love!](http://babun.github.io/)
- [Gow (Gnu On Windows)](https://github.com/bmatzelle/gow/wiki)
- [OSSはアルミニウムの翼で飛ぶ: gnupack](http://aikotobaha.blogspot.jp/search/label/gnupack)
- [gnupack](http://gnupack.osdn.jp/docs/latest/UsersGuide.html)
    - [gnupackの開発メモ](http://d.hatena.ne.jp/ksugita0510/)
- [ゼロからはじめる「Cygwin」 - WindowsでUNIXを動かしてみよう！](http://news.mynavi.jp/articles/2013/08/06/cygwin/)
- [いつの間にか Cygwin の 64bit 版がリリースされてた](http://d.hatena.ne.jp/sa-y/20130821#1377076966)
- [Cygwin 64 と gcc 4.8.1](http://www.oki-osk.jp/esc/cyg/cygwin-27.html)
- [cygwinの64bit版をインストール。fork問題の解決](http://waless.hatenablog.jp/entry/2013/07/28/103345)
- [Cygwin/インストール](http://discypus.jp/wiki/?Cygwin%2F%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB)
    <!-- -[[Windows に Cygwin バージョン 1.7 をインストール:http://kkaneko.com/rinkou/cygwin/cygwin.html]] -->

- [便利コマンドバッチ集](http://aya-eiya.hateblo.jp/entry/20120312/1331572894)
