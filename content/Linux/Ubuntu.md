---
title: "Linux/Ubuntu"
url: "/Linux/Ubuntu/"
date: 2013-04-27T23:53:01Z
pukiwiki: "Linux/Ubuntu"
---

# Linux/Ubuntu

[Linux](/Linux/) > Ubuntu/Ubuntu MATE/Ubuntu GNOME/Kubuntu/Xubuntu/Lubuntu

## [Ubuntu](http://www.ubuntu.com/)/[Ubuntu MATE](http://ubuntu-mate.org/)/[Ubuntu GNOME](http://ubuntugnome.org/)/[Kubuntu](http://kubuntu.org/)/[Xubuntu](http://xubuntu.org/)/[Lubuntu](http://lubuntu.net/) {#m38e62cf}

Ubuntu は Debian GNU/Linux をベースにした Linux ディストリビューションです．
高速・省メモリなデスクトップ環境を使用したい場合は [Lubuntu](http://lubuntu.net/) をおすすめします．

Ubuntu の派生版として，[DistroWatch.com](http://distrowatch.com/?language=JP) ページヒットランキング 1 位の [Linux Mint](</Linux/Linux Mint/>) があります．

***

***

### [TeX Live](</TeX Live/>) {#texlive}

#### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#y097b8c5}

- [Linux](/Linux/#texliveinstall) &amp; [texlive-dummy](/texlive-dummy/#ubuntu)
- [https://github.com/scottkosty/install-tl-ubuntu](https://github.com/scottkosty/install-tl-ubuntu)

#### TeX Live/Debian <a id="texlivedebian"></a> {#c935e6e4}

- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)
- [tex-live in Launchpad](https://launchpad.net/tex-live)
    - [trunk](https://code.launchpad.net/~naesten/tex-live/trunk)
        - [ChangeLog](http://bazaar.launchpad.net/~naesten/tex-live/trunk/view/head:/ChangeLog)
- [https://launchpad.net/ubuntu/+source/texlive-base](https://launchpad.net/ubuntu/+source/texlive-base)
    - [https://launchpad.net/ubuntu/+source/texlive-base/+changelog](https://launchpad.net/ubuntu/+source/texlive-base/+changelog)
- [https://launchpad.net/ubuntu/+source/texlive-lang](https://launchpad.net/ubuntu/+source/texlive-lang)
    - [https://launchpad.net/ubuntu/+source/texlive-lang/+changelog](https://launchpad.net/ubuntu/+source/texlive-lang/+changelog)

TeX Live/Debian をフルインストールする場合は

```
sudo apt install texlive-full xzdec
tlmgr init-usertree
```

日本語関連のパッケージと texlive-luatex パッケージと texlive-xetex パッケージと texlive パッケージをインストールする場合は

```
sudo apt install texlive-lang-japanese texlive-luatex texlive-xetex texlive xzdec
tlmgr init-usertree
```

を実行します．

tlmgr の実行には xzdec パッケージが必要です．

### [Ghostscript](/Ghostscript/) <a id="ghostscript"></a> {#ve306e42}

```
sudo apt install ghostscript
```

### [Python](/Python/) <a id="python"></a> {#c68c1c0f}

#### Python 3 {#o4813ef5}

```
sudo apt install python3
```

#### Python 2 {#u453a520}

```
sudo apt install python
```

### Julia <a id="julia"></a> {#n27e5fbc}

```
sudo apt install julia
```

### [Ruby](/Ruby/) <a id="ruby"></a> {#j96f01f6}

```
sudo apt install ruby
```

### [Perl](/Perl/) <a id="perl"></a> {#q23bc7da}

```
sudo apt install perl
```

### [Evince](/Evince/) <a id="evince"></a> {#m440464c}

```
sudo apt install evince
```

### [Okular](/Okular/) <a id="okular"></a> {#xd972c8e}

```
sudo apt install okular kde-l10n-ja
```

### [zathura](/zathura/) <a id="zathura"></a> {#z031990b}

```
sudo apt install zathura
```

### [qpdfview](/qpdfview/) <a id="qpdfview"></a> {#n4d4de3e}

```
sudo apt install qpdfview
```

### [MuPDF](/MuPDF/) <a id="mupdf"></a> {#s8c9b663}

```
sudo apt install mupdf mupdf-tools
```

### [LyX](/LyX/) <a id="lyx"></a> {#s7886348}

```
sudo apt install lyx
```

### [TeXstudio](/TeXstudio/) <a id="texstudio"></a> {#w37788fd}

```
sudo apt install texstudio texstudio-l10n texstudio-doc
```

### [Texmaker](/Texmaker/) <a id="texmaker"></a> {#oe69a519}

```
sudo apt install texmaker
```

### [TeXworks](/TeXworks/) <a id="texworks"></a> {#veed3c44}

```
sudo apt install texworks
```

### [Eclipse](/Eclipse/) <a id="eclipse"></a> {#ae8afa99}

```
sudo apt install eclipse
```

### [Emacs](/Emacs/) <a id="emacs"></a> {#s0b6fa60}

```
sudo apt install emacs
```

#### [AUCTeX](/AUCTeX/) {#u31c1597}

- [https://launchpad.net/ubuntu/+source/auctex/](https://launchpad.net/ubuntu/+source/auctex/)
    - [https://launchpad.net/ubuntu/+source/auctex/+changelog](https://launchpad.net/ubuntu/+source/auctex/+changelog)

#### [YaTeX](/YaTeX/) {#pc05aa7c}

- [https://launchpad.net/ubuntu/+source/yatex/](https://launchpad.net/ubuntu/+source/yatex/)
    - [https://launchpad.net/ubuntu/+source/yatex/+changelog](https://launchpad.net/ubuntu/+source/yatex/+changelog)

### [Vim](/Vim/) <a id="vim"></a> {#a5b8fa0b}

```
sudo apt install vim vim-gtk
```

### [Inkscape](/Inkscape/) <a id="inkscape"></a> {#u785615b}

```
sudo apt install inkscape pstoedit python-lxml
```

### 関連リンク {#p9c99f41}

- [http://www.fsf.org/blogs/rms/ubuntu-spyware-what-to-do](http://www.fsf.org/blogs/rms/ubuntu-spyware-what-to-do)
- [http://www.gnu.org/distros/common-distros.html#Ubuntu](http://www.gnu.org/distros/common-distros.html#Ubuntu)
- [フリーソフトウェアのリーダーRichard Stallman曰く: Amazonの検索を統合したUbuntuはスパイウェアだ](http://jp.techcrunch.com/2012/12/08/20121207free-software-leader-richard-stallman-amazon-search-integration-in-ubuntu-amounts-to-spyware/)
- [リチャードストールマン氏が Ubuntu を非難](http://japan.internet.com/webtech/20121211/3.html)
- [2012年9月27日　問題は広告じゃない!? Ubuntu 12.10のデフォルト検索→Amazonに反対するワケ](http://gihyo.jp/admin/clip/01/linux_dt/201209/27)
- [Ubuntu 12.10にAmazonレンズを無効にする設定項目が加わったらしい](http://cpplover.blogspot.jp/2012/10/ubuntu-1210amazon.html)
- [ストールマン、UbuntuのUnityレンズについて](http://cpplover.blogspot.jp/2012/10/ubuntuunity.html)
- [Richard Stallman氏の批判にUbuntuのコミュニティーマネージャーが反論](http://linux.srad.jp/story/12/12/10/2111218/Richard-Stallman%E6%B0%8F%E3%81%AE%E6%89%B9%E5%88%A4%E3%81%ABUbuntu%E3%81%AE%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%BC%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%BC%E3%81%8C%E5%8F%8D%E8%AB%96)
- [Ubuntu脱出計画その1 〜動機編〜](http://nippondanji.blogspot.jp/2013/02/ubuntu1.html)
