---
title: "dviout"
url: "/dviout/"
date: 2013-06-08T19:23:34Z
pukiwiki: "dviout"
---

# dviout

dviout で問題が発生する場合は <strong>dviout を使用せず PDF ファイルで出力して [SumatraPDF](/SumatraPDF/) や [TeXworks](/TeXworks/) でプレビューする</strong>方法があります。<br>
TeX Live 2013 以降, W32TeX \[2013/03/11\] 以降であれば [ptex2pdf](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/ptex2pdf/ptex2pdf.lua?view=markup) を使用して TeX ファイルから直接 PDF ファイルを出力できます。<br>

## dviout for Windows {#rfded337}

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

Windows 8, 7, Vista, XP, 2000, NT, Me, 98, 95<br>

### License {#w9d4ec9d}

[Expat License](http://tug.org/svn/dviout/trunk/README?view=markup) (MIT License)

Expat License については

- [License:Expat - Free Software Directory](http://directory.fsf.org/wiki/License:Expat)
- [さまざまなライセンスとそれらについての解説 - GNU プロジェクト - フリーソフトウェア財団 (FSF)#Expat](http://www.gnu.org/licenses/license-list.html#Expat)

を参照．

### リリース情報 {#uce3262c}

2012-02-12 dviout 3.18.4 がリリースされました．<br>
以前の dviout は [QA54696](https://okumuralab.org/~okumura/texfaq/qa/54696.html) で指摘された、サイズの大きい PK フォント
についてバグがあり、また非常に長いフォント名を与えるとクラッシュする
問題を持っていました。<br>
最新版の dviout 3.18.4 は CTAN にある
dviout3184-inst.zip と同じものであり，ここではこれらの点が
訂正されています。

### ChangeLog {#r5124b5a}

- [http://tug.org/svn/dviout/](http://tug.org/svn/dviout/)
    - [log](http://tug.org/svn/dviout/trunk/?view=log)

## インストール {#f465326c}

あらかじめ TeX システムをインストールして
おきます。[Microsoft Windows - TeX Wiki](</Microsoft Windows/>) を
ご覧ください。<br>

### TeX Live の場合 {#se2d51a5}

TeX Live の Win32 版には標準で dviout が含まれています．<br>
TeX Live 2013 であれば C:\texlive\2013\tlpkg\dviout 以下に配置されています．<br>

### W32TeX の場合 {#r4cfc9ce}

W32TeX には dviout が含まれていないので dviout for Windows の最新の安定版をダウンロードします．<br>

- [ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current_in_Japanese/](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current_in_Japanese/)
    （安定版）

- [ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current/](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current/) (安定版)
    - [http://www.ring.gr.jp/pub/text/TeX/dviout/](https://mirror.ctan.org/../TeX/dviout/)
        （安定版のミラー）
    - [ftp://ftp.kddilabs.jp/TeX/dviout/current/](ftp://ftp.kddilabs.jp/TeX/dviout/current/) (安定版のミラー)
    - [ftp://ftp.kddilabs.jp/CTAN/dviware/dviout/](ftp://ftp.kddilabs.jp/CTAN/dviware/dviout/) (安定版のミラー)

安定版は “tex318w.zip” といった名前になります。<br>
tex318w.zip をダウンロードします。<br>
tex318w.zip ファイルを右クリックします。<br>

***

　　　<strong>開く(O)</strong><br>
　　　新しいウィンドウで開く(E)<br>
<span style="color:Black;background-color:#DAEAFF;">　　　すべて展開(T)...　　　　　　　　　　　　　　　　　　　　　　</span><br>

　　　...<br>

***

\[すべて展開(T)...\] が表示される場合は \[すべて展開(T)...\] を選択して tex318w フォルダーに展開します。<br>
\[すべて展開(T)...\] が表示されない場合は zip 書庫が展開可能なアーカイバーを使用して展開します。<br>
展開した tex318w フォルダーを右クリックします。<br>

***

　　　<strong>開く(O)</strong><br>
　　　...<br>
　　　ショートカットの作成(S)<br>
　　　削除(D)<br>
<span style="color:Black;background-color:#DAEAFF;">　　　名前の変更(M)　　　　　　　　　　　　　　　　　　　　　　　</span><br>

　　　プロパティ(R)<br>

***

\[名前の変更(M)\] を選択して dviout という名前のフォルダー名に変更します。<br>
dviout フォルダーを C:\w32tex (W32TeX をインストールしたフォルダー) に移動させます。<br>
TeX インストーラ 3 で，dviout をインストールするとデフォルトでは C:\w32tex\dviout にインストールされます．<br>
dviout フォルダーの dviout.exe を右クリックします。<br>

***

　　　<strong>開く(O)</strong><br>
　　　...<br>
<span style="color:Black;background-color:#DAEAFF;">　　　プロパティ(R)　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

***

\[プロパティ(R)\] を選択します。<br>

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　</ins></span>[<img src="http://www.nsknet.or.jp/~tony/TeX/install/win/icon/dviout.gif" alt="dviout" width="18" height="16">](http://akagi.ms.u-tokyo.ac.jp/dviout.html)<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>dviout.exeのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<strong>\[ 全般　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 互換性 \]\[ セキュリティ \]\[ 詳細　　\]\[ 以前のバージョン \]</ins></span><br>

　　　　[<img src="http://www.nsknet.or.jp/~tony/TeX/install/win/icon/dviout.gif" alt="dviout" style="float:left">](http://akagi.ms.u-tokyo.ac.jp/dviout.html)
　　　　　　　　　 <ins>dviout.exe</ins><br>
　　　　ファイルの種類:　　 アプリケーション (.exe)<br>
　　　　説明:　　　　　　　　　TeX previewer/printer_driver for Windows32

<br>

　　　　場所:　　　　　　　　　C:\w32tex\dviout<br>
　　　　サイズ:　　　　　　　　824 KB (843,776 バイト)<br>
　　　　ディスク上　　　　　　824 KB (843,776 バイト)<br>
　　　　のサイズ:<br>

<br>

　　　　作成日時:　　　　　　2012年2月12日、20:29:28<br>
　　　　更新日時:　　　　　　2012年2月12日、20:29:28<br>
　　　　アクセス日時:　　　　2012年2月12日、20:29:28<br>

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
<span style="color:Black;background-color:#DAEAFF;">　　　管理者として実行(A)...　　　　　　　　　　　　　　　　　　　</span><br>

　　　...<br>

***

\[管理者として実行(A)...\] が表示される場合は \[管理者として実行(A)...\] を選択して dviout を起動します。<br>
\[管理者として実行(A)...\] が表示されない場合は，<strong>\[開く(O)\]</strong> を選択して dviout を起動します。<br>
初回起動時は dviout が 

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>Warning</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:#EEEEEE;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

<br>

　　<span style="color:Black;background-color:#FFD900;"><ins>／<strong>！</strong>＼</ins></span>　Font path is not set.<br>
　　　　　　　 Install fundamental parameters?<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　はい(Y)　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　いいえ(N)　\]</span><br>

***

と聞いてきますので， \[はい(Y)\] をクリックします。

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>Install fundamental parameters(Font resolution and Paper size)</strong></span>　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　Default Windows System printer:<br>
　　　Microsoft XPS Document Writer with 600 dpi<br>

<br>

　　Default for dviout...<br>
　　　Resolution of font(dpi:)　　　 <ins>600　　　　\[◆\]</ins>　　　　　 　 ◎ Portrait<br>
　　 ☐ Different dpi for printing　 <span style="color:Gray;"><ins>300　　　　\[◆\]</ins></span>　　　　　　 ◯ Landscape<br>
　　　Paper size　　　<ins>A4　　210 x 297 mm　　　　　　　　　　　　　\[▼\]</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　> Next　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

標準のプリンターの名前が表示され，フォント解像度（dpi 値）や紙のサイズを聞いてきます。<br>
ここでは Microsoft XPS Document Writer with 600 dpi と表示されているので 600 dpi に設定しました．<br>
プリンターが存在しないまたは不明の場合は解像度は標準の 300 dpi にしておきます。<br>
紙のサイズも標準の A4，縦置き (Portrait) のままで OK です。<br>
\[> Next\] をクリックします。<br>

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>Register the location of Font files</strong></span>　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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
\[Guess\] をクリックすると

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>TeXの環境</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:#EEEEEE;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

<br>

　　<span style="color:White;background-color:#0000BB;">(<ins><strong>？</strong></ins>)</span>　標準的な日本語TeX環境が検知されました．<br>
　　　　　 それに合った環境設定を選択します．<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　はい(Y)　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　いいえ(N)　\]</span><br>

***

と言ってくるので \[はい(Y)\] をクリックします。<br>
そうすれば，次のような標準値が入ります。<br>
W32TeX \[2013/04/08\] 以降は TEXROOT の値に C:\w32tex\share\texmf-dist\fonts を指定してください。<br>

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>Register the location of Font files</strong></span>　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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
TEXROOT: C:\w32tex\share\texmf-dist\fonts （または ^T\fonts）
TEXPK:   ^r\tfm\\^s^tfm;^r\pk\\^s.^dpk;^r\vf\\^s.vf;^r\ovf\\^s.ovf;^r\tfm\\^s.tfm
```

そのままで変更せずに \[> Next\] をクリックします。

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>Register Programs</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>mktexpk/makepk/MaKeTeXPK</strong></span>　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:#EEEEEE;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

<br>

　　<span style="color:White;background-color:#0000BB;">(<ins><strong>？</strong></ins>)</span>　Automatic search?<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　はい(Y)　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　いいえ(N)　\]</span><br>

***

と聞いてきますので， \[はい(Y)\] をクリックします。<br>
ここで TeX がインストールされていないと失敗します。<br>
W32TeX がインストールされていれば次のように入るはずです。<br>

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>Register Programs</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

この頭に入っているのはバッククォート (\`) です。
手で書き込む際にはバッククォートを必ず先頭に入れてください。<br>
TeX や Ghostscript をネットワークドライブにインストールしてある場合は，
\[gen:\] と \[gsx:\] はボタンを押しても自動では入りません。<br>
手で打ち込む必要があります。<br>
[Ghostscript](/Ghostscript/) がインストールされていれば，\[gsx:\]をクリックします。<br>

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>gswin32.exe</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:#EEEEEE;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

<br>

　　<span style="color:White;background-color:#0000BB;">(<ins><strong>？</strong></ins>)</span>　Automatic search?<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　はい(Y)　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　いいえ(N)　\]</span><br>

***

と聞いてきますので， \[はい(Y)\] をクリックします。<br>
すると，例えば次のように入ります（環境やバージョンによって違いがあります）。<br>
■ Ghostscript を C:\gs\gs9.07 にインストールした場合

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>Register Programs</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ☑ Relate DVI file (.dvi) to dviout for Windows<br>
　　 ☑ Register dviout on Windows's menu: Start->Program<br>
　　 For font generation on demand, push \[gen:\] to set it<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gen:\]</span>　　<ins>\`C:\w32tex\bin\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s</ins><br>
　　 For PostScript, push \[gsx:\] to set Ghostscript<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gsx:\]</span>　　<ins>C:\gs\gs9.07\bin\gswin32c.exe</ins><br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　&lt; Back　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　Finish　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

```
C:\gs\gs9.07\bin\gswin32c.exe
```

■ Ghostscript を C:\Program Files\gs\gs9.07 にインストールした場合

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>Register Programs</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ☑ Relate DVI file (.dvi) to dviout for Windows<br>
　　 ☑ Register dviout on Windows's menu: Start->Program<br>
　　 For font generation on demand, push \[gen:\] to set it<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gen:\]</span>　　<ins>\`C:\w32tex\bin\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s</ins><br>
　　 For PostScript, push \[gsx:\] to set Ghostscript<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gsx:\]</span>　　<ins>C:\PROGRA~1\gs\gs9.07\bin\gswin32c.exe</ins><br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　&lt; Back　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　Finish　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

```
C:\PROGRA~1\gs\gs9.07\bin\gswin32c.exe
```

■ Ghostscript を C:\Program Files (x86)\gs\gs9.07 にインストールした場合

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>Register Programs</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　 ☑ Relate DVI file (.dvi) to dviout for Windows<br>
　　 ☑ Register dviout on Windows's menu: Start->Program<br>
　　 For font generation on demand, push \[gen:\] to set it<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gen:\]</span>　　<ins>\`C:\w32tex\bin\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s</ins><br>
　　 For PostScript, push \[gsx:\] to set Ghostscript<br>
　　<span style="color:Black;background-color:#EEEEEE;">\[gsx:\]</span>　　<ins>C:\PROGRA~2\gs\gs9.07\bin\gswin32c.exe</ins><br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　Help　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　&lt; Back　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　Finish　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　Cancel　　 \]</span><br>

***

```
C:\PROGRA~2\gs\gs9.07\bin\gswin32c.exe
```

こちらのほうは頭のバッククォート (\`) は不要です。

<!-- [Finish] をクリックすると -->

\[Finish\] をクリックします。<br>
dviout を管理者として実行していない場合は Error in RegCreateKey が表示されるかもしれません。<br>

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>エラー</strong></span>　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:#EEEEEE;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

<br>

　　Error in RegCreateKey<br>

<br>

<br>

　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span><br>

***

Error in RegCreateKey が表示された場合は \[OK\] をクリックします。<br>
\[OK\] をクリックしても3, 4回ぐらい同じエラーが出ますがあきらめずに \[OK\] をクリックします。<br>
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
この場合には再度 C:\w32tex\dviout\dviout.exe をダブルクリックして実行し，最初から設定が始められます。

なお，以前の dviout は [QA54696](https://okumuralab.org/~okumura/texfaq/qa/54696.html) で指摘された、サイズの大きい PK フォント
についてバグがあり、また非常に長いフォント名を与えるとクラッシュする
問題を持っていました。<br>
最新版の dviout 3.18.4 は実質的に CTAN にある
dviout3183a6-inst-20111008.zip と同じものであり，ここではこれらの点が
訂正されています。<br>
dviout 3.18.4 は dviout3183a6-inst-20111008.zip に
最小の修正を加え，正式リリースされたものです。

### 確認 {#h44c2d6a}

うまくいったかどうか確かめましょう。<br>
まず，[TeX入門/最初の例](</TeX入門/最初の例/>) の ex1.tex をタイプセットします。<br>

```
>platex ex1
```

ex1.dvi が出力されたら dviout の \[File\]-\[Open...\] から ex1.dvi を選択して開きます。<br>

初回起動時にはここでフォント生成が始まりますが，数秒待つと文字が現れます。

ここで “Cannot resolve Fonts” というエラーが出るのは，TeX がうまく
インストールされていないか，TeX の環境変数が間違っているか，
あるいは dviout インストール時に入力した情報が間違っているためです。
もう一度これらを見直してください。

TXフォントなどの Type 1 フォントを使った
文書だけで “Cannot resolve Fonts” が出る場合には，[Ghostscript](/Ghostscript/) の
インストールまたは設定が失敗している可能性が考えられます。

Windows XP で一部の数式記号で文字化けが起こる場合は，パソコンに古い BaKoMa
フォントがインストールされている可能性があります。詳しくは乙部厳己さんの解説
「[WindowsXP 対応について](http://argent.shinshu-u.ac.jp/otobe/tex/book/WinXP.html)」
をご覧ください。

## プレビューの自動更新 {#t2d3346c}

dviout には DVI ファイルが更新されると自動的に表示を更新する機能があります．<br>
自動更新機能を有効にするには以下の設定を行います．<br>

1. \[Option\]-\[Setup parameters...\]-\[System\]-\[Auto Renew\] にチェックを入れて \[Save\]-\[適用(A)\]-\[OK\] をクリックします．
1. \[Option\]-\[Continuous Renew\] にチェックを入れます．

## PostScript (EPS) 画像 {#ib983531}

[Ghostscript](/Ghostscript/) をインストールして
dviout で Ghostscript を使うように設定すれば，[PostScript](/PostScript/) 画像を含む
DVI ファイルを表示・印刷することができます。

試しに C:\w32tex\dviout\GRAPHIC\PS\ フォルダー（ディレクトリ）にある
epsfdoc.tex をタイプセットして dviout で表示してみましょう。

このサンプルでは Ghostscript 附属の golfer.eps，tiger.eps を使っています。<br>
golfer.eps はモノクロ，tiger.eps はカラーの画像サンプルです。<br>
epsfdoc.tex をタイプセットするには，golfer.eps，tiger.eps を Ghostscript の examples\ フォルダー (C:\gs\gs9.07\examples\ または C:\Program Files\gs\gs9.07\examples\ または C:\Program Files (x86)\gs\gs9.07\examples\\) から
C:\w32tex\dviout\GRAPHIC\PS\ フォルダーにコピーしてください。

コマンド プロンプトから epsfdoc.tex のタイプセットを行います。

```
>cd c:\w32tex\dviout\GRAPHIC\PS
>platex epsfdoc
```

dviout で epsfdoc.dvi を開くと，3ページ目の下に虎の絵が表示されます。<br>
デフォルトの設定ではカラーのはずの虎がモノクロで表示されます。<br>
dviout の \[Option\] → \[Setup Parameters\] → \[Graphic\] → \[GIF\] で
raw PBM を BMP (full color) に変更して \[Save\]-\[適用(A)\]-\[OK\] をクリックすればフルカラーになります。<br>
必要であればきちんと印刷できるかどうか試してみてください。<br>

```
 \usepackage[dvips]{hyperref}
```

を使用する場合は Direct PS のチェックをはずしてください。<br>
チェックしたまま dviout で表示しようとすると警告が表示されます。<br>

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#D0DA8E;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　 \]\[　Font2　\]\[ 　WinJFont　\]\[ 　JFont2　\]\[ 　Key　　 \]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]\[　Common　\]</ins></span><strong>\[　Graphic　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　Printer　\]\[　Paper　\]\[　System　\]\[　REGISTRY　\]</ins></span><br>
　　　　　tpic specials<br>
　　　　　 ◯ Off　　　　　　　　　　　　◯ Bezier　　　　　　　　　　◎ spline　　　　　　　　　　☐ tate<br>

　　　　　Ghostscript<br>
　　　　　 ◯ Off　　　　　　　　　　　　◎ On (default)　　　　　　 ◯ verbose<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ Direct PS ← \usepackage\[dvips\]{hyperref} を使用する場合はチェックをはずす<br>
　　　　　 ◯ PBM　　　　　　　　　　　◯ exact PBM　　　　　　　◯ gssub<br>
　　　　　<span style="color:Black;background-color:#EEEEEE;">\[gsx:\]</span> <ins>C:\gs\gs9.07\bin\gswin32c.exe</ins><br>
　　　　　gdat: <ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　☐ draw frame (gbox:)　　　　　　　　　☑ gfit: color BMP　　　　　　　　☐ gow: overwrite<br>
　　　　　☐ size includes mag　　　　　　　　　　☑ gclip: clip　　　　　　　　　GIF:<ins>BMP (full color)\[▼\]</ins><br>
　　　　　 spi:　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　☑ color specials: <ins>auto mode (p2)　　\[▼\]</ins>　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　　Save　　　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　　　Restore　　　　 \]</span><br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span> <span style="color:Gray;background-color:#EEEEEE;">\[　　　適用(A)　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　ヘルプ　　　\]</span>

***

dviout の印刷は Windows に依存しており，特に画像の印刷は Windows のバージョンによってトラブルが生じることがあります。<br>
\[Option\] → \[Setup Parameters\] → \[Graphic\] で “auto mode (p2)” となっているところを変えるとうまくいくことがあるようです。<br>
dviout で印刷がうまくいかない場合は dvipdfmx または dvips + Ghostscript (ps2pdf) で PDF ファイルに変換して印刷してみてください。<br>

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

### JPEG 形式 {#s4f7def7}

JPEG 形式の画像を表示するには ifjpegx.spi が必要です。<br>

- [SIMD Enhanced JPEG Plug-in (Regular 版)](http://cetus.sakura.ne.jp/softlab/software/ifjpegx.html)
- [SIMD Enhanced JPEG Plug-in (Light 版)](http://cetus.sakura.ne.jp/softlab/software/ifjpegxl.html)

からプラグインを選択して ifjpegx.spi をダウンロードしてください。<br>
展開後 ifjpegx.spi を dviout.exe と同じフォルダーに配置します．<br>
他のフォルダーに配置する場合は 展開後 \[Option\] → \[Setup Parameters\] → \[Graphic\] → \[spi\] に ifjpegx.spi が存在するフォルダーを指定してください。<br>

## Warning を無視する {#fa72a1b5}

- hyperrefとdvioutのwarning ([qa:38510](https://okumuralab.org/~okumura/texfaq/qa/38510.html), [qa:38511](https://okumuralab.org/~okumura/texfaq/qa/38511.html), [qa:38512](https://okumuralab.org/~okumura/texfaq/qa/38512.html))

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#D0DA8E;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　 \]\[　Font2　\]\[ 　WinJFont　\]\[ 　JFont2　\]\[ 　Key　　 \]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]</ins></span><strong>\[　Common　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　Graphic　\]\[　Printer　\]\[　Paper　\]\[　System　\]\[　REGISTRY　\]</ins></span><br>
　　　　Loupe<br>
　　　Size:<br>
　　　Scale:<br>
　　　Speed:<br>
　　　☐ Edge view<br>

<br>

　　　(g)source special/ignore specials　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　　Save　　　　 \]</span> <span style="color:Black;background-color:#EEEEEE;">\[ 　　　　Restore　　　　 \]</span><br>
　　　src:　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　gsrc: <ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　isp:　<ins>pdf:</ins><br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span> <span style="color:Gray;background-color:#EEEEEE;">\[　　　適用(A)　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　ヘルプ　　　\]</span>

***

## 非対応パッケージ {#pd5bea65}

PDF や PostScript の機能に強く依存するようなパッケージの場合うまく動作しない可能性が高いです．<br>
dviout で問題が発生する場合は dviout を使用せず PDF ファイルで出力して [SumatraPDF](/SumatraPDF/) や [TeXworks](/TeXworks/) でプレビューしてください．<br>

### [OTF](/OTF/) {#i25da0b5}

dviout for Windows は [OTF パッケージ](/OTF/)に完全対応していません。<br>
\CID{...} などでの Adobe-Japan1 の CID 直接参照の機能は無く，
代わりに CID → Unicode の変換を経由した表示機能があります。<br>
dviout ではなく，dvipdfmx や dvips など
CID に完全対応した DVIware を利用しましょう。<br>

### [PSTricks](/PSTricks/) {#x2d3abf4}

dviout for Windows は dvips と完全互換ではありません。<br>
[PostScript](/PostScript/) に依存したもの（PSTricks など）には対応していません。<br>
dvips で PostScript に変換して [Ghostscript](/Ghostscript/) で表示・印刷するといいでしょう。<br>

## PDF を作るには {#c3def66b}

dviout 3.15.1 以降で PDF を作る際には，「ニコニコマーク」ボタン（dvipdfm\[x\] の起動ボタン）を使うのが便利です。<br>
初期設定では「ニコニコマーク」ボタンが表示されていないと思います。<br>
「ニコニコマーク」ボタンが見当たらない場合には，メニューバーから \[View\] → \[Change Tool Buttons\] を選択すると現れます。<br>
この場合，PDF 化は dviout から dvipdfmx を起動して行われるので，各種設定には dvipdfmx 側の設定を正しく行う必要があります。<br>
PDF の作成がうまくいかない場合は [dvioutのdvipdfmxでpdfファイルが作成されない](http://www.eng.kagawa-u.ac.jp/~haruna/memo/TeX/dvipdfmx.html) を参照してください．<br>

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>Print</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:#EEEEEE;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　Printer:　Make PDF by dvipdfm(x)　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　OK　　\]</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　Cancel　\]</span><br>
　　　Print range　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Help　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　Setup...　\]</span><br>
　　　◎ All　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ Selection \]</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ dviprt<br>
　　　◯ Pages (1)　　　　　　(8)　　　　　　　　　　☐ dvipdfm (not x)<br>
　　　　From:<ins>　　1\[◆\]</ins>　　To:<ins>　　8\[◆\]</ins>　　　　　　　☐ View PDF ?<br>

***

PDF ファイルを作成する場合は dviout から Distiller (Adobe PDF) プリンターに印刷することも可能です。
ただし，欧文フォントや EPS グラフィックがギザギザになります。
欧文フォントがギザギザになる問題は，Computer Modern と AMS フォントに限れば，
[BaKoMa TrueType フォント](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/font/bakoma/bakoma.lzh)
をインストールすれば解決できます。
[TX フォント](http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?TXFonts) など PostScript Type 1 フォントのギザギザは解消できません。
TrueType の Times New Roman，Arial，Courier New であれば，乙部さんの
「[書体拡張プロジェクト](http://argent.shinshu-u.ac.jp/otobe/tex/packages/fontproj.html)」
に書かれている方法できれいに出力できます。

dviout から Distiller 経由で
PDF を作るには，Computer Modern フォントの場合には BaKoMa TrueType
フォント[bakoma.lzh](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/font/bakoma/bakoma.lzh)
を Windows にインストールすることによって，ビットマップでない
本来の美しい文字になります（TexPoint をインストールすると一部
古い BaKoMa フォントで上書きされてしまうようですのでご注意ください）。<br>
ただ，TX フォントなどの Type 1 フォントは
やはりビットマップになります。

[TeXWiki:PDFの作り方](</PDFの作り方/>) もご覧ください。

## upTeX で出力された DVI ファイルを dviout で表示する場合の注意点 {#wadc9abf}

- upTeX のフォントと dviout ([qa:51135](https://okumuralab.org/~okumura/texfaq/qa/51135.html), [qa:51137](https://okumuralab.org/~okumura/texfaq/qa/51137.html))
- upTeX のフォントと dviout (再検討) ([qa:51610](https://okumuralab.org/~okumura/texfaq/qa/51610.html))
- Re: dvipng と日本語 ([qa:51705](https://okumuralab.org/~okumura/texfaq/qa/51705.html))
- upLaTeXを使おう \[電脳世界の奥底にて\] の中の [dvioutについて](http://zrbabbler.sp.land.to/uplatex.html#ssec-install-dviout)
- [uptex, uplatex](http://d.hatena.ne.jp/gcg00467/20101223#1293103329)
- [USBメモリ活用講座【実践編・dviout for Windowsポータブル化】#upTeX/upLaTeX を利用する場合の設定](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/dviout.shtml#UPTEX)

upTeX で DVI ファイルを作成し，dviout で表示しようとすると font file over のエラーが発生します。<br>
\[OK\] をクリックすると dviout が強制終了します。<br>

***

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>No Memory</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:#EEEEEE;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#D0DA8E;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　 \]\[　Font2　\]\[ 　WinJFont　\]\[ 　JFont2　\]\[ 　Key　　 \]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]\[　Common　\]\[　Graphic　\]\[　Printer　\]\[　Paper　\]</ins></span><strong>\[　System　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　REGISTRY　\]</ins></span><br>
　　　　　raster buffer size　　　　　　　　　　br:　<ins>400　　　　　\[◆\]</ins> K byte　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　Save　　　　\]</span><br>
　　　　　font buffer size　　　　　　　　　　　bf:　<ins>4000　　　　\[◆\]</ins> K byte　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　Restore　　　 \]</span><br>
　　　　　bitmap buffer size/max　　　　　　bb:　<ins>4000　　　　\[◆\]</ins> K byte　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　Default　　　 \]</span><br>
　　　　　number of dviouts/max　　　　multi:　<ins>4　　　　　　　\[◆\]</ins><br>
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

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#D0DA8E;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]\[　Common　\]\[　Graphic　\]\[　Printer　\]\[　Paper　\]\[　System　\]\[　REGISTRY　　\]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　\]</ins></span><strong>\[　Font2　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 　WinJFont　\]\[ 　JFont2　\]\[ 　Key　　\]</ins></span><br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[gen:\]</span>　　　　　<ins>\`C:\w32tex\bin\mktexpk.exe --dpi ^d --bdpi ^D --mag ^M ^s</ins><br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[ftt:\]</span>　　　　　 <ins>^x\map\ttfonts.map</ins><br>
　　　 TEXSUBF:　 <ins>^r\sfd\\\\;^r\\..\ttf2pk\\\\;^r\\..\ttf2tfm\\\\</ins><br>
　　　 TEXPKD:<br>
　　　 TEXFLI:<br>

<br>

　　　　☑ Keep Path (Fkeep:)　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　Flush　　　　\]</span><br>
　　　　☐ CheckFontID (c:)　　　　　　　　　　　　　　　　　　　　A:　<ins>0　　　　　　　\[◆\]</ins>　　ttf: <ins>1　　　　　　　\[◆\]</ins><br>
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

<span style="color:Black;background-color:#E0EB9F;"><ins>　<span style="color:Black;"><strong>DVIOUTのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#D0DA8E;"></ins>\[ <span style="color:White;"><strong>？</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　Search　\]\[　HyperTeX　\]\[　Common　\]\[　Graphic　\]\[　Printer　\]\[　Paper　\]\[　System　\]\[　REGISTRY　　\]</ins></span><br>
　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　CONTENTS　\]\[　Display　\]\[　Resolution　\]\[　Font　　\]\[　Font2　\]\[ 　WinJFont　\]</ins></span><strong>\[ 　JFont2　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 　Key　　\]</ins></span><br>
　　　 TEXKNJ:<br>
　　　 JC:<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[vfn:\]</span><br>
　　　 nttF:<br>
　　　 G:　　　　　　　<ins>goth;jisg</ins><br>

<br>

　　　　☐ NTTJTeX font subnstitution (ntt:)　　　　　　　　　Adjust size S: <ins>1000　　　　　　　\[◆\]</ins> /1000<br>
　　　　☑ Use yoko font for tate (g:)　　　　　　　　　　　　　　　base line J:　<ins>0　　　　　　　　　\[◆\]</ins> /1000<br>
　　　　☑ Use inner jfm (Jfm:)　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　Save　　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　　　Restore　　　 \]</span><br>
　　　　☑ Adjust baseline (Jbt:)　　　　　　　☑ Adjust basepoint (Jgt:)　　by jfm<br>

<br>

　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span> <span style="color:Gray;background-color:#EEEEEE;">\[　　　適用(A)　　　\]</span> <span style="color:Black;background-color:#EEEEEE;">\[　　　ヘルプ　　　\]</span>

***

\[Save\]-\[適用(A)\]-\[OK\] をクリックします．

## 関連リンク {#a0623ac1}

- [TeX インストールガイド―― dviout for Windows のインストール](http://www.nsknet.or.jp/~tony/TeX/install/win/dviout.htm) @ [トニイさん](http://www.nsknet.or.jp/~tony/) ([twitter](https://twitter.com/tony4649))（旧 @nifty DTP と印刷フォーラム \[FDTP\]）
- [Windows 95/98/Me/NT/2000/XP における dviout のインストール](http://akagi.ms.u-tokyo.ac.jp/tex_dvioutw.html)（dviout for Windows 一次配布元）
