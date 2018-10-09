---
title: "Adobe Acrobat Reader DC"
url: "/Adobe Acrobat Reader DC/"
date: 2015-04-09T08:21:34Z
pukiwiki: "Adobe Acrobat Reader DC"
---

# Adobe Acrobat Reader DC

## [Adobe Acrobat Reader DC](https://acrobat.adobe.com/jp/ja/acrobat/pdf-reader.html) {#k3c2311c}

Adobe Acrobat Reader DC は PDF ファイルの表示，印刷，注釈の追加が可能なソフトウェアです．

Windows 版の Adobe Acrobat Reader DC は PDF ファイルをロックしてしまうので，編集中の PDF ファイルのプレビューには向いていません．PDF ファイルのプレビューには [SumatraPDF](/SumatraPDF/), [Evince](/Evince/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) などのビューワを用いて，Adobe Acrobat Reader DC を使用するのは最終確認や印刷時のみとするのがおすすめです．

Adobe Acrobat Reader DC には Continuous と Classic が存在します．[PDFリーダー、PDFビューア | Adobe Acrobat Reader DC](https://acrobat.adobe.com/jp/ja/acrobat/pdf-reader.html) からダウンロードした場合は Continuous になります．

- [エンタープライズ管理ガイド - 2 種類のトラック（Acrobat DC）](https://helpx.adobe.com/jp/acrobat/kb/cq04102108.html)
- [エンタープライズ管理ガイド - トラックの比較とバージョン表記（Acrobat DC）](https://helpx.adobe.com/jp/acrobat/kb/cq04102125.html)

***

***

### お知らせ {#k350f003}

- [TeX Live Revision 48819](http://www.tug.org/svn/texlive?view=revision&revision=48819) で pdfddeservername.txt の中身が AcroViewR19 に変更されましたが
    Adobe Acrobat Reader DC 19.008.20071 が起動していない状態で pdfopen file.pdf を実行すると file.pdf が開けないようです。
    Acrobat Reader DC が起動した状態では file.pdf を開くことができます。

- [Adobe Reader XI のサポートは 2017-10-15 に終了しました](https://www.adobe.com/jp/information/acrobat/endsupport.html)．

### 公式 Web ページ {#t103678c}

- [PDFリーダー、PDFビューア | Adobe Acrobat Reader DC](https://acrobat.adobe.com/jp/ja/acrobat/pdf-reader.html)
- [Acrobatモバイル版アプリ、iPad、iPhone、Android版PDFリーダー | Adobe Document Cloud](https://acrobat.adobe.com/jp/ja/mobile/acrobat-reader.html)
- [アドビ サポート担当 (AdobeSupportJ) on Twitter](https://twitter.com/AdobeSupportJ)
- [アドビの最新のプレスリリース | Adobe ニュースルーム](https://www.adobe.com/jp/about-adobe/newsroom.html)

### 動作環境 {#v8f82e43}

[&#x5fc5;&#x8981;&#x30b7;&#x30b9;&#x30c6;&#x30e0;&#x69cb;&#x6210; &#x7c; Adobe Acrobat Reader DC](https://helpx.adobe.com/jp/reader/system-requirements.html)

### リリース情報 {#y313b500}

- [リリースノート | Adobe Acrobat、Reader](https://helpx.adobe.com/jp/acrobat/release-note/release-notes-acrobat-reader.html)
- [DC Release Notes &mdash; Release Notes for Acrobat DC Products](https://www.adobe.com/devnet-docs/acrobatetk/tools/ReleaseNotesDC/)

## ダウンロード/インストール {#ne09e93f}

### Windows {#l93a8183}

- Adobe Acrobat Reader DC
    - [https://supportdownloads.adobe.com/product.jsp?product=10&platform=Windows](https://supportdownloads.adobe.com/product.jsp?product=10&platform=Windows)
    - [ftp://ftp.adobe.com/pub/adobe/reader/win/AcrobatDC/](ftp://ftp.adobe.com/pub/adobe/reader/win/AcrobatDC/)
- Adobe Acrobat DC
    - [https://supportdownloads.adobe.com/product.jsp?product=1&platform=Windows](https://supportdownloads.adobe.com/product.jsp?product=1&platform=Windows)

### macOS {#e9b65d66}

- Adobe Acrobat Reader DC
    - [https://supportdownloads.adobe.com/product.jsp?product=10&platform=Macintosh](https://supportdownloads.adobe.com/product.jsp?product=10&platform=Macintosh)
    - [ftp://ftp.adobe.com/pub/adobe/reader/mac/AcrobatDC/](ftp://ftp.adobe.com/pub/adobe/reader/mac/AcrobatDC/)
- Adobe Acrobat DC
    - [https://supportdownloads.adobe.com/product.jsp?product=1&platform=Macintosh](https://supportdownloads.adobe.com/product.jsp?product=1&platform=Macintosh)

### Linux <a id="linux"></a> {#s5dbb0cf}

- [How to Install Latest Adobe Acrobat Reader DC on Ubuntu 18.04 Bionic Beaver Linux with Wine](https://linuxconfig.org/how-to-install-latest-adobe-acrobat-reader-dc-on-ubuntu-18-04-bionic-beaver-linux-with-wine)
- [Ubuntu16.04 で Acrobat Reader DC 2017 を使う](http://motchy99.blog.fc2.com/blog-entry-106.html)

Arch Linux/Manjaro Linux の場合は

```
sudo pacman -S wine winetricks
```

Linux Mint/Debian/Ubuntu の場合は

```
sudo apt install wine-development winetricks
```

Fedora の場合は

```
sudo dnf install wine winetricks
```

openSUSE の場合は

```
sudo zypper install wine
```

を実行します。

以下のコマンドを実行して Adobe Acrobat Reader DC をインストールします。

```
winetricks mspatcha
wget ftp://ftp.adobe.com/pub/adobe/reader/win/AcrobatDC/1900820071/AcroRdrDC1900820071_ja_JP.exe
wine AcroRdrDC1900820071_ja_JP.exe
```

Linux で Adobe Acrobat Reader DC を起動して file.pdf を表示するには

```
wine cmd /c start AcroRd32.exe file.pdf
```

のように実行して「常に保護モードを無効にして開く(<ins>A</ins>)」を選択して OK を押します。

### Android {#k545c7f3}

- [Adobe Acrobat Reader - Apps on Google Play](https://play.google.com/store/apps/details?id=com.adobe.reader&hl=ja)
    <!-- -ftp://ftp.adobe.com/pub/adobe/reader/android/ -->

### iOS {#ac2b971a}

- [Adobe Acrobat Reader on the App Store](https://itunes.apple.com/jp/app/adobe-reader/id469337564?mt=8)

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

> \[編集(E)\] &gt; \[環境設定(<ins>N</ins>)...\] &gt; \[一般\] &gt; ☑Windows Explorer で PDF サムネールのプレビューを有効にする(B)

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

によって PDF ファイルをクローズするわけです。一番最初は，Reader
自身を間接的に立ち上げるので時間的に効率が悪いと思われますが，以降は Reader
はメモリに留まったままなので，編集中に pdfopen, pdfclose を繰り返すのは，
ある程度効率が良いと思われます。
pdfdde.exe の詳細については pdfdde.c を参照してください。

[https://fossies.org/windows/misc/w32tex-src.tar.xz/ktx/utils/pdfopen/pdfdde.c](https://fossies.org/windows/misc/w32tex-src.tar.xz/ktx/utils/pdfopen/pdfdde.c)

pdfdde.exe で使用できる機能に関してはコマンドラインから

```
echo list | pdfdde
```

を実行することで確認できます。
以下の機能が利用可能です。

```
Type Ctrl-Z to quit.
open <file>             open the file
close <file>            close the file
closeall                close all files
goto <file> <page>      goto the given <page> in <file>
gotoname <file> <dest>  goto the <dest> named destination in <file>
show                    show acroview
hide                    hide acroview
exit                    exit acroview and pdfdde
```

Windows 版の Adobe Acrobat Reader DC バージョン 2019
に対して，pdfopen.exe, pdfclose.exe, pdfdde.exe を使うには，内容が

```
AcroViewR19
```

という1行だけを持ち，ファイル名が

```
pdfddeservername.txt
```

であるファイルを，pdfdde.exe が存在するディレクトリに置いて下さい．

AcroViewR19 という1行だけの内容を持つ pdfddeservername.txt が pdfdde.exe と同じディレクトリに存在しない場合は

> Cannot contact a server.

というエラーが発生して PDF ファイルが開けません。

AcroViewR19 に設定して pdfopen foo.pdf を実行すると Cannot contact a server. エラーがでてファイルが開けない場合は

Windows PowerShell の場合は

```
start AcroRd32;if($?){timeout 1};if($?){pdfopen foo.pdf}
```

コマンド プロンプトの場合は

```
start AcroRd32 && timeout 1 && pdfopen foo.pdf
```

のようにして実行してください。

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

昔は Adobe Acrobat Reader の起動に時間がかかったため，Adobe Acrobat Reader を起動したままで
DDE を使用して PDF ファイルを閉じる方法が有効に機能していましたが，現在は DDE サーバー名が Adobe Acrobat Reader のバージョンによって変化するようになり[^1]
DDE の使い勝手が悪くなってしまったことと Adobe Acrobat Reader の起動が早くなったため
DDE でファイルを閉じなくても「AcroRd32.exe で開く --&gt; AcroRd32.exe を終了する --&gt; AcroRd32.exe で開く」といった処理でも十分に実用的な速度で動作するようです．[^2]

ちなみに [LyX](/LyX/) では PDF ファイルを Adobe Acrobat Reader DC で表示するために pdfview.exe というプログラムを使用していますが旧バージョンの pdfview.exe では pdfopen.exe と pdfclose.exe で PDF ファイルを閉じる方法で運用していました。

- [http://git.lyx.org/?p=lyx.git;a=blob;f=development/Win32/pdfview/pdfview-old.nsi;hb=HEAD](http://git.lyx.org/?p=lyx.git;a=blob;f=development/Win32/pdfview/pdfview-old.nsi;hb=HEAD)

現在の LyX の pdfview.exe は pdfopen.exe, pdfclose.exe を使用して PDF ファイルを閉じる方法ではなく編集中の PDF ファイルが開かれている Adobe Acrobat Reader DC のウィンドウを閉じる方法で運用しているようです。[^3]

- [http://git.lyx.org/?p=lyx.git;a=blob;f=development/Win32/pdfview/pdfview.nsi;hb=HEAD](http://git.lyx.org/?p=lyx.git;a=blob;f=development/Win32/pdfview/pdfview.nsi;hb=HEAD)

### ファイルを開く {#id6d0918}

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

### 起動時あるいはファイルを開くときに指定したページを表示する {#lc08871d}

起動時あるいはファイルを開くときに 3 ページ目を表示するには以下のようにします．

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

なお，指定したページを表示できるのは起動時あるいはファイルを開くときのみで，現在開かれているファイルに対して実行しても効果はなく指定したページで表示することはできないので注意してください。

### ファイルを開いて閉じる {#h619779d}

pdfclose.exe を使用する場合は事前に pdfopen.exe でファイルを開いておく必要があります。

Windows PowerShell で pdfopen.exe と pdfclose.exe を使う場合は

```
pdfopen --file foo.pdf;if($?){pdfclose --file foo.pdf}
```

コマンド プロンプトで pdfopen.exe と pdfclose.exe を使う場合は

```
pdfopen --file foo.pdf && pdfclose --file foo.pdf
```

### 起動している Adobe Acrobat Reader DC を終了する {#pb5aeda1}

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

- [MyTeXpert:Adobe Acrobat Reader DC](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?Adobe%20Acrobat%20Reader%20DC)
- [Visual Basic を使用した Adobe Reader の制御について](http://kb2.adobe.com/jp/cps/255/2556.html)
- [Acrobat DDE Message 一覧](http://pdf-dde.nnn2.com/?p=43)
- [PDFの指定ページを表示する。](http://goungoun.dip.jp/app/fswiki/wiki.cgi/devnotebook?page=Visual+Studio+.NET+2003+C%23%A1%A2PDF%B4%D8%CF%A2)
- [DDE通信を使用してPDFファイルを印刷する](http://www.knowledge-base.jp/2010/02/06/pdf-7/)
- [【悲報（？）】魔改造版Win2000でAdobe Reader DCが動作することが判明](http://blog.livedoor.jp/blackwingcat/archives/1898824.html)
- [黒翼猫/「Adobe Reader」の検索結果 - Twilog](http://twilog.org/tweets.cgi?id=BlackWingCat&word=Adobe+Reader)
- [Acrobat | 初心者備忘録](https://www.ka-net.org/blog/?cat=136)
- [「Adobe Acrobat Reader」カテゴリーの記事一覧 | Solomonレビュー\[redémarrage\]](http://solomon-review.net/category/adobe-acrobat-reader/)
- [スプールが終わるまでAdobeReaderを閉じる処理を待ちたいのですが、50ページ以上とかページ数が多いと、スプールが終わる前にAdobeReaderを閉じてしまいます。](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1421469214)
- [AcroReloadPDF.js](https://mirror.ctan.org/support/acroreloadpdf/)
- [PDF&nbsp;Library&nbsp;API&nbsp;Reference](https://help.adobe.com/pdfl_sdk/15/PDFL_SDK_HTMLHelp/PDFL_SDK_HTMLHelp/API_References/PDFL_API_Reference/)
- [Interapplication communication | Adobe Acrobat Developer Center](https://www.adobe.com/devnet/acrobat/interapplication_communication.html)
- [MFCを利用しないプロジェクトからのIACの使用](http://kb2.adobe.com/jp/cps/510/510052.html)
- [VOLE - A Neat C++ COM/Automation Driver](http://vole.sourceforge.net/)
- [PDF documents printing using Acrobat dll](http://social.msdn.microsoft.com/Forums/br/csharplanguage/thread/802f2024-a7a4-49ca-83d1-850a1ef27dee)
- \[[ VB.NET / C# \] PDF ファイルをフォーム上に表示して印刷する](http://hensa40.cutegirl.jp/archives/1189)
- [WindowsフォームでPDFを扱う](http://wiki.livedoor.jp/kabamaro/d/Windows%A5%D5%A5%A9%A1%BC%A5%E0%A4%C7PDF%A4%F2%B0%B7%A4%A6)
- [.NET製Winフォーム上にPDFを表示する](http://d.hatena.ne.jp/foohogehoge/20091222/1261454425)
- [Not able to instantiate PDF browser control from AcroPDF.dll using COM and .NET interop](http://stackoverflow.com/questions/2702164/not-able-to-instantiate-pdf-browser-control-from-acropdf-dll-using-com-and-net)
- [How can one open Adobe Reader with VBScript?](http://stackoverflow.com/questions/3298683/how-can-one-open-adobe-reader-with-vbscript)
- [Adobe Reader XIを利用してPDFファイルのページ数を取得するVBAマクロ](http://www.ka-net.org/blog/?p=2337)
- [Adobe Acrobatのない環境でのPDFファイルのページ数取得](http://www.moug.net/faq/viewtopic.php?t=64473)
- [Adobe Readerアプリケーションが終了してないです。](http://bbs.wankuma.com/index.cgi?mode=al2&namber=9751&KLOG=23)
- [レジストリから Acrobat・Adobe Reader のバージョン情報を得る方法について（別解）](http://helpx.adobe.com/jp/acrobat/kb/511265.html)

[^1]: DDE サーバー名は Adobe Reader 9 までは AcroView という名前でしたが Adobe Reader X 以降は DDE サーバー名がバージョンによって変化するようになりました。Adobe Reader X は AcroViewR10, Adobe Reader XI は AcroViewR11, Adobe Acrobat Reader DC Version 2015 は AcroViewR15, Adobe Acrobat Reader DC Version 2017 は AcroViewR17, Adobe Acrobat Reader DC Version 2018 は AcroViewR18, Adobe Acrobat Reader DC Version 2019 は AcroViewR19 です。
[^2]: ただし起動している Adobe Acrobat Reader DC を終了する方法では現在編集中の PDF ファイル以外の無関係の PDF ファイルを開いていても Adobe Acrobat Reader DC ごと終了してしまうという問題があります。
[^3]: 編集中の PDF ファイルが開かれている Adobe Acrobat Reader DC のウィンドウを閉じる方法であれば他の PDF ファイルを開いていても Adobe Acrobat Reader DC は終了することなくそのまま他の PDF ファイルが開いた状態を保つことができます。
