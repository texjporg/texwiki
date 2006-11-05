---
title: "Ghostscript 8.54"
url: "/Ghostscript 8.54/"
date: 2006-09-02T03:42:11Z
pukiwiki: "Ghostscript 8.54"
---

# Ghostscript 8.54

<!-- 34567890123456789012345678901234567890123456789012345678901234567890123456789 -->
<!-- - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  -->

以下は空のページの代わりにとりあえず入れただけの stub です。
書き換えてください。

## GNU GPL Ghostscript 8.54 for UNIX or Unix-like OS {#xff4aa84}

### はじめに {#p921c1f2}

以下は Mac OS X 10.4 + X11 の環境でインストールした記録です。

### ダウンロード {#g31ae747}

[CTAN:support/ghostscript/GPL/gs854/](https://mirror.ctan.org/support/ghostscript/GPL/gs854/)
などから ghostscript-8.54-gpl.tar.bz2 と ghostscript-fonts-std-8.11.tar.gz を入手します。

### インストール {#u4ad1919}

[Ghostscript 7.07](</Ghostscript 7.07/>) を /usr/local にインストールしたので，今回は /usr/local/teTeX
以下にインストールしてみます。

```
$ cd /usr/local/src
$ tar xvjf ...../ghostscript-8.54-gpl.tar.bz2
$ cd ghostscript-8.54-gpl
$ ./configure --prefix=/usr/local/teTeX
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
$ cd /usr/local/teTeX/share/ghostscript
$ tar xvzf ..../ghostscript-fonts-std-8.11.tar.gz 
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

以下，取り敢えずメモ書き。編集意欲のある方は是非代わりに編集して下さい。

### フォントのシンボリックリンク {#j6c4153b}

```
$ sudo ln -s "/System/Library/Fonts/ヒラギノ明朝 Pro W3.otf" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W3
$ sudo ln -s "/System/Library/Fonts/ヒラギノ明朝 Pro W6.otf" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W6
$ sudo ln -s "/System/Library/Fonts/ヒラギノ角ゴ Pro W3.otf" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuPro-W3
$ sudo ln -s "/System/Library/Fonts/ヒラギノ角ゴ Pro W6.otf" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuPro-W6
$ sudo ln -s "/System/Library/Fonts/ヒラギノ角ゴ Std W8.otf" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuStd-W8
$ sudo ln -s "/System/Library/Fonts/ヒラギノ丸ゴ Pro W4.otf" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMaruPro-W4
$ sudo ln -s "/System/Library/Fonts/华文黑体.ttf" /usr/local/share/ghostscript/fonts/TrueType/STHeiti.ttf
$ sudo ln -s "/System/Library/Fonts/华文细黑.ttf" /usr/local/share/ghostscript/fonts/TrueType/STXihei.ttf
$ sudo ln -s "/System/Library/Fonts/儷黑 Pro.ttf" /usr/local/share/ghostscript/fonts/TrueType/LiHeiPro.ttf
$ sudo ln -s "/Library/Fonts/华文宋体.ttf" /usr/local/share/ghostscript/fonts/TrueType/STSong.ttf
$ sudo ln -s "/Library/Fonts/华文楷体.ttf" /usr/local/share/ghostscript/fonts/TrueType/STKaiti.ttf
$ sudo ln -s "/Library/Fonts/华文仿宋.ttf" /usr/local/share/ghostscript/fonts/TrueType/STFangsong.ttf
$ sudo ln -s "/Library/Fonts/儷宋 Pro.ttf" /usr/local/share/ghostscript/fonts/TrueType/LiSongPro.ttf
```

ただし，ターミナルでは日本語文字や中国語文字を直接扱えないようなので，以下の (1)&ndash;(4) のいずれかの方法を使います。

(1) アプリケーションのユーティリティに含まれているターミナルを起動し，ターミナル → ウィンドウ設定で，
「非ASCII文字をエスケープする」にチェックを入れておきます。これにより，ファイルをターミナルに
ドラッグアンドドロップすると，そのファイルのフルパスがターミナルに入力されます。

```
$ sudo ln -s ここでヒラギノ明朝 Pro W3.otfをドラッグアンドドロップ /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W3
```

これを上記の全てのフォントについて行います。

(2) 上記の内容のシェルスクリプトを作って実行します。

(3)

```
$ sudo ln -s "$(grep -l HiraMinPro-W3 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W3
$ sudo ln -s "$(grep -l HiraMinPro-W6 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W6
$ sudo ln -s "$(grep -l HiraKakuPro-W3 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuPro-W3
$ sudo ln -s "$(grep -l HiraKakuPro-W6 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuPro-W6
$ sudo ln -s "$(grep -l HiraKakuStd-W8 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuStd-W8
$ sudo ln -s "$(grep -l HiraMaruPro-W4 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMaruPro-W4
```

のように grep を使います。

(4)

```
$ sudo ln -s /System/Library/Fonts/?????????????????????\ Pro\ W3.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W3
$ sudo ln -s /System/Library/Fonts/?????????????????????\ Pro\ W6.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W6
$ sudo ln -s /System/Library/Fonts/????????????????????????\ Pro\ W3.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuPro-W3
$ sudo ln -s /System/Library/Fonts/????????????????????????\ Pro\ W6.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuPro-W6
$ sudo ln -s /System/Library/Fonts/????????????????????????\ Std\ W8.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuStd-W8
$ sudo ln -s /System/Library/Fonts/????????????????????????\ Pro\ W4.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMaruPro-W4
```

のようにワイルドカード “?” を使います。

$TEXMFLOCAL/fonts/opentype// や $TEXMFLOCAL/fonts/truetype// からも
シンボリックリンクを作っておくと良いでしょう
（こちらは拡張子 “.otf”, “.ttf”, “.ttc” を付けたままにしておきます）。

### /usr/local/share/ghostscript/8.54/lib/cidfmap の記述例 {#h0f0fbe0}

#### For Mac OS X <a id="cidfmap-MacOSX"></a> {#eb079434}

```
%!
%%% aliases
/Ryumin-Light                  /HiraMinPro-W3              ;
/Ryumin-Medium                 /HiraMinPro-W3              ;
/FutoMinA101-Bold              /HiraMinPro-W6              ;
/MidashiMin-MA31               /HiraMinPro-W6              ;
/GothicBBB-Medium              /HiraKakuPro-W3             ;
/FutoGoB101-Bold               /HiraKakuPro-W6             ;
/MidashiGo-MB31                /HiraKakuStd-W8             ;
/Jun101-Light                  /HiraMaruPro-W4             ;
/HiraMinPro-W2                 /MS-Mincho                  ;
/KozMinProVI-Regular           /Ryumin-Light               ;
/KozMinPro-Regular-Acro        /KozMinProVI-Regular        ;
/KozMinPro-Regular             /KozMinProVI-Regular        ;
/HeiseiMin-W3-Acro             /KozMinProVI-Regular        ;
/HeiseiMin-W3                  /HeiseiMin-W3-Acro          ;
/KozGoPro-Medium               /GothicBBB-Medium           ;
/KozGoPro-Medium-Acro          /KozGoPro-Medium            ;
/HeiseiKakuGo-W5-Acro          /KozGoPro-Medium            ;
/HeiseiKakuGo-W5               /HeiseiKakuGo-W5-Acro       ;
/STSong-Light                  /STSong                     ;
/STSong-Regular                /STSong                     ;
/STHeiti-Regular               /STHeiti                    ;
/STHeiti-Light                 /STXihei                    ;
/STKaiti-Regular               /STKaiti                    ;
/STFangsong-Regular            /STFangsong                 ;
/STFangsong-Light              /STFangsong                 ;
/AdobeSongStd-Light            /STSong-Light               ;
/AdobeSongStd-Light-Acro       /AdobeSongStd-Light         ;
/STSongStd-Light-Acro          /AdobeSongStd-Light         ;
/STSongStd-Light               /STSongStd-Light-Acro       ;
/STSong-Light-Acro             /AdobeSongStd-Light         ;
/MSung-Light                   /LiSongPro                  ;
/MSung-Medium                  /LiSongPro                  ;
/MHei-Medium                   /LiHeiPro                   ;
/MKai-Medium                   /STKaiti-Adobe-CNS1         ;
/AdobeMingStd-Light            /MSung-Light                ;
/AdobeMingStd-Light-Acro       /AdobeMingStd-Light         ;
/MSungStd-Light-Acro           /AdobeMingStd-Light         ;
/MSungStd-Light                /MSungStd-Light-Acro        ;
/MSung-Light-Acro              /AdobeMingStd-Light         ;
/HYSMyeongJo-Medium            /Batang                     ;
/HYGoThic-Medium               /Baekmuk-Dotum              ;
/HYKHeadLine-Bold              /Baekmuk-Headline           ;
/HYKHeadLine-Medium            /Baekmuk-Headline           ;
/HYRGoThic-Medium              /Gulim                      ;
/HYGungSo-Bold                 /UnGungseo                  ;
/AdobeMyungjoStd-Medium        /HYSMyeongJo-Medium         ;
/AdobeMyungjoStd-Medium-Acro   /AdobeMyungjoStd-Medium     ;
/HYSMyeongJoStd-Medium-Acro    /AdobeMyungjoStd-Medium     ;
/HYSMyeongJoStd-Medium         /HYSMyeongJoStd-Medium-Acro ;
/HYSMyeongJo-Medium-Acro       /AdobeMyungjoStd-Medium     ;

%%% TrueType fonts in Mac OS X
%%% See /System/Library/Fonts/
%%%     /Library/Fonts/
/STSong                        << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/STSong.ttf)     >> ;
/STHeiti                       << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/STHeiti.ttf)    >> ;
/STXihei                       << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/STXihei.ttf)    >> ;
/STKaiti                       << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/STKaiti.ttf)    >> ;
/STKaiti-Adobe-CNS1            << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/STKaiti.ttf)    >> ;
/STFangsong                    << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/STFangsong.ttf) >> ;
/LiSongPro                     << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/LiSongPro.ttf)  >> ;
/LiHeiPro                      << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/LiHeiPro.ttf)   >> ;

%%% TrueType fonts in Microsoft Office 2004 for Mac
%%% See http://www.microsoft.com/japan/mac/products/office2004/default.mspx
%%%     ~/Library/Fonts/
/MS-Mincho                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (~/Library/Fonts/MS Mincho.ttf)  >> ;
/MS-PMincho                    << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (~/Library/Fonts/MS PMincho.ttf) >> ;
/MS-Gothic                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (~/Library/Fonts/MS Gothic.ttf)  >> ;
/MS-PGothic                    << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (~/Library/Fonts/MS PGothic.ttf) >> ;
/SimSun                        << /FileType /TrueType   /CSI [(GB1) 5]      /Path (~/Library/Fonts/SimSun.ttf)     >> ;
/PMingLiU                      << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (~/Library/Fonts/PMingLiU.ttf)   >> ;
/Batang                        << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (~/Library/Fonts/Batang.ttf)     >> ;
/Gulim                         << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (~/Library/Fonts/Gulim.ttf)      >> ;

%%% Arphic TrueType fonts
%%% See ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/BousungEG-Light-GB            << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/gbsn00lp.ttf) >> ;
/GBZenKai-Medium               << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/gkai00mp.ttf) >> ;
/ShanHeiSun-Light              << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/bsmi00lp.ttf) >> ;
/ZenKai-Medium                 << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/bkai00mp.ttf) >> ;

%%% Baekmuk TrueType fonts
%%% See http://kldp.net/projects/baekmuk/
%%%     ftp://ftp.mizi.com/pub/baekmuk/
/Baekmuk-Batang                << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/batang.ttf) >> ;
/Baekmuk-Dotum                 << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/dotum.ttf)  >> ;
/Baekmuk-Headline              << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/hline.ttf)  >> ;
/Baekmuk-Gulim                 << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/gulim.ttf)  >> ;

%%% Un-fonts
%%% See http://kldp.net/projects/unfonts/
/UnBatang                      << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnBatang.ttf)      >> ;
/UnBatang-Bold                 << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnBatangBold.ttf)  >> ;
/UnDotum                       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnDotum.ttf)       >> ;
/UnDotum-Bold                  << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnDotumBold.ttf)   >> ;
/UnGraphic                     << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGraphic.ttf)     >> ;
/UnGraphic-Bold                << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGraphicBold.ttf) >> ;
/UnGungseo                     << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGungseo.ttf)     >> ;
/UnPilgi                       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnPilgi.ttf)       >> ;
/UnPilgi-Bold                  << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnPilgiBold.ttf)   >> ;

%%% OpenType fonts in Adobe Reader 7.0
%%% See http://www.adobe.com/jp/products/acrobat/acrrasianfontpack.html
%%%     "/Library/Application Support/Adobe/PDFL/7.0/Fonts/"
%/Ryumin-Light                  /KozMinProVI-Regular    ;
%/GothicBBB-Medium              /KozGoPro-Medium        ;
%/STSong-Light                  /AdobeSongStd-Light     ;
%/MSung-Light                   /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium            /AdobeMyungjoStd-Medium ;

%%% CID-keyed fonts in Acrobat Reader 4.0
%%% See ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/4.x/
%/Ryumin-Light                  /HeiseiMin-W3-Acro       ;
%/GothicBBB-Medium              /HeiseiKakuGo-W5-Acro    ;
%/STSong-Light                  /STSong-Light-Acro       ;
%/MSung-Light                   /MSung-Light-Acro        ;
%/MHei-Medium                   /MHei-Medium-Acro        ;
%/HYSMyeongJo-Medium            /HYSMyeongJo-Medium-Acro ;
%/HYGoThic-Medium               /HYGoThic-Medium-Acro    ;
```

#### For Vine Linux <a id="cidfmap-VineLinux"></a> {#c18aa324}

```
%!
%%% aliases
%/Ryumin-Light                  /LX-Mincho                  ;
%/Ryumin-Light                  /IPAMincho                  ;
/Ryumin-Light                  /Sazanami-Mincho-Regular    ;
/Ryumin-Medium                 /Sazanami-Mincho-Regular    ;
/FutoMinA101-Bold              /DFMincho-UB                ;
/MidashiMin-MA31               /DFMincho-UB                ;
%/GothicBBB-Medium              /LX-Gothic                  ;
%/GothicBBB-Medium              /IPAGothic                  ;
%/GothicBBB-Medium              /VL-Gothic-Regular          ;
/GothicBBB-Medium              /Sazanami-Gothic-Regular    ;
/FutoGoB101-Bold               /LX-Gothic-UB               ;
/MidashiGo-MB31                /LX-POP                     ;
%/Jun101-Light                  /LX-MaruGothic              ;
/Jun101-Light                  /Wadalab-HosoMaruGothic     ;
/HiraMinPro-W2                 /LX-Mincho                  ;
/KozMinProVI-Regular           /Ryumin-Light               ;
/KozMinPro-Regular-Acro        /KozMinProVI-Regular        ;
/KozMinPro-Regular             /KozMinProVI-Regular        ;
/HeiseiMin-W3-Acro             /KozMinProVI-Regular        ;
/HeiseiMin-W3                  /HeiseiMin-W3-Acro          ;
/KozGoPro-Medium               /GothicBBB-Medium           ;
/KozGoPro-Medium-Acro          /KozGoPro-Medium            ;
/HeiseiKakuGo-W5-Acro          /KozGoPro-Medium            ;
/HeiseiKakuGo-W5               /HeiseiKakuGo-W5-Acro       ;
/STSong-Light                  /BousungEG-Light-GB         ;
/STSong-Regular                /BousungEG-Light-GB         ;
%/STHeiti-Regular               /                           ;
%/STHeiti-Light                 /                           ;
/STKaiti-Regular               /GBZenKai-Medium            ;
/STFangsong-Regular            /BousungEG-Light-GB         ;
/STFangsong-Light              /BousungEG-Light-GB         ;
/AdobeSongStd-Light            /STSong-Light               ;
/AdobeSongStd-Light-Acro       /AdobeSongStd-Light         ;
/STSongStd-Light-Acro          /AdobeSongStd-Light         ;
/STSongStd-Light               /STSongStd-Light-Acro       ;
/STSong-Light-Acro             /AdobeSongStd-Light         ;
/MSung-Light                   /ShanHeiSun-Light           ;
/MSung-Medium                  /ShanHeiSun-Light           ;
%/MHei-Medium                   /MHei-Medium-Acro           ;
/MKai-Medium                   /ZenKai-Medium              ;
/AdobeMingStd-Light            /MSung-Light                ;
/AdobeMingStd-Light-Acro       /AdobeMingStd-Light         ;
/MSungStd-Light-Acro           /AdobeMingStd-Light         ;
/MSungStd-Light                /MSungStd-Light-Acro        ;
/MSung-Light-Acro              /AdobeMingStd-Light         ;
/HYSMyeongJo-Medium            /Baekmuk-Batang             ;
/HYGoThic-Medium               /Baekmuk-Dotum              ;
/HYKHeadLine-Bold              /Baekmuk-Headline           ;
/HYKHeadLine-Medium            /Baekmuk-Headline           ;
/HYRGoThic-Medium              /Baekmuk-Gulim              ;
/HYGungSo-Bold                 /UnGungseo                  ;
/AdobeMyungjoStd-Medium        /HYSMyeongJo-Medium         ;
/AdobeMyungjoStd-Medium-Acro   /AdobeMyungjoStd-Medium     ;
/HYSMyeongJoStd-Medium-Acro    /AdobeMyungjoStd-Medium     ;
/HYSMyeongJoStd-Medium         /HYSMyeongJoStd-Medium-Acro ;
/HYSMyeongJo-Medium-Acro       /AdobeMyungjoStd-Medium     ;

%%% Sazanami Fonts
%%% See http://sourceforge.jp/projects/efont/
/Sazanami-Mincho-Regular       << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/sazanami-mincho.ttf)         >> ;
/Sazanami-Gothic-Regular       << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/sazanami-gothic.ttf)         >> ;

%%% VLGothic Font Family
%%% See http://dicey.org/vlgothic/
/VL-Gothic-Regular             << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/VL-Gothic-Regular.ttf)       >> ;

%%% RICOH LX TrueType fonts in Vine Linux CR
%%% See http://www.n-brain.co.jp/vine/
/LX-Mincho                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/lxmincho.ttc)   /SubfontID 0 >> ;
/LX-Gothic                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/lxgothic.ttc)   /SubfontID 0 >> ;
/LX-Gothic-UB                  << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/lxgothub.ttc)   /SubfontID 0 >> ;
/LX-MaruGothic                 << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/lxmgoth.ttc)    /SubfontID 0 >> ;
/LX-POP                        << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/lxpop.ttc)      /SubfontID 0 >> ;

%%% DynaComware DynaFont series in Vine Linux CR
%%% See http://www.n-brain.co.jp/vine/
/DFMincho-UB                   << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/dfminc.ttc)     /SubfontID 0 >> ;
/DFKaisho-SB                   << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/dfkai7.ttc)     /SubfontID 0 >> ;
/DFBrushRD-W7                  << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/dfbrr7.ttc)     /SubfontID 0 >> ;
/DFPOPStencil-W7               << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/dfpost7.ttc)    /SubfontID 0 >> ;
/DFFreeRyuyou-Lt               << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (/usr/X11R6/lib/X11/fonts/TrueType/dffry2.ttc)     /SubfontID 0 >> ;

%%% IPA Fonts in GRASS
%%% See http://www.grass-japan.org/FOSS4G/readme-grass-i18n-ipafonts.eucjp.htm
%%%     http://prdownloads.sourceforge.jp/opfc/13897/
/IPAMincho                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/ipam.ttf) >> ;
/IPAGothic                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/ipag.ttf) >> ;

%%% O'Reilly CID-keyed fonts including Wadalab Fonts
%%% See ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/samples/
%%%     ftp://ftp.oreilly.de/pub/examples/english_examples/nutshell/cjkv/adobe/samples/
%%%     ftp://62.206.71.30/pub/examples/english_examples/nutshell/cjkv/adobe/samples/
%%%     http://examples.oreilly.de/english_examples/nutshell/cjkv/adobe/samples/
%/Ryumin-Light                  /WadaMin-Regular                ;
%/FutoMinA101-Bold              /WadaMin-Bold                   ;
%/GothicBBB-Medium              /WadaGo-Bold                    ;
%/Jun101-Light                  /WadaMaruGo-Regular             ;
%/MSung-Light                   /MOESung-Regular                ;
%/MKai-Medium                   /MOEKai-Regular                 ;
%/HYSMyeongJo-Medium            /MunhwaMyungjoStd-Regular       ;
%/HYSMyeongJo-Medium            /Munhwa-Regular                 ;
%/HYSMyeongJo-Medium            /MunhwaMyungjoStd-Bold          ;
%/HYSMyeongJo-Medium            /Munhwa-Bold                    ;
%/HYGoThic-Medium               /MunhwaGothicStd-Regular        ;
%/HYGoThic-Medium               /MunhwaGothic-Regular           ;
%/HYKHeadLine-Bold              /MunhwaGothicStd-Bold           ;
%/HYKHeadLine-Bold              /MunhwaGothic-Bold              ;
%/HYGungSo-Bold                 /MunhwaScriptStd-Bold           ;
%/HYGungSo-Bold                 /MunhwaGungSeo-Bold             ;
%/HYGungSo-Bold                 /MunhwaScriptStd-Light          ;
%/HYGungSo-Bold                 /MunhwaGungSeo-Light            ;
%/HYGungSo-Bold                 /MunhwaScriptFreestyleStd-Bold  ;
%/HYGungSo-Bold                 /MunhwaGungSeoHeulim-Bold       ;
%/HYGungSo-Bold                 /MunhwaScriptFreestyleStd-Light ;
%/HYGungSo-Bold                 /MunhwaGungSeoHeulim-Light      ;

%%% Wadalab Fonts (TrueType fonts)
%%% See http://www.wht.mmtr.or.jp/~hirotsu/font/wadaken.html
/Wadalab-HosoMincho            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/wadalab-hosomin.ttf)    >> ;
/Wadalab-NakaMincho            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/wadalab-nakamin.ttf)    >> ;
/Wadalab-NakaKakuGothic        << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/wadalab-nakakakugo.ttf) >> ;
/Wadalab-HosoMaruGothic        << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/wadalab-hosomarugo.ttf) >> ;

%%% Arphic TrueType fonts
%%% See ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/BousungEG-Light-GB            << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/gbsn00lp.ttf) >> ;
/GBZenKai-Medium               << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/gkai00mp.ttf) >> ;
/ShanHeiSun-Light              << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/bsmi00lp.ttf) >> ;
/ZenKai-Medium                 << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/bkai00mp.ttf) >> ;

%%% Baekmuk TrueType fonts
%%% See http://kldp.net/projects/baekmuk/
%%%     ftp://ftp.mizi.com/pub/baekmuk/
/Baekmuk-Batang                << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/batang.ttf) >> ;
/Baekmuk-Dotum                 << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/dotum.ttf)  >> ;
/Baekmuk-Headline              << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/hline.ttf)  >> ;
/Baekmuk-Gulim                 << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/gulim.ttf)  >> ;

%%% Bitstream Cyberbit
%%% See http://ftp.netscape.com/pub/communicator/extras/fonts/windows/
/BitstreamCyberbit-Roman       << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/Cyberbit.ttf) >> ;
/BitstreamCyberCJK-Roman       << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/Cybercjk.ttf) >> ;

%%% Un-fonts
%%% See http://kldp.net/projects/unfonts/
/UnBatang                      << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnBatang.ttf)      >> ;
/UnBatang-Bold                 << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnBatangBold.ttf)  >> ;
/UnDotum                       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnDotum.ttf)       >> ;
/UnDotum-Bold                  << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnDotumBold.ttf)   >> ;
/UnGraphic                     << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGraphic.ttf)     >> ;
/UnGraphic-Bold                << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGraphicBold.ttf) >> ;
/UnGungseo                     << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGungseo.ttf)     >> ;
/UnPilgi                       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnPilgi.ttf)       >> ;
/UnPilgi-Bold                  << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnPilgiBold.ttf)   >> ;

%%% OpenType fonts in Adobe Reader 7.0
%%% See http://www.adobe.com/jp/products/acrobat/acrrasianfontpack.html
%%%     /usr/local/Adobe/Acrobat7.0/Resource/CIDFont/
%/Ryumin-Light                  /KozMinProVI-Regular    ;
%/GothicBBB-Medium              /KozGoPro-Medium        ;
%/STSong-Light                  /AdobeSongStd-Light     ;
%/MSung-Light                   /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium            /AdobeMyungjoStd-Medium ;

%%% CID-keyed fonts in Acrobat Reader 4.0
%%% See ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/4.x/
%/Ryumin-Light                  /HeiseiMin-W3-Acro       ;
%/GothicBBB-Medium              /HeiseiKakuGo-W5-Acro    ;
%/STSong-Light                  /STSong-Light-Acro       ;
%/MSung-Light                   /MSung-Light-Acro        ;
%/MHei-Medium                   /MHei-Medium-Acro        ;
%/HYSMyeongJo-Medium            /HYSMyeongJo-Medium-Acro ;
%/HYGoThic-Medium               /HYGoThic-Medium-Acro    ;
```

## GNU GPL Ghostscript 8.54 for Windows {#w33eec77}

以下，取り敢えずメモ書き。編集意欲のある方は是非代わりに編集して下さい。

### 入手先 {#gc8a2a19}

[Ring Server](http://www.ring.gr.jp/) からインストールプログラムを入手します。

- [GNU GPL Ghostscript 8.54](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/gs854w32full-gpl.zip)
- [AFPL Ghostscript 8.54](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/gs854w32full.zip)
- GSview 4.8: [http://www.ring.gr.jp/pub/text/CTAN/support/ghostscript/ghostgum/](http://www.ring.gr.jp/pub/text/CTAN/support/ghostscript/ghostgum/) の中の [gsv48w32.exe](http://www.ring.gr.jp/pub/text/CTAN/support/ghostscript/ghostgum/gsv48w32.exe)

### インストール {#a4d9c6ea}

旧ヴァージョンの Ghostscript がすでにインストールしてあるのならば，
先にアンインストールしておきます。

- 絶対パスに ASCII 以外の文字（日本語など）を使っていないディレクトリに
    gs854w32full-gpl.zip を展開します。

- setupgs.exe を実行します。
    - デフォルトのインストール先は “C:\gs”
    - UNIX 系 OS での Ghostscript のディレクトリ構造 (/usr/share/ghostscript/) に
        似せたいのならば，インストール先を決める項目である ‘Install to directory’ の
        欄の内容を “C:\gs” から “C:\usr\local\share\gs” に変えます。

- \[Use Windows TrueType fonts for Chinese, Japanese and Korean\] に
    チェックを入れます。

ユーザーアカウントの名前に例えば「佐藤太郎」のように
ASCII 以外の文字（日本語など）を使っていると，Ghostscript の
インストールに失敗することがあります。これは環境変数
TEMP に “C:\Documents and Settings\佐藤太郎\Local Settings\Temp” のように
ASCII 以外の文字が使われてしまうことが原因です。
環境変数 TEMP はデフォルトでは "%USERPROFILE%\Local Settings\Temp"
(= "C:\Documents and Settings\\%USERNAME%\Local Settings\Temp") と
設定されているので，この環境変数 TEMP を（例えば
UNIX 系 OS の一時ファイル用ディレクトリ /tmp/ に習って “C:\tmp” のように）
ASCII 文字だけで設定します。

### 環境変数 Path の設定 {#g074d14f}

Ghostscript 8.54 を C:\gs\ にインストールしたのなら

```
;C:\gs\gs8.54\bin;C:\gs\gs8.54\lib
```

を，C:\usr\local\share\gs\ にインストールしたのなら

```
;C:\usr\local\share\gs\gs8.54\bin;C:\usr\local\share\gs\gs8.54\lib
```

を環境変数 Path に追加します。

### CMap {#k55ee82d}

gs\gs8.54\Resource\CMap\ に入っています。主なものを挙げてみます。

- H
- V
- UniJIS-UTF16-H
- UniJIS-UTF16-V
- UniGB-UTF16-H
- UniGB-UTF16-V
- UniCNS-UTF16-H
- UniCNS-UTF16-V
- UniKS-UTF16-H
- UniKS-UTF16-V
- Adobe-Japan1-6
    <!-- -[[Adobe-Japan1-5-V:http://macptex.appi.keio.ac.jp/~uchiyama/Adobe-Japan1-5-V.gz]] （← これだけは gs\gs8.54\Resource\CMap\ に入っていない。） -->
    <!-- Adobe-Japan1-5-Vは不要です．Identity-Vを使って下さい．(uchiyama) -->

- Adobe-Japan1-UCS2
- Adobe-GB1-4
- Adobe-GB1-5
- Adobe-GB1-UCS2
- Adobe-CNS1-4
- Adobe-CNS1-5
- Adobe-CNS1-UCS2
- Adobe-Korea1-2
- Adobe-Korea1-UCS2
- Identity-H
- Identity-V

上記の CMap は $TEXMFLOCAL/fonts/cmap// にもコピーしておくと良いでしょう。

### CID-keyed fonts {#i4c98952}

CID-keyed フォントファイルはファイル名を拡張子無しの PostScript 名に変えて
（例えば “HEMIW3.CID” → “HeiseiMin-W3”）
gs\gs8.54\Resource\CIDFont\ にコピーしておきます。

OpenType フォーマットの CID-keyed フォントファイル
（拡張子が “.otf” の OpenType フォントファイル）はファイル名を拡張子無しの
PostScript 名に変えて（例えば “ヒラギノ明朝 Pro W3.otf” → “HiraMinPro-W3”）
gs\gs8.54\Resource\CIDFont\ にコピーしておきます。

### TrueType データフォント {#h311bbbd}

拡張子が “.ttf”, “.ttc” である，TrueType フォントファイルや OpenType
フォーマットの TrueType データ（2次 B-スプライン曲線データ）フォントファイルは
gs\fonts\\\ 以下にコピーまたは移動しておくと，gs\gs8.54\lib\cidfmap 記述時に
gs\fonts\ までのパスを省略できます。

### gs\gs8.54\lib\cidfmap の記述方法 {#e2200e36}

```
/Ryumin-Light         /MS-Mincho        ;
/GothicBBB-Medium     /MS-Gothic        ;
/HeiseiMin-W3         /Ryumin-Light     ;
/HeiseiKakuGo-W5      /GothicBBB-Medium ;

/MS-Mincho
<<
/FileType /TrueType
/CSI [(Japan1) 6]
/Path (C:/WINDOWS/Fonts/MSMINCHO.TTC)
/SubfontID 0
>> ;

/MS-Gothic
<<
/FileType /TrueType
/CSI [(Japan1) 6]
/Path (C:/WINDOWS/Fonts/MSGOTHIC.TTC)
/SubfontID 0
>> ;
```

### OTF パッケージ用の設定 <a id="OTF"></a> {#ycff2f04}

[OTF パッケージ](/OTF/)を使った pLaTeX2e ソースから
（platex, udvips を通して）変換した PostScript ファイルを
Ghostscript 8.54 で PDF に変換する場合，gs\gs8.54\Resource\Font\ に

```
/Ryumin-Light-Identity-H /Identity-H [/Ryumin-Light] composefont pop
```

か，または

```
/Ryumin-Light-Identity-H
/Identity-H /CMap findresource
[/Ryumin-Light /CIDFont findresource]
composefont pop
```

という内容のテキストファイル “Ryumin-Light-Identity-H” を作成します。
同様にして次のファイルを作成します（数が多いので注意）。

- Ryumin-Light-Identity-H
- Ryumin-Light-Identity-V
- GothicBBB-Medium-Identity-H
- GothicBBB-Medium-Identity-V
- FutoMinA101-Bold-Identity-H
- FutoMinA101-Bold-Identity-V
- FutoGoB101-Bold-Identity-H
- FutoGoB101-Bold-Identity-V
- Jun101-Light-Identity-H
- Jun101-Light-Identity-V
- MidashiGo-MB31-H
- MidashiGo-MB31-V
- STSong-Light-UniGB-UTF16-H
- STSong-Light-UniGB-UTF16-V
- STSong-Light-Identity-H
- STSong-Light-Identity-V
- STHeiti-Regular-UniGB-UTF16-H
- STHeiti-Regular-UniGB-UTF16-V
- STHeiti-Regular-Identity-H
- STHeiti-Regular-Identity-V
- MSung-Light-UniCNS-UTF16-H
- MSung-Light-UniCNS-UTF16-V
- MSung-Light-Identity-H
- MSung-Light-Identity-V
- MHei-Medium-UniCNS-UTF16-H
- MHei-Medium-UniCNS-UTF16-V
- MHei-Medium-Identity-H
- MHei-Medium-Identity-V
- HYSMyeongJo-Medium-UniKS-UTF16-H
- HYSMyeongJo-Medium-UniKS-UTF16-V
- HYSMyeongJo-Medium-Identity-H
- HYSMyeongJo-Medium-Identity-V
- HYGoThic-Medium-UniKS-UTF16-H
- HYGoThic-Medium-UniKS-UTF16-V
- HYGoThic-Medium-Identity-H
- HYGoThic-Medium-Identity-V
- HiraMinPro-W2-H
- HiraMinPro-W2-V
- HiraMinPro-W2-UniJIS-UTF16-H
- HiraMinPro-W2-UniJIS-UTF16-V
- HiraMinPro-W2-Identity-H
- HiraMinPro-W2-Identity-V
- HiraMinPro-W3-Identity-H
- HiraMinPro-W3-Identity-V
- HiraMinPro-W6-Identity-H
- HiraMinPro-W6-Identity-V
- HiraKakuPro-W3-Identity-H
- HiraKakuPro-W3-Identity-V
- HiraKakuPro-W6-Identity-H
- HiraKakuPro-W6-Identity-V
- HiraMaruPro-W4-Identity-H
- HiraMaruPro-W4-Identity-V

[OTF パッケージ](/OTF/)のページの [udvips 用の map ファイル](/OTF/#map-udvips)も参照。

### gs\gs8.54\lib\cidfmap の記述例 {#m115a63f}

#### For Windows <a id="cidfmap-Windows"></a> {#xba7681e}

```
%!
%%% aliases
/Ryumin-Light                  /MS-Mincho                  ;
/Ryumin-Medium                 /MS-Mincho                  ;
/FutoMinA101-Bold              /HGMinchoB                  ;
/MidashiMin-MA31               /HGMinchoE                  ;
%/GothicBBB-Medium              /HGGothicM                  ;
/GothicBBB-Medium              /MS-Gothic                  ;
/FutoGoB101-Bold               /HGGothicE                  ;
/MidashiGo-MB31                /HGSoeiKakugothicUB         ;
/Jun101-Light                  /HGMaruGothicMPRO           ;
/HiraMinPro-W2                 /MS-Mincho                  ;
/KozMinProVI-Regular           /Ryumin-Light               ;
/KozMinPro-Regular-Acro        /KozMinProVI-Regular        ;
/KozMinPro-Regular             /KozMinProVI-Regular        ;
/HeiseiMin-W3-Acro             /KozMinProVI-Regular        ;
/HeiseiMin-W3                  /HeiseiMin-W3-Acro          ;
/KozGoPro-Medium               /GothicBBB-Medium           ;
/KozGoPro-Medium-Acro          /KozGoPro-Medium            ;
/HeiseiKakuGo-W5-Acro          /KozGoPro-Medium            ;
/HeiseiKakuGo-W5               /HeiseiKakuGo-W5-Acro       ;
/STSong-Light                  /NSimSun                    ;
/STSong-Regular                /NSimSun                    ;
/STHeiti-Regular               /SimHei                     ;
/STHeiti-Light                 /SimHei                     ;
/STKaiti-Regular               /GBZenKai-Medium            ;
/STFangsong-Regular            /NSimSun                    ;
/STFangsong-Light              /NSimSun                    ;
/AdobeSongStd-Light            /STSong-Light               ;
/AdobeSongStd-Light-Acro       /AdobeSongStd-Light         ;
/STSongStd-Light-Acro          /AdobeSongStd-Light         ;
/STSongStd-Light               /STSongStd-Light-Acro       ;
/STSong-Light-Acro             /AdobeSongStd-Light         ;
/MSung-Light                   /MingLiU                    ;
/MSung-Medium                  /MingLiU                    ;
/MHei-Medium                   /SimHei-Adobe-CNS1          ;
/MKai-Medium                   /ZenKai-Medium              ;
/AdobeMingStd-Light            /MSung-Light                ;
/AdobeMingStd-Light-Acro       /AdobeMingStd-Light         ;
/MSungStd-Light-Acro           /AdobeMingStd-Light         ;
/MSungStd-Light                /MSungStd-Light-Acro        ;
/MSung-Light-Acro              /AdobeMingStd-Light         ;
/HYSMyeongJo-Medium            /BatangChe                  ;
/HYGoThic-Medium               /DotumChe                   ;
/HYKHeadLine-Bold              /Baekmuk-Headline           ;
/HYKHeadLine-Medium            /Baekmuk-Headline           ;
/HYRGoThic-Medium              /GulimChe                   ;
/HYGungSo-Bold                 /GungsuhChe                 ;
/AdobeMyungjoStd-Medium        /HYSMyeongJo-Medium         ;
/AdobeMyungjoStd-Medium-Acro   /AdobeMyungjoStd-Medium     ;
/HYSMyeongJoStd-Medium-Acro    /AdobeMyungjoStd-Medium     ;
/HYSMyeongJoStd-Medium         /HYSMyeongJoStd-Medium-Acro ;
/HYSMyeongJo-Medium-Acro       /AdobeMyungjoStd-Medium     ;

%%% monospaced TrueType fonts in Windows XP
%%% See C:\WINDOWS\Fonts\
/MS-Mincho                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSMINCHO.TTC)   /SubfontID 0 >> ;
/MS-Gothic                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSGOTHIC.TTC)   /SubfontID 0 >> ;
/NSimSun                       << /FileType /TrueType   /CSI [(GB1) 5]      /Path (C:/WINDOWS/Fonts/simsun.ttc)     /SubfontID 1 >> ;
/MingLiU                       << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (C:/WINDOWS/Fonts/mingliu.ttc)    /SubfontID 0 >> ;
/BatangChe                     << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/batang.ttc)     /SubfontID 1 >> ;
/DotumChe                      << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/gulim.ttc)      /SubfontID 3 >> ;
/GulimChe                      << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/gulim.ttc)      /SubfontID 1 >> ;
/GungsuhChe                    << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/batang.ttc)     /SubfontID 3 >> ;

%%% proportional TrueType fonts in Windows XP
%%% See C:\WINDOWS\Fonts\
/MS-PMincho                    << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSMINCHO.TTC)   /SubfontID 1 >> ;
/MS-PGothic                    << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSGOTHIC.TTC)   /SubfontID 1 >> ;
/MS-UI-Gothic                  << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSGOTHIC.TTC)   /SubfontID 2 >> ;
/SimSun                        << /FileType /TrueType   /CSI [(GB1) 5]      /Path (C:/WINDOWS/Fonts/simsun.ttc)     /SubfontID 0 >> ;
/SimHei                        << /FileType /TrueType   /CSI [(GB1) 5]      /Path (C:/WINDOWS/Fonts/simhei.ttf)                  >> ;
/SimHei-Adobe-CNS1             << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (C:/WINDOWS/Fonts/simhei.ttf)                  >> ;
/PMingLiU                      << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (C:/WINDOWS/Fonts/mingliu.ttc)    /SubfontID 1 >> ;
/Batang                        << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/batang.ttc)     /SubfontID 0 >> ;
/Dotum                         << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/gulim.ttc)      /SubfontID 2 >> ;
/Gulim                         << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/gulim.ttc)      /SubfontID 0 >> ;
/Gungsuh                       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/batang.ttc)     /SubfontID 2 >> ;

%%% TrueType fonts in Microsoft Office Professional Edition 2003
/HGMinchoB                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRMB.TTC)      /SubfontID 0 >> ;
/HGMinchoE                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRME.TTC)      /SubfontID 0 >> ;
/HGSoeiPresenceEB              << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRPRE.TTC)     /SubfontID 0 >> ;
/HGGothicM                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRGM.TTC)      /SubfontID 0 >> ;
/HGGothicE                     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRGE.TTC)      /SubfontID 0 >> ;
/HGSoeiKakugothicUB            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRSGU.TTC)     /SubfontID 0 >> ;
/HGMaruGothicMPRO              << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRSMP.TTF)                  >> ;
/HGSoeiKakupoptai              << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRPP1.TTC)     /SubfontID 0 >> ;

%%% Arphic TrueType fonts
%%% See ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/BousungEG-Light-GB            << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/gbsn00lp.ttf) >> ;
/GBZenKai-Medium               << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/gkai00mp.ttf) >> ;
/ShanHeiSun-Light              << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/bsmi00lp.ttf) >> ;
/ZenKai-Medium                 << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/bkai00mp.ttf) >> ;

%%% Baekmuk TrueType fonts
%%% See http://kldp.net/projects/baekmuk/
%%%     ftp://ftp.mizi.com/pub/baekmuk/
/Baekmuk-Batang                << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/batang.ttf) >> ;
/Baekmuk-Dotum                 << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/dotum.ttf)  >> ;
/Baekmuk-Headline              << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/hline.ttf)  >> ;
/Baekmuk-Gulim                 << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/gulim.ttf)  >> ;

%%% Un-fonts
%%% See http://kldp.net/projects/unfonts/
/UnBatang                      << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnBatang.ttf)      >> ;
/UnBatang-Bold                 << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnBatangBold.ttf)  >> ;
/UnDotum                       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnDotum.ttf)       >> ;
/UnDotum-Bold                  << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnDotumBold.ttf)   >> ;
/UnGraphic                     << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGraphic.ttf)     >> ;
/UnGraphic-Bold                << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGraphicBold.ttf) >> ;
/UnGungseo                     << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGungseo.ttf)     >> ;
/UnPilgi                       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnPilgi.ttf)       >> ;
/UnPilgi-Bold                  << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnPilgiBold.ttf)   >> ;

%%% OpenType fonts in Adobe Reader 7.0
%%% See http://www.adobe.com/jp/products/acrobat/acrrasianfontpack.html
%%%     "C:\Program Files\Adobe\Acrobat 7.0\Resource\CIDFont\"
%/Ryumin-Light                  /KozMinProVI-Regular    ;
%/GothicBBB-Medium              /KozGoPro-Medium        ;
%/STSong-Light                  /AdobeSongStd-Light     ;
%/MSung-Light                   /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium            /AdobeMyungjoStd-Medium ;

%%% CID-keyed fonts in Acrobat Reader 4.0
%%% See ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/4.x/
%/Ryumin-Light                  /HeiseiMin-W3-Acro       ;
%/GothicBBB-Medium              /HeiseiKakuGo-W5-Acro    ;
%/STSong-Light                  /STSong-Light-Acro       ;
%/MSung-Light                   /MSung-Light-Acro        ;
%/MHei-Medium                   /MHei-Medium-Acro        ;
%/HYSMyeongJo-Medium            /HYSMyeongJo-Medium-Acro ;
%/HYGoThic-Medium               /HYGoThic-Medium-Acro    ;

%%% Hiragino TrueType fonts
%%% See http://www.screen.co.jp/ga_product/sento/products/pr_TrueType.html
%/HiraMinPro-W2                 /HiraginoMin-W2-90ms-RKSJ-H  ;
%/HiraMinPro-W3                 /HiraginoMin-W3-90ms-RKSJ-H  ;
%/HiraMinPro-W6                 /HiraginoMin-W6-90ms-RKSJ-H  ;
%/HiraKakuPro-W3                /HiraginoKaku-W3-90ms-RKSJ-H ;
%/HiraKakuPro-W6                /HiraginoKaku-W6-90ms-RKSJ-H ;
%/HiraKakuStd-W8                /HiraginoKaku-W8-90ms-RKSJ-H ;
/HiraginoMin-W2-90ms-RKSJ-H    << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/DShirmn2.ttc)   /SubfontID 1 >> ;
/HiraginoMin-W3-90ms-RKSJ-H    << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/DShirmn3.ttc)   /SubfontID 1 >> ;
/HiraginoMin-W6-90ms-RKSJ-H    << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/DShirmn6.ttc)   /SubfontID 1 >> ;
/HiraginoKaku-W3-90ms-RKSJ-H   << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/DShirkg3.ttc)   /SubfontID 1 >> ;
/HiraginoKaku-W6-90ms-RKSJ-H   << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/DShirkg6.ttc)   /SubfontID 1 >> ;
/HiraginoKaku-W8-90ms-RKSJ-H   << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (./TrueType/DShirkg8.ttc)   /SubfontID 1 >> ;
```

### オプション “-dWINKANJI” と “-dNOWINKANJI” {#mef5f1fb}

オプション “-dWINKANJI” を指定すると，日本語フォントを
Win32API ドライバを使って表示します。ただしオプション “-dNOWINKANJI” が
同時に指定されている場合には，オプション “-dWINKANJI” は
無効化されます。Win32API ドライバで使うフォントの割り当ては
gs\gs8.54\lib\kconfig.ps の記述内容によって設定されます。

#### gs\gs8.54\kanji\kconfig.ps の記述例 {#d6cfe346}

```
%% Bitmap fonts
%%
/Ryumin-Light       4300000   (ＭＳ 明朝)         win32BMkanji
%/GothicBBB-Medium   4300200   (HGｺﾞｼｯｸM)          win32BMkanji
/GothicBBB-Medium   4300200   (ＭＳ ゴシック)     win32BMkanji
/FutoMinA101-Bold   4300400   (HG明朝B)           win32BMkanji
/FutoGoB101-Bold    4300600   (HGｺﾞｼｯｸE)          win32BMkanji
/Jun101-Light       4300800   (HG丸ｺﾞｼｯｸM-PRO)    win32BMkanji
/MidashiMin-MA31    4301000   (HG明朝E)           win32BMkanji
/MidashiGo-MB31     4301200   (HG創英角ｺﾞｼｯｸUB)   win32BMkanji

/HiraMinPro-W2      4301400   (ＭＳ 明朝)         win32BMkanji
```

このファイルは Shift_JIS で保存して下さい。

### PDF への CJK フォントの非埋め込み制御 {#zd1cf8d8}

標準ではオプション “-sDEVICE=pdfwrite” や ps2pdf によって
PDF を作成する場合，CJK フォントは全て埋め込まれます。CJK フォントを
埋め込まないように制御するには “/NeverEmbed” を使います。
例えば “test.ps” という PostScript ファイルを PDF に
変換する場合に，/MS-Mincho （ＭＳ 明朝）と /MS-Gothic （ＭＳ ゴシック）とを
埋め込まないようにするためには次のようにコマンドを入力します。

```
>gswin32c -dSAFER -q -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -sOutputFile=test.pdf -c ".setpdfwrite <</NeverEmbed [/MS-Mincho /MS-Gothic]>> setdistillerparams" -f test.ps
```

ここで “/NeverEmbed” で指定するフォント名は PostScript ファイル内に
記述されているフォント名ではなく，実際に埋め込むフォント名でなければ
効果がありません。

また，lib/neverembed.ps に非埋め込み制御を行うフォント名をあらかじめ
記述しておいて，次のようにコマンドを入力する方法もあります。

```
>gswin32c -dSAFER -q -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -sOutputFile=test.pdf -c .setpdfwrite -f neverembed.ps -f test.ps
```

lib/neverembed.ps には，例えば次のように記述しておきます。

```
%!
% neverembed.ps
%
<<
/NeverEmbed [
%/Times-Roman /Times-Italic /Times-Bold /Times-BoldItalic
%/Helvetica /Helvetica-Oblique /Helvetica-Bold /Helvetica-BoldOblique
%/Courier /Courier-Oblique /Courier-Bold /Courier-BoldOblique
%/Symbol
%/ZapfDingbats
/Ryumin-Light /GothicBBB-Medium /HeiseiMin-W3 /HeiseiKakuGo-W5
/STSong-Light /MSung-Light /HYSMyeongJo-Medium
/KozMinProVI-Regular /KozGoPro-Medium
/AdobeSongStd-Light /AdobeMingStd-Light /AdobeMyungjoStd-Medium
/KozMinPro-Regular-Acro /KozGoPro-Medium-Acro
/AdobeSongStd-Light-Acro /AdobeMingStd-Light-Acro /AdobeMyungjoStd-Medium-Acro
/STSongStd-Light-Acro /MSungStd-Light-Acro /HYSMyeongJoStd-Medium-Acro
/HeiseiMin-W3-Acro /HeiseiKakuGo-W5-Acro
/STSong-Light-Acro /MSung-Light-Acro /HYSMyeongJo-Medium-Acro
/MS-Gothic /MS-Mincho /HGGothicM
/NSimSun /MingLiU /BatangChe
]
/AlwaysEmbed [
%/Times-Roman /Times-Italic /Times-Bold /Times-BoldItalic
%/Helvetica /Helvetica-Oblique /Helvetica-Bold /Helvetica-BoldOblique
%/Courier /Courier-Oblique /Courier-Bold /Courier-BoldOblique
%/Symbol
%/ZapfDingbats
]
>> setdistillerparams
```

この lib/neverembed.ps への設定を ps2pdf でも有効に
するためには，gs\gs8.54\lib\ps2pdfxx.bat の記述内容の26行目

```
echo -c .setpdfwrite -f %1 >>_.at2
```

を

```
REM echo -c .setpdfwrite -f %1 >>_.at2
```

のようにコメントアウトし，28行目

```
rem echo -c .setpdfwrite -f neverembed.ps -f %1 >>_.at2
```

に対して

```
echo -c .setpdfwrite -f neverembed.ps -f %1 >>_.at2
```

のようにコメントアウトを解除します。
（UNIX 系 OS では，ghostscript/8.54/lib/ps2pdfwr の記述内容の40行目

```
$GS_EXECUTABLE $OPTIONS -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite "-sOutputFile=$outfile" $OPTIONS -c .setpdfwrite -f "$infile"
```

を

```
#$GS_EXECUTABLE $OPTIONS -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite "-sOutputFile=$outfile" $OPTIONS -c .setpdfwrite -f "$infile"
```

のようにコメントアウトし，44行目

```
#$GS_EXECUTABLE $OPTIONS -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite "-sOutputFile=$outfile" $OPTIONS -c .setpdfwrite -f neverembed.ps -f "$infile"
```

に対して

```
$GS_EXECUTABLE $OPTIONS -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite "-sOutputFile=$outfile" $OPTIONS -c .setpdfwrite -f neverembed.ps -f "$infile"
```

のようにコメントアウトを解除します。）

さらに dvipdfmx が PostScript ファイルや EPS ファイルを PDF に変換する場合に
lib/neverembed.ps への設定を有効にするためには，
$TEXMF/dvipdfm/config/dvipdfmx.cfg の記述内容の18行目

```
D "gswin32c -q -dSAFER -dNOPAUSE -dBATCH -sPAPERSIZE=a0 -sDEVICE=pdfwrite -dCompatibilityLevel=1.3 -dAutoFilterGrayImages=false -dAutoFilterColorImages=false -dGrayImageFilter=/FlateEncode -dColorImageFilter=/FlateEncode -dUseFlateCompression=true -sOutputFile=%o -c .setpdfwrite -f %i -c quit"
```

を次のように変えます。

```
D "gswin32c -q -dSAFER -dNOPAUSE -dBATCH -sPAPERSIZE=a0 -sDEVICE=pdfwrite -dCompatibilityLevel=1.3 -dAutoFilterGrayImages=false -dAutoFilterColorImages=false -dGrayImageFilter=/FlateEncode -dColorImageFilter=/FlateEncode -dUseFlateCompression=true -sOutputFile=%o -c .setpdfwrite -f neverembed.ps -f %i -c quit"
```

### PDF への欧文フォントの埋め込み制御 {#y3b70de6}

Ghostscript 7.07 では “/NeverEmbed”, “/AlwaysEmbed” を使って
PDF への欧文フォントの埋め込み制御が行えましたが，Ghostscript 8.54 では
欧文フォントに対し “/NeverEmbed”, “/AlwaysEmbed” がうまく働きません。
そこで，lib/gs_pdfwr.ps の記述内容を書き換えることで
PDF への欧文フォントの埋め込み制御を行います。

デフォルトでは Adobe の欧文基本14書体である
Times ファミリ，Helvetica ファミリ，Courier ファミリ，Symbol，ZapfDingbats が
埋め込まれません。しかし TeX ファイルから作った Times ファミリや
Helvetica ファミリを埋め込んでいない PDF を Windows の Adobe Reader や
Adobe Acrobat で表示すると，Times ファミリや Helvetica ファミリでの文字の一部
（&#x14d; (\\={o}), &#x111; (\dj) など）が正確に表示されません。また Mac OS X を
除く UNIX 系 OS での Adobe Reader で Times-Italic や Times-BoldItalic を
埋め込んでいない PDF を表示すると，Times-Italic や Times-BoldItalic の部分が
Italic 体ではなく Oblique 体（Slanted 体，斜体）になってしまいます。
（Xpdf で表示すると Adobe の欧文基本14書体は埋め込まれていなくても正確に
表示されます。しかし Xpdf の場合は非埋め込みの中国語フォント・韓國語フォントが
表示されず，非埋め込みの日本語フォントに使われる書体にも不満がある方が
多いとのこと。）そこで Times ファミリと Helvetica ファミリは
埋め込み，Courier ファミリ，Symbol，ZapfDingbats だけを埋め込まないように
すると，ほとんどの環境で Adobe の欧文基本14書体が正確に表示されます。
このような設定にするには，lib/gs_pdfwr.ps の記述内容の27&ndash;34行目のうち
31&ndash;32行目を次のようにコメントアウトして下さい。

```
/.a2112 [2 1 1 2] readonly def
/.a1111 [1 1 1 1] readonly def
/.standardfonts [
  /Courier /Courier-Bold /Courier-Oblique /Courier-BoldOblique
%  /Helvetica /Helvetica-Bold /Helvetica-Oblique /Helvetica-BoldOblique
%  /Times-Roman /Times-Bold /Times-Italic /Times-BoldItalic
  /Symbol /ZapfDingbats
] readonly def
```

***

## Comments {#a6eac88c}

<!-- - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  -->
<!-- 34567890123456789012345678901234567890123456789012345678901234567890123456789 -->
