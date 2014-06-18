---
title: "Ghostscript/OS X"
url: "/Ghostscript/OS X/"
date: 2013-08-18T17:01:27Z
pukiwiki: "Ghostscript/OS X"
---

# Ghostscript/OS X

[Ghostscript](/Ghostscript/) > OS X

## Ghostscript for OS X {#ccf6bfc2}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

### 配布先 {#see6fdd7}

- [Ghostscript.app - マスクメロン](http://www.muskmelon.jp/?page_id=75)
    - [Mac用Ghostscript（gv付き）を入れてみた](http://oversleptabit.com/?p=1337)
- [Richard Koch Home Page](http://pages.uoregon.edu/koch/)
- [https://github.com/Homebrew/homebrew/blob/master/Library/Formula/ghostscript.rb](https://github.com/Homebrew/homebrew/blob/master/Library/Formula/ghostscript.rb)
- [https://trac.macports.org/browser/trunk/dports/print/ghostscript/Portfile](https://trac.macports.org/browser/trunk/dports/print/ghostscript/Portfile)
- [https://trac.macports.org/browser/trunk/dports/print/ghostscript-fonts-hiragino/Portfile](https://trac.macports.org/browser/trunk/dports/print/ghostscript-fonts-hiragino/Portfile)

和文については，cidfmap (/usr/local/share/ghostscript/\`gs --version\`/Resource/Init/cidfmap) に記述します。<br>
ヒラギノを利用するなら

```
/Ryumin-Light      /HiraMinProN-W3   ;
/GothicBBB-Medium  /HiraKakuProN-W3  ;
/HeiseiMin-W3      /Ryumin-Light     ;
/HeiseiKakuGo-W5   /GothicBBB-Medium ;
```

あとは /usr/local/share/ghostscript/\`gs --version\`/Resource/CIDFont/ の
中から /{,System/}Library/Fonts/ の中のヒラギノに “HiraMinProN-W3” のような
名前でシンボリックリンクを作っておきます。<br>
例えば OS X なら

```
$ sudo ln -s /System/Library/Fonts/"ヒラギノ明朝 ProN W3.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraMinProN-W3
$ sudo ln -s /System/Library/Fonts/"ヒラギノ明朝 ProN W6.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraMinProN-W6
$ sudo ln -s /System/Library/Fonts/"ヒラギノ角ゴ ProN W3.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraKakuProN-W3
$ sudo ln -s /System/Library/Fonts/"ヒラギノ角ゴ ProN W6.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraKakuProN-W6
$ sudo ln -s /System/Library/Fonts/华文黑体.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STHeiti.ttf
$ sudo ln -s /System/Library/Fonts/华文细黑.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STXihei.ttf
$ sudo ln -s /System/Library/Fonts/"儷黑 Pro.ttf" \
> /usr/local/share/ghostscript/fonts/TrueType/LiHeiPro.ttf
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ StdN W8.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraKakuStdN-W8
$ sudo ln -s /Library/Fonts/"ヒラギノ丸ゴ ProN W4.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraMaruProN-W4
$ sudo ln -s /Library/Fonts/"ヒラギノ明朝 Pro W3.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraMinPro-W3
$ sudo ln -s /Library/Fonts/"ヒラギノ明朝 Pro W6.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraMinPro-W6
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ Pro W3.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraKakuPro-W3
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ Pro W6.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraKakuPro-W6
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ Std W8.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraKakuStd-W8
$ sudo ln -s /Library/Fonts/"ヒラギノ丸ゴ Pro W4.otf" \
> /usr/local/share/ghostscript/`gs --version`/Resource/CIDFont/HiraMaruPro-W4
$ sudo ln -s /Library/Fonts/华文宋体.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STSong.ttf
$ sudo ln -s /Library/Fonts/华文楷体.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STKaiti.ttf
$ sudo ln -s /Library/Fonts/华文仿宋.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STFangsong.ttf
$ sudo ln -s /Library/Fonts/"儷宋 Pro.ttf" \
> /usr/local/share/ghostscript/fonts/TrueType/LiSongPro.ttf
```

さらに，/usr/local/share/ghostscript/\`gs --version\`/Resource/Font/ の中に
例えば “HiraMinProN-W3-H” という名前で次のようなファイルを作っておきます：

```

```

***

```
/HiraMinProN-W3-H
/H /CMap findresource
[/HiraMinProN-W3 /CIDFont findresource]
composefont pop
```

***

以上で PostScript ファイルの表示ができるようになりました。
ps2pdf もうまく行えます。

$TEXMFLOCAL/fonts/opentype// や $TEXMFLOCAL/fonts/truetype// からも
シンボリックリンクを作っておくと良いでしょう
（こちらは拡張子 “.otf”，“.ttf”，“.ttc” を付けたままにしておきます）。

フォントパスが規定外のところにあると ps2pdf がエラーになるようです。<br>
これは -dSAFER オプションのためで，解決法としては規定の場所にシンボリックリンクを張って使うか，あるいは export GS_FONTPATH=... のようにフォントのある場所を指定しておくことが考えられます。<br>

### /usr/local/share/ghostscript/\`gs --version\`/Resource/Init/cidfmap の記述例 {#g10fce9f}

#### <a id="cidfmap-osx">For OS X</a> {#eb079434}

***

```
%!
%%% aliases
/Ryumin-Light                 /HiraMinProN-W3              ;
/Ryumin-Medium                /HiraMinProN-W3              ;
/FutoMinA101-Bold             /HiraMinProN-W6              ;
/MidashiMin-MA31              /HiraMinProN-W6              ;
/GothicBBB-Medium             /HiraKakuProN-W3             ;
/FutoGoB101-Bold              /HiraKakuProN-W6             ;
/MidashiGo-MB31               /HiraKakuStdN-W8             ;
/Jun101-Light                 /HiraMaruProN-W4             ;
/HeiseiMin-W3                 /Ryumin-Light                ;
/HeiseiKakuGo-W5              /GothicBBB-Medium            ;
/HiraMinStdN-W2               /MS-Mincho                   ;
/KozMinPr6N-Regular           /Ryumin-Light                ;
/KozMinPro-Regular            /KozMinPr6N-Regular          ;
/KozMinPro-Regular-Acro       /KozMinPro-Regular           ;
/HeiseiMin-W3-Acro            /KozMinPro-Regular-Acro      ;
/KozGoPr6N-Medium             /GothicBBB-Medium            ;
/KozGoPro-Medium              /KozGoPr6N-Medium            ;
/KozGoPro-Medium-Acro         /KozGoPro-Medium             ;
/HeiseiKakuGo-W5-Acro         /KozGoPro-Medium-Acro        ;
/STSong-Light                 /STSong                      ;
/STSong-Regular               /STSong                      ;
/STHeiti-Regular              /STHeiti                     ;
/STHeiti-Light                /STXihei                     ;
/STKaiti-Regular              /STKaiti                     ;
/STFangsong-Regular           /STFangsong                  ;
/STFangsong-Light             /STFangsong                  ;
/AdobeSongStd-Light           /STSong-Light                ;
/AdobeSongStd-Light-Acro      /AdobeSongStd-Light          ;
/STSongStd-Light-Acro         /AdobeSongStd-Light-Acro     ;
/STSongStd-Light              /STSongStd-Light-Acro        ;
/STSong-Light-Acro            /STSongStd-Light-Acro        ;
/AdobeHeitiStd-Regular        /STHeiti-Regular             ;
/MSung-Light                  /LiSongPro                   ;
/MSung-Medium                 /LiSongPro                   ;
/MHei-Medium                  /LiHeiPro                    ;
/MKai-Medium                  /STKaiti-Adobe-CNS1          ;
/AdobeMingStd-Light           /MSung-Light                 ;
/AdobeMingStd-Light-Acro      /AdobeMingStd-Light          ;
/MSungStd-Light-Acro          /AdobeMingStd-Light-Acro     ;
/MSungStd-Light               /MSungStd-Light-Acro         ;
/MSung-Light-Acro             /MSungStd-Light-Acro         ;
/MHei-Medium-Acro             /MHei-Medium                 ;
/HYSMyeongJo-Medium           /Batang                      ;
/HYGoThic-Medium              /Baekmuk-Dotum               ;
/HYKHeadLine-Bold             /Baekmuk-Headline            ;
/HYKHeadLine-Medium           /Baekmuk-Headline            ;
/HYRGoThic-Medium             /Gulim                       ;
/HYGungSo-Bold                /UnGungseo                   ;
/AdobeMyungjoStd-Medium       /HYSMyeongJo-Medium          ;
/AdobeMyungjoStd-Medium-Acro  /AdobeMyungjoStd-Medium      ;
/HYSMyeongJoStd-Medium-Acro   /AdobeMyungjoStd-Medium-Acro ;
/HYSMyeongJoStd-Medium        /HYSMyeongJoStd-Medium-Acro  ;
/HYSMyeongJo-Medium-Acro      /HYSMyeongJoStd-Medium-Acro  ;
/HYGoThic-Medium-Acro         /HYGoThic-Medium             ;

%%% TrueType outline fonts in OS X
%%% See /System/Library/Fonts/
%%%     /Library/Fonts/
/STSong                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/STSong.ttf)     >> ;
/STHeiti                      << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/STHeiti.ttf)    >> ;
/STXihei                      << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/STXihei.ttf)    >> ;
/STKaiti                      << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/STKaiti.ttf)    >> ;
/STKaiti-Adobe-CNS1           << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/STKaiti.ttf)    >> ;
/STFangsong                   << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/STFangsong.ttf) >> ;
/LiSongPro                    << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/LiSongPro.ttf)  >> ;
/LiHeiPro                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/LiHeiPro.ttf)   >> ;

%%% TrueType outline fonts in Microsoft Office for Mac 2011
%%% See http://www.microsoft.com/japan/mac/trial
%%%     /Library/Fonts/Microsoft/
/MS-Mincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/Library/Fonts/Microsoft/MS Mincho.ttf)  >> ;
/MS-PMincho                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/Library/Fonts/Microsoft/MS PMincho.ttf) >> ;
/MS-Gothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/Library/Fonts/Microsoft/MS Gothic.ttf)  >> ;
/MS-PGothic                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/Library/Fonts/Microsoft/MS PGothic.ttf) >> ;
/SimSun                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (/Library/Fonts/Microsoft/SimSun.ttf)     >> ;
/PMingLiU                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/Library/Fonts/Microsoft/PMingLiU.ttf)   >> ;
/Batang                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/Library/Fonts/Microsoft/Batang.ttf)     >> ;
/Gulim                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/Library/Fonts/Microsoft/Gulim.ttf)      >> ;

%%% Chinese TrueType font by Arphic Technology
%%% See ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/ShanHeiSun-Light             << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/arphic/bsmi00lp.ttf) >> ;
/ZenKai-Medium                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/arphic/bkai00mp.ttf) >> ;
/BousungEG-Light-GB           << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/arphic/gbsn00lp.ttf) >> ;
/GBZenKai-Medium              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/arphic/gkai00mp.ttf) >> ;

%%% CJK-Unifonts
%%% See http://www.freedesktop.org/wiki/Software/CJKUnifonts
/ShanHeiSun-Uni               << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/ttf-arphic-uming/uming.ttf) >> ;
/ShanHeiSun-Uni-Adobe-GB1     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/ttf-arphic-uming/uming.ttf) >> ;
/ZenKai-Uni                   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/ttf-arphic-ukai/ukai.ttf)   >> ;
/ZenKai-Uni-Adobe-GB1         << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/ttf-arphic-ukai/ukai.ttf)   >> ;

%%% WenQuanYi outline fonts
%%% See http://wenq.org/
%%%     http://sourceforge.net/projects/wqy/
/WenQuanYiZenHei              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/wqy-zenhei/wqy-zenhei.ttf) >> ;
/WenQuanYiZenHei-Adobe-CNS1   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/wqy-zenhei/wqy-zenhei.ttf) >> ;

%%% Baekmuk fonts
%%% See http://kldp.net/projects/baekmuk/
%%%     ftp://ftp.mizi.com/pub/baekmuk/
/Baekmuk-Batang               << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/batang.ttf) >> ;
/Baekmuk-Dotum                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/dotum.ttf)  >> ;
/Baekmuk-Headline             << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/hline.ttf)  >> ;
/Baekmuk-Gulim                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/gulim.ttf)  >> ;

%%% Un-fonts Core families
%%% See http://kldp.net/projects/unfonts/
/UnBatang                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnBatang.ttf)      >> ;
/UnBatang-Bold                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnBatangBold.ttf)  >> ;
/UnDotum                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnDotum.ttf)       >> ;
/UnDotum-Bold                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnDotumBold.ttf)   >> ;
/UnGraphic                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnGraphic.ttf)     >> ;
/UnGraphic-Bold               << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnGraphicBold.ttf) >> ;
/UnGungseo                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnGungseo.ttf)     >> ;
/UnPilgi                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnPilgi.ttf)       >> ;
/UnPilgi-Bold                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnPilgiBold.ttf)   >> ;

%%% Un-fonts Extra families
%%% See http://kldp.net/projects/unfonts/
/UnShinmun                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnShinmun.ttf)    >> ;
/UnPen                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnPen.ttf)        >> ;
/UnPenheulim                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnPenheulim.ttf)  >> ;
/UnTaza                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnTaza.ttf)       >> ;
/UnYetgul                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnYetgul.ttf)     >> ;
/UnBom                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnBom.ttf)        >> ;
/UnJamoBatang                 << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnJamoBatang.ttf) >> ;
/UnJamoSora                   << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnJamoSora.ttf)   >> ;
/UnJamoDotum                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnJamoDotum.ttf)  >> ;
/UnJamoNovel                  << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/un-fonts/UnJamoNovel.ttf)  >> ;

%%% OpenType fonts with PostScript outlines in Adobe Reader/Acrobat XI
%%% See http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Mac
%%%     ftp://ftp.adobe.com/pub/adobe/reader/mac/11.x/11.0.00/misc/
%%%     /Library/"Application Support"/Adobe/Fonts/
%/Ryumin-Light                 /KozMinPr6N-Regular     ;
%/GothicBBB-Medium             /KozGoPr6N-Medium       ;
%/GothicBBB-Medium             /KozGoPro-Medium        ;
%/STSong-Light                 /AdobeSongStd-Light     ;
%/STHeiti-Regular              /AdobeHeitiStd-Regular  ;
%/MSung-Light                  /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium           /AdobeMyungjoStd-Medium ;
```

***
