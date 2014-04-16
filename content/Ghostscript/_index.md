---
title: "Ghostscript"
url: "/Ghostscript/"
date: 2013-07-28T20:09:16Z
bookCollapseSection: true
pukiwiki: "Ghostscript"
---

# Ghostscript

## [Ghostscript](http://www.ghostscript.com/) {#odb09bf1}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Ghostscript.svg/200px-Ghostscript.svg.png" alt="Ghostscript" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Ghostscript とは {#a116e094}

Ghostscript は PostScript/Portable Document Format (PDF) インタプリタです。<br>
PostScript/PDF ファイルを読み込んで，画面やプリンタや色々な形式のファイルに出力できます。<br>
詳しくは次のページをご覧ください。<br>

- [Ghostscript Website](http://www.ghostscript.com/)
- [Ghostscript, GhostPCL, GhostXPS and MuPDF Downloads Page](http://www.ghostscript.com/download/)
- [SourceForge.net: Ghostscript](http://sourceforge.net/projects/ghostscript/)
- [ghostscript - Ghostscript document rendering and conversion - Google Project Hosting](https://code.google.com/p/ghostscript/)
- [ghostscript.com Mailing Lists](http://ghostscript.com/mailman/listinfo/)
    - [The gs-bugs Archives](http://ghostscript.com/pipermail/gs-bugs/)
    - [The gs-devel Archives](http://ghostscript.com/pipermail/gs-devel/)
- [http://downloads.ghostscript.com/public/](http://downloads.ghostscript.com/public/)
- [http://sourceforge.net/projects/ghostscript/files/GPL%20Ghostscript/](http://sourceforge.net/projects/ghostscript/files/GPL%20Ghostscript/)
    - [http://ftp.jaist.ac.jp/pub/sourceforge/g/gh/ghostscript/GPL%20Ghostscript/](http://ftp.jaist.ac.jp/pub/sourceforge/g/gh/ghostscript/GPL%20Ghostscript/)
    - [ftp://ftp.jaist.ac.jp/pub/sourceforge/g/gh/ghostscript/GPL%20Ghostscript/](ftp://ftp.jaist.ac.jp/pub/sourceforge/g/gh/ghostscript/GPL%20Ghostscript/)
- [https://code.google.com/p/ghostscript/downloads/list](https://code.google.com/p/ghostscript/downloads/list)

### お知らせ {#c2f53cec}

Ghostscript 8.71 およびそれ以前の Ver. には脆弱性がありますので、最新版に更新してください．<br>

- [Ghostscript における任意の PostScript コマンドを実行される脆弱性](http://jvndb.jvn.jp/ja/contents/2010/JVNDB-2010-003612.html)
- [Ghostscriptに脆弱性--不正なファイルでDoS攻撃やコード実行の危険](http://japan.cnet.com/news/business/20418937/)
- [JVNVU#644319: Ghostscript の TrueType bytecode interpreter に脆弱性](http://jvn.jp/cert/JVNVU644319/)

GSview は CTAN から提供されなくなりました．<br>
GSview 以外では SumatraPDF や PS_View でも PS ファイルを表示することが可能です．<br>

- [GSview is no longer avail­able from CTAN: it should be re­trieved from its home page.](http://www.ctan.org/pkg/gsview)

### 動作環境 {#e8b195dc}

Windows, OS X, Linux などの UNIX 互換 OS

### License {#g7897d81}

[GNU Affero General Public License (AGPL)](http://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=COPYING;hb=HEAD), [Artifex Commercial License](http://www.artifex.com/page/licensing-information.html)

最新版の Ghostscript のライセンスは GNU Affero General Public License (AGPL) ですが，過去のバージョンには [AFPL](http://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=COPYING.AFPL;hb=HEAD) 版の Ghostscript があります。<br>
AFPL 版は商業的な配布に制限があります。<br>
このあたりの事情は，ちょっと古いですが，Ghostscript の作者
[L. Peter Deutsch](https://www.wikipedia.org/wiki/L_Peter_Deutsch) の次のインタビュー記事をご覧ください。

- [L. Peter Deutsch in conversation with Stig Hackv&auml;n \[Internet Archive\]](http://web.archive.org/web/20041013082602/http://devlinux.org/deutsch-interview.html)

### リリース情報 {#jbfe1b2f}

- [http://git.ghostscript.com/?p=ghostpdl.git;a=tags](http://git.ghostscript.com/?p=ghostpdl.git;a=tags)
- [Ghostscript: News](http://www.ghostscript.com/News.html)

を参照．

### ChangeLog {#ua2f6680}

<!-- -[[git.ghostscript.com Git:http://git.ghostscript.com/]] -->
- [git.ghostscript.com Git - ghostpdl.git/summary](http://git.ghostscript.com/?p=ghostpdl.git)
    - [コミットログ](http://git.ghostscript.com/?p=ghostpdl.git;a=shortlog)

Ghostscript 9.05 で日本語 OpenType フォントに関するバグが修正されたようです．

```

```

- [更新履歴［Mac OS X バイナリ］ - マスクメロン](http://www.muskmelon.jp/?p=360)

### 縦書きに関して {#o39e11da}

GNU Ghostscript 7.07 は日本の gs-cjk の寄与を含み，和文の扱い (縦書き) に優れています。<br>
残念ながら Ghostscript 8 以降ではこれが削除されてしまいました．<br>
Ghostscript 7.07 と比べて，CJK （中国語・日本語・韓国語）の縦書きへの対応が不充分です．<br>
CID フォントや Windows API を使った日本語の表示はできます．<br>
Ghostscript 7.07 には脆弱性が存在するので縦書きが必要ない場合は最新版の Ghostscript を使用してください。<br>

### フロントエンド {#ka477802}

Microsoft Windows では GSview や PS_View，UNIX 互換 OS では gv という Ghostscript のフロントエンドがあります。<br>
これらはいずれも背後で Ghostscript を動かしています。<br>

## 不具合 {#o389845b}

### Ghostscript 9.14 でハイパーリンクが動作しない → Ghostscript 9.10 を使用する {#g8a715bc}

Ghostscript 9.14 はハイパーリンクが動作しません．<br>
Ghostscript 9.10 はハイパーリンクが動作します．<br>

- [Bug 695162 &ndash; Internal hyperlinks lost when converting to pdf](http://bugs.ghostscript.com/show_bug.cgi?id=695162)
- [Hyper Link fails in gs-9.14](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1292)
- [http://www.tug.org/pipermail/tex-live/2014-April/thread.html#35059](http://www.tug.org/pipermail/tex-live/2014-April/thread.html#35059)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035059.html](http://www.tug.org/pipermail/tex-live/2014-April/035059.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035060.html](http://www.tug.org/pipermail/tex-live/2014-April/035060.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035061.html](http://www.tug.org/pipermail/tex-live/2014-April/035061.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035062.html](http://www.tug.org/pipermail/tex-live/2014-April/035062.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035063.html](http://www.tug.org/pipermail/tex-live/2014-April/035063.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035064.html](http://www.tug.org/pipermail/tex-live/2014-April/035064.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035065.html](http://www.tug.org/pipermail/tex-live/2014-April/035065.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035066.html](http://www.tug.org/pipermail/tex-live/2014-April/035066.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035067.html](http://www.tug.org/pipermail/tex-live/2014-April/035067.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035068.html](http://www.tug.org/pipermail/tex-live/2014-April/035068.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035072.html](http://www.tug.org/pipermail/tex-live/2014-April/035072.html)
    - [http://www.tug.org/pipermail/tex-live/2014-April/035075.html](http://www.tug.org/pipermail/tex-live/2014-April/035075.html)

## Ghostscript for Microsoft Windows {#w33eec77}

[Ghostscript/Windows](/Ghostscript/Windows/) を参照．

## Ghostscript for OS X {#hc13e1b1}

Ghostscript/OS X を参照．

## Ghostscript for Linux {#xff4aa84}

[Ghostscript/Linux](/Ghostscript/Linux/) を参照．

## 使い方 {#odaff2e6}

[Ghostscript/使い方](</Ghostscript/使い方/>) を参照．

## 関連リンク {#we8f22aa}

- [ghostscriptのコマンドライン引数](http://sage-t.tumblr.com/post/71333720989/ghostscript)
- [Beyond Linux® From Scratch (Ghostscript)](http://lfsbookja.sourceforge.jp/BLFS/svn.ja/pst/gs.html)
- [Ghostscript についてちょっとだけ](http://d.hatena.ne.jp/naruoga/20130110/1357827274)
- [Windows 用 Ghostscript と GSview のインストール](http://www.nsknet.or.jp/~tony/TeX/install/win/gs.htm)（トニイさん）
- [Data storage for gs-cjk project](http://www.aihara.co.jp/~taiji/gyve/) (山田さん)
- [情報工学特別講義 II](http://www.nls.ics.saitama-u.ac.jp/~tohru/Lectures/2003/SLICS2/)
    - [A Guide to gs-cjk Project](http://www.nls.ics.saitama-u.ac.jp/~tohru/Lectures/2003/SLICS2/PDFs/guide_to_gs-cjk.distil.pdf) guide_to_gs-cjk.distil.pdf (PDF)
    - [A Guide to gs-cjk Project](http://www.nls.ics.saitama-u.ac.jp/~tohru/Lectures/2003/SLICS2/PDFs/guide_to_gs-cjk.slide.distil.pdf) guide_to_gs-cjk.slide.distil.pdf (PDF)
- [http://web.archiveorange.com/archive/v/vAtTlka8G6c0C2UJ4Kkr#GkcD2kaa2gXJUkc](http://web.archiveorange.com/archive/v/vAtTlka8G6c0C2UJ4Kkr#GkcD2kaa2gXJUkc)

<!-- * Comment [#z51688d5] -->
<!-- - 「PDF への欧文用フォントの埋め込み制御」で書き換えすべきファイルが、gs9.00、8.70では"Resource/Init/gs_pdfwr.ps"に移動しています。 - - 13th-note &new{2010-10-12 (火) 15:51:13}; -->
<!-- - 「PDFへの欧文用フォントの埋め込み制御」でgs_pdfwr.psについて/.standardfontsを書き換えずに，"/.distillersettings mark"の下の"/default mark"の下の設定(8.71だと104～130行目，最後の空行も含む)をコピーして/NeverEmbedの行を変更したpsfontsembedという新しい設定を作り，dvipdfmx -D "ps2pdf -dPDFSETTINGS=/psfontsembed %i %o"としても良いようです． - - stamura &new{2010-10-21 (木) 12:00:51}; -->
<!-- - 先ほどは上記のように書きましたが，その後調べてみると/AlwaysEmbed, /NeverEmbedがうまく働かない問題は"http://ghostscript.com/pipermail/gs-cvs/2009-March/009170.html"で解決されているようです．ただし，gs_pdfwr.psのdefaultでは/NeverEmbedが基本14フォントが指定されているので/AlwaysEmbedは効かず，基本14フォントから埋め込みたいフォントを除いたリストを/NeverEmbedに指定するということになりますが． - - stamura &new{2010-10-21 (木) 13:41:39}; -->
<!--  -->
<!-- #COMMENT -->
