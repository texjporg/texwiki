---
title: "MiKTeX"
url: "/MiKTeX/"
date: 2012-04-13T02:05:44Z
pukiwiki: "MiKTeX"
---

# MiKTeX

## [MiKTeX](https://miktex.org/) {#n766a2b6}

MiKTeX は Windows, macOS, Linux で動作する TeX のディストリビューションです．
[TeX Live](</TeX Live/>) と並んで国際的に広く使われています．

- [Home - MiKTeX.org](https://miktex.org/)
- [https://github.com/MiKTeX/miktex](https://github.com/MiKTeX/miktex)

***

***

### お知らせ {#n83db2ac}

2021-12-07 以降，MiKTeX にも日本語 pTeX 関連ソフトウェアとパッケージが順次導入されています。

- [https://github.com/MiKTeX/miktex/blob/next/CHANGELOG.md#2112---2021-12-07](https://github.com/MiKTeX/miktex/blob/next/CHANGELOG.md#2112---2021-12-07)

MiKTeX 24.1 で uplatex を実行すると

This is e-upTeX, Version 3.141592653-p4.1.1-u1.30-230214-2.6 (utf8.uptex) (MiKTeX 24.1) (preloaded format=uplatex.fmt)<br>
&nbsp;restricted \write18 enabled.<br>

と表示された後で MiKTeX Package Mamager の

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;uplatex.ini<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;uplatex<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。
次に

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;plcore.ltx<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;platex<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。
次に

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;upjisr-h.tfm<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;uptex-fonts<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。
次に

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;jlreq.cls<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;jlreq<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。
次に

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;everyshi.sty<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;everyhook<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。
次に

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;svn-prov.sty<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;svn-prov<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。
次に

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;filehook.sty<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;filehook<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。

kanji-config-updmap-sys haranoaji  を実行すると MiKTeX Package Mamager の

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;kanji-config-updmap.pl<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;ptex-fontmaps<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。
次に

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;ipam.ttf<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;ipaex<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。
次に

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;HaranoAjiMincho-Regular.otf<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;haranoaji<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。

<!-- Sorry, but: Permission denied: path="C:\ProgramData\MiKTeX\fonts\map\dvipdfmx\kanjix.map" -->

dvipdfmx を実行すると MiKTeX Package Mamager の

&nbsp;&nbsp;&nbsp;&nbsp;Package Instraion<br>
This required file could not be found:<br>
&nbsp;&nbsp;&nbsp;ttfonts.map<br>
The file is a part of this package:<br>
&nbsp;&nbsp;&nbsp;zhmetrics<br>

のダイアログが表示されるので \[Install\] ボタンを押下します。

dvipdfmx の実行結果は

> dvipdfmx:warning: Could not locate a virtual/physical font for TFM "uprml-h".<br>
> dvipdfmx:warning: >> There are no valid font mapping entry for this font.<br>
> dvipdfmx:warning: >> Font file name "uprml-h" was assumed but failed to locate that font.<br>
> dvipdfmx:fatal: Cannot proceed without .vf or "physical" font for PDF output...<br>
>
> <br>
>
> No output PDF file written.<br>

となり、フォントに関するエラーが発生するため 2024年2月現在でもまだ不安定なようです。

### インストール {#c18f5cec}

- [Getting MiKTeX - MiKTeX.org](https://miktex.org/download)
- [MiKTeXのWindowsへのインストール](https://self-development.info/miktex%e3%81%aewindows%e3%81%b8%e3%81%ae%e3%82%a4%e3%83%b3%e3%82%b9%e3%83%88%e3%83%bc%e3%83%ab/)

<!-- **注意事項 [#e87c6af7] -->

### 関連リンク {#x1081277}

- [「はじめてのLaTeX」著者サポート：MiKTeX2.9のインストール](http://supportdoc.net/support-latex/newmik.html)
- [「はじめてのLaTeX」: MiKTeXでXeTeXで日本語を](http://supportdoc.net/support-latex/xetex.html)
- [TeXworksでMiKTeXを使う](https://okumuralab.org/tex/mod/forum/discuss.php?d=905)
- [TexnicCenter2.0の日本語使用について](https://okumuralab.org/tex/mod/forum/discuss.php?d=794)

#### Building MiKTeX {#o3eda5f2}

- [https://miktex.org/sources](https://miktex.org/sources)

#### ミラーサイト {#xfbee989}

- [http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/miktex/](http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/miktex/)
