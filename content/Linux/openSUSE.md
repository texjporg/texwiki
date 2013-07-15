---
title: "Linux/openSUSE"
url: "/Linux/openSUSE/"
date: 2011-10-16T16:15:57Z
pukiwiki: "Linux/openSUSE"
---

# Linux/openSUSE

[Linux](/Linux/) > openSUSE

## [openSUSE](http://www.opensuse.org/) {#nea99a9d}

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/9/98/OpenSUSE_official-logo-color.svg/200px-OpenSUSE_official-logo-color.svg.png" alt="openSUSE" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## openSUSE とは {#n178877e}

openSUSE は安定・使い易い・多目的な Linux ベースのオペレーティングシステムです．<br>

- [openSUSE.org](http://www.opensuse.org/)
- [メインページ - openSUSE](http://ja.opensuse.org/)

## TeX Live {#n3c200b7}

- [http://software.opensuse.org/package/texlive-scheme-full](http://software.opensuse.org/package/texlive-scheme-full)
- [Show Publishing:TeXLive - openSUSE Build Service](https://build.opensuse.org/project/show?project=Publishing%3ATeXLive)
- [Index of /repositories/Publishing:/TeXLive](http://download.opensuse.org/repositories/Publishing:/TeXLive/)
- [texlive-dummy-opensuse](http://www.ctan.org/pkg/texlive-dummy-opensuse)

### TeX Live 2013 {#v87b6755}

TeX Live の公式サイトのインストーラで TeX Live をインストールした場合は TeX Live/TeX Live for SUSE Linux に依存するパッケージが TeX Live/TeX Live for SUSE Linux をインストールするのを防止するため [texlive-dummy-opensuse](http://www.ctan.org/pkg/texlive-dummy-opensuse) パッケージをインストールします．<br>

- [Linux](/Linux/#texlive2013)

### TeX Live 2012/TeX Live for SUSE Linux {#y0f6032d}

#### openSUSE 12.3 {#i8bbf7fd}

- [openSUSE12.3（その５）](http://take0703.wordpress.com/2013/06/22/opensuse12-3%EF%BC%88%E3%81%9D%E3%81%AE%EF%BC%95%EF%BC%89/)
- [TeXLive 2012 で pTeX を使う](http://blog.geeko.jp/ftake/748)

YaST パッケージマネージャ で texlive-scheme-full を検索してtexlive-scheme-full パッケージを選択してインストールします．<br>
zypper を使用しても OK です．<br>

```
$ sudo zypper install texlive-scheme-full
```

/usr/lib/texmf/web2c/texmf.cnf を編集します．<br>
/usr/lib/texmf/web2c/texmf.cnf は /etc/texmf/web2c/texmf.cnf へのシンボリックリンクになっています．<br>

```
$ sudo vi /usr/lib/texmf/web2c/texmf.cnf
```

shell_escape_commands が以下のように記述されていると思います．<br>

```
shell_escape_commands = \
bibtex,bibtex8,\
kpsewhich,\
makeindex,\
mpost,\
repstopdf,\
```

デフォルトでは extractbb が自動実行されません．<br>
shell_escape_commands を以下のように編集して保存します．<br>

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,pbibtex,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,\
mpost,pmpost,\
repstopdf,epspdf,extractbb,\
```

文字コードの自動判別機能を有効にする場合は [日本語 encoding の推測](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1043) を参照して設定します．<br>

nkf をインストールします．<br>

```
$ sudo zypper install nkf
```

/usr/lib/texmf/web2c/texmf.cnf に設定を追加します．<br>

```
PTEX_IN_FILTER = /usr/bin/nkf -w
```

## [Adobe Reader](</Adobe Reader/>) {#m8b54511}

[Adobe Reader 9 は 2013年6月26日 でサポートが終了](http://www.adobe.com/jp/joc/acrobat/it/news/)しました．<br>
Adobe Reader 9 を使用している方は Adobe Reader XI にアップグレードしてください．<br>
Adobe Reader XI は [Wine](http://www.winehq.org/) 上でも動作します．<br>

```
$ sudo zypper install acroread acroread-fonts-ja acroread-cmaps
```

## [Texmaker](/Texmaker/) {#ua730d97}

```
$ sudo zypper install texmaker
```

## [LyX](/LyX/) {#uad65708}

```
$ sudo zypper install lyx
```

文字コードに Japanese (pLaTeX) (UTF8) または Japanese (non-CJK) (UTF8) が表示されない場合は [Japanese (non-CJK) (UTF8) の追加](/LyX/#p6f7d077) を参照して追加します．<br>

## [TeXworks](/TeXworks/) {#n8431fb2}

```
$ sudo zypper install texworks texworks-plugin-lua texworks-plugin-python
```

## LaTeXila {#r5f3b44b}

```
$ sudo zypper install latexila
```

## [Kile](/Kile/) {#a5604b87}

```
$ sudo zypper install kile
```

## [gedit](/gedit/) {#q3837a6e}

```
$ sudo zypper install gedit gedit-plugins gedit-plugin-latex
```

## [Geany](/Geany/) {#q6659b75}

```
$ sudo zypper install geany geany-plugins
```

## [MinGW](/MinGW/) {#e5f30d58}

- [Index of /repositories/windows:/mingw:/win32/openSUSE_Factory/noarch](http://download.opensuse.org/repositories/windows:/mingw:/win32/openSUSE_Factory/noarch/)
- [Where can I download precompiled GTK+ 3 binaries or windows installer?](http://stackoverflow.com/questions/6006689/where-can-i-download-precompiled-gtk-3-binaries-or-windows-installer)
