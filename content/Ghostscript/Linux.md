---
title: "Ghostscript/Linux"
url: "/Ghostscript/Linux/"
date: 2013-08-18T17:03:26Z
pukiwiki: "Ghostscript/Linux"
---

# Ghostscript/Linux

[Ghostscript](/Ghostscript/) > Linux

## Ghostscript for Linux {#j0238493}

### ダウンロード/インストール {#g31ae747}

#### Linux Mint {#eef2e142}

- [http://packages.ubuntu.com/ja/ghostscript](http://packages.ubuntu.com/ja/ghostscript)

#### Debian {#e2250e99}

- [https://packages.debian.org/ja/ghostscript](https://packages.debian.org/ja/ghostscript)

#### Fedora {#v3e95c6b}

- [https://apps.fedoraproject.org/packages/ghostscript](https://apps.fedoraproject.org/packages/ghostscript)

#### openSUSE {#n12ef824}

- [http://software.opensuse.org/package/ghostscript](http://software.opensuse.org/package/ghostscript)

#### Arch Linux {#icf0081e}

- [https://www.archlinux.org/packages/?q=ghostscript](https://www.archlinux.org/packages/?q=ghostscript)

#### Gentoo Linux {#ze142c19}

- [http://packages.gentoo.org/package/app-text/ghostscript-gpl](http://packages.gentoo.org/package/app-text/ghostscript-gpl)

#### ソースコードからインストール {#u4ad1919}

- [http://downloads.ghostscript.com/public/](http://downloads.ghostscript.com/public/)
- [http://sourceforge.net/projects/ghostscript/files/GPL%20Ghostscript/](http://sourceforge.net/projects/ghostscript/files/GPL%20Ghostscript/)
- [https://code.google.com/p/ghostscript/downloads/list](https://code.google.com/p/ghostscript/downloads/list)

などから ghostscript-9.10.tar.bz2 を入手します。

/usr/local/ 以下にインストールする場合です。

```
$ tar xvf ghostscript-9.10.tar.bz2
$ cd ghostscript-9.10
$ ./configure --disable-compile-inits --prefix=/usr/local
$ make
$ sudo make install
```

このように最近のものは --disable-compile-inits を付けないと cidfmap を参照しないようです。<br>
ほかにオプションとしては --without-x とか --disable-cups とかで不要なものを外せます。<br>

すると，次のものが /usr/local/bin/ に入ります。

> bdftops, dumphint, dvipdf, eps2eps, fixmswrd.pl, font2c, gs, gsbj, gsdj,
> gsdj500, gslj, gslp, gsnd, lprsetup.sh, pdf2dsc, pdf2ps, pdfopt, pf2afm,
> pfbtopfa, printafm, ps2ascii, ps2epsi, ps2pdf, ps2pdf12, ps2pdf13,
> ps2pdf14, ps2pdfwr, ps2ps, pv.sh, unix-lpr.sh, wftopfa

また，/usr/local/share/ghostscript/\`gs --version\`/ の下に
たくさんのものが入ります。/usr/local/man/man1/ と
/usr/local/man/de/man1/ の中にもマニュアル類が入ります。

```

```

和文については，cidfmap (/usr/local/share/ghostscript/\`gs --version\`/Resource/Init/cidfmap) に記述します。IPAexフォントを利用するなら

```
/ipaexm << /FileType /TrueType /Path (/usr/share/fonts/truetype/ipaex/ipaexm.ttf) /SubfontID 0 /CSI [(Japan1) 6] >> ;
/ipaexg << /FileType /TrueType /Path (/usr/share/fonts/truetype/ipaex/ipaexg.ttf) /SubfontID 0 /CSI [(Japan1) 6] >> ;
/Ryumin-Light /ipaexm ;
/GothicBBB-Medium /ipaexg ;
```

以上で PostScript ファイルの表示ができるようになりました。
ps2pdf もうまく行えます。

$TEXMFLOCAL/fonts/opentype// や $TEXMFLOCAL/fonts/truetype// からも
シンボリックリンクを作っておくと良いでしょう
（こちらは拡張子 “.otf”，“.ttf”，“.ttc” を付けたままにしておきます）。

フォントパスが規定外のところにあると ps2pdf がエラーになるようです。これは -dSAFER オプションのためで，解決法としては規定の場所にシンボリックリンクを張って使うか，あるいは export GS_FONTPATH=... のようにフォントのある場所を指定しておくことが考えられます。

### /usr/local/share/ghostscript/\`gs --version\`/Resource/Init/cidfmap の記述例 {#h0f0fbe0}

#### <a id="cidfmap-unix">For UNIX (e.g. Solaris, etc.) or Unix-like OS (e.g. Linux, BSD, etc.)</a> {#c18aa324}

***

```
%!
%%% aliases
/Ryumin-Light                 /IPAexMincho                 ;
/Ryumin-Medium                /IPAexMincho                 ;
/FutoMinA101-Bold             /WadaMin-Bold                ;
%/MidashiMin-MA31              /                            ;
/GothicBBB-Medium             /IPAexGothic                 ;
%/GothicBBB-Medium             /VL-Gothic-Regular           ;
%/FutoGoB101-Bold              /                            ;
%/MidashiGo-MB31               /                            ;
/Jun101-Light                 /WadaLabMaruGo20044          ;
/HeiseiMin-W3                 /Ryumin-Light                ;
/HeiseiKakuGo-W5              /GothicBBB-Medium            ;
%/HiraMinStdN-W2               /                            ;
/KozMinPr6N-Regular           /Ryumin-Light                ;
/KozMinPro-Regular            /KozMinPr6N-Regular          ;
/KozMinPro-Regular-Acro       /KozMinPro-Regular           ;
/HeiseiMin-W3-Acro            /KozMinPro-Regular-Acro      ;
/KozGoPr6N-Medium             /GothicBBB-Medium            ;
/KozGoPro-Medium              /KozGoPr6N-Medium            ;
/KozGoPro-Medium-Acro         /KozGoPro-Medium             ;
/HeiseiKakuGo-W5-Acro         /KozGoPro-Medium-Acro        ;
/STSong-Light                 /BousungEG-Light-GB          ;
/STSong-Regular               /BousungEG-Light-GB          ;
/STHeiti-Regular              /WenQuanYiZenHei             ;
/STHeiti-Light                /WenQuanYiZenHei             ;
/STKaiti-Regular              /GBZenKai-Medium             ;
%/STFangsong-Regular           /                            ;
%/STFangsong-Light             /                            ;
/AdobeSongStd-Light           /STSong-Light                ;
/AdobeSongStd-Light-Acro      /AdobeSongStd-Light          ;
/STSongStd-Light-Acro         /AdobeSongStd-Light-Acro     ;
/STSongStd-Light              /STSongStd-Light-Acro        ;
/STSong-Light-Acro            /STSongStd-Light-Acro        ;
/AdobeHeitiStd-Regular        /STHeiti-Regular             ;
/MSung-Light                  /ShanHeiSun-Uni              ;
/MSung-Medium                 /ShanHeiSun-Uni              ;
/MHei-Medium                  /cwTeXHeiBold                ;
/MKai-Medium                  /ZenKai-Uni                  ;
/AdobeMingStd-Light           /MSung-Light                 ;
/AdobeMingStd-Light-Acro      /AdobeMingStd-Light          ;
/MSungStd-Light-Acro          /AdobeMingStd-Light-Acro     ;
/MSungStd-Light               /MSungStd-Light-Acro         ;
/MSung-Light-Acro             /MSungStd-Light-Acro         ;
/MHei-Medium-Acro             /MHei-Medium                 ;
/HYSMyeongJo-Medium           /Baekmuk-Batang              ;
/HYGoThic-Medium              /Baekmuk-Dotum               ;
/HYKHeadLine-Bold             /Baekmuk-Headline            ;
/HYKHeadLine-Medium           /Baekmuk-Headline            ;
/HYRGoThic-Medium             /Baekmuk-Gulim               ;
/HYGungSo-Bold                /UnGungseo                   ;
/AdobeMyungjoStd-Medium       /HYSMyeongJo-Medium          ;
/AdobeMyungjoStd-Medium-Acro  /AdobeMyungjoStd-Medium      ;
/HYSMyeongJoStd-Medium-Acro   /AdobeMyungjoStd-Medium-Acro ;
/HYSMyeongJoStd-Medium        /HYSMyeongJoStd-Medium-Acro  ;
/HYSMyeongJo-Medium-Acro      /HYSMyeongJoStd-Medium-Acro  ;
/HYGoThic-Medium-Acro         /HYGoThic-Medium             ;

%%% VLGothic Font Family
%%% See http://vlgothic.dicey.org/
/VL-Gothic-Regular            << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/VL-Gothic-Regular.ttf) >> ;

%%% IPAex Fonts
%%% See http://ipafont.ipa.go.jp/
/IPAexMincho                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/local/share/fonts/truetype/ipafont/ipaexm.ttf) >> ;
/IPAexGothic                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/local/share/fonts/truetype/ipafont/ipaexg.ttf) >> ;

%%% IPA Fonts
%%% See http://ipafont.ipa.go.jp/
/IPAMincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/local/share/fonts/truetype/ipafont/ipam.ttf) >> ;
/IPAGothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/local/share/fonts/truetype/ipafont/ipag.ttf) >> ;

%%% O'Reilly CID-keyed fonts including Wadalab Fonts
%%% See ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/samples/
%%%     ftp://ftp.oreilly.de/pub/examples/english_examples/nutshell/cjkv/adobe/samples/
%%%     http://examples.oreilly.de/english_examples/nutshell/cjkv/adobe/samples/
%/Ryumin-Light                 /WadaMin-Regular                ;
%/FutoMinA101-Bold             /WadaMin-Bold                   ;
%/GothicBBB-Medium             /WadaGo-Bold                    ;
%/Jun101-Light                 /WadaMaruGo-Regular             ;
%/MSung-Light                  /MOESung-Regular                ;
%/MKai-Medium                  /MOEKai-Regular                 ;
%/HYSMyeongJo-Medium           /MunhwaMyungjoStd-Regular       ;
%/HYSMyeongJo-Medium           /Munhwa-Regular                 ;
%/HYSMyeongJo-Medium           /MunhwaMyungjoStd-Bold          ;
%/HYSMyeongJo-Medium           /Munhwa-Bold                    ;
%/HYGoThic-Medium              /MunhwaGothicStd-Regular        ;
%/HYGoThic-Medium              /MunhwaGothic-Regular           ;
%/HYKHeadLine-Bold             /MunhwaGothicStd-Bold           ;
%/HYKHeadLine-Bold             /MunhwaGothic-Bold              ;
%/HYGungSo-Bold                /MunhwaScriptStd-Bold           ;
%/HYGungSo-Bold                /MunhwaGungSeo-Bold             ;
%/HYGungSo-Bold                /MunhwaScriptStd-Light          ;
%/HYGungSo-Bold                /MunhwaGungSeo-Light            ;
%/HYGungSo-Bold                /MunhwaScriptFreestyleStd-Bold  ;
%/HYGungSo-Bold                /MunhwaGungSeoHeulim-Bold       ;
%/HYGungSo-Bold                /MunhwaScriptFreestyleStd-Light ;
%/HYGungSo-Bold                /MunhwaGungSeoHeulim-Light      ;

%%% Wadalab Maru Gothic (JIS X 0213)
%%% See http://sourceforge.jp/projects/jis2004/wiki/FrontPage
/WadaLabMaruGo20044           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/wlmaru/wlmaru20044.ttf) >> ;
/WadaLabMaruGo20004           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/wlmaru/wlmaru20004.ttf) >> ;

%%% Wadalab Fonts (TrueType outline fonts)
%%% See http://www.wht.mmtr.or.jp/~hirotsu/font/wadaken.html
/Wadalab-HosoMincho           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/wadalab/wadalab-hosomin.ttf)    >> ;
/Wadalab-NakaMincho           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/wadalab/wadalab-nakamin.ttf)    >> ;
/Wadalab-NakaKakuGothic       << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/wadalab/wadalab-nakakakugo.ttf) >> ;
/Wadalab-HosoMaruGothic       << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/wadalab/wadalab-hosomarugo.ttf) >> ;

%%% Chinese TrueType font by Arphic Technology
%%% See ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/ShanHeiSun-Light             << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/arphic/bsmi00lp.ttf) >> ;
/ZenKai-Medium                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/arphic/bkai00mp.ttf) >> ;
/BousungEG-Light-GB           << /FileType /TrueType  /CSI [(GB1) 5]     /Path (/usr/share/fonts/truetype/arphic/gbsn00lp.ttf) >> ;
/GBZenKai-Medium              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (/usr/share/fonts/truetype/arphic/gkai00mp.ttf) >> ;

%%% CJK-Unifonts
%%% See http://www.freedesktop.org/wiki/Software/CJKUnifonts
/ShanHeiSun-Uni               << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/arphic/uming.ttf) >> ;
/ShanHeiSun-Uni-Adobe-GB1     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (/usr/share/fonts/truetype/arphic/uming.ttf) >> ;
/ZenKai-Uni                   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/arphic/ukai.ttf)  >> ;
/ZenKai-Uni-Adobe-GB1         << /FileType /TrueType  /CSI [(GB1) 5]     /Path (/usr/share/fonts/truetype/arphic/ukai.ttf)  >> ;

%%% WenQuanYi outline fonts
%%% See http://wqy.sourceforge.net/en/
%%%     http://sourceforge.net/projects/wqy/
/WenQuanYiZenHei              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (/usr/share/fonts/wenquanyi/wqy-zenhei/wqy-zenhei.ttf) >> ;
/WenQuanYiZenHei-Adobe-CNS1   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/wenquanyi/wqy-zenhei/wqy-zenhei.ttf) >> ;

%%% cwTeX TrueType font
%%% See http://cle.linux.org.tw/fonts/cwttf/
/cwTeXMing                    << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/cwtex/cwming.ttf)        >> ;
/cwTeXMing-center             << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/cwtex/center/cwming.ttf) >> ;
/cwTeXHeiBold                 << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/cwtex/cwheib.ttf)        >> ;
/cwTeXHeiBold-center          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/cwtex/center/cwheib.ttf) >> ;
/cwTeXYen                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/cwtex/cwyen.ttf)         >> ;
/cwTeXYen-center              << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/cwtex/center/cwyen.ttf)  >> ;
/cwTeXKai                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/cwtex/cwkai.ttf)         >> ;
/cwTeXKai-center              << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/cwtex/center/cwkai.ttf)  >> ;
/cwTeXFangSong                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/cwtex/cwfs.ttf)          >> ;
/cwTeXFangSong-center         << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/usr/share/fonts/truetype/cwtex/center/cwfs.ttf)   >> ;

%%% Baekmuk fonts
%%% See http://kldp.net/projects/baekmuk/
%%%     ftp://ftp.mizi.com/pub/baekmuk/
/Baekmuk-Batang               << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/baekmuk/batang.ttf) >> ;
/Baekmuk-Dotum                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/baekmuk/dotum.ttf)  >> ;
/Baekmuk-Headline             << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/baekmuk/hline.ttf)  >> ;
/Baekmuk-Gulim                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/baekmuk/gulim.ttf)  >> ;

%%% Un-fonts Core families
%%% See http://kldp.net/projects/unfonts/
/UnBatang                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnBatang.ttf)      >> ;
/UnBatang-Bold                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnBatangBold.ttf)  >> ;
/UnDotum                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnDotum.ttf)       >> ;
/UnDotum-Bold                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnDotumBold.ttf)   >> ;
/UnGraphic                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnGraphic.ttf)     >> ;
/UnGraphic-Bold               << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnGraphicBold.ttf) >> ;
/UnGungseo                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnGungseo.ttf)     >> ;
/UnPilgi                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnPilgi.ttf)       >> ;
/UnPilgi-Bold                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnPilgiBold.ttf)   >> ;

%%% Un-fonts Extra families
%%% See http://kldp.net/projects/unfonts/
/UnShinmun                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnShinmun.ttf)    >> ;
/UnPen                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnPen.ttf)        >> ;
/UnPenheulim                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnPenheulim.ttf)  >> ;
/UnTaza                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnTaza.ttf)       >> ;
/UnYetgul                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnYetgul.ttf)     >> ;
/UnBom                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnBom.ttf)        >> ;
/UnJamoBatang                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnJamoBatang.ttf) >> ;
/UnJamoSora                   << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnJamoSora.ttf)   >> ;
/UnJamoDotum                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnJamoDotum.ttf)  >> ;
/UnJamoNovel                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/unfonts/UnJamoNovel.ttf)  >> ;

%%% A Lee's free Hangul TrueType fonts
%%% See http://packages.qa.debian.org/t/ttf-alee.html
/Guseul                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/alee/Guseul.ttf)       >> ;
/Bangwool                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/alee/Bangwool.ttf)     >> ;
/Eunjin                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/alee/Eunjin.ttf)       >> ;
/EunjinNakseo                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/alee/EunjinNakseo.ttf) >> ;
/Bandal                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/usr/share/fonts/truetype/alee/Bandal.ttf)       >> ;

%%% Bitstream Cyberbit
%%% See http://ftp.netscape.com/pub/communicator/extras/fonts/windows/
/BitstreamCyberbit-Roman      << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/Cyberbit/Cyberbit.ttf) >> ;
/BitstreamCyberCJK-Roman      << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/CyberCJK/Cybercjk.ttf) >> ;

%%% OpenType fonts with PostScript outlines in Adobe Reader 9
%%% See http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Unix
%%%     ftp://ftp.adobe.com/pub/adobe/reader/unix/9.x/9.1/misc/
%%%     /opt/Adobe/Reader9/Resource/CIDFont/
%%%     /usr/local/Adobe/Acrobat9.0/Resource/CIDFont/
%/Ryumin-Light                 /KozMinPr6N-Regular     ;
%/GothicBBB-Medium             /KozGoPr6N-Medium       ;
%/STSong-Light                 /AdobeSongStd-Light     ;
%/MSung-Light                  /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium           /AdobeMyungjoStd-Medium ;

%%% CID-keyed fonts in Adobe Acrobat Reader 4
%%% See ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/4.x/
%/Ryumin-Light                 /HeiseiMin-W3-Acro       ;
%/GothicBBB-Medium             /HeiseiKakuGo-W5-Acro    ;
%/STSong-Light                 /STSong-Light-Acro       ;
%/MSung-Light                  /MSung-Light-Acro        ;
%/MHei-Medium                  /MHei-Medium-Acro        ;
%/HYSMyeongJo-Medium           /HYSMyeongJo-Medium-Acro ;
%/HYGoThic-Medium              /HYGoThic-Medium-Acro    ;
```

<!--  -->
<!-- %%% RICOH LX TrueType fonts in Vine Linux 3.2 CR -->
<!-- %%% See http://vinelinux.org/whatsnew.html#news/20060123 -->
<!-- /LX-Mincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/lxmincho.ttc)  /SubfontID 0 >> ; -->
<!-- /LX-Gothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/lxgothic.ttc)  /SubfontID 0 >> ; -->
<!-- /LX-Gothic-UB                 << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/lxgothub.ttc)  /SubfontID 0 >> ; -->
<!-- /LX-MaruGothic                << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/lxmgoth.ttc)   /SubfontID 0 >> ; -->
<!-- /LX-POP                       << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/lxpop.ttc)     /SubfontID 0 >> ; -->
<!--  -->
<!-- %%% DynaComware DynaFont series in Vine Linux 3.2 CR -->
<!-- %%% See http://vinelinux.org/whatsnew.html#news/20060123 -->
<!-- /DFMincho-UB                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/dfminc.ttc)   /SubfontID 0 >> ; -->
<!-- /DFKaisho-SB                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/dfkai7.ttc)   /SubfontID 0 >> ; -->
<!-- /DFBrushRD-W7                 << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/dfbrr7.ttc)   /SubfontID 0 >> ; -->
<!-- /DFPOPStencil-W7              << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/dfpost7.ttc)  /SubfontID 0 >> ; -->
<!-- /DFFreeRyuyou-Lt              << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/dffry2.ttc)   /SubfontID 0 >> ; -->

***

### PDF への欧文14書体の埋め込み {#ga265d9e}

- [いまさらのdvipdfmxのフォント埋め込み](http://tauros.ams.eng.osaka-u.ac.jp/mt/jp/archives/000076.html)

### PDF への CJK フォントの非埋め込み制御 {#ya99c3fd}

[Ghostscript/Windows](/Ghostscript/Windows/#zd1cf8d8) を参照．<br>

UNIX や UNIX 互換 OS では，[ghostscript/\`gs --version\`/lib/ps2pdfwr](http://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=gs/lib/ps2pdfwr;hb=HEAD) の記述内容の44行目

```
exec "$GS_EXECUTABLE" $OPTIONS -q -P- -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sstdout=%stderr "-sOutputFile=$outfile" $OPTIONS -c .setpdfwrite -f "$infile"
```

を

```
#exec "$GS_EXECUTABLE" $OPTIONS -q -P- -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sstdout=%stderr "-sOutputFile=$outfile" $OPTIONS -c .setpdfwrite -f "$infile"
```

のようにコメントアウトし

```
exec "$GS_EXECUTABLE" $OPTIONS -q -P- -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sstdout=%stderr "-sOutputFile=$outfile" $OPTIONS -c .setpdfwrite -f neverembed.ps -f "$infile"
```

を追加します。
