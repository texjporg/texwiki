---
title: "Ghostscript-8系"
url: "/Ghostscript-8系/"
date: 2010-10-14T10:08:44Z
pukiwiki: "Ghostscript-8系"
---

# Ghostscript-8系

<!-- 特に目立った変更も無いのに, あるいは新版で検証したわけでもないのに, -->
<!-- 旧版のページをコピーしたり, タイトルに9.xxとか付けたり, -->
<!-- 10系がでたらまたコピーだけしてタイトルやバージョン番号だけを変更するというのか？ -->
<!-- そんなのは馬鹿げてると思うのだけど. -->

> [Ghostscript](/Ghostscript/) > Ghostscript 8 or later

## Ghostscript-8系 {#f2728a95}

Ghostscript-8系の共通項目です。当ページの対象としては, 大幅な仕様変更がない限りバージョン 9.xx(or later) も含みますが, 最新版での動作等を保証するものではありません. <br>
Ghostscript の仕様が大幅に変更され、このページの情報が適用できない可能性があることを認識しておいてください。<br>
メジャーバージョンごとに新たに検証が成されるのはかまいませんが、fork する必要がない場合は [Ghostscript - TeX Wiki](/Ghostscript/) またはこちらに記述していただけるとありがたいです。<br>

(バージョンが 9.xx や 9.?? などとなっているところは, 自分の目的とするバージョンに適宜読み替えてください.)

### お知らせ {#de455d8c}

<strong>Ghostscript 8.71 より前の Ver. には[脆弱性](http://japan.cnet.com/news/business/story/0,3800104746,20418937,00.htm)がありますので、最新版に更新してください。</strong>

- [JVNVU#644319: Ghostscript の TrueType bytecode interpreter に脆弱性](http://jvn.jp/cert/JVNVU644319/)

Ghostscript 8.71 でエラーが発生するようです．9.01 では発生しないようです．

- [dvipsでeps出力した図とGhostscript 8.71のバグ？](http://d.hatena.ne.jp/SO2_2009/20110221/1298309714)

### table of contents {#p1c753f1}

#CONTENTS

## GPL Ghostscript 9.xx for Microsoft Windows {#w33eec77}

### 配布先 {#gc8a2a19}

- Ghostscript のインストーラ

- [GPL Ghostscript 9.xx](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/) gs ディレクトリ内の gs905w32full-gpl.exe (最新の32bit版の Ghostscript) をダウンロード
    - [GNU Ghostscript 7.07](</Ghostscript 7.07/>) と比べて，CJK （中国語・日本語・韓國語）の縦書きへの対応が不充分

- Ghostscript を GUI 操作できるソフトウェア GSview のインストーラ
    - [GSview 5.0 (32bit版)](https://mirror.ctan.org/support/ghostscript/ghostgum/gsv50w32.exe) (32bit版のGhostscriptが必要です。)
    - [GSview 5.0 (64bit版)](https://mirror.ctan.org/support/ghostscript/ghostgum/gsv50w64.exe) (64bit版のGhostscriptが必要です。)
        <!-- x86 （Microsoft，Linux などによる IA-32 の別名） -->
        <!-- x86_64 （UNIX，Linux などによる AMD64 と Intel 64 の総称） -->
        <!-- x64 （Microsoft などによる AMD64 と Intel 64 の総称） -->
        <!-- x86-64 （AMD64 の旧称。AMD64 と Intel 64 の総称としても使われる） -->
        <!-- EM64T （Intel 64 の旧称） -->
        <!-- IA-32e （EM64T の旧称） -->

### インストール {#a4d9c6ea}

旧版の Ghostscript がすでにインストールしてあるのならば，先にアンインストールしておきます。

- gs905w32full-gpl.exe を実行します。
    - デフォルトのインストール先は，32bit Windows の場合は “C:\Program Files\gs\gs9.05”，64bit Windows の場合は “C:\Program Files (x86)\gs\gs9.05”
    - gs9.04 以前と同様の場所にインストールしたい場合は “C:\gs\gs9.05”に変更します。
        <!-- Ghostscript のためだけに C:\usr\local を作るのはばかげてますし、Cygwin はともかくネイティブの Windows 環境で、UNIX のディレクトリ構造に似せても特に利点がないのでコメントアウトしておきます。 -->
        <!-- - -UNIX 互換 OS での Ghostscript のディレクトリ構造 -->
        <!-- (/usr/share/ghostscript/) に似せたいのならば， -->
        <!-- インストール先を決める項目である ‘Install to directory’ の欄の -->
        <!-- 内容を “C:\gs” から “C:\usr\local\share\gs” に変えます。 -->

- インストールウィザードを終了するウィンドウで \[Generate cidfmap for Windows CJK TrueType fonts\] にチェックが入っていなければチェックを入れて \[Finish\] をクリックします。

#### インストールに失敗する場合 {#f1997f9f}

ユーザーアカウントの名前に例えば「山田太郎」のように
ASCII 以外の文字（日本語など）を使っていると，Ghostscript の
インストールに失敗することがあります。<br>
これは環境変数
TEMP に “C:\Users\山田太郎\AppData\Local\Temp” のように
ASCII 以外の文字が使われてしまうことが原因です。<br>
環境変数 TEMP のデフォルトは
Windows 7, Vista の場合では %USERPROFILE%\AppData\Local\Temp
(&cong; C:\Users\\%USERNAME%\AppData\Local\Temp) と，
Windows XP の場合では "%USERPROFILE%\Local Settings\Temp"
(&cong; "C:\Documents and Settings\\%USERNAME%\Local Settings\Temp") と
設定されているので，この環境変数 TEMP を（例えば
UNIX 互換 OS の一時ファイル用ディレクトリ /tmp/ に習って “C:\tmp” のように）
ASCII 文字だけで設定します。

### 環境変数 PATH の設定 {#g074d14f}

Ghostscript 9.05 を C:\Program Files\gs\gs9.05 にインストールしたのなら

```
;C:\Program Files\gs\gs9.05\bin;C:\Program Files\gs\gs9.05\lib
```

Ghostscript 9.05 を C:\Program Files (x86)\gs\gs9.05 にインストールしたのなら

```
;C:\Program Files (x86)\gs\gs9.05\bin;C:\Program Files (x86)\gs\gs9.05\lib
```

Ghostscript 9.05 を C:\gs\gs9.05 にインストールしたのなら

```
;C:\gs\gs9.05\bin;C:\gs\gs9.05\lib
```

を環境変数 PATH に追加します。 <!-- C:\usr\local\share\gs\ にインストールしたのなら --> <!-- ;C:\usr\local\share\gs\gs9.??\bin;C:\usr\local\share\gs\gs9.??\lib --> <!-- を環境変数 PATH に追加します。 -->

### CMap {#k55ee82d}

gs\gs?.??\Resource\CMap\ に入っています。主なものを挙げてみます。

- H
- V
    <!-- -JISX0213-2004-H -->
    <!-- ［[[ttk (TANAKA, Takuji) さん:http://homepage3.nifty.com/ttk/comp/tex/]]の -->
    <!-- ウェブサイト -->
    <!-- 「[[TeX memo&mdash;jisx0212 &amp; jisx0213:http://homepage3.nifty.com/ttk/comp/tex/jisx0213.html]]」に -->
    <!-- ある&ref(http://homepage3.nifty.com/ttk/comp/tex/jishojo_004.tar.gz,JIS X 0212 （JIS補助漢字）対応 jishojo パッケージ);の -->
    <!-- 中から入手できる。］ -->
    <!-- -JISX0213-2004-V -->
    <!-- ［[[ttk (TANAKA, Takuji) さん:http://homepage3.nifty.com/ttk/comp/tex/]]の -->
    <!-- ウェブサイト -->
    <!-- 「[[TeX memo&mdash;jisx0212 &amp; jisx0213:http://homepage3.nifty.com/ttk/comp/tex/jisx0213.html]]」に -->
    <!-- ある&ref(http://homepage3.nifty.com/ttk/comp/tex/jishojo_004.tar.gz,JIS X 0212 （JIS補助漢字）対応 jishojo パッケージ);の -->
    <!-- 中から入手できる。］ -->

- UniJIS-UTF16-H
- UniJIS-UTF16-V
- UniJIS2004-UTF16-H
- UniJIS2004-UTF16-V
- UniGB-UTF16-H
- UniGB-UTF16-V
- UniCNS-UTF16-H
- UniCNS-UTF16-V
- UniKS-UTF16-H
- UniKS-UTF16-V
- Adobe-Japan1-6
    <!-- -&ref(http://macptex.appi.keio.ac.jp/~uchiyama/Adobe-Japan1-5-V.gz,Adobe-Japan1-5-V); （← これだけは gs\gs?.??\Resource\CMap\ に入っていない。） -->
    <!-- Adobe-Japan1-5-V は不要です。Identity-V を使ってください。(uchiyama) -->

- Adobe-Japan1-UCS2
- Adobe-GB1-5
- Adobe-GB1-UCS2
- Adobe-CNS1-6
- Adobe-CNS1-UCS2
- Adobe-Korea1-2
- Adobe-Korea1-UCS2
- Identity-H
- Identity-V

上記の CMap は $TEXMFMAIN/fonts/cmap// 以下にもあります。 <!-- $TEXMFLOCAL の一つの選択肢として \usr\local\share\texmf-local があります。 --> <!-- See http://tutimura.ath.cx/ptetex/?%C2%BF%BD%C5TEXMF%A5%C4%A5%EA%A1%BC --> <!-- また，“//” は「それ以下のディレクトリ」という意味です。 -->

### CID-keyed fonts {#i4c98952}

CID-keyed フォントファイルはファイル名を拡張子無しの PostScript 名に変えて
（例えば “HEMIW3.CID” → “HeiseiMin-W3”）
gs\gs?.??\Resource\CIDFont\ にコピーしておきます。

OpenType フォーマットの CID-keyed フォントファイル（拡張子が “.otf” の
OpenType フォントファイル）はファイル名を拡張子無しの PostScript 名に変えて
（例えば “ヒラギノ明朝 ProN W3.otf” → “HiraMinProN-W3”）
gs\gs?.??\Resource\CIDFont\ にコピーしておきます。

### TrueType outline fonts {#h311bbbd}

拡張子が “.ttf”, “.ttc” である，TrueType フォントファイルや OpenType
フォーマットの TrueType outline （2次 B-スプライン曲線アウトライン）フォント
ファイルは gs\fonts\\\ 以下にコピーまたは移動しておくと，gs\gs9.??\Resource\Init\cidfmap
記述時に gs\fonts\ までのパスを省略できます。

### gs\gs9.??\Resource\Init\cidfmap の記述方法 {#e2200e36}

```
gs905w32full-gpl.exe の場合は，場所が gs\gs9.05\lib\cidfmap 
に変更されていることに注意
```

```
/Ryumin-Light      /MS-Mincho        ;
/GothicBBB-Medium  /MS-Gothic        ;
/HeiseiMin-W3      /Ryumin-Light     ;
/HeiseiKakuGo-W5   /GothicBBB-Medium ;

/MS-Mincho
<<
/FileType /TrueType
/CSI [(Japan1) 6]
/Path (C:/Windows/Fonts/msmincho.ttc)
/SubfontID 0
>> ;

/MS-Gothic
<<
/FileType /TrueType
/CSI [(Japan1) 6]
/Path (C:/Windows/Fonts/msgothic.ttc)
/SubfontID 0
>> ;
```

### <a id="otf">OTF パッケージ用の設定</a> {#ycff2f04}

[OTF パッケージ](/OTF/)を使った pLaTeX2e ソースから（platex，dvips を通して）
変換した PostScript ファイルを（ps2pdf を使うなどして）
Ghostscript 9.?? で PDF に変換する場合には，gs\gs9.??\Resource\Font\ に

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

- Ryumin-Light-Identity-{H,V}
- GothicBBB-Medium-Identity-{H,V}
- FutoMinA101-Bold-Identity-{H,V}
- FutoGoB101-Bold-Identity-{H,V}
- Jun101-Light-Identity-{H,V}
- MidashiMin-MA31-{H,V}
- MidashiMin-MA31-{EUC,UniJIS-UTF16,Identity}-{H,V}
- MidashiGo-MB31-{H,V}
- MidashiGo-MB31-{EUC,UniJIS-UTF16,Identity}-{H,V}
- STSong-Light-{UniGB-UTF16,Identity}-{H,V}
- STHeiti-Regular-{UniGB-UTF16,Identity}-{H,V}
- MSung-Light-{UniCNS-UTF16,Identity}-{H,V}
- MHei-Medium-{UniCNS-UTF16,Identity}-{H,V}
- HYSMyeongJo-Medium-{UniKS-UTF16,Identity}-{H,V}
- HYGoThic-Medium-{UniKS-UTF16,Identity}-{H,V}
- RyuminPr6N-Light-Identity-{H,V}
- RyuminPr6N-Light-{EUC,UniJIS-UTF16,Identity}-{H,V}
- GothicBBBPr6N-Medium-Identity-{H,V}
- GothicBBBPr6N-Medium-{EUC,UniJIS-UTF16,Identity}-{H,V}
- FutoMinA101Pr6N-Bold-Identity-{H,V}
- FutoMinA101Pr6N-Bold-{EUC,UniJIS-UTF16,Identity}-{H,V}
- FutoGoB101Pr6N-Bold-Identity-{H,V}
- FutoGoB101Pr6N-Bold-{EUC,UniJIS-UTF16,Identity}-{H,V}
- Jun101Pr6N-Light-Identity-{H,V}
- Jun101Pr6N-Light-{EUC,UniJIS-UTF16,Identity}-{H,V}
- MidashiMinPr6N-MA31-{H,V}
- MidashiMinPr6N-MA31-{EUC,UniJIS-UTF16,Identity}-{H,V}
- MidashiGoPr6N-MB31-{H,V}
- MidashiGoPr6N-MB31-{EUC,UniJIS-UTF16,Identity}-{H,V}
- AdobeHeitiStd-Regular-{Identity,UniGB-UTF16}-{H,V}
- AdobeMingStd-Light-{Identity,UniCNS-UTF16}-{H,V}
- AdobeMyungjoStd-Medium-{Identity,UniKS-UTF16}-{H,V}
- AdobeSongStd-Light-{Identity,UniGB-UTF16}-{H,V}
- HiraMinProN-W3-{H,V}
- HiraMinProN-W3-{UniJIS-UTF16,Identity}-{H,V}
- HiraMinPro-W3-Identity-{H,V}
- HiraMinProN-W6-{H,V}
- HiraMinProN-W6-{UniJIS-UTF16,Identity}-{H,V}
- HiraMinPro-W6-Identity-{H,V}
- HiraKakuProN-W3-{H,V}
- HiraKakuProN-W3-{UniJIS-UTF16,Identity}-{H,V}
- HiraKakuPro-W3-Identity-{H,V}
- HiraKakuProN-W6-{H,V}
- HiraKakuProN-W6-{UniJIS-UTF16,Identity}-{H,V}
- HiraKakuPro-W6-Identity-{H,V}
- HiraMaruProN-W4-{H,V}
- HiraMaruProN-W4-{UniJIS-UTF16,Identity}-{H,V}
- HiraMaruPro-W4-Identity-{H,V}
- HiraMinStdN-W2-{H,V}
- HiraMinStdN-W2-{UniJIS-UTF16,Identity}-{H,V}

> 【注意】ここで，例えば “STSong-Light-{UniGB-UTF16,Identity}-{H,V}” と
> いうのは次の<strong>複数の</strong>ファイルのことを指します。
>
> - STSong-Light-UniGB-UTF16-H
> - STSong-Light-UniGB-UTF16-V
> - STSong-Light-Identity-H
> - STSong-Light-Identity-V

[TeXWiki:OTF #dvips 用の map ファイル](/OTF/#k1eb9f9c) も参照。

### gs\gs9.??\Resource\Init\cidfmap の記述例 {#m115a63f}

#### <a id="cidfmap-windows">For Microsoft Windows</a> {#xba7681e}

```
gs905w32full-gpl.exe の場合は，場所が gs\gs9.05\lib\cidfmap 
に変更されていることに注意
```

***

```
%!
%%% aliases
/Ryumin-Light                 /MS-Mincho                   ;
/Ryumin-Medium                /MS-Mincho                   ;
/FutoMinA101-Bold             /HGMinchoB                   ;
/MidashiMin-MA31              /HGMinchoE                   ;
%/GothicBBB-Medium             /HGGothicM                   ;
/GothicBBB-Medium             /MS-Gothic                   ;
/FutoGoB101-Bold              /HGGothicE                   ;
/MidashiGo-MB31               /HGSoeiKakugothicUB          ;
/Jun101-Light                 /HGMaruGothicMPRO            ;
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
/STSong-Light                 /NSimSun                     ;
/STSong-Regular               /NSimSun                     ;
/STHeiti-Regular              /SimHei                      ;
/STHeiti-Light                /SimHei                      ;
/STKaiti-Regular              /KaiTi                       ;
%/STKaiti-Regular              /GBZenKai-Medium             ;
/STFangsong-Regular           /FangSong                    ;
/STFangsong-Light             /FangSong                    ;
/AdobeSongStd-Light           /STSong-Light                ;
/AdobeSongStd-Light-Acro      /AdobeSongStd-Light          ;
/STSongStd-Light-Acro         /AdobeSongStd-Light-Acro     ;
/STSongStd-Light              /STSongStd-Light-Acro        ;
/STSong-Light-Acro            /STSongStd-Light-Acro        ;
/AdobeHeitiStd-Regular        /STHeiti-Regular             ;
/MSung-Light                  /MingLiU                     ;
/MSung-Medium                 /MingLiU                     ;
/MHei-Medium                  /SimHei-Adobe-CNS1           ;
/MKai-Medium                  /DFKaiShu-SB-Estd-BF         ;
%/MKai-Medium                  /ZenKai-Uni                  ;
/AdobeMingStd-Light           /MSung-Light                 ;
/AdobeMingStd-Light-Acro      /AdobeMingStd-Light          ;
/MSungStd-Light-Acro          /AdobeMingStd-Light-Acro     ;
/MSungStd-Light               /MSungStd-Light-Acro         ;
/MSung-Light-Acro             /MSungStd-Light-Acro         ;
/MHei-Medium-Acro             /MHei-Medium                 ;
/HYSMyeongJo-Medium           /BatangChe                   ;
/HYGoThic-Medium              /DotumChe                    ;
/HYKHeadLine-Bold             /Baekmuk-Headline            ;
/HYKHeadLine-Medium           /Baekmuk-Headline            ;
/HYRGoThic-Medium             /GulimChe                    ;
/HYGungSo-Bold                /GungsuhChe                  ;
/AdobeMyungjoStd-Medium       /HYSMyeongJo-Medium          ;
/AdobeMyungjoStd-Medium-Acro  /AdobeMyungjoStd-Medium      ;
/HYSMyeongJoStd-Medium-Acro   /AdobeMyungjoStd-Medium-Acro ;
/HYSMyeongJoStd-Medium        /HYSMyeongJoStd-Medium-Acro  ;
/HYSMyeongJo-Medium-Acro      /HYSMyeongJoStd-Medium-Acro  ;
/HYGoThic-Medium-Acro         /HYGoThic-Medium             ;

%%% monospaced TrueType outline fonts in Windows Vista/XP
%%% See C:\Windows\Fonts\
/MS-Mincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msmincho.ttc)  /SubfontID 0 >> ;
/MS-Gothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 0 >> ;
/NSimSun                      << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsun.ttc)    /SubfontID 1 >> ;
/SimHei                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simhei.ttf)                 >> ;
/SimHei-Adobe-CNS1            << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/simhei.ttf)                 >> ;
/MingLiU                      << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 0 >> ;
/BatangChe                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 1 >> ;
/DotumChe                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 3 >> ;
/GulimChe                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 1 >> ;
/GungsuhChe                   << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 3 >> ;

%%% proportional TrueType outline fonts in Windows Vista/XP
%%% See C:\Windows\Fonts\
/MS-PMincho                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msmincho.ttc)  /SubfontID 1 >> ;
/MS-PGothic                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 1 >> ;
/MS-UIGothic                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 2 >> ;
/SimSun                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsun.ttc)    /SubfontID 0 >> ;
/PMingLiU                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 1 >> ;
/Batang                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 0 >> ;
/Dotum                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 2 >> ;
/Gulim                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 0 >> ;
/Gungsuh                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 2 >> ;

%%% monospaced TrueType outline fonts in Windows Vista
%%% See C:\Windows\Fonts\
/SimSun-ExtB                  << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsunb.ttf) >> ;
/KaiTi                        << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simkai.ttf)  >> ;
/FangSong                     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simfang.ttf) >> ;
/DFKaiShu-SB-Estd-BF          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/kaiu.ttf)    >> ;

%%% proportional TrueType outline fonts in Windows Vista
%%% See C:\Windows\Fonts\
/Meiryo                       << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryo.ttc)    /SubfontID 0 >> ;
/Meiryo-Italic                << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryo.ttc)    /SubfontID 1 >> ;
/Meiryo-Bold                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryob.ttc)   /SubfontID 0 >> ;
/Meiryo-BoldItalic            << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryob.ttc)   /SubfontID 1 >> ;
/MicrosoftYaHei               << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/msyh.ttf)                   >> ;
/MicrosoftYaHeiBold           << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/msyhbd.ttf)                 >> ;
/MicrosoftJhengHeiRegular     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/msjh.ttf)                   >> ;
/MicrosoftJhengHeiBold        << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/msjhbd.ttf)                 >> ;
/Ming-Lt-HKSCS-UNI-H          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 2 >> ;
/MingLiU-ExtB                 << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 0 >> ;
/PMingLiU-ExtB                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 1 >> ;
/Ming-Lt-HKSCS-ExtB           << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 2 >> ;
/MalgunGothicRegular          << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/malgun.ttf)                 >> ;
/MalgunGothicBold             << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/malgunbd.ttf)               >> ;

%%% TrueType outline fonts in StarSuite 8
%%% See http://jp.sun.com/products/software/starsuite/
%%%     http://pack.google.com/intl/ja/pack_installer.html?gl=jp&ci_apps=None&ci_so=on
/HG-MinchoL-Sun               << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/HG-MinchoL-Sun.ttc)  /SubfontID 0 >> ;
/HG-GothicB-Sun               << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/HG-GothicB-Sun.ttc)  /SubfontID 0 >> ;

%%% TrueType outline fonts in StarSuite 8 or Microsoft Office 2003
/HGMinchoB                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrmb.ttc)   /SubfontID 0 >> ;
/HGMinchoE                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrme.ttc)   /SubfontID 0 >> ;
/HGSoeiPresenceEB             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrpre.ttc)  /SubfontID 0 >> ;
/HGGothicM                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrgm.ttc)   /SubfontID 0 >> ;
/HGGothicE                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrge.ttc)   /SubfontID 0 >> ;
/HGSoeiKakugothicUB           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrsgu.ttc)  /SubfontID 0 >> ;
/HGMaruGothicMPRO             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrsmp.ttf)               >> ;
/HGSoeiKakupoptai             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrpp1.ttc)  /SubfontID 0 >> ;
/HGKyokashotai                << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrkk.ttc)   /SubfontID 0 >> ;
/HGSeikaishotaiPRO            << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrskp.ttf)               >> ;
/HGGyoshotai                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrgy.ttc)   /SubfontID 0 >> ;

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

%%% Baekmuk fonts
%%% See http://kldp.net/projects/baekmuk/
%%%     ftp://ftp.mizi.com/pub/baekmuk/
/Baekmuk-Batang               << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/batang.ttf) >> ;
/Baekmuk-Dotum                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/dotum.ttf)  >> ;
/Baekmuk-Headline             << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/hline.ttf)  >> ;
/Baekmuk-Gulim                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/gulim.ttf)  >> ;

%%% OpenType fonts with PostScript outlines in Adobe Reader/Acrobat 8
%%% See http://www.adobe.com/jp/products/acrobat/acrrasianfontpack.html
%%%     ftp://ftp.adobe.com/pub/adobe/reader/win/8.x/8.1/misc/
%%%     "C:\Program Files\Adobe\Reader 8.0\Resource\CIDFont\"
%/Ryumin-Light                 /KozMinProVI-Regular    ;
%/GothicBBB-Medium             /KozGoProVI-Medium      ;
%/STSong-Light                 /AdobeSongStd-Light     ;
%/STHeiti-Regular              /AdobeHeitiStd-Regular  ;
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
<!-- %%% Hiragino TrueType fonts -->
<!-- %%% See http://www.screen.co.jp/ga_product/sento/products/pr_TrueType.html -->
<!-- %/HiraMinProN-W2               /HiraginoMin-W2-90ms-RKSJ-H  ; -->
<!-- %/HiraMinProN-W3               /HiraginoMin-W3-90ms-RKSJ-H  ; -->
<!-- %/HiraMinProN-W6               /HiraginoMin-W6-90ms-RKSJ-H  ; -->
<!-- %/HiraKakuProN-W3              /HiraginoKaku-W3-90ms-RKSJ-H ; -->
<!-- %/HiraKakuProN-W6              /HiraginoKaku-W6-90ms-RKSJ-H ; -->
<!-- %/HiraKakuStdN-W8              /HiraginoKaku-W8-90ms-RKSJ-H ; -->
<!-- /HiraginoMin-W2-90ms-RKSJ-H   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirmn2.ttc)  /SubfontID 1 >> ; -->
<!-- /HiraginoMin-W3-90ms-RKSJ-H   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirmn3.ttc)  /SubfontID 1 >> ; -->
<!-- /HiraginoMin-W6-90ms-RKSJ-H   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirmn6.ttc)  /SubfontID 1 >> ; -->
<!-- /HiraginoKaku-W3-90ms-RKSJ-H  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirkg3.ttc)  /SubfontID 1 >> ; -->
<!-- /HiraginoKaku-W6-90ms-RKSJ-H  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirkg6.ttc)  /SubfontID 1 >> ; -->
<!-- /HiraginoKaku-W8-90ms-RKSJ-H  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirkg8.ttc)  /SubfontID 1 >> ; -->

***

### オプション “-dWINKANJI” と “-dNOWINKANJI” {#mef5f1fb}

オプション “-dWINKANJI” を指定すると，日本語フォントを
Win32API ドライバを使って表示します。ただしオプション “-dNOWINKANJI” が
同時に指定されている場合には，オプション “-dWINKANJI” は
無効化されます。Win32API ドライバで使うフォントの割り当ては
gs\gs?.??\kanji\kconfig.ps の記述内容によって設定されます。

#### gs\gs?.??\kanji\kconfig.ps の記述例 {#d6cfe346}

***

```
%% Bitmap fonts
%%
/Ryumin-Light      4300000  (ＭＳ 明朝)             win32BMkanji
%/GothicBBB-Medium  4300200  (HGｺﾞｼｯｸM)              win32BMkanji
/GothicBBB-Medium  4300200  (ＭＳ ゴシック)         win32BMkanji
/FutoMinA101-Bold  4300400  (HG明朝B)               win32BMkanji
/FutoGoB101-Bold   4300600  (HGｺﾞｼｯｸE)              win32BMkanji
/Jun101-Light      4300800  (HG丸ｺﾞｼｯｸM-PRO)        win32BMkanji
/MidashiMin-MA31   4301000  (HG明朝E)               win32BMkanji
/MidashiGo-MB31    4301200  (HG創英角ｺﾞｼｯｸUB)       win32BMkanji

%/HiraMinStdN-W2    4301400  (ヒラギノ明朝 StdN W2)  win32BMkanji
/HiraMinStdN-W2    4301400  (ＭＳ 明朝)             win32BMkanji
```

***

このファイルは Shift_JIS で保存してください。

### PDF への CJK フォントの非埋め込み制御 {#zd1cf8d8}

標準ではオプション “-sDEVICE=pdfwrite” や ps2pdf によって
PDF を作成する場合，CJK フォントは全て埋め込まれます。CJK フォントを
埋め込まないように制御するには “/NeverEmbed” を使います。
例えば “foo.ps” という PostScript ファイルを PDF に
変換する場合に，/MS-Mincho （ＭＳ 明朝）を埋め込まないようにするためには
次のようにコマンドを入力します。

```
     >gswin32c -dSAFER -q -dBATCH -dNOPAUSE ^
More? -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -sOutputFile=foo.pdf ^
More? -c ".setpdfwrite <</NeverEmbed [/MS-Mincho]>> setdistillerparams" ^
More? -f foo.ps
```

ここで “/NeverEmbed” で指定するフォント名は PostScript ファイル内に
記述されているフォント名ではなく，<strong>実際に埋め込むフォント名</strong>でなければ
効果がありません。

また，lib/neverembed.ps に非埋め込み制御を行うフォント名をあらかじめ
記述しておいて，次のようにコマンドを入力する方法もあります。

```
     >gswin32c -dSAFER -q -dBATCH -dNOPAUSE ^
More? -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -sOutputFile=foo.pdf ^
More? -c .setpdfwrite -f neverembed.ps -f foo.ps
```

lib/neverembed.ps には，例えば次のように記述しておきます。

***

```
%!
% neverembed.ps
%
<<
/NeverEmbed [
%/Times-Roman /Times-Bold
%/Times-Italic /Times-BoldItalic
%/Helvetica /Helvetica-Oblique /Helvetica-Bold /Helvetica-BoldOblique
%/Courier /Courier-Oblique /Courier-Bold /Courier-BoldOblique
%/Symbol /ZapfDingbats
/Ryumin-Light /HeiseiMin-W3
%/GothicBBB-Medium /HeiseiKakuGo-W5
/STSong-Light
%/STHeiti-Regular
/MSung-Light
%/MHei-Medium
/HYSMyeongJo-Medium
%/HYGoThic-Medium
/KozMinProVI-Regular /KozGoProVI-Medium /KozGoPro-Medium
/AdobeSongStd-Light
%/AdobeHeitiStd-Regular
/AdobeMingStd-Light /AdobeMyungjoStd-Medium
/KozMinPro-Regular-Acro /KozGoPro-Medium-Acro
/AdobeSongStd-Light-Acro /AdobeMingStd-Light-Acro /AdobeMyungjoStd-Medium-Acro
/STSongStd-Light-Acro /MSungStd-Light-Acro /HYSMyeongJoStd-Medium-Acro
/HeiseiMin-W3-Acro /HeiseiKakuGo-W5-Acro
/STSong-Light-Acro /MSung-Light-Acro /HYSMyeongJo-Medium-Acro
/MS-Mincho
%/MS-Gothic /HGGothicM
/NSimSun /MingLiU /BatangChe
]
/AlwaysEmbed [
%/Times-Roman /Times-Bold
%/Times-Italic /Times-BoldItalic
%/Helvetica /Helvetica-Oblique /Helvetica-Bold /Helvetica-BoldOblique
%/Courier /Courier-Oblique /Courier-Bold /Courier-BoldOblique
%/Symbol /ZapfDingbats
]
>> setdistillerparams
```

***

この lib/neverembed.ps への設定を ps2pdf でも有効に
するためには，gs\gs?.??\lib\ps2pdfxx.bat の記述内容の26行目

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
（UNIX や UNIX 互換 OS では，ghostscript/?.??/lib/ps2pdfwr の記述内容の40行目

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

に次のように “-f neverembed.ps ” を挿入します。

```
D "gswin32c -q -dSAFER -dNOPAUSE -dBATCH -sPAPERSIZE=a0 -sDEVICE=pdfwrite -dCompatibilityLevel=1.3 -dAutoFilterGrayImages=false -dAutoFilterColorImages=false -dGrayImageFilter=/FlateEncode -dColorImageFilter=/FlateEncode -dUseFlateCompression=true -sOutputFile=%o -c .setpdfwrite -f neverembed.ps -f %i -c quit"
```

### PDF への欧文用フォントの埋め込み制御 {#y3b70de6}

Ghostscript 7.07 では “/NeverEmbed”，“/AlwaysEmbed” を使って
PDF への欧文用フォントの埋め込み制御が行えましたが，Ghostscript 8.54 では
欧文用フォントに対し “/NeverEmbed”，“/AlwaysEmbed” がうまく働きませんでした。(最新版ではこの問題は解決しています。)<br>
そこで，“/NeverEmbed”，“/AlwaysEmbed” がうまく働かない場合は [Resource/Init/gs_pdfwr.ps](http://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=gs/Resource/Init/gs_pdfwr.ps;hb=HEAD) の記述内容を書き換えることで
PDF への欧文用フォントの埋め込み制御を行います。

デフォルトでは PostScript Level 1 での基本14書体である
Times ファミリ，Helvetica ファミリ，Courier ファミリ，Symbol，ZapfDingbats が
埋め込まれません。しかし Mac OS X を除く UNIX 互換 OS での Adobe Reader で
Times-Italic や Times-BoldItalic を埋め込んでいない PDF を
表示すると，Times-Italic や Times-BoldItalic の部分が Italic 体ではなく
Oblique 体（Slanted 体，斜体）で表示されてしまいます。
（Xpdf で表示すると PostScript Level 1 での基本14書体は埋め込まれていなくても
正確に表示されます。しかし Xpdf の場合は非埋め込みの中国語フォント・韓國語
［&#xd55c;&#xad6d;&#xc5b4;］フォントが表示されず，非埋め込みの日本語フォントに
使われる書体にも不満がある方が多いとのこと。）そこで Times-Italic と
Times-BoldItalic だけを埋め込み，Times-Roman，Times-Bold，Helvetica
ファミリ，Courier ファミリ，Symbol，ZapfDingbats だけを
埋め込まないようにすると，ほとんどの環境で PostScript Level 1 での基本14書体が
正確に表示されます。このような設定にするには，Resource/Init/gs_pdfwr.ps の
記述内容の27&ndash;34行目のうち32行目を次のように変更してください。

```
/.a2112 [2 1 1 2] readonly def
/.a1111 [1 1 1 1] readonly def
/.standardfonts [
  /Courier /Courier-Bold /Courier-Oblique /Courier-BoldOblique
  /Helvetica /Helvetica-Bold /Helvetica-Oblique /Helvetica-BoldOblique
  /Times-Roman /Times-Bold
%  /Times-Italic /Times-BoldItalic
  /Symbol /ZapfDingbats
] readonly def
```

また TeX ファイルから作った Times ファミリや
Helvetica ファミリを埋め込んでいない PDF を Microsoft Windows の
Adobe Reader/Acrobat で表示すると，Times ファミリや Helvetica ファミリでの
文字の一部（\\={o} \[&#x14d;\]，\b{b} \[&#x1e07;\]，\dj \[&#x111;\]，$\hbar$ など）が
正確に表示されません。そこで Times ファミリと Helvetica ファミリは
埋め込み，Courier ファミリ，Symbol，ZapfDingbats だけを
埋め込まないようにすると，Microsoft Windows を含めたほとんどの環境で
PostScript Level 1 での基本14書体が正確に表示されます。
このような設定にするには，Resource/Init/gs_pdfwr.ps の記述内容の27&ndash;34行目の
うち31&ndash;32行目を次のようにコメントアウトしてください。

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

## GPL Ghostscript 9.xx for UNIX or Unix-like OS {#xff4aa84}

### ダウンロード {#g31ae747}

- [http://downloads.ghostscript.com/public/](http://downloads.ghostscript.com/public/)
- [http://sourceforge.net/projects/ghostscript/files/GPL%20Ghostscript/](http://sourceforge.net/projects/ghostscript/files/GPL%20Ghostscript/)
- [http://code.google.com/p/ghostscript/downloads/list](http://code.google.com/p/ghostscript/downloads/list)

などから ghostscript-9.05.tar.bz2 を入手します。

### インストール {#u4ad1919}

/usr/local/ 以下にインストールする場合です。

```
$ tar jxvf ghostscript-9.05.tar.bz2
$ cd ghostscript-9.05
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

また，/usr/local/share/ghostscript/9.05/ の下に
たくさんのものが入ります。/usr/local/man/man1/ と
/usr/local/man/de/man1/ の中にもマニュアル類が入ります。

```

```

和文については，cidfmap (/usr/local/share/ghostscript/9.05/Resource/Init/cidfmap) に記述します。ヒラギノを利用するなら

```
/Ryumin-Light      /HiraMinProN-W3   ;
/GothicBBB-Medium  /HiraKakuProN-W3  ;
/HeiseiMin-W3      /Ryumin-Light     ;
/HeiseiKakuGo-W5   /GothicBBB-Medium ;
```

あとは /usr/local/share/ghostscript/9.05/Resource/CIDFont/ の
中から /{,System/}Library/Fonts/ の中のヒラギノに “HiraMinProN-W3” のような
名前でシンボリックリンクを作っておきます。例えば MacOS X なら

```
$ sudo ln -s /System/Library/Fonts/"ヒラギノ明朝 ProN W3.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraMinProN-W3
$ sudo ln -s /System/Library/Fonts/"ヒラギノ明朝 ProN W6.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraMinProN-W6
$ sudo ln -s /System/Library/Fonts/"ヒラギノ角ゴ ProN W3.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraKakuProN-W3
$ sudo ln -s /System/Library/Fonts/"ヒラギノ角ゴ ProN W6.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraKakuProN-W6
$ sudo ln -s /System/Library/Fonts/华文黑体.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STHeiti.ttf
$ sudo ln -s /System/Library/Fonts/华文细黑.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STXihei.ttf
$ sudo ln -s /System/Library/Fonts/"儷黑 Pro.ttf" \
> /usr/local/share/ghostscript/fonts/TrueType/LiHeiPro.ttf
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ StdN W8.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraKakuStdN-W8
$ sudo ln -s /Library/Fonts/"ヒラギノ丸ゴ ProN W4.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraMaruProN-W4
$ sudo ln -s /Library/Fonts/"ヒラギノ明朝 Pro W3.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraMinPro-W3
$ sudo ln -s /Library/Fonts/"ヒラギノ明朝 Pro W6.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraMinPro-W6
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ Pro W3.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraKakuPro-W3
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ Pro W6.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraKakuPro-W6
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ Std W8.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraKakuStd-W8
$ sudo ln -s /Library/Fonts/"ヒラギノ丸ゴ Pro W4.otf" \
> /usr/local/share/ghostscript/9.??/Resource/CIDFont/HiraMaruPro-W4
$ sudo ln -s /Library/Fonts/华文宋体.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STSong.ttf
$ sudo ln -s /Library/Fonts/华文楷体.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STKaiti.ttf
$ sudo ln -s /Library/Fonts/华文仿宋.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STFangsong.ttf
$ sudo ln -s /Library/Fonts/"儷宋 Pro.ttf" \
> /usr/local/share/ghostscript/fonts/TrueType/LiSongPro.ttf
```

さらに，/usr/local/share/ghostscript/9.05/Resource/Font/ の中に
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

フォントパスが規定外のところにあると ps2pdf がエラーになるようです。これは -dSAFER オプションのためで，解決法としては規定の場所にシンボリックリンクを張って使うか，あるいは export GS_FONTPATH=... のようにフォントのある場所を指定しておくことが考えられます。

### /usr/local/share/ghostscript/9.??/Resource/Init/cidfmap の記述例 {#h0f0fbe0}

#### <a id="cidfmap-unix">For UNIX (e.g. Solaris, etc.) or Unix-like OS (e.g. Linux, BSD, etc.)</a> {#c18aa324}

***

```
%!
%%% aliases
%/Ryumin-Light                 /IPAMincho                   ;
/Ryumin-Light                 /Sazanami-Mincho-Regular     ;
/Ryumin-Medium                /Sazanami-Mincho-Regular     ;
/FutoMinA101-Bold             /WadaMin-Bold                ;
%/MidashiMin-MA31              /                            ;
%/GothicBBB-Medium             /IPAGothic                   ;
%/GothicBBB-Medium             /VL-Gothic-Regular           ;
/GothicBBB-Medium             /Sazanami-Gothic-Regular     ;
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

%%% Sazanami Fonts
%%% See http://sourceforge.jp/projects/efont/
/Sazanami-Mincho-Regular      << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/share/fonts/truetype/sazanami/sazanami-mincho.ttf) >> ;
/Sazanami-Gothic-Regular      << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/share/fonts/truetype/sazanami/sazanami-gothic.ttf) >> ;

%%% VLGothic Font Family
%%% See http://dicey.org/vlgothic/
/VL-Gothic-Regular            << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/usr/X11R6/lib/X11/fonts/TrueType/VL-Gothic-Regular.ttf) >> ;

%%% IPA Fonts
%%% See http://www.ipa.go.jp/about/press/20071001-2.html
%%%     http://ossipedia.ipa.go.jp/ipafont/
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

%%% OpenType fonts with PostScript outlines in Adobe Reader 8, 7
%%% See http://www.adobe.com/jp/products/acrobat/acrrasianfontpack.html
%%%     ftp://ftp.adobe.com/pub/adobe/reader/unix/8.x/8.1.1/misc/
%%%     ftp://ftp.adobe.com/pub/adobe/reader/unix/7x/7.0.8/misc/
%%%     /opt/Adobe/Reader8/Resource/CIDFont/
%%%     /usr/local/Adobe/Acrobat7.0/Resource/CIDFont/
%/Ryumin-Light                 /KozMinProVI-Regular    ;
%/GothicBBB-Medium             /KozGoPro-Medium        ;
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

#### <a id="cidfmap-macosx">For Mac OS X</a> {#eb079434}

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

%%% TrueType outline fonts in Mac OS X
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

%%% TrueType outline fonts in Microsoft Office 2004 for Mac
%%% See http://www.microsoft.com/japan/mac/products/office2004/default.mspx
%%%     /Applications/"Microsoft Office 2004"/Office/Fonts/
/MS-Mincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/Applications/Microsoft Office 2004/Office/Fonts/MS Mincho.ttf)  >> ;
/MS-PMincho                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/Applications/Microsoft Office 2004/Office/Fonts/MS PMincho.ttf) >> ;
/MS-Gothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/Applications/Microsoft Office 2004/Office/Fonts/MS Gothic.ttf)  >> ;
/MS-PGothic                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (/Applications/Microsoft Office 2004/Office/Fonts/MS PGothic.ttf) >> ;
/SimSun                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (/Applications/Microsoft Office 2004/Office/Fonts/SimSun.ttf)     >> ;
/PMingLiU                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (/Applications/Microsoft Office 2004/Office/Fonts/PMingLiU.ttf)   >> ;
/Batang                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/Applications/Microsoft Office 2004/Office/Fonts/Batang.ttf)     >> ;
/Gulim                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (/Applications/Microsoft Office 2004/Office/Fonts/Gulim.ttf)      >> ;

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
%%% See http://wqy.sourceforge.net/en/
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

%%% OpenType fonts with PostScript outlines in Adobe Reader/Acrobat 8, 7
%%% See http://www.adobe.com/jp/products/acrobat/acrrasianfontpack.html
%%%     ftp://ftp.adobe.com/pub/adobe/reader/mac/8.x/8.1/misc/
%%%     ftp://ftp.adobe.com/pub/adobe/reader/unix/7x/7.0.8/misc/
%%%     /Library/"Application Support"/Adobe/PDFL/?.0/Fonts/
%/Ryumin-Light                 /KozMinPr6N-Regular     ;
%/GothicBBB-Medium             /KozGoPr6N-Medium       ;
%/GothicBBB-Medium             /KozGoPro-Medium        ;
%/STSong-Light                 /AdobeSongStd-Light     ;
%/STHeiti-Regular              /AdobeHeitiStd-Regular  ;
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

***

## Comment {#z51688d5}

- 「PDF への欧文用フォントの埋め込み制御」で書き換えすべきファイルが、gs9.00、8.70では"Resource/Init/gs_pdfwr.ps"に移動しています。 -- 13th-note 2010-10-12 (火) 15:51:13
- 「PDFへの欧文用フォントの埋め込み制御」でgs_pdfwr.psについて/.standardfontsを書き換えずに，"/.distillersettings mark"の下の"/default mark"の下の設定(8.71だと104～130行目，最後の空行も含む)をコピーして/NeverEmbedの行を変更したpsfontsembedという新しい設定を作り，dvipdfmx -D "ps2pdf -dPDFSETTINGS=/psfontsembed %i %o"としても良いようです． -- stamura 2010-10-21 (木) 12:00:51
- 先ほどは上記のように書きましたが，その後調べてみると/AlwaysEmbed, /NeverEmbedがうまく働かない問題は"[http://ghostscript.com/pipermail/gs-cvs/2009-March/009170.html](http://ghostscript.com/pipermail/gs-cvs/2009-March/009170.html)"で解決されているようです．ただし，gs_pdfwr.psのdefaultでは/NeverEmbedが基本14フォントが指定されているので/AlwaysEmbedは効かず，基本14フォントから埋め込みたいフォントを除いたリストを/NeverEmbedに指定するということになりますが． -- stamura 2010-10-21 (木) 13:41:39

#COMMENT
