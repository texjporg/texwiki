---
title: "Ghostscript 8.54"
url: "/Ghostscript 8.54/"
date: 2006-09-02T03:42:11Z
pukiwiki: "Ghostscript 8.54"
---

# Ghostscript 8.54

## GNU GPL Ghostscript 8.54 for UNIX or Unix-like OS {#xff4aa84}

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

以下，取り敢えずメモ書き。編集意欲のある方は是非代わりに編集して下さい。

### フォントのシンボリックリンク {#j6c4153b}

```
sudo ln -s "/System/Library/Fonts/ヒラギノ明朝 Pro W3.otf" /usr/local/share/ghostscript/fonts/HiraMinPro-W3.otf
sudo ln -s "/System/Library/Fonts/ヒラギノ明朝 Pro W6.otf" /usr/local/share/ghostscript/fonts/HiraMinPro-W6.otf
sudo ln -s "/System/Library/Fonts/ヒラギノ角ゴ Pro W3.otf" /usr/local/share/ghostscript/fonts/HiraKakuPro-W3.otf
sudo ln -s "/System/Library/Fonts/ヒラギノ角ゴ Pro W6.otf" /usr/local/share/ghostscript/fonts/HiraKakuPro-W6.otf
sudo ln -s "/System/Library/Fonts/ヒラギノ角ゴ Std W8.otf" /usr/local/share/ghostscript/fonts/HiraKakuStd-W8.otf
sudo ln -s "/System/Library/Fonts/ヒラギノ丸ゴ Pro W4.otf" /usr/local/share/ghostscript/fonts/HiraMaruPro-W4.otf
sudo ln -s "/System/Library/Fonts/儷黑 Pro.ttf" /usr/local/share/ghostscript/fonts/TrueType/LiHeiPro.ttf
sudo ln -s "/System/Library/Fonts/华文黑体.ttf" /usr/local/share/ghostscript/fonts/TrueType/STHeiti.ttf
sudo ln -s "/System/Library/Fonts/华文细黑.ttf" /usr/local/share/ghostscript/fonts/TrueType/STXihei.ttf
sudo ln -s "/Library/Fonts/儷宋 Pro.ttf" /usr/local/share/ghostscript/fonts/TrueType/LiSongPro.ttf
sudo ln -s "/Library/Fonts/华文宋体.ttf" /usr/local/share/ghostscript/fonts/TrueType/STSong.ttf
sudo ln -s "/Library/Fonts/华文楷体.ttf" /usr/local/share/ghostscript/fonts/TrueType/STKaiti.ttf
sudo ln -s "/Library/Fonts/华文仿宋.ttf" /usr/local/share/ghostscript/fonts/TrueType/STFangsong.ttf
```

ただし，ターミナルでは日本語文字や中国語文字を直接扱えないようなので，以下の (1)&ndash;(4) のいずれかの方法を使う。

(1) アプリケーションのユーティリティに含まれているターミナルを起動し，ターミナル → ウィンドウ設定で，
「非ASCII文字をエスケープする」にチェックを入れておきます。これにより，ファイルをターミナルに
ドラッグアンドドロップすると，そのファイルのフルパスがターミナルに入力されます。

```
 sudo ln -s ここでヒラギノ明朝 Pro W3.otfをドラッグアンドドロップ /usr/local/share/ghostscript/fonts/HiraMinPro-W3.otf
```

これを上記の全てのフォントについて行う。

(2) 上記の内容のシェルスクリプトを作って実行する。

(3)

```
sudo ln -s "$(grep -l HiraMinPro-W3 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/fonts/HiraMinPro-W3.otf
sudo ln -s "$(grep -l HiraMinPro-W6 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/fonts/HiraMinPro-W6.otf
sudo ln -s "$(grep -l HiraKakuPro-W3 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/fonts/HiraKakuPro-W3.otf
sudo ln -s "$(grep -l HiraKakuPro-W6 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/fonts/HiraKakuPro-W6.otf
sudo ln -s "$(grep -l HiraMaruPro-W4 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/fonts/HiraMaruPro-W4.otf
sudo ln -s "$(grep -l HiraKakuStd-W8 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/fonts/HiraKakuStd-W8.otf
```

のように grep を使う。

(4)

```
sudo ln -s /System/Library/Fonts/?????????????????????\ Pro\ W3.otf /usr/local/share/ghostscript/fonts/HiraMinPro-W3.otf
sudo ln -s /System/Library/Fonts/?????????????????????\ Pro\ W6.otf /usr/local/share/ghostscript/fonts/HiraMinPro-W6.otf
sudo ln -s /System/Library/Fonts/????????????????????????\ Pro\ W3.otf /usr/local/share/ghostscript/fonts/HiraKakuPro-W3.otf
sudo ln -s /System/Library/Fonts/????????????????????????\ Pro\ W6.otf /usr/local/share/ghostscript/fonts/HiraKakuPro-W6.otf
sudo ln -s /System/Library/Fonts/????????????????????????\ Std\ W8.otf /usr/local/share/ghostscript/fonts/HiraKakuStd-W8.otf
sudo ln -s /System/Library/Fonts/????????????????????????\ Pro\ W4.otf /usr/local/share/ghostscript/fonts/HiraMaruPro-W4.otf
```

のようにワイルドカード “?” を使う。

$TEXMFLOCAL/fonts/opentype/ や $TEXMFLOCAL/fonts/truetype/ からもシンボリックリンクを作っておくとよい。

### /usr/local/share/ghostscript/8.54/lib/cidfmap の記述例 {#h0f0fbe0}

```
/Ryumin-Light         /HiraMinPro-W3    ;
/GothicBBB-Medium     /HiraKakuPro-W3   ;
/FutoMinA101-Bold     /HiraMinPro-W6    ;
/FutoGoB101-Bold      /HiraKakuPro-W6   ;
/Jun101-Light         /HiraMaruPro-W4   ;
/MidashiGo-MB31       /HiraKakuStd-W8   ;
/HeiseiMin-W3         /Ryumin-Light     ;
/HeiseiKakuGo-W5      /GothicBBB-Medium ;
/STSong-Light         /LiSongPro-Light  ;
/STHeiti-Regular      /LiHeiPro-Medium  ;
/MSung-Light          << /FileType /TrueType   /CSI [(CNS1) 5]   /Path (TrueType/LiSongPro.ttf)  >> ;
/MHei-Medium          << /FileType /TrueType   /CSI [(CNS1) 5]   /Path (TrueType/LiHeiPro.ttf)   >> ;

%%% TrueType fonts in Mac OS X 10.4 %%%
/LiSongPro-Light      << /FileType /TrueType   /CSI [(GB1) 5]    /Path (TrueType/LiSongPro.ttf)  >> ;
/LiHeiPro-Medium      << /FileType /TrueType   /CSI [(GB1) 5]    /Path (TrueType/LiHeiPro.ttf)   >> ;
/STSong-Regular       << /FileType /TrueType   /CSI [(GB1) 5]    /Path (TrueType/STSong.ttf)     >> ;
%/STHeiti-Regular      << /FileType /TrueType   /CSI [(GB1) 5]    /Path (TrueType/STHeiti.ttf)    >> ;
/STHeiti-Light        << /FileType /TrueType   /CSI [(GB1) 5]    /Path (TrueType/STXihei.ttf)    >> ;
/STKaiti-Regular      << /FileType /TrueType   /CSI [(GB1) 5]    /Path (TrueType/STKaiti.ttf)    >> ;
/STFangsong-Regular   << /FileType /TrueType   /CSI [(GB1) 5]    /Path (TrueType/STFangsong.ttf) >> ;

%%% OpenType fonts in Adobe Reader 7.0 %%%
%/Ryumin-Light         /KozMinProVI-Regular    ;
%/GothicBBB-Medium     /KozGoPro-Medium        ;
%/STSong-Light         /AdobeSongStd-Light     ;
%/MSung-Light          /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium   /AdobeMyungjoStd-Medium ;

%%% CID fonts in Acrobat Reader 4.0                           %%%
%%% cf. ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/4.x/ %%%
%/Ryumin-Light         /HeiseiMin-W3-Acro       ;
%/GothicBBB-Medium     /HeiseiKakuGo-W5-Acro    ;
%/STSong-Light         /STSong-Light-Acro       ;
%/MSung-Light          /MSung-Light-Acro        ;
%/MHei-Medium          /MHei-Medium-Acro        ;
%/HYSMyeongJo-Medium   /HYSMyeongJo-Medium-Acro ;
%/HYGoThic-Medium      /HYGoThic-Medium-Acro    ;
```

中国語簡体字 TrueType フォントの PostScript 名が合っているか不明。

## GNU GPL Ghostscript 8.54 for Windows {#w33eec77}

以下，取り敢えずメモ書き。編集意欲のある方は是非代わりに編集して下さい。

### 入手先 {#gc8a2a19}

[Ring Server](http://www.ring.gr.jp/) からインストールプログラムを入手する。

- [GNU GPL Ghostscript 8.54](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/gs854w32full-gpl.zip)
- [AFPL Ghostscript 8.54](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/gs854w32full.zip)
- GSview 4.8: [http://www.ring.gr.jp/pub/text/CTAN/support/ghostscript/ghostgum/](http://www.ring.gr.jp/pub/text/CTAN/support/ghostscript/ghostgum/) の中の gsv48w32.exe

### インストール {#a4d9c6ea}

旧ヴァージョンの Ghostscript がすでにインストールしてあるのならば，先にアンインストールしておく。

- setupgs.exe を実行する。
    - デフォルトのインストール先は “C:\gs”
    - UNIX 系 OS での Ghostscript のディレクトリ構造 (/usr/share/ghostscript) に似せたいのならば，
        インストール先を決める項目である Install to directory の欄の内容を “C:\gs” から “C:\usr\local\share\gs” に変える。

- \[Use Windows TrueType fonts for Chinese, Japanese and Korean\] にチェックを入れる。

### 環境変数 PATH の設定 {#g074d14f}

Ghostscript 8.54 を C:\gs にインストールしたのなら

```
C:\gs\gs8.54\bin;C:\gs\gs8.54\lib
```

を，C:\usr\local\share\gs にインストールしたのなら

```
C:\usr\local\share\gs\gs8.54\bin;C:\usr\local\share\gs\gs8.54\lib
```

を環境変数 PATH に追加する。

### CMap {#k55ee82d}

gs\gs8.54\Resource\CMap\ に入っている。主なものを挙げる。

- H
- V
- UniJIS-UTF16-H
- UniJIS-UTF16-V
- Adobe-Japan1-6
    <!-- -[[Adobe-Japan1-5-V:http://macptex.appi.keio.ac.jp/~uchiyama/Adobe-Japan1-5-V.gz]] （← これだけは gs\gs8.54\Resource\CMap\ に入っていない。） -->
    <!-- Adobe-Japan1-5-Vは不要です．Identity-Vを使って下さい．(uchiyama) -->

- Identity-H
- Identity-V
- UniGB-UTF16-H
- UniGB-UTF16-V
- Adobe-GB1-4
- Adobe-GB1-5
- UniCNS-UTF16-H
- UniCNS-UTF16-V
- Adobe-CNS1-4
- Adobe-CNS1-5
- UniKS-UTF16-H
- UniKS-UTF16-V
- Adobe-Korea1-2

上記の CMap は $TEXMFLOCAL/fonts/cmap/ にもコピーしておくとよい。

### CID fonts {#i4c98952}

CID フォントは gs\gs8.54\Resource\CIDFont\ にコピーしておく。

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

### gs\gs8.54\lib\cidfmap の記述例 {#m115a63f}

```
/Ryumin-Light         /MS-Mincho          ;
/GothicBBB-Medium     /MS-Gothic          ;
/FutoMinA101-Bold     /HGMinchoB          ;
/FutoGoB101-Bold      /HGGothicE          ;
/Jun101-Light         /HGMaruGothicMPRO   ;
/MidashiMin-MA31      /HGMinchoE          ;
/MidashiGo-MB31       /HGSoeiKakugothicUB ;
/HeiseiMin-W3         /Ryumin-Light       ;
/HeiseiKakuGo-W5      /GothicBBB-Medium   ;
/STSong-Light         /NSimSun            ;
/STHeiti-Regular      /SimHei             ;
/MSung-Light          /MingLiU            ;
/MHei-Medium          << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (C:/WINDOWS/Fonts/simhei.ttf)                  >> ;
/HYSMyeongJo-Medium   /BatangChe          ;
/HYGoThic-Medium      /DotumChe           ;

%%% TrueType fonts in Windows XP %%%
%%% cf. C:\WINDOWS\Fonts\        %%%
/MS-Mincho            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSMINCHO.TTC)   /SubfontID 0 >> ;
/MS-Gothic            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSGOTHIC.TTC)   /SubfontID 0 >> ;
/NSimSun              << /FileType /TrueType   /CSI [(GB1) 5]      /Path (C:/WINDOWS/Fonts/simsun.ttc)     /SubfontID 1 >> ;
/SimHei               << /FileType /TrueType   /CSI [(GB1) 5]      /Path (C:/WINDOWS/Fonts/simhei.ttf)                  >> ;
/MingLiU              << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (C:/WINDOWS/Fonts/mingliu.ttc)    /SubfontID 0 >> ;
/BatangChe            << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/batang.ttc)     /SubfontID 1 >> ;
/DotumChe             << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/gulim.ttc)      /SubfontID 3 >> ;
/GulimChe             << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/gulim.ttc)      /SubfontID 1 >> ;
/GungsuhChe           << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/batang.ttc)     /SubfontID 3 >> ;

%%% TrueType fonts in Microsoft Office Professional Edition 2003 %%%
/HGMinchoB            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRMB.TTC)      /SubfontID 0 >> ;
/HGMinchoE            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRME.TTC)      /SubfontID 0 >> ;
/HGGothicE            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRGE.TTC)      /SubfontID 0 >> ;
/HGSoeiKakugothicUB   << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRSGU.TTC)     /SubfontID 0 >> ;
/HGMaruGothicMPRO     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRSMP.TTF)                  >> ;

%%% OpenType fonts in Adobe Reader 7.0                       %%%
%%% cf. C:\Program Files\Adobe\Acrobat 7.0\Resource\CIDFont\ %%%
%/Ryumin-Light         /KozMinProVI-Regular    ;
%/GothicBBB-Medium     /KozGoPro-Medium        ;
%/STSong-Light         /AdobeSongStd-Light     ;
%/MSung-Light          /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium   /AdobeMyungjoStd-Medium ;

%%% CID fonts in Acrobat Reader 4.0                           %%%
%%% cf. ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/4.x/ %%%
%/Ryumin-Light         /HeiseiMin-W3-Acro       ;
%/GothicBBB-Medium     /HeiseiKakuGo-W5-Acro    ;
%/STSong-Light         /STSong-Light-Acro       ;
%/MSung-Light          /MSung-Light-Acro        ;
%/MHei-Medium          /MHei-Medium-Acro        ;
%/HYSMyeongJo-Medium   /HYSMyeongJo-Medium-Acro ;
%/HYGoThic-Medium      /HYGoThic-Medium-Acro    ;

%%% Hiragino TrueType fonts %%%
%/HiraMinPro-W2        << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/usr/local/share/gs/fonts/TrueType/DShirmn2.ttc)   /SubfontID 1 >> ;
%/HiraMinPro-W3        << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/usr/local/share/gs/fonts/TrueType/DShirmn3.ttc)   /SubfontID 1 >> ;
%/HiraMinPro-W6        << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/usr/local/share/gs/fonts/TrueType/DShirmn6.ttc)   /SubfontID 1 >> ;
%/HiraKakuPro-W3       << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/usr/local/share/gs/fonts/TrueType/DShirkg3.ttc)   /SubfontID 1 >> ;
%/HiraKakuPro-W6       << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/usr/local/share/gs/fonts/TrueType/DShirkg6.ttc)   /SubfontID 1 >> ;
%/HiraKakuStd-W8       << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/usr/local/share/gs/fonts/TrueType/DShirkg8.ttc)   /SubfontID 1 >> ;
```

***

## Comments {#a6eac88c}
