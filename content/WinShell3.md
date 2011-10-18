---
title: "WinShell3"
url: "/WinShell3/"
date: 2010-09-29T22:58:26Z
pukiwiki: "WinShell3"
---

# WinShell3

[WinShell](/WinShell/) > WinShell 3

## [WinShell 3](http://www.winshell.org/) {#cf393be7}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## WinShell とは {#wa3184ab5}

[WinShell](https://mirror.ctan.org/help/Catalogue/entries/winshell.html) は，多言語に対応した LaTeX と TeX のための統合環境 (IDE) です．

TeX の入力とコマンドの実行を簡単にするためのソフトウェアです．

WinShell には

- テキストエディタ
- 構文の強調表示
- プロジェクト管理
- スペルチェック
- 表の作成ウィザード
- BibTeX サポート
- Unicode サポート
- ユーザー定義オプション

などの機能があります．

最新の安定版以降の Ver. では、Windows NT 5.x 系（2000・XP・XP x64 Edition <!-- NT5.1 は 32bit版・NT5.2 は 64bit版のためこのように記載しました// -->
）・NT 6.x系（Vista・7）のみサポートしています．
64 ビットOSでは WOW64 による 32 ビット互換アプリとして動作します．

[Wine](http://www.winehq.org/) を使えば Linux 上でも動作します．

> 【注意】<strong>WinShell は TeX そのものなどではありません</strong>．TeX 自身
> および関連ソフトウェアをあらかじめインストールしておく必要があります
> ［必要があれば，TeXWiki:インストール(Windows) を
> 参照してください］． <!-- また，最初から WinShell を使うのではなく， --> <!-- コマンドライン操作を一通りふまえておいてから --> <!-- WinShell の類の統合環境を用いるべきです． -->

- [WinShell - LaTeX User Front End](http://www.winshell.org/) 公式サイト

2011-04-10 WinShell 3.3.2.4 - upload date: 2011-04-10

[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/) 著
『LaTeX2e 美文書作成入門』
([改訂第5版](http://oku.edu.mie-u.ac.jp/~okumura/bibun5/)) では，おすすめの統合環境が [<strong>TeXworks</strong>](/TeXworks/) になりました．<br>
[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/) 著
『LaTeX2e 美文書作成入門』
([改訂第4版](http://oku.edu.mie-u.ac.jp/~okumura/bibun4/)) の WinShell 3.x についてはこちらと [<strong>Wiki内の「WinShell」</strong>](/WinShell/) で解説します．<br>
[奥村晴彦](http://oku.edu.mie-u.ac.jp/~okumura/) 著
『LaTeX2e 美文書作成入門』
([改訂版](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun2e.html)，[改訂第3版](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun3/))
の WinShell は 2.2 など，古いバージョンのものですので，[TeXWiki:WinShell#WinShell 2](/WinShell/#gda3cdb6) をご覧ください．

[![WinShell 3 の新しい画面](http://www.winshell.org/modules/ws_screenshots/images/main_small.png)](http://www.winshell.org/modules/ws_screenshots/images/main.png)
[![Linux で動作する WinShell 3](http://www.winshell.org/modules/ws_screenshots/images/Linux_WinShell_small.png)](http://www.winshell.org/modules/ws_screenshots/images/Linux_WinShell.png)

## ダウンロードとインストール {#bf3167cb}

[WinShell - LaTeX User Front End](http://www.winshell.org/) のほか，[CTAN](/CTAN/) からも
ダウンロードできます．<br>
ダウンロードするファイルは，Self-installing exe file と Zip archive の2種類があります．好きな方を選んでダウンロードしてください．

### Self-installing exe file {#o6616ae5}

- [WinShell - Download WinShell](http://www.winshell.org/modules/ws_download/) (最新版)
    - [リリース版](http://www.winshell.org/modules/ws_download/#release)
    - [ベータ版](http://www.winshell.org/modules/ws_download/#beta)
- [CTAN:systems/win32/winshell/](https://mirror.ctan.org/systems/win32/winshell/) (最新版とは限りません)
- [WinShellでUTF-8](http://stanag4172.m13.coreserver.jp/blog/archives/154) WinShell 3.1 (旧バージョン)
- [LaTeX Install/WinShell - PukiWiki](http://igproj.com/zone3/index.php?LaTeX%20Install/WinShell) WinShell 3.1 (旧バージョン)

上記のサイトから WinShell インストーラ (“WinShell3??.exe” といった名前のもの) をダウンロードし，実行するとインストールできます．<br>
インストーラの質問には \[Next\] → \[Next\] → \[Next\] → \[Next\] → \[Finish\] と答えてください．<br>
使用許諾書ではもちろん “accept” (受諾) する項目を選んでください．<br>
WinShell が立ち上がり，さらに説明が出ますので，\[OK\] を押してください．<br>
このあといったん WinShell を閉じます．

### Zip archive {#e5dfb289}

- [WinShell - Download WinShell](http://www.winshell.org/modules/ws_download/) (最新版)
    - [リリース版](http://www.winshell.org/modules/ws_download/#release)
    - [ベータ版](http://www.winshell.org/modules/ws_download/#beta)
- [CTAN:systems/win32/winshell/](https://mirror.ctan.org/systems/win32/winshell/) (最新版とは限りません)

上記のサイトから WinShell zip ファイル（“WinShell3??.zip” といった名前のもの）をダウンロードし，展開すると
インストール完了です．

<!-- **日本語化ファイル [#i83c37b0] -->
<!--  -->
<!-- -[[WinShell3日本語化:http://redmine.nnnnn.me/projects/winshell/files]] -->
<!-- - -[[jp_JP.txt:http://webcache.googleusercontent.com/search?q=cache%3ahttp://redmine.nnnnn.me/attachments/download/1/jp_JP.txt]] (Google キャッシュ) -->
<!--  -->
<!-- [[( ﾟÅﾟ)んー？誰ｄｓｋ？:http://twitter.com/whoami]] さんが WinShell3日本語化ファイルを公開されています．~ -->
<!-- WinShell に付属の日本語化ファイルは，一部翻訳されていない部分があるので，気になる方はこれも合わせてダウンロードしてください．~ -->
<!-- ダウンロードしたファイルは WinShell の Translations フォルダに置いてください． -->

## 設定 {#h3ab6f8d}

### 設定ファイル {#i7f9763c}

WinShell.exe と同じフォルダに Settings という名前のフォルダを作成すると，設定ファイルが Settings フォルダに作成されます。

### 初回起動時 {#ec0403bb}

インストーラでインストールした場合は，デスクトップの WinShell アイコンをダブルクリックするか，
［スタート］ → ［すべてのプログラム］ → ［WinShell］ → ［WinShell］ で起動します。

zip ファイルでインストールした場合は，展開したディレクトリの WinShell.exe をダブルクリックします．

初回起動時に言語を聞いて来ますので，“Japanese” (日本語) を選択して \[OK\] をクリックしてください．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShell　　　　　　　　　　　　　　　　</ins></span><br>

　 Choose Language<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">\[Japanese　　　　　　　　　▼\]</span>　← Japanese (日本語) で \[ 　　　OK　　　 \]<br>
<br><br>

　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　　OK　　　 \]</span>

***

### 一般 {#g088628a}

メニューから \[オプション(O)\] → \[全般(G)...\] をクリックします．

デフォルトではバックアップファイルを作成しません．<br>
重要な文書を作成する場合は，バックアップ(.bak)ファイル作成(C) にチェックを入れておきましょう．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<strong>\[ 一般　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>
　　　　　言語　　　　　　　　　　　　　　　　　　　　　　　　　　　　ファイル形式<br>
　　　　　　WinShell: 　 　 　 　 　　 　 　 　 　 　 　　　　　　　　　<span style="color:#3333CC;">◎</span> Windows<br>
　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[Japanese　　　　　　　　　　　　▼\]</span>　　　　　　　　　　◯ Unix<br>
　　　　　　スペルチェック:<br>
　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[en_US 　 　 　 　 　 　 　 　 　　▼\]</span><br>

<br>

　　　　☑ バックアップ(.bak)ファイル作成(C)<br>
　　　　☐ 終了時に自動保存(S)<br>
　　　　☑ エラー行に自動ジャンプ(J)<br>
　　　　☑ BibTeXのエディタ表示を利用する<br>
　　　　☑ 起動時に開いているファイルを再読込(R)

***

### フォント {#e6753d2e}

まずフォントの設定をします。

Shift_JIS ではなく UTF-8 を使いたい場合は 不具合#Runtime Error! を参照してください．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]</ins></span><strong>\[ フォント \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　　　<span style="color:Black;background-color:#EEEEEE;">\[文書　　　　　　　　　　　　　　　　　　　▼\]</span>　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>

<br>

　　　　フォント:　　　　　　　　　　　　　　　　　　　　　サイズ:　　　　スクリプト:<br>
　　　　<span style="color:Black;background-color:White;">\[　　MS UI Gothic　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[10　　　▼\]</span> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　▼\]</span><br>

<br>

　　　　例:　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　エンコーディング:<br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　<span style="color:Black;background-color:#EEEEEE;">\[ShiftJIS　　　　　　▼\]</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;"> 　　　　　　　　　　　　AaBbAaAa　　　　　　　　　　　　　</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　☐ Bold Font<br>

***

WinShell 3.3 の場合：
: &nbsp;

初回起動時に言語選択が Japanese ならば, デフォルトで 3.2 設定項目が設定されるはずです。但しフォントは確認の上ご自分の用途に応じたものを選んでください。

WinShell 3.2 の場合：
: &nbsp;

起動したら，［オプション］ → ［フォント］ で次のように設定してください。
「文書」を選択し，『フォント』の項目で「ＭＳ ゴシック」などお好みの日本語フォントを選択します。さらに『スクリプト』を「日本語」にし，『エンコーディング』で「ShiftJIS」 (Shift_JIS) を選択します<em>（よく忘れるので，この作業を絶対に忘れないこと！）</em>。\[OK\] をクリックしてください。

Winshell 3.1 の場合：
: &nbsp;

起動したら，［オプション］ → ［フォント］ で，次のように設定してください。
「文書」を選択し，『フォント名』の項目で「ＭＳ ゴシック」などお好みの日本語フォントを選択します。さらに『スクリプト』を「日本語」にし，『エンコーディング』で「DBCS」 (double-byte character set) を選択します<em>（よく忘れるので，この作業を絶対に忘れないこと！）</em>。\[OK\] をクリックしてください。

Winshell 3.0 の場合：
: &nbsp;

起動したら，［オプション］ → ［フォント］ で ［変更］ボタンをクリックします。
そして，『フォント名』の項目で「ＭＳ ゴシック」などお好みの日本語フォントを選択します。さらに，『書体の種類』を「日本語」にします<em>（よく忘れるので，この作業を絶対に忘れないこと！）</em>。\[OK\] をクリックすると表示フォントが変更されます。

> いずれの場合においても，フォント名として「@ＭＳ ゴシック」のような “@” が先頭に附いた名称のものを選択するとテキストエディタ部の和文文字が横倒しに表示されてしまいますので，そのような設定は避けましょう。

### 構文の強調表示 {#q1b1fd50}

文字化けを防止するため，対応する括弧の強調表示のチェックをはずします．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]</ins></span><strong>\[ 構文の強調表示 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

<br>

<br>

　　　　　　　　　　☑ 構文の強調表示(S)<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>
　　　　　　　　　　　<ins><span style="color:Black;background-color:Blue;">\[　　\]</span> \ (La)TeX命令　　　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　色(C)...　　　\]</span><br>

<br>

　　　　　　　　　　☐ 対応する括弧の強調表示(M)<br>

<br>

<br>

<br>

***

### 自動スペルチェック {#wff9afda}

日本語の文章を作成する場合は \[オプション(O)\] → \[自動スペルチェック(A)\] をオフにします．

### 主なTeXプログラムの設定 {#v03241d0}

［オプション］ → ［TeX関連プログラム設定］ で
「exeファイル名」を次のように設定します．インストールしたドライブが
Cドライブでない場合には “C:” という部分を書き換えてください．

なお DVIView，GSView，PDFView は自動的に適切な設定になっているはずです．<br>
参照ボタンを押して直接指定する必要はないでしょう．<br>
ただし，WinShell 3.3.2.3 よりも前のバージョンの場合は Adobe Reader X に対応していないため，PDFView の exeファイル名に Adobe Reader X を指定しても PDF ファイルが表示できません(なお、Adobe Acrobat X を指定した PDF ファイルの表示は可能です)．<br>
WinShell 3.3.2.3 よりも前のバージョンでは，cmd.exe から Adobe Reader X を呼び出すことで使用が可能になります．

<em>注意 x64 環境でも TeX 環境用(gs が 32bit dll等) の GSView は必ず x86 用をインストールして下さい。</em>

#### LaTeX {#j415cdd8}

platex.exe (うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\platex.exe)

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">LaTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>platex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-no-guess-input-enc -kanji=sjis -synctex=1 -src-specials -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### BibTeX {#x2fc6cd6}

<em>2009/7/20 に W32TeXの "jbibtex.exe" は "pbibtex.exe" に変更されました．それ以前の W32TeX をインストールされている方は，BibTeX の設定の部分を "jbibtex.exe" にしてください． ([qa:53349](https://okumuralab.org/~okumura/texfaq/qa/53349.html))</em>

pbibtex.exe (うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\pbibtex.exe)

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>BibTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">BibTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>pbibtex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-kanji=sjis "%s"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F6 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### DVIView {#gc5e030c}

C:\w32tex\dviout\dviout.exe (\[参照(B)...\] で dviout.exe を検索)

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

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
　　コマンドライン 　<ins>-1 "%s.dvi" "# %l "%c.tex""</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F7 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### DVI -> PS {#m386c533}

<em>2010/5/6 に W32TeX の "dvipsk.exe" は "dvips.exe" に統合されました．それ以前の W32TeX をインストールされている方は，DVI -> PS の設定の部分を "dvipsk.exe" にしてください． ([qa:54955](https://okumuralab.org/~okumura/texfaq/qa/54955.html))</em>

dvips.exe (うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\dvips.exe)

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVI -> PS</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>dvips.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVI -> PS　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Ppdf -t a4 -o "%s.ps" "%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F8 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### GSView {#gb236799}

"C:\Program Files\Ghostgum\gsview\gsview32.exe" (64bit版Windows の場合は "C:\Program Files (x86)\Ghostgum\gsview\gsview32.exe") (\[参照(B)...\] で gsview32.exe を検索)

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

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
　　コマンドライン 　<ins>-e "%s.ps"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ DVIPSを先に実行<br>
　　実行キー:　　　　引数:<br>
　　F9 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

#### PDFLaTeX {#f08ac8c2}

- exeファイル名を dvipdfmx.exe に変更します．(うまくいかなければフルパスで指定してください．例えば C:\w32tex\bin\dvipdfmx.exe)
- さらに，コマンドラインも "%s.dvi" に変更します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>dvipdfmx.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
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

#### PDFView {#gffc0a36}

- [TeXworks](/TeXworks/) の場合，[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．exeファイル名を C:\w32tex\share\texworks\TeXworks.exe (\[参照(B)...\] で TeXworks.exe を検索) とします．
- [SumatraPDF](/SumatraPDF/) の場合，exeファイル名を "C:\Program Files\SumatraPDF\SumatraPDF.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe") (\[参照(B)...\] で SumatraPDF.exe を検索) とします．
- [Adobe Reader](</Adobe Reader/>) X，WinShell 3.3.2.3 以降のバージョンの場合，exeファイル名を "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe") (\[参照(B)...\] で AcroRd32.exe を検索) とします．
- [Adobe Reader](</Adobe Reader/>) X，WinShell 3.3.2.3 よりも前のバージョンの場合，exeファイル名を cmd.exe とし，コマンドラインを /c start "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf" (64bit版Windowsの場合は /c start "C:\Program Files (x86)\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf") とします．
- [Adobe Reader](</Adobe Reader/>) 9 の場合，exeファイル名を "C:\Program Files\Adobe\Reader 9.0\Reader\AcroRd32.exe" (64bit版Windowsの場合は "C:\Program Files (x86)\Adobe\Reader 9.0\Reader\AcroRd32.exe") (\[参照(B)...\] で AcroRd32.exe を検索) とします．

PDFLaTeXを先に実行 のチェックは外しておいた方が良いでしょう．

■ TeXworks の場合

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>C:\w32tex\share\texworks\TeXworks.exe</ins><br>
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

■ SumatraPDF の場合

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-reuse-instance -inverse-search "\\"C:\Program Files\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

■ Adobe Reader X，WinShell 3.3.2.3 以降のバージョンの場合

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe"</ins><br>
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

■ Adobe Reader X，WinShell 3.3.2.3 よりも前のバージョンの場合

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>cmd.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>/c start "C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe" "%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

■ Adobe Reader 9 の場合

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

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

### ユーザ指定プログラム {#q408fd2f}

“DOS”のチェック (☑) は，exe ファイルが DOS (コンソール) アプリケーションで，出力先をコンソールではなく WinShell の Output Window に変更することを意味しています．

チェックを付けていないと，エラーの場合にコマンドプロンプトが出るのは正しい動作です．

従って

- Window アプリケーションの場合
- コンソールアプリケーションでコンソールに出力したい場合

は“DOS”のチェックをはずしてください．

> “DOS” にチェックを付けていないと，エラーのときに
> 「コマンド プロンプト」が出てしまいます。“DOS” に
> チェックを付けてあると，エラーのときに下のログ窓に
> エラーの状況が出るだけになります。この挙動は逆のような気がします……。

#### pdfpLaTeX {#f117c474}

欧文の文書を作成する方は，\[PDFLaTeX\] の項目はデフォルトの pdflatex のままで，［オプション］ → ［ユーザー指定プログラム］ で Tool 1 の プログラム名を pdfpLaTeX，exeファイル名を dvipdfmx.exe に設定しておくと、欧文は pdflatex, 和文は platex + dvipdfmx と使いわけができます．

ただし，Tool 1 の pdfpLaTeX で作成した和文 PDF をツールバーの PDFView ボタンで閲覧する場合，［オプション］ → ［主なTeXプログラムの設定］の PDFView の項目で「PDFLaTeXを先に実行」のチェックを外しておかないと Adobe Reader がアプリケーションエラーを起こして文書が表示されません．

［オプション］ → ［ユーザー指定プログラム］ で
Tool 1 を pdfpLaTeX に設定します。

プログラム名
: pdfpLaTeX

exeファイル名
: dvipdfmx.exe

コマンドライン
: "%s.dvi" （うまくいかなければ「"%c.dvi"」または「"%m.dvi"」に

すると良いようです。拡張子を省略して「%c」とか「%m」だけでも良いようです。）

右下は「LaTeXを先に実行」（英語なら，“LaTeX first”）にだけ
チェックを付けておきます。

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfpLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 1　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 3<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>dvipdfmx.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>"%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F1 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

#### pdfpLaTeX2 {#o1b22e62}

［オプション］ → ［ユーザー指定プログラム］ で
Tool 2 を pdfpLaTeX2 に設定します。

プログラム名
: pdfpLaTeX2

exeファイル名
: ps2pdf.bat

コマンドライン
: "%s.ps"

右下は「LaTeXを先に実行」，「DVIPSを先に実行」（英語なら，“LaTeX first”，“DVIPS first”）にだけ
チェックを付けておきます。

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfpLaTeX2</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 2　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 3<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>ps2pdf.bat</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>"%s.ps"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F2 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

#### Mendex {#z53d4c84}

［オプション］ → ［ユーザー指定プログラム］ で
Tool 3 を Mendex に設定します。

プログラム名
: Mendex

exeファイル名
: mendex.exe

コマンドライン
: -S "%s.idx" （「%s」だけでも可。）

右下は「LaTeXを先に実行」（英語なら，“LaTeX first”）にだけ
チェックを付けておきます。

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>Mendex</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfpLaTeX2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 3　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>mendex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-S "%s.idx"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F3 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

追加した pdfpLaTeX，pdfpLaTeX2，Mendex は ［オプション］ → ［表示］ → ［ユーザ設定］ で
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

「[いろんな文書の翻訳 #WinShell のマニュアル](http://dokoka.org/wiki.cgi?page=%A4%A4%A4%ED%A4%F3%A4%CA%CA%B8%BD%F1%A4%CE%CB%DD%CC%F5)」
において WinShell 附属のマニュアルを日本語訳して公開しています。
（← これは 3.0 附属のものです。現行のバージョンとは多少違いがあります）

### 補完機能 {#k8741d37}

Ctrl + Space でキーワードの補完ができます．

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

## SumatraPDF との連携 (forward and inverse search) {#o54574a6}

LaTeX コマンドのコマンドラインに -synctex=1 を追加し，PDFView を [SumatraPDF](/SumatraPDF/) に変更します．

WinShell は PDFView に SumatraPDF を指定すれば inverse search の設定を自動的に行い forward search の設定をしなくても自動的に実行してくれます．

SumatraPDF v1.7.3952 未満 かつ 2011/05/11 以降の W32TeX の場合は LaTeX を以下のように修正します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">LaTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>powershell.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Command "&amp; {platex -no-guess-input-enc -kanji=sjis -synctex=1 -src-specials -interaction=nonstopmode "$pwd\\%s.tex"}"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

inverse search の時に他のエディタが起動してしまう場合は sumatrapdfprefs.dat を削除してください．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFView</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe"</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☐ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">PDFView　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-reuse-instance -inverse-search "\\"C:\Program Files\WinShell\WinShell.exe\\" -c \\"%f\\" -l %l" "%s.pdf"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F11　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

## dviout との連携 (forward and inverse search) {#l22a7019}

メニューバーより ［オプション］ → ［TeX関連プログラム設定］ と選び，右の
「プログラム」のリストより \[LaTeX\] を選びます。そして，「コマンドライン」を

```
-src-specials "%s.tex"
```

のように変更しておきます。

[dviout for Windows](/dviout/) の
\[Option\] → \[Setup Parameters...\] → \[Common\] の src: 欄に

```
C:\Program Files\WinShell\WinShell.exe^s -c "%s" -l %d
(64bitOSの場合は、C:\Program Files (x86)\WinShell\WinShell.exe^s -c "%s" -l %d)
```

と書き込んで \[Save\] → \[OK\] の順にクリックしてください。

dviout for Windows でマウスカーソルが矢印になっているときに画面の一部を
ダブルクリックすると，WinShell が前面に出て，該当個所に飛ぶはずです。

さらに，メニューバーより ［オプション］ → ［TeX関連プログラム設定］ と選び，
右の「プログラム」のリストより \[DVIView\] を選びます。
そして，「コマンドライン」を

```
-1 "%s.dvi" "# %l "%c.tex"" 
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

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShellの更新　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

　使用中のバージョン: 　　　　3.3.2.3<br>
　最新のリリースバージョン:　3.3.2.4　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 更新を適応 \]</span><br>
　最新のベータバージョン:　　none　　　　　　<span style="color:#888888;background-color:#EEEEEE;">\[ 更新を適応 \]</span><br>
　<span style="color:Black;background-color:#E8E8E8;">\[　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\]</span><br>
　残り時間:<br>
　転送状況:<br>
　☑アップデートを自動的に確認　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　中止　　 \]</span>

***

## 不具合 {#j9720464}

### Runtime Error! {#o5faaed5}

WinShell 3.3.2.4 で，エンコーディングを UTF-8 に変更し

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]</ins></span><strong>\[ フォント \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　　　<span style="color:Black;background-color:#EEEEEE;">\[文書　　　　　　　　　　　　　　　　　　　▼\]</span>　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>

<br>

　　　　フォント:　　　　　　　　　　　　　　　　　　　　　サイズ:　　　　スクリプト:<br>
　　　　<span style="color:Black;background-color:White;">\[　　MS UI Gothic　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[10　　　▼\]</span> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　▼\]</span><br>

<br>

　　　　例:　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　エンコーディング:<br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　<span style="color:Black;background-color:#EEEEEE;">\[UTF-8　　　　　　　▼\]</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;"> 　　　　　　　　　　　　AaBbAaAa　　　　　　　　　　　　　</span><br>
　　　　<span style="color:Black;background-color:#E5E5EE;">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　☐ Bold Font<br>

***

LaTeX ファイルをメニューの \[実行(X)\] → \[LaTeX\] でコンパイルしたところ，以下のような Runtime Error! が発生しました．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　Microsoft Visual C++ Runtime Library　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<span style="font-size:35px"><strong>×</strong></span> Runtime Error!<br>

<br>

　　　　Program: C:\Program Files\WinShell\WinShell.exe<br>

<br>

<br>

　　　　This application has requested the Runtime to terminate it in an<br>
　　　　unusual way.<br>
　　　　Please contact the application's support team for more<br>
　　　　information.

***

ShiftJIS (Shift_JIS) では発生しませんでした．

UTF-8 を使用したい方は，[WinShell 3.1 (旧バージョン)](http://stanag4172.m13.coreserver.jp/blog/archives/154) をダウンロードしてください．

[Winshell3.3 の Runtime Error: nouse](http://yeblog.cocolog-nifty.com/nouse/2009/02/winshell33-runt.html) にも，Runtime Error! に関する情報があります．

どうしても最新版で UTF-8 を使いたい方は，まず \[主なTeXプログラムの設定\] のプログラムの

- LaTeX
- PDFLaTeX

の exeファイル名の値をすべて削除してください． 

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">LaTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-no-guess-input-enc -kanji=utf8 -synctex=1 -src-specials -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ LaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F5 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>PDFLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
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

間違って LaTeX, PDFLaTeX を使用しても，警告メッセージが表示されるだけになり，Runtime Error! を回避できます．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShell　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　　　　実行(.exe)ファイルがありません。<br>
　　　　<span style="font-size:35px"><strong>!</strong></span>　　オプションの指定を確認してください。<br>

<br>

***

それから

- BibTeX
- DVIView
- DVI -> PS
- GSView
- PDFView

の LaTeXを先に実行と PDFLaTeXを先に実行のチェックをすべてはずします．
これらのプログラムは LaTeX と PDFLaTeX のプログラムを使用しなければ，エラーにならずに使用できます．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>BibTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">BibTeX　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>pbibtex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVI -> PS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-kanji=utf8 "%s"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F6 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

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
　　コマンドライン 　<ins>-1 "%s.dvi" "# %l "%c.tex""</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F7 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>DVI -> PS</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　BibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　DVIView<br>
　　exeファイル名 　<ins>dvips.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　<span style="color:#888888;background-color:White;">☑ DOS</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">DVI -> PS　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　GSView<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFView<br>
　　コマンドライン 　<ins>-Ppdf -t a4 -o "%s.ps" "%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ DVIPSを先に実行</span><br>
　　実行キー:　　　　引数:<br>
　　F8 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]</ins></span><strong>\[ 主なTeXプログラムの設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

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
　　コマンドライン 　<ins>-e "%s.ps"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:White;">☐ PDFLaTeXを先に実行</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ DVIPSを先に実行<br>
　　実行キー:　　　　引数:<br>
　　F9 　　　　　　　　%s&lt;.tex>&lt;.dvi>&lt;.ps>&lt;.pdf><br>

***

次に \[ユーザ指定プログラム\] へプログラムを設定します．<br>
\[ユーザ指定プログラム\] を使用すると Runtime Error! にならずにコンパイルすることができます．<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 1　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 2<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 3<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>platex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-no-guess-input-enc -kanji=utf8 -synctex=1 -src-specials -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F1 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>dvipdfmx</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 2　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 3<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>dvipdfmx.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>"%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F2 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>eupLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 3　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 4<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>euplatex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-no-guess-input-enc -kanji=utf8 -synctex=1 -src-specials -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F3 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>updvipdfmx</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　eupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 4　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 5<br>
　　exeファイル名 　<ins>updvipdfmx.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>"%s.dvi"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F4 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>pdfLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　eupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　updvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 5　　　　　　　　　　　　　　</span><br>
　　exeファイル名 　<ins>pdflatex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 6<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-synctex=1 -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F5 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>LuaLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　eupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　updvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　exeファイル名 　<ins>lualatex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 6　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 7<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-synctex=1 -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F6 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>XeLaTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　eupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　updvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　exeファイル名 　<ins>xelatex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LuaLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 7　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 8<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-synctex=1 -interaction=nonstopmode "%s.tex"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F7 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>ps2pdf</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　eupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　updvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　exeファイル名 　<ins>ps2pdf.bat</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LuaLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　XeLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 8　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 9<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>"%s.ps"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F8 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>upBibTeX</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　eupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　updvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　exeファイル名 　<ins>upbibtex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LuaLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　XeLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ps2pdf<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 9　　　　　　　　　　　　　　</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Tool 10<br>
　　コマンドライン 　<ins>-kanji=utf8 "%s"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F9 　　　　　　　%&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]</ins></span><strong>\[ ユーザ指定プログラム \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ マクロ　\]\[ フォント \]\[ 構文の強調表示 \]\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

　　プログラム名　　<ins>Mendex</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザ指定プログラム:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　eupLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　updvipdfmx<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　pdfLaTeX<br>
　　exeファイル名 　<ins>mendex.exe</ins><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　参照(B)...　　　　\]</span>　　☑ DOS<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　LuaLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　XeLaTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　ps2pdf<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　upBibTeX<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:White;background-color:#1188FF;">Tool 10　　　　　　　　　　　　　　</span><br>
　　コマンドライン 　<ins>-U "%s.idx"</ins><br>
　　　　　　　　　　　　　サフィックスも追加してください！<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ PDFLaTeXを先に実行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ DVIPSを先に実行<br>
　　実行キー:<br>
　　Ctrl + Shift　　　引数:<br>
　　+ F10　　　　　　 %&lt;p>\[s, p, c\]&lt;.xxx, .%ex>;%l<br>

***

### Adobe Reader X で PDF ファイルが表示できない {#z65ee470}

WinShell 3.3.2.3 よりも前のバージョンの場合，Adobe Reader X で PDF ファイルを表示しようとすると，以下のような警告メッセージが表示され，PDF ファイルが表示できません．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　WinShell　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

<br>

　　　　　　　Cannot start AcrobatReader or open the document.<br>
　　　　<span style="font-size:35px"><strong>!</strong></span>　　Please check on the exe file and cmd line of the PDFView<br>
　　　　　　　options.<br>

<br>

***

これを回避するには PDFView を参照してください．

### 赤い小さなゴミのようなものが表示される {#bf59f9a2}

WinShell 3.3.0.3 + 配布されているパッチという環境で、日本語文書を入力して
カーソル移動などをすると、各文字について、赤い小さなゴミのようなものが表示されます。3.3.1.12 でも同様の症状が発生します。

> <span style="color:Red;"><strong>「オプション(O) → 自動スペルチェック(A)」をオフにすると解消されます。</strong></span>

### 括弧の強調表示時の文字化け {#xfe3d30d}

過去に報告された日本語の不具合はおおむね直っていますが，括弧の強調表示時の文字化け現象は解決していませんでした。

［オプション］ → ［WinShellの外観］ → ［ユーザー設定］ でツールバーに登録する際にコンボボックスのリストの日本語が表示されません。

この操作をする際には ［オプション］ → ［言語］ から言語を “English” にしておきましょう。

括弧の強調表示時に，日本語が文字化けする不具合があります。

例えば

```
\chapter{日本語文字
```

と入力してから “}” を付けると，括弧が緑色に表示され，文字入力カーソルを “本” の後ろに移動させると文字化けします．

ShiftJIS の場合，特定の文字を{}の中で使用し、文字入力カーソルを特定の文字の後ろに移動させると文字化けします。

これを回避するには，対応する括弧の強調表示のチェックをはずしてください．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　オプション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 一般　\]\[ 主なTeXプログラムの設定 \]\[ ユーザ指定プログラム \]\[ マクロ　\]\[ フォント \]</ins></span><strong>\[ 構文の強調表示 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ ◀ \]\[ ▶ \]</ins></span><br>

<br>

<br>

<br>

　　　　　　　　　　☑ 構文の強調表示(S)<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値(D)　　\]</span><br>
　　　　　　　　　　　<ins><span style="color:Black;background-color:Blue;">\[　　\]</span> \ (La)TeX命令　　　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　色(C)...　　　\]</span><br>

<br>

　　　　　　　　　　☐ 対応する括弧の強調表示(M)<br>

<br>

<br>

<br>

***

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

## WinShell3日本語化ファイル {#sd834cff}

WinShell に付属の日本語化ファイルは，一部翻訳されていない部分があるので，気になる方はこれを jp_JP.txt というファイル名で保存してください．<br>
保存するときには，文字コードを Shift_JIS, 改行コードを CRLF で保存してください．<br>
jp_JP.txt は WinShell の Translations フォルダに置いてください．<br>

***

- jp_JP.txt

***

```
############################################
#  WARNING!!
#  THIS IS NOT AN OFFICIAL TRANSLATION FILE
############################################
# 11/12/2010   nnnnn.me: update for WinShell 3.3.2.1
# 01/20/2010   translated some features for WinShell 3.3.1.4
#
# Japanese translation file for WinShell
#
#
# 11/28/2008   Haruhiko Okumura: update for WinShell 3.3
# 04/28/2007   Haruhiko Okumura: update for WinShell 3.2
# 05/07/2006   Haruhiko Okumura: update
# 06/15/2005   Ingo H. de Boer: copied from original WinShell 2.6 DLL, translated by Suzumizaki Kimitaka, am17 and Haruhiko Okumura
#
#
BEGIN_MENU
#
# File menu
#
ID_FILE_MENU                     == ファイル(&F)
ID_FILE_NEW                      == 新規
ID_FILE_NEW_TEXDOC               == &TeX文書\tCtrl+N
ID_FILE_NEW_BIBTEXDOC            == &BibTeX文書
ID_FILE_OPEN                     == 開く(&O)...\tCtrl+O
ID_FILE_CLOSE                    == 閉じる(&C)\tCtrl+W
ID_FILE_SAVE                     == 保存(&S)\tCtrl+S
ID_FILE_SAVE_AS                  == 別名で保存(&A)...
ID_FILE_SAVE_ALL                 == 全保存(&L)
ID_FILE_PRINT                    == 印刷(&P)...\tCtrl+P
ID_FILE_PRINT_SETUP              == 印刷設定(&U)...
ID_FILE_LAST_FILE                == 最近開いたファイル
ID_FILE_EXIT                     == 終了(&E)
#
# Edit menu
#
ID_EDIT_MENU                     == 編集(&E)
ID_EDIT_UNDO                     == 元に戻す(&U)\tCtrl+Z
ID_EDIT_REDO                     == 再実行(&R)\tCtrl+Y
ID_EDIT_CUT                      == 切り取り(&T)\tCtrl+X
ID_EDIT_COPY                     == コピー(&C)\tCtrl+C
ID_EDIT_PASTE                    == 貼り付け(&P)\tCtrl+V
ID_EDIT_DELETE                   == 削除(&D)\tDel
ID_EDIT_SELECT_ALL               == 全選択(&A)\tCtrl+A
ID_EDIT_COMMENTOUT               == 注釈/注釈の解除(&M)\tCtrl+K
ID_EDIT_SPLITPARAGRAPH           == 段落の分割(&S)\tCtrl+T
ID_EDIT_JOINPARAGRAPH            == 段落の統合(&J)\tCtrl+J
#
# Search menu
#
ID_SEARCH_MENU                   == 検索(&F)
ID_SEARCH_FIND                   == 検索(&F)...\tCtrl+F
ID_SEARCH_FINDNEXT               == 次を検索(&N)\tF3
ID_SEARCH_REPLACE                == 置換(&R)...\tCtrl+H
ID_SEARCH_FINDFILES              == ファイル群から検索(&I)...\tCtrl+Shift+F
ID_SEARCH_GOTOLINE               == 指定行へ移動(&G)\tCtrl+G
#
# Execute menu
#
ID_EXECUTE_MENU                  == 実行(&X)
ID_EXECUTE_LATEX                 == &LaTeX\tF5
ID_EXECUTE_BIBTEX                == &BibTeX\tF6
ID_EXECUTE_DVIVIEW               == &DVI閲覧\tF7
ID_EXECUTE_DVIPS                 == DVI -> &PS\tF8
ID_EXECUTE_GSVIEW                == &GSView(PS閲覧)\tF9
ID_EXECUTE_PDFLATEX              == PD&FLaTeX\tF10
ID_EXECUTE_PDFVIEW               == PDF閲覧(&V)\tF11
ID_EXECUTE_SPELLCHECK            == スペルチェック(&S)...\tF12
ID_EXECUTE_TABLEWIZARD           == 表の作成(&T)...
#
# Options menu
#
ID_OPTIONS_MENU                  == オプション(&O)
ID_OPTIONS_GENERAL               == 全般(&G)...
ID_OPTIONS_PROGCALLS             == TeX関連プログラム設定(&P)...
ID_OPTIONS_USERPROGS             == ユーザ指定プログラム(&U)...
ID_OPTIONS_MACROS                == マクロ(&M)...
ID_OPTIONS_LANGUAGE              == 言語(&L)...
ID_OPTIONS_FONTS                 == フォント(&F)...
ID_OPTIONS_SYNTAXHL              == 強調表示(&H)...
ID_OPTIONS_WRAP                  == 折返しモード(&W)
ID_OPTIONS_LINENUMBERS           == 行番号(&N)
ID_OPTIONS_FOLDING               == 折りたたみ
ID_OPTIONS_AUTOSPELLCHECK        == 自動スペルチェック(&A)
ID_OPTIONS_VIEW_MENU             == 表示(&V)
ID_OPTIONS_VIEW_CUSTOMIZE        == ユーザ設定(&C)...
ID_OPTIONS_VIEW_PROJECTWINDOW    == プロジェクトウィンドウ(&P)
ID_OPTIONS_VIEW_OUTPUTWINDOW     == 出力ウィンドウ(&O)
ID_OPTIONS_VIEW_TOOLBAR          == ツールバー(&T)
ID_OPTIONS_VIEW_STATUSBAR        == ステータスバー(&S)
ID_OPTIONS_VIEW_ARROWBAR         == 矢印(&W)
ID_OPTIONS_VIEW_BINARYBAR        == 二項演算子(&B)
ID_OPTIONS_VIEW_ACCENTSBAR       == アクセント(&A)
ID_OPTIONS_VIEW_RELATIONSBAR     == 関係子(&R)
ID_OPTIONS_VIEW_GREEKBAR         == ギリシア文字(&G)
ID_OPTIONS_VIEW_MISCBAR          == その他(&I)
ID_OPTIONS_VIEW_MACROSBAR        == マクロ(&M)
#
# Project menu
#
ID_PROJECT_MENU                  == プロジェクト(&P)
ID_PROJECT_NEW                   == 新規プロジェクト(&N)...
ID_PROJECT_LOAD                  == プロジェクトの呼び出し(&O)...
ID_PROJECT_CLOSE                 == プロジェクトを閉じる(&C)
ID_PROJECT_SAVE                  == プロジェクトの保存(&S)
ID_PROJECT_SAVEAS                == 別名でプロジェクトの保存(&A)...
ID_PROJECT_ADD_MENU              == 追加(&D)
ID_PROJECT_ADD_MAIN              == 主となるTeX文書(&M)...
ID_PROJECT_ADD_TEX               == &TeX文書...
ID_PROJECT_ADD_BIBTEX            == &BibTeX文書...
#
# Window menu
#
ID_WINDOW_MENU                   == ウィンドウ(&W)
ID_WINDOW_SPLIT                  == 分割(&P)
ID_WINDOW_TILE_VERTICAL          == 垂直タイル(&V)
ID_WINDOW_TILE_HORIZONTAL        == 水平タイル(&H)
#
# Help menu
#
ID_HELP_MENU                     == ヘルプ(&H)
ID_HELP_TOPICS                   == ヘルプトピック(&H)...
ID_HELP_LATEX                    == &LaTeX2eのヘルプ...
ID_HELP_CHECKFORUPDATES          == アップデートの確認(&C)...
ID_HELP_INFO                     == WinShellについて(&I)...
#
# Output window
#
ID_POPUP_OUTPUTW_COPY            == コピー(&C)
ID_POPUP_OUTPUTW_CLEAR           == クリア(&L)
ID_POPUP_OUTPUTW_OUTPUT          == 出力
ID_POPUP_OUTPUTW_LOG             == ログ
ID_POPUP_OUTPUTW_SEARCHRESULTS   == 検索結果
ID_POPUP_OUTPUTW_TASKS           == タスク
#
# Project window
#
ID_POPUP_PROJECTW_ACTIVATE       == アクティブにする(&A)
ID_POPUP_PROJECTW_REMOVE         == 削除(&D)
ID_POPUP_PROJECTW_RELOAD         == 再読み込み(&R)
ID_POPUP_PROJECTW_TOOLTIPS       == ツールチップ(&I)
ID_POPUP_PROJECTW_SORT           == ソート(&S)
ID_POPUP_PROJECTW_INSERTREF      == 参照の挿入(&n)
ID_POPUP_PROJECTW_INSERTCITE     == 引用の挿入(&n)
ID_POPUP_PROJECTW_SORTBYAUTHOR   == 著者名でソート(&S)
ID_POPUP_PROJECTW_SHOWALLBIB     == 全て表示(&A)
#
# MDI Tab
#
ID_POPUP_TAB_WINDOW_SPLIT        == ウィンドウ分割(&W)
ID_POPUP_TAB_WINDOW_TEXTVIEW     == テキスト表示(&T)
ID_POPUP_TAB_WINDOW_FRONTENDVIEW == エディタ表示(&F)
#
# Toolbar customization
#
ID_POPUP_TOOLBAR_DELETE          == 削除(&D)
ID_POPUP_TOOLBAR_EDIT            == 編集(&E)...
ID_POPUP_TOOLBAR_IMAGE           == 画像(&I)
ID_POPUP_TOOLBAR_TEXT            == テキスト(&T)
ID_POPUP_TOOLBAR_IMAGEANDTEXT    == 画像とテキスト(&A)
ID_POPUP_TOOLBAR_GROUP           == グループ(&G)
#
# Spelling
#
ID_POPUP_SPELL_IGNOREALL         == すべて無視(&G)
ID_POPUP_SPELL_LANGUAGE          == 言語(&L)
ID_POPUP_SPELL_DIALOG            == スペルチェック(&S)...
ID_POPUP_SPELL_MORE_SUGGESTIONS  == もっと代案(&M)
ID_POPUP_SPELL_DICTIONARY_ADD    == 辞書登録(&y)
ID_POPUP_SPELL_DICTIONARY_EDIT   == 辞書編集(&i)...
#
# BibTeX
#
ID_POPUP_BIBTEX_NEW_ENTRY        == 新しい項目(&N)\tCtrl+I
ID_POPUP_BIBTEX_EDIT_STRINGS     == 文字列を編集(&S)...
ID_POPUP_BIBTEX_EDIT_PREAMBLE    == プリアンブルを編集(&r)...
ID_POPUP_BIBTEX_EDIT_TYPESFIELDS == 型とフィールドを編集(&y)...
#
END_MENU

BEGIN_STRINGTABLE
#
# File menu messages
#
ID_FILE_NEW_TEXDOC               == TeX文書を新規作成します\n新規TeX文書
ID_FILE_NEW_BIBTEXDOC            == BibTeX文書を新規作成します\n新規BibTeX文書
ID_FILE_OPEN                     == 既存の文書を開きます\n開く
ID_FILE_CLOSE                    == 編集中の文書を閉じます\n閉じる
ID_FILE_SAVE                     == 編集中の文書を保存します\n保存
ID_FILE_SAVE_AS                  == 編集中の文書を別名で保存します\n別名で保存
ID_FILE_SAVE_ALL                 == 編集中のすべての文書を保存\n全保存
ID_FILE_PRINT                    == 編集中の文書を印刷します\n印刷
ID_FILE_PRINT_SETUP              == プリンタ・印刷オプションの変更\n印刷設定
ID_FILE_LAST_FILE                == 過去に開いたファイルを開きます
ID_FILE_EXIT                     == WinShellを終了します\n終了
#
# Edit menu messages
#
ID_EDIT_UNDO                     == 最後に行った変更を戻します\n元に戻す
ID_EDIT_REDO                     == 最後に行った変更を再実行します\n再実行
ID_EDIT_CUT                      == 選択部分をクリップボードに移動します\n切り取り
ID_EDIT_COPY                     == 選択部分をクリップボードにコピーします\nコピー
ID_EDIT_PASTE                    == クリップボードの内容を挿入します\n貼り付け
ID_EDIT_DELETE                   == 選択部分を削除します\n削除
ID_EDIT_SELECT_ALL               == 全てを選択します\n全選択
ID_EDIT_COMMENTOUT               == 選択したテキストを注釈にしたり解除したりします\n注釈化/注釈解除
ID_EDIT_SPLITPARAGRAPH           == 選択した段落を任意の幅で改行する\n段落の分割
ID_EDIT_JOINPARAGRAPH            == 選択した行を1つの段落に統合する\n段落の統合
#
# Search menu messages
#
ID_SEARCH_FIND                   == 指定の文字列を探します\n検索
ID_SEARCH_FINDNEXT               == 検索を繰り返します\n次を検索
ID_SEARCH_REPLACE                == 指定された文字列を他の文字列に置き換えます\n置換
ID_SEARCH_FINDFILES              == ファイル群から指定テキストを検索\nファイル群から検索
ID_SEARCH_GOTOLINE               == # 行目に移動します\n# 行目に移動
#
# Execute menu messages
#
ID_EXECUTE_LATEX                 == LaTeXの実行\nLaTeX
ID_EXECUTE_BIBTEX                == BibTeXの実行\nBibTeX
ID_EXECUTE_DVIVIEW               == DVI閲覧ソフトを起動\nDVI閲覧
ID_EXECUTE_DVIPS                 == DVIPSの実行\nDVIPS
ID_EXECUTE_GSVIEW                == GSViewの実行\nGSView
ID_EXECUTE_PDFLATEX              == PDFLaTeXの実行\nPDFLaTeX
ID_EXECUTE_PDFVIEW               == PDFViewの実行\nPDFView
ID_EXECUTE_SPELLCHECK            == スペルチェッカの実行\nスペルチェッカ
ID_EXECUTE_TABLEWIZARD           == 表作成ウィザードを実行\n表作成
#
# Options menu messages
#
ID_OPTIONS_GENERAL               == WinShell全般についてのオプション\nオプション-全般
ID_OPTIONS_PROGCALLS             == プログラムの呼び出し\nプログラムの呼び出し
ID_OPTIONS_USERPROGS             == ユーザプログラムを指定\nユーザプログラム指定
ID_OPTIONS_MACROS                == マクロの設定\nマクロ
ID_OPTIONS_LANGUAGE              == WinShellユーザインターフェースとスペルチェッカの言語を選ぶ\n言語
ID_OPTIONS_FONTS                 == 文書とウィンドウのフォントを選ぶ\nフォント
ID_OPTIONS_SYNTAXHL              == 強調表示をするかどうかを指定します\n強調表示
ID_OPTIONS_WRAP                  == 行の折返し設定/解除\n折返し
ID_OPTIONS_LINENUMBERS           == 行番号表示/非表示\n行番号
ID_OPTIONS_FOLDING               == 折りたたみ設定/解除\n折りたたみ
ID_OPTIONS_AUTOSPELLCHECK        == 自動スペルチェックのオン/オフ\n自動スペルチェック
ID_OPTIONS_VIEW_CUSTOMIZE        == ツールバーのカスタマイズ\nカスタマイズ
ID_OPTIONS_VIEW_PROJECTWINDOW    == プロジェクトウィンドウの表示/非表示\nプロジェクト窓表示/非表示
ID_OPTIONS_VIEW_OUTPUTWINDOW     == 出力ウィンドウの表示/非表示\n出力窓表示/非表示
ID_OPTIONS_VIEW_TOOLBAR          == ツールバーの表示/非表示\nツールバー表示/非表示
ID_OPTIONS_VIEW_STATUSBAR        == ステータスバーの表示/非表示\nステータスバー表示/非表示
ID_OPTIONS_VIEW_ARROWBAR         == 矢印バーの表示/非表示\n矢印バー表示/非表示
ID_OPTIONS_VIEW_BINARYBAR        == 二項演算子バーの表示/非表示\n二項演算子バー表示/非表示
ID_OPTIONS_VIEW_ACCENTSBAR       == アクセントバーの表示/非表示\nアクセントバー表示/非表示
ID_OPTIONS_VIEW_RELATIONSBAR     == 関係子バーの表示/非表示\n関係子バー表示/非表示
ID_OPTIONS_VIEW_GREEKBAR         == ギリシア文字バーの表示/非表示\nギリシア文字バー表示/非表示
ID_OPTIONS_VIEW_MISCBAR          == 「その他の記号」バー表示/非表示\nその他の記号バー表示/非表示
ID_OPTIONS_VIEW_MACROSBAR        == マクロバーの表示/非表示\nマクロバー表示/非表示
#
# Project menu messages
#
ID_PROJECT_NEW                   == 新規プロジェクトの作成\n新規プロジェクト
ID_PROJECT_LOAD                  == プロジェクトの呼び出し\nプロジェクト呼び出し
ID_PROJECT_CLOSE                 == 編集中のプロジェクトを閉じる\nプロジェクトを閉じる
ID_PROJECT_SAVE                  == 編集中のプロジェクトを保存\nプロジェクト保存
ID_PROJECT_SAVEAS                == 編集中のプロジェクトに別名をつけて保存\n別名でプロジェクト保存
ID_PROJECT_ADD_MAIN              == プロジェクトに主となるTeX文書を加える\n主となるTeX文書
ID_PROJECT_ADD_TEX               == プロジェクトにTeX文書を追加する\nTeX文書
ID_PROJECT_ADD_BIBTEX            == プロジェクトにBibTeX文書を追加する\nBibTeX文書
#
# Window menu messages
#
ID_WINDOW_SPLIT                  == アクティブウィンドウをペインに分割\n分割
ID_WINDOW_TILE_VERTICAL          == 重ならないタイルとして垂直にウィンドウを並べる\n垂直タイル
ID_WINDOW_TILE_HORIZONTAL        == 重ならないタイルとして水平にウィンドウを並べる\n水平タイル
#
# Help menu messages
#
ID_HELP_TOPICS                   == ヘルプトピックを一覧表示\nヘルプトピック一覧
ID_HELP_LATEX                    == LaTeX2e - ヘルプ
ID_HELP_CHECKFORUPDATES          == WinShellの新しいバージョンを確認する。\nWinShellの更新
ID_HELP_INFO                     == プログラムの情報・バージョン・著作権を表示\n情報
#
# Project window strings
#
ID_PROJECTW_TITLE                == すべてのプロジェクト
ID_PROJECTW_CURRENTDOC           == 現在の文書
ID_PROJECTW_FILES                == ファイル
ID_PROJECTW_TOC                  == 目次
ID_PROJECTW_FIGURES              == 図
ID_PROJECTW_TABLES               == 表
ID_PROJECTW_BIBENTRIES           == 参考文献
ID_PROJECTW_POPUP_ACTIVATE       == このプロジェクトを編集します\nこのプロジェクトを編集
ID_PROJECTW_POPUP_RELOAD         == 表目次・図・表・文献の再読み込み\n再読み込み
ID_PROJECTW_POPUP_REMOVE         == このファイルをプロジェクトから除く\nプロジェクトから削除
ID_PROJECTW_POPUP_TOOLTIPS       == プロジェクト窓にツールチップを表示\nツールチップ
ID_PROJECTW_POPUP_SORT           == 項目をアルファベット順にソート\nアルファベット順
ID_PROJECTW_POPUP_INSERTREF      == 参照を本文に挿入\n参照の挿入
ID_PROJECTW_POPUP_INSERTCITE     == 引用を本文に挿入\n引用の挿入
ID_PROJECTW_POPUP_SORTBYAUTHOR   == BibTeX項目を著者名でソートする\n著者名でソート
ID_PROJECTW_POPUP_SHOWALLBIB     == 全てのBibTeX項目を.bibファイルから表示する\n全て表示
ID_PROJECTW_BIBTEX_LINEINDOC     == 行 %u
ID_PROJECTW_NOLOGFILE            == ログファイルが読み出せません。
#
# Output window strings
#
ID_OUTPUTW_TITLE                 == 出力
ID_OUTPUTW_OUTPUT                == 出力
ID_OUTPUTW_LOG                   == ログ
ID_OUTPUTW_SEARCHRESULTS         == 検索結果
ID_OUTPUTW_TASKS                 == タスク
ID_OUTPUTW_BUILDLINE             == プロジェクト構成
ID_OUTPUTW_INFOLINE              == %s - %i 個のエラー, %i 個の警告, %i 個のオーバーフル, %i 個のアンダーフル
ID_OUTPUTW_TYPEERROR             == エラー
ID_OUTPUTW_TYPEWARNING           == 警告
ID_OUTPUTW_TYPEUNDERFULL         == アンダーフル
ID_OUTPUTW_TYPEOVERFULL          == オーバーフル
#
# Search strings
#
ID_SEARCH_SEARCHING_FOR          == '%s'を探しています...
ID_SEARCH_CANCELED               == 検索を中止しました
ID_SEARCH_NOTHING_FOUND          == '%s'が見つかりません
ID_SEARCH_OCCURRENCES            == %d 個が見つかりました
#
# Tasks strings
#
ID_TASKS_ASSEMBLING              == タスクリストを作成しています...
ID_TASKS_CANCELED                == 作成中止.
ID_TASKS_NOTHING_FOUND           == タスクはありません.
ID_TASKS_OCCURRENCES             == %d 個のタスクがありました.
#
# Spelling
#
ID_SPELL_IGNOREALL               == このスペルを無視\nすべて無視
ID_SPELL_DICTIONARY_ADD          == 語を個人辞書に登録\n辞書登録
ID_SPELL_DICTIONARY_EDIT         == 個人辞書を編集\n辞書編集
ID_SPELL_DIALOG                  == スペルチェック画面を開く\nスペルチェッカ
#
# BibTeX
#
ID_POPUP_BIBTEX_NEW_ENTRY        == 新規BibTeX項目を挿入する\n新規
ID_POPUP_BIBTEX_EDIT_STRINGS     == このBibTeX文書の文字列を編集する\n文字列編集
ID_POPUP_BIBTEX_EDIT_PREAMBLE    == このBibTeX文書のプリアンブルを編集する\nプリアンブル編集
ID_POPUP_BIBTEX_EDIT_TYPESFIELDS == BibTeX項目の型とフィールドを編集する\n型/フィールド編集
ID_POPUP_BIBTEX_SWITCH_FROMTEXT  == テキスト表示からエディタ表示に切り替える\nエディタ表示
ID_POPUP_BIBTEX_SWITCH_TOTEXT    == エディタ表示からテキスト表示に切り替える.\nテキスト表示
#
# Update
#
ID_UPDATE_NO_CONNECTION          == サーバへ接続できません!
ID_UPDATE_RESTART_TO_INSTALL     == インストールを完了するためにWinShellを再起動してください
ID_UPDATE_CANNOT_SAVE_INFO       == 更新情報を保存できません
ID_UPDATE_CANNOT_DLOAD_RELEASE   == リリース版をダウンロードできませんでした
ID_UPDATE_CANNOT_DLOAD_BETA      == ベータ版をダウンロードできませんでした
#
# General messages/strings
#
ID_IDLE_MESSAGE                  == 操作を受け付けています
ID_STATUSBAR_MAINDOCUMENT        == 主となるTeX文書:  %s
ID_STATUSBAR_LINECOLUMN          == 行 %u, 桁 %u
ID_BAR_MENUBAR                   == メインバー
ID_BAR_TOOLBAR                   == ツールバー
ID_BAR_ARROWS                    == 矢印
ID_BAR_BINARY                    == 二項演算子
ID_BAR_GREEK                     == ギリシア文字
ID_BAR_MISC                      == その他
ID_BAR_MACROS                    == マクロ
ID_BAR_RELATIONS                 == 関係子
ID_BAR_ACCENTS                   == アクセント
ID_MACRO_INSERT                  == マクロ '%s' をカーソル位置に挿入します
ID_USERTOOL_EXECUTE              == '%s' を実行します
ID_CUSTOMIZE_STANDARD            == 標準
ID_CUSTOMIZE_USERPROGS           == ユーザ指定プログラム
ID_CUSTOMIZE_MACROS              == ユーザ指定マクロ
ID_MORE_WINDOWS                  == ウィンドウを増やす(&M)...
ID_MORE_COLORS                   == もっと色(&M)...
ID_PRINT_TIMEFORMAT              == %y-%m-%d %H:%M:%S
ID_PRINT_PAGE                    == ページ: %u/%u
ID_PRINT_TITLE                   == ファイル: %s - 日付: %s
ID_TAB_CLOSE                     == 閉じる
ID_TAB_SCROLL_LEFT               == 左スクロール
ID_TAB_SCROLL_RIGHT              == 右スクロール
#
END_STRINGTABLE

BEGIN_DIALOG
#
# General
#
ID_BUTTON_OK                     == OK
ID_BUTTON_CANCEL                 == 中止
ID_BUTTON_CLOSE                  == 閉じる
ID_BUTTON_EDIT                   == 編集(&E)...
ID_BUTTON_CHANGE                 == 変更(&C)...
ID_BUTTON_BROWSE                 == 参照(&B)...
ID_BUTTON_DEFAULT                == 既定値(&D)
ID_BUTTON_COLOR                  == 色(&C)...
ID_BUTTON_ADD                    == 追加(&A)
ID_BUTTON_ADD_DDD                == 追加(&A)...
ID_BUTTON_DELETE                 == 削除(&D)
#
# MessageBoxes
#
ID_UNKNOWN_COMMAND               == '%s' は未知のコマンドです。
ID_FILE_CHANGED                  == このファイルは他のソフトから変更を受けたようです。\n再読み込みしますか？
ID_OPTIONS_NOCMDLINE             == コマンドラインが記述されていません。\nオプションの指定を確認してください。
ID_OPTIONS_NOEXELINE             == 実行(.exe)ファイルがありません。\nオプションの指定を確認してください。
ID_OPTIONS_GENERALERROR          == エラーがありました。\nオプションの指定を確認してください。
ID_PROJECT_NOCURRENT             == TeX文書がありません。\nファイルを開いてください。
ID_PROJECT_NOMAINFILE            == 主となるTeX文書がありません。
ID_PROJECT_NOFILES               == プロジェクトにファイルがありません。
ID_PROJECT_NOTLOADED             == プロジェクトが呼び出されていません。
ID_PROJECT_NOTCREATED            == プロジェクトが作成されませんでした。
ID_PROJECT_EXISTS                == プロジェクト <%s> はすでにあります。
ID_PROJECT_NOTOCENTRY            == エントリが見つかりません
ID_PROJECT_NOBIBFILE             == プロジェクトにbibファイルが設定されていません
ID_TOOLBAR_CANNOTCREATEIMAGE     == 新しい画像が作成できません
ID_TOOLBAR_CHOOSEIMAGE           == 画像を選択してください
ID_TOOLBAR_INSERTTEXT            == 何か文字列を記入してください
ID_TOOLBAR_CANTPASTEBITMAP       == クリップポードにある画像を貼り付けることができません
ID_TOOLBAR_WRONGIMAGESIZE        == %d x %d の大きさの画像のみが使用できます
ID_SPELLCHECK_FINISHED           == スペルチェックが終わりました
ID_SPELLCHECK_NOMATCH_ENCODING   == 文書と辞書の文字コードが一致しません!\nどちらかの文字コードを変更してください!
ID_BIBTEX_REQUIREDINFOMISSING    == 要求された情報が見つかりません!
ID_BIBTEX_UNKNOWNENTRYTYPE       == 未知のBibTeX項目の型 '%s' があります!\n既知の型のリストに加えますか?
ID_BIBTEX_UNKNOWNENTRYFIELD      == 未知のBibTeX項目のフィールド '%s' があります!\n既知のフィールドのリストに加えますか?
IDS_BIBTEXBRACEERROR             == BibTeX内に括弧の閉じ忘れまたは不正利用が検出されました\n'%s'
#
# Open/close dialogs
#
ID_DLG_WINSHELL_FILTER_OPEN      == WinShellファイル (*.wsp;*.tex;*.bib;*.log)|*.wsp;*.tex;*.bib;*.log|プロジェクトファイル (*.wsp)|*.wsp|TeXファイル (*.tex)|*.tex|Bibファイル (*.bib)|*.bib|ログファイル (*.log)|*.log|すべてのファイル (*.*)|*.*|
ID_DLG_WINSHELL_FILTER_SAVE      == TeXファイル (*.tex)|*.tex|Bibファイル (*.bib)|*.bib|ログファイル (*.log)|*.log|すべてのファイル (*.*)|*.*|
ID_DLG_WINSHELL_TITLE            == WinShellのファイルを開く
ID_DLG_MAINTEX_FILTER            == TeXファイル (*.tex)|*.tex|すべてのファイル (*.*)|*.*|
ID_DLG_MAINTEX_TITLE             == 主となるTeX文書
ID_DLG_TEX_TITLE                 == TeX文書
ID_DLG_BIBTEX_FILTER             == BibTeXファイル (*.bib)|*.bib|すべてのファイル (*.*)|*.*|
ID_DLG_BIBTEX_TITLE              == BibTeX文書
ID_DLG_PROJECT_FILTER            == プロジェクトファイル (*.wsp)|*.wsp|
ID_DLG_PROJECT_TITLE_OPEN        == プロジェクトファイルを開く
ID_DLG_PROJECT_TITLE_NEW         == 新しいプロジェクト
ID_DLG_PROJECT_TITLE_SAVE        == プロジェクトファイルの保存
ID_DLG_SAVEAS_TITLE              == 別名で保存...
ID_DLG_EXE_FILTER                == 実行形式ファイル (*.exe;*.bat)|*.exe;*.bat|すべてのファイル (*.*)|*.*|
ID_DLG_EXE_TITLE                 == 実行形式ファイル
#
# Options: General dialog
#
ID_OPT_TITLE                     == オプション
ID_OPT_GENERAL_TITLE             == 一般
ID_OPT_GENERAL_BACKUPFILES       == バックアップ(.bak)ファイル作成(&C)
ID_OPT_GENERAL_AUTOSAVE          == 終了時に自動保存(&S)
ID_OPT_GENERAL_AUTOERRORJUMP     == エラー行に自動ジャンプ(&J)
ID_OPT_GENERAL_USEBIBTEXFRONTEND == &BibTeXのエディタ表示を利用する
ID_OPT_GENERAL_RELOADFILES       == 起動時に開いているファイルを再読込(&R)
ID_OPT_GENERAL_FILEFORMAT        == ファイル形式
ID_OPT_GENERAL_FF_WINDOWS        == &Windows
ID_OPT_GENERAL_FF_UNIX           == &Unix
ID_OPT_GENERAL_LANGUAGE          == 言語
ID_OPT_GENERAL_LANGUAGE_SPELL    == スペルチェック:
#
# Options: Programm calls/User program dialogs
#
ID_OPT_PROGRAMCALLS_TITLE        == 主なTeXプログラムの設定
ID_OPT_PROGRAMCALLS_GROUP        == プログラム:
ID_OPT_PROGRAMCALLS_PARAMETER    == 引数:\n%s<.tex><.dvi><.ps><.pdf>
ID_OPT_USERPROGCALLS_TITLE       == ユーザ指定プログラム
ID_OPT_USERPROGCALLS_GROUP       == ユーザ指定プログラム:
ID_OPT_USERPROGCALLS_PARAMETER   == 引数:\n%<p>[s, p, c]<.xxx, .%ex>;%l
ID_OPT_USERPROGCALLS_CTRLSHIFT   == Ctrl + Shift
ID_OPT_PROGRAMS_NAME             == プログラム名
ID_OPT_PROGRAMS_EXEFILE          == exeファイル名
ID_OPT_PROGRAMS_CMDLINE          == コマンドライン
ID_OPT_PROGRAMS_DOS              == D&OS
ID_OPT_PROGRAMS_SUFFIXHINT       == サフィックスも追加してください！
ID_OPT_PROGRAMS_KEYS             == 実行キー:
ID_OPT_PROGRAMS_LATEXFIRST       == &LaTeXを先に実行
ID_OPT_PROGRAMS_PDFLATEXFIRST    == &PDFLaTeXを先に実行
ID_OPT_PROGRAMS_DVIPSFIRST       == &DVIPSを先に実行
#
# Options: Macros dialog
#
ID_OPT_MACROS_TITLE              == マクロ
ID_OPT_MACROS_SHIFT              == Shift +
ID_OPT_MACROS_NAME               == 名前:
#
# Options: Fonts dialog
#
ID_OPT_FONTS_TITLE               == フォント
ID_OPT_FONTS_FONT                == フォント:
ID_OPT_FONTS_SIZE                == サイズ:
ID_OPT_FONTS_SCRIPT              == スクリプト:
ID_OPT_FONTS_ENCODING            == エンコーディング:
ID_OPT_FONTS_EXAMPLE             == 例:
ID_OPT_FONTS_SEL_DOCUMENTS       == 文書
ID_OPT_FONTS_SEL_PRJWINDOW       == プロジェクト窓
ID_OPT_FONTS_SEL_OUTWINDOW       == 出力窓
ID_OPT_FONTS_ENCODE_STANDARD     == 標準
#
# Options: SyntaxHL dialog
#
ID_OPT_SYNTAXHL_TITLE            == 構文の強調表示
ID_OPT_SYNTAXHL_SYNTAXHL         == 構文の強調表示(&S)
ID_OPT_SYNTAXHL_MATCHBRACES      == 対応する括弧の強調表示(&M)
ID_OPT_SYNTAXHL_COLOR_COMMANDS   == \ (La)TeX命令
ID_OPT_SYNTAXHL_COLOR_BRACES     == 括弧
ID_OPT_SYNTAXHL_COLOR_BEGINEND   == \begin ... \end
ID_OPT_SYNTAXHL_COLOR_COMMENT    == % 注釈
ID_OPT_SYNTAXHL_COLOR_MATHMODE   == $ 数学モード
ID_OPT_SYNTAXHL_COLOR_NORMALTEXT == 通常の文字
ID_OPT_SYNTAXHL_COLOR_SELECTTEXT == 選択したテキスト
ID_OPT_SYNTAXHL_COLOR_CURSOR     == カーソル
ID_OPT_SYNTAXHL_COLOR_BACKGROUND == 背景
#
# Search/Replace dialog
#
ID_SEARCHREPLACE_S_TITLE         == 検索
ID_SEARCHREPLACE_SR_TITLE        == 検索と置換
ID_SEARCHREPLACE_SIF_TITLE       == ファイル群から検索
ID_SEARCHREPLACE_SEARCHFOR       == 検索する文字列(&S):
ID_SEARCHREPLACE_SEARCHIN        == 検索範囲(&I):
ID_SEARCHREPLACE_REPLACEWITH     == 置換後の文字列(&W):
ID_SEARCHREPLACE_MATCHWHOLE      == 単語の一致(&M)
ID_SEARCHREPLACE_MATCHCASE       == 大文字・小文字を区別(&C)
ID_SEARCHREPLACE_REGEX           == 正規表現(&X)
ID_SEARCHREPLACE_DIRECTION       == 検索方向
ID_SEARCHREPLACE_UP              == 上(&U)
ID_SEARCHREPLACE_DOWN            == 下(&D)
ID_SEARCHREPLACE_FINDNEXT        == 次を検索(&F)
ID_SEARCHREPLACE_REPLACEIN       == 置換する範囲
ID_SEARCHREPLACE_REPLACESEL      == 選択(&L)
ID_SEARCHREPLACE_REPLACEDOC      == 文書(&M)
ID_SEARCHREPLACE_REPLACE         == 置換(&R)
ID_SEARCHREPLACE_REPLACEALL      == すべて置換(&A)
ID_SEARCHREPLACE_STARTSEARCH     == 検索(&E)
ID_SEARCHREPLACE_STOPSEARCH      == 停止(&P)
ID_SEARCHREPLACE_INCLUDESUBDIRS  == サブディレクトリを含める
ID_SEARCHREPLACE_FILETYPES       == ファイルタイプ(&T):
ID_SEARCHREPLACE_CURRENT_PRJ     == 現在のプロジェクト
ID_SEARCHREPLACE_ALL_PRJS        == すべてのプロジェクト
ID_SEARCHREPLACE_CURRENT_DOC     == 現在の文書
ID_SEARCHREPLACE_ALL_DOCS        == 開いているすべての文書
#
# Go to line dialog
#
ID_GOTOLINE_TITLE                == 指定行へ移動
ID_GOTOLINE_LINE                 == 行:
#
# Table Wizard
#
ID_TABLEWIZARD_TITLE1            == 表の作成 - 三段階の一
ID_TABLEWIZARD_TITLE2            == 表の作成 - 三段階の二
ID_TABLEWIZARD_TITLE3            == 表の作成 - 三段階の三
ID_TABLEWIZARD_ROWS              == 行数(縦方向):
ID_TABLEWIZARD_COLUMNS           == 列数(横方向):
#
# Spell Checker
#
ID_SPELLCHECKER_TITLE            == スペルチェッカ
ID_SPELLCHECKER_MISSPELLEDWORD   == 間違った単語:
ID_SPELLCHECKER_REPLACEWIDTH     == 次と置換:
ID_SPELLCHECKER_RECHECKALL       == すべて再チェック(&C)
ID_SPELLCHECKER_CHECKWORD        == 単語チェック(&W)
ID_SPELLCHECKER_SUGGESTIONS      == 提案:
ID_SPELLCHECKER_REPLACE          == 置換(&R)
ID_SPELLCHECKER_REPLACEALL       == すべて置換(&L)
ID_SPELLCHECKER_IGNORE           == 無視(&I)
ID_SPELLCHECKER_IGNOREALL        == すべて無視(&G)
ID_SPELLCHECKER_PERSDICT         == 個人用辞書:
ID_SPELLCHECKER_ADDWORD          == 単語の追加(&A)
ID_SPELLCHECKER_LANGUAGE         == 言語:
#
# Personal dictionary
#
ID_PERSDICT_TITLE                == 個人用辞書
ID_PERSDICT_DICTENTRIES          == 辞書の項目:
ID_PERSDICT_NEWWORD              == 新しい単語:
#
# No dictionary
#
ID_NODICT_NODICTIONARY           == スペルチェッカ用辞書がありません!\n\n以下からダウンロードしてください:
ID_NODICT_INFOINMANUAL           == 詳しくはWinShellマニュアルをご覧ください.
#
# Customize Tool Bar / Macro Bar
#
ID_CUSTOMIZETB_TITLE             == ツールバー・マクロバーの編集
ID_CUSTOMIZETB_CATEGORY          == カテゴリ
ID_CUSTOMIZETB_BUTTONS           == ボタン:
ID_CUSTOMIZETB_HINT              == カテゴリを選択し、ツールバーにドラッグしてください。ボタンをクリックすると説明があります。
ID_CUSTOMIZETB_DESCRIPTION       == 説明:
#
# Customize Tool Bar / Macro Bar -> Change Button
#
ID_CUSTOMIZETB_CB_TITLE          == ボタンの変更
ID_CUSTOMIZETB_CB_IMAGEONLY      == 画像だけ(&I)
ID_CUSTOMIZETB_CB_TEXTONLY       == テキストだけ(&T)
ID_CUSTOMIZETB_CB_IMAGEANDTEXT   == 画像とテキスト(&A)
ID_CUSTOMIZETB_CB_IMAGES         == アイコン:
ID_CUSTOMIZETB_CB_NEW            == 新規(&N)...
ID_CUSTOMIZETB_CB_DESCRIPTION    == 説明:
ID_CUSTOMIZETB_CB_TEXT           == テキスト:
#
# Customize Tool Bar / Macro Bar -> Edit Button
#
ID_CUSTOMIZETB_EB_TITLE          == ボタンの変更
ID_CUSTOMIZETB_EB_IMAGE          == ビルド:
ID_CUSTOMIZETB_EB_COPY           == コピー(&C)
ID_CUSTOMIZETB_EB_PASTE          == 貼り付け(&P)
ID_CUSTOMIZETB_EB_CLEAR          == クリア(&L)
ID_CUSTOMIZETB_EB_COLORS         == 色:
ID_CUSTOMIZETB_EB_PREVIEW        == プレビュー:
ID_CUSTOMIZETB_EB_BACKGROUND     == 背景
#
# BibTeX -> Edit Strings, Preamble, Types, Fields
#
ID_BIBTEX_EDITSTRINGS_TITLE      == 文字列を編集
ID_BIBTEX_EDITSTRINGS_ALIAS      == エイリアス
ID_BIBTEX_EDITSTRINGS_STRING     == 文字列
ID_BIBTEX_EDITPREAMBLE_TITLE     == プリアンブルを編集
ID_BIBTEX_EDITTYPESFIELDS_TITLE  == 型とフィールドを編集
ID_BIBTEX_EDITTYPESFIELDS_TYPE   == 型
ID_BIBTEX_EDITTYPESFIELDS_FIELD  == フィールド
ID_BIBTEX_EDITTYPESFIELDS_RFIELD == 必須フィールド
ID_BIBTEX_EDITTYPESFIELDS_OFIELD == オプションフィールド
ID_BIBTEX_EDITTYPESFIELDS_ITEXT  == 情報テキスト
ID_BIBTEX_EDITTYPESFIELDS_NFIELD == 新しいフィールド
ID_BIBTEX_EDITTYPESFIELDS_NTYPE  == 新しい型
#
# Update Dialog
#
ID_UPDATE_TITLE                  == WinShellの更新
ID_UPDATE_VERSION_LOCAL          == 使用中のバージョン:
ID_UPDATE_VERSION_RELEASE        == 最新のリリースバージョン:
ID_UPDATE_VERSION_BETA           == 最新のベータバージョン:
ID_UPDATE_TIME_LEFT              == 残り時間:
ID_UPDATE_TRANSFER_RATE          == 転送状況:
ID_UPDATE_UPDATE                 == 更新を適応
ID_UPDATE_AUTOUPATE              == アップデートを自動的に確認
#
END_DIALOG

BEGIN_BIBTEX
#
# Generall strings
#
ID_ITEM_UNKNOWN_AUTHOR           == 未知の著者
ID_ITEM_UNKNOWN_TITLE            == 未知のタイトル
ID_ITEM_UNKNOWN_JOURNAL          == 未知のジャーナル
ID_LVIEW_AUTHOR_COLUMN           == 著者
ID_LVIEW_TITLE_COLUMN            == タイトル
ID_LVIEW_YEAR_COLUMN             == 年
ID_LVIEW_LABEL_COLUMN            == ラベル
ID_SVIEW_TITLE_LABEL             == BibTeX項目
ID_SVIEW_TITLE_INFOTEXT          == BibTeX項目の全情報
ID_SVIEW_TYPE_LABEL              == 型
ID_SVIEW_TYPE_INFOTEXT           == BibTeX項目の型を定義
ID_SVIEW_LABEL_LABEL             == ラベル
ID_SVIEW_LABEL_INFOTEXT          == 本文での引用のラベル
ID_SVIEW_REQUIRED_LABEL          == 必須情報
ID_SVIEW_REQUIRED_INFOTEXT       == この項目型の必須情報です
ID_SVIEW_OPTIONAL_LABEL          == オプション情報
ID_SVIEW_OPTIONAL_INFOTEXT       == この項目型のオプション情報です
ID_SVIEW_NOSELECTION_LABEL       == フィールドが選択されていません
ID_SVIEW_NOSELECTION_INFOTEXT    == 記述を見るにはフィールドを選択してください
#
# Field entries
#
ID_FIELD_ADDRESS_INFOTEXT        == 通常, 出版社/所の住所. 大手出版社については, van Leunenによれば, 不要です. 小さな出版社については, 完全な住所を書いておくと便利.
ID_FIELD_AUTHOR_INFOTEXT         == 著者名．書き方はLaTeX book参照 (複数著者は 'and' で区切る).
ID_FIELD_BOOKTITLE_INFOTEXT      == 一部分を引用した本の題名. 書き方はLaTeX book参照. 一冊の本については, ここではなくタイトルフィールドを使う.
ID_FIELD_CHAPTER_INFOTEXT        == 章 (または節など) の番号.
ID_FIELD_CROSSREF_INFOTEXT       == 相互参照する項目のデータベースキー. このレコードにないフィールドは相互参照される項目から引き継がれる.
ID_FIELD_EDITION_INFOTEXT        == 本の版. 例: 'Second' (第2版). 序数を使い, 例のように1字目を大文字にする. 標準スタイルは必要に応じて小文字に変換する.
ID_FIELD_EDITOR_INFOTEXT         == 編者名. 書き方はLaTeX book参照. 著者フィールドが別にあれば，ここにはその論文を含む本または論文集の編者を書く.
ID_FIELD_HOWPUBLISHED_INFOTEXT   == 出版形態 (非標準な形態の場合に使う).
ID_FIELD_INSTITUTION_INFOTEXT    == 技報の提供機関. 出版にかかわっているが出版社である必要はない.
ID_FIELD_ISBN_INFOTEXT           == ISBN: 国際標準図書番号.
ID_FIELD_ISSN_INFOTEXT           == ISSN: 国際標準逐次刊行物番号. ジャーナルに用いられる.
ID_FIELD_JOURNAL_INFOTEXT        == 所載ジャーナルまたは雑誌.
ID_FIELD_MONTH_INFOTEXT          == 出版月 (非出版物なら製作された月).
ID_FIELD_NOTE_INFOTEXT           == 読者の参考になる雑多な情報.
ID_FIELD_NUMBER_INFOTEXT         == ジャーナル, 雑誌, 技報, シリーズものの番号(号). 通常, ジャーナルは巻と号を持つ. 技報も刊行機関によって第何号という番号が振られる. シリーズものの本にも番号が付くことがある.
ID_FIELD_ORGANIZATION_INFOTEXT   == 会議を後援する機関, マニュアルを出版する機関.
ID_FIELD_PAGES_INFOTEXT          == ページ番号. コンマか2重ハイフン(--)で区切る. 形式としては 42--111 や 7,41,73--97 や 43+ がある (最後の例の '+' は単純な範囲でない場合に使う).
ID_FIELD_PUBLISHER_INFOTEXT      == 出版社名.
ID_FIELD_SCHOOL_INFOTEXT         == 論文の書かれた大学など.
ID_FIELD_SERIES_INFOTEXT         == シリーズ本のシリーズ名. 本1冊を参照する場合, タイトルフィールドが本の題名で, オプションのシリーズフィールドがその本を含むシリーズの名前となる.
ID_FIELD_TITLE_INFOTEXT          == その作品(論文等)のタイトル. 書き方はLaTeX book参照.
ID_FIELD_TYPE_INFOTEXT           == 技報の型. 例: 'Research Note' (研究報告).
ID_FIELD_VOLUME_INFOTEXT         == ジャーナルやシリーズ本の巻.
ID_FIELD_URL_INFOTEXT            == Web上のリソースのURL. 報告書のダウンロードできるFTPサイトのアドレスもここに書く.
ID_FIELD_YEAR_INFOTEXT           == 出版年 (非出版物なら製作された年).
#
# Type entries
#
ID_TYPE_ARTICLE_INFOTEXT         == ジャーナル/雑誌の記事.
ID_TYPE_BOOK_INFOTEXT            == はっきりした出版社のある本.
ID_TYPE_BOOKLET_INFOTEXT         == 印刷製本されてはいるが出版社や提供機関のない作品.
ID_TYPE_INBOOK_INFOTEXT          == 本の一部, 例えば一つの章 (または節など) あるいは一連のページ.
ID_TYPE_INCOLLECTION_INFOTEXT    == 本の一部でそれ自身の題名を持つもの.
ID_TYPE_INPROCEEDINGS_INFOTEXT   == 会議のプロシーディングス中のペーパー.
ID_TYPE_MANUAL_INFOTEXT          == 技術文書.
ID_TYPE_MASTERTHESIS_INFOTEXT    == 修士論文.
ID_TYPE_MISC_INFOTEXT            == 他のどれにもあてはまらない型.
ID_TYPE_PHDTHESIS_INFOTEXT       == 博士論文.
ID_TYPE_PROCEEDINGS_INFOTEXT     == 会議のプロシーディングス.
ID_TYPE_TECHREPORT_INFOTEXT      == 大学等の機関から出版される技報. 通常, 第何号という番号が付く.
ID_TYPE_UNPUBLISHED_INFOTEXT     == 著者と題名がある文書だが公式に出版されていないもの.
#
END_BIBTEX
```

***
