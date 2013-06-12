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
[W32TeX](/W32TeX/) (角藤さんのサイトでいう「フルインストール」の内容に相当)，dviout for Windows，[Ghostscript](/Ghostscript/)，[GSview](http://pages.cs.wisc.edu/~ghost/gsview/)
をサーバからダウンロードし，それらをインストールする方式を採っています。<br>
環境変数や dviout for Windows の初期設定など面倒な設定をユーザ自身で直接やらなくても済みますので，手軽なインストール方法として活用できるかと思います。

- [TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)

### 動作環境 {#ge54c4b7}

Windows 8, 7, Vista, XP

### リリース情報 {#f691af94}

2013-05-27 TeXインストーラ 3 0.84r2<br>
2013-03-07 プラグイン集<br>

### 注意事項 {#bb499d3c}

GSview が CTAN から提供されなくなりました． → [GSview is no longer avail­able from CTAN: it should be re­trieved from its home page.](http://www.ctan.org/pkg/gsview)<br>
GSview 以外では SumatraPDF や PS_View でも PS ファイルを表示することが可能です．<br>
GSview をインストールする場合は TeXインストーラ 3 を最新版にアップデートしてください．<br>

## インストール {#gbf84ff3}

[TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)
から TeXインストーラ3 の最新版をダウンロードして展開 (解凍) します。<br>
実行方法は展開したフォルダーの "abtexinst.exe" をダブルクリックします。<br>

***

<span style="color:Black;background-color:#000080;"><ins>　<span style="color:White;"><strong>TeXのインストール</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

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
　　◯ msmingoth.map（ＭＳ 明朝・ＭＳ ゴシックを用います．）<br>
　　◯ hiragino.map（ヒラギノフォントを用います．）<br>
　　◯ ipaex.map（IPAex フォントを用います．）<br>
　　◯ kozuka.map（小塚明朝・ゴシック Pro を用います．）<br>
　　◯ kozukapr6n.map（小塚明朝・ゴシック Pr6N を用います．）<br>
　　◯ noembed.map（埋め込みません．TeXworks でのプレビューは不可．[^1]）<br>
　　☐ 2004JIS 字形を使う．（デフォルトの指定を選択時は無視されます．）<br>

***

<span style="color:Black;background-color:#000080;"><ins>　<span style="color:White;"><strong>インストールファイルの選択</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　ダウンロード&amp;インストールするファイルを選んでください．<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dviout<br>
　　　W32TeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣　　　 ∣☑tex318w.zip　　　　　　　　　　　　　　無い　　　2.9MB<br>
　　　　 ∣☑aleph-w32.tar.xz　　　　　　　　　　　無い　　　4.1MB　　　　　　 ∣<br>
　　　　 ∣☑biblatex-biber.tar.xz　　　　　　　　　無い　　　14.8MB　　　　Ghostscript<br>
　　　　 ∣☑context-doc.tar.xz　　　　　　　　　　無い　　　14.0MB　　　　　∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑context.tar.xz　　　　　　　　　　　　　無い　　　15.0MB　　　　　∣☐gs707w32full.zip　　　　　　　　　　　無い　　　6.8MB<br>
　　　　 ∣☑cweb-w32.tar.xz　　　　　　　　　　　無い　　　426KB　　　　　　∣☐gs870w32full-gpl.zip　　　　　　　　無い　　　12.5MB<br>
　　　　 ∣☑dvi2ps-w32.tar.xz　　　　　　　　　　 無い　　　447KB　　　　　　∣☐gs871w32full-gpl.zip　　　　　　　　無い　　　16.0MB<br>
　　　　 ∣☑dvi2tty-w32.tar.xz　　　　　　　　　　無い　　　145KB　　　　　　∣☐gs900w32full-gpl.zip　　　　　　　　無い　　　14.4MB<br>
　　　　 ∣☑dvipdfm-w32.tar.xz　　　　　　　　　　無い　　　1.6MB　　　　　　∣☐gs901w32full-gpl.zip　　　　　　　　無い　　　14.8MB<br>
　　　　 ∣☑dvipsk-w32.tar.xz　　　　　　　　　　　無い　　　4.4MB　　　　　　∣☐gs902w32full-gpl.zip　　　　　　　　無い　　　14.8MB<br>
　　　　 ∣☑dvitools-w32.tar.xz　　　　　　　　　　無い　　　1.2MB　　　　　　∣☐gs904w32full-gpl.zip　　　　　　　　無い　　　15.1MB<br>
　　　　 ∣☑jtex-w32.tar.xz　　　　　　　　　　　　 無い　　　1.0MB　　　　　　∣☐gs905w32full-gpl.exe　　　　　　　　無い　　　10.5MB<br>
　　　　 ∣☑latex.tar.xz　　　　　　　　　　　　　　　無い　　　6.7MB　　　　　　∣☐gs906w32full-gpl.exe　　　　　　　　無い　　　10.6MB<br>
　　　　 ∣☑lcdf-typetools-w32.tar.xz　　　　　　無い　　　782KB　　　　　　∣☑gs907w32full-gpl.exe　　　　　　　　無い　　　10.5MB<br>
　　　　 ∣☑ltxpkgs.tar.xz　　　　　　　　　　　　　　無い　　　185MB　　　　　 ∣<br>
　　　　 ∣☑luajittex-w32.tar.xz　　　　　　　　　　無い　　　 3.8MB　　　　GSview<br>
　　　　 ∣☑luatex-w32.tar.xz　　　　　　　　　　　無い　　　 9.0MB　　　　　∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑luatexja.tar.xz　　　　　　　　　　　　　無い　　　2.8MB　　　　　 ∣☑gsv50w32.exe　　　　　　　　　　　　無い　　　1.9MB<br>
　　　　 ∣☑m-tx.tar.xz　　　　　　　　　　　　　　　無い　　　384KB　　　　　∣<br>
　　　　 ∣☑makeindex-w32.tar.xz　　　　　　　　 無い　　　203KB<br>
　　　　 ∣☑manual.tar.xz　　　　　　　　　　　　　無い　　　1.3MB<br>
　　　　 ∣☑mftools.tar.xz　　　　　　　　　　　　　無い　　　97KB<br>
　　　　 ∣☑omegaj-w32.tar.xz　　　　　　　　   　　無い　　　1.0MB<br>
　　　　 ∣☑otfbeta.tar.xz　　　　　　　　　　 　　 無い　　　239KB<br>
　　　　 ∣☑pdftex-w32.tar.xz　　　　　　　　　　　無い　　　8.7MB<br>
　　　　 ∣☑plain2-2.54-w32.tar.xz　　　　　　　　無い　　　177KB<br>
　　　　 ∣☑platex.tar.xz　　　　　　　　　　　　　　無い　　　93KB<br>
　　　　 ∣☑pmx.tar.xz　　　　　　　　　　　　　　　無い　　　1.9MB<br>
　　　　 ∣☑pstricks.tar.xz　　　　　　　　　　　　無い　　　92.4MB<br>
　　　　 ∣☑psutils-w32.tar.xz　　　　　　　　　　無い　　　85KB<br>
　　　　 ∣☑ptex-w32.tar.xz　　　　　　　　　　　無い　　　4.2MB<br>
　　　　 ∣☑qpdf-w32.tar.xz　　　　　　　　　　　無い　　　698KB<br>
　　　　 ∣☑sam2p-w32.tar.xz　　　　　　　　　　無い　　　538KB<br>
　　　　 ∣☑t1fonts.tar.xz　　　　　　　　　　　　　無い　　　22.9MB<br>
　　　　 ∣☑t1utils-w32.tar.xz　　　　　　　　　　無い　　　119KB<br>
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
　　　　 ∣☑web2c-lib.tar.xz　　　　　　　　　　　無い　　　26.4MB<br>
　　　　 ∣☑web2c-w32.tar.xz　　　　　　　　　　無い　　　14.8MB<br>
　　　　 ∣☑xetex-w32.tar.xz　　　　　　　　　　　無い　　　15.8MB<br>
　　　　 ∣☑xindy-w32.tar.xz　　　　　　　　　　　無い　　　1.6MB<br>

***

<!-- 【注意】「TeX インストーラ 3」は確かに手軽なインストーラですが，''「これでしかインストールできない」ようであれば，TeX に手を出す前に「昔はパソコン入門でやっていたようなこと」（ユーザ環境のカスタマイズ，コマンドライン上での作業など）を学んでおいた方が良いでしょう''。 -->
<!--  -->
<!-- 【↑】[[「TeX インストーラ 3」以外のインストーラー>TeX installers for Windows]]のことも時々でいいから思い出してあげてください。 -->

## 参考 {#r85dc0a5}

- [あべのりページ](http://www.math.sci.hokudai.ac.jp/~abenori/) ([阿部紀行さん](http://d.hatena.ne.jp/abenori/) ([twitter](https://twitter.com/abenori)))
    「作ったもの，書いたもの，その他」に TeX のインストーラやシェルなどがあります
    <!-- ↑一次配布元などではないので、このあたりが妥当 -->
    <!-- // 「インストーラの配布元だ」という揚げ足取りはご遠慮ください． -->

- [もう難しいなんて言わせない！たった20分でできる簡単TeXインストールWindows編(2013年6月版)](http://did2memo.net/2012/04/23/easy-latex-install-windows-201204/), [TeXインストーラでインストールしたソフトウェア一式をアンインストールする方法（2013年4月版）](http://did2memo.net/2012/04/27/tex-uninstall/)
- [WindowsへのTeXのインストール](http://www.ic.daito.ac.jp/~mizutani/tex/install.html)
- [日本語ＴｅＸ環境をMac Book で使いたい](http://bulesky58.com/%EF%BD%94%EF%BD%85%EF%BD%98macbook/.html)
- [インストーラ３でのTeXのインストール](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=974)
- windows8 で　texインストーラ３ ([qa:57051](https://okumuralab.org/~okumura/texfaq/qa/57051.html), [QA: windows8 で　texインストーラ３](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=953), [qa:57052](https://okumuralab.org/~okumura/texfaq/qa/57052.html), [qa:57058](https://okumuralab.org/~okumura/texfaq/qa/57058.html))
- [windowsでtex](http://d.hatena.ne.jp/imasusen/20130115/1358255816)
- [LaTeXのインストール と dvioutの設定](http://blogs.yahoo.co.jp/t_terui/64089471.html)
- [Emacsのorg-modeで数式をインライン表示する方法](http://d.hatena.ne.jp/natsutan/20120721/1342838705)
- [初心者がutf8でLaTeXとBibTeXを使うための一通りの準備（Windows編）](http://hnsn1202.hateblo.jp/entry/2012/06/07/030443)
- [数学語で文章を書くために、pLATeXを使う](http://d.hatena.ne.jp/foo22222/20120601/1338545446)
- [LaTeX2eの設定: Windows](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/settingwindows.html)
- [TeXっておいしいのかな？](http://d.hatena.ne.jp/filline/20120412/1334220540)

[^1]: TeXworks 0.4.5 では日本語のフォントを埋め込んでいない場合は ＭＳ 明朝 で表示されるようになりました．
