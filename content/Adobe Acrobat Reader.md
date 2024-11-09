---
title: "Adobe Acrobat Reader"
url: "/Adobe Acrobat Reader/"
date: 2022-10-22T03:37:04Z
pukiwiki: "Adobe Acrobat Reader"
---

# Adobe Acrobat Reader

## [Adobe Acrobat Reader](https://acrobat.adobe.com/jp/ja/acrobat/pdf-reader.html) {#k3c2311c}

Adobe Acrobat Reader は PDF ファイルの表示，印刷，注釈の追加が可能なソフトウェアです。

Windows 版の Adobe Acrobat Reader は PDF ファイルをロックしてしまうので，編集中の PDF ファイルのプレビューには向いていません。PDF ファイルのプレビューには [SumatraPDF](/SumatraPDF/), [Evince](/Evince/), [Okular](/Okular/), [qpdfview](/qpdfview/), [Sioyek](/Sioyek/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) などのビューワを用いて，Adobe Acrobat Reader を使用するのは最終確認や印刷時のみとするのがおすすめです。

Adobe Acrobat Reader で印刷がうまくいかない場合は [SumatraPDF](/SumatraPDF/) などの Adobe Acrobat Reader 以外のビューアで印刷してください。

- [QA: Excelで作成したグラフをpdfcropしたものを印刷すると線情報が無視される？ | TeX](https://okumuralab.org/tex/mod/forum/discuss.php?d=3820)

Adobe Acrobat Reader には Continuous と Classic が存在します。[PDFリーダー | Adobe Acrobat Reader](https://www.adobe.com/jp/acrobat/pdf-reader.html) からダウンロードした場合は Continuous になります。

- [エンタープライズ管理ガイド - 2 種類のトラック（Acrobat）](https://helpx.adobe.com/jp/acrobat/kb/cq04102108.html)

***

***

### お知らせ {#k350f003}

- Adobe Acrobat Reader 24.003.20112 以降に更新してください。Adobe Acrobat Reader 24.003.20054 およびそれ以前のバージョンには脆弱性が存在します。
    - [Adobe AcrobatおよびReaderの脆弱性（APSB24-70）に関する注意喚起](https://www.jpcert.or.jp/at/2024/at240018.html)
    - [Adobe Acrobat および Reader の脆弱性対策について(2024年9月)](https://www.ipa.go.jp/security/security-alert/2024/0911-adobereader.html)
- Adobe Acrobat Reader Version 2024 (64-bit) の DDE server name は AcroViewA24 です。
- [TeX Live Revision 48819](http://www.tug.org/svn/texlive?view=revision&revision=48819) で
    pdfddeservername.txt の中身が AcroViewR19 に変更されましたが
    Adobe Acrobat Reader 2019.008.20071 または Adobe Acrobat Reader 2019.008.20074 が起動していない状態で
    pdfopen file.pdf を実行すると Cannot contact a server. エラーが表示され
    file.pdf が開けないようです。
    Acrobat Reader が起動した状態では file.pdf を開くことができます。
    起動していない状態でも開ける方もおられるようです。--&gt;
    バージョン 2019.008.20074 と表示されるものでは，起動していない状態で開くことが
    できました。しかし環境によるかも知れません。いずれにしても
    起動していない状態では起動に時間がかかるでしょうから，起動した状態で pdfopen,
    pdfclose を繰り返すのが良いでしょう。

### 公式 Web ページ {#t103678c}

- [PDFリーダー | Adobe Acrobat Reader](https://www.adobe.com/jp/acrobat/pdf-reader.html)
- [Adobe Acrobat Readerモバイル版アプリ | PDFアプリ | Adobe Acrobat](https://www.adobe.com/jp/acrobat/mobile/acrobat-reader.html)
- [アドビ カスタマー サポート (@AdobeSupportJ) さん / X](https://x.com/AdobeSupportJ)
- [アドビの最新のプレスリリース | Adobe ニュースルーム](https://www.adobe.com/jp/about-adobe/newsroom.html)

### 動作環境 {#v8f82e43}

[Adobe Acrobat Reader の必要システム構成](https://helpx.adobe.com/jp/reader/system-requirements.html)

### リリース情報 {#y313b500}

- [Release Notes | Adobe Acrobat、Reader](https://helpx.adobe.com/acrobat/release-note/release-notes-acrobat-reader.html#AcrobatDCandAcrobatReaderDCContinuousTrackreleasenotes)
- [リリースノート | Adobe Acrobat、Reader](https://helpx.adobe.com/jp/acrobat/release-note/release-notes-acrobat-reader.html#AcrobatDCandAcrobatReaderDCContinuousTrackreleasenotes)
- [Acrobat Enterprise Release Notes &mdash; Acrobat-Acrobat Reader Release Notes](https://www.adobe.com/devnet-docs/acrobatetk/tools/ReleaseNotesDC/)

## ダウンロード/インストール {#ne09e93f}

<!-- -https://get.adobe.com/jp/reader/ -->
- [https://get.adobe.com/jp/reader/enterprise/](https://get.adobe.com/jp/reader/enterprise/)

### Windows {#l93a8183}

- Adobe Acrobat Reader
    - [https://helpx.adobe.com/jp/acrobat/kb/install-reader-dc-windows.html](https://helpx.adobe.com/jp/acrobat/kb/install-reader-dc-windows.html)
    - [64-bit Unified App Installer &mdash; Acrobat Desktop  Windows Deployment](https://www.adobe.com/devnet-docs/acrobatetk/tools/DesktopDeployment/singleinstaller.html)
    - [https://ardownload2.adobe.com/pub/adobe/acrobat/win/AcrobatDC/2400420243/AcroRdrDCx642400420243_ja_JP.exe](https://ardownload2.adobe.com/pub/adobe/acrobat/win/AcrobatDC/2400420243/AcroRdrDCx642400420243_ja_JP.exe)
- Adobe Acrobat Reader Font Pack (Continuous)
    - [https://helpx.adobe.com/jp/acrobat/kb/font-pack-spelling-dictionary-64-bit-windows.html](https://helpx.adobe.com/jp/acrobat/kb/font-pack-spelling-dictionary-64-bit-windows.html)
        <!-- - -https://helpx.adobe.com/jp/acrobat/kb/windows-font-packs-32-bit-reader.html -->

### macOS {#e9b65d66}

- Adobe Acrobat Reader
    - [https://helpx.adobe.com/jp/acrobat/kb/install-reader-dc-mac-os.html](https://helpx.adobe.com/jp/acrobat/kb/install-reader-dc-mac-os.html)
    - [解決済み: Acrobatを立ち上げると、無料体験版の使用開始またはログインを求められる - Adobe Community - 14637749](https://community.adobe.com/t5/acrobat%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A9%E3%83%A0-discussions/acrobat%E3%82%92%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%82%8B%E3%81%A8-%E7%84%A1%E6%96%99%E4%BD%93%E9%A8%93%E7%89%88%E3%81%AE%E4%BD%BF%E7%94%A8%E9%96%8B%E5%A7%8B%E3%81%BE%E3%81%9F%E3%81%AF%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%92%E6%B1%82%E3%82%81%E3%82%89%E3%82%8C%E3%82%8B/td-p/14637749?profile.language=ja)
    - [Acrobat SCA: QuickTimer](https://quicktimer.cocolog-nifty.com/icefloe/cat76058373/index.html)
    - [AcroRdrSCADC2400220759_MUI（Acrobat Readerの大幅仕様変更）](https://quicktimer.cocolog-nifty.com/icefloe/2024/05/post-be8c04.html)
    - [Acrobat SCA (SingleClientApp)版 Unified App 版　現時点まとめ（更新）](https://quicktimer.cocolog-nifty.com/icefloe/2024/06/post-37b2fa.html)
    - [Acrobat バージョン24からの　SCA版（SingleClientApp版）のアップデータの種類](https://quicktimer.cocolog-nifty.com/icefloe/2024/06/post-103718.html)
        <!-- - -https://ardownload2.adobe.com/pub/adobe/acrobat/mac/AcrobatDC/2400221005/AcroRdrSCADC2400221005_MUI.dmg -->
        <!-- - -https://ardownload2.adobe.com/pub/adobe/reader/mac/AcrobatDC/2400221005/AcroRdrDC_2400221005_MUI.dmg -->

- Adobe Acrobat Reader Font Pack (Continuous)
    - [https://helpx.adobe.com/jp/acrobat/kb/macintosh-font-packs--acrobat---reader-.html](https://helpx.adobe.com/jp/acrobat/kb/macintosh-font-packs--acrobat---reader-.html)

### Linux <a id="linux"></a> {#s5dbb0cf}

- [WineHQ  - Adobe Reader DC](https://appdb.winehq.org/objectManager.php?sClass=version&iId=32266)
- [Install Adobe Acrobat Reader DC on Ubuntu 22.04 LTS Jammy](https://www.how2shout.com/linux/install-adobe-acrobat-reader-dc-on-ubuntu-22-04-lts-jammy/)
- [How to Install Latest Adobe Acrobat Reader DC on Ubuntu 18.04 Bionic Beaver Linux with Wine](https://linuxconfig.org/how-to-install-latest-adobe-acrobat-reader-dc-on-ubuntu-18-04-bionic-beaver-linux-with-wine)
- [Ubuntu17.10 で Acrobat Pro DC 2017 を使う](https://motchy99.blog.fc2.com/blog-entry-103.html)
- [Ubuntu16.04 で Acrobat Reader DC 2017 を使う](https://motchy99.blog.fc2.com/blog-entry-102.html)

Arch Linux/Manjaro Linux の場合は

```
sudo pacman -S wine winetricks
```

Linux Mint/Debian/Ubuntu の場合は

```
sudo apt install wine64 winetricks
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

以下のコマンドを実行して Adobe Acrobat Reader (64-bit) をインストールします。

```
winetricks allfonts
winetricks mspatcha
winetricks atmlib
wget https://ardownload2.adobe.com/pub/adobe/acrobat/win/AcrobatDC/2400420243/AcroRdrDCx642400420243_ja_JP.exe
wine64 AcroRdrDCx642400420243_ja_JP.exe
```

Linux で Adobe Acrobat Reader (64-bit) を起動して file.pdf を表示するには

```
wine64 cmd /c start Acrobat.exe file.pdf
```

のように実行して「常に保護モードを無効にして開く(<ins>A</ins>)」を選択して OK を押します。

### Android {#k545c7f3}

- [Adobe Acrobat Reader - Apps on Google Play](https://play.google.com/store/apps/details?id=com.adobe.reader&hl=ja)
    <!-- -ftp://ftp.adobe.com/pub/adobe/reader/android/ -->

### iOS {#ac2b971a}

- [Adobe Acrobat Reader for PDF on the App Store](https://apps.apple.com/jp/app/adobe-reader/id469337564)

## アンインストール {#j28c578e}

- [Acrobat Reader（Adobe Reader） および Acrobat 用の Cleaner Tool について（Windows）](https://helpx.adobe.com/jp/acrobat/kb/cpsid_93506.html)

## ヘルプ {#je3a489e}

- [Adobe Acrobat Reader FAQ](https://helpx.adobe.com/jp/reader/faq.html)

## 環境設定 {#j7b6be9a}

### 使用状況に関する情報 {#jd9c4023}

初期設定では Adobe Acrobat Reader の使用方法に関する情報をアドビと共有します．
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
<!-- -[https://ikeda-jp2000.seesaa.net/article/201510article_2.html Win8.1(以降?)x64+Adobe Reader DC環境でのPDF検索とサムネイル表示] -->
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

## Windows で Adobe Acrobat Reader をコマンドラインから操作する方法 {#f9d733e4}

- [Parameters for Opening PDF Files （日本語版）](https://kb2.adobe.com/jp/cps/511/511759/attachments/511759_pdf_open_parameters.pdf)
- [Acrobat Readerのコマンドライン引数について](https://misora05.hatenablog.com/entry/2019/06/15/040628)
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

windows 版の TeX Live には Adobe Acrobat Reader で DDE を使用して PDF ファイルを開いたり閉じたりするためのツールである
pdfopen.exe, pdfclose.exe, pdfdde.exe が収録されています。これらは，Adobe Acrobat Reader
がファイルをロックするので，この状況を少しでも改善するために作成されたものです。つまり，

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

[https://fossies.org/windows/misc/texlive-windows-src2024.tar.xz/ktx/utils/pdfopen/pdfdde.c](https://fossies.org/windows/misc/texlive-windows-src2024.tar.xz/ktx/utils/pdfopen/pdfdde.c)

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

Windows 版の Adobe Acrobat Reader バージョン 2024 (64-bit)
に対して，pdfopen.exe, pdfclose.exe, pdfdde.exe を使うには，内容が

> AcroViewA24

という1行だけを持ち，ファイル名が

> [pdfddeservername.txt](https://www.tug.org/svn/texlive/trunk/Master/bin/windows/pdfddeservername.txt?view=markup)

であるファイルを，pdfdde.exe が存在するディレクトリに置いて下さい．

AcroViewA24 という1行だけの内容を持つ pdfddeservername.txt が pdfdde.exe と同じディレクトリに存在しない場合は

> Cannot contact a server.

というエラーが発生して PDF ファイルが開けません。

AcroViewA24 に設定して pdfopen foo.pdf を実行すると Cannot contact a server. エラーがでてファイルが開けない場合は

Windows PowerShell の場合は

```
start Acrobat;if($?){timeout 1};if($?){pdfopen foo.pdf}
```

コマンド プロンプトの場合は

```
start Acrobat && timeout 1 && pdfopen foo.pdf
```

のようにして実行してください。

また Windows 10 で PDF ファイルが Microsoft Edge や SumatraPDF など Adobe Acrobat Reader 以外の PDF Viewer に関連付けされている場合はエラーが発生します。

Microsoft Edge に関連付けされている場合は

> Cannot execute command "\[DocOpen("%s")\]" (error 16390)

SumatraPDF に関連付けされている場合は

> Cannot contact a server.

というエラーが発生して PDF ファイルが開けないので pdfopen.exe, pdfclose.exe, pdfdde.exe を使う場合は
PDF ファイルは Adobe Acrobat Reader に関連付けしておいてください。

pdfopen.exe で PDF ファイルを開くのに Acrobat.exe で直接開く場合と比べて時間がかかったり
PDF ファイルを SumatraPDF など Adobe Acrobat Reader 以外の PDF Viewer に関連付けしたい場合は
pdfopen.exe, pdfclose.exe, pdfdde.exe を使用せずに Acrobat.exe を直接使用してください。

MSYS2 の time コマンドで Acrobat.exe で直接開く場合と pdfopen.exe を使用する場合で比較すると
pdfopen.exe を使用した場合は Acrobat.exe で直接開く場合に比べて 12 倍 ～ 19 倍ぐらい時間がかかるようです．

```
$ time C:/Windows/System32/cmd.exe /c 'start Acrobat foo.pdf'

real    0m0.100s
user    0m0.015s
sys     0m0.000s

$ time C:/Windows/System32/cmd.exe /c 'pdfopen --file foo.pdf'

real    0m1.222s
user    0m0.000s
sys     0m0.015s
```

MSYS2 の time コマンドで「Acrobat.exe で開く --&gt; Acrobat.exe を終了する --&gt; Acrobat.exe で開く」場合と「Acrobat.exe で開く --&gt; pdfopen.exe で開いて pdfclose.exe で閉じる --&gt; Acrobat.exe で開く」場合を比較すると Acrobat.exe を終了して Acrobat.exe で開くほうが pdfopen.exe と pdfclose.exe で閉じて Acrobat.exe で開くよりも 2 倍早く動作するようです．

```

$ time C:/Windows/System32/cmd.exe /c 'start Acrobat foo.pdf && tasklist /fi "IMAGENAME eq Acrobat.exe" /nh | findstr "Acrobat.exe" >nul && taskkill /im Acrobat.exe & echo start Acrobat foo.pdf | cmd'

real    0m0.520s
user    0m0.000s
sys     0m0.015s

$ time C:/Windows/System32/cmd.exe /c 'start Acrobat foo.pdf && pdfopen --file foo.pdf && pdfclose --file foo.pdf & echo start Acrobat foo.pdf | cmd'

real    0m1.096s
user    0m0.015s
sys     0m0.000s
```

昔は Adobe Acrobat Reader の起動に時間がかかったため，Adobe Acrobat Reader を起動したままで
DDE を使用して PDF ファイルを閉じる方法が有効に機能していましたが，現在は DDE サーバー名が Adobe Acrobat Reader のバージョンによって変化するようになり[^1]
DDE の使い勝手が悪くなってしまったことと Adobe Acrobat Reader の起動が早くなったため
DDE でファイルを閉じなくても「Acrobat.exe で開く --&gt; Acrobat.exe を終了する --&gt; Acrobat.exe で開く」といった処理でも十分に実用的な速度で動作するようです．[^2]

ちなみに [LyX](/LyX/) では PDF ファイルを Adobe Acrobat Reader で表示するために pdfview.exe というプログラムを使用していますが旧バージョンの pdfview.exe では pdfopen.exe と pdfclose.exe で PDF ファイルを閉じる方法で運用していました。

- [https://git.lyx.org/gitweb/?p=lyx.git;a=blob;f=development/Win32/pdfview/pdfview-old.nsi;hb=HEAD](https://git.lyx.org/gitweb/?p=lyx.git;a=blob;f=development/Win32/pdfview/pdfview-old.nsi;hb=HEAD)

現在の LyX の pdfview.exe は pdfopen.exe, pdfclose.exe を使用して PDF ファイルを閉じる方法ではなく編集中の PDF ファイルが開かれている Adobe Acrobat Reader のウィンドウを閉じる方法で運用しているようです。[^3]

- [https://git.lyx.org/gitweb/?p=lyx.git;a=blob;f=development/Win32/pdfview/pdfview.nsi;hb=HEAD](https://git.lyx.org/gitweb/?p=lyx.git;a=blob;f=development/Win32/pdfview/pdfview.nsi;hb=HEAD)

### ファイルを開く {#id6d0918}

Windows PowerShell の場合は

```
Start-Process Acrobat 'foo.pdf'
```

コマンド プロンプトの場合は

```
start Acrobat "foo.pdf"
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
Start-Process Acrobat -ArgumentList ('/A', 'page=3', 'foo.pdf')
```

コマンド プロンプトの場合は

```
start Acrobat /A "page=3" "foo.pdf"
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

### 起動している Adobe Acrobat Reader を終了する {#pb5aeda1}

Windows PowerShell の場合は

```
Stop-Process -Name Acrobat
```

コマンド プロンプトの場合は

```
taskkill /IM Acrobat.exe
```

pdfdde.exe を使う場合は

```
echo exit | pdfdde
```

## SyncTeX {#s533a23f}

Adobe Acrobat Reader は [SyncTeX](/SyncTeX/) には対応していませんが synctex コマンドを使用して forward and inverse search を行うことができます．

### forward search {#s30ae8a0}

TeX ファイルの 30 行目に対応する PDF ファイルの該当するページにジャンプしたい場合は

```
synctex view -i "30:0:hoge.tex" -o "hoge.pdf" -x "rundll32 shell32,ShellExec_RunDLL Acrobat /A 'page=%{page+1}' '%{output}'"
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
- [Not able to instantiate PDF browser control from AcroPDF.dll using COM and .NET interop](http://stackoverflow.com/questions/2702164/not-able-to-instantiate-pdf-browser-control-from-acropdf-dll-using-com-and-net)
- [How can one open Adobe Reader with VBScript?](http://stackoverflow.com/questions/3298683/how-can-one-open-adobe-reader-with-vbscript)
- [Adobe Reader XIを利用してPDFファイルのページ数を取得するVBAマクロ](http://www.ka-net.org/blog/?p=2337)
- [Adobe Readerアプリケーションが終了してないです。](http://bbs.wankuma.com/index.cgi?mode=al2&namber=9751&KLOG=23)
- [レジストリから Acrobat・Adobe Reader のバージョン情報を得る方法について（別解）](http://helpx.adobe.com/jp/acrobat/kb/511265.html)
- \[[自分用メモ\] Acrobat ReaderでPDF開くたびに\[All tools\]が初期表示される問題、ようやく解決した…。環境設定メニュー「'All tools'ペインの前回の状態を記憶する」をONにしたら次から表示されなくなった。地味に毎回面倒だったんだよな](https://x.com/kozakitw/status/1844088642849185977)

[^1]: DDE サーバー名は Adobe Reader 9 までは AcroView という名前でしたが Adobe Reader X 以降は DDE サーバー名がバージョンによって変化するようになりました。Adobe Reader X は AcroViewR10, Adobe Reader XI は AcroViewR11, Adobe Acrobat Reader DC Version 2015 は AcroViewR15, Adobe Acrobat Reader DC Version 2017 は AcroViewR17, Adobe Acrobat Reader DC Version 2018 は AcroViewR18, Adobe Acrobat Reader DC Version 2019 は AcroViewR19, Adobe Acrobat Reader DC Version 2020 は AcroViewR20, Adobe Acrobat Reader DC Version 2021 (32-bit) は AcroViewR21, Adobe Acrobat Reader DC Version 2021 (64-bit) は AcroViewA21, Adobe Acrobat Reader Version 2022 (32-bit) は AcroViewR22, Adobe Acrobat Reader Version 2022 (64-bit) は AcroViewA22, Adobe Acrobat Reader Version 2023 (64-bit) は AcroViewA23, Adobe Acrobat Reader Version 2024 (64-bit) は AcroViewA24 です。
[^2]: ただし起動している Adobe Acrobat Reader を終了する方法では現在編集中の PDF ファイル以外の無関係の PDF ファイルを開いていても Adobe Acrobat Reader ごと終了してしまうという問題があります。
[^3]: 編集中の PDF ファイルが開かれている Adobe Acrobat Reader のウィンドウを閉じる方法であれば他の PDF ファイルを開いていても Adobe Acrobat Reader は終了することなくそのまま他の PDF ファイルが開いた状態を保つことができます。
