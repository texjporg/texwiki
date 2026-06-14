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

このため，<strong>現在は DVI ではなく PDF でのプレビューが推奨されています。</strong>

***

***

## dviout for Windows とは？ {#i1497a3b}

dviout for Windows は (e-)(u)pTeX 対応の DVI プレビューアです。
詳しくは開発者（[大島利雄さん](https://www.ms.u-tokyo.ac.jp/~oshima/)）ご自身によるページをご覧ください。

- [Oshima Laboratory Home Page (JP)](https://www.ms.u-tokyo.ac.jp/~oshima/index-j.html) (大島研究室＠東京大)
    - [Versions of dviout for Windows](https://www.ms.u-tokyo.ac.jp/~oshima/dviout/dvihist.html)

USBメモリ活用講座の dviout for Windows のページも参考にしてください。

- [USBメモリ活用講座【実践編・dviout for Windowsポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/dviout.shtml)

## インストール {#v433ca0f}

あらかじめ TeX システムをインストールしておきます。
[Microsoft Windows - TeX Wiki](</Microsoft Windows/>) をご覧ください。

### TeX Live の場合 {#se2d51a5}

TeX Live の windows 版には 32-bit 版の dviout が含まれています。

### dvioutの配布 {#h6957949}

#### TeX Users Group repositoryの版 (Ver.3.19.0~) {#x61c7151}

- [https://ftp.jaist.ac.jp/pub/CTAN/dviware/dviout/](https://ftp.jaist.ac.jp/pub/CTAN/dviware/dviout/) (CTANに登録された最新版)
- [https://ftp.yz.yamagata-u.ac.jp/pub/CTAN/dviware/dviout/](https://ftp.yz.yamagata-u.ac.jp/pub/CTAN/dviware/dviout/) (CTANに登録された最新版)
- [https://ftp.riken.jp/CTAN/dviware/dviout/](https://ftp.riken.jp/CTAN/dviware/dviout/) (CTANに登録された最新版)

#### 東京大学の版 (Ver.3.18.5) {#zdd6e510}

- [https://www.ms.u-tokyo.ac.jp/~oshima/dviout/dvihist.html](https://www.ms.u-tokyo.ac.jp/~oshima/dviout/dvihist.html)（東京大学の版）

## ビルド {#d0101f83}

[Downloads | VisualSVN](https://www.visualsvn.com/downloads/) から Apache Subversion command-line tools をダウンロードして展開し，bin フォルダー (svn.exe のあるフォルダー) に PATH を通します。
コマンドラインから dviout のソースコードを取得します。

```
mkdir dviout
cd dviout
svn co svn://tug.org/dviout/trunk
```

trunk の dviout.sln をダブルクリックして Microsoft Visual Studio を起動します。
BUILD -> Build Solution で dviout をビルドします。

コマンドラインから MSBuild を使用してビルドすることもできます。

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
PDF に変換して Adobe Acrobat Reader で表示するといいでしょう。

### [OTF](/OTF/) {#i25da0b5}

dviout は [OTF パッケージ](/OTF/)に完全対応していません。
\CID{...} などでの Adobe-Japan1 の CID 直接参照の機能は無く，
代わりに CID → Unicode の変換を経由した表示機能があります。
dviout ではなく，dvipdfmx や dvips など CID に完全対応した DVIware を利用しましょう。

- [QA: texlive2026でotfパッケージの\UTF{～}をdvioutで表示させたい | TeX](https://okumuralab.org/tex/mod/forum/discuss.php?d=4036)

### [PSTricks](/PSTricks/) {#x2d3abf4}

dviout は dvips と完全互換ではありません。
[PostScript](/PostScript/) に依存したもの（PSTricks など）には対応していません。
dvips で PostScript に変換して [Ghostscript](/Ghostscript/) で表示・印刷するといいでしょう。

## upLaTeX で出力された DVI ファイルを dviout で表示 {#wadc9abf}

upLaTeX で出力された DVI ファイルを dviout で表示する場合は

- [dvioutでupLaTeXのDVIを扱う話](http://qiita.com/zr_tex8r/items/8b50836f719dec8b0bee)

を参照してください。

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
\usepackage[dvipdfmx]{graphicx} % dvipdfmx でPDFに変換する場合
\usepackage[dviout]{graphicx} % dviout でDVIファイルを見る場合
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

dviout for Windows は [Susie](https://www.digitalpad.co.jp/~takechin/)プラグインをインストールすることで PNG, JPEG 画像フォーマットを表示することができます。

- [\`dviout' for package \`graphics'に関しての質問](https://okumuralab.org/tex/mod/forum/discuss.php?d=2235)
- [\`dviout' for package \`graphics'.](https://okumuralab.org/tex/mod/forum/discuss.php?d=1569)

うまくいかない場合は，dvipdfmx で PDF ファイルを出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) などでプレビューしてください。

## SyncTeX {#ab3daddf}

dviout は [SyncTeX](/SyncTeX/) には対応していませんが synctex コマンドを使用して forward and inverse search を行うことができます。

### forward search {#w6799fd9}

TeX ファイルの 30 行目に対応する DVI ファイルの該当するページにジャンプしたい場合は

```
synctex view -i "30:0:hoge.tex" -o "hoge.dvi" -x "'C:\texlive\2024\tlpkg\dviout\dviout.exe' -1 -renew=+ '%{output}' %{page+1}"
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

- [CTAN dviout](https://ctan.org/tex-archive/dviware/dviout)
- [TeX Users Group - subversion repository](https://www.tug.org/svn/dviout/)
- [TeX Users Group - dviout Mailing List](https://tug.org/mailman/listinfo/dviout)
- [TeX関係文書](https://web.archive.org/web/20210509082947/http://argent.shinshu-u.ac.jp/~otobe/tex/docs/) [関連ファイル](https://web.archive.org/web/20240515161652/http://argent.shinshu-u.ac.jp/~otobe/tex/files/) (乙部先生@信州大学)
- [dviout-util-win32.zip (dviout の一部である dvispc / chkfont / propw の改良版 Windows バイナリ)](https://x.com/aminophen/status/873785429765480448)

### ライセンス {#w9d4ec9d}

[Expat License](http://tug.org/svn/dviout/trunk/README?view=markup) (MIT License)

Expat License については

- [License:Expat - Free Software Directory](http://directory.fsf.org/wiki/License:Expat)
- [さまざまなライセンスとそれらについての解説 - GNU プロジェクト - フリーソフトウェア財団 (FSF)#Expat](https://www.gnu.org/licenses/license-list.html#Expat)

を参照。

### リリース情報 {#uce3262c}

#### 2021-05-09 dviout 3.19.0 {#z948889f}

TeX Users Group [subversion repository](https://svn.tug.org/dviout/)のソースコードによるビルドです。

- 0x8000〜0xFFFFFF(24bit)の文字コードを持つjfmの読み込みに対応
- CID コード → Unicode 変換を Adobe-Japan1-7 対応に
- chkfont.exe: TFM/JFMモードでOFM level 0, 1に対応。FONTモードでVF/OVFフォーマットに対応。

#### 2013-12-14 dviout 3.18.4 ALPHA 1 {#l6ffa3ca}

dviout 3.18.3 ALPHA 5 以前の dviout にあった，以下の問題が修正されています。

- [QA54696](https://okumuralab.org/~okumura/texfaq/qa/54696.html) で指摘された，サイズの大きい PK フォントについてバグがあります。
- 非常に長いフォント名を与えるとクラッシュします。

### ChangeLog {#r5124b5a}

- \[[ViewVC\] Index of: dviout/trunk](https://svn.tug.org/dviout/trunk/)
    - [log](https://svn.tug.org/dviout/trunk/?view=log)
    - [ChangeLog](https://svn.tug.org/dviout/trunk/ChangeLog?view=log)
- \[[ViewVC\] Index of: texlive/trunk/Master/tlpkg/dviout](https://svn.tug.org/texlive/trunk/Master/tlpkg/dviout/)
    - [log](https://svn.tug.org/texlive/trunk/Master/tlpkg/dviout/?view=log)
