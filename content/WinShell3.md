---
title: "WinShell3"
url: "/WinShell3/"
date: 2010-09-29T22:58:26Z
pukiwiki: "WinShell3"
---

# WinShell3

## [WinShell 3](http://www.winshell.org/) {#cf393be7}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## WinShell とは {#wa3184ab5}

[WinShell](https://mirror.ctan.org/help/Catalogue/entries/winshell.html) は，多言語に対応した LaTeX と TeX のための統合環境 (IDE) です。

TeX の入力とコマンドの実行を簡単にするためのソフトウェアです。

WinShell には

- テキストエディタ
- 構文の強調表示
- プロジェクト管理
- スペルチェック
- 表の作成ウィザード
- BibTeX サポート
- Unicode サポート
- ユーザー定義オプション

などの機能があります。

最新の安定版以降のVer. では、Windows NT 5.x系（2000・XP・XP x64 Edition <!-- NT5.1 は32bit版・NT5.2は64bit版のためこのように記載しました// -->
）・NT 6.x系（Vista・7）のみサポートしています。
64ビットOSではWOW64による32ビット互換アプリとして動作します。

[Wine](http://www.winehq.org/) を使えば Linux 上でも動作します。

> 【注意】<strong>WinShell は TeX そのものなどではありません</strong>。TeX 自身
> および関連ソフトウェアをあらかじめインストールしておく必要があります
> ［必要があれば，TeXWiki:インストール(Windows) を
> 参照してください］。 <!-- また，最初から WinShell を使うのではなく， --> <!-- コマンドライン操作を一通りふまえておいてから --> <!-- WinShell の類の統合環境を用いるべきです。 -->

公式ページは次のところです。

- [WinShell - LaTeX User Front End](http://www.winshell.org/)
    <!-- The latest release is WinShell 3.3 File version: 3.3.1.12 - upload: 2010-08-21  -->

WinShell 3.x が出ましたので，それについてはこちらで解説します。

[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/) 著
『LaTeX2e 美文書作成入門』
（[改訂版](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun2e.html)，[改訂第3版](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun3/)）
の WinShell は 2.2 など
古いバージョンのものですので，[TeXWiki:WinShell#WinShell 2](/WinShell/#gda3cdb6) をご覧ください。

[![WinShell 3 の新しい画面](http://www.winshell.org/modules/ws_screenshots/images/main_small.png)](http://www.winshell.org/modules/ws_screenshots/images/main.png)
[![Linux で動作する WinShell 3](http://www.winshell.org/modules/ws_screenshots/images/Linux_WinShell_small.png)](http://www.winshell.org/modules/ws_screenshots/images/Linux_WinShell.png)

## ダウンロードとインストール {#bf3167cb}

[WinShell - LaTeX User Front End](http://www.winshell.org/) のほか，[CTAN](/CTAN/) からも
ダウンロードできます。

ダウンロードするファイルは，Self-installing exe file と Zip archive の2種類があります。好きな方を選んでダウンロードしてください。

### Self-installing exe file {#o6616ae5}

[WinShell - Download WinShell](http://www.winshell.org/modules/ws_download/) (最新版)，もしくは [CTAN:systems/win32/winshell/](https://mirror.ctan.org/systems/win32/winshell/) (最新版とは限りません) にある
WinShell インストーラ（“WinShell3??.exe” といった名前のもの）をダウンロードし，実行すると
インストールできます。インストーラの質問には
\[Next\] → \[Next\] → \[Next\] → \[Next\] → \[Finish\] と答えてください。
使用許諾書ではもちろん “accept” （受諾）する項目を
選んでください。WinShell が立ち上がり，さらに説明が出ますので，\[OK\] を
押してください。このあといったん WinShell を閉じます。

### Zip archive {#e5dfb289}

[WinShell - Download WinShell](http://www.winshell.org/modules/ws_download/) (最新版)，もしくは [CTAN:systems/win32/winshell/](https://mirror.ctan.org/systems/win32/winshell/) (最新版とは限りません) にある
WinShell zip ファイル（“WinShell3??.zip” といった名前のもの）をダウンロードし，展開すると
インストール完了です。

### 日本語化ファイル {#i83c37b0}

- [WinShell 日本語化ファイル](http://nnnnn.me/downloads.php?cat_id=1)

WinShell に付属の日本語化ファイルは，一部翻訳されていない部分があるので，気になる方はこれも合わせてダウンロードしてください。

ダウンロードしたファイルは WinShell の Translations フォルダに置いてください。

## 設定 {#h3ab6f8d}

### 設定ファイル {#i7f9763c}

WinShell.exe と同じフォルダに Settings という名前のフォルダを作成すると，設定ファイルが Settings フォルダに作成されます。

### 初回起動時 {#ec0403bb}

インストーラでインストールした場合は，デスクトップの WinShell アイコンをダブルクリックするか，
［スタート］ → ［すべてのプログラム］ → ［WinShell］ → ［WinShell］ で起動します。

zip ファイルでインストールした場合は，展開したディレクトリの WinShell.exe をダブルクリックします．

初回起動時に言語を聞いて来ますので，“Japanese” (日本語) を選択して \[OK\] をクリックしてください．

***

<span style="color:Black;background-color:#ACDEFE;">WinShell　　　　　　　　　　　　　　　　</span><br>

　 Choose Language<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">\[Japanese　　　　　　　　　▼\]</span>　← Japanese (日本語) で \[ 　　　OK　　　 \]<br>
<br><br>

　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　　OK　　　 \]</span>

***

### 一般 {#g088628a}

メニューの \[オプション(O)\] → \[全般(G)...\] をクリックすると以下のオプションになっていると思います。

***

<span style="color:Black;background-color:#ACDEFE;">オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</span> </span><br>

<strong>\[ 一般　\]</strong><span style="color:Black;background-color:#EEEEEE;">\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</span><br>

　　　　　言語　　　　　　　　　　　　　　　　　　　　　　　　　　　　ファイル形式<br>
　　　　　　WinShell: 　 　 　 　 　　 　 　 　 　 　 　　　　　　　　　<span style="color:#3333CC;">◎</span> Windows<br>
　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[Japanese　　　　　　　　　　　　▼\]</span>　　　　　　　　　　◯ Unix<br>
　　　　　　スペルチェック:<br>
　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[en_US 　 　 　 　 　 　 　 　 　　▼\]</span><br>

<br>

　　　　☐ バックアップ(.bak)ファイル作成(C)<br>
　　　　☐ 終了時に自動保存(S)<br>
　　　　☑ エラー行に自動ジャンプ(J)<br>
　　　　☑ BibTeXのエディタ表示を利用する<br>
　　　　☑ 起動時に開いているファイルを再読込(R)

***

### フォント {#e6753d2e}

まずフォントの設定をします。

***

<span style="color:Black;background-color:#ACDEFE;">オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</span> </span><br>

<span style="color:Black;background-color:#EEEEEE;">\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]</span><strong>\[ フォント \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</span><br>

<br>

　　　　<span style="color:Black;background-color:#EEEEEE;">\[文書　　　　　　　　　　　　　　　　　　　▼\]</span>　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>

<br>

　　　　フォント:　　　　　　　　　　　　　　　　　　　　　サイズ:　　　　スクリプト:<br>
　　　　<span style="color:Black;background-color:White;">\[　　MS UI Gothic　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[10　　　▼\]</span> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　▼\]</span><br>

<br>

　　　　例:　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　エンコーディング:<br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　<span style="color:Black;background-color:#EEEEEE;">\[ShiftJIS　　　　　▼\]</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;"> 　　　　　　　　　　　　AaBbAaAa　　　　　　　　　　　　　</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　☐ Bold Font<br>

***

WinShell 3.3 の場合：
: &nbsp;

初回起動時に言語選択が Japanese ならば, デフォルトで 3.2 設定項目が設定
されるはずです。但しフォントは確認の上ご自分の用途に応じたものを選んで
ください。

WinShell 3.2 の場合：
: &nbsp;

起動したら，［オプション］ → ［フォント］ で次のように設定してください。
「文書」を選択し，『フォント』の項目で「ＭＳ ゴシック」など
お好みの日本語フォントを選択します。さらに『スクリプト』を「日本語」にし，
『エンコーディング』で「ShiftJIS」 (Shift_JIS) を
選択します<em>（よく忘れるので，この作業を絶対に忘れないこと！）</em>。\[OK\] を
クリックしてください。

Winshell 3.1 の場合：
: &nbsp;

起動したら，［オプション］ → ［フォント］ で，次のように設定してください。
「文書」を選択し，『フォント名』の項目で「ＭＳ ゴシック」など
お好みの日本語フォントを選択します。さらに『スクリプト』を「日本語」にし，
『エンコーディング』で「DBCS」 (double-byte character set) を
選択します<em>（よく忘れるので，この作業を絶対に忘れないこと！）</em>。\[OK\] を
クリックしてください。

Winshell 3.0 の場合：
: &nbsp;

起動したら，［オプション］ → ［フォント］ で ［変更］ボタンをクリックします。
そして，『フォント名』の項目で「ＭＳ ゴシック」などお好みの日本語フォントを
選択します。さらに，『書体の種類』を「日本語」に
します<em>（よく忘れるので，この作業を絶対に忘れないこと！）</em>。\[OK\] を
クリックすると表示フォントが変更されます。

> いずれの場合においても，フォント名として「@ＭＳ ゴシック」のような “@” が
> 先頭に附いた名称のものを選択するとテキストエディタ部の和文文字が
> 横倒しに表示されてしまいますので，そのような設定は避けましょう。

### 主なTeXプログラムの設定 {#v03241d0}

次に，［オプション］ → ［TeX関連プログラム設定］ で
「exeファイル名」を次のように設定します。インストールしたドライブが
Cドライブでない場合には “C:” という部分を書き換えてください。

また，“DOS” に附いているチェックは，好みにより外してください。

> “DOS” にチェックを付けていないと，エラーのときに
> 「コマンド プロンプト」が出てしまいます。“DOS” に
> チェックを付けてあると，エラーのときに下のログ窓に
> エラーの状況が出るだけになります。この挙動は逆のような気がします……。

なお DVIView，GSView，PDFView は自動的に適切な設定になっているはずです。
参照ボタンを押して直接指定する必要はないでしょう。

<em>注意 x64 環境でも TeX 環境用(gs が 32bit dll等) の GSView は必ず x86 用をインストールして下さい。</em>

#### LaTeX {#j415cdd8}

***

<span style="color:Black;background-color:#ACDEFE;">オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</span> </span><br>

<span style="color:Black;background-color:#EEEEEE;">\[ 一般　\]</span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</span><br>

<br>

　　プログラム名　　<ins>LaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">LaTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>eplatex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-kanji=sjis -synctex=1 -src-specials -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

\[LaTeX\]
: &nbsp;

eplatex.exe （うまくいかなければフルパスで指定してください。例えば C:\w32tex\bin\eplatex.exe）

#### BibTeX {#x2fc6cd6}

***

<em>2009/7/20 に W32TeXの "jbibtex.exe" は "pbibtex.exe" に変更されました．それ以前の W32TeX をインストールされている方は，BibTeX の設定の部分を "jbibtex.exe" にしてください． ([qa:53349](https://okumuralab.org/~okumura/texfaq/qa/53349.html))</em>

<span style="color:Black;background-color:#ACDEFE;">オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</span> </span><br>

<span style="color:Black;background-color:#EEEEEE;">\[ 一般　\]</span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</span><br>

<br>

　　プログラム名　　<ins>BibTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">BibTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>pbibtex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-kanji=sjis "%s"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F6 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

\[BibTeX\]
: &nbsp;

pbibtex.exe （うまくいかなければフルパスで指定してください。例えば C:\w32tex\bin\pbibtex.exe）。<em>2009/7/20 に W32TeX の "jbibtex.exe" は "pbibtex.exe" に変更されました。それ以前の W32TeX をインストールされている方は， \[BibTeX\] の設定の部分を "jbibtex.exe" にしてください。 ([qa:53349](https://okumuralab.org/~okumura/texfaq/qa/53349.html))</em>

#### DVIView {#gc5e030c}

***

<span style="color:Black;background-color:#ACDEFE;">オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</span> </span><br>

<span style="color:Black;background-color:#EEEEEE;">\[ 一般　\]</span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</span><br>

<br>

　　プログラム名　　<ins>DVIView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVIView 　　　　　　　　　　　　</span><br>
　　exeファイル名 　<ins>C:\w32tex\dviout\dviout.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-1 %s.dvi "# %l "%c.tex""</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F7 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

\[DVIView\]
: &nbsp;

C:\w32tex\dviout\dviout.exe （自動的に入るはず）

#### DVI -> PS {#m386c533}

***

<em>2010/5/6 に W32TeX の "dvipsk.exe" は "dvips.exe" に統合されました．それ以前の W32TeX をインストールされている方は，DVI -> PS の設定の部分を "dvipsk.exe" にしてください． ([qa:54955](https://okumuralab.org/~okumura/texfaq/qa/54955.html))</em>

<span style="color:Black;background-color:#ACDEFE;">オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</span> </span><br>

<span style="color:Black;background-color:#EEEEEE;">\[ 一般　\]</span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</span><br>

<br>

　　プログラム名　　<ins>DVI -> PS</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>dvips.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVI -> PS　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Ppdf "%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F8 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

\[DVI -> PS\]
: &nbsp;

dvips.exe （うまくいかなければフルパスで指定してください。例えば C:\w32tex\bin\dvips.exe）。
<em>2010/5/6 に W32TeX の "dvipsk.exe" は "dvips.exe" に統合されました。それ以前の W32TeX をインストールされている方は， \[DVI -> PS\] の設定の部分を "dvipsk.exe" にしてください。 ([qa:54955](https://okumuralab.org/~okumura/texfaq/qa/54955.html))</em>

#### GSView {#gb236799}

***

<span style="color:Black;background-color:#ACDEFE;">オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</span> </span><br>

<span style="color:Black;background-color:#EEEEEE;">\[ 一般　\]</span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</span><br>

<br>

　　プログラム名　　<ins>GSView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Ghostgum\gsview\gsview32.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">GSView　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>"%s.ps"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ DVIPSを先に実行<br>
　　実行キー:　　　　引数:<br>
　　F9 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

\[GSView\]
: &nbsp;

［参照］ボタンで gsview32.exe などを指定する。分からない場合は検索すること。

#### PDFLaTeX {#f08ac8c2}

***

<span style="color:Black;background-color:#ACDEFE;">オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</span> </span><br>

<span style="color:Black;background-color:#EEEEEE;">\[ 一般　\]</span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>dvipdfmx.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFLaTeX　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>"%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F10　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

\[PDFLaTeX\]
: &nbsp;

dvipdfmx.exe （さらに「コマンドライン」も「"%s.dvi"」のように変更しておく。）

#### PDFView {#gffc0a36}

***

<span style="color:Black;background-color:#ACDEFE;">オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</span> </span><br>

<span style="color:Black;background-color:#EEEEEE;">\[ 一般　\]</span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Adobe\Reader 9.0\Reader\AcroRd32.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>"%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

\[PDFView\]
: &nbsp;

［参照］ボタンで AcroRd32.exe
（「[Adobe Reader](http://www.adobe.com/jp/products/reader/) の場合」）または Acrobat.exe (「Adobe Acrobat」の場合)を
指定する。分からない場合は検索すること。

### ユーザ指定プログラム {#q408fd2f}

欧文の文書を作成する方は、\[PDFLaTeX\]の項目はデフォルトの pdflatex のままで、［オプション］ → ［ユーザー指定プログラム］ でTool 1 を dvipdfmx に設定しておくと、欧文は pdflatex, 和文は dvipdfmx と使いわけができます。

ただし、Tool 1のdvipdfmxで作成した和文PDFをツールバーのPDFViewボタンで閲覧する場合、［オプション］ → ［主なTeXプログラムの設定］のPDFViewの項目で「PDFLaTeXを先に実行」のチェックを外しておかないとAdobe Readerがアプリケーションエラーを起こして文書が表示されません。

<!-- ついでに，［オプション］ → ［ユーザー指定プログラム］ で -->
<!-- Tool 1 を dvipdfmx に設定しておきます。 -->

プログラム名
: dvipdfmx

exeファイル名
: dvipdfmx.exe

コマンドライン
: "%s.dvi" （うまくいかなければ「"%c.dvi"」または「"%m.dvi"」に

すると良いようです。拡張子を省略して「%c」とか「%m」だけでも良いようです。）

右下は「LaTeXを先に実行」（英語なら，“LaTeX first”）にだけ
チェックを付けておきます。

さらに，［オプション］ → ［ユーザー指定プログラム］ で
Tool 2 を mendex に設定しておきます。

プログラム名
: mendex

exeファイル名
: mendex.exe

コマンドライン
: "%s.idx" （「%s」だけでも可。）

右下は「LaTeXを先に実行」（英語なら，“LaTeX first”）にだけ
チェックを付けておきます。

追加した
dvipdfmx や mendex は ［オプション］ → ［表示］ → ［ユーザ設定］ で
ツールバーに登録できます。ただしメニューバーの言語を
English にしておかないと，文字が大部分表示されないことがあるかもしれません。

## 使い方 {#q72162c1}

すでに TeX ファイルがあればツールバーの ［開く］ボタンで開きます
（ボタンの名前は，ツールバーのアイコンにカーソルを合わせると出てきます）。
無ければ［新規作成］ボタンを押します。上側にエディタ窓が開きます。
このエディタ窓に LaTeX の文書を打ち込みます。

打ち込み終わったら，［保存］ボタンを押します。新規に作成した文書の場合は
ファイル名を聞いてきますので，適当に答えます（例えば “test.tex”）。

\[LaTeX\] ボタンを押します。下のログ窓に処理状況が現れます。

> もしユーザ自身が作成したファイルとは異なるファイルが処理されているようなら，
> ユーザの意図しない「プロジェクト」が用いられていないかどうかを
> 調べてみてください（「プロジェクト」機能については
> 後述の「プロジェクト機能を使おう」を参照してください）。WinShell の
> インストール直後などではデモ用のプロジェクトが用意されていることがあるので，
> 必要ならそれを解除してください (See [qa:48695](https://okumuralab.org/~okumura/texfaq/qa/48695.html))。

エラーがなければ，続いて ［DVI閲覧］ボタンを
押します。[dviout for Windows](/dviout/) が立ち上がって，
結果が表示されるはずです。印刷は dviout for Windows から行います。

次回からは，拡張子が “.tex” のファイルは
エクスプローラでダブルクリックするだけで WinShell が起動するようになります。

### 日本語のマニュアル {#uf5a572b}

「[いろんな文書の翻訳 #WinShell のマニュアル](http://dokoka.org/wiki.cgi?page=%A4%A4%A4%ED%A4%F3%A4%CA%CA%B8%BD%F1%A4%CE%CB%DD%CC%F5#p12)」
において WinShell 附属のマニュアルを日本語訳して公開しています。
（← これは 3.0 附属のものです。現行のバージョンとは多少違いがあります）

### コメントイン・コメントアウト機能 {#wsunk293}

範囲選択後 ［編集］ → ［注釈による無効化/無効化の解除］ （言語が English なら
\[Edit\] → \[Un/Comment\]）と選ぶと，選択した範囲の行頭に “%” が付けられたり
外されたりします。ショートカットキー Ctrl + K で同様のことができます。

### プロジェクト機能を使おう {#l22wsprj}

WinShell にはプロジェクト機能があります。長めの TeX 文書を書く場合に
非常に役立つと思いますのでやり方を紹介しておきます。

まず，TeX ファイルはあらかじめコンパイルしておきます。
メニューバーより ［プロジェクト］ → ［新規プロジェクト］ で
プロジェクトファイルを作ります。
そして，［プロジェクト］ → ［追加］ → ［中心となるTeX文書］ で
現在編集中のファイルを追加します。複数の TeX ファイルに分けている場合には
先ほどの ［追加］ から ［TeX文書］ を，bib ファイルを
作っている場合には ［BibTeX文書］ を選びます。

あとは，左に現れたプロジェクト名を右クリックしてアクティブに
し，［目次］ などの項目を右クリックして［再読み込み］することで，［目次］ には
\section などへのリンクが，［図］ や ［表］，［参考文献］ には
それぞれの \label へのリンクが追加されます。それぞれのラベルへのリンクを
ダブルクリックすることで，そこにジャンプすることができます。

### dviout プレビュー時にできる邪魔なファイルをスッキリさせる {#ja9ea261}

- [リンク: Windowsでdvioutプレビュー時にできる邪魔なファイルをスッキリさせる。](http://d.hatena.ne.jp/okmount/20101004)
- [WindowsでLaTeXを使うときの.pbmファイルを削除する方法](http://nlab.ee.tokushima-u.ac.jp/nlab/haruna/memo/pbm.html)

## WinShell とdviout と の連携機能 (Source special) {#l22a7019}

メニューバーより ［オプション］ → ［TeX関連プログラム設定］ と選び，右の
「プログラム」のリストより \[LaTeX\] を選びます。そして，「コマンドライン」を

```
-src "%s.tex"
```

のように変更しておきます。

[dviout for Windows](/dviout/) の
\[Option\] → \[Setup Parameters...\] → \[Common\] の src: 欄に

```
C:\Program Files\WinShell\WinShell.exe^s-c "%s" -l %d
(64bitOSの場合は、C:\Program Files (x86)\WinShell\WinShell.exe^s-c "%s" -l %d)
```

と書き込んで \[Save\] → \[OK\] の順にクリックしてください。

dviout for Windows でマウスカーソルが矢印になっているときに画面の一部を
ダブルクリックすると，WinShell が前面に出て，該当個所に飛ぶはずです。

さらに，メニューバーより ［オプション］ → ［TeX関連プログラム設定］ と選び，
右の「プログラム」のリストより \[DVIView\] を選びます。
そして，「コマンドライン」を

```
-1 %s.dvi "# %l '%c.tex'" 
```

のように変更しておきます。こうしておくことで，WinShell
から ［DVI閲覧］ボタンを押すことで，WinShell の文書のカーソル位置に相当する
dviout for Windows への該当領域へとジャンプすることができます。

> 【注意】この「source specials を用いた連携」は，「TeX ソースファイルの形で
> 他人に渡す文書（投稿論文の TeX ソースの類）の最終版」を作成する際には
> 用いないでください。実際，source specials を用いるか否かによって
> 体裁あるいは「タイプセットの可否」が変わる例が知られています
> （[qa:8914](https://okumuralab.org/~okumura/texfaq/qa/8914.html)，[qa:14224](https://okumuralab.org/~okumura/texfaq/qa/14224.html) 参照）。

## 「WinShell Update」機能 {#n1ccef71}

WinShell 3.3.1.3 （この Ver. はベータ版）からは標記の機能が追加されました。インストールされている Ver. よりも新しい安定版またはベータ版が出ている場合、新 Ver. の WinShell に Update できるようになりました。

実際、2010/1/7 より 3.3.1.4 （この Ver. もベータ版）への Update がこの機能を用いて、自動的かつ容易にできるようになりました。

### WinShell の更新 {#j9fd4961}

WinShell を起動し，メニューから \[ヘルプ(H)\] → \[アップデートの確認(C)...\] をクリックします。

「WinShellの更新」 が表示され，WinShell の使用中のバージョン・最新のリリースバージョン・最新のベータバージョンが表示されます。

***

<span style="color:Black;background-color:#ACDEFE;">WinShellの更新　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ <strong><span style="color:White;">✕</span></strong> \]</span> </span><br>

　使用中のバージョン: 　　　　3.3.1.12<br>
　最新のリリースバージョン:　3.3.1.12 　 　 　<span style="color:#888888;background-color:#EEEEEE;">\[ 更新を適応 \]</span><br>
　最新のベータバージョン:　　none　　　　　　<span style="color:#888888;background-color:#EEEEEE;">\[ 更新を適応 \]</span><br>
　<span style="color:Black;background-color:#E8E8E8;">\[　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\]</span><br>
　残り時間:<br>
　転送状況:<br>
　☑アップデートを自動的に確認　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　中止　　 \]</span>

***

## 不具合 {#j9720464}

### 赤い小さなゴミのようなものが表示される {#bf59f9a2}

''WinShell 3.3.0.3 + 配布されているパッチという環境で、日本語文書を入力して
カーソル移動などをすると、各文字について、赤い小さなゴミのようなものが表示されます。3.3.1.12 でも同様の症状が発生します。''

> <span style="color:Red;"><strong>「オプション(O) → 自動スペルチェック(A)」をオフにすると解消されます。</strong></span>

### Runtime Error! {#o5faaed5}

WinShell 3.3.1.12 で，エンコーディングを UTF-8 に変更し，LaTeX ファイルをメニューの \[実行(X)\] → \[LaTeX\] でコンパイルしたところ，以下のような Runtime Error! が発生しました．

ShiftJIS (Shift_JIS) では発生しませんでした．

- [Winshell3.3 の Runtime Error: nouse](http://yeblog.cocolog-nifty.com/nouse/2009/02/winshell33-runt.html) 参照

***

<span style="color:Black;background-color:#ACDEFE;">Microsoft Visual C++ Runtime Library　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[ 　<strong><span style="color:White;">✕</span></strong>　 \]</span> </span><br>

<span style="font-size:35px"><strong>×</strong></span>Runtime Error!<br>

<br>

Program: C:\\...\WinShell\WinShell.exe<br>

<br>

<br>

This application has requested the Runtime to terminate it in an<br>
unusual way.<br>
Please contact the application's support team for more<br>
information.

***

### 括弧の強調表示時の文字化け {#xfe3d30d}

過去に報告された日本語の不具合はおおむね直っていますが，
括弧の強調表示時の文字化け現象は解決していませんでした。
［オプション］ → ［WinShellの外観］ → ［ユーザー設定］ でツールバーに
登録する際にコンボボックスのリストの日本語が表示されません。この操作をする
際には ［オプション］ → ［言語］ から言語を “English” にしておきましょう。

括弧の強調表示時（例えば

```
\chapter{日本語文字
```

と入力してから “}” を付けると，括弧が緑色に表示される）に
日本語が文字化けする不具合があります。

ある文字を{}の中で使用すると、文字化けする事があります。

関連内容;　TeXフォーラム内の質問「WinShellにてカーソルを合わせると消える文字について」

[http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=156](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=156)

LaTeX などのメッセージ出力欄においても，日本語が出力される場合文字化けします。

プロジェクトの ［目次］ において，\section に日本語を指定した場合に
文字が表示されない不具合があります。<br>
(追記：2009/12/21)<br>
{}の中で使用すると不具合が起こる文字を以下の通りにまとめます。

> ＋ ボ к 閲 顎 宮 鶏 砿 施 旬 須 捜 畜 怒 倍 府 本 養 几 嘴 學 悳 掉 桀 毬 炮 痣 窖 縵 艝 蛔 諚 轆 閔 驅 黠 垬 葈

> マ м 厭 笠 急 迎 閤 枝 殉 図 挿 筑 党 媒 扶 凡 抑 凩 嘲 孺 怡 掵 栲 毳 烋 痾 竈 繃 艟 蛩 諳 轗 閘 驀 黨 埇 蕓

1行目の文字群は2byte目が0x7C( { )になっており、2行目の文字群は2byte目が0x7d( } )となっているため、エラーが発生します。<br>
これらの文字群を使用するとWinShellのBibTeXのフロントエンド編集での読み込みもできません。(WinShell3.3.0.3,WinShell3.3.0.6,WinShell3.3.1.2で確認)<br>
(追記：2010/01/20)<br>
また、プロジェクトウィンドウを利用している場合は、参考文献一覧も上記文字群が含まれている場合は正常に表示できません。<br>
対策として、上記文字群が含まれているBibTeX項目を、別のbibファイルに隔離して２つのbibファイルを使い分けると少し使い勝手が向上します。<br>
その際、隔離したbibが_Unknownにまとめて表示されれば、WinShellが本来意図して付けたBibTeXの機能を使用できるかと思います。<br> <!-- ちなみに確認OSはXP 32ビットProfessional版 SP2 -->

#### 3.3.0.3 現在 Vista(64ビット版) SP1 + W32TeX {#p7b9c1e0}

```
 括弧の強調表示時の文字化け
```

　　日本語のままで正常動作しました

```
 ある文字を{}の中で使用すると,文字化け
```

　　正常動作しました

```
 プロジェクトの ［目次］ において文字が表示されない
```

　　正常動作しました
