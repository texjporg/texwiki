---
title: "Ghostscript/Windows"
url: "/Ghostscript/Windows/"
date: 2013-09-02T02:59:31Z
pukiwiki: "Ghostscript/Windows"
---

# Ghostscript/Windows

[Ghostscript](/Ghostscript/) > Windows

## Ghostscript for Microsoft Windows {#zaffc352}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### Ghostscript {#w95eb08a}

Windows 版の Ghostscript バイナリが公式サイトで配布されています．<br>
Windows 版には日本語の縦書き PostScript ファイルがきれいに表示できる角藤版 Ghostscript が存在します．<br>
日本語の縦書き PostScript ファイルを表示する必要がある場合は角藤版 Ghostscript を使用してください．<br>

### 角藤版 Ghostscript {#m511355c}

Windows 版の Ghostscript には，角藤さんがコンパイルされた日本語の縦書き PostScript ファイルがきれいに表示できるバイナリが存在します．<br>
ここではそれを角藤版 Ghostscript と呼ぶことにします．<br>

### tlgs {#j25e0f58}

TeX Live 2014 に含まれている Ghostscript (tlgs) は日本語・中国語・韓国語 (CJK) に対応しています． (→ \[[texlive\] Revision 31760](http://www.tug.org/svn/texlive?view=revision&revision=31760), \[[texlive\] Revision 31504](http://www.tug.org/svn/texlive?view=revision&revision=31504))<br>

### 注意点 {#de072348}

#### Ghostscript 9.12 で Windows PowerShell またはコマンド プロンプトから ps2pdf.bat "予定.ps" を実行するとエラー → rungs.exe -dEPSCrop -q -dSAFER -dBATCH -dNOPAUSE -sDEVICE="pdfwrite" -sOutputFile="予定.pdf" -c save pop -f "予定.ps" または ps2pdf.exe "予定.ps" {#h17c4f70}

Ghostscript 9.12 で Windows PowerShell またはコマンド プロンプトから ps2pdf.bat "予定.ps" を実行するとエラーになります．<br>

```
PS C:\Users\$Env:USERNAME> ps2pdf.bat "予定.ps"
Error: /undefinedfilename in (\\.ps)
Operand stack:

Execution stack:
   %interp_exit   .runexec2   --nostringval--   --nostringval--   --nostringval--   2   %stopped_push   --nostringval--
  --nostringval--   --nostringval--   false   1   %stopped_push
Dictionary stack:
   --dict:1186/1684(ro)(G)--   --dict:0/20(G)--   --dict:79/200(L)--
Current allocation mode is local
Last OS error: No such file or directory
GPL Ghostscript 9.12: Unrecoverable error, exit code 1
```

rungs.exe, gswin64c.exe, gswin32c.exe から直接実行すれば処理ができます．<br>

```
PS C:\Users\$Env:USERNAME> rungs.exe -dEPSCrop -q -dSAFER -dBATCH -dNOPAUSE -sDEVICE="pdfwrite" -sOutputFile="予定.pdf" -c save pop -f "予定.ps"
```

TeX Live の ps2pdf.exe を使用しても OK です．<br>

```
PS C:\Users\$Env:USERNAME> ps2pdf.exe "予定.ps"
```

#### コマンド プロンプトから chcp 65001 で CodePage を変更して ps2pdf.bat を実行すると PDF ファイルが作成されない → CodePage の値を 932 に変更する {#bb074173}

コマンド プロンプトから chcp 65001 で CodePage を変更して ps2pdf.bat を実行すると PDF ファイルが作成されないようです．(コマンド自体は正常終了します．)<br>
これは一般に .bat ファイルが認識されないバグのためです．<br>

CodePage の値が 932 の場合は PDF ファイルが出力されます．

```
rungs.exe -dEPSCrop -q -dSAFER -dBATCH -dNOPAUSE -sDEVICE="pdfwrite" -sOutputFile="hoge.pdf" -c save pop -f "hoge.ps"
```

のように ps2pdf.bat ではなく rungs.exe, gswin64c.exe, gswin32c.exe を実行すると PDF ファイルが作成できるようです．

### 配布先 {#gc8a2a19}

#### Ghostscript {#q1e803c3}

- [http://ftp.jaist.ac.jp/pub/sourceforge/g/gh/ghostscript/GPL%20Ghostscript/](http://ftp.jaist.ac.jp/pub/sourceforge/g/gh/ghostscript/GPL%20Ghostscript/)
- [ftp://ftp.jaist.ac.jp/pub/sourceforge/g/gh/ghostscript/GPL%20Ghostscript/](ftp://ftp.jaist.ac.jp/pub/sourceforge/g/gh/ghostscript/GPL%20Ghostscript/)

#### 角藤版 Ghostscript {#sbee10cb}

- [http://ftp.kddilabs.jp/TeX/ptex-win32/gs/](http://ftp.kddilabs.jp/TeX/ptex-win32/gs/)
- [http://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/gs/](http://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/gs/)
- [http://ring.nict.go.jp/pub/text/TeX/ptex-win32/gs/](http://ring.nict.go.jp/pub/text/TeX/ptex-win32/gs/)
- [http://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/gs/](http://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/gs/)
- [http://ring.shibaura-it.ac.jp/pub/text/TeX/ptex-win32/gs/](http://ring.shibaura-it.ac.jp/pub/text/TeX/ptex-win32/gs/)
- [http://ring.tains.tohoku.ac.jp/pub/text/TeX/ptex-win32/gs/](http://ring.tains.tohoku.ac.jp/pub/text/TeX/ptex-win32/gs/)
- [http://ring.u-toyama.ac.jp/pub/text/TeX/ptex-win32/gs/](http://ring.u-toyama.ac.jp/pub/text/TeX/ptex-win32/gs/)
- [http://ring.yamanashi.ac.jp/pub/text/TeX/ptex-win32/gs/](http://ring.yamanashi.ac.jp/pub/text/TeX/ptex-win32/gs/)
- [http://ring.ix.oita-u.ac.jp/pub/text/TeX/ptex-win32/gs/](http://ring.ix.oita-u.ac.jp/pub/text/TeX/ptex-win32/gs/)
- [http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/)
- [http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/gs/](http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/gs/)
- [http://core.ring.gr.jp/pub/text/TeX/ptex-win32/gs/](http://core.ring.gr.jp/pub/text/TeX/ptex-win32/gs/)

### インストール {#a4d9c6ea}

#### 前提条件 {#ead68e72}

旧バージョンの Ghostscript や GSview が既にインストールされている場合は最新版をインストールする前に旧バージョンをアンインストールしておきます．<br>
ここでは GSview がインストールされていた場合を含めて手順を述べます．<br>

- 自分で追加した，あるいは書き換えたファイル等で必要なものは，別のフォルダーにバックアップを取っておきます．
- \[コントロールパネル\]->\[プログラムの追加と削除\]等で Ghostscript，GSview をアンインストールします．<br>
    旧バージョンの Ghostscript Fonts があったならばそれもアンインストールします．

- 旧バージョンの Ghostscript や GSview のフォルダーを探し，何か残っていたならばフォルダーごと削除します．
- その後，Ghostscript，GSview の順にインストールします．

#### インストール方法 {#b84b5a69}

- gs912w64full-gpl.exe または gs912w32full-gpl.exe (最新の角藤版 Ghostscript インストーラー) を実行します。
    - デフォルトのインストール先は “C:\Program Files\gs\gs9.12”
    - C ドライブ直下にインストールしたい場合は “C:\gs\gs9.12”に変更します。
- インストールウィザードを終了するウィンドウで \[Generate cidfmap for Windows CJK TrueType fonts\] にチェックが入っていなければチェックを入れて \[Finish\] をクリックします。

\[参考\] 初心者は上記のインストール場所にインストールするのがいいでしょう．<br>
角藤版 Ghoststscript であるならば，デフォルトの Search Path の関係から C:\gs\gs9.12 にインストールしておくのがおすすめです．<br>
Ghostscript は好きな場所にインストールすることができます．<br>
C:\gs でも問題ありません．<br>
C:\ に直接ファイルをコピー・移動する場合は管理者権限が必要になるので C:\ にファイルをコピー・移動する場合は注意が必要です．<br>
また，日本語等の非 ascii 文字を含むフォルダーにインストールするのは避けておくのが無難です．<br>
なお，歴史的な理由等から gs\gs9.12 などというフォルダーにインストールされることがほとんどです．<br>
その関係から，様々な解説ではこの gs\gs9.12 などといったフォルダー構造を仮定していることが多いということを理解しておいてください．<br>

#### インストールに失敗する場合 {#g27d0b0b}

ユーザー アカウント (Microsoft アカウント または ローカル アカウント) の名前に例えば「山田太郎」のように
ASCII 以外の文字（日本語など）を使っていると，Ghostscript の
インストールに失敗することがあります。<br>
これは環境変数
TEMP に “C:\Users\山田太郎\AppData\Local\Temp” のように
ASCII 以外の文字が使われてしまうことが原因です。<br>
環境変数 TEMP のデフォルトは
%USERPROFILE%\AppData\Local\Temp
(&cong; C:\Users\\%USERNAME%\AppData\Local\Temp)
に設定されています．<br>
環境変数 TEMP を ASCII 文字だけで設定します。（例えば
UNIX 互換 OS の一時ファイル用ディレクトリ /tmp/ に習って “C:\tmp” のように設定します。）

### 環境変数 {#g074d14f}

#### 環境変数 PATH {#w1241f25}

インストールした Ghostscript に含まれる bin フォルダー と lib フォルダーを環境変数 PATH に追加します．<br>
具体的には次のように設定します．<br>

Ghostscript を C:\gs\gs9.12 にインストールした場合

```
;C:\gs\gs9.12\bin;C:\gs\gs9.12\lib
```

を環境変数 PATH に追加します。

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>環境変数</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　Ghostscript のユーザー環境変数(U)<br>

> <table>
> <tbody>
> <tr><td>変数</td><td>値</td></tr>
> <tr><td>PATH</td><td>C:\texlive\2013\bin\win64;C:\texlive\2013\bin\win32;C:\gs\gs9.12\bin;C:\gs\gs9.12\lib<br>C:\texlive\2013\bin\win32;C:\gs\gs9.12\bin;C:\gs\gs9.12\lib<br>C:\w32tex\bin64;C:\w32tex\bin;C:\gs\gs9.12\bin;C:\gs\gs9.12\lib<br>C:\w32tex\bin;C:\gs\gs9.12\bin;C:\gs\gs9.12\lib</td></tr>
> <tr><td>TEMP</td><td>%USERPROFILE%\AppData\Local\Temp</td></tr>
> <tr><td>TMP</td><td>%USERPROFILE%\AppData\Local\Temp</td></tr>
> </tbody>
> </table>
>

　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　新規(N)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　編集(E)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除(D)　 \]</span><br>

　　システム環境変数(S)<br>
...<br>
　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　新規(W)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　編集(I)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除(L)　 \]</span><br>

***

Ghostscript を C:\Program Files\gs\gs9.12 にインストールした場合

```
;C:\Program Files\gs\gs9.12\bin;C:\Program Files\gs\gs9.12\lib
```

を環境変数 PATH に追加します。

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>環境変数</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　Ghostscript のユーザー環境変数(U)<br>

> <table>
> <tbody>
> <tr><td>変数</td><td>値</td></tr>
> <tr><td>PATH</td><td>C:\texlive\2013\bin\win64;C:\texlive\2013\bin\win32;C:\Program Files\gs\gs9.12\bin;C:\Program Files\gs\gs9.12\lib<br>C:\texlive\2013\bin\win32;C:\Program Files\gs\gs9.12\bin;C:\Program Files\gs\gs9.12\lib<br>C:\w32tex\bin64;C:\w32tex\bin;C:\Program Files\gs\gs9.12\bin;C:\Program Files\gs\gs9.12\lib<br>C:\w32tex\bin;C:\Program Files\gs\gs9.12\bin;C:\Program Files\gs\gs9.12\lib</td></tr>
> <tr><td>TEMP</td><td>%USERPROFILE%\AppData\Local\Temp</td></tr>
> <tr><td>TMP</td><td>%USERPROFILE%\AppData\Local\Temp</td></tr>
> </tbody>
> </table>
>

　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　新規(N)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　編集(E)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除(D)　 \]</span><br>

　　システム環境変数(S)<br>
...<br>
　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　新規(W)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　編集(I)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除(L)　 \]</span><br>

***

#### 環境変数 GS_LIB {#y53bce19}

古い Ghostscript がインストールされていた場合には，環境変数 GS_LIB が残っているかもしれません．<br>
これは腕に自信が無い限り削除しておくのがよいでしょう．<br>
いまどきはこんなものは設定しない時代になっています．<br>
ただし，後で述べるフォントを置く場所を追加する方法としてこの GS_LIB を用いる手法もあります．

### フロントエンド {#tdcde17e}

MS-Windows で使用可能な Ghostscript のフロントエンド(プレビューしたり，その他様々なことを gui で行うためのソフトウェア)のいくつかについてインストール方法と注意点を簡単に記しておきます．

#### GSview <a id="gsview"></a> {#xde11637}

<!-- -GSview のインストーラー -->
<!-- - -[[GSview:http://pages.cs.wisc.edu/~ghost/gsview/]] Ghostscript を GUI 操作できるソフトウェア -->
<!-- - --[[GSview 5.0 (32-bit版):http://pages.cs.wisc.edu/~ghost/gsview/get50.htm]] (32-bit版の Ghostscript が必要です。) -->
<!-- - --[[GSview 5.0 (64-bit版):http://pages.cs.wisc.edu/~ghost/gsview/get50.htm]] (64-bit版の Ghostscript が必要です。) -->
<!-- x86 （Microsoft，Linux などによる IA-32 の別名） -->
<!-- x86_64 （UNIX，Linux などによる AMD64 と Intel 64 の総称） -->
<!-- x64 （Microsoft などによる AMD64 と Intel 64 の総称） -->
<!-- x86-64 （AMD64 の旧称。AMD64 と Intel 64 の総称としても使われる） -->
<!-- EM64T （Intel 64 の旧称） -->
<!-- IA-32e （EM64T の旧称） -->

- GSview は CTAN から提供されなくなりました． → [GSview is no longer avail­able from CTAN: it should be re­trieved from its home page.](http://www.ctan.org/pkg/gsview)<br>

- [GSview](http://pages.cs.wisc.edu/~ghost/gsview/) から最新の GSview インストーラーをダウンロードし，実行します．GSview には 64-bit 版/32-bit 版の区別がありますが，これは使用する Ghostscript の 64-bit 版/32-bit 版に合わせなけなければなりません．Ghostscript は 64-bit 版/32-bit 版が存在するので，Ghostscript を使用する場合には，GSview も 64-bit 版/32-bit 版を選択してください．

- GSview は，Ghostscript を正常にインストールした後にインストールしてください(Ghostscript のレジストリ情報が使用されるためです)．

- 角藤版 Ghostscript で &#x2d;dWINKANJI オプションを使用して日本語の PostScript ファイルを表示するには，\[Options\] → \[Advanced Configure...\] → \[Ghostscript Options\] の内容に “-dWINKANJI” を追加します。-dWINKANJI オプションに関しては後ろの方に簡単な解説があるのでそちらを参照してください．

- GSview の \[File\]->\[PS to EPS\] の機能は十分に注意を払って使用してください．ps file を与えた場合に出来上がるのは不正な eps file です．出来上がった eps file を思い通りに扱えない dviware も存在するので，これは簡易的な機能であると理解してください．このことに関しては，\[File\]->\[PS to EPS\] のダイヤログに現れる \[Help\] のボタンを押すと解説を見ることができます．なお，ps ではなく eps file を与えた場合には，この機能は BoundingBox を gui で付け替える有用な tool となります．

- GSview のデフォルトの用紙サイズ設定には，日本で用いられる JIS規格・B系列 の洋紙のサイズは含まれていません．つまり，日本語文書を用いる場合に ps file を得る段階までにおいて，通常の感覚でB4とかB5の用紙サイズを指定していた場合に GSview で表示させても思い通りのサイズでは表示されない場合があります．これに対する設定を行う場合には，GSview のフォルダーにある printer.ini の中の \[UserMedia\] の部分に以下のデータを付け加え，GSview の \[Options\]->\[Advanced Configure...\] のダイヤログで「Copy Printer Defaults」のみにチェックマークを入れて \[OK\] を押してバイナリを書き換えます．

    ```
    jisB0=2920,4127
    jisB1=2064,2920
    jisB2=1460,2064
    jisB3=1032,1460
    jisB4=729,1032
    jisB5=516,729
    jisB6=363,516
    jisB7=258,363
    jisB8=181,258
    ```

    無論こんなにたくさん用意する必要はなく，自分に必要なものを設定すればそれで十分です．

#### PS_View <a id="psview"></a> {#h218efe8}

[PS_View](http://psview.sourceforge.net/) は Ghostscript を使って PS/PDF ファイルを表示するプレビューアです．<br>
TeX Live (Win32 版) に標準で含まれています．<br>

W32TeX で PS_View を使用する場合は PS_View の psv.wx.lua の gsargs の dllloc

```
local gsargs = {
  args= {},      -- arguments to ghostscript (wihout paths)
  dllloc= "",    -- localisation of DLL (passed to wxGhostscript)
```

を角藤版 32-bit Ghostscript の dll ファイル (C:\gs\gs9.12\bin\gsdll32.dll) に修正します．<br>

ただし，ディレクトリの区切りは，スラッシュ(/) もしくは バックスラッシュ2つ(\\\\) を使用します．

```
local gsargs = {
  args= {},      -- arguments to ghostscript (wihout paths)
  dllloc= "C:/gs/gs9.12/bin/gsdll32.dll",    -- localisation of DLL (passed to wxGhostscript)
```

角藤版 32-bit Ghostscript で &#x2d;dWINKANJI オプションを使用して日本語を表示するには，psv.wx.lua の PSV_DftGsPars

```
local PSV_DftGsPars = {"-dNOPAUSE","-dDELAYBIND","-dNOEPS"}
```

を

```
local PSV_DftGsPars = {"-dNOPAUSE","-dDELAYBIND","-dNOEPS","-dWINKANJI"}
```

に修正します．

#### SumatraPDF {#f86c5a11}

[SumatraPDF - TeX Wiki](/SumatraPDF/) を参照してください．

#### \[参考\] 関連するアプリケーション {#m1110769}

フロントエンドといえるものではないにせよ Ghostscript を呼び出しているアプリケーションは多数あります(例えば dvipdfmx, Inkscape)．<br>
これらを正常に扱うためには，環境変数 PATH に Ghostscript に含まれる bin と lib を付け加えておくことが多くの場合必要です．

### cidfmap の初期設定 {#ra5fe424}

日本語等のフォント (CJK font と呼ばれるもの) は，Ghostscript では CID font を用いることが基本的になっています．<br>
これを他の CID font や TrueType font に代替させることを主な目的とした設定ファイルが cidfmap です．<br>
角藤版 Ghoststscript では，gs\gs$(rungs --version)\lib に存在します．<br>
インストール時に \[Generate cidfmap for Windows CJK TrueType fonts\] にチェックを入れておいたならば，この cidfmap は各自の PC に合わせて自動設定がなされます．<br>
しかし，Ghostscript のアンインストールが不完全であった場合などには，この自動設定がなされない場合もあります．<br>
cidfmap を見たときに，% から始まるコメント行ばかりであるならこの自動設定がなされていません．<br>
なお，Ghostscript のインストール後にこの自動設定を単独に行うことも可能です．<br>
次の命令を Windows PowerShell から実行すればそれがなされます．

```
$gsversion = 'gs' + $(rungs --version); rungs -q -dBATCH -sFONTDIR="c:/windows/fonts" -sCIDFMAP="c:/gs/$gsversion/lib/cidfmap" "c:/gs/$gsversion/lib/mkcidfm.ps"
```

パス名部分に関しては各自の環境に合わせて書き直して下さい．<br>
また，c:/windows/fonts というのは Windows の システムフォントフォルダーのことです．

一つ注意を言っておきます．<br>
この自動設定を行ったとしても，あなたの環境にある CJK つまり 日中韓のフォントがすべて使えるようになるわけではありません．<br>
mkcidfm.ps にリストアップされているもののうちのシステムフォントフォルダーに見つかった TrueType fonts への代替設定がされるだけです．<br>
これだけで自由自在になるわけではないことに注意してください．

Windows PowerShell の使い方がわからない場合は Ghostscript を再度正常にインストールすればいいのですが，出来上がるものは大して変わらないのでこちらで作成したものを例として下に張り付けておきます．<br>
これをコピー・ペーストするだけでも大丈夫かもしれません(Windows の version による違いもあるので一概には言えませんが)．パス名部分については各自の環境に合わせることが必要になることがあります．<br>

***

```
%!
% cidfmap generated automatically by mkcidfm.ps from fonts found in
%   c:/windows/fonts

% Substitutions
/Meiryo << /FileType /TrueType /SubfontID 0 /CSI [(Japan1) 3] /Path (c:/windows/fonts/meiryo.ttc) >> ;
/GungsuhChe << /FileType /TrueType /SubfontID 3 /CSI [(Korea1) 3] /Path (c:/windows/fonts/batang.ttc) >> ;
/MS-Gothic << /FileType /TrueType /SubfontID 0 /CSI [(Japan1) 3] /Path (c:/windows/fonts/msgothic.ttc) >> ;
/GulimChe << /FileType /TrueType /SubfontID 1 /CSI [(Korea1) 3] /Path (c:/windows/fonts/gulim.ttc) >> ;
/Gulim << /FileType /TrueType /SubfontID 0 /CSI [(Korea1) 3] /Path (c:/windows/fonts/gulim.ttc) >> ;
/MalgunGothicRegular << /FileType /TrueType /SubfontID 0 /CSI [(Korea1) 3] /Path (c:/windows/fonts/malgun.ttf) >> ;
/PMingLiU << /FileType /TrueType /SubfontID 1 /CSI [(CNS1) 2] /Path (c:/windows/fonts/mingliu.ttc) >> ;
/FangSong << /FileType /TrueType /SubfontID 0 /CSI [(GB1) 2] /Path (c:/windows/fonts/simfang.ttf) >> ;
/MS-PMincho << /FileType /TrueType /SubfontID 1 /CSI [(Japan1) 3] /Path (c:/windows/fonts/msmincho.ttc) >> ;
/NSimSun << /FileType /TrueType /SubfontID 1 /CSI [(GB1) 2] /Path (c:/windows/fonts/simsun.ttc) >> ;
/KaiTi << /FileType /TrueType /SubfontID 0 /CSI [(GB1) 2] /Path (c:/windows/fonts/simkai.ttf) >> ;
/SimSun << /FileType /TrueType /SubfontID 0 /CSI [(GB1) 2] /Path (c:/windows/fonts/simsun.ttc) >> ;
/Meiryo-Bold << /FileType /TrueType /SubfontID 0 /CSI [(Japan1) 3] /Path (c:/windows/fonts/meiryob.ttc) >> ;
/MalgunGothicBold << /FileType /TrueType /SubfontID 0 /CSI [(Korea1) 3] /Path (c:/windows/fonts/malgunbd.ttf) >> ;
/MingLiU << /FileType /TrueType /SubfontID 0 /CSI [(CNS1) 2] /Path (c:/windows/fonts/mingliu.ttc) >> ;
/Dotum << /FileType /TrueType /SubfontID 2 /CSI [(Korea1) 3] /Path (c:/windows/fonts/gulim.ttc) >> ;
/Gungsuh << /FileType /TrueType /SubfontID 2 /CSI [(Korea1) 3] /Path (c:/windows/fonts/batang.ttc) >> ;
/MS-UI-Gothic << /FileType /TrueType /SubfontID 2 /CSI [(Japan1) 3] /Path (c:/windows/fonts/msgothic.ttc) >> ;
/DFKaiShu-SB-Estd-BF << /FileType /TrueType /SubfontID 0 /CSI [(CNS1) 2] /Path (c:/windows/fonts/kaiu.ttf) >> ;
/BatangChe << /FileType /TrueType /SubfontID 1 /CSI [(Korea1) 3] /Path (c:/windows/fonts/batang.ttc) >> ;
/Batang << /FileType /TrueType /SubfontID 0 /CSI [(Korea1) 3] /Path (c:/windows/fonts/batang.ttc) >> ;
/Meiryo-Italic << /FileType /TrueType /SubfontID 1 /CSI [(Japan1) 3] /Path (c:/windows/fonts/meiryo.ttc) >> ;
/DotumChe << /FileType /TrueType /SubfontID 3 /CSI [(Korea1) 3] /Path (c:/windows/fonts/gulim.ttc) >> ;
/SimHei << /FileType /TrueType /SubfontID 0 /CSI [(GB1) 2] /Path (c:/windows/fonts/simhei.ttf) >> ;
/MS-Mincho << /FileType /TrueType /SubfontID 0 /CSI [(Japan1) 3] /Path (c:/windows/fonts/msmincho.ttc) >> ;
/MS-PGothic << /FileType /TrueType /SubfontID 1 /CSI [(Japan1) 3] /Path (c:/windows/fonts/msgothic.ttc) >> ;
/Meiryo-BoldItalic << /FileType /TrueType /SubfontID 1 /CSI [(Japan1) 3] /Path (c:/windows/fonts/meiryob.ttc) >> ;

% Aliases
/KozMinPr6N-Regular /MS-Mincho ;
/STHeiti-Regular /SimHei ;
/STFangsong-Light /FangSong ;
/STSong-Light /SimSun ;
/AdobeMyungjoStd-Medium /Batang ;
/MSung-Light /MingLiU ;
/Ryumin-Light /MS-Mincho ;
/HYGoThic-Medium /Dotum ;
/HYRGoThic-Medium /Gulim ;
/HeiseiMin-W3 /MS-Mincho ;
/Ryumin-Medium /MS-Mincho ;
/AdobeHeitiStd-Regular /SimHei ;
/HeiseiKakuGo-W5 /MS-Gothic ;
/AdobeMingStd-Light /MingLiU ;
/MKai-Medium /DFKaiShu-SB-Estd-BF ;
/MSung-Medium /MingLiU ;
/GothicBBB-Medium /MS-Gothic ;
/AdobeSongStd-Light /SimSun ;
/MHei-Medium /MingLiU ;
/HYSMyeongJo-Medium /Batang ;
/STKaiti-Regular /KaiTi ;
```

***

### cidfmap の基本的な記述方法 {#p7036a99}

cidfmap を書き換える際に必要になることを簡単に述べておきます(詳しくは gs のドキュメントを読んでください)．<br>
下に実験用の基本的な例を張り付けておきます．<br>
前半の % Aliases は，左に書かれたフォントを右に書かれたフォントで置き換えるという意味です．<br>
後半の % Substitutions は TrueType font の設定と考えて下さい．<br>
この例では，次の4つのフォント代替の連鎖が作られます(あるいはそう考えることができます)．<br>

```
Ryumin-Light -> MS-Mincho -> msmincho.ttc
GothicBBB-Medium -> MS-Gothic -> msgothic.ttc
HeiseiMin-W3 -> Ryumin-Light -> MS-Mincho -> msmincho.ttc
HeiseiKakuGo-W5 -> GothicBBB-Medium -> MS-Gothic -> msgothic.ttc
```

ここで，一番左のフォントが ps file で指定されるもの．いちばん右のフォントが実際に代替されるフォントになります．<br>
Ryumin-Light については2重定義がなされていますが(これはわざとです)，先に書かれたものが有効になります．<br>
このことにも注意を払ってください．<br>

***

```
% Aliases
/Ryumin-Light      /MS-Mincho        ;
/Ryumin-Light      /MS-PMincho        ;
/GothicBBB-Medium  /MS-Gothic        ;
/HeiseiMin-W3      /Ryumin-Light     ;
/HeiseiKakuGo-W5   /GothicBBB-Medium ;

% Substitutions
/MS-Mincho << /CSI [(Japan1) 3] /Path (c:/windows/fonts/msmincho.ttc) /FileType /TrueType /SubfontID 0 >> ;
/MS-Gothic << /CSI [(Japan1) 3] /Path (c:/windows/fonts/msgothic.ttc) /FileType /TrueType /SubfontID 0 >> ;
```

***

### CMap {#k55ee82d}

gs\gs$(rungs --version)\Resource\CMap\ に入っています。主なものを挙げてみます。

- H
- V
    <!-- -JISX0213-2004-H -->
    <!-- ［[[ttk (TANAKA, Takuji) さん:http://homepage3.nifty.com/ttk/comp/tex/]]の -->
    <!-- ウェブサイト -->
    <!-- 「[[TeX memo&mdash;jisx0212 &amp; jisx0213:http://homepage3.nifty.com/ttk/comp/tex/jisx0213.html]]」に -->
    <!-- ある&ref(http://homepage3.nifty.com/ttk/comp/tex/jishojo_004.tar.gz,JIS X 0212 （JIS補助漢字）対応 jishojo パッケージ);の -->
    <!-- 中から入手できる。］ -->
    <!-- -JISX0213-2004-V -->
    <!-- ［[[ttk (TANAKA, Takuji) さん:http://homepage3.nifty.com/ttk/comp/tex/]]の -->
    <!-- ウェブサイト -->
    <!-- 「[[TeX memo&mdash;jisx0212 &amp; jisx0213:http://homepage3.nifty.com/ttk/comp/tex/jisx0213.html]]」に -->
    <!-- ある&ref(http://homepage3.nifty.com/ttk/comp/tex/jishojo_004.tar.gz,JIS X 0212 （JIS補助漢字）対応 jishojo パッケージ);の -->
    <!-- 中から入手できる。］ -->

- UniJIS-UTF16-H
- UniJIS-UTF16-V
- UniJIS2004-UTF16-H
- UniJIS2004-UTF16-V
- UniGB-UTF16-H
- UniGB-UTF16-V
- UniCNS-UTF16-H
- UniCNS-UTF16-V
- UniKS-UTF16-H
- UniKS-UTF16-V
- Adobe-Japan1-6
    <!-- -&ref(http://web.archive.org/web/20051026171726/http://macptex.appi.keio.ac.jp/~uchiyama/Adobe-Japan1-5-V.gz,Adobe-Japan1-5-V); -->
    <!-- Adobe-Japan1-5-V は不要です。Identity-V を使ってください。(uchiyama) -->

- Adobe-Japan1-UCS2
- Adobe-GB1-5
- Adobe-GB1-UCS2
- Adobe-CNS1-6
- Adobe-CNS1-UCS2
- Adobe-Korea1-2
- Adobe-Korea1-UCS2
- Identity-H
- Identity-V

上記の CMap は $TEXMFMAIN/fonts/cmap// 以下にもあります。 <!-- $TEXMFLOCAL の一つの選択肢として \w32tex\share\texmf-local があります。 --> <!-- See http://tutimura.ath.cx/ptetex/?%C2%BF%BD%C5TEXMF%A5%C4%A5%EA%A1%BC --> <!-- また，“//” は「それ以下のディレクトリ」という意味です。 -->

### CID font {#dc743646}

CID font (正式名称は CID keyed font) は ghostsript にとって非常に特殊なフォントとなります．<br>
フォントファイルの置き場所が gs\gs$(rungs --version)\Resource\CIDFont\ に限られることと，拡張子は付けてはならないことに注意してフォントファイルを配置します．<br>

CID font file は，ファイル名を拡張子無しの PostScript 名に変えて (例えば，HEMIW3.CID → HeiseiMin-W3)，gs\gs$(rungs --version)\Resource\CIDFont\ に置くかリンクを張っておきます．

この HeiseiMin-W3 を例にとり説明します．gs の段階でこのフォントに代替させる場合，例えば ps file では Ryumin-Light が指定されていてこれを HeiseiMin-W3 に代替させる場合には，cidfmap に次のような alias の記述をしておきます．

```
/Ryumin-Light    /HeiseiMin-W3 ;
```

代替をさせず，ps file に HeiseiMin-W3 が指定されていてそれをそのまま用いる場合には cidfmap には何も記述しません．

```
CID フォントを用いる場合，経験によるとエラーになるかもしれません．
オリジナル ソースに存在するバグと思われます．
```

### 日本語 OpenType font {#j4509a9f}

ここでは日本語等 (CJK) の OpenType font を用いる場合について説明します．

CID font の代わりに Postscript outline の OpenType font (多くの場合には拡張子が .otf の OpenType フォーマットのフォント) を用いることも可能です．このフォントファイルの配置は，ファイル名を拡張子無しの PostScript 名に変えて (例えば，ヒラギノ明朝 ProN W3.otf → HiraMinProN-W3)，gs\gs$(rungs --version)\Resource\CIDFont\ に置くかリンクを張っておきます．

OpenType font で出力する場合には，ps file で指定されたフォントに関して フォント名-CMap名 の分解を行い，PSフォント名と文字コード変換の方法(使用する CMap)を取得する作業が必要になります(CID font や TrueType font で出力する場合にはこの作業が自動実行されます)．これが行われないと，CMap名がついたままのものが文字コード変換を行わずに通常の欧文フォントとして探され，最終的には文字化けとなります．従って，この作業を行うためのファイルあるいはPSコードが必要になります．

上の HiraMinProN-W3 を例に取ってみましょう．ps file に HiraMinProN-W3-H が指定されており，これをそのまま HiraMinProN-W3 で出力する (HiraMinProN-W3-H -> HiraMinProN-W3) 場合には，

```
/HiraMinProN-W3-H /H [/HiraMinProN-W3] composefont pop
```

という内容のファイルを gs\gs$(rungs --version)\Resource\Font\ に HiraMinProN-W3-H という名前で作成します．フォント名本体だけではなく，CMapリソース名 (この場合には -H) も含めて考えることに 注意してください．

cidfmap でのフォント代替の記述は CID font の場合と同様です．例えば，cidfmap で Ryumin-Light -> HiraMinProN-W3 の代替が引き起こるように記述してあったとしましょう．ps file に Ryumin-Light-H が指定されていた場合には，これは HiraMinProN-W3 で出力する (Ryumin-Light-H -> HiraMinProN-W3) 設定をしていることになります．この場合には，

```
/Ryumin-Light-H /H [/Ryumin-Light] composefont pop
```

という内容のファイルを gs\gs$(rungs --version)\Resource\Font\ に Ryumin-Light-H という名前で作成します．どちらにしても，OpenType font で出力する場合には，ps file に指定されているものに関するファイルの作成が必要になるということです．

なお，dvips が出力する ps file に上記の ...composefont pop のようなPSコードがあらかじめ記述されている場合もあります(CMap名が Identity-H である場合等)．当然のことながら，この場合には上記のファイルが存在していなくても文字化けは引き起こりません．また W32TeX における 2013/10/01 以降の dvipsk-w32.tar.xz, dvipsk-w64.tar.xz
に入っている ps2otfps.exe を用いて

```
ps2otfps old.ps new.ps
```

によって変換すると，殆どの場合 new.ps に必要なPSコードを記述することができます．
また最新の ps2otfps はオプション -f を付けるとフィルタとして働くので

```
dvips -f ... dviname | ps2otfps -f >psfile.ps
```

とすると更に便利です．

### 日本語 TrueType font {#wbee8199}

ここでは日本語等 (CJK) の TrueType font を用いる場合のフォントの置き場所やパスの設定方法について説明します．

1) まず，ここで用いる用語の説明をしておきます．LIB PATH とは，フォントを含む様々なファイルを探すときに用いられる PATH です．これは，gs のシステム変数 GS_LIB, GS_LIB_DEFAULT で指定される場所であり，rungs -h で表示されるもののうちの Search path: の部分に記述される場所のことです．環境変数 GS_LIB の設定を行うと，デフォルトの GS_LIB の内容をオーバーライドします．角藤版 Ghostscript の場合には，GS_LIB_DEFAULT によって c:/windows/fonts と c:/winnt/fonts がはじめから設定されていることにも注意しておきます．次に，FONT PATH とは，フォントファイルを探すため専用の追加の PATH です．これは，環境変数 GS_FONTPATH，または，gs の option の -sFONTPATH= に指定された場所になります．なお，-sFONTPATH= は GS_FONTPATH をオーバーライドすることに注意が必要です．

2) 拡張子が .ttf や .ttc である TrueType font (拡張子が .otf であっても TrueType outline であるならば同様に使えるかもしれないが未確認) は，cidfmap での代替を行うことによって使用することができます．この場合，フォントファイルは，cidfmap に記述される /Path (c:/windows/fonts/msmincho.ttc) のようなパスによって探されます(フォントファイルは実ファイルではなくリンクでも構いません)．gs のドキュメントによれば，これは絶対パス指定でならなければならないようです．しかし，相対パス指定，つまり /Path (msmincho.ttc) のような記述も実際には使うことができます．相対パス指定の場合には，フォントは LIB PATH のみから探されます(FONT PATH の場所は探されない)．従って，相対パス指定の場合には，LIB PATH に含まれる場所にフォントファイル(またはリンク)を置いてください．

3) gs の option -dSAFER が用いられた場合には，絶対パス指定の場合に制限が引きおこります(例えば，ps2pdf では -dSAFER が用いられています)．この場合の絶対パスは，LIB PATH または FONT PATH に指定された場所に含まれなければなりません．これらの場所にない絶対パスを指定した場合は error となります．環境変数 GS_FONTPATH を設定することがこの問題を解決する方法の一つです．

4) gs の option -dNOPLATFONTS が用いられた場合には，Windows のシステムフォントフォルダーにあるフォントは探されなくなります．ただし，LIB PATH, FONT PATH にそれが設定されているならば探されます．つまり，相対指定なら LIB PATH に，絶対指定ならば LIB PATH または FONT PATH にシステムフォントフォルダーの場所が記述されていれば探されます．

5) 以上のことから，-dSAFER や -dNOPLATFONTS の問題が起こらないようにして cidfmap で新たにフォントの設定をする場合には，絶対パス指定にしておいてそのパスが必ず探されるようにしておくのが正統的な方法でしょう．しかし，相対パスの方が簡単かもしれません．相対パス指定の場合，例えば角藤版 Ghostscript であるならば，c:\windows\fonts にフォントを置いておけばそれだけでたいていはうまくいきます．また，環境変数 GS_LIB に何を設定すべきであるかを知っているならば，GS_LIB に目的の場所を付け加えておくのも簡単な方法でしょう(例えば，gs\fonts に相当するものを付け加えて少し古めの形態で使うことも可能です)．

参考) 角藤版 Ghostscript に存在する option -dWINKANJI を用いて，Win32API ドライバによって日本語等のフォントが出力される場合には，上記に述べてきたようなパスの制限は一切無くなります．

参考) GSview で \[Options\]->\[Advanced Configure...\] の Ghostscript Options: を見ると，あらかじめ -dNOPLATFONTS -sFONTPATH="c:\psfonts" が設定されているはずです．通常は問題ありませんが，まれに問題を引き起こすかもしれません．

### <a id="otf">OTF パッケージ用の設定</a> {#ycff2f04}

[OTF パッケージ](/OTF/) を用いる場合には，その名の通り OpenType fonts を用いる場合がほとんどです．従って，その場合には フォント名-CMap名を分解するためのファイルを作成する必要があります．

```
(注意!!)
W32TeX に入れられたプログラム ps2otfps.exe を使用する場合，
.../Resource/Font/ に沢山のファイルを作成するという以下の作業は一切不要です．
ps2otfps old.ps new.ps
によって，dvips が出力した old.ps を変換して new.ps を作成します．
この new.ps を Ghostscript で取り扱うことができます．
最新の ps2otfps は -f オプションを付けると，フィルタとして働くので
dvips -f ... dviname | ps2otfps -f >psfile.ps
とすると，更に便利です．
但し，OpenType フォントファイルを PostScript 名に変換したファイルを
.../Resource/CIDFont/
にコピーしておくという作業だけは必要です．
OpenType フォントの PostScript 名は
otfinfo -p OpenTypeFontFile
とすると表示されます．また dvips 用の map ファイルは PostScript 名で
書いておきます．
```

例えば，ps file に Ryumin-Light-Identity-H が使われていた場合には，gs\gs$(rungs --version)\Resource\Font\ に

```
/Ryumin-Light-Identity-H /Identity-H [/Ryumin-Light] composefont pop
```

か，または

```
/Ryumin-Light-Identity-H
/Identity-H /CMap findresource
[/Ryumin-Light /CIDFont findresource]
composefont pop
```

という内容のテキストファイル “Ryumin-Light-Identity-H” を作成する必要があります．同様にして次のファイルを作成します（数が多いので注意）．

- Ryumin-Light-Identity-{H,V}
- GothicBBB-Medium-Identity-{H,V}
- FutoMinA101-Bold-Identity-{H,V}
- FutoGoB101-Bold-Identity-{H,V}
- Jun101-Light-Identity-{H,V}
- MidashiMin-MA31-{H,V}
- MidashiMin-MA31-{EUC,UniJIS-UTF16,Identity}-{H,V}
- MidashiGo-MB31-{H,V}
- MidashiGo-MB31-{EUC,UniJIS-UTF16,Identity}-{H,V}
- STSong-Light-{UniGB-UTF16,Identity}-{H,V}
- STHeiti-Regular-{UniGB-UTF16,Identity}-{H,V}
- MSung-Light-{UniCNS-UTF16,Identity}-{H,V}
- MHei-Medium-{UniCNS-UTF16,Identity}-{H,V}
- HYSMyeongJo-Medium-{UniKS-UTF16,Identity}-{H,V}
- HYGoThic-Medium-{UniKS-UTF16,Identity}-{H,V}
- RyuminPr6N-Light-Identity-{H,V}
- RyuminPr6N-Light-{EUC,UniJIS-UTF16,Identity}-{H,V}
- GothicBBBPr6N-Medium-Identity-{H,V}
- GothicBBBPr6N-Medium-{EUC,UniJIS-UTF16,Identity}-{H,V}
- FutoMinA101Pr6N-Bold-Identity-{H,V}
- FutoMinA101Pr6N-Bold-{EUC,UniJIS-UTF16,Identity}-{H,V}
- FutoGoB101Pr6N-Bold-Identity-{H,V}
- FutoGoB101Pr6N-Bold-{EUC,UniJIS-UTF16,Identity}-{H,V}
- Jun101Pr6N-Light-Identity-{H,V}
- Jun101Pr6N-Light-{EUC,UniJIS-UTF16,Identity}-{H,V}
- MidashiMinPr6N-MA31-{H,V}
- MidashiMinPr6N-MA31-{EUC,UniJIS-UTF16,Identity}-{H,V}
- MidashiGoPr6N-MB31-{H,V}
- MidashiGoPr6N-MB31-{EUC,UniJIS-UTF16,Identity}-{H,V}
- AdobeHeitiStd-Regular-{Identity,UniGB-UTF16}-{H,V}
- AdobeMingStd-Light-{Identity,UniCNS-UTF16}-{H,V}
- AdobeMyungjoStd-Medium-{Identity,UniKS-UTF16}-{H,V}
- AdobeSongStd-Light-{Identity,UniGB-UTF16}-{H,V}
- HiraMinProN-W3-{H,V}
- HiraMinProN-W3-{UniJIS-UTF16,Identity}-{H,V}
- HiraMinPro-W3-Identity-{H,V}
- HiraMinProN-W6-{H,V}
- HiraMinProN-W6-{UniJIS-UTF16,Identity}-{H,V}
- HiraMinPro-W6-Identity-{H,V}
- HiraKakuProN-W3-{H,V}
- HiraKakuProN-W3-{UniJIS-UTF16,Identity}-{H,V}
- HiraKakuPro-W3-Identity-{H,V}
- HiraKakuProN-W6-{H,V}
- HiraKakuProN-W6-{UniJIS-UTF16,Identity}-{H,V}
- HiraKakuPro-W6-Identity-{H,V}
- HiraMaruProN-W4-{H,V}
- HiraMaruProN-W4-{UniJIS-UTF16,Identity}-{H,V}
- HiraMaruPro-W4-Identity-{H,V}
- HiraMinStdN-W2-{H,V}
- HiraMinStdN-W2-{UniJIS-UTF16,Identity}-{H,V}

> 【注意】ここで，例えば “STSong-Light-{UniGB-UTF16,Identity}-{H,V}” と
> いうのは次の<strong>複数の</strong>ファイルのことを指します。
>
> - STSong-Light-UniGB-UTF16-H
> - STSong-Light-UniGB-UTF16-V
> - STSong-Light-Identity-H
> - STSong-Light-Identity-V

[TeXWiki:OTF #dvips 用の map ファイル](/OTF/#k1eb9f9c) も参照。

### オプション “-dWINKANJI” と “-dNOWINKANJI” {#d2d73a0c}

角藤版 Ghostscript には -dWINKANJI というオプションが存在します．この -dWINKANJI を指定すると，日本語フォントは Win32API ドライバを用いて表示されます．ただし -dNOWINKANJI が同時に指定されている場合には，-dWINKANJI は無効化されます．特に縦組み時においてこの -dWINKANJI は有用です．Win32API ドライバで使うフォントの割り当ては gs\gs$(rungs --version)\kanji\kconfig.ps の記述内容によって設定されます．

#### gs\gs$(rungs --version)\kanji\kconfig.ps の記述例 {#d0c50ae3}

***

```
%% Bitmap fonts
%%
/Ryumin-Light      4300000  (ＭＳ 明朝)             win32BMkanji
%/GothicBBB-Medium  4300200  (HGｺﾞｼｯｸM)              win32BMkanji
/GothicBBB-Medium  4300200  (ＭＳ ゴシック)         win32BMkanji
/FutoMinA101-Bold  4300400  (HG明朝B)               win32BMkanji
/FutoGoB101-Bold   4300600  (HGｺﾞｼｯｸE)              win32BMkanji
/Jun101-Light      4300800  (HG丸ｺﾞｼｯｸM-PRO)        win32BMkanji
/MidashiMin-MA31   4301000  (HG明朝E)               win32BMkanji
/MidashiGo-MB31    4301200  (HG創英角ｺﾞｼｯｸUB)       win32BMkanji

%/HiraMinStdN-W2    4301400  (ヒラギノ明朝 StdN W2)  win32BMkanji
/HiraMinStdN-W2    4301400  (ＭＳ 明朝)             win32BMkanji
```

***

このファイルは Shift_JIS で保存してください。

### gs\gs$(rungs --version)\lib\cidfmap の記述例 {#m115a63f}

これはさまざまなフォントを扱うための設定の example です．

***

```
%!
%%% aliases
/Ryumin-Light                 /MS-Mincho                   ;
/Ryumin-Medium                /MS-Mincho                   ;
/FutoMinA101-Bold             /HGMinchoB                   ;
/MidashiMin-MA31              /HGMinchoE                   ;
%/GothicBBB-Medium             /HGGothicM                   ;
/GothicBBB-Medium             /MS-Gothic                   ;
/FutoGoB101-Bold              /HGGothicE                   ;
/MidashiGo-MB31               /HGSoeiKakugothicUB          ;
/Jun101-Light                 /HGMaruGothicMPRO            ;
/HeiseiMin-W3                 /Ryumin-Light                ;
/HeiseiKakuGo-W5              /GothicBBB-Medium            ;
/HiraMinStdN-W2               /MS-Mincho                   ;
/KozMinPr6N-Regular           /Ryumin-Light                ;
/KozMinPro-Regular            /KozMinPr6N-Regular          ;
/KozMinPro-Regular-Acro       /KozMinPro-Regular           ;
/HeiseiMin-W3-Acro            /KozMinPro-Regular-Acro      ;
/KozGoPr6N-Medium             /GothicBBB-Medium            ;
/KozGoPro-Medium              /KozGoPr6N-Medium            ;
/KozGoPro-Medium-Acro         /KozGoPro-Medium             ;
/HeiseiKakuGo-W5-Acro         /KozGoPro-Medium-Acro        ;
/STSong-Light                 /NSimSun                     ;
/STSong-Regular               /NSimSun                     ;
/STHeiti-Regular              /SimHei                      ;
/STHeiti-Light                /SimHei                      ;
/STKaiti-Regular              /KaiTi                       ;
%/STKaiti-Regular              /GBZenKai-Medium             ;
/STFangsong-Regular           /FangSong                    ;
/STFangsong-Light             /FangSong                    ;
/AdobeSongStd-Light           /STSong-Light                ;
/AdobeSongStd-Light-Acro      /AdobeSongStd-Light          ;
/STSongStd-Light-Acro         /AdobeSongStd-Light-Acro     ;
/STSongStd-Light              /STSongStd-Light-Acro        ;
/STSong-Light-Acro            /STSongStd-Light-Acro        ;
/AdobeHeitiStd-Regular        /STHeiti-Regular             ;
/MSung-Light                  /MingLiU                     ;
/MSung-Medium                 /MingLiU                     ;
/MHei-Medium                  /SimHei-Adobe-CNS1           ;
/MKai-Medium                  /DFKaiShu-SB-Estd-BF         ;
%/MKai-Medium                  /ZenKai-Uni                  ;
/AdobeMingStd-Light           /MSung-Light                 ;
/AdobeMingStd-Light-Acro      /AdobeMingStd-Light          ;
/MSungStd-Light-Acro          /AdobeMingStd-Light-Acro     ;
/MSungStd-Light               /MSungStd-Light-Acro         ;
/MSung-Light-Acro             /MSungStd-Light-Acro         ;
/MHei-Medium-Acro             /MHei-Medium                 ;
/HYSMyeongJo-Medium           /BatangChe                   ;
/HYGoThic-Medium              /DotumChe                    ;
/HYKHeadLine-Bold             /Baekmuk-Headline            ;
/HYKHeadLine-Medium           /Baekmuk-Headline            ;
/HYRGoThic-Medium             /GulimChe                    ;
/HYGungSo-Bold                /GungsuhChe                  ;
/AdobeMyungjoStd-Medium       /HYSMyeongJo-Medium          ;
/AdobeMyungjoStd-Medium-Acro  /AdobeMyungjoStd-Medium      ;
/HYSMyeongJoStd-Medium-Acro   /AdobeMyungjoStd-Medium-Acro ;
/HYSMyeongJoStd-Medium        /HYSMyeongJoStd-Medium-Acro  ;
/HYSMyeongJo-Medium-Acro      /HYSMyeongJoStd-Medium-Acro  ;
/HYGoThic-Medium-Acro         /HYGoThic-Medium             ;

%%% monospaced TrueType outline fonts in Windows 8.1/8/7/Vista
%%% See C:\Windows\Fonts\
/MS-Mincho                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msmincho.ttc)  /SubfontID 0 >> ;
/MS-Gothic                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 0 >> ;
/NSimSun                      << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsun.ttc)    /SubfontID 1 >> ;
/SimHei                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simhei.ttf)                 >> ;
/SimHei-Adobe-CNS1            << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/simhei.ttf)                 >> ;
/MingLiU                      << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 0 >> ;
/BatangChe                    << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 1 >> ;
/DotumChe                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 3 >> ;
/GulimChe                     << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 1 >> ;
/GungsuhChe                   << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 3 >> ;

%%% proportional TrueType outline fonts in Windows 8.1/8/7/Vista
%%% See C:\Windows\Fonts\
/MS-PMincho                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msmincho.ttc)  /SubfontID 1 >> ;
/MS-PGothic                   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 1 >> ;
/MS-UIGothic                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/msgothic.ttc)  /SubfontID 2 >> ;
/SimSun                       << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsun.ttc)    /SubfontID 0 >> ;
/PMingLiU                     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 1 >> ;
/Batang                       << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 0 >> ;
/Dotum                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 2 >> ;
/Gulim                        << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/gulim.ttc)     /SubfontID 0 >> ;
/Gungsuh                      << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/batang.ttc)    /SubfontID 2 >> ;

%%% monospaced TrueType outline fonts in Windows 8.1/8/7/Vista
%%% See C:\Windows\Fonts\
/SimSun-ExtB                  << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsunb.ttf) >> ;
/KaiTi                        << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simkai.ttf)  >> ;
/FangSong                     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simfang.ttf) >> ;
/DFKaiShu-SB-Estd-BF          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/kaiu.ttf)    >> ;

%%% proportional TrueType outline fonts in Windows 8.1/8/7/Vista
%%% See C:\Windows\Fonts\
/Meiryo                       << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryo.ttc)    /SubfontID 0 >> ;
/Meiryo-Italic                << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryo.ttc)    /SubfontID 1 >> ;
/Meiryo-Bold                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryob.ttc)   /SubfontID 0 >> ;
/Meiryo-BoldItalic            << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/meiryob.ttc)   /SubfontID 1 >> ;
/MicrosoftYaHei               << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/msyh.ttf)                   >> ;
/MicrosoftYaHeiBold           << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/msyhbd.ttf)                 >> ;
/MicrosoftJhengHeiRegular     << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/msjh.ttf)                   >> ;
/MicrosoftJhengHeiBold        << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/msjhbd.ttf)                 >> ;
/Ming-Lt-HKSCS-UNI-H          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliu.ttc)   /SubfontID 2 >> ;
/MingLiU-ExtB                 << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 0 >> ;
/PMingLiU-ExtB                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 1 >> ;
/Ming-Lt-HKSCS-ExtB           << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/mingliub.ttc)  /SubfontID 2 >> ;
/MalgunGothicRegular          << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/malgun.ttf)                 >> ;
/MalgunGothicBold             << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (C:/Windows/Fonts/malgunbd.ttf)               >> ;

%%% TrueType outline fonts in Microsoft Office 2013
/HGMinchoB                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrmb.ttc)   /SubfontID 0 >> ;
/HGMinchoE                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrme.ttc)   /SubfontID 0 >> ;
/HGSoeiPresenceEB             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrpre.ttc)  /SubfontID 0 >> ;
/HGGothicM                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrgm.ttc)   /SubfontID 0 >> ;
/HGGothicE                    << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrge.ttc)   /SubfontID 0 >> ;
/HGSoeiKakugothicUB           << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrsgu.ttc)  /SubfontID 0 >> ;
/HGMaruGothicMPRO             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrsmp.ttf)               >> ;
/HGSoeiKakupoptai             << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrpp1.ttc)  /SubfontID 0 >> ;
/HGKyokashotai                << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrkk.ttc)   /SubfontID 0 >> ;
/HGSeikaishotaiPRO            << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrskp.ttf)               >> ;
/HGGyoshotai                  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (C:/Windows/Fonts/hgrgy.ttc)   /SubfontID 0 >> ;

%%% Chinese TrueType font by Arphic Technology
%%% See ftp://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     http://www.ring.gr.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
/ShanHeiSun-Light             << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/arphic/bsmi00lp.ttf) >> ;
/ZenKai-Medium                << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/arphic/bkai00mp.ttf) >> ;
/BousungEG-Light-GB           << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/arphic/gbsn00lp.ttf) >> ;
/GBZenKai-Medium              << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/arphic/gkai00mp.ttf) >> ;

%%% CJK-Unifonts
%%% See http://www.freedesktop.org/wiki/Software/CJKUnifonts
/ShanHeiSun-Uni               << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/ttf-arphic-uming/uming.ttf) >> ;
/ShanHeiSun-Uni-Adobe-GB1     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/ttf-arphic-uming/uming.ttf) >> ;
/ZenKai-Uni                   << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (./TrueType/ttf-arphic-ukai/ukai.ttf)   >> ;
/ZenKai-Uni-Adobe-GB1         << /FileType /TrueType  /CSI [(GB1) 5]     /Path (./TrueType/ttf-arphic-ukai/ukai.ttf)   >> ;

%%% Baekmuk fonts
%%% See http://kldp.net/projects/baekmuk/
%%%     ftp://ftp.mizi.com/pub/baekmuk/
/Baekmuk-Batang               << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/batang.ttf) >> ;
/Baekmuk-Dotum                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/dotum.ttf)  >> ;
/Baekmuk-Headline             << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/hline.ttf)  >> ;
/Baekmuk-Gulim                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/gulim.ttf)  >> ;

%%% OpenType fonts with PostScript outlines in Adobe Reader/Acrobat XI
%%% See http://www.adobe.com/support/downloads/product.jsp?product=10&platform=Windows
%%%     ftp://ftp.adobe.com/pub/adobe/reader/win/11.x/11.0.00/misc/
%%%     "C:\Program Files\Adobe\Reader 11.0\Resource\CIDFont\"
%%%     "C:\Program Files (x86)\Adobe\Reader 11.0\Resource\CIDFont\"
%/Ryumin-Light                 /KozMinPr6N-Regular     ;
%/GothicBBB-Medium             /KozGoPr6N-Medium       ;
%/STSong-Light                 /AdobeSongStd-Light     ;
%/STHeiti-Regular              /AdobeHeitiStd-Regular  ;
%/MSung-Light                  /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium           /AdobeMyungjoStd-Medium ;

%%% CID-keyed fonts in Adobe Acrobat Reader 4
%%% See ftp://ftp.adobe.com/pub/adobe/acrobatreader/unix/4.x/
%/Ryumin-Light                 /HeiseiMin-W3-Acro       ;
%/GothicBBB-Medium             /HeiseiKakuGo-W5-Acro    ;
%/STSong-Light                 /STSong-Light-Acro       ;
%/MSung-Light                  /MSung-Light-Acro        ;
%/MHei-Medium                  /MHei-Medium-Acro        ;
%/HYSMyeongJo-Medium           /HYSMyeongJo-Medium-Acro ;
%/HYGoThic-Medium              /HYGoThic-Medium-Acro    ;
```

<!--  -->
<!-- %%% Hiragino TrueType fonts -->
<!-- %%% See http://www.screen.co.jp/ga_product/sento/products/pr_TrueType.html -->
<!-- %/HiraMinProN-W2               /HiraginoMin-W2-90ms-RKSJ-H  ; -->
<!-- %/HiraMinProN-W3               /HiraginoMin-W3-90ms-RKSJ-H  ; -->
<!-- %/HiraMinProN-W6               /HiraginoMin-W6-90ms-RKSJ-H  ; -->
<!-- %/HiraKakuProN-W3              /HiraginoKaku-W3-90ms-RKSJ-H ; -->
<!-- %/HiraKakuProN-W6              /HiraginoKaku-W6-90ms-RKSJ-H ; -->
<!-- %/HiraKakuStdN-W8              /HiraginoKaku-W8-90ms-RKSJ-H ; -->
<!-- /HiraginoMin-W2-90ms-RKSJ-H   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirmn2.ttc)  /SubfontID 1 >> ; -->
<!-- /HiraginoMin-W3-90ms-RKSJ-H   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirmn3.ttc)  /SubfontID 1 >> ; -->
<!-- /HiraginoMin-W6-90ms-RKSJ-H   << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirmn6.ttc)  /SubfontID 1 >> ; -->
<!-- /HiraginoKaku-W3-90ms-RKSJ-H  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirkg3.ttc)  /SubfontID 1 >> ; -->
<!-- /HiraginoKaku-W6-90ms-RKSJ-H  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirkg6.ttc)  /SubfontID 1 >> ; -->
<!-- /HiraginoKaku-W8-90ms-RKSJ-H  << /FileType /TrueType  /CSI [(Japan1) 6]  /Path (./TrueType/DShirkg8.ttc)  /SubfontID 1 >> ; -->

***

### PDF への CJK フォントの非埋め込み制御 {#zd1cf8d8}

標準ではオプション “-sDEVICE="pdfwrite"” や ps2pdf.bat によって
PDF を作成する場合，CJK フォントは全て埋め込まれます。<br>
CJK フォントを埋め込まないように制御するには “/NeverEmbed” を使います。<br>
例えば “foo.ps” という PostScript ファイルを PDF に
変換する場合に，/MS-Mincho （ＭＳ 明朝）を埋め込まないようにするためには<br>
Windows PowerShell に次のようにコマンドを入力します。<br>

```
C:\Users\$Env:USERNAME> rungs -dSAFER -q -dBATCH -dNOPAUSE `
>> -sDEVICE="pdfwrite" -dCompatibilityLevel="1.4" -sOutputFile="foo.pdf" `
>> -c ".setpdfwrite <</NeverEmbed [/MS-Mincho]>> setdistillerparams" `
>> -f "foo.ps"
>>
```

コマンド プロンプトの場合は次のようにコマンドを入力します。

```
>rungs -dSAFER -q -dBATCH -dNOPAUSE ^
More? -sDEVICE="pdfwrite" -dCompatibilityLevel="1.4" -sOutputFile="foo.pdf" ^
More? -c ".setpdfwrite <</NeverEmbed [/MS-Mincho]>> setdistillerparams" ^
More? -f "foo.ps"
```

ここで “/NeverEmbed” で指定するフォント名は PostScript ファイル内に
記述されているフォント名ではなく，<strong>実際に埋め込むフォント名</strong>でなければ
効果がありません。

また，lib/neverembed.ps に非埋め込み制御を行うフォント名をあらかじめ
記述しておいて，次のように<br>
Windows PowerShell にコマンドを入力する方法もあります。

```
C:\Users\$Env:USERNAME> rungs -dSAFER -q -dBATCH -dNOPAUSE `
>> -sDEVICE="pdfwrite" -dCompatibilityLevel="1.4" -sOutputFile="foo.pdf" `
>> -c .setpdfwrite -f "neverembed.ps" -f "foo.ps"
>>
```

コマンド プロンプトの場合は次のようにコマンドを入力します。

```
>rungs -dSAFER -q -dBATCH -dNOPAUSE ^
More? -sDEVICE="pdfwrite" -dCompatibilityLevel="1.4" -sOutputFile="foo.pdf" ^
More? -c .setpdfwrite -f "neverembed.ps" -f "foo.ps"
```

lib/neverembed.ps には，例えば次のように記述しておきます。

***

```
%!
% neverembed.ps
%
<<
/NeverEmbed [
%/Times-Roman /Times-Bold
%/Times-Italic /Times-BoldItalic
%/Helvetica /Helvetica-Oblique /Helvetica-Bold /Helvetica-BoldOblique
%/Courier /Courier-Oblique /Courier-Bold /Courier-BoldOblique
%/Symbol /ZapfDingbats
/Ryumin-Light /HeiseiMin-W3
%/GothicBBB-Medium /HeiseiKakuGo-W5
/STSong-Light
%/STHeiti-Regular
/MSung-Light
%/MHei-Medium
/HYSMyeongJo-Medium
%/HYGoThic-Medium
/KozMinProVI-Regular /KozGoProVI-Medium /KozGoPro-Medium
/AdobeSongStd-Light
%/AdobeHeitiStd-Regular
/AdobeMingStd-Light /AdobeMyungjoStd-Medium
/KozMinPro-Regular-Acro /KozGoPro-Medium-Acro
/AdobeSongStd-Light-Acro /AdobeMingStd-Light-Acro /AdobeMyungjoStd-Medium-Acro
/STSongStd-Light-Acro /MSungStd-Light-Acro /HYSMyeongJoStd-Medium-Acro
/HeiseiMin-W3-Acro /HeiseiKakuGo-W5-Acro
/STSong-Light-Acro /MSung-Light-Acro /HYSMyeongJo-Medium-Acro
/MS-Mincho
%/MS-Gothic /HGGothicM
/NSimSun /MingLiU /BatangChe
]
/AlwaysEmbed [
%/Times-Roman /Times-Bold
%/Times-Italic /Times-BoldItalic
%/Helvetica /Helvetica-Oblique /Helvetica-Bold /Helvetica-BoldOblique
%/Courier /Courier-Oblique /Courier-Bold /Courier-BoldOblique
%/Symbol /ZapfDingbats
]
>> setdistillerparams
```

***

この lib/neverembed.ps への設定を ps2pdf でも有効に
するためには，[gs\gs$(rungs --version)\lib\ps2pdfxx.bat](http://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=gs/lib/ps2pdfxx.bat;hb=HEAD) の記述内容の25行目

```
echo -c .setpdfwrite -f%1 >>"%TEMP%\_.at"2
```

を

```
REM echo -c .setpdfwrite -f%1 >>"%TEMP%\_.at"2
```

のようにコメントアウトし

```
echo -c .setpdfwrite -f neverembed.ps -f%1 >>"%TEMP%\_.at"2
```

を追加します。<br>

さらに dvipdfmx が PostScript ファイルや EPS ファイルを PDF に変換する場合に
lib/neverembed.ps への設定を有効にするためには

[TeX Live](</TeX Live/>) の場合は [dvipdfmx.cfg](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/dvipdfmx/dvipdfmx.cfg?view=markup) の記述内容の150行目

```
D  "rungs -q -dNOPAUSE -dBATCH -dEPSCrop -sDEVICE=pdfwrite -dCompatibilityLevel=%v -dAutoFilterGrayImages=false -dGrayImageFilter=/FlateEncode -dAutoFilterColorImages=false -dColorImageFilter=/FlateEncode -sOutputFile='%o' '%i' -c quit"
```

に次のように “-f neverembed.ps ” を挿入します。

```
D  "rungs -q -dNOPAUSE -dBATCH -dEPSCrop -sDEVICE=pdfwrite -dCompatibilityLevel=%v -dAutoFilterGrayImages=false -dGrayImageFilter=/FlateEncode -dAutoFilterColorImages=false -dColorImageFilter=/FlateEncode -sOutputFile='%o' -f neverembed.ps '%i' -c quit"
```

[W32TeX](/W32TeX/) の場合は $TEXMF/dvipdfmx/config/dvipdfmx.cfg の記述内容の38行目

```
D "rungs -q -dNOPAUSE -dBATCH -dEPSCrop -sDEVICE=pdfwrite -dCompatibilityLevel=%v -dAutoFilterGrayImages=false -dAutoFilterColorImages=false -dGrayImageFilter=/FlateEncode -dColorImageFilter=/FlateEncode -dUseFlateCompression=true -sOutputFile='%o' -c .setpdfwrite -f '%i' -c quit"
```

に次のように “-f neverembed.ps ” を挿入します。

```
D "rungs -q -dNOPAUSE -dBATCH -dEPSCrop -sDEVICE=pdfwrite -dCompatibilityLevel=%v -dAutoFilterGrayImages=false -dAutoFilterColorImages=false -dGrayImageFilter=/FlateEncode -dColorImageFilter=/FlateEncode -dUseFlateCompression=true -sOutputFile='%o' -c .setpdfwrite -f neverembed.ps -f '%i' -c quit"
```

### PDF への欧文用フォントの埋め込み制御 {#y3b70de6}

Ghostscript では “/NeverEmbed”，“/AlwaysEmbed” を使って
PDF への欧文用フォントの埋め込み制御が行えます。<br>
“/NeverEmbed”，“/AlwaysEmbed” がうまく働かない場合は
[Resource/Init/gs_pdfwr.ps](http://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=gs/Resource/Init/gs_pdfwr.ps;hb=HEAD) の記述内容を書き換えることで
PDF への欧文用フォントの埋め込み制御を行います。

デフォルトでは PostScript Level 1 での基本14書体である
Times ファミリ，Helvetica ファミリ，Courier ファミリ，Symbol，ZapfDingbats が
埋め込まれません。<br>
しかし OS X を除く UNIX 互換 OS での Adobe Reader で
Times-Italic や Times-BoldItalic を埋め込んでいない PDF を
表示すると，Times-Italic や Times-BoldItalic の部分が Italic 体ではなく
Oblique 体（Slanted 体，斜体）で表示されてしまいます。
（Xpdf で表示すると PostScript Level 1 での基本14書体は埋め込まれていなくても
正確に表示されます。しかし Xpdf の場合は非埋め込みの中国語フォント・韓国語
［&#xd55c;&#xad6d;&#xc5b4;］フォントが表示されず，非埋め込みの日本語フォントに
使われる書体にも不満がある方が多いとのこと。）<br>
そこで Times-Italic と
Times-BoldItalic だけを埋め込み，Times-Roman，Times-Bold，Helvetica
ファミリ，Courier ファミリ，Symbol，ZapfDingbats だけを
埋め込まないようにすると，ほとんどの環境で PostScript Level 1 での基本14書体が
正確に表示されます。<br>
このような設定にするには，Resource/Init/gs_pdfwr.ps の
記述内容の[26&ndash;33行目](http://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=gs/Resource/Init/gs_pdfwr.ps;hb=HEAD#l26)のうち31行目を次のように変更してください。<br>

```
/.a2112 [2 1 1 2] readonly def
/.a1111 [1 1 1 1] readonly def
/.standardfonts [
  /Courier /Courier-Bold /Courier-Oblique /Courier-BoldOblique
  /Helvetica /Helvetica-Bold /Helvetica-Oblique /Helvetica-BoldOblique
  /Times-Roman /Times-Bold
%  /Times-Italic /Times-BoldItalic
  /Symbol /ZapfDingbats
] readonly def
```

また TeX ファイルから作った Times ファミリや
Helvetica ファミリを埋め込んでいない PDF を Microsoft Windows の
Adobe Reader/Acrobat で表示すると，Times ファミリや Helvetica ファミリでの
文字の一部（\\={o} \[&#x14d;\]，\b{b} \[&#x1e07;\]，\dj \[&#x111;\]，$\hbar$ など）が
正確に表示されません。<br>
そこで Times ファミリと Helvetica ファミリは
埋め込み，Courier ファミリ，Symbol，ZapfDingbats だけを
埋め込まないようにすると，Microsoft Windows を含めたほとんどの環境で
PostScript Level 1 での基本14書体が正確に表示されます。<br>
このような設定にするには，Resource/Init/gs_pdfwr.ps の記述内容の[26&ndash;33行目](http://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=gs/Resource/Init/gs_pdfwr.ps;hb=HEAD#l26)の
うち[30&ndash;31行目](http://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=gs/Resource/Init/gs_pdfwr.ps;hb=HEAD#l30)を次のようにコメントアウトしてください。<br>

```
/.a2112 [2 1 1 2] readonly def
/.a1111 [1 1 1 1] readonly def
/.standardfonts [
  /Courier /Courier-Bold /Courier-Oblique /Courier-BoldOblique
%  /Helvetica /Helvetica-Bold /Helvetica-Oblique /Helvetica-BoldOblique
%  /Times-Roman /Times-Bold /Times-Italic /Times-BoldItalic
  /Symbol /ZapfDingbats
] readonly def
```
