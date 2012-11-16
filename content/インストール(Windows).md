---
title: "インストール(Windows)"
url: "/インストール(Windows)/"
date: 2011-07-23T18:48:25Z
pukiwiki: "インストール(Windows)"
---

# インストール(Windows)

## Microsoft Windows へのインストール {#i4bf0c85}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## TeX ディストリビューションを選択してインストール {#vb660ba1}

Microsoft Windows に TeX をインストールする場合，TeX ディストリビューションの選択肢が複数存在します．<br>
通常は W32TeX または TeX Live がおすすめです．<br>

- 最新のバイナリを使いたい場合は W32TeX
- 最新のパッケージを使いたい場合は TeX Live

を選択するといいと思います．

### [W32TeX](/W32TeX/) {#yd4deb73}

W32TeX のインストールについては AbTeXInstaller - TeX Wiki または [W32TeX - TeX Wiki](/W32TeX/) を参照してください．

### [TeX Live](</TeX Live/>) {#ia336ed2}

TeX Live に関する詳細は [TeX Live - TeX Wiki](</TeX Live/>) を参照してください．

#### TeX Live 2012 (Win32) {#ca517ea6}

- ダウンロード

[TeX Live - TeX Wiki#Network Based Installer#ミラーサイト](</TeX Live/#r2315cab>) から install-tl.zip をダウンロードして install-tl.zip を展開します．<br>

***

- install-tl.bat の場合

install-tl.bat をダブルクリックします．<br>
リポジトリを指定する場合はコマンド プロンプトから

```
>install-tl.bat --repository http://ftp.naist.jp/pub/CTAN/systems/texlive/tlnet/
```

とします．<br> <!-- TeX Live 2012 pretest の場合はコマンド プロンプトから~ --> <!-- >install-tl.bat - -repository http://ftp.math.utah.edu/pub/texlive/tlpretest/ --> <!-- とします．~ -->

***

<span style="color:Black;background-color:#007BBB;"><ins>　　<span style="color:White;"><strong>Install-tl</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

<br>

　　　TeX Live 2012 の導入<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　1/5<br>

<br>

<br>

<br>

　　　TeX Live 2012 の導入へようこそ。<br>
　　　&#x68;ttp://tug.org/texlive<br>

<br>

　　　このウィザードが、あなたのインストールのご案内をします。<br>

<br>

　　　設定可能な、高度な導入を行うには、導入ガイドの<br>
　　　ウェブページをごらんください。<br>
　　　あるいは install-tl-advanced.bat を使用してください。<br>

<br>

<br>

<br>

<br>

<br>

　　　☐ Change default repository<br>

<br>

<br>

<br>

　　　\[　　終了　　\]　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[　　次へ→　　\]<br>

***

インストールする場合は \[　　次へ→　　\] をクリックします．<br>
インストールしない場合は \[　　終了　　\] をクリックします．<br>

***

- install-tl-advanced.bat の場合

install-tl-advanced.bat をダブルクリックします．<br>
リポジトリを指定する場合はコマンド プロンプトから

```
>install-tl-advanced.bat --repository http://ftp.naist.jp/pub/CTAN/systems/texlive/tlnet/
```

とします．<br> <!-- TeX Live 2012 pretest の場合はコマンド プロンプトから~ --> <!-- >install-tl-advanced.bat - -repository http://ftp.math.utah.edu/pub/texlive/tlpretest/ --> <!-- とします．~ -->

***

<span style="color:Black;background-color:#007BBB;"><ins>　　<span style="color:White;"><strong>TeX Live 2012 の導入</strong></span>　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　Best to disable your virus scanner during installation.

<br>

　The installer does not have adminstractive permissions;<br>
　so can only install for current user.<br>

<br>

　Right-click install-tl-advanced and select "run as administrator"<br>
　if you want to install for all users.<br>
　　　\[　　終了　　\]　　　　　　　　　　　　　　　　　　　　　\[ Continue \]<br>

***

<span style="color:Black;background-color:#007BBB;"><ins>　　<span style="color:White;"><strong>Install-tl</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#006AAA;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　TeX Live 2012 の導入<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　-------基本情報-------<br>
　　選択したスキーム　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　scheme-full　　　　　　　　　　 \[ 変更 \]<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　-------追加設定-------<br>
　　標準コレクション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 \[ 変更 \]<br>
　　言語コレクション　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 \[ 変更 \]<br>
　　　　　　　　　　　　　　　　　　85 コレクション（全 85 中） (必要ディスク領域: 3192MB)<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　-------ディレクトリ設定-------<br>
　　かんたん設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　いいえ　　　　　　　　　　　　　\[ 入切 \]<br>
　　TEXDIR（TeX主幹ディレクトリ）　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　C:\texlive\2012　　　　　　　　　 \[ 変更 \]<br>
　　TEXMFLOCAL（サイト固有ファイル用ディレクトリ）　　　　　　　　　　　　　　　　C:\texlive\texmf-local　　　　　　　 \[ 変更 \]<br>
　　TEXMFSYSVAR（自動生成データ用ディレクトリ）　　　　　　　　　　　　　　　　C:\texlive\2012\texmf-var　　　　　 \[ 変更 \]<br>
　　TEXMFSYSCONFIG（ローカル設定用ディレクトリ）　　　　　　　　　　　　　　C:\texlive\2012\texmf-config　　　　　 \[ 変更 \]<br>
　　TEXMFHOME（ユーザ固有ファイル用ディレクトリ）　　　　　　　　　　　　　　　　　　　　~\texmf　　　　　　　　　　　　　\[ 変更 \]<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　-------オプション-------<br>
　　既定用紙寸法　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　A4　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　\write18 を用いて制限リスト中のプログラムを実行することを許可　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　フォーマットファイルをすべて生成　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　font と macro の doc ツリーを導入　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　font と macro のソースツリーを導入　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　レジストリの PATH 設定を調整する　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　\[ 入切 \]<br>
　　メニュー短絡キーを追加　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　ファイル関連付けを変更する　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　新規のみ　　　　　　　　　　　　　　\[ 変更 \]<br>
　　TeXworks フロントエンドを導入　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　　　 \[ 入切 \]<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　\[ TeX Live の導入 \]　　\[ 終了 \]<br>

***

インストールする場合は \[ TeX Live の導入 \] をクリックします．<br>
インストールしない場合は \[ 終了 \] をクリックします．<br>

- 関連付けの変更

TeX Live 2012 をデフォルトの設定でインストールすると <strong>PDF ファイルの関連付けが PS_View に変更されます．</strong><br>
TeX Live の Windows 版には標準で PS_View が含まれていて C:\texlive\2012\tlpkg\tlpsv 以下に配置されています．<br>
C:\texlive\2012\bin\win32\psv.exe をダブルクリックすると PS_View が起動します．<br>
関連付けを Adobe Reader に戻したい場合は以下の作業を行ってください．<br>

1. PDF ファイルを右クリック
1. プロパティ(R)を選択
1. プロパティの全般タブのプログラムで \[変更(C)...\] をクリック
1. ファイルを開くプログラムの選択ウィンドウの推奨されたプログラムで Adobe Reader を選択して \[OK\] をクリック
1. プロパティで \[OK\] をクリック

- PATH の設定

PATH は自動的に設定されるので手動で設定する必要はありません．

- texmf.cnf の編集

C:\texlive\2012\texmf\web2c\texmf.cnf を編集します．

shell_escape_commands が以下のように記述されていると思います．

```
shell_escape_commands = \
bibtex,bibtex8,\
kpsewhich,\
makeindex,\
mpost,\
repstopdf,\
```

shell_escape_commands を以下のように編集して保存します．

```
shell_escape_commands = \
bibtex,bibtex8,bibtexu,pbibtex,upbibtex,biber,\
kpsewhich,\
makeindex,mendex,texindy,\
mpost,pmpost,\
repstopdf,epspdf,extractbb,\
```

- インストールのやり方などの事例

[LuaTeX+SumatraPDF+小塚Pr6N](http://d.hatena.ne.jp/eggtoothcroc/20121117/p1)
: 2012-11-17

[TeXのインストール – TeX Live](http://www.netplan.co.jp/archives/2151)<br>[TeXworksの設定](http://www.netplan.co.jp/archives/2167)
: 2012-10-17

[TeX Live 2012 と日本語](http://torip.whitesnow.jp/?p=1020)
: 2012-10-03

[TeX Live 2012をWindows 7 (64bit)環境にインストールしたメモ](http://d.hatena.ne.jp/hyuki/20120915/tex)
: 2012-09-15

[組版メモ 2](http://x19290.appspot.com/pbej-tmp/typeset2.html)
: 2012-08-22

- [install-tl-guide](https://github.com/x19290/install-tl-guide)

\[[Windows\] TeX Live 2012 インストール](http://d.hatena.ne.jp/hidehara/20120724/1343147231)
: 2012-07-24

[TeX Live 2012 on Windows （改訂版）](http://blogs.yahoo.co.jp/igproj_fusion/15803621.html)
: 2012-07-17

[蝶](http://takeittheworld.blog15.fc2.com/blog-entry-822.html)
: 2012-07-13

#### TeX Live ([Cygwin](/Cygwin/)) {#sfbd073e}

Microsoft Windows 上で動く Linux (UNIX&reg; 互換システム) ライクな環境である [Cygwin](/Cygwin/) に日本語 TeX 環境を作るという手もあります。

- [Cygwin - TeX Wiki](/Cygwin/)

### [MiKTeX](/MiKTeX/) {#x2459fb9}

W32TeX, TeX Live 以外に MiKTeX といった TeX ディストリビューションもあります．

- [MiKTeX - TeX Wiki](/MiKTeX/)

## Perl のインストール {#u9e265db}

TeX 関連プログラムには Perl で書かれたスクリプトがあります．<br>
Perl で書かれたスクリプトを実行するには Perl の処理系が必要です．<br>

- [Strawberry Perl](http://strawberryperl.com/)

perl.exe を C:\strawberry\perl\bin にインストールした場合は

```
;C:\strawberry\perl\bin
```

を環境変数 PATH に追加します

## Python のインストール {#cc86c15a}

TeX 関連プログラムには Python で書かれたスクリプトがあります．<br>
Python で書かれたスクリプトを実行するには Python の処理系が必要です．<br>

- [Python Programming Language &ndash; Official Website](http://www.python.org/)

python.exe を C:\Python27 にインストールした場合は

```
;C:\Python27
```

を環境変数 PATH に追加します

python.exe を C:\Python33 にインストールした場合は

```
;C:\Python33
```

を環境変数 PATH に追加します

## Ruby のインストール {#w18e586b}

TeX 関連プログラムには Ruby で書かれたスクリプトがあります．<br>
convbkmk.rb などの Ruby で書かれたスクリプトを実行するには Ruby の処理系が必要です．<br>

- [RubyInstaller for Windows](http://rubyinstaller.org/)

ruby.exe を C:\Ruby193\bin にインストールした場合は

```
;C:\Ruby193\bin
```

を環境変数 PATH に追加します

## [SumatraPDF](/SumatraPDF/) のインストール {#sbe939df}

[SumatraPDF - TeX Wiki](/SumatraPDF/) をご覧ください．

## [TeX 用エディタ](</TeX用エディタ/>)のインストール（オプション） {#e8efca0f}

LaTeX での文書作成を支援するための統合環境・エディタが開発されています．<br>
初心者の方はまずは LaTeX 用の統合環境を使用して LaTeX に慣れるのがいいとおもいます．<br>
エディタ・マクロ・プラグインの種類によって得手不得手があったり不具合が発生したりする場合があるので複数のエディタを使い分けるのもいいかもしれません．<br>
人によってエディタの好みは様々なので自分にあったエディタを見つけてください．<br>
見つからない人は自作してみるのもいいかもしれません．<br>

### フリーソフトウェア (オープンソースソフトウェア) {#e2433aac}

[LyX](/LyX/)
: [LyX](/LyX/) をご覧ください．

[TeXworks](/TeXworks/)
: [TeXworks](/TeXworks/) をご覧ください．

[Texmaker](/Texmaker/)
: [Texmaker](/Texmaker/) をご覧ください．

[TeXstudio](/TeXstudio/)
: [TeXstudio](/TeXstudio/) をご覧ください．

[Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/)
: [Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/) をご覧ください．

[Emacs](/Emacs/) + tex-mode or org-mode
: [Emacs](/Emacs/) + [TeX Mode](/Emacs/#h04d4173)<br>[Emacs](/Emacs/) + [AUCTeX](/AUCTeX/)<br>[Emacs](/Emacs/) + [YaTeX](/YaTeX/)<br>[Emacs](/Emacs/) + Org<br>をご覧ください．

[Vim](/Vim/) + プラグイン
: [Vim](/Vim/) + [tex.vim](/Vim/#y0b061e7) + neocomplcache &amp; neosnippet<br>[Vim](/Vim/) + [Vim-LaTeX](/Vim-LaTeX/)<br>[Vim](/Vim/) + Automatic LaTeX Plugin for Vim (ATP)<br> をご覧ください．

[xyzzy](/xyzzy/) + tex-mode
: [xyzzy](/xyzzy/) + KyoTeX<br>[xyzzy](/xyzzy/) + [KaTeX](/KaTeX/)<br>をご覧ください．

[Notepad++](/Notepad++/) + プラグイン
: [Notepad++](/Notepad++/)[#プラグイン](/Notepad++/#k2155ff2) をご覧ください．

[サクラエディタ](</サクラエディタ/>) + マクロ
: [サクラエディタ](</サクラエディタ/>)[#マクロ](</サクラエディタ/#k75075b0>) をご覧ください．

jEdit + プラグイン
: jEdit#プラグイン<br>をご覧ください．

Gummi
: Gummi をご覧ください．

[TeXnicCenter](/TeXnicCenter/)
: [TeXnicCenter](/TeXnicCenter/) をご覧ください．

### フリーウェア (無料) {#k0b8f900}

EasyTeX
: EasyTeX をご覧ください．

[WinShell](/WinShell/)
: [WinShell](/WinShell/) をご覧ください．

Yotuba TeX Editor
: Yotuba TeX Editor をご覧ください．

Visual Windows for TeX
: Visual Windows for TeX をご覧ください．

Masamichi
: Masamichi をご覧ください．

### シェアウェア {#yec6bbe1}

[秀丸エディタ](</秀丸エディタ/>) (シェアウェア) + マクロ
: [秀丸エディタ](</秀丸エディタ/>)[#マクロ](</秀丸エディタ/#m32041fb>) をご覧ください．

Sublime Text (シェアウェア) + LaTeXTools (LaTeX Plugin for Sublime Text 2)
: Sublime Text#LaTeXTools (LaTeX Plugin for Sublime Text 2) をご覧ください．

### 製品 {#jc4ae1f8}

InftyEditor (製品)
: InftyEditor をご覧下さい．<br>InftyEditor 学生版と InftyEditor 英語版はフリーウェア (無料) です．

Scientific WorkPlace (製品)
: Scientific WorkPlace をご覧ください．

WZ EDITOR (製品)
: WZ EDITOR をご覧ください．
