---
title: "AbTeXInstaller"
url: "/AbTeXInstaller/"
date: 2011-08-01T18:37:25Z
pukiwiki: "AbTeXInstaller"
---

# AbTeXInstaller

## [TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html) {#fa0ee5c0}

「[<strong>TeX インストーラ 3</strong>](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)」は，[W32TeX](/W32TeX/) (角藤版
pTeX) (角藤さんのサイトでいう「フルインストール」の内容に相当)，[dviout for Windows](/dviout/)，[Ghostscript](/Ghostscript/)，[GSview](https://mirror.ctan.org/help/Catalogue/entries/gsview.html)
をサーバからダウンロードし，それらをインストールする方式を採っています。<br>
環境変数や dviout for Windows の初期設定など面倒な設定をユーザ自身で直接やらなくても済みますので，テスト結果が集まれば，手軽なインストール方法として活用できるかと思います。

### 注意事項 {#bb499d3c}

<span style="color:Red;"><strong>0.81r5 以前のバージョンを使っている方へ</strong></span><br>

<span style="color:Red;"><strong>&#x68;ttp://w32tex.org/current/<br>&#x68;ttp://w32tex.org/gs/<br>&#x68;ttp://w32tex.org/w32/<br>にアクセスできなくなりました．最新版にアップデートしてください．</strong></span><br>

<span style="color:Red;"><strong>0.81r2 以前のバージョンを使っている方へ</strong></span><br>

<span style="color:Red;"><strong>W32TeX の配布パッケージが tar.xz 形式になりました．<br>[texmf.cnf がない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=590) などのエラーが発生するので，設定ファイル (abtexinst.ini) を削除して最新版にアップデートしてください．</strong></span><br>

### インストール方法 {#gbf84ff3}

[TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)
の実行方法は，リンク先から "abtexinst_0_81r7.zip" をダウンロードし，これを展開（解凍）します。そして "abtexinst.exe" を実行し，指示に従ってインストールします。

***

<span style="color:Black;background-color:#000080;"><ins>　<span style="color:White;"><strong>TeXのインストール</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　Windows用TeXの基本的なソフトウェア群である以下をダウンロード&amp;インストールし<br>
　　　　ます．<br>

<br>

　　　　・角藤さんによるW32TeX<br>
　　　　・dviout for Windows<br>
　　　　・Ghostscript<br>
　　　　・GSview<br>

***

<span style="color:Black;background-color:#000080;"><ins>　<span style="color:White;"><strong>TeXのインストール</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　W32TeXのインストール設定を行います．<br>

<br>

　　　　ファイル保存場所<br>
　　　　<ins>C:\w32tex\download\\</ins><br>
　　　　インストール先<br>
　　　　<ins>C:\w32tex\\</ins><br>
　　　　※ 保存先、インストール先には全角文字やスペースの入ったフォルダ名は使用できません．<br>
　　　　URL<br>
　　　　　　<ins>&#x66;tp://ftp.kddilabs.jp/TeX/ptex-win32/current/</ins><br>
　　　　　　☐一覧以外を使う（↓に入力）<br>
　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>

<br>

　　　　☐ネットワークを使わない．（ローカルのファイルからインストールします．）<br>
　　　　☑ダウンロードをキャッシュから読み込まないようにする．<br>
　　　　　Proxy（HTTPのみ）　空欄ならシステム設定を使います．　　　　　　　　　　Port<br>
　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins>　　　　<ins>　　　　　</ins><br>

***

<span style="color:Black;background-color:#000080;"><ins>　<span style="color:White;"><strong>dviout, Ghostscript, GSviewのインストール設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　dviout，Ghostscript，GSviewのインストール設定を行います．<br>

<br>

　　　　dvioutのURL<br>
　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;"><ins>&#x66;tp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current/</ins></span><br> <!-- 　　　　　　　　☐一覧以外を使う（↓に入力）&br; -->
　　　　　　　　☑一覧以外を使う（↓に入力）<br> <!-- 　　　　　　　　%%%　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　%%%&br; -->
　　　　　　　　<ins>&#x66;tp://ftp.kddilabs.jp/TeX/dviout/current/</ins><br>
　　　　GhostscriptのURL<br>
　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;"><ins>&#x68;ttp://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/</ins></span><br> <!-- 　　　　　　　　☐一覧以外を使う（↓に入力）&br; -->
　　　　　　　　☑一覧以外を使う（↓に入力）<br> <!-- 　　　　　　　　%%%　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　%%%&br; -->
　　　　　　　　<ins>&#x66;tp://ftp.kddilabs.jp/TeX/ptex-win32/gs/</ins><br>
　　　　GSviewのURL<br>
　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;"><ins>&#x68;ttp://www.ring.gr.jp/pub/text/CTAN/support/ghostscript/ghostgum/</ins></span><br> <!-- 　　　　　　　　☐一覧以外を使う（↓に入力）&br; -->
　　　　　　　　☑一覧以外を使う（↓に入力）<br> <!-- 　　　　　　　　%%%　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　%%%&br; -->
　　　　　　　　<ins>&#x66;tp://ftp.kddilabs.jp/CTAN/support/ghostscript/ghostgum/</ins><br>
　　　　※ 保存先，proxy，portの設定はTeXのものを使います．<br>

***

<span style="color:Black;background-color:#000080;"><ins>　<span style="color:White;"><strong>インストールファイルの選択</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　ダウンロード&amp;インストールするファイルを選んでください．<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dviout<br>
　　　W32TeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣　　　 ∣☑tex318w.zip　　　　　　　　　　　　　　無い　　　2.5MB<br>
　　　　 ∣☑aleph-w32.tar.xz　　　　　　　　　　　無い　　　4.1MB　　　　　　 ∣<br>
　　　　 ∣☑biblatex-biber.tar.xz　　　　　　　　　無い　　　20.4MB　　　　Ghostscript<br>
　　　　 ∣☑context-doc.tar.xz　　　　　　　　　　無い　　　14.0MB　　　　　∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑context.tar.xz　　　　　　　　　　　　　無い　　　14.1MB　　　　　∣☐gs707w32full.zip　　　　　　　　　　　無い　　　6.8MB<br>
　　　　 ∣☑cweb-w32.tar.xz　　　　　　　　　　　無い　　　429KB　　　　　　∣☐gs870w32full-gpl.zip　　　　　　　　無い　　　12.5MB<br>
　　　　 ∣☑dvi2ps-w32.tar.xz　　　　　　　　　　無い　　　451KB　　　　　　∣☐gs871w32full-gpl.zip　　　　　　　　無い　　　16.0MB<br>
　　　　 ∣☑dvi2tty-w32.tar.xz　　　　　　　　　　無い　　　101KB　　　　　　∣☐gs900w32full-gpl.zip　　　　　　　　無い　　　14.4MB<br>
　　　　 ∣☑dvipdfm-w32.tar.xz　　　　　　　　　　無い　　　1.6MB　　　　　　∣☐gs901w32full-gpl.zip　　　　　　　　無い　　　14.8MB<br>
　　　　 ∣☑dvipsk-w32.tar.xz　　　　　　　　　　　無い　　　4.7MB　　　　　　∣☐gs902w32full-gpl.zip　　　　　　　　無い　　　14.8MB<br>
　　　　 ∣☑dvitools-w32.tar.xz　　　　　　　　　　無い　　　1.2MB　　　　　　∣☐gs904w32full-gpl.zip　　　　　　　　無い　　　15.1MB<br>
　　　　 ∣☑jtex-w32.tar.xz　　　　　　　　　　　　無い　　　1.0MB　　　　　　∣☑gs905w32full-gpl.exe　　　　　　　　無い　　　10.5MB<br>
　　　　 ∣☑latex.tar.xz　　　　　　　　　　　　　　　無い　　　6.7MB　　　　　　∣<br>
　　　　 ∣☑lcdf-typetools-w32.tar.xz　　　　　　無い　　　988KB　　　　GSview<br>
　　　　 ∣☑ltxpkgs.tar.xz　　　　　　　　　　　　　　無い　　　92.2MB　　　　　∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑luatex-w32.tar.xz　　　　　　　　　　　無い　　　20.0MB　　　　　∣☐gsv46w32.exe　　　　　　　　　　　　無い　　　1.5MB<br>
　　　　 ∣☑makeindex-w32.tar.xz　　　　　　　　無い　　　206KB　　 　　　　∣☐gsv47w32.exe　　　　　　　　　　　　無い　　　1.4MB<br>
　　　　 ∣☑manual.tar.xz　　　　　　　　　　　　　無い　　　1.6MB　　　　 　　∣☐gsv48w32.exe　　　　　　　　　　　　無い　　　1.4MB<br>
　　　　 ∣☑mftools.tar.xz　　　　　　　　　　　　　無い　　　100KB　　　　　　∣☐gsv49w32.exe　　　　　　　　　　　　無い　　　1.4MB<br>
　　　　 ∣☑oldinputs.tar.xz　　　　　　　　　　　　無い　　　1.2MB　　　　　　 ∣☑gsv50w32.exe　　　　　　　　　　　　無い　　　1.9MB<br>
　　　　 ∣☑omegaj-w32.tar.xz　　　　　　　　   　　無い　　　993KB　　　　　　∣<br>
　　　　 ∣☑otfdevel.tar.xz　　　　　　　　　　 　　無い　　　241KB<br>
　　　　 ∣☑pdftex-w32.tar.xz　　　　　　　　　　　無い　　　8.6MB<br>
　　　　 ∣☑plain2-2.54-w32.tar.xz　　　　　　　　無い　　　177KB<br>
　　　　 ∣☑platex.tar.xz　　　　　　　　　　　　　　無い　　　93KB<br>
　　　　 ∣☑psutils-w32.tar.xz　　　　　　　　　　無い　　　88KB<br>
　　　　 ∣☑ptex-w32.tar.xz　　　　　　　　　　　無い　　　4.5MB<br>
　　　　 ∣☑qpdf-w32.tar.xz　　　　　　　　　　　無い　　　595KB<br>
　　　　 ∣☑sam2p-w32.tar.xz　　　　　　　　　　無い　　　536KB<br>
　　　　 ∣☑t1fonts.tar.xz　　　　　　　　　　　　　無い　　　15.1MB<br>
　　　　 ∣☑t1utils-w32.tar.xz　　　　　　　　　　無い　　　119KB<br>
　　　　 ∣☑tex4htk-w32.tar.xz　　　　　　　　　　無い　　　1.5MB<br>
　　　　 ∣☑texinfotools-w32.tar.xz　　　　　　　無い　　　2.5MB<br>
　　　　 ∣☑tiff2png-w32.tar.xz　　　　　　　　　　無い　　　92KB<br>
　　　　 ∣☑timesnew.tar.xz　　　　　　　　　　　　無い　　　301KB<br>
　　　　 ∣☑ttf2pk-w32.tar.xz　　　　　　　　　　　無い　　　273KB<br>
　　　　 ∣☑ttf2pt1-w32.tar.xz　　　　　　　　　　無い　　　445KB<br>
　　　　 ∣☑txpx-pazofonts.tar.xz　　　　　　　　無い　　　1.6MB<br>
　　　　 ∣☑txtutil.tar.xz　　　　　　　　　　　　　　無い　　　3KB<br>
　　　　 ∣☑ums.tar.xz　　　　　　　　　　　　　　　無い　　　70KB<br>
　　　　 ∣☑uptex-w32.tar.xz　　　　　　　　　　　無い　　　2.5MB<br>
　　　　 ∣☑utf.tar.xz　　　　　　　　　　　　　　　　無い　　　706KB<br>
　　　　 ∣☑vf-a2bk.tar.xz　　　　　　　　　　　　　無い　　　10KB<br>
　　　　 ∣☑vf-n2bk.tar.xz　　　　　　　　　　　　　無い　　　13KB<br>
　　　　 ∣☑web2c-lib.tar.xz　　　　　　　　　　　無い　　　26.4MB<br>
　　　　 ∣☑web2c-w32.tar.xz　　　　　　　　　　無い　　　15.5MB<br>
　　　　 ∣☑xetex-w32.tar.xz　　　　　　　　　　　無い　　　13.9MB<br>
　　　　 ∣☑xindy-w32.tar.xz　　　　　　　　　　　無い　　　1.6MB<br>

***

【注意】「TeX インストーラ 3」は確かに手軽なインストーラですが，<strong>「これでしかインストールできない」ようであれば，TeX に手を出す前に「昔はパソコン入門でやっていたようなこと」（ユーザ環境のカスタマイズ，コマンドライン上での作業など）を学んでおいた方が良いでしょう</strong>。

### 参考 {#r85dc0a5}

- [「TeXインストーラ3」でのインストール手順](http://tasusuweb.appspot.com/tex/install_latex.html)
- [Tex入門: TeXの出力環境を作成する。(その1、Windows版)](http://hichon.cocolog-nifty.com/blog/2011/10/tex-tex1windows.html)
- [そうだ， TeX を入れなきゃ](http://www.baldanders.info/spiegel/log2/000547.shtml)
- [TeXのインストール(Windows)](http://www.clas.kitasato-u.ac.jp/~fujiwara/installTeXWin20111018.html/)
- [LaTeX2eの設定: Windows](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/settingwindows.html)
    <!-- -[[WindowsにおけるTeX環境の構築:http://www.mclab.ics.ritsumei.ac.jp/~shibata/development.html#tex]] -->
