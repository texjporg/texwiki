---
title: "Ghostscript"
url: "/Ghostscript/"
date: 2013-07-28T20:09:16Z
bookCollapseSection: true
pukiwiki: "Ghostscript"
---

# Ghostscript

## [Ghostscript](https://www.ghostscript.com/) {#odb09bf1}

Ghostscript は [PostScript](/PostScript/)/[PDF](/PDF/) インタプリタです．
PostScript/PDF ファイルを読み込んで，画面やプリンタや色々な形式のファイルに出力できます．
詳しくは次のページをご覧ください．

- [Ghostscript Website](https://www.ghostscript.com/)
- [Welcome to Ghostscript &mdash; Ghostscript documentation](https://ghostscript.readthedocs.io/)
    - [https://ghostscript.readthedocs.io/_/downloads/en/latest/pdf/](https://ghostscript.readthedocs.io/_/downloads/en/latest/pdf/)

***

***

### お知らせ {#c2f53cec}

Ghostscript 10.03.1 (2024-05-02) 以降に更新してください。
Ghostscript 10.03.0 (2024-03-06) およびそれ以前には，リモートでコードを実行される脆弱性が存在します(CVE-2024-29510)。

- [Fixes for CVE-2024-33869, CVE-2023-52722, CVE-2024-33870, CVE-2024-33871 and CVE-2024-29510 - News &mdash; Ghostscript 10.03.1 documentation](https://ghostscript.readthedocs.io/en/gs10.03.1/News.html)
- [GhostScriptの脆弱性(Moderate: CVE-2024-29510)](https://security.sios.jp/vulnerability/ghostscript-security-vulnerability-20240709/)
- [Ghostscriptでリモートでコードを実行される脆弱性が発生(CVE-2024-29510) ](https://rocket-boys.co.jp/ghost-script-vulnerability-cve2024-29510/)

<!-- Ghostscript 9.54.0 (2021-03-19)，9.53.3 (2020-10-01)，9.52 (2020-03-19)，9.50 (2019-10-15) には，任意のコマンド実行が可能な脆弱性が存在します。 -->
<!--  -->
<!-- - TeX Live 2019 に含まれるいくつかのツールは Ghostscript 9.50 で起きた仕様変更に対応できていない場合があります（例：dvisvgm → [[commit 7b93a91:https://github.com/mgieseki/dvisvgm/commit/7b93a9197b69305429183affd24fa40ee04a663a]]，gsftopk → [[forum:2756#p16126]]）。TeX Live 2020 で修正されました。 -->
<!--  -->
<!-- - gs-9.50 を使うと [[dviout]] で EPS 画像が表示できない問題が発生します。gsx: を -->
<!-- c:\path_to_gs\gs9.50\bin\gswin32c.exe -dDELAYSAFER -->
<!-- に書き換えると表示できるようになります。（path_to_gs はお使いの環境の Ghostscript のパスに従ってください。） -->
<!--  -->
<!-- gs-9.50 で hyperref のリンク枠線が太くなる？ https://tex.stackexchange.com/questions/524044 -->
<!--  -->
<!-- gs-9.50 で .setpdfwrite オペレータが deprecated とマークされた。 -->
<!-- ちなみに .dashpath オペレータが削除されたのは gs-9.22 の模様。 -->

<!-- gs-9.50 で XeTeX での pstricks も失敗する。以下で対応。 -->
<!-- (1) dvipdfmx.cfg の変更 (r52766) -->
<!-- (2) (x)dvipdfmx のソース spc_dvips.c の変更 (r52765) -->
<!-- -[[Ghostscript: CVE-2021-3781:https://ghostscript.com/CVE-2021-3781.html]] -->
<!-- -[[Ghostscriptの任意のコマンド実行が可能な脆弱性（CVE-2021-3781）に関する注意喚起:https://www.jpcert.or.jp/at/2021/at210039.html]] -->
<!--  -->
<!-- Ghostscript 9.27 (2019-04-04) およびそれ以前には，アクセス制限回避の脆弱性が存在します。 -->
<!--  -->
<!-- -[[JVN#52486659: Ghostscript におけるアクセス制限回避の脆弱性:https://jvn.jp/jp/JVN52486659/]] -->
<!-- -[[JVNDB-2019-012236 - JVN iPedia - 脆弱性対策情報データベース:https://jvndb.jvn.jp/ja/contents/2019/JVNDB-2019-012236.html]] -->
<!--  -->
<!-- Ghostscript 9.27 (2019-04-04) は， pdfcrop がおかしくなる問題が発生します。 -->
<!--  -->
<!-- gs-9.27 は下記のとおり bounding box の計算にバグがあり，より深刻なためオススメしない。 -->
<!-- -commit [[06c920713e11bce9bd541bbf9bf294b2ba16aee8:https://cgit.ghostscript.com/cgi-bin/cgit.cgi/ghostpdl.git/commit/?id=06c920713e11bce9bd541bbf9bf294b2ba16aee8]] -->
<!-- で修正されたようです。- -&gt; pdfcrop in gs-9.27 ([[forum:2622]]) -->
<!-- -[[pdfcrop fails with gs9.27 · Issue #63 · ho-tex/oberdiek · GitHub:https://github.com/ho-tex/oberdiek/issues/63]] -->
<!-- -Debian GNU/Linux では ghostscript (9.27~dfsg-2) で修正されました。- -&gt; [[#927429 - ghostscript: incorrect bbox is produced in pdfcrop - Debian Bug report //logs:https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=927429]] -->
<!--  -->
<!-- gs-9.27 の他の仕様変更：GS_PDF_ProcSet オペレータの削除 -->
<!-- https://github.com/mgieseki/dvisvgm/issues/108#issuecomment-496382796 -->
<!--  -->
<!-- gs-9.27 で xdvi 22.87.03 で EPS 画像が表示されない → TeX Live r51707 で対処 -->
<!-- http://takeno.iee.niit.ac.jp/~shige/unix/memo/unix-memo.html#20190924 -->

### 動作環境 {#e8b195dc}

Windows, macOS, Linux

### 縦書きに関して {#o39e11da}

[<strong>Ghostscript 10.03.0</strong> がリリースされました。<br><br>※ IPAフォントを指定した cidfmap を使って日本語データが問題なく印刷できることを確認しました。<br>$ gs /usr/share/ghostscript/10.03.0/examples/cjk/gscjk_aj.ps](https://x.com/jw_abekyun/status/1765766044860432515)

<!-- Ghostscript 9.22 (2017-10-04) 以降は日本語の縦書き PostScript ファイルがうまく表示できるようです。([[gs-9.22:https://okumuralab.org/tex/mod/forum/discuss.php?d=2276]]) -->

<!-- GNU Ghostscript 7.07 は日本の gs-cjk の寄与を含み，和文の扱い（縦書き）に優れています． -->
<!-- 残念ながら Ghostscript 8 以降ではこれが削除されてしまいました． -->
<!-- Ghostscript 7.07 と比べて，CJK（中国語・日本語・韓国語）の縦書きへの対応が不充分です． -->
<!-- CID フォントや Windows API を使った日本語の表示はできます． -->
<!-- Ghostscript 7.07 には脆弱性が存在しますので，縦書きが必要ない場合は最新版の Ghostscript を使用してください． -->

### フロントエンド {#ka477802}

Microsoft Windows では [SumatraPDF](/SumatraPDF/),  macOS では [Evince](/Evince/), [Okular](/Okular/),  Linux では [Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/) などの Ghostscript のフロントエンドがあります．
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
- [ghostscriptのコマンドライン引数](http://sage-t.tumblr.com/post/71333720989/ghostscript)
- [ghoastscriptの日本語文字化けについて．](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11121158676)
- [Ghostscript についてちょっとだけ](https://naruoga.hatenablog.com/entry/20130110/1357827274)
- [Data storage for gs-cjk project](https://www.aihara.co.jp/~taiji/gyve/)（山田さん）

#### License {#g7897d81}

[GNU Affero General Public License (AGPL), Artifex Commercial License](https://artifex.com/licensing/)

現在の Ghostscript のオープンソースライセンスは GNU Affero General Public License (AGPL) です．
[^1]

#### リリース情報 {#jbfe1b2f}

- [Ghostscript: Releases](https://www.ghostscript.com/releases.html)
- [https://cgit.ghostscript.com/cgi-bin/cgit.cgi/ghostpdl.git/refs/tags/](https://cgit.ghostscript.com/cgi-bin/cgit.cgi/ghostpdl.git/refs/tags/)

#### ChangeLog {#ua2f6680}

- [ghostpdl.git - Ghostscript and GhostPDL](https://cgit.ghostscript.com/cgi-bin/cgit.cgi/ghostpdl.git/)
    - [コミットログ](https://cgit.ghostscript.com/cgi-bin/cgit.cgi/ghostpdl.git/log/)

<!-- **Comment [#z51688d5] -->
<!--  -->
<!-- - 「PDF への欧文用フォントの埋め込み制御」で書き換えすべきファイルが，gs9.00，8.70では"Resource/Init/gs_pdfwr.ps"に移動しています． - - 13th-note &new{2010-10-12 (火) 15:51:13}; -->
<!-- - 「PDFへの欧文用フォントの埋め込み制御」でgs_pdfwr.psについて/.standardfontsを書き換えずに，"/.distillersettings mark"の下の"/default mark"の下の設定(8.71だと104～130行目，最後の空行も含む)をコピーして/NeverEmbedの行を変更したpsfontsembedという新しい設定を作り，dvipdfmx -D "ps2pdf -dPDFSETTINGS=/psfontsembed %i %o"としても良いようです． - - stamura &new{2010-10-21 (木) 12:00:51}; -->
<!-- - 先ほどは上記のように書きましたが，その後調べてみると/AlwaysEmbed, /NeverEmbedがうまく働かない問題は"http://ghostscript.com/pipermail/gs-cvs/2009-March/009170.html"で解決されているようです．ただし，gs_pdfwr.psのdefaultでは/NeverEmbedが基本14フォントが指定されているので/AlwaysEmbedは効かず，基本14フォントから埋め込みたいフォントを除いたリストを/NeverEmbedに指定するということになりますが． - - stamura &new{2010-10-21 (木) 13:41:39}; -->
<!--  -->
<!-- #comment -->

[^1]: 過去の Ghostscript のバージョンには [AFPL](https://www.wikipedia.org/wiki/Aladdin_Free_Public_License) 版があります．AFPL 版は商業的な配布に制限があります．このあたりの事情は，古いですが，Ghostscript の作者 [L. Peter Deutsch](https://www.wikipedia.org/wiki/L_Peter_Deutsch) の次のインタビュー記事をご覧ください：[L. Peter Deutsch in conversation with Stig Hackv&auml;n \[Internet Archive\]](http://web.archive.org/web/20041013082602/http://devlinux.org/deutsch-interview.html)
