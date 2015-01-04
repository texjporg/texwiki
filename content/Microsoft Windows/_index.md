---
title: "Microsoft Windows"
url: "/Microsoft Windows/"
date: 2014-05-15T22:21:45Z
bookCollapseSection: true
pukiwiki: "Microsoft Windows"
---

# Microsoft Windows

## [Microsoft Windows](http://www.windows.com/) {#i4bf0c85}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Windows_logo_and_wordmark_-_2012.svg/500px-Windows_logo_and_wordmark_-_2012.svg.png" alt="Microsoft Windows" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Windows サポート ライフサイクル {#vc8606da}

- [Windows ライフサイクルのファクト シート - Windows ヘルプ](http://windows.microsoft.com/ja-jp/windows/lifecycle)

### Desktop Operating System Market Share {#zf1b1e52}

- [http://www.netmarketshare.com/operating-system-market-share.aspx?qprid=10&qpcustomd=0](http://www.netmarketshare.com/operating-system-market-share.aspx?qprid=10&qpcustomd=0)

### Desktop Top Operating System Share Trend {#q5f4996d}

- [http://www.netmarketshare.com/operating-system-market-share.aspx?qprid=11&qpcustomb=0](http://www.netmarketshare.com/operating-system-market-share.aspx?qprid=11&qpcustomb=0)

## Windows Update {#k1690f5c}

- [Windows Update 利用の手順](http://www.microsoft.com/ja-jp/security/pc-security/j_musteps.aspx)

## TeX ディストリビューション {#vb660ba1}

Microsoft Windows に TeX をインストールする場合，TeX ディストリビューションの選択肢が複数存在します．<br>
Windows 上では，国際的には [TeX Live](</TeX Live/>) と [MiKTeX](/MiKTeX/) が広く使われています．<br>
日本語を扱う場合は，問題点の少なさや日本人ユーザの数，日本語情報の多さなどの理由から，TeX Live または W32TeX を選択されることをお薦めします．<br>

- CTAN の豊富なパッケージを使いたい場合は TeX Live
- 最新バイナリを使いたい場合は W32TeX

を選択するといいと思います．<br>
普段はパッケージが豊富な TeX Live を使用して最新バイナリの新機能をテストしたり TeX Live に収録されていないプログラムを使用したりする場合に W32TeX を使用するといった使い方もできます．<br>

### [TeX Live](</TeX Live/>) (Win64, Win32) <a id="texlive"></a><a id="texlive-win64-win32"></a> {#ia336ed2}

TeX Live に関する詳細は [TeX Live - TeX Wiki](</TeX Live/>) を参照してください．

#### 動作環境 {#afd7194b}

TeX Live (Win64, Win32) は Visual C++ 2010 でビルドされているため Windows XP 以降で動作します．<br>

#### フォルダー オプション {#la12fe35}

TeX Live をインストールする前に拡張子や隠しファイル、隠しフォルダーおよび隠しドライブを表示する設定をします．<br>

Windows PowerShell または コマンド プロンプトを起動します．<br>

> <table>
> <thead>
> <tr><th style="text-align:center">バージョン</th><th style="text-align:center">Windows PowerShell の起動方法</th></tr>
> </thead>
> <tbody>
> <tr><td>Windows 10</td><td>［Windows キーを押す］-［Search everywhere］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］</td></tr>
> <tr><td>Windows 8.1</td><td>［Windows キー + Q キーを押す］-［検索］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］</td></tr>
> <tr><td>Windows 7</td><td>［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］</td></tr>
> </tbody>
> </table>
>

> <table>
> <thead>
> <tr><th style="text-align:center">バージョン</th><th style="text-align:center">コマンド プロンプトの起動方法</th></tr>
> </thead>
> <tbody>
> <tr><td>Windows 10</td><td>［Windows キーを押す］-［Search everywhere］-［テキストボックスに cmd を入力］-［コマンド プロンプト］</td></tr>
> <tr><td>Windows 8.1</td><td>［Windows キー + Q キーを押す］-［検索］-［テキストボックスに cmd を入力］-［コマンド プロンプト］</td></tr>
> <tr><td>Windows 7</td><td>［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに cmd を入力］-［コマンド プロンプト］</td></tr>
> </tbody>
> </table>
>

Windows PowerShell またはコマンド プロンプトに次のように
打ち込んでフォルダー オプションを表示します．<br>

```
control folders
```

表示タブをクリックします．<br>

- 隠しファイル、隠しフォルダーおよび隠しドライブを表示する

を選択します．<br>

- 登録されている拡張子は表示しない

のチェックをはずします．<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>フォルダー オプション</strong></span>　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 全般　 \]</ins></span><strong>\[ 表示　 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 検索　 \]</ins></span><br>

　　 フォルダーの表示<br>
　　　　　　　　　　　　この表示方法 (詳細表示やアイコンなど) をこの種類のフォルダーす<br>
　　　　　　　　　　　　べてに適用することができます。<br>
　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">\[　　フォルダーに適用(L)　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　フォルダーをリセット(R)　　\]</span><br>

<br>

<br>

　　 詳細設定:<br>
　　　　ファイルおよびフォルダー<br>
　　　　☑ ステータス バーを表示する<br>
　　　　☐ タイトル バーに完全なパスを表示する<br>
　　　　☐ チェックボックスを使用して項目を選択する<br>
　　　　☑ ドライブ文字を表示する<br>
　　　　　ファイルとフォルダーの表示<br>
　　　　　<span style="color:black;background-color:yellow;"><strong>(●) 隠しファイル、隠しフォルダーおよび隠しドライブを表示する ← 選択する</strong></span><br>
　　　　　 ◯ 隠しファイル、隠しフォルダーおよび隠しドライブを表示しない<br>
　　　　☑ フォルダーとデスクトップの項目の説明をポップアップで表示する<br>
　　　　☑ フォルダーのヒントにファイル サイズ情報を表示する<br>
　　　　☑ フォルダーの結合の競合を非表示にする<br>
　　　　☑ プレビュー ウィンドウでプレビューのハンドラーを表示する<br>
　　　　　リスト ビューで入力するとき<br>
　　　　　 ◯ 検索ボックスに自動的に入力する<br>
　　　　　(●) 入力した項目をビューで選択する<br>
　　　　☐ ログオン時に以前のフォルダー ウィンドウを表示する<br>
　　　　☑ 暗号化や圧縮された NTFS ファイルをカラーで表示する<br>
　　　　☑ 共有ウィザードを使用する (推奨)<br>
　　　　☑ 空のドライブは表示しない<br>
　　　　☑ 縮小版にファイル アイコンを表示する<br>
　　　　☐ 常にアイコンを表示し、縮小版は表示しない<br>
　　　　☐ 常にメニューを表示する<br>
　　　　<span style="color:black;background-color:yellow;"><strong>☐ 登録されている拡張子は表示しない ← チェックをはずす</strong></span><br>
　　　　☐ 別のプロセスでフォルダー ウィンドウを開く<br>
　　　　☑ 保護されたオペレーティング システム ファイルを表示しない (推奨)<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値に戻す(D)　　\]</span><br>

***

#### ウイルス対策ソフトについて {#w1959e65}

TeX Live をインストールするときにウイルス対策ソフトが原因でインストールできない場合はウイルス対策ソフトを無効にしてから TeX Live をインストールしてください．<br>

- [TeX Live へようこそ！](http://www.baldanders.info/spiegel/log2/000698.shtml)
- [「セキュリティソフト」がインストールの障害になっている例](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1226)

#### プロキシ経由でインストールする場合 {#wd612118}

プロキシ経由でインストールする場合は [Proxies - GNU Wget Manual](http://www.gnu.org/software/wget/manual/html_node/Proxies.html) を参照して wget で使用するプロキシの設定をしてからインストールしてください．<br>

- [Tex Live 2013をWin7 64-bitマシンにインストール](http://wshinya.hatenablog.com/entry/2013/12/04/140746)
- [プロキシ環境下で Windowsマシンに TeX Live を入れる際のメモ](http://ichiro-maruta.blogspot.jp/2012/04/windows-tex-live.html)

#### TeX Live のインストール {#ca517ea6}

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)
- [TeX Live on Windows](http://www.tug.org/texlive/windows.html)

■■■ ダウンロード ■■■<br>

[TeX Live - TeX Wiki#Network Based Installer](</TeX Live/#tlnet>) のミラーサイトから<br>
install-tl-windows.exe または install-tl.zip をダウンロードします．<br>

■■■ install-tl-windows.exe を使用する場合 ■■■<br>

install-tl-windows.exe をダブルクリックします．<br>
全ユーザーに対してインストールする場合は 右クリック → 管理者として実行 を選択します．<br>
install-tl-windows.exe をダブルクリックして実行した場合は以下の様な画面が表示されます．<br>

***

<span style="color:#007BBB;background-color:#007BBB;"><ins>　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeX Live installer</strong></span>　　　　　　　　　　<span style="color:#007BBB;background-color:#007BBB;"></ins>\[ <span style="color:Black;"><strong>◛</strong></span> \]<ins></span><span style="color:#007BBB;background-color:#007BBB;"></ins>\[ <span style="color:Black;"><strong>▭</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

<br>

　Only single-user install possible.<br>
　For an all-users installation, abort now and re-run as administrator.<br>

<br>

<br>

<br>

　(●) Simple install (big)<br>
　 ◯ Custom install<br>
　 ◯ Unpack only<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　\[　　Cancel　　\]　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[ 　Next >　 \]<br>

***

インストールする場合は \[ 　Next >　 \] をクリックします．<br>
インストールしない場合は \[　　Cancel　　\] をクリックします．<br>

■■■ install-tl.zip を使用する場合 ■■■<br>

install-tl.zip を展開します．<br>
Cygwin の unzip は install-tl.zip の展開に使用しないでください．<br>
インストールに失敗する可能性があります．<br>

- [windowsにtexliveをインストール出来ません](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1126)
- [インストーラーの初期化に失敗しました。](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1124)

■■ install-tl-windows.bat の場合 ■■<br>

■ テキストモードでインストールする場合<br>

テキストモードでリポジトリを指定してインストールする場合は Windows PowerShell またはコマンド プロンプトから

```
.\install-tl-windows.bat -no-gui --repository http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/
```

を実行します．<br>
テキストモードの場合は以下のように表示されます．<br>

```
...
Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit

Enter command: I
```

インストールする場合は I を入力してインストールを開始します．<br>
インストールしない場合は Q を入力して終了します．<br>
サーバーの接続エラーが発生したり，アーカイブ中に予期せぬ EOF があったりした場合はインストールが途中でストップします．<br>
エラーが発生した場合は以下のコマンドで途中から再開できたりできなかったりします．<br>

```
.\install-tl-windows.bat -no-gui --profile installation.profile
```

```
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するかまたは [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．<br>

■ GUI でインストールする場合<br>

install-tl-windows.bat をダブルクリックします．<br>
install-tl-windows.bat を -no-gui オプションを指定せずに実行した場合は以下の様な画面が表示されます．<br>

***

<span style="color:#007BBB;background-color:#007BBB;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Install-tl</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#007BBB;background-color:#007BBB;"></ins>\[ <span style="color:Black;"><strong>◛</strong></span> \]<ins></span><span style="color:#007BBB;background-color:#007BBB;"></ins>\[ <span style="color:Black;"><strong>▭</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

<br>

　　　TeX Live 2014 の導入<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　1/5<br>

<br>

<br>

<br>

　　　TeX Live 2014 導入プログラムへようこそ<br>
　　　&#x68;ttp://tug.org/texlive<br>

<br>

　　　このガイドが、あなたの導入作業のご案内をします。<br>

<br>

　　　導入作業中はウィルス探知器を無効にするのが最善です。<br>

<br>

　　　微調節可能な熟練者向き導入作業については、<br>
　　　ウェブページか導入ガイドをご覧ください。<br>
　　　あるいは install-tl-advanced.batをご使用ください。<br>

<br>

<br>

<br>

　　　<span style="color:black;background-color:yellow;"><strong>☑ 既定リポジトリを変更 ← リポジトリを指定する場合はチェックする</strong></span><br>

<br>

<br>

<br>

　　　\[　　終了　　\]　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[　　次へ→　　\]<br>

***

インストールする場合は \[　　次へ→　　\] をクリックします．<br>
インストールしない場合は \[　　終了　　\] をクリックします．<br>

***

■■ install-tl-advanced.bat の場合 ■■<br>

■ テキストモードでインストールする場合<br>

テキストモードでリポジトリを指定してインストールする場合は管理者として実行した Windows PowerShell またはコマンド プロンプトから

```
.\install-tl-advanced.bat -no-gui --repository http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/
```

を実行します．<br>
テキストモードの場合は以下のように表示されます．<br>

```
...
Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit

Enter command: I
```

インストールする場合は I を入力してインストールを開始します．<br>
インストールしない場合は Q を入力して終了します．<br>
サーバーの接続エラーが発生したり，アーカイブ中に予期せぬ EOF があったりした場合はインストールが途中でストップします．<br>
エラーが発生した場合は以下のコマンドで途中から再開できたりできなかったりします．<br>

```
.\install-tl-advanced.bat -no-gui --profile installation.profile
```

```
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するかまたは [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．<br>

■ GUI でインストールする場合<br>

install-tl-advanced.bat を選択して右クリックして \[管理者として実行(A)\] をクリックします．<br>
管理者として実行していない場合は以下のようなメッセージが表示されます．<br>

***

<span style="color:#007BBB;background-color:#007BBB;"><ins>　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeX Live 2014 の導入</strong></span>　　　　　　　　　<span style="color:#007BBB;background-color:#007BBB;"></ins>\[ <span style="color:Black;"><strong>◛</strong></span> \]<ins></span><span style="color:#007BBB;background-color:#007BBB;"></ins>\[ <span style="color:Black;"><strong>▭</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　導入作業中はウィルス探知器を無効にするのが最善です。<br>

<br>

　本導入プログラムは管理者権限を与えられていません．<br>
　よって，現ユーザー用にしか導入することができません．<br>

<br>

　全ユーザー用に導入したい場合には，install-tl-advancedを右クリックして，<br>
　"runを管理者として選択してください．<br>
　\[ 終了 \]　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[ 続行 \]<br>

***

install-tl-advanced.bat を -no-gui オプションを指定せずに管理者権限で実行した場合は以下の様な画面が表示されます．<br>

***

<span style="color:#007BBB;background-color:#007BBB;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Install-tl</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#007BBB;background-color:#007BBB;"></ins>\[ <span style="color:Black;"><strong>◛</strong></span> \]<ins></span><span style="color:#007BBB;background-color:#007BBB;"></ins>\[ <span style="color:Black;"><strong>▭</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　TeX Live 2014 の導入<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　-------基本情報-------<br>
　　選択したスキーム　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　scheme-full　　　　　　　　　　 \[ 変更 \]<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　-------詳細設定-------<br>
　　導入対象選集　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[ 変更 \]<br>
　　　　　　　　　　　　　　　　　　　　48選集（全 48 選集中） (必要ディスク領域: 3779MB)<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　-------ディレクトリ設定-------<br>
　　可搬設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　いいえ　　　　　　　　　　　　　\[ 入切 \]<br>
　　TEXDIR（TeX主幹ディレクトリ）　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　C:\texlive\2014　　　　　　　　　　\[ 変更 \]<br>
　　TEXMFLOCAL（サイト固有ファイル用ディレクトリ）　　　　　　　　　　　　　　　　C:\texlive\texmf-local　　　　　　　　\[ 変更 \]<br>
　　TEXMFSYSVAR（自動生成データ用ディレクトリ）　　　　　　　　　　　　　　　　C:\texlive\2014\texmf-var　　　　　　\[ 変更 \]<br>
　　TEXMFSYSCONFIG（ローカル設定用ディレクトリ）　　　　　　　　　　　　　　C:\texlive\2014\texmf-config　　　　　 \[ 変更 \]<br>
　　TEXMFHOME（ユーザ固有ファイル用ディレクトリ）　　　　　　　　　　　　　　　　　　　　~\texmf　　　　　　　　　　　　　\[ 変更 \]<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　-------オプション-------<br>
　　既定用紙寸法　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　A4　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　\write18 を用いて制限リスト中のプログラムを実行することを許可　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　フォーマットファイルをすべて生成　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　font と macro の doc ツリーを導入　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　font と macro のソースツリーを導入　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　レジストリの PATH 設定を調整する　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　メニューショートカットを追加　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　ファイル関連付けを変更する　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　新規のみ　　　　　　　　　　　　　　\[ 変更 \]<br>
　　全ユーザ用に導入　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　TeXworks フロントエンドを導入　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　導入後，CTANからパッケージの更新を受け取る　　　　　　　　　　　　　　　　　　　　 はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　\[ TeX Live の導入 \]　　\[ 終了 \]<br>

***

インストールする場合は \[ TeX Live の導入 \] をクリックします．<br>
インストールしない場合は \[ 終了 \] をクリックします．<br>

#### 64-bit バイナリ (tl-win64.zip) {#gc2fed74}

■ HTTP<br>

- [http://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/current/TLW64/](http://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/current/TLW64/)
- [http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/](http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/)
- [http://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/TLW64/](http://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/TLW64/)
- [http://ftp.nara.wide.ad.jp/pub/CTAN/systems/win32/w32tex/TLW64/](http://ftp.nara.wide.ad.jp/pub/CTAN/systems/win32/w32tex/TLW64/)
- [http://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/current/TLW64/](http://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/current/TLW64/)
- [http://ring.nict.go.jp/pub/text/TeX/ptex-win32/current/TLW64/](http://ring.nict.go.jp/pub/text/TeX/ptex-win32/current/TLW64/)
- [http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/)
- [http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/](http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/)
- [http://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/](http://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/)

■ FTP<br>

- [ftp://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/current/TLW64/](ftp://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/current/TLW64/)
- [ftp://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/](ftp://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/)
- [ftp://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/TLW64/](ftp://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/TLW64/)
- [ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/win32/w32tex/TLW64/](ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/win32/w32tex/TLW64/)
- [ftp://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/current/TLW64/](ftp://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/current/TLW64/)
- [ftp://ring.nict.go.jp/pub/text/TeX/ptex-win32/current/TLW64/](ftp://ring.nict.go.jp/pub/text/TeX/ptex-win32/current/TLW64/)
- [ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/)
- [ftp://ftp.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/)
- [ftp://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/](ftp://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/)

から TeX Live の 64-bit バイナリ (tl-win64.zip) が入手できます．<br>
インストール方法は 00README.TLW64 を読んでください．<br>

#### PATH の設定 {#g9863636}

PATH は自動的に設定されるので手動で設定する必要はありません．<br>

Windows PowerShell から

```
$Env:Path
```

またはコマンド プロンプトから

```
path
```

を実行して出力結果に C:\texlive\2014\bin\win32 が表示されていれば PATH が正しく設定されています．<br>

64-bit バイナリを使用する場合は PATH に C:\texlive\2014\bin\win64 を追加して<br>
出力結果に C:\texlive\2014\bin\win64;C:\texlive\2014\bin\win32 が表示されるように設定します．<br>

***

<span style="color:#007BBB;background-color:#007BBB;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>環境変数</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　TeX Live のユーザー環境変数(U)<br>

> <table>
> <tbody>
> <tr><td>変数</td><td>値</td></tr>
> <tr><td>PATH</td><td>C:\texlive\2014\bin\win64;C:\texlive\2014\bin\win32</td></tr>
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

#### アップデート {#g130b940}

アップデートは Windows PowerShell またはコマンド プロンプトから

```
tlmgr update --self --all
```

を実行すれば OK です．<br>

ただし，アップデートによってパッケージや設定が変更されて，今まで動いていたものが動かなくなったりすることがあるかもしれません．<br>

- C:\texlive\2014\tlpkg\backups

にパッケージのバックアップが保存されます．<br>
アップデートによって動作しなくなった場合は以前のバージョンに戻してください．<br>

パッケージは

- [tlmgr](/tlmgr/) (コマンドライン)
- [TeX Live Manager](</TeX Live Manager/>) (GUI)

で管理できます．<br>

#### extractbb の追加 {#tf06ef9d}

TeX Live 2014 はデフォルトでは extractbb が自動実行されません．<br>
TEXMFLOCAL の値を確認します．<br>

```
PS C:\Users\$Env:USERNAME> kpsewhich -var-value TEXMFLOCAL
C:/texlive/texmf-local
```

C:\texlive\texmf-local\web2c\texmf.cnf を作成して編集します．<br>
shell_escape_commands を以下のように編集して保存します．<br>

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,xindy,\
mpost,upmpost,\
repstopdf,epspdf,extractbb
```

mktexlsr を実行します．<br>

```
PS C:\Users\$Env:USERNAME> mktexlsr
```

#### フォント埋め込みの設定 {#h915a565}

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．<br>
IPAexフォントを埋め込む場合は Windows PowerShell またはコマンド プロンプトから

```
kanji-config-updmap-sys ipaex
```

または

```
kanji-config-updmap ipaex
```

を実行します．<br>

TeX Live には IPAex フォント，uptex-ipaex.map が収録されています．<br>

```
PS C:\Users\$Env:USERNAME> kpsewhich ipaexm.ttf ipaexg.ttf
c:/texlive/2014/texmf-dist/fonts/truetype/public/ipaex/ipaexm.ttf
c:/texlive/2014/texmf-dist/fonts/truetype/public/ipaex/ipaexg.ttf

PS C:\Users\$Env:USERNAME> kpsewhich uptex-ipaex.map
c:/texlive/2014/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ipaex/uptex-ipaex.map
```

upLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
ptex2pdf -u -l -ot "-synctex=1" -od "-f uptex-ipaex.map" hoge.tex
```

ヒラギノフォントを埋め込む場合は

- [Windows の TeX Live 2013 でヒラギノフォントを埋め込む方法](http://ichiro-maruta.blogspot.jp/2013/08/windows-tex-live-2013.html)
- [TeX Live 2013 on Windows+ヒラギノOTF版 を使ってPDFにフォントを埋め込む方法](http://yanoshi.hatenablog.jp/entry/2014/01/24/024426)

を参照してください．<br>

#### 文字コードの自動判別 {#se4397b3}

デフォルトの設定では (e-)(u)pTeX を使用するとファイルの文字コードを自動判別します．<br>
texmf.cnf には以下のように設定されています．<br>

```
% Guess input encoding (SJIS vs. Unicode, etc.) in pTeX and friends?
% Default is 0, to not guess.
guess_input_kanji_encoding = 1
```

文字コードの自動判別は失敗することがあります．<br>
[uplatex -guess-input-enc hoge のように文字コードの自動判別機能を使用してタイプセットすると間違った文字コードで判別されてタイプセットされるパターンが存在する](/upTeX,upLaTeX/#zb472e1c) を参照してください．<br>

#### インストールのやり方などの事例 {#w0a33f0d}

[TeX Live（TeX環境）のインストール](http://ryskiwt.blog.fc2.com/blog-entry-28.html)
: 2014-10-14

[Texインストール](http://arb-computer.seesaa.net/article/406943877.html)
: 2014-10-11

[TeX Live と TeXstudio でサクッと Windows 上に LaTeX 環境を構築](http://yksris.hatenablog.com/entry/2014/10/01/143744)
: 2014-10-01

[TeX Live 2014 for Windows](http://www.baldanders.info/spiegel/log2/000730.shtml)
: 2014-09-03

[Windows 8.1 に TeX Live 2014 をインストール](http://qiita.com/ignorant/items/21545cde3c9bbafaa264)
: 2014-08-29

[docs/TeX/TeX on Windows - kyogoku42's](http://www.kyogoku.biz/docs/TeX/TeX%20on%20Windows)
: 2014-08-11

[Windows7で，TeX MAKER＋TeX LiveでTeXの執筆環境を構築する．](http://qiita.com/ConHumi/items/f0d12ab1ad433591c192)
: 2014-07-31

[TeX/Install - PukiWiki](http://glc.l.u-tokyo.ac.jp/pukiwiki/index.php?TeX%2FInstall)
: 2014-06-21

### [TeX Live](</TeX Live/>) ([Cygwin](/Cygwin/)) <a id="texlive-cygwin"></a> {#sfbd073e}

Microsoft Windows 上で動く Linux ライクな環境である [Cygwin](/Cygwin/) に TeX Live をインストールする方法もあります．

- [Cygwin - TeX Wiki](/Cygwin/)

### [TeX Live](</TeX Live/>) ([Linux](/Linux/)) <a id="texlive-linux"></a> {#h0f78970}

VirtualBox などの仮想マシン上に Linux をインストールして TeX Live を使用する方法もあります．<br>
Windows を使用していて LaTeX の実行速度が遅い場合は Linux を使用してください．<br>

- [Linux - TeX Wiki](/Linux/)

***

<span style="color:#DAF0FE;background-color:#DAE0FE;"><ins>　　<span style="color:Black;">ファイル(F)</span>　 <span style="color:Black;">仮想マシン(M)</span>　 <span style="color:Black;">ヘルプ(H)</span>　　　　　　　　　　　　　</ins></span><br>

<br>

　　新規(N)　 設定(S)　 起動(T)　 <span style="color:#888888;">破棄</span><br>
<span style="color:White;background-color:#1188FF;">　　　　　Arch Linux　　　　　　　　　　　　　　　　　　</span><br>

　　　　　CentOS<br>
　　　　　Debian<br>
　　　　　Fedora<br>
　　　　　Linux Mint<br>
　　　　　Lubuntu<br>
　　　　　openSUSE<br>
　　　　　Vine Linux<br>

***

<span style="color:Black;background-color:#DAE0FE;"><ins>　　仮想マシン　 ビュー　 デバイス　 ヘルプ　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

```
$ uplatex -v
e-upTeX 3.14159265-p3.5-u1.11-130605-2.6 (utf8.uptex) (TeX Live 2014)
kpathsea version 6.2.0
ptexenc version 1.3.2
Copyright 2014 D.E. Knuth.
There is NO warranty.  Redistribution of this software is
covered by the terms of both the e-upTeX copyright and
the Lesser GNU General Public License.
For more information about these matters, see the file
named COPYING and the e-upTeX source.
Primary author of e-upTeX: Peter Breitenlohner.
```

***

### [W32TeX](/W32TeX/) <a id="w32tex"></a> {#yd4deb73}

W32TeX のインストールについては [W32TeX - TeX Wiki](/W32TeX/) を参照してください．

### [MiKTeX](/MiKTeX/) {#x2459fb9}

TeX Live, W32TeX の他に MiKTeX もあります．

- [MiKTeX - TeX Wiki](/MiKTeX/)

## パッケージ管理 {#sf700883}

- [Chocolatey NuGet](http://chocolatey.org/)
    <!-- - -http://chocolatey.org/packages/texlive -->

## [統合環境・エディタ](</TeX用エディタ/>) {#e8efca0f}

LaTeX での文書作成を支援するための統合環境・エディタが開発されています．<br>
初心者の方はまずは LaTeX 用の統合環境を使用して LaTeX に慣れるのがいいとおもいます．<br>
エディタ・マクロ・プラグインの種類によって得手不得手があったり不具合が発生したりする場合があります．<br>
問題が発生した場合は別のエディタを使用してください．<br>
人によってエディタの好みは様々なので自分にあったエディタを見つけてください．<br>
見つからない人は自作してみるのもいいかもしれません．<br>

- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

にも Microsoft Windows で使用可能な LaTeX 用の統合環境・エディタが紹介されています．

### フリーソフトウェア (オープンソースソフトウェア) {#e2433aac}

#### Windows, OS X, Linux {#aa9eced6}

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [Texmaker](/Texmaker/)
- [TeXworks](/TeXworks/)
- TexitEasy
- [Eclipse](/Eclipse/)
    - [TeXlipse](/TeXlipse/)
- [Emacs](/Emacs/)
    - [Org mode](</Emacs/Org mode/>) + [YASnippet](/YASnippet/)
    - [TeX mode](</Emacs/TeX mode/>) + [YASnippet](/YASnippet/)
    - [AUCTeX](/AUCTeX/)
    - [YaTeX](/YaTeX/)
- [Vim](/Vim/)
    - [tex.vim](/Vim/tex.vim/) + (vim-latex or LaTeX Box) + [quickrun](/quickrun/) + [neocomplete &amp; neosnippet](/neocomplete/)
    - [Vim-LaTeX](/Vim-LaTeX/)
    - ATP
- [Atom](/Atom/)
- [Brackets](/Brackets/)
- [Light Table](</Light Table/>)
- [gedit](/gedit/)
- [Geany](/Geany/)

#### Windows {#p928a24e}

- [TeXnicCenter](/TeXnicCenter/)
- [Notepad++](/Notepad++/)
    - [NppExec](/NppExec/)
    - [jN](/jN/)
    - [Python Script](</Python Script/>)
- [サクラエディタ](</サクラエディタ/>)
    - [Happy](/Happy/)

## PDF ファイルビューア {#y17ec745}

### フリーソフトウェア (オープンソースソフトウェア) {#m5a5dc1e}

- [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), TexitEasy などは PDF ファイルビューアを内蔵しています．
- [SumatraPDF](/SumatraPDF/)
- [MuPDF](/MuPDF/) a lightweight PDF and XPS viewer．[SumatraPDF](/SumatraPDF/) などで使われています．
- [Poppler](/Poppler/) PDF のレンダリングライブラリ．TeXstudio, Texmaker, TeXworks, TexitEasy などで使われています．
- [Mozilla Firefox (PDF.js)](</Mozilla Firefox/#pdfjs>)
- [Chrome/Chromium PDF Viewer (PDFium)](</Google Chrome/#chromepdfviewer>)

## [BibTeX 関連](</BibTeX関連ツール/>) {#s7d96524}

### フリーソフトウェア (オープンソースソフトウェア) {#kee4f4fe}

- [Zotero](https://www.zotero.org/)
- [JabRef](http://jabref.sourceforge.net/)
- [QRef](http://members3.jcom.home.ne.jp/qref/)
