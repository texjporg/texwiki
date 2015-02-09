---
title: "dviout"
url: "/dviout/"
date: 2013-06-08T19:23:34Z
pukiwiki: "dviout"
---

# dviout

## dviout {#db720534}

<span style="font-size:30px">dviout は現在，非推奨です！</span>

- 挿入した画像が適切に表示されない
- CID に完全対応していない（Adobe-Japan1 の CID 直接参照の機能は無い）
- PDF や PostScript の機能に強く依存するパッケージに未対応

などの問題があります．[古い情報](</古い情報/#je1d5241>)もご覧ください．
このため，現在は DVI ではなく PDF でのプレビューが推奨されています．

以下の情報はアーカイブとして残しておきます．
極力削除はお控えください．[forum:1013](https://okumuralab.org/tex/mod/forum/discuss.php?d=1013) の<strong>「削除は原則禁止」</strong>の合意事項に基づきます．

<strong>目次</strong>

## dviout for Windows とは？ {#i1497a3b}

dviout for Windows は (e-)(u)pTeX 対応の DVI プレビューアです。
詳しくは開発者（[大島利雄さん](http://akagi.ms.u-tokyo.ac.jp/~oshima/)）ご自身によるページをご覧ください。

- [Oshima Laboratory Home Page (JP)](http://akagi.ms.u-tokyo.ac.jp/index-j.html) (大島研究室＠東京大)
    - [TeX](http://akagi.ms.u-tokyo.ac.jp/ftp-j.html#TeX)
    - [dviout/dviprt 情報](http://akagi.ms.u-tokyo.ac.jp/dviout.html)
    - [dviout/dviprt 開発室](http://akagi.ms.u-tokyo.ac.jp/dvitest.html)
    - [DVIware としての dviout](http://akagi.ms.u-tokyo.ac.jp/cmode.html)
    - [Windows95/98/Me/NT/2000/XP における dviout のインストール](http://akagi.ms.u-tokyo.ac.jp/tex_dvioutw.html)

USBメモリ活用講座の dviout for Windows のページも参考にしてください。<br>

- [USBメモリ活用講座【実践編・dviout for Windowsポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/dviout.shtml)

## インストール {#v433ca0f}

あらかじめ TeX システムをインストールしておきます。<br>
[Microsoft Windows - TeX Wiki](</Microsoft Windows/>) をご覧ください。<br>

### TeX Live の場合 {#se2d51a5}

TeX Live の Win32 版には dviout が含まれています．<br>

### W32TeX の場合 {#r4cfc9ce}

W32TeX には dviout が含まれていないので dviout をダウンロードします．<br>

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

64-bit dviout を使用する場合は dviout-x64.zip と tex318w.zip をダウンロードします。<br>
32-bit dviout を使用する場合は tex318w.zip をダウンロードします。<br>
ダウンロードした zip ファイルを右クリックします。<br>

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

64-bit dviout を使用する場合は 32-bit dviout のフォルダーの dviout.exe と dviout.chm 以外のファイルを dviout-x64 フォルダーにコピーします．<br>
32-bit dviout を使用する場合は \[名前の変更(M)\] を選択して dviout という名前のフォルダー名に変更します。<br>
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

### License {#w9d4ec9d}

[Expat License](http://tug.org/svn/dviout/trunk/README?view=markup) (MIT License)

Expat License については

- [License:Expat - Free Software Directory](http://directory.fsf.org/wiki/License:Expat)
- [さまざまなライセンスとそれらについての解説 - GNU プロジェクト - フリーソフトウェア財団 (FSF)#Expat](http://www.gnu.org/licenses/license-list.html#Expat)

を参照．

### リリース情報 {#uce3262c}

2013-12-14 dviout 3.18.4 ALPHA 1<br>

dviout 3.18.3 ALPHA 5 以前の dviout には以下の問題があります。<br>

- [QA54696](https://okumuralab.org/~okumura/texfaq/qa/54696.html) で指摘された、サイズの大きい PK フォントについてバグがあります。<br>
- 非常に長いフォント名を与えるとクラッシュします。<br>

dviout 3.18.4 ではこれらの点が訂正されています。<br>
dviout 3.18.4 は実質的に
dviout3183a6-inst-20111008.zip と同じものです。<br>
dviout 3.18.4 (dviout3184-inst.zip) は
dviout3183a6-inst-20111008.zip に最小の修正を加え，正式リリースされたものです。

### ChangeLog {#r5124b5a}

- \[[dviout\] Index of /trunk](http://tug.org/svn/dviout/trunk/)
    - [log](http://tug.org/svn/dviout/trunk/?view=log)
- \[[texlive\] Index of /trunk/Master/tlpkg/dviout](http://tug.org/svn/texlive/trunk/Master/tlpkg/dviout/)
    - [log](http://tug.org/svn/texlive/trunk/Master/tlpkg/dviout/?view=log)

## ビルド → 問題が発生する場合は PDF ファイルで出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) でプレビューする {#d0101f83}

[Subversion Windows Installer](http://alagazam.net/) から Windows バイナリをダウンロードして展開し，bin フォルダー (svn.exe のあるフォルダー) に PATH を通します．<br>
Windows PowerShell またはコマンド プロンプトを起動して dviout のソースコードを取得します．<br>

```
mkdir dviout
cd dviout
svn co svn://tug.org/dviout/trunk
```

trunk の dviout.sln をダブルクリックして Microsoft Visual Studio を起動します．<br>
Solution Explorer から dviwin.c を削除します．<br>
BUILD -> Build Solution で dviout をビルドします．<br>
Windows PowerShell またはコマンド プロンプトからビルドしたい場合は MSBuild を使用してビルドすることもできます．<br>

```
msbuild dviout.sln
```

## 不具合 → 問題が発生する場合は PDF ファイルで出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) でプレビューする {#ufbeded4}

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

## dviout 非対応パッケージ → 問題が発生する場合は PDF ファイルで出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) でプレビューする {#pd5bea65}

PDF や PostScript の機能に強く依存するようなパッケージの場合うまく動作しない可能性が高いです．<br>
dviout で問題が発生する場合は dviout を使用せず PDF ファイルで出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) でプレビューしてください．<br>

### [TikZ](/TikZ/) {#m7bcebf4}

dviout は [TikZ](/TikZ/) に対応していません．<br>
PDF または SVG に変換して PDF・SVG ビューアで表示・印刷するといいでしょう。<br>

### [media9](/media9/) {#h55cad77}

dviout は [media9](/media9/) に対応していません．<br>
PDF に変換して [Adobe Reader](</Adobe Reader/>) で表示するといいでしょう。<br>

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

## upTeX で出力された DVI ファイルを dviout で表示 → 問題が発生する場合は PDF ファイルで出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) でプレビューする {#wadc9abf}

- upTeX のフォントと dviout ([qa:51135](https://okumuralab.org/~okumura/texfaq/qa/51135.html), [qa:51137](https://okumuralab.org/~okumura/texfaq/qa/51137.html))
- upTeX のフォントと dviout (再検討) ([qa:51610](https://okumuralab.org/~okumura/texfaq/qa/51610.html)) → [svn r180](http://tug.org/svn/dviout?limit_changes=0&view=revision&sortby=date&revision=180)以降、dviout 3.18.4 ALPHA 1などでは問題点が修正されています。
- Re: dvipng と日本語 ([qa:51705](https://okumuralab.org/~okumura/texfaq/qa/51705.html))
- uplatexのdvi表示(表罫線)について ([qa:55450](https://okumuralab.org/~okumura/texfaq/qa/55450.html), [qa:55452](https://okumuralab.org/~okumura/texfaq/qa/55452.html), [qa:55453](https://okumuralab.org/~okumura/texfaq/qa/55453.html), [qa:55454](https://okumuralab.org/~okumura/texfaq/qa/55454.html), [qa:55456](https://okumuralab.org/~okumura/texfaq/qa/55456.html))
- upLaTeXを使おう \[電脳世界の奥底にて\] の中の [dvioutについて](http://zrbabbler.sp.land.to/uplatex.html#ssec-install-dviout)
- [uptex, uplatex](http://d.hatena.ne.jp/gcg00467/20101223#1293103329)
- [USBメモリ活用講座【実践編・dviout for Windowsポータブル化】#upTeX/upLaTeX を利用する場合の設定](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/dviout.shtml#UPTEX)

upTeX で DVI ファイルを作成し，初期設定の状態で dviout で表示しようとすると font file over のエラーが発生します。<br>
\[OK\] をクリックすると dviout が強制終了します。<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>No Memory</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

<br>

　　<span style="color:White;background-color:#BB0000;">(<ins><strong>×</strong></ins>)</span>　font file over:<br>
　　　　　 C:\w32tex\share\texmf-dist\fonts\vf\uptex\jis\upjisr-h.vf<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span><br>

***

\[Option\]-\[Setup Parameters...\] から DVIOUTのプロパティの System タブの font buffer size を 400 K byte から 4000 K byte など，エラーが発生しない値に変更し，\[Save\]-\[適用(A)\]-\[OK\] をクリックします．<br>

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　<span style="color:#E0EB9F;background-color:#E0EB9F;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　 \]\[　Font2　\]\[ 　WinJFont　\]\[ 　JFont2　\]\[ 　Key　　 \]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]\[　Common　\]\[　Graphic　\]\[　Printer　\]\[　Paper　\]</ins></span><strong>\[　System　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　REGISTRY　\]</ins></span><br>
　　　　　raster buffer size　　　　　　　　　　br:　<ins>400　　　　　\[<strong>⇕</strong>\]</ins> K byte　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　Save　　　　\]</span><br>
　　　　　font buffer size　　　　　　　　　　　bf:　<ins>4000　　　　\[<strong>⇕</strong>\]</ins> K byte　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　Restore　　　 \]</span><br>
　　　　　bitmap buffer size/max　　　　　　bb:　<ins>4000　　　　\[<strong>⇕</strong>\]</ins> K byte　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　Default　　　 \]</span><br>
　　　　　number of dviouts/max　　　　multi:　<ins>4　　　　　　　\[<strong>⇕</strong>\]</ins><br>
　　　　　log file (path name or +:dviout.log or -:no log)：<br>
　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　☑ Auto Renew　　　　　　　　　　　☐ 2nd tool buttons　　　　　　　　☐ Reverse page_up/down<br>
　　　　　☐ draw baseline　　　　　　　　　　☐ draw box　　　　　　　　　　　　　☐ show child windows<br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[(parameter)file:\]</span> <ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　texhelp: <ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span> <span style="color:Gray;background-color:#EEEEEE;">\[　　　適用(A)　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　ヘルプ　　　\]</span>

***

font buffer size の値が小さいと起動しても dviout の下の方に警告が表示されます．<br>
このような警告が表示される場合は font buffer size の値を大きくしてください．<br>

***

```
Font buffer size -bf: 3200 K in [System] (<- Setup Parameters <- Option)
 is too small.
Not an error but it is better to increase the size!
```

***

DVI ファイルを表示するとフォントが正しく表示されず，dviout の下の方に Cannot find font file for uprml-h! の警告が表示されます．

***

```
Cannot find font file for uprml-h!
A default FONT will be used.
```

***

\[Option\]-\[Setup Parameters...\] から DVIOUTのプロパティの Font2 タブの \[ftt:\] をクリックします．

```
^x\map\ttfonts.map
```

が入力されるのを確認して，\[Save\]-\[適用(A)\]-\[OK\] をクリックします．

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　<span style="color:#E0EB9F;background-color:#E0EB9F;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]\[　Common　\]\[　Graphic　\]\[　Printer　\]\[　Paper　\]\[　System　\]\[　REGISTRY　　\]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　\]</ins></span><strong>\[　Font2　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 　WinJFont　\]\[ 　JFont2　\]\[ 　Key　　\]</ins></span><br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[gen:\]</span>　　　　　<ins>\`C:\w32tex\bin64\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s</ins> または <ins>\`C:\w32tex\bin\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s</ins><br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[ftt:\]</span>　　　　　 <ins>^x\map\ttfonts.map</ins><br>
　　　 TEXSUBF:　 <ins>^r\sfd\\\\;^r\\..\ttf2pk\\\\;^r\\..\ttf2tfm\\\\</ins><br>
　　　 TEXPKD:<br>
　　　 TEXFLI:<br>

<br>

　　　　☑ Keep Path (Fkeep:)　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　Flush　　　　\]</span><br>
　　　　☐ CheckFontID (c:)　　　　　　　　　　　　　　　　　　　　A:　<ins>0　　　　　　　\[<strong>⇕</strong>\]</ins>　　ttf: <ins>1　　　　　　　\[<strong>⇕</strong>\]</ins><br>
　　　　☑ VirtualFont (virtual:)<br>
　　　　☑ OnDemand (Fod:)　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　Save　　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　Restore　　　 \]</span><br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span> <span style="color:Gray;background-color:#EEEEEE;">\[　　　適用(A)　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　ヘルプ　　　\]</span>

***

C:\w32tex\dviout\map\ttfonts.map に

```
%input  $user.map
```

という行が存在するのを確認します．<br>
C:\w32tex\dviout\map\\$user.map を開くと<br>

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

を追加して保存します．<br>
保存するときは文字コードを Shift_JIS で保存してください．<br>
C:\w32tex\share\texmf-dist\doc\uptex\base\for_dviout.map に dviout 用 map ファイルの記述例があるので参考にしてみてください．<br>

DVI ファイルを表示するとフォントが正しく表示されるようになります．

\[Option\]-\[Setup Parameters...\] から DVIOUTのプロパティの JFont2 タブの Adjust basepoint (Jgt:) にチェックを入れます．

```
☑ Adjust basepoint (Jgt:)
```

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　<span style="color:#E0EB9F;background-color:#E0EB9F;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]\[　Common　\]\[　Graphic　\]\[　Printer　\]\[　Paper　\]\[　System　\]\[　REGISTRY　　\]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　\]\[　Font2　\]\[ 　WinJFont　\]</ins></span><strong>\[ 　JFont2　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 　Key　　\]</ins></span><br>
　　　 TEXKNJ:<br>
　　　 JC:<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[vfn:\]</span><br>
　　　 nttF:<br>
　　　 G:　　　　　　　<ins>goth;jisg</ins><br>

<br>

　　　　☐ NTTJTeX font subnstitution (ntt:)　　　　　　　　　Adjust size S: <ins>1000　　　　　　　\[<strong>⇕</strong>\]</ins> /1000<br>
　　　　☑ Use yoko font for tate (g:)　　　　　　　　　　　　　　　base line J:　<ins>0　　　　　　　　　\[<strong>⇕</strong>\]</ins> /1000<br>
　　　　☑ Use inner jfm (Jfm:)　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　Save　　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　Restore　　　 \]</span><br>
　　　　☑ Adjust baseline (Jbt:)　　　　　　　☑ Adjust basepoint (Jgt:)　　by jfm<br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span> <span style="color:Gray;background-color:#EEEEEE;">\[　　　適用(A)　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　ヘルプ　　　\]</span>

***

\[Save\]-\[適用(A)\]-\[OK\] をクリックします．

## プレビューの自動更新 {#t2d3346c}

dviout には DVI ファイルが更新されると自動的に表示を更新する機能があります．<br>
自動更新機能を有効にするには以下の設定を行います．<br>

- \[Option\]-\[Setup parameters...\]-\[System\]-\[Auto Renew\] にチェックを入れて \[Save\]-\[適用(A)\]-\[OK\] をクリックします．

***

<span style="color:#E0EB9F;background-color:#E0EB9F;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　<span style="color:#E0EB9F;background-color:#E0EB9F;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　 \]\[　Font2　\]\[ 　WinJFont　\]\[ 　JFont2　\]\[ 　Key　　 \]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]\[　Common　\]\[　Graphic　\]\[　Printer　\]\[　Paper　\]</ins></span><strong>\[　System　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　REGISTRY　\]</ins></span><br>
　　　　　raster buffer size　　　　　　　　　　br:　<ins>400　　　　　\[<strong>⇕</strong>\]</ins> K byte　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　Save　　　　\]</span><br>
　　　　　font buffer size　　　　　　　　　　　bf:　<ins>4000　　　　\[<strong>⇕</strong>\]</ins> K byte　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　Restore　　　 \]</span><br>
　　　　　bitmap buffer size/max　　　　　　bb:　<ins>4000　　　　\[<strong>⇕</strong>\]</ins> K byte　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　Default　　　 \]</span><br>
　　　　　number of dviouts/max　　　　multi:　<ins>4　　　　　　　\[<strong>⇕</strong>\]</ins><br>
　　　　　log file (path name or +:dviout.log or -:no log)：<br>
　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　☑ Auto Renew　　　　　　　　　　　☐ 2nd tool buttons　　　　　　　　☐ Reverse page_up/down<br>
　　　　　☐ draw baseline　　　　　　　　　　☐ draw box　　　　　　　　　　　　　☐ show child windows<br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[(parameter)file:\]</span> <ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　texhelp: <ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span> <span style="color:Gray;background-color:#EEEEEE;">\[　　　適用(A)　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　ヘルプ　　　\]</span>

***

- \[Option\]-\[Continuous Renew\] にチェックを入れます．

## PDF を作るには {#c3def66b}

### dvipdfmx {#b020c0c5}

dviout は，「ニコニコマーク」ボタン（dvipdfm\[x\] の起動ボタン）で PDF ファイルを作成することができます。<br>
初期設定では「ニコニコマーク」ボタンが表示されていないと思います。<br>
「ニコニコマーク」ボタンは，メニューバーから \[View\] → \[Change Tool Buttons\] を選択すると現れます。<br>
PDF 化は dviout から dvipdfmx を起動して行われるので，各種設定には dvipdfmx 側の設定を正しく行う必要があります。<br>

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

ただし，graphicx や color 等の「ドライバ依存」があるパッケージを使用する場合は注意が必要です．<br>
このようなパッケージを使う場合，一般には

```
\usepackage[dviout]{graphicx} % dviout でDVIファイルを見る場合
\usepackage[dvipdfmx]{graphicx} % dvipdfmx でPDFに変換する場合
```

のように，DVIウェアに応じてオプションを変えて tex 文書をコンパイルし直す必要があります．<br>
「ニコニコマーク」ボタンは dviout から dvipdfmx を簡便に実行できる機能ですが，この「ドライバの取換」については全く何の補助も行いません．<br>
ただ，「dviout 用」の DVI ファイルを無理やり dvipdfmx で処理しようとするだけで，これでは不正な出力になる可能性があります．<br>
従って，オプションを dvipdfmx に変えてコンパイルする必要があるわけですが，この際に dviout で DVI の再読込が行われると今度は dviout の表示が不正になってしまいます．<br>
このような面倒を避けたい場合は Windows PowerShell またはコマンド プロンプトから dvipdfmx を実行してください．<br>

※graphicx や color 等のパッケージの仕様が常態化した現在では，このような連携機能の有用性が薄らいでいるのかも知れません．<br>
dviout の使用が主流だった昔は，「図を入れる」といっても picture 環境や「後で手で入れる（！）」等の graphicx を使わない方法も採られていました．<br>
また，昔は dvips と dvipdfmx の互換性がある程度担保されていたので，「dvips ドライバを指定すれば dviout と dvipdfmx の両方が使える」という裏技が使えたようです．<br>

### dvips + ps2pdf.exe (Ghostscript) {#bbe5941f}

dvipdfmx 以外では dvips + ps2pdf.exe (Ghostscript) でも PDF ファイルを作成することが可能です。<br>
dvips + ps2pdf.exe を使用して PDF ファイルに変換する場合は graphicx パッケージを読み込む際に次のように dvips オプションを指定します：

```
\usepackage[dvips]{graphicx}
```

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

dviout の印刷は Windows に依存しています。<br>
特に画像の印刷は Windows のバージョンによってはトラブルが生じることがあります。<br>
dviout で印刷がうまくいかない場合は dvipdfmx または dvips + ps2pdf.exe (Ghostscript) で PDF ファイルに変換して印刷してみてください。<br>

## EPS 以外の画像を使うには {#z97e7e7b}

dviout for Windows は Susieプラグインをインストールすることで PNG, JPEG 画像フォーマットを表示することができます。<br>

<!-- -[[dvioutにSusieプラグインを入れる:http://tasusuweb.appspot.com/tex/susie.html]] -->

### PNG 形式 {#v2a0576b}

PNG 形式の画像を表示するには WIC Susie Plug-in が必要です。<br>

- [TORO's Software library(Win32/Win64 Plugin)](http://homepage1.nifty.com/toro/slplugin.html)

から WIC Susie Plug-in をダウンロードしてください。<br>
展開後

- 64-bit dviout の場合は iftwic.sph
- 32-bit dviout の場合は iftwic.spi

を dviout.exe と同じフォルダーに配置します．<br>
他のフォルダーに配置する場合は \[Option\] → \[Setup Parameters\] → \[Graphic\] → \[spi\] に iftwic.sph または iftwic.spi が存在するフォルダーを指定してください。<br>
プリアンブルに

```
\usepackage[dviout]{graphicx}
```

を記述すると PNG 画像が表示できます．<br>
dvipdfmx を使用して PDF ファイルに変換する場合は graphicx パッケージを読み込む際に次のように dvipdfmx オプションを指定します。<br>

```
\usepackage[dvipdfmx]{graphicx}
```

PNG ファイルが表示できない場合は dviout を使用せず PDF ファイルで出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) でプレビューしてください。<br>

### JPEG 形式 {#s4f7def7}

JPEG 形式の画像を表示するには WIC Susie Plug-in が必要です。<br>

- [TORO's Software library(Win32/Win64 Plugin)](http://homepage1.nifty.com/toro/slplugin.html)

から WIC Susie Plug-in をダウンロードしてください。<br>
展開後

- 64-bit dviout の場合は iftwic.sph
- 32-bit dviout の場合は iftwic.spi

を dviout.exe と同じフォルダーに配置します．<br>
他のフォルダーに配置する場合は \[Option\] → \[Setup Parameters\] → \[Graphic\] → \[spi\] に iftwic.sph または iftwic.spi が存在するフォルダーを指定してください。<br>
プリアンブルに

```
\usepackage[dviout]{graphicx}
```

を記述すると JPEG 画像が表示できます．<br>
dvipdfmx を使用して PDF ファイルに変換する場合は graphicx パッケージを読み込む際に次のように dvipdfmx オプションを指定します。<br>

```
\usepackage[dvipdfmx]{graphicx}
```

JPEG ファイルが表示できない場合は dviout を使用せず PDF ファイルで出力して [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) でプレビューしてください。<br>

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

## SyncTeX {#ab3daddf}

### forward search {#w6799fd9}

TeX ファイルの 30 行目に対応する DVI ファイルの該当するページにジャンプしたい場合は<br>

```
synctex view -i "30:0:hoge.tex" -o "hoge.dvi" -x "'C:\w32tex\dviout\dviout.exe' -1 -renew=+ '%{output}' %{page+1}"
```

のように実行します．<br>

## 関連リンク {#a0623ac1}

- [TeX インストールガイド―― dviout for Windows のインストール](http://www.nsknet.or.jp/~tony/TeX/install/win/dviout.htm) @ [トニイさん](http://www.nsknet.or.jp/~tony/) ([twitter](https://twitter.com/tony4649))（旧 @nifty DTP と印刷フォーラム \[FDTP\]）
- [TeX関係文書](http://argent.shinshu-u.ac.jp/~otobe/tex/docs/)
