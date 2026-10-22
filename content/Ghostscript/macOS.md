---
title: "Ghostscript/macOS"
url: "/Ghostscript/macOS/"
date: 2017-06-13T14:34:46Z
pukiwiki: "Ghostscript/macOS"
---

# Ghostscript/macOS

[Ghostscript](/Ghostscript/) > [macOS](/Mac/)

## Ghostscript for macOS {#ccf6bfc2}

***

***

### 原ノ味フォントの設定 {#x59ee93b}

- [https://okumuralab.org/tex/mod/forum/discuss.php?d=2795&parent=16389](https://okumuralab.org/tex/mod/forum/discuss.php?d=2795&parent=16389)

```
$ sudo cjk-gs-integrate --link-texmf --force
```

### 配布先 {#see6fdd7}

- [Richard Koch Home Page](https://pages.uoregon.edu/koch/)
- [https://formulae.brew.sh/formula/ghostscript](https://formulae.brew.sh/formula/ghostscript)
    <!-- - -https://github.com/Homebrew/homebrew-core/blob/master/Formula/g/ghostscript.rb -->

- [https://ports.macports.org/port/ghostscript/](https://ports.macports.org/port/ghostscript/)
    <!-- - -https://github.com/macports/macports-ports/blob/master/print/ghostscript/Portfile -->

### /usr/local/share/ghostscript/\`gs --version\`/Resource/Init/cidfmap の記述例 {#g10fce9f}

#### <a id="cidfmap-macos">For macOS</a> {#eb079434}

***

```
%!
%%% aliases
/Ryumin-Light                 /HaranoAjiMincho-Regular     ;
/Ryumin-Medium                /HiraMinProN-W3              ;
/FutoMinA101-Bold             /HiraMinProN-W6              ;
/MidashiMin-MA31              /HiraMinProN-W6              ;
/GothicBBB-Medium             /HaranoAjiGothic-Medium      ;
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

%%% TrueType outline fonts in OS X Yosemite
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
%%% See https://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     https://ftp.jaist.ac.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
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
%%%     https://sourceforge.net/projects/wqy/
/WenQuanYiZenHei              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/wqy-zenhei/wqy-zenhei.ttf) >> ;
/WenQuanYiZenHei-Adobe-CNS1   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/wqy-zenhei/wqy-zenhei.ttf) >> ;

%%% Baekmuk fonts
%%% See https://kldp.net/baekmuk/
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

%%% OpenType fonts with PostScript outlines in Adobe Acrobat Reader DC/Acrobat
%%% See https://helpx.adobe.com/jp/acrobat/kb/macintosh-font-packs--acrobat---reader-.html
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
