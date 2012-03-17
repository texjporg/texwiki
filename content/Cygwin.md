---
title: "Cygwin"
url: "/Cygwin/"
date: 2012-03-17T07:04:07Z
pukiwiki: "Cygwin"
---

# Cygwin

## [Cygwin](http://www.cygwin.com/) {#y69b4c00}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cygwin_logo.svg/200px-Cygwin_logo.svg.png" alt="Cygwin" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Cygwin とは {#yd433e3a}

Cygwin は Microsoft Windows 上で動作する Linux (Unix) ライクな環境です．<br>
Cygwin の Portable 版である Cygwin Portable もあります．<br>

- [Cygwin](http://www.cygwin.com/)
- [Cygwin Portable](http://symbiosoft.net/projects/cygwin-portable)
- [gnupack](http://gnupack.sourceforge.jp/docs/latest/UsersGuide.html) アーカイブ展開のみで即座に cygwin と emacs が使える環境を提供

## 日本語対応の TeX 環境の導入 {#b369bf5c}

<em>最近の編集方針がわからないのですが，ヘッドラインはあったほうがよいと思いますので，軽く記述してみました．適宜編集の上，適切な場所に配置していただければ幸いです．</em>

Cygwinに（日本語対応の = pTeXの入った）TeXの環境を導入するというのは，長らく難しいことの一つでした．ここ最近（2012-03-02 \[cygin-apps\]）になって，TeX Live 由来のパッケージが，texlive.tlpkg に沿ったパッケージングによって，本家から提供されることになりました．TeX Live のパッケージが一通りそろっていれば問題ないというユーザにとっては十分です．いわゆる OS のパッケージングなので，本家のパッケージングシステムから独自に変更を加えることに対する対応は甘いという点に，ヘビーユーザは気を付ける必要があります．

ちなみに，過去には（続いているものもありますが），Cygwinに（日本語対応の = pTeXの入った）TeXの環境を導入する手段として，

- teTeX＋野良ビルド
- Cygwin 日本語化プロジェクト
- ptetex3野良ビルド
- Cygwin で日本語プロジェクト
- ptexlive野良ビルド
- 美文書作成入門［改訂第 5 版］
- TeX Live のインストール＋tlptexlive

などの選択肢がありました（あります）．

## [TeX Live](</TeX Live/>) {#dead7b03}

Cygwin の setup.exe のパッケージ選択画面で [TeX Live](</TeX Live/>) を選択してインストールできます．<br>

- \[[ANNOUNCEMENT\] New packages: texlive-20110705-1, texlive-collection-\*-20120202-1, libkpathsea{6,-devel}-20110705-1, libptexenc{1,-devel}-20110705-1, asymptote-2.15-1](http://cygwin.com/ml/cygwin/2012-03/msg00120.html)

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

　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">Setup.exe version 2.769</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">Copyright 2000-2012</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:12px">[http://www.cygwin.com/](http://www.cygwin.com/)</span>

***

<span style="color:Black;background-color:#80A0A0;"><ins>　　 <span style="color:#99003F;"><strong>Cygwin Setup - Select Packages</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#709090;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#709090;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<strong>Select Packages</strong><br>
　　　　<span style="font-size:12px">Select packages to download</span>

```
- All ▲▼ Install ← すべてのパッケージをインストールする場合はクリックして Default から Install に変更
  ...
  - Publishing ▲▼ Install ← TeX Live をフルインストールする場合はクリックして Default から Install に変更
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
      texlive-collection-bibtexextra: TeX Live extra BibTeX packages
      texlive-collection-binextra: TeX Live additional commands
      texlive-collection-context: TeX Live ConTeXt packages
      texlive-collection-documentation-arabic: TeX Live Arabic documentation
      texlive-collection-documentation-base: TeX Live common documentation files
      texlive-collection-documentation-bulgarian: TeX Live Bulgarian documentation
      texlive-collection-documentation-chinese: TeX Live Chinese documentation
      texlive-collection-documentation-czechslova: TeX Live Czech and Slovak documentation
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
      texlive-collection-fontsrecommended: TeX Live recommended fonts
      texlive-collection-fontutils: TeX Live font utilities
      texlive-collection-formatsextra: TeX Live support for miscellaneous other formats
      texlive-collection-games: TeX live support for typesetting games
      texlive-collection-genericextra: TeX Live extra generic packages
      texlive-collection-genericrecommended: TeX Live recommended generic packages
      texlive-collection-htmlxml: TeX Live HTML/SGML/XML packages
      texlive-collection-humanities: TeX Live packages for law, linguistics, and humanities
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
      texlive-collection-latexextra: TeX Live extra LaTeX packages
      texlive-collection-latexrecommended: TeX Live recommended LaTeX packages
      texlive-collection-luatex: TeX Live LuaTeX packages
      texlive-collection-mathextra: TeX Live extra math typesetting packages
      texlive-collection-metapost: TeX Live MetaPost packages
      texlive-collection-music: TeX Live music typesetting support
      texlive-collection-omega: TeX Live Omega packages
      texlive-collection-pictures: TeX Live graphics packages
      texlive-collection-plainextra: TeX Live extra plain TeX packages
      texlive-collection-pstricks: TeX Live PSTricks packages
      texlive-collection-publishers: TeX Live support for publishers, standards, conferences, etc.
      texlive-collection-science: TeX Live science typesetting packages
      texlive-collection-texinfo: TeX Live TeXinfo macros
      texlive-collection-xetex: TeX Live XeTeX macros
```

***

## Terminal Emulator {#y02da075}

- [mintty](http://code.google.com/p/mintty/)
- [cygwin ck terminal emulator](http://www.geocities.jp/meir000/ck/)
- [RLogin](http://nanno.dip.jp/softlib/man/rlogin/)
- [Poderosa](http://poderosa.sourceforge.net/)
- [CygTerm](http://www.dd.iij4u.or.jp/~nsym/cygwin/cygterm/)
- [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/)
- [Tera Term](http://ttssh2.sourceforge.jp/)

## パッケージ管理 {#re5d2b36}

- [apt-cyg](http://code.google.com/p/apt-cyg/)
- [cyg-apt](http://code.google.com/p/cyg-apt/)

## 関連リンク {#bc8cfcc3}

- [tlptexliveリポジトリ](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA)
- [Using LaTeX in Japanese on Cygwin.](http://www.mmsp.nitech.ac.jp/~k09/edit.php?tips%2FCygwin%20%E3%81%A7%E6%97%A5%E6%9C%AC%E8%AA%9E%20TeX%202011%20%E5%B9%B4%E7%89%88)
- [便利コマンドバッチ集 (客先PCでCygwinとか入れられないとか言う環境のために)](http://d.hatena.ne.jp/aya_eiya/20120312/1331572894)
- [\*shell\* バッファ(cygwin の bash) から日本語ファイルを扱うための設定](http://www.ysnb.net/meadow/meadow-users-jp/2010/msg00001.html)
