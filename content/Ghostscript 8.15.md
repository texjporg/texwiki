---
title: "Ghostscript 8.15"
url: "/Ghostscript 8.15/"
date: 2004-09-24T15:25:34Z
pukiwiki: "Ghostscript 8.15"
---

# Ghostscript 8.15

## GPL Ghostscript 8.15 {#b77ff5f3}

以下は空のページの代わりにとりあえず入れただけの stub です。
書き換えてください。

### はじめに {#x646eb19}

GNU Ghostscript 7.x では日本の gs-cjk プロジェクトの成果が取り込まれましたが，AFPL Ghostscript 8.x
になってそれが外されてしまいました。
ようやく2004年9月に 8.x シリーズのGPL版（旧GNU版に対応するもの）が出ましたが，gs-cjk
の成果は外されたままです。

以下は Mac OS X 10.3 + X11 の環境でインストールした記録です。

### ダウンロード {#q569c8fe}

[http://www.ghostscript.com/](http://www.ghostscript.com/) にあるリンクをたどって ghostscript-8.15.tar.bz2 を入手します。

そのうち [CTAN](/CTAN/) などのミラーでも出回るはずです。

### インストール {#u4ad1919}

[Ghostscript 7.07](</Ghostscript 7.07/>) を /usr/local にインストールしたので，今回は /usr/local/teTeX
以下にインストールしてみます。

```
cd /usr/local/src
tar xvjf ...../ghostscript-8.15.tar.bz2
cd ghostscript-8.15
./configure --prefix=/usr/local/teTeX
```

これで make，make install
すると，次のものが /usr/local/teTeX/bin に入ります。

> bdftops dvipdf eps2eps fixmswrd.pl font2c gs gsbj gsdj gsdj500 gslj
> gslp gsnd lprsetup.sh pdf2dsc pdf2ps pdfopt pf2afm pfbtopfa printafm
> ps2ascii ps2epsi ps2pdf ps2pdf12 ps2pdf13 ps2pdf14 ps2pdfwr ps2ps
> pv.sh unix-lpr.sh wftopfa

また，/usr/local/teTeX/share/ghostscript/8.15 の下にたくさんのものが入ります。
/usr/local/teTeX/man/man1 と /usr/local/teTeX/man/de/man1 の中にもマニュアル類が入ります。

欧文フォントについては \[\[Ghostscript 7.07\] と同じです。
/usr/local/teTeX/share/ghostscript/fonts の中に入れておきます（あるいは従来の
/usr/local/share/ghostscript/fonts をシンボリックリンクしておきます）。

和文については，\[\[Ghostscript 7.07\] では CIDFnmap で設定しましたが，8 シリーズでは cidfmap
(上の設定では /usr/local/teTeX/share/ghostscript/8.15/lib/cidfmap)
に記述します。
以下は [sazanami](http://wiki.fdiary.net/font/?sazanami)
TrueType フォントを使う例です（実際は1行です）：

```
/Ryumin-Light << /FileType /TrueType
   /Path (/path/to/sazanami-mincho.ttf)
   /SubfontID 0 /CSI [(Japan1) 2] >> ;
```

同様に /GothicBBB-Medium も sazanami-gothic.ttf に設定します。

これで1ページ目は表示できますが，2ページ目に移動しようとすると，Bus error
で落ちてしまいます。
