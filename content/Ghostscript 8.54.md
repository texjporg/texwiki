---
title: "Ghostscript 8.54"
url: "/Ghostscript 8.54/"
date: 2006-09-02T03:42:11Z
pukiwiki: "Ghostscript 8.54"
---

# Ghostscript 8.54

<!-- - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  -->

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

ただし，ターミナルでは日本語文字や中国語文字を直接扱えないようなので，以下の (1)&ndash;(4) のいずれかの方法を使う。

(1) アプリケーションのユーティリティに含まれているターミナルを起動し，ターミナル → ウィンドウ設定で，
「非ASCII文字をエスケープする」にチェックを入れておきます。これにより，ファイルをターミナルに
ドラッグアンドドロップすると，そのファイルのフルパスがターミナルに入力されます。

```
$ sudo ln -s ここでヒラギノ明朝 Pro W3.otfをドラッグアンドドロップ /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W3
```

これを上記の全てのフォントについて行う。

(2) 上記の内容のシェルスクリプトを作って実行する。

(3)

```
$ sudo ln -s "$(grep -l HiraMinPro-W3 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W3
$ sudo ln -s "$(grep -l HiraMinPro-W6 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W6
$ sudo ln -s "$(grep -l HiraKakuPro-W3 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuPro-W3
$ sudo ln -s "$(grep -l HiraKakuPro-W6 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuPro-W6
$ sudo ln -s "$(grep -l HiraKakuStd-W8 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuStd-W8
$ sudo ln -s "$(grep -l HiraMaruPro-W4 /System/Library/Fonts/*.otf)" /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMaruPro-W4
```

のように grep を使う。

(4)

```
$ sudo ln -s /System/Library/Fonts/?????????????????????\ Pro\ W3.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W3
$ sudo ln -s /System/Library/Fonts/?????????????????????\ Pro\ W6.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMinPro-W6
$ sudo ln -s /System/Library/Fonts/????????????????????????\ Pro\ W3.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuPro-W3
$ sudo ln -s /System/Library/Fonts/????????????????????????\ Pro\ W6.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuPro-W6
$ sudo ln -s /System/Library/Fonts/????????????????????????\ Std\ W8.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraKakuStd-W8
$ sudo ln -s /System/Library/Fonts/????????????????????????\ Pro\ W4.otf /usr/local/share/ghostscript/8.54/Resource/CIDFont/HiraMaruPro-W4
```

のようにワイルドカード “?” を使う。

$TEXMFLOCAL/fonts/opentype// や $TEXMFLOCAL/fonts/truetype// からも
シンボリックリンクを作っておくとよい
（こちらは拡張子 “.otf”, “.ttf”, “.ttc” を付けたままにしておく）。

### /usr/local/share/ghostscript/8.54/lib/cidfmap の記述例 <a id="cidfmap-MacOSX"></a> {#h0f0fbe0}

```
%%% aliases
/Ryumin-Light         /HiraMinPro-W3      ;
/Ryumin-Medium        /HiraMinPro-W3      ;
/FutoMinA101-Bold     /HiraMinPro-W6      ;
/MidashiMin-MA31      /HiraMinPro-W6      ;
/GothicBBB-Medium     /HiraKakuPro-W3     ;
/FutoGoB101-Bold      /HiraKakuPro-W6     ;
/MidashiGo-MB31       /HiraKakuStd-W8     ;
/Jun101-Light         /HiraMaruPro-W4     ;
/HeiseiMin-W3         /Ryumin-Light       ;
/HeiseiKakuGo-W5      /GothicBBB-Medium   ;
/STSong-Light         /STSong             ;
/STSong-Regular       /STSong             ;
/STHeiti-Regular      /STHeiti            ;
/STHeiti-Light        /STXihei            ;
/STKaiti-Regular      /STKaiti            ;
/STFangsong-Regular   /STFangsong         ;
/STFangsong-Light     /STFangsong         ;
/MSung-Light          /LiSongPro          ;
/MSung-Medium         /LiSongPro          ;
/MHei-Medium          /LiHeiPro           ;
/MKai-Medium          /STKaiti-Adobe-CNS1 ;
/HYSMyeongJo-Medium   /Batang             ;
/HYGoThic-Medium      /Baekmuk-Dotum      ;
/HYKHeadLine-Bold     /Baekmuk-Headline   ;
/HYKHeadLine-Medium   /Baekmuk-Headline   ;
/HYRGoThic-Medium     /Gulim              ;
/HYGungSo-Bold        /UnGungseo          ;

%%% TrueType fonts in Mac OS X
%%% See /System/Library/Fonts/
%%%     /Library/Fonts/
/STSong               << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/STSong.ttf)     >> ;
/STHeiti              << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/STHeiti.ttf)    >> ;
/STXihei              << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/STXihei.ttf)    >> ;
/STKaiti              << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/STKaiti.ttf)    >> ;
/STKaiti-Adobe-CNS1   << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/STKaiti.ttf)    >> ;
/STFangsong           << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/STFangsong.ttf) >> ;
/LiSongPro            << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/LiSongPro.ttf)  >> ;
/LiHeiPro             << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/LiHeiPro.ttf)   >> ;

%%% TrueType fonts in Microsoft Office 2004 for Mac
%%% See ~/Library/Fonts/
/SimSun               << /FileType /TrueType   /CSI [(GB1) 5]      /Path (~/Library/Fonts/SimSun.ttf)   >> ;
/PMingLiU             << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (~/Library/Fonts/PMingLiU.ttf) >> ;
/Batang               << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (~/Library/Fonts/Batang.ttf)   >> ;
/Gulim                << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (~/Library/Fonts/Gulim.ttf)    >> ;

%%% OpenType fonts in Adobe Reader 7.0
%%% See http://www.adobe.com/jp/products/acrobat/acrrasianfontpack.html
%/Ryumin-Light         /KozMinProVI-Regular    ;
%/GothicBBB-Medium     /KozGoPro-Medium        ;
%/STSong-Light         /AdobeSongStd-Light     ;
%/MSung-Light          /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium   /AdobeMyungjoStd-Medium ;

%%% CID-keyed fonts in Acrobat Reader 4.0
%%% See ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/4.x/
%/Ryumin-Light         /HeiseiMin-W3-Acro       ;
%/GothicBBB-Medium     /HeiseiKakuGo-W5-Acro    ;
%/STSong-Light         /STSong-Light-Acro       ;
%/MSung-Light          /MSung-Light-Acro        ;
%/MHei-Medium          /MHei-Medium-Acro        ;
%/HYSMyeongJo-Medium   /HYSMyeongJo-Medium-Acro ;
%/HYGoThic-Medium      /HYGoThic-Medium-Acro    ;

%%% Arphic TrueType fonts
%%% See http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/BousungEG-Light-GB   << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/gbsn00lp.ttf) >> ;
/GBZenKai-Medium      << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/gkai00mp.ttf) >> ;
/ShanHeiSun-Light     << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/bsmi00lp.ttf) >> ;
/ZenKai-Medium        << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/bkai00mp.ttf) >> ;

%%% Baekmuk TrueType fonts
%%% See http://kldp.net/projects/baekmuk/
/Baekmuk-Batang       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/batang.ttf) >> ;
/Baekmuk-Dotum        << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/dotum.ttf)  >> ;
/Baekmuk-Headline     << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/hline.ttf)  >> ;
/Baekmuk-Gulim        << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/gulim.ttf)  >> ;

%%% Un-fonts
%%% See http://kldp.net/projects/unfonts/
/UnBatang             << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnBatang.ttf)      >> ;
/UnBatang-Bold        << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnBatangBold.ttf)  >> ;
/UnDotum              << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnDotum.ttf)       >> ;
/UnDotum-Bold         << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnDotumBold.ttf)   >> ;
/UnGraphic            << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGraphic.ttf)     >> ;
/UnGraphic-Bold       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGraphicBold.ttf) >> ;
/UnGungseo            << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGungseo.ttf)     >> ;
/UnPilgi              << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnPilgi.ttf)       >> ;
/UnPilgi-Bold         << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnPilgiBold.ttf)   >> ;
```

## GNU GPL Ghostscript 8.54 for Windows {#w33eec77}

以下，取り敢えずメモ書き。編集意欲のある方は是非代わりに編集して下さい。

### 入手先 {#gc8a2a19}

[Ring Server](http://www.ring.gr.jp/) からインストールプログラムを入手する。

- [GNU GPL Ghostscript 8.54](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/gs854w32full-gpl.zip)
- [AFPL Ghostscript 8.54](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/gs854w32full.zip)
- GSview 4.8: [http://www.ring.gr.jp/pub/text/CTAN/support/ghostscript/ghostgum/](http://www.ring.gr.jp/pub/text/CTAN/support/ghostscript/ghostgum/) の中の [gsv48w32.exe](http://www.ring.gr.jp/pub/text/CTAN/support/ghostscript/ghostgum/gsv48w32.exe)

### インストール {#a4d9c6ea}

旧ヴァージョンの Ghostscript がすでにインストールしてあるのならば，
先にアンインストールしておく。

- 絶対パスに ASCII 以外の文字（日本語など）を使っていないディレクトリに
    gs854w32full-gpl.zip を展開する。

- setupgs.exe を実行する。
    - デフォルトのインストール先は “C:\gs”
    - UNIX 系 OS での Ghostscript のディレクトリ構造 (/usr/share/ghostscript/) に
        似せたいのならば，インストール先を決める項目である ‘Install to directory’ の
        欄の内容を “C:\gs” から “C:\usr\local\share\gs” に変える。

- \[Use Windows TrueType fonts for Chinese, Japanese and Korean\] にチェックを入れる。

ユーザーアカウントの名前に例えば「佐藤太郎」のように
ASCII 以外の文字（日本語など）を使っていると，Ghostscript の
インストールに失敗することがある。これは環境変数
TEMP に “C:\Documents and Settings\佐藤太郎\Local Settings\Temp” のように
ASCII 以外の文字が使われてしまうことが原因である。
環境変数 TEMP はデフォルトでは
"C:\Documents and Settings\\%USERNAME%\Local Settings\Temp" と
設定されているので，この環境変数 TEMP を（例えば
UNIX 系 OS の一時ファイルディレクトリ /tmp/ に習って “C:\tmp” のように）
ASCII 文字だけで設定する。

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

上記の CMap は $TEXMFLOCAL/fonts/cmap// にもコピーしておくとよい。

### CID-keyed fonts {#i4c98952}

CID-keyed フォントファイルはファイル名を拡張子無しの PostScript 名に変えて
（例えば “HEMIW3.CID” → “HeiseiMin-W3”）
gs\gs8.54\Resource\CIDFont\ にコピーしておく。<br>
OpenType フォーマットの CID-keyed フォントファイル
（拡張子が “.otf” の OpenType フォントファイル）はファイル名を拡張子無しの
PostScript 名に変えて（例えば “ヒラギノ明朝 Pro W3.otf” → “HiraMinPro-W3”）
gs\gs8.54\Resource\CIDFont\ にコピーしておく。

### TrueType データフォント {#h311bbbd}

拡張子が “.ttf”, “.ttc” である，TrueType フォントファイルや OpenType
フォーマットの TrueType データ（2次 B-スプライン曲線データ）フォントファイルは
gs\fonts\\\ 以下にコピーまたは移動しておくと，gs\gs8.54\lib\cidfmap 記述時に
gs\fonts\ までのパスを省略できる。

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

という内容のテキストファイル “Ryumin-Light-Identity-H” を作成する。
同様にして次のファイルを作成する（数が多いので注意）。

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

### gs\gs8.54\lib\cidfmap の記述例 <a id="cidfmap-Windows"></a> {#m115a63f}

```
%%% aliases
/Ryumin-Light         /MS-Mincho          ;
/Ryumin-Medium        /MS-Mincho          ;
/FutoMinA101-Bold     /HGMinchoB          ;
/MidashiMin-MA31      /HGMinchoE          ;
/GothicBBB-Medium     /MS-Gothic          ;
/FutoGoB101-Bold      /HGGothicE          ;
/MidashiGo-MB31       /HGSoeiKakugothicUB ;
/Jun101-Light         /HGMaruGothicMPRO   ;
/HeiseiMin-W3         /Ryumin-Light       ;
/HeiseiKakuGo-W5      /GothicBBB-Medium   ;
/STSong-Light         /NSimSun            ;
/STSong-Regular       /NSimSun            ;
/STHeiti-Regular      /SimHei             ;
/STHeiti-Light        /SimHei             ;
/STKaiti-Regular      /GBZenKai-Medium    ;
/STFangsong-Regular   /NSimSun            ;
/STFangsong-Light     /NSimSun            ;
/MSung-Light          /MingLiU            ;
/MSung-Medium         /MingLiU            ;
/MHei-Medium          /SimHei-Adobe-CNS1  ;
/MKai-Medium          /ZenKai-Medium      ;
/HYSMyeongJo-Medium   /BatangChe          ;
/HYGoThic-Medium      /DotumChe           ;
/HYKHeadLine-Bold     /Baekmuk-Headline   ;
/HYKHeadLine-Medium   /Baekmuk-Headline   ;
/HYRGoThic-Medium     /GulimChe           ;
/HYGungSo-Bold        /GungsuhChe         ;

%%% monospaced TrueType fonts in Windows XP
%%% See C:\WINDOWS\Fonts\
/MS-Mincho            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSMINCHO.TTC)   /SubfontID 0 >> ;
/MS-Gothic            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSGOTHIC.TTC)   /SubfontID 0 >> ;
/NSimSun              << /FileType /TrueType   /CSI [(GB1) 5]      /Path (C:/WINDOWS/Fonts/simsun.ttc)     /SubfontID 1 >> ;
/MingLiU              << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (C:/WINDOWS/Fonts/mingliu.ttc)    /SubfontID 0 >> ;
/BatangChe            << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/batang.ttc)     /SubfontID 1 >> ;
/DotumChe             << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/gulim.ttc)      /SubfontID 3 >> ;
/GulimChe             << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/gulim.ttc)      /SubfontID 1 >> ;
/GungsuhChe           << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/batang.ttc)     /SubfontID 3 >> ;

%%% proportional TrueType fonts in Windows XP
%%% See C:\WINDOWS\Fonts\
/MS-PMincho           << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSMINCHO.TTC)   /SubfontID 1 >> ;
/MS-PGothic           << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSGOTHIC.TTC)   /SubfontID 1 >> ;
/MS-UI-Gothic         << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/MSGOTHIC.TTC)   /SubfontID 2 >> ;
/SimSun               << /FileType /TrueType   /CSI [(GB1) 5]      /Path (C:/WINDOWS/Fonts/simsun.ttc)     /SubfontID 0 >> ;
/SimHei               << /FileType /TrueType   /CSI [(GB1) 5]      /Path (C:/WINDOWS/Fonts/simhei.ttf)                  >> ;
/SimHei-Adobe-CNS1    << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (C:/WINDOWS/Fonts/simhei.ttf)                  >> ;
/PMingLiU             << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (C:/WINDOWS/Fonts/mingliu.ttc)    /SubfontID 1 >> ;
/Batang               << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/batang.ttc)     /SubfontID 0 >> ;
/Dotum                << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/gulim.ttc)      /SubfontID 2 >> ;
/Gulim                << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/gulim.ttc)      /SubfontID 0 >> ;
/Gungsuh              << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (C:/WINDOWS/Fonts/batang.ttc)     /SubfontID 2 >> ;

%%% TrueType fonts in Microsoft Office Professional Edition 2003
/HGMinchoB            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRMB.TTC)      /SubfontID 0 >> ;
/HGMinchoE            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRME.TTC)      /SubfontID 0 >> ;
/HGGothicE            << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRGE.TTC)      /SubfontID 0 >> ;
/HGSoeiKakugothicUB   << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRSGU.TTC)     /SubfontID 0 >> ;
/HGMaruGothicMPRO     << /FileType /TrueType   /CSI [(Japan1) 6]   /Path (C:/WINDOWS/Fonts/HGRSMP.TTF)                  >> ;

%%% OpenType fonts in Adobe Reader 7.0
%%% See http://www.adobe.com/jp/products/acrobat/acrrasianfontpack.html
%%%     C:\Program Files\Adobe\Acrobat 7.0\Resource\CIDFont\
%/Ryumin-Light         /KozMinProVI-Regular    ;
%/GothicBBB-Medium     /KozGoPro-Medium        ;
%/STSong-Light         /AdobeSongStd-Light     ;
%/MSung-Light          /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium   /AdobeMyungjoStd-Medium ;

%%% CID-keyed fonts in Acrobat Reader 4.0
%%% See ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/4.x/
%/Ryumin-Light         /HeiseiMin-W3-Acro       ;
%/GothicBBB-Medium     /HeiseiKakuGo-W5-Acro    ;
%/STSong-Light         /STSong-Light-Acro       ;
%/MSung-Light          /MSung-Light-Acro        ;
%/MHei-Medium          /MHei-Medium-Acro        ;
%/HYSMyeongJo-Medium   /HYSMyeongJo-Medium-Acro ;
%/HYGoThic-Medium      /HYGoThic-Medium-Acro    ;

%%% Arphic TrueType fonts
%%% See http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/BousungEG-Light-GB   << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/gbsn00lp.ttf) >> ;
/GBZenKai-Medium      << /FileType /TrueType   /CSI [(GB1) 5]      /Path (./TrueType/gkai00mp.ttf) >> ;
/ShanHeiSun-Light     << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/bsmi00lp.ttf) >> ;
/ZenKai-Medium        << /FileType /TrueType   /CSI [(CNS1) 5]     /Path (./TrueType/bkai00mp.ttf) >> ;

%%% Baekmuk TrueType fonts
%%% See http://kldp.net/projects/baekmuk/
/Baekmuk-Batang       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/batang.ttf) >> ;
/Baekmuk-Dotum        << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/dotum.ttf)  >> ;
/Baekmuk-Headline     << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/hline.ttf)  >> ;
/Baekmuk-Gulim        << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/baekmuk-ttf-2.2/ttf/gulim.ttf)  >> ;

%%% Un-fonts
%%% See http://kldp.net/projects/unfonts/
/UnBatang             << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnBatang.ttf)      >> ;
/UnBatang-Bold        << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnBatangBold.ttf)  >> ;
/UnDotum              << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnDotum.ttf)       >> ;
/UnDotum-Bold         << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnDotumBold.ttf)   >> ;
/UnGraphic            << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGraphic.ttf)     >> ;
/UnGraphic-Bold       << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGraphicBold.ttf) >> ;
/UnGungseo            << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnGungseo.ttf)     >> ;
/UnPilgi              << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnPilgi.ttf)       >> ;
/UnPilgi-Bold         << /FileType /TrueType   /CSI [(Korea1) 2]   /Path (./TrueType/un-fonts/UnPilgiBold.ttf)   >> ;

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

***

## Comments {#a6eac88c}

<!-- - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  -->
