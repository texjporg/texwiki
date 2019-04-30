---
title: "TeX Live/Windows"
url: "/TeX Live/Windows/"
date: 2015-05-25T19:48:55Z
pukiwiki: "TeX Live/Windows"
---

# TeX Live/Windows

[TeX Live](</TeX Live/>) > [Windows](</Microsoft Windows/>)

***

***

## インストール {#rc65f8ae}

ここでは全てのファイルが入っている ISO イメージをダウンロードする方法と，ネットワークインストーラである install-tl-windows.exe / install-tl.zip を用いる方法，また，64-bit TeX Live Windows バイナリを用いる方法を説明します．

基本的には ISO イメージを用いる方法をおすすめします．

いくつか追加で設定を行っておくと更に便利です．追加設定の項もご覧ください．

### ISO イメージからのインストール {#zc468876}

[Acquiring TeX Live as an ISO image](http://www.tug.org/texlive/acquire-iso.html) から ISO イメージがダウンロードできます．
「download from a nearby CTAN mirror」から，texlive2019.iso をダウンロードしてください．
Windows 10, Windows 8.1, Windows 8 では基本機能で ISO イメージの中身を見ることが可能です．
Windows 7 では ISO イメージの中身を見るには [Virtual CloneDrive](http://www.forest.impress.co.jp/library/software/vclonedrive/) などのソフトウェアが追加で必要です．
ダブルクリックすると BD-ROM/DVD-ROM ドライブとしてマウントされます．
中には install-tl-windows.bat がありますので，後はネットワークインストールと同様の手順でインストールが可能です．

### ネットワークインストーラの場合 {#w369638d}

[Installing TeX Live over the Internet](https://www.tug.org/texlive/acquire-netinstall.html) から install-tl-windows.exe または install-tl.zip のどちらかをダウンロードします．

- install-tl-windows.exe の場合はダウンロード後ダブルクリック（全ユーザにインストールする場合は右クリックから「管理者として実行(A)」を選ぶ）
- install-tl.zip の場合は解凍後 install-tl-windows.bat をダブルクリック（全ユーザにインストールする場合は右クリックから「管理者として実行(A)」を選ぶ）

すればインストーラが起動します．
後は指示に従えば自動でインストールが行われます．

かなりの時間がかかります．
環境にもよりますが，多く場合一時間から二時間ほどかかると思います．

以下は install-tl-windows.exe を右クリックから「管理者として実行(A)」を選んで実行した例です．

以降は TeX Live 2015 の例ですが，TeX Live 2016, TeX Live 2017, TeX Live 2018 でもほとんど変わりません．TeX Live 2019 では Tcl/Tk による GUI インストーラに変更されたため以下の例とは異なります。

<!-- 誰か更新してー -->

[<img src="/attach/TeX Live/Windows/2015_inst1.png" alt="" width="50%">](</attach/TeX Live/Windows/2015_inst1.png>)
[<img src="/attach/TeX Live/Windows/2015_inst2.png" alt="" width="50%">](</attach/TeX Live/Windows/2015_inst2.png>)
[<img src="/attach/TeX Live/Windows/2015_inst3.png" alt="" width="50%">](</attach/TeX Live/Windows/2015_inst3.png>)

- \[Next >\] を押します．
- \[Install\] を押します．
- 待ちます．

[<img src="/attach/TeX Live/Windows/2015_inst4.png" alt="" width="30%">](</attach/TeX Live/Windows/2015_inst4.png>)
[<img src="/attach/TeX Live/Windows/2015_inst5.png" alt="" width="30%">](</attach/TeX Live/Windows/2015_inst5.png>)

- \[次へ→\] を押します．
- 待ちます．

[<img src="/attach/TeX Live/Windows/2015_inst6.png" alt="" width="25%">](</attach/TeX Live/Windows/2015_inst6.png>)
[<img src="/attach/TeX Live/Windows/2015_inst7.png" alt="" width="25%">](</attach/TeX Live/Windows/2015_inst7.png>)
[<img src="/attach/TeX Live/Windows/2015_inst8.png" alt="" width="25%">](</attach/TeX Live/Windows/2015_inst8.png>)

- \[次へ→\] を押します．
- \[次へ→\] を押します．
- \[導入\] を押します．

[<img src="/attach/TeX Live/Windows/2015_inst9.png" alt="" width="30%">](</attach/TeX Live/Windows/2015_inst9.png>)
[<img src="/attach/TeX Live/Windows/2015_inst10.png" alt="" width="30%">](</attach/TeX Live/Windows/2015_inst10.png>)

- インストールが開始されたので待ちます．
    - 大体の場合は二時間程度かかるようです．
- インストールが終わると右の画面になるので \[終了\] を押します．

[<img src="/attach/TeX Live/Windows/2015_inst11.png" alt="" width="30%">](</attach/TeX Live/Windows/2015_inst11.png>)

- 裏にこっそり残っていたこの画面を \[Close\] を押して閉じたらインストールは完了です．

#### 詳細な設定を行う場合 {#l8a32d32}

install-tl.zip を解凍して現れる install-tl-advanced.bat をダブルクリック（または右クリックから「管理者として実行(A)」）するとインストールに関する詳しい設定を行うことができます．

#### テキストモードでのインストール {#f2f98067}

Windows PowerShell またはコマンド プロンプトから install-tl-windows.bat に -no-gui オプションをつけて実行することで，テキストモードでのインストールが可能となります．

> .\install-tl-windows.bat -help

でヘルプを参照してください．

### 64-bit TeX Live Windows バイナリ (tl-win64.zip) {#t70745b0}

64-bit TeX Live Windows バイナリ (tl-win64.zip) も利用できます．

インストール方法は 00README.TLW64 を参照してください．

- <strong>HTTP</strong>
    - [http://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/](http://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/)
    - [http://ctan.ijs.si/mirror/w32tex/current/TLW64/](http://ctan.ijs.si/mirror/w32tex/current/TLW64/)
    - [http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/](http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/)
    - [http://ftp.kddilabs.jp/CTAN/systems/win32/w32tex/TLW64/](http://ftp.kddilabs.jp/CTAN/systems/win32/w32tex/TLW64/)
    - [http://ftp.riken.jp/CTAN/systems/win32/w32tex/TLW64/](http://ftp.riken.jp/CTAN/systems/win32/w32tex/TLW64/)
    - [http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/](http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/)

- <strong>FTP</strong>
    - [ftp://ftp.core.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/](ftp://ftp.core.ring.gr.jp/pub/text/TeX/ptex-win32/current/TLW64/)
    - [ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/win32/TLW64/](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/win32/TLW64/)
    - [ftp://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/](ftp://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/)
    - [ftp://ftp.kddilabs.jp/CTAN/systems/win32/w32tex/TLW64/](ftp://ftp.kddilabs.jp/CTAN/systems/win32/w32tex/TLW64/)
    - [ftp://ftp.riken.jp/CTAN/systems/win32/w32tex/TLW64/](ftp://ftp.riken.jp/CTAN/systems/win32/w32tex/TLW64/)
    - [ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/](ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/TLW64/)

### トラブル時 {#s0045851}

途中でエラーが発生した場合には，もう一度実行してみるとよいかもしれません．
また，インストールフォルダー（デフォルトではC:\texlive\2019）以下の instal-tl.log にはインストール時の情報が書き込まれています．Forum で相談する際などにも有用です．

TeX Live をインストールするときにウイルス対策ソフトが原因でインストールできない場合はウイルス対策ソフトを無効にしてから TeX Live をインストールしてください．

- [Texliveのインストールに失敗する](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=2387)
    （[Re: Texliveのインストールに失敗する#p14036](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=2387#p14036),
    [Re: Texliveのインストールに失敗する#p14035](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=2387#p14035)）

- [TeX Live へようこそ！](http://www.baldanders.info/spiegel/log2/000698.shtml)
- [「セキュリティソフト」がインストールの障害になっている例](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1226)

以下も参考に．

- [windowsにtexliveをインストール出来ません](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1126)
- [インストーラーの初期化に失敗しました。](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1124)

<!-- ***TeXworks の設定 [#wa1faa7d] -->

<!-- LaTeX 用のエディタとして [[TeXworks]] が TeX Live とともにインストールされています． -->
<!-- 手軽で便利なエディタですので，特にこだわりのエディタがなければ使ってみてください． -->
<!-- スタートメニューから起動することで動きます． -->
<!-- ただし，日本語用の設定が必要です → [[TeXworks/設定]] をご覧ください． -->

#### インストールのやり方などの事例 {#w0a33f0d}

TeX Live 2018 対応の事例です．

- [MyTeXpert:TeX Live/Windows](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?TeX%20Live%2FWindows)
- [TeX/Install - 松浦高志のWikiページ](http://user.ecc.u-tokyo.ac.jp/users/user-15826/wiki/?TeX/Install)
- [TeX Live 2018をインストールした](http://alg-d.com/blog/2018/05/03.shtml)
- [そうだ， TeX Live 2017 (for Windows) をインストールしよう！](http://text.baldanders.info/remark/2017/09/install-tex-live-2017-for-windows/) --&gt; [TeX Live 2017 から 2018 へのアップグレード](http://text.baldanders.info/remark/2018/09/upgrade-texlive-from-2017-to-2018/)

<!-- TeX Live 2016 対応の事例です． -->
<!-- -[[Windows 10 に TeX Live 2016 をインストール:http://www.muskmelon.jp/?p=1533]] -->
<!-- -[[ゼロから作るTeX環境 (Windows版):https://qiita.com/umireon/items/b540dc2c83412fc144d2]] -->
<!-- -[[TeX Live 2015 でアップデートされたパッケージ:http://ichiro-maruta.blogspot.jp/2015/06/tex-live-2015-changes.html]] -->
<!-- -[[Windows 8.1 における TeX Live 2015 のセットアップ作業のメモ:http://yoshiiz.blog129.fc2.com/blog-entry-826.html]] -->
<!-- -[[Windows 8.1 における TeX Live 2015 のセットアップ作業のメモ ISO イメージ編:http://yoshiiz.blog129.fc2.com/blog-entry-827.html]] -->
<!-- -[[TeX Live 2015をWindows 8にインストールする:http://qiita.com/makisyu/items/df20f7d51c2bff90ffd3]] -->

<!-- 以下は TeX Live 2014 以前に書かれたものですが，中には統合環境のセットアップや -->
<!-- 不具合対応まで書かれていたりするので，残しておきたいと思います． -->
<!-- もし不要だと判断されたならば，削除ではなくコメントアウトにとどめてください． -->
<!-- ときどき，記事の管理者が同じ URL で最新の TeX Live 対応の追記をすることがあり， -->
<!-- これは意外と（2014 → 2015 とアップデートしたい人などに）有用だったりします． -->
<!-- そして，そんな場合は上の最新記事に“昇格”です． -->

<!-- 念のため TeX Live 2014 対応のものも残しておきます． -->
<!-- -[[TeX Live 2014 for Windows:http://www.baldanders.info/spiegel/log2/000730.shtml]] -->
<!-- -[[Windows 8.1 に TeX Live 2014 をインストール:http://qiita.com/ignorant/items/21545cde3c9bbafaa264]] -->
<!-- -[[TeX Live と TeXstudio でサクッと Windows 上に LaTeX 環境を構築:http://yksris.hatenablog.com/entry/2014/10/01/143744]] -->
<!-- -[[Windows7で，TeX MAKER＋TeX LiveでTeXの執筆環境を構築する．:http://qiita.com/ConHumi/items/f0d12ab1ad433591c192]] -->

## アップデート {#a6223106}

スタートメニューから 「TeX Live 2019」→「TeX Live Manager」 と起動することで，パッケージをアップデートすることが可能です．
「すべてアップデート」を押せば更新されます．
場合によっては（特にインストール直後などは）かなり時間がかかることもあります．

コマンドラインから

```
tlmgr update --self --all
```

でも行えます．

ただし，アップデートによってパッケージや設定が変更されて，今まで動いていたものが動かなくなったりすることがあるかもしれません．

- C:\texlive\2019\tlpkg\backups

にパッケージのバックアップが保存されます．
アップデートによって動作しなくなった場合は以前のバージョンに戻してください．

パッケージは

- [tlmgr](/tlmgr/) (コマンドライン)
- [TeX Live Shell (GUI 版 TeX Live Manager)](</TeX Live Shell/>) (GUI)

で管理できます．

<!-- *仮想マシン上の Linux への TeX Live のインストール [#s797439a] -->

<!-- [[VirtualBox:https://www.virtualbox.org/]] などの仮想マシン上に [[Linux]] をインストールして TeX Live を使用する方法もあります。 -->
<!-- Windows を使用していて LaTeX の実行速度が遅い場合は Linux を使用するのも一つの手です。 -->
