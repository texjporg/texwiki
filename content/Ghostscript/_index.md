---
title: "Ghostscript"
url: "/Ghostscript/"
date: 2013-07-28T20:09:16Z
bookCollapseSection: true
pukiwiki: "Ghostscript"
---

# Ghostscript

## [Ghostscript](https://www.ghostscript.com/) {#odb09bf1}

Ghostscript は [PostScript](/PostScript/)/[Portable Document Format (PDF)](/PDF/) インタプリタです．
PostScript/PDF ファイルを読み込んで，画面やプリンタや色々な形式のファイルに出力できます．
詳しくは次のページをご覧ください．

- [Ghostscript Website](https://www.ghostscript.com/)
- [ghostscript.com Mailing Lists](https://ghostscript.com/mailman/listinfo/)
    - [The gs-bugs Archives](https://ghostscript.com/pipermail/gs-bugs/)
    - [The gs-devel Archives](https://ghostscript.com/pipermail/gs-devel/)

***

***

### お知らせ {#c2f53cec}

Ghostscript 9.50 (2019-10-15) 以降に更新してください．

- ただし，TeX Live 2019 に含まれるいくつかのツールは Ghostscript 9.50 で起きた仕様変更に対応できていない場合があります（例：dvisvgm → [commit 7b93a91](https://github.com/mgieseki/dvisvgm/commit/7b93a9197b69305429183affd24fa40ee04a663a)，gsftopk → [forum:2756#p16126](https://okumuralab.org/tex/mod/forum/discuss.php?d=2756%23p16126)）。問題のある場合は Ghostscript 9.26 以前を使うようにしてください。

- gs-9.50 を使うと [dviout](/dviout/) で EPS 画像が表示できない問題が発生します。gsx: を
    c:\path_to_gs\gs9.50\bin\gswin32c.exe -dDELAYSAFER
    に書き換えると表示できるようになります。（path_to_gs はお使いの環境の Ghostscript のパスに従ってください。）

<!-- gs-9.50 で .setpdfwrite オペレータが deprecated とマークされた。 -->
<!-- ちなみに .dashpath オペレータが削除されたのは gs-9.22 の模様。 -->

<!-- gs-9.50 で XeTeX での pstricks も失敗する。以下で対応。 -->
<!-- (1) dvipdfmx.cfg の変更 (r52766) -->
<!-- (2) (x)dvipdfmx のソース spc_dvips.c の変更 (r52765) -->

<!-- gs-9.27 は下記のとおり bounding box の計算にバグがあり，より深刻なためオススメしない。 -->

Ghostscript 9.27 (2019-04-04) は， pdfcrop がおかしくなる問題が発生します。

- commit [06c920713e11bce9bd541bbf9bf294b2ba16aee8](http://git.ghostscript.com/?p=ghostpdl.git;a=commit;h=06c920713e11bce9bd541bbf9bf294b2ba16aee8)
    で修正されたようです。--&gt; pdfcrop in gs-9.27 ([forum:2622](https://okumuralab.org/tex/mod/forum/discuss.php?d=2622))

- [pdfcrop fails with gs9.27 · Issue #63 · ho-tex/oberdiek · GitHub](https://github.com/ho-tex/oberdiek/issues/63)
- Debian GNU/Linux では ghostscript (9.27~dfsg-2) で修正されました。--&gt; [#927429 - ghostscript: incorrect bbox is produced in pdfcrop - Debian Bug report logs](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=927429)

<!-- gs-9.27 の他の仕様変更：GS_PDF_ProcSet オペレータの削除 -->
<!-- https://github.com/mgieseki/dvisvgm/issues/108#issuecomment-496382796 -->

Ghostscript 9.24 は，@filename スキームが使用できず，ps2pdf.bat などが一切使用できないという問題があるので，インストールしない方が無難です。
また Ghostscript 9.24 から PDF を出力する際のバージョンが PDF 1.5 から PDF 1.7 に変更されています。([pdfwrite - ensure correct ICC profile version being written out](http://git.ghostscript.com/?p=ghostpdl.git;a=commitdiff;h=bb2ea8ca0482cb0bb5632c30e9184e3d19fdc8d2))

Ghostscript 9.23 およびそれ以前の -dSAFER オプションには、脆弱性が存在します．

- [Ghostscript の -dSAFER オプションの脆弱性に関する注意喚起](http://www.jpcert.or.jp/at/2018/at180035.html)
- [JVNDB-2018-006474 Ghostscript に -dSAFER オプションによる保護が回避される複数の脆弱性 - JVN iPedia - 脆弱性対策情報データベース](https://jvndb.jvn.jp/ja/contents/2018/JVNDB-2018-006474.html)
- [JVNVU#90390242: Ghostscript に -dSAFER オプションによる保護が回避される複数の脆弱性](http://jvn.jp/vu/JVNVU90390242/)
- [Ghostscript脆弱性とImageMagick/GraphicsMagick、そしてGoogle Project Zero](http://d.hatena.ne.jp/ozuma/20180826/1535258202)

Ghostscript 9.21 およびそれ以前には任意のコードが実行可能な脆弱性が存在します．
TeX Live 2017 (win32) に収録されている Ghostscript 9.21 (tlgs.win32) はこの脆弱性が修正されています．

- [JVNDB-2017-002808 Ghostscript に任意のコードが実行可能な脆弱性 - JVN iPedia - 脆弱性対策情報データベース](http://jvndb.jvn.jp/ja/contents/2017/JVNDB-2017-002808.html)
- [JVNVU#98641178: Ghostscript に任意のコードが実行可能な脆弱性](http://jvn.jp/vu/JVNVU98641178/)
- \[[texlive\] Revision 44181](http://www.tug.org/svn/texlive?view=revision&revision=44181) gs-9.21: apply the patch to fix a bug ([http://git.ghostscript.com/?p=ghostpdl.git;a=commitdiff;h=57f20719](http://git.ghostscript.com/?p=ghostpdl.git;a=commitdiff;h=57f20719))
- \[[texlive\] Revision 44112](http://www.tug.org/svn/texlive?view=revision&revision=44112) Apply security patch for gs-9.21 ([https://ghostscript.com/pipermail/gs-commits/2017-April/021285.html](https://ghostscript.com/pipermail/gs-commits/2017-April/021285.html))
- [Bug 697846 &ndash; Security fix causes regression](https://bugs.ghostscript.com/show_bug.cgi?id=697846)
- [Bug 697799 &ndash; corruption of operand stack](https://bugs.ghostscript.com/show_bug.cgi?id=697799)

Ghostscript 9.15 以降で [XeTeX](/XeTeX/) 上の [PSTricks](/PSTricks/) で問題が発生する場合は TeX Live 2015 以降に更新してください．

- [QA: gs9.15 and gs9.10](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1393)
- \[[texlive\] Revision 35312](http://www.tug.org/svn/texlive?view=revision&revision=35312)

また Ghostscript 9.15 で，output device から epswrite が廃止され，9.14 で追加・推奨されていた eps2write に完全に置き換わりました．
eps2write/epswrite の挙動の詳細は，[Ghostscript/使い方](</Ghostscript/使い方/>) を参照してください．
以下のようなアプリケーションは，すでに対応を完了しています．

- TeX ソースコードをタイプセットして画像で出力するアプリケーション「[TeX2img](/TeX2img/)」（[参考](http://acetaminophen.hatenablog.com/entry/2014/10/12/081754)）
- InDesign に TeX の数式を貼り込むスクリプト「インてふてふ」（[参考](http://sysys.blog.shinobi.jp/Entry/18/)）
- Windows で TeX に挿入できるグラフ，図を作成するツール「WinTpic」（[参考](http://aogaeru-lab.my.coocan.jp/sub1.html)）
- [MetaPost](/MetaPost/) を発展させたベクトルグラフィック記述ツール「[Asymptote](/Asymptote/)」（[参考](https://twitter.com/aminophen/status/601611509001687040)）

Ghostscript 9.15 では回転したテキストを含むファイルを eps2write で処理すると BoundingBox がおかしくなるバグが報告されています．

- [Bug 695671 - eps2write gives incorrect bounding box with rotated text](https://bugs.ghostscript.com/show_bug.cgi?id=695671)

Ghostscript 9.14 ではハイパーリンクが動作しないので，最新版の TeX Live, 最新版の Ghostscript に更新してください．

- [pdfwrite - fix Named destinations with Names tree](http://git.ghostscript.com/?p=ghostpdl.git;a=commit;h=c79b0ee1dbc1cbbcbe406abd4bc47f617ed5cb2c)
- [Bug 695162 &ndash; Internal hyperlinks lost when converting to pdf](https://bugs.ghostscript.com/show_bug.cgi?id=695162)
- [Bug 695175 &ndash; can't save PDF file if compiled with hyperref packages](https://bugs.ghostscript.com/show_bug.cgi?id=695175)
- [Hyper Link fails in gs-9.14](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1292)
- \[[tex-live\] Links fails in latex->dvips after update of tlgs.win32](http://tug.org/pipermail/tex-live/2014-April/thread.html#35059)
- [http://tug.org/pipermail/tex-live/2014-May/035415.html](http://tug.org/pipermail/tex-live/2014-May/035415.html)

### 動作環境 {#e8b195dc}

Windows, macOS, Linux

### 縦書きに関して {#o39e11da}

Ghostscript 9.22 以降は日本語の縦書き PostScript ファイルがうまく表示できるようです。([gs-9.22](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=2276))

<!-- GNU Ghostscript 7.07 は日本の gs-cjk の寄与を含み，和文の扱い（縦書き）に優れています． -->
<!-- 残念ながら Ghostscript 8 以降ではこれが削除されてしまいました． -->
<!-- Ghostscript 7.07 と比べて，CJK（中国語・日本語・韓国語）の縦書きへの対応が不充分です． -->
<!-- CID フォントや Windows API を使った日本語の表示はできます． -->
<!-- Ghostscript 7.07 には脆弱性が存在しますので，縦書きが必要ない場合は最新版の Ghostscript を使用してください． -->

### フロントエンド {#ka477802}

Microsoft Windows では [GSview](/GSview/), PS_View, [SumatraPDF](/SumatraPDF/), [Evince](/Evince/), [Ghostscript.NET.Viewer](https://github.com/jhabjan/Ghostscript.NET), macOS では [Evince](/Evince/), [Okular](/Okular/), [gv](/gv/), Linux では [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [gv](/gv/) などの Ghostscript のフロントエンドがあります．
これらはいずれも背後で Ghostscript を動かすことにより，PostScript ファイルを表示することができます．

<!-- **不具合 [#o389845b] -->

### 各 OS 特有の Ghostscript 情報 {#w33eec77}

- [Ghostscript/Windows](/Ghostscript/Windows/)
- [Ghostscript/macOS](/Ghostscript/macOS/)
- [Ghostscript/Linux](/Ghostscript/Linux/)

### 使い方 {#odaff2e6}

[Ghostscript/使い方](</Ghostscript/使い方/>) を参照．

### 関連リンク {#we8f22aa}

- [CJK fonts and Ghostscript integration](http://www.preining.info/blog/software-projects/cjk-fonts-ghostscript/)
- [GhostScriptあれこれ](http://xanadu62.blogspot.jp/2014/11/ghostscript_22.html)
- [ghostscriptのコマンドライン引数](http://sage-t.tumblr.com/post/71333720989/ghostscript)
- [ghoastscriptの日本語文字化けについて．](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11121158676)
- [Ghostscript についてちょっとだけ](http://d.hatena.ne.jp/naruoga/20130110/1357827274)
- [Data storage for gs-cjk project](https://www.aihara.co.jp/~taiji/gyve/)（山田さん）
- [情報工学特別講義 II](http://www.hisenkei.net/~tohru/Lectures/2003/SLICS2/)
    - [A Guide to gs-cjk Project](http://www.hisenkei.net/~tohru/Lectures/2003/SLICS2/PDFs/guide_to_gs-cjk.distil.pdf) guide_to_gs-cjk.distil.pdf (PDF)
    - [A Guide to gs-cjk Project](http://www.hisenkei.net/~tohru/Lectures/2003/SLICS2/PDFs/guide_to_gs-cjk.slide.distil.pdf) guide_to_gs-cjk.slide.distil.pdf (PDF)

#### License {#g7897d81}

[GNU Affero General Public License (AGPL), Artifex Commercial License](http://artifex.com/licensing/)

現在の Ghostscript のオープンソースライセンスは GNU Affero General Public License (AGPL) です．
[^1]

#### リリース情報 {#jbfe1b2f}

- [http://git.ghostscript.com/?p=ghostpdl.git;a=tags](http://git.ghostscript.com/?p=ghostpdl.git;a=tags)
- [Ghostscript: Release History](https://www.ghostscript.com/release_history.html)

#### ChangeLog {#ua2f6680}

<!-- -[[git.ghostscript.com Git:http://git.ghostscript.com/]] -->
- [git.ghostscript.com Git - ghostpdl.git/summary](http://git.ghostscript.com/?p=ghostpdl.git)
    - [コミットログ](http://git.ghostscript.com/?p=ghostpdl.git;a=shortlog)

<!-- **Comment [#z51688d5] -->
<!--  -->
<!-- - 「PDF への欧文用フォントの埋め込み制御」で書き換えすべきファイルが，gs9.00，8.70では"Resource/Init/gs_pdfwr.ps"に移動しています． - - 13th-note &new{2010-10-12 (火) 15:51:13}; -->
<!-- - 「PDFへの欧文用フォントの埋め込み制御」でgs_pdfwr.psについて/.standardfontsを書き換えずに，"/.distillersettings mark"の下の"/default mark"の下の設定(8.71だと104～130行目，最後の空行も含む)をコピーして/NeverEmbedの行を変更したpsfontsembedという新しい設定を作り，dvipdfmx -D "ps2pdf -dPDFSETTINGS=/psfontsembed %i %o"としても良いようです． - - stamura &new{2010-10-21 (木) 12:00:51}; -->
<!-- - 先ほどは上記のように書きましたが，その後調べてみると/AlwaysEmbed, /NeverEmbedがうまく働かない問題は"http://ghostscript.com/pipermail/gs-cvs/2009-March/009170.html"で解決されているようです．ただし，gs_pdfwr.psのdefaultでは/NeverEmbedが基本14フォントが指定されているので/AlwaysEmbedは効かず，基本14フォントから埋め込みたいフォントを除いたリストを/NeverEmbedに指定するということになりますが． - - stamura &new{2010-10-21 (木) 13:41:39}; -->
<!--  -->
<!-- #comment -->

[^1]: 過去の Ghostscript のバージョンには [AFPL](https://www.wikipedia.org/wiki/Aladdin_Free_Public_License) 版があります．AFPL 版は商業的な配布に制限があります．このあたりの事情は，古いですが，Ghostscript の作者 [L. Peter Deutsch](https://www.wikipedia.org/wiki/L_Peter_Deutsch) の次のインタビュー記事をご覧ください：[L. Peter Deutsch in conversation with Stig Hackv&auml;n \[Internet Archive\]](http://web.archive.org/web/20041013082602/http://devlinux.org/deutsch-interview.html)
