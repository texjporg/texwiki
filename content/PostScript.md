---
title: "PostScript"
url: "/PostScript/"
date: 2004-09-19T16:42:27Z
pukiwiki: "PostScript"
---

# PostScript

## PostScript {#g9b8f6ae}

\[TODO\] 以下は古い内容です。
[Ghostscript](/Ghostscript/)，[PDFの作り方](</PDFの作り方/>)
に移行すべき内容がほとんどです。
どなたか書き直してください。

PostScript は業界標準のページ記述言語です。
技術情報は Adobe の
[Technical Notes for Developers](http://partners.adobe.com/asn/tech/ps/specifications.jsp)
ですべて得られます。
本では
[ページ記述言語 PostScriptチュートリアル&amp;クックブック](http://www.amazon.co.jp/exec/obidos/ASIN/4756100058/)，[PostScriptリファレンスマニュアル](http://www.amazon.co.jp/exec/obidos/ASIN/4756138225/)
がお薦めです（レファレンスは上記サイトからもダウンロードできます）。

Ghostscript は PostScript ソフトウェア RIP（インタープリタ）です。
最新バージョンは AFPL 版が 8.14，GPL 版が 7.07 です。
どちらも問題なく使えます（8.00 は問題あり）。
Windows 用のフロントエンドは GSview，X11 用のフロントエンドには gv，ggv があります。

- [POSTSCRIPT &amp; GHOSTSCRIPT Resources](http://www.geocities.com/SiliconValley/5682/postscript.html)
- [Ghostscript, Ghostview and GSview](http://www.cs.wisc.edu/~ghost/) (wisc.edu)
- [ghostscript.com](http://www.ghostscript.com/)
- [Ghostscript](http://sourceforge.net/projects/ghostscript/) (SourceForge)
- [WMF2EPS](http://www.wmf2eps.de.vu/) (シェアウェア。WindowsのPSプリンタドライバで簡単にEPSを作るツール。プレビューも付けられる)
- [Ghostscript 8.14 + GSview 4.6 の日本語版](http://auemath.aichi-edu.ac.jp/~khotta/ghost/index.html)
    (堀田さん＠愛教大)

- [松本隆太郎](http://www.rmatsumoto.org/tex-ps-pdf/)さん:
    綺麗で小さなPostScript及びPDFをTeXから作る / hyperrefと日本語 / 画像を含むPSファイルを小さくする

- [東北大物性理論研](http://www.cmpt.phys.tohoku.ac.jp/Busseiriron/r410/) (EPS, tgif などの話題あり)
- [PoweredKobe さん](http://member.nifty.ne.jp/~PoweredKobe/)リンク切れてます
    (フリーソフトでpdf作成，簡単ポストスクリプトの記述)

- [TeX Shack](http://www.mech.usp.ac.jp/~okumura/tex/tex.html) (奥村＠滋賀県立大さん)
- [PDFlib home page](http://www.pdflib.com/)
- 田中 哲（あきら）さんの [Japanized Ghostscript Information](http://www.matsusaka-u.ac.jp/mirror/akr/nonresearch/free-software/ghostscript/index.ja.html) (旧 JAIST コンテンツのミラー)
- [gs-cjk プロジェクト](http://www.gyve.org/gs-cjk/)
- [寺嶋さん](http://hp.vector.co.jp/authors/VA023018/)
    の EPS-draw，EPS-conv，EPS-merg などは便利そうです

- [PStill](http://www.pstill.com/) (Another PS-to-PDF utility)
- [Dia](http://www.gnome.org/projects/dia/) の [日本語化](http://dengaku.org/yasu/dia/)
- [Gimp-Print](http://gimp-print.sourceforge.net/) (高品質のプリンタドライバ)
- [Piece de l'Ensemble](http://pop-club.hp.infoseek.co.jp/) (安宅さん &amp; 荒川さん)
    Ghostscript 7.06 や dvipdfmx のインストール情報，AUC TeX，X-Symbol 等々

- [中島 靖](http://hp1.jonex.ne.jp/~nakajima.yasushi/) さん
    (日本語PDFを生成するPerlモジュール PDFJ がある。
    JIS X 4051にほぼ準拠した日本語組版ルールを組み込んであるとのこと)

- [ps2eps](http://www.telematik.informatik.uni-karlsruhe.de/~bless/ps2eps.html.en)
    (WindowsのPSプリンタドライバで作ったEPSはclipオプションを付けても外側を侵蝕することがあります。
    これを試してみてください)

- [pstoedit](http://www.pstoedit.net/)
- [GNU Ghostscript 7.05 のインストール方法](http://www.klavis.info/gnugs.html) /
    [Ghostscriptと GSviewのインストール](http://www.klavis.info/gsinst.html) (大友さん)

- [GNU Ghostscript 7.06 for Windows の導入](http://www.fan.gr.jp/~ring/doc/gs7.06.html) (新堂さん)
- PDF 作成に関しては[PDFの作り方](</PDFの作り方/>)も
