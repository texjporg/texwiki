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

<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Logo-ubuntu_no%28r%29-black_orange-hex.svg/500px-Logo-ubuntu_no%28r%29-black_orange-hex.svg.png,right,around,nolink,Ubuntu); -->
<!-- #ref(https://ubuntu-mate.org/gallery/Artwork/Ubuntu_MATE.png,right,around,nolink,Ubuntu MATE); -->
<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ubuntu_GNOME_logo.svg/1000px-Ubuntu_GNOME_logo.svg.png,right,around,nolink,Ubuntu GNOME); -->
<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Kubuntu_logo_and_wordmark.svg/500px-Kubuntu_logo_and_wordmark.svg.png,right,around,nolink,Kubuntu); -->
<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Xubuntu_logo_and_wordmark.svg/500px-Xubuntu_logo_and_wordmark.svg.png,right,around,nolink,Xubuntu); -->
<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lubuntu_logo.svg/500px-Lubuntu_logo.svg.png,right,around,nolink,Lubuntu); -->

***

***

### [TeX Live](</TeX Live/>) {#texlive}

#### TeX Live 公式パッケージ <a id="texliveinstall"></a> {#y097b8c5}

- [Linux](/Linux/#texliveinstall) &amp; [texlive-dummy](/texlive-dummy/#ubuntu)
- [https://github.com/scottkosty/install-tl-ubuntu](https://github.com/scottkosty/install-tl-ubuntu)

#### TeX Live/Debian <a id="texlivedebian"></a> {#c935e6e4}

- [https://launchpad.net/tex-live](https://launchpad.net/tex-live)
- [https://launchpad.net/ubuntu/+source/texlive-base](https://launchpad.net/ubuntu/+source/texlive-base)
    - [https://launchpad.net/ubuntu/+source/texlive-base/+changelog](https://launchpad.net/ubuntu/+source/texlive-base/+changelog)
- [https://launchpad.net/ubuntu/+source/texlive-lang](https://launchpad.net/ubuntu/+source/texlive-lang)
    - [https://launchpad.net/ubuntu/+source/texlive-lang/+changelog](https://launchpad.net/ubuntu/+source/texlive-lang/+changelog)
- UbuntuPackageSearch:texlive-full, UbuntuPackageSearch.en:texlive-full, UbuntuPackageSearch.ja:texlive-full
- UbuntuPackageSearch:texlive-lang-japanese, UbuntuPackageSearch.en:texlive-lang-japanese, UbuntuPackageSearch.ja:texlive-lang-japanese
- UbuntuPackageSearch:texlive-luatex, UbuntuPackageSearch.en:texlive-luatex, UbuntuPackageSearch.ja:texlive-luatex
- UbuntuPackageSearch:texlive-xetex, UbuntuPackageSearch.en:texlive-xetex, UbuntuPackageSearch.ja:texlive-xetex
- UbuntuPackageSearch:texlive, UbuntuPackageSearch.en:texlive, UbuntuPackageSearch.ja:texlive
- [Debian support - TeX Live - TeX Users Group](http://www.tug.org/texlive/debian.html)
- [TeX Live in Launchpad](https://launchpad.net/tex-live)
    - [trunk](https://code.launchpad.net/~naesten/tex-live/trunk)
        - [ChangeLog](http://bazaar.launchpad.net/~naesten/tex-live/trunk/view/head:/ChangeLog)
- [TeX Live/Debian<br>日本語関連のパッケージと texlive パッケージ<br>をインストールする場合<br>texlive-lang-japanese texlive xzdec<br>→lualatexコマンド、luatexja.styは入るが、<br>LuaLaTeXでタイプセットできない](https://twitter.com/ti5942/status/580810894713577472)
- [Ubuntu で OS の texlive パッケージをインスト<br>ールすると /usr/bin/xetex がインストールされ<br>るけど、それだけでは他の必要なファイルがイ<br>ンストールされなくて結局 plain XeTeX として<br>も使えない。。。](https://twitter.com/trueroad_jp/status/704285097524998144)<br>[texlive-xetex パッケージをインストールすれば<br>必要なファイルが揃うので、ようやく plain <br>XeTeX が使えるようになる。](https://twitter.com/trueroad_jp/status/704285653958160385)

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
