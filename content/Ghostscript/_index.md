---
title: "Ghostscript"
url: "/Ghostscript/"
date: 2013-07-28T20:09:16Z
bookCollapseSection: true
pukiwiki: "Ghostscript"
---

# Ghostscript

## [Ghostscript](https://ghostscript.com/) {#odb09bf1}

Ghostscript は [PostScript](/PostScript/)/[PDF](/PDF/) インタプリタです．
PostScript/PDF ファイルを読み込んで，画面やプリンタや色々な形式のファイルに出力できます．
詳しくは次のページをご覧ください．

- [Ghostscript Website](https://ghostscript.com/)
- [Welcome to Ghostscript &mdash; Ghostscript documentation](https://ghostscript.readthedocs.io/)
- [Ghostscript Documentation (PDF)](https://ghostscript.readthedocs.io/_/downloads/en/latest/pdf/)

***

***

### お知らせ {#c2f53cec}

Ghostscript 10.05.0 (2025-03-12) 以降に更新してください。
Ghostscript 10.04.0 (2024-09-18) およびそれ以前には，複数の深刻な脆弱性が存在します(CVE-2025-27835, CVE-2025-27832, CVE-2025-27831, CVE-2025-27836, CVE-2025-27830, CVE-2025-27833, CVE-2025-27837, CVE-2025-27834)。

- [This release addresses CVEs: CVE-2025-27835, CVE-2025-27832, CVE-2025-27831, CVE-2025-27836, CVE-2025-27830, CVE-2025-27833, CVE-2025-27837, CVE-2025-27834 - News &mdash; Ghostscript 10.05.0 documentation](https://ghostscript.readthedocs.io/en/gs10.05.0/News.html)
- [Ghostscript 10.05.0未満に深刻な脆弱性8件：CVSSスコア9.8「クリティカル」レベル脆弱性とアップデート対応の緊急性](https://nikkeimatome.com/?p=56266)
- [【セキュリティ ニュース】「Ghostscript」に複数の深刻な脆弱性 - 最新版で修正（1ページ目 / 全2ページ）：Security NEXT - 2025/03/28](https://www.security-next.com/168675)
- [【セキュリティ ニュース】「Ghostscript」に複数の深刻な脆弱性 - 最新版で修正（2ページ目 / 全2ページ）：Security NEXT - 2025/03/28](https://www.security-next.com/168675/2)

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

Microsoft Windows では [SumatraPDF](/SumatraPDF/),  macOS では [Okular](/Okular/), [Evince](/Evince/),  Linux では [Okular](/Okular/), [Evince](/Evince/), [zathura](/zathura/), [qpdfview](/qpdfview/) などの Ghostscript のフロントエンドがあります．
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

- [Ghostscript : Releases](https://ghostscript.com/releases/index.html)
- [https://ghostscript.readthedocs.io/en/latest/News.html](https://ghostscript.readthedocs.io/en/latest/News.html)
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

[^1]: 過去の Ghostscript のバージョンには [AFPL](https://www.wikipedia.org/wiki/Aladdin_Free_Public_License) 版があります．AFPL 版は商業的な配布に制限があります．このあたりの事情は，古いですが，Ghostscript の作者 [L. Peter Deutsch](https://www.wikipedia.org/wiki/L_Peter_Deutsch) の次のインタビュー記事をご覧ください：[L. Peter Deutsch in conversation with Stig Hackv&auml;n \[Wayback Machine\]](http://web.archive.org/web/20041013082602/http://devlinux.org/deutsch-interview.html)
