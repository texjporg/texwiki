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

### リリース情報 {#f691af94}

2012-05-20 TeXインストーラ3 開発版 20120520<br>
2012-04-09 TeXインストーラ3 0.83<br>

### 注意事項 {#bb499d3c}

#### 0.82r1 以前のバージョンを使っている方へ {#sd8d9f1f}

角藤版 Ghostscript の配布パッケージが 9.05 から exe 形式になりました。<br>
最新版にアップデートしてください。<br>

#### 0.81r5 以前のバージョンを使っている方へ {#r1b99509}

&#x68;ttp://w32tex.org/current/<br>&#x68;ttp://w32tex.org/gs/<br>&#x68;ttp://w32tex.org/w32/<br>にアクセスできなくなりました．<br>最新版にアップデートしてください．<br>

#### 0.81r2 以前のバージョンを使っている方へ {#r1e6111a}

W32TeX の配布パッケージが tar.xz 形式になりました．<br>[texmf.cnf がない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=590) などのエラーが発生します．<br>
最新版にアップデートしてください．<br>

### インストール方法 {#gbf84ff3}

[TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)
から TeXインストーラ3 0.83 をダウンロードして展開 (解凍) します。<br>
実行方法は展開したフォルダーの "abtexinst.exe" をダブルクリックします。<br>

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
　　　　・TeXworks<br>

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
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　高度な設定　　\]</span> ← otf と luatex のパッケージを変更してインストールする場合は \[高度な設定\] をクリック<br>
　　　　☑環境変数PATHに実行ファイルのフォルダを追加する．<br>
　　　　☐ネットワークを使わない．（ローカルのファイルからインストールします．）<br>
　　　　☑ダウンロードをキャッシュから読み込まないようにする．<br>
　　　　　Proxy（HTTPのみ）　空欄ならシステム設定を使います．　　　　　　　　　　Port<br>
　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins>　　　　<ins>　　　　　</ins><br>

***

デフォルトでは otfbeta がインストールされます。<br>
otf パッケージの最新版は otfbeta です。<br>
3つの otf パッケージの中から自分の用途に合わせて選択してください。<br>
otf パッケージは複数インストールしてはいけません。<br>
複数インストールすると，最後に展開されたもので上書きされてしまいます。<br>

***

<span style="color:Black;background-color:#000080;"><ins>　<span style="color:White;"><strong>W32TeXの高度な設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　インストールするファイルを選んでください．<br>
　　　　◯ otf<br>
　　　　◯ otfdevel<br>
　　　　◎ otfbeta<br>

　　　　◎ luatex-w32<br>
　　　　◯ luatex-dev-w32<br>

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

<span style="color:Black;background-color:#000080;"><ins>　<span style="color:White;"><strong>その他のソフトのインストール設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　ダブルクリックで設定画面を開くことができます．<br>
　　　　ソフト名　　　　　｜説明<br>
　　　　TeXworks　　　　　TeXworks の設定<br>

***

デフォルトでは W32TeX のデフォルトの指定を使います。<br>

***

<span style="color:Black;background-color:#000080;"><ins>　　<span style="color:White;"><strong>TeXworks 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　☑ TeXworksのショートカットをデスクトップに作成する<br>
　TeXworks 利用時に埋め込むフォントを指定してください．<br>
　　◎ デフォルトの指定を使います．<br>
　　◯ msembed.map（ＭＳ 明朝・ＭＳ ゴシックを用います．）<br>
　　◯ hiraembed.map（ヒラギノフォントを用います．）<br>
　　◯ ipaembed.map（IPAex フォントを用います．）<br>
　　◯ kozembed.map（小塚明朝・ゴシック Pro を用います．）<br>
　　◯ koz6embed.map（小塚明朝・ゴシック Pro6N を用います．）<br>
　　◯ noembed.map（埋め込みません．TeXworks でのプレビューは不可．）<br>

***

<span style="color:Black;background-color:#000080;"><ins>　<span style="color:White;"><strong>インストールファイルの選択</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　ダウンロード&amp;インストールするファイルを選んでください．<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dviout<br>
　　　W32TeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣　　　 ∣☑tex318w.zip　　　　　　　　　　　　　　無い　　　2.5MB<br>
　　　　 ∣☑aleph-w32.tar.xz　　　　　　　　　　　無い　　　4.1MB　　　　　　 ∣<br>
　　　　 ∣☑biblatex-biber.tar.xz　　　　　　　　　無い　　　13.0MB　　　　Ghostscript<br>
　　　　 ∣☑context-doc.tar.xz　　　　　　　　　　無い　　　14.0MB　　　　　∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑context.tar.xz　　　　　　　　　　　　　無い　　　14.5MB　　　　　∣☐gs707w32full.zip　　　　　　　　　　　無い　　　6.8MB<br>
　　　　 ∣☑cweb-w32.tar.xz　　　　　　　　　　　無い　　　429KB　　　　　　∣☐gs870w32full-gpl.zip　　　　　　　　無い　　　12.5MB<br>
　　　　 ∣☑dvi2ps-w32.tar.xz　　　　　　　　　　無い　　　448KB　　　　　　∣☐gs871w32full-gpl.zip　　　　　　　　無い　　　16.0MB<br>
　　　　 ∣☑dvi2tty-w32.tar.xz　　　　　　　　　　無い　　　148KB　　　　　　∣☐gs900w32full-gpl.zip　　　　　　　　無い　　　14.4MB<br>
　　　　 ∣☑dvipdfm-w32.tar.xz　　　　　　　　　　無い　　　1.6MB　　　　　　∣☐gs901w32full-gpl.zip　　　　　　　　無い　　　14.8MB<br>
　　　　 ∣☑dvipsk-w32.tar.xz　　　　　　　　　　　無い　　　4.7MB　　　　　　∣☐gs902w32full-gpl.zip　　　　　　　　無い　　　14.8MB<br>
　　　　 ∣☑dvitools-w32.tar.xz　　　　　　　　　　無い　　　1.2MB　　　　　　∣☐gs904w32full-gpl.zip　　　　　　　　無い　　　15.1MB<br>
　　　　 ∣☑jtex-w32.tar.xz　　　　　　　　　　　　無い　　　1.0MB　　　　　　∣☑gs905w32full-gpl.exe　　　　　　　　無い　　　10.5MB<br>
　　　　 ∣☑latex.tar.xz　　　　　　　　　　　　　　　無い　　　6.7MB　　　　　　∣<br>
　　　　 ∣☑lcdf-typetools-w32.tar.xz　　　　　　無い　　　987KB　　　　GSview<br>
　　　　 ∣☑ltxpkgs.tar.xz　　　　　　　　　　　　　　無い　　　95.1MB　　　　　∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑luatex-w32.tar.xz　　　　　　　　　　　無い　　　23.2MB　　　　　∣☐gsv46w32.exe　　　　　　　　　　　　無い　　　1.5MB<br>
　　　　 ∣☑luatexja.tar.xz　　　　　　　　　　　　　無い　　　5.4MB　　　　　　∣☐gsv47w32.exe　　　　　　　　　　　　無い　　　1.4MB<br>
　　　　 ∣☑m-tx.tar.xz　　　　　　　　　　　　　　　無い　　　354KB　　 　　　∣☐gsv48w32.exe　　　　　　　　　　　　無い　　　1.4MB<br>
　　　　 ∣☑makeindex-w32.tar.xz　　　　　　　　無い　　　206KB　　 　　　　∣☐gsv49w32.exe　　　　　　　　　　　　無い　　　1.4MB<br>
　　　　 ∣☑manual.tar.xz　　　　　　　　　　　　　無い　　　1.6MB　　　　 　　∣☑gsv50w32.exe　　　　　　　　　　　　無い　　　1.9MB<br>
　　　　 ∣☑mftools.tar.xz　　　　　　　　　　　　　無い　　　99KB　　　　　　　∣<br>
　　　　 ∣☑oldinputs.tar.xz　　　　　　　　　　　　無い　　　1.2MB<br>
　　　　 ∣☑omegaj-w32.tar.xz　　　　　　　　   　　無い　　　993KB<br>
　　　　 ∣☑otfbeta.tar.xz　　　　　　　　　　 　　 無い　　　242KB<br>
　　　　 ∣☑pdftex-w32.tar.xz　　　　　　　　　　　無い　　　8.7MB<br>
　　　　 ∣☑plain2-2.54-w32.tar.xz　　　　　　　　無い　　　177KB<br>
　　　　 ∣☑platex.tar.xz　　　　　　　　　　　　　　無い　　　93KB<br>
　　　　 ∣☑pmx.tar.xz　　　　　　　　　　　　　　　無い　　　2.4MB<br>
　　　　 ∣☑psutils-w32.tar.xz　　　　　　　　　　無い　　　88KB<br>
　　　　 ∣☑ptex-w32.tar.xz　　　　　　　　　　　無い　　　4.5MB<br>
　　　　 ∣☑qpdf-w32.tar.xz　　　　　　　　　　　無い　　　552KB<br>
　　　　 ∣☑sam2p-w32.tar.xz　　　　　　　　　　無い　　　534KB<br>
　　　　 ∣☑t1fonts.tar.xz　　　　　　　　　　　　　無い　　　22.9MB<br>
　　　　 ∣☑t1utils-w32.tar.xz　　　　　　　　　　無い　　　119KB<br>
　　　　 ∣☑tex4htk-w32.tar.xz　　　　　　　　　　無い　　　1.5MB<br>
　　　　 ∣☑texinfotools-w32.tar.xz　　　　　　　無い　　　2.5MB<br>
　　　　 ∣☑tiff2png-w32.tar.xz　　　　　　　　　　無い　　　85KB<br>
　　　　 ∣☑timesnew.tar.xz　　　　　　　　　　　　無い　　　301KB<br>
　　　　 ∣☑ttf2pk-w32.tar.xz　　　　　　　　　　　無い　　　278KB<br>
　　　　 ∣☑ttf2pt1-w32.tar.xz　　　　　　　　　　無い　　　447KB<br>
　　　　 ∣☑txpx-pazofonts.tar.xz　　　　　　　　無い　　　1.6MB<br>
　　　　 ∣☑txtutil.tar.xz　　　　　　　　　　　　　　無い　　　3KB<br>
　　　　 ∣☑ums.tar.xz　　　　　　　　　　　　　　　無い　　　70KB<br>
　　　　 ∣☑uptex-w32.tar.xz　　　　　　　　　　　無い　　　2.2MB<br>
　　　　 ∣☑utf.tar.xz　　　　　　　　　　　　　　　　無い　　　706KB<br>
　　　　 ∣☑vf-a2bk.tar.xz　　　　　　　　　　　　　無い　　　10KB<br>
　　　　 ∣☑vf-n2bk.tar.xz　　　　　　　　　　　　　無い　　　13KB<br>
　　　　 ∣☑web2c-lib.tar.xz　　　　　　　　　　　無い　　　26.3MB<br>
　　　　 ∣☑web2c-w32.tar.xz　　　　　　　　　　無い　　　15.7MB<br>
　　　　 ∣☑xetex-w32.tar.xz　　　　　　　　　　　無い　　　15.0MB<br>
　　　　 ∣☑xindy-w32.tar.xz　　　　　　　　　　　無い　　　1.6MB<br>

***

<!-- 【注意】「TeX インストーラ 3」は確かに手軽なインストーラですが，''「これでしかインストールできない」ようであれば，TeX に手を出す前に「昔はパソコン入門でやっていたようなこと」（ユーザ環境のカスタマイズ，コマンドライン上での作業など）を学んでおいた方が良いでしょう''。 -->
<!--  -->
<!-- 【↑】[[「TeX インストーラ 3」以外のインストーラー>TeX installers for Windows]]のことも時々でいいから思い出してあげてください。 -->

### 参考 {#r85dc0a5}

- [LaTeX2eの設定: Windows](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/settingwindows.html)
- [もう難しいなんて言わせない！たった20分でできる簡単TeXインストールWindows編(2010年4月版)](http://did2memo.net/2012/04/23/easy-latex-install-windows-201204/), [TeXインストーラでインストールしたソフトウェア一式をアンインストールする方法](http://did2memo.net/2012/04/27/tex-uninstall/)
- [TeXっておいしいのかな？](http://d.hatena.ne.jp/filline/20120412/1334220540)
    <!-- -[[TeXの再インストール:http://iga3.sblo.jp/article/54514290.html]] -->
    <!-- -[[「TeXインストーラ3」でのインストール手順:http://tasusuweb.appspot.com/tex/install_latex.html]] -->
    <!-- -[[Tex入門: TeXの出力環境を作成する。(その1、Windows版):http://hichon.cocolog-nifty.com/blog/2011/10/tex-tex1windows.html]] -->
    <!-- -[[そうだ， TeX を入れなきゃ:http://www.baldanders.info/spiegel/log2/000547.shtml]] -->
    <!-- -[[TeXのインストール(Windows):http://www.clas.kitasato-u.ac.jp/~fujiwara/installTeXwin20111018/]] -->
    <!-- -[[WindowsにおけるTeX環境の構築:http://www.mclab.ics.ritsumei.ac.jp/~shibata/development.html#tex]] -->
