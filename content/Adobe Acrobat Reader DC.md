---
title: "Adobe Acrobat Reader DC"
url: "/Adobe Acrobat Reader DC/"
date: 2015-04-09T08:21:34Z
pukiwiki: "Adobe Acrobat Reader DC"
---

# Adobe Acrobat Reader DC

## [Adobe Acrobat Reader DC](https://acrobat.adobe.com/jp/ja/products/pdf-reader.html) {#k3c2311c}

Adobe Acrobat Reader DC は PDF ファイルを表示・印刷したり，注釈を追加したりするソフトウェアです．

Windows 版の Adobe Acrobat Reader DC は PDF ファイルをロックしてしまうので，編集中の PDF ファイルのプレビューには向いていません．PDF ファイルのプレビューには [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) などのビューワを用いて，Adobe Acrobat Reader DC を使用するのは最終確認や印刷時のみとするのがおすすめです．

Adobe Acrobat Reader DC には Continuous と Classic が存在します．[PDFリーダー、PDFビューア | Adobe Acrobat Reader DC](https://acrobat.adobe.com/jp/ja/products/pdf-reader.html) からダウンロードした場合は Continuous になります．

- [エンタープライズ管理ガイド - 2 種類のトラック（Acrobat DC）](https://helpx.adobe.com/jp/acrobat/kb/cq04102108.html)
- [エンタープライズ管理ガイド - トラックの比較とバージョン表記（Acrobat DC）](https://helpx.adobe.com/jp/acrobat/kb/cq04102125.html)

***

***

### 公式 Web ページ {#t103678c}

- [PDFリーダー、PDFビューア | Adobe Acrobat Reader DC](https://acrobat.adobe.com/jp/ja/products/pdf-reader.html)
- [iPad向けの無償モバイル版アプリとPDFビューア | Adobe Acrobat DC](https://acrobat.adobe.com/jp/ja/products/mobile-app.html)
- [iPhone向けの無償モバイル版アプリとPDFビューア | Adobe Acrobat DC](https://acrobat.adobe.com/jp/ja/products/mobile-app/iphone.html)
- [Androidフォン向けの無償モバイル版アプリとPDFビューア | Adobe Acrobat DC](https://acrobat.adobe.com/jp/ja/products/mobile-app/android.html)
- [Windows Phone向けの無償モバイル版アプリとPDFビューア | Adobe Acrobat DC](https://acrobat.adobe.com/jp/ja/products/mobile-app/windows-phone.html)
- [アドビ サポート担当 (adobesupportj) on Twitter](https://twitter.com/AdobeSupportJ)
- [ニュースルーム | Adobe](http://www.adobe.com/jp/news-room.html)

### 動作環境 {#v8f82e43}

[&#x5fc5;&#x8981;&#x30b7;&#x30b9;&#x30c6;&#x30e0;&#x69cb;&#x6210; &#x7c; Adobe Acrobat Reader DC](https://helpx.adobe.com/jp/reader/system-requirements.html)を参照．

### リリース情報 {#y313b500}

[Overview &mdash; Acrobat and Adobe Reader Release Notes](https://www.adobe.com/devnet-docs/acrobatetk/tools/ReleaseNotes/)

## ダウンロード {#ne09e93f}

### Windows {#l93a8183}

- Adobe Acrobat Reader DC
    - [http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Windows](http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Windows)
    - [ftp://ftp.adobe.com/pub/adobe/reader/win/](ftp://ftp.adobe.com/pub/adobe/reader/win/)
- Adobe Acrobat DC
    - [http://www.adobe.com/support/downloads/product.jsp?product=1&platform=Windows](http://www.adobe.com/support/downloads/product.jsp?product=1&platform=Windows)

### macOS {#e9b65d66}

- Adobe Acrobat Reader DC
    - [http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Macintosh](http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Macintosh)
    - [ftp://ftp.adobe.com/pub/adobe/reader/mac/](ftp://ftp.adobe.com/pub/adobe/reader/mac/)
- Adobe Acrobat DC
    - [http://www.adobe.com/support/downloads/product.jsp?product=1&platform=Macintosh](http://www.adobe.com/support/downloads/product.jsp?product=1&platform=Macintosh)

### Linux {#s5dbb0cf}

```
wget ftp://ftp.adobe.com/pub/adobe/reader/win/AcrobatDC/1700920044/AcroRdrDC1700920044_ja_JP.exe
wine AcroRdrDC1700920044_ja_JP.exe
cd ~/.wine/drive_c/users/Public/Application\ Data/Adobe/Setup/\{AC76BA86-7AD7-1041-7B44-AC0F074E4100\}
msiexec /i AcroRead.msi
```

Linux で Adobe Acrobat Reader DC を起動するには

```
wine cmd /c start AcroRd32.exe file.pdf
```

のように実行します。

### Android {#k545c7f3}

- [Adobe Acrobat DC – PDF Reader - Android Apps on Google Play](https://play.google.com/store/apps/details?id=com.adobe.reader&hl=ja)
- [ftp://ftp.adobe.com/pub/adobe/reader/android/](ftp://ftp.adobe.com/pub/adobe/reader/android/)

### iOS {#ac2b971a}

- [Adobe Acrobat DC – PDF Reader - iTunes - Apple](https://itunes.apple.com/jp/app/adobe-reader/id469337564?mt=8)

## アンインストール {#j28c578e}

- [Acrobat Reader（Adobe Reader） および Acrobat 用の Cleaner Tool について（Windows）](https://helpx.adobe.com/jp/acrobat/kb/cpsid_93506.html)

## ヘルプ {#je3a489e}

- [FAQ &#x7c; Adobe Acrobat Reader DC](https://helpx.adobe.com/jp/reader/faq.html)

## 環境設定 {#j7b6be9a}

### 使用状況に関する情報 {#jd9c4023}

初期設定では Adobe Acrobat Reader DC の使用方法に関する情報をアドビと共有します．
この機能を OFF にしたい場合はレジストリの

```
コンピューター\HKEY_CURRENT_USER\SOFTWARE\Adobe\CommonFiles\Usage\Reader DC
```

に存在する

```
名前 OptIn, 種類 REG_DWORD
```

の値のデータを

```
0
```

に修正します．

- \[[レジストリ\]Adobe Acrobat Reader DCの環境設定](http://www.ka-net.org/blog/?p=5529)

### Windows Explorer で PDF サムネールのプレビューを有効にする {#ef92bb00}

「Windows Explorer で PDF サムネールのプレビューを有効にする」 を ON にすることでサムネールのプレビューができるようになります．

> \[編集\] &gt; \[環境設定(N)...\] &gt; \[一般\] &gt; ☑Windows Explorer で PDF サムネールのプレビューを有効にする(B)

<!-- ■ Continuous Track の場合 -->
<!--  -->
<!-- -[http://blogs.yahoo.co.jp/naonori_msx/39965081.html Acrobat Reader DCの64ビットでサムネール表示] -->
<!-- -[http://dslabo.blog4.fc2.com/blog-entry-2292.html 実験る～む Windows版Acrobat DCに追加された、待望（？）の機能] -->
<!-- -[http://vergil.hateblo.jp/entry/2016/01/11/093214 Adobe Acrobat Reader DCのインストールでPDFの全文検索ができなくなる問題とその解決策] -->
<!-- -[http://ikeda-jp2000.at.webry.info/201510/article_2.html Wind8.1x64+Adobe Reader DC環境でのPDF検索とサムネイル表示について] -->
<!-- -[http://blog.livedoor.jp/digitaldolphins/archives/1756033.html 64ビットWindows 7で、PDFのサムネイル表示したい] -->
<!-- -[http://www.adobe.com/support/downloads/detail.jsp?ftpID=5542 Adobe - Acrobat : For Windows : PDF iFilter 64 11.0.01] -->
<!-- -https://github.com/kenjiuno/ThumbGensPack -->
<!-- - -https://github.com/kenjiuno/ThumbGensPack/releases -->
<!--  -->
<!-- ■ Classic Track の場合 -->
<!--  -->
<!-- -[https://forums.adobe.com/message/8660615 Windows版Acrobat DCのアイコンサムネイル表示について] -->
<!-- -[http://blogyujing.seesaa.net/article/436377991.html win7とAcrobat Reader DC でpdfファイルをサムネイル表示させる方法] -->
<!-- -[http://blog.livedoor.jp/do_gubako/archives/50025308.html PDFのサムネイルが表示されない] -->

## Windows で Adobe Acrobat Reader DC をコマンドラインから操作する方法 {#f9d733e4}

- [Acrobat および Adobe Reader のコマンドラインオプション](https://helpx.adobe.com/jp/acrobat/kb/510705.html)
- [AcrobatやReaderでPDFをコマンドラインで操作する方法](http://www.lifedesignedit.com/use_adobe_pdf_command_line_options)
- [Windows のコマンドラインから Acrobat や Adobe Reader を使用して印刷する方法](http://pdf-file.nnn2.com/?p=222)
- [DDEを用いてページを指定してPDFを表示する](http://kb2.adobe.com/jp/cps/510/510047.html)
- [Adobe Readerで指定したファイルの指定したページを開く](http://owlsperspective.blogspot.jp/2008/07/acroview.html)
- [http://stackoverflow.com/questions/619158/adobe-reader-command-line-reference](http://stackoverflow.com/questions/619158/adobe-reader-command-line-reference)
- [http://partners.adobe.com/public/developer/en/acrobat/PDFOpenParameters.pdf#page=5](http://partners.adobe.com/public/developer/en/acrobat/PDFOpenParameters.pdf#page=5)
- [http://kb2.adobe.com/jp/cps/511/511759/attachments/511759_pdf_open_parameters.pdf](http://kb2.adobe.com/jp/cps/511/511759/attachments/511759_pdf_open_parameters.pdf)
    <!-- -[[pdfopen and pdfclose:http://magic.aladdin.cs.cmu.edu/2005/07/15/pdfopen-and-pdfclose/]] -->
    <!-- -[[Man page acroread:http://www.dsm.fordham.edu/cgi-bin/man-cgi.pl?topic=acroread]] -->

### pdfopen.exe, pdfclose.exe, pdfdde.exe を使う場合の注意点 {#lff102b3}

TeX Live（win32 版）と W32TeX には Adobe Acrobat Reader DC で DDE を使用して PDF ファイルを開いたり閉じたりするためのツールである
pdfopen.exe, pdfclose.exe, pdfdde.exe が収録されています。これらは，Adobe による
PDF Reader がファイルをロックするので，この状況を少しでも改善するために作成された
ものです。つまり，

```
pdfopen --file foo.pdf
```

によって PDF ファイルをプレビューし，ソースを編集する前に

```
pdfclose --file foo.pdf
```

によって PDF ファイルをクローズするわけです。
pdfdde.exe の詳細については pdfdde.c を参照してください。

[https://fossies.org/windows/misc/w32tex-src.tar.gz/ktx/utils/pdfopen/pdfdde.c](https://fossies.org/windows/misc/w32tex-src.tar.gz/ktx/utils/pdfopen/pdfdde.c)

Windows 版の Adobe Acrobat Reader DC バージョン 2017
に対して，pdfopen.exe, pdfclose.exe, pdfdde.exe を使うには，内容が

```
AcroViewR17
```

という1行だけを持ち，ファイル名が

```
pdfddeservername.txt
```

であるファイルを，pdfdde.exe が存在するディレクトリに置いて下さい．

AcroViewR17 という1行だけの内容を持つ pdfddeservername.txt が pdfdde.exe と同じディレクトリに存在しない場合は

> Cannot contact a server.

というエラーが発生して PDF ファイルが開けません。

また Windows 10 で PDF ファイルが Microsoft Edge や SumatraPDF など Adobe Acrobat Reader DC 以外の PDF Viewer に関連付けされている場合はエラーが発生します。

Microsoft Edge に関連付けされている場合は

> Cannot execute command "\[DocOpen("%s")\]" (error 16390)

SumatraPDF に関連付けされている場合は

> Cannot contact a server.

というエラーが発生して PDF ファイルが開けないので pdfopen.exe, pdfclose.exe, pdfdde.exe を使う場合は
PDF ファイルは Adobe Acrobat Reader DC に関連付けしておいてください。

pdfopen.exe で PDF ファイルを開くのに AcroRd32.exe で直接開く場合と比べて時間がかかったり
PDF ファイルを SumatraPDF など Adobe Acrobat Reader DC 以外の PDF Viewer に関連付けしたい場合は
pdfopen.exe, pdfclose.exe, pdfdde.exe を使用せずに AcroRd32.exe を直接使用してください。

MSYS2 の time コマンドで AcroRd32.exe で直接開く場合と pdfopen.exe を使用する場合で比較すると
pdfopen.exe を使用した場合は AcroRd32.exe で直接開く場合に比べて 12 倍 ～ 19 倍ぐらい時間がかかるようです．

```
$ time C:/Windows/System32/cmd.exe /c 'start AcroRd32 foo.pdf'

real    0m0.100s
user    0m0.015s
sys     0m0.000s

$ time C:/Windows/System32/cmd.exe /c 'pdfopen --file foo.pdf'

real    0m1.222s
user    0m0.000s
sys     0m0.015s
```

MSYS2 の time コマンドで「AcroRd32.exe で開く --&gt; AcroRd32.exe を終了する --&gt; AcroRd32.exe で開く」場合と「AcroRd32.exe で開く --&gt; pdfopen.exe で開いて pdfclose.exe で閉じる --&gt; AcroRd32.exe で開く」場合を比較すると AcroRd32.exe を終了して AcroRd32.exe で開くほうが pdfopen.exe と pdfclose.exe で閉じて AcroRd32.exe で開くよりも 2 倍早く動作するようです．

```

$ time C:/Windows/System32/cmd.exe /c 'start AcroRd32 foo.pdf && tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" >nul && taskkill /im AcroRd32.exe & echo start AcroRd32 foo.pdf | cmd'

real    0m0.520s
user    0m0.000s
sys     0m0.015s

$ time C:/Windows/System32/cmd.exe /c 'start AcroRd32 foo.pdf && pdfopen --file foo.pdf && pdfclose --file foo.pdf & echo start AcroRd32 foo.pdf | cmd'

real    0m1.096s
user    0m0.015s
sys     0m0.000s
```

現在の Adobe Acrobat Reader DC は起動が早くなったため DDE でファイルを閉じなくても「AcroRd32.exe で開く --&gt; AcroRd32.exe を終了する --&gt; AcroRd32.exe で開く」といった処理で十分に実用的な速度で動作するようです．

### PDF ファイルを開く {#id6d0918}

Windows PowerShell の場合は

```
Start-Process AcroRd32 'foo.pdf'
```

コマンド プロンプトの場合は

```
start AcroRd32 "foo.pdf"
```

pdfopen.exe を使う場合は

```
pdfopen --file foo.pdf
```

あるいは簡単に

```
pdfopen foo.pdf
```

### 起動時に指定したページを表示する {#lc08871d}

3ページ目を表示するには以下のようにします．

Windows PowerShell の場合は

```
Start-Process AcroRd32 -ArgumentList ('/A', 'page=3', 'foo.pdf')
```

コマンド プロンプトの場合は

```
start AcroRd32 /A "page=3" "foo.pdf"
```

pdfopen.exe を使う場合は

```
pdfopen --file foo.pdf --page 3
```

### PDF ファイルを開いて閉じる {#h619779d}

pdfclose.exe を使用する場合は事前に pdfopen.exe でファイルを開いておく必要があります。

Windows PowerShell で pdfopen.exe と pdfclose.exe を使う場合は

```
pdfopen --file foo.pdf;if($?){pdfclose --file foo.pdf}
```

コマンド プロンプトで pdfopen.exe と pdfclose.exe を使う場合は

```
pdfopen --file foo.pdf && pdfclose --file foo.pdf
```

### Adobe Acrobat Reader DC を終了する {#pb5aeda1}

Windows PowerShell の場合は

```
Stop-Process -Name AcroRd32
```

コマンド プロンプトの場合は

```
taskkill /IM AcroRd32.exe
```

pdfdde.exe を使う場合は

```
echo exit | pdfdde
```

## SyncTeX {#s533a23f}

Adobe Acrobat Reader DC は [SyncTeX](/SyncTeX/) には対応していませんが synctex コマンドを使用して forward and inverse search を行うことができます．

### forward search {#s30ae8a0}

TeX ファイルの 30 行目に対応する PDF ファイルの該当するページにジャンプしたい場合は

```
synctex view -i "30:0:hoge.tex" -o "hoge.pdf" -x "rundll32 shell32,ShellExec_RunDLL AcroRd32 /A 'page=%{page+1}' '%{output}'"
```

のように実行します．

詳細については

```
synctex help view
```

を参照してください．

### inverse search {#f99c6c1f}

例えば [TeXstudio](/TeXstudio/) で PDF ファイルの 30 ページ目の x 座標 0, y 座標 0 に対応する TeX ファイルの該当する行にジャンプしたい場合は

```
synctex edit -o "30:0:0:hoge.pdf" -x "texstudio -line %{line} '%{input}'"
```

のように実行します．

詳細については

```
synctex help edit
```

を参照してください．

## 関連リンク {#m8d917f7}

- [Visual Basic を使用した Adobe Reader の制御について](http://kb2.adobe.com/jp/cps/255/2556.html)
- [Acrobat DDE Message 一覧](http://pdf-dde.nnn2.com/?p=43)
- [PDFの指定ページを表示する。](http://goungoun.dip.jp/app/fswiki/wiki.cgi/devnotebook?page=Visual+Studio+.NET+2003+C%23%A1%A2PDF%B4%D8%CF%A2)
- [Adobe Reader で PDF 文書を表示/印刷する方法](http://www.f3.dion.ne.jp/~element/msaccess/AcTipsAdobeReader.html)
- [DDE通信を使用してPDFファイルを印刷する](http://www.knowledge-base.jp/2010/02/06/pdf-7/)
- [Acrobat XIで保存したPDFファイルはTeXworksで使えない。](http://kilin.clas.kitasato-u.ac.jp/wordpress/?p=18487)
- [【悲報（？）】魔改造版Win2000でAdobe Reader DCが動作することが判明](http://blog.livedoor.jp/blackwingcat/archives/1898824.html)
- [黒翼猫/「Adobe Reader」の検索結果 - Twilog](http://twilog.org/tweets.cgi?id=BlackWingCat&word=Adobe+Reader)
- [Acrobat | 初心者備忘録](http://www.ka-net.org/blog/?cat=136)
- [「Adobe Acrobat Reader」カテゴリーの記事一覧 | Solomonレビュー\[redémarrage\]](http://solomon-review.net/category/adobe-acrobat-reader/)
- [スプールが終わるまでAdobeReaderを閉じる処理を待ちたいのですが、50ページ以上とかページ数が多いと、スプールが終わる前にAdobeReaderを閉じてしまいます。](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1421469214)
- [AcroReloadPDF.js](https://mirror.ctan.org/support/acroreloadpdf/)
- [Acrobat and PDF Library API Reference](http://livedocs.adobe.com/pdfl_sdk/10/PDFL_SDK10_HTMLHelp/API_References/Acrobat_API_Reference/)
- [Adobe Acrobat SDK Help](http://livedocs.adobe.com/acrobat_sdk/10/Acrobat10_HTMLHelp/wwhelp/wwhimpl/js/html/wwhelp.htm)
    - [Acrobat Interapplication Communication](http://livedocs.adobe.com/acrobat_sdk/10/Acrobat10_HTMLHelp/wwhelp/wwhimpl/common/html/wwhelp.htm?context=Acrobat10_SDK_HTMLHelp&file=Acro_Interapp_Commun_SectionPage.98.1.html)
- [http://www.adobe.com/devnet/acrobat/interapplication_communication.html](http://www.adobe.com/devnet/acrobat/interapplication_communication.html)
- [http://livedocs.adobe.com/acrobat_sdk/9.1/Acrobat9_1_HTMLHelp/wwhelp/wwhimpl/common/html/wwhelp.htm?context=Acrobat9_HTMLHelp&file=Reader_IAC.27.2.html](http://livedocs.adobe.com/acrobat_sdk/9.1/Acrobat9_1_HTMLHelp/wwhelp/wwhimpl/common/html/wwhelp.htm?context=Acrobat9_HTMLHelp&file=Reader_IAC.27.2.html)
- [MFCを利用しないプロジェクトからのIACの使用](http://kb2.adobe.com/jp/cps/510/510052.html)
- [VOLE - A Neat C++ COM/Automation Driver](http://vole.sourceforge.net/)
- [PDF documents printing using Acrobat dll](http://social.msdn.microsoft.com/Forums/br/csharplanguage/thread/802f2024-a7a4-49ca-83d1-850a1ef27dee)
- [Acrobat SDK をダウンロードする](http://atamoco.boy.jp/vbcs/windows.app/adobe-pdf/sdk-download.php)
- \[[ VB.NET / C# \] PDF ファイルをフォーム上に表示して印刷する](http://hensa40.cutegirl.jp/archives/1189)
- [WindowsフォームでPDFを扱う](http://wiki.livedoor.jp/kabamaro/d/Windows%A5%D5%A5%A9%A1%BC%A5%E0%A4%C7PDF%A4%F2%B0%B7%A4%A6)
- [.NET製Winフォーム上にPDFを表示する](http://d.hatena.ne.jp/foohogehoge/20091222/1261454425)
- [Not able to instantiate PDF browser control from AcroPDF.dll using COM and .NET interop](http://stackoverflow.com/questions/2702164/not-able-to-instantiate-pdf-browser-control-from-acropdf-dll-using-com-and-net)
- [How can one open Adobe Reader with VBScript?](http://stackoverflow.com/questions/3298683/how-can-one-open-adobe-reader-with-vbscript)
- [Adobe Reader XIを利用してPDFファイルのページ数を取得するVBAマクロ](http://www.ka-net.org/blog/?p=2337)
- [Adobe Acrobatのない環境でのPDFファイルのページ数取得](http://www.moug.net/faq/viewtopic.php?t=64473)
- [Adobe Readerアプリケーションが終了してないです。](http://bbs.wankuma.com/index.cgi?mode=al2&namber=9751&KLOG=23)
- [レジストリから Acrobat・Adobe Reader のバージョン情報を得る方法について（別解）](http://helpx.adobe.com/jp/acrobat/kb/511265.html)
- [Acrobat最新ニュース速報 - 日本のニュース](http://www.jp01.net/tag-Acrobat.html)
- \[[研究\] Adobe Acrobat Reader DC v2015 繁體中文版](http://shaurong.blogspot.com/2015/04/adobe-acrobat-reader-dc-v2015.html)
- \[[研究\] Adobe Acrobat Pro DC v2015 30天試用版](http://shaurong.blogspot.com/2015/04/adobe-acrobat-pro-dc-v2015-30.html)
