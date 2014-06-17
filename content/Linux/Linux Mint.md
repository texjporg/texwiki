---
title: "Linux/Linux Mint"
url: "/Linux/Linux Mint/"
date: 2013-03-28T20:19:04Z
pukiwiki: "Linux/Linux Mint"
---

# Linux/Linux Mint

[Linux](/Linux/) > Linux Mint/Linux Mint Debian Edition (LMDE)

## [Linux Mint/Linux Mint Debian Edition (LMDE)](http://linuxmint.com/) {#f4077eb2}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Linux_Mint_logo_and_wordmark.svg/500px-Linux_Mint_logo_and_wordmark.svg.png" alt="Linux Mint" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## [Linux Mint/Linux Mint Debian Edition (LMDE) とは](http://linuxmint-jp.net/linuxmint.html) {#b5a36704}

Linux Mint は Ubuntu をベースにした Linux ディストリビューションです．<br>
Linux Mint Debian Edition (LMDE) は Debian GNU/Linux をベースにした Linux ディストリビューションです．<br>

- [Linux Mint](http://linuxmint.com/)
- [Linux Mint Japan](http://linuxmint-jp.net/)
- [https://github.com/linuxmint](https://github.com/linuxmint)
- [Linux Mint 日本語支援サイト - リナックスミントを使おう](http://linuxmintjp.jimdo.com/)

## ダウンロード {#a6b4fe07}

### ミラーサイト {#nba22f7f}

- [Mirrors - Linux Mint](http://www.linuxmint.com/mirrors.php)

### 台湾ミラーサイト {#v3e8b140}

#### ISO Images {#vd1db1bf}

- [http://free.nchc.org.tw/linuxmint/isos/stable/](http://free.nchc.org.tw/linuxmint/isos/stable/)

#### パッケージ {#ie619db8}

- [http://free.nchc.org.tw/linuxmint/packages/](http://free.nchc.org.tw/linuxmint/packages/)

### 国内ミラーサイト {#ce6708ed}

日本のミラーサイト (JAIST) は No codecs 版のみの配布になっています． (→ [Linux Mintのミラーを再開しました](http://ftp-admin.blogspot.jp/2013/06/linux-mint.html))<br>

#### ISO Images {#b7834158}

- [http://ftp.jaist.ac.jp/pub/Linux/linuxmint/isos/stable/](http://ftp.jaist.ac.jp/pub/Linux/linuxmint/isos/stable/)

#### パッケージ {#ub67daca}

- [http://ftp.jaist.ac.jp/pub/Linux/linuxmint/packages/](http://ftp.jaist.ac.jp/pub/Linux/linuxmint/packages/)
- [Linux Mint の日本語化](http://linuxmintjp.jimdo.com/%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8C%96/)
- [Linux MintのパッケージをJAISTから取得するようにするには](http://blog.lindwurm.biz/2013/06/get-mint-packages-from-jaist.html)

## TeX Live <a id="texlive"></a> {#d237a7b2}

- [https://launchpad.net/tex-live](https://launchpad.net/tex-live)
- [https://launchpad.net/ubuntu/+source/texlive-base](https://launchpad.net/ubuntu/+source/texlive-base)
    - [https://launchpad.net/ubuntu/+source/texlive-base/+changelog](https://launchpad.net/ubuntu/+source/texlive-base/+changelog)
- [https://launchpad.net/ubuntu/+source/texlive-lang](https://launchpad.net/ubuntu/+source/texlive-lang)
    - [https://launchpad.net/ubuntu/+source/texlive-lang/+changelog](https://launchpad.net/ubuntu/+source/texlive-lang/+changelog)
- [Ubuntu -- パッケージ検索結果 -- texlive-full](http://packages.ubuntu.com/ja/texlive-full)
- [Ubuntu -- パッケージ検索結果 -- texlive-lang-japanese](http://packages.ubuntu.com/ja/texlive-lang-japanese)
- [Ubuntu -- パッケージ検索結果 -- texlive](http://packages.ubuntu.com/ja/texlive)
- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)
- [TeX Live in Launchpad](https://launchpad.net/tex-live)
    - [trunk](https://code.launchpad.net/~naesten/tex-live/trunk)
        - [ChangeLog](http://bazaar.launchpad.net/~naesten/tex-live/trunk/view/head:/ChangeLog)

### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#ef984d1b}

#### Linux Mint {#l0b7aecc}

- [Linux](/Linux/#texliveinstall)

TeX Live の公式サイトのパッケージをインストールしたあとで TeX Live/Debian に依存するパッケージをインストールしようとすると TeX Live/Debian も同時にインストールされてしまいます．<br>
TeX Live/Debian がインストールされないように [dummy パッケージ](http://www.tug.org/texlive/debian.html#vanilla)を作成して依存関係の問題を回避します．<br>

```
$ sudo apt-get install equivs
$ wget http://www.tug.org/texlive/files/debian-equivs-2014-ex.txt
$ equivs-build debian-equivs-2014-ex.txt
$ sudo dpkg -i texlive-local_2014-1_all.deb
```

#### LMDE <a id="lmde"></a> {#q5d1118e}

- Linux/Debian

### TeX Live/Debian <a id="texlivedebian"></a> {#qcd9ce14}

TeX Live/Debian をフルインストールする場合は

```
$ sudo apt-get install texlive-full xzdec
$ tlmgr init-usertree
```

Linux Mint 18 以降で日本語関連のパッケージと texlive パッケージをインストールする場合は

```
$ sudo apt-get install texlive-lang-japanese texlive xzdec
$ tlmgr init-usertree
```

を実行します．<br>

## [Ghostscript](/Ghostscript/) <a id="ghostscript"></a> {#t53b858c}

```
$ sudo apt-get install ghostscript
```

## [Python](/Python/) <a id="python"></a> {#reda4f97}

```
$ sudo apt-get install python python3
```

## [Ruby](/Ruby/) <a id="ruby"></a> {#mf285d32}

```
$ sudo apt-get install ruby2.1
```

## [Perl](/Perl/) <a id="perl"></a> {#e850770a}

```
$ sudo apt-get install perl
```

## [Evince](/Evince/) <a id="evince"></a> {#qfdb160b}

```
$ sudo apt-get install evince
```

## [Okular](/Okular/) <a id="okular"></a> {#ba1358b3}

```
$ sudo apt-get install okular kde-l10n-ja
```

## [zathura](/zathura/) <a id="zathura"></a> {#eabe50ed}

```
$ sudo apt-get install zathura
```

## [qpdfview](/qpdfview/) <a id="qpdfview"></a> {#u94ec4be}

```
$ sudo apt-get install qpdfview
```

## [MuPDF](/MuPDF/) <a id="mupdf"></a> {#c80fa1e6}

```
$ sudo apt-get install mupdf mupdf-tools
```

## [Adobe Reader](</Adobe Reader/>) (Windows 版) + Wine {#bdbc2c20}

[Adobe Reader 9 のサポートは終了](http://www.adobe.com/jp/jos/acrobat/it/endsupport.html)しました．<br>
Adobe Reader 9 を使用している方は Adobe Reader XI にアップグレードしてください．<br>
Adobe Reader XI は Wine 上でも動作します．<br>

```
$ sudo apt-get install wine wine-gecko wine-mono
$ wget ftp://ftp.adobe.com/pub/adobe/reader/win/11.x/11.0.07/ja_JP/AdbeRdr11007_ja_JP.exe
$ wine AdbeRdr11007_ja_JP.exe
```

インストールが途中で終了してしまう場合は

```
$ wine ~/.wine/drive_c/users/Public/Application\ Data/Adobe/Setup/\{AC76BA86-7AD7-1041-7B44-AB0000000001\}/setup.exe
```

を実行して

```
$ wine ~/.wine/drive_c/Program\ Files\ \(x86\)/Adobe/Reader\ 11.0/Setup\ Files/\{AC76BA86-7AD7-1041-7B44-AB0000000001\}/setup.exe
```

を実行します．<br>

```
$ wine ~/.wine/drive_c/Program\ Files*/Adobe/Reader*/Reader/AcroRd32.exe
```

```
Adobe Reader の保護モード
システム設定の互換性に問題があるので、 Adobe Reader を保護モードで開けません。保護モードを無効にして Adobe Reader を開きますか？
```

```
 ◯ 保護モードを無効にして開く(O)
(●)常に保護モードを無効にして開く(A) ← 常に保護モードを無効にして開くを選択
 ◯ 保護モードを無効にした状態では開かない(D)
```

## [LyX](/LyX/) <a id="lyx"></a> {#jdcf4217}

```
$ sudo apt-get install lyx
```

## [TeXstudio](/TeXstudio/) <a id="texstudio"></a> {#q1b2ff71}

```
$ sudo apt-get install texstudio
```

## [TeXworks](/TeXworks/) <a id="texworks"></a> {#g455c5e0}

```
$ sudo apt-get install texworks
```

## [Eclipse](/Eclipse/) <a id="eclipse"></a> {#bd4e03c3}

```
$ sudo apt-get install eclipse
```

## [Emacs](/Emacs/) <a id="emacs"></a> {#w2c42a95}

```
$ sudo apt-get install emacs24
```

### [AUCTeX](/AUCTeX/) {#r3a92e85}

- [https://launchpad.net/ubuntu/+source/auctex/](https://launchpad.net/ubuntu/+source/auctex/)
    - [https://launchpad.net/ubuntu/+source/auctex/+changelog](https://launchpad.net/ubuntu/+source/auctex/+changelog)

### [YaTeX](/YaTeX/) {#reffaf03}

- [https://launchpad.net/ubuntu/+source/yatex/](https://launchpad.net/ubuntu/+source/yatex/)
    - [https://launchpad.net/ubuntu/+source/yatex/+changelog](https://launchpad.net/ubuntu/+source/yatex/+changelog)

## [Vim](/Vim/) <a id="vim"></a> {#febc084d}

```
$ sudo apt-get install vim vim-gtk
```

## [Inkscape](/Inkscape/) <a id="inkscape"></a> {#ke45cdf4}

```
$ sudo apt-get install inkscape pstoedit python-lxml
```
