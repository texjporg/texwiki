---
title: "インストール(Windows)"
url: "/インストール(Windows)/"
date: 2011-07-23T18:48:25Z
pukiwiki: "インストール(Windows)"
---

# インストール(Windows)

## Microsoft Windows へのインストール {#i4bf0c85}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## TeX ディストリビューションを選択してインストール {#vb660ba1}

Microsoft Windows に TeX をインストールする場合，TeX ディストリビューションの選択肢が複数存在します．<br>
初心者の方は W32TeX がおすすめです．<br>

### [W32TeX](/W32TeX/) {#yd4deb73}

W32TeX のインストールについては AbTeXInstaller - TeX Wiki または [W32TeX - TeX Wiki](/W32TeX/) を参照してください．

### [TeX Live](</TeX Live/>) {#ia336ed2}

TeX Live に関する詳細は [TeX Live - TeX Wiki](</TeX Live/>) を参照してください．

- [TeX Live - TeX Wiki](</TeX Live/>)

#### TeX Live 2012 (Win32) {#ca517ea6}

***

install-tl.zip を展開します．<br>

***

- install-tl.bat の場合

install-tl.bat をダブルクリックします．<br>
TeX Live 2012 pretest の場合はコマンド プロンプトから<br>

```
>install-tl.bat --repository http://ftp.math.utah.edu/pub/texlive/tlpretest/
```

とします．<br>

***

<span style="color:Black;background-color:#007BBB;"><ins>　　<span style="color:White;"><strong>Install-tl</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

<br>

　　　TeX Live 2012 の導入<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　1/5<br>

<br>

<br>

<br>

　　　TeX Live 2012 の導入へようこそ。<br>
　　　&#x68;ttp://tug.org/texlive<br>

<br>

　　　このウィザードが、あなたのインストールのご案内をします。<br>

<br>

　　　設定可能な、高度な導入を行うには、導入ガイドの<br>
　　　ウェブページをごらんください。<br>
　　　あるいは install-tl-advanced.bat を使用してください。<br>

<br>

<br>

<br>

<br>

<br>

　　　☐ Change default repository<br>

<br>

<br>

<br>

　　　\[　　終了　　\]　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[　　次へ→　　\]<br>

***

インストールする場合は \[　　次へ→　　\] をクリックします．<br>
インストールしない場合は \[　　終了　　\] をクリックします．<br>

***

- install-tl-advanced.bat の場合

install-tl-advanced.bat をダブルクリックします．<br>
TeX Live 2012 pretest の場合はコマンド プロンプトから<br>

```
>install-tl-advanced.bat --repository http://ftp.math.utah.edu/pub/texlive/tlpretest/
```

とします．<br>

***

<span style="color:Black;background-color:#007BBB;"><ins>　　<span style="color:White;"><strong>Install-tl</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　TeX Live 2012 の導入<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　-------基本情報-------<br>
　　選択したスキーム　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　scheme-full　　　　　　　　　　 \[ 変更 \]<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　-------追加設定-------<br>
　　標準コレクション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 \[ 変更 \]<br>
　　言語コレクション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 \[ 変更 \]<br>
　　　　　　　　　　　　　　　　　　85 コレクション（全 85 中） (必要ディスク領域: 3178MB)<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　-------ディレクトリ設定-------<br>
　　かんたん設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　いいえ　　　　　　　　　　　　　\[ 入切 \]<br>
　　TEXDIR（TeX主幹ディレクトリ）　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　C:\texlive\2012　　　　　　　　　 \[ 変更 \]<br>
　　TEXMFLOCAL（サイト固有ファイル用ディレクトリ）　　　　　　　　　　　　　　　　C:\texlive\texmf-local　　　　　　　 \[ 変更 \]<br>
　　TEXMFSYSVAR（自動生成データ用ディレクトリ）　　　　　　　　　　　　　　　　C:\texlive\2012\texmf-var　　　　　 \[ 変更 \]<br>
　　TEXMFSYSCONFIG（ローカル設定用ディレクトリ）　　　　　　　　　　　　　　C:\texlive\2012\texmf-config　　　　　 \[ 変更 \]<br>
　　TEXMFHOME（ユーザ固有ファイル用ディレクトリ）　　　　　　　　　　　　　　　　　　　　~\texmf　　　　　　　　　　　　　\[ 変更 \]<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　-------オプション-------<br>
　　既定用紙寸法　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　A4　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　\write18 を用いて制限リスト中のプログラムを実行することを許可　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　フォーマットファイルをすべて生成　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　font と macro の doc ツリーを導入　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　font と macro のソースツリーを導入　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　レジストリの PATH 設定を調整する　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　メニュー短絡キーを追加　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　ファイル関連付けを変更する　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　新規のみ　　　　　　　　　　　　　　\[ 変更 \]<br>
　　TeXworks フロントエンドを導入　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　\[ TeX Live の導入 \]　　\[ 終了 \]<br>

***

インストールする場合は \[ TeX Live の導入 \] をクリックします．<br>
インストールしない場合は \[ 終了 \] をクリックします．<br>

#### TeX Live 2011 (Win32) {#pad973ce}

- [TeX Live 2011( or MacTeX 2011) &amp; LyX 2.0.3の導入](http://texlive2011lyx203.blogspot.jp/)
- [TeX | 餅と輪](http://blog.mochiring.net/archives/tag/tex)
    - [第2回 Windowsで簡単にLaTeX環境を構築する方法(TeX Live 2011)](http://blog.mochiring.net/archives/765)
    - [第1回 Windowsで簡単にLaTeX環境を構築する方法(TeX Live 2011)](http://blog.mochiring.net/archives/739)
- [プロキシ環境下で Windowsマシンに TeX Live を入れる際のメモ](http://ichiro-maruta.blogspot.jp/2012/04/windows-tex-live.html)
- [Windows7でTeX環境を作った](http://barippi.blog.fc2.com/blog-entry-1309.html)
- [TeXLiveです](http://d.hatena.ne.jp/eggtoothcroc/20120219/p1)
- [BootcampにWindows 7 (64bit) とTeXLive2011をインストールする.](http://logic.math.kyushu-u.ac.jp/users/ym/weblog/43ed1/BootcampWindows_7_64bit_TeXLive2011.html)
- [texlive2011をwindows7 64bitにインストール（メモ）](http://hidefumi-h.blog.so-net.ne.jp/2011-11-18)
- [TeX Live 2011．とりあえず思ったことを書き連ねておく．自分用メモ．](http://d.hatena.ne.jp/abenori/20111031)
- [TeX Live 2011を家のデスクトップに入れてみた](http://d.hatena.ne.jp/abenori/20111029)
- [実行してはいけません！　TeXLive2011(Windows)でKozukaフォントを使う](http://blogs.yahoo.co.jp/igproj_fusion/14245554.html)
- [TeXLive2011 for Windows のまとめ](http://blogs.yahoo.co.jp/igproj_fusion/14243623.html)
- [TeXLive2011(Windows)でMSフォントを使う](http://blogs.yahoo.co.jp/igproj_fusion/14243228.html)
- [TeXLive2011(Windows)でヒラギノフォントを使う](http://blogs.yahoo.co.jp/igproj_fusion/14240953.html)
- [TeXLive2011(Windows)でIPAフォントを使う](http://blogs.yahoo.co.jp/igproj_fusion/14239904.html)
- [何も申し上げることはござんせん（texlive2011 on Win）](http://blogs.yahoo.co.jp/igproj_fusion/14226801.html)
- [texlive-2011 on Windows](http://blogs.yahoo.co.jp/igproj_fusion/13511126.html)
    <!-- -[[texlive-2010 on Windows (rev.):http://blogs.yahoo.co.jp/igproj_fusion/12693903.html]] -->
    <!-- -[[texlive-2010 on Windows:http://blogs.yahoo.co.jp/igproj_fusion/11147207.html]] -->

#### [Cygwin](/Cygwin/) {#sfbd073e}

Microsoft Windows 上で動く Linux (UNIX&reg; 互換システム) ライクな環境である [Cygwin](/Cygwin/) に日本語 TeX 環境を作るという手もあります。

- [Cygwin - TeX Wiki](/Cygwin/)

### [MiKTeX](/MiKTeX/) {#x2459fb9}

W32TeX, TeX Live 以外に MiKTeX といった TeX ディストリビューションもあります．

- [MiKTeX - TeX Wiki](/MiKTeX/)

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
新しくインストールしたファイルが認識されません。<br>
しかしこれは忘れやすいので，
初心者のかたは mktexlsr コマンドを打ち込まないほうがいいでしょう。

W32TeX を使用していて間違って mktexlsr コマンドを打ち込んでしまった場合は deltexlsr コマンドを打ち込んでください。<br>
$TEXMF/ls-R ファイルが削除されます。

## Ghostscript のインストール {#zd901fa9}

<strong>Ghostscript 8.71 より前の Ver. には脆弱性がありますので，最新版に更新してください．</strong>

[Ghostscript](/Ghostscript/) は [PostScript](/PostScript/) のインタープリタ（ソフトウェア RIP）です。EPS
形式の図を使う際や，Type 1 形式のフォントを
[dviout for Windows](/dviout/) で使う際に必要です。

もし古い Ghostscript がインストールされている場合は，環境変数 GS_LIB は
必ず削除しておきます（方法は上で説明した W32TeX の場合と同じです）。

インストールの詳細に関しては

- Ghostscript-8系#GPL Ghostscript 9.xx for Microsoft Windows

を参照してください。

<!-- フォントを埋め込みたい場合はインストールウィザードを終了するウィンドウで [Generate cidfmap for Windows CJK TrueType fonts] のチェックを on にして [Finish] をクリックします． -->
<!--  -->
<!-- 環境変数 PATH に Ghostscript の PATH を追加します． -->
<!--  -->
<!-- PATH の値は Destination Folder (インストール先のフォルダー) によって変わるので，インストール先のフォルダーに合わせて値を変えてください． -->
<!--  -->
<!-- -Destination Folder (インストール先のフォルダー) を C:\Program Files\gs\gs9.05 にした場合 -->
<!-- > -->
<!-- |変数名|変数値|h -->
<!-- |PATH|C:\Program Files\gs\gs9.05\bin;C:\Program Files\gs\gs9.05\lib| -->
<!-- < -->
<!--  -->
<!-- -Destination Folder (インストール先のフォルダー) を C:\Program Files (x86)\gs\gs9.05 にした場合 -->
<!-- > -->
<!-- |変数名|変数値|h -->
<!-- |PATH|C:\Program Files (x86)\gs\gs9.05\bin;C:\Program Files (x86)\gs\gs9.05\lib| -->
<!-- < -->
<!--  -->
<!-- -Destination Folder (インストール先のフォルダー) を C:\gs\gs9.05 にした場合 -->
<!-- > -->
<!-- |変数名|変数値|h -->
<!-- |PATH|C:\gs\gs9.05\bin;C:\gs\gs9.05\lib| -->
<!-- < -->
<!--  -->

## Perl のインストール {#u9e265db}

TeX 関連プログラムには Perl で書かれたスクリプトがあります．<br>
Perl で書かれたスクリプトを実行するには Perl の処理系が必要です．<br>

- [Strawberry Perl](http://strawberryperl.com/)

perl.exe を C:\strawberry\perl\bin にインストールした場合は

```
;C:\strawberry\perl\bin
```

を環境変数 PATH に追加します

## Python のインストール {#cc86c15a}

TeX 関連プログラムには Python で書かれたスクリプトがあります．<br>
Python で書かれたスクリプトを実行するには Python の処理系が必要です．<br>

- [Python Programming Language &ndash; Official Website](http://www.python.org/)

python.exe を C:\Python27 にインストールした場合は

```
;C:\Python27
```

を環境変数 PATH に追加します

python.exe を C:\Python32 にインストールした場合は

```
;C:\Python32
```

を環境変数 PATH に追加します

## Ruby のインストール {#w18e586b}

TeX 関連プログラムには Ruby で書かれたスクリプトがあります．<br>
convbkmk.rb などの Ruby で書かれたスクリプトを実行するには Ruby の処理系が必要です．<br>

- [RubyInstaller for Windows](http://rubyinstaller.org/)

ruby.exe を C:\Ruby193\bin にインストールした場合は

```
;C:\Ruby193\bin
```

を環境変数 PATH に追加します

## [SumatraPDF](/SumatraPDF/) のインストール {#sbe939df}

[SumatraPDF - TeX Wiki](/SumatraPDF/) をご覧ください．

## [dviout](/dviout/) for Windows のインストール {#fe50aa67}

[dviout - TeX Wiki](/dviout/) をご覧ください．

## GSview のインストール（オプション） {#xd771752}

[CTAN:support/ghostscript/ghostgum/](https://mirror.ctan.org/support/ghostscript/ghostgum/) から最新の GSview インストーラ
（2012年01月19日時点では gsv50w32.exe）をダウンロードし，実行します。 <!-- 2012/01/19 GSview Ver.5.0 公開 --> <!-- 2011/05/30 GSview Ver.4.91 公開 --> <!-- 2007/11/19 GSview Ver.4.9 公開 --> <!-- 2006/02/25 GSview Ver.4.8 公開 --> <!-- 2005/03/26 GSview Ver.4.7 公開 -->

&#x2d;dWINKANJI オプションを使用して日本語を表示する
には，\[Options\] → \[Advanced Configure...\] → \[Ghostscript Options\] の
内容に “-dWINKANJI” を追加します。

## PS_View のインストール (オプション) {#kcd19930}

[PS_View](http://psview.sourceforge.net/) は Ghostscript を使って PS/PDF ファイルを表示するプレビューアです．<br>
TeX Live の Windows 版には標準で PS_View が含まれていて C:\texlive\2012\tlpkg\tlpsv 以下に配置されています．<br>
C:\texlive\2012\bin\win32\psv.exe をダブルクリックすると PS_View が起動します．<br>

公式サイトで配布されている PS_View を起動するには，psv.wx.lua の gsargs の dllloc

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

&#x2d;dWINKANJI オプションを使用して日本語を表示するには，psv.wx.lua の PSV_DftGsPars

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

[TeXworks](/TeXworks/)
: [TeXworks](/TeXworks/) をご覧ください．

[Texmaker](/Texmaker/)
: [Texmaker](/Texmaker/) をご覧ください．

[LyX](/LyX/)
: [LyX](/LyX/) をご覧ください．

[TeXnicCenter](/TeXnicCenter/)
: [TeXnicCenter](/TeXnicCenter/) をご覧ください．

[Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/)
: [Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/) をご覧ください．

[サクラエディタ](</サクラエディタ/>) + マクロ
: [サクラエディタ](</サクラエディタ/>)[#マクロ](</サクラエディタ/#k75075b0>) をご覧ください．

[Notepad++](/Notepad++/) + プラグイン
: [Notepad++](/Notepad++/)[#プラグイン](/Notepad++/#k2155ff2) をご覧ください．

jEdit + プラグイン + マクロ
: jEdit#プラグイン<br>jEdit#マクロ<br>をご覧ください．

[Geany](/Geany/) + GeanyLaTeX
: [Geany](/Geany/) をご覧ください．

[gedit](/gedit/) + gedit-latex + 外部ツール
: [gedit](/gedit/) をご覧ください．

[xyzzy](/xyzzy/) + tex-mode
: [xyzzy](/xyzzy/) + KyoTeX<br>[xyzzy](/xyzzy/) + [KaTeX](/KaTeX/)<br>をご覧ください．

[Emacs](/Emacs/) + tex-mode or org-mode
: [Emacs](/Emacs/)[#TeX Mode](/Emacs/#h04d4173)<br>[Emacs](/Emacs/) + [AUCTeX](/AUCTeX/)<br>[Emacs](/Emacs/) + [YaTeX](/YaTeX/)<br>[Emacs](/Emacs/) + Org<br>をご覧ください．

[Vim](/Vim/) + プラグイン
: [Vim](/Vim/) + [Vim-LaTeX](/Vim-LaTeX/)<br>[Vim](/Vim/) + Automatic LaTeX Plugin for Vim (ATP)<br>[Vim](/Vim/) + neocomplcache<br> をご覧ください．

### フリーウェア (無料) {#k0b8f900}

EasyTeX
: EasyTeX をご覧ください．

[WinShell](/WinShell/)
: [WinShell](/WinShell/) をご覧ください．

Yotuba TeX Editor
: Yotuba TeX Editor をご覧ください．

Masamichi
: Masamichi をご覧ください．

TeXE
: TeXE をご覧ください．

Mery + マクロ
: Mery#マクロ をご覧ください．

TeraPad + ツール
: TeraPad#ツール をご覧ください．

VxEditor + ツール
: VxEditor#ツール をご覧ください．

### シェアウェア {#yec6bbe1}

[秀丸エディタ](</秀丸エディタ/>) (シェアウェア) + マクロ
: [秀丸エディタ](</秀丸エディタ/>)[#マクロ](</秀丸エディタ/#m32041fb>) をご覧ください．

Sublime Text 2 (シェアウェア) + LaTeXTools (LaTeX Plugin for Sublime Text 2)
: Sublime Text 2#LaTeXTools (LaTeX Plugin for Sublime Text 2) をご覧ください．

### 製品 {#jc4ae1f8}

InftyEditor (製品)
: InftyEditor をご覧下さい．<br>InftyEditor 学生版と InftyEditor 英語版はフリーウェア (無料) です．

Scientific WorkPlace (製品)
: Scientific WorkPlace をご覧ください．

WZ EDITOR (製品)
: WZ EDITOR をご覧ください．
