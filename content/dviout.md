---
title: "dviout"
url: "/dviout/"
date: 2013-06-08T19:23:34Z
pukiwiki: "dviout"
---

# dviout

## dviout (非推奨) {#db720534}

dviout は (e-)(u)pTeX 対応の高機能な DVI プレビューアです。
しかし，dviout を使用すると

- 挿入した画像が適切に表示されない
- CID に完全対応していない（Adobe-Japan1 の CID 直接参照の機能は無い）
- PDF や PostScript の機能に強く依存するパッケージに未対応

などの問題があります（[古い情報](</古い情報/#je1d5241>)も参考に）。
このため，現在は DVI ではなく PDF でのプレビューが推奨されています。

しかし，dviout で十分な場合も数多くあり，その場合には依然として高機能で高速な DVI viewer として有用です。

***

***

## dviout for Windows とは？ {#i1497a3b}

dviout for Windows は (e-)(u)pTeX 対応の DVI プレビューアです。
詳しくは開発者（[大島利雄さん](http://akagi.ms.u-tokyo.ac.jp/~oshima/)）ご自身によるページをご覧ください。

- [Oshima Laboratory Home Page (JP)](http://akagi.ms.u-tokyo.ac.jp/index-j.html) (大島研究室＠東京大)
    - [dviout/dviprt 情報](http://akagi.ms.u-tokyo.ac.jp/dviout.html)
    - [dviout/dviprt 開発室](http://akagi.ms.u-tokyo.ac.jp/dvitest.html)
    - [DVIware としての dviout](http://akagi.ms.u-tokyo.ac.jp/cmode.html)
    - [Windows95/98/Me/NT/2000/XP における dviout のインストール](http://akagi.ms.u-tokyo.ac.jp/tex_dvioutw.html)

USBメモリ活用講座の dviout for Windows のページも参考にしてください。

- [USBメモリ活用講座【実践編・dviout for Windowsポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/dviout.shtml)

## インストール {#v433ca0f}

あらかじめ TeX システムをインストールしておきます。
[Microsoft Windows - TeX Wiki](</Microsoft Windows/>) をご覧ください。

### TeX Live の場合 {#se2d51a5}

TeX Live の Win32 版には dviout が含まれています。

### W32TeX の場合 {#r4cfc9ce}

W32TeX には dviout が含まれていないので，追加でインストールする必要があります。

#### 64-bit dviout {#e57715d6}

- [64bit dviout](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1171)

64-bit 版 Susie Plug-in の拡張子は .sph であると仮定してあります。(2014/01/29以降)。

#### 32-bit dviout {#h6957949}

- [ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current_in_Japanese/](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current_in_Japanese/)
    （安定版）

- [ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current/](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current/) (安定版)
- [http://www.ring.gr.jp/pub/text/TeX/dviout/](https://mirror.ctan.org/../TeX/dviout/)
    （安定版のミラー）

- [ftp://ftp.ne.jp/pub/tex/dviout/current/](ftp://ftp.ne.jp/pub/tex/dviout/current/) (安定版のミラー)
- [ftp://ftp.ne.jp/pub/ctan/dviware/dviout/](ftp://ftp.ne.jp/pub/ctan/dviware/dviout/) (安定版のミラー)

### ライセンス {#w9d4ec9d}

[Expat License](http://tug.org/svn/dviout/trunk/README?view=markup) (MIT License)

Expat License については

- [License:Expat - Free Software Directory](http://directory.fsf.org/wiki/License:Expat)
- [さまざまなライセンスとそれらについての解説 - GNU プロジェクト - フリーソフトウェア財団 (FSF)#Expat](http://www.gnu.org/licenses/license-list.html#Expat)

を参照。

### リリース情報 {#uce3262c}

2013-12-14 dviout 3.18.4 ALPHA 1

dviout 3.18.3 ALPHA 5 以前の dviout にあった，以下の問題が修正されています。

- [QA54696](https://okumuralab.org/~okumura/texfaq/qa/54696.html) で指摘された，サイズの大きい PK フォントについてバグがあります。
- 非常に長いフォント名を与えるとクラッシュします。

### ChangeLog {#r5124b5a}

- \[[dviout\] Index of /trunk](http://tug.org/svn/dviout/trunk/)
    - [log](http://tug.org/svn/dviout/trunk/?view=log)
- \[[texlive\] Index of /trunk/Master/tlpkg/dviout](http://tug.org/svn/texlive/trunk/Master/tlpkg/dviout/)
    - [log](http://tug.org/svn/texlive/trunk/Master/tlpkg/dviout/?view=log)

## ビルド {#d0101f83}

[Subversion Windows Installer](http://alagazam.net/) から Windows バイナリをダウンロードして展開し，bin フォルダー (svn.exe のあるフォルダー) に PATH を通します。
Windows PowerShell またはコマンド プロンプトを起動して dviout のソースコードを取得します。

```
mkdir dviout
cd dviout
svn co svn://tug.org/dviout/trunk
```

trunk の dviout.sln をダブルクリックして Microsoft Visual Studio を起動します。
Solution Explorer から dviwin.c を削除し，BUILD -> Build Solution で dviout をビルドします。

Windows PowerShell またはコマンド プロンプトからビルドしたい場合は MSBuild を使用してビルドすることもできます。

```
msbuild dviout.sln
```

## 不具合 {#ufbeded4}

### dviout を管理者として実行していない場合に「Error in RegCreateKey」というダイアログが表示される {#ca2f4069}

\[OK\] をクリックしても3, 4回ぐらい同じエラーが出ますがあきらめずに \[OK\] をクリックします。
dviout を管理者として実行すればこのエラーは発生しないようです。

## dviout 非対応パッケージ {#pd5bea65}

PDF や PostScript の機能に強く依存するようなパッケージの場合うまく動作しない可能性が高いです。
PDF ファイルで出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) でプレビューしてください。

### [TikZ](/TikZ/) {#m7bcebf4}

dviout は [TikZ](/TikZ/) に対応していません。
PDF または SVG に変換して PDF・SVG ビューアで表示・印刷するといいでしょう。

### [media9](/media9/) {#h55cad77}

dviout は [media9](/media9/) に対応していません。
PDF に変換して Adobe Acrobat Reader DC で表示するといいでしょう。

### [OTF](/OTF/) {#i25da0b5}

dviout は [OTF パッケージ](/OTF/)に完全対応していません。
\CID{...} などでの Adobe-Japan1 の CID 直接参照の機能は無く，
代わりに CID → Unicode の変換を経由した表示機能があります。
dviout ではなく，dvipdfmx や dvips など CID に完全対応した DVIware を利用しましょう。

### [PSTricks](/PSTricks/) {#x2d3abf4}

dviout は dvips と完全互換ではありません。
[PostScript](/PostScript/) に依存したもの（PSTricks など）には対応していません。
dvips で PostScript に変換して [Ghostscript](/Ghostscript/) で表示・印刷するといいでしょう。

## upTeX で出力された DVI ファイルを dviout で表示 {#wadc9abf}

upTeX で DVI ファイルを作成し，初期設定の状態で dviout で表示しようとすると font file over のエラーが発生し，\[OK\] をクリックすると dviout が強制終了してしまうことがあります。

\[Option\]-\[Setup Parameters...\] から DVIOUTのプロパティの System タブの font buffer size を 400 K byte から 4000 K byte など，エラーが発生しない値に変更し，\[Save\]-\[適用(A)\]-\[OK\] をクリックします。

- upTeX のフォントと dviout ([qa:51135](https://okumuralab.org/~okumura/texfaq/qa/51135.html), [qa:51137](https://okumuralab.org/~okumura/texfaq/qa/51137.html))
- upTeX のフォントと dviout (再検討) ([qa:51610](https://okumuralab.org/~okumura/texfaq/qa/51610.html))：[svn r180](http://tug.org/svn/dviout?limit_changes=0&view=revision&sortby=date&revision=180)以降，dviout 3.18.4 ALPHA 1などでは問題点が修正されています。
- Re: dvipng と日本語 ([qa:51705](https://okumuralab.org/~okumura/texfaq/qa/51705.html))
- uplatexのdvi表示(表罫線)について ([qa:55450](https://okumuralab.org/~okumura/texfaq/qa/55450.html), [qa:55452](https://okumuralab.org/~okumura/texfaq/qa/55452.html), [qa:55453](https://okumuralab.org/~okumura/texfaq/qa/55453.html), [qa:55454](https://okumuralab.org/~okumura/texfaq/qa/55454.html), [qa:55456](https://okumuralab.org/~okumura/texfaq/qa/55456.html))
- upLaTeXを使おう \[電脳世界の奥底にて\] の中の [dvioutについて](http://zrbabbler.sp.land.to/uplatex.html#ssec-install-dviout)
- [uptex, uplatex](http://d.hatena.ne.jp/gcg00467/20101223#1293103329)
- [USBメモリ活用講座【実践編・dviout for Windowsポータブル化】#upTeX/upLaTeX を利用する場合の設定](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/dviout.shtml#UPTEX)

font buffer size の値が小さいと起動しても dviout の下の方に警告が表示されます。
このような警告が表示される場合は font buffer size の値を大きくしてください。

***

```
Font buffer size -bf: 3200 K in [System] (<- Setup Parameters <- Option)
 is too small.
Not an error but it is better to increase the size!
```

***

DVI ファイルを表示するとフォントが正しく表示されず，dviout の下の方に Cannot find font file for uprml-h! の警告が表示されます。

***

```
Cannot find font file for uprml-h!
A default FONT will be used.
```

***

\[Option\]-\[Setup Parameters...\] から DVIOUTのプロパティの Font2 タブの \[ftt:\] をクリックします。

```
^x\map\ttfonts.map
```

が入力されるのを確認して，\[Save\]-\[適用(A)\]-\[OK\] をクリックします。

C:\w32tex\dviout\map\ttfonts.map に

```
%input  $user.map
```

という行が存在するのを確認します。
C:\w32tex\dviout\map\\$user.map を開くと

***

```
; In this file one may define the font mappings or the files to be input.
; This file will not be overwritten by dviout (verion up).
;
```

***

と記述されているのでこの次の行に

***

```
uprml-h "ＭＳ 明朝"     unicode
upgbm-h "ＭＳ ゴシック"     unicode
uprml-v "@ＭＳ 明朝"     unicode
upgbm-v "@ＭＳ ゴシック"     unicode
```

***

を追加して保存します。
保存するときは文字コードを Shift_JIS で保存してください。
C:\w32tex\share\texmf-dist\doc\uptex\base\for_dviout.map に dviout 用 map ファイルの記述例があるので参考にしてみてください。

これで DVI ファイルを表示するとフォントが正しく表示されるようになります。

\[Option\]-\[Setup Parameters...\] から DVIOUTのプロパティの JFont2 タブの Adjust basepoint (Jgt:) にチェックを入れます。

## プレビューの自動更新 {#t2d3346c}

dviout には DVI ファイルが更新されると自動的に表示を更新する機能があります。
自動更新機能を有効にするには以下の設定を行います。

- \[Option\]-\[Setup parameters...\]-\[System\]-\[Auto Renew\] にチェックを入れます。
- \[Option\]-\[Continuous Renew\] にチェックを入れます。

## PDF を作るには {#c3def66b}

### dvipdfmx {#b020c0c5}

dviout は，「ニコニコマーク」ボタン（dvipdfm\[x\] の起動ボタン）で PDF ファイルを作成することができます。
初期設定では「ニコニコマーク」ボタンが表示されていませんが，
メニューバーから \[View\] → \[Change Tool Buttons\] を選択すると現れます。
PDF 化は dviout から dvipdfmx を起動して行われるので，各種設定には dvipdfmx 側の設定を正しく行う必要があります。

ただし，[graphicx](/graphicx/) や color 等の「ドライバ依存」があるパッケージを使用する場合は注意が必要です。
このようなパッケージを使う場合，一般には

```
\usepackage[dviout]{graphicx} % dviout でDVIファイルを見る場合
\usepackage[dvipdfmx]{graphicx} % dvipdfmx でPDFに変換する場合
```

のように，DVIウェアに応じてオプションを変えて tex 文書をコンパイルし直す必要があります。
「ニコニコマーク」ボタンは dviout から dvipdfmx を簡便に実行できる機能ですが，この「ドライバの取換」については全く何の補助も行いません。
ただ，「dviout 用」の DVI ファイルを無理やり dvipdfmx で処理しようとするだけで，これでは不正な出力になる可能性があります。
従って，オプションを dvipdfmx に変えてコンパイルする必要があるわけですが，この際に dviout で DVI の再読込が行われると今度は dviout の表示が不正になってしまいます。

※graphicx や color 等のパッケージの仕様が常態化した現在では，このような連携機能の有用性が薄らいでいるのかも知れません。
dviout の使用が主流だった昔は，「図を入れる」といっても picture 環境や「後で手で入れる（！）」等の graphicx を使わない方法も採られていました。
また，昔は dvips と dvipdfmx の互換性がある程度担保されていたので，「dvips ドライバを指定すれば dviout と dvipdfmx の両方が使える」という裏技が使えたようです。

### dvips + ps2pdf.exe (Ghostscript) {#bbe5941f}

dvipdfmx 以外では dvips + ps2pdf.exe (Ghostscript) でも PDF ファイルを作成することが可能です。
dvips + ps2pdf.exe を使用して PDF ファイルに変換する場合は graphicx パッケージを読み込む際に次のように dvips オプションを指定します：

```
\usepackage[dvips]{graphicx}
```

## PostScript (EPS) 画像 {#ib983531}

[Ghostscript](/Ghostscript/) をインストールして
dviout で Ghostscript を使うように設定すれば，[PostScript](/PostScript/) 画像を含む
DVI ファイルを表示・印刷することができます。
モノクロで表示されてしまう場合は dviout の \[Option\] → \[Setup Parameters\] → \[Graphic\] → \[GIF\] で
raw PBM を BMP (full color) に変更して \[Save\]-\[適用(A)\]-\[OK\] をクリックすればフルカラーになります。

```
 \usepackage[dvips]{hyperref}
```

を使用する場合は \[Option\] → \[Graphic\] の「Direct PS」のチェックをはずしてください。
チェックしたまま dviout で表示しようとすると警告が表示されます。

dviout の印刷は Windows に依存しています。
特に画像の印刷は Windows のバージョンによってはトラブルが生じることがあります。
dviout で印刷がうまくいかない場合は dvipdfmx または dvips + ps2pdf.exe (Ghostscript) で PDF ファイルに変換して印刷してみてください。

## EPS 以外の画像を使うには {#z97e7e7b}

dviout for Windows は Susieプラグインをインストールすることで PNG, JPEG 画像フォーマットを表示することができます。

<!-- -[[dvioutにSusieプラグインを入れる:http://tasusuweb.appspot.com/tex/susie.html]] -->

### PNG 形式 {#v2a0576b}

PNG 形式の画像を表示するには WIC Susie Plug-in が必要です。

- [TORO's Software library(Win32/Win64 Plugin)](http://homepage1.nifty.com/toro/slplugin.html)
    から WIC Susie Plug-in をダウンロードしてください。
    展開後

- 64-bit dviout の場合は iftwic.sph
- 32-bit dviout の場合は iftwic.spi

を dviout.exe と同じフォルダーに配置します。
他のフォルダーに配置する場合は \[Option\] → \[Setup Parameters\] → \[Graphic\] → \[spi\] に iftwic.sph または iftwic.spi が存在するフォルダーを指定してください。
プリアンブルに

```
\usepackage[dviout]{graphicx}
```

を記述すると PNG 画像が表示できます。
dvipdfmx を使用して PDF ファイルに変換する場合は graphicx パッケージを読み込む際に次のように dvipdfmx オプションを指定します。

```
\usepackage[dvipdfmx]{graphicx}
```

これでうまくいかない場合は，PDF ファイルで出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) などでプレビューしてください。

### JPEG 形式 {#s4f7def7}

JPEG 形式の画像を表示するには WIC Susie Plug-in が必要です。

- [TORO's Software library(Win32/Win64 Plugin)](http://homepage1.nifty.com/toro/slplugin.html)

から WIC Susie Plug-in をダウンロードしてください。
展開後

- 64-bit dviout の場合は iftwic.sph
- 32-bit dviout の場合は iftwic.spi

を dviout.exe と同じフォルダーに配置します。
他のフォルダーに配置する場合は \[Option\] → \[Setup Parameters\] → \[Graphic\] → \[spi\] に iftwic.sph または iftwic.spi が存在するフォルダーを指定してください。
プリアンブルに

```
\usepackage[dviout]{graphicx}
```

を記述すると JPEG 画像が表示できます。
dvipdfmx を使用して PDF ファイルに変換する場合は graphicx パッケージを読み込む際に次のように dvipdfmx オプションを指定します。

```
\usepackage[dvipdfmx]{graphicx}
```

これでうまくいかない場合は，PDF ファイルで出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) などでプレビューしてください。

## Warning を無視する {#fa72a1b5}

- hyperrefとdvioutのwarning ([qa:38510](https://okumuralab.org/~okumura/texfaq/qa/38510.html), [qa:38511](https://okumuralab.org/~okumura/texfaq/qa/38511.html), [qa:38512](https://okumuralab.org/~okumura/texfaq/qa/38512.html))

## SyncTeX {#ab3daddf}

dviout は [SyncTeX](/SyncTeX/) には対応していませんが synctex コマンドを使用して forward and inverse search を行うことができます。

### forward search {#w6799fd9}

TeX ファイルの 30 行目に対応する DVI ファイルの該当するページにジャンプしたい場合は<br>

```
synctex view -i "30:0:hoge.tex" -o "hoge.dvi" -x "'C:\w32tex\dviout\dviout.exe' -1 -renew=+ '%{output}' %{page+1}"
```

のように実行します。

詳細については

```
synctex help view
```

を参照してください。

### inverse search {#k24873e6}

[TeXstudio](/TeXstudio/) で DVI ファイルの 30 ページ目の x 座標 0, y 座標 0 に対応する TeX ファイルの該当する行にジャンプしたい場合は

```
synctex edit -o "30:0:0:hoge.dvi" -x "texstudio -line %{line} '%{input}'"
```

のように実行します。

詳細については

```
synctex help edit
```

を参照してください。

## 関連リンク {#a0623ac1}

- [TeX関係文書](http://argent.shinshu-u.ac.jp/~otobe/tex/docs/)
