---
title: "インストール(Windows)"
url: "/インストール(Windows)/"
date: 2011-07-23T18:48:25Z
pukiwiki: "インストール(Windows)"
---

# インストール(Windows)

## Microsoft Windows へのインストール {#i4bf0c85}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## [W32TeX](/W32TeX/) {#yd4deb73}

W32TeX のインストールについては [W32TeX - TeX Wiki](/W32TeX/) を参照してください．

## [TeX Live](</TeX Live/>) {#ia336ed2}

W32TeX ではなく TeX Live をインストールしたい方は [TeX Live - TeX Wiki](</TeX Live/>) を参照してください．

## [MiKTeX](http://miktex.org/) {#x2459fb9}

W32TeX, TeX Live 以外に MiKTeX といった TeX ディストリビューションもあります．

- [MiKTeX Blog - All about MiKTeX development and packaging.](http://blog.miktex.org/)

## Cygwin {#sfbd073e}

Microsoft Windows 上で動く UNIX&reg; 互換システム [Cygwin](http://cygwin.com/) に日本語
TeX 環境を作るという手もあります。

### Cygwin での TeX Live &amp; tlptexlive のインストール {#bc8cfcc3}

- \[[ANNOUNCEMENT\] New packages: texlive-20110705-1, texlive-collection-\*-20120202-1, libkpathsea{6,-devel}-20110705-1, libptexenc{1,-devel}-20110705-1, asymptote-2.15-1](http://cygwin.com/ml/cygwin/2012-03/msg00120.html)
- [tlptexliveリポジトリ](http://tutimura.ath.cx/ptexlive/?tlptexlive%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA)
- [Using LaTeX in Japanese on Cygwin.](http://www.mmsp.nitech.ac.jp/~k09/edit.php?tips%2FCygwin%20%E3%81%A7%E6%97%A5%E6%9C%AC%E8%AA%9E%20TeX%202011%20%E5%B9%B4%E7%89%88)

<!-- **Cygwin での ptetex のインストール (obsolete) [#h7017721] -->
<!--  -->
<!-- Cygwin のパッケージインストール -->
<!-- (-X オプションをつけてネットインストーラを起動する; 例. [スタート]->[ファイル名を指定して実行]->"Cygwin の setup.exe へのフルパス" -X) で， -->
<!-- ダウンロードサイトの URI ( http://ptetexwin.sourceforge.jp ) を追加し， -->
<!-- パッケージを選択するだけで日本語 TeX 環境一式が揃います。 -->
<!--  -->
<!-- 詳細は -->
<!-- 「[[Cygwin で 日本語 TeX &mdash; ptetex を簡単インストール>http://ptetexwin.sourceforge.jp/]]」 -->
<!-- へ。 -->

## 新ドキュメントクラスのインストール {#k48ecf0f}

<!-- - --  -->
<!-- RIGHT:☒ -->
<!-- LEFT:　 ／￣＼ -->
<!-- LEFT:　|　＾o＾　| -->
<!-- LEFT:　 ＼＿／  -->
<!-- CENTER:[[TeX Wiki 創設者&br;奥村晴彦さんからの&br;新ドキュメントクラスをお使いください:http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/]] -->
<!-- RIGHT:[ [[詳細を読む:http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/]] ] -->
<!-- - --  -->

ぜひ[奥村晴彦さん](http://oku.edu.mie-u.ac.jp/~okumura/)の[新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/)も
入れてください。

W32TeX の内部 Unicode 版 pTeX
（[uptex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/uptex-w32.tar.xz)）
や TeX Live には，奥村さんの新ドキュメントクラスが含まれています。

手動で入れるのなら，最新のものをダウンロードして展開し，
フォルダ（ディレクトリ）ごと $TEXMFLOCAL/tex/platex/
（例えば C:\w32tex\share\texmf-local\tex\platex\）
の中に入れれば完了です。

もしファイル名のデータベース $TEXMF/ls-R
（例えば C:\w32tex\share\texmf\ls-R）が
存在するのなら，mktexlsr コマンド (または texhash コマンド) でデータベースを更新しないと，
新しくインストールしたファイルが認識されません。しかしこれは忘れやすいので，
初心者のかたは mktexlsr コマンドを打ち込まないほうがいいでしょう。

W32TeX を使用していて間違って mktexlsr コマンドを打ち込んでしまった場合は deltexlsr コマンドを打ち込んでください。$TEXMF/ls-R ファイルが削除されます。

## Ghostscript のインストール {#zd901fa9}

<strong>Ghostscript 8.71 より前の Ver. には脆弱性がありますので，最新版に更新してください．</strong>

[Ghostscript](/Ghostscript/) は [PostScript](/PostScript/) のインタープリタ（ソフトウェア RIP）です。EPS
形式の図を使う際や，Type 1 形式のフォントを
[dviout for Windows](/dviout/) で使う際に必要です。

もし古い Ghostscript がインストールされている場合は，環境変数 GS_LIB は
必ず削除しておきます（方法は上で説明した TeX の場合と同じです）。

フォントを埋め込みたい場合はインストールウィザードを終了するウィンドウで \[Generate cidfmap for Windows CJK TrueType fonts\] のチェックを on にして \[Finish\] をクリックします．

環境変数 PATH に Ghostscript の PATH を追加します．

PATH の値は Destination Folder (インストール先のフォルダー) によって変わるので，インストール先のフォルダーに合わせて値を変えてください．

- Destination Folder (インストール先のフォルダー) を C:\Program Files\gs\gs9.05 にした場合

> | 変数名 | 変数値 |
> |---|---|
> | PATH | C:\Program Files\gs\gs9.05\bin;C:\Program Files\gs\gs9.05\lib |
>

- Destination Folder (インストール先のフォルダー) を C:\Program Files (x86)\gs\gs9.05 にした場合

> | 変数名 | 変数値 |
> |---|---|
> | PATH | C:\Program Files (x86)\gs\gs9.05\bin;C:\Program Files (x86)\gs\gs9.05\lib |
>

- Destination Folder (インストール先のフォルダー) を C:\gs\gs9.05 にした場合

> | 変数名 | 変数値 |
> |---|---|
> | PATH | C:\gs\gs9.05\bin;C:\gs\gs9.05\lib |
>

- [http://ftp.kddilabs.jp/TeX/ptex-win32/gs/](http://ftp.kddilabs.jp/TeX/ptex-win32/gs/)
- [http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/)
- [http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/gs/](http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/gs/)

## Ruby のインストール {#w18e586b}

convbkmk.rb などの Ruby で書かれたスクリプトを実行するには Ruby の処理系が必要です．

- [RubyInstaller for Windows](http://rubyinstaller.org/)

> | 変数名 | 変数値 |
> |---|---|
> | PATH | C:\Ruby193\bin |
>

## [SumatraPDF](/SumatraPDF/) のインストール {#sbe939df}

[SumatraPDF - TeX Wiki](/SumatraPDF/) をご覧ください．

## [dviout](/dviout/) for Windows のインストール {#fe50aa67}

[dviout - TeX Wiki](/dviout/) をご覧ください．

## GSview のインストール（オプション） {#xd771752}

[CTAN:support/ghostscript/ghostgum/](https://mirror.ctan.org/support/ghostscript/ghostgum/) から最新の GSview インストーラ
（2012年01月19日時点では gsv50w32.exe）をダウンロードし，実行します。 <!-- 2012/01/19 GSview Ver.5.0 公開 --> <!-- 2011/05/30 GSview Ver.4.91 公開 --> <!-- 2007/11/19 GSview Ver.4.9 公開 --> <!-- 2006/02/25 GSview Ver.4.8 公開 --> <!-- 2005/03/26 GSview Ver.4.7 公開 -->

日本語を表示する
には，\[Options\] → \[Advanced Configure...\] → \[Ghostscript Options\] の
内容に “-dWINKANJI” を追加します。

## PS_View のインストール (オプション) {#kcd19930}

[PS_View](http://psview.sourceforge.net/) は Ghostscript を使って PS/PDF ファイルを表示するプレビューアです．

起動するには，psv.wx.lua の gsargs の dllloc

```
local gsargs = {
  args= {},      -- arguments to ghostscript (wihout paths)
  dllloc= "",    -- localisation of DLL (passed to wxGhostscript)
```

を Ghostscript の dll ファイル (C:\gs\gs9.05\bin\gsdll32.dll) に修正します．

ただし，ディレクトリの区切りは，スラッシュ(/) もしくは バックスラッシュ2つ(\\\\) を使用します．

```
local gsargs = {
  args= {},      -- arguments to ghostscript (wihout paths)
  dllloc= "C:/gs/gs9.05/bin/gsdll32.dll",    -- localisation of DLL (passed to wxGhostscript)
```

日本語を表示するには，psv.wx.lua の PSV_DftGsPars

```
local PSV_DftGsPars = {"-dNOPAUSE","-dDELAYBIND","-dNOEPS"}
```

を

```
local PSV_DftGsPars = {"-dNOPAUSE","-dDELAYBIND","-dNOEPS","-dWINKANJI"}
```

に修正します．

## [TeX 用エディタ](</TeX用エディタ/>)のインストール（オプション） {#e8efca0f}

LaTeX での文書作成を支援するための統合環境・エディタが開発されています．<br>
初心者の方はまずは LaTeX 用の統合環境を使用して LaTeX に慣れるのがいいとおもいます．<br>
エディタ・マクロ・プラグインの種類によって得手不得手があったり不具合が発生したりする場合があるので複数のエディタを使い分けるのもいいかもしれません．<br>
人によってエディタの好みは様々なので自分にあったエディタを見つけてください．<br>
見つからない人は自作してみるのもいいかもしれません．<br>

### フリーソフトウェア (オープンソースソフトウェア) {#e2433aac}

#### [TeXworks](/TeXworks/) {#sca389c7}

[TeXworks](/TeXworks/) をご覧ください．

#### [Texmaker](/Texmaker/) {#q8c6a4e6}

[Texmaker](/Texmaker/) をご覧ください．

#### [LyX](/LyX/) {#s7fa0837}

[LyX](/LyX/) をご覧ください．

#### [TeXnicCenter](/TeXnicCenter/) {#kf5b1543}

[TeXnicCenter](/TeXnicCenter/) をご覧ください．

#### [Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/) {#ra6693bf}

[Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/) をご覧ください．

#### [サクラエディタ](</サクラエディタ/>) + マクロ {#l46875d6}

[サクラエディタ](</サクラエディタ/>)[#マクロ](</サクラエディタ/#k75075b0>) をご覧ください．

#### [Notepad++](/Notepad++/) + プラグイン {#k51d20b3}

[Notepad++](/Notepad++/)[#プラグイン](/Notepad++/#k2155ff2) をご覧ください．

#### jEdit + プラグイン + マクロ {#a1d0d5bc}

jEdit#プラグイン<br>
jEdit#マクロ<br>
をご覧ください．

#### [Geany](/Geany/) + GeanyLaTeX {#p462603b}

[Geany](/Geany/) をご覧ください．

#### [gedit](/gedit/) + gedit-latex + 外部ツール {#nb50a4dc}

[gedit](/gedit/) をご覧ください．

#### [xyzzy](/xyzzy/) + tex-mode {#s2425f0a}

[xyzzy](/xyzzy/) + KyoTeX<br>[xyzzy](/xyzzy/) + [KaTeX](/KaTeX/)<br>
をご覧ください．

#### [Emacs](/Emacs/) + tex-mode or org-mode {#z9deda13}

[Emacs](/Emacs/)[#TeX Mode](/Emacs/#h04d4173)<br>[Emacs](/Emacs/) + [AUCTeX](/AUCTeX/)<br>[Emacs](/Emacs/) + [YaTeX](/YaTeX/)<br>[Emacs](/Emacs/) + Org<br>
をご覧ください．

#### [Vim](/Vim/) + プラグイン {#s7ce6347}

[Vim](/Vim/) + [Vim-LaTeX](/Vim-LaTeX/)<br>[Vim](/Vim/) + Automatic LaTeX Plugin for Vim (ATP)<br>[Vim](/Vim/) + neocomplcache<br> をご覧ください．

### フリーウェア (無料) {#k0b8f900}

#### [WinShell](/WinShell/) {#l040a9c6}

[WinShell](/WinShell/) をご覧ください．

#### EasyTeX {#i87678c7}

EasyTeX をご覧ください．

#### Yotuba TeX Editor {#hff91394}

Yotuba TeX Editor をご覧ください．

#### Masamichi {#d70fc64e}

Masamichi をご覧ください．

#### TeXE {#g0454558}

TeXE をご覧ください．

#### Mery + マクロ {#oab02ae1}

Mery#マクロ をご覧ください．

#### TeraPad + ツール {#a652512f}

TeraPad#ツール をご覧ください．

#### VxEditor + ツール {#eaa0beaf}

VxEditor#ツール をご覧ください．

### シェアウェア {#yec6bbe1}

#### [秀丸エディタ](</秀丸エディタ/>) (シェアウェア) + マクロ {#o8e43f26}

[秀丸エディタ](</秀丸エディタ/>)[#マクロ](</秀丸エディタ/#m32041fb>) をご覧ください．

#### Sublime Text 2 (シェアウェア) + LaTeXTools (LaTeX Plugin for Sublime Text 2) {#o2535359}

Sublime Text 2#LaTeXTools (LaTeX Plugin for Sublime Text 2) をご覧ください．

### 製品 {#jc4ae1f8}

#### InftyEditor (製品) {#w2b15f27}

InftyEditor をご覧下さい．

なお

- InftyEditor 学生版
- InftyEditor 英語版

はフリーウェア (無料) です．

#### Scientific WorkPlace (製品) {#p0ac379c}

Scientific WorkPlace をご覧ください．

#### WZ EDITOR (製品) {#cbee1e14}

WZ EDITOR をご覧ください．
