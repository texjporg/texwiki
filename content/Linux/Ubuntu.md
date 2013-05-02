---
title: "Linux/Ubuntu"
url: "/Linux/Ubuntu/"
date: 2013-04-27T23:53:01Z
pukiwiki: "Linux/Ubuntu"
---

# Linux/Ubuntu

[Linux](/Linux/) > Ubuntu

## [Ubuntu](http://www.ubuntu.com/) {#m38e62cf}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Logo-ubuntu_no%28r%29-black_orange-hex.svg/500px-Logo-ubuntu_no%28r%29-black_orange-hex.svg.png" alt="Ubuntu" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Ubuntu とは {#i6bcb07d}

Ubuntu は Debian GNU/Linux をベースにした Linux ディストリビューションです．

- [Ubuntu homepage | Ubuntu](http://www.ubuntu.com/)
- [Home | Ubuntu Japanese Team](http://www.ubuntulinux.jp/)
- [Ubuntu Japanese Wiki - Ubuntu Japanese Wiki](https://wiki.ubuntulinux.jp/)
    - [開発](https://wiki.ubuntulinux.jp/Develop)
        <!-- - -[[JapaneseLocalizedDerivative/LaTeXForJapanese:https://wiki.ubuntulinux.jp/JapaneseLocalizedDerivative/LaTeXForJapanese]] -->
        <!-- - -[[AdobeReaderJpn-Migration:https://wiki.ubuntulinux.jp/Develop/AdobeReaderJpn-Migration]] -->

- [Ubuntu日本語フォーラム](https://forums.ubuntulinux.jp/)
- [The ubuntu-jp Archives](https://lists.ubuntu.com/archives/ubuntu-jp/)

## [TeX Live](</TeX Live/>) <a id="texlive"></a> {#l2f3d074}

- [Ubuntu -- パッケージ検索結果 -- texlive-lang-cjk](http://packages.ubuntu.com/ja/texlive-lang-cjk)
- [Ubuntu -- パッケージ検索結果 -- texlive-fonts-recommended](http://packages.ubuntu.com/ja/texlive-fonts-recommended)
- [Ubuntu -- パッケージ検索結果 -- xdvik-ja](http://packages.ubuntu.com/ja/xdvik-ja)
- [Ubuntu -- パッケージ検索結果 -- latexmk](http://packages.ubuntu.com/ja/latexmk)
- [Ubuntu -- パッケージ検索結果 -- ghostscript](http://packages.ubuntu.com/ja/ghostscript)
- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)

### TeX Live 2013 <a id="texlive2013"></a> {#y097b8c5}

#### Ubuntu 13.04 {#se51f85a}

- tlptexlive with TeX Live 2013

### TeX Live 2012 <a id="texlive2012"></a> {#t55d8e95}

#### Ubuntu 12.04 {#s9076027}

- [Installing TeX Live 2012 on Xubuntu 12.04 LTS ](http://quantumfluctuation.blogspot.co.uk/2013/04/installing-tex-live-2012-on-xubuntu.html), [pxdvi install "Not implemented by now, sorry!"](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1002)
- [文字と惑う - texlive](http://vraisamis.hatenadiary.jp/search?q=texlive), [Ubuntu 12.04 texliveをインストールした後、texlive-baseがインストールできない](https://forums.ubuntulinux.jp/viewtopic.php?id=14976)
- [Ubuntu 12.04/Debian Squeeze での TeXLive (>=2012) 環境](http://uwabami.junkhub.org/log/20121208p01.html)
- [Ubuntu12.04+LaTex+UTF8+日本語フォントの設定メモ](http://birondalab.blogspot.jp/2012/10/ubuntu1204latexutf8.html)
- [Ubuntu12.04LTSにTeXLive2012をインストール](http://kurikuri888.blog76.fc2.com/blog-entry-1718.html)
- [Ubuntu12.04へのTex Live インストール](http://chaperonin.moe-nifty.com/blog/2012/09/ubuntu1204tex-l.html)
- [TeX Live 2012 on Ubuntu 12.04(Precise)](http://tex-numerics.blogspot.jp/2012/09/tex-live-2012-on-ubuntu-1204precise.html)
- [YaTeXメモ](http://d.hatena.ne.jp/su48us/20120731)

### TeX Live 2012/Debian <a id="texlive2012debian"></a> {#rf0fcf3b}

#### Ubuntu 13.04 {#fd747683}

Ubuntu 12.10 と同様の方法でインストールできます．<br>

- [Ubuntu 13.04でLaTeX環境を整える](http://kubuser.blog.fc2.com/blog-entry-33.html)
- [Ubuntu 13.04 に TeXLive 2012 をインストール](http://tkyon.blogspot.jp/2013/04/ubuntu-1304-texlive-2012.html)
- [Ubuntu 13.04 のインストール &amp; 設定](http://transitive.info/2013/04/22/install-ubuntu-1304/)

#### Ubuntu 12.10 {#xcbd943a}

- [QuantalQuetzal/ReleaseNotes/ja/JapaneseEnvironment](https://wiki.ubuntu.com/QuantalQuetzal/ReleaseNotes/ja/JapaneseEnvironment)
    - [TeX Liveが2012になりました](https://wiki.ubuntu.com/QuantalQuetzal/ReleaseNotes/ja/JapaneseEnvironment#line-30)

Ubuntu 12.10 (Quantal Quetzal) には TeX Live 2012/Debian が収録されています．→ \[[ubuntu-jp:4234\] Ubuntu 12.10のTeX Liveが2012になりました](https://lists.ubuntu.com/archives/ubuntu-jp/2012-October/004233.html)<br>
UTF-8 に対応した pLaTeX[^1] が使用可能になっています．<br>

```
$ sudo apt-get install texlive-lang-cjk texlive-fonts-recommended xdvik-ja
```

xdvik-ja パッケージは /usr/bin/pxdvi-xaw を提供しています．<br>
texlive-binaries パッケージで提供されている /usr/bin/xdvi, /usr/bin/xdvi-xaw に対して
divert(退避)および alternatives の提供を行なうので、/usr/bin/xdvi を実行するだけで pTeX に対応した xdvi が実行可能です．<br>
実行可能ファイル名が pxdvi じゃないと気持が悪い、という人は pxdvi という名前で alias を作成するといいと思います．<br>

/usr/share/texmf/web2c/texmf.cnf を編集します．

shell_escape_commands が以下のように記述されていると思います．

```
shell_escape_commands = \
bibtex,bibtex8,\
kpsewhich,\
makeindex,\
mpost,\
repstopdf,\
```

shell_escape_commands を以下のように編集して保存します．

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,pbibtex,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,\
mpost,pmpost,\
repstopdf,epspdf,extractbb,\
```

- [UbuntuでTeXを使う](http://kowaimononantenai.blogspot.jp/2013/04/ubuntutex.html)
- [Ubuntu 12.10を入れた時にやったこと](http://blog.papix.net/entry/2013/04/16/215200)
- [UbuntuでTeX環境を整えた](http://qb4.blogspot.jp/2013/04/ubuntutex.html)
- [VM上のUbuntu 12.10をセットアップした](http://mas0061.blogspot.jp/2013/04/vmubuntu-1210.html)
- [Ubuntu入れてやったこといろいろ](http://d.hatena.ne.jp/NU_Pan/20130318/1363578704)
- [【Ubuntu12.10】LaTeX環境を整える【簡単】](http://nort-wmli.blogspot.jp/2012/11/ubuntu1210latex.html), [【LaTeX】I can't find file \`ptmr7t'](http://nort-wmli.blogspot.jp/2013/03/latexi-cant-find-file-ptmr7t.html)
- [quotchap.styを使用した文書において章番号のみ表示されない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=951)
- [Linuxに日本語LaTeXを導入する](http://note.chiebukuro.yahoo.co.jp/detail/n151638)
- [Ubuntu12.10におけるTex環境の構築](http://hgeekooohay.blogspot.jp/2013/01/ubuntu1210tex.html)
- [Ubuntu12.10にmozc(Goolge日本語入力)とLaTex環境をインストール](http://unigadget.doorblog.jp/archives/22104415.html)
- [UBUNTU12.10でLaTeX](http://www.geocities.jp/flutecore/Weblog/archives/2012/12/entry_175.html)
- [Linux/Ubuntu/TeXをインストール](http://www.oceanwave.jp/index.php?Linux%2FUbuntu%2FTeX%A4%F2%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB)
- [Ubuntu (Lubuntu) 12.10 にTeXLive2012,TeXworks をインストール](http://tkyon.blogspot.jp/2012/12/ubuntu-lubuntu-1210-texlive2012texworks.html)
- [UbuntuにTeX環境 -2-](http://ngc1952.net/archives/1063)
- [TeX環境を整備](http://d.hatena.ne.jp/rougeref/20121204#1354617828)
- [Ubuntu 12.10日本語Remixを仮想マシンにインストール](http://ameblo.jp/akenji/entry-11397513309.html)
- [Ubuntuのインストール直後にやることをまとめてみよう](http://onemoreduo.blogspot.jp/2012/11/ubuntu.html)
- [Ubuntu12.10にtexlive2012をインストールする](http://krakenbeal.blogspot.jp/2012/11/ubuntu1210texlive2012.html)
- [初心者クラス： Ubuntu 12.10 で始める「LaTeX入門」TeXworks](http://blog.livedoor.jp/ti5942/archives/7546892.html)
- [Ubuntu12.10のxdviで日本語が表示されないぽよの解決法](http://nori-tsukudani.blogspot.com/2012/10/ubuntu12xdvi.html)
- [KURASAWA's Home Page : Ubuntu#TeX Live 2012](http://physics.s.chiba-u.ac.jp/~kurasawa/ubuntu.html#tex2012)

## [tlptexlive](</TeX Live/#tlptexlive>) with TeX Live 2013 <a id="tlptexlive"></a> {#jd4f2edd}

### dummy パッケージの作成 {#he7ed5d4}

TeX Live の公式サイトのパッケージをインストールしたあとで TeX Live 2012/Debian に依存するパッケージをインストールしようとすると Ubuntu や Debian GNU/Linux の TeX Live 2012/Debian も同時にインストールされてしまいます．<br>
TeX Live 2012/Debian がインストールされないように dummy パッケージを作成して依存関係の問題を回避します．<br>

```
$ sudo apt-get install equivs
$ wget http://www.tug.org/texlive/files/debian-control-ex.txt
$ equivs-build debian-control-ex.txt
$ sudo dpkg -i texlive-local_2011-1~1_all.deb
```

### TeX Live 2013 + tlptexlive のインストール {#hf3fd9de}

TeX Live 2013 をインストールします．<br>

```
$ wget http://ring.airnet.ne.jp/pub/text/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz
$ tar xvf install-tl-unx.tar.gz
$ cd install-tl*
$ sudo ./install-tl --repository http://ring.airnet.ne.jp/pub/text/CTAN/systems/texlive/tlnet/
```

TeX Live 2013 がリリースされていない場合は TeX Live 2013 pretest をインストールします．<br>

```
$ wget http://ftp.math.utah.edu/pub/texlive/tlpretest/install-tl-unx.tar.gz
$ tar xvf install-tl-unx.tar.gz
$ cd install-tl*
$ sudo ./install-tl --repository http://ftp.math.utah.edu/pub/texlive/tlpretest/
```

```
======================> TeX Live installation procedure <=====================

=======> Note: Letters/digits in <angle brackets> indicate menu items <=======
=======>       for commands or configurable options                   <=======

 Detected platform: x86_64 with GNU/Linux
 
 <B> platforms: 1 out of 17

 <S> installation scheme (scheme-full)
     84 collections out of 85, disk space required: 3845 MB

 Customizing installation scheme:
   <C> standard collections
   <L> language collections

 <D> directories:
   TEXDIR (the main TeX directory):
     /usr/local/texlive/2013
   TEXMFLOCAL (directory for site-wide local files):
     /usr/local/texlive/texmf-local
   TEXMFSYSVAR (directory for variable and automatically generated data):
     /usr/local/texlive/2013/texmf-var
   TEXMFSYSCONFIG (directory for local config):
     /usr/local/texlive/2013/texmf-config
   TEXMFVAR (personal directory for variable and automatically generated data):
     ~/.texlive2013/texmf-var
   TEXMFCONFIG (personal directory for local config):
     ~/.texlive2013/texmf-config
   TEXMFHOME (directory for user-specific files):
     ~/texmf

 <O> options:
   [ ] use letter size instead of A4 by default
   [X] allow execution of restricted list of programs via \write18
   [X] create all format files
   [X] install macro/font doc tree
   [X] install macro/font source tree

 <V> set up for portable installation

Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit

Enter command: I
```

I を入力してインストールを開始します．<br>
サーバーの接続エラーが発生したり，アーカイブ中に予期せぬ EOF があったりした場合はインストールが途中でストップします．<br>
エラーが発生した場合は以下のコマンドで途中から再開できたりできなかったりします．<br>
再開できない場合は接続先を変更するかまたは [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．<br>

```
$ sudo ./install-tl --profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．

- 32 bit 版の場合

    ```
    $ sudo /usr/local/texlive/2013/bin/i386-linux/tlmgr path add
    ```

- 64 bit 版の場合

    ```
    $ sudo /usr/local/texlive/2013/bin/x86_64-linux/tlmgr path add
    ```

#### pxdvi と pmetapost のインストール {#p2dd43c0}

pxdvi (pTeX に対応した xdvik) と pmetapost (日本語 MetaPost) が必要な場合は [tlptexliveリポジトリ](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA)からインストールします．

```
$ sudo tlmgr update --self --all
$ sudo tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
tlmgr: added repository with tag tlptexlive: http://www.tug.org/~preining/tlptexlive/
$ sudo tlmgr pinning add tlptexlive 'pxdvi*'
tlmgr: package repositories:
	main = http://ring.airnet.ne.jp/pub/text/CTAN/systems/texlive/tlnet/
	tlptexlive = http://www.tug.org/~preining/tlptexlive/
tlmgr: new pinning data for tlptexlive: pxdvi*
$ sudo tlmgr pinning add tlptexlive 'pmetapost*'
tlmgr: package repositories:
	main = http://ring.airnet.ne.jp/pub/text/CTAN/systems/texlive/tlnet/
	tlptexlive = http://www.tug.org/~preining/tlptexlive/
tlmgr: new pinning data for tlptexlive: pmetapost*
$ sudo tlmgr install pxdvi pmetapost
$ sudo tlmgr path add
```

#### texmf.cnf の編集 {#e29d5a24}

[/usr/local/texlive/2013/texmf-dist/web2c/texmf.cnf](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/web2c/texmf.cnf?view=markup) を編集します．<br>
編集には [Vim](/Vim/) を使用します．<br>
Vim の使い方が分からない場合は [Emacs](/Emacs/) や [gedit](/gedit/) でもかまいません．<br>

```
$ sudo vim /usr/local/texlive/2013/texmf-dist/web2c/texmf.cnf
```

shell_escape_commands が以下のように記述されていると思います．

```
shell_escape_commands = \
bibtex,bibtex8,\
kpsewhich,\
makeindex,\
mpost,\
repstopdf,\
```

shell_escape_commands を以下のように編集して保存します．

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,pbibtex,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,\
mpost,pmpost,\
repstopdf,epspdf,extractbb,\
```

アップデートによって texmf.cnf が上書きされ設定がリセットされてしまう場合は /usr/local/texlive/texmf-local/web2c/texmf.cnf に設定を記述しておけば OK です．<br>

### pxdvi の確認 {#y151a616}

pxdvi で以下の警告が表示される場合は設定ファイルを修正します．

```
Warning: Cannot convert string "-*-helvetica-medium-r-*-*-12-*-*-*-*-*-*" to type FontStruct
Warning: Cannot convert string "-*-helvetica-medium-r-*-*-10-*-*-*-*-*-*" to type FontStruct
```

<!-- pxdvi-xaw:  cannot get scaling factors. -->
<!-- pxdvi-xaw: Warning: Raw Postscript commands on page 1 may be rendered incorrectly. -->

[/usr/local/texlive/2013/texmf-dist/xdvi/XDvi の 135 行目](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/xdvi/XDvi?view=markup#l135) に Fonts and colors が定義されています．<br>

```
!!!------------------------------------------------------------------------------
!!!------------------------------ Fonts and colors ------------------------------
!!!------------------------------------------------------------------------------
*font:     -*-helvetica-medium-r-*-*-12-*-*-*-*-*-*
!!! Use a smaller font for the statusline in the Xaw version:
*statusline.font: -*-helvetica-medium-r-*-*-10-*-*-*-*-*-*
```

font と statusline.font の定義を修正します．(参考: \[[VineSeed:18113\] update: xdvik](http://ml.vinelinux.org/vineseed/msg01271.html))

```
!!!------------------------------------------------------------------------------
!!!------------------------------ Fonts and colors ------------------------------
!!!------------------------------------------------------------------------------
!*font:     -*-helvetica-medium-r-*-*-12-*-*-*-*-*-*
*font:     -*-*-medium-r-*-*-12-*-*-*-*-*-*-*
!!! Use a smaller font for the statusline in the Xaw version:
!*statusline.font: -*-helvetica-medium-r-*-*-10-*-*-*-*-*-*
*statusline.font: -*-*-medium-r-*-*-10-*-*-*-*-*-*-*
```

以上の作業で警告が表示されなくなりました．

### dvipdfmx で IPAex フォントの埋め込み {#j5ae0e71}

TeX Live 2013 には IPAex フォント，ptex-ipaex.map が収録されています．<br>

```
$ kpsewhich ipaexm.ttf
/usr/local/texlive/2013/texmf-dist/fonts/truetype/public/ipaex/ipaexm.ttf
$ kpsewhich ipaexg.ttf
/usr/local/texlive/2013/texmf-dist/fonts/truetype/public/ipaex/ipaexg.ttf
$ kpsewhich ptex-ipaex.map
/usr/local/texlive/2013/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ptex-ipaex.map
```

dvipdfmx で ptex-ipaex.map を指定して実行します．

```
$ dvipdfmx -f ptex-ipaex.map hoge.dvi
```

以上の作業で IPAex フォントが埋め込まれます．

### dvips + ps2pdf (Ghostscript) を使用して PDF ファイルを作成 {#gcac3589}

Ubuntu 13.04 には Ghostscript 9.07 が収録されています．<br>
以下の表示が出力されて dvips + ps2pdf (Ghostscript) を使用して PDF ファイルが作成できない場合は Ghostscript の設定をします．<br>

```
Can't find (or can't open) font file /usr/share/ghostscript/9.07/Resource/Font/ipaexm-H.
Can't find (or can't open) font file ipaexm-H.
Can't find (or can't open) font file /usr/share/ghostscript/9.07/Resource/Font/ipaexg-H.
Can't find (or can't open) font file ipaexg-H.
```

Ghostscript の Search path を確認します．<br>

```
$ gs --help
...
Search path:
   /usr/share/ghostscript/9.07/Resource/Init :
   /usr/share/ghostscript/9.07/lib :
   /usr/share/ghostscript/9.07/Resource/Font :
   /usr/share/ghostscript/fonts : /var/lib/ghostscript/fonts :
   /usr/share/cups/fonts : /usr/share/ghostscript/fonts :
   /usr/local/lib/ghostscript/fonts : /usr/share/fonts
```

/usr/share/fonts/truetype/ipaex に TeX Live の IPAex フォントのディレクトリのシンボリックリンクを作成します．

```
$ sudo ln -s /usr/local/texlive/2013/texmf-dist/fonts/truetype/public/ipaex /usr/share/fonts/truetype/ipaex
```

/usr/share/ghostscript/9.07/Resource/Init/cidfmap を作成します．

```
$ sudo touch /usr/share/ghostscript/9.07/Resource/Init/cidfmap
```

/usr/share/ghostscript/9.07/Resource/Init/cidfmap に設定を記述します．<br>

```
/ipaexm << /FileType /TrueType /Path (/usr/share/fonts/truetype/ipaex/ipaexm.ttf) /SubfontID 0 /CSI [(Japan1) 6] >> ;
/ipaexg << /FileType /TrueType /Path (/usr/share/fonts/truetype/ipaex/ipaexg.ttf) /SubfontID 0 /CSI [(Japan1) 6] >> ;
/Ryumin-Light /ipaexm ;
/GothicBBB-Medium /ipaexg ;
```

ps2pdf で PDF ファイルを作成すると IPAex フォントが埋め込まれます．<br>
ps2pdf で

```
Error: /invalidfileaccess in /findfont
```

のエラーが発生して PS ファイルが PDF ファイルに変換できない場合は

```
$ ps2pdf -dDELAYSAFER hoge.ps
```

として変換します．

## 関連リンク {#ofcc84e4}

- [ASCII.jp：～師範、組版システム「TeX」について教えてください！～｜行っとけ！　Ubuntu道場！](http://ascii.jp/elem/000/000/725/725528/)
- [Sickly Life](http://www.k5.dion.ne.jp/~r-f/sicklylife/) Ubuntu をインストールした直後に行う設定
- [Ubuntu 12.04のevinceでpdfを開くと明朝体もゴシック体で表示されるのを直す](http://ubutun.blogspot.jp/2012/05/ubuntu-1204evincepdf.html)
- [Ubuntu 12.04をインストール](http://ubutun.blogspot.jp/2012/04/ubuntu-1204.html)
- [本家Ubuntuの日本語表示問題 Ubuntu 12.04編](http://blog.minawa.net/2012/04/ubuntu-ubuntu-1204.html)

[^1]: 内部処理の文字コードは EUC-JP
