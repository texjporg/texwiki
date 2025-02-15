---
title: "GSview"
url: "/GSview/"
date: 2015-07-07T03:47:20Z
pukiwiki: "GSview"
---

# GSview

## [GSview](https://web.archive.org/web/20241219012055/https://git.ghostscript.com/?p=user/ghostgum/gsview.git) (Ghostgum GSview) {#o3c38991}

GSview は，[Ghostscript](/Ghostscript/) のフロントエンドです。
紛らわしいですが，Artifex Software による [GSView](/GSview/) とは別物です。
なお、GSview 5.0 は gs-10.04.0 には対応していません。[GSview 5.01beta は gs-10.04.0 に対応しています。（動作確認済み）](/GSview/#install)

<!-- [[Ghostscript/Windows]] から移転してきました。 -->

***

***

### お知らせ <a id="information"></a> {#x301c4e2}

- GSview 5.0 は gs-10.04.0 には対応していません。[GSview 5.01beta は gs-10.04.0 に対応しています。（動作確認済み）](/GSview/#install)
- gs-9.27 では GS_PDF_ProcSet が廃止されました。gsview-5.0 は
    GS_PDF_ProcSet の存在を仮定しています。従って gsview-5.0 を通して
    PDF を表示することは gs-9.27 では不可能になりましたので注意が必要です。

- gsview-5.0 上で角藤版 Ghostscript を使用する場合の注意 --&gt; [Windows 用 gs-9.25 と gsview-5.0 について](https://okumuralab.org/tex/mod/forum/discuss.php?d=2500)

> 本家の Windows 用 Ghostscript バイナリは，iccprofiles を
> バイナリに含んでいるので，gsview-5.0 の
>
> ```
> Options--->Safer
> ```
>
> をチェックしてあっても Ghostscript-9.26 を使用できますが，角藤版 Ghostscript の場合は
> iccprofiles はディスク上のディレクトリであり，gsview-5.0 は古すぎるので
>
> ```
> Options--->Safer
> ```
>
> がこのような構成に対応していません。そこで角藤版 Ghostscript を gsview-5.0 上で使用するには，
>
> ```
> Options--->Safer
> ```
>
> のチェックをはずして，代わりに
>
> ```
> Options--->Advanced Configure...--->Ghostscript Options:
> ```
>
> に
>
> ```
> -dSAFER
> ```
>
> を書き加えて下さい。

### インストール <a id="install"></a> {#je84b8ea}

GSview は，Ghostscript を正常にインストールした後にインストールしてください（Ghostscript のレジストリ情報が使用されるためです）。
Windows への Ghostscript のインストール方法は [Ghostscript/Windows](/Ghostscript/Windows/) で解説しています。

GSview 5.01beta はバイナリ配布されていないので自分でビルドする必要があります。

GSview のビルドには [Microsoft Visual Studio Community](</Microsoft Visual Studio Community/>) が必要です。

64-bit GSview のビルド方法を以下に示します。

GSview 5.01beta 2020-08-23 のソースコード

[https://web.archive.org/web/20241219012133/https://git.ghostscript.com/?p=user/ghostgum/gsview.git;a=snapshot;h=09e7545912ad1439e38d2b56516f50b150ff50eb;sf=tgz](https://web.archive.org/web/20241219012133/https://git.ghostscript.com/?p=user/ghostgum/gsview.git;a=snapshot;h=09e7545912ad1439e38d2b56516f50b150ff50eb;sf=tgz)

をダウンロードして gsview-09e7545.tar.gz を展開します。

GSview のベータ版には使用期限が設けられており 5.01beta 2020-08-23 の使用期限は 2020-12-30 までとなっています。
このままビルドしても期限切れで使用できないので gsview-09e7545\src\gvcver.h の

> #define

を使用可能な値（例えば2030年）

> #define

に修正します。

gsview-09e7545\srcwin\win.mak を gsview-09e7545\Makefile にコピーします。

スタートから x64 Native Tools Command Prompt for VS を起動して gsview-09e7545 ディレクトリ移動後に

> nmake WIN64=1

を実行すると gsview-09e7545\bin に実行ファイル gsview64.exe が作成されます。

64-bit Ghostscript 10.04.0 をインストールして 64-bit GSview でファイルを開くとエラーが発生する場合は \[Options\] &gt; \[Advanced Configure...\] から以下の設定を行い、GSviewを再起動します。

Ghostscript DLL:
: C:\Program Files\gs\gs10.04.0\bin\gsdll64.dll

Ghostscript include Path:
: C:\Program Files\gs\gs10.04.0\bin;C:\Program Files\gs\gs10.04.0\lib;C:\Program Files\gs\gs10.04.0\fonts

Ghostscript Options:
: -dNOPLATFONTS -sFONTPATH="c:\psfonts"

### 注意点 {#y9339e21}

#### \[PS to EPS\] の機能 {#zf437909}

GSview の \[File\]->\[PS to EPS\] の機能は十分に注意を払って使用してください。
ps file を与えた場合に出来上がるのは不正な eps file です。
出来上がった eps file を思い通りに扱えない dviware も存在するので，これは簡易的な機能であると理解してください。
このことに関しては，\[File\]->\[PS to EPS\] のダイヤログに現れる \[Help\] のボタンを押すと解説を見ることができます。
なお，ps ではなく eps file を与えた場合には，この機能は BoundingBox を gui で付け替える有用な tool となります。

#### 用紙サイズ設定 {#pce45cf1}

GSview のデフォルトの用紙サイズ設定には，日本で用いられる JIS 規格・B 系列のサイズは含まれていません。
つまり，日本語文書を用いる場合に ps file を得る段階までにおいて，通常の感覚で B4 とか B5 の用紙サイズを指定していた場合に，GSview で表示させても思い通りのサイズでは表示されない場合があります。
これに対する設定を行う場合には，GSview のフォルダーにある printer.ini の中の \[UserMedia\] の部分に以下のデータを付け加え，GSview の \[Options\]->\[Advanced Configure...\] のダイヤログで「Copy Printer Defaults」のみにチェックマークを入れて \[OK\] を押してバイナリを書き換えます。

```
jisB0=2920,4127
jisB1=2064,2920
jisB2=1460,2064
jisB3=1032,1460
jisB4=729,1032
jisB5=516,729
jisB6=363,516
jisB7=258,363
jisB8=181,258
```

無論こんなにたくさん用意する必要はなく，自分に必要なものを設定すればそれで十分です。

### ライセンス {#y06b3066}

GPLv3 (GSview 5.01beta 2020-08-23 のソースコード)

### 関連リンク {#yb0d4b4b}

- [https://web.archive.org/web/20241219012055/https://git.ghostscript.com/?p=user/ghostgum/gsview.git](https://web.archive.org/web/20241219012055/https://git.ghostscript.com/?p=user/ghostgum/gsview.git)
- [USBメモリ活用講座【実践編・Ghostscript&amp;GSviewポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/gsview.shtml)
- [■ \[Windows\] GSView 5.01beta](http://barutan.s296.xrea.com/cgi-bin/tdiary/?date=20210402#p02)
- [LaTeXでEPS画像をPDFファイルに出力したら真っ白になっちゃう問題の解決法](https://qiita.com/housewifeCat/items/dc74a9e625e63fe43bd2)
