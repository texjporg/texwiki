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

## TeX ディストリビューション {#vb660ba1}

Microsoft Windows に TeX をインストールする場合，TeX ディストリビューションの選択肢が複数存在します．<br>
日本語を扱う場合は，問題点の少なさや日本人ユーザの数，日本語情報の多さなどの理由から，TeX Live または W32TeX を選択されることをお薦めします．<br>

- CTAN の豊富なパッケージを使いたい場合は TeX Live
- 最新バイナリを使いたい場合は W32TeX

を選択するといいと思います．

### [W32TeX](/W32TeX/) <a id="w32tex"></a> {#yd4deb73}

W32TeX のインストールについては [W32TeX - TeX Wiki](/W32TeX/) を参照してください．

### [TeX Live](</TeX Live/>) (Win64, Win32) <a id="texlive"></a><a id="texlive-win64-win32"></a> {#ia336ed2}

TeX Live に関する詳細は [TeX Live - TeX Wiki](</TeX Live/>) を参照してください．

#### TeX Live のインストール {#ca517ea6}

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)
- [TeX Live on Windows](http://www.tug.org/texlive/windows.html)

[Installing TeX Live over the Internet](https://www.tug.org/texlive/acquire-netinstall.html) から install-tl-windows.exe をダウンロード後，ダブルクリックします．
全ユーザーに対してインストールする場合は 右クリック → 管理者として実行 を選択します．
基本的には Next や次へなどを押していればインストールはおわります．相当に時間がかかります．1時間くらいは覚悟してください．[アラベのPC関連メモ](http://arb-computer.seesaa.net/article/406943877.html)にはスクリーンショットがあります．

#### アップデート {#g130b940}

スタートメニューから TeX Live Manager を起動することで，アップデートが可能です．

Windows PowerShell またはコマンド プロンプトから

```
tlmgr update --self --all
```

でも行えます．

ただし，アップデートによってパッケージや設定が変更されて，今まで動いていたものが動かなくなったりすることがあるかもしれません．<br>

- C:\texlive\2014\tlpkg\backups

にパッケージのバックアップが保存されます．<br>
アップデートによって動作しなくなった場合は以前のバージョンに戻してください．<br>

パッケージは

- [tlmgr](/tlmgr/) (コマンドライン)
- [TeX Live Manager](</TeX Live Manager/>) (GUI)

で管理できます．<br>

#### extractbb の追加 {#tf06ef9d}

画像などをうめこむ際には，extractbbが自動で実行されるようにしておくと便利です．スタートメニューなどからメモ帳を起動し次のようなファイルを作成してください．（メモ帳ではなくてもテキストエディタならば何でもよいです．）

shell_escape_commands = \\<br>
bibtex,pbibtex,jbibtex,repstopdf,epspdf,extractbb,\\<br>
makeindex,mendex,mpost,pmpost,upmpost,kpsewhich

これを C:\texlive\texmf-local\web2c\texmf.cnf として保存します．なお，メモ帳の場合は，保存画面にて「ファイルの種類」を「全てのファイル (\*.\*)」に変更しておく必要があります．（余計な拡張子 .txt が付加されてしまいます．）

#### TeXworksの設定 {#wa1faa7d}

LaTeX 用のエディタとして TeXworks が TeX Live とともにインストールされています．
手軽で便利なエディタですので，特にこだわりのエディタがなければ使ってみてください．
スタートメニューから起動することで動きます．
ただし，日本語用の設定が必要です．[TeXworks/設定/Windows](</TeXworks/設定/Windows/>)もご覧ください．

#### トラブル対策 {#w1959e65}

失敗しても，再度実行することで成功することがあります．繰り返してみてください．（ダウンロードされているものがまたダウンロードされることはないので，初回よりは早くなります．）

TeX Live をインストールするときにウイルス対策ソフトが原因でインストールできない場合はウイルス対策ソフトを無効にしてから TeX Live をインストールしてください．<br>

- [TeX Live へようこそ！](http://www.baldanders.info/spiegel/log2/000698.shtml)
- [「セキュリティソフト」がインストールの障害になっている例](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1226)

以下も参考に．

- [windowsにtexliveをインストール出来ません](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1126)
- [インストーラーの初期化に失敗しました。](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1124)

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

## [統合環境・エディタ](</TeX用エディタ/>) {#e8efca0f}

LaTeX での文書作成を支援するための統合環境・エディタが各種開発されています．<br>
すでにお気に入りのエディタがある場合は，LaTeX 用のマクロがあるか探してみるとよいでしょう．
特にこだわりのない方は，TeX Live とともにインストールされる TeXworks がお勧めです．（長らく推奨されていた WinShell よりお勧めです．WinShell に関しては[古い情報](</古い情報/>)もご覧ください．）

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

長らく LaTeX ファイルの編集は，dvi によるプレビューがもちいられてきました．
ただ，最近は様々な理由から PDF によるプレビューが推奨されています．（[古い情報](</古い情報/>)も参考に．）
TeXworks には PDF 用のビューアが組み込まれています．
単独の LaTeX 用 PDF プレビューアは [SumatraPDF](/SumatraPDF/) がお勧めです．
