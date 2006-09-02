---
title: "Ghostscript 8.54"
url: "/Ghostscript 8.54/"
date: 2006-09-02T03:42:11Z
pukiwiki: "Ghostscript 8.54"
---

# Ghostscript 8.54

## GPL Ghostscript 8.54 {#xff4aa84}

以下は空のページの代わりにとりあえず入れただけの stub です。
書き換えてください。

### はじめに {#p921c1f2}

以下は Mac OS X 10.4 + X11 の環境でインストールした記録です。

### ダウンロード {#g31ae747}

[CTAN:support/ghostscript/GPL/gs854/](https://mirror.ctan.org/support/ghostscript/GPL/gs854/)
などから ghostscript-8.54-gpl.tar.bz2 と ghostscript-fonts-std-8.11.tar.gz を入手します。

### インストール {#u4ad1919}

[Ghostscript 7.07](</Ghostscript 7.07/>) を /usr/local にインストールしたので，今回は /usr/local/teTeX
以下にインストールしてみます。

```
cd /usr/local/src
tar xvjf ...../ghostscript-8.54-gpl.tar.bz2
cd ghostscript-8.54-gpl
./configure --prefix=/usr/local/teTeX
```

これで make，make install
すると，次のものが /usr/local/teTeX/bin に入ります。

> bdftops dumphint dvipdf eps2eps fixmswrd.pl font2c gs gsbj gsdj
> gsdj500 gslj gslp gsnd lprsetup.sh pdf2dsc pdf2ps pdfopt pf2afm
> pfbtopfa printafm ps2ascii ps2epsi ps2pdf ps2pdf12 ps2pdf13
> ps2pdf14 ps2pdfwr ps2ps pv.sh unix-lpr.sh wftopfa

また，/usr/local/teTeX/share/ghostscript/8.54 の下にたくさんのものが入ります。
/usr/local/teTeX/man/man1 と /usr/local/teTeX/man/de/man1 の中にもマニュアル類が入ります。

欧文フォントをインストールします：

```
cd /usr/local/teTeX/share/ghostscript
tar xvzf ..../ghostscript-fonts-std-8.11.tar.gz 
```

和文については，[Ghostscript 7.07](</Ghostscript 7.07/>) では CIDFnmap で設定しましたが，8 シリーズでは cidfmap
(上の設定では /usr/local/teTeX/share/ghostscript/8.54/lib/cidfmap)
に記述します。

```
/Ryumin-Light /HiraMinPro-W3 ;
/GothicBBB-Medium /HiraKakuPro-W6 ;
```

あとは /usr/local/teTeX/share/ghostscript/8.54/Resource/CIDFont/ の中から /System/Library/Font/ の中のヒラギノに HiraMinPro-W3 のような名前でシンボリックリンクを作っておきます。
さらに，/usr/local/teTeX/share/ghostscript/8.54/Resource/Font/ の中に例えば HiraMinPro-W3-H という名前で次のようなファイルを作っておきます：

```
/HiraMinPro-W3-H
/H /CMap findresource
[/HiraMinPro-W3 /CIDFont findresource]
composefont pop
```

以上でPSファイルの表示はできるようになりました。
ps2pdfもうまくいきます。

### 参考サイト {#cb8dfaab}

- [Ghostscript のインストール（Mac OS X 10.4 Tiger）](http://www.interq.or.jp/mars/cherry/mac/gs-tiger.html)

***
