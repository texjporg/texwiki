---
title: "Ghostscript/Windows"
url: "/Ghostscript/Windows/"
date: 2013-09-02T02:59:31Z
pukiwiki: "Ghostscript/Windows"
---

# Ghostscript/Windows

[Ghostscript](/Ghostscript/) > [Windows](</Microsoft Windows/>)

## Ghostscript for Microsoft Windows {#zaffc352}

% とりあえず整理を開始します。古い情報・誤った情報も混ざっているかもしれませんので，詳しい方，修正お願いします。

***

***

### Ghostscript の種類 {#b73aac8a}

Windows 版の Ghostscript にはいくつかの種類があります。

- 本家の公式 Windows 版バイナリ
    - 本家の公式 Windows 版バイナリは，Ghostscript 公式サイトで配布されています。CJK (中国語・日本語・韓国語) の横書きと縦書きに対応しています。
        <!-- -角藤版 Ghostscript -->
        <!-- - -本家版の機能に加え，-dWINKANJI オプションで日本語の縦書き PostScript ファイルをきれいに表示できるようにした角藤版 Ghostscript が存在します。 -->
        <!-- - --TeX Live のコミッタである角藤さんが日本語用にカスタマイズしたもので，以下ではこれを角藤版 Ghostscript と呼ぶことにします。 -->
        <!-- - --TeX Live 2017 (win32) の Ghostscript に角藤さんのバイナリが採用されたようです - -&gt; [[TeX Live (win32) の ghostscript に，角藤さんのバイナリが採用された！ これで日中韓フォントのサポートを作れる ！✌︎('ω'✌︎ ):https://x.com/aminophen/status/856445778486636544]] -->

- tlgs.windows
    - Windows 版の TeX Live に収録されている Ghostscript。本家の公式 Windows 版バイナリとの違いについては [README.TEXLIVE](https://svn.tug.org/texlive/trunk/Master/tlpkg/tlgs/README.TEXLIVE?view=markup) を参照。
- winget Ghostscript
    - winget からインストールできる Ghostscript
- Scoop Ghostscript
    - Scoop からインストールできる Ghostscript
- Chocolatey Ghostscript
    - Chocolatey からインストールできる Ghostscript
- mingw-w64-ghostscript
    - MSYS2 の pacman からインストールできる Ghostscript
- Cygwin Ghostscript
    - Cygwin からインストールできる Ghostscript

[TeX Live](</TeX Live/>) と一緒に用いられているのは，TeX Live の windows 版に収録されている Ghostscript (tlgs.windows) です。

<!-- tlgs のリンク -->
<!-- -[[[texlive] Revision 31760:http://www.tug.org/svn/texlive?view=revision&revision=31760]] -->
<!-- -[[[texlive] Revision 31504:http://www.tug.org/svn/texlive?view=revision&revision=31504]] -->

### インストール {#a4d9c6ea}

TeX Live の windows 版を使用する場合は Ghostscript (tlgs.windows) が含まれていますので，別途 Ghostscript をインストールする必要はありません。

以下で Ghostscript のインストール方法を説明します。

#### インストールの前に（旧バージョンが既にインストールされている場合） {#zea1e76f}

旧バージョンの Ghostscript が既にインストールされている場合は，最新版をインストールする前に旧バージョンをアンインストールしておきます。

- 自分で追加した，あるいは書き換えたファイル等で必要なものは，別のフォルダーにバックアップを取っておきます。
- \[設定\] &gt; \[アプリ\] &gt; \[インストールされているアプリ\] から GPL Ghostscript をアンインストールします。

旧バージョンの Ghostscript Fonts があればそれもアンインストールします。

- 旧バージョンの Ghostscript のフォルダーを探し，何か残っていたならばフォルダーごと削除します。
- その後，Ghostscript をインストールします。

#### インストール方法 {#q1167b48}

1. Ghostscript インストーラ（gs10070w64.exe）を実行します。
    - デフォルトのインストール先は “C:\Program Files\gs\gs10.07.0” です。
    - 上のデフォルトのインストール先には空白文字が含まれるので，気になる人は “C:\gs\gs10.07.0” に変更するとよいでしょう（時に，この空白文字のせいで Ghostscript を利用するソフトウェアが動かないという現象があるようです）。
1. インストールウィザードを終了するウィンドウで \[Generate cidfmap for Windows CJK TrueType fonts\] にチェックが入っていなければチェックを入れて \[Finish\] をクリックします。
1. [SumatraPDF](/SumatraPDF/) で PS ファイル、EPS ファイルが表示できます。

［参考］Ghostscript は好きな場所にインストールすることができますが，日本語等の非 ASCII 文字を含む場所にインストールするのは避けておくのが無難です。
なお，歴史的な理由等から gs\gs10.07.0 などというフォルダーにインストールされることがほとんどです。
その関係から，様々な解説ではこの gs\gs10.07.0 などといったフォルダー構造を仮定していることが多いということを理解しておいてください。

#### ユーザー環境変数 Path またはシステム環境変数 Path の設定 {#w1241f25}

インストールした Ghostscript に含まれる bin フォルダーと lib フォルダーをユーザー環境変数 Path またはシステム環境変数 Path のリストに追加します。
bin だけでなく lib も忘れずに追加しないと，正常に動作しません。
Ghostscript を C:\Program Files\gs\gs10.07.0 にインストールした場合は

```
C:\Program Files\gs\gs10.07.0\bin
```

と

```
C:\Program Files\gs\gs10.07.0\lib
```

をユーザー環境変数 Path またはシステム環境変数 Path のリストに追加します。

Ghostscript をインストールした場合，Windows PowerShell で echo $Env:Path を実行あるいはコマンド プロンプトで echo %Path% を実行した場合の環境変数 Path の表示は以下のようになるでしょう：

```
…;C:\Program Files\gs\gs10.07.0\bin;C:\Program Files\gs\gs10.07.0\lib;…
```

［注意］古い Ghostscript がインストールされていた場合には，環境変数 GS_LIB が残っているかもしれません。
これは腕に自信が無い限り削除しておくのがよいでしょう（ただし，後で述べるフォントを置く場所を追加する方法としてこの GS_LIB を用いる手法もあります）。
いまどきはこんなものは設定しない時代になっています。

#### インストールに失敗する場合 {#g27d0b0b}

ユーザ名に例えば「山田太郎」のように ASCII 以外の文字（日本語など）を使っていると，Ghostscript のインストールに失敗することがあります。
これはユーザー環境変数 TEMP に “C:\Users\山田太郎\AppData\Local\Temp” のように ASCII 以外の文字が使われてしまうことが原因です。
ユーザー環境変数 TEMP のデフォルトは

```
%USERPROFILE%\AppData\Local\Temp （すなわち C:\Users\%USERNAME%\AppData\Local\Temp のこと）
```

に設定されていますが，この %USERPROFILE% に非 ASCII 文字が入ってしまっているわけです。

したがって，ユーザー環境変数 TEMP を ASCII 文字だけで設定します。
例えば UNIX 互換 OS の一時ファイル用ディレクトリ /tmp/ に習って “C:\tmp” のように設定するとよいでしょう。

### 注意点 {#de072348}

- 本家版の Ghostscript をインストールした場合
    - Ghostscript を起動するコマンドは 64-bit 版なら gswin64c，32-bit 版なら gswin32c です。
    - PostScript を PDF に変換する ps2pdf というプログラムは，ps2pdf.bat というバッチファイルです。
- TeX Live をインストールした場合
    - TeX Live (windows) をインストールした場合は TeX Live (windows) に付属する Ghostscript (tlgs.windows) が自動的にインストールされます。
    - Ghostscript (tlgs.windows) を起動するコマンドは rungs です。TeX Live 2025 (windows) の rungs は gswin64c が実行されます。
    - PostScript を PDF に変換する ps2pdf というプログラムは，Ghostscript (tlgs.windows) を使用する場合は ps2pdf.exe という実行ファイルになっています。

#### Windows PowerShell またはコマンド プロンプトから ps2pdf.bat "予定.ps" を実行するとエラー {#m2fac411}

バッチファイル版の ps2pdf では，Windows PowerShell またはコマンド プロンプトから

```
ps2pdf.bat "予定.ps"
```

を実行すると，次のようなエラーになります。

```
Error: /undefinedfilename in (\\.ps)
Operand stack:

Execution stack:
   %interp_exit   .runexec2   --nostringval--   --nostringval--   --nostringval--   2   %stopped_push   --nostringval--
  --nostringval--   --nostringval--   false   1   %stopped_push
Dictionary stack:
   --dict:1186/1684(ro)(G)--   --dict:0/20(G)--   --dict:79/200(L)--
Current allocation mode is local
Last OS error: No such file or directory
GPL Ghostscript 9.26: Unrecoverable error, exit code 1
```

TeX Live 2018 の ps2pdf.exe を使用するとエラーにはなりませんが

```
ps2pdf.exe "予定.ps"
```

を実行すると 予定.pdf ではなく 定.pdf が出力されてしまいます。

rungs.exe, gswin64c.exe, gswin32c.exe から直接実行すれば処理ができて 予定.pdf が出力されます。

```
rungs.exe -dEPSCrop -q -dSAFER -dBATCH -dNOPAUSE -sDEVICE="pdfwrite" -sOutputFile="予定.pdf" -c save pop -f "予定.ps"
```

#### コマンド プロンプトから chcp 65001 で CodePage を変更して ps2pdf.bat を実行すると PDF ファイルが作成されない → CodePage の値を 932 に変更する {#bb074173}

コマンド プロンプトから chcp 65001 で CodePage を変更して ps2pdf.bat を実行すると PDF ファイルが作成されないようです（コマンド自体は正常終了します）。
これは一般に .bat ファイルが認識されないバグのためです。
CodePage の値が 932 の場合は PDF ファイルが出力されます。

```
rungs.exe -dEPSCrop -q -dSAFER -dBATCH -dNOPAUSE -sDEVICE="pdfwrite" -sOutputFile="hoge.pdf" -c save pop -f "hoge.ps"
```

のように ps2pdf.bat ではなく rungs.exe, gswin64c.exe, gswin32c.exe を実行すると PDF ファイルが作成できるようです。

### Ghostscript のフロントエンド {#tdcde17e}

Windows で使用可能な Ghostscript のフロントエンド（プレビューしたり，その他様々なことを GUI で行うためのソフトウェア）のいくつかについて，インストール方法と注意点を簡単に記しておきます。

#### SumatraPDF {#sumatrapdf}

[SumatraPDF](/SumatraPDF/) は Ghostscript をバックエンドとして利用して PostScript ファイルを表示することができます。

#### \[参考\] 関連するアプリケーション {#m1110769}

フロントエンドといえるものではないにせよ Ghostscript を呼び出しているアプリケーションは多数あります（例えば [dvipdfmx](/dvipdfmx/), [Inkscape](/Inkscape/), [ImageMagick](/ImageMagick/) など）。
これらを正常に扱うためには，ユーザー環境変数 Path またはシステム環境変数 Path に Ghostscript に含まれる bin と lib を付け加えておくことが多くの場合必要です。

<!-- ここから下はまだ整理していません… - - アセトアミノフェン (2015-07-07) -->

### cidfmap の初期設定 {#ra5fe424}

日本語等のフォント (CJK font と呼ばれるもの) は，Ghostscript では CID font を用いることが基本的になっています。<br>
これを他の CID font や TrueType font に代替させることを主な目的とした設定ファイルが cidfmap です。<br> <!-- 角藤版 Ghoststscript では，gs\gs$(rungs - -version)\lib に存在します。~ -->
インストール時に \[Generate cidfmap for Windows CJK TrueType fonts\] にチェックを入れておいたならば，この cidfmap は各自の PC に合わせて自動設定がなされます。<br>
しかし，Ghostscript のアンインストールが不完全であった場合などには，この自動設定がなされない場合もあります。<br>
cidfmap を見たときに，% から始まるコメント行ばかりであるならこの自動設定がなされていません。<br>
なお，Ghostscript のインストール後にこの自動設定を単独に行うことも可能です。<br>
次の命令を Windows PowerShell から実行すればそれがなされます。

```
$gsversion = 'gs' + $(rungs --version); rungs -q -dBATCH -sFONTDIR="c:/windows/fonts" -sCIDFMAP="c:/gs/$gsversion/lib/cidfmap" "c:/gs/$gsversion/lib/mkcidfm.ps"
```

パス名部分に関しては各自の環境に合わせて書き直して下さい。<br>
また，c:/windows/fonts というのは Windows の システムフォントフォルダーのことです。

一つ注意を言っておきます。<br>
この自動設定を行ったとしても，あなたの環境にある CJK (中国語・日本語・韓国語) のフォントがすべて使えるようになるわけではありません。<br>
mkcidfm.ps にリストアップされているもののうちのシステムフォントフォルダーに見つかった TrueType fonts への代替設定がされるだけです。<br>
これだけで自由自在になるわけではないことに注意してください。

Windows PowerShell の使い方がわからない場合は Ghostscript を再度正常にインストールすればいいのですが，出来上がるものは大して変わらないのでこちらで作成したものを例として下に張り付けておきます。<br>
これをコピー・ペーストするだけでも大丈夫かもしれません(Windows の version による違いもあるので一概には言えませんが)。パス名部分については各自の環境に合わせることが必要になることがあります。<br>

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

cidfmap を書き換える際に必要になることを簡単に述べておきます(詳しくは gs のドキュメントを読んでください)。<br>
下に実験用の基本的な例を張り付けておきます。<br>
前半の % Aliases は，左に書かれたフォントを右に書かれたフォントで置き換えるという意味です。<br>
後半の % Substitutions は TrueType font の設定と考えて下さい。<br>
この例では，次の4つのフォント代替の連鎖が作られます(あるいはそう考えることができます)。<br>

```
Ryumin-Light -> MS-Mincho -> msmincho.ttc
GothicBBB-Medium -> MS-Gothic -> msgothic.ttc
HeiseiMin-W3 -> Ryumin-Light -> MS-Mincho -> msmincho.ttc
HeiseiKakuGo-W5 -> GothicBBB-Medium -> MS-Gothic -> msgothic.ttc
```

ここで，一番左のフォントが ps file で指定されるもの。いちばん右のフォントが実際に代替されるフォントになります。<br>
Ryumin-Light については2重定義がなされていますが(これはわざとです)，先に書かれたものが有効になります。<br>
このことにも注意を払ってください。<br>

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
    <!-- ［[[ttk (TANAKA, Takuji) さん:http://www.t-lab.opal.ne.jp/tex/]]の -->
    <!-- ウェブサイト -->
    <!-- 「[[TeX memo&mdash;jisx0212 &amp; jisx0213:http://www.t-lab.opal.ne.jp/tex/jisx0213.html]]」に -->
    <!-- ある&ref(http://www.t-lab.opal.ne.jp/tex/jishojo_004.tar.gz,JIS X 0212 （JIS補助漢字）対応 jishojo パッケージ);の -->
    <!-- 中から入手できる。］ -->
    <!-- -JISX0213-2004-V -->
    <!-- ［[[ttk (TANAKA, Takuji) さん:http://www.t-lab.opal.ne.jp/tex/]]の -->
    <!-- ウェブサイト -->
    <!-- 「[[TeX memo&mdash;jisx0212 &amp; jisx0213:http://www.t-lab.opal.ne.jp/tex/jisx0213.html]]」に -->
    <!-- ある&ref(http://www.t-lab.opal.ne.jp/tex/jishojo_004.tar.gz,JIS X 0212 （JIS補助漢字）対応 jishojo パッケージ);の -->
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

CID font (正式名称は CID keyed font) は ghostsript にとって非常に特殊なフォントとなります。<br>
フォントファイルの置き場所が gs\gs$(rungs --version)\Resource\CIDFont\ に限られることと，拡張子は付けてはならないことに注意してフォントファイルを配置します。<br>

CID font file は，ファイル名を拡張子無しの PostScript 名に変えて (例えば，HEMIW3.CID → HeiseiMin-W3)，gs\gs$(rungs --version)\Resource\CIDFont\ に置くかリンクを張っておきます。

この HeiseiMin-W3 を例にとり説明します。gs の段階でこのフォントに代替させる場合，例えば ps file では Ryumin-Light が指定されていてこれを HeiseiMin-W3 に代替させる場合には，cidfmap に次のような alias の記述をしておきます。

```
/Ryumin-Light    /HeiseiMin-W3 ;
```

代替をさせず，ps file に HeiseiMin-W3 が指定されていてそれをそのまま用いる場合には cidfmap には何も記述しません。

```
CID フォントを用いる場合，経験によるとエラーになるかもしれません。
オリジナル ソースに存在するバグと思われます。
```

### 日本語 OpenType font {#j4509a9f}

ここでは日本語等 (CJK) の OpenType font を用いる場合について説明します。<br>

CID font の代わりに Postscript outline の OpenType font (多くの場合には拡張子が .otf の OpenType フォーマットのフォント) を用いることも可能です。<br>
このフォントファイルの配置は，ファイル名を拡張子無しの PostScript 名に変えて (例えば，ヒラギノ明朝 ProN W3.otf → HiraMinProN-W3)，gs\gs$(rungs --version)\Resource\CIDFont\ に置くかリンクを張っておきます。<br>

OpenType font で出力する場合には，ps file で指定されたフォントに関して フォント名-CMap名 の分解を行い，PSフォント名と文字コード変換の方法(使用する CMap)を取得する作業が必要になります(CID font や TrueType font で出力する場合にはこの作業が自動実行されます)。<br>
これが行われないと，CMap名がついたままのものが文字コード変換を行わずに通常の欧文フォントとして探され，最終的には文字化けとなります。<br>
従って，この作業を行うためのファイルあるいはPSコードが必要になります。<br>

上の HiraMinProN-W3 を例に取ってみましょう。<br>
ps file に HiraMinProN-W3-H が指定されており，これをそのまま HiraMinProN-W3 で出力する (HiraMinProN-W3-H -> HiraMinProN-W3) 場合には，

```
/HiraMinProN-W3-H /H [/HiraMinProN-W3] composefont pop
```

という内容のファイルを gs\gs$(rungs --version)\Resource\Font\ に HiraMinProN-W3-H という名前で作成します。<br>
フォント名本体だけではなく，CMapリソース名 (この場合には -H) も含めて考えることに 注意してください。<br>

cidfmap でのフォント代替の記述は CID font の場合と同様です。<br>
例えば，cidfmap で Ryumin-Light -> HiraMinProN-W3 の代替が引き起こるように記述してあったとしましょう。<br>
ps file に Ryumin-Light-H が指定されていた場合には，これは HiraMinProN-W3 で出力する (Ryumin-Light-H -> HiraMinProN-W3) 設定をしていることになります。<br>
この場合には，

```
/Ryumin-Light-H /H [/Ryumin-Light] composefont pop
```

という内容のファイルを gs\gs$(rungs --version)\Resource\Font\ に Ryumin-Light-H という名前で作成します。<br>
どちらにしても，OpenType font で出力する場合には，ps file に指定されているものに関するファイルの作成が必要になるということです。<br>

なお，dvips が出力する ps file に上記の ...composefont pop のようなPSコードがあらかじめ記述されている場合もあります(CMap名が Identity-H である場合等)。<br>
当然のことながら，この場合には上記のファイルが存在していなくても文字化けは引き起こりません。<br>
また W32TeX における 2013/10/01 以降の dvipsk-w32.tar.xz, dvipsk-w64.tar.xz
に入っている ps2otfps.exe を用いて

```
ps2otfps old.ps new.ps
```

によって変換すると，殆どの場合 new.ps に必要なPSコードを記述することができます。<br>
また最新の ps2otfps はオプション -f を付けるとフィルタとして働くので

```
dvips -f ... dviname | ps2otfps -f >psfile.ps
```

とすると更に便利です。<br>

### 日本語 TrueType font {#wbee8199}

ここでは日本語等 (CJK) の TrueType font を用いる場合のフォントの置き場所やパスの設定方法について説明します。

1) まず，ここで用いる用語の説明をしておきます。LIB PATH とは，フォントを含む様々なファイルを探すときに用いられる PATH です。これは，gs のシステム変数 GS_LIB, GS_LIB_DEFAULT で指定される場所であり，rungs -h で表示されるもののうちの Search path: の部分に記述される場所のことです。環境変数 GS_LIB の設定を行うと，デフォルトの GS_LIB の内容をオーバーライドします。 <!-- 角藤版 Ghostscript の場合には，GS_LIB_DEFAULT によって c:/windows/fonts と c:/winnt/fonts がはじめから設定されていることにも注意しておきます。 -->
次に，FONT PATH とは，フォントファイルを探すため専用の追加の PATH です。これは，環境変数 GS_FONTPATH，または，gs の option の -sFONTPATH= に指定された場所になります。なお，-sFONTPATH= は GS_FONTPATH をオーバーライドすることに注意が必要です。

2) 拡張子が .ttf や .ttc である TrueType font (拡張子が .otf であっても TrueType outline であるならば同様に使えるかもしれないが未確認) は，cidfmap での代替を行うことによって使用することができます。この場合，フォントファイルは，cidfmap に記述される /Path (c:/windows/fonts/msmincho.ttc) のようなパスによって探されます(フォントファイルは実ファイルではなくリンクでも構いません)。gs のドキュメントによれば，これは絶対パス指定でならなければならないようです。しかし，相対パス指定，つまり /Path (msmincho.ttc) のような記述も実際には使うことができます。相対パス指定の場合には，フォントは LIB PATH のみから探されます(FONT PATH の場所は探されない)。従って，相対パス指定の場合には，LIB PATH に含まれる場所にフォントファイル(またはリンク)を置いてください。

3) gs の option -dSAFER が用いられた場合には，絶対パス指定の場合に制限が引きおこります(例えば，ps2pdf では -dSAFER が用いられています)。この場合の絶対パスは，LIB PATH または FONT PATH に指定された場所に含まれなければなりません。これらの場所にない絶対パスを指定した場合は error となります。環境変数 GS_FONTPATH を設定することがこの問題を解決する方法の一つです。

4) gs の option -dNOPLATFONTS が用いられた場合には，Windows のシステムフォントフォルダーにあるフォントは探されなくなります。ただし，LIB PATH, FONT PATH にそれが設定されているならば探されます。つまり，相対指定なら LIB PATH に，絶対指定ならば LIB PATH または FONT PATH にシステムフォントフォルダーの場所が記述されていれば探されます。

5) 以上のことから，-dSAFER や -dNOPLATFONTS の問題が起こらないようにして cidfmap で新たにフォントの設定をする場合には，絶対パス指定にしておいてそのパスが必ず探されるようにしておくのが正統的な方法でしょう。しかし，相対パスの方が簡単かもしれません。 <!-- 相対パス指定の場合，例えば角藤版 Ghostscript であるならば，c:\windows\fonts にフォントを置いておけばそれだけでたいていはうまくいきます。 -->
また，環境変数 GS_LIB に何を設定すべきであるかを知っているならば，GS_LIB に目的の場所を付け加えておくのも簡単な方法でしょう(例えば，gs\fonts に相当するものを付け加えて少し古めの形態で使うことも可能です)。

### <a id="otf">OTF パッケージ用の設定</a> {#ycff2f04}

[OTF パッケージ](/OTF/) を用いる場合には，その名の通り OpenType fonts を用いる場合がほとんどです。従って，その場合には フォント名-CMap名を分解するためのファイルを作成する必要があります。

```
(注意!!)
W32TeX に入れられたプログラム ps2otfps.exe を使用する場合，
.../Resource/Font/ に沢山のファイルを作成するという以下の作業は一切不要です。
ps2otfps old.ps new.ps
によって，dvips が出力した old.ps を変換して new.ps を作成します。
この new.ps を Ghostscript で取り扱うことができます。
最新の ps2otfps は -f オプションを付けると，フィルタとして働くので
dvips -f ... dviname | ps2otfps -f >psfile.ps
とすると，更に便利です。
但し，OpenType フォントファイルを PostScript 名に変換したファイルを
.../Resource/CIDFont/
にコピーしておくという作業だけは必要です。
OpenType フォントの PostScript 名は
otfinfo -p OpenTypeFontFile
とすると表示されます。また dvips 用の map ファイルは PostScript 名で
書いておきます。
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

という内容のテキストファイル “Ryumin-Light-Identity-H” を作成する必要があります。同様にして次のファイルを作成します（数が多いので注意）。

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

これはさまざまなフォントを扱うための設定の example です。

***

```
%!
%%% aliases
/Ryumin-Light                 /HaranoAjiMincho-Regular     ;
/Ryumin-Medium                /MS-Mincho                   ;
/FutoMinA101-Bold             /HGMinchoB                   ;
/MidashiMin-MA31              /HGMinchoE                   ;
%/GothicBBB-Medium             /HGGothicM                   ;
/GothicBBB-Medium             /HaranoAjiGothic-Medium      ;
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

%%% monospaced TrueType outline fonts in Windows
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

%%% proportional TrueType outline fonts in Windows
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

%%% monospaced TrueType outline fonts in Windows
%%% See C:\Windows\Fonts\
/SimSun-ExtB                  << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simsunb.ttf) >> ;
/KaiTi                        << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simkai.ttf)  >> ;
/FangSong                     << /FileType /TrueType  /CSI [(GB1) 5]     /Path (C:/Windows/Fonts/simfang.ttf) >> ;
/DFKaiShu-SB-Estd-BF          << /FileType /TrueType  /CSI [(CNS1) 5]    /Path (C:/Windows/Fonts/kaiu.ttf)    >> ;

%%% proportional TrueType outline fonts in Windows
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
%%% See https://ftp.gnu.org/pub/non-gnu/chinese-fonts-truetype/
%%%     https://ftp.jaist.ac.jp/pub/GNU/non-gnu/chinese-fonts-truetype/
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
%%% See https://kldp.net/baekmuk/
/Baekmuk-Batang               << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/batang.ttf) >> ;
/Baekmuk-Dotum                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/dotum.ttf)  >> ;
/Baekmuk-Headline             << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/hline.ttf)  >> ;
/Baekmuk-Gulim                << /FileType /TrueType  /CSI [(Korea1) 2]  /Path (./TrueType/baekmuk-ttf/ttf/gulim.ttf)  >> ;

%%% OpenType fonts with PostScript outlines in Adobe Acrobat Reader/Acrobat
%%% See https://helpx.adobe.com/jp/acrobat/kb/font-pack-spelling-dictionary-64-bit-windows.html
%%%     "C:\Program Files\Adobe\Acrobat DC\Resource\CIDFont"
%/Ryumin-Light                 /KozMinPr6N-Regular     ;
%/GothicBBB-Medium             /KozGoPr6N-Medium       ;
%/STSong-Light                 /AdobeSongStd-Light     ;
%/STHeiti-Regular              /AdobeHeitiStd-Regular  ;
%/MSung-Light                  /AdobeMingStd-Light     ;
%/HYSMyeongJo-Medium           /AdobeMyungjoStd-Medium ;
```

***

### 関連リンク {#gc8a2a19}

#### Ghostscript 公式バイナリの配布元 {#q1e803c3}

- [https://www.ghostscript.com/releases/gsdnld.html](https://www.ghostscript.com/releases/gsdnld.html)
- [https://github.com/ArtifexSoftware/ghostpdl-downloads/releases](https://github.com/ArtifexSoftware/ghostpdl-downloads/releases)

<!-- ***角藤版 Ghostscript の配布元 [#sbee10cb] -->
<!--  -->
<!-- -https://mirror.ctan.org/systems/win32/TLW64/ -->

#### tlgs.windows {#a9e655e3}

- \[[ViewVC\] Index of: texlive/trunk/Master/tlpkg/tlgs](https://svn.tug.org/texlive/trunk/Master/tlpkg/tlgs/)
    - [log](https://svn.tug.org/texlive/trunk/Master/tlpkg/tlgs/?view=log)

#### winget Ghostscript {#lb8d3056}

- [https://winget.run/pkg/ArtifexSoftware/GhostScript](https://winget.run/pkg/ArtifexSoftware/GhostScript)

#### Scoop Ghostscript {#ze908a4d}

- [https://scoop.sh/#/apps?q=ghostscript&s=0&d=1&o=true](https://scoop.sh/#/apps?q=ghostscript&s=0&d=1&o=true)

#### Chocolatey Ghostscript {#x1695e76}

- [https://community.chocolatey.org/packages/Ghostscript](https://community.chocolatey.org/packages/Ghostscript)

#### mingw-w64-ghostscript {#l8186e48}

- [https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-ghostscript](https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-ghostscript)
- [https://packages.msys2.org/package/mingw-w64-ucrt-x86_64-ghostscript](https://packages.msys2.org/package/mingw-w64-ucrt-x86_64-ghostscript)
- [https://packages.msys2.org/package/mingw-w64-clang-x86_64-ghostscript](https://packages.msys2.org/package/mingw-w64-clang-x86_64-ghostscript)
- [https://packages.msys2.org/package/mingw-w64-clang-aarch64-ghostscript](https://packages.msys2.org/package/mingw-w64-clang-aarch64-ghostscript)

#### Cygwin Ghostscript {#q45fc3c8}

- [https://cygwin.com/cgi-bin2/package-grep.cgi?grep=ghostscript](https://cygwin.com/cgi-bin2/package-grep.cgi?grep=ghostscript)
- [https://cygwin.com/cygwin/packages/x86_64/ghostscript/](https://cygwin.com/cygwin/packages/x86_64/ghostscript/)
