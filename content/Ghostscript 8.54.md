---
title: "Ghostscript 8.54"
url: "/Ghostscript 8.54/"
date: 2006-09-02T03:42:11Z
pukiwiki: "Ghostscript 8.54"
---

# Ghostscript 8.54

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+- -- -8 -->
<!-- 8系共通の話題を[[Ghostscript 8.xx]]として分離 -->

## ghostscript 8.54 for Mac OS X インストール記 {#fe2859ab}

### はじめに {#p921c1f2}

以下は Mac OS X 10.4 + X11 の環境でインストールした記録です。

#### ダウンロード {#g31ae747}

[CTAN:support/ghostscript/GPL/gs854/](https://mirror.ctan.org/support/ghostscript/GPL/gs854/)
などから[ghostscript-8.54-gpl.tar.bz2](ftp://ftp.ring.gr.jp/pub/text/CTAN/support/ghostscript/GPL/gs854/ghostscript-8.54-gpl.tar.bz2)
と[ghostscript-fonts-std-8.11.tar.gz](ftp://ftp.ring.gr.jp/pub/text/CTAN/support/ghostscript/GPL/gs854/ghostscript-fonts-std-8.11.tar.gz)
を入手します。

#### インストール {#u4ad1919}

[Ghostscript 7.07](</Ghostscript 7.07/>) を /usr/local/ にインストールしたので，
今回は /usr/local/teTeX/ 以下にインストールしてみます。

```
$ cd /usr/local/src
$ sudo tar xvjf .../ghostscript-8.54-gpl.tar.bz2
$ cd ghostscript-8.54-gpl
$ sudo ./configure --prefix=/usr/local/teTeX
```

これで

```
$ make
$ sudo make install
```

すると，次のものが /usr/local/teTeX/bin/ に入ります。

> bdftops, dumphint, dvipdf, eps2eps, fixmswrd.pl, font2c, gs, gsbj, gsdj,
> gsdj500, gslj, gslp, gsnd, lprsetup.sh, pdf2dsc, pdf2ps, pdfopt, pf2afm,
> pfbtopfa, printafm, ps2ascii, ps2epsi, ps2pdf, ps2pdf12, ps2pdf13,
> ps2pdf14, ps2pdfwr, ps2ps, pv.sh, unix-lpr.sh, wftopfa

また，/usr/local/teTeX/share/ghostscript/8.54/ の下に
たくさんのものが入ります。/usr/local/teTeX/man/man1/ と
/usr/local/teTeX/man/de/man1/ の中にもマニュアル類が入ります。

欧文用フォントをインストールします：

```
$ cd /usr/local/teTeX/share/ghostscript
$ sudo tar xvzf .../ghostscript-fonts-std-8.11.tar.gz 
```

和文については，[Ghostscript 7.07](</Ghostscript 7.07/>) では CIDFnmap で設定しましたが，
ヴァージョン 8 シリーズでは cidfmap
（上の設定では /usr/local/teTeX/share/ghostscript/8.54/lib/cidfmap）
に記述します。

```
/Ryumin-Light      /HiraMinProN-W3   ;
/GothicBBB-Medium  /HiraKakuProN-W3  ;
/HeiseiMin-W3      /Ryumin-Light     ;
/HeiseiKakuGo-W5   /GothicBBB-Medium ;
```

あとは /usr/local/teTeX/share/ghostscript/8.54/Resource/CIDFont/ の
中から /{,System/}Library/Fonts/ の中のヒラギノに “HiraMinProN-W3” のような
名前でシンボリックリンクを作っておきます。
さらに，/usr/local/teTeX/share/ghostscript/8.54/Resource/Font/ の中に
例えば “HiraMinProN-W3-H” という名前で次のようなファイルを作っておきます：

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

#### 参考サイト {#cb8dfaab}

- [Ghostscript のインストール（Mac OS X 10.4 Tiger）](http://www.cymric.jp/old/mac/gs-tiger.html)

### フォントのシンボリックリンク {#j6c4153b}

```
$ sudo ln -s /System/Library/Fonts/"ヒラギノ明朝 ProN W3.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinProN-W3
$ sudo ln -s /System/Library/Fonts/"ヒラギノ明朝 ProN W6.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinProN-W6
$ sudo ln -s /System/Library/Fonts/"ヒラギノ角ゴ ProN W3.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuProN-W3
$ sudo ln -s /System/Library/Fonts/"ヒラギノ角ゴ ProN W6.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuProN-W6
$ sudo ln -s /System/Library/Fonts/华文黑体.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STHeiti.ttf
$ sudo ln -s /System/Library/Fonts/华文细黑.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STXihei.ttf
$ sudo ln -s /System/Library/Fonts/"儷黑 Pro.ttf" \
> /usr/local/share/ghostscript/fonts/TrueType/LiHeiPro.ttf
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ StdN W8.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuStdN-W8
$ sudo ln -s /Library/Fonts/"ヒラギノ丸ゴ ProN W4.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMaruProN-W4
$ sudo ln -s /Library/Fonts/"ヒラギノ明朝 Pro W3.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinPro-W3
$ sudo ln -s /Library/Fonts/"ヒラギノ明朝 Pro W6.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinPro-W6
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ Pro W3.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuPro-W3
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ Pro W6.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuPro-W6
$ sudo ln -s /Library/Fonts/"ヒラギノ角ゴ Std W8.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuStd-W8
$ sudo ln -s /Library/Fonts/"ヒラギノ丸ゴ Pro W4.otf" \
> /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMaruPro-W4
$ sudo ln -s /Library/Fonts/华文宋体.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STSong.ttf
$ sudo ln -s /Library/Fonts/华文楷体.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STKaiti.ttf
$ sudo ln -s /Library/Fonts/华文仿宋.ttf \
> /usr/local/share/ghostscript/fonts/TrueType/STFangsong.ttf
$ sudo ln -s /Library/Fonts/"儷宋 Pro.ttf" \
> /usr/local/share/ghostscript/fonts/TrueType/LiSongPro.ttf
```

ただし，ターミナルでは日本語文字や中国語文字を直接扱えないようなので，
以下の 1.&ndash;4. のいずれかの方法を使います。

1. アプリケーションのユーティリティに含まれているターミナルを起動し，
    ［ターミナル］ → ［ウインドウ設定］ → 「エミュレーション」 の
    「非 ASCII 文字をエスケープする」にチェックを入れておきます。
    これにより，ファイルをターミナルにドラッグアンドドロップすると，
    そのファイルのフルパスがターミナルに入力されます。

    ```
    $ sudo ln -s 【ここで "ヒラギノ明朝 ProN W3.otf" をドラッグアンドドロップ】 /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinPro-W3
    ```

    これを上記の全てのフォントについて行います。

1. 上記の内容のシェルスクリプトを作って実行します。
1. <br>

    ```
    $ sudo ln -s "`grep -l HiraMinProN-W3 /System/Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinProN-W3
    $ sudo ln -s "`grep -l HiraMinProN-W6 /System/Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinProN-W6
    $ sudo ln -s "`grep -l HiraKakuProN-W3 /System/Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuProN-W3
    $ sudo ln -s "`grep -l HiraKakuProN-W6 /System/Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuProN-W6
    $ sudo ln -s "`grep -l 'STHeiti.*Regular' /System/Library/Fonts/*.ttf`" \
    > /usr/local/share/ghostscript/fonts/TrueType/STHeiti.ttf
    $ sudo ln -s "`grep -l STXihei /System/Library/Fonts/*.ttf`" \
    > /usr/local/share/ghostscript/fonts/TrueType/STXihei.ttf
    $ sudo ln -s "`grep -l LiHeiPro /System/Library/Fonts/*.ttf`" \
    > /usr/local/share/ghostscript/fonts/TrueType/LiHeiPro.ttf
    $ sudo ln -s "`grep -l HiraKakuStdN-W8 /Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuStdN-W8
    $ sudo ln -s "`grep -l HiraMaruProN-W4 /Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMaruProN-W4
    $ sudo ln -s "`grep -l HiraMinPro-W3 /Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinPro-W3
    $ sudo ln -s "`grep -l HiraMinPro-W6 /Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinPro-W6
    $ sudo ln -s "`grep -l HiraKakuPro-W3 /Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuPro-W3
    $ sudo ln -s "`grep -l HiraKakuPro-W6 /Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuPro-W6
    $ sudo ln -s "`grep -l HiraKakuStd-W8 /Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuStd-W8
    $ sudo ln -s "`grep -l HiraMaruPro-W4 /Library/Fonts/*.otf`" \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMaruPro-W4
    $ sudo ln -s "`grep -l STSong /Library/System/Library/Fonts/*.ttf`" \
    > /usr/local/share/ghostscript/fonts/TrueType/STSong.ttf
    $ sudo ln -s "`grep -l STKaiti /Library/System/Library/Fonts/*.ttf`" \
    > /usr/local/share/ghostscript/fonts/TrueType/STKaiti.ttf
    $ sudo ln -s "`grep -l STFangsong /Library/System/Library/Fonts/*.ttf`" \
    > /usr/local/share/ghostscript/fonts/TrueType/STFangsong.ttf
    $ sudo ln -s "`grep -l LiSongPro /Library/System/Library/Fonts/*.ttf`" \
    > /usr/local/share/ghostscript/fonts/TrueType/LiSongPro.ttf
    ```

    のように grep を使います。

1. <br>

    ```
    $ sudo ln -s /System/Library/Fonts/?????????????????????\ ProN\ W3.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinProN-W3
    $ sudo ln -s /System/Library/Fonts/?????????????????????\ ProN\ W6.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinProN-W6
    $ sudo ln -s /System/Library/Fonts/????????????????????????\ ProN\ W3.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuProN-W3
    $ sudo ln -s /System/Library/Fonts/????????????????????????\ ProN\ W6.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuProN-W6
    $ sudo ln -s /Library/Fonts/????????????????????????\ StdN\ W8.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuStdN-W8
    $ sudo ln -s /Library/Fonts/????????????????????????\ ProN\ W4.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMaruProN-W4
    $ sudo ln -s /Library/Fonts/?????????????????????\ Pro\ W3.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinPro-W3
    $ sudo ln -s /Library/Fonts/?????????????????????\ Pro\ W6.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMinPro-W6
    $ sudo ln -s /Library/Fonts/????????????????????????\ Pro\ W3.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuPro-W3
    $ sudo ln -s /Library/Fonts/????????????????????????\ Pro\ W6.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuPro-W6
    $ sudo ln -s /Library/Fonts/????????????????????????\ Std\ W8.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraKakuStd-W8
    $ sudo ln -s /Library/Fonts/????????????????????????\ Pro\ W4.otf \
    > /usr/local/share/ghostscript/8.??/Resource/CIDFont/HiraMaruPro-W4
    ```

    のようにワイルドカード “?” を使います。

$TEXMFLOCAL/fonts/opentype// や $TEXMFLOCAL/fonts/truetype// からも
シンボリックリンクを作っておくと良いでしょう
（こちらは拡張子 “.otf”，“.ttf”，“.ttc” を付けたままにしておきます）。

## Comments {#a6eac88c}

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+- -- -8 -->
