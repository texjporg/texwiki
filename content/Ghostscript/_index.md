---
title: "Ghostscript"
url: "/Ghostscript/"
date: 2013-07-28T20:09:16Z
bookCollapseSection: true
pukiwiki: "Ghostscript"
---

# Ghostscript

## [Ghostscript](https://ghostscript.com/) {#odb09bf1}

Ghostscript は [PostScript](/PostScript/)/[PDF](/PDF/) インタプリタです。
PostScript/PDF ファイルを読み込んで、画面やプリンタや色々な形式のファイルに出力できます。
詳しくは次のページをご覧ください。

- [Ghostscript Website](https://ghostscript.com/)
- [Welcome to Ghostscript &mdash; Ghostscript documentation](https://ghostscript.readthedocs.io/)
- [Ghostscript Documentation (PDF)](https://ghostscript.readthedocs.io/_/downloads/en/latest/pdf/)

***

***

### お知らせ {#c2f53cec}

Ghostscript 10.08.0 (2026-09-08) 以降に更新してください。Ghostscript 10.07.1 (2026-05-19) およびそれ以前には、脆弱性が存在します(CVE-2026-39919)。

- [CVE-2026-39919 — GhostscriptのJPEG 2000ヒープオーバーフロー CVE-2026-39919：影響範囲と対応方法 | つみかさね | つみかさね](https://tsumikasane.net/security/cve/CVE-2026-39919/)
- [【セキュリティ日報】GhostscriptのPDF経由コード実行やruby-jwt認証回避ほか 167件 | つみかさね](https://tsumikasane.net/security/daily/2026-09-21/)
- [GhostscriptのJPEG 2000出力処理にヒープバッファオーバーフロー（CVE-2026-39919）— 細工したPDFでメモリ破損からコード実行のおそれ、CVSS 4.0は9.3で10.08.0が修正](https://cyber.nexsight.co/articles/2026/09/17/ghostscript-cve-2026-39919-jpeg2000-heap-overflow-2026-09-17/)

Ghostscript 10.08.0 (2026-09-08) にアップデートして cjk-gs-integrate 20210625.0 を実行するとエラーになるようです。

- [cjk-gs-integrate is not compatible with ghostscript 10.08.0](https://github.com/texjporg/cjk-gs-support/issues/52)

以下のプルリクエストを参照して cjk-gs-integrate.pl を修正するとエラーが解消するようです。

- [bugfix: cidfmap genaration uses currentsystemparams instead of pssystemparams](https://github.com/texjporg/cjk-gs-support/pull/51)

### 動作環境 {#e8b195dc}

Windows, macOS, Linux

### 縦書きに関して {#o39e11da}

Ghostscript 10.08.0 (2026-09-08) は、日本語の縦書き PostScript ファイルを画面に表示すると正しく表示できるのですが、ps2pdf で PDF に変換すると句読点（。、）などの表示がおかしくなりました。

[<strong>Ghostscript 10.03.0</strong> がリリースされました。<br><br>※ IPAフォントを指定した cidfmap を使って日本語データが問題なく印刷できることを確認しました。<br>$ gs /usr/share/ghostscript/10.03.0/examples/cjk/gscjk_aj.ps](https://x.com/jw_abekyun/status/1765766044860432515)

<!-- Ghostscript 9.22 (2017-10-04) 以降は日本語の縦書き PostScript ファイルがうまく表示できるようです。([[gs-9.22:https://okumuralab.org/tex/mod/forum/discuss.php?d=2276]]) -->

<!-- GNU Ghostscript 7.07 は日本の gs-cjk の寄与を含み，和文の扱い（縦書き）に優れています． -->
<!-- 残念ながら Ghostscript 8 以降ではこれが削除されてしまいました． -->
<!-- Ghostscript 7.07 と比べて，CJK（中国語・日本語・韓国語）の縦書きへの対応が不充分です． -->
<!-- CID フォントや Windows API を使った日本語の表示はできます． -->
<!-- Ghostscript 7.07 には脆弱性が存在しますので，縦書きが必要ない場合は最新版の Ghostscript を使用してください． -->

### フロントエンド {#ka477802}

Microsoft Windows では [SumatraPDF](/SumatraPDF/), [Okular](/Okular/), macOS では [Okular](/Okular/), Linux では [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/) などの Ghostscript のフロントエンドがあります．
これらはいずれも背後で Ghostscript を動かすことにより，PostScript ファイルを表示することができます．

<!-- **不具合 [#o389845b] -->

### 各 OS 特有の Ghostscript 情報 {#w33eec77}

- [Ghostscript/Windows](/Ghostscript/Windows/)
- [Ghostscript/macOS](/Ghostscript/macOS/)
- [Ghostscript/Linux](/Ghostscript/Linux/)

### 使い方 {#odaff2e6}

[Ghostscript/使い方](</Ghostscript/使い方/>) を参照．

### 関連リンク {#we8f22aa}

- [https://qiita.com/tags/ghostscript](https://qiita.com/tags/ghostscript)
- [CJK fonts and Ghostscript integration](http://www.preining.info/blog/software-projects/cjk-fonts-ghostscript/)
- [ghostscriptのコマンドライン引数](http://sage-t.tumblr.com/post/71333720989/ghostscript)
- [ghoastscriptの日本語文字化けについて．](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11121158676)
- [Ghostscript についてちょっとだけ](https://naruoga.hatenablog.com/entry/20130110/1357827274)

#### License {#g7897d81}

[GNU Affero General Public License (AGPL), Artifex Commercial License](https://artifex.com/licensing/)

現在の Ghostscript のオープンソースライセンスは GNU Affero General Public License (AGPL) です．
[^1]

#### リリース情報 {#jbfe1b2f}

- [Ghostscript : Releases](https://ghostscript.com/releases/index.html)
- [https://ghostscript.readthedocs.io/en/latest/News.html](https://ghostscript.readthedocs.io/en/latest/News.html)
- [https://cgit.ghostscript.com/cgi-bin/cgit.cgi/ghostpdl.git/refs/tags/](https://cgit.ghostscript.com/cgi-bin/cgit.cgi/ghostpdl.git/refs/tags/)
- [https://github.com/ArtifexSoftware/ghostpdl/tags](https://github.com/ArtifexSoftware/ghostpdl/tags)

#### ChangeLog {#ua2f6680}

- [ghostpdl.git - Ghostscript and GhostPDL](https://cgit.ghostscript.com/cgi-bin/cgit.cgi/ghostpdl.git/)
    - [コミットログ](https://cgit.ghostscript.com/cgi-bin/cgit.cgi/ghostpdl.git/log/)
- [GitHub - ArtifexSoftware/ghostpdl: This is a mirror: the canonical repo is: git.ghostscript.com/ghostpdl.git https://www.ghostscript.com](https://github.com/ArtifexSoftware/ghostpdl)
    - [コミットログ](https://github.com/ArtifexSoftware/ghostpdl/commits/master/)

<!-- **Comment [#z51688d5] -->
<!--  -->
<!-- - 「PDF への欧文用フォントの埋め込み制御」で書き換えすべきファイルが，gs9.00，8.70では"Resource/Init/gs_pdfwr.ps"に移動しています． - - 13th-note &new{2010-10-12 (火) 15:51:13}; -->
<!-- - 「PDFへの欧文用フォントの埋め込み制御」でgs_pdfwr.psについて/.standardfontsを書き換えずに，"/.distillersettings mark"の下の"/default mark"の下の設定(8.71だと104～130行目，最後の空行も含む)をコピーして/NeverEmbedの行を変更したpsfontsembedという新しい設定を作り，dvipdfmx -D "ps2pdf -dPDFSETTINGS=/psfontsembed %i %o"としても良いようです． - - stamura &new{2010-10-21 (木) 12:00:51}; -->
<!-- - 先ほどは上記のように書きましたが，その後調べてみると/AlwaysEmbed, /NeverEmbedがうまく働かない問題は"http://ghostscript.com/pipermail/gs-cvs/2009-March/009170.html"で解決されているようです．ただし，gs_pdfwr.psのdefaultでは/NeverEmbedが基本14フォントが指定されているので/AlwaysEmbedは効かず，基本14フォントから埋め込みたいフォントを除いたリストを/NeverEmbedに指定するということになりますが． - - stamura &new{2010-10-21 (木) 13:41:39}; -->
<!--  -->
<!-- #comment -->

[^1]: 過去の Ghostscript のバージョンには [AFPL](https://www.wikipedia.org/wiki/Aladdin_Free_Public_License) 版があります．AFPL 版は商業的な配布に制限があります．このあたりの事情は，古いですが，Ghostscript の作者 [L. Peter Deutsch](https://www.wikipedia.org/wiki/L_Peter_Deutsch) の次のインタビュー記事をご覧ください：[L. Peter Deutsch in conversation with Stig Hackv&auml;n \[Wayback Machine\]](http://web.archive.org/web/20041013082602/http://devlinux.org/deutsch-interview.html)
