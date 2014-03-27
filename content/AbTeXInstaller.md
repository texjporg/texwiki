---
title: "AbTeXInstaller"
url: "/AbTeXInstaller/"
date: 2011-08-01T18:37:25Z
pukiwiki: "AbTeXInstaller"
---

# AbTeXInstaller

## [TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html) {#fa0ee5c0}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## TeX インストーラ 3 とは {#wd4d33ba}

「TeX インストーラ 3」は TeX のインストーラーです。<br>

- [W32TeX](/W32TeX/)
- dviout for Windows
- [Ghostscript](/Ghostscript/)
- [GSview](/Ghostscript/Windows/#gsview)
- [TeXworks](/TeXworks/)

をサーバからダウンロードしてインストールします。<br>
環境変数 PATH の設定や TeXworks のショートカットの作成などの作業をユーザーが直接しなくても済みますので，<br>
手軽なインストール方法として活用できると思います。

- [TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)

### 動作環境 {#ge54c4b7}

Windows

[TeXインストーラ3 は Wine で動作しません．](http://d.hatena.ne.jp/abenori/20120522)

### リリース情報 {#f691af94}

[TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html) を参照．<br>

<!-- **注意事項 [#bb499d3c] -->

## インストール {#gbf84ff3}

[TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)
から TeXインストーラ3 の最新版をダウンロードして展開 (解凍) します。<br>
展開したフォルダーの "abtexinst.exe" をダブルクリックします。<br>

64-bit Windows で 64-bit 版の Ghostscript と GSview が表示されない場合は abtexinst_sys.ini に記述されている

```
GS=gs[0-9]*w32full(-gpl)?\.(zip|exe)
GV=gsv[0-9]*w32\.exe
```

を<br>

```
GS=gs[0-9]*w(32|64)full(-gpl)?\.(zip|exe)
GV=gsv[0-9]*w(32|64)\.exe
```

に修正します．<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXのインストール</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　Windows用TeXの基本的なソフトウェア群である以下をダウンロード&amp;インストール<br>
　　　　します．　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　Change Language　\]</span><br>

<br>

　　　　角藤さんによるW32TeX<br>
　　　　dviout for Windows<br>
　　　　Ghostscript<br>
　　　　GSview<br>
　　　　TeXworks<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXのインストール</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　W32TeXのインストール設定を行います．<br>

<br>

　　　　ファイル保存場所<br>
　　　　<ins>C:\w32tex\download\\</ins><br>
　　　　インストール先<br>
　　　　<ins>C:\w32tex\\</ins><br>
　　　　※ 保存先、インストール先には全角文字やスペースの入ったフォルダ名は使用出来ません．<br>
　　　　URL<br>
　　　　　　<ins>&#x66;tp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/</ins><br> <!-- 　　　　　　%%%&#x66;tp://ftp.kddilabs.jp/TeX/ptex-win32/current/%%%&br; -->
　　　　　　☐一覧以外を使う（↓に入力）<br>
　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　高度な設定　　\]</span> ← otf と luatex のパッケージを変更してインストールする場合は \[高度な設定\] をクリック<br>
　　　　☑環境変数PATHに実行ファイルのフォルダを追加する．<br>
　　　　☐ネットワークを使わない．（ローカルのファイルからインストールします．）<br>
　　　　☑ダウンロードをキャッシュから読み込まないようにする．<br>
　　　　　Proxy（HTTPのみ）　空欄ならシステム設定を使います．　　　　　　　　　　Port<br>
　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins>　　　　<ins>　　　　　</ins><br>

***

デフォルトでは otfbeta がインストールされます。<br>
otf パッケージの最新版は otfbeta です。<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>W32TeXの高度な設定</strong></span>　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　インストールするファイルを選んでください．<br>
　　　　◯ otf<br>
　　　　◯ otfdevel<br>
　　　 (●) otfbeta<br>

　　　 (●) luatex-w32<br>
　　　　◯ luatex-dev-w32<br>

　　　 (●) luatex-w64<br>
　　　　◯ luatex-dev-w64<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>dviout, Ghostscript, GSviewのインストール設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　dviout，Ghostscript，GSviewのインストール設定を行います．<br>
　　　　dvioutのURL<br> <!-- 　　　　　　　　&color(#888888,#EEEEEE){%%%&#x66;tp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current/%%%};&br; -->
　　　　　　　　<ins>&#x66;tp://ftp.ring.gr.jp/pub/text/TeX/dviout/</ins><br>
　　　　　　　　☐一覧以外を使う（↓に入力）<br> <!-- 　　　　　　　　☑一覧以外を使う（↓に入力）&br; -->
　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br> <!-- 　　　　　　　　%%%&#x66;tp://ftp.kddilabs.jp/TeX/dviout/current/%%%&br; -->
　　　　GhostscriptのURL<br> <!-- 　　　　　　　　&color(#888888,#EEEEEE){%%%&#x68;ttp://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/%%%};&br; -->
　　　　　　　　<ins>&#x66;tp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/gs/</ins><br>
　　　　　　　　☐一覧以外を使う（↓に入力）<br> <!-- 　　　　　　　　☑一覧以外を使う（↓に入力）&br; -->
　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br> <!-- 　　　　　　　　%%%&#x66;tp://ftp.kddilabs.jp/TeX/ptex-win32/gs/%%%&br; -->
　　　　GSviewのURL<br>
　　　　　　　　<ins>&#x68;ttp://pages.cs.wisc.edu/~ghost/gsview/download/</ins><br>
　　　　　　　　☐一覧以外を使う（↓に入力）<br>
　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>

<br>

　　　　※ 保存先，proxy，portの設定はTeXのものを使います．<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>その他のソフトのインストール設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　ダブルクリックで設定画面を開くことができます．<br>
　　　　ソフト名　　　　　｜説明<br>
　　　　TeXworks　　　　　TeXworks の設定<br>

***

デフォルトでは W32TeX のデフォルトの指定を使います。<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXworks 設定</strong></span>　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　☑ TeXworksのショートカットをデスクトップに作成する<br>
　TeXworks 利用時に埋め込むフォントを指定してください．<br>
　 (●) デフォルトの指定を使います．<br>
　　◯ msmingoth.map（ＭＳ 明朝・ＭＳ ゴシックを用います．）<br>
　　◯ hiragino.map（ヒラギノフォントを用います．）<br>
　　◯ ipaex.map（IPAex フォントを用います．）<br>
　　◯ kozuka.map（小塚明朝・ゴシック Pro を用います．）<br>
　　◯ kozukapr6n.map（小塚明朝・ゴシック Pr6N を用います．）<br>
　　◯ noembed.map（埋め込みません．TeXworks ではＭＳ 明朝のみで表示．）<br>
　　☐ 2004JIS 字形を使う．（デフォルトの指定を選択時は無視されます．）<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>インストールファイルの選択</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　ダウンロード&amp;インストールするファイルを選んでください．<br>

　　　W32TeX<br>
　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑aleph-w32.tar.xz　　　　　　　　　　　無い　　　4.1MB<br>
　　　　 ∣☑biblatex-biber.tar.xz　　　　　　　　　無い　　　14.8MB<br>
　　　　 ∣☑cjkzr.tar.xz　　　　　　　　　　　　　　 無い　　　16.0MB<br>
　　　　 ∣☑context-doc.tar.xz　　　　　　　　　　無い　　　15.0MB<br>
　　　　 ∣☑context.tar.xz　　　　　　　　　　　　　無い　　　15.0MB<br>
　　　　 ∣☑cweb-w32.tar.xz　　　　　　　　　　　無い　　　747KB<br>
　　　　 ∣☑dvi2ps-w32.tar.xz　　　　　　　　　　 無い　　　447KB<br>
　　　　 ∣☑dvi2tty-w32.tar.xz　　　　　　　　　　無い　　　145KB<br>
　　　　 ∣☑dvipdfm-w32.tar.xz　　　　　　　　　　無い　　　1.6MB<br>
　　　　 ∣☑dvipsk-w32.tar.xz　　　　　　　　　　　無い　　　4.4MB<br>
　　　　 ∣☑dvitools-w32.tar.xz　　　　　　　　　　無い　　　1.2MB<br>
　　　　 ∣☑jtex-w32.tar.xz　　　　　　　　　　　　 無い　　　1.0MB<br>
　　　　 ∣☑latex.tar.xz　　　　　　　　　　　　　　　無い　　　6.7MB<br>
　　　　 ∣☑lcdf-typetools-w32.tar.xz　　　　　　無い　　　782KB<br>
　　　　 ∣☑ltxpkgs.tar.xz　　　　　　　　　　　　　　無い　　　185MB<br>
　　　　 ∣☑luajittex-w32.tar.xz　　　　　　　　　　無い　　　 3.8MB<br>
　　　　 ∣☑luatex-w32.tar.xz　　　　　　　　　　　無い　　　 9.0MB<br>
　　　　 ∣☑luatexja.tar.xz　　　　　　　　　　　　　無い　　　2.8MB<br>
　　　　 ∣☑m-tx.tar.xz　　　　　　　　　　　　　　　無い　　　384KB<br>
　　　　 ∣☑makeindex-w32.tar.xz　　　　　　　　 無い　　　203KB<br>
　　　　 ∣☑manual.tar.xz　　　　　　　　　　　　　無い　　　1.3MB<br>
　　　　 ∣☑mftools.tar.xz　　　　　　　　　　　　　無い　　　97KB<br>
　　　　 ∣☑newtxpx-boondoxfonts.tar.xz　　　　無い　　　5.0MB<br>
　　　　 ∣☑omegaj-w32.tar.xz　　　　　　　　   　　無い　　　1.0MB<br>
　　　　 ∣☑otfbeta.tar.xz　　　　　　　　　　 　　 無い　　　239KB<br>
　　　　 ∣☑pdftex-w32.tar.xz　　　　　　　　　　　無い　　　8.7MB<br>
　　　　 ∣☑pgfcontrib.tar.xz　　　　　　　　　　　無い　　　31MB<br>
　　　　 ∣☑plain2-2.54-w32.tar.xz　　　　　　　　無い　　　177KB<br>
　　　　 ∣☑platex.tar.xz　　　　　　　　　　　　　　無い　　　93KB<br>
　　　　 ∣☑pmx.tar.xz　　　　　　　　　　　　　　　無い　　　1.9MB<br>
　　　　 ∣☑pstoedit-w32.tar.xz　　　　　　　　　 無い　　　366KB<br>
　　　　 ∣☑pstricks.tar.xz　　　　　　　　　　　　無い　　　92.4MB<br>
　　　　 ∣☑psutils-w32.tar.xz　　　　　　　　　　無い　　　507KB<br>
　　　　 ∣☑ptex-w32.tar.xz　　　　　　　　　　　無い　　　4.2MB<br>
　　　　 ∣☑qpdf-w32.tar.xz　　　　　　　　　　　無い　　　698KB<br>
　　　　 ∣☑sam2p-w32.tar.xz　　　　　　　　　　無い　　　538KB<br>
　　　　 ∣☑t1fonts.tar.xz　　　　　　　　　　　　　無い　　　22.9MB<br>
　　　　 ∣☑t1utils-w32.tar.xz　　　　　　　　　　無い　　　119KB<br>
　　　　 ∣☑tex-gyre.tar.xz　　　　　　　　　　　　無い　　　12MB<br>
　　　　 ∣☑tex4htk-w32.tar.xz　　　　　　　　　　無い　　　1.6MB<br>
　　　　 ∣☑texinfotools-w32.tar.xz　　　　　　　無い　　　2.5MB<br>
　　　　 ∣☑tiff2png-w32.tar.xz　　　　　　　　　　無い　　　87KB<br>
　　　　 ∣☑timesnew.tar.xz　　　　　　　　　　　　無い　　　301KB<br>
　　　　 ∣☑ttf2pk-w32.tar.xz　　　　　　　　　　　無い　　　470KB<br>
　　　　 ∣☑ttf2pt1-w32.tar.xz　　　　　　　　　　無い　　　445KB<br>
　　　　 ∣☑txpx-pazofonts.tar.xz　　　　　　　　無い　　　1.6MB<br>
　　　　 ∣☑txtutil.tar.xz　　　　　　　　　　　　　　無い　　　3KB<br>
　　　　 ∣☑ums.tar.xz　　　　　　　　　　　　　　　無い　　　70KB<br>
　　　　 ∣☑uptex-w32.tar.xz　　　　　　　　　　　無い　　　2.1MB<br>
　　　　 ∣☑utf.tar.xz　　　　　　　　　　　　　　　　無い　　　706KB<br>
　　　　 ∣☑vf-a2bk.tar.xz　　　　　　　　　　　　　無い　　　10KB<br>
　　　　 ∣☑vf-n2bk.tar.xz　　　　　　　　　　　　　無い　　　13KB<br>
　　　　 ∣☑web2c-lib.tar.xz　　　　　　　　　　　　無い　　　26.4MB<br>
　　　　 ∣☑web2c-w32.tar.xz　　　　　　　　　　　無い　　　16.0MB<br>
　　　　 ∣☑win64/aleph-w64.tar.xz　　　　　　　無い　　　771KB<br>
　　　　 ∣☑win64/context-w64.tar.xz　　　　　　無い　　　1.1MB<br>
　　　　 ∣☑win64/cweb-w64.tar.xz　　　　　　　 無い　　　51KB<br>
　　　　 ∣☑win64/dvi2ps-w64.tar.xz　　　　　　　無い　　　689KB<br>
　　　　 ∣☑win64/dvi2tty-w64.tar.xz　　　　　　　無い　　　428KB<br>
　　　　 ∣☑win64/dvipdfm-w64.tar.xz　　　　　　無い　　　729KB<br>
　　　　 ∣☑win64/dvipsk-w64.tar.xz　　　　　　　無い　　　642KB<br>
　　　　 ∣☑win64/dvitools-w64.tar.xz　　　　　　無い　　　1.1MB<br>
　　　　 ∣☑win64/jtex-w64.tar.xz　　　　　　　　無い　　　570KB<br>
　　　　 ∣☑win64/lcdf-typetools-w64.tar.xz　　無い　　　695KB<br>
　　　　 ∣☑win64/luajittex-w64.tar.xz　　　　　 無い　　　2.5MB<br>
　　　　 ∣☑win64/luatex-w64.tar.xz　　　　　　 無い　　　2.5MB<br>
　　　　 ∣☑win64/m-tx-w64.tar.xz　　　　　　　 無い　　　391KB<br>
　　　　 ∣☑win64/makeindex-w64.tar.xz　　　　無い　　　477KB<br>
　　　　 ∣☑win64/mftools-w64.tar.xz　　　　　　無い　　　417KB<br>
　　　　 ∣☑win64/mftrace-w64.tar.xz　　　　　　無い　　　364KB<br>
　　　　 ∣☑win64/omegaj-w64.tar.xz　　　　　　　無い　　　392KB<br>
　　　　 ∣☑win64/pdftex-w64.tar.xz　　　　　　　無い　　　1.8MB<br>
　　　　 ∣☑win64/plain2-2.54-w64.tar.xz　　　　無い　　　45KB<br>
　　　　 ∣☑win64/pmx-w64.tar.xz　　　　　　　　無い　　　576KB<br>
　　　　 ∣☑win64/pstoedit-w64.tar.xz　　　　　　 無い　　　197KB<br>
　　　　 ∣☑win64/psutils-w64.tar.xz　　　　　　　無い　　　375KB<br>
　　　　 ∣☑win64/ptex-w64.tar.xz　　　　　　　　無い　　　1.5MB<br>
　　　　 ∣☑win64/sam2p-w64.tar.xz　　　　　　　無い　　　397KB<br>
　　　　 ∣☑win64/t1utils-w64.tar.xz　　　　　　　無い　　　39KB<br>
　　　　 ∣☑win64/tex4htk-w64.tar.xz　　　　　　　無い　　　405KB<br>
　　　　 ∣☑win64/tiff2png-w64.tar.xz　　　　　　　無い　　　93KB<br>
　　　　 ∣☑win64/ttf2pk-w64.tar.xz　　　　　　　無い　　　735KB<br>
　　　　 ∣☑win64/ttf2pt1-w64.tar.xz　　　　　　　無い　　　627KB<br>
　　　　 ∣☑win64/txtutil-w64.tar.xz　　　　　　　無い　　　42KB<br>
　　　　 ∣☑win64/uptex-w64.tar.xz　　　　　　　無い　　　1.4MB<br>
　　　　 ∣☑win64/web2c-w64.tar.xz　　　　　　　無い　　　2.1MB<br>
　　　　 ∣☑win64/xetex-w64.tar.xz　　　　　　　無い　　　8.1MB<br>
　　　　 ∣☑xetex-w32.tar.xz　　　　　　　　　　　無い　　　15.8MB<br>
　　　　 ∣☑xindy-w32.tar.xz　　　　　　　　　　　無い　　　1.6MB<br>
　　　　 ∣☑xymtex.tar.xz　　　　　　　　　　　　　無い　　　11MB<br>
　　　　 ∣☑xypic.tar.xz　　　　　　　　　　　　　　無い　　　4.1MB<br>

***

　　　dviout<br>
　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑tex318w.zip　　　　　　　　　　　　　　無い　　　2.9MB<br>

　　　Ghostscript<br>
　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑gs914w32full-gpl.exe　　　　　　　　無い　　　10.9MB<br>
　　　　 ∣☐gs914w64full-gpl.exe　　　　　　　　無い　　　11.1MB<br>

　　　GSview<br>
　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑gsv50w32.exe　　　　　　　　　　　　無い　　　1.9MB<br>
　　　　 ∣☐gsv50w64.exe　　　　　　　　　　　　無い　　　2.1MB<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>その他のソフトウェア</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　インストールするソフトウェアにチェックをいれてください．<br>
　　　　ソフト名　　　　　｜説明<br>
　　　　☑TeXworks　　　　TeXworks の設定<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>インストールの完了</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　インストールが終了しました完全な終了の為には再起動が必要です．<br>

<br>

　　　　インストール結果<br>
　　　　W32TeX　　　　　　　　　: 成功<br>
　　　　dviout　　　　　　　　　　 : 成功<br>
　　　　dvioutの設定　　　　　　: 成功<br>
　　　　Ghostscript　　　　　　　: 成功<br>
　　　　GSview　　　　　　　　　 : 成功<br>
　　　　環境変数　　　　　　　　 : 成功<br>
　　　　その他のソフトウェア　 : 成功<br>

<br>

　　　　インストールに失敗した場合はreadme等を参考にして手動インストールを試みてください．<br>
　　　　また詳細なインストール結果及びエラー情報はabtexinst_log.txtに保存されています<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>AbTeXinst.exe</strong></span>　　　　　　　　　　　　</ins></span><br>

<br>

　　再起動が必要です．今すぐ再起動しますか？<br>

<br>

　　　　　　　　　　\[ 　　はい(Y)　　 \]　\[　　いいえ(N)　　\]<br>

***

<!-- 【注意】「TeX インストーラ 3」は確かに手軽なインストーラですが，''「これでしかインストールできない」ようであれば，TeX に手を出す前に「昔はパソコン入門でやっていたようなこと」（ユーザ環境のカスタマイズ，コマンドライン上での作業など）を学んでおいた方が良いでしょう''。 -->
<!--  -->
<!-- 【↑】[[「TeX インストーラ 3」以外のインストーラー>TeX installers for Windows]]のことも時々でいいから思い出してあげてください。 -->

## 参考 {#r85dc0a5}

- [あべのりページ](http://www.math.sci.hokudai.ac.jp/~abenori/) ([阿部紀行さん](http://d.hatena.ne.jp/abenori/) ([twitter](https://twitter.com/abenori)))
    「作ったもの，書いたもの，その他」に TeX のインストーラやシェルなどがあります
    <!-- ↑一次配布元などではないので、このあたりが妥当 -->
    <!-- // 「インストーラの配布元だ」という揚げ足取りはご遠慮ください． -->
