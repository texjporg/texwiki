---
title: "dviout"
url: "/dviout/"
date: 2013-06-08T19:23:34Z
pukiwiki: "dviout"
---

# dviout

dviout で問題が発生する場合は <strong>dviout を使用せず PDF ファイルで出力して [SumatraPDF](/SumatraPDF/) や [TeXworks](/TeXworks/) でプレビューする</strong>方法があります。<br>
[ptex2pdf](/ptex2pdf/) を使用して TeX ファイルから直接 PDF ファイルを出力できます。<br>

## dviout for Windows (obsolete) → PDF ファイルで出力して [SumatraPDF](/SumatraPDF/) や [TeXworks](/TeXworks/) でプレビューする {#rfded337}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## dviout for Windows とは？ {#i1497a3b}

dviout for Windows は日本語対応の DVI プレビューアです。<br>
詳しくは開発者（[大島利雄さん](http://akagi.ms.u-tokyo.ac.jp/~oshima/)）ご自身による次のページをご覧ください。

- [dviout/dviprt 情報](http://akagi.ms.u-tokyo.ac.jp/dviout.html)
- [dviout/dviprt 開発室](http://akagi.ms.u-tokyo.ac.jp/dvitest.html)
- [Windows95/98/Me/NT/2000/XP における dviout のインストール](http://akagi.ms.u-tokyo.ac.jp/tex_dvioutw.html)

USBメモリ活用講座の dviout for Windows のページも参考にしてください。<br>

- [USBメモリ活用講座【実践編・dviout for Windowsポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/dviout.shtml)

### 動作環境 {#n7f5a256}

Windows 8.1, 8, 7, Vista, XP<br>

### License {#w9d4ec9d}

[Expat License](http://tug.org/svn/dviout/trunk/README?view=markup) (MIT License)

Expat License については

- [License:Expat - Free Software Directory](http://directory.fsf.org/wiki/License:Expat)
- [さまざまなライセンスとそれらについての解説 - GNU プロジェクト - フリーソフトウェア財団 (FSF)#Expat](http://www.gnu.org/licenses/license-list.html#Expat)

を参照．

### リリース情報 {#uce3262c}

2013-12-14 dviout 3.18.4 ALPHA 1<br>

dviout 3.18.3 ALPHA 5 以前の dviout は [QA54696](https://okumuralab.org/~okumura/texfaq/qa/54696.html) で指摘された、サイズの大きい PK フォント
についてバグがあり、また非常に長いフォント名を与えるとクラッシュする
問題を持っていました。<br>
dviout 3.18.4 は実質的に
dviout3183a6-inst-20111008.zip と同じものであり，ここではこれらの点が
訂正されています。<br>
dviout 3.18.4 (dviout3184-inst.zip) は dviout3183a6-inst-20111008.zip に
最小の修正を加え，正式リリースされたものです。

### ChangeLog {#r5124b5a}

- \[[dviout\] Index of /trunk](http://tug.org/svn/dviout/trunk/)
    - [log](http://tug.org/svn/dviout/trunk/?view=log)
- \[[texlive\] Index of /trunk/Master/tlpkg/dviout](http://tug.org/svn/texlive/trunk/Master/tlpkg/dviout/)
    - [log](http://tug.org/svn/texlive/trunk/Master/tlpkg/dviout/?view=log)

## ビルド {#d0101f83}

ソースコードを取得

```
mkdir dviout
cd dviout
svn co svn://tug.org/dviout/trunk
```

trunk の dviout.sln をダブルクリックして Microsoft Visual Studio を起動

Solution Explorer から dviwin.c を削除

BUILD -> Build Solution で dviout をビルド

MSBuild を使用してビルドすることもできます

```
msbuild dviout.sln
```

## 不具合 {#ufbeded4}

### dviout を管理者として実行していない場合に Error in RegCreateKey が表示される → dviout を管理者として実行する {#ca2f4069}

dviout を管理者として実行していない場合は Error in RegCreateKey が表示されるかもしれません。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　<span style="color:Black;"><strong>エラー</strong></span>　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

<br>

　　Error in RegCreateKey<br>

<br>

<br>

　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span><br>

***

Error in RegCreateKey が表示された場合は \[OK\] をクリックします。<br>
\[OK\] をクリックしても3, 4回ぐらい同じエラーが出ますがあきらめずに \[OK\] をクリックします。<br>
dviout を管理者として実行した場合はこのエラーは発生しないようです．<br>

## dviout 非対応処理系 {#kc6adab4}

### upTeX, e-upTeX {#lc765290}

dviout は upTeX, e-upTeX に対応していません．<br>
PDF に変換して PDF ビューアで表示・印刷するといいでしょう。<br>

## dviout 非対応パッケージ {#pd5bea65}

PDF や PostScript の機能に強く依存するようなパッケージの場合うまく動作しない可能性が高いです．<br>
dviout で問題が発生する場合は dviout を使用せず PDF ファイルで出力して [SumatraPDF](/SumatraPDF/) や [TeXworks](/TeXworks/) でプレビューしてください．<br>

### [TikZ](/TikZ/) {#m7bcebf4}

dviout は [TikZ](/TikZ/) に対応していません．<br>
PDF に変換して PDF ビューアで表示・印刷するといいでしょう。<br>

### [media9](/media9/) {#h55cad77}

dviout は [media9](/media9/) に対応していません．<br>
PDF に変換して PDF ビューアで表示するといいでしょう。<br>

### [OTF](/OTF/) {#i25da0b5}

dviout は [OTF パッケージ](/OTF/)に完全対応していません。<br>
\CID{...} などでの Adobe-Japan1 の CID 直接参照の機能は無く，
代わりに CID → Unicode の変換を経由した表示機能があります。<br>
dviout ではなく，dvipdfmx や dvips など
CID に完全対応した DVIware を利用しましょう。<br>

### [PSTricks](/PSTricks/) {#x2d3abf4}

dviout は dvips と完全互換ではありません。<br>
[PostScript](/PostScript/) に依存したもの（PSTricks など）には対応していません。<br>
dvips で PostScript に変換して [Ghostscript](/Ghostscript/) で表示・印刷するといいでしょう。<br>

## インストール {#f465326c}

あらかじめ TeX システムをインストールしておきます。<br>
[Microsoft Windows - TeX Wiki](</Microsoft Windows/>) をご覧ください。<br>

### TeX Live の場合 {#se2d51a5}

TeX Live の Win32 版には dviout が含まれています．<br>

### W32TeX の場合 {#r4cfc9ce}

W32TeX には dviout が含まれていないので dviout をダウンロードします．<br>
TeX インストーラ 3 で，dviout をインストールすることもできます．<br>
デフォルトでは C:\w32tex\dviout にインストールされます．<br>

#### 64-bit dviout {#e57715d6}

- [64bit dviout](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1171)

#### 32-bit dviout {#h6957949}

- [ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current_in_Japanese/](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current_in_Japanese/)
    （安定版）

- [ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current/](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current/) (安定版)
- [http://www.ring.gr.jp/pub/text/TeX/dviout/](https://mirror.ctan.org/../TeX/dviout/)
    （安定版のミラー）

- [ftp://ftp.kddilabs.jp/TeX/dviout/current/](ftp://ftp.kddilabs.jp/TeX/dviout/current/) (安定版のミラー)
- [ftp://ftp.kddilabs.jp/CTAN/dviware/dviout/](ftp://ftp.kddilabs.jp/CTAN/dviware/dviout/) (安定版のミラー)

64-bit dviout の場合は dviout-x64.zip をダウンロードします。<br>
32-bit dviout の場合は tex318w.zip をダウンロードします。<br>
dviout-x64.zip または tex318w.zip を右クリックします。<br>

***

　　　<strong>開く(O)</strong><br>
　　　新しいウィンドウで開く(E)<br>
<span style="color:Black;background-color:#DAEAFF;">　　　すべて展開(T)...　　　　　　　　　　　　　　　　　　　　　　</span><br>

　　　...<br>

***

\[すべて展開(T)...\] が表示される場合は \[すべて展開(T)...\] を選択して展開します。<br>
\[すべて展開(T)...\] が表示されない場合は zip 書庫が展開可能なアーカイバーを使用して展開します。<br>
展開したフォルダーを右クリックします。<br>

***

　　　<strong>開く(O)</strong><br>
　　　...<br>
　　　ショートカットの作成(S)<br>
　　　削除(D)<br>
<span style="color:Black;background-color:#DAEAFF;">　　　名前の変更(M)　　　　　　　　　　　　　　　　　　　　　　　</span><br>

　　　プロパティ(R)<br>

***

32-bit dviout の場合は \[名前の変更(M)\] を選択して dviout という名前のフォルダー名に変更します。<br>
dviout-x64 フォルダーまたは dviout フォルダーを C:\w32tex (W32TeX をインストールしたフォルダー) に移動させます。<br>
dviout-x64 フォルダーまたは dviout フォルダーの dviout.exe を右クリックします。<br>

***

　　　<strong>開く(O)</strong><br>
　　　...<br>
<span style="color:Black;background-color:#DAEAFF;">　　　プロパティ(R)　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

***

\[プロパティ(R)\] を選択します。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　</ins></span>[<img src="http://www.nsknet.or.jp/~tony/TeX/install/win/icon/dviout.gif" alt="dviout" width="18" height="16">](http://akagi.ms.u-tokyo.ac.jp/dviout.html)<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>dviout.exeのプロパティ</strong></span>　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　<strong>\[ 全般　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 互換性 \]\[ セキュリティ \]\[ 詳細　　\]\[ 以前のバージョン \]</ins></span><br>

　　　　[<img src="http://www.nsknet.or.jp/~tony/TeX/install/win/icon/dviout.gif" alt="dviout" style="float:left">](http://akagi.ms.u-tokyo.ac.jp/dviout.html)
　　　　　　　　　 <ins>dviout.exe</ins><br>
　　　　ファイルの種類:　　 アプリケーション (.exe)<br>
　　　　説明:　　　　　　　　　TeX previewer/printer_driver for Windows

<br>

　　　　場所:　　　　　　　　　C:\w32tex\dviout-x64<br>
　　　　サイズ:　　　　　　　　1.05 MB (1,106,944 バイト)<br>
　　　　ディスク上　　　　　　1.05 MB (1,110,016 バイト)<br>
　　　　のサイズ:<br>

<br>

　　　　作成日時:　　　　　　2013年12月14日、14:30:14<br>
　　　　更新日時:　　　　　　2013年12月14日、14:30:14<br>
　　　　アクセス日時:　　　　2013年12月14日、14:30:14<br>

<br>

　　　　属性:　　　　　　☐読み取り専用(R)　　☐隠しファイル(H)　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 詳細設定(D)... \]</span><br>
　　　　セキュリティ:　　このファイルは他のコンピューターから取得し　<span style="color:Black;background-color:#EEEEEE;">\[ ブロックの解除(K) \]</span><br>
　　　　　　　　　　　　　 たものです。このコンピューターを保護するた<br>
　　　　　　　　　　　　　 め、このファイルへのアクセスはブロックされる<br>
　　　　　　　　　　　　　 可能性があります。<br>

<br>

　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span>　<span style="color:Gray;background-color:#EEEEEE;">\[ 　　適用(A)　　 \]</span><br>

***

dviout.exeのプロパティの \[全般\] タブの属性の下にセキュリティの項目が表示されているかどうかを確認します。<br>
セキュリティの項目に「このファイルは他のコンピューターから取得したものです。このコンピューターを保護するため、このファイルへのアクセスはブロックされる可能性があります。」と表示されている場合は \[ブロックの解除(K)\]-\[適用(A)\]-\[OK\] をクリックします。<br>
dviout.exe を右クリックします。<br>

***

　　　<strong>開く(O)</strong><br>
<span style="color:Black;background-color:#DAEAFF;">　　　管理者として実行(A)　　　　　　　　　　　　　　　　　　　　</span><br>

　　　...<br>

***

\[管理者として実行(A)\] を選択して dviout を起動します。<br>
初回起動時は dviout が警告を表示します。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Warning</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

<br>

　　<span style="color:Black;background-color:#FFD900;"><ins>／<strong>！</strong>＼</ins></span>　Font path is not set.<br>
　　　　　　　 Install fundamental parameters?<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　はい(Y)　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　いいえ(N)　\]</span><br>

***

\[はい(Y)\] をクリックします。

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　<span style="color:Black;"><strong>Install fundamental parameters(Font resolution and Paper size)</strong></span>　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　Default Windows System printer:<br>
　　　Microsoft XPS Document Writer with 600 dpi<br>

<br>

　　Default for dviout...<br>
　　　Resolution of font(dpi:)　　　 <ins>600　　　　\[<strong>⇕</strong>\]</ins>　　　　　 　(●) Portrait<br>
　　 ☐ Different dpi for printing　 <span style="color:Gray;"><ins>300　　　　\[<strong>⇕</strong>\]</ins></span>　　　　　　 ◯ Landscape<br>
　　　Paper size　　　<ins>A4　　210 x 297 mm　　　　　　　　　　　　　\[▼\]</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　> Next　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

標準のプリンターの名前が表示され，フォント解像度（dpi 値）や紙のサイズを聞いてきます。<br>
ここでは Microsoft XPS Document Writer with 600 dpi と表示されているので 600 dpi に設定しました．<br>
\[> Next\] をクリックします。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Register the location of Font files</strong></span>　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Guess　　　\]</span>　　Push left button to detect fonts.<br>
　　　　　　　　　　　　　　　(Use dpi in the first page)<br>
TEXROOT:<br>
TEXPK:<br>
　　　　　　　　^r is replaced by TEXROOT<br>
　　　　　　　　^s is font name(eg. cmr10)<br>
　　　　　　　　^d is resolution(dpi)<br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　&lt; Back　　 \]</span> <span style="color:Gray;background-color:#EEEEEE;">\[ 　　> Next　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

フォントのある場所を聞いてきます。<br>
\[Guess\] をクリックします。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXの環境</strong></span>　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

<br>

　　<span style="color:White;background-color:#0000BB;">(<ins><strong>？</strong></ins>)</span>　標準的な日本語TeX環境が検知されました．<br>
　　　　　 それに合った環境設定を選択します．<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　はい(Y)　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　いいえ(N)　\]</span><br>

***

\[いいえ(N)\] をクリックして次のような値を手動で入力します。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Register the location of Font files</strong></span>　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Guess　　　\]</span>　　Push left button to detect fonts.<br>
　　　　　　　　　　　　　　　(Use dpi in the first page)<br>
TEXROOT: <ins>C:\w32tex\share\texmf-dist\fonts</ins><br>
TEXPK:　　<ins>^r\tfm\\\\^s^tfm;^r\pk\\\\^s.^dpk;^r\vf\\\\^s.vf;^r\ovf\\\\^s.ovf;^r\tfm\\\\^s.tfm</ins><br>
　　　　　　　　^r is replaced by TEXROOT<br>
　　　　　　　　^s is font name(eg. cmr10)<br>
　　　　　　　　^d is resolution(dpi)<br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　&lt; Back　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　> Next　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

```
TEXROOT: C:\w32tex\share\texmf-dist\fonts
TEXPK:   ^r\tfm\\^s^tfm;^r\pk\\^s.^dpk;^r\vf\\^s.vf;^r\ovf\\^s.ovf;^r\tfm\\^s.tfm
```

\[> Next\] をクリックします。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Register Programs</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　 ☑ Relate DVI file (.dvi) to dviout for Windows<br>
　　 ☑ Register dviout on Windows's menu: Start->Program<br>
　　 For font generation on demand, push \[gen:\] to set it<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gen:\]</span><br>
　　 For PostScript, push \[gsx:\] to set Ghostscript<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gsx:\]</span><br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　&lt; Back　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　Finish　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

\[gen:\] をクリックします。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　<span style="color:Black;"><strong>mktexpk/makepk/MaKeTeXPK</strong></span>　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

<br>

　　<span style="color:White;background-color:#0000BB;">(<ins><strong>？</strong></ins>)</span>　Automatic search?<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　はい(Y)　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　いいえ(N)　\]</span><br>

***

\[いいえ(N)\] をクリックして次のような値を手動で入力します。<br>

***

■ 64-bit dviout の場合<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Register Programs</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　 ☑ Relate DVI file (.dvi) to dviout for Windows<br>
　　 ☑ Register dviout on Windows's menu: Start->Program<br>
　　 For font generation on demand, push \[gen:\] to set it<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gen:\]</span>　　<ins>\`C:\w32tex\bin64\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s</ins><br>
　　 For PostScript, push \[gsx:\] to set Ghostscript<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gsx:\]</span><br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　&lt; Back　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　Finish　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

```
`C:\w32tex\bin64\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s
```

■ 32-bit dviout の場合<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Register Programs</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　 ☑ Relate DVI file (.dvi) to dviout for Windows<br>
　　 ☑ Register dviout on Windows's menu: Start->Program<br>
　　 For font generation on demand, push \[gen:\] to set it<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gen:\]</span>　　<ins>\`C:\w32tex\bin\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s</ins><br>
　　 For PostScript, push \[gsx:\] to set Ghostscript<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gsx:\]</span><br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　&lt; Back　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　Finish　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

```
`C:\w32tex\bin\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s
```

この頭に入っている文字はバッククォート (\`) です。<br>
手で書き込む際にはバッククォートを必ず先頭に入れてください。<br>
TeX や Ghostscript をネットワークドライブにインストールしてある場合は，
\[gen:\] と \[gsx:\] はボタンを押しても自動では入りません。<br>
手で打ち込む必要があります。<br>
\[gsx:\]をクリックします。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　<span style="color:Black;"><strong>gswin32.exe</strong></span>　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

<br>

　　<span style="color:White;background-color:#0000BB;">(<ins><strong>？</strong></ins>)</span>　Automatic search?<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　はい(Y)　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　いいえ(N)　\]</span><br>

***

\[いいえ(N)\] をクリックして次のような値を手動で入力します。<br>

***

■ 64-bit dviout の場合<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Register Programs</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　 ☑ Relate DVI file (.dvi) to dviout for Windows<br>
　　 ☑ Register dviout on Windows's menu: Start->Program<br>
　　 For font generation on demand, push \[gen:\] to set it<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gen:\]</span>　　<ins>\`C:\w32tex\bin64\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s</ins><br>
　　 For PostScript, push \[gsx:\] to set Ghostscript<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gsx:\]</span>　　<ins>C:\w32tex\bin64\rungs.exe</ins><br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　&lt; Back　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　Finish　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

```
C:\w32tex\bin64\rungs.exe
```

■ 32-bit dviout の場合<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Register Programs</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　 ☑ Relate DVI file (.dvi) to dviout for Windows<br>
　　 ☑ Register dviout on Windows's menu: Start->Program<br>
　　 For font generation on demand, push \[gen:\] to set it<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gen:\]</span>　　<ins>\`C:\w32tex\bin\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s</ins><br>
　　 For PostScript, push \[gsx:\] to set Ghostscript<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gsx:\]</span>　　<ins>C:\w32tex\bin\rungs.exe</ins><br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　&lt; Back　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　Finish　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

```
C:\w32tex\bin\rungs.exe
```

こちらのほうは頭のバッククォート (\`) は不要です。

\[Finish\] をクリックします。<br>
設定が完了すると dviout の下の方に簡単な補足説明が出ます。<br>

```
この画面は，右の [L] [S] ボタンで大きさを調整できます.

細かいパラメータの設定は，Option → Setup Parameters... で行います． たとえば

[Display] プレビュー画面における，紙面の表示サイズやコントラスト調整を行います．
  実際に調整して，その状態を設定できます．

一般に，次回以降の dviout にも設定を有効にするには [Save] を，今回有効にするには，
[Ok] を押します．設定内容の詳細は，[Help] や [？] を使って参照してください．

[Graphic] 画像関連で，カラーのPS画像取り込みには，-GIF: を設定します．

[Common] エディターとの相互ジャンプには，-src: を設定して，source specialを
用います．

PDFファイルへの変換が，ニコニコマークのボタン（cf. View → Change Tool Buttons）
で可能（要dvipdfm(x))．

詳しくは，Help → Help topics/Tips on dviout/Troubles in dviout を参照して下さい．
```

説明を閉じる場合は dviout の右下にある \[Close\] をクリックして閉じます。<br>

dviout の \[Option\] → \[Install\] を選べば設定が修正できます
（修正は \[Option\] メニューの \[Setup Parameters\] でもできます）。

dviout の \[Option\] → \[Uninstall\] を選べば，設定が初期化されます
（ファイルは消えません）。<br>
この場合には再度 dviout をダブルクリックして実行すれば，最初から設定が始められます。

## プレビューの自動更新 {#t2d3346c}

dviout には DVI ファイルが更新されると自動的に表示を更新する機能があります．<br>
自動更新機能を有効にするには以下の設定を行います．<br>

1. \[Option\]-\[Setup parameters...\]-\[System\]-\[Auto Renew\] にチェックを入れて \[Save\]-\[適用(A)\]-\[OK\] をクリックします．
1. \[Option\]-\[Continuous Renew\] にチェックを入れます．

## PDF を作るには {#c3def66b}

### dvipdfmx {#b020c0c5}

dviout は，「ニコニコマーク」ボタン（dvipdfm\[x\] の起動ボタン）で PDF ファイルを作成することができます。<br>
初期設定では「ニコニコマーク」ボタンが表示されていないと思います。<br>
「ニコニコマーク」ボタンは，メニューバーから \[View\] → \[Change Tool Buttons\] を選択すると現れます。<br>
PDF 化は dviout から dvipdfmx を起動して行われるので，各種設定には dvipdfmx 側の設定を正しく行う必要があります。<br>
PDF ファイルの作成がうまくいかない場合は [TeXworks](/TeXworks/) を使用してください．<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Print</strong></span>　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　Printer:　Make PDF by dvipdfm(x)　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　OK　　\]</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　Cancel　\]</span><br>
　　　Print range　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Help　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　Setup...　\]</span><br>
　　 (●) All　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ Selection \]</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ dviprt<br>
　　　◯ Pages (1)　　　　　　(8)　　　　　　　　　　☐ dvipdfm (not x)<br>
　　　　From:<ins>　　1\[<strong>⇕</strong>\]</ins>　　To:<ins>　　8\[<strong>⇕</strong>\]</ins>　　　　　　　　☐ View PDF ?<br>

***

### dvips + ps2pdf.bat (Ghostscript) {#bbe5941f}

dvipdfmx 以外では dvips + ps2pdf.bat (Ghostscript) でも PDF ファイルを作成することが可能です。<br>

## PostScript (EPS) 画像 {#ib983531}

[Ghostscript](/Ghostscript/) をインストールして
dviout で Ghostscript を使うように設定すれば，[PostScript](/PostScript/) 画像を含む
DVI ファイルを表示・印刷することができます。<br>
モノクロで表示されてしまう場合は dviout の \[Option\] → \[Setup Parameters\] → \[Graphic\] → \[GIF\] で
raw PBM を BMP (full color) に変更して \[Save\]-\[適用(A)\]-\[OK\] をクリックすればフルカラーになります。<br>

```
 \usepackage[dvips]{hyperref}
```

を使用する場合は Direct PS のチェックをはずしてください。<br>
チェックしたまま dviout で表示しようとすると警告が表示されます。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　<span style="color:#E0EB9F;background-color:#E0EB9F;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　 \]\[　Font2　\]\[ 　WinJFont　\]\[ 　JFont2　\]\[ 　Key　　 \]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]\[　Common　\]</ins></span><strong>\[　Graphic　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　Printer　\]\[　Paper　\]\[　System　\]\[　REGISTRY　\]</ins></span><br>
　　　　　tpic specials<br>
　　　　　 ◯ Off　　　　　　　　　　　　◯ Bezier　　　　　　　　　 (●) spline　　　　　　　　　　☐ tate<br>

　　　　　Ghostscript<br>
　　　　　 ◯ Off　　　　　　　　　　　 (●) On (default)　　　　　　 ◯ verbose<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ Direct PS ← \usepackage\[dvips\]{hyperref} を使用する場合はチェックをはずす<br>
　　　　　 ◯ PBM　　　　　　　　　　　◯ exact PBM　　　　　　　◯ gssub<br>
　　　　　<span style="color:Black;background-color:#EEEEEE;">\[gsx:\]</span> <ins>C:\w32tex\bin64\rungs.exe</ins> または <ins>C:\w32tex\bin\rungs.exe</ins><br>
　　　　　gdat: <ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　☐ draw frame (gbox:)　　　　　　　　　☑ gfit: color BMP　　　　　　　　☐ gow: overwrite<br>
　　　　　☐ size includes mag　　　　　　　　　　☑ gclip: clip　　　　　　　　　GIF:<ins>BMP (full color)\[▼\]</ins><br>
　　　　　 spi:　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　☑ color specials: <ins>auto mode (p2)　　\[▼\]</ins>　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　　Save　　　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　　　Restore　　　　 \]</span><br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span> <span style="color:Gray;background-color:#EEEEEE;">\[　　　適用(A)　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　ヘルプ　　　\]</span>

***

dviout の印刷は Windows に依存しており，特に画像の印刷は Windows のバージョンによってトラブルが生じることがあります。<br>
dviout で印刷がうまくいかない場合は dvipdfmx または dvips + ps2pdf.bat (Ghostscript) で PDF ファイルに変換して印刷してみてください。<br>

## EPS 以外の画像を使うには {#z97e7e7b}

dviout for Windows は Susieプラグインをインストールすることで PNG, JPEG 画像フォーマットを表示することができます。<br>
dvipdfmx を使用して PDF ファイルに変換する場合は graphicx パッケージを読み込む際に次のように dvipdfmx オプションを指定します：

```
\usepackage[dvipdfmx]{graphicx}
```

- [dvioutにSusieプラグインを入れる](http://tasusuweb.appspot.com/tex/susie.html)

### PNG 形式 {#v2a0576b}

PNG 形式の画像を表示するには ifpng.spi が必要です。<br>

- [【渡辺 裕朗】ソフトウエア](http://www.asahi-net.or.jp/~DS8H-WTNB/software/)
- [Susie32 PNG Plug-in (Regular 版)](http://cetus.sakura.ne.jp/softlab/software/ifpng.html)
- [Susie32 PNG Plug-in (Light 版)](http://cetus.sakura.ne.jp/softlab/software/ifpngl.html)

からプラグインを選択して ifpng.spi をダウンロードしてください。<br>
展開後 ifpng.spi を dviout.exe と同じフォルダーに配置します．<br>
他のフォルダーに配置する場合は \[Option\] → \[Setup Parameters\] → \[Graphic\] → \[spi\] に ifpng.spi が存在するフォルダーを指定してください。<br>
PNG ファイルが表示されない場合は dviout を使用せず PDF ファイルで出力して [SumatraPDF](/SumatraPDF/) や [TeXworks](/TeXworks/) でプレビューしてください。<br>

### JPEG 形式 {#s4f7def7}

JPEG 形式の画像を表示するには ifjpegx.spi が必要です。<br>

- [SIMD Enhanced JPEG Plug-in (Regular 版)](http://cetus.sakura.ne.jp/softlab/software/ifjpegx.html)
- [SIMD Enhanced JPEG Plug-in (Light 版)](http://cetus.sakura.ne.jp/softlab/software/ifjpegxl.html)

からプラグインを選択して ifjpegx.spi をダウンロードしてください。<br>
展開後 ifjpegx.spi を dviout.exe と同じフォルダーに配置します．<br>
他のフォルダーに配置する場合は 展開後 \[Option\] → \[Setup Parameters\] → \[Graphic\] → \[spi\] に ifjpegx.spi が存在するフォルダーを指定してください。<br>
JPEG ファイルが表示されない場合は dviout を使用せず PDF ファイルで出力して [SumatraPDF](/SumatraPDF/) や [TeXworks](/TeXworks/) でプレビューしてください。<br>

## Warning を無視する {#fa72a1b5}

- hyperrefとdvioutのwarning ([qa:38510](https://okumuralab.org/~okumura/texfaq/qa/38510.html), [qa:38511](https://okumuralab.org/~okumura/texfaq/qa/38511.html), [qa:38512](https://okumuralab.org/~okumura/texfaq/qa/38512.html))

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　<span style="color:#E0EB9F;background-color:#E0EB9F;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　 \]\[　Font2　\]\[ 　WinJFont　\]\[ 　JFont2　\]\[ 　Key　　 \]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]</ins></span><strong>\[　Common　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　Graphic　\]\[　Printer　\]\[　Paper　\]\[　System　\]\[　REGISTRY　\]</ins></span><br>
　　　　Loupe　　　　　　　　　　　　Option(+CTRL)　　　　　　　　　　　Shape　　　　　　　　　Back<br>
　　　Size:　<ins>250　　　　　\[<strong>⇕</strong>\]</ins>　　　　Size:　<ins>480　　　　　\[<strong>⇕</strong>\]</ins>　　　　　　 (●) Square　　　　　 (●) Default<br>
　　　Scale: <ins>1　　　　　　\[<strong>⇕</strong>\]</ins>　　　　Scale: <ins>8　　　　　　\[<strong>⇕</strong>\]</ins>　　　　　　　◯ Measure　　　　　◯ White<br>
　　　Speed: <ins>4　　　　　　\[<strong>⇕</strong>\]</ins>　　　　　　　　　　　　　　　　　　　　　　　　◯ Circle　　　　　　 ◯ Black<br>
　　　☐ Edge view<br>

<br>

　　　(g)source special/ignore specials　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　　Save　　　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　　　Restore　　　　 \]</span><br>
　　　src:　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　gsrc: <ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　isp:　<ins>pdf:</ins><br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span> <span style="color:Gray;background-color:#EEEEEE;">\[　　　適用(A)　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　ヘルプ　　　\]</span>

***

## 関連リンク {#a0623ac1}

- [TeX インストールガイド―― dviout for Windows のインストール](http://www.nsknet.or.jp/~tony/TeX/install/win/dviout.htm) @ [トニイさん](http://www.nsknet.or.jp/~tony/) ([twitter](https://twitter.com/tony4649))（旧 @nifty DTP と印刷フォーラム \[FDTP\]）
- [TeX関係文書](http://argent.shinshu-u.ac.jp/~otobe/tex/docs/)
